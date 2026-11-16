import { Link } from "react-router-dom";

interface MatchCardProps {
  team1: string;
  team2: string;
  venue: string;
  date: string;
}

function MatchCard({ team1, team2, venue, date }: MatchCardProps) {
  return (
    <div className="match-card">

      <div className="match-badge">IPL MATCH</div>

      <h2>{team1} <span>VS</span> {team2}</h2>

      <div className="match-info">
        <p>🏟️ {venue}</p>
        <p>📅 {date}</p>
      </div>

      <Link to="/booking" className="match-book-btn">
        Book Tickets →
      </Link>

    </div>
  );
}

export default MatchCard;