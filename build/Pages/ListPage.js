import QueryBar from '../Sections/QueryBar.js';
import ListTable from '../Sections/ListTable.js';
export default function ListPage(props) {
  const {
    options
  } = props;
  const {
    sections
  } = options;
  return Object.keys(sections).map(key => {
    switch (key) {
      case 'QueryBar':
        return React.createElement(QueryBar, {
          options: sections[key]
        });

      case 'ListTable':
        return React.createElement(ListTable, {
          options: sections[key]
        });

      default:
        return null;
    }
  });
}
;