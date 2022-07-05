import * as d3 from "d3"
import { useEffect, useRef } from 'react'
import PropTypes from "prop-types"
import { drawGridD3, drawD3Object } from "./Space2DDraw"

const Space2D = ({scaleMin, scaleMax, displayGrid, displayAxes}) => {
    const ref = useRef();
    const isMounted = useRef(false);
    const zoomHandler = d3.zoom().scaleExtent([scaleMin, scaleMax]);
    
    useEffect(() => {
        if(!isMounted.current) {
            isMounted.current = true;
            return;
        }
        
        const currentRef = ref.current;
        let transform = {x: 0, y: 0, k: 1};

        const currentD3 = d3.select(ref.current)
        .call(zoomHandler.on("zoom", () => {
            currentD3.attr("transform", `translate(${d3.zoomTransform(currentD3.node()).x}, ${d3.zoomTransform(currentD3.node()).y}) scale(${d3.zoomTransform(currentD3.node()).k})`);
            currentD3.selectAll(".unzoomable").attr("r", 5 / d3.zoomTransform(currentD3.node()).k);
            transform = {x: d3.zoomTransform(currentD3.node()).x, y: d3.zoomTransform(currentD3.node()).y, k: d3.zoomTransform(currentD3.node()).k}
        }))
        .on("dblclick.zoom", null)
        .append("g");

        drawGridD3(currentD3, currentRef.width.animVal.value, currentRef.height.animVal.value, 50, displayGrid, displayAxes);

        drawD3Object(currentD3, "circle", true, 500, 500, 100, "blue");
        drawD3Object(currentD3, "circle", true, 500, 500, 50, "red");
    
        currentRef.addEventListener("click", (e) => {
            const zoomable = Math.floor(Math.random() * 2) === 0? false: true;
            drawD3Object(currentD3, "circle", zoomable, (e.offsetX - transform.x) / transform.k, (e.offsetY - transform.y) / transform.k, 5 / transform.k, "red");
        });

    }, [zoomHandler, displayGrid, displayAxes]);

    return (
        <svg className="space-2d-container" ref={ref}></svg>
    );
}

Space2D.defaultProps = {
    scaleMin: 0.001, 
    scaleMax: 10, 
    displayGrid: true, 
    displayAxes: true, 
}

Space2D.propTypes = {
    scaleMin: PropTypes.number.isRequired, 
    scaleMax: PropTypes.number.isRequired, 
    displayGrid: PropTypes.bool.isRequired, 
    displayAxes: PropTypes.bool.isRequired, 
}

export default Space2D;
