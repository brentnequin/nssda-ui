import Vue from "vue"
import { jest } from '@jest/globals'

import * as components from '@/.nuxt/components/index.js'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"

Vue.use(jest)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
for (const name in components) {
    Vue.component(name, components[name])
    Vue.component('Lazy' + name, components[name])
  }