!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("react-suspense-fetch")):"function"==typeof define&&define.amd?define(["exports","react","react-suspense-fetch"],t):t((e=e||self).reactHooksFetch={},e.react,e.reactSuspenseFetch)}(this,function(e,t,r){var n=function(e){var t,r;function n(){var t;return(t=e.apply(this,arguments)||this).state={error:null},t.retry=function(){t.setState({error:null})},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.getDerivedStateFromError=function(e){return{error:e}},n.prototype.render=function(){var e=this.state.error,t=this.props,r=t.children,n=t.fallback;return e?"function"==typeof n?n(e,this.retry):n:r},n}(t.Component);Object.defineProperty(e,"prefetch",{enumerable:!0,get:function(){return r.prefetch}}),e.ErrorBoundary=n,e.useFetch=function(e){if(e!==t.useRef(e).current)throw new Error("suspendable has to be prefetched outside render");var n=t.useState(e),o=n[1];return{result:n[0],refetch:t.useCallback(function(t){o(r.refetch(e,t))},[e])}},e.useFetchWithoutPrefetch=function(e,n){if(e!==t.useRef(e).current)throw new Error("fetchFunc has to be defined outside render");var o=t.useState(null),u=o[0],c=o[1];return t.useEffect(function(){void 0!==n&&c(r.prefetch(e,n))},[e,n]),{result:u,refetch:t.useCallback(function(t){c(r.prefetch(e,t))},[e])}}});
//# sourceMappingURL=index.umd.js.map