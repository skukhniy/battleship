(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"html, body {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  background-color: rgba(4, 4, 131, 0.644);\n  overflow-x:hidden;\n}\nbody{\n}\n#battleship_logo {\n  display: block;\n  margin-left: auto;\n  margin-right:auto;\n  position: relative;\n  top: -20px;\n  height: 200px;\n}\n\n#play_button {\n  position: absolute;\n  left:50%;\n  top:50%;\n  margin-left: -185px;\n  margin-top: -85px;\n  height: 150px;\n  width: 350px;\n  background-color: lightgray;\n  border: 10px solid black;\n  cursor: pointer;\n}\n#play_button p {\n  display: block;\n  width:100%;\n  text-align: center;\n  font-size: xxx-large;\n}\n#play_button:hover {\n  -webkit-transform: scale(1.2);\n  -ms-transform: scale(3);\n  transform: scale(1.2);\n  \n}\n.nail {\n  position: absolute;\n  display: inline-block;\n  height:15%;\n  width:7%;\n  background-color: darkgray;\n  z-index: 5;\n  border-radius: 50%;\n  margin: 5px;\n}\n#nail_2{\n  left:90%;\n}\n#nail_3{\n  top:78%;\n}\n#nail_4{\n  left:90%;\n  top:78%;\n}\n\n#body_container{\n  display: flex;\n  justify-content: space-evenly;\n}\n\n#board_container{\n  height: 500px;\n  width:500px;\n  border: 8px solid black;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-self: center;\n}\n.grid_block{\n  margin: 0;\n  border:1px solid black;\n  height:48px;\n  width:48px;\n}\n.open_block{\n  height:48px;\n  width:48px;\n  margin: 0;\n  background-color: yellow;\n}\n#ship_select_container{\n  height:550px;\n  width:325px;\n  border:4px solid black;\n}\n.ship_block{\nmargin: 0;\nborder:1px solid black;\nheight: 48px;\nmin-height: 48px;\nwidth:48px;\nmin-width: 48px;\nbackground-color: gray;\n}\n.dropped{\n  position: relative;\n  top:-1px;\n  left:-1px;\n}\n.ship_1_block{\n  display: flex;\n}\n.ship_2_block{\ndisplay: flex;\n}\n.ship_3_block{\n  display: flex;\n  }\n.ship_4_block{\n  display:flex;\n}\n.horizontal{\n  flex-direction: row;\n}\n.vertical{\n  flex-direction: column;\n}\n#oneBlockSelect{\n\n}\n#twoBlockSelect{\n  height:100px;\n  width:325px;\n}\n#threeBlockSelect{\n  height:150px;\n  width:325px;\n}\n#fourBlockSelect{\n  height: 200px;\n  width: 325px;\n  margin-right: 30px;\n}\n.blockSelect{\n  margin-top: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n}\n.blockAmt{\n  display: inline-block;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  margin-left: 30px;\n  margin-right:50px;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black; \n}\n\n",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var f=o(h,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),h=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const g={boardContainer:document.getElementById("board_container"),shipSelectContainer:document.getElementById("ship_select_container"),ship1block:document.getElementById("1-1"),ship2block:document.getElementById("2-1"),ship3block:document.getElementById("3-1"),ship4block:document.getElementById("4-1")};function m(){return[document.querySelectorAll(".grid_block"),document.querySelectorAll('[draggable="true"]'),document.querySelectorAll(".blockedzone")]}function b(e,n,t){const r=String(e),o=String(t),i=document.createElement("div");i.classList.add("ship_block");const a=document.createElement("div");a.id=`${n}BlockSelect`,a.classList="blockSelect";const c=document.createElement("div");c.id=`${n}BlockAmt`,c.classList="blockAmt";const s=document.createElement("h2");s.classList="counter",s.id=`counter${r}`,s.innerHTML=`x${o}`;const l=document.createElement("div");l.classList.add(`ship_${r}_block`,"horizontal"),t>0&&l.setAttribute("draggable",!0),l.setAttribute("ship",!0),l.setAttribute("size",e);for(let n=1;n<e+1;n++){const e=i.cloneNode(!0);l.appendChild(e)}c.appendChild(s),a.appendChild(c),a.append(l),g.shipSelectContainer.appendChild(a)}function v(e){b(1,"one",e[1]),b(2,"two",e[2]),b(3,"three",e[3]),b(4,"four",e[4]);m()[1].forEach((e=>{const n=e.children;n[0]&&n[0].addEventListener("mouseenter",(()=>e.setAttribute("offset",0))),n[1]&&n[1].addEventListener("mouseenter",(()=>e.setAttribute("offset",-1))),n[2]&&n[2].addEventListener("mouseenter",(()=>e.setAttribute("offset",-2))),n[3]&&n[3].addEventListener("mouseenter",(()=>e.setAttribute("offset",-3)))})),m()[1].forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("dropped")||(e.classList.contains("horizontal")?(e.classList.remove("horizontal"),e.classList.add("vertical")):(e.classList.remove("vertical"),e.classList.add("horizontal")))}))}))}let x;const y=[0,4,3,2,1];let k;function E(e){e.childNodes.forEach((e=>{e.style.background="none"}))}function _(e){let n=e.id.replace(/[^0-9]/g,"");return n=parseInt(n,10),n}function L(e,n){const t=[],r=e.getAttribute("size");let o=e.getAttribute("offset"),i=0,a=_(n),c=0,s=0,l=0;if(1===r)return[n];if(e.classList.contains("vertical")?(i=10,o*=10):(i=1,o*=1),r>=1){a+=o;const e=document.getElementById(`grid${String(a)}`);t.push(e)}if(r>=2){c=a+i;const e=document.getElementById(`grid${String(c)}`);t.push(e)}if(r>=3){s=c+i;const e=document.getElementById(`grid${String(s)}`);t.push(e)}if(r>=4){l=s+i;const e=document.getElementById(`grid${String(l)}`);t.push(e)}return t}function w(e){const n=e.parentNode.children[0].children[0];return parseInt(n.innerHTML.replace("x",""),10)}function S(e,n){const t=e.parentNode.children[0].children[0],r=w(e);t.innerHTML=`x${String(r+n)}`}!function(e){for(let n=1;n<101;n++){const t=document.createElement("div");t.classList.add("grid_block","dropzone"),t.id=`grid${String(n)}`,e.appendChild(t)}}(g.boardContainer),v(y),document.addEventListener("drag",(e=>{})),document.addEventListener("dragstart",(e=>{x=e.target,x.parentNode.parentNode===g.shipSelectContainer&&S(x,-1),m()[2].forEach((e=>{e.style.background="rgba(222, 7, 7, 0.383)"}))})),document.addEventListener("dragenter",(e=>{k=[],e.target.classList.contains("dropzone")&&(e.target.style.background="green",x.getAttribute("size")>1&&L(x,e.target).forEach((e=>{e.style.background="green",k.push(e.id)})))})),document.addEventListener("dragover",(e=>{e.preventDefault()})),document.addEventListener("dragleave",(e=>{e.target.classList.contains("dropzone")&&(k.includes(e.target.id)||(e.target.style.background="none"),x.getAttribute("size")>1&&L(x,e.target).forEach((e=>{k.includes(e.id)||(e.style.background="none")})))})),document.addEventListener("drop",(e=>{if(e.preventDefault(),e.target.classList.contains("dropzone")){const n=L(x,e.target);E(g.boardContainer),n[0].appendChild(x),x.classList.add("dropped"),x.setAttribute("draggable",!1),function(e){const n=[];return e.forEach((t=>{const r=_(t);[-10,0,10].forEach((t=>{for(let o=-1;o<2;o++){let i=r+t;i+=o;const a=document.getElementById(`grid${String(i)}`);n.includes(a)||e.includes(a)||n.push(a)}}))})),n}(n).forEach((e=>{e.classList.remove("dropzone"),e.classList.add("blockedzone")})),y[x.getAttribute("size")]-=1,function(){const e=g.shipSelectContainer;for(;e.firstChild;)e.removeChild(e.firstChild)}(),v(y)}else"ship_select_container"===e.target.id||"ship_select_container"===e.target.parentNode.id||e.target.parentNode.getAttribute("ship")&&"ship_select_container"===e.target.parentNode.parentNode.id?(0===w(x)&&x.parentNode.appendChild(x),E(g.boardContainer),S(x,1)):S(x,1)}))})()})();