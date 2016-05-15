"use strict";
var d3 = require("d3");
var dataset = [5, 10, 15, 20, 25];
var multiplier = 10;
var width = 400;
var height = 300;
var yScale = d3.scale.linear()
    .domain([0, 50])
    .range([0, height]);
var svg = d3.select('#chart-area').append('svg');
svg
    .attr('width', width)
    .attr('height', height)
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', function (d, i) { return i * 22 + 2; })
    .attr('y', function (d) { return height - yScale(d); })
    .attr('width', 20)
    .attr('height', function (d) { return yScale(d); });
