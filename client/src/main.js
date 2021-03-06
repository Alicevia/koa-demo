import { createApp } from 'vue'
import naive from 'naive-ui'
import router from './router'
import store from './store'

import App from './App.vue'

const app = createApp(App)
app.use(naive).use(router).use(store).mount('#app')
