/*! Select2 4.0.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd){var b=jQuery.fn.select2.amd}return b.define("select2/i18n/hr",[],function(){function a(e){var f=" "+e+" znak";return e%10<5&&e%10>0&&(e%100<5||e%100>19)?e%10>1&&(f+="a"):f+="ova",f}return{errorLoading:function(){return"Preuzimanje nije uspjelo."},inputTooLong:function(f){var e=f.input.length-f.maximum;return"Unesite "+a(e)},inputTooShort:function(f){var e=f.minimum-f.input.length;return"Unesite još "+a(e)},loadingMore:function(){return"Učitavanje rezultata…"},maximumSelected:function(d){return"Maksimalan broj odabranih stavki je "+d.maximum},noResults:function(){return"Nema rezultata"},searching:function(){return"Pretraga…"}}}),{define:b.define,require:b.require}})();