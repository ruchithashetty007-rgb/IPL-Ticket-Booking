import MatchCard from "../components/MatchCard";

function Matches() {
  const matches = [
    {
      id: 1,
      team1: "RCB",
      team2: "CSK",
      venue: "M. Chinnaswamy Stadium, Bengaluru",
      date: "Sample Fixture 1"
    },
    {
      id: 2,
      team1: "MI",
      team2: "KKR",
      venue: "Wankhede Stadium, Mumbai",
      date: "Sample Fixture 2"
    },
    {
      id: 3,
      team1: "SRH",
      team2: "RR",
      venue: "Rajiv Gandhi International Stadium, Hyderabad",
      date: "Sample Fixture 3"
    },
    {
      id: 4,
      team1: "DC",
      team2: "PBKS",
      venue: "Arun Jaitley Stadium, Delhi",
      date: "Sample Fixture 4"
    }
  ];

  return (
    <main className="matches-page">

      <div className="matches-heading">
        <span>🏏 CRICKET FEVER</span>
        <h1>Explore IPL Matches</h1>
        <p>Choose your favourite match and book your stadium experience.</p>
      </div>

      <div className="matches-grid">

        {matches.map((match) => (
          <MatchCard
            key={match.id}
            team1={match.team1}
            team2={match.team2}
            venue={match.venue}
            date={match.date}
          />
        ))}

      </div>

    </main>
  );
}

export default Matches;