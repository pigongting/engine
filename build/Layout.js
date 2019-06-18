import Menu from './Menu.js';
import Pages from './Pages/index.js';
export default function Layout(props) {
  const {
    history
  } = props;
  const [location, setLocation] = React.useState(history.location);
  React.useEffect(() => {
    const unlisten = history.listen((location, action) => {
      // location is an object like window.location
      // console.log(action, location);
      setLocation(location);
    });
  }, []);
  return React.createElement(React.Fragment, null, React.createElement(Menu, null), React.createElement(Pages, {
    location: location
  }));
}
;