(function(d){var e={series:{threshold:null}};function f(b){function a(G,p,R,s,I){var K=R.pointsize,x,H,J,m,F,y=d.extend({},p);y.datapoints={points:[],pointsize:K,format:R.format};y.label=null;y.color=I;y.threshold=null;y.originSeries=p;y.data=[];var N=R.points,Q=p.lines.show;var M=[];var L=[];var i;for(x=0;x<N.length;x+=K){H=N[x];J=N[x+1];F=m;if(J<s){m=M}else{m=L}if(Q&&F!=m&&H!=null&&x>0&&N[x-K]!=null){var P=H+(s-J)*(H-N[x-K])/(J-N[x-K+1]);F.push(P);F.push(s);for(i=2;i<K;++i){F.push(N[x+i])}m.push(null);m.push(null);for(i=2;i<K;++i){m.push(N[x+i])}m.push(P);m.push(s);for(i=2;i<K;++i){m.push(N[x+i])}}m.push(H);m.push(J);for(i=2;i<K;++i){m.push(N[x+i])}}R.points=L;y.datapoints.points=M;if(y.datapoints.points.length>0){var O=d.inArray(p,G.getData());G.getData().splice(O+1,0,y)}}function c(j,l,k){if(!l.threshold){return}if(l.threshold instanceof Array){l.threshold.sort(function(g,h){return g.below-h.below});d(l.threshold).each(function(h,g){a(j,l,k,g.below,g.color)})}else{a(j,l,k,l.threshold.below,l.threshold.color)}}b.hooks.processDatapoints.push(c)}d.plot.plugins.push({init:f,options:e,name:"threshold",version:"1.2"})})(jQuery);