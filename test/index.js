import Vue from "vue"
import { jest } from '@jest/globals'

import gql from ''

import * as components from '@/.nuxt/components/index'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"

Vue.use(jest)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
for (const name in components) {
    Vue.component(name, components[name])
    Vue.component('Lazy' + name, components[name])
  }