'use strict'

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

window.FontAwesomeKitConfig = {"asyncLoading":{"enabled":false},"autoA11y":{"enabled":true},"baseUrl":"https://kit-free.fontawesome.com","detectConflictsUntil":null,"license":"free","method":"css","minify":{"enabled":true},"v4FontFaceShim":{"enabled":true},"v4shim":{"enabled":true},"version":"latest"};
!function(){function r(e){var t,n=[],i=document,o=i.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(i.readyState);a||i.addEventListener(r,t=function(){for(i.removeEventListener(r,t),a=1;t=n.shift();)t()}),a?setTimeout(e,0):n.push(e)}!function(){if(!(void 0===window.Element||"classList"in document.documentElement)){var e,t,n,i=Array.prototype,o=i.push,r=i.splice,a=i.join;d.prototype={add:function(e){this.contains(e)||(o.call(this,e),this.el.className=this.toString())},contains:function(e){return-1!=this.el.className.indexOf(e)},item:function(e){return this[e]||null},remove:function(e){if(this.contains(e)){for(var t=0;t<this.length&&this[t]!=e;t++);r.call(this,t,1),this.el.className=this.toString()}},toString:function(){return a.call(this," ")},toggle:function(e){return this.contains(e)?this.remove(e):this.add(e),this.contains(e)}},window.DOMTokenList=d,e=Element.prototype,t="classList",n=function(){return new d(this)},Object.defineProperty?Object.defineProperty(e,t,{get:n}):e.__defineGetter__(t,n)}function d(e){for(var t=(this.el=e).className.replace(/^\s+|\s+$/g,"").split(/\s+/),n=0;n<t.length;n++)o.call(this,t[n])}}();function a(e){var t,n,i,o;prefixesArray=e||["fa"],prefixesSelectorString="."+Array.prototype.join.call(e,",."),t=document.querySelectorAll(prefixesSelectorString),Array.prototype.forEach.call(t,function(e){n=e.getAttribute("title"),e.setAttribute("aria-hidden","true"),i=!e.nextElementSibling||!e.nextElementSibling.classList.contains("sr-only"),n&&i&&((o=document.createElement("span")).innerHTML=n,o.classList.add("sr-only"),e.parentNode.insertBefore(o,e.nextSibling))})}var d=function(e,t){var n=document.createElement("link");n.href=e,n.media="all",n.rel="stylesheet",n.id="font-awesome-5-kit-css",t&&t.detectingConflicts&&t.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),document.getElementsByTagName("head")[0].appendChild(n)},c=function(e,t){!function(e,t){var n,i=t&&t.before||void 0,o=t&&t.media||void 0,r=window.document,a=r.createElement("link");if(t&&t.detectingConflicts&&t.detectionIgnoreAttr&&a.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),i)n=i;else{var d=(r.body||r.getElementsByTagName("head")[0]).childNodes;n=d[d.length-1]}var c=r.styleSheets;a.rel="stylesheet",a.href=e,a.media="only x",function e(t){if(r.body)return t();setTimeout(function(){e(t)})}(function(){n.parentNode.insertBefore(a,i?n:n.nextSibling)});var s=function(e){for(var t=a.href,n=c.length;n--;)if(c[n].href===t)return e();setTimeout(function(){s(e)})};function l(){a.addEventListener&&a.removeEventListener("load",l),a.media=o||"all"}a.addEventListener&&a.addEventListener("load",l),(a.onloadcssdefined=s)(l)}(e,t)},e=function(e,t,n){var i=t&&void 0!==t.autoFetchSvg?t.autoFetchSvg:void 0,o=t&&void 0!==t.async?t.async:void 0,r=t&&void 0!==t.autoA11y?t.autoA11y:void 0,a=document.createElement("script"),d=document.scripts[0];a.src=e,void 0!==r&&a.setAttribute("data-auto-a11y",r?"true":"false"),i&&(a.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),a.setAttribute("data-fetch-svg-from",t.fetchSvgFrom)),o&&a.setAttributeNode(document.createAttribute("defer")),n&&n.detectingConflicts&&n.detectionIgnoreAttr&&a.setAttributeNode(document.createAttribute(n.detectionIgnoreAttr)),d.parentNode.appendChild(a)};function s(e,t){var n=t&&t.addOn||"",i=t&&t.baseFilename||e.license+n,o=t&&t.minify?".min":"",r=t&&t.fileSuffix||e.method,a=t&&t.subdir||e.method;return e.baseUrl+"/releases/"+("latest"===e.version?"latest":"v".concat(e.version))+"/"+a+"/"+i+o+"."+r}var t,n,i,o,l;try{if(window.FontAwesomeKitConfig){var u,f=window.FontAwesomeKitConfig,m={detectingConflicts:f.detectConflictsUntil&&new Date<=new Date(f.detectConflictsUntil),detectionIgnoreAttr:"data-fa-detection-ignore",detectionTimeoutAttr:"data-fa-detection-timeout",detectionTimeout:null};"js"===f.method&&(o=m,l={async:(i=f).asyncLoading.enabled,autoA11y:i.autoA11y.enabled},"pro"===i.license&&(l.autoFetchSvg=!0,l.fetchSvgFrom=i.baseUrl+"/releases/"+("latest"===i.version?"latest":"v".concat(i.version))+"/svgs"),i.v4shim.enabled&&e(s(i,{addOn:"-v4-shims",minify:i.minify.enabled})),e(s(i,{minify:i.minify.enabled}),l,o)),"css"===f.method&&function(e,t){var n,i=a.bind(a,["fa","fab","fas","far","fal","fad"]);e.autoA11y.enabled&&(r(i),n=i,"undefined"!=typeof MutationObserver&&new MutationObserver(n).observe(document,{childList:!0,subtree:!0})),e.v4shim.enabled&&(e.license,e.asyncLoading.enabled?c(s(e,{addOn:"-v4-shims",minify:e.minify.enabled}),t):d(s(e,{addOn:"-v4-shims",minify:e.minify.enabled}),t));e.v4FontFaceShim.enabled&&(e.asyncLoading.enabled?c(s(e,{addOn:"-v4-font-face",minify:e.minify.enabled}),t):d(s(e,{addOn:"-v4-font-face",minify:e.minify.enabled}),t));var o=s(e,{minify:e.minify.enabled});e.asyncLoading.enabled?c(o,t):d(o,t)}(f,m),m.detectingConflicts&&((u=document.currentScript.getAttribute(m.detectionTimeoutAttr))&&(m.detectionTimeout=u),document.currentScript.setAttributeNode(document.createAttribute(m.detectionIgnoreAttr)),t=f,n=m,r(function(){var e=document.createElement("script");n&&n.detectionIgnoreAttr&&e.setAttributeNode(document.createAttribute(n.detectionIgnoreAttr)),n&&n.detectionTimeoutAttr&&n.detectionTimeout&&e.setAttribute(n.detectionTimeoutAttr,n.detectionTimeout),e.src=s(t,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:t.minify.enabled}),e.async=!0,document.body.appendChild(e)}))}}catch(e){}}();
var Vue = (function (exports) {
  'use strict';

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   * IMPORTANT: all calls of this function must be prefixed with
   * \/\*#\_\_PURE\_\_\*\/
   * So that rollup can tree-shake them if necessary.
   */
  function makeMap(str, expectsLowerCase) {
      const map = Object.create(null);
      const list = str.split(',');
      for (let i = 0; i < list.length; i++) {
          map[list[i]] = true;
      }
      return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
  }

  /**
   * dev only flag -> name mapping
   */
  const PatchFlagNames = {
      [1 /* TEXT */]: `TEXT`,
      [2 /* CLASS */]: `CLASS`,
      [4 /* STYLE */]: `STYLE`,
      [8 /* PROPS */]: `PROPS`,
      [16 /* FULL_PROPS */]: `FULL_PROPS`,
      [32 /* HYDRATE_EVENTS */]: `HYDRATE_EVENTS`,
      [64 /* STABLE_FRAGMENT */]: `STABLE_FRAGMENT`,
      [128 /* KEYED_FRAGMENT */]: `KEYED_FRAGMENT`,
      [256 /* UNKEYED_FRAGMENT */]: `UNKEYED_FRAGMENT`,
      [512 /* NEED_PATCH */]: `NEED_PATCH`,
      [1024 /* DYNAMIC_SLOTS */]: `DYNAMIC_SLOTS`,
      [2048 /* DEV_ROOT_FRAGMENT */]: `DEV_ROOT_FRAGMENT`,
      [-1 /* HOISTED */]: `HOISTED`,
      [-2 /* BAIL */]: `BAIL`
  };

  /**
   * Dev only
   */
  const slotFlagsText = {
      [1 /* STABLE */]: 'STABLE',
      [2 /* DYNAMIC */]: 'DYNAMIC',
      [3 /* FORWARDED */]: 'FORWARDED'
  };

  const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
      'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
      'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt';
  const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);

  const range = 2;
  function generateCodeFrame(source, start = 0, end = source.length) {
      // Split the content into individual lines but capture the newline sequence
      // that separated each line. This is important because the actual sequence is
      // needed to properly take into account the full line length for offset
      // comparison
      let lines = source.split(/(\r?\n)/);
      // Separate the lines and newline sequences into separate arrays for easier referencing
      const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
      lines = lines.filter((_, idx) => idx % 2 === 0);
      let count = 0;
      const res = [];
      for (let i = 0; i < lines.length; i++) {
          count +=
              lines[i].length +
                  ((newlineSequences[i] && newlineSequences[i].length) || 0);
          if (count >= start) {
              for (let j = i - range; j <= i + range || end > count; j++) {
                  if (j < 0 || j >= lines.length)
                      continue;
                  const line = j + 1;
                  res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                  const lineLength = lines[j].length;
                  const newLineSeqLength = (newlineSequences[j] && newlineSequences[j].length) || 0;
                  if (j === i) {
                      // push underline
                      const pad = start - (count - (lineLength + newLineSeqLength));
                      const length = Math.max(1, end > count ? lineLength - pad : end - start);
                      res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                  }
                  else if (j > i) {
                      if (end > count) {
                          const length = Math.max(Math.min(end - count, lineLength), 1);
                          res.push(`   |  ` + '^'.repeat(length));
                      }
                      count += lineLength + newLineSeqLength;
                  }
              }
              break;
          }
      }
      return res.join('\n');
  }

  /**
   * On the client we only need to offer special cases for boolean attributes that
   * have different names from their corresponding dom properties:
   * - itemscope -> N/A
   * - allowfullscreen -> allowFullscreen
   * - formnovalidate -> formNoValidate
   * - ismap -> isMap
   * - nomodule -> noModule
   * - novalidate -> noValidate
   * - readonly -> readOnly
   */
  const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
  /**
   * Boolean attributes should be included if the value is truthy or ''.
   * e.g. <select multiple> compiles to { multiple: '' }
   */
  function includeBooleanAttr(value) {
      return !!value || value === '';
  }

  function normalizeStyle(value) {
      if (isArray(value)) {
          const res = {};
          for (let i = 0; i < value.length; i++) {
              const item = value[i];
              const normalized = isString(item)
                  ? parseStringStyle(item)
                  : normalizeStyle(item);
              if (normalized) {
                  for (const key in normalized) {
                      res[key] = normalized[key];
                  }
              }
          }
          return res;
      }
      else if (isString(value)) {
          return value;
      }
      else if (isObject(value)) {
          return value;
      }
  }
  const listDelimiterRE = /;(?![^(]*\))/g;
  const propertyDelimiterRE = /:(.+)/;
  function parseStringStyle(cssText) {
      const ret = {};
      cssText.split(listDelimiterRE).forEach(item => {
          if (item) {
              const tmp = item.split(propertyDelimiterRE);
              tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
          }
      });
      return ret;
  }
  function normalizeClass(value) {
      let res = '';
      if (isString(value)) {
          res = value;
      }
      else if (isArray(value)) {
          for (let i = 0; i < value.length; i++) {
              const normalized = normalizeClass(value[i]);
              if (normalized) {
                  res += normalized + ' ';
              }
          }
      }
      else if (isObject(value)) {
          for (const name in value) {
              if (value[name]) {
                  res += name + ' ';
              }
          }
      }
      return res.trim();
  }
  function normalizeProps(props) {
      if (!props)
          return null;
      let { class: klass, style } = props;
      if (klass && !isString(klass)) {
          props.class = normalizeClass(klass);
      }
      if (style) {
          props.style = normalizeStyle(style);
      }
      return props;
  }

  // These tag configs are shared between compiler-dom and runtime-dom, so they
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
  const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
      'header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,' +
      'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
      'data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,' +
      'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
      'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
      'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
      'option,output,progress,select,textarea,details,dialog,menu,' +
      'summary,template,blockquote,iframe,tfoot';
  // https://developer.mozilla.org/en-US/docs/Web/SVG/Element
  const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
      'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
      'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
      'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
      'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
      'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
      'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
      'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
      'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
      'text,textPath,title,tspan,unknown,use,view';
  const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
  const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
  const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
  const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);

  function looseCompareArrays(a, b) {
      if (a.length !== b.length)
          return false;
      let equal = true;
      for (let i = 0; equal && i < a.length; i++) {
          equal = looseEqual(a[i], b[i]);
      }
      return equal;
  }
  function looseEqual(a, b) {
      if (a === b)
          return true;
      let aValidType = isDate(a);
      let bValidType = isDate(b);
      if (aValidType || bValidType) {
          return aValidType && bValidType ? a.getTime() === b.getTime() : false;
      }
      aValidType = isArray(a);
      bValidType = isArray(b);
      if (aValidType || bValidType) {
          return aValidType && bValidType ? looseCompareArrays(a, b) : false;
      }
      aValidType = isObject(a);
      bValidType = isObject(b);
      if (aValidType || bValidType) {
          /* istanbul ignore if: this if will probably never be called */
          if (!aValidType || !bValidType) {
              return false;
          }
          const aKeysCount = Object.keys(a).length;
          const bKeysCount = Object.keys(b).length;
          if (aKeysCount !== bKeysCount) {
              return false;
          }
          for (const key in a) {
              const aHasKey = a.hasOwnProperty(key);
              const bHasKey = b.hasOwnProperty(key);
              if ((aHasKey && !bHasKey) ||
                  (!aHasKey && bHasKey) ||
                  !looseEqual(a[key], b[key])) {
                  return false;
              }
          }
      }
      return String(a) === String(b);
  }
  function looseIndexOf(arr, val) {
      return arr.findIndex(item => looseEqual(item, val));
  }

  /**
   * For converting {{ interpolation }} values to displayed strings.
   * @private
   */
  const toDisplayString = (val) => {
      return val == null
          ? ''
          : isArray(val) ||
              (isObject(val) &&
                  (val.toString === objectToString || !isFunction(val.toString)))
              ? JSON.stringify(val, replacer, 2)
              : String(val);
  };
  const replacer = (_key, val) => {
      // can't use isRef here since @vue/shared has no deps
      if (val && val.__v_isRef) {
          return replacer(_key, val.value);
      }
      else if (isMap(val)) {
          return {
              [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                  entries[`${key} =>`] = val;
                  return entries;
              }, {})
          };
      }
      else if (isSet(val)) {
          return {
              [`Set(${val.size})`]: [...val.values()]
          };
      }
      else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
          return String(val);
      }
      return val;
  };

  const EMPTY_OBJ = Object.freeze({})
      ;
  const EMPTY_ARR = Object.freeze([]) ;
  const NOOP = () => { };
  /**
   * Always return false.
   */
  const NO = () => false;
  const onRE = /^on[^a-z]/;
  const isOn = (key) => onRE.test(key);
  const isModelListener = (key) => key.startsWith('onUpdate:');
  const extend = Object.assign;
  const remove = (arr, el) => {
      const i = arr.indexOf(el);
      if (i > -1) {
          arr.splice(i, 1);
      }
  };
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const isArray = Array.isArray;
  const isMap = (val) => toTypeString(val) === '[object Map]';
  const isSet = (val) => toTypeString(val) === '[object Set]';
  const isDate = (val) => val instanceof Date;
  const isFunction = (val) => typeof val === 'function';
  const isString = (val) => typeof val === 'string';
  const isSymbol = (val) => typeof val === 'symbol';
  const isObject = (val) => val !== null && typeof val === 'object';
  const isPromise = (val) => {
      return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  };
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const toRawType = (value) => {
      // extract "RawType" from strings like "[object RawType]"
      return toTypeString(value).slice(8, -1);
  };
  const isPlainObject = (val) => toTypeString(val) === '[object Object]';
  const isIntegerKey = (key) => isString(key) &&
      key !== 'NaN' &&
      key[0] !== '-' &&
      '' + parseInt(key, 10) === key;
  const isReservedProp = /*#__PURE__*/ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ',key,ref,' +
      'onVnodeBeforeMount,onVnodeMounted,' +
      'onVnodeBeforeUpdate,onVnodeUpdated,' +
      'onVnodeBeforeUnmount,onVnodeUnmounted');
  const cacheStringFunction = (fn) => {
      const cache = Object.create(null);
      return ((str) => {
          const hit = cache[str];
          return hit || (cache[str] = fn(str));
      });
  };
  const camelizeRE = /-(\w)/g;
  /**
   * @private
   */
  const camelize = cacheStringFunction((str) => {
      return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
  });
  const hyphenateRE = /\B([A-Z])/g;
  /**
   * @private
   */
  const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
  /**
   * @private
   */
  const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  /**
   * @private
   */
  const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  // compare whether a value has changed, accounting for NaN.
  const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
  const invokeArrayFns = (fns, arg) => {
      for (let i = 0; i < fns.length; i++) {
          fns[i](arg);
      }
  };
  const def = (obj, key, value) => {
      Object.defineProperty(obj, key, {
          configurable: true,
          enumerable: false,
          value
      });
  };
  const toNumber = (val) => {
      const n = parseFloat(val);
      return isNaN(n) ? val : n;
  };
  let _globalThis;
  const getGlobalThis = () => {
      return (_globalThis ||
          (_globalThis =
              typeof globalThis !== 'undefined'
                  ? globalThis
                  : typeof self !== 'undefined'
                      ? self
                      : typeof window !== 'undefined'
                          ? window
                          : typeof global !== 'undefined'
                              ? global
                              : {}));
  };

  function warn(msg, ...args) {
      console.warn(`[Vue warn] ${msg}`, ...args);
  }

  let activeEffectScope;
  const effectScopeStack = [];
  class EffectScope {
      constructor(detached = false) {
          this.active = true;
          this.effects = [];
          this.cleanups = [];
          if (!detached && activeEffectScope) {
              this.parent = activeEffectScope;
              this.index =
                  (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
          }
      }
      run(fn) {
          if (this.active) {
              try {
                  this.on();
                  return fn();
              }
              finally {
                  this.off();
              }
          }
          else {
              warn(`cannot run an inactive effect scope.`);
          }
      }
      on() {
          if (this.active) {
              effectScopeStack.push(this);
              activeEffectScope = this;
          }
      }
      off() {
          if (this.active) {
              effectScopeStack.pop();
              activeEffectScope = effectScopeStack[effectScopeStack.length - 1];
          }
      }
      stop(fromParent) {
          if (this.active) {
              this.effects.forEach(e => e.stop());
              this.cleanups.forEach(cleanup => cleanup());
              if (this.scopes) {
                  this.scopes.forEach(e => e.stop(true));
              }
              // nested scope, dereference from parent to avoid memory leaks
              if (this.parent && !fromParent) {
                  // optimized O(1) removal
                  const last = this.parent.scopes.pop();
                  if (last && last !== this) {
                      this.parent.scopes[this.index] = last;
                      last.index = this.index;
                  }
              }
              this.active = false;
          }
      }
  }
  function effectScope(detached) {
      return new EffectScope(detached);
  }
  function recordEffectScope(effect, scope) {
      scope = scope || activeEffectScope;
      if (scope && scope.active) {
          scope.effects.push(effect);
      }
  }
  function getCurrentScope() {
      return activeEffectScope;
  }
  function onScopeDispose(fn) {
      if (activeEffectScope) {
          activeEffectScope.cleanups.push(fn);
      }
      else {
          warn(`onScopeDispose() is called when there is no active effect scope` +
              ` to be associated with.`);
      }
  }

  const createDep = (effects) => {
      const dep = new Set(effects);
      dep.w = 0;
      dep.n = 0;
      return dep;
  };
  const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
  const newTracked = (dep) => (dep.n & trackOpBit) > 0;
  const initDepMarkers = ({ deps }) => {
      if (deps.length) {
          for (let i = 0; i < deps.length; i++) {
              deps[i].w |= trackOpBit; // set was tracked
          }
      }
  };
  const finalizeDepMarkers = (effect) => {
      const { deps } = effect;
      if (deps.length) {
          let ptr = 0;
          for (let i = 0; i < deps.length; i++) {
              const dep = deps[i];
              if (wasTracked(dep) && !newTracked(dep)) {
                  dep.delete(effect);
              }
              else {
                  deps[ptr++] = dep;
              }
              // clear bits
              dep.w &= ~trackOpBit;
              dep.n &= ~trackOpBit;
          }
          deps.length = ptr;
      }
  };

  const targetMap = new WeakMap();
  // The number of effects currently being tracked recursively.
  let effectTrackDepth = 0;
  let trackOpBit = 1;
  /**
   * The bitwise track markers support at most 30 levels op recursion.
   * This value is chosen to enable modern JS engines to use a SMI on all platforms.
   * When recursion depth is greater, fall back to using a full cleanup.
   */
  const maxMarkerBits = 30;
  const effectStack = [];
  let activeEffect;
  const ITERATE_KEY = Symbol('iterate' );
  const MAP_KEY_ITERATE_KEY = Symbol('Map key iterate' );
  class ReactiveEffect {
      constructor(fn, scheduler = null, scope) {
          this.fn = fn;
          this.scheduler = scheduler;
          this.active = true;
          this.deps = [];
          recordEffectScope(this, scope);
      }
      run() {
          if (!this.active) {
              return this.fn();
          }
          if (!effectStack.includes(this)) {
              try {
                  effectStack.push((activeEffect = this));
                  enableTracking();
                  trackOpBit = 1 << ++effectTrackDepth;
                  if (effectTrackDepth <= maxMarkerBits) {
                      initDepMarkers(this);
                  }
                  else {
                      cleanupEffect(this);
                  }
                  return this.fn();
              }
              finally {
                  if (effectTrackDepth <= maxMarkerBits) {
                      finalizeDepMarkers(this);
                  }
                  trackOpBit = 1 << --effectTrackDepth;
                  resetTracking();
                  effectStack.pop();
                  const n = effectStack.length;
                  activeEffect = n > 0 ? effectStack[n - 1] : undefined;
              }
          }
      }
      stop() {
          if (this.active) {
              cleanupEffect(this);
              if (this.onStop) {
                  this.onStop();
              }
              this.active = false;
          }
      }
  }
  function cleanupEffect(effect) {
      const { deps } = effect;
      if (deps.length) {
          for (let i = 0; i < deps.length; i++) {
              deps[i].delete(effect);
          }
          deps.length = 0;
      }
  }
  function effect(fn, options) {
      if (fn.effect) {
          fn = fn.effect.fn;
      }
      const _effect = new ReactiveEffect(fn);
      if (options) {
          extend(_effect, options);
          if (options.scope)
              recordEffectScope(_effect, options.scope);
      }
      if (!options || !options.lazy) {
          _effect.run();
      }
      const runner = _effect.run.bind(_effect);
      runner.effect = _effect;
      return runner;
  }
  function stop(runner) {
      runner.effect.stop();
  }
  let shouldTrack = true;
  const trackStack = [];
  function pauseTracking() {
      trackStack.push(shouldTrack);
      shouldTrack = false;
  }
  function enableTracking() {
      trackStack.push(shouldTrack);
      shouldTrack = true;
  }
  function resetTracking() {
      const last = trackStack.pop();
      shouldTrack = last === undefined ? true : last;
  }
  function track(target, type, key) {
      if (!isTracking()) {
          return;
      }
      let depsMap = targetMap.get(target);
      if (!depsMap) {
          targetMap.set(target, (depsMap = new Map()));
      }
      let dep = depsMap.get(key);
      if (!dep) {
          depsMap.set(key, (dep = createDep()));
      }
      const eventInfo = { effect: activeEffect, target, type, key }
          ;
      trackEffects(dep, eventInfo);
  }
  function isTracking() {
      return shouldTrack && activeEffect !== undefined;
  }
  function trackEffects(dep, debuggerEventExtraInfo) {
      let shouldTrack = false;
      if (effectTrackDepth <= maxMarkerBits) {
          if (!newTracked(dep)) {
              dep.n |= trackOpBit; // set newly tracked
              shouldTrack = !wasTracked(dep);
          }
      }
      else {
          // Full cleanup mode.
          shouldTrack = !dep.has(activeEffect);
      }
      if (shouldTrack) {
          dep.add(activeEffect);
          activeEffect.deps.push(dep);
          if (activeEffect.onTrack) {
              activeEffect.onTrack(Object.assign({
                  effect: activeEffect
              }, debuggerEventExtraInfo));
          }
      }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
      const depsMap = targetMap.get(target);
      if (!depsMap) {
          // never been tracked
          return;
      }
      let deps = [];
      if (type === "clear" /* CLEAR */) {
          // collection being cleared
          // trigger all effects for target
          deps = [...depsMap.values()];
      }
      else if (key === 'length' && isArray(target)) {
          depsMap.forEach((dep, key) => {
              if (key === 'length' || key >= newValue) {
                  deps.push(dep);
              }
          });
      }
      else {
          // schedule runs for SET | ADD | DELETE
          if (key !== void 0) {
              deps.push(depsMap.get(key));
          }
          // also run for iteration key on ADD | DELETE | Map.SET
          switch (type) {
              case "add" /* ADD */:
                  if (!isArray(target)) {
                      deps.push(depsMap.get(ITERATE_KEY));
                      if (isMap(target)) {
                          deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                      }
                  }
                  else if (isIntegerKey(key)) {
                      // new index added to array -> length changes
                      deps.push(depsMap.get('length'));
                  }
                  break;
              case "delete" /* DELETE */:
                  if (!isArray(target)) {
                      deps.push(depsMap.get(ITERATE_KEY));
                      if (isMap(target)) {
                          deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                      }
                  }
                  break;
              case "set" /* SET */:
                  if (isMap(target)) {
                      deps.push(depsMap.get(ITERATE_KEY));
                  }
                  break;
          }
      }
      const eventInfo = { target, type, key, newValue, oldValue, oldTarget }
          ;
      if (deps.length === 1) {
          if (deps[0]) {
              {
                  triggerEffects(deps[0], eventInfo);
              }
          }
      }
      else {
          const effects = [];
          for (const dep of deps) {
              if (dep) {
                  effects.push(...dep);
              }
          }
          {
              triggerEffects(createDep(effects), eventInfo);
          }
      }
  }
  function triggerEffects(dep, debuggerEventExtraInfo) {
      // spread into array for stabilization
      for (const effect of isArray(dep) ? dep : [...dep]) {
          if (effect !== activeEffect || effect.allowRecurse) {
              if (effect.onTrigger) {
                  effect.onTrigger(extend({ effect }, debuggerEventExtraInfo));
              }
              if (effect.scheduler) {
                  effect.scheduler();
              }
              else {
                  effect.run();
              }
          }
      }
  }

  const isNonTrackableKeys = /*#__PURE__*/ makeMap(`__proto__,__v_isRef,__isVue`);
  const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol)
      .map(key => Symbol[key])
      .filter(isSymbol));
  const get = /*#__PURE__*/ createGetter();
  const shallowGet = /*#__PURE__*/ createGetter(false, true);
  const readonlyGet = /*#__PURE__*/ createGetter(true);
  const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
  const arrayInstrumentations = /*#__PURE__*/ createArrayInstrumentations();
  function createArrayInstrumentations() {
      const instrumentations = {};
      ['includes', 'indexOf', 'lastIndexOf'].forEach(key => {
          instrumentations[key] = function (...args) {
              const arr = toRaw(this);
              for (let i = 0, l = this.length; i < l; i++) {
                  track(arr, "get" /* GET */, i + '');
              }
              // we run the method using the original args first (which may be reactive)
              const res = arr[key](...args);
              if (res === -1 || res === false) {
                  // if that didn't work, run it again using raw values.
                  return arr[key](...args.map(toRaw));
              }
              else {
                  return res;
              }
          };
      });
      ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(key => {
          instrumentations[key] = function (...args) {
              pauseTracking();
              const res = toRaw(this)[key].apply(this, args);
              resetTracking();
              return res;
          };
      });
      return instrumentations;
  }
  function createGetter(isReadonly = false, shallow = false) {
      return function get(target, key, receiver) {
          if (key === "__v_isReactive" /* IS_REACTIVE */) {
              return !isReadonly;
          }
          else if (key === "__v_isReadonly" /* IS_READONLY */) {
              return isReadonly;
          }
          else if (key === "__v_raw" /* RAW */ &&
              receiver ===
                  (isReadonly
                      ? shallow
                          ? shallowReadonlyMap
                          : readonlyMap
                      : shallow
                          ? shallowReactiveMap
                          : reactiveMap).get(target)) {
              return target;
          }
          const targetIsArray = isArray(target);
          if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
              return Reflect.get(arrayInstrumentations, key, receiver);
          }
          const res = Reflect.get(target, key, receiver);
          if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
              return res;
          }
          if (!isReadonly) {
              track(target, "get" /* GET */, key);
          }
          if (shallow) {
              return res;
          }
          if (isRef(res)) {
              // ref unwrapping - does not apply for Array + integer key.
              const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
              return shouldUnwrap ? res.value : res;
          }
          if (isObject(res)) {
              // Convert returned value into a proxy as well. we do the isObject check
              // here to avoid invalid value warning. Also need to lazy access readonly
              // and reactive here to avoid circular dependency.
              return isReadonly ? readonly(res) : reactive(res);
          }
          return res;
      };
  }
  const set = /*#__PURE__*/ createSetter();
  const shallowSet = /*#__PURE__*/ createSetter(true);
  function createSetter(shallow = false) {
      return function set(target, key, value, receiver) {
          let oldValue = target[key];
          if (!shallow) {
              value = toRaw(value);
              oldValue = toRaw(oldValue);
              if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
                  oldValue.value = value;
                  return true;
              }
          }
          const hadKey = isArray(target) && isIntegerKey(key)
              ? Number(key) < target.length
              : hasOwn(target, key);
          const result = Reflect.set(target, key, value, receiver);
          // don't trigger if target is something up in the prototype chain of original
          if (target === toRaw(receiver)) {
              if (!hadKey) {
                  trigger(target, "add" /* ADD */, key, value);
              }
              else if (hasChanged(value, oldValue)) {
                  trigger(target, "set" /* SET */, key, value, oldValue);
              }
          }
          return result;
      };
  }
  function deleteProperty(target, key) {
      const hadKey = hasOwn(target, key);
      const oldValue = target[key];
      const result = Reflect.deleteProperty(target, key);
      if (result && hadKey) {
          trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
      }
      return result;
  }
  function has(target, key) {
      const result = Reflect.has(target, key);
      if (!isSymbol(key) || !builtInSymbols.has(key)) {
          track(target, "has" /* HAS */, key);
      }
      return result;
  }
  function ownKeys(target) {
      track(target, "iterate" /* ITERATE */, isArray(target) ? 'length' : ITERATE_KEY);
      return Reflect.ownKeys(target);
  }
  const mutableHandlers = {
      get,
      set,
      deleteProperty,
      has,
      ownKeys
  };
  const readonlyHandlers = {
      get: readonlyGet,
      set(target, key) {
          {
              console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
          }
          return true;
      },
      deleteProperty(target, key) {
          {
              console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
          }
          return true;
      }
  };
  const shallowReactiveHandlers = /*#__PURE__*/ extend({}, mutableHandlers, {
      get: shallowGet,
      set: shallowSet
  });
  // Props handlers are special in the sense that it should not unwrap top-level
  // refs (in order to allow refs to be explicitly passed down), but should
  // retain the reactivity of the normal readonly object.
  const shallowReadonlyHandlers = /*#__PURE__*/ extend({}, readonlyHandlers, {
      get: shallowReadonlyGet
  });

  const toShallow = (value) => value;
  const getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1(target, key, isReadonly = false, isShallow = false) {
      // #1772: readonly(reactive(Map)) should return readonly + reactive version
      // of the value
      target = target["__v_raw" /* RAW */];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (key !== rawKey) {
          !isReadonly && track(rawTarget, "get" /* GET */, key);
      }
      !isReadonly && track(rawTarget, "get" /* GET */, rawKey);
      const { has } = getProto(rawTarget);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      if (has.call(rawTarget, key)) {
          return wrap(target.get(key));
      }
      else if (has.call(rawTarget, rawKey)) {
          return wrap(target.get(rawKey));
      }
      else if (target !== rawTarget) {
          // #3602 readonly(reactive(Map))
          // ensure that the nested reactive `Map` can do tracking for itself
          target.get(key);
      }
  }
  function has$1(key, isReadonly = false) {
      const target = this["__v_raw" /* RAW */];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (key !== rawKey) {
          !isReadonly && track(rawTarget, "has" /* HAS */, key);
      }
      !isReadonly && track(rawTarget, "has" /* HAS */, rawKey);
      return key === rawKey
          ? target.has(key)
          : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly = false) {
      target = target["__v_raw" /* RAW */];
      !isReadonly && track(toRaw(target), "iterate" /* ITERATE */, ITERATE_KEY);
      return Reflect.get(target, 'size', target);
  }
  function add(value) {
      value = toRaw(value);
      const target = toRaw(this);
      const proto = getProto(target);
      const hadKey = proto.has.call(target, value);
      if (!hadKey) {
          target.add(value);
          trigger(target, "add" /* ADD */, value, value);
      }
      return this;
  }
  function set$1(key, value) {
      value = toRaw(value);
      const target = toRaw(this);
      const { has, get } = getProto(target);
      let hadKey = has.call(target, key);
      if (!hadKey) {
          key = toRaw(key);
          hadKey = has.call(target, key);
      }
      else {
          checkIdentityKeys(target, has, key);
      }
      const oldValue = get.call(target, key);
      target.set(key, value);
      if (!hadKey) {
          trigger(target, "add" /* ADD */, key, value);
      }
      else if (hasChanged(value, oldValue)) {
          trigger(target, "set" /* SET */, key, value, oldValue);
      }
      return this;
  }
  function deleteEntry(key) {
      const target = toRaw(this);
      const { has, get } = getProto(target);
      let hadKey = has.call(target, key);
      if (!hadKey) {
          key = toRaw(key);
          hadKey = has.call(target, key);
      }
      else {
          checkIdentityKeys(target, has, key);
      }
      const oldValue = get ? get.call(target, key) : undefined;
      // forward the operation before queueing reactions
      const result = target.delete(key);
      if (hadKey) {
          trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
      }
      return result;
  }
  function clear() {
      const target = toRaw(this);
      const hadItems = target.size !== 0;
      const oldTarget = isMap(target)
              ? new Map(target)
              : new Set(target)
          ;
      // forward the operation before queueing reactions
      const result = target.clear();
      if (hadItems) {
          trigger(target, "clear" /* CLEAR */, undefined, undefined, oldTarget);
      }
      return result;
  }
  function createForEach(isReadonly, isShallow) {
      return function forEach(callback, thisArg) {
          const observed = this;
          const target = observed["__v_raw" /* RAW */];
          const rawTarget = toRaw(target);
          const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
          !isReadonly && track(rawTarget, "iterate" /* ITERATE */, ITERATE_KEY);
          return target.forEach((value, key) => {
              // important: make sure the callback is
              // 1. invoked with the reactive map as `this` and 3rd arg
              // 2. the value received should be a corresponding reactive/readonly.
              return callback.call(thisArg, wrap(value), wrap(key), observed);
          });
      };
  }
  function createIterableMethod(method, isReadonly, isShallow) {
      return function (...args) {
          const target = this["__v_raw" /* RAW */];
          const rawTarget = toRaw(target);
          const targetIsMap = isMap(rawTarget);
          const isPair = method === 'entries' || (method === Symbol.iterator && targetIsMap);
          const isKeyOnly = method === 'keys' && targetIsMap;
          const innerIterator = target[method](...args);
          const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
          !isReadonly &&
              track(rawTarget, "iterate" /* ITERATE */, isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
          // return a wrapped iterator which returns observed versions of the
          // values emitted from the real iterator
          return {
              // iterator protocol
              next() {
                  const { value, done } = innerIterator.next();
                  return done
                      ? { value, done }
                      : {
                          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                          done
                      };
              },
              // iterable protocol
              [Symbol.iterator]() {
                  return this;
              }
          };
      };
  }
  function createReadonlyMethod(type) {
      return function (...args) {
          {
              const key = args[0] ? `on key "${args[0]}" ` : ``;
              console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
          }
          return type === "delete" /* DELETE */ ? false : this;
      };
  }
  function createInstrumentations() {
      const mutableInstrumentations = {
          get(key) {
              return get$1(this, key);
          },
          get size() {
              return size(this);
          },
          has: has$1,
          add,
          set: set$1,
          delete: deleteEntry,
          clear,
          forEach: createForEach(false, false)
      };
      const shallowInstrumentations = {
          get(key) {
              return get$1(this, key, false, true);
          },
          get size() {
              return size(this);
          },
          has: has$1,
          add,
          set: set$1,
          delete: deleteEntry,
          clear,
          forEach: createForEach(false, true)
      };
      const readonlyInstrumentations = {
          get(key) {
              return get$1(this, key, true);
          },
          get size() {
              return size(this, true);
          },
          has(key) {
              return has$1.call(this, key, true);
          },
          add: createReadonlyMethod("add" /* ADD */),
          set: createReadonlyMethod("set" /* SET */),
          delete: createReadonlyMethod("delete" /* DELETE */),
          clear: createReadonlyMethod("clear" /* CLEAR */),
          forEach: createForEach(true, false)
      };
      const shallowReadonlyInstrumentations = {
          get(key) {
              return get$1(this, key, true, true);
          },
          get size() {
              return size(this, true);
          },
          has(key) {
              return has$1.call(this, key, true);
          },
          add: createReadonlyMethod("add" /* ADD */),
          set: createReadonlyMethod("set" /* SET */),
          delete: createReadonlyMethod("delete" /* DELETE */),
          clear: createReadonlyMethod("clear" /* CLEAR */),
          forEach: createForEach(true, true)
      };
      const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
      iteratorMethods.forEach(method => {
          mutableInstrumentations[method] = createIterableMethod(method, false, false);
          readonlyInstrumentations[method] = createIterableMethod(method, true, false);
          shallowInstrumentations[method] = createIterableMethod(method, false, true);
          shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
      });
      return [
          mutableInstrumentations,
          readonlyInstrumentations,
          shallowInstrumentations,
          shallowReadonlyInstrumentations
      ];
  }
  const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* #__PURE__*/ createInstrumentations();
  function createInstrumentationGetter(isReadonly, shallow) {
      const instrumentations = shallow
          ? isReadonly
              ? shallowReadonlyInstrumentations
              : shallowInstrumentations
          : isReadonly
              ? readonlyInstrumentations
              : mutableInstrumentations;
      return (target, key, receiver) => {
          if (key === "__v_isReactive" /* IS_REACTIVE */) {
              return !isReadonly;
          }
          else if (key === "__v_isReadonly" /* IS_READONLY */) {
              return isReadonly;
          }
          else if (key === "__v_raw" /* RAW */) {
              return target;
          }
          return Reflect.get(hasOwn(instrumentations, key) && key in target
              ? instrumentations
              : target, key, receiver);
      };
  }
  const mutableCollectionHandlers = {
      get: /*#__PURE__*/ createInstrumentationGetter(false, false)
  };
  const shallowCollectionHandlers = {
      get: /*#__PURE__*/ createInstrumentationGetter(false, true)
  };
  const readonlyCollectionHandlers = {
      get: /*#__PURE__*/ createInstrumentationGetter(true, false)
  };
  const shallowReadonlyCollectionHandlers = {
      get: /*#__PURE__*/ createInstrumentationGetter(true, true)
  };
  function checkIdentityKeys(target, has, key) {
      const rawKey = toRaw(key);
      if (rawKey !== key && has.call(target, rawKey)) {
          const type = toRawType(target);
          console.warn(`Reactive ${type} contains both the raw and reactive ` +
              `versions of the same object${type === `Map` ? ` as keys` : ``}, ` +
              `which can lead to inconsistencies. ` +
              `Avoid differentiating between the raw and reactive versions ` +
              `of an object and only use the reactive version if possible.`);
      }
  }

  const reactiveMap = new WeakMap();
  const shallowReactiveMap = new WeakMap();
  const readonlyMap = new WeakMap();
  const shallowReadonlyMap = new WeakMap();
  function targetTypeMap(rawType) {
      switch (rawType) {
          case 'Object':
          case 'Array':
              return 1 /* COMMON */;
          case 'Map':
          case 'Set':
          case 'WeakMap':
          case 'WeakSet':
              return 2 /* COLLECTION */;
          default:
              return 0 /* INVALID */;
      }
  }
  function getTargetType(value) {
      return value["__v_skip" /* SKIP */] || !Object.isExtensible(value)
          ? 0 /* INVALID */
          : targetTypeMap(toRawType(value));
  }
  function reactive(target) {
      // if trying to observe a readonly proxy, return the readonly version.
      if (target && target["__v_isReadonly" /* IS_READONLY */]) {
          return target;
      }
      return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  /**
   * Return a shallowly-reactive copy of the original object, where only the root
   * level properties are reactive. It also does not auto-unwrap refs (even at the
   * root level).
   */
  function shallowReactive(target) {
      return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
  }
  /**
   * Creates a readonly copy of the original object. Note the returned copy is not
   * made reactive, but `readonly` can be called on an already reactive object.
   */
  function readonly(target) {
      return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  /**
   * Returns a reactive-copy of the original object, where only the root level
   * properties are readonly, and does NOT unwrap refs nor recursively convert
   * returned properties.
   * This is used for creating the props proxy object for stateful components.
   */
  function shallowReadonly(target) {
      return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
  }
  function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
      if (!isObject(target)) {
          {
              console.warn(`value cannot be made reactive: ${String(target)}`);
          }
          return target;
      }
      // target is already a Proxy, return it.
      // exception: calling readonly() on a reactive object
      if (target["__v_raw" /* RAW */] &&
          !(isReadonly && target["__v_isReactive" /* IS_REACTIVE */])) {
          return target;
      }
      // target already has corresponding Proxy
      const existingProxy = proxyMap.get(target);
      if (existingProxy) {
          return existingProxy;
      }
      // only a whitelist of value types can be observed.
      const targetType = getTargetType(target);
      if (targetType === 0 /* INVALID */) {
          return target;
      }
      const proxy = new Proxy(target, targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers);
      proxyMap.set(target, proxy);
      return proxy;
  }
  function isReactive(value) {
      if (isReadonly(value)) {
          return isReactive(value["__v_raw" /* RAW */]);
      }
      return !!(value && value["__v_isReactive" /* IS_REACTIVE */]);
  }
  function isReadonly(value) {
      return !!(value && value["__v_isReadonly" /* IS_READONLY */]);
  }
  function isProxy(value) {
      return isReactive(value) || isReadonly(value);
  }
  function toRaw(observed) {
      const raw = observed && observed["__v_raw" /* RAW */];
      return raw ? toRaw(raw) : observed;
  }
  function markRaw(value) {
      def(value, "__v_skip" /* SKIP */, true);
      return value;
  }
  const toReactive = (value) => isObject(value) ? reactive(value) : value;
  const toReadonly = (value) => isObject(value) ? readonly(value) : value;

  function trackRefValue(ref) {
      if (isTracking()) {
          ref = toRaw(ref);
          if (!ref.dep) {
              ref.dep = createDep();
          }
          {
              trackEffects(ref.dep, {
                  target: ref,
                  type: "get" /* GET */,
                  key: 'value'
              });
          }
      }
  }
  function triggerRefValue(ref, newVal) {
      ref = toRaw(ref);
      if (ref.dep) {
          {
              triggerEffects(ref.dep, {
                  target: ref,
                  type: "set" /* SET */,
                  key: 'value',
                  newValue: newVal
              });
          }
      }
  }
  function isRef(r) {
      return Boolean(r && r.__v_isRef === true);
  }
  function ref(value) {
      return createRef(value, false);
  }
  function shallowRef(value) {
      return createRef(value, true);
  }
  function createRef(rawValue, shallow) {
      if (isRef(rawValue)) {
          return rawValue;
      }
      return new RefImpl(rawValue, shallow);
  }
  class RefImpl {
      constructor(value, _shallow) {
          this._shallow = _shallow;
          this.dep = undefined;
          this.__v_isRef = true;
          this._rawValue = _shallow ? value : toRaw(value);
          this._value = _shallow ? value : toReactive(value);
      }
      get value() {
          trackRefValue(this);
          return this._value;
      }
      set value(newVal) {
          newVal = this._shallow ? newVal : toRaw(newVal);
          if (hasChanged(newVal, this._rawValue)) {
              this._rawValue = newVal;
              this._value = this._shallow ? newVal : toReactive(newVal);
              triggerRefValue(this, newVal);
          }
      }
  }
  function triggerRef(ref) {
      triggerRefValue(ref, ref.value );
  }
  function unref(ref) {
      return isRef(ref) ? ref.value : ref;
  }
  const shallowUnwrapHandlers = {
      get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
      set: (target, key, value, receiver) => {
          const oldValue = target[key];
          if (isRef(oldValue) && !isRef(value)) {
              oldValue.value = value;
              return true;
          }
          else {
              return Reflect.set(target, key, value, receiver);
          }
      }
  };
  function proxyRefs(objectWithRefs) {
      return isReactive(objectWithRefs)
          ? objectWithRefs
          : new Proxy(objectWithRefs, shallowUnwrapHandlers);
  }
  class CustomRefImpl {
      constructor(factory) {
          this.dep = undefined;
          this.__v_isRef = true;
          const { get, set } = factory(() => trackRefValue(this), () => triggerRefValue(this));
          this._get = get;
          this._set = set;
      }
      get value() {
          return this._get();
      }
      set value(newVal) {
          this._set(newVal);
      }
  }
  function customRef(factory) {
      return new CustomRefImpl(factory);
  }
  function toRefs(object) {
      if (!isProxy(object)) {
          console.warn(`toRefs() expects a reactive object but received a plain one.`);
      }
      const ret = isArray(object) ? new Array(object.length) : {};
      for (const key in object) {
          ret[key] = toRef(object, key);
      }
      return ret;
  }
  class ObjectRefImpl {
      constructor(_object, _key) {
          this._object = _object;
          this._key = _key;
          this.__v_isRef = true;
      }
      get value() {
          return this._object[this._key];
      }
      set value(newVal) {
          this._object[this._key] = newVal;
      }
  }
  function toRef(object, key) {
      const val = object[key];
      return isRef(val) ? val : new ObjectRefImpl(object, key);
  }

  class ComputedRefImpl {
      constructor(getter, _setter, isReadonly) {
          this._setter = _setter;
          this.dep = undefined;
          this._dirty = true;
          this.__v_isRef = true;
          this.effect = new ReactiveEffect(getter, () => {
              if (!this._dirty) {
                  this._dirty = true;
                  triggerRefValue(this);
              }
          });
          this["__v_isReadonly" /* IS_READONLY */] = isReadonly;
      }
      get value() {
          // the computed ref may get wrapped by other proxies e.g. readonly() #3376
          const self = toRaw(this);
          trackRefValue(self);
          if (self._dirty) {
              self._dirty = false;
              self._value = self.effect.run();
          }
          return self._value;
      }
      set value(newValue) {
          this._setter(newValue);
      }
  }
  function computed(getterOrOptions, debugOptions) {
      let getter;
      let setter;
      const onlyGetter = isFunction(getterOrOptions);
      if (onlyGetter) {
          getter = getterOrOptions;
          setter = () => {
                  console.warn('Write operation failed: computed value is readonly');
              }
              ;
      }
      else {
          getter = getterOrOptions.get;
          setter = getterOrOptions.set;
      }
      const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter);
      if (debugOptions) {
          cRef.effect.onTrack = debugOptions.onTrack;
          cRef.effect.onTrigger = debugOptions.onTrigger;
      }
      return cRef;
  }

  /* eslint-disable no-restricted-globals */
  let isHmrUpdating = false;
  const hmrDirtyComponents = new Set();
  // Expose the HMR runtime on the global object
  // This makes it entirely tree-shakable without polluting the exports and makes
  // it easier to be used in toolings like vue-loader
  // Note: for a component to be eligible for HMR it also needs the __hmrId option
  // to be set so that its instances can be registered / removed.
  {
      getGlobalThis().__VUE_HMR_RUNTIME__ = {
          createRecord: tryWrap(createRecord),
          rerender: tryWrap(rerender),
          reload: tryWrap(reload)
      };
  }
  const map = new Map();
  function registerHMR(instance) {
      const id = instance.type.__hmrId;
      let record = map.get(id);
      if (!record) {
          createRecord(id, instance.type);
          record = map.get(id);
      }
      record.instances.add(instance);
  }
  function unregisterHMR(instance) {
      map.get(instance.type.__hmrId).instances.delete(instance);
  }
  function createRecord(id, initialDef) {
      if (map.has(id)) {
          return false;
      }
      map.set(id, {
          initialDef: normalizeClassComponent(initialDef),
          instances: new Set()
      });
      return true;
  }
  function normalizeClassComponent(component) {
      return isClassComponent(component) ? component.__vccOpts : component;
  }
  function rerender(id, newRender) {
      const record = map.get(id);
      if (!record) {
          return;
      }
      // update initial record (for not-yet-rendered component)
      record.initialDef.render = newRender;
      [...record.instances].forEach(instance => {
          if (newRender) {
              instance.render = newRender;
              normalizeClassComponent(instance.type).render = newRender;
          }
          instance.renderCache = [];
          // this flag forces child components with slot content to update
          isHmrUpdating = true;
          instance.update();
          isHmrUpdating = false;
      });
  }
  function reload(id, newComp) {
      const record = map.get(id);
      if (!record)
          return;
      newComp = normalizeClassComponent(newComp);
      // update initial def (for not-yet-rendered components)
      updateComponentDef(record.initialDef, newComp);
      // create a snapshot which avoids the set being mutated during updates
      const instances = [...record.instances];
      for (const instance of instances) {
          const oldComp = normalizeClassComponent(instance.type);
          if (!hmrDirtyComponents.has(oldComp)) {
              // 1. Update existing comp definition to match new one
              if (oldComp !== record.initialDef) {
                  updateComponentDef(oldComp, newComp);
              }
              // 2. mark definition dirty. This forces the renderer to replace the
              // component on patch.
              hmrDirtyComponents.add(oldComp);
          }
          // 3. invalidate options resolution cache
          instance.appContext.optionsCache.delete(instance.type);
          // 4. actually update
          if (instance.ceReload) {
              // custom element
              hmrDirtyComponents.add(oldComp);
              instance.ceReload(newComp.styles);
              hmrDirtyComponents.delete(oldComp);
          }
          else if (instance.parent) {
              // 4. Force the parent instance to re-render. This will cause all updated
              // components to be unmounted and re-mounted. Queue the update so that we
              // don't end up forcing the same parent to re-render multiple times.
              queueJob(instance.parent.update);
              // instance is the inner component of an async custom element
              // invoke to reset styles
              if (instance.parent.type.__asyncLoader &&
                  instance.parent.ceReload) {
                  instance.parent.ceReload(newComp.styles);
              }
          }
          else if (instance.appContext.reload) {
              // root instance mounted via createApp() has a reload method
              instance.appContext.reload();
          }
          else if (typeof window !== 'undefined') {
              // root instance inside tree created via raw render(). Force reload.
              window.location.reload();
          }
          else {
              console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
          }
      }
      // 5. make sure to cleanup dirty hmr components after update
      queuePostFlushCb(() => {
          for (const instance of instances) {
              hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
          }
      });
  }
  function updateComponentDef(oldComp, newComp) {
      extend(oldComp, newComp);
      for (const key in oldComp) {
          if (key !== '__file' && !(key in newComp)) {
              delete oldComp[key];
          }
      }
  }
  function tryWrap(fn) {
      return (id, arg) => {
          try {
              return fn(id, arg);
          }
          catch (e) {
              console.error(e);
              console.warn(`[HMR] Something went wrong during Vue component hot-reload. ` +
                  `Full reload required.`);
          }
      };
  }

  let buffer = [];
  let devtoolsNotInstalled = false;
  function emit(event, ...args) {
      if (exports.devtools) {
          exports.devtools.emit(event, ...args);
      }
      else if (!devtoolsNotInstalled) {
          buffer.push({ event, args });
      }
  }
  function setDevtoolsHook(hook, target) {
      var _a, _b;
      exports.devtools = hook;
      if (exports.devtools) {
          exports.devtools.enabled = true;
          buffer.forEach(({ event, args }) => exports.devtools.emit(event, ...args));
          buffer = [];
      }
      else if (
      // handle late devtools injection - only do this if we are in an actual
      // browser environment to avoid the timer handle stalling test runner exit
      // (#4815)
      // eslint-disable-next-line no-restricted-globals
      typeof window !== 'undefined' &&
          // some envs mock window but not fully
          window.HTMLElement &&
          // also exclude jsdom
          !((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.includes('jsdom'))) {
          const replay = (target.__VUE_DEVTOOLS_HOOK_REPLAY__ =
              target.__VUE_DEVTOOLS_HOOK_REPLAY__ || []);
          replay.push((newHook) => {
              setDevtoolsHook(newHook, target);
          });
          // clear buffer after 3s - the user probably doesn't have devtools installed
          // at all, and keeping the buffer will cause memory leaks (#4738)
          setTimeout(() => {
              if (!exports.devtools) {
                  target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
                  devtoolsNotInstalled = true;
                  buffer = [];
              }
          }, 3000);
      }
      else {
          // non-browser env, assume not installed
          devtoolsNotInstalled = true;
          buffer = [];
      }
  }
  function devtoolsInitApp(app, version) {
      emit("app:init" /* APP_INIT */, app, version, {
          Fragment,
          Text,
          Comment,
          Static
      });
  }
  function devtoolsUnmountApp(app) {
      emit("app:unmount" /* APP_UNMOUNT */, app);
  }
  const devtoolsComponentAdded = /*#__PURE__*/ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */);
  const devtoolsComponentUpdated = 
  /*#__PURE__*/ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */);
  const devtoolsComponentRemoved = 
  /*#__PURE__*/ createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */);
  function createDevtoolsComponentHook(hook) {
      return (component) => {
          emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
      };
  }
  const devtoolsPerfStart = /*#__PURE__*/ createDevtoolsPerformanceHook("perf:start" /* PERFORMANCE_START */);
  const devtoolsPerfEnd = /*#__PURE__*/ createDevtoolsPerformanceHook("perf:end" /* PERFORMANCE_END */);
  function createDevtoolsPerformanceHook(hook) {
      return (component, type, time) => {
          emit(hook, component.appContext.app, component.uid, component, type, time);
      };
  }
  function devtoolsComponentEmit(component, event, params) {
      emit("component:emit" /* COMPONENT_EMIT */, component.appContext.app, component, event, params);
  }

  function emit$1(instance, event, ...rawArgs) {
      const props = instance.vnode.props || EMPTY_OBJ;
      {
          const { emitsOptions, propsOptions: [propsOptions] } = instance;
          if (emitsOptions) {
              if (!(event in emitsOptions) &&
                  !(false )) {
                  if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
                      warn$1(`Component emitted event "${event}" but it is neither declared in ` +
                          `the emits option nor as an "${toHandlerKey(event)}" prop.`);
                  }
              }
              else {
                  const validator = emitsOptions[event];
                  if (isFunction(validator)) {
                      const isValid = validator(...rawArgs);
                      if (!isValid) {
                          warn$1(`Invalid event arguments: event validation failed for event "${event}".`);
                      }
                  }
              }
          }
      }
      let args = rawArgs;
      const isModelListener = event.startsWith('update:');
      // for v-model update:xxx events, apply modifiers on args
      const modelArg = isModelListener && event.slice(7);
      if (modelArg && modelArg in props) {
          const modifiersKey = `${modelArg === 'modelValue' ? 'model' : modelArg}Modifiers`;
          const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
          if (trim) {
              args = rawArgs.map(a => a.trim());
          }
          else if (number) {
              args = rawArgs.map(toNumber);
          }
      }
      {
          devtoolsComponentEmit(instance, event, args);
      }
      {
          const lowerCaseEvent = event.toLowerCase();
          if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
              warn$1(`Event "${lowerCaseEvent}" is emitted in component ` +
                  `${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". ` +
                  `Note that HTML attributes are case-insensitive and you cannot use ` +
                  `v-on to listen to camelCase events when using in-DOM templates. ` +
                  `You should probably use "${hyphenate(event)}" instead of "${event}".`);
          }
      }
      let handlerName;
      let handler = props[(handlerName = toHandlerKey(event))] ||
          // also try camelCase event handler (#2249)
          props[(handlerName = toHandlerKey(camelize(event)))];
      // for v-model update:xxx events, also trigger kebab-case equivalent
      // for props passed via kebab-case
      if (!handler && isModelListener) {
          handler = props[(handlerName = toHandlerKey(hyphenate(event)))];
      }
      if (handler) {
          callWithAsyncErrorHandling(handler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
      }
      const onceHandler = props[handlerName + `Once`];
      if (onceHandler) {
          if (!instance.emitted) {
              instance.emitted = {};
          }
          else if (instance.emitted[handlerName]) {
              return;
          }
          instance.emitted[handlerName] = true;
          callWithAsyncErrorHandling(onceHandler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
      }
  }
  function normalizeEmitsOptions(comp, appContext, asMixin = false) {
      const cache = appContext.emitsCache;
      const cached = cache.get(comp);
      if (cached !== undefined) {
          return cached;
      }
      const raw = comp.emits;
      let normalized = {};
      // apply mixin/extends props
      let hasExtends = false;
      if (!isFunction(comp)) {
          const extendEmits = (raw) => {
              const normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);
              if (normalizedFromExtend) {
                  hasExtends = true;
                  extend(normalized, normalizedFromExtend);
              }
          };
          if (!asMixin && appContext.mixins.length) {
              appContext.mixins.forEach(extendEmits);
          }
          if (comp.extends) {
              extendEmits(comp.extends);
          }
          if (comp.mixins) {
              comp.mixins.forEach(extendEmits);
          }
      }
      if (!raw && !hasExtends) {
          cache.set(comp, null);
          return null;
      }
      if (isArray(raw)) {
          raw.forEach(key => (normalized[key] = null));
      }
      else {
          extend(normalized, raw);
      }
      cache.set(comp, normalized);
      return normalized;
  }
  // Check if an incoming prop key is a declared emit event listener.
  // e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
  // both considered matched listeners.
  function isEmitListener(options, key) {
      if (!options || !isOn(key)) {
          return false;
      }
      key = key.slice(2).replace(/Once$/, '');
      return (hasOwn(options, key[0].toLowerCase() + key.slice(1)) ||
          hasOwn(options, hyphenate(key)) ||
          hasOwn(options, key));
  }

  /**
   * mark the current rendering instance for asset resolution (e.g.
   * resolveComponent, resolveDirective) during render
   */
  let currentRenderingInstance = null;
  let currentScopeId = null;
  /**
   * Note: rendering calls maybe nested. The function returns the parent rendering
   * instance if present, which should be restored after the render is done:
   *
   * ```js
   * const prev = setCurrentRenderingInstance(i)
   * // ...render
   * setCurrentRenderingInstance(prev)
   * ```
   */
  function setCurrentRenderingInstance(instance) {
      const prev = currentRenderingInstance;
      currentRenderingInstance = instance;
      currentScopeId = (instance && instance.type.__scopeId) || null;
      return prev;
  }
  /**
   * Set scope id when creating hoisted vnodes.
   * @private compiler helper
   */
  function pushScopeId(id) {
      currentScopeId = id;
  }
  /**
   * Technically we no longer need this after 3.0.8 but we need to keep the same
   * API for backwards compat w/ code generated by compilers.
   * @private
   */
  function popScopeId() {
      currentScopeId = null;
  }
  /**
   * Only for backwards compat
   * @private
   */
  const withScopeId = (_id) => withCtx;
  /**
   * Wrap a slot function to memoize current rendering instance
   * @private compiler helper
   */
  function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot // false only
  ) {
      if (!ctx)
          return fn;
      // already normalized
      if (fn._n) {
          return fn;
      }
      const renderFnWithContext = (...args) => {
          // If a user calls a compiled slot inside a template expression (#1745), it
          // can mess up block tracking, so by default we disable block tracking and
          // force bail out when invoking a compiled slot (indicated by the ._d flag).
          // This isn't necessary if rendering a compiled `<slot>`, so we flip the
          // ._d flag off when invoking the wrapped fn inside `renderSlot`.
          if (renderFnWithContext._d) {
              setBlockTracking(-1);
          }
          const prevInstance = setCurrentRenderingInstance(ctx);
          const res = fn(...args);
          setCurrentRenderingInstance(prevInstance);
          if (renderFnWithContext._d) {
              setBlockTracking(1);
          }
          {
              devtoolsComponentUpdated(ctx);
          }
          return res;
      };
      // mark normalized to avoid duplicated wrapping
      renderFnWithContext._n = true;
      // mark this as compiled by default
      // this is used in vnode.ts -> normalizeChildren() to set the slot
      // rendering flag.
      renderFnWithContext._c = true;
      // disable block tracking by default
      renderFnWithContext._d = true;
      return renderFnWithContext;
  }

  /**
   * dev only flag to track whether $attrs was used during render.
   * If $attrs was used during render then the warning for failed attrs
   * fallthrough can be suppressed.
   */
  let accessedAttrs = false;
  function markAttrsAccessed() {
      accessedAttrs = true;
  }
  function renderComponentRoot(instance) {
      const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
      let result;
      let fallthroughAttrs;
      const prev = setCurrentRenderingInstance(instance);
      {
          accessedAttrs = false;
      }
      try {
          if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */) {
              // withProxy is a proxy with a different `has` trap only for
              // runtime-compiled render functions using `with` block.
              const proxyToUse = withProxy || proxy;
              result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
              fallthroughAttrs = attrs;
          }
          else {
              // functional
              const render = Component;
              // in dev, mark attrs accessed if optional props (attrs === props)
              if (true && attrs === props) {
                  markAttrsAccessed();
              }
              result = normalizeVNode(render.length > 1
                  ? render(props, true
                      ? {
                          get attrs() {
                              markAttrsAccessed();
                              return attrs;
                          },
                          slots,
                          emit
                      }
                      : { attrs, slots, emit })
                  : render(props, null /* we know it doesn't need it */));
              fallthroughAttrs = Component.props
                  ? attrs
                  : getFunctionalFallthrough(attrs);
          }
      }
      catch (err) {
          blockStack.length = 0;
          handleError(err, instance, 1 /* RENDER_FUNCTION */);
          result = createVNode(Comment);
      }
      // attr merging
      // in dev mode, comments are preserved, and it's possible for a template
      // to have comments along side the root element which makes it a fragment
      let root = result;
      let setRoot = undefined;
      if (result.patchFlag > 0 &&
          result.patchFlag & 2048 /* DEV_ROOT_FRAGMENT */) {
          [root, setRoot] = getChildRoot(result);
      }
      if (fallthroughAttrs && inheritAttrs !== false) {
          const keys = Object.keys(fallthroughAttrs);
          const { shapeFlag } = root;
          if (keys.length) {
              if (shapeFlag & (1 /* ELEMENT */ | 6 /* COMPONENT */)) {
                  if (propsOptions && keys.some(isModelListener)) {
                      // If a v-model listener (onUpdate:xxx) has a corresponding declared
                      // prop, it indicates this component expects to handle v-model and
                      // it should not fallthrough.
                      // related: #1543, #1643, #1989
                      fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                  }
                  root = cloneVNode(root, fallthroughAttrs);
              }
              else if (!accessedAttrs && root.type !== Comment) {
                  const allAttrs = Object.keys(attrs);
                  const eventAttrs = [];
                  const extraAttrs = [];
                  for (let i = 0, l = allAttrs.length; i < l; i++) {
                      const key = allAttrs[i];
                      if (isOn(key)) {
                          // ignore v-model handlers when they fail to fallthrough
                          if (!isModelListener(key)) {
                              // remove `on`, lowercase first letter to reflect event casing
                              // accurately
                              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                          }
                      }
                      else {
                          extraAttrs.push(key);
                      }
                  }
                  if (extraAttrs.length) {
                      warn$1(`Extraneous non-props attributes (` +
                          `${extraAttrs.join(', ')}) ` +
                          `were passed to component but could not be automatically inherited ` +
                          `because component renders fragment or text root nodes.`);
                  }
                  if (eventAttrs.length) {
                      warn$1(`Extraneous non-emits event listeners (` +
                          `${eventAttrs.join(', ')}) ` +
                          `were passed to component but could not be automatically inherited ` +
                          `because component renders fragment or text root nodes. ` +
                          `If the listener is intended to be a component custom event listener only, ` +
                          `declare it using the "emits" option.`);
                  }
              }
          }
      }
      // inherit directives
      if (vnode.dirs) {
          if (!isElementRoot(root)) {
              warn$1(`Runtime directive used on component with non-element root node. ` +
                  `The directives will not function as intended.`);
          }
          root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
      }
      // inherit transition data
      if (vnode.transition) {
          if (!isElementRoot(root)) {
              warn$1(`Component inside <Transition> renders non-element root node ` +
                  `that cannot be animated.`);
          }
          root.transition = vnode.transition;
      }
      if (setRoot) {
          setRoot(root);
      }
      else {
          result = root;
      }
      setCurrentRenderingInstance(prev);
      return result;
  }
  /**
   * dev only
   * In dev mode, template root level comments are rendered, which turns the
   * template into a fragment root, but we need to locate the single element
   * root for attrs and scope id processing.
   */
  const getChildRoot = (vnode) => {
      const rawChildren = vnode.children;
      const dynamicChildren = vnode.dynamicChildren;
      const childRoot = filterSingleRoot(rawChildren);
      if (!childRoot) {
          return [vnode, undefined];
      }
      const index = rawChildren.indexOf(childRoot);
      const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
      const setRoot = (updatedRoot) => {
          rawChildren[index] = updatedRoot;
          if (dynamicChildren) {
              if (dynamicIndex > -1) {
                  dynamicChildren[dynamicIndex] = updatedRoot;
              }
              else if (updatedRoot.patchFlag > 0) {
                  vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
              }
          }
      };
      return [normalizeVNode(childRoot), setRoot];
  };
  function filterSingleRoot(children) {
      let singleRoot;
      for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (isVNode(child)) {
              // ignore user comment
              if (child.type !== Comment || child.children === 'v-if') {
                  if (singleRoot) {
                      // has more than 1 non-comment child, return now
                      return;
                  }
                  else {
                      singleRoot = child;
                  }
              }
          }
          else {
              return;
          }
      }
      return singleRoot;
  }
  const getFunctionalFallthrough = (attrs) => {
      let res;
      for (const key in attrs) {
          if (key === 'class' || key === 'style' || isOn(key)) {
              (res || (res = {}))[key] = attrs[key];
          }
      }
      return res;
  };
  const filterModelListeners = (attrs, props) => {
      const res = {};
      for (const key in attrs) {
          if (!isModelListener(key) || !(key.slice(9) in props)) {
              res[key] = attrs[key];
          }
      }
      return res;
  };
  const isElementRoot = (vnode) => {
      return (vnode.shapeFlag & (6 /* COMPONENT */ | 1 /* ELEMENT */) ||
          vnode.type === Comment // potential v-if branch switch
      );
  };
  function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
      const { props: prevProps, children: prevChildren, component } = prevVNode;
      const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
      const emits = component.emitsOptions;
      // Parent component's render function was hot-updated. Since this may have
      // caused the child component's slots content to have changed, we need to
      // force the child to update as well.
      if ((prevChildren || nextChildren) && isHmrUpdating) {
          return true;
      }
      // force child update for runtime directive or transition on component vnode.
      if (nextVNode.dirs || nextVNode.transition) {
          return true;
      }
      if (optimized && patchFlag >= 0) {
          if (patchFlag & 1024 /* DYNAMIC_SLOTS */) {
              // slot content that references values that might have changed,
              // e.g. in a v-for
              return true;
          }
          if (patchFlag & 16 /* FULL_PROPS */) {
              if (!prevProps) {
                  return !!nextProps;
              }
              // presence of this flag indicates props are always non-null
              return hasPropsChanged(prevProps, nextProps, emits);
          }
          else if (patchFlag & 8 /* PROPS */) {
              const dynamicProps = nextVNode.dynamicProps;
              for (let i = 0; i < dynamicProps.length; i++) {
                  const key = dynamicProps[i];
                  if (nextProps[key] !== prevProps[key] &&
                      !isEmitListener(emits, key)) {
                      return true;
                  }
              }
          }
      }
      else {
          // this path is only taken by manually written render functions
          // so presence of any children leads to a forced update
          if (prevChildren || nextChildren) {
              if (!nextChildren || !nextChildren.$stable) {
                  return true;
              }
          }
          if (prevProps === nextProps) {
              return false;
          }
          if (!prevProps) {
              return !!nextProps;
          }
          if (!nextProps) {
              return true;
          }
          return hasPropsChanged(prevProps, nextProps, emits);
      }
      return false;
  }
  function hasPropsChanged(prevProps, nextProps, emitsOptions) {
      const nextKeys = Object.keys(nextProps);
      if (nextKeys.length !== Object.keys(prevProps).length) {
          return true;
      }
      for (let i = 0; i < nextKeys.length; i++) {
          const key = nextKeys[i];
          if (nextProps[key] !== prevProps[key] &&
              !isEmitListener(emitsOptions, key)) {
              return true;
          }
      }
      return false;
  }
  function updateHOCHostEl({ vnode, parent }, el // HostNode
  ) {
      while (parent && parent.subTree === vnode) {
          (vnode = parent.vnode).el = el;
          parent = parent.parent;
      }
  }

  const isSuspense = (type) => type.__isSuspense;
  // Suspense exposes a component-like API, and is treated like a component
  // in the compiler, but internally it's a special built-in type that hooks
  // directly into the renderer.
  const SuspenseImpl = {
      name: 'Suspense',
      // In order to make Suspense tree-shakable, we need to avoid importing it
      // directly in the renderer. The renderer checks for the __isSuspense flag
      // on a vnode's type and calls the `process` method, passing in renderer
      // internals.
      __isSuspense: true,
      process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, 
      // platform-specific impl passed from renderer
      rendererInternals) {
          if (n1 == null) {
              mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
          }
          else {
              patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
          }
      },
      hydrate: hydrateSuspense,
      create: createSuspenseBoundary,
      normalize: normalizeSuspenseChildren
  };
  // Force-casted public typing for h and TSX props inference
  const Suspense = (SuspenseImpl );
  function triggerEvent(vnode, name) {
      const eventListener = vnode.props && vnode.props[name];
      if (isFunction(eventListener)) {
          eventListener();
      }
  }
  function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
      const { p: patch, o: { createElement } } = rendererInternals;
      const hiddenContainer = createElement('div');
      const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals));
      // start mounting the content subtree in an off-dom container
      patch(null, (suspense.pendingBranch = vnode.ssContent), hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds);
      // now check if we have encountered any async deps
      if (suspense.deps > 0) {
          // has async
          // invoke @fallback event
          triggerEvent(vnode, 'onPending');
          triggerEvent(vnode, 'onFallback');
          // mount the fallback tree
          patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
          isSVG, slotScopeIds);
          setActiveBranch(suspense, vnode.ssFallback);
      }
      else {
          // Suspense has no async deps. Just resolve.
          suspense.resolve();
      }
  }
  function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
      const suspense = (n2.suspense = n1.suspense);
      suspense.vnode = n2;
      n2.el = n1.el;
      const newBranch = n2.ssContent;
      const newFallback = n2.ssFallback;
      const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
      if (pendingBranch) {
          suspense.pendingBranch = newBranch;
          if (isSameVNodeType(newBranch, pendingBranch)) {
              // same root type but content may have changed.
              patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
              if (suspense.deps <= 0) {
                  suspense.resolve();
              }
              else if (isInFallback) {
                  patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                  isSVG, slotScopeIds, optimized);
                  setActiveBranch(suspense, newFallback);
              }
          }
          else {
              // toggled before pending tree is resolved
              suspense.pendingId++;
              if (isHydrating) {
                  // if toggled before hydration is finished, the current DOM tree is
                  // no longer valid. set it as the active branch so it will be unmounted
                  // when resolved
                  suspense.isHydrating = false;
                  suspense.activeBranch = pendingBranch;
              }
              else {
                  unmount(pendingBranch, parentComponent, suspense);
              }
              // increment pending ID. this is used to invalidate async callbacks
              // reset suspense state
              suspense.deps = 0;
              // discard effects from pending branch
              suspense.effects.length = 0;
              // discard previous container
              suspense.hiddenContainer = createElement('div');
              if (isInFallback) {
                  // already in fallback state
                  patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                  if (suspense.deps <= 0) {
                      suspense.resolve();
                  }
                  else {
                      patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                      isSVG, slotScopeIds, optimized);
                      setActiveBranch(suspense, newFallback);
                  }
              }
              else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                  // toggled "back" to current active branch
                  patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                  // force resolve
                  suspense.resolve(true);
              }
              else {
                  // switched to a 3rd branch
                  patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                  if (suspense.deps <= 0) {
                      suspense.resolve();
                  }
              }
          }
      }
      else {
          if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
              // root did not change, just normal patch
              patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
              setActiveBranch(suspense, newBranch);
          }
          else {
              // root node toggled
              // invoke @pending event
              triggerEvent(n2, 'onPending');
              // mount pending branch in off-dom container
              suspense.pendingBranch = newBranch;
              suspense.pendingId++;
              patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
              if (suspense.deps <= 0) {
                  // incoming branch has no async deps, resolve now.
                  suspense.resolve();
              }
              else {
                  const { timeout, pendingId } = suspense;
                  if (timeout > 0) {
                      setTimeout(() => {
                          if (suspense.pendingId === pendingId) {
                              suspense.fallback(newFallback);
                          }
                      }, timeout);
                  }
                  else if (timeout === 0) {
                      suspense.fallback(newFallback);
                  }
              }
          }
      }
  }
  let hasWarned = false;
  function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
      /* istanbul ignore if */
      if (!hasWarned) {
          hasWarned = true;
          // @ts-ignore `console.info` cannot be null error
          console[console.info ? 'info' : 'log'](`<Suspense> is an experimental feature and its API will likely change.`);
      }
      const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove } } = rendererInternals;
      const timeout = toNumber(vnode.props && vnode.props.timeout);
      const suspense = {
          vnode,
          parent,
          parentComponent,
          isSVG,
          container,
          hiddenContainer,
          anchor,
          deps: 0,
          pendingId: 0,
          timeout: typeof timeout === 'number' ? timeout : -1,
          activeBranch: null,
          pendingBranch: null,
          isInFallback: true,
          isHydrating,
          isUnmounted: false,
          effects: [],
          resolve(resume = false) {
              {
                  if (!resume && !suspense.pendingBranch) {
                      throw new Error(`suspense.resolve() is called without a pending branch.`);
                  }
                  if (suspense.isUnmounted) {
                      throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
                  }
              }
              const { vnode, activeBranch, pendingBranch, pendingId, effects, parentComponent, container } = suspense;
              if (suspense.isHydrating) {
                  suspense.isHydrating = false;
              }
              else if (!resume) {
                  const delayEnter = activeBranch &&
                      pendingBranch.transition &&
                      pendingBranch.transition.mode === 'out-in';
                  if (delayEnter) {
                      activeBranch.transition.afterLeave = () => {
                          if (pendingId === suspense.pendingId) {
                              move(pendingBranch, container, anchor, 0 /* ENTER */);
                          }
                      };
                  }
                  // this is initial anchor on mount
                  let { anchor } = suspense;
                  // unmount current active tree
                  if (activeBranch) {
                      // if the fallback tree was mounted, it may have been moved
                      // as part of a parent suspense. get the latest anchor for insertion
                      anchor = next(activeBranch);
                      unmount(activeBranch, parentComponent, suspense, true);
                  }
                  if (!delayEnter) {
                      // move content from off-dom container to actual container
                      move(pendingBranch, container, anchor, 0 /* ENTER */);
                  }
              }
              setActiveBranch(suspense, pendingBranch);
              suspense.pendingBranch = null;
              suspense.isInFallback = false;
              // flush buffered effects
              // check if there is a pending parent suspense
              let parent = suspense.parent;
              let hasUnresolvedAncestor = false;
              while (parent) {
                  if (parent.pendingBranch) {
                      // found a pending parent suspense, merge buffered post jobs
                      // into that parent
                      parent.effects.push(...effects);
                      hasUnresolvedAncestor = true;
                      break;
                  }
                  parent = parent.parent;
              }
              // no pending parent suspense, flush all jobs
              if (!hasUnresolvedAncestor) {
                  queuePostFlushCb(effects);
              }
              suspense.effects = [];
              // invoke @resolve event
              triggerEvent(vnode, 'onResolve');
          },
          fallback(fallbackVNode) {
              if (!suspense.pendingBranch) {
                  return;
              }
              const { vnode, activeBranch, parentComponent, container, isSVG } = suspense;
              // invoke @fallback event
              triggerEvent(vnode, 'onFallback');
              const anchor = next(activeBranch);
              const mountFallback = () => {
                  if (!suspense.isInFallback) {
                      return;
                  }
                  // mount the fallback tree
                  patch(null, fallbackVNode, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                  isSVG, slotScopeIds, optimized);
                  setActiveBranch(suspense, fallbackVNode);
              };
              const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';
              if (delayEnter) {
                  activeBranch.transition.afterLeave = mountFallback;
              }
              suspense.isInFallback = true;
              // unmount current active branch
              unmount(activeBranch, parentComponent, null, // no suspense so unmount hooks fire now
              true // shouldRemove
              );
              if (!delayEnter) {
                  mountFallback();
              }
          },
          move(container, anchor, type) {
              suspense.activeBranch &&
                  move(suspense.activeBranch, container, anchor, type);
              suspense.container = container;
          },
          next() {
              return suspense.activeBranch && next(suspense.activeBranch);
          },
          registerDep(instance, setupRenderEffect) {
              const isInPendingSuspense = !!suspense.pendingBranch;
              if (isInPendingSuspense) {
                  suspense.deps++;
              }
              const hydratedEl = instance.vnode.el;
              instance
                  .asyncDep.catch(err => {
                  handleError(err, instance, 0 /* SETUP_FUNCTION */);
              })
                  .then(asyncSetupResult => {
                  // retry when the setup() promise resolves.
                  // component may have been unmounted before resolve.
                  if (instance.isUnmounted ||
                      suspense.isUnmounted ||
                      suspense.pendingId !== instance.suspenseId) {
                      return;
                  }
                  // retry from this component
                  instance.asyncResolved = true;
                  const { vnode } = instance;
                  {
                      pushWarningContext(vnode);
                  }
                  handleSetupResult(instance, asyncSetupResult, false);
                  if (hydratedEl) {
                      // vnode may have been replaced if an update happened before the
                      // async dep is resolved.
                      vnode.el = hydratedEl;
                  }
                  const placeholder = !hydratedEl && instance.subTree.el;
                  setupRenderEffect(instance, vnode, 
                  // component may have been moved before resolve.
                  // if this is not a hydration, instance.subTree will be the comment
                  // placeholder.
                  parentNode(hydratedEl || instance.subTree.el), 
                  // anchor will not be used if this is hydration, so only need to
                  // consider the comment placeholder case.
                  hydratedEl ? null : next(instance.subTree), suspense, isSVG, optimized);
                  if (placeholder) {
                      remove(placeholder);
                  }
                  updateHOCHostEl(instance, vnode.el);
                  {
                      popWarningContext();
                  }
                  // only decrease deps count if suspense is not already resolved
                  if (isInPendingSuspense && --suspense.deps === 0) {
                      suspense.resolve();
                  }
              });
          },
          unmount(parentSuspense, doRemove) {
              suspense.isUnmounted = true;
              if (suspense.activeBranch) {
                  unmount(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
              }
              if (suspense.pendingBranch) {
                  unmount(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
              }
          }
      };
      return suspense;
  }
  function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
      /* eslint-disable no-restricted-globals */
      const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, slotScopeIds, optimized, rendererInternals, true /* hydrating */));
      // there are two possible scenarios for server-rendered suspense:
      // - success: ssr content should be fully resolved
      // - failure: ssr content should be the fallback branch.
      // however, on the client we don't really know if it has failed or not
      // attempt to hydrate the DOM assuming it has succeeded, but we still
      // need to construct a suspense boundary first
      const result = hydrateNode(node, (suspense.pendingBranch = vnode.ssContent), parentComponent, suspense, slotScopeIds, optimized);
      if (suspense.deps === 0) {
          suspense.resolve();
      }
      return result;
      /* eslint-enable no-restricted-globals */
  }
  function normalizeSuspenseChildren(vnode) {
      const { shapeFlag, children } = vnode;
      const isSlotChildren = shapeFlag & 32 /* SLOTS_CHILDREN */;
      vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
      vnode.ssFallback = isSlotChildren
          ? normalizeSuspenseSlot(children.fallback)
          : createVNode(Comment);
  }
  function normalizeSuspenseSlot(s) {
      let block;
      if (isFunction(s)) {
          const trackBlock = isBlockTreeEnabled && s._c;
          if (trackBlock) {
              // disableTracking: false
              // allow block tracking for compiled slots
              // (see ./componentRenderContext.ts)
              s._d = false;
              openBlock();
          }
          s = s();
          if (trackBlock) {
              s._d = true;
              block = currentBlock;
              closeBlock();
          }
      }
      if (isArray(s)) {
          const singleChild = filterSingleRoot(s);
          if (!singleChild) {
              warn$1(`<Suspense> slots expect a single root node.`);
          }
          s = singleChild;
      }
      s = normalizeVNode(s);
      if (block && !s.dynamicChildren) {
          s.dynamicChildren = block.filter(c => c !== s);
      }
      return s;
  }
  function queueEffectWithSuspense(fn, suspense) {
      if (suspense && suspense.pendingBranch) {
          if (isArray(fn)) {
              suspense.effects.push(...fn);
          }
          else {
              suspense.effects.push(fn);
          }
      }
      else {
          queuePostFlushCb(fn);
      }
  }
  function setActiveBranch(suspense, branch) {
      suspense.activeBranch = branch;
      const { vnode, parentComponent } = suspense;
      const el = (vnode.el = branch.el);
      // in case suspense is the root node of a component,
      // recursively update the HOC el
      if (parentComponent && parentComponent.subTree === vnode) {
          parentComponent.vnode.el = el;
          updateHOCHostEl(parentComponent, el);
      }
  }

  function provide(key, value) {
      if (!currentInstance) {
          {
              warn$1(`provide() can only be used inside setup().`);
          }
      }
      else {
          let provides = currentInstance.provides;
          // by default an instance inherits its parent's provides object
          // but when it needs to provide values of its own, it creates its
          // own provides object using parent provides object as prototype.
          // this way in `inject` we can simply look up injections from direct
          // parent and let the prototype chain do the work.
          const parentProvides = currentInstance.parent && currentInstance.parent.provides;
          if (parentProvides === provides) {
              provides = currentInstance.provides = Object.create(parentProvides);
          }
          // TS doesn't allow symbol as index type
          provides[key] = value;
      }
  }
  function inject(key, defaultValue, treatDefaultAsFactory = false) {
      // fallback to `currentRenderingInstance` so that this can be called in
      // a functional component
      const instance = currentInstance || currentRenderingInstance;
      if (instance) {
          // #2400
          // to support `app.use` plugins,
          // fallback to appContext's `provides` if the intance is at root
          const provides = instance.parent == null
              ? instance.vnode.appContext && instance.vnode.appContext.provides
              : instance.parent.provides;
          if (provides && key in provides) {
              // TS doesn't allow symbol as index type
              return provides[key];
          }
          else if (arguments.length > 1) {
              return treatDefaultAsFactory && isFunction(defaultValue)
                  ? defaultValue.call(instance.proxy)
                  : defaultValue;
          }
          else {
              warn$1(`injection "${String(key)}" not found.`);
          }
      }
      else {
          warn$1(`inject() can only be used inside setup() or functional components.`);
      }
  }

  function useTransitionState() {
      const state = {
          isMounted: false,
          isLeaving: false,
          isUnmounting: false,
          leavingVNodes: new Map()
      };
      onMounted(() => {
          state.isMounted = true;
      });
      onBeforeUnmount(() => {
          state.isUnmounting = true;
      });
      return state;
  }
  const TransitionHookValidator = [Function, Array];
  const BaseTransitionImpl = {
      name: `BaseTransition`,
      props: {
          mode: String,
          appear: Boolean,
          persisted: Boolean,
          // enter
          onBeforeEnter: TransitionHookValidator,
          onEnter: TransitionHookValidator,
          onAfterEnter: TransitionHookValidator,
          onEnterCancelled: TransitionHookValidator,
          // leave
          onBeforeLeave: TransitionHookValidator,
          onLeave: TransitionHookValidator,
          onAfterLeave: TransitionHookValidator,
          onLeaveCancelled: TransitionHookValidator,
          // appear
          onBeforeAppear: TransitionHookValidator,
          onAppear: TransitionHookValidator,
          onAfterAppear: TransitionHookValidator,
          onAppearCancelled: TransitionHookValidator
      },
      setup(props, { slots }) {
          const instance = getCurrentInstance();
          const state = useTransitionState();
          let prevTransitionKey;
          return () => {
              const children = slots.default && getTransitionRawChildren(slots.default(), true);
              if (!children || !children.length) {
                  return;
              }
              // warn multiple elements
              if (children.length > 1) {
                  warn$1('<transition> can only be used on a single element or component. Use ' +
                      '<transition-group> for lists.');
              }
              // there's no need to track reactivity for these props so use the raw
              // props for a bit better perf
              const rawProps = toRaw(props);
              const { mode } = rawProps;
              // check mode
              if (mode && !['in-out', 'out-in', 'default'].includes(mode)) {
                  warn$1(`invalid <transition> mode: ${mode}`);
              }
              // at this point children has a guaranteed length of 1.
              const child = children[0];
              if (state.isLeaving) {
                  return emptyPlaceholder(child);
              }
              // in the case of <transition><keep-alive/></transition>, we need to
              // compare the type of the kept-alive children.
              const innerChild = getKeepAliveChild(child);
              if (!innerChild) {
                  return emptyPlaceholder(child);
              }
              const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
              setTransitionHooks(innerChild, enterHooks);
              const oldChild = instance.subTree;
              const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
              let transitionKeyChanged = false;
              const { getTransitionKey } = innerChild.type;
              if (getTransitionKey) {
                  const key = getTransitionKey();
                  if (prevTransitionKey === undefined) {
                      prevTransitionKey = key;
                  }
                  else if (key !== prevTransitionKey) {
                      prevTransitionKey = key;
                      transitionKeyChanged = true;
                  }
              }
              // handle mode
              if (oldInnerChild &&
                  oldInnerChild.type !== Comment &&
                  (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                  const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                  // update old tree's hooks in case of dynamic transition
                  setTransitionHooks(oldInnerChild, leavingHooks);
                  // switching between different views
                  if (mode === 'out-in') {
                      state.isLeaving = true;
                      // return placeholder node and queue update when leave finishes
                      leavingHooks.afterLeave = () => {
                          state.isLeaving = false;
                          instance.update();
                      };
                      return emptyPlaceholder(child);
                  }
                  else if (mode === 'in-out' && innerChild.type !== Comment) {
                      leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                          const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                          leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                          // early removal callback
                          el._leaveCb = () => {
                              earlyRemove();
                              el._leaveCb = undefined;
                              delete enterHooks.delayedLeave;
                          };
                          enterHooks.delayedLeave = delayedLeave;
                      };
                  }
              }
              return child;
          };
      }
  };
  // export the public type for h/tsx inference
  // also to avoid inline import() in generated d.ts files
  const BaseTransition = BaseTransitionImpl;
  function getLeavingNodesForType(state, vnode) {
      const { leavingVNodes } = state;
      let leavingVNodesCache = leavingVNodes.get(vnode.type);
      if (!leavingVNodesCache) {
          leavingVNodesCache = Object.create(null);
          leavingVNodes.set(vnode.type, leavingVNodesCache);
      }
      return leavingVNodesCache;
  }
  // The transition hooks are attached to the vnode as vnode.transition
  // and will be called at appropriate timing in the renderer.
  function resolveTransitionHooks(vnode, props, state, instance) {
      const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
      const key = String(vnode.key);
      const leavingVNodesCache = getLeavingNodesForType(state, vnode);
      const callHook = (hook, args) => {
          hook &&
              callWithAsyncErrorHandling(hook, instance, 9 /* TRANSITION_HOOK */, args);
      };
      const hooks = {
          mode,
          persisted,
          beforeEnter(el) {
              let hook = onBeforeEnter;
              if (!state.isMounted) {
                  if (appear) {
                      hook = onBeforeAppear || onBeforeEnter;
                  }
                  else {
                      return;
                  }
              }
              // for same element (v-show)
              if (el._leaveCb) {
                  el._leaveCb(true /* cancelled */);
              }
              // for toggled element with same key (v-if)
              const leavingVNode = leavingVNodesCache[key];
              if (leavingVNode &&
                  isSameVNodeType(vnode, leavingVNode) &&
                  leavingVNode.el._leaveCb) {
                  // force early removal (not cancelled)
                  leavingVNode.el._leaveCb();
              }
              callHook(hook, [el]);
          },
          enter(el) {
              let hook = onEnter;
              let afterHook = onAfterEnter;
              let cancelHook = onEnterCancelled;
              if (!state.isMounted) {
                  if (appear) {
                      hook = onAppear || onEnter;
                      afterHook = onAfterAppear || onAfterEnter;
                      cancelHook = onAppearCancelled || onEnterCancelled;
                  }
                  else {
                      return;
                  }
              }
              let called = false;
              const done = (el._enterCb = (cancelled) => {
                  if (called)
                      return;
                  called = true;
                  if (cancelled) {
                      callHook(cancelHook, [el]);
                  }
                  else {
                      callHook(afterHook, [el]);
                  }
                  if (hooks.delayedLeave) {
                      hooks.delayedLeave();
                  }
                  el._enterCb = undefined;
              });
              if (hook) {
                  hook(el, done);
                  if (hook.length <= 1) {
                      done();
                  }
              }
              else {
                  done();
              }
          },
          leave(el, remove) {
              const key = String(vnode.key);
              if (el._enterCb) {
                  el._enterCb(true /* cancelled */);
              }
              if (state.isUnmounting) {
                  return remove();
              }
              callHook(onBeforeLeave, [el]);
              let called = false;
              const done = (el._leaveCb = (cancelled) => {
                  if (called)
                      return;
                  called = true;
                  remove();
                  if (cancelled) {
                      callHook(onLeaveCancelled, [el]);
                  }
                  else {
                      callHook(onAfterLeave, [el]);
                  }
                  el._leaveCb = undefined;
                  if (leavingVNodesCache[key] === vnode) {
                      delete leavingVNodesCache[key];
                  }
              });
              leavingVNodesCache[key] = vnode;
              if (onLeave) {
                  onLeave(el, done);
                  if (onLeave.length <= 1) {
                      done();
                  }
              }
              else {
                  done();
              }
          },
          clone(vnode) {
              return resolveTransitionHooks(vnode, props, state, instance);
          }
      };
      return hooks;
  }
  // the placeholder really only handles one special case: KeepAlive
  // in the case of a KeepAlive in a leave phase we need to return a KeepAlive
  // placeholder with empty content to avoid the KeepAlive instance from being
  // unmounted.
  function emptyPlaceholder(vnode) {
      if (isKeepAlive(vnode)) {
          vnode = cloneVNode(vnode);
          vnode.children = null;
          return vnode;
      }
  }
  function getKeepAliveChild(vnode) {
      return isKeepAlive(vnode)
          ? vnode.children
              ? vnode.children[0]
              : undefined
          : vnode;
  }
  function setTransitionHooks(vnode, hooks) {
      if (vnode.shapeFlag & 6 /* COMPONENT */ && vnode.component) {
          setTransitionHooks(vnode.component.subTree, hooks);
      }
      else if (vnode.shapeFlag & 128 /* SUSPENSE */) {
          vnode.ssContent.transition = hooks.clone(vnode.ssContent);
          vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
      }
      else {
          vnode.transition = hooks;
      }
  }
  function getTransitionRawChildren(children, keepComment = false) {
      let ret = [];
      let keyedFragmentCount = 0;
      for (let i = 0; i < children.length; i++) {
          const child = children[i];
          // handle fragment children case, e.g. v-for
          if (child.type === Fragment) {
              if (child.patchFlag & 128 /* KEYED_FRAGMENT */)
                  keyedFragmentCount++;
              ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
          }
          // comment placeholders should be skipped, e.g. v-if
          else if (keepComment || child.type !== Comment) {
              ret.push(child);
          }
      }
      // #1126 if a transition children list contains multiple sub fragments, these
      // fragments will be merged into a flat children array. Since each v-for
      // fragment may contain different static bindings inside, we need to de-op
      // these children to force full diffs to ensure correct behavior.
      if (keyedFragmentCount > 1) {
          for (let i = 0; i < ret.length; i++) {
              ret[i].patchFlag = -2 /* BAIL */;
          }
      }
      return ret;
  }

  // implementation, close to no-op
  function defineComponent(options) {
      return isFunction(options) ? { setup: options, name: options.name } : options;
  }

  const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
  function defineAsyncComponent(source) {
      if (isFunction(source)) {
          source = { loader: source };
      }
      const { loader, loadingComponent, errorComponent, delay = 200, timeout, // undefined = never times out
      suspensible = true, onError: userOnError } = source;
      let pendingRequest = null;
      let resolvedComp;
      let retries = 0;
      const retry = () => {
          retries++;
          pendingRequest = null;
          return load();
      };
      const load = () => {
          let thisRequest;
          return (pendingRequest ||
              (thisRequest = pendingRequest =
                  loader()
                      .catch(err => {
                      err = err instanceof Error ? err : new Error(String(err));
                      if (userOnError) {
                          return new Promise((resolve, reject) => {
                              const userRetry = () => resolve(retry());
                              const userFail = () => reject(err);
                              userOnError(err, userRetry, userFail, retries + 1);
                          });
                      }
                      else {
                          throw err;
                      }
                  })
                      .then((comp) => {
                      if (thisRequest !== pendingRequest && pendingRequest) {
                          return pendingRequest;
                      }
                      if (!comp) {
                          warn$1(`Async component loader resolved to undefined. ` +
                              `If you are using retry(), make sure to return its return value.`);
                      }
                      // interop module default
                      if (comp &&
                          (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                          comp = comp.default;
                      }
                      if (comp && !isObject(comp) && !isFunction(comp)) {
                          throw new Error(`Invalid async component load result: ${comp}`);
                      }
                      resolvedComp = comp;
                      return comp;
                  })));
      };
      return defineComponent({
          name: 'AsyncComponentWrapper',
          __asyncLoader: load,
          get __asyncResolved() {
              return resolvedComp;
          },
          setup() {
              const instance = currentInstance;
              // already resolved
              if (resolvedComp) {
                  return () => createInnerComp(resolvedComp, instance);
              }
              const onError = (err) => {
                  pendingRequest = null;
                  handleError(err, instance, 13 /* ASYNC_COMPONENT_LOADER */, !errorComponent /* do not throw in dev if user provided error component */);
              };
              // suspense-controlled or SSR.
              if ((suspensible && instance.suspense) ||
                  (false )) {
                  return load()
                      .then(comp => {
                      return () => createInnerComp(comp, instance);
                  })
                      .catch(err => {
                      onError(err);
                      return () => errorComponent
                          ? createVNode(errorComponent, {
                              error: err
                          })
                          : null;
                  });
              }
              const loaded = ref(false);
              const error = ref();
              const delayed = ref(!!delay);
              if (delay) {
                  setTimeout(() => {
                      delayed.value = false;
                  }, delay);
              }
              if (timeout != null) {
                  setTimeout(() => {
                      if (!loaded.value && !error.value) {
                          const err = new Error(`Async component timed out after ${timeout}ms.`);
                          onError(err);
                          error.value = err;
                      }
                  }, timeout);
              }
              load()
                  .then(() => {
                  loaded.value = true;
                  if (instance.parent && isKeepAlive(instance.parent.vnode)) {
                      // parent is keep-alive, force update so the loaded component's
                      // name is taken into account
                      queueJob(instance.parent.update);
                  }
              })
                  .catch(err => {
                  onError(err);
                  error.value = err;
              });
              return () => {
                  if (loaded.value && resolvedComp) {
                      return createInnerComp(resolvedComp, instance);
                  }
                  else if (error.value && errorComponent) {
                      return createVNode(errorComponent, {
                          error: error.value
                      });
                  }
                  else if (loadingComponent && !delayed.value) {
                      return createVNode(loadingComponent);
                  }
              };
          }
      });
  }
  function createInnerComp(comp, { vnode: { ref, props, children } }) {
      const vnode = createVNode(comp, props, children);
      // ensure inner component inherits the async wrapper's ref owner
      vnode.ref = ref;
      return vnode;
  }

  const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
  const KeepAliveImpl = {
      name: `KeepAlive`,
      // Marker for special handling inside the renderer. We are not using a ===
      // check directly on KeepAlive in the renderer, because importing it directly
      // would prevent it from being tree-shaken.
      __isKeepAlive: true,
      props: {
          include: [String, RegExp, Array],
          exclude: [String, RegExp, Array],
          max: [String, Number]
      },
      setup(props, { slots }) {
          const instance = getCurrentInstance();
          // KeepAlive communicates with the instantiated renderer via the
          // ctx where the renderer passes in its internals,
          // and the KeepAlive instance exposes activate/deactivate implementations.
          // The whole point of this is to avoid importing KeepAlive directly in the
          // renderer to facilitate tree-shaking.
          const sharedContext = instance.ctx;
          // if the internal renderer is not registered, it indicates that this is server-side rendering,
          // for KeepAlive, we just need to render its children
          if (!sharedContext.renderer) {
              return slots.default;
          }
          const cache = new Map();
          const keys = new Set();
          let current = null;
          {
              instance.__v_cache = cache;
          }
          const parentSuspense = instance.suspense;
          const { renderer: { p: patch, m: move, um: _unmount, o: { createElement } } } = sharedContext;
          const storageContainer = createElement('div');
          sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
              const instance = vnode.component;
              move(vnode, container, anchor, 0 /* ENTER */, parentSuspense);
              // in case props have changed
              patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
              queuePostRenderEffect(() => {
                  instance.isDeactivated = false;
                  if (instance.a) {
                      invokeArrayFns(instance.a);
                  }
                  const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                  if (vnodeHook) {
                      invokeVNodeHook(vnodeHook, instance.parent, vnode);
                  }
              }, parentSuspense);
              {
                  // Update components tree
                  devtoolsComponentAdded(instance);
              }
          };
          sharedContext.deactivate = (vnode) => {
              const instance = vnode.component;
              move(vnode, storageContainer, null, 1 /* LEAVE */, parentSuspense);
              queuePostRenderEffect(() => {
                  if (instance.da) {
                      invokeArrayFns(instance.da);
                  }
                  const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                  if (vnodeHook) {
                      invokeVNodeHook(vnodeHook, instance.parent, vnode);
                  }
                  instance.isDeactivated = true;
              }, parentSuspense);
              {
                  // Update components tree
                  devtoolsComponentAdded(instance);
              }
          };
          function unmount(vnode) {
              // reset the shapeFlag so it can be properly unmounted
              resetShapeFlag(vnode);
              _unmount(vnode, instance, parentSuspense);
          }
          function pruneCache(filter) {
              cache.forEach((vnode, key) => {
                  const name = getComponentName(vnode.type);
                  if (name && (!filter || !filter(name))) {
                      pruneCacheEntry(key);
                  }
              });
          }
          function pruneCacheEntry(key) {
              const cached = cache.get(key);
              if (!current || cached.type !== current.type) {
                  unmount(cached);
              }
              else if (current) {
                  // current active instance should no longer be kept-alive.
                  // we can't unmount it now but it might be later, so reset its flag now.
                  resetShapeFlag(current);
              }
              cache.delete(key);
              keys.delete(key);
          }
          // prune cache on include/exclude prop change
          watch(() => [props.include, props.exclude], ([include, exclude]) => {
              include && pruneCache(name => matches(include, name));
              exclude && pruneCache(name => !matches(exclude, name));
          }, 
          // prune post-render after `current` has been updated
          { flush: 'post', deep: true });
          // cache sub tree after render
          let pendingCacheKey = null;
          const cacheSubtree = () => {
              // fix #1621, the pendingCacheKey could be 0
              if (pendingCacheKey != null) {
                  cache.set(pendingCacheKey, getInnerChild(instance.subTree));
              }
          };
          onMounted(cacheSubtree);
          onUpdated(cacheSubtree);
          onBeforeUnmount(() => {
              cache.forEach(cached => {
                  const { subTree, suspense } = instance;
                  const vnode = getInnerChild(subTree);
                  if (cached.type === vnode.type) {
                      // current instance will be unmounted as part of keep-alive's unmount
                      resetShapeFlag(vnode);
                      // but invoke its deactivated hook here
                      const da = vnode.component.da;
                      da && queuePostRenderEffect(da, suspense);
                      return;
                  }
                  unmount(cached);
              });
          });
          return () => {
              pendingCacheKey = null;
              if (!slots.default) {
                  return null;
              }
              const children = slots.default();
              const rawVNode = children[0];
              if (children.length > 1) {
                  {
                      warn$1(`KeepAlive should contain exactly one component child.`);
                  }
                  current = null;
                  return children;
              }
              else if (!isVNode(rawVNode) ||
                  (!(rawVNode.shapeFlag & 4 /* STATEFUL_COMPONENT */) &&
                      !(rawVNode.shapeFlag & 128 /* SUSPENSE */))) {
                  current = null;
                  return rawVNode;
              }
              let vnode = getInnerChild(rawVNode);
              const comp = vnode.type;
              // for async components, name check should be based in its loaded
              // inner component if available
              const name = getComponentName(isAsyncWrapper(vnode)
                  ? vnode.type.__asyncResolved || {}
                  : comp);
              const { include, exclude, max } = props;
              if ((include && (!name || !matches(include, name))) ||
                  (exclude && name && matches(exclude, name))) {
                  current = vnode;
                  return rawVNode;
              }
              const key = vnode.key == null ? comp : vnode.key;
              const cachedVNode = cache.get(key);
              // clone vnode if it's reused because we are going to mutate it
              if (vnode.el) {
                  vnode = cloneVNode(vnode);
                  if (rawVNode.shapeFlag & 128 /* SUSPENSE */) {
                      rawVNode.ssContent = vnode;
                  }
              }
              // #1513 it's possible for the returned vnode to be cloned due to attr
              // fallthrough or scopeId, so the vnode here may not be the final vnode
              // that is mounted. Instead of caching it directly, we store the pending
              // key and cache `instance.subTree` (the normalized vnode) in
              // beforeMount/beforeUpdate hooks.
              pendingCacheKey = key;
              if (cachedVNode) {
                  // copy over mounted state
                  vnode.el = cachedVNode.el;
                  vnode.component = cachedVNode.component;
                  if (vnode.transition) {
                      // recursively update transition hooks on subTree
                      setTransitionHooks(vnode, vnode.transition);
                  }
                  // avoid vnode being mounted as fresh
                  vnode.shapeFlag |= 512 /* COMPONENT_KEPT_ALIVE */;
                  // make this key the freshest
                  keys.delete(key);
                  keys.add(key);
              }
              else {
                  keys.add(key);
                  // prune oldest entry
                  if (max && keys.size > parseInt(max, 10)) {
                      pruneCacheEntry(keys.values().next().value);
                  }
              }
              // avoid vnode being unmounted
              vnode.shapeFlag |= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
              current = vnode;
              return rawVNode;
          };
      }
  };
  // export the public type for h/tsx inference
  // also to avoid inline import() in generated d.ts files
  const KeepAlive = KeepAliveImpl;
  function matches(pattern, name) {
      if (isArray(pattern)) {
          return pattern.some((p) => matches(p, name));
      }
      else if (isString(pattern)) {
          return pattern.split(',').indexOf(name) > -1;
      }
      else if (pattern.test) {
          return pattern.test(name);
      }
      /* istanbul ignore next */
      return false;
  }
  function onActivated(hook, target) {
      registerKeepAliveHook(hook, "a" /* ACTIVATED */, target);
  }
  function onDeactivated(hook, target) {
      registerKeepAliveHook(hook, "da" /* DEACTIVATED */, target);
  }
  function registerKeepAliveHook(hook, type, target = currentInstance) {
      // cache the deactivate branch check wrapper for injected hooks so the same
      // hook can be properly deduped by the scheduler. "__wdc" stands for "with
      // deactivation check".
      const wrappedHook = hook.__wdc ||
          (hook.__wdc = () => {
              // only fire the hook if the target instance is NOT in a deactivated branch.
              let current = target;
              while (current) {
                  if (current.isDeactivated) {
                      return;
                  }
                  current = current.parent;
              }
              hook();
          });
      injectHook(type, wrappedHook, target);
      // In addition to registering it on the target instance, we walk up the parent
      // chain and register it on all ancestor instances that are keep-alive roots.
      // This avoids the need to walk the entire component tree when invoking these
      // hooks, and more importantly, avoids the need to track child components in
      // arrays.
      if (target) {
          let current = target.parent;
          while (current && current.parent) {
              if (isKeepAlive(current.parent.vnode)) {
                  injectToKeepAliveRoot(wrappedHook, type, target, current);
              }
              current = current.parent;
          }
      }
  }
  function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
      // injectHook wraps the original for error handling, so make sure to remove
      // the wrapped version.
      const injected = injectHook(type, hook, keepAliveRoot, true /* prepend */);
      onUnmounted(() => {
          remove(keepAliveRoot[type], injected);
      }, target);
  }
  function resetShapeFlag(vnode) {
      let shapeFlag = vnode.shapeFlag;
      if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
          shapeFlag -= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
      }
      if (shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
          shapeFlag -= 512 /* COMPONENT_KEPT_ALIVE */;
      }
      vnode.shapeFlag = shapeFlag;
  }
  function getInnerChild(vnode) {
      return vnode.shapeFlag & 128 /* SUSPENSE */ ? vnode.ssContent : vnode;
  }

  function injectHook(type, hook, target = currentInstance, prepend = false) {
      if (target) {
          const hooks = target[type] || (target[type] = []);
          // cache the error handling wrapper for injected hooks so the same hook
          // can be properly deduped by the scheduler. "__weh" stands for "with error
          // handling".
          const wrappedHook = hook.__weh ||
              (hook.__weh = (...args) => {
                  if (target.isUnmounted) {
                      return;
                  }
                  // disable tracking inside all lifecycle hooks
                  // since they can potentially be called inside effects.
                  pauseTracking();
                  // Set currentInstance during hook invocation.
                  // This assumes the hook does not synchronously trigger other hooks, which
                  // can only be false when the user does something really funky.
                  setCurrentInstance(target);
                  const res = callWithAsyncErrorHandling(hook, target, type, args);
                  unsetCurrentInstance();
                  resetTracking();
                  return res;
              });
          if (prepend) {
              hooks.unshift(wrappedHook);
          }
          else {
              hooks.push(wrappedHook);
          }
          return wrappedHook;
      }
      else {
          const apiName = toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ''));
          warn$1(`${apiName} is called when there is no active component instance to be ` +
              `associated with. ` +
              `Lifecycle injection APIs can only be used during execution of setup().` +
              (` If you are using async setup(), make sure to register lifecycle ` +
                      `hooks before the first await statement.`
                  ));
      }
  }
  const createHook = (lifecycle) => (hook, target = currentInstance) => 
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!isInSSRComponentSetup || lifecycle === "sp" /* SERVER_PREFETCH */) &&
      injectHook(lifecycle, hook, target);
  const onBeforeMount = createHook("bm" /* BEFORE_MOUNT */);
  const onMounted = createHook("m" /* MOUNTED */);
  const onBeforeUpdate = createHook("bu" /* BEFORE_UPDATE */);
  const onUpdated = createHook("u" /* UPDATED */);
  const onBeforeUnmount = createHook("bum" /* BEFORE_UNMOUNT */);
  const onUnmounted = createHook("um" /* UNMOUNTED */);
  const onServerPrefetch = createHook("sp" /* SERVER_PREFETCH */);
  const onRenderTriggered = createHook("rtg" /* RENDER_TRIGGERED */);
  const onRenderTracked = createHook("rtc" /* RENDER_TRACKED */);
  function onErrorCaptured(hook, target = currentInstance) {
      injectHook("ec" /* ERROR_CAPTURED */, hook, target);
  }

  function createDuplicateChecker() {
      const cache = Object.create(null);
      return (type, key) => {
          if (cache[key]) {
              warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
          }
          else {
              cache[key] = type;
          }
      };
  }
  let shouldCacheAccess = true;
  function applyOptions(instance) {
      const options = resolveMergedOptions(instance);
      const publicThis = instance.proxy;
      const ctx = instance.ctx;
      // do not cache property access on public proxy during state initialization
      shouldCacheAccess = false;
      // call beforeCreate first before accessing other options since
      // the hook may mutate resolved options (#2791)
      if (options.beforeCreate) {
          callHook(options.beforeCreate, instance, "bc" /* BEFORE_CREATE */);
      }
      const { 
      // state
      data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, 
      // lifecycle
      created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, serverPrefetch, 
      // public API
      expose, inheritAttrs, 
      // assets
      components, directives, filters } = options;
      const checkDuplicateProperties = createDuplicateChecker() ;
      {
          const [propsOptions] = instance.propsOptions;
          if (propsOptions) {
              for (const key in propsOptions) {
                  checkDuplicateProperties("Props" /* PROPS */, key);
              }
          }
      }
      // options initialization order (to be consistent with Vue 2):
      // - props (already done outside of this function)
      // - inject
      // - methods
      // - data (deferred since it relies on `this` access)
      // - computed
      // - watch (deferred since it relies on `this` access)
      if (injectOptions) {
          resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
      }
      if (methods) {
          for (const key in methods) {
              const methodHandler = methods[key];
              if (isFunction(methodHandler)) {
                  // In dev mode, we use the `createRenderContext` function to define
                  // methods to the proxy target, and those are read-only but
                  // reconfigurable, so it needs to be redefined here
                  {
                      Object.defineProperty(ctx, key, {
                          value: methodHandler.bind(publicThis),
                          configurable: true,
                          enumerable: true,
                          writable: true
                      });
                  }
                  {
                      checkDuplicateProperties("Methods" /* METHODS */, key);
                  }
              }
              else {
                  warn$1(`Method "${key}" has type "${typeof methodHandler}" in the component definition. ` +
                      `Did you reference the function correctly?`);
              }
          }
      }
      if (dataOptions) {
          if (!isFunction(dataOptions)) {
              warn$1(`The data option must be a function. ` +
                  `Plain object usage is no longer supported.`);
          }
          const data = dataOptions.call(publicThis, publicThis);
          if (isPromise(data)) {
              warn$1(`data() returned a Promise - note data() cannot be async; If you ` +
                  `intend to perform data fetching before component renders, use ` +
                  `async setup() + <Suspense>.`);
          }
          if (!isObject(data)) {
              warn$1(`data() should return an object.`);
          }
          else {
              instance.data = reactive(data);
              {
                  for (const key in data) {
                      checkDuplicateProperties("Data" /* DATA */, key);
                      // expose data on ctx during dev
                      if (key[0] !== '$' && key[0] !== '_') {
                          Object.defineProperty(ctx, key, {
                              configurable: true,
                              enumerable: true,
                              get: () => data[key],
                              set: NOOP
                          });
                      }
                  }
              }
          }
      }
      // state initialization complete at this point - start caching access
      shouldCacheAccess = true;
      if (computedOptions) {
          for (const key in computedOptions) {
              const opt = computedOptions[key];
              const get = isFunction(opt)
                  ? opt.bind(publicThis, publicThis)
                  : isFunction(opt.get)
                      ? opt.get.bind(publicThis, publicThis)
                      : NOOP;
              if (get === NOOP) {
                  warn$1(`Computed property "${key}" has no getter.`);
              }
              const set = !isFunction(opt) && isFunction(opt.set)
                  ? opt.set.bind(publicThis)
                  : () => {
                          warn$1(`Write operation failed: computed property "${key}" is readonly.`);
                      }
                      ;
              const c = computed({
                  get,
                  set
              });
              Object.defineProperty(ctx, key, {
                  enumerable: true,
                  configurable: true,
                  get: () => c.value,
                  set: v => (c.value = v)
              });
              {
                  checkDuplicateProperties("Computed" /* COMPUTED */, key);
              }
          }
      }
      if (watchOptions) {
          for (const key in watchOptions) {
              createWatcher(watchOptions[key], ctx, publicThis, key);
          }
      }
      if (provideOptions) {
          const provides = isFunction(provideOptions)
              ? provideOptions.call(publicThis)
              : provideOptions;
          Reflect.ownKeys(provides).forEach(key => {
              provide(key, provides[key]);
          });
      }
      if (created) {
          callHook(created, instance, "c" /* CREATED */);
      }
      function registerLifecycleHook(register, hook) {
          if (isArray(hook)) {
              hook.forEach(_hook => register(_hook.bind(publicThis)));
          }
          else if (hook) {
              register(hook.bind(publicThis));
          }
      }
      registerLifecycleHook(onBeforeMount, beforeMount);
      registerLifecycleHook(onMounted, mounted);
      registerLifecycleHook(onBeforeUpdate, beforeUpdate);
      registerLifecycleHook(onUpdated, updated);
      registerLifecycleHook(onActivated, activated);
      registerLifecycleHook(onDeactivated, deactivated);
      registerLifecycleHook(onErrorCaptured, errorCaptured);
      registerLifecycleHook(onRenderTracked, renderTracked);
      registerLifecycleHook(onRenderTriggered, renderTriggered);
      registerLifecycleHook(onBeforeUnmount, beforeUnmount);
      registerLifecycleHook(onUnmounted, unmounted);
      registerLifecycleHook(onServerPrefetch, serverPrefetch);
      if (isArray(expose)) {
          if (expose.length) {
              const exposed = instance.exposed || (instance.exposed = {});
              expose.forEach(key => {
                  Object.defineProperty(exposed, key, {
                      get: () => publicThis[key],
                      set: val => (publicThis[key] = val)
                  });
              });
          }
          else if (!instance.exposed) {
              instance.exposed = {};
          }
      }
      // options that are handled when creating the instance but also need to be
      // applied from mixins
      if (render && instance.render === NOOP) {
          instance.render = render;
      }
      if (inheritAttrs != null) {
          instance.inheritAttrs = inheritAttrs;
      }
      // asset options.
      if (components)
          instance.components = components;
      if (directives)
          instance.directives = directives;
  }
  function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
      if (isArray(injectOptions)) {
          injectOptions = normalizeInject(injectOptions);
      }
      for (const key in injectOptions) {
          const opt = injectOptions[key];
          let injected;
          if (isObject(opt)) {
              if ('default' in opt) {
                  injected = inject(opt.from || key, opt.default, true /* treat default function as factory */);
              }
              else {
                  injected = inject(opt.from || key);
              }
          }
          else {
              injected = inject(opt);
          }
          if (isRef(injected)) {
              // TODO remove the check in 3.3
              if (unwrapRef) {
                  Object.defineProperty(ctx, key, {
                      enumerable: true,
                      configurable: true,
                      get: () => injected.value,
                      set: v => (injected.value = v)
                  });
              }
              else {
                  {
                      warn$1(`injected property "${key}" is a ref and will be auto-unwrapped ` +
                          `and no longer needs \`.value\` in the next minor release. ` +
                          `To opt-in to the new behavior now, ` +
                          `set \`app.config.unwrapInjectedRef = true\` (this config is ` +
                          `temporary and will not be needed in the future.)`);
                  }
                  ctx[key] = injected;
              }
          }
          else {
              ctx[key] = injected;
          }
          {
              checkDuplicateProperties("Inject" /* INJECT */, key);
          }
      }
  }
  function callHook(hook, instance, type) {
      callWithAsyncErrorHandling(isArray(hook)
          ? hook.map(h => h.bind(instance.proxy))
          : hook.bind(instance.proxy), instance, type);
  }
  function createWatcher(raw, ctx, publicThis, key) {
      const getter = key.includes('.')
          ? createPathGetter(publicThis, key)
          : () => publicThis[key];
      if (isString(raw)) {
          const handler = ctx[raw];
          if (isFunction(handler)) {
              watch(getter, handler);
          }
          else {
              warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
          }
      }
      else if (isFunction(raw)) {
          watch(getter, raw.bind(publicThis));
      }
      else if (isObject(raw)) {
          if (isArray(raw)) {
              raw.forEach(r => createWatcher(r, ctx, publicThis, key));
          }
          else {
              const handler = isFunction(raw.handler)
                  ? raw.handler.bind(publicThis)
                  : ctx[raw.handler];
              if (isFunction(handler)) {
                  watch(getter, handler, raw);
              }
              else {
                  warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
              }
          }
      }
      else {
          warn$1(`Invalid watch option: "${key}"`, raw);
      }
  }
  /**
   * Resolve merged options and cache it on the component.
   * This is done only once per-component since the merging does not involve
   * instances.
   */
  function resolveMergedOptions(instance) {
      const base = instance.type;
      const { mixins, extends: extendsOptions } = base;
      const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
      const cached = cache.get(base);
      let resolved;
      if (cached) {
          resolved = cached;
      }
      else if (!globalMixins.length && !mixins && !extendsOptions) {
          {
              resolved = base;
          }
      }
      else {
          resolved = {};
          if (globalMixins.length) {
              globalMixins.forEach(m => mergeOptions(resolved, m, optionMergeStrategies, true));
          }
          mergeOptions(resolved, base, optionMergeStrategies);
      }
      cache.set(base, resolved);
      return resolved;
  }
  function mergeOptions(to, from, strats, asMixin = false) {
      const { mixins, extends: extendsOptions } = from;
      if (extendsOptions) {
          mergeOptions(to, extendsOptions, strats, true);
      }
      if (mixins) {
          mixins.forEach((m) => mergeOptions(to, m, strats, true));
      }
      for (const key in from) {
          if (asMixin && key === 'expose') {
              warn$1(`"expose" option is ignored when declared in mixins or extends. ` +
                      `It should only be declared in the base component itself.`);
          }
          else {
              const strat = internalOptionMergeStrats[key] || (strats && strats[key]);
              to[key] = strat ? strat(to[key], from[key]) : from[key];
          }
      }
      return to;
  }
  const internalOptionMergeStrats = {
      data: mergeDataFn,
      props: mergeObjectOptions,
      emits: mergeObjectOptions,
      // objects
      methods: mergeObjectOptions,
      computed: mergeObjectOptions,
      // lifecycle
      beforeCreate: mergeAsArray,
      created: mergeAsArray,
      beforeMount: mergeAsArray,
      mounted: mergeAsArray,
      beforeUpdate: mergeAsArray,
      updated: mergeAsArray,
      beforeDestroy: mergeAsArray,
      beforeUnmount: mergeAsArray,
      destroyed: mergeAsArray,
      unmounted: mergeAsArray,
      activated: mergeAsArray,
      deactivated: mergeAsArray,
      errorCaptured: mergeAsArray,
      serverPrefetch: mergeAsArray,
      // assets
      components: mergeObjectOptions,
      directives: mergeObjectOptions,
      // watch
      watch: mergeWatchOptions,
      // provide / inject
      provide: mergeDataFn,
      inject: mergeInject
  };
  function mergeDataFn(to, from) {
      if (!from) {
          return to;
      }
      if (!to) {
          return from;
      }
      return function mergedDataFn() {
          return (extend)(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
      };
  }
  function mergeInject(to, from) {
      return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
  }
  function normalizeInject(raw) {
      if (isArray(raw)) {
          const res = {};
          for (let i = 0; i < raw.length; i++) {
              res[raw[i]] = raw[i];
          }
          return res;
      }
      return raw;
  }
  function mergeAsArray(to, from) {
      return to ? [...new Set([].concat(to, from))] : from;
  }
  function mergeObjectOptions(to, from) {
      return to ? extend(extend(Object.create(null), to), from) : from;
  }
  function mergeWatchOptions(to, from) {
      if (!to)
          return from;
      if (!from)
          return to;
      const merged = extend(Object.create(null), to);
      for (const key in from) {
          merged[key] = mergeAsArray(to[key], from[key]);
      }
      return merged;
  }

  function initProps(instance, rawProps, isStateful, // result of bitwise flag comparison
  isSSR = false) {
      const props = {};
      const attrs = {};
      def(attrs, InternalObjectKey, 1);
      instance.propsDefaults = Object.create(null);
      setFullProps(instance, rawProps, props, attrs);
      // ensure all declared prop keys are present
      for (const key in instance.propsOptions[0]) {
          if (!(key in props)) {
              props[key] = undefined;
          }
      }
      // validation
      {
          validateProps(rawProps || {}, props, instance);
      }
      if (isStateful) {
          // stateful
          instance.props = isSSR ? props : shallowReactive(props);
      }
      else {
          if (!instance.type.props) {
              // functional w/ optional props, props === attrs
              instance.props = attrs;
          }
          else {
              // functional w/ declared props
              instance.props = props;
          }
      }
      instance.attrs = attrs;
  }
  function updateProps(instance, rawProps, rawPrevProps, optimized) {
      const { props, attrs, vnode: { patchFlag } } = instance;
      const rawCurrentProps = toRaw(props);
      const [options] = instance.propsOptions;
      let hasAttrsChanged = false;
      if (
      // always force full diff in dev
      // - #1942 if hmr is enabled with sfc component
      // - vite#872 non-sfc component used by sfc component
      !((instance.type.__hmrId ||
              (instance.parent && instance.parent.type.__hmrId))) &&
          (optimized || patchFlag > 0) &&
          !(patchFlag & 16 /* FULL_PROPS */)) {
          if (patchFlag & 8 /* PROPS */) {
              // Compiler-generated props & no keys change, just set the updated
              // the props.
              const propsToUpdate = instance.vnode.dynamicProps;
              for (let i = 0; i < propsToUpdate.length; i++) {
                  let key = propsToUpdate[i];
                  // PROPS flag guarantees rawProps to be non-null
                  const value = rawProps[key];
                  if (options) {
                      // attr / props separation was done on init and will be consistent
                      // in this code path, so just check if attrs have it.
                      if (hasOwn(attrs, key)) {
                          if (value !== attrs[key]) {
                              attrs[key] = value;
                              hasAttrsChanged = true;
                          }
                      }
                      else {
                          const camelizedKey = camelize(key);
                          props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false /* isAbsent */);
                      }
                  }
                  else {
                      if (value !== attrs[key]) {
                          attrs[key] = value;
                          hasAttrsChanged = true;
                      }
                  }
              }
          }
      }
      else {
          // full props update.
          if (setFullProps(instance, rawProps, props, attrs)) {
              hasAttrsChanged = true;
          }
          // in case of dynamic props, check if we need to delete keys from
          // the props object
          let kebabKey;
          for (const key in rawCurrentProps) {
              if (!rawProps ||
                  // for camelCase
                  (!hasOwn(rawProps, key) &&
                      // it's possible the original props was passed in as kebab-case
                      // and converted to camelCase (#955)
                      ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey)))) {
                  if (options) {
                      if (rawPrevProps &&
                          // for camelCase
                          (rawPrevProps[key] !== undefined ||
                              // for kebab-case
                              rawPrevProps[kebabKey] !== undefined)) {
                          props[key] = resolvePropValue(options, rawCurrentProps, key, undefined, instance, true /* isAbsent */);
                      }
                  }
                  else {
                      delete props[key];
                  }
              }
          }
          // in the case of functional component w/o props declaration, props and
          // attrs point to the same object so it should already have been updated.
          if (attrs !== rawCurrentProps) {
              for (const key in attrs) {
                  if (!rawProps || !hasOwn(rawProps, key)) {
                      delete attrs[key];
                      hasAttrsChanged = true;
                  }
              }
          }
      }
      // trigger updates for $attrs in case it's used in component slots
      if (hasAttrsChanged) {
          trigger(instance, "set" /* SET */, '$attrs');
      }
      {
          validateProps(rawProps || {}, props, instance);
      }
  }
  function setFullProps(instance, rawProps, props, attrs) {
      const [options, needCastKeys] = instance.propsOptions;
      let hasAttrsChanged = false;
      let rawCastValues;
      if (rawProps) {
          for (let key in rawProps) {
              // key, ref are reserved and never passed down
              if (isReservedProp(key)) {
                  continue;
              }
              const value = rawProps[key];
              // prop option names are camelized during normalization, so to support
              // kebab -> camel conversion here we need to camelize the key.
              let camelKey;
              if (options && hasOwn(options, (camelKey = camelize(key)))) {
                  if (!needCastKeys || !needCastKeys.includes(camelKey)) {
                      props[camelKey] = value;
                  }
                  else {
                      (rawCastValues || (rawCastValues = {}))[camelKey] = value;
                  }
              }
              else if (!isEmitListener(instance.emitsOptions, key)) {
                  if (value !== attrs[key]) {
                      attrs[key] = value;
                      hasAttrsChanged = true;
                  }
              }
          }
      }
      if (needCastKeys) {
          const rawCurrentProps = toRaw(props);
          const castValues = rawCastValues || EMPTY_OBJ;
          for (let i = 0; i < needCastKeys.length; i++) {
              const key = needCastKeys[i];
              props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
          }
      }
      return hasAttrsChanged;
  }
  function resolvePropValue(options, props, key, value, instance, isAbsent) {
      const opt = options[key];
      if (opt != null) {
          const hasDefault = hasOwn(opt, 'default');
          // default values
          if (hasDefault && value === undefined) {
              const defaultValue = opt.default;
              if (opt.type !== Function && isFunction(defaultValue)) {
                  const { propsDefaults } = instance;
                  if (key in propsDefaults) {
                      value = propsDefaults[key];
                  }
                  else {
                      setCurrentInstance(instance);
                      value = propsDefaults[key] = defaultValue.call(null, props);
                      unsetCurrentInstance();
                  }
              }
              else {
                  value = defaultValue;
              }
          }
          // boolean casting
          if (opt[0 /* shouldCast */]) {
              if (isAbsent && !hasDefault) {
                  value = false;
              }
              else if (opt[1 /* shouldCastTrue */] &&
                  (value === '' || value === hyphenate(key))) {
                  value = true;
              }
          }
      }
      return value;
  }
  function normalizePropsOptions(comp, appContext, asMixin = false) {
      const cache = appContext.propsCache;
      const cached = cache.get(comp);
      if (cached) {
          return cached;
      }
      const raw = comp.props;
      const normalized = {};
      const needCastKeys = [];
      // apply mixin/extends props
      let hasExtends = false;
      if (!isFunction(comp)) {
          const extendProps = (raw) => {
              hasExtends = true;
              const [props, keys] = normalizePropsOptions(raw, appContext, true);
              extend(normalized, props);
              if (keys)
                  needCastKeys.push(...keys);
          };
          if (!asMixin && appContext.mixins.length) {
              appContext.mixins.forEach(extendProps);
          }
          if (comp.extends) {
              extendProps(comp.extends);
          }
          if (comp.mixins) {
              comp.mixins.forEach(extendProps);
          }
      }
      if (!raw && !hasExtends) {
          cache.set(comp, EMPTY_ARR);
          return EMPTY_ARR;
      }
      if (isArray(raw)) {
          for (let i = 0; i < raw.length; i++) {
              if (!isString(raw[i])) {
                  warn$1(`props must be strings when using array syntax.`, raw[i]);
              }
              const normalizedKey = camelize(raw[i]);
              if (validatePropName(normalizedKey)) {
                  normalized[normalizedKey] = EMPTY_OBJ;
              }
          }
      }
      else if (raw) {
          if (!isObject(raw)) {
              warn$1(`invalid props options`, raw);
          }
          for (const key in raw) {
              const normalizedKey = camelize(key);
              if (validatePropName(normalizedKey)) {
                  const opt = raw[key];
                  const prop = (normalized[normalizedKey] =
                      isArray(opt) || isFunction(opt) ? { type: opt } : opt);
                  if (prop) {
                      const booleanIndex = getTypeIndex(Boolean, prop.type);
                      const stringIndex = getTypeIndex(String, prop.type);
                      prop[0 /* shouldCast */] = booleanIndex > -1;
                      prop[1 /* shouldCastTrue */] =
                          stringIndex < 0 || booleanIndex < stringIndex;
                      // if the prop needs boolean casting or default value
                      if (booleanIndex > -1 || hasOwn(prop, 'default')) {
                          needCastKeys.push(normalizedKey);
                      }
                  }
              }
          }
      }
      const res = [normalized, needCastKeys];
      cache.set(comp, res);
      return res;
  }
  function validatePropName(key) {
      if (key[0] !== '$') {
          return true;
      }
      else {
          warn$1(`Invalid prop name: "${key}" is a reserved property.`);
      }
      return false;
  }
  // use function string name to check type constructors
  // so that it works across vms / iframes.
  function getType(ctor) {
      const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
      return match ? match[1] : ctor === null ? 'null' : '';
  }
  function isSameType(a, b) {
      return getType(a) === getType(b);
  }
  function getTypeIndex(type, expectedTypes) {
      if (isArray(expectedTypes)) {
          return expectedTypes.findIndex(t => isSameType(t, type));
      }
      else if (isFunction(expectedTypes)) {
          return isSameType(expectedTypes, type) ? 0 : -1;
      }
      return -1;
  }
  /**
   * dev only
   */
  function validateProps(rawProps, props, instance) {
      const resolvedValues = toRaw(props);
      const options = instance.propsOptions[0];
      for (const key in options) {
          let opt = options[key];
          if (opt == null)
              continue;
          validateProp(key, resolvedValues[key], opt, !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
      }
  }
  /**
   * dev only
   */
  function validateProp(name, value, prop, isAbsent) {
      const { type, required, validator } = prop;
      // required!
      if (required && isAbsent) {
          warn$1('Missing required prop: "' + name + '"');
          return;
      }
      // missing but optional
      if (value == null && !prop.required) {
          return;
      }
      // type check
      if (type != null && type !== true) {
          let isValid = false;
          const types = isArray(type) ? type : [type];
          const expectedTypes = [];
          // value is valid as long as one of the specified types match
          for (let i = 0; i < types.length && !isValid; i++) {
              const { valid, expectedType } = assertType(value, types[i]);
              expectedTypes.push(expectedType || '');
              isValid = valid;
          }
          if (!isValid) {
              warn$1(getInvalidTypeMessage(name, value, expectedTypes));
              return;
          }
      }
      // custom validator
      if (validator && !validator(value)) {
          warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
      }
  }
  const isSimpleType = /*#__PURE__*/ makeMap('String,Number,Boolean,Function,Symbol,BigInt');
  /**
   * dev only
   */
  function assertType(value, type) {
      let valid;
      const expectedType = getType(type);
      if (isSimpleType(expectedType)) {
          const t = typeof value;
          valid = t === expectedType.toLowerCase();
          // for primitive wrapper objects
          if (!valid && t === 'object') {
              valid = value instanceof type;
          }
      }
      else if (expectedType === 'Object') {
          valid = isObject(value);
      }
      else if (expectedType === 'Array') {
          valid = isArray(value);
      }
      else if (expectedType === 'null') {
          valid = value === null;
      }
      else {
          valid = value instanceof type;
      }
      return {
          valid,
          expectedType
      };
  }
  /**
   * dev only
   */
  function getInvalidTypeMessage(name, value, expectedTypes) {
      let message = `Invalid prop: type check failed for prop "${name}".` +
          ` Expected ${expectedTypes.map(capitalize).join(' | ')}`;
      const expectedType = expectedTypes[0];
      const receivedType = toRawType(value);
      const expectedValue = styleValue(value, expectedType);
      const receivedValue = styleValue(value, receivedType);
      // check if we need to specify expected value
      if (expectedTypes.length === 1 &&
          isExplicable(expectedType) &&
          !isBoolean(expectedType, receivedType)) {
          message += ` with value ${expectedValue}`;
      }
      message += `, got ${receivedType} `;
      // check if we need to specify received value
      if (isExplicable(receivedType)) {
          message += `with value ${receivedValue}.`;
      }
      return message;
  }
  /**
   * dev only
   */
  function styleValue(value, type) {
      if (type === 'String') {
          return `"${value}"`;
      }
      else if (type === 'Number') {
          return `${Number(value)}`;
      }
      else {
          return `${value}`;
      }
  }
  /**
   * dev only
   */
  function isExplicable(type) {
      const explicitTypes = ['string', 'number', 'boolean'];
      return explicitTypes.some(elem => type.toLowerCase() === elem);
  }
  /**
   * dev only
   */
  function isBoolean(...args) {
      return args.some(elem => elem.toLowerCase() === 'boolean');
  }

  const isInternalKey = (key) => key[0] === '_' || key === '$stable';
  const normalizeSlotValue = (value) => isArray(value)
      ? value.map(normalizeVNode)
      : [normalizeVNode(value)];
  const normalizeSlot = (key, rawSlot, ctx) => {
      const normalized = withCtx((...args) => {
          if (currentInstance) {
              warn$1(`Slot "${key}" invoked outside of the render function: ` +
                  `this will not track dependencies used in the slot. ` +
                  `Invoke the slot function inside the render function instead.`);
          }
          return normalizeSlotValue(rawSlot(...args));
      }, ctx);
      normalized._c = false;
      return normalized;
  };
  const normalizeObjectSlots = (rawSlots, slots, instance) => {
      const ctx = rawSlots._ctx;
      for (const key in rawSlots) {
          if (isInternalKey(key))
              continue;
          const value = rawSlots[key];
          if (isFunction(value)) {
              slots[key] = normalizeSlot(key, value, ctx);
          }
          else if (value != null) {
              {
                  warn$1(`Non-function value encountered for slot "${key}". ` +
                      `Prefer function slots for better performance.`);
              }
              const normalized = normalizeSlotValue(value);
              slots[key] = () => normalized;
          }
      }
  };
  const normalizeVNodeSlots = (instance, children) => {
      if (!isKeepAlive(instance.vnode) &&
          !(false )) {
          warn$1(`Non-function value encountered for default slot. ` +
              `Prefer function slots for better performance.`);
      }
      const normalized = normalizeSlotValue(children);
      instance.slots.default = () => normalized;
  };
  const initSlots = (instance, children) => {
      if (instance.vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
          const type = children._;
          if (type) {
              // users can get the shallow readonly version of the slots object through `this.$slots`,
              // we should avoid the proxy object polluting the slots of the internal instance
              instance.slots = toRaw(children);
              // make compiler marker non-enumerable
              def(children, '_', type);
          }
          else {
              normalizeObjectSlots(children, (instance.slots = {}));
          }
      }
      else {
          instance.slots = {};
          if (children) {
              normalizeVNodeSlots(instance, children);
          }
      }
      def(instance.slots, InternalObjectKey, 1);
  };
  const updateSlots = (instance, children, optimized) => {
      const { vnode, slots } = instance;
      let needDeletionCheck = true;
      let deletionComparisonTarget = EMPTY_OBJ;
      if (vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
          const type = children._;
          if (type) {
              // compiled slots.
              if (isHmrUpdating) {
                  // Parent was HMR updated so slot content may have changed.
                  // force update slots and mark instance for hmr as well
                  extend(slots, children);
              }
              else if (optimized && type === 1 /* STABLE */) {
                  // compiled AND stable.
                  // no need to update, and skip stale slots removal.
                  needDeletionCheck = false;
              }
              else {
                  // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
                  // normalization.
                  extend(slots, children);
                  // #2893
                  // when rendering the optimized slots by manually written render function,
                  // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
                  // i.e. let the `renderSlot` create the bailed Fragment
                  if (!optimized && type === 1 /* STABLE */) {
                      delete slots._;
                  }
              }
          }
          else {
              needDeletionCheck = !children.$stable;
              normalizeObjectSlots(children, slots);
          }
          deletionComparisonTarget = children;
      }
      else if (children) {
          // non slot object children (direct value) passed to a component
          normalizeVNodeSlots(instance, children);
          deletionComparisonTarget = { default: 1 };
      }
      // delete stale slots
      if (needDeletionCheck) {
          for (const key in slots) {
              if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
                  delete slots[key];
              }
          }
      }
  };

  /**
  Runtime helper for applying directives to a vnode. Example usage:

  const comp = resolveComponent('comp')
  const foo = resolveDirective('foo')
  const bar = resolveDirective('bar')

  return withDirectives(h(comp), [
    [foo, this.x],
    [bar, this.y]
  ])
  */
  const isBuiltInDirective = /*#__PURE__*/ makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo');
  function validateDirectiveName(name) {
      if (isBuiltInDirective(name)) {
          warn$1('Do not use built-in directive ids as custom directive id: ' + name);
      }
  }
  /**
   * Adds directives to a VNode.
   */
  function withDirectives(vnode, directives) {
      const internalInstance = currentRenderingInstance;
      if (internalInstance === null) {
          warn$1(`withDirectives can only be used inside render functions.`);
          return vnode;
      }
      const instance = internalInstance.proxy;
      const bindings = vnode.dirs || (vnode.dirs = []);
      for (let i = 0; i < directives.length; i++) {
          let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
          if (isFunction(dir)) {
              dir = {
                  mounted: dir,
                  updated: dir
              };
          }
          if (dir.deep) {
              traverse(value);
          }
          bindings.push({
              dir,
              instance,
              value,
              oldValue: void 0,
              arg,
              modifiers
          });
      }
      return vnode;
  }
  function invokeDirectiveHook(vnode, prevVNode, instance, name) {
      const bindings = vnode.dirs;
      const oldBindings = prevVNode && prevVNode.dirs;
      for (let i = 0; i < bindings.length; i++) {
          const binding = bindings[i];
          if (oldBindings) {
              binding.oldValue = oldBindings[i].value;
          }
          let hook = binding.dir[name];
          if (hook) {
              // disable tracking inside all lifecycle hooks
              // since they can potentially be called inside effects.
              pauseTracking();
              callWithAsyncErrorHandling(hook, instance, 8 /* DIRECTIVE_HOOK */, [
                  vnode.el,
                  binding,
                  vnode,
                  prevVNode
              ]);
              resetTracking();
          }
      }
  }

  function createAppContext() {
      return {
          app: null,
          config: {
              isNativeTag: NO,
              performance: false,
              globalProperties: {},
              optionMergeStrategies: {},
              errorHandler: undefined,
              warnHandler: undefined,
              compilerOptions: {}
          },
          mixins: [],
          components: {},
          directives: {},
          provides: Object.create(null),
          optionsCache: new WeakMap(),
          propsCache: new WeakMap(),
          emitsCache: new WeakMap()
      };
  }
  let uid = 0;
  function createAppAPI(render, hydrate) {
      return function createApp(rootComponent, rootProps = null) {
          if (rootProps != null && !isObject(rootProps)) {
              warn$1(`root props passed to app.mount() must be an object.`);
              rootProps = null;
          }
          const context = createAppContext();
          const installedPlugins = new Set();
          let isMounted = false;
          const app = (context.app = {
              _uid: uid++,
              _component: rootComponent,
              _props: rootProps,
              _container: null,
              _context: context,
              _instance: null,
              version,
              get config() {
                  return context.config;
              },
              set config(v) {
                  {
                      warn$1(`app.config cannot be replaced. Modify individual options instead.`);
                  }
              },
              use(plugin, ...options) {
                  if (installedPlugins.has(plugin)) {
                      warn$1(`Plugin has already been applied to target app.`);
                  }
                  else if (plugin && isFunction(plugin.install)) {
                      installedPlugins.add(plugin);
                      plugin.install(app, ...options);
                  }
                  else if (isFunction(plugin)) {
                      installedPlugins.add(plugin);
                      plugin(app, ...options);
                  }
                  else {
                      warn$1(`A plugin must either be a function or an object with an "install" ` +
                          `function.`);
                  }
                  return app;
              },
              mixin(mixin) {
                  {
                      if (!context.mixins.includes(mixin)) {
                          context.mixins.push(mixin);
                      }
                      else {
                          warn$1('Mixin has already been applied to target app' +
                              (mixin.name ? `: ${mixin.name}` : ''));
                      }
                  }
                  return app;
              },
              component(name, component) {
                  {
                      validateComponentName(name, context.config);
                  }
                  if (!component) {
                      return context.components[name];
                  }
                  if (context.components[name]) {
                      warn$1(`Component "${name}" has already been registered in target app.`);
                  }
                  context.components[name] = component;
                  return app;
              },
              directive(name, directive) {
                  {
                      validateDirectiveName(name);
                  }
                  if (!directive) {
                      return context.directives[name];
                  }
                  if (context.directives[name]) {
                      warn$1(`Directive "${name}" has already been registered in target app.`);
                  }
                  context.directives[name] = directive;
                  return app;
              },
              mount(rootContainer, isHydrate, isSVG) {
                  if (!isMounted) {
                      const vnode = createVNode(rootComponent, rootProps);
                      // store app context on the root VNode.
                      // this will be set on the root instance on initial mount.
                      vnode.appContext = context;
                      // HMR root reload
                      {
                          context.reload = () => {
                              render(cloneVNode(vnode), rootContainer, isSVG);
                          };
                      }
                      if (isHydrate && hydrate) {
                          hydrate(vnode, rootContainer);
                      }
                      else {
                          render(vnode, rootContainer, isSVG);
                      }
                      isMounted = true;
                      app._container = rootContainer;
                      rootContainer.__vue_app__ = app;
                      {
                          app._instance = vnode.component;
                          devtoolsInitApp(app, version);
                      }
                      return getExposeProxy(vnode.component) || vnode.component.proxy;
                  }
                  else {
                      warn$1(`App has already been mounted.\n` +
                          `If you want to remount the same app, move your app creation logic ` +
                          `into a factory function and create fresh app instances for each ` +
                          `mount - e.g. \`const createMyApp = () => createApp(App)\``);
                  }
              },
              unmount() {
                  if (isMounted) {
                      render(null, app._container);
                      {
                          app._instance = null;
                          devtoolsUnmountApp(app);
                      }
                      delete app._container.__vue_app__;
                  }
                  else {
                      warn$1(`Cannot unmount an app that is not mounted.`);
                  }
              },
              provide(key, value) {
                  if (key in context.provides) {
                      warn$1(`App already provides property with key "${String(key)}". ` +
                          `It will be overwritten with the new value.`);
                  }
                  // TypeScript doesn't allow symbols as index type
                  // https://github.com/Microsoft/TypeScript/issues/24587
                  context.provides[key] = value;
                  return app;
              }
          });
          return app;
      };
  }

  let hasMismatch = false;
  const isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject';
  const isComment = (node) => node.nodeType === 8 /* COMMENT */;
  // Note: hydration is DOM-specific
  // But we have to place it in core due to tight coupling with core - splitting
  // it out creates a ton of unnecessary complexity.
  // Hydration also depends on some renderer internal logic which needs to be
  // passed in via arguments.
  function createHydrationFunctions(rendererInternals) {
      const { mt: mountComponent, p: patch, o: { patchProp, nextSibling, parentNode, remove, insert, createComment } } = rendererInternals;
      const hydrate = (vnode, container) => {
          if (!container.hasChildNodes()) {
              warn$1(`Attempting to hydrate existing markup but container is empty. ` +
                      `Performing full mount instead.`);
              patch(null, vnode, container);
              flushPostFlushCbs();
              return;
          }
          hasMismatch = false;
          hydrateNode(container.firstChild, vnode, null, null, null);
          flushPostFlushCbs();
          if (hasMismatch && !false) {
              // this error should show up in production
              console.error(`Hydration completed but contains mismatches.`);
          }
      };
      const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
          const isFragmentStart = isComment(node) && node.data === '[';
          const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
          const { type, ref, shapeFlag } = vnode;
          const domType = node.nodeType;
          vnode.el = node;
          let nextNode = null;
          switch (type) {
              case Text:
                  if (domType !== 3 /* TEXT */) {
                      nextNode = onMismatch();
                  }
                  else {
                      if (node.data !== vnode.children) {
                          hasMismatch = true;
                          warn$1(`Hydration text mismatch:` +
                                  `\n- Client: ${JSON.stringify(node.data)}` +
                                  `\n- Server: ${JSON.stringify(vnode.children)}`);
                          node.data = vnode.children;
                      }
                      nextNode = nextSibling(node);
                  }
                  break;
              case Comment:
                  if (domType !== 8 /* COMMENT */ || isFragmentStart) {
                      nextNode = onMismatch();
                  }
                  else {
                      nextNode = nextSibling(node);
                  }
                  break;
              case Static:
                  if (domType !== 1 /* ELEMENT */) {
                      nextNode = onMismatch();
                  }
                  else {
                      // determine anchor, adopt content
                      nextNode = node;
                      // if the static vnode has its content stripped during build,
                      // adopt it from the server-rendered HTML.
                      const needToAdoptContent = !vnode.children.length;
                      for (let i = 0; i < vnode.staticCount; i++) {
                          if (needToAdoptContent)
                              vnode.children += nextNode.outerHTML;
                          if (i === vnode.staticCount - 1) {
                              vnode.anchor = nextNode;
                          }
                          nextNode = nextSibling(nextNode);
                      }
                      return nextNode;
                  }
                  break;
              case Fragment:
                  if (!isFragmentStart) {
                      nextNode = onMismatch();
                  }
                  else {
                      nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                  }
                  break;
              default:
                  if (shapeFlag & 1 /* ELEMENT */) {
                      if (domType !== 1 /* ELEMENT */ ||
                          vnode.type.toLowerCase() !==
                              node.tagName.toLowerCase()) {
                          nextNode = onMismatch();
                      }
                      else {
                          nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                      }
                  }
                  else if (shapeFlag & 6 /* COMPONENT */) {
                      // when setting up the render effect, if the initial vnode already
                      // has .el set, the component will perform hydration instead of mount
                      // on its sub-tree.
                      vnode.slotScopeIds = slotScopeIds;
                      const container = parentNode(node);
                      mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
                      // component may be async, so in the case of fragments we cannot rely
                      // on component's rendered output to determine the end of the fragment
                      // instead, we do a lookahead to find the end anchor node.
                      nextNode = isFragmentStart
                          ? locateClosingAsyncAnchor(node)
                          : nextSibling(node);
                      // #3787
                      // if component is async, it may get moved / unmounted before its
                      // inner component is loaded, so we need to give it a placeholder
                      // vnode that matches its adopted DOM.
                      if (isAsyncWrapper(vnode)) {
                          let subTree;
                          if (isFragmentStart) {
                              subTree = createVNode(Fragment);
                              subTree.anchor = nextNode
                                  ? nextNode.previousSibling
                                  : container.lastChild;
                          }
                          else {
                              subTree =
                                  node.nodeType === 3 ? createTextVNode('') : createVNode('div');
                          }
                          subTree.el = node;
                          vnode.component.subTree = subTree;
                      }
                  }
                  else if (shapeFlag & 64 /* TELEPORT */) {
                      if (domType !== 8 /* COMMENT */) {
                          nextNode = onMismatch();
                      }
                      else {
                          nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
                      }
                  }
                  else if (shapeFlag & 128 /* SUSPENSE */) {
                      nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
                  }
                  else {
                      warn$1('Invalid HostVNode type:', type, `(${typeof type})`);
                  }
          }
          if (ref != null) {
              setRef(ref, null, parentSuspense, vnode);
          }
          return nextNode;
      };
      const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
          optimized = optimized || !!vnode.dynamicChildren;
          const { type, props, patchFlag, shapeFlag, dirs } = vnode;
          // #4006 for form elements with non-string v-model value bindings
          // e.g. <option :value="obj">, <input type="checkbox" :true-value="1">
          const forcePatchValue = (type === 'input' && dirs) || type === 'option';
          // skip props & children if this is hoisted static nodes
          if (forcePatchValue || patchFlag !== -1 /* HOISTED */) {
              if (dirs) {
                  invokeDirectiveHook(vnode, null, parentComponent, 'created');
              }
              // props
              if (props) {
                  if (forcePatchValue ||
                      !optimized ||
                      patchFlag & (16 /* FULL_PROPS */ | 32 /* HYDRATE_EVENTS */)) {
                      for (const key in props) {
                          if ((forcePatchValue && key.endsWith('value')) ||
                              (isOn(key) && !isReservedProp(key))) {
                              patchProp(el, key, null, props[key], false, undefined, parentComponent);
                          }
                      }
                  }
                  else if (props.onClick) {
                      // Fast path for click listeners (which is most often) to avoid
                      // iterating through props.
                      patchProp(el, 'onClick', null, props.onClick, false, undefined, parentComponent);
                  }
              }
              // vnode / directive hooks
              let vnodeHooks;
              if ((vnodeHooks = props && props.onVnodeBeforeMount)) {
                  invokeVNodeHook(vnodeHooks, parentComponent, vnode);
              }
              if (dirs) {
                  invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
              }
              if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
                  queueEffectWithSuspense(() => {
                      vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                      dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
                  }, parentSuspense);
              }
              // children
              if (shapeFlag & 16 /* ARRAY_CHILDREN */ &&
                  // skip if element has innerHTML / textContent
                  !(props && (props.innerHTML || props.textContent))) {
                  let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
                  let hasWarned = false;
                  while (next) {
                      hasMismatch = true;
                      if (!hasWarned) {
                          warn$1(`Hydration children mismatch in <${vnode.type}>: ` +
                              `server rendered element contains more child nodes than client vdom.`);
                          hasWarned = true;
                      }
                      // The SSRed DOM contains more nodes than it should. Remove them.
                      const cur = next;
                      next = next.nextSibling;
                      remove(cur);
                  }
              }
              else if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                  if (el.textContent !== vnode.children) {
                      hasMismatch = true;
                      warn$1(`Hydration text content mismatch in <${vnode.type}>:\n` +
                              `- Client: ${el.textContent}\n` +
                              `- Server: ${vnode.children}`);
                      el.textContent = vnode.children;
                  }
              }
          }
          return el.nextSibling;
      };
      const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
          optimized = optimized || !!parentVNode.dynamicChildren;
          const children = parentVNode.children;
          const l = children.length;
          let hasWarned = false;
          for (let i = 0; i < l; i++) {
              const vnode = optimized
                  ? children[i]
                  : (children[i] = normalizeVNode(children[i]));
              if (node) {
                  node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
              }
              else if (vnode.type === Text && !vnode.children) {
                  continue;
              }
              else {
                  hasMismatch = true;
                  if (!hasWarned) {
                      warn$1(`Hydration children mismatch in <${container.tagName.toLowerCase()}>: ` +
                          `server rendered element contains fewer child nodes than client vdom.`);
                      hasWarned = true;
                  }
                  // the SSRed DOM didn't contain enough nodes. Mount the missing ones.
                  patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
              }
          }
          return node;
      };
      const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
          const { slotScopeIds: fragmentSlotScopeIds } = vnode;
          if (fragmentSlotScopeIds) {
              slotScopeIds = slotScopeIds
                  ? slotScopeIds.concat(fragmentSlotScopeIds)
                  : fragmentSlotScopeIds;
          }
          const container = parentNode(node);
          const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
          if (next && isComment(next) && next.data === ']') {
              return nextSibling((vnode.anchor = next));
          }
          else {
              // fragment didn't hydrate successfully, since we didn't get a end anchor
              // back. This should have led to node/children mismatch warnings.
              hasMismatch = true;
              // since the anchor is missing, we need to create one and insert it
              insert((vnode.anchor = createComment(`]`)), container, next);
              return next;
          }
      };
      const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
          hasMismatch = true;
          warn$1(`Hydration node mismatch:\n- Client vnode:`, vnode.type, `\n- Server rendered DOM:`, node, node.nodeType === 3 /* TEXT */
                  ? `(text)`
                  : isComment(node) && node.data === '['
                      ? `(start of fragment)`
                      : ``);
          vnode.el = null;
          if (isFragment) {
              // remove excessive fragment nodes
              const end = locateClosingAsyncAnchor(node);
              while (true) {
                  const next = nextSibling(node);
                  if (next && next !== end) {
                      remove(next);
                  }
                  else {
                      break;
                  }
              }
          }
          const next = nextSibling(node);
          const container = parentNode(node);
          remove(node);
          patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
          return next;
      };
      const locateClosingAsyncAnchor = (node) => {
          let match = 0;
          while (node) {
              node = nextSibling(node);
              if (node && isComment(node)) {
                  if (node.data === '[')
                      match++;
                  if (node.data === ']') {
                      if (match === 0) {
                          return nextSibling(node);
                      }
                      else {
                          match--;
                      }
                  }
              }
          }
          return node;
      };
      return [hydrate, hydrateNode];
  }

  let supported;
  let perf;
  function startMeasure(instance, type) {
      if (instance.appContext.config.performance && isSupported()) {
          perf.mark(`vue-${type}-${instance.uid}`);
      }
      {
          devtoolsPerfStart(instance, type, supported ? perf.now() : Date.now());
      }
  }
  function endMeasure(instance, type) {
      if (instance.appContext.config.performance && isSupported()) {
          const startTag = `vue-${type}-${instance.uid}`;
          const endTag = startTag + `:end`;
          perf.mark(endTag);
          perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
          perf.clearMarks(startTag);
          perf.clearMarks(endTag);
      }
      {
          devtoolsPerfEnd(instance, type, supported ? perf.now() : Date.now());
      }
  }
  function isSupported() {
      if (supported !== undefined) {
          return supported;
      }
      /* eslint-disable no-restricted-globals */
      if (typeof window !== 'undefined' && window.performance) {
          supported = true;
          perf = window.performance;
      }
      else {
          supported = false;
      }
      /* eslint-enable no-restricted-globals */
      return supported;
  }

  const queuePostRenderEffect = queueEffectWithSuspense
      ;
  /**
   * The createRenderer function accepts two generic arguments:
   * HostNode and HostElement, corresponding to Node and Element types in the
   * host environment. For example, for runtime-dom, HostNode would be the DOM
   * `Node` interface and HostElement would be the DOM `Element` interface.
   *
   * Custom renderers can pass in the platform specific types like this:
   *
   * ``` js
   * const { render, createApp } = createRenderer<Node, Element>({
   *   patchProp,
   *   ...nodeOps
   * })
   * ```
   */
  function createRenderer(options) {
      return baseCreateRenderer(options);
  }
  // Separate API for creating hydration-enabled renderer.
  // Hydration logic is only used when calling this function, making it
  // tree-shakable.
  function createHydrationRenderer(options) {
      return baseCreateRenderer(options, createHydrationFunctions);
  }
  // implementation
  function baseCreateRenderer(options, createHydrationFns) {
      const target = getGlobalThis();
      target.__VUE__ = true;
      {
          setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
      }
      const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
      // Note: functions inside this closure should use `const xxx = () => {}`
      // style in order to prevent being inlined by minifiers.
      const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
          if (n1 === n2) {
              return;
          }
          // patching & not same type, unmount old tree
          if (n1 && !isSameVNodeType(n1, n2)) {
              anchor = getNextHostNode(n1);
              unmount(n1, parentComponent, parentSuspense, true);
              n1 = null;
          }
          if (n2.patchFlag === -2 /* BAIL */) {
              optimized = false;
              n2.dynamicChildren = null;
          }
          const { type, ref, shapeFlag } = n2;
          switch (type) {
              case Text:
                  processText(n1, n2, container, anchor);
                  break;
              case Comment:
                  processCommentNode(n1, n2, container, anchor);
                  break;
              case Static:
                  if (n1 == null) {
                      mountStaticNode(n2, container, anchor, isSVG);
                  }
                  else {
                      patchStaticNode(n1, n2, container, isSVG);
                  }
                  break;
              case Fragment:
                  processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                  break;
              default:
                  if (shapeFlag & 1 /* ELEMENT */) {
                      processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                  }
                  else if (shapeFlag & 6 /* COMPONENT */) {
                      processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                  }
                  else if (shapeFlag & 64 /* TELEPORT */) {
                      type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                  }
                  else if (shapeFlag & 128 /* SUSPENSE */) {
                      type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                  }
                  else {
                      warn$1('Invalid VNode type:', type, `(${typeof type})`);
                  }
          }
          // set ref
          if (ref != null && parentComponent) {
              setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
          }
      };
      const processText = (n1, n2, container, anchor) => {
          if (n1 == null) {
              hostInsert((n2.el = hostCreateText(n2.children)), container, anchor);
          }
          else {
              const el = (n2.el = n1.el);
              if (n2.children !== n1.children) {
                  hostSetText(el, n2.children);
              }
          }
      };
      const processCommentNode = (n1, n2, container, anchor) => {
          if (n1 == null) {
              hostInsert((n2.el = hostCreateComment(n2.children || '')), container, anchor);
          }
          else {
              // there's no support for dynamic comments
              n2.el = n1.el;
          }
      };
      const mountStaticNode = (n2, container, anchor, isSVG) => {
          [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
      };
      /**
       * Dev / HMR only
       */
      const patchStaticNode = (n1, n2, container, isSVG) => {
          // static nodes are only patched during dev for HMR
          if (n2.children !== n1.children) {
              const anchor = hostNextSibling(n1.anchor);
              // remove existing
              removeStaticNode(n1);
              [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
          }
          else {
              n2.el = n1.el;
              n2.anchor = n1.anchor;
          }
      };
      const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
          let next;
          while (el && el !== anchor) {
              next = hostNextSibling(el);
              hostInsert(el, container, nextSibling);
              el = next;
          }
          hostInsert(anchor, container, nextSibling);
      };
      const removeStaticNode = ({ el, anchor }) => {
          let next;
          while (el && el !== anchor) {
              next = hostNextSibling(el);
              hostRemove(el);
              el = next;
          }
          hostRemove(anchor);
      };
      const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          isSVG = isSVG || n2.type === 'svg';
          if (n1 == null) {
              mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
          else {
              patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
      };
      const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          let el;
          let vnodeHook;
          const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
          {
              el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
              // mount children first, since some props may rely on child content
              // being already rendered, e.g. `<select value>`
              if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                  hostSetElementText(el, vnode.children);
              }
              else if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                  mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', slotScopeIds, optimized);
              }
              if (dirs) {
                  invokeDirectiveHook(vnode, null, parentComponent, 'created');
              }
              // props
              if (props) {
                  for (const key in props) {
                      if (key !== 'value' && !isReservedProp(key)) {
                          hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                      }
                  }
                  /**
                   * Special case for setting value on DOM elements:
                   * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
                   * - it needs to be forced (#1471)
                   * #2353 proposes adding another renderer option to configure this, but
                   * the properties affects are so finite it is worth special casing it
                   * here to reduce the complexity. (Special casing it also should not
                   * affect non-DOM renderers)
                   */
                  if ('value' in props) {
                      hostPatchProp(el, 'value', null, props.value);
                  }
                  if ((vnodeHook = props.onVnodeBeforeMount)) {
                      invokeVNodeHook(vnodeHook, parentComponent, vnode);
                  }
              }
              // scopeId
              setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
          }
          {
              Object.defineProperty(el, '__vnode', {
                  value: vnode,
                  enumerable: false
              });
              Object.defineProperty(el, '__vueParentComponent', {
                  value: parentComponent,
                  enumerable: false
              });
          }
          if (dirs) {
              invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
          }
          // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
          // #1689 For inside suspense + suspense resolved case, just call it
          const needCallTransitionHooks = (!parentSuspense || (parentSuspense && !parentSuspense.pendingBranch)) &&
              transition &&
              !transition.persisted;
          if (needCallTransitionHooks) {
              transition.beforeEnter(el);
          }
          hostInsert(el, container, anchor);
          if ((vnodeHook = props && props.onVnodeMounted) ||
              needCallTransitionHooks ||
              dirs) {
              queuePostRenderEffect(() => {
                  vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                  needCallTransitionHooks && transition.enter(el);
                  dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
              }, parentSuspense);
          }
      };
      const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
          if (scopeId) {
              hostSetScopeId(el, scopeId);
          }
          if (slotScopeIds) {
              for (let i = 0; i < slotScopeIds.length; i++) {
                  hostSetScopeId(el, slotScopeIds[i]);
              }
          }
          if (parentComponent) {
              let subTree = parentComponent.subTree;
              if (subTree.patchFlag > 0 &&
                  subTree.patchFlag & 2048 /* DEV_ROOT_FRAGMENT */) {
                  subTree =
                      filterSingleRoot(subTree.children) || subTree;
              }
              if (vnode === subTree) {
                  const parentVNode = parentComponent.vnode;
                  setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
              }
          }
      };
      const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
          for (let i = start; i < children.length; i++) {
              const child = (children[i] = optimized
                  ? cloneIfMounted(children[i])
                  : normalizeVNode(children[i]));
              patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
      };
      const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          const el = (n2.el = n1.el);
          let { patchFlag, dynamicChildren, dirs } = n2;
          // #1426 take the old vnode's patch flag into account since user may clone a
          // compiler-generated vnode, which de-opts to FULL_PROPS
          patchFlag |= n1.patchFlag & 16 /* FULL_PROPS */;
          const oldProps = n1.props || EMPTY_OBJ;
          const newProps = n2.props || EMPTY_OBJ;
          let vnodeHook;
          if ((vnodeHook = newProps.onVnodeBeforeUpdate)) {
              invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
          }
          if (dirs) {
              invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
          }
          if (isHmrUpdating) {
              // HMR updated, force full diff
              patchFlag = 0;
              optimized = false;
              dynamicChildren = null;
          }
          const areChildrenSVG = isSVG && n2.type !== 'foreignObject';
          if (dynamicChildren) {
              patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
              if (parentComponent && parentComponent.type.__hmrId) {
                  traverseStaticChildren(n1, n2);
              }
          }
          else if (!optimized) {
              // full diff
              patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
          }
          if (patchFlag > 0) {
              // the presence of a patchFlag means this element's render code was
              // generated by the compiler and can take the fast path.
              // in this path old node and new node are guaranteed to have the same shape
              // (i.e. at the exact same position in the source template)
              if (patchFlag & 16 /* FULL_PROPS */) {
                  // element props contain dynamic keys, full diff needed
                  patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
              }
              else {
                  // class
                  // this flag is matched when the element has dynamic class bindings.
                  if (patchFlag & 2 /* CLASS */) {
                      if (oldProps.class !== newProps.class) {
                          hostPatchProp(el, 'class', null, newProps.class, isSVG);
                      }
                  }
                  // style
                  // this flag is matched when the element has dynamic style bindings
                  if (patchFlag & 4 /* STYLE */) {
                      hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
                  }
                  // props
                  // This flag is matched when the element has dynamic prop/attr bindings
                  // other than class and style. The keys of dynamic prop/attrs are saved for
                  // faster iteration.
                  // Note dynamic keys like :[foo]="bar" will cause this optimization to
                  // bail out and go through a full diff because we need to unset the old key
                  if (patchFlag & 8 /* PROPS */) {
                      // if the flag is present then dynamicProps must be non-null
                      const propsToUpdate = n2.dynamicProps;
                      for (let i = 0; i < propsToUpdate.length; i++) {
                          const key = propsToUpdate[i];
                          const prev = oldProps[key];
                          const next = newProps[key];
                          // #1471 force patch value
                          if (next !== prev || key === 'value') {
                              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                          }
                      }
                  }
              }
              // text
              // This flag is matched when the element has only dynamic text children.
              if (patchFlag & 1 /* TEXT */) {
                  if (n1.children !== n2.children) {
                      hostSetElementText(el, n2.children);
                  }
              }
          }
          else if (!optimized && dynamicChildren == null) {
              // unoptimized, full diff
              patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
          }
          if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
              queuePostRenderEffect(() => {
                  vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
                  dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
              }, parentSuspense);
          }
      };
      // The fast path for blocks.
      const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
          for (let i = 0; i < newChildren.length; i++) {
              const oldVNode = oldChildren[i];
              const newVNode = newChildren[i];
              // Determine the container (parent element) for the patch.
              const container = 
              // oldVNode may be an errored async setup() component inside Suspense
              // which will not have a mounted element
              oldVNode.el &&
                  // - In the case of a Fragment, we need to provide the actual parent
                  // of the Fragment itself so it can move its children.
                  (oldVNode.type === Fragment ||
                      // - In the case of different nodes, there is going to be a replacement
                      // which also requires the correct parent container
                      !isSameVNodeType(oldVNode, newVNode) ||
                      // - In the case of a component, it could contain anything.
                      oldVNode.shapeFlag & (6 /* COMPONENT */ | 64 /* TELEPORT */))
                  ? hostParentNode(oldVNode.el)
                  : // In other cases, the parent container is not actually used so we
                      // just pass the block element here to avoid a DOM parentNode call.
                      fallbackContainer;
              patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
          }
      };
      const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
          if (oldProps !== newProps) {
              for (const key in newProps) {
                  // empty string is not valid prop
                  if (isReservedProp(key))
                      continue;
                  const next = newProps[key];
                  const prev = oldProps[key];
                  // defer patching value
                  if (next !== prev && key !== 'value') {
                      hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                  }
              }
              if (oldProps !== EMPTY_OBJ) {
                  for (const key in oldProps) {
                      if (!isReservedProp(key) && !(key in newProps)) {
                          hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                      }
                  }
              }
              if ('value' in newProps) {
                  hostPatchProp(el, 'value', oldProps.value, newProps.value);
              }
          }
      };
      const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          const fragmentStartAnchor = (n2.el = n1 ? n1.el : hostCreateText(''));
          const fragmentEndAnchor = (n2.anchor = n1 ? n1.anchor : hostCreateText(''));
          let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
          if (isHmrUpdating) {
              // HMR updated, force full diff
              patchFlag = 0;
              optimized = false;
              dynamicChildren = null;
          }
          // check if this is a slot fragment with :slotted scope ids
          if (fragmentSlotScopeIds) {
              slotScopeIds = slotScopeIds
                  ? slotScopeIds.concat(fragmentSlotScopeIds)
                  : fragmentSlotScopeIds;
          }
          if (n1 == null) {
              hostInsert(fragmentStartAnchor, container, anchor);
              hostInsert(fragmentEndAnchor, container, anchor);
              // a fragment can only have array children
              // since they are either generated by the compiler, or implicitly created
              // from arrays.
              mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
          else {
              if (patchFlag > 0 &&
                  patchFlag & 64 /* STABLE_FRAGMENT */ &&
                  dynamicChildren &&
                  // #2715 the previous fragment could've been a BAILed one as a result
                  // of renderSlot() with no valid children
                  n1.dynamicChildren) {
                  // a stable fragment (template root or <template v-for>) doesn't need to
                  // patch children order, but it may contain dynamicChildren.
                  patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
                  if (parentComponent && parentComponent.type.__hmrId) {
                      traverseStaticChildren(n1, n2);
                  }
                  else if (
                  // #2080 if the stable fragment has a key, it's a <template v-for> that may
                  //  get moved around. Make sure all root level vnodes inherit el.
                  // #2134 or if it's a component root, it may also get moved around
                  // as the component is being moved.
                  n2.key != null ||
                      (parentComponent && n2 === parentComponent.subTree)) {
                      traverseStaticChildren(n1, n2, true /* shallow */);
                  }
              }
              else {
                  // keyed / unkeyed, or manual fragments.
                  // for keyed & unkeyed, since they are compiler generated from v-for,
                  // each child is guaranteed to be a block so the fragment will never
                  // have dynamicChildren.
                  patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              }
          }
      };
      const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          n2.slotScopeIds = slotScopeIds;
          if (n1 == null) {
              if (n2.shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
                  parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
              }
              else {
                  mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
              }
          }
          else {
              updateComponent(n1, n2, optimized);
          }
      };
      const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
          const instance = (initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense));
          if (instance.type.__hmrId) {
              registerHMR(instance);
          }
          {
              pushWarningContext(initialVNode);
              startMeasure(instance, `mount`);
          }
          // inject renderer internals for keepAlive
          if (isKeepAlive(initialVNode)) {
              instance.ctx.renderer = internals;
          }
          // resolve props and slots for setup context
          {
              {
                  startMeasure(instance, `init`);
              }
              setupComponent(instance);
              {
                  endMeasure(instance, `init`);
              }
          }
          // setup() is async. This component relies on async logic to be resolved
          // before proceeding
          if (instance.asyncDep) {
              parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
              // Give it a placeholder if this is not hydration
              // TODO handle self-defined fallback
              if (!initialVNode.el) {
                  const placeholder = (instance.subTree = createVNode(Comment));
                  processCommentNode(null, placeholder, container, anchor);
              }
              return;
          }
          setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
          {
              popWarningContext();
              endMeasure(instance, `mount`);
          }
      };
      const updateComponent = (n1, n2, optimized) => {
          const instance = (n2.component = n1.component);
          if (shouldUpdateComponent(n1, n2, optimized)) {
              if (instance.asyncDep &&
                  !instance.asyncResolved) {
                  // async & still pending - just update props and slots
                  // since the component's reactive effect for render isn't set-up yet
                  {
                      pushWarningContext(n2);
                  }
                  updateComponentPreRender(instance, n2, optimized);
                  {
                      popWarningContext();
                  }
                  return;
              }
              else {
                  // normal update
                  instance.next = n2;
                  // in case the child component is also queued, remove it to avoid
                  // double updating the same child component in the same flush.
                  invalidateJob(instance.update);
                  // instance.update is the reactive effect.
                  instance.update();
              }
          }
          else {
              // no update needed. just copy over properties
              n2.component = n1.component;
              n2.el = n1.el;
              instance.vnode = n2;
          }
      };
      const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
          const componentUpdateFn = () => {
              if (!instance.isMounted) {
                  let vnodeHook;
                  const { el, props } = initialVNode;
                  const { bm, m, parent } = instance;
                  const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                  effect.allowRecurse = false;
                  // beforeMount hook
                  if (bm) {
                      invokeArrayFns(bm);
                  }
                  // onVnodeBeforeMount
                  if (!isAsyncWrapperVNode &&
                      (vnodeHook = props && props.onVnodeBeforeMount)) {
                      invokeVNodeHook(vnodeHook, parent, initialVNode);
                  }
                  effect.allowRecurse = true;
                  if (el && hydrateNode) {
                      // vnode has adopted host node - perform hydration instead of mount.
                      const hydrateSubTree = () => {
                          {
                              startMeasure(instance, `render`);
                          }
                          instance.subTree = renderComponentRoot(instance);
                          {
                              endMeasure(instance, `render`);
                          }
                          {
                              startMeasure(instance, `hydrate`);
                          }
                          hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                          {
                              endMeasure(instance, `hydrate`);
                          }
                      };
                      if (isAsyncWrapperVNode) {
                          initialVNode.type.__asyncLoader().then(
                          // note: we are moving the render call into an async callback,
                          // which means it won't track dependencies - but it's ok because
                          // a server-rendered async wrapper is already in resolved state
                          // and it will never need to change.
                          () => !instance.isUnmounted && hydrateSubTree());
                      }
                      else {
                          hydrateSubTree();
                      }
                  }
                  else {
                      {
                          startMeasure(instance, `render`);
                      }
                      const subTree = (instance.subTree = renderComponentRoot(instance));
                      {
                          endMeasure(instance, `render`);
                      }
                      {
                          startMeasure(instance, `patch`);
                      }
                      patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                      {
                          endMeasure(instance, `patch`);
                      }
                      initialVNode.el = subTree.el;
                  }
                  // mounted hook
                  if (m) {
                      queuePostRenderEffect(m, parentSuspense);
                  }
                  // onVnodeMounted
                  if (!isAsyncWrapperVNode &&
                      (vnodeHook = props && props.onVnodeMounted)) {
                      const scopedInitialVNode = initialVNode;
                      queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
                  }
                  // activated hook for keep-alive roots.
                  // #1742 activated hook must be accessed after first render
                  // since the hook may be injected by a child keep-alive
                  if (initialVNode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
                      instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                  }
                  instance.isMounted = true;
                  {
                      devtoolsComponentAdded(instance);
                  }
                  // #2458: deference mount-only object parameters to prevent memleaks
                  initialVNode = container = anchor = null;
              }
              else {
                  // updateComponent
                  // This is triggered by mutation of component's own state (next: null)
                  // OR parent calling processComponent (next: VNode)
                  let { next, bu, u, parent, vnode } = instance;
                  let originNext = next;
                  let vnodeHook;
                  {
                      pushWarningContext(next || instance.vnode);
                  }
                  // Disallow component effect recursion during pre-lifecycle hooks.
                  effect.allowRecurse = false;
                  if (next) {
                      next.el = vnode.el;
                      updateComponentPreRender(instance, next, optimized);
                  }
                  else {
                      next = vnode;
                  }
                  // beforeUpdate hook
                  if (bu) {
                      invokeArrayFns(bu);
                  }
                  // onVnodeBeforeUpdate
                  if ((vnodeHook = next.props && next.props.onVnodeBeforeUpdate)) {
                      invokeVNodeHook(vnodeHook, parent, next, vnode);
                  }
                  effect.allowRecurse = true;
                  // render
                  {
                      startMeasure(instance, `render`);
                  }
                  const nextTree = renderComponentRoot(instance);
                  {
                      endMeasure(instance, `render`);
                  }
                  const prevTree = instance.subTree;
                  instance.subTree = nextTree;
                  {
                      startMeasure(instance, `patch`);
                  }
                  patch(prevTree, nextTree, 
                  // parent may have changed if it's in a teleport
                  hostParentNode(prevTree.el), 
                  // anchor may have changed if it's in a fragment
                  getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                  {
                      endMeasure(instance, `patch`);
                  }
                  next.el = nextTree.el;
                  if (originNext === null) {
                      // self-triggered update. In case of HOC, update parent component
                      // vnode el. HOC is indicated by parent instance's subTree pointing
                      // to child component's vnode
                      updateHOCHostEl(instance, nextTree.el);
                  }
                  // updated hook
                  if (u) {
                      queuePostRenderEffect(u, parentSuspense);
                  }
                  // onVnodeUpdated
                  if ((vnodeHook = next.props && next.props.onVnodeUpdated)) {
                      queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
                  }
                  {
                      devtoolsComponentUpdated(instance);
                  }
                  {
                      popWarningContext();
                  }
              }
          };
          // create reactive effect for rendering
          const effect = new ReactiveEffect(componentUpdateFn, () => queueJob(instance.update), instance.scope // track it in component's effect scope
          );
          const update = (instance.update = effect.run.bind(effect));
          update.id = instance.uid;
          // allowRecurse
          // #1801, #2043 component render effects should allow recursive updates
          effect.allowRecurse = update.allowRecurse = true;
          {
              effect.onTrack = instance.rtc
                  ? e => invokeArrayFns(instance.rtc, e)
                  : void 0;
              effect.onTrigger = instance.rtg
                  ? e => invokeArrayFns(instance.rtg, e)
                  : void 0;
              // @ts-ignore (for scheduler)
              update.ownerInstance = instance;
          }
          update();
      };
      const updateComponentPreRender = (instance, nextVNode, optimized) => {
          nextVNode.component = instance;
          const prevProps = instance.vnode.props;
          instance.vnode = nextVNode;
          instance.next = null;
          updateProps(instance, nextVNode.props, prevProps, optimized);
          updateSlots(instance, nextVNode.children, optimized);
          pauseTracking();
          // props update may have triggered pre-flush watchers.
          // flush them before the render update.
          flushPreFlushCbs(undefined, instance.update);
          resetTracking();
      };
      const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
          const c1 = n1 && n1.children;
          const prevShapeFlag = n1 ? n1.shapeFlag : 0;
          const c2 = n2.children;
          const { patchFlag, shapeFlag } = n2;
          // fast path
          if (patchFlag > 0) {
              if (patchFlag & 128 /* KEYED_FRAGMENT */) {
                  // this could be either fully-keyed or mixed (some keyed some not)
                  // presence of patchFlag means children are guaranteed to be arrays
                  patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                  return;
              }
              else if (patchFlag & 256 /* UNKEYED_FRAGMENT */) {
                  // unkeyed
                  patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                  return;
              }
          }
          // children has 3 possibilities: text, array or no children.
          if (shapeFlag & 8 /* TEXT_CHILDREN */) {
              // text children fast path
              if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                  unmountChildren(c1, parentComponent, parentSuspense);
              }
              if (c2 !== c1) {
                  hostSetElementText(container, c2);
              }
          }
          else {
              if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                  // prev children was array
                  if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                      // two arrays, cannot assume anything, do full diff
                      patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                  }
                  else {
                      // no new children, just unmount old
                      unmountChildren(c1, parentComponent, parentSuspense, true);
                  }
              }
              else {
                  // prev children was text OR null
                  // new children is array OR null
                  if (prevShapeFlag & 8 /* TEXT_CHILDREN */) {
                      hostSetElementText(container, '');
                  }
                  // mount new if array
                  if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                  }
              }
          }
      };
      const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          c1 = c1 || EMPTY_ARR;
          c2 = c2 || EMPTY_ARR;
          const oldLength = c1.length;
          const newLength = c2.length;
          const commonLength = Math.min(oldLength, newLength);
          let i;
          for (i = 0; i < commonLength; i++) {
              const nextChild = (c2[i] = optimized
                  ? cloneIfMounted(c2[i])
                  : normalizeVNode(c2[i]));
              patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
          if (oldLength > newLength) {
              // remove old
              unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
          }
          else {
              // mount new
              mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
          }
      };
      // can be all-keyed or mixed
      const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          let i = 0;
          const l2 = c2.length;
          let e1 = c1.length - 1; // prev ending index
          let e2 = l2 - 1; // next ending index
          // 1. sync from start
          // (a b) c
          // (a b) d e
          while (i <= e1 && i <= e2) {
              const n1 = c1[i];
              const n2 = (c2[i] = optimized
                  ? cloneIfMounted(c2[i])
                  : normalizeVNode(c2[i]));
              if (isSameVNodeType(n1, n2)) {
                  patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              }
              else {
                  break;
              }
              i++;
          }
          // 2. sync from end
          // a (b c)
          // d e (b c)
          while (i <= e1 && i <= e2) {
              const n1 = c1[e1];
              const n2 = (c2[e2] = optimized
                  ? cloneIfMounted(c2[e2])
                  : normalizeVNode(c2[e2]));
              if (isSameVNodeType(n1, n2)) {
                  patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              }
              else {
                  break;
              }
              e1--;
              e2--;
          }
          // 3. common sequence + mount
          // (a b)
          // (a b) c
          // i = 2, e1 = 1, e2 = 2
          // (a b)
          // c (a b)
          // i = 0, e1 = -1, e2 = 0
          if (i > e1) {
              if (i <= e2) {
                  const nextPos = e2 + 1;
                  const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                  while (i <= e2) {
                      patch(null, (c2[i] = optimized
                          ? cloneIfMounted(c2[i])
                          : normalizeVNode(c2[i])), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                      i++;
                  }
              }
          }
          // 4. common sequence + unmount
          // (a b) c
          // (a b)
          // i = 2, e1 = 2, e2 = 1
          // a (b c)
          // (b c)
          // i = 0, e1 = 0, e2 = -1
          else if (i > e2) {
              while (i <= e1) {
                  unmount(c1[i], parentComponent, parentSuspense, true);
                  i++;
              }
          }
          // 5. unknown sequence
          // [i ... e1 + 1]: a b [c d e] f g
          // [i ... e2 + 1]: a b [e d c h] f g
          // i = 2, e1 = 4, e2 = 5
          else {
              const s1 = i; // prev starting index
              const s2 = i; // next starting index
              // 5.1 build key:index map for newChildren
              const keyToNewIndexMap = new Map();
              for (i = s2; i <= e2; i++) {
                  const nextChild = (c2[i] = optimized
                      ? cloneIfMounted(c2[i])
                      : normalizeVNode(c2[i]));
                  if (nextChild.key != null) {
                      if (keyToNewIndexMap.has(nextChild.key)) {
                          warn$1(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
                      }
                      keyToNewIndexMap.set(nextChild.key, i);
                  }
              }
              // 5.2 loop through old children left to be patched and try to patch
              // matching nodes & remove nodes that are no longer present
              let j;
              let patched = 0;
              const toBePatched = e2 - s2 + 1;
              let moved = false;
              // used to track whether any node has moved
              let maxNewIndexSoFar = 0;
              // works as Map<newIndex, oldIndex>
              // Note that oldIndex is offset by +1
              // and oldIndex = 0 is a special value indicating the new node has
              // no corresponding old node.
              // used for determining longest stable subsequence
              const newIndexToOldIndexMap = new Array(toBePatched);
              for (i = 0; i < toBePatched; i++)
                  newIndexToOldIndexMap[i] = 0;
              for (i = s1; i <= e1; i++) {
                  const prevChild = c1[i];
                  if (patched >= toBePatched) {
                      // all new children have been patched so this can only be a removal
                      unmount(prevChild, parentComponent, parentSuspense, true);
                      continue;
                  }
                  let newIndex;
                  if (prevChild.key != null) {
                      newIndex = keyToNewIndexMap.get(prevChild.key);
                  }
                  else {
                      // key-less node, try to locate a key-less node of the same type
                      for (j = s2; j <= e2; j++) {
                          if (newIndexToOldIndexMap[j - s2] === 0 &&
                              isSameVNodeType(prevChild, c2[j])) {
                              newIndex = j;
                              break;
                          }
                      }
                  }
                  if (newIndex === undefined) {
                      unmount(prevChild, parentComponent, parentSuspense, true);
                  }
                  else {
                      newIndexToOldIndexMap[newIndex - s2] = i + 1;
                      if (newIndex >= maxNewIndexSoFar) {
                          maxNewIndexSoFar = newIndex;
                      }
                      else {
                          moved = true;
                      }
                      patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                      patched++;
                  }
              }
              // 5.3 move and mount
              // generate longest stable subsequence only when nodes have moved
              const increasingNewIndexSequence = moved
                  ? getSequence(newIndexToOldIndexMap)
                  : EMPTY_ARR;
              j = increasingNewIndexSequence.length - 1;
              // looping backwards so that we can use last patched node as anchor
              for (i = toBePatched - 1; i >= 0; i--) {
                  const nextIndex = s2 + i;
                  const nextChild = c2[nextIndex];
                  const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                  if (newIndexToOldIndexMap[i] === 0) {
                      // mount new
                      patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                  }
                  else if (moved) {
                      // move if:
                      // There is no stable subsequence (e.g. a reverse)
                      // OR current node is not among the stable sequence
                      if (j < 0 || i !== increasingNewIndexSequence[j]) {
                          move(nextChild, container, anchor, 2 /* REORDER */);
                      }
                      else {
                          j--;
                      }
                  }
              }
          }
      };
      const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
          const { el, type, transition, children, shapeFlag } = vnode;
          if (shapeFlag & 6 /* COMPONENT */) {
              move(vnode.component.subTree, container, anchor, moveType);
              return;
          }
          if (shapeFlag & 128 /* SUSPENSE */) {
              vnode.suspense.move(container, anchor, moveType);
              return;
          }
          if (shapeFlag & 64 /* TELEPORT */) {
              type.move(vnode, container, anchor, internals);
              return;
          }
          if (type === Fragment) {
              hostInsert(el, container, anchor);
              for (let i = 0; i < children.length; i++) {
                  move(children[i], container, anchor, moveType);
              }
              hostInsert(vnode.anchor, container, anchor);
              return;
          }
          if (type === Static) {
              moveStaticNode(vnode, container, anchor);
              return;
          }
          // single nodes
          const needTransition = moveType !== 2 /* REORDER */ &&
              shapeFlag & 1 /* ELEMENT */ &&
              transition;
          if (needTransition) {
              if (moveType === 0 /* ENTER */) {
                  transition.beforeEnter(el);
                  hostInsert(el, container, anchor);
                  queuePostRenderEffect(() => transition.enter(el), parentSuspense);
              }
              else {
                  const { leave, delayLeave, afterLeave } = transition;
                  const remove = () => hostInsert(el, container, anchor);
                  const performLeave = () => {
                      leave(el, () => {
                          remove();
                          afterLeave && afterLeave();
                      });
                  };
                  if (delayLeave) {
                      delayLeave(el, remove, performLeave);
                  }
                  else {
                      performLeave();
                  }
              }
          }
          else {
              hostInsert(el, container, anchor);
          }
      };
      const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
          const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
          // unset ref
          if (ref != null) {
              setRef(ref, null, parentSuspense, vnode, true);
          }
          if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
              parentComponent.ctx.deactivate(vnode);
              return;
          }
          const shouldInvokeDirs = shapeFlag & 1 /* ELEMENT */ && dirs;
          const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
          let vnodeHook;
          if (shouldInvokeVnodeHook &&
              (vnodeHook = props && props.onVnodeBeforeUnmount)) {
              invokeVNodeHook(vnodeHook, parentComponent, vnode);
          }
          if (shapeFlag & 6 /* COMPONENT */) {
              unmountComponent(vnode.component, parentSuspense, doRemove);
          }
          else {
              if (shapeFlag & 128 /* SUSPENSE */) {
                  vnode.suspense.unmount(parentSuspense, doRemove);
                  return;
              }
              if (shouldInvokeDirs) {
                  invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
              }
              if (shapeFlag & 64 /* TELEPORT */) {
                  vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
              }
              else if (dynamicChildren &&
                  // #1153: fast path should not be taken for non-stable (v-for) fragments
                  (type !== Fragment ||
                      (patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */))) {
                  // fast path for block nodes: only need to unmount dynamic children.
                  unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
              }
              else if ((type === Fragment &&
                  patchFlag &
                      (128 /* KEYED_FRAGMENT */ | 256 /* UNKEYED_FRAGMENT */)) ||
                  (!optimized && shapeFlag & 16 /* ARRAY_CHILDREN */)) {
                  unmountChildren(children, parentComponent, parentSuspense);
              }
              if (doRemove) {
                  remove(vnode);
              }
          }
          if ((shouldInvokeVnodeHook &&
              (vnodeHook = props && props.onVnodeUnmounted)) ||
              shouldInvokeDirs) {
              queuePostRenderEffect(() => {
                  vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                  shouldInvokeDirs &&
                      invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
              }, parentSuspense);
          }
      };
      const remove = vnode => {
          const { type, el, anchor, transition } = vnode;
          if (type === Fragment) {
              removeFragment(el, anchor);
              return;
          }
          if (type === Static) {
              removeStaticNode(vnode);
              return;
          }
          const performRemove = () => {
              hostRemove(el);
              if (transition && !transition.persisted && transition.afterLeave) {
                  transition.afterLeave();
              }
          };
          if (vnode.shapeFlag & 1 /* ELEMENT */ &&
              transition &&
              !transition.persisted) {
              const { leave, delayLeave } = transition;
              const performLeave = () => leave(el, performRemove);
              if (delayLeave) {
                  delayLeave(vnode.el, performRemove, performLeave);
              }
              else {
                  performLeave();
              }
          }
          else {
              performRemove();
          }
      };
      const removeFragment = (cur, end) => {
          // For fragments, directly remove all contained DOM nodes.
          // (fragment child nodes cannot have transition)
          let next;
          while (cur !== end) {
              next = hostNextSibling(cur);
              hostRemove(cur);
              cur = next;
          }
          hostRemove(end);
      };
      const unmountComponent = (instance, parentSuspense, doRemove) => {
          if (instance.type.__hmrId) {
              unregisterHMR(instance);
          }
          const { bum, scope, update, subTree, um } = instance;
          // beforeUnmount hook
          if (bum) {
              invokeArrayFns(bum);
          }
          // stop effects in component scope
          scope.stop();
          // update may be null if a component is unmounted before its async
          // setup has resolved.
          if (update) {
              // so that scheduler will no longer invoke it
              update.active = false;
              unmount(subTree, instance, parentSuspense, doRemove);
          }
          // unmounted hook
          if (um) {
              queuePostRenderEffect(um, parentSuspense);
          }
          queuePostRenderEffect(() => {
              instance.isUnmounted = true;
          }, parentSuspense);
          // A component with async dep inside a pending suspense is unmounted before
          // its async dep resolves. This should remove the dep from the suspense, and
          // cause the suspense to resolve immediately if that was the last dep.
          if (parentSuspense &&
              parentSuspense.pendingBranch &&
              !parentSuspense.isUnmounted &&
              instance.asyncDep &&
              !instance.asyncResolved &&
              instance.suspenseId === parentSuspense.pendingId) {
              parentSuspense.deps--;
              if (parentSuspense.deps === 0) {
                  parentSuspense.resolve();
              }
          }
          {
              devtoolsComponentRemoved(instance);
          }
      };
      const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
          for (let i = start; i < children.length; i++) {
              unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
          }
      };
      const getNextHostNode = vnode => {
          if (vnode.shapeFlag & 6 /* COMPONENT */) {
              return getNextHostNode(vnode.component.subTree);
          }
          if (vnode.shapeFlag & 128 /* SUSPENSE */) {
              return vnode.suspense.next();
          }
          return hostNextSibling((vnode.anchor || vnode.el));
      };
      const render = (vnode, container, isSVG) => {
          if (vnode == null) {
              if (container._vnode) {
                  unmount(container._vnode, null, null, true);
              }
          }
          else {
              patch(container._vnode || null, vnode, container, null, null, null, isSVG);
          }
          flushPostFlushCbs();
          container._vnode = vnode;
      };
      const internals = {
          p: patch,
          um: unmount,
          m: move,
          r: remove,
          mt: mountComponent,
          mc: mountChildren,
          pc: patchChildren,
          pbc: patchBlockChildren,
          n: getNextHostNode,
          o: options
      };
      let hydrate;
      let hydrateNode;
      if (createHydrationFns) {
          [hydrate, hydrateNode] = createHydrationFns(internals);
      }
      return {
          render,
          hydrate,
          createApp: createAppAPI(render, hydrate)
      };
  }
  function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
      if (isArray(rawRef)) {
          rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
          return;
      }
      if (isAsyncWrapper(vnode) && !isUnmount) {
          // when mounting async components, nothing needs to be done,
          // because the template ref is forwarded to inner component
          return;
      }
      const refValue = vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */
          ? getExposeProxy(vnode.component) || vnode.component.proxy
          : vnode.el;
      const value = isUnmount ? null : refValue;
      const { i: owner, r: ref } = rawRef;
      if (!owner) {
          warn$1(`Missing ref owner context. ref cannot be used on hoisted vnodes. ` +
              `A vnode with ref must be created inside the render function.`);
          return;
      }
      const oldRef = oldRawRef && oldRawRef.r;
      const refs = owner.refs === EMPTY_OBJ ? (owner.refs = {}) : owner.refs;
      const setupState = owner.setupState;
      // dynamic ref changed. unset old ref
      if (oldRef != null && oldRef !== ref) {
          if (isString(oldRef)) {
              refs[oldRef] = null;
              if (hasOwn(setupState, oldRef)) {
                  setupState[oldRef] = null;
              }
          }
          else if (isRef(oldRef)) {
              oldRef.value = null;
          }
      }
      if (isString(ref)) {
          const doSet = () => {
              {
                  refs[ref] = value;
              }
              if (hasOwn(setupState, ref)) {
                  setupState[ref] = value;
              }
          };
          // #1789: for non-null values, set them after render
          // null values means this is unmount and it should not overwrite another
          // ref with the same key
          if (value) {
              doSet.id = -1;
              queuePostRenderEffect(doSet, parentSuspense);
          }
          else {
              doSet();
          }
      }
      else if (isRef(ref)) {
          const doSet = () => {
              ref.value = value;
          };
          if (value) {
              doSet.id = -1;
              queuePostRenderEffect(doSet, parentSuspense);
          }
          else {
              doSet();
          }
      }
      else if (isFunction(ref)) {
          callWithErrorHandling(ref, owner, 12 /* FUNCTION_REF */, [value, refs]);
      }
      else {
          warn$1('Invalid template ref type:', value, `(${typeof value})`);
      }
  }
  function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
      callWithAsyncErrorHandling(hook, instance, 7 /* VNODE_HOOK */, [
          vnode,
          prevVNode
      ]);
  }
  /**
   * #1156
   * When a component is HMR-enabled, we need to make sure that all static nodes
   * inside a block also inherit the DOM element from the previous tree so that
   * HMR updates (which are full updates) can retrieve the element for patching.
   *
   * #2080
   * Inside keyed `template` fragment static children, if a fragment is moved,
   * the children will always be moved. Therefore, in order to ensure correct move
   * position, el should be inherited from previous nodes.
   */
  function traverseStaticChildren(n1, n2, shallow = false) {
      const ch1 = n1.children;
      const ch2 = n2.children;
      if (isArray(ch1) && isArray(ch2)) {
          for (let i = 0; i < ch1.length; i++) {
              // this is only called in the optimized path so array children are
              // guaranteed to be vnodes
              const c1 = ch1[i];
              let c2 = ch2[i];
              if (c2.shapeFlag & 1 /* ELEMENT */ && !c2.dynamicChildren) {
                  if (c2.patchFlag <= 0 || c2.patchFlag === 32 /* HYDRATE_EVENTS */) {
                      c2 = ch2[i] = cloneIfMounted(ch2[i]);
                      c2.el = c1.el;
                  }
                  if (!shallow)
                      traverseStaticChildren(c1, c2);
              }
              // also inherit for comment nodes, but not placeholders (e.g. v-if which
              // would have received .el during block patch)
              if (c2.type === Comment && !c2.el) {
                  c2.el = c1.el;
              }
          }
      }
  }
  // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
  function getSequence(arr) {
      const p = arr.slice();
      const result = [0];
      let i, j, u, v, c;
      const len = arr.length;
      for (i = 0; i < len; i++) {
          const arrI = arr[i];
          if (arrI !== 0) {
              j = result[result.length - 1];
              if (arr[j] < arrI) {
                  p[i] = j;
                  result.push(i);
                  continue;
              }
              u = 0;
              v = result.length - 1;
              while (u < v) {
                  c = (u + v) >> 1;
                  if (arr[result[c]] < arrI) {
                      u = c + 1;
                  }
                  else {
                      v = c;
                  }
              }
              if (arrI < arr[result[u]]) {
                  if (u > 0) {
                      p[i] = result[u - 1];
                  }
                  result[u] = i;
              }
          }
      }
      u = result.length;
      v = result[u - 1];
      while (u-- > 0) {
          result[u] = v;
          v = p[v];
      }
      return result;
  }

  const isTeleport = (type) => type.__isTeleport;
  const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === '');
  const isTargetSVG = (target) => typeof SVGElement !== 'undefined' && target instanceof SVGElement;
  const resolveTarget = (props, select) => {
      const targetSelector = props && props.to;
      if (isString(targetSelector)) {
          if (!select) {
              warn$1(`Current renderer does not support string target for Teleports. ` +
                      `(missing querySelector renderer option)`);
              return null;
          }
          else {
              const target = select(targetSelector);
              if (!target) {
                  warn$1(`Failed to locate Teleport target with selector "${targetSelector}". ` +
                          `Note the target element must exist before the component is mounted - ` +
                          `i.e. the target cannot be rendered by the component itself, and ` +
                          `ideally should be outside of the entire Vue component tree.`);
              }
              return target;
          }
      }
      else {
          if (!targetSelector && !isTeleportDisabled(props)) {
              warn$1(`Invalid Teleport target: ${targetSelector}`);
          }
          return targetSelector;
      }
  };
  const TeleportImpl = {
      __isTeleport: true,
      process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
          const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
          const disabled = isTeleportDisabled(n2.props);
          let { shapeFlag, children, dynamicChildren } = n2;
          // #3302
          // HMR updated, force full diff
          if (isHmrUpdating) {
              optimized = false;
              dynamicChildren = null;
          }
          if (n1 == null) {
              // insert anchors in the main view
              const placeholder = (n2.el = createComment('teleport start')
                  );
              const mainAnchor = (n2.anchor = createComment('teleport end')
                  );
              insert(placeholder, container, anchor);
              insert(mainAnchor, container, anchor);
              const target = (n2.target = resolveTarget(n2.props, querySelector));
              const targetAnchor = (n2.targetAnchor = createText(''));
              if (target) {
                  insert(targetAnchor, target);
                  // #2652 we could be teleporting from a non-SVG tree into an SVG tree
                  isSVG = isSVG || isTargetSVG(target);
              }
              else if (!disabled) {
                  warn$1('Invalid Teleport target on mount:', target, `(${typeof target})`);
              }
              const mount = (container, anchor) => {
                  // Teleport *always* has Array children. This is enforced in both the
                  // compiler and vnode children normalization.
                  if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                      mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                  }
              };
              if (disabled) {
                  mount(container, mainAnchor);
              }
              else if (target) {
                  mount(target, targetAnchor);
              }
          }
          else {
              // update content
              n2.el = n1.el;
              const mainAnchor = (n2.anchor = n1.anchor);
              const target = (n2.target = n1.target);
              const targetAnchor = (n2.targetAnchor = n1.targetAnchor);
              const wasDisabled = isTeleportDisabled(n1.props);
              const currentContainer = wasDisabled ? container : target;
              const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
              isSVG = isSVG || isTargetSVG(target);
              if (dynamicChildren) {
                  // fast path when the teleport happens to be a block root
                  patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
                  // even in block tree mode we need to make sure all root-level nodes
                  // in the teleport inherit previous DOM references so that they can
                  // be moved in future patches.
                  traverseStaticChildren(n1, n2, true);
              }
              else if (!optimized) {
                  patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
              }
              if (disabled) {
                  if (!wasDisabled) {
                      // enabled -> disabled
                      // move into main container
                      moveTeleport(n2, container, mainAnchor, internals, 1 /* TOGGLE */);
                  }
              }
              else {
                  // target changed
                  if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                      const nextTarget = (n2.target = resolveTarget(n2.props, querySelector));
                      if (nextTarget) {
                          moveTeleport(n2, nextTarget, null, internals, 0 /* TARGET_CHANGE */);
                      }
                      else {
                          warn$1('Invalid Teleport target on update:', target, `(${typeof target})`);
                      }
                  }
                  else if (wasDisabled) {
                      // disabled -> enabled
                      // move into teleport target
                      moveTeleport(n2, target, targetAnchor, internals, 1 /* TOGGLE */);
                  }
              }
          }
      },
      remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
          const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
          if (target) {
              hostRemove(targetAnchor);
          }
          // an unmounted teleport should always remove its children if not disabled
          if (doRemove || !isTeleportDisabled(props)) {
              hostRemove(anchor);
              if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                  for (let i = 0; i < children.length; i++) {
                      const child = children[i];
                      unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
                  }
              }
          }
      },
      move: moveTeleport,
      hydrate: hydrateTeleport
  };
  function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2 /* REORDER */) {
      // move target anchor if this is a target change.
      if (moveType === 0 /* TARGET_CHANGE */) {
          insert(vnode.targetAnchor, container, parentAnchor);
      }
      const { el, anchor, shapeFlag, children, props } = vnode;
      const isReorder = moveType === 2 /* REORDER */;
      // move main view anchor if this is a re-order.
      if (isReorder) {
          insert(el, container, parentAnchor);
      }
      // if this is a re-order and teleport is enabled (content is in target)
      // do not move children. So the opposite is: only move children if this
      // is not a reorder, or the teleport is disabled
      if (!isReorder || isTeleportDisabled(props)) {
          // Teleport has either Array children or no children.
          if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
              for (let i = 0; i < children.length; i++) {
                  move(children[i], container, parentAnchor, 2 /* REORDER */);
              }
          }
      }
      // move main view anchor if this is a re-order.
      if (isReorder) {
          insert(anchor, container, parentAnchor);
      }
  }
  function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
      const target = (vnode.target = resolveTarget(vnode.props, querySelector));
      if (target) {
          // if multiple teleports rendered to the same target element, we need to
          // pick up from where the last teleport finished instead of the first node
          const targetNode = target._lpa || target.firstChild;
          if (vnode.shapeFlag & 16 /* ARRAY_CHILDREN */) {
              if (isTeleportDisabled(vnode.props)) {
                  vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
                  vnode.targetAnchor = targetNode;
              }
              else {
                  vnode.anchor = nextSibling(node);
                  vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
              }
              target._lpa =
                  vnode.targetAnchor && nextSibling(vnode.targetAnchor);
          }
      }
      return vnode.anchor && nextSibling(vnode.anchor);
  }
  // Force-casted public typing for h and TSX props inference
  const Teleport = TeleportImpl;

  const COMPONENTS = 'components';
  const DIRECTIVES = 'directives';
  /**
   * @private
   */
  function resolveComponent(name, maybeSelfReference) {
      return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
  }
  const NULL_DYNAMIC_COMPONENT = Symbol();
  /**
   * @private
   */
  function resolveDynamicComponent(component) {
      if (isString(component)) {
          return resolveAsset(COMPONENTS, component, false) || component;
      }
      else {
          // invalid types will fallthrough to createVNode and raise warning
          return (component || NULL_DYNAMIC_COMPONENT);
      }
  }
  /**
   * @private
   */
  function resolveDirective(name) {
      return resolveAsset(DIRECTIVES, name);
  }
  // implementation
  function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
      const instance = currentRenderingInstance || currentInstance;
      if (instance) {
          const Component = instance.type;
          // explicit self name has highest priority
          if (type === COMPONENTS) {
              const selfName = getComponentName(Component);
              if (selfName &&
                  (selfName === name ||
                      selfName === camelize(name) ||
                      selfName === capitalize(camelize(name)))) {
                  return Component;
              }
          }
          const res = 
          // local registration
          // check instance[type] first which is resolved for options API
          resolve(instance[type] || Component[type], name) ||
              // global registration
              resolve(instance.appContext[type], name);
          if (!res && maybeSelfReference) {
              // fallback to implicit self-reference
              return Component;
          }
          if (warnMissing && !res) {
              const extra = type === COMPONENTS
                  ? `\nIf this is a native custom element, make sure to exclude it from ` +
                      `component resolution via compilerOptions.isCustomElement.`
                  : ``;
              warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
          }
          return res;
      }
      else {
          warn$1(`resolve${capitalize(type.slice(0, -1))} ` +
              `can only be used in render() or setup().`);
      }
  }
  function resolve(registry, name) {
      return (registry &&
          (registry[name] ||
              registry[camelize(name)] ||
              registry[capitalize(camelize(name))]));
  }

  const Fragment = Symbol('Fragment' );
  const Text = Symbol('Text' );
  const Comment = Symbol('Comment' );
  const Static = Symbol('Static' );
  // Since v-if and v-for are the two possible ways node structure can dynamically
  // change, once we consider v-if branches and each v-for fragment a block, we
  // can divide a template into nested blocks, and within each block the node
  // structure would be stable. This allows us to skip most children diffing
  // and only worry about the dynamic nodes (indicated by patch flags).
  const blockStack = [];
  let currentBlock = null;
  /**
   * Open a block.
   * This must be called before `createBlock`. It cannot be part of `createBlock`
   * because the children of the block are evaluated before `createBlock` itself
   * is called. The generated code typically looks like this:
   *
   * ```js
   * function render() {
   *   return (openBlock(),createBlock('div', null, [...]))
   * }
   * ```
   * disableTracking is true when creating a v-for fragment block, since a v-for
   * fragment always diffs its children.
   *
   * @private
   */
  function openBlock(disableTracking = false) {
      blockStack.push((currentBlock = disableTracking ? null : []));
  }
  function closeBlock() {
      blockStack.pop();
      currentBlock = blockStack[blockStack.length - 1] || null;
  }
  // Whether we should be tracking dynamic child nodes inside a block.
  // Only tracks when this value is > 0
  // We are not using a simple boolean because this value may need to be
  // incremented/decremented by nested usage of v-once (see below)
  let isBlockTreeEnabled = 1;
  /**
   * Block tracking sometimes needs to be disabled, for example during the
   * creation of a tree that needs to be cached by v-once. The compiler generates
   * code like this:
   *
   * ``` js
   * _cache[1] || (
   *   setBlockTracking(-1),
   *   _cache[1] = createVNode(...),
   *   setBlockTracking(1),
   *   _cache[1]
   * )
   * ```
   *
   * @private
   */
  function setBlockTracking(value) {
      isBlockTreeEnabled += value;
  }
  function setupBlock(vnode) {
      // save current block children on the block vnode
      vnode.dynamicChildren =
          isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
      // close block
      closeBlock();
      // a block is always going to be patched, so track it as a child of its
      // parent block
      if (isBlockTreeEnabled > 0 && currentBlock) {
          currentBlock.push(vnode);
      }
      return vnode;
  }
  /**
   * @private
   */
  function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
      return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true /* isBlock */));
  }
  /**
   * Create a block root vnode. Takes the same exact arguments as `createVNode`.
   * A block root keeps track of dynamic nodes within the block in the
   * `dynamicChildren` array.
   *
   * @private
   */
  function createBlock(type, props, children, patchFlag, dynamicProps) {
      return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true /* isBlock: prevent a block from tracking itself */));
  }
  function isVNode(value) {
      return value ? value.__v_isVNode === true : false;
  }
  function isSameVNodeType(n1, n2) {
      if (n2.shapeFlag & 6 /* COMPONENT */ &&
          hmrDirtyComponents.has(n2.type)) {
          // HMR only: if the component has been hot-updated, force a reload.
          return false;
      }
      return n1.type === n2.type && n1.key === n2.key;
  }
  let vnodeArgsTransformer;
  /**
   * Internal API for registering an arguments transform for createVNode
   * used for creating stubs in the test-utils
   * It is *internal* but needs to be exposed for test-utils to pick up proper
   * typings
   */
  function transformVNodeArgs(transformer) {
      vnodeArgsTransformer = transformer;
  }
  const createVNodeWithArgsTransform = (...args) => {
      return _createVNode(...(vnodeArgsTransformer
          ? vnodeArgsTransformer(args, currentRenderingInstance)
          : args));
  };
  const InternalObjectKey = `__vInternal`;
  const normalizeKey = ({ key }) => key != null ? key : null;
  const normalizeRef = ({ ref }) => {
      return (ref != null
          ? isString(ref) || isRef(ref) || isFunction(ref)
              ? { i: currentRenderingInstance, r: ref }
              : ref
          : null);
  };
  function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1 /* ELEMENT */, isBlockNode = false, needFullChildrenNormalization = false) {
      const vnode = {
          __v_isVNode: true,
          __v_skip: true,
          type,
          props,
          key: props && normalizeKey(props),
          ref: props && normalizeRef(props),
          scopeId: currentScopeId,
          slotScopeIds: null,
          children,
          component: null,
          suspense: null,
          ssContent: null,
          ssFallback: null,
          dirs: null,
          transition: null,
          el: null,
          anchor: null,
          target: null,
          targetAnchor: null,
          staticCount: 0,
          shapeFlag,
          patchFlag,
          dynamicProps,
          dynamicChildren: null,
          appContext: null
      };
      if (needFullChildrenNormalization) {
          normalizeChildren(vnode, children);
          // normalize suspense children
          if (shapeFlag & 128 /* SUSPENSE */) {
              type.normalize(vnode);
          }
      }
      else if (children) {
          // compiled element vnode - if children is passed, only possible types are
          // string or Array.
          vnode.shapeFlag |= isString(children)
              ? 8 /* TEXT_CHILDREN */
              : 16 /* ARRAY_CHILDREN */;
      }
      // validate key
      if (vnode.key !== vnode.key) {
          warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
      }
      // track vnode for block tree
      if (isBlockTreeEnabled > 0 &&
          // avoid a block node from tracking itself
          !isBlockNode &&
          // has current parent block
          currentBlock &&
          // presence of a patch flag indicates this node needs patching on updates.
          // component nodes also should always be patched, because even if the
          // component doesn't need to update, it needs to persist the instance on to
          // the next vnode so that it can be properly unmounted later.
          (vnode.patchFlag > 0 || shapeFlag & 6 /* COMPONENT */) &&
          // the EVENTS flag is only for hydration and if it is the only flag, the
          // vnode should not be considered dynamic due to handler caching.
          vnode.patchFlag !== 32 /* HYDRATE_EVENTS */) {
          currentBlock.push(vnode);
      }
      return vnode;
  }
  const createVNode = (createVNodeWithArgsTransform );
  function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
      if (!type || type === NULL_DYNAMIC_COMPONENT) {
          if (!type) {
              warn$1(`Invalid vnode type when creating vnode: ${type}.`);
          }
          type = Comment;
      }
      if (isVNode(type)) {
          // createVNode receiving an existing vnode. This happens in cases like
          // <component :is="vnode"/>
          // #2078 make sure to merge refs during the clone instead of overwriting it
          const cloned = cloneVNode(type, props, true /* mergeRef: true */);
          if (children) {
              normalizeChildren(cloned, children);
          }
          return cloned;
      }
      // class component normalization.
      if (isClassComponent(type)) {
          type = type.__vccOpts;
      }
      // class & style normalization.
      if (props) {
          // for reactive or proxy objects, we need to clone it to enable mutation.
          props = guardReactiveProps(props);
          let { class: klass, style } = props;
          if (klass && !isString(klass)) {
              props.class = normalizeClass(klass);
          }
          if (isObject(style)) {
              // reactive state objects need to be cloned since they are likely to be
              // mutated
              if (isProxy(style) && !isArray(style)) {
                  style = extend({}, style);
              }
              props.style = normalizeStyle(style);
          }
      }
      // encode the vnode type information into a bitmap
      const shapeFlag = isString(type)
          ? 1 /* ELEMENT */
          : isSuspense(type)
              ? 128 /* SUSPENSE */
              : isTeleport(type)
                  ? 64 /* TELEPORT */
                  : isObject(type)
                      ? 4 /* STATEFUL_COMPONENT */
                      : isFunction(type)
                          ? 2 /* FUNCTIONAL_COMPONENT */
                          : 0;
      if (shapeFlag & 4 /* STATEFUL_COMPONENT */ && isProxy(type)) {
          type = toRaw(type);
          warn$1(`Vue received a Component which was made a reactive object. This can ` +
              `lead to unnecessary performance overhead, and should be avoided by ` +
              `marking the component with \`markRaw\` or using \`shallowRef\` ` +
              `instead of \`ref\`.`, `\nComponent that was made reactive: `, type);
      }
      return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
  }
  function guardReactiveProps(props) {
      if (!props)
          return null;
      return isProxy(props) || InternalObjectKey in props
          ? extend({}, props)
          : props;
  }
  function cloneVNode(vnode, extraProps, mergeRef = false) {
      // This is intentionally NOT using spread or extend to avoid the runtime
      // key enumeration cost.
      const { props, ref, patchFlag, children } = vnode;
      const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
      const cloned = {
          __v_isVNode: true,
          __v_skip: true,
          type: vnode.type,
          props: mergedProps,
          key: mergedProps && normalizeKey(mergedProps),
          ref: extraProps && extraProps.ref
              ? // #2078 in the case of <component :is="vnode" ref="extra"/>
                  // if the vnode itself already has a ref, cloneVNode will need to merge
                  // the refs so the single vnode can be set on multiple refs
                  mergeRef && ref
                      ? isArray(ref)
                          ? ref.concat(normalizeRef(extraProps))
                          : [ref, normalizeRef(extraProps)]
                      : normalizeRef(extraProps)
              : ref,
          scopeId: vnode.scopeId,
          slotScopeIds: vnode.slotScopeIds,
          children: patchFlag === -1 /* HOISTED */ && isArray(children)
              ? children.map(deepCloneVNode)
              : children,
          target: vnode.target,
          targetAnchor: vnode.targetAnchor,
          staticCount: vnode.staticCount,
          shapeFlag: vnode.shapeFlag,
          // if the vnode is cloned with extra props, we can no longer assume its
          // existing patch flag to be reliable and need to add the FULL_PROPS flag.
          // note: perserve flag for fragments since they use the flag for children
          // fast paths only.
          patchFlag: extraProps && vnode.type !== Fragment
              ? patchFlag === -1 // hoisted node
                  ? 16 /* FULL_PROPS */
                  : patchFlag | 16 /* FULL_PROPS */
              : patchFlag,
          dynamicProps: vnode.dynamicProps,
          dynamicChildren: vnode.dynamicChildren,
          appContext: vnode.appContext,
          dirs: vnode.dirs,
          transition: vnode.transition,
          // These should technically only be non-null on mounted VNodes. However,
          // they *should* be copied for kept-alive vnodes. So we just always copy
          // them since them being non-null during a mount doesn't affect the logic as
          // they will simply be overwritten.
          component: vnode.component,
          suspense: vnode.suspense,
          ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
          ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
          el: vnode.el,
          anchor: vnode.anchor
      };
      return cloned;
  }
  /**
   * Dev only, for HMR of hoisted vnodes reused in v-for
   * https://github.com/vitejs/vite/issues/2022
   */
  function deepCloneVNode(vnode) {
      const cloned = cloneVNode(vnode);
      if (isArray(vnode.children)) {
          cloned.children = vnode.children.map(deepCloneVNode);
      }
      return cloned;
  }
  /**
   * @private
   */
  function createTextVNode(text = ' ', flag = 0) {
      return createVNode(Text, null, text, flag);
  }
  /**
   * @private
   */
  function createStaticVNode(content, numberOfNodes) {
      // A static vnode can contain multiple stringified elements, and the number
      // of elements is necessary for hydration.
      const vnode = createVNode(Static, null, content);
      vnode.staticCount = numberOfNodes;
      return vnode;
  }
  /**
   * @private
   */
  function createCommentVNode(text = '', 
  // when used as the v-else branch, the comment node must be created as a
  // block to ensure correct updates.
  asBlock = false) {
      return asBlock
          ? (openBlock(), createBlock(Comment, null, text))
          : createVNode(Comment, null, text);
  }
  function normalizeVNode(child) {
      if (child == null || typeof child === 'boolean') {
          // empty placeholder
          return createVNode(Comment);
      }
      else if (isArray(child)) {
          // fragment
          return createVNode(Fragment, null, 
          // #3666, avoid reference pollution when reusing vnode
          child.slice());
      }
      else if (typeof child === 'object') {
          // already vnode, this should be the most common since compiled templates
          // always produce all-vnode children arrays
          return cloneIfMounted(child);
      }
      else {
          // strings and numbers
          return createVNode(Text, null, String(child));
      }
  }
  // optimized normalization for template-compiled render fns
  function cloneIfMounted(child) {
      return child.el === null || child.memo ? child : cloneVNode(child);
  }
  function normalizeChildren(vnode, children) {
      let type = 0;
      const { shapeFlag } = vnode;
      if (children == null) {
          children = null;
      }
      else if (isArray(children)) {
          type = 16 /* ARRAY_CHILDREN */;
      }
      else if (typeof children === 'object') {
          if (shapeFlag & (1 /* ELEMENT */ | 64 /* TELEPORT */)) {
              // Normalize slot to plain children for plain element and Teleport
              const slot = children.default;
              if (slot) {
                  // _c marker is added by withCtx() indicating this is a compiled slot
                  slot._c && (slot._d = false);
                  normalizeChildren(vnode, slot());
                  slot._c && (slot._d = true);
              }
              return;
          }
          else {
              type = 32 /* SLOTS_CHILDREN */;
              const slotFlag = children._;
              if (!slotFlag && !(InternalObjectKey in children)) {
                  children._ctx = currentRenderingInstance;
              }
              else if (slotFlag === 3 /* FORWARDED */ && currentRenderingInstance) {
                  // a child component receives forwarded slots from the parent.
                  // its slot type is determined by its parent's slot type.
                  if (currentRenderingInstance.slots._ === 1 /* STABLE */) {
                      children._ = 1 /* STABLE */;
                  }
                  else {
                      children._ = 2 /* DYNAMIC */;
                      vnode.patchFlag |= 1024 /* DYNAMIC_SLOTS */;
                  }
              }
          }
      }
      else if (isFunction(children)) {
          children = { default: children, _ctx: currentRenderingInstance };
          type = 32 /* SLOTS_CHILDREN */;
      }
      else {
          children = String(children);
          // force teleport children to array so it can be moved around
          if (shapeFlag & 64 /* TELEPORT */) {
              type = 16 /* ARRAY_CHILDREN */;
              children = [createTextVNode(children)];
          }
          else {
              type = 8 /* TEXT_CHILDREN */;
          }
      }
      vnode.children = children;
      vnode.shapeFlag |= type;
  }
  function mergeProps(...args) {
      const ret = {};
      for (let i = 0; i < args.length; i++) {
          const toMerge = args[i];
          for (const key in toMerge) {
              if (key === 'class') {
                  if (ret.class !== toMerge.class) {
                      ret.class = normalizeClass([ret.class, toMerge.class]);
                  }
              }
              else if (key === 'style') {
                  ret.style = normalizeStyle([ret.style, toMerge.style]);
              }
              else if (isOn(key)) {
                  const existing = ret[key];
                  const incoming = toMerge[key];
                  if (existing !== incoming &&
                      !(isArray(existing) && existing.includes(incoming))) {
                      ret[key] = existing
                          ? [].concat(existing, incoming)
                          : incoming;
                  }
              }
              else if (key !== '') {
                  ret[key] = toMerge[key];
              }
          }
      }
      return ret;
  }

  /**
   * Actual implementation
   */
  function renderList(source, renderItem, cache, index) {
      let ret;
      const cached = (cache && cache[index]);
      if (isArray(source) || isString(source)) {
          ret = new Array(source.length);
          for (let i = 0, l = source.length; i < l; i++) {
              ret[i] = renderItem(source[i], i, undefined, cached && cached[i]);
          }
      }
      else if (typeof source === 'number') {
          if (!Number.isInteger(source)) {
              warn$1(`The v-for range expect an integer value but got ${source}.`);
              return [];
          }
          ret = new Array(source);
          for (let i = 0; i < source; i++) {
              ret[i] = renderItem(i + 1, i, undefined, cached && cached[i]);
          }
      }
      else if (isObject(source)) {
          if (source[Symbol.iterator]) {
              ret = Array.from(source, (item, i) => renderItem(item, i, undefined, cached && cached[i]));
          }
          else {
              const keys = Object.keys(source);
              ret = new Array(keys.length);
              for (let i = 0, l = keys.length; i < l; i++) {
                  const key = keys[i];
                  ret[i] = renderItem(source[key], key, i, cached && cached[i]);
              }
          }
      }
      else {
          ret = [];
      }
      if (cache) {
          cache[index] = ret;
      }
      return ret;
  }

  /**
   * Compiler runtime helper for creating dynamic slots object
   * @private
   */
  function createSlots(slots, dynamicSlots) {
      for (let i = 0; i < dynamicSlots.length; i++) {
          const slot = dynamicSlots[i];
          // array of dynamic slot generated by <template v-for="..." #[...]>
          if (isArray(slot)) {
              for (let j = 0; j < slot.length; j++) {
                  slots[slot[j].name] = slot[j].fn;
              }
          }
          else if (slot) {
              // conditional single slot generated by <template v-if="..." #foo>
              slots[slot.name] = slot.fn;
          }
      }
      return slots;
  }

  /**
   * Compiler runtime helper for rendering `<slot/>`
   * @private
   */
  function renderSlot(slots, name, props = {}, 
  // this is not a user-facing function, so the fallback is always generated by
  // the compiler and guaranteed to be a function returning an array
  fallback, noSlotted) {
      if (currentRenderingInstance.isCE) {
          return createVNode('slot', name === 'default' ? null : { name }, fallback && fallback());
      }
      let slot = slots[name];
      if (slot && slot.length > 1) {
          warn$1(`SSR-optimized slot function detected in a non-SSR-optimized render ` +
              `function. You need to mark this component with $dynamic-slots in the ` +
              `parent template.`);
          slot = () => [];
      }
      // a compiled slot disables block tracking by default to avoid manual
      // invocation interfering with template-based block tracking, but in
      // `renderSlot` we can be sure that it's template-based so we can force
      // enable it.
      if (slot && slot._c) {
          slot._d = false;
      }
      openBlock();
      const validSlotContent = slot && ensureValidVNode(slot(props));
      const rendered = createBlock(Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 /* STABLE */
          ? 64 /* STABLE_FRAGMENT */
          : -2 /* BAIL */);
      if (!noSlotted && rendered.scopeId) {
          rendered.slotScopeIds = [rendered.scopeId + '-s'];
      }
      if (slot && slot._c) {
          slot._d = true;
      }
      return rendered;
  }
  function ensureValidVNode(vnodes) {
      return vnodes.some(child => {
          if (!isVNode(child))
              return true;
          if (child.type === Comment)
              return false;
          if (child.type === Fragment &&
              !ensureValidVNode(child.children))
              return false;
          return true;
      })
          ? vnodes
          : null;
  }

  /**
   * For prefixing keys in v-on="obj" with "on"
   * @private
   */
  function toHandlers(obj) {
      const ret = {};
      if (!isObject(obj)) {
          warn$1(`v-on with no argument expects an object value.`);
          return ret;
      }
      for (const key in obj) {
          ret[toHandlerKey(key)] = obj[key];
      }
      return ret;
  }

  /**
   * #2437 In Vue 3, functional components do not have a public instance proxy but
   * they exist in the internal parent chain. For code that relies on traversing
   * public $parent chains, skip functional ones and go to the parent instead.
   */
  const getPublicInstance = (i) => {
      if (!i)
          return null;
      if (isStatefulComponent(i))
          return getExposeProxy(i) || i.proxy;
      return getPublicInstance(i.parent);
  };
  const publicPropertiesMap = extend(Object.create(null), {
      $: i => i,
      $el: i => i.vnode.el,
      $data: i => i.data,
      $props: i => (shallowReadonly(i.props) ),
      $attrs: i => (shallowReadonly(i.attrs) ),
      $slots: i => (shallowReadonly(i.slots) ),
      $refs: i => (shallowReadonly(i.refs) ),
      $parent: i => getPublicInstance(i.parent),
      $root: i => getPublicInstance(i.root),
      $emit: i => i.emit,
      $options: i => (resolveMergedOptions(i) ),
      $forceUpdate: i => () => queueJob(i.update),
      $nextTick: i => nextTick.bind(i.proxy),
      $watch: i => (instanceWatch.bind(i) )
  });
  const PublicInstanceProxyHandlers = {
      get({ _: instance }, key) {
          const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
          // for internal formatters to know that this is a Vue instance
          if (key === '__isVue') {
              return true;
          }
          // prioritize <script setup> bindings during dev.
          // this allows even properties that start with _ or $ to be used - so that
          // it aligns with the production behavior where the render fn is inlined and
          // indeed has access to all declared variables.
          if (setupState !== EMPTY_OBJ &&
              setupState.__isScriptSetup &&
              hasOwn(setupState, key)) {
              return setupState[key];
          }
          // data / props / ctx
          // This getter gets called for every property access on the render context
          // during render and is a major hotspot. The most expensive part of this
          // is the multiple hasOwn() calls. It's much faster to do a simple property
          // access on a plain object, so we use an accessCache object (with null
          // prototype) to memoize what access type a key corresponds to.
          let normalizedProps;
          if (key[0] !== '$') {
              const n = accessCache[key];
              if (n !== undefined) {
                  switch (n) {
                      case 0 /* SETUP */:
                          return setupState[key];
                      case 1 /* DATA */:
                          return data[key];
                      case 3 /* CONTEXT */:
                          return ctx[key];
                      case 2 /* PROPS */:
                          return props[key];
                      // default: just fallthrough
                  }
              }
              else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
                  accessCache[key] = 0 /* SETUP */;
                  return setupState[key];
              }
              else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
                  accessCache[key] = 1 /* DATA */;
                  return data[key];
              }
              else if (
              // only cache other properties when instance has declared (thus stable)
              // props
              (normalizedProps = instance.propsOptions[0]) &&
                  hasOwn(normalizedProps, key)) {
                  accessCache[key] = 2 /* PROPS */;
                  return props[key];
              }
              else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
                  accessCache[key] = 3 /* CONTEXT */;
                  return ctx[key];
              }
              else if (shouldCacheAccess) {
                  accessCache[key] = 4 /* OTHER */;
              }
          }
          const publicGetter = publicPropertiesMap[key];
          let cssModule, globalProperties;
          // public $xxx properties
          if (publicGetter) {
              if (key === '$attrs') {
                  track(instance, "get" /* GET */, key);
                  markAttrsAccessed();
              }
              return publicGetter(instance);
          }
          else if (
          // css module (injected by vue-loader)
          (cssModule = type.__cssModules) &&
              (cssModule = cssModule[key])) {
              return cssModule;
          }
          else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
              // user may set custom properties to `this` that start with `$`
              accessCache[key] = 3 /* CONTEXT */;
              return ctx[key];
          }
          else if (
          // global properties
          ((globalProperties = appContext.config.globalProperties),
              hasOwn(globalProperties, key))) {
              {
                  return globalProperties[key];
              }
          }
          else if (currentRenderingInstance &&
              (!isString(key) ||
                  // #1091 avoid internal isRef/isVNode checks on component instance leading
                  // to infinite warning loop
                  key.indexOf('__v') !== 0)) {
              if (data !== EMPTY_OBJ &&
                  (key[0] === '$' || key[0] === '_') &&
                  hasOwn(data, key)) {
                  warn$1(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved ` +
                      `character ("$" or "_") and is not proxied on the render context.`);
              }
              else if (instance === currentRenderingInstance) {
                  warn$1(`Property ${JSON.stringify(key)} was accessed during render ` +
                      `but is not defined on instance.`);
              }
          }
      },
      set({ _: instance }, key, value) {
          const { data, setupState, ctx } = instance;
          if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
              setupState[key] = value;
          }
          else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
              data[key] = value;
          }
          else if (hasOwn(instance.props, key)) {
              warn$1(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
              return false;
          }
          if (key[0] === '$' && key.slice(1) in instance) {
              warn$1(`Attempting to mutate public property "${key}". ` +
                      `Properties starting with $ are reserved and readonly.`, instance);
              return false;
          }
          else {
              if (key in instance.appContext.config.globalProperties) {
                  Object.defineProperty(ctx, key, {
                      enumerable: true,
                      configurable: true,
                      value
                  });
              }
              else {
                  ctx[key] = value;
              }
          }
          return true;
      },
      has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
          let normalizedProps;
          return (accessCache[key] !== undefined ||
              (data !== EMPTY_OBJ && hasOwn(data, key)) ||
              (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) ||
              ((normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key)) ||
              hasOwn(ctx, key) ||
              hasOwn(publicPropertiesMap, key) ||
              hasOwn(appContext.config.globalProperties, key));
      }
  };
  {
      PublicInstanceProxyHandlers.ownKeys = (target) => {
          warn$1(`Avoid app logic that relies on enumerating keys on a component instance. ` +
              `The keys will be empty in production mode to avoid performance overhead.`);
          return Reflect.ownKeys(target);
      };
  }
  const RuntimeCompiledPublicInstanceProxyHandlers = /*#__PURE__*/ extend({}, PublicInstanceProxyHandlers, {
      get(target, key) {
          // fast path for unscopables when using `with` block
          if (key === Symbol.unscopables) {
              return;
          }
          return PublicInstanceProxyHandlers.get(target, key, target);
      },
      has(_, key) {
          const has = key[0] !== '_' && !isGloballyWhitelisted(key);
          if (!has && PublicInstanceProxyHandlers.has(_, key)) {
              warn$1(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
          }
          return has;
      }
  });
  // dev only
  // In dev mode, the proxy target exposes the same properties as seen on `this`
  // for easier console inspection. In prod mode it will be an empty object so
  // these properties definitions can be skipped.
  function createDevRenderContext(instance) {
      const target = {};
      // expose internal instance for proxy handlers
      Object.defineProperty(target, `_`, {
          configurable: true,
          enumerable: false,
          get: () => instance
      });
      // expose public properties
      Object.keys(publicPropertiesMap).forEach(key => {
          Object.defineProperty(target, key, {
              configurable: true,
              enumerable: false,
              get: () => publicPropertiesMap[key](instance),
              // intercepted by the proxy so no need for implementation,
              // but needed to prevent set errors
              set: NOOP
          });
      });
      return target;
  }
  // dev only
  function exposePropsOnRenderContext(instance) {
      const { ctx, propsOptions: [propsOptions] } = instance;
      if (propsOptions) {
          Object.keys(propsOptions).forEach(key => {
              Object.defineProperty(ctx, key, {
                  enumerable: true,
                  configurable: true,
                  get: () => instance.props[key],
                  set: NOOP
              });
          });
      }
  }
  // dev only
  function exposeSetupStateOnRenderContext(instance) {
      const { ctx, setupState } = instance;
      Object.keys(toRaw(setupState)).forEach(key => {
          if (!setupState.__isScriptSetup) {
              if (key[0] === '$' || key[0] === '_') {
                  warn$1(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" ` +
                      `which are reserved prefixes for Vue internals.`);
                  return;
              }
              Object.defineProperty(ctx, key, {
                  enumerable: true,
                  configurable: true,
                  get: () => setupState[key],
                  set: NOOP
              });
          }
      });
  }

  const emptyAppContext = createAppContext();
  let uid$1 = 0;
  function createComponentInstance(vnode, parent, suspense) {
      const type = vnode.type;
      // inherit parent app context - or - if root, adopt from root vnode
      const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
      const instance = {
          uid: uid$1++,
          vnode,
          type,
          parent,
          appContext,
          root: null,
          next: null,
          subTree: null,
          update: null,
          scope: new EffectScope(true /* detached */),
          render: null,
          proxy: null,
          exposed: null,
          exposeProxy: null,
          withProxy: null,
          provides: parent ? parent.provides : Object.create(appContext.provides),
          accessCache: null,
          renderCache: [],
          // local resovled assets
          components: null,
          directives: null,
          // resolved props and emits options
          propsOptions: normalizePropsOptions(type, appContext),
          emitsOptions: normalizeEmitsOptions(type, appContext),
          // emit
          emit: null,
          emitted: null,
          // props default value
          propsDefaults: EMPTY_OBJ,
          // inheritAttrs
          inheritAttrs: type.inheritAttrs,
          // state
          ctx: EMPTY_OBJ,
          data: EMPTY_OBJ,
          props: EMPTY_OBJ,
          attrs: EMPTY_OBJ,
          slots: EMPTY_OBJ,
          refs: EMPTY_OBJ,
          setupState: EMPTY_OBJ,
          setupContext: null,
          // suspense related
          suspense,
          suspenseId: suspense ? suspense.pendingId : 0,
          asyncDep: null,
          asyncResolved: false,
          // lifecycle hooks
          // not using enums here because it results in computed properties
          isMounted: false,
          isUnmounted: false,
          isDeactivated: false,
          bc: null,
          c: null,
          bm: null,
          m: null,
          bu: null,
          u: null,
          um: null,
          bum: null,
          da: null,
          a: null,
          rtg: null,
          rtc: null,
          ec: null,
          sp: null
      };
      {
          instance.ctx = createDevRenderContext(instance);
      }
      instance.root = parent ? parent.root : instance;
      instance.emit = emit$1.bind(null, instance);
      // apply custom element special handling
      if (vnode.ce) {
          vnode.ce(instance);
      }
      return instance;
  }
  let currentInstance = null;
  const getCurrentInstance = () => currentInstance || currentRenderingInstance;
  const setCurrentInstance = (instance) => {
      currentInstance = instance;
      instance.scope.on();
  };
  const unsetCurrentInstance = () => {
      currentInstance && currentInstance.scope.off();
      currentInstance = null;
  };
  const isBuiltInTag = /*#__PURE__*/ makeMap('slot,component');
  function validateComponentName(name, config) {
      const appIsNativeTag = config.isNativeTag || NO;
      if (isBuiltInTag(name) || appIsNativeTag(name)) {
          warn$1('Do not use built-in or reserved HTML elements as component id: ' + name);
      }
  }
  function isStatefulComponent(instance) {
      return instance.vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */;
  }
  let isInSSRComponentSetup = false;
  function setupComponent(instance, isSSR = false) {
      isInSSRComponentSetup = isSSR;
      const { props, children } = instance.vnode;
      const isStateful = isStatefulComponent(instance);
      initProps(instance, props, isStateful, isSSR);
      initSlots(instance, children);
      const setupResult = isStateful
          ? setupStatefulComponent(instance, isSSR)
          : undefined;
      isInSSRComponentSetup = false;
      return setupResult;
  }
  function setupStatefulComponent(instance, isSSR) {
      const Component = instance.type;
      {
          if (Component.name) {
              validateComponentName(Component.name, instance.appContext.config);
          }
          if (Component.components) {
              const names = Object.keys(Component.components);
              for (let i = 0; i < names.length; i++) {
                  validateComponentName(names[i], instance.appContext.config);
              }
          }
          if (Component.directives) {
              const names = Object.keys(Component.directives);
              for (let i = 0; i < names.length; i++) {
                  validateDirectiveName(names[i]);
              }
          }
          if (Component.compilerOptions && isRuntimeOnly()) {
              warn$1(`"compilerOptions" is only supported when using a build of Vue that ` +
                  `includes the runtime compiler. Since you are using a runtime-only ` +
                  `build, the options should be passed via your build tool config instead.`);
          }
      }
      // 0. create render proxy property access cache
      instance.accessCache = Object.create(null);
      // 1. create public instance / render proxy
      // also mark it raw so it's never observed
      instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
      {
          exposePropsOnRenderContext(instance);
      }
      // 2. call setup()
      const { setup } = Component;
      if (setup) {
          const setupContext = (instance.setupContext =
              setup.length > 1 ? createSetupContext(instance) : null);
          setCurrentInstance(instance);
          pauseTracking();
          const setupResult = callWithErrorHandling(setup, instance, 0 /* SETUP_FUNCTION */, [shallowReadonly(instance.props) , setupContext]);
          resetTracking();
          unsetCurrentInstance();
          if (isPromise(setupResult)) {
              setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
              if (isSSR) {
                  // return the promise so server-renderer can wait on it
                  return setupResult
                      .then((resolvedResult) => {
                      handleSetupResult(instance, resolvedResult, isSSR);
                  })
                      .catch(e => {
                      handleError(e, instance, 0 /* SETUP_FUNCTION */);
                  });
              }
              else {
                  // async setup returned Promise.
                  // bail here and wait for re-entry.
                  instance.asyncDep = setupResult;
              }
          }
          else {
              handleSetupResult(instance, setupResult, isSSR);
          }
      }
      else {
          finishComponentSetup(instance, isSSR);
      }
  }
  function handleSetupResult(instance, setupResult, isSSR) {
      if (isFunction(setupResult)) {
          // setup returned an inline render function
          {
              instance.render = setupResult;
          }
      }
      else if (isObject(setupResult)) {
          if (isVNode(setupResult)) {
              warn$1(`setup() should not return VNodes directly - ` +
                  `return a render function instead.`);
          }
          // setup returned bindings.
          // assuming a render function compiled from template is present.
          {
              instance.devtoolsRawSetupState = setupResult;
          }
          instance.setupState = proxyRefs(setupResult);
          {
              exposeSetupStateOnRenderContext(instance);
          }
      }
      else if (setupResult !== undefined) {
          warn$1(`setup() should return an object. Received: ${setupResult === null ? 'null' : typeof setupResult}`);
      }
      finishComponentSetup(instance, isSSR);
  }
  let compile;
  let installWithProxy;
  /**
   * For runtime-dom to register the compiler.
   * Note the exported method uses any to avoid d.ts relying on the compiler types.
   */
  function registerRuntimeCompiler(_compile) {
      compile = _compile;
      installWithProxy = i => {
          if (i.render._rc) {
              i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
          }
      };
  }
  // dev only
  const isRuntimeOnly = () => !compile;
  function finishComponentSetup(instance, isSSR, skipOptions) {
      const Component = instance.type;
      // template / render function normalization
      // could be already set when returned from setup()
      if (!instance.render) {
          // only do on-the-fly compile if not in SSR - SSR on-the-fly compliation
          // is done by server-renderer
          if (!isSSR && compile && !Component.render) {
              const template = Component.template;
              if (template) {
                  {
                      startMeasure(instance, `compile`);
                  }
                  const { isCustomElement, compilerOptions } = instance.appContext.config;
                  const { delimiters, compilerOptions: componentCompilerOptions } = Component;
                  const finalCompilerOptions = extend(extend({
                      isCustomElement,
                      delimiters
                  }, compilerOptions), componentCompilerOptions);
                  Component.render = compile(template, finalCompilerOptions);
                  {
                      endMeasure(instance, `compile`);
                  }
              }
          }
          instance.render = (Component.render || NOOP);
          // for runtime-compiled render functions using `with` blocks, the render
          // proxy used needs a different `has` handler which is more performant and
          // also only allows a whitelist of globals to fallthrough.
          if (installWithProxy) {
              installWithProxy(instance);
          }
      }
      // support for 2.x options
      {
          setCurrentInstance(instance);
          pauseTracking();
          applyOptions(instance);
          resetTracking();
          unsetCurrentInstance();
      }
      // warn missing template/render
      // the runtime compilation of template in SSR is done by server-render
      if (!Component.render && instance.render === NOOP && !isSSR) {
          /* istanbul ignore if */
          if (!compile && Component.template) {
              warn$1(`Component provided template option but ` +
                  `runtime compilation is not supported in this build of Vue.` +
                  (` Use "vue.global.js" instead.`
                              ) /* should not happen */);
          }
          else {
              warn$1(`Component is missing template or render function.`);
          }
      }
  }
  function createAttrsProxy(instance) {
      return new Proxy(instance.attrs, {
              get(target, key) {
                  markAttrsAccessed();
                  track(instance, "get" /* GET */, '$attrs');
                  return target[key];
              },
              set() {
                  warn$1(`setupContext.attrs is readonly.`);
                  return false;
              },
              deleteProperty() {
                  warn$1(`setupContext.attrs is readonly.`);
                  return false;
              }
          }
          );
  }
  function createSetupContext(instance) {
      const expose = exposed => {
          if (instance.exposed) {
              warn$1(`expose() should be called only once per setup().`);
          }
          instance.exposed = exposed || {};
      };
      let attrs;
      {
          // We use getters in dev in case libs like test-utils overwrite instance
          // properties (overwrites should not be done in prod)
          return Object.freeze({
              get attrs() {
                  return attrs || (attrs = createAttrsProxy(instance));
              },
              get slots() {
                  return shallowReadonly(instance.slots);
              },
              get emit() {
                  return (event, ...args) => instance.emit(event, ...args);
              },
              expose
          });
      }
  }
  function getExposeProxy(instance) {
      if (instance.exposed) {
          return (instance.exposeProxy ||
              (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
                  get(target, key) {
                      if (key in target) {
                          return target[key];
                      }
                      else if (key in publicPropertiesMap) {
                          return publicPropertiesMap[key](instance);
                      }
                  }
              })));
      }
  }
  const classifyRE = /(?:^|[-_])(\w)/g;
  const classify = (str) => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');
  function getComponentName(Component) {
      return isFunction(Component)
          ? Component.displayName || Component.name
          : Component.name;
  }
  /* istanbul ignore next */
  function formatComponentName(instance, Component, isRoot = false) {
      let name = getComponentName(Component);
      if (!name && Component.__file) {
          const match = Component.__file.match(/([^/\\]+)\.\w+$/);
          if (match) {
              name = match[1];
          }
      }
      if (!name && instance && instance.parent) {
          // try to infer the name based on reverse resolution
          const inferFromRegistry = (registry) => {
              for (const key in registry) {
                  if (registry[key] === Component) {
                      return key;
                  }
              }
          };
          name =
              inferFromRegistry(instance.components ||
                  instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
      }
      return name ? classify(name) : isRoot ? `App` : `Anonymous`;
  }
  function isClassComponent(value) {
      return isFunction(value) && '__vccOpts' in value;
  }

  const stack = [];
  function pushWarningContext(vnode) {
      stack.push(vnode);
  }
  function popWarningContext() {
      stack.pop();
  }
  function warn$1(msg, ...args) {
      // avoid props formatting or warn handler tracking deps that might be mutated
      // during patch, leading to infinite recursion.
      pauseTracking();
      const instance = stack.length ? stack[stack.length - 1].component : null;
      const appWarnHandler = instance && instance.appContext.config.warnHandler;
      const trace = getComponentTrace();
      if (appWarnHandler) {
          callWithErrorHandling(appWarnHandler, instance, 11 /* APP_WARN_HANDLER */, [
              msg + args.join(''),
              instance && instance.proxy,
              trace
                  .map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`)
                  .join('\n'),
              trace
          ]);
      }
      else {
          const warnArgs = [`[Vue warn]: ${msg}`, ...args];
          /* istanbul ignore if */
          if (trace.length &&
              // avoid spamming console during tests
              !false) {
              warnArgs.push(`\n`, ...formatTrace(trace));
          }
          console.warn(...warnArgs);
      }
      resetTracking();
  }
  function getComponentTrace() {
      let currentVNode = stack[stack.length - 1];
      if (!currentVNode) {
          return [];
      }
      // we can't just use the stack because it will be incomplete during updates
      // that did not start from the root. Re-construct the parent chain using
      // instance parent pointers.
      const normalizedStack = [];
      while (currentVNode) {
          const last = normalizedStack[0];
          if (last && last.vnode === currentVNode) {
              last.recurseCount++;
          }
          else {
              normalizedStack.push({
                  vnode: currentVNode,
                  recurseCount: 0
              });
          }
          const parentInstance = currentVNode.component && currentVNode.component.parent;
          currentVNode = parentInstance && parentInstance.vnode;
      }
      return normalizedStack;
  }
  /* istanbul ignore next */
  function formatTrace(trace) {
      const logs = [];
      trace.forEach((entry, i) => {
          logs.push(...(i === 0 ? [] : [`\n`]), ...formatTraceEntry(entry));
      });
      return logs;
  }
  function formatTraceEntry({ vnode, recurseCount }) {
      const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
      const isRoot = vnode.component ? vnode.component.parent == null : false;
      const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
      const close = `>` + postfix;
      return vnode.props
          ? [open, ...formatProps(vnode.props), close]
          : [open + close];
  }
  /* istanbul ignore next */
  function formatProps(props) {
      const res = [];
      const keys = Object.keys(props);
      keys.slice(0, 3).forEach(key => {
          res.push(...formatProp(key, props[key]));
      });
      if (keys.length > 3) {
          res.push(` ...`);
      }
      return res;
  }
  /* istanbul ignore next */
  function formatProp(key, value, raw) {
      if (isString(value)) {
          value = JSON.stringify(value);
          return raw ? value : [`${key}=${value}`];
      }
      else if (typeof value === 'number' ||
          typeof value === 'boolean' ||
          value == null) {
          return raw ? value : [`${key}=${value}`];
      }
      else if (isRef(value)) {
          value = formatProp(key, toRaw(value.value), true);
          return raw ? value : [`${key}=Ref<`, value, `>`];
      }
      else if (isFunction(value)) {
          return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
      }
      else {
          value = toRaw(value);
          return raw ? value : [`${key}=`, value];
      }
  }

  const ErrorTypeStrings = {
      ["sp" /* SERVER_PREFETCH */]: 'serverPrefetch hook',
      ["bc" /* BEFORE_CREATE */]: 'beforeCreate hook',
      ["c" /* CREATED */]: 'created hook',
      ["bm" /* BEFORE_MOUNT */]: 'beforeMount hook',
      ["m" /* MOUNTED */]: 'mounted hook',
      ["bu" /* BEFORE_UPDATE */]: 'beforeUpdate hook',
      ["u" /* UPDATED */]: 'updated',
      ["bum" /* BEFORE_UNMOUNT */]: 'beforeUnmount hook',
      ["um" /* UNMOUNTED */]: 'unmounted hook',
      ["a" /* ACTIVATED */]: 'activated hook',
      ["da" /* DEACTIVATED */]: 'deactivated hook',
      ["ec" /* ERROR_CAPTURED */]: 'errorCaptured hook',
      ["rtc" /* RENDER_TRACKED */]: 'renderTracked hook',
      ["rtg" /* RENDER_TRIGGERED */]: 'renderTriggered hook',
      [0 /* SETUP_FUNCTION */]: 'setup function',
      [1 /* RENDER_FUNCTION */]: 'render function',
      [2 /* WATCH_GETTER */]: 'watcher getter',
      [3 /* WATCH_CALLBACK */]: 'watcher callback',
      [4 /* WATCH_CLEANUP */]: 'watcher cleanup function',
      [5 /* NATIVE_EVENT_HANDLER */]: 'native event handler',
      [6 /* COMPONENT_EVENT_HANDLER */]: 'component event handler',
      [7 /* VNODE_HOOK */]: 'vnode hook',
      [8 /* DIRECTIVE_HOOK */]: 'directive hook',
      [9 /* TRANSITION_HOOK */]: 'transition hook',
      [10 /* APP_ERROR_HANDLER */]: 'app errorHandler',
      [11 /* APP_WARN_HANDLER */]: 'app warnHandler',
      [12 /* FUNCTION_REF */]: 'ref function',
      [13 /* ASYNC_COMPONENT_LOADER */]: 'async component loader',
      [14 /* SCHEDULER */]: 'scheduler flush. This is likely a Vue internals bug. ' +
          'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-next'
  };
  function callWithErrorHandling(fn, instance, type, args) {
      let res;
      try {
          res = args ? fn(...args) : fn();
      }
      catch (err) {
          handleError(err, instance, type);
      }
      return res;
  }
  function callWithAsyncErrorHandling(fn, instance, type, args) {
      if (isFunction(fn)) {
          const res = callWithErrorHandling(fn, instance, type, args);
          if (res && isPromise(res)) {
              res.catch(err => {
                  handleError(err, instance, type);
              });
          }
          return res;
      }
      const values = [];
      for (let i = 0; i < fn.length; i++) {
          values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
      }
      return values;
  }
  function handleError(err, instance, type, throwInDev = true) {
      const contextVNode = instance ? instance.vnode : null;
      if (instance) {
          let cur = instance.parent;
          // the exposed instance is the render proxy to keep it consistent with 2.x
          const exposedInstance = instance.proxy;
          // in production the hook receives only the error code
          const errorInfo = ErrorTypeStrings[type] ;
          while (cur) {
              const errorCapturedHooks = cur.ec;
              if (errorCapturedHooks) {
                  for (let i = 0; i < errorCapturedHooks.length; i++) {
                      if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
                          return;
                      }
                  }
              }
              cur = cur.parent;
          }
          // app-level handling
          const appErrorHandler = instance.appContext.config.errorHandler;
          if (appErrorHandler) {
              callWithErrorHandling(appErrorHandler, null, 10 /* APP_ERROR_HANDLER */, [err, exposedInstance, errorInfo]);
              return;
          }
      }
      logError(err, type, contextVNode, throwInDev);
  }
  function logError(err, type, contextVNode, throwInDev = true) {
      {
          const info = ErrorTypeStrings[type];
          if (contextVNode) {
              pushWarningContext(contextVNode);
          }
          warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
          if (contextVNode) {
              popWarningContext();
          }
          // crash in dev by default so it's more noticeable
          if (throwInDev) {
              throw err;
          }
          else {
              console.error(err);
          }
      }
  }

  let isFlushing = false;
  let isFlushPending = false;
  const queue = [];
  let flushIndex = 0;
  const pendingPreFlushCbs = [];
  let activePreFlushCbs = null;
  let preFlushIndex = 0;
  const pendingPostFlushCbs = [];
  let activePostFlushCbs = null;
  let postFlushIndex = 0;
  const resolvedPromise = Promise.resolve();
  let currentFlushPromise = null;
  let currentPreFlushParentJob = null;
  const RECURSION_LIMIT = 100;
  function nextTick(fn) {
      const p = currentFlushPromise || resolvedPromise;
      return fn ? p.then(this ? fn.bind(this) : fn) : p;
  }
  // #2768
  // Use binary-search to find a suitable position in the queue,
  // so that the queue maintains the increasing order of job's id,
  // which can prevent the job from being skipped and also can avoid repeated patching.
  function findInsertionIndex(id) {
      // the start index should be `flushIndex + 1`
      let start = flushIndex + 1;
      let end = queue.length;
      while (start < end) {
          const middle = (start + end) >>> 1;
          const middleJobId = getId(queue[middle]);
          middleJobId < id ? (start = middle + 1) : (end = middle);
      }
      return start;
  }
  function queueJob(job) {
      // the dedupe search uses the startIndex argument of Array.includes()
      // by default the search index includes the current job that is being run
      // so it cannot recursively trigger itself again.
      // if the job is a watch() callback, the search will start with a +1 index to
      // allow it recursively trigger itself - it is the user's responsibility to
      // ensure it doesn't end up in an infinite loop.
      if ((!queue.length ||
          !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) &&
          job !== currentPreFlushParentJob) {
          if (job.id == null) {
              queue.push(job);
          }
          else {
              queue.splice(findInsertionIndex(job.id), 0, job);
          }
          queueFlush();
      }
  }
  function queueFlush() {
      if (!isFlushing && !isFlushPending) {
          isFlushPending = true;
          currentFlushPromise = resolvedPromise.then(flushJobs);
      }
  }
  function invalidateJob(job) {
      const i = queue.indexOf(job);
      if (i > flushIndex) {
          queue.splice(i, 1);
      }
  }
  function queueCb(cb, activeQueue, pendingQueue, index) {
      if (!isArray(cb)) {
          if (!activeQueue ||
              !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
              pendingQueue.push(cb);
          }
      }
      else {
          // if cb is an array, it is a component lifecycle hook which can only be
          // triggered by a job, which is already deduped in the main queue, so
          // we can skip duplicate check here to improve perf
          pendingQueue.push(...cb);
      }
      queueFlush();
  }
  function queuePreFlushCb(cb) {
      queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
  }
  function queuePostFlushCb(cb) {
      queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
  }
  function flushPreFlushCbs(seen, parentJob = null) {
      if (pendingPreFlushCbs.length) {
          currentPreFlushParentJob = parentJob;
          activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
          pendingPreFlushCbs.length = 0;
          {
              seen = seen || new Map();
          }
          for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
              if (checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex])) {
                  continue;
              }
              activePreFlushCbs[preFlushIndex]();
          }
          activePreFlushCbs = null;
          preFlushIndex = 0;
          currentPreFlushParentJob = null;
          // recursively flush until it drains
          flushPreFlushCbs(seen, parentJob);
      }
  }
  function flushPostFlushCbs(seen) {
      if (pendingPostFlushCbs.length) {
          const deduped = [...new Set(pendingPostFlushCbs)];
          pendingPostFlushCbs.length = 0;
          // #1947 already has active queue, nested flushPostFlushCbs call
          if (activePostFlushCbs) {
              activePostFlushCbs.push(...deduped);
              return;
          }
          activePostFlushCbs = deduped;
          {
              seen = seen || new Map();
          }
          activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
          for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
              if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
                  continue;
              }
              activePostFlushCbs[postFlushIndex]();
          }
          activePostFlushCbs = null;
          postFlushIndex = 0;
      }
  }
  const getId = (job) => job.id == null ? Infinity : job.id;
  function flushJobs(seen) {
      isFlushPending = false;
      isFlushing = true;
      {
          seen = seen || new Map();
      }
      flushPreFlushCbs(seen);
      // Sort queue before flush.
      // This ensures that:
      // 1. Components are updated from parent to child. (because parent is always
      //    created before the child so its render effect will have smaller
      //    priority number)
      // 2. If a component is unmounted during a parent component's update,
      //    its update can be skipped.
      queue.sort((a, b) => getId(a) - getId(b));
      // conditional usage of checkRecursiveUpdate must be determined out of
      // try ... catch block since Rollup by default de-optimizes treeshaking
      // inside try-catch. This can leave all warning code unshaked. Although
      // they would get eventually shaken by a minifier like terser, some minifiers
      // would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)
      const check = (job) => checkRecursiveUpdates(seen, job)
          ;
      try {
          for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
              const job = queue[flushIndex];
              if (job && job.active !== false) {
                  if (true && check(job)) {
                      continue;
                  }
                  // console.log(`running:`, job.id)
                  callWithErrorHandling(job, null, 14 /* SCHEDULER */);
              }
          }
      }
      finally {
          flushIndex = 0;
          queue.length = 0;
          flushPostFlushCbs(seen);
          isFlushing = false;
          currentFlushPromise = null;
          // some postFlushCb queued jobs!
          // keep flushing until it drains.
          if (queue.length ||
              pendingPreFlushCbs.length ||
              pendingPostFlushCbs.length) {
              flushJobs(seen);
          }
      }
  }
  function checkRecursiveUpdates(seen, fn) {
      if (!seen.has(fn)) {
          seen.set(fn, 1);
      }
      else {
          const count = seen.get(fn);
          if (count > RECURSION_LIMIT) {
              const instance = fn.ownerInstance;
              const componentName = instance && getComponentName(instance.type);
              warn$1(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. ` +
                  `This means you have a reactive effect that is mutating its own ` +
                  `dependencies and thus recursively triggering itself. Possible sources ` +
                  `include component template, render function, updated hook or ` +
                  `watcher source function.`);
              return true;
          }
          else {
              seen.set(fn, count + 1);
          }
      }
  }

  // Simple effect.
  function watchEffect(effect, options) {
      return doWatch(effect, null, options);
  }
  function watchPostEffect(effect, options) {
      return doWatch(effect, null, (Object.assign(options || {}, { flush: 'post' })
          ));
  }
  function watchSyncEffect(effect, options) {
      return doWatch(effect, null, (Object.assign(options || {}, { flush: 'sync' })
          ));
  }
  // initial value for watchers to trigger on undefined initial values
  const INITIAL_WATCHER_VALUE = {};
  // implementation
  function watch(source, cb, options) {
      if (!isFunction(cb)) {
          warn$1(`\`watch(fn, options?)\` signature has been moved to a separate API. ` +
              `Use \`watchEffect(fn, options?)\` instead. \`watch\` now only ` +
              `supports \`watch(source, cb, options?) signature.`);
      }
      return doWatch(source, cb, options);
  }
  function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
      if (!cb) {
          if (immediate !== undefined) {
              warn$1(`watch() "immediate" option is only respected when using the ` +
                  `watch(source, callback, options?) signature.`);
          }
          if (deep !== undefined) {
              warn$1(`watch() "deep" option is only respected when using the ` +
                  `watch(source, callback, options?) signature.`);
          }
      }
      const warnInvalidSource = (s) => {
          warn$1(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, ` +
              `a reactive object, or an array of these types.`);
      };
      const instance = currentInstance;
      let getter;
      let forceTrigger = false;
      let isMultiSource = false;
      if (isRef(source)) {
          getter = () => source.value;
          forceTrigger = !!source._shallow;
      }
      else if (isReactive(source)) {
          getter = () => source;
          deep = true;
      }
      else if (isArray(source)) {
          isMultiSource = true;
          forceTrigger = source.some(isReactive);
          getter = () => source.map(s => {
              if (isRef(s)) {
                  return s.value;
              }
              else if (isReactive(s)) {
                  return traverse(s);
              }
              else if (isFunction(s)) {
                  return callWithErrorHandling(s, instance, 2 /* WATCH_GETTER */);
              }
              else {
                  warnInvalidSource(s);
              }
          });
      }
      else if (isFunction(source)) {
          if (cb) {
              // getter with cb
              getter = () => callWithErrorHandling(source, instance, 2 /* WATCH_GETTER */);
          }
          else {
              // no cb -> simple effect
              getter = () => {
                  if (instance && instance.isUnmounted) {
                      return;
                  }
                  if (cleanup) {
                      cleanup();
                  }
                  return callWithAsyncErrorHandling(source, instance, 3 /* WATCH_CALLBACK */, [onInvalidate]);
              };
          }
      }
      else {
          getter = NOOP;
          warnInvalidSource(source);
      }
      if (cb && deep) {
          const baseGetter = getter;
          getter = () => traverse(baseGetter());
      }
      let cleanup;
      let onInvalidate = (fn) => {
          cleanup = effect.onStop = () => {
              callWithErrorHandling(fn, instance, 4 /* WATCH_CLEANUP */);
          };
      };
      let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
      const job = () => {
          if (!effect.active) {
              return;
          }
          if (cb) {
              // watch(source, cb)
              const newValue = effect.run();
              if (deep ||
                  forceTrigger ||
                  (isMultiSource
                      ? newValue.some((v, i) => hasChanged(v, oldValue[i]))
                      : hasChanged(newValue, oldValue)) ||
                  (false  )) {
                  // cleanup before running cb again
                  if (cleanup) {
                      cleanup();
                  }
                  callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */, [
                      newValue,
                      // pass undefined as the old value when it's changed for the first time
                      oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                      onInvalidate
                  ]);
                  oldValue = newValue;
              }
          }
          else {
              // watchEffect
              effect.run();
          }
      };
      // important: mark the job as a watcher callback so that scheduler knows
      // it is allowed to self-trigger (#1727)
      job.allowRecurse = !!cb;
      let scheduler;
      if (flush === 'sync') {
          scheduler = job; // the scheduler function gets called directly
      }
      else if (flush === 'post') {
          scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
      }
      else {
          // default: 'pre'
          scheduler = () => {
              if (!instance || instance.isMounted) {
                  queuePreFlushCb(job);
              }
              else {
                  // with 'pre' option, the first call must happen before
                  // the component is mounted so it is called synchronously.
                  job();
              }
          };
      }
      const effect = new ReactiveEffect(getter, scheduler);
      {
          effect.onTrack = onTrack;
          effect.onTrigger = onTrigger;
      }
      // initial run
      if (cb) {
          if (immediate) {
              job();
          }
          else {
              oldValue = effect.run();
          }
      }
      else if (flush === 'post') {
          queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
      }
      else {
          effect.run();
      }
      return () => {
          effect.stop();
          if (instance && instance.scope) {
              remove(instance.scope.effects, effect);
          }
      };
  }
  // this.$watch
  function instanceWatch(source, value, options) {
      const publicThis = this.proxy;
      const getter = isString(source)
          ? source.includes('.')
              ? createPathGetter(publicThis, source)
              : () => publicThis[source]
          : source.bind(publicThis, publicThis);
      let cb;
      if (isFunction(value)) {
          cb = value;
      }
      else {
          cb = value.handler;
          options = value;
      }
      const cur = currentInstance;
      setCurrentInstance(this);
      const res = doWatch(getter, cb.bind(publicThis), options);
      if (cur) {
          setCurrentInstance(cur);
      }
      else {
          unsetCurrentInstance();
      }
      return res;
  }
  function createPathGetter(ctx, path) {
      const segments = path.split('.');
      return () => {
          let cur = ctx;
          for (let i = 0; i < segments.length && cur; i++) {
              cur = cur[segments[i]];
          }
          return cur;
      };
  }
  function traverse(value, seen) {
      if (!isObject(value) || value["__v_skip" /* SKIP */]) {
          return value;
      }
      seen = seen || new Set();
      if (seen.has(value)) {
          return value;
      }
      seen.add(value);
      if (isRef(value)) {
          traverse(value.value, seen);
      }
      else if (isArray(value)) {
          for (let i = 0; i < value.length; i++) {
              traverse(value[i], seen);
          }
      }
      else if (isSet(value) || isMap(value)) {
          value.forEach((v) => {
              traverse(v, seen);
          });
      }
      else if (isPlainObject(value)) {
          for (const key in value) {
              traverse(value[key], seen);
          }
      }
      return value;
  }

  // dev only
  const warnRuntimeUsage = (method) => warn$1(`${method}() is a compiler-hint helper that is only usable inside ` +
      `<script setup> of a single file component. Its arguments should be ` +
      `compiled away and passing it at runtime has no effect.`);
  // implementation
  function defineProps() {
      {
          warnRuntimeUsage(`defineProps`);
      }
      return null;
  }
  // implementation
  function defineEmits() {
      {
          warnRuntimeUsage(`defineEmits`);
      }
      return null;
  }
  /**
   * Vue `<script setup>` compiler macro for declaring a component's exposed
   * instance properties when it is accessed by a parent component via template
   * refs.
   *
   * `<script setup>` components are closed by default - i.e. varaibles inside
   * the `<script setup>` scope is not exposed to parent unless explicitly exposed
   * via `defineExpose`.
   *
   * This is only usable inside `<script setup>`, is compiled away in the
   * output and should **not** be actually called at runtime.
   */
  function defineExpose(exposed) {
      {
          warnRuntimeUsage(`defineExpose`);
      }
  }
  /**
   * Vue `<script setup>` compiler macro for providing props default values when
   * using type-based `defineProps` declaration.
   *
   * Example usage:
   * ```ts
   * withDefaults(defineProps<{
   *   size?: number
   *   labels?: string[]
   * }>(), {
   *   size: 3,
   *   labels: () => ['default label']
   * })
   * ```
   *
   * This is only usable inside `<script setup>`, is compiled away in the output
   * and should **not** be actually called at runtime.
   */
  function withDefaults(props, defaults) {
      {
          warnRuntimeUsage(`withDefaults`);
      }
      return null;
  }
  function useSlots() {
      return getContext().slots;
  }
  function useAttrs() {
      return getContext().attrs;
  }
  function getContext() {
      const i = getCurrentInstance();
      if (!i) {
          warn$1(`useContext() called without active instance.`);
      }
      return i.setupContext || (i.setupContext = createSetupContext(i));
  }
  /**
   * Runtime helper for merging default declarations. Imported by compiled code
   * only.
   * @internal
   */
  function mergeDefaults(raw, defaults) {
      const props = isArray(raw)
          ? raw.reduce((normalized, p) => ((normalized[p] = {}), normalized), {})
          : raw;
      for (const key in defaults) {
          const opt = props[key];
          if (opt) {
              if (isArray(opt) || isFunction(opt)) {
                  props[key] = { type: opt, default: defaults[key] };
              }
              else {
                  opt.default = defaults[key];
              }
          }
          else if (opt === null) {
              props[key] = { default: defaults[key] };
          }
          else {
              warn$1(`props default key "${key}" has no corresponding declaration.`);
          }
      }
      return props;
  }
  /**
   * Used to create a proxy for the rest element when destructuring props with
   * defineProps().
   * @internal
   */
  function createPropsRestProxy(props, excludedKeys) {
      const ret = {};
      for (const key in props) {
          if (!excludedKeys.includes(key)) {
              Object.defineProperty(ret, key, {
                  enumerable: true,
                  get: () => props[key]
              });
          }
      }
      return ret;
  }
  /**
   * `<script setup>` helper for persisting the current instance context over
   * async/await flows.
   *
   * `@vue/compiler-sfc` converts the following:
   *
   * ```ts
   * const x = await foo()
   * ```
   *
   * into:
   *
   * ```ts
   * let __temp, __restore
   * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
   * ```
   * @internal
   */
  function withAsyncContext(getAwaitable) {
      const ctx = getCurrentInstance();
      if (!ctx) {
          warn$1(`withAsyncContext called without active current instance. ` +
              `This is likely a bug.`);
      }
      let awaitable = getAwaitable();
      unsetCurrentInstance();
      if (isPromise(awaitable)) {
          awaitable = awaitable.catch(e => {
              setCurrentInstance(ctx);
              throw e;
          });
      }
      return [awaitable, () => setCurrentInstance(ctx)];
  }

  // Actual implementation
  function h(type, propsOrChildren, children) {
      const l = arguments.length;
      if (l === 2) {
          if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
              // single vnode without props
              if (isVNode(propsOrChildren)) {
                  return createVNode(type, null, [propsOrChildren]);
              }
              // props without children
              return createVNode(type, propsOrChildren);
          }
          else {
              // omit props
              return createVNode(type, null, propsOrChildren);
          }
      }
      else {
          if (l > 3) {
              children = Array.prototype.slice.call(arguments, 2);
          }
          else if (l === 3 && isVNode(children)) {
              children = [children];
          }
          return createVNode(type, propsOrChildren, children);
      }
  }

  const ssrContextKey = Symbol(`ssrContext` );
  const useSSRContext = () => {
      {
          warn$1(`useSSRContext() is not supported in the global build.`);
      }
  };

  function initCustomFormatter() {
      /* eslint-disable no-restricted-globals */
      if (typeof window === 'undefined') {
          return;
      }
      const vueStyle = { style: 'color:#3ba776' };
      const numberStyle = { style: 'color:#0b1bc9' };
      const stringStyle = { style: 'color:#b62e24' };
      const keywordStyle = { style: 'color:#9d288c' };
      // custom formatter for Chrome
      // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
      const formatter = {
          header(obj) {
              // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
              if (!isObject(obj)) {
                  return null;
              }
              if (obj.__isVue) {
                  return ['div', vueStyle, `VueInstance`];
              }
              else if (isRef(obj)) {
                  return [
                      'div',
                      {},
                      ['span', vueStyle, genRefFlag(obj)],
                      '<',
                      formatValue(obj.value),
                      `>`
                  ];
              }
              else if (isReactive(obj)) {
                  return [
                      'div',
                      {},
                      ['span', vueStyle, 'Reactive'],
                      '<',
                      formatValue(obj),
                      `>${isReadonly(obj) ? ` (readonly)` : ``}`
                  ];
              }
              else if (isReadonly(obj)) {
                  return [
                      'div',
                      {},
                      ['span', vueStyle, 'Readonly'],
                      '<',
                      formatValue(obj),
                      '>'
                  ];
              }
              return null;
          },
          hasBody(obj) {
              return obj && obj.__isVue;
          },
          body(obj) {
              if (obj && obj.__isVue) {
                  return [
                      'div',
                      {},
                      ...formatInstance(obj.$)
                  ];
              }
          }
      };
      function formatInstance(instance) {
          const blocks = [];
          if (instance.type.props && instance.props) {
              blocks.push(createInstanceBlock('props', toRaw(instance.props)));
          }
          if (instance.setupState !== EMPTY_OBJ) {
              blocks.push(createInstanceBlock('setup', instance.setupState));
          }
          if (instance.data !== EMPTY_OBJ) {
              blocks.push(createInstanceBlock('data', toRaw(instance.data)));
          }
          const computed = extractKeys(instance, 'computed');
          if (computed) {
              blocks.push(createInstanceBlock('computed', computed));
          }
          const injected = extractKeys(instance, 'inject');
          if (injected) {
              blocks.push(createInstanceBlock('injected', injected));
          }
          blocks.push([
              'div',
              {},
              [
                  'span',
                  {
                      style: keywordStyle.style + ';opacity:0.66'
                  },
                  '$ (internal): '
              ],
              ['object', { object: instance }]
          ]);
          return blocks;
      }
      function createInstanceBlock(type, target) {
          target = extend({}, target);
          if (!Object.keys(target).length) {
              return ['span', {}];
          }
          return [
              'div',
              { style: 'line-height:1.25em;margin-bottom:0.6em' },
              [
                  'div',
                  {
                      style: 'color:#476582'
                  },
                  type
              ],
              [
                  'div',
                  {
                      style: 'padding-left:1.25em'
                  },
                  ...Object.keys(target).map(key => {
                      return [
                          'div',
                          {},
                          ['span', keywordStyle, key + ': '],
                          formatValue(target[key], false)
                      ];
                  })
              ]
          ];
      }
      function formatValue(v, asRaw = true) {
          if (typeof v === 'number') {
              return ['span', numberStyle, v];
          }
          else if (typeof v === 'string') {
              return ['span', stringStyle, JSON.stringify(v)];
          }
          else if (typeof v === 'boolean') {
              return ['span', keywordStyle, v];
          }
          else if (isObject(v)) {
              return ['object', { object: asRaw ? toRaw(v) : v }];
          }
          else {
              return ['span', stringStyle, String(v)];
          }
      }
      function extractKeys(instance, type) {
          const Comp = instance.type;
          if (isFunction(Comp)) {
              return;
          }
          const extracted = {};
          for (const key in instance.ctx) {
              if (isKeyOfType(Comp, key, type)) {
                  extracted[key] = instance.ctx[key];
              }
          }
          return extracted;
      }
      function isKeyOfType(Comp, key, type) {
          const opts = Comp[type];
          if ((isArray(opts) && opts.includes(key)) ||
              (isObject(opts) && key in opts)) {
              return true;
          }
          if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
              return true;
          }
          if (Comp.mixins && Comp.mixins.some(m => isKeyOfType(m, key, type))) {
              return true;
          }
      }
      function genRefFlag(v) {
          if (v._shallow) {
              return `ShallowRef`;
          }
          if (v.effect) {
              return `ComputedRef`;
          }
          return `Ref`;
      }
      if (window.devtoolsFormatters) {
          window.devtoolsFormatters.push(formatter);
      }
      else {
          window.devtoolsFormatters = [formatter];
      }
  }

  function withMemo(memo, render, cache, index) {
      const cached = cache[index];
      if (cached && isMemoSame(cached, memo)) {
          return cached;
      }
      const ret = render();
      // shallow clone
      ret.memo = memo.slice();
      return (cache[index] = ret);
  }
  function isMemoSame(cached, memo) {
      const prev = cached.memo;
      if (prev.length != memo.length) {
          return false;
      }
      for (let i = 0; i < prev.length; i++) {
          if (prev[i] !== memo[i]) {
              return false;
          }
      }
      // make sure to let parent block track it when returning cached
      if (isBlockTreeEnabled > 0 && currentBlock) {
          currentBlock.push(cached);
      }
      return true;
  }

  // Core API ------------------------------------------------------------------
  const version = "3.2.22";
  /**
   * SSR utils for \@vue/server-renderer. Only exposed in cjs builds.
   * @internal
   */
  const ssrUtils = (null);
  /**
   * @internal only exposed in compat builds
   */
  const resolveFilter = null;
  /**
   * @internal only exposed in compat builds.
   */
  const compatUtils = (null);

  const svgNS = 'http://www.w3.org/2000/svg';
  const doc = (typeof document !== 'undefined' ? document : null);
  const staticTemplateCache = new Map();
  const nodeOps = {
      insert: (child, parent, anchor) => {
          parent.insertBefore(child, anchor || null);
      },
      remove: child => {
          const parent = child.parentNode;
          if (parent) {
              parent.removeChild(child);
          }
      },
      createElement: (tag, isSVG, is, props) => {
          const el = isSVG
              ? doc.createElementNS(svgNS, tag)
              : doc.createElement(tag, is ? { is } : undefined);
          if (tag === 'select' && props && props.multiple != null) {
              el.setAttribute('multiple', props.multiple);
          }
          return el;
      },
      createText: text => doc.createTextNode(text),
      createComment: text => doc.createComment(text),
      setText: (node, text) => {
          node.nodeValue = text;
      },
      setElementText: (el, text) => {
          el.textContent = text;
      },
      parentNode: node => node.parentNode,
      nextSibling: node => node.nextSibling,
      querySelector: selector => doc.querySelector(selector),
      setScopeId(el, id) {
          el.setAttribute(id, '');
      },
      cloneNode(el) {
          const cloned = el.cloneNode(true);
          // #3072
          // - in `patchDOMProp`, we store the actual value in the `el._value` property.
          // - normally, elements using `:value` bindings will not be hoisted, but if
          //   the bound value is a constant, e.g. `:value="true"` - they do get
          //   hoisted.
          // - in production, hoisted nodes are cloned when subsequent inserts, but
          //   cloneNode() does not copy the custom property we attached.
          // - This may need to account for other custom DOM properties we attach to
          //   elements in addition to `_value` in the future.
          if (`_value` in el) {
              cloned._value = el._value;
          }
          return cloned;
      },
      // __UNSAFE__
      // Reason: innerHTML.
      // Static content here can only come from compiled templates.
      // As long as the user only uses trusted templates, this is safe.
      insertStaticContent(content, parent, anchor, isSVG) {
          // <parent> before | first ... last | anchor </parent>
          const before = anchor ? anchor.previousSibling : parent.lastChild;
          let template = staticTemplateCache.get(content);
          if (!template) {
              const t = doc.createElement('template');
              t.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
              template = t.content;
              if (isSVG) {
                  // remove outer svg wrapper
                  const wrapper = template.firstChild;
                  while (wrapper.firstChild) {
                      template.appendChild(wrapper.firstChild);
                  }
                  template.removeChild(wrapper);
              }
              staticTemplateCache.set(content, template);
          }
          parent.insertBefore(template.cloneNode(true), anchor);
          return [
              // first
              before ? before.nextSibling : parent.firstChild,
              // last
              anchor ? anchor.previousSibling : parent.lastChild
          ];
      }
  };

  // compiler should normalize class + :class bindings on the same element
  // into a single binding ['staticClass', dynamic]
  function patchClass(el, value, isSVG) {
      // directly setting className should be faster than setAttribute in theory
      // if this is an element during a transition, take the temporary transition
      // classes into account.
      const transitionClasses = el._vtc;
      if (transitionClasses) {
          value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(' ');
      }
      if (value == null) {
          el.removeAttribute('class');
      }
      else if (isSVG) {
          el.setAttribute('class', value);
      }
      else {
          el.className = value;
      }
  }

  function patchStyle(el, prev, next) {
      const style = el.style;
      const isCssString = isString(next);
      if (next && !isCssString) {
          for (const key in next) {
              setStyle(style, key, next[key]);
          }
          if (prev && !isString(prev)) {
              for (const key in prev) {
                  if (next[key] == null) {
                      setStyle(style, key, '');
                  }
              }
          }
      }
      else {
          const currentDisplay = style.display;
          if (isCssString) {
              if (prev !== next) {
                  style.cssText = next;
              }
          }
          else if (prev) {
              el.removeAttribute('style');
          }
          // indicates that the `display` of the element is controlled by `v-show`,
          // so we always keep the current `display` value regardless of the `style`
          // value, thus handing over control to `v-show`.
          if ('_vod' in el) {
              style.display = currentDisplay;
          }
      }
  }
  const importantRE = /\s*!important$/;
  function setStyle(style, name, val) {
      if (isArray(val)) {
          val.forEach(v => setStyle(style, name, v));
      }
      else {
          if (name.startsWith('--')) {
              // custom property definition
              style.setProperty(name, val);
          }
          else {
              const prefixed = autoPrefix(style, name);
              if (importantRE.test(val)) {
                  // !important
                  style.setProperty(hyphenate(prefixed), val.replace(importantRE, ''), 'important');
              }
              else {
                  style[prefixed] = val;
              }
          }
      }
  }
  const prefixes = ['Webkit', 'Moz', 'ms'];
  const prefixCache = {};
  function autoPrefix(style, rawName) {
      const cached = prefixCache[rawName];
      if (cached) {
          return cached;
      }
      let name = camelize(rawName);
      if (name !== 'filter' && name in style) {
          return (prefixCache[rawName] = name);
      }
      name = capitalize(name);
      for (let i = 0; i < prefixes.length; i++) {
          const prefixed = prefixes[i] + name;
          if (prefixed in style) {
              return (prefixCache[rawName] = prefixed);
          }
      }
      return rawName;
  }

  const xlinkNS = 'http://www.w3.org/1999/xlink';
  function patchAttr(el, key, value, isSVG, instance) {
      if (isSVG && key.startsWith('xlink:')) {
          if (value == null) {
              el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
          }
          else {
              el.setAttributeNS(xlinkNS, key, value);
          }
      }
      else {
          // note we are only checking boolean attributes that don't have a
          // corresponding dom prop of the same name here.
          const isBoolean = isSpecialBooleanAttr(key);
          if (value == null || (isBoolean && !includeBooleanAttr(value))) {
              el.removeAttribute(key);
          }
          else {
              el.setAttribute(key, isBoolean ? '' : value);
          }
      }
  }

  // __UNSAFE__
  // functions. The user is responsible for using them with only trusted content.
  function patchDOMProp(el, key, value, 
  // the following args are passed only due to potential innerHTML/textContent
  // overriding existing VNodes, in which case the old tree must be properly
  // unmounted.
  prevChildren, parentComponent, parentSuspense, unmountChildren) {
      if (key === 'innerHTML' || key === 'textContent') {
          if (prevChildren) {
              unmountChildren(prevChildren, parentComponent, parentSuspense);
          }
          el[key] = value == null ? '' : value;
          return;
      }
      if (key === 'value' && el.tagName !== 'PROGRESS') {
          // store value as _value as well since
          // non-string values will be stringified.
          el._value = value;
          const newValue = value == null ? '' : value;
          if (el.value !== newValue) {
              el.value = newValue;
          }
          if (value == null) {
              el.removeAttribute(key);
          }
          return;
      }
      if (value === '' || value == null) {
          const type = typeof el[key];
          if (type === 'boolean') {
              // e.g. <select multiple> compiles to { multiple: '' }
              el[key] = includeBooleanAttr(value);
              return;
          }
          else if (value == null && type === 'string') {
              // e.g. <div :id="null">
              el[key] = '';
              el.removeAttribute(key);
              return;
          }
          else if (type === 'number') {
              // e.g. <img :width="null">
              // the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
              try {
                  el[key] = 0;
              }
              catch (_a) { }
              el.removeAttribute(key);
              return;
          }
      }
      // some properties perform value validation and throw
      try {
          el[key] = value;
      }
      catch (e) {
          {
              warn$1(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: ` +
                  `value ${value} is invalid.`, e);
          }
      }
  }

  // Async edge case fix requires storing an event listener's attach timestamp.
  let _getNow = Date.now;
  let skipTimestampCheck = false;
  if (typeof window !== 'undefined') {
      // Determine what event timestamp the browser is using. Annoyingly, the
      // timestamp can either be hi-res (relative to page load) or low-res
      // (relative to UNIX epoch), so in order to compare time we have to use the
      // same timestamp type when saving the flush timestamp.
      if (_getNow() > document.createEvent('Event').timeStamp) {
          // if the low-res timestamp which is bigger than the event timestamp
          // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
          // and we need to use the hi-res version for event listeners as well.
          _getNow = () => performance.now();
      }
      // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
      // and does not fire microtasks in between event propagation, so safe to exclude.
      const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
      skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
  }
  // To avoid the overhead of repeatedly calling performance.now(), we cache
  // and use the same timestamp for all event listeners attached in the same tick.
  let cachedNow = 0;
  const p = Promise.resolve();
  const reset = () => {
      cachedNow = 0;
  };
  const getNow = () => cachedNow || (p.then(reset), (cachedNow = _getNow()));
  function addEventListener(el, event, handler, options) {
      el.addEventListener(event, handler, options);
  }
  function removeEventListener(el, event, handler, options) {
      el.removeEventListener(event, handler, options);
  }
  function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
      // vei = vue event invokers
      const invokers = el._vei || (el._vei = {});
      const existingInvoker = invokers[rawName];
      if (nextValue && existingInvoker) {
          // patch
          existingInvoker.value = nextValue;
      }
      else {
          const [name, options] = parseName(rawName);
          if (nextValue) {
              // add
              const invoker = (invokers[rawName] = createInvoker(nextValue, instance));
              addEventListener(el, name, invoker, options);
          }
          else if (existingInvoker) {
              // remove
              removeEventListener(el, name, existingInvoker, options);
              invokers[rawName] = undefined;
          }
      }
  }
  const optionsModifierRE = /(?:Once|Passive|Capture)$/;
  function parseName(name) {
      let options;
      if (optionsModifierRE.test(name)) {
          options = {};
          let m;
          while ((m = name.match(optionsModifierRE))) {
              name = name.slice(0, name.length - m[0].length);
              options[m[0].toLowerCase()] = true;
          }
      }
      return [hyphenate(name.slice(2)), options];
  }
  function createInvoker(initialValue, instance) {
      const invoker = (e) => {
          // async edge case #6566: inner click event triggers patch, event handler
          // attached to outer element during patch, and triggered again. This
          // happens because browsers fire microtask ticks between event propagation.
          // the solution is simple: we save the timestamp when a handler is attached,
          // and the handler would only fire if the event passed to it was fired
          // AFTER it was attached.
          const timeStamp = e.timeStamp || _getNow();
          if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
              callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* NATIVE_EVENT_HANDLER */, [e]);
          }
      };
      invoker.value = initialValue;
      invoker.attached = getNow();
      return invoker;
  }
  function patchStopImmediatePropagation(e, value) {
      if (isArray(value)) {
          const originalStop = e.stopImmediatePropagation;
          e.stopImmediatePropagation = () => {
              originalStop.call(e);
              e._stopped = true;
          };
          return value.map(fn => (e) => !e._stopped && fn(e));
      }
      else {
          return value;
      }
  }

  const nativeOnRE = /^on[a-z]/;
  const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
      if (key === 'class') {
          patchClass(el, nextValue, isSVG);
      }
      else if (key === 'style') {
          patchStyle(el, prevValue, nextValue);
      }
      else if (isOn(key)) {
          // ignore v-model listeners
          if (!isModelListener(key)) {
              patchEvent(el, key, prevValue, nextValue, parentComponent);
          }
      }
      else if (key[0] === '.'
          ? ((key = key.slice(1)), true)
          : key[0] === '^'
              ? ((key = key.slice(1)), false)
              : shouldSetAsProp(el, key, nextValue, isSVG)) {
          patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
      }
      else {
          // special case for <input v-model type="checkbox"> with
          // :true-value & :false-value
          // store value as dom properties since non-string values will be
          // stringified.
          if (key === 'true-value') {
              el._trueValue = nextValue;
          }
          else if (key === 'false-value') {
              el._falseValue = nextValue;
          }
          patchAttr(el, key, nextValue, isSVG);
      }
  };
  function shouldSetAsProp(el, key, value, isSVG) {
      if (isSVG) {
          // most keys must be set as attribute on svg elements to work
          // ...except innerHTML & textContent
          if (key === 'innerHTML' || key === 'textContent') {
              return true;
          }
          // or native onclick with function values
          if (key in el && nativeOnRE.test(key) && isFunction(value)) {
              return true;
          }
          return false;
      }
      // spellcheck and draggable are numerated attrs, however their
      // corresponding DOM properties are actually booleans - this leads to
      // setting it with a string "false" value leading it to be coerced to
      // `true`, so we need to always treat them as attributes.
      // Note that `contentEditable` doesn't have this problem: its DOM
      // property is also enumerated string values.
      if (key === 'spellcheck' || key === 'draggable') {
          return false;
      }
      // #1787, #2840 form property on form elements is readonly and must be set as
      // attribute.
      if (key === 'form') {
          return false;
      }
      // #1526 <input list> must be set as attribute
      if (key === 'list' && el.tagName === 'INPUT') {
          return false;
      }
      // #2766 <textarea type> must be set as attribute
      if (key === 'type' && el.tagName === 'TEXTAREA') {
          return false;
      }
      // native onclick with string value, must be set as attribute
      if (nativeOnRE.test(key) && isString(value)) {
          return false;
      }
      return key in el;
  }

  function defineCustomElement(options, hydate) {
      const Comp = defineComponent(options);
      class VueCustomElement extends VueElement {
          constructor(initialProps) {
              super(Comp, initialProps, hydate);
          }
      }
      VueCustomElement.def = Comp;
      return VueCustomElement;
  }
  const defineSSRCustomElement = ((options) => {
      // @ts-ignore
      return defineCustomElement(options, hydrate);
  });
  const BaseClass = (typeof HTMLElement !== 'undefined' ? HTMLElement : class {
  });
  class VueElement extends BaseClass {
      constructor(_def, _props = {}, hydrate) {
          super();
          this._def = _def;
          this._props = _props;
          /**
           * @internal
           */
          this._instance = null;
          this._connected = false;
          this._resolved = false;
          this._numberProps = null;
          if (this.shadowRoot && hydrate) {
              hydrate(this._createVNode(), this.shadowRoot);
          }
          else {
              if (this.shadowRoot) {
                  warn$1(`Custom element has pre-rendered declarative shadow root but is not ` +
                      `defined as hydratable. Use \`defineSSRCustomElement\`.`);
              }
              this.attachShadow({ mode: 'open' });
          }
      }
      connectedCallback() {
          this._connected = true;
          if (!this._instance) {
              this._resolveDef();
          }
      }
      disconnectedCallback() {
          this._connected = false;
          nextTick(() => {
              if (!this._connected) {
                  render(null, this.shadowRoot);
                  this._instance = null;
              }
          });
      }
      /**
       * resolve inner component definition (handle possible async component)
       */
      _resolveDef() {
          if (this._resolved) {
              return;
          }
          this._resolved = true;
          // set initial attrs
          for (let i = 0; i < this.attributes.length; i++) {
              this._setAttr(this.attributes[i].name);
          }
          // watch future attr changes
          new MutationObserver(mutations => {
              for (const m of mutations) {
                  this._setAttr(m.attributeName);
              }
          }).observe(this, { attributes: true });
          const resolve = (def) => {
              const { props, styles } = def;
              const hasOptions = !isArray(props);
              const rawKeys = props ? (hasOptions ? Object.keys(props) : props) : [];
              // cast Number-type props set before resolve
              let numberProps;
              if (hasOptions) {
                  for (const key in this._props) {
                      const opt = props[key];
                      if (opt === Number || (opt && opt.type === Number)) {
                          this._props[key] = toNumber(this._props[key]);
                          (numberProps || (numberProps = Object.create(null)))[key] = true;
                      }
                  }
              }
              this._numberProps = numberProps;
              // check if there are props set pre-upgrade or connect
              for (const key of Object.keys(this)) {
                  if (key[0] !== '_') {
                      this._setProp(key, this[key], true, false);
                  }
              }
              // defining getter/setters on prototype
              for (const key of rawKeys.map(camelize)) {
                  Object.defineProperty(this, key, {
                      get() {
                          return this._getProp(key);
                      },
                      set(val) {
                          this._setProp(key, val);
                      }
                  });
              }
              // apply CSS
              this._applyStyles(styles);
              // initial render
              this._update();
          };
          const asyncDef = this._def.__asyncLoader;
          if (asyncDef) {
              asyncDef().then(resolve);
          }
          else {
              resolve(this._def);
          }
      }
      _setAttr(key) {
          let value = this.getAttribute(key);
          if (this._numberProps && this._numberProps[key]) {
              value = toNumber(value);
          }
          this._setProp(camelize(key), value, false);
      }
      /**
       * @internal
       */
      _getProp(key) {
          return this._props[key];
      }
      /**
       * @internal
       */
      _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
          if (val !== this._props[key]) {
              this._props[key] = val;
              if (shouldUpdate && this._instance) {
                  this._update();
              }
              // reflect
              if (shouldReflect) {
                  if (val === true) {
                      this.setAttribute(hyphenate(key), '');
                  }
                  else if (typeof val === 'string' || typeof val === 'number') {
                      this.setAttribute(hyphenate(key), val + '');
                  }
                  else if (!val) {
                      this.removeAttribute(hyphenate(key));
                  }
              }
          }
      }
      _update() {
          render(this._createVNode(), this.shadowRoot);
      }
      _createVNode() {
          const vnode = createVNode(this._def, extend({}, this._props));
          if (!this._instance) {
              vnode.ce = instance => {
                  this._instance = instance;
                  instance.isCE = true;
                  // HMR
                  {
                      instance.ceReload = newStyles => {
                          // alawys reset styles
                          if (this._styles) {
                              this._styles.forEach(s => this.shadowRoot.removeChild(s));
                              this._styles.length = 0;
                          }
                          this._applyStyles(newStyles);
                          // if this is an async component, ceReload is called from the inner
                          // component so no need to reload the async wrapper
                          if (!this._def.__asyncLoader) {
                              // reload
                              this._instance = null;
                              this._update();
                          }
                      };
                  }
                  // intercept emit
                  instance.emit = (event, ...args) => {
                      this.dispatchEvent(new CustomEvent(event, {
                          detail: args
                      }));
                  };
                  // locate nearest Vue custom element parent for provide/inject
                  let parent = this;
                  while ((parent =
                      parent && (parent.parentNode || parent.host))) {
                      if (parent instanceof VueElement) {
                          instance.parent = parent._instance;
                          break;
                      }
                  }
              };
          }
          return vnode;
      }
      _applyStyles(styles) {
          if (styles) {
              styles.forEach(css => {
                  const s = document.createElement('style');
                  s.textContent = css;
                  this.shadowRoot.appendChild(s);
                  // record for HMR
                  {
                      (this._styles || (this._styles = [])).push(s);
                  }
              });
          }
      }
  }

  function useCssModule(name = '$style') {
      /* istanbul ignore else */
      {
          {
              warn$1(`useCssModule() is not supported in the global build.`);
          }
          return EMPTY_OBJ;
      }
  }

  /**
   * Runtime helper for SFC's CSS variable injection feature.
   * @private
   */
  function useCssVars(getter) {
      const instance = getCurrentInstance();
      /* istanbul ignore next */
      if (!instance) {
          warn$1(`useCssVars is called without current active component instance.`);
          return;
      }
      const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
      watchPostEffect(setVars);
      onMounted(() => {
          const ob = new MutationObserver(setVars);
          ob.observe(instance.subTree.el.parentNode, { childList: true });
          onUnmounted(() => ob.disconnect());
      });
  }
  function setVarsOnVNode(vnode, vars) {
      if (vnode.shapeFlag & 128 /* SUSPENSE */) {
          const suspense = vnode.suspense;
          vnode = suspense.activeBranch;
          if (suspense.pendingBranch && !suspense.isHydrating) {
              suspense.effects.push(() => {
                  setVarsOnVNode(suspense.activeBranch, vars);
              });
          }
      }
      // drill down HOCs until it's a non-component vnode
      while (vnode.component) {
          vnode = vnode.component.subTree;
      }
      if (vnode.shapeFlag & 1 /* ELEMENT */ && vnode.el) {
          setVarsOnNode(vnode.el, vars);
      }
      else if (vnode.type === Fragment) {
          vnode.children.forEach(c => setVarsOnVNode(c, vars));
      }
      else if (vnode.type === Static) {
          let { el, anchor } = vnode;
          while (el) {
              setVarsOnNode(el, vars);
              if (el === anchor)
                  break;
              el = el.nextSibling;
          }
      }
  }
  function setVarsOnNode(el, vars) {
      if (el.nodeType === 1) {
          const style = el.style;
          for (const key in vars) {
              style.setProperty(`--${key}`, vars[key]);
          }
      }
  }

  const TRANSITION = 'transition';
  const ANIMATION = 'animation';
  // DOM Transition is a higher-order-component based on the platform-agnostic
  // base Transition component, with DOM-specific logic.
  const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
  Transition.displayName = 'Transition';
  const DOMTransitionPropsValidators = {
      name: String,
      type: String,
      css: {
          type: Boolean,
          default: true
      },
      duration: [String, Number, Object],
      enterFromClass: String,
      enterActiveClass: String,
      enterToClass: String,
      appearFromClass: String,
      appearActiveClass: String,
      appearToClass: String,
      leaveFromClass: String,
      leaveActiveClass: String,
      leaveToClass: String
  };
  const TransitionPropsValidators = (Transition.props =
      /*#__PURE__*/ extend({}, BaseTransition.props, DOMTransitionPropsValidators));
  /**
   * #3227 Incoming hooks may be merged into arrays when wrapping Transition
   * with custom HOCs.
   */
  const callHook$1 = (hook, args = []) => {
      if (isArray(hook)) {
          hook.forEach(h => h(...args));
      }
      else if (hook) {
          hook(...args);
      }
  };
  /**
   * Check if a hook expects a callback (2nd arg), which means the user
   * intends to explicitly control the end of the transition.
   */
  const hasExplicitCallback = (hook) => {
      return hook
          ? isArray(hook)
              ? hook.some(h => h.length > 1)
              : hook.length > 1
          : false;
  };
  function resolveTransitionProps(rawProps) {
      const baseProps = {};
      for (const key in rawProps) {
          if (!(key in DOMTransitionPropsValidators)) {
              baseProps[key] = rawProps[key];
          }
      }
      if (rawProps.css === false) {
          return baseProps;
      }
      const { name = 'v', type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
      const durations = normalizeDuration(duration);
      const enterDuration = durations && durations[0];
      const leaveDuration = durations && durations[1];
      const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
      const finishEnter = (el, isAppear, done) => {
          removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
          removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
          done && done();
      };
      const finishLeave = (el, done) => {
          removeTransitionClass(el, leaveToClass);
          removeTransitionClass(el, leaveActiveClass);
          done && done();
      };
      const makeEnterHook = (isAppear) => {
          return (el, done) => {
              const hook = isAppear ? onAppear : onEnter;
              const resolve = () => finishEnter(el, isAppear, done);
              callHook$1(hook, [el, resolve]);
              nextFrame(() => {
                  removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                  addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                  if (!hasExplicitCallback(hook)) {
                      whenTransitionEnds(el, type, enterDuration, resolve);
                  }
              });
          };
      };
      return extend(baseProps, {
          onBeforeEnter(el) {
              callHook$1(onBeforeEnter, [el]);
              addTransitionClass(el, enterFromClass);
              addTransitionClass(el, enterActiveClass);
          },
          onBeforeAppear(el) {
              callHook$1(onBeforeAppear, [el]);
              addTransitionClass(el, appearFromClass);
              addTransitionClass(el, appearActiveClass);
          },
          onEnter: makeEnterHook(false),
          onAppear: makeEnterHook(true),
          onLeave(el, done) {
              const resolve = () => finishLeave(el, done);
              addTransitionClass(el, leaveFromClass);
              // force reflow so *-leave-from classes immediately take effect (#2593)
              forceReflow();
              addTransitionClass(el, leaveActiveClass);
              nextFrame(() => {
                  removeTransitionClass(el, leaveFromClass);
                  addTransitionClass(el, leaveToClass);
                  if (!hasExplicitCallback(onLeave)) {
                      whenTransitionEnds(el, type, leaveDuration, resolve);
                  }
              });
              callHook$1(onLeave, [el, resolve]);
          },
          onEnterCancelled(el) {
              finishEnter(el, false);
              callHook$1(onEnterCancelled, [el]);
          },
          onAppearCancelled(el) {
              finishEnter(el, true);
              callHook$1(onAppearCancelled, [el]);
          },
          onLeaveCancelled(el) {
              finishLeave(el);
              callHook$1(onLeaveCancelled, [el]);
          }
      });
  }
  function normalizeDuration(duration) {
      if (duration == null) {
          return null;
      }
      else if (isObject(duration)) {
          return [NumberOf(duration.enter), NumberOf(duration.leave)];
      }
      else {
          const n = NumberOf(duration);
          return [n, n];
      }
  }
  function NumberOf(val) {
      const res = toNumber(val);
      validateDuration(res);
      return res;
  }
  function validateDuration(val) {
      if (typeof val !== 'number') {
          warn$1(`<transition> explicit duration is not a valid number - ` +
              `got ${JSON.stringify(val)}.`);
      }
      else if (isNaN(val)) {
          warn$1(`<transition> explicit duration is NaN - ` +
              'the duration expression might be incorrect.');
      }
  }
  function addTransitionClass(el, cls) {
      cls.split(/\s+/).forEach(c => c && el.classList.add(c));
      (el._vtc ||
          (el._vtc = new Set())).add(cls);
  }
  function removeTransitionClass(el, cls) {
      cls.split(/\s+/).forEach(c => c && el.classList.remove(c));
      const { _vtc } = el;
      if (_vtc) {
          _vtc.delete(cls);
          if (!_vtc.size) {
              el._vtc = undefined;
          }
      }
  }
  function nextFrame(cb) {
      requestAnimationFrame(() => {
          requestAnimationFrame(cb);
      });
  }
  let endId = 0;
  function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
      const id = (el._endId = ++endId);
      const resolveIfNotStale = () => {
          if (id === el._endId) {
              resolve();
          }
      };
      if (explicitTimeout) {
          return setTimeout(resolveIfNotStale, explicitTimeout);
      }
      const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
      if (!type) {
          return resolve();
      }
      const endEvent = type + 'end';
      let ended = 0;
      const end = () => {
          el.removeEventListener(endEvent, onEnd);
          resolveIfNotStale();
      };
      const onEnd = (e) => {
          if (e.target === el && ++ended >= propCount) {
              end();
          }
      };
      setTimeout(() => {
          if (ended < propCount) {
              end();
          }
      }, timeout + 1);
      el.addEventListener(endEvent, onEnd);
  }
  function getTransitionInfo(el, expectedType) {
      const styles = window.getComputedStyle(el);
      // JSDOM may return undefined for transition properties
      const getStyleProperties = (key) => (styles[key] || '').split(', ');
      const transitionDelays = getStyleProperties(TRANSITION + 'Delay');
      const transitionDurations = getStyleProperties(TRANSITION + 'Duration');
      const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
      const animationDelays = getStyleProperties(ANIMATION + 'Delay');
      const animationDurations = getStyleProperties(ANIMATION + 'Duration');
      const animationTimeout = getTimeout(animationDelays, animationDurations);
      let type = null;
      let timeout = 0;
      let propCount = 0;
      /* istanbul ignore if */
      if (expectedType === TRANSITION) {
          if (transitionTimeout > 0) {
              type = TRANSITION;
              timeout = transitionTimeout;
              propCount = transitionDurations.length;
          }
      }
      else if (expectedType === ANIMATION) {
          if (animationTimeout > 0) {
              type = ANIMATION;
              timeout = animationTimeout;
              propCount = animationDurations.length;
          }
      }
      else {
          timeout = Math.max(transitionTimeout, animationTimeout);
          type =
              timeout > 0
                  ? transitionTimeout > animationTimeout
                      ? TRANSITION
                      : ANIMATION
                  : null;
          propCount = type
              ? type === TRANSITION
                  ? transitionDurations.length
                  : animationDurations.length
              : 0;
      }
      const hasTransform = type === TRANSITION &&
          /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
      return {
          type,
          timeout,
          propCount,
          hasTransform
      };
  }
  function getTimeout(delays, durations) {
      while (delays.length < durations.length) {
          delays = delays.concat(delays);
      }
      return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
  }
  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer
  // numbers in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down
  // (i.e. acting as a floor function) causing unexpected behaviors
  function toMs(s) {
      return Number(s.slice(0, -1).replace(',', '.')) * 1000;
  }
  // synchronously force layout to put elements into a certain state
  function forceReflow() {
      return document.body.offsetHeight;
  }

  const positionMap = new WeakMap();
  const newPositionMap = new WeakMap();
  const TransitionGroupImpl = {
      name: 'TransitionGroup',
      props: /*#__PURE__*/ extend({}, TransitionPropsValidators, {
          tag: String,
          moveClass: String
      }),
      setup(props, { slots }) {
          const instance = getCurrentInstance();
          const state = useTransitionState();
          let prevChildren;
          let children;
          onUpdated(() => {
              // children is guaranteed to exist after initial render
              if (!prevChildren.length) {
                  return;
              }
              const moveClass = props.moveClass || `${props.name || 'v'}-move`;
              if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
                  return;
              }
              // we divide the work into three loops to avoid mixing DOM reads and writes
              // in each iteration - which helps prevent layout thrashing.
              prevChildren.forEach(callPendingCbs);
              prevChildren.forEach(recordPosition);
              const movedChildren = prevChildren.filter(applyTranslation);
              // force reflow to put everything in position
              forceReflow();
              movedChildren.forEach(c => {
                  const el = c.el;
                  const style = el.style;
                  addTransitionClass(el, moveClass);
                  style.transform = style.webkitTransform = style.transitionDuration = '';
                  const cb = (el._moveCb = (e) => {
                      if (e && e.target !== el) {
                          return;
                      }
                      if (!e || /transform$/.test(e.propertyName)) {
                          el.removeEventListener('transitionend', cb);
                          el._moveCb = null;
                          removeTransitionClass(el, moveClass);
                      }
                  });
                  el.addEventListener('transitionend', cb);
              });
          });
          return () => {
              const rawProps = toRaw(props);
              const cssTransitionProps = resolveTransitionProps(rawProps);
              let tag = rawProps.tag || Fragment;
              prevChildren = children;
              children = slots.default ? getTransitionRawChildren(slots.default()) : [];
              for (let i = 0; i < children.length; i++) {
                  const child = children[i];
                  if (child.key != null) {
                      setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                  }
                  else {
                      warn$1(`<TransitionGroup> children must be keyed.`);
                  }
              }
              if (prevChildren) {
                  for (let i = 0; i < prevChildren.length; i++) {
                      const child = prevChildren[i];
                      setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                      positionMap.set(child, child.el.getBoundingClientRect());
                  }
              }
              return createVNode(tag, null, children);
          };
      }
  };
  const TransitionGroup = TransitionGroupImpl;
  function callPendingCbs(c) {
      const el = c.el;
      if (el._moveCb) {
          el._moveCb();
      }
      if (el._enterCb) {
          el._enterCb();
      }
  }
  function recordPosition(c) {
      newPositionMap.set(c, c.el.getBoundingClientRect());
  }
  function applyTranslation(c) {
      const oldPos = positionMap.get(c);
      const newPos = newPositionMap.get(c);
      const dx = oldPos.left - newPos.left;
      const dy = oldPos.top - newPos.top;
      if (dx || dy) {
          const s = c.el.style;
          s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
          s.transitionDuration = '0s';
          return c;
      }
  }
  function hasCSSTransform(el, root, moveClass) {
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      const clone = el.cloneNode();
      if (el._vtc) {
          el._vtc.forEach(cls => {
              cls.split(/\s+/).forEach(c => c && clone.classList.remove(c));
          });
      }
      moveClass.split(/\s+/).forEach(c => c && clone.classList.add(c));
      clone.style.display = 'none';
      const container = (root.nodeType === 1 ? root : root.parentNode);
      container.appendChild(clone);
      const { hasTransform } = getTransitionInfo(clone);
      container.removeChild(clone);
      return hasTransform;
  }

  const getModelAssigner = (vnode) => {
      const fn = vnode.props['onUpdate:modelValue'];
      return isArray(fn) ? value => invokeArrayFns(fn, value) : fn;
  };
  function onCompositionStart(e) {
      e.target.composing = true;
  }
  function onCompositionEnd(e) {
      const target = e.target;
      if (target.composing) {
          target.composing = false;
          trigger$1(target, 'input');
      }
  }
  function trigger$1(el, type) {
      const e = document.createEvent('HTMLEvents');
      e.initEvent(type, true, true);
      el.dispatchEvent(e);
  }
  // We are exporting the v-model runtime directly as vnode hooks so that it can
  // be tree-shaken in case v-model is never used.
  const vModelText = {
      created(el, { modifiers: { lazy, trim, number } }, vnode) {
          el._assign = getModelAssigner(vnode);
          const castToNumber = number || (vnode.props && vnode.props.type === 'number');
          addEventListener(el, lazy ? 'change' : 'input', e => {
              if (e.target.composing)
                  return;
              let domValue = el.value;
              if (trim) {
                  domValue = domValue.trim();
              }
              else if (castToNumber) {
                  domValue = toNumber(domValue);
              }
              el._assign(domValue);
          });
          if (trim) {
              addEventListener(el, 'change', () => {
                  el.value = el.value.trim();
              });
          }
          if (!lazy) {
              addEventListener(el, 'compositionstart', onCompositionStart);
              addEventListener(el, 'compositionend', onCompositionEnd);
              // Safari < 10.2 & UIWebView doesn't fire compositionend when
              // switching focus before confirming composition choice
              // this also fixes the issue where some browsers e.g. iOS Chrome
              // fires "change" instead of "input" on autocomplete.
              addEventListener(el, 'change', onCompositionEnd);
          }
      },
      // set value on mounted so it's after min/max for type="range"
      mounted(el, { value }) {
          el.value = value == null ? '' : value;
      },
      beforeUpdate(el, { value, modifiers: { lazy, trim, number } }, vnode) {
          el._assign = getModelAssigner(vnode);
          // avoid clearing unresolved text. #2302
          if (el.composing)
              return;
          if (document.activeElement === el) {
              if (lazy) {
                  return;
              }
              if (trim && el.value.trim() === value) {
                  return;
              }
              if ((number || el.type === 'number') && toNumber(el.value) === value) {
                  return;
              }
          }
          const newValue = value == null ? '' : value;
          if (el.value !== newValue) {
              el.value = newValue;
          }
      }
  };
  const vModelCheckbox = {
      // #4096 array checkboxes need to be deep traversed
      deep: true,
      created(el, _, vnode) {
          el._assign = getModelAssigner(vnode);
          addEventListener(el, 'change', () => {
              const modelValue = el._modelValue;
              const elementValue = getValue(el);
              const checked = el.checked;
              const assign = el._assign;
              if (isArray(modelValue)) {
                  const index = looseIndexOf(modelValue, elementValue);
                  const found = index !== -1;
                  if (checked && !found) {
                      assign(modelValue.concat(elementValue));
                  }
                  else if (!checked && found) {
                      const filtered = [...modelValue];
                      filtered.splice(index, 1);
                      assign(filtered);
                  }
              }
              else if (isSet(modelValue)) {
                  const cloned = new Set(modelValue);
                  if (checked) {
                      cloned.add(elementValue);
                  }
                  else {
                      cloned.delete(elementValue);
                  }
                  assign(cloned);
              }
              else {
                  assign(getCheckboxValue(el, checked));
              }
          });
      },
      // set initial checked on mount to wait for true-value/false-value
      mounted: setChecked,
      beforeUpdate(el, binding, vnode) {
          el._assign = getModelAssigner(vnode);
          setChecked(el, binding, vnode);
      }
  };
  function setChecked(el, { value, oldValue }, vnode) {
      el._modelValue = value;
      if (isArray(value)) {
          el.checked = looseIndexOf(value, vnode.props.value) > -1;
      }
      else if (isSet(value)) {
          el.checked = value.has(vnode.props.value);
      }
      else if (value !== oldValue) {
          el.checked = looseEqual(value, getCheckboxValue(el, true));
      }
  }
  const vModelRadio = {
      created(el, { value }, vnode) {
          el.checked = looseEqual(value, vnode.props.value);
          el._assign = getModelAssigner(vnode);
          addEventListener(el, 'change', () => {
              el._assign(getValue(el));
          });
      },
      beforeUpdate(el, { value, oldValue }, vnode) {
          el._assign = getModelAssigner(vnode);
          if (value !== oldValue) {
              el.checked = looseEqual(value, vnode.props.value);
          }
      }
  };
  const vModelSelect = {
      // <select multiple> value need to be deep traversed
      deep: true,
      created(el, { value, modifiers: { number } }, vnode) {
          const isSetModel = isSet(value);
          addEventListener(el, 'change', () => {
              const selectedVal = Array.prototype.filter
                  .call(el.options, (o) => o.selected)
                  .map((o) => number ? toNumber(getValue(o)) : getValue(o));
              el._assign(el.multiple
                  ? isSetModel
                      ? new Set(selectedVal)
                      : selectedVal
                  : selectedVal[0]);
          });
          el._assign = getModelAssigner(vnode);
      },
      // set value in mounted & updated because <select> relies on its children
      // <option>s.
      mounted(el, { value }) {
          setSelected(el, value);
      },
      beforeUpdate(el, _binding, vnode) {
          el._assign = getModelAssigner(vnode);
      },
      updated(el, { value }) {
          setSelected(el, value);
      }
  };
  function setSelected(el, value) {
      const isMultiple = el.multiple;
      if (isMultiple && !isArray(value) && !isSet(value)) {
          warn$1(`<select multiple v-model> expects an Array or Set value for its binding, ` +
                  `but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
          return;
      }
      for (let i = 0, l = el.options.length; i < l; i++) {
          const option = el.options[i];
          const optionValue = getValue(option);
          if (isMultiple) {
              if (isArray(value)) {
                  option.selected = looseIndexOf(value, optionValue) > -1;
              }
              else {
                  option.selected = value.has(optionValue);
              }
          }
          else {
              if (looseEqual(getValue(option), value)) {
                  if (el.selectedIndex !== i)
                      el.selectedIndex = i;
                  return;
              }
          }
      }
      if (!isMultiple && el.selectedIndex !== -1) {
          el.selectedIndex = -1;
      }
  }
  // retrieve raw value set via :value bindings
  function getValue(el) {
      return '_value' in el ? el._value : el.value;
  }
  // retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
  function getCheckboxValue(el, checked) {
      const key = checked ? '_trueValue' : '_falseValue';
      return key in el ? el[key] : checked;
  }
  const vModelDynamic = {
      created(el, binding, vnode) {
          callModelHook(el, binding, vnode, null, 'created');
      },
      mounted(el, binding, vnode) {
          callModelHook(el, binding, vnode, null, 'mounted');
      },
      beforeUpdate(el, binding, vnode, prevVNode) {
          callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
      },
      updated(el, binding, vnode, prevVNode) {
          callModelHook(el, binding, vnode, prevVNode, 'updated');
      }
  };
  function callModelHook(el, binding, vnode, prevVNode, hook) {
      let modelToUse;
      switch (el.tagName) {
          case 'SELECT':
              modelToUse = vModelSelect;
              break;
          case 'TEXTAREA':
              modelToUse = vModelText;
              break;
          default:
              switch (vnode.props && vnode.props.type) {
                  case 'checkbox':
                      modelToUse = vModelCheckbox;
                      break;
                  case 'radio':
                      modelToUse = vModelRadio;
                      break;
                  default:
                      modelToUse = vModelText;
              }
      }
      const fn = modelToUse[hook];
      fn && fn(el, binding, vnode, prevVNode);
  }

  const systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
  const modifierGuards = {
      stop: e => e.stopPropagation(),
      prevent: e => e.preventDefault(),
      self: e => e.target !== e.currentTarget,
      ctrl: e => !e.ctrlKey,
      shift: e => !e.shiftKey,
      alt: e => !e.altKey,
      meta: e => !e.metaKey,
      left: e => 'button' in e && e.button !== 0,
      middle: e => 'button' in e && e.button !== 1,
      right: e => 'button' in e && e.button !== 2,
      exact: (e, modifiers) => systemModifiers.some(m => e[`${m}Key`] && !modifiers.includes(m))
  };
  /**
   * @private
   */
  const withModifiers = (fn, modifiers) => {
      return (event, ...args) => {
          for (let i = 0; i < modifiers.length; i++) {
              const guard = modifierGuards[modifiers[i]];
              if (guard && guard(event, modifiers))
                  return;
          }
          return fn(event, ...args);
      };
  };
  // Kept for 2.x compat.
  // Note: IE11 compat for `spacebar` and `del` is removed for now.
  const keyNames = {
      esc: 'escape',
      space: ' ',
      up: 'arrow-up',
      left: 'arrow-left',
      right: 'arrow-right',
      down: 'arrow-down',
      delete: 'backspace'
  };
  /**
   * @private
   */
  const withKeys = (fn, modifiers) => {
      return (event) => {
          if (!('key' in event)) {
              return;
          }
          const eventKey = hyphenate(event.key);
          if (modifiers.some(k => k === eventKey || keyNames[k] === eventKey)) {
              return fn(event);
          }
      };
  };

  const vShow = {
      beforeMount(el, { value }, { transition }) {
          el._vod = el.style.display === 'none' ? '' : el.style.display;
          if (transition && value) {
              transition.beforeEnter(el);
          }
          else {
              setDisplay(el, value);
          }
      },
      mounted(el, { value }, { transition }) {
          if (transition && value) {
              transition.enter(el);
          }
      },
      updated(el, { value, oldValue }, { transition }) {
          if (!value === !oldValue)
              return;
          if (transition) {
              if (value) {
                  transition.beforeEnter(el);
                  setDisplay(el, true);
                  transition.enter(el);
              }
              else {
                  transition.leave(el, () => {
                      setDisplay(el, false);
                  });
              }
          }
          else {
              setDisplay(el, value);
          }
      },
      beforeUnmount(el, { value }) {
          setDisplay(el, value);
      }
  };
  function setDisplay(el, value) {
      el.style.display = value ? el._vod : 'none';
  }

  const rendererOptions = extend({ patchProp }, nodeOps);
  // lazy create the renderer - this makes core renderer logic tree-shakable
  // in case the user only imports reactivity utilities from Vue.
  let renderer;
  let enabledHydration = false;
  function ensureRenderer() {
      return (renderer ||
          (renderer = createRenderer(rendererOptions)));
  }
  function ensureHydrationRenderer() {
      renderer = enabledHydration
          ? renderer
          : createHydrationRenderer(rendererOptions);
      enabledHydration = true;
      return renderer;
  }
  // use explicit type casts here to avoid import() calls in rolled-up d.ts
  const render = ((...args) => {
      ensureRenderer().render(...args);
  });
  const hydrate = ((...args) => {
      ensureHydrationRenderer().hydrate(...args);
  });
  const createApp = ((...args) => {
      const app = ensureRenderer().createApp(...args);
      {
          injectNativeTagCheck(app);
          injectCompilerOptionsCheck(app);
      }
      const { mount } = app;
      app.mount = (containerOrSelector) => {
          const container = normalizeContainer(containerOrSelector);
          if (!container)
              return;
          const component = app._component;
          if (!isFunction(component) && !component.render && !component.template) {
              // __UNSAFE__
              // Reason: potential execution of JS expressions in in-DOM template.
              // The user must make sure the in-DOM template is trusted. If it's
              // rendered by the server, the template should not contain any user data.
              component.template = container.innerHTML;
          }
          // clear content before mounting
          container.innerHTML = '';
          const proxy = mount(container, false, container instanceof SVGElement);
          if (container instanceof Element) {
              container.removeAttribute('v-cloak');
              container.setAttribute('data-v-app', '');
          }
          return proxy;
      };
      return app;
  });
  const createSSRApp = ((...args) => {
      const app = ensureHydrationRenderer().createApp(...args);
      {
          injectNativeTagCheck(app);
          injectCompilerOptionsCheck(app);
      }
      const { mount } = app;
      app.mount = (containerOrSelector) => {
          const container = normalizeContainer(containerOrSelector);
          if (container) {
              return mount(container, true, container instanceof SVGElement);
          }
      };
      return app;
  });
  function injectNativeTagCheck(app) {
      // Inject `isNativeTag`
      // this is used for component name validation (dev only)
      Object.defineProperty(app.config, 'isNativeTag', {
          value: (tag) => isHTMLTag(tag) || isSVGTag(tag),
          writable: false
      });
  }
  // dev only
  function injectCompilerOptionsCheck(app) {
      if (isRuntimeOnly()) {
          const isCustomElement = app.config.isCustomElement;
          Object.defineProperty(app.config, 'isCustomElement', {
              get() {
                  return isCustomElement;
              },
              set() {
                  warn$1(`The \`isCustomElement\` config option is deprecated. Use ` +
                      `\`compilerOptions.isCustomElement\` instead.`);
              }
          });
          const compilerOptions = app.config.compilerOptions;
          const msg = `The \`compilerOptions\` config option is only respected when using ` +
              `a build of Vue.js that includes the runtime compiler (aka "full build"). ` +
              `Since you are using the runtime-only build, \`compilerOptions\` ` +
              `must be passed to \`@vue/compiler-dom\` in the build setup instead.\n` +
              `- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.\n` +
              `- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n` +
              `- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
          Object.defineProperty(app.config, 'compilerOptions', {
              get() {
                  warn$1(msg);
                  return compilerOptions;
              },
              set() {
                  warn$1(msg);
              }
          });
      }
  }
  function normalizeContainer(container) {
      if (isString(container)) {
          const res = document.querySelector(container);
          if (!res) {
              warn$1(`Failed to mount app: mount target selector "${container}" returned null.`);
          }
          return res;
      }
      if (window.ShadowRoot &&
          container instanceof window.ShadowRoot &&
          container.mode === 'closed') {
          warn$1(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
      }
      return container;
  }
  /**
   * @internal
   */
  const initDirectivesForSSR = NOOP;

  function initDev() {
      {
          {
              console.info(`You are running a development build of Vue.\n` +
                  `Make sure to use the production build (*.prod.js) when deploying for production.`);
          }
          initCustomFormatter();
      }
  }

  function defaultOnError(error) {
      throw error;
  }
  function defaultOnWarn(msg) {
      console.warn(`[Vue warn] ${msg.message}`);
  }
  function createCompilerError(code, loc, messages, additionalMessage) {
      const msg = (messages || errorMessages)[code] + (additionalMessage || ``)
          ;
      const error = new SyntaxError(String(msg));
      error.code = code;
      error.loc = loc;
      return error;
  }
  const errorMessages = {
      // parse errors
      [0 /* ABRUPT_CLOSING_OF_EMPTY_COMMENT */]: 'Illegal comment.',
      [1 /* CDATA_IN_HTML_CONTENT */]: 'CDATA section is allowed only in XML context.',
      [2 /* DUPLICATE_ATTRIBUTE */]: 'Duplicate attribute.',
      [3 /* END_TAG_WITH_ATTRIBUTES */]: 'End tag cannot have attributes.',
      [4 /* END_TAG_WITH_TRAILING_SOLIDUS */]: "Illegal '/' in tags.",
      [5 /* EOF_BEFORE_TAG_NAME */]: 'Unexpected EOF in tag.',
      [6 /* EOF_IN_CDATA */]: 'Unexpected EOF in CDATA section.',
      [7 /* EOF_IN_COMMENT */]: 'Unexpected EOF in comment.',
      [8 /* EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */]: 'Unexpected EOF in script.',
      [9 /* EOF_IN_TAG */]: 'Unexpected EOF in tag.',
      [10 /* INCORRECTLY_CLOSED_COMMENT */]: 'Incorrectly closed comment.',
      [11 /* INCORRECTLY_OPENED_COMMENT */]: 'Incorrectly opened comment.',
      [12 /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */]: "Illegal tag name. Use '&lt;' to print '<'.",
      [13 /* MISSING_ATTRIBUTE_VALUE */]: 'Attribute value was expected.',
      [14 /* MISSING_END_TAG_NAME */]: 'End tag name was expected.',
      [15 /* MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */]: 'Whitespace was expected.',
      [16 /* NESTED_COMMENT */]: "Unexpected '<!--' in comment.",
      [17 /* UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */]: 'Attribute name cannot contain U+0022 ("), U+0027 (\'), and U+003C (<).',
      [18 /* UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */]: 'Unquoted attribute value cannot contain U+0022 ("), U+0027 (\'), U+003C (<), U+003D (=), and U+0060 (`).',
      [19 /* UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */]: "Attribute name cannot start with '='.",
      [21 /* UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */]: "'<?' is allowed only in XML context.",
      [20 /* UNEXPECTED_NULL_CHARACTER */]: `Unexpected null character.`,
      [22 /* UNEXPECTED_SOLIDUS_IN_TAG */]: "Illegal '/' in tags.",
      // Vue-specific parse errors
      [23 /* X_INVALID_END_TAG */]: 'Invalid end tag.',
      [24 /* X_MISSING_END_TAG */]: 'Element is missing end tag.',
      [25 /* X_MISSING_INTERPOLATION_END */]: 'Interpolation end sign was not found.',
      [27 /* X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */]: 'End bracket for dynamic directive argument was not found. ' +
          'Note that dynamic directive argument cannot contain spaces.',
      [26 /* X_MISSING_DIRECTIVE_NAME */]: 'Legal directive name was expected.',
      // transform errors
      [28 /* X_V_IF_NO_EXPRESSION */]: `v-if/v-else-if is missing expression.`,
      [29 /* X_V_IF_SAME_KEY */]: `v-if/else branches must use unique keys.`,
      [30 /* X_V_ELSE_NO_ADJACENT_IF */]: `v-else/v-else-if has no adjacent v-if or v-else-if.`,
      [31 /* X_V_FOR_NO_EXPRESSION */]: `v-for is missing expression.`,
      [32 /* X_V_FOR_MALFORMED_EXPRESSION */]: `v-for has invalid expression.`,
      [33 /* X_V_FOR_TEMPLATE_KEY_PLACEMENT */]: `<template v-for> key should be placed on the <template> tag.`,
      [34 /* X_V_BIND_NO_EXPRESSION */]: `v-bind is missing expression.`,
      [35 /* X_V_ON_NO_EXPRESSION */]: `v-on is missing expression.`,
      [36 /* X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */]: `Unexpected custom directive on <slot> outlet.`,
      [37 /* X_V_SLOT_MIXED_SLOT_USAGE */]: `Mixed v-slot usage on both the component and nested <template>.` +
          `When there are multiple named slots, all slots should use <template> ` +
          `syntax to avoid scope ambiguity.`,
      [38 /* X_V_SLOT_DUPLICATE_SLOT_NAMES */]: `Duplicate slot names found. `,
      [39 /* X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */]: `Extraneous children found when component already has explicitly named ` +
          `default slot. These children will be ignored.`,
      [40 /* X_V_SLOT_MISPLACED */]: `v-slot can only be used on components or <template> tags.`,
      [41 /* X_V_MODEL_NO_EXPRESSION */]: `v-model is missing expression.`,
      [42 /* X_V_MODEL_MALFORMED_EXPRESSION */]: `v-model value must be a valid JavaScript member expression.`,
      [43 /* X_V_MODEL_ON_SCOPE_VARIABLE */]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
      [44 /* X_INVALID_EXPRESSION */]: `Error parsing JavaScript expression: `,
      [45 /* X_KEEP_ALIVE_INVALID_CHILDREN */]: `<KeepAlive> expects exactly one child component.`,
      // generic errors
      [46 /* X_PREFIX_ID_NOT_SUPPORTED */]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
      [47 /* X_MODULE_MODE_NOT_SUPPORTED */]: `ES module mode is not supported in this build of compiler.`,
      [48 /* X_CACHE_HANDLER_NOT_SUPPORTED */]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
      [49 /* X_SCOPE_ID_NOT_SUPPORTED */]: `"scopeId" option is only supported in module mode.`,
      // just to fulfill types
      [50 /* __EXTEND_POINT__ */]: ``
  };

  const FRAGMENT = Symbol(`Fragment` );
  const TELEPORT = Symbol(`Teleport` );
  const SUSPENSE = Symbol(`Suspense` );
  const KEEP_ALIVE = Symbol(`KeepAlive` );
  const BASE_TRANSITION = Symbol(`BaseTransition` );
  const OPEN_BLOCK = Symbol(`openBlock` );
  const CREATE_BLOCK = Symbol(`createBlock` );
  const CREATE_ELEMENT_BLOCK = Symbol(`createElementBlock` );
  const CREATE_VNODE = Symbol(`createVNode` );
  const CREATE_ELEMENT_VNODE = Symbol(`createElementVNode` );
  const CREATE_COMMENT = Symbol(`createCommentVNode` );
  const CREATE_TEXT = Symbol(`createTextVNode` );
  const CREATE_STATIC = Symbol(`createStaticVNode` );
  const RESOLVE_COMPONENT = Symbol(`resolveComponent` );
  const RESOLVE_DYNAMIC_COMPONENT = Symbol(`resolveDynamicComponent` );
  const RESOLVE_DIRECTIVE = Symbol(`resolveDirective` );
  const RESOLVE_FILTER = Symbol(`resolveFilter` );
  const WITH_DIRECTIVES = Symbol(`withDirectives` );
  const RENDER_LIST = Symbol(`renderList` );
  const RENDER_SLOT = Symbol(`renderSlot` );
  const CREATE_SLOTS = Symbol(`createSlots` );
  const TO_DISPLAY_STRING = Symbol(`toDisplayString` );
  const MERGE_PROPS = Symbol(`mergeProps` );
  const NORMALIZE_CLASS = Symbol(`normalizeClass` );
  const NORMALIZE_STYLE = Symbol(`normalizeStyle` );
  const NORMALIZE_PROPS = Symbol(`normalizeProps` );
  const GUARD_REACTIVE_PROPS = Symbol(`guardReactiveProps` );
  const TO_HANDLERS = Symbol(`toHandlers` );
  const CAMELIZE = Symbol(`camelize` );
  const CAPITALIZE = Symbol(`capitalize` );
  const TO_HANDLER_KEY = Symbol(`toHandlerKey` );
  const SET_BLOCK_TRACKING = Symbol(`setBlockTracking` );
  const PUSH_SCOPE_ID = Symbol(`pushScopeId` );
  const POP_SCOPE_ID = Symbol(`popScopeId` );
  const WITH_CTX = Symbol(`withCtx` );
  const UNREF = Symbol(`unref` );
  const IS_REF = Symbol(`isRef` );
  const WITH_MEMO = Symbol(`withMemo` );
  const IS_MEMO_SAME = Symbol(`isMemoSame` );
  // Name mapping for runtime helpers that need to be imported from 'vue' in
  // generated code. Make sure these are correctly exported in the runtime!
  // Using `any` here because TS doesn't allow symbols as index type.
  const helperNameMap = {
      [FRAGMENT]: `Fragment`,
      [TELEPORT]: `Teleport`,
      [SUSPENSE]: `Suspense`,
      [KEEP_ALIVE]: `KeepAlive`,
      [BASE_TRANSITION]: `BaseTransition`,
      [OPEN_BLOCK]: `openBlock`,
      [CREATE_BLOCK]: `createBlock`,
      [CREATE_ELEMENT_BLOCK]: `createElementBlock`,
      [CREATE_VNODE]: `createVNode`,
      [CREATE_ELEMENT_VNODE]: `createElementVNode`,
      [CREATE_COMMENT]: `createCommentVNode`,
      [CREATE_TEXT]: `createTextVNode`,
      [CREATE_STATIC]: `createStaticVNode`,
      [RESOLVE_COMPONENT]: `resolveComponent`,
      [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
      [RESOLVE_DIRECTIVE]: `resolveDirective`,
      [RESOLVE_FILTER]: `resolveFilter`,
      [WITH_DIRECTIVES]: `withDirectives`,
      [RENDER_LIST]: `renderList`,
      [RENDER_SLOT]: `renderSlot`,
      [CREATE_SLOTS]: `createSlots`,
      [TO_DISPLAY_STRING]: `toDisplayString`,
      [MERGE_PROPS]: `mergeProps`,
      [NORMALIZE_CLASS]: `normalizeClass`,
      [NORMALIZE_STYLE]: `normalizeStyle`,
      [NORMALIZE_PROPS]: `normalizeProps`,
      [GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
      [TO_HANDLERS]: `toHandlers`,
      [CAMELIZE]: `camelize`,
      [CAPITALIZE]: `capitalize`,
      [TO_HANDLER_KEY]: `toHandlerKey`,
      [SET_BLOCK_TRACKING]: `setBlockTracking`,
      [PUSH_SCOPE_ID]: `pushScopeId`,
      [POP_SCOPE_ID]: `popScopeId`,
      [WITH_CTX]: `withCtx`,
      [UNREF]: `unref`,
      [IS_REF]: `isRef`,
      [WITH_MEMO]: `withMemo`,
      [IS_MEMO_SAME]: `isMemoSame`
  };
  function registerRuntimeHelpers(helpers) {
      Object.getOwnPropertySymbols(helpers).forEach(s => {
          helperNameMap[s] = helpers[s];
      });
  }

  // AST Utilities ---------------------------------------------------------------
  // Some expressions, e.g. sequence and conditional expressions, are never
  // associated with template nodes, so their source locations are just a stub.
  // Container types like CompoundExpression also don't need a real location.
  const locStub = {
      source: '',
      start: { line: 1, column: 1, offset: 0 },
      end: { line: 1, column: 1, offset: 0 }
  };
  function createRoot(children, loc = locStub) {
      return {
          type: 0 /* ROOT */,
          children,
          helpers: [],
          components: [],
          directives: [],
          hoists: [],
          imports: [],
          cached: 0,
          temps: 0,
          codegenNode: undefined,
          loc
      };
  }
  function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, isComponent = false, loc = locStub) {
      if (context) {
          if (isBlock) {
              context.helper(OPEN_BLOCK);
              context.helper(getVNodeBlockHelper(context.inSSR, isComponent));
          }
          else {
              context.helper(getVNodeHelper(context.inSSR, isComponent));
          }
          if (directives) {
              context.helper(WITH_DIRECTIVES);
          }
      }
      return {
          type: 13 /* VNODE_CALL */,
          tag,
          props,
          children,
          patchFlag,
          dynamicProps,
          directives,
          isBlock,
          disableTracking,
          isComponent,
          loc
      };
  }
  function createArrayExpression(elements, loc = locStub) {
      return {
          type: 17 /* JS_ARRAY_EXPRESSION */,
          loc,
          elements
      };
  }
  function createObjectExpression(properties, loc = locStub) {
      return {
          type: 15 /* JS_OBJECT_EXPRESSION */,
          loc,
          properties
      };
  }
  function createObjectProperty(key, value) {
      return {
          type: 16 /* JS_PROPERTY */,
          loc: locStub,
          key: isString(key) ? createSimpleExpression(key, true) : key,
          value
      };
  }
  function createSimpleExpression(content, isStatic = false, loc = locStub, constType = 0 /* NOT_CONSTANT */) {
      return {
          type: 4 /* SIMPLE_EXPRESSION */,
          loc,
          content,
          isStatic,
          constType: isStatic ? 3 /* CAN_STRINGIFY */ : constType
      };
  }
  function createCompoundExpression(children, loc = locStub) {
      return {
          type: 8 /* COMPOUND_EXPRESSION */,
          loc,
          children
      };
  }
  function createCallExpression(callee, args = [], loc = locStub) {
      return {
          type: 14 /* JS_CALL_EXPRESSION */,
          loc,
          callee,
          arguments: args
      };
  }
  function createFunctionExpression(params, returns = undefined, newline = false, isSlot = false, loc = locStub) {
      return {
          type: 18 /* JS_FUNCTION_EXPRESSION */,
          params,
          returns,
          newline,
          isSlot,
          loc
      };
  }
  function createConditionalExpression(test, consequent, alternate, newline = true) {
      return {
          type: 19 /* JS_CONDITIONAL_EXPRESSION */,
          test,
          consequent,
          alternate,
          newline,
          loc: locStub
      };
  }
  function createCacheExpression(index, value, isVNode = false) {
      return {
          type: 20 /* JS_CACHE_EXPRESSION */,
          index,
          value,
          isVNode,
          loc: locStub
      };
  }
  function createBlockStatement(body) {
      return {
          type: 21 /* JS_BLOCK_STATEMENT */,
          body,
          loc: locStub
      };
  }

  const isStaticExp = (p) => p.type === 4 /* SIMPLE_EXPRESSION */ && p.isStatic;
  const isBuiltInType = (tag, expected) => tag === expected || tag === hyphenate(expected);
  function isCoreComponent(tag) {
      if (isBuiltInType(tag, 'Teleport')) {
          return TELEPORT;
      }
      else if (isBuiltInType(tag, 'Suspense')) {
          return SUSPENSE;
      }
      else if (isBuiltInType(tag, 'KeepAlive')) {
          return KEEP_ALIVE;
      }
      else if (isBuiltInType(tag, 'BaseTransition')) {
          return BASE_TRANSITION;
      }
  }
  const nonIdentifierRE = /^\d|[^\$\w]/;
  const isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
  const validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
  const validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
  const whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
  /**
   * Simple lexer to check if an expression is a member expression. This is
   * lax and only checks validity at the root level (i.e. does not validate exps
   * inside square brackets), but it's ok since these are only used on template
   * expressions and false positives are invalid expressions in the first place.
   */
  const isMemberExpressionBrowser = (path) => {
      // remove whitespaces around . or [ first
      path = path.trim().replace(whitespaceRE, s => s.trim());
      let state = 0 /* inMemberExp */;
      let stateStack = [];
      let currentOpenBracketCount = 0;
      let currentOpenParensCount = 0;
      let currentStringType = null;
      for (let i = 0; i < path.length; i++) {
          const char = path.charAt(i);
          switch (state) {
              case 0 /* inMemberExp */:
                  if (char === '[') {
                      stateStack.push(state);
                      state = 1 /* inBrackets */;
                      currentOpenBracketCount++;
                  }
                  else if (char === '(') {
                      stateStack.push(state);
                      state = 2 /* inParens */;
                      currentOpenParensCount++;
                  }
                  else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)) {
                      return false;
                  }
                  break;
              case 1 /* inBrackets */:
                  if (char === `'` || char === `"` || char === '`') {
                      stateStack.push(state);
                      state = 3 /* inString */;
                      currentStringType = char;
                  }
                  else if (char === `[`) {
                      currentOpenBracketCount++;
                  }
                  else if (char === `]`) {
                      if (!--currentOpenBracketCount) {
                          state = stateStack.pop();
                      }
                  }
                  break;
              case 2 /* inParens */:
                  if (char === `'` || char === `"` || char === '`') {
                      stateStack.push(state);
                      state = 3 /* inString */;
                      currentStringType = char;
                  }
                  else if (char === `(`) {
                      currentOpenParensCount++;
                  }
                  else if (char === `)`) {
                      // if the exp ends as a call then it should not be considered valid
                      if (i === path.length - 1) {
                          return false;
                      }
                      if (!--currentOpenParensCount) {
                          state = stateStack.pop();
                      }
                  }
                  break;
              case 3 /* inString */:
                  if (char === currentStringType) {
                      state = stateStack.pop();
                      currentStringType = null;
                  }
                  break;
          }
      }
      return !currentOpenBracketCount && !currentOpenParensCount;
  };
  const isMemberExpression = isMemberExpressionBrowser
      ;
  function getInnerRange(loc, offset, length) {
      const source = loc.source.slice(offset, offset + length);
      const newLoc = {
          source,
          start: advancePositionWithClone(loc.start, loc.source, offset),
          end: loc.end
      };
      if (length != null) {
          newLoc.end = advancePositionWithClone(loc.start, loc.source, offset + length);
      }
      return newLoc;
  }
  function advancePositionWithClone(pos, source, numberOfCharacters = source.length) {
      return advancePositionWithMutation(extend({}, pos), source, numberOfCharacters);
  }
  // advance by mutation without cloning (for performance reasons), since this
  // gets called a lot in the parser
  function advancePositionWithMutation(pos, source, numberOfCharacters = source.length) {
      let linesCount = 0;
      let lastNewLinePos = -1;
      for (let i = 0; i < numberOfCharacters; i++) {
          if (source.charCodeAt(i) === 10 /* newline char code */) {
              linesCount++;
              lastNewLinePos = i;
          }
      }
      pos.offset += numberOfCharacters;
      pos.line += linesCount;
      pos.column =
          lastNewLinePos === -1
              ? pos.column + numberOfCharacters
              : numberOfCharacters - lastNewLinePos;
      return pos;
  }
  function assert(condition, msg) {
      /* istanbul ignore if */
      if (!condition) {
          throw new Error(msg || `unexpected compiler condition`);
      }
  }
  function findDir(node, name, allowEmpty = false) {
      for (let i = 0; i < node.props.length; i++) {
          const p = node.props[i];
          if (p.type === 7 /* DIRECTIVE */ &&
              (allowEmpty || p.exp) &&
              (isString(name) ? p.name === name : name.test(p.name))) {
              return p;
          }
      }
  }
  function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
      for (let i = 0; i < node.props.length; i++) {
          const p = node.props[i];
          if (p.type === 6 /* ATTRIBUTE */) {
              if (dynamicOnly)
                  continue;
              if (p.name === name && (p.value || allowEmpty)) {
                  return p;
              }
          }
          else if (p.name === 'bind' &&
              (p.exp || allowEmpty) &&
              isBindKey(p.arg, name)) {
              return p;
          }
      }
  }
  function isBindKey(arg, name) {
      return !!(arg && isStaticExp(arg) && arg.content === name);
  }
  function hasDynamicKeyVBind(node) {
      return node.props.some(p => p.type === 7 /* DIRECTIVE */ &&
          p.name === 'bind' &&
          (!p.arg || // v-bind="obj"
              p.arg.type !== 4 /* SIMPLE_EXPRESSION */ || // v-bind:[_ctx.foo]
              !p.arg.isStatic) // v-bind:[foo]
      );
  }
  function isText(node) {
      return node.type === 5 /* INTERPOLATION */ || node.type === 2 /* TEXT */;
  }
  function isVSlot(p) {
      return p.type === 7 /* DIRECTIVE */ && p.name === 'slot';
  }
  function isTemplateNode(node) {
      return (node.type === 1 /* ELEMENT */ && node.tagType === 3 /* TEMPLATE */);
  }
  function isSlotOutlet(node) {
      return node.type === 1 /* ELEMENT */ && node.tagType === 2 /* SLOT */;
  }
  function getVNodeHelper(ssr, isComponent) {
      return ssr || isComponent ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
  }
  function getVNodeBlockHelper(ssr, isComponent) {
      return ssr || isComponent ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
  }
  const propsHelperSet = new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);
  function getUnnormalizedProps(props, callPath = []) {
      if (props &&
          !isString(props) &&
          props.type === 14 /* JS_CALL_EXPRESSION */) {
          const callee = props.callee;
          if (!isString(callee) && propsHelperSet.has(callee)) {
              return getUnnormalizedProps(props.arguments[0], callPath.concat(props));
          }
      }
      return [props, callPath];
  }
  function injectProp(node, prop, context) {
      let propsWithInjection;
      const originalProps = node.type === 13 /* VNODE_CALL */ ? node.props : node.arguments[2];
      /**
       * 1. mergeProps(...)
       * 2. toHandlers(...)
       * 3. normalizeProps(...)
       * 4. normalizeProps(guardReactiveProps(...))
       *
       * we need to get the real props before normalization
       */
      let props = originalProps;
      let callPath = [];
      let parentCall;
      if (props &&
          !isString(props) &&
          props.type === 14 /* JS_CALL_EXPRESSION */) {
          const ret = getUnnormalizedProps(props);
          props = ret[0];
          callPath = ret[1];
          parentCall = callPath[callPath.length - 1];
      }
      if (props == null || isString(props)) {
          propsWithInjection = createObjectExpression([prop]);
      }
      else if (props.type === 14 /* JS_CALL_EXPRESSION */) {
          // merged props... add ours
          // only inject key to object literal if it's the first argument so that
          // if doesn't override user provided keys
          const first = props.arguments[0];
          if (!isString(first) && first.type === 15 /* JS_OBJECT_EXPRESSION */) {
              first.properties.unshift(prop);
          }
          else {
              if (props.callee === TO_HANDLERS) {
                  // #2366
                  propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
                      createObjectExpression([prop]),
                      props
                  ]);
              }
              else {
                  props.arguments.unshift(createObjectExpression([prop]));
              }
          }
          !propsWithInjection && (propsWithInjection = props);
      }
      else if (props.type === 15 /* JS_OBJECT_EXPRESSION */) {
          let alreadyExists = false;
          // check existing key to avoid overriding user provided keys
          if (prop.key.type === 4 /* SIMPLE_EXPRESSION */) {
              const propKeyName = prop.key.content;
              alreadyExists = props.properties.some(p => p.key.type === 4 /* SIMPLE_EXPRESSION */ &&
                  p.key.content === propKeyName);
          }
          if (!alreadyExists) {
              props.properties.unshift(prop);
          }
          propsWithInjection = props;
      }
      else {
          // single v-bind with expression, return a merged replacement
          propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
              createObjectExpression([prop]),
              props
          ]);
          // in the case of nested helper call, e.g. `normalizeProps(guardReactiveProps(props))`,
          // it will be rewritten as `normalizeProps(mergeProps({ key: 0 }, props))`,
          // the `guardReactiveProps` will no longer be needed
          if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) {
              parentCall = callPath[callPath.length - 2];
          }
      }
      if (node.type === 13 /* VNODE_CALL */) {
          if (parentCall) {
              parentCall.arguments[0] = propsWithInjection;
          }
          else {
              node.props = propsWithInjection;
          }
      }
      else {
          if (parentCall) {
              parentCall.arguments[0] = propsWithInjection;
          }
          else {
              node.arguments[2] = propsWithInjection;
          }
      }
  }
  function toValidAssetId(name, type) {
      // see issue#4422, we need adding identifier on validAssetId if variable `name` has specific character
      return `_${type}_${name.replace(/[^\w]/g, (searchValue, replaceValue) => {
        return searchValue === '-' ? '_' : name.charCodeAt(replaceValue).toString();
    })}`;
  }
  function getMemoedVNodeCall(node) {
      if (node.type === 14 /* JS_CALL_EXPRESSION */ && node.callee === WITH_MEMO) {
          return node.arguments[1].returns;
      }
      else {
          return node;
      }
  }
  function makeBlock(node, { helper, removeHelper, inSSR }) {
      if (!node.isBlock) {
          node.isBlock = true;
          removeHelper(getVNodeHelper(inSSR, node.isComponent));
          helper(OPEN_BLOCK);
          helper(getVNodeBlockHelper(inSSR, node.isComponent));
      }
  }

  const deprecationData = {
      ["COMPILER_IS_ON_ELEMENT" /* COMPILER_IS_ON_ELEMENT */]: {
          message: `Platform-native elements with "is" prop will no longer be ` +
              `treated as components in Vue 3 unless the "is" value is explicitly ` +
              `prefixed with "vue:".`,
          link: `https://v3.vuejs.org/guide/migration/custom-elements-interop.html`
      },
      ["COMPILER_V_BIND_SYNC" /* COMPILER_V_BIND_SYNC */]: {
          message: key => `.sync modifier for v-bind has been removed. Use v-model with ` +
              `argument instead. \`v-bind:${key}.sync\` should be changed to ` +
              `\`v-model:${key}\`.`,
          link: `https://v3.vuejs.org/guide/migration/v-model.html`
      },
      ["COMPILER_V_BIND_PROP" /* COMPILER_V_BIND_PROP */]: {
          message: `.prop modifier for v-bind has been removed and no longer necessary. ` +
              `Vue 3 will automatically set a binding as DOM property when appropriate.`
      },
      ["COMPILER_V_BIND_OBJECT_ORDER" /* COMPILER_V_BIND_OBJECT_ORDER */]: {
          message: `v-bind="obj" usage is now order sensitive and behaves like JavaScript ` +
              `object spread: it will now overwrite an existing non-mergeable attribute ` +
              `that appears before v-bind in the case of conflict. ` +
              `To retain 2.x behavior, move v-bind to make it the first attribute. ` +
              `You can also suppress this warning if the usage is intended.`,
          link: `https://v3.vuejs.org/guide/migration/v-bind.html`
      },
      ["COMPILER_V_ON_NATIVE" /* COMPILER_V_ON_NATIVE */]: {
          message: `.native modifier for v-on has been removed as is no longer necessary.`,
          link: `https://v3.vuejs.org/guide/migration/v-on-native-modifier-removed.html`
      },
      ["COMPILER_V_IF_V_FOR_PRECEDENCE" /* COMPILER_V_IF_V_FOR_PRECEDENCE */]: {
          message: `v-if / v-for precedence when used on the same element has changed ` +
              `in Vue 3: v-if now takes higher precedence and will no longer have ` +
              `access to v-for scope variables. It is best to avoid the ambiguity ` +
              `with <template> tags or use a computed property that filters v-for ` +
              `data source.`,
          link: `https://v3.vuejs.org/guide/migration/v-if-v-for.html`
      },
      ["COMPILER_V_FOR_REF" /* COMPILER_V_FOR_REF */]: {
          message: `Ref usage on v-for no longer creates array ref values in Vue 3. ` +
              `Consider using function refs or refactor to avoid ref usage altogether.`,
          link: `https://v3.vuejs.org/guide/migration/array-refs.html`
      },
      ["COMPILER_NATIVE_TEMPLATE" /* COMPILER_NATIVE_TEMPLATE */]: {
          message: `<template> with no special directives will render as a native template ` +
              `element instead of its inner content in Vue 3.`
      },
      ["COMPILER_INLINE_TEMPLATE" /* COMPILER_INLINE_TEMPLATE */]: {
          message: `"inline-template" has been removed in Vue 3.`,
          link: `https://v3.vuejs.org/guide/migration/inline-template-attribute.html`
      },
      ["COMPILER_FILTER" /* COMPILER_FILTERS */]: {
          message: `filters have been removed in Vue 3. ` +
              `The "|" symbol will be treated as native JavaScript bitwise OR operator. ` +
              `Use method calls or computed properties instead.`,
          link: `https://v3.vuejs.org/guide/migration/filters.html`
      }
  };
  function getCompatValue(key, context) {
      const config = context.options
          ? context.options.compatConfig
          : context.compatConfig;
      const value = config && config[key];
      if (key === 'MODE') {
          return value || 3; // compiler defaults to v3 behavior
      }
      else {
          return value;
      }
  }
  function isCompatEnabled(key, context) {
      const mode = getCompatValue('MODE', context);
      const value = getCompatValue(key, context);
      // in v3 mode, only enable if explicitly set to true
      // otherwise enable for any non-false value
      return mode === 3 ? value === true : value !== false;
  }
  function checkCompatEnabled(key, context, loc, ...args) {
      const enabled = isCompatEnabled(key, context);
      if (enabled) {
          warnDeprecation(key, context, loc, ...args);
      }
      return enabled;
  }
  function warnDeprecation(key, context, loc, ...args) {
      const val = getCompatValue(key, context);
      if (val === 'suppress-warning') {
          return;
      }
      const { message, link } = deprecationData[key];
      const msg = `(deprecation ${key}) ${typeof message === 'function' ? message(...args) : message}${link ? `\n  Details: ${link}` : ``}`;
      const err = new SyntaxError(msg);
      err.code = key;
      if (loc)
          err.loc = loc;
      context.onWarn(err);
  }

  // The default decoder only provides escapes for characters reserved as part of
  // the template syntax, and is only used if the custom renderer did not provide
  // a platform-specific decoder.
  const decodeRE = /&(gt|lt|amp|apos|quot);/g;
  const decodeMap = {
      gt: '>',
      lt: '<',
      amp: '&',
      apos: "'",
      quot: '"'
  };
  const defaultParserOptions = {
      delimiters: [`{{`, `}}`],
      getNamespace: () => 0 /* HTML */,
      getTextMode: () => 0 /* DATA */,
      isVoidTag: NO,
      isPreTag: NO,
      isCustomElement: NO,
      decodeEntities: (rawText) => rawText.replace(decodeRE, (_, p1) => decodeMap[p1]),
      onError: defaultOnError,
      onWarn: defaultOnWarn,
      comments: true
  };
  function baseParse(content, options = {}) {
      const context = createParserContext(content, options);
      const start = getCursor(context);
      return createRoot(parseChildren(context, 0 /* DATA */, []), getSelection(context, start));
  }
  function createParserContext(content, rawOptions) {
      const options = extend({}, defaultParserOptions);
      let key;
      for (key in rawOptions) {
          // @ts-ignore
          options[key] =
              rawOptions[key] === undefined
                  ? defaultParserOptions[key]
                  : rawOptions[key];
      }
      return {
          options,
          column: 1,
          line: 1,
          offset: 0,
          originalSource: content,
          source: content,
          inPre: false,
          inVPre: false,
          onWarn: options.onWarn
      };
  }
  function parseChildren(context, mode, ancestors) {
      const parent = last(ancestors);
      const ns = parent ? parent.ns : 0 /* HTML */;
      const nodes = [];
      while (!isEnd(context, mode, ancestors)) {
          const s = context.source;
          let node = undefined;
          if (mode === 0 /* DATA */ || mode === 1 /* RCDATA */) {
              if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
                  // '{{'
                  node = parseInterpolation(context, mode);
              }
              else if (mode === 0 /* DATA */ && s[0] === '<') {
                  // https://html.spec.whatwg.org/multipage/parsing.html#tag-open-state
                  if (s.length === 1) {
                      emitError(context, 5 /* EOF_BEFORE_TAG_NAME */, 1);
                  }
                  else if (s[1] === '!') {
                      // https://html.spec.whatwg.org/multipage/parsing.html#markup-declaration-open-state
                      if (startsWith(s, '<!--')) {
                          node = parseComment(context);
                      }
                      else if (startsWith(s, '<!DOCTYPE')) {
                          // Ignore DOCTYPE by a limitation.
                          node = parseBogusComment(context);
                      }
                      else if (startsWith(s, '<![CDATA[')) {
                          if (ns !== 0 /* HTML */) {
                              node = parseCDATA(context, ancestors);
                          }
                          else {
                              emitError(context, 1 /* CDATA_IN_HTML_CONTENT */);
                              node = parseBogusComment(context);
                          }
                      }
                      else {
                          emitError(context, 11 /* INCORRECTLY_OPENED_COMMENT */);
                          node = parseBogusComment(context);
                      }
                  }
                  else if (s[1] === '/') {
                      // https://html.spec.whatwg.org/multipage/parsing.html#end-tag-open-state
                      if (s.length === 2) {
                          emitError(context, 5 /* EOF_BEFORE_TAG_NAME */, 2);
                      }
                      else if (s[2] === '>') {
                          emitError(context, 14 /* MISSING_END_TAG_NAME */, 2);
                          advanceBy(context, 3);
                          continue;
                      }
                      else if (/[a-z]/i.test(s[2])) {
                          emitError(context, 23 /* X_INVALID_END_TAG */);
                          parseTag(context, 1 /* End */, parent);
                          continue;
                      }
                      else {
                          emitError(context, 12 /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */, 2);
                          node = parseBogusComment(context);
                      }
                  }
                  else if (/[a-z]/i.test(s[1])) {
                      node = parseElement(context, ancestors);
                  }
                  else if (s[1] === '?') {
                      emitError(context, 21 /* UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */, 1);
                      node = parseBogusComment(context);
                  }
                  else {
                      emitError(context, 12 /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */, 1);
                  }
              }
          }
          if (!node) {
              node = parseText(context, mode);
          }
          if (isArray(node)) {
              for (let i = 0; i < node.length; i++) {
                  pushNode(nodes, node[i]);
              }
          }
          else {
              pushNode(nodes, node);
          }
      }
      // Whitespace handling strategy like v2
      let removedWhitespace = false;
      if (mode !== 2 /* RAWTEXT */ && mode !== 1 /* RCDATA */) {
          const shouldCondense = context.options.whitespace !== 'preserve';
          for (let i = 0; i < nodes.length; i++) {
              const node = nodes[i];
              if (!context.inPre && node.type === 2 /* TEXT */) {
                  if (!/[^\t\r\n\f ]/.test(node.content)) {
                      const prev = nodes[i - 1];
                      const next = nodes[i + 1];
                      // Remove if:
                      // - the whitespace is the first or last node, or:
                      // - (condense mode) the whitespace is adjacent to a comment, or:
                      // - (condense mode) the whitespace is between two elements AND contains newline
                      if (!prev ||
                          !next ||
                          (shouldCondense &&
                              (prev.type === 3 /* COMMENT */ ||
                                  next.type === 3 /* COMMENT */ ||
                                  (prev.type === 1 /* ELEMENT */ &&
                                      next.type === 1 /* ELEMENT */ &&
                                      /[\r\n]/.test(node.content))))) {
                          removedWhitespace = true;
                          nodes[i] = null;
                      }
                      else {
                          // Otherwise, the whitespace is condensed into a single space
                          node.content = ' ';
                      }
                  }
                  else if (shouldCondense) {
                      // in condense mode, consecutive whitespaces in text are condensed
                      // down to a single space.
                      node.content = node.content.replace(/[\t\r\n\f ]+/g, ' ');
                  }
              }
              // Remove comment nodes if desired by configuration.
              else if (node.type === 3 /* COMMENT */ && !context.options.comments) {
                  removedWhitespace = true;
                  nodes[i] = null;
              }
          }
          if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
              // remove leading newline per html spec
              // https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element
              const first = nodes[0];
              if (first && first.type === 2 /* TEXT */) {
                  first.content = first.content.replace(/^\r?\n/, '');
              }
          }
      }
      return removedWhitespace ? nodes.filter(Boolean) : nodes;
  }
  function pushNode(nodes, node) {
      if (node.type === 2 /* TEXT */) {
          const prev = last(nodes);
          // Merge if both this and the previous node are text and those are
          // consecutive. This happens for cases like "a < b".
          if (prev &&
              prev.type === 2 /* TEXT */ &&
              prev.loc.end.offset === node.loc.start.offset) {
              prev.content += node.content;
              prev.loc.end = node.loc.end;
              prev.loc.source += node.loc.source;
              return;
          }
      }
      nodes.push(node);
  }
  function parseCDATA(context, ancestors) {
      advanceBy(context, 9);
      const nodes = parseChildren(context, 3 /* CDATA */, ancestors);
      if (context.source.length === 0) {
          emitError(context, 6 /* EOF_IN_CDATA */);
      }
      else {
          advanceBy(context, 3);
      }
      return nodes;
  }
  function parseComment(context) {
      const start = getCursor(context);
      let content;
      // Regular comment.
      const match = /--(\!)?>/.exec(context.source);
      if (!match) {
          content = context.source.slice(4);
          advanceBy(context, context.source.length);
          emitError(context, 7 /* EOF_IN_COMMENT */);
      }
      else {
          if (match.index <= 3) {
              emitError(context, 0 /* ABRUPT_CLOSING_OF_EMPTY_COMMENT */);
          }
          if (match[1]) {
              emitError(context, 10 /* INCORRECTLY_CLOSED_COMMENT */);
          }
          content = context.source.slice(4, match.index);
          // Advancing with reporting nested comments.
          const s = context.source.slice(0, match.index);
          let prevIndex = 1, nestedIndex = 0;
          while ((nestedIndex = s.indexOf('<!--', prevIndex)) !== -1) {
              advanceBy(context, nestedIndex - prevIndex + 1);
              if (nestedIndex + 4 < s.length) {
                  emitError(context, 16 /* NESTED_COMMENT */);
              }
              prevIndex = nestedIndex + 1;
          }
          advanceBy(context, match.index + match[0].length - prevIndex + 1);
      }
      return {
          type: 3 /* COMMENT */,
          content,
          loc: getSelection(context, start)
      };
  }
  function parseBogusComment(context) {
      const start = getCursor(context);
      const contentStart = context.source[1] === '?' ? 1 : 2;
      let content;
      const closeIndex = context.source.indexOf('>');
      if (closeIndex === -1) {
          content = context.source.slice(contentStart);
          advanceBy(context, context.source.length);
      }
      else {
          content = context.source.slice(contentStart, closeIndex);
          advanceBy(context, closeIndex + 1);
      }
      return {
          type: 3 /* COMMENT */,
          content,
          loc: getSelection(context, start)
      };
  }
  function parseElement(context, ancestors) {
      // Start tag.
      const wasInPre = context.inPre;
      const wasInVPre = context.inVPre;
      const parent = last(ancestors);
      const element = parseTag(context, 0 /* Start */, parent);
      const isPreBoundary = context.inPre && !wasInPre;
      const isVPreBoundary = context.inVPre && !wasInVPre;
      if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
          // #4030 self-closing <pre> tag
          if (isPreBoundary) {
              context.inPre = false;
          }
          if (isVPreBoundary) {
              context.inVPre = false;
          }
          return element;
      }
      // Children.
      ancestors.push(element);
      const mode = context.options.getTextMode(element, parent);
      const children = parseChildren(context, mode, ancestors);
      ancestors.pop();
      element.children = children;
      // End tag.
      if (startsWithEndTagOpen(context.source, element.tag)) {
          parseTag(context, 1 /* End */, parent);
      }
      else {
          emitError(context, 24 /* X_MISSING_END_TAG */, 0, element.loc.start);
          if (context.source.length === 0 && element.tag.toLowerCase() === 'script') {
              const first = children[0];
              if (first && startsWith(first.loc.source, '<!--')) {
                  emitError(context, 8 /* EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */);
              }
          }
      }
      element.loc = getSelection(context, element.loc.start);
      if (isPreBoundary) {
          context.inPre = false;
      }
      if (isVPreBoundary) {
          context.inVPre = false;
      }
      return element;
  }
  const isSpecialTemplateDirective = /*#__PURE__*/ makeMap(`if,else,else-if,for,slot`);
  function parseTag(context, type, parent) {
      // Tag open.
      const start = getCursor(context);
      const match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
      const tag = match[1];
      const ns = context.options.getNamespace(tag, parent);
      advanceBy(context, match[0].length);
      advanceSpaces(context);
      // save current state in case we need to re-parse attributes with v-pre
      const cursor = getCursor(context);
      const currentSource = context.source;
      // check <pre> tag
      if (context.options.isPreTag(tag)) {
          context.inPre = true;
      }
      // Attributes.
      let props = parseAttributes(context, type);
      // check v-pre
      if (type === 0 /* Start */ &&
          !context.inVPre &&
          props.some(p => p.type === 7 /* DIRECTIVE */ && p.name === 'pre')) {
          context.inVPre = true;
          // reset context
          extend(context, cursor);
          context.source = currentSource;
          // re-parse attrs and filter out v-pre itself
          props = parseAttributes(context, type).filter(p => p.name !== 'v-pre');
      }
      // Tag close.
      let isSelfClosing = false;
      if (context.source.length === 0) {
          emitError(context, 9 /* EOF_IN_TAG */);
      }
      else {
          isSelfClosing = startsWith(context.source, '/>');
          if (type === 1 /* End */ && isSelfClosing) {
              emitError(context, 4 /* END_TAG_WITH_TRAILING_SOLIDUS */);
          }
          advanceBy(context, isSelfClosing ? 2 : 1);
      }
      if (type === 1 /* End */) {
          return;
      }
      let tagType = 0 /* ELEMENT */;
      if (!context.inVPre) {
          if (tag === 'slot') {
              tagType = 2 /* SLOT */;
          }
          else if (tag === 'template') {
              if (props.some(p => p.type === 7 /* DIRECTIVE */ && isSpecialTemplateDirective(p.name))) {
                  tagType = 3 /* TEMPLATE */;
              }
          }
          else if (isComponent(tag, props, context)) {
              tagType = 1 /* COMPONENT */;
          }
      }
      return {
          type: 1 /* ELEMENT */,
          ns,
          tag,
          tagType,
          props,
          isSelfClosing,
          children: [],
          loc: getSelection(context, start),
          codegenNode: undefined // to be created during transform phase
      };
  }
  function isComponent(tag, props, context) {
      const options = context.options;
      if (options.isCustomElement(tag)) {
          return false;
      }
      if (tag === 'component' ||
          /^[A-Z]/.test(tag) ||
          isCoreComponent(tag) ||
          (options.isBuiltInComponent && options.isBuiltInComponent(tag)) ||
          (options.isNativeTag && !options.isNativeTag(tag))) {
          return true;
      }
      // at this point the tag should be a native tag, but check for potential "is"
      // casting
      for (let i = 0; i < props.length; i++) {
          const p = props[i];
          if (p.type === 6 /* ATTRIBUTE */) {
              if (p.name === 'is' && p.value) {
                  if (p.value.content.startsWith('vue:')) {
                      return true;
                  }
              }
          }
          else {
              // directive
              // v-is (TODO Deprecate)
              if (p.name === 'is') {
                  return true;
              }
              else if (
              // :is on plain element - only treat as component in compat mode
              p.name === 'bind' &&
                  isBindKey(p.arg, 'is') &&
                  false &&
                  checkCompatEnabled("COMPILER_IS_ON_ELEMENT" /* COMPILER_IS_ON_ELEMENT */, context, p.loc)) {
                  return true;
              }
          }
      }
  }
  function parseAttributes(context, type) {
      const props = [];
      const attributeNames = new Set();
      while (context.source.length > 0 &&
          !startsWith(context.source, '>') &&
          !startsWith(context.source, '/>')) {
          if (startsWith(context.source, '/')) {
              emitError(context, 22 /* UNEXPECTED_SOLIDUS_IN_TAG */);
              advanceBy(context, 1);
              advanceSpaces(context);
              continue;
          }
          if (type === 1 /* End */) {
              emitError(context, 3 /* END_TAG_WITH_ATTRIBUTES */);
          }
          const attr = parseAttribute(context, attributeNames);
          // Trim whitespace between class
          // https://github.com/vuejs/vue-next/issues/4251
          if (attr.type === 6 /* ATTRIBUTE */ &&
              attr.value &&
              attr.name === 'class') {
              attr.value.content = attr.value.content.replace(/\s+/g, ' ').trim();
          }
          if (type === 0 /* Start */) {
              props.push(attr);
          }
          if (/^[^\t\r\n\f />]/.test(context.source)) {
              emitError(context, 15 /* MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */);
          }
          advanceSpaces(context);
      }
      return props;
  }
  function parseAttribute(context, nameSet) {
      // Name.
      const start = getCursor(context);
      const match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
      const name = match[0];
      if (nameSet.has(name)) {
          emitError(context, 2 /* DUPLICATE_ATTRIBUTE */);
      }
      nameSet.add(name);
      if (name[0] === '=') {
          emitError(context, 19 /* UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */);
      }
      {
          const pattern = /["'<]/g;
          let m;
          while ((m = pattern.exec(name))) {
              emitError(context, 17 /* UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */, m.index);
          }
      }
      advanceBy(context, name.length);
      // Value
      let value = undefined;
      if (/^[\t\r\n\f ]*=/.test(context.source)) {
          advanceSpaces(context);
          advanceBy(context, 1);
          advanceSpaces(context);
          value = parseAttributeValue(context);
          if (!value) {
              emitError(context, 13 /* MISSING_ATTRIBUTE_VALUE */);
          }
      }
      const loc = getSelection(context, start);
      if (!context.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(name)) {
          const match = /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(name);
          let isPropShorthand = startsWith(name, '.');
          let dirName = match[1] ||
              (isPropShorthand || startsWith(name, ':')
                  ? 'bind'
                  : startsWith(name, '@')
                      ? 'on'
                      : 'slot');
          let arg;
          if (match[2]) {
              const isSlot = dirName === 'slot';
              const startOffset = name.lastIndexOf(match[2]);
              const loc = getSelection(context, getNewPosition(context, start, startOffset), getNewPosition(context, start, startOffset + match[2].length + ((isSlot && match[3]) || '').length));
              let content = match[2];
              let isStatic = true;
              if (content.startsWith('[')) {
                  isStatic = false;
                  if (!content.endsWith(']')) {
                      emitError(context, 27 /* X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */);
                      content = content.slice(1);
                  }
                  else {
                      content = content.slice(1, content.length - 1);
                  }
              }
              else if (isSlot) {
                  // #1241 special case for v-slot: vuetify relies extensively on slot
                  // names containing dots. v-slot doesn't have any modifiers and Vue 2.x
                  // supports such usage so we are keeping it consistent with 2.x.
                  content += match[3] || '';
              }
              arg = {
                  type: 4 /* SIMPLE_EXPRESSION */,
                  content,
                  isStatic,
                  constType: isStatic
                      ? 3 /* CAN_STRINGIFY */
                      : 0 /* NOT_CONSTANT */,
                  loc
              };
          }
          if (value && value.isQuoted) {
              const valueLoc = value.loc;
              valueLoc.start.offset++;
              valueLoc.start.column++;
              valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
              valueLoc.source = valueLoc.source.slice(1, -1);
          }
          const modifiers = match[3] ? match[3].slice(1).split('.') : [];
          if (isPropShorthand)
              modifiers.push('prop');
          return {
              type: 7 /* DIRECTIVE */,
              name: dirName,
              exp: value && {
                  type: 4 /* SIMPLE_EXPRESSION */,
                  content: value.content,
                  isStatic: false,
                  // Treat as non-constant by default. This can be potentially set to
                  // other values by `transformExpression` to make it eligible for hoisting.
                  constType: 0 /* NOT_CONSTANT */,
                  loc: value.loc
              },
              arg,
              modifiers,
              loc
          };
      }
      // missing directive name or illegal directive name
      if (!context.inVPre && startsWith(name, 'v-')) {
          emitError(context, 26 /* X_MISSING_DIRECTIVE_NAME */);
      }
      return {
          type: 6 /* ATTRIBUTE */,
          name,
          value: value && {
              type: 2 /* TEXT */,
              content: value.content,
              loc: value.loc
          },
          loc
      };
  }
  function parseAttributeValue(context) {
      const start = getCursor(context);
      let content;
      const quote = context.source[0];
      const isQuoted = quote === `"` || quote === `'`;
      if (isQuoted) {
          // Quoted value.
          advanceBy(context, 1);
          const endIndex = context.source.indexOf(quote);
          if (endIndex === -1) {
              content = parseTextData(context, context.source.length, 4 /* ATTRIBUTE_VALUE */);
          }
          else {
              content = parseTextData(context, endIndex, 4 /* ATTRIBUTE_VALUE */);
              advanceBy(context, 1);
          }
      }
      else {
          // Unquoted
          const match = /^[^\t\r\n\f >]+/.exec(context.source);
          if (!match) {
              return undefined;
          }
          const unexpectedChars = /["'<=`]/g;
          let m;
          while ((m = unexpectedChars.exec(match[0]))) {
              emitError(context, 18 /* UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */, m.index);
          }
          content = parseTextData(context, match[0].length, 4 /* ATTRIBUTE_VALUE */);
      }
      return { content, isQuoted, loc: getSelection(context, start) };
  }
  function parseInterpolation(context, mode) {
      const [open, close] = context.options.delimiters;
      const closeIndex = context.source.indexOf(close, open.length);
      if (closeIndex === -1) {
          emitError(context, 25 /* X_MISSING_INTERPOLATION_END */);
          return undefined;
      }
      const start = getCursor(context);
      advanceBy(context, open.length);
      const innerStart = getCursor(context);
      const innerEnd = getCursor(context);
      const rawContentLength = closeIndex - open.length;
      const rawContent = context.source.slice(0, rawContentLength);
      const preTrimContent = parseTextData(context, rawContentLength, mode);
      const content = preTrimContent.trim();
      const startOffset = preTrimContent.indexOf(content);
      if (startOffset > 0) {
          advancePositionWithMutation(innerStart, rawContent, startOffset);
      }
      const endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
      advancePositionWithMutation(innerEnd, rawContent, endOffset);
      advanceBy(context, close.length);
      return {
          type: 5 /* INTERPOLATION */,
          content: {
              type: 4 /* SIMPLE_EXPRESSION */,
              isStatic: false,
              // Set `isConstant` to false by default and will decide in transformExpression
              constType: 0 /* NOT_CONSTANT */,
              content,
              loc: getSelection(context, innerStart, innerEnd)
          },
          loc: getSelection(context, start)
      };
  }
  function parseText(context, mode) {
      const endTokens = mode === 3 /* CDATA */ ? [']]>'] : ['<', context.options.delimiters[0]];
      let endIndex = context.source.length;
      for (let i = 0; i < endTokens.length; i++) {
          const index = context.source.indexOf(endTokens[i], 1);
          if (index !== -1 && endIndex > index) {
              endIndex = index;
          }
      }
      const start = getCursor(context);
      const content = parseTextData(context, endIndex, mode);
      return {
          type: 2 /* TEXT */,
          content,
          loc: getSelection(context, start)
      };
  }
  /**
   * Get text data with a given length from the current location.
   * This translates HTML entities in the text data.
   */
  function parseTextData(context, length, mode) {
      const rawText = context.source.slice(0, length);
      advanceBy(context, length);
      if (mode === 2 /* RAWTEXT */ ||
          mode === 3 /* CDATA */ ||
          rawText.indexOf('&') === -1) {
          return rawText;
      }
      else {
          // DATA or RCDATA containing "&"". Entity decoding required.
          return context.options.decodeEntities(rawText, mode === 4 /* ATTRIBUTE_VALUE */);
      }
  }
  function getCursor(context) {
      const { column, line, offset } = context;
      return { column, line, offset };
  }
  function getSelection(context, start, end) {
      end = end || getCursor(context);
      return {
          start,
          end,
          source: context.originalSource.slice(start.offset, end.offset)
      };
  }
  function last(xs) {
      return xs[xs.length - 1];
  }
  function startsWith(source, searchString) {
      return source.startsWith(searchString);
  }
  function advanceBy(context, numberOfCharacters) {
      const { source } = context;
      advancePositionWithMutation(context, source, numberOfCharacters);
      context.source = source.slice(numberOfCharacters);
  }
  function advanceSpaces(context) {
      const match = /^[\t\r\n\f ]+/.exec(context.source);
      if (match) {
          advanceBy(context, match[0].length);
      }
  }
  function getNewPosition(context, start, numberOfCharacters) {
      return advancePositionWithClone(start, context.originalSource.slice(start.offset, numberOfCharacters), numberOfCharacters);
  }
  function emitError(context, code, offset, loc = getCursor(context)) {
      if (offset) {
          loc.offset += offset;
          loc.column += offset;
      }
      context.options.onError(createCompilerError(code, {
          start: loc,
          end: loc,
          source: ''
      }));
  }
  function isEnd(context, mode, ancestors) {
      const s = context.source;
      switch (mode) {
          case 0 /* DATA */:
              if (startsWith(s, '</')) {
                  // TODO: probably bad performance
                  for (let i = ancestors.length - 1; i >= 0; --i) {
                      if (startsWithEndTagOpen(s, ancestors[i].tag)) {
                          return true;
                      }
                  }
              }
              break;
          case 1 /* RCDATA */:
          case 2 /* RAWTEXT */: {
              const parent = last(ancestors);
              if (parent && startsWithEndTagOpen(s, parent.tag)) {
                  return true;
              }
              break;
          }
          case 3 /* CDATA */:
              if (startsWith(s, ']]>')) {
                  return true;
              }
              break;
      }
      return !s;
  }
  function startsWithEndTagOpen(source, tag) {
      return (startsWith(source, '</') &&
          source.slice(2, 2 + tag.length).toLowerCase() === tag.toLowerCase() &&
          /[\t\r\n\f />]/.test(source[2 + tag.length] || '>'));
  }

  function hoistStatic(root, context) {
      walk(root, context, 
      // Root node is unfortunately non-hoistable due to potential parent
      // fallthrough attributes.
      isSingleElementRoot(root, root.children[0]));
  }
  function isSingleElementRoot(root, child) {
      const { children } = root;
      return (children.length === 1 &&
          child.type === 1 /* ELEMENT */ &&
          !isSlotOutlet(child));
  }
  function walk(node, context, doNotHoistNode = false) {
      // Some transforms, e.g. transformAssetUrls from @vue/compiler-sfc, replaces
      // static bindings with expressions. These expressions are guaranteed to be
      // constant so they are still eligible for hoisting, but they are only
      // available at runtime and therefore cannot be evaluated ahead of time.
      // This is only a concern for pre-stringification (via transformHoist by
      // @vue/compiler-dom), but doing it here allows us to perform only one full
      // walk of the AST and allow `stringifyStatic` to stop walking as soon as its
      // stringification threshold is met.
      let canStringify = true;
      const { children } = node;
      const originalCount = children.length;
      let hoistedCount = 0;
      for (let i = 0; i < children.length; i++) {
          const child = children[i];
          // only plain elements & text calls are eligible for hoisting.
          if (child.type === 1 /* ELEMENT */ &&
              child.tagType === 0 /* ELEMENT */) {
              const constantType = doNotHoistNode
                  ? 0 /* NOT_CONSTANT */
                  : getConstantType(child, context);
              if (constantType > 0 /* NOT_CONSTANT */) {
                  if (constantType < 3 /* CAN_STRINGIFY */) {
                      canStringify = false;
                  }
                  if (constantType >= 2 /* CAN_HOIST */) {
                      child.codegenNode.patchFlag =
                          -1 /* HOISTED */ + (` /* HOISTED */` );
                      child.codegenNode = context.hoist(child.codegenNode);
                      hoistedCount++;
                      continue;
                  }
              }
              else {
                  // node may contain dynamic children, but its props may be eligible for
                  // hoisting.
                  const codegenNode = child.codegenNode;
                  if (codegenNode.type === 13 /* VNODE_CALL */) {
                      const flag = getPatchFlag(codegenNode);
                      if ((!flag ||
                          flag === 512 /* NEED_PATCH */ ||
                          flag === 1 /* TEXT */) &&
                          getGeneratedPropsConstantType(child, context) >=
                              2 /* CAN_HOIST */) {
                          const props = getNodeProps(child);
                          if (props) {
                              codegenNode.props = context.hoist(props);
                          }
                      }
                      if (codegenNode.dynamicProps) {
                          codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
                      }
                  }
              }
          }
          else if (child.type === 12 /* TEXT_CALL */) {
              const contentType = getConstantType(child.content, context);
              if (contentType > 0) {
                  if (contentType < 3 /* CAN_STRINGIFY */) {
                      canStringify = false;
                  }
                  if (contentType >= 2 /* CAN_HOIST */) {
                      child.codegenNode = context.hoist(child.codegenNode);
                      hoistedCount++;
                  }
              }
          }
          // walk further
          if (child.type === 1 /* ELEMENT */) {
              const isComponent = child.tagType === 1 /* COMPONENT */;
              if (isComponent) {
                  context.scopes.vSlot++;
              }
              walk(child, context);
              if (isComponent) {
                  context.scopes.vSlot--;
              }
          }
          else if (child.type === 11 /* FOR */) {
              // Do not hoist v-for single child because it has to be a block
              walk(child, context, child.children.length === 1);
          }
          else if (child.type === 9 /* IF */) {
              for (let i = 0; i < child.branches.length; i++) {
                  // Do not hoist v-if single child because it has to be a block
                  walk(child.branches[i], context, child.branches[i].children.length === 1);
              }
          }
      }
      if (canStringify && hoistedCount && context.transformHoist) {
          context.transformHoist(children, context, node);
      }
      // all children were hoisted - the entire children array is hoistable.
      if (hoistedCount &&
          hoistedCount === originalCount &&
          node.type === 1 /* ELEMENT */ &&
          node.tagType === 0 /* ELEMENT */ &&
          node.codegenNode &&
          node.codegenNode.type === 13 /* VNODE_CALL */ &&
          isArray(node.codegenNode.children)) {
          node.codegenNode.children = context.hoist(createArrayExpression(node.codegenNode.children));
      }
  }
  function getConstantType(node, context) {
      const { constantCache } = context;
      switch (node.type) {
          case 1 /* ELEMENT */:
              if (node.tagType !== 0 /* ELEMENT */) {
                  return 0 /* NOT_CONSTANT */;
              }
              const cached = constantCache.get(node);
              if (cached !== undefined) {
                  return cached;
              }
              const codegenNode = node.codegenNode;
              if (codegenNode.type !== 13 /* VNODE_CALL */) {
                  return 0 /* NOT_CONSTANT */;
              }
              const flag = getPatchFlag(codegenNode);
              if (!flag) {
                  let returnType = 3 /* CAN_STRINGIFY */;
                  // Element itself has no patch flag. However we still need to check:
                  // 1. Even for a node with no patch flag, it is possible for it to contain
                  // non-hoistable expressions that refers to scope variables, e.g. compiler
                  // injected keys or cached event handlers. Therefore we need to always
                  // check the codegenNode's props to be sure.
                  const generatedPropsType = getGeneratedPropsConstantType(node, context);
                  if (generatedPropsType === 0 /* NOT_CONSTANT */) {
                      constantCache.set(node, 0 /* NOT_CONSTANT */);
                      return 0 /* NOT_CONSTANT */;
                  }
                  if (generatedPropsType < returnType) {
                      returnType = generatedPropsType;
                  }
                  // 2. its children.
                  for (let i = 0; i < node.children.length; i++) {
                      const childType = getConstantType(node.children[i], context);
                      if (childType === 0 /* NOT_CONSTANT */) {
                          constantCache.set(node, 0 /* NOT_CONSTANT */);
                          return 0 /* NOT_CONSTANT */;
                      }
                      if (childType < returnType) {
                          returnType = childType;
                      }
                  }
                  // 3. if the type is not already CAN_SKIP_PATCH which is the lowest non-0
                  // type, check if any of the props can cause the type to be lowered
                  // we can skip can_patch because it's guaranteed by the absence of a
                  // patchFlag.
                  if (returnType > 1 /* CAN_SKIP_PATCH */) {
                      for (let i = 0; i < node.props.length; i++) {
                          const p = node.props[i];
                          if (p.type === 7 /* DIRECTIVE */ && p.name === 'bind' && p.exp) {
                              const expType = getConstantType(p.exp, context);
                              if (expType === 0 /* NOT_CONSTANT */) {
                                  constantCache.set(node, 0 /* NOT_CONSTANT */);
                                  return 0 /* NOT_CONSTANT */;
                              }
                              if (expType < returnType) {
                                  returnType = expType;
                              }
                          }
                      }
                  }
                  // only svg/foreignObject could be block here, however if they are
                  // static then they don't need to be blocks since there will be no
                  // nested updates.
                  if (codegenNode.isBlock) {
                      context.removeHelper(OPEN_BLOCK);
                      context.removeHelper(getVNodeBlockHelper(context.inSSR, codegenNode.isComponent));
                      codegenNode.isBlock = false;
                      context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
                  }
                  constantCache.set(node, returnType);
                  return returnType;
              }
              else {
                  constantCache.set(node, 0 /* NOT_CONSTANT */);
                  return 0 /* NOT_CONSTANT */;
              }
          case 2 /* TEXT */:
          case 3 /* COMMENT */:
              return 3 /* CAN_STRINGIFY */;
          case 9 /* IF */:
          case 11 /* FOR */:
          case 10 /* IF_BRANCH */:
              return 0 /* NOT_CONSTANT */;
          case 5 /* INTERPOLATION */:
          case 12 /* TEXT_CALL */:
              return getConstantType(node.content, context);
          case 4 /* SIMPLE_EXPRESSION */:
              return node.constType;
          case 8 /* COMPOUND_EXPRESSION */:
              let returnType = 3 /* CAN_STRINGIFY */;
              for (let i = 0; i < node.children.length; i++) {
                  const child = node.children[i];
                  if (isString(child) || isSymbol(child)) {
                      continue;
                  }
                  const childType = getConstantType(child, context);
                  if (childType === 0 /* NOT_CONSTANT */) {
                      return 0 /* NOT_CONSTANT */;
                  }
                  else if (childType < returnType) {
                      returnType = childType;
                  }
              }
              return returnType;
          default:
              return 0 /* NOT_CONSTANT */;
      }
  }
  const allowHoistedHelperSet = new Set([
      NORMALIZE_CLASS,
      NORMALIZE_STYLE,
      NORMALIZE_PROPS,
      GUARD_REACTIVE_PROPS
  ]);
  function getConstantTypeOfHelperCall(value, context) {
      if (value.type === 14 /* JS_CALL_EXPRESSION */ &&
          !isString(value.callee) &&
          allowHoistedHelperSet.has(value.callee)) {
          const arg = value.arguments[0];
          if (arg.type === 4 /* SIMPLE_EXPRESSION */) {
              return getConstantType(arg, context);
          }
          else if (arg.type === 14 /* JS_CALL_EXPRESSION */) {
              // in the case of nested helper call, e.g. `normalizeProps(guardReactiveProps(exp))`
              return getConstantTypeOfHelperCall(arg, context);
          }
      }
      return 0 /* NOT_CONSTANT */;
  }
  function getGeneratedPropsConstantType(node, context) {
      let returnType = 3 /* CAN_STRINGIFY */;
      const props = getNodeProps(node);
      if (props && props.type === 15 /* JS_OBJECT_EXPRESSION */) {
          const { properties } = props;
          for (let i = 0; i < properties.length; i++) {
              const { key, value } = properties[i];
              const keyType = getConstantType(key, context);
              if (keyType === 0 /* NOT_CONSTANT */) {
                  return keyType;
              }
              if (keyType < returnType) {
                  returnType = keyType;
              }
              let valueType;
              if (value.type === 4 /* SIMPLE_EXPRESSION */) {
                  valueType = getConstantType(value, context);
              }
              else if (value.type === 14 /* JS_CALL_EXPRESSION */) {
                  // some helper calls can be hoisted,
                  // such as the `normalizeProps` generated by the compiler for pre-normalize class,
                  // in this case we need to respect the ConstantType of the helper's argments
                  valueType = getConstantTypeOfHelperCall(value, context);
              }
              else {
                  valueType = 0 /* NOT_CONSTANT */;
              }
              if (valueType === 0 /* NOT_CONSTANT */) {
                  return valueType;
              }
              if (valueType < returnType) {
                  returnType = valueType;
              }
          }
      }
      return returnType;
  }
  function getNodeProps(node) {
      const codegenNode = node.codegenNode;
      if (codegenNode.type === 13 /* VNODE_CALL */) {
          return codegenNode.props;
      }
  }
  function getPatchFlag(node) {
      const flag = node.patchFlag;
      return flag ? parseInt(flag, 10) : undefined;
  }

  function createTransformContext(root, { filename = '', prefixIdentifiers = false, hoistStatic = false, cacheHandlers = false, nodeTransforms = [], directiveTransforms = {}, transformHoist = null, isBuiltInComponent = NOOP, isCustomElement = NOOP, expressionPlugins = [], scopeId = null, slotted = true, ssr = false, inSSR = false, ssrCssVars = ``, bindingMetadata = EMPTY_OBJ, inline = false, isTS = false, onError = defaultOnError, onWarn = defaultOnWarn, compatConfig }) {
      const nameMatch = filename.replace(/\?.*$/, '').match(/([^/\\]+)\.\w+$/);
      const context = {
          // options
          selfName: nameMatch && capitalize(camelize(nameMatch[1])),
          prefixIdentifiers,
          hoistStatic,
          cacheHandlers,
          nodeTransforms,
          directiveTransforms,
          transformHoist,
          isBuiltInComponent,
          isCustomElement,
          expressionPlugins,
          scopeId,
          slotted,
          ssr,
          inSSR,
          ssrCssVars,
          bindingMetadata,
          inline,
          isTS,
          onError,
          onWarn,
          compatConfig,
          // state
          root,
          helpers: new Map(),
          components: new Set(),
          directives: new Set(),
          hoists: [],
          imports: [],
          constantCache: new Map(),
          temps: 0,
          cached: 0,
          identifiers: Object.create(null),
          scopes: {
              vFor: 0,
              vSlot: 0,
              vPre: 0,
              vOnce: 0
          },
          parent: null,
          currentNode: root,
          childIndex: 0,
          inVOnce: false,
          // methods
          helper(name) {
              const count = context.helpers.get(name) || 0;
              context.helpers.set(name, count + 1);
              return name;
          },
          removeHelper(name) {
              const count = context.helpers.get(name);
              if (count) {
                  const currentCount = count - 1;
                  if (!currentCount) {
                      context.helpers.delete(name);
                  }
                  else {
                      context.helpers.set(name, currentCount);
                  }
              }
          },
          helperString(name) {
              return `_${helperNameMap[context.helper(name)]}`;
          },
          replaceNode(node) {
              /* istanbul ignore if */
              {
                  if (!context.currentNode) {
                      throw new Error(`Node being replaced is already removed.`);
                  }
                  if (!context.parent) {
                      throw new Error(`Cannot replace root node.`);
                  }
              }
              context.parent.children[context.childIndex] = context.currentNode = node;
          },
          removeNode(node) {
              if (!context.parent) {
                  throw new Error(`Cannot remove root node.`);
              }
              const list = context.parent.children;
              const removalIndex = node
                  ? list.indexOf(node)
                  : context.currentNode
                      ? context.childIndex
                      : -1;
              /* istanbul ignore if */
              if (removalIndex < 0) {
                  throw new Error(`node being removed is not a child of current parent`);
              }
              if (!node || node === context.currentNode) {
                  // current node removed
                  context.currentNode = null;
                  context.onNodeRemoved();
              }
              else {
                  // sibling node removed
                  if (context.childIndex > removalIndex) {
                      context.childIndex--;
                      context.onNodeRemoved();
                  }
              }
              context.parent.children.splice(removalIndex, 1);
          },
          onNodeRemoved: () => { },
          addIdentifiers(exp) {
          },
          removeIdentifiers(exp) {
          },
          hoist(exp) {
              if (isString(exp))
                  exp = createSimpleExpression(exp);
              context.hoists.push(exp);
              const identifier = createSimpleExpression(`_hoisted_${context.hoists.length}`, false, exp.loc, 2 /* CAN_HOIST */);
              identifier.hoisted = exp;
              return identifier;
          },
          cache(exp, isVNode = false) {
              return createCacheExpression(context.cached++, exp, isVNode);
          }
      };
      return context;
  }
  function transform(root, options) {
      const context = createTransformContext(root, options);
      traverseNode(root, context);
      if (options.hoistStatic) {
          hoistStatic(root, context);
      }
      if (!options.ssr) {
          createRootCodegen(root, context);
      }
      // finalize meta information
      root.helpers = [...context.helpers.keys()];
      root.components = [...context.components];
      root.directives = [...context.directives];
      root.imports = context.imports;
      root.hoists = context.hoists;
      root.temps = context.temps;
      root.cached = context.cached;
  }
  function createRootCodegen(root, context) {
      const { helper } = context;
      const { children } = root;
      if (children.length === 1) {
          const child = children[0];
          // if the single child is an element, turn it into a block.
          if (isSingleElementRoot(root, child) && child.codegenNode) {
              // single element root is never hoisted so codegenNode will never be
              // SimpleExpressionNode
              const codegenNode = child.codegenNode;
              if (codegenNode.type === 13 /* VNODE_CALL */) {
                  makeBlock(codegenNode, context);
              }
              root.codegenNode = codegenNode;
          }
          else {
              // - single <slot/>, IfNode, ForNode: already blocks.
              // - single text node: always patched.
              // root codegen falls through via genNode()
              root.codegenNode = child;
          }
      }
      else if (children.length > 1) {
          // root has multiple nodes - return a fragment block.
          let patchFlag = 64 /* STABLE_FRAGMENT */;
          let patchFlagText = PatchFlagNames[64 /* STABLE_FRAGMENT */];
          // check if the fragment actually contains a single valid child with
          // the rest being comments
          if (children.filter(c => c.type !== 3 /* COMMENT */).length === 1) {
              patchFlag |= 2048 /* DEV_ROOT_FRAGMENT */;
              patchFlagText += `, ${PatchFlagNames[2048 /* DEV_ROOT_FRAGMENT */]}`;
          }
          root.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, root.children, patchFlag + (` /* ${patchFlagText} */` ), undefined, undefined, true, undefined, false /* isComponent */);
      }
      else ;
  }
  function traverseChildren(parent, context) {
      let i = 0;
      const nodeRemoved = () => {
          i--;
      };
      for (; i < parent.children.length; i++) {
          const child = parent.children[i];
          if (isString(child))
              continue;
          context.parent = parent;
          context.childIndex = i;
          context.onNodeRemoved = nodeRemoved;
          traverseNode(child, context);
      }
  }
  function traverseNode(node, context) {
      context.currentNode = node;
      // apply transform plugins
      const { nodeTransforms } = context;
      const exitFns = [];
      for (let i = 0; i < nodeTransforms.length; i++) {
          const onExit = nodeTransforms[i](node, context);
          if (onExit) {
              if (isArray(onExit)) {
                  exitFns.push(...onExit);
              }
              else {
                  exitFns.push(onExit);
              }
          }
          if (!context.currentNode) {
              // node was removed
              return;
          }
          else {
              // node may have been replaced
              node = context.currentNode;
          }
      }
      switch (node.type) {
          case 3 /* COMMENT */:
              if (!context.ssr) {
                  // inject import for the Comment symbol, which is needed for creating
                  // comment nodes with `createVNode`
                  context.helper(CREATE_COMMENT);
              }
              break;
          case 5 /* INTERPOLATION */:
              // no need to traverse, but we need to inject toString helper
              if (!context.ssr) {
                  context.helper(TO_DISPLAY_STRING);
              }
              break;
          // for container types, further traverse downwards
          case 9 /* IF */:
              for (let i = 0; i < node.branches.length; i++) {
                  traverseNode(node.branches[i], context);
              }
              break;
          case 10 /* IF_BRANCH */:
          case 11 /* FOR */:
          case 1 /* ELEMENT */:
          case 0 /* ROOT */:
              traverseChildren(node, context);
              break;
      }
      // exit transforms
      context.currentNode = node;
      let i = exitFns.length;
      while (i--) {
          exitFns[i]();
      }
  }
  function createStructuralDirectiveTransform(name, fn) {
      const matches = isString(name)
          ? (n) => n === name
          : (n) => name.test(n);
      return (node, context) => {
          if (node.type === 1 /* ELEMENT */) {
              const { props } = node;
              // structural directive transforms are not concerned with slots
              // as they are handled separately in vSlot.ts
              if (node.tagType === 3 /* TEMPLATE */ && props.some(isVSlot)) {
                  return;
              }
              const exitFns = [];
              for (let i = 0; i < props.length; i++) {
                  const prop = props[i];
                  if (prop.type === 7 /* DIRECTIVE */ && matches(prop.name)) {
                      // structural directives are removed to avoid infinite recursion
                      // also we remove them *before* applying so that it can further
                      // traverse itself in case it moves the node around
                      props.splice(i, 1);
                      i--;
                      const onExit = fn(node, prop, context);
                      if (onExit)
                          exitFns.push(onExit);
                  }
              }
              return exitFns;
          }
      };
  }

  const PURE_ANNOTATION = `/*#__PURE__*/`;
  function createCodegenContext(ast, { mode = 'function', prefixIdentifiers = mode === 'module', sourceMap = false, filename = `template.vue.html`, scopeId = null, optimizeImports = false, runtimeGlobalName = `Vue`, runtimeModuleName = `vue`, ssrRuntimeModuleName = 'vue/server-renderer', ssr = false, isTS = false, inSSR = false }) {
      const context = {
          mode,
          prefixIdentifiers,
          sourceMap,
          filename,
          scopeId,
          optimizeImports,
          runtimeGlobalName,
          runtimeModuleName,
          ssrRuntimeModuleName,
          ssr,
          isTS,
          inSSR,
          source: ast.loc.source,
          code: ``,
          column: 1,
          line: 1,
          offset: 0,
          indentLevel: 0,
          pure: false,
          map: undefined,
          helper(key) {
              return `_${helperNameMap[key]}`;
          },
          push(code, node) {
              context.code += code;
          },
          indent() {
              newline(++context.indentLevel);
          },
          deindent(withoutNewLine = false) {
              if (withoutNewLine) {
                  --context.indentLevel;
              }
              else {
                  newline(--context.indentLevel);
              }
          },
          newline() {
              newline(context.indentLevel);
          }
      };
      function newline(n) {
          context.push('\n' + `  `.repeat(n));
      }
      return context;
  }
  function generate(ast, options = {}) {
      const context = createCodegenContext(ast, options);
      if (options.onContextCreated)
          options.onContextCreated(context);
      const { mode, push, prefixIdentifiers, indent, deindent, newline, scopeId, ssr } = context;
      const hasHelpers = ast.helpers.length > 0;
      const useWithBlock = !prefixIdentifiers && mode !== 'module';
      // preambles
      // in setup() inline mode, the preamble is generated in a sub context
      // and returned separately.
      const preambleContext = context;
      {
          genFunctionPreamble(ast, preambleContext);
      }
      // enter render function
      const functionName = ssr ? `ssrRender` : `render`;
      const args = ssr ? ['_ctx', '_push', '_parent', '_attrs'] : ['_ctx', '_cache'];
      const signature = args.join(', ');
      {
          push(`function ${functionName}(${signature}) {`);
      }
      indent();
      if (useWithBlock) {
          push(`with (_ctx) {`);
          indent();
          // function mode const declarations should be inside with block
          // also they should be renamed to avoid collision with user properties
          if (hasHelpers) {
              push(`const { ${ast.helpers
                .map(s => `${helperNameMap[s]}: _${helperNameMap[s]}`)
                .join(', ')} } = _Vue`);
              push(`\n`);
              newline();
          }
      }
      // generate asset resolution statements
      if (ast.components.length) {
          genAssets(ast.components, 'component', context);
          if (ast.directives.length || ast.temps > 0) {
              newline();
          }
      }
      if (ast.directives.length) {
          genAssets(ast.directives, 'directive', context);
          if (ast.temps > 0) {
              newline();
          }
      }
      if (ast.temps > 0) {
          push(`let `);
          for (let i = 0; i < ast.temps; i++) {
              push(`${i > 0 ? `, ` : ``}_temp${i}`);
          }
      }
      if (ast.components.length || ast.directives.length || ast.temps) {
          push(`\n`);
          newline();
      }
      // generate the VNode tree expression
      if (!ssr) {
          push(`return `);
      }
      if (ast.codegenNode) {
          genNode(ast.codegenNode, context);
      }
      else {
          push(`null`);
      }
      if (useWithBlock) {
          deindent();
          push(`}`);
      }
      deindent();
      push(`}`);
      return {
          ast,
          code: context.code,
          preamble: ``,
          // SourceMapGenerator does have toJSON() method but it's not in the types
          map: context.map ? context.map.toJSON() : undefined
      };
  }
  function genFunctionPreamble(ast, context) {
      const { ssr, prefixIdentifiers, push, newline, runtimeModuleName, runtimeGlobalName, ssrRuntimeModuleName } = context;
      const VueBinding = runtimeGlobalName;
      const aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;
      // Generate const declaration for helpers
      // In prefix mode, we place the const declaration at top so it's done
      // only once; But if we not prefixing, we place the declaration inside the
      // with block so it doesn't incur the `in` check cost for every helper access.
      if (ast.helpers.length > 0) {
          {
              // "with" mode.
              // save Vue in a separate variable to avoid collision
              push(`const _Vue = ${VueBinding}\n`);
              // in "with" mode, helpers are declared inside the with block to avoid
              // has check cost, but hoists are lifted out of the function - we need
              // to provide the helper here.
              if (ast.hoists.length) {
                  const staticHelpers = [
                      CREATE_VNODE,
                      CREATE_ELEMENT_VNODE,
                      CREATE_COMMENT,
                      CREATE_TEXT,
                      CREATE_STATIC
                  ]
                      .filter(helper => ast.helpers.includes(helper))
                      .map(aliasHelper)
                      .join(', ');
                  push(`const { ${staticHelpers} } = _Vue\n`);
              }
          }
      }
      genHoists(ast.hoists, context);
      newline();
      push(`return `);
  }
  function genAssets(assets, type, { helper, push, newline, isTS }) {
      const resolver = helper(type === 'component'
              ? RESOLVE_COMPONENT
              : RESOLVE_DIRECTIVE);
      for (let i = 0; i < assets.length; i++) {
          let id = assets[i];
          // potential component implicit self-reference inferred from SFC filename
          const maybeSelfReference = id.endsWith('__self');
          if (maybeSelfReference) {
              id = id.slice(0, -6);
          }
          push(`const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`);
          if (i < assets.length - 1) {
              newline();
          }
      }
  }
  function genHoists(hoists, context) {
      if (!hoists.length) {
          return;
      }
      context.pure = true;
      const { push, newline, helper, scopeId, mode } = context;
      newline();
      for (let i = 0; i < hoists.length; i++) {
          const exp = hoists[i];
          if (exp) {
              push(`const _hoisted_${i + 1} = ${``}`);
              genNode(exp, context);
              newline();
          }
      }
      context.pure = false;
  }
  function isText$1(n) {
      return (isString(n) ||
          n.type === 4 /* SIMPLE_EXPRESSION */ ||
          n.type === 2 /* TEXT */ ||
          n.type === 5 /* INTERPOLATION */ ||
          n.type === 8 /* COMPOUND_EXPRESSION */);
  }
  function genNodeListAsArray(nodes, context) {
      const multilines = nodes.length > 3 ||
          (nodes.some(n => isArray(n) || !isText$1(n)));
      context.push(`[`);
      multilines && context.indent();
      genNodeList(nodes, context, multilines);
      multilines && context.deindent();
      context.push(`]`);
  }
  function genNodeList(nodes, context, multilines = false, comma = true) {
      const { push, newline } = context;
      for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          if (isString(node)) {
              push(node);
          }
          else if (isArray(node)) {
              genNodeListAsArray(node, context);
          }
          else {
              genNode(node, context);
          }
          if (i < nodes.length - 1) {
              if (multilines) {
                  comma && push(',');
                  newline();
              }
              else {
                  comma && push(', ');
              }
          }
      }
  }
  function genNode(node, context) {
      if (isString(node)) {
          context.push(node);
          return;
      }
      if (isSymbol(node)) {
          context.push(context.helper(node));
          return;
      }
      switch (node.type) {
          case 1 /* ELEMENT */:
          case 9 /* IF */:
          case 11 /* FOR */:
              assert(node.codegenNode != null, `Codegen node is missing for element/if/for node. ` +
                      `Apply appropriate transforms first.`);
              genNode(node.codegenNode, context);
              break;
          case 2 /* TEXT */:
              genText(node, context);
              break;
          case 4 /* SIMPLE_EXPRESSION */:
              genExpression(node, context);
              break;
          case 5 /* INTERPOLATION */:
              genInterpolation(node, context);
              break;
          case 12 /* TEXT_CALL */:
              genNode(node.codegenNode, context);
              break;
          case 8 /* COMPOUND_EXPRESSION */:
              genCompoundExpression(node, context);
              break;
          case 3 /* COMMENT */:
              genComment(node, context);
              break;
          case 13 /* VNODE_CALL */:
              genVNodeCall(node, context);
              break;
          case 14 /* JS_CALL_EXPRESSION */:
              genCallExpression(node, context);
              break;
          case 15 /* JS_OBJECT_EXPRESSION */:
              genObjectExpression(node, context);
              break;
          case 17 /* JS_ARRAY_EXPRESSION */:
              genArrayExpression(node, context);
              break;
          case 18 /* JS_FUNCTION_EXPRESSION */:
              genFunctionExpression(node, context);
              break;
          case 19 /* JS_CONDITIONAL_EXPRESSION */:
              genConditionalExpression(node, context);
              break;
          case 20 /* JS_CACHE_EXPRESSION */:
              genCacheExpression(node, context);
              break;
          case 21 /* JS_BLOCK_STATEMENT */:
              genNodeList(node.body, context, true, false);
              break;
          // SSR only types
          case 22 /* JS_TEMPLATE_LITERAL */:
              break;
          case 23 /* JS_IF_STATEMENT */:
              break;
          case 24 /* JS_ASSIGNMENT_EXPRESSION */:
              break;
          case 25 /* JS_SEQUENCE_EXPRESSION */:
              break;
          case 26 /* JS_RETURN_STATEMENT */:
              break;
          /* istanbul ignore next */
          case 10 /* IF_BRANCH */:
              // noop
              break;
          default:
              {
                  assert(false, `unhandled codegen node type: ${node.type}`);
                  // make sure we exhaust all possible types
                  const exhaustiveCheck = node;
                  return exhaustiveCheck;
              }
      }
  }
  function genText(node, context) {
      context.push(JSON.stringify(node.content), node);
  }
  function genExpression(node, context) {
      const { content, isStatic } = node;
      context.push(isStatic ? JSON.stringify(content) : content, node);
  }
  function genInterpolation(node, context) {
      const { push, helper, pure } = context;
      if (pure)
          push(PURE_ANNOTATION);
      push(`${helper(TO_DISPLAY_STRING)}(`);
      genNode(node.content, context);
      push(`)`);
  }
  function genCompoundExpression(node, context) {
      for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (isString(child)) {
              context.push(child);
          }
          else {
              genNode(child, context);
          }
      }
  }
  function genExpressionAsPropertyKey(node, context) {
      const { push } = context;
      if (node.type === 8 /* COMPOUND_EXPRESSION */) {
          push(`[`);
          genCompoundExpression(node, context);
          push(`]`);
      }
      else if (node.isStatic) {
          // only quote keys if necessary
          const text = isSimpleIdentifier(node.content)
              ? node.content
              : JSON.stringify(node.content);
          push(text, node);
      }
      else {
          push(`[${node.content}]`, node);
      }
  }
  function genComment(node, context) {
      const { push, helper, pure } = context;
      if (pure) {
          push(PURE_ANNOTATION);
      }
      push(`${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`, node);
  }
  function genVNodeCall(node, context) {
      const { push, helper, pure } = context;
      const { tag, props, children, patchFlag, dynamicProps, directives, isBlock, disableTracking, isComponent } = node;
      if (directives) {
          push(helper(WITH_DIRECTIVES) + `(`);
      }
      if (isBlock) {
          push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
      }
      if (pure) {
          push(PURE_ANNOTATION);
      }
      const callHelper = isBlock
          ? getVNodeBlockHelper(context.inSSR, isComponent)
          : getVNodeHelper(context.inSSR, isComponent);
      push(helper(callHelper) + `(`, node);
      genNodeList(genNullableArgs([tag, props, children, patchFlag, dynamicProps]), context);
      push(`)`);
      if (isBlock) {
          push(`)`);
      }
      if (directives) {
          push(`, `);
          genNode(directives, context);
          push(`)`);
      }
  }
  function genNullableArgs(args) {
      let i = args.length;
      while (i--) {
          if (args[i] != null)
              break;
      }
      return args.slice(0, i + 1).map(arg => arg || `null`);
  }
  // JavaScript
  function genCallExpression(node, context) {
      const { push, helper, pure } = context;
      const callee = isString(node.callee) ? node.callee : helper(node.callee);
      if (pure) {
          push(PURE_ANNOTATION);
      }
      push(callee + `(`, node);
      genNodeList(node.arguments, context);
      push(`)`);
  }
  function genObjectExpression(node, context) {
      const { push, indent, deindent, newline } = context;
      const { properties } = node;
      if (!properties.length) {
          push(`{}`, node);
          return;
      }
      const multilines = properties.length > 1 ||
          (properties.some(p => p.value.type !== 4 /* SIMPLE_EXPRESSION */));
      push(multilines ? `{` : `{ `);
      multilines && indent();
      for (let i = 0; i < properties.length; i++) {
          const { key, value } = properties[i];
          // key
          genExpressionAsPropertyKey(key, context);
          push(`: `);
          // value
          genNode(value, context);
          if (i < properties.length - 1) {
              // will only reach this if it's multilines
              push(`,`);
              newline();
          }
      }
      multilines && deindent();
      push(multilines ? `}` : ` }`);
  }
  function genArrayExpression(node, context) {
      genNodeListAsArray(node.elements, context);
  }
  function genFunctionExpression(node, context) {
      const { push, indent, deindent } = context;
      const { params, returns, body, newline, isSlot } = node;
      if (isSlot) {
          // wrap slot functions with owner context
          push(`_${helperNameMap[WITH_CTX]}(`);
      }
      push(`(`, node);
      if (isArray(params)) {
          genNodeList(params, context);
      }
      else if (params) {
          genNode(params, context);
      }
      push(`) => `);
      if (newline || body) {
          push(`{`);
          indent();
      }
      if (returns) {
          if (newline) {
              push(`return `);
          }
          if (isArray(returns)) {
              genNodeListAsArray(returns, context);
          }
          else {
              genNode(returns, context);
          }
      }
      else if (body) {
          genNode(body, context);
      }
      if (newline || body) {
          deindent();
          push(`}`);
      }
      if (isSlot) {
          push(`)`);
      }
  }
  function genConditionalExpression(node, context) {
      const { test, consequent, alternate, newline: needNewline } = node;
      const { push, indent, deindent, newline } = context;
      if (test.type === 4 /* SIMPLE_EXPRESSION */) {
          const needsParens = !isSimpleIdentifier(test.content);
          needsParens && push(`(`);
          genExpression(test, context);
          needsParens && push(`)`);
      }
      else {
          push(`(`);
          genNode(test, context);
          push(`)`);
      }
      needNewline && indent();
      context.indentLevel++;
      needNewline || push(` `);
      push(`? `);
      genNode(consequent, context);
      context.indentLevel--;
      needNewline && newline();
      needNewline || push(` `);
      push(`: `);
      const isNested = alternate.type === 19 /* JS_CONDITIONAL_EXPRESSION */;
      if (!isNested) {
          context.indentLevel++;
      }
      genNode(alternate, context);
      if (!isNested) {
          context.indentLevel--;
      }
      needNewline && deindent(true /* without newline */);
  }
  function genCacheExpression(node, context) {
      const { push, helper, indent, deindent, newline } = context;
      push(`_cache[${node.index}] || (`);
      if (node.isVNode) {
          indent();
          push(`${helper(SET_BLOCK_TRACKING)}(-1),`);
          newline();
      }
      push(`_cache[${node.index}] = `);
      genNode(node.value, context);
      if (node.isVNode) {
          push(`,`);
          newline();
          push(`${helper(SET_BLOCK_TRACKING)}(1),`);
          newline();
          push(`_cache[${node.index}]`);
          deindent();
      }
      push(`)`);
  }

  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  const prohibitedKeywordRE = new RegExp('\\b' +
      ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
          'super,throw,while,yield,delete,export,import,return,switch,default,' +
          'extends,finally,continue,debugger,function,arguments,typeof,void')
          .split(',')
          .join('\\b|\\b') +
      '\\b');
  // strip strings in expressions
  const stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
  /**
   * Validate a non-prefixed expression.
   * This is only called when using the in-browser runtime compiler since it
   * doesn't prefix expressions.
   */
  function validateBrowserExpression(node, context, asParams = false, asRawStatements = false) {
      const exp = node.content;
      // empty expressions are validated per-directive since some directives
      // do allow empty expressions.
      if (!exp.trim()) {
          return;
      }
      try {
          new Function(asRawStatements
              ? ` ${exp} `
              : `return ${asParams ? `(${exp}) => {}` : `(${exp})`}`);
      }
      catch (e) {
          let message = e.message;
          const keywordMatch = exp
              .replace(stripStringRE, '')
              .match(prohibitedKeywordRE);
          if (keywordMatch) {
              message = `avoid using JavaScript keyword as property name: "${keywordMatch[0]}"`;
          }
          context.onError(createCompilerError(44 /* X_INVALID_EXPRESSION */, node.loc, undefined, message));
      }
  }

  const transformExpression = (node, context) => {
      if (node.type === 5 /* INTERPOLATION */) {
          node.content = processExpression(node.content, context);
      }
      else if (node.type === 1 /* ELEMENT */) {
          // handle directives on element
          for (let i = 0; i < node.props.length; i++) {
              const dir = node.props[i];
              // do not process for v-on & v-for since they are special handled
              if (dir.type === 7 /* DIRECTIVE */ && dir.name !== 'for') {
                  const exp = dir.exp;
                  const arg = dir.arg;
                  // do not process exp if this is v-on:arg - we need special handling
                  // for wrapping inline statements.
                  if (exp &&
                      exp.type === 4 /* SIMPLE_EXPRESSION */ &&
                      !(dir.name === 'on' && arg)) {
                      dir.exp = processExpression(exp, context, 
                      // slot args must be processed as function params
                      dir.name === 'slot');
                  }
                  if (arg && arg.type === 4 /* SIMPLE_EXPRESSION */ && !arg.isStatic) {
                      dir.arg = processExpression(arg, context);
                  }
              }
          }
      }
  };
  // Important: since this function uses Node.js only dependencies, it should
  // always be used with a leading !true check so that it can be
  // tree-shaken from the browser build.
  function processExpression(node, context, 
  // some expressions like v-slot props & v-for aliases should be parsed as
  // function params
  asParams = false, 
  // v-on handler values may contain multiple statements
  asRawStatements = false, localVars = Object.create(context.identifiers)) {
      {
          {
              // simple in-browser validation (same logic in 2.x)
              validateBrowserExpression(node, context, asParams, asRawStatements);
          }
          return node;
      }
  }

  const transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, (node, dir, context) => {
      return processIf(node, dir, context, (ifNode, branch, isRoot) => {
          // #1587: We need to dynamically increment the key based on the current
          // node's sibling nodes, since chained v-if/else branches are
          // rendered at the same depth
          const siblings = context.parent.children;
          let i = siblings.indexOf(ifNode);
          let key = 0;
          while (i-- >= 0) {
              const sibling = siblings[i];
              if (sibling && sibling.type === 9 /* IF */) {
                  key += sibling.branches.length;
              }
          }
          // Exit callback. Complete the codegenNode when all children have been
          // transformed.
          return () => {
              if (isRoot) {
                  ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
              }
              else {
                  // attach this branch's codegen node to the v-if root.
                  const parentCondition = getParentCondition(ifNode.codegenNode);
                  parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
              }
          };
      });
  });
  // target-agnostic transform used for both Client and SSR
  function processIf(node, dir, context, processCodegen) {
      if (dir.name !== 'else' &&
          (!dir.exp || !dir.exp.content.trim())) {
          const loc = dir.exp ? dir.exp.loc : node.loc;
          context.onError(createCompilerError(28 /* X_V_IF_NO_EXPRESSION */, dir.loc));
          dir.exp = createSimpleExpression(`true`, false, loc);
      }
      if (dir.exp) {
          validateBrowserExpression(dir.exp, context);
      }
      if (dir.name === 'if') {
          const branch = createIfBranch(node, dir);
          const ifNode = {
              type: 9 /* IF */,
              loc: node.loc,
              branches: [branch]
          };
          context.replaceNode(ifNode);
          if (processCodegen) {
              return processCodegen(ifNode, branch, true);
          }
      }
      else {
          // locate the adjacent v-if
          const siblings = context.parent.children;
          const comments = [];
          let i = siblings.indexOf(node);
          while (i-- >= -1) {
              const sibling = siblings[i];
              if (sibling && sibling.type === 3 /* COMMENT */) {
                  context.removeNode(sibling);
                  comments.unshift(sibling);
                  continue;
              }
              if (sibling &&
                  sibling.type === 2 /* TEXT */ &&
                  !sibling.content.trim().length) {
                  context.removeNode(sibling);
                  continue;
              }
              if (sibling && sibling.type === 9 /* IF */) {
                  // Check if v-else was followed by v-else-if
                  if (dir.name === 'else-if' &&
                      sibling.branches[sibling.branches.length - 1].condition === undefined) {
                      context.onError(createCompilerError(30 /* X_V_ELSE_NO_ADJACENT_IF */, node.loc));
                  }
                  // move the node to the if node's branches
                  context.removeNode();
                  const branch = createIfBranch(node, dir);
                  if (comments.length &&
                      // #3619 ignore comments if the v-if is direct child of <transition>
                      !(context.parent &&
                          context.parent.type === 1 /* ELEMENT */ &&
                          isBuiltInType(context.parent.tag, 'transition'))) {
                      branch.children = [...comments, ...branch.children];
                  }
                  // check if user is forcing same key on different branches
                  {
                      const key = branch.userKey;
                      if (key) {
                          sibling.branches.forEach(({ userKey }) => {
                              if (isSameKey(userKey, key)) {
                                  context.onError(createCompilerError(29 /* X_V_IF_SAME_KEY */, branch.userKey.loc));
                              }
                          });
                      }
                  }
                  sibling.branches.push(branch);
                  const onExit = processCodegen && processCodegen(sibling, branch, false);
                  // since the branch was removed, it will not be traversed.
                  // make sure to traverse here.
                  traverseNode(branch, context);
                  // call on exit
                  if (onExit)
                      onExit();
                  // make sure to reset currentNode after traversal to indicate this
                  // node has been removed.
                  context.currentNode = null;
              }
              else {
                  context.onError(createCompilerError(30 /* X_V_ELSE_NO_ADJACENT_IF */, node.loc));
              }
              break;
          }
      }
  }
  function createIfBranch(node, dir) {
      return {
          type: 10 /* IF_BRANCH */,
          loc: node.loc,
          condition: dir.name === 'else' ? undefined : dir.exp,
          children: node.tagType === 3 /* TEMPLATE */ && !findDir(node, 'for')
              ? node.children
              : [node],
          userKey: findProp(node, `key`)
      };
  }
  function createCodegenNodeForBranch(branch, keyIndex, context) {
      if (branch.condition) {
          return createConditionalExpression(branch.condition, createChildrenCodegenNode(branch, keyIndex, context), 
          // make sure to pass in asBlock: true so that the comment node call
          // closes the current block.
          createCallExpression(context.helper(CREATE_COMMENT), [
              '"v-if"' ,
              'true'
          ]));
      }
      else {
          return createChildrenCodegenNode(branch, keyIndex, context);
      }
  }
  function createChildrenCodegenNode(branch, keyIndex, context) {
      const { helper } = context;
      const keyProperty = createObjectProperty(`key`, createSimpleExpression(`${keyIndex}`, false, locStub, 2 /* CAN_HOIST */));
      const { children } = branch;
      const firstChild = children[0];
      const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1 /* ELEMENT */;
      if (needFragmentWrapper) {
          if (children.length === 1 && firstChild.type === 11 /* FOR */) {
              // optimize away nested fragments when child is a ForNode
              const vnodeCall = firstChild.codegenNode;
              injectProp(vnodeCall, keyProperty, context);
              return vnodeCall;
          }
          else {
              let patchFlag = 64 /* STABLE_FRAGMENT */;
              let patchFlagText = PatchFlagNames[64 /* STABLE_FRAGMENT */];
              // check if the fragment actually contains a single valid child with
              // the rest being comments
              if (children.filter(c => c.type !== 3 /* COMMENT */).length === 1) {
                  patchFlag |= 2048 /* DEV_ROOT_FRAGMENT */;
                  patchFlagText += `, ${PatchFlagNames[2048 /* DEV_ROOT_FRAGMENT */]}`;
              }
              return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([keyProperty]), children, patchFlag + (` /* ${patchFlagText} */` ), undefined, undefined, true, false, false /* isComponent */, branch.loc);
          }
      }
      else {
          const ret = firstChild.codegenNode;
          const vnodeCall = getMemoedVNodeCall(ret);
          // Change createVNode to createBlock.
          if (vnodeCall.type === 13 /* VNODE_CALL */) {
              makeBlock(vnodeCall, context);
          }
          // inject branch key
          injectProp(vnodeCall, keyProperty, context);
          return ret;
      }
  }
  function isSameKey(a, b) {
      if (!a || a.type !== b.type) {
          return false;
      }
      if (a.type === 6 /* ATTRIBUTE */) {
          if (a.value.content !== b.value.content) {
              return false;
          }
      }
      else {
          // directive
          const exp = a.exp;
          const branchExp = b.exp;
          if (exp.type !== branchExp.type) {
              return false;
          }
          if (exp.type !== 4 /* SIMPLE_EXPRESSION */ ||
              exp.isStatic !== branchExp.isStatic ||
              exp.content !== branchExp.content) {
              return false;
          }
      }
      return true;
  }
  function getParentCondition(node) {
      while (true) {
          if (node.type === 19 /* JS_CONDITIONAL_EXPRESSION */) {
              if (node.alternate.type === 19 /* JS_CONDITIONAL_EXPRESSION */) {
                  node = node.alternate;
              }
              else {
                  return node;
              }
          }
          else if (node.type === 20 /* JS_CACHE_EXPRESSION */) {
              node = node.value;
          }
      }
  }

  const transformFor = createStructuralDirectiveTransform('for', (node, dir, context) => {
      const { helper, removeHelper } = context;
      return processFor(node, dir, context, forNode => {
          // create the loop render function expression now, and add the
          // iterator on exit after all children have been traversed
          const renderExp = createCallExpression(helper(RENDER_LIST), [
              forNode.source
          ]);
          const memo = findDir(node, 'memo');
          const keyProp = findProp(node, `key`);
          const keyExp = keyProp &&
              (keyProp.type === 6 /* ATTRIBUTE */
                  ? createSimpleExpression(keyProp.value.content, true)
                  : keyProp.exp);
          const keyProperty = keyProp ? createObjectProperty(`key`, keyExp) : null;
          const isStableFragment = forNode.source.type === 4 /* SIMPLE_EXPRESSION */ &&
              forNode.source.constType > 0 /* NOT_CONSTANT */;
          const fragmentFlag = isStableFragment
              ? 64 /* STABLE_FRAGMENT */
              : keyProp
                  ? 128 /* KEYED_FRAGMENT */
                  : 256 /* UNKEYED_FRAGMENT */;
          forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, renderExp, fragmentFlag +
              (` /* ${PatchFlagNames[fragmentFlag]} */` ), undefined, undefined, true /* isBlock */, !isStableFragment /* disableTracking */, false /* isComponent */, node.loc);
          return () => {
              // finish the codegen now that all children have been traversed
              let childBlock;
              const isTemplate = isTemplateNode(node);
              const { children } = forNode;
              // check <template v-for> key placement
              if (isTemplate) {
                  node.children.some(c => {
                      if (c.type === 1 /* ELEMENT */) {
                          const key = findProp(c, 'key');
                          if (key) {
                              context.onError(createCompilerError(33 /* X_V_FOR_TEMPLATE_KEY_PLACEMENT */, key.loc));
                              return true;
                          }
                      }
                  });
              }
              const needFragmentWrapper = children.length !== 1 || children[0].type !== 1 /* ELEMENT */;
              const slotOutlet = isSlotOutlet(node)
                  ? node
                  : isTemplate &&
                      node.children.length === 1 &&
                      isSlotOutlet(node.children[0])
                      ? node.children[0] // api-extractor somehow fails to infer this
                      : null;
              if (slotOutlet) {
                  // <slot v-for="..."> or <template v-for="..."><slot/></template>
                  childBlock = slotOutlet.codegenNode;
                  if (isTemplate && keyProperty) {
                      // <template v-for="..." :key="..."><slot/></template>
                      // we need to inject the key to the renderSlot() call.
                      // the props for renderSlot is passed as the 3rd argument.
                      injectProp(childBlock, keyProperty, context);
                  }
              }
              else if (needFragmentWrapper) {
                  // <template v-for="..."> with text or multi-elements
                  // should generate a fragment block for each loop
                  childBlock = createVNodeCall(context, helper(FRAGMENT), keyProperty ? createObjectExpression([keyProperty]) : undefined, node.children, 64 /* STABLE_FRAGMENT */ +
                      (` /* ${PatchFlagNames[64 /* STABLE_FRAGMENT */]} */`
                          ), undefined, undefined, true, undefined, false /* isComponent */);
              }
              else {
                  // Normal element v-for. Directly use the child's codegenNode
                  // but mark it as a block.
                  childBlock = children[0]
                      .codegenNode;
                  if (isTemplate && keyProperty) {
                      injectProp(childBlock, keyProperty, context);
                  }
                  if (childBlock.isBlock !== !isStableFragment) {
                      if (childBlock.isBlock) {
                          // switch from block to vnode
                          removeHelper(OPEN_BLOCK);
                          removeHelper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
                      }
                      else {
                          // switch from vnode to block
                          removeHelper(getVNodeHelper(context.inSSR, childBlock.isComponent));
                      }
                  }
                  childBlock.isBlock = !isStableFragment;
                  if (childBlock.isBlock) {
                      helper(OPEN_BLOCK);
                      helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
                  }
                  else {
                      helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
                  }
              }
              if (memo) {
                  const loop = createFunctionExpression(createForLoopParams(forNode.parseResult, [
                      createSimpleExpression(`_cached`)
                  ]));
                  loop.body = createBlockStatement([
                      createCompoundExpression([`const _memo = (`, memo.exp, `)`]),
                      createCompoundExpression([
                          `if (_cached`,
                          ...(keyExp ? [` && _cached.key === `, keyExp] : []),
                          ` && ${context.helperString(IS_MEMO_SAME)}(_cached, _memo)) return _cached`
                      ]),
                      createCompoundExpression([`const _item = `, childBlock]),
                      createSimpleExpression(`_item.memo = _memo`),
                      createSimpleExpression(`return _item`)
                  ]);
                  renderExp.arguments.push(loop, createSimpleExpression(`_cache`), createSimpleExpression(String(context.cached++)));
              }
              else {
                  renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true /* force newline */));
              }
          };
      });
  });
  // target-agnostic transform used for both Client and SSR
  function processFor(node, dir, context, processCodegen) {
      if (!dir.exp) {
          context.onError(createCompilerError(31 /* X_V_FOR_NO_EXPRESSION */, dir.loc));
          return;
      }
      const parseResult = parseForExpression(
      // can only be simple expression because vFor transform is applied
      // before expression transform.
      dir.exp, context);
      if (!parseResult) {
          context.onError(createCompilerError(32 /* X_V_FOR_MALFORMED_EXPRESSION */, dir.loc));
          return;
      }
      const { addIdentifiers, removeIdentifiers, scopes } = context;
      const { source, value, key, index } = parseResult;
      const forNode = {
          type: 11 /* FOR */,
          loc: dir.loc,
          source,
          valueAlias: value,
          keyAlias: key,
          objectIndexAlias: index,
          parseResult,
          children: isTemplateNode(node) ? node.children : [node]
      };
      context.replaceNode(forNode);
      // bookkeeping
      scopes.vFor++;
      const onExit = processCodegen && processCodegen(forNode);
      return () => {
          scopes.vFor--;
          if (onExit)
              onExit();
      };
  }
  const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  // This regex doesn't cover the case if key or index aliases have destructuring,
  // but those do not make sense in the first place, so this works in practice.
  const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  const stripParensRE = /^\(|\)$/g;
  function parseForExpression(input, context) {
      const loc = input.loc;
      const exp = input.content;
      const inMatch = exp.match(forAliasRE);
      if (!inMatch)
          return;
      const [, LHS, RHS] = inMatch;
      const result = {
          source: createAliasExpression(loc, RHS.trim(), exp.indexOf(RHS, LHS.length)),
          value: undefined,
          key: undefined,
          index: undefined
      };
      {
          validateBrowserExpression(result.source, context);
      }
      let valueContent = LHS.trim().replace(stripParensRE, '').trim();
      const trimmedOffset = LHS.indexOf(valueContent);
      const iteratorMatch = valueContent.match(forIteratorRE);
      if (iteratorMatch) {
          valueContent = valueContent.replace(forIteratorRE, '').trim();
          const keyContent = iteratorMatch[1].trim();
          let keyOffset;
          if (keyContent) {
              keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
              result.key = createAliasExpression(loc, keyContent, keyOffset);
              {
                  validateBrowserExpression(result.key, context, true);
              }
          }
          if (iteratorMatch[2]) {
              const indexContent = iteratorMatch[2].trim();
              if (indexContent) {
                  result.index = createAliasExpression(loc, indexContent, exp.indexOf(indexContent, result.key
                      ? keyOffset + keyContent.length
                      : trimmedOffset + valueContent.length));
                  {
                      validateBrowserExpression(result.index, context, true);
                  }
              }
          }
      }
      if (valueContent) {
          result.value = createAliasExpression(loc, valueContent, trimmedOffset);
          {
              validateBrowserExpression(result.value, context, true);
          }
      }
      return result;
  }
  function createAliasExpression(range, content, offset) {
      return createSimpleExpression(content, false, getInnerRange(range, offset, content.length));
  }
  function createForLoopParams({ value, key, index }, memoArgs = []) {
      return createParamsList([value, key, index, ...memoArgs]);
  }
  function createParamsList(args) {
      let i = args.length;
      while (i--) {
          if (args[i])
              break;
      }
      return args
          .slice(0, i + 1)
          .map((arg, i) => arg || createSimpleExpression(`_`.repeat(i + 1), false));
  }

  const defaultFallback = createSimpleExpression(`undefined`, false);
  // A NodeTransform that:
  // 1. Tracks scope identifiers for scoped slots so that they don't get prefixed
  //    by transformExpression. This is only applied in non-browser builds with
  //    { prefixIdentifiers: true }.
  // 2. Track v-slot depths so that we know a slot is inside another slot.
  //    Note the exit callback is executed before buildSlots() on the same node,
  //    so only nested slots see positive numbers.
  const trackSlotScopes = (node, context) => {
      if (node.type === 1 /* ELEMENT */ &&
          (node.tagType === 1 /* COMPONENT */ ||
              node.tagType === 3 /* TEMPLATE */)) {
          // We are only checking non-empty v-slot here
          // since we only care about slots that introduce scope variables.
          const vSlot = findDir(node, 'slot');
          if (vSlot) {
              vSlot.exp;
              context.scopes.vSlot++;
              return () => {
                  context.scopes.vSlot--;
              };
          }
      }
  };
  const buildClientSlotFn = (props, children, loc) => createFunctionExpression(props, children, false /* newline */, true /* isSlot */, children.length ? children[0].loc : loc);
  // Instead of being a DirectiveTransform, v-slot processing is called during
  // transformElement to build the slots object for a component.
  function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
      context.helper(WITH_CTX);
      const { children, loc } = node;
      const slotsProperties = [];
      const dynamicSlots = [];
      // If the slot is inside a v-for or another v-slot, force it to be dynamic
      // since it likely uses a scope variable.
      let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
      // 1. Check for slot with slotProps on component itself.
      //    <Comp v-slot="{ prop }"/>
      const onComponentSlot = findDir(node, 'slot', true);
      if (onComponentSlot) {
          const { arg, exp } = onComponentSlot;
          if (arg && !isStaticExp(arg)) {
              hasDynamicSlots = true;
          }
          slotsProperties.push(createObjectProperty(arg || createSimpleExpression('default', true), buildSlotFn(exp, children, loc)));
      }
      // 2. Iterate through children and check for template slots
      //    <template v-slot:foo="{ prop }">
      let hasTemplateSlots = false;
      let hasNamedDefaultSlot = false;
      const implicitDefaultChildren = [];
      const seenSlotNames = new Set();
      for (let i = 0; i < children.length; i++) {
          const slotElement = children[i];
          let slotDir;
          if (!isTemplateNode(slotElement) ||
              !(slotDir = findDir(slotElement, 'slot', true))) {
              // not a <template v-slot>, skip.
              if (slotElement.type !== 3 /* COMMENT */) {
                  implicitDefaultChildren.push(slotElement);
              }
              continue;
          }
          if (onComponentSlot) {
              // already has on-component slot - this is incorrect usage.
              context.onError(createCompilerError(37 /* X_V_SLOT_MIXED_SLOT_USAGE */, slotDir.loc));
              break;
          }
          hasTemplateSlots = true;
          const { children: slotChildren, loc: slotLoc } = slotElement;
          const { arg: slotName = createSimpleExpression(`default`, true), exp: slotProps, loc: dirLoc } = slotDir;
          // check if name is dynamic.
          let staticSlotName;
          if (isStaticExp(slotName)) {
              staticSlotName = slotName ? slotName.content : `default`;
          }
          else {
              hasDynamicSlots = true;
          }
          const slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc);
          // check if this slot is conditional (v-if/v-for)
          let vIf;
          let vElse;
          let vFor;
          if ((vIf = findDir(slotElement, 'if'))) {
              hasDynamicSlots = true;
              dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback));
          }
          else if ((vElse = findDir(slotElement, /^else(-if)?$/, true /* allowEmpty */))) {
              // find adjacent v-if
              let j = i;
              let prev;
              while (j--) {
                  prev = children[j];
                  if (prev.type !== 3 /* COMMENT */) {
                      break;
                  }
              }
              if (prev && isTemplateNode(prev) && findDir(prev, 'if')) {
                  // remove node
                  children.splice(i, 1);
                  i--;
                  // attach this slot to previous conditional
                  let conditional = dynamicSlots[dynamicSlots.length - 1];
                  while (conditional.alternate.type === 19 /* JS_CONDITIONAL_EXPRESSION */) {
                      conditional = conditional.alternate;
                  }
                  conditional.alternate = vElse.exp
                      ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback)
                      : buildDynamicSlot(slotName, slotFunction);
              }
              else {
                  context.onError(createCompilerError(30 /* X_V_ELSE_NO_ADJACENT_IF */, vElse.loc));
              }
          }
          else if ((vFor = findDir(slotElement, 'for'))) {
              hasDynamicSlots = true;
              const parseResult = vFor.parseResult ||
                  parseForExpression(vFor.exp, context);
              if (parseResult) {
                  // Render the dynamic slots as an array and add it to the createSlot()
                  // args. The runtime knows how to handle it appropriately.
                  dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [
                      parseResult.source,
                      createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true /* force newline */)
                  ]));
              }
              else {
                  context.onError(createCompilerError(32 /* X_V_FOR_MALFORMED_EXPRESSION */, vFor.loc));
              }
          }
          else {
              // check duplicate static names
              if (staticSlotName) {
                  if (seenSlotNames.has(staticSlotName)) {
                      context.onError(createCompilerError(38 /* X_V_SLOT_DUPLICATE_SLOT_NAMES */, dirLoc));
                      continue;
                  }
                  seenSlotNames.add(staticSlotName);
                  if (staticSlotName === 'default') {
                      hasNamedDefaultSlot = true;
                  }
              }
              slotsProperties.push(createObjectProperty(slotName, slotFunction));
          }
      }
      if (!onComponentSlot) {
          const buildDefaultSlotProperty = (props, children) => {
              const fn = buildSlotFn(props, children, loc);
              return createObjectProperty(`default`, fn);
          };
          if (!hasTemplateSlots) {
              // implicit default slot (on component)
              slotsProperties.push(buildDefaultSlotProperty(undefined, children));
          }
          else if (implicitDefaultChildren.length &&
              // #3766
              // with whitespace: 'preserve', whitespaces between slots will end up in
              // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
              implicitDefaultChildren.some(node => isNonWhitespaceContent(node))) {
              // implicit default slot (mixed with named slots)
              if (hasNamedDefaultSlot) {
                  context.onError(createCompilerError(39 /* X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */, implicitDefaultChildren[0].loc));
              }
              else {
                  slotsProperties.push(buildDefaultSlotProperty(undefined, implicitDefaultChildren));
              }
          }
      }
      const slotFlag = hasDynamicSlots
          ? 2 /* DYNAMIC */
          : hasForwardedSlots(node.children)
              ? 3 /* FORWARDED */
              : 1 /* STABLE */;
      let slots = createObjectExpression(slotsProperties.concat(createObjectProperty(`_`, 
      // 2 = compiled but dynamic = can skip normalization, but must run diff
      // 1 = compiled and static = can skip normalization AND diff as optimized
      createSimpleExpression(slotFlag + (` /* ${slotFlagsText[slotFlag]} */` ), false))), loc);
      if (dynamicSlots.length) {
          slots = createCallExpression(context.helper(CREATE_SLOTS), [
              slots,
              createArrayExpression(dynamicSlots)
          ]);
      }
      return {
          slots,
          hasDynamicSlots
      };
  }
  function buildDynamicSlot(name, fn) {
      return createObjectExpression([
          createObjectProperty(`name`, name),
          createObjectProperty(`fn`, fn)
      ]);
  }
  function hasForwardedSlots(children) {
      for (let i = 0; i < children.length; i++) {
          const child = children[i];
          switch (child.type) {
              case 1 /* ELEMENT */:
                  if (child.tagType === 2 /* SLOT */ ||
                      hasForwardedSlots(child.children)) {
                      return true;
                  }
                  break;
              case 9 /* IF */:
                  if (hasForwardedSlots(child.branches))
                      return true;
                  break;
              case 10 /* IF_BRANCH */:
              case 11 /* FOR */:
                  if (hasForwardedSlots(child.children))
                      return true;
                  break;
          }
      }
      return false;
  }
  function isNonWhitespaceContent(node) {
      if (node.type !== 2 /* TEXT */ && node.type !== 12 /* TEXT_CALL */)
          return true;
      return node.type === 2 /* TEXT */
          ? !!node.content.trim()
          : isNonWhitespaceContent(node.content);
  }

  // some directive transforms (e.g. v-model) may return a symbol for runtime
  // import, which should be used instead of a resolveDirective call.
  const directiveImportMap = new WeakMap();
  // generate a JavaScript AST for this element's codegen
  const transformElement = (node, context) => {
      // perform the work on exit, after all child expressions have been
      // processed and merged.
      return function postTransformElement() {
          node = context.currentNode;
          if (!(node.type === 1 /* ELEMENT */ &&
              (node.tagType === 0 /* ELEMENT */ ||
                  node.tagType === 1 /* COMPONENT */))) {
              return;
          }
          const { tag, props } = node;
          const isComponent = node.tagType === 1 /* COMPONENT */;
          // The goal of the transform is to create a codegenNode implementing the
          // VNodeCall interface.
          let vnodeTag = isComponent
              ? resolveComponentType(node, context)
              : `"${tag}"`;
          const isDynamicComponent = isObject(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
          let vnodeProps;
          let vnodeChildren;
          let vnodePatchFlag;
          let patchFlag = 0;
          let vnodeDynamicProps;
          let dynamicPropNames;
          let vnodeDirectives;
          let shouldUseBlock = 
          // dynamic component may resolve to plain elements
          isDynamicComponent ||
              vnodeTag === TELEPORT ||
              vnodeTag === SUSPENSE ||
              (!isComponent &&
                  // <svg> and <foreignObject> must be forced into blocks so that block
                  // updates inside get proper isSVG flag at runtime. (#639, #643)
                  // This is technically web-specific, but splitting the logic out of core
                  // leads to too much unnecessary complexity.
                  (tag === 'svg' ||
                      tag === 'foreignObject' ||
                      // #938: elements with dynamic keys should be forced into blocks
                      findProp(node, 'key', true)));
          // props
          if (props.length > 0) {
              const propsBuildResult = buildProps(node, context);
              vnodeProps = propsBuildResult.props;
              patchFlag = propsBuildResult.patchFlag;
              dynamicPropNames = propsBuildResult.dynamicPropNames;
              const directives = propsBuildResult.directives;
              vnodeDirectives =
                  directives && directives.length
                      ? createArrayExpression(directives.map(dir => buildDirectiveArgs(dir, context)))
                      : undefined;
          }
          // children
          if (node.children.length > 0) {
              if (vnodeTag === KEEP_ALIVE) {
                  // Although a built-in component, we compile KeepAlive with raw children
                  // instead of slot functions so that it can be used inside Transition
                  // or other Transition-wrapping HOCs.
                  // To ensure correct updates with block optimizations, we need to:
                  // 1. Force keep-alive into a block. This avoids its children being
                  //    collected by a parent block.
                  shouldUseBlock = true;
                  // 2. Force keep-alive to always be updated, since it uses raw children.
                  patchFlag |= 1024 /* DYNAMIC_SLOTS */;
                  if (node.children.length > 1) {
                      context.onError(createCompilerError(45 /* X_KEEP_ALIVE_INVALID_CHILDREN */, {
                          start: node.children[0].loc.start,
                          end: node.children[node.children.length - 1].loc.end,
                          source: ''
                      }));
                  }
              }
              const shouldBuildAsSlots = isComponent &&
                  // Teleport is not a real component and has dedicated runtime handling
                  vnodeTag !== TELEPORT &&
                  // explained above.
                  vnodeTag !== KEEP_ALIVE;
              if (shouldBuildAsSlots) {
                  const { slots, hasDynamicSlots } = buildSlots(node, context);
                  vnodeChildren = slots;
                  if (hasDynamicSlots) {
                      patchFlag |= 1024 /* DYNAMIC_SLOTS */;
                  }
              }
              else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
                  const child = node.children[0];
                  const type = child.type;
                  // check for dynamic text children
                  const hasDynamicTextChild = type === 5 /* INTERPOLATION */ ||
                      type === 8 /* COMPOUND_EXPRESSION */;
                  if (hasDynamicTextChild &&
                      getConstantType(child, context) === 0 /* NOT_CONSTANT */) {
                      patchFlag |= 1 /* TEXT */;
                  }
                  // pass directly if the only child is a text node
                  // (plain / interpolation / expression)
                  if (hasDynamicTextChild || type === 2 /* TEXT */) {
                      vnodeChildren = child;
                  }
                  else {
                      vnodeChildren = node.children;
                  }
              }
              else {
                  vnodeChildren = node.children;
              }
          }
          // patchFlag & dynamicPropNames
          if (patchFlag !== 0) {
              {
                  if (patchFlag < 0) {
                      // special flags (negative and mutually exclusive)
                      vnodePatchFlag = patchFlag + ` /* ${PatchFlagNames[patchFlag]} */`;
                  }
                  else {
                      // bitwise flags
                      const flagNames = Object.keys(PatchFlagNames)
                          .map(Number)
                          .filter(n => n > 0 && patchFlag & n)
                          .map(n => PatchFlagNames[n])
                          .join(`, `);
                      vnodePatchFlag = patchFlag + ` /* ${flagNames} */`;
                  }
              }
              if (dynamicPropNames && dynamicPropNames.length) {
                  vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
              }
          }
          node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false /* disableTracking */, isComponent, node.loc);
      };
  };
  function resolveComponentType(node, context, ssr = false) {
      let { tag } = node;
      // 1. dynamic component
      const isExplicitDynamic = isComponentTag(tag);
      const isProp = findProp(node, 'is');
      if (isProp) {
          if (isExplicitDynamic ||
              (false )) {
              const exp = isProp.type === 6 /* ATTRIBUTE */
                  ? isProp.value && createSimpleExpression(isProp.value.content, true)
                  : isProp.exp;
              if (exp) {
                  return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
                      exp
                  ]);
              }
          }
          else if (isProp.type === 6 /* ATTRIBUTE */ &&
              isProp.value.content.startsWith('vue:')) {
              // <button is="vue:xxx">
              // if not <component>, only is value that starts with "vue:" will be
              // treated as component by the parse phase and reach here, unless it's
              // compat mode where all is values are considered components
              tag = isProp.value.content.slice(4);
          }
      }
      // 1.5 v-is (TODO: Deprecate)
      const isDir = !isExplicitDynamic && findDir(node, 'is');
      if (isDir && isDir.exp) {
          return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
              isDir.exp
          ]);
      }
      // 2. built-in components (Teleport, Transition, KeepAlive, Suspense...)
      const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
      if (builtIn) {
          // built-ins are simply fallthroughs / have special handling during ssr
          // so we don't need to import their runtime equivalents
          if (!ssr)
              context.helper(builtIn);
          return builtIn;
      }
      // 5. user component (resolve)
      context.helper(RESOLVE_COMPONENT);
      context.components.add(tag);
      return toValidAssetId(tag, `component`);
  }
  function buildProps(node, context, props = node.props, ssr = false) {
      const { tag, loc: elementLoc } = node;
      const isComponent = node.tagType === 1 /* COMPONENT */;
      let properties = [];
      const mergeArgs = [];
      const runtimeDirectives = [];
      // patchFlag analysis
      let patchFlag = 0;
      let hasRef = false;
      let hasClassBinding = false;
      let hasStyleBinding = false;
      let hasHydrationEventBinding = false;
      let hasDynamicKeys = false;
      let hasVnodeHook = false;
      const dynamicPropNames = [];
      const analyzePatchFlag = ({ key, value }) => {
          if (isStaticExp(key)) {
              const name = key.content;
              const isEventHandler = isOn(name);
              if (!isComponent &&
                  isEventHandler &&
                  // omit the flag for click handlers because hydration gives click
                  // dedicated fast path.
                  name.toLowerCase() !== 'onclick' &&
                  // omit v-model handlers
                  name !== 'onUpdate:modelValue' &&
                  // omit onVnodeXXX hooks
                  !isReservedProp(name)) {
                  hasHydrationEventBinding = true;
              }
              if (isEventHandler && isReservedProp(name)) {
                  hasVnodeHook = true;
              }
              if (value.type === 20 /* JS_CACHE_EXPRESSION */ ||
                  ((value.type === 4 /* SIMPLE_EXPRESSION */ ||
                      value.type === 8 /* COMPOUND_EXPRESSION */) &&
                      getConstantType(value, context) > 0)) {
                  // skip if the prop is a cached handler or has constant value
                  return;
              }
              if (name === 'ref') {
                  hasRef = true;
              }
              else if (name === 'class') {
                  hasClassBinding = true;
              }
              else if (name === 'style') {
                  hasStyleBinding = true;
              }
              else if (name !== 'key' && !dynamicPropNames.includes(name)) {
                  dynamicPropNames.push(name);
              }
              // treat the dynamic class and style binding of the component as dynamic props
              if (isComponent &&
                  (name === 'class' || name === 'style') &&
                  !dynamicPropNames.includes(name)) {
                  dynamicPropNames.push(name);
              }
          }
          else {
              hasDynamicKeys = true;
          }
      };
      for (let i = 0; i < props.length; i++) {
          // static attribute
          const prop = props[i];
          if (prop.type === 6 /* ATTRIBUTE */) {
              const { loc, name, value } = prop;
              let valueNode = createSimpleExpression(value ? value.content : '', true, value ? value.loc : loc);
              if (name === 'ref') {
                  hasRef = true;
              }
              // skip is on <component>, or is="vue:xxx"
              if (name === 'is' &&
                  (isComponentTag(tag) ||
                      (value && value.content.startsWith('vue:')) ||
                      (false ))) {
                  continue;
              }
              properties.push(createObjectProperty(createSimpleExpression(name, true, getInnerRange(loc, 0, name.length)), valueNode));
          }
          else {
              // directives
              const { name, arg, exp, loc } = prop;
              const isVBind = name === 'bind';
              const isVOn = name === 'on';
              // skip v-slot - it is handled by its dedicated transform.
              if (name === 'slot') {
                  if (!isComponent) {
                      context.onError(createCompilerError(40 /* X_V_SLOT_MISPLACED */, loc));
                  }
                  continue;
              }
              // skip v-once/v-memo - they are handled by dedicated transforms.
              if (name === 'once' || name === 'memo') {
                  continue;
              }
              // skip v-is and :is on <component>
              if (name === 'is' ||
                  (isVBind &&
                      isBindKey(arg, 'is') &&
                      (isComponentTag(tag) ||
                          (false )))) {
                  continue;
              }
              // skip v-on in SSR compilation
              if (isVOn && ssr) {
                  continue;
              }
              // special case for v-bind and v-on with no argument
              if (!arg && (isVBind || isVOn)) {
                  hasDynamicKeys = true;
                  if (exp) {
                      if (properties.length) {
                          mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
                          properties = [];
                      }
                      if (isVBind) {
                          mergeArgs.push(exp);
                      }
                      else {
                          // v-on="obj" -> toHandlers(obj)
                          mergeArgs.push({
                              type: 14 /* JS_CALL_EXPRESSION */,
                              loc,
                              callee: context.helper(TO_HANDLERS),
                              arguments: [exp]
                          });
                      }
                  }
                  else {
                      context.onError(createCompilerError(isVBind
                          ? 34 /* X_V_BIND_NO_EXPRESSION */
                          : 35 /* X_V_ON_NO_EXPRESSION */, loc));
                  }
                  continue;
              }
              const directiveTransform = context.directiveTransforms[name];
              if (directiveTransform) {
                  // has built-in directive transform.
                  const { props, needRuntime } = directiveTransform(prop, node, context);
                  !ssr && props.forEach(analyzePatchFlag);
                  properties.push(...props);
                  if (needRuntime) {
                      runtimeDirectives.push(prop);
                      if (isSymbol(needRuntime)) {
                          directiveImportMap.set(prop, needRuntime);
                      }
                  }
              }
              else {
                  // no built-in transform, this is a user custom directive.
                  runtimeDirectives.push(prop);
              }
          }
      }
      let propsExpression = undefined;
      // has v-bind="object" or v-on="object", wrap with mergeProps
      if (mergeArgs.length) {
          if (properties.length) {
              mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
          }
          if (mergeArgs.length > 1) {
              propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
          }
          else {
              // single v-bind with nothing else - no need for a mergeProps call
              propsExpression = mergeArgs[0];
          }
      }
      else if (properties.length) {
          propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
      }
      // patchFlag analysis
      if (hasDynamicKeys) {
          patchFlag |= 16 /* FULL_PROPS */;
      }
      else {
          if (hasClassBinding && !isComponent) {
              patchFlag |= 2 /* CLASS */;
          }
          if (hasStyleBinding && !isComponent) {
              patchFlag |= 4 /* STYLE */;
          }
          if (dynamicPropNames.length) {
              patchFlag |= 8 /* PROPS */;
          }
          if (hasHydrationEventBinding) {
              patchFlag |= 32 /* HYDRATE_EVENTS */;
          }
      }
      if ((patchFlag === 0 || patchFlag === 32 /* HYDRATE_EVENTS */) &&
          (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
          patchFlag |= 512 /* NEED_PATCH */;
      }
      // pre-normalize props, SSR is skipped for now
      if (!context.inSSR && propsExpression) {
          switch (propsExpression.type) {
              case 15 /* JS_OBJECT_EXPRESSION */:
                  // means that there is no v-bind,
                  // but still need to deal with dynamic key binding
                  let classKeyIndex = -1;
                  let styleKeyIndex = -1;
                  let hasDynamicKey = false;
                  for (let i = 0; i < propsExpression.properties.length; i++) {
                      const key = propsExpression.properties[i].key;
                      if (isStaticExp(key)) {
                          if (key.content === 'class') {
                              classKeyIndex = i;
                          }
                          else if (key.content === 'style') {
                              styleKeyIndex = i;
                          }
                      }
                      else if (!key.isHandlerKey) {
                          hasDynamicKey = true;
                      }
                  }
                  const classProp = propsExpression.properties[classKeyIndex];
                  const styleProp = propsExpression.properties[styleKeyIndex];
                  // no dynamic key
                  if (!hasDynamicKey) {
                      if (classProp && !isStaticExp(classProp.value)) {
                          classProp.value = createCallExpression(context.helper(NORMALIZE_CLASS), [classProp.value]);
                      }
                      if (styleProp &&
                          !isStaticExp(styleProp.value) &&
                          // the static style is compiled into an object,
                          // so use `hasStyleBinding` to ensure that it is a dynamic style binding
                          (hasStyleBinding ||
                              // v-bind:style and style both exist,
                              // v-bind:style with static literal object
                              styleProp.value.type === 17 /* JS_ARRAY_EXPRESSION */)) {
                          styleProp.value = createCallExpression(context.helper(NORMALIZE_STYLE), [styleProp.value]);
                      }
                  }
                  else {
                      // dynamic key binding, wrap with `normalizeProps`
                      propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [propsExpression]);
                  }
                  break;
              case 14 /* JS_CALL_EXPRESSION */:
                  // mergeProps call, do nothing
                  break;
              default:
                  // single v-bind
                  propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [
                      createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [
                          propsExpression
                      ])
                  ]);
                  break;
          }
      }
      return {
          props: propsExpression,
          directives: runtimeDirectives,
          patchFlag,
          dynamicPropNames
      };
  }
  // Dedupe props in an object literal.
  // Literal duplicated attributes would have been warned during the parse phase,
  // however, it's possible to encounter duplicated `onXXX` handlers with different
  // modifiers. We also need to merge static and dynamic class / style attributes.
  // - onXXX handlers / style: merge into array
  // - class: merge into single expression with concatenation
  function dedupeProperties(properties) {
      const knownProps = new Map();
      const deduped = [];
      for (let i = 0; i < properties.length; i++) {
          const prop = properties[i];
          // dynamic keys are always allowed
          if (prop.key.type === 8 /* COMPOUND_EXPRESSION */ || !prop.key.isStatic) {
              deduped.push(prop);
              continue;
          }
          const name = prop.key.content;
          const existing = knownProps.get(name);
          if (existing) {
              if (name === 'style' || name === 'class' || isOn(name)) {
                  mergeAsArray$1(existing, prop);
              }
              // unexpected duplicate, should have emitted error during parse
          }
          else {
              knownProps.set(name, prop);
              deduped.push(prop);
          }
      }
      return deduped;
  }
  function mergeAsArray$1(existing, incoming) {
      if (existing.value.type === 17 /* JS_ARRAY_EXPRESSION */) {
          existing.value.elements.push(incoming.value);
      }
      else {
          existing.value = createArrayExpression([existing.value, incoming.value], existing.loc);
      }
  }
  function buildDirectiveArgs(dir, context) {
      const dirArgs = [];
      const runtime = directiveImportMap.get(dir);
      if (runtime) {
          // built-in directive with runtime
          dirArgs.push(context.helperString(runtime));
      }
      else {
          {
              // inject statement for resolving directive
              context.helper(RESOLVE_DIRECTIVE);
              context.directives.add(dir.name);
              dirArgs.push(toValidAssetId(dir.name, `directive`));
          }
      }
      const { loc } = dir;
      if (dir.exp)
          dirArgs.push(dir.exp);
      if (dir.arg) {
          if (!dir.exp) {
              dirArgs.push(`void 0`);
          }
          dirArgs.push(dir.arg);
      }
      if (Object.keys(dir.modifiers).length) {
          if (!dir.arg) {
              if (!dir.exp) {
                  dirArgs.push(`void 0`);
              }
              dirArgs.push(`void 0`);
          }
          const trueExpression = createSimpleExpression(`true`, false, loc);
          dirArgs.push(createObjectExpression(dir.modifiers.map(modifier => createObjectProperty(modifier, trueExpression)), loc));
      }
      return createArrayExpression(dirArgs, dir.loc);
  }
  function stringifyDynamicPropNames(props) {
      let propsNamesString = `[`;
      for (let i = 0, l = props.length; i < l; i++) {
          propsNamesString += JSON.stringify(props[i]);
          if (i < l - 1)
              propsNamesString += ', ';
      }
      return propsNamesString + `]`;
  }
  function isComponentTag(tag) {
      return tag === 'component' || tag === 'Component';
  }

  const transformSlotOutlet = (node, context) => {
      if (isSlotOutlet(node)) {
          const { children, loc } = node;
          const { slotName, slotProps } = processSlotOutlet(node, context);
          const slotArgs = [
              context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
              slotName,
              '{}',
              'undefined',
              'true'
          ];
          let expectedLen = 2;
          if (slotProps) {
              slotArgs[2] = slotProps;
              expectedLen = 3;
          }
          if (children.length) {
              slotArgs[3] = createFunctionExpression([], children, false, false, loc);
              expectedLen = 4;
          }
          if (context.scopeId && !context.slotted) {
              expectedLen = 5;
          }
          slotArgs.splice(expectedLen); // remove unused arguments
          node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
      }
  };
  function processSlotOutlet(node, context) {
      let slotName = `"default"`;
      let slotProps = undefined;
      const nonNameProps = [];
      for (let i = 0; i < node.props.length; i++) {
          const p = node.props[i];
          if (p.type === 6 /* ATTRIBUTE */) {
              if (p.value) {
                  if (p.name === 'name') {
                      slotName = JSON.stringify(p.value.content);
                  }
                  else {
                      p.name = camelize(p.name);
                      nonNameProps.push(p);
                  }
              }
          }
          else {
              if (p.name === 'bind' && isBindKey(p.arg, 'name')) {
                  if (p.exp)
                      slotName = p.exp;
              }
              else {
                  if (p.name === 'bind' && p.arg && isStaticExp(p.arg)) {
                      p.arg.content = camelize(p.arg.content);
                  }
                  nonNameProps.push(p);
              }
          }
      }
      if (nonNameProps.length > 0) {
          const { props, directives } = buildProps(node, context, nonNameProps);
          slotProps = props;
          if (directives.length) {
              context.onError(createCompilerError(36 /* X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */, directives[0].loc));
          }
      }
      return {
          slotName,
          slotProps
      };
  }

  const fnExpRE = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
  const transformOn = (dir, node, context, augmentor) => {
      const { loc, modifiers, arg } = dir;
      if (!dir.exp && !modifiers.length) {
          context.onError(createCompilerError(35 /* X_V_ON_NO_EXPRESSION */, loc));
      }
      let eventName;
      if (arg.type === 4 /* SIMPLE_EXPRESSION */) {
          if (arg.isStatic) {
              const rawName = arg.content;
              // for all event listeners, auto convert it to camelCase. See issue #2249
              eventName = createSimpleExpression(toHandlerKey(camelize(rawName)), true, arg.loc);
          }
          else {
              // #2388
              eventName = createCompoundExpression([
                  `${context.helperString(TO_HANDLER_KEY)}(`,
                  arg,
                  `)`
              ]);
          }
      }
      else {
          // already a compound expression.
          eventName = arg;
          eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
          eventName.children.push(`)`);
      }
      // handler processing
      let exp = dir.exp;
      if (exp && !exp.content.trim()) {
          exp = undefined;
      }
      let shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
      if (exp) {
          const isMemberExp = isMemberExpression(exp.content);
          const isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
          const hasMultipleStatements = exp.content.includes(`;`);
          {
              validateBrowserExpression(exp, context, false, hasMultipleStatements);
          }
          if (isInlineStatement || (shouldCache && isMemberExp)) {
              // wrap inline statement in a function expression
              exp = createCompoundExpression([
                  `${isInlineStatement
                    ? `$event`
                    : `${``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
                  exp,
                  hasMultipleStatements ? `}` : `)`
              ]);
          }
      }
      let ret = {
          props: [
              createObjectProperty(eventName, exp || createSimpleExpression(`() => {}`, false, loc))
          ]
      };
      // apply extended compiler augmentor
      if (augmentor) {
          ret = augmentor(ret);
      }
      if (shouldCache) {
          // cache handlers so that it's always the same handler being passed down.
          // this avoids unnecessary re-renders when users use inline handlers on
          // components.
          ret.props[0].value = context.cache(ret.props[0].value);
      }
      // mark the key as handler for props normalization check
      ret.props.forEach(p => (p.key.isHandlerKey = true));
      return ret;
  };

  // v-bind without arg is handled directly in ./transformElements.ts due to it affecting
  // codegen for the entire props object. This transform here is only for v-bind
  // *with* args.
  const transformBind = (dir, _node, context) => {
      const { exp, modifiers, loc } = dir;
      const arg = dir.arg;
      if (arg.type !== 4 /* SIMPLE_EXPRESSION */) {
          arg.children.unshift(`(`);
          arg.children.push(`) || ""`);
      }
      else if (!arg.isStatic) {
          arg.content = `${arg.content} || ""`;
      }
      // .sync is replaced by v-model:arg
      if (modifiers.includes('camel')) {
          if (arg.type === 4 /* SIMPLE_EXPRESSION */) {
              if (arg.isStatic) {
                  arg.content = camelize(arg.content);
              }
              else {
                  arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
              }
          }
          else {
              arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
              arg.children.push(`)`);
          }
      }
      if (!context.inSSR) {
          if (modifiers.includes('prop')) {
              injectPrefix(arg, '.');
          }
          if (modifiers.includes('attr')) {
              injectPrefix(arg, '^');
          }
      }
      if (!exp ||
          (exp.type === 4 /* SIMPLE_EXPRESSION */ && !exp.content.trim())) {
          context.onError(createCompilerError(34 /* X_V_BIND_NO_EXPRESSION */, loc));
          return {
              props: [createObjectProperty(arg, createSimpleExpression('', true, loc))]
          };
      }
      return {
          props: [createObjectProperty(arg, exp)]
      };
  };
  const injectPrefix = (arg, prefix) => {
      if (arg.type === 4 /* SIMPLE_EXPRESSION */) {
          if (arg.isStatic) {
              arg.content = prefix + arg.content;
          }
          else {
              arg.content = `\`${prefix}\${${arg.content}}\``;
          }
      }
      else {
          arg.children.unshift(`'${prefix}' + (`);
          arg.children.push(`)`);
      }
  };

  // Merge adjacent text nodes and expressions into a single expression
  // e.g. <div>abc {{ d }} {{ e }}</div> should have a single expression node as child.
  const transformText = (node, context) => {
      if (node.type === 0 /* ROOT */ ||
          node.type === 1 /* ELEMENT */ ||
          node.type === 11 /* FOR */ ||
          node.type === 10 /* IF_BRANCH */) {
          // perform the transform on node exit so that all expressions have already
          // been processed.
          return () => {
              const children = node.children;
              let currentContainer = undefined;
              let hasText = false;
              for (let i = 0; i < children.length; i++) {
                  const child = children[i];
                  if (isText(child)) {
                      hasText = true;
                      for (let j = i + 1; j < children.length; j++) {
                          const next = children[j];
                          if (isText(next)) {
                              if (!currentContainer) {
                                  currentContainer = children[i] = {
                                      type: 8 /* COMPOUND_EXPRESSION */,
                                      loc: child.loc,
                                      children: [child]
                                  };
                              }
                              // merge adjacent text node into current
                              currentContainer.children.push(` + `, next);
                              children.splice(j, 1);
                              j--;
                          }
                          else {
                              currentContainer = undefined;
                              break;
                          }
                      }
                  }
              }
              if (!hasText ||
                  // if this is a plain element with a single text child, leave it
                  // as-is since the runtime has dedicated fast path for this by directly
                  // setting textContent of the element.
                  // for component root it's always normalized anyway.
                  (children.length === 1 &&
                      (node.type === 0 /* ROOT */ ||
                          (node.type === 1 /* ELEMENT */ &&
                              node.tagType === 0 /* ELEMENT */ &&
                              // #3756
                              // custom directives can potentially add DOM elements arbitrarily,
                              // we need to avoid setting textContent of the element at runtime
                              // to avoid accidentally overwriting the DOM elements added
                              // by the user through custom directives.
                              !node.props.find(p => p.type === 7 /* DIRECTIVE */ &&
                                  !context.directiveTransforms[p.name]) &&
                              // in compat mode, <template> tags with no special directives
                              // will be rendered as a fragment so its children must be
                              // converted into vnodes.
                              !(false ))))) {
                  return;
              }
              // pre-convert text nodes into createTextVNode(text) calls to avoid
              // runtime normalization.
              for (let i = 0; i < children.length; i++) {
                  const child = children[i];
                  if (isText(child) || child.type === 8 /* COMPOUND_EXPRESSION */) {
                      const callArgs = [];
                      // createTextVNode defaults to single whitespace, so if it is a
                      // single space the code could be an empty call to save bytes.
                      if (child.type !== 2 /* TEXT */ || child.content !== ' ') {
                          callArgs.push(child);
                      }
                      // mark dynamic text with flag so it gets patched inside a block
                      if (!context.ssr &&
                          getConstantType(child, context) === 0 /* NOT_CONSTANT */) {
                          callArgs.push(1 /* TEXT */ +
                              (` /* ${PatchFlagNames[1 /* TEXT */]} */` ));
                      }
                      children[i] = {
                          type: 12 /* TEXT_CALL */,
                          content: child,
                          loc: child.loc,
                          codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
                      };
                  }
              }
          };
      }
  };

  const seen = new WeakSet();
  const transformOnce = (node, context) => {
      if (node.type === 1 /* ELEMENT */ && findDir(node, 'once', true)) {
          if (seen.has(node) || context.inVOnce) {
              return;
          }
          seen.add(node);
          context.inVOnce = true;
          context.helper(SET_BLOCK_TRACKING);
          return () => {
              context.inVOnce = false;
              const cur = context.currentNode;
              if (cur.codegenNode) {
                  cur.codegenNode = context.cache(cur.codegenNode, true /* isVNode */);
              }
          };
      }
  };

  const transformModel = (dir, node, context) => {
      const { exp, arg } = dir;
      if (!exp) {
          context.onError(createCompilerError(41 /* X_V_MODEL_NO_EXPRESSION */, dir.loc));
          return createTransformProps();
      }
      const rawExp = exp.loc.source;
      const expString = exp.type === 4 /* SIMPLE_EXPRESSION */ ? exp.content : rawExp;
      // im SFC <script setup> inline mode, the exp may have been transformed into
      // _unref(exp)
      context.bindingMetadata[rawExp];
      const maybeRef = !true    /* SETUP_CONST */;
      if (!expString.trim() ||
          (!isMemberExpression(expString) && !maybeRef)) {
          context.onError(createCompilerError(42 /* X_V_MODEL_MALFORMED_EXPRESSION */, exp.loc));
          return createTransformProps();
      }
      const propName = arg ? arg : createSimpleExpression('modelValue', true);
      const eventName = arg
          ? isStaticExp(arg)
              ? `onUpdate:${arg.content}`
              : createCompoundExpression(['"onUpdate:" + ', arg])
          : `onUpdate:modelValue`;
      let assignmentExp;
      const eventArg = context.isTS ? `($event: any)` : `$event`;
      {
          assignmentExp = createCompoundExpression([
              `${eventArg} => ((`,
              exp,
              `) = $event)`
          ]);
      }
      const props = [
          // modelValue: foo
          createObjectProperty(propName, dir.exp),
          // "onUpdate:modelValue": $event => (foo = $event)
          createObjectProperty(eventName, assignmentExp)
      ];
      // modelModifiers: { foo: true, "bar-baz": true }
      if (dir.modifiers.length && node.tagType === 1 /* COMPONENT */) {
          const modifiers = dir.modifiers
              .map(m => (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`)
              .join(`, `);
          const modifiersKey = arg
              ? isStaticExp(arg)
                  ? `${arg.content}Modifiers`
                  : createCompoundExpression([arg, ' + "Modifiers"'])
              : `modelModifiers`;
          props.push(createObjectProperty(modifiersKey, createSimpleExpression(`{ ${modifiers} }`, false, dir.loc, 2 /* CAN_HOIST */)));
      }
      return createTransformProps(props);
  };
  function createTransformProps(props = []) {
      return { props };
  }

  const seen$1 = new WeakSet();
  const transformMemo = (node, context) => {
      if (node.type === 1 /* ELEMENT */) {
          const dir = findDir(node, 'memo');
          if (!dir || seen$1.has(node)) {
              return;
          }
          seen$1.add(node);
          return () => {
              const codegenNode = node.codegenNode ||
                  context.currentNode.codegenNode;
              if (codegenNode && codegenNode.type === 13 /* VNODE_CALL */) {
                  // non-component sub tree should be turned into a block
                  if (node.tagType !== 1 /* COMPONENT */) {
                      makeBlock(codegenNode, context);
                  }
                  node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [
                      dir.exp,
                      createFunctionExpression(undefined, codegenNode),
                      `_cache`,
                      String(context.cached++)
                  ]);
              }
          };
      }
  };

  function getBaseTransformPreset(prefixIdentifiers) {
      return [
          [
              transformOnce,
              transformIf,
              transformMemo,
              transformFor,
              ...([]),
              ...([transformExpression]
                      ),
              transformSlotOutlet,
              transformElement,
              trackSlotScopes,
              transformText
          ],
          {
              on: transformOn,
              bind: transformBind,
              model: transformModel
          }
      ];
  }
  // we name it `baseCompile` so that higher order compilers like
  // @vue/compiler-dom can export `compile` while re-exporting everything else.
  function baseCompile(template, options = {}) {
      const onError = options.onError || defaultOnError;
      const isModuleMode = options.mode === 'module';
      /* istanbul ignore if */
      {
          if (options.prefixIdentifiers === true) {
              onError(createCompilerError(46 /* X_PREFIX_ID_NOT_SUPPORTED */));
          }
          else if (isModuleMode) {
              onError(createCompilerError(47 /* X_MODULE_MODE_NOT_SUPPORTED */));
          }
      }
      const prefixIdentifiers = !true ;
      if (options.cacheHandlers) {
          onError(createCompilerError(48 /* X_CACHE_HANDLER_NOT_SUPPORTED */));
      }
      if (options.scopeId && !isModuleMode) {
          onError(createCompilerError(49 /* X_SCOPE_ID_NOT_SUPPORTED */));
      }
      const ast = isString(template) ? baseParse(template, options) : template;
      const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
      transform(ast, extend({}, options, {
          prefixIdentifiers,
          nodeTransforms: [
              ...nodeTransforms,
              ...(options.nodeTransforms || []) // user transforms
          ],
          directiveTransforms: extend({}, directiveTransforms, options.directiveTransforms || {} // user transforms
          )
      }));
      return generate(ast, extend({}, options, {
          prefixIdentifiers
      }));
  }

  const noopDirectiveTransform = () => ({ props: [] });

  const V_MODEL_RADIO = Symbol(`vModelRadio` );
  const V_MODEL_CHECKBOX = Symbol(`vModelCheckbox` );
  const V_MODEL_TEXT = Symbol(`vModelText` );
  const V_MODEL_SELECT = Symbol(`vModelSelect` );
  const V_MODEL_DYNAMIC = Symbol(`vModelDynamic` );
  const V_ON_WITH_MODIFIERS = Symbol(`vOnModifiersGuard` );
  const V_ON_WITH_KEYS = Symbol(`vOnKeysGuard` );
  const V_SHOW = Symbol(`vShow` );
  const TRANSITION$1 = Symbol(`Transition` );
  const TRANSITION_GROUP = Symbol(`TransitionGroup` );
  registerRuntimeHelpers({
      [V_MODEL_RADIO]: `vModelRadio`,
      [V_MODEL_CHECKBOX]: `vModelCheckbox`,
      [V_MODEL_TEXT]: `vModelText`,
      [V_MODEL_SELECT]: `vModelSelect`,
      [V_MODEL_DYNAMIC]: `vModelDynamic`,
      [V_ON_WITH_MODIFIERS]: `withModifiers`,
      [V_ON_WITH_KEYS]: `withKeys`,
      [V_SHOW]: `vShow`,
      [TRANSITION$1]: `Transition`,
      [TRANSITION_GROUP]: `TransitionGroup`
  });

  /* eslint-disable no-restricted-globals */
  let decoder;
  function decodeHtmlBrowser(raw, asAttr = false) {
      if (!decoder) {
          decoder = document.createElement('div');
      }
      if (asAttr) {
          decoder.innerHTML = `<div foo="${raw.replace(/"/g, '&quot;')}">`;
          return decoder.children[0].getAttribute('foo');
      }
      else {
          decoder.innerHTML = raw;
          return decoder.textContent;
      }
  }

  const isRawTextContainer = /*#__PURE__*/ makeMap('style,iframe,script,noscript', true);
  const parserOptions = {
      isVoidTag,
      isNativeTag: tag => isHTMLTag(tag) || isSVGTag(tag),
      isPreTag: tag => tag === 'pre',
      decodeEntities: decodeHtmlBrowser ,
      isBuiltInComponent: (tag) => {
          if (isBuiltInType(tag, `Transition`)) {
              return TRANSITION$1;
          }
          else if (isBuiltInType(tag, `TransitionGroup`)) {
              return TRANSITION_GROUP;
          }
      },
      // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
      getNamespace(tag, parent) {
          let ns = parent ? parent.ns : 0 /* HTML */;
          if (parent && ns === 2 /* MATH_ML */) {
              if (parent.tag === 'annotation-xml') {
                  if (tag === 'svg') {
                      return 1 /* SVG */;
                  }
                  if (parent.props.some(a => a.type === 6 /* ATTRIBUTE */ &&
                      a.name === 'encoding' &&
                      a.value != null &&
                      (a.value.content === 'text/html' ||
                          a.value.content === 'application/xhtml+xml'))) {
                      ns = 0 /* HTML */;
                  }
              }
              else if (/^m(?:[ions]|text)$/.test(parent.tag) &&
                  tag !== 'mglyph' &&
                  tag !== 'malignmark') {
                  ns = 0 /* HTML */;
              }
          }
          else if (parent && ns === 1 /* SVG */) {
              if (parent.tag === 'foreignObject' ||
                  parent.tag === 'desc' ||
                  parent.tag === 'title') {
                  ns = 0 /* HTML */;
              }
          }
          if (ns === 0 /* HTML */) {
              if (tag === 'svg') {
                  return 1 /* SVG */;
              }
              if (tag === 'math') {
                  return 2 /* MATH_ML */;
              }
          }
          return ns;
      },
      // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
      getTextMode({ tag, ns }) {
          if (ns === 0 /* HTML */) {
              if (tag === 'textarea' || tag === 'title') {
                  return 1 /* RCDATA */;
              }
              if (isRawTextContainer(tag)) {
                  return 2 /* RAWTEXT */;
              }
          }
          return 0 /* DATA */;
      }
  };

  // Parse inline CSS strings for static style attributes into an object.
  // This is a NodeTransform since it works on the static `style` attribute and
  // converts it into a dynamic equivalent:
  // style="color: red" -> :style='{ "color": "red" }'
  // It is then processed by `transformElement` and included in the generated
  // props.
  const transformStyle = node => {
      if (node.type === 1 /* ELEMENT */) {
          node.props.forEach((p, i) => {
              if (p.type === 6 /* ATTRIBUTE */ && p.name === 'style' && p.value) {
                  // replace p with an expression node
                  node.props[i] = {
                      type: 7 /* DIRECTIVE */,
                      name: `bind`,
                      arg: createSimpleExpression(`style`, true, p.loc),
                      exp: parseInlineCSS(p.value.content, p.loc),
                      modifiers: [],
                      loc: p.loc
                  };
              }
          });
      }
  };
  const parseInlineCSS = (cssText, loc) => {
      const normalized = parseStringStyle(cssText);
      return createSimpleExpression(JSON.stringify(normalized), false, loc, 3 /* CAN_STRINGIFY */);
  };

  function createDOMCompilerError(code, loc) {
      return createCompilerError(code, loc, DOMErrorMessages );
  }
  const DOMErrorMessages = {
      [50 /* X_V_HTML_NO_EXPRESSION */]: `v-html is missing expression.`,
      [51 /* X_V_HTML_WITH_CHILDREN */]: `v-html will override element children.`,
      [52 /* X_V_TEXT_NO_EXPRESSION */]: `v-text is missing expression.`,
      [53 /* X_V_TEXT_WITH_CHILDREN */]: `v-text will override element children.`,
      [54 /* X_V_MODEL_ON_INVALID_ELEMENT */]: `v-model can only be used on <input>, <textarea> and <select> elements.`,
      [55 /* X_V_MODEL_ARG_ON_ELEMENT */]: `v-model argument is not supported on plain elements.`,
      [56 /* X_V_MODEL_ON_FILE_INPUT_ELEMENT */]: `v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.`,
      [57 /* X_V_MODEL_UNNECESSARY_VALUE */]: `Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.`,
      [58 /* X_V_SHOW_NO_EXPRESSION */]: `v-show is missing expression.`,
      [59 /* X_TRANSITION_INVALID_CHILDREN */]: `<Transition> expects exactly one child element or component.`,
      [60 /* X_IGNORED_SIDE_EFFECT_TAG */]: `Tags with side effect (<script> and <style>) are ignored in client component templates.`
  };

  const transformVHtml = (dir, node, context) => {
      const { exp, loc } = dir;
      if (!exp) {
          context.onError(createDOMCompilerError(50 /* X_V_HTML_NO_EXPRESSION */, loc));
      }
      if (node.children.length) {
          context.onError(createDOMCompilerError(51 /* X_V_HTML_WITH_CHILDREN */, loc));
          node.children.length = 0;
      }
      return {
          props: [
              createObjectProperty(createSimpleExpression(`innerHTML`, true, loc), exp || createSimpleExpression('', true))
          ]
      };
  };

  const transformVText = (dir, node, context) => {
      const { exp, loc } = dir;
      if (!exp) {
          context.onError(createDOMCompilerError(52 /* X_V_TEXT_NO_EXPRESSION */, loc));
      }
      if (node.children.length) {
          context.onError(createDOMCompilerError(53 /* X_V_TEXT_WITH_CHILDREN */, loc));
          node.children.length = 0;
      }
      return {
          props: [
              createObjectProperty(createSimpleExpression(`textContent`, true), exp
                  ? createCallExpression(context.helperString(TO_DISPLAY_STRING), [exp], loc)
                  : createSimpleExpression('', true))
          ]
      };
  };

  const transformModel$1 = (dir, node, context) => {
      const baseResult = transformModel(dir, node, context);
      // base transform has errors OR component v-model (only need props)
      if (!baseResult.props.length || node.tagType === 1 /* COMPONENT */) {
          return baseResult;
      }
      if (dir.arg) {
          context.onError(createDOMCompilerError(55 /* X_V_MODEL_ARG_ON_ELEMENT */, dir.arg.loc));
      }
      function checkDuplicatedValue() {
          const value = findProp(node, 'value');
          if (value) {
              context.onError(createDOMCompilerError(57 /* X_V_MODEL_UNNECESSARY_VALUE */, value.loc));
          }
      }
      const { tag } = node;
      const isCustomElement = context.isCustomElement(tag);
      if (tag === 'input' ||
          tag === 'textarea' ||
          tag === 'select' ||
          isCustomElement) {
          let directiveToUse = V_MODEL_TEXT;
          let isInvalidType = false;
          if (tag === 'input' || isCustomElement) {
              const type = findProp(node, `type`);
              if (type) {
                  if (type.type === 7 /* DIRECTIVE */) {
                      // :type="foo"
                      directiveToUse = V_MODEL_DYNAMIC;
                  }
                  else if (type.value) {
                      switch (type.value.content) {
                          case 'radio':
                              directiveToUse = V_MODEL_RADIO;
                              break;
                          case 'checkbox':
                              directiveToUse = V_MODEL_CHECKBOX;
                              break;
                          case 'file':
                              isInvalidType = true;
                              context.onError(createDOMCompilerError(56 /* X_V_MODEL_ON_FILE_INPUT_ELEMENT */, dir.loc));
                              break;
                          default:
                              // text type
                              checkDuplicatedValue();
                              break;
                      }
                  }
              }
              else if (hasDynamicKeyVBind(node)) {
                  // element has bindings with dynamic keys, which can possibly contain
                  // "type".
                  directiveToUse = V_MODEL_DYNAMIC;
              }
              else {
                  // text type
                  checkDuplicatedValue();
              }
          }
          else if (tag === 'select') {
              directiveToUse = V_MODEL_SELECT;
          }
          else {
              // textarea
              checkDuplicatedValue();
          }
          // inject runtime directive
          // by returning the helper symbol via needRuntime
          // the import will replaced a resolveDirective call.
          if (!isInvalidType) {
              baseResult.needRuntime = context.helper(directiveToUse);
          }
      }
      else {
          context.onError(createDOMCompilerError(54 /* X_V_MODEL_ON_INVALID_ELEMENT */, dir.loc));
      }
      // native vmodel doesn't need the `modelValue` props since they are also
      // passed to the runtime as `binding.value`. removing it reduces code size.
      baseResult.props = baseResult.props.filter(p => !(p.key.type === 4 /* SIMPLE_EXPRESSION */ &&
          p.key.content === 'modelValue'));
      return baseResult;
  };

  const isEventOptionModifier = /*#__PURE__*/ makeMap(`passive,once,capture`);
  const isNonKeyModifier = /*#__PURE__*/ makeMap(
  // event propagation management
`stop,prevent,self,`   +
      // system modifiers + exact
      `ctrl,shift,alt,meta,exact,` +
      // mouse
      `middle`);
  // left & right could be mouse or key modifiers based on event type
  const maybeKeyModifier = /*#__PURE__*/ makeMap('left,right');
  const isKeyboardEvent = /*#__PURE__*/ makeMap(`onkeyup,onkeydown,onkeypress`, true);
  const resolveModifiers = (key, modifiers, context, loc) => {
      const keyModifiers = [];
      const nonKeyModifiers = [];
      const eventOptionModifiers = [];
      for (let i = 0; i < modifiers.length; i++) {
          const modifier = modifiers[i];
          if (isEventOptionModifier(modifier)) {
              // eventOptionModifiers: modifiers for addEventListener() options,
              // e.g. .passive & .capture
              eventOptionModifiers.push(modifier);
          }
          else {
              // runtimeModifiers: modifiers that needs runtime guards
              if (maybeKeyModifier(modifier)) {
                  if (isStaticExp(key)) {
                      if (isKeyboardEvent(key.content)) {
                          keyModifiers.push(modifier);
                      }
                      else {
                          nonKeyModifiers.push(modifier);
                      }
                  }
                  else {
                      keyModifiers.push(modifier);
                      nonKeyModifiers.push(modifier);
                  }
              }
              else {
                  if (isNonKeyModifier(modifier)) {
                      nonKeyModifiers.push(modifier);
                  }
                  else {
                      keyModifiers.push(modifier);
                  }
              }
          }
      }
      return {
          keyModifiers,
          nonKeyModifiers,
          eventOptionModifiers
      };
  };
  const transformClick = (key, event) => {
      const isStaticClick = isStaticExp(key) && key.content.toLowerCase() === 'onclick';
      return isStaticClick
          ? createSimpleExpression(event, true)
          : key.type !== 4 /* SIMPLE_EXPRESSION */
              ? createCompoundExpression([
                  `(`,
                  key,
                  `) === "onClick" ? "${event}" : (`,
                  key,
                  `)`
              ])
              : key;
  };
  const transformOn$1 = (dir, node, context) => {
      return transformOn(dir, node, context, baseResult => {
          const { modifiers } = dir;
          if (!modifiers.length)
              return baseResult;
          let { key, value: handlerExp } = baseResult.props[0];
          const { keyModifiers, nonKeyModifiers, eventOptionModifiers } = resolveModifiers(key, modifiers, context, dir.loc);
          // normalize click.right and click.middle since they don't actually fire
          if (nonKeyModifiers.includes('right')) {
              key = transformClick(key, `onContextmenu`);
          }
          if (nonKeyModifiers.includes('middle')) {
              key = transformClick(key, `onMouseup`);
          }
          if (nonKeyModifiers.length) {
              handlerExp = createCallExpression(context.helper(V_ON_WITH_MODIFIERS), [
                  handlerExp,
                  JSON.stringify(nonKeyModifiers)
              ]);
          }
          if (keyModifiers.length &&
              // if event name is dynamic, always wrap with keys guard
              (!isStaticExp(key) || isKeyboardEvent(key.content))) {
              handlerExp = createCallExpression(context.helper(V_ON_WITH_KEYS), [
                  handlerExp,
                  JSON.stringify(keyModifiers)
              ]);
          }
          if (eventOptionModifiers.length) {
              const modifierPostfix = eventOptionModifiers.map(capitalize).join('');
              key = isStaticExp(key)
                  ? createSimpleExpression(`${key.content}${modifierPostfix}`, true)
                  : createCompoundExpression([`(`, key, `) + "${modifierPostfix}"`]);
          }
          return {
              props: [createObjectProperty(key, handlerExp)]
          };
      });
  };

  const transformShow = (dir, node, context) => {
      const { exp, loc } = dir;
      if (!exp) {
          context.onError(createDOMCompilerError(58 /* X_V_SHOW_NO_EXPRESSION */, loc));
      }
      return {
          props: [],
          needRuntime: context.helper(V_SHOW)
      };
  };

  const warnTransitionChildren = (node, context) => {
      if (node.type === 1 /* ELEMENT */ &&
          node.tagType === 1 /* COMPONENT */) {
          const component = context.isBuiltInComponent(node.tag);
          if (component === TRANSITION$1) {
              return () => {
                  if (node.children.length && hasMultipleChildren(node)) {
                      context.onError(createDOMCompilerError(59 /* X_TRANSITION_INVALID_CHILDREN */, {
                          start: node.children[0].loc.start,
                          end: node.children[node.children.length - 1].loc.end,
                          source: ''
                      }));
                  }
              };
          }
      }
  };
  function hasMultipleChildren(node) {
      // #1352 filter out potential comment nodes.
      const children = (node.children = node.children.filter(c => c.type !== 3 /* COMMENT */ &&
          !(c.type === 2 /* TEXT */ && !c.content.trim())));
      const child = children[0];
      return (children.length !== 1 ||
          child.type === 11 /* FOR */ ||
          (child.type === 9 /* IF */ && child.branches.some(hasMultipleChildren)));
  }

  const ignoreSideEffectTags = (node, context) => {
      if (node.type === 1 /* ELEMENT */ &&
          node.tagType === 0 /* ELEMENT */ &&
          (node.tag === 'script' || node.tag === 'style')) {
          context.onError(createDOMCompilerError(60 /* X_IGNORED_SIDE_EFFECT_TAG */, node.loc));
          context.removeNode();
      }
  };

  const DOMNodeTransforms = [
      transformStyle,
      ...([warnTransitionChildren] )
  ];
  const DOMDirectiveTransforms = {
      cloak: noopDirectiveTransform,
      html: transformVHtml,
      text: transformVText,
      model: transformModel$1,
      on: transformOn$1,
      show: transformShow
  };
  function compile$1(template, options = {}) {
      return baseCompile(template, extend({}, parserOptions, options, {
          nodeTransforms: [
              // ignore <script> and <tag>
              // this is not put inside DOMNodeTransforms because that list is used
              // by compiler-ssr to generate vnode fallback branches
              ignoreSideEffectTags,
              ...DOMNodeTransforms,
              ...(options.nodeTransforms || [])
          ],
          directiveTransforms: extend({}, DOMDirectiveTransforms, options.directiveTransforms || {}),
          transformHoist: null 
      }));
  }

  // This entry is the "full-build" that includes both the runtime
  {
      initDev();
  }
  const compileCache = Object.create(null);
  function compileToFunction(template, options) {
      if (!isString(template)) {
          if (template.nodeType) {
              template = template.innerHTML;
          }
          else {
              warn$1(`invalid template option: `, template);
              return NOOP;
          }
      }
      const key = template;
      const cached = compileCache[key];
      if (cached) {
          return cached;
      }
      if (template[0] === '#') {
          const el = document.querySelector(template);
          if (!el) {
              warn$1(`Template element not found or is empty: ${template}`);
          }
          // __UNSAFE__
          // Reason: potential execution of JS expressions in in-DOM template.
          // The user must make sure the in-DOM template is trusted. If it's rendered
          // by the server, the template should not contain any user data.
          template = el ? el.innerHTML : ``;
      }
      const { code } = compile$1(template, extend({
          hoistStatic: true,
          onError: onError ,
          onWarn: e => onError(e, true) 
      }, options));
      function onError(err, asWarning = false) {
          const message = asWarning
              ? err.message
              : `Template compilation error: ${err.message}`;
          const codeFrame = err.loc &&
              generateCodeFrame(template, err.loc.start.offset, err.loc.end.offset);
          warn$1(codeFrame ? `${message}\n${codeFrame}` : message);
      }
      // The wildcard import results in a huge object with every export
      // with keys that cannot be mangled, and can be quite heavy size-wise.
      // In the global build we know `Vue` is available globally so we can avoid
      // the wildcard object.
      const render = (new Function(code)() );
      render._rc = true;
      return (compileCache[key] = render);
  }
  registerRuntimeCompiler(compileToFunction);

  exports.BaseTransition = BaseTransition;
  exports.Comment = Comment;
  exports.EffectScope = EffectScope;
  exports.Fragment = Fragment;
  exports.KeepAlive = KeepAlive;
  exports.ReactiveEffect = ReactiveEffect;
  exports.Static = Static;
  exports.Suspense = Suspense;
  exports.Teleport = Teleport;
  exports.Text = Text;
  exports.Transition = Transition;
  exports.TransitionGroup = TransitionGroup;
  exports.VueElement = VueElement;
  exports.callWithAsyncErrorHandling = callWithAsyncErrorHandling;
  exports.callWithErrorHandling = callWithErrorHandling;
  exports.camelize = camelize;
  exports.capitalize = capitalize;
  exports.cloneVNode = cloneVNode;
  exports.compatUtils = compatUtils;
  exports.compile = compileToFunction;
  exports.computed = computed;
  exports.createApp = createApp;
  exports.createBlock = createBlock;
  exports.createCommentVNode = createCommentVNode;
  exports.createElementBlock = createElementBlock;
  exports.createElementVNode = createBaseVNode;
  exports.createHydrationRenderer = createHydrationRenderer;
  exports.createPropsRestProxy = createPropsRestProxy;
  exports.createRenderer = createRenderer;
  exports.createSSRApp = createSSRApp;
  exports.createSlots = createSlots;
  exports.createStaticVNode = createStaticVNode;
  exports.createTextVNode = createTextVNode;
  exports.createVNode = createVNode;
  exports.customRef = customRef;
  exports.defineAsyncComponent = defineAsyncComponent;
  exports.defineComponent = defineComponent;
  exports.defineCustomElement = defineCustomElement;
  exports.defineEmits = defineEmits;
  exports.defineExpose = defineExpose;
  exports.defineProps = defineProps;
  exports.defineSSRCustomElement = defineSSRCustomElement;
  exports.effect = effect;
  exports.effectScope = effectScope;
  exports.getCurrentInstance = getCurrentInstance;
  exports.getCurrentScope = getCurrentScope;
  exports.getTransitionRawChildren = getTransitionRawChildren;
  exports.guardReactiveProps = guardReactiveProps;
  exports.h = h;
  exports.handleError = handleError;
  exports.hydrate = hydrate;
  exports.initCustomFormatter = initCustomFormatter;
  exports.initDirectivesForSSR = initDirectivesForSSR;
  exports.inject = inject;
  exports.isMemoSame = isMemoSame;
  exports.isProxy = isProxy;
  exports.isReactive = isReactive;
  exports.isReadonly = isReadonly;
  exports.isRef = isRef;
  exports.isRuntimeOnly = isRuntimeOnly;
  exports.isVNode = isVNode;
  exports.markRaw = markRaw;
  exports.mergeDefaults = mergeDefaults;
  exports.mergeProps = mergeProps;
  exports.nextTick = nextTick;
  exports.normalizeClass = normalizeClass;
  exports.normalizeProps = normalizeProps;
  exports.normalizeStyle = normalizeStyle;
  exports.onActivated = onActivated;
  exports.onBeforeMount = onBeforeMount;
  exports.onBeforeUnmount = onBeforeUnmount;
  exports.onBeforeUpdate = onBeforeUpdate;
  exports.onDeactivated = onDeactivated;
  exports.onErrorCaptured = onErrorCaptured;
  exports.onMounted = onMounted;
  exports.onRenderTracked = onRenderTracked;
  exports.onRenderTriggered = onRenderTriggered;
  exports.onScopeDispose = onScopeDispose;
  exports.onServerPrefetch = onServerPrefetch;
  exports.onUnmounted = onUnmounted;
  exports.onUpdated = onUpdated;
  exports.openBlock = openBlock;
  exports.popScopeId = popScopeId;
  exports.provide = provide;
  exports.proxyRefs = proxyRefs;
  exports.pushScopeId = pushScopeId;
  exports.queuePostFlushCb = queuePostFlushCb;
  exports.reactive = reactive;
  exports.readonly = readonly;
  exports.ref = ref;
  exports.registerRuntimeCompiler = registerRuntimeCompiler;
  exports.render = render;
  exports.renderList = renderList;
  exports.renderSlot = renderSlot;
  exports.resolveComponent = resolveComponent;
  exports.resolveDirective = resolveDirective;
  exports.resolveDynamicComponent = resolveDynamicComponent;
  exports.resolveFilter = resolveFilter;
  exports.resolveTransitionHooks = resolveTransitionHooks;
  exports.setBlockTracking = setBlockTracking;
  exports.setDevtoolsHook = setDevtoolsHook;
  exports.setTransitionHooks = setTransitionHooks;
  exports.shallowReactive = shallowReactive;
  exports.shallowReadonly = shallowReadonly;
  exports.shallowRef = shallowRef;
  exports.ssrContextKey = ssrContextKey;
  exports.ssrUtils = ssrUtils;
  exports.stop = stop;
  exports.toDisplayString = toDisplayString;
  exports.toHandlerKey = toHandlerKey;
  exports.toHandlers = toHandlers;
  exports.toRaw = toRaw;
  exports.toRef = toRef;
  exports.toRefs = toRefs;
  exports.transformVNodeArgs = transformVNodeArgs;
  exports.triggerRef = triggerRef;
  exports.unref = unref;
  exports.useAttrs = useAttrs;
  exports.useCssModule = useCssModule;
  exports.useCssVars = useCssVars;
  exports.useSSRContext = useSSRContext;
  exports.useSlots = useSlots;
  exports.useTransitionState = useTransitionState;
  exports.vModelCheckbox = vModelCheckbox;
  exports.vModelDynamic = vModelDynamic;
  exports.vModelRadio = vModelRadio;
  exports.vModelSelect = vModelSelect;
  exports.vModelText = vModelText;
  exports.vShow = vShow;
  exports.version = version;
  exports.warn = warn$1;
  exports.watch = watch;
  exports.watchEffect = watchEffect;
  exports.watchPostEffect = watchPostEffect;
  exports.watchSyncEffect = watchSyncEffect;
  exports.withAsyncContext = withAsyncContext;
  exports.withCtx = withCtx;
  exports.withDefaults = withDefaults;
  exports.withDirectives = withDirectives;
  exports.withKeys = withKeys;
  exports.withMemo = withMemo;
  exports.withModifiers = withModifiers;
  exports.withScopeId = withScopeId;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?_():(document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,f.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||(0,d.default)("[data-aos]",O),w)};e.exports={init:z,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=window.document,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=new r(o);i=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&i()})}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){};t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});
const Skills ={
	data(){
		return {
			cards: [
				{ title: 'HTML 5', text: 'Стандартизированный язык разметки документов в интернете', src: './img/Technologies/html.svg' },
				{ title: 'CSS 3', text: 'Язык описания внешнего вида документа', src: './img/Technologies/css.svg' },
				{ title: 'Sass', text: 'Один из самых популярных CSS препроцессоров.', src: './img/Technologies/sass.svg' },
				{ title: 'JavaScript ES6+', text: 'Язык программирования высокого уровня, использующийся для придания интерактивности веб- страницам', src: './img/Technologies/javaScript.svg' },
				{ title: 'VueJS', text: 'JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов', src: './img/Technologies/vue.svg' },
				{ title: 'Gulp', text: 'Gulp - это инструмент, который помогает автоматизировать рутинные задачи веб-разработки.', src: './img/Technologies/gulp.svg' },
				{ title: 'Git', text: 'Git это одна из множества разных систем контроля версий (VCS)', src: './img/Technologies/git.svg' },
				{ title: 'PHP7', text: 'Наиболее часто применяемый язык программирования для разработки серверной части веб- сайтов и веб - приложений', src: './img/Technologies/php.svg' },
				{ title: 'Wordpress', text: 'Самая популярная система управления контентом для веб- сайтов', src: './img/Technologies/wordpress.svg' },
				{ title: 'NodeJS', text: 'Программная платформа, позволяющая использовать JavaScript как язык общего назначения вне окна браузера', src: './img/Technologies/nodejs.svg' }
			]
		}
	}
}

const Cards = {
   data(){
		return {
			cards: [
				{ title: 'Лендинг, интернет магазин', text: 'Интернет магазин адаптирован под все виды устройств, от Full HD маниторов до мобильных устройств. Сайт является кросбраузерным с валидным кодом.', href: 'http://j90344fw.beget.tech/OnlineStore/', src: './img/Sites/OnlineStore.webp' },
				{ title: 'Лендинг, сайт финансовых решений', text: 'Данный лендинг адаптирован под все виды устройств, от Full HD маниторов до мобильных устройств. Сайт является кросбраузерным с валидным кодом.', href: 'http://j90344fw.beget.tech/Relvise/', src: './img/Sites/Finance.webp' },
				{ title: 'Лендинг, доставка грузов из китая', text: 'Данный лендинг адаптирован под все виды устройств, от Full HD маниторов до мобильных устройств. Сайт является кросбраузерным с валидным кодом.', href: 'https://privateuser777.github.io/Delivery/', src: './img/Sites/Site01.webp' },
			]
		}
	}
}


Vue.createApp(Skills).mount('#skills');
Vue.createApp(Cards).mount('#cards');

                                                                                                                                                                    


document.addEventListener('DOMContentLoaded', () => {


 //!Меню бургер
// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //
	const headerList = document.querySelector('.header__list');
	const headerItem = document.querySelectorAll('.header__item');
	const headerBurger = document.querySelector('.header__burger');

	headerBurger.addEventListener('click', () => {
		headerBurger.classList.toggle('header__burger_active');
		headerList.classList.toggle('header__list_active');
	});

	headerItem.forEach(item => {
		item.addEventListener('click', () => {
			headerBurger.classList.toggle('header__burger_active');
			headerList.classList.toggle('header__list_active');
		});
	}); 
// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //

  //!Плавный скрол по якорям
// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //
	$("body").on('click', '[href*="#"]', function (e) {
		var fixed_offset = 51;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});
// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //

  //!Анимация меню при скроле
// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //
	window.addEventListener('scroll', () => {
		let scrollDistance = window.scrollY - 650;

		document.querySelectorAll('section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.header__menu').clientHeight <= scrollDistance) {
				document.querySelectorAll('.header__item').forEach((el) => {
					if (el.classList.contains('header__item_active')) {
						el.classList.remove('header__item_active');
					}
				});
				document.querySelectorAll('.header__item')[i].classList.add('header__item_active');
			}
		});
	});
// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //
    

//!Валидация формы и отправка на почту
// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // /
	const form = document.getElementById('form');
	const contacts = document.getElementById('contacts');
	
	//Асинхронная функция для отправки запроса на сервер и получения ответа
	const ajaxSend = async (formData) => {
		const url = '../php/script.php';
		const fetchResp = await fetch(url, {
			method: 'POST',
			body: formData
		});
		console.log(fetchResp.status);
		if (!fetchResp.ok) {
			contacts.classList.remove('contacts_loading');
			throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
		}
		return await fetchResp.text();
	};

	
	form.addEventListener('submit', formSend);

	function formSend(e){
		e.preventDefault();
		let error = formValidate(form);

		if(error === 0){
			contacts.classList.add('contacts_loading');
			const formData = new FormData(this);

			ajaxSend(formData)
			.then((response) => {
				console.log(response);
				form.reset(); // очищаем поля формы 
			})
			.catch((err) => console.error(err))
			contacts.classList.remove('contacts_loading');
		}
	}

	//При попытке отправить форму происходит проверка заполнения полей
	function formValidate(form){
		let error = 0;
		let formReq = document.querySelectorAll('._req');
		formReq.forEach(input => {

			formRemoveError(input);

			if(input.classList.contains('_email')){
				if(emailTest(input)){
					formAddError(input);
					error++;
				}
			} else{
				if(input.value === ""){
					formAddError(input);
					error++;
				}
			}
		});
		return error;
	}

	//Присваивает класс с крассной подсветкой
	function formAddError(input){
		// input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	//Удаляет класс с крассной подсветкой
	function formRemoveError(input){
		// input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	//Проверка на корректный ввод email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //






    AOS.init({
        // Global settings:
        disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 200, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    
    // $('.skills__item').addClass('wow animate__animated animate__bounceInDown');
    // $('.skills__item').attr('data-aos', 'fade-in');

    // $('.advantages__item').addClass('wow animate__animated animate__zoomInUp');
    // $('.advantages__item').attr('data-wow-offset', '200');

    // $('.cards__card').addClass('wow animate__animated animate__flipInY');
    // $('.cards__card').attr('data-wow-offset', '200');

    
    // $(window).scroll(function (event) {
    //     var s = 0 - $(this).scrollTop() / 1.5; 
    //     $('.fullscreen').css('transform', 'translate3d(0, ' + s + 'px, 0)');
    // });



    
});