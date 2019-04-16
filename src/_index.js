import Vue from 'vue'

import Airspeed from './Airspeed.vue'
import Altimeter from './Altimeter.vue'
import Attitude from './Attitude.vue'
import Heading from './Heading.vue'
import Variometer from './Variometer.vue'

export { Airspeed, Altimeter, Attitude, Heading, Variometer }

Vue.component('Airspeed', Airspeed)
Vue.component('Altimeter', Altimeter)
Vue.component('Attitude', Attitude)
Vue.component('Heading', Heading)
Vue.component('Variometer', Variometer)

