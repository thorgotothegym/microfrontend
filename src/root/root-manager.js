import * as singleSpa from 'single-spa';

singleSpa.registerApplication('routeapp', () => import ('../index'), pathPrefix(''), { authToken: "d83jD63UdZ6RS6f70D0"} );

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}