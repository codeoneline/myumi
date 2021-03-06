export default {
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/admin', component: '@/pages/admin/index' },
      ]
    }
  ]
}