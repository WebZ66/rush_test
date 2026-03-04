import { sum, sub } from 'showB'
import { createApp } from 'vue'
import { registerApps, startQiankun } from './microApp'
import router from '@/router/index'
import App from './App.vue'
const app = createApp(App)
app.use(router)
app.mount('#app')
registerApps()
startQiankun()
console.log(sum(1, 2))
console.log(sub(3, 1))
