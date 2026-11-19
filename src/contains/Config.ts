// Next.js 16 removed publicRuntimeConfig/serverRuntimeConfig from next.config.js.
// Migrated to process.env: NEXT_PUBLIC_* values are inlined into the client bundle,
// non-prefixed values (secrets) are only available on the server.
const publicRuntimeConfig = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || '',
  API_URL: process.env.NEXT_PUBLIC_API_URL || '',
  IMAGE_URL: process.env.NEXT_PUBLIC_IMAGE_URL || '',
  APP_FAVICON: process.env.NEXT_PUBLIC_APP_FAVICON || '',
  APP_IMAGE: process.env.NEXT_PUBLIC_APP_IMAGE || '',
  PAGE_SIZE: process.env.NEXT_PUBLIC_PAGE_SIZE || '',
  PAGE_SIZE_HOMEPAGE: process.env.NEXT_PUBLIC_PAGE_SIZE_HOMEPAGE || '',
  SECRET_KEY_OTP: process.env.NEXT_PUBLIC_SECRET_KEY_OTP || '',
}

const serverRuntimeConfig = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || '',
  SECRET_KEY_CONFIRM: process.env.SECRET_KEY_CONFIRM || '',
}

const PAGE_SIZE = publicRuntimeConfig.PAGE_SIZE ? Number(publicRuntimeConfig.PAGE_SIZE) : 9
const PAGE_SIZE_HOMEPAGE = publicRuntimeConfig.PAGE_SIZE_HOMEPAGE ? Number(publicRuntimeConfig.PAGE_SIZE_HOMEPAGE) : 6

export { publicRuntimeConfig, serverRuntimeConfig }
export default {
  publicRuntimeConfig,
  serverRuntimeConfig,
  PAGE_SIZE,
  PAGE_SIZE_HOMEPAGE,
}
