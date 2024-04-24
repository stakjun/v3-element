import{d as ee,e as I,w as sa,a1 as fa,o as Yt,c as la,D as ca,ak as br,al as hr,b as Vt,C as yr,f as ht,am as wr,an,ao as xr,h as ua,ap as kr,y as rn,z as Ar,a3 as Or,x as on,n as Sr,W as _r,r as Tr,A as sn,$ as Pr,a4 as Er,T as Cr}from"./framework.a3a9685a.js";const Ir=ee({props:{vNode:{type:[String,Object],required:!0}},setup(t){return()=>t.vNode}}),$r=Ir;function fn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fn(Object(n),!0).forEach(function(a){E(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function qt(t){"@babel/helpers - typeof";return qt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qt(t)}function jr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ln(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Nr(t,e,n){return e&&ln(t.prototype,e),n&&ln(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $e(t,e){return Lr(t)||zr(t,e)||ma(t,e)||Dr()}function Et(t){return Mr(t)||Fr(t)||ma(t)||Rr()}function Mr(t){if(Array.isArray(t))return ge(t)}function Lr(t){if(Array.isArray(t))return t}function Fr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zr(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function ma(t,e){if(t){if(typeof t=="string")return ge(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ge(t,e)}}function ge(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Rr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var cn=function(){},je={},da={},va=null,pa={mark:cn,measure:cn};try{typeof window<"u"&&(je=window),typeof document<"u"&&(da=document),typeof MutationObserver<"u"&&(va=MutationObserver),typeof performance<"u"&&(pa=performance)}catch{}var Br=je.navigator||{},un=Br.userAgent,mn=un===void 0?"":un,K=je,A=da,dn=va,Nt=pa;K.document;var Y=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",ga=~mn.indexOf("MSIE")||~mn.indexOf("Trident/"),Mt,Lt,Ft,zt,Rt,D="___FONT_AWESOME___",be=16,ba="fa",ha="svg-inline--fa",tt="data-fa-i2svg",he="data-fa-pseudo-element",Ur="data-fa-pseudo-element-pending",Ne="data-prefix",Me="data-icon",vn="fontawesome-i2svg",Yr="async",Gr=["HTML","HEAD","STYLE","SCRIPT"],ya=function(){try{return!0}catch{return!1}}(),k="classic",O="sharp",Le=[k,O];function Ct(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[k]}})}var kt=Ct((Mt={},E(Mt,k,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),E(Mt,O,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Mt)),At=Ct((Lt={},E(Lt,k,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),E(Lt,O,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Lt)),Ot=Ct((Ft={},E(Ft,k,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),E(Ft,O,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ft)),Wr=Ct((zt={},E(zt,k,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),E(zt,O,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),zt)),Hr=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,wa="fa-layers-text",Kr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Xr=Ct((Rt={},E(Rt,k,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),E(Rt,O,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Rt)),xa=[1,2,3,4,5,6,7,8,9,10],Vr=xa.concat([11,12,13,14,15,16,17,18,19,20]),qr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},St=new Set;Object.keys(At[k]).map(St.add.bind(St));Object.keys(At[O]).map(St.add.bind(St));var Zr=[].concat(Le,Et(St),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY]).concat(xa.map(function(t){return"".concat(t,"x")})).concat(Vr.map(function(t){return"w-".concat(t)})),yt=K.FontAwesomeConfig||{};function Jr(t){var e=A.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Qr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(A&&typeof A.querySelector=="function"){var ti=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ti.forEach(function(t){var e=$e(t,2),n=e[0],a=e[1],r=Qr(Jr(n));r!=null&&(yt[a]=r)})}var ka={styleDefault:"solid",familyDefault:"classic",cssPrefix:ba,replacementClass:ha,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};yt.familyPrefix&&(yt.cssPrefix=yt.familyPrefix);var mt=m(m({},ka),yt);mt.autoReplaceSvg||(mt.observeMutations=!1);var v={};Object.keys(ka).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(n){mt[t]=n,wt.forEach(function(a){return a(v)})},get:function(){return mt[t]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(e){mt.cssPrefix=e,wt.forEach(function(n){return n(v)})},get:function(){return mt.cssPrefix}});K.FontAwesomeConfig=v;var wt=[];function ei(t){return wt.push(t),function(){wt.splice(wt.indexOf(t),1)}}var H=be,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ni(t){if(!(!t||!Y)){var e=A.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=A.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return A.head.insertBefore(e,a),t}}var ai="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _t(){for(var t=12,e="";t-- >0;)e+=ai[Math.random()*62|0];return e}function vt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Fe(t){return t.classList?vt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Aa(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ri(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Aa(t[n]),'" ')},"").trim()}function ne(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ze(t){return t.size!==L.size||t.x!==L.x||t.y!==L.y||t.rotate!==L.rotate||t.flipX||t.flipY}function ii(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function oi(t){var e=t.transform,n=t.width,a=n===void 0?be:n,r=t.height,i=r===void 0?be:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&ga?f+="translate(".concat(e.x/H-a/2,"em, ").concat(e.y/H-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/H,"em), calc(-50% + ").concat(e.y/H,"em)) "):f+="translate(".concat(e.x/H,"em, ").concat(e.y/H,"em) "),f+="scale(".concat(e.size/H*(e.flipX?-1:1),", ").concat(e.size/H*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var si=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Oa(){var t=ba,e=ha,n=v.cssPrefix,a=v.replacementClass,r=si;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var pn=!1;function le(){v.autoAddCss&&!pn&&(ni(Oa()),pn=!0)}var fi={mixout:function(){return{dom:{css:Oa,insertCss:le}}},hooks:function(){return{beforeDOMElementCreation:function(){le()},beforeI2svg:function(){le()}}}},B=K||{};B[D]||(B[D]={});B[D].styles||(B[D].styles={});B[D].hooks||(B[D].hooks={});B[D].shims||(B[D].shims=[]);var N=B[D],Sa=[],li=function t(){A.removeEventListener("DOMContentLoaded",t),Zt=1,Sa.map(function(e){return e()})},Zt=!1;Y&&(Zt=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),Zt||A.addEventListener("DOMContentLoaded",li));function ci(t){Y&&(Zt?setTimeout(t,0):Sa.push(t))}function It(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Aa(t):"<".concat(e," ").concat(ri(a),">").concat(i.map(It).join(""),"</").concat(e,">")}function gn(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ui=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},ce=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?ui(n,r):n,f,c,l;for(a===void 0?(f=1,l=e[i[0]]):(f=0,l=a);f<o;f++)c=i[f],l=s(l,e[c],c,e);return l};function mi(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function ye(t){var e=mi(t);return e.length===1?e[0].toString(16):null}function di(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function bn(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function we(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=bn(e);typeof N.hooks.addPack=="function"&&!r?N.hooks.addPack(t,bn(e)):N.styles[t]=m(m({},N.styles[t]||{}),i),t==="fas"&&we("fa",e)}var Dt,Bt,Ut,ft=N.styles,vi=N.shims,pi=(Dt={},E(Dt,k,Object.values(Ot[k])),E(Dt,O,Object.values(Ot[O])),Dt),Re=null,_a={},Ta={},Pa={},Ea={},Ca={},gi=(Bt={},E(Bt,k,Object.keys(kt[k])),E(Bt,O,Object.keys(kt[O])),Bt);function bi(t){return~Zr.indexOf(t)}function hi(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!bi(r)?r:null}var Ia=function(){var e=function(i){return ce(ft,function(o,s,f){return o[f]=ce(s,i,{}),o},{})};_a=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),Ta=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),Ca=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in ft||v.autoFetchSvg,a=ce(vi,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Pa=a.names,Ea=a.unicodes,Re=ae(v.styleDefault,{family:v.familyDefault})};ei(function(t){Re=ae(t.styleDefault,{family:v.familyDefault})});Ia();function De(t,e){return(_a[t]||{})[e]}function yi(t,e){return(Ta[t]||{})[e]}function Q(t,e){return(Ca[t]||{})[e]}function $a(t){return Pa[t]||{prefix:null,iconName:null}}function wi(t){var e=Ea[t],n=De("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function X(){return Re}var Be=function(){return{prefix:null,iconName:null,rest:[]}};function ae(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?k:n,r=kt[a][t],i=At[a][t]||At[a][r],o=t in N.styles?t:null;return i||o||null}var hn=(Ut={},E(Ut,k,Object.keys(Ot[k])),E(Ut,O,Object.keys(Ot[O])),Ut);function re(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},E(e,k,"".concat(v.cssPrefix,"-").concat(k)),E(e,O,"".concat(v.cssPrefix,"-").concat(O)),e),o=null,s=k;(t.includes(i[k])||t.some(function(c){return hn[k].includes(c)}))&&(s=k),(t.includes(i[O])||t.some(function(c){return hn[O].includes(c)}))&&(s=O);var f=t.reduce(function(c,l){var u=hi(v.cssPrefix,l);if(ft[l]?(l=pi[s].includes(l)?Wr[s][l]:l,o=l,c.prefix=l):gi[s].indexOf(l)>-1?(o=l,c.prefix=ae(l,{family:s})):u?c.iconName=u:l!==v.replacementClass&&l!==i[k]&&l!==i[O]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var g=o==="fa"?$a(c.iconName):{},b=Q(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||b||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!ft.far&&ft.fas&&!v.autoFetchSvg&&(c.prefix="fas")}return c},Be());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===O&&(ft.fass||v.autoFetchSvg)&&(f.prefix="fass",f.iconName=Q(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=X()||"fas"),f}var xi=function(){function t(){jr(this,t),this.definitions={}}return Nr(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=m(m({},n.definitions[s]||{}),o[s]),we(s,o[s]);var f=Ot[k][s];f&&we(f,o[s]),Ia()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];n[s]||(n[s]={}),l.length>0&&l.forEach(function(u){typeof u=="string"&&(n[s][u]=c)}),n[s][f]=c}),n}}]),t}(),yn=[],lt={},ut={},ki=Object.keys(ut);function Ai(t,e){var n=e.mixoutsTo;return yn=t,lt={},Object.keys(ut).forEach(function(a){ki.indexOf(a)===-1&&delete ut[a]}),yn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),qt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){lt[o]||(lt[o]=[]),lt[o].push(i[o])})}a.provides&&a.provides(ut)}),n}function xe(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=lt[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function et(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=lt[t]||[];r.forEach(function(i){i.apply(null,n)})}function U(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ut[t]?ut[t].apply(null,e):void 0}function ke(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||X();if(e)return e=Q(n,e)||e,gn(ja.definitions,n,e)||gn(N.styles,n,e)}var ja=new xi,Oi=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,et("noAuto")},Si={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y?(et("beforeI2svg",e),U("pseudoElements2svg",e),U("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,ci(function(){Ti({autoReplaceSvgRoot:n}),et("watch",e)})}},_i={icon:function(e){if(e===null)return null;if(qt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=ae(e[0]);return{prefix:a,iconName:Q(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(v.cssPrefix,"-"))>-1||e.match(Hr))){var r=re(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||X(),iconName:Q(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=X();return{prefix:i,iconName:Q(i,e)||e}}}},$={noAuto:Oi,config:v,dom:Si,parse:_i,library:ja,findIconDefinition:ke,toHtml:It},Ti=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?A:n;(Object.keys(N.styles).length>0||v.autoFetchSvg)&&Y&&v.autoReplaceSvg&&$.dom.i2svg({node:a})};function ie(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return It(a)})}}),Object.defineProperty(t,"node",{get:function(){if(Y){var a=A.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Pi(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(ze(o)&&n.found&&!a.found){var s=n.width,f=n.height,c={x:s/f/2,y:.5};r.style=ne(m(m({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ei(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function Ue(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,u=t.extra,g=t.watchable,b=g===void 0?!1:g,S=a.found?a:n,_=S.width,h=S.height,d=r==="fak",p=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(W){return u.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(u.classes).join(" "),y={children:[],attributes:m(m({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:p,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(h)})},T=d&&!~u.classes.indexOf("fa-fw")?{width:"".concat(_/h*16*.0625,"em")}:{};b&&(y.attributes[tt]=""),f&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(l||_t())},children:[f]}),delete y.attributes.title);var P=m(m({},y),{},{prefix:r,iconName:i,main:n,mask:a,maskId:c,transform:o,symbol:s,styles:m(m({},T),u.styles)}),M=a.found&&n.found?U("generateAbstractMask",P)||{children:[],attributes:{}}:U("generateAbstractIcon",P)||{children:[],attributes:{}},j=M.children,fe=M.attributes;return P.children=j,P.attributes=fe,s?Ei(P):Pi(P)}function wn(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,c=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[tt]="");var l=m({},o.styles);ze(r)&&(l.transform=oi({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);var u=ne(l);u.length>0&&(c.style=u);var g=[];return g.push({tag:"span",attributes:c,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Ci(t){var e=t.content,n=t.title,a=t.extra,r=m(m(m({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ne(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ue=N.styles;function Ae(t){var e=t[0],n=t[1],a=t.slice(4),r=$e(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(J.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(J.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(J.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Ii={found:!1,width:512,height:512};function $i(t,e){!ya&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Oe(t,e){var n=e;return e==="fa"&&v.styleDefault!==null&&(e=X()),new Promise(function(a,r){if(U("missingIconAbstract"),n==="fa"){var i=$a(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&ue[e]&&ue[e][t]){var o=ue[e][t];return a(Ae(o))}$i(t,e),a(m(m({},Ii),{},{icon:v.showMissingIcons&&t?U("missingIconAbstract")||{}:{}}))})}var xn=function(){},Se=v.measurePerformance&&Nt&&Nt.mark&&Nt.measure?Nt:{mark:xn,measure:xn},bt='FA "6.5.2"',ji=function(e){return Se.mark("".concat(bt," ").concat(e," begins")),function(){return Na(e)}},Na=function(e){Se.mark("".concat(bt," ").concat(e," ends")),Se.measure("".concat(bt," ").concat(e),"".concat(bt," ").concat(e," begins"),"".concat(bt," ").concat(e," ends"))},Ye={begin:ji,end:Na},Gt=function(){};function kn(t){var e=t.getAttribute?t.getAttribute(tt):null;return typeof e=="string"}function Ni(t){var e=t.getAttribute?t.getAttribute(Ne):null,n=t.getAttribute?t.getAttribute(Me):null;return e&&n}function Mi(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function Li(){if(v.autoReplaceSvg===!0)return Wt.replace;var t=Wt[v.autoReplaceSvg];return t||Wt.replace}function Fi(t){return A.createElementNS("http://www.w3.org/2000/svg",t)}function zi(t){return A.createElement(t)}function Ma(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?Fi:zi:n;if(typeof t=="string")return A.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Ma(o,{ceFn:a}))}),r}function Ri(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Wt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Ma(r),n)}),n.getAttribute(tt)===null&&v.keepOriginalSource){var a=A.createComment(Ri(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~Fe(n).indexOf(v.replacementClass))return Wt.replace(e);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===v.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return It(s)}).join(`
`);n.setAttribute(tt,""),n.innerHTML=o}};function An(t){t()}function La(t,e){var n=typeof e=="function"?e:Gt;if(t.length===0)n();else{var a=An;v.mutateApproach===Yr&&(a=K.requestAnimationFrame||An),a(function(){var r=Li(),i=Ye.begin("mutate");t.map(r),i(),n()})}}var Ge=!1;function Fa(){Ge=!0}function _e(){Ge=!1}var Jt=null;function On(t){if(dn&&v.observeMutations){var e=t.treeCallback,n=e===void 0?Gt:e,a=t.nodeCallback,r=a===void 0?Gt:a,i=t.pseudoElementsCallback,o=i===void 0?Gt:i,s=t.observeMutationsRoot,f=s===void 0?A:s;Jt=new dn(function(c){if(!Ge){var l=X();vt(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!kn(u.addedNodes[0])&&(v.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&v.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&kn(u.target)&&~qr.indexOf(u.attributeName))if(u.attributeName==="class"&&Ni(u.target)){var g=re(Fe(u.target)),b=g.prefix,S=g.iconName;u.target.setAttribute(Ne,b||l),S&&u.target.setAttribute(Me,S)}else Mi(u.target)&&r(u.target)})}}),Y&&Jt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Di(){Jt&&Jt.disconnect()}function Bi(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Ui(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=re(Fe(t));return r.prefix||(r.prefix=X()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=yi(r.prefix,t.innerText)||De(r.prefix,ye(t.innerText))),!r.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Yi(t){var e=vt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return v.autoA11y&&(n?e["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||_t()):(e["aria-hidden"]="true",e.focusable="false")),e}function Gi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Sn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ui(t),a=n.iconName,r=n.prefix,i=n.rest,o=Yi(t),s=xe("parseNodeAttributes",{},t),f=e.styleParser?Bi(t):[];return m({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Wi=N.styles;function za(t){var e=v.autoReplaceSvg==="nest"?Sn(t,{styleParser:!1}):Sn(t);return~e.extra.classes.indexOf(wa)?U("generateLayersText",t,e):U("generateSvgReplacementMutation",t,e)}var V=new Set;Le.map(function(t){V.add("fa-".concat(t))});Object.keys(kt[k]).map(V.add.bind(V));Object.keys(kt[O]).map(V.add.bind(V));V=Et(V);function _n(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Y)return Promise.resolve();var n=A.documentElement.classList,a=function(u){return n.add("".concat(vn,"-").concat(u))},r=function(u){return n.remove("".concat(vn,"-").concat(u))},i=v.autoFetchSvg?V:Le.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Wi));i.includes("fa")||i.push("fa");var o=[".".concat(wa,":not([").concat(tt,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(tt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=vt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=Ye.begin("onTree"),c=s.reduce(function(l,u){try{var g=za(u);g&&l.push(g)}catch(b){ya||b.name==="MissingIcon"&&console.error(b)}return l},[]);return new Promise(function(l,u){Promise.all(c).then(function(g){La(g,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),l()})}).catch(function(g){f(),u(g)})})}function Hi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;za(t).then(function(n){n&&La([n],e)})}function Ki(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:ke(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:ke(r||{})),t(a,m(m({},n),{},{mask:r}))}}var Xi=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?L:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,c=n.maskId,l=c===void 0?null:c,u=n.title,g=u===void 0?null:u,b=n.titleId,S=b===void 0?null:b,_=n.classes,h=_===void 0?[]:_,d=n.attributes,p=d===void 0?{}:d,y=n.styles,T=y===void 0?{}:y;if(e){var P=e.prefix,M=e.iconName,j=e.icon;return ie(m({type:"icon"},e),function(){return et("beforeDOMElementCreation",{iconDefinition:e,params:n}),v.autoA11y&&(g?p["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(S||_t()):(p["aria-hidden"]="true",p.focusable="false")),Ue({icons:{main:Ae(j),mask:f?Ae(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:M,transform:m(m({},L),r),symbol:o,title:g,maskId:l,titleId:S,extra:{attributes:p,styles:T,classes:h}})})}},Vi={mixout:function(){return{icon:Ki(Xi)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_n,n.nodeCallback=Hi,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?A:a,i=n.callback,o=i===void 0?function(){}:i;return _n(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,c=a.symbol,l=a.mask,u=a.maskId,g=a.extra;return new Promise(function(b,S){Promise.all([Oe(r,s),l.iconName?Oe(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var h=$e(_,2),d=h[0],p=h[1];b([n,Ue({icons:{main:d,mask:p},prefix:s,iconName:r,transform:f,symbol:c,maskId:u,title:i,titleId:o,extra:g,watchable:!0})])}).catch(S)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=ne(s);f.length>0&&(r.style=f);var c;return ze(o)&&(c=U("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},qi={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return ie({type:"layer"},function(){et("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(Et(i)).join(" ")},children:o}]})}}}},Zi={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,c=f===void 0?{}:f,l=a.styles,u=l===void 0?{}:l;return ie({type:"counter",content:n},function(){return et("beforeDOMElementCreation",{content:n,params:a}),Ci({content:n.toString(),title:i,extra:{attributes:c,styles:u,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(Et(s))}})})}}}},Ji={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?L:r,o=a.title,s=o===void 0?null:o,f=a.classes,c=f===void 0?[]:f,l=a.attributes,u=l===void 0?{}:l,g=a.styles,b=g===void 0?{}:g;return ie({type:"text",content:n},function(){return et("beforeDOMElementCreation",{content:n,params:a}),wn({content:n,transform:m(m({},L),i),title:s,extra:{attributes:u,styles:b,classes:["".concat(v.cssPrefix,"-layers-text")].concat(Et(c))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(ga){var c=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/c,f=l.height/c}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,wn({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Qi=new RegExp('"',"ug"),Tn=[1105920,1112319];function to(t){var e=t.replace(Qi,""),n=di(e,0),a=n>=Tn[0]&&n<=Tn[1],r=e.length===2?e[0]===e[1]:!1;return{value:ye(r?e[0]:e),isSecondary:a||r}}function Pn(t,e){var n="".concat(Ur).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=vt(t.children),o=i.filter(function(j){return j.getAttribute(he)===e})[0],s=K.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(Kr),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&l!=="none"&&l!==""){var u=s.getPropertyValue("content"),g=~["Sharp"].indexOf(f[2])?O:k,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?At[g][f[2].toLowerCase()]:Xr[g][c],S=to(u),_=S.value,h=S.isSecondary,d=f[0].startsWith("FontAwesome"),p=De(b,_),y=p;if(d){var T=wi(_);T.iconName&&T.prefix&&(p=T.iconName,b=T.prefix)}if(p&&!h&&(!o||o.getAttribute(Ne)!==b||o.getAttribute(Me)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);var P=Gi(),M=P.extra;M.attributes[he]=e,Oe(p,b).then(function(j){var fe=Ue(m(m({},P),{},{icons:{main:j,mask:Be()},prefix:b,iconName:y,extra:M,watchable:!0})),W=A.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(W,t.firstChild):t.appendChild(W),W.outerHTML=fe.map(function(gr){return It(gr)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function eo(t){return Promise.all([Pn(t,"::before"),Pn(t,"::after")])}function no(t){return t.parentNode!==document.head&&!~Gr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(he)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function En(t){if(Y)return new Promise(function(e,n){var a=vt(t.querySelectorAll("*")).filter(no).map(eo),r=Ye.begin("searchPseudoElements");Fa(),Promise.all(a).then(function(){r(),_e(),e()}).catch(function(){r(),_e(),n()})})}var ao={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=En,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?A:a;v.searchPseudoElements&&En(r)}}},Cn=!1,ro={mixout:function(){return{dom:{unwatch:function(){Fa(),Cn=!0}}}},hooks:function(){return{bootstrap:function(){On(xe("mutationObserverCallbacks",{}))},noAuto:function(){Di()},watch:function(n){var a=n.observeMutationsRoot;Cn?_e():On(xe("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},In=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},io={mixout:function(){return{parse:{transform:function(n){return In(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=In(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(f," ").concat(c," ").concat(l)},g={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:u,path:g};return{tag:"g",attributes:m({},b.outer),children:[{tag:"g",attributes:m({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),b.path)}]}]}}}},me={x:0,y:0,width:"100%",height:"100%"};function $n(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function oo(t){return t.tag==="g"?t.children:[t]}var so={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?re(r.split(" ").map(function(o){return o.trim()})):Be();return i.prefix||(i.prefix=X()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,c=i.width,l=i.icon,u=o.width,g=o.icon,b=ii({transform:f,containerWidth:u,iconWidth:c}),S={tag:"rect",attributes:m(m({},me),{},{fill:"white"})},_=l.children?{children:l.children.map($n)}:{},h={tag:"g",attributes:m({},b.inner),children:[$n(m({tag:l.tag,attributes:m(m({},l.attributes),b.path)},_))]},d={tag:"g",attributes:m({},b.outer),children:[h]},p="mask-".concat(s||_t()),y="clip-".concat(s||_t()),T={tag:"mask",attributes:m(m({},me),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,d]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:oo(g)},T]};return a.push(P,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(p,")")},me)}),{children:a,attributes:r}}}},fo={provides:function(e){var n=!1;K.matchMedia&&(n=K.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},lo={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},co=[fi,Vi,qi,Zi,Ji,ao,ro,io,so,fo,lo];Ai(co,{mixoutsTo:$});$.noAuto;$.config;var xu=$.library;$.dom;var Te=$.parse;$.findIconDefinition;$.toHtml;var uo=$.icon;$.layer;$.text;$.counter;function jn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jn(Object(n),!0).forEach(function(a){C(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Qt(t){"@babel/helpers - typeof";return Qt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qt(t)}function C(t,e,n){return e=go(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function mo(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function vo(t,e){if(t==null)return{};var n=mo(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function po(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function go(t){var e=po(t,"string");return typeof e=="symbol"?e:String(e)}var bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ra={exports:{}};(function(t){(function(e){var n=function(d,p,y){if(!c(p)||u(p)||g(p)||b(p)||f(p))return p;var T,P=0,M=0;if(l(p))for(T=[],M=p.length;P<M;P++)T.push(n(d,p[P],y));else{T={};for(var j in p)Object.prototype.hasOwnProperty.call(p,j)&&(T[d(j,y)]=n(d,p[j],y))}return T},a=function(d,p){p=p||{};var y=p.separator||"_",T=p.split||/(?=[A-Z])/;return d.split(T).join(y)},r=function(d){return S(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(p,y){return y?y.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},i=function(d){var p=r(d);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(d,p){return a(d,p).toLowerCase()},s=Object.prototype.toString,f=function(d){return typeof d=="function"},c=function(d){return d===Object(d)},l=function(d){return s.call(d)=="[object Array]"},u=function(d){return s.call(d)=="[object Date]"},g=function(d){return s.call(d)=="[object RegExp]"},b=function(d){return s.call(d)=="[object Boolean]"},S=function(d){return d=d-0,d===d},_=function(d,p){var y=p&&"process"in p?p.process:p;return typeof y!="function"?d:function(T,P){return y(T,d,P)}},h={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(d,p){return n(_(r,p),d)},decamelizeKeys:function(d,p){return n(_(o,p),d,p)},pascalizeKeys:function(d,p){return n(_(i,p),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=h:e.humps=h})(bo)})(Ra);var ho=Ra.exports,yo=["class","style"];function wo(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=ho.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function xo(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Da(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return Da(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,c){var l=t.attributes[c];switch(c){case"class":f.class=xo(l);break;case"style":f.style=wo(l);break;default:f.attrs[c]=l}return f},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=vo(n,yo);return fa(t.tag,R(R(R({},e),{},{class:r.class,style:R(R({},r.style),o)},r.attrs),s),a)}var Ba=!1;try{Ba=!0}catch{}function ko(){if(!Ba&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function de(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?C({},t,e):{}}function Ao(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},C(e,"fa-".concat(t.size),t.size!==null),C(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),C(e,"fa-pull-".concat(t.pull),t.pull!==null),C(e,"fa-swap-opacity",t.swapOpacity),C(e,"fa-bounce",t.bounce),C(e,"fa-shake",t.shake),C(e,"fa-beat",t.beat),C(e,"fa-fade",t.fade),C(e,"fa-beat-fade",t.beatFade),C(e,"fa-flash",t.flash),C(e,"fa-spin-pulse",t.spinPulse),C(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function Nn(t){if(t&&Qt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Te.icon)return Te.icon(t);if(t===null)return null;if(Qt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Oo=ee({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=I(function(){return Nn(e.icon)}),i=I(function(){return de("classes",Ao(e))}),o=I(function(){return de("transform",typeof e.transform=="string"?Te.transform(e.transform):e.transform)}),s=I(function(){return de("mask",Nn(e.mask))}),f=I(function(){return uo(r.value,R(R(R(R({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});sa(f,function(l){if(!l)return ko("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=I(function(){return f.value?Da(f.value.abstract[0],{},a):null});return function(){return c.value}}}),So=typeof global=="object"&&global&&global.Object===Object&&global;const Ua=So;var _o=typeof self=="object"&&self&&self.Object===Object&&self,To=Ua||_o||Function("return this")();const z=To;var Po=z.Symbol;const F=Po;var Ya=Object.prototype,Eo=Ya.hasOwnProperty,Co=Ya.toString,gt=F?F.toStringTag:void 0;function Io(t){var e=Eo.call(t,gt),n=t[gt];try{t[gt]=void 0;var a=!0}catch{}var r=Co.call(t);return a&&(e?t[gt]=n:delete t[gt]),r}var $o=Object.prototype,jo=$o.toString;function No(t){return jo.call(t)}var Mo="[object Null]",Lo="[object Undefined]",Mn=F?F.toStringTag:void 0;function at(t){return t==null?t===void 0?Lo:Mo:Mn&&Mn in Object(t)?Io(t):No(t)}function rt(t){return t!=null&&typeof t=="object"}var Fo="[object Symbol]";function We(t){return typeof t=="symbol"||rt(t)&&at(t)==Fo}function Ga(t,e){for(var n=-1,a=t==null?0:t.length,r=Array(a);++n<a;)r[n]=e(t[n],n,t);return r}var zo=Array.isArray;const it=zo;var Ro=1/0,Ln=F?F.prototype:void 0,Fn=Ln?Ln.toString:void 0;function Wa(t){if(typeof t=="string")return t;if(it(t))return Ga(t,Wa)+"";if(We(t))return Fn?Fn.call(t):"";var e=t+"";return e=="0"&&1/t==-Ro?"-0":e}function $t(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function Do(t){return t}var Bo="[object AsyncFunction]",Uo="[object Function]",Yo="[object GeneratorFunction]",Go="[object Proxy]";function Ha(t){if(!$t(t))return!1;var e=at(t);return e==Uo||e==Yo||e==Bo||e==Go}var Wo=z["__core-js_shared__"];const ve=Wo;var zn=function(){var t=/[^.]+$/.exec(ve&&ve.keys&&ve.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Ho(t){return!!zn&&zn in t}var Ko=Function.prototype,Xo=Ko.toString;function ot(t){if(t!=null){try{return Xo.call(t)}catch{}try{return t+""}catch{}}return""}var Vo=/[\\^$.*+?()[\]{}|]/g,qo=/^\[object .+?Constructor\]$/,Zo=Function.prototype,Jo=Object.prototype,Qo=Zo.toString,ts=Jo.hasOwnProperty,es=RegExp("^"+Qo.call(ts).replace(Vo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ns(t){if(!$t(t)||Ho(t))return!1;var e=Ha(t)?es:qo;return e.test(ot(t))}function as(t,e){return t==null?void 0:t[e]}function st(t,e){var n=as(t,e);return ns(n)?n:void 0}var rs=st(z,"WeakMap");const Pe=rs;var Rn=Object.create,is=function(){function t(){}return function(e){if(!$t(e))return{};if(Rn)return Rn(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();const os=is;function ss(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function fs(t,e){var n=-1,a=t.length;for(e||(e=Array(a));++n<a;)e[n]=t[n];return e}var ls=800,cs=16,us=Date.now;function ms(t){var e=0,n=0;return function(){var a=us(),r=cs-(a-n);if(n=a,r>0){if(++e>=ls)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function ds(t){return function(){return t}}var vs=function(){try{var t=st(Object,"defineProperty");return t({},"",{}),t}catch{}}();const te=vs;var ps=te?function(t,e){return te(t,"toString",{configurable:!0,enumerable:!1,value:ds(e),writable:!0})}:Do;const gs=ps;var bs=ms(gs);const hs=bs;function ys(t,e){for(var n=-1,a=t==null?0:t.length;++n<a&&e(t[n],n,t)!==!1;);return t}var ws=9007199254740991,xs=/^(?:0|[1-9]\d*)$/;function ks(t,e){var n=typeof t;return e=e??ws,!!e&&(n=="number"||n!="symbol"&&xs.test(t))&&t>-1&&t%1==0&&t<e}function Ka(t,e,n){e=="__proto__"&&te?te(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function Xa(t,e){return t===e||t!==t&&e!==e}var As=Object.prototype,Os=As.hasOwnProperty;function Va(t,e,n){var a=t[e];(!(Os.call(t,e)&&Xa(a,n))||n===void 0&&!(e in t))&&Ka(t,e,n)}function jt(t,e,n,a){var r=!n;n||(n={});for(var i=-1,o=e.length;++i<o;){var s=e[i],f=a?a(n[s],t[s],s,n,t):void 0;f===void 0&&(f=t[s]),r?Ka(n,s,f):Va(n,s,f)}return n}var Dn=Math.max;function Ss(t,e,n){return e=Dn(e===void 0?t.length-1:e,0),function(){for(var a=arguments,r=-1,i=Dn(a.length-e,0),o=Array(i);++r<i;)o[r]=a[e+r];r=-1;for(var s=Array(e+1);++r<e;)s[r]=a[r];return s[e]=n(o),ss(t,this,s)}}var _s=9007199254740991;function qa(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=_s}function Za(t){return t!=null&&qa(t.length)&&!Ha(t)}var Ts=Object.prototype;function He(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||Ts;return t===n}function Ps(t,e){for(var n=-1,a=Array(t);++n<t;)a[n]=e(n);return a}var Es="[object Arguments]";function Bn(t){return rt(t)&&at(t)==Es}var Ja=Object.prototype,Cs=Ja.hasOwnProperty,Is=Ja.propertyIsEnumerable,$s=Bn(function(){return arguments}())?Bn:function(t){return rt(t)&&Cs.call(t,"callee")&&!Is.call(t,"callee")};const Qa=$s;function js(){return!1}var tr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Un=tr&&typeof module=="object"&&module&&!module.nodeType&&module,Ns=Un&&Un.exports===tr,Yn=Ns?z.Buffer:void 0,Ms=Yn?Yn.isBuffer:void 0,Ls=Ms||js;const er=Ls;var Fs="[object Arguments]",zs="[object Array]",Rs="[object Boolean]",Ds="[object Date]",Bs="[object Error]",Us="[object Function]",Ys="[object Map]",Gs="[object Number]",Ws="[object Object]",Hs="[object RegExp]",Ks="[object Set]",Xs="[object String]",Vs="[object WeakMap]",qs="[object ArrayBuffer]",Zs="[object DataView]",Js="[object Float32Array]",Qs="[object Float64Array]",tf="[object Int8Array]",ef="[object Int16Array]",nf="[object Int32Array]",af="[object Uint8Array]",rf="[object Uint8ClampedArray]",of="[object Uint16Array]",sf="[object Uint32Array]",x={};x[Js]=x[Qs]=x[tf]=x[ef]=x[nf]=x[af]=x[rf]=x[of]=x[sf]=!0;x[Fs]=x[zs]=x[qs]=x[Rs]=x[Zs]=x[Ds]=x[Bs]=x[Us]=x[Ys]=x[Gs]=x[Ws]=x[Hs]=x[Ks]=x[Xs]=x[Vs]=!1;function ff(t){return rt(t)&&qa(t.length)&&!!x[at(t)]}function Ke(t){return function(e){return t(e)}}var nr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,xt=nr&&typeof module=="object"&&module&&!module.nodeType&&module,lf=xt&&xt.exports===nr,pe=lf&&Ua.process,cf=function(){try{var t=xt&&xt.require&&xt.require("util").types;return t||pe&&pe.binding&&pe.binding("util")}catch{}}();const dt=cf;var Gn=dt&&dt.isTypedArray,uf=Gn?Ke(Gn):ff;const mf=uf;var df=Object.prototype,vf=df.hasOwnProperty;function ar(t,e){var n=it(t),a=!n&&Qa(t),r=!n&&!a&&er(t),i=!n&&!a&&!r&&mf(t),o=n||a||r||i,s=o?Ps(t.length,String):[],f=s.length;for(var c in t)(e||vf.call(t,c))&&!(o&&(c=="length"||r&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||ks(c,f)))&&s.push(c);return s}function rr(t,e){return function(n){return t(e(n))}}var pf=rr(Object.keys,Object);const gf=pf;var bf=Object.prototype,hf=bf.hasOwnProperty;function yf(t){if(!He(t))return gf(t);var e=[];for(var n in Object(t))hf.call(t,n)&&n!="constructor"&&e.push(n);return e}function Xe(t){return Za(t)?ar(t):yf(t)}function wf(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var xf=Object.prototype,kf=xf.hasOwnProperty;function Af(t){if(!$t(t))return wf(t);var e=He(t),n=[];for(var a in t)a=="constructor"&&(e||!kf.call(t,a))||n.push(a);return n}function Ve(t){return Za(t)?ar(t,!0):Af(t)}var Of=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Sf=/^\w*$/;function _f(t,e){if(it(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||We(t)?!0:Sf.test(t)||!Of.test(t)||e!=null&&t in Object(e)}var Tf=st(Object,"create");const Tt=Tf;function Pf(){this.__data__=Tt?Tt(null):{},this.size=0}function Ef(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Cf="__lodash_hash_undefined__",If=Object.prototype,$f=If.hasOwnProperty;function jf(t){var e=this.__data__;if(Tt){var n=e[t];return n===Cf?void 0:n}return $f.call(e,t)?e[t]:void 0}var Nf=Object.prototype,Mf=Nf.hasOwnProperty;function Lf(t){var e=this.__data__;return Tt?e[t]!==void 0:Mf.call(e,t)}var Ff="__lodash_hash_undefined__";function zf(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Tt&&e===void 0?Ff:e,this}function nt(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}nt.prototype.clear=Pf;nt.prototype.delete=Ef;nt.prototype.get=jf;nt.prototype.has=Lf;nt.prototype.set=zf;function Rf(){this.__data__=[],this.size=0}function oe(t,e){for(var n=t.length;n--;)if(Xa(t[n][0],e))return n;return-1}var Df=Array.prototype,Bf=Df.splice;function Uf(t){var e=this.__data__,n=oe(e,t);if(n<0)return!1;var a=e.length-1;return n==a?e.pop():Bf.call(e,n,1),--this.size,!0}function Yf(t){var e=this.__data__,n=oe(e,t);return n<0?void 0:e[n][1]}function Gf(t){return oe(this.__data__,t)>-1}function Wf(t,e){var n=this.__data__,a=oe(n,t);return a<0?(++this.size,n.push([t,e])):n[a][1]=e,this}function G(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}G.prototype.clear=Rf;G.prototype.delete=Uf;G.prototype.get=Yf;G.prototype.has=Gf;G.prototype.set=Wf;var Hf=st(z,"Map");const Pt=Hf;function Kf(){this.size=0,this.__data__={hash:new nt,map:new(Pt||G),string:new nt}}function Xf(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function se(t,e){var n=t.__data__;return Xf(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Vf(t){var e=se(this,t).delete(t);return this.size-=e?1:0,e}function qf(t){return se(this,t).get(t)}function Zf(t){return se(this,t).has(t)}function Jf(t,e){var n=se(this,t),a=n.size;return n.set(t,e),this.size+=n.size==a?0:1,this}function q(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}q.prototype.clear=Kf;q.prototype.delete=Vf;q.prototype.get=qf;q.prototype.has=Zf;q.prototype.set=Jf;var Qf="Expected a function";function qe(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Qf);var n=function(){var a=arguments,r=e?e.apply(this,a):a[0],i=n.cache;if(i.has(r))return i.get(r);var o=t.apply(this,a);return n.cache=i.set(r,o)||i,o};return n.cache=new(qe.Cache||q),n}qe.Cache=q;var tl=500;function el(t){var e=qe(t,function(a){return n.size===tl&&n.clear(),a}),n=e.cache;return e}var nl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,al=/\\(\\)?/g,rl=el(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(nl,function(n,a,r,i){e.push(r?i.replace(al,"$1"):a||n)}),e});const il=rl;function ol(t){return t==null?"":Wa(t)}function Ze(t,e){return it(t)?t:_f(t,e)?[t]:il(ol(t))}var sl=1/0;function ir(t){if(typeof t=="string"||We(t))return t;var e=t+"";return e=="0"&&1/t==-sl?"-0":e}function fl(t,e){e=Ze(e,t);for(var n=0,a=e.length;t!=null&&n<a;)t=t[ir(e[n++])];return n&&n==a?t:void 0}function Je(t,e){for(var n=-1,a=e.length,r=t.length;++n<a;)t[r+n]=e[n];return t}var Wn=F?F.isConcatSpreadable:void 0;function ll(t){return it(t)||Qa(t)||!!(Wn&&t&&t[Wn])}function or(t,e,n,a,r){var i=-1,o=t.length;for(n||(n=ll),r||(r=[]);++i<o;){var s=t[i];e>0&&n(s)?e>1?or(s,e-1,n,a,r):Je(r,s):a||(r[r.length]=s)}return r}function cl(t){var e=t==null?0:t.length;return e?or(t,1):[]}function ul(t){return hs(Ss(t,void 0,cl),t+"")}var ml=rr(Object.getPrototypeOf,Object);const Qe=ml;var dl="[object Object]",vl=Function.prototype,pl=Object.prototype,sr=vl.toString,gl=pl.hasOwnProperty,bl=sr.call(Object);function hl(t){if(!rt(t)||at(t)!=dl)return!1;var e=Qe(t);if(e===null)return!0;var n=gl.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&sr.call(n)==bl}function yl(t,e,n){var a=-1,r=t.length;e<0&&(e=-e>r?0:r+e),n=n>r?r:n,n<0&&(n+=r),r=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(r);++a<r;)i[a]=t[a+e];return i}function wl(){this.__data__=new G,this.size=0}function xl(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function kl(t){return this.__data__.get(t)}function Al(t){return this.__data__.has(t)}var Ol=200;function Sl(t,e){var n=this.__data__;if(n instanceof G){var a=n.__data__;if(!Pt||a.length<Ol-1)return a.push([t,e]),this.size=++n.size,this;n=this.__data__=new q(a)}return n.set(t,e),this.size=n.size,this}function pt(t){var e=this.__data__=new G(t);this.size=e.size}pt.prototype.clear=wl;pt.prototype.delete=xl;pt.prototype.get=kl;pt.prototype.has=Al;pt.prototype.set=Sl;function _l(t,e){return t&&jt(e,Xe(e),t)}function Tl(t,e){return t&&jt(e,Ve(e),t)}var fr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Hn=fr&&typeof module=="object"&&module&&!module.nodeType&&module,Pl=Hn&&Hn.exports===fr,Kn=Pl?z.Buffer:void 0,Xn=Kn?Kn.allocUnsafe:void 0;function El(t,e){if(e)return t.slice();var n=t.length,a=Xn?Xn(n):new t.constructor(n);return t.copy(a),a}function Cl(t,e){for(var n=-1,a=t==null?0:t.length,r=0,i=[];++n<a;){var o=t[n];e(o,n,t)&&(i[r++]=o)}return i}function lr(){return[]}var Il=Object.prototype,$l=Il.propertyIsEnumerable,Vn=Object.getOwnPropertySymbols,jl=Vn?function(t){return t==null?[]:(t=Object(t),Cl(Vn(t),function(e){return $l.call(t,e)}))}:lr;const tn=jl;function Nl(t,e){return jt(t,tn(t),e)}var Ml=Object.getOwnPropertySymbols,Ll=Ml?function(t){for(var e=[];t;)Je(e,tn(t)),t=Qe(t);return e}:lr;const cr=Ll;function Fl(t,e){return jt(t,cr(t),e)}function ur(t,e,n){var a=e(t);return it(t)?a:Je(a,n(t))}function zl(t){return ur(t,Xe,tn)}function mr(t){return ur(t,Ve,cr)}var Rl=st(z,"DataView");const Ee=Rl;var Dl=st(z,"Promise");const Ce=Dl;var Bl=st(z,"Set");const Ie=Bl;var qn="[object Map]",Ul="[object Object]",Zn="[object Promise]",Jn="[object Set]",Qn="[object WeakMap]",ta="[object DataView]",Yl=ot(Ee),Gl=ot(Pt),Wl=ot(Ce),Hl=ot(Ie),Kl=ot(Pe),Z=at;(Ee&&Z(new Ee(new ArrayBuffer(1)))!=ta||Pt&&Z(new Pt)!=qn||Ce&&Z(Ce.resolve())!=Zn||Ie&&Z(new Ie)!=Jn||Pe&&Z(new Pe)!=Qn)&&(Z=function(t){var e=at(t),n=e==Ul?t.constructor:void 0,a=n?ot(n):"";if(a)switch(a){case Yl:return ta;case Gl:return qn;case Wl:return Zn;case Hl:return Jn;case Kl:return Qn}return e});const en=Z;var Xl=Object.prototype,Vl=Xl.hasOwnProperty;function ql(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&Vl.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var Zl=z.Uint8Array;const ea=Zl;function nn(t){var e=new t.constructor(t.byteLength);return new ea(e).set(new ea(t)),e}function Jl(t,e){var n=e?nn(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var Ql=/\w*$/;function tc(t){var e=new t.constructor(t.source,Ql.exec(t));return e.lastIndex=t.lastIndex,e}var na=F?F.prototype:void 0,aa=na?na.valueOf:void 0;function ec(t){return aa?Object(aa.call(t)):{}}function nc(t,e){var n=e?nn(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var ac="[object Boolean]",rc="[object Date]",ic="[object Map]",oc="[object Number]",sc="[object RegExp]",fc="[object Set]",lc="[object String]",cc="[object Symbol]",uc="[object ArrayBuffer]",mc="[object DataView]",dc="[object Float32Array]",vc="[object Float64Array]",pc="[object Int8Array]",gc="[object Int16Array]",bc="[object Int32Array]",hc="[object Uint8Array]",yc="[object Uint8ClampedArray]",wc="[object Uint16Array]",xc="[object Uint32Array]";function kc(t,e,n){var a=t.constructor;switch(e){case uc:return nn(t);case ac:case rc:return new a(+t);case mc:return Jl(t,n);case dc:case vc:case pc:case gc:case bc:case hc:case yc:case wc:case xc:return nc(t,n);case ic:return new a;case oc:case lc:return new a(t);case sc:return tc(t);case fc:return new a;case cc:return ec(t)}}function Ac(t){return typeof t.constructor=="function"&&!He(t)?os(Qe(t)):{}}var Oc="[object Map]";function Sc(t){return rt(t)&&en(t)==Oc}var ra=dt&&dt.isMap,_c=ra?Ke(ra):Sc;const Tc=_c;var Pc="[object Set]";function Ec(t){return rt(t)&&en(t)==Pc}var ia=dt&&dt.isSet,Cc=ia?Ke(ia):Ec;const Ic=Cc;var $c=1,jc=2,Nc=4,dr="[object Arguments]",Mc="[object Array]",Lc="[object Boolean]",Fc="[object Date]",zc="[object Error]",vr="[object Function]",Rc="[object GeneratorFunction]",Dc="[object Map]",Bc="[object Number]",pr="[object Object]",Uc="[object RegExp]",Yc="[object Set]",Gc="[object String]",Wc="[object Symbol]",Hc="[object WeakMap]",Kc="[object ArrayBuffer]",Xc="[object DataView]",Vc="[object Float32Array]",qc="[object Float64Array]",Zc="[object Int8Array]",Jc="[object Int16Array]",Qc="[object Int32Array]",tu="[object Uint8Array]",eu="[object Uint8ClampedArray]",nu="[object Uint16Array]",au="[object Uint32Array]",w={};w[dr]=w[Mc]=w[Kc]=w[Xc]=w[Lc]=w[Fc]=w[Vc]=w[qc]=w[Zc]=w[Jc]=w[Qc]=w[Dc]=w[Bc]=w[pr]=w[Uc]=w[Yc]=w[Gc]=w[Wc]=w[tu]=w[eu]=w[nu]=w[au]=!0;w[zc]=w[vr]=w[Hc]=!1;function Ht(t,e,n,a,r,i){var o,s=e&$c,f=e&jc,c=e&Nc;if(n&&(o=r?n(t,a,r,i):n(t)),o!==void 0)return o;if(!$t(t))return t;var l=it(t);if(l){if(o=ql(t),!s)return fs(t,o)}else{var u=en(t),g=u==vr||u==Rc;if(er(t))return El(t,s);if(u==pr||u==dr||g&&!r){if(o=f||g?{}:Ac(t),!s)return f?Fl(t,Tl(o,t)):Nl(t,_l(o,t))}else{if(!w[u])return r?t:{};o=kc(t,u,s)}}i||(i=new pt);var b=i.get(t);if(b)return b;i.set(t,o),Ic(t)?t.forEach(function(h){o.add(Ht(h,e,n,h,t,i))}):Tc(t)&&t.forEach(function(h,d){o.set(d,Ht(h,e,n,d,t,i))});var S=c?f?mr:zl:f?Ve:Xe,_=l?void 0:S(t);return ys(_||t,function(h,d){_&&(d=h,h=t[d]),Va(o,d,Ht(h,e,n,d,t,i))}),o}function ru(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}function iu(t,e){return e.length<2?t:fl(t,yl(e,0,-1))}function ou(t,e){return e=Ze(e,t),t=iu(t,e),t==null||delete t[ir(ru(e))]}function su(t){return hl(t)?void 0:t}var fu=1,lu=2,cu=4,uu=ul(function(t,e){var n={};if(t==null)return n;var a=!1;e=Ga(e,function(i){return i=Ze(i,t),a||(a=i.length>1),i}),jt(t,mr(t),n),a&&(n=Ht(n,fu|lu|cu,su));for(var r=e.length;r--;)ou(n,e[r]);return n});const mu=uu,Kt=ee({name:"VkIcon",inheritAttrs:!1,__name:"Icon",props:{border:{type:Boolean},fixedWidth:{type:Boolean},flip:{},icon:{},mask:{},maskId:{},listItem:{type:Boolean},pull:{},pulse:{type:Boolean},rotation:{},swapOpacity:{type:Boolean},size:{},spin:{type:Boolean},transform:{},symbol:{type:[Boolean,String]},title:{},titleId:{},inverse:{type:Boolean},bounce:{type:Boolean},shake:{type:Boolean},beat:{type:Boolean},fade:{type:Boolean},beatFade:{type:Boolean},spinPulse:{type:Boolean},spinReverse:{type:Boolean},type:{},color:{}},setup(t){const e=t,n=I(()=>mu(e,["type","color"])),a=I(()=>e.color?{color:e.color}:{});return(r,i)=>(Yt(),la("i",yr({class:["vk-icon",{[`vk-icon--${r.type}`]:r.type}],style:a.value},r.$attrs),[ca(Vt(Oo),br(hr(n.value)),null,16)],16))}});Kt.install=t=>{t.component(Kt.name,Kt)};const oa=ht(0),du=(t=2e3)=>{const e=ht(t),n=I(()=>oa.value+e.value);return{currentZIndex:n,nextZIndex:()=>(oa.value++,n.value),initialZIndex:e}},vu=du;let pu=1;const ct=wr([]),ku=t=>{const{nextZIndex:e}=vu(),n=`message_${pu++}`,a=document.createElement("div"),r=()=>{const l=ct.findIndex(u=>u.id===n);l!==-1&&(ct.splice(l,1),an(null,a))},i=()=>{const l=ct.find(u=>u.id===n);l&&(l.vm.exposed.visible.value=!1)},o={...t,id:n,zIndex:e(),onDestroy:r},s=fa(Xt,o);an(s,a),document.body.appendChild(a.firstElementChild);const f=s.component,c={id:n,vnode:s,vm:f,destroy:i,props:o};return ct.push(c),c},gu=t=>{const e=ct.findIndex(n=>n.id===t);return e<=0?0:ct[e-1].vm.exposed.bottomOffset.value},bu=(t,e,n)=>{xr(t)?sa(t,(a,r)=>{r==null||r.removeEventListener(e,n),a==null||a.addEventListener(e,n)}):ua(()=>{t.addEventListener(e,n)}),kr(()=>{var a;(a=Vt(t))==null||a.removeEventListener(e,n)})},hu={class:"vk-message__content"},yu={key:0,class:"vk-message__close"},Xt=ee({name:"VkMessage",__name:"Message",props:{message:{},duration:{default:3e3},showClose:{type:Boolean},type:{default:"info"},onDestroy:{},offset:{default:20},id:{},zIndex:{},transitionName:{default:"fade-up"}},setup(t,{expose:e}){const n=t,a=ht(!1),r=ht(null),i=ht(0),o=I(()=>gu(n.id)),s=I(()=>o.value+n.offset),f=I(()=>s.value+i.value),c=I(()=>({top:s.value+"px",zIndex:n.zIndex}));let l;const u=()=>{n.duration!==0&&(l=setTimeout(()=>{a.value=!1},n.duration))},g=()=>{clearTimeout(l)};bu(document,"keydown",h=>{h.code==="Escape"&&(a.value=!1)}),ua(()=>{a.value=!0,u()});const S=()=>{n.onDestroy()},_=()=>{i.value=r.value.getBoundingClientRect().height};return e({bottomOffset:f,visible:a}),(h,d)=>(Yt(),rn(Cr,{name:h.transitionName,onAfterLeave:S,onEnter:_},{default:Ar(()=>[Or(on("div",{ref_key:"messageRef",ref:r,role:"alert",class:Sr(["vk-message",{[`vk-message--${h.type}`]:h.type,"is-close":h.showClose}]),style:_r(c.value),onMouseenter:g,onMouseleave:u},[on("div",hu,[Tr(h.$slots,"default",{},()=>[h.message?(Yt(),rn(Vt($r),{key:0,vNode:h.message},null,8,["vNode"])):sn("",!0)])]),h.showClose?(Yt(),la("div",yu,[ca(Vt(Kt),{onClick:d[0]||(d[0]=Pr(p=>a.value=!1,["stop"])),icon:"xmark"})])):sn("",!0)],38),[[Er,a.value]])]),_:3},8,["name"]))}});Xt.install=t=>{t.component(Xt.name,Xt)};export{$r as R,Kt as _,$t as a,Xt as b,ku as c,We as i,xu as l,z as r};
