/*! Select2 4.0.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd){var a=jQuery.fn.select2.amd}return a.define("select2/i18n/nb",[],function(){return{inputTooLong:function(c){var b=c.input.length-c.maximum;return"Vennligst fjern "+b+" tegn"},inputTooShort:function(c){var b=c.minimum-c.input.length,d="Vennligst skriv inn ";return b>1?d+=" flere tegn":d+=" tegn til",d},loadingMore:function(){return"Laster flere resultater…"},maximumSelected:function(b){return"Du kan velge maks "+b.maximum+" elementer"},noResults:function(){return"Ingen treff"},searching:function(){return"Søker…"}}}),{define:a.define,require:a.require}})();