var ODS={};(function make_ods(F){var a=function(){if(typeof XLSX!=="undefined"){return XLSX.utils}if(typeof module!=="undefined"&&typeof require!=="undefined"){try{return require("../xlsx").utils}catch(M){try{return require("./xlsx").utils}catch(L){return require("xlsx").utils}}}throw new Error("Cannot find XLSX utils")};var g=(typeof Buffer!=="undefined");function c(L){var N="";for(var M=0;M!=L.length;++M){N+=String.fromCharCode(L[M])}return N}function v(L){if(!L){return null}if(L.data){return L.data}if(L.asNodeBuffer&&g){return L.asNodeBuffer().toString("binary")}if(L.asBinary){return L.asBinary()}if(L._data&&L._data.getContent){return c(Array.prototype.slice.call(L._data.getContent(),0))}return null}function A(M,L){var N=L;if(M.files[N]){return M.files[N]}N=L.toLowerCase();if(M.files[N]){return M.files[N]}N=N.replace(/\//g,"\\");if(M.files[N]){return M.files[N]}return null}function D(M,L){var N=A(M,L);if(N==null){throw new Error("Cannot find file "+L+" in zip")}return N}function i(M,L,N){if(!N){return v(D(M,L))}if(!L){return null}try{return i(M,L)}catch(O){return null}}var t,z;if(typeof JSZip!=="undefined"){z=JSZip}if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){if(g&&typeof z==="undefined"){z=require("jszip")}if(typeof z==="undefined"){z=require("./jszip").JSZip}t=require("fs")}}var h=/\b[\w:-]+=["'][^"]*['"]/g;var x=/<[^>]*>/g;var E=/<\w*:/,J=/<(\/?)\w+:/;function b(W,M){var S=[];var V=0,R=0;for(;V!==W.length;++V){if((R=W.charCodeAt(V))===32||R===10||R===13){break}}if(!M){S[0]=W.substr(0,V)}if(V===W.length){return S}var O=W.match(h),P=0,T="",U="",Q=0,L="",N="";if(O){for(Q=0;Q!=O.length;++Q){N=O[Q];for(R=0;R!=N.length;++R){if(N.charCodeAt(R)===61){break}}L=N.substr(0,R);U=N.substring(R+2,N.length-1);for(P=0;P!=L.length;++P){if(L.charCodeAt(P)===58){break}}if(P===L.length){S[L]=U}else{S[(P===5&&L.substr(0,5)==="xmlns"?"xmlns":"")+L.substr(P+1)]=U}}}return S}function f(L){return L.replace(J,"<$1")}var l={"&quot;":'"',"&apos;":"'","&gt;":">","&lt;":"<","&amp;":"&"};var o={'"':"&quot;","'":"&apos;",">":"&gt;","<":"&lt;","&":"&amp;"};var w="&<>'\"".split("");var p=/&[a-z]*;/g,n=/_x([\da-fA-F]+)_/g;function s(M){var L=M+"";return L.replace(p,function(N){return l[N]}).replace(n,function(N,O){return String.fromCharCode(parseInt(O,16))})}var j=/[&<>'"]/g,e=/[\u0000-\u0008\u000b-\u001f]/g;function u(M){var L=M+"";return L.replace(j,function(N){return o[N]}).replace(e,function(N){return"_x"+("000"+N.charCodeAt(0).toString(16)).substr(-4)+"_"})}function k(M,L){switch(M){case"1":case"true":case"TRUE":return true;default:return false}}function H(L){var M=Date.parse(L);return(M+2209161600000)/(24*60*60*1000)}function G(P){var O=0,M=0,Q=false;var L=P.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);if(!L){throw new Error("|"+P+"| is not an ISO8601 Duration")}for(var N=1;N!=L.length;++N){if(!L[N]){continue}M=1;if(N>3){Q=true}switch(L[N].substr(L[N].length-1)){case"Y":throw new Error("Unsupported ISO Duration Field: "+L[N].substr(L[N].length-1));case"D":M*=24;case"H":M*=60;case"M":if(!Q){throw new Error("Unsupported ISO Duration Field: M")}else{M*=60}case"S":break}O+=M*parseInt(L[N],10)}return O}function B(L){if(g&&Buffer.isBuffer(L)){return L.toString("utf8")}if(typeof L==="string"){return L}throw"badf"}var C=/<(\/?)([a-z0-9]*:|)([\w-]+)[^>]*>/mg;var m="application/vnd.oasis.opendocument.spreadsheet";var K=function(P,M){var O=B(P);var N;var L;while((N=C.exec(O))){switch(N[3]){case"manifest":break;case"file-entry":L=b(N[0]);if(L.path=="/"&&L.type!==m){throw new Error("This OpenDocument is not a spreadsheet")}break;case"encryption-data":case"algorithm":case"start-key-generation":case"key-derivation":throw new Error("Unsupported ODS Encryption");default:throw N}}};var q=function(M,L){return d(M.replace(/<text:s\/>/g," ").replace(/<[^>]*>/g,""))};var d=function r(S){var M="",N=0,R=0,Q=0,P=0,O=0,L=0;while(N<S.length){R=S.charCodeAt(N++);if(R<128){M+=String.fromCharCode(R);continue}Q=S.charCodeAt(N++);if(R>191&&R<224){M+=String.fromCharCode(((R&31)<<6)|(Q&63));continue}P=S.charCodeAt(N++);if(R<240){M+=String.fromCharCode(((R&15)<<12)|((Q&63)<<6)|(P&63));continue}O=S.charCodeAt(N++);L=(((R&7)<<18)|((Q&63)<<12)|((P&63)<<6)|(O&63))-65536;M+=String.fromCharCode(55296+((L>>>10)&1023));M+=String.fromCharCode(56320+(L&1023))}return M};var I=(function(){var M={day:["d","dd"],month:["m","mm"],year:["y","yy"],hours:["h","hh"],minutes:["m","mm"],seconds:["s","ss"],"am-pm":["A/P","AM/PM"],"day-of-week":["ddd","dddd"]};return function L(ak,Y){var ah=B(ak);var T=[],al;var ap;var aa,N,V;var S;var Q={},an=[],O={};var ad,af;var ai;var P,ao,X;var U,ac,Z={s:{r:1000000,c:10000000},e:{r:0,c:0}};var ae={};var ab=[],am={},W=0,ag=0;while((ad=C.exec(ah))){switch(ad[3]){case"table":if(ad[1]==="/"){if(Z.e.c>=Z.s.c&&Z.e.r>=Z.s.r){O["!ref"]=a().encode_range(Z)}if(ab.length){O["!merges"]=ab}an.push(S.name);Q[S.name]=O}else{if(ad[0].charAt(ad[0].length-2)!=="/"){S=b(ad[0]);U=ac=-1;Z.s.r=Z.s.c=10000000;Z.e.r=Z.e.c=0;O={};ab=[]}}break;case"table-row":if(ad[1]==="/"){break}++U;ac=-1;break;case"covered-table-cell":++ac;break;case"table-cell":if(ad[0].charAt(ad[0].length-2)==="/"){ai=b(ad[0]);if(ai["number-columns-repeated"]){ac+=parseInt(ai["number-columns-repeated"],10)}else{++ac}}else{if(ad[1]!=="/"){++ac;if(ac>Z.e.c){Z.e.c=ac}if(U>Z.e.r){Z.e.r=U}if(ac<Z.s.c){Z.s.c=ac}if(U<Z.s.r){Z.s.r=U}ai=b(ad[0]);af={t:ai["value-type"],v:null};if(ai["number-columns-spanned"]||ai["number-rows-spanned"]){W=parseInt(ai["number-rows-spanned"],10)||0;ag=parseInt(ai["number-columns-spanned"],10)||0;am={s:{r:U,c:ac},e:{r:U+W-1,c:ac+ag-1}};ab.push(am)}switch(af.t){case"boolean":af.t="b";af.v=k(ai["boolean-value"]);break;case"float":af.t="n";af.v=parseFloat(ai.value);break;case"percentage":af.t="n";af.v=parseFloat(ai.value);break;case"currency":af.t="n";af.v=parseFloat(ai.value);break;case"date":af.t="n";af.v=H(ai["date-value"]);af.z="m/d/yy";break;case"time":af.t="n";af.v=G(ai["time-value"])/86400;break;case"string":af.t="s";break;default:throw new Error("Unsupported value type "+af.t)}}else{if(af.t==="s"){af.v=P}if(P){af.w=P}if(!(Y.sheetRows&&Y.sheetRows<U)){O[a().encode_cell({r:U,c:ac})]=af}af=null}}break;case"document-content":case"spreadsheet":case"scripts":case"font-face-decls":if(ad[1]==="/"){if((al=T.pop())[0]!==ad[3]){throw"Bad state: "+al}}else{if(ad[0].charAt(ad[0].length-2)!=="/"){T.push([ad[3],true])}}break;case"shapes":case"frame":if(ad[1]==="/"){if((al=T.pop())[0]!==ad[3]){throw"Bad state: "+al}}else{if(ad[0].charAt(ad[0].length-2)!=="/"){T.push([ad[3],false])}}break;case"number-style":case"percentage-style":case"date-style":case"time-style":if(ad[1]==="/"){ae[aa.name]=N;if((al=T.pop())[0]!==ad[3]){throw"Bad state: "+al}}else{if(ad[0].charAt(ad[0].length-2)!=="/"){N="";aa=b(ad[0]);T.push([ad[3],true])}}break;case"script":break;case"automatic-styles":break;case"style":break;case"font-face":break;case"paragraph-properties":break;case"table-properties":break;case"table-column-properties":break;case"table-row-properties":break;case"table-cell-properties":break;case"number":switch(T[T.length-1][0]){case"time-style":case"date-style":ap=b(ad[0]);N+=M[ad[3]][ap.style==="long"?1:0];break}break;case"day":case"month":case"year":case"era":case"day-of-week":case"week-of-year":case"quarter":case"hours":case"minutes":case"seconds":case"am-pm":switch(T[T.length-1][0]){case"time-style":case"date-style":ap=b(ad[0]);N+=M[ad[3]][ap.style==="long"?1:0];break}break;case"boolean-style":break;case"boolean":break;case"text-style":break;case"text":if(ad[0].substr(-2)==="/>"){break}else{if(ad[1]==="/"){switch(T[T.length-1][0]){case"number-style":case"date-style":case"time-style":N+=ah.slice(V,ad.index);break}}else{V=ad.index+ad[0].length}}break;case"text-content":break;case"text-properties":break;case"body":break;case"forms":break;case"table-column":break;case"graphic-properties":break;case"calculation-settings":break;case"named-expressions":break;case"named-range":break;case"span":break;case"p":if(ad[1]==="/"){P=q(ah.slice(ao,ad.index),X)}else{X=b(ad[0]);ao=ad.index+ad[0].length}break;case"s":break;case"date":break;case"annotation":break;case"object":break;case"title":break;case"desc":break;case"database-ranges":break;case"database-range":break;case"filter":break;case"filter-and":break;case"filter-or":break;case"filter-condition":break;default:if(Y.WTF){throw ad}}}var aj={Sheets:Q,SheetNames:an};return aj}})();var y=function(L,M){return I(i(L,"content.xml"),M)};F.parse_ods=y})(typeof exports!=="undefined"?exports:ODS);