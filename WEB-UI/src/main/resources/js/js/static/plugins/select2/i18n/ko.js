/*! Select2 4.0.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd){var b=jQuery.fn.select2.amd}return b.define("select2/i18n/ko",[],function(){return{errorLoading:function(){return"결과를 불러올 수 없습니다."},inputTooLong:function(f){var a=f.input.length-f.maximum,e="너무 깁니다. "+a+" 글자 지워주세요.";return e},inputTooShort:function(f){var a=f.minimum-f.input.length,e="너무 짧습니다. "+a+" 글자 더 입력해주세요.";return e},loadingMore:function(){return"불러오는 중…"},maximumSelected:function(d){var a="최대 "+d.maximum+"개까지만 선택 가능합니다.";return a},noResults:function(){return"결과가 없습니다."},searching:function(){return"검색 중…"}}}),{define:b.define,require:b.require}})();