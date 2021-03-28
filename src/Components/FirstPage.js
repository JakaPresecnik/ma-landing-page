// import Canvas from './Canvas';
import Svg from './Svg.js';
// import { useEffect } from "react";

function FirstPage () {
    // useEffect(() => {
    //     Canvas();
    // }, [])
    
    return (
        <section>
            <div className="header">
                <h1>Quick Portfolio</h1>
                <p>Made a simple react app to show some of my projects.</p>
            </div>
            <Svg id="svg" amount={window.innerWidth / 100} />
        </section>
    )
}

export default FirstPage;