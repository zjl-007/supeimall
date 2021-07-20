import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from "mitt"
// let app = createApp(App)
// app.config.globalProperties.$bus = new mitt();
// app.use(store).use(router).mount('#app')
createApp(App).use(store).use(router).mount('#app')

