export interface CoreConfig {
    title: string
    author: string
    headerTitle: string
    description: string
    language: string
    /** light and dark */
   
  }
  
  export type SiteConfig = Record<string, unknown> &
    CoreConfig