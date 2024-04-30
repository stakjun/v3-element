import{d as _e,e as z,w as Jn,a1 as or,o as sr,c as fr,D as lr,ap as cr,aq as ur,b as Qn,C as mr,f as ta,ar as dr,h as vr,as as pr}from"./framework.2dda4f01.js";const gr=_e({props:{vNode:{type:[String,Object],required:!0}},setup(t){return()=>t.vNode}}),Qc=gr;function Je(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Je(Object(n),!0).forEach(function(a){E(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Je(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Gt(t){"@babel/helpers - typeof";return Gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gt(t)}function br(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Qe(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function hr(t,e,n){return e&&Qe(t.prototype,e),n&&Qe(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Te(t,e){return wr(t)||kr(t,e)||ea(t,e)||Or()}function Tt(t){return yr(t)||xr(t)||ea(t)||Ar()}function yr(t){if(Array.isArray(t))return ce(t)}function wr(t){if(Array.isArray(t))return t}function xr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function kr(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function ea(t,e){if(t){if(typeof t=="string")return ce(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ce(t,e)}}function ce(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Ar(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Or(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var tn=function(){},Pe={},na={},aa=null,ra={mark:tn,measure:tn};try{typeof window<"u"&&(Pe=window),typeof document<"u"&&(na=document),typeof MutationObserver<"u"&&(aa=MutationObserver),typeof performance<"u"&&(ra=performance)}catch{}var Sr=Pe.navigator||{},en=Sr.userAgent,nn=en===void 0?"":en,K=Pe,k=na,an=aa,$t=ra;K.document;var Y=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",ia=~nn.indexOf("MSIE")||~nn.indexOf("Trident/"),jt,Nt,Mt,Lt,Ft,D="___FONT_AWESOME___",ue=16,oa="fa",sa="svg-inline--fa",tt="data-fa-i2svg",me="data-fa-pseudo-element",_r="data-fa-pseudo-element-pending",Ee="data-prefix",Ie="data-icon",rn="fontawesome-i2svg",Tr="async",Pr=["HTML","HEAD","STYLE","SCRIPT"],fa=function(){try{return!0}catch{return!1}}(),x="classic",O="sharp",Ce=[x,O];function Pt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[x]}})}var wt=Pt((jt={},E(jt,x,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),E(jt,O,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),jt)),xt=Pt((Nt={},E(Nt,x,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),E(Nt,O,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Nt)),kt=Pt((Mt={},E(Mt,x,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),E(Mt,O,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Mt)),Er=Pt((Lt={},E(Lt,x,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),E(Lt,O,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Lt)),Ir=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,la="fa-layers-text",Cr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,$r=Pt((Ft={},E(Ft,x,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),E(Ft,O,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ft)),ca=[1,2,3,4,5,6,7,8,9,10],jr=ca.concat([11,12,13,14,15,16,17,18,19,20]),Nr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},At=new Set;Object.keys(xt[x]).map(At.add.bind(At));Object.keys(xt[O]).map(At.add.bind(At));var Mr=[].concat(Ce,Tt(At),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY]).concat(ca.map(function(t){return"".concat(t,"x")})).concat(jr.map(function(t){return"w-".concat(t)})),bt=K.FontAwesomeConfig||{};function Lr(t){var e=k.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Fr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(k&&typeof k.querySelector=="function"){var zr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];zr.forEach(function(t){var e=Te(t,2),n=e[0],a=e[1],r=Fr(Lr(n));r!=null&&(bt[a]=r)})}var ua={styleDefault:"solid",familyDefault:"classic",cssPrefix:oa,replacementClass:sa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};bt.familyPrefix&&(bt.cssPrefix=bt.familyPrefix);var ut=u(u({},ua),bt);ut.autoReplaceSvg||(ut.observeMutations=!1);var v={};Object.keys(ua).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(n){ut[t]=n,ht.forEach(function(a){return a(v)})},get:function(){return ut[t]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(e){ut.cssPrefix=e,ht.forEach(function(n){return n(v)})},get:function(){return ut.cssPrefix}});K.FontAwesomeConfig=v;var ht=[];function Rr(t){return ht.push(t),function(){ht.splice(ht.indexOf(t),1)}}var H=ue,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Dr(t){if(!(!t||!Y)){var e=k.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=k.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return k.head.insertBefore(e,a),t}}var Br="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ot(){for(var t=12,e="";t-- >0;)e+=Br[Math.random()*62|0];return e}function dt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function $e(t){return t.classList?dt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ma(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ur(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(ma(t[n]),'" ')},"").trim()}function Vt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function je(t){return t.size!==M.size||t.x!==M.x||t.y!==M.y||t.rotate!==M.rotate||t.flipX||t.flipY}function Yr(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function Gr(t){var e=t.transform,n=t.width,a=n===void 0?ue:n,r=t.height,i=r===void 0?ue:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&ia?f+="translate(".concat(e.x/H-a/2,"em, ").concat(e.y/H-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/H,"em), calc(-50% + ").concat(e.y/H,"em)) "):f+="translate(".concat(e.x/H,"em, ").concat(e.y/H,"em) "),f+="scale(".concat(e.size/H*(e.flipX?-1:1),", ").concat(e.size/H*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var Wr=`:root, :host {
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
}`;function da(){var t=oa,e=sa,n=v.cssPrefix,a=v.replacementClass,r=Wr;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var on=!1;function ne(){v.autoAddCss&&!on&&(Dr(da()),on=!0)}var Hr={mixout:function(){return{dom:{css:da,insertCss:ne}}},hooks:function(){return{beforeDOMElementCreation:function(){ne()},beforeI2svg:function(){ne()}}}},B=K||{};B[D]||(B[D]={});B[D].styles||(B[D].styles={});B[D].hooks||(B[D].hooks={});B[D].shims||(B[D].shims=[]);var j=B[D],va=[],Kr=function t(){k.removeEventListener("DOMContentLoaded",t),Wt=1,va.map(function(e){return e()})},Wt=!1;Y&&(Wt=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),Wt||k.addEventListener("DOMContentLoaded",Kr));function Xr(t){Y&&(Wt?setTimeout(t,0):va.push(t))}function Et(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?ma(t):"<".concat(e," ").concat(Ur(a),">").concat(i.map(Et).join(""),"</").concat(e,">")}function sn(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Vr=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},ae=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?Vr(n,r):n,f,l,c;for(a===void 0?(f=1,c=e[i[0]]):(f=0,c=a);f<o;f++)l=i[f],c=s(c,e[l],l,e);return c};function qr(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function de(t){var e=qr(t);return e.length===1?e[0].toString(16):null}function Zr(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function fn(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function ve(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=fn(e);typeof j.hooks.addPack=="function"&&!r?j.hooks.addPack(t,fn(e)):j.styles[t]=u(u({},j.styles[t]||{}),i),t==="fas"&&ve("fa",e)}var zt,Rt,Dt,ft=j.styles,Jr=j.shims,Qr=(zt={},E(zt,x,Object.values(kt[x])),E(zt,O,Object.values(kt[O])),zt),Ne=null,pa={},ga={},ba={},ha={},ya={},ti=(Rt={},E(Rt,x,Object.keys(wt[x])),E(Rt,O,Object.keys(wt[O])),Rt);function ei(t){return~Mr.indexOf(t)}function ni(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ei(r)?r:null}var wa=function(){var e=function(i){return ae(ft,function(o,s,f){return o[f]=ae(s,i,{}),o},{})};pa=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),ga=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),ya=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in ft||v.autoFetchSvg,a=ae(Jr,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});ba=a.names,ha=a.unicodes,Ne=qt(v.styleDefault,{family:v.familyDefault})};Rr(function(t){Ne=qt(t.styleDefault,{family:v.familyDefault})});wa();function Me(t,e){return(pa[t]||{})[e]}function ai(t,e){return(ga[t]||{})[e]}function Q(t,e){return(ya[t]||{})[e]}function xa(t){return ba[t]||{prefix:null,iconName:null}}function ri(t){var e=ha[t],n=Me("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function X(){return Ne}var Le=function(){return{prefix:null,iconName:null,rest:[]}};function qt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?x:n,r=wt[a][t],i=xt[a][t]||xt[a][r],o=t in j.styles?t:null;return i||o||null}var ln=(Dt={},E(Dt,x,Object.keys(kt[x])),E(Dt,O,Object.keys(kt[O])),Dt);function Zt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},E(e,x,"".concat(v.cssPrefix,"-").concat(x)),E(e,O,"".concat(v.cssPrefix,"-").concat(O)),e),o=null,s=x;(t.includes(i[x])||t.some(function(l){return ln[x].includes(l)}))&&(s=x),(t.includes(i[O])||t.some(function(l){return ln[O].includes(l)}))&&(s=O);var f=t.reduce(function(l,c){var m=ni(v.cssPrefix,c);if(ft[c]?(c=Qr[s].includes(c)?Er[s][c]:c,o=c,l.prefix=c):ti[s].indexOf(c)>-1?(o=c,l.prefix=qt(c,{family:s})):m?l.iconName=m:c!==v.replacementClass&&c!==i[x]&&c!==i[O]&&l.rest.push(c),!r&&l.prefix&&l.iconName){var g=o==="fa"?xa(l.iconName):{},b=Q(l.prefix,l.iconName);g.prefix&&(o=null),l.iconName=g.iconName||b||l.iconName,l.prefix=g.prefix||l.prefix,l.prefix==="far"&&!ft.far&&ft.fas&&!v.autoFetchSvg&&(l.prefix="fas")}return l},Le());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===O&&(ft.fass||v.autoFetchSvg)&&(f.prefix="fass",f.iconName=Q(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=X()||"fas"),f}var ii=function(){function t(){br(this,t),this.definitions={}}return hr(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),ve(s,o[s]);var f=kt[x][s];f&&ve(f,o[s]),wa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,c=l[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=l)}),n[s][f]=l}),n}}]),t}(),cn=[],lt={},ct={},oi=Object.keys(ct);function si(t,e){var n=e.mixoutsTo;return cn=t,lt={},Object.keys(ct).forEach(function(a){oi.indexOf(a)===-1&&delete ct[a]}),cn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Gt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){lt[o]||(lt[o]=[]),lt[o].push(i[o])})}a.provides&&a.provides(ct)}),n}function pe(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=lt[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function et(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=lt[t]||[];r.forEach(function(i){i.apply(null,n)})}function U(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ct[t]?ct[t].apply(null,e):void 0}function ge(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||X();if(e)return e=Q(n,e)||e,sn(ka.definitions,n,e)||sn(j.styles,n,e)}var ka=new ii,fi=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,et("noAuto")},li={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y?(et("beforeI2svg",e),U("pseudoElements2svg",e),U("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Xr(function(){ui({autoReplaceSvgRoot:n}),et("watch",e)})}},ci={icon:function(e){if(e===null)return null;if(Gt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=qt(e[0]);return{prefix:a,iconName:Q(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(v.cssPrefix,"-"))>-1||e.match(Ir))){var r=Zt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||X(),iconName:Q(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=X();return{prefix:i,iconName:Q(i,e)||e}}}},C={noAuto:fi,config:v,dom:li,parse:ci,library:ka,findIconDefinition:ge,toHtml:Et},ui=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?k:n;(Object.keys(j.styles).length>0||v.autoFetchSvg)&&Y&&v.autoReplaceSvg&&C.dom.i2svg({node:a})};function Jt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return Et(a)})}}),Object.defineProperty(t,"node",{get:function(){if(Y){var a=k.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function mi(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(je(o)&&n.found&&!a.found){var s=n.width,f=n.height,l={x:s/f/2,y:.5};r.style=Vt(u(u({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function di(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function Fe(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,c=t.titleId,m=t.extra,g=t.watchable,b=g===void 0?!1:g,_=a.found?a:n,T=_.width,A=_.height,d=r==="fak",p=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(W){return m.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(m.classes).join(" "),h={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:p,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(A)})},S=d&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/A*16*.0625,"em")}:{};b&&(h.attributes[tt]=""),f&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||Ot())},children:[f]}),delete h.attributes.title);var P=u(u({},h),{},{prefix:r,iconName:i,main:n,mask:a,maskId:l,transform:o,symbol:s,styles:u(u({},S),m.styles)}),N=a.found&&n.found?U("generateAbstractMask",P)||{children:[],attributes:{}}:U("generateAbstractIcon",P)||{children:[],attributes:{}},$=N.children,ee=N.attributes;return P.children=$,P.attributes=ee,s?di(P):mi(P)}function un(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[tt]="");var c=u({},o.styles);je(r)&&(c.transform=Gr({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var m=Vt(c);m.length>0&&(l.style=m);var g=[];return g.push({tag:"span",attributes:l,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function vi(t){var e=t.content,n=t.title,a=t.extra,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Vt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var re=j.styles;function be(t){var e=t[0],n=t[1],a=t.slice(4),r=Te(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(J.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(J.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(J.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var pi={found:!1,width:512,height:512};function gi(t,e){!fa&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function he(t,e){var n=e;return e==="fa"&&v.styleDefault!==null&&(e=X()),new Promise(function(a,r){if(U("missingIconAbstract"),n==="fa"){var i=xa(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&re[e]&&re[e][t]){var o=re[e][t];return a(be(o))}gi(t,e),a(u(u({},pi),{},{icon:v.showMissingIcons&&t?U("missingIconAbstract")||{}:{}}))})}var mn=function(){},ye=v.measurePerformance&&$t&&$t.mark&&$t.measure?$t:{mark:mn,measure:mn},gt='FA "6.5.2"',bi=function(e){return ye.mark("".concat(gt," ").concat(e," begins")),function(){return Aa(e)}},Aa=function(e){ye.mark("".concat(gt," ").concat(e," ends")),ye.measure("".concat(gt," ").concat(e),"".concat(gt," ").concat(e," begins"),"".concat(gt," ").concat(e," ends"))},ze={begin:bi,end:Aa},Bt=function(){};function dn(t){var e=t.getAttribute?t.getAttribute(tt):null;return typeof e=="string"}function hi(t){var e=t.getAttribute?t.getAttribute(Ee):null,n=t.getAttribute?t.getAttribute(Ie):null;return e&&n}function yi(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function wi(){if(v.autoReplaceSvg===!0)return Ut.replace;var t=Ut[v.autoReplaceSvg];return t||Ut.replace}function xi(t){return k.createElementNS("http://www.w3.org/2000/svg",t)}function ki(t){return k.createElement(t)}function Oa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?xi:ki:n;if(typeof t=="string")return k.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Oa(o,{ceFn:a}))}),r}function Ai(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ut={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Oa(r),n)}),n.getAttribute(tt)===null&&v.keepOriginalSource){var a=k.createComment(Ai(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~$e(n).indexOf(v.replacementClass))return Ut.replace(e);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===v.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return Et(s)}).join(`
`);n.setAttribute(tt,""),n.innerHTML=o}};function vn(t){t()}function Sa(t,e){var n=typeof e=="function"?e:Bt;if(t.length===0)n();else{var a=vn;v.mutateApproach===Tr&&(a=K.requestAnimationFrame||vn),a(function(){var r=wi(),i=ze.begin("mutate");t.map(r),i(),n()})}}var Re=!1;function _a(){Re=!0}function we(){Re=!1}var Ht=null;function pn(t){if(an&&v.observeMutations){var e=t.treeCallback,n=e===void 0?Bt:e,a=t.nodeCallback,r=a===void 0?Bt:a,i=t.pseudoElementsCallback,o=i===void 0?Bt:i,s=t.observeMutationsRoot,f=s===void 0?k:s;Ht=new an(function(l){if(!Re){var c=X();dt(l).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!dn(m.addedNodes[0])&&(v.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&v.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&dn(m.target)&&~Nr.indexOf(m.attributeName))if(m.attributeName==="class"&&hi(m.target)){var g=Zt($e(m.target)),b=g.prefix,_=g.iconName;m.target.setAttribute(Ee,b||c),_&&m.target.setAttribute(Ie,_)}else yi(m.target)&&r(m.target)})}}),Y&&Ht.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Oi(){Ht&&Ht.disconnect()}function Si(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function _i(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Zt($e(t));return r.prefix||(r.prefix=X()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ai(r.prefix,t.innerText)||Me(r.prefix,de(t.innerText))),!r.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ti(t){var e=dt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return v.autoA11y&&(n?e["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||Ot()):(e["aria-hidden"]="true",e.focusable="false")),e}function Pi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=_i(t),a=n.iconName,r=n.prefix,i=n.rest,o=Ti(t),s=pe("parseNodeAttributes",{},t),f=e.styleParser?Si(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Ei=j.styles;function Ta(t){var e=v.autoReplaceSvg==="nest"?gn(t,{styleParser:!1}):gn(t);return~e.extra.classes.indexOf(la)?U("generateLayersText",t,e):U("generateSvgReplacementMutation",t,e)}var V=new Set;Ce.map(function(t){V.add("fa-".concat(t))});Object.keys(wt[x]).map(V.add.bind(V));Object.keys(wt[O]).map(V.add.bind(V));V=Tt(V);function bn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Y)return Promise.resolve();var n=k.documentElement.classList,a=function(m){return n.add("".concat(rn,"-").concat(m))},r=function(m){return n.remove("".concat(rn,"-").concat(m))},i=v.autoFetchSvg?V:Ce.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Ei));i.includes("fa")||i.push("fa");var o=[".".concat(la,":not([").concat(tt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(tt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=dt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=ze.begin("onTree"),l=s.reduce(function(c,m){try{var g=Ta(m);g&&c.push(g)}catch(b){fa||b.name==="MissingIcon"&&console.error(b)}return c},[]);return new Promise(function(c,m){Promise.all(l).then(function(g){Sa(g,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),c()})}).catch(function(g){f(),m(g)})})}function Ii(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ta(t).then(function(n){n&&Sa([n],e)})}function Ci(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:ge(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:ge(r||{})),t(a,u(u({},n),{},{mask:r}))}}var $i=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?M:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,l=n.maskId,c=l===void 0?null:l,m=n.title,g=m===void 0?null:m,b=n.titleId,_=b===void 0?null:b,T=n.classes,A=T===void 0?[]:T,d=n.attributes,p=d===void 0?{}:d,h=n.styles,S=h===void 0?{}:h;if(e){var P=e.prefix,N=e.iconName,$=e.icon;return Jt(u({type:"icon"},e),function(){return et("beforeDOMElementCreation",{iconDefinition:e,params:n}),v.autoA11y&&(g?p["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(_||Ot()):(p["aria-hidden"]="true",p.focusable="false")),Fe({icons:{main:be($),mask:f?be(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:N,transform:u(u({},M),r),symbol:o,title:g,maskId:c,titleId:_,extra:{attributes:p,styles:S,classes:A}})})}},ji={mixout:function(){return{icon:Ci($i)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=bn,n.nodeCallback=Ii,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?k:a,i=n.callback,o=i===void 0?function(){}:i;return bn(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,c=a.mask,m=a.maskId,g=a.extra;return new Promise(function(b,_){Promise.all([he(r,s),c.iconName?he(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var A=Te(T,2),d=A[0],p=A[1];b([n,Fe({icons:{main:d,mask:p},prefix:s,iconName:r,transform:f,symbol:l,maskId:m,title:i,titleId:o,extra:g,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=Vt(s);f.length>0&&(r.style=f);var l;return je(o)&&(l=U("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},Ni={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Jt({type:"layer"},function(){et("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(Tt(i)).join(" ")},children:o}]})}}}},Mi={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,l=f===void 0?{}:f,c=a.styles,m=c===void 0?{}:c;return Jt({type:"counter",content:n},function(){return et("beforeDOMElementCreation",{content:n,params:a}),vi({content:n.toString(),title:i,extra:{attributes:l,styles:m,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(Tt(s))}})})}}}},Li={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?M:r,o=a.title,s=o===void 0?null:o,f=a.classes,l=f===void 0?[]:f,c=a.attributes,m=c===void 0?{}:c,g=a.styles,b=g===void 0?{}:g;return Jt({type:"text",content:n},function(){return et("beforeDOMElementCreation",{content:n,params:a}),un({content:n,transform:u(u({},M),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(v.cssPrefix,"-layers-text")].concat(Tt(l))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(ia){var l=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/l,f=c.height/l}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,un({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Fi=new RegExp('"',"ug"),hn=[1105920,1112319];function zi(t){var e=t.replace(Fi,""),n=Zr(e,0),a=n>=hn[0]&&n<=hn[1],r=e.length===2?e[0]===e[1]:!1;return{value:de(r?e[0]:e),isSecondary:a||r}}function yn(t,e){var n="".concat(_r).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=dt(t.children),o=i.filter(function($){return $.getAttribute(me)===e})[0],s=K.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(Cr),l=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),g=~["Sharp"].indexOf(f[2])?O:x,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?xt[g][f[2].toLowerCase()]:$r[g][l],_=zi(m),T=_.value,A=_.isSecondary,d=f[0].startsWith("FontAwesome"),p=Me(b,T),h=p;if(d){var S=ri(T);S.iconName&&S.prefix&&(p=S.iconName,b=S.prefix)}if(p&&!A&&(!o||o.getAttribute(Ee)!==b||o.getAttribute(Ie)!==h)){t.setAttribute(n,h),o&&t.removeChild(o);var P=Pi(),N=P.extra;N.attributes[me]=e,he(p,b).then(function($){var ee=Fe(u(u({},P),{},{icons:{main:$,mask:Le()},prefix:b,iconName:h,extra:N,watchable:!0})),W=k.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(W,t.firstChild):t.appendChild(W),W.outerHTML=ee.map(function(ir){return Et(ir)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ri(t){return Promise.all([yn(t,"::before"),yn(t,"::after")])}function Di(t){return t.parentNode!==document.head&&!~Pr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(me)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function wn(t){if(Y)return new Promise(function(e,n){var a=dt(t.querySelectorAll("*")).filter(Di).map(Ri),r=ze.begin("searchPseudoElements");_a(),Promise.all(a).then(function(){r(),we(),e()}).catch(function(){r(),we(),n()})})}var Bi={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=wn,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?k:a;v.searchPseudoElements&&wn(r)}}},xn=!1,Ui={mixout:function(){return{dom:{unwatch:function(){_a(),xn=!0}}}},hooks:function(){return{bootstrap:function(){pn(pe("mutationObserverCallbacks",{}))},noAuto:function(){Oi()},watch:function(n){var a=n.observeMutationsRoot;xn?we():pn(pe("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},kn=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Yi={mixout:function(){return{parse:{transform:function(n){return kn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=kn(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(l," ").concat(c)},g={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:g};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),b.path)}]}]}}}},ie={x:0,y:0,width:"100%",height:"100%"};function An(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Gi(t){return t.tag==="g"?t.children:[t]}var Wi={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Zt(r.split(" ").map(function(o){return o.trim()})):Le();return i.prefix||(i.prefix=X()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,l=i.width,c=i.icon,m=o.width,g=o.icon,b=Yr({transform:f,containerWidth:m,iconWidth:l}),_={tag:"rect",attributes:u(u({},ie),{},{fill:"white"})},T=c.children?{children:c.children.map(An)}:{},A={tag:"g",attributes:u({},b.inner),children:[An(u({tag:c.tag,attributes:u(u({},c.attributes),b.path)},T))]},d={tag:"g",attributes:u({},b.outer),children:[A]},p="mask-".concat(s||Ot()),h="clip-".concat(s||Ot()),S={tag:"mask",attributes:u(u({},ie),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,d]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:Gi(g)},S]};return a.push(P,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},ie)}),{children:a,attributes:r}}}},Hi={provides:function(e){var n=!1;K.matchMedia&&(n=K.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Ki={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Xi=[Hr,ji,Ni,Mi,Li,Bi,Ui,Yi,Wi,Hi,Ki];si(Xi,{mixoutsTo:C});C.noAuto;C.config;var tu=C.library;C.dom;var xe=C.parse;C.findIconDefinition;C.toHtml;var Vi=C.icon;C.layer;C.text;C.counter;function On(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?On(Object(n),!0).forEach(function(a){I(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):On(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Kt(t){"@babel/helpers - typeof";return Kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kt(t)}function I(t,e,n){return e=Qi(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qi(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Zi(t,e){if(t==null)return{};var n=qi(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Ji(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Qi(t){var e=Ji(t,"string");return typeof e=="symbol"?e:String(e)}var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Pa={exports:{}};(function(t){(function(e){var n=function(d,p,h){if(!l(p)||m(p)||g(p)||b(p)||f(p))return p;var S,P=0,N=0;if(c(p))for(S=[],N=p.length;P<N;P++)S.push(n(d,p[P],h));else{S={};for(var $ in p)Object.prototype.hasOwnProperty.call(p,$)&&(S[d($,h)]=n(d,p[$],h))}return S},a=function(d,p){p=p||{};var h=p.separator||"_",S=p.split||/(?=[A-Z])/;return d.split(S).join(h)},r=function(d){return _(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(p,h){return h?h.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},i=function(d){var p=r(d);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(d,p){return a(d,p).toLowerCase()},s=Object.prototype.toString,f=function(d){return typeof d=="function"},l=function(d){return d===Object(d)},c=function(d){return s.call(d)=="[object Array]"},m=function(d){return s.call(d)=="[object Date]"},g=function(d){return s.call(d)=="[object RegExp]"},b=function(d){return s.call(d)=="[object Boolean]"},_=function(d){return d=d-0,d===d},T=function(d,p){var h=p&&"process"in p?p.process:p;return typeof h!="function"?d:function(S,P){return h(S,d,P)}},A={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(d,p){return n(T(r,p),d)},decamelizeKeys:function(d,p){return n(T(o,p),d,p)},pascalizeKeys:function(d,p){return n(T(i,p),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=A:e.humps=A})(to)})(Pa);var eo=Pa.exports,no=["class","style"];function ao(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=eo.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function ro(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Ea(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return Ea(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,l){var c=t.attributes[l];switch(l){case"class":f.class=ro(c);break;case"style":f.style=ao(c);break;default:f.attrs[l]=c}return f},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Zi(n,no);return or(t.tag,R(R(R({},e),{},{class:r.class,style:R(R({},r.style),o)},r.attrs),s),a)}var Ia=!1;try{Ia=!0}catch{}function io(){if(!Ia&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function oe(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?I({},t,e):{}}function oo(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},I(e,"fa-".concat(t.size),t.size!==null),I(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),I(e,"fa-pull-".concat(t.pull),t.pull!==null),I(e,"fa-swap-opacity",t.swapOpacity),I(e,"fa-bounce",t.bounce),I(e,"fa-shake",t.shake),I(e,"fa-beat",t.beat),I(e,"fa-fade",t.fade),I(e,"fa-beat-fade",t.beatFade),I(e,"fa-flash",t.flash),I(e,"fa-spin-pulse",t.spinPulse),I(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function Sn(t){if(t&&Kt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(xe.icon)return xe.icon(t);if(t===null)return null;if(Kt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var so=_e({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=z(function(){return Sn(e.icon)}),i=z(function(){return oe("classes",oo(e))}),o=z(function(){return oe("transform",typeof e.transform=="string"?xe.transform(e.transform):e.transform)}),s=z(function(){return oe("mask",Sn(e.mask))}),f=z(function(){return Vi(r.value,R(R(R(R({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Jn(f,function(c){if(!c)return io("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var l=z(function(){return f.value?Ea(f.value.abstract[0],{},a):null});return function(){return l.value}}}),fo=typeof global=="object"&&global&&global.Object===Object&&global;const Ca=fo;var lo=typeof self=="object"&&self&&self.Object===Object&&self,co=Ca||lo||Function("return this")();const F=co;var uo=F.Symbol;const L=uo;var $a=Object.prototype,mo=$a.hasOwnProperty,vo=$a.toString,pt=L?L.toStringTag:void 0;function po(t){var e=mo.call(t,pt),n=t[pt];try{t[pt]=void 0;var a=!0}catch{}var r=vo.call(t);return a&&(e?t[pt]=n:delete t[pt]),r}var go=Object.prototype,bo=go.toString;function ho(t){return bo.call(t)}var yo="[object Null]",wo="[object Undefined]",_n=L?L.toStringTag:void 0;function at(t){return t==null?t===void 0?wo:yo:_n&&_n in Object(t)?po(t):ho(t)}function rt(t){return t!=null&&typeof t=="object"}var xo="[object Symbol]";function De(t){return typeof t=="symbol"||rt(t)&&at(t)==xo}function ja(t,e){for(var n=-1,a=t==null?0:t.length,r=Array(a);++n<a;)r[n]=e(t[n],n,t);return r}var ko=Array.isArray;const it=ko;var Ao=1/0,Tn=L?L.prototype:void 0,Pn=Tn?Tn.toString:void 0;function Na(t){if(typeof t=="string")return t;if(it(t))return ja(t,Na)+"";if(De(t))return Pn?Pn.call(t):"";var e=t+"";return e=="0"&&1/t==-Ao?"-0":e}function It(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function Oo(t){return t}var So="[object AsyncFunction]",_o="[object Function]",To="[object GeneratorFunction]",Po="[object Proxy]";function Ma(t){if(!It(t))return!1;var e=at(t);return e==_o||e==To||e==So||e==Po}var Eo=F["__core-js_shared__"];const se=Eo;var En=function(){var t=/[^.]+$/.exec(se&&se.keys&&se.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Io(t){return!!En&&En in t}var Co=Function.prototype,$o=Co.toString;function ot(t){if(t!=null){try{return $o.call(t)}catch{}try{return t+""}catch{}}return""}var jo=/[\\^$.*+?()[\]{}|]/g,No=/^\[object .+?Constructor\]$/,Mo=Function.prototype,Lo=Object.prototype,Fo=Mo.toString,zo=Lo.hasOwnProperty,Ro=RegExp("^"+Fo.call(zo).replace(jo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Do(t){if(!It(t)||Io(t))return!1;var e=Ma(t)?Ro:No;return e.test(ot(t))}function Bo(t,e){return t==null?void 0:t[e]}function st(t,e){var n=Bo(t,e);return Do(n)?n:void 0}var Uo=st(F,"WeakMap");const ke=Uo;var In=Object.create,Yo=function(){function t(){}return function(e){if(!It(e))return{};if(In)return In(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();const Go=Yo;function Wo(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function Ho(t,e){var n=-1,a=t.length;for(e||(e=Array(a));++n<a;)e[n]=t[n];return e}var Ko=800,Xo=16,Vo=Date.now;function qo(t){var e=0,n=0;return function(){var a=Vo(),r=Xo-(a-n);if(n=a,r>0){if(++e>=Ko)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function Zo(t){return function(){return t}}var Jo=function(){try{var t=st(Object,"defineProperty");return t({},"",{}),t}catch{}}();const Xt=Jo;var Qo=Xt?function(t,e){return Xt(t,"toString",{configurable:!0,enumerable:!1,value:Zo(e),writable:!0})}:Oo;const ts=Qo;var es=qo(ts);const ns=es;function as(t,e){for(var n=-1,a=t==null?0:t.length;++n<a&&e(t[n],n,t)!==!1;);return t}var rs=9007199254740991,is=/^(?:0|[1-9]\d*)$/;function os(t,e){var n=typeof t;return e=e??rs,!!e&&(n=="number"||n!="symbol"&&is.test(t))&&t>-1&&t%1==0&&t<e}function La(t,e,n){e=="__proto__"&&Xt?Xt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function Fa(t,e){return t===e||t!==t&&e!==e}var ss=Object.prototype,fs=ss.hasOwnProperty;function za(t,e,n){var a=t[e];(!(fs.call(t,e)&&Fa(a,n))||n===void 0&&!(e in t))&&La(t,e,n)}function Ct(t,e,n,a){var r=!n;n||(n={});for(var i=-1,o=e.length;++i<o;){var s=e[i],f=a?a(n[s],t[s],s,n,t):void 0;f===void 0&&(f=t[s]),r?La(n,s,f):za(n,s,f)}return n}var Cn=Math.max;function ls(t,e,n){return e=Cn(e===void 0?t.length-1:e,0),function(){for(var a=arguments,r=-1,i=Cn(a.length-e,0),o=Array(i);++r<i;)o[r]=a[e+r];r=-1;for(var s=Array(e+1);++r<e;)s[r]=a[r];return s[e]=n(o),Wo(t,this,s)}}var cs=9007199254740991;function Ra(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=cs}function Da(t){return t!=null&&Ra(t.length)&&!Ma(t)}var us=Object.prototype;function Be(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||us;return t===n}function ms(t,e){for(var n=-1,a=Array(t);++n<t;)a[n]=e(n);return a}var ds="[object Arguments]";function $n(t){return rt(t)&&at(t)==ds}var Ba=Object.prototype,vs=Ba.hasOwnProperty,ps=Ba.propertyIsEnumerable,gs=$n(function(){return arguments}())?$n:function(t){return rt(t)&&vs.call(t,"callee")&&!ps.call(t,"callee")};const Ua=gs;function bs(){return!1}var Ya=typeof exports=="object"&&exports&&!exports.nodeType&&exports,jn=Ya&&typeof module=="object"&&module&&!module.nodeType&&module,hs=jn&&jn.exports===Ya,Nn=hs?F.Buffer:void 0,ys=Nn?Nn.isBuffer:void 0,ws=ys||bs;const Ga=ws;var xs="[object Arguments]",ks="[object Array]",As="[object Boolean]",Os="[object Date]",Ss="[object Error]",_s="[object Function]",Ts="[object Map]",Ps="[object Number]",Es="[object Object]",Is="[object RegExp]",Cs="[object Set]",$s="[object String]",js="[object WeakMap]",Ns="[object ArrayBuffer]",Ms="[object DataView]",Ls="[object Float32Array]",Fs="[object Float64Array]",zs="[object Int8Array]",Rs="[object Int16Array]",Ds="[object Int32Array]",Bs="[object Uint8Array]",Us="[object Uint8ClampedArray]",Ys="[object Uint16Array]",Gs="[object Uint32Array]",w={};w[Ls]=w[Fs]=w[zs]=w[Rs]=w[Ds]=w[Bs]=w[Us]=w[Ys]=w[Gs]=!0;w[xs]=w[ks]=w[Ns]=w[As]=w[Ms]=w[Os]=w[Ss]=w[_s]=w[Ts]=w[Ps]=w[Es]=w[Is]=w[Cs]=w[$s]=w[js]=!1;function Ws(t){return rt(t)&&Ra(t.length)&&!!w[at(t)]}function Ue(t){return function(e){return t(e)}}var Wa=typeof exports=="object"&&exports&&!exports.nodeType&&exports,yt=Wa&&typeof module=="object"&&module&&!module.nodeType&&module,Hs=yt&&yt.exports===Wa,fe=Hs&&Ca.process,Ks=function(){try{var t=yt&&yt.require&&yt.require("util").types;return t||fe&&fe.binding&&fe.binding("util")}catch{}}();const mt=Ks;var Mn=mt&&mt.isTypedArray,Xs=Mn?Ue(Mn):Ws;const Vs=Xs;var qs=Object.prototype,Zs=qs.hasOwnProperty;function Ha(t,e){var n=it(t),a=!n&&Ua(t),r=!n&&!a&&Ga(t),i=!n&&!a&&!r&&Vs(t),o=n||a||r||i,s=o?ms(t.length,String):[],f=s.length;for(var l in t)(e||Zs.call(t,l))&&!(o&&(l=="length"||r&&(l=="offset"||l=="parent")||i&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||os(l,f)))&&s.push(l);return s}function Ka(t,e){return function(n){return t(e(n))}}var Js=Ka(Object.keys,Object);const Qs=Js;var tf=Object.prototype,ef=tf.hasOwnProperty;function nf(t){if(!Be(t))return Qs(t);var e=[];for(var n in Object(t))ef.call(t,n)&&n!="constructor"&&e.push(n);return e}function Ye(t){return Da(t)?Ha(t):nf(t)}function af(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var rf=Object.prototype,of=rf.hasOwnProperty;function sf(t){if(!It(t))return af(t);var e=Be(t),n=[];for(var a in t)a=="constructor"&&(e||!of.call(t,a))||n.push(a);return n}function Ge(t){return Da(t)?Ha(t,!0):sf(t)}var ff=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,lf=/^\w*$/;function cf(t,e){if(it(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||De(t)?!0:lf.test(t)||!ff.test(t)||e!=null&&t in Object(e)}var uf=st(Object,"create");const St=uf;function mf(){this.__data__=St?St(null):{},this.size=0}function df(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var vf="__lodash_hash_undefined__",pf=Object.prototype,gf=pf.hasOwnProperty;function bf(t){var e=this.__data__;if(St){var n=e[t];return n===vf?void 0:n}return gf.call(e,t)?e[t]:void 0}var hf=Object.prototype,yf=hf.hasOwnProperty;function wf(t){var e=this.__data__;return St?e[t]!==void 0:yf.call(e,t)}var xf="__lodash_hash_undefined__";function kf(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=St&&e===void 0?xf:e,this}function nt(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}nt.prototype.clear=mf;nt.prototype.delete=df;nt.prototype.get=bf;nt.prototype.has=wf;nt.prototype.set=kf;function Af(){this.__data__=[],this.size=0}function Qt(t,e){for(var n=t.length;n--;)if(Fa(t[n][0],e))return n;return-1}var Of=Array.prototype,Sf=Of.splice;function _f(t){var e=this.__data__,n=Qt(e,t);if(n<0)return!1;var a=e.length-1;return n==a?e.pop():Sf.call(e,n,1),--this.size,!0}function Tf(t){var e=this.__data__,n=Qt(e,t);return n<0?void 0:e[n][1]}function Pf(t){return Qt(this.__data__,t)>-1}function Ef(t,e){var n=this.__data__,a=Qt(n,t);return a<0?(++this.size,n.push([t,e])):n[a][1]=e,this}function G(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}G.prototype.clear=Af;G.prototype.delete=_f;G.prototype.get=Tf;G.prototype.has=Pf;G.prototype.set=Ef;var If=st(F,"Map");const _t=If;function Cf(){this.size=0,this.__data__={hash:new nt,map:new(_t||G),string:new nt}}function $f(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function te(t,e){var n=t.__data__;return $f(e)?n[typeof e=="string"?"string":"hash"]:n.map}function jf(t){var e=te(this,t).delete(t);return this.size-=e?1:0,e}function Nf(t){return te(this,t).get(t)}function Mf(t){return te(this,t).has(t)}function Lf(t,e){var n=te(this,t),a=n.size;return n.set(t,e),this.size+=n.size==a?0:1,this}function q(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}q.prototype.clear=Cf;q.prototype.delete=jf;q.prototype.get=Nf;q.prototype.has=Mf;q.prototype.set=Lf;var Ff="Expected a function";function We(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Ff);var n=function(){var a=arguments,r=e?e.apply(this,a):a[0],i=n.cache;if(i.has(r))return i.get(r);var o=t.apply(this,a);return n.cache=i.set(r,o)||i,o};return n.cache=new(We.Cache||q),n}We.Cache=q;var zf=500;function Rf(t){var e=We(t,function(a){return n.size===zf&&n.clear(),a}),n=e.cache;return e}var Df=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bf=/\\(\\)?/g,Uf=Rf(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Df,function(n,a,r,i){e.push(r?i.replace(Bf,"$1"):a||n)}),e});const Yf=Uf;function Gf(t){return t==null?"":Na(t)}function He(t,e){return it(t)?t:cf(t,e)?[t]:Yf(Gf(t))}var Wf=1/0;function Xa(t){if(typeof t=="string"||De(t))return t;var e=t+"";return e=="0"&&1/t==-Wf?"-0":e}function Hf(t,e){e=He(e,t);for(var n=0,a=e.length;t!=null&&n<a;)t=t[Xa(e[n++])];return n&&n==a?t:void 0}function Ke(t,e){for(var n=-1,a=e.length,r=t.length;++n<a;)t[r+n]=e[n];return t}var Ln=L?L.isConcatSpreadable:void 0;function Kf(t){return it(t)||Ua(t)||!!(Ln&&t&&t[Ln])}function Va(t,e,n,a,r){var i=-1,o=t.length;for(n||(n=Kf),r||(r=[]);++i<o;){var s=t[i];e>0&&n(s)?e>1?Va(s,e-1,n,a,r):Ke(r,s):a||(r[r.length]=s)}return r}function Xf(t){var e=t==null?0:t.length;return e?Va(t,1):[]}function Vf(t){return ns(ls(t,void 0,Xf),t+"")}var qf=Ka(Object.getPrototypeOf,Object);const Xe=qf;var Zf="[object Object]",Jf=Function.prototype,Qf=Object.prototype,qa=Jf.toString,tl=Qf.hasOwnProperty,el=qa.call(Object);function nl(t){if(!rt(t)||at(t)!=Zf)return!1;var e=Xe(t);if(e===null)return!0;var n=tl.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&qa.call(n)==el}function al(t,e,n){var a=-1,r=t.length;e<0&&(e=-e>r?0:r+e),n=n>r?r:n,n<0&&(n+=r),r=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(r);++a<r;)i[a]=t[a+e];return i}function rl(){this.__data__=new G,this.size=0}function il(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function ol(t){return this.__data__.get(t)}function sl(t){return this.__data__.has(t)}var fl=200;function ll(t,e){var n=this.__data__;if(n instanceof G){var a=n.__data__;if(!_t||a.length<fl-1)return a.push([t,e]),this.size=++n.size,this;n=this.__data__=new q(a)}return n.set(t,e),this.size=n.size,this}function vt(t){var e=this.__data__=new G(t);this.size=e.size}vt.prototype.clear=rl;vt.prototype.delete=il;vt.prototype.get=ol;vt.prototype.has=sl;vt.prototype.set=ll;function cl(t,e){return t&&Ct(e,Ye(e),t)}function ul(t,e){return t&&Ct(e,Ge(e),t)}var Za=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Fn=Za&&typeof module=="object"&&module&&!module.nodeType&&module,ml=Fn&&Fn.exports===Za,zn=ml?F.Buffer:void 0,Rn=zn?zn.allocUnsafe:void 0;function dl(t,e){if(e)return t.slice();var n=t.length,a=Rn?Rn(n):new t.constructor(n);return t.copy(a),a}function vl(t,e){for(var n=-1,a=t==null?0:t.length,r=0,i=[];++n<a;){var o=t[n];e(o,n,t)&&(i[r++]=o)}return i}function Ja(){return[]}var pl=Object.prototype,gl=pl.propertyIsEnumerable,Dn=Object.getOwnPropertySymbols,bl=Dn?function(t){return t==null?[]:(t=Object(t),vl(Dn(t),function(e){return gl.call(t,e)}))}:Ja;const Ve=bl;function hl(t,e){return Ct(t,Ve(t),e)}var yl=Object.getOwnPropertySymbols,wl=yl?function(t){for(var e=[];t;)Ke(e,Ve(t)),t=Xe(t);return e}:Ja;const Qa=wl;function xl(t,e){return Ct(t,Qa(t),e)}function tr(t,e,n){var a=e(t);return it(t)?a:Ke(a,n(t))}function kl(t){return tr(t,Ye,Ve)}function er(t){return tr(t,Ge,Qa)}var Al=st(F,"DataView");const Ae=Al;var Ol=st(F,"Promise");const Oe=Ol;var Sl=st(F,"Set");const Se=Sl;var Bn="[object Map]",_l="[object Object]",Un="[object Promise]",Yn="[object Set]",Gn="[object WeakMap]",Wn="[object DataView]",Tl=ot(Ae),Pl=ot(_t),El=ot(Oe),Il=ot(Se),Cl=ot(ke),Z=at;(Ae&&Z(new Ae(new ArrayBuffer(1)))!=Wn||_t&&Z(new _t)!=Bn||Oe&&Z(Oe.resolve())!=Un||Se&&Z(new Se)!=Yn||ke&&Z(new ke)!=Gn)&&(Z=function(t){var e=at(t),n=e==_l?t.constructor:void 0,a=n?ot(n):"";if(a)switch(a){case Tl:return Wn;case Pl:return Bn;case El:return Un;case Il:return Yn;case Cl:return Gn}return e});const qe=Z;var $l=Object.prototype,jl=$l.hasOwnProperty;function Nl(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&jl.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var Ml=F.Uint8Array;const Hn=Ml;function Ze(t){var e=new t.constructor(t.byteLength);return new Hn(e).set(new Hn(t)),e}function Ll(t,e){var n=e?Ze(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var Fl=/\w*$/;function zl(t){var e=new t.constructor(t.source,Fl.exec(t));return e.lastIndex=t.lastIndex,e}var Kn=L?L.prototype:void 0,Xn=Kn?Kn.valueOf:void 0;function Rl(t){return Xn?Object(Xn.call(t)):{}}function Dl(t,e){var n=e?Ze(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var Bl="[object Boolean]",Ul="[object Date]",Yl="[object Map]",Gl="[object Number]",Wl="[object RegExp]",Hl="[object Set]",Kl="[object String]",Xl="[object Symbol]",Vl="[object ArrayBuffer]",ql="[object DataView]",Zl="[object Float32Array]",Jl="[object Float64Array]",Ql="[object Int8Array]",tc="[object Int16Array]",ec="[object Int32Array]",nc="[object Uint8Array]",ac="[object Uint8ClampedArray]",rc="[object Uint16Array]",ic="[object Uint32Array]";function oc(t,e,n){var a=t.constructor;switch(e){case Vl:return Ze(t);case Bl:case Ul:return new a(+t);case ql:return Ll(t,n);case Zl:case Jl:case Ql:case tc:case ec:case nc:case ac:case rc:case ic:return Dl(t,n);case Yl:return new a;case Gl:case Kl:return new a(t);case Wl:return zl(t);case Hl:return new a;case Xl:return Rl(t)}}function sc(t){return typeof t.constructor=="function"&&!Be(t)?Go(Xe(t)):{}}var fc="[object Map]";function lc(t){return rt(t)&&qe(t)==fc}var Vn=mt&&mt.isMap,cc=Vn?Ue(Vn):lc;const uc=cc;var mc="[object Set]";function dc(t){return rt(t)&&qe(t)==mc}var qn=mt&&mt.isSet,vc=qn?Ue(qn):dc;const pc=vc;var gc=1,bc=2,hc=4,nr="[object Arguments]",yc="[object Array]",wc="[object Boolean]",xc="[object Date]",kc="[object Error]",ar="[object Function]",Ac="[object GeneratorFunction]",Oc="[object Map]",Sc="[object Number]",rr="[object Object]",_c="[object RegExp]",Tc="[object Set]",Pc="[object String]",Ec="[object Symbol]",Ic="[object WeakMap]",Cc="[object ArrayBuffer]",$c="[object DataView]",jc="[object Float32Array]",Nc="[object Float64Array]",Mc="[object Int8Array]",Lc="[object Int16Array]",Fc="[object Int32Array]",zc="[object Uint8Array]",Rc="[object Uint8ClampedArray]",Dc="[object Uint16Array]",Bc="[object Uint32Array]",y={};y[nr]=y[yc]=y[Cc]=y[$c]=y[wc]=y[xc]=y[jc]=y[Nc]=y[Mc]=y[Lc]=y[Fc]=y[Oc]=y[Sc]=y[rr]=y[_c]=y[Tc]=y[Pc]=y[Ec]=y[zc]=y[Rc]=y[Dc]=y[Bc]=!0;y[kc]=y[ar]=y[Ic]=!1;function Yt(t,e,n,a,r,i){var o,s=e&gc,f=e&bc,l=e&hc;if(n&&(o=r?n(t,a,r,i):n(t)),o!==void 0)return o;if(!It(t))return t;var c=it(t);if(c){if(o=Nl(t),!s)return Ho(t,o)}else{var m=qe(t),g=m==ar||m==Ac;if(Ga(t))return dl(t,s);if(m==rr||m==nr||g&&!r){if(o=f||g?{}:sc(t),!s)return f?xl(t,ul(o,t)):hl(t,cl(o,t))}else{if(!y[m])return r?t:{};o=oc(t,m,s)}}i||(i=new vt);var b=i.get(t);if(b)return b;i.set(t,o),pc(t)?t.forEach(function(A){o.add(Yt(A,e,n,A,t,i))}):uc(t)&&t.forEach(function(A,d){o.set(d,Yt(A,e,n,d,t,i))});var _=l?f?er:kl:f?Ge:Ye,T=c?void 0:_(t);return as(T||t,function(A,d){T&&(d=A,A=t[d]),za(o,d,Yt(A,e,n,d,t,i))}),o}function Uc(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}function Yc(t,e){return e.length<2?t:Hf(t,al(e,0,-1))}function Gc(t,e){return e=He(e,t),t=Yc(t,e),t==null||delete t[Xa(Uc(e))]}function Wc(t){return nl(t)?void 0:t}var Hc=1,Kc=2,Xc=4,Vc=Vf(function(t,e){var n={};if(t==null)return n;var a=!1;e=ja(e,function(i){return i=He(i,t),a||(a=i.length>1),i}),Ct(t,er(t),n),a&&(n=Yt(n,Hc|Kc|Xc,Wc));for(var r=e.length;r--;)Gc(n,e[r]);return n});const qc=Vc,le=_e({name:"VkIcon",inheritAttrs:!1,__name:"Icon",props:{border:{type:Boolean},fixedWidth:{type:Boolean},flip:{},icon:{},mask:{},maskId:{},listItem:{type:Boolean},pull:{},pulse:{type:Boolean},rotation:{},swapOpacity:{type:Boolean},size:{},spin:{type:Boolean},transform:{},symbol:{type:[Boolean,String]},title:{},titleId:{},inverse:{type:Boolean},bounce:{type:Boolean},shake:{type:Boolean},beat:{type:Boolean},fade:{type:Boolean},beatFade:{type:Boolean},spinPulse:{type:Boolean},spinReverse:{type:Boolean},type:{},color:{}},setup(t){const e=t,n=z(()=>qc(e,["type","color"])),a=z(()=>e.color?{color:e.color}:{});return(r,i)=>(sr(),fr("i",mr({class:["vk-icon",{[`vk-icon--${r.type}`]:r.type}],style:a.value},r.$attrs),[lr(Qn(so),cr(ur(n.value)),null,16)],16))}});le.install=t=>{t.component(le.name,le)};const Zn=ta(0),Zc=(t=2e3)=>{const e=ta(t),n=z(()=>Zn.value+e.value);return{currentZIndex:n,nextZIndex:()=>(Zn.value++,n.value),initialZIndex:e}},eu=Zc,nu=(t,e,n)=>{dr(t)?Jn(t,(a,r)=>{r==null||r.removeEventListener(e,n),a==null||a.addEventListener(e,n)}):vr(()=>{t.addEventListener(e,n)}),pr(()=>{var a;(a=Qn(t))==null||a.removeEventListener(e,n)})};export{Qc as R,le as _,It as a,Ma as b,nu as c,De as i,tu as l,F as r,eu as u};
