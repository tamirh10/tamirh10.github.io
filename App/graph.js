$(function () {
    var chartData = [];
    var colors = [];
    $.ajax({
        type: "GET",
        url: "piechart.json",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            $.each(result, function (i, j) {
                chartData.push(j.population);
                var currentColor = '#' + Math.floor(Math.random() * j.population + 5566656).toString(16);
                colors.push(currentColor);
            });
            console.log(chartData);
            var radius = 150;
            var colorScale = d3.scale.ordinal().range(colors);

            var area = d3.select('p').append('svg')
                                        .attr('width', 440)
                                        .attr('height', 400);
            var pieGroup = area.append('g').attr('transform', 'translate(220, 200)');
            //For Doughnut Chart
            var arc = d3.svg.arc()
                        .innerRadius(50)
                        .outerRadius(radius);
            //For Pie Chart
            //var arc = d3.svg.arc()
              //          .innerRadius(0)
                //        .outerRadius(radius);

            var pie = d3.layout.pie()
                        .value(function (data) { return data; });

            var arcs = pieGroup.selectAll('.arc')
                               .data(pie(chartData))
                               .enter()
                               .append('g')
                               .attr('class', 'arc');

            arcs.append('path')
                .attr('d', arc)
                .attr('fill', function (d) { return colorScale(d.data); });
            arcs.append('text')
                .attr('transform', function (data) { return 'translate(' + arc.centroid(data) + ')'; })
                .attr('text-anchor', 'middle')
                .attr('font-size', '1em')
                .text(function (data) { return data.data; });
        },
        error: function (msg) {
            $("#result").text(msg);
        }
    });
});