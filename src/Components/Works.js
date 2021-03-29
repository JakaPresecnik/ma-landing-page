import SvgTwo from "./SvgTwo";
import paragoria from "../img/paragoria.jpg"
import { FaReact, FaCss3Alt, FaGlobe, FaGithub } from "react-icons/fa";
import { SiRedux, SiNodeDotJs, SiPostgresql, SiHeroku } from "react-icons/si";
import projects from '../projects';

function Works () {
    return (
        <>
            <section>
                <div className="header">
                    <h1>Featured</h1>
                    <div className="featured">
                        <h3>Paragoria Website</h3>
                        <img src={paragoria} alt="Screanshot of Paragoria website"/>
                        <p className='tech-included'>
                            <SiPostgresql className="tech-used" size='1.2em' title="Postgress used" />
                            <FaReact className="tech-used" size='1.2em' title="React used"/>
                            <SiRedux className="tech-used" size='1.2em' title="Redux used"/>
                            <SiNodeDotJs className="tech-used" size='1.2em' title="Node.js used" />
                            <FaCss3Alt className="tech-used" size='1.2em' title="Css3 used" />
                            <SiHeroku className="tech-used" size='1.2em' title="Deployed on Heroku" />
                        </p>
                        <div className="project-subtitle">
                            <a className='project-badge' href='http://www.paragoriaband.com/' alt='Link to Paragoria website' title='Paragoria website'><FaGlobe size='2em' /></a>
                            <p>September 2020</p>
                            <a className='project-badge' href='https://github.com/JakaPresecnik/paragoria' alt='Link to Project Github page' target='_blank' rel="noreferrer" title='Project Github page'><FaGithub size='2em' /></a>
                        </div>
                    </div>
                </div>
                <SvgTwo num={window.innerWidth / 50} />
            </section>
            <div className='works'>
                <h2>Projects</h2>
                <div className='works-flex'>
                    {projects.map(project => (
                        <div key={`project${project.id}`} className="project">
                            <p className='span-id'>#{project.id}</p>
                            <h3>{project.name}</h3>
                            <img src={project.screenshot} alt={`Screenshot of ${project.name}`}/>
                            <p className='tech-included'>
                                {project.techUsed.map(tech => (
                                    <tech.icon key={tech.name + project.id} className="tech-used" size='1.1em' title={`${tech.name} used`}/>
                                ))}
                            </p>
                            <div className="project-subtitle">
                                <a className='project-badge' href={project.linkUrl} alt={`Link to ${project.name}`} title={project.name}><FaGlobe size='1.8em' /></a>
                                <p>{project.date}</p>
                                <a className='project-badge' href={project.linkGithub} alt={`Link to ${project.name} github page`} target='_blank' rel="noreferrer" title='Project Github page'><FaGithub size='2em' /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Works;