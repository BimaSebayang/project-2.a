/*! Select2 4.0.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd){var a=jQuery.fn.select2.amd}return a.define("select2/i18n/nl",[],function(){return{errorLoading:function(){return"De resultaten konden niet worden geladen."},inputTooLong:function(c){var b=c.input.length-c.maximum,d="Gelieve "+b+" karakters te verwijderen";return d},inputTooShort:function(c){var b=c.minimum-c.input.length,d="Gelieve "+b+" of meer karakters in te voeren";return d},loadingMore:function(){return"Meer resultaten laden…"},maximumSelected:function(c){var b=c.maximum==1?"kan":"kunnen",d="Er "+b+" maar "+c.maximum+" item";return c.maximum!=1&&(d+="s"),d+=" worden geselecteerd",d},noResults:function(){return"Geen resultaten gevonden…"},searching:function(){return"Zoeken…"}}}),{define:a.define,require:a.require}})();