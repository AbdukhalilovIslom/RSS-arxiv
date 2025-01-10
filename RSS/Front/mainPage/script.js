function initMap() {

    var markers = [];

    // Create a custom marker icon.

    var image = {
        url: 'http://i64.tinypic.com/jpvvkh.png',
        scaledSize: new google.maps.Size(25, 25)
    };

    // Create an array of locations, all coordinates are random and general ones from Google Maps.

    var locations = [
        ['0', 'Santa Ana', image, 33.7455, -117.8677, 'Home'],
        ['0', 'Santa Ana', image, 33.7455, -117.8677, 'Family'],
        ['1', 'Fountain Valley', image, 33.7090, -117.9544, 'Friends'],
        ['2', 'Los Angeles', image, 34.0522, -118.2437, 'Family'],
        ['2', 'Los Angeles', image, 34.0522, -118.2437, 'Friends'],
        ['3', 'Garden Grove', image, 33.7743, -117.9380, 'Family'],
        ['4', 'Westminster', image, 33.7592, -117.9897, 'Friends'],
        ['5', 'Huntington Beach', image, 33.6595, -117.9988, 'Friends'],
        ['6', 'Irvine', image, 33.6846, -117.8265, 'Friends'],
        ['7', 'Lake Forest', image, 33.6469, -117.6861, 'Friends'],
        ['8', 'Dana Point', image, 33.4672, -117.6981, 'Family'],
        ['9', 'Long Beach', image, 33.7701, -118.1937, 'Friends'],
        ['10', 'Buena Park', image, 3.8674, -117.9981, 'Friends'],
        ['11', 'Chino Hills', image, 33.9898, -117.7326, 'Friends'],
        ['12', 'Bakersfield', image, 35.3733, -119.0187, 'Friends']
    ];

    // Create a map.
    var map = new google.maps.Map(document.getElementById('map'), {

        // Set up options and styles for map.
        center: {
            lat: 41.311081,
            lng: 69.240562

        },
        zoom: 11,
        mapTypeControl: false, // Disable Map & Satellite Views.
        streetViewControl: false, // Disable Street View.
        styles: [{ // Assasin's Creed IV Style by Sarah Frisk via snazzymaps.com.
            "featureType": "all",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }, {
                "saturation": "-100"
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#4d6059"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#4d6059"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#4d6059"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "lightness": 21
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#4d6059"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#4d6059"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#7f8d89"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#7f8d89"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#7f8d89"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#7f8d89"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#7f8d89"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#7f8d89"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#7f8d89"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#7f8d89"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#2b3638"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#2b3638"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#24282b"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#24282b"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }]
    });

    // Loop through length of locations.

    for (var i = 0; i < locations.length; i++) {
        addMarker(locations[i]);
    }

    // Create marker(s).

    function addMarker(properties) {
        var title = properties[1];
        var content = properties[1];
        var icon = properties[2];
        var position = new google.maps.LatLng(properties[3], properties[4]);
        var category = properties[5];

        // Set up info window when marker is clicked.

        var infoWindow = new google.maps.InfoWindow({
            content: ''
        });

        var marker = new google.maps.Marker({
            map: map,
            title: title,
            icon: icon,
            position: position,
            category: category,
            infowindow: infoWindow
        });
        markers.push(marker);

        // Check for icon property.

        if (properties.icon) {
            // Set up icon image.
            marker.setIcon(properties.icon);
        }

        // Check for content property.

        google.maps.event.addListener(marker, 'click', (function(marker, content) {
            return function() {
                infoWindow.setContent(content);
                infoWindow.open(map, marker);
                map.panTo(this.getPosition());
                map.setZoom(11); // Revert back to zoomed view when marker is clicked.
                closeAllInfoWindows(map);
                this.infowindow.open(map, this);
            }
        })(marker, content));
    }

    // Filter locations by category selected from dropdown menu. 

    filterLocations = function(category) {
        for (var i = 0; i < locations.length; i++) {
            properties = markers[i];

            if (properties.category == category || category.length === 0) {
                properties.setVisible(true);
                closeAllInfoWindows(map); // Hide all info windows when selection from dropdown menu changes.
            } else {
                properties.setVisible(false);
            }
        }
    }

    // Close all info windows and open only one that corresponds to when marker is clicked.

    function closeAllInfoWindows(map) {
        markers.forEach(function(marker) {
            marker.infowindow.close(map, marker);
        });
    }
}