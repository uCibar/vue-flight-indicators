<template>
  <Wrapper v-bind:size="size">
    <div class="heading indicator-box" v-bind:style="indicateHeading">
      <img src="./assets/img/heading_yaw.svg" class="indicator-box" alt="">
    </div>
    <div class="mechanics indicator-box">
      <img src="./assets/img/heading_mechanics.svg" class="indicator-box" alt="">
      <img src="./assets/img/fi_circle.svg" class="indicator-box" alt="">
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from './Wrapper.vue'

export default {
  name: 'Heading',
  components: {
    Wrapper
  },
  props: {
    size: {
      type: Number,
      default: 250
    },
    heading: {
      type: Number,
      default: 0
    }
  },
  computed: {
    indicateHeading: function () {
      return {transform: 'rotate('+this.heading+'deg)'};
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
