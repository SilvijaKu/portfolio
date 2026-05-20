import "./About.css";

import htmlIcon from "./images/icons/html.png";
import cssIcon from "./images/icons/css.png";
import jsIcon from "./images/icons/js.png";
import figmaIcon from "./images/icons/figma.png";
import photoshopIcon from "./images/icons/photoshop.png";
import illustratorIcon from "./images/icons/illustrator.png";
import cppIcon from "./images/icons/cpp.png";
import reactIcon from "./images/icons/react.png";

function About() {

  const tools = [

    { name: "HTML", image: htmlIcon },
    { name: "CSS", image: cssIcon },
    { name: "JavaScript", image: jsIcon },
    { name: "Figma", image: figmaIcon },
    { name: "Photoshop", image: photoshopIcon },
    { name: "Illustrator", image: illustratorIcon },
    { name: "C++", image: cppIcon },
    { name: "React", image: reactIcon }

  ];

  return (
    <section className="about-section" id="about">

      <div className="about-card">

        <div className="about-left">

          <h2>Apie mane</h2>

          <p>
            Esu Silvija, 22 metų multimedijos ir kompiuterinio dizaino studentė
            Vilnius Tech universitete. Domiuosi front-end svetainių kūrimu ir UI/UX dizainu.
          </p>

          <p>
            Kuriu svetaines naudodama <span>HTML, CSS, React, JavaScript ir PHP</span>,
            taip pat turiu pagrindus duomenų bazėse.
          </p>

          <p>
            Be programavimo, kuriu iliustracijas Adobe Illustrator,
            kurios padeda vizualiai pagerinti projektus.
          </p>

          <p>
            Ateityje siekiu dirbti su interneto svetainių ar programėlių kūrimu bei dizainu.
          </p>

        </div>

        <div className="about-right">

          <h3>Įrankiai</h3>

          <div className="about-line"></div>

          <div className="tools">

            {tools.map((tool, index) => (

              <div className="tool-pill" key={index}>

                <img
                  src={tool.image}
                  alt={tool.name}
                  className="tool-icon"
                />

                {tool.name}

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
