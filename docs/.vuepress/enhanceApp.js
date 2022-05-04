import * as components from '../../.nuxt/components/index.js'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';


export default ({ Vue, options, router, siteData }) => {
    for (const name in components) {
			Vue.component(name, components[name])
			Vue.component('Lazy' + name, components[name])
    }
		Vue.use(BootstrapVue)
}