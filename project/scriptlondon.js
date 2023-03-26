let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.5072, lng: 0.1276},
    zoom: 10,
  });
  var myOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
      

  var dirService = new google.maps.DirectionsService();
  var dirService2 = new google.maps.DirectionsService();
  var dirService3 = new google.maps.DirectionsService();
  var dirService4 = new google.maps.DirectionsService();
  var dirService5 = new google.maps.DirectionsService();
  var dirService6 = new google.maps.DirectionsService();
  var dirService7 = new google.maps.DirectionsService();
  var dirService8 = new google.maps.DirectionsService();
  var dirService9 = new google.maps.DirectionsService();
  var dirService10 = new google.maps.DirectionsService();

  var dirRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer2 = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer3 = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer4 = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer5 = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer6 = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer7 = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer8 = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer9 = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer10 = new google.maps.DirectionsRenderer({suppressMarkers: true});

  dirRenderer.setMap(map);
  dirRenderer2.setMap(map);
  dirRenderer3.setMap(map);
  dirRenderer4.setMap(map);
  dirRenderer5.setMap(map);
  dirRenderer6.setMap(map);
  dirRenderer7.setMap(map);
  dirRenderer8.setMap(map);
  dirRenderer9.setMap(map);
  dirRenderer10.setMap(map);

  var request = {
    origin: new google.maps.LatLng(51.4700,-0.4543),
    destination: new google.maps.LatLng(51.6901,-0.4180),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request2 = {
    origin: new google.maps.LatLng(51.501476,-0.140634),
    destination: new google.maps.LatLng(51.5230,-0.1544),
    travelMode: google.maps.TravelMode.DRIVING  
  };
  var request3 = {
    origin: new google.maps.LatLng(51.4839,-0.6044),
    destination: new google.maps.LatLng(51.4787,-0.2956),
    travelMode: google.maps.TravelMode.DRIVING   
  };
  var request4 = {
    origin: new google.maps.LatLng(51.4839,-0.6044),
    destination: new google.maps.LatLng(51.5194,-0.1270),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request5 = {
    origin: new google.maps.LatLng(51.5080,-0.1281),
    destination: new google.maps.LatLng(51.501476,-0.140634),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request6 = {
    origin: new google.maps.LatLng(51.5230,-0.1544),
    destination: new google.maps.LatLng(51.5353,-0.1534),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request7 = {
    origin: new google.maps.LatLng(51.5080,-0.1281),
    destination: new google.maps.LatLng(51.5033,-0.1196),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request8 = {
    origin: new google.maps.LatLng(51.5033,-0.1196),
    destination: new google.maps.LatLng(51.5138,-0.0984),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request9 = {
    origin: new google.maps.LatLng(51.5138,-0.0984),
    destination: new google.maps.LatLng(51.5077,-0.0180),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request10 = {
    origin: new google.maps.LatLng(51.5033,-0.01196),
    destination: new google.maps.LatLng(51.5078,-0.0972),
    travelMode: google.maps.TravelMode.DRIVING
  };
  dirService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      dirRenderer.setDirections(result);
    }
  });
  dirService2.route(request2, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      dirRenderer2.setDirections(result);
    }
  });
  dirService3.route(request3, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      dirRenderer3.setDirections(result);
    }
  });
  dirService4.route(request4, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      dirRenderer4.setDirections(result);
    }
  });
  dirService5.route(request5, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      dirRenderer5.setDirections(result);
    }
  });
  dirService6.route(request6, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      dirRenderer6.setDirections(result);
    }
  });
  dirService7.route(request7, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      dirRenderer7.setDirections(result);
    }
  });
  dirService8.route(request8, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      dirRenderer8.setDirections(result);
    }
  });
  dirService9.route(request9, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      dirRenderer9.setDirections(result);
    }
  });
  dirService10.route(request10, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      dirRenderer10.setDirections(result);
    }
  });
}
window.initMap = initMap;