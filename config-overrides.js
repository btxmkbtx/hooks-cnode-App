// 这个配置文件是由react-app-rewired加载的，
// 所以package.json中的scripts配置要改为react-app-rewired启动
const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
    // 针对antd实现按需打包；根据import来打包
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        // 设置style: true后我们就不需要再各个组件中引入antd的css了
        style: true, //自动打包式样,'css'代表代码编译后的css式样，true代表源代码，这里的源代码是less,
    }),
    addLessLoader({
        modifyVars: {
            "@primary-color": "#0cb097", // 全局主色 https://ant.design/docs/react/customize-theme-cn.
        },
    })
);
