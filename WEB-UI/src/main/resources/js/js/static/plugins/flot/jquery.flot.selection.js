(function(d){function c(x){var s={first:{x:-1,y:-1},second:{x:-1,y:-1},show:false,active:false};var v={};var a=null;function D(e){if(s.active){w(e);x.getPlaceholder().trigger("plotselecting",[B()])}}function u(e){if(e.which!=1){return}document.body.focus();if(document.onselectstart!==undefined&&v.onselectstart==null){v.onselectstart=document.onselectstart;document.onselectstart=function(){return false}}if(document.ondrag!==undefined&&v.ondrag==null){v.ondrag=document.ondrag;document.ondrag=function(){return false}}E(s.first,e);s.active=true;a=function(f){y(f)};d(document).one("mouseup",a)}function y(e){a=null;if(document.onselectstart!==undefined){document.onselectstart=v.onselectstart}if(document.ondrag!==undefined){document.ondrag=v.ondrag}s.active=false;w(e);if(C()){z()}else{x.getPlaceholder().trigger("plotunselected",[]);x.getPlaceholder().trigger("plotselecting",[null])}return false}function B(){if(!C()){return null}if(!s.show){return null}var e={},f=s.first,g=s.second;d.each(x.getAxes(),function(j,i){if(i.used){var k=i.c2p(f[i.direction]),h=i.c2p(g[i.direction]);e[j]={from:Math.min(k,h),to:Math.max(k,h)}}});return e}function z(){var e=B();x.getPlaceholder().trigger("plotselected",[e]);if(e.xaxis&&e.yaxis){x.getPlaceholder().trigger("selected",[{x1:e.xaxis.from,y1:e.yaxis.from,x2:e.xaxis.to,y2:e.yaxis.to}])}}function A(f,e,g){return e<f?f:(e>g?g:e)}function E(e,h){var f=x.getOptions();var g=x.getPlaceholder().offset();var i=x.getPlotOffset();e.x=A(0,h.pageX-g.left-i.left,x.width());e.y=A(0,h.pageY-g.top-i.top,x.height());if(f.selection.mode=="y"){e.x=e==s.first?0:x.width()}if(f.selection.mode=="x"){e.y=e==s.first?0:x.height()}}function w(e){if(e.pageX==null){return}E(s.second,e);if(C()){s.show=true;x.triggerRedrawOverlay()}else{b(true)}}function b(e){if(s.show){s.show=false;x.triggerRedrawOverlay();if(!e){x.getPlaceholder().trigger("plotunselected",[])}}}function F(m,i){var l,g,f,e,h=x.getAxes();for(var k in h){l=h[k];if(l.direction==i){e=i+l.n+"axis";if(!m[e]&&l.n==1){e=i+"axis"}if(m[e]){g=m[e].from;f=m[e].to;break}}}if(!m[e]){l=i=="x"?x.getXAxes()[0]:x.getYAxes()[0];g=m[i+"1"];f=m[i+"2"]}if(g!=null&&f!=null&&g>f){var j=g;g=f;f=j}return{from:g,to:f,axis:l}}function t(h,i){var f,g,e=x.getOptions();if(e.selection.mode=="y"){s.first.x=0;s.second.x=x.width()}else{g=F(h,"x");s.first.x=g.axis.p2c(g.from);s.second.x=g.axis.p2c(g.to)}if(e.selection.mode=="x"){s.first.y=0;s.second.y=x.height()}else{g=F(h,"y");s.first.y=g.axis.p2c(g.from);s.second.y=g.axis.p2c(g.to)}s.show=true;x.triggerRedrawOverlay();if(!i&&C()){z()}}function C(){var e=x.getOptions().selection.minSize;return Math.abs(s.second.x-s.first.x)>=e&&Math.abs(s.second.y-s.first.y)>=e}x.clearSelection=b;x.setSelection=t;x.getSelection=B;x.hooks.bindEvents.push(function(f,g){var e=f.getOptions();if(e.selection.mode!=null){g.mousemove(D);g.mousedown(u)}});x.hooks.drawOverlay.push(function(j,e){if(s.show&&C()){var l=j.getPlotOffset();var m=j.getOptions();e.save();e.translate(l.left,l.top);var i=d.color.parse(m.selection.color);e.strokeStyle=i.scale("a",0.8).toString();e.lineWidth=1;e.lineJoin=m.selection.shape;e.fillStyle=i.scale("a",0.4).toString();var g=Math.min(s.first.x,s.second.x)+0.5,h=Math.min(s.first.y,s.second.y)+0.5,f=Math.abs(s.second.x-s.first.x)-1,k=Math.abs(s.second.y-s.first.y)-1;e.fillRect(g,h,f,k);e.strokeRect(g,h,f,k);e.restore()}});x.hooks.shutdown.push(function(e,f){f.unbind("mousemove",D);f.unbind("mousedown",u);if(a){d(document).unbind("mouseup",a)}})}d.plot.plugins.push({init:c,options:{selection:{mode:null,color:"#e8cfac",shape:"round",minSize:5}},name:"selection",version:"1.1"})})(jQuery);