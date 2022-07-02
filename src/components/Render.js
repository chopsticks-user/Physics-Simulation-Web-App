import * as d3 from "d3"
import { useEffect, useRef, useState } from 'react'

const Render = () => {
    const ref = useRef();
    const colors = ["black", "white", "gold", "blue", "green"];
    var pickedColor;
    var coor = `translate(${Math.floor(Math.random() * 1000)}, ${Math.floor(Math.random() * 800)})`
    
    useEffect(() => {
        const current = ref.current;
        current.addEventListener("mousewheel", (e) => {
            console.log(`${e.clientX} ${e.clientY}`);
            pickedColor = colors[Math.floor(Math.random() * colors.length)];
            document.querySelector(".plane-renderer").style.backgroundColor = pickedColor;
        });
    });

    return (
        <svg className="plane-renderer" ref={ref}>
            <g className="red-circle" transform={coor}>
                <circle style={{fill: "red"}} r={10}></circle>
            </g>
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
