# 🌧️ Blackrain

**Blackrain** is a modern, user-centric weather web app built with **React**, integrated with the **OpenWeatherMap API** for live forecasts and **Firebase** for authentication and persistent user preferences. It offers dynamic visuals, multi-day forecasts, and a personalized experience for every user.

---

## 🌐 Live Demo

Coming Soon...

---

## 🚀 Features

- **🌍 Current Weather Display** – Real-time weather data (temperature, pressure, humidity, etc.) for selected or detected locations.
- **🔍 Location Search** – Search by city, coordinates, ZIP, or country.
- **📍 Geolocation Support** – Automatically detect user location using browser API.
- **🕓 Hourly Forecast** – Weather forecast for the next 24 hours.
- **📅 Daily Forecast** – 7-day weather outlook.
- **🌡️ Temperature Units Toggle** – Switch between Celsius and Fahrenheit.
- **🌧️ Precipitation & Humidity** – Rain/snow probabilities and humidity data.
- **🌤️ Dynamic Weather Icons** – Icons that match weather conditions (clear, rain, snow, etc.).
- **🌅 Sunrise/Sunset Times** – Accurate solar event timings per location.
- **🌫️ Air Quality Index (AQI)** – Real-time AQI data (PM2.5, CO, NO₂, etc.).
- **🔆 UV Index** – UV risk levels to guide sun exposure.
- **⚠️ Weather Alerts** – Government-issued alerts for severe weather.
- **🌓 Dark/Light Mode** – UI toggle for preferred appearance.
- **📦 Offline Support (PWA)** – Cached weather data for offline viewing.
- **💫 Weather-based Animations** – Optional backgrounds based on current conditions.
- **⭐ Favorites** – Save preferred cities for quick access.
- **🔐 Firebase Authentication** – Email/password & Google OAuth login.
- **⚙️ Settings Panel** – Manage units, bookmarks, appearance, etc.
- **📱 Mobile-Responsive Design** – Fully responsive for all screen sizes.
- **♿ Accessibility Features** – High contrast, screen reader support, keyboard navigation.

---

## 🛠️ Tech Stack

- **Frontend**: React (with Vite or CRA)
- **APIs**: [OpenWeatherMap API](https://openweathermap.org/api)
- **Auth & Storage**: Firebase Auth, Firebase Firestore
- **Styling**: TailwindCSS
- **Icons**: Weather Icons / Heroicons
- **Deployment**: Vercel / Firebase Hosting / Netlify (TBD)

---

## 📦 Getting Started

### 🔧 Prerequisites

- Node.js v18+
- Firebase project with authentication and Firestore
- OpenWeatherMap API key

### 🛠️ Installation

```bash
git clone https://github.com/iraqooh/blackrain.git
cd blackrain
npm install
```

## 🔑 Environment Variables

Create a .env file in the root directory with the following:

```ini
VITE_OPENWEATHERMAP_API_KEY=your_openweather_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🚀 Run the App

```bash
npm run dev
```

## 📁 Folder Structure

```bash
/src
 ├── assets/              # Static assets
 ├── components/          # Reusable UI components
 ├── contexts/            # Firebase and theme contexts
 ├── pages/               # Page components (Home, Favorites, Settings, etc.)
 ├── services/            # API handling and data utilities
 ├── styles/              # Global and module CSS
 ├── App.jsx              # Main app component
 └── main.jsx             # Entry point
```

## 🔒 License

This project is licensed under the GNU General Public License v3.0.
See LICENSE for more details.

## 🙌 Contributing

Contributions are welcome! If you'd like to submit a feature, fix, or improvement, please fork the repository and open a pull request.

## ✨ Credits

- OpenWeatherMap

- Firebase

- React

- Icons from Weather Icons and Heroicons

## 📫 Contact

For questions or collaboration inquiries, reach out via GitHub Issues.


