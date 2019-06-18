// const presets = [
//   [
//     "@babel/env",
//     {
//       targets: {
//         edge: "17",
//         firefox: "60",
//         chrome: "67",
//         safari: "11.1",
//       },
//       useBuiltIns: "usage",
//     },
//   ],
// ];
const presets = [
  [
    "@babel/preset-react", {
      "pragma": "React.createElement", // 编译JSX expressions 时使用的替换函数。
      "pragmaFrag": "React.Fragment", // 编译JSX fragments 时使用的替换组件。
      "useBuiltIns": false, // 当插件需要某项功能时，此参数用于确定是使用内置功能还是通过 polyfill 来模拟。默认模拟。
      "development": false, // 用于确定是否开启用于辅助开发的插件，例如 @babel/plugin-transform-react-jsx-self 和 @babel/plugin-transform-react-jsx-source。默认不开启。
      // "development": process.env.NODE_ENV === "development",
      "throwIfNamespace": true, // 如果使用了 XML 命名空间标签，此参数用于设置是否抛出错误。例如：<f:image />。默认报错，因为 React 的 JSX 目前并不支持这种方式。
    },
  ],
  ["@babel/preset-typescript"]
];
// const plugins = [
//   ["@babel/plugin-syntax-jsx"],
//   ["@babel/plugin-transform-react-jsx"],
//   ["@babel/plugin-transform-react-display-name"],
//   ["@babel/plugin-transform-react-jsx-self"],
//   ["@babel/plugin-transform-react-jsx-source"],
// ];

module.exports = { presets };
// module.exports = { plugins };