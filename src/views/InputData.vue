<template>
  <section class="container-fluid">
    <section class="inputs" id="flippanel" style="height: 40vh">
      <input type="text" placeholder="Enter lat..." id="city" v-model="add" />
      <button @click="input" style="margin-top: 2vh" type="submit" to="CityData"
        >submit</button 
      >
    </section>
  </section>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchLatLon"]),
    input(){
this.fetchLatLon()
this.$router.push({path:"/CityData"})
    }
  },

  computed: {
    ...mapState(["city"]),
    add: {
      get() {
        return this.$store.state.city;
      },
      set(value) {
        this.$store.commit("setCity", value);
      },
    },
  },
};
</script>

<style scoped>
.container-fluid {
  width: 100%;
  height: 100%;
  display: block;
  padding: 10vh;
}

.inputs {
  padding: 2vh;
  height: 100%;
  width: 100%;
  text-align: center;
  border-radius: 5vh;
  justify-content: center;
  background: var(--whaet);
}

.inputs input[type="text"] {
  height: 10vh;
  width: 100%;
  color: #000;
  background: #212121;
  font-weight: bold;
  font-size: 3vh;
  padding: 2vh;
  border: none;
  background-color: transparent;
  border: 2px solid #c2c2c2;
  border-radius: 2vh;
  margin-right: 4px;
  margin-top: 10vh;
}

.inputs [type="submit"] {
  /* height: 5vh; */
  /* width: 20vh; */
  background: var(--blou);
  font-weight: bold;
  color: white;
  font-size: 3vh;
  padding: 2vh;
  border: none;
  border-radius: 4vh;
  text-decoration: none;
}

.inputs .submit:hover {
  background-color: var(--bloux);
  color: black;
  border: 1px solid rgb(34, 57, 121);
}
</style>
