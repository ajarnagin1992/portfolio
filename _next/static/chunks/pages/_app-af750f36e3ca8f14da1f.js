(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var a,c=(a=n(7294))&&a.__esModule?a:{default:a},s=n(1063),o=n(4651),i=n(7426);var l={};function u(e,t,n,r){if(e&&s.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=o.useRouter(),f=c.default.useMemo((function(){var t=s.resolveHref(a,e.href,!0),n=r(t,2),c=n[0],o=n[1];return{href:c,as:e.as?s.resolveHref(a,e.as):o||c}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,x=e.replace,v=e.shallow,j=e.scroll,m=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var b=(t=c.default.Children.only(p))&&"object"===typeof t&&t.ref,w=i.useIntersection({rootMargin:"200px"}),g=r(w,2),C=g[0],y=g[1],N=c.default.useCallback((function(e){C(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,C]);c.default.useEffect((function(){var e=y&&n&&s.isLocalURL(d),t="undefined"!==typeof m?m:a&&a.locale,r=l[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(a,d,h,{locale:t})}),[h,d,y,m,n,a]);var O={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),null==o&&r.indexOf("#")>=0&&(o=!1),t[a?"replace":"push"](n,r,{shallow:c,locale:i,scroll:o}))}(e,a,d,h,x,v,j,m)},onMouseEnter:function(e){s.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof m?m:a&&a.locale,_=a&&a.isLocaleDomain&&s.getDomainLocale(h,k,a&&a.locales,a&&a.domainLocales);O.href=_||s.addBasePath(s.addLocale(h,k,a&&a.defaultLocale))}return c.default.cloneElement(t,O)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,i=a.useRef(),l=a.useState(!1),u=r(l,2),f=u[0],d=u[1],h=a.useCallback((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,c=r.observer,s=r.elements;return s.set(e,t),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),o.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return a.useEffect((function(){if(!s&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[h,f]};var a=n(7294),c=n(3447),s="undefined"!==typeof IntersectionObserver;var o=new Map},7005:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(4942),a=(n(3146),n(5893)),c=function(){return(0,a.jsxs)("div",{className:"m-auto flex flex-col pt-10 md:pt-20 md:px-40",children:[(0,a.jsx)("div",{className:"h-0.5 w-full bg-gray-600"}),(0,a.jsxs)("div",{className:"flex flex-row space-x-10 p-5 justify-between",children:[(0,a.jsx)("p",{children:"Stuff1"}),(0,a.jsx)("p",{children:"Stuff2"}),(0,a.jsx)("p",{children:"Stuff3"})]})]})},s=n(1063),o=n(1664),i=n(1163);function l(e){return(0,a.jsx)("nav",{className:"bg-black text-white max-w-full md:px-10 px-4 md:py-4 py-2 flex flex-row justify-between items-center",children:e.children})}var u=function(){(0,i.useRouter)();return(0,a.jsxs)(l,{children:[(0,a.jsxs)("div",{className:"flex md:flex-row space-x-12 items-center",children:[(0,a.jsxs)("div",{className:"flex flex-row space-x-4",children:[(0,a.jsx)(o.default,{href:"/",children:(0,a.jsx)("a",{className:"w-12 h-12",children:(0,a.jsx)("img",{src:(0,s.addBasePath)("/avatar.jpg"),className:"rounded-full object-contain h-12"})})}),(0,a.jsx)(o.default,{href:"/",children:(0,a.jsxs)("a",{className:"",children:[(0,a.jsx)("p",{className:"font-semibold",children:"Andrew Jarnagin"}),(0,a.jsx)("p",{className:"font-light",children:"Software Developer"})]})})]}),(0,a.jsxs)("div",{className:"hidden md:block space-x-5",children:[(0,a.jsx)(o.default,{href:"/about",children:(0,a.jsx)("a",{children:"About"})}),(0,a.jsx)(o.default,{href:"/contact",children:(0,a.jsx)("a",{children:"Contact"})})]})]}),(0,a.jsxs)("div",{className:"flex flex-row space-x-4",children:[(0,a.jsx)("a",{href:"https://www.linkedin.com/in/ajarnagin1992/",className:"text-base font-normal text-white dark:text-gray-300",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-linkedin h-5 w-5",viewBox:"0 0 16 16",children:(0,a.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})}),(0,a.jsx)("a",{href:"https://github.com/ajarnagin1992",className:"text-base font-normal text-white dark:text-gray-300",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-linkedin h-5 w-5",viewBox:"0 0 16 16",children:(0,a.jsx)("path",{d:"M 8 0 C 3.582031 0 0 3.582031 0 8 C 0 11.535156 2.292969 14.535156 5.472656 15.589844 C 5.871094 15.664062 6 15.417969 6 15.207031 L 6 13.71875 C 3.773438 14.203125 3.3125 12.773438 3.3125 12.773438 C 2.949219 11.847656 2.421875 11.601562 2.421875 11.601562 C 1.695312 11.105469 2.476562 11.117188 2.476562 11.117188 C 3.28125 11.171875 3.703125 11.941406 3.703125 11.941406 C 4.417969 13.164062 5.574219 12.8125 6.03125 12.605469 C 6.101562 12.089844 6.3125 11.734375 6.539062 11.535156 C 4.761719 11.332031 2.894531 10.648438 2.894531 7.582031 C 2.894531 6.707031 3.207031 5.996094 3.71875 5.433594 C 3.636719 5.234375 3.363281 4.417969 3.796875 3.316406 C 3.796875 3.316406 4.46875 3.101562 5.996094 4.136719 C 6.636719 3.960938 7.320312 3.871094 8 3.867188 C 8.679688 3.871094 9.363281 3.960938 10.003906 4.136719 C 11.53125 3.101562 12.203125 3.316406 12.203125 3.316406 C 12.636719 4.421875 12.363281 5.234375 12.28125 5.433594 C 12.792969 5.996094 13.105469 6.710938 13.105469 7.582031 C 13.105469 10.65625 11.234375 11.332031 9.453125 11.53125 C 9.738281 11.777344 10 12.265625 10 13.011719 L 10 15.207031 C 10 15.417969 10.128906 15.667969 10.535156 15.589844 C 13.710938 14.53125 16 11.535156 16 8 C 16 3.582031 12.417969 0 8 0 Z M 8 0 "})})})]}),(0,a.jsxs)("div",{className:"space-x-3 block md:hidden mt-4",children:[(0,a.jsx)(o.default,{href:"/about",children:(0,a.jsx)("a",{children:"About"})}),(0,a.jsx)(o.default,{href:"/contact",children:(0,a.jsx)("a",{children:"Contact"})})]})]})},f=function(e){var t=e.children;return(0,a.jsxs)("div",{className:"bg-gray-200",children:[(0,a.jsx)(u,{}),(0,a.jsx)("main",{className:"",children:t}),(0,a.jsx)(c,{})]})};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){var t=e.Component,n=e.pageProps;return(0,a.jsx)(f,{children:(0,a.jsx)(t,h({},n))})}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7005)}])},3146:function(){},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)},4942:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var n=e.O();_N_E=n}]);