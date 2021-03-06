import * as d3 from "d3";

const dataset = [5, 10, 15, 20, 25];

const multiplier = 10;
const width = 400;
const height = 300;

var yScale = d3.scale.linear()
  .domain([0, 50])
  .range([0, height]);

const svg = d3.select('#chart-area').append('svg');

  svg
    .attr('width', width)
    .attr('height', height)
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (d: number, i: number)=> i * 22 + 2)
    .attr('y', (d: number) => height - yScale(d))
    .attr('width', 20)
    .attr('height', (d: number)=> yScale(d));



