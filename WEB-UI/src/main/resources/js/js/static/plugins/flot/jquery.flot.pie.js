(function(j){var h=10;var g=0.95;function i(d){var R=null,G=null,Q=null,L=null,D=null,K=null,T=false,e=null;var P=[];d.hooks.processOptions.push(function(k,l){if(l.series.pie.show){l.grid.show=false;if(l.series.pie.label.show=="auto"){if(l.legend.show){l.series.pie.label.show=false}else{l.series.pie.label.show=true}}if(l.series.pie.radius=="auto"){if(l.series.pie.label.show){l.series.pie.radius=3/4}else{l.series.pie.radius=1}}if(l.series.pie.tilt>1){l.series.pie.tilt=1}else{if(l.series.pie.tilt<0){l.series.pie.tilt=0}}}});d.hooks.bindEvents.push(function(k,m){var l=k.getOptions();if(l.series.pie.show){if(l.grid.hoverable){m.unbind("mousemove").mousemove(E)}if(l.grid.clickable){m.unbind("click").click(N)}}});d.hooks.processDatapoints.push(function(k,n,m,l){var o=k.getOptions();if(o.series.pie.show){c(k,n,m,l)}});d.hooks.drawOverlay.push(function(l,k){var m=l.getOptions();if(m.series.pie.show){b(l,k)}});d.hooks.draw.push(function(k,l){var m=k.getOptions();if(m.series.pie.show){J(k,l)}});function c(k,m,l){if(!T){T=true;R=k.getCanvas();G=j(R).parent();Q=k.getOptions();k.setData(I(k.getData()))}}function I(m){var o=0,p=0,k=0,r=Q.series.pie.combine.color,l=[];for(var q=0;q<m.length;++q){var n=m[q].data;if(j.isArray(n)&&n.length==1){n=n[0]}if(j.isArray(n)){if(!isNaN(parseFloat(n[1]))&&isFinite(n[1])){n[1]=+n[1]}else{n[1]=0}}else{if(!isNaN(parseFloat(n))&&isFinite(n)){n=[1,+n]}else{n=[1,0]}}m[q].data=[n]}for(var q=0;q<m.length;++q){o+=m[q].data[0][1]}for(var q=0;q<m.length;++q){var n=m[q].data[0][1];if(n/o<=Q.series.pie.combine.threshold){p+=n;k++;if(!r){r=m[q].color}}}for(var q=0;q<m.length;++q){var n=m[q].data[0][1];if(k<2||n/o>Q.series.pie.combine.threshold){l.push({data:[[1,n]],color:m[q].color,label:m[q].label,angle:n*Math.PI*2/o,percent:n/(o/100)})}}if(k>1){l.push({data:[[1,p]],color:r,label:Q.series.pie.combine.label,angle:p*Math.PI*2/o,percent:p/(o/100)})}return l}function J(q,n){if(!G){return}var k=q.getPlaceholder().width(),s=q.getPlaceholder().height(),o=G.children().filter(".legend").children().width()||0;e=n;T=false;L=Math.min(k,s/Q.series.pie.tilt)/2;K=s/2+Q.series.pie.offset.top;D=k/2;if(Q.series.pie.offset.left=="auto"){if(Q.legend.position.match("w")){D+=o/2}else{D-=o/2}if(D<L){D=L}else{if(D>k-L){D=k-L}}}else{D+=Q.series.pie.offset.left}var p=q.getData(),m=0;do{if(m>0){L*=g}m+=1;r();if(Q.series.pie.tilt<=0.8){t()}}while(!l()&&m<h);if(m>=h){r();G.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")}if(q.setSeries&&q.insertLegend){q.setSeries(p);q.insertLegend()}function r(){e.clearRect(0,0,k,s);G.children().filter(".pieLabel, .pieLabelBackground").remove()}function t(){var u=Q.series.pie.shadow.left;var v=Q.series.pie.shadow.top;var x=10;var w=Q.series.pie.shadow.alpha;var z=Q.series.pie.radius>1?Q.series.pie.radius:L*Q.series.pie.radius;if(z>=k/2-u||z*Q.series.pie.tilt>=s/2-v||z<=x){return}e.save();e.translate(u,v);e.globalAlpha=w;e.fillStyle="#000";e.translate(D,K);e.scale(1,Q.series.pie.tilt);for(var y=1;y<=x;y++){e.beginPath();e.arc(0,0,z,0,Math.PI*2,false);e.fill();z-=y}e.restore()}function l(){var w=Math.PI*Q.series.pie.startAngle;var z=Q.series.pie.radius>1?Q.series.pie.radius:L*Q.series.pie.radius;e.save();e.translate(D,K);e.scale(1,Q.series.pie.tilt);e.save();var u=w;for(var x=0;x<p.length;++x){p[x].startAngle=u;v(p[x].angle,p[x].color,true)}e.restore();if(Q.series.pie.stroke.width>0){e.save();e.lineWidth=Q.series.pie.stroke.width;u=w;for(var x=0;x<p.length;++x){v(p[x].angle,Q.series.pie.stroke.color,false)}e.restore()}a(e);e.restore();if(Q.series.pie.label.show){return y()}else{return true}function v(A,V,B){if(A<=0||isNaN(A)){return}if(B){e.fillStyle=V}else{e.strokeStyle=V;e.lineJoin="round"}e.beginPath();if(Math.abs(A-Math.PI*2)>1e-9){e.moveTo(0,0)}e.arc(0,0,z,u,u+A/2,false);e.arc(0,0,z,u+A/2,u+A,false);e.closePath();u+=A;if(B){e.fill()}else{e.stroke()}}function y(){var A=w;var X=Q.series.pie.label.radius>1?Q.series.pie.label.radius:L*Q.series.pie.label.radius;for(var B=0;B<p.length;++B){if(p[B].percent>=Q.series.pie.label.threshold*100){if(!W(p[B],A,B)){return false}}A+=p[B].angle}return true;function W(ap,ax,V){if(ap.data[0][1]==0){return true}var an=Q.legend.labelFormatter,ao,al=Q.series.pie.label.formatter;if(an){ao=an(ap.label,ap)}else{ao=ap.label}if(al){ao=al(ao,ap)}var aw=((ax+ap.angle)+ax)/2;var aq=D+Math.round(Math.cos(aw)*X);var at=K+Math.round(Math.sin(aw)*X)*Q.series.pie.tilt;var aa="<span class='pieLabel' id='pieLabel"+V+"' style='position:absolute;top:"+at+"px;left:"+aq+"px;'>"+ao+"</span>";G.append(aa);var ar=G.children("#pieLabel"+V);var am=(at-ar.height()/2);var U=(aq-ar.width()/2);ar.css("top",am);ar.css("left",U);if(0-am>0||0-U>0||s-(am+ar.height())<0||k-(U+ar.width())<0){return false}if(Q.series.pie.label.background.opacity!=0){var av=Q.series.pie.label.background.color;if(av==null){av=ap.color}var au="top:"+am+"px;left:"+U+"px;";j("<div class='pieLabelBackground' style='position:absolute;width:"+ar.width()+"px;height:"+ar.height()+"px;"+au+"background-color:"+av+";'></div>").css("opacity",Q.series.pie.label.background.opacity).insertBefore(ar)}return true}}}}function a(l){if(Q.series.pie.innerRadius>0){l.save();var k=Q.series.pie.innerRadius>1?Q.series.pie.innerRadius:L*Q.series.pie.innerRadius;l.globalCompositeOperation="destination-out";l.beginPath();l.fillStyle=Q.series.pie.stroke.color;l.arc(0,0,k,0,Math.PI*2,false);l.fill();l.closePath();l.restore();l.save();l.beginPath();l.strokeStyle=Q.series.pie.stroke.color;l.arc(0,0,k,0,Math.PI*2,false);l.stroke();l.closePath();l.restore()}}function H(m,l){for(var k=false,n=-1,p=m.length,o=p-1;++n<p;o=n){((m[n][1]<=l[1]&&l[1]<m[o][1])||(m[o][1]<=l[1]&&l[1]<m[n][1]))&&(l[0]<(m[o][0]-m[n][0])*(l[1]-m[n][1])/(m[o][1]-m[n][1])+m[n][0])&&(k=!k)}return k}function F(w,x){var X=d.getData(),z=d.getOptions(),y=z.series.pie.radius>1?z.series.pie.radius:L*z.series.pie.radius,t,v;for(var m=0;m<X.length;++m){var q=X[m];if(q.pie.show){e.save();e.beginPath();e.moveTo(0,0);e.arc(0,0,y,q.startAngle,q.startAngle+q.angle/2,false);e.arc(0,0,y,q.startAngle+q.angle/2,q.startAngle+q.angle,false);e.closePath();t=w-D;v=x-K;if(e.isPointInPath){if(e.isPointInPath(w-D,x-K)){e.restore();return{datapoint:[q.percent,q.data],dataIndex:0,series:q,seriesIndex:m}}}else{var n=y*Math.cos(q.startAngle),o=y*Math.sin(q.startAngle),B=y*Math.cos(q.startAngle+q.angle/4),Z=y*Math.sin(q.startAngle+q.angle/4),s=y*Math.cos(q.startAngle+q.angle/2),u=y*Math.sin(q.startAngle+q.angle/2),k=y*Math.cos(q.startAngle+q.angle/1.5),l=y*Math.sin(q.startAngle+q.angle/1.5),A=y*Math.cos(q.startAngle+q.angle),Y=y*Math.sin(q.startAngle+q.angle),p=[[0,0],[n,o],[B,Z],[s,u],[k,l],[A,Y]],r=[t,v];if(H(p,r)){e.restore();return{datapoint:[q.percent,q.data],dataIndex:0,series:q,seriesIndex:m}}}e.restore()}}return null}function E(k){M("plothover",k)}function N(k){M("plotclick",k)}function M(l,o){var k=d.offset();var q=parseInt(o.pageX-k.left);var s=parseInt(o.pageY-k.top);var m=F(q,s);if(Q.grid.autoHighlight){for(var r=0;r<P.length;++r){var p=P[r];if(p.auto==l&&!(m&&p.series==m.series)){S(p.series)}}}if(m){O(m.series,l)}var n={pageX:o.pageX,pageY:o.pageY};G.trigger(l,[n,m])}function O(l,k){var m=C(l);if(m==-1){P.push({series:l,auto:k});d.triggerRedrawOverlay()}else{if(!k){P[m].auto=false}}}function S(k){if(k==null){P=[];d.triggerRedrawOverlay()}var l=C(k);if(l!=-1){P.splice(l,1);d.triggerRedrawOverlay()}}function C(k){for(var m=0;m<P.length;++m){var l=P[m];if(l.series==k){return m}}return -1}function b(l,k){var n=l.getOptions();var p=n.series.pie.radius>1?n.series.pie.radius:L*n.series.pie.radius;k.save();k.translate(D,K);k.scale(1,n.series.pie.tilt);for(var m=0;m<P.length;++m){o(P[m].series)}a(k);k.restore();function o(q){if(q.angle<=0||isNaN(q.angle)){return}k.fillStyle="rgba(255, 255, 255, "+n.series.pie.highlight.opacity+")";k.beginPath();if(Math.abs(q.angle-Math.PI*2)>1e-9){k.moveTo(0,0)}k.arc(0,0,p,q.startAngle,q.startAngle+q.angle/2,false);k.arc(0,0,p,q.startAngle+q.angle/2,q.startAngle+q.angle,false);k.closePath();k.fill()}}}var f={series:{pie:{show:false,radius:"auto",innerRadius:0,startAngle:3/2,tilt:1,shadow:{left:5,top:15,alpha:0.02},offset:{top:0,left:"auto"},stroke:{color:"#fff",width:1},label:{show:"auto",formatter:function(b,a){return"<div style='font-size:x-small;text-align:center;padding:2px;color:"+a.color+";'>"+b+"<br/>"+Math.round(a.percent)+"%</div>"},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:0.5}}}};j.plot.plugins.push({init:i,options:f,name:"pie",version:"1.1"})})(jQuery);