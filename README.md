# 🌤️ Weather Dashboard

🌍 **[View Live Demo: weather-web-app-orcin.vercel.app](https://weather-web-app-orcin.vercel.app)**

A beautiful, fully-responsive weather application that provides real-time current weather data, expanded environmental metrics, and a dynamic 5-day forecast. Designed with a modern, frosted glassmorphism aesthetic and powered by the OpenWeatherMap API.

## ✨ Features

- **Real-Time Data:** Get up-to-the-minute weather conditions for any city worldwide.
- **Extended Metrics:** Displays advanced data including "Feels Like" temperature, atmospheric pressure, humidity, and wind speed.
- **5-Day Forecast:** Dynamic 5-day weather forecast with custom weather condition iconography.
- **Glassmorphism UI:** Built with gorgeous blur effects, semi-transparent backgrounds, and modern `Outfit` typography to wow users.
- **Responsive Design:** Functions flawlessly on full desktop width or mobile screens featuring stackable cards.

## 🛠️ Technology Stack

- **Backend:** Node.js, Express.js
- **API Requests:** Axios
- **Frontend / Templating:** EJS (Embedded JavaScript)
- **Styling:** Custom Vanilla CSS & Bootstrap 5.3.2 
- **Icons:** Bootstrap Icons
- **Deployment:** Vercel (Serverless functions)

## 🚀 Local Development

To get a local development environment up and running, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/en/) installed on your machine.
- An [OpenWeatherMap API Key](https://openweathermap.org/api).

### Installation

1. **Clone the repository:**
   ```bash
   git clone [your-repository-url]
   cd weather-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root of the project to safely store your API key:
   ```env
   Api_key=your_open_weather_map_api_key_here
   ```

4. **Start the application:**
   ```bash
   node wether.js
   # or run 'nodemon wether.js' for auto-reloading
   ```

5. **Open in browser:**
   Navigate to `http://localhost:3000` to interact with the dashboard.

## 🌐 Deployment (Vercel)

This application is configured out-of-the-box for cloud deployment via Vercel using the provided `vercel.json` config.

1. Push your code to a GitHub repository.
2. Import the project in your Vercel Dashboard.
3. *Critically important:* Before your first deployment finishes, go to the project's **Settings > Environment Variables** in Vercel.
4. Add your API key:
   - **Key:** `Api_key`
   - **Value:** `<your_actual_api_key>`
5. Click **Deploy**. Vercel will bundle the Express server correctly and deploy your app.

## 📁 File Structure Overview

```
├── public/                 
│   ├── css/
│   │   └── weather.css     # The dedicated custom CSS styles
│   └── background.jpg      # The bundled sky/clouds aesthetic background
├── views/                  
│   └── weatherindex.ejs    # The frontend HTML view template
├── wether.js               # The core Node/Express server and route logic
├── vercel.json             # Deployment routing configuration
├── package.json            # Dependencies and scripts
└── .env                    # (Not tracked) Stores secret API keys securely
```

---
*Built with ❤️ utilizing Node.js and the OpenWeatherMap API.*
