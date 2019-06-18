import Layout from './Layout.js';
document.querySelector('#cankao').append(new Date());
const history = window.History.createHashHistory();
ReactDOM.render(React.createElement(Layout, {
  history: history
}), document.querySelector('#root'));