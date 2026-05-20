import "./Projects.css";
import ProjectCard from "./ProjectCard";
import startup1 from "./images/startup1.png";
import startup2 from "./images/startup2.png";
import bmw1 from "./images/bmw1.png";
import bmw2 from "./images/bmw2.png";
import puodelis from "./images/puodelis.png";
import bustas from "./images/mano-bustas.png";
import personazas from "./images/personazas.png";
import kuromi from "./images/kuromi.png";

function Projects() {
  const projects = [
    {
      id: 1,
      image: startup1,
      category: "Web Design",
      title: "Startup",
      description: "Mano pirmas nuo 0 su HTML ir CSS padarytas puslapis.",
      tech: "HTML • CSS",
      liveLink: "https://silvijaku.github.io/startup-landing-page/",
      codeLink: "https://github.com/SilvijaKu/startup-landing-page"
    },

    {
      id: 2,
      image: startup2,
      category: "Web Design",
      title: "Startup registracija",
      description: "Prisijungimo ir registracijos puslapio dizainas.",
      tech: "HTML • CSS",
      liveLink: "https://silvijaku.github.io/startup-landing-page/",
      codeLink: "https://github.com/SilvijaKu/startup-landing-page"
    },

    {
      id: 3,
      image: bmw1,
      category: "Web Design",
      title: "BMW dalių parduotuvė",
      description: "Šį puslapį sukūriau naudojant HTML, CSS, PHP ir MariaDB.",
      tech: "HTML • CSS • PHP • MariaDB",
      liveLink: "https://bmw-part-store.infinityfree.me",
      codeLink: "https://github.com/SilvijaKu/bmw-parts-store"
    },

    {
      id: 4,
      image: bmw2,
      category: "Web Design",
      title: "BMW parduotuvė",
      description: "Puslapio katalogo ir produktų sekcija.",
      tech: "HTML • CSS • PHP • MariaDB",
      liveLink: "https://bmw-part-store.infinityfree.me",
      codeLink: "https://github.com/SilvijaKu/bmw-parts-store"
    },

    {
      id: 5,
      image: puodelis,
      category: "Photoshop",
      title: "Puodelis",
      description: "Darbas padarytas universitetui.",
      tech: "Adobe Photoshop",
      liveLink: puodelis,
      codeLink: ""
    },

    {
      id: 6,
      image: bustas,
      category: "Photoshop",
      title: "Plakatas „Mano būstas“",
      description: "Plakatas, logo ir pastatai padaryti naudojant Photoshop.",
      tech: "Adobe Photoshop • Adobe Illustrator",
      liveLink: bustas,
      codeLink: ""
    },

    {
      id: 7,
      image: personazas,
      category: "Illustrator",
      title: "Personažas",
      description: "Darbas sukurtas universitetui.",
      tech: "Adobe Illustrator",
      liveLink: personazas,
      codeLink: ""
    },

    {
      id: 8,
      image: kuromi,
      category: "Illustrator",
      title: "Kuromi",
      description: "Darbas sukurtas naudojant pen tool ir figūras.",
      tech: "Adobe Illustrator",
      liveLink: kuromi,
      codeLink: ""
    }
  ];

  return (
    <section className="projects-section container" id="projects">
      <h2 className="projects-title">Mano darbai</h2>

      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-12 col-md-6 col-lg-4" key={project.id}>
            <ProjectCard
              key={project.id}
              id={project.id}
              image={project.image}
              category={project.category}
              title={project.title}
              description={project.description}
              tech={project.tech}
              liveLink={project.liveLink}
              codeLink={project.codeLink}
            />
          </div>
        ))}
      </div>
    </section>
    );
}

export default Projects;