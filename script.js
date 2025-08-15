document.getElementById("sendLocationBtn").addEventListener("click", function() {
    const statusEl = document.getElementById("status");
  
    if ("geolocation" in navigator) {
      statusEl.textContent = "Getting your location...";
      
      navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        
        statusEl.textContent = "Location captured! Opening SMS...";

        let smsLink = `sms:+639123456789?body=I found your pet! My location: https://maps.google.com/?q=${lat},${lon}`;
        window.location.href = smsLink;
        
      }, function(error) {
        statusEl.textContent = "Unable to retrieve location. Please enable GPS.";
      });
      
    } else {
      statusEl.textContent = "Geolocation not supported on this device.";
    }
  });
  