!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist/",n(n.s=7)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(12);Object.defineProperty(e,"ENTER_NAME",{enumerable:!0,get:function(){return o.ENTER_NAME}}),Object.defineProperty(e,"CHOOSE_TASK",{enumerable:!0,get:function(){return o.CHOOSE_TASK}}),Object.defineProperty(e,"CHECK_RESULT",{enumerable:!0,get:function(){return o.CHECK_RESULT}}),Object.defineProperty(e,"START_ROUND",{enumerable:!0,get:function(){return o.START_ROUND}}),Object.defineProperty(e,"WIN",{enumerable:!0,get:function(){return o.WIN}}),Object.defineProperty(e,"LOSS",{enumerable:!0,get:function(){return o.LOSS}}),Object.defineProperty(e,"TABLE_RECORD",{enumerable:!0,get:function(){return o.TABLE_RECORD}}),Object.defineProperty(e,"WRONG",{enumerable:!0,get:function(){return o.WRONG}}),Object.defineProperty(e,"RIGHT",{enumerable:!0,get:function(){return o.RIGHT}}),Object.defineProperty(e,"TRANSLITE_TITLE",{enumerable:!0,get:function(){return o.TRANSLITE_TITLE}}),Object.defineProperty(e,"ARITHMETIC_TITLE",{enumerable:!0,get:function(){return o.ARITHMETIC_TITLE}});var r=n(13);Object.defineProperty(e,"CSS_CLASS",{enumerable:!0,get:function(){return r.CSS_CLASS}});var i=n(14);Object.defineProperty(e,"EVENT",{enumerable:!0,get:function(){return i.EVENT}});var s=n(15);Object.defineProperty(e,"ID",{enumerable:!0,get:function(){return s.ID}});var a=n(16);Object.defineProperty(e,"STATE",{enumerable:!0,get:function(){return a.STATE}})},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var o,r,i={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),u=null,c=0,l=[],f=n(10);function d(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(y(o.parts[s],e))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(y(o.parts[s],e));i[o.id]={id:o.id,refs:1,parts:a}}}}function p(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}function h(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(t.insertAt.before,n);n.insertBefore(e,r)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return n.nc}();o&&(t.attrs.nonce=o)}return m(e,t.attrs),h(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var s=c++;n=u||(u=v(e)),o=T.bind(null,n,s,!1),r=T.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),h(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=f(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),r=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){b(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var s=n[r];(a=i[s.id]).refs--,o.push(a)}t&&d(p(t,e),e);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete i[a.id]}}}};var g,w=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function T(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ModalWindowContent=void 0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=n(0);n(37);e.ModalWindowContent=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.createModalWindow()}return o(t,[{key:"createModalWindow",value:function(){var t=document.getElementById(r.ID.MODAL);t?this.modal=t:(this.modal=document.createElement("div"),this.modal.setAttribute("id",r.ID.MODAL),this.modal.setAttribute("class",r.CSS_CLASS.MODAL),document.body.appendChild(this.modal)),this.modal.classList.add(r.CSS_CLASS.FLEX)}},{key:"createTitle",value:function(t){this.title=document.createElement("h2"),this.title.setAttribute("class",r.CSS_CLASS.TITLE),this.title.textContent=t,this.modal.appendChild(this.title)}},{key:"createButton",value:function(){var t=this;this.button=document.createElement("button"),this.button.setAttribute("id",r.ID.BUTTON),this.button.textContent=r.CHECK_RESULT,this.modal.appendChild(this.button),this.button.addEventListener("click",function(){return t.checkAnswer(event)})}},{key:"checkAnswer",value:function(t){var e=t.target;"Enter"===t.code||"click"===t.target?this.checkResult():e.id===r.ID.BUTTON&&this.checkResult()}}]),t}()},function(t,e,n){"use strict";t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.LoadingImages=function t(e,n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sprite=new Image,this.sprite.src=e,this.sprite.onload=function(){o.height=o.sprite.height,o.windowPosition={},o.windowPosition.dx=n,o.windowPosition.dy=document.documentElement.clientWidth/2-o.height,o.spriteWidth=o.sprite.width}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Person=void 0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=n(0);e.Person=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=e,this.healthPoints=100}return o(t,[{key:"animate",value:function(t){this.image=t.figureImage.sprite,this.context.clearRect(t.figureImage.windowPosition.dx,t.figureImage.windowPosition.dy,2*t.position.dWidth,2*t.position.dHeight),t.position.sx<t.figureImage.spriteWidth-t.position.sWidth?t.position.sx+=t.position.sWidth:(t.position.sx=0,this.state=r.STATE.DEFAULT),this.context.drawImage(this.image,t.position.sx,t.position.sy,t.position.sWidth,t.position.sHeight,t.figureImage.windowPosition.dx,t.figureImage.windowPosition.dy,t.position.dWidth,t.position.dHeight)}}]),t}()},function(t,e,n){"use strict";n(8),(new(n(11).App)).init()},function(t,e,n){var o=n(9);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"#modul {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  width: 400px;\n  height: 400px;\n  margin: 0 auto;\n  background: aliceblue;\n  border: 10px dotted lightskyblue;\n}\n\n#modal-title {\n  flex-basis: 100%;\n  text-align: center;\n  color: #187dec;\n}\n\n.task-button {\n  padding: 10px;\n  color: #187dec;\n  border: 2px solid #187dec;\n  border-radius: 5px;\n  transition-duration: 0.5s;\n  cursor: pointer;\n}\n\n.task-button:hover {\n  color: #ffffff;\n  background: #187dec;\n}\n\n/* #box {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 300px;\n  height: 300px;\n  background: burlywood;\n} */\n\n#button {\n  flex-basis: 90%;\n  padding: 10px;\n  font-size: 1.3em;\n  color: #ffffff;\n  background: #56a5fa;\n}\n\n#result-window {\n  width: 300px;\n  height: 300px;\n  display: none;\n}\n\n#expression {\n  font-size: 2em;\n  color: #187dec;\n}\n\n#input-expression {\n  width: 40px;\n  margin-left: 5px;\n  font-size: 2em;\n  color: #187dec;\n}\n\n.select {\n  padding: 10px;\n  margin: 10px;\n  font-size: 1.5em;\n  color: #ffffff;\n  border: none;\n  background: #56a5fa;\n  transition-duration: 0.5s;\n}\n\n.select:hover {\n  background: #187dec;\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.App=void 0;var o,r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(0),s=n(17),a=(o=s)&&o.__esModule?o:{default:o};n(18);var u=n(21);e.App=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.lastRender=0,this.counter=0}return r(t,[{key:"init",value:function(){this.createCanvase(),this.round=new u.Round(this.ctx),this.createMusic(),this.registerUser()}},{key:"createCanvase",value:function(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=document.documentElement.clientWidth,this.canvas.height=document.documentElement.clientHeight,document.body.appendChild(this.canvas)}},{key:"registerUser",value:function(){var t=this;this.userInputContainer=document.createElement("div"),this.userInputContainer.setAttribute("id",i.ID.USER_INPUT_CONTAINER),this.userInputContainer.textContent=i.ENTER_NAME,this.userInput=document.createElement("input"),this.userInput.setAttribute("id",i.ID.USER_INPUT),this.userInputContainer.appendChild(this.userInput),document.body.appendChild(this.userInputContainer),this.userInput.focus(),this.userInput.addEventListener("keydown",function(){return t.round.getUserName(event,t.userInputContainer,t.userInput)})}},{key:"createMusic",value:function(){this.audio=new Audio,this.audio.volume=.03,this.audio.src=a.default,this.audio.play(),this.audio.autoplay=!0,this.audio.loop=!0}}]),t}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.CHECK_RESULT="Check result!",e.CHOOSE_TASK="Choose the task!",e.ENTER_NAME="Enter your name",e.START_ROUND="Start new round",e.WIN="You win!",e.LOSS="You loss!",e.TABLE_RECORD="Record Table",e.WRONG="Sorry, it is the wrong answer",e.RIGHT="Yes, you right!",e.TRANSLITE_TITLE="Translate the word",e.ARITHMETIC_TITLE="Translate the word",e.WATCH_DEFAULT_URL="https://www.youtube.com/watch?v="},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.CSS_CLASS={SELECT:"select",HIDDEN:"hidden",FLEX:"flex",VISIBLE:"visible",TITLE:"title",MODAL:"modal"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.EVENT={ENTER:"Enter",ARROW_RIGHT:"ArrArrowRightow",ARROW_LEFT:"ArrowLeft",SPACE:"Space",CLICK:"click",ESCAPE:"Escape"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ID={START_BUTTON:"start-button",RECORD_TABLE:"record-table",RECORD_BUTTON:"record-button",TRANSLATOR_EXPRESSION:"translator-expression",INPUT_TRANSLATOR:"input-translator",EXPRESSION:"expression",INPUT_EXPRESSION:"input-expression",USER_INPUT:"user-input",USER_INPUT_CONTAINER:"user-input-container",MODAL:"modal",BUTTON:"button"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.STATE={DEFAULT:"default",ATTACK:"attack",LOSS:"loss"}},function(t,e,n){t.exports=n.p+"a4a2011ac1672d9b7cb0eed6bf45545c.mp3"},function(t,e,n){var o=n(19);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){var o=n(4);(t.exports=n(1)(!1)).push([t.i,"body {\n  margin: 0;\n  padding: 0;\n  font-family: 'Courier New', Courier, monospace;\n}\n\ncanvas {\n  background: url("+o(n(20))+");\n  background-size: cover;\n}\n\n#user-input-container {\n  position: absolute;\n  top: 50vh;\n  left: 0vh;\n\n  width: 300px;\n  padding: 50px;\n  margin: 0 35%;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n\n  font-size: 1.5em;\n  text-align: center;\n  color: #ffffff;\n\n  background: cornflowerblue;\n}\n\n#user-input {\n  flex-basis: 100%;\n  margin-top: 15px;\n  padding: 10px;\n\n  font-size: 1.2em;\n  text-indent: 10px;\n\n  border: none;\n  outline: none;\n}\n\n.hidden {\n  display: none;\n}\n\n.flex {\n  display: flex;\n}\n\n.visible {\n  display: block;\n}\n",""])},function(t,e,n){t.exports=n.p+"./images/background.jpg"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Round=void 0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();n(22);var r,i=n(24),s=(r=i)&&r.__esModule?r:{default:r},a=n(0),u=n(25),c=n(29),l=n(33);e.Round=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=e,this.user=new u.User(this.context),this.opponent=new c.Opponent(this.context),this.modalWindow=new l.ModalWindow,this.roundCount=0,this.speed=10,this.tickCount=0}return o(t,[{key:"start",value:function(){var t=this;this.createButton(),window.addEventListener("getTaskResult",function(){return t.getTaskResult(event.detail.result)}),window.addEventListener("keydown",function(){return t.showTableOfRecords(event)}),this.createAttackSound(),this.render()}},{key:"createAttackSound",value:function(){this.audio=new Audio,this.audio.volume=.1,this.audio.src=s.default}},{key:"createButton",value:function(){var t=this;this.startButton=document.createElement("button"),this.startButton.setAttribute("id",a.ID.START_BUTTON),this.startButton.textContent=a.START_ROUND,this.startButton.addEventListener("keydown",function(){return t.removeButton(event)}),document.body.appendChild(this.startButton),this.startButton.focus()}},{key:"showButton",value:function(){this.startButton.classList.toggle(a.CSS_CLASS.VISIBLE),this.startButton.focus()}},{key:"removeButton",value:function(t){t.code===a.EVENT.ENTER&&(this.startButton.classList.toggle(a.CSS_CLASS.HIDDEN),this.modalWindow.init()),this.startButton.blur()}},{key:"getTaskResult",value:function(t){var e=this;t?this.changePlayerState(this.user,this.opponent):this.changePlayerState(this.opponent,this.user),this.checkHealth(),setTimeout(function(){e.modalWindow.modal.innerHTML="",e.modalWindow.modal.classList.toggle(a.CSS_CLASS.FLEX)},2e3)}},{key:"changePlayerState",value:function(t,e){t.state=a.STATE.ATTACK,e.state=a.STATE.LOSS,e.healthPoints-=50,this.audio.play()}},{key:"checkHealth",value:function(){var t=this;0===this.opponent.healthPoints?this.finish(!0):0===this.user.healthPoints?this.finish(!1):setTimeout(function(){t.modalWindow.init()},4e3)}},{key:"render",value:function(){var t=this;this.tickCount>this.speed&&(this.checkState(this.user),this.checkState(this.opponent),this.tickCount=0),this.tickCount+=1,requestAnimationFrame(function(){return t.render()})}},{key:"checkState",value:function(t){switch(t.state){case a.STATE.LOSS:t.animate(t.figureLoss),this.speed=t.figureRest.speed;break;case a.STATE.ATTACK:this.speed=t.figureAttack.speed,t.animate(t.figureAttack);break;default:t.animate(t.figureRest),this.speed=t.figureRest.speed}}},{key:"finish",value:function(t){var e=this;t?(this.modalWindow.modal.textContent=a.WIN,this.updateHealth(),this.roundCount+=1,setTimeout(function(){e.showButton()},2e3)):(this.modalWindow.modal.textContent=a.LOSS,setTimeout(function(){e.modalWindow.modal.classList.toggle(a.CSS_CLASS.FLEX),e.createRecordTable()},2e3))}},{key:"showTableOfRecords",value:function(t){t.key!==a.EVENT.ESCAPE&&t.target.type!==a.EVENT.CLICK||(this.recordTable=document.getElementById(a.ID.RECORD_TABLE),this.recordTable||(this.createRecordTable(),this.removeButton(),this.finish()))}},{key:"createRecordButton",value:function(){var t=this;this.recordButton=document.createElement("button"),this.recordButton.textContent=a.TABLE_RECORD,this.recordButton.setAttribute("id",a.ID.RECORD_BUTTON),document.body.appendChild(this.recordButton),this.recordButton.addEventListener("click",function(){return t.showTableOfRecords(event)})}},{key:"createRecordTable",value:function(){this.recordTable=document.createElement("div"),this.recordTable.setAttribute("id",a.ID.RECORD_TABLE),this.recordTable.textContent=this.userName+a.WIN+this.roundCount,document.body.appendChild(this.recordTable),this.recordButton.classList.toggle(a.CSS_CLASS.HIDDEN)}},{key:"getUserName",value:function(t,e,n){t.key===a.EVENT.ENTER&&(this.userName=n.value,n.blur(),e.classList.toggle(a.CSS_CLASS.HIDDEN),this.start(),this.createRecordButton())}},{key:"updateHealth",value:function(){this.user.healthPoints=100,this.opponent.healthPoints=100}}]),t}()},function(t,e,n){var o=n(23);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"#record-table {\n  position: absolute;\n  top: 40px;\n  left: 20%;\n  width: 300px;\n  height: 300px;\n  font-size: 2em;\n  background: rgba(114, 108, 176, 0.831);\n}\n\n#record-button {\n  position: absolute;\n  top: 40px;\n  right: 10%;\n  padding: 20px;\n  font-size: 2em;\n  background: rgba(114, 108, 176, 0.831);\n}\n\n#start-button {\n  position: absolute;\n  left: 40%;\n  top: 30vh;\n  padding: 10px 30px;\n\n  font-size: 3em;\n  color: #ffffff;\n\n  border: 4px solid #ffffff;\n  border-radius: 5px;\n\n  background: transparent;\n\n  outline: none;\n}\n\n#start-button:focus {\n  animation: focuseButton 1s infinite ease-out;\n  -webkit-animation: focuseButton 1s infinite ease-out;\n}\n\n@keyframes focuseButton {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n}\n  50% {\n    transform: scale(1.3);\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.3);\n    -ms-transform: scale(1.3);\n    -o-transform: scale(1.3);\n  }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n  }\n}\n",""])},function(t,e,n){t.exports=n.p+"6cf67e6eeed8a9aafcac6242f5f64bb6.mp3"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.User=void 0;var o=c(n(26)),r=c(n(27)),i=c(n(28)),s=n(0),a=n(5),u=n(6);function c(t){return t&&t.__esModule?t:{default:t}}e.User=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state=s.STATE.DEFAULT,n.positionInWindow=document.documentElement.clientWidth/2-400,n.figureRest={speed:10,figureImage:new a.LoadingImages(o.default,n.positionInWindow),position:{sx:0,sy:0,sWidth:36,sHeight:70,dWidth:100,dHeight:110}},n.figureAttack={speed:60,figureImage:new a.LoadingImages(r.default,n.positionInWindow),position:{sx:0,sy:0,sWidth:63,sHeight:70,dWidth:130,dHeight:130}},n.figureLoss={speed:60,figureImage:new a.LoadingImages(i.default,n.positionInWindow),position:{sx:0,sy:0,sWidth:70,sHeight:80,dWidth:130,dHeight:130}},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,u.Person),e}()},function(t,e,n){t.exports=n.p+"./images/default.png"},function(t,e,n){t.exports=n.p+"./images/attack.png"},function(t,e,n){t.exports=n.p+"./images/loss.png"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Opponent=void 0;var o=c(n(30)),r=c(n(31)),i=c(n(32)),s=n(0),a=n(6),u=n(5);function c(t){return t&&t.__esModule?t:{default:t}}e.Opponent=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state=s.STATE.DEFAULT,n.positionInWindow=document.documentElement.clientWidth/2+300,n.figureRest={speed:10,figureImage:new u.LoadingImages(o.default,n.positionInWindow),position:{sx:0,sy:0,sWidth:36.3,sHeight:70,dWidth:100,dHeight:110}},n.figureAttack={speed:60,figureImage:new u.LoadingImages(r.default,n.positionInWindow),position:{sx:0,sy:0,sWidth:63,sHeight:70,dWidth:130,dHeight:130}},n.figureLoss={speed:10,figureImage:new u.LoadingImages(i.default,n.positionInWindow),position:{sx:0,sy:0,sWidth:70,sHeight:80,dWidth:130,dHeight:130}},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.Person),e}()},function(t,e,n){t.exports=n.p+"./images/default-1.png"},function(t,e,n){t.exports=n.p+"./images/attack-1.png"},function(t,e,n){t.exports=n.p+"./images/loss-1.png"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ModalWindow=void 0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=n(0),i=n(34);e.ModalWindow=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return o(t,[{key:"init",value:function(){var t=this;this.selectTask=new i.SelectTask,this.selectTask.drowNewTask=function(){return t.drawTask()}}},{key:"drawTask",value:function(){var t=this;this.selectTask.newTask.create(),this.selectTask.newTask.showResult=function(e){return t.showTaskResult(e)}}},{key:"showTaskResult",value:function(t){this.modal=this.selectTask.newTask.modal,this.modal.textContent=t?r.RIGHT:r.WRONG;var e=new CustomEvent("getTaskResult",{detail:{result:t}});window.dispatchEvent(e)}}]),t}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SelectTask=void 0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=n(0);n(35);var i=n(3),s=n(40),a=n(43);var u={ARITHMETIC:"Arithmetic",TRANSLATOR:"Translator"};e.SelectTask=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.tasks=[u.ARITHMETIC,u.TRANSLATOR],t.create(),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.ModalWindowContent),o(e,[{key:"create",value:function(){(function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(o):void 0})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"createTitle",this).call(this,r.CHOOSE_TASK),this.createButtons()}},{key:"createButtons",value:function(){var t=this;this.tasks.forEach(function(e){t.select=document.createElement("button"),t.select.setAttribute("class",r.CSS_CLASS.SELECT),t.select.setAttribute("data-name",e),t.select.textContent=e,t.modal.appendChild(t.select),t.select.addEventListener("click",function(){return t.chooseTask(event)}),t.select.addEventListener("keydown",function(){return t.chooseTask(event)})})}},{key:"makeFocuse",value:function(t){var e=t.key;e===r.EVENT.ARROW_RIGHT&&(this.select>this.tasks.length&&(this.select=0),this.select?this.taskButtons[this.select].focus():this.taskButtons[this.select+1].focus(),this.taskButtons[this.select].focus()),e===r.EVENT&&(this.select?this.taskButtons[this.select-1].focus():this.taskButtons[this.select].focus())}},{key:"chooseTask",value:function(t){if(t.type===r.EVENT.CLICK||t.code===r.EVENT.ENTER){this.modal.innerHTML="";var e=t.target.dataset.name;e===this.tasks[0]?this.newTask=new s.Arithmetic:e===this.tasks[1]&&(this.newTask=new a.Translator),this.drowNewTask()}}}]),e}()},function(t,e,n){var o=n(36);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".title {\n  flex-basis: 100%;\n\n  color: #56a5fa;\n  text-align: center;\n}",""])},function(t,e,n){var o=n(38);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){var o=n(4);(t.exports=n(1)(!1)).push([t.i,".modal {\n  position: absolute;\n  left: 40%;\n  top: 30vh;\n\n  display: none;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  width: 400px;\n  height: 400px;\n  margin: 0 auto;\n\n  background-size: 100px 100px;\n  border: 45px dashed transparent;\n  border-radius: 5px;\n  -webkit-border-image: url("+o(n(39))+") 17% 14%  round;\n  \n  -webkit-box-shadow: inset 200px 200px 0px 200px rgba(226,241,255,0.96);\n  -moz-box-shadow: inset 200px 200px 0px 200px rgba(226,241,255,0.96);\n  box-shadow: inset 200px 200px 0px 200px rgba(226,241,255,0.96);\n\n  animation: fade 1s ease-out;\n  -webkit-animation: fade 1s ease-out;\n\n}\n\n@keyframes fade {\n  0% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    -o-transform: scale(0);\n}\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n  }\n}\n\n#modal-title {\n  flex-basis: 100%;\n\n  text-align: center;\n  color: #187dec;\n}\n\n#button {\n  flex-basis: 90%;\n  padding: 10px;\n\n  font-size: 1.3em;\n  font-family: 'Courier New', Courier, monospace;\n  color: #ffffff;\n  \n  background: #56a5fa;\n}\n\n.flex {\n  display: flex;\n}\n",""])},function(t,e,n){t.exports=n.p+"./images/border.png"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Arithmetic=void 0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(o):void 0},i=n(0);n(41);var s=n(3);var a="÷",u="×";function c(t,e){var n=t-.5+Math.random()*(e-t+1);return n=Math.round(n)}var l=function(){var t=c(0,100),e=c(1,100);return{value:t+e,text:t+" + "+e+" = "}},f=function(){var t=c(0,100),e=c(0,t);return{value:t-e,text:t+" - "+e+" = "}},d=function(){var t=c(0,10),e=c(0,10);return{value:t*e,text:t+" "+u+" "+e+" = "}},p=function(){var t=function(t){for(var e=[],n=2;n<t;n+=1)for(var o=2;o<n;o+=1){n%o==0&&e.push(n);break}return e}(100),e=t[c(0,t.length-1)],n=function(t){for(var e=[],n=1;n<t-1;n+=1)t%n==0&&e.push(n);return e[c(0,e.length-1)]}(e);return{value:e/n,text:e+" "+a+" "+n+" = "}};e.Arithmetic=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.operators=[l,f,d,p],t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,s.ModalWindowContent),o(e,[{key:"create",value:function(){r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"createTitle",this).call(this,i.ARITHMETIC_TITLE),this.createExpression(),this.createUserAnswer(),r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"createButton",this).call(this),this.drawExpression()}},{key:"createExpression",value:function(){this.expression=document.createElement("span"),this.expression.setAttribute("id",i.ID.EXPRESSION),this.modal.appendChild(this.expression)}},{key:"createUserAnswer",value:function(){var t=this;this.userAnswer=document.createElement("input"),this.userAnswer.setAttribute("id",i.ID.INPUT_EXPRESSION),this.modal.appendChild(this.userAnswer),this.userAnswer.focus(),this.userAnswer.addEventListener("keydown",function(){return r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"checkAnswer",t).call(t,event)})}},{key:"getTask",value:function(){return this.getRandomOperator()()}},{key:"getRandomOperator",value:function(){var t=c(0,this.operators.length-1);return this.operators[t]}},{key:"drawExpression",value:function(){this.answer=this.getTask(),this.expression.textContent=this.answer.text}},{key:"checkResult",value:function(){Number(this.userAnswer.value)===this.answer.value?this.showResult(!0):this.showResult(!1)}}]),e}()},function(t,e,n){var o=n(42);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"#result-window {\n  width: 300px;\n  height: 300px;\n  display: none;\n}\n\n#expression {\n  font-size: 2em;\n  color: #187dec;\n}\n\n#input-expression {\n  width: 40px;\n  margin-left: 5px;\n  font-size: 2em;\n  color: #187dec;\n}\n",""])},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Translator=void 0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(o):void 0},i=n(0);n(44);var s=n(3),a=n(46);e.Translator=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.servises=new a.Servises,t.englishWords=["cat","dog","tiger","bear","rabbit","planet","tea","orange","nose","tail","star","spoon","monkey","hair","eyes","nail","snow","summer","winter","spring","autumn","tooth"],t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,s.ModalWindowContent),o(e,[{key:"create",value:function(){r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"createTitle",this).call(this,i.TRANSLITE_TITLE),this.createExpression(),this.createUserAnswer(),r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"createButton",this).call(this)}},{key:"createExpression",value:function(){var t,e,n;this.expression=document.createElement("span"),this.expression.setAttribute("id",i.ID.TRANSLATOR_EXPRESSION),this.wordToTranslate=this.englishWords[(t=0,e=this.englishWords.length-1,n=t-.5+Math.random()*(e-t+1),n=Math.round(n))],this.expression.textContent=this.wordToTranslate,this.modal.appendChild(this.expression)}},{key:"createUserAnswer",value:function(){var t=this;this.userAnswer=document.createElement("input"),this.userAnswer.setAttribute("id",i.ID.INPUT_TRANSLATOR),this.userAnswer.focus(),this.modal.appendChild(this.userAnswer),this.userAnswer.addEventListener("keydown",function(){return r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"checkAnswer",t).call(t,event)})}},{key:"checkResult",value:function(){var t=this;this.servises.translate(this.userAnswer.value).then(function(e){t.translatedWord=e,t.translatedWord===t.wordToTranslate?t.showResult(!0):t.showResult(!1)}),this.userAnswer.blur()}}]),e}()},function(t,e,n){var o=n(45);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"#translator-expression {\n  flex-basis: 100%;\n  text-align: center;\n\n  font-size: 2em;\n  color: #187dec;\n}\n\n#input-translator {\n  flex-basis: 50%;\n  padding: 10px;\n  margin: 10px;\n}",""])},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();e.Servises=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return o(t,[{key:"translate",value:function(t){return this.URLcurrent="https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20181226T141016Z.ad00d619f773afb4.d120473fb4d98b7a6d869207ff5e3a161ee67a1d&text="+t+"&lang=en",fetch(this.URLcurrent).then(function(t){return t.json()}).then(function(t){return t.text[0]})}}]),t}()}]);