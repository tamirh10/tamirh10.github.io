/**
 * Created by Tamir on 02-Aug-16.
 */
$(function () {
    function Plot(index) {

        //Get the data from Ajax request
        d3.json("/Home/SalesData", function (error, d) {
            data = d;
            var controlHTML;
            controlHTML = '<div class="SearchToolDiv"  id ="SearchOptionDiv" style="float: right;"><span class="SearchToolSpan" id="searchTool"><table class="formtable" style="table-layout: fixed;"><tbody><tr><td>';
            for (var i = 0; i < data.length; i++) {
                controlHTML = controlHTML + '<input type="checkbox" onclick="BuildBars(' + i + ',this)"';
                if (i == index) {
                    controlHTML = controlHTML + ' checked ';
                }
                controlHTML = controlHTML + '><span style="display:inline !important; color:black">' + data[i].CountryName + ' </span>';
            }
            controlHTML = controlHTML + '</td></tr></tbody></table></span></div>'
            $(controlHTML).appendTo($("#chart"));

            //Initiate your chart element
            chart = d3.select("#chart")
                .append("svg")  //append svg element inside #chart
                .attr("width", width + (2 * margin.left) + margin.right)    //set width
                .attr("height", height + margin.top + margin.bottom);  //set height

            BuildBars(index,null);

        });

    }
    var chartData = [];
    var colors = [];
    var chart;
    var data;
    var margin = { top: 20, right: 30, bottom: 30, left: 40 },
        width = 1000 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
    $.ajax({
        type: "GET",
        url: "http://localhost:3001/angular-webapi/api/Movies",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            $.each(result, function (i, j) {
                chartData.push(j.name);
                var currentColor = '#' + Math.floor(Math.random() * j.name + 5566656).toString(16);
                colors.push(currentColor);
            });
            console.log(chartData);
            chart = d3.select("p3")
                .append("svg")  //append svg element inside #chart
                .attr("width", width + (2 * margin.left) + margin.right)    //set width
                .attr("height", height + margin.top + margin.bottom);  //set height

            var bar = chart.selectAll("g")
                .data(data[index].Sales)
                .enter()
                .append("g")
                .attr("transform", function (d) {
                    return "translate(" + x(d.Year) + ", 0)";
                });

            bar.append("rect")
                .attr("y", function (d) {
                    return y(d.SaleRevenue);
                })
                .attr("x", function (d) {
                    return (margin.left);
                })
                .attr("height", function (d) {
                    return height - y(d.SaleRevenue);
                })
                .attr("width", x.rangeBand());
        }
    });
});/**
 * Created by Tamir on 02-Aug-16.
 */
