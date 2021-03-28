function Svg (props) {
    const colors = ['62,19,175', '255,131,0', '6,121,159', '88,224,0', '118,89,195', '255,179,99', '76,156,183', '146,232,90', '90,55,180', '255,179,99', '42,134,165', '120,226, 50', '47,14,135', '197,101,0', '4,93,123', '68,173,0', '54,136,0', '3,73,97', '155, 79,0', '36,9,106'];
    let circles = [];
    let styles = [];
    
    for(let i = 0; i < props.amount; i++){ 
        styles.push({
            animationName: `rotate${Math.round(Math.random() * 2)}`,
            animationDuration: 10 + Math.round(Math.random() * 20) + 's',
            animationDelay: 0,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
            animationDirection: Math.round(Math.random()) ? 'reverse' : 'normal',
        })
        circles.push(<circle 
            style={styles[i]}
            key={`circle${i}`} 
            cx={Math.round(Math.random() * window.innerWidth)} 
            cy={Math.round(Math.random() * window.innerHeight)} 
            r={20 + Math.random() * (window.innerHeight / 2)} 
            fill={`RGBA(${colors[Math.floor(Math.random() * colors.length)]},0.4)`} 
            />)
    }

    return (
        <svg className="circles">
            {circles}
        </svg>
    )
}
export default Svg;