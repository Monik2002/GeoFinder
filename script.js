const map = L.map('map')
map.setView([0, 0], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

// const marker = L.marker([0,0]).addTo(map);
let marker,circle,zoomed;

navigator.geolocation.watchPosition((pos) => {
const lat = pos.coords.latitude;
const lgn = pos.coords.longitude;

// if(marker){
//     map.removelayer(marker);
//     map.removelayer(circle);
// }

const cusicon = L.icon({
iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
iconSize: [50,50],
iconAnchor: [25,50],
// popupAnchor: [0,-50]
})

marker = L.marker([lat,lgn],{
        // draggable: true,
        // autoPan: true,
    title: "Meow",
    icon: cusicon
}).addTo(map);
marker.setLatLng([lat, lgn]).update();
map.setView([lat,lgn],13);
let template = `<strong>Hi! Its you here at this location</strong>
<a href= "https://www.google.com/maps/@${lat},${lgn},5.77z?entry=ttu">
<div id="image">
<img width="150px" height="150px" src="https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="">
</div>
</a>`
marker.bindPopup(template);

const circle = L.circle([lat,lgn],{
    radius: 500,
    // radius: accuracy,
    color: 'red',
    fillColor: 'green',
    fillOpacity: 0.5
}).addTo(map)
    // .bindPopup("hii i am a circle")
// if(!zoomed){
//     zoomed = map.fitBounds(circle.getBounds())
// }
});


