import vuex from 'vuex'
// import vue from 'vue'

// vue.use(vuex);

export default new vuex.Store({
    state: {
        weather: [],
        // weather1: [],
        // weather2: [],
        // weather3: [],
        // weather4: [],
        LatLon: [],
        city: '',
        // current: [],
        // daily: [],
        // daily1: [],
        // daily2: [],
        // daily3: [],
        // daily4: [],
        // temp: [],
        // temp1: [],
        // temp2: [],
        // temp3: [],
        // temp4: [],
        // hourly0: [],
        // hourly1: [],
        // hourly2: [],
        // hourly3: [],
        // hourly4: [],


    },
    mutations: {
        setLatLon(state, LatLon) {
            state.LatLon.push(LatLon)
        },
        setCity(state, city) {
            state.city = city
        },
        setWeather(state, weather) {
            state.weather.push(weather)
        },
        // setWeather1(state, weather1) {
        //     state.weather1 = weather1;
        // },
        // setWeather2(state, weather2) {
        //     state.weather2 = weather2;
        // },
        // setWeather3(state, weather3) {
        //     state.weather3 = weather3;
        // },
        // setWeather4(state, weather4) {
        //     state.weather4 = weather4;
        // },
        // setCurrent(state, current) {
        //     state.current = current;
        // },
        // setDaily(state, daily) {
        //     state.daily = daily;
        // },
        // setDaily1(state, daily1) {
        //     state.daily1 = daily1;
        // },
        // setDaily2(state, daily2) {
        //     state.daily2 = daily2;
        // },
        // setDaily3(state, daily3) {
        //     state.daily3 = daily3;
        // },
        // setDaily4(state, daily4) {
        //     state.daily4 = daily4;
        // },
        // setTemp(state, temp) {
        //     state.temp = temp;
        // },
        // setTemp1(state, temp1) {
        //     state.temp1 = temp1;
        // },
        // setTemp2(state, temp2) {
        //     state.temp2 = temp2;
        // },
        // setTemp3(state, temp3) {
        //     state.temp3 = temp3;
        // },
        // setTemp4(state, temp4) {
        //     state.temp4 = temp4;
        // },
        // setHourly0(state, hourly0) {
        //     state.hourly0 = hourly0;
        // },
        // setHourly1(state, hourly1) {
        //     state.hourly1 = hourly1;
        // },
        // setHourly2(state, hourly2) {
        //     state.hourly2 = hourly2;
        // },
        // setHourly3(state, hourly3) {
        //     state.hourly3 = hourly3;
        // },
        // setHourly4(state, hourly4) {
        //     state.hourly4 = hourly4;
        // }
    },
    actions: {
        convertion(val) {
            return (val - 273).toFixed(2)
        },
        async fetchLatLon({ commit }) {
            return fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + this.state.city + '&appid=3045dd712ffe6e702e3245525ac7fa38')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    commit("setLatLon", data.city.coord.lat);
                    commit("setLatLon", data.city.coord.lon);
                    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + this.state.LatLon[0] + '&lon=' + this.state.LatLon[1] + '&exclude=minutely&units=metric&appid=3045dd712ffe6e702e3245525ac7fa38')
                        .then(res => res.json())
                        .then((data) => {
                            console.log(data);
                            commit("setWeather", data);

                            // context.commit("setTemp", data['daily']['0']['temp']);
                            // context.commit("setTemp1", data['daily']['1']['temp']);
                            // context.commit("setTemp2", data['daily']['2']['temp']);
                            // context.commit("setTemp3", data['daily']['3']['temp']);
                            // context.commit("setTemp4", data['daily']['4']['temp']);

                            // context.commit("setDaily", data['daily']['0']);
                            // context.commit("setDaily1", data['daily']['1']);
                            // context.commit("setDaily2", data['daily']['2']);
                            // context.commit("setDaily3", data['daily']['3']);
                            // context.commit("setDaily4", data['daily']['4']);

                            // context.commit("setWeather0", data['daily']['0']['weather']['0']);
                            // context.commit("setWeather1", data['daily']['1']['weather']['0']);
                            // context.commit("setWeather2", data['daily']['2']['weather']['0']);
                            // context.commit("setWeather3", data['daily']['3']['weather']['0']);
                            // context.commit("setWeather4", data['daily']['4']['weather']['0']);

                            // context.commit("setHourly0", data['hourly']['0']);
                            // context.commit("setHourly1", data['hourly']['1']);
                            // context.commit("setHourly2", data['hourly']['2']);
                            // context.commit("setHourly3", data['hourly']['3']);
                            // context.commit("setHourly4", data['hourly']['4']);

                        })
                })
                .catch((err) => console.error(err));
        },
    },
    getters: {
        LatLon(state) {
            return state.LatLon
        },
        city(state) {
            return state.city
        },
        weather(state) {
            return state.weather

        },
    },
    modules: {}
});