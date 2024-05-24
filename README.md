
Rest Countries Weather API
This project displays a list of countries along with their respective flags, capital cities, regions, country codes, latitudes, and longitudes. Additionally, users can click a button to retrieve and display the current temperature for each country using the OpenWeatherMap API.

Table of Contents
Installation
Usage
Project Structure
API Reference
Contributing
License
Installation
Clone the repository:

Copy code
git clone https://github.com/your-username/rest-countries-weather.git
cd rest-countries-weather
Open index.html in your browser:

You can simply open the index.html file in any web browser to run the application.

Usage
When you open the index.html file, the application fetches a list of countries from the Rest Countries API and displays them as cards. Each card contains the following information:

Country Name
Country Flag
Capital City
Region
Country Code
Latitude and Longitude
A button to fetch and display the current temperature for the country
To get the weather information for a country, click the "Click for Weather" button on the respective country's card. The temperature will replace the button.

Project Structure
The project consists of the following files:

index.html: The main HTML file that sets up the structure of the web page.
style.css: The CSS file that contains styles for the page.
script.js: The JavaScript file that contains the logic for fetching and displaying data from the APIs.
API Reference
Rest Countries API
Endpoint: https://restcountries.com/v3.1/all
Method: GET
Description: Fetches data for all countries.
OpenWeatherMap API
Endpoint: https://api.openweathermap.org/data/2.5/weather
Method: GET
Parameters:
lat: Latitude of the location.
lon: Longitude of the location.
appid: Your OpenWeatherMap API key.
Example Request:


Copy code
https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=YOUR_API_KEY
Response:

The response contains the weather data, including temperature, which is accessed as data1.main.temp in the code.