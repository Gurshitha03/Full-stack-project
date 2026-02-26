import Navbar from "../components/Navbar";
import heroImage from "../assets/images/abstract.jpg";  // use your background image
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <div
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-content">
          <h1>ARTVISTA</h1>
          <p>Designers and Influencers Share the Art That Moves Them</p>

        </div>
      </div>
    </div>
  );
}

export default Home;