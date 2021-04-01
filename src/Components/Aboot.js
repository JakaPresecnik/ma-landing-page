import SvgThree from './SvgThree';
import skills from '../skills';

function Aboot () {
    return (
        <>
            <section>
                <SvgThree num={window.innerWidth / 50} />
                <div className="header">
                    <h1>About</h1>
                    <p>...</p>
                </div>
            </section>
            <div className='works' style={{paddingBottom: '1em'}}>
                <h2>Skills I'm comfortable with</h2>
                <div className="skill-display">
                    {skills.map(skill => (
                        <p key={skill.name}>
                            <span style={{paddingRight: "1em"}}><skill.icon size="1.2em" /></span> 
                            <progress id={skill.name} max="100" value={skill.progress} ></progress> 
                            <span style={{paddingLeft: "1em"}}>{skill.name}</span></p>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Aboot;