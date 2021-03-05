var path = require('path')
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  devtool: 'source-map',

  // plugins: [
  //   // ref: https://umijs.org/plugin/umi-plugin-react.html
  //   ['umi-plugin-react', {
  //     antd: false,
  //     dva: false,
  //     dynamicImport: false,
  //     title: 'myumi2',
  //     dll: false,
      
  //     routes: {
  //       exclude: [
  //         /components\//,
  //       ],
  //     },
  //   }],
  // ],
}
