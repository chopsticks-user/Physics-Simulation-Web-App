import * as d3 from "d3"
import { useEffect, useRef, useState } from 'react'

const Render = (props) => {
    const ref = useRef();
    var width, height;
    
    useEffect(() => {
        const current = ref.current;
        const plane = d3.select(current);
        window.addEventListener("resize", () => {
            width = current.width.animVal.value;
            height = current.height.animVal.value;
            console.log(width, height);
            console.log(current.width.animVal.value, current.height.animVal.value);
        });
        current.addEventListener("click", (e) => {
            plane.append("circle")
                .attr("cx", e.offsetX)
                .attr("cy", e.offsetY)
                .attr("r", 10)
                .attr("fill", "red");
            
        });
        const zoomHandler = d3.zoom().scaleExtent(.1, 5).on("zoom", () => {console.log("zoomed")});
        zoomHandler(plane);
    }, []);

    return (
        <svg className="plane-renderer" ref={ref}>
            
        </svg>
    );
}

export default Render;
