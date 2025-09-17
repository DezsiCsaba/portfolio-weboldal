const routes = [
  {
    path: '/',
    component: () => import('layouts/HeroLayout.vue'),
    children: [
      { path: '', component: () => import('pages/hero/IndexPage.vue') },
      { path: '/about', component: () => import('pages/hero/About.vue') },

      { path: '/edu', component: () => import('pages/edu/IndexPage.vue') },

      { path: '/work', component: () => import('pages/work/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
