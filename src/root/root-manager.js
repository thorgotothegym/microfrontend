import * as singleSpa from 'single-spa';

export let DATA = '';

singleSpa.registerApplication('routeapp', () => import ('../index'), pathPrefix(''), { data: DATA} );

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}