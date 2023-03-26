let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat:40.7128,lng:-74.0060},
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
    origin: new google.maps.LatLng(40.6413,-73.7781),
    destination: new google.maps.LatLng(40.7492,-73.9675),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request2 = {
    origin: new google.maps.LatLng(40.7492,-73.9675),
    destination: new google.maps.LatLng(40.7587,-73.9787),
    travelMode: google.maps.TravelMode.DRIVING  
  }; 
  var request3 = {
    origin: new google.maps.LatLng(40.7587,-73.9787),
    destination: new google.maps.LatLng(40.7484,-73.9857),
    travelMode: google.maps.TravelMode.DRIVING   
  };
  var request4 = {
    origin: new google.maps.LatLng(40.7587,-73.9787),
    destination: new google.maps.LatLng(40.7527,-73.9772),
    travelMode: google.maps.TravelMode.WALKING
  };
  var request5 = {
    origin: new google.maps.LatLng(40.7587,-73.9787),
    destination: new google.maps.LatLng(40.7812,-73.9665),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request6 = {
    origin: new google.maps.LatLng(40.7812,-73.9665),
    destination: new google.maps.LatLng(40.7645,-73.9996),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request7 = {
    origin: new google.maps.LatLng(40.7812,-73.9665),
    destination: new google.maps.LatLng(40.7632,-73.9831),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request8 = {
    origin: new google.maps.LatLng(40.7812,-73.9665),
    destination: new google.maps.LatLng(40.7580,-73.9855),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request9 = {
    origin: new google.maps.LatLng(40.7580,-73.9855),
    destination: new google.maps.LatLng(40.7480,-74.0048),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request10 = {
    origin: new google.maps.LatLng(40.7480,-74.0048),
    destination: new google.maps.LatLng(40.7061,-73.9969),
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