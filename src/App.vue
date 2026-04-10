 <template>
  <div id="nav">
    <v-toolbar-title class="animation d-none d-lg-block d-sm-none" data-text="weather"
      >weather</v-toolbar-title
    >
    <router-link to="/">input</router-link> |
    <router-link to="/CityData">city</router-link>
  </div>
  <router-view />
</template>
<script>
export default {
  method (){
    
  }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  /* padding-bottom: 2vh; */
  text-align: center;
  background-color: #ffffff;
  border-radius: 4vh;
  height: 7vh;
  margin: 2vh;
}

#nav a {
  font-size: 4vh;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.animation {
  font-size: 5vh;
  float: left;
  font-family: cursive;
  font-weight: 1000;
  color: rgb(255, 255, 255);
  position: relative;
  left: 3vh;
  -webkit-text-stroke: 1px rgb(255, 255, 255);
}
.animation::before{
  content:attr(data-text);
  position: absolute;
  top: 0;left: 0;
  width: 0%;
  height: 100%;
  color: #8974d6;
  -webkit-text-stroke: black;
  border-right: 0px solid #fbfdfb;
  overflow: hidden;
  animation: animation 8s linear infinite;
}
@keyframes animation 
{
     0%
   {
     width: 0;
   }
     50%
   {
     width: 107%;
   }
} 
</style>
