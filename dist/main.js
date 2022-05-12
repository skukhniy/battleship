(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),s=n(667),c=n.n(s),l=new URL(n(572),n.b),d=a()(o()),p=c()(l);d.push([e.id,"@font-face { font-family: Binary; src: url("+p+"); } \n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  background-color: rgba(4, 4, 131, 0.644);\n  overflow-x:hidden;\n}\n#battleship_logo {\n  display: block;\n  margin-left: auto;\n  margin-right:auto;\n  position: relative;\n  top: -20px;\n  height: 175px;\n}\nheader{\n  height: 140px;\n}\n\n#play_button {\n  position: absolute;\n  left:50%;\n  top:50%;\n  margin-left: -185px;\n  margin-top: -85px;\n  height: 150px;\n  width: 350px;\n  background-color: lightgray;\n  border: 10px solid black;\n  cursor: pointer;\n}\n#play_button p {\n  display: block;\n  width:100%;\n  text-align: center;\n  font-size: xxx-large;\n}\n#play_button:hover {\n  -webkit-transform: scale(1.2);\n  -ms-transform: scale(3);\n  transform: scale(1.2);\n  \n}\n.nail {\n  position: absolute;\n  display: inline-block;\n  height:15%;\n  width:7%;\n  background-color: darkgray;\n  z-index: 5;\n  border-radius: 50%;\n  margin: 5px;\n}\n#nail_2{\n  left:90%;\n}\n#nail_3{\n  top:78%;\n}\n#nail_4{\n  left:90%;\n  top:78%;\n}\n\n#body_container{\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.board{\n  height: 430px;\n  width:429.94792px;\n  border: 8px solid black;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-self: center;\n}\n\n.hidden{\n  display: none;\n}\n\n.grid_block{\n  margin: 0;\n  border:1px solid black;\n  height:41px;\n  width:41px;\n  position: relative;\n}\n.open_block{\n  height:41px;\n  width:41px;\n  margin: 0;\n  background-color: yellow;\n}\n#ship_select_container{\n  height:550px;\n  width:325px;\n  border:4px solid black;\n}\n.ship_block{\nmargin: 0;\nborder:1px solid black;\nheight: 41px;\nmin-height: 41px;\nwidth:41px;\nmin-width: 41px;\nbackground-color: gray;\n}\n\n.ship_block.hide{\n  background-color: transparent;\n}\n.dropped{\n  position: relative;\n  top:-1px;\n  left:-1px;\n}\n.ship_1_block, .ship_2_block, .ship_3_block, .ship_4_block{\n  display: flex;\n  z-index: 1;\n}\n.horizontal{\n  flex-direction: row;\n}\n.vertical{\n  flex-direction: column;\n}\n#twoBlockSelect{\n  height:100px;\n  width:325px;\n}\n#threeBlockSelect{\n  height:150px;\n  width:325px;\n}\n#fourBlockSelect{\n  height: 200px;\n  width: 325px;\n  margin-right: 30px;\n}\n.blockSelect{\n  margin-top: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n}\n.blockAmt{\n  display: inline-block;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  margin-left: 30px;\n  margin-right:50px;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black; \n}\n#board_btn_container {\n  margin-top: 7px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n.board_btn {\n  display: inline-block;\n  height: 30px;\n  width: 80px;\n  background-color: darkgray;\n  border: 1px solid black;\n  cursor: pointer;\n}\n.board_btn p {\n  margin: 0;\n  margin-top:3px;\n  text-align: center;\n  font-size: large;\n  user-select: none;\n}\n.board_btn:active {\n  transform: scale(0.98);\n  /* Scaling button to 0.98 to its original size */\n  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);\n  /* Lowering the shadow */\n}\n\n.player_title h1{\n  margin: 0;\n  margin-bottom: 10px;\n  text-align: center;\n  color: lightgray;\n}\n\n#text_display {\n  height: 125px;\n  width:80%;\n  background-color: black;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  border: 3px solid gray;\n}\n#text_display h1{\n  text-align: center;\n  padding-top: 5px;\n  color: lightgray;\n  font-family: Binary;\n  font-size: xxx-large;\n}\n\n.unactive {\n  display: none;\n}\n\n.missed {\n  font-size:  xx-large;\n  text-align: center;\n  color: red;\n  padding-top: 1px;\n}\n.hit {\n  font-size: xx-large;\n  text-align: center;\n  color:green;\n  padding-top: 1px;\n  padding-left: 8px;\n  position: absolute;\n  z-index: 10;\n  top:0px;\n}",""]);const u=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var g=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},572:(e,t,n)=>{e.exports=n.p+"6255eac333581c02a03f.ttf"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),s=n(565),c=n.n(s),l=n(216),d=n.n(l),p=n(589),u=n.n(p),h=n(426),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),t()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const f=(()=>{const e=document.getElementById("body_container"),t=document.getElementById("play_button"),n=document.getElementById("board"),r=document.getElementById("board_container");return{board:n,shipSelectContainer:document.getElementById("ship_select_container"),boardContainer:r,bodyContainer:e,playButton:t}})();function m(){return{gridBlocks:document.querySelectorAll(".grid_block"),ships:document.querySelectorAll('[draggable="true"]'),blockedZones:document.querySelectorAll(".blockedzone"),reset:document.getElementById("resetBtn"),undo:document.getElementById("undoBtn"),boardBtnContainer:document.getElementById("board_btn_container"),cpuBoard:document.getElementById("cpu_board"),shipBlocks:document.getElementsByClassName("ship_block"),shipsDropped:document.querySelectorAll("[ship='true']")}}const b=(e,t)=>{const n=[],r=[],o=[],i=[];return t.forEach((e=>{const t=(e=>{const t=JSON.parse(e.getAttribute("data-activeGrids")),n=[],r=JSON.parse(e.getAttribute("size"));return{activeGrids:t,size:r,hit:e=>{n.push(e)},isSunk:()=>n.length===r,hitGrids:n}})(e);t.activeGrids.forEach((e=>{i.push(e)})),n.push(t)})),{missedGrids:r,shipArray:n,shipGrids:i,recieveAttack:t=>{let a="";a=e?`grid${t}`:`gridCpu${t}`;const s=document.getElementById(a);console.log(i),i.includes(t)?n.forEach((e=>{e.activeGrids.includes(t)&&(e.hit(t),o.push(t),s.innerHTML+="<div class='hit'>&#x2713</div>")})):(r.push(t),o.push(t),s.innerHTML+="<div class='missed'>&#10060</div>")},isSunk:()=>{let e=!0;return n.forEach((t=>{t.isSunk()||(e=!1)})),e},attackedGrids:o}},v=e=>{let t=!0;return e&&(t=!1),{changeTurn:()=>{t=!t},cpuAttack:e=>{function t(){return Math.floor(99*Math.random()+1)}let n=t();for(;e.attackedGrids.includes(n);)n=t();return console.log(n),n},currentTurn:t,getTurn:()=>t}};function y(e){const t=[];return e.childNodes.forEach((e=>{e.hasChildNodes()&&t.push(e.firstChild.cloneNode(!0))})),t}function x(e,t,n){let r=!1,o=!1,i=e;if(n)for(let n=0;n<t;n++){if(i=e+10*n,o||i>100)return!0;i>=91&&i<=100&&(o=!0)}else for(let n=0;n<t;n++){if(console.log(n),i=e+n,r||i>100)return!0;i%10==0&&(r=!0)}return!1}function k(e,t,n,r){const o=String(e),i=String(n),a=document.createElement("div");a.classList.add("ship_block");const s=document.createElement("div");s.id=`${t}BlockSelect`,s.classList="blockSelect";const c=document.createElement("div");c.id=`${t}BlockAmt`,c.classList="blockAmt";const l=document.createElement("h2");l.classList="counter",l.id=`counter${o}`,l.innerHTML=`x${i}`;const d=document.createElement("div");d.classList.add(`ship_${o}_block`,"horizontal"),n>0&&r?d.setAttribute("draggable",!0):d.setAttribute("draggable",!1),d.setAttribute("ship",!0),d.setAttribute("size",e);for(let t=1;t<e+1;t++){const e=a.cloneNode(!0);d.appendChild(e)}return r&&(c.appendChild(l),s.appendChild(c),s.append(d),f.shipSelectContainer.appendChild(s)),d}function E(e){k(1,"one",e[1],!0),k(2,"two",e[2],!0),k(3,"three",e[3],!0),k(4,"four",e[4],!0);m().ships.forEach((e=>{const t=e.children;t[0]&&t[0].addEventListener("mouseenter",(()=>e.setAttribute("offset",0))),t[1]&&t[1].addEventListener("mouseenter",(()=>e.setAttribute("offset",-1))),t[2]&&t[2].addEventListener("mouseenter",(()=>e.setAttribute("offset",-2))),t[3]&&t[3].addEventListener("mouseenter",(()=>e.setAttribute("offset",-3)))})),m().ships.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("dropped")||(e.classList.contains("horizontal")?(e.classList.remove("horizontal"),e.classList.add("vertical")):(e.classList.remove("vertical"),e.classList.add("horizontal")))}))}))}function L(){const e=f.shipSelectContainer;for(;e.firstChild;)e.removeChild(e.firstChild)}function S(e=!1,t=!1){f.board.childNodes.forEach((n=>{n.style.background="none",(t||e)&&(n.classList.remove("blockedzone"),n.classList.add("dropzone"),e&&(n.innerHTML="",L(),E([0,4,3,2,1])))}))}function _(e){const t=[];let n=!1,r=!1;return e.forEach((o=>{const i=function(e){let t=e.id.replace(/[^0-9]/g,"");return t=parseInt(t,10),t}(o);i%10-1==0&&(n=!0),i%10==0&&(r=!0),[-10,0,10].forEach((o=>{for(let a=-1;a<2;a++)if(!(1===a&&r||-1===a&&n)){let n=i+o;n+=a;const r=document.getElementById(`grid${String(n)}`);!t.includes(r)&&!e.includes(r)&&n<=100&&n>=1&&t.push(r)}}))})),t}function C(e){e.forEach((e=>{e.classList.remove("dropzone"),e.classList.add("blockedzone")}))}function w(e,t=!1){for(let n=1;n<101;n++){const r=document.createElement("div");r.classList.add("grid_block","dropzone"),r.id=t?`gridCpu${n}`:`grid${String(n)}`,e.appendChild(r)}}let z,A;function N(e){let t=e.id.replace(/[^0-9]/g,"");return t=parseInt(t,10),t}function B(e){return!!e.classList.contains("vertical")}function I(e,t){let n=[];const r=e.getAttribute("size");let o=e.getAttribute("offset"),i=0;const a=N(t);let s=a,c=0,l=0,d=0;if(1===r)return[t];if(B(e)?(i=10,o*=10):(i=1,o*=1),r>=1){o<0&&(s+=o);const e=document.getElementById(`grid${String(s)}`);n.push(e)}if(r>=2){c=s+i;const t=document.getElementById(`grid${String(c)}`);s%10!=0||B(e)?n.push(t):(n.push(null),c%10-1==0&&!B(e)&&s<a&&(n=[null],n.push(t)))}if(r>=3){l=c+i;const t=document.getElementById(`grid${String(l)}`);c%10==0&&!B(e)||null===n[n.length-1]?(n.push(null),l%10-1==0&&!B(e)&&c<a&&(n=[null],n.push(t))):n.push(t)}if(r>=4){d=l+i;const t=document.getElementById(`grid${String(d)}`);l%10==0&&!B(e)||null===n[n.length-1]?(n.push(null),d%10-1==0&&!B(e)&&l<a&&(n=[null],n.push(t))):n.push(t)}return n}function M(e){const t=e.parentNode.children[0].children[0];return parseInt(t.innerHTML.replace("x",""),10)}function T(e,t){const n=e.parentNode.children[0].children[0],r=M(e);n.innerHTML=`x${String(r+t)}`}function O(e){let t=!1;return e.every((e=>null===e?(t=!0,!1):!e.classList.contains("blockedzone")||(t=!0,!1))),t}f.shipSelectContainer.dataset.counter=JSON.stringify([0,4,3,2,1]),f.board.dataset.history=JSON.stringify([]),document.addEventListener("drag",(()=>{})),document.addEventListener("dragstart",(e=>{z=e.target,z.parentNode.parentNode===f.shipSelectContainer&&T(z,-1),m().blockedZones.forEach((e=>{e.style.background="rgba(222, 7, 7, 0.383)"}))})),document.addEventListener("dragenter",(e=>{if(A=[],e.target.classList.contains("dropzone")){const t=I(z,e.target);t.forEach((e=>{O(t)?null!=e&&(e.style.background="rgba(222, 7, 7, 0.383)"):e.style.background="green",null!=e&&A.push(e.id)}))}})),document.addEventListener("dragover",(e=>{e.preventDefault()})),document.addEventListener("dragleave",(e=>{e.target.classList.contains("dropzone")&&(A.includes(e.target.id)||e.target.classList.contains("blockedzone")||(e.target.style.background="none"),z.getAttribute("size")>1&&I(z,e.target).forEach((e=>{null!=e&&(A.includes(e.id)||e.classList.contains("blockedzone")||(e.style.background="none"))})))})),document.addEventListener("drop",(e=>{e.preventDefault();const t=I(z,e.target);if(S(),e.target.classList.contains("dropzone")&&!O(t)){const e=JSON.parse(f.shipSelectContainer.dataset.counter),n=JSON.parse(f.board.dataset.history);n.push(N(t[0])),f.board.dataset.history=JSON.stringify(n);const r=[];t.forEach((e=>{e.classList.remove("dropzone"),e.classList.add("shipzone"),r.push(N(e))})),z.setAttribute("data-activeGrids",JSON.stringify(r)),t[0].appendChild(z),z.classList.add("dropped"),z.setAttribute("draggable",!1),C(_(t)),e[z.getAttribute("size")]-=1,f.shipSelectContainer.dataset.counter=JSON.stringify(e),L(),E(e)}else"ship_select_container"===e.target.id||"ship_select_container"===e.target.parentNode.id||e.target.parentNode.getAttribute("ship")&&"ship_select_container"===e.target.parentNode.parentNode.id?(0===M(z)&&z.parentNode.appendChild(z),S(),T(z,1)):T(z,1)})),f.playButton.addEventListener("click",(()=>{f.playButton.classList.add("hidden"),f.boardContainer.classList.remove("hidden"),f.shipSelectContainer.classList.remove("hidden"),function(){const e=document.createElement("div");e.id="board_btn_container";const t=document.createElement("div");t.id="undo_btn",t.classList="board_btn";const n=document.createElement("p");n.innerHTML="Undo",t.appendChild(n),t.addEventListener("click",(()=>{const e=JSON.parse(f.board.dataset.history),t=JSON.parse(f.shipSelectContainer.dataset.counter);if(e.length>0){console.log(e);const o=e.pop(),i=document.getElementById(`grid${o}`),a=i.firstChild;t[a.getAttribute("size")]+=1,L(),E(t),n=i,r=a,JSON.parse(r.dataset.activegrids).forEach((e=>{const t=document.getElementById(`grid${e}`);t.classList.remove("shipzone"),t.classList.add("dropzone")})),n.removeChild(r),S(!1,!0),C(_(function(){const e=[];return f.board.childNodes.forEach((t=>{t.classList.contains("shipzone")&&e.push(t)})),e}())),f.board.dataset.history=JSON.stringify(e),f.shipSelectContainer.dataset.counter=JSON.stringify(t)}var n,r})),e.appendChild(t);const r=document.createElement("div");r.id="reset_btn",r.classList="board_btn";const o=document.createElement("p");o.innerHTML="Reset",r.appendChild(o),r.addEventListener("click",(()=>{S(!0),f.shipSelectContainer.dataset.counter=JSON.stringify([0,4,3,2,1]),f.board.dataset.history=JSON.stringify([])})),e.appendChild(r);const i=document.createElement("div");i.id="play_btn",i.classList="board_btn";const a=document.createElement("p");a.innerHTML="Play",i.appendChild(a),function(e){e.addEventListener("click",(()=>{f.shipSelectContainer.dataset.counter===JSON.stringify([0,0,0,0,0])?(f.shipSelectContainer.remove(),m().boardBtnContainer.remove(),function(){const e=document.createElement("div");e.id="cpu_board_container",e.classList.add("board_container");const t=document.createElement("div");t.classList.add("player_title");const n=document.createElement("h1");n.innerHTML="CPU",t.appendChild(n);const r=document.createElement("div");r.id="cpu_board",r.classList.add("board"),w(r,!0),e.appendChild(t),e.appendChild(r);const{bodyContainer:o}=f;o.appendChild(e)}(),function(){const e=function(){const e=[];e.push(k(4,"four",1,!1));for(let t=0;t<2;t++){const t=k(3,"three",2,!1);e.push(t)}for(let t=0;t<3;t++){const t=k(2,"two",3,!1);e.push(t)}for(let t=0;t<4;t++){const t=k(1,"one",4,!1);e.push(t)}return function(e){e.forEach((e=>{e.childNodes.forEach((e=>{e.classList.add("hide")}))}))}(e),e}(),t=m().cpuBoard.childNodes;let n=[];const r=[],o=[];e.forEach((e=>{const i=e.getAttribute("size");let a=[],s=!1;for(;!s;){let c=0,l=!0,d=!1;for(;l;)c=Math.floor(100*Math.random()+1),o.includes(c)||(l=!1,o.push(c),1===Math.floor(2*Math.random())?(d=!0,e.classList.remove("horizontal"),e.classList.add("vertical")):(d=!1,e.classList.add("horizontal"),e.classList.remove("vertical"))),o.length>99&&(l=!1,alert("exceeded grid attempts"));a=[];let p=0;for(let e=0;e<i;e++)!0===d?a.push(c+10*e):a.push(c+e);a.some((e=>e<=0))||a.some((e=>e>100))||a.some((e=>n.includes(e)))||a.some((e=>r.includes(e)))||x(c,i,d)||(s=!0,a.forEach((e=>{[-10,0,10].forEach((t=>{for(let o=-1;o<2;o++)p=e+t,p+=o,!r.includes(p)&&!n.includes(p)&&p<=100&&p>=1&&r.push(p)}))})),console.log(`appended size ${i} ship to Grid ${c}`),d&&console.log("vertical"),console.log(a),e.classList.add("dropped"),e.setAttribute("data-activegrids",JSON.stringify(a)),t[c-1].appendChild(e)),o.length>=99&&(console.log("error, cpu board could not be built"),console.log("Attempted Grids ="),console.log(o),console.log("shipgrids ="),console.log(n),console.log("blocked grids ="),console.log(r),s=!0)}n=n.concat(a)})),console.log(n)}(),(()=>{const e=f.board,t=m().cpuBoard,n=b(!0,y(e));console.log(m().cpuBoard),console.log(y(t));const r=b(!1,y(t)),o=(v(),v());e.style.cursor="crosshair",t.style.cursor="crosshair",function(e,t,n,r){Array.from(m().shipsDropped).forEach((e=>{e.style.pointerEvents="none"})),function(e,t,n,r){t[0].childNodes.forEach((n=>{n.addEventListener("click",(()=>{let o=n.id.replace(/[^0-9]/g,"");o=parseInt(o,10),t[1].attackedGrids.includes(o)||(t[1].recieveAttack(o),t[1].isSunk()&&alert("GameOver"),e[1].recieveAttack(r.cpuAttack(e[1])),e[1].isSunk()&&alert("GameOver"))}))}))}(e,t,0,r)}([e,n],[t,r],0,o)})()):alert("Please place all ships on the grid board before continuing.")}))}(i),e.appendChild(i),f.boardContainer.appendChild(e)}(),w(f.board),E([0,4,3,2,1])}))})()})();