export default {
  subApps: [
    {
      name: 'micro-app', // 子应用名称，跟package.json一致
      entry: '//localhost:6002', // 子应用入口，本地环境下指定端口
      container: '#micro-app', // 挂载子应用的dom
      activeRule: (location: any) => location.hash.includes('/micro'), // 路由匹配规则
      props: {} // 主应用与子应用通信传值
    }
  ]
}
