let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:12.9716 , lng: 77.5946},
    zoom: 10,
  });
  new google.maps.Marker({
    position: {lat: 13.1989,lng: 77.7068},
    map:map,
    label: "Kempegowda International Airport",
    animation: google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:12.9797, lng:77.5912},
    map:map,
    label:'Vidhana Soudha',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:13.3702, lng:77.6835},
    map:map,
    label:'Nandi Hills',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:12.9507, lng:77.5848},
    map:map,
    label:'Lalbagh',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:13.0098, lng:77.5511},
    map:map,
    label:'Iskcon Temple',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:12.9988, lng:77.5921},
    map:map,
    label:'Bangalore Palace',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:12.9822, lng:77.6084},
    map:map,
    label:'Commercial Street and Brigade road',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:12.9849, lng:77.5896},
    map:map,
    label:'Jawaharlal Nehru Planetarium and Indira Gandhi Musical fountain park',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:12.7986, lng:77.5678},
    map:map,
    label:'Bannerghatta zoo',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:12.9764, lng:77.5929},
    map:map,
    label:'Cubbon Park',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:12.9752, lng:77.5963},
    map:map,
    label:'Vishvesvaraya Industrial and Technological Museum',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:12.8346, lng:77.4010},
    map:map,
    label:'Wonderla Amusement Park',
    animation:google.maps.Animation.DROP
  })
}
window.initMap = initMap;
