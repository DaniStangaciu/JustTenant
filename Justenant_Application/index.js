// Initialize and add the map
function initMap() {
    // Location = London
    const london = {
        lat: 51.5018,
        lng: 0.0910
    };
    // The map, centered in London
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: london,
    });

    const marker = new google.maps.Marker({
        position: london,
        map: map,
    });
}