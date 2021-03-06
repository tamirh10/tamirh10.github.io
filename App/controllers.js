﻿angular.module('app.controllers', ['nvd3'])

    .controller('MoviesController', function ($scope, $http)
{
    // this will do for now
    //$scope.movies =
    //[
    //    { Id: 1, Name: "Fight Club",Director: "David Fincher" },
    //    { Id: 2, Name: "Into The Wild", Director: "Sean Penn" },
    //    { Id: 3, Name: "Dancer in the Dark", Director:"Lars von Trier " }
    //];

    $http({
        method: 'GET',
        url: 'Movies.json'
    })
        .success(function (data)
        {
            $scope.movies = data;
        });


})

    .controller('stackedAreaChartCtrl', function($scope,$http) {

        d3.json('stackedAreaData.json', function(data) {
            nv.addGraph(function() {
                var chart = nv.models.stackedAreaChart()
                    .margin({right: 100})
                    .x(function(d) { return d[0] })   //We can modify the data accessor functions...
                    .y(function(d) { return d[1] })   //...in case your data is formatted differently.
                    .useInteractiveGuideline(true)    //Tooltips which show all data points. Very nice!
                    .rightAlignYAxis(true)      //Let's move the y-axis to the right side.
                    .duration(500)
                    .showControls(true)       //Allow user to choose 'Stacked', 'Stream', 'Expanded' mode.
                    .clipEdge(true);

                //Format x-axis labels with custom function.
                chart.xAxis
                    .tickFormat(function(d) {
                        return d3.time.format('%x')(new Date(d))
                    });

                chart.yAxis
                    .tickFormat(d3.format(',.2f'));

                d3.select('#chart svg')
                    .datum(data)
                    .call(chart);

                nv.utils.windowResize(chart.update);

                return chart;
            });
        })





    })


        .controller('usersController', function ($scope, $http)
{
    // this will do for now
    //$scope.movies =
    //[
    //    { Id: 1, Name: "Fight Club",Director: "David Fincher" },
    //    { Id: 2, Name: "Into The Wild", Director: "Sean Penn" },
    //    { Id: 3, Name: "Dancer in the Dark", Director:"Lars von Trier " }
    //];

    $http({
        method: 'GET',
        url: 'users.json'
    })
        .success(function (data)
        {
            $scope.users = data;
        });


});