(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(e,r,t){"use strict";var n=t(3038);r.default=void 0;var a,c=(a=t(7294))&&a.__esModule?a:{default:a},o=t(1063),s=t(4651),l=t(7426);var i={};function u(e,r,t,n){if(e&&o.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[r+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var r,t=!1!==e.prefetch,a=s.useRouter(),f=c.default.useMemo((function(){var r=o.resolveHref(a,e.href,!0),t=n(r,2),c=t[0],s=t[1];return{href:c,as:e.as?o.resolveHref(a,e.as):s||c}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,x=e.shallow,j=e.scroll,b=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var m=(r=c.default.Children.only(p))&&"object"===typeof r&&r.ref,g=l.useIntersection({rootMargin:"200px"}),w=n(g,2),y=w[0],C=w[1],O=c.default.useCallback((function(e){y(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,y]);c.default.useEffect((function(){var e=C&&t&&o.isLocalURL(d),r="undefined"!==typeof b?b:a&&a.locale,n=i[d+"%"+h+(r?"%"+r:"")];e&&!n&&u(a,d,h,{locale:r})}),[h,d,C,b,t,a]);var N={ref:O,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,c,s,l){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(t))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),r[a?"replace":"push"](t,n,{shallow:c,locale:l,scroll:s}))}(e,a,d,h,v,x,j,b)},onMouseEnter:function(e){o.isLocalURL(d)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),u(a,d,h,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var k="undefined"!==typeof b?b:a&&a.locale,P=a&&a.isLocaleDomain&&o.getDomainLocale(h,k,a&&a.locales,a&&a.domainLocales);N.href=P||o.addBasePath(o.addLocale(h,k,a&&a.defaultLocale))}return c.default.cloneElement(r,N)};r.default=f},7426:function(e,r,t){"use strict";var n=t(3038);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!o,l=a.useRef(),i=a.useState(!1),u=n(i,2),f=u[0],d=u[1],h=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=s.get(r);if(t)return t;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return s.set(r,t={id:r,observer:a,elements:n}),t}(t),a=n.id,c=n.observer,o=n.elements;return o.set(e,r),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[t,r,f]);return a.useEffect((function(){if(!o&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[h,f]};var a=t(7294),c=t(3447),o="undefined"!==typeof IntersectionObserver;var s=new Map},2378:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return v}});var n=t(4942);t(3146);function a(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=t(5893),o=function(){return(0,c.jsx)("div",{})},s=t(1063),l=t(1664),i=t(1163),u=function(){(0,i.useRouter)();return(0,c.jsxs)("nav",{className:"bg-blue-300 max-w-full md:px-10 px-4 md:py-4 py-2",children:[(0,c.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,c.jsxs)("div",{className:"flex md:flex-row space-x-12 items-center",children:[(0,c.jsxs)("div",{className:"flex flex-row space-x-4",children:[(0,c.jsx)(l.default,{href:"/",children:(0,c.jsx)("a",{children:(0,c.jsx)("img",{src:(0,s.addBasePath)("/avatar.jpg"),className:"rounded-full object-contain h-12"})})}),(0,c.jsx)(l.default,{href:"/",children:(0,c.jsxs)("a",{className:"",children:[(0,c.jsx)("p",{className:"font-semibold",children:"Andrew Jarnagin"}),(0,c.jsx)("p",{className:"font-light",children:"Software Developer"})]})})]}),(0,c.jsxs)("div",{className:"hidden md:block space-x-3",children:[(0,c.jsx)(l.default,{href:"/about",children:(0,c.jsx)("a",{children:"About"})}),(0,c.jsx)(l.default,{href:"/projects",children:(0,c.jsx)("a",{children:"Projects"})}),(0,c.jsx)(l.default,{href:"/contact",children:(0,c.jsx)("a",{children:"Contact"})})]})]}),(0,c.jsxs)("div",{className:"flex flex-row space-x-4",children:[(0,c.jsx)("a",{href:"https://www.linkedin.com/in/ajarnagin1992/",className:"text-base font-normal text-gray-600 dark:text-gray-300",children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-linkedin h-5 w-5",viewBox:"0 0 16 16",children:(0,c.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})}),(0,c.jsx)("a",{href:"https://github.com/ajarnagin1992",className:"text-base font-normal text-gray-600 dark:text-gray-300",children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-linkedin h-5 w-5",viewBox:"0 0 16 16",children:(0,c.jsx)("path",{d:"M 8 0 C 3.582031 0 0 3.582031 0 8 C 0 11.535156 2.292969 14.535156 5.472656 15.589844 C 5.871094 15.664062 6 15.417969 6 15.207031 L 6 13.71875 C 3.773438 14.203125 3.3125 12.773438 3.3125 12.773438 C 2.949219 11.847656 2.421875 11.601562 2.421875 11.601562 C 1.695312 11.105469 2.476562 11.117188 2.476562 11.117188 C 3.28125 11.171875 3.703125 11.941406 3.703125 11.941406 C 4.417969 13.164062 5.574219 12.8125 6.03125 12.605469 C 6.101562 12.089844 6.3125 11.734375 6.539062 11.535156 C 4.761719 11.332031 2.894531 10.648438 2.894531 7.582031 C 2.894531 6.707031 3.207031 5.996094 3.71875 5.433594 C 3.636719 5.234375 3.363281 4.417969 3.796875 3.316406 C 3.796875 3.316406 4.46875 3.101562 5.996094 4.136719 C 6.636719 3.960938 7.320312 3.871094 8 3.867188 C 8.679688 3.871094 9.363281 3.960938 10.003906 4.136719 C 11.53125 3.101562 12.203125 3.316406 12.203125 3.316406 C 12.636719 4.421875 12.363281 5.234375 12.28125 5.433594 C 12.792969 5.996094 13.105469 6.710938 13.105469 7.582031 C 13.105469 10.65625 11.234375 11.332031 9.453125 11.53125 C 9.738281 11.777344 10 12.265625 10 13.011719 L 10 15.207031 C 10 15.417969 10.128906 15.667969 10.535156 15.589844 C 13.710938 14.53125 16 11.535156 16 8 C 16 3.582031 12.417969 0 8 0 Z M 8 0 "})})})]})]}),(0,c.jsxs)("div",{className:"space-x-3 block md:hidden mt-4",children:[(0,c.jsx)(l.default,{href:"/about",children:(0,c.jsx)("a",{children:"About"})}),(0,c.jsx)(l.default,{href:"/projects",children:(0,c.jsx)("a",{children:"Projects"})}),(0,c.jsx)(l.default,{href:"/contact",children:(0,c.jsx)("a",{children:"Contact"})})]})]})},f=["children"],d=function(e){var r=e.children;a(e,f);return(0,c.jsxs)("div",{className:"",children:[(0,c.jsx)(u,{}),(0,c.jsx)("main",{children:r}),(0,c.jsx)(o,{})]})};function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var v=function(e){var r=e.Component,t=e.pageProps;return(0,c.jsx)(d,{children:(0,c.jsx)(r,p({},t))})}},1780:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(2378)}])},3146:function(){},1664:function(e,r,t){e.exports=t(2167)},1163:function(e,r,t){e.exports=t(4651)},4942:function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,{Z:function(){return n}})}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(1780),r(4651)}));var t=e.O();_N_E=t}]);