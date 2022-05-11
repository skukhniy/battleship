(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),o=n.n(r),i=n(645),s=n.n(i),a=n(667),c=n.n(a),l=new URL(n(572),n.b),d=s()(o()),p=c()(l);d.push([e.id,"@font-face { font-family: Binary; src: url("+p+"); } \n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  background-color: rgba(4, 4, 131, 0.644);\n  overflow-x:hidden;\n}\n#battleship_logo {\n  display: block;\n  margin-left: auto;\n  margin-right:auto;\n  position: relative;\n  top: -20px;\n  height: 175px;\n}\nheader{\n  height: 140px;\n}\n\n#play_button {\n  position: absolute;\n  left:50%;\n  top:50%;\n  margin-left: -185px;\n  margin-top: -85px;\n  height: 150px;\n  width: 350px;\n  background-color: lightgray;\n  border: 10px solid black;\n  cursor: pointer;\n}\n#play_button p {\n  display: block;\n  width:100%;\n  text-align: center;\n  font-size: xxx-large;\n}\n#play_button:hover {\n  -webkit-transform: scale(1.2);\n  -ms-transform: scale(3);\n  transform: scale(1.2);\n  \n}\n.nail {\n  position: absolute;\n  display: inline-block;\n  height:15%;\n  width:7%;\n  background-color: darkgray;\n  z-index: 5;\n  border-radius: 50%;\n  margin: 5px;\n}\n#nail_2{\n  left:90%;\n}\n#nail_3{\n  top:78%;\n}\n#nail_4{\n  left:90%;\n  top:78%;\n}\n\n#body_container{\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.board{\n  height: 430px;\n  width:429.94792px;\n  border: 8px solid black;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-self: center;\n}\n.grid_block{\n  margin: 0;\n  border:1px solid black;\n  height:41px;\n  width:41px;\n  position: relative;\n}\n.open_block{\n  height:41px;\n  width:41px;\n  margin: 0;\n  background-color: yellow;\n}\n#ship_select_container{\n  height:550px;\n  width:325px;\n  border:4px solid black;\n}\n.ship_block{\nmargin: 0;\nborder:1px solid black;\nheight: 41px;\nmin-height: 41px;\nwidth:41px;\nmin-width: 41px;\nbackground-color: gray;\n}\n.dropped{\n  position: relative;\n  top:-1px;\n  left:-1px;\n}\n.ship_1_block, .ship_2_block, .ship_3_block, .ship_4_block{\n  display: flex;\n  z-index: 1;\n}\n.horizontal{\n  flex-direction: row;\n}\n.vertical{\n  flex-direction: column;\n}\n#twoBlockSelect{\n  height:100px;\n  width:325px;\n}\n#threeBlockSelect{\n  height:150px;\n  width:325px;\n}\n#fourBlockSelect{\n  height: 200px;\n  width: 325px;\n  margin-right: 30px;\n}\n.blockSelect{\n  margin-top: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n}\n.blockAmt{\n  display: inline-block;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  margin-left: 30px;\n  margin-right:50px;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black; \n}\n#board_btn_container {\n  margin-top: 7px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n.board_btn {\n  display: inline-block;\n  height: 30px;\n  width: 80px;\n  background-color: darkgray;\n  border: 1px solid black;\n  cursor: pointer;\n}\n.board_btn p {\n  margin: 0;\n  margin-top:3px;\n  text-align: center;\n  font-size: large;\n  user-select: none;\n}\n.board_btn:active {\n  transform: scale(0.98);\n  /* Scaling button to 0.98 to its original size */\n  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);\n  /* Lowering the shadow */\n}\n\n.player_title h1{\n  margin: 0;\n  margin-bottom: 10px;\n  text-align: center;\n  color: lightgray;\n}\n\n#text_display {\n  height: 125px;\n  width:80%;\n  background-color: black;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  border: 3px solid gray;\n}\n#text_display h1{\n  text-align: center;\n  padding-top: 5px;\n  color: lightgray;\n  font-family: Binary;\n  font-size: xxx-large;\n}\n\n.unactive {\n  display: none;\n}\n\n.missed {\n  font-size:  xx-large;\n  text-align: center;\n  color: red;\n  padding-top: 1px;\n}\n.hit {\n  font-size: xx-large;\n  text-align: center;\n  color:green;\n  padding-top: 1px;\n  padding-left: 8px;\n  position: absolute;\n  z-index: 10;\n  top:0px;\n}",""]);const u=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var g=o(h,r);r.byIndex=a,t.splice(a,0,{identifier:p,updater:g,references:1})}s.push(p)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var c=r(e,o),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},572:(e,t,n)=>{e.exports=n.p+"6255eac333581c02a03f.ttf"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),s=n.n(i),a=n(565),c=n.n(a),l=n(216),d=n.n(l),p=n(589),u=n.n(p),h=n(426),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),t()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const f=(()=>{const e=document.getElementById("body_container"),t=document.getElementById("board"),n=document.getElementById("board_container");return{board:t,shipSelectContainer:document.getElementById("ship_select_container"),boardContainer:n,bodyContainer:e}})();function m(){return{gridBlocks:document.querySelectorAll(".grid_block"),ships:document.querySelectorAll('[draggable="true"]'),blockedZones:document.querySelectorAll(".blockedzone"),reset:document.getElementById("resetBtn"),undo:document.getElementById("undoBtn"),boardBtnContainer:document.getElementById("board_btn_container"),cpuBoard:document.getElementById("cpu_board"),shipBlocks:document.getElementsByClassName("ship_block"),shipsDropped:document.querySelectorAll("[ship='true']")}}function b(e,t,n,r){const o=String(e),i=String(n),s=document.createElement("div");s.classList.add("ship_block");const a=document.createElement("div");a.id=`${t}BlockSelect`,a.classList="blockSelect";const c=document.createElement("div");c.id=`${t}BlockAmt`,c.classList="blockAmt";const l=document.createElement("h2");l.classList="counter",l.id=`counter${o}`,l.innerHTML=`x${i}`;const d=document.createElement("div");d.classList.add(`ship_${o}_block`,"horizontal"),n>0&&r?d.setAttribute("draggable",!0):d.setAttribute("draggable",!1),d.setAttribute("ship",!0),d.setAttribute("size",e);for(let t=1;t<e+1;t++){const e=s.cloneNode(!0);d.appendChild(e)}return r&&(c.appendChild(l),a.appendChild(c),a.append(d),f.shipSelectContainer.appendChild(a)),d}function v(e){b(1,"one",e[1],!0),b(2,"two",e[2],!0),b(3,"three",e[3],!0),b(4,"four",e[4],!0);m().ships.forEach((e=>{const t=e.children;t[0]&&t[0].addEventListener("mouseenter",(()=>e.setAttribute("offset",0))),t[1]&&t[1].addEventListener("mouseenter",(()=>e.setAttribute("offset",-1))),t[2]&&t[2].addEventListener("mouseenter",(()=>e.setAttribute("offset",-2))),t[3]&&t[3].addEventListener("mouseenter",(()=>e.setAttribute("offset",-3)))})),m().ships.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("dropped")||(e.classList.contains("horizontal")?(e.classList.remove("horizontal"),e.classList.add("vertical")):(e.classList.remove("vertical"),e.classList.add("horizontal")))}))}))}function x(){const e=f.shipSelectContainer;for(;e.firstChild;)e.removeChild(e.firstChild)}function y(e=!1,t=!1){f.board.childNodes.forEach((n=>{n.style.background="none",(t||e)&&(n.classList.remove("blockedzone"),n.classList.add("dropzone"),e&&(n.innerHTML="",x(),v([0,4,3,2,1])))}))}let k,E;function L(e){let t=e.id.replace(/[^0-9]/g,"");return t=parseInt(t,10),t}function _(e){return!!e.classList.contains("vertical")}function S(e,t){let n=[];const r=e.getAttribute("size");let o=e.getAttribute("offset"),i=0;const s=L(t);let a=s,c=0,l=0,d=0;if(1===r)return[t];if(_(e)?(i=10,o*=10):(i=1,o*=1),r>=1){o<0&&(a+=o);const e=document.getElementById(`grid${String(a)}`);n.push(e)}if(r>=2){c=a+i;const t=document.getElementById(`grid${String(c)}`);a%10!=0||_(e)?n.push(t):(n.push(null),c%10-1==0&&!_(e)&&a<s&&(n=[null],n.push(t)))}if(r>=3){l=c+i;const t=document.getElementById(`grid${String(l)}`);c%10==0&&!_(e)||null===n[n.length-1]?(n.push(null),l%10-1==0&&!_(e)&&c<s&&(n=[null],n.push(t))):n.push(t)}if(r>=4){d=l+i;const t=document.getElementById(`grid${String(d)}`);l%10==0&&!_(e)||null===n[n.length-1]?(n.push(null),d%10-1==0&&!_(e)&&l<s&&(n=[null],n.push(t))):n.push(t)}return n}function w(e){const t=e.parentNode.children[0].children[0];return parseInt(t.innerHTML.replace("x",""),10)}function A(e,t){const n=e.parentNode.children[0].children[0],r=w(e);n.innerHTML=`x${String(r+t)}`}function C(e){let t=!1;return e.every((e=>null===e?(t=!0,!1):!e.classList.contains("blockedzone")||(t=!0,!1))),t}function z(e,t,n){let r=!1,o=!1,i=e;if(n)for(let n=0;n<t;n++){if(i=e+10*n,o||i>100)return!0;i>=91&&i<=100&&(o=!0)}else for(let n=0;n<t;n++){if(console.log(n),i=e+n,r||i>100)return!0;i%10==0&&(r=!0)}return!1}f.shipSelectContainer.dataset.counter=JSON.stringify([0,4,3,2,1]),f.board.dataset.history=JSON.stringify([]),document.addEventListener("drag",(()=>{})),document.addEventListener("dragstart",(e=>{k=e.target,k.parentNode.parentNode===f.shipSelectContainer&&A(k,-1),m().blockedZones.forEach((e=>{e.style.background="rgba(222, 7, 7, 0.383)"}))})),document.addEventListener("dragenter",(e=>{if(E=[],e.target.classList.contains("dropzone")){const t=S(k,e.target);t.forEach((e=>{C(t)?null!=e&&(e.style.background="rgba(222, 7, 7, 0.383)"):e.style.background="green",null!=e&&E.push(e.id)}))}})),document.addEventListener("dragover",(e=>{e.preventDefault()})),document.addEventListener("dragleave",(e=>{e.target.classList.contains("dropzone")&&(E.includes(e.target.id)||e.target.classList.contains("blockedzone")||(e.target.style.background="none"),k.getAttribute("size")>1&&S(k,e.target).forEach((e=>{null!=e&&(E.includes(e.id)||e.classList.contains("blockedzone")||(e.style.background="none"))})))})),document.addEventListener("drop",(e=>{e.preventDefault();const t=S(k,e.target);if(y(),e.target.classList.contains("dropzone")&&!C(t)){const e=JSON.parse(f.shipSelectContainer.dataset.counter),r=JSON.parse(f.board.dataset.history);r.push(L(t[0])),f.board.dataset.history=JSON.stringify(r);const o=[];t.forEach((e=>{e.classList.remove("dropzone"),e.classList.add("shipzone"),o.push(L(e))})),k.setAttribute("data-activeGrids",JSON.stringify(o)),t[0].appendChild(k),k.classList.add("dropped"),k.setAttribute("draggable",!1),n=function(e){const t=[];let n=!1,r=!1;return e.forEach((o=>{const i=function(e){let t=e.id.replace(/[^0-9]/g,"");return t=parseInt(t,10),t}(o);i%10-1==0&&(n=!0),i%10==0&&(r=!0),[-10,0,10].forEach((o=>{for(let s=-1;s<2;s++)if(!(1===s&&r||-1===s&&n)){let n=i+o;n+=s;const r=document.getElementById(`grid${String(n)}`);!t.includes(r)&&!e.includes(r)&&n<=100&&n>=1&&t.push(r)}}))})),t}(t),n.forEach((e=>{e.classList.remove("dropzone"),e.classList.add("blockedzone")})),e[k.getAttribute("size")]-=1,f.shipSelectContainer.dataset.counter=JSON.stringify(e),x(),v(e)}else"ship_select_container"===e.target.id||"ship_select_container"===e.target.parentNode.id||e.target.parentNode.getAttribute("ship")&&"ship_select_container"===e.target.parentNode.parentNode.id?(0===w(k)&&k.parentNode.appendChild(k),y(),A(k,1)):A(k,1);var n}));const B=(e,t)=>{const n=[],r=[],o=[],i=[];return t.forEach((e=>{const t=(e=>{const t=JSON.parse(e.getAttribute("data-activeGrids")),n=[],r=JSON.parse(e.getAttribute("size"));return{activeGrids:t,size:r,hit:e=>{n.push(e)},isSunk:()=>n.length===r,hitGrids:n}})(e);t.activeGrids.forEach((e=>{i.push(e)})),n.push(t)})),{missedGrids:r,shipArray:n,shipGrids:i,recieveAttack:t=>{let s="";s=e?`grid${t}`:`gridCpu${t}`;const a=document.getElementById(s);console.log(i),i.includes(t)?n.forEach((e=>{e.activeGrids.includes(t)&&(e.hit(t),o.push(t),a.innerHTML+="<div class='hit'>&#x2713</div>")})):(r.push(t),o.push(t),a.innerHTML+="<div class='missed'>&#10060</div>")},isSunk:()=>{let e=!0;return n.forEach((t=>{t.isSunk()||(e=!1)})),e},attackedGrids:o}},N=e=>{let t=!0;return e&&(t=!1),{changeTurn:()=>{t=!t},cpuAttack:e=>{function t(){return Math.floor(99*Math.random()+1)}let n=t();for(;e.attackedGrids.includes(n);)n=t();return console.log(n),n},currentTurn:t,getTurn:()=>t}};function I(e){const t=[];return e.childNodes.forEach((e=>{e.hasChildNodes()&&t.push(e.firstChild.cloneNode(!0))})),t}!function(){const e=document.createElement("div");e.id="cpu_board_container",e.classList.add("board_container");const t=document.createElement("div");t.classList.add("player_title");const n=document.createElement("h1");n.innerHTML="CPU",t.appendChild(n);const r=document.createElement("div");r.id="cpu_board",r.classList.add("board"),function(e,t=!1){for(let n=1;n<101;n++){const r=document.createElement("div");r.classList.add("grid_block","dropzone"),r.id=t?`gridCpu${n}`:`grid${String(n)}`,e.appendChild(r)}}(r,!0),e.appendChild(t),e.appendChild(r);const{bodyContainer:o}=f;o.appendChild(e)}(),function(){const e=function(){const e=[];e.push(b(4,"four",1,!1));for(let t=0;t<2;t++){const t=b(3,"three",2,!1);e.push(t)}for(let t=0;t<3;t++){const t=b(2,"two",3,!1);e.push(t)}for(let t=0;t<4;t++){const t=b(1,"one",4,!1);e.push(t)}return e}(),t=m().cpuBoard.childNodes;let n=[];const r=[],o=[];e.forEach((e=>{const i=e.getAttribute("size");let s=[],a=!1;for(;!a;){let c=0,l=!0,d=!1;for(;l;)c=Math.floor(100*Math.random()+1),o.includes(c)||(l=!1,o.push(c),1===Math.floor(2*Math.random())?(d=!0,e.classList.remove("horizontal"),e.classList.add("vertical")):(d=!1,e.classList.add("horizontal"),e.classList.remove("vertical"))),o.length>99&&(l=!1,alert("exceeded grid attempts"));s=[];let p=0;for(let e=0;e<i;e++)!0===d?s.push(c+10*e):s.push(c+e);s.some((e=>e<=0))||s.some((e=>e>100))||s.some((e=>n.includes(e)))||s.some((e=>r.includes(e)))||z(c,i,d)||(a=!0,s.forEach((e=>{[-10,0,10].forEach((t=>{for(let o=-1;o<2;o++)p=e+t,p+=o,!r.includes(p)&&!n.includes(p)&&p<=100&&p>=1&&r.push(p)}))})),console.log(`appended size ${i} ship to Grid ${c}`),d&&console.log("vertical"),console.log(s),e.classList.add("dropped"),e.setAttribute("data-activegrids",JSON.stringify(s)),t[c-1].appendChild(e)),o.length>=99&&(console.log("error, cpu board could not be built"),console.log("Attempted Grids ="),console.log(o),console.log("shipgrids ="),console.log(n),console.log("blocked grids ="),console.log(r),a=!0)}n=n.concat(s)})),console.log(n)}(),(()=>{const e=f.board,t=m().cpuBoard,n=B(!0,I(e));console.log(m().cpuBoard),console.log(I(t));const r=B(!1,I(t)),o=(N(),N());e.style.cursor="crosshair",t.style.cursor="crosshair",function(e,t,n,r){Array.from(m().shipsDropped).forEach((e=>{e.style.pointerEvents="none"})),function(e,t,n,r){t[0].childNodes.forEach((n=>{n.addEventListener("click",(()=>{let o=n.id.replace(/[^0-9]/g,"");o=parseInt(o,10),t[1].recieveAttack(o),t[1].isSunk()&&alert("GameOver"),e[1].recieveAttack(r.cpuAttack(e[1])),e[1].isSunk()&&alert("GameOver")}))}))}(e,t,0,r)}([e,n],[t,r],0,o)})()})()})();