(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1VtX":function(e,t,n){e.exports={home:"styles-module--home--2iMSL",header:"styles-module--header--7xmbW",collapsedButton:"styles-module--collapsed-button--1bz2Q",buttons:"styles-module--buttons--4wg_N",button:"styles-module--button--25GW4",link:"styles-module--link--I3Vg_"}},"2W6z":function(e,t,n){"use strict";var a=function(){};e.exports=a},Azlu:function(e,t,n){e.exports={headerLg:"text-module--header-lg--1-O_q",headerMd:"text-module--header-md--1zKdh",headerSm:"text-module--header-sm--1F3Xe",headerXs:"text-module--header-xs--2jCmw",bodyText:"text-module--body-text--1G1SB",poetryText:"text-module--poetry-text--1VkHD",captionText:"text-module--caption-text--3bwoB",labelText:"text-module--label-text--1NymC",ingredientListText:"text-module--ingredient-list-text--1FeCv",footnoteText:"text-module--footnote-text--18fDy"}},GCth:function(e,t,n){e.exports={nextButton:"styles-module--next-button--X3t6y",homeButton:"styles-module--home-button--zbCnr",previousButton:"styles-module--previous-button--2v-DQ",navigationButtons:"styles-module--navigation-buttons--ypNJC",navigationButton:"styles-module--navigation-button--yTywb"}},JI6e:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),i=n.n(o),l=n("q1tI"),s=n.n(l),u=n("vUet"),c=["xl","lg","md","sm","xs"],d=s.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,l=e.as,d=void 0===l?"div":l,f=Object(r.a)(e,["bsPrefix","className","as"]),v=Object(u.a)(n,"col"),m=[],p=[];return c.forEach((function(e){var t,n,a,r=f[e];if(delete f[e],"object"==typeof r&&null!=r){var o=r.span;t=void 0===o||o,n=r.offset,a=r.order}else t=r;var i="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+v+i:""+v+i+"-"+t),null!=a&&p.push("order"+i+"-"+a),null!=n&&p.push("offset"+i+"-"+n)})),m.length||m.push(v),s.a.createElement(d,Object(a.a)({},f,{ref:t,className:i.a.apply(void 0,[o].concat(m,p))}))}));d.displayName="Col",t.a=d},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function a(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];var r=null;return t.forEach((function(e){if(null==r){var t=e.apply(void 0,n);null!=t&&(r=t)}})),r}return(0,o.default)(a)};var a,r=n("pvIh"),o=(a=r)&&a.__esModule?a:{default:a};e.exports=t.default},MqbH:function(e,t,n){"use strict";n.d(t,"a",(function(){return Ve}));var a=n("q1tI"),r=n.n(a),o=n("7vrA"),i=n("JI6e"),l=n("qhky"),s=n("Wbzz"),u=n("wx14"),c=n("zLVn"),d=n("TSYQ"),f=n.n(d);n("QLaP");function v(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function m(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function p(e,t){return Object.keys(t).reduce((function(n,r){var o,i=n,l=i[v(r)],s=i[r],d=Object(c.a)(i,[v(r),r].map(m)),f=t[r],p=function(e,t,n){var r=Object(a.useRef)(void 0!==e),o=Object(a.useState)(t),i=o[0],l=o[1],s=void 0!==e,u=r.current;return r.current=s,!s&&u&&i!==t&&l(t),[s?e:i,Object(a.useCallback)((function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];n&&n.apply(void 0,[e].concat(a)),l(e)}),[n])]}(s,l,e[f]),b=p[0],x=p[1];return Object(u.a)({},d,((o={})[r]=b,o[f]=x,o))}),e)}var b=n("dI71");n("94VI");var x=n("YdCC"),h=n("vUet"),E=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,o=e.as,i=Object(c.a)(e,["bsPrefix","className","as"]);n=Object(h.a)(n,"navbar-brand");var l=o||(i.href?"a":"span");return r.a.createElement(l,Object(u.a)({},i,{ref:t,className:f()(a,n)}))}));E.displayName="NavbarBrand";var y=E,g=n("dZvc");function O(e,t){return function(e){var t=Object(g.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var N=/([A-Z])/g;var j=/^ms-/;function C(e){return function(e){return e.replace(N,"-$1").toLowerCase()}(e).replace(j,"-ms-")}var w=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var S=function(e,t){var n="",a="";if("string"==typeof t)return e.style.getPropertyValue(C(t))||O(e).getPropertyValue(C(t));Object.keys(t).forEach((function(r){var o=t[r];o||0===o?!function(e){return!(!e||!w.test(e))}(r)?n+=C(r)+": "+o+";":a+=r+"("+o+") ":e.style.removeProperty(C(r))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n},k=n("SJxq"),P=!1,T=!1;try{var I={get passive(){return P=!0},get once(){return T=P=!0}};k.a&&(window.addEventListener("test",I,I),window.removeEventListener("test",I,!0))}catch(qe){}var R=function(e,t,n,a){if(a&&"boolean"!=typeof a&&!T){var r=a.once,o=a.capture,i=n;!T&&r&&(i=n.__once||function e(a){this.removeEventListener(t,e,o),n.call(this,a)},n.__once=i),e.addEventListener(t,i,P?a:o)}e.addEventListener(t,n,a)};var D=function(e,t,n,a){var r=a&&"boolean"!=typeof a?a.capture:a;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)};var L=function(e,t,n,a){return R(e,t,n,a),function(){D(e,t,n,a)}};function B(e,t,n){void 0===n&&(n=5);var a=!1,r=setTimeout((function(){a||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=L(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(r),o()}}function K(e,t,n,a){var r,o;null==n&&(r=S(e,"transitionDuration")||"",o=-1===r.indexOf("ms")?1e3:1,n=parseFloat(r)*o||0);var i=B(e,n,a),l=L(e,"transitionend",t);return function(){i(),l()}}var M=n("i8i4"),A=n.n(M),_=!1,U=r.a.createContext(null),V=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var r,o=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?o?(r="exited",a.appearStatus="entering"):r="entered":r=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",a.state={status:r},a.nextCallback=null,a}Object(b.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!=typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,r=this.props.nodeRef?[a]:[A.a.findDOMNode(this),a],o=r[0],i=r[1],l=this.getTimeouts(),s=a?l.appear:l.enter;!e&&!n||_?this.safeSetState({status:"entered"},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:"entering"},(function(){t.props.onEntering(o,i),t.onTransitionEnd(s,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:A.a.findDOMNode(this);t&&!_?(this.props.onExit(a),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:A.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=r[0],i=r[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(c.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(U.Provider,{value:null},"function"==typeof n?n(e,a):r.a.cloneElement(r.a.Children.only(n),a))},t}(r.a.Component);function q(){}V.contextType=U,V.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:q,onEntering:q,onEntered:q,onExit:q,onExiting:q,onExited:q},V.UNMOUNTED="unmounted",V.EXITED="exited",V.ENTERING="entering",V.ENTERED="entered",V.EXITING="exiting";var z,X=V,Q=n("Qg85");var Z={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function H(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],a=Z[e];return n+parseInt(S(t,a[0]),10)+parseInt(S(t,a[1]),10)}var G=((z={}).exited="collapse",z.exiting="collapsing",z.entering="collapsing",z.entered="collapse show",z),J={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:H},W=r.a.forwardRef((function(e,t){var n=e.onEnter,o=e.onEntering,i=e.onEntered,l=e.onExit,s=e.onExiting,d=e.className,v=e.children,m=e.dimension,p=void 0===m?"height":m,b=e.getDimensionValue,x=void 0===b?H:b,h=Object(c.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),E="function"==typeof p?p():p,y=Object(a.useMemo)((function(){return Object(Q.a)((function(e){e.style[E]="0"}),n)}),[E,n]),g=Object(a.useMemo)((function(){return Object(Q.a)((function(e){var t="scroll"+E[0].toUpperCase()+E.slice(1);e.style[E]=e[t]+"px"}),o)}),[E,o]),O=Object(a.useMemo)((function(){return Object(Q.a)((function(e){e.style[E]=null}),i)}),[E,i]),N=Object(a.useMemo)((function(){return Object(Q.a)((function(e){e.style[E]=x(E,e)+"px",e.offsetHeight}),l)}),[l,x,E]),j=Object(a.useMemo)((function(){return Object(Q.a)((function(e){e.style[E]=null}),s)}),[E,s]);return r.a.createElement(X,Object(u.a)({ref:t,addEndListener:K},h,{"aria-expanded":h.role?h.in:null,onEnter:y,onEntering:g,onEntered:O,onExit:N,onExiting:j}),(function(e,t){return r.a.cloneElement(v,Object(u.a)({},t,{className:f()(d,v.props.className,G[e],"width"===E&&"width")}))}))}));W.defaultProps=J;var Y=W,F=r.a.createContext(null);F.displayName="NavbarContext";var $=F,ee=r.a.forwardRef((function(e,t){var n=e.children,a=e.bsPrefix,o=Object(c.a)(e,["children","bsPrefix"]);return a=Object(h.a)(a,"navbar-collapse"),r.a.createElement($.Consumer,null,(function(e){return r.a.createElement(Y,Object(u.a)({in:!(!e||!e.expanded)},o),r.a.createElement("div",{ref:t,className:a},n))}))}));ee.displayName="NavbarCollapse";var te=ee;var ne=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t};function ae(e){var t=ne(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var re=r.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.children,l=e.label,s=e.as,d=void 0===s?"button":s,v=e.onClick,m=Object(c.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(h.a)(n,"navbar-toggler");var p=Object(a.useContext)($)||{},b=p.onToggle,x=p.expanded,E=ae((function(e){v&&v(e),b&&b()}));return"button"===d&&(m.type="button"),r.a.createElement(d,Object(u.a)({},m,{ref:t,onClick:E,"aria-label":l,className:f()(o,n,!x&&"collapsed")}),i||r.a.createElement("span",{className:n+"-icon"}))}));re.displayName="NavbarToggle",re.defaultProps={label:"Toggle navigation"};var oe=re,ie=r.a.createContext(null),le=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},se=ie,ue=Object(x.a)("navbar-text",{Component:"span"}),ce=r.a.forwardRef((function(e,t){var n=p(e,{expanded:"onToggle"}),o=n.bsPrefix,i=n.expand,l=n.variant,s=n.bg,d=n.fixed,v=n.sticky,m=n.className,b=n.children,x=n.as,E=void 0===x?"nav":x,y=n.expanded,g=n.onToggle,O=n.onSelect,N=n.collapseOnSelect,j=Object(c.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),C=Object(h.a)(o,"navbar"),w=Object(a.useCallback)((function(){O&&O.apply(void 0,arguments),N&&y&&g&&g(!1)}),[O,N,y,g]);void 0===j.role&&"nav"!==E&&(j.role="navigation");var S=C+"-expand";"string"==typeof i&&(S=S+"-"+i);var k=Object(a.useMemo)((function(){return{onToggle:function(){return g&&g(!y)},bsPrefix:C,expanded:!!y}}),[C,y,g]);return r.a.createElement($.Provider,{value:k},r.a.createElement(se.Provider,{value:w},r.a.createElement(E,Object(u.a)({ref:t},j,{className:f()(m,C,i&&S,l&&C+"-"+l,s&&"bg-"+s,v&&"sticky-"+v,d&&"fixed-"+d)}),b)))}));ce.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},ce.displayName="Navbar",ce.Brand=y,ce.Toggle=oe,ce.Collapse=te,ce.Text=ue;var de=ce,fe=(n("K9S6"),r.a.createContext(null));fe.displayName="CardContext";var ve=fe,me=Function.prototype.bind.call(Function.prototype.call,[].slice);var pe=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var be=function(e,t){return Object(a.useMemo)((function(){return function(e,t){var n=pe(e),a=pe(t);return function(e){n&&n(e),a&&a(e)}}(e,t)}),[e,t])},xe=r.a.createContext(null);xe.displayName="NavContext";var he=xe,Ee=r.a.createContext(null),ye=function(){},ge=r.a.forwardRef((function(e,t){var n,o,i=e.as,l=void 0===i?"ul":i,s=e.onSelect,d=e.activeKey,f=e.role,v=e.onKeyDown,m=Object(c.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),p=Object(a.useReducer)((function(e){return!e}),!1)[1],b=Object(a.useRef)(!1),x=Object(a.useContext)(se),h=Object(a.useContext)(Ee);h&&(f=f||"tablist",d=h.activeKey,n=h.getControlledId,o=h.getControllerId);var E=Object(a.useRef)(null),y=function(e){var t=E.current;if(!t)return null;var n,a=(n="[data-rb-event-key]:not(.disabled)",me(t.querySelectorAll(n))),r=t.querySelector(".active");if(!r)return null;var o=a.indexOf(r);if(-1===o)return null;var i=o+e;return i>=a.length&&(i=0),i<0&&(i=a.length-1),a[i]},g=function(e,t){null!=e&&(s&&s(e,t),x&&x(e,t))};Object(a.useEffect)((function(){if(E.current&&b.current){var e=E.current.querySelector("[data-rb-event-key].active");e&&e.focus()}b.current=!1}));var O=be(t,E);return r.a.createElement(se.Provider,{value:g},r.a.createElement(he.Provider,{value:{role:f,activeKey:le(d),getControlledId:n||ye,getControllerId:o||ye}},r.a.createElement(l,Object(u.a)({},m,{onKeyDown:function(e){var t;switch(v&&v(e),e.key){case"ArrowLeft":case"ArrowUp":t=y(-1);break;case"ArrowRight":case"ArrowDown":t=y(1);break;default:return}t&&(e.preventDefault(),g(t.dataset.rbEventKey,e),b.current=!0,p())},ref:O,role:f}))))})),Oe=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,o=e.children,i=e.as,l=void 0===i?"div":i,s=Object(c.a)(e,["bsPrefix","className","children","as"]);return n=Object(h.a)(n,"nav-item"),r.a.createElement(l,Object(u.a)({},s,{ref:t,className:f()(a,n)}),o)}));Oe.displayName="NavItem";var Ne=Oe,je=n("dbZe"),Ce=(n("2W6z"),r.a.forwardRef((function(e,t){var n=e.active,o=e.className,i=e.eventKey,l=e.onSelect,s=e.onClick,d=e.as,v=Object(c.a)(e,["active","className","eventKey","onSelect","onClick","as"]),m=le(i,v.href),p=Object(a.useContext)(se),b=Object(a.useContext)(he),x=n;if(b){v.role||"tablist"!==b.role||(v.role="tab");var h=b.getControllerId(m),E=b.getControlledId(m);v["data-rb-event-key"]=m,v.id=h||v.id,v["aria-controls"]=E||v["aria-controls"],x=null==n&&null!=m?b.activeKey===m:n}"tab"===v.role&&(v.tabIndex=x?v.tabIndex:-1,v["aria-selected"]=x);var y=ae((function(e){s&&s(e),null!=m&&(l&&l(m,e),p&&p(m,e))}));return r.a.createElement(d,Object(u.a)({},v,{ref:t,onClick:y,className:f()(o,x&&"active")}))})));Ce.defaultProps={disabled:!1};var we=Ce,Se={disabled:!1,as:je.a},ke=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.disabled,o=e.className,i=e.href,l=e.eventKey,s=e.onSelect,d=e.as,v=Object(c.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(h.a)(n,"nav-link"),r.a.createElement(we,Object(u.a)({},v,{href:i,ref:t,eventKey:l,as:d,disabled:a,onSelect:s,className:f()(o,n,a&&"disabled")}))}));ke.displayName="NavLink",ke.defaultProps=Se;var Pe=ke,Te=r.a.forwardRef((function(e,t){var n,o,i,l=p(e,{activeKey:"onSelect"}),s=l.as,d=void 0===s?"div":s,v=l.bsPrefix,m=l.variant,b=l.fill,x=l.justify,E=l.navbar,y=l.className,g=l.children,O=l.activeKey,N=Object(c.a)(l,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),j=Object(h.a)(v,"nav"),C=!1,w=Object(a.useContext)($),S=Object(a.useContext)(ve);return w?(o=w.bsPrefix,C=null==E||E):S&&(i=S.cardHeaderBsPrefix),r.a.createElement(ge,Object(u.a)({as:d,ref:t,activeKey:O,className:f()(y,(n={},n[j]=!C,n[o+"-nav"]=C,n[i+"-"+m]=!!i,n[j+"-"+m]=!!m,n[j+"-fill"]=b,n[j+"-justified"]=x,n))},N),g)}));Te.displayName="Nav",Te.defaultProps={justify:!1,fill:!1},Te.Item=Ne,Te.Link=Pe;var Ie=Te,Re=n("1VtX"),De=n.n(Re);function Le(){return r.a.createElement(de,{expand:"sm",className:De.a.header},r.a.createElement(de.Brand,null,r.a.createElement(s.a,{className:De.a.home,to:"/"},"BD")),r.a.createElement(de.Toggle,{"aria-controls":"basic-navbar-nav",className:De.a.collapsedButton},r.a.createElement("img",{src:"icon.png",width:"30",height:"30",alt:"Home"})),r.a.createElement(de.Collapse,{id:"basic-navbar-nav",className:De.a.buttons},r.a.createElement(Ie,{className:"ml-auto"},r.a.createElement(Ie.Item,{className:De.a.button},r.a.createElement(s.a,{className:De.a.link,to:"/about"},"About")),r.a.createElement(Ie.Item,{className:De.a.button},r.a.createElement(s.a,{className:De.a.link,to:"/contact"},"Contact")))))}var Be=n("3Z9Z"),Ke=n("GCth"),Me=n.n(Ke);function Ae(e){var t=e.next,n=e.previous,a=e.home;return r.a.createElement(Be.a,{className:Me.a.navigationButtons},r.a.createElement(i.a,{xs:"4",className:Me.a.previousButton},null==n?null:r.a.createElement(s.a,{className:Me.a.navigationButton,to:n},"Previous Post")),r.a.createElement(i.a,{xs:"4",className:Me.a.homeButton},null==a?null:r.a.createElement(s.a,{className:Me.a.navigationButton,to:a},r.a.createElement("img",{src:"icon.png",width:"30",height:"30",alt:"Home"}))),r.a.createElement(i.a,{xs:"4",className:Me.a.nextButton},null==t?null:r.a.createElement(s.a,{className:Me.a.navigationButton,to:t},"Next Post")))}var _e=n("so4j"),Ue=n.n(_e);function Ve(e){var t=e.title,n=e.children,a=e.nextPost,s=e.previousPost,u=e.volume;return r.a.createElement(o.a,{fluid:!0,className:Ue.a.container},r.a.createElement(l.a,null,r.a.createElement("title",null,t)),r.a.createElement(Le,null),r.a.createElement(i.a,{className:Ue.a.layout,lg:{span:6,offset:3},md:{span:8,offset:2}},r.a.createElement("div",{className:Ue.a.page},n),r.a.createElement(Ae,{next:a,previous:s,home:u})),r.a.createElement("div",{className:Ue.a.footer},"© 2020 Bian Dang Magazine"))}},Qg85:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}}),null)}},SJxq:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},YdCC:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),i=n.n(o),l=/-(.)/g;var s=n("q1tI"),u=n.n(s),c=n("vUet"),d=function(e){return e[0].toUpperCase()+(t=e,t.replace(l,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function f(e,t){var n=void 0===t?{}:t,o=n.displayName,l=void 0===o?d(e):o,s=n.Component,f=n.defaultProps,v=u.a.forwardRef((function(t,n){var o=t.className,l=t.bsPrefix,d=t.as,f=void 0===d?s||"div":d,v=Object(r.a)(t,["className","bsPrefix","as"]),m=Object(c.a)(l,e);return u.a.createElement(f,Object(a.a)({ref:n,className:i()(o,m)},v))}));return v.defaultProps=f,v.displayName=l,v}},dZvc:function(e,t,n){"use strict";function a(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return a}))},dbZe:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),i=n.n(o),l=n("Qg85");function s(e){return!e||"#"===e.trim()}var u=i.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"a":n,u=e.disabled,c=e.onKeyDown,d=Object(r.a)(e,["as","disabled","onKeyDown"]),f=function(e){var t=d.href,n=d.onClick;(u||s(t))&&e.preventDefault(),u?e.stopPropagation():n&&n(e)};return s(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),u&&(d.tabIndex=-1,d["aria-disabled"]=!0),i.a.createElement(o,Object(a.a)({ref:t},d,{onClick:f,onKeyDown:Object(l.a)((function(e){" "===e.key&&(e.preventDefault(),f(e))}),c)}))}));u.displayName="SafeAnchor",t.a=u},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,a,r,o,i){var l=r||"<<anonymous>>",s=i||a;if(null==n[a])return t?new Error("Required "+o+" `"+s+"` was not specified in `"+l+"`."):null;for(var u=arguments.length,c=Array(u>6?u-6:0),d=6;d<u;d++)c[d-6]=arguments[d];return e.apply(void 0,[n,a,l,o,s].concat(c))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},so4j:function(e,t,n){e.exports={container:"styles-module--container--3UmgE",page:"styles-module--page--32fnf",layout:"styles-module--layout--3uU9X",nextButton:"styles-module--next-button--2sEZU",previousButton:"styles-module--previous-button--2WaHe",navigationButtons:"styles-module--navigation-buttons--3yGld",footer:"styles-module--footer--2tmi5"}}}]);
//# sourceMappingURL=6f1712258eaa5f735167735747d00174bfb6c8f8-1b646fabd153c2b0456a.js.map