(function(a){a.extend(a.inputmask.defaults.definitions,{h:{validator:"[01][0-9]|2[0-3]",cardinality:2,prevalidator:[{validator:"[0-2]",cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:"[0-5]",cardinality:1}]},d:{validator:"0[1-9]|[12][0-9]|3[01]",cardinality:2,prevalidator:[{validator:"[0-3]",cardinality:1}]},m:{validator:"0[1-9]|1[012]",cardinality:2,prevalidator:[{validator:"[01]",cardinality:1}]},y:{validator:"(19|20)\\d{2}",cardinality:4,prevalidator:[{validator:"[12]",cardinality:1},{validator:"(19|20)",cardinality:2},{validator:"(19|20)\\d",cardinality:3}]}});a.extend(a.inputmask.defaults.aliases,{"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(c){var b=a.inputmask.escapeRegex.call(this,c);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+b+"[01])")},val2:function(c){var b=a.inputmask.escapeRegex.call(this,c);return new RegExp("((0[1-9]|[12][0-9])"+b+"(0[1-9]|1[012]))|(30"+b+"(0[13-9]|1[012]))|(31"+b+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(e,b,c){var d=parseInt(e.concat(b.toString().slice(e.length)));var f=parseInt(e.concat(c.toString().slice(e.length)));return(d!=NaN?b<=d&&d<=c:false)||(f!=NaN?b<=f&&f<=c:false)},determinebaseyear:function(c,e,g){var f=(new Date()).getFullYear();if(c>f){return c}if(e<f){var b=e.toString().slice(0,2);var h=e.toString().slice(2,4);while(e<b+g){b--}var d=b+h;return c>d?c:d}return f},onKeyUp:function(f,b,d){var g=a(this);if(f.ctrlKey&&f.keyCode==d.keyCode.RIGHT){var c=new Date();g.val(c.getDate().toString()+(c.getMonth()+1).toString()+c.getFullYear().toString())}},definitions:{"1":{validator:function(d,c,g,b,e){var f=e.regex.val1.test(d);if(!b&&!f){if(d.charAt(1)==e.separator||"-./".indexOf(d.charAt(1))!=-1){f=e.regex.val1.test("0"+d.charAt(0));if(f){c[g-1]="0";return{pos:g,c:d.charAt(0)}}}}return f},cardinality:2,prevalidator:[{validator:function(d,c,g,b,e){var f=e.regex.val1pre.test(d);if(!b&&!f){f=e.regex.val1.test("0"+d);if(f){c[g]="0";g++;return{pos:g}}}return f},cardinality:1}]},"2":{validator:function(d,c,h,b,e){var g=c.join("").substr(0,3);if(g.indexOf(e.placeholder[0])!=-1){g="01"+e.separator}var f=e.regex.val2(e.separator).test(g+d);if(!b&&!f){if(d.charAt(1)==e.separator||"-./".indexOf(d.charAt(1))!=-1){f=e.regex.val2(e.separator).test(g+"0"+d.charAt(0));if(f){c[h-1]="0";return{pos:h,c:d.charAt(0)}}}}return f},cardinality:2,prevalidator:[{validator:function(d,c,h,b,e){var g=c.join("").substr(0,3);if(g.indexOf(e.placeholder[0])!=-1){g="01"+e.separator}var f=e.regex.val2pre(e.separator).test(g+d);if(!b&&!f){f=e.regex.val2(e.separator).test(g+"0"+d);if(f){c[h]="0";h++;return{pos:h}}}return f},cardinality:1}]},y:{validator:function(d,c,h,b,f){if(f.isInYearRange(d,f.yearrange.minyear,f.yearrange.maxyear)){var g=c.join("").substr(0,6);if(g!=f.leapday){return true}else{var e=parseInt(d,10);if(e%4===0){if(e%100===0){if(e%400===0){return true}else{return false}}else{return true}}else{return false}}}else{return false}},cardinality:4,prevalidator:[{validator:function(e,d,h,c,f){var g=f.isInYearRange(e,f.yearrange.minyear,f.yearrange.maxyear);if(!c&&!g){var b=f.determinebaseyear(f.yearrange.minyear,f.yearrange.maxyear,e+"0").toString().slice(0,1);g=f.isInYearRange(b+e,f.yearrange.minyear,f.yearrange.maxyear);if(g){d[h++]=b[0];return{pos:h}}b=f.determinebaseyear(f.yearrange.minyear,f.yearrange.maxyear,e+"0").toString().slice(0,2);g=f.isInYearRange(b+e,f.yearrange.minyear,f.yearrange.maxyear);if(g){d[h++]=b[0];d[h++]=b[1];return{pos:h}}}return g},cardinality:1},{validator:function(c,d,g,h,b){var j=b.isInYearRange(c,b.yearrange.minyear,b.yearrange.maxyear);if(!h&&!j){var e=b.determinebaseyear(b.yearrange.minyear,b.yearrange.maxyear,c).toString().slice(0,2);j=b.isInYearRange(c[0]+e[1]+c[1],b.yearrange.minyear,b.yearrange.maxyear);if(j){d[g++]=e[1];return{pos:g}}e=b.determinebaseyear(b.yearrange.minyear,b.yearrange.maxyear,c).toString().slice(0,2);if(b.isInYearRange(e+c,b.yearrange.minyear,b.yearrange.maxyear)){var i=d.join("").substr(0,6);if(i!=b.leapday){j=true}else{var f=parseInt(c,10);if(f%4===0){if(f%100===0){if(f%400===0){j=true}else{j=false}}else{j=true}}else{j=false}}}else{j=false}if(j){d[g-1]=e[0];d[g++]=e[1];d[g++]=c[0];return{pos:g}}}return j},cardinality:2},{validator:function(d,c,f,b,e){return e.isInYearRange(d,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:3}]}},insertMode:false,autoUnmask:false},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(c){var b=a.inputmask.escapeRegex.call(this,c);return new RegExp("((0[13-9]|1[012])"+b+"[0-3])|(02"+b+"[0-2])")},val2:function(c){var b=a.inputmask.escapeRegex.call(this,c);return new RegExp("((0[1-9]|1[012])"+b+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+b+"30)|((0[13578]|1[02])"+b+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyUp:function(f,b,d){var g=a(this);if(f.ctrlKey&&f.keyCode==d.keyCode.RIGHT){var c=new Date();g.val((c.getMonth()+1).toString()+c.getDate().toString()+c.getFullYear().toString())}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyUp:function(f,b,d){var g=a(this);if(f.ctrlKey&&f.keyCode==d.keyCode.RIGHT){var c=new Date();g.val(c.getFullYear().toString()+(c.getMonth()+1).toString()+c.getDate().toString())}},definitions:{"2":{validator:function(d,e,g,h,b){var c=e.join("").substr(5,3);if(c.indexOf(b.placeholder[5])!=-1){c="01"+b.separator}var j=b.regex.val2(b.separator).test(c+d);if(!h&&!j){if(d.charAt(1)==b.separator||"-./".indexOf(d.charAt(1))!=-1){j=b.regex.val2(b.separator).test(c+"0"+d.charAt(0));if(j){e[g-1]="0";return{pos:g,c:d.charAt(0)}}}}if(j){var i=e.join("").substr(4,4)+d;if(i!=b.leapday){return true}else{var f=parseInt(e.join("").substr(0,4),10);if(f%4===0){if(f%100===0){if(f%400===0){return true}else{return false}}else{return true}}else{return false}}}return j},cardinality:2,prevalidator:[{validator:function(d,c,h,b,e){var g=c.join("").substr(5,3);if(g.indexOf(e.placeholder[5])!=-1){g="01"+e.separator}var f=e.regex.val2pre(e.separator).test(g+d);if(!b&&!f){f=e.regex.val2(e.separator).test(g+"0"+d);if(f){c[h]="0";h++;return{pos:h}}}return f},cardinality:1}]}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-9]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-3]"),ampm:new RegExp("^[a|p|A|P][m|M]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(e,c,h,b,f){var g=f.regex.hrs.test(e);if(!b&&!g){if(e.charAt(1)==f.timeseparator||"-.:".indexOf(e.charAt(1))!=-1){g=f.regex.hrs.test("0"+e.charAt(0));if(g){c[h-1]="0";c[h]=e.charAt(0);h++;return{pos:h}}}}if(g&&f.hourFormat!=="24"&&f.regex.hrs24.test(e)){var d=parseInt(e,10);if(d==24){c[h+5]="a";c[h+6]="m"}else{c[h+5]="p";c[h+6]="m"}d=d-12;if(d<10){c[h]=d.toString();c[h-1]="0"}else{c[h]=d.toString().charAt(1);c[h-1]=d.toString().charAt(0)}return{pos:h,c:c[h]}}return g},cardinality:2,prevalidator:[{validator:function(d,c,g,b,e){var f=e.regex.hrspre.test(d);if(!b&&!f){f=e.regex.hrs.test("0"+d);if(f){c[g]="0";g++;return{pos:g}}}return f},cardinality:1}]},t:{validator:function(d,c,f,b,e){return e.regex.ampm.test(d+"m")},casing:"lower",cardinality:1}},insertMode:false,autoUnmask:false},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",autoUnmask:false},"hh:mm":{mask:"h:s",autoUnmask:false},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"}})})(jQuery);