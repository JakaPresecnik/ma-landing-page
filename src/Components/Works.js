import SvgTwo from "./SvgTwo";
import { FaGlobe, FaGithub, FaNpm } from "react-icons/fa";
import projects from '../projects';
import {GithubContribution} from 'react-github-contributions-component';

function Works () {
    return (
        <>
            <section>
                <div className="header">
                    <h1>Works</h1>
                    <div style={{zIndex: 2}}>
                        <p style={{marginBottom: '0.1em'}}><a href="https://github.com/JakaPresecnik" title="Github profile" target="_blank" rel="noreferrer" ><FaGithub style={{marginRight: '0.5em'}} size='1.5em' /></a> Contributions:</p>
                        <GithubContribution userName="jakapresecnik" theme="dark" />
                        <p style={{textAlign: 'right', fontSize: '14px', height: '1em', marginTop:'0' }}>Check this component out: 
                            <a className='project-badge' href="https://www.npmjs.com/package/react-github-contributions-component" style={{marginLeft: '1em', top: '1em'}} target='_blank' rel="noreferrer" title='This Components NPM package page'><FaNpm size='3em' /></a>
                        </p>
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
