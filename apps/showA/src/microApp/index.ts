import { registerMicroApps,start } from 'qiankun'
import config from '@/microApp/config'
const { subApps } = config

export function registerApps() {
  try {
    registerMicroApps(subApps, {
      beforeLoad: [
        app => {
          console.log('before load', app)
          return Promise.resolve();
        }
      ],
      beforeMount: [
        app => {
          console.log('before mount', app)
          return Promise.resolve();
        }
      ],
      afterUnmount: [
        app => {
          console.log('before unmount', app)
          return Promise.resolve();
        }
      ]
    })
  } catch (err) {
    console.log(err)
  }
}

// 启动 qiankun
export const startQiankun = () => {
  start({
    sandbox: {
      // 开启样式隔离
      strictStyleIsolation: false,
    },
  });
};