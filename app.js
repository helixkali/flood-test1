const map = L.map('map').setView([20.5937, 78.9629], 5);  // India center
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Get user's location
navigator.geolocation.getCurrentPosition((pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    L.marker([lat, lon]).addTo(map).bindPopup("You are here").openPopup();

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_API_KEY`)
    .then(res => res.json())
    .then(data => {
        alert(`Humidity: ${data.main.humidity}% | Rain: ${data.weather[0].description}`);
    });
});
