/*! Select2 4.0.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd){var b=jQuery.fn.select2.amd}return b.define("select2/i18n/hi",[],function(){return{errorLoading:function(){return"परिणामों को लोड नहीं किया जा सका।"},inputTooLong:function(f){var a=f.input.length-f.maximum,e=a+" अक्षर को हटा दें";return a>1&&(e=a+" अक्षरों को हटा दें "),e},inputTooShort:function(f){var a=f.minimum-f.input.length,e="कृपया "+a+" या अधिक अक्षर दर्ज करें";return e},loadingMore:function(){return"अधिक परिणाम लोड हो रहे है..."},maximumSelected:function(d){var a="आप केवल "+d.maximum+" आइटम का चयन कर सकते हैं";return a},noResults:function(){return"कोई परिणाम नहीं मिला"},searching:function(){return"खोज रहा है..."}}}),{define:b.define,require:b.require}})();