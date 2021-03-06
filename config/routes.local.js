export default {
  routes: [
    { path: '/login', component: '@/pages/login/index'},
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/user',
          component: '@/pages/user/index',
          wrappers: [
            '@/wrappers/auth',
          ],
        },
      ]
    }
  ]
}