import { xscale, cscale, g, svg } from "./setup.js";

// Used update function as base @https://github.com/sgratzl/d3tutorial/blob/main/examples/barchart04_scale.html
const update = (new_data) => {
  //update the scales
  xscale.domain([0, d3.max(new_data, (d) => d.articleCount)]);
  cscale.domain(new_data.map((d) => d.sourceName));

  console.log(new_data);

  // Render the chart with new data
  // DATA JOIN use the key argument for ensurign that the same DOM element is bound to the same data-item
  try {
    const circles = g
      .selectAll("g")
      .data(new_data, (d) => d.sourceName)
      .join(
        // ENTER
        // new elements
        (enter) => {
          let g = enter
            .append("g")
            .attr("transform", (d, i) => `translate(${30 + i * 60},0)`);

          let circles = g
            .append("circle")
            .transition()
            .attr("r", (d) => {
              return xscale(d.articleCount * 3);
            })
            .duration(1000)
            .style("fill", cscale);

          let text = g
            .append("text")
            .text((d) => {
              return d.sourceName;
            })
            .attr("y", (d) => d.articleCount * 5);

          let title = g
            .append("title")
            .text((d) => d.sourceName + " " + `(${d.articleCount})`);
          return enter;
        },
        // UPDATE
        // update existing elements
        (update) => update,
        // EXIT
        // elements that aren't associated with data
        (exit) => exit.remove()
      );
  } catch (e) {}
};

//   Create a legend for the visualization based on API data
const addLegend = (new_data) => {
  //update the scales
  cscale.domain(new_data.map((d) => d.sourceName));

  const legendLabel = d3.select("#legend");
  legendLabel
    .selectAll("div")
    .data(new_data)
    .join("div")
    .attr("class", "legendBox")
    .append("span")
    .attr("class", "legendColor")
    .style("background-color", cscale)
    .append("span")
    .attr("class", "legendText")
    .text((d) => d.sourceName);
};

export { update, addLegend };
