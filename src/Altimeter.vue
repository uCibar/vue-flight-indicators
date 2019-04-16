<template>
  <Wrapper v-bind:size="size">
    <div class="pressure indicator-box" v-bind:style="indicatePressure">
      <img src="./assets/img/altitude_pressure.svg" class="indicator-box" alt="">
    </div>
    <img src="./assets/img/altitude_ticks.svg" class="indicator-box" alt="">
    <div class="needleSmall indicator-box" v-bind:style="indicateAltitudeSmall">
      <img src="./assets/img/fi_needle_small.svg" class="indicator-box" alt="">
    </div>
    <div class="needle indicator-box" v-bind:style="indicateAltitude">
      <img src="./assets/img/fi_needle.svg" class="indicator-box" alt="">
    </div>
    <div class="mechanics indicator-box">
      <img src="./assets/img/fi_circle.svg" class="indicator-box" alt="">
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from './Wrapper.vue'

export default {
  name: 'Altimeter',
  components: {
    Wrapper
  },
  props: {
    size: {
      type: Number,
      default: 250
    },
    altitude: {
      type: Number,
      default: 0
    },
    pressure: {
      type: Number,
      default: 0
    }
  },
  computed: {
    indicateAltitude: function () {
      return {transform: 'rotate('+(90 + this.altitude % 1000 * 360 / 1000)+'deg)'};
    },
    indicateAltitudeSmall: function () {
      return {transform: 'rotate('+(this.altitude / 10000 * 360)+'deg)'};
    },
    indicatePressure: function () {
      return {transform: 'rotate('+(2 * this.pressure - 1980)+'deg)'};
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
