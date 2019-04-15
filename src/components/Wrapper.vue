<template>
  <div class="flight-indicator" v-bind:style="indicateSize">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Wrapper',
  props: {
    size: {type: Number}
  },
  computed: {
    indicateSize: function () {
      return {width: this.size+'px', height: this.size+'px'};
    }
  }
}
</script>

<style>
 .flight-indicator {
    position: relative;
    display: inline-block;
    overflow: hidden;
 }
 .flight-indicator .indicator-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
 }
</style>
