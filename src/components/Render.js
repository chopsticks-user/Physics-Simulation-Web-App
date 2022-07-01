import {scaleLinear} from "d3-scale"

const Render = () => {
    const points = [
        {planet: "Mercury", size: 1526}, 
        {planet: "Earth", size: 3959}, 
    ];

    const xScale = scaleLinear().domain([0, points.length]).range([10, 500]);

    return <svg style={{backgroundColor: "black"}} className="plane-renderer">
        {points.map((o, index) => (
            <g transform={`translate(${xScale(index)}, ${600})`}>
                <circle style={{fill: "red"}} color={"gold"} r={5}/>
            </g>
        ))}
    </svg>
}

export default Render