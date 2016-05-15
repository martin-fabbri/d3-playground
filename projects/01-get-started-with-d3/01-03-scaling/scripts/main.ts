import * as d3 from "d3";

const dataset = [5, 10, 15, 20, 25];

const multiplier = 10;

const svg = d3.select('#chart-area').append('svg');

  svg
    .attr('width', 400)
    .attr('height', 300)
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (d: number, i: number)=> i * 22 + 2)
    .attr('y', (d: number) => 300 - d * multiplier)
    .attr('width', 20)
    .attr('height', (d: number)=> d * multiplier);



