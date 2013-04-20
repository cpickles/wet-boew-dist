/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.txt / wet-boew.github.io/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-release Build: 2013-04-20 03:17 AM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-intranet",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,gridsmenu:null,menu:null,favicon:{href:"images/favicon-mobile.png",rel:"apple-touch-icon",sizes:"57x57 72x72 114x114 144x144 150x150"},init:function(){b.gcnb=pe.header.find("#gcwu-gcnb");b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");b.gridsmenu=pe.main.find(".module-menu-section");var j=pe.menu.navcurrent(b.menubar,b.bcrumb),i=j.parents("div.mb-sm"),e,h=pe.mobile,d=(h?["gcwu-wmms"]:["gcwu-wmms","gcwu-sig"]),k,g,f=b.sft.length!==0;if(!pe.svg||pe.svgfix){e=d.length;while(e--){k=document.getElementById(d[e]);if(k!==null){g=k.getElementsByTagName("object");if(g.length>0){g=g[0];g.parentNode.innerHTML=g.parentNode.innerHTML.replace(/<object[\s\S]*?\/object>/i,((h&&f)?g.innerHTML.replace(".png","-w.png"):g.innerHTML))}}}}if(i.length!==0){i.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){j=pe.menu.navcurrent(pe.secnav,b.bcrumb);i=j.parents("ul");i.prev().children("a").addClass("nav-current-nocss")}if(b.gridsmenu.length!==0){j=pe.menu.navcurrent(b.gridsmenu,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var v,L="",e,m,T=pe.dic.get("%settings"),z,r,f,l,R,W="",t='<a data-role="button" data-iconpos="notext"',B=' data-rel="popup" data-position-to="window"',o=t+B,C='<div data-role="popup" data-overlay-theme="a"',F='<div data-role="header"',V=F+"><h1>",A=' data-theme="c" class="ui-corner-all">',p=F+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',S=t+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-right">'+pe.dic.get("%close")+"</a>",O=o+' data-icon="back" class="ui-btn-left"',M=">"+pe.dic.get("%back")+"</a>",U="</div></div>",n='<ul data-role="listview"',w="",I,k,s,q,H,g,d,Q,u,J,E,y=c(document),N,j,x,K,G,P,D;if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.bcrumb.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");r=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");v=C+' id="jqm-wb-mb">'+V+e+"</h1>"+S+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){E=b.bcrumb[0];I=E.getElementsByTagName("a");if(I.length!==0){N=I[0].href}v+='<section><div id="jqm-mb-location-text">'+E.innerHTML+"</div></section>"}else{v+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){L+="<section><div><h2>"+r.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>"}if(b.menubar.length!==0){L+="<section><div><h2>"+b.psnb.children(":header")[0].innerHTML+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}v+='<div id="jqm-mb-menu"></div></nav></div></div></div>';W+=v;b.menu=L;w+=o+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){m=pe.dic.get("%search");f=b.search[0];l=f.innerHTML;f=f.getElementsByTagName("input");u=f.length;while(u--){f[u].setAttribute("data-role","none")}R=C+' id="jqm-wb-search">'+V+m+"</h1>"+S+'</div><div data-role="content"><div>'+l.substring(l.indexOf("<form"))+"</div></div></div>";W+=R;w+=o+' data-icon="search" href="#jqm-wb-search">'+m+"</a>"}j='<div data-role="header"><div class="ui-title"></div><map id="gcwu-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof N!=="undefined"){j+=t+' href="'+N+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){j+=t+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(w.length!==0){j+=w}j+=o+' href="#popupSettings" data-icon="gear">'+T+"</a></map></div>";b.gcnb.children("#gcwu-gcnb-in").before(j);b.title[0].className+=" ui-bar-b";D=document.getElementById("wb-session");q=b.gcnb.find('li[id*="-lang"]');z=C+' id="popupSettings"'+A;z+=p+T+"</h1>"+S+"</div>";z+=h+n+">";if(D!==null){K=D.getElementsByClassName("settings");for(Q=0,u=K.length;Q!==u;Q+=1){G=K[Q].getElementsByTagName("a")[0];z+='<li><a href="'+G.getAttribute("href")+'">'+G.innerHTML+"</a></li>"}P=D.getElementsByClassName("session")[0].getElementsByTagName("a")[0];z+='<li><a href="'+P.getAttribute("href")+'">'+P.innerHTML+"</a></li>"}if(q.length!==0){z+='<li><a href="#popupLanguages"'+B+">"+pe.dic.get("%languages")+"</a></li>"}z+='<li class="ui-corner-bottom"><a href="#popupAbout"'+B+">"+pe.dic.get("%about")+"</a></li>";z+="</ul>"+U;if(q.length!==0){z+=C+' id="popupLanguages"'+A;z+=p+pe.dic.get("%languages")+"</h1>"+O+' href="#popupSettings"'+M+S+"</div>";z+=h+n+">";if(q.filter('[id*="-lang-current"]').length===0){z+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}J=q.get();u=J.length;Q=u;while(Q--){E=J[Q];k=E.getElementsByTagName("a")[0];z+="<li"+(Q===0?' class="ui-corner-bottom"':"");if(E.id.indexOf("-lang-current")!==-1){z+='><a href="javascript:;" class="ui-disabled">'+E.innerHTML+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}else{z+='><a href="'+k.href+'" lang="'+k.getAttribute("lang")+'">'+k.innerHTML+"</a></li>"}}z+="</ul>"+U}z+=C+' id="popupAbout"'+A;z+=p+pe.dic.get("%about")+"</h1>"+O+' href="#popupSettings"'+M+S+"</div>";z+=h;z+='<div class="site-app-title"><div class="ui-title">'+b.title.text()+"</div></div>";E=pe.main.find("#gcwu-date-mod").children();if(E.length!==0){d=E[1];if(d.getElementsByTagName("time").length===0){z+='<div class="app-version">'+E[0].innerHTML+" "+d.innerHTML+"</div>"}}z+=n+' data-inset="true">';I=document.getElementById("gcwu-tctr").getElementsByTagName("a");for(Q=0,u=I.length;Q!==u;Q+=1){k=I[Q];z+='<li><a href="'+k.href+'">'+k.innerHTML+"</a></li>"}I=b.sft.find(".gcwu-col-head a").get();for(Q=0,u=I.length;Q!==u;Q+=1){k=I[Q];E=k.innerHTML;d=E.toLowerCase();z+="<li"+(Q===(u-1)?' class="ui-corner-bottom"':"")+'><a href="'+k.href+'">'+E+"</a></li>"}z+="</ul>"+U;pe.bodydiv.append(W+z)}else{q=document.getElementById("gcwu-lang");if(q!==null){J=q.getElementsByTagName("li");H='<div data-role="navbar"><ul>';for(Q=0,u=J.length;Q<u;Q+=1){E=J[Q];k=E.getElementsByTagName("a")[0];H+='<li><a href="'+k.href+'"'+(E.hasAttribute("lang")?' lang="'+E.getAttribute("lang")+'"':"")+' data-theme="a">'+k.innerHTML+"</a></li>"}H+="</ul></div>";document.getElementById("gcwu-ef-lang").parentNode.innerHTML=H;q=document.getElementById("gcwu-other-lang");if(q!==null){q.parentNode.removeChild(q)}}d=document.getElementById("gcwu-tc");if(d!==null){J=d.getElementsByTagName("li");s='<ul class="ui-grid-a">';for(Q=0,u=J.length;Q<u;Q+=1){E=J[Q];k=E.getElementsByTagName("a")[0];s+='<li class="ui-block-'+(Q%2!==0?"b":"a")+'"><a href="'+k.href+'"'+(E.hasAttribute("lang")?' lang="'+E.getAttribute("lang")+'"':"")+' data-role="button" data-theme="c" data-corners="false">'+k.innerHTML+"</a></li>"}s+="</ul>";d.id="";d.className="";d.setAttribute("data-role","footer");d.innerHTML=s}x=document.getElementById("gcwu-wmms");if(x!==null){pe.footer[0].getElementsByTagName("footer")[0].appendChild(x.cloneNode(true));x.parentNode.removeChild(x)}}y.on("pagecreate",function(){var aa=b.gcnb.find("#gcwu-mnavbar"),ac=pe.bodydiv.find("#jqm-mb-menu"),ab,Z,X,Y;if(aa.length!==0){if(!aa.hasClass("ui-controlgroup")){aa.controlgroup()}aa.removeClass("wb-hide");if(ac.length!==0){ac.append(b.menu);aa.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){ac.trigger("create");ab=ac.find(".ui-controlgroup");Z=ab.get();u=Z.length;while(u--){E=Z[u];Y=E.getElementsByTagName("li")[0];if(Y.parentNode.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&Y.className.indexOf("ui-corner-top")===-1){Y.className+=" ui-corner-top"}X=ab.eq(u).find(".ui-btn").get();E=X[X.length-1];if(typeof E!=="undefined"&&E.className.indexOf("ui-corner-bottom")===-1){E.className+=" ui-corner-bottom"}}})}}function i(ae,ad,ah,ag){var af;c.mobile.showPageLoadingMsg();af=c.mobile.transitionHandlers.simultaneous("pop",ad,ah,ag);af.done(function(){c.mobile.hidePageLoadingMsg()});return af}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});y.trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));