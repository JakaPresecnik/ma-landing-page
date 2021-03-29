import { useEffect, useState } from "react";

function SvgThree(props) {
    const [circles, setCircles] = useState([]);
    let i = 0;
    let times = []

    useEffect(() => {
        let circlesTimeout = setInterval(() => {
            if(i > props.num) {
                return clearInterval(circlesTimeout);
            }

            times.push(20 + Math.round(Math.random() * 100));
            setCircles(circles => [...circles, <circle 
                key={'circle'+i}
                style={{
                    animationName: 'scale',
                    animationDuration: times[i] + 's',
                    animationTimingFunction: 'ease-out',
                    animationIterationCount: 'infinite'}}
                cx={Math.round(Math.random() * window.innerWidth)}  
                cy={Math.round(Math.random() * window.innerHeight)}
                r={5 + Math.random() * (window.innerHeight / 2)} 
                fill='RGBA(250,250,250,0.04)'
                stroke='RGBA(250,250,250,0.4)'
            />])
            i++;
        }, 1000);
        return () => clearInterval(circlesTimeout);
    }, [i])

    return (
        <svg className="circles">
            {circles}
        </svg>
    )
}

export default SvgThree;