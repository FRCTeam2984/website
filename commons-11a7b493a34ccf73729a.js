(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+e4l":function(t,e,n){"use strict";n("q1tI");var r=n("qKvR");e.a=function(t){var e=t.children;return Object(r.c)("div",{style:{paddingLeft:10,paddingRight:10,marginLeft:"auto",marginRight:"auto",width:"90%",maxWidth:1200}},e)}},"70P5":function(t,e,n){"use strict";n("q1tI");var r=n("Lnxd"),i=n("qKvR");e.a=function(t){var e=t.children,n=t.color,o=t.size,a=t.margin;return Object(i.c)("div",{style:{display:"inline-block",margin:a,color:n}},Object(i.c)(r.b.Provider,{value:{size:o}},e))}},"8+s/":function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var i=n("q1tI"),o=r(i),a=r(n("Gytx"));function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function T(){u=t(l.map((function(t){return t.props}))),d.canUseDOM?e(u):n&&(u=n(u))}var d=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,l=[],t};var c=i.prototype;return c.shouldComponentUpdate=function(t){return!a(t,this.props)},c.componentWillMount=function(){l.push(this),T()},c.componentDidUpdate=function(){T()},c.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),T()},c.render=function(){return o.createElement(r,this.props)},i}(i.Component);return c(d,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),c(d,"canUseDOM",s),d}}},B1WW:function(t,e,n){"use strict";n("q1tI");var r=n("C75p"),i=n("+e4l"),o=n("hReA"),a=n("qKvR"),c=function(t){var e=t.children,n=t.href;return Object(a.c)(o.a,null,Object(a.c)("a",{href:n},e))},s=n("Lnxd"),u=function(t){var e=t.children,n=t.href,r=t.size,i=t.marginRight;return Object(a.c)("div",{style:{display:"inline-block",marginRight:i}},Object(a.c)(c,{href:n},Object(a.c)(s.b.Provider,{value:{size:r}},e)))},l=n("ma3e"),T=n("XFNW");var d={name:"493ori",styles:"margin-top:25px;"};e.a=function(){return Object(a.c)("footer",{style:{backgroundColor:r.a.lightlightgray,border:"1px solid "+r.a.lightgray,borderTopStyle:"solid",borderRightStyle:"none",borderBottomStyle:"none",borderLeftStyle:"none",marginBottom:"0",minHeight:"200px"}},Object(a.c)(i.a,null,Object(a.c)("div",{className:"row",css:d},Object(a.c)("div",{className:"col-12 col-md-4"},Object(a.c)("h3",{style:{marginBottom:"20px",marginTop:"25px"}},"Contact Us"),Object(a.c)("div",{style:{marginBottom:"3px"}},"750 Nautilus St., La Jolla, CA 92037"),Object(a.c)("div",null,Object(a.c)(c,{href:"mailto:ljhsvikingrobotics@gmail.com"},"ljhsvikingrobotics@gmail.com"))),Object(a.c)("div",{className:"col-12 col-sm-6 col-md-4"},Object(a.c)("h3",{style:{marginBottom:"20px",marginTop:"25px"}},"Join Us"),Object(a.c)("div",null,Object(a.c)(u,{href:"https://github.com/FRCTeam2984",size:"32px",marginRight:"10px"},Object(a.c)(l.d,null)),Object(a.c)(u,{href:"https://discordapp.com/invite/RshDdxa",size:"32px"},Object(a.c)(l.c,null)))),Object(a.c)("div",{className:"col-12 col-sm-6 col-md-4"},Object(a.c)("h3",{style:{marginBottom:"20px",marginTop:"25px"}},"Support Us"),Object(a.c)("div",null,Object(a.c)(c,{href:"https://www.foundationofljhs.com/donate-to-academics.html#roboticsteam"},Object(a.c)(T.a,null,"Donate"))))),Object(a.c)("div",{style:{marginTop:"25px",paddingBottom:"20px",textAlign:"center"}},"© ",(new Date).getFullYear()," Vikings Robotics")))}},C75p:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={red:"#f51515",darkred:"#c41414",black:"#000000",lightgray:"#dddddd",lightlightgray:"#fafafa"}},Gytx:function(t,e){t.exports=function(t,e,n,r){var i=n?n.call(r,t,e):void 0;if(void 0!==i)return!!i;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var o=Object.keys(t),a=Object.keys(e);if(o.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(e),s=0;s<o.length;s++){var u=o[s];if(!c(u))return!1;var l=t[u],T=e[u];if(!1===(i=n?n.call(r,l,T,u):void 0)||void 0===i&&l!==T)return!1}return!0}},Lnxd:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return o}));var r=n("q1tI"),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},c=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n};function s(t){return function(e){return r.createElement(u,a({attr:a({},t.attr)},e),function t(e){return e&&e.map((function(e,n){return r.createElement(e.tag,a({key:n},e.attr),t(e.child))}))}(t.child))}}function u(t){var e=function(e){var n,i=t.size||e.size||"1em";e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className);var o=t.attr,s=t.title,u=c(t,["attr","title"]);return r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,u,{className:n,style:a({color:t.color||e.color},e.style,t.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),t.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(t){return e(t)})):e(i)}},TJpk:function(t,e,n){e.__esModule=!0,e.Helmet=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=T(n("q1tI")),a=T(n("17x9")),c=T(n("8+s/")),s=T(n("bmMU")),u=n("v1p5"),l=n("hFT/");function T(t){return t&&t.__esModule?t:{default:t}}function d(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var E,m,y,h=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),A=(E=h,y=m=function(t){function e(){return f(this,e),p(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,s.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case l.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,i=t.arrayTypeChildren,o=t.newChildProps,a=t.nestedChildren;return r({},i,((e={})[n.type]=[].concat(i[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,i=t.child,o=t.newProps,a=t.newChildProps,c=t.nestedChildren;switch(i.type){case l.TAG_NAMES.TITLE:return r({},o,((e={})[i.type]=c,e.titleAttributes=r({},a),e));case l.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},a)});case l.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},a)})}return r({},o,((n={})[i.type]=r({},a),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=r({},e);return Object.keys(t).forEach((function(e){var i;n=r({},n,((i={})[e]=t[e],i))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return o.default.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,o=i.children,a=d(i,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(t,o),t.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=d(t,["children"]),i=r({},n);return e&&(i=this.mapChildrenToProps(e,i)),o.default.createElement(E,i)},i(e,null,[{key:"canUseDOM",set:function(t){E.canUseDOM=t}}]),e}(o.default.Component),m.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=E.peek,m.rewind=function(){var t=E.rewind();return t||(t=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},y);A.renderStatic=A.rewind,e.Helmet=A,e.default=A},XFNW:function(t,e,n){"use strict";n("q1tI");var r=n("qKvR");e.a=function(t){var e=t.children,n=t.display,i=t.margin;return Object(r.c)("div",{style:{width:"fit-content",padding:"0.25em 0.5em",borderWidth:"1px",borderStyle:"solid",display:n||"inline-block",margin:i||"0"}},e)}},bmMU:function(t,e,n){"use strict";var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var c,s,u,l=r(e),T=r(n);if(l&&T){if((s=e.length)!=n.length)return!1;for(c=s;0!=c--;)if(!t(e[c],n[c]))return!1;return!0}if(l!=T)return!1;var d=e instanceof Date,f=n instanceof Date;if(d!=f)return!1;if(d&&f)return e.getTime()==n.getTime();var p=e instanceof RegExp,E=n instanceof RegExp;if(p!=E)return!1;if(p&&E)return e.toString()==n.toString();var m=i(e);if((s=m.length)!==i(n).length)return!1;for(c=s;0!=c--;)if(!o.call(n,m[c]))return!1;if(a&&e instanceof Element&&n instanceof Element)return e===n;for(c=s;0!=c--;)if(!("_owner"===(u=m[c])&&e.$$typeof||t(e[u],n[u])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(t,e){e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(e.VALID_TAG_NAMES=Object.keys(n).map((function(t){return n[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(r).reduce((function(t,e){return t[r[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},hReA:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a}));var r=n("qKvR"),i=(n("q1tI"),n("C75p")),o=function(t){var e=t.children;return Object(r.c)("span",{css:Object(r.b)({color:i.a.black,transition:"color 0.2s ease-out",":hover":{color:i.a.red,cursor:"pointer"}},"")},e)},a=function(t){var e=t.children;return Object(r.c)("span",{css:Object(r.b)({color:i.a.red,transition:"color 0.1s ease-out",":hover":{color:i.a.darkred,cursor:"pointer",textDecoration:"underline"}},"")},e)}},"ho+6":function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n("dI71"),i=n("q1tI"),o=n.n(i),a=n("Wbzz"),c=n("+e4l"),s=n("zoAU"),u=n.n(s),l=n("qKvR"),T=n("C75p");var d={name:"14bq0p7",styles:"@media (max-width:992px){height:auto;border-top:1px solid #e5e5e5;margin-left:0px;}"},f={name:"8ww0vd",styles:"padding-top:20px;padding-bottom:auto;font-weight:500;font-size:15pt;@media (max-width:992px){margin-bottom:20px;}"},p=function(t){var e=t.children,n=t.to;return Object(l.c)(a.Link,{to:n,activeStyle:{color:T.a.red},activeClassName:"active",css:Object(l.b)([{color:T.a.black,transition:"color 0.2s ease-out",height:"57px",verticalAlign:"middle",display:"inline-block",marginLeft:"30px",":hover":{color:T.a.red}},d],""),partiallyActive:!0},Object(l.c)("h2",{css:f},e))},E=n("70P5"),m=n("NIcq");var y={name:"5w3tr0",styles:".active{display:flex !important;@media (max-width:992px){max-height:360px !important;}}.collapsible-navbar-content{@media (max-width:992px){max-height:0;}transition:max-height 0.2s ease-out;}"},h={name:"5au2vg",styles:"display:flex;flex-direction:row;justify-content:space-between;align-items:stretch;@media (min-width:993px){height:60px;flex-direction:row;}@media (max-width:992px){flex-direction:column;}"},A={name:"1n9z3yx",styles:"margin-left:10px;font-size:26pt;@media (max-width:475px){display:none;}"},M={name:"1vioax8",styles:"padding-top:8px;display:flex;text-align:right;color:#666666;transition:color 0.2s ease-in-out;@media (max-width:992px){display:block;}@media (min-width:993px){display:none;}:hover{cursor:pointer;color:#222222;}"},b={name:"73w51c",styles:"display:flex;align-items:stretch;justify-content:flex-end;overflow:hidden;@media (max-width:992px){flex-direction:column;}@media (min-width:993px){flex-direction:row;}"},g=function(t){function e(e){var n;return(n=t.call(this,e)||this).toggleNavbar=function(t){var e="active"===n.state.active?"":"active";n.setState({active:e})},n.mobileCollapse=function(t){"active"===n.state.active&&n.setState({active:""})},n.state={active:""},n}return Object(r.a)(e,t),e.prototype.render=function(){return Object(l.c)("header",{style:{backgroundColor:T.a.lightlightgray,borderBottom:"1px solid "+T.a.lightgray,position:"fixed",zIndex:100,width:"100%",top:0,left:0}},Object(l.c)(c.a,null,Object(l.c)(l.a,{styles:y}),Object(l.c)("div",{css:h},Object(l.c)("div",{className:"row align-items-center justify-content-between"},Object(l.c)("div",{className:"col-auto"},Object(l.c)("h1",{style:{marginBottom:"auto",marginTop:"auto"}},Object(l.c)(a.Link,{to:"/",style:{display:"flex",height:"100%",alignItems:"center"},onClick:this.mobileCollapse},Object(l.c)("img",{src:u.a,height:"40",alt:"logo",style:{margin:"auto"}}),Object(l.c)("span",{css:A},"Vikings Robotics")))),Object(l.c)("div",{className:"col navbar-toggle",onClick:this.toggleNavbar,css:M},Object(l.c)(E.a,{size:"48px"},Object(l.c)(m.a,null)))),Object(l.c)("nav",{className:this.state.active+" collapsible-navbar-content",css:b,onClick:this.mobileCollapse},Object(l.c)(p,{to:"/join"},"Join"),Object(l.c)(p,{to:"/sponsors"},"Sponsors"),Object(l.c)(p,{to:"/community"},"Outreach"),Object(l.c)(p,{to:"/resources"},"Resources"),Object(l.c)(p,{to:"/calendar"},"Calendar")))))},e}(o.a.Component)},v1p5:function(t,e,n){(function(t){e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=s(n("q1tI")),a=s(n("YVoz")),c=n("hFT/");function s(t){return t&&t.__esModule?t:{default:t}}var u,l=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(t){var e=m(t,c.TAG_NAMES.TITLE),n=m(t,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,(function(){return e}));var r=m(t,c.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},d=function(t){return m(t,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return i({},t,e)}),{})},p=function(t,e){return e.filter((function(t){return void 0!==t[c.TAG_NAMES.BASE]})).map((function(t){return t[c.TAG_NAMES.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},E=function(t,e,n){var i={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&b("Helmet: "+t+' should be of type "Array". Instead found type "'+r(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var r={};n.filter((function(t){for(var n=void 0,o=Object.keys(t),a=0;a<o.length;a++){var s=o[a],u=s.toLowerCase();-1===e.indexOf(u)||n===c.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return i[n]||(i[n]={}),r[n]||(r[n]={}),!i[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(r),s=0;s<o.length;s++){var u=o[s],l=(0,a.default)({},i[u],r[u]);i[u]=l}return t}),[]).reverse()},m=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},y=(u=Date.now(),function(t){var e=Date.now();e-u>16?(u=e,t(e)):setTimeout((function(){y(t)}),0)}),h=function(t){return clearTimeout(t)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:t.requestAnimationFrame||y,M="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:t.cancelAnimationFrame||h,b=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},g=null,v=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,s=t.noscriptTags,u=t.onChangeClientState,l=t.scriptTags,T=t.styleTags,d=t.title,f=t.titleAttributes;O(c.TAG_NAMES.BODY,r),O(c.TAG_NAMES.HTML,i),w(d,f);var p={baseTag:S(c.TAG_NAMES.BASE,n),linkTags:S(c.TAG_NAMES.LINK,o),metaTags:S(c.TAG_NAMES.META,a),noscriptTags:S(c.TAG_NAMES.NOSCRIPT,s),scriptTags:S(c.TAG_NAMES.SCRIPT,l),styleTags:S(c.TAG_NAMES.STYLE,T)},E={},m={};Object.keys(p).forEach((function(t){var e=p[t],n=e.newTags,r=e.oldTags;n.length&&(E[t]=n),r.length&&(m[t]=p[t].oldTags)})),e&&e(),u(t,E,m)},L=function(t){return Array.isArray(t)?t.join(""):t},w=function(t,e){void 0!==t&&document.title!==t&&(document.title=L(t)),O(c.TAG_NAMES.TITLE,e)},O=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(e),s=0;s<a.length;s++){var u=a[s],l=e[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===i.indexOf(u)&&i.push(u);var T=o.indexOf(u);-1!==T&&o.splice(T,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);i.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},S=function(t,e){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+c.HELMET_ATTRIBUTE+"]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var s=void 0===e[r]?"":e[r];n.setAttribute(r,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),i.some((function(t,e){return a=e,n.isEqualNode(t)}))?i.splice(a,1):o.push(n)})),i.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return n.appendChild(t)})),{oldTags:i,newTags:o}},j=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},N=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.REACT_TAG_MAP[n]||n]=t[n],e}),e)},C=function(t,e,n){switch(t){case c.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[c.HELMET_ATTRIBUTE]=!0,i=N(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,i,t)];var t,n,r,i},toString:function(){return function(t,e,n,r){var i=j(n),o=L(e);return i?"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+i+">"+l(o,r)+"</"+t+">":"<"+t+" "+c.HELMET_ATTRIBUTE+'="true">'+l(o,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return N(e)},toString:function(){return j(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,i=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach((function(t){var n=c.REACT_TAG_MAP[t]||t;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),o.default.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var i=Object.keys(r).filter((function(t){return!(t===c.TAG_PROPERTIES.INNER_HTML||t===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var i=void 0===r[e]?e:e+'="'+l(r[e],n)+'"';return t?t+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+i+(a?"/>":">"+o+"</"+t+">")}),"")}(t,e,n)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.HTML_TAG_MAP[n]||n]=t[n],e}),e)},e.handleClientStateChange=function(t){g&&M(g),t.defer?g=A((function(){v(t,(function(){g=null}))})):(v(t),g=null)},e.mapStateOnServer=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,s=t.noscriptTags,u=t.scriptTags,l=t.styleTags,T=t.title,d=void 0===T?"":T,f=t.titleAttributes;return{base:C(c.TAG_NAMES.BASE,e,r),bodyAttributes:C(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(c.ATTRIBUTE_NAMES.HTML,i,r),link:C(c.TAG_NAMES.LINK,o,r),meta:C(c.TAG_NAMES.META,a,r),noscript:C(c.TAG_NAMES.NOSCRIPT,s,r),script:C(c.TAG_NAMES.SCRIPT,u,r),style:C(c.TAG_NAMES.STYLE,l,r),title:C(c.TAG_NAMES.TITLE,{title:d,titleAttributes:f},r)}},e.reducePropsToState=function(t){return{baseTag:p([c.TAG_PROPERTIES.HREF],t),bodyAttributes:f(c.ATTRIBUTE_NAMES.BODY,t),defer:m(t,c.HELMET_PROPS.DEFER),encode:m(t,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(c.ATTRIBUTE_NAMES.HTML,t),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],t),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:d(t),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],t),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],t),title:T(t),titleAttributes:f(c.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=A,e.warn=b}).call(this,n("yLpj"))},vrFN:function(t,e,n){"use strict";n("q1tI");var r=n("TJpk"),i=n.n(r),o=n("Wbzz"),a=n("qKvR");function c(t){var e=t.description,n=t.lang,r=t.meta,c=t.title,s=Object(o.useStaticQuery)("3000541721").site,u=e||s.siteMetadata.description;return Object(a.c)(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n},zoAU:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NzQuNjYgNjc0Ljc2Ij48dGl0bGU+dmlraW5nczwvdGl0bGU+PHBhdGggZD0iTTg0NS41MywzODAuOTJsLTg2LjM4LTg2LjM4YTEzLjkxLDEzLjkxLDAsMCwwLTE5LjY4LDBMNTY4LjY4LDQ2NS4zMywzOTYuODIsMjkzLjQ2YTEyLjQsMTIuNCwwLDAsMC0xNy41MywwbC04Ny40Niw4Ny40NmExMy45MiwxMy45MiwwLDAsMCwwLDE5LjY5TDQ2Mi42MSw1NzEuMzloMEw1NjguNjcsNjc3LjQ3aDBMNjc0Ljc2LDU3MS40aDBMODQ1LjUzLDQwMC42MUExMy45MiwxMy45MiwwLDAsMCw4NDUuNTMsMzgwLjkyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzMS4zNCAtMjQxLjkpIiBzdHlsZT0iZmlsbDojZmYxNDE0Ii8+PHBhdGggZD0iTTgwNy4yLDM0MC44IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMxLjM0IC0yNDEuOSkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTAiLz48cGF0aCBkPSJNNjQzLjY3LDMxOS4zN3YtNjVhMTIuNDQsMTIuNDQsMCwwLDAtMTIuNDUtMTIuNDRINTA2LjEyYTEyLjQ0LDEyLjQ0LDAsMCwwLTEyLjQ1LDEyLjQ0djY1LjE3bDc0LjkzLDc0LjkzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzMS4zNCAtMjQxLjkpIi8+PHBhdGggZD0iTTg5My42LDUwNC4zMkg4MTcuOEExMi4zNiwxMi4zNiwwLDAsMCw4MDksNTA4TDU5NS4xOCw3MjEuODFoMEw1NjguNyw3NDguMjksMzI4LjM4LDUwOGExMi40MywxMi40MywwLDAsMC04Ljc3LTMuNjNIMjQzLjc0YTEyLjQsMTIuNCwwLDAsMC0xMi40LDEyLjRWNjQxLjk0YTEyLjQsMTIuNCwwLDAsMCwxMi40LDEyLjM5aDgzLjg1QTEyLjM5LDEyLjM5LDAsMCwxLDMzOSw2NjJsOC44OCwyMS40M2ExMi4zOCwxMi4zOCwwLDAsMS0yLjY5LDEzLjUxbC01OS42OCw1OS42OGExMi40MSwxMi40MSwwLDAsMCwwLDE3LjU0bDg4LjUzLDg4LjUzYTEyLjQxLDEyLjQxLDAsMCwwLDE3LjU0LDBsNTkuNDUtNTkuNDVhMTIuMzksMTIuMzksMCwwLDEsMTMuNTEtMi42OUw0ODYsODA5LjQyYTEyLjQsMTIuNCwwLDAsMSw3LjY1LDExLjQ2djgzLjM4YTEyLjQsMTIuNCwwLDAsMCwxMi40LDEyLjRoMTI1LjJhMTIuNCwxMi40LDAsMCwwLDEyLjQtMTIuNFY4MjAuODNhMTIuNCwxMi40LDAsMCwxLDcuNjUtMTEuNDVsMjIuMS05LjE1YTEyLjM5LDEyLjM5LDAsMCwxLDEzLjUxLDIuNjlsNTkuNzYsNTkuNzZhMTIuNCwxMi40LDAsMCwwLDE3LjUzLDBsODguNTQtODguNTNhMTIuNDEsMTIuNDEsMCwwLDAsMC0xNy41NGwtNjAuMzMtNjAuMzJhMTIuMzksMTIuMzksMCwwLDEtMi42OS0xMy41MWw4LjYyLTIwLjhhMTIuMzksMTIuMzksMCwwLDEsMTEuNDUtNy42Nkg4OTMuNkExMi40LDEyLjQsMCwwLDAsOTA2LDY0MS45NFY1MTYuNzJBMTIuNCwxMi40LDAsMCwwLDg5My42LDUwNC4zMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMzEuMzQgLTI0MS45KSIvPjwvc3ZnPg=="}}]);
//# sourceMappingURL=commons-11a7b493a34ccf73729a.js.map