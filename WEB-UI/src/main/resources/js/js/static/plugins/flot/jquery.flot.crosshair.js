(function(d){var e={crosshair:{mode:null,color:"rgba(170, 0, 0, 0.80)",lineWidth:1}};function f(c){var a={x:-1,y:-1,locked:false};c.setCrosshair=function m(g){if(!g){a.x=-1}else{var h=c.p2c(g);a.x=Math.max(0,Math.min(h.left,c.width()));a.y=Math.max(0,Math.min(h.top,c.height()))}c.triggerRedrawOverlay()};c.clearCrosshair=c.setCrosshair;c.lockCrosshair=function l(g){if(g){c.setCrosshair(g)}a.locked=true};c.unlockCrosshair=function k(){a.locked=false};function n(g){if(a.locked){return}if(a.x!=-1){a.x=-1;c.triggerRedrawOverlay()}}function b(h){if(a.locked){return}if(c.getSelection&&c.getSelection()){a.x=-1;return}var g=c.offset();a.x=Math.max(0,Math.min(h.pageX-g.left,c.width()));a.y=Math.max(0,Math.min(h.pageY-g.top,c.height()));c.triggerRedrawOverlay()}c.hooks.bindEvents.push(function(g,h){if(!g.getOptions().crosshair.mode){return}h.mouseout(n);h.mousemove(b)});c.hooks.drawOverlay.push(function(r,i){var j=r.getOptions().crosshair;if(!j.mode){return}var g=r.getPlotOffset();i.save();i.translate(g.left,g.top);if(a.x!=-1){var h=r.getOptions().crosshair.lineWidth%2===0?0:0.5;i.strokeStyle=j.color;i.lineWidth=j.lineWidth;i.lineJoin="round";i.beginPath();if(j.mode.indexOf("x")!=-1){var s=Math.round(a.x)+h;i.moveTo(s,0);i.lineTo(s,r.height())}if(j.mode.indexOf("y")!=-1){var t=Math.round(a.y)+h;i.moveTo(0,t);i.lineTo(r.width(),t)}i.stroke()}i.restore()});c.hooks.shutdown.push(function(g,h){h.unbind("mouseout",n);h.unbind("mousemove",b)})}d.plot.plugins.push({init:f,options:e,name:"crosshair",version:"1.0"})})(jQuery);