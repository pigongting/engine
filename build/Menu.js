import rpcService from './utilities/rpcService.js';

function generateMenu(arr) {
  return arr.map(item => {
    if (item.children) {
      return React.createElement("div", null, item.name, React.createElement("div", {
        style: {
          paddingLeft: 20
        }
      }, generateMenu(item.children)));
    }

    return React.createElement("a", {
      href: `#${item.path}`,
      style: {
        display: 'block'
      }
    }, item.name);
  });
}

export default function Menu() {
  const [menu, setMenu] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const response = await rpcService.rGet({
        url: '/data/menu.json'
      });
      setMenu(response);
    })();
  }, []);
  return React.createElement("div", null, generateMenu(menu));
}
;