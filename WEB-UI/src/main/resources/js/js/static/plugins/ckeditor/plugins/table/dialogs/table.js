(function(){function f(a){for(var m=0,p=0,n=0,s,e=a.$.rows.length;n<e;n++){s=a.$.rows[n];for(var d=m=0,c,b=s.cells.length;d<b;d++){c=s.cells[d],m+=c.colSpan}m>p&&(p=m)}return p}function i(a){return function(){var b=this.getValue(),b=!!(CKEDITOR.dialog.validate.integer()(b)&&0<b);b||(alert(a),this.select());return b}}function h(e,c){var a=function(k){return new CKEDITOR.dom.element(k,e.document)},d=e.editable(),b=e.plugins.dialogadvtab;return{title:e.lang.table.title,minWidth:310,minHeight:CKEDITOR.env.ie?310:280,onLoad:function(){var k=this,m=k.getContentElement("advanced","advStyles");if(m){m.on("change",function(){var o=this.getStyle("width",""),l=k.getContentElement("info","txtWidth");l&&l.setValue(o,!0);o=this.getStyle("height","");(l=k.getContentElement("info","txtHeight"))&&l.setValue(o,!0)})}},onShow:function(){var v=e.getSelection(),u=v.getRanges(),t,s=this.getContentElement("info","txtRows"),k=this.getContentElement("info","txtCols"),r=this.getContentElement("info","txtWidth"),w=this.getContentElement("info","txtHeight");"tableProperties"==c&&((v=v.getSelectedElement())&&v.is("table")?t=v:0<u.length&&(CKEDITOR.env.webkit&&u[0].shrink(CKEDITOR.NODE_ELEMENT),t=e.elementPath(u[0].getCommonAncestor(!0)).contains("table",1)),this._.selectedElement=t);t?(this.setupContent(t),s&&s.disable(),k&&k.disable()):(s&&s.enable(),k&&k.enable());r&&r.onChange();w&&w.onChange()},onOk:function(){var C=e.getSelection(),B=this._.selectedElement&&C.createBookmarks(),A=this._.selectedElement||a("table"),z={};this.commitContent(z,A);if(z.info){z=z.info;if(!this._.selectedElement){for(var F=A.append(a("tbody")),D=parseInt(z.txtRows,10)||0,E=parseInt(z.txtCols,10)||0,k=0;k<D;k++){for(var l=F.append(a("tr")),m=0;m<E;m++){l.append(a("td")).appendBogus()}}}D=z.selHeaders;if(!A.$.tHead&&("row"==D||"both"==D)){l=new CKEDITOR.dom.element(A.$.createTHead());F=A.getElementsByTag("tbody").getItem(0);F=F.getElementsByTag("tr").getItem(0);for(k=0;k<F.getChildCount();k++){E=F.getChild(k),E.type!=CKEDITOR.NODE_ELEMENT||E.data("cke-bookmark")||(E.renameNode("th"),E.setAttribute("scope","col"))}l.append(F.remove())}if(null!==A.$.tHead&&"row"!=D&&"both"!=D){l=new CKEDITOR.dom.element(A.$.tHead);F=A.getElementsByTag("tbody").getItem(0);for(m=F.getFirst();0<l.getChildCount();){F=l.getFirst();for(k=0;k<F.getChildCount();k++){E=F.getChild(k),E.type==CKEDITOR.NODE_ELEMENT&&(E.renameNode("td"),E.removeAttribute("scope"))}F.insertBefore(m)}l.remove()}if(!this.hasColumnHeaders&&("col"==D||"both"==D)){for(l=0;l<A.$.rows.length;l++){E=new CKEDITOR.dom.element(A.$.rows[l].cells[0]),E.renameNode("th"),E.setAttribute("scope","row")}}if(this.hasColumnHeaders&&"col"!=D&&"both"!=D){for(k=0;k<A.$.rows.length;k++){l=new CKEDITOR.dom.element(A.$.rows[k]),"tbody"==l.getParent().getName()&&(E=new CKEDITOR.dom.element(l.$.cells[0]),E.renameNode("td"),E.removeAttribute("scope"))}}z.txtHeight?A.setStyle("height",z.txtHeight):A.removeStyle("height");z.txtWidth?A.setStyle("width",z.txtWidth):A.removeStyle("width");A.getAttribute("style")||A.removeAttribute("style")}if(this._.selectedElement){try{C.selectBookmarks(B)}catch(p){}}else{e.insertElement(A),setTimeout(function(){var n=new CKEDITOR.dom.element(A.$.rows[0].cells[0]),o=e.createRange();o.moveToPosition(n,CKEDITOR.POSITION_AFTER_START);o.select()},0)}},contents:[{id:"info",label:e.lang.table.title,elements:[{type:"hbox",widths:[null,null],styles:["vertical-align:top"],children:[{type:"vbox",padding:0,children:[{type:"text",id:"txtRows","default":3,label:e.lang.table.rows,required:!0,controlStyle:"width:5em",validate:i(e.lang.table.invalidRows),setup:function(k){this.setValue(k.$.rows.length)},commit:g},{type:"text",id:"txtCols","default":2,label:e.lang.table.columns,required:!0,controlStyle:"width:5em",validate:i(e.lang.table.invalidCols),setup:function(k){this.setValue(f(k))},commit:g},{type:"html",html:"\x26nbsp;"},{type:"select",id:"selHeaders",requiredContent:"th","default":"",label:e.lang.table.headers,items:[[e.lang.table.headersNone,""],[e.lang.table.headersRow,"row"],[e.lang.table.headersColumn,"col"],[e.lang.table.headersBoth,"both"]],setup:function(k){var o=this.getDialog();o.hasColumnHeaders=!0;for(var q=0;q<k.$.rows.length;q++){var p=k.$.rows[q].cells[0];if(p&&"th"!=p.nodeName.toLowerCase()){o.hasColumnHeaders=!1;break}}null!==k.$.tHead?this.setValue(o.hasColumnHeaders?"both":"row"):this.setValue(o.hasColumnHeaders?"col":"")},commit:g},{type:"text",id:"txtBorder",requiredContent:"table[border]","default":e.filter.check("table[border]")?1:0,label:e.lang.table.border,controlStyle:"width:3em",validate:CKEDITOR.dialog.validate.number(e.lang.table.invalidBorder),setup:function(k){this.setValue(k.getAttribute("border")||"")},commit:function(m,k){this.getValue()?k.setAttribute("border",this.getValue()):k.removeAttribute("border")}},{id:"cmbAlign",type:"select",requiredContent:"table[align]","default":"",label:e.lang.common.align,items:[[e.lang.common.notSet,""],[e.lang.common.alignLeft,"left"],[e.lang.common.alignCenter,"center"],[e.lang.common.alignRight,"right"]],setup:function(k){this.setValue(k.getAttribute("align")||"")},commit:function(m,k){this.getValue()?k.setAttribute("align",this.getValue()):k.removeAttribute("align")}}]},{type:"vbox",padding:0,children:[{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtWidth",requiredContent:"table{width}",controlStyle:"width:5em",label:e.lang.common.width,title:e.lang.common.cssLengthTooltip,"default":e.filter.check("table{width}")?500>d.getSize("width")?"100%":500:0,getValue:j,validate:CKEDITOR.dialog.validate.cssLength(e.lang.common.invalidCssLength.replace("%1",e.lang.common.width)),onChange:function(){var k=this.getDialog().getContentElement("advanced","advStyles");k&&k.updateStyle("width",this.getValue())},setup:function(k){k=k.getStyle("width");this.setValue(k)},commit:g}]},{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtHeight",requiredContent:"table{height}",controlStyle:"width:5em",label:e.lang.common.height,title:e.lang.common.cssLengthTooltip,"default":"",getValue:j,validate:CKEDITOR.dialog.validate.cssLength(e.lang.common.invalidCssLength.replace("%1",e.lang.common.height)),onChange:function(){var k=this.getDialog().getContentElement("advanced","advStyles");k&&k.updateStyle("height",this.getValue())},setup:function(k){(k=k.getStyle("height"))&&this.setValue(k)},commit:g}]},{type:"html",html:"\x26nbsp;"},{type:"text",id:"txtCellSpace",requiredContent:"table[cellspacing]",controlStyle:"width:3em",label:e.lang.table.cellSpace,"default":e.filter.check("table[cellspacing]")?1:0,validate:CKEDITOR.dialog.validate.number(e.lang.table.invalidCellSpacing),setup:function(k){this.setValue(k.getAttribute("cellSpacing")||"")},commit:function(m,k){this.getValue()?k.setAttribute("cellSpacing",this.getValue()):k.removeAttribute("cellSpacing")}},{type:"text",id:"txtCellPad",requiredContent:"table[cellpadding]",controlStyle:"width:3em",label:e.lang.table.cellPad,"default":e.filter.check("table[cellpadding]")?1:0,validate:CKEDITOR.dialog.validate.number(e.lang.table.invalidCellPadding),setup:function(k){this.setValue(k.getAttribute("cellPadding")||"")},commit:function(m,k){this.getValue()?k.setAttribute("cellPadding",this.getValue()):k.removeAttribute("cellPadding")}}]}]},{type:"html",align:"right",html:""},{type:"vbox",padding:0,children:[{type:"text",id:"txtCaption",requiredContent:"caption",label:e.lang.table.caption,setup:function(m){this.enable();m=m.getElementsByTag("caption");if(0<m.count()){m=m.getItem(0);var k=m.getFirst(CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT));k&&!k.equals(m.getBogus())?(this.disable(),this.setValue(m.getText())):(m=CKEDITOR.tools.trim(m.getText()),this.setValue(m))}},commit:function(o,k){if(this.isEnabled()){var q=this.getValue(),p=k.getElementsByTag("caption");if(q){0<p.count()?(p=p.getItem(0),p.setHtml("")):(p=new CKEDITOR.dom.element("caption",e.document),k.getChildCount()?p.insertBefore(k.getFirst()):p.appendTo(k)),p.append(new CKEDITOR.dom.text(q,e.document))}else{if(0<p.count()){for(q=p.count()-1;0<=q;q--){p.getItem(q).remove()}}}}}},{type:"text",id:"txtSummary",bidi:!0,requiredContent:"table[summary]",label:e.lang.table.summary,setup:function(k){this.setValue(k.getAttribute("summary")||"")},commit:function(m,k){this.getValue()?k.setAttribute("summary",this.getValue()):k.removeAttribute("summary")}}]}]},b&&b.createAdvancedTab(e,null,"table")]}}var j=CKEDITOR.tools.cssLength,g=function(b){var a=this.id;b.info||(b.info={});b.info[a]=this.getValue()};CKEDITOR.dialog.add("table",function(a){return h(a,"table")});CKEDITOR.dialog.add("tableProperties",function(a){return h(a,"tableProperties")})})();