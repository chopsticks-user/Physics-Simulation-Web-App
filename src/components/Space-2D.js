import * as d3 from "d3"
import { useEffect, useRef, useState } from 'react'
import PropTypes from "prop-types"
import Plane from "./Plane";

const Space2D = (props) => {
    const ref = useRef();
    
    const run = (e) => {
        const plane = d3.select(ref.current);
        plane.append("circle")
            .attr("cx", Math.floor(Math.random() * 1000))
            .attr("cy", Math.floor(Math.random() * 800))
            .attr("r", 10)
            .attr("fill", "red");
        console.log(plane);
    };
    // useEffect(() => {
    //     const current = ref.current;
    //     const plane = d3.select(current);
        
    //     // window.addEventListener("resize", () => {
    //         //     // width = current.width.animVal.value;
    //         //     // height = current.height.animVal.value;
    //         // });
            
    //     current.addEventListener("click", (e) => {
    //         plane.append("circle")
    //         .attr("cx", e.offsetX)
    //         .attr("cy", e.offsetY)
    //         .attr("r", 10)
    //         .attr("fill", "red");
    //     });
    //     const zoomHandler = d3.zoom()
    //         .scaleExtent(.1, 5)
    //         .translateExtent([[0, 0], [current.width.animVal.value, current.height.animVal.value]])
    //         .on("zoom", () => {
            
    //         });
    //     plane.call(zoom.transform, d3.zoomIdentity);
    // }, []);

    return (
        <svg className="space-2d-container" ref={ref} onClick={(e) => run(e)}>

        </svg>
    );
}

Space2D.defaultProps = {

}

Space2D.propTypes = {

}

export default Space2D;
