/*! Select2 4.0.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd){var a=jQuery.fn.select2.amd}return a.define("select2/i18n/sr",[],function(){function b(f,c,g,d){return f%10==1&&f%100!=11?c:f%10>=2&&f%10<=4&&(f%100<12||f%100>14)?g:d}return{errorLoading:function(){return"Preuzimanje nije uspelo."},inputTooLong:function(c){var e=c.input.length-c.maximum,d="Obrišite "+e+" simbol";return d+=b(e,"","a","a"),d},inputTooShort:function(c){var e=c.minimum-c.input.length,d="Ukucajte bar još "+e+" simbol";return d+=b(e,"","a","a"),d},loadingMore:function(){return"Preuzimanje još rezultata…"},maximumSelected:function(c){var d="Možete izabrati samo "+c.maximum+" stavk";return d+=b(c.maximum,"u","e","i"),d},noResults:function(){return"Ništa nije pronađeno"},searching:function(){return"Pretraga…"}}}),{define:a.define,require:a.require}})();