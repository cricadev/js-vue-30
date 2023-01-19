import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/cricadev/Desktop/learning/js30/nuxt-30/02-clock/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}