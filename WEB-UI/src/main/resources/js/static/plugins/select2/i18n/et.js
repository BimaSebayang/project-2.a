/*! Select2 4.0.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd){var a=jQuery.fn.select2.amd}return a.define("select2/i18n/et",[],function(){return{inputTooLong:function(c){var b=c.input.length-c.maximum,d="Sisesta "+b+" täht";return b!=1&&(d+="e"),d+=" vähem",d},inputTooShort:function(c){var b=c.minimum-c.input.length,d="Sisesta "+b+" täht";return b!=1&&(d+="e"),d+=" rohkem",d},loadingMore:function(){return"Laen tulemusi…"},maximumSelected:function(c){var b="Saad vaid "+c.maximum+" tulemus";return c.maximum==1?b+="e":b+="t",b+=" valida",b},noResults:function(){return"Tulemused puuduvad"},searching:function(){return"Otsin…"}}}),{define:a.define,require:a.require}})();