(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4783:function(e,r,t){"use strict";t.d(r,{h:function(){return c}});var n=t(4942);function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var u=t(9008),o=t(5893);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var c=function(e){var r=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({title:"Andrew Jarnagin - Software Developer",description:"Andrew Jarnagin's development portfolio"},i({},e));return(0,o.jsxs)(u.default,{children:[(0,o.jsx)("title",{children:r.title}),(0,o.jsx)("meta",{content:r.description,name:"description"})]})}},1093:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return te}});var n=t(7294),i=Object.prototype.hasOwnProperty;function u(e,r,t,n){return new(t||(t=Promise))((function(i,u){function o(e){try{c(n.next(e))}catch(e){u(e)}}function a(e){try{c(n.throw(e))}catch(e){u(e)}}function c(e){var r;e.done?i(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(o,a)}c((n=n.apply(e,r||[])).next())}))}function o(e,r){var t,n,i,u,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(i=2&u[0]?n.return:u[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,u[1])).done)return i;switch(n=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,n=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){o.label=u[1];break}if(6===u[0]&&o.label<i[1]){o.label=i[1],i=u;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(u);break}i[2]&&o.ops.pop(),o.trys.pop();continue}u=r.call(e,o)}catch(e){u=[6,e],n=0}finally{t=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var a={}[0],c=function(e){return e===a},s=function(e){return"function"==typeof e},l=function(){},f=function(e,r){return Object.assign({},e,r)},d=!0,h="undefined"!=typeof window,v="undefined"!=typeof document,p=h&&window.addEventListener||l,g=v&&document.addEventListener||l,b={isOnline:function(){return d},isVisible:function(){var e=v&&document.visibilityState;return!!c(e)||"hidden"!==e}},y={initFocus:function(e){g("visibilitychange",e),p("focus",e)},initReconnect:function(e){p("online",(function(){d=!0,e()})),p("offline",(function(){d=!1}))}},w="undefined"==typeof window||"Deno"in window,m=w?null:window.requestAnimationFrame,x=m?function(e){return m(e)}:function(e){return setTimeout(e,1)},j=w?n.useEffect:n.useLayoutEffect,O="undefined"!=typeof navigator&&navigator.connection,k=!w&&O&&(["slow-2g","2g"].includes(O.effectiveType)||O.saveData),E=new WeakMap,S=0;function P(e){if(s(e))try{e=e()}catch(r){e=""}var r;return Array.isArray(e)?(r=e,e=function(e){if(!e.length)return"";for(var r="arg",t=0;t<e.length;++t){var n=e[t],i=a;null===n||"object"!=typeof n&&!s(n)?i=JSON.stringify(n):E.has(n)?i=E.get(n):(i=S,E.set(n,S++)),r+="$"+i}return r}(e)):r=[e=String(e||"")],[e,r,e?"$err$"+e:"",e?"$req$"+e:""]}var R=new WeakMap,N=function(e,r,t,n,i,u){void 0===u&&(u=!1);var o=R.get(e),a=o[0],c=o[1],s=a[r],l=c[r];if(l)for(var f=0;f<l.length;++f)l[f](t,n,i);return u&&s&&s[0]?s[0](2).then((function(){return e.get(r)})):e.get(r)},T=0,V=function(){return++T},_=function(e,r,t,n){return void 0===n&&(n=!0),u(void 0,void 0,void 0,(function(){var i,u,l,f,d,h,v,p,g,b,y;return o(this,(function(o){switch(o.label){case 0:if(i=P(r),u=i[0],l=i[2],!u)return[2];if(f=R.get(e),d=f[2],h=f[3],c(t))return[2,N(e,u,e.get(u),e.get(l),a,n)];if(g=d[u]=V(),h[u]=0,s(t))try{t=t(e.get(u))}catch(e){t=a,p=e}if(!t||!s(t.then))return[3,5];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,t];case 2:return v=o.sent(),[3,4];case 3:return b=o.sent(),p=b,[3,4];case 4:if(g!==d[u]){if(p)throw p;return[2,v]}return[3,6];case 5:v=t,o.label=6;case 6:return c(v)||e.set(u,v),e.set(l,p),h[u]=V(),[4,N(e,u,v,p,a,n)];case 7:if(y=o.sent(),p)throw p;return[2,y]}}))}))};function C(e,r){for(var t in e)e[t][0]&&e[t][0](r)}function D(e,r){if(!R.has(e)){var t=f(y,r),n={},i=_.bind(a,e);return R.set(e,[n,{},{},{},{},{},i]),w||(t.initFocus(C.bind(a,n,0)),t.initReconnect(C.bind(a,n,1))),[e,i]}}var I=D(new Map),F=I[0],A=I[1],L=f({onLoadingSlow:l,onSuccess:l,onError:l,onErrorRetry:function(e,r,t,n,i){if(b.isVisible()){var u=t.errorRetryCount,o=i.retryCount,a=~~((Math.random()+.5)*(1<<(o<8?o:8)))*t.errorRetryInterval;!c(u)&&o>u||setTimeout(n,a,i)}},revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:k?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:k?5e3:3e3,compare:function e(r,t){var n,u;if(r===t)return!0;if(r&&t&&(n=r.constructor)===t.constructor){if(n===Date)return r.getTime()===t.getTime();if(n===RegExp)return r.toString()===t.toString();if(n===Array){if((u=r.length)===t.length)for(;u--&&e(r[u],t[u]););return-1===u}if(!n||"object"===typeof r){for(n in u=0,r){if(i.call(r,n)&&++u&&!i.call(t,n))return!1;if(!(n in t)||!e(r[n],t[n]))return!1}return Object.keys(t).length===u}}return r!==r&&t!==t},isPaused:function(){return!1},cache:F,mutate:A,fallback:{}},b);function W(e,r){var t=f(e,r);if(!r)return t;var n=e.use,i=e.fallback,u=r.use,o=r.fallback;return n&&u&&(t.use=n.concat(u)),i&&o&&(t.fallback=f(i,o)),t}var M=(0,n.createContext)({});function $(e){return s(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]}var q,H=function(e,r,t){var n=r[e]||(r[e]=[]);return n.push(t),function(){var e=n.indexOf(t);e>=0&&(n[e]=n[n.length-1],n.pop())}},J={dedupe:!0},X=(Object.defineProperty((function(e){var r=e.children,t=e.value,i=W((0,n.useContext)(M),t),u=t&&t.provider,o=(0,n.useState)((function(){return u?D(u(i.cache||F),t):a}))[0];return o&&(i.cache=o[0],i.mutate=o[1]),(0,n.createElement)(M.Provider,{value:i},r)}),"default",{value:L}),q=function(e,r,t){var i=t.cache,s=t.compare,l=t.fallbackData,d=t.suspense,h=t.revalidateOnMount,v=t.refreshInterval,p=t.refreshWhenHidden,g=t.refreshWhenOffline,b=R.get(i),y=b[0],m=b[1],O=b[2],k=b[3],E=b[4],S=b[5],T=P(e),C=T[0],D=T[1],I=T[2],F=T[3],A=(0,n.useRef)(!1),L=(0,n.useRef)(!1),W=(0,n.useRef)(C),M=(0,n.useRef)(t),$=function(){return M.current},q=i.get(C),X=c(l)?t.fallback[C]:l,z=c(q)?X:q,K=i.get(I);if(d&&(!C||!r))throw new Error("useSWR requires either key or fetcher with suspense mode");var Q=function(){return c(h)?d?!A.current&&!c(z):c(z)||t.revalidateIfStale:h},Z=!(!C||!r)&&(!!i.get(F)||!A.current&&Q()),B=function(e,r){var t=(0,n.useState)({})[1],i=(0,n.useRef)(e),u=(0,n.useRef)({data:!1,error:!1,isValidating:!1}),o=(0,n.useCallback)((function(e){var n=!1,o=i.current;for(var a in e){var c=a;o[c]!==e[c]&&(o[c]=e[c],u.current[c]&&(n=!0))}n&&!r.current&&t({})}),[]);return j((function(){i.current=e})),[i,u.current,o]}({data:z,error:K,isValidating:Z},L),G=B[0],U=B[1],Y=B[2],ee=(0,n.useCallback)((function(e){return u(void 0,void 0,void 0,(function(){var n,u,l,f,d,h,v,p,g;return o(this,(function(o){switch(o.label){case 0:if(!C||!r||L.current||$().isPaused())return[2,!1];l=!0,f=e||{},d=!c(E[C])&&f.dedupe,h=function(){return!L.current&&C===W.current&&A.current},v=function(){delete E[C],delete S[C]},o.label=1;case 1:return o.trys.push([1,6,,7]),i.set(F,!0),Y({isValidating:!0}),d||N(i,C,G.current.data,G.current.error,!0),d?(u=S[C],[4,E[C]]):[3,3];case 2:return n=o.sent(),[3,5];case 3:return t.loadingTimeout&&!i.get(C)&&setTimeout((function(){l&&h()&&$().onLoadingSlow(C,t)}),t.loadingTimeout),S[C]=u=V(),[4,E[C]=r.apply(r,D)];case 4:n=o.sent(),setTimeout((function(){S[C]===u&&v()}),t.dedupingInterval),h()&&$().onSuccess(n,C,t),o.label=5;case 5:return S[C]!==u?[2,!1]:(i.set(I,a),i.set(F,!1),p={isValidating:!1},!c(O[C])&&(u<=O[C]||u<=k[C]||0===k[C])?(Y(p),[2,!1]):(c(G.current.error)||(p.error=a),s(G.current.data,n)||(p.data=n),s(i.get(C),n)||i.set(C,n),Y(p),d||N(i,C,n,p.error,!1),[3,7]));case 6:return g=o.sent(),v(),i.set(F,!1),$().isPaused()?(Y({isValidating:!1}),[2,!1]):(i.set(I,g),G.current.error!==g&&(Y({isValidating:!1,error:g}),d||N(i,C,a,g,!1)),h()&&($().onError(g,C,t),t.shouldRetryOnError&&$().onErrorRetry(g,C,t,ee,{retryCount:(f.retryCount||0)+1,dedupe:!0})),[3,7]);case 7:return l=!1,[2,!0]}}))}))}),[C]),re=(0,n.useCallback)((function(e,r){return _(i,W.current,e,r)}),[]);if(j((function(){M.current=t})),j((function(){if(C){var e=A.current,r=ee.bind(a,J),t=function(){return $().isVisible()&&$().isOnline()},n=0,i=H(C,m,(function(e,r,t){Y(f({error:r,isValidating:t},s(e,G.current.data)?null:{data:e}))})),u=H(C,y,(function(e){if(0===e){var i=Date.now();$().revalidateOnFocus&&i>n&&t()&&(n=i+$().focusThrottleInterval,r())}else if(1===e)$().revalidateOnReconnect&&t()&&r();else if(2===e)return ee()}));return L.current=!1,W.current=C,e&&Y({data:z,error:K,isValidating:Z}),Q()&&(c(z)||w?r():x(r)),A.current=!0,function(){L.current=!0,i(),u()}}}),[C,ee]),j((function(){var e;function r(){v&&-1!==e&&(e=setTimeout(t,v))}function t(){G.current.error||!p&&!$().isVisible()||!g&&!$().isOnline()?r():ee(J).then((function(){return r()}))}return r(),function(){e&&(clearTimeout(e),e=-1)}}),[v,p,g,ee]),(0,n.useDebugValue)(z),d&&c(z))throw c(K)?ee(J):K;return{mutate:re,get data(){return U.data=!0,z},get error(){return U.error=!0,K},get isValidating(){return U.isValidating=!0,Z}}},function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var t=$(e),i=t[0],u=t[1],o=t[2],a=f(L,(0,n.useContext)(M)),c=W(a,o),s=q,l=c.use;if(l)for(var d=l.length;d-- >0;)s=l[d](s);return s(i,u||c.fetcher,c)}),z=t(5893),K=function(e){return fetch(e).then((function(e){return e.json()}))};function Q(){var e=X("https://api.github.com/users/ajarnagin1992/repos?sort=pushed&per_page=6",K),r=e.data;return e.error?(0,z.jsx)("div",{children:"failed to load"}):r?(0,z.jsxs)("div",{children:[(0,z.jsx)("h1",{className:"text-5xl p-10",children:"Latest Projects"}),(0,z.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3",children:r.map((function(e){return(0,z.jsx)(Z,{name:e.name,desc:e.description,url:e.html_url},e.id)}))})]}):(0,z.jsx)("div",{children:"loading..."})}function Z(e){return(0,z.jsxs)("div",{className:"flex flex-col p-3 border border-black bg-gray-100 m-1 rounded space-y-1",children:[(0,z.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,z.jsx)("h1",{className:"text-lg font-semibold underline",children:e.name}),(0,z.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:" text-xs p-2 rounded text-white bg-gradient-to-bl from-blue-400 to-blue-600",children:"Repository"})]}),(0,z.jsx)("p",{children:e.desc})]})}var B=function(){return(0,z.jsx)("div",{children:(0,z.jsx)(Q,{})})},G=t(1063),U=t(1664),Y=function(){return(0,z.jsxs)("div",{className:"flex flex-row justify-center items-center p-10 bg-black text-white",children:[(0,z.jsxs)("div",{className:" w-full text-center space-y-10  lg:w-1/2 lg:text-left",children:[(0,z.jsx)("p",{className:" text-7xl",children:"Hi, I'm Andrew!"}),(0,z.jsx)("p",{className:"text-3xl",children:"Full Stack Web-Developer / Software Engineer"}),(0,z.jsx)("div",{children:(0,z.jsx)(U.default,{href:"https://drive.google.com/uc?export=download&id=19zKQZN3cyHFnqbUkQ-sSKbO9zoXrofFu",children:(0,z.jsx)("a",{className:"rounded p-2 bg-blue-600 hover:bg-blue-300",children:"Download my CV!"})})})]}),(0,z.jsx)("div",{className:"hidden lg:block",children:(0,z.jsx)("img",{src:(0,G.addBasePath)("/avatar.jpg"),alt:"Placeholder Image"})})]})},ee=t(4783),re=t(4822);function te(){return(0,z.jsxs)("div",{children:[(0,z.jsx)(ee.h,{}),(0,z.jsx)(Y,{}),(0,z.jsx)(re.v,{children:(0,z.jsx)(B,{})})]})}},8581:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1093)}])},9008:function(e,r,t){e.exports=t(639)}},function(e){e.O(0,[774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);