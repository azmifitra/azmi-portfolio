declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_EMAIL_SERVICE: string
    readonly NEXT_PUBLIC_EMAIL_TEMPLATE: string
    readonly NEXT_PUBLIC_EMAIL_PUBLIC_KEY: string
  }
}
