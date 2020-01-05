(function(f,b,h){var e=b.$$minErr("$resource");var a=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;function c(i){return(i!=null&&i!==""&&i!=="hasOwnProperty"&&a.test("."+i))}function d(o,n){if(!c(n)){throw e("badmember",'Dotted member path "@{0}" is invalid.',n)}var m=n.split(".");for(var k=0,l=m.length;k<l&&o!==h;k++){var j=m[k];o=(o!==null)?o[j]:h}return o}function g(j,k){k=k||{};b.forEach(k,function(m,l){delete k[l]});for(var i in j){if(j.hasOwnProperty(i)&&!(i.charAt(0)==="$"&&i.charAt(1)==="$")){k[i]=j[i]}}return k}b.module("ngResource",["ng"]).provider("$resource",function(){var i=this;this.defaults={stripTrailingSlashes:true,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:true},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};this.$get=["$http","$q",function(s,o){var t=b.noop,n=b.forEach,r=b.extend,j=b.copy,l=b.isFunction;function m(u){return k(u,true).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function k(v,u){return encodeURIComponent(v).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,(u?"%20":"+"))}function q(u,v){this.template=u;this.defaults=r({},i.defaults,v);this.urlParams={}}q.prototype={setUrlParams:function(y,B,z){var w=this,x=z||w.template,A,u;var v=w.urlParams={};n(x.split(/\W/),function(C){if(C==="hasOwnProperty"){throw e("badname","hasOwnProperty is not a valid parameter name.")}if(!(new RegExp("^\\d+$").test(C))&&C&&(new RegExp("(^|[^\\\\]):"+C+"(\\W|$)").test(x))){v[C]=true}});x=x.replace(/\\:/g,":");B=B||{};n(w.urlParams,function(D,C){A=B.hasOwnProperty(C)?B[C]:w.defaults[C];if(b.isDefined(A)&&A!==null){u=m(A);x=x.replace(new RegExp(":"+C+"(\\W|$)","g"),function(E,F){return u+F})}else{x=x.replace(new RegExp("(/?):"+C+"(\\W|$)","g"),function(F,G,E){if(E.charAt(0)=="/"){return E}else{return G+E}})}});if(w.defaults.stripTrailingSlashes){x=x.replace(/\/+$/,"")||"/"}x=x.replace(/\/\.(?=\w+($|\?))/,".");y.url=x.replace(/\/\\\./,"/.");n(B,function(D,C){if(!w.urlParams[C]){y.params=y.params||{};y.params[C]=D}})}};function p(x,z,B,w){var u=new q(x,w);B=r({},i.defaults.actions,B);function v(E,D){var C={};D=r({},z,D);n(D,function(G,F){if(l(G)){G=G()}C[F]=G&&G.charAt&&G.charAt(0)=="@"?d(E,G.substr(1)):G});return C}function y(C){return C.resource}function A(C){g(C||{},this)}A.prototype.toJSON=function(){var C=r({},this);delete C.$promise;delete C.$resolved;return C};n(B,function(E,C){var D=/^(POST|PUT|PATCH)$/i.test(E.method);A[C]=function(I,G,F,S){var K={},L,P,N;switch(arguments.length){case 4:N=S;P=F;case 3:case 2:if(l(G)){if(l(I)){P=I;N=G;break}P=G;N=F}else{K=I;L=G;P=F;break}case 1:if(l(I)){P=I}else{if(D){L=I}else{K=I}}break;case 0:break;default:throw e("badargs","Expected up to 4 arguments [params, data, success, error], got {0} arguments",arguments.length)}var H=this instanceof A;var O=H?L:(E.isArray?[]:new A(L));var J={};var M=E.interceptor&&E.interceptor.response||y;var Q=E.interceptor&&E.interceptor.responseError||h;n(E,function(U,T){if(T!="params"&&T!="isArray"&&T!="interceptor"){J[T]=j(U)}});if(D){J.data=L}u.setUrlParams(J,r({},v(L,E.params||{}),K),E.url);var R=s(J).then(function(T){var U=T.data,V=O.$promise;if(U){if(b.isArray(U)!==(!!E.isArray)){throw e("badcfg","Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2}",C,E.isArray?"array":"object",b.isArray(U)?"array":"object")}if(E.isArray){O.length=0;n(U,function(W){if(typeof W==="object"){O.push(new A(W))}else{O.push(W)}})}else{g(U,O);O.$promise=V}}O.$resolved=true;T.resource=O;return T},function(T){O.$resolved=true;(N||t)(T);return o.reject(T)});R=R.then(function(T){var U=M(T);(P||t)(U,T.headers);return U},Q);if(!H){O.$promise=R;O.$resolved=false;return O}return R};A.prototype["$"+C]=function(I,H,G){if(l(I)){G=H;H=I;I={}}var F=A[C].call(this,I,this,H,G);return F.$promise||F}});A.bind=function(C){return p(x,r({},z,C),B)};return A}return p}]})})(window,window.angular);