<template>
  <div class="col-lg-6 col-sm-12 temperatuer" style="text-align: center">
    <div class="row" v-for="weather in weather" :key="weather.index">
      <div class="col-lg-6 col-6" style="padding-top: 18vh">
        <h1>
           <img
                  :src="
                    'http://openweathermap.org/img/wn/' +
                    weather.current.weather[0].icon +
                    '@2x.png'
                  "
                  alt=""
                />
        </h1>
      </div>
      <div class="col-lg-6 col-6" style="padding-top: 18vh">
        <div class="row">
          <h1>{{ weather["current"]["temp"] }}C</h1>
        </div>
        <div class="row">
          <h3>{{ weather["current"]["weather"]["0"]["description"] }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["weather"]),
  },
  methods: {
    ...mapActions(["fetchLatLon"]),
  },
  // setup() {
  //   const photo = ["01d","01n","02d","02n","03d","03n","04d","04n","09d","09n","10d","10n","11d","11n","13d","13n","50d","50n",];
  //   return { photo };
  // },
};
</script>
<style scoped>
</style>