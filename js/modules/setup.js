const cscale = d3.scaleOrdinal().range(d3.schemePaired);
const xscale = d3.scaleSqrt().range([0, 30]);

// Creates sources <svg> element
const svg = d3.select("body").append("svg");

// Group used to enforce margin
const g = svg.append("g").attr("transform", `translate(20,200)`);

export { cscale, xscale, svg, g };
