(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.UnsplashReact = {})));
}(this, (function (exports) { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	var emptyObject = {};

	var emptyObject_1 = emptyObject;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	var emptyFunction_1 = emptyFunction;

	var q="function"===typeof Symbol&&Symbol["for"],r=q?Symbol["for"]("react.element"):60103,t=q?Symbol["for"]("react.portal"):60106,u=q?Symbol["for"]("react.fragment"):60107,v=q?Symbol["for"]("react.strict_mode"):60108,w=q?Symbol["for"]("react.provider"):60109,x=q?Symbol["for"]("react.context"):60110,y=q?Symbol["for"]("react.async_mode"):60111,z=q?Symbol["for"]("react.forward_ref"):60112,A="function"===
	typeof Symbol&&Symbol.iterator;function B(a){for(var b=arguments.length-1,e="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,c=0;c<b;c++)e+="\x26args[]\x3d"+encodeURIComponent(arguments[c+1]);b=Error(e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
	var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function D(a,b,e){this.props=a;this.context=b;this.refs=emptyObject_1;this.updater=e||C;}D.prototype.isReactComponent={};D.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState");};D.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function E(){}
	E.prototype=D.prototype;function F(a,b,e){this.props=a;this.context=b;this.refs=emptyObject_1;this.updater=e||C;}var G=F.prototype=new E;G.constructor=F;objectAssign(G,D.prototype);G.isPureReactComponent=!0;var H={current:null},I=Object.prototype.hasOwnProperty,J={key:!0,ref:!0,__self:!0,__source:!0};
	function K(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref), void 0!==b.key&&(g=""+b.key), b)I.call(b,c)&&!J.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var k=Array(f),l=0;l<f;l++)k[l]=arguments[l+2];d.children=k;}if(a&&a.defaultProps)for(c in f=a.defaultProps, f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:r,type:a,key:g,ref:h,props:d,_owner:H.current}}
	function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===r}function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g,N=[];function O(a,b,e,c){if(N.length){var d=N.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function P(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>N.length&&N.push(a);}
	function Q(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case r:case t:g=!0;}}if(g)return e(c,a,""===b?"."+R(a,0):b), 1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+R(d,h);g+=Q(d,f,e,c);}else if(null===a||"undefined"===typeof a?f=null:(f=A&&a[A]||a["@@iterator"], f="function"===typeof f?f:null), "function"===typeof f)for(a=f.call(a), h=0;!(d=a.next()).done;)d=d.value, f=b+R(d,h++), g+=Q(d,f,e,c);else"object"===d&&(e=""+a, B("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function R(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function S(a,b){a.func.call(a.context,b,a.count++);}
	function T(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?U(a,c,e,emptyFunction_1.thatReturnsArgument):null!=a&&(L(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(M,"$\x26/")+"/")+e, a={$$typeof:r,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}), c.push(a));}function U(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(M,"$\x26/")+"/");b=O(b,g,c,d);null==a||Q(a,"",T,b);P(b);}
	var V={Children:{map:function(a,b,e){if(null==a)return a;var c=[];U(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=O(null,null,b,e);null==a||Q(a,"",S,b);P(b);},count:function(a){return null==a?0:Q(a,"",emptyFunction_1.thatReturnsNull,null)},toArray:function(a){var b=[];U(a,b,null,emptyFunction_1.thatReturnsArgument);return b},only:function(a){L(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:D,PureComponent:F,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:x,
	_calculateChangedBits:b,_defaultValue:a,_currentValue:a,_changedBits:0,Provider:null,Consumer:null};a.Provider={$$typeof:w,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:z,render:a}},Fragment:u,StrictMode:v,unstable_AsyncMode:y,createElement:K,cloneElement:function(a,b,e){var c=void 0,d=objectAssign({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref, f=H.current);void 0!==b.key&&(g=""+b.key);var k=void 0;a.type&&a.type.defaultProps&&(k=a.type.defaultProps);for(c in b)I.call(b,
	c)&&!J.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==k?k[c]:b[c]);}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){k=Array(c);for(var l=0;l<c;l++)k[l]=arguments[l+2];d.children=k;}return{$$typeof:r,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=K.bind(null,a);b.type=a;return b},isValidElement:L,version:"16.3.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:H,assign:objectAssign}},W=Object.freeze({default:V}),X=W&&V||W;
	var react_production_min=X["default"]?X["default"]:X;

	var react = createCommonjsModule(function (module) {

	{
	  module.exports = react_production_min;
	}
	});

	/*!
	 * content-type
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	/**
	 * RegExp to match *( ";" parameter ) in RFC 7231 sec 3.1.1.1
	 *
	 * parameter     = token "=" ( token / quoted-string )
	 * token         = 1*tchar
	 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
	 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
	 *               / DIGIT / ALPHA
	 *               ; any VCHAR, except delimiters
	 * quoted-string = DQUOTE *( qdtext / quoted-pair ) DQUOTE
	 * qdtext        = HTAB / SP / %x21 / %x23-5B / %x5D-7E / obs-text
	 * obs-text      = %x80-FF
	 * quoted-pair   = "\" ( HTAB / SP / VCHAR / obs-text )
	 */
	var PARAM_REGEXP = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g;

	/**
	 * RegExp to match quoted-pair in RFC 7230 sec 3.2.6
	 *
	 * quoted-pair = "\" ( HTAB / SP / VCHAR / obs-text )
	 * obs-text    = %x80-FF
	 */
	var QESC_REGEXP = /\\([\u000b\u0020-\u00ff])/g;

	/**
	 * RegExp to match type in RFC 7231 sec 3.1.1.1
	 *
	 * media-type = type "/" subtype
	 * type       = token
	 * subtype    = token
	 */
	var TYPE_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
	var parse_1 = parse;

	/**
	 * Parse media type to object.
	 *
	 * @param {string|object} string
	 * @return {Object}
	 * @public
	 */

	function parse (string) {
	  if (!string) {
	    throw new TypeError('argument string is required')
	  }

	  // support req/res-like objects as argument
	  var header = typeof string === 'object'
	    ? getcontenttype(string)
	    : string;

	  if (typeof header !== 'string') {
	    throw new TypeError('argument string is required to be a string')
	  }

	  var index = header.indexOf(';');
	  var type = index !== -1
	    ? header.substr(0, index).trim()
	    : header.trim();

	  if (!TYPE_REGEXP.test(type)) {
	    throw new TypeError('invalid media type')
	  }

	  var obj = new ContentType(type.toLowerCase());

	  // parse parameters
	  if (index !== -1) {
	    var key;
	    var match;
	    var value;

	    PARAM_REGEXP.lastIndex = index;

	    while ((match = PARAM_REGEXP.exec(header))) {
	      if (match.index !== index) {
	        throw new TypeError('invalid parameter format')
	      }

	      index += match[0].length;
	      key = match[1].toLowerCase();
	      value = match[2];

	      if (value[0] === '"') {
	        // remove quotes and escapes
	        value = value
	          .substr(1, value.length - 2)
	          .replace(QESC_REGEXP, '$1');
	      }

	      obj.parameters[key] = value;
	    }

	    if (index !== header.length) {
	      throw new TypeError('invalid parameter format')
	    }
	  }

	  return obj
	}

	/**
	 * Get content-type from req/res objects.
	 *
	 * @param {object}
	 * @return {Object}
	 * @private
	 */

	function getcontenttype (obj) {
	  var header;

	  if (typeof obj.getHeader === 'function') {
	    // res-like
	    header = obj.getHeader('content-type');
	  } else if (typeof obj.headers === 'object') {
	    // req-like
	    header = obj.headers && obj.headers['content-type'];
	  }

	  if (typeof header !== 'string') {
	    throw new TypeError('content-type header is missing from object')
	  }

	  return header
	}

	/**
	 * Class to represent a content type.
	 * @private
	 */
	function ContentType (type) {
	  this.parameters = Object.create(null);
	  this.type = type;
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	var checkIsString = /*#__PURE__*/getRefinement(function (value) {
	  return typeof value === 'string' ? value : null;
	});
	var isDefined = function isDefined(x) {
	  return x !== null && x !== undefined;
	};
	function getRefinement(getB) {
	  return function (a) {
	    return isDefined(getB(a));
	  };
	}
	var checkIsNonEmptyArray = function checkIsNonEmptyArray(a) {
	  return a.length > 0;
	};

	/** Takes a dictionary containing nullish values and returns a dictionary of all the defined
	 * (non-nullish) values.
	 */

	var compactDefined = function compactDefined(obj) {
	  return Object.keys(obj).reduce(function (acc, key) {
	    var _ref;

	    var value = obj[key];
	    return _extends({}, acc, isDefined(value) ? (_ref = {}, _ref[key] = value, _ref) : {});
	  }, {});
	};
	function flow() {
	  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
	    fns[_key] = arguments[_key];
	  }

	  var len = fns.length - 1;
	  return function () {
	    for (var _len2 = arguments.length, x = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      x[_key2] = arguments[_key2];
	    }

	    var y = fns[0].apply(this, x);

	    for (var i = 1; i <= len; i++) {
	      y = fns[i].call(this, y);
	    }

	    return y;
	  };
	}

	var checkIsObject = /*#__PURE__*/getRefinement(function (response) {
	  return isDefined(response) && typeof response === 'object' && !Array.isArray(response) ? response : null;
	});
	var checkIsErrors = /*#__PURE__*/getRefinement(function (errors) {
	  return Array.isArray(errors) && errors.every(checkIsString) && checkIsNonEmptyArray(errors) ? errors : null;
	});
	var checkIsApiError = /*#__PURE__*/getRefinement(function (response) {
	  return checkIsObject(response) && 'errors' in response && checkIsErrors(response.errors) ? {
	    errors: response.errors
	  } : null;
	});
	var getErrorForBadStatusCode = function getErrorForBadStatusCode(jsonResponse) {
	  if (checkIsApiError(jsonResponse)) {
	    return {
	      errors: jsonResponse.errors,
	      source: 'api'
	    };
	  } else {
	    return {
	      errors: ['Responded with a status code outside the 2xx range, and the response body is not recognisable.'],
	      source: 'decoding'
	    };
	  }
	};
	var DecodingError = function DecodingError(message) {
	  this.message = message;
	};

	var CONTENT_TYPE_RESPONSE_HEADER = 'content-type';
	var CONTENT_TYPE_JSON = 'application/json';

	var checkIsJsonResponse = function checkIsJsonResponse(response) {
	  var contentTypeHeader = response.headers.get(CONTENT_TYPE_RESPONSE_HEADER);
	  return isDefined(contentTypeHeader) && parse_1(contentTypeHeader).type === CONTENT_TYPE_JSON;
	};
	/**
	 * Note: restrict the type of JSON to `AnyJson` so that `any` doesn't leak downstream.
	 */


	var getJsonResponse = function getJsonResponse(response) {
	  if (checkIsJsonResponse(response)) {
	    return response.json()["catch"](function (_err) {
	      throw new DecodingError('unable to parse JSON response.');
	    });
	  } else {
	    throw new DecodingError('expected JSON response from server.');
	  }
	};

	var handleFetchResponse = function handleFetchResponse(handleResponse) {
	  return function (response) {
	    return (response.ok ? handleResponse({
	      response: response
	    }).then(function (handledResponse) {
	      return {
	        type: 'success',
	        status: response.status,
	        response: handledResponse
	      };
	    }) : getJsonResponse(response).then(function (jsonResponse) {
	      return _extends({
	        type: 'error',
	        status: response.status
	      }, getErrorForBadStatusCode(jsonResponse));
	    }))["catch"](function (error) {
	      /**
	       * We want to separate expected decoding errors from unknown ones. We do so by throwing a custom
	       * `DecodingError` whenever we encounter one within `handleFetchResponse` and catch them all
	       * here. This allows us to easily handle all of these errors at once. Unexpected errors are not
	       * caught, so that they bubble up and fail loudly.
	       *
	       * Note: Ideally we'd use an Either type, but this does the job without introducing dependencies
	       * like `fp-ts`.
	       */
	      if (error instanceof DecodingError) {
	        return {
	          type: 'error',
	          source: 'decoding',
	          status: response.status,
	          errors: [error.message]
	        };
	      } else {
	        throw error;
	      }
	    });
	  };
	};
	var castResponse = function castResponse() {
	  return function (_ref) {
	    var response = _ref.response;
	    return getJsonResponse(response);
	  };
	};

	var addQueryToUrl = function addQueryToUrl(query) {
	  return function (url) {
	    Object.keys(query).forEach(function (queryKey) {
	      return url.searchParams.set(queryKey, query[queryKey].toString());
	    });
	  };
	};

	var addPathnameToUrl = function addPathnameToUrl(pathname) {
	  return function (url) {
	    // When there is no existing pathname, the value is `/`. Appending would give us a URL with two
	    // forward slashes. This is why we replace the value in that scenario.
	    if (url.pathname === '/') {
	      url.pathname = pathname;
	    } else {
	      url.pathname += pathname;
	    }
	  };
	};

	var buildUrl = function buildUrl(_ref) {
	  var pathname = _ref.pathname,
	      query = _ref.query;
	  return function (apiUrl) {
	    var url = new URL(apiUrl);
	    addPathnameToUrl(pathname)(url);
	    addQueryToUrl(query)(url);
	    return url.toString();
	  };
	};
	var parseQueryAndPathname = function parseQueryAndPathname(url) {
	  var _URL = new URL(url),
	      pathname = _URL.pathname,
	      searchParams = _URL.searchParams;

	  var query = {};
	  searchParams.forEach(function (value, key) {
	    query[key] = value;
	  });
	  return {
	    query: query,
	    pathname: pathname === '/' ? undefined : pathname
	  };
	};

	/**
	 * helper used to type-check the arguments, and add default params for all requests
	 */

	var createRequestHandler = function createRequestHandler(fn) {
	  return function (a, additionalFetchOptions) {
	    if (additionalFetchOptions === void 0) {
	      additionalFetchOptions = {};
	    }

	    var _fn = fn(a),
	        headers = _fn.headers,
	        query = _fn.query,
	        baseReqParams = _objectWithoutPropertiesLoose(_fn, ["headers", "query"]);

	    return _extends({}, baseReqParams, additionalFetchOptions, {
	      query: query,
	      headers: _extends({}, headers, additionalFetchOptions.headers)
	    });
	  };
	};
	var createRequestGenerator = function createRequestGenerator(handlers) {
	  return handlers;
	};
	var initMakeRequest = function initMakeRequest(_ref) {
	  var accessKey = _ref.accessKey,
	      _ref$apiVersion = _ref.apiVersion,
	      apiVersion = _ref$apiVersion === void 0 ? 'v1' : _ref$apiVersion,
	      _ref$apiUrl = _ref.apiUrl,
	      apiUrl = _ref$apiUrl === void 0 ? 'https://api.unsplash.com' : _ref$apiUrl,
	      generalHeaders = _ref.headers,
	      providedFetch = _ref.fetch,
	      generalFetchOptions = _objectWithoutPropertiesLoose(_ref, ["accessKey", "apiVersion", "apiUrl", "headers", "fetch"]);

	  return function (_ref2) {
	    var handleResponse = _ref2.handleResponse,
	        handleRequest = _ref2.handleRequest;
	    return flow(handleRequest, function (_ref3) {
	      var pathname = _ref3.pathname,
	          query = _ref3.query,
	          _ref3$method = _ref3.method,
	          method = _ref3$method === void 0 ? 'GET' : _ref3$method,
	          endpointHeaders = _ref3.headers,
	          body = _ref3.body,
	          signal = _ref3.signal;
	      var url = buildUrl({
	        pathname: pathname,
	        query: query
	      })(apiUrl);

	      var fetchOptions = _extends({
	        method: method,
	        headers: _extends({}, generalHeaders, endpointHeaders, {
	          'Accept-Version': apiVersion
	        }, isDefined(accessKey) ? {
	          Authorization: "Client-ID " + accessKey
	        } : {}),
	        body: body,
	        signal: signal
	      }, generalFetchOptions);

	      var fetchToUse = providedFetch != null ? providedFetch : fetch;
	      return fetchToUse(url, fetchOptions).then(handleFetchResponse(handleResponse));
	    });
	  };
	};

	var TOTAL_RESPONSE_HEADER = 'x-total';

	var getTotalFromApiFeedResponse = function getTotalFromApiFeedResponse(response) {
	  var totalsStr = response.headers.get(TOTAL_RESPONSE_HEADER);

	  if (isDefined(totalsStr)) {
	    var total = parseInt(totalsStr);

	    if (Number.isInteger(total)) {
	      return total;
	    } else {
	      throw new DecodingError("expected " + TOTAL_RESPONSE_HEADER + " header to be valid integer.");
	    }
	  } else {
	    throw new DecodingError("expected " + TOTAL_RESPONSE_HEADER + " header to exist.");
	  }
	};

	var handleFeedResponse = function handleFeedResponse() {
	  return function (_ref) {
	    var response = _ref.response;
	    return castResponse()({
	      response: response
	    }).then(function (results) {
	      return {
	        results: results,
	        total: getTotalFromApiFeedResponse(response)
	      };
	    });
	  };
	};

	var getCollections = function getCollections(collectionIds) {
	  return isDefined(collectionIds) ? {
	    collections: collectionIds.join()
	  } : {};
	};
	var getFeedParams = function getFeedParams(_ref) {
	  var page = _ref.page,
	      perPage = _ref.perPage,
	      orderBy = _ref.orderBy;
	  return compactDefined({
	    per_page: perPage,
	    order_by: orderBy,
	    page: page
	  });
	};

	var COLLECTIONS_PATH_PREFIX = '/collections';
	var getPhotos = {
	  handleRequest: /*#__PURE__*/createRequestHandler(function (_ref) {
	    var collectionId = _ref.collectionId,
	        orientation = _ref.orientation,
	        paginationParams = _objectWithoutPropertiesLoose(_ref, ["collectionId", "orientation"]);

	    return {
	      pathname: COLLECTIONS_PATH_PREFIX + "/" + collectionId + "/photos",
	      query: compactDefined(_extends({}, getFeedParams(paginationParams), {
	        orientation: orientation
	      }))
	    };
	  }),
	  handleResponse: /*#__PURE__*/handleFeedResponse()
	};
	var get = {
	  handleRequest: /*#__PURE__*/createRequestHandler(function (_ref2) {
	    var collectionId = _ref2.collectionId;
	    return {
	      pathname: COLLECTIONS_PATH_PREFIX + "/" + collectionId,
	      query: {}
	    };
	  }),
	  handleResponse: /*#__PURE__*/castResponse()
	};
	var list = {
	  handleRequest: /*#__PURE__*/createRequestHandler(function (paginationParams) {
	    if (paginationParams === void 0) {
	      paginationParams = {};
	    }

	    return {
	      pathname: COLLECTIONS_PATH_PREFIX,
	      query: getFeedParams(paginationParams)
	    };
	  }),
	  handleResponse: /*#__PURE__*/handleFeedResponse()
	};
	var getRelated = {
	  handleRequest: /*#__PURE__*/createRequestHandler(function (_ref3) {
	    var collectionId = _ref3.collectionId;
	    return {
	      pathname: COLLECTIONS_PATH_PREFIX + "/" + collectionId + "/related",
	      query: {}
	    };
	  }),
	  handleResponse: /*#__PURE__*/castResponse()
	};

	var PHOTOS_PATH_PREFIX = '/photos';
	var list$1 = {
	  handleRequest: /*#__PURE__*/createRequestHandler(function (feedParams) {
	    if (feedParams === void 0) {
	      feedParams = {};
	    }

	    return {
	      pathname: PHOTOS_PATH_PREFIX,
	      query: compactDefined(getFeedParams(feedParams))
	    };
	  }),
	  handleResponse: /*#__PURE__*/handleFeedResponse()
	};
	var get$1 = {
	  handleRequest: /*#__PURE__*/createRequestHandler(function (_ref) {
	    var photoId = _ref.photoId;
	    return {
	      pathname: PHOTOS_PATH_PREFIX + "/" + photoId,
	      query: {}
	    };
	  }),
	  handleResponse: /*#__PURE__*/castResponse()
	};
	var getStats = {
	  handleRequest: /*#__PURE__*/createRequestHandler(function (_ref2) {
	    var photoId = _ref2.photoId;
	    return {
	      pathname: PHOTOS_PATH_PREFIX + "/" + photoId + "/statistics",
	      query: {}
	    };
	  }),
	  handleResponse: /*#__PURE__*/castResponse()
	};
	var getRandom = {
	  handleRequest: /*#__PURE__*/createRequestHandler(function (_temp) {
	    var _ref3 = _temp === void 0 ? {} : _temp,
	        collectionIds = _ref3.collectionIds,
	        queryParams = _objectWithoutPropertiesLoose(_ref3, ["collectionIds"]);

	    return {
	      pathname: PHOTOS_PATH_PREFIX + "/random",
	      query: compactDefined(_extends({}, queryParams, getCollections(collectionIds))),
	      headers: {
	        /**
	         * Avoid response caching
	         */
	        'cache-control': 'no-cache'
	      }
	    };
	  }),
	  handleResponse: /*#__PURE__*/castResponse()
	};
	var trackDownload = {
	  handleRequest: /*#__PURE__*/createRequestHandler(function (_ref4) {
	    var downloadLocation = _ref4.downloadLocation;

	    var _parseQueryAndPathnam = parseQueryAndPathname(downloadLocation),
	        pathname = _parseQueryAndPathnam.pathname,
	        query = _parseQueryAndPathnam.query;

	    if (!isDefined(pathname)) {
	      throw new Error('Could not parse pathname from url.');
	    }

	    return {
	      pathname: pathname,
	      query: compactDefined(query)
	    };
	  }),
	  handleResponse: /*#__PURE__*/castResponse()
	};

	var SEARCH_PATH_PREFIX = "/search";
	var getPhotos$1 = {
	  handleRequest: /*#__PURE__*/createRequestHandler(function (_ref) {
	    var query = _ref.query,
	        page = _ref.page,
	        perPage = _ref.perPage,
	        orderBy = _ref.orderBy,
	        collectionIds = _ref.collectionIds,
	        lang = _ref.lang,
	        contentFilter = _ref.contentFilter,
	        filters = _objectWithoutPropertiesLoose(_ref, ["query", "page", "perPage", "orderBy", "collectionIds", "lang", "contentFilter"]);

	    return {
	      pathname: SEARCH_PATH_PREFIX + "/photos",
	      query: compactDefined(_extends({
	        query: query,
	        content_filter: contentFilter,
	        lang: lang,
	        order_by: orderBy
	      }, getFeedParams({
	        page: page,
	        perPage: perPage
	      }), getCollections(collectionIds), filters))
	    };
	  }),
	  handleResponse: /*#__PURE__*/castResponse()
	};
	var getCollections$1 = {
	  handleRequest: /*#__PURE__*/createRequestHandler(function (_ref2) {
	    var query = _ref2.query,
	        paginationParams = _objectWithoutPropertiesLoose(_ref2, ["query"]);

	    return {
	      pathname: SEARCH_PATH_PREFIX + "/collections",
	      query: _extends({
	        query: query
	      }, getFeedParams(paginationParams))
	    };
	  }),
	  handleResponse: /*#__PURE__*/castResponse()
	};
	var getUsers = {
	  handleRequest: /*#__PURE__*/createRequestHandler(function (_ref3) {
	    var query = _ref3.query,
	        paginationParams = _objectWithoutPropertiesLoose(_ref3, ["query"]);

	    return {
	      pathname: SEARCH_PATH_PREFIX + "/users",
	      query: _extends({
	        query: query
	      }, getFeedParams(paginationParams))
	    };
	  }),
	  handleResponse: /*#__PURE__*/castResponse()
	};

	var USERS_PATH_PREFIX = '/users';
	var get$2 = {
	  handleRequest: /*#__PURE__*/createRequestHandler(function (_ref) {
	    var username = _ref.username;
	    return {
	      pathname: USERS_PATH_PREFIX + "/" + username,
	      query: {}
	    };
	  }),
	  handleResponse: /*#__PURE__*/castResponse()
	};
	var getPhotos$2 = {
	  handleRequest: /*#__PURE__*/createRequestHandler(function (_ref2) {
	    var username = _ref2.username,
	        stats = _ref2.stats,
	        orientation = _ref2.orientation,
	        paginationParams = _objectWithoutPropertiesLoose(_ref2, ["username", "stats", "orientation"]);

	    return {
	      pathname: USERS_PATH_PREFIX + "/" + username + "/photos",
	      query: compactDefined(_extends({}, getFeedParams(paginationParams), {
	        orientation: orientation,
	        stats: stats
	      }))
	    };
	  }),
	  handleResponse: /*#__PURE__*/handleFeedResponse()
	};
	var getLikes = {
	  handleRequest: /*#__PURE__*/createRequestHandler(function (_ref3) {
	    var username = _ref3.username,
	        orientation = _ref3.orientation,
	        paginationParams = _objectWithoutPropertiesLoose(_ref3, ["username", "orientation"]);

	    return {
	      pathname: USERS_PATH_PREFIX + "/" + username + "/likes",
	      query: compactDefined(_extends({}, getFeedParams(paginationParams), {
	        orientation: orientation
	      }))
	    };
	  }),
	  handleResponse: /*#__PURE__*/handleFeedResponse()
	};
	var getCollections$2 = {
	  handleRequest: /*#__PURE__*/createRequestHandler(function (_ref4) {
	    var username = _ref4.username,
	        paginationParams = _objectWithoutPropertiesLoose(_ref4, ["username"]);

	    return {
	      pathname: USERS_PATH_PREFIX + "/" + username + "/collections",
	      query: getFeedParams(paginationParams)
	    };
	  }),
	  handleResponse: /*#__PURE__*/handleFeedResponse()
	};

	var BASE_TOPIC_PATH = '/topics';

	var getTopicPath = function getTopicPath(_ref) {
	  var topicIdOrSlug = _ref.topicIdOrSlug;
	  return BASE_TOPIC_PATH + "/" + topicIdOrSlug;
	};

	var getTopicPhotosPath = /*#__PURE__*/flow(getTopicPath, function (topicPath) {
	  return topicPath + "/photos";
	});
	var list$2 = /*#__PURE__*/createRequestGenerator({
	  handleRequest: function handleRequest(_ref2) {
	    var page = _ref2.page,
	        perPage = _ref2.perPage,
	        orderBy = _ref2.orderBy,
	        topicIdsOrSlugs = _ref2.topicIdsOrSlugs;
	    return {
	      pathname: BASE_TOPIC_PATH,
	      query: compactDefined(_extends({}, getFeedParams({
	        page: page,
	        perPage: perPage
	      }), {
	        ids: topicIdsOrSlugs == null ? void 0 : topicIdsOrSlugs.join(','),
	        order_by: orderBy
	      }))
	    };
	  },
	  handleResponse: /*#__PURE__*/handleFeedResponse()
	});
	var get$3 = /*#__PURE__*/createRequestGenerator({
	  handleRequest: function handleRequest(_ref3) {
	    var topicIdOrSlug = _ref3.topicIdOrSlug;
	    return {
	      pathname: getTopicPath({
	        topicIdOrSlug: topicIdOrSlug
	      }),
	      query: {}
	    };
	  },
	  handleResponse: /*#__PURE__*/castResponse()
	});
	var getPhotos$3 = /*#__PURE__*/createRequestGenerator({
	  handleRequest: function handleRequest(_ref4) {
	    var topicIdOrSlug = _ref4.topicIdOrSlug,
	        orientation = _ref4.orientation,
	        feedParams = _objectWithoutPropertiesLoose(_ref4, ["topicIdOrSlug", "orientation"]);

	    return {
	      pathname: getTopicPhotosPath({
	        topicIdOrSlug: topicIdOrSlug
	      }),
	      query: compactDefined(_extends({}, getFeedParams(feedParams), {
	        orientation: orientation
	      }))
	    };
	  },
	  handleResponse: /*#__PURE__*/handleFeedResponse()
	});

	var Language;

	(function (Language) {
	  Language["Afrikaans"] = "af";
	  Language["Amharic"] = "am";
	  Language["Arabic"] = "ar";
	  Language["Azerbaijani"] = "az";
	  Language["Belarusian"] = "be";
	  Language["Bulgarian"] = "bg";
	  Language["Bengali"] = "bn";
	  Language["Bosnian"] = "bs";
	  Language["Catalan"] = "ca";
	  Language["Cebuano"] = "ceb";
	  Language["Corsican"] = "co";
	  Language["Czech"] = "cs";
	  Language["Welsh"] = "cy";
	  Language["Danish"] = "da";
	  Language["German"] = "de";
	  Language["Greek"] = "el";
	  Language["English"] = "en";
	  Language["Esperanto"] = "eo";
	  Language["Spanish"] = "es";
	  Language["Estonian"] = "et";
	  Language["Basque"] = "eu";
	  Language["Persian"] = "fa";
	  Language["Finnish"] = "fi";
	  Language["French"] = "fr";
	  Language["Frisian"] = "fy";
	  Language["Irish"] = "ga";
	  Language["ScotsGaelic"] = "gd";
	  Language["Galician"] = "gl";
	  Language["Gujarati"] = "gu";
	  Language["Hausa"] = "ha";
	  Language["Hawaiian"] = "haw";
	  Language["Hindi"] = "hi";
	  Language["Hmong"] = "hmn";
	  Language["Croatian"] = "hr";
	  Language["HaitianCreole"] = "ht";
	  Language["Hungarian"] = "hu";
	  Language["Armenian"] = "hy";
	  Language["Indonesian"] = "id";
	  Language["Igbo"] = "ig";
	  Language["Icelandic"] = "is";
	  Language["Italian"] = "it";
	  Language["Hebrew"] = "iw";
	  Language["Japanese"] = "ja";
	  Language["Javanese"] = "jw";
	  Language["Georgian"] = "ka";
	  Language["Kazakh"] = "kk";
	  Language["Khmer"] = "km";
	  Language["Kannada"] = "kn";
	  Language["Korean"] = "ko";
	  Language["Kurdish"] = "ku";
	  Language["Kyrgyz"] = "ky";
	  Language["Latin"] = "la";
	  Language["Luxembourgish"] = "lb";
	  Language["Lao"] = "lo";
	  Language["Lithuanian"] = "lt";
	  Language["Latvian"] = "lv";
	  Language["Malagasy"] = "mg";
	  Language["Maori"] = "mi";
	  Language["Macedonian"] = "mk";
	  Language["Malayalam"] = "ml";
	  Language["Mongolian"] = "mn";
	  Language["Marathi"] = "mr";
	  Language["Malay"] = "ms";
	  Language["Maltese"] = "mt";
	  Language["Myanmar"] = "my";
	  Language["Nepali"] = "ne";
	  Language["Dutch"] = "nl";
	  Language["Norwegian"] = "no";
	  Language["Nyanja"] = "ny";
	  Language["Oriya"] = "or";
	  Language["Punjabi"] = "pa";
	  Language["Polish"] = "pl";
	  Language["Pashto"] = "ps";
	  Language["Portuguese"] = "pt";
	  Language["Romanian"] = "ro";
	  Language["Russian"] = "ru";
	  Language["Kinyarwanda"] = "rw";
	  Language["Sindhi"] = "sd";
	  Language["Sinhala"] = "si";
	  Language["Slovak"] = "sk";
	  Language["Slovenian"] = "sl";
	  Language["Samoan"] = "sm";
	  Language["Shona"] = "sn";
	  Language["Somali"] = "so";
	  Language["Albanian"] = "sq";
	  Language["Serbian"] = "sr";
	  Language["Sesotho"] = "st";
	  Language["Sundanese"] = "su";
	  Language["Swedish"] = "sv";
	  Language["Swahili"] = "sw";
	  Language["Tamil"] = "ta";
	  Language["Telugu"] = "te";
	  Language["Tajik"] = "tg";
	  Language["Thai"] = "th";
	  Language["Turkmen"] = "tk";
	  Language["Filipino"] = "tl";
	  Language["Turkish"] = "tr";
	  Language["Tatar"] = "tt";
	  Language["Uighur"] = "ug";
	  Language["Ukrainian"] = "uk";
	  Language["Urdu"] = "ur";
	  Language["Uzbek"] = "uz";
	  Language["Vietnamese"] = "vi";
	  Language["Xhosa"] = "xh";
	  Language["Yiddish"] = "yi";
	  Language["Yoruba"] = "yo";
	  Language["ChineseSimplified"] = "zh";
	  Language["ChineseTraditional"] = "zh-TW";
	  Language["Zulu"] = "zu";
	})(Language || (Language = {}));

	var OrderBy;

	(function (OrderBy) {
	  OrderBy["LATEST"] = "latest";
	  OrderBy["POPULAR"] = "popular";
	  OrderBy["OLDEST"] = "oldest";
	})(OrderBy || (OrderBy = {}));

	var createApi = /*#__PURE__*/flow(initMakeRequest, function (makeRequest) {
	  return {
	    photos: {
	      get: makeRequest(get$1),
	      list: makeRequest(list$1),
	      getStats: makeRequest(getStats),
	      getRandom: makeRequest(getRandom),
	      trackDownload: makeRequest(trackDownload)
	    },
	    users: {
	      getPhotos: makeRequest(getPhotos$2),
	      getCollections: makeRequest(getCollections$2),
	      getLikes: makeRequest(getLikes),
	      get: makeRequest(get$2)
	    },
	    search: {
	      getCollections: makeRequest(getCollections$1),
	      getPhotos: makeRequest(getPhotos$1),
	      getUsers: makeRequest(getUsers)
	    },
	    collections: {
	      getPhotos: makeRequest(getPhotos),
	      get: makeRequest(get),
	      list: makeRequest(list),
	      getRelated: makeRequest(getRelated)
	    },
	    topics: {
	      list: makeRequest(list$2),
	      get: makeRequest(get$3),
	      getPhotos: makeRequest(getPhotos$3)
	    }
	  };
	});

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var _extends$1 = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	var objectWithoutProperties = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};

	var ChaosMonkey = function () {
	  function ChaosMonkey(shouldDoAnything) {
	    var _this = this;

	    classCallCheck(this, ChaosMonkey);

	    if (shouldDoAnything) {
	      this.process = function (r) {
	        return Math.random() > 0.5 ? _this.failResponse(r) : r;
	      };
	    } else {
	      this.process = function (r) {
	        return r;
	      };
	    }
	  }

	  createClass(ChaosMonkey, [{
	    key: "failResponse",
	    value: function failResponse(_response) {
	      var errors = [[400, "bad request"], [503, "gateway timeout"], [500, "server error"], [401, "not authorized"]];
	      var error = errors[Math.round(Math.random() * (errors.length - 1))];
	      return new Response(JSON.stringify({}), { status: error[0], statusText: error[1] });
	    }
	  }]);
	  return ChaosMonkey;
	}();

	var UnsplashWrapper = function () {
	  function UnsplashWrapper(_ref) {
	    var _this2 = this;

	    var accessKey = _ref.accessKey,
	        _ref$__debug_chaosMon = _ref.__debug_chaosMonkey,
	        __debug_chaosMonkey = _ref$__debug_chaosMon === undefined ? false : _ref$__debug_chaosMon;

	    classCallCheck(this, UnsplashWrapper);

	    this.listPhotos = function (page, perPage) {
	      var orderBy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "popular";

	      return _this2.unsplash.photos.list({ page: page, perPage: perPage, orderBy: orderBy }).then(_this2.processResponse).then(function (_ref2) {
	        var response = _ref2.response;
	        return response.results;
	      });
	    };

	    this.searchPhotos = function (query, page, perPage) {
	      return _this2.unsplash.search.getPhotos({ query: query, page: page, perPage: perPage }).then(_this2.processResponse).then(function (_ref3) {
	        var response = _ref3.response;
	        return response;
	      });
	    };

	    this.getPhoto = function (id) {
	      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	          width = _ref4.width,
	          height = _ref4.height;

	      return _this2.unsplash.photos.get({ photoId: id, width: width, height: height }).then(_this2.processResponse).then(function (_ref5) {
	        var response = _ref5.response;
	        return response;
	      });
	    };

	    this.downloadPhoto = function (photo) {
	      return _this2.unsplash.photos.trackDownload({ downloadLocation: photo.links.download_location }).then(_this2.processResponse).then(function (_ref6) {
	        var response = _ref6.response;
	        return response;
	      });
	    };

	    this.processResponse = function (incomingResponse) {
	      var response = Promise.resolve(_this2.__debug_chaosMonkey.process(incomingResponse));

	      return response.then(_this2.handleErrors);
	    };

	    this.__debug_chaosMonkey = new ChaosMonkey(__debug_chaosMonkey);
	    this.unsplash = createApi({ accessKey: accessKey });
	  }

	  createClass(UnsplashWrapper, [{
	    key: "handleErrors",
	    value: function handleErrors(response) {
	      if (response.type !== "success") {
	        var error = Error(response.statusText);
	        error.status = response.status;
	        throw error;
	      }

	      return response;
	    }
	  }]);
	  return UnsplashWrapper;
	}();

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	function invariant(condition, format, a, b, c, d, e, f) {

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	var invariant_1 = invariant;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant_1(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction_1;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = factoryWithThrowingShims();
	}
	});

	var index_m = createCommonjsModule(function (module) {
	var e=Object.assign||function(e){for(var t=arguments,n=1;n<arguments.length;n++){var r=t[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);}return e},t=r(react),n=r(propTypes);function r(e){return e&&e.__esModule?e:{default:e}}var i=function(n){var r=n.color,i=n.speed,a=n.gap,s=n.thickness,o=n.size,l=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(n,["color","speed","gap","thickness","size"]);return t.default.createElement("svg",e({height:o,width:o},l,{style:{animationDuration:function(e){return"fast"===e?600:"slow"===e?900:750}(i)+"ms"},className:"__react-svg-spinner_circle",role:"img","aria-labelledby":"title desc",viewBox:"0 0 32 32"}),t.default.createElement("title",{id:"title"},"Circle loading spinner"),t.default.createElement("desc",{id:"desc"},'Image of a partial circle indicating "loading."'),t.default.createElement("style",{dangerouslySetInnerHTML:{__html:"\n      .__react-svg-spinner_circle{\n          transition-property: transform;\n          animation-name: __react-svg-spinner_infinite-spin;\n          animation-iteration-count: infinite;\n          animation-timing-function: linear;\n      }\n      @keyframes __react-svg-spinner_infinite-spin {\n          from {transform: rotate(0deg)}\n          to {transform: rotate(360deg)}\n      }\n    "}}),t.default.createElement("circle",{role:"presentation",cx:16,cy:16,r:14-s/2,stroke:r,fill:"none",strokeWidth:s,strokeDasharray:2*Math.PI*(11-a),strokeLinecap:"round"}))};i.propTypes={color:n.default.string,thickness:n.default.oneOf([1,2,3,4,5,6,7,8]).isRequired,gap:n.default.oneOf([1,2,3,4,5]).isRequired,speed:n.default.oneOf(["fast","slow"]),size:n.default.string.isRequired}, i.defaultProps={color:"rgba(0,0,0,0.4)",gap:4,thickness:4,size:"1em"}, module.exports=i;

	});

	var Spinner = unwrapExports(index_m);

	var number = propTypes.number,
	    object = propTypes.object,
	    string = propTypes.string,
	    oneOfType = propTypes.oneOfType;


	SearchIcon.propTypes = {
	  width: oneOfType([number, string]),
	  height: oneOfType([number, string]),
	  style: object
	};

	function SearchIcon(_ref) {
	  var _ref$width = _ref.width,
	      width = _ref$width === undefined ? 32 : _ref$width,
	      _ref$height = _ref.height,
	      height = _ref$height === undefined ? 32 : _ref$height,
	      _ref$style = _ref.style,
	      style = _ref$style === undefined ? {} : _ref$style;

	  return react.createElement(
	    "svg",
	    { width: width, height: height, style: style, viewBox: "0 0 16.7 16.7" },
	    react.createElement("path", {
	      style: { fill: "currentColor" },
	      d: "M16.7,15.3l-4.2-4.2c2-2.7,1.8-6.6-0.7-9.1c-1.4-1.4-3.1-2-4.9-2C5.2,0,3.4,0.7,2,2c-2.7,2.7-2.7,7.1,0,9.8 c1.4,1.4,3.1,2,4.9,2c1.5,0,2.9-0.5,4.1-1.4l4.2,4.2L16.7,15.3z M3.4,10.4c-1.9-1.9-1.9-5.1,0-7C4.4,2.5,5.6,2,6.9,2 c1.3,0,2.6,0.5,3.5,1.4c1.9,1.9,1.9,5.1,0,7c-0.9,0.9-2.2,1.4-3.5,1.4S4.4,11.4,3.4,10.4z"
	    })
	  );
	}

	var number$1 = propTypes.number,
	    object$1 = propTypes.object,
	    string$1 = propTypes.string,
	    oneOfType$1 = propTypes.oneOfType;


	ErrorImage.propTypes = {
	  width: oneOfType$1([number$1, string$1]),
	  height: oneOfType$1([number$1, string$1]),
	  style: object$1
	};

	function ErrorImage(_ref) {
	  var _ref$width = _ref.width,
	      width = _ref$width === undefined ? 143 : _ref$width,
	      _ref$height = _ref.height,
	      height = _ref$height === undefined ? 109 : _ref$height;

	  return react.createElement(
	    "svg",
	    { width: width, height: height, viewBox: "0 0 105.597 80.577" },
	    react.createElement(
	      "g",
	      { style: { opacity: 0.6000000000000001 } },
	      react.createElement("path", {
	        d: "M102.54,44.008A54.868,54.868,0,0,1,81.015,71.727c-9.272,5.971-19.156,7.447-30.5,4.956-11.219-2.521-22.3-7.648-31.46-12.508C9.971,59.07,2.81,54.393,1.033,47.046-.711,39.9,3.108,30,12.293,20.254,21.374,10.667,35.821,1.771,53,.307,70.062-1.411,85.737,4.279,94.726,12.58,103.947,20.923,106.493,32.285,102.54,44.008Z",
	        style: { fill: "#e1f0f9" }
	      })
	    ),
	    react.createElement(
	      "g",
	      { style: { opacity: 0.2 } },
	      react.createElement("path", {
	        d: "M66.594,79.257c-8.7,1.638-17.1.125-25.777-4.367C30.632,69.553,21.251,61.734,13.664,54.67,6.206,47.388.5,41.018.683,33.461c.118-5.34,3.446-11.323,9.623-16.895",
	        style: {
	          fill: "none",
	          stroke: "#bac7d3",
	          strokeMiterlimit: 10,
	          strokeWidth: 1.35656762123108 + "px"
	        }
	      }),
	      react.createElement("path", {
	        d: "M99.52,56.783A55.145,55.145,0,0,1,76.763,75.974",
	        style: {
	          fill: "none",
	          stroke: "#bac7d3",
	          strokeMiterlimit: 10,
	          strokeWidth: 1.35656762123108 + "px"
	        }
	      }),
	      react.createElement("path", {
	        d: "M23.837,7.561a64.4,64.4,0,0,1,39.137-5.8C79.9,4.51,93.565,14.061,100.1,24.4a27.717,27.717,0,0,1,3.922,22.51",
	        style: {
	          fill: "none",
	          stroke: "#bac7d3",
	          strokeMiterlimit: 10,
	          strokeWidth: 1.35656762123108 + "px"
	        }
	      })
	    ),
	    react.createElement("rect", {
	      x: "35.441",
	      y: "21.706",
	      width: "4.473",
	      height: "6.377",
	      rx: "0.873",
	      ry: "0.873",
	      style: { fill: "#ef5043" }
	    }),
	    react.createElement("rect", {
	      x: "45.478",
	      y: "19.136",
	      width: "18.25",
	      height: "8.946",
	      rx: "3",
	      ry: "3",
	      style: { fill: "#444" }
	    }),
	    react.createElement("rect", {
	      x: "31.772",
	      y: "23.609",
	      width: "45.663",
	      height: "31.5",
	      rx: "3",
	      ry: "3",
	      style: { fill: "#565656" }
	    }),
	    react.createElement("circle", { cx: "54.603", cy: "39.359", r: "10.909", style: { fill: "#707070" } }),
	    react.createElement("circle", { cx: "54.603", cy: "39.359", r: "6.901", style: { fill: "#dbdbdb" } }),
	    react.createElement("circle", { cx: "56.241", cy: "37.57", r: "2.827", style: { fill: "#fff" } }),
	    react.createElement("rect", {
	      x: "66.848",
	      y: "29.043",
	      width: "7",
	      height: "3.5",
	      rx: "1.75",
	      ry: "1.75",
	      style: { fill: "#ffc338" }
	    }),
	    react.createElement("circle", {
	      cx: "75.925",
	      cy: "52.566",
	      r: "5.858",
	      style: {
	        fill: "#fff",
	        stroke: "#ef5043",
	        strokeMiterlimit: 10,
	        strokeWidth: 2.7034974098205566 + "px"
	      }
	    }),
	    react.createElement("line", {
	      x1: "71.783",
	      y1: "56.708",
	      x2: "80.067",
	      y2: "48.424",
	      style: {
	        fill: "none",
	        stroke: "#ef5043",
	        strokeMiterlimit: 10,
	        strokeWidth: 2.7034974098205566 + "px"
	      }
	    })
	  );
	}

	var number$2 = propTypes.number,
	    object$2 = propTypes.object,
	    string$2 = propTypes.string,
	    oneOfType$2 = propTypes.oneOfType;


	ArrowIcon.propTypes = {
	  width: oneOfType$2([number$2, string$2]),
	  height: oneOfType$2([number$2, string$2]),
	  style: object$2
	};

	function ArrowIcon(_ref) {
	  var _ref$width = _ref.width,
	      width = _ref$width === undefined ? 32 : _ref$width,
	      _ref$height = _ref.height,
	      height = _ref$height === undefined ? 32 : _ref$height,
	      _ref$style = _ref.style,
	      style = _ref$style === undefined ? {} : _ref$style;

	  return react.createElement(
	    "svg",
	    { width: width, height: height, style: style, viewBox: "0 0 14 14" },
	    react.createElement(
	      "g",
	      null,
	      react.createElement("polygon", {
	        style: { fill: "currentColor" },
	        points: "4,10.9 8.8,6 8.8,8.5 10.3,8.5 10.3,3.5 5.3,3.5 5.3,5 7.8,5 2.9,9.8"
	      }),
	      react.createElement("path", {
	        style: { fill: "currentColor" },
	        d: "M13,0H1C0.4,0,0,0.4,0,1v12c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V1C14,0.4,13.6,0,13,0z M12.5,12.5h-11v-11h11V12.5z"
	      })
	    )
	  );
	}

	var string$3 = propTypes.string,
	    object$3 = propTypes.object;


	var blank = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

	var SpinnerImg = function (_React$Component) {
	  inherits(SpinnerImg, _React$Component);

	  function SpinnerImg() {
	    var _ref;

	    var _temp, _this, _ret;

	    classCallCheck(this, SpinnerImg);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = SpinnerImg.__proto__ || Object.getPrototypeOf(SpinnerImg)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      loaded: false
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  createClass(SpinnerImg, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.img = new Image();
	      this.img.onload = function () {
	        _this2.setState({ loaded: true });
	      };
	      this.img.src = this.props.src;
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.img.onload = function () {
	        return undefined;
	      };
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var loaded = this.state.loaded;
	      var _props = this.props,
	          src = _props.src,
	          style = _props.style,
	          rest = objectWithoutProperties(_props, ["src", "style"]);


	      return react.createElement(
	        "div",
	        { className: "p-r" },
	        react.createElement("img", _extends$1({}, rest, {
	          src: this.state.loaded ? src : blank,
	          style: _extends$1({}, style, {
	            transition: "opacity .3s, " + style.transition,
	            opacity: loaded ? 1 : 0
	          })
	        })),
	        loaded || react.createElement(
	          "div",
	          {
	            className: "p-a",
	            style: {
	              width: "40px",
	              height: "40px",
	              top: "50%",
	              left: "50%",
	              margin: "-20px 0 0 -20px"
	            }
	          },
	          react.createElement(Spinner, { size: "40px", color: "rgba(0,0,0,0.5)" })
	        )
	      );
	    }
	  }]);
	  return SpinnerImg;
	}(react.Component);

	SpinnerImg.propTypes = {
	  src: string$3.isRequired,
	  style: object$3
	};
	SpinnerImg.defaultProps = { style: {} };

	var instanceOf = propTypes.instanceOf,
	    func = propTypes.func,
	    node = propTypes.node;

	var ReactIntersectionObserver = function (_React$Component) {
	  inherits(ReactIntersectionObserver, _React$Component);

	  function ReactIntersectionObserver() {
	    var _ref;

	    var _temp, _this, _ret;

	    classCallCheck(this, ReactIntersectionObserver);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ReactIntersectionObserver.__proto__ || Object.getPrototypeOf(ReactIntersectionObserver)).call.apply(_ref, [this].concat(args))), _this), _this.handleObserverFired = function (observations) {
	      var lastObservation = observations[observations.length - 1];

	      _this.props.onIntersectionChange(lastObservation.isIntersecting);
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  createClass(ReactIntersectionObserver, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.observer = new IntersectionObserver(this.handleObserverFired, {
	        root: this.props.root,
	        rootMargin: "0px",
	        threshold: [0, 0.25]
	      });

	      this.observer.observe(this.element);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.observer.unobserve(this.element);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          _root = _props.root,
	          _onIntersectionChange = _props.onIntersectionChange,
	          children = _props.children,
	          rest = objectWithoutProperties(_props, ["root", "onIntersectionChange", "children"]);


	      return react.createElement(
	        "div",
	        _extends$1({ ref: function ref(element) {
	            return _this2.element = element;
	          } }, rest),
	        children
	      );
	    }
	  }]);
	  return ReactIntersectionObserver;
	}(react.Component);

	ReactIntersectionObserver.propTypes = {
	  root: instanceOf(HTMLElement),
	  onIntersectionChange: func.isRequired,
	  children: node.isRequired
	};

	/**
	 * Copyright 2016 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
	 *
	 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	 *
	 */

	(function(window, document) {


	// Exits early if all IntersectionObserver and IntersectionObserverEntry
	// features are natively supported.
	if ('IntersectionObserver' in window &&
	    'IntersectionObserverEntry' in window &&
	    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

	  // Minimal polyfill for Edge 15's lack of `isIntersecting`
	  // See: https://github.com/w3c/IntersectionObserver/issues/211
	  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
	    Object.defineProperty(window.IntersectionObserverEntry.prototype,
	      'isIntersecting', {
	      get: function () {
	        return this.intersectionRatio > 0;
	      }
	    });
	  }
	  return;
	}


	/**
	 * Creates the global IntersectionObserverEntry constructor.
	 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
	 * @param {Object} entry A dictionary of instance properties.
	 * @constructor
	 */
	function IntersectionObserverEntry(entry) {
	  this.time = entry.time;
	  this.target = entry.target;
	  this.rootBounds = entry.rootBounds;
	  this.boundingClientRect = entry.boundingClientRect;
	  this.intersectionRect = entry.intersectionRect || getEmptyRect();
	  this.isIntersecting = !!entry.intersectionRect;

	  // Calculates the intersection ratio.
	  var targetRect = this.boundingClientRect;
	  var targetArea = targetRect.width * targetRect.height;
	  var intersectionRect = this.intersectionRect;
	  var intersectionArea = intersectionRect.width * intersectionRect.height;

	  // Sets intersection ratio.
	  if (targetArea) {
	    this.intersectionRatio = intersectionArea / targetArea;
	  } else {
	    // If area is zero and is intersecting, sets to 1, otherwise to 0
	    this.intersectionRatio = this.isIntersecting ? 1 : 0;
	  }
	}


	/**
	 * Creates the global IntersectionObserver constructor.
	 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
	 * @param {Function} callback The function to be invoked after intersection
	 *     changes have queued. The function is not invoked if the queue has
	 *     been emptied by calling the `takeRecords` method.
	 * @param {Object=} opt_options Optional configuration options.
	 * @constructor
	 */
	function IntersectionObserver(callback, opt_options) {

	  var options = opt_options || {};

	  if (typeof callback != 'function') {
	    throw new Error('callback must be a function');
	  }

	  if (options.root && options.root.nodeType != 1) {
	    throw new Error('root must be an Element');
	  }

	  // Binds and throttles `this._checkForIntersections`.
	  this._checkForIntersections = throttle(
	      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

	  // Private properties.
	  this._callback = callback;
	  this._observationTargets = [];
	  this._queuedEntries = [];
	  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

	  // Public properties.
	  this.thresholds = this._initThresholds(options.threshold);
	  this.root = options.root || null;
	  this.rootMargin = this._rootMarginValues.map(function(margin) {
	    return margin.value + margin.unit;
	  }).join(' ');
	}


	/**
	 * The minimum interval within which the document will be checked for
	 * intersection changes.
	 */
	IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


	/**
	 * The frequency in which the polyfill polls for intersection changes.
	 * this can be updated on a per instance basis and must be set prior to
	 * calling `observe` on the first target.
	 */
	IntersectionObserver.prototype.POLL_INTERVAL = null;

	/**
	 * Use a mutation observer on the root element
	 * to detect intersection changes.
	 */
	IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


	/**
	 * Starts observing a target element for intersection changes based on
	 * the thresholds values.
	 * @param {Element} target The DOM element to observe.
	 */
	IntersectionObserver.prototype.observe = function(target) {
	  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
	    return item.element == target;
	  });

	  if (isTargetAlreadyObserved) {
	    return;
	  }

	  if (!(target && target.nodeType == 1)) {
	    throw new Error('target must be an Element');
	  }

	  this._registerInstance();
	  this._observationTargets.push({element: target, entry: null});
	  this._monitorIntersections();
	  this._checkForIntersections();
	};


	/**
	 * Stops observing a target element for intersection changes.
	 * @param {Element} target The DOM element to observe.
	 */
	IntersectionObserver.prototype.unobserve = function(target) {
	  this._observationTargets =
	      this._observationTargets.filter(function(item) {

	    return item.element != target;
	  });
	  if (!this._observationTargets.length) {
	    this._unmonitorIntersections();
	    this._unregisterInstance();
	  }
	};


	/**
	 * Stops observing all target elements for intersection changes.
	 */
	IntersectionObserver.prototype.disconnect = function() {
	  this._observationTargets = [];
	  this._unmonitorIntersections();
	  this._unregisterInstance();
	};


	/**
	 * Returns any queue entries that have not yet been reported to the
	 * callback and clears the queue. This can be used in conjunction with the
	 * callback to obtain the absolute most up-to-date intersection information.
	 * @return {Array} The currently queued entries.
	 */
	IntersectionObserver.prototype.takeRecords = function() {
	  var records = this._queuedEntries.slice();
	  this._queuedEntries = [];
	  return records;
	};


	/**
	 * Accepts the threshold value from the user configuration object and
	 * returns a sorted array of unique threshold values. If a value is not
	 * between 0 and 1 and error is thrown.
	 * @private
	 * @param {Array|number=} opt_threshold An optional threshold value or
	 *     a list of threshold values, defaulting to [0].
	 * @return {Array} A sorted list of unique and valid threshold values.
	 */
	IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
	  var threshold = opt_threshold || [0];
	  if (!Array.isArray(threshold)) threshold = [threshold];

	  return threshold.sort().filter(function(t, i, a) {
	    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
	      throw new Error('threshold must be a number between 0 and 1 inclusively');
	    }
	    return t !== a[i - 1];
	  });
	};


	/**
	 * Accepts the rootMargin value from the user configuration object
	 * and returns an array of the four margin values as an object containing
	 * the value and unit properties. If any of the values are not properly
	 * formatted or use a unit other than px or %, and error is thrown.
	 * @private
	 * @param {string=} opt_rootMargin An optional rootMargin value,
	 *     defaulting to '0px'.
	 * @return {Array<Object>} An array of margin objects with the keys
	 *     value and unit.
	 */
	IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
	  var marginString = opt_rootMargin || '0px';
	  var margins = marginString.split(/\s+/).map(function(margin) {
	    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
	    if (!parts) {
	      throw new Error('rootMargin must be specified in pixels or percent');
	    }
	    return {value: parseFloat(parts[1]), unit: parts[2]};
	  });

	  // Handles shorthand.
	  margins[1] = margins[1] || margins[0];
	  margins[2] = margins[2] || margins[0];
	  margins[3] = margins[3] || margins[1];

	  return margins;
	};


	/**
	 * Starts polling for intersection changes if the polling is not already
	 * happening, and if the page's visibilty state is visible.
	 * @private
	 */
	IntersectionObserver.prototype._monitorIntersections = function() {
	  if (!this._monitoringIntersections) {
	    this._monitoringIntersections = true;

	    // If a poll interval is set, use polling instead of listening to
	    // resize and scroll events or DOM mutations.
	    if (this.POLL_INTERVAL) {
	      this._monitoringInterval = setInterval(
	          this._checkForIntersections, this.POLL_INTERVAL);
	    }
	    else {
	      addEvent(window, 'resize', this._checkForIntersections, true);
	      addEvent(document, 'scroll', this._checkForIntersections, true);

	      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
	        this._domObserver = new MutationObserver(this._checkForIntersections);
	        this._domObserver.observe(document, {
	          attributes: true,
	          childList: true,
	          characterData: true,
	          subtree: true
	        });
	      }
	    }
	  }
	};


	/**
	 * Stops polling for intersection changes.
	 * @private
	 */
	IntersectionObserver.prototype._unmonitorIntersections = function() {
	  if (this._monitoringIntersections) {
	    this._monitoringIntersections = false;

	    clearInterval(this._monitoringInterval);
	    this._monitoringInterval = null;

	    removeEvent(window, 'resize', this._checkForIntersections, true);
	    removeEvent(document, 'scroll', this._checkForIntersections, true);

	    if (this._domObserver) {
	      this._domObserver.disconnect();
	      this._domObserver = null;
	    }
	  }
	};


	/**
	 * Scans each observation target for intersection changes and adds them
	 * to the internal entries queue. If new entries are found, it
	 * schedules the callback to be invoked.
	 * @private
	 */
	IntersectionObserver.prototype._checkForIntersections = function() {
	  var rootIsInDom = this._rootIsInDom();
	  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

	  this._observationTargets.forEach(function(item) {
	    var target = item.element;
	    var targetRect = getBoundingClientRect(target);
	    var rootContainsTarget = this._rootContainsTarget(target);
	    var oldEntry = item.entry;
	    var intersectionRect = rootIsInDom && rootContainsTarget &&
	        this._computeTargetAndRootIntersection(target, rootRect);

	    var newEntry = item.entry = new IntersectionObserverEntry({
	      time: now(),
	      target: target,
	      boundingClientRect: targetRect,
	      rootBounds: rootRect,
	      intersectionRect: intersectionRect
	    });

	    if (!oldEntry) {
	      this._queuedEntries.push(newEntry);
	    } else if (rootIsInDom && rootContainsTarget) {
	      // If the new entry intersection ratio has crossed any of the
	      // thresholds, add a new entry.
	      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
	        this._queuedEntries.push(newEntry);
	      }
	    } else {
	      // If the root is not in the DOM or target is not contained within
	      // root but the previous entry for this target had an intersection,
	      // add a new record indicating removal.
	      if (oldEntry && oldEntry.isIntersecting) {
	        this._queuedEntries.push(newEntry);
	      }
	    }
	  }, this);

	  if (this._queuedEntries.length) {
	    this._callback(this.takeRecords(), this);
	  }
	};


	/**
	 * Accepts a target and root rect computes the intersection between then
	 * following the algorithm in the spec.
	 * TODO(philipwalton): at this time clip-path is not considered.
	 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
	 * @param {Element} target The target DOM element
	 * @param {Object} rootRect The bounding rect of the root after being
	 *     expanded by the rootMargin value.
	 * @return {?Object} The final intersection rect object or undefined if no
	 *     intersection is found.
	 * @private
	 */
	IntersectionObserver.prototype._computeTargetAndRootIntersection =
	    function(target, rootRect) {

	  // If the element isn't displayed, an intersection can't happen.
	  if (window.getComputedStyle(target).display == 'none') return;

	  var targetRect = getBoundingClientRect(target);
	  var intersectionRect = targetRect;
	  var parent = getParentNode(target);
	  var atRoot = false;

	  while (!atRoot) {
	    var parentRect = null;
	    var parentComputedStyle = parent.nodeType == 1 ?
	        window.getComputedStyle(parent) : {};

	    // If the parent isn't displayed, an intersection can't happen.
	    if (parentComputedStyle.display == 'none') return;

	    if (parent == this.root || parent == document) {
	      atRoot = true;
	      parentRect = rootRect;
	    } else {
	      // If the element has a non-visible overflow, and it's not the <body>
	      // or <html> element, update the intersection rect.
	      // Note: <body> and <html> cannot be clipped to a rect that's not also
	      // the document rect, so no need to compute a new intersection.
	      if (parent != document.body &&
	          parent != document.documentElement &&
	          parentComputedStyle.overflow != 'visible') {
	        parentRect = getBoundingClientRect(parent);
	      }
	    }

	    // If either of the above conditionals set a new parentRect,
	    // calculate new intersection data.
	    if (parentRect) {
	      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

	      if (!intersectionRect) break;
	    }
	    parent = getParentNode(parent);
	  }
	  return intersectionRect;
	};


	/**
	 * Returns the root rect after being expanded by the rootMargin value.
	 * @return {Object} The expanded root rect.
	 * @private
	 */
	IntersectionObserver.prototype._getRootRect = function() {
	  var rootRect;
	  if (this.root) {
	    rootRect = getBoundingClientRect(this.root);
	  } else {
	    // Use <html>/<body> instead of window since scroll bars affect size.
	    var html = document.documentElement;
	    var body = document.body;
	    rootRect = {
	      top: 0,
	      left: 0,
	      right: html.clientWidth || body.clientWidth,
	      width: html.clientWidth || body.clientWidth,
	      bottom: html.clientHeight || body.clientHeight,
	      height: html.clientHeight || body.clientHeight
	    };
	  }
	  return this._expandRectByRootMargin(rootRect);
	};


	/**
	 * Accepts a rect and expands it by the rootMargin value.
	 * @param {Object} rect The rect object to expand.
	 * @return {Object} The expanded rect.
	 * @private
	 */
	IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
	  var margins = this._rootMarginValues.map(function(margin, i) {
	    return margin.unit == 'px' ? margin.value :
	        margin.value * (i % 2 ? rect.width : rect.height) / 100;
	  });
	  var newRect = {
	    top: rect.top - margins[0],
	    right: rect.right + margins[1],
	    bottom: rect.bottom + margins[2],
	    left: rect.left - margins[3]
	  };
	  newRect.width = newRect.right - newRect.left;
	  newRect.height = newRect.bottom - newRect.top;

	  return newRect;
	};


	/**
	 * Accepts an old and new entry and returns true if at least one of the
	 * threshold values has been crossed.
	 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
	 *    particular target element or null if no previous entry exists.
	 * @param {IntersectionObserverEntry} newEntry The current entry for a
	 *    particular target element.
	 * @return {boolean} Returns true if a any threshold has been crossed.
	 * @private
	 */
	IntersectionObserver.prototype._hasCrossedThreshold =
	    function(oldEntry, newEntry) {

	  // To make comparing easier, an entry that has a ratio of 0
	  // but does not actually intersect is given a value of -1
	  var oldRatio = oldEntry && oldEntry.isIntersecting ?
	      oldEntry.intersectionRatio || 0 : -1;
	  var newRatio = newEntry.isIntersecting ?
	      newEntry.intersectionRatio || 0 : -1;

	  // Ignore unchanged ratios
	  if (oldRatio === newRatio) return;

	  for (var i = 0; i < this.thresholds.length; i++) {
	    var threshold = this.thresholds[i];

	    // Return true if an entry matches a threshold or if the new ratio
	    // and the old ratio are on the opposite sides of a threshold.
	    if (threshold == oldRatio || threshold == newRatio ||
	        threshold < oldRatio !== threshold < newRatio) {
	      return true;
	    }
	  }
	};


	/**
	 * Returns whether or not the root element is an element and is in the DOM.
	 * @return {boolean} True if the root element is an element and is in the DOM.
	 * @private
	 */
	IntersectionObserver.prototype._rootIsInDom = function() {
	  return !this.root || containsDeep(document, this.root);
	};


	/**
	 * Returns whether or not the target element is a child of root.
	 * @param {Element} target The target element to check.
	 * @return {boolean} True if the target element is a child of root.
	 * @private
	 */
	IntersectionObserver.prototype._rootContainsTarget = function(target) {
	  return containsDeep(this.root || document, target);
	};


	/**
	 * Adds the instance to the global IntersectionObserver registry if it isn't
	 * already present.
	 * @private
	 */
	IntersectionObserver.prototype._registerInstance = function() {
	};


	/**
	 * Removes the instance from the global IntersectionObserver registry.
	 * @private
	 */
	IntersectionObserver.prototype._unregisterInstance = function() {
	};


	/**
	 * Returns the result of the performance.now() method or null in browsers
	 * that don't support the API.
	 * @return {number} The elapsed time since the page was requested.
	 */
	function now() {
	  return window.performance && performance.now && performance.now();
	}


	/**
	 * Throttles a function and delays its executiong, so it's only called at most
	 * once within a given time period.
	 * @param {Function} fn The function to throttle.
	 * @param {number} timeout The amount of time that must pass before the
	 *     function can be called again.
	 * @return {Function} The throttled function.
	 */
	function throttle(fn, timeout) {
	  var timer = null;
	  return function () {
	    if (!timer) {
	      timer = setTimeout(function() {
	        fn();
	        timer = null;
	      }, timeout);
	    }
	  };
	}


	/**
	 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
	 * @param {Node} node The DOM node to add the event handler to.
	 * @param {string} event The event name.
	 * @param {Function} fn The event handler to add.
	 * @param {boolean} opt_useCapture Optionally adds the even to the capture
	 *     phase. Note: this only works in modern browsers.
	 */
	function addEvent(node, event, fn, opt_useCapture) {
	  if (typeof node.addEventListener == 'function') {
	    node.addEventListener(event, fn, opt_useCapture || false);
	  }
	  else if (typeof node.attachEvent == 'function') {
	    node.attachEvent('on' + event, fn);
	  }
	}


	/**
	 * Removes a previously added event handler from a DOM node.
	 * @param {Node} node The DOM node to remove the event handler from.
	 * @param {string} event The event name.
	 * @param {Function} fn The event handler to remove.
	 * @param {boolean} opt_useCapture If the event handler was added with this
	 *     flag set to true, it should be set to true here in order to remove it.
	 */
	function removeEvent(node, event, fn, opt_useCapture) {
	  if (typeof node.removeEventListener == 'function') {
	    node.removeEventListener(event, fn, opt_useCapture || false);
	  }
	  else if (typeof node.detatchEvent == 'function') {
	    node.detatchEvent('on' + event, fn);
	  }
	}


	/**
	 * Returns the intersection between two rect objects.
	 * @param {Object} rect1 The first rect.
	 * @param {Object} rect2 The second rect.
	 * @return {?Object} The intersection rect or undefined if no intersection
	 *     is found.
	 */
	function computeRectIntersection(rect1, rect2) {
	  var top = Math.max(rect1.top, rect2.top);
	  var bottom = Math.min(rect1.bottom, rect2.bottom);
	  var left = Math.max(rect1.left, rect2.left);
	  var right = Math.min(rect1.right, rect2.right);
	  var width = right - left;
	  var height = bottom - top;

	  return (width >= 0 && height >= 0) && {
	    top: top,
	    bottom: bottom,
	    left: left,
	    right: right,
	    width: width,
	    height: height
	  };
	}


	/**
	 * Shims the native getBoundingClientRect for compatibility with older IE.
	 * @param {Element} el The element whose bounding rect to get.
	 * @return {Object} The (possibly shimmed) rect of the element.
	 */
	function getBoundingClientRect(el) {
	  var rect;

	  try {
	    rect = el.getBoundingClientRect();
	  } catch (err) {
	    // Ignore Windows 7 IE11 "Unspecified error"
	    // https://github.com/w3c/IntersectionObserver/pull/205
	  }

	  if (!rect) return getEmptyRect();

	  // Older IE
	  if (!(rect.width && rect.height)) {
	    rect = {
	      top: rect.top,
	      right: rect.right,
	      bottom: rect.bottom,
	      left: rect.left,
	      width: rect.right - rect.left,
	      height: rect.bottom - rect.top
	    };
	  }
	  return rect;
	}


	/**
	 * Returns an empty rect object. An empty rect is returned when an element
	 * is not in the DOM.
	 * @return {Object} The empty rect.
	 */
	function getEmptyRect() {
	  return {
	    top: 0,
	    bottom: 0,
	    left: 0,
	    right: 0,
	    width: 0,
	    height: 0
	  };
	}

	/**
	 * Checks to see if a parent element contains a child elemnt (including inside
	 * shadow DOM).
	 * @param {Node} parent The parent element.
	 * @param {Node} child The child element.
	 * @return {boolean} True if the parent node contains the child node.
	 */
	function containsDeep(parent, child) {
	  var node = child;
	  while (node) {
	    if (node == parent) return true;

	    node = getParentNode(node);
	  }
	  return false;
	}


	/**
	 * Gets the parent node of an element or its host element if the parent node
	 * is a shadow root.
	 * @param {Node} node The node whose parent to get.
	 * @return {Node|null} The parent node or null if no parent exists.
	 */
	function getParentNode(node) {
	  var parent = node.parentNode;

	  if (parent && parent.nodeType == 11 && parent.host) {
	    // If the parent is a shadow root, return the host element.
	    return parent.host;
	  }
	  return parent;
	}


	// Exposes the constructors globally.
	window.IntersectionObserver = IntersectionObserver;
	window.IntersectionObserverEntry = IntersectionObserverEntry;

	}(window, document));

	function debounce(wait, func) {
	  var timeout = null;

	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    clearTimeout(timeout);

	    timeout = setTimeout(function () {
	      return func.apply(undefined, args);
	    }, wait);
	  };
	}

	function throttle(wait, func) {
	  var timeout = null;
	  var latestArgs = null;

	  return function () {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    latestArgs = args;
	    if (timeout) return; // do nothing, we're waiting for the timeout to fire

	    func.apply(undefined, toConsumableArray(latestArgs));

	    timeout = setTimeout(function () {
	      clearTimeout(timeout);
	      timeout = null;
	      func.apply(undefined, toConsumableArray(latestArgs));
	    }, wait);
	  };
	}

	function withDefaultProps(Component, defaultProps) {
	  var WrappedComponent = function WrappedComponent(props) {
	    return react.createElement(Component, _extends$1({}, defaultProps, props));
	  };

	  WrappedComponent.displayName = "withDefaultProps(" + Component.name + ")";

	  return WrappedComponent;
	}

	var shape = propTypes.shape,
	    string$4 = propTypes.string,
	    func$1 = propTypes.func;

	var BlobUploader = function (_React$Component) {
	  inherits(BlobUploader, _React$Component);

	  function BlobUploader() {
	    classCallCheck(this, BlobUploader);
	    return possibleConstructorReturn(this, (BlobUploader.__proto__ || Object.getPrototypeOf(BlobUploader)).apply(this, arguments));
	  }

	  createClass(BlobUploader, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      var prevPhoto = this.props.unsplashPhoto;
	      var nextPhoto = nextProps.unsplashPhoto;
	      if ((prevPhoto && prevPhoto.id) === (nextPhoto && nextPhoto.id)) return;

	      nextProps.downloadPhoto(nextPhoto).then(function (r) {
	        return r.blob();
	      }).then(this.props.onBlobLoaded).then(this.props.onFinishedUploading);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return null;
	    }
	  }]);
	  return BlobUploader;
	}(react.Component);

	BlobUploader.propTypes = {
	  unsplashPhoto: shape({
	    id: string$4.isRequired,
	    links: shape({
	      download: string$4.isRequired,
	      download_location: string$4.isRequired
	    }).isRequired
	  }),
	  downloadPhoto: func$1.isRequired,
	  onFinishedUploading: func$1.isRequired,
	  onBlobLoaded: func$1.isRequired
	};

	var string$5 = propTypes.string,
	    func$2 = propTypes.func,
	    shape$1 = propTypes.shape;

	var DataTransferUploader = function (_React$Component) {
	  inherits(DataTransferUploader, _React$Component);

	  function DataTransferUploader() {
	    var _ref;

	    var _temp, _this, _ret;

	    classCallCheck(this, DataTransferUploader);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DataTransferUploader.__proto__ || Object.getPrototypeOf(DataTransferUploader)).call.apply(_ref, [this].concat(args))), _this), _this.state = { blob: null }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  createClass(DataTransferUploader, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;

	      var prevPhoto = this.props.unsplashPhoto;
	      var nextPhoto = nextProps.unsplashPhoto;
	      if ((prevPhoto && prevPhoto.id) === (nextPhoto && nextPhoto.id)) return;

	      nextProps.downloadPhoto(nextPhoto).then(function (r) {
	        return r.blob();
	      }).then(function (blob) {
	        return _this2.setState({ blob: blob });
	      });
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate() {
	      if (this.input && this.state.blob) {
	        var dt = new DataTransfer();
	        dt.items.add(new File([this.state.blob], "image.jpg"));
	        this.input.files = dt.files;
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this3 = this;

	      var _props = this.props,
	          unsplashPhoto = _props.unsplashPhoto,
	          _downloadPhoto = _props.downloadPhoto,
	          restProps = objectWithoutProperties(_props, ["unsplashPhoto", "downloadPhoto"]);
	      var blob = this.state.blob;


	      if (!(unsplashPhoto && blob)) return null;

	      return react.createElement("input", _extends$1({ type: "file", name: "file", ref: function ref(input) {
	          return _this3.input = input;
	        } }, restProps));
	    }
	  }]);
	  return DataTransferUploader;
	}(react.Component);

	DataTransferUploader.propTypes = {
	  unsplashPhoto: shape$1({
	    id: string$5.isRequired,
	    links: shape$1({
	      download: string$5.isRequired,
	      download_location: string$5.isRequired
	    }).isRequired
	  }),
	  downloadPhoto: func$2.isRequired
	};

	var shape$2 = propTypes.shape,
	    string$6 = propTypes.string,
	    func$3 = propTypes.func;

	var Base64Uploader = function (_React$Component) {
	  inherits(Base64Uploader, _React$Component);

	  function Base64Uploader() {
	    var _ref;

	    var _temp, _this, _ret;

	    classCallCheck(this, Base64Uploader);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Base64Uploader.__proto__ || Object.getPrototypeOf(Base64Uploader)).call.apply(_ref, [this].concat(args))), _this), _this.state = { blob: null }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  createClass(Base64Uploader, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;

	      var prevPhoto = this.props.unsplashPhoto;
	      var nextPhoto = nextProps.unsplashPhoto;
	      if ((prevPhoto && prevPhoto.id) === (nextPhoto && nextPhoto.id)) return;

	      nextProps.downloadPhoto(nextPhoto).then(function (r) {
	        return r.blob();
	      }).then(function (blob) {
	        return _this2.setState({ blob: blob });
	      });
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate() {
	      var _this3 = this;

	      if (this.input && this.state.blob) {
	        var reader = new FileReader();
	        reader.readAsDataURL(this.state.blob);
	        reader.onloadend = function () {
	          _this3.input.value = reader.result;
	          _this3.props.onFinishedUploading();
	        };
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this4 = this;

	      var _props = this.props,
	          unsplashPhoto = _props.unsplashPhoto,
	          _downloadPhoto = _props.downloadPhoto,
	          _onFinishedUploading = _props.onFinishedUploading,
	          restProps = objectWithoutProperties(_props, ["unsplashPhoto", "downloadPhoto", "onFinishedUploading"]);
	      var blob = this.state.blob;


	      if (!(unsplashPhoto && blob)) return null;

	      return react.createElement("input", _extends$1({ type: "hidden", name: "file", ref: function ref(input) {
	          return _this4.input = input;
	        } }, restProps));
	    }
	  }]);
	  return Base64Uploader;
	}(react.Component);

	Base64Uploader.propTypes = {
	  unsplashPhoto: shape$2({
	    id: string$6.isRequired,
	    links: shape$2({
	      download: string$6.isRequired,
	      download_location: string$6.isRequired
	    }).isRequired
	  }),
	  downloadPhoto: func$3.isRequired,
	  onFinishedUploading: func$3.isRequired
	};

	var shape$3 = propTypes.shape,
	    string$7 = propTypes.string,
	    func$4 = propTypes.func;

	var ExternalLocationUploader = function (_React$Component) {
	  inherits(ExternalLocationUploader, _React$Component);

	  function ExternalLocationUploader() {
	    var _ref;

	    var _temp, _this, _ret;

	    classCallCheck(this, ExternalLocationUploader);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ExternalLocationUploader.__proto__ || Object.getPrototypeOf(ExternalLocationUploader)).call.apply(_ref, [this].concat(args))), _this), _this.handleBlobLoaded = function (blob) {
	      var formData = new FormData();
	      formData.append(_this.props.name, blob, "image.jpg");
	      return fetch(_this.props.uploadUrl, {
	        method: "POST",
	        body: formData,
	        credentials: "include"
	      }).then(function (r) {
	        var response = r.clone();
	        return r.text().then(function () {
	          return response;
	        });
	      });
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  createClass(ExternalLocationUploader, [{
	    key: "render",
	    value: function render() {
	      return react.createElement(BlobUploader, _extends$1({}, this.props, { onBlobLoaded: this.handleBlobLoaded }));
	    }
	  }]);
	  return ExternalLocationUploader;
	}(react.Component);

	ExternalLocationUploader.propTypes = {
	  unsplashPhoto: shape$3({
	    id: string$7.isRequired,
	    links: shape$3({
	      download: string$7.isRequired,
	      download_location: string$7.isRequired
	    }).isRequired
	  }),
	  downloadPhoto: func$4.isRequired,
	  onFinishedUploading: func$4.isRequired,
	  uploadUrl: string$7.isRequired,
	  name: string$7.isRequired
	};

	var shape$4 = propTypes.shape,
	    string$8 = propTypes.string,
	    func$5 = propTypes.func;

	var InsertIntoApplicationUploader = function (_React$Component) {
	  inherits(InsertIntoApplicationUploader, _React$Component);

	  function InsertIntoApplicationUploader() {
	    classCallCheck(this, InsertIntoApplicationUploader);
	    return possibleConstructorReturn(this, (InsertIntoApplicationUploader.__proto__ || Object.getPrototypeOf(InsertIntoApplicationUploader)).apply(this, arguments));
	  }

	  createClass(InsertIntoApplicationUploader, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      var prevPhoto = this.props.unsplashPhoto;
	      var nextPhoto = nextProps.unsplashPhoto;
	      if ((prevPhoto && prevPhoto.id) === (nextPhoto && nextPhoto.id)) return;

	      nextProps.downloadPhoto(nextPhoto).then(function (r) {
	        return r.url;
	      }).then(this.props.onFinishedUploading);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return null;
	    }
	  }]);
	  return InsertIntoApplicationUploader;
	}(react.Component);

	InsertIntoApplicationUploader.propTypes = {
	  unsplashPhoto: shape$4({
	    id: string$8.isRequired,
	    links: shape$4({
	      download: string$8.isRequired,
	      download_location: string$8.isRequired
	    }).isRequired
	  }),
	  downloadPhoto: func$5.isRequired,
	  onFinishedUploading: func$5.isRequired
	};

	var string$9 = propTypes.string,
	    func$6 = propTypes.func,
	    number$3 = propTypes.number,
	    bool = propTypes.bool,
	    object$4 = propTypes.object,
	    shape$5 = propTypes.shape;

	function noop() {}

	var inputNoAppearanceStyle = {
	  border: "none",
	  padding: 0,
	  margin: 0,
	  backgroundColor: "transparent",
	  boxShadow: "none",
	  fontSize: "1em",
	  outline: "none"
	};

	var inputGray = "#AAA";
	var inputDarkGray = "#555";
	var borderRadius = 3;

	var UnsplashPicker = function (_React$Component) {
	  inherits(UnsplashPicker, _React$Component);

	  function UnsplashPicker(props) {
	    classCallCheck(this, UnsplashPicker);

	    var _this = possibleConstructorReturn(this, (UnsplashPicker.__proto__ || Object.getPrototypeOf(UnsplashPicker)).call(this, props));

	    _this.recalculateSearchResultsWidth = throttle(50, function () {
	      _this.setState({ searchResultsWidth: _this.searchResults.getBoundingClientRect().width });
	    });

	    _this.loadDefault = function () {
	      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	          _ref$append = _ref.append,
	          append = _ref$append === undefined ? false : _ref$append;

	      var page = append ? _this.state.page : 1;
	      _this.state.unsplash.listPhotos(page, _this.resultsPerPage).then(function (photos) {
	        return _this.setState(function (prevState) {
	          return {
	            photos: append ? prevState.photos.concat(photos) : photos,
	            isLoadingSearch: false,
	            totalPhotosCount: null,
	            error: null,
	            page: page
	          };
	        }, append ? noop : _this.didFinishLoadingNewSearchResults);
	      }).catch(function (e) {
	        return _this.setState({ error: e.message, isLoadingSearch: false });
	      });
	    };

	    _this.utmLink = function (url) {
	      var applicationName = _this.props.applicationName;

	      var utmParams = "utm_source=" + applicationName + "&utm_medium=referral";
	      return url + "?" + utmParams;
	    };

	    _this.doImmediateSearch = function () {
	      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	          append = _ref2.append;

	      var _this$state = _this.state,
	          search = _this$state.search,
	          unsplash = _this$state.unsplash;


	      if (_this.shouldShowDefault) {
	        return _this.loadDefault({ append: append });
	      }

	      var page = append ? _this.state.page : 1;

	      return unsplash.searchPhotos(search, _this.state.page, _this.resultsPerPage).then(function (response) {
	        return _this.setState(function (prevState) {
	          return {
	            totalPhotosCount: response.total,
	            photos: append ? prevState.photos.concat(response.results) : response.results,
	            isLoadingSearch: false,
	            error: null,
	            page: page
	          };
	        }, append ? noop : _this.didFinishLoadingNewSearchResults);
	      }).catch(function (e) {
	        return _this.setState({ error: e.message, isLoadingSearch: false });
	      });
	    };

	    _this.doDebouncedSearch = debounce(400, _this.doImmediateSearch);

	    _this.doSearch = function () {
	      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	          _ref3$append = _ref3.append,
	          append = _ref3$append === undefined ? false : _ref3$append;

	      _this.setState({ isLoadingSearch: true });

	      if (append) {
	        _this.doImmediateSearch({ append: append });
	      } else {
	        _this.doDebouncedSearch();
	      }
	    };

	    _this.downloadPhoto = function (photo) {
	      _this.setState({ loadingPhoto: photo });
	      var preferredSize = _this.props.preferredSize;

	      var download = _this.state.unsplash.downloadPhoto(photo);

	      var downloadPromise = preferredSize ? _this.state.unsplash.getPhoto(photo.id, preferredSize).then(function (r) {
	        return r.urls.raw + "&w=" + preferredSize.width + "&h=" + preferredSize.height;
	      }) : download.then(function (r) {
	        return r.url;
	      });

	      return downloadPromise.then(fetch).catch(function (e) {
	        return _this.setState({ error: e.message, isLoadingSearch: false });
	      });
	    };

	    _this.handleSearchChange = function (e) {
	      _this.setState({ search: e.target.value });
	    };

	    _this.handleSearchWrapperClick = function () {
	      _this.searchInput && _this.searchInput.focus();
	    };

	    _this.handlePhotoClick = function (photo) {
	      _this.setState({ selectedPhoto: photo });
	    };

	    _this.handleFinishedUploading = function (response) {
	      _this.setState({ loadingPhoto: null });
	      _this.props.onFinishedUploading(response);
	    };

	    _this.handleSearchResultsBottomIntersectionChange = function (isAtBottomOfSearchResults) {
	      _this.setState({ isAtBottomOfSearchResults: isAtBottomOfSearchResults });

	      if (isAtBottomOfSearchResults && !_this.state.isLoadingSearch && _this.hasMoreResults) {
	        _this.setState(function (_ref4) {
	          var page = _ref4.page;
	          return { page: page + 1 };
	        });
	      }
	    };

	    _this.state = {
	      unsplash: null,
	      photos: [],
	      totalPhotosCount: null,
	      isLoadingSearch: true,
	      selectedPhoto: null,
	      loadingPhoto: null,
	      search: props.defaultSearch,
	      searchResultsWidth: null,
	      isAtBottomOfSearchResults: true,
	      page: 1,
	      error: null
	    };
	    return _this;
	  }

	  createClass(UnsplashPicker, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var unsplash = new UnsplashWrapper({
	        accessKey: this.props.accessKey,
	        __debug_chaosMonkey: this.props.__debug_chaosMonkey
	      });

	      this.setState({ unsplash: unsplash });
	      this.doSearch();

	      this.recalculateSearchResultsWidth();

	      window.addEventListener("resize", this.recalculateSearchResultsWidth);
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(_prevProps, prevState) {
	      var _state = this.state,
	          search = _state.search,
	          page = _state.page;


	      if (search !== prevState.search) {
	        this.doSearch();
	      }

	      if (search === prevState.search && page !== prevState.page) {
	        this.doSearch({ append: true });
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      window.removeEventListener("resize", this.recalculateSearchResultsWidth);
	    }
	  }, {
	    key: "didFinishLoadingNewSearchResults",
	    value: function didFinishLoadingNewSearchResults() {
	      this.searchResults.scrollTop = 0;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          Uploader = _props.Uploader,
	          searchResultColumns = _props.columns,
	          photoRatio = _props.photoRatio,
	          highlightColor = _props.highlightColor;
	      var _state2 = this.state,
	          photos = _state2.photos,
	          search = _state2.search,
	          selectedPhoto = _state2.selectedPhoto,
	          loadingPhoto = _state2.loadingPhoto,
	          totalPhotosCount = _state2.totalPhotosCount,
	          isLoadingSearch = _state2.isLoadingSearch,
	          isAtBottomOfSearchResults = _state2.isAtBottomOfSearchResults,
	          searchResultsWidth = _state2.searchResultsWidth,
	          error = _state2.error;


	      var searchResultWidth = searchResultsWidth ? Math.floor(searchResultsWidth / searchResultColumns) : 100;
	      var searchResultHeight = searchResultWidth / photoRatio;

	      return react.createElement(
	        ReactIntersectionObserver,
	        {
	          onIntersectionChange: this.recalculateSearchResultsWidth,
	          style: { flexDirection: "column" },
	          className: "unsplash-react d-f h-f p-0"
	        },
	        react.createElement(CSSStyles, null),
	        react.createElement(
	          "span",
	          {
	            style: {
	              color: inputGray,
	              fontSize: 12,
	              textAlign: "center",
	              display: "block",
	              marginBottom: "1em"
	            }
	          },
	          "Photos provided by",
	          " ",
	          react.createElement(
	            "a",
	            {
	              href: this.utmLink("https://unsplash.com/"),
	              target: "_blank",
	              style: { color: inputGray }
	            },
	            "Unsplash"
	          )
	        ),
	        react.createElement(
	          "div",
	          {
	            className: "d-f",
	            style: {
	              padding: ".5em",
	              border: "1px solid #DFDFDF",
	              cursor: "text",
	              borderRadius: "3px",
	              fontSize: 13
	            },
	            onClick: this.handleSearchWrapperClick
	          },
	          react.createElement(SearchInputIcon, {
	            isLoading: isLoadingSearch,
	            hasError: !!error,
	            style: { marginRight: ".5em" }
	          }),
	          react.createElement("input", {
	            type: "text",
	            value: search,
	            placeholder: "Search Unsplash photos by topics or colors",
	            onChange: this.handleSearchChange,
	            style: inputNoAppearanceStyle,
	            className: "f-1",
	            ref: function ref(input) {
	              return _this2.searchInput = input;
	            }
	          }),
	          totalPhotosCount !== null && react.createElement(
	            "span",
	            { style: { color: inputDarkGray } },
	            totalPhotosCount,
	            " results"
	          )
	        ),
	        react.createElement(
	          "div",
	          { className: "p-r f-1 border-radius", style: { marginTop: ".5em", overflow: "hidden" } },
	          react.createElement(
	            "div",
	            {
	              className: "h-f",
	              style: { overflowY: "scroll" },
	              ref: function ref(element) {
	                return _this2.searchResults = element;
	              }
	            },
	            error ? react.createElement(
	              "div",
	              {
	                style: { textAlign: "center", marginTop: "3em", padding: "0 1em", fontSize: 13 }
	              },
	              react.createElement(ErrorImage, null),
	              react.createElement(
	                "p",
	                null,
	                "We're having trouble communicating with Unsplash right now. Please try again."
	              ),
	              react.createElement(
	                "p",
	                { style: { color: inputGray } },
	                error
	              )
	            ) : [photos.map(function (photo, index) {
	              return react.createElement(Photo, {
	                key: photo.id,
	                photo: photo,
	                index: index,
	                width: searchResultWidth,
	                height: searchResultHeight,
	                columns: searchResultColumns,
	                loadingPhoto: loadingPhoto,
	                selectedPhoto: selectedPhoto,
	                onPhotoClick: _this2.handlePhotoClick,
	                highlightColor: highlightColor,
	                utmLink: _this2.utmLink
	              });
	            }), this.searchResults && react.createElement(
	              ReactIntersectionObserver,
	              {
	                key: "intersectionObserver",
	                root: this.searchResults,
	                onIntersectionChange: this.handleSearchResultsBottomIntersectionChange,
	                style: {
	                  width: "100%",
	                  textAlign: "center",
	                  marginTop: this.hasMoreResults ? "2em" : ".5em",
	                  height: this.hasMoreResults ? 50 : 1
	                }
	              },
	              this.hasMoreResults && react.createElement(Spinner, { size: "40px" })
	            )]
	          ),
	          react.createElement("div", {
	            className: "p-a",
	            style: {
	              bottom: -1,
	              left: 0,
	              right: 0,
	              height: 1,
	              boxShadow: isAtBottomOfSearchResults && !this.hasMoreResults || error ? "0 0 0 0 transparent" : "0 0 10px 5px rgba(0, 0, 0, .2)",
	              transition: "box-shadow .3s",
	              zIndex: 2
	            }
	          })
	        ),
	        react.createElement(Uploader, {
	          unsplashPhoto: selectedPhoto,
	          downloadPhoto: this.downloadPhoto,
	          onFinishedUploading: this.handleFinishedUploading
	        })
	      );
	    }
	  }, {
	    key: "shouldShowDefault",
	    get: function get() {
	      return this.state.search === "";
	    }
	  }, {
	    key: "resultsPerPage",
	    get: function get() {
	      return this.props.columns * 4;
	    }
	  }, {
	    key: "totalResults",
	    get: function get() {
	      return this.shouldShowDefault ? Infinity : this.state.totalPhotosCount;
	    }
	  }, {
	    key: "hasMoreResults",
	    get: function get() {
	      return this.totalResults > this.resultsPerPage * this.state.page;
	    }
	  }]);
	  return UnsplashPicker;
	}(react.Component);

	UnsplashPicker.propTypes = {
	  accessKey: string$9.isRequired,
	  applicationName: string$9.isRequired,
	  columns: number$3,
	  defaultSearch: string$9,
	  highlightColor: string$9,
	  onFinishedUploading: func$6,
	  photoRatio: number$3,
	  preferredSize: shape$5({
	    width: number$3.isRequired,
	    height: number$3.isRequired
	  }),
	  Uploader: func$6,
	  __debug_chaosMonkey: bool
	};
	UnsplashPicker.defaultProps = {
	  columns: 3,
	  defaultSearch: "",
	  highlightColor: "#00adf0",
	  onFinishedUploading: noop,
	  photoRatio: 1.5,
	  preferredSize: null,
	  Uploader: Base64Uploader,
	  __debug_chaosMonkey: false
	};

	function CSSStyles() {
	  return react.createElement("style", {
	    dangerouslySetInnerHTML: {
	      __html: "\n        .unsplash-react, .unsplash-react * { box-sizing: border-box }\n        .unsplash-react input::placeholder {\n          color: " + inputGray + ";\n          opacity: 1;\n        }\n        @keyframes unsplash-react-fadein {\n          from { opacity: 0; }\n          to   { opacity: 1; }\n        }\n\n        .unsplash-react .p-r { position: relative; }\n        .unsplash-react .p-a { position: absolute; }\n\n        .unsplash-react.p-0,\n        .unsplash-react .p-0 { padding: 0; }\n\n        .unsplash-react .f-1 { flex: 1; }\n\n        .unsplash-react.d-f,\n        .unsplash-react .d-f { display: flex; }\n\n        .unsplash-react.h-f,\n        .unsplash-react .h-f { height: 100%; }\n\n        .unsplash-react.border-radius,\n        .unsplash-react .border-radius { border-radius: " + borderRadius + "px; }\n      "
	    }
	  });
	}

	SearchInputIcon.propTypes = { isLoading: bool.isRequired, hasError: bool.isRequired, style: object$4 };
	function SearchInputIcon(_ref5) {
	  var isLoading = _ref5.isLoading,
	      hasError = _ref5.hasError,
	      style = _ref5.style,
	      rest = objectWithoutProperties(_ref5, ["isLoading", "hasError", "style"]);

	  var searchColor = hasError ? "#D62828" : inputGray;
	  var mergedStyle = _extends$1({ top: "0.15em", marginRight: ".5em" }, style);
	  return react.createElement(
	    "div",
	    _extends$1({ className: "p-r", style: mergedStyle }, rest),
	    isLoading ? react.createElement(Spinner, { size: "1em", color: searchColor }) : react.createElement(SearchIcon, { width: "1em", height: "1em", style: { color: searchColor } })
	  );
	}

	AbsolutelyCentered.propTypes = { width: number$3.isRequired, height: number$3.isRequired };
	function AbsolutelyCentered(_ref6) {
	  var width = _ref6.width,
	      height = _ref6.height,
	      rest = objectWithoutProperties(_ref6, ["width", "height"]);

	  return react.createElement("div", _extends$1({
	    className: "p-a",
	    style: {
	      width: width,
	      height: height,
	      top: "50%",
	      left: "50%",
	      margin: "-" + height / 2 + "px 0 0 -" + width / 2 + "px"
	    }
	  }, rest));
	}

	OverflowFadeLink.propTypes = {
	  href: string$9.isRequired,
	  style: object$4.isRequired,
	  wrapperClassName: string$9.isRequired
	};
	function OverflowFadeLink(_ref7) {
	  var wrapperClassName = _ref7.wrapperClassName,
	      _ref7$style = _ref7.style,
	      style = _ref7$style === undefined ? {} : _ref7$style,
	      rest = objectWithoutProperties(_ref7, ["wrapperClassName", "style"]);

	  return react.createElement(
	    "div",
	    {
	      className: "p-r " + wrapperClassName,
	      style: {
	        display: "block",
	        overflow: "hidden",
	        maxWidth: "100%"
	      }
	    },
	    react.createElement("a", _extends$1({
	      style: _extends$1({}, style, {
	        display: "block",
	        whiteSpace: "nowrap",
	        maxWidth: "100%",
	        textDecoration: "underline",
	        fontSize: 13
	      })
	    }, rest)),
	    react.createElement("div", {
	      className: "p-a",
	      style: {
	        right: -2,
	        top: 0,
	        bottom: 0,
	        width: 1,
	        boxShadow: "0 0 10px 10px white",
	        zIndex: 1
	      }
	    })
	  );
	}

	Photo.propTypes = {
	  photo: shape$5({
	    id: string$9.isRequired,
	    urls: shape$5({
	      small: string$9.isRequired
	    }).isRequired,
	    user: shape$5({ links: shape$5({ html: string$9.isRequired }).isRequired }).isRequired
	  }).isRequired,
	  width: number$3.isRequired,
	  height: number$3.isRequired,
	  index: number$3.isRequired,
	  columns: number$3.isRequired,
	  loadingPhoto: shape$5({ id: string$9.isRequired }),
	  selectedPhoto: shape$5({ id: string$9.isRequired }),
	  onPhotoClick: func$6.isRequired,
	  highlightColor: string$9.isRequired,
	  utmLink: func$6.isRequired
	};
	function Photo(_ref8) {
	  var photo = _ref8.photo,
	      width = _ref8.width,
	      height = _ref8.height,
	      index = _ref8.index,
	      columns = _ref8.columns,
	      loadingPhoto = _ref8.loadingPhoto,
	      selectedPhoto = _ref8.selectedPhoto,
	      onPhotoClick = _ref8.onPhotoClick,
	      highlightColor = _ref8.highlightColor,
	      utmLink = _ref8.utmLink;

	  var isFarLeft = index % columns === 0;
	  var loadingPhotoId = loadingPhoto && loadingPhoto.id;
	  var selectedPhotoId = selectedPhoto && selectedPhoto.id;
	  var isSelectedAndLoaded = loadingPhotoId === null && selectedPhotoId === photo.id;
	  var borderWidth = 3;
	  var onClick = function onClick() {
	    return onPhotoClick(photo);
	  };

	  return react.createElement(
	    "div",
	    {
	      style: {
	        display: "inline-block",
	        width: width,
	        marginTop: 0,
	        marginBottom: 12,
	        marginLeft: 0,
	        marginRight: 0,
	        paddingTop: ".5em",
	        paddingLeft: isFarLeft || ".5em"
	      },
	      className: "p-0"
	    },
	    react.createElement(
	      "div",
	      {
	        className: "p-r border-radius",
	        style: {
	          overflow: "hidden",
	          transition: "box-shadow .3s",
	          cursor: "pointer",
	          width: "100%"
	        },
	        onClick: onClick
	      },
	      react.createElement(SpinnerImg, {
	        src: photo.urls.small,
	        style: {
	          display: "block",
	          width: "100%",
	          height: height,
	          objectFit: "cover",
	          borderWidth: borderWidth,
	          borderStyle: "solid",
	          borderColor: isSelectedAndLoaded ? highlightColor : "transparent",
	          borderRadius: borderRadius + borderWidth,
	          transition: "border .3s"
	        }
	      }),
	      loadingPhotoId === photo.id && react.createElement(
	        "div",
	        {
	          className: "p-a",
	          style: {
	            left: 0,
	            top: 0,
	            right: 0,
	            bottom: 0,
	            backgroundColor: "rgba(255,255,255,0.5)",
	            animation: "unsplash-react-fadein .1s"
	          }
	        },
	        react.createElement(
	          AbsolutelyCentered,
	          { height: 40, width: 40 },
	          react.createElement(Spinner, { size: "40px", color: "rgba(255,255,255,0.8)" })
	        )
	      )
	    ),
	    react.createElement(
	      "div",
	      { className: "d-f", style: { padding: ".15em " + borderWidth + "px 0 " + borderWidth + "px" } },
	      react.createElement(
	        OverflowFadeLink,
	        {
	          href: utmLink(photo.user.links.html),
	          target: "_blank",
	          style: { color: inputGray },
	          wrapperClassName: "f-1"
	        },
	        photo.user.name
	      ),
	      react.createElement(
	        "a",
	        {
	          href: utmLink(photo.links.html),
	          target: "_blank",
	          style: {
	            color: inputGray,
	            textDecoration: "none",
	            lineHeight: "10px",
	            marginLeft: "1em",
	            padding: 2,
	            borderRadius: borderRadius - 1
	          }
	        },
	        react.createElement(ArrowIcon, { width: 14, height: 14 })
	      )
	    )
	  );
	}

	exports.default = UnsplashPicker;
	exports.Base64Uploader = Base64Uploader;
	exports.ExternalLocationUploader = ExternalLocationUploader;
	exports.DataTransferUploader = DataTransferUploader;
	exports.BlobUploader = BlobUploader;
	exports.InsertIntoApplicationUploader = InsertIntoApplicationUploader;
	exports.withDefaultProps = withDefaultProps;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
