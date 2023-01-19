import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/cricadev/Desktop/learning/js30/nuxt-30/02-clock/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}