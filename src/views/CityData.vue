<template>
  <div class="container" id="labtop" style="max-width: 100%">
    <!-- ----------------------------------location------------------------------------ -->

    <name-city />

    <!-- ---------------------------------- end location------------------------------- -->

    <div class="t d-none d-lg-block d-sm-none"></div>

    <div class="row">
      <!-- -------------------------------weather naw---------------------------------- -->

      <weather-naw />

      <!-- ------------------------------- end weather naw----------------------------- -->

      <hr class="d-sm-none" />

      <!-- -------------------------------weather today--------------------------------- -->

      <weather-today />

      <!-- ------------------------------- end weather today---------------------------- -->
    </div>

    <hr class="d-sm-none" />

    <!-- ----------------------------------------houer-------------------------------- -->
    <div
      class="news-slider d-none d-lg-block d-sm-none"
      style="margin-top: 10px; height: 40vh"
      id="slider"
    >
      <div class="row">
        <span>
          <h2>todays weather</h2>
        </span>
      </div>
      <houer />
    </div>
    <!-- ----------------------------------------end houer----------------------------- -->

    <!-- -------------------------------------------- daye----------------------------- -->
    <div class="labtop">
      <div class="row" style="padding-top: 3vh">
        <h2>next 4 days</h2>
      </div>
      <weake />
    </div>
  </div>
</template>
<!-- ----------------------------------------end daye------------------------------- -->

<script>
// @ is an alias to /src
// import Item from "../components/Item.vue";
import Houer from "../components/Houer.vue";
import NameCity from "../components/NameCity.vue";
import WeatherToday from "../components/WeatherToday.vue";
import Weake from "../components/Weake.vue";
import WeatherNaw from "../components/WeatherNaw.vue";
export default {
  name: "Home",
  components: {
    Houer,
    NameCity,
    WeatherToday,
    Weake,
    WeatherNaw,
    // Item,
  },
  
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap");
* {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: bold;
  color: var(--whaet);
  margin: 0;
  padding: 0;
  text-transform: capitalize;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  transition: all 0.2s linear;
}

:root {
  --blou: rgb(48, 95, 156);
  --whaet: rgb(255, 255, 255);
  --bloux: rgba(94, 100, 190, 0.5);
}

*::selection {
  background: var(--blou);
  color: var(--whaet);
}

body {
  margin: 0vh;
  padding: 0vh;
  background: linear-gradient(175deg, #1c80c2, #71a1ce);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

html {
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
}

.t {
  border-left: 1px var(--whaet) solid;
  position: absolute;
  left: 50%;
  height: 35vh;
  margin-top: 8vh;
}

.labtop .row .col-lg-12 {
  text-align: center;
  /* height: 100vh; */
}
.labtop {
  width: 100%;
  /* padding-top: 25vh; */
  padding: 4vh 1vh 2vh 1vh;
  
}
</style>
