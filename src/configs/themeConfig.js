// You can customize the template with the help of this file

//Template config options
const themeConfig = {
  app: {
    appName: 'Bidoya',
    appLogoImage: require('@src/assets/images/logo/logo.jpg').default
  },
  layout: {
    isRTL: false,
    skin: 'dark', // light, dark, bordered, semi-dark
    routerTransition: 'fadeIn', // fadeIn, fadeInLeft, zoomIn, none or check this for more transition https://animate.style/
    type: 'vertical', // vertical, horizontal
    contentWidth: 'full', // full, boxed
    menu: {
      isHidden: true,
      isCollapsed: false
    },
    navbar: {
      // ? For horizontal menu, navbar type will work for navMenu type
      // type: 'floating', // static , sticky , floating, hidden
      type: 'sticky', // static , sticky , floating, hidden

      backgroundColor: 'white' // BS color options [primary, success, etc]
    },
    footer: {
      type: 'static' // static, sticky, hidden
    },
    customizer: true,
    scrollTop: true // Enable scroll to top button
  }
}

export default themeConfig
