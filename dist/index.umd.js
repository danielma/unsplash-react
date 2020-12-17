(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.UnsplashReact = {})));
}(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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

	var constants = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var API_URL = exports.API_URL = "https://api.unsplash.com";
	var API_VERSION = exports.API_VERSION = "v1";
	var OAUTH_AUTHORIZE_URL = exports.OAUTH_AUTHORIZE_URL = "https://unsplash.com/oauth/authorize";
	var OAUTH_TOKEN_URL = exports.OAUTH_TOKEN_URL = "https://unsplash.com/oauth/token";
	});

	unwrapExports(constants);
	var constants_1 = constants.API_URL;
	var constants_2 = constants.API_VERSION;
	var constants_3 = constants.OAUTH_AUTHORIZE_URL;
	var constants_4 = constants.OAUTH_TOKEN_URL;

	// Copyright Joyent, Inc. and other Node contributors.

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty$1(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	var decode = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty$1(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};

	// Copyright Joyent, Inc. and other Node contributors.

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	var encode = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};

	var querystring = createCommonjsModule(function (module, exports) {

	exports.decode = exports.parse = decode;
	exports.encode = exports.stringify = encode;
	});
	var querystring_1 = querystring.decode;
	var querystring_2 = querystring.parse;
	var querystring_3 = querystring.encode;
	var querystring_4 = querystring.stringify;

	var formUrlencoded = createCommonjsModule(function (module) {
	// Filename: formurlencoded.js
	// Timestamp: 2016.01.18-15:36:37 (last modified)
	// Author(s): Bumblehead (www.bumblehead.com), JBlashill (james@blashill.com)
	//
	// http://www.w3.org/TR/html5/forms.html#url-encoded-form-data
	// input: {one:1,two:2} return: '[one]=1&[two]=2'

	var formurlencoded = module.exports = function (data, opts) {
	  opts = typeof opts === 'object' ? opts : {};

	  function encode (value) {
	    return String(value)
	      .replace(/[^ !'()~\*]*/g, encodeURIComponent)
	      .replace(/ /g, '+')
	      .replace(/[!'()~\*]/g, function (ch) {
	        return '%' + ch.charCodeAt().toString(16).slice(-2).toUpperCase();
	      });
	  }

	  function keys (obj) {
	    var keys = Object.keys(obj);

	    return opts.sorted ? keys.sort() : keys;
	  }

	  function filterjoin (arr) {
	    return arr.filter(function (e) { return e; }).join('&');
	  }

	  function objnest (name, obj) {
	    return filterjoin(keys(obj).map(function (key) {
	      return nest(name + '[' + key + ']', obj[key]);
	    }));
	  }

	  function arrnest (name, arr) {
	    return filterjoin(arr.map(function (elem) {
	      return nest(name + '[]', elem);
	    }));
	  }

	  function nest (name, value) {
	    var type = typeof value,
	        f = null;

	    if (value === f) {
	      f = opts.ignorenull ? f : encode(name) + '=' + f;
	    } else if (/string|number|boolean/.test(type)) {
	      f = encode(name) + '=' + encode(value);
	    } else if (Array.isArray(value)) {
	      f = arrnest(name, value);
	    } else if (type === 'object') {
	      f = objnest(name, value);
	    }

	    return f;
	  }

	  return filterjoin(keys(data).map(function (key) {
	    return nest(key, data[key]);
	  }));
	};
	});

	/**
	 * Check if we're required to add a port number.
	 *
	 * @see https://url.spec.whatwg.org/#default-port
	 * @param {Number|String} port Port number we need to check
	 * @param {String} protocol Protocol we need to check against.
	 * @returns {Boolean} Is it a default port for the given protocol
	 * @api private
	 */
	var requiresPort = function required(port, protocol) {
	  protocol = protocol.split(':')[0];
	  port = +port;

	  if (!port) return false;

	  switch (protocol) {
	    case 'http':
	    case 'ws':
	    return port !== 80;

	    case 'https':
	    case 'wss':
	    return port !== 443;

	    case 'ftp':
	    return port !== 21;

	    case 'gopher':
	    return port !== 70;

	    case 'file':
	    return false;
	  }

	  return port !== 0;
	};

	var has = Object.prototype.hasOwnProperty
	  , undef;

	/**
	 * Decode a URI encoded string.
	 *
	 * @param {String} input The URI encoded string.
	 * @returns {String} The decoded string.
	 * @api private
	 */
	function decode$1(input) {
	  return decodeURIComponent(input.replace(/\+/g, ' '));
	}

	/**
	 * Simple query string parser.
	 *
	 * @param {String} query The query string that needs to be parsed.
	 * @returns {Object}
	 * @api public
	 */
	function querystring$1(query) {
	  var parser = /([^=?&]+)=?([^&]*)/g
	    , result = {}
	    , part;

	  while (part = parser.exec(query)) {
	    var key = decode$1(part[1])
	      , value = decode$1(part[2]);

	    //
	    // Prevent overriding of existing properties. This ensures that build-in
	    // methods like `toString` or __proto__ are not overriden by malicious
	    // querystrings.
	    //
	    if (key in result) continue;
	    result[key] = value;
	  }

	  return result;
	}

	/**
	 * Transform a query string to an object.
	 *
	 * @param {Object} obj Object that should be transformed.
	 * @param {String} prefix Optional prefix.
	 * @returns {String}
	 * @api public
	 */
	function querystringify(obj, prefix) {
	  prefix = prefix || '';

	  var pairs = []
	    , value
	    , key;

	  //
	  // Optionally prefix with a '?' if needed
	  //
	  if ('string' !== typeof prefix) prefix = '?';

	  for (key in obj) {
	    if (has.call(obj, key)) {
	      value = obj[key];

	      //
	      // Edge cases where we actually want to encode the value to an empty
	      // string instead of the stringified value.
	      //
	      if (!value && (value === null || value === undef || isNaN(value))) {
	        value = '';
	      }

	      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(value));
	    }
	  }

	  return pairs.length ? prefix + pairs.join('&') : '';
	}

	//
	// Expose the module.
	//
	var stringify = querystringify;
	var parse = querystring$1;

	var querystringify_1 = {
		stringify: stringify,
		parse: parse
	};

	var protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
	  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

	/**
	 * These are the parse rules for the URL parser, it informs the parser
	 * about:
	 *
	 * 0. The char it Needs to parse, if it's a string it should be done using
	 *    indexOf, RegExp using exec and NaN means set as current value.
	 * 1. The property we should set when parsing this value.
	 * 2. Indication if it's backwards or forward parsing, when set as number it's
	 *    the value of extra chars that should be split off.
	 * 3. Inherit from location if non existing in the parser.
	 * 4. `toLowerCase` the resulting value.
	 */
	var rules = [
	  ['#', 'hash'],                        // Extract from the back.
	  ['?', 'query'],                       // Extract from the back.
	  function sanitize(address) {          // Sanitize what is left of the address
	    return address.replace('\\', '/');
	  },
	  ['/', 'pathname'],                    // Extract from the back.
	  ['@', 'auth', 1],                     // Extract from the front.
	  [NaN, 'host', undefined, 1, 1],       // Set left over value.
	  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
	  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
	];

	/**
	 * These properties should not be copied or inherited from. This is only needed
	 * for all non blob URL's as a blob URL does not include a hash, only the
	 * origin.
	 *
	 * @type {Object}
	 * @private
	 */
	var ignore = { hash: 1, query: 1 };

	/**
	 * The location object differs when your code is loaded through a normal page,
	 * Worker or through a worker using a blob. And with the blobble begins the
	 * trouble as the location object will contain the URL of the blob, not the
	 * location of the page where our code is loaded in. The actual origin is
	 * encoded in the `pathname` so we can thankfully generate a good "default"
	 * location from it so we can generate proper relative URL's again.
	 *
	 * @param {Object|String} loc Optional default location object.
	 * @returns {Object} lolcation object.
	 * @public
	 */
	function lolcation(loc) {
	  var globalVar;

	  if (typeof window !== 'undefined') globalVar = window;
	  else if (typeof commonjsGlobal !== 'undefined') globalVar = commonjsGlobal;
	  else if (typeof self !== 'undefined') globalVar = self;
	  else globalVar = {};

	  var location = globalVar.location || {};
	  loc = loc || location;

	  var finaldestination = {}
	    , type = typeof loc
	    , key;

	  if ('blob:' === loc.protocol) {
	    finaldestination = new Url(unescape(loc.pathname), {});
	  } else if ('string' === type) {
	    finaldestination = new Url(loc, {});
	    for (key in ignore) delete finaldestination[key];
	  } else if ('object' === type) {
	    for (key in loc) {
	      if (key in ignore) continue;
	      finaldestination[key] = loc[key];
	    }

	    if (finaldestination.slashes === undefined) {
	      finaldestination.slashes = slashes.test(loc.href);
	    }
	  }

	  return finaldestination;
	}

	/**
	 * @typedef ProtocolExtract
	 * @type Object
	 * @property {String} protocol Protocol matched in the URL, in lowercase.
	 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
	 * @property {String} rest Rest of the URL that is not part of the protocol.
	 */

	/**
	 * Extract protocol information from a URL with/without double slash ("//").
	 *
	 * @param {String} address URL we want to extract from.
	 * @return {ProtocolExtract} Extracted information.
	 * @private
	 */
	function extractProtocol(address) {
	  var match = protocolre.exec(address);

	  return {
	    protocol: match[1] ? match[1].toLowerCase() : '',
	    slashes: !!match[2],
	    rest: match[3]
	  };
	}

	/**
	 * Resolve a relative URL pathname against a base URL pathname.
	 *
	 * @param {String} relative Pathname of the relative URL.
	 * @param {String} base Pathname of the base URL.
	 * @return {String} Resolved pathname.
	 * @private
	 */
	function resolve(relative, base) {
	  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
	    , i = path.length
	    , last = path[i - 1]
	    , unshift = false
	    , up = 0;

	  while (i--) {
	    if (path[i] === '.') {
	      path.splice(i, 1);
	    } else if (path[i] === '..') {
	      path.splice(i, 1);
	      up++;
	    } else if (up) {
	      if (i === 0) unshift = true;
	      path.splice(i, 1);
	      up--;
	    }
	  }

	  if (unshift) path.unshift('');
	  if (last === '.' || last === '..') path.push('');

	  return path.join('/');
	}

	/**
	 * The actual URL instance. Instead of returning an object we've opted-in to
	 * create an actual constructor as it's much more memory efficient and
	 * faster and it pleases my OCD.
	 *
	 * It is worth noting that we should not use `URL` as class name to prevent
	 * clashes with the global URL instance that got introduced in browsers.
	 *
	 * @constructor
	 * @param {String} address URL we want to parse.
	 * @param {Object|String} [location] Location defaults for relative paths.
	 * @param {Boolean|Function} [parser] Parser for the query string.
	 * @private
	 */
	function Url(address, location, parser) {
	  if (!(this instanceof Url)) {
	    return new Url(address, location, parser);
	  }

	  var relative, extracted, parse, instruction, index, key
	    , instructions = rules.slice()
	    , type = typeof location
	    , url = this
	    , i = 0;

	  //
	  // The following if statements allows this module two have compatibility with
	  // 2 different API:
	  //
	  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
	  //    where the boolean indicates that the query string should also be parsed.
	  //
	  // 2. The `URL` interface of the browser which accepts a URL, object as
	  //    arguments. The supplied object will be used as default values / fall-back
	  //    for relative paths.
	  //
	  if ('object' !== type && 'string' !== type) {
	    parser = location;
	    location = null;
	  }

	  if (parser && 'function' !== typeof parser) parser = querystringify_1.parse;

	  location = lolcation(location);

	  //
	  // Extract protocol information before running the instructions.
	  //
	  extracted = extractProtocol(address || '');
	  relative = !extracted.protocol && !extracted.slashes;
	  url.slashes = extracted.slashes || relative && location.slashes;
	  url.protocol = extracted.protocol || location.protocol || '';
	  address = extracted.rest;

	  //
	  // When the authority component is absent the URL starts with a path
	  // component.
	  //
	  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

	  for (; i < instructions.length; i++) {
	    instruction = instructions[i];

	    if (typeof instruction === 'function') {
	      address = instruction(address);
	      continue;
	    }

	    parse = instruction[0];
	    key = instruction[1];

	    if (parse !== parse) {
	      url[key] = address;
	    } else if ('string' === typeof parse) {
	      if (~(index = address.indexOf(parse))) {
	        if ('number' === typeof instruction[2]) {
	          url[key] = address.slice(0, index);
	          address = address.slice(index + instruction[2]);
	        } else {
	          url[key] = address.slice(index);
	          address = address.slice(0, index);
	        }
	      }
	    } else if ((index = parse.exec(address))) {
	      url[key] = index[1];
	      address = address.slice(0, index.index);
	    }

	    url[key] = url[key] || (
	      relative && instruction[3] ? location[key] || '' : ''
	    );

	    //
	    // Hostname, host and protocol should be lowercased so they can be used to
	    // create a proper `origin`.
	    //
	    if (instruction[4]) url[key] = url[key].toLowerCase();
	  }

	  //
	  // Also parse the supplied query string in to an object. If we're supplied
	  // with a custom parser as function use that instead of the default build-in
	  // parser.
	  //
	  if (parser) url.query = parser(url.query);

	  //
	  // If the URL is relative, resolve the pathname against the base URL.
	  //
	  if (
	      relative
	    && location.slashes
	    && url.pathname.charAt(0) !== '/'
	    && (url.pathname !== '' || location.pathname !== '')
	  ) {
	    url.pathname = resolve(url.pathname, location.pathname);
	  }

	  //
	  // We should not add port numbers if they are already the default port number
	  // for a given protocol. As the host also contains the port number we're going
	  // override it with the hostname which contains no port number.
	  //
	  if (!requiresPort(url.port, url.protocol)) {
	    url.host = url.hostname;
	    url.port = '';
	  }

	  //
	  // Parse down the `auth` for the username and password.
	  //
	  url.username = url.password = '';
	  if (url.auth) {
	    instruction = url.auth.split(':');
	    url.username = instruction[0] || '';
	    url.password = instruction[1] || '';
	  }

	  url.origin = url.protocol && url.host && url.protocol !== 'file:'
	    ? url.protocol +'//'+ url.host
	    : 'null';

	  //
	  // The href is just the compiled result.
	  //
	  url.href = url.toString();
	}

	/**
	 * This is convenience method for changing properties in the URL instance to
	 * insure that they all propagate correctly.
	 *
	 * @param {String} part          Property we need to adjust.
	 * @param {Mixed} value          The newly assigned value.
	 * @param {Boolean|Function} fn  When setting the query, it will be the function
	 *                               used to parse the query.
	 *                               When setting the protocol, double slash will be
	 *                               removed from the final url if it is true.
	 * @returns {URL} URL instance for chaining.
	 * @public
	 */
	function set(part, value, fn) {
	  var url = this;

	  switch (part) {
	    case 'query':
	      if ('string' === typeof value && value.length) {
	        value = (fn || querystringify_1.parse)(value);
	      }

	      url[part] = value;
	      break;

	    case 'port':
	      url[part] = value;

	      if (!requiresPort(value, url.protocol)) {
	        url.host = url.hostname;
	        url[part] = '';
	      } else if (value) {
	        url.host = url.hostname +':'+ value;
	      }

	      break;

	    case 'hostname':
	      url[part] = value;

	      if (url.port) value += ':'+ url.port;
	      url.host = value;
	      break;

	    case 'host':
	      url[part] = value;

	      if (/:\d+$/.test(value)) {
	        value = value.split(':');
	        url.port = value.pop();
	        url.hostname = value.join(':');
	      } else {
	        url.hostname = value;
	        url.port = '';
	      }

	      break;

	    case 'protocol':
	      url.protocol = value.toLowerCase();
	      url.slashes = !fn;
	      break;

	    case 'pathname':
	    case 'hash':
	      if (value) {
	        var char = part === 'pathname' ? '/' : '#';
	        url[part] = value.charAt(0) !== char ? char + value : value;
	      } else {
	        url[part] = value;
	      }
	      break;

	    default:
	      url[part] = value;
	  }

	  for (var i = 0; i < rules.length; i++) {
	    var ins = rules[i];

	    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
	  }

	  url.origin = url.protocol && url.host && url.protocol !== 'file:'
	    ? url.protocol +'//'+ url.host
	    : 'null';

	  url.href = url.toString();

	  return url;
	}

	/**
	 * Transform the properties back in to a valid and full URL string.
	 *
	 * @param {Function} stringify Optional query stringify function.
	 * @returns {String} Compiled version of the URL.
	 * @public
	 */
	function toString(stringify) {
	  if (!stringify || 'function' !== typeof stringify) stringify = querystringify_1.stringify;

	  var query
	    , url = this
	    , protocol = url.protocol;

	  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

	  var result = protocol + (url.slashes ? '//' : '');

	  if (url.username) {
	    result += url.username;
	    if (url.password) result += ':'+ url.password;
	    result += '@';
	  }

	  result += url.host + url.pathname;

	  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
	  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

	  if (url.hash) result += url.hash;

	  return result;
	}

	Url.prototype = { set: set, toString: toString };

	//
	// Expose the URL parser and some additional properties that might be useful for
	// others or testing.
	//
	Url.extractProtocol = extractProtocol;
	Url.location = lolcation;
	Url.qs = querystringify_1;

	var urlParse = Url;

	var utils = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.formUrlEncode = formUrlEncode;
	exports.getUrlComponents = getUrlComponents;
	exports.buildFetchOptions = buildFetchOptions;





	var _formUrlencoded2 = _interopRequireDefault(formUrlencoded);



	var _urlParse2 = _interopRequireDefault(urlParse);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function formUrlEncode(body) {
	  return (0, _formUrlencoded2.default)(body);
	}

	function getUrlComponents(uri) {
	  return (0, _urlParse2.default)(uri, {}, true);
	}

	function buildFetchOptions(options) {
	  var method = options.method,
	      query = options.query,
	      oauth = options.oauth,
	      body = options.body;

	  var url = oauth === true ? options.url : "" + this._apiUrl + options.url;
	  var headers = _extends({}, this._headers, options.headers, {
	    "Accept-Version": this._apiVersion,
	    "Authorization": this._bearerToken ? "Bearer " + this._bearerToken : "Client-ID " + this._applicationId
	  });

	  if (body) {
	    headers["Content-Type"] = "application/x-www-form-urlencoded";
	  }

	  if (query) {
	    url = decodeURIComponent(url + "?" + (0, querystring.stringify)(query));
	  }

	  return {
	    url: url,
	    options: {
	      method: method,
	      headers: headers,
	      body: method !== "GET" && body ? formUrlEncode(body) : undefined
	    }
	  };
	}
	});

	unwrapExports(utils);
	var utils_1 = utils.formUrlEncode;
	var utils_2 = utils.getUrlComponents;
	var utils_3 = utils.buildFetchOptions;

	var auth_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = auth;



	var _querystring2 = _interopRequireDefault(querystring);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function auth() {
	  var _this = this;

	  return {
	    getAuthenticationUrl: function getAuthenticationUrl() {
	      var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["public"];

	      var querystrings = _querystring2.default.stringify({
	        client_id: _this._applicationId,
	        redirect_uri: _this._callbackUrl,
	        response_type: "code",
	        scope: scope.length > 1 ? scope.join("+") : scope.toString()
	      });

	      return decodeURIComponent(constants.OAUTH_AUTHORIZE_URL + "?" + querystrings);
	    },

	    userAuthentication: function userAuthentication(code) {
	      var url = constants.OAUTH_TOKEN_URL;

	      return _this.request({
	        url: url,
	        method: "POST",
	        body: {
	          client_id: _this._applicationId,
	          client_secret: _this._secret,
	          redirect_uri: _this._callbackUrl,
	          grant_type: "authorization_code",
	          code: code
	        },
	        oauth: true
	      });
	    },

	    setBearerToken: function setBearerToken(accessToken) {
	      if (accessToken) {
	        _this._bearerToken = accessToken;
	      }
	    }
	  };
	}
	});

	unwrapExports(auth_1);

	var currentUser_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = currentUser;
	function currentUser() {
	  var _this = this;

	  return {
	    profile: function profile() {
	      var url = "/me";

	      return _this.request({
	        url: url,
	        method: "GET"
	      });
	    },

	    updateProfile: function updateProfile(options) {
	      var endpointUrl = "/me";
	      var username = options.username,
	          firstName = options.firstName,
	          lastName = options.lastName,
	          email = options.email,
	          url = options.url,
	          location = options.location,
	          bio = options.bio,
	          instagramUsername = options.instagramUsername;

	      var body = {
	        username: username,
	        first_name: firstName,
	        last_name: lastName,
	        email: email,
	        url: url,
	        location: location,
	        bio: bio,
	        instagram_username: instagramUsername
	      };

	      Object.keys(body).forEach(function (key) {
	        if (!body[key]) {
	          delete body[key];
	        }
	      });

	      return _this.request({
	        url: endpointUrl,
	        method: "PUT",
	        body: body
	      });
	    }
	  };
	}
	});

	unwrapExports(currentUser_1);

	var users_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = users;
	function users() {
	  var _this = this;

	  return {
	    profile: function profile(username) {
	      var url = "/users/" + username;

	      return _this.request({
	        url: url,
	        method: "GET"
	      });
	    },

	    photos: function photos(username) {
	      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	      var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
	      var orderBy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "latest";
	      var stats = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

	      var url = "/users/" + username + "/photos";
	      var query = {
	        page: page,
	        per_page: perPage,
	        order_by: orderBy,
	        stats: stats
	      };

	      return _this.request({
	        url: url,
	        method: "GET",
	        query: query
	      });
	    },

	    likes: function likes(username) {
	      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	      var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
	      var orderBy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "latest";

	      var url = "/users/" + username + "/likes";
	      var query = {
	        page: page,
	        per_page: perPage,
	        order_by: orderBy
	      };

	      return _this.request({
	        url: url,
	        method: "GET",
	        query: query
	      });
	    },

	    collections: function collections(username) {
	      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	      var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
	      var orderBy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "published";

	      var url = "/users/" + username + "/collections";
	      var query = {
	        page: page,
	        per_page: perPage,
	        order_by: orderBy
	      };

	      return _this.request({
	        url: url,
	        method: "GET",
	        query: query
	      });
	    },

	    statistics: function statistics(username) {
	      var resolution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "days";
	      var quantity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;

	      var url = "/users/" + username + "/statistics";
	      var query = {
	        resolution: resolution,
	        quantity: quantity
	      };

	      return _this.request({
	        url: url,
	        method: "GET",
	        query: query
	      });
	    }
	  };
	}
	});

	unwrapExports(users_1);

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/,
	    reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Symbol$1 = root.Symbol,
	    splice = arrayProto.splice;

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty$2.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString$1(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString$1(value) {
	  return value == null ? '' : baseToString(value);
	}

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	var lodash_get = get;

	var photos_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = photos;





	var _lodash2 = _interopRequireDefault(lodash_get);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function photos() {
	  var _this = this;

	  return {
	    listPhotos: function listPhotos() {
	      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
	      var orderBy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "latest";

	      var url = "/photos";
	      var query = {
	        page: page,
	        per_page: perPage,
	        order_by: orderBy
	      };

	      return _this.request({
	        url: url,
	        method: "GET",
	        query: query
	      });
	    },

	    listCuratedPhotos: function listCuratedPhotos() {
	      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
	      var orderBy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "latest";

	      var url = "/photos/curated";
	      var query = {
	        page: page,
	        per_page: perPage,
	        order_by: orderBy
	      };

	      return _this.request({
	        url: url,
	        method: "GET",
	        query: query
	      });
	    },

	    searchPhotos: function searchPhotos(q) {
	      var category = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [""];
	      var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	      var perPage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

	      var url = "/photos/search";
	      var query = {
	        query: q,
	        category: category.length > 1 ? category.join(",") : category.toString(),
	        page: page,
	        per_page: perPage
	      };

	      return _this.request({
	        url: url,
	        method: "GET",
	        query: query
	      });
	    },

	    getPhoto: function getPhoto(id, width, height, rectangle) {
	      var url = "/photos/" + id;
	      var query = {
	        w: width,
	        h: height,
	        rect: rectangle
	      };

	      return _this.request({
	        url: url,
	        method: "GET",
	        query: query
	      });
	    },

	    getPhotoStats: function getPhotoStats(id) {
	      var url = "/photos/" + id + "/stats";

	      return _this.request({
	        url: url,
	        method: "GET"
	      });
	    },

	    getRandomPhoto: function getRandomPhoto() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      var url = "/photos/random";
	      var category = options.category || [];
	      var collections = options.collections || [];

	      var query = {
	        featured: options.featured,
	        username: options.username,
	        orientation: options.orientation,
	        category: category.join(),
	        collections: collections.join(),
	        query: options.query,
	        w: options.width,
	        h: options.height,
	        c: options.cacheBuster || new Date().getTime(), // Avoid ajax response caching
	        count: options.count
	      };

	      Object.keys(query).forEach(function (key) {
	        if (!query[key]) {
	          delete query[key];
	        }
	      });

	      return _this.request({
	        url: url,
	        method: "GET",
	        query: query
	      });
	    },

	    uploadPhoto: function uploadPhoto(photo) {
	      if (!_this._bearerToken) {
	        throw new Error("Requires a bearerToken to be set.");
	      }

	      var url = "/photos";

	      return _this.request({
	        url: url,
	        method: "POST",
	        body: {
	          photo: photo
	        }
	      });
	    },

	    likePhoto: function likePhoto(id) {
	      if (!_this._bearerToken) {
	        throw new Error("Requires a bearerToken to be set.");
	      }

	      var url = "/photos/" + id + "/like";

	      return _this.request({
	        url: url,
	        method: "POST"
	      });
	    },

	    unlikePhoto: function unlikePhoto(id) {
	      if (!_this._bearerToken) {
	        throw new Error("Requires a bearerToken to be set.");
	      }

	      var url = "/photos/" + id + "/like";

	      return _this.request({
	        url: url,
	        method: "DELETE"
	      });
	    },

	    downloadPhoto: function downloadPhoto(photo) {
	      var downloadLocation = (0, _lodash2.default)(photo, "links.download_location", undefined);

	      if (downloadLocation === undefined) {
	        throw new Error("Object received is not a photo. " + photo);
	      }

	      var urlComponents = (0, utils.getUrlComponents)(downloadLocation);

	      return _this.request({
	        url: urlComponents.pathname,
	        method: "GET",
	        query: urlComponents.query
	      });
	    }
	  };
	}
	});

	unwrapExports(photos_1);

	var categories_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = categories;
	function categories() {
	  var _this = this;

	  return {
	    listCategories: function listCategories() {
	      var url = "/categories";

	      return _this.request({
	        url: url,
	        method: "GET"
	      });
	    },

	    category: function category(id) {
	      var url = "/categories/" + id;

	      return _this.request({
	        url: url,
	        method: "GET"
	      });
	    },

	    categoryPhotos: function categoryPhotos(id, page, perPage) {
	      var url = "/categories/" + id + "/photos";

	      var query = {
	        page: page,
	        per_page: perPage
	      };

	      return _this.request({
	        url: url,
	        method: "GET",
	        query: query
	      });
	    }
	  };
	}
	});

	unwrapExports(categories_1);

	var collections_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = collections;
	function collections() {
	  var _this = this;

	  return {
	    listCollections: function listCollections() {
	      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

	      var url = "/collections";

	      var query = {
	        page: page,
	        per_page: perPage
	      };

	      return _this.request({
	        url: url,
	        method: "GET",
	        query: query
	      });
	    },

	    listCuratedCollections: function listCuratedCollections() {
	      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

	      var url = "/collections/curated";
	      var query = {
	        page: page,
	        per_page: perPage
	      };

	      return _this.request({
	        url: url,
	        method: "GET",
	        query: query
	      });
	    },

	    listFeaturedCollections: function listFeaturedCollections() {
	      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

	      var url = "/collections/featured";
	      var query = {
	        page: page,
	        per_page: perPage
	      };

	      return _this.request({
	        url: url,
	        method: "GET",
	        query: query
	      });
	    },

	    getCollection: collection.bind(this, false),

	    getCuratedCollection: collection.bind(this, true),

	    getCuratedCollectionPhotos: collectionPhotos.bind(this, true),

	    getCollectionPhotos: collectionPhotos.bind(this, false),

	    createCollection: createUpdateCollection.bind(this, null),

	    updateCollection: createUpdateCollection.bind(this),

	    deleteCollection: function deleteCollection(id) {
	      var url = "/collections/" + id;

	      return _this.request({
	        url: url,
	        method: "DELETE"
	      });
	    },

	    addPhotoToCollection: function addPhotoToCollection(collectionId, photoId) {
	      var url = "/collections/" + collectionId + "/add";

	      return _this.request({
	        url: url,
	        method: "POST",
	        body: {
	          photo_id: photoId
	        }
	      });
	    },

	    removePhotoFromCollection: function removePhotoFromCollection(collectionId, photoId) {
	      var url = "/collections/" + collectionId + "/remove?photo_id=" + photoId;

	      return _this.request({
	        url: url,
	        method: "DELETE"
	      });
	    },

	    listRelatedCollections: function listRelatedCollections(collectionId) {
	      var url = "/collections/" + collectionId + "/related";

	      return _this.request({
	        url: url,
	        method: "GET"
	      });
	    }

	  };
	}

	function collection(isCurated, id) {
	  var url = isCurated ? "/collections/curated/" + id : "/collections/" + id;

	  return this.request({
	    url: url,
	    method: "GET"
	  });
	}

	function collectionPhotos(isCurated, id) {
	  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	  var perPage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
	  var orderBy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "latest";

	  var url = isCurated ? "/collections/curated/" + id + "/photos" : "/collections/" + id + "/photos";

	  var query = {
	    page: page,
	    per_page: perPage,
	    order_by: orderBy
	  };

	  return this.request({
	    url: url,
	    method: "GET",
	    query: query
	  });
	}

	function createUpdateCollection(id, title, description, isPrivate) {
	  var url = id ? "/collections/" + id : "/collections";
	  var body = {
	    title: title,
	    description: description,
	    "private": isPrivate
	  };

	  return this.request({
	    url: url,
	    method: id ? "PUT" : "POST",
	    body: body
	  });
	}
	});

	unwrapExports(collections_1);

	var search_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = search;
	function search() {
	  return {
	    all: searcher.bind(this, "/search"),

	    photos: searcher.bind(this, "/search/photos"),

	    users: searcher.bind(this, "/search/users"),

	    collections: searcher.bind(this, "/search/collections")
	  };
	}

	function searcher(url) {
	  var keyword = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	  var per_page = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

	  var query = {
	    query: keyword,
	    page: page,
	    per_page: per_page
	  };

	  return this.request({
	    url: url,
	    method: "GET",
	    query: query
	  });
	}
	});

	unwrapExports(search_1);

	var stats_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = stats;
	function stats() {
	  var _this = this;

	  return {
	    total: function total() {
	      var url = "/stats/total";

	      return _this.request({
	        url: url,
	        method: "GET"
	      });
	    }
	  };
	}
	});

	unwrapExports(stats_1);

	var unsplash = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.toJson = toJson;







	var _auth2 = _interopRequireDefault(auth_1);



	var _currentUser2 = _interopRequireDefault(currentUser_1);



	var _users2 = _interopRequireDefault(users_1);



	var _photos2 = _interopRequireDefault(photos_1);



	var _categories2 = _interopRequireDefault(categories_1);



	var _collections2 = _interopRequireDefault(collections_1);



	var _search2 = _interopRequireDefault(search_1);



	var _stats2 = _interopRequireDefault(stats_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Unsplash = function () {
	  function Unsplash(options) {
	    _classCallCheck(this, Unsplash);

	    this._apiUrl = options.apiUrl || constants.API_URL;
	    this._apiVersion = options.apiVersion || constants.API_VERSION;
	    this._applicationId = options.applicationId;
	    this._secret = options.secret;
	    this._callbackUrl = options.callbackUrl;
	    this._bearerToken = options.bearerToken;
	    this._headers = options.headers || {};

	    this.auth = _auth2.default.bind(this)();
	    this.currentUser = _currentUser2.default.bind(this)();
	    this.users = _users2.default.bind(this)();
	    this.photos = _photos2.default.bind(this)();
	    this.categories = _categories2.default.bind(this)();
	    this.collections = _collections2.default.bind(this)();
	    this.search = _search2.default.bind(this)();
	    this.stats = _stats2.default.bind(this)();
	  }

	  _createClass(Unsplash, [{
	    key: "request",
	    value: function request(requestOptions) {
	      var _buildFetchOptions$bi = utils.buildFetchOptions.bind(this)(requestOptions),
	          url = _buildFetchOptions$bi.url,
	          options = _buildFetchOptions$bi.options;

	      return fetch(url, options);
	    }
	  }]);

	  return Unsplash;
	}();

	exports.default = Unsplash;
	function toJson(res) {
	  return typeof res.json === "function" ? res.json() : res;
	}
	});

	var Unsplash = unwrapExports(unsplash);
	var unsplash_1 = unsplash.toJson;

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

	var _extends = Object.assign || function (target) {
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

	function toJson(response) {
	  return response.json();
	}

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
	    return react.createElement(Component, _extends({}, defaultProps, props));
	  };

	  WrappedComponent.displayName = "withDefaultProps(" + Component.name + ")";

	  return WrappedComponent;
	}

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
	      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "popular";

	      return _this2.unsplash.photos.listPhotos(page, perPage, type).then(_this2.processResponse);
	    };

	    this.searchPhotos = function (search, page, perPage) {
	      return _this2.unsplash.search.photos(search, page, perPage).then(_this2.processResponse);
	    };

	    this.getPhoto = function (id) {
	      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	          width = _ref2.width,
	          height = _ref2.height;

	      return _this2.unsplash.photos.getPhoto(id, width, height).then(_this2.processResponse);
	    };

	    this.downloadPhoto = function (photo) {
	      return _this2.unsplash.photos.downloadPhoto(photo).then(_this2.processResponse);
	    };

	    this.processResponse = function (incomingResponse) {
	      var response = Promise.resolve(_this2.__debug_chaosMonkey.process(incomingResponse));

	      return response.then(_this2.handleErrors).then(toJson);
	    };

	    this.__debug_chaosMonkey = new ChaosMonkey(__debug_chaosMonkey);
	    this.unsplash = new Unsplash({ applicationId: accessKey });
	  }

	  createClass(UnsplashWrapper, [{
	    key: "handleErrors",
	    value: function handleErrors(response) {
	      if (!response.ok) {
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
	        react.createElement("img", _extends({}, rest, {
	          src: this.state.loaded ? src : blank,
	          style: _extends({}, style, {
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
	        _extends({ ref: function ref(element) {
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

	      return react.createElement("input", _extends({ type: "file", name: "file", ref: function ref(input) {
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

	      return react.createElement("input", _extends({ type: "hidden", name: "file", ref: function ref(input) {
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
	      return react.createElement(BlobUploader, _extends({}, this.props, { onBlobLoaded: this.handleBlobLoaded }));
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
	        return r.urls.custom;
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
	      _this.setState({ selectedPhoto: photo }, function () {
	        _this.props.onSelectPhoto(photo);
	      });
	    };

	    _this.handleFinishedUploading = function (response) {
	      if (!_this.onSelectPhotoIsDefined) {
	        _this.setState({ loadingPhoto: null });
	      }

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

	    _this.onSelectPhotoIsDefined = _this.props.onSelectPhoto !== noop;

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
	  onSelectPhoto: func$6,
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
	  onSelectPhoto: noop,
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
	  var mergedStyle = _extends({ top: "0.15em", marginRight: ".5em" }, style);
	  return react.createElement(
	    "div",
	    _extends({ className: "p-r", style: mergedStyle }, rest),
	    isLoading ? react.createElement(Spinner, { size: "1em", color: searchColor }) : react.createElement(SearchIcon, { width: "1em", height: "1em", style: { color: searchColor } })
	  );
	}

	AbsolutelyCentered.propTypes = { width: number$3.isRequired, height: number$3.isRequired };
	function AbsolutelyCentered(_ref6) {
	  var width = _ref6.width,
	      height = _ref6.height,
	      rest = objectWithoutProperties(_ref6, ["width", "height"]);

	  return react.createElement("div", _extends({
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
	    react.createElement("a", _extends({
	      style: _extends({}, style, {
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
