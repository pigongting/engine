import rpcService from '../utilities/rpcService.js';

import ListPage from './ListPage.js';

export default function Pages(props) {
  const { location } = props;
  const { pathname, search, hash, state } = location;

  const [page, setPage] = React.useState(null);

  React.useEffect(() => {

    (async () => {
      // 错误返回
      if (pathname === undefined || pathname === '/') { return; }

      // 斜杠转驼峰
      const jsonPath = pathname.replace(/\/./g, function(all, letter) {
        return all[1].toUpperCase();
      });

      const response = await rpcService.rGet({
        url: `/data/pages/${jsonPath}.json`
      });

      switch (response.pageType) {
        case 'ListPage':
          setPage(<ListPage options={response} />);
          break;
        default:
          setPage(null);
      }      
    })();

  }, [pathname]);

  return page;
};
