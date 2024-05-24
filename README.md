# Country Weather

This project showcases a webpage that displays weather information for countries around the world. It fetches data from the REST Countries API and the OpenWeatherMap API to provide detailed information about each country, including the current weather.

## Table of Contents

- [Description](#description)
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description

The **Country Weather** project is a web application that lists countries with their respective details and current weather information. When a user clicks the "Click for Weather" button, it fetches the weather data for the specified country's coordinates and displays it on the card.

The project demonstrates the use of asynchronous JavaScript (using async/await) to fetch data from APIs and dynamically update the webpage content. It uses Bootstrap for responsive design and basic HTML, CSS, and JavaScript for structuring and styling the webpage.

## Demo

You can view a live demo of the project [here](#).

## Features

- **Country Information**: Displays name, capital, region, country code, latitude, and longitude of each country.
- **Weather Information**: Fetches and displays the current temperature of the selected country.
- **Responsive Design**: The layout adjusts gracefully to different screen sizes.
- **Bootstrap Integration**: Utilizes Bootstrap for styling and responsive design.

## Technologies Used

- **HTML5**: For structuring the webpage.
- **CSS3**: For styling the webpage.
- **Bootstrap 4.6.2**: For responsive design and pre-built components.
- **JavaScript**: For adding interactivity and fetching API data.

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/country-weather.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd country-weather
    ```

3. **Open the `index.html` file** in your web browser to view the page.

## Usage

1. Open the `index.html` file in a web browser.
2. Browse the list of countries displayed.
3. Click the "Click for Weather" button on any country card to fetch and display the current temperature for that country's location.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes.
4. Commit your changes:
    ```bash
    git commit -m 'Add new feature'
    ```
5. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
6. Open a pull request.