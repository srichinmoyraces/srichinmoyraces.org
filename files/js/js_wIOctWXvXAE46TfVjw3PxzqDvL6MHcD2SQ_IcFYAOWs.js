!function(t,e){!function(i){function n(t){return new n.fn.init(t)}function a(e,i,n){if(!n.contentWindow.postMessage)return!1;var a=n.getAttribute("src").split("?")[0],r=JSON.stringify({method:e,value:i});"//"===a.substr(0,2)&&(a=t.location.protocol+a),n.contentWindow.postMessage(r,a)}function r(t){var e,i;try{e=JSON.parse(t.data),i=e.event||e.method}catch(n){}if("ready"!=i||c||(c=!0),"undefined"==typeof e)return!1;if(t.origin!=d)return!1;var a=e.value,r=e.data,o=""===o?null:e.player_id,l=s(i,o),h=[];return l?(void 0!==a&&h.push(a),r&&h.push(r),o&&h.push(o),h.length>0?l.apply(null,h):l.call()):!1}function o(t,e,i){i?(u[i]||(u[i]={}),u[i][t]=e):u[t]=e}function s(t,e){return e?u[e][t]:u[t]}function l(t,e){if(e&&u[e]){if(!u[e][t])return!1;u[e][t]=null}else{if(!u[t])return!1;u[t]=null}return!0}function h(e){"//"===e.substr(0,2)&&(e=t.location.protocol+e);for(var i=e.split("/"),n="",a=0,r=i.length;r>a&&3>a;a++)n+=i[a],2>a&&(n+="/");return n}function p(t){return!!(t&&t.constructor&&t.call&&t.apply)}var u={},c=!1,d=(Array.prototype.slice,"");return n.fn=n.prototype={element:null,init:function(t){return"string"==typeof t&&(t=e.getElementById(t)),this.element=t,d=h(this.element.getAttribute("src")),this},api:function(t,e){if(!this.element||!t)return!1;var i=this,n=i.element,r=""!==n.id?n.id:null,s=p(e)?null:e,l=p(e)?e:null;return l&&o(t,l,r),a(t,s,n),i},addEvent:function(t,e){if(!this.element)return!1;var i=this,n=i.element,r=""!==n.id?n.id:null;return o(t,e,r),"ready"!=t?a("addEventListener",t,n):"ready"==t&&c&&e.call(null,r),i},removeEvent:function(t){if(!this.element)return!1;var e=this,i=e.element,n=""!==i.id?i.id:null,r=l(t,n);"ready"!=t&&r&&a("removeEventListener",t,i)}},n.fn.init.prototype=n.fn,t.addEventListener?t.addEventListener("message",r,!1):t.attachEvent("onmessage",r),i.Froogaloop=i.$f=n}(t);var i=function(t){function e(t){for(var e=0;e<t.length;e++){var i="vimeo.com/api/v2/";t[e]=t[e].replace(/vimeo.com\/(\d+)$/i,i+"video/$1.json"),t[e]=t[e].replace(/vimeo.com\/([A-Z0-9]+)([\?A-Z0-9=]*)$/i,i+"$1/videos.json$2"),t[e]=t[e].replace(/vimeo.com\/groups\/([A-Z0-9]+)([\?A-Z0-9=]*)$/i,i+"group/$1/videos.json$2"),t[e]=t[e].replace(/vimeo.com\/channels\/([A-Z0-9]+)([\?A-Z0-9=]*)$/i,i+"channel/$1/videos.json$2"),t[e]=t[e].replace(/vimeo.com\/album\/([A-Z0-9]+)([\?A-Z0-9=]*)$/i,i+"album/$1/videos.json$2")}return t}function i(){a.jsonp(r.list[o++],{},n)}function n(e){s=s.concat(e),o<r.list.length?i():(t.events.playlist.dispatch(s),t.events.playlist.remove())}var r=this,o=0,s=[];this.load=function(t){return r.list=e(t),i(),s}},n=function(){var t=[];this.add=function(e){t.push(e)},this.dispatch=function(){for(var e=Array.prototype.slice.call(arguments),i=0;i<t.length;i++)"function"==typeof t[i]&&t[i].apply(this,e)},this.remove=function(e){if(e)for(var i=0;i<t.length;i++)t[i]===e&&(t.splice(i,1),i--);else t=[]}},a={};a.jsonp=function(i,n,r){var o=-1===i.indexOf("?")?"?":"&";n=n||{};for(var s in n)n.hasOwnProperty(s)&&(o+=encodeURIComponent(s)+"="+encodeURIComponent(n[s])+"&");var l=a.uniqueId("json_call");t[l]=function(e){r(e),t[l]=null};var h=e.createElement("script");h.src=i+o+"callback="+l,h.async=!0,h.onload=h.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(h.onload=h.onreadystatechange=null,h&&h.parentNode&&h.parentNode.removeChild(h))};var p=e.head||e.getElementsByTagName("head")[0]||e.documentElement;p.insertBefore(h,p.firstChild)},a.extend=function(t,e){for(var i in e)e[i]&&e[i].constructor&&e[i].constructor===Object?(t[i]=t[i]||{},arguments.callee(t[i],e[i])):t[i]=e[i];return t},a.css=function(t,e){if(t)for(var i in e)try{if("undefined"==typeof e[i])continue;if("number"==typeof e[i]&&"zIndex"!=i&&"opacity"!=i){if(isNaN(e[i]))continue;e[i]=Math.ceil(e[i])+"px"}t.style[i]=e[i]}catch(n){}},a.prepend=function(t,e){e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)};var r=0;a.uniqueId=function(t){var e=r++;return t?t+e:e},Array.indexOf||(Array.prototype.indexOf=function(t){for(var e=0;e<this.length;e++)if(this[e]==t)return e;return-1}),String.prototype.populate=function(t,e){return this.replace(/\{\{\s*([^|\s}]+)\|?([^\s}]*)\s*\}\}/g,function(i,n,a){var r=t[n];if("undefined"!=typeof r){if(e&&a)for(var o=a.split("|"),s=0;s<o.length;s++){var l=o[s].split(":")[0],h=o[s].split(":")[1],p=h?h.split(","):[];p.unshift(r),"function"==typeof e[l]&&(r=e[l].apply(r,p))}return r}return i})};var o={},s=t.vimeowrap=function(t){var i;if(t.nodeType?i=t:"string"==typeof t&&(i=e.getElementById(t)),i){var n=o[i.id];return n?n:o[i.id]=new s.api(i)}return null};s.utils=a,s.getPlayers=function(){return o},s.api=function(t){function r(t){u=t;var e=u[c.item];p.events.playlistItem.dispatch(e,c.item),o(e.url)}function o(t){a.jsonp("http://vimeo.com/api/oembed.json",l({url:t}),function(t){var i=e.createElement("div");i.innerHTML=t.html,p.iframe=i.children[0],p.iframe.id=c.player_id,a.css(p.iframe,{position:"absolute",display:"none"});var n=function(){a.css(p.iframe,{display:"block"})};p.iframe.attachEvent?p.iframe.attachEvent("onload",n):p.iframe.onload=n,a.prepend(p.iframe,p.display),Froogaloop(p.iframe.id).addEvent("ready",function(){p.player=Froogaloop(p.iframe.id),p.events.playerReady.dispatch(p.player),p.player.addEvent("finish",h)})})}function l(t){for(var e=["url","width","maxwidth","height","maxheight","byline","title","portrait","color","callback","autoplay","loop","xhtml","api","wmode","iframe","player_id","badge"],i=0;i<e.length;i++){var n=e[i];if(c.hasOwnProperty(n)){var a=c[n];"boolean"==typeof a&&(a=a?1:0),t[n]=a}}return t}function h(){var t;switch(c.repeat){case"list":t=c.item+1,t<u.length&&p.playlistItem(t,!0);break;case"always":t=c.item+1,t>=u.length&&(t=0),p.playlistItem(t,!0);break;case"single":p.play()}}var p=this,u=null,c=null;this.container=t,this.id=t.id,this.display=null,this.iframe=null,this.player=null,this.config=null,this.plugins={},this.events={playerReady:new n,playlist:new n,playlistItem:new n},this.setup=function(t){var n={width:480,height:270,color:"00adef",repeat:"none",item:0,api:!0,player_id:a.uniqueId("player_")};c=a.extend(n,t),this.config=c,this.container.innerHTML="";var o={x:0,y:0,width:c.width,height:c.height},l=null;for(var h in c.plugins)if("function"==typeof s[h])switch(l=this.plugins[h]=new s[h](this,c.plugins[h]),l.config.position){case"left":case"right":o.width+=l.config.size||0,l.width=l.config.size,l.height=c.height;break;default:o.height+=l.config.size||0,l.width=c.width,l.height=l.config.size}a.css(this.container,{position:"relative",width:o.width,height:o.height});for(h in this.plugins){switch(l=this.plugins[h],l.config.position){case"left":l.x=o.x,o.x+=l.width,o.width-=l.width;break;case"right":l.x=o.x+o.width-l.width,o.width-=l.width;break;case"top":l.y=o.y,o.y+=l.height,o.height-=l.height;break;case"bottom":l.y=o.y+o.height-l.height,o.height-=l.height}this.plugins[h].setup()}this.display=e.createElement("div"),this.display.id=this.id+"_display",this.container.appendChild(this.display),a.css(this.display,{background:"#000000",width:o.width,height:o.height,position:"absolute",left:o.x,top:o.y}),this.events.playlist.add(r);var p=new i(this);return p.load(c.urls),this},this.playlistItem=function(t,e){c.item=t,this.pause(),a.css(this.iframe,{display:"none"}),"boolean"==typeof e&&(c.autoplay=e);for(var i=u[t],n="http://player.vimeo.com/video/"+i.id+"?",r=["byline","title","portrait","color","autoplay","loop","api","player_id","badge"],o=0;o<r.length;o++){var s=r[o];if(c.hasOwnProperty(s)){var l=c[s];"boolean"==typeof l&&(l=l?1:0),n+=encodeURIComponent(s)+"="+encodeURIComponent(l)+"&"}}this.iframe&&(this.iframe.src=n.slice(0,-1)),this.events.playlistItem.dispatch(i,t)},this.playlistNext=function(t){var e=c.item+1;e>=u.length&&(e=0),this.playlistItem(e,t)},this.playlistPrev=function(t){var e=c.item-1;0>e&&(e=u.length-1),this.playlistItem(e,t)},this.play=function(){this.player&&this.player.api("paused",function(t){t===!0&&p.player.api("play")})},this.pause=function(){this.player&&this.player.api("paused",function(t){t===!1&&p.player.api("pause")})},this.onPlay=function(t){this.player&&this.player.addEvent("play",t)},this.onPause=function(t){this.player&&this.player.addEvent("pause",t)},this.onFinish=function(t){this.player&&this.player.addEvent("finish",t)},this.getPlugin=function(t){return this.plugins[t]},this.getPlaylist=function(){return u}}}(window,document);;
!function(t,e){vimeowrap.playlist=function(i,n){function s(t){l.length=t.length;for(var i={striptags:function(t){return t.replace(/<\/?.*?>/g,"")},truncate:function(t,e){return t.length>e&&(t=t.slice(0,e)+"..."),t},timesince:function(t){for(var e=new Date(t.replace(/-/g,"/")).getTime(),i={second:((new Date).getTime()-e)/1e3},n=["second","minute","hour","day","week","month","year"],s=[1,60,60,24,7,4.34812,12],o=1;o<n.length;o++)if(i[n[o]]=i[n[o-1]]/s[o],i[n[o-1]]<s[o])return t=Math.floor(i[n[o-1]]),t+" "+n[o-1]+(1===t?"":"s");return t=Math.floor(i[n[o-1]]),t+" "+n[o-1]+(1===t?"":"s")},time:function(t){var e=Math.floor(t/3600),i=Math.floor(t%3600/60),n=Math.floor(t%3600%60);return(0===e?"":e+":")+i+":"+(10>n?"0"+n:n)}},s=[],o=n.template,r=0;r<t.length;r++)s.push("<li>"),s.push(o.populate(t[r],i)),s.push("</li>");var h=e.getElementById(a.id+"_list");h.innerHTML=s.join(""),p.redraw()}function o(e){var s=e||t.event,o=s.target||s.srcElement;if(o&&"li"!==o.nodeName.toLowerCase())for(;o&&(o=o.parentNode,"li"!==o.nodeName.toLowerCase()););for(var r=0,a=o.parentNode.children,h=0;h<a.length&&(r=h,a[h]!==o);h++);return r!==i.config.item&&i.playlistItem(r,n.autoplay),!1}function r(t,e){for(var i=h.children,n=0;n<i.length;n++)i[n].className=i[n].className.replace(/ ?selected/gi,"");i[e].className+=" selected"}var a,h,p,l=this,c={position:"bottom",size:200,offsetx:2,offsety:2,autoplay:!1,template:"",style:"",thumb:{width:80,height:60}};c.template='<a href="{{url}}" title="{{title}}"><span class="shade"></span><span class="border"></span><img src="{{thumbnail_'+(n.thumb&&n.thumb.quality?n.thumb.quality:"small")+'}}" alt="" /><span class="title">{{title|truncate:80}}</span><span class="byline">from <b>{{user_name}}</b> <time datetime="{{upload_date}}">{{upload_date|timesince}} ago</time></span><span class="desc">{{description|striptags|truncate:80}}</span><span class="duration">{{duration|time}}</span></a>',n=vimeowrap.utils.extend(c,n),this.config=n,this.setup=function(){var l=["#{{id}} {background-color:#000; color:#fff; font:normal 12px/14px helvetica,arial,sans-serif; -webkit-tap-highlight-color:rgba(0,0,0,0);}","ul {list-style:none; margin:0; padding:0 9px 0 0;}","li {list-style:none; clear:both; display:block; height:{{thumb_height}}px; line-height:16px; margin:0 0 2px; padding:0; overflow:hidden;}","li:last-child {margin:0;}","li.selected {opacity:.4; filter:alpha(opacity=40);}","li:nth-child(odd) > a {background-color:rgba(255,255,255,.07);}","li > a {display:block; position:relative; height:{{thumb_height}}px; text-decoration:none;}","a:active, #{{id}} a:focus {outline:none;}","span {color:#fff; display:block;}",".shade {position:absolute; top:0; right:0; bottom:0; left:0;}","img {border:none; float:left; width:{{thumb_width}}px; height:{{thumb_height}}px; margin:0 7px 0 0;}",".border {box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; position:absolute; left:0; top:0; border-right:rgba(255, 255, 255, .1) 1px solid; width:{{thumb_width}}px; height:{{thumb_height}}px;}",".title {font-weight:bold; padding-top:5px; font-size:14px;}",".byline {color:#9DA2A8;}",".byline time {font-size:11px;}",".desc {color:#71767A;}",".duration {position:absolute; top:3px; right:7px;}"];"ontouchstart"in t?l.push("li .pressed {background-color:rgba(255,255,255,0.15);}"):(l.push("li > a:hover {background-color:rgba(255,255,255,0); text-decoration:none;}"),l.push("li > a:hover .shade {background-color:rgba(255,255,255,0.15);}")),l=l.join(" #{{id}} "),l+=n.style;var c=e.createTextNode(l.populate({id:i.id+"_playlist",color:i.config.color,thumb_width:n.thumb.width,thumb_height:n.thumb.height})),u=e.createElement("style");u.type="text/css",vimeowrap.utils.prepend(u,e.getElementsByTagName("head")[0]),u.styleSheet?u.styleSheet.cssText=c.nodeValue:u.appendChild(c),a=e.createElement("div"),a.id=i.id+"_playlist",i.container.appendChild(a),vimeowrap.utils.css(a,{width:this.width,height:this.height,position:"absolute",left:this.x,top:this.y});var d=e.createElement("div");d.id=a.id+"_wrap",a.appendChild(d),vimeowrap.utils.css(d,{width:this.width-2*n.offsetx,height:this.height-2*n.offsety,position:"absolute",left:n.offsetx,top:n.offsety}),h=e.createElement("ul"),h.id=a.id+"_list",d.appendChild(h),vimeowrap.utils.css(h,{position:"absolute",left:0,right:0}),h.onclick=o,p=new SkinnyScroll(d),i.events.playlist.add(s),i.events.playlistItem.add(r)}},function(t,e){function i(e,o){this.config=p.extend(i.defaults,o),this.events={scroll:new a},this.el=p.query(e)||e,this.el.style.overflow="hidden",this.page=new s(this,this.el.children[0]),this.sbar=new r(this,this.page),this.el.appendChild(this.sbar.el),this.controllers=[],this.controllers.push(new n(this,this.page)),this.controllers.push(new h(this,this.page)),this.redraw(),this._redraw=p.bind(this.redraw,this),p.on(t,"resize",this._redraw)}function n(t,e){this.main=t,this.page=e,this.y=0,t.events.scroll.on(function(t){this.y=parseFloat(t)},this),this._scroll=p.bind(this.scroll,this),p.on(t.el,"DOMMouseScroll mousewheel",this._scroll)}function s(t,e){this.main=t,this.el=e,this.morph=new Morph(e),this.morph.on("update",p.bind(this.update,this))}function o(t,e,i,n){this.main=t,this.page=e,this.sbar=i,this.hand=n,this._lock=p.bind(this.lock,this),this._drag=p.bind(this.drag,this),p.on(i,"mousedown touchstart",this._lock),p.on(n,"mousedown touchstart",this._lock),this.dragging=!1,this.offset=0}function r(t,i){this.main=t,this.page=i;var n=t.config.color,s=t.config.radius,r=t.config.width;this.el=e.createElement("div"),p.css(this.el,{position:"absolute",right:0,top:2,bottom:2,width:r+2,zIndex:90}),this.el.className="skinnyscrollbar",this.back=p.append(this.el,{backgroundColor:n,filter:"alpha(opacity=20)",opacity:"0.2",borderRadius:s,position:"absolute",left:0,top:0,bottom:0,width:r}),this.hand=p.append(this.el,{backgroundColor:n,filter:"alpha(opacity=40)",opacity:"0.4",borderRadius:s,position:"absolute",left:0,top:0,width:r,height:7}),new o(t,i,this.el,this.hand),t.events.scroll.on(this.y,this)}function a(){this.c=[]}function h(t,e){this.main=t,this.page=e,this.x=0,this.y=0,t.events.scroll.on(function(t){this.y=parseFloat(t)},this),p.on(e.el,"touchstart",this)}var p={extend:function(t,e){for(var i in e)t[i]=e[i];return t},query:function(t,i){return"string"!=typeof t?null:(i=i||e,i.querySelector(t))},clamp:function(t,e,i){return e>t?e:t>i?i:t},append:function(t,i,n){var s=e.createElement(n||"div");return p.css(s,i),t.appendChild(s)},bind:function(t,e){return function(){t.apply(e,[].slice.call(arguments))}},invoke:function(t,e){for(var i=slice.call(arguments,2),n=0;n<t.length;n++)t[n][e].apply(t[n],i)},on:function(t,e,i){for(var n=e.split(" "),s=0;s<n.length;s++)t.attachEvent?t.attachEvent("on"+n[s],i):t.addEventListener(n[s],i,!1)},off:function(t,e,i){for(var n=e.split(" "),s=0;s<n.length;s++)t.detachEvent?t.detachEvent("on"+n[s],i):t.removeEventListener(n[s],i,!1)},css:function(t,e){for(var i in e)try{t.style[p.camel(i)]=p.addUnit(e[i])}catch(n){}},camel:function(t){return(""+t).replace(/-(\w)/g,function(t,e){return e.toUpperCase()})},addUnit:function(t){return"string"==typeof t?t:t+"px"},getPointer:function(t){var i=t.pageX,n=t.pageY;if(t.touches&&t.touches.length&&(i=t.touches[0].pageX,n=t.touches[0].pageY),null==i){var s=e.documentElement,o=e.body;i=t.clientX+(s.scrollLeft||o.scrollLeft||0)-(s.clientLeft||o.clientLeft||0),n=t.clientY+(s.scrollTop||o.scrollTop||0)-(s.clientTop||o.clientTop||0)}return{x:i,y:n}},getOffset:function(i){var n=e.documentElement,s=i.getBoundingClientRect(i);return{top:s.top+(t.pageYOffset||n.scrollTop)-(n.clientTop||0),left:s.left+(t.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}},lerp:function(t,e,i){return e+(i-e)*t},norm:function(t,e,i){return(t-e)/(i-e)},map:function(t,e,i,n,s){return p.lerp(p.norm(t,e,i),n,s)}};i.defaults={color:"#fff",radius:6,width:6},i.prototype.y=function(t){this.page.morph.set("y",t)},i.prototype.redraw=function(){this.height=this.el.offsetHeight,this.page.redraw(),this.sbar.redraw()},i.prototype.destroy=function(){p.invoke(this.controllers,"destroy"),p.off(t,"resize",this._redraw),this.sbar.destroy()},t.SkinnyScroll=i,function(t,e){function i(t){return this instanceof i?(this.el=a.query(t)||t,this.events={update:new n,end:new n},this.engine=i.support.transition?new o(this):new s(this),void this.duration(i.defaults.duration)):new i(t)}function n(){this.c=[]}function s(t){this.main=t,this.el=t.el,this._start={},this._end={}}function o(t){this.main=t,this.el=t.el,this._update=a.bind(this.update,this),this._end=a.bind(this.end,this),this.reset()}var r=e.createElement("div").style,a={extend:function(t,e){for(var i in e)t[i]=e[i];return t},bind:function(t,e){return function(){t.apply(e,[].slice.call(arguments))}},style:function(e,i){return t.getComputedStyle?getComputedStyle(e).getPropertyValue(a.uncamel(i)):e.currentStyle?e.currentStyle[a.camel(i)]:e.style[a.camel(i)]},matrix:function(t){var e=t.match(/\(([-\d., ]+?)\)/)[1].split(", ");return 6==e.length?{x:e[4],y:e[5]}:16==e.length?{x:e[12],y:e[13]}:void 0},contains:function(t,e){for(var i in t)if(t[i]===e)return!0;return!1},query:function(t,i){return"string"!=typeof t?null:(i=i||e,i.querySelector(t))},vendorPropName:function(t){if(t in r)return t;for(var e=a.camel("-"+t),i=["Moz","Webkit","O","ms"],n=0;n<i.length;n++)if(t=i[n]+e,t in r)return t},has3d:function(){var t=a.vendorPropName("transform");return r[t]="",r[t]="rotateY(90deg)",""!==r[t]},on:function(t,e,i){for(var n=e.split(" "),s=0;s<n.length;s++)t.attachEvent?t.attachEvent("on"+n[s],i):t.addEventListener(n[s],i,!1)},off:function(t,e,i){for(var n=e.split(" "),s=0;s<n.length;s++)t.detachEvent?t.detachEvent("on"+n[s],i):t.removeEventListener(n[s],i,!1)},camel:function(t){return(""+t).replace(/-(\w)/g,function(t,e){return e.toUpperCase()})},uncamel:function(t){return(""+t).replace(/([A-Z])/g,"-$1").toLowerCase()},addUnit:function(t){return"string"==typeof t?t:t+"px"},getUnit:function(t){return"string"==typeof t?t.replace(/[-\d\.]/g,""):"px"},num:function(t){return+(""+t).replace(/[^-\d.]/g,"")},lerp:function(t,e,i){return e+(i-e)*t}};i.defaults={duration:500},i.support={transition:a.vendorPropName("transition"),transform:a.vendorPropName("transform"),transform3d:a.has3d()},i.prototype.duration=function(t){return this.engine.duration(t),this},i.prototype.get=function(t){return this.engine.get(t)},i.prototype.set=function(t,e){return this.engine.set(t,e),this},i.prototype.to=function(t,e){return this.engine.to(t,e),this},i.prototype.ease=function(t){return this.engine.ease(t),this},i.prototype.start=function(){return this.engine.start(),this},i.prototype.on=function(t,e){return this.events[t].on(e),this},i.prototype.off=function(t,e){return this.events[t].off(e),this},t.Morph=i,n.prototype.on=function(t,e){return this.c.push({fn:t,c:e}),this},n.prototype.fire=function(){for(var t=[].slice.call(arguments),e=0;e<this.c.length;e++)this.c[e].fn.apply(this.c[e].c||this,t);return this},n.prototype.off=function(t){if(t)for(var e=0;e<this.c.length;e++)this.c[e]===t&&(this.c.splice(e,1),e--);else this.c=[];return this},s.aliases={x:"left",y:"top"},s.prototype.duration=function(t){this._duration=t},s.prototype.get=function(t){return t=s.aliases[t]||t,a.style(this.el,t)},s.prototype.set=function(t,e){a.extend(this._start,this.add(t,e)),this.setProperties(),this.update()},s.prototype.to=function(t,e){a.extend(this._end,this.add(t,e))},s.prototype.add=function(t,e){var i={};void 0!==e?i[t]=e:a.extend(i,t);for(var n in s.aliases)void 0!==i[n]&&(i[s.aliases[n]]=i[n],delete i[n]);return i},s.prototype.setProperties=function(){for(var t in this._start)this.el.style[a.camel(t)]=a.addUnit(this._start[t])},s.prototype.initProperties=function(){for(var t in this._end)this._start[t]||(this._start[t]=a.style(this.el,t)||1)},s.prototype.applyProperties=function(t){for(var e in this._end){var i=this._start[e],n=this._end[e],s=a.lerp(t,a.num(i),a.num(n));this.el.style[a.camel(e)]=s+a.getUnit(n)}},s.prototype.ease=function(){},s.prototype.start=function(){this.reset(),this.initProperties();var t=this,e=0,i=+new Date,n=function(){e+=(new Date-i)/t._duration,e=e>1?1:e,i=+new Date,t.applyProperties(e),t.update(),1===e&&t.end()};this.id=setInterval(n,16)},s.prototype.update=function(){this.main.events.update.fire()},s.prototype.end=function(){clearInterval(this.id),this.main.events.end.fire()},s.prototype.reset=function(){clearInterval(this.id),this._start={}},o.translate=a.has3d?["translate3d(",", 0)"]:["translate(",")"],o.ends=["transitionend","webkitTransitionEnd","oTransitionEnd","MSTransitionEnd"].join(" "),o.aliases={x:{set:function(t,e){t.transformX=o.translate.join(e+", 0")},get:function(t){return a.matrix(a.style(t,a.vendorPropName("transform"))).x}},y:{set:function(t,e){t.transformY=o.translate.join("0, "+e)},get:function(t){return a.matrix(a.style(t,a.vendorPropName("transform"))).y}}},o.prototype.reset=function(){this._props={},this._transitionProps=[],this._transforms=[],this._ease=""},o.prototype.duration=function(t){this._duration=t},o.prototype.ease=function(t){this._ease=t},o.prototype.setVendorProperty=function(t,e){this._props[a.uncamel(a.vendorPropName(t))]=e},o.prototype.get=function(t){return o.aliases[t]?o.aliases[t].get(this.el,t):a.style(this.el,a.vendorPropName(t))},o.prototype.set=function(t,e){this.duration(0),this.to(t,e),this.start(),this.update()},o.prototype.to=function(t,e){var i=this.add(t,e);for(var n in i)n.match(/^transform/)?(this.transform(i[n]),delete i[n]):(this.transition(n),this._props[n]=i[n])},o.prototype.add=function(t,e){var i={};void 0!==e?i[t]=e:a.extend(i,t);for(var n in i)if(void 0!==o.aliases[n]){var s=a.addUnit(i[n]);o.aliases[n].set(i,s),delete i[n]}return i},o.prototype.transition=function(t){a.contains(this._transitionProps,t)||this._transitionProps.push(t)},o.prototype.transform=function(t){a.contains(this._transforms,t)||this._transforms.push(t)},o.prototype.applyProperties=function(t){for(var e in t)this.el.style.setProperty(e,t[e])},o.prototype.start=function(){this._transforms.length&&(this.setVendorProperty("transform",this._transforms.join(" ")),this.transition(a.uncamel(i.support.transform))),this.setVendorProperty("transition",""),this._duration>0&&(this.setVendorProperty("transition-duration",this._duration+"ms"),this.setVendorProperty("transition-property",this._transitionProps.join(", ")),this.setVendorProperty("transition-timing-function",this._ease),clearInterval(this.id),this.id=setInterval(this._update,16),this.fired=!1,a.on(this.el,o.ends,this._end)),this.applyProperties(this._props),this.reset()},o.prototype.update=function(){this.main.events.update.fire()},o.prototype.end=function(){clearInterval(this.id),a.off(this.el,o.ends,this._end),this.fired||(this.fired=!0,this.main.events.end.fire())}}(t,e),n.prototype.scroll=function(e){if(e=e||t.event,this.page.height>this.main.height){e.preventDefault&&e.preventDefault();var i=e.wheelDelta?-e.wheelDelta/120:e.detail/3;return this.y-=20*i,this.y=p.clamp(this.y,-this.page.height+this.main.height,0),this.page.morph.set("y",this.y),!1}},n.prototype.destroy=function(){p.off(this.main.el,"DOMMouseScroll mousewheel",this._scroll)},s.prototype.update=function(){this.main.events.scroll.fire(this.morph.get("y"))},s.prototype.redraw=function(){this.height=this.el.offsetHeight},o.prototype.lock=function(i){i=i||t.event,i.target=i.target||i.srcElement,this.offset=i.target==this.hand?p.getPointer(i).y-p.getOffset(this.hand).top:0,this.dragging=/mousedown|touchstart/.test(i.type),this.drag(i);var n=this.dragging?"on":"off";p[n](e,"mouseup touchend",this._lock),p[n](e,"mousemove touchmove",this._drag),p[n](e,"selectstart",this.stopSelect)},o.prototype.drag=function(e){if(e=e||t.event,this.dragging){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault();var i=p.getPointer(e).y-p.getOffset(this.sbar).top-this.offset,n=p.map(i,0,this.sbar.offsetHeight-this.hand.offsetHeight,0,this.page.height-this.main.height);return n=p.clamp(n,0,this.page.height-this.main.height),this.page.morph.set("y",-n),!1}},o.prototype.stopSelect=function(){return!1},r.prototype.y=function(t){this._y=t;var e=-parseFloat(t)/this.ratio;isNaN(e)&&(e=0);var i=e+this.handHeight-this.height,n=this.hand.style;t>0?(n.height=Math.max(this.handHeight+e,25)+"px",n.top="0px"):i>0?(n.height=Math.max(this.handHeight-i,25)+"px",n.bottom="0px",n.top="auto"):(n.height=this.handHeight+"px",n.top=e+"px")},r.prototype.redraw=function(){this.el.style.display=this.main.height<this.page.height?"block":"none",this.height=this.el.offsetHeight,this.handHeight=Math.round(Math.max(this.main.height/this.page.height*this.height,25)),this.ratio=(this.page.height-this.main.height)/(this.height-this.handHeight),this.y(this._y||0)},r.prototype.destroy=function(){var t=this.el.parentNode;t&&t.removeChild(this.el)},a.prototype.on=function(t,e){return this.c.push({fn:t,c:e}),this},a.prototype.fire=function(){for(var t=[].slice.call(arguments),e=0;e<this.c.length;e++)this.c[e].fn.apply(this.c[e].c||this,t);return this},a.prototype.off=function(t){if(t)for(var e=0;e<this.c.length;e++)this.c[e]===t&&(this.c.splice(e,1),e--);else this.c=[];return this},h.prototype.handleEvent=function(t){this[t.type](t)},h.prototype.touchstart=function(t){this.main.height<this.page.height&&(this.moved=!1,this.startX=t.touches[0].pageX-this.x,this.startY=t.touches[0].pageY-this.y,p.on(this.page.el,"touchmove",this),p.on(this.page.el,"touchend",this))},h.prototype.touchmove=function(t){this.lastX=this.x,this.lastY=this.y,this.x=t.touches[0].pageX-this.startX,this.y=t.touches[0].pageY-this.startY,1===t.touches.length&&Math.abs(this.y-this.lastY)>Math.abs(this.x-this.lastX)&&(t.preventDefault(),this.moved=!0,this.lastMoveTime=+new Date,this.page.morph.set("y",this.y))},h.prototype.touchend=function(t){if(p.off(this.page.el,"touchmove",this),p.off(this.page.el,"touchend",this),this.moved){t.preventDefault();var e=this.y-this.lastY,i=new Date-this.lastMoveTime+1;this.y=this.y+200*e/i;var n=this.clampY()?500:1e3;this.page.morph.duration(n).to("y",this.y).ease("cubic-bezier(0,0,0.2,1)").start()}},h.prototype.clampY=function(){return this.y>=0?(this.y=0,!0):this.y<this.main.height-this.page.height?(this.y=this.main.height-this.page.height,!0):void 0},h.prototype.destroy=function(){p.off(this.page.el,"touchstart",this)}}(t,e)}(window,document);;
