/*! Select2 4.0.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd){var b=jQuery.fn.select2.amd}return b.define("select2/i18n/es",[],function(){return{errorLoading:function(){return"La carga falló"},inputTooLong:function(f){var a=f.input.length-f.maximum,e="Por favor, elimine "+a+" car";return a==1?e+="ácter":e+="acteres",e},inputTooShort:function(f){var a=f.minimum-f.input.length,e="Por favor, introduzca "+a+" car";return a==1?e+="ácter":e+="acteres",e},loadingMore:function(){return"Cargando más resultados…"},maximumSelected:function(d){var a="Sólo puede seleccionar "+d.maximum+" elemento";return d.maximum!=1&&(a+="s"),a},noResults:function(){return"No se encontraron resultados"},searching:function(){return"Buscando…"}}}),{define:b.define,require:b.require}})();