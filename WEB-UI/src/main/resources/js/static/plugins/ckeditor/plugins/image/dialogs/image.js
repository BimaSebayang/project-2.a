(function(){var a=function(S,O){function i(){var e=arguments,d=this.getContentElement("advanced","txtdlgGenStyle");d&&d.commit.apply(d,e);this.foreach(function(h){h.commit&&"txtdlgGenStyle"!=h.id&&h.commit.apply(h,e)})}function P(h){if(!g){g=1;var e=this.getDialog(),n=e.imageElement;if(n){this.commit(1,n);h=[].concat(h);for(var m=h.length,l,k=0;k<m;k++){(l=e.getContentElement.apply(e,h[k].split(":")))&&l.setup(1,n)}}g=0}}var N=/^\s*(\d+)((px)|\%)?\s*$/i,b=/(^\s*(\d+)((px)|\%)?\s*$)|^$/i,H=/^\d+px$/,L=function(){var e=this.getValue(),d=this.getDialog(),h=e.match(N);h&&("%"==h[2]&&M(d,!1),e=h[1]);d.lockRatio&&(h=d.originalElement,"true"==h.getCustomData("isReady")&&("txtHeight"==this.id?(e&&"0"!=e&&(e=Math.round(e/h.$.height*h.$.width)),isNaN(e)||d.setValueOf("info","txtWidth",e)):(e&&"0"!=e&&(e=Math.round(e/h.$.width*h.$.height)),isNaN(e)||d.setValueOf("info","txtHeight",e))));R(d)},R=function(d){if(!d.originalElement||!d.preview){return 1}d.commitContent(4,d.preview);return 0},g,M=function(h,e){if(!h.getContentElement("info","ratioLock")){return null}var n=h.originalElement;if(!n){return null}if("check"==e){if(!h.userlockRatio&&"true"==n.getCustomData("isReady")){var m=h.getValueOf("info","txtWidth"),l=h.getValueOf("info","txtHeight"),n=1000*n.$.width/n.$.height,k=1000*m/l;h.lockRatio=!1;m||l?isNaN(n)||isNaN(k)||Math.round(n)!=Math.round(k)||(h.lockRatio=!0):h.lockRatio=!0}}else{void 0!==e?h.lockRatio=e:(h.userlockRatio=1,h.lockRatio=!h.lockRatio)}m=CKEDITOR.document.getById(s);h.lockRatio?m.removeClass("cke_btn_unlocked"):m.addClass("cke_btn_unlocked");m.setAttribute("aria-checked",h.lockRatio);CKEDITOR.env.hc&&m.getChild(0).setHtml(h.lockRatio?CKEDITOR.env.ie?"■":"▣":CKEDITOR.env.ie?"□":"▢");return h.lockRatio},I=function(h,e){var n=h.originalElement;if("true"==n.getCustomData("isReady")){var m=h.getContentElement("info","txtWidth"),l=h.getContentElement("info","txtHeight"),k;e?n=k=0:(k=n.$.width,n=n.$.height);m&&m.setValue(k);l&&l.setValue(n)}R(h)},G=function(k,h){function q(e,d){var r=e.match(N);return r?("%"==r[2]&&(r[1]+="%",M(p,!1)),r[1]):d}if(1==k){var p=this.getDialog(),m="",l="txtWidth"==this.id?"width":"height",n=h.getAttribute(l);n&&(m=q(n,m));m=q(h.getStyle(l),m);this.setValue(m)}},f,j=function(){var e=this.originalElement,d=CKEDITOR.document.getById(K);e.setCustomData("isReady","true");e.removeListener("load",j);e.removeListener("error",Q);e.removeListener("abort",Q);d&&d.setStyle("display","none");this.dontResetSize||I(this,!1===S.config.image_prefillDimensions);this.firstLoad&&CKEDITOR.tools.setTimeout(function(){M(this,"check")},0,this);this.dontResetSize=this.firstLoad=!1;R(this)},Q=function(){var e=this.originalElement,d=CKEDITOR.document.getById(K);e.removeListener("load",j);e.removeListener("error",Q);e.removeListener("abort",Q);e=CKEDITOR.getUrl(CKEDITOR.plugins.get("image").path+"images/noimage.png");this.preview&&this.preview.setAttribute("src",e);d&&d.setStyle("display","none");M(this,!1)},J=function(d){return CKEDITOR.tools.getNextId()+"_"+d},s=J("btnLockSizes"),c=J("btnResetSize"),K=J("ImagePreviewLoader"),o=J("previewLink"),F=J("previewImage");return{title:S.lang.image["image"==O?"title":"titleButton"],minWidth:420,minHeight:360,onShow:function(){this.linkEditMode=this.imageEditMode=this.linkElement=this.imageElement=!1;this.lockRatio=!0;this.userlockRatio=0;this.dontResetSize=!1;this.firstLoad=!0;this.addLink=!1;var h=this.getParentEditor(),e=h.getSelection(),l=(e=e&&e.getSelectedElement())&&h.elementPath(e).contains("a",1),k=CKEDITOR.document.getById(K);k&&k.setStyle("display","none");f=new CKEDITOR.dom.element("img",h.document);this.preview=CKEDITOR.document.getById(F);this.originalElement=h.document.createElement("img");this.originalElement.setAttribute("alt","");this.originalElement.setCustomData("isReady","false");l&&(this.linkElement=l,this.addLink=this.linkEditMode=!0,h=l.getChildren(),1==h.count()&&(k=h.getItem(0),k.type==CKEDITOR.NODE_ELEMENT&&(k.is("img")||k.is("input"))&&(this.imageElement=h.getItem(0),this.imageElement.is("img")?this.imageEditMode="img":this.imageElement.is("input")&&(this.imageEditMode="input"))),"image"==O&&this.setupContent(2,l));if(this.customImageElement){this.imageEditMode="img",this.imageElement=this.customImageElement,delete this.customImageElement}else{if(e&&"img"==e.getName()&&!e.data("cke-realelement")||e&&"input"==e.getName()&&"image"==e.getAttribute("type")){this.imageEditMode=e.getName(),this.imageElement=e}}this.imageEditMode&&(this.cleanImageElement=this.imageElement,this.imageElement=this.cleanImageElement.clone(!0,!0),this.setupContent(1,this.imageElement));M(this,!0);CKEDITOR.tools.trim(this.getValueOf("info","txtUrl"))||(this.preview.removeAttribute("src"),this.preview.setStyle("display","none"))},onOk:function(){if(this.imageEditMode){var d=this.imageEditMode;"image"==O&&"input"==d&&confirm(S.lang.image.button2Img)?(this.imageElement=S.document.createElement("img"),this.imageElement.setAttribute("alt",""),S.insertElement(this.imageElement)):"image"!=O&&"img"==d&&confirm(S.lang.image.img2Button)?(this.imageElement=S.document.createElement("input"),this.imageElement.setAttributes({type:"image",alt:""}),S.insertElement(this.imageElement)):(this.imageElement=this.cleanImageElement,delete this.cleanImageElement)}else{"image"==O?this.imageElement=S.document.createElement("img"):(this.imageElement=S.document.createElement("input"),this.imageElement.setAttribute("type","image")),this.imageElement.setAttribute("alt","")}this.linkEditMode||(this.linkElement=S.document.createElement("a"));this.commitContent(1,this.imageElement);this.commitContent(2,this.linkElement);this.imageElement.getAttribute("style")||this.imageElement.removeAttribute("style");this.imageEditMode?!this.linkEditMode&&this.addLink?(S.insertElement(this.linkElement),this.imageElement.appendTo(this.linkElement)):this.linkEditMode&&!this.addLink&&(S.getSelection().selectElement(this.linkElement),S.insertElement(this.imageElement)):this.addLink?this.linkEditMode?this.linkElement.equals(S.getSelection().getSelectedElement())?(this.linkElement.setHtml(""),this.linkElement.append(this.imageElement,!1)):S.insertElement(this.imageElement):(S.insertElement(this.linkElement),this.linkElement.append(this.imageElement,!1)):S.insertElement(this.imageElement)},onLoad:function(){"image"!=O&&this.hidePage("Link");var d=this._.element.getDocument();this.getContentElement("info","ratioLock")&&(this.addFocusable(d.getById(c),5),this.addFocusable(d.getById(s),5));this.commitContent=i},onHide:function(){this.preview&&this.commitContent(8,this.preview);this.originalElement&&(this.originalElement.removeListener("load",j),this.originalElement.removeListener("error",Q),this.originalElement.removeListener("abort",Q),this.originalElement.remove(),this.originalElement=!1);delete this.imageElement},contents:[{id:"info",label:S.lang.image.infoTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",children:[{id:"txtUrl",type:"text",label:S.lang.common.url,required:!0,onChange:function(){var h=this.getDialog(),e=this.getValue();if(0<e.length){var h=this.getDialog(),l=h.originalElement;h.preview&&h.preview.removeStyle("display");l.setCustomData("isReady","false");var k=CKEDITOR.document.getById(K);k&&k.setStyle("display","");l.on("load",j,h);l.on("error",Q,h);l.on("abort",Q,h);l.setAttribute("src",e);h.preview&&(f.setAttribute("src",e),h.preview.setAttribute("src",f.$.src),R(h))}else{h.preview&&(h.preview.removeAttribute("src"),h.preview.setStyle("display","none"))}},setup:function(e,d){if(1==e){var h=d.data("cke-saved-src")||d.getAttribute("src");this.getDialog().dontResetSize=!0;this.setValue(h);this.setInitValue()}},commit:function(e,d){1==e&&(this.getValue()||this.isChanged())?(d.data("cke-saved-src",this.getValue()),d.setAttribute("src",this.getValue())):8==e&&(d.setAttribute("src",""),d.removeAttribute("src"))},validate:CKEDITOR.dialog.validate.notEmpty(S.lang.image.urlMissing)},{type:"button",id:"browse",style:"display:inline-block;margin-top:14px;",align:"center",label:S.lang.common.browseServer,hidden:!0,filebrowser:"info:txtUrl"}]}]},{id:"txtAlt",type:"text",label:S.lang.image.alt,accessKey:"T","default":"",onChange:function(){R(this.getDialog())},setup:function(e,d){1==e&&this.setValue(d.getAttribute("alt"))},commit:function(e,d){1==e?(this.getValue()||this.isChanged())&&d.setAttribute("alt",this.getValue()):4==e?d.setAttribute("alt",this.getValue()):8==e&&d.removeAttribute("alt")}},{type:"hbox",children:[{id:"basic",type:"vbox",children:[{type:"hbox",requiredContent:"img{width,height}",widths:["50%","50%"],children:[{type:"vbox",padding:1,children:[{type:"text",width:"45px",id:"txtWidth",label:S.lang.common.width,onKeyUp:L,onChange:function(){P.call(this,"advanced:txtdlgGenStyle")},validate:function(){var d=this.getValue().match(b);(d=!(!d||0===parseInt(d[1],10)))||alert(S.lang.common.invalidWidth);return d},setup:G,commit:function(e,d){var h=this.getValue();1==e?(h&&S.activeFilter.check("img{width,height}")?d.setStyle("width",CKEDITOR.tools.cssLength(h)):d.removeStyle("width"),d.removeAttribute("width")):4==e?h.match(N)?d.setStyle("width",CKEDITOR.tools.cssLength(h)):(h=this.getDialog().originalElement,"true"==h.getCustomData("isReady")&&d.setStyle("width",h.$.width+"px")):8==e&&(d.removeAttribute("width"),d.removeStyle("width"))}},{type:"text",id:"txtHeight",width:"45px",label:S.lang.common.height,onKeyUp:L,onChange:function(){P.call(this,"advanced:txtdlgGenStyle")},validate:function(){var d=this.getValue().match(b);(d=!(!d||0===parseInt(d[1],10)))||alert(S.lang.common.invalidHeight);return d},setup:G,commit:function(e,d){var h=this.getValue();1==e?(h&&S.activeFilter.check("img{width,height}")?d.setStyle("height",CKEDITOR.tools.cssLength(h)):d.removeStyle("height"),d.removeAttribute("height")):4==e?h.match(N)?d.setStyle("height",CKEDITOR.tools.cssLength(h)):(h=this.getDialog().originalElement,"true"==h.getCustomData("isReady")&&d.setStyle("height",h.$.height+"px")):8==e&&(d.removeAttribute("height"),d.removeStyle("height"))}}]},{id:"ratioLock",type:"html",style:"margin-top:30px;width:40px;height:40px;",onLoad:function(){var e=CKEDITOR.document.getById(c),d=CKEDITOR.document.getById(s);e&&(e.on("click",function(h){I(this);h.data&&h.data.preventDefault()},this.getDialog()),e.on("mouseover",function(){this.addClass("cke_btn_over")},e),e.on("mouseout",function(){this.removeClass("cke_btn_over")},e));d&&(d.on("click",function(k){M(this);var h=this.originalElement,l=this.getValueOf("info","txtWidth");"true"==h.getCustomData("isReady")&&l&&(h=h.$.height/h.$.width*l,isNaN(h)||(this.setValueOf("info","txtHeight",Math.round(h)),R(this)));k.data&&k.data.preventDefault()},this.getDialog()),d.on("mouseover",function(){this.addClass("cke_btn_over")},d),d.on("mouseout",function(){this.removeClass("cke_btn_over")},d))},html:'\x3cdiv\x3e\x3ca href\x3d"javascript:void(0)" tabindex\x3d"-1" title\x3d"'+S.lang.image.lockRatio+'" class\x3d"cke_btn_locked" id\x3d"'+s+'" role\x3d"checkbox"\x3e\x3cspan class\x3d"cke_icon"\x3e\x3c/span\x3e\x3cspan class\x3d"cke_label"\x3e'+S.lang.image.lockRatio+'\x3c/span\x3e\x3c/a\x3e\x3ca href\x3d"javascript:void(0)" tabindex\x3d"-1" title\x3d"'+S.lang.image.resetSize+'" class\x3d"cke_btn_reset" id\x3d"'+c+'" role\x3d"button"\x3e\x3cspan class\x3d"cke_label"\x3e'+S.lang.image.resetSize+"\x3c/span\x3e\x3c/a\x3e\x3c/div\x3e"}]},{type:"vbox",padding:1,children:[{type:"text",id:"txtBorder",requiredContent:"img{border-width}",width:"60px",label:S.lang.image.border,"default":"",onKeyUp:function(){R(this.getDialog())},onChange:function(){P.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(S.lang.image.validateBorder),setup:function(e,d){if(1==e){var h;h=(h=(h=d.getStyle("border-width"))&&h.match(/^(\d+px)(?: \1 \1 \1)?$/))&&parseInt(h[1],10);isNaN(parseInt(h,10))&&(h=d.getAttribute("border"));this.setValue(h)}},commit:function(e,d){var h=parseInt(this.getValue(),10);1==e||4==e?(isNaN(h)?!h&&this.isChanged()&&d.removeStyle("border"):(d.setStyle("border-width",CKEDITOR.tools.cssLength(h)),d.setStyle("border-style","solid")),1==e&&d.removeAttribute("border")):8==e&&(d.removeAttribute("border"),d.removeStyle("border-width"),d.removeStyle("border-style"),d.removeStyle("border-color"))}},{type:"text",id:"txtHSpace",requiredContent:"img{margin-left,margin-right}",width:"60px",label:S.lang.image.hSpace,"default":"",onKeyUp:function(){R(this.getDialog())},onChange:function(){P.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(S.lang.image.validateHSpace),setup:function(h,e){if(1==h){var l,k;l=e.getStyle("margin-left");k=e.getStyle("margin-right");l=l&&l.match(H);k=k&&k.match(H);l=parseInt(l,10);k=parseInt(k,10);l=l==k&&l;isNaN(parseInt(l,10))&&(l=e.getAttribute("hspace"));this.setValue(l)}},commit:function(e,d){var h=parseInt(this.getValue(),10);1==e||4==e?(isNaN(h)?!h&&this.isChanged()&&(d.removeStyle("margin-left"),d.removeStyle("margin-right")):(d.setStyle("margin-left",CKEDITOR.tools.cssLength(h)),d.setStyle("margin-right",CKEDITOR.tools.cssLength(h))),1==e&&d.removeAttribute("hspace")):8==e&&(d.removeAttribute("hspace"),d.removeStyle("margin-left"),d.removeStyle("margin-right"))}},{type:"text",id:"txtVSpace",requiredContent:"img{margin-top,margin-bottom}",width:"60px",label:S.lang.image.vSpace,"default":"",onKeyUp:function(){R(this.getDialog())},onChange:function(){P.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(S.lang.image.validateVSpace),setup:function(h,e){if(1==h){var l,k;l=e.getStyle("margin-top");k=e.getStyle("margin-bottom");l=l&&l.match(H);k=k&&k.match(H);l=parseInt(l,10);k=parseInt(k,10);l=l==k&&l;isNaN(parseInt(l,10))&&(l=e.getAttribute("vspace"));this.setValue(l)}},commit:function(e,d){var h=parseInt(this.getValue(),10);1==e||4==e?(isNaN(h)?!h&&this.isChanged()&&(d.removeStyle("margin-top"),d.removeStyle("margin-bottom")):(d.setStyle("margin-top",CKEDITOR.tools.cssLength(h)),d.setStyle("margin-bottom",CKEDITOR.tools.cssLength(h))),1==e&&d.removeAttribute("vspace")):8==e&&(d.removeAttribute("vspace"),d.removeStyle("margin-top"),d.removeStyle("margin-bottom"))}},{id:"cmbAlign",requiredContent:"img{float}",type:"select",widths:["35%","65%"],style:"width:90px",label:S.lang.common.align,"default":"",items:[[S.lang.common.notSet,""],[S.lang.common.alignLeft,"left"],[S.lang.common.alignRight,"right"]],onChange:function(){R(this.getDialog());P.call(this,"advanced:txtdlgGenStyle")},setup:function(e,d){if(1==e){var h=d.getStyle("float");switch(h){case"inherit":case"none":h=""}!h&&(h=(d.getAttribute("align")||"").toLowerCase());this.setValue(h)}},commit:function(e,d){var h=this.getValue();if(1==e||4==e){if(h?d.setStyle("float",h):d.removeStyle("float"),1==e){switch(h=(d.getAttribute("align")||"").toLowerCase(),h){case"left":case"right":d.removeAttribute("align")}}}else{8==e&&d.removeStyle("float")}}}]}]},{type:"vbox",height:"250px",children:[{type:"html",id:"htmlPreview",style:"width:95%;",html:"\x3cdiv\x3e"+CKEDITOR.tools.htmlEncode(S.lang.common.preview)+'\x3cbr\x3e\x3cdiv id\x3d"'+K+'" class\x3d"ImagePreviewLoader" style\x3d"display:none"\x3e\x3cdiv class\x3d"loading"\x3e\x26nbsp;\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"ImagePreviewBox"\x3e\x3ctable\x3e\x3ctr\x3e\x3ctd\x3e\x3ca href\x3d"javascript:void(0)" target\x3d"_blank" onclick\x3d"return false;" id\x3d"'+o+'"\x3e\x3cimg id\x3d"'+F+'" alt\x3d"" /\x3e\x3c/a\x3e'+(S.config.image_previewText||"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas feugiat consequat diam. Maecenas metus. Vivamus diam purus, cursus a, commodo non, facilisis vitae, nulla. Aenean dictum lacinia tortor. Nunc iaculis, nibh non iaculis aliquam, orci felis euismod neque, sed ornare massa mauris sed velit. Nulla pretium mi et risus. Fusce mi pede, tempor id, cursus ac, ullamcorper nec, enim. Sed tortor. Curabitur molestie. Duis velit augue, condimentum at, ultrices a, luctus ut, orci. Donec pellentesque egestas eros. Integer cursus, augue in cursus faucibus, eros pede bibendum sem, in tempus tellus justo quis ligula. Etiam eget tortor. Vestibulum rutrum, est ut placerat elementum, lectus nisl aliquam velit, tempor aliquam eros nunc nonummy metus. In eros metus, gravida a, gravida sed, lobortis id, turpis. Ut ultrices, ipsum at venenatis fringilla, sem nulla lacinia tellus, eget aliquet turpis mauris non enim. Nam turpis. Suspendisse lacinia. Curabitur ac tortor ut ipsum egestas elementum. Nunc imperdiet gravida mauris.")+"\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3c/div\x3e"}]}]}]},{id:"Link",requiredContent:"a[href]",label:S.lang.image.linkTab,padding:0,elements:[{id:"txtUrl",type:"text",label:S.lang.common.url,style:"width: 100%","default":"",setup:function(e,d){if(2==e){var h=d.data("cke-saved-href");h||(h=d.getAttribute("href"));this.setValue(h)}},commit:function(e,d){if(2==e&&(this.getValue()||this.isChanged())){var h=this.getValue();d.data("cke-saved-href",h);d.setAttribute("href",h);this.getValue()||!S.config.image_removeLinkByEmptyURL?this.getDialog().addLink=!0:this.getDialog().addLink=!1}}},{type:"button",id:"browse",filebrowser:{action:"Browse",target:"Link:txtUrl",url:S.config.filebrowserImageBrowseLinkUrl},style:"float:right",hidden:!0,label:S.lang.common.browseServer},{id:"cmbTarget",type:"select",requiredContent:"a[target]",label:S.lang.common.target,"default":"",items:[[S.lang.common.notSet,""],[S.lang.common.targetNew,"_blank"],[S.lang.common.targetTop,"_top"],[S.lang.common.targetSelf,"_self"],[S.lang.common.targetParent,"_parent"]],setup:function(e,d){2==e&&this.setValue(d.getAttribute("target")||"")},commit:function(e,d){2==e&&(this.getValue()||this.isChanged())&&d.setAttribute("target",this.getValue())}}]},{id:"Upload",hidden:!0,filebrowser:"uploadButton",label:S.lang.image.upload,elements:[{type:"file",id:"upload",label:S.lang.image.btnUpload,style:"height:40px",size:38},{type:"fileButton",id:"uploadButton",filebrowser:"info:txtUrl",label:S.lang.image.btnUpload,"for":["Upload","upload"]}]},{id:"advanced",label:S.lang.common.advancedTab,elements:[{type:"hbox",widths:["50%","25%","25%"],children:[{type:"text",id:"linkId",requiredContent:"img[id]",label:S.lang.common.id,setup:function(e,d){1==e&&this.setValue(d.getAttribute("id"))},commit:function(e,d){1==e&&(this.getValue()||this.isChanged())&&d.setAttribute("id",this.getValue())}},{id:"cmbLangDir",type:"select",requiredContent:"img[dir]",style:"width : 100px;",label:S.lang.common.langDir,"default":"",items:[[S.lang.common.notSet,""],[S.lang.common.langDirLtr,"ltr"],[S.lang.common.langDirRtl,"rtl"]],setup:function(e,d){1==e&&this.setValue(d.getAttribute("dir"))},commit:function(e,d){1==e&&(this.getValue()||this.isChanged())&&d.setAttribute("dir",this.getValue())}},{type:"text",id:"txtLangCode",requiredContent:"img[lang]",label:S.lang.common.langCode,"default":"",setup:function(e,d){1==e&&this.setValue(d.getAttribute("lang"))},commit:function(e,d){1==e&&(this.getValue()||this.isChanged())&&d.setAttribute("lang",this.getValue())}}]},{type:"text",id:"txtGenLongDescr",requiredContent:"img[longdesc]",label:S.lang.common.longDescr,setup:function(e,d){1==e&&this.setValue(d.getAttribute("longDesc"))},commit:function(e,d){1==e&&(this.getValue()||this.isChanged())&&d.setAttribute("longDesc",this.getValue())}},{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"txtGenClass",requiredContent:"img(cke-xyz)",label:S.lang.common.cssClass,"default":"",setup:function(e,d){1==e&&this.setValue(d.getAttribute("class"))},commit:function(e,d){1==e&&(this.getValue()||this.isChanged())&&d.setAttribute("class",this.getValue())}},{type:"text",id:"txtGenTitle",requiredContent:"img[title]",label:S.lang.common.advisoryTitle,"default":"",onChange:function(){R(this.getDialog())},setup:function(e,d){1==e&&this.setValue(d.getAttribute("title"))},commit:function(e,d){1==e?(this.getValue()||this.isChanged())&&d.setAttribute("title",this.getValue()):4==e?d.setAttribute("title",this.getValue()):8==e&&d.removeAttribute("title")}}]},{type:"text",id:"txtdlgGenStyle",requiredContent:"img{cke-xyz}",label:S.lang.common.cssStyle,validate:CKEDITOR.dialog.validate.inlineStyle(S.lang.common.invalidInlineStyle),"default":"",setup:function(h,e){if(1==h){var l=e.getAttribute("style");!l&&e.$.style.cssText&&(l=e.$.style.cssText);this.setValue(l);var k=e.$.style.height,l=e.$.style.width,k=(k?k:"").match(N),l=(l?l:"").match(N);this.attributesInStyle={height:!!k,width:!!l}}},onChange:function(){P.call(this,"info:cmbFloat info:cmbAlign info:txtVSpace info:txtHSpace info:txtBorder info:txtWidth info:txtHeight".split(" "));R(this)},commit:function(e,d){1==e&&(this.getValue()||this.isChanged())&&d.setAttribute("style",this.getValue())}}]}]}};CKEDITOR.dialog.add("image",function(b){return a(b,"image")});CKEDITOR.dialog.add("imagebutton",function(b){return a(b,"imagebutton")})})();