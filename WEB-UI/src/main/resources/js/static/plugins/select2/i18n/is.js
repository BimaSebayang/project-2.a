/*! Select2 4.0.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd){var a=jQuery.fn.select2.amd}return a.define("select2/i18n/is",[],function(){return{inputTooLong:function(c){var b=c.input.length-c.maximum,d="Vinsamlegast styttið texta um "+b+" staf";return b<=1?d:d+"i"},inputTooShort:function(c){var b=c.minimum-c.input.length,d="Vinsamlegast skrifið "+b+" staf";return b>1&&(d+="i"),d+=" í viðbót",d},loadingMore:function(){return"Sæki fleiri niðurstöður…"},maximumSelected:function(b){return"Þú getur aðeins valið "+b.maximum+" atriði"},noResults:function(){return"Ekkert fannst"},searching:function(){return"Leita…"}}}),{define:a.define,require:a.require}})();