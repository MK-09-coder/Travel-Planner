let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat:12.9716 , lng: 77.5946},
    zoom: 10,
  });
  var myOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
      

  var dirService = new google.maps.DirectionsService();
  var dirService2 = new google.maps.DirectionsService();
  var dirService4 = new google.maps.DirectionsService();
  var dirService5 = new google.maps.DirectionsService();
  var dirService6 = new google.maps.DirectionsService();
  var dirService7 = new google.maps.DirectionsService();
  var dirService8 = new google.maps.DirectionsService();
  var dirService9 = new google.maps.DirectionsService();
  var dirService10 = new google.maps.DirectionsService();
  var dirService11 = new google.maps.DirectionsService();

  var dirRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer2 = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer4 = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer5 = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer6 = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer7 = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer8 = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer9 = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer10 = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var dirRenderer11 = new google.maps.DirectionsRenderer({suppressMarkers: true});

  dirRenderer.setMap(map);
  dirRenderer2.setMap(map);
  dirRenderer4.setMap(map);
  dirRenderer5.setMap(map);
  dirRenderer6.setMap(map);
  dirRenderer7.setMap(map);
  dirRenderer8.setMap(map);
  dirRenderer9.setMap(map);
  dirRenderer10.setMap(map);
  dirRenderer11.setMap(map);

  var request = {
    origin: new google.maps.LatLng(13.1989,77.7068),
    destination: new google.maps.LatLng(13.3702,77.6835),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request2 = {
    origin: new google.maps.LatLng(13.1989,77.7068),
    destination: new google.maps.LatLng(12.9988,77.5921),
    travelMode: google.maps.TravelMode.DRIVING  
  };
  var request4 = {
    origin: new google.maps.LatLng(12.9849,77.5896),
    destination: new google.maps.LatLng(12.9797,77.5912),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request5 = {
    origin: new google.maps.LatLng(12.9797,77.5912),
    destination: new google.maps.LatLng(13.0098,77.5511),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request6 = {
    origin: new google.maps.LatLng(12.9797,77.5912),
    destination: new google.maps.LatLng(12.9752,77.5963),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request7 = {
    origin: new google.maps.LatLng(12.9797,77.5912),
    destination: new google.maps.LatLng(12.9764,77.5929),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request8 = {
    origin: new google.maps.LatLng(12.9764,77.5929),
    destination: new google.maps.LatLng(12.9822,77.6084),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request9 = {
    origin: new google.maps.LatLng(12.9764,77.5929),
    destination: new google.maps.LatLng(12.9507,77.5848),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request10 = {
    origin: new google.maps.LatLng(12.9507,77.5848),
    destination: new google.maps.LatLng(12.7986,77.5678),
    travelMode: google.maps.TravelMode.DRIVING
  };
  var request11 = {
    origin: new google.maps.LatLng(12.9507,77.5848),
    destination: new google.maps.LatLng(12.8346,77.4010),
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
  dirService11.route(request11, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      dirRenderer11.setDirections(result);
    }
  });
}
window.initMap = initMap;