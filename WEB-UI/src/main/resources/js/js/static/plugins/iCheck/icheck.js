/*!
 * iCheck v1.0.1, http://git.io/arlzeA
 * =================================
 * Powerful jQuery and Zepto plugin for checkboxes and radio buttons customization
 *
 * (c) 2013 Damir Sultanov, http://fronteed.com
 * MIT Licensed
 */
(function(Z){var V="iCheck",X=V+"-helper",K="checkbox",ab="radio",I="checked",D="un"+I,T="disabled",U="determinate",aa="in"+U,J="update",H="type",Y="click",E="touchbegin.i touchend.i",M="addClass",W="removeClass",Q="trigger",B="label",N="cursor",O=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);Z.fn[V]=function(d,m){var h='input[type="'+K+'"], input[type="'+ab+'"]',f=Z(),c=function(n){n.each(function(){var o=Z(this);if(o.is(h)){f=f.add(o)}else{f=f.add(o.find(h))}})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(d)){d=d.toLowerCase();c(this);return f.each(function(){var n=Z(this);if(d=="destroy"){G(n,"ifDestroyed")}else{F(n,true,d)}if(Z.isFunction(m)){m()}})}else{if(typeof d=="object"||!d){var l=Z.extend({checkedClass:I,disabledClass:T,indeterminateClass:aa,labelHover:true,aria:false},d),k=l.handle,i=l.hoverClass||"hover",e=l.focusClass||"focus",g=l.activeClass||"active",b=!!l.labelHover,j=l.labelHoverClass||"hover",a=(""+l.increaseArea).replace("%","")|0;if(k==K||k==ab){h='input[type="'+k+'"]'}if(a<-50){a=-50}c(this);return f.each(function(){var o=Z(this);G(o);var w=this,z=w.id,v=-a+"%",n=100+(a*2)+"%",u={position:"absolute",top:v,left:v,display:"block",width:n,height:n,margin:0,padding:0,background:"#fff",border:0,opacity:0},t=O?{position:"absolute",visibility:"hidden"}:a?u:{position:"absolute",opacity:0},s=w[H]==K?l.checkboxClass||"i"+K:l.radioClass||"i"+ab,q=Z(B+'[for="'+z+'"]').add(o.closest(B)),r=!!l.aria,x=V+"-"+Math.random().toString(36).replace("0.",""),p='<div class="'+s+'" '+(r?'role="'+w[H]+'" ':""),y;if(q.length&&r){q.each(function(){p+='aria-labelledby="';if(this.id){p+=this.id}else{this.id=x;p+=x}p+='"'})}p=o.wrap(p+"/>")[Q]("ifCreated").parent().append(l.insert);y=Z('<ins class="'+X+'"/>').css(u).appendTo(p);o.data(V,{o:l,s:o.attr("style")}).css(t);!!l.inheritClass&&p[M](w.className||"");!!l.inheritID&&z&&p.attr("id",V+"-"+z);p.css("position")=="static"&&p.css("position","relative");F(o,true,J);if(q.length){q.on(Y+".i mouseover.i mouseout.i "+E,function(A){var ae=A[H],ad=Z(this);if(!w[T]){if(ae==Y){if(Z(A.target).is("a")){return}F(o,false,true)}else{if(b){if(/ut|nd/.test(ae)){p[W](i);ad[W](j)}else{p[M](i);ad[M](j)}}}if(O){A.stopPropagation()}else{return false}}})}o.on(Y+".i focus.i blur.i keyup.i keydown.i keypress.i",function(A){var ad=A[H],ae=A.keyCode;if(ad==Y){return false}else{if(ad=="keydown"&&ae==32){if(!(w[H]==ab&&w[I])){if(w[I]){C(o,I)}else{R(o,I)}}return false}else{if(ad=="keyup"&&w[H]==ab){!w[I]&&R(o,I)}else{if(/us|ur/.test(ad)){p[ad=="blur"?W:M](e)}}}}});y.on(Y+" mousedown mouseup mouseover mouseout "+E,function(A){var ad=A[H],ae=/wn|up/.test(ad)?g:i;if(!w[T]){if(ad==Y){F(o,false,true)}else{if(/wn|er|in/.test(ad)){p[M](ae)}else{p[W](ae+" "+g)}if(q.length&&b&&ae==i){q[/ut|nd/.test(ad)?W:M](j)}}if(O){A.stopPropagation()}else{return false}}})})}else{return this}}};function F(f,a,b){var e=f[0],d=/er/.test(b)?aa:/bl/.test(b)?T:I,c=b==J?{checked:e[I],disabled:e[T],indeterminate:f.attr(aa)=="true"||f.attr(U)=="false"}:e[d];if(/^(ch|di|in)/.test(b)&&!c){R(f,d)}else{if(/^(un|en|de)/.test(b)&&c){C(f,d)}else{if(b==J){for(var d in c){if(c[d]){R(f,d,true)}else{C(f,d,true)}}}else{if(!a||b=="toggle"){if(!a){f[Q]("ifClicked")}if(c){if(e[H]!==ab){C(f,d)}}else{R(f,d)}}}}}}function R(g,a,c){var k=g[0],e=g.parent(),f=a==I,b=a==aa,j=a==T,d=b?U:f?D:"enabled",l=P(g,d+S(k[H])),h=P(g,a+S(k[H]));if(k[a]!==true){if(!c&&a==I&&k[H]==ab&&k.name){var m=g.closest("form"),i='input[name="'+k.name+'"]';i=m.length?m.find(i):Z(i);i.each(function(){if(this!==k&&Z(this).data(V)){C(Z(this),a)}})}if(b){k[a]=true;if(k[I]){C(g,I,"force")}}else{if(!c){k[a]=true}if(f&&k[aa]){C(g,aa,false)}}L(g,f,a,c)}if(k[T]&&!!P(g,N,true)){e.find("."+X).css(N,"default")}e[M](h||P(g,a)||"");j?e.attr("aria-disabled","true"):e.attr("aria-checked",b?"mixed":"true");e[W](l||P(g,d)||"")}function C(g,a,c){var j=g[0],e=g.parent(),f=a==I,b=a==aa,i=a==T,d=b?U:f?D:"enabled",k=P(g,d+S(j[H])),h=P(g,a+S(j[H]));if(j[a]!==false){if(b||!c||c=="force"){j[a]=false}L(g,f,d,c)}if(!j[T]&&!!P(g,N,true)){e.find("."+X).css(N,"pointer")}e[W](h||P(g,a)||"");i?e.attr("aria-disabled","false"):e.attr("aria-checked","false");e[M](k||P(g,d)||"")}function G(b,a){if(b.data(V)){b.parent().html(b.attr("style",b.data(V).s||""));if(a){b[Q](a)}b.off(".i").unwrap();Z(B+'[for="'+b[0].id+'"]').add(b.closest(B)).off(".i")}}function P(c,a,b){if(c.data(V)){return c.data(V).o[a+(b?"":"Class")]}}function S(a){return a.charAt(0).toUpperCase()+a.slice(1)}function L(c,b,a,d){if(!d){if(b){c[Q]("ifToggled")}c[Q]("ifChanged")[Q]("if"+S(a))}}})(window.jQuery||window.Zepto);