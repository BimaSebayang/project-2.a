CKEDITOR.dialog.add("checkspell",function(v){function t(b,g){var e=0;return function(){"function"==typeof window.doSpell?("undefined"!=typeof r&&window.clearInterval(r),j(b)):180==e++&&window._cancelOnError(g)}}function j(h){var d=new window._SP_FCK_LangCompare,a=CKEDITOR.getUrl(v.plugins.wsc.path+"dialogs/"),g=a+"tmpFrameset.html";window.gFCKPluginName="wsc";d.setDefaulLangCode(v.config.defaultLanguage);window.doSpell({ctrl:q,lang:v.config.wsc_lang||d.getSPLangCode(v.langCode),intLang:v.config.wsc_uiLang||d.getSPLangCode(v.langCode),winType:s,onCancel:function(){h.hide()},onFinish:function(c){v.focus();h.getParentEditor().setData(c.value);h.hide()},staticFrame:g,framesetPath:g,iframePath:a+"ciframe.html",schemaURI:a+"wsc.css",userDictionaryName:v.config.wsc_userDictionaryName,customDictionaryName:v.config.wsc_customDictionaryIds&&v.config.wsc_customDictionaryIds.split(","),domainName:v.config.wsc_domainName});CKEDITOR.document.getById(p).setStyle("display","none");CKEDITOR.document.getById(s).setStyle("display","block")}var u=CKEDITOR.tools.getNextNumber(),s="cke_frame_"+u,q="cke_data_"+u,p="cke_error_"+u,r,u=document.location.protocol||"http:",o=v.lang.wsc.notAvailable,i='\x3ctextarea style\x3d"display: none" id\x3d"'+q+'" rows\x3d"10" cols\x3d"40"\x3e \x3c/textarea\x3e\x3cdiv id\x3d"'+p+'" style\x3d"display:none;color:red;font-size:16px;font-weight:bold;padding-top:160px;text-align:center;z-index:11;"\x3e\x3c/div\x3e\x3ciframe src\x3d"" style\x3d"width:100%;background-color:#f1f1e3;" frameborder\x3d"0" name\x3d"'+s+'" id\x3d"'+s+'" allowtransparency\x3d"1"\x3e\x3c/iframe\x3e',f=v.config.wsc_customLoaderScript||u+"//loader.webspellchecker.net/sproxy_fck/sproxy.php?plugin\x3dfck2\x26customerid\x3d"+v.config.wsc_customerId+"\x26cmd\x3dscript\x26doc\x3dwsc\x26schema\x3d22";v.config.wsc_customLoaderScript&&(o+='\x3cp style\x3d"color:#000;font-size:11px;font-weight: normal;text-align:center;padding-top:10px"\x3e'+v.lang.wsc.errorLoading.replace(/%s/g,v.config.wsc_customLoaderScript)+"\x3c/p\x3e");window._cancelOnError=function(d){if("undefined"==typeof window.WSC_Error){CKEDITOR.document.getById(s).setStyle("display","none");var a=CKEDITOR.document.getById(p);a.setStyle("display","block");a.setHtml(d||v.lang.wsc.notAvailable)}};return{title:v.config.wsc_dialogTitle||v.lang.wsc.title,minWidth:485,minHeight:380,buttons:[CKEDITOR.dialog.cancelButton],onShow:function(){var a=this.getContentElement("general","content").getElement();a.setHtml(i);a.getChild(2).setStyle("height",this._.contentSize.height+"px");"function"!=typeof window.doSpell&&CKEDITOR.document.getHead().append(CKEDITOR.document.createElement("script",{attributes:{type:"text/javascript",src:f}}));a=v.getData();CKEDITOR.document.getById(q).setValue(a);r=window.setInterval(t(this,o),250)},onHide:function(){window.ooo=void 0;window.int_framsetLoaded=void 0;window.framesetLoaded=void 0;window.is_window_opened=!1},contents:[{id:"general",label:v.config.wsc_dialogTitle||v.lang.wsc.title,padding:0,elements:[{type:"html",id:"content",html:""}]}]}});CKEDITOR.dialog.on("resize",function(b){b=b.data;var d=b.dialog;"checkspell"==d._.name&&((d=(d=d.getContentElement("general","content").getElement())&&d.getChild(2))&&d.setSize("height",b.height),d&&d.setSize("width",b.width))});