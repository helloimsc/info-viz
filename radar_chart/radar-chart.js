const audioFeatures = [
    { axis: "Danceability", value: 0.8 },
    { axis: "Energy", value: 0.7 },
    { axis: "Speechiness", value: 0.05 },
    { axis: "Acousticness", value: 0.2 },
    { axis: "Instrumentalness", value: 0.01 },
    { axis: "Liveness", value: 0.3 },
    { axis: "Valence", value: 0.65 }
];

const svg = d3.select("#radarChart"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    radius = Math.min(width, height) / 2 - 50,
    centerX = width / 2,
    centerY = height / 2,
    levels = 5;

const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

const angleSlice = 2 * Math.PI / audioFeatures.length;

const rScale = d3.scaleLinear().range([0, radius]).domain([0, 1]);

// Draw radar grid
for (let level = 1; level <= levels; level++) {
    let r = radius * level / levels;
    svg.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", r)
        .attr("fill", "none")
        .attr("stroke", "#ccc");
}

// Axis lines and labels
audioFeatures.forEach((d, i) => {
    const angle = i * angleSlice;
    const x = centerX + rScale(1.1) * Math.cos(angle - Math.PI / 2);
    const y = centerY + rScale(1.1) * Math.sin(angle - Math.PI / 2);

    svg.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", centerX + rScale(1) * Math.cos(angle - Math.PI / 2))
        .attr("y2", centerY + rScale(1) * Math.sin(angle - Math.PI / 2))
        .attr("stroke", "#999");

    svg.append("text")
        .attr("x", x)
        .attr("y", y)
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .text(d.axis);
});

// Radar path
const line = d3.lineRadial()
    .radius(d => rScale(d.value))
    .angle((d, i) => i * angleSlice)
    .curve(d3.curveLinearClosed);

svg.append("path")
    .datum(audioFeatures)
    .attr("d", line)
    .attr("transform", `translate(${centerX}, ${centerY})`)
    .attr("fill", "steelblue")
    .attr("fill-opacity", 0.5)
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2);

// Dots + tooltips
svg.selectAll(".dot")
    .data(audioFeatures)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("r", 4)
    .attr("cx", (d, i) => centerX + rScale(d.value) * Math.cos(i * angleSlice - Math.PI / 2))
    .attr("cy", (d, i) => centerY + rScale(d.value) * Math.sin(i * angleSlice - Math.PI / 2))
    .attr("fill", "darkorange")
    .on("mouseover", function (event, d) {
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip.html(`<strong>${d.axis}</strong>: ${d.value}`)
            .style("left", (event.pageX + 5) + "px")
            .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", () => {
        tooltip.transition().duration(500).style("opacity", 0);
    });