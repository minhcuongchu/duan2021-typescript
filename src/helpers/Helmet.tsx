import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Config from '@src/contains/Config'
import i18n from '../locales'

const { publicRuntimeConfig } = Config

interface HelmetHeaderProps {
  title?: string
  keywords?: string
  descriptions?: string
  siteName?: string
  type?: string
  url?: string
  image?: string
  favicon?: string
  children?: React.ReactNode
}

const HelmetHeader: React.FC<HelmetHeaderProps> = (props: HelmetHeaderProps) => {
  const { locale } = useRouter()
  const { title, keywords, descriptions, children } = props
  const defaultTitle = (i18n[locale] || {}).defaultTitle || ''
  const defaultKeywords = (i18n[locale] || {}).defaultKeywords || ''
  const defaultDescription = (i18n[locale] || {}).defaultDescription || ''
  const defaultOGImage = `${publicRuntimeConfig.APP_IMAGE}`
  const defaultOGSiteName = (i18n[locale] || {}).defaultOGSiteName || ''
  const defaultOGType = (i18n[locale] || {}).defaultOGType || 'website'
  const defaultUrl = `${publicRuntimeConfig.BASE_URL}`
  const favicon = `${publicRuntimeConfig.APP_FAVICON}`

  let keyword = `${defaultKeywords}`
  if (keywords) {
    keyword = `${defaultKeywords}, ${keywords}`
  }
  let description = `${defaultDescription}`
  if (descriptions) {
    description = `${descriptions}`
  }
  return (
    <Head>
      <meta httpEquiv="content-type" content="text/html; charset=UTF-8" key="content-type" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        key="viewport"
      />
      <title key="title">{title || defaultTitle}</title>
      <meta name="hreflang" content={`${locale}`} key="hreflang" />
      <meta name="keywords" content={`${keyword}`} key="keywords" />
      <meta name="description" content={`${description}`} key="description" />
      <meta property="og:site_name" content={props.siteName || defaultOGSiteName} key="og:site_name" />
      <meta property="og:type" content={props.type || defaultOGType} key="og:type" />
      <meta property="og:url" content={props.url || defaultUrl} key="og:url" />
      <meta property="og:title" content={props.title || defaultTitle} key="og:title" />
      <meta property="og:description" content={`${description}`} key="og:description" />
      <meta property="og:image" content={props.image || defaultOGImage} key="og:image" />
      <meta property="og:image:width" content="1200" key="og:image:width" />
      <meta property="og:image:height" content="630" key="og:image:height" />
      <link rel="canonical" href={props.url || defaultUrl} key="canonical" />
      <link rel="icon" href={`${props.favicon || favicon}`} key="icon" />
      {children}
    </Head>
  )
}

export default HelmetHeader
