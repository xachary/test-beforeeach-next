export default ({app}) => {
  let {router} = app

  router.beforeEach((to, from, next) => {
    console.log(router)
    console.log(to, from)

    if (to.path === '/one') {
      next('/')
      // next('/two')
    } else {
      next()
    }
  })
}