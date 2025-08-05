# 🌤️ Weather App — React + Material UI + OpenWeatherMap

This is a mini weather application built using **React** and **Material UI (MUI)**.  
It allows users to search for any city's weather using the **OpenWeatherMap API** and displays key weather details like temperature, humidity, and more.

---

## 🚀 Features

- 🔍 Search weather by city name
- 📦 Uses `useState` to manage form input
- 🌐 Fetches real-time data from OpenWeatherMap API
- 💾 API key is securely stored in `.env`
- 🎨 Clean, responsive UI with Material UI components
- 📋 Console logs extracted weather details:
  - Temperature (`temp`)
  - Min/Max temperature
  - Feels like temperature
  - Humidity
  - Weather description

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Styling:** Material UI (MUI)
- **API:** OpenWeatherMap API
- **State Management:** React Hooks (`useState`)
- **Environment:** Vite

---

## 🔐 Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/siddhant-gavai/mini-project-react.git
   cd mini-project-react

   ```

2. **Install dependencies**

   npm install

3. **Create .env file in the root directory**

VITE_WEATHER_API_KEY=your_openweathermap_api_key_here

4.  **Start the dev server**

npm run dev
