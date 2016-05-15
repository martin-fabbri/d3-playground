import * as d3 from "d3";

const dataset: number[] = new Array<number>();

for (var i = 0; i <= 5; i++) {
  dataset.push(Math.random() * 100);
}

const multiplier = 10;
const width = 400;
const height = 300;

var xScale = d3.scale.ordinal()
  .domain(dataset)
  .rangeBands([0, width], 0.1, 0.2);

var yScale = d3.scale.linear()
  .domain([0, d3.max(dataset)])
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
  .attr('x', (d: number, i: number)=> xScale(d))
  .attr('y', (d: number) => height - yScale(d))
  .attr('width', xScale.rangeBand())
  .attr('height', (d: number)=> yScale(d));



