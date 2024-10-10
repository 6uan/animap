import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ZooLocation = () => {
  const { locationName } = useParams();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events by location from the new API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/events/location/${locationName}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data);
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
    return (
      <div className="mt-72 flex h-auto w-full items-center justify-center py-10">
        <p className="animate-pulse text-9xl font-extrabold text-black">
          Loading...
        </p>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Guard clause to ensure locationName is defined before using it
  if (!locationName) {
    return <div>No location specified.</div>;
  }

  return (
    <div className="relative flex h-auto flex-col items-center justify-center bg-[#6f8177] px-32">
      <h1 className="font-source-code mt-8 py-10 text-center text-7xl font-bold uppercase">
        {locationName.replace(/([A-Z])/g, " $1").trim()} Events
      </h1>
      <div className="grid grid-cols-3 gap-3 pb-32">
        {events.length ? (
          events.map((event) => (
            <div
              key={event.id}
              className="font-source-code flex h-auto flex-col bg-white shadow-md"
            >
              <div className="h-40 w-full p-0">
                <img
                  src={event.image}
                  alt={event.name}
                  className="h-full w-full overflow-hidden object-cover"
                />
              </div>
              <div className="flex flex-grow flex-col justify-between">
                <h2 className="w-[24ch] pl-4 pt-2 text-2xl font-extrabold">
                  {event.name}
                </h2>
                <p className="p-4 text-sm font-light text-gray-700">
                  {event.description}
                </p>
                <div className="flex flex-col">
                  <p className="pl-4">
                    <strong>Date:</strong>{" "}
                    {new Date(event.eventdate).toLocaleString()}
                  </p>
                  <p className="pl-4">
                    <strong>Audience:</strong> {event.audience}
                  </p>
                  <p className="pb-4 pl-4">
                    <strong>Price:</strong> {event.price}
                  </p>
                </div>
              </div>
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
