let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:40.7128,lng:-74.0060},
    zoom: 10,
  });
  new google.maps.Marker({
    position: {lat: 40.6413,lng: -73.7781},
    map:map,
    label: "John F. Kennedy International Airport",
    animation: google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:40.6892, lng:-74.0445},
    map:map,
    label:'Statue of Liberty',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:40.7812, lng:-73.9665},
    map:map,
    label:'Central Park and American Museum of Natural History and Metropolitan Museum of Art',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:40.7587, lng:-73.9787},
    map:map,
    label:'Rockefeller Center & Top of the Rock Observation Deck',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:40.7632, lng:-73.9831},
    map:map,
    label:'Broadway and the Theater District',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:40.7492, lng:-73.9675},
    map:map,
    label:'United Nations Headquaters',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:40.7484, lng:-73.9857},
    map:map,
    label:'Empire State Building',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:40.7480, lng:-74.0048},
    map:map,
    label:'High Line',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:40.7580, lng:-73.9855},
    map:map,
    label:'Times Square',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:40.7527, lng:-73.9772},
    map:map,
    label:'Grand Central Terminal',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:40.7061, lng:-73.9969},
    map:map,
    label:'Brooklyn Bridge',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:40.7645, lng:-73.9996},
    map:map,
    label:'Intrepid Sea, Air and Space Museum',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:40.7127, lng:-74.0134},
    map:map,
    label:'One World Observatory',
    animation:google.maps.Animation.DROP
  })
}
window.initMap = initMap;
