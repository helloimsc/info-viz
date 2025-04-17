const features = [
    "acousticness", "danceability", "energy", "instrumentalness",
    "liveness", "speechiness", "valence"
];

const feature_index =
{
    acousticness: 0,
    danceability: 1,
    energy: 2,
    instrumentalness: 3,
    liveness: 4,
    speechiness: 5,
    valence: 6
};


let currentArtist = "Taylor Swift";
const taytay = d3.select("#taytay");
const weeknd = d3.select("#weeknd");
const drake = d3.select("#drake");
const currentName = d3.select("#current-artist");

currentName.html(`${currentArtist}'s `)

const taytayImage = d3.select('#taytay-image');
const drakeImage = d3.select('#drake-image');
const weekndImage = d3.select('#weeknd-image');
taytayImage.attr("width", 250);

taytay.on("click", function () {
    currentArtist = "Taylor Swift";
    reloadDropdown(taylorSwiftSongs);
    drawAllRadar(taylorSwiftSongs);
    currentName.html(`${currentArtist}'s `)
    taytayImage.attr("width", 250);
    drakeImage.attr("width", 200);
    weekndImage.attr("width", 200);
});

drake.on("click", function () {
    currentArtist = "Drake";
    drawAllRadar(drakeSongs);
    reloadDropdown(drakeSongs);
    currentName.html(`${currentArtist}'s `)
    taytayImage.attr("width", 200);
    drakeImage.attr("width", 250);
    weekndImage.attr("width", 200);
});

weeknd.on("click", function () {
    currentArtist = "The Weeknd";
    drawAllRadar(weekndSongs);
    reloadDropdown(weekndSongs);
    currentName.html(`${currentArtist}'s `)
    taytayImage.attr("width", 200);
    drakeImage.attr("width", 200);
    weekndImage.attr("width", 250);
});

// Populate dropdown
const selector = d3.select("#songSelector");
selector.selectAll("option")
    .data(taylorSwiftSongs)
    .enter()
    .append("option")
    .attr("value", d => d.track_name)
    .text(d => d.track_name);

function reloadDropdown(optionsData) {
    const dropdown = d3.select("#songSelector");

    // Bind new data to <option> elements
    const options = dropdown
        .selectAll("option")
        .data(optionsData, d => d.track_name); // use a key if available

    // Remove old options
    options.exit().remove();

    // Update existing options
    options.text(d => d.track_name).attr("value", d => d.track_name);

    // Add new options
    options.enter()
        .append("option")
        .attr("value", d => d.track_name)
        .text(d => d.track_name);
}

const getCurrentSongs = () => {
    switch(currentArtist){
        case "Taylor Swift":
            return taylorSwiftSongs;
        case "Drake":
            return drakeSongs;
        case "The Weeknd":
            return weekndSongs;
    }
}

const sliderPop = d3
  .sliderHorizontal()
  .min(0)
  .max(100)
  .step(1)
  .width(300)
  .ticks(5)
  .default([0, 100])
  .fill('#9978C2')
  .handle(d3.symbol().type(d3.symbolCircle))
  .on('onchange', val => {
    const [minVal, maxVal] = val;
    const currentSongs = getCurrentSongs();
    const filtered = currentSongs.filter(d => {
      const popularity = d["popularity_new"]; // assuming energy is at index 2
      return popularity >= minVal && popularity <= maxVal;
    });
    drawAllRadar(filtered);
  });

const gPop = d3
  .select('#slider-popularity')
  .append('svg')
  .attr('width', 400)
  .attr('height', 70)
  .append('g')
  .attr('transform', 'translate(30,30)');
gPop.call(sliderPop);



// defining the svg container
const width = 600, height = 600, radius = 200;
const svg = d3.select("#chart")
    .append("svg")
    .attr("viewBox", [0, 0, width, height]);

// defining the heptagon
const centerX = width / 2;
const centerY = height / 2;

// for tool tip
const tooltip = d3.select("#tooltip");

function angle(i, total) {
    return (Math.PI * 2 / total) * i;
}

// function for calculating the point
function point(value, i, total, radius) {
    const a = angle(i, total);
    return [
        centerX + Math.sin(a) * value * radius,
        centerY - Math.cos(a) * value * radius
    ];
}

// Draw static axis lines + labels
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

const color = d3.scaleOrdinal(d3.schemeCategory10);

function getToolTipContent(song) {
    return `Song Name: <strong>${song.track_name}</strong><br/>
    Artist: <strong>${currentArtist}</strong><br/>
    Acousticness: ${song.acousticness}<br/>
    Danceability: ${song.danceability}<br/>
    Energy: ${song.energy}<br/>
    Instrumentalness: ${song.instrumentalness}<br/>
    Liveness: ${song.liveness}<br/>
    Speechiness: ${song.speechiness}<br/>
    Valence: ${song.valence}<br/>
    Popularity: ${song.popularity_new}`
}

function drawAllRadar(songs) {
    svg.selectAll("polygon").remove();
    songs.slice(1).forEach((song, idx) => {
        drawRadar(song, idx);
    });
}

function drawSingleRadar(song, index) {
    svg.selectAll("polygon").remove();
    drawRadar(song, index);
}

// Draw the radar for a single song
function drawRadar(song, idx) {
    let polygonSelected = false;
    const coords = features.map(f => point(song[f], feature_index[f], features.length, radius))
    svg.append("polygon")
        .attr("class", "radar-polygon")
        .attr("points", coords.map(p => p.join(",")).join(" "))
        .attr("fill", color(idx))
        .attr("stroke", color(idx))
        .attr("fill-opacity", 0.3)
        .on("mouseover", (event) => {
            tooltip
                .style("opacity", 1)
                .html(getToolTipContent(song))
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 28) + "px");

            d3.selectAll(".radar-polygon")
                .attr("fill-opacity", 0.1)
                .attr("stroke-width", 1);

            d3.select(event.currentTarget)
                .attr("fill-opacity", 0.6)
                .attr("stroke-width", 3)
                .raise();
            coords.forEach(([x, y], i) => {
                const featureName = features[i];
                const featureValue = song[featureName];

                // Circles
                svg.append("circle")
                    .attr("class", "radar-point")
                    .attr("cx", x)
                    .attr("cy", y)
                    .attr("r", 4)
                    .attr("fill", color(idx))
                    .attr("stroke", "#fff")
                    .attr("stroke-width", 1)
                    .style("cursor", "pointer")
                    .on("mouseover", (event) => {
                        tooltip
                            .style("opacity", 1)
                            .html(`<strong>${idx}</strong><br>${featureName}: ${featureValue.toFixed(3)}`)
                            .style("left", (event.pageX + 100) + "px")
                            .style("top", (event.pageY - 50) + "px");
                    })
                    .on("mousemove", (event) => {
                        tooltip
                            .style("left", (event.pageX + 100) + "px")
                            .style("top", (event.pageY - 50) + "px");
                    })
                    .on("mouseout", () => {
                        tooltip.style("opacity", 0);
                    });

                // Labels
                svg.append("text")
                    .attr("class", "radar-label")
                    .attr("x", x)
                    .attr("y", y)
                    .attr("dy", "-0.35em")
                    .attr("text-anchor", "middle")
                    .style("font-size", "10px")
                    // .style("fill", color(idx))
                    .text(featureValue.toFixed(2));
            });
        })
        .on("mousemove", (event) => {
            tooltip
                .style("left", (event.pageX + 100) + "px")
                .style("top", (event.pageY - 50) + "px");
        })
        .on("mouseout", () => {
            tooltip.style("opacity", 0);
            d3.selectAll(".radar-polygon")
                .attr("fill-opacity", 0.3)
                .attr("stroke-width", 1);
            svg.selectAll(".radar-point").remove();
            svg.selectAll(".radar-label").remove();
        });
}

// load the top artist first
drawAllRadar(taylorSwiftSongs);

// On dropdown change
selector.on("change", function () {
    const selected = this.value;

    if (selected == "All") {
        // draw all radar
        if (currentArtist == "Taylor Swift") {
            drawAllRadar(taylorSwiftSongs);
        } else if (currentArtist == "Drake") {
            drawAllRadar(drakeSongs);
        } else if (currentArtist == "The Weeknd") {
            drawAllRadar(weekndSongs);
        }

    } else {
        // draw a single radar
        if (currentArtist == "Taylor Swift") {
            const songData = taylorSwiftSongs.find(d => d.track_name === selected);
            const index = taylorSwiftSongs.indexOf(songData);
            drawSingleRadar(songData, index);
        } else if (currentArtist == "Drake") {
            const songData = drakeSongs.find(d => d.track_name === selected);
            const index = drakeSongs.indexOf(songData);
            drawSingleRadar(songData, index);
        } else if (currentArtist == "The Weeknd") {
            const songData = weekndSongs.find(d => d.track_name === selected);
            const index = weekndSongs.indexOf(songData);
            drawSingleRadar(songData, index);
        }

    }
});

