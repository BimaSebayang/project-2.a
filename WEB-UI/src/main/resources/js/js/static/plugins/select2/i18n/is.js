/*! Select2 4.0.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd){var b=jQuery.fn.select2.amd}return b.define("select2/i18n/is",[],function(){return{inputTooLong:function(f){var a=f.input.length-f.maximum,e="Vinsamlegast styttið texta um "+a+" staf";return a<=1?e:e+"i"},inputTooShort:function(f){var a=f.minimum-f.input.length,e="Vinsamlegast skrifið "+a+" staf";return a>1&&(e+="i"),e+=" í viðbót",e},loadingMore:function(){return"Sæki fleiri niðurstöður…"},maximumSelected:function(a){return"Þú getur aðeins valið "+a.maximum+" atriði"},noResults:function(){return"Ekkert fannst"},searching:function(){return"Leita…"}}}),{define:b.define,require:b.require}})();