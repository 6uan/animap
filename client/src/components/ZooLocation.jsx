import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ZooLocation = () => {
  const { locationName } = useParams();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3001/events");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        console.log(data.location);
        console.log(locationName);
        // Filter events by location
        const filteredEvents = data.filter(
          (event) => event.location === locationName
        );
        setEvents(filteredEvents);
        console.log(events);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [locationName]);

  // Handle loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Guard clause to ensure locationName is defined before using it
  if (!locationName) {
    return <div>No location specified.</div>;
  }

  return (
    <div>
      <h1 className="mb-8 text-center text-3xl font-bold">
        {locationName ? locationName.replace(/([A-Z])/g, " $1").trim() : ""}{" "}
        Events
      </h1>
      <div className="grid gap-4">
        {events.length ? (
          events.map((event) => (
            <div key={event.id} className="bg-white p-4 shadow-md">
              <h2 className="text-xl font-bold">{event.name}</h2>
              <p>{event.description}</p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(event.eventdate).toLocaleString()}
              </p>
              <p>
                <strong>Audience:</strong> {event.audience}
              </p>
              <p>
                <strong>Price:</strong> {event.price}
              </p>
            </div>
          ))
        ) : (
          <p>No events available for this location.</p>
        )}
      </div>
    </div>
  );
};

export default ZooLocation;
