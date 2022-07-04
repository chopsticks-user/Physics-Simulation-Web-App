import * as d3 from "d3"
import { useEffect, useRef, useState } from 'react'
import PropTypes from "prop-types"

const Space2D = (props) => {
    const ref = useRef();

    let eventAdded = false;

    const zoomHandler = d3.zoom().scaleExtent([0.001, 10])
    
    useEffect(() => {
        if(!eventAdded) {
            eventAdded = true;
            return;
        }

        const currentRef = ref.current;
        const currentD3 = d3.select(ref.current)
        .call(zoomHandler.on("zoom", () => {
            currentD3.attr("transform", "translate(" + d3.zoomTransform(currentD3.node()).x + "," + d3.zoomTransform(currentD3.node()).y + ") scale(" + d3.zoomTransform(currentD3.node()).k + ")");
            currentD3.selectAll(".unzoomable").attr("r", 5 / (d3.zoomTransform(currentD3.node()).k));
        }))
        .append("g");
        
        // window.addEventListener("resize", () => {
            //         setSize({width: current.width.animVal.value, height: current.height.animVal.value})
            //         console.log(size.width, size.height);
            //     });
        // currentRef.removeEventListener("click", addCircle(e, currentD3));
        currentRef.addEventListener("click", (e) => {
            const rand = Math.floor(Math.random() * 2);
            let className = rand === 0? "unzoomable": "zoomable";
            console.log(d3.zoomTransform(currentD3.node()).x, d3.zoomTransform(currentD3.node()).y);
            currentD3.append("circle")
            .attr("cx", (e.offsetX - d3.zoomTransform(currentD3.node()).x) / d3.zoomTransform(currentD3.node()).k)
            .attr("cy", (e.offsetY - d3.zoomTransform(currentD3.node()).y) / d3.zoomTransform(currentD3.node()).k)
            .attr("r", 5 / d3.zoomTransform(currentD3.node()).k)
            .attr("fill", "red")
            .attr("class", className);
        });

    }, []);

    return (
        <svg className="space-2d-container" ref={ref}>

        </svg>
    );
}

Space2D.defaultProps = {

}

Space2D.propTypes = {

}

export default Space2D;
