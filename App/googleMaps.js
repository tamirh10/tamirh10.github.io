/**
 * Created by tamirWindow on 06-Aug-16.
 */

    /*
     * This demo illustrates the coordinate system used to display map tiles in the
     * API.
     *
     * Tiles in Google Maps are numbered from the same origin as that for
     * pixels. For Google's implementation of the Mercator projection, the origin
     * tile is always at the northwest corner of the map, with x values increasing
     * from west to east and y values increasing from north to south.
     *
     * Try panning and zooming the map to see how the coordinates change.
     */
    var myLatLng = {lat: 32.086324, lng: 34.782005};
    /** @constructor */
    function CoordMapType(tileSize) {
    this.tileSize = tileSize;
}

    CoordMapType.prototype.getTile = function(coord, zoom, ownerDocument) {
    var div = ownerDocument.createElement('div');
    div.innerHTML = coord;
    div.style.width = this.tileSize.width + 'px';
    div.style.height = this.tileSize.height + 'px';
    div.style.fontSize = '10';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px';
    div.style.borderColor = '#AAAAAA';
    return div;
};

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: myLatLng
        });

        // Insert this overlay map type as the first overlay map type at
        // position 0. Note that all overlay map types appear on top of
        // their parent base map.
        map.overlayMapTypes.insertAt(
            0, new CoordMapType(new google.maps.Size(256, 256)));

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!'
        });
        // var directionsService = new google.maps.DirectionsService;
        // var directionsDisplay = new google.maps.DirectionsRenderer;
        // map = new google.maps.Map(document.getElementById('map'), {
        //     zoom: 15,
        //     center: myLatLng
        // });
        // directionsDisplay.setMap(map);
        //
        // document.getElementById('submit').addEventListener('click', function() {
        //     calculateAndDisplayRoute(directionsService, directionsDisplay);
        // });
        //
    }

// function calculateAndDisplayRoute(directionsService, directionsDisplay) {


    /*directionsService.route({
        origin: document.getElementById('start').value,
        destination: document.getElementById('end').value,


        travelMode: 'DRIVING'
    },
        function(response, status) {
        if (status === 'OK') {
            console.log("OK");
            directionsDisplay.setDirections(response);
            var route = response.routes[0];
            var summaryPanel = document.getElementById('directions-panel');
            summaryPanel.innerHTML = '';
            // For each route, display summary information.
            for (var i = 0; i < route.legs.length; i++) {
                var routeSegment = i + 1;
                summaryPanel.innerHTML += '<b>הוראות הגעה: '
                    '</b><br>';
                summaryPanel.innerHTML += route.legs[i].start_address + ' to -'.bold() ;
                summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
                summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
            }
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });

    }*/






