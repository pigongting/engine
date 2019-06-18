import rpcService from './utilities/rpcService.js';

function generateMenu(arr) {
  return arr.map(item => {
    if (item.children) {
      return (
        <div>
          {item.name}
          <div style={{ paddingLeft: 20 }}>{generateMenu(item.children)}</div>
        </div>
      );
    }
    return <a href={`#${item.path}`} style={{ display: 'block' }}>{item.name}</a>;
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

  return (
    <div>{generateMenu(menu)}</div>
  );
};
