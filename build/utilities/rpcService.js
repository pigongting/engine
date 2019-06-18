function request(options) {
  return fetch(options.url, {
    // 必须和 header 的 'Content-Type' 匹配
    body: options.data,
    // *default, no-cache, reload, force-cache, only-if-cached
    cache: 'no-cache',
    // include, same-origin, *omit
    credentials: 'include',
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    // *GET, POST, PUT, DELETE, etc.
    method: options.method,
    // no-cors, cors, *same-origin
    mode: 'no-cors',
    // manual, *follow, error
    redirect: 'follow',
    // *client, no-referrer
    referrer: 'no-referrer'
  }).then(response => {
    console.log(response);

    if (response.ok === true) {
      return response.json();
    } else if (response.status === 403) {
      console.log('没有权限: ' + options.url);
    } else if (response.status === 404) {
      console.log('地址错误: ' + options.url);
    } else if (response.status === 500) {
      console.log('服务错误: ' + options.url);
    } else {
      console.log('其他错误: ' + options.url);
    }

    return undefined;
  }).catch(error => {
    console.log('网络故障时或请求被阻止: ' + options.url);
  });
}

const rpcService = {
  rGet: options => {
    return request(Object.assign({}, options, {
      method: 'GET'
    }));
  },
  rPost: () => {
    return request(Object.assign({}, options, {
      method: 'POST',
      data: JSON.stringify(options.data)
    }));
  }
};
export default rpcService;