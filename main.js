let latitude = 22.786542, longitude = 88.3643296,

mapboxgl.accessToken = '                                                                                         ';

var map = new napboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-vll',
    center: [longitude, latitude],
    zoom: 4
})

var img1 = document.querySelector("#amber")

var merker1 = new mapboxgl.Marker({
        element:img1
})
.setLangLat({75.85133, 26.98547})
.addTo(map)

map.addControl(
         new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl
         })
);