//Compiler options

module.exports = {
    configureWebpack: {},
    chainWebpack: (config) => {
      config.module
        .rule("vue")
        .use("vue-loader")
        .tap((options) => {
          return {
            ...options,
            compilerOptions: {
              isCustomElement: (tag) => tag === "lottie-player",
            },
          };
        });
    },
    css: { extract: false },
  };