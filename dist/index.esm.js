import{Component as r,useState as t,useEffect as n,useCallback as e}from"react";import{prefetch as o}from"react-suspense-fetch";var u=function(r){var t,n;function e(){var t;return(t=r.apply(this,arguments)||this).state={error:null},t.retry=function(){t.setState({error:null})},t}return n=r,(t=e).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,e.getDerivedStateFromError=function(r){return{error:r}},e.prototype.render=function(){var r=this.state.error,t=this.props,n=t.children,e=t.fallback;return r?"function"==typeof e?e(r,this.retry):e:n},e}(r),c=function(r,u){var c=o(r,u);return function(){var u=t((function(){return function(r,t){if(!r)throw new Error("unexpected null in useFetch")}(null!==c),c})),i=u[0],f=u[1];return n((function(){c=null}),[]),{result:i,refetch:e((function(t){f(o(r,t))}),[])}}},i=function(r){return function(u){var c=t(null),i=c[0],f=c[1];return n((function(){void 0!==u&&f(o(r,u))}),[u]),{result:i,refetch:e((function(t){f(o(r,t))}),[])}}};export{u as ErrorBoundary,c as createUseFetch,i as createUseFetchWithoutPrefetch};
//# sourceMappingURL=index.esm.js.map
