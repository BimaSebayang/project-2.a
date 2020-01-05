(function(b){"object"==typeof exports&&"object"==typeof module?b(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],b):b(CodeMirror)})(function(n){function m(b,c){this.cm=b;this.options=this.buildOptions(c);this.widget=null;this.tick=this.debounce=0;this.startPos=this.cm.getCursor();this.startLen=this.cm.getLine(this.startPos.line).length;var a=this;b.on("cursorActivity",this.activityFunc=function(){a.cursorActivity()})}function f(c,d){function e(t,i){var s;s="string"!=typeof i?function(q){return i(q,d)}:h.hasOwnProperty(i)?h[i]:i;a[t]=s}var h={Up:function(){d.moveFocus(-1)},Down:function(){d.moveFocus(1)},PageUp:function(){d.moveFocus(-d.menuSize()+1,!0)},PageDown:function(){d.moveFocus(d.menuSize()-1,!0)},Home:function(){d.setFocus(0)},End:function(){d.setFocus(d.length-1)},Enter:d.pick,Tab:d.pick,Esc:d.close},g=c.options.customKeys,a=g?{}:h;if(g){for(var b in g){g.hasOwnProperty(b)&&e(b,g[b])}}if(g=c.options.extraKeys){for(b in g){g.hasOwnProperty(b)&&e(b,g[b])}}return a}function p(a,b){for(;b&&b!=a;){if("LI"===b.nodeName.toUpperCase()&&b.parentNode==a){return b}b=b.parentNode}}function k(K,a){this.completion=K;this.data=a;this.picked=!1;var b=this,e=K.cm,c=this.hints=document.createElement("ul");c.className="CodeMirror-hints";this.selectedHint=a.selectedHint||0;for(var u=a.list,i=0;i<u.length;++i){var t=c.appendChild(document.createElement("li")),q=u[i],r="CodeMirror-hint"+(i!=this.selectedHint?"":" CodeMirror-hint-active");null!=q.className&&(r=q.className+" "+r);t.className=r;q.render?q.render(t,a,q):t.appendChild(document.createTextNode(q.displayText||("string"==typeof q?q:q.text)));t.hintId=i}var i=e.cursorCoords(K.options.alignWithWord?a.from:null),h=i.left,H=i.bottom,J=!0;c.style.left=h+"px";c.style.top=H+"px";t=window.innerWidth||Math.max(document.body.offsetWidth,document.documentElement.offsetWidth);r=window.innerHeight||Math.max(document.body.offsetHeight,document.documentElement.offsetHeight);(K.options.container||document.body).appendChild(c);q=c.getBoundingClientRect();if(0<q.bottom-r){var I=q.bottom-q.top;0<i.top-(i.bottom-q.top)-I?(c.style.top=(H=i.top-I)+"px",J=!1):I>r&&(c.style.height=r-5+"px",c.style.top=(H=i.bottom-q.top)+"px",r=e.getCursor(),a.from.ch!=r.ch&&(i=e.cursorCoords(r),c.style.left=(h=i.left)+"px",q=c.getBoundingClientRect()))}r=q.right-t;0<r&&(q.right-q.left>t&&(c.style.width=t-5+"px",r-=q.right-q.left-t),c.style.left=(h=i.left-r)+"px");e.addKeyMap(this.keyMap=f(K,{moveFocus:function(s,v){b.changeActive(b.selectedHint+s,v)},setFocus:function(s){b.changeActive(s)},menuSize:function(){return b.screenAmount()},length:u.length,close:function(){K.close()},pick:function(){b.pick()},data:a}));if(K.options.closeOnUnfocus){var d;e.on("blur",this.onBlur=function(){d=setTimeout(function(){K.close()},100)});e.on("focus",this.onFocus=function(){clearTimeout(d)})}var g=e.getScrollInfo();e.on("scroll",this.onScroll=function(){var x=e.getScrollInfo(),w=e.getWrapperElement().getBoundingClientRect(),s=H+g.top-x.top,v=s-(window.pageYOffset||(document.documentElement||document.body).scrollTop);J||(v+=c.offsetHeight);if(v<=w.top||v>=w.bottom){return K.close()}c.style.top=s+"px";c.style.left=h+g.left-x.left+"px"});n.on(c,"dblclick",function(s){(s=p(c,s.target||s.srcElement))&&null!=s.hintId&&(b.changeActive(s.hintId),b.pick())});n.on(c,"click",function(s){(s=p(c,s.target||s.srcElement))&&null!=s.hintId&&(b.changeActive(s.hintId),K.options.completeOnSingleClick&&b.pick())});n.on(c,"mousedown",function(){setTimeout(function(){e.focus()},20)});n.signal(a,"select",u[0],c.firstChild);return !0}n.showHint=function(c,d,a){if(!d){return c.showHint(a)}a&&a.async&&(d.async=!0);d={hint:d};if(a){for(var b in a){d[b]=a[b]}}return c.showHint(d)};n.defineExtension("showHint",function(a){1<this.listSelections().length||this.somethingSelected()||(this.state.completionActive&&this.state.completionActive.close(),a=this.state.completionActive=new m(this,a),a.options.hint&&(n.signal(this,"startCompletion",this),a.update()))});var j=window.requestAnimationFrame||function(a){return setTimeout(a,1000/60)},l=window.cancelAnimationFrame||clearTimeout;m.prototype={close:function(){this.active()&&(this.tick=this.cm.state.completionActive=null,this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.widget.close(),n.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(b,c){var a=b.list[c];a.hint?a.hint(this.cm,b,a):this.cm.replaceRange("string"==typeof a?a:a.text,a.from||b.from,a.to||b.to,"complete");n.signal(b,"pick",a);this.close()},showHints:function(a){if(!a||!a.list.length||!this.active()){return this.close()}this.options.completeSingle&&1==a.list.length?this.pick(a,0):this.showWidget(a)},cursorActivity:function(){this.debounce&&(l(this.debounce),this.debounce=0);var b=this.cm.getCursor(),c=this.cm.getLine(b.line);if(b.line!=this.startPos.line||c.length-b.ch!=this.startLen-this.startPos.ch||b.ch<this.startPos.ch||this.cm.somethingSelected()||b.ch&&this.options.closeCharacters.test(c.charAt(b.ch-1))){this.close()}else{var a=this;this.debounce=j(function(){a.update()});this.widget&&this.widget.disable()}},update:function(){if(null!=this.tick){if(this.data&&n.signal(this.data,"update"),this.options.hint.async){var a=++this.tick,b=this;this.options.hint(this.cm,function(c){b.tick==a&&b.finishUpdate(c)},this.options)}else{this.finishUpdate(this.options.hint(this.cm,this.options),a)}}},finishUpdate:function(a){this.data=a;var b=this.widget&&this.widget.picked;this.widget&&this.widget.close();a&&a.list.length&&(b&&1==a.list.length?this.pick(a,0):this.widget=new k(this,a))},showWidget:function(a){this.data=a;this.widget=new k(this,a);n.signal(a,"shown")},buildOptions:function(c){var d=this.cm.options.hintOptions,a={},b;for(b in o){a[b]=o[b]}if(d){for(b in d){void 0!==d[b]&&(a[b]=d[b])}}if(c){for(b in c){void 0!==c[b]&&(a[b]=c[b])}}return a}};k.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null;this.hints.parentNode.removeChild(this.hints);this.completion.cm.removeKeyMap(this.keyMap);var a=this.completion.cm;this.completion.options.closeOnUnfocus&&(a.off("blur",this.onBlur),a.off("focus",this.onFocus));a.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var a=this;this.keyMap={Enter:function(){a.picked=!0}};this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(b,c){b>=this.data.list.length?b=c?this.data.list.length-1:0:0>b&&(b=c?0:this.data.list.length-1);if(this.selectedHint!=b){var a=this.hints.childNodes[this.selectedHint];a.className=a.className.replace(" CodeMirror-hint-active","");a=this.hints.childNodes[this.selectedHint=b];a.className+=" CodeMirror-hint-active";a.offsetTop<this.hints.scrollTop?this.hints.scrollTop=a.offsetTop-3:a.offsetTop+a.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=a.offsetTop+a.offsetHeight-this.hints.clientHeight+3);n.signal(this.data,"select",this.data.list[this.selectedHint],a)}},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1}};n.registerHelper("hint","auto",function(d,e){var a=d.getHelpers(d.getCursor(),"hint");if(a.length){for(var c=0;c<a.length;c++){var b=a[c](d,e);if(b&&b.list.length){return b}}}else{if(a=d.getHelper(d.getCursor(),"hintWords")){if(a){return n.hint.fromList(d,{words:a})}}else{if(n.hint.anyword){return n.hint.anyword(d,e)}}}});n.registerHelper("hint","fromList",function(b,c){for(var e=b.getCursor(),h=b.getTokenAt(e),g=[],d=0;d<c.words.length;d++){var a=c.words[d];a.slice(0,h.string.length)==h.string&&g.push(a)}if(g.length){return{list:g,from:n.Pos(e.line,h.start),to:n.Pos(e.line,h.end)}}});n.commands.autocomplete=n.showHint;var o={hint:n.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnUnfocus:!0,completeOnSingleClick:!1,container:null,customKeys:null,extraKeys:null};n.defineOption("hintOptions",null)});