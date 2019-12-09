function networkFetch(url) {
  return `${url} - Response`;
}

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, argArray) {
    const url = args[0];
    if (cache.has(url)) {
      return `${url} - Response from cache`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, argArray);
    }
  }
});
