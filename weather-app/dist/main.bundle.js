/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./lib/axios */ \"./node_modules/axios/lib/axios.js\");\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/index.js?");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"./node_modules/axios/lib/core/settle.js\");\nvar cookies = __webpack_require__(/*! ./../helpers/cookies */ \"./node_modules/axios/lib/helpers/cookies.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ \"./node_modules/axios/lib/core/buildFullPath.js\");\nvar parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ \"./node_modules/axios/lib/helpers/parseHeaders.js\");\nvar isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ \"./node_modules/axios/lib/helpers/isURLSameOrigin.js\");\nvar createError = __webpack_require__(/*! ../core/createError */ \"./node_modules/axios/lib/core/createError.js\");\n\nmodule.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    var requestData = config.data;\n    var requestHeaders = config.headers;\n\n    if (utils.isFormData(requestData)) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    var request = new XMLHttpRequest();\n\n    // HTTP basic authentication\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\n    }\n\n    var fullPath = buildFullPath(config.baseURL, config.url);\n    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);\n\n    // Set the request timeout in MS\n    request.timeout = config.timeout;\n\n    // Listen for ready state\n    request.onreadystatechange = function handleLoad() {\n      if (!request || request.readyState !== 4) {\n        return;\n      }\n\n      // The request errored out and we didn't get a response, this will be\n      // handled by onerror instead\n      // With one exception: request that using file: protocol, most browsers\n      // will return status as 0 even though it's a successful request\n      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\n        return;\n      }\n\n      // Prepare the response\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\n      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;\n      var response = {\n        data: responseData,\n        status: request.status,\n        statusText: request.statusText,\n        headers: responseHeaders,\n        config: config,\n        request: request\n      };\n\n      settle(resolve, reject, response);\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle browser request cancellation (as opposed to a manual cancellation)\n    request.onabort = function handleAbort() {\n      if (!request) {\n        return;\n      }\n\n      reject(createError('Request aborted', config, 'ECONNABORTED', request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it's a network error\n      reject(createError('Network Error', config, null, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';\n      if (config.timeoutErrorMessage) {\n        timeoutErrorMessage = config.timeoutErrorMessage;\n      }\n      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',\n        request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Add xsrf header\n    // This is only done if running in a standard browser environment.\n    // Specifically not if we're in a web worker, or react-native.\n    if (utils.isStandardBrowserEnv()) {\n      // Add xsrf header\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?\n        cookies.read(config.xsrfCookieName) :\n        undefined;\n\n      if (xsrfValue) {\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\n      }\n    }\n\n    // Add headers to the request\n    if ('setRequestHeader' in request) {\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\n          // Remove Content-Type if data is undefined\n          delete requestHeaders[key];\n        } else {\n          // Otherwise add header to the request\n          request.setRequestHeader(key, val);\n        }\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (!utils.isUndefined(config.withCredentials)) {\n      request.withCredentials = !!config.withCredentials;\n    }\n\n    // Add responseType to request if needed\n    if (config.responseType) {\n      try {\n        request.responseType = config.responseType;\n      } catch (e) {\n        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.\n        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.\n        if (config.responseType !== 'json') {\n          throw e;\n        }\n      }\n    }\n\n    // Handle progress if needed\n    if (typeof config.onDownloadProgress === 'function') {\n      request.addEventListener('progress', config.onDownloadProgress);\n    }\n\n    // Not all browsers support upload events\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\n      request.upload.addEventListener('progress', config.onUploadProgress);\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (!request) {\n          return;\n        }\n\n        request.abort();\n        reject(cancel);\n        // Clean up request\n        request = null;\n      });\n    }\n\n    if (!requestData) {\n      requestData = null;\n    }\n\n    // Send the request\n    request.send(requestData);\n  });\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/adapters/xhr.js?");

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\nvar Axios = __webpack_require__(/*! ./core/Axios */ \"./node_modules/axios/lib/core/Axios.js\");\nvar mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ \"./node_modules/axios/lib/core/mergeConfig.js\");\nvar defaults = __webpack_require__(/*! ./defaults */ \"./node_modules/axios/lib/defaults.js\");\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n * @return {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  var context = new Axios(defaultConfig);\n  var instance = bind(Axios.prototype.request, context);\n\n  // Copy axios.prototype to instance\n  utils.extend(instance, Axios.prototype, context);\n\n  // Copy context to instance\n  utils.extend(instance, context);\n\n  return instance;\n}\n\n// Create the default instance to be exported\nvar axios = createInstance(defaults);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = Axios;\n\n// Factory for creating new instances\naxios.create = function create(instanceConfig) {\n  return createInstance(mergeConfig(axios.defaults, instanceConfig));\n};\n\n// Expose Cancel & CancelToken\naxios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\naxios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ \"./node_modules/axios/lib/cancel/CancelToken.js\");\naxios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\naxios.spread = __webpack_require__(/*! ./helpers/spread */ \"./node_modules/axios/lib/helpers/spread.js\");\n\n// Expose isAxiosError\naxios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ \"./node_modules/axios/lib/helpers/isAxiosError.js\");\n\nmodule.exports = axios;\n\n// Allow use of default import syntax in TypeScript\nmodule.exports.default = axios;\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * A `Cancel` is an object that is thrown when an operation is canceled.\n *\n * @class\n * @param {string=} message The message.\n */\nfunction Cancel(message) {\n  this.message = message;\n}\n\nCancel.prototype.toString = function toString() {\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\n};\n\nCancel.prototype.__CANCEL__ = true;\n\nmodule.exports = Cancel;\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/cancel/Cancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar Cancel = __webpack_require__(/*! ./Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @class\n * @param {Function} executor The executor function.\n */\nfunction CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n\n  var resolvePromise;\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n\n  var token = this;\n  executor(function cancel(message) {\n    if (token.reason) {\n      // Cancellation has already been requested\n      return;\n    }\n\n    token.reason = new Cancel(message);\n    resolvePromise(token.reason);\n  });\n}\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\n  if (this.reason) {\n    throw this.reason;\n  }\n};\n\n/**\n * Returns an object that contains a new `CancelToken` and a function that, when called,\n * cancels the `CancelToken`.\n */\nCancelToken.source = function source() {\n  var cancel;\n  var token = new CancelToken(function executor(c) {\n    cancel = c;\n  });\n  return {\n    token: token,\n    cancel: cancel\n  };\n};\n\nmodule.exports = CancelToken;\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/cancel/CancelToken.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/cancel/isCancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar buildURL = __webpack_require__(/*! ../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ \"./node_modules/axios/lib/core/InterceptorManager.js\");\nvar dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ \"./node_modules/axios/lib/core/dispatchRequest.js\");\nvar mergeConfig = __webpack_require__(/*! ./mergeConfig */ \"./node_modules/axios/lib/core/mergeConfig.js\");\n\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n */\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager()\n  };\n}\n\n/**\n * Dispatch a request\n *\n * @param {Object} config The config specific for this request (merged with this.defaults)\n */\nAxios.prototype.request = function request(config) {\n  /*eslint no-param-reassign:0*/\n  // Allow for axios('example/url'[, config]) a la fetch API\n  if (typeof config === 'string') {\n    config = arguments[1] || {};\n    config.url = arguments[0];\n  } else {\n    config = config || {};\n  }\n\n  config = mergeConfig(this.defaults, config);\n\n  // Set config.method\n  if (config.method) {\n    config.method = config.method.toLowerCase();\n  } else if (this.defaults.method) {\n    config.method = this.defaults.method.toLowerCase();\n  } else {\n    config.method = 'get';\n  }\n\n  // Hook up interceptors middleware\n  var chain = [dispatchRequest, undefined];\n  var promise = Promise.resolve(config);\n\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n    chain.unshift(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n    chain.push(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  while (chain.length) {\n    promise = promise.then(chain.shift(), chain.shift());\n  }\n\n  return promise;\n};\n\nAxios.prototype.getUri = function getUri(config) {\n  config = mergeConfig(this.defaults, config);\n  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\\?/, '');\n};\n\n// Provide aliases for supported request methods\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, config) {\n    return this.request(mergeConfig(config || {}, {\n      method: method,\n      url: url,\n      data: (config || {}).data\n    }));\n  };\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, data, config) {\n    return this.request(mergeConfig(config || {}, {\n      method: method,\n      url: url,\n      data: data\n    }));\n  };\n});\n\nmodule.exports = Axios;\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/core/Axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction InterceptorManager() {\n  this.handlers = [];\n}\n\n/**\n * Add a new interceptor to the stack\n *\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\n * @param {Function} rejected The function to handle `reject` for a `Promise`\n *\n * @return {Number} An ID used to remove interceptor later\n */\nInterceptorManager.prototype.use = function use(fulfilled, rejected) {\n  this.handlers.push({\n    fulfilled: fulfilled,\n    rejected: rejected\n  });\n  return this.handlers.length - 1;\n};\n\n/**\n * Remove an interceptor from the stack\n *\n * @param {Number} id The ID that was returned by `use`\n */\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id]) {\n    this.handlers[id] = null;\n  }\n};\n\n/**\n * Iterate over all the registered interceptors\n *\n * This method is particularly useful for skipping over any\n * interceptors that may have become `null` calling `eject`.\n *\n * @param {Function} fn The function to call for each interceptor\n */\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, function forEachHandler(h) {\n    if (h !== null) {\n      fn(h);\n    }\n  });\n};\n\nmodule.exports = InterceptorManager;\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/core/InterceptorManager.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ \"./node_modules/axios/lib/helpers/isAbsoluteURL.js\");\nvar combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ \"./node_modules/axios/lib/helpers/combineURLs.js\");\n\n/**\n * Creates a new URL by combining the baseURL with the requestedURL,\n * only when the requestedURL is not already an absolute URL.\n * If the requestURL is absolute, this function returns the requestedURL untouched.\n *\n * @param {string} baseURL The base URL\n * @param {string} requestedURL Absolute or relative URL to combine\n * @returns {string} The combined full path\n */\nmodule.exports = function buildFullPath(baseURL, requestedURL) {\n  if (baseURL && !isAbsoluteURL(requestedURL)) {\n    return combineURLs(baseURL, requestedURL);\n  }\n  return requestedURL;\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/core/buildFullPath.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar enhanceError = __webpack_require__(/*! ./enhanceError */ \"./node_modules/axios/lib/core/enhanceError.js\");\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The created error.\n */\nmodule.exports = function createError(message, config, code, request, response) {\n  var error = new Error(message);\n  return enhanceError(error, config, code, request, response);\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/core/createError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar transformData = __webpack_require__(/*! ./transformData */ \"./node_modules/axios/lib/core/transformData.js\");\nvar isCancel = __webpack_require__(/*! ../cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\nvar defaults = __webpack_require__(/*! ../defaults */ \"./node_modules/axios/lib/defaults.js\");\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n * @returns {Promise} The Promise to be fulfilled\n */\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  // Ensure headers exist\n  config.headers = config.headers || {};\n\n  // Transform request data\n  config.data = transformData(\n    config.data,\n    config.headers,\n    config.transformRequest\n  );\n\n  // Flatten headers\n  config.headers = utils.merge(\n    config.headers.common || {},\n    config.headers[config.method] || {},\n    config.headers\n  );\n\n  utils.forEach(\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\n    function cleanHeaderConfig(method) {\n      delete config.headers[method];\n    }\n  );\n\n  var adapter = config.adapter || defaults.adapter;\n\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = transformData(\n      response.data,\n      response.headers,\n      config.transformResponse\n    );\n\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!isCancel(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = transformData(\n          reason.response.data,\n          reason.response.headers,\n          config.transformResponse\n        );\n      }\n    }\n\n    return Promise.reject(reason);\n  });\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/core/dispatchRequest.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Update an Error with the specified config, error code, and response.\n *\n * @param {Error} error The error to update.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The error.\n */\nmodule.exports = function enhanceError(error, config, code, request, response) {\n  error.config = config;\n  if (code) {\n    error.code = code;\n  }\n\n  error.request = request;\n  error.response = response;\n  error.isAxiosError = true;\n\n  error.toJSON = function toJSON() {\n    return {\n      // Standard\n      message: this.message,\n      name: this.name,\n      // Microsoft\n      description: this.description,\n      number: this.number,\n      // Mozilla\n      fileName: this.fileName,\n      lineNumber: this.lineNumber,\n      columnNumber: this.columnNumber,\n      stack: this.stack,\n      // Axios\n      config: this.config,\n      code: this.code\n    };\n  };\n  return error;\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/core/enhanceError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Config-specific merge-function which creates a new config-object\n * by merging two configuration objects together.\n *\n * @param {Object} config1\n * @param {Object} config2\n * @returns {Object} New object resulting from merging config2 to config1\n */\nmodule.exports = function mergeConfig(config1, config2) {\n  // eslint-disable-next-line no-param-reassign\n  config2 = config2 || {};\n  var config = {};\n\n  var valueFromConfig2Keys = ['url', 'method', 'data'];\n  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];\n  var defaultToConfig2Keys = [\n    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',\n    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',\n    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',\n    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',\n    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'\n  ];\n  var directMergeKeys = ['validateStatus'];\n\n  function getMergedValue(target, source) {\n    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {\n      return utils.merge(target, source);\n    } else if (utils.isPlainObject(source)) {\n      return utils.merge({}, source);\n    } else if (utils.isArray(source)) {\n      return source.slice();\n    }\n    return source;\n  }\n\n  function mergeDeepProperties(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(config1[prop], config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  }\n\n  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(undefined, config2[prop]);\n    }\n  });\n\n  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);\n\n  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(undefined, config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  });\n\n  utils.forEach(directMergeKeys, function merge(prop) {\n    if (prop in config2) {\n      config[prop] = getMergedValue(config1[prop], config2[prop]);\n    } else if (prop in config1) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  });\n\n  var axiosKeys = valueFromConfig2Keys\n    .concat(mergeDeepPropertiesKeys)\n    .concat(defaultToConfig2Keys)\n    .concat(directMergeKeys);\n\n  var otherKeys = Object\n    .keys(config1)\n    .concat(Object.keys(config2))\n    .filter(function filterAxiosKeys(key) {\n      return axiosKeys.indexOf(key) === -1;\n    });\n\n  utils.forEach(otherKeys, mergeDeepProperties);\n\n  return config;\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/core/mergeConfig.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar createError = __webpack_require__(/*! ./createError */ \"./node_modules/axios/lib/core/createError.js\");\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n */\nmodule.exports = function settle(resolve, reject, response) {\n  var validateStatus = response.config.validateStatus;\n  if (!response.status || !validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(createError(\n      'Request failed with status code ' + response.status,\n      response.config,\n      null,\n      response.request,\n      response\n    ));\n  }\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/core/settle.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Object|String} data The data to be transformed\n * @param {Array} headers The headers for the request or response\n * @param {Array|Function} fns A single function or Array of functions\n * @returns {*} The resulting transformed data\n */\nmodule.exports = function transformData(data, headers, fns) {\n  /*eslint no-param-reassign:0*/\n  utils.forEach(fns, function transform(fn) {\n    data = fn(data, headers);\n  });\n\n  return data;\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/core/transformData.js?");

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ \"./node_modules/axios/lib/helpers/normalizeHeaderName.js\");\n\nvar DEFAULT_CONTENT_TYPE = {\n  'Content-Type': 'application/x-www-form-urlencoded'\n};\n\nfunction setContentTypeIfUnset(headers, value) {\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\n    headers['Content-Type'] = value;\n  }\n}\n\nfunction getDefaultAdapter() {\n  var adapter;\n  if (typeof XMLHttpRequest !== 'undefined') {\n    // For browsers use XHR adapter\n    adapter = __webpack_require__(/*! ./adapters/xhr */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {\n    // For node use HTTP adapter\n    adapter = __webpack_require__(/*! ./adapters/http */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  }\n  return adapter;\n}\n\nvar defaults = {\n  adapter: getDefaultAdapter(),\n\n  transformRequest: [function transformRequest(data, headers) {\n    normalizeHeaderName(headers, 'Accept');\n    normalizeHeaderName(headers, 'Content-Type');\n    if (utils.isFormData(data) ||\n      utils.isArrayBuffer(data) ||\n      utils.isBuffer(data) ||\n      utils.isStream(data) ||\n      utils.isFile(data) ||\n      utils.isBlob(data)\n    ) {\n      return data;\n    }\n    if (utils.isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (utils.isURLSearchParams(data)) {\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\n      return data.toString();\n    }\n    if (utils.isObject(data)) {\n      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');\n      return JSON.stringify(data);\n    }\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    /*eslint no-param-reassign:0*/\n    if (typeof data === 'string') {\n      try {\n        data = JSON.parse(data);\n      } catch (e) { /* Ignore */ }\n    }\n    return data;\n  }],\n\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n\n  xsrfCookieName: 'XSRF-TOKEN',\n  xsrfHeaderName: 'X-XSRF-TOKEN',\n\n  maxContentLength: -1,\n  maxBodyLength: -1,\n\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  }\n};\n\ndefaults.headers = {\n  common: {\n    'Accept': 'application/json, text/plain, */*'\n  }\n};\n\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\n  defaults.headers[method] = {};\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n});\n\nmodule.exports = defaults;\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/defaults.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function bind(fn, thisArg) {\n  return function wrap() {\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n    return fn.apply(thisArg, args);\n  };\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/helpers/bind.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @returns {string} The formatted url\n */\nmodule.exports = function buildURL(url, params, paramsSerializer) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n\n  var serializedParams;\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params);\n  } else if (utils.isURLSearchParams(params)) {\n    serializedParams = params.toString();\n  } else {\n    var parts = [];\n\n    utils.forEach(params, function serialize(val, key) {\n      if (val === null || typeof val === 'undefined') {\n        return;\n      }\n\n      if (utils.isArray(val)) {\n        key = key + '[]';\n      } else {\n        val = [val];\n      }\n\n      utils.forEach(val, function parseValue(v) {\n        if (utils.isDate(v)) {\n          v = v.toISOString();\n        } else if (utils.isObject(v)) {\n          v = JSON.stringify(v);\n        }\n        parts.push(encode(key) + '=' + encode(v));\n      });\n    });\n\n    serializedParams = parts.join('&');\n  }\n\n  if (serializedParams) {\n    var hashmarkIndex = url.indexOf('#');\n    if (hashmarkIndex !== -1) {\n      url = url.slice(0, hashmarkIndex);\n    }\n\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/helpers/buildURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n * @returns {string} The combined URL\n */\nmodule.exports = function combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/helpers/combineURLs.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs support document.cookie\n    (function standardBrowserEnv() {\n      return {\n        write: function write(name, value, expires, path, domain, secure) {\n          var cookie = [];\n          cookie.push(name + '=' + encodeURIComponent(value));\n\n          if (utils.isNumber(expires)) {\n            cookie.push('expires=' + new Date(expires).toGMTString());\n          }\n\n          if (utils.isString(path)) {\n            cookie.push('path=' + path);\n          }\n\n          if (utils.isString(domain)) {\n            cookie.push('domain=' + domain);\n          }\n\n          if (secure === true) {\n            cookie.push('secure');\n          }\n\n          document.cookie = cookie.join('; ');\n        },\n\n        read: function read(name) {\n          var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n          return (match ? decodeURIComponent(match[3]) : null);\n        },\n\n        remove: function remove(name) {\n          this.write(name, '', Date.now() - 86400000);\n        }\n      };\n    })() :\n\n  // Non standard browser env (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return {\n        write: function write() {},\n        read: function read() { return null; },\n        remove: function remove() {}\n      };\n    })()\n);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/helpers/cookies.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nmodule.exports = function isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with \"<scheme>://\" or \"//\" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url);\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/helpers/isAbsoluteURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Determines whether the payload is an error thrown by Axios\n *\n * @param {*} payload The value to test\n * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false\n */\nmodule.exports = function isAxiosError(payload) {\n  return (typeof payload === 'object') && (payload.isAxiosError === true);\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/helpers/isAxiosError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs have full support of the APIs needed to test\n  // whether the request URL is of the same origin as current location.\n    (function standardBrowserEnv() {\n      var msie = /(msie|trident)/i.test(navigator.userAgent);\n      var urlParsingNode = document.createElement('a');\n      var originURL;\n\n      /**\n    * Parse a URL to discover it's components\n    *\n    * @param {String} url The URL to be parsed\n    * @returns {Object}\n    */\n      function resolveURL(url) {\n        var href = url;\n\n        if (msie) {\n        // IE needs attribute set twice to normalize properties\n          urlParsingNode.setAttribute('href', href);\n          href = urlParsingNode.href;\n        }\n\n        urlParsingNode.setAttribute('href', href);\n\n        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n        return {\n          href: urlParsingNode.href,\n          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n          host: urlParsingNode.host,\n          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n          hostname: urlParsingNode.hostname,\n          port: urlParsingNode.port,\n          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\n            urlParsingNode.pathname :\n            '/' + urlParsingNode.pathname\n        };\n      }\n\n      originURL = resolveURL(window.location.href);\n\n      /**\n    * Determine if a URL shares the same origin as the current location\n    *\n    * @param {String} requestURL The URL to test\n    * @returns {boolean} True if URL shares the same origin, otherwise false\n    */\n      return function isURLSameOrigin(requestURL) {\n        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n        return (parsed.protocol === originURL.protocol &&\n            parsed.host === originURL.host);\n      };\n    })() :\n\n  // Non standard browser envs (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return function isURLSameOrigin() {\n        return true;\n      };\n    })()\n);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/helpers/isURLSameOrigin.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\n  utils.forEach(headers, function processHeader(value, name) {\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\n      headers[normalizedName] = value;\n      delete headers[name];\n    }\n  });\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/helpers/normalizeHeaderName.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n// Headers whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nvar ignoreDuplicateOf = [\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n];\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} headers Headers needing to be parsed\n * @returns {Object} Headers parsed into an object\n */\nmodule.exports = function parseHeaders(headers) {\n  var parsed = {};\n  var key;\n  var val;\n  var i;\n\n  if (!headers) { return parsed; }\n\n  utils.forEach(headers.split('\\n'), function parser(line) {\n    i = line.indexOf(':');\n    key = utils.trim(line.substr(0, i)).toLowerCase();\n    val = utils.trim(line.substr(i + 1));\n\n    if (key) {\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\n        return;\n      }\n      if (key === 'set-cookie') {\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\n      } else {\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n      }\n    }\n  });\n\n  return parsed;\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/helpers/parseHeaders.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n * @returns {Function}\n */\nmodule.exports = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/helpers/spread.js?");

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\n\n/*global toString:true*/\n\n// utils is a library of generic helper functions non-specific to axios\n\nvar toString = Object.prototype.toString;\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Array, otherwise false\n */\nfunction isArray(val) {\n  return toString.call(val) === '[object Array]';\n}\n\n/**\n * Determine if a value is undefined\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nfunction isUndefined(val) {\n  return typeof val === 'undefined';\n}\n\n/**\n * Determine if a value is a Buffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Buffer, otherwise false\n */\nfunction isBuffer(val) {\n  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)\n    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nfunction isArrayBuffer(val) {\n  return toString.call(val) === '[object ArrayBuffer]';\n}\n\n/**\n * Determine if a value is a FormData\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nfunction isFormData(val) {\n  return (typeof FormData !== 'undefined') && (val instanceof FormData);\n}\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  var result;\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a String, otherwise false\n */\nfunction isString(val) {\n  return typeof val === 'string';\n}\n\n/**\n * Determine if a value is a Number\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Number, otherwise false\n */\nfunction isNumber(val) {\n  return typeof val === 'number';\n}\n\n/**\n * Determine if a value is an Object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Object, otherwise false\n */\nfunction isObject(val) {\n  return val !== null && typeof val === 'object';\n}\n\n/**\n * Determine if a value is a plain Object\n *\n * @param {Object} val The value to test\n * @return {boolean} True if value is a plain Object, otherwise false\n */\nfunction isPlainObject(val) {\n  if (toString.call(val) !== '[object Object]') {\n    return false;\n  }\n\n  var prototype = Object.getPrototypeOf(val);\n  return prototype === null || prototype === Object.prototype;\n}\n\n/**\n * Determine if a value is a Date\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Date, otherwise false\n */\nfunction isDate(val) {\n  return toString.call(val) === '[object Date]';\n}\n\n/**\n * Determine if a value is a File\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a File, otherwise false\n */\nfunction isFile(val) {\n  return toString.call(val) === '[object File]';\n}\n\n/**\n * Determine if a value is a Blob\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nfunction isBlob(val) {\n  return toString.call(val) === '[object Blob]';\n}\n\n/**\n * Determine if a value is a Function\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nfunction isFunction(val) {\n  return toString.call(val) === '[object Function]';\n}\n\n/**\n * Determine if a value is a Stream\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nfunction isStream(val) {\n  return isObject(val) && isFunction(val.pipe);\n}\n\n/**\n * Determine if a value is a URLSearchParams object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nfunction isURLSearchParams(val) {\n  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;\n}\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n * @returns {String} The String freed of excess whitespace\n */\nfunction trim(str) {\n  return str.replace(/^\\s*/, '').replace(/\\s*$/, '');\n}\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n * nativescript\n *  navigator.product -> 'NativeScript' or 'NS'\n */\nfunction isStandardBrowserEnv() {\n  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||\n                                           navigator.product === 'NativeScript' ||\n                                           navigator.product === 'NS')) {\n    return false;\n  }\n  return (\n    typeof window !== 'undefined' &&\n    typeof document !== 'undefined'\n  );\n}\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n */\nfunction forEach(obj, fn) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction merge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (isPlainObject(result[key]) && isPlainObject(val)) {\n      result[key] = merge(result[key], val);\n    } else if (isPlainObject(val)) {\n      result[key] = merge({}, val);\n    } else if (isArray(val)) {\n      result[key] = val.slice();\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n * @return {Object} The resulting value of object a\n */\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === 'function') {\n      a[key] = bind(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\n/**\n * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)\n *\n * @param {string} content with BOM\n * @return {string} content value without BOM\n */\nfunction stripBOM(content) {\n  if (content.charCodeAt(0) === 0xFEFF) {\n    content = content.slice(1);\n  }\n  return content;\n}\n\nmodule.exports = {\n  isArray: isArray,\n  isArrayBuffer: isArrayBuffer,\n  isBuffer: isBuffer,\n  isFormData: isFormData,\n  isArrayBufferView: isArrayBufferView,\n  isString: isString,\n  isNumber: isNumber,\n  isObject: isObject,\n  isPlainObject: isPlainObject,\n  isUndefined: isUndefined,\n  isDate: isDate,\n  isFile: isFile,\n  isBlob: isBlob,\n  isFunction: isFunction,\n  isStream: isStream,\n  isURLSearchParams: isURLSearchParams,\n  isStandardBrowserEnv: isStandardBrowserEnv,\n  forEach: forEach,\n  merge: merge,\n  extend: extend,\n  trim: trim,\n  stripBOM: stripBOM\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/axios/lib/utils.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  box-sizing: border-box;\\n  font-size: 62.5%;\\n}\\n\\n*,\\n::after,\\n::before {\\n  box-sizing: inherit;\\n  margin: 0;\\n  padding: 0;\\n  line-height: 1.2;\\n}\\n\\nbody {\\n  font-family: \\\"Lato\\\", sans-serif;\\n  background: #ebebeb;\\n  font-size: 1.6rem;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  display: inline-block;\\n}\\n\\ninput {\\n  font-family: inherit;\\n  outline: none;\\n  border: none;\\n  display: inline-block;\\n}\\n\\nlabel {\\n  display: inline-block;\\n}\\n\\nbutton {\\n  font-family: inherit;\\n  border: transparent;\\n  background-color: transparent;\\n  display: inline-block;\\n}\\nbutton:hover {\\n  cursor: pointer;\\n}\\n\\n.top-bar {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  min-height: 10ch;\\n}\\n.top-bar__search {\\n  display: flex;\\n  min-width: 10rem;\\n}\\n.top-bar__search__label {\\n  background-color: white;\\n  border-radius: 10px;\\n  padding: 0 0.5em;\\n  min-height: 5ch;\\n  display: inline-flex;\\n}\\n.top-bar__search__label__input {\\n  margin-left: 0.5em;\\n}\\n.top-bar__search__btn {\\n  background-color: white;\\n  min-height: 5ch;\\n  border-radius: 10px;\\n  font-weight: bold;\\n  padding: 0 0.5em;\\n  margin-left: 0.5em;\\n  width: 8ch;\\n}\\n.top-bar__temp-toggle {\\n  background-color: #fff;\\n  padding: 1.6rem;\\n  border-radius: 100%;\\n  font-weight: bold;\\n}\\n\\n.current-weather {\\n  border-radius: 10px;\\n  color: white;\\n  background: linear-gradient(180deg, #008ee0, #004d7a);\\n  padding: 1.5rem 1rem;\\n  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.25);\\n  display: grid;\\n  grid-template-columns: auto auto;\\n  grid-template-rows: auto;\\n  justify-items: center;\\n  grid-template-areas: \\\"city city\\\" \\\"icon temperature\\\" \\\"status status\\\" \\\"low-high low-high\\\" \\\"stats stats\\\";\\n}\\n.current-weather--night {\\n  background: linear-gradient(180deg, #003452, black);\\n}\\n.current-weather--sunrise-sunset {\\n  background: linear-gradient(180deg, #ff9e1f, #b86800);\\n}\\n.current-weather > *:not(:last-child) {\\n  margin-bottom: 2rem;\\n}\\n.current-weather__city {\\n  font-size: 2.4rem;\\n  font-weight: bold;\\n  grid-area: city;\\n}\\n.current-weather__icon {\\n  width: 8rem;\\n  grid-area: icon;\\n  justify-self: end;\\n}\\n.current-weather__temperature {\\n  font-size: 3.2rem;\\n  font-weight: bold;\\n  grid-area: temperature;\\n  justify-self: start;\\n  align-self: center;\\n  margin-left: 2rem;\\n}\\n.current-weather__status {\\n  font-size: 2.4rem;\\n  font-weight: lighter;\\n  grid-area: status;\\n  text-transform: capitalize;\\n}\\n.current-weather__low-high {\\n  display: flex;\\n  grid-area: low-high;\\n  text-align: center;\\n}\\n.current-weather__low-high > * + * {\\n  margin-left: 2rem;\\n}\\n.current-weather__low-high__temp > span {\\n  font-weight: lighter;\\n  display: block;\\n}\\n.current-weather__stats {\\n  display: flex;\\n  justify-content: center;\\n  grid-area: stats;\\n}\\n.current-weather__stats__info {\\n  display: grid;\\n  grid-template-columns: 4rem 1fr;\\n  grid-template-rows: auto;\\n  grid-template-areas: \\\"icon type\\\" \\\"icon text\\\";\\n}\\n.current-weather__stats__info__icon {\\n  width: 4rem;\\n  grid-area: icon;\\n}\\n.current-weather__stats__info:last-child {\\n  margin-left: 1.6rem;\\n}\\n@media screen and (min-width: 768px) {\\n  .current-weather {\\n    min-height: 30rem;\\n    grid-template-areas: \\\"icon city\\\" \\\"icon temperature\\\" \\\"icon status\\\" \\\"icon low-high\\\" \\\"icon stats\\\";\\n    place-content: center;\\n  }\\n  .current-weather > *:not(:last-child) {\\n    margin: 0;\\n  }\\n  .current-weather > * {\\n    justify-self: start;\\n    align-self: center;\\n  }\\n  .current-weather > *:not([class*=icon]) {\\n    margin-left: 1.5rem;\\n  }\\n  .current-weather__icon {\\n    width: 22rem;\\n    align-self: center;\\n  }\\n  .current-weather__temperature {\\n    align-self: end;\\n  }\\n  .current-weather__status {\\n    align-self: start;\\n  }\\n  .current-weather__low-high span {\\n    display: inline-block;\\n    margin-left: 0.5rem;\\n  }\\n  .current-weather__stats {\\n    align-self: end;\\n  }\\n}\\n@media screen and (min-width: 1200px) {\\n  .current-weather {\\n    min-height: 40rem;\\n  }\\n  .current-weather__icon {\\n    width: 24rem;\\n  }\\n  .current-weather__low-high, .current-weather__stats {\\n    font-size: 2rem;\\n  }\\n}\\n\\n.forecast-display {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.forecast-display > * + * {\\n  margin-top: 1.2rem;\\n}\\n@media screen and (min-width: 992px) {\\n  .forecast-display {\\n    flex-direction: row;\\n    justify-content: space-between;\\n  }\\n  .forecast-display > * + * {\\n    margin: 0;\\n  }\\n}\\n\\n.forecast-display__card {\\n  padding: 0.3em 0.7em;\\n  background-color: white;\\n  border-radius: 10px;\\n  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.25);\\n  display: grid;\\n  grid-template-columns: auto 3fr 2fr;\\n  grid-template-areas: \\\"icon date temp\\\" \\\"icon outlook temp\\\";\\n}\\n.forecast-display__card__date {\\n  font-size: 1.4rem;\\n  grid-area: date;\\n  align-self: end;\\n}\\n.forecast-display__card__icon {\\n  width: 5rem;\\n  grid-area: icon;\\n  margin-right: 0.6rem;\\n}\\n.forecast-display__card__outlook {\\n  font-weight: 300;\\n  font-size: 1.4rem;\\n  grid-area: outlook;\\n}\\n.forecast-display__card__temperature {\\n  display: flex;\\n  align-items: center;\\n  grid-area: temp;\\n  justify-self: end;\\n}\\n.forecast-display__card__temperature > * + * {\\n  margin-left: 1.2rem;\\n}\\n.forecast-display__card__temperature__temp {\\n  display: flex;\\n}\\n.forecast-display__card__temperature__temp__icon {\\n  width: 1.5rem;\\n  margin-right: 0.5rem;\\n}\\n.forecast-display__card__temperature__temp:last-child img {\\n  rotate: 180deg;\\n}\\n@media screen and (min-width: 992px) {\\n  .forecast-display__card {\\n    grid-template-columns: 1fr;\\n    text-align: center;\\n    grid-template-rows: auto;\\n    grid-template-areas: \\\"icon\\\" \\\"date\\\" \\\"outlook\\\" \\\"temp\\\";\\n    flex: 0 1 15%;\\n  }\\n  .forecast-display__card > * {\\n    justify-self: center;\\n    align-self: start;\\n    margin-bottom: 1.5rem;\\n  }\\n  .forecast-display__card__icon {\\n    width: 8rem;\\n  }\\n  .forecast-display__card__date {\\n    font-size: 1.6rem;\\n  }\\n  .forecast-display__card__date__comma {\\n    display: none;\\n  }\\n  .forecast-display__card__date__date-two {\\n    display: block;\\n  }\\n  .forecast-display__card__outlook {\\n    font-size: 1.6rem;\\n  }\\n  .forecast-display__card__temperature {\\n    margin-top: 3rem;\\n  }\\n}\\n@media screen and (min-width: 1200px) {\\n  .forecast-display__card__date, .forecast-display__card__outlook, .forecast-display__card__temperature {\\n    font-size: 2rem;\\n  }\\n}\\n\\n.error-message {\\n  color: #ff0000;\\n  font-weight: bold;\\n  background-color: #fff;\\n  border-radius: 1rem 1rem 0 0;\\n  min-height: 5rem;\\n  text-align: center;\\n  display: flex;\\n  align-items: center;\\n  width: 100%;\\n  position: fixed;\\n  bottom: 0;\\n  transform: translateY(100%);\\n  transition: 1s transform ease;\\n}\\n.error-message.show-error {\\n  transform: translateY(0);\\n}\\n\\n.container {\\n  width: 90%;\\n  max-width: 1000px;\\n  margin: 0 auto;\\n  display: grid;\\n  gap: 4rem;\\n}\\n\\n.five-day-forecast {\\n  margin-bottom: 2rem;\\n}\\n.five-day-forecast__title {\\n  font-size: 2.4rem;\\n  font-weight: 400;\\n  margin-bottom: 1.6rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather-app/./src/scss/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app/components/forecast-weather.js":
/*!************************************************!*\
  !*** ./src/app/components/forecast-weather.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forecastWeatherComponent\": () => (/* binding */ forecastWeatherComponent)\n/* harmony export */ });\n/* harmony import */ var _utils_date_day_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date/day-name */ \"./src/app/utils/date/day-name.js\");\n/* harmony import */ var _utils_date_date_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date/date-name */ \"./src/app/utils/date/date-name.js\");\n/* harmony import */ var _utils_date_month_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/date/month-name */ \"./src/app/utils/date/month-name.js\");\n/* harmony import */ var _utils_dom_insert_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom/insert-icon */ \"./src/app/utils/dom/insert-icon.js\");\n/* harmony import */ var _assets_imgs_triangle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/imgs/triangle.svg */ \"./src/assets/imgs/triangle.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst forecastWeatherComponent = ({ forecastArray }) => {\r\n  const dateObject = new Date();\r\n\r\n  return forecastArray\r\n    .map((data) => {\r\n      dateObject.setDate(dateObject.getDate() + 1);\r\n      return `\r\n      <figure class=\"forecast-display__card\">\r\n          <img\r\n            class=\"forecast-display__card__icon\"\r\n            src=${(0,_utils_dom_insert_icon__WEBPACK_IMPORTED_MODULE_3__.insertIcon)(data.iconID, data.weatherID)}\r\n            alt=\"${data.outlook}\"\r\n          />\r\n\r\n          <p class=\"forecast-display__card__date\">\r\n            <span class=\"forecast-display__card__date__date-one\">${(0,_utils_date_day_name__WEBPACK_IMPORTED_MODULE_0__.dayName)(\r\n              dateObject.getDay()\r\n            )}</span\r\n            ><span\r\n              class=\"forecast-display__card__date__comma\"\r\n              aria-hidden=\"true\"\r\n              >,\r\n            </span>\r\n            <span class=\"forecast-display__card__date__date-two\"\r\n              >${(0,_utils_date_month_name__WEBPACK_IMPORTED_MODULE_2__.monthName)(dateObject.getMonth())} ${(0,_utils_date_date_name__WEBPACK_IMPORTED_MODULE_1__.dateName)(\r\n        dateObject.getDate()\r\n      )}</span\r\n            >\r\n          </p>\r\n\r\n          <p class=\"forecast-display__card__outlook\">${data.outlook}</p>\r\n\r\n          <div class=\"forecast-display__card__temperature\">\r\n            <p class=\"forecast-display__card__temperature__temp\">\r\n              <img\r\n                class=\"forecast-display__card__temperature__temp__icon\"\r\n                src=${_assets_imgs_triangle_svg__WEBPACK_IMPORTED_MODULE_4__}\r\n                alt=\"Low Temperature\"\r\n              />\r\n              <span class=\"forecast-display__card__temperature__num--low\">${Math.round(\r\n                data.lowTemp\r\n              )}</span><span class=\"degree-symbol\">°</span>\r\n            </p>\r\n            <p class=\"forecast-display__card__temperature__temp\">\r\n              <img\r\n                class=\"forecast-display__card__temperature__temp__icon\"\r\n                src=${_assets_imgs_triangle_svg__WEBPACK_IMPORTED_MODULE_4__}\r\n                alt=\"High Temperature\"\r\n              />\r\n              <span class=\"forecast-display__card__temperature__num--high\">${Math.round(\r\n                data.highTemp\r\n              )}</span><span class=\"degree-symbol\">°</span>\r\n            </p>\r\n          </div>\r\n        </figure>\r\n      `;\r\n    })\r\n    .join(\"\");\r\n};\r\n\n\n//# sourceURL=webpack://weather-app/./src/app/components/forecast-weather.js?");

/***/ }),

/***/ "./src/app/components/main-weather.js":
/*!********************************************!*\
  !*** ./src/app/components/main-weather.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainWeatherComponent\": () => (/* binding */ mainWeatherComponent)\n/* harmony export */ });\n/* harmony import */ var _utils_dom_insert_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/insert-icon */ \"./src/app/utils/dom/insert-icon.js\");\n/* harmony import */ var _assets_weather_icons_wind_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/weather-icons/wind.svg */ \"./src/assets/weather-icons/wind.svg\");\n/* harmony import */ var _assets_weather_icons_humidity_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/weather-icons/humidity.svg */ \"./src/assets/weather-icons/humidity.svg\");\n\r\n\r\n\r\n\r\nconst mainWeatherComponent = (\r\n  { cityName, cityLocation, currentWeather },\r\n  unit\r\n) => {\r\n  return `<p class=\"current-weather__city\">${cityName}, ${cityLocation}</p>\r\n    <img\r\n      class=\"current-weather__icon\"\r\n      src=${(0,_utils_dom_insert_icon__WEBPACK_IMPORTED_MODULE_0__.insertIcon)(currentWeather.iconID, currentWeather.weatherID)}\r\n      alt=\"Sunny Weather\"\r\n    />\r\n    <p id=\"currentTemp\" class=\"current-weather__temperature\">${Math.round(\r\n      currentWeather.currentTemp\r\n    )} °</p>\r\n    <p id=\"currentStatus\" class=\"current-weather__status\">${\r\n      currentWeather.statusDescription\r\n    }</p>\r\n    <div class=\"current-weather__low-high\">\r\n      <p class=\"current-weather__low-high__temp\">Low <span>${Math.round(\r\n        currentWeather.lowTemp\r\n      )} °</span></p>\r\n      <p class=\"current-weather__low-high__temp\">High <span>${Math.round(\r\n        currentWeather.highTemp\r\n      )} °</span></p>\r\n    </div>\r\n    <div class=\"current-weather__stats\">\r\n      <div class=\"current-weather__stats__info\">\r\n        <img\r\n          class=\"current-weather__stats__info__icon\"\r\n          src=\"${_assets_weather_icons_wind_svg__WEBPACK_IMPORTED_MODULE_1__}\"\r\n          alt=\"Current Wind\"\r\n        />\r\n        <p class=\"current-weather__stats__info__type\">Wind Speed</p>\r\n        <p class=\"current-weather__stats__info__text\">\r\n          <span id=\"windText\" class=\"current-weather__stats__info__text__value\">${Math.round(\r\n            currentWeather.wind\r\n          )}</span>\r\n          <span id=\"windUnit\" class=\"current-weather__stats__info__text__unit\">${\r\n            unit === \"metric\" ? \"kmh\" : \"mph\"\r\n          }</span>\r\n        </p>\r\n      </div>\r\n      <div class=\"current-weather__stats__info\">\r\n        <img\r\n          class=\"current-weather__stats__info__icon\"\r\n          src=${_assets_weather_icons_humidity_svg__WEBPACK_IMPORTED_MODULE_2__}\r\n          alt=\"Current Humidity\"\r\n        />\r\n        <p class=\"current-weather__stats__info__type\">Humidity</p>\r\n        <p class=\"current-weather__stats__info__text\">\r\n          <span class=\"current-weather__stats__info__text__value\">${Math.round(\r\n            currentWeather.humidity\r\n          )}</span>\r\n          <span class=\"current-weather__stats__info__text__unit\">%</span>\r\n        </p>\r\n      </div>\r\n    </div>`;\r\n};\r\n\n\n//# sourceURL=webpack://weather-app/./src/app/components/main-weather.js?");

/***/ }),

/***/ "./src/app/utils/api-calls/get-weather-data.js":
/*!*****************************************************!*\
  !*** ./src/app/utils/api-calls/get-weather-data.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _weather_class_current_weather_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../weather-class/current.weather.class */ \"./src/app/weather-class/current.weather.class.js\");\n/* harmony import */ var _weather_class_forecast_weather_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../weather-class/forecast.weather.class */ \"./src/app/weather-class/forecast.weather.class.js\");\n/* harmony import */ var _grab_geo_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grab-geo-data */ \"./src/app/utils/api-calls/grab-geo-data.js\");\n\r\n\r\n\r\n\r\n\r\nconst getWeatherData = async (cityName, units, state) => {\r\n  const geoLocationResponse = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(\r\n    `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${state},${\r\n      state ? \"US\" : \"\"\r\n    }&limit=10&appid=a4fd7e05b40980c0b9a29ba9590c0fe8`\r\n  );\r\n\r\n  const targetGeoData = (0,_grab_geo_data__WEBPACK_IMPORTED_MODULE_3__.grabGeoData)(geoLocationResponse.data, cityName, state);\r\n\r\n  const {\r\n    lon: targetLongitude,\r\n    lat: targetLatitude,\r\n    name: targetName,\r\n  } = targetGeoData;\r\n  const targetLocation = state ? targetGeoData.state : targetGeoData.country;\r\n\r\n  const weatherDataResponse = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(\r\n    `https://api.openweathermap.org/data/2.5/onecall?lat=${targetLatitude}&lon=${targetLongitude}&exclude=minutely,hourly,alerts&units=${units}&appid=a4fd7e05b40980c0b9a29ba9590c0fe8`\r\n  );\r\n\r\n  const { current: currentWeatherData } = weatherDataResponse.data;\r\n  const { daily: forecastData } = weatherDataResponse.data;\r\n  forecastData.splice(6);\r\n  const firstForecast = forecastData.shift();\r\n\r\n  const currentWeather = new _weather_class_current_weather_class__WEBPACK_IMPORTED_MODULE_1__.CurrentWeather(\r\n    currentWeatherData.temp,\r\n    firstForecast.temp.min,\r\n    firstForecast.temp.max,\r\n    currentWeatherData.weather[0].main,\r\n    currentWeatherData.weather[0].description,\r\n    currentWeatherData.humidity,\r\n    currentWeatherData.wind_speed,\r\n    currentWeatherData.weather[0].id,\r\n    currentWeatherData.weather[0].icon\r\n  );\r\n\r\n  const forecastArray = forecastData.map((item) => {\r\n    return new _weather_class_forecast_weather_class__WEBPACK_IMPORTED_MODULE_2__.ForecastWeather(\r\n      item.temp.min,\r\n      item.temp.max,\r\n      item.weather[0].main,\r\n      item.weather[0].id,\r\n      item.weather[0].icon\r\n    );\r\n  });\r\n\r\n  return {\r\n    cityName: targetName,\r\n    cityLocation: targetLocation,\r\n    forecastArray,\r\n    currentWeather,\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack://weather-app/./src/app/utils/api-calls/get-weather-data.js?");

/***/ }),

/***/ "./src/app/utils/api-calls/grab-geo-data.js":
/*!**************************************************!*\
  !*** ./src/app/utils/api-calls/grab-geo-data.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"grabGeoData\": () => (/* binding */ grabGeoData)\n/* harmony export */ });\nconst grabGeoData = (geoData, city, state = \"\") => {\r\n  if (geoData.length === 0) throw Error(\"City Not Found\");\r\n  if (!state) return geoData[0];\r\n\r\n  for (let location of geoData) {\r\n    if (!location.hasOwnProperty(\"state\")) continue;\r\n    if (\r\n      location.name.toUpperCase() === city.toUpperCase() &&\r\n      location.state.toUpperCase() === state.toUpperCase()\r\n    ) {\r\n      return location;\r\n    }\r\n  }\r\n\r\n  throw Error(\"City Not Found\");\r\n};\r\n\n\n//# sourceURL=webpack://weather-app/./src/app/utils/api-calls/grab-geo-data.js?");

/***/ }),

/***/ "./src/app/utils/date/date-name.js":
/*!*****************************************!*\
  !*** ./src/app/utils/date/date-name.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dateName\": () => (/* binding */ dateName)\n/* harmony export */ });\nconst dateName = (dateNumber) => {\r\n  const stringNumber = String(dateNumber);\r\n  const lastNumber = stringNumber.charAt(stringNumber.length - 1);\r\n\r\n  if (stringNumber.length === 2 && lastNumber === \"0\") return `${dateNumber}th`;\r\n  switch (lastNumber) {\r\n    case \"1\":\r\n      return `${dateNumber}st`;\r\n    case \"2\":\r\n      return `${dateNumber}nd`;\r\n    case \"3\":\r\n      return `${dateNumber}rd`;\r\n    default:\r\n      return `${dateNumber}th`;\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://weather-app/./src/app/utils/date/date-name.js?");

/***/ }),

/***/ "./src/app/utils/date/day-name.js":
/*!****************************************!*\
  !*** ./src/app/utils/date/day-name.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dayName\": () => (/* binding */ dayName)\n/* harmony export */ });\nconst dayName = (dayNumber) => {\r\n  switch (dayNumber) {\r\n    case 0:\r\n      return \"Sunday\";\r\n    case 1:\r\n      return \"Monday\";\r\n    case 2:\r\n      return \"Tuesday\";\r\n    case 3:\r\n      return \"Wednesday\";\r\n    case 4:\r\n      return \"Thursday\";\r\n    case 5:\r\n      return \"Friday\";\r\n    case 6:\r\n      return \"Saturday\";\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://weather-app/./src/app/utils/date/day-name.js?");

/***/ }),

/***/ "./src/app/utils/date/month-name.js":
/*!******************************************!*\
  !*** ./src/app/utils/date/month-name.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"monthName\": () => (/* binding */ monthName)\n/* harmony export */ });\nconst monthName = (monthNumber) => {\r\n  switch (monthNumber) {\r\n    case 0:\r\n      return \"January\";\r\n    case 1:\r\n      return \"February\";\r\n    case 2:\r\n      return \"March\";\r\n    case 3:\r\n      return \"April\";\r\n    case 4:\r\n      return \"May\";\r\n    case 5:\r\n      return \"June\";\r\n    case 6:\r\n      return \"July\";\r\n    case 7:\r\n      return \"August\";\r\n    case 8:\r\n      return \"September\";\r\n    case 9:\r\n      return \"October\";\r\n    case 10:\r\n      return \"November\";\r\n    case 11:\r\n      return \"December\";\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://weather-app/./src/app/utils/date/month-name.js?");

/***/ }),

/***/ "./src/app/utils/dom/insert-icon.js":
/*!******************************************!*\
  !*** ./src/app/utils/dom/insert-icon.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"insertIcon\": () => (/* binding */ insertIcon)\n/* harmony export */ });\n/* harmony import */ var _assets_weather_icons_day_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/weather-icons/day-partly-cloudy.svg */ \"./src/assets/weather-icons/day-partly-cloudy.svg\");\n/* harmony import */ var _assets_weather_icons_night_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/weather-icons/night-partly-cloudy.svg */ \"./src/assets/weather-icons/night-partly-cloudy.svg\");\n/* harmony import */ var _assets_weather_icons_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/weather-icons/cloudy.svg */ \"./src/assets/weather-icons/cloudy.svg\");\n/* harmony import */ var _assets_weather_icons_rain_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/weather-icons/rain.svg */ \"./src/assets/weather-icons/rain.svg\");\n/* harmony import */ var _assets_weather_icons_light_rain_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/weather-icons/light-rain.svg */ \"./src/assets/weather-icons/light-rain.svg\");\n/* harmony import */ var _assets_weather_icons_snow_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/weather-icons/snow.svg */ \"./src/assets/weather-icons/snow.svg\");\n/* harmony import */ var _assets_weather_icons_storm_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/weather-icons/storm.svg */ \"./src/assets/weather-icons/storm.svg\");\n/* harmony import */ var _assets_weather_icons_day_clear_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/weather-icons/day-clear.svg */ \"./src/assets/weather-icons/day-clear.svg\");\n/* harmony import */ var _assets_weather_icons_night_clear_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/weather-icons/night-clear.svg */ \"./src/assets/weather-icons/night-clear.svg\");\n/* harmony import */ var _assets_weather_icons_day_haze_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/weather-icons/day-haze.svg */ \"./src/assets/weather-icons/day-haze.svg\");\n/* harmony import */ var _assets_weather_icons_night_haze_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/weather-icons/night-haze.svg */ \"./src/assets/weather-icons/night-haze.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst insertIcon = (iconID, weatherID) => {\r\n  \r\n  if (weatherID >= 800) {\r\n    if (iconID === \"01d\") return _assets_weather_icons_day_clear_svg__WEBPACK_IMPORTED_MODULE_7__;\r\n    else if (iconID === \"01n\") return _assets_weather_icons_night_clear_svg__WEBPACK_IMPORTED_MODULE_8__;\r\n    else if (iconID === \"02d\") return _assets_weather_icons_day_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n    else if (iconID === \"02n\") return _assets_weather_icons_night_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n    else return _assets_weather_icons_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__;\r\n  } else if (weatherID >= 700) {\r\n    if (iconID === \"50d\") return _assets_weather_icons_day_haze_svg__WEBPACK_IMPORTED_MODULE_9__;\r\n    else return _assets_weather_icons_night_haze_svg__WEBPACK_IMPORTED_MODULE_10__;\r\n  } else if (weatherID >= 600) return _assets_weather_icons_snow_svg__WEBPACK_IMPORTED_MODULE_5__;\r\n  else if (weatherID >= 500) {\r\n    if (iconID === \"13d\" || iconID === \"13n\") return _assets_weather_icons_snow_svg__WEBPACK_IMPORTED_MODULE_5__;\r\n    else return _assets_weather_icons_rain_svg__WEBPACK_IMPORTED_MODULE_3__;\r\n  } else if (weatherID >= 300) return _assets_weather_icons_light_rain_svg__WEBPACK_IMPORTED_MODULE_4__;\r\n  else return _assets_weather_icons_storm_svg__WEBPACK_IMPORTED_MODULE_6__;\r\n};\r\n\n\n//# sourceURL=webpack://weather-app/./src/app/utils/dom/insert-icon.js?");

/***/ }),

/***/ "./src/app/utils/query/query-destructure.js":
/*!**************************************************!*\
  !*** ./src/app/utils/query/query-destructure.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"queryDestructure\": () => (/* binding */ queryDestructure)\n/* harmony export */ });\nconst queryDestructure = (query) => {\r\n  const userSearchArray = query.replace(/,/, \"\").split(\" \");\r\n  const userCity = userSearchArray\r\n    .slice(0, userSearchArray.length - 1)\r\n    .join(\" \");\r\n  const userState = userSearchArray[userSearchArray.length - 1];\r\n\r\n  return [userCity, userState];\r\n};\r\n\n\n//# sourceURL=webpack://weather-app/./src/app/utils/query/query-destructure.js?");

/***/ }),

/***/ "./src/app/utils/unit-conversion/convert-temp-to-imperial.js":
/*!*******************************************************************!*\
  !*** ./src/app/utils/unit-conversion/convert-temp-to-imperial.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertTempToImperial\": () => (/* binding */ convertTempToImperial)\n/* harmony export */ });\nconst convertTempToImperial = (temperature) => {\r\n  return Math.round(temperature * (9 / 5) + 32);\r\n};\r\n\n\n//# sourceURL=webpack://weather-app/./src/app/utils/unit-conversion/convert-temp-to-imperial.js?");

/***/ }),

/***/ "./src/app/utils/unit-conversion/convert-temp-to-metric.js":
/*!*****************************************************************!*\
  !*** ./src/app/utils/unit-conversion/convert-temp-to-metric.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertTempToMetric\": () => (/* binding */ convertTempToMetric)\n/* harmony export */ });\nconst convertTempToMetric = (temp) => {\r\n  return Math.round((temp - 32) * (5 / 9));\r\n};\r\n\n\n//# sourceURL=webpack://weather-app/./src/app/utils/unit-conversion/convert-temp-to-metric.js?");

/***/ }),

/***/ "./src/app/utils/unit-conversion/convert-wind-to-imperial.js":
/*!*******************************************************************!*\
  !*** ./src/app/utils/unit-conversion/convert-wind-to-imperial.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertWindToImperial\": () => (/* binding */ convertWindToImperial)\n/* harmony export */ });\nconst convertWindToImperial = (speed) => {\r\n  return Math.round(speed / 1.609);\r\n};\r\n\n\n//# sourceURL=webpack://weather-app/./src/app/utils/unit-conversion/convert-wind-to-imperial.js?");

/***/ }),

/***/ "./src/app/utils/unit-conversion/convert-wind-to-metric.js":
/*!*****************************************************************!*\
  !*** ./src/app/utils/unit-conversion/convert-wind-to-metric.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertWindToMetric\": () => (/* binding */ convertWindToMetric)\n/* harmony export */ });\nconst convertWindToMetric = (speed) => {\r\n  return Math.round(speed * 1.609);\r\n};\r\n\n\n//# sourceURL=webpack://weather-app/./src/app/utils/unit-conversion/convert-wind-to-metric.js?");

/***/ }),

/***/ "./src/app/weather-class/current.weather.class.js":
/*!********************************************************!*\
  !*** ./src/app/weather-class/current.weather.class.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CurrentWeather\": () => (/* binding */ CurrentWeather)\n/* harmony export */ });\n/* harmony import */ var _utils_unit_conversion_convert_temp_to_metric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/unit-conversion/convert-temp-to-metric */ \"./src/app/utils/unit-conversion/convert-temp-to-metric.js\");\n/* harmony import */ var _utils_unit_conversion_convert_temp_to_imperial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit-conversion/convert-temp-to-imperial */ \"./src/app/utils/unit-conversion/convert-temp-to-imperial.js\");\n/* harmony import */ var _utils_unit_conversion_convert_wind_to_metric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/unit-conversion/convert-wind-to-metric */ \"./src/app/utils/unit-conversion/convert-wind-to-metric.js\");\n/* harmony import */ var _utils_unit_conversion_convert_wind_to_imperial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/unit-conversion/convert-wind-to-imperial */ \"./src/app/utils/unit-conversion/convert-wind-to-imperial.js\");\n\r\n\r\n\r\n\r\n\r\nclass CurrentWeather {\r\n  constructor(\r\n    currentTemp,\r\n    lowTemp,\r\n    highTemp,\r\n    status,\r\n    statusDescription,\r\n    humidity,\r\n    wind,\r\n    weatherID,\r\n    iconID\r\n  ) {\r\n    this.currentTemp = currentTemp;\r\n    this.lowTemp = lowTemp;\r\n    this.highTemp = highTemp;\r\n    this.status = status;\r\n    this.statusDescription = statusDescription;\r\n    this.humidity = humidity;\r\n    this.wind = wind;\r\n    this.weatherID = weatherID;\r\n    this.iconID = iconID;\r\n  }\r\n\r\n  setToMetric() {\r\n    this.currentTemp = (0,_utils_unit_conversion_convert_temp_to_metric__WEBPACK_IMPORTED_MODULE_0__.convertTempToMetric)(this.currentTemp);\r\n    this.lowTemp = (0,_utils_unit_conversion_convert_temp_to_metric__WEBPACK_IMPORTED_MODULE_0__.convertTempToMetric)(this.lowTemp);\r\n    this.highTemp = (0,_utils_unit_conversion_convert_temp_to_metric__WEBPACK_IMPORTED_MODULE_0__.convertTempToMetric)(this.highTemp);\r\n    this.wind = (0,_utils_unit_conversion_convert_wind_to_metric__WEBPACK_IMPORTED_MODULE_2__.convertWindToMetric)(this.wind);\r\n  }\r\n\r\n  setToImperial() {\r\n    this.currentTemp = (0,_utils_unit_conversion_convert_temp_to_imperial__WEBPACK_IMPORTED_MODULE_1__.convertTempToImperial)(this.currentTemp);\r\n    this.lowTemp = (0,_utils_unit_conversion_convert_temp_to_imperial__WEBPACK_IMPORTED_MODULE_1__.convertTempToImperial)(this.lowTemp);\r\n    this.highTemp = (0,_utils_unit_conversion_convert_temp_to_imperial__WEBPACK_IMPORTED_MODULE_1__.convertTempToImperial)(this.highTemp);\r\n    this.wind = (0,_utils_unit_conversion_convert_wind_to_imperial__WEBPACK_IMPORTED_MODULE_3__.convertWindToImperial)(this.wind);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/app/weather-class/current.weather.class.js?");

/***/ }),

/***/ "./src/app/weather-class/forecast.weather.class.js":
/*!*********************************************************!*\
  !*** ./src/app/weather-class/forecast.weather.class.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ForecastWeather\": () => (/* binding */ ForecastWeather)\n/* harmony export */ });\n/* harmony import */ var _utils_unit_conversion_convert_temp_to_metric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/unit-conversion/convert-temp-to-metric */ \"./src/app/utils/unit-conversion/convert-temp-to-metric.js\");\n/* harmony import */ var _utils_unit_conversion_convert_temp_to_imperial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit-conversion/convert-temp-to-imperial */ \"./src/app/utils/unit-conversion/convert-temp-to-imperial.js\");\n\r\n\r\n\r\nclass ForecastWeather {\r\n  constructor(lowTemp, highTemp, outlook, weatherID, iconID) {\r\n    this.lowTemp = lowTemp;\r\n    this.highTemp = highTemp;\r\n    this.outlook = outlook;\r\n    this.weatherID = weatherID;\r\n    this.iconID = iconID;\r\n  }\r\n\r\n  setToMetric() {\r\n    this.lowTemp = (0,_utils_unit_conversion_convert_temp_to_metric__WEBPACK_IMPORTED_MODULE_0__.convertTempToMetric)(this.lowTemp);\r\n    this.highTemp = (0,_utils_unit_conversion_convert_temp_to_metric__WEBPACK_IMPORTED_MODULE_0__.convertTempToMetric)(this.highTemp);\r\n  }\r\n\r\n  setToImperial() {\r\n    this.lowTemp = (0,_utils_unit_conversion_convert_temp_to_imperial__WEBPACK_IMPORTED_MODULE_1__.convertTempToImperial)(this.lowTemp);\r\n    this.highTemp = (0,_utils_unit_conversion_convert_temp_to_imperial__WEBPACK_IMPORTED_MODULE_1__.convertTempToImperial)(this.highTemp);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/app/weather-class/forecast.weather.class.js?");

/***/ }),

/***/ "./src/app/weather-dom.js":
/*!********************************!*\
  !*** ./src/app/weather-dom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"weatherDOM\": () => (/* binding */ weatherDOM)\n/* harmony export */ });\n/* harmony import */ var _utils_api_calls_get_weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/api-calls/get-weather-data */ \"./src/app/utils/api-calls/get-weather-data.js\");\n/* harmony import */ var _components_main_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-weather */ \"./src/app/components/main-weather.js\");\n/* harmony import */ var _components_forecast_weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/forecast-weather */ \"./src/app/components/forecast-weather.js\");\n/* harmony import */ var _utils_query_query_destructure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/query/query-destructure */ \"./src/app/utils/query/query-destructure.js\");\n\r\n\r\n\r\n\r\n\r\nconst weatherDOM = () => {\r\n  let _weatherDataObject;\r\n  const _staticDOM = {\r\n    searchForm: document.querySelector(\"#searchForm\"),\r\n    unitChangeButton: document.querySelector(\"#unitChangeButton\"),\r\n    currentWeatherSection: document.querySelector(\"#currentWeather\"),\r\n    forecastDisplay: document.querySelector(\"#forecastDisplay\"),\r\n    errorMessage: document.querySelector(\"#errorMessage\"),\r\n    errorText: document.querySelector(\"#errorText\"),\r\n  };\r\n  let _unit = JSON.parse(localStorage.getItem(\"unit\")) || \"imperial\";\r\n\r\n  const _displayErrorMessage = (errorMessage) => {\r\n    _staticDOM.errorText.textContent = errorMessage;\r\n    _staticDOM.errorMessage.classList.add(\"show-error\");\r\n  };\r\n\r\n  const _removeErrorMessage = () => {\r\n    _staticDOM.errorMessage.classList.remove(\"show-error\");\r\n    _staticDOM.errorText.textContent = \"\";\r\n  };\r\n\r\n  const _getNewWeather = async (e) => {\r\n    e.preventDefault();\r\n    _removeErrorMessage();\r\n\r\n    const userSearch = e.target.elements.search.value;\r\n    const cityRegex = /^[A-Za-z.' ]+$/;\r\n    const cityStateRegex = /^[A-Za-z.' ]+$|^[A-Za-z.' ]+, [A-Za-z][A-Za-z]$/;\r\n\r\n    if (cityRegex.test(userSearch)) {\r\n      const userCity = userSearch;\r\n      try {\r\n        _weatherDataObject = await (0,_utils_api_calls_get_weather_data__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(userCity, _unit, \"\");\r\n      } catch (e) {\r\n        _displayErrorMessage(e.message);\r\n        return;\r\n      }\r\n    } else if (cityStateRegex.test(userSearch)) {\r\n      const [userCity, userState] = (0,_utils_query_query_destructure__WEBPACK_IMPORTED_MODULE_3__.queryDestructure)(userSearch);\r\n      try {\r\n        _weatherDataObject = await (0,_utils_api_calls_get_weather_data__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(userCity, _unit, userState);\r\n      } catch (e) {\r\n        _displayErrorMessage(e.message);\r\n        return;\r\n      }\r\n    } else {\r\n      _displayErrorMessage(\"Invalid City Name, Please Try Again\");\r\n      return;\r\n    }\r\n    _setWeatherDOM();\r\n  };\r\n\r\n  const _setWeatherDOM = () => {\r\n    // have everything \"disspear from the screen\" meaing set opacity to 0 and have the loading gif appear in the center of the main html. (NEED TO GO CSS AND DO THIS)\r\n\r\n    const newMainWeather = (0,_components_main_weather__WEBPACK_IMPORTED_MODULE_1__.mainWeatherComponent)(_weatherDataObject, _unit);\r\n    _staticDOM.currentWeatherSection.innerHTML = \"\";\r\n    _staticDOM.currentWeatherSection.innerHTML += newMainWeather;\r\n\r\n    const forecastWeather = (0,_components_forecast_weather__WEBPACK_IMPORTED_MODULE_2__.forecastWeatherComponent)(_weatherDataObject);\r\n    _staticDOM.forecastDisplay.innerHTML = \"\";\r\n    _staticDOM.forecastDisplay.innerHTML += forecastWeather;\r\n  };\r\n\r\n  const _changeWeatherUnits = (e) => {\r\n    const unitButton = e.target;\r\n\r\n    if (_unit === \"imperial\") {\r\n      _unit = \"metric\";\r\n      unitButton.textContent = \"C°\";\r\n      localStorage.setItem(\"unit\", JSON.stringify(\"metric\"));\r\n      _weatherDataObject.currentWeather.setToMetric();\r\n      _weatherDataObject.forecastArray.forEach((forecast) =>\r\n        forecast.setToMetric()\r\n      );\r\n    } else {\r\n      _unit = \"imperial\";\r\n      unitButton.textContent = \"F°\";\r\n      localStorage.setItem(\"unit\", JSON.stringify(\"imperial\"));\r\n      _weatherDataObject.currentWeather.setToImperial();\r\n      _weatherDataObject.forecastArray.forEach((forecast) =>\r\n        forecast.setToImperial()\r\n      );\r\n    }\r\n\r\n    _changeWeatherUnitsDOM();\r\n  };\r\n\r\n  const _changeWeatherUnitsDOM = () => {\r\n    const forecastCards = document.querySelectorAll(\".forecast-display__card\");\r\n    const currentWeatherCard = document.querySelector(\"#currentWeather\");\r\n\r\n    const { forecastArray } = _weatherDataObject;\r\n    const { currentWeather } = _weatherDataObject;\r\n\r\n    for (let i = 0; i < forecastArray.length; i++) {\r\n      forecastCards[i].querySelector(\r\n        \".forecast-display__card__temperature__num--low\"\r\n      ).textContent = `${forecastArray[i].lowTemp}`;\r\n\r\n      forecastCards[i].querySelector(\r\n        \".forecast-display__card__temperature__num--high\"\r\n      ).textContent = `${forecastArray[i].highTemp}`;\r\n    }\r\n\r\n    // current WeatherCard\r\n    currentWeatherCard.querySelector(\r\n      \".current-weather__temperature\"\r\n    ).textContent = `${currentWeather.currentTemp} °`;\r\n\r\n    currentWeatherCard.querySelector(\r\n      \".current-weather__low-high__temp:first-child span\"\r\n    ).textContent = `${currentWeather.lowTemp} °`;\r\n\r\n    currentWeatherCard.querySelector(\r\n      \".current-weather__low-high__temp:last-child span\"\r\n    ).textContent = `${currentWeather.highTemp} °`;\r\n\r\n    currentWeatherCard.querySelector(\r\n      \"#windText\"\r\n    ).textContent = `${currentWeather.wind}`;\r\n\r\n    currentWeatherCard.querySelector(\"#windUnit\").textContent =\r\n      _unit === \"imperial\" ? \"mph\" : \"kmh\";\r\n  };\r\n\r\n  // function to start the program\r\n  const startWeatherApp = async () => {\r\n    _weatherDataObject = await (0,_utils_api_calls_get_weather_data__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(\"dallas\", _unit, \"TX\");\r\n    _setWeatherDOM();\r\n  };\r\n\r\n  // Set Event listeners\r\n  _staticDOM.searchForm.addEventListener(\"submit\", _getNewWeather);\r\n  _staticDOM.unitChangeButton.addEventListener(\"click\", _changeWeatherUnits);\r\n\r\n  _staticDOM.unitChangeButton.textContent = _unit === \"imperial\" ? \"F°\" : \"C°\";\r\n\r\n  return {\r\n    startWeatherApp,\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack://weather-app/./src/app/weather-dom.js?");

/***/ }),

/***/ "./src/assets/imgs/triangle.svg":
/*!**************************************!*\
  !*** ./src/assets/imgs/triangle.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/582565d24ccde5d62824..svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/imgs/triangle.svg?");

/***/ }),

/***/ "./src/assets/weather-icons/cloudy.svg":
/*!*********************************************!*\
  !*** ./src/assets/weather-icons/cloudy.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/8ccd2f9535a68a30b6fc..svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/weather-icons/cloudy.svg?");

/***/ }),

/***/ "./src/assets/weather-icons/day-clear.svg":
/*!************************************************!*\
  !*** ./src/assets/weather-icons/day-clear.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/2a52d703ce514275cb4b..svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/weather-icons/day-clear.svg?");

/***/ }),

/***/ "./src/assets/weather-icons/day-haze.svg":
/*!***********************************************!*\
  !*** ./src/assets/weather-icons/day-haze.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/1d4643665ba58378db7c..svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/weather-icons/day-haze.svg?");

/***/ }),

/***/ "./src/assets/weather-icons/day-partly-cloudy.svg":
/*!********************************************************!*\
  !*** ./src/assets/weather-icons/day-partly-cloudy.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/aaebe8c156a82606f257..svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/weather-icons/day-partly-cloudy.svg?");

/***/ }),

/***/ "./src/assets/weather-icons/humidity.svg":
/*!***********************************************!*\
  !*** ./src/assets/weather-icons/humidity.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/f21e7e9e1127738133ee..svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/weather-icons/humidity.svg?");

/***/ }),

/***/ "./src/assets/weather-icons/light-rain.svg":
/*!*************************************************!*\
  !*** ./src/assets/weather-icons/light-rain.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/afbb686e8bbb89de2d43..svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/weather-icons/light-rain.svg?");

/***/ }),

/***/ "./src/assets/weather-icons/night-clear.svg":
/*!**************************************************!*\
  !*** ./src/assets/weather-icons/night-clear.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/d04e6063c777f3f44783..svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/weather-icons/night-clear.svg?");

/***/ }),

/***/ "./src/assets/weather-icons/night-haze.svg":
/*!*************************************************!*\
  !*** ./src/assets/weather-icons/night-haze.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/eca77581bf8e6b22d607..svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/weather-icons/night-haze.svg?");

/***/ }),

/***/ "./src/assets/weather-icons/night-partly-cloudy.svg":
/*!**********************************************************!*\
  !*** ./src/assets/weather-icons/night-partly-cloudy.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/05e2a078d177c55f5a15..svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/weather-icons/night-partly-cloudy.svg?");

/***/ }),

/***/ "./src/assets/weather-icons/rain.svg":
/*!*******************************************!*\
  !*** ./src/assets/weather-icons/rain.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/4ee98f4868f9ad72626c..svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/weather-icons/rain.svg?");

/***/ }),

/***/ "./src/assets/weather-icons/snow.svg":
/*!*******************************************!*\
  !*** ./src/assets/weather-icons/snow.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/b5365c42c6af14b8c16b..svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/weather-icons/snow.svg?");

/***/ }),

/***/ "./src/assets/weather-icons/storm.svg":
/*!********************************************!*\
  !*** ./src/assets/weather-icons/storm.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/e936ee722436540b1135..svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/weather-icons/storm.svg?");

/***/ }),

/***/ "./src/assets/weather-icons/wind.svg":
/*!*******************************************!*\
  !*** ./src/assets/weather-icons/wind.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/1579ebf56d1a513bf049..svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/weather-icons/wind.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _app_weather_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/weather-dom */ \"./src/app/weather-dom.js\");\n\r\n\r\n\r\nconst start = (0,_app_weather_dom__WEBPACK_IMPORTED_MODULE_1__.weatherDOM)();\r\nstart.startWeatherApp();\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;