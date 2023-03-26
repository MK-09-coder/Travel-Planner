let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.5072, lng: 0.1276},
    zoom: 10,
  });
  new google.maps.Marker({
    position: {lat: 51.4700,lng: -0.4543},
    map:map,
    label: "Heathrow International Airport",
    animation: google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:51.5033, lng:-0.1196},
    map:map,
    label:'London Eye',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:51.6901, lng:-0.4180},
    map:map,
    label:'Warner Bros. Studio Tour London',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:51.5230, lng:-0.1544},
    map:map,
    label:'Madame Tussauds London',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:51.5353, lng:-0.1534},
    map:map,
    label:'ZSL London Zoo',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:51.4787, lng:-0.2956},
    map:map,
    label:'Kew Gardens',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:51.5077, lng:-0.0180},
    map:map,
    label:'Emirates Air line cable car',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:51.5080, lng:-0.1281},
    map:map,
    label:'Piccadilly Circus And Trafalgar Square ',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:51.5007, lng:-0.1246},
    map:map,
    label:'Big Ben',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:51.501476, lng:-0.140634},
    map:map,
    label:'Buckingham Palace',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:51.5194, lng:-0.1270},
    map:map,
    label:'The British Museum',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:51.5138, lng:-0.0984},
    map:map,
    label:'St Pauls Cathedral',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:51.5081, lng:-0.0759},
    map:map,
    label:'Tower Of London',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:51.4839, lng:-0.6044},
    map:map,
    label:'Windsor Castle',
    animation:google.maps.Animation.DROP
  })
  new google.maps.Marker({
    position:{lat:51.5078, lng:-0.0972},
    map:map,
    label:'Shakespeares Globe Theatre',
    animation:google.maps.Animation.DROP
  })
}
window.initMap = initMap;
