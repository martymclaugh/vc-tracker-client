export default (params) => {
  const queryString = params.substr(1);
  const queryObj = {}
  queryString.split('&').forEach(param => {
    const paramArr = param.split('=');
    queryObj[paramArr[0]] = paramArr[1];
  });

  return queryObj;
}
