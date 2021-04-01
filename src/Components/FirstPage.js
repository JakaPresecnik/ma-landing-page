// import Canvas from './Canvas';
import Svg from './Svg.js';
// import { useEffect } from "react";
import thoughts from '../randomThoughts';

function FirstPage () {
    
    return (
        <section style={{height: '100%'}}>
            <div className="header">
                <h1>Quick Portfolio</h1>
                <p>{thoughts[Math.floor(Math.random() * thoughts.length)]}</p>
            </div>
            <Svg id="svg" amount={window.innerWidth / 100} />
        </section>
    )
}

export default FirstPage;