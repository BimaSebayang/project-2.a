/*! Select2 4.0.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd){var b=jQuery.fn.select2.amd}return b.define("select2/i18n/lt",[],function(){function a(h,j,e,i){return h%100>9&&h%100<21||h%10===0?h%10>1?e:i:j}return{inputTooLong:function(h){var f=h.input.length-h.maximum,g="Pašalinkite "+f+" simbol";return g+=a(f,"ių","ius","į"),g},inputTooShort:function(h){var f=h.minimum-h.input.length,g="Įrašykite dar "+f+" simbol";return g+=a(f,"ių","ius","į"),g},loadingMore:function(){return"Kraunama daugiau rezultatų…"},maximumSelected:function(f){var e="Jūs galite pasirinkti tik "+f.maximum+" element";return e+=a(f.maximum,"ų","us","ą"),e},noResults:function(){return"Atitikmenų nerasta"},searching:function(){return"Ieškoma…"}}}),{define:b.define,require:b.require}})();