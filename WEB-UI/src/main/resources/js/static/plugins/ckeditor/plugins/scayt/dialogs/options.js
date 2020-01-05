CKEDITOR.dialog.add("scaytDialog",function(h){var d=h.scayt,b='\x3cp\x3e\x3cimg src\x3d"'+d.getLogo()+'" /\x3e\x3c/p\x3e\x3cp\x3e'+d.getLocal("version")+d.getVersion()+"\x3c/p\x3e\x3cp\x3e"+d.getLocal("text_copyrights")+"\x3c/p\x3e",a=CKEDITOR.document,g={isChanged:function(){return null===this.newLang||this.currentLang===this.newLang?!1:!0},currentLang:d.getLang(),newLang:null,reset:function(){this.currentLang=d.getLang();this.newLang=null},id:"lang"},b=[{id:"options",label:d.getLocal("tab_options"),onShow:function(){},elements:[{type:"vbox",id:"scaytOptions",children:function(){var f=d.getApplicationConfig(),c=[],i={"ignore-all-caps-words":"label_allCaps","ignore-domain-names":"label_ignoreDomainNames","ignore-words-with-mixed-cases":"label_mixedCase","ignore-words-with-numbers":"label_mixedWithDigits"},j;for(j in f){f={type:"checkbox"},f.id=j,f.label=d.getLocal(i[j]),c.push(f)}return c}(),onShow:function(){this.getChild();for(var f=h.scayt,c=0;c<this.getChild().length;c++){this.getChild()[c].setValue(f.getApplicationConfig()[this.getChild()[c].id])}}}]},{id:"langs",label:d.getLocal("tab_languages"),elements:[{id:"leftLangColumn",type:"vbox",align:"left",widths:["100"],children:[{type:"html",id:"langBox",style:"overflow: hidden; white-space: normal;margin-bottom:15px;",html:'\x3cdiv\x3e\x3cdiv style\x3d"float:left;width:45%;margin-left:5px;" id\x3d"left-col-'+h.name+'"\x3e\x3c/div\x3e\x3cdiv style\x3d"float:left;width:45%;margin-left:15px;" id\x3d"right-col-'+h.name+'"\x3e\x3c/div\x3e\x3c/div\x3e',onShow:function(){var c=h.scayt.getLang();a.getById("scaytLang_"+h.name+"_"+c).$.checked=!0}},{type:"html",id:"graytLanguagesHint",html:'\x3cdiv style\x3d"margin:5px auto; width:95%;white-space:normal;" id\x3d"'+h.name+'graytLanguagesHint"\x3e\x3cspan style\x3d"width:10px;height:10px;display: inline-block; background:#02b620;vertical-align:top;margin-top:2px;"\x3e\x3c/span\x3e - This languages are supported by Grammar As You Type(GRAYT).\x3c/div\x3e',onShow:function(){var c=a.getById(h.name+"graytLanguagesHint");h.config.grayt_autoStartup||(c.$.style.display="none")}}]}]},{id:"dictionaries",label:d.getLocal("tab_dictionaries"),elements:[{type:"vbox",id:"rightCol_col__left",children:[{type:"html",id:"dictionaryNote",html:""},{type:"text",id:"dictionaryName",label:d.getLocal("label_fieldNameDic")||"Dictionary name",onShow:function(f){var c=f.sender,i=h.scayt;setTimeout(function(){c.getContentElement("dictionaries","dictionaryNote").getElement().setText("");null!=i.getUserDictionaryName()&&""!=i.getUserDictionaryName()&&c.getContentElement("dictionaries","dictionaryName").setValue(i.getUserDictionaryName())},0)}},{type:"hbox",id:"notExistDic",align:"left",style:"width:auto;",widths:["50%","50%"],children:[{type:"button",id:"createDic",label:d.getLocal("btn_createDic"),title:d.getLocal("btn_createDic"),onClick:function(){var f=this.getDialog(),c=e,i=h.scayt,j=f.getContentElement("dictionaries","dictionaryName").getValue();i.createUserDictionary(j,function(k){k.error||c.toggleDictionaryButtons.call(f,!0);k.dialog=f;k.command="create";k.name=j;h.fire("scaytUserDictionaryAction",k)},function(k){k.dialog=f;k.command="create";k.name=j;h.fire("scaytUserDictionaryActionError",k)})}},{type:"button",id:"restoreDic",label:d.getLocal("btn_restoreDic"),title:d.getLocal("btn_restoreDic"),onClick:function(){var f=this.getDialog(),c=h.scayt,i=e,j=f.getContentElement("dictionaries","dictionaryName").getValue();c.restoreUserDictionary(j,function(k){k.dialog=f;k.error||i.toggleDictionaryButtons.call(f,!0);k.command="restore";k.name=j;h.fire("scaytUserDictionaryAction",k)},function(k){k.dialog=f;k.command="restore";k.name=j;h.fire("scaytUserDictionaryActionError",k)})}}]},{type:"hbox",id:"existDic",align:"left",style:"width:auto;",widths:["50%","50%"],children:[{type:"button",id:"removeDic",label:d.getLocal("btn_deleteDic"),title:d.getLocal("btn_deleteDic"),onClick:function(){var f=this.getDialog(),c=h.scayt,i=e,j=f.getContentElement("dictionaries","dictionaryName"),k=j.getValue();c.removeUserDictionary(k,function(l){j.setValue("");l.error||i.toggleDictionaryButtons.call(f,!1);l.dialog=f;l.command="remove";l.name=k;h.fire("scaytUserDictionaryAction",l)},function(l){l.dialog=f;l.command="remove";l.name=k;h.fire("scaytUserDictionaryActionError",l)})}},{type:"button",id:"renameDic",label:d.getLocal("btn_renameDic"),title:d.getLocal("btn_renameDic"),onClick:function(){var f=this.getDialog(),c=h.scayt,i=f.getContentElement("dictionaries","dictionaryName").getValue();c.renameUserDictionary(i,function(j){j.dialog=f;j.command="rename";j.name=i;h.fire("scaytUserDictionaryAction",j)},function(j){j.dialog=f;j.command="rename";j.name=i;h.fire("scaytUserDictionaryActionError",j)})}}]},{type:"html",id:"dicInfo",html:'\x3cdiv id\x3d"dic_info_editor1" style\x3d"margin:5px auto; width:95%;white-space:normal;"\x3e'+d.getLocal("text_descriptionDic")+"\x3c/div\x3e"}]}]},{id:"about",label:d.getLocal("tab_about"),elements:[{type:"html",id:"about",style:"margin: 5px 5px;",html:'\x3cdiv\x3e\x3cdiv id\x3d"scayt_about_"\x3e'+b+"\x3c/div\x3e\x3c/div\x3e"}]}];h.on("scaytUserDictionaryAction",function(i){var f=SCAYT.prototype.UILib,j=i.data.dialog,k=j.getContentElement("dictionaries","dictionaryNote").getElement(),l=i.editor.scayt,m;void 0===i.data.error?(m=l.getLocal("message_success_"+i.data.command+"Dic"),m=m.replace("%s",i.data.name),k.setText(m),f.css(k.$,{color:"blue"})):(""===i.data.name?k.setText(l.getLocal("message_info_emptyDic")):(m=l.getLocal("message_error_"+i.data.command+"Dic"),m=m.replace("%s",i.data.name),k.setText(m)),f.css(k.$,{color:"red"}),null!=l.getUserDictionaryName()&&""!=l.getUserDictionaryName()?j.getContentElement("dictionaries","dictionaryName").setValue(l.getUserDictionaryName()):j.getContentElement("dictionaries","dictionaryName").setValue(""))});h.on("scaytUserDictionaryActionError",function(j){var i=SCAYT.prototype.UILib,n=j.data.dialog,l=n.getContentElement("dictionaries","dictionaryNote").getElement(),m=j.editor.scayt,k;""===j.data.name?l.setText(m.getLocal("message_info_emptyDic")):(k=m.getLocal("message_error_"+j.data.command+"Dic"),k=k.replace("%s",j.data.name),l.setText(k));i.css(l.$,{color:"red"});null!=m.getUserDictionaryName()&&""!=m.getUserDictionaryName()?n.getContentElement("dictionaries","dictionaryName").setValue(m.getUserDictionaryName()):n.getContentElement("dictionaries","dictionaryName").setValue("")});var e={title:d.getLocal("text_title"),resizable:CKEDITOR.DIALOG_RESIZE_BOTH,minWidth:340,minHeight:260,onLoad:function(){if(0!=h.config.scayt_uiTabs[1]){var f=e,c=f.getLangBoxes.call(this);c.getParent().setStyle("white-space","normal");f.renderLangList(c);this.definition.minWidth=this.getSize().width;this.resize(this.definition.minWidth,this.definition.minHeight)}},onCancel:function(){g.reset()},onHide:function(){h.unlockSelection()},onShow:function(){h.fire("scaytDialogShown",this);if(0!=h.config.scayt_uiTabs[2]){var f=h.scayt,c=this.getContentElement("dictionaries","dictionaryName"),i=this.getContentElement("dictionaries","existDic").getElement().getParent(),j=this.getContentElement("dictionaries","notExistDic").getElement().getParent();i.hide();j.hide();null!=f.getUserDictionaryName()&&""!=f.getUserDictionaryName()?(this.getContentElement("dictionaries","dictionaryName").setValue(f.getUserDictionaryName()),i.show()):(c.setValue(""),j.show())}},onOk:function(){var f=e,c=h.scayt;this.getContentElement("options","scaytOptions");f=f.getChangedOption.call(this);c.commitOption({changedOptions:f})},toggleDictionaryButtons:function(i){var f=this.getContentElement("dictionaries","existDic").getElement().getParent(),j=this.getContentElement("dictionaries","notExistDic").getElement().getParent();i?(f.show(),j.hide()):(f.hide(),j.show())},getChangedOption:function(){var f={};if(1==h.config.scayt_uiTabs[0]){for(var c=this.getContentElement("options","scaytOptions").getChild(),i=0;i<c.length;i++){c[i].isChanged()&&(f[c[i].id]=c[i].getValue())}}g.isChanged()&&(f[g.id]=h.config.scayt_sLang=g.currentLang=g.newLang);return f},buildRadioInputs:function(j,i,n){var p=new CKEDITOR.dom.element("div"),q="scaytLang_"+h.name+"_"+i,o=CKEDITOR.dom.element.createFromHtml('\x3cinput id\x3d"'+q+'" type\x3d"radio"  value\x3d"'+i+'" name\x3d"scayt_lang" /\x3e'),c=new CKEDITOR.dom.element("label"),l=h.scayt;p.setStyles({"white-space":"normal",position:"relative","padding-bottom":"2px"});o.on("click",function(f){g.newLang=f.sender.getValue()});c.appendText(j);c.setAttribute("for",q);n&&h.config.grayt_autoStartup&&c.setStyles({color:"#02b620"});p.append(o);p.append(c);i===l.getLang()&&(o.setAttribute("checked",!0),o.setAttribute("defaultChecked","defaultChecked"));return p},renderLangList:function(r){var q=r.find("#left-col-"+h.name).getItem(0);r=r.find("#right-col-"+h.name).getItem(0);var n=d.getScaytLangList(),o=d.getGraytLangList(),p={},f=[],c=0,i=!1,j;for(j in n.ltr){p[j]=n.ltr[j]}for(j in n.rtl){p[j]=n.rtl[j]}for(j in p){f.push([j,p[j]])}f.sort(function(l,k){var m=0;l[1]>k[1]?m=1:l[1]<k[1]&&(m=-1);return m});p={};for(i=0;i<f.length;i++){p[f[i][0]]=f[i][1]}f=Math.round(f.length/2);for(j in p){c++,i=j in o.ltr||j in o.rtl,this.buildRadioInputs(p[j],j,i).appendTo(c<=f?q:r)}},getLangBoxes:function(){return this.getContentElement("langs","langBox").getElement()},contents:function(i,f){var l=[],j=f.config.scayt_uiTabs;if(j){for(var k in j){1==j[k]&&l.push(i[k])}l.push(i[i.length-1])}else{return i}return l}(b,h)};return e});