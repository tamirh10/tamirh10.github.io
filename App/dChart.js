/**
 * Created by Tamir on 08-Aug-16.
 */

var testdata = [
    {key: "One", y: 5},
    {key: "Two", y: 2},
    {key: "Three", y: 9},
    {key: "Four", y: 7},
    {key: "Five", y: 4},
    {key: "Six", y: 3},
    {key: "Seven", y: 0.5}
];

var height = 350;
var width = 350;

var chart1;
nv.addGraph(function() {
    var chart1 = nv.models.pieChart()
        .x(function(d) { return d.key })
        .y(function(d) { return d.y })
        .donut(true)
        .width(width)
        .height(height)
        .padAngle(.08)
        .cornerRadius(5)
        .id('donut1'); // allow custom CSS for this one svg

    chart1.title("100%");
    chart1.pie.labelsOutside (true).donut(true);

    d3.select("#test1")
        .datum(testdata)
        .transition().duration(1200)
        .call(chart1);

    // LISTEN TO WINDOW RESIZE
    // nv.utils.windowResize(chart1.update);

    // LISTEN TO CLICK EVENTS ON SLICES OF THE PIE/DONUT
    // chart.pie.dispatch.on('elementClick', function() {
    //     code...
    // });

    // chart.pie.dispatch.on('chartClick', function() {
    //     code...
    // });

    // LISTEN TO DOUBLECLICK EVENTS ON SLICES OF THE PIE/DONUT
    // chart.pie.dispatch.on('elementDblClick', function() {
    //     code...
    // });

    // LISTEN TO THE renderEnd EVENT OF THE PIE/DONUT
    // chart.pie.dispatch.on('renderEnd', function() {
    //     code...
    // });

    // OTHER EVENTS DISPATCHED BY THE PIE INCLUDE: elementMouseover, elementMouseout, elementMousemove
    // @see nv.models.pie

    return chart1;

});

