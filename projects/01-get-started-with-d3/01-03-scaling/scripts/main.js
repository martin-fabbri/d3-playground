"use strict";
var d3 = require("d3");
var dataset = [5, 10, 15, 20, 25];
var multiplier = 10;
var svg = d3.select('#chart-area').append('svg');
svg
    .attr('width', 400)
    .attr('height', 300)
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', function (d, i) { return i * 22 + 2; })
    .attr('y', function (d) { return 300 - d * multiplier; })
    .attr('width', 20)
    .attr('height', function (d) { return d * multiplier; });
