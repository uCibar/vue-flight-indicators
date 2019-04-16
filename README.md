
VueJS Flight Indicators 
===================
![demo_example](https://raw.githubusercontent.com/sebmatton/jQuery-Flight-Indicators/master/_examples_data/example.png "Indicator examples")

Flight indicator components for VueJS. Currently supported indicators are :
* Attitude
* Heading 
* Vertical speed
* Air speed
* Altimeter

Usage
-------------------
### Directly in the browser
```html
<div id="app">
  <attitude />
  <heading />
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-flight-indicators"></script>
<script>
  new Vue({ el: '#app' })
</script>
```
### Vue-cli
Install the `vue-flight-indicators` with NPM:

```bash
npm install vue-flight-indicators
```
import indicator components:
```js
import {Airspeed, Attitude} from  'vue-flight-indicators'

export  default {
	name:  'app',
	components: {
		Airspeed,
		Attitude
	}
}
```
in template section:
```html
<template>
	<div  id="app">
		<Airspeed :size="350" :airspeed="150"  />
		<Attitude :size="100" :pitch="0" :roll="10" />
	<Attitude  />
	</div>
</template>
```
Example `App.vue`
-------------------
```html
<template>
  <div id="app">
    <div class="indicators">
      <Attitude class="indicator-bg" :size="200" :roll="roll" :pitch="pitch" />
      <Heading class="indicator-bg" :size="200" :heading="heading"/>
      <Variometer class="indicator-bg" :size="200" :vario="vario" />
      <Airspeed class="indicator-bg" :size="200" :airspeed="airspeed" />
      <Altimeter class="indicator-bg" :size="200" :altitude="altitude" :pressure="pressure"/>
    </div>
  </div>
</template>

<script>
import {Airspeed, Attitude, Altimeter, Heading, Variometer} from  'vue-flight-indicators'

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
      counter: 0,

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
```