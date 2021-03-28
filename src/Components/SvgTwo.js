function SvgTwo (props) {

    let h = window.innerHeight;
    let styles = [];
    let lines = [];
    let colors = ['#4DDE00', '#00B060', '#ABF000', '#8BE65A', '#4CC48E', '#C9F45F', '#6FE032', '#28B575', '#BBF136', '#3CAB00'];

    for(let i = 0; i < props.num; i++) {
        let x = Math.floor(Math.random() * window.innerWidth);
        styles.push({
            strokeDasharray: 5 * Math.floor(Math.random() * 20),
            strokeDashoffset: h,
            animation: 'dash ' + 3 + Math.floor(Math.random() * 15) + 's linear forwards infinite',
            animationDirection: Math.round(Math.random()) ? 'reverse' : 'normal',
        })

        lines.push(<line 
            key={'line' + i}
            style={styles[i]} 
            stroke={colors[Math.floor(Math.random() * colors.length)]}
            strokeWidth={1 + Math.floor(Math.random() * 5)}
            x1={x}
            y1="0" 
            x2={x}
            y2={h}
            />)
    }


    return (
        <svg className="circles">
            {lines}
        </svg>
    )
}

export default SvgTwo