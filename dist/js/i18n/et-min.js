/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.txt / wet-boew.github.io/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-release Build: 2013-04-26 03:41 AM
 *
 */
(function(b){var a=window.pe||{fn:{}};a.dic.ind={"%lang-code":"et","%lang-eng":"Estonian","%lang-fra":"estonien","%lang-native":"eesti keel","%all":"Kõik","%home":"Kodu","%main-page":"Pealeht","%top-of-page":"Lehekülje algusesse","%you-are-in":"Te olete","%welcome-to":"Tere tulemast","%loading":"laadimise ...","%processing":"töötlemise ...","%search":"Otsi","%search-for-terms":"Otsi tingimustel:","%no-match-found":"Vastet ei leitud","%matches-found":{mixin:"[MIXIN] vaste leitud"},"%menu":"Menüü","%settings":"Seaded","%languages":"Keeled","%about":"Kohta","%current":"(praegune)","%hide":"Peida","%error":"Viga","%colon":":","%hyphen":" - ","%start":"Alusta","%stop":"Lõpeta","%back":"Tagasi","%new-window":"(avaneb uues aknas)","%minute-ago":"minut tagasi","%couple-of-minutes":"mõned minutid tagasi","%minutes-ago":{mixin:"[MIXIN] minutit tagasi"},"%hour-ago":"tund aega tagasi","%hours-ago":{mixin:"[MIXIN] tundi tagasi"},"%days-ago":{mixin:"[MIXIN] päeva tagasi"},"%yesterday":"eile","%next":"Järgmine","%previous":"Eelmine","%first":"Esmane","%last":"Viimane","%archived-page":"See veebileht on arhiveeritud.","%sub-menu-help":"(ava alamenüü sisene klahviga ja sulge escape klahviga)","%tab-rotation":{disable:"Seiska rotatsioon",enable:"Alusta rotatsiooni"},"%tab-list":"Sakk nimekirja","%tab-panel-end-1":"Lõpus see sakk paneel.","%tab-panel-end-2":"Tagasi sakk nimekirja.","%tab-panel-end-3":"või jätkata ülejäänud leht.","%play":"Mängi","%pause":"Paus","%open":"Avama","%close":"Sulge","%rewind":"Tagasi","%fast-forward":"Kiirelt edasi","%mute":{enable:"Vaigista",disable:"heli tagasi"},"%closed-caption":{disable:"Peida subtiitrid",enable:"Näita subtiitreid"},"%closed-caption-error":"Viga subtiitrite avamisel","%audio-description":{enable:"Luba audio kirjeldus",disable:"Sulge audio kirjeldus"},"%progress-bar":"kasuta vasakut nooleklahvi ja paremat nooleklahvi edasi ja tagasi liikumiseks","%no-video":"Sinu brauser ei võimalda mängida seda videot, palun lae video alla","%position":"Hetke asukoht","%percentage":"Protsent lugemine:","%duration":"Kogu kestvus:","%buffered":"Puhverdatud:","%favourite":"Lemmik","%email":"E-post","%share-text":"Jaga seda lehekülge","%share-hint":"koos {s}","%share-email-subject":"Huvitav lehekülg","%share-email-body":"Ma arvasin, et sa leiad selle lehekülje huvitava olevat:n{t} ({u})","%share-fav-title":"(järjehoidja see lehekülg)","%share-manual":"Palun sule see akne ja vajuta Ctrl-D märgistamaks seda lehekülge","%share-showall":"Näita kõiki ({n})","%share-showall-title":"Kõik märgitud leheküljed","%share-disclaimer":"Ei toetust mistahes tooteid või teenuseid on väljendatud või kaudseid.","%form-not-submitted":"Ankeeti ei saa esitada kuna","%errors-found":"vead leitud.","%error-found":"viga leitud.","%datepicker-hide":"Peida kalender","%datepicker-show":"Vali kuupäev kalendrist:","%datepicker-selected":"Valitud","%calendar-weekDayNames":["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"],"%calendar-monthNames":["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],"%calendar-currentDay":"(tänane päev)","%calendar-goToLink":'Mine<span class="wb-invisible"> sellele kuule aastas</span>',"%calendar-goToTitle":"Mine sellele kuule aastas","%calendar-goToMonth":"Kuu","%calendar-goToYear":"Aasta","%calendar-goToButton":"Mine","%calendar-cancelButton":"Tühista","%calendar-previousMonth":"Eelmine kuu:","%calendar-nextMonth":"Järgmine kuu:","%show-toc":"Näita","%show-text":"Näita sisukorda","%hide-text":"Peida sisukorda","%table-contents":"sisukord","%lb-current":"Nimetus {current} {total}","%lb-next":"Järgmine","%lb-prev":"Eelmine","%lb-xhr-error":"Laadimine ebaõnnestus","%lb-img-error":"Pildi laadimine ebaõnnestus","%lb-slideshow":"slaidi esitlus","%jqm-expand":"vajuta, et laiendada sisu","%jqm-collapse":"vajuta, et kitsenada sisu","%jqm-clear-search":"tühista otsing","%jqm-filter":"Filtreeri","%jqm-tbl-col-toggle":"Veerud ...","%table-mention":"Tabel","%table-following":"Graafik. Andmed tabelis järgmised","%st-timeout-msg":'Teie sessioon on aegumas, teil on kuni #expireTime# aktiveerida "OK" nuppu, et laiendada oma istungil.',"%st-msgbox-title":"Ajalõpp hoiatuse","%st-already-timeout-msg":"Vabandust su sessioon on aegunud. Palun logi uuesti sisse.","%td-toggle":"Lülitab kõik","%td-open":"Laienda kõik","%td-close":"Sulge kõik","%td-ttl-open":"Laienda kõik osad sisu","%td-ttl-close":"Sulge kõik osad sisu","%sSortAscending":": aktiveerige kasvavalt Järjesta","%sSortDescending":": aktiveerida Langeva sorteeri","%sEmptyTable":"Puuduvad andmed tabelis","%sInfo":"Näitan _START_-_END_ aasta _TOTAL_ kirjed","%sInfoEmpty":"Näitan 0-0 aasta 0 kirjed","%sInfoFiltered":"(filtreeritud 5 sissekandeid kokku)","%sInfoThousands":"&#160;","%sLengthMenu":"Näita _MENU_ kanded","%geo-mapcontrol":"Kaart kontroll","%geo-panup":"Panoraami üles","%geo-pandown":"Panoraami alla","%geo-panleft":"Pan jäänud","%geo-panright":"Pan õigus","%geo-zoomin":"Zoom","%geo-zoomout":"Vähenda","%geo-zoomworld":"Zoom kaardistada ulatuse","%geo-zoomslider":"Lohistage suumimiseks","%geo-zoomfeature":"Suurendus elemendi","%geo-ariamap":"Kaart objekti.Kirjeldused kaart funktsioonid on alljärgnevas tabelis.","%geo-accessibilize":"<strong>Klaviatuur loginud:</strong> Kui kaart on fookuses, kasutage nooleklahve kaarti liigutades ja pluss ja miinus klahvid suumimiseks. Nooleklahve ei pan kaart kui suumitud, et kaart ulatuses.","%geo-accessibilizetitle":"Juhised: Kaart navigatsioonini","%geo-togglelayer":"Lülitab kiht","%geo-hiddenlayer":"See kiht on praegu peidetud.","%geo-basemapurl":"http://geogratis.gc.ca/maps/CBMT","%geo-basemaptitle":"CBMT","%geo-select":"Valima","%geo-labelselect":"Saate valida elemendi kaardil","%pe-disable":"Lihtsustatud HTML versioon","%pe-enable":"Standardversioon"};a.document.trigger("languageloaded");window.pe=a;return a}(jQuery));