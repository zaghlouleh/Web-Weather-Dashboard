# Weather Dashboard

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Static Site](https://img.shields.io/badge/Tech-HTML_CSS_JS-blue.svg)](https://developer.mozilla.org/)

A modern, **responsive Weather Dashboard** that lets you search for any city and view:
- Current weather (temp, description, icon)
- Weather stats (high/low, wind, rain %, sunrise/sunset)
- **Interactive 24-hour hourly forecast slider**
- **4-day forecast** with daily highs/lows, wind, rain

Powered by [OpenWeatherMap API](https://openweathermap.org/api). Pure frontend - no server needed!

## ✨ Features
- 🌦️ Real-time current weather & detailed stats
- ⏰ 24-hour hourly forecast in a smooth slider (LightSlider)
- 📅 4-day forecast cards
- 📱 Fully responsive (mobile/desktop) with Bootstrap & custom CSS
- 🕐 Localized dates/times via Moment.js
- 🌤️ OpenWeatherMap icons (day/night variants)

## 🎮 Live Demo
1. Download/Clone repo
2. Open `index.html` in any browser
3. Enter a city (e.g., "London") & hit Submit!

**Pro Tip**: Host on GitHub Pages/Netlify for instant sharing.

```bash
# Or use a local server for best experience
npx serve .
# Then open http://localhost:3000
```

## 📁 File Structure
```
├── index.html          # Main UI
├── java.js             # Core logic & API calls
├── stayle.css          # Custom styles (gradients, responsive)
├── responsiv.js        # jQuery responsive tweaks
├── jQ.js               # jQuery
├── moment.js           # Date formatting
├── lightslider.*       # Hourly slider
├── bootstrap.css       # Layout
├── icons/              # Weather PNG icons (01d.png etc.)
└── OwlCarousel2-2.3.4/ # Unused carousel lib
```

## 🔧 Quick Setup & Customization
1. **Get your free OpenWeatherMap API key**: [Register here](https://openweathermap.org/api)
2. Edit `java.js` line ~39: Replace `apik = "3045dd712ffe6e702e3245525ac7fa38"` with your key.
3. Open `index.html` 🎉

**Note**: API key is hardcoded (for demo). For production, use env vars or proxy.

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3 (custom variables/gradients), Vanilla JS + jQuery
- **Libs**: Bootstrap, LightSlider, Moment.js, Font Awesome
- **API**: OpenWeatherMap (Current + One Call 3.0)
- **Responsive**: Media queries + jQuery resize

## 📸 Screenshots
*(Add your own! Search city "Cairo" on desktop/mobile)*

## 🚀 Future Improvements
- [ ] Geolocation (auto-detect user city)
- [ ] Unit toggle (C°/F°)
- [ ] Dark/Light mode
- [ ] More forecasts (weekly)
- [ ] Fix typos (e.g., "stayle.css" → "style.css", "tempratuer" → "temperature")
- [ ] Remove hardcoded API key
- [ ] Add loading spinner & better error handling

## 🤝 Contributing
1. Fork & clone
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add some AmazingFeature'`)
4. Push & PR!

## 📄 License
MIT - Feel free to use/fork! See [LICENSE](LICENSE) for details.

**Made with ❤️ for weather enthusiasts**

