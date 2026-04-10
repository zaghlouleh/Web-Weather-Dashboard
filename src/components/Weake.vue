<template>
  <div class="row" >
    <row-row v-for="(row, index) in weakeItem" :key="index">
      <div class="row" v-for="weather in weather" :key="weather">
        <div class="col-12 col-lg-2" style="padding: 2vh">
          <h3>
            {{ moment(weather["daily"][`${row}`]["dt"] * 1000).format("ddd") }}
          </h3>
          <p class="d-none d-lg-block d-sm-none">
            {{ moment(weather["daily"][`${row}`]["dt"] * 1000).format("DD/MM")}}
          </p>
        </div>
        <div class="col-12 col-lg-2 paddingIcon" style="padding-right: 2vh">
          <img :src="'http://openweathermap.org/img/wn/' +weather.daily[`${row}`].weather[0].icon +'@2x.png'"/>
        </div>
        <div class="col-112 col-lg-2" style="padding: 2vh">
          <h3>{{ weather["daily"][`${row}`]["temp"]["min"] }}c</h3>
          <p class="d-none d-lg-block d-sm-none">low</p>
        </div>
        <span class="d-lg-none" style="font-size: 2vh">-</span>
        <div class="col-12 col-lg-2" style="padding: 2vh">
          <h3>{{ weather["daily"][`${row}`]["temp"]["max"] }}c</h3>
          <p class="d-none d-lg-block d-sm-none">haig</p>
        </div>
        <div
          class="col-12 col-lg-2 d-none d-lg-block d-sm-none"
          style="padding: 2vh"
        >
          <h3 id="wind1">{{ weather["daily"][`${row}`]["wind_speed"] }} mph</h3>
          <p class="d-lg-block d-sm-none">wind</p>
        </div>
        <div
          class="col-12 col-lg-2 d-none d-lg-block d-sm-none"
          style="padding: 2vh"
        >
          <h3>{{ weather["daily"][`${row}`]["pop"] }} %</h3>
          <p class="d-lg-block d-sm-none">rain</p>
        </div>
      </div>
    </row-row>
  </div>
</template>
<script >
import moment from "moment";
import { mapActions, mapState } from "vuex";
import RowRow from "../components/RowRow.vue";
export default {
  components: {
    RowRow,
  },
  computed: {
    ...mapState(["weather"]),
  },
  methods: {
    ...mapActions(["fetchLatLon"]),
  },
  created: function () {
    this.moment = moment;
  },
  setup() {
    const weakeItem = ["1", "2", "3", "4"];
    return { weakeItem };
  },
};
</script>
<style>
</style>