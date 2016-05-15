"use strict";
var d3 = require("d3");
var dataset = new Array();
for (var i = 0; i <= 5; i++) {
    dataset.push(Math.random() * 100);
}
var multiplier = 10;
var width = 400;
var height = 300;
var xScale = d3.scale.ordinal()
    .domain(dataset)
    .rangeBands([0, width], 0.1, 0.2);
var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset)])
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
    .attr('x', function (d, i) { return xScale(d); })
    .attr('y', function (d) { return height - yScale(d); })
    .attr('width', xScale.rangeBand())
    .attr('height', function (d) { return yScale(d); });
