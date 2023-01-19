export interface NuxtUserConfig {
 appConfig?: {
  /**
   * Nuxt Icon
   * 
   * Configure the defaults of Nuxt Icon
   * 
  */
  nuxtIcon?: {
   /**
    * Icon Size
    * 
    * Set the default icon size
    * 
    * @default ""
    * 
    * @studio-icon material-symbols:format-size-rounded
   */
   size?: string,

   /**
    * CSS Class
    * 
    * Set the default CSS class
    * 
    * @default ""
    * 
    * @studio-icon material-symbols:css
   */
   class?: string,

   /**
    * Icon aliases
    * 
    * Define Icon aliases to update them easily without code changes.
    * 
    * 
    * @studio-icon material-symbols:star-rounded
   */
   aliases?: { [alias: string]: string },
  },
 },
}
export type UserAppConfig = Exclude<NuxtUserConfig['appConfig'], undefined>

declare module '@nuxt/schema' {
  interface NuxtConfig extends NuxtUserConfig {}
  interface NuxtOptions extends NuxtUserConfig {}
  interface AppConfigInput extends UserAppConfig {}
  interface AppConfig extends UserAppConfig {}
}