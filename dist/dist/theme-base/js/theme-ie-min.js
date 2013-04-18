/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.txt / wet-boew.github.io/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-release Build: 2013-04-18 06:05 AM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-base",psnb:null,search:null,bcrumb:null,title:null,sft:null,fullft:null,gridsmenu:null,menu:null,favicon:{href:"images/favicon-mobile.png",rel:"apple-touch-icon",sizes:"57x57 72x72 114x114 144x144 150x150"},init:function(){b.fullhd=pe.header.find("#base-fullhd");b.psnb=pe.header.find("#base-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#base-srchbx");b.bcrumb=pe.header.find("#base-bc");b.title=pe.header.find("#base-title");b.sft=pe.footer.find("#base-sft");b.fullft=pe.footer.find("#base-fullft");b.gridsmenu=pe.main.find(".module-menu-section");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){e=pe.menu.navcurrent(pe.secnav,b.bcrumb);d=e.parents("ul");d.prev().children("a").addClass("nav-current-nocss")}if(b.gridsmenu.length!==0){e=pe.menu.navcurrent(b.gridsmenu,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var u,I="",e,m,Q=pe.dic.get("%settings"),x,r,f,l,O,T="",s='<a data-role="button" data-iconpos="notext"',z=' data-rel="popup" data-position-to="window"',o=s+z,A='<div data-role="popup" data-overlay-theme="a"',D='<div data-role="header"',S=D+"><h1>",y=' data-theme="c" class="ui-corner-all">',p=D+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',P=s+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-right">'+pe.dic.get("%close")+"</a>",L=o+' data-icon="back" class="ui-btn-left"',J=">"+pe.dic.get("%back")+"</a>",R="</div></div>",n='<ul data-role="listview"',v="",F,k,q,g,d,N,t,G,C,w=c(document),K,j,H,E,M,B;if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.bcrumb.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");r=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");u=A+' id="jqm-wb-mb">'+S+e+"</h1>"+P+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){C=b.bcrumb[0];K=C.getElementsByTagName("a")[0].href;u+='<section><div id="jqm-mb-location-text">'+C.innerHTML+"</div></section>"}else{u+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){I+="<section><div><h2>"+r.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>"}if(b.menubar.length!==0){I+="<section><div><h2>"+b.psnb.children(":header")[0].innerHTML+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}u+='<div id="jqm-mb-menu"></div></nav></div></div></div>';T+=u;b.menu=I;v+=o+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){m=pe.dic.get("%search");f=b.search[0];l=f.innerHTML;f=f.getElementsByTagName("input");t=f.length;while(t--){f[t].setAttribute("data-role","none")}O=A+' id="jqm-wb-search">'+S+m+"</h1>"+P+'</div><div data-role="content"><div>'+l.substring(l.indexOf("<form"))+"</div></div></div>";T+=O;v+=o+' data-icon="search" href="#jqm-wb-search">'+m+"</a>"}j='<div data-role="header"><div class="ui-title"></div>';j+='<map id="base-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof K!=="undefined"){j+=s+' href="'+K+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){j+=s+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(v.length!==0){j+=v}j+=o+' href="#popupSettings" data-icon="gear">'+Q+"</a></map></div>";b.fullhd.children("#base-fullhd-in").before(j);b.title[0].className+=" ui-bar-b";B=document.getElementById("wb-session");q=b.fullhd.find('li[id*="-lang"]');x=A+' id="popupSettings"'+y;x+=p+Q+"</h1>"+P+"</div>";x+=h+n+">";if(B!==null){H=B.getElementsByClassName("settings");for(N=0,t=H.length;N!==t;N+=1){E=H[N].getElementsByTagName("a")[0];x+='<li><a href="'+E.getAttribute("href")+'">'+E.innerHTML+"</a></li>"}M=B.getElementsByClassName("session")[0].getElementsByTagName("a")[0];x+='<li><a href="'+M.getAttribute("href")+'">'+M.innerHTML+"</a></li>"}if(q.length!==0){x+='<li><a href="#popupLanguages"'+z+">"+pe.dic.get("%languages")+"</a></li>"}x+='<li class="ui-corner-bottom"><a href="#popupAbout"'+z+">"+pe.dic.get("%about")+"</a></li>";x+="</ul>"+R;if(q.length!==0){x+=A+' id="popupLanguages"'+y;x+=p+pe.dic.get("%languages")+"</h1>"+L+' href="#popupSettings"'+J+P+"</div>";x+=h+n+">";if(q.filter('[id*="-lang-current"]').length===0){x+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}G=q.get();t=G.length;N=t;while(N--){C=G[N];k=C.getElementsByTagName("a")[0];x+="<li"+(N===0?' class="ui-corner-bottom"':"");if(C.id.indexOf("-lang-current")!==-1){x+='><a href="javascript:;" class="ui-disabled">'+C.innerHTML+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}else{x+='><a href="'+k.href+'" lang="'+k.getAttribute("lang")+'">'+k.innerHTML+"</a></li>"}}x+="</ul>"+R}x+=A+' id="popupAbout"'+y;x+=p+pe.dic.get("%about")+"</h1>"+L+' href="#popupSettings"'+J+P+"</div>";x+=h;x+='<div class="site-app-title"><div class="ui-title">'+b.title.text()+"</div></div>";C=pe.main.find("#base-date-mod").children();if(C.length!==0){d=C[1];if(d.getElementsByTagName("time").length===0){x+='<div class="app-version">'+C[0].innerHTML+" "+d.innerHTML+"</div>"}}x+=n+' data-inset="true">';F=b.sft.find(".base-col-head a").get();for(N=0,t=F.length;N!==t;N+=1){k=F[N];C=k.innerHTML;d=C.toLowerCase();x+="<li"+(N===(t-1)?' class="ui-corner-bottom"':"")+'><a href="'+k.href+'">'+C+"</a></li>"}x+="</ul>"+R;pe.bodydiv.append(T+x)}w.on("pagecreate",function(){var X=b.fullhd.find("#base-mnavbar"),Z=pe.bodydiv.find("#jqm-mb-menu"),Y,W,U,V;if(X.length!==0){if(!X.hasClass("ui-controlgroup")){X.controlgroup()}X.removeClass("wb-hide");if(Z.length!==0){Z.append(b.menu);X.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){Z.trigger("create");Y=Z.find(".ui-controlgroup");W=Y.get();t=W.length;while(t--){C=W[t];V=C.getElementsByTagName("li")[0];if(V.parentNode.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&V.className.indexOf("ui-corner-top")===-1){V.className+=" ui-corner-top"}U=Y.eq(t).find(".ui-btn").get();C=U[U.length-1];if(typeof C!=="undefined"&&C.className.indexOf("ui-corner-bottom")===-1){C.className+=" ui-corner-bottom"}}})}}function i(ab,aa,ae,ad){var ac;c.mobile.showPageLoadingMsg();ac=c.mobile.transitionHandlers.simultaneous("pop",aa,ae,ad);ac.done(function(){c.mobile.hidePageLoadingMsg()});return ac}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});w.trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));