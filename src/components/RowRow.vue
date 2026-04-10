<template>
  <transition class="box" name="rowrow">
    <div class="col-3 col-lg-12">
      <!-- <div class="box"> -->
        <slot />
      <!-- </div> -->
    </div>
  </transition>
</template>
<script>
</script>
<style scoped>
.row p {
  text-align: center;
}
.box {
  padding: 1vh;
  background-color: var(--bloux);
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin:0vh 0vh 6vh 0vh;
  text-align: center;
}
h3 {
  text-align: center;
}
/* .box .row .col-lg-2 {
  text-align: center;
} */
</style>