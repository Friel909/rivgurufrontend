_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[49],{Ix5F:function(e,t,n){"use strict";var r=n("nKUr"),a=(n("q1tI"),n("YFqc")),i=n.n(a);t.a=function(e){var t=e.pageTitle,n=e.homePageUrl,a=e.homePageText,o=e.activePageText;return Object(r.jsxs)("div",{className:"page-title-area",children:[Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"page-title-content",children:[Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(i.a,{href:n,children:Object(r.jsx)("a",{children:a})})}),Object(r.jsx)("li",{className:"active",children:o})]}),Object(r.jsx)("h2",{children:t})]})}),Object(r.jsx)("div",{className:"shape9",children:Object(r.jsx)("img",{src:"/images/shape8.svg",alt:"image"})})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var i=a(n("q1tI")),o=n("elyg"),c=n("nOHt"),l=n("vNVm"),s={};function u(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),a=n&&n.asPath||"/",d=i.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,o.resolveHref)(a,e.as):c||i}}),[a,e.href,e.as]),p=d.href,f=d.as,h=e.children,b=e.replace,m=e.shallow,j=e.scroll,v=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=i.Children.only(h),x=g&&"object"===typeof g&&g.ref,O=(0,l.useIntersection)({rootMargin:"200px"}),y=r(O,2),w=y[0],E=y[1],A=i.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);(0,i.useEffect)((function(){var e=E&&t&&(0,o.isLocalURL)(p),r="undefined"!==typeof v?v:n&&n.locale,a=s[p+"%"+f+(r?"%"+r:"")];e&&!a&&u(n,p,f,{locale:r})}),[f,p,E,v,t,n]);var I={ref:A,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:i,locale:l,scroll:c}))}(e,n,p,f,b,m,j,v)},onMouseEnter:function(e){(0,o.isLocalURL)(p)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(n,p,f,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var P="undefined"!==typeof v?v:n&&n.locale,N=n&&n.isLocaleDomain&&(0,o.getDomainLocale)(f,P,n&&n.locales,n&&n.domainLocales);I.href=N||(0,o.addBasePath)((0,o.addLocale)(f,P,n&&n.defaultLocale))}return i.default.cloneElement(g,I)};t.default=d},csvi:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("q1tI"),i=n.n(a),o=n("Ix5F");function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?j(e):t}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return v(this,n)}}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=function e(t){var n=this,r=t.expanded,a=void 0===r?[]:r,i=t.allowMultipleExpanded,o=void 0!==i&&i,l=t.allowZeroExpanded,s=void 0!==l&&l;c(this,e),u(this,"expanded",void 0),u(this,"allowMultipleExpanded",void 0),u(this,"allowZeroExpanded",void 0),u(this,"toggleExpanded",(function(e){return n.isItemDisabled(e)?n:n.isItemExpanded(e)?n.augment({expanded:n.expanded.filter((function(t){return t!==e}))}):n.augment({expanded:n.allowMultipleExpanded?[].concat(O(n.expanded),[e]):[e]})})),u(this,"isItemDisabled",(function(e){var t=n.isItemExpanded(e),r=1===n.expanded.length;return Boolean(t&&!n.allowZeroExpanded&&r)})),u(this,"isItemExpanded",(function(e){return-1!==n.expanded.indexOf(e)})),u(this,"getPanelAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e);return{role:n.allowMultipleExpanded?void 0:"region","aria-hidden":n.allowMultipleExpanded?!r:void 0,"aria-labelledby":n.getButtonId(e),id:n.getPanelId(e),hidden:!r||void 0}})),u(this,"getHeadingAttributes",(function(){return{role:"heading"}})),u(this,"getButtonAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e),a=n.isItemDisabled(e);return{id:n.getButtonId(e),"aria-disabled":a,"aria-expanded":r,"aria-controls":n.getPanelId(e),role:"button",tabIndex:0}})),u(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),u(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),u(this,"augment",(function(t){return new e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({expanded:n.expanded,allowMultipleExpanded:n.allowMultipleExpanded,allowZeroExpanded:n.allowZeroExpanded},t))})),this.expanded=a,this.allowMultipleExpanded=o,this.allowZeroExpanded=s},A=Object(a.createContext)(null),I=function(e){f(n,e);var t=g(n);function n(){var e;c(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return u(j(e=t.call.apply(t,[this].concat(a))),"state",new E({expanded:e.props.preExpanded,allowMultipleExpanded:e.props.allowMultipleExpanded,allowZeroExpanded:e.props.allowZeroExpanded})),u(j(e),"toggleExpanded",(function(t){e.setState((function(e){return e.toggleExpanded(t)}),(function(){e.props.onChange&&e.props.onChange(e.state.expanded)}))})),u(j(e),"isItemDisabled",(function(t){return e.state.isItemDisabled(t)})),u(j(e),"isItemExpanded",(function(t){return e.state.isItemExpanded(t)})),u(j(e),"getPanelAttributes",(function(t,n){return e.state.getPanelAttributes(t,n)})),u(j(e),"getHeadingAttributes",(function(){return e.state.getHeadingAttributes()})),u(j(e),"getButtonAttributes",(function(t,n){return e.state.getButtonAttributes(t,n)})),e}return s(n,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,n=e.allowMultipleExpanded;return Object(a.createElement)(A.Provider,{value:{allowMultipleExpanded:n,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),n}(a.PureComponent);u(I,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var P,N=function(e){f(n,e);var t=g(n);function n(){var e;c(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return u(j(e=t.call.apply(t,[this].concat(a))),"renderChildren",(function(t){return t?e.props.children(t):null})),e}return s(n,[{key:"render",value:function(){return Object(a.createElement)(A.Consumer,null,this.renderChildren)}}]),n}(a.PureComponent),_=function(e){var t=e.className,n=void 0===t?"accordion":t,r=e.allowMultipleExpanded,i=e.allowZeroExpanded,o=e.onChange,c=e.preExpanded,l=m(e,["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"]);return Object(a.createElement)(I,{preExpanded:c,allowMultipleExpanded:r,allowZeroExpanded:i,onChange:o},Object(a.createElement)("div",d({"data-accordion-component":"Accordion",className:n},l)))};!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(P||(P={}));var C=P,M=0;var k=/[\u0009\u000a\u000c\u000d\u0020]/g;function D(e){return""!==e&&!k.test(e)||(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1)}var S=Object(a.createContext)(null),T=function(e){var t=e.children,n=e.uuid,r=e.accordionContext,i=e.dangerouslySetExpanded,o=function(){r.toggleExpanded(n)},c=function(e){var r=null!==i&&void 0!==i?i:e.isItemExpanded(n),c=e.isItemDisabled(n),l=e.getPanelAttributes(n,i),s=e.getHeadingAttributes(n),u=e.getButtonAttributes(n,i);return Object(a.createElement)(S.Provider,{value:{uuid:n,expanded:r,disabled:c,toggleExpanded:o,panelAttributes:l,headingAttributes:s,buttonAttributes:u}},t)};return Object(a.createElement)(N,null,c)},R=function(e){return Object(a.createElement)(N,null,(function(t){return Object(a.createElement)(T,d({},e,{accordionContext:t}))}))},H=function(e){var t=e.children,n=function(e){return e?t(e):null};return Object(a.createElement)(S.Consumer,null,n)},L=function(e){var t=e.uuid,n=e.dangerouslySetExpanded,r=e.className,i=void 0===r?"accordion__item":r,o=e.activeClassName,c=m(e,["uuid","dangerouslySetExpanded","className","activeClassName"]),l=x(Object(a.useState)(function(){var e=M;return M+=1,"raa-".concat(e)}()),1)[0],s=t||l,u=function(e){var t=e.expanded&&o?o:i;return Object(a.createElement)("div",d({"data-accordion-component":"AccordionItem",className:t},c))};return D(s),c.id&&D(c.id),Object(a.createElement)(R,{uuid:s,dangerouslySetExpanded:n},Object(a.createElement)(H,null,u))};function B(e){return e&&(e.matches('[data-accordion-component="Accordion"]')?e:B(e.parentElement))}function q(e){var t=B(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}L.displayName=C.AccordionItem;var Z="End",U="Enter",F="Home",K=" ",V="Spacebar",Y="ArrowUp",J="ArrowDown",G="ArrowLeft",W="ArrowRight",z=function(e){var t=e.toggleExpanded,n=e.className,r=void 0===n?"accordion__button":n,i=m(e,["toggleExpanded","className"]);return i.id&&D(i.id),Object(a.createElement)("div",d({className:r},i,{role:"button",tabIndex:0,onClick:t,onKeyDown:function(e){var n=e.key;if(n!==U&&n!==K&&n!==V||(e.preventDefault(),t()),e.target instanceof HTMLElement)switch(n){case F:e.preventDefault(),function(e){var t=(q(e)||[])[0];t&&t.focus()}(e.target);break;case Z:e.preventDefault(),function(e){var t=q(e)||[],n=t[t.length-1];n&&n.focus()}(e.target);break;case G:case Y:e.preventDefault(),function(e){var t=q(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}(e.target);break;case W:case J:e.preventDefault(),function(e){var t=q(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}(e.target)}},"data-accordion-component":"AccordionItemButton"}))},Q=function(e){return Object(a.createElement)(H,null,(function(t){var n=t.toggleExpanded,r=t.buttonAttributes;return Object(a.createElement)(z,d({toggleExpanded:n},e,r))}))},X=function(e){f(n,e);var t=g(n);function n(){var e;c(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return u(j(e=t.call.apply(t,[this].concat(a))),"ref",void 0),u(j(e),"setRef",(function(t){e.ref=t})),e}return s(n,[{key:"componentDidUpdate",value:function(){n.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){n.VALIDATE(this.ref)}},{key:"render",value:function(){return Object(a.createElement)("div",d({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n")}}]),n}(a.PureComponent);u(X,"defaultProps",{className:"accordion__heading","aria-level":3});var $=function(e){return Object(a.createElement)(H,null,(function(t){var n=t.headingAttributes;return e.id&&D(e.id),Object(a.createElement)(X,d({},e,n))}))};$.displayName=C.AccordionItemHeading;var ee=function(e){var t=e.className,n=void 0===t?"accordion__panel":t,r=e.id,i=m(e,["className","id"]),o=function(e){var t=e.panelAttributes;return r&&D(r),Object(a.createElement)("div",d({"data-accordion-component":"AccordionItemPanel",className:n},i,t))};return Object(a.createElement)(H,null,o)},te=n("GTV5"),ne=n("ur7V");Object(te.e)();t.default=function(){return Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsx)(o.a,{pageTitle:"Frequently Asked Questions",homePageUrl:"/",homePageText:"Home",activePageText:"FAQ's"}),Object(r.jsx)("div",{className:"faq-area ptb-100",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"tab faq-accordion-tab",children:[Object(r.jsx)("div",{className:"about-image mb-4 pb-4",children:Object(r.jsx)("img",{src:"/images/courses/courses1.jpg",alt:"image"})}),Object(r.jsx)(te.d,{children:Object(r.jsx)(te.c,{children:Object(r.jsx)("div",{className:"faq-accordion",children:Object(r.jsxs)(_,{allowZeroExpanded:!0,preExpanded:["a"],children:[Object(r.jsxs)(L,{uuid:"a",children:[Object(r.jsx)($,{children:Object(r.jsx)(Q,{children:"Whats is Rivguru Learning?"})}),Object(r.jsx)(ee,{children:Object(r.jsx)("p",{children:"Rivguru is an online experiential learning platform where you can access online educational videos, live webinars, career talks, career guidance, and one-to-one training, mentorship to boost your skills."})})]}),Object(r.jsxs)(L,{uuid:"b",children:[Object(r.jsx)($,{children:Object(r.jsx)(Q,{children:"How much time do I need to devote to your program?"})}),Object(r.jsx)(ee,{children:Object(r.jsx)("p",{children:"Generally, you need to spend less than 10-15 minutes daily to see the impactful change in you."})})]}),Object(r.jsxs)(L,{uuid:"c",children:[Object(r.jsx)($,{children:Object(r.jsx)(Q,{children:"How you help in achieving the goals?"})}),Object(r.jsx)(ee,{children:Object(r.jsx)("p",{children:'You have to send us the mail with your interest in "Rivguru Experiential Program" with your resume, and then we will guide you about our learning solutions.'})})]}),Object(r.jsxs)(L,{uuid:"d",children:[Object(r.jsx)($,{children:Object(r.jsx)(Q,{children:"How much we have to pay?"})}),Object(r.jsx)(ee,{children:Object(r.jsx)("p",{children:"We have made this program free for six months, and you don't have to pay anything to us. Register soon and see the difference."})})]}),Object(r.jsxs)(L,{uuid:"e",children:[Object(r.jsx)($,{children:Object(r.jsx)(Q,{children:"How you help in achieving the goals?"})}),Object(r.jsx)(ee,{children:Object(r.jsx)("p",{children:"Apart from videos, we help you to prepare for one to one basis for potential interviews like working on case studies, mock interviews, resume improvements, preparing for various stages on the interview process."})})]}),Object(r.jsxs)(L,{uuid:"e",children:[Object(r.jsx)($,{children:Object(r.jsx)(Q,{children:"How do we register for the webinar?"})}),Object(r.jsx)(ee,{children:Object(r.jsx)("p",{children:"You have to just go on the webinar page and register for the first time, and then you can use the same login for future reference."})})]}),Object(r.jsxs)(L,{uuid:"e",children:[Object(r.jsx)($,{children:Object(r.jsx)(Q,{children:"I don't have any experience can I apply?"})}),Object(r.jsx)(ee,{children:Object(r.jsx)("p",{children:"Yes, anyone can apply for our programs, there are no experience or age limits."})})]}),Object(r.jsxs)(L,{uuid:"e",children:[Object(r.jsx)($,{children:Object(r.jsx)(Q,{children:"I cannot find my topics on the Rivguru?"})}),Object(r.jsx)(ee,{children:Object(r.jsx)("p",{children:"Please feel free to send us a mail at info@rivguru.com with your interest topics, and we will get some exciting videos on our platform."})})]}),Object(r.jsxs)(L,{uuid:"e",children:[Object(r.jsx)($,{children:Object(r.jsx)(Q,{children:"What Is Your Success Rate?"})}),Object(r.jsx)(ee,{children:Object(r.jsx)("p",{children:"Rivguru has a very high success rate; we are committed to helping you to achieve your dreams and become successful professionals."})})]})]})})})})]})})}),Object(r.jsx)(ne.a,{})]})}},"l//U":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n("csvi")}])},ur7V:function(e,t,n){"use strict";var r=n("nKUr");n("q1tI");t.a=function(){return Object(r.jsxs)("div",{className:"subscribe-area bg-f9f9f9 ptb-100",children:[Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"subscribe-content",children:[Object(r.jsx)("span",{className:"sub-title",children:"Go At Your Own Pace"}),Object(r.jsx)("h2",{children:"Subscribe To Our Newsletter"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(r.jsxs)("form",{className:"newsletter-form",children:[Object(r.jsx)("input",{type:"text",className:"input-newsletter",placeholder:"Enter your email address",name:"EMAIL",required:!0}),Object(r.jsxs)("button",{type:"submit",className:"default-btn",children:[Object(r.jsx)("i",{className:"flaticon-user"})," Subscribe Now ",Object(r.jsx)("span",{})]})]})]})}),Object(r.jsx)("div",{className:"shape4","data-speed":"0.06","data-revert":"true",children:Object(r.jsx)("img",{src:"/images/shape4.png",alt:"image"})}),Object(r.jsx)("div",{className:"shape13","data-speed":"0.06","data-revert":"true",children:Object(r.jsx)("img",{src:"/images/shape12.png",alt:"image"})}),Object(r.jsx)("div",{className:"shape14","data-speed":"0.06","data-revert":"true",children:Object(r.jsx)("img",{src:"/images/shape13.png",alt:"image"})}),Object(r.jsx)("div",{className:"shape15","data-speed":"0.06","data-revert":"true",children:Object(r.jsx)("img",{src:"/images/shape14.png",alt:"image"})})]})}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,l=(0,a.useRef)(),s=(0,a.useState)(!1),u=r(s,2),d=u[0],p=u[1],f=(0,a.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,d]);return(0,a.useEffect)((function(){if(!o&&!d){var e=(0,i.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[d]),[f,d]};var a=n("q1tI"),i=n("0G5g"),o="undefined"!==typeof IntersectionObserver;var c=new Map}},[["l//U",0,2,1,8]]]);