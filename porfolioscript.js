function myFunction(){
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/* Set the size of the div element that contains the map */

  function initMap() {
    
    const paolbo = { lat: 13.718463, lng: 123.248654 };
    // The map, centered at Paolbo
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: paolbo,
    });
    // The marker, positioned at Paolbo
    const marker = new google.maps.Marker({
      position: paolbo,
      map: map,
    });
  }
  
  window.initMap = initMap;
