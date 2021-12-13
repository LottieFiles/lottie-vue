//Compiler options
const path = require(`path`);

module.exports = {
    configureWebpack: {

    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                return {
                    ...options,
                    compilerOptions: {
                        isCustomElement: tag => tag === 'lottie-player'
                    }
                }
            })
    }
}


// module.exports = {
//     configureWebpack: {
//         resolve: {
//             symlinks: false,
//             alias: {
//                 vue: path.resolve(`./node_modules/vue`)
//             }
//         }
//     },
//     chainWebpack: config => {
//         config.resolve.alias.set('vue', '@vue/compat')
//
//         config.module
//             .rule('vue')
//             .use('vue-loader')
//             .tap(options => {
//                 return {
//                     ...options,
//                     compilerOptions: {
//                         compatConfig: {
//                             MODE: 2
//                         },
//                         isCustomElement: tag => tag === 'lottie-player'
//                     }
//                 }
//             })
//     }
// }
