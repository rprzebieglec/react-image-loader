!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["shared-components"]=t(require("react")):e["shared-components"]=t(e.react)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(4)},function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),f=n(u),l=r(3),p=n(l),d=function(e){function t(e){o(this,t);var r=i(this,Object.getPrototypeOf(t).call(this,e));return r.state={isLoading:!0,src:""},r}return c(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this,t=new Image;t.src=this.props.src,t.onload=function(){e.setState({src:t.src,isLoading:!1}),e.props.onLoad&&e.props.onLoad(t)},t.onerror=function(t){e.setState({src:"",isLoading:!1}),e.props.onError&&e.props.onError(t)}}},{key:"render",value:function(){return this.state.isLoading?f["default"].createElement(p["default"],{src:this.props.spinnerSrc}):f["default"].createElement("img",s({className:"ril--image",src:this.state.src,alt:this.props.alt},this.props))}}]),t}(f["default"].Component);t["default"]=d},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(1),u=n(a),f=r(5),l=function(e){function t(e){o(this,t);var r=i(this,Object.getPrototypeOf(t).call(this,e));return r.state={src:""},r}return c(t,e),s(t,[{key:"componentDidMount",value:function(){var e="";e=this.props.src?this.props.src:"data:image/svg+xml;base64,"+btoa(f),this.setState({src:e})}},{key:"render",value:function(){return u["default"].createElement("img",{className:"ril--spinner",src:this.state.src})}}]),t}(u["default"].Component);t["default"]=l},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=r(2),i=n(o);e.exports=i["default"]},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" stroke="#fff"><style type="text/css"> #c1, #c2 { animation: size cubic-bezier(0.165, 0.84, 0.44, 1) 1.8s, opacity cubic-bezier(0.3, 0.61, 0.355, 1) 1.8s; animation-iteration-count: infinite; transform-origin: 50% 50%; opacity: 0; } #c2 { animation-delay: 0.9s; } @keyframes size{ 0% { transform: scale(0); } 100% { transform: scale(1); } } @keyframes opacity{ 15% { opacity: 1; } 100% { opacity: 0; } } </style><g fill="none" fill-rule="evenodd" stroke-width="3"><circle cx="22" cy="22" r="20" id="c1"></circle><circle cx="22" cy="22" r="20" id="c2"></circle></g></svg>'}])});