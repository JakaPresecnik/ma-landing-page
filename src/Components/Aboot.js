import SvgThree from './SvgThree';
import {skills, certificates} from '../skills';
import { Fragment } from 'react';
import { FaGlobe } from 'react-icons/fa';
import ruby from '../img/ruby.jpg';

function Aboot () {

    const openPic = (type, id) => {
        const pic = document.getElementById(`${type}${id}`);
        pic.classList.toggle('zoomIn');
    }
    return (
        <>
            <section>
                <SvgThree num={window.innerWidth / 50} />
                <div className="header">
                    <h1>About</h1>
                    <div className="about">
                        <img src={ruby} alt="Profile pic" /> 
                        <p>Hi!<br /><br /> 
                        I love web programming and it probably goes well with the fact that my personality type is INFP.
                        I love using React for my projects, as well as Angular. I also started to love working with backend, 
                        and I want to expand my knowledge to use blockchain as backend.<br /><br />
                        I am 3/40 on narcissistic scale and that is probably the reason I don't have a profile pic.
                        I used one from my dog Ruby, and I am sure she won't mind me using it here :)
                        </p>
                    </div>
                </div>
            </section>
            <div className='about-sub' style={{paddingBottom: '1em'}}>
                <div className="skills">
                    <h2 title="...progress bar represents how I'm comfortable with each...">Skills</h2>
                    <div className="skill-display">
                        {skills.map(skill => (
                            <p key={skill.name}>
                                <span style={{paddingRight: "1em"}}><skill.icon size="1.2em" /></span> 
                                <progress id={skill.name} max="100" value={skill.progress} ></progress> 
                                <span style={{paddingLeft: "1em"}}>{skill.name}</span></p>
                        ))}
                    </div>
                </div>
                <div className="certificates">
                    <h2>Certificates</h2>
                    <div className="certificate-display">
                        {Object.keys(certificates).map(type => (
                            <Fragment key={type}>
                                <h4>{type.toUpperCase()}</h4>
                                <div className="certificate-type-display">
                                    {certificates[type].map(certificate => (
                                        <div className={type != 'nanodegree' ? "certificate" : "nanodegree"} key={certificate.name}>
                                            <h5>{certificate.name}</h5>
                                            <img onClick={() => openPic(type, certificate.id)} id={`${type}${certificate.id}`} src={certificate.img} alt={`Certificate for ${certificate.name}`} />
                                            <a className='project-badge' href={certificate.link} alt='Link to official certificate' target="_blank" rel="noreferrer"><FaGlobe size="1.5em" /></a>
                                        </div>
                                    ))}
                                </div>
                                <br/>
                            </Fragment>
                       ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboot;