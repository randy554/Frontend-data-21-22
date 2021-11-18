import {
  getSourceFrmList,
  listByOccurrenceCount,
  removeWordFromValue,
  uppercaseFirstLetterValueFromList,
} from "./modules/dataCleaning.js";

import { update, addLegend } from "./modules/vizHelpers.js";

// Set API endpoint parameters
let apiKey = "d08928de0d5d4809aef8375899851622";
let phrases = "Corona";
let language = "nl";
let pageSize = 100;
let page = 1;
let allNewsEndPoint = `https://newsapi.org/v2/everything?qInTitle=${phrases}&language=${language}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

// Global variable for all data
let data;

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
  // console.log("difoefoihf");
  update(data);
  addLegend(data);
});

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
