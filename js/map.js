      // Initialize and add the map
      function initMap() {
        // The location of Uluru
        const uluru = { lat: 52.4037713, lng: 16.9085609 };
        const pointer = '../images/map_pointer.png';
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("google-map"), {
          zoom: 15,
          center: uluru,
          disableDefaultUI: true,
        });
        
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
      }
