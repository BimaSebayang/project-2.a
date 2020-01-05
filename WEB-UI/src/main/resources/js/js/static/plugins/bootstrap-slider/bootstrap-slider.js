/*! =========================================================
 * bootstrap-slider.js
 *
 * Maintainers:
 *		Kyle Kemp
 *			- Twitter: @seiyria
 *			- Github:  seiyria
 *		Rohit Kalkur
 *			- Twitter: @Rovolutionary
 *			- Github:  rovolution
 *
 * =========================================================
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
(function(f,e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{if(typeof module==="object"&&module.exports){var g;try{g=require("jquery")}catch(h){g=null}module.exports=e(g)}else{f.Slider=e(f.jQuery)}}}(this,function(c){var d;(function(b){var a=Array.prototype.slice;function g(){}function h(k){if(!k){return}function e(i){if(i.prototype.option){return}i.prototype.option=function(j){if(!k.isPlainObject(j)){return}this.options=k.extend(true,this.options,j)}}var l=typeof console==="undefined"?g:function(i){console.error(i)};function f(j,i){k.fn[j]=function(z){if(typeof z==="string"){var A=a.call(arguments,1);for(var y=0,B=this.length;y<B;y++){var w=this[y];var u=k.data(w,j);if(!u){l("cannot call methods on "+j+" prior to initialization; attempted to call '"+z+"'");continue}if(!k.isFunction(u[z])||z.charAt(0)==="_"){l("no such method '"+z+"' for "+j+" instance");continue}var x=u[z].apply(u,A);if(x!==undefined&&x!==u){return x}}return this}else{var v=this.map(function(){var m=k.data(this,j);if(m){m.option(z);m._init()}else{m=new i(this,z);k.data(this,j,m)}return k(this)});if(!v||v.length>1){return v}else{return v[0]}}}}k.bridget=function(j,i){e(i);f(j,i)};return k.bridget}h(b)})(c);(function(b){var a={formatInvalidInputErrorMsg:function(e){return"Invalid input value '"+e+"' passed in"},callingContextNotSliderInstance:"Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"};var i={linear:{toValue:function(f){var t=f/100*(this.options.max-this.options.min);if(this.options.ticks_positions.length>0){var e,r,v,w=0;for(var s=0;s<this.options.ticks_positions.length;s++){if(f<=this.options.ticks_positions[s]){e=(s>0)?this.options.ticks[s-1]:0;v=(s>0)?this.options.ticks_positions[s-1]:0;r=this.options.ticks[s];w=this.options.ticks_positions[s];break}}if(s>0){var u=(f-v)/(w-v);t=e+u*(r-e)}}var g=this.options.min+Math.round(t/this.options.step)*this.options.step;if(g<this.options.min){return this.options.min}else{if(g>this.options.max){return this.options.max}else{return g}}},toPercentage:function(e){if(this.options.max===this.options.min){return 0}if(this.options.ticks_positions.length>0){var p,q,s,f=0;for(var g=0;g<this.options.ticks.length;g++){if(e<=this.options.ticks[g]){p=(g>0)?this.options.ticks[g-1]:0;s=(g>0)?this.options.ticks_positions[g-1]:0;q=this.options.ticks[g];f=this.options.ticks_positions[g];break}}if(g>0){var r=(e-p)/(q-p);return s+r*(f-s)}}return 100*(e-this.options.min)/(this.options.max-this.options.min)}},logarithmic:{toValue:function(g){var f=(this.options.min===0)?0:Math.log(this.options.min);var l=Math.log(this.options.max);var e=Math.exp(f+(l-f)*g/100);e=this.options.min+Math.round((e-this.options.min)/this.options.step)*this.options.step;if(e<this.options.min){return this.options.min}else{if(e>this.options.max){return this.options.max}else{return e}}},toPercentage:function(e){if(this.options.max===this.options.min){return 0}else{var l=Math.log(this.options.max);var f=this.options.min===0?0:Math.log(this.options.min);var g=e===0?0:Math.log(e);return 100*(g-f)/(l-f)}}}};d=function(e,f){j.call(this,e,f);return this};function j(ac,Z){this._state={value:null,enabled:null,offset:null,size:null,percentage:null,inDrag:false,over:false};if(typeof ac==="string"){this.element=document.querySelector(ac)}else{if(ac instanceof HTMLElement){this.element=ac}}Z=Z?Z:{};var f=Object.keys(this.defaultOptions);for(var T=0;T<f.length;T++){var N=f[T];var g=Z[N];g=(typeof g!=="undefined")?g:K(this.element,N);g=(g!==null)?g:this.defaultOptions[N];if(!this.options){this.options={}}this.options[N]=g}if(this.options.orientation==="vertical"&&(this.options.tooltip_position==="top"||this.options.tooltip_position==="bottom")){this.options.tooltip_position="right"}else{if(this.options.orientation==="horizontal"&&(this.options.tooltip_position==="left"||this.options.tooltip_position==="right")){this.options.tooltip_position="top"}}function K(l,o){var m="data-slider-"+o.replace(/_/g,"-");var n=l.getAttribute(m);try{return JSON.parse(n)}catch(k){return n}}var Y=this.element.style.width;var ad=false;var J=this.element.parentNode;var V;var af,X;var ae;var e;if(this.sliderElem){ad=true}else{this.sliderElem=document.createElement("div");this.sliderElem.className="slider";var ag=document.createElement("div");ag.className="slider-track";af=document.createElement("div");af.className="slider-track-low";V=document.createElement("div");V.className="slider-selection";X=document.createElement("div");X.className="slider-track-high";ae=document.createElement("div");ae.className="slider-handle min-slider-handle";ae.setAttribute("role","slider");ae.setAttribute("aria-valuemin",this.options.min);ae.setAttribute("aria-valuemax",this.options.max);e=document.createElement("div");e.className="slider-handle max-slider-handle";e.setAttribute("role","slider");e.setAttribute("aria-valuemin",this.options.min);e.setAttribute("aria-valuemax",this.options.max);ag.appendChild(af);ag.appendChild(V);ag.appendChild(X);var L=Array.isArray(this.options.labelledby);if(L&&this.options.labelledby[0]){ae.setAttribute("aria-labelledby",this.options.labelledby[0])}if(L&&this.options.labelledby[1]){e.setAttribute("aria-labelledby",this.options.labelledby[1])}if(!L&&this.options.labelledby){ae.setAttribute("aria-labelledby",this.options.labelledby);e.setAttribute("aria-labelledby",this.options.labelledby)}this.ticks=[];if(Array.isArray(this.options.ticks)&&this.options.ticks.length>0){for(T=0;T<this.options.ticks.length;T++){var R=document.createElement("div");R.className="slider-tick";this.ticks.push(R);ag.appendChild(R)}V.className+=" tick-slider-selection"}ag.appendChild(ae);ag.appendChild(e);this.tickLabels=[];if(Array.isArray(this.options.ticks_labels)&&this.options.ticks_labels.length>0){this.tickLabelContainer=document.createElement("div");this.tickLabelContainer.className="slider-tick-label-container";for(T=0;T<this.options.ticks_labels.length;T++){var P=document.createElement("div");var W=this.options.ticks_positions.length===0;var M=(this.options.reversed&&W)?(this.options.ticks_labels.length-(T+1)):T;P.className="slider-tick-label";P.innerHTML=this.options.ticks_labels[M];this.tickLabels.push(P);this.tickLabelContainer.appendChild(P)}}var S=function(l){var k=document.createElement("div");k.className="tooltip-arrow";var m=document.createElement("div");m.className="tooltip-inner";l.appendChild(k);l.appendChild(m)};var Q=document.createElement("div");Q.className="tooltip tooltip-main";Q.setAttribute("role","presentation");S(Q);var ab=document.createElement("div");ab.className="tooltip tooltip-min";ab.setAttribute("role","presentation");S(ab);var aa=document.createElement("div");aa.className="tooltip tooltip-max";aa.setAttribute("role","presentation");S(aa);this.sliderElem.appendChild(ag);this.sliderElem.appendChild(Q);this.sliderElem.appendChild(ab);this.sliderElem.appendChild(aa);if(this.tickLabelContainer){this.sliderElem.appendChild(this.tickLabelContainer)}J.insertBefore(this.sliderElem,this.element);this.element.style.display="none"}if(b){this.$element=b(this.element);this.$sliderElem=b(this.sliderElem)}this.eventToCallbackMap={};this.sliderElem.id=this.options.id;this.touchCapable="ontouchstart" in window||(window.DocumentTouch&&document instanceof window.DocumentTouch);this.tooltip=this.sliderElem.querySelector(".tooltip-main");this.tooltipInner=this.tooltip.querySelector(".tooltip-inner");this.tooltip_min=this.sliderElem.querySelector(".tooltip-min");this.tooltipInner_min=this.tooltip_min.querySelector(".tooltip-inner");this.tooltip_max=this.sliderElem.querySelector(".tooltip-max");this.tooltipInner_max=this.tooltip_max.querySelector(".tooltip-inner");if(i[this.options.scale]){this.options.scale=i[this.options.scale]}if(ad===true){this._removeClass(this.sliderElem,"slider-horizontal");this._removeClass(this.sliderElem,"slider-vertical");this._removeClass(this.tooltip,"hide");this._removeClass(this.tooltip_min,"hide");this._removeClass(this.tooltip_max,"hide");["left","top","width","height"].forEach(function(k){this._removeProperty(this.trackLow,k);this._removeProperty(this.trackSelection,k);this._removeProperty(this.trackHigh,k)},this);[this.handle1,this.handle2].forEach(function(k){this._removeProperty(k,"left");this._removeProperty(k,"top")},this);[this.tooltip,this.tooltip_min,this.tooltip_max].forEach(function(k){this._removeProperty(k,"left");this._removeProperty(k,"top");this._removeProperty(k,"margin-left");this._removeProperty(k,"margin-top");this._removeClass(k,"right");this._removeClass(k,"top")},this)}if(this.options.orientation==="vertical"){this._addClass(this.sliderElem,"slider-vertical");this.stylePos="top";this.mousePos="pageY";this.sizePos="offsetHeight"}else{this._addClass(this.sliderElem,"slider-horizontal");this.sliderElem.style.width=Y;this.options.orientation="horizontal";this.stylePos="left";this.mousePos="pageX";this.sizePos="offsetWidth"}this._setTooltipPosition();if(Array.isArray(this.options.ticks)&&this.options.ticks.length>0){this.options.max=Math.max.apply(Math,this.options.ticks);this.options.min=Math.min.apply(Math,this.options.ticks)}if(Array.isArray(this.options.value)){this.options.range=true;this._state.value=this.options.value}else{if(this.options.range){this._state.value=[this.options.value,this.options.max]}else{this._state.value=this.options.value}}this.trackLow=af||this.trackLow;this.trackSelection=V||this.trackSelection;this.trackHigh=X||this.trackHigh;if(this.options.selection==="none"){this._addClass(this.trackLow,"hide");this._addClass(this.trackSelection,"hide");this._addClass(this.trackHigh,"hide")}this.handle1=ae||this.handle1;this.handle2=e||this.handle2;if(ad===true){this._removeClass(this.handle1,"round triangle");this._removeClass(this.handle2,"round triangle hide");for(T=0;T<this.ticks.length;T++){this._removeClass(this.ticks[T],"round triangle hide")}}var O=["round","triangle","custom"];var U=O.indexOf(this.options.handle)!==-1;if(U){this._addClass(this.handle1,this.options.handle);this._addClass(this.handle2,this.options.handle);for(T=0;T<this.ticks.length;T++){this._addClass(this.ticks[T],this.options.handle)}}this._state.offset=this._offset(this.sliderElem);this._state.size=this.sliderElem[this.sizePos];this.setValue(this._state.value);this.handle1Keydown=this._keydown.bind(this,0);this.handle1.addEventListener("keydown",this.handle1Keydown,false);this.handle2Keydown=this._keydown.bind(this,1);this.handle2.addEventListener("keydown",this.handle2Keydown,false);this.mousedown=this._mousedown.bind(this);if(this.touchCapable){this.sliderElem.addEventListener("touchstart",this.mousedown,false)}this.sliderElem.addEventListener("mousedown",this.mousedown,false);if(this.options.tooltip==="hide"){this._addClass(this.tooltip,"hide");this._addClass(this.tooltip_min,"hide");this._addClass(this.tooltip_max,"hide")}else{if(this.options.tooltip==="always"){this._showTooltip();this._alwaysShowTooltip=true}else{this.showTooltip=this._showTooltip.bind(this);this.hideTooltip=this._hideTooltip.bind(this);this.sliderElem.addEventListener("mouseenter",this.showTooltip,false);this.sliderElem.addEventListener("mouseleave",this.hideTooltip,false);this.handle1.addEventListener("focus",this.showTooltip,false);this.handle1.addEventListener("blur",this.hideTooltip,false);this.handle2.addEventListener("focus",this.showTooltip,false);this.handle2.addEventListener("blur",this.hideTooltip,false)}}if(this.options.enabled){this.enable()}else{this.disable()}}d.prototype={_init:function(){},constructor:d,defaultOptions:{id:"",min:0,max:10,step:1,precision:0,orientation:"horizontal",value:5,range:false,selection:"before",tooltip:"show",tooltip_split:false,handle:"round",reversed:false,enabled:true,formatter:function(e){if(Array.isArray(e)){return e[0]+" : "+e[1]}else{return e}},natural_arrow_keys:false,ticks:[],ticks_positions:[],ticks_labels:[],ticks_snap_bounds:0,scale:"linear",focus:false,tooltip_position:null,labelledby:null},getElement:function(){return this.sliderElem},getValue:function(){if(this.options.range){return this._state.value}else{return this._state.value[0]}},setValue:function(e,g,n){if(!e){e=0}var o=this.getValue();this._state.value=this._validateInputValue(e);var p=this._applyPrecision.bind(this);if(this.options.range){this._state.value[0]=p(this._state.value[0]);this._state.value[1]=p(this._state.value[1]);this._state.value[0]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[0]));this._state.value[1]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[1]))}else{this._state.value=p(this._state.value);this._state.value=[Math.max(this.options.min,Math.min(this.options.max,this._state.value))];this._addClass(this.handle2,"hide");if(this.options.selection==="after"){this._state.value[1]=this.options.max}else{this._state.value[1]=this.options.min}}if(this.options.max>this.options.min){this._state.percentage=[this._toPercentage(this._state.value[0]),this._toPercentage(this._state.value[1]),this.options.step*100/(this.options.max-this.options.min)]}else{this._state.percentage=[0,0,100]}this._layout();var f=this.options.range?this._state.value:this._state.value[0];if(g===true){this._trigger("slide",f)}if((o!==f)&&(n===true)){this._trigger("change",{oldValue:o,newValue:f})}this._setDataVal(f);return this},destroy:function(){this._removeSliderEventHandlers();this.sliderElem.parentNode.removeChild(this.sliderElem);this.element.style.display="";this._cleanUpEventCallbacksMap();this.element.removeAttribute("data");if(b){this._unbindJQueryEventHandlers();this.$element.removeData("slider")}},disable:function(){this._state.enabled=false;this.handle1.removeAttribute("tabindex");this.handle2.removeAttribute("tabindex");this._addClass(this.sliderElem,"slider-disabled");this._trigger("slideDisabled");return this},enable:function(){this._state.enabled=true;this.handle1.setAttribute("tabindex",0);this.handle2.setAttribute("tabindex",0);this._removeClass(this.sliderElem,"slider-disabled");this._trigger("slideEnabled");return this},toggle:function(){if(this._state.enabled){this.disable()}else{this.enable()}return this},isEnabled:function(){return this._state.enabled},on:function(f,e){this._bindNonQueryEventHandler(f,e);return this},off:function(f,e){if(b){this.$element.off(f,e);this.$sliderElem.off(f,e)}else{this._unbindNonQueryEventHandler(f,e)}},getAttribute:function(e){if(e){return this.options[e]}else{return this.options}},setAttribute:function(f,e){this.options[f]=e;return this},refresh:function(){this._removeSliderEventHandlers();j.call(this,this.element,this.options);if(b){b.data(this.element,"slider",this)}return this},relayout:function(){this._layout();return this},_removeSliderEventHandlers:function(){this.handle1.removeEventListener("keydown",this.handle1Keydown,false);this.handle2.removeEventListener("keydown",this.handle2Keydown,false);if(this.showTooltip){this.handle1.removeEventListener("focus",this.showTooltip,false);this.handle2.removeEventListener("focus",this.showTooltip,false)}if(this.hideTooltip){this.handle1.removeEventListener("blur",this.hideTooltip,false);this.handle2.removeEventListener("blur",this.hideTooltip,false)}if(this.showTooltip){this.sliderElem.removeEventListener("mouseenter",this.showTooltip,false)}if(this.hideTooltip){this.sliderElem.removeEventListener("mouseleave",this.hideTooltip,false)}this.sliderElem.removeEventListener("touchstart",this.mousedown,false);this.sliderElem.removeEventListener("mousedown",this.mousedown,false)},_bindNonQueryEventHandler:function(f,e){if(this.eventToCallbackMap[f]===undefined){this.eventToCallbackMap[f]=[]}this.eventToCallbackMap[f].push(e)},_unbindNonQueryEventHandler:function(m,e){var f=this.eventToCallbackMap[m];if(f!==undefined){for(var g=0;g<f.length;g++){if(f[g]===e){f.splice(g,1);break}}}},_cleanUpEventCallbacksMap:function(){var e=Object.keys(this.eventToCallbackMap);for(var f=0;f<e.length;f++){var g=e[f];this.eventToCallbackMap[g]=null}},_showTooltip:function(){if(this.options.tooltip_split===false){this._addClass(this.tooltip,"in");this.tooltip_min.style.display="none";this.tooltip_max.style.display="none"}else{this._addClass(this.tooltip_min,"in");this._addClass(this.tooltip_max,"in");this.tooltip.style.display="none"}this._state.over=true},_hideTooltip:function(){if(this._state.inDrag===false&&this.alwaysShowTooltip!==true){this._removeClass(this.tooltip,"in");this._removeClass(this.tooltip_min,"in");this._removeClass(this.tooltip_max,"in")}this._state.over=false},_layout:function(){var C;if(this.options.reversed){C=[100-this._state.percentage[0],this.options.range?100-this._state.percentage[1]:this._state.percentage[1]]}else{C=[this._state.percentage[0],this._state.percentage[1]]}this.handle1.style[this.stylePos]=C[0]+"%";this.handle1.setAttribute("aria-valuenow",this._state.value[0]);this.handle2.style[this.stylePos]=C[1]+"%";this.handle2.setAttribute("aria-valuenow",this._state.value[1]);if(Array.isArray(this.options.ticks)&&this.options.ticks.length>0){var A=this.options.orientation==="vertical"?"height":"width";var f=this.options.orientation==="vertical"?"marginTop":"marginLeft";var y=this._state.size/(this.options.ticks.length-1);if(this.tickLabelContainer){var g=0;if(this.options.ticks_positions.length===0){if(this.options.orientation!=="vertical"){this.tickLabelContainer.style[f]=-y/2+"px"}g=this.tickLabelContainer.offsetHeight}else{for(w=0;w<this.tickLabelContainer.childNodes.length;w++){if(this.tickLabelContainer.childNodes[w].offsetHeight>g){g=this.tickLabelContainer.childNodes[w].offsetHeight}}}if(this.options.orientation==="horizontal"){this.sliderElem.style.marginBottom=g+"px"}}for(var w=0;w<this.options.ticks.length;w++){var B=this.options.ticks_positions[w]||this._toPercentage(this.options.ticks[w]);if(this.options.reversed){B=100-B}this.ticks[w].style[this.stylePos]=B+"%";this._removeClass(this.ticks[w],"in-selection");if(!this.options.range){if(this.options.selection==="after"&&B>=C[0]){this._addClass(this.ticks[w],"in-selection")}else{if(this.options.selection==="before"&&B<=C[0]){this._addClass(this.ticks[w],"in-selection")}}}else{if(B>=C[0]&&B<=C[1]){this._addClass(this.ticks[w],"in-selection")}}if(this.tickLabels[w]){this.tickLabels[w].style[A]=y+"px";if(this.options.orientation!=="vertical"&&this.options.ticks_positions[w]!==undefined){this.tickLabels[w].style.position="absolute";this.tickLabels[w].style[this.stylePos]=B+"%";this.tickLabels[w].style[f]=-y/2+"px"}else{if(this.options.orientation==="vertical"){this.tickLabels[w].style.marginLeft=this.sliderElem.offsetWidth+"px";this.tickLabelContainer.style.marginTop=this.sliderElem.offsetWidth/2*-1+"px"}}}}}var x;if(this.options.range){x=this.options.formatter(this._state.value);this._setText(this.tooltipInner,x);this.tooltip.style[this.stylePos]=(C[1]+C[0])/2+"%";if(this.options.orientation==="vertical"){this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px")}else{this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px")}if(this.options.orientation==="vertical"){this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px")}else{this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px")}var e=this.options.formatter(this._state.value[0]);this._setText(this.tooltipInner_min,e);var v=this.options.formatter(this._state.value[1]);this._setText(this.tooltipInner_max,v);this.tooltip_min.style[this.stylePos]=C[0]+"%";if(this.options.orientation==="vertical"){this._css(this.tooltip_min,"margin-top",-this.tooltip_min.offsetHeight/2+"px")}else{this._css(this.tooltip_min,"margin-left",-this.tooltip_min.offsetWidth/2+"px")}this.tooltip_max.style[this.stylePos]=C[1]+"%";if(this.options.orientation==="vertical"){this._css(this.tooltip_max,"margin-top",-this.tooltip_max.offsetHeight/2+"px")}else{this._css(this.tooltip_max,"margin-left",-this.tooltip_max.offsetWidth/2+"px")}}else{x=this.options.formatter(this._state.value[0]);this._setText(this.tooltipInner,x);this.tooltip.style[this.stylePos]=C[0]+"%";if(this.options.orientation==="vertical"){this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px")}else{this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px")}}if(this.options.orientation==="vertical"){this.trackLow.style.top="0";this.trackLow.style.height=Math.min(C[0],C[1])+"%";this.trackSelection.style.top=Math.min(C[0],C[1])+"%";this.trackSelection.style.height=Math.abs(C[0]-C[1])+"%";this.trackHigh.style.bottom="0";this.trackHigh.style.height=(100-Math.min(C[0],C[1])-Math.abs(C[0]-C[1]))+"%"}else{this.trackLow.style.left="0";this.trackLow.style.width=Math.min(C[0],C[1])+"%";this.trackSelection.style.left=Math.min(C[0],C[1])+"%";this.trackSelection.style.width=Math.abs(C[0]-C[1])+"%";this.trackHigh.style.right="0";this.trackHigh.style.width=(100-Math.min(C[0],C[1])-Math.abs(C[0]-C[1]))+"%";var z=this.tooltip_min.getBoundingClientRect();var u=this.tooltip_max.getBoundingClientRect();if(z.right>u.left){this._removeClass(this.tooltip_max,"top");this._addClass(this.tooltip_max,"bottom");this.tooltip_max.style.top=18+"px"}else{this._removeClass(this.tooltip_max,"bottom");this._addClass(this.tooltip_max,"top");this.tooltip_max.style.top=this.tooltip_min.style.top}}},_removeProperty:function(f,e){if(f.style.removeProperty){f.style.removeProperty(e)}else{f.style.removeAttribute(e)}},_mousedown:function(m){if(!this._state.enabled){return false}this._state.offset=this._offset(this.sliderElem);this._state.size=this.sliderElem[this.sizePos];var n=this._getPercentage(m);if(this.options.range){var e=Math.abs(this._state.percentage[0]-n);var f=Math.abs(this._state.percentage[1]-n);this._state.dragged=(e<f)?0:1}else{this._state.dragged=0}this._state.percentage[this._state.dragged]=n;this._layout();if(this.touchCapable){document.removeEventListener("touchmove",this.mousemove,false);document.removeEventListener("touchend",this.mouseup,false)}if(this.mousemove){document.removeEventListener("mousemove",this.mousemove,false)}if(this.mouseup){document.removeEventListener("mouseup",this.mouseup,false)}this.mousemove=this._mousemove.bind(this);this.mouseup=this._mouseup.bind(this);if(this.touchCapable){document.addEventListener("touchmove",this.mousemove,false);document.addEventListener("touchend",this.mouseup,false)}document.addEventListener("mousemove",this.mousemove,false);document.addEventListener("mouseup",this.mouseup,false);this._state.inDrag=true;var g=this._calculateValue();this._trigger("slideStart",g);this._setDataVal(g);this.setValue(g,false,true);this._pauseEvent(m);if(this.options.focus){this._triggerFocusOnHandle(this._state.dragged)}return true},_triggerFocusOnHandle:function(e){if(e===0){this.handle1.focus()}if(e===1){this.handle2.focus()}},_keydown:function(f,g){if(!this._state.enabled){return false}var n;switch(g.keyCode){case 37:case 40:n=-1;break;case 39:case 38:n=1;break}if(!n){return}if(this.options.natural_arrow_keys){var p=(this.options.orientation==="vertical"&&!this.options.reversed);var o=(this.options.orientation==="horizontal"&&this.options.reversed);if(p||o){n=-n}}var e=this._state.value[f]+n*this.options.step;if(this.options.range){e=[(!f)?e:this._state.value[0],(f)?e:this._state.value[1]]}this._trigger("slideStart",e);this._setDataVal(e);this.setValue(e,true,true);this._setDataVal(e);this._trigger("slideStop",e);this._layout();this._pauseEvent(g);return false},_pauseEvent:function(e){if(e.stopPropagation){e.stopPropagation()}if(e.preventDefault){e.preventDefault()}e.cancelBubble=true;e.returnValue=false},_mousemove:function(f){if(!this._state.enabled){return false}var g=this._getPercentage(f);this._adjustPercentageForRangeSliders(g);this._state.percentage[this._state.dragged]=g;this._layout();var e=this._calculateValue(true);this.setValue(e,true,true);return false},_adjustPercentageForRangeSliders:function(e){if(this.options.range){var f=this._getNumDigitsAfterDecimalPlace(e);f=f?f-1:0;var g=this._applyToFixedAndParseFloat(e,f);if(this._state.dragged===0&&this._applyToFixedAndParseFloat(this._state.percentage[1],f)<g){this._state.percentage[0]=this._state.percentage[1];this._state.dragged=1}else{if(this._state.dragged===1&&this._applyToFixedAndParseFloat(this._state.percentage[0],f)>g){this._state.percentage[1]=this._state.percentage[0];this._state.dragged=0}}}},_mouseup:function(){if(!this._state.enabled){return false}if(this.touchCapable){document.removeEventListener("touchmove",this.mousemove,false);document.removeEventListener("touchend",this.mouseup,false)}document.removeEventListener("mousemove",this.mousemove,false);document.removeEventListener("mouseup",this.mouseup,false);this._state.inDrag=false;if(this._state.over===false){this._hideTooltip()}var e=this._calculateValue(true);this._layout();this._setDataVal(e);this._trigger("slideStop",e);return false},_calculateValue:function(o){var e;if(this.options.range){e=[this.options.min,this.options.max];if(this._state.percentage[0]!==0){e[0]=this._toValue(this._state.percentage[0]);e[0]=this._applyPrecision(e[0])}if(this._state.percentage[1]!==100){e[1]=this._toValue(this._state.percentage[1]);e[1]=this._applyPrecision(e[1])}}else{e=this._toValue(this._state.percentage[0]);e=parseFloat(e);e=this._applyPrecision(e)}if(o){var g=[e,Infinity];for(var n=0;n<this.options.ticks.length;n++){var f=Math.abs(this.options.ticks[n]-e);if(f<=g[1]){g=[this.options.ticks[n],f]}}if(g[1]<=this.options.ticks_snap_bounds){return g[0]}}return e},_applyPrecision:function(e){var f=this.options.precision||this._getNumDigitsAfterDecimalPlace(this.options.step);return this._applyToFixedAndParseFloat(e,f)},_getNumDigitsAfterDecimalPlace:function(e){var f=(""+e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);if(!f){return 0}return Math.max(0,(f[1]?f[1].length:0)-(f[2]?+f[2]:0))},_applyToFixedAndParseFloat:function(f,g){var e=f.toFixed(g);return parseFloat(e)},_getPercentage:function(g){if(this.touchCapable&&(g.type==="touchstart"||g.type==="touchmove")){g=g.touches[0]}var m=g[this.mousePos];var e=this._state.offset[this.stylePos];var f=m-e;var n=(f/this._state.size)*100;n=Math.round(n/this._state.percentage[2])*this._state.percentage[2];if(this.options.reversed){n=100-n}return Math.max(0,Math.min(100,n))},_validateInputValue:function(e){if(typeof e==="number"){return e}else{if(Array.isArray(e)){this._validateArray(e);return e}else{throw new Error(a.formatInvalidInputErrorMsg(e))}}},_validateArray:function(e){for(var f=0;f<e.length;f++){var g=e[f];if(typeof g!=="number"){throw new Error(a.formatInvalidInputErrorMsg(g))}}},_setDataVal:function(e){this.element.setAttribute("data-value",e);this.element.setAttribute("value",e);this.element.value=e},_trigger:function(o,e){e=(e||e===0)?e:undefined;var f=this.eventToCallbackMap[o];if(f&&f.length){for(var g=0;g<f.length;g++){var n=f[g];n(e)}}if(b){this._triggerJQueryEvent(o,e)}},_triggerJQueryEvent:function(g,e){var f={type:g,value:e};this.$element.trigger(f);this.$sliderElem.trigger(f)},_unbindJQueryEventHandlers:function(){this.$element.off();this.$sliderElem.off()},_setText:function(f,e){if(typeof f.innerText!=="undefined"){f.innerText=e}else{if(typeof f.textContent!=="undefined"){f.textContent=e}}},_removeClass:function(g,e){var p=e.split(" ");var r=g.className;for(var q=0;q<p.length;q++){var s=p[q];var f=new RegExp("(?:\\s|^)"+s+"(?:\\s|$)");r=r.replace(f," ")}g.className=r.trim()},_addClass:function(g,e){var q=e.split(" ");var s=g.className;for(var r=0;r<q.length;r++){var t=q[r];var f=new RegExp("(?:\\s|^)"+t+"(?:\\s|$)");var u=f.test(s);if(!u){s+=" "+t}}g.className=s.trim()},_offsetLeft:function(e){return e.getBoundingClientRect().left},_offsetTop:function(e){var f=e.offsetTop;while((e=e.offsetParent)&&!isNaN(e.offsetTop)){f+=e.offsetTop}return f},_offset:function(e){return{left:this._offsetLeft(e),top:this._offsetTop(e)}},_css:function(e,l,f){if(b){b.style(e,l,f)}else{var g=l.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(n,k){return k.toUpperCase()});e.style[g]=f}},_toValue:function(e){return this.options.scale.toValue.apply(this,[e])},_toPercentage:function(e){return this.options.scale.toPercentage.apply(this,[e])},_setTooltipPosition:function(){var g=[this.tooltip,this.tooltip_min,this.tooltip_max];if(this.options.orientation==="vertical"){var f=this.options.tooltip_position||"right";var e=(f==="left")?"right":"left";g.forEach(function(l){this._addClass(l,f);l.style[e]="100%"}.bind(this))}else{if(this.options.tooltip_position==="bottom"){g.forEach(function(l){this._addClass(l,"bottom");l.style.top=22+"px"}.bind(this))}else{g.forEach(function(l){this._addClass(l,"top");l.style.top=-this.tooltip.outerHeight-14+"px"}.bind(this))}}}};if(b){var h=b.fn.slider?"bootstrapSlider":"slider";b.bridget(h,d)}})(c);return d}));