import * as d3 from "d3"
import { useEffect, useRef, useState } from 'react'
import PropTypes from "prop-types"

const Space2D = (props) => {
    const ref = useRef();
    const [lastTransform, setLastTransform] = useState({x: 0, y: 0});

    let eventAdded = false;

    const zoomHandler = d3.zoom().scaleExtent([0.001, 10])

    let tempX = 50;
    
    useEffect(() => {
        if(!eventAdded) {
            eventAdded = true;
            return;
        }

        const currentRef = ref.current;
        const size = {w: currentRef.width.animVal.value, h: currentRef.height.animVal.value};

        const currentD3 = d3.select(ref.current)
        .call(zoomHandler.on("zoom", () => {
            currentD3.attr("transform", "translate(" + d3.zoomTransform(currentD3.node()).x + "," + d3.zoomTransform(currentD3.node()).y + ")");
            currentD3.selectAll(".unzoomable").attr("r", 5);
            // setPlaneSize(planeSize => ({w: currentRef.width.animVal.value + d3.zoomTransform(currentD3.node()).x, h: currentRef.height.animVal.value + d3.zoomTransform(currentD3.node()).y}));
            
            console.log(d3.zoomTransform(currentD3.node()).x - lastTransform.x, d3.zoomTransform(currentD3.node()).y - lastTransform.y);
            const gridSize = 50;
            if(d3.zoomTransform(currentD3.node()).x > tempX) {
                const currentXAxis = currentD3.append("g")
                    .attr("class", "x-axis-grid")
                    .attr("transform", `translate(${0}, ${size.h})`)
                    .call(d3.axisBottom(
                        d3.scaleLinear()
                        .domain([-(tempX / gridSize) - 1, -(tempX / gridSize) - 1])
                        .range([- tempX, - tempX])
                    ).tickSize(-(size.h))
                    .tickFormat("")
                    .ticks(1));

                    currentXAxis.selectAll("line")
                    .attr("class", "x-grid-line")
                    .attr("stroke", "white")
                    .attr("stroke-width", "1")
                    .attr("stroke-opacity", ".5");

                tempX += gridSize;
            }
            setLastTransform({x: d3.zoomTransform(currentD3.node()).x, y: d3.zoomTransform(currentD3.node()).y});
        }))
        .on("wheel.zoom", null)
        .on("dblclick.zoom", null)
        .append("g");
        
        const drawGrid = (gridSize) => {
            // const transform = {x: d3.zoomTransform(currentD3.node()).x, y: d3.zoomTransform(currentD3.node()).y}
            currentD3.append("g")
                .attr("class", "x-axis-grid")
                .attr("transform", `translate(${0}, ${size.h})`)
                .call(d3.axisBottom(
                    d3.scaleLinear()
                    .domain([0, (size.w) / gridSize])
                    .range([0, (size.w)])
                ).tickSize(-(size.h))
                .tickFormat("")
                .ticks((size.w) / gridSize));

            currentD3.selectAll("line")
            .attr("class", "x-grid-line")
            .attr("stroke", "white")
            .attr("stroke-width", "1")
            .attr("stroke-opacity", ".5");

            currentD3.select("line")
            .attr("class", "x-axis-line")
            .attr("stroke", "yellow")
            .attr("stroke-width", "1")
            .attr("stroke-opacity", "1");
        }

        drawGrid(50);

        currentD3.append("circle")
            .attr("cx", 500 - d3.zoomTransform(currentD3.node()).x)
            .attr("cy", 500 - d3.zoomTransform(currentD3.node()).y)
            .attr("r", 100)
            .attr("fill", "blue");

        currentD3.append("circle")
            .attr("cx", 500 - d3.zoomTransform(currentD3.node()).x)
            .attr("cy", 500 - d3.zoomTransform(currentD3.node()).y)
            .attr("r", 50)
            .attr("fill", "red");
    
        currentRef.addEventListener("click", (e) => {
            const rand = Math.floor(Math.random() * 2);
            let className = rand === 0? "unzoomable": "zoomable";
            currentD3.append("circle")
            .attr("cx", e.offsetX - d3.zoomTransform(currentD3.node()).x)
            .attr("cy", e.offsetY - d3.zoomTransform(currentD3.node()).y)
            .attr("r", 5)
            .attr("fill", "red")
            .attr("class", className);
        });

    }, []);

    return (
        <svg className="space-2d-container" ref={ref}></svg>
    );
}

Space2D.defaultProps = {

}

Space2D.propTypes = {

}

export default Space2D;
