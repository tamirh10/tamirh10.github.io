angular.module('app.controllers', ['nvd3'])

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
        url: 'adidas.json'
    })
        .success(function (data)
        {
            $scope.movies = data;
        });


})

    .controller('stackedAreaChartCtrl', function($scope,$http) {

        $scope.options = {
            chart: {
                type: 'stackedAreaChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 30,
                    left: 40
                },
                x: function (d) {
                    return d[0];
                },
                y: function (d) {
                    return d[1];
                },
                useVoronoi: false,
                clipEdge: true,
                duration: 100,
                useInteractiveGuideline: true,
                xAxis: {
                    showMaxMin: false,
                    tickFormat: function (d) {
                        return d3.time.format('%x')(new Date(d))
                    }
                },
                yAxis: {
                    tickFormat: function (d) {
                        return d3.format(',.2f')(d);
                    }
                },
                zoom: {
                    enabled: true,
                    scaleExtent: [1, 10],
                    useFixedDomain: false,
                    useNiceScale: false,
                    horizontalOff: false,
                    verticalOff: true,
                    unzoomEventType: 'dblclick.zoom'
                }
            }
        };

        $http({
            method: "GET",
            url: "table3.json"
        })
                .success(function (data) {

                            $scope.data = data;
                    console.log(data);
                        });

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