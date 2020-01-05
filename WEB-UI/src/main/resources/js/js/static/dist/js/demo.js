(function(S,T){var I=["skin-blue","skin-black","skin-red","skin-yellow","skin-purple","skin-green","skin-blue-light","skin-black-light","skin-red-light","skin-yellow-light","skin-purple-light","skin-green-light"];var z=S("<div />",{id:"control-sidebar-theme-demo-options-tab","class":"tab-pane active"});var N=S("<li />",{"class":"active"}).html("<a href='#control-sidebar-theme-demo-options-tab' data-toggle='tab'><i class='fa fa-wrench'></i></a>");S("[href='#control-sidebar-home-tab']").parent().before(N);var y=S("<div />");y.append("<h4 class='control-sidebar-heading'>Layout Options</h4><div class='form-group'><label class='control-sidebar-subheading'><input type='checkbox' data-layout='fixed' class='pull-right'/> Fixed layout</label><p>Activate the fixed layout. You can't use fixed and boxed layouts together</p></div><div class='form-group'><label class='control-sidebar-subheading'><input type='checkbox' data-layout='layout-boxed'class='pull-right'/> Boxed Layout</label><p>Activate the boxed layout</p></div><div class='form-group'><label class='control-sidebar-subheading'><input type='checkbox' data-layout='sidebar-collapse' class='pull-right'/> Toggle Sidebar</label><p>Toggle the left sidebar's state (open or collapse)</p></div><div class='form-group'><label class='control-sidebar-subheading'><input type='checkbox' data-enable='expandOnHover' class='pull-right'/> Sidebar Expand on Hover</label><p>Let the sidebar mini expand on hover</p></div><div class='form-group'><label class='control-sidebar-subheading'><input type='checkbox' data-controlsidebar='control-sidebar-open' class='pull-right'/> Toggle Right Sidebar Slide</label><p>Toggle between slide over content and push content effects</p></div><div class='form-group'><label class='control-sidebar-subheading'><input type='checkbox' data-sidebarskin='toggle' class='pull-right'/> Toggle Right Sidebar Skin</label><p>Toggle between dark and light skins for the right sidebar</p></div>");var O=S("<ul />",{"class":"list-unstyled clearfix"});var J=S("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-blue' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px; background: #367fa9;'></span><span class='bg-light-blue' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin'>Blue</p>");O.append(J);var V=S("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-black' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div style='box-shadow: 0 0 2px rgba(0,0,0,0.1)' class='clearfix'><span style='display:block; width: 20%; float: left; height: 7px; background: #fefefe;'></span><span style='display:block; width: 80%; float: left; height: 7px; background: #fefefe;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #222;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin'>Black</p>");O.append(V);var L=S("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-purple' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-purple-active'></span><span class='bg-purple' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin'>Purple</p>");O.append(L);var C=S("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-green' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-green-active'></span><span class='bg-green' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin'>Green</p>");O.append(C);var E=S("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-red' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-red-active'></span><span class='bg-red' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin'>Red</p>");O.append(E);var P=S("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-yellow' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-yellow-active'></span><span class='bg-yellow' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin'>Yellow</p>");O.append(P);var M=S("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-blue-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px; background: #367fa9;'></span><span class='bg-light-blue' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin' style='font-size: 12px'>Blue Light</p>");O.append(M);var U=S("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-black-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div style='box-shadow: 0 0 2px rgba(0,0,0,0.1)' class='clearfix'><span style='display:block; width: 20%; float: left; height: 7px; background: #fefefe;'></span><span style='display:block; width: 80%; float: left; height: 7px; background: #fefefe;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin' style='font-size: 12px'>Black Light</p>");O.append(U);var H=S("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-purple-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-purple-active'></span><span class='bg-purple' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin' style='font-size: 12px'>Purple Light</p>");O.append(H);var G=S("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-green-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-green-active'></span><span class='bg-green' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin' style='font-size: 12px'>Green Light</p>");O.append(G);var D=S("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-red-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-red-active'></span><span class='bg-red' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin' style='font-size: 12px'>Red Light</p>");O.append(D);var F=S("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-yellow-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-yellow-active'></span><span class='bg-yellow' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin' style='font-size: 12px;'>Yellow Light</p>");O.append(F);y.append("<h4 class='control-sidebar-heading'>Skins</h4>");y.append(O);z.append(y);S("#control-sidebar-home-tab").after(z);K();function A(a){S("body").toggleClass(a);T.layout.fixSidebar();if(a=="layout-boxed"){T.controlSidebar._fix(S(".control-sidebar-bg"))}if(S("body").hasClass("fixed")&&a=="fixed"){T.pushMenu.expandOnHover();T.layout.activate()}T.controlSidebar._fix(S(".control-sidebar-bg"));T.controlSidebar._fix(S(".control-sidebar"))}function R(a){S.each(I,function(b){S("body").removeClass(I[b])});S("body").addClass(a);Q("skin",a);return false}function Q(b,a){if(typeof(Storage)!=="undefined"){localStorage.setItem(b,a)}else{window.alert("Please use a modern browser to properly view this template!")}}function B(a){if(typeof(Storage)!=="undefined"){return localStorage.getItem(a)}else{window.alert("Please use a modern browser to properly view this template!")}}function K(){var a=B("skin");if(a&&S.inArray(a,I)){R(a)}S("[data-skin]").on("click",function(b){b.preventDefault();R(S(this).data("skin"))});S("[data-layout]").on("click",function(){A(S(this).data("layout"))});S("[data-controlsidebar]").on("click",function(){A(S(this).data("controlsidebar"));var b=!T.options.controlSidebarOptions.slide;T.options.controlSidebarOptions.slide=b;if(!b){S(".control-sidebar").removeClass("control-sidebar-open")}});S("[data-sidebarskin='toggle']").on("click",function(){var b=S(".control-sidebar");if(b.hasClass("control-sidebar-dark")){b.removeClass("control-sidebar-dark");b.addClass("control-sidebar-light")}else{b.removeClass("control-sidebar-light");b.addClass("control-sidebar-dark")}});S("[data-enable='expandOnHover']").on("click",function(){S(this).attr("disabled",true);T.pushMenu.expandOnHover();if(!S("body").hasClass("sidebar-collapse")){S("[data-layout='sidebar-collapse']").click()}});if(S("body").hasClass("fixed")){S("[data-layout='fixed']").attr("checked","checked")}if(S("body").hasClass("layout-boxed")){S("[data-layout='layout-boxed']").attr("checked","checked")}if(S("body").hasClass("sidebar-collapse")){S("[data-layout='sidebar-collapse']").attr("checked","checked")}}})(jQuery,$.AdminLTE);