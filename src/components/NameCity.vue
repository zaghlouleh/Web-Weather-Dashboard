<template>
  <div class="row location" style="margin-left: 2vh" >
    <div class="col-lg-12 col-sm-12" style="padding-top: 3vh">
      <h1>{{city}}</h1>
    </div>
    <div class="col-lg-12 col-sm-12" v-for="weather in weather" :key="weather.index">
      <h3 id="date">{{moment(weather['current']['dt']*1000).format("dddd DD MMM")}}</h3>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["city","weather"])
  
  }, 
  created:function(){
this.moment=moment
    },
  methods: {
    ...mapActions(["fetchLatLon"]),
  },

//   filters:{
//     moment:function(data){
// return moment(data).format("dddd DD MMM");
//     },
//   },
};
</script>
<style scoped>
.location {
  width: 100%;
  height: 60px;
}
</style>