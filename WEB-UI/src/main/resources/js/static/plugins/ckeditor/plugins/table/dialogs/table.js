(function(){function b(r){for(var j=0,h=0,i=0,g,k=r.$.rows.length;i<k;i++){g=r.$.rows[i];for(var l=j=0,o,q=g.cells.length;l<q;l++){o=g.cells[l],j+=o.colSpan}j>h&&(h=j)}return h}function d(f){return function(){var g=this.getValue(),g=!!(CKEDITOR.dialog.validate.integer()(g)&&0<g);g||(alert(f),this.select());return g}}function e(g,i){var k=function(f){return new CKEDITOR.dom.element(f,g.document)},h=g.editable(),j=g.plugins.dialogadvtab;return{title:g.lang.table.title,minWidth:310,minHeight:CKEDITOR.env.ie?310:280,onLoad:function(){var l=this,f=l.getContentElement("advanced","advStyles");if(f){f.on("change",function(){var n=this.getStyle("width",""),m=l.getContentElement("info","txtWidth");m&&m.setValue(n,!0);n=this.getStyle("height","");(m=l.getContentElement("info","txtHeight"))&&m.setValue(n,!0)})}},onShow:function(){var o=g.getSelection(),p=o.getRanges(),q,f=this.getContentElement("info","txtRows"),m=this.getContentElement("info","txtCols"),l=this.getContentElement("info","txtWidth"),n=this.getContentElement("info","txtHeight");"tableProperties"==i&&((o=o.getSelectedElement())&&o.is("table")?q=o:0<p.length&&(CKEDITOR.env.webkit&&p[0].shrink(CKEDITOR.NODE_ELEMENT),q=g.elementPath(p[0].getCommonAncestor(!0)).contains("table",1)),this._.selectedElement=q);q?(this.setupContent(q),f&&f.disable(),m&&m.disable()):(f&&f.enable(),m&&m.enable());l&&l.onChange();n&&n.onChange()},onOk:function(){var v=g.getSelection(),w=this._.selectedElement&&v.createBookmarks(),x=this._.selectedElement||k("table"),y={};this.commitContent(y,x);if(y.info){y=y.info;if(!this._.selectedElement){for(var s=x.append(k("tbody")),u=parseInt(y.txtRows,10)||0,t=parseInt(y.txtCols,10)||0,r=0;r<u;r++){for(var q=s.append(k("tr")),o=0;o<t;o++){q.append(k("td")).appendBogus()}}}u=y.selHeaders;if(!x.$.tHead&&("row"==u||"both"==u)){q=new CKEDITOR.dom.element(x.$.createTHead());s=x.getElementsByTag("tbody").getItem(0);s=s.getElementsByTag("tr").getItem(0);for(r=0;r<s.getChildCount();r++){t=s.getChild(r),t.type!=CKEDITOR.NODE_ELEMENT||t.data("cke-bookmark")||(t.renameNode("th"),t.setAttribute("scope","col"))}q.append(s.remove())}if(null!==x.$.tHead&&"row"!=u&&"both"!=u){q=new CKEDITOR.dom.element(x.$.tHead);s=x.getElementsByTag("tbody").getItem(0);for(o=s.getFirst();0<q.getChildCount();){s=q.getFirst();for(r=0;r<s.getChildCount();r++){t=s.getChild(r),t.type==CKEDITOR.NODE_ELEMENT&&(t.renameNode("td"),t.removeAttribute("scope"))}s.insertBefore(o)}q.remove()}if(!this.hasColumnHeaders&&("col"==u||"both"==u)){for(q=0;q<x.$.rows.length;q++){t=new CKEDITOR.dom.element(x.$.rows[q].cells[0]),t.renameNode("th"),t.setAttribute("scope","row")}}if(this.hasColumnHeaders&&"col"!=u&&"both"!=u){for(r=0;r<x.$.rows.length;r++){q=new CKEDITOR.dom.element(x.$.rows[r]),"tbody"==q.getParent().getName()&&(t=new CKEDITOR.dom.element(q.$.cells[0]),t.renameNode("td"),t.removeAttribute("scope"))}}y.txtHeight?x.setStyle("height",y.txtHeight):x.removeStyle("height");y.txtWidth?x.setStyle("width",y.txtWidth):x.removeStyle("width");x.getAttribute("style")||x.removeAttribute("style")}if(this._.selectedElement){try{v.selectBookmarks(w)}catch(n){}}else{g.insertElement(x),setTimeout(function(){var l=new CKEDITOR.dom.element(x.$.rows[0].cells[0]),f=g.createRange();f.moveToPosition(l,CKEDITOR.POSITION_AFTER_START);f.select()},0)}},contents:[{id:"info",label:g.lang.table.title,elements:[{type:"hbox",widths:[null,null],styles:["vertical-align:top"],children:[{type:"vbox",padding:0,children:[{type:"text",id:"txtRows","default":3,label:g.lang.table.rows,required:!0,controlStyle:"width:5em",validate:d(g.lang.table.invalidRows),setup:function(f){this.setValue(f.$.rows.length)},commit:a},{type:"text",id:"txtCols","default":2,label:g.lang.table.columns,required:!0,controlStyle:"width:5em",validate:d(g.lang.table.invalidCols),setup:function(f){this.setValue(b(f))},commit:a},{type:"html",html:"\x26nbsp;"},{type:"select",id:"selHeaders",requiredContent:"th","default":"",label:g.lang.table.headers,items:[[g.lang.table.headersNone,""],[g.lang.table.headersRow,"row"],[g.lang.table.headersColumn,"col"],[g.lang.table.headersBoth,"both"]],setup:function(m){var l=this.getDialog();l.hasColumnHeaders=!0;for(var n=0;n<m.$.rows.length;n++){var f=m.$.rows[n].cells[0];if(f&&"th"!=f.nodeName.toLowerCase()){l.hasColumnHeaders=!1;break}}null!==m.$.tHead?this.setValue(l.hasColumnHeaders?"both":"row"):this.setValue(l.hasColumnHeaders?"col":"")},commit:a},{type:"text",id:"txtBorder",requiredContent:"table[border]","default":g.filter.check("table[border]")?1:0,label:g.lang.table.border,controlStyle:"width:3em",validate:CKEDITOR.dialog.validate.number(g.lang.table.invalidBorder),setup:function(f){this.setValue(f.getAttribute("border")||"")},commit:function(f,l){this.getValue()?l.setAttribute("border",this.getValue()):l.removeAttribute("border")}},{id:"cmbAlign",type:"select",requiredContent:"table[align]","default":"",label:g.lang.common.align,items:[[g.lang.common.notSet,""],[g.lang.common.alignLeft,"left"],[g.lang.common.alignCenter,"center"],[g.lang.common.alignRight,"right"]],setup:function(f){this.setValue(f.getAttribute("align")||"")},commit:function(f,l){this.getValue()?l.setAttribute("align",this.getValue()):l.removeAttribute("align")}}]},{type:"vbox",padding:0,children:[{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtWidth",requiredContent:"table{width}",controlStyle:"width:5em",label:g.lang.common.width,title:g.lang.common.cssLengthTooltip,"default":g.filter.check("table{width}")?500>h.getSize("width")?"100%":500:0,getValue:c,validate:CKEDITOR.dialog.validate.cssLength(g.lang.common.invalidCssLength.replace("%1",g.lang.common.width)),onChange:function(){var f=this.getDialog().getContentElement("advanced","advStyles");f&&f.updateStyle("width",this.getValue())},setup:function(f){f=f.getStyle("width");this.setValue(f)},commit:a}]},{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtHeight",requiredContent:"table{height}",controlStyle:"width:5em",label:g.lang.common.height,title:g.lang.common.cssLengthTooltip,"default":"",getValue:c,validate:CKEDITOR.dialog.validate.cssLength(g.lang.common.invalidCssLength.replace("%1",g.lang.common.height)),onChange:function(){var f=this.getDialog().getContentElement("advanced","advStyles");f&&f.updateStyle("height",this.getValue())},setup:function(f){(f=f.getStyle("height"))&&this.setValue(f)},commit:a}]},{type:"html",html:"\x26nbsp;"},{type:"text",id:"txtCellSpace",requiredContent:"table[cellspacing]",controlStyle:"width:3em",label:g.lang.table.cellSpace,"default":g.filter.check("table[cellspacing]")?1:0,validate:CKEDITOR.dialog.validate.number(g.lang.table.invalidCellSpacing),setup:function(f){this.setValue(f.getAttribute("cellSpacing")||"")},commit:function(f,l){this.getValue()?l.setAttribute("cellSpacing",this.getValue()):l.removeAttribute("cellSpacing")}},{type:"text",id:"txtCellPad",requiredContent:"table[cellpadding]",controlStyle:"width:3em",label:g.lang.table.cellPad,"default":g.filter.check("table[cellpadding]")?1:0,validate:CKEDITOR.dialog.validate.number(g.lang.table.invalidCellPadding),setup:function(f){this.setValue(f.getAttribute("cellPadding")||"")},commit:function(f,l){this.getValue()?l.setAttribute("cellPadding",this.getValue()):l.removeAttribute("cellPadding")}}]}]},{type:"html",align:"right",html:""},{type:"vbox",padding:0,children:[{type:"text",id:"txtCaption",requiredContent:"caption",label:g.lang.table.caption,setup:function(f){this.enable();f=f.getElementsByTag("caption");if(0<f.count()){f=f.getItem(0);var l=f.getFirst(CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT));l&&!l.equals(f.getBogus())?(this.disable(),this.setValue(f.getText())):(f=CKEDITOR.tools.trim(f.getText()),this.setValue(f))}},commit:function(l,m){if(this.isEnabled()){var n=this.getValue(),f=m.getElementsByTag("caption");if(n){0<f.count()?(f=f.getItem(0),f.setHtml("")):(f=new CKEDITOR.dom.element("caption",g.document),m.getChildCount()?f.insertBefore(m.getFirst()):f.appendTo(m)),f.append(new CKEDITOR.dom.text(n,g.document))}else{if(0<f.count()){for(n=f.count()-1;0<=n;n--){f.getItem(n).remove()}}}}}},{type:"text",id:"txtSummary",bidi:!0,requiredContent:"table[summary]",label:g.lang.table.summary,setup:function(f){this.setValue(f.getAttribute("summary")||"")},commit:function(f,l){this.getValue()?l.setAttribute("summary",this.getValue()):l.removeAttribute("summary")}}]}]},j&&j.createAdvancedTab(g,null,"table")]}}var c=CKEDITOR.tools.cssLength,a=function(g){var h=this.id;g.info||(g.info={});g.info[h]=this.getValue()};CKEDITOR.dialog.add("table",function(f){return e(f,"table")});CKEDITOR.dialog.add("tableProperties",function(f){return e(f,"tableProperties")})})();