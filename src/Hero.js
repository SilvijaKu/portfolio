import "./Hero.css";
import Blob from "./Blob";
import heroImage from "./images/silvija.jpg";

function Hero() {
  return (
    <section className="hero-section">

      <div className="hero-left">

        <p className="hero-small">
          Sveiki, aš esu Silvija
        </p>

        <h1 className="hero-title">
          Web kūrėja ir <br />
          <span>grafikos dizainerė</span>
        </h1>

        <p className="hero-text">
          Kuriu interneto svetaines ir
          vizualinius sprendimus.
        </p>
        
        <a href="#projects">
          <button className="hero-button">
          Mano darbai ↓
          </button>
        </a>

      </div>

      <div className="hero-right">

        <Blob />

        <img
          src={heroImage}
          alt="Silvija"
          className="hero-image"
        />

      </div>

    </section>
  );
}

export default Hero;