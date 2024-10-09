import { pool } from "./database.js";
import "./dotenv.js";
import eventData from "../data/events.js"; // Assuming your event data file is now called 'events.js'

const createEventsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        eventDate TIMESTAMP NOT NULL,
        audience VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        peopleAttending INTEGER NOT NULL,
        location VARCHAR(255) NOT NULL,
        image VARCHAR(255),
        submittedBy VARCHAR(255) NOT NULL,
        submittedOn TIMESTAMP NOT NULL,
        price VARCHAR(10) NOT NULL
    )
`;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 events table created successfully");
  } catch (err) {
    console.error("⚠️ error creating events table", err);
  }
};

const seedEventsTable = async () => {
  await createEventsTable();

  // Loop over the locations (keys) and events (values)
  for (const [location, events] of Object.entries(eventData)) {
    events.forEach((event) => {
      const insertQuery = {
        text: "INSERT INTO events (name, eventDate, audience, description, peopleAttending, location, image, submittedBy, submittedOn, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
      };

      const values = [
        event.name,
        event.eventDate,
        event.audience,
        event.description,
        event.peopleAttending,
        location, // The key of eventData (e.g., 'Tropical Aviary') will be the location
        event.image,
        event.submittedBy,
        event.submittedOn,
        event.price,
      ];

      pool.query(insertQuery, values, (err, res) => {
        if (err) {
          console.error("⚠️ error inserting event", err);
          return;
        }

        console.log(`✅ ${event.name} added successfully under ${location}`);
      });
    });
  }
};

seedEventsTable();
