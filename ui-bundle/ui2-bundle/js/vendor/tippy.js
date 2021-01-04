!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@popperjs/core")):"function"==typeof define&&define.amd?define(["@popperjs/core"],e):(t=t||self).tippy=e(t.Popper)}(this,function(et){"use strict";var nt={passive:!0,capture:!0};function it(t,e,n){if(Array.isArray(t)){var i=t[e];return null==i?Array.isArray(n)?n[e]:n:i}return t}function o(t,e){t={}.toString.call(t);return 0===t.indexOf("[object")&&-1<t.indexOf(e+"]")}function ot(t,e){return"function"==typeof t?t.apply(void 0,e):t}function rt(e,n){return 0===n?e:function(t){clearTimeout(i),i=setTimeout(function(){e(t)},n)};var i}function l(t,e){var n=Object.assign({},t);return e.forEach(function(t){delete n[t]}),n}function at(t){return[].concat(t)}function st(t,e){-1===t.indexOf(e)&&t.push(e)}function ut(t){return t.split("-")[0]}function ct(t){return[].slice.call(t)}function pt(){return document.createElement("div")}function r(e){return["Element","Fragment"].some(function(t){return o(e,t)})}function ft(t){return o(t,"MouseEvent")}function a(t){return t&&t._tippy&&t._tippy.reference===t}function lt(t,e){t.forEach(function(t){t&&(t.style.transitionDuration=e+"ms")})}function dt(t,e){t.forEach(function(t){t&&t.setAttribute("data-state",e)})}function mt(t){t=at(t)[0];return t&&t.ownerDocument||document}function vt(e,t,n){var i=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(t){e[i](t,n)})}var gt={isTouch:!1},e=0;function s(){gt.isTouch||(gt.isTouch=!0,window.performance&&document.addEventListener("mousemove",n))}function n(){var t=performance.now();t-e<20&&(gt.isTouch=!1,document.removeEventListener("mousemove",n)),e=t}function u(){var t,e=document.activeElement;a(e)&&(t=e._tippy,e.blur&&!t.state.isVisible&&e.blur())}var t="undefined"!=typeof window&&"undefined"!=typeof document?navigator.userAgent:"",ht=/MSIE |Trident\//.test(t),bt=Object.assign({appendTo:function(){return document.body},aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),i=Object.keys(bt);function yt(i){var t=(i.plugins||[]).reduce(function(t,e){var n=e.name,e=e.defaultValue;return n&&(t[n]=void 0!==i[n]?i[n]:e),t},{});return Object.assign({},i,{},t)}function wt(t,e){var o,n,n=Object.assign({},e,{content:ot(e.content,[t])},e.ignoreAttributes?{}:(o=t,((n=e.plugins)?Object.keys(yt(Object.assign({},bt,{plugins:n}))):i).reduce(function(e,n){var i=(o.getAttribute("data-tippy-"+n)||"").trim();if(!i)return e;if("content"===n)e[n]=i;else try{e[n]=JSON.parse(i)}catch(t){e[n]=i}return e},{})));return n.aria=Object.assign({},bt.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?e.interactive:n.aria.expanded,content:"auto"===n.aria.content?e.interactive?null:"describedby":n.aria.content},n}function c(t,e){t.innerHTML=e}function p(t){var e=pt();return!0===t?e.className="tippy-arrow":(e.className="tippy-svg-arrow",r(t)?e.appendChild(t):c(e,t)),e}function f(t,e){r(e.content)?(c(t,""),t.appendChild(e.content)):"function"!=typeof e.content&&(e.allowHTML?c(t,e.content):t.textContent=e.content)}function Et(t){var e=t.firstElementChild,t=ct(e.children);return{box:e,content:t.find(function(t){return t.classList.contains("tippy-content")}),arrow:t.find(function(t){return t.classList.contains("tippy-arrow")||t.classList.contains("tippy-svg-arrow")}),backdrop:t.find(function(t){return t.classList.contains("tippy-backdrop")})}}function d(r){var a=pt(),t=pt();t.className="tippy-box",t.setAttribute("data-state","hidden"),t.setAttribute("tabindex","-1");var e=pt();function n(t,e){var n=Et(a),i=n.box,o=n.content,n=n.arrow;e.theme?i.setAttribute("data-theme",e.theme):i.removeAttribute("data-theme"),"string"==typeof e.animation?i.setAttribute("data-animation",e.animation):i.removeAttribute("data-animation"),e.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"==typeof e.maxWidth?e.maxWidth+"px":e.maxWidth,e.role?i.setAttribute("role",e.role):i.removeAttribute("role"),t.content===e.content&&t.allowHTML===e.allowHTML||f(o,r.props),e.arrow?n?t.arrow!==e.arrow&&(i.removeChild(n),i.appendChild(p(e.arrow))):i.appendChild(p(e.arrow)):n&&i.removeChild(n)}return e.className="tippy-content",e.setAttribute("data-state","hidden"),f(e,r.props),a.appendChild(t),t.appendChild(e),n(r.props,r.props),{popper:a,onUpdate:n}}d.$$tippy=!0;var Tt=1,Ct=[],xt=[];function m(a,t){var n,i,e,o,r,s,u,c,p,f=wt(a,Object.assign({},bt,{},yt((n=t,Object.keys(n).reduce(function(t,e){return void 0!==n[e]&&(t[e]=n[e]),t},{}))))),l=!1,d=!1,m=!1,v=!1,g=[],h=rt($,f.interactiveDebounce),b=Tt++,t=(p=f.plugins).filter(function(t,e){return p.indexOf(t)===e}),y={id:b,reference:a,popper:pt(),popperInstance:null,props:f,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:t,clearDelayTimeouts:function(){clearTimeout(i),clearTimeout(e),cancelAnimationFrame(o)},setProps:function(t){var e,n;y.state.isDestroyed||(P("onBeforeUpdate",[y,t]),X(),e=y.props,n=wt(a,Object.assign({},y.props,{},t,{ignoreAttributes:!0})),y.props=n,W(),e.interactiveDebounce!==n.interactiveDebounce&&(I(),h=rt($,n.interactiveDebounce)),e.triggerTarget&&!n.triggerTarget?at(e.triggerTarget).forEach(function(t){t.removeAttribute("aria-expanded")}):n.triggerTarget&&a.removeAttribute("aria-expanded"),j(),M(),E&&E(e,n),y.popperInstance&&(G(),Q().forEach(function(t){requestAnimationFrame(t._tippy.popperInstance.forceUpdate)})),P("onAfterUpdate",[y,t]))},setContent:function(t){y.setProps({content:t})},show:function(){var t,e=y.state.isVisible,n=y.state.isDestroyed,i=!y.state.isEnabled,o=gt.isTouch&&!y.props.touch,r=it(y.props.duration,0,bt.duration);e||n||i||o||L().hasAttribute("disabled")||(P("onShow",[y],!1),!1!==y.props.onShow(y)&&(y.state.isVisible=!0,O()&&(w.style.visibility="visible"),M(),N(),y.state.isMounted||(w.style.transition="none"),O()&&lt([(t=k()).box,t.content],0),u=function(){var t,e;y.state.isVisible&&!v&&(v=!0,w.offsetHeight,w.style.transition=y.props.moveTransition,O()&&y.props.animation&&(lt([t=(e=k()).box,e=e.content],r),dt([t,e],"visible")),V(),j(),st(xt,y),y.state.isMounted=!0,P("onMount",[y]),y.props.animation&&O()&&_(r,function(){y.state.isShown=!0,P("onShown",[y])}))},o=y.props.appendTo,t=L(),(t=y.props.interactive&&o===bt.appendTo||"parent"===o?t.parentNode:ot(o,[t])).contains(w)||t.appendChild(w),G()))},hide:function(){var t,e=!y.state.isVisible,n=y.state.isDestroyed,i=!y.state.isEnabled,o=it(y.props.duration,1,bt.duration);e||n||i||(P("onHide",[y],!1),!1!==y.props.onHide(y)&&(y.state.isVisible=!1,y.state.isShown=!1,l=v=!1,O()&&(w.style.visibility="hidden"),I(),U(),M(),O()&&(i=(n=k()).box,n=n.content,y.props.animation&&(lt([i,n],o),dt([i,n],"hidden"))),V(),j(),y.props.animation?O()&&(t=y.unmount,_(o,function(){!y.state.isVisible&&w.parentNode&&w.parentNode.contains(w)&&t()})):y.unmount()))},hideWithInteractivity:function(t){D().addEventListener("mousemove",h),st(Ct,h),h(t)},enable:function(){y.state.isEnabled=!0},disable:function(){y.hide(),y.state.isEnabled=!1},unmount:function(){y.state.isVisible&&y.hide(),y.state.isMounted&&(K(),Q().forEach(function(t){t._tippy.unmount()}),w.parentNode&&w.parentNode.removeChild(w),xt=xt.filter(function(t){return t!==y}),y.state.isMounted=!1,P("onHidden",[y]))},destroy:function(){y.state.isDestroyed||(y.clearDelayTimeouts(),y.unmount(),X(),delete a._tippy,y.state.isDestroyed=!0,P("onDestroy",[y]))}};if(!f.render)return y;var b=f.render(y),w=b.popper,E=b.onUpdate;w.setAttribute("data-tippy-root",""),w.id="tippy-"+y.id,y.popper=w,a._tippy=y,w._tippy=y;var T=t.map(function(t){return t.fn(y)}),C=a.hasAttribute("aria-expanded");return W(),j(),M(),P("onCreate",[y]),f.showOnCreate&&Z(),w.addEventListener("mouseenter",function(){y.props.interactive&&y.state.isVisible&&y.clearDelayTimeouts()}),w.addEventListener("mouseleave",function(t){y.props.interactive&&0<=y.props.trigger.indexOf("mouseenter")&&(D().addEventListener("mousemove",h),h(t))}),y;function x(){var t=y.props.touch;return Array.isArray(t)?t:[t,0]}function A(){return"hold"===x()[0]}function O(){var t;return null!=(t=y.props.render)&&t.$$tippy}function L(){return c||a}function D(){var t=L().parentNode;return t?mt(t):document}function k(){return Et(w)}function R(t){return y.state.isMounted&&!y.state.isVisible||gt.isTouch||r&&"focus"===r.type?0:it(y.props.delay,t?0:1,bt.delay)}function M(){w.style.pointerEvents=y.props.interactive&&y.state.isVisible?"":"none",w.style.zIndex=""+y.props.zIndex}function P(e,n,t){void 0===t&&(t=!0),T.forEach(function(t){t[e]&&t[e].apply(void 0,n)}),t&&(t=y.props)[e].apply(t,n)}function V(){var n,i,t=y.props.aria;t.content&&(n="aria-"+t.content,i=w.id,at(y.props.triggerTarget||a).forEach(function(t){var e=t.getAttribute(n);y.state.isVisible?t.setAttribute(n,e?e+" "+i:i):(e=e&&e.replace(i,"").trim())?t.setAttribute(n,e):t.removeAttribute(n)}))}function j(){!C&&y.props.aria.expanded&&at(y.props.triggerTarget||a).forEach(function(t){y.props.interactive?t.setAttribute("aria-expanded",y.state.isVisible&&t===L()?"true":"false"):t.removeAttribute("aria-expanded")})}function I(){D().removeEventListener("mousemove",h),Ct=Ct.filter(function(t){return t!==h})}function S(t){if(!(gt.isTouch&&(m||"mousedown"===t.type)||y.props.interactive&&w.contains(t.target))){if(L().contains(t.target)){if(gt.isTouch)return;if(y.state.isVisible&&0<=y.props.trigger.indexOf("click"))return}else P("onClickOutside",[y,t]);!0===y.props.hideOnClick&&(y.clearDelayTimeouts(),y.hide(),d=!0,setTimeout(function(){d=!1}),y.state.isMounted||U())}}function B(){m=!0}function H(){m=!1}function N(){var t=D();t.addEventListener("mousedown",S,!0),t.addEventListener("touchend",S,nt),t.addEventListener("touchstart",H,nt),t.addEventListener("touchmove",B,nt)}function U(){var t=D();t.removeEventListener("mousedown",S,!0),t.removeEventListener("touchend",S,nt),t.removeEventListener("touchstart",H,nt),t.removeEventListener("touchmove",B,nt)}function _(t,e){var n=k().box;function i(t){t.target===n&&(vt(n,"remove",i),e())}if(0===t)return e();vt(n,"remove",s),vt(n,"add",i),s=i}function F(e,n,i){void 0===i&&(i=!1),at(y.props.triggerTarget||a).forEach(function(t){t.addEventListener(e,n,i),g.push({node:t,eventType:e,handler:n,options:i})})}function W(){A()&&(F("touchstart",Y,{passive:!0}),F("touchend",q,{passive:!0})),y.props.trigger.split(/\s+/).filter(Boolean).forEach(function(t){if("manual"!==t)switch(F(t,Y),t){case"mouseenter":F("mouseleave",q);break;case"focus":F(ht?"focusout":"blur",z);break;case"focusin":F("focusout",z)}})}function X(){g.forEach(function(t){var e=t.node,n=t.eventType,i=t.handler,t=t.options;e.removeEventListener(n,i,t)}),g=[]}function Y(e){var t,n=!1;!y.state.isEnabled||J(e)||d||(t="focus"===(null==r?void 0:r.type),c=(r=e).currentTarget,j(),!y.state.isVisible&&ft(e)&&Ct.forEach(function(t){return t(e)}),"click"===e.type&&(y.props.trigger.indexOf("mouseenter")<0||l)&&!1!==y.props.hideOnClick&&y.state.isVisible?n=!0:Z(e),"click"===e.type&&(l=!n),n&&!t&&tt(e))}function $(t){var s,u,e=t.target,e=L().contains(e)||w.contains(e);"mousemove"===t.type&&e||(e=Q().concat(w).map(function(t){var e=null==(e=t._tippy.popperInstance)?void 0:e.state;return e?{popperRect:t.getBoundingClientRect(),popperState:e,props:f}:null}).filter(Boolean),s=t.clientX,u=t.clientY,e.every(function(t){var e=t.popperRect,n=t.popperState,i=t.props.interactiveBorder,o=ut(n.placement),r=n.modifiersData.offset;if(!r)return!0;var a="bottom"===o?r.top.y:0,t="top"===o?r.bottom.y:0,n="right"===o?r.left.x:0,r="left"===o?r.right.x:0,a=e.top-u+a>i,t=u-e.bottom-t>i,n=e.left-s+n>i,i=s-e.right-r>i;return a||t||n||i})&&(I(),tt(t)))}function q(t){J(t)||0<=y.props.trigger.indexOf("click")&&l||(y.props.interactive?y.hideWithInteractivity(t):tt(t))}function z(t){y.props.trigger.indexOf("focusin")<0&&t.target!==L()||y.props.interactive&&t.relatedTarget&&w.contains(t.relatedTarget)||tt(t)}function J(t){return gt.isTouch&&A()!==0<=t.type.indexOf("touch")}function G(){K();var t=y.props,e=t.popperOptions,n=t.placement,i=t.offset,o=t.getReferenceClientRect,r=t.moveTransition,t=O()?Et(w).arrow:null,o=o?{getBoundingClientRect:o,contextElement:o.contextElement||L()}:a,r=[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!r}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(t){var e,n=t.state;O()&&(e=k().box,["placement","reference-hidden","escaped"].forEach(function(t){"placement"===t?e.setAttribute("data-placement",n.placement):n.attributes.popper["data-popper-"+t]?e.setAttribute("data-"+t,""):e.removeAttribute("data-"+t)}),n.attributes.popper={})}}];O()&&t&&r.push({name:"arrow",options:{element:t,padding:3}}),r.push.apply(r,(null==e?void 0:e.modifiers)||[]),y.popperInstance=et.createPopper(o,w,Object.assign({},e,{placement:n,onFirstUpdate:u,modifiers:r}))}function K(){y.popperInstance&&(y.popperInstance.destroy(),y.popperInstance=null)}function Q(){return ct(w.querySelectorAll("[data-tippy-root]"))}function Z(t){y.clearDelayTimeouts(),t&&P("onTrigger",[y,t]),N();var e=R(!0),n=x(),t=n[0],n=n[1];gt.isTouch&&"hold"===t&&n&&(e=n),e?i=setTimeout(function(){y.show()},e):y.show()}function tt(t){y.clearDelayTimeouts(),P("onUntrigger",[y,t]),y.state.isVisible?0<=y.props.trigger.indexOf("mouseenter")&&0<=y.props.trigger.indexOf("click")&&0<=["mouseleave","mousemove"].indexOf(t.type)&&l||((t=R(!1))?e=setTimeout(function(){y.state.isVisible&&y.hide()},t):o=requestAnimationFrame(function(){y.hide()})):U()}}function v(t,e){void 0===e&&(e={});var n=bt.plugins.concat(e.plugins||[]);document.addEventListener("touchstart",s,nt),window.addEventListener("blur",u);var i=Object.assign({},e,{plugins:n}),n=(r(n=t)?[n]:o(n,"NodeList")?ct(n):Array.isArray(n)?n:ct(document.querySelectorAll(n))).reduce(function(t,e){e=e&&m(e,i);return e&&t.push(e),t},[]);return r(t)?n[0]:n}v.defaultProps=bt,v.setDefaultProps=function(e){Object.keys(e).forEach(function(t){bt[t]=e[t]})},v.currentInput=gt;var g={mouseover:"mouseenter",focusin:"focus",click:"click"},h={clientX:0,clientY:0},b=[];function y(t){var e=t.clientX,t=t.clientY;h={clientX:e,clientY:t}}function w(t,e){return!t||!e||t.top!==e.top||t.right!==e.right||t.bottom!==e.bottom||t.left!==e.left}return v.setDefaultProps({plugins:[{name:"animateFill",defaultValue:!1,fn:function(t){if(null==(e=t.props.render)||!e.$$tippy)return{};var e=Et(t.popper),n=e.box,i=e.content,o=t.props.animateFill?((e=pt()).className="tippy-backdrop",dt([e],"hidden"),e):null;return{onCreate:function(){o&&(n.insertBefore(o,n.firstElementChild),n.setAttribute("data-animatefill",""),n.style.overflow="hidden",t.setProps({arrow:!1,animation:"shift-away"}))},onMount:function(){var t,e;o&&(t=n.style.transitionDuration,e=Number(t.replace("ms","")),i.style.transitionDelay=Math.round(e/10)+"ms",o.style.transitionDuration=t,dt([o],"visible"))},onShow:function(){o&&(o.style.transitionDuration="0ms")},onHide:function(){o&&dt([o],"hidden")}}}},{name:"followCursor",defaultValue:!1,fn:function(n){var p=n.reference,e=mt(n.props.triggerTarget||p),i=!1,o=!1,t=!0,r=n.props;function a(){return"initial"===n.props.followCursor&&n.state.isVisible}function s(){e.addEventListener("mousemove",f)}function u(){e.removeEventListener("mousemove",f)}function c(){i=!0,n.setProps({getReferenceClientRect:null}),i=!1}function f(t){var e=!t.target||p.contains(t.target),r=n.props.followCursor,a=t.clientX,s=t.clientY,t=p.getBoundingClientRect(),u=a-t.left,c=s-t.top;!e&&n.props.interactive||n.setProps({getReferenceClientRect:function(){var t=p.getBoundingClientRect(),e=a,n=s;"initial"===r&&(e=t.left+u,n=t.top+c);var i="horizontal"===r?t.top:n,o="vertical"===r?t.right:e,n="horizontal"===r?t.bottom:n,e="vertical"===r?t.left:e;return{width:o-e,height:n-i,top:i,right:o,bottom:n,left:e}}})}function l(){n.props.followCursor&&(b.push({instance:n,doc:e}),e.addEventListener("mousemove",y))}function d(){0===(b=b.filter(function(t){return t.instance!==n})).filter(function(t){return t.doc===e}).length&&e.removeEventListener("mousemove",y)}return{onCreate:l,onDestroy:d,onBeforeUpdate:function(){r=n.props},onAfterUpdate:function(t,e){e=e.followCursor;i||void 0!==e&&r.followCursor!==e&&(d(),e?(l(),!n.state.isMounted||o||a()||s()):(u(),c()))},onMount:function(){n.props.followCursor&&!o&&(t&&(f(h),t=!1),a()||s())},onTrigger:function(t,e){ft(e)&&(h={clientX:e.clientX,clientY:e.clientY}),o="focus"===e.type},onHidden:function(){n.props.followCursor&&(c(),u(),t=!0)}}}},{name:"inlinePositioning",defaultValue:!1,fn:function(o){var n,i=o.reference,f=-1,r=!1,a={name:"tippyInlinePositioning",enabled:!0,phase:"afterWrite",fn:function(t){var e=t.state;o.props.inlinePositioning&&(n!==e.placement&&o.setProps({getReferenceClientRect:function(){return function(e,t,n){if(n.length<2||null===e)return t;if(2===n.length&&0<=f&&n[0].left>n[1].right)return n[f]||t;switch(e){case"top":case"bottom":var i=n[0],o=n[n.length-1],r="top"===e,a=i.top,s=o.bottom,u=(r?i:o).left,o=(r?i:o).right;return{top:a,bottom:s,left:u,right:o,width:o-u,height:s-a};case"left":case"right":var c=Math.min.apply(Math,n.map(function(t){return t.left})),p=Math.max.apply(Math,n.map(function(t){return t.right})),s=n.filter(function(t){return"left"===e?t.left===c:t.right===p}),a=s[0].top,s=s[s.length-1].bottom;return{top:a,bottom:s,left:c,right:p,width:p-c,height:s-a};default:return t}}(ut(e.placement),i.getBoundingClientRect(),ct(i.getClientRects()))}}),n=e.placement)}};function t(){var t,e;r||(t=o.props,e=a,t={popperOptions:Object.assign({},t.popperOptions,{modifiers:[].concat(((null==(t=t.popperOptions)?void 0:t.modifiers)||[]).filter(function(t){return t.name!==e.name}),[e])})},r=!0,o.setProps(t),r=!1)}return{onCreate:t,onAfterUpdate:t,onTrigger:function(t,e){var n,i;ft(e)&&(i=(n=ct(o.reference.getClientRects())).find(function(t){return t.left-2<=e.clientX&&t.right+2>=e.clientX&&t.top-2<=e.clientY&&t.bottom+2>=e.clientY}),f=n.indexOf(i))},onUntrigger:function(){f=-1}}}},{name:"sticky",defaultValue:!1,fn:function(n){var i=n.reference,o=n.popper;function r(t){return!0===n.props.sticky||n.props.sticky===t}var a=null,s=null;function u(){var t=r("reference")?(n.popperInstance?n.popperInstance.state.elements.reference:i).getBoundingClientRect():null,e=r("popper")?o.getBoundingClientRect():null;(t&&w(a,t)||e&&w(s,e))&&n.popperInstance&&n.popperInstance.update(),a=t,s=e,n.state.isMounted&&requestAnimationFrame(u)}return{onMount:function(){n.props.sticky&&u()}}}}],render:d}),v.createSingleton=function(t,e){void 0===e&&(e={});var o,r=t,a=[],s=e.overrides,n=[];function i(){a=r.map(function(t){return t.reference})}function u(e){r.forEach(function(t){e?t.enable():t.disable()})}function c(i){return r.map(function(e){var n=e.setProps;return e.setProps=function(t){n(t),e.reference===o&&i.setProps(t)},function(){e.setProps=n}})}u(!1),i();var t={fn:function(){return{onDestroy:function(){u(!0)},onTrigger:function(t,e){var n=e.currentTarget,i=a.indexOf(n);n!==o&&(o=n,e=(s||[]).concat("content").reduce(function(t,e){return t[e]=r[i].props[e],t},{}),t.setProps(Object.assign({},e,{getReferenceClientRect:"function"==typeof e.getReferenceClientRect?e.getReferenceClientRect:function(){return n.getBoundingClientRect()}})))}}}},p=v(pt(),Object.assign({},l(e,["overrides"]),{plugins:[t].concat(e.plugins||[]),triggerTarget:a})),f=p.setProps;return p.setProps=function(t){s=t.overrides||s,f(t)},p.setInstances=function(t){u(!0),n.forEach(function(t){return t()}),r=t,u(!1),i(),c(p),p.setProps({triggerTarget:a})},n=c(p),p},v.delegate=function(t,i){var o=[],r=[],a=!1,s=i.target,e=l(i,["target"]),n=Object.assign({},e,{trigger:"manual",touch:!1}),u=Object.assign({},e,{showOnCreate:!0}),n=v(t,n);function c(t){var e,n;!t.target||a||(n=t.target.closest(s))&&(e=n.getAttribute("data-tippy-trigger")||i.trigger||bt.trigger,n._tippy||"touchstart"===t.type&&"boolean"==typeof u.touch||"touchstart"!==t.type&&e.indexOf(g[t.type])<0||(n=v(n,u))&&(r=r.concat(n)))}function p(t,e,n,i){void 0===i&&(i=!1),t.addEventListener(e,n,i),o.push({node:t,eventType:e,handler:n,options:i})}return at(n).forEach(function(t){var e=t.destroy,n=t.enable,i=t.disable;t.destroy=function(t){void 0===t&&(t=!0),t&&r.forEach(function(t){t.destroy()}),r=[],o.forEach(function(t){var e=t.node,n=t.eventType,i=t.handler,t=t.options;e.removeEventListener(n,i,t)}),o=[],e()},t.enable=function(){n(),r.forEach(function(t){return t.enable()}),a=!1},t.disable=function(){i(),r.forEach(function(t){return t.disable()}),a=!0},p(t=t.reference,"touchstart",c),p(t,"mouseover",c),p(t,"focusin",c),p(t,"click",c)}),n},v.hideAll=function(t){var t=void 0===t?{}:t,n=t.exclude,i=t.duration;xt.forEach(function(t){var e=!1;n&&(e=a(n)?t.reference===n:t.popper===n.popper),e||(e=t.props.duration,t.setProps({duration:i}),t.hide(),t.state.isDestroyed||t.setProps({duration:e}))})},v.roundArrow='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',v});
//# sourceMappingURL=tippy.js.map