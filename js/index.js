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
let pageSize = 100;
let page = 1;
let allNewsEndPoint = `https://newsapi.org/v2/everything?qInTitle=${phrases}&language=${language}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

// Creates sources <svg> element
const svg = d3.select("body").append("svg");

// Group used to enforce margin
const g = svg.append("g").attr("transform", `translate(20,200)`);

// Global variable for all data
let data;

// Scales setup
const cscale = d3.scaleOrdinal().range(d3.schemePaired);
const xscale = d3.scaleSqrt().range([0, 30]);

// API can't be called from online browser only local
d3.json(
  "https://raw.githubusercontent.com/randy554/Frontend-data-21-22/dev/js/newsAPI.json"
).then((json) => {
  data = json;

  // // List with publishers name
  // let sourceL = getSourceFrmList(data.articles);

  // // List with www. removed
  // let withoutW = removeWordFromValue(sourceL, "Www.", "");

  // // List with first letter capitalized
  // let capFirstL = uppercaseFirstLetterValueFromList(withoutW);

  // // List with amount of corona articles per publisher
  // let newList = listByOccurrenceCount(capFirstL);

  // data = newList;

  update(data);
  addLegend(data);
});

// Used update function as base @https://github.com/sgratzl/d3tutorial/blob/main/examples/barchart04_scale.html
function update(new_data) {
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
}

function addLegend(new_data) {
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
}

// Edited filters @ https://codepen.io/sgratzl/pen/JjjPPRQ

// When filtered only show national articles
d3.select("#netherlands").on("change", function () {
  // This will be triggered when the user selects or unselects the checkbox
  const checked = d3.select(this).property("checked");
  if (checked === true) {
    // Checkbox was just checked

    // Keep only data element whose country is US
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

// When filtered only show international articles
d3.select("#international").on("change", function () {
  // This will be triggered when the user selects or unselects the checkbox
  const checked = d3.select(this).property("checked");
  if (checked === true) {
    // Checkbox was just checked

    // Keep only data element whose country is US
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
