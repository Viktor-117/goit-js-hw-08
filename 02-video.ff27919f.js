var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=document.querySelector("iframe"),n=new Vimeo.Player(t);var i={},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,y=function(){return s.Date.now()};function m(e,t,n){var i,r,o,u,f,a,c=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(T,t),l?m(e):u}function w(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-c>=o}function T(){var e=y();if(w(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-a);return s?v(n,o-(e-c)):n}(e))}function h(e){return f=void 0,d&&i?m(e):(i=r=void 0,u)}function O(){var e=y(),n=w(e);if(i=arguments,r=this,a=e,n){if(void 0===f)return j(a);if(s)return f=setTimeout(T,t),m(a)}return void 0===f&&(f=setTimeout(T,t)),u}return t=b(t)||0,g(n)&&(l=!!n.leading,o=(s="maxWait"in n)?p(b(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=r=f=void 0},O.flush=function(){return void 0===f?u:h(y())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=u.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}let j;i=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:i,maxWait:t,trailing:r})};n.on("timeupdate",i((function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e)),console.log(localStorage.getItem("videoplayer-current-time"))}),1e3)),j=localStorage.getItem("videoplayer-current-time"),j&&n.setCurrentTime(JSON.parse(j).seconds);
//# sourceMappingURL=02-video.ff27919f.js.map
