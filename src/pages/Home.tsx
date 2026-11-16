import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">

      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-tag">
            🏏 THE IPL EXPERIENCE
          </span>

          <h1>
            Experience the
            <span> Thrill of Cricket</span>
          </h1>

          <p>
            Feel the excitement, support your favourite team
            and experience every moment live at the stadium.
          </p>

          <div className="hero-buttons">

            <Link to="/matches" className="primary-btn">
              Explore Matches →
            </Link>

            <Link to="/booking" className="secondary-btn">
              Book Your Tickets
            </Link>

          </div>

        </div>

        <div className="hero-icon">
          🏏
        </div>

      </section>

      <section className="features-section">

        <h2>Why Book With Us?</h2>

        <div className="features-grid">

          <div className="feature-card">
            <span>🎟️</span>
            <h3>Easy Booking</h3>
            <p>Book your favourite match tickets easily.</p>
          </div>

          <div className="feature-card">
            <span>🏟️</span>
            <h3>Multiple Venues</h3>
            <p>Choose your preferred stadium and stand.</p>
          </div>

          <div className="feature-card">
            <span>📋</span>
            <h3>Booking History</h3>
            <p>View your previous ticket bookings anytime.</p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;