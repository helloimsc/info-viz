const features = [
    "acousticness", "danceability", "energy", "instrumentalness",
    "liveness", "speechiness", "valence"
  ];
  
  const data = [
    {
      name: "Song A",
      values: [0.0716, 0.5350, 0.6180, 0.0004, 0.1690, 0.0273, 0.2280]
    },
    {
      name: "Song B",
      values: [0.2, 0.6, 0.4, 0.1, 0.2, 0.05, 0.3]
    },
    {
      name: "Song C",
      values: [0.9, 0.2, 0.3, 0.7, 0.4, 0.1, 0.8]
    },
    {
      name: "Song D",
      values: [0.3, 0.4, 0.6, 0.5, 0.1, 0.7, 0.2]
    }
  ];
  
  const width = 500, height = 500, radius = 200;
  const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  
  const centerX = width / 2;
  const centerY = height / 2;
  
  const tooltip = d3.select("#tooltip");
  const color = d3.scaleOrdinal(d3.schemeCategory10);
  
  function angle(i, total) {
    return (Math.PI * 2 / total) * i;
  }
  
  function point(value, i, total, radius) {
    const a = angle(i, total);
    return [
      centerX + Math.sin(a) * value * radius,
      centerY - Math.cos(a) * value * radius
    ];
  }
  
  // Static axis + labels
  features.forEach((feat, i) => {
    const [x, y] = point(1, i, features.length, radius);
  
    svg.append("line")
      .attr("x1", centerX)
      .attr("y1", centerY)
      .attr("x2", x)
      .attr("y2", y)
      .attr("stroke", "#ccc");
  
    svg.append("text")
      .attr("x", x + (x < centerX ? -5 : 5))
      .attr("y", y + (y < centerY ? -5 : 5))
      .attr("dy", "0.35em")
      .attr("text-anchor", x < centerX ? "end" : "start")
      .style("font-size", "12px")
      .text(feat);
  });
  
  // Dropdown options
  const selector = d3.select("#songSelector");
  selector.selectAll("option")
    .data(data)
    .enter()
    .append("option")
    .attr("value", d => d.name)
    .text(d => d.name);
  
  // Function to draw multiple radar polygons
  function drawRadar(selectedNames) {
    svg.selectAll("polygon").remove();
  
    selectedNames.forEach((name, idx) => {
      const songData = data.find(d => d.name === name);
      const coords = songData.values.map((v, i) => point(v, i, features.length, radius));
  
      svg.append("polygon")
        .attr("points", coords.map(p => p.join(",")).join(" "))
        .attr("fill", color(name))
        .attr("stroke", color(name))
        .attr("fill-opacity", 0.3)
        .on("mouseover", (event) => {
          tooltip
            .style("opacity", 1)
            .html(`<strong>${songData.name}</strong>`)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 28) + "px");
        })
        .on("mousemove", (event) => {
          tooltip
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", () => {
          tooltip.style("opacity", 0);
        });
    });
  }
  
  // Handle dropdown change
  selector.on("change", function () {
    const selectedOptions = Array.from(this.selectedOptions).map(opt => opt.value);
    drawRadar(selectedOptions);
  });
  
  // Initial render with all songs selected
  drawRadar(data.map(d => d.name));
  