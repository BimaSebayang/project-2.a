/*! Select2 4.0.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd){var a=jQuery.fn.select2.amd}return a.define("select2/i18n/ja",[],function(){return{errorLoading:function(){return"結果が読み込まれませんでした"},inputTooLong:function(c){var b=c.input.length-c.maximum,d=b+" 文字を削除してください";return d},inputTooShort:function(c){var b=c.minimum-c.input.length,d="少なくとも "+b+" 文字を入力してください";return d},loadingMore:function(){return"読み込み中…"},maximumSelected:function(c){var b=c.maximum+" 件しか選択できません";return b},noResults:function(){return"対象が見つかりません"},searching:function(){return"検索しています…"}}}),{define:a.define,require:a.require}})();