import * as d3 from "d3"
import { useEffect, useRef, useState } from 'react'

const Render = () => {
    const ref = useRef();
    
    useEffect(() => {
        const current = ref.current;
        const plane = d3.select(current);
        current.addEventListener("click", (e) => {
            plane.append("circle")
                .attr("cx", e.offsetX)
                .attr("cy", e.offsetY)
                .attr("r", 10)
                .attr("fill", "red")
        }, []);
    });

    return (
        <svg className="plane-renderer" ref={ref}>
            
        </svg>
    );
}

export default Render;

// class Render extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
//         this.handleZoom = this.handleZoom.bind(this);
//         this.svg = d3.create("svg").attr("viewBox", [0, 0, 500, 500]);
//     }

//     handleZoom(e) {
//         this.setState(prevSate => ({
//             isToggleOn: !prevSate.isToggleOn
//         }));
//     }

//     render() { 
//         return (<svg style={{backgroundColor: "black"}} 
//                      className="plane-renderer"
//                 >
//                     <g transform={`translate(${700}, ${600})`} onClick={(e) => this.handleZoom(e)}>
//                         <circle style={{fill: this.state.isToggleOn ? "red" : "gold"}} color={"gold"} r={10}/>
//                     </g>
//                 </svg>)
//         // return this.svg;
//     }
// }
