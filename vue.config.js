module.exports = {
    css: {
      loaderOptions: {
        sass: {
            prependData: `@import '@/_variables.sass'`
        }
      }
    }
  };