import {
  getSourceFrmList,
  listByOccurrenceCount,
  removeWordFromValue,
  uppercaseFirstLetterValueFromList,
} from "./modules/dataCleaning.js";

// Set API endpoint parameters
let apiKey = "d08928de0d5d4809aef8375899851622";
let phrases = "Corona";
let language = "nl";
let sortBy = "relevancy";
let pageSize = 100;
let page = 1;
let fullDataset = [];
let newsSource1 = "www.ad.nl";
let newsSource2 = "telegraaf.nl";
let allNewsEndPoint = `https://newsapi.org/v2/everything?qInTitle=${phrases}&language=${language}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
let fromTwoSourcesEndPoint = `https://newsapi.org/v2/everything?qInTitle=${phrases}&language=${language}&page=${page}&pageSize=${pageSize}&domains=${newsSource1},${newsSource2}&apiKey=${apiKey}`;
let oldApiEndpoint =
  "https://rawgit.com/sgratzl/d3tutorial/master/examples/weather.json";

const margin = { top: 40, bottom: 10, left: 120, right: 20 };
const width = 960 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

// Creates sources <svg> element
const svg = d3
  .select("body")
  .append("svg")
  .style("border", "1px solid lightgrey")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom);

// Group used to enforce margin
const g = svg
  .append("g")
  // .attr("width", 800)
  // .attr("transform", `translate(${margin.left},${margin.top})`);
  .attr("transform", `translate(20,200)`);

// Global variable for all data
let data;

// Scales setup
const cscale = d3.scaleOrdinal().range(d3.schemePaired);
const xscale = d3.scaleBand().range([0, height]);

d3.json(allNewsEndPoint).then((json) => {
  data = json;

  let sourceL = getSourceFrmList(data.articles);
  console.log("List with sources:", sourceL);
  let withoutW = removeWordFromValue(sourceL, "Www.", "");
  console.log("List with wwww:", withoutW);
  let capFirstL = uppercaseFirstLetterValueFromList(withoutW);
  console.log("List with first letter cap:", capFirstL);
  let newList = listByOccurrenceCount(capFirstL);
  console.log("List by source:", newList);

  data = newList;

  update(data);
  addLegend(data);
});

function update(new_data) {
  //update the scales
  xscale.domain([0, d3.max(new_data, (d) => d.articleCount)]);
  cscale.domain(new_data.map((d) => d.sourceName));

  // Render the chart with new data
  console.log("new_data", new_data);
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
            // .attr("y", 100)
            // .attr("x", (d) => d.articleCount * 20);
            .attr("transform", (d, i) => `translate(${30 + i * 60},0)`);

          let circles = g
            .append("circle")
            .attr("r", (d) => d.articleCount * 3)
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
  // .transition()
  // .attr("r", (d, i) => d.articleCount + 10 + i * 20);
}

function addLegend(new_data) {
  //update the scales
  xscale.domain([0, d3.max(new_data, (d) => d.articleCount)]);
  cscale.domain(new_data.map((d) => d.sourceName));

  const legendLabel = d3.select("#legend");
  legendLabel
    .selectAll("div")
    .data(new_data)
    .join("div")
    .attr("class", "legendBox")
    .append("span")
    .attr("class", "legendColor")
    // .style("width", "20px")
    // .style("height", "20px")
    .style("background-color", cscale)
    .append("span")
    .attr("class", "legendText")
    // .style("padding-left", "25px")
    .text((d) => d.sourceName);

  // .append("div");

  // const textLabel = d3.select("#legend");
  // textLabel.selectAll("div").data(new_data).join("div").append("div");
}

//interactivity
// When filtered only show national articles
d3.select("#binnenland").on("change", function () {
  // This will be triggered when the user selects or unselects the checkbox
  const checked = d3.select(this).property("checked");
  if (checked === true) {
    // Checkbox was just checked

    // Keep only data element whose country is US
    // const filtered_data = data.filter(
    //   (d) => d.sourceName.includes(".nl") == d.sourceName
    // );
    const filtered_data = data.filter((d) => {
      if (
        d.sourceName.includes(".nl") ||
        d.sourceName.includes("Tweakers") ||
        d.sourceName.includes("RTL Nieuws")
      ) {
        return d.sourceName;
      }
    });

    update(filtered_data); // Update the chart with the filtered data
  } else {
    // Checkbox was just unchecked
    update(data); // Update the chart with all the data we have
  }
});

//interactivity
// When filtered only show international articles
d3.select("#buitenland").on("change", function () {
  // This will be triggered when the user selects or unselects the checkbox
  const checked = d3.select(this).property("checked");
  if (checked === true) {
    // Checkbox was just checked

    // Keep only data element whose country is US
    // const filtered_data = data.filter(
    //   (d) => d.sourceName.includes(".nl") == d.sourceName
    // );
    const filtered_data = data.filter((d) => {
      if (
        !(
          d.sourceName.includes(".nl") ||
          d.sourceName.includes("Tweakers") ||
          d.sourceName.includes("RTL Nieuws")
        )
      ) {
        return d.sourceName;
      }
    });

    update(filtered_data); // Update the chart with the filtered data
  } else {
    // Checkbox was just unchecked
    update(data); // Update the chart with all the data we have
  }
});
