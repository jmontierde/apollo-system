export default defineNuxtRouteMiddleware((to) => {
    if (to.path !== '/' && !to.matched.length) {
      return navigateTo('/')
    }
  })
  