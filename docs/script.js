const filterButtons = document.querySelectorAll('.project-filter__button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Remove active class from all buttons
    filterButtons.forEach(function(btn) {
      btn.classList.remove('project-filter__button--active');
    });
    // Add active class to clicked button
    this.classList.add('project-filter__button--active');
    // Filter projects based on category
    const category = this.getAttribute('data-filter');
    projectCards.forEach(function(card) {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const nameInput = document.querySelector("#name");
    const nameError = document.querySelector("#name-error");
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required.";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    const emailInput = document.querySelector("#email");
    const emailError = document.querySelector("#email-error");
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    const messageInput = document.querySelector("#message");
    const messageError = document.querySelector("#message-error");
    if (messageInput.value.trim() === "") {
      messageError.textContent = "Message is required.";
      isValid = false;
    } else {
      messageError.textContent = "";
    }

    if (isValid) {
        contactForm.reset(); // Reset the form fields
        alert("Thank you for your message! We will get back to you soon.");
      // Form is valid, you can submit it or perform other actions
    }
  });
}

const weatherIconElement = document.querySelector('.nav-weather__icon');
const weatherTempElement = document.querySelector('.nav-weather__temp');

if (weatherIconElement && weatherTempElement) {
 const boston = { lat: 42.3601, lon: -71.0589 }; // Boston coordinates

 const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${boston.lat}&longitude=${boston.lon}&current=temperature_2m,weather_code&temperature_unit=fahrenheit`;

 function getWeatherIcon(Code) {
   switch (Code) {
     case 0: return '☀️'; // Clear sky
     case 1: return '🌤️'; // Mainly clear
     case 2: return '⛅'; // Partly cloudy
     case 3: return '☁️'; // Overcast
     case 45: return '🌫️'; // Fog
     case 48: return '🌨️'; // Depositing rime fog
     case 51: return '🌦️'; // Light drizzle
     case 53: return '🌦️'; // Moderate drizzle
     case 55: return '🌦️'; // Dense drizzle
     case 56: return '🌧️'; // Light freezing drizzle
     case 57: return '🌧️'; // Dense freezing drizzle
     case 61: return '🌦️'; // Slight rain
     case 63: return '🌧️'; // Moderate rain
     case 65: return '🌧️'; // Heavy rain
     case 66: return '🌨️'; // Light freezing rain
     case 67: return '🌨️'; // Heavy freezing rain
     case 71: return '❄️'; // Slight snow fall
     case 73: return '❄️'; // Moderate snow fall
     case 75: return '❄️'; // Heavy snow fall
     case 77: return '🧊'; // Snow grains
     case 80: return '🌦️'; // Slight rain showers
     case 81: return '🌧️'; // Moderate rain showers
     case 82: return '⛈️'; // Heavy rain showers
     case 85: return '🌨️'; // Slight snow showers
     case 86: return '🌨️'; // Heavy snow showers
     default: return '❓';
   }
 }

 fetch(weatherUrl)
   .then(function (response) {
    if (!response.ok) {
      throw new Error('Weather request failed');
    }
     return response.json();
   })
   .then(function (data) {
     const temperature = Math.round(data.current.temperature_2m);
        const weatherCode = data.current.weather_code; 
        weatherIconElement.textContent = getWeatherIcon(weatherCode);
        weatherTempElement.textContent = `${temperature}°F`;
   })
   .catch(function (error) {
     console.error('Error fetching weather data:', error);
     weatherIconElement.textContent = '❌';
     weatherTempElement.textContent = 'N/A';
   });
}   