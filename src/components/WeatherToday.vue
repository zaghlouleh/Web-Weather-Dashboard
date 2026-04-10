<template>
  <div
    class="col-lg-6 col-sm-12 stats"
    style="text-align: center; margin-top: 5vh; margin-bottom: 5vh"
    v-for="weather in weather"
    :key="weather.index"
  >
    <div class="row">
      <div class="col-lg-4 col-4" style="padding: 3vh">
        <h1>{{ weather["daily"]["0"]["temp"]["max"] }}C</h1>
        <h5>hige</h5>
      </div>
      <div class="col-lg-4 col-4" style="padding: 3vh">
        <h1>{{weather["daily"]["0"]["wind_speed"] }}</h1>
        <h5>wind</h5>
      </div>
      <div class="col-lg-4 col-4" style="padding: 3vh">
        <h1>{{moment(weather["daily"]["0"]["sunrise"]*1000 ).format('h:mm')}}</h1>
        <h5>sunrise</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-4" style="padding: 3vh">
        <h1>{{weather["daily"]["0"]["temp"]["min"]}}C</h1>
        <h5>low</h5>
      </div>
      <div class="col-lg-4 col-4" style="padding: 3vh">
        <h1>{{weather["daily"]["0"]["pop"] }} %</h1>
        <h5>rain</h5>
      </div>
      <div class="col-lg-4 col-4" style="padding: 3vh">
        <h1 id="sunset">{{moment(weather["daily"]["0"]["sunset"]*1000 ).format('h:mm')}}</h1>
        <h5>sunset</h5>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["weather"]),
  },
  created:function(){
this.moment=moment
  },
  methods: {
    ...mapActions(["fetchLatLon"]),
  },
};
</script>
<style scoped>
.box {
  width: 100%;
  background-color: var(--bloux);
  border-radius: 5px;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 5vh;
}

.labtop {
  width: 100%;
}

.box .row .col-lg-2 {
  text-align: center;
}

.labtop .row .col-lg-12 {
  text-align: center;
}

/* .span {
        display: none;
    } */
</style>