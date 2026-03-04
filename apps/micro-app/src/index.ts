import "./public-path";
import { createApp } from 'vue'
import router from '@/router/index'
import App from './App.vue'

let app:any= null;
 
function render(container?:any) {
  app = createApp(App);
  app.use(router);
  app.mount(container ? container.querySelector('#app'):'#app');
}
 
// 在独立运行时启动子应用
 
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
 
// 以下是 Qiankun 微前端要求的生命周期函数
export async function bootstrap() {
    console.log('[vue3] bootstraped');
}
 
export async function mount(props:any={}) {
  console.log('mount', props);
  render(props.container);
}
 
export async function unmount() {
    console.log('[vue3] unmount');
    app.unmount();
    app._container.innerHTML = '';
    app = null;
 
}