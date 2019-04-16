<template>
  <Wrapper v-bind:size="size">
    <img src="./assets/img/speed_mechanics.svg" class="indicator-box" alt="">
    <div class="speed indicator-box" v-bind:style="indicateAirspeed">
      <img src="./assets/img/fi_needle.svg" class="indicator-box" alt="">
    </div>
    <div class="mechanics indicator-box">
      <img src="./assets/img/fi_circle.svg" class="indicator-box" alt="">
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from './Wrapper.vue'

const AIRSPEED_BOUND = 160;

export default {
  name: 'Airspeed',
  components: {
    Wrapper
  },
  props: {
    size: {
      type: Number,
      default: 250
    },
    airspeed: {
      type: Number,
      default: 0
    }
  },
  computed: {
    indicateAirspeed: function () {
      let airspeed = this.airspeed;
      if (airspeed > AIRSPEED_BOUND) airspeed = AIRSPEED_BOUND;
      else if (airspeed < 0) airspeed = 0;
      return {transform: 'rotate('+( 90 + airspeed * 2)+'deg)'};
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
