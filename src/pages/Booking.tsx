import { useState } from "react";
import { supabase } from "../supabase";

function Booking() {
  const [name, setName] = useState("");
  const [tickets, setTickets] = useState("");
  const [stand, setStand] = useState("");
  const [venue, setVenue] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    if (!name.trim() || !tickets || !stand || !venue) {
      setMessage("Please fill in all the fields.");
      return;
    }

    if (Number(tickets) < 1 || !Number.isInteger(Number(tickets))) {
      setMessage("Please enter a valid number of tickets.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("bookings")
      .insert([
        {
          name: name.trim(),
          tickets: Number(tickets),
          stand,
          venue,
        },
      ]);

    setLoading(false);

    if (error) {
      setMessage("Booking failed: " + error.message);
      return;
    }

    setMessage("Your ticket booking was successful!");

    setName("");
    setTickets("");
    setStand("");
    setVenue("");
  };

  return (
    <main className="booking-page">
      <div className="booking-heading">
        <span>🏏 IPL TICKET RESERVATION</span>
        <h1>Book Your Ticket</h1>
        <p>Fill in your details and reserve your stadium experience.</p>
      </div>

      <div className="booking-container">
        <form className="booking-form" onSubmit={handleBooking}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="tickets">Number of Tickets</label>
          <input
            id="tickets"
            type="number"
            min="1"
            step="1"
            value={tickets}
            onChange={(e) => setTickets(e.target.value)}
            placeholder="Enter number of tickets"
            required
          />

          <label htmlFor="stand">Select Stand</label>
          <select
            id="stand"
            value={stand}
            onChange={(e) => setStand(e.target.value)}
            required
          >
            <option value="">-- Select Stand --</option>
            <option value="General Stand">General Stand</option>
            <option value="VIP Stand">VIP Stand</option>
          </select>

          <label htmlFor="venue">Select Venue</label>
          <select
            id="venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            required
          >
            <option value="">-- Select Venue --</option>
            <option value="Wankhede Stadium">Wankhede Stadium</option>
            <option value="M. Chinnaswamy Stadium">
              M. Chinnaswamy Stadium
            </option>
          </select>

          <button type="submit" disabled={loading}>
            {loading ? "Booking..." : "Confirm Booking"}
          </button>

          {message && <p className="booking-message">{message}</p>}
        </form>

        <section className="booking-details">
          <h3>Booking Summary</h3>

          <p>Name: <strong>{name || "-"}</strong></p>
          <p>Tickets: <strong>{tickets || "-"}</strong></p>
          <p>Stand: <strong>{stand || "-"}</strong></p>
          <p>Venue: <strong>{venue || "-"}</strong></p>
        </section>
      </div>
    </main>
  );
}

export default Booking;