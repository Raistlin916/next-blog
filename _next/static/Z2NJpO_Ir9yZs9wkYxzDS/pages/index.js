(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"9Jkg":function(e,t,r){e.exports=r("oh+g")},HohS:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n},t.setConfig=function(e){n=e}},"PBx+":function(e,t,r){e.exports=r("HohS")},RNiq:function(e,t,r){"use strict";r.r(t);var n=r("9Jkg"),o=r.n(n),a=r("q1tI"),i=r.n(a),f=r("PBx+"),u=r.n(f),l=r("UXZV"),c=r.n(l);function p(){return(p=c.a||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=r("qNsG"),h=r("YFqc"),d=r.n(h),v=u()().publicRuntimeConfig.basePath,m=function(e){var t=e.children,r=e.href,n=Object(s.a)(e,["children","href"]);return i.a.createElement(d.a,p({href:"".concat(v).concat(r)},n),i.a.createElement("a",null,t))};function y(){var e=u()().publicRuntimeConfig;return i.a.createElement("div",null,i.a.createElement("ul",null,e.articles.map(function(e,t){return i.a.createElement("li",{key:t},i.a.createElement(m,{href:e},e))})),"home",o()(u()()))}r.d(t,"default",function(){return y})},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("9Jkg")),a=n(r("iZP3")),i=n(r("/HRN")),f=n(r("WaGi")),u=n(r("ZDA2")),l=n(r("/+P4")),c=n(r("N9n2")),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},s=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var h=r("CxY0"),d=p(r("q1tI")),v=(s(r("17x9")),p(r("20a2"))),m=r("Bu4q");var y=function(e){function t(){var e,r,n,o,f;return(0,i.default)(this,t),(e=(0,u.default)(this,(0,l.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:e&&"object"===(0,a.default)(e)?m.formatWithValidation(e):e,as:t&&"object"===(0,a.default)(t)?m.formatWithValidation(t):t}},n=null,o=null,f=null,function(e,t){if(e===n&&t===o)return f;var a=r(e,t);return n=e,o=t,f=a,a}),e.linkClicked=function(t){var r=t.currentTarget,n=r.nodeName,o=r.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),i=a.href,f=a.as;if(function(e){var t=h.parse(e,!1,!0),r=h.parse(m.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var u=window.location.pathname;i=h.resolve(u,i),f=f?h.resolve(u,f):i,t.preventDefault();var l=e.props.scroll;null==l&&(l=f.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](i,f,{shallow:e.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,c.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=h.resolve(e,t);v.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof t&&(t=d.default.createElement("a",null,t));var a=d.Children.only(t),i={onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||n),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=v.Router._rewriteUrlForNextExport(i.href)),d.default.cloneElement(a,i)}}]),t}(d.Component);t.default=y},"oh+g":function(e,t,r){var n=r("WEpk"),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=r("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);