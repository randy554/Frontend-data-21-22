const data = [1, 2, 3];
// select svg element
// select all circles - even if there none yet - and bind the data array `data` onto them
// call .join to specify the data binding / joining
const circles = d3
  .select("svg")
  .selectAll("circle")
  .data(data)
  .join(
    (enter) => {
      // append an element matching the selector and set constant attributes
      const circles_enter = enter.append("circle");
      circles_enter.attr("r", 20);
      return circles_enter;
    },
    // update existing elements
    (update) => update,
    (exit) => {
      // exit phase
      return exit.remove();
    }
  );

// update phase ... actually update all including the newly created ones

// function argument given two parameters:
// 1. argument (common name: d): the current data item
// 2. argument (common name: i): the index of the data item in the data array
// this context: the current DOM element
circles.attr("cx", (d, i) => d * 10);
circles.attr("cy", (d, i) => i * 50);
