<template>
  <div id="app">
    <div class="header">
      <h2>vue-flight-indicators</h2>
    </div>
    <div class="indicators">
      <Attitude class="indicator-bg" :size="200" :roll="roll" :pitch="pitch" />
      <Heading class="indicator-bg" :size="200" :heading="heading"/>
      <Variometer class="indicator-bg" :size="200" :vario="vario" />
      <Airspeed class="indicator-bg" :size="200" :airspeed="airspeed" />
      <Altimeter class="indicator-bg" :size="200" :altitude="altitude" :pressure="pressure"/>
    </div>
    <div class="footer">
      <a href="https://github.com/uCibar/vue-flight-indicators">Github Page</a>
    </div>
  </div>
</template>

<script>
import Attitude from './components/Attitude.vue'
import Heading from './components/Heading.vue'
import Variometer from './components/Variometer.vue'
import Airspeed from './components/Airspeed.vue'
import Altimeter from './components/Altimeter.vue'

export default {
  name: 'app',
  components: {
    Attitude,
    Heading,
    Variometer,
    Airspeed,
    Altimeter
  },
  data: function () {
    return {
      counter: -180,

      roll: 0,
      pitch: 0,
      heading: 0,
      vario: 0,
      airspeed: 0,
      altitude: 0,
      pressure: 0
    }
  },
  mounted: function () {
    setInterval(() => {
      this.roll = 30*Math.sin(this.counter/10);
      this.pitch = 50*Math.sin(this.counter/20);

      this.heading = this.counter;

      this.vario = 2*Math.sin(this.counter/10);

      this.airspeed = 80+80*Math.sin(this.counter/10);

      this.altitude = 10*this.counter;
      this.pressure = 1000+3*Math.sin(this.counter/50);

      this.counter++;
    }, 35);
  }
}
</script>

<style scoped>
#app {
  text-align: center;
  margin-top: 60px;
}
.indicator-bg {
  background-color: grey;
}
</style>