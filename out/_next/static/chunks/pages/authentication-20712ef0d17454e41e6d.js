_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},a=r("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,c=void 0!==a&&a;return r||o&&c}},"20a2":function(e,t,r){e.exports=r("nOHt")},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Kt/":function(e,t,r){"use strict";var n=r("lSNA");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var a,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),i=(a=r("Xuae"))&&a.__esModule?a:{default:a},s=r("lwAK"),u=r("FYa8"),l=r("/0+H");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var b=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=c.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=b.length;s<u;s++){var l=b[s];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?a=!1:r.add(l);else{var f=o.props[l],p=n[l]||new Set;"name"===l&&c||!p.has(f)?(p.add(f),n[l]=p):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:a})}))}function m(e){var t=e.children,r=(0,c.useContext)(s.AmpStateContext),n=(0,c.useContext)(u.HeadManagerContext);return c.default.createElement(i.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)}m.rewind=function(){};var j=m;t.default=j},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},BsWD:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("a3WO");function o(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},ODXe:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("BsWD");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(s){o=!0,a=s}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),c=r("Bnag");e.exports=function(e){return n(e)||o(e)||a(e)||c()}},SMlj:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r("p46w"),o=r.n(n),a=r("20a2"),c=r.n(a),i=function(e){o.a.set("token",e),c.a.push("/")},s=function(e,t){e.req?(e.res.writeHead(302,{Location:t}),e.res.end()):c.a.push(t)},u=function(){o.a.remove("token"),c.a.push("/")}},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),o=r("lwsE"),a=r("W8MJ"),c=(r("PJYZ"),r("7W2i")),i=r("a1gu"),s=r("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}t.__esModule=!0,t.default=void 0;var l=r("q1tI"),f=function(e){c(r,e);var t=u(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=f},a1gu:function(e,t,r){var n=r("cDf5"),o=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},a3WO:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},eGLW:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authentication",function(){return r("eShx")}])},eShx:function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),o=r("q1tI"),a=r.n(o),c=r("Ix5F"),i=r("g4pe"),s=r.n(i),u=r("o0o1"),l=r.n(u),f=r("HaE+"),p=r("rePB"),d=r("ODXe"),b=r("aLZG"),h=r("bTjV"),m=r("YFqc"),j=r.n(m),v=r("vDqi"),O=r.n(v),y=r("xUX2"),g=r("rjN7"),w=r("SMlj");function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){Object(p.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S={email:"",password:""},C=function(){var e=a.a.useState(S),t=Object(d.a)(e,2),r=t[0],o=t[1],c=a.a.useState(!0),i=Object(d.a)(c,2),s=i[0],u=i[1],m=a.a.useState(!1),v=Object(d.a)(m,2),x=v[0],C=v[1],k=a.a.useState(""),_=Object(d.a)(k,2),N=_[0],M=_[1];a.a.useEffect((function(){var e=Object.values(r).every((function(e){return Boolean(e)}));u(!e)}),[r]);var E=function(e){var t=e.target,r=t.name,n=t.value;o((function(e){return P(P({},e),{},Object(p.a)({},r,n))}))},D=function(){var e=Object(f.a)(l.a.mark((function e(t){var n,o,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,C(!0),M(""),n="".concat(g.a,"/api/v1/auth/signin"),o=P({},r),e.next=8,O.a.post(n,o);case 8:a=e.sent,Object(w.a)(a.data),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),Object(y.a)(e.t0,M);case 15:return e.prev=15,C(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"login-form",children:[Object(n.jsx)("h2",{children:"Login"}),Object(n.jsx)(b.a,{color:"danger",isOpen:!!N,toggle:function(){return M(!1)},children:N}),Object(n.jsxs)("form",{onSubmit:D,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Email"}),Object(n.jsx)("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",value:r.email,onChange:E})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Password"}),Object(n.jsx)("input",{className:"form-control",placeholder:"Password",name:"password",type:"password",value:r.password,onChange:E})]}),Object(n.jsxs)("div",{className:"row align-items-center",children:[Object(n.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6 remember-me-wrap",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("input",{type:"checkbox",id:"test2"}),Object(n.jsx)("label",{htmlFor:"test2",children:"Remember me"})]})}),Object(n.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap",children:Object(n.jsx)(j.a,{href:"/reset-password",children:Object(n.jsx)("a",{className:"lost-your-password",children:"Lost your password?"})})})]}),Object(n.jsxs)("button",{type:"submit",disabled:s,children:["Log In",x?Object(n.jsx)(h.a,{color:"success"}):""]})]})]})};function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){Object(p.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N={name:"",email:"",password:"",confirmPassword:""},M=function(){var e=a.a.useState(N),t=Object(d.a)(e,2),r=t[0],o=t[1],c=a.a.useState(!0),i=Object(d.a)(c,2),s=i[0],u=i[1],m=a.a.useState(!1),j=Object(d.a)(m,2),v=j[0],x=j[1],P=a.a.useState(""),S=Object(d.a)(P,2),C=S[0],k=S[1];a.a.useEffect((function(){var e=Object.values(r).every((function(e){return Boolean(e)}));u(!e)}),[r]);var M=function(e){var t=e.target,r=t.name,n=t.value;o((function(e){return _(_({},e),{},Object(p.a)({},r,n))}))},E=function(){var e=Object(f.a)(l.a.mark((function e(t){var n,o,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,x(!0),k(""),n="".concat(g.a,"/api/v1/auth/signup"),o=_({},r),e.next=8,O.a.post(n,o);case 8:a=e.sent,Object(w.a)(a.data),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),Object(y.a)(e.t0,k);case 15:return e.prev=15,x(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"register-form",children:[Object(n.jsx)("h2",{children:"Register"}),Object(n.jsx)(b.a,{color:"danger",isOpen:!!C,toggle:function(){return k(!1)},children:C}),Object(n.jsxs)("form",{onSubmit:E,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Name"}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Full Name",name:"name",value:r.name,onChange:M})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Email"}),Object(n.jsx)("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",value:r.email,onChange:M})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Password"}),Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",value:r.password,onChange:M})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Confirm Password"}),Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Confirm Password",name:"confirmPassword",value:r.confirmPassword,onChange:M})]}),Object(n.jsx)("p",{className:"description",children:'The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )'}),Object(n.jsxs)("button",{type:"submit",disabled:s,children:["Register",v?Object(n.jsx)(h.a,{color:"success"}):""]})]})]})};t.default=function(){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(s.a,{children:Object(n.jsx)("title",{children:"Rivguru - Your Career Partner"})}),Object(n.jsx)(c.a,{pageTitle:"Authentication",homePageUrl:"/",homePageText:"Home",activePageText:"Authentication"}),Object(n.jsx)("div",{className:"profile-authentication-area ptb-100",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-lg-6 col-md-12",children:Object(n.jsx)(C,{})}),Object(n.jsx)("div",{className:"col-lg-6 col-md-12",children:Object(n.jsx)(M,{})})]})})})]})}},g4pe:function(e,t,r){e.exports=r("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},p46w:function(e,t,r){var n,o;!function(a){if(void 0===(o="function"===typeof(n=a)?n.call(t,r,t,e):n)||(e.exports=o),!0,e.exports=a(),!!0){var c=window.Cookies,i=window.Cookies=a();i.noConflict=function(){return window.Cookies=c,i}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var n in r)t[n]=r[n]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function o(){}function a(t,r,a){if("undefined"!==typeof document){"number"===typeof(a=e({path:"/"},o.defaults,a)).expires&&(a.expires=new Date(1*new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var c=JSON.stringify(r);/^[\{\[]/.test(c)&&(r=c)}catch(u){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var i="";for(var s in a)a[s]&&(i+="; "+s,!0!==a[s]&&(i+="="+a[s].split(";")[0]));return document.cookie=t+"="+r+i}}function c(e,r){if("undefined"!==typeof document){for(var o={},a=document.cookie?document.cookie.split("; "):[],c=0;c<a.length;c++){var i=a[c].split("="),s=i.slice(1).join("=");r||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var u=t(i[0]);if(s=(n.read||n)(s,u)||t(s),r)try{s=JSON.parse(s)}catch(l){}if(o[u]=s,e===u)break}catch(l){}}return e?o[e]:o}}return o.set=a,o.get=function(e){return c(e,!1)},o.getJSON=function(e){return c(e,!0)},o.remove=function(t,r){a(t,"",e(r,{expires:-1}))},o.defaults={},o.withConverter=r,o}((function(){}))}))},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},wx14:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},zLVn:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,"a",(function(){return n}))}},[["eGLW",0,2,1,4,6,11]]]);