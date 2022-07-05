import * as d3 from "d3"

export const drawGridD3 = (planeD3, drawSpaceW, drawSpaceH, gridArea, axesColor, gridLinesColor, displayGrid, displayAxes) => {
    planeD3.append("g")
        .attr("class", "x-axis-grid")
        .attr("transform", `translate(${0}, ${drawSpaceH})`)
        .call(d3.axisBottom(
            d3.scaleLinear()
            .domain([0, (drawSpaceW) / gridArea])
            .range([0, (drawSpaceW)])
        ).tickSize(-(drawSpaceH))
        .tickFormat("")
        .ticks((drawSpaceW) / gridArea));
    
    planeD3.selectAll("line")
    .attr("class", "x-grid-line")
    .attr("stroke", gridLinesColor)
    .attr("stroke-width", `${displayGrid & 1}`)
    .attr("stroke-opacity", ".5");

    planeD3.select("line")
    .attr("class", "x-axis-line")
    .attr("stroke", axesColor)
    .attr("stroke-width", `${displayAxes & 1}`)
    .attr("stroke-opacity", "1");
}

export const drawD3Object = (planeD3, objectType, pX, pY, size, color, zoomable, tangible) => {
    planeD3.append(objectType)
    .attr("cx", pX)
    .attr("cy", pY)
    .attr("r", size)
    .attr("fill", color)
    .attr("class", `${zoomable? "zoomable": "unzoomable"} ${tangible? "tangible": "intangible"}`);
}