import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3fdb9f27 = () => interopDefault(import('../pages/about-us-01.vue' /* webpackChunkName: "pages/about-us-01" */))
const _3fe9b6a8 = () => interopDefault(import('../pages/about-us-02.vue' /* webpackChunkName: "pages/about-us-02" */))
const _3ff7ce29 = () => interopDefault(import('../pages/about-us-03.vue' /* webpackChunkName: "pages/about-us-03" */))
const _291a3877 = () => interopDefault(import('../pages/career.vue' /* webpackChunkName: "pages/career" */))
const _3b041dd8 = () => interopDefault(import('../pages/contact-us-modern.vue' /* webpackChunkName: "pages/contact-us-modern" */))
const _7d67fb4e = () => interopDefault(import('../pages/contact-us-with-map.vue' /* webpackChunkName: "pages/contact-us-with-map" */))
const _2c10216a = () => interopDefault(import('../pages/home-authentic-studio.vue' /* webpackChunkName: "pages/home-authentic-studio" */))
const _251736c8 = () => interopDefault(import('../pages/home-blog-grid.vue' /* webpackChunkName: "pages/home-blog-grid" */))
const _3f5f08a1 = () => interopDefault(import('../pages/home-corona.vue' /* webpackChunkName: "pages/home-corona" */))
const _fe0b4aa4 = () => interopDefault(import('../pages/home-creative-agency.vue' /* webpackChunkName: "pages/home-creative-agency" */))
const _35b7e7af = () => interopDefault(import('../pages/home-creative-portfolio.vue' /* webpackChunkName: "pages/home-creative-portfolio" */))
const _2f318750 = () => interopDefault(import('../pages/home-design-studio.vue' /* webpackChunkName: "pages/home-design-studio" */))
const _135012df = () => interopDefault(import('../pages/home-digital-agency.vue' /* webpackChunkName: "pages/home-digital-agency" */))
const _5c5a3ed9 = () => interopDefault(import('../pages/home-essential.vue' /* webpackChunkName: "pages/home-essential" */))
const _d3392702 = () => interopDefault(import('../pages/home-foodie.vue' /* webpackChunkName: "pages/home-foodie" */))
const _35c82908 = () => interopDefault(import('../pages/home-freelancer.vue' /* webpackChunkName: "pages/home-freelancer" */))
const _71186cdd = () => interopDefault(import('../pages/home-fullscreen-slider-left-vertical-header.vue' /* webpackChunkName: "pages/home-fullscreen-slider-left-vertical-header" */))
const _e8ccc130 = () => interopDefault(import('../pages/home-indie-musician.vue' /* webpackChunkName: "pages/home-indie-musician" */))
const _55084c3c = () => interopDefault(import('../pages/home-landing.vue' /* webpackChunkName: "pages/home-landing" */))
const _394b21d6 = () => interopDefault(import('../pages/home-masonry-gallery.vue' /* webpackChunkName: "pages/home-masonry-gallery" */))
const _0b44d894 = () => interopDefault(import('../pages/home-minimal-agency.vue' /* webpackChunkName: "pages/home-minimal-agency" */))
const _6416efaa = () => interopDefault(import('../pages/home-minimal-metro-grid.vue' /* webpackChunkName: "pages/home-minimal-metro-grid" */))
const _3761b1a7 = () => interopDefault(import('../pages/home-minimal-portfolio.vue' /* webpackChunkName: "pages/home-minimal-portfolio" */))
const _1e6a2280 = () => interopDefault(import('../pages/home-onepage.vue' /* webpackChunkName: "pages/home-onepage" */))
const _717daba6 = () => interopDefault(import('../pages/home-photo-slider-gallery.vue' /* webpackChunkName: "pages/home-photo-slider-gallery" */))
const _30bf0b37 = () => interopDefault(import('../pages/home-portfolio-slide.vue' /* webpackChunkName: "pages/home-portfolio-slide" */))
const _52a43bdf = () => interopDefault(import('../pages/home-presentation.vue' /* webpackChunkName: "pages/home-presentation" */))
const _d76331f8 = () => interopDefault(import('../pages/home-product-landing.vue' /* webpackChunkName: "pages/home-product-landing" */))
const _3004a5c2 = () => interopDefault(import('../pages/home-restaurant.vue' /* webpackChunkName: "pages/home-restaurant" */))
const _44e7e780 = () => interopDefault(import('../pages/home-service.vue' /* webpackChunkName: "pages/home-service" */))
const _1716d5aa = () => interopDefault(import('../pages/home-start-up.vue' /* webpackChunkName: "pages/home-start-up" */))
const _a2378524 = () => interopDefault(import('../pages/home-type-hover.vue' /* webpackChunkName: "pages/home-type-hover" */))
const _2e645f61 = () => interopDefault(import('../pages/home-vertical-menu.vue' /* webpackChunkName: "pages/home-vertical-menu" */))
const _5f21838c = () => interopDefault(import('../pages/pricing-plans.vue' /* webpackChunkName: "pages/pricing-plans" */))
const _11598b25 = () => interopDefault(import('../pages/pricing-plans-02.vue' /* webpackChunkName: "pages/pricing-plans-02" */))
const _670fbf5c = () => interopDefault(import('../pages/services-classic.vue' /* webpackChunkName: "pages/services-classic" */))
const _69b9d444 = () => interopDefault(import('../pages/services-list.vue' /* webpackChunkName: "pages/services-list" */))
const _d778ca76 = () => interopDefault(import('../pages/services-modern.vue' /* webpackChunkName: "pages/services-modern" */))
const _509b4452 = () => interopDefault(import('../pages/team-carousel-01.vue' /* webpackChunkName: "pages/team-carousel-01" */))
const _507f1550 = () => interopDefault(import('../pages/team-carousel-02.vue' /* webpackChunkName: "pages/team-carousel-02" */))
const _31996166 = () => interopDefault(import('../pages/team-grid.vue' /* webpackChunkName: "pages/team-grid" */))
const _50fad1c6 = () => interopDefault(import('../pages/blog/blog-creative.vue' /* webpackChunkName: "pages/blog/blog-creative" */))
const _806d8e0a = () => interopDefault(import('../pages/blog/blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _ad75e674 = () => interopDefault(import('../pages/blog/blog-details-modern-layout.vue' /* webpackChunkName: "pages/blog/blog-details-modern-layout" */))
const _7a45bda2 = () => interopDefault(import('../pages/blog/blog-grid-classic.vue' /* webpackChunkName: "pages/blog/blog-grid-classic" */))
const _4f63ba9e = () => interopDefault(import('../pages/blog/blog-grid-classic-sidebar.vue' /* webpackChunkName: "pages/blog/blog-grid-classic-sidebar" */))
const _72903651 = () => interopDefault(import('../pages/blog/blog-grid-mesonry.vue' /* webpackChunkName: "pages/blog/blog-grid-mesonry" */))
const _c70e199e = () => interopDefault(import('../pages/blog/blog-grid-minimal.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal" */))
const _507119b4 = () => interopDefault(import('../pages/blog/blog-grid-minimal-outline.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal-outline" */))
const _52d1bbbf = () => interopDefault(import('../pages/blog/blog-grid-modern.vue' /* webpackChunkName: "pages/blog/blog-grid-modern" */))
const _750300d2 = () => interopDefault(import('../pages/blog/blog-grid-simple.vue' /* webpackChunkName: "pages/blog/blog-grid-simple" */))
const _6a692e5d = () => interopDefault(import('../pages/blog/blog-grid-standard.vue' /* webpackChunkName: "pages/blog/blog-grid-standard" */))
const _b90214b2 = () => interopDefault(import('../pages/blog/blog-standard-list.vue' /* webpackChunkName: "pages/blog/blog-standard-list" */))
const _78beea0c = () => interopDefault(import('../pages/element/accordion.vue' /* webpackChunkName: "pages/element/accordion" */))
const _62634cc6 = () => interopDefault(import('../pages/element/brand-logo.vue' /* webpackChunkName: "pages/element/brand-logo" */))
const _6e31f924 = () => interopDefault(import('../pages/element/call-to-action-banner.vue' /* webpackChunkName: "pages/element/call-to-action-banner" */))
const _fbd1729c = () => interopDefault(import('../pages/element/carousel-slider.vue' /* webpackChunkName: "pages/element/carousel-slider" */))
const _1b332221 = () => interopDefault(import('../pages/element/contact-subscribe.vue' /* webpackChunkName: "pages/element/contact-subscribe" */))
const _28d16a66 = () => interopDefault(import('../pages/element/dividers.vue' /* webpackChunkName: "pages/element/dividers" */))
const _ff9b56ce = () => interopDefault(import('../pages/element/flexible-image-slider.vue' /* webpackChunkName: "pages/element/flexible-image-slider" */))
const _7fcfeeab = () => interopDefault(import('../pages/element/gradation.vue' /* webpackChunkName: "pages/element/gradation" */))
const _9653065e = () => interopDefault(import('../pages/element/icon-boxes.vue' /* webpackChunkName: "pages/element/icon-boxes" */))
const _7871e776 = () => interopDefault(import('../pages/element/instagram.vue' /* webpackChunkName: "pages/element/instagram" */))
const _72cf8fd9 = () => interopDefault(import('../pages/element/lists.vue' /* webpackChunkName: "pages/element/lists" */))
const _1a51ba49 = () => interopDefault(import('../pages/element/message-box.vue' /* webpackChunkName: "pages/element/message-box" */))
const _519f2b08 = () => interopDefault(import('../pages/element/pricing-box.vue' /* webpackChunkName: "pages/element/pricing-box" */))
const _0e9d06d9 = () => interopDefault(import('../pages/element/tab.vue' /* webpackChunkName: "pages/element/tab" */))
const _cb82066e = () => interopDefault(import('../pages/element/team.vue' /* webpackChunkName: "pages/element/team" */))
const _7c78eae3 = () => interopDefault(import('../pages/element/testimonial.vue' /* webpackChunkName: "pages/element/testimonial" */))
const _64df0d10 = () => interopDefault(import('../pages/portfolio/portfolio-ajax-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-ajax-filter" */))
const _1c042a8d = () => interopDefault(import('../pages/portfolio/portfolio-details.vue' /* webpackChunkName: "pages/portfolio/portfolio-details" */))
const _0f72d381 = () => interopDefault(import('../pages/portfolio/portfolio-details-image-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-image-with-caption" */))
const _7a6014ce = () => interopDefault(import('../pages/portfolio/portfolio-details-left-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-left-wide" */))
const _21405548 = () => interopDefault(import('../pages/portfolio/portfolio-details-right.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right" */))
const _45fe3ad4 = () => interopDefault(import('../pages/portfolio/portfolio-details-right-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right-wide" */))
const _13867030 = () => interopDefault(import('../pages/portfolio/portfolio-grid-boxed.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-boxed" */))
const _6929202a = () => interopDefault(import('../pages/portfolio/portfolio-grid-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-filter" */))
const _28af6232 = () => interopDefault(import('../pages/portfolio/portfolio-grid-metro-01.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-01" */))
const _28933330 = () => interopDefault(import('../pages/portfolio/portfolio-grid-metro-02.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-02" */))
const _5a14c6f6 = () => interopDefault(import('../pages/portfolio/portfolio-grid-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-wide" */))
const _462517b8 = () => interopDefault(import('../pages/portfolio/portfolio-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-with-caption" */))
const _0831811d = () => interopDefault(import('../pages/blog/category/_slug.vue' /* webpackChunkName: "pages/blog/category/_slug" */))
const _c1ab0cbe = () => interopDefault(import('../pages/blog/tag/_slug.vue' /* webpackChunkName: "pages/blog/tag/_slug" */))
const _02d2b054 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _596a60da = () => interopDefault(import('../pages/portfolio/_slug.vue' /* webpackChunkName: "pages/portfolio/_slug" */))
const _3413f62e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active-link',
  scrollBehavior,

  routes: [{
    path: "/about-us-01",
    component: _3fdb9f27,
    name: "about-us-01"
  }, {
    path: "/about-us-02",
    component: _3fe9b6a8,
    name: "about-us-02"
  }, {
    path: "/about-us-03",
    component: _3ff7ce29,
    name: "about-us-03"
  }, {
    path: "/career",
    component: _291a3877,
    name: "career"
  }, {
    path: "/contact-us-modern",
    component: _3b041dd8,
    name: "contact-us-modern"
  }, {
    path: "/contact-us-with-map",
    component: _7d67fb4e,
    name: "contact-us-with-map"
  }, {
    path: "/home-authentic-studio",
    component: _2c10216a,
    name: "home-authentic-studio"
  }, {
    path: "/home-blog-grid",
    component: _251736c8,
    name: "home-blog-grid"
  }, {
    path: "/home-corona",
    component: _3f5f08a1,
    name: "home-corona"
  }, {
    path: "/home-creative-agency",
    component: _fe0b4aa4,
    name: "home-creative-agency"
  }, {
    path: "/home-creative-portfolio",
    component: _35b7e7af,
    name: "home-creative-portfolio"
  }, {
    path: "/home-design-studio",
    component: _2f318750,
    name: "home-design-studio"
  }, {
    path: "/home-digital-agency",
    component: _135012df,
    name: "home-digital-agency"
  }, {
    path: "/home-essential",
    component: _5c5a3ed9,
    name: "home-essential"
  }, {
    path: "/home-foodie",
    component: _d3392702,
    name: "home-foodie"
  }, {
    path: "/home-freelancer",
    component: _35c82908,
    name: "home-freelancer"
  }, {
    path: "/home-fullscreen-slider-left-vertical-header",
    component: _71186cdd,
    name: "home-fullscreen-slider-left-vertical-header"
  }, {
    path: "/home-indie-musician",
    component: _e8ccc130,
    name: "home-indie-musician"
  }, {
    path: "/home-landing",
    component: _55084c3c,
    name: "home-landing"
  }, {
    path: "/home-masonry-gallery",
    component: _394b21d6,
    name: "home-masonry-gallery"
  }, {
    path: "/home-minimal-agency",
    component: _0b44d894,
    name: "home-minimal-agency"
  }, {
    path: "/home-minimal-metro-grid",
    component: _6416efaa,
    name: "home-minimal-metro-grid"
  }, {
    path: "/home-minimal-portfolio",
    component: _3761b1a7,
    name: "home-minimal-portfolio"
  }, {
    path: "/home-onepage",
    component: _1e6a2280,
    name: "home-onepage"
  }, {
    path: "/home-photo-slider-gallery",
    component: _717daba6,
    name: "home-photo-slider-gallery"
  }, {
    path: "/home-portfolio-slide",
    component: _30bf0b37,
    name: "home-portfolio-slide"
  }, {
    path: "/home-presentation",
    component: _52a43bdf,
    name: "home-presentation"
  }, {
    path: "/home-product-landing",
    component: _d76331f8,
    name: "home-product-landing"
  }, {
    path: "/home-restaurant",
    component: _3004a5c2,
    name: "home-restaurant"
  }, {
    path: "/home-service",
    component: _44e7e780,
    name: "home-service"
  }, {
    path: "/home-start-up",
    component: _1716d5aa,
    name: "home-start-up"
  }, {
    path: "/home-type-hover",
    component: _a2378524,
    name: "home-type-hover"
  }, {
    path: "/home-vertical-menu",
    component: _2e645f61,
    name: "home-vertical-menu"
  }, {
    path: "/pricing-plans",
    component: _5f21838c,
    name: "pricing-plans"
  }, {
    path: "/pricing-plans-02",
    component: _11598b25,
    name: "pricing-plans-02"
  }, {
    path: "/services-classic",
    component: _670fbf5c,
    name: "services-classic"
  }, {
    path: "/services-list",
    component: _69b9d444,
    name: "services-list"
  }, {
    path: "/services-modern",
    component: _d778ca76,
    name: "services-modern"
  }, {
    path: "/team-carousel-01",
    component: _509b4452,
    name: "team-carousel-01"
  }, {
    path: "/team-carousel-02",
    component: _507f1550,
    name: "team-carousel-02"
  }, {
    path: "/team-grid",
    component: _31996166,
    name: "team-grid"
  }, {
    path: "/blog/blog-creative",
    component: _50fad1c6,
    name: "blog-blog-creative"
  }, {
    path: "/blog/blog-details",
    component: _806d8e0a,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-details-modern-layout",
    component: _ad75e674,
    name: "blog-blog-details-modern-layout"
  }, {
    path: "/blog/blog-grid-classic",
    component: _7a45bda2,
    name: "blog-blog-grid-classic"
  }, {
    path: "/blog/blog-grid-classic-sidebar",
    component: _4f63ba9e,
    name: "blog-blog-grid-classic-sidebar"
  }, {
    path: "/blog/blog-grid-mesonry",
    component: _72903651,
    name: "blog-blog-grid-mesonry"
  }, {
    path: "/blog/blog-grid-minimal",
    component: _c70e199e,
    name: "blog-blog-grid-minimal"
  }, {
    path: "/blog/blog-grid-minimal-outline",
    component: _507119b4,
    name: "blog-blog-grid-minimal-outline"
  }, {
    path: "/blog/blog-grid-modern",
    component: _52d1bbbf,
    name: "blog-blog-grid-modern"
  }, {
    path: "/blog/blog-grid-simple",
    component: _750300d2,
    name: "blog-blog-grid-simple"
  }, {
    path: "/blog/blog-grid-standard",
    component: _6a692e5d,
    name: "blog-blog-grid-standard"
  }, {
    path: "/blog/blog-standard-list",
    component: _b90214b2,
    name: "blog-blog-standard-list"
  }, {
    path: "/element/accordion",
    component: _78beea0c,
    name: "element-accordion"
  }, {
    path: "/element/brand-logo",
    component: _62634cc6,
    name: "element-brand-logo"
  }, {
    path: "/element/call-to-action-banner",
    component: _6e31f924,
    name: "element-call-to-action-banner"
  }, {
    path: "/element/carousel-slider",
    component: _fbd1729c,
    name: "element-carousel-slider"
  }, {
    path: "/element/contact-subscribe",
    component: _1b332221,
    name: "element-contact-subscribe"
  }, {
    path: "/element/dividers",
    component: _28d16a66,
    name: "element-dividers"
  }, {
    path: "/element/flexible-image-slider",
    component: _ff9b56ce,
    name: "element-flexible-image-slider"
  }, {
    path: "/element/gradation",
    component: _7fcfeeab,
    name: "element-gradation"
  }, {
    path: "/element/icon-boxes",
    component: _9653065e,
    name: "element-icon-boxes"
  }, {
    path: "/element/instagram",
    component: _7871e776,
    name: "element-instagram"
  }, {
    path: "/element/lists",
    component: _72cf8fd9,
    name: "element-lists"
  }, {
    path: "/element/message-box",
    component: _1a51ba49,
    name: "element-message-box"
  }, {
    path: "/element/pricing-box",
    component: _519f2b08,
    name: "element-pricing-box"
  }, {
    path: "/element/tab",
    component: _0e9d06d9,
    name: "element-tab"
  }, {
    path: "/element/team",
    component: _cb82066e,
    name: "element-team"
  }, {
    path: "/element/testimonial",
    component: _7c78eae3,
    name: "element-testimonial"
  }, {
    path: "/portfolio/portfolio-ajax-filter",
    component: _64df0d10,
    name: "portfolio-portfolio-ajax-filter"
  }, {
    path: "/portfolio/portfolio-details",
    component: _1c042a8d,
    name: "portfolio-portfolio-details"
  }, {
    path: "/portfolio/portfolio-details-image-with-caption",
    component: _0f72d381,
    name: "portfolio-portfolio-details-image-with-caption"
  }, {
    path: "/portfolio/portfolio-details-left-wide",
    component: _7a6014ce,
    name: "portfolio-portfolio-details-left-wide"
  }, {
    path: "/portfolio/portfolio-details-right",
    component: _21405548,
    name: "portfolio-portfolio-details-right"
  }, {
    path: "/portfolio/portfolio-details-right-wide",
    component: _45fe3ad4,
    name: "portfolio-portfolio-details-right-wide"
  }, {
    path: "/portfolio/portfolio-grid-boxed",
    component: _13867030,
    name: "portfolio-portfolio-grid-boxed"
  }, {
    path: "/portfolio/portfolio-grid-filter",
    component: _6929202a,
    name: "portfolio-portfolio-grid-filter"
  }, {
    path: "/portfolio/portfolio-grid-metro-01",
    component: _28af6232,
    name: "portfolio-portfolio-grid-metro-01"
  }, {
    path: "/portfolio/portfolio-grid-metro-02",
    component: _28933330,
    name: "portfolio-portfolio-grid-metro-02"
  }, {
    path: "/portfolio/portfolio-grid-wide",
    component: _5a14c6f6,
    name: "portfolio-portfolio-grid-wide"
  }, {
    path: "/portfolio/portfolio-with-caption",
    component: _462517b8,
    name: "portfolio-portfolio-with-caption"
  }, {
    path: "/blog/category/:slug?",
    component: _0831811d,
    name: "blog-category-slug"
  }, {
    path: "/blog/tag/:slug?",
    component: _c1ab0cbe,
    name: "blog-tag-slug"
  }, {
    path: "/blog/:slug?",
    component: _02d2b054,
    name: "blog-slug"
  }, {
    path: "/portfolio/:slug?",
    component: _596a60da,
    name: "portfolio-slug"
  }, {
    path: "/",
    component: _3413f62e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
