(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"html, body {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  background-color: rgba(4, 4, 131, 0.644);\n  overflow-x:hidden;\n}\nbody{\n}\n#battleship_logo {\n  display: block;\n  margin-left: auto;\n  margin-right:auto;\n  position: relative;\n  top: -20px;\n  height: 200px;\n}\n\n#play_button {\n  position: absolute;\n  left:50%;\n  top:50%;\n  margin-left: -185px;\n  margin-top: -85px;\n  height: 150px;\n  width: 350px;\n  background-color: lightgray;\n  border: 10px solid black;\n  cursor: pointer;\n}\n#play_button p {\n  display: block;\n  width:100%;\n  text-align: center;\n  font-size: xxx-large;\n}\n#play_button:hover {\n  -webkit-transform: scale(1.2);\n  -ms-transform: scale(3);\n  transform: scale(1.2);\n  \n}\n.nail {\n  position: absolute;\n  display: inline-block;\n  height:15%;\n  width:7%;\n  background-color: darkgray;\n  z-index: 5;\n  border-radius: 50%;\n  margin: 5px;\n}\n#nail_2{\n  left:90%;\n}\n#nail_3{\n  top:78%;\n}\n#nail_4{\n  left:90%;\n  top:78%;\n}\n\n#body_container{\n  display: flex;\n  justify-content: space-evenly;\n}\n\n#board_container{\n  height: 500px;\n  width:500px;\n  border: 8px solid black;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.grid_block{\n  margin: 0;\n  border:1px solid black;\n  height:48px;\n  width:48px;\n}\n.open_block{\n  height:48px;\n  width:48px;\n  margin: 0;\n  background-color: yellow;\n}\n#ship_select_container{\n  height:500px;\n  width:325px;\n  border:4px solid black;\n}\n.ship_1_block{\nmargin: 0;\nborder:1px solid black;\nheight: 48px;\nwidth:48px;\nbackground-color: gray;\n}\n.dragAbove{\n  background-color: gray;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var f=o(g,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),g=t(426),f={};let h;f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals,function(n){for(let e=1;e<101;e++){const t=document.createElement("div");t.classList.add("grid_block","dropzone"),t.id=`grid${String(e)}`,n.appendChild(t)}}([document.getElementById("board_container"),document.getElementById("ship_select_container"),document.getElementById("1-1")][0]),document.addEventListener("drag",(()=>{})),document.addEventListener("dragstart",(n=>{h=n.target,console.log(h)})),document.addEventListener("dragenter",(n=>{console.log("DRAG ENTER"),n.target.classList.contains("dropzone")&&(n.target.style.background="red")})),document.addEventListener("dragover",(n=>{n.preventDefault()})),document.addEventListener("dragleave",(n=>{console.log("DRAG LEAVE"),n.target.classList.contains("dropzone")&&(n.target.style.background="none")})),document.addEventListener("drop",(n=>{console.log("DROP"),n.preventDefault(),console.log("test"),n.target.classList.contains("dropzone")&&(console.log(h),h.parentNode.removeChild(h),n.target.appendChild(h),n.target.style.background="none")}))})()})();