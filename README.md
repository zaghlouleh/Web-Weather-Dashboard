# WeatherVue - Vue 3 Weather Forecast App

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-brightgreen.svg)](https://vuejs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple.svg)](https://getbootstrap.com/)

**WeatherVue** is a modern, responsive single-page weather application built with Vue 3. Enter latitude (and longitude via API) to fetch real-time and forecast weather data. Displays current conditions, hourly slider, weekly forecast, and detailed daily statistics with smooth animations and mobile-friendly Bootstrap design.

## ✨ Features
- **Current Weather**: Description, city name.
- **Today's Stats**: High/low temperature, wind speed, sunrise/sunset times, precipitation chance.
- **Hourly Forecast**: Carousel slider (vueperslides).
- **Weekly Forecast**: 7-day outlook.
- **Responsive Design**: Bootstrap 5, works on desktop/mobile.
- **Animated UI**: Typing title effect, smooth transitions.
- **State Management**: Vuex for data, Axios for API calls.
- **Date Handling**: Moment.js for timestamps.

## 📱 Screenshots
*(Add your screenshots here - e.g., input page, weather dashboard)*

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- [OpenWeatherMap API Key](https://openweathermap.org/api) *(Add to Vuex store or .env)*

### Installation
```bash
npm install
```

### Development Server
```bash
npm run serve
```
Open [http://localhost:8080](http://localhost:8080)

### Build for Production
```bash
npm run build
```

### Lint & Fix
```bash
npm run lint
```

## 📂 Project Structure
```
.
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Houer.vue (Hourly)
│   │   ├── NameCity.vue
│   │   ├── WeatherNaw.vue (Current)
│   │   ├── WeatherToday.vue (Daily Stats)
│   │   └── Weake.vue (Weekly)
│   ├── views/
│   │   ├── CityData.vue (Main Dashboard)
│   │   └── InputData.vue (Lat Input)
│   ├── router/
│   ├── store/
│   ├── App.vue
│   └── main.js
├── assets/ (Weather icons 01d.png - 50n.png)
└── package.json
```

## 🔧 Usage
1. Navigate to `/` (InputData): Enter latitude, click Submit.
2. Redirects to `/CityData`: View weather dashboard.
3. Data fetched automatically via Vuex actions (customize API endpoint in store/index.js).

**API Integration**: Uses OpenWeatherMap-style endpoints (e.g., daily.temp.max, current.weather[0].description). Update `fetchLatLon` action with your API key:
```js
// Example in store/index.js
axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=YOUR_KEY&units=metric`)
```

## 🛠 Tech Stack
- **Frontend**: Vue 3, Vue Router 4, Vuex 4
- **UI**: Bootstrap 5, Custom CSS animations
- **Libraries**: Axios, Moment.js, Vueperslides, Swiper
- **Build**: Vue CLI

## 🤝 Contributing
1. Fork the repo.
2. Create branch: `git checkout -b feature/YourFeature`
3. Commit: `git commit -m 'Add feature'`
4. Push: `git push origin feature/YourFeature`
5. Open PR!

## 📄 License
MIT License - see [LICENSE](LICENSE) *(Add if needed)*

## 🙏 Acknowledgments
- [OpenWeatherMap](https://openweathermap.org/) for weather data.
- Vue.js community.

**Made with ❤️ using Vue CLI**

