<template>
  <Wrapper v-bind:size="size">
    <img src="./assets/img/vertical_mechanics.svg" class="indicator-box" alt="">
    <div class="vario indicator-box" v-bind:style="indicateVario">
      <img src="./assets/img/fi_needle.svg" class="indicator-box" alt="">
    </div>
    <div class="mechanics indicator-box">
      <img src="./assets/img/fi_circle.svg" class="indicator-box" alt="">
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from './Wrapper.vue'

const VARIO_BOUND = 2

export default {
  name: 'Variometer',
  components: {
    Wrapper
  },
  props: {
    size: {
      type: Number,
      default: 250
    },
    vario: {
      type: Number,
      default: 0
    }
  },
  computed: {
    indicateVario: function () {
      let vario = this.vario;
      if (vario > VARIO_BOUND) vario = VARIO_BOUND;
      else if (vario < -VARIO_BOUND) vario = -VARIO_BOUND;
      return {transform: 'rotate('+( vario * 90)+'deg)'};
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
