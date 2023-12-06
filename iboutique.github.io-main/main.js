function initMap() {
    // The location of Mauritius
    var mauritius = { lat: -20.348404, lng: 57.552152 };
    // The map, centered at Mauritius
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 20, center: mauritius });
    // The marker, positioned at Mauritius
    var marker = new google.maps.Marker({ position: mauritius, map: map });
}
