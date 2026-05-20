function ProjectCard(props) {
  return (
    <>

      <div className="project-card">

        <img
          src={props.image}
          alt={props.title}
          className={`project-image ${props.category === "Web Design" ? "web" : ""}`}
        />

        <p className="project-category">{props.category}</p>
        <h3>{props.title}</h3>
        <p className="project-description">{props.description}</p>
        <p className="project-tech">{props.tech}</p>

        <div className="project-buttons">

          {props.category === "Web Design" ? (

            <a
              href={props.liveLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm project-btn"
            >
              Peržiūrėti
            </a>

          ) : (

            <button
              type="button"
              className="btn btn-sm project-btn"
              data-bs-toggle="modal"
              data-bs-target={`#modal${props.id}`}
            >
              Peržiūrėti
            </button>

          )}

          {props.codeLink !== "" && (

            <a
              href={props.codeLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm project-btn-outline"
            >
              Kodas
            </a>

          )}

        </div>

      </div>

      <div
        className="modal fade"
        id={`modal${props.id}`}
        tabIndex="-1"
      >

        <div className="modal-dialog modal-dialog-centered modal-xl">

          <div className="modal-content image-modal-content">

            <button
              type="button"
              className="btn-close modal-close"
              data-bs-dismiss="modal"
            ></button>

            <img
              src={props.image}
              alt={props.title}
              className="modal-preview-image"
            />

          </div>

        </div>

      </div>

    </>
  );
}

export default ProjectCard;