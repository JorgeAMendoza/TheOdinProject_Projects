(()=>{var e={669:(e,t,r)=>{e.exports=r(609)},448:(e,t,r)=>{"use strict";var n=r(867),s=r(26),a=r(372),o=r(327),i=r(97),c=r(109),u=r(985),p=r(61);e.exports=function(e){return new Promise((function(t,r){var f=e.data,l=e.headers;n.isFormData(f)&&delete l["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";l.Authorization="Basic "+btoa(d+":"+m)}var _=i(e.baseURL,e.url);if(h.open(e.method.toUpperCase(),o(_,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in h?c(h.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:n,config:e,request:h};s(t,r,a),h=null}},h.onabort=function(){h&&(r(p("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){r(p("Network Error",e,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(p(t,e,"ECONNABORTED",h)),h=null},n.isStandardBrowserEnv()){var g=(e.withCredentials||u(_))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;g&&(l[e.xsrfHeaderName]=g)}if("setRequestHeader"in h&&n.forEach(l,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete l[t]:h.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),e.responseType)try{h.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){h&&(h.abort(),r(e),h=null)})),f||(f=null),h.send(f)}))}},609:(e,t,r)=>{"use strict";var n=r(867),s=r(849),a=r(321),o=r(185);function i(e){var t=new a(e),r=s(a.prototype.request,t);return n.extend(r,a.prototype,t),n.extend(r,t),r}var c=i(r(655));c.Axios=a,c.create=function(e){return i(o(c.defaults,e))},c.Cancel=r(263),c.CancelToken=r(972),c.isCancel=r(502),c.all=function(e){return Promise.all(e)},c.spread=r(713),c.isAxiosError=r(268),e.exports=c,e.exports.default=c},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,r)=>{"use strict";var n=r(263);function s(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.source=function(){var e;return{token:new s((function(t){e=t})),cancel:e}},e.exports=s},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,r)=>{"use strict";var n=r(867),s=r(327),a=r(782),o=r(572),i=r(185);function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[o,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=i(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(i(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,n){return this.request(i(n||{},{method:e,url:t,data:r}))}})),e.exports=c},782:(e,t,r)=>{"use strict";var n=r(867);function s(){this.handlers=[]}s.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},s.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=s},97:(e,t,r)=>{"use strict";var n=r(793),s=r(303);e.exports=function(e,t){return e&&!n(t)?s(e,t):t}},61:(e,t,r)=>{"use strict";var n=r(481);e.exports=function(e,t,r,s,a){var o=new Error(e);return n(o,t,r,s,a)}},572:(e,t,r)=>{"use strict";var n=r(867),s=r(527),a=r(502),o=r(655);function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return i(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return i(e),t.data=s(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(i(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,r,n,s){return e.config=t,r&&(e.code=r),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},185:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){t=t||{};var r={},s=["url","method","data"],a=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function c(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function u(s){n.isUndefined(t[s])?n.isUndefined(e[s])||(r[s]=c(void 0,e[s])):r[s]=c(e[s],t[s])}n.forEach(s,(function(e){n.isUndefined(t[e])||(r[e]=c(void 0,t[e]))})),n.forEach(a,u),n.forEach(o,(function(s){n.isUndefined(t[s])?n.isUndefined(e[s])||(r[s]=c(void 0,e[s])):r[s]=c(void 0,t[s])})),n.forEach(i,(function(n){n in t?r[n]=c(e[n],t[n]):n in e&&(r[n]=c(void 0,e[n]))}));var p=s.concat(a).concat(o).concat(i),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===p.indexOf(e)}));return n.forEach(f,u),r}},26:(e,t,r)=>{"use strict";var n=r(61);e.exports=function(e,t,r){var s=r.config.validateStatus;r.status&&s&&!s(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},527:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},655:(e,t,r)=>{"use strict";var n=r(867),s=r(16),a={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,c={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(i=r(448)),i),transformRequest:[function(e,t){return s(t,"Accept"),s(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(a)})),e.exports=c},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},327:(e,t,r)=>{"use strict";var n=r(867);function s(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var a;if(r)a=r(t);else if(n.isURLSearchParams(t))a=t.toString();else{var o=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),o.push(s(t)+"="+s(e))})))})),a=o.join("&")}if(a){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,s,a,o){var i=[];i.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),n.isString(s)&&i.push("path="+s),n.isString(a)&&i.push("domain="+a),!0===o&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},268:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},985:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function s(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=s(window.location.href),function(t){var r=n.isString(t)?s(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},16:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},109:(e,t,r)=>{"use strict";var n=r(867),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,a,o={};return e?(n.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=n.trim(e.substr(0,a)).toLowerCase(),r=n.trim(e.substr(a+1)),t){if(o[t]&&s.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},867:(e,t,r)=>{"use strict";var n=r(849),s=Object.prototype.toString;function a(e){return"[object Array]"===s.call(e)}function o(e){return void 0===e}function i(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==s.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===s.call(e)}function p(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:function(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isPlainObject:c,isUndefined:o,isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:u,isStream:function(e){return i(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:p,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):a(r)?t[n]=r.slice():t[n]=r}for(var n=0,s=arguments.length;n<s;n++)p(arguments[n],r);return t},extend:function(e,t,r){return p(t,(function(t,s){e[s]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},671:(e,t,r)=>{"use strict";e.exports=r.p+"imgs/582565d24ccde5d62824..svg"},400:(e,t,r)=>{"use strict";e.exports=r.p+"imgs/8ccd2f9535a68a30b6fc..svg"},228:(e,t,r)=>{"use strict";e.exports=r.p+"imgs/2a52d703ce514275cb4b..svg"},326:(e,t,r)=>{"use strict";e.exports=r.p+"imgs/1d4643665ba58378db7c..svg"},470:(e,t,r)=>{"use strict";e.exports=r.p+"imgs/aaebe8c156a82606f257..svg"},840:(e,t,r)=>{"use strict";e.exports=r.p+"imgs/f21e7e9e1127738133ee..svg"},598:(e,t,r)=>{"use strict";e.exports=r.p+"imgs/afbb686e8bbb89de2d43..svg"},996:(e,t,r)=>{"use strict";e.exports=r.p+"imgs/d04e6063c777f3f44783..svg"},128:(e,t,r)=>{"use strict";e.exports=r.p+"imgs/a6faf63769abe5f3fab1..svg"},563:(e,t,r)=>{"use strict";e.exports=r.p+"imgs/05e2a078d177c55f5a15..svg"},975:(e,t,r)=>{"use strict";e.exports=r.p+"imgs/4ee98f4868f9ad72626c..svg"},915:(e,t,r)=>{"use strict";e.exports=r.p+"imgs/b5365c42c6af14b8c16b..svg"},315:(e,t,r)=>{"use strict";e.exports=r.p+"imgs/e936ee722436540b1135..svg"},383:(e,t,r)=>{"use strict";e.exports=r.p+"imgs/1579ebf56d1a513bf049..svg"}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{"use strict";var e=r(669),t=r.n(e);const n=e=>Math.round(5/9*(e-32)),s=e=>Math.round(1.8*e+32);class a{constructor(e,t,r,n,s,a,o,i,c){this.currentTemp=e,this.lowTemp=t,this.highTemp=r,this.status=n,this.statusDescription=s,this.humidity=a,this.wind=o,this.weatherID=i,this.iconID=c}setToMetric(){var e;this.currentTemp=n(this.currentTemp),this.lowTemp=n(this.lowTemp),this.highTemp=n(this.highTemp),this.wind=(e=this.wind,Math.round(1.609*e))}setToImperial(){var e;this.currentTemp=s(this.currentTemp),this.lowTemp=s(this.lowTemp),this.highTemp=s(this.highTemp),this.wind=(e=this.wind,Math.round(e/1.609))}}class o{constructor(e,t,r,n,s){this.lowTemp=e,this.highTemp=t,this.outlook=r,this.weatherID=n,this.iconID=s}setToMetric(){this.lowTemp=n(this.lowTemp),this.highTemp=n(this.highTemp)}setToImperial(){this.lowTemp=s(this.lowTemp),this.highTemp=s(this.highTemp)}}const i=async(e,r,n)=>{const s=((e,t,r="")=>{if(0===e.length)throw Error("City Not Found");if(!r)return e[0];for(let n of e)if(n.hasOwnProperty("state")&&n.name.toUpperCase()===t.toUpperCase()&&n.state.toUpperCase()===r.toUpperCase())return n;throw Error("City Not Found")})((await t().get(`https://api.openweathermap.org/geo/1.0/direct?q=${e},${n},${n?"US":""}&limit=10&appid=a4fd7e05b40980c0b9a29ba9590c0fe8`)).data,e,n),{lon:i,lat:c,name:u}=s,p=n?s.state:s.country,f=await t().get(`https://api.openweathermap.org/data/2.5/onecall?lat=${c}&lon=${i}&exclude=minutely,hourly,alerts&units=${r}&appid=a4fd7e05b40980c0b9a29ba9590c0fe8`),{current:l}=f.data,{daily:h}=f.data;h.splice(6);const d=h.shift(),m=new a(l.temp,d.temp.min,d.temp.max,l.weather[0].main,l.weather[0].description,l.humidity,l.wind_speed,l.weather[0].id,l.weather[0].icon);return{cityName:u,cityLocation:p,forecastArray:h.map((e=>new o(e.temp.min,e.temp.max,e.weather[0].main,e.weather[0].id,e.weather[0].icon))),currentWeather:m}};var c=r(470),u=r(563),p=r(400),f=r(975),l=r(598),h=r(915),d=r(315),m=r(228),_=r(996),g=r(326),y=r(128);const w=(e,t)=>t>=800?"01d"===e?m:"01n"===e?_:"02d"===e?c:"02n"===e?u:p:t>=700?"50d"===e?g:y:t>=600?h:t>=500?"13d"===e||"13n"===e?h:f:t>=300?l:d;var v=r(383),x=r(840);var b=r(671);const T=({forecastArray:e})=>{const t=new Date;return e.map((e=>(t.setDate(t.getDate()+1),`\n      <figure class="forecast-display__card">\n          <img\n            class="forecast-display__card__icon"\n            src=${w(e.iconID,e.weatherID)}\n            alt="${e.outlook}"\n          />\n\n          <p class="forecast-display__card__date">\n            <span class="forecast-display__card__date__date-one">${(e=>{switch(e){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday"}})(t.getDay())}</span\n            ><span\n              class="forecast-display__card__date__comma"\n              aria-hidden="true"\n              >,\n            </span>\n            <span class="forecast-display__card__date__date-two"\n              >${(e=>{switch(e){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December"}})(t.getMonth())} ${(e=>{const t=String(e),r=t.charAt(t.length-1);if(2===t.length&&"0"===r)return`${e}th`;switch(r){case"1":return`${e}st`;case"2":return`${e}nd`;case"3":return`${e}rd`;default:return`${e}th`}})(t.getDate())}</span\n            >\n          </p>\n\n          <p class="forecast-display__card__outlook">${e.outlook}</p>\n\n          <div class="forecast-display__card__temperature">\n            <p class="forecast-display__card__temperature__temp">\n              <img\n                class="forecast-display__card__temperature__temp__icon"\n                src=${b}\n                alt="Low Temperature"\n              />\n              <span class="forecast-display__card__temperature__num--low">${Math.round(e.lowTemp)}</span><span class="degree-symbol">°</span>\n            </p>\n            <p class="forecast-display__card__temperature__temp">\n              <img\n                class="forecast-display__card__temperature__temp__icon"\n                src=${b}\n                alt="High Temperature"\n              />\n              <span class="forecast-display__card__temperature__num--high">${Math.round(e.highTemp)}</span><span class="degree-symbol">°</span>\n            </p>\n          </div>\n        </figure>\n      `))).join("")};(()=>{const e={searchForm:document.querySelector("#searchForm"),unitChangeButton:document.querySelector("#unitChangeButton"),currentWeatherSection:document.querySelector("#currentWeather"),forecastDisplay:document.querySelector("#forecastDisplay"),errorMessage:document.querySelector("#errorMessage"),errorText:document.querySelector("#errorText")};let t,r=JSON.parse(localStorage.getItem("unit"))||"imperial",n=!1;const s=t=>{e.errorText.textContent=t,e.errorMessage.classList.add("show-error")},a=()=>{const s=(({cityName:e,cityLocation:t,currentWeather:r},n)=>`<p class="current-weather__city">${e}, ${t}</p>\n    <img\n      class="current-weather__icon"\n      src=${w(r.iconID,r.weatherID)}\n      alt="Sunny Weather"\n    />\n    <p id="currentTemp" class="current-weather__temperature">${Math.round(r.currentTemp)} °</p>\n    <p id="currentStatus" class="current-weather__status">${r.statusDescription}</p>\n    <div class="current-weather__low-high">\n      <p class="current-weather__low-high__temp">Low <span>${Math.round(r.lowTemp)} °</span></p>\n      <p class="current-weather__low-high__temp">High <span>${Math.round(r.highTemp)} °</span></p>\n    </div>\n    <div class="current-weather__stats">\n      <div class="current-weather__stats__info">\n        <img\n          class="current-weather__stats__info__icon"\n          src="${v}"\n          alt="Current Wind"\n        />\n        <p class="current-weather__stats__info__type">Wind Speed</p>\n        <p class="current-weather__stats__info__text">\n          <span id="windText" class="current-weather__stats__info__text__value">${Math.round(r.wind)}</span>\n          <span id="windUnit" class="current-weather__stats__info__text__unit">${"metric"===n?"kmh":"mph"}</span>\n        </p>\n      </div>\n      <div class="current-weather__stats__info">\n        <img\n          class="current-weather__stats__info__icon"\n          src=${x}\n          alt="Current Humidity"\n        />\n        <p class="current-weather__stats__info__type">Humidity</p>\n        <p class="current-weather__stats__info__text">\n          <span class="current-weather__stats__info__text__value">${Math.round(r.humidity)}</span>\n          <span class="current-weather__stats__info__text__unit">%</span>\n        </p>\n      </div>\n    </div>`)(t,r);e.currentWeatherSection.innerHTML="",e.currentWeatherSection.innerHTML+=s;const a=T(t);e.forecastDisplay.innerHTML="",e.forecastDisplay.innerHTML+=a,n=!1},o=()=>{const e=document.querySelectorAll(".forecast-display__card"),n=document.querySelector("#currentWeather"),{forecastArray:s}=t,{currentWeather:a}=t;for(let t=0;t<s.length;t++)e[t].querySelector(".forecast-display__card__temperature__num--low").textContent=`${s[t].lowTemp}`,e[t].querySelector(".forecast-display__card__temperature__num--high").textContent=`${s[t].highTemp}`;n.querySelector(".current-weather__temperature").textContent=`${a.currentTemp} °`,n.querySelector(".current-weather__low-high__temp:first-child span").textContent=`${a.lowTemp} °`,n.querySelector(".current-weather__low-high__temp:last-child span").textContent=`${a.highTemp} °`,n.querySelector("#windText").textContent=`${a.wind}`,n.querySelector("#windUnit").textContent="imperial"===r?"mph":"kmh"};return e.searchForm.addEventListener("submit",(async o=>{if(o.preventDefault(),n)return;n=!0,e.errorMessage.classList.remove("show-error"),e.errorText.textContent="";const c=o.target.elements.search.value;if(/^[A-Za-z.' ]+$/.test(c)){const e=c;try{t=await i(e,r,"")}catch(o){return void s(o.message)}}else{if(!/^[A-Za-z.' ]+$|^[A-Za-z.' ]+, [A-Za-z][A-Za-z]$/.test(c))return void s("Invalid City Name, Please Try Again");{const[e,n]=(e=>{const t=e.replace(/,/,"").split(" ");return[t.slice(0,t.length-1).join(" "),t[t.length-1]]})(c);try{t=await i(e,r,n)}catch(o){return void s(o.message)}}}a()})),e.unitChangeButton.addEventListener("click",(e=>{const n=e.target;"imperial"===r?(r="metric",n.textContent="C°",localStorage.setItem("unit",JSON.stringify("metric")),t.currentWeather.setToMetric(),t.forecastArray.forEach((e=>e.setToMetric()))):(r="imperial",n.textContent="F°",localStorage.setItem("unit",JSON.stringify("imperial")),t.currentWeather.setToImperial(),t.forecastArray.forEach((e=>e.setToImperial()))),o()})),e.unitChangeButton.textContent="imperial"===r?"F°":"C°",{startWeatherApp:async()=>{t=await i("dallas",r,"TX"),a()}}})().startWeatherApp()})()})();