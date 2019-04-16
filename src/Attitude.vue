<template>
  <Wrapper v-bind:size="size">
    <div class="roll indicator-box" v-bind:style="indicateRoll">
      <img src="./assets/img/horizon_back.svg" class="indicator-box" alt="">
      <div class="pitch indicator-box" v-bind:style="indicatePitch">
      <img src="./assets/img/horizon_ball.svg" class="indicator-box" alt="">
      </div>
      <img src="./assets/img/horizon_circle.svg" class="indicator-box" alt="">
    </div>
    <div class="mechanics indicator-box">
      <img src="./assets/img/horizon_mechanics.svg" class="indicator-box" alt="">
      <img src="./assets/img/fi_circle.svg" class="indicator-box" alt="">
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from './Wrapper.vue'

const PITCH_BOUND = 30

export default {
  name: 'Attitude',
  components: {
    Wrapper
  },
  props: {
    size: {
      type: Number,
      default: 250
    },
    roll: {
      type: Number,
      default: 0
    },
    pitch: {
      type: Number,
      default: 0
    }
  },
  computed: {
    indicateRoll: function () {
      return {transform: 'rotate('+this.roll+'deg)'};
    },
    indicatePitch: function () {
      let pitch = this.pitch;
      if (pitch > PITCH_BOUND) pitch = PITCH_BOUND;
      else if (pitch < -PITCH_BOUND) pitch = -PITCH_BOUND;
      return {top: ( pitch * 0.68)+'%'};
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
