(function(o){var j={xaxis:{categories:null},yaxis:{categories:null}};function l(c,d,e,b){var h=d.xaxis.options.mode=="categories",a=d.yaxis.options.mode=="categories";if(!(h||a)){return}var s=b.format;if(!s){var i=d;s=[];s.push({x:true,number:true,required:true});s.push({y:true,number:true,required:true});if(i.bars.show||(i.lines.show&&i.lines.fill)){var g=!!((i.bars.show&&i.bars.zero)||(i.lines.show&&i.lines.zero));s.push({y:true,number:true,required:false,defaultValue:0,autoscale:g});if(i.bars.horizontal){delete s[s.length-1].y;s[s.length-1].x=true}}b.format=s}for(var f=0;f<s.length;++f){if(s[f].x&&h){s[f].number=false}if(s[f].y&&a){s[f].number=false}}}function r(b){var a=-1;for(var c in b){if(b[c]>a){a=b[c]}}return a+1}function n(a){var b=[];for(var c in a.categories){var d=a.categories[c];if(d>=a.min&&d<=a.max){b.push([d,c])}}b.sort(function(e,f){return e[0]-f[0]});return b}function m(b,a,g){if(b[a].options.mode!="categories"){return}if(!b[a].categories){var e={},f=b[a].options.categories||{};if(o.isArray(f)){for(var c=0;c<f.length;++c){e[f[c]]=c}}else{for(var d in f){e[d]=f[d]}}b[a].categories=e}if(!b[a].options.ticks){b[a].options.ticks=n}q(g,a,b[a].categories)}function q(w,d,b){var i=w.points,h=w.pointsize,v=w.format,g=d.charAt(0),a=r(b);for(var c=0;c<i.length;c+=h){if(i[c]==null){continue}for(var e=0;e<h;++e){var f=i[c+e];if(f==null||!v[e][g]){continue}if(!(f in b)){b[f]=a;++a}i[c+e]=b[f]}}}function p(a,c,b){m(c,"xaxis",b);m(c,"yaxis",b)}function k(a){a.hooks.processRawData.push(l);a.hooks.processDatapoints.push(p)}o.plot.plugins.push({init:k,options:j,name:"categories",version:"1.0"})})(jQuery);