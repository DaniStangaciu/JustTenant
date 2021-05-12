// Initialize and add the map
function initMap() {
    var locations = [

        ['Anthony Gold', 51.50537, -0.08443, 2],
        ['Deighton Pierce Glynn', 51.5311, 0.1037, 5],
        ['Gans & Co Solicitors LLP', 51.4665, 0.0662, 6],
        ['GT Stewart', 51.460935606148134, -0.08014574400738096, 6],
        ['Hansen Palomares', 51.4942, 0.1105, 8],
        ['Morrison Spowart Solictors', 51.4451, 0.0195, 10],
        ['TV Edwards Solicitors LLP', 51.5206, 0.0545, 14],
        ['Wainwright & Cummins LLP', 51.4612, 0.1111, 16],
        ['Bloomfield Solictors',51.49608546844893, 0.14225376265765458 , 16],
        ['Hodge Jones & Allen Solicitors',51.526806003452805, -0.13696375268462269 , 16],
        ['Sternberg Reed',51.544696915892246, 0.07990522620239444 , 16],
        ['Grand Machyle Solicitors',51.39781704392408, -0.074954744044039, 16],
        ['Brixton Advice Centre Legal Advice Clinic',51.45671594293158, -0.10590800171424246 , 16],
        ['Disability Law Service',51.48593741258165, -0.11635653054935527, 16],
        ['Edwards Duthie Shamash Solicitors',51.50301246302862, -0.11045168835330066, 16]



    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: new google.maps.LatLng(51.4743, 0.0941),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}
