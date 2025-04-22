import ProjectList from '../data/projects.json';


console.log(ProjectList);


export const Card = () => {
  return (
    <>
      {ProjectList.projects.map((project, id) => (



        <section className="cardContainer" key={id}>

          <div className="projectTags">
            {project.tags.map((tag, index) => (
              <p key={index} className="tag">{tag}</p>
            ))}
          </div>
          <img className="projectImg" src={project.image} alt="project-image" />
          <p className='tag'>{project.collab}</p>
          <h2>{project.name} </h2>

          <p>{project.info}</p>

          <div className="projectButtons">
            <a href={project.netlify} target="_blank" rel="noopener noreferrer" className="button">
              Live demo
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="button">
              View code
            </a>
          </div>
        </section>

      ))}

      {/* <section className="cardContainer">
        <div className="projectTags">
          <button>TypeScript</button>
          <button>JavaScript</button>
          <button>CSS3</button>
          <button>HTML5</button>
        </div>

        <img src="." alt="project-image"></img>

        <button>Team project</button>
        <h2></h2>

        <p>A sleek weather application built with TypeScript, designed to deliver real-time weather updates and a 4-day forecast. It fetches data from the OpenWeather API and presents it through a clean, animated user interface. The app adapts seamlessly to all screen sizes and includes smooth CSS animations that enhance the overall experience without distraction.</p>
        <div className="projectButtons">
          <button>Live demo</button>
          <button>View code</button>
        </div>
      </section> */}


    </>
  )
}