import { pool } from "../config/database.js";

const getEvents = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM events ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getEventById = async (req, res) => {
  const eventId = req.params.eventId;

  try {
    const results = await pool.query("SELECT * FROM events WHERE id = $1", [
      eventId,
    ]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

// New function to get events by location
const getEventsByLocation = async (req, res) => {
  const locationName = req.params.locationName;

  try {
    const results = await pool.query(
      "SELECT * FROM events WHERE location = $1",
      [locationName]
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default { getEvents, getEventById, getEventsByLocation };
