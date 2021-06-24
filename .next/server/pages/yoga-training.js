module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		94: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 93);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("c3/c");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "c3/c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/YogaTraining/MainBanner.js





const MainBanner = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "yoga-main-banner",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container-fluid",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "yoga-banner-content",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/images/yoga-banner.png",
          alt: "image",
          className: "main-image"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "content",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/images/top-img.png",
            className: "top-image",
            alt: "image"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "playfair-display-font",
            children: "Accredited Online Yoga Teacher Training"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/profile-authentication",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              className: "default-btn",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "flaticon-user"
              }), " Join For Free ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {})]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/images/bottom-img.png",
            className: "bottom-image",
            alt: "image"
          })]
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "banner-shape2",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/images/banner-shape2.png",
        alt: "image"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "banner-shape3",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/images/banner-shape3.png",
        alt: "image"
      })
    })]
  });
};

/* harmony default export */ var YogaTraining_MainBanner = (MainBanner);
// CONCATENATED MODULE: ./components/YogaTraining/YogaTraining.js





const YogaTraining = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "training-area bg-f5f7fa pt-100 pb-70",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "section-title",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          className: "playfair-display-font",
          children: "Why Online Yoga Training"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-4 col-md-6 col-sm-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "single-training-box",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "/images/training-img1.png",
              alt: "image"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: "playfair-display-font",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/courses-1",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  children: "Flexibility"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/courses-1",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "link-btn",
                children: "Start Now"
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-4 col-md-6 col-sm-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "single-training-box",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "/images/training-img2.png",
              alt: "image"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: "playfair-display-font",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/courses-1",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  children: "Comfort"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/courses-1",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "link-btn",
                children: "Start Now"
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "single-training-box",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "/images/training-img3.png",
              alt: "image"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: "playfair-display-font",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/courses-1",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  children: "Resources"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/courses-1",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "link-btn",
                children: "Start Now"
              })
            })]
          })
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "tree-shape2",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/images/tree-shape2.png",
        alt: "image"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "tree-shape3",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/images/tree-shape3.png",
        alt: "image"
      })
    })]
  });
};

/* harmony default export */ var YogaTraining_YogaTraining = (YogaTraining);
// CONCATENATED MODULE: ./components/YogaTraining/AboutUs.js





const AboutUs = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "about-area ptb-100",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "about-image text-center",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "/images/about-img11.png",
              alt: "image"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "about-content",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "sub-title",
              children: "About Us"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: "playfair-display-font",
              children: "Feel Like You Are Attending Your Class Physically!"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "eCademy training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classNamees virtually by sitting in your comfort zone. Our flexible learning initiatives will help you to learn better and quicker than the traditional ways of learning skills."
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/profile-authentication",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                className: "default-btn mt-2",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "flaticon-user"
                }), " Join For Free ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {})]
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ var YogaTraining_AboutUs = (AboutUs);
// CONCATENATED MODULE: ./components/YogaTraining/Courses.js





const Courses = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "courses-area pb-70",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "section-title",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "sub-title",
          children: "Go at your own pace"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          className: "playfair-display-font",
          children: "Become a Certified Yoga Teacher"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "single-yoga-courses-box",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "courses-image",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/single-courses-1",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "d-block",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "/images/courses/yoga-img1.jpg",
                    alt: "image"
                  })
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "courses-content",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                className: "playfair-display-font",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/single-courses-1",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "200 Hour YTT Course"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "#",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  className: "default-btn",
                  children: ["View Details", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {})]
                })
              })]
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "single-yoga-courses-box",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "courses-image",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/single-courses-1",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "d-block",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "/images/courses/yoga-img2.jpg",
                    alt: "image"
                  })
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "courses-content",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                className: "playfair-display-font",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/single-courses-1",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "300 Hour YTT Course"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "#",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  className: "default-btn",
                  children: ["View Details", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {})]
                })
              })]
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "single-yoga-courses-box",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "courses-image",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/single-courses-1",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "d-block",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "/images/courses/yoga-img3.jpg",
                    alt: "image"
                  })
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "courses-content",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                className: "playfair-display-font",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/single-courses-1",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "500 Hour YTT Course"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "#",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  className: "default-btn",
                  children: ["View Details", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {})]
                })
              })]
            })]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ var YogaTraining_Courses = (Courses);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./components/YogaTraining/FeedbackSlider.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ["..\\components\\YogaTraining\\FeedbackSlider.js -> " + 'react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 2
    }
  }
};

const FeedbackSlider = () => {
  const [display, setDisplay] = external_react_default.a.useState(false);
  external_react_default.a.useEffect(() => {
    setDisplay(true);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "feedback-area bg-6ba292 ptb-100",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container",
      children: display ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(OwlCarousel, _objectSpread(_objectSpread({
        className: "feedback-slides-two owl-carousel owl-theme"
      }, options), {}, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "single-feedback-box",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore."
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "client-info d-flex align-items-center",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "/images/user1.jpg",
              className: "rounded-circle",
              alt: "image"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "title",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                children: "John Smith"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: "Python Developer"
              })]
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "single-feedback-box",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore."
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "client-info d-flex align-items-center",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "/images/user2.jpg",
              className: "rounded-circle",
              alt: "image"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "title",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                children: "Sarah Taylor"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: "PHP Developer"
              })]
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "single-feedback-box",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore."
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "client-info d-flex align-items-center",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "/images/user1.jpg",
              className: "rounded-circle",
              alt: "image"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "title",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                children: "David Warner"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: "QA Developer"
              })]
            })]
          })]
        })]
      })) : ''
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "divider2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "divider3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "tree-shape",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/images/tree-shape.png",
        alt: "image"
      })
    })]
  });
};

/* harmony default export */ var YogaTraining_FeedbackSlider = (FeedbackSlider);
// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__("tpJJ");
var external_react_modal_video_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_video_);

// CONCATENATED MODULE: ./components/YogaTraining/JoinOurYogaTraining.js






const JoinOurYogaTraining = () => {
  // Popup Video
  const [isOpen, setIsOpen] = external_react_default.a.useState(true);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "experience-area ptb-100 extra-padding",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-6 col-md-12",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "experience-content",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "sub-title",
                children: "Join our World Famous Yoga Teacher Training Course... Online!"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                className: "playfair-display-font",
                children: "200hr, 300hr & 500hr Certified Online Yoga courses"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: "eCademy training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classNamees virtually by sitting in your comfort zone. Our flexible learning initiatives will help you to learn better and quicker than the traditional ways of learning skills."
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                className: "features-list",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    className: "bx bx-check"
                  }), " Receive a Yoga Alliance Certificate"]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    className: "bx bx-check"
                  }), " 100hrs of Live Streaming Zoom classNamees"]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    className: "bx bx-check"
                  }), " Watch Video Modules in Your Free Time"]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    className: "bx bx-check"
                  }), " Flex Schedule with Extended Time from Yoga Alliance"]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    className: "bx bx-check"
                  }), " Practice Traditional Hatha and vinyasa Yoga"]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    className: "bx bx-check"
                  }), " Bonus Aerial & Acro Yoga Workshops"]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/profile-authentication",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  className: "default-btn",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    className: "flaticon-user"
                  }), " Get Started Now ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {})]
                })
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-6 col-md-12",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "experience-image",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/experience-img1.jpg",
                alt: "image"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "#play-video",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  onClick: e => {
                    e.preventDefault();
                    openModal();
                  },
                  className: "video-btn popup-youtube",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    className: "flaticon-play"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                className: "title",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  children: "15"
                }), " Years of Experience"]
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_modal_video_default.a, {
      channel: "youtube",
      isOpen: !isOpen,
      videoId: "bk7McNUjWgw",
      onClose: () => setIsOpen(!isOpen)
    })]
  });
};

/* harmony default export */ var YogaTraining_JoinOurYogaTraining = (JoinOurYogaTraining);
// CONCATENATED MODULE: ./components/YogaTraining/FunFacts.js




const FunFacts = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "funfacts-area bg-fffaf3",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-3 col-md-3 col-sm-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "single-funfacts-item",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "1,926"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "Finished Sessions"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-3 col-md-3 col-sm-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "single-funfacts-item",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "3,279"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "Enrolled Learners"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-3 col-md-3 col-sm-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "single-funfacts-item",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "250"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "Online Instructors"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-3 col-md-3 col-sm-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "single-funfacts-item",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "100%"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "Satisfaction Rate"
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ var YogaTraining_FunFacts = (FunFacts);
// CONCATENATED MODULE: ./components/YogaTraining/DownloadCoursesSyllabus.js




const DownloadCoursesSyllabus = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "download-syllabus-area ptb-100",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "download-syllabus-image",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "/images/download.png",
              alt: "image"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "download-syllabus-form",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: "playfair-display-font",
              children: "Download Courses Syllabus"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "Your email address will not be published. Required fields are marked *"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "form-group",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: "Your Name *"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "form-group",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  type: "email",
                  className: "form-control",
                  placeholder: "Your Email *"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "form-group",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: "Your Phone *"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "form-group",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
                  className: "form-control",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                    children: "200 Hour YTT Course *"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                    children: "300 Hour YTT Course *"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                    children: "400 Hour YTT Course *"
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "form-group",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
                  className: "form-control",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                    children: "How Did You Hear About Us? *"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                    children: "How Did You Hear About Us? *"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                    children: "How Did You Hear About Us? *"
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
                className: "default-btn",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "flaticon-tick"
                }), "Submit Now ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {})]
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "syllabus-shape1",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/syllabus-shape1.png",
                alt: "image"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "syllabus-shape2",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/syllabus-shape2.png",
                alt: "image"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "syllabus-shape3",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/syllabus-shape3.png",
                alt: "image"
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ var YogaTraining_DownloadCoursesSyllabus = (DownloadCoursesSyllabus);
// CONCATENATED MODULE: ./components/YogaTraining/Pricing.js





const Pricing = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "pricing-area bg-f9f9f9 pt-100 pb-70",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "section-title",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "sub-title",
          children: "Pricing"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          className: "playfair-display-font",
          children: "Our Flexible Pricing Plan"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "single-pricing-box",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "pricing-header",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/yoga-pricing-img1.png",
                alt: "image"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                children: "200 Hour TTC"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "pricing-features",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: "Examine traditional yoga asanas"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: "Learn meditation and philosophy"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: "Connect energetics and anatomy"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: "Practice teaching for confidence"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: "Become a Yoga Alliance RYT200"
                })]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "price",
              children: ["$499.99", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: "Yoga Alliance Certified"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "#",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                className: "default-btn",
                children: ["Book Now", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {})]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "pricing-shape1",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/pricing-shape1.png",
                alt: "image"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "pricing-shape2",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/pricing-shape2.png",
                alt: "image"
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "single-pricing-box",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "pricing-header",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/yoga-pricing-img2.png",
                alt: "image"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                children: "200 Hour TTC"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "pricing-features",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: "Fine tune yoga alignment and form"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: "Explore the fine art of sequencing"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: "Delve deeper into ancient scripture"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: "Study therapeutic based anatomy"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: "Become a Yoga Alliance RYT300"
                })]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "price",
              children: ["$599.99", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: "Yoga Alliance Certified"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "#",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                className: "default-btn",
                children: ["Book Now", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {})]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "pricing-shape1",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/pricing-shape1.png",
                alt: "image"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "pricing-shape2",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/pricing-shape2.png",
                alt: "image"
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "single-pricing-box",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "pricing-header",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/yoga-pricing-img3.png",
                alt: "image"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                children: "500 Hour TTC"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "pricing-features",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: "Get the highest level certification"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: "Become a respected yoga master"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: "Work at luxury resorts and retreats"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: "Lead your own teacher trainings"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: "Become a Yoga Alliance RYT500"
                })]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "price",
              children: ["$699.99", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: "Yoga Alliance Certified"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "#",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                className: "default-btn",
                children: ["Book Now", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {})]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "pricing-shape1",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/pricing-shape1.png",
                alt: "image"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "pricing-shape2",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/pricing-shape2.png",
                alt: "image"
              })
            })]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ var YogaTraining_Pricing = (Pricing);
// CONCATENATED MODULE: ./components/YogaTraining/LatestBlog.js





const LatestBlog = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "blog-area pt-100 pb-70",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "section-title",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "sub-title",
          children: "Our New"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          className: "playfair-display-font",
          children: "Check Out Our Latest Blog"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "single-blog-post-box",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "post-image",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "#",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "d-block",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "/images/yoga-blog-img1.jpg",
                    alt: "image"
                  })
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "post-content",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "#",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "category",
                  children: "Yoga"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                className: "playfair-display-font",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "#",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "Surprising SUP Yoga Poses You\u2019ll Want to Try This Summer"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                className: "post-content-footer d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "post-author d-flex align-items-center",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: "/images/user1.jpg",
                      className: "rounded-circle",
                      alt: "image"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      children: "Alex Morgan"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    className: "flaticon-calendar"
                  }), " April 30, 2020"]
                })]
              })]
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "single-blog-post-box",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "post-image",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "#",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "d-block",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "/images/yoga-blog-img2.jpg",
                    alt: "image"
                  })
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "post-content",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "#",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "category",
                  children: "YTT"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                className: "playfair-display-font",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "#",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "7 Things I Learned From Doing One of Those Social Media Yoga"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                className: "post-content-footer d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "post-author d-flex align-items-center",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: "/images/user2.jpg",
                      className: "rounded-circle",
                      alt: "image"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      children: "Sarah Taylor"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    className: "flaticon-calendar"
                  }), " April 29, 2020"]
                })]
              })]
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "single-blog-post-box",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "post-image",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "#",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "d-block",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "/images/yoga-blog-img3.jpg",
                    alt: "image"
                  })
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "post-content",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                href: "#",
                className: "category",
                children: "Yoga"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                className: "playfair-display-font",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "#",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "10 Ways to Get Real About Your Body\u2019s Limitations & Avoid"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                className: "post-content-footer d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "post-author d-flex align-items-center",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: "/images/user3.jpg",
                      className: "rounded-circle",
                      alt: "image"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      children: "David Warner"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    className: "flaticon-calendar"
                  }), " April 28, 2020"]
                })]
              })]
            })]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ var YogaTraining_LatestBlog = (LatestBlog);
// CONCATENATED MODULE: ./components/YogaTraining/Subscribe.js




const Subscribe = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "subscribe-area bg-f5f7fa ptb-100",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "subscribe-image",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "/images/subscribe-img1.png",
              alt: "image"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "subscribe-content",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "sub-title",
              children: "Go At Your Own Pace"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: "playfair-display-font",
              children: "Subscribe To Our Newsletter"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
              className: "newsletter-form",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                className: "input-newsletter",
                placeholder: "Enter your email address",
                name: "EMAIL",
                required: true
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
                type: "submit",
                className: "default-btn",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "flaticon-user"
                }), " Subscribe Now ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {})]
              })]
            })]
          })
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "shape4",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/images/shape4.png",
        alt: "image"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "shape13",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/images/shape12.png",
        alt: "image"
      })
    })]
  });
};

/* harmony default export */ var YogaTraining_Subscribe = (Subscribe);
// CONCATENATED MODULE: ./components/YogaTraining/Partner.js



function Partner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Partner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Partner_ownKeys(Object(source), true).forEach(function (key) { Partner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Partner_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Partner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Partner_OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ["..\\components\\YogaTraining\\Partner.js -> " + 'react-owl-carousel3']
  }
});
const Partner_options = {
  loop: true,
  nav: true,
  margin: 60,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 6
    }
  }
};

const Partner = () => {
  const [display, setDisplay] = external_react_default.a.useState(false);
  external_react_default.a.useEffect(() => {
    setDisplay(true);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "partner-area bg-6ba292 ptb-70",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container",
      children: display ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Partner_OwlCarousel, Partner_objectSpread(Partner_objectSpread({
        className: "partner-slides owl-carousel owl-theme"
      }, Partner_options), {}, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/images/partner/partner7.png",
            alt: "image"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/images/partner/partner8.png",
            alt: "image"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/images/partner/partner9.png",
            alt: "image"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/images/partner/partner10.png",
            alt: "image"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/images/partner/partner11.png",
            alt: "image"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/images/partner/partner12.png",
            alt: "image"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/images/partner/partner8.png",
            alt: "image"
          })
        })]
      })) : ''
    })
  });
};

/* harmony default export */ var YogaTraining_Partner = (Partner);
// CONCATENATED MODULE: ./pages/yoga-training.js


 // import Navbar from '../components/_App/Navbar';












 // import Footer from '../components/_App/Footer';

const Index7 = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(YogaTraining_MainBanner, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(YogaTraining_YogaTraining, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(YogaTraining_AboutUs, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(YogaTraining_Courses, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(YogaTraining_FeedbackSlider, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(YogaTraining_JoinOurYogaTraining, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(YogaTraining_FunFacts, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(YogaTraining_DownloadCoursesSyllabus, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(YogaTraining_Pricing, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(YogaTraining_LatestBlog, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(YogaTraining_Subscribe, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(YogaTraining_Partner, {})]
  });
};

/* harmony default export */ var yoga_training = __webpack_exports__["default"] = (Index7);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "q4RA":
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "tpJJ":
/***/ (function(module, exports) {

module.exports = require("react-modal-video");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ })

/******/ });