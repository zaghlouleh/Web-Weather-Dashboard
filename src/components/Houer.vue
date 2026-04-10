<template>
   <vueper-slides
          class="no-shadow"
          :visible-slides="6"
          :arrows="false"
          :slide-ratio="1 / 4"
          :gap="3"
          :dragging-distance="70"
        >
        <div class="slide" v-for="(item, index) in houerItem" :key="index">
              <div  v-for="weather in weather" :key="weather" >
                <p>
                  {{ moment(weather["hourly"][`${item}`]["dt"] * 1000).format( "h a") }}
                </p>
              </div>
              <div  v-for="weather in weather" :key="weather">
                <p>
                  <img :src=" 'http://openweathermap.org/img/wn/' + weather.hourly[`${item}`].weather[0].icon + '@2x.png' "/>
                </p>
              </div>
              <div  v-for="weather in weather" :key="weather">
                <p>{{ weather["hourly"][`${item}`]["temp"] }} C</p>
              </div>
              </div>
              <vueper-slide  v-for="i in 15" :key="i" style="padding-top:0vh" />
        </vueper-slides>
</template>



<script>
import moment from "moment";
import { mapActions, mapState } from "vuex";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default{
components:{
    VueperSlides,
    VueperSlide,
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
setup(){
  const houerItem = ["0","1","2","3","4","5","6","7","8","9","10","11",
  "12","13","14","15","16","17","18","19","20","21","22","23"]
  return{houerItem};
},
}
</script>


<style >
 
.slide p {
  text-align: center;
}
.vueperslides__bullets, .vueperslides__bullets--outside{
  display: none;
}
/* .vueperslides__parallax-wrapper, .vueperslides__track-inner, .vueperslides__track, .vueperslides__inner,.vueperslides ,.vueperslides--ready ,.vueperslides--touchable ,.vueperslides--bullets-outside ,.no-shadow {
  height: 220px import;
} */
.slide{
  width: 100%;
  height: 200px;
  background-color: var(--bloux);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 3vh 3vh;
  padding-top: 0vh;
}

    
</style>