import { useEffect, useState } from "react";
import { supabase } from "../supabase";

interface Booking {
  id: number;
  name: string;
  tickets: number;
  stand: string;
  venue: string;
  created_at: string;
}

function BookingHistory() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBookings = async () => {
    setLoading(true);
    setError("");

    try {
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setBookings(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load bookings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <main className="history-page">
      <div className="history-heading">
        <span>🏏 IPL TICKET RESERVATION</span>
        <h1>Booking History</h1>
        <p>View all your previous ticket bookings.</p>
      </div>

      <div className="history-list">
        {loading ? (
          <p className="no-bookings">Loading your bookings...</p>
        ) : error ? (
          <p className="history-error">Error: {error}</p>
        ) : bookings.length === 0 ? (
          <p className="no-bookings">No bookings found yet.</p>
        ) : (
          bookings.map((booking) => (
            <section className="history-card" key={booking.id}>
              <h3>🎟️ Booking #{booking.id}</h3>

              <p>Name: <strong>{booking.name}</strong></p>
              <p>Tickets: <strong>{booking.tickets}</strong></p>
              <p>Stand: <strong>{booking.stand}</strong></p>
              <p>Venue: <strong>{booking.venue}</strong></p>
              <p>
                Booking Date:{" "}
                <strong>
                  {new Date(booking.created_at).toLocaleString("en-IN")}
                </strong>
              </p>
            </section>
          ))
        )}

        <button
          className="match-book-btn"
          onClick={fetchBookings}
          disabled={loading}
        >
          {loading ? "Loading..." : "Refresh Booking History"}
        </button>
      </div>
    </main>
  );
}

export default BookingHistory;