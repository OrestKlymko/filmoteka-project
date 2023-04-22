var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}function i(e){return e&&e.__esModule?e.default:e}var n={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var s,o,c,u=s={};function l(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}function h(e){if(o===setTimeout)return setTimeout(e,0);if((o===l||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(t){try{return o.call(null,e,0)}catch(t){return o.call(this,e,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:l}catch(e){o=l}try{c="function"==typeof clearTimeout?clearTimeout:d}catch(e){c=d}}();var f,p=[],m=!1,g=-1;function v(){m&&f&&(m=!1,f.length?p=f.concat(p):g=-1,p.length&&b())}function b(){if(!m){var e=h(v);m=!0;for(var t=p.length;t;){for(f=p,p=[];++g<t;)f&&f[g].run();g=-1,t=p.length}f=null,m=!1,function(e){if(c===clearTimeout)return clearTimeout(e);if((c===d||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function w(){}u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];p.push(new y(e,t)),1!==p.length||m||h(b)},y.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=w,u.addListener=w,u.once=w,u.off=w,u.removeListener=w,u.removeAllListeners=w,u.emit=w,u.prependListener=w,u.prependOnceListener=w,u.listeners=function(e){return[]},u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _=function(e){const t=[];let i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:r<2048?(t[i++]=r>>6|192,t[i++]=63&r|128):55296==(64512&r)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128,t[i++]=r>>6&63|128,t[i++]=63&r|128):(t[i++]=r>>12|224,t[i++]=r>>6&63|128,t[i++]=63&r|128)}return t},I={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){const r=e[t],a=t+1<e.length,s=a?e[t+1]:0,o=t+2<e.length,c=o?e[t+2]:0,u=r>>2,l=(3&r)<<4|s>>4;let d=(15&s)<<2|c>>6,h=63&c;o||(h=64,a||(d=64)),n.push(i[u],i[l],i[d],i[h])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let i=0,n=0;for(;i<e.length;){const r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const a=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&a)}else if(r>239&&r<365){const a=((7&r)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{const a=e[i++],s=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&a)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){const r=i[e.charAt(t++)],a=t<e.length?i[e.charAt(t)]:0;++t;const s=t<e.length?i[e.charAt(t)]:64;++t;const o=t<e.length?i[e.charAt(t)]:64;if(++t,null==r||null==a||null==s||null==o)throw new E;const c=r<<2|a>>4;if(n.push(c),64!==s){const e=a<<4&240|s>>2;if(n.push(e),64!==o){const e=s<<6&192|o;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const k=function(e){return function(e){const t=_(e);return I.encodeByteArray(t,!0)}(e).replace(/\./g,"")},S=function(e){try{return I.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function C(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const i in t)t.hasOwnProperty(i)&&"__proto__"!==i&&(e[i]=C(e[i],t[i]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const T=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,A=()=>{try{return T()||(()=>{if(void 0===s||void 0===s.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&S(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},P=e=>{var t;return null===(t=A())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,i))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function O(){var t;const i=null===(t=A())||void 0===t?void 0:t.forceEnvironment;if("node"===i)return!0;if("browser"===i)return!1;try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}function L(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function D(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function x(){const e=N();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function M(){try{return"object"==typeof indexedDB}catch(e){return!1}}class U extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,U.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,F.prototype.create)}}class F{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],a=r?function(e,t){return e.replace(j,((e,i)=>{const n=t[i];return null!=n?String(n):`<${i}?>`}))}(r,i):"Error",s=`${this.serviceName}: ${a} (${n}).`;return new U(n,s,i)}}const j=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function H(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function V(e,t){if(e===t)return!0;const i=Object.keys(e),n=Object.keys(t);for(const r of i){if(!n.includes(r))return!1;const i=e[r],a=t[r];if(W(i)&&W(a)){if(!V(i,a))return!1}else if(i!==a)return!1}for(const e of n)if(!i.includes(e))return!1;return!0}function W(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(e){const t=[];for(const[i,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function z(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[i,n]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n)}})),t}function K(e){const t=e.indexOf("?");if(!t)return"";const i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t){const i=new $(e,t);return i.subscribe.bind(i)}class ${constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,i){let n;if(void 0===e&&void 0===t&&void 0===i)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:i},void 0===n.next&&(n.next=Y),void 0===n.error&&(n.error=Y),void 0===n.complete&&(n.complete=Y);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Y(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){return e&&e._delegate?e._delegate:e}class X{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new R;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[e,t]of this.instancesDeferred.entries()){i===this.normalizeInstanceIdentifier(e)&&t.resolve(n)}return n}onInit(e,t){var i;const n=this.normalizeInstanceIdentifier(t),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);const a=this.instances.get(n);return a&&e(a,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const n of i)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,"[DEFAULT]"===n?void 0:n),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){}var n;return i||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Q{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Z(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}var ee={};t(ee,"_DEFAULT_ENTRY_NAME",(function(){return Pe})),t(ee,"_apps",(function(){return Ne})),t(ee,"_components",(function(){return Oe})),t(ee,"_addComponent",(function(){return Le})),t(ee,"_addOrOverwriteComponent",(function(){return De})),t(ee,"_registerComponent",(function(){return xe})),t(ee,"_getProvider",(function(){return Me})),t(ee,"_removeServiceInstance",(function(){return Ue})),t(ee,"_clearComponents",(function(){return Fe})),t(ee,"SDK_VERSION",(function(){return He})),t(ee,"initializeApp",(function(){return Ve})),t(ee,"getApp",(function(){return We})),t(ee,"getApps",(function(){return Ge})),t(ee,"deleteApp",(function(){return ze})),t(ee,"registerVersion",(function(){return Ke})),t(ee,"onLog",(function(){return qe})),t(ee,"setLogLevel",(function(){return $e})),t(ee,"FirebaseError",(function(){return U}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const te=[];var ie,ne;(ne=ie||(ie={}))[ne.DEBUG=0]="DEBUG",ne[ne.VERBOSE=1]="VERBOSE",ne[ne.INFO=2]="INFO",ne[ne.WARN=3]="WARN",ne[ne.ERROR=4]="ERROR",ne[ne.SILENT=5]="SILENT";const re={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},ae=ie.INFO,se={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},oe=(e,t,...i)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),r=se[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${n}]  ${e.name}:`,...i)};class ce{constructor(e){this.name=e,this._logLevel=ae,this._logHandler=oe,this._userLogHandler=null,te.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?re[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}function ue(e,t){for(const i of te){let n=null;t&&t.level&&(n=re[t.level]),i.userLogHandler=null===e?null:(t,i,...r)=>{const a=r.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");i>=(null!=n?n:t.logLevel)&&e({level:ie[i].toLowerCase(),message:a,args:r,type:t.name})}}}let le,de;const he=new WeakMap,fe=new WeakMap,pe=new WeakMap,me=new WeakMap,ge=new WeakMap;let ve={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return fe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||pe.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return we(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function be(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(de||(de=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(_e(this),t),we(he.get(this))}:function(...t){return we(e.apply(_e(this),t))}:function(t,...i){const n=e.call(_e(this),t,...i);return pe.set(n,t.sort?t.sort():[t]),we(n)}}function ye(e){return"function"==typeof e?be(e):(e instanceof IDBTransaction&&function(e){if(fe.has(e))return;const t=new Promise(((t,i)=>{const n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",a),e.removeEventListener("abort",a)},r=()=>{t(),n()},a=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",a),e.addEventListener("abort",a)}));fe.set(e,t)}(e),t=e,(le||(le=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,ve):e);var t}function we(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,i)=>{const n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",a)},r=()=>{t(we(e.result)),n()},a=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&he.set(t,e)})).catch((()=>{})),ge.set(t,e),t}(e);if(me.has(e))return me.get(e);const t=ye(e);return t!==e&&(me.set(e,t),ge.set(t,e)),t}const _e=e=>ge.get(e);function Ie(e,t,{blocked:i,upgrade:n,blocking:r,terminated:a}={}){const s=indexedDB.open(e,t),o=we(s);return n&&s.addEventListener("upgradeneeded",(e=>{n(we(s.result),e.oldVersion,e.newVersion,we(s.transaction))})),i&&s.addEventListener("blocked",(()=>i())),o.then((e=>{a&&e.addEventListener("close",(()=>a())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),o}const Ee=["get","getKey","getAll","getAllKeys","count"],ke=["put","add","delete","clear"],Se=new Map;function Ce(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Se.get(t))return Se.get(t);const i=t.replace(/FromIndex$/,""),n=t!==i,r=ke.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!r&&!Ee.includes(i))return;const a=async function(e,...t){const a=this.transaction(e,r?"readwrite":"readonly");let s=a.store;return n&&(s=s.index(t.shift())),(await Promise.all([s[i](...t),r&&a.done]))[0]};return Se.set(t,a),a}ve=(e=>({...e,get:(t,i,n)=>Ce(t,i)||e.get(t,i,n),has:(t,i)=>!!Ce(t,i)||e.has(t,i)}))(ve);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ae=new ce("@firebase/app"),Pe="[DEFAULT]",Re={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ne=new Map,Oe=new Map;function Le(e,t){try{e.container.addComponent(t)}catch(i){Ae.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}function De(e,t){e.container.addOrOverwriteComponent(t)}function xe(e){const t=e.name;if(Oe.has(t))return Ae.debug(`There were multiple attempts to register component ${t}.`),!1;Oe.set(t,e);for(const t of Ne.values())Le(t,e);return!0}function Me(e,t){const i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}function Ue(e,t,i=Pe){Me(e,t).clearInstance(i)}function Fe(){Oe.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new F("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new X("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw je.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="9.20.0";function Ve(e,t={}){let i=e;if("object"!=typeof t){t={name:t}}const n=Object.assign({name:Pe,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw je.create("bad-app-name",{appName:String(r)});var a;if(i||(i=null===(a=A())||void 0===a?void 0:a.config),!i)throw je.create("no-options");const s=Ne.get(r);if(s){if(V(i,s.options)&&V(n,s.config))return s;throw je.create("duplicate-app",{appName:r})}const o=new Q(r);for(const e of Oe.values())o.addComponent(e);const c=new Be(i,n,o);return Ne.set(r,c),c}function We(e=Pe){const t=Ne.get(e);if(!t&&e===Pe)return Ve();if(!t)throw je.create("no-app",{appName:e});return t}function Ge(){return Array.from(Ne.values())}async function ze(e){const t=e.name;Ne.has(t)&&(Ne.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Ke(e,t,i){var n;let r=null!==(n=Re[e])&&void 0!==n?n:e;i&&(r+=`-${i}`);const a=r.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${r}" with version "${t}":`];return a&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ae.warn(e.join(" "))}xe(new X(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}function qe(e,t){if(null!==e&&"function"!=typeof e)throw je.create("invalid-log-argument");ue(e,t)}function $e(e){var t;t=e,te.forEach((e=>{e.setLogLevel(t)}))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ye=null;function Je(){return Ye||(Ye=Ie("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw je.create("idb-open",{originalErrorMessage:e.message})}))),Ye}async function Xe(e,t){try{const i=(await Je()).transaction("firebase-heartbeat-store","readwrite"),n=i.objectStore("firebase-heartbeat-store");return await n.put(t,Ze(e)),i.done}catch(e){if(e instanceof U)Ae.warn(e.message);else{const t=je.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ae.warn(t.message)}}}function Ze(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=et();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=et(),{heartbeatsToSend:t,unsentEntries:i}=function(e,t=1024){const i=[];let n=e.slice();for(const r of e){const e=i.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),it(i)>t){e.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),it(i)>t){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=k(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function et(){return(new Date).toISOString().substring(0,10)}class tt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!M()&&new Promise(((e,t)=>{try{let i=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await Je()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ze(e))}catch(e){if(e instanceof U)Ae.warn(e.message);else{const t=je.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ae.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}function it(e){return k(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt;nt="",xe(new X("platform-logger",(e=>new Te(e)),"PRIVATE")),xe(new X("heartbeat",(e=>new Qe(e)),"PRIVATE")),Ke("@firebase/app","0.9.8",nt),Ke("@firebase/app","0.9.8","esm2017"),Ke("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt{constructor(e,t){this._delegate=e,this.firebase=t,Le(e,new X("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),ze(this._delegate))))}_getService(e,t=Pe){var i;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(e);return n.isInitialized()||"EXPLICIT"!==(null===(i=n.getComponent())||void 0===i?void 0:i.instantiationMode)||n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=Pe){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Le(this._delegate,e)}_addOrOverwriteComponent(e){De(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new F("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});const st=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){const t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){const t={},i={__esModule:!0,initializeApp:function(n,r={}){const a=Ve(n,r);if(B(t,a.name))return t[a.name];const s=new e(a,i);return t[a.name]=s,s},app:n,registerVersion:Ke,setLogLevel:$e,onLog:qe,apps:null,SDK_VERSION:He,INTERNAL:{registerComponent:function(t){const r=t.name,a=r.replace("-compat","");if(xe(t)&&"PUBLIC"===t.type){const s=(e=n())=>{if("function"!=typeof e[a])throw at.create("invalid-app-argument",{appName:r});return e[a]()};void 0!==t.serviceProps&&C(s,t.serviceProps),i[a]=s,e.prototype[a]=function(...e){return this._getService.bind(this,r).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?i[a]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:ee}};function n(e){if(!B(t,e=e||Pe))throw at.create("no-app",{appName:e});return t[e]}return i.default=i,Object.defineProperty(i,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),n.App=e,i}(rt);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){C(t,e)},createSubscribe:q,ErrorFactory:F,deepExtend:C}),t}(),ot=new ce("@firebase/app-compat");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if("object"==typeof self&&self.self===self&&void 0!==self.firebase){ot.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&ot.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const ct=st;!
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Ke("@firebase/app-compat","0.2.8",e)}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ct.registerVersion("firebase","9.20.0","app-compat");function ut(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i}Object.create;Object.create;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lt="facebook.com",dt="github.com",ht="google.com",ft="password",pt="twitter.com",mt="EMAIL_SIGNIN",gt="PASSWORD_RESET",vt="RECOVER_EMAIL",bt="REVERT_SECOND_FACTOR_ADDITION",yt="VERIFY_AND_CHANGE_EMAIL",wt="VERIFY_EMAIL";function _t(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const It=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend."}},Et=_t,kt=new F("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),St=new ce("@firebase/auth");function Ct(e,...t){St.logLevel<=ie.ERROR&&St.error(`Auth (${He}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e,...t){throw Nt(e,...t)}function At(e,...t){return Nt(e,...t)}function Pt(e,t,i){const n=Object.assign(Object.assign({},Et()),{[t]:i});return new F("auth","Firebase",n).create(t,{appName:e.name})}function Rt(e,t,i){if(!(t instanceof i))throw i.name!==t.constructor.name&&Tt(e,"argument-error"),Pt(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nt(e,...t){if("string"!=typeof e){const i=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(i,...n)}return kt.create(e,...t)}function Ot(e,t,...i){if(!e)throw Nt(t,...i)}function Lt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ct(t),new Error(t)}function Dt(e,t){e||Lt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Mt(){return"http:"===Ut()||"https:"===Ut()}function Ut(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dt(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(N())||D()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Mt()||L()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e,t){Dt(e.emulator,"Emulator should always be set here");const{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Vt=new Ft(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Gt(e,t,i,n,r={}){return zt(e,r,(async()=>{let r={},a={};n&&("GET"===t?a=n:r={body:JSON.stringify(n)});const s=G(Object.assign({key:e.config.apiKey},a)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),Bt.fetch()(qt(e,e.config.apiHost,i,s),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},r))}))}async function zt(e,t,i){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},Ht),t);try{const t=new $t(e),r=await Promise.race([i(),t.promise]);t.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw Yt(e,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const t=r.ok?a.errorMessage:a.error.message,[i,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw Yt(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===i)throw Yt(e,"email-already-in-use",a);if("USER_DISABLED"===i)throw Yt(e,"user-disabled",a);const o=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw Pt(e,o,s);Tt(e,o)}}catch(t){if(t instanceof U)throw t;Tt(e,"network-request-failed",{message:String(t)})}}async function Kt(e,t,i,n,r={}){const a=await Gt(e,t,i,n,r);return"mfaPendingCredential"in a&&Tt(e,"multi-factor-auth-required",{_serverResponse:a}),a}function qt(e,t,i,n){const r=`${t}${i}?${n}`;return e.config.emulator?jt(e.config,r):`${e.config.apiScheme}://${r}`}class $t{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(At(this.auth,"network-request-failed"))),Vt.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yt(e,t,i){const n={appName:e.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);const r=At(e,t,n);return r.customData._tokenResponse=i,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(e){return 1e3*Number(e)}function Zt(e){const[t,i,n]=e.split(".");if(void 0===t||void 0===i||void 0===n)return Ct("JWT malformed, contained fewer than 3 sections"),null;try{const e=S(i);return e?JSON.parse(e):(Ct("Failed to decode base64 JWT payload"),null)}catch(e){return Ct("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qt(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof U&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class ei{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jt(this.lastLoginAt),this.creationTime=Jt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(e){var t;const i=e.auth,n=await e.getIdToken(),r=await Qt(e,async function(e,t){return Gt(e,"POST","/v1/accounts:lookup",t)}(i,{idToken:n}));Ot(null==r?void 0:r.users.length,i,"internal-error");const a=r.users[0];e._notifyReloadListener(a);const s=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?a.providerUserInfo.map((e=>{var{providerId:t}=e,i=ut(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})):[];const o=(c=e.providerData,u=s,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,d=!(e.email&&a.passwordHash||(null==o?void 0:o.length)),h=!!l&&d,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new ti(a.createdAt,a.lastLoginAt),isAnonymous:h};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ot(e.idToken,"internal-error"),Ot(void 0!==e.idToken,"internal-error"),Ot(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Zt(e);return Ot(t,"internal-error"),Ot(void 0!==t.exp,"internal-error"),Ot(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ot(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:n,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const i=await zt(e,{},(async()=>{const i=G({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,a=qt(e,n,"/v1/token",`key=${r}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Bt.fetch()(a,{method:"POST",headers:s,body:i})}));return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}(e,t);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){const{refreshToken:i,accessToken:n,expirationTime:r}=t,a=new ni;return i&&(Ot("string"==typeof i,"internal-error",{appName:e}),a.refreshToken=i),n&&(Ot("string"==typeof n,"internal-error",{appName:e}),a.accessToken=n),r&&(Ot("number"==typeof r,"internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return Lt("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e,t){Ot("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ai{constructor(e){var{uid:t,auth:i,stsTokenManager:n}=e,r=ut(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ei(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ti(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Qt(this,this.stsTokenManager.getToken(this.auth,e));return Ot(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const i=J(e),n=await i.getIdToken(t),r=Zt(n);Ot(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error");const a="object"==typeof r.firebase?r.firebase:void 0,s=null==a?void 0:a.sign_in_provider;return{claims:r,token:n,authTime:Jt(Xt(r.auth_time)),issuedAtTime:Jt(Xt(r.iat)),expirationTime:Jt(Xt(r.exp)),signInProvider:s||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=J(e);await ii(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ot(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ai(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ot(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ii(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qt(this,async function(e,t){return Gt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,n,r,a,s,o,c,u;const l=null!==(i=t.displayName)&&void 0!==i?i:void 0,d=null!==(n=t.email)&&void 0!==n?n:void 0,h=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(a=t.photoURL)&&void 0!==a?a:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:y,isAnonymous:w,providerData:_,stsTokenManager:I}=t;Ot(b&&I,e,"internal-error");const E=ni.fromJSON(this.name,I);Ot("string"==typeof b,e,"internal-error"),ri(l,e.name),ri(d,e.name),Ot("boolean"==typeof y,e,"internal-error"),Ot("boolean"==typeof w,e,"internal-error"),ri(h,e.name),ri(f,e.name),ri(p,e.name),ri(m,e.name),ri(g,e.name),ri(v,e.name);const k=new ai({uid:b,auth:e,email:d,emailVerified:y,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(k.providerData=_.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,i=!1){const n=new ni;n.updateFromServerResponse(t);const r=new ai({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return await ii(r),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new Map;function oi(e){Dt(e instanceof Function,"Expected a class definition");let t=si.get(e);return t?(Dt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,si.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ci.type="NONE";const ui=ci;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e,t,i){return`firebase:${e}:${t}:${i}`}class di{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:n,name:r}=this.auth;this.fullUserKey=li(this.userKey,n.apiKey,r),this.fullPersistenceKey=li("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ai._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new di(oi(ui),e,i);const n=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=n[0]||oi(ui);const a=li(i,e.config.apiKey,e.name);let s=null;for(const i of t)try{const t=await i._get(a);if(t){const n=ai._fromJSON(e,t);i!==r&&(s=n),r=i;break}}catch(e){}const o=n.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&o.length?(r=o[0],s&&await r._set(a,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(a)}catch(e){}}))),new di(r,e,i)):new di(r,e,i)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(gi(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fi(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(bi(t))return"Blackberry";if(yi(t))return"Webos";if(pi(t))return"Safari";if((t.includes("chrome/")||mi(t))&&!t.includes("edge/"))return"Chrome";if(vi(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(t);if(2===(null==i?void 0:i.length))return i[1]}return"Other"}function fi(e=N()){return/firefox\//i.test(e)}function pi(e=N()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function mi(e=N()){return/crios\//i.test(e)}function gi(e=N()){return/iemobile/i.test(e)}function vi(e=N()){return/android/i.test(e)}function bi(e=N()){return/blackberry/i.test(e)}function yi(e=N()){return/webos/i.test(e)}function wi(e=N()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function _i(e=N()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Ii(e=N()){return wi(e)||vi(e)||yi(e)||bi(e)||/windows phone/i.test(e)||gi(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ei(e,t=[]){let i;switch(e){case"Browser":i=hi(N());break;case"Worker":i=`${hi(N())}-${e}`;break;default:i=e}const n=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${He}/${n}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(e,t){return Gt(e,"GET","/v2/recaptchaConfig",Wt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(e){return void 0!==e&&void 0!==e.getResponse}function Ci(e){return void 0!==e&&void 0!==e.enterprise}class Ti{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e){return new Promise(((t,i)=>{const n=document.createElement("script");var r,a;n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=At("internal-error");t.customData=e,i(t)},n.type="text/javascript",n.charset="UTF-8",(null!==(a=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==a?a:document).appendChild(n)}))}function Pi(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Ri{constructor(e){this.type="recaptcha-enterprise",this.auth=Di(e)}async verify(e="verify",t=!1){function i(t,i,n){const r=window.grecaptcha;Ci(r)?r.enterprise.ready((()=>{try{r.enterprise.execute(t,{action:e}).then((e=>{i(e)})).catch((e=>{n(e)}))}catch(e){n(e)}})):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,n)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,i)=>{ki(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((n=>{if(void 0!==n.recaptchaKey){const i=new Ti(n);return null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,t(i.siteKey)}i(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{i(e)}))}))})(this.auth).then((r=>{if(!t&&Ci(window.grecaptcha))i(r,e,n);else{if("undefined"==typeof window)return void n(new Error("RecaptchaVerifier is only supported in browser"));Ai("https://www.google.com/recaptcha/enterprise.js?render="+r).then((()=>{i(r,e,n)})).catch((e=>{n(e)}))}})).catch((e=>{n(e)}))}))}}async function Ni(e,t,i,n=!1){const r=new Ri(e);let a;try{a=await r.verify(i)}catch(e){a=await r.verify(i,!0)}const s=Object.assign({},t);return n?Object.assign(s,{captchaResp:a}):Object.assign(s,{captchaResponse:a}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=t=>new Promise(((i,n)=>{try{i(e(t))}catch(e){n(e)}}));i.onAbort=t,this.queue.push(i);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t,i,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xi(this),this.idTokenSubscription=new xi(this),this.beforeStateQueue=new Oi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=oi(t)),this._initializationPromise=this.queue((async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await di.create(this,e),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let n=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,a=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==a||!(null==s?void 0:s.user)||(n=s.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=i,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return Ot(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ii(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?J(e):null;return t&&Ot(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ot(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(oi(e))}))}async initializeRecaptchaConfig(){const e=await ki(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Ti(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Ri(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new F("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&oi(e)||this._popupRedirectResolver;Ot(t,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[oi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return Ot(a,this,"internal-error"),a.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,i,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ot(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ei(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){St.logLevel<=ie.WARN&&St.warn(`Auth (${He}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function Di(e){return J(e)}class xi{constructor(e){this.auth=e,this.observer=null,this.addObserver=q((e=>this.observer=e))}get next(){return Ot(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(e,t,i){const n=Di(e);Ot(n._canInitEmulator,n,"emulator-config-failed"),Ot(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const r=!!(null==i?void 0:i.disableWarnings),a=Ui(t),{host:s,port:o}=function(e){const t=Ui(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};const n=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const e=r[1];return{host:e,port:Fi(n.substr(e.length+1))}}{const[e,t]=n.split(":");return{host:e,port:Fi(t)}}}(t),c=null===o?"":`:${o}`;n.config.emulator={url:`${a}//${s}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:o,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Ui(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Fi(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class ji{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,t){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(e,t){return Gt(e,"POST","/v1/accounts:resetPassword",Wt(e,t))}async function Hi(e,t){return Gt(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Vi(e,t){return Kt(e,"POST","/v1/accounts:signInWithPassword",Wt(e,t))}async function Wi(e,t){return Gt(e,"POST","/v1/accounts:sendOobCode",Wt(e,t))}async function Gi(e,t){return Wi(e,t)}async function zi(e,t){return Wi(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ki extends ji{constructor(e,t,i,n=null){super("password",i),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new Ki(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Ki(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Ni(e,i,"signInWithPassword");return Vi(e,t)}return Vi(e,i).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Ni(e,i,"signInWithPassword");return Vi(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Kt(e,"POST","/v1/accounts:signInWithEmailLink",Wt(e,t))}(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Hi(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Kt(e,"POST","/v1/accounts:signInWithEmailLink",Wt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(e,t){return Kt(e,"POST","/v1/accounts:signInWithIdp",Wt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends ji{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n}=t,r=ut(t,["providerId","signInMethod"]);if(!i||!n)return null;const a=new $i(i,n);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){return qi(e,this.buildRequest())}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,qi(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qi(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=G(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji extends ji{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ji({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ji({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Kt(e,"POST","/v1/accounts:signInWithPhoneNumber",Wt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const i=await Kt(e,"POST","/v1/accounts:signInWithPhoneNumber",Wt(e,t));if(i.temporaryProof)throw Yt(e,"account-exists-with-different-credential",i);return i}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Kt(e,"POST","/v1/accounts:signInWithPhoneNumber",Wt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Yi)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}=e;return i||t||n||r?new Ji({verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){var t,i,n,r,a,s;const o=z(K(e)),c=null!==(t=o.apiKey)&&void 0!==t?t:null,u=null!==(i=o.oobCode)&&void 0!==i?i:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=o.mode)&&void 0!==n?n:null);Ot(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(r=o.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(a=o.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(s=o.tenantId)&&void 0!==s?s:null}static parseLink(e){const t=function(e){const t=z(K(e)).link,i=t?z(K(t)).deep_link_id:null,n=z(K(e)).deep_link_id;return(n?z(K(n)).link:null)||n||i||t||e}(e);try{return new Xi(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zi{constructor(){this.providerId=Zi.PROVIDER_ID}static credential(e,t){return Ki._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Xi.parseLink(t);return Ot(i,"argument-error"),Ki._fromEmailAndCode(e,i.code,i.tenantId)}}Zi.PROVIDER_ID="password",Zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Qi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class tn extends en{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return Ot("providerId"in t&&"signInMethod"in t,"argument-error"),$i._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return Ot(e.idToken||e.accessToken,"argument-error"),$i._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return tn.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return tn.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:n,pendingToken:r,nonce:a,providerId:s}=e;if(!(i||n||t||r))return null;if(!s)return null;try{return new tn(s)._credential({idToken:t,accessToken:i,nonce:a,pendingToken:r})}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends en{constructor(){super("facebook.com")}static credential(e){return $i._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch(e){return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com",nn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn extends en{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $i._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return rn.credential(t,i)}catch(e){return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com",rn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class an extends en{constructor(){super("github.com")}static credential(e){return $i._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch(e){return null}}}an.GITHUB_SIGN_IN_METHOD="github.com",an.PROVIDER_ID="github.com";class sn extends ji{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return qi(e,this.buildRequest())}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,qi(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qi(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n,pendingToken:r}=t;return i&&n&&r&&i===n?new sn(i,r):null}static _create(e,t){return new sn(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Qi{constructor(e){Ot(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return on.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return on.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=sn.fromJSON(e);return Ot(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return sn._create(i,t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends en{constructor(){super("twitter.com")}static credential(e,t){return $i._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return cn.credential(t,i)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function un(e,t){return Kt(e,"POST","/v1/accounts:signUp",Wt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn.TWITTER_SIGN_IN_METHOD="twitter.com",cn.PROVIDER_ID="twitter.com";class ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,n=!1){const r=await ai._fromIdTokenResponse(e,i,n),a=dn(i);return new ln({user:r,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const n=dn(i);return new ln({user:e,providerId:n,_tokenResponse:i,operationType:t})}}function dn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn extends U{constructor(e,t,i,n){var r;super(t.code,t.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,hn.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,n){return new hn(e,t,i,n)}}function fn(e,t,i,n){return("reauthenticate"===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e)).catch((i=>{if("auth/multi-factor-auth-required"===i.code)throw hn._fromErrorAndOperation(e,i,t,n);throw i}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(e,t){const i=J(e);await vn(!0,i,t);const{providerUserInfo:n}=await async function(e,t){return Gt(e,"POST","/v1/accounts:update",t)}(i.auth,{idToken:await i.getIdToken(),deleteProvider:[t]}),r=pn(n||[]);return i.providerData=i.providerData.filter((e=>r.has(e.providerId))),r.has("phone")||(i.phoneNumber=null),await i.auth._persistUserIfCurrent(i),i}async function gn(e,t,i=!1){const n=await Qt(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return ln._forOperation(e,"link",n)}async function vn(e,t,i){await ii(t);const n=!1===e?"provider-already-linked":"no-such-provider";Ot(pn(t.providerData).has(i)===e,t.auth,n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,t,i=!1){const{auth:n}=e,r="reauthenticate";try{const a=await Qt(e,fn(n,r,t,e),i);Ot(a.idToken,n,"internal-error");const s=Zt(a.idToken);Ot(s,n,"internal-error");const{sub:o}=s;return Ot(e.uid===o,n,"user-mismatch"),ln._forOperation(e,r,a)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Tt(n,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(e,t,i=!1){const n="signIn",r=await fn(e,n,t),a=await ln._fromIdTokenResponse(e,n,r);return i||await e._updateCurrentUser(a.user),a}async function wn(e,t){return yn(Di(e),t)}async function _n(e,t){const i=J(e);return await vn(!1,i,t.providerId),gn(i,t)}async function In(e,t){return bn(J(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function En(e,t){const i=Di(e),n=await async function(e,t){return Kt(e,"POST","/v1/accounts:signInWithCustomToken",Wt(e,t))}(i,{token:t,returnSecureToken:!0}),r=await ln._fromIdTokenResponse(i,"signIn",n);return await i._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Sn._fromServerResponse(e,t):"totpInfo"in t?Cn._fromServerResponse(e,t):Tt(e,"internal-error")}}class Sn extends kn{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Sn(t)}}class Cn extends kn{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Cn(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(e,t,i){var n;Ot((null===(n=i.url)||void 0===n?void 0:n.length)>0,e,"invalid-continue-uri"),Ot(void 0===i.dynamicLinkDomain||i.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=i.url,t.dynamicLinkDomain=i.dynamicLinkDomain,t.canHandleCodeInApp=i.handleCodeInApp,i.iOS&&(Ot(i.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=i.iOS.bundleId),i.android&&(Ot(i.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=i.android.installApp,t.androidMinimumVersionCode=i.android.minimumVersion,t.androidPackageName=i.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(e,t){await async function(e,t){return Gt(e,"POST","/v1/accounts:update",Wt(e,t))}(J(e),{oobCode:t})}async function Pn(e,t){const i=J(e),n=await Bi(i,{oobCode:t}),r=n.requestType;switch(Ot(r,i,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":Ot(n.newEmail,i,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":Ot(n.mfaInfo,i,"internal-error");default:Ot(n.email,i,"internal-error")}let a=null;return n.mfaInfo&&(a=kn._fromServerResponse(Di(i),n.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.newEmail:n.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.email:n.newEmail)||null,multiFactorInfo:a},operation:r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rn(e,t){const i={identifier:t,continueUri:Mt()?xt():"http://localhost"},{signinMethods:n}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return Gt(e,"POST","/v1/accounts:createAuthUri",Wt(e,t))}(J(e),i);return n||[]}async function Nn(e,t){const i=J(e),n={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&Tn(i.auth,n,t);const{email:r}=await async function(e,t){return Wi(e,t)}(i.auth,n);r!==e.email&&await e.reload()}async function On(e,t,i){const n=J(e),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};i&&Tn(n.auth,r,i);const{email:a}=await async function(e,t){return Wi(e,t)}(n.auth,r);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ln(e,{displayName:t,photoURL:i}){if(void 0===t&&void 0===i)return;const n=J(e),r={idToken:await n.getIdToken(),displayName:t,photoUrl:i,returnSecureToken:!0},a=await Qt(n,async function(e,t){return Gt(e,"POST","/v1/accounts:update",t)}(n.auth,r));n.displayName=a.displayName||null,n.photoURL=a.photoUrl||null;const s=n.providerData.find((({providerId:e})=>"password"===e));s&&(s.displayName=n.displayName,s.photoURL=n.photoURL),await n._updateTokensIfNecessary(a)}async function Dn(e,t,i){const{auth:n}=e,r={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(r.email=t),i&&(r.password=i);const a=await Qt(e,Hi(n,r));await e._updateTokensIfNecessary(a,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class Mn extends xn{constructor(e,t,i,n){super(e,t,i),this.username=n}}class Un extends xn{constructor(e,t){super(e,"facebook.com",t)}}class Fn extends Mn{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class jn extends xn{constructor(e,t){super(e,"google.com",t)}}class Bn extends Mn{constructor(e,t,i){super(e,"twitter.com",t,i)}}function Hn(e){const{user:t,_tokenResponse:i}=e;return t.isAnonymous&&!i?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,i;if(!e)return null;const{providerId:n}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},a=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!n&&(null==e?void 0:e.idToken)){const n=null===(i=null===(t=Zt(e.idToken))||void 0===t?void 0:t.firebase)||void 0===i?void 0:i.sign_in_provider;if(n)return new xn(a,"anonymous"!==n&&"custom"!==n?n:null)}if(!n)return null;switch(n){case"facebook.com":return new Un(a,r);case"github.com":return new Fn(a,r);case"google.com":return new jn(a,r);case"twitter.com":return new Bn(a,r,e.screenName||null);case"custom":case"anonymous":return new xn(a,null);default:return new xn(a,n,r)}}(i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t,i){this.type=e,this.credential=t,this.auth=i}static _fromIdtoken(e,t){return new Vn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Vn("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Vn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(i=e.multiFactorSession)||void 0===i?void 0:i.idToken)return Vn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=Di(e),n=t.customData._serverResponse,r=(n.mfaInfo||[]).map((e=>kn._fromServerResponse(i,e)));Ot(n.mfaPendingCredential,i,"internal-error");const a=Vn._fromMfaPendingCredential(n.mfaPendingCredential);return new Wn(a,r,(async e=>{const r=await e._process(i,a);delete n.mfaInfo,delete n.mfaPendingCredential;const s=Object.assign(Object.assign({},n),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await ln._fromIdTokenResponse(i,t.operationType,s);return await i._updateCurrentUser(e.user),e;case"reauthenticate":return Ot(t.user,i,"internal-error"),ln._forOperation(t.user,t.operationType,s);default:Tt(i,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}class Gn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>kn._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Gn(e)}async getSession(){return Vn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const i=e,n=await this.getSession(),r=await Qt(this.user,i._process(this.user.auth,n,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,i=await this.user.getIdToken();try{const e=await Qt(this.user,(n=this.user.auth,r={idToken:i,mfaEnrollmentId:t},Gt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Wt(n,r))));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(e){throw e}var n,r}}const zn=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Kn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=N();return pi(e)||wi(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Ii(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),n=this.localCache[t];i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,i)=>{this.notifyListeners(e,i)}));const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(i);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const n=()=>{const e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},r=this.storage.getItem(i);x()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qn.type="LOCAL";const $n=qn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Kn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yn.type="SESSION";const Jn=Yn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const i=new Xn(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:n,data:r}=t.data,a=this.handlersMap[n];if(!(null==a?void 0:a.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:n});const s=Array.from(a).map((async e=>e(t.origin,r))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:i,eventType:n,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zn(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn.receivers=[];class Qn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,a;return new Promise(((s,o)=>{const c=Zn("",20);n.port1.start();const u=setTimeout((()=>{o(new Error("unsupported_event"))}),i);a={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),r=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(t.data.response);break;default:clearTimeout(u),clearTimeout(r),o(new Error("invalid_response"))}}},this.handlers.add(a),n.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[n.port2])})).finally((()=>{a&&this.removeMessageHandler(a)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tr(){return void 0!==er().WorkerGlobalScope&&"function"==typeof er().importScripts}class ir{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function nr(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function rr(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,i)=>{e.addEventListener("error",(()=>{i(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){i(e)}})),e.addEventListener("success",(async()=>{const i=e.result;i.objectStoreNames.contains("firebaseLocalStorage")?t(i):(i.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new ir(e).toPromise()}(),t(await rr()))}))}))}async function ar(e,t,i){const n=nr(e,!0).put({fbase_key:t,value:i});return new ir(n).toPromise()}function sr(e,t){const i=nr(e,!0).delete(t);return new ir(i).toPromise()}class or{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await rr()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xn._getInstance(tr()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Qn(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rr();return await ar(e,"__sak","1"),await sr(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((i=>ar(i,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const i=nr(e,!1).get(t),n=await new ir(i).toPromise();return void 0===n?null:n.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>sr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=nr(e,!1).getAll();return new ir(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],i=new Set;for(const{fbase_key:n,value:r}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(const e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}or.type="LOCAL";const cr=or;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new lr(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||1e12;null===(t=this._widgets.get(i))||void 0===t||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||1e12;return(null===(t=this._widgets.get(i))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const i=e||1e12;return null===(t=this._widgets.get(i))||void 0===t||t.execute(),""}}class lr{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const n="string"==typeof e?document.getElementById(e):e;Ot(n,"argument-error",{appName:t}),this.container=n,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],i="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<e;n++)t.push(i.charAt(Math.floor(Math.random()*i.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const dr=Pi("rcb"),hr=new Ft(3e4,6e4);class fr{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=er().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return Ot(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Si(er().grecaptcha)?Promise.resolve(er().grecaptcha):new Promise(((i,n)=>{const r=er().setTimeout((()=>{n(At(e,"network-request-failed"))}),hr.get());er()[dr]=()=>{er().clearTimeout(r),delete er()[dr];const a=er().grecaptcha;if(!a||!Si(a))return void n(At(e,"internal-error"));const s=a.render;a.render=(e,t)=>{const i=s(e,t);return this.counter++,i},this.hostLanguage=t,i(a)};Ai(`https://www.google.com/recaptcha/api.js??${G({onload:dr,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(r),n(At(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=er().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class pr{async load(e){return new ur(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr={theme:"light",type:"image"};class gr{constructor(e,t=Object.assign({},mr),i){this.parameters=t,this.type="recaptcha",this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Di(i),this.isInvisible="invisible"===this.parameters.size,Ot("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const n="string"==typeof e?document.getElementById(e):e;Ot(n,this.auth,"argument-error"),this.container=n,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new pr:new fr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise((i=>{const n=e=>{e&&(this.tokenChangeListeners.delete(n),i(e))};this.tokenChangeListeners.add(n),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){Ot(!this.parameters.sitekey,this.auth,"argument-error"),Ot(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),Ot("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const i=er()[e];"function"==typeof i&&i(t)}}}assertNotDestroyed(){Ot(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){Ot(Mt()&&!tr(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await async function(e){return(await Gt(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);Ot(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return Ot(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}class vr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Ji._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function br(e,t,i){var n;const r=await i.verify();try{let a;if(Ot("string"==typeof r,e,"argument-error"),Ot("recaptcha"===i.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){const t=a.session;if("phoneNumber"in a){Ot("enroll"===t.type,e,"internal-error");const i=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Gt(e,"POST","/v2/accounts/mfaEnrollment:start",Wt(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:r}});return i.phoneSessionInfo.sessionInfo}{Ot("signin"===t.type,e,"internal-error");const i=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;Ot(i,e,"missing-multi-factor-info");const s=await function(e,t){return Gt(e,"POST","/v2/accounts/mfaSignIn:start",Wt(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Gt(e,"POST","/v1/accounts:sendVerificationCode",Wt(e,t))}(e,{phoneNumber:a.phoneNumber,recaptchaToken:r});return t}}finally{i._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr{constructor(e){this.providerId=yr.PROVIDER_ID,this.auth=Di(e)}verifyPhoneNumber(e,t){return br(this.auth,e,J(t))}static credential(e,t){return Ji._fromVerification(e,t)}static credentialFromResult(e){const t=e;return yr.credentialFromTaggedObject(t)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?Ji._fromTokenResponse(t,i):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wr(e,t){return t?oi(t):(Ot(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yr.PROVIDER_ID="phone",yr.PHONE_SIGN_IN_METHOD="phone";class _r extends ji{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ir(e){return yn(e.auth,new _r(e),e.bypassAuthState)}function Er(e){const{auth:t,user:i}=e;return Ot(i,t,"internal-error"),bn(i,new _r(e),e.bypassAuthState)}async function kr(e){const{auth:t,user:i}=e;return Ot(i,t,"internal-error"),gn(i,new _r(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t,i,n,r=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:n,tenantId:r,error:a,type:s}=e;if(a)return void this.reject(a);const o={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ir;case"linkViaPopup":case"linkViaRedirect":return kr;case"reauthViaPopup":case"reauthViaRedirect":return Er;default:Tt(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Ft(2e3,1e4);class Tr extends Sr{constructor(e,t,i,n,r){super(e,t,n,r),this.provider=i,this.authWindow=null,this.pollId=null,Tr.currentPopupAction&&Tr.currentPopupAction.cancel(),Tr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ot(e,this.auth,"internal-error"),e}async onExecution(){Dt(1===this.filter.length,"Popup operations only handle one event");const e=Zn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(At(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Cr.get())};e()}}Tr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ar=new Map;class Pr extends Sr{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ar.get(this.auth._key());if(!e){try{const t=await async function(e,t){const i=Lr(t),n=Or(e);if(!await n._isAvailable())return!1;const r="true"===await n._get(i);return await n._remove(i),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ar.set(this.auth._key(),e)}return this.bypassAuthState||Ar.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Rr(e,t){return Or(e)._set(Lr(t),"true")}function Nr(e,t){Ar.set(e._key(),t)}function Or(e){return oi(e._redirectPersistence)}function Lr(e){return li("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(e,t,i){return async function(e,t,i){const n=Di(e);Rt(e,t,Qi),await n._initializationPromise;const r=wr(n,i);return await Rr(r,n),r._openRedirect(n,t,"signInViaRedirect")}(e,t,i)}function xr(e,t,i){return async function(e,t,i){const n=J(e);Rt(n.auth,t,Qi),await n.auth._initializationPromise;const r=wr(n.auth,i);await Rr(r,n.auth);const a=await Fr(n);return r._openRedirect(n.auth,t,"reauthViaRedirect",a)}(e,t,i)}function Mr(e,t,i){return async function(e,t,i){const n=J(e);Rt(n.auth,t,Qi),await n.auth._initializationPromise;const r=wr(n.auth,i);await vn(!1,n,t.providerId),await Rr(r,n.auth);const a=await Fr(n);return r._openRedirect(n.auth,t,"linkViaRedirect",a)}(e,t,i)}async function Ur(e,t,i=!1){const n=Di(e),r=wr(n,t),a=new Pr(n,r,i),s=await a.execute();return s&&!i&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,t)),s}async function Fr(e){const t=Zn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Hr(e)){const n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";t.onError(At(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Br(e))}saveEventToCache(e){this.cachedEventUids.add(Br(e)),this.lastProcessedEventTime=Date.now()}}function Br(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Hr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function Vr(e,t={}){return Gt(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gr=/^https?/;function zr(e){const t=xt(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!Gr.test(i))return!1;if(Wr.test(e))return n===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Ft(3e4,6e4);function qr(){const e=er().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let $r=null;function Yr(e){return $r=$r||function(e){return new Promise(((t,i)=>{var n,r,a;function s(){qr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{qr(),i(At(e,"network-request-failed"))},timeout:Kr.get()})}if(null===(r=null===(n=er().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=er().gapi)||void 0===a?void 0:a.load)){const t=Pi("iframefcb");return er()[t]=()=>{gapi.load?s():i(At(e,"network-request-failed"))},Ai(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>i(e)))}s()}})).catch((e=>{throw $r=null,e}))}(e),$r}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new Ft(5e3,15e3),Xr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qr(e){const t=e.config;Ot(t.authDomain,e,"auth-domain-config-required");const i=t.emulator?jt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:He},r=Zr.get(e.config.apiHost);r&&(n.eid=r);const a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),`${i}?${G(n).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ea={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ta{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ia(e,t,i,n=500,r=600){const a=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const c=Object.assign(Object.assign({},ea),{width:n.toString(),height:r.toString(),top:a,left:s}),u=N().toLowerCase();i&&(o=mi(u)?"_blank":i),fi(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,i])=>`${e}${t}=${i},`),"");if(function(e=N()){var t;return wi(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==o)return function(e,t){const i=document.createElement("a");i.href=e,i.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",o),new ta(null);const d=window.open(t||"",o,l);Ot(d,e,"popup-blocked");try{d.focus()}catch(e){}return new ta(d)}const na=encodeURIComponent("fac");async function ra(e,t,i,n,r,a){Ot(e.config.authDomain,e,"auth-domain-config-required"),Ot(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:He,eventId:r};if(t instanceof Qi){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",H(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))s[e]=t}if(t instanceof en){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const o=s;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];const c=await e._getAppCheckToken(),u=c?`#${na}=${encodeURIComponent(c)}`:"";return`${function({config:e}){return e.emulator?jt(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${G(o).slice(1)}${u}`}const aa=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jn,this._completeRedirectFn=Ur,this._overrideRedirectResult=Nr}async _openPopup(e,t,i,n){var r;Dt(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return ia(e,await ra(e,t,i,xt(),n),Zn())}async _openRedirect(e,t,i,n){await this._originValidation(e);return function(e){er().location.href=e}(await ra(e,t,i,xt(),n)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(Dt(i,"If manager is not set, promise should be"),i)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch((()=>{delete this.eventManagers[t]})),i}async initAndGetManager(e){const t=await async function(e){const t=await Yr(e),i=er().gapi;return Ot(i,e,"internal-error"),t.open({where:document.body,url:Qr(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xr,dontclear:!0},(t=>new Promise((async(i,n)=>{await t.restyle({setHideOnLeave:!1});const r=At(e,"network-request-failed"),a=er().setTimeout((()=>{n(r)}),Jr.get());function s(){er().clearTimeout(a),i(t)}t.ping(s).then(s,(()=>{n(r)}))}))))}(e),i=new jr(e);return t.register("authEvent",(t=>{Ot(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:i.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(i=>{var n;const r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n.webStorageSupport;void 0!==r&&t(!!r),Tt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Vr(e);for(const e of t)try{if(zr(e))return}catch(e){}Tt(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ii()||pi()||wi()}};class sa{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return Lt("unexpected MultiFactorSessionType")}}}class oa extends sa{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new oa(e)}_finalizeEnroll(e,t,i){return function(e,t){return Gt(e,"POST","/v2/accounts/mfaEnrollment:finalize",Wt(e,t))}(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return Gt(e,"POST","/v2/accounts/mfaSignIn:finalize",Wt(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ca{constructor(){}static assertion(e){return oa._fromCredential(e)}}ca.FACTOR_ID="phone";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ua{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ot(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
P("authIdTokenMaxAge");var la;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function da(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */la="Browser",xe(new X("auth",((e,{options:t})=>{const i=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:s}=i.options;Ot(a&&!a.includes(":"),"invalid-api-key",{appName:i.name}),Ot(!(null==s?void 0:s.includes(":")),"argument-error",{appName:i.name});const o={apiKey:a,authDomain:s,clientPlatform:la,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ei(la)},c=new Li(i,n,r,o);return function(e,t){const i=(null==t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(oi);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,i)=>{e.getProvider("auth-internal").initialize()}))),xe(new X("auth-internal",(e=>{const t=Di(e.getProvider("auth").getImmediate());return new ua(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ke("@firebase/auth","0.23.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(la)),Ke("@firebase/auth","0.23.0","esm2017");async function ha(e,t,i){var n;const{BuildInfo:r}=da();Dt(t.sessionId,"AuthEvent did not contain a session ID");const a=await async function(e){const t=function(e){if(Dt(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),i=new Uint8Array(t);for(let t=0;t<e.length;t++)i[t]=e.charCodeAt(t);return i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),i=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(i)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),s={};return wi()?s.ibi=r.packageName:vi()?s.apn=r.packageName:Tt(e,"operation-not-supported-in-this-environment"),r.displayName&&(s.appDisplayName=r.displayName),s.sessionId=a,ra(e,i,t.type,void 0,null!==(n=t.eventId)&&void 0!==n?n:void 0,s)}function fa(e){const{cordova:t}=da();return new Promise((i=>{t.plugins.browsertab.isAvailable((n=>{let r=null;n?t.plugins.browsertab.openUrl(e):r=t.InAppBrowser.open(e,_i()?"_blank":"_system","location=yes"),i(r)}))}))}class pa extends jr{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}async function ma(e){const t=await ba()._get(ya(e));return t&&await ba()._remove(ya(e)),t}function ga(e,t){var i,n;const r=function(e){const t=wa(e),i=t.link?decodeURIComponent(t.link):void 0,n=wa(i).link,r=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return wa(r).link||r||n||i||e}(t);if(r.includes("/__/auth/callback")){const t=wa(r),a=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,s=null===(n=null===(i=null==a?void 0:a.code)||void 0===i?void 0:i.split("auth/"))||void 0===n?void 0:n[1],o=s?At(s):null;return o?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:o,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:r,postBody:null}}return null}function va(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<20;i++){const i=Math.floor(Math.random()*t.length);e.push(t.charAt(i))}return e.join("")}function ba(){return oi($n)}function ya(e){return li("authEvent",e.config.apiKey,e.name)}function wa(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...i]=e.split("?");return z(i.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=class{constructor(){this._redirectPersistence=Jn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ur,this._overrideRedirectResult=Nr}async _initialize(e){const t=e._key();let i=this.eventManagers.get(t);return i||(i=new pa(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){Tt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,i,n){!function(e){var t,i,n,r,a,s,o,c,u,l;const d=da();Ot("function"==typeof(null===(t=null==d?void 0:d.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),Ot(void 0!==(null===(i=null==d?void 0:d.BuildInfo)||void 0===i?void 0:i.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),Ot("function"==typeof(null===(a=null===(r=null===(n=null==d?void 0:d.cordova)||void 0===n?void 0:n.plugins)||void 0===r?void 0:r.browsertab)||void 0===a?void 0:a.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Ot("function"==typeof(null===(c=null===(o=null===(s=null==d?void 0:d.cordova)||void 0===s?void 0:s.plugins)||void 0===o?void 0:o.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Ot("function"==typeof(null===(l=null===(u=null==d?void 0:d.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),Ar.clear(),await this._originValidation(e);const a=function(e,t,i=null){return{type:t,eventId:i,urlResponse:null,sessionId:va(),postBody:null,tenantId:e.tenantId,error:At(e,"no-auth-event")}}(e,i,n);await function(e,t){return ba()._set(ya(e),t)}(e,a);const s=await ha(e,a,t);return async function(e,t,i){const{cordova:n}=da();let r=()=>{};try{await new Promise(((a,s)=>{let o=null;function c(){var e;a();const t=null===(e=n.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==i?void 0:i.close)&&i.close()}function u(){o||(o=window.setTimeout((()=>{s(At(e,"redirect-cancelled-by-user"))}),2e3))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),vi()&&document.addEventListener("visibilitychange",l,!1),r=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),o&&window.clearTimeout(o)}}))}finally{r()}}(e,r,await fa(s))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=da(),i={};wi()?i.iosBundleId=t.packageName:vi()?i.androidPackageName=t.packageName:Tt(e,"operation-not-supported-in-this-environment"),await Vr(e,i)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:i,handleOpenURL:n,BuildInfo:r}=da(),a=setTimeout((async()=>{await ma(e),t.onEvent(Ia())}),500),s=async i=>{clearTimeout(a);const n=await ma(e);let r=null;n&&(null==i?void 0:i.url)&&(r=ga(n,i.url)),t.onEvent(r||Ia())};void 0!==i&&"function"==typeof i.subscribe&&i.subscribe(null,s);const o=n,c=`${r.packageName.toLowerCase()}://`;da().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&s({url:e}),"function"==typeof o)try{o(e)}catch(e){console.error(e)}}}};function Ia(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:At("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function ka(e=N()){return!("file:"!==Ea()&&"ionic:"!==Ea()&&"capacitor:"!==Ea()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Sa(e=N()){return x()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=N()){return/Edge\/\d+/.test(e)}(e)}function Ca(){try{const e=self.localStorage,t=Zn();if(e)return e.setItem(t,"1"),e.removeItem(t),!Sa()||M()}catch(e){return Ta()&&M()}return!1}function Ta(){return void 0!==e&&"WorkerGlobalScope"in e&&"importScripts"in e}function Aa(){return("http:"===Ea()||"https:"===Ea()||L()||ka())&&!(D()||O())&&Ca()&&!Ta()}function Pa(){return ka()&&"undefined"!=typeof document}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ra={LOCAL:"local",NONE:"none",SESSION:"session"},Na=Ot;async function Oa(e){await e._initializationPromise;const t=La(),i=li("persistence",e.config.apiKey,e.name);t&&t.setItem(i,e._getPersistence())}function La(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=Ot;class xa{constructor(){this.browserResolver=oi(aa),this.cordovaResolver=oi(_a),this.underlyingResolver=null,this._redirectPersistence=Jn,this._completeRedirectFn=Ur,this._overrideRedirectResult=Nr}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,i,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,n)}async _openRedirect(e,t,i,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,n)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Pa()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Da(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!Pa()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(e){return e.unwrap()}function Ua(e,t){var i;const n=null===(i=t.customData)||void 0===i?void 0:i._tokenResponse;if("auth/multi-factor-auth-required"===(null==t?void 0:t.code)){t.resolver=new Ha(e,function(e,t){var i;const n=J(e),r=t;return Ot(t.customData.operationType,n,"argument-error"),Ot(null===(i=r.customData._serverResponse)||void 0===i?void 0:i.mfaPendingCredential,n,"argument-error"),Wn._fromError(n,r)}(e,t))}else if(n){const e=Fa(t),i=t;e&&(i.credential=e,i.tenantId=n.tenantId||void 0,i.email=n.email||void 0,i.phoneNumber=n.phoneNumber||void 0)}}function Fa(e){const{_tokenResponse:t}=e instanceof U?e.customData:e;if(!t)return null;if(!(e instanceof U)&&"temporaryProof"in t&&"phoneNumber"in t)return yr.credentialFromResult(e);const i=t.providerId;if(!i||i===ft)return null;let n;switch(i){case ht:n=rn;break;case lt:n=nn;break;case dt:n=an;break;case pt:n=cn;break;default:const{oauthIdToken:e,oauthAccessToken:r,oauthTokenSecret:a,pendingToken:s,nonce:o}=t;return r||a||e||s?s?i.startsWith("saml.")?sn._create(i,s):$i._fromParams({providerId:i,signInMethod:i,pendingToken:s,idToken:e,accessToken:r}):new tn(i).credential({idToken:e,accessToken:r,rawNonce:o}):null}return e instanceof U?n.credentialFromError(e):n.credentialFromResult(e)}function ja(e,t){return t.catch((t=>{throw t instanceof U&&Ua(e,t),t})).then((e=>{const t=e.operationType,i=e.user;return{operationType:t,credential:(n=e,Fa(n)),additionalUserInfo:Hn(e),user:Va.getOrCreate(i)};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var n}))}async function Ba(e,t){const i=await t;return{verificationId:i.verificationId,confirm:t=>ja(e,i.confirm(t))}}class Ha{constructor(e,t){this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return ja(Ma(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this._delegate=e,this.multiFactor=function(e){const t=J(e);return zn.has(t)||zn.set(t,Gn._fromUser(t)),zn.get(t)}(e)}static getOrCreate(e){return Va.USER_MAP.has(e)||Va.USER_MAP.set(e,new Va(e)),Va.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return ja(this.auth,_n(this._delegate,e))}async linkWithPhoneNumber(e,t){return Ba(this.auth,async function(e,t,i){const n=J(e);await vn(!1,n,"phone");const r=await br(n.auth,t,J(i));return new vr(r,(e=>_n(n,e)))}(this._delegate,e,t))}async linkWithPopup(e){return ja(this.auth,async function(e,t,i){const n=J(e);Rt(n.auth,t,Qi);const r=wr(n.auth,i);return new Tr(n.auth,"linkViaPopup",t,r,n).executeNotNull()}(this._delegate,e,xa))}async linkWithRedirect(e){return await Oa(Di(this.auth)),Mr(this._delegate,e,xa)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return ja(this.auth,In(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Ba(this.auth,async function(e,t,i){const n=J(e),r=await br(n.auth,t,J(i));return new vr(r,(e=>In(n,e)))}(this._delegate,e,t))}reauthenticateWithPopup(e){return ja(this.auth,async function(e,t,i){const n=J(e);Rt(n.auth,t,Qi);const r=wr(n.auth,i);return new Tr(n.auth,"reauthViaPopup",t,r,n).executeNotNull()}(this._delegate,e,xa))}async reauthenticateWithRedirect(e){return await Oa(Di(this.auth)),xr(this._delegate,e,xa)}sendEmailVerification(e){return Nn(this._delegate,e)}async unlink(e){return await mn(this._delegate,e),this}updateEmail(e){return function(e,t){return Dn(J(e),t,null)}(this._delegate,e)}updatePassword(e){return function(e,t){return Dn(J(e),null,t)}(this._delegate,e)}updatePhoneNumber(e){return async function(e,t){await gn(J(e),t)}(this._delegate,e)}updateProfile(e){return Ln(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return On(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Va.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wa=Ot;class Ga{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:i}=e.options;Wa(i,"invalid-api-key",{appName:e.name}),Wa(i,"invalid-api-key",{appName:e.name});const n="undefined"!=typeof window?xa:void 0;this._delegate=t.initialize({options:{persistence:Ka(i,e.name),popupRedirectResolver:n}}),this._delegate._updateErrorMap(It),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Va.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Mi(this._delegate,e,t)}applyActionCode(e){return An(this._delegate,e)}checkActionCode(e){return Pn(this._delegate,e)}confirmPasswordReset(e,t){return async function(e,t,i){await Bi(J(e),{oobCode:t,newPassword:i})}(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return ja(this._delegate,async function(e,t,i){var n;const r=Di(e),a={returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"};let s;if(null===(n=r._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){const e=await Ni(r,a,"signUpPassword");s=un(r,e)}else s=un(r,a).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Ni(r,a,"signUpPassword");return un(r,e)}return Promise.reject(e)}));const o=await s.catch((e=>Promise.reject(e))),c=await ln._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Rn(this._delegate,e)}isSignInWithEmailLink(e){return function(e,t){const i=Xi.parseLink(t);return"EMAIL_SIGNIN"===(null==i?void 0:i.operation)}(this._delegate,e)}async getRedirectResult(){Wa(Aa(),this._delegate,"operation-not-supported-in-this-environment");const e=await async function(e,t){return await Di(e)._initializationPromise,Ur(e,t,!1)}(this._delegate,xa);return e?ja(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){!function(e,t){Di(e)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,t,i){const{next:n,error:r,complete:a}=za(e,t,i);return this._delegate.onAuthStateChanged(n,r,a)}onIdTokenChanged(e,t,i){const{next:n,error:r,complete:a}=za(e,t,i);return this._delegate.onIdTokenChanged(n,r,a)}sendSignInLinkToEmail(e,t){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t,i){var n;const r=Di(e),a={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function s(e,t){Ot(t.handleCodeInApp,r,"argument-error"),t&&Tn(r,e,t)}if(null===(n=r._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){const e=await Ni(r,a,"getOobCode",!0);s(e,i),await zi(r,e)}else s(a,i),await zi(r,a).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await Ni(r,a,"getOobCode",!0);s(e,i),await zi(r,e)}}))}(this._delegate,e,t)}sendPasswordResetEmail(e,t){return async function(e,t,i){var n;const r=Di(e),a={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};if(null===(n=r._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){const e=await Ni(r,a,"getOobCode",!0);i&&Tn(r,e,i),await Gi(r,e)}else i&&Tn(r,a,i),await Gi(r,a).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const e=await Ni(r,a,"getOobCode",!0);i&&Tn(r,e,i),await Gi(r,e)}}))}(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){Na(Object.values(Ra).includes(t),e,"invalid-persistence-type"),D()?Na(t!==Ra.SESSION,e,"unsupported-persistence-type"):O()?Na(t===Ra.NONE,e,"unsupported-persistence-type"):Ta()?Na(t===Ra.NONE||t===Ra.LOCAL&&M(),e,"unsupported-persistence-type"):Na(t===Ra.NONE||Ca(),e,"unsupported-persistence-type")}(this._delegate,e),e){case Ra.SESSION:t=Jn;break;case Ra.LOCAL:t=await oi(cr)._isAvailable()?cr:$n;break;case Ra.NONE:t=ui;break;default:return Tt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return ja(this._delegate,async function(e){var t;const i=Di(e);if(await i._initializationPromise,null===(t=i.currentUser)||void 0===t?void 0:t.isAnonymous)return new ln({user:i.currentUser,providerId:null,operationType:"signIn"});const n=await un(i,{returnSecureToken:!0}),r=await ln._fromIdTokenResponse(i,"signIn",n,!0);return await i._updateCurrentUser(r.user),r}(this._delegate))}signInWithCredential(e){return ja(this._delegate,wn(this._delegate,e))}signInWithCustomToken(e){return ja(this._delegate,En(this._delegate,e))}signInWithEmailAndPassword(e,t){return ja(this._delegate,function(e,t,i){return wn(J(e),Zi.credential(t,i))}(this._delegate,e,t))}signInWithEmailLink(e,t){return ja(this._delegate,async function(e,t,i){const n=J(e),r=Zi.credentialWithLink(t,i||xt());return Ot(r._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),wn(n,r)}(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Ba(this._delegate,async function(e,t,i){const n=Di(e),r=await br(n,t,J(i));return new vr(r,(e=>wn(n,e)))}(this._delegate,e,t))}async signInWithPopup(e){return Wa(Aa(),this._delegate,"operation-not-supported-in-this-environment"),ja(this._delegate,async function(e,t,i){const n=Di(e);Rt(e,t,Qi);const r=wr(n,i);return new Tr(n,"signInViaPopup",t,r).executeNotNull()}(this._delegate,e,xa))}async signInWithRedirect(e){return Wa(Aa(),this._delegate,"operation-not-supported-in-this-environment"),await Oa(this._delegate),Dr(this._delegate,e,xa)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return async function(e,t){const{data:i}=await Pn(J(e),t);return i.email}(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function za(e,t,i){let n=e;"function"!=typeof e&&({next:n,error:t,complete:i}=e);const r=n;return{next:e=>r(e&&Va.getOrCreate(e)),error:t,complete:i}}function Ka(e,t){const i=function(e,t){const i=La();if(!i)return[];const n=li("persistence",e,t);switch(i.getItem(n)){case Ra.NONE:return[ui];case Ra.LOCAL:return[cr,Jn];case Ra.SESSION:return[Jn];default:return[]}}(e,t);if("undefined"==typeof self||i.includes(cr)||i.push(cr),"undefined"!=typeof window)for(const e of[$n,Jn])i.includes(e)||i.push(e);return i.includes(ui)||i.push(ui),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ga.Persistence=Ra;class qa{constructor(){this.providerId="phone",this._delegate=new yr(Ma(ct.auth()))}static credential(e,t){return yr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}qa.PHONE_SIGN_IN_METHOD=yr.PHONE_SIGN_IN_METHOD,qa.PROVIDER_ID=yr.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $a=Ot;class Ya{constructor(e,t,i=ct.app()){var n;$a(null===(n=i.options)||void 0===n?void 0:n.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new gr(e,t,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ja;(Ja=ct).INTERNAL.registerComponent(new X("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new Ga(t,i)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:mt,PASSWORD_RESET:gt,RECOVER_EMAIL:vt,REVERT_SECOND_FACTOR_ADDITION:bt,VERIFY_AND_CHANGE_EMAIL:yt,VERIFY_EMAIL:wt}},EmailAuthProvider:Zi,FacebookAuthProvider:nn,GithubAuthProvider:an,GoogleAuthProvider:rn,OAuthProvider:tn,SAMLAuthProvider:on,PhoneAuthProvider:qa,PhoneMultiFactorGenerator:ca,RecaptchaVerifier:Ya,TwitterAuthProvider:cn,Auth:Ga,AuthCredential:ji,Error:U}).setInstantiationMode("LAZY").setMultipleInstances(!1)),Ja.registerVersion("@firebase/auth-compat","0.4.0");var Xa={};!function(){var e=window.CustomEvent;function t(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function i(e){e&&e.blur&&e!==document.body&&e.blur()}function n(e,t){for(var i=0;i<e.length;++i)if(e[i]===t)return!0;return!1}function r(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function a(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,i=!1,n=function(){i?this.downgradeModal():this.maybeHideModal(),i=!1}.bind(this),r=function(r){if(r.target===e){var a="DOMNodeRemoved";i|=r.type.substr(0,a.length)===a,window.clearTimeout(t),t=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,r)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}e&&"object"!=typeof e||((e=function(e,t){t=t||{};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),i}).prototype=window.Event.prototype),a.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),s.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var i=document.createEvent("MouseEvents");i.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(i),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));t.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(t.join(", "))}i(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!s.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),i=function(e,i){return!(void 0===t[e]||t[e]===i)};if(t.opacity<1||i("zIndex","auto")||i("transform","none")||i("mixBlendMode","normal")||i("filter","none")||i("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,s.needsCentering(this.dialog_)?(s.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(t){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==t&&(this.dialog_.returnValue=t);var i=new e("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(i)}};var s={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,i=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,i)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var i=document.styleSheets[t],r=null;try{r=i.cssRules}catch(e){}if(r)for(var a=0;a<r.length;++a){var s=r[a],o=null;try{o=document.querySelectorAll(s.selectorText)}catch(e){}if(o&&n(o,e)){var c=s.style.getPropertyValue("top"),u=s.style.getPropertyValue("bottom");if(c&&"auto"!==c||u&&"auto"!==u)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!s.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new a(e)},registerDialog:function(e){e.showModal||s.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var i=[];t.forEach((function(e){for(var t,n=0;t=e.removedNodes[n];++n)t instanceof Element&&("dialog"===t.localName&&i.push(t),i=i.concat(t.querySelectorAll("dialog")))})),i.length&&e(i)})))}};if(s.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},s.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},s.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,i=0;e=this.pendingDialogStack[i];++i)e.updateZIndex(--t,--t),0===i&&(this.overlay.style.zIndex=--t);var n=this.pendingDialogStack[0];n?(n.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},s.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=t(e);){for(var i,n=0;i=this.pendingDialogStack[n];++n)if(i.dialog===e)return 0===n;e=e.parentElement}return!1},s.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&(e.preventDefault(),e.stopPropagation(),i(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():document.documentElement.focus()),!1}},s.DialogManager.prototype.handleKey_=function(t){if(this.forwardTab_=void 0,27===t.keyCode){t.preventDefault(),t.stopPropagation();var i=new e("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&n.dialog.dispatchEvent(i)&&n.dialog.close()}else 9===t.keyCode&&(this.forwardTab_=!t.shiftKey)},s.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},s.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},s.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},s.dm=new s.DialogManager,s.formSubmitter=null,s.useValue=null,void 0===window.HTMLDialogElement){var o=document.createElement("form");if(o.setAttribute("method","dialog"),"dialog"!==o.method){var c=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(c){var u=c.get;c.get=function(){return r(this)?"dialog":u.call(this)};var l=c.set;c.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):l.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",c)}}document.addEventListener("click",(function(e){if(s.formSubmitter=null,s.useValue=null,!e.defaultPrevented){var i=e.target;if(i&&r(i.form)){if(!("submit"===i.type&&["button","input"].indexOf(i.localName)>-1)){if("input"!==i.localName||"image"!==i.type)return;s.useValue=e.offsetX+","+e.offsetY}t(i)&&(s.formSubmitter=i)}}}),!1);var d=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!r(this))return d.call(this);var e=t(this);e&&e.close()},document.addEventListener("submit",(function(e){var i=e.target;if(r(i)){e.preventDefault();var n=t(i);if(n){var a=s.formSubmitter;a&&a.form===i?n.close(s.useValue||a.value):n.close(),s.formSubmitter=null}}}),!0)}s.forceRegisterDialog=s.forceRegisterDialog,s.registerDialog=s.registerDialog,"function"==typeof define&&"amd"in define?define((function(){return s})):"object"==typeof Xa?Xa=s:window.dialogPolyfill=s}();
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Za,Qa,es,ts,is={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};is=function(){var e=[],t=[],i="mdlComponentConfigInternal_";function n(t,i){for(var n=0;n<e.length;n++)if(e[n].className===t)return void 0!==i&&(e[n]=i),e[n];return!1}function r(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function a(e,t){return-1!==r(e).indexOf(t)}function s(e,t,i){if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:i});var n=document.createEvent("Events");return n.initEvent(e,t,i),n}function o(t,i){if(void 0===t&&void 0===i)for(var r=0;r<e.length;r++)o(e[r].className,e[r].cssClass);else{var a=t;if(void 0===i){var s=n(a);s&&(i=s.cssClass)}for(var u=document.querySelectorAll("."+i),l=0;l<u.length;l++)c(u[l],a)}}function c(o,c){if(!("object"==typeof o&&o instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var u=s("mdl-componentupgrading",!0,!0);if(o.dispatchEvent(u),!u.defaultPrevented){var l=r(o),d=[];if(c)a(o,c)||d.push(n(c));else{var h=o.classList;e.forEach((function(e){h.contains(e.cssClass)&&-1===d.indexOf(e)&&!a(o,e.className)&&d.push(e)}))}for(var f,p=0,m=d.length;p<m;p++){if(!(f=d[p]))throw new Error("Unable to find a registered component for the given class.");l.push(f.className),o.setAttribute("data-upgraded",l.join(","));var g=new f.classConstructor(o);g[i]=f,t.push(g);for(var v=0,b=f.callbacks.length;v<b;v++)f.callbacks[v](o);f.widget&&(o[f.className]=g);var y=s("mdl-componentupgraded",!0,!1);o.dispatchEvent(y)}}}function u(e){if(e){var n=t.indexOf(e);t.splice(n,1);var r=e.element_.getAttribute("data-upgraded").split(","),a=r.indexOf(e[i].classAsString);r.splice(a,1),e.element_.setAttribute("data-upgraded",r.join(","));var o=s("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(o)}}return{upgradeDom:o,upgradeElement:c,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var i,n=0,r=t.length;n<r;n++)(i=t[n])instanceof HTMLElement&&(c(i),i.children.length>0&&e(i.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)o(e[t].className)},registerUpgradedCallback:function(e,t){var i=n(e);i&&i.callbacks.push(t)},register:function(t){var r=!0;void 0===t.widget&&void 0===t.widget||(r=t.widget||t.widget);var a={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:r,callbacks:[]};if(e.forEach((function(e){if(e.cssClass===a.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===a.className)throw new Error("The provided className has already been registered")})),t.constructor.prototype.hasOwnProperty(i))throw new Error("MDL component classes must not have mdlComponentConfigInternal_ defined as a property.");n(t.classAsString,a)||e.push(a)},downgradeElements:function(e){var i=function(e){t.filter((function(t){return t.element_===e})).forEach(u)};if(e instanceof Array||e instanceof NodeList)for(var n=0;n<e.length;n++)i(e[n]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");i(e)}}}}(),is.ComponentConfigPublic,is.ComponentConfig,is.Component,is.upgradeDom=is.upgradeDom,is.upgradeElement=is.upgradeElement,is.upgradeElements=is.upgradeElements,is.upgradeAllRegistered=is.upgradeAllRegistered,is.registerUpgradedCallback=is.registerUpgradedCallback,is.register=is.register,is.downgradeElements=is.downgradeElements,window.componentHandler=is,window.componentHandler=is,window.addEventListener("load",(function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),is.upgradeAllRegistered()):(is.upgradeElement=function(){},is.register=function(){})})),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Za=function(e){this.element_=e,this.init()},window.MaterialButton=Za,Za.prototype.Constant_={},Za.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},Za.prototype.blurHandler_=function(e){e&&this.element_.blur()},Za.prototype.disable=function(){this.element_.disabled=!0},Za.prototype.disable=Za.prototype.disable,Za.prototype.enable=function(){this.element_.disabled=!1},Za.prototype.enable=Za.prototype.enable,Za.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},componentHandler.register({constructor:Za,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0}),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Qa=function(e){this.element_=e,this.init()},window.MaterialProgress=Qa,Qa.prototype.Constant_={},Qa.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},Qa.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},Qa.prototype.setProgress=Qa.prototype.setProgress,Qa.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},Qa.prototype.setBuffer=Qa.prototype.setBuffer,Qa.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,(e=document.createElement("div")).className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,(e=document.createElement("div")).className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:Qa,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0}),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
es=function(e){this.element_=e,this.init()},window.MaterialSpinner=es,es.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},es.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},es.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),i.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),r.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var a=[i,n,r],s=0;s<a.length;s++){var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),a[s].appendChild(o)}t.appendChild(i),t.appendChild(n),t.appendChild(r),this.element_.appendChild(t)},es.prototype.createLayer=es.prototype.createLayer,es.prototype.stop=function(){this.element_.classList.remove("is-active")},es.prototype.stop=es.prototype.stop,es.prototype.start=function(){this.element_.classList.add("is-active")},es.prototype.start=es.prototype.start,es.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:es,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0}),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ts=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()},window.MaterialTextfield=ts,ts.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},ts.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},ts.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault()},ts.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},ts.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},ts.prototype.onReset_=function(e){this.updateClasses_()},ts.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},ts.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},ts.prototype.checkDisabled=ts.prototype.checkDisabled,ts.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},ts.prototype.checkFocus=ts.prototype.checkFocus,ts.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},ts.prototype.checkValidity=ts.prototype.checkValidity,ts.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},ts.prototype.checkDirty=ts.prototype.checkDirty,ts.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},ts.prototype.disable=ts.prototype.disable,ts.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},ts.prototype.enable=ts.prototype.enable,ts.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},ts.prototype.change=ts.prototype.change,ts.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},componentHandler.register({constructor:ts,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0}),function(){(function(){var t,i,n="function"==typeof Object.create?Object.create:function(e){function t(){}return t.prototype=e,new t};if("function"==typeof Object.setPrototypeOf)i=Object.setPrototypeOf;else{var r;e:{var a={};try{a.__proto__={xb:!0},r=a.xb;break e}catch(Xe){}r=!1}i=r?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var s=i;function o(e,t){if(e.prototype=n(t.prototype),e.prototype.constructor=e,s)s(e,t);else for(var i in t)if("prototype"!=i)if(Object.defineProperties){var r=Object.getOwnPropertyDescriptor(t,i);r&&Object.defineProperty(e,i,r)}else e[i]=t[i];e.K=t.prototype}var c="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,i){e!=Array.prototype&&e!=Object.prototype&&(e[t]=i.value)},u="undefined"!=typeof window&&window===this?this:void 0!==e&&null!=e?e:this;function l(e,t){if(t){var i=u;e=e.split(".");for(var n=0;n<e.length-1;n++){var r=e[n];r in i||(i[r]={}),i=i[r]}(t=t(n=i[e=e[e.length-1]]))!=n&&null!=t&&c(i,e,{configurable:!0,writable:!0,value:t})}}l("Object.is",(function(e){return e||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}})),l("Array.prototype.includes",(function(e){return e||function(e,t){var i=this;i instanceof String&&(i=String(i));var n=i.length;for(0>(t=t||0)&&(t=Math.max(t+n,0));t<n;t++){var r=i[t];if(r===e||Object.is(r,e))return!0}return!1}}));var d=this;function h(e){return void 0!==e}function f(e){return"string"==typeof e}var p=/^[\w+/_-]+[=]{0,2}$/,m=null;function g(){}function v(e){e.W=void 0,e.Xa=function(){return e.W?e.W:e.W=new e}}function b(e){var t=typeof e;if("object"==t){if(!e)return"null";if(e instanceof Array)return"array";if(e instanceof Object)return t;var i=Object.prototype.toString.call(e);if("[object Window]"==i)return"object";if("[object Array]"==i||"number"==typeof e.length&&void 0!==e.splice&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("splice"))return"array";if("[object Function]"==i||void 0!==e.call&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("call"))return"function"}else if("function"==t&&void 0===e.call)return"object";return t}function y(e){return"array"==b(e)}function w(e){var t=b(e);return"array"==t||"object"==t&&"number"==typeof e.length}function _(e){return"function"==b(e)}function I(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var E="closure_uid_"+(1e9*Math.random()>>>0),k=0;function S(e,t,i){return e.call.apply(e.bind,arguments)}function C(e,t,i){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function T(e,t,i){return(T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?S:C).apply(null,arguments)}function A(e,t){var i=Array.prototype.slice.call(arguments,1);return function(){var t=i.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function P(e,t){for(var i in t)e[i]=t[i]}var R,N=Date.now||function(){return+new Date};function O(e,t){e=e.split(".");var i,n=d;e[0]in n||void 0===n.execScript||n.execScript("var "+e[0]);for(;e.length&&(i=e.shift());)!e.length&&h(t)?n[i]=t:n=n[i]&&n[i]!==Object.prototype[i]?n[i]:n[i]={}}function L(e,t){function i(){}i.prototype=t.prototype,e.K=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.vc=function(e,i,n){for(var r=Array(arguments.length-2),a=2;a<arguments.length;a++)r[a-2]=arguments[a];return t.prototype[i].apply(e,r)}}function D(e){if(Error.captureStackTrace)Error.captureStackTrace(this,D);else{var t=Error().stack;t&&(this.stack=t)}e&&(this.message=String(e))}function x(e,t){for(var i="",n=(e=e.split("%s")).length-1,r=0;r<n;r++)i+=e[r]+(r<t.length?t[r]:"%s");D.call(this,i+e[n])}function M(e,t){throw new x("Failure"+(e?": "+e:""),Array.prototype.slice.call(arguments,1))}L(D,Error),D.prototype.name="CustomError",L(x,D),x.prototype.name="AssertionError";var U=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(f(e))return f(t)&&1==t.length?e.indexOf(t,0):-1;for(var i=0;i<e.length;i++)if(i in e&&e[i]===t)return i;return-1},F=Array.prototype.forEach?function(e,t,i){Array.prototype.forEach.call(e,t,i)}:function(e,t,i){for(var n=e.length,r=f(e)?e.split(""):e,a=0;a<n;a++)a in r&&t.call(i,r[a],a,e)};var j=Array.prototype.filter?function(e,t){return Array.prototype.filter.call(e,t,void 0)}:function(e,t){for(var i=e.length,n=[],r=0,a=f(e)?e.split(""):e,s=0;s<i;s++)if(s in a){var o=a[s];t.call(void 0,o,s,e)&&(n[r++]=o)}return n},B=Array.prototype.map?function(e,t){return Array.prototype.map.call(e,t,void 0)}:function(e,t){for(var i=e.length,n=Array(i),r=f(e)?e.split(""):e,a=0;a<i;a++)a in r&&(n[a]=t.call(void 0,r[a],a,e));return n},H=Array.prototype.some?function(e,t){return Array.prototype.some.call(e,t,void 0)}:function(e,t){for(var i=e.length,n=f(e)?e.split(""):e,r=0;r<i;r++)if(r in n&&t.call(void 0,n[r],r,e))return!0;return!1};function V(e,t){return 0<=U(e,t)}function W(e,t){var i;return(i=0<=(t=U(e,t)))&&G(e,t),i}function G(e,t){return 1==Array.prototype.splice.call(e,t,1).length}function z(e,t){!function(e,t){for(var i=f(e)?e.split(""):e,n=e.length-1;0<=n;--n)n in i&&t.call(void 0,i[n],n,e)}(e,(function(i,n){t.call(void 0,i,n,e)&&G(e,n)&&0}))}function K(e){return Array.prototype.concat.apply([],arguments)}function q(e){var t=e.length;if(0<t){for(var i=Array(t),n=0;n<t;n++)i[n]=e[n];return i}return[]}function $(e,t,i){return 2>=arguments.length?Array.prototype.slice.call(e,t):Array.prototype.slice.call(e,t,i)}var Y=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]},J=/&/g,X=/</g,Z=/>/g,Q=/"/g,ee=/'/g,te=/\x00/g,ie=/[\x00&<>"']/;function ne(e,t){return e<t?-1:e>t?1:0}function re(e){return ie.test(e)&&(-1!=e.indexOf("&")&&(e=e.replace(J,"&amp;")),-1!=e.indexOf("<")&&(e=e.replace(X,"&lt;")),-1!=e.indexOf(">")&&(e=e.replace(Z,"&gt;")),-1!=e.indexOf('"')&&(e=e.replace(Q,"&quot;")),-1!=e.indexOf("'")&&(e=e.replace(ee,"&#39;")),-1!=e.indexOf("\0")&&(e=e.replace(te,"&#0;"))),e}function ae(e,t,i){for(var n in e)t.call(i,e[n],n,e)}function se(e){var t,i={};for(t in e)i[t]=e[t];return i}var oe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(e,t){for(var i,n,r=1;r<arguments.length;r++){for(i in n=arguments[r])e[i]=n[i];for(var a=0;a<oe.length;a++)i=oe[a],Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}}var ue="StopIteration"in d?d.StopIteration:{message:"StopIteration",stack:""};function le(){}function de(e){if(e instanceof le)return e;if("function"==typeof e.ha)return e.ha(!1);if(w(e)){var t=0,i=new le;return i.next=function(){for(;;){if(t>=e.length)throw ue;if(t in e)return e[t++];t++}},i}throw Error("Not implemented")}function he(e){if(w(e))return q(e);e=de(e);var t=[];return function(e,t){if(w(e))try{F(e,t,void 0)}catch(e){if(e!==ue)throw e}else{e=de(e);try{for(;;)t.call(void 0,e.next(),void 0,e)}catch(e){if(e!==ue)throw e}}}(e,(function(e){t.push(e)})),t}function fe(e,t){this.g={},this.a=[],this.j=this.h=0;var i=arguments.length;if(1<i){if(i%2)throw Error("Uneven number of arguments");for(var n=0;n<i;n+=2)this.set(arguments[n],arguments[n+1])}else if(e)if(e instanceof fe)for(i=e.ja(),n=0;n<i.length;n++)this.set(i[n],e.get(i[n]));else for(n in e)this.set(n,e[n])}function pe(e){if(e.h!=e.a.length){for(var t=0,i=0;t<e.a.length;){var n=e.a[t];me(e.g,n)&&(e.a[i++]=n),t++}e.a.length=i}if(e.h!=e.a.length){var r={};for(i=t=0;t<e.a.length;)me(r,n=e.a[t])||(e.a[i++]=n,r[n]=1),t++;e.a.length=i}}function me(e,t){return Object.prototype.hasOwnProperty.call(e,t)}le.prototype.next=function(){throw ue},le.prototype.ha=function(){return this},(t=fe.prototype).la=function(){pe(this);for(var e=[],t=0;t<this.a.length;t++)e.push(this.g[this.a[t]]);return e},t.ja=function(){return pe(this),this.a.concat()},t.clear=function(){this.g={},this.j=this.h=this.a.length=0},t.get=function(e,t){return me(this.g,e)?this.g[e]:t},t.set=function(e,t){me(this.g,e)||(this.h++,this.a.push(e),this.j++),this.g[e]=t},t.forEach=function(e,t){for(var i=this.ja(),n=0;n<i.length;n++){var r=i[n],a=this.get(r);e.call(t,a,r,this)}},t.ha=function(e){pe(this);var t=0,i=this.j,n=this,r=new le;return r.next=function(){if(i!=n.j)throw Error("The map has changed since the iterator was created");if(t>=n.a.length)throw ue;var r=n.a[t++];return e?r:n.g[r]},r};var ge=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ve(e,t,i,n){for(var r=i.length;0<=(t=e.indexOf(i,t))&&t<n;){var a=e.charCodeAt(t-1);if(!(38!=a&&63!=a||(a=e.charCodeAt(t+r))&&61!=a&&38!=a&&35!=a))return t;t+=r+1}return-1}var be=/#|$/;function ye(e,t){var i=e.search(be),n=ve(e,0,t,i);if(0>n)return null;var r=e.indexOf("&",n);return(0>r||r>i)&&(r=i),n+=t.length+1,decodeURIComponent(e.substr(n,r-n).replace(/\+/g," "))}var we=/[?&]($|#)/;function _e(e,t){var i;this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1,e instanceof _e?(this.i=h(t)?t:e.i,Ie(this,e.j),this.A=e.A,this.h=e.h,Ee(this,e.C),this.g=e.g,ke(this,Fe(e.a)),this.s=e.s):e&&(i=String(e).match(ge))?(this.i=!!t,Ie(this,i[1]||"",!0),this.A=Ce(i[2]||""),this.h=Ce(i[3]||"",!0),Ee(this,i[4]),this.g=Ce(i[5]||"",!0),ke(this,i[6]||"",!0),this.s=Ce(i[7]||"")):(this.i=!!t,this.a=new De(null,this.i))}function Ie(e,t,i){e.j=i?Ce(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ee(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.C=t}else e.C=null}function ke(e,t,i){t instanceof De?(e.a=t,function(e,t){t&&!e.j&&(xe(e),e.h=null,e.a.forEach((function(e,t){var i=t.toLowerCase();t!=i&&(Me(this,t),Me(this,i),0<e.length&&(this.h=null,this.a.set(je(this,i),q(e)),this.g+=e.length))}),e)),e.j=t}(e.a,e.i)):(i||(t=Te(t,Oe)),e.a=new De(t,e.i))}function Se(e){return e instanceof _e?new _e(e):new _e(e,void 0)}function Ce(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Te(e,t,i){return f(e)?(e=encodeURI(e).replace(t,Ae),i&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ae(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}_e.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Te(t,Pe,!0),":");var i=this.h;return(i||"file"==t)&&(e.push("//"),(t=this.A)&&e.push(Te(t,Pe,!0),"@"),e.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.C)&&e.push(":",String(i))),(i=this.g)&&(this.h&&"/"!=i.charAt(0)&&e.push("/"),e.push(Te(i,"/"==i.charAt(0)?Ne:Re,!0))),(i=this.a.toString())&&e.push("?",i),(i=this.s)&&e.push("#",Te(i,Le)),e.join("")};var Pe=/[#\/\?@]/g,Re=/[#\?:]/g,Ne=/[#\?]/g,Oe=/[#\?@]/g,Le=/#/g;function De(e,t){this.g=this.a=null,this.h=e||null,this.j=!!t}function xe(e){e.a||(e.a=new fe,e.g=0,e.h&&function(e,t){if(e){e=e.split("&");for(var i=0;i<e.length;i++){var n=e[i].indexOf("="),r=null;if(0<=n){var a=e[i].substring(0,n);r=e[i].substring(n+1)}else a=e[i];t(a,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.h,(function(t,i){e.add(decodeURIComponent(t.replace(/\+/g," ")),i)})))}function Me(e,t){xe(e),t=je(e,t),me(e.a.g,t)&&(e.h=null,e.g-=e.a.get(t).length,me((e=e.a).g,t)&&(delete e.g[t],e.h--,e.j++,e.a.length>2*e.h&&pe(e)))}function Ue(e,t){return xe(e),t=je(e,t),me(e.a.g,t)}function Fe(e){var t=new De;return t.h=e.h,e.a&&(t.a=new fe(e.a),t.g=e.g),t}function je(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Be(e){this.a=Se(e)}function He(e){return e.a.a.get(Ge.Pa)||null}function Ve(e,t){t?e.a.a.set(Ge.PROVIDER_ID,t):Me(e.a.a,Ge.PROVIDER_ID)}(t=De.prototype).add=function(e,t){xe(this),this.h=null,e=je(this,e);var i=this.a.get(e);return i||this.a.set(e,i=[]),i.push(t),this.g+=1,this},t.clear=function(){this.a=this.h=null,this.g=0},t.forEach=function(e,t){xe(this),this.a.forEach((function(i,n){F(i,(function(i){e.call(t,i,n,this)}),this)}),this)},t.ja=function(){xe(this);for(var e=this.a.la(),t=this.a.ja(),i=[],n=0;n<t.length;n++)for(var r=e[n],a=0;a<r.length;a++)i.push(t[n]);return i},t.la=function(e){xe(this);var t=[];if(f(e))Ue(this,e)&&(t=K(t,this.a.get(je(this,e))));else{e=this.a.la();for(var i=0;i<e.length;i++)t=K(t,e[i])}return t},t.set=function(e,t){return xe(this),this.h=null,Ue(this,e=je(this,e))&&(this.g-=this.a.get(e).length),this.a.set(e,[t]),this.g+=1,this},t.get=function(e,t){return e&&0<(e=this.la(e)).length?String(e[0]):t},t.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var e=[],t=this.a.ja(),i=0;i<t.length;i++){var n=t[i],r=encodeURIComponent(String(n));n=this.la(n);for(var a=0;a<n.length;a++){var s=r;""!==n[a]&&(s+="="+encodeURIComponent(String(n[a]))),e.push(s)}}return this.h=e.join("&")},Be.prototype.toString=function(){return this.a.toString()};var We,Ge={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"};e:{var ze=d.navigator;if(ze){var Ke=ze.userAgent;if(Ke){We=Ke;break e}}We=""}function qe(e){return-1!=We.indexOf(e)}function $e(){return(qe("Chrome")||qe("CriOS"))&&!qe("Edge")}function Ye(e){return Ye[" "](e),e}Ye[" "]=g;var Je,Xe,Ze=qe("Opera"),Qe=qe("Trident")||qe("MSIE"),et=qe("Edge"),tt=et||Qe,it=qe("Gecko")&&!(-1!=We.toLowerCase().indexOf("webkit")&&!qe("Edge"))&&!(qe("Trident")||qe("MSIE"))&&!qe("Edge"),nt=-1!=We.toLowerCase().indexOf("webkit")&&!qe("Edge"),rt=nt&&qe("Mobile"),at=qe("Macintosh");function st(){var e=d.document;return e?e.documentMode:void 0}e:{var ot="",ut=(Xe=We,it?/rv:([^\);]+)(\)|;)/.exec(Xe):et?/Edge\/([\d\.]+)/.exec(Xe):Qe?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Xe):nt?/WebKit\/(\S+)/.exec(Xe):Ze?/(?:Version)[ \/]?(\S+)/.exec(Xe):void 0);if(ut&&(ot=ut?ut[1]:""),Qe){var lt=st();if(null!=lt&&lt>parseFloat(ot)){Je=String(lt);break e}}Je=ot}var dt,ht={};function ft(e){return function(e,t){var i=ht;return Object.prototype.hasOwnProperty.call(i,e)?i[e]:i[e]=t(e)}(e,(function(){for(var t=0,i=Y(String(Je)).split("."),n=Y(String(e)).split("."),r=Math.max(i.length,n.length),a=0;0==t&&a<r;a++){var s=i[a]||"",o=n[a]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;t=ne(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||ne(0==s[2].length,0==o[2].length)||ne(s[2],o[2]),s=s[3],o=o[3]}while(0==t)}return 0<=t}))}var pt=d.document;function mt(e,t){this.a=e===vt&&t||"",this.g=gt}dt=pt&&Qe?st()||("CSS1Compat"==pt.compatMode?parseInt(Je,10):5):void 0,mt.prototype.ma=!0,mt.prototype.ka=function(){return this.a},mt.prototype.toString=function(){return"Const{"+this.a+"}"};var gt={},vt={};function bt(){this.a="",this.h=wt}function yt(e){return e instanceof bt&&e.constructor===bt&&e.h===wt?e.a:(M("expected object of type TrustedResourceUrl, got '"+e+"' of type "+b(e)),"type_error:TrustedResourceUrl")}bt.prototype.ma=!0,bt.prototype.ka=function(){return this.a.toString()},bt.prototype.g=function(){return 1},bt.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var wt={};function _t(){this.a="",this.h=Ct}function It(e){return e instanceof _t&&e.constructor===_t&&e.h===Ct?e.a:(M("expected object of type SafeUrl, got '"+e+"' of type "+b(e)),"type_error:SafeUrl")}_t.prototype.ma=!0,_t.prototype.ka=function(){return this.a.toString()},_t.prototype.g=function(){return 1},_t.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};var Et=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function kt(e){return e instanceof _t?e:(e="object"==typeof e&&e.ma?e.ka():String(e),Et.test(e)||(e="about:invalid#zClosurez"),Tt(e))}function St(e){return e instanceof _t?e:(e="object"==typeof e&&e.ma?e.ka():String(e),Et.test(e)||(e="about:invalid#zClosurez"),Tt(e))}var Ct={};function Tt(e){var t=new _t;return t.a=e,t}function At(){this.a="",this.g=Pt}Tt("about:blank"),At.prototype.ma=!0;var Pt={};function Rt(){this.a="",this.j=Ot,this.h=null}function Nt(e){return e instanceof Rt&&e.constructor===Rt&&e.j===Ot?e.a:(M("expected object of type SafeHtml, got '"+e+"' of type "+b(e)),"type_error:SafeHtml")}At.prototype.ka=function(){return this.a},At.prototype.toString=function(){return"SafeStyle{"+this.a+"}"},Rt.prototype.g=function(){return this.h},Rt.prototype.ma=!0,Rt.prototype.ka=function(){return this.a.toString()},Rt.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Ot={};function Lt(e,t){var i=new Rt;return i.a=e,i.h=t,i}Lt("<!DOCTYPE html>",0);var Dt=Lt("",0);Lt("<br>",0);var xt,Mt,Ut=(Mt=!1,function(){return Mt||(xt=function(){if("undefined"==typeof document)return!1;var e=document.createElement("div"),t=document.createElement("div");return t.appendChild(document.createElement("div")),e.appendChild(t),!!e.firstChild&&(t=e.firstChild.firstChild,e.innerHTML=Nt(Dt),!t.parentElement)}(),Mt=!0),xt});function Ft(e,t){t=t instanceof _t?t:St(t),e.assign(It(t))}function jt(e,t){this.a=h(e)?e:0,this.g=h(t)?t:0}function Bt(e,t){this.width=e,this.height=t}function Ht(e){return e?new Xt($t(e)):R||(R=new Xt)}function Vt(e,t){var i=t||document;return i.querySelectorAll&&i.querySelector?i.querySelectorAll("."+e):Gt(document,e,t)}function Wt(e,t){var i=t||document;if(i.getElementsByClassName)e=i.getElementsByClassName(e)[0];else{i=document;var n=t||i;e=n.querySelectorAll&&n.querySelector&&e?n.querySelector(e?"."+e:""):Gt(i,e,t)[0]||null}return e||null}function Gt(e,t,i){var n;if((e=i||e).querySelectorAll&&e.querySelector&&t)return e.querySelectorAll(t?"."+t:"");if(t&&e.getElementsByClassName){var r=e.getElementsByClassName(t);return r}if(r=e.getElementsByTagName("*"),t){var a={};for(i=n=0;e=r[i];i++){var s=e.className;"function"==typeof s.split&&V(s.split(/\s+/),t)&&(a[n++]=e)}return a.length=n,a}return r}jt.prototype.toString=function(){return"("+this.a+", "+this.g+")"},jt.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},jt.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},jt.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this},(t=Bt.prototype).toString=function(){return"("+this.width+" x "+this.height+")"},t.aspectRatio=function(){return this.width/this.height},t.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},t.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},t.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};var zt={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Kt(e){return e.scrollingElement?e.scrollingElement:(nt||"CSS1Compat"!=e.compatMode)&&e.body||e.documentElement}function qt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function $t(e){return 9==e.nodeType?e:e.ownerDocument||e.document}function Yt(e,t){if("textContent"in e)e.textContent=t;else if(3==e.nodeType)e.data=String(t);else if(e.firstChild&&3==e.firstChild.nodeType){for(;e.lastChild!=e.firstChild;)e.removeChild(e.lastChild);e.firstChild.data=String(t)}else{for(var i;i=e.firstChild;)e.removeChild(i);e.appendChild($t(e).createTextNode(String(t)))}}function Jt(e,t){return t?function(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}(e,(function(e){return!t||f(e.className)&&V(e.className.split(/\s+/),t)})):null}function Xt(e){this.a=e||d.document||document}Xt.prototype.N=function(){return f(void 0)?this.a.getElementById(void 0):void 0};var Zt={Fc:!0},Qt={Hc:!0},ei={Ec:!0},ti={Gc:!0};function ii(){throw Error("Do not instantiate directly")}function ni(e,t,i,n){if(e=e(t||ai,void 0,i),n=(n||Ht()).a.createElement("DIV"),(e=function(e){if(!I(e))return re(String(e));if(e instanceof ii){if(e.fa===Zt)return e.content;if(e.fa===ti)return re(e.content)}return M("Soy template output is unsafe for use as HTML: "+e),"zSoyz"}(e)).match(ri),e=Lt(e,null),Ut())for(;n.lastChild;)n.removeChild(n.lastChild);return n.innerHTML=Nt(e),1==n.childNodes.length&&(1==(e=n.firstChild).nodeType&&(n=e)),n}ii.prototype.va=null,ii.prototype.toString=function(){return this.content};var ri=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,ai={};function si(){ii.call(this)}function oi(e){return null!=e&&e.fa===Zt?e:e instanceof Rt?di(Nt(e).toString(),e.g()):di(re(String(String(e))),function(e){if(null!=e)switch(e.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}(e))}function ci(){ii.call(this)}function ui(e,t){this.content=String(e),this.va=null!=t?t:null}function li(e){return new ui(e,void 0)}L(si,ii),si.prototype.fa=Zt,L(ci,ii),ci.prototype.fa=Qt,ci.prototype.va=1,L(ui,ii),ui.prototype.fa=ti;var di=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,i){return e=new t(String(e)),void 0!==i&&(e.va=i),e}}(si),hi=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e){return new t(String(e))}}(ci);function fi(e){return(e=String(e))?new ui(e,void 0):""}var pi=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,i){return(e=String(e))?(e=new t(e),void 0!==i&&(e.va=i),e):""}}(si);function mi(e){return null!=e&&e.fa===Zt?String(String(e.content).replace(Ci,"").replace(Ti,"&lt;")).replace(Ii,yi):re(String(e))}function gi(e){return null!=e&&e.fa===Qt?e=String(e).replace(Ei,_i):e instanceof _t?e=String(It(e).toString()).replace(Ei,_i):(e=String(e),Si.test(e)?e=e.replace(Ei,_i):(M("Bad value `%s` for |filterNormalizeUri",[e]),e="#zSoyz")),e}function vi(e){return null!=e&&e.fa===ei?e=e.content:null==e?e="":e instanceof At?e instanceof At&&e.constructor===At&&e.g===Pt?e=e.a:(M("expected object of type SafeStyle, got '"+e+"' of type "+b(e)),e="type_error:SafeStyle"):(e=String(e),ki.test(e)||(M("Bad value `%s` for |filterCssValue",[e]),e="zSoyz")),e}var bi={"\0":"&#0;","\t":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","":"&#133;"," ":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function yi(e){return bi[e]}var wi={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","":"%07","\b":"%08","\t":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","":"%7F","":"%C2%85"," ":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","！":"%EF%BC%81","＃":"%EF%BC%83","＄":"%EF%BC%84","＆":"%EF%BC%86","＇":"%EF%BC%87","（":"%EF%BC%88","）":"%EF%BC%89","＊":"%EF%BC%8A","＋":"%EF%BC%8B","，":"%EF%BC%8C","／":"%EF%BC%8F","：":"%EF%BC%9A","；":"%EF%BC%9B","＝":"%EF%BC%9D","？":"%EF%BC%9F","＠":"%EF%BC%A0","［":"%EF%BC%BB","］":"%EF%BC%BD"};function _i(e){return wi[e]}var Ii=/[\x00\x22\x27\x3c\x3e]/g,Ei=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,ki=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,Si=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,Ci=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,Ti=/</g;function Ai(){return li("Enter a valid phone number")}function Pi(){return li("Unable to send password reset code to specified email")}function Ri(){return li("Something went wrong. Please try again.")}function Ni(){return li("This email already exists without any means of sign-in. Please reset the password to recover.")}function Oi(e){var t="";switch((e=e||{}).code){case"invalid-argument":t+="Client specified an invalid argument.";break;case"invalid-configuration":t+="Client specified an invalid project configuration.";break;case"failed-precondition":t+="Request can not be executed in the current system state.";break;case"out-of-range":t+="Client specified an invalid range.";break;case"unauthenticated":t+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":t+="Client does not have sufficient permission.";break;case"not-found":t+="Specified resource is not found.";break;case"aborted":t+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":t+="The resource that a client tried to create already exists.";break;case"resource-exhausted":t+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":t+="Request cancelled by the client.";break;case"data-loss":t+="Unrecoverable data loss or data corruption.";break;case"unknown":t+="Unknown server error.";break;case"internal":t+="Internal server error.";break;case"not-implemented":t+="API method not implemented by the server.";break;case"unavailable":t+="Service unavailable.";break;case"deadline-exceeded":t+="Request deadline exceeded.";break;case"auth/user-disabled":t+="The user account has been disabled by an administrator.";break;case"auth/timeout":t+="The operation has timed out.";break;case"auth/too-many-requests":t+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":t+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":t+="A network error has occurred. Try again later.";break;case"restart-process":t+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":t+="No sign-in provider is available for the given email, please try with a different email."}return li(t)}function Li(){return li("Please login again to perform this operation")}function Di(e,t,i){var n=Error.call(this);if(this.message=n.message,"stack"in n&&(this.stack=n.stack),this.code=xi+e,!(e=t)){if(e="","firebaseui/merge-conflict"===this.code)e+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";else e+=Ri();e=li(e).toString()}this.message=e||"",this.credential=i||null}o(Di,Error),Di.prototype.toJSON=function(){return{code:this.code,message:this.message}};var xi="firebaseui/";function Mi(){0!=Ui&&(Fi[this[E]||(this[E]=++k)]=this),this.T=this.T,this.C=this.C}var Ui=0,Fi={};function ji(e,t){e.T?h(void 0)?t.call(void 0):t():(e.C||(e.C=[]),e.C.push(h(void 0)?T(t,void 0):t))}function Bi(e){e&&"function"==typeof e.m&&e.m()}Mi.prototype.T=!1,Mi.prototype.m=function(){if(!this.T&&(this.T=!0,this.o(),0!=Ui)){var e=this[E]||(this[E]=++k);if(0!=Ui&&this.C&&0<this.C.length)throw Error(this+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Fi[e]}},Mi.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};var Hi=Object.freeze||function(e){return e},Vi=!Qe||9<=Number(dt),Wi=Qe&&!ft("9"),Gi=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",g,t),d.removeEventListener("test",g,t)}catch(e){}return e}();function zi(e,t){this.type=e,this.g=this.target=t,this.h=!1,this.qb=!0}function Ki(e,t){if(zi.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,e){var i=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(it){e:{try{Ye(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==i?t=e.fromElement:"mouseout"==i&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.keyCode=e.keyCode||0,this.key=e.key||"",this.j=e.charCode||("keypress"==i?e.keyCode:0),this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=f(e.pointerType)?e.pointerType:qi[e.pointerType]||"",this.a=e,e.defaultPrevented&&this.preventDefault()}}zi.prototype.stopPropagation=function(){this.h=!0},zi.prototype.preventDefault=function(){this.qb=!1},L(Ki,zi);var qi=Hi({2:"touch",3:"pen",4:"mouse"});Ki.prototype.stopPropagation=function(){Ki.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},Ki.prototype.preventDefault=function(){Ki.K.preventDefault.call(this);var e=this.a;if(e.preventDefault)e.preventDefault();else if(e.returnValue=!1,Wi)try{(e.ctrlKey||112<=e.keyCode&&123>=e.keyCode)&&(e.keyCode=-1)}catch(e){}};var $i="closure_listenable_"+(1e6*Math.random()|0),Yi=0;function Ji(e,t,i,n,r){this.listener=e,this.proxy=null,this.src=t,this.type=i,this.capture=!!n,this.La=r,this.key=++Yi,this.sa=this.Ia=!1}function Xi(e){e.sa=!0,e.listener=null,e.proxy=null,e.src=null,e.La=null}function Zi(e){this.src=e,this.a={},this.g=0}function Qi(e,t){var i=t.type;i in e.a&&W(e.a[i],t)&&(Xi(t),0==e.a[i].length&&(delete e.a[i],e.g--))}function en(e,t,i,n){for(var r=0;r<e.length;++r){var a=e[r];if(!a.sa&&a.listener==t&&a.capture==!!i&&a.La==n)return r}return-1}Zi.prototype.add=function(e,t,i,n,r){var a=e.toString();(e=this.a[a])||(e=this.a[a]=[],this.g++);var s=en(e,t,n,r);return-1<s?(t=e[s],i||(t.Ia=!1)):((t=new Ji(t,this.src,a,!!n,r)).Ia=i,e.push(t)),t};var tn="closure_lm_"+(1e6*Math.random()|0),nn={};function rn(e,t,i,n,r){if(n&&n.once)return sn(e,t,i,n,r);if(y(t)){for(var a=0;a<t.length;a++)rn(e,t[a],i,n,r);return null}return i=mn(i),e&&e[$i]?e.J.add(String(t),i,!1,I(n)?!!n.capture:!!n,r):an(e,t,i,!1,n,r)}function an(e,t,i,n,r,a){if(!t)throw Error("Invalid event type");var s=I(r)?!!r.capture:!!r,o=fn(e);if(o||(e[tn]=o=new Zi(e)),(i=o.add(t,i,n,s,a)).proxy)return i;if(n=function(){var e=hn,t=Vi?function(i){return e.call(t.src,t.listener,i)}:function(i){if(!(i=e.call(t.src,t.listener,i)))return i};return t}(),i.proxy=n,n.src=e,n.listener=i,e.addEventListener)Gi||(r=s),void 0===r&&(r=!1),e.addEventListener(t.toString(),n,r);else if(e.attachEvent)e.attachEvent(un(t.toString()),n);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(n)}return i}function sn(e,t,i,n,r){if(y(t)){for(var a=0;a<t.length;a++)sn(e,t[a],i,n,r);return null}return i=mn(i),e&&e[$i]?e.J.add(String(t),i,!0,I(n)?!!n.capture:!!n,r):an(e,t,i,!0,n,r)}function on(e,t,i,n,r){if(y(t))for(var a=0;a<t.length;a++)on(e,t[a],i,n,r);else n=I(n)?!!n.capture:!!n,i=mn(i),e&&e[$i]?(e=e.J,(t=String(t).toString())in e.a&&(-1<(i=en(a=e.a[t],i,n,r))&&(Xi(a[i]),G(a,i),0==a.length&&(delete e.a[t],e.g--)))):e&&(e=fn(e))&&(t=e.a[t.toString()],e=-1,t&&(e=en(t,i,n,r)),(i=-1<e?t[e]:null)&&cn(i))}function cn(e){if("number"!=typeof e&&e&&!e.sa){var t=e.src;if(t&&t[$i])Qi(t.J,e);else{var i=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(i,n,e.capture):t.detachEvent?t.detachEvent(un(i),n):t.addListener&&t.removeListener&&t.removeListener(n),(i=fn(t))?(Qi(i,e),0==i.g&&(i.src=null,t[tn]=null)):Xi(e)}}}function un(e){return e in nn?nn[e]:nn[e]="on"+e}function ln(e,t,i,n){var r=!0;if((e=fn(e))&&(t=e.a[t.toString()]))for(t=t.concat(),e=0;e<t.length;e++){var a=t[e];a&&a.capture==i&&!a.sa&&(a=dn(a,n),r=r&&!1!==a)}return r}function dn(e,t){var i=e.listener,n=e.La||e.src;return e.Ia&&cn(e),i.call(n,t)}function hn(e,t){if(e.sa)return!0;if(!Vi){if(!t)e:{t=["window","event"];for(var i=d,n=0;n<t.length;n++)if(null==(i=i[t[n]])){t=null;break e}t=i}if(t=new Ki(n=t,this),i=!0,!(0>n.keyCode||null!=n.returnValue)){e:{var r=!1;if(0==n.keyCode)try{n.keyCode=-1;break e}catch(e){r=!0}(r||null==n.returnValue)&&(n.returnValue=!0)}for(n=[],r=t.g;r;r=r.parentNode)n.push(r);for(e=e.type,r=n.length-1;!t.h&&0<=r;r--){t.g=n[r];var a=ln(n[r],e,!0,t);i=i&&a}for(r=0;!t.h&&r<n.length;r++)t.g=n[r],a=ln(n[r],e,!1,t),i=i&&a}return i}return dn(e,new Ki(t,this))}function fn(e){return(e=e[tn])instanceof Zi?e:null}var pn="__closure_events_fn_"+(1e9*Math.random()>>>0);function mn(e){return _(e)?e:(e[pn]||(e[pn]=function(t){return e.handleEvent(t)}),e[pn])}function gn(){Mi.call(this),this.J=new Zi(this),this.wb=this,this.Ha=null}function vn(e,t){var i,n=e.Ha;if(n)for(i=[];n;n=n.Ha)i.push(n);if(e=e.wb,n=t.type||t,f(t))t=new zi(t,e);else if(t instanceof zi)t.target=t.target||e;else{var r=t;ce(t=new zi(n,e),r)}if(r=!0,i)for(var a=i.length-1;!t.h&&0<=a;a--){var s=t.g=i[a];r=bn(s,n,!0,t)&&r}if(t.h||(r=bn(s=t.g=e,n,!0,t)&&r,t.h||(r=bn(s,n,!1,t)&&r)),i)for(a=0;!t.h&&a<i.length;a++)r=bn(s=t.g=i[a],n,!1,t)&&r;return r}function bn(e,t,i,n){if(!(t=e.J.a[String(t)]))return!0;t=t.concat();for(var r=!0,a=0;a<t.length;++a){var s=t[a];if(s&&!s.sa&&s.capture==i){var o=s.listener,c=s.La||s.src;s.Ia&&Qi(e.J,s),r=!1!==o.call(c,n)&&r}}return r&&0!=n.qb}L(gn,Mi),gn.prototype[$i]=!0,gn.prototype.Za=function(e){this.Ha=e},gn.prototype.removeEventListener=function(e,t,i,n){on(this,e,t,i,n)},gn.prototype.o=function(){if(gn.K.o.call(this),this.J){var e,t=this.J;for(e in t.a){for(var i=t.a[e],n=0;n<i.length;n++)Xi(i[n]);delete t.a[e],t.g--}}this.Ha=null};var yn={},wn=0;function _n(e,t){if(!e)throw Error("Event target element must be provided!");if(e=En(e),yn[e]&&yn[e].length)for(var i=0;i<yn[e].length;i++)vn(yn[e][i],t)}function In(e){var t=En(e.N());yn[t]&&yn[t].length&&(function(e,t){e:{for(var i=e.length,n=f(e)?e.split(""):e,r=0;r<i;r++)if(r in n&&t.call(void 0,n[r],r,e)){t=r;break e}t=-1}0<=t&&G(e,t)}(yn[t],(function(t){return t==e})),yn[t].length||delete yn[t])}function En(e){return void 0===e.a&&(e.a=wn,wn++),e.a}function kn(e){if(!e)throw Error("Event target element must be provided!");gn.call(this),this.a=e}function Sn(e){if(!e)return!1;try{return!!e.$goog_Thenable}catch(e){return!1}}function Cn(e,t){this.h=e,this.j=t,this.g=0,this.a=null}function Tn(e,t){e.j(t),100>e.g&&(e.g++,t.next=e.a,e.a=t)}function An(){this.g=this.a=null}o(kn,gn),kn.prototype.N=function(){return this.a},kn.prototype.register=function(){var e=En(this.N());yn[e]?V(yn[e],this)||yn[e].push(this):yn[e]=[this]},Cn.prototype.get=function(){if(0<this.g){this.g--;var e=this.a;this.a=e.next,e.next=null}else e=this.h();return e};var Pn,Rn,Nn=new Cn((function(){return new Ln}),(function(e){e.reset()}));function On(){var e=Un,t=null;return e.a&&(t=e.a,e.a=e.a.next,e.a||(e.g=null),t.next=null),t}function Ln(){this.next=this.g=this.a=null}function Dn(e){d.setTimeout((function(){throw e}),0)}function xn(e,t){Rn||function(){if(d.Promise&&d.Promise.resolve){var e=d.Promise.resolve(void 0);Rn=function(){e.then(Fn)}}else Rn=function(){var e=Fn;!_(d.setImmediate)||d.Window&&d.Window.prototype&&!qe("Edge")&&d.Window.prototype.setImmediate==d.setImmediate?(Pn||(Pn=function(){var e=d.MessageChannel;if(void 0===e&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!qe("Presto")&&(e=function(){var e=document.createElement("IFRAME");e.style.display="none",e.src="",document.documentElement.appendChild(e);var t=e.contentWindow;(e=t.document).open(),e.write(""),e.close();var i="callImmediate"+Math.random(),n="file:"==t.location.protocol?"*":t.location.protocol+"//"+t.location.host;e=T((function(e){"*"!=n&&e.origin!=n||e.data!=i||this.port1.onmessage()}),this),t.addEventListener("message",e,!1),this.port1={},this.port2={postMessage:function(){t.postMessage(i,n)}}}),void 0!==e&&!qe("Trident")&&!qe("MSIE")){var t=new e,i={},n=i;return t.port1.onmessage=function(){if(h(i.next)){var e=(i=i.next).gb;i.gb=null,e()}},function(e){n.next={gb:e},n=n.next,t.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var t=document.createElement("SCRIPT");t.onreadystatechange=function(){t.onreadystatechange=null,t.parentNode.removeChild(t),t=null,e(),e=null},document.documentElement.appendChild(t)}:function(e){d.setTimeout(e,0)}}()),Pn(e)):d.setImmediate(e)}}(),Mn||(Rn(),Mn=!0),Un.add(e,t)}An.prototype.add=function(e,t){var i=Nn.get();i.set(e,t),this.g?this.g.next=i:this.a=i,this.g=i},Ln.prototype.set=function(e,t){this.a=e,this.g=t,this.next=null},Ln.prototype.reset=function(){this.next=this.g=this.a=null};var Mn=!1,Un=new An;function Fn(){for(var e;e=On();){try{e.a.call(e.g)}catch(e){Dn(e)}Tn(Nn,e)}Mn=!1}function jn(e){if(this.a=Bn,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,e!=g)try{var t=this;e.call(void 0,(function(e){Xn(t,Hn,e)}),(function(e){if(!(e instanceof nr))try{if(e instanceof Error)throw e;throw Error("Promise rejected.")}catch(e){}Xn(t,Vn,e)}))}catch(e){Xn(this,Vn,e)}}var Bn=0,Hn=2,Vn=3;function Wn(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}Wn.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var Gn=new Cn((function(){return new Wn}),(function(e){e.reset()}));function zn(e,t,i){var n=Gn.get();return n.s=e,n.g=t,n.j=i,n}function Kn(e){if(e instanceof jn)return e;var t=new jn(g);return Xn(t,Hn,e),t}function qn(e){return new jn((function(t,i){i(e)}))}function $n(e,t){if(e.a==Bn)if(e.h){var i=e.h;if(i.g){for(var n=0,r=null,a=null,s=i.g;s&&(s.h||(n++,s.a==e&&(r=s),!(r&&1<n)));s=s.next)r||(a=s);r&&(i.a==Bn&&1==n?$n(i,t):(a?((n=a).next==i.j&&(i.j=n),n.next=n.next.next):Qn(i),er(i,r,Vn,t)))}e.h=null}else Xn(e,Vn,t)}function Yn(e,t){e.g||e.a!=Hn&&e.a!=Vn||Zn(e),e.j?e.j.next=t:e.g=t,e.j=t}function Jn(e,t,i,n){var r=zn(null,null,null);return r.a=new jn((function(e,a){r.s=t?function(i){try{var r=t.call(n,i);e(r)}catch(e){a(e)}}:e,r.g=i?function(t){try{var r=i.call(n,t);!h(r)&&t instanceof nr?a(t):e(r)}catch(e){a(e)}}:a})),r.a.h=e,Yn(e,r),r.a}function Xn(e,t,i){if(e.a==Bn){e===i&&(t=Vn,i=new TypeError("Promise cannot resolve to itself")),e.a=1;e:{var n=i,r=e.hc,a=e.ic;if(n instanceof jn){Yn(n,zn(r||g,a||null,e));var s=!0}else if(Sn(n))n.then(r,a,e),s=!0;else{if(I(n))try{var o=n.then;if(_(o)){!function(e,t,i,n,r){function a(e){o||(o=!0,n.call(r,e))}function s(e){o||(o=!0,i.call(r,e))}var o=!1;try{t.call(e,s,a)}catch(e){a(e)}}(n,o,r,a,e),s=!0;break e}}catch(t){a.call(e,t),s=!0;break e}s=!1}}s||(e.A=i,e.a=t,e.h=null,Zn(e),t!=Vn||i instanceof nr||function(e,t){e.s=!0,xn((function(){e.s&&ir.call(null,t)}))}(e,i))}}function Zn(e){e.i||(e.i=!0,xn(e.Hb,e))}function Qn(e){var t=null;return e.g&&(t=e.g,e.g=t.next,t.next=null),e.g||(e.j=null),t}function er(e,t,i,n){if(i==Vn&&t.g&&!t.h)for(;e&&e.s;e=e.h)e.s=!1;if(t.a)t.a.h=null,tr(t,i,n);else try{t.h?t.s.call(t.j):tr(t,i,n)}catch(e){ir.call(null,e)}Tn(Gn,t)}function tr(e,t,i){t==Hn?e.s.call(e.j,i):e.g&&e.g.call(e.j,i)}jn.prototype.then=function(e,t,i){return Jn(this,_(e)?e:null,_(t)?t:null,i)},jn.prototype.$goog_Thenable=!0,(t=jn.prototype).fc=function(e,t){return(e=zn(e,e,t)).h=!0,Yn(this,e),this},t.Ca=function(e,t){return Jn(this,null,e,t)},t.cancel=function(e){this.a==Bn&&xn((function(){$n(this,new nr(e))}),this)},t.hc=function(e){this.a=Bn,Xn(this,Hn,e)},t.ic=function(e){this.a=Bn,Xn(this,Vn,e)},t.Hb=function(){for(var e;e=Qn(this);)er(this,e,this.a,this.A);this.i=!1};var ir=Dn;function nr(e){D.call(this,e)}function rr(e,t,i){t||(t={}),i=i||window;var n=e instanceof _t?e:kt(void 0!==e.href?e.href:String(e));e=t.target||e.target;var r=[];for(a in t)switch(a){case"width":case"height":case"top":case"left":r.push(a+"="+t[a]);break;case"target":case"noopener":case"noreferrer":break;default:r.push(a+"="+(t[a]?1:0))}var a=r.join(",");return(qe("iPhone")&&!qe("iPod")&&!qe("iPad")||qe("iPad")||qe("iPod"))&&i.navigator&&i.navigator.standalone&&e&&"_self"!=e?(a=i.document.createElement("A"),n=n instanceof _t?n:St(n),a.href=It(n),a.setAttribute("target",e),t.noreferrer&&a.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,i,1),a.dispatchEvent(t),i={}):t.noreferrer?(i=i.open("",e,a),t=It(n).toString(),i&&(tt&&-1!=t.indexOf(";")&&(t="'"+t.replace(/'/g,"%27")+"'"),i.opener=null,t=Lt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+re(t)+'">',null),i.document.write(Nt(t)),i.document.close())):(i=i.open(It(n).toString(),e,a))&&t.noopener&&(i.opener=null),i}function ar(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch(e){}return!1}function sr(e){rr(e,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function or(e,t){if(null==(e=I(e)&&1==e.nodeType?e:document.querySelector(String(e))))throw Error(t||"Cannot find element.");return e}function cr(){return window.location.href}function ur(e){var t=wr;this.s=[],this.T=t,this.O=e||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}function lr(e,t,i){e.a=!0,e.h=i,e.j=!t,pr(e)}function dr(e){if(e.a){if(!e.J)throw new mr(e);e.J=!1}}function hr(e,t,i){e.s.push([t,i,void 0]),e.a&&pr(e)}function fr(e){return H(e.s,(function(e){return _(e[1])}))}function pr(e){if(e.i&&e.a&&fr(e)){var t=e.i,i=br[t];i&&(d.clearTimeout(i.a),delete br[t]),e.i=0}e.g&&(e.g.C--,delete e.g),t=e.h;for(var n=i=!1;e.s.length&&!e.A;){var r=e.s.shift(),a=r[0],s=r[1];if(r=r[2],a=e.j?s:a)try{var o=a.call(r||e.O,t);h(o)&&(e.j=e.j&&(o==t||o instanceof Error),e.h=t=o),(Sn(t)||"function"==typeof d.Promise&&t instanceof d.Promise)&&(n=!0,e.A=!0)}catch(n){t=n,e.j=!0,fr(e)||(i=!0)}}e.h=t,n&&(o=T(e.L,e,!0),n=T(e.L,e,!1),t instanceof ur?(hr(t,o,n),t.l=!0):t.then(o,n)),i&&(t=new vr(t),br[t.a]=t,e.i=t.a)}function mr(){D.call(this)}function gr(){D.call(this)}function vr(e){this.a=d.setTimeout(T(this.h,this),0),this.g=e}L(nr,D),nr.prototype.name="cancel",ur.prototype.cancel=function(e){if(this.a)this.h instanceof ur&&this.h.cancel();else{if(this.g){var t=this.g;delete this.g,e?t.cancel(e):(t.C--,0>=t.C&&t.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(e=new gr(this),dr(this),lr(this,!1,e))}},ur.prototype.L=function(e,t){this.A=!1,lr(this,e,t)},ur.prototype.callback=function(e){dr(this),lr(this,!0,e)},ur.prototype.then=function(e,t,i){var n,r,a=new jn((function(e,t){n=e,r=t}));return hr(this,n,(function(e){e instanceof gr?a.cancel():r(e)})),a.then(e,t,i)},ur.prototype.$goog_Thenable=!0,L(mr,D),mr.prototype.message="Deferred has already fired",mr.prototype.name="AlreadyCalledError",L(gr,D),gr.prototype.message="Deferred was canceled",gr.prototype.name="CanceledError",vr.prototype.h=function(){throw delete br[this.a],this.g};var br={};function yr(e){var t={},i=t.document||document,n=yt(e).toString(),r=document.createElement("SCRIPT"),a={rb:r,sb:void 0},s=new ur(a),o=null,c=null!=t.timeout?t.timeout:5e3;return 0<c&&(o=window.setTimeout((function(){_r(r,!0);var e=new kr(Er,"Timeout reached for loading script "+n);dr(s),lr(s,!1,e)}),c),a.sb=o),r.onload=r.onreadystatechange=function(){r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(_r(r,t.xc||!1,o),s.callback(null))},r.onerror=function(){_r(r,!0,o);var e=new kr(Ir,"Error while loading script "+n);dr(s),lr(s,!1,e)},ce(a=t.attributes||{},{type:"text/javascript",charset:"UTF-8"}),function(e,t){ae(t,(function(t,i){t&&"object"==typeof t&&t.ma&&(t=t.ka()),"style"==i?e.style.cssText=t:"class"==i?e.className=t:"for"==i?e.htmlFor=t:zt.hasOwnProperty(i)?e.setAttribute(zt[i],t):0==i.lastIndexOf("aria-",0)||0==i.lastIndexOf("data-",0)?e.setAttribute(i,t):e[i]=t}))}(r,a),function(e,t){e.src=yt(t),null===m&&(m=(t=(t=d.document).querySelector&&t.querySelector("script[nonce]"))&&(t=t.nonce||t.getAttribute("nonce"))&&p.test(t)?t:""),(t=m)&&e.setAttribute("nonce",t)}(r,e),function(e){var t=(e||document).getElementsByTagName("HEAD");return t&&0!=t.length?t[0]:e.documentElement}(i).appendChild(r),s}function wr(){if(this&&this.rb){var e=this.rb;e&&"SCRIPT"==e.tagName&&_r(e,!0,this.sb)}}function _r(e,t,i){null!=i&&d.clearTimeout(i),e.onload=g,e.onerror=g,e.onreadystatechange=g,t&&window.setTimeout((function(){qt(e)}),0)}var Ir=0,Er=1;function kr(e,t){var i="Jsloader error (code #"+e+")";t&&(i+=": "+t),D.call(this,i),this.code=e}function Sr(){return d.google&&d.google.accounts&&d.google.accounts.id||null}function Cr(e){this.a=e||Sr(),this.h=!1,this.g=null}function Tr(e,t,i){return e.a&&t?(e.h=!0,new jn((function(n){e.g=n,e.a.initialize({client_id:t,callback:n,auto_select:!i}),e.a.prompt()}))):Kn(t?Pr.Xa().load().then((function(){return e.a=Sr(),Tr(e,t,i)})).Ca((function(){return null})):null)}L(kr,D),Cr.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())},v(Cr);var Ar=new mt(vt,"https://accounts.google.com/gsi/client");function Pr(){this.a=null}function Rr(e,t){this.a=e,this.g=t||function(e){throw e}}function Nr(e,t,i){this.reset(e,t,i,void 0,void 0)}Pr.prototype.load=function(){var e=this;if(this.a)return this.a;var t=function(){var e=Ar;e instanceof mt&&e.constructor===mt&&e.g===gt?e=e.a:(M("expected object of type Const, got '"+e+"'"),e="type_error:Const");var t=new bt;return t.a=e,t}();return Sr()?Kn():this.a=function(){var e=null;return new jn((function(t){"complete"==d.document.readyState?t():(e=function(){t()},sn(window,"load",e))})).Ca((function(t){throw on(window,"load",e),t}))}().then((function(){if(!Sr())return new jn((function(i,n){var r=setTimeout((function(){e.a=null,n(Error("Network error!"))}),1e4);d.onGoogleLibraryLoad=function(){clearTimeout(r),i()},Kn(yr(t)).then((function(){Sr()&&i()})).Ca((function(t){clearTimeout(r),e.a=null,n(t)}))}))}))},v(Pr),Rr.prototype.confirm=function(e){return Kn(this.a.confirm(e)).Ca(this.g)},Nr.prototype.a=null;function Or(e){this.s=e,this.a=this.h=this.j=this.g=null}function Lr(e,t){this.name=e,this.value=t}Nr.prototype.reset=function(e,t,i,n,r){"number"==typeof r||0,this.h=n||N(),this.j=e,this.s=t,this.g=i,delete this.a},Lr.prototype.toString=function(){return this.name};var Dr=new Lr("SEVERE",1e3),xr=new Lr("WARNING",900),Mr=new Lr("CONFIG",700);function Ur(e){return e.j?e.j:e.g?Ur(e.g):(M("Root logger has no level set."),null)}Or.prototype.log=function(e,t,i){if(e.value>=Ur(this).value)for(_(t)&&(t=t()),e=new Nr(e,String(t),this.s),i&&(e.a=i),i=this;i;){var n=i,r=e;if(n.a)for(var a=0;t=n.a[a];a++)t(r);i=i.g}};var Fr={},jr=null;function Br(){jr||(jr=new Or(""),Fr[""]=jr,jr.j=Mr)}function Hr(){this.a=N()}var Vr=null;function Wr(e){this.j=e||"",Vr||(Vr=new Hr),this.s=Vr}function Gr(e){return 10>e?"0"+e:String(e)}function zr(e){Wr.call(this,e)}function Kr(){this.s=T(this.h,this),this.a=new zr,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}Hr.prototype.set=function(e){this.a=e},Hr.prototype.reset=function(){this.set(N())},Hr.prototype.get=function(){return this.a},Wr.prototype.a=!0,Wr.prototype.g=!0,Wr.prototype.h=!1,L(zr,Wr),Kr.prototype.h=function(e){if(!this.j[e.g]){var t=function(e,t){var i=[];if(i.push(e.j," "),e.g){var n=new Date(t.h);i.push("[",Gr(n.getFullYear()-2e3)+Gr(n.getMonth()+1)+Gr(n.getDate())+" "+Gr(n.getHours())+":"+Gr(n.getMinutes())+":"+Gr(n.getSeconds())+"."+Gr(Math.floor(n.getMilliseconds()/10)),"] ")}return i.push("[",function(e,t){t=(e=(e.h-t)/1e3).toFixed(3);var i=0;if(1>e)i=2;else for(;100>e;)i++,e*=10;for(;0<i--;)t=" "+t;return t}(t,e.s.get()),"s] "),i.push("[",t.g,"] "),i.push(t.s),e.h&&(t=t.a)&&i.push("\n",t instanceof Error?t.message:t.toString()),e.a&&i.push("\n"),i.join("")}(this.a,e);if($r)!function(e,t,i,n){e[t]?e[t](i,n||""):e.log(i,n||"")}($r,function(e){if(e){if(e.value>=Dr.value)return"error";if(e.value>=xr.value)return"warn";if(e.value>=Mr.value)return"log"}return"debug"}(e.j),t,e.a)}};var qr,$r=d.console;function Yr(e,t){qr&&qr.log(Dr,e,t)}qr=function e(t){var i;if(Br(),!(i=Fr[t])){i=new Or(t);var n=t.lastIndexOf("."),r=t.substr(n+1);(n=e(t.substr(0,n))).h||(n.h={}),n.h[r]=i,i.g=n,Fr[t]=i}return i}("firebaseui");var Jr=new Kr;if(1!=Jr.g){var Xr;Br(),Xr=jr;var Zr=Jr.s;Xr.a||(Xr.a=[]),Xr.a.push(Zr),Jr.g=!0}function Qr(e){qr&&qr.log(xr,e,void 0)}function ea(){this.a=("undefined"==typeof document?null:document)||{cookie:""}}function ta(e){e=(e.a.cookie||"").split(";");for(var t,i,n=[],r=[],a=0;a<e.length;a++)-1==(t=(i=Y(e[a])).indexOf("="))?(n.push(""),r.push(i)):(n.push(i.substring(0,t)),r.push(i.substring(t+1)));return{keys:n,values:r}}(t=ea.prototype).set=function(e,t,i,n,r,a){if(/[;=\s]/.test(e))throw Error('Invalid cookie name "'+e+'"');if(/[;\r\n]/.test(t))throw Error('Invalid cookie value "'+t+'"');h(i)||(i=-1),r=r?";domain="+r:"",n=n?";path="+n:"",a=a?";secure":"",i=0>i?"":0==i?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(N()+1e3*i).toUTCString(),this.a.cookie=e+"="+t+r+n+i+a},t.get=function(e,t){for(var i,n=e+"=",r=(this.a.cookie||"").split(";"),a=0;a<r.length;a++){if(0==(i=Y(r[a])).lastIndexOf(n,0))return i.substr(n.length);if(i==e)return""}return t},t.ja=function(){return ta(this).keys},t.la=function(){return ta(this).values},t.clear=function(){for(var e=ta(this).keys,t=e.length-1;0<=t;t--){var i=e[t];this.get(i),this.set(i,"",0,void 0,void 0)}};var ia=new ea;function na(){}function ra(e,t,i,n){this.h=null!=e?e:-1,this.g=t||null,this.a=i||null,this.j=!!n}function aa(e,t){this.g=e,this.a=t||null}function sa(e){return{email:e.g,credential:e.a&&e.a.toJSON()}}function oa(e){if(e&&e.email){var t=e.credential&&ct.auth.AuthCredential.fromJSON(e.credential);return new aa(e.email,t)}return null}function ca(e){this.a=e||null}function ua(e){for(var t=[],i=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);255<r&&(t[i++]=255&r,r>>=8),t[i++]=r}return t}function la(e){return B(e,(function(e){return 1<(e=e.toString(16)).length?e:"0"+e})).join("")}function da(e){for(this.i=e,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(ha*(this.j+1)),e=0;e<this.g;e++)this.a[e]=[this.i[4*e],this.i[4*e+1],this.i[4*e+2],this.i[4*e+3]];var t=Array(4);for(e=this.g;e<ha*(this.j+1);e++){if(t[0]=this.a[e-1][0],t[1]=this.a[e-1][1],t[2]=this.a[e-1][2],t[3]=this.a[e-1][3],0==e%this.g){var i=t,n=i[0];i[0]=i[1],i[1]=i[2],i[2]=i[3],i[3]=n,ya(t),t[0]^=Ia[e/this.g][0],t[1]^=Ia[e/this.g][1],t[2]^=Ia[e/this.g][2],t[3]^=Ia[e/this.g][3]}else 6<this.g&&4==e%this.g&&ya(t);this.a[e]=Array(4),this.a[e][0]=this.a[e-this.g][0]^t[0],this.a[e][1]=this.a[e-this.g][1]^t[1],this.a[e][2]=this.a[e-this.g][2]^t[2],this.a[e][3]=this.a[e-this.g][3]^t[3]}}o(ra,na),ra.prototype.set=function(e,t){ia.set(e,t,this.h,this.g,this.a,this.j)},ra.prototype.get=function(e){return ia.get(e)||null},ra.prototype.ra=function(e){var t=this.g,i=this.a;ia.get(e),ia.set(e,"",0,t,i)},da.prototype.A=16;var ha=da.prototype.A/4;function fa(e,t){for(var i,n=0;n<ha;n++)for(var r=0;4>r;r++)i=t[i=4*r+n],e.h[n][r]=i}function pa(e){for(var t=[],i=0;i<ha;i++)for(var n=0;4>n;n++)t[4*n+i]=e.h[i][n];return t}function ma(e,t){for(var i=0;4>i;i++)for(var n=0;4>n;n++)e.h[i][n]^=e.a[4*t+n][i]}function ga(e,t){for(var i=0;4>i;i++)for(var n=0;4>n;n++)e.h[i][n]=t[e.h[i][n]]}function va(e){for(var t=1;4>t;t++)for(var i=0;4>i;i++)e.s[t][i]=e.h[t][i];for(t=1;4>t;t++)for(i=0;4>i;i++)e.h[t][i]=e.s[t][(i+t)%ha]}function ba(e){for(var t=1;4>t;t++)for(var i=0;4>i;i++)e.s[t][(i+t)%ha]=e.h[t][i];for(t=1;4>t;t++)for(i=0;4>i;i++)e.h[t][i]=e.s[t][i]}function ya(e){e[0]=wa[e[0]],e[1]=wa[e[1]],e[2]=wa[e[2]],e[3]=wa[e[3]]}var wa=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],_a=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],Ia=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],Ea=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],ka=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],Sa=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],Ca=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],Ta=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],Aa=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function Pa(e,t){e=new da(Na(e));for(var i,n=(t=ua(t)).splice(0,16),r="";n.length;){i=16-n.length;for(var a=0;a<i;a++)n.push(0);for(fa(i=e,n),ma(i,0),n=1;n<i.j;++n){ga(i,wa),va(i),a=i.h;for(var s=i.s[0],o=0;4>o;o++)s[0]=a[0][o],s[1]=a[1][o],s[2]=a[2][o],s[3]=a[3][o],a[0][o]=Ea[s[0]]^ka[s[1]]^s[2]^s[3],a[1][o]=s[0]^Ea[s[1]]^ka[s[2]]^s[3],a[2][o]=s[0]^s[1]^Ea[s[2]]^ka[s[3]],a[3][o]=ka[s[0]]^s[1]^s[2]^Ea[s[3]];ma(i,n)}ga(i,wa),va(i),ma(i,i.j),r+=la(pa(i)),n=t.splice(0,16)}return r}function Ra(e,t){e=new da(Na(e));for(var i=[],n=0;n<t.length;n+=2)i.push(parseInt(t.substring(n,n+2),16));var r=i.splice(0,16);for(t="";r.length;){for(fa(n=e,r),ma(n,n.j),r=1;r<n.j;++r){ba(n),ga(n,_a),ma(n,n.j-r);for(var a=n.h,s=n.s[0],o=0;4>o;o++)s[0]=a[0][o],s[1]=a[1][o],s[2]=a[2][o],s[3]=a[3][o],a[0][o]=Aa[s[0]]^Ca[s[1]]^Ta[s[2]]^Sa[s[3]],a[1][o]=Sa[s[0]]^Aa[s[1]]^Ca[s[2]]^Ta[s[3]],a[2][o]=Ta[s[0]]^Sa[s[1]]^Aa[s[2]]^Ca[s[3]],a[3][o]=Ca[s[0]]^Ta[s[1]]^Sa[s[2]]^Aa[s[3]]}if(ba(n),ga(n,_a),ma(n,0),8192>=(n=pa(n)).length)n=String.fromCharCode.apply(null,n);else{for(r="",a=0;a<n.length;a+=8192)r+=String.fromCharCode.apply(null,$(n,a,a+8192));n=r}t+=n,r=i.splice(0,16)}return t.replace(/(\x00)+$/,"")}function Na(e){for(var t=32-(e=ua(e.substring(0,32))).length,i=0;i<t;i++)e.push(0);return e}function Oa(e){var t=[];return Da(new La,e,t),t.join("")}function La(){}function Da(e,t,i){if(null==t)i.push("null");else{if("object"==typeof t){if(y(t)){var n=t;t=n.length,i.push("[");for(var r="",a=0;a<t;a++)i.push(r),Da(e,n[a],i),r=",";return void i.push("]")}if(!(t instanceof String||t instanceof Number||t instanceof Boolean)){for(n in i.push("{"),r="",t)Object.prototype.hasOwnProperty.call(t,n)&&("function"!=typeof(a=t[n])&&(i.push(r),Ua(n,i),i.push(":"),Da(e,a,i),r=","));return void i.push("}")}t=t.valueOf()}switch(typeof t){case"string":Ua(t,i);break;case"number":i.push(isFinite(t)&&!isNaN(t)?String(t):"null");break;case"boolean":i.push(String(t));break;case"function":i.push("null");break;default:throw Error("Unknown type: "+typeof t)}}}var xa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Ma=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ua(e,t){t.push('"',e.replace(Ma,(function(e){var t=xa[e];return t||(t="\\u"+(65536|e.charCodeAt(0)).toString(16).substr(1),xa[e]=t),t})),'"')}function Fa(e){this.a=e}function ja(){}function Ba(e){this.a=e}function Ha(e){if(!e.a)return!1;try{return e.a.setItem("__sak","1"),e.a.removeItem("__sak"),!0}catch(e){return!1}}function Va(){var e=null;try{e=window.localStorage||null}catch(e){}this.a=e}function Wa(){var e=null;try{e=window.sessionStorage||null}catch(e){}this.a=e}function Ga(e,t){this.g=e,this.a=t+"::"}Fa.prototype.set=function(e,t){h(t)?this.a.set(e,Oa(t)):this.a.ra(e)},Fa.prototype.get=function(e){try{var t=this.a.get(e)}catch(e){return}if(null!==t)try{return JSON.parse(t)}catch(e){throw"Storage: Invalid value was encountered"}},L(ja,na),ja.prototype.clear=function(){var e=he(this.ha(!0)),t=this;F(e,(function(e){t.ra(e)}))},L(Ba,ja),(t=Ba.prototype).set=function(e,t){try{this.a.setItem(e,t)}catch(e){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded"}},t.get=function(e){if(!f(e=this.a.getItem(e))&&null!==e)throw"Storage mechanism: Invalid value was encountered";return e},t.ra=function(e){this.a.removeItem(e)},t.ha=function(e){var t=0,i=this.a,n=new le;return n.next=function(){if(t>=i.length)throw ue;var n=i.key(t++);if(e)return n;if(!f(n=i.getItem(n)))throw"Storage mechanism: Invalid value was encountered";return n},n},t.clear=function(){this.a.clear()},t.key=function(e){return this.a.key(e)},L(Va,Ba),L(Wa,Ba),L(Ga,ja),Ga.prototype.set=function(e,t){this.g.set(this.a+e,t)},Ga.prototype.get=function(e){return this.g.get(this.a+e)},Ga.prototype.ra=function(e){this.g.ra(this.a+e)},Ga.prototype.ha=function(e){var t=this.g.ha(!0),i=this,n=new le;return n.next=function(){for(var n=t.next();n.substr(0,i.a.length)!=i.a;)n=t.next();return e?n.substr(i.a.length):i.g.get(n)},n},Ha(new Va);var za=new Wa,Ka=new Fa(Ha(za)?new Ga(za,"firebaseui"):null),qa={name:"pendingEmailCredential",storage:Ka},$a={name:"redirectStatus",storage:Ka},Ya={name:"redirectUrl",storage:Ka},Ja={name:"emailForSignIn",storage:new Fa(new ra(3600,"/"))},Xa={name:"pendingEncryptedCredential",storage:new Fa(new ra(3600,"/"))};function Za(e,t){return e.storage.get(t?e.name+":"+t:e.name)}function Qa(e,t){e.storage.a.ra(t?e.name+":"+t:e.name)}function es(e,t,i){e.storage.set(i?e.name+":"+i:e.name,t)}function ts(e){return Za(Ya,e)||null}function is(e){return oa(e=Za(qa,e)||null)}function ns(e){Qa(qa,e)}function rs(e,t){es(qa,sa(e),t)}function as(e){return(e=Za($a,e)||null)&&void 0!==e.tenantId?new ca(e.tenantId):null}function ss(){this.W={}}function os(e,t,i){if(t.toLowerCase()in e.W)throw Error("Configuration "+t+" has already been defined.");e.W[t.toLowerCase()]=i}function cs(e,t,i){if(!(t.toLowerCase()in e.W))throw Error("Configuration "+t+" is not defined.");e.W[t.toLowerCase()]=i}function us(e,t){if(!(e=e.get(t)))throw Error("Configuration "+t+" is required.");return e}function ls(){this.g=void 0,this.a={}}function ds(e,t,i,n){for(var r=0;r<t.length;r++){var a=t.charAt(r);e.a[a]||(e.a[a]=new ls),e=e.a[a]}if(n&&void 0!==e.g)throw Error('The collection already contains the key "'+t+'"');e.g=i}function hs(e,t){for(var i in void 0!==e.g&&t.push(e.g),e.a)hs(e.a[i],t)}function fs(e,t,i){for(var n in void 0!==e.g&&i.push(t),e.a)fs(e.a[n],t+n,i)}function ps(e){for(this.a=e,this.g=new ls,e=0;e<this.a.length;e++){var t=this.g.get("+"+this.a[e].b);t?t.push(this.a[e]):this.g.add("+"+this.a[e].b,[this.a[e]])}}function ms(e,t){var i={},n=0;for(void 0!==(e=e.g).g&&(i[n]=e.g);n<t.length;n++){var r=t.charAt(n);if(!(r in e.a))break;void 0!==(e=e.a[r]).g&&(i[n]=e.g)}for(var a in i)if(i.hasOwnProperty(a))return i[a];return[]}function gs(e){for(var t=0;t<ws.length;t++)if(ws[t].c===e)return ws[t];return null}function vs(e){e=e.toUpperCase();for(var t=[],i=0;i<ws.length;i++)ws[i].f===e&&t.push(ws[i]);return t}function bs(e){if(0<e.length&&"+"==e.charAt(0)){e=e.substring(1);for(var t=[],i=0;i<ws.length;i++)ws[i].b==e&&t.push(ws[i]);e=t}else e=vs(e);return e}function ys(e){e.sort((function(e,t){return e.name.localeCompare(t.name,"en")}))}ss.prototype.get=function(e){if(!(e.toLowerCase()in this.W))throw Error("Configuration "+e+" is not defined.");return this.W[e.toLowerCase()]},(t=ls.prototype).set=function(e,t){ds(this,e,t,!1)},t.add=function(e,t){ds(this,e,t,!0)},t.get=function(e){e:{for(var t=this,i=0;i<e.length;i++)if(!(t=t.a[e.charAt(i)])){e=void 0;break e}e=t}return e?e.g:void 0},t.la=function(){var e=[];return hs(this,e),e},t.ja=function(){var e=[];return fs(this,"",e),e},t.clear=function(){this.a={},this.g=void 0};var ws=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"Åland Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"Côte d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Curaçao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"Réunion",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barthélemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"São Tomé and Príncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];ys(ws);var _s=new ps(ws);function Is(e,t){this.a=e,this.Aa=t}function Es(e){e=Y(e);var t=ms(_s,e);return 0<t.length?new Is("1"==t[0].b?"1-US-0":t[0].c,Y(e.substr(t[0].b.length+1))):null}function ks(e){var t=gs(e.a);if(!t)throw Error("Country ID "+e.a+" not found.");return"+"+t.b+e.Aa}function Ss(e,t){for(var i=0;i<e.length;i++)if(!V(Cs,e[i])&&(null!==Ts&&e[i]in Ts||V(t,e[i])))return e[i];return null}var Cs=["emailLink","password","phone"],Ts={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function As(){this.a=new ss,os(this.a,"autoUpgradeAnonymousUsers"),os(this.a,"callbacks"),os(this.a,"credentialHelper",no),os(this.a,"immediateFederatedRedirect",!1),os(this.a,"popupMode",!1),os(this.a,"privacyPolicyUrl"),os(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),os(this.a,"queryParameterForWidgetMode","mode"),os(this.a,"signInFlow"),os(this.a,"signInOptions"),os(this.a,"signInSuccessUrl"),os(this.a,"siteName"),os(this.a,"tosUrl"),os(this.a,"widgetUrl"),os(this.a,"adminRestrictedOperation")}function Ps(e){var t=!!e.a.get("autoUpgradeAnonymousUsers");return t&&!Js(e)&&Yr('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),t}function Rs(e){e=e.a.get("signInOptions")||[];for(var t=[],i=0;i<e.length;i++){var n=e[i];(n=I(n)?n:{provider:n}).provider&&t.push(n)}return t}function Ns(e,t){e=Rs(e);for(var i=0;i<e.length;i++)if(e[i].provider===t)return e[i];return null}function Os(e){return Rs(e).map((function(e){return e.provider}))}function Ls(e,t){e=Ds(e);for(var i=0;i<e.length;i++)if(e[i].providerId===t)return e[i];return null}function Ds(e){return Rs(e).map((function(e){if(Ts[e.provider]||V(co,e.provider)){for(var t in e={providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?It(kt(e.iconUrl)).toString():null})null===e[t]&&delete e[t];return e}return{providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?It(kt(e.iconUrl)).toString():null,Ob:e.loginHintKey||null}}))}function xs(e){var t,i=Ns(e,ct.auth.GoogleAuthProvider.PROVIDER_ID);if(t=i&&i.clientId){e:{if("http:"===(window.location&&window.location.protocol)||"https:"===(window.location&&window.location.protocol))for(n in e=e.a.get("credentialHelper"),ro)if(ro[n]===e){var n=ro[n];break e}n=no}t=n===io}return t&&i.clientId||null}function Ms(e){return!!((e=Ns(e,ct.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.status)}function Us(e){return!(!(e=e.a.get("adminRestrictedOperation")||null)||!e.status)}function Fs(e,t){return e=(e=Ns(e,t))&&e.scopes,Array.isArray(e)?e:[]}function js(e,t){return I(e=(e=Ns(e,t))&&e.customParameters)?(e=se(e),t===ct.auth.GoogleAuthProvider.PROVIDER_ID&&delete e.login_hint,t===ct.auth.GithubAuthProvider.PROVIDER_ID&&delete e.login,e):null}function Bs(e){if(!(e=Ns(e,ct.auth.PhoneAuthProvider.PROVIDER_ID)))return null;var t=e.whitelistedCountries,i=e.blacklistedCountries;if(void 0!==t&&(!Array.isArray(t)||0==t.length))throw Error("WhitelistedCountries must be a non-empty array.");if(void 0!==i&&!Array.isArray(i))throw Error("BlacklistedCountries must be an array.");if(t&&i)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!t&&!i)return ws;if(e=[],t){i={};for(var n=0;n<t.length;n++)for(var r=bs(t[n]),a=0;a<r.length;a++)i[r[a].c]=r[a];for(var s in i)i.hasOwnProperty(s)&&e.push(i[s])}else{for(s={},t=0;t<i.length;t++)for(r=bs(i[t]),n=0;n<r.length;n++)s[r[n].c]=r[n];for(r=0;r<ws.length;r++)null!==s&&ws[r].c in s||e.push(ws[r])}return e}function Hs(e){return us(e.a,"queryParameterForWidgetMode")}function Vs(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Qr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){sr(t)}}return null}function Ws(e){var t=e.a.get("tosUrl")||null,i=e.a.get("privacyPolicyUrl")||null;if(i&&!t&&Qr("Term of Service URL is missing, the link will not be displayed."),t&&i){if("function"==typeof i)return i;if("string"==typeof i)return function(){sr(i)}}return null}function Gs(e){return!(e=Ns(e,ct.auth.EmailAuthProvider.PROVIDER_ID))||void 0===e.requireDisplayName||!!e.requireDisplayName}function zs(e){return!(!(e=Ns(e,ct.auth.EmailAuthProvider.PROVIDER_ID))||e.signInMethod!==ct.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function Ks(e){var t=!!e.a.get("immediateFederatedRedirect"),i=Os(e);return e=qs(e),t&&1==i.length&&!V(Cs,i[0])&&e==ao}function qs(e){for(var t in e=e.a.get("signInFlow"),so)if(so[t]==e)return so[t];return ao}function $s(e){return Xs(e).signInSuccess||null}function Ys(e){return Xs(e).signInSuccessWithAuthResult||null}function Js(e){return Xs(e).signInFailure||null}function Xs(e){return e.a.get("callbacks")||{}}var Zs,Qs,eo,to,io="googleyolo",no="none",ro={nc:io,NONE:no},ao="redirect",so={qc:"popup",rc:ao},oo={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},co=["anonymous"],uo=["sitekey","tabindex","callback","expired-callback"],lo={};function ho(e,t,i,n){lo[e].apply(null,Array.prototype.slice.call(arguments,1))}function fo(e){return e.classList?e.classList:f(e=e.className)&&e.match(/\S+/g)||[]}function po(e,t){return e.classList?e.classList.contains(t):V(fo(e),t)}function mo(e,t){e.classList?e.classList.add(t):po(e,t)||(e.className+=0<e.className.length?" "+t:t)}function go(e,t){e.classList?e.classList.remove(t):po(e,t)&&(e.className=j(fo(e),(function(e){return e!=t})).join(" "))}function vo(e){var t=e.type;switch(f(t)&&t.toLowerCase()){case"checkbox":case"radio":return e.checked?e.value:null;case"select-one":return 0<=(t=e.selectedIndex)?e.options[t].value:null;case"select-multiple":t=[];for(var i,n=0;i=e.options[n];n++)i.selected&&t.push(i.value);return t.length?t:null;default:return null!=e.value?e.value:null}}function bo(e,t){var i=e.type;switch(f(i)&&i.toLowerCase()){case"checkbox":case"radio":e.checked=t;break;case"select-one":if(e.selectedIndex=-1,f(t))for(var n=0;i=e.options[n];n++)if(i.value==t){i.selected=!0;break}break;case"select-multiple":for(f(t)&&(t=[t]),n=0;i=e.options[n];n++)if(i.selected=!1,t)for(var r,a=0;r=t[a];a++)i.value==r&&(i.selected=!0);break;default:e.value=null!=t?t:""}}function yo(e,t,i,n,r,a){if(nt&&!ft("525"))return!0;if(at&&r)return wo(e);if(r&&!n)return!1;if(!it&&("number"==typeof t&&(t=_o(t)),(!i||at)&&(17==t||18==t||at&&91==t)||at&&16==t&&(n||a)))return!1;if((nt||et)&&n&&i)switch(e){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(Qe&&n&&t==e)return!1;switch(e){case 13:return!it||!a&&!r&&!(i&&n);case 27:return!(nt||et||it)}return(!it||!(n||r||a))&&wo(e)}function wo(e){if(48<=e&&57>=e||96<=e&&106>=e||65<=e&&90>=e||(nt||et)&&0==e)return!0;switch(e){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return it;default:return!1}}function _o(e){if(it)e=function(e){switch(e){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return e}}(e);else if(at&&nt&&93===e)e=91;return e}function Io(e){gn.call(this),this.a=e,rn(e,"keydown",this.g,!1,this),rn(e,"click",this.h,!1,this)}function Eo(e,t){var i=new So(t);if(vn(e,i)){i=new ko(t);try{vn(e,i)}finally{t.stopPropagation()}}}function ko(e){Ki.call(this,e.a),this.type="action"}function So(e){Ki.call(this,e.a),this.type="beforeaction"}function Co(e){gn.call(this),this.a=e,e=Qe?"focusout":"blur",this.g=rn(this.a,Qe?"focusin":"focus",this,!Qe),this.h=rn(this.a,e,this,!Qe)}function To(e,t){gn.call(this),this.g=e||1,this.a=t||d,this.h=T(this.gc,this),this.j=N()}function Ao(e){e.Ka=!1,e.aa&&(e.a.clearTimeout(e.aa),e.aa=null)}function Po(e){Mi.call(this),this.g=e,this.a={}}L(Io,gn),Io.prototype.g=function(e){(13==e.keyCode||nt&&3==e.keyCode)&&Eo(this,e)},Io.prototype.h=function(e){Eo(this,e)},Io.prototype.o=function(){Io.K.o.call(this),on(this.a,"keydown",this.g,!1,this),on(this.a,"click",this.h,!1,this),delete this.a},L(ko,Ki),L(So,Ki),L(Co,gn),Co.prototype.handleEvent=function(e){var t=new Ki(e.a);t.type="focusin"==e.type||"focus"==e.type?"focusin":"focusout",vn(this,t)},Co.prototype.o=function(){Co.K.o.call(this),cn(this.g),cn(this.h),delete this.a},L(To,gn),(t=To.prototype).Ka=!1,t.aa=null,t.gc=function(){if(this.Ka){var e=N()-this.j;0<e&&e<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-e):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),vn(this,"tick"),this.Ka&&(Ao(this),this.start()))}},t.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=N())},t.o=function(){To.K.o.call(this),Ao(this),delete this.a},L(Po,Mi);var Ro=[];function No(e,t,i,n){y(i)||(i&&(Ro[0]=i.toString()),i=Ro);for(var r=0;r<i.length;r++){var a=rn(t,i[r],n||e.handleEvent,!1,e.g||e);if(!a)break;e.a[a.key]=a}}function Oo(e){ae(e.a,(function(e,t){this.a.hasOwnProperty(t)&&cn(e)}),e),e.a={}}function Lo(e){gn.call(this),this.a=null,this.g=e,e=Qe||et||nt&&!ft("531")&&"TEXTAREA"==e.tagName,this.h=new Po(this),No(this.h,this.g,e?["keydown","paste","cut","drop","input"]:"input",this)}function Do(e){null!=e.a&&(d.clearTimeout(e.a),e.a=null)}function xo(e){return(e=new Ki(e.a)).type="input",e}function Mo(e,t){gn.call(this),e&&(this.Oa&&Ho(this),this.qa=e,this.Na=rn(this.qa,"keypress",this,t),this.Ya=rn(this.qa,"keydown",this.Jb,t,this),this.Oa=rn(this.qa,"keyup",this.Kb,t,this))}Po.prototype.o=function(){Po.K.o.call(this),Oo(this)},Po.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},L(Lo,gn),Lo.prototype.handleEvent=function(e){if("input"==e.type)Qe&&ft(10)&&0==e.keyCode&&0==e.j||(Do(this),vn(this,xo(e)));else if("keydown"!=e.type||function(e){if(e.altKey&&!e.ctrlKey||e.metaKey||112<=e.keyCode&&123>=e.keyCode)return!1;if(wo(e.keyCode))return!0;switch(e.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!it;default:return 166>e.keyCode||183<e.keyCode}}(e)){var t="keydown"==e.type?this.g.value:null;Qe&&229==e.keyCode&&(t=null);var i=xo(e);Do(this),this.a=function(e,t){if(_(e))t&&(e=T(e,t));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=T(e.handleEvent,e)}return 2147483647<Number(0)?-1:d.setTimeout(e,0)}((function(){this.a=null,this.g.value!=t&&vn(this,i)}),this)}},Lo.prototype.o=function(){Lo.K.o.call(this),this.h.m(),Do(this),delete this.g},L(Mo,gn),(t=Mo.prototype).qa=null,t.Na=null,t.Ya=null,t.Oa=null,t.R=-1,t.X=-1,t.Ua=!1;var Uo={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Fo={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},jo=!nt||ft("525"),Bo=at&&it;function Ho(e){e.Na&&(cn(e.Na),cn(e.Ya),cn(e.Oa),e.Na=null,e.Ya=null,e.Oa=null),e.qa=null,e.R=-1,e.X=-1}function Vo(e,t,i,n){Ki.call(this,n),this.type="key",this.keyCode=e,this.j=t,this.repeat=i}function Wo(e,t,i,n){this.top=e,this.right=t,this.bottom=i,this.left=n}function Go(e,t){var i=$t(e);return i.defaultView&&i.defaultView.getComputedStyle&&(e=i.defaultView.getComputedStyle(e,null))&&(e[t]||e.getPropertyValue(t))||""}function zo(e){try{var t=e.getBoundingClientRect()}catch(e){return{left:0,top:0,right:0,bottom:0}}return Qe&&e.ownerDocument.body&&(e=e.ownerDocument,t.left-=e.documentElement.clientLeft+e.body.clientLeft,t.top-=e.documentElement.clientTop+e.body.clientTop),t}function Ko(e){var t=$t(e),i=new jt(0,0),n=t?$t(t):document;return e==(n=!Qe||9<=Number(dt)||"CSS1Compat"==Ht(n).a.compatMode?n.documentElement:n.body)||(e=zo(e),t=Kt(n=Ht(t).a),n=n.parentWindow||n.defaultView,t=Qe&&ft("10")&&n.pageYOffset!=t.scrollTop?new jt(t.scrollLeft,t.scrollTop):new jt(n.pageXOffset||t.scrollLeft,n.pageYOffset||t.scrollTop),i.a=e.left+t.a,i.g=e.top+t.g),i}(t=Mo.prototype).Jb=function(e){(nt||et)&&(17==this.R&&!e.ctrlKey||18==this.R&&!e.altKey||at&&91==this.R&&!e.metaKey)&&(this.X=this.R=-1),-1==this.R&&(e.ctrlKey&&17!=e.keyCode?this.R=17:e.altKey&&18!=e.keyCode?this.R=18:e.metaKey&&91!=e.keyCode&&(this.R=91)),jo&&!yo(e.keyCode,this.R,e.shiftKey,e.ctrlKey,e.altKey,e.metaKey)?this.handleEvent(e):(this.X=_o(e.keyCode),Bo&&(this.Ua=e.altKey))},t.Kb=function(e){this.X=this.R=-1,this.Ua=e.altKey},t.handleEvent=function(e){var t=e.a,i=t.altKey;if(Qe&&"keypress"==e.type)var n=this.X,r=13!=n&&27!=n?t.keyCode:0;else(nt||et)&&"keypress"==e.type?(n=this.X,r=0<=t.charCode&&63232>t.charCode&&wo(n)?t.charCode:0):Ze&&!nt?r=wo(n=this.X)?t.keyCode:0:("keypress"==e.type?(Bo&&(i=this.Ua),t.keyCode==t.charCode?32>t.keyCode?(n=t.keyCode,r=0):(n=this.X,r=t.charCode):(n=t.keyCode||this.X,r=t.charCode||0)):(n=t.keyCode||this.X,r=t.charCode||0),at&&63==r&&224==n&&(n=191));var a=n=_o(n);n?63232<=n&&n in Uo?a=Uo[n]:25==n&&e.shiftKey&&(a=9):t.keyIdentifier&&t.keyIdentifier in Fo&&(a=Fo[t.keyIdentifier]),it&&jo&&"keypress"==e.type&&!yo(a,this.R,e.shiftKey,e.ctrlKey,i,e.metaKey)||(e=a==this.R,this.R=a,(t=new Vo(a,r,e,t)).altKey=i,vn(this,t))},t.N=function(){return this.qa},t.o=function(){Mo.K.o.call(this),Ho(this)},L(Vo,Ki),Wo.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},Wo.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},Wo.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},Wo.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};var qo={thin:2,medium:4,thick:6};function $o(e,t){if("none"==(e.currentStyle?e.currentStyle[t+"Style"]:null))return 0;var i=e.currentStyle?e.currentStyle[t+"Width"]:null;if(i in qo)e=qo[i];else if(/^\d+px?$/.test(i))e=parseInt(i,10);else{t=e.style.left;var n=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,e.style.left=i,i=e.style.pixelLeft,e.style.left=t,e.runtimeStyle.left=n,e=+i}return e}function Yo(){}function Jo(e){gn.call(this),this.s=e||Ht(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}function Xo(e,t){return e.g?Wt(t,e.g||e.s.a):null}function Zo(e){return e.L||(e.L=new Po(e)),e.L}function Qo(e,t){e.Ea&&F(e.Ea,t,void 0)}function ec(e,t){var i=Jt(e,"firebaseui-textfield");t?(go(e,"firebaseui-input-invalid"),mo(e,"firebaseui-input"),i&&go(i,"firebaseui-textfield-invalid")):(go(e,"firebaseui-input"),mo(e,"firebaseui-input-invalid"),i&&mo(i,"firebaseui-textfield-invalid"))}function tc(e,t,i){ji(e,A(Bi,t=new Lo(t))),No(Zo(e),t,"input",i)}function ic(e,t,i){ji(e,A(Bi,t=new Mo(t))),No(Zo(e),t,"key",(function(e){13==e.keyCode&&(e.stopPropagation(),e.preventDefault(),i(e))}))}function nc(e,t,i){ji(e,A(Bi,t=new Io(t))),No(Zo(e),t,"action",(function(e){e.stopPropagation(),e.preventDefault(),i(e)}))}function rc(e){mo(e,"firebaseui-hidden")}function ac(e,t){t&&Yt(e,t),go(e,"firebaseui-hidden")}function sc(e){return!po(e,"firebaseui-hidden")&&"none"!=e.style.display}function oc(e){var t=(e=e||{}).email,i=e.disabled,n='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return n=e.wc?n+"Enter new email address":n+"Email",n+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+mi(null!=t?t:"")+'"'+(i?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',di(n)}function cc(e){var t='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return t=(e=(e=e||{}).label)?t+oi(e):t+"Next",di(t+"</button>")}function uc(){var e=""+cc({label:fi("Sign In")});return di(e)}function lc(){var e=""+cc({label:fi("Save")});return di(e)}function dc(){var e=""+cc({label:fi("Continue")});return di(e)}function hc(e){var t='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return t=(e=(e=e||{}).label)?t+oi(e):t+"Choose password",di(t+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function fc(){var e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return di((e={}.current?e+"Current password":e+"Password")+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function pc(){return di('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function mc(e){var t='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return t=(e=(e=e||{}).label)?t+oi(e):t+"Cancel",di(t+"</button>")}function gc(e){var t="";return e.F&&e.D&&(t+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),di(t)}function vc(e){var t="";return e.F&&e.D&&(t+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),di(t)}function bc(e){return e='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+oi(e.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',di(e)}function yc(e){var t=e.content;return e=e.Ab,di('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(e?" "+mi(e):"")+'">'+oi(t)+"</dialog>")}function wc(e){var t=e.message;return di(yc({content:pi('<div class="firebaseui-dialog-icon-wrapper"><div class="'+mi(e.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+oi(t)+"</div>")}))}function _c(e){for(var t='<div class="firebaseui-list-box-actions">',i=(e=e.items).length,n=0;n<i;n++){var r=e[n];t+='<button type="button" data-listboxid="'+mi(r.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(r.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+mi(r.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+oi(r.label)+"</div></button>"}return t=""+yc({Ab:fi("firebaseui-list-box-dialog"),content:pi(t+"</div>")}),di(t)}function Ic(e){return di((e=e||{}).tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}function Ec(e,t){return li((e=(e=e||{}).ga).S?e.S:t.hb[e.providerId]?""+t.hb[e.providerId]:e.providerId&&0==e.providerId.indexOf("saml.")||e.providerId&&0==e.providerId.indexOf("oidc.")?e.providerId.substring(5):""+e.providerId)}function kc(e){Tc(e,"upgradeElement")}function Sc(e){Tc(e,"downgradeElements")}v(Yo),Yo.prototype.a=0,L(Jo,gn),(t=Jo.prototype).Lb=Yo.Xa(),t.N=function(){return this.g},t.Za=function(e){if(this.Y&&this.Y!=e)throw Error("Method not supported");Jo.K.Za.call(this,e)},t.kb=function(){this.g=this.s.a.createElement("DIV")},t.render=function(e){if(this.na)throw Error("Component already rendered");this.g||this.kb(),e?e.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},t.v=function(){this.na=!0,Qo(this,(function(e){!e.na&&e.N()&&e.v()}))},t.ya=function(){Qo(this,(function(e){e.na&&e.ya()})),this.L&&Oo(this.L),this.na=!1},t.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Qo(this,(function(e){e.m()})),this.g&&qt(this.g),this.Y=this.g=this.oa=this.Ea=null,Jo.K.o.call(this)},t.removeChild=function(e,t){if(e){var i=f(e)?e:e.cb||(e.cb=":"+(e.Lb.a++).toString(36));if(this.oa&&i?e=(null!==(e=this.oa)&&i in e?e[i]:void 0)||null:e=null,i&&e){var n=this.oa;if(i in n&&delete n[i],W(this.Ea,e),t&&(e.ya(),e.g&&qt(e.g)),null==(t=e))throw Error("Unable to set parent component");t.Y=null,Jo.K.Za.call(t,null)}}if(!e)throw Error("Child is not in parent component");return e},bc.a="firebaseui.auth.soy2.element.infoBar",wc.a="firebaseui.auth.soy2.element.progressDialog",_c.a="firebaseui.auth.soy2.element.listBoxDialog",Ic.a="firebaseui.auth.soy2.element.busyIndicator";var Cc=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function Tc(e,t){e&&window.componentHandler&&window.componentHandler[t]&&Cc.forEach((function(i){po(e,i)&&window.componentHandler[t](e),F(Vt(i,e),(function(e){window.componentHandler[t](e)}))}))}function Ac(e,t,i){if(Pc.call(this),document.body.appendChild(e),e.showModal||window.dialogPolyfill.registerDialog(e),e.showModal(),kc(e),t&&nc(this,e,(function(t){var i=e.getBoundingClientRect();(t.clientX<i.left||i.left+i.width<t.clientX||t.clientY<i.top||i.top+i.height<t.clientY)&&Pc.call(this)})),!i){var n=this.N().parentElement||this.N().parentNode;if(n){var r=this;this.da=function(){if(e.open){var t=e.getBoundingClientRect().height,i=n.getBoundingClientRect().height,a=n.getBoundingClientRect().top-document.body.getBoundingClientRect().top,s=n.getBoundingClientRect().left-document.body.getBoundingClientRect().left,o=e.getBoundingClientRect().width,c=n.getBoundingClientRect().width;e.style.top=(a+(i-t)/2).toString()+"px",t=s+(c-o)/2,e.style.left=t.toString()+"px",e.style.right=(document.body.getBoundingClientRect().width-t-o).toString()+"px"}else window.removeEventListener("resize",r.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function Pc(){var e=Rc.call(this);e&&(Sc(e),e.open&&e.close(),qt(e),this.da&&window.removeEventListener("resize",this.da))}function Rc(){return Wt("firebaseui-id-dialog")}function Nc(){qt(Oc.call(this))}function Oc(){return Xo(this,"firebaseui-id-info-bar")}function Lc(){return Xo(this,"firebaseui-id-dismiss-info-bar")}var Dc={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function xc(e,t,i){for(var n in zi.call(this,e,t),i)this[n]=i[n]}function Mc(e,t,i,n,r){Jo.call(this,i),this.fb=e,this.eb=t,this.Fa=!1,this.Ga=n||null,this.A=this.ca=null,this.Z=se(Dc),ce(this.Z,r||{})}function Uc(e){return e.N().parentElement||e.N().parentNode}function Fc(e,t,i){ic(e,t,(function(){i.focus()}))}function jc(e,t,i){ic(e,t,(function(){i()}))}function Bc(e,t,i){t=(e=e||{}).Va;var n=e.ia;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+oc(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?mc(null):"")+cc(null)+'</div></div><div class="firebaseui-card-footer">'+(n?vc(i):gc(i))+"</div></form></div>",di(e)}function Hc(e,t,i){return t=(e=e||{}).ia,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+oc(e)+fc()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+pc()+'</div><div class="firebaseui-form-actions">'+uc()+'</div></div><div class="firebaseui-card-footer">'+(t?vc(i):gc(i))+"</div></form></div>",di(e)}function Vc(e,t,i){var n=(e=e||{}).Tb;t=e.Ta;var r=e.ia,a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+oc(e);return n?(e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+mi(null!=(e=(e=e||{}).name)?e:"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',e=di(e)):e="",i=a+e+hc(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?mc(null):"")+lc()+'</div></div><div class="firebaseui-card-footer">'+(r?vc(i):gc(i))+"</div></form></div>",di(i)}function Wc(e,t,i){return t=(e=e||{}).Ta,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+oc(e)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?mc(null):"")+cc({label:fi("Send")})+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",di(e)}function Gc(e,t,i){t=e.G;var n="";return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Follow the instructions sent to <strong>"+oi(e.email)+"</strong> to recover your password")+'</p></div><div class="firebaseui-card-actions">',t&&(n+='<div class="firebaseui-form-actions">'+cc({label:fi("Done")})+"</div>"),n+='</div><div class="firebaseui-card-footer">'+gc(i)+"</div></div>",di(n)}function zc(e,t,i){return di('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+Ic(null)+"</div></div>")}function Kc(e,t,i){return di('<div class="firebaseui-container firebaseui-id-page-spinner">'+Ic({tb:!0})+"</div>")}function qc(){return di('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}function $c(e,t,i){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+(e="A sign-in email with additional instructions was sent to <strong>"+oi(e.email)+"</strong>. Check your email to complete sign-in.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+di('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>')+'</div><div class="firebaseui-form-actions">'+mc({label:fi("Back")})+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",di(t)}function Yc(e,t,i){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+di('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+mc({label:fi("Back")})+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",di(e)}function Jc(e,t,i){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+oc(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mc(null)+cc(null)+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",di(e)}function Xc(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mc({label:fi("Dismiss")})+"</div></div></div>";return di(e)}function Zc(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mc({label:fi("Dismiss")})+"</div></div></div>";return di(e)}function Qc(e,t,i){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(e="You’ve already used <strong>"+oi(e.email)+"</strong> to sign in. Enter your password for that account.")+"</p>"+fc()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+pc()+'</div><div class="firebaseui-form-actions">'+uc()+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",di(t)}function eu(e,t,i){var n=e.email;return t="",e=fi(e=""+Ec(e,i)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+(n="You’ve already used <strong>"+oi(n)+"</strong>. You can connect your <strong>"+oi(e)+"</strong> account with <strong>"+oi(n)+"</strong> by signing in with email link below.")+'<p class="firebaseui-text firebaseui-text-justify">'+(e="For this flow to successfully connect your "+oi(e)+" account with this email, you have to open the link on the same device or browser.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+uc()+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",di(t)}function tu(e,t,i){t="";var n=""+Ec(e,i);return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+(e="You originally intended to connect <strong>"+oi(n=fi(n))+"</strong> to your email account but have opened the link on a different device where you are not signed in.")+'</p><p class="firebaseui-text firebaseui-text-justify">'+(n="If you still want to connect your <strong>"+oi(n)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+dc()+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",di(t)}function iu(e,t,i){var n=e.email;return t="",e=fi(e=""+Ec(e,i)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(n="You’ve already used <strong>"+oi(n)+"</strong>. Sign in with "+oi(e)+" to continue.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+cc({label:fi("Sign in with "+e)})+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",di(t)}function nu(e,t,i){var n=(e=e||{}).kc;t=e.yb,e=e.Eb;var r='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return n?r+=n="<strong>"+oi(n)+"</strong> is not authorized to view the requested page.":r+="User is not authorized to view the requested page.",r+="</p>",t&&(r+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+(t="Please contact <strong>"+oi(t)+"</strong> for authorization.")+"</p>"),r+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',e&&(r+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),r+='</div><div class="firebaseui-form-actions">'+mc({label:fi("Back")})+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",di(r)}function ru(e,t,i){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="To continue sign in with <strong>"+oi(e.email)+"</strong> on this device, you have to recover the password.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mc(null)+cc({label:fi("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",di(t)}function au(e){var t="";return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+('<p class="firebaseui-text">for <strong>'+oi(e.email)+"</strong></p>")+hc(function(e){function t(){}var i={label:fi("New password")};for(var n in t.prototype=e,e=new t,i)e[n]=i[n];return e}(e))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+lc()+"</div></div></form></div>",di(t)}function su(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",di(e)}function ou(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",di(e)}function cu(e){var t=e.G,i="";return i+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Your sign-in email address has been changed back to <strong>"+oi(e.email)+"</strong>.")+'</p><p class="firebaseui-text">If you didn’t ask to change your sign-in email, it’s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></form></div>",di(i)}function uu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can’t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",di(e)}function lu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",di(e)}function du(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",di(e)}function hu(e){var t=e.G,i="";return i+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="You can now sign in with your new email <strong>"+oi(e.email)+"</strong>.")+'</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",di(i)}function fu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",di(e)}function pu(e){var t=e.factorId,i=e.phoneNumber;e=e.G;var n='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';if("phone"===t)n+=t="The <strong>"+oi(t)+" "+oi(i)+"</strong> was removed as a second authentication step.";else n+="The device or app was removed as a second authentication step.";return n+='</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(e?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></form></div>",di(n)}function mu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",di(e)}function gu(e){var t=e.zb;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+oi(e.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',t&&(e+=cc({label:fi("Retry")})),di(e+"</div></div></div>")}function vu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+oi(e.errorMessage)+"</p></div></div>",di(e)}function bu(e,t,i){var n=e.Qb;return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+(e="Continue with "+oi(e.jc)+"?")+'</h2><p class="firebaseui-text">'+(n="You originally wanted to sign in with "+oi(n))+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mc(null)+cc({label:fi("Continue")})+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",di(t)}function yu(e,t,i){var n='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';t=(e=e.Sb).length;for(var r=0;r<t;r++){var a={ga:e[r]},s=i,o=(a=a||{}).ga,c=a,u="";switch((c=c||{}).ga.providerId){case"google.com":u+="firebaseui-idp-google";break;case"github.com":u+="firebaseui-idp-github";break;case"facebook.com":u+="firebaseui-idp-facebook";break;case"twitter.com":u+="firebaseui-idp-twitter";break;case"phone":u+="firebaseui-idp-phone";break;case"anonymous":u+="firebaseui-idp-anonymous";break;case"password":u+="firebaseui-idp-password";break;default:u+="firebaseui-idp-generic"}c=(c='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+mi(li(u))+' firebaseui-id-idp-button" data-provider-id="'+mi(o.providerId)+'" style="background-color:')+mi(vi(li((u=(u=(u=a)||{}).ga).ta?u.ta:s.wa[u.providerId]?""+s.wa[u.providerId]:0==u.providerId.indexOf("saml.")?""+s.wa.saml:0==u.providerId.indexOf("oidc.")?""+s.wa.oidc:""+s.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var l=a;u=s,l=(l=l||{}).ga,u=hi(l.za?gi(l.za):u.xa[l.providerId]?gi(u.xa[l.providerId]):0==l.providerId.indexOf("saml.")?gi(u.xa.saml):0==l.providerId.indexOf("oidc.")?gi(u.xa.oidc):gi(u.xa.password)),c=c+mi(gi(u))+'"></span>',"password"==o.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=oi(o.V):o.S?c+=a="Sign in with "+oi(Ec(a,s)):c+="Sign in with email",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=o.S?c+oi(o.S):c+"Email",c+="</span>"):"phone"==o.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=oi(o.V):o.S?c+=a="Sign in with "+oi(Ec(a,s)):c+="Sign in with phone",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=o.S?c+oi(o.S):c+"Phone",c+="</span>"):"anonymous"==o.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=oi(o.V):o.S?c+=a="Sign in with "+oi(Ec(a,s)):c+="Continue as guest",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=o.S?c+oi(o.S):c+"Guest",c+="</span>"):(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=oi(o.V):c+=u="Sign in with "+oi(Ec(a,s)),c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(o.S?oi(o.S):oi(Ec(a,s)))+"</span>"),n+='<li class="firebaseui-list-item">'+(o=di(c+"</button>"))+"</li>"}return n+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+vc(i)+"</div></div>",di(n)}function wu(e,t,i){var n,r=(e=e||{}).Gb,a=e.Va;return t=e.ia,e='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+mi(null!=(e=(e=e||{}).Aa)?e:"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',n=(e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+di(e))+(n=r?di('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):"")+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(a?mc(null):"")+cc({label:fi("Verify")})+'</div></div><div class="firebaseui-card-footer">',t?(t='<p class="firebaseui-tos firebaseui-phone-tos">',t=i.F&&i.D?t+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':t+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",i=di(t+"</p>")):i=di('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+gc(i),di(n+i+"</div></form></div>")}function _u(e,t,i){var n="";return e='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+oi(t=(e=e||{}).phoneNumber)+"</a>",oi(t),t=n,i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+"</p>"+(n=di('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mc(null)+cc({label:fi("Continue")})+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form>",e=di('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),di(t+(i+e+"</div>"))}function Iu(){return di('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}function Eu(e,t,i){var n='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';t=(e=e.ec).length;for(var r=0;r<t;r++){var a=e[r],s="",o=oi(a.displayName),c=a.tenantId?a.tenantId:"top-level-project";s+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+mi(c=fi(c))+' firebaseui-id-tenant-selection-button"'+(a.tenantId?'data-tenant-id="'+mi(a.tenantId)+'"':"")+'style="background-color:'+mi(vi(a.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+mi(gi(a.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?s+=oi(a.V):s+=a="Sign in to "+oi(a.displayName),n+='<li class="firebaseui-list-item">'+(s=di(s+'</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+o+"</span></button>"))+"</li>"}return n+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+vc(i)+"</div></div>",di(n)}function ku(e,t,i){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+oc(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+cc(null)+'</div></div><div class="firebaseui-card-footer">'+vc(i)+"</div></form></div>",di(e)}function Su(){return Xo(this,"firebaseui-id-submit")}function Cu(){return Xo(this,"firebaseui-id-secondary-link")}function Tu(e,t){nc(this,Su.call(this),(function(t){e(t)}));var i=Cu.call(this);i&&t&&nc(this,i,(function(e){t(e)}))}function Au(){return Xo(this,"firebaseui-id-password")}function Pu(){return Xo(this,"firebaseui-id-password-error")}function Ru(){var e=Au.call(this),t=Pu.call(this);tc(this,e,(function(){sc(t)&&(ec(e,!0),rc(t))}))}function Nu(){var e=Au.call(this),t=Pu.call(this);return vo(e)?(ec(e,!0),rc(t),t=!0):(ec(e,!1),ac(t,li("Enter your password").toString()),t=!1),t?vo(e):null}function Ou(e,t,i,n,r,a){Mc.call(this,Qc,{email:e},a,"passwordLinking",{F:n,D:r}),this.w=t,this.H=i}L(xc,zi),L(Mc,Jo),(t=Mc.prototype).kb=function(){var e=ni(this.fb,this.eb,this.Z,this.s);kc(e),this.g=e},t.v=function(){if(Mc.K.v.call(this),_n(Uc(this),new xc("pageEnter",Uc(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var e=this.Z.F;nc(this,this.bb(),(function(){e()}))}if(this.ab()&&this.Z.D){var t=this.Z.D;nc(this,this.ab(),(function(){t()}))}},t.ya=function(){_n(Uc(this),new xc("pageExit",Uc(this),{pageId:this.Ga})),Mc.K.ya.call(this)},t.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,Sc(this.N()),Mc.K.o.call(this)},t.I=function(e,t,i,n){function r(){if(a.T)return null;a.Fa=!1,window.clearTimeout(a.ca),a.ca=null,a.A&&(Sc(a.A),qt(a.A),a.A=null)}var a=this;return a.Fa?null:(function(e){e.Fa=!0;var t=po(e.N(),"firebaseui-use-spinner");e.ca=window.setTimeout((function(){e.N()&&null===e.A&&(e.A=ni(Ic,{tb:t},null,e.s),e.N().appendChild(e.A),kc(e.A))}),500)}(a),e.apply(null,t).then(i,n).then(r,r))},P(Mc.prototype,{a:function(e){Nc.call(this);var t=ni(bc,{message:e},null,this.s);this.N().appendChild(t),nc(this,Lc.call(this),(function(){qt(t)}))},yc:Nc,Ac:Oc,zc:Lc,$:function(e,t){e=ni(wc,{Ma:e,message:t},null,this.s),Ac.call(this,e)},h:Pc,Cb:Rc,Cc:function(){return Xo(this,"firebaseui-tos")},bb:function(){return Xo(this,"firebaseui-tos-link")},ab:function(){return Xo(this,"firebaseui-pp-link")},Dc:function(){return Xo(this,"firebaseui-tos-list")}}),Bc.a="firebaseui.auth.soy2.page.signIn",Hc.a="firebaseui.auth.soy2.page.passwordSignIn",Vc.a="firebaseui.auth.soy2.page.passwordSignUp",Wc.a="firebaseui.auth.soy2.page.passwordRecovery",Gc.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent",zc.a="firebaseui.auth.soy2.page.callback",Kc.a="firebaseui.auth.soy2.page.spinner",qc.a="firebaseui.auth.soy2.page.blank",$c.a="firebaseui.auth.soy2.page.emailLinkSignInSent",Yc.a="firebaseui.auth.soy2.page.emailNotReceived",Jc.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation",Xc.a="firebaseui.auth.soy2.page.differentDeviceError",Zc.a="firebaseui.auth.soy2.page.anonymousUserMismatch",Qc.a="firebaseui.auth.soy2.page.passwordLinking",eu.a="firebaseui.auth.soy2.page.emailLinkSignInLinking",tu.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice",iu.a="firebaseui.auth.soy2.page.federatedLinking",nu.a="firebaseui.auth.soy2.page.unauthorizedUser",ru.a="firebaseui.auth.soy2.page.unsupportedProvider",au.a="firebaseui.auth.soy2.page.passwordReset",su.a="firebaseui.auth.soy2.page.passwordResetSuccess",ou.a="firebaseui.auth.soy2.page.passwordResetFailure",cu.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess",uu.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure",lu.a="firebaseui.auth.soy2.page.emailVerificationSuccess",du.a="firebaseui.auth.soy2.page.emailVerificationFailure",hu.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess",fu.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure",pu.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess",mu.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure",gu.a="firebaseui.auth.soy2.page.recoverableError",vu.a="firebaseui.auth.soy2.page.unrecoverableError",bu.a="firebaseui.auth.soy2.page.emailMismatch",yu.a="firebaseui.auth.soy2.page.providerSignIn",wu.a="firebaseui.auth.soy2.page.phoneSignInStart",_u.a="firebaseui.auth.soy2.page.phoneSignInFinish",Iu.a="firebaseui.auth.soy2.page.signOut",Eu.a="firebaseui.auth.soy2.page.selectTenant",ku.a="firebaseui.auth.soy2.page.providerMatchByEmail",o(Ou,Mc),Ou.prototype.v=function(){this.P(),this.M(this.w,this.H),jc(this,this.i(),this.w),this.i().focus(),Mc.prototype.v.call(this)},Ou.prototype.o=function(){this.w=null,Mc.prototype.o.call(this)},Ou.prototype.j=function(){return vo(Xo(this,"firebaseui-id-email"))},P(Ou.prototype,{i:Au,B:Pu,P:Ru,u:Nu,ea:Su,ba:Cu,M:Tu});var Lu=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function Du(){return Xo(this,"firebaseui-id-email")}function xu(){return Xo(this,"firebaseui-id-email-error")}function Mu(e){var t=Du.call(this),i=xu.call(this);tc(this,t,(function(){sc(i)&&(ec(t,!0),rc(i))})),e&&ic(this,t,(function(){e()}))}function Uu(){return Y(vo(Du.call(this))||"")}function Fu(){var e=Du.call(this),t=xu.call(this),i=vo(e)||"";return i?Lu.test(i)?(ec(e,!0),rc(t),t=!0):(ec(e,!1),ac(t,li("That email address isn't correct").toString()),t=!1):(ec(e,!1),ac(t,li("Enter your email address to continue").toString()),t=!1),t?Y(vo(e)):null}function ju(e,t,i,n,r,a,s){Mc.call(this,Hc,{email:i,ia:!!a},s,"passwordSignIn",{F:n,D:r}),this.w=e,this.H=t}function Bu(e,t,i,n,r,a){Mc.call(this,e,t,n,r||"notice",a),this.i=i||null}function Hu(e,t,i,n,r){Bu.call(this,Gc,{email:e,G:!!t},t,r,"passwordRecoveryEmailSent",{F:i,D:n})}function Vu(e,t){Bu.call(this,lu,{G:!!e},e,t,"emailVerificationSuccess")}function Wu(e,t){Bu.call(this,du,{G:!!e},e,t,"emailVerificationFailure")}function Gu(e,t,i){Bu.call(this,hu,{email:e,G:!!t},t,i,"verifyAndChangeEmailSuccess")}function zu(e,t){Bu.call(this,fu,{G:!!e},e,t,"verifyAndChangeEmailFailure")}function Ku(e,t){Bu.call(this,mu,{G:!!e},e,t,"revertSecondFactorAdditionFailure")}function qu(e){Bu.call(this,Iu,void 0,void 0,e,"signOut")}function $u(e,t){Bu.call(this,su,{G:!!e},e,t,"passwordResetSuccess")}function Yu(e,t){Bu.call(this,ou,{G:!!e},e,t,"passwordResetFailure")}function Ju(e,t){Bu.call(this,uu,{G:!!e},e,t,"emailChangeRevokeFailure")}function Xu(e,t,i){Bu.call(this,gu,{errorMessage:e,zb:!!t},t,i,"recoverableError")}function Zu(e,t){Bu.call(this,vu,{errorMessage:e},void 0,t,"unrecoverableError")}function Qu(e){if("auth/invalid-credential"===e.code&&e.message&&-1!==e.message.indexOf("error=consent_required"))return{code:"auth/user-cancelled"};if(e.message&&-1!==e.message.indexOf("HTTP Cloud Function returned an error:")){var t=JSON.parse(e.message.substring(e.message.indexOf("{"),e.message.lastIndexOf("}")+1));return{code:e.code,message:t&&t.error&&t.error.message||e.message}}return e}function el(e,t,i,n){function r(i){if(!i.name||"cancel"!=i.name){e:{var n=i.message;try{var r=((JSON.parse(n).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(r&&r.length){var a=!0;break e}}catch(e){}a=!1}if(a)i=Uc(t),t.m(),ol(e,i,void 0,li("Your sign-in session has expired. Please try again.").toString());else{if(a=i&&i.message||"",i.code){if("auth/email-already-in-use"==i.code||"auth/credential-already-in-use"==i.code)return;a=nl(i)}t.a(a)}}}if(Od(e),n)return tl(e,i),Kn();if(!i.credential)throw Error("No credential found!");if(!Id(e).currentUser&&!i.user)throw Error("User not logged in.");try{var a=function(e,t){return xd(e),Pd(e,(function(i){if(e.j&&!e.j.isAnonymous&&Ps(Dd(e))&&!Id(e).currentUser)return Ud(e).then((function(){return"password"==t.credential.providerId&&(t.credential=null),t}));if(i)return Ud(e).then((function(){return i.linkWithCredential(t.credential)})).then((function(e){return t.user=e.user,t.credential=e.credential,t.operationType=e.operationType,t.additionalUserInfo=e.additionalUserInfo,t}),(function(i){if(i&&"auth/email-already-in-use"==i.code&&i.email&&i.credential)throw i;return Fd(e,i,t.credential)}));if(!t.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return Ud(e).then((function(){return Ed(e).updateCurrentUser(t.user)})).then((function(){return t.user=Ed(e).currentUser,t.operationType="signIn",t.credential&&t.credential.providerId&&"password"==t.credential.providerId&&(t.credential=null),t}))}))}(e,i)}catch(e){return Yr(e.code||e.message,e),t.a(e.code||e.message),Kn()}return i=a.then((function(t){tl(e,t)}),r).then(void 0,r),Nd(e,a),Kn(i)}function tl(e,t){if(!t.user)throw Error("No user found");var i=Ys(Dd(e));if($s(Dd(e))&&i&&Qr("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),i){i=Ys(Dd(e));var n=ts(kd(e))||void 0;Qa(Ya,kd(e));var r=!1;ar()?(i&&!i(t,n)||(r=!0,Ft(window.opener.location,il(e,n))),i||window.close()):i&&!i(t,n)||(r=!0,Ft(window.location,il(e,n))),r||e.reset()}else{i=t.user,t=t.credential,n=$s(Dd(e)),r=ts(kd(e))||void 0,Qa(Ya,kd(e));var a=!1;ar()?(n&&!n(i,t,r)||(a=!0,Ft(window.opener.location,il(e,r))),n||window.close()):n&&!n(i,t,r)||(a=!0,Ft(window.location,il(e,r))),a||e.reset()}}function il(e,t){if(!(e=t||Dd(e).a.get("signInSuccessUrl")))throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return e}function nl(e){var t={code:e.code},i="";switch((t=t||{}).code){case"auth/email-already-in-use":i+="The email address is already used by another account";break;case"auth/requires-recent-login":case"auth/user-token-expired":i+=Li();break;case"auth/too-many-requests":i+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":i+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":i+="That email address doesn't match an existing account";break;case"auth/weak-password":i+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":i+="The email and password you entered don't match";break;case"auth/network-request-failed":i+="A network error has occurred";break;case"auth/invalid-phone-number":i+=Ai();break;case"auth/invalid-verification-code":i+=li("Wrong code. Try again.");break;case"auth/code-expired":i+="This code is no longer valid";break;case"auth/expired-action-code":i+="This code has expired.";break;case"auth/invalid-action-code":i+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(t=li(i).toString())return t;try{return JSON.parse(e.message),Yr("Internal error: "+e.message,void 0),Ri().toString()}catch(t){return e.message}}function rl(e,t,i,n){function r(){!function(e,t){es($a,{tenantId:e.a},t)}(new ca(e.h.tenantId||null),kd(e)),Nd(e,t.I(T(e.dc,e),[c],(function(){if("file:"===(window.location&&window.location.protocol))return Nd(e,yd(e).then((function(i){t.m(),Qa($a,kd(e)),ho("callback",e,o,Kn(i))}),a))}),s))}function a(n){if(Qa($a,kd(e)),!n.name||"cancel"!=n.name)switch(n=Qu(n),n.code){case"auth/popup-blocked":r();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":t.a(nl(n));break;case"auth/admin-restricted-operation":t.m(),Us(Dd(e))?ho("handleUnauthorizedUser",e,o,null,i):ho("callback",e,o,qn(n));break;default:t.m(),ho("callback",e,o,qn(n))}}function s(i){Qa($a,kd(e)),i.name&&"cancel"==i.name||(Yr("signInWithRedirect: "+i.code,void 0),i=nl(i),"blank"==t.Ga&&Ks(Dd(e))?(t.m(),ho("providerSignIn",e,o,i)):t.a(i))}var o=Uc(t),c=function(e,t,i){var n=Ts[t]&&ct.auth[Ts[t]]?new ct.auth[Ts[t]]:0==t.indexOf("saml.")?new ct.auth.SAMLAuthProvider(t):new ct.auth.OAuthProvider(t);if(!n)throw Error("Invalid Firebase Auth provider!");var r=Fs(Dd(e),t);if(n.addScope)for(var a=0;a<r.length;a++)n.addScope(r[a]);return r=js(Dd(e),t)||{},i&&(e=t==ct.auth.GoogleAuthProvider.PROVIDER_ID?"login_hint":t==ct.auth.GithubAuthProvider.PROVIDER_ID?"login":(e=Ls(Dd(e),t))&&e.Ob)&&(r[e]=i),n.setCustomParameters&&n.setCustomParameters(r),n}(e,i,n);qs(Dd(e))==ao?r():Nd(e,function(e,t){return xd(e),Pd(e,(function(i){return i&&!is(kd(e))?i.linkWithPopup(t).then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Fd(e,t)})):Id(e).signInWithPopup(t)}))}(e,c).then((function(i){t.m(),ho("callback",e,o,Kn(i))}),a))}function al(e){return 1==(e=Os(Dd(e))).length&&e[0]==ct.auth.EmailAuthProvider.PROVIDER_ID}function sl(e){return 1==(e=Os(Dd(e))).length&&e[0]==ct.auth.PhoneAuthProvider.PROVIDER_ID}function ol(e,t,i,n){al(e)?n?ho("signIn",e,t,i,n):dl(e,t,i):e&&sl(e)&&!n?ho("phoneSignInStart",e,t):e&&Ks(Dd(e))&&!n?ho("federatedRedirect",e,t,i):ho("providerSignIn",e,t,n,i)}function cl(e,t,i,n){var r=Uc(t);Nd(e,t.I(T(Id(e).fetchSignInMethodsForEmail,Id(e)),[i],(function(a){t.m(),ul(e,r,a,i,n)}),(function(e){e=nl(e),t.a(e)})))}function ul(e,t,i,n,r,a){i.length||zs(Dd(e))&&!zs(Dd(e))?V(i,ct.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?ho("passwordSignIn",e,t,n,a):1==i.length&&i[0]===ct.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?zs(Dd(e))?ho("sendEmailLinkForSignIn",e,t,n,(function(){ho("signIn",e,t)})):ho("unsupportedProvider",e,t,n):(i=Ss(i,Os(Dd(e))))?(rs(new aa(n),kd(e)),ho("federatedSignIn",e,t,n,i,r)):ho("unsupportedProvider",e,t,n):Ms(Dd(e))?ho("handleUnauthorizedUser",e,t,n,ct.auth.EmailAuthProvider.PROVIDER_ID):zs(Dd(e))?ho("sendEmailLinkForSignIn",e,t,n,(function(){ho("signIn",e,t)})):ho("passwordSignUp",e,t,n,void 0,void 0,a)}function ll(e,t,i,n,r,a){var s=Uc(t);Nd(e,t.I(T(e.Ib,e),[i,a],(function(){t.m(),ho("emailLinkSignInSent",e,s,i,n,a)}),r))}function dl(e,t,i){i?ho("prefilledEmailSignIn",e,t,i):ho("signIn",e,t)}function hl(){return ye(cr(),"oobCode")}function fl(){var e=ye(cr(),"continueUrl");return e?function(){Ft(window.location,e)}:null}function pl(e,t){Mc.call(this,Zc,void 0,t,"anonymousUserMismatch"),this.i=e}function ml(e){Mc.call(this,zc,void 0,e,"callback")}function gl(e,t,i){if(i.user){var n={user:i.user,credential:i.credential,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo},r=is(kd(e)),a=r&&r.g;if(a&&!function(e,t){if(t==e.email)return!0;if(e.providerData)for(var i=0;i<e.providerData.length;i++)if(t==e.providerData[i].email)return!0;return!1}(i.user,a))!function(e,t,i){var n=Uc(t);Nd(e,Ud(e).then((function(){t.m(),ho("emailMismatch",e,n,i)}),(function(e){e.name&&"cancel"==e.name||(e=nl(e.code),t.a(e))})))}(e,t,n);else{var s=r&&r.a;s?Nd(e,i.user.linkWithCredential(s).then((function(i){n={user:i.user,credential:s,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo},vl(e,t,n)}),(function(i){bl(e,t,i)}))):vl(e,t,n)}}else i=Uc(t),t.m(),ns(kd(e)),ol(e,i)}function vl(e,t,i){ns(kd(e)),el(e,t,i)}function bl(e,t,i){var n=Uc(t);ns(kd(e)),i=nl(i),t.m(),ol(e,n,void 0,i)}function yl(e,t,i,n){var r=Uc(t);Nd(e,Id(e).fetchSignInMethodsForEmail(i).then((function(a){t.m(),a.length?V(a,ct.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?ho("passwordLinking",e,r,i):1==a.length&&a[0]===ct.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?ho("emailLinkSignInLinking",e,r,i):(a=Ss(a,Os(Dd(e))))?ho("federatedLinking",e,r,i,a,n):(ns(kd(e)),ho("unsupportedProvider",e,r,i)):(ns(kd(e)),ho("passwordRecovery",e,r,i,!1,Ni().toString()))}),(function(i){bl(e,t,i)})))}function wl(e,t){Mc.call(this,Xc,void 0,t,"differentDeviceError"),this.i=e}function _l(e,t,i,n){Mc.call(this,cu,{email:e,G:!!i},n,"emailChangeRevoke"),this.l=t,this.i=i||null}function Il(){return Xo(this,"firebaseui-id-new-password")}function El(){return Xo(this,"firebaseui-id-password-toggle")}function kl(){this.Ra=!this.Ra;var e=El.call(this),t=Il.call(this);this.Ra?(t.type="text",mo(e,"firebaseui-input-toggle-off"),go(e,"firebaseui-input-toggle-on")):(t.type="password",mo(e,"firebaseui-input-toggle-on"),go(e,"firebaseui-input-toggle-off")),t.focus()}function Sl(){return Xo(this,"firebaseui-id-new-password-error")}function Cl(){this.Ra=!1;var e=Il.call(this);e.type="password";var t=Sl.call(this);tc(this,e,(function(){sc(t)&&(ec(e,!0),rc(t))}));var i=El.call(this);mo(i,"firebaseui-input-toggle-on"),go(i,"firebaseui-input-toggle-off"),function(e,t,i){ji(e,A(Bi,t=new Co(t))),No(Zo(e),t,"focusin",i)}(this,e,(function(){mo(i,"firebaseui-input-toggle-focus"),go(i,"firebaseui-input-toggle-blur")})),function(e,t,i){ji(e,A(Bi,t=new Co(t))),No(Zo(e),t,"focusout",i)}(this,e,(function(){mo(i,"firebaseui-input-toggle-blur"),go(i,"firebaseui-input-toggle-focus")})),nc(this,i,T(kl,this))}function Tl(){var e=Il.call(this),t=Sl.call(this);return vo(e)?(ec(e,!0),rc(t),t=!0):(ec(e,!1),ac(t,li("Enter your password").toString()),t=!1),t?vo(e):null}function Al(e,t,i){Mc.call(this,au,{email:e},i,"passwordReset"),this.l=t}function Pl(e,t,i,n,r){Mc.call(this,pu,{factorId:e,phoneNumber:i||null,G:!!n},r,"revertSecondFactorAdditionSuccess"),this.l=t,this.i=n||null}function Rl(e,t,i,n){"auth/weak-password"==(n&&n.code)?(e=nl(n),ec(i.i(),!1),ac(i.w(),e),i.i().focus()):(i&&i.m(),(i=new Yu).render(t),wd(e,i))}function Nl(e,t){try{var i="number"==typeof e.selectionStart}catch(e){i=!1}i?(e.selectionStart=t,e.selectionEnd=t):Qe&&!ft("9")&&("textarea"==e.type&&(t=e.value.substring(0,t).replace(/(\r\n|\r|\n)/g,"\n").length),(e=e.createTextRange()).collapse(!0),e.move("character",t),e.select())}function Ol(e,t,i,n,r,a){Mc.call(this,Jc,{email:i},a,"emailLinkSignInConfirmation",{F:n,D:r}),this.l=e,this.u=t}function Ll(e,t,i,n,r){Mc.call(this,tu,{ga:e},r,"emailLinkSignInLinkingDifferentDevice",{F:i,D:n}),this.i=t}function Dl(e){Mc.call(this,qc,void 0,e,"blank")}function xl(e,t,i,n,r){var a=new Dl,s=new Be(i),o=s.a.a.get(Ge.$a)||"",c=s.a.a.get(Ge.Sa)||"",u="1"===s.a.a.get(Ge.Qa),l=He(s),d=s.a.a.get(Ge.PROVIDER_ID)||null;s=s.a.a.get(Ge.vb)||null,Ld(e,s);var h=!Za(Ja,kd(e)),f=n||function(e,t){var i=null;if(t=Za(Ja,t))try{var n=Ra(e,t),r=JSON.parse(n);i=r&&r.email||null}catch(e){}return i}(c,kd(e)),p=(n=function(e,t){var i=null;if(t=Za(Xa,t))try{var n=Ra(e,t);i=JSON.parse(n)}catch(e){}return oa(i||null)}(c,kd(e)))&&n.a;d&&p&&p.providerId!==d&&(p=null),a.render(t),wd(e,a),Nd(e,a.I((function(){var t=Kn(null);t=l&&h||h&&u?qn(Error("anonymous-user-not-found")):function(e,t){var i=He(new Be(t));return i?(t=new jn((function(t,n){var r=Ed(e).onAuthStateChanged((function(e){r(),e&&e.isAnonymous&&e.uid===i?t(e):e&&e.isAnonymous&&e.uid!==i?n(Error("anonymous-user-mismatch")):n(Error("anonymous-user-not-found"))}));Nd(e,r)})),Nd(e,t),t):Kn(null)}(e,i).then((function(e){if(d&&!p)throw Error("pending-credential-not-found");return e}));var n=null;return t.then((function(t){return n=t,r?null:Id(e).checkActionCode(o)})).then((function(){return n}))}),[],(function(n){f?function(e,t,i,n,r,a){var s=Uc(t);t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",li("Signing in...").toString());var o=null;r=(a?function(e,t,i,n,r){xd(e);var a=r||null,s=ct.auth.EmailAuthProvider.credentialWithLink(i,n);return i=a?Id(e).signInWithEmailLink(i,n).then((function(e){return e.user.linkWithCredential(a)})).then((function(){return Ud(e)})).then((function(){return Fd(e,{code:"auth/email-already-in-use"},a)})):Id(e).fetchSignInMethodsForEmail(i).then((function(i){return i.length?Fd(e,{code:"auth/email-already-in-use"},s):t.linkWithCredential(s)})),Nd(e,i),i}(e,a,i,n,r):function(e,t,i,n){xd(e);var r,a=n||null;return t=Id(e).signInWithEmailLink(t,i).then((function(e){if(r={user:e.user,credential:null,operationType:e.operationType,additionalUserInfo:e.additionalUserInfo},a)return e.user.linkWithCredential(a).then((function(e){r={user:e.user,credential:a,operationType:r.operationType,additionalUserInfo:e.additionalUserInfo}}))})).then((function(){Ud(e)})).then((function(){return Ed(e).updateCurrentUser(r.user)})).then((function(){return r.user=Ed(e).currentUser,r})),Nd(e,t),t}(e,i,n,r)).then((function(i){Qa(Xa,kd(e)),Qa(Ja,kd(e)),t.h(),t.$("firebaseui-icon-done",li("Signed in!").toString()),o=setTimeout((function(){t.h(),el(e,t,i,!0)}),1e3),Nd(e,(function(){t&&(t.h(),t.m()),clearTimeout(o)}))}),(function(r){if(t.h(),t.m(),!r.name||"cancel"!=r.name){var a=nl(r=Qu(r));"auth/email-already-in-use"==r.code||"auth/credential-already-in-use"==r.code?(Qa(Xa,kd(e)),Qa(Ja,kd(e))):"auth/invalid-email"==r.code?(a=li("The email provided does not match the current sign-in session.").toString(),ho("emailLinkConfirmation",e,s,n,Ml,null,a)):ol(e,s,i,a)}})),Nd(e,r)}(e,a,f,i,p,n):u?(a.m(),ho("differentDeviceError",e,t)):(a.m(),ho("emailLinkConfirmation",e,t,i,Ml))}),(function(n){var r=void 0;if(!n||!n.name||"cancel"!=n.name)switch(a.m(),n&&n.message){case"anonymous-user-not-found":ho("differentDeviceError",e,t);break;case"anonymous-user-mismatch":ho("anonymousUserMismatch",e,t);break;case"pending-credential-not-found":ho("emailLinkNewDeviceLinking",e,t,i,Ul);break;default:n&&(r=nl(n)),ol(e,t,void 0,r)}})))}function Ml(e,t,i,n){xl(e,t,n,i,!0)}function Ul(e,t,i){xl(e,t,i)}function Fl(e,t,i,n,r,a){Mc.call(this,eu,{email:e,ga:t},a,"emailLinkSignInLinking",{F:n,D:r}),this.i=i}function jl(e,t,i,n,r,a){Mc.call(this,$c,{email:e},a,"emailLinkSignInSent",{F:n,D:r}),this.u=t,this.i=i}function Bl(e,t,i,n,r,a,s){Mc.call(this,bu,{jc:e,Qb:t},s,"emailMismatch",{F:r,D:a}),this.l=i,this.i=n}function Hl(e,t,i,n,r){Mc.call(this,Yc,void 0,r,"emailNotReceived",{F:i,D:n}),this.l=e,this.i=t}function Vl(e,t,i,n,r,a){Mc.call(this,iu,{email:e,ga:t},a,"federatedLinking",{F:n,D:r}),this.i=i}function Wl(e,t,i,n,r,a){Mc.call(this,Wc,{email:i,Ta:!!t},a,"passwordRecovery",{F:n,D:r}),this.l=e,this.u=t}function Gl(){return Xo(this,"firebaseui-id-name")}function zl(){return Xo(this,"firebaseui-id-name-error")}function Kl(e,t,i,n,r,a,s,o,c){Mc.call(this,Vc,{email:n,Tb:e,name:r,Ta:!!i,ia:!!o},c,"passwordSignUp",{F:a,D:s}),this.w=t,this.H=i,this.B=e}function ql(e,t){var i=Gs(Dd(e)),n=t.j(),r=null;i&&(r=t.M());var a=t.P();if(n){if(i){if(!r)return void t.u().focus();r=re(r)}if(a){var s=ct.auth.EmailAuthProvider.credential(n,a);Nd(e,t.I(T(e.Yb,e),[n,a],(function(n){var a={user:n.user,credential:s,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo};return i?(n=n.user.updateProfile({displayName:r}).then((function(){return el(e,t,a)})),Nd(e,n),n):el(e,t,a)}),(function(i){if(!i.name||"cancel"!=i.name){var r=Qu(i);switch(i=nl(r),r.code){case"auth/email-already-in-use":return function(e,t,i,n){function r(){var e=nl(n);ec(t.i(),!1),ac(t.U(),e),t.i().focus()}var a=Id(e).fetchSignInMethodsForEmail(i).then((function(n){n.length?r():(n=Uc(t),t.m(),ho("passwordRecovery",e,n,i,!1,Ni().toString()))}),(function(){r()}));return Nd(e,a),a}(e,t,n,r);case"auth/too-many-requests":i=li("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":ec(t.l(),!1),ac(t.ba(),i);break;case"auth/admin-restricted-operation":Us(Dd(e))?(i=Uc(t),t.m(),ho("handleUnauthorizedUser",e,i,n,ct.auth.EmailAuthProvider.PROVIDER_ID)):t.a(i);break;default:Yr(r="setAccountInfo: "+Oa(r),void 0),t.a(i)}}})))}else t.l().focus()}else t.i().focus()}function $l(){return Xo(this,"firebaseui-id-phone-confirmation-code")}function Yl(){return Xo(this,"firebaseui-id-phone-confirmation-code-error")}function Jl(){return Xo(this,"firebaseui-id-resend-countdown")}function Xl(e,t,i,n,r,a,s,o,c){Mc.call(this,_u,{phoneNumber:r},c,"phoneSignInFinish",{F:s,D:o}),this.jb=a,this.i=new To(1e3),this.B=a,this.P=e,this.l=t,this.H=i,this.M=n}o(ju,Mc),ju.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),Fc(this,this.l(),this.i()),jc(this,this.i(),this.w),vo(this.l())?this.i().focus():this.l().focus(),Mc.prototype.v.call(this)},ju.prototype.o=function(){this.H=this.w=null,Mc.prototype.o.call(this)},P(ju.prototype,{l:Du,U:xu,P:Mu,M:Uu,j:Fu,i:Au,B:Pu,ea:Ru,u:Nu,ua:Su,pa:Cu,ba:Tu}),L(Bu,Mc),Bu.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),Bu.K.v.call(this)},Bu.prototype.o=function(){this.i=null,Bu.K.o.call(this)},P(Bu.prototype,{l:Su,w:Cu,u:Tu}),L(Hu,Bu),L(Vu,Bu),L(Wu,Bu),L(Gu,Bu),L(zu,Bu),L(Ku,Bu),L(qu,Bu),L($u,Bu),L(Yu,Bu),L(Ju,Bu),L(Xu,Bu),L(Zu,Bu),o(pl,Mc),pl.prototype.v=function(){var e=this;nc(this,this.l(),(function(){e.i()})),this.l().focus(),Mc.prototype.v.call(this)},pl.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},P(pl.prototype,{l:Cu}),lo.anonymousUserMismatch=function(e,t){var i=new pl((function(){i.m(),ol(e,t)}));i.render(t),wd(e,i)},o(ml,Mc),ml.prototype.I=function(e,t,i,n){return e.apply(null,t).then(i,n)},lo.callback=function(e,t,i){var n=new ml;n.render(t),wd(e,n),i=i||yd(e),Nd(e,i.then((function(t){gl(e,n,t)}),(function(i){if((i=Qu(i))&&("auth/account-exists-with-different-credential"==i.code||"auth/email-already-in-use"==i.code)&&i.email&&i.credential)rs(new aa(i.email,i.credential),kd(e)),yl(e,n,i.email);else if(i&&"auth/user-cancelled"==i.code){var r=is(kd(e)),a=nl(i);r&&r.a?yl(e,n,r.g,a):r?cl(e,n,r.g,a):bl(e,n,i)}else i&&"auth/credential-already-in-use"==i.code||(i&&"auth/operation-not-supported-in-this-environment"==i.code&&al(e)?gl(e,n,{user:null,credential:null}):i&&"auth/admin-restricted-operation"==i.code&&Us(Dd(e))?(n.m(),ns(kd(e)),ho("handleUnauthorizedUser",e,t,null,null)):bl(e,n,i))})))},o(wl,Mc),wl.prototype.v=function(){var e=this;nc(this,this.l(),(function(){e.i()})),this.l().focus(),Mc.prototype.v.call(this)},wl.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},P(wl.prototype,{l:Cu}),lo.differentDeviceError=function(e,t){var i=new wl((function(){i.m(),ol(e,t)}));i.render(t),wd(e,i)},o(_l,Mc),_l.prototype.v=function(){var e=this;nc(this,Xo(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Mc.prototype.v.call(this)},_l.prototype.o=function(){this.l=this.i=null,Mc.prototype.o.call(this)},P(_l.prototype,{u:Su,B:Cu,w:Tu}),o(Al,Mc),Al.prototype.v=function(){this.H(),this.B(this.l),jc(this,this.i(),this.l),this.i().focus(),Mc.prototype.v.call(this)},Al.prototype.o=function(){this.l=null,Mc.prototype.o.call(this)},P(Al.prototype,{i:Il,w:Sl,M:El,H:Cl,u:Tl,U:Su,P:Cu,B:Tu}),o(Pl,Mc),Pl.prototype.v=function(){var e=this;nc(this,Xo(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Mc.prototype.v.call(this)},Pl.prototype.o=function(){this.l=this.i=null,Mc.prototype.o.call(this)},P(Pl.prototype,{u:Su,B:Cu,w:Tu}),lo.passwordReset=function(e,t,i,n){Nd(e,Id(e).verifyPasswordResetCode(i).then((function(r){var a=new Al(r,(function(){!function(e,t,i,n,r){var a=i.u();a&&Nd(e,i.I(T(Id(e).confirmPasswordReset,Id(e)),[n,a],(function(){i.m();var n=new $u(r);n.render(t),wd(e,n)}),(function(n){Rl(e,t,i,n)})))}(e,t,a,i,n)}));a.render(t),wd(e,a)}),(function(){Rl(e,t)})))},lo.emailChangeRevocation=function(e,t,i){var n=null;Nd(e,Id(e).checkActionCode(i).then((function(t){return n=t.data.email,Id(e).applyActionCode(i)})).then((function(){!function(e,t,i){var n=new _l(i,(function(){Nd(e,n.I(T(Id(e).sendPasswordResetEmail,Id(e)),[i],(function(){n.m(),(n=new Hu(i,void 0,Vs(Dd(e)),Ws(Dd(e)))).render(t),wd(e,n)}),(function(){n.a(Pi().toString())})))}));n.render(t),wd(e,n)}(e,t,n)}),(function(){var i=new Ju;i.render(t),wd(e,i)})))},lo.emailVerification=function(e,t,i,n){Nd(e,Id(e).applyActionCode(i).then((function(){var i=new Vu(n);i.render(t),wd(e,i)}),(function(){var i=new Wu;i.render(t),wd(e,i)})))},lo.revertSecondFactorAddition=function(e,t,i){var n=null,r=null;Nd(e,Id(e).checkActionCode(i).then((function(t){return n=t.data.email,r=t.data.multiFactorInfo,Id(e).applyActionCode(i)})).then((function(){!function(e,t,i,n){var r=new Pl(n.factorId,(function(){r.I(T(Id(e).sendPasswordResetEmail,Id(e)),[i],(function(){r.m(),(r=new Hu(i,void 0,Vs(Dd(e)),Ws(Dd(e)))).render(t),wd(e,r)}),(function(){r.a(Pi().toString())}))}),n.phoneNumber);r.render(t),wd(e,r)}(e,t,n,r)}),(function(){var i=new Ku;i.render(t),wd(e,i)})))},lo.verifyAndChangeEmail=function(e,t,i,n){var r=null;Nd(e,Id(e).checkActionCode(i).then((function(t){return r=t.data.email,Id(e).applyActionCode(i)})).then((function(){var i=new Gu(r,n);i.render(t),wd(e,i)}),(function(){var i=new zu;i.render(t),wd(e,i)})))},o(Ol,Mc),Ol.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),Nl(this.i(),(this.i().value||"").length),Mc.prototype.v.call(this)},Ol.prototype.o=function(){this.u=this.l=null,Mc.prototype.o.call(this)},P(Ol.prototype,{i:Du,M:xu,w:Mu,H:Uu,j:Fu,U:Su,P:Cu,B:Tu}),lo.emailLinkConfirmation=function(e,t,i,n,r,a){var s=new Ol((function(){var r=s.j();r?(s.m(),n(e,t,r,i)):s.i().focus()}),(function(){s.m(),ol(e,t,r||void 0)}),r||void 0,Vs(Dd(e)),Ws(Dd(e)));s.render(t),wd(e,s),a&&s.a(a)},o(Ll,Mc),Ll.prototype.v=function(){this.u(this.i),this.l().focus(),Mc.prototype.v.call(this)},Ll.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},P(Ll.prototype,{l:Su,u:Tu}),lo.emailLinkNewDeviceLinking=function(e,t,i,n){var r=new Be(i);if(i=r.a.a.get(Ge.PROVIDER_ID)||null,Ve(r,null),i){var a=new Ll(Ls(Dd(e),i),(function(){a.m(),n(e,t,r.toString())}),Vs(Dd(e)),Ws(Dd(e)));a.render(t),wd(e,a)}else ol(e,t)},o(Dl,Mc),lo.emailLinkSignInCallback=xl,o(Fl,Mc),Fl.prototype.v=function(){this.u(this.i),this.l().focus(),Mc.prototype.v.call(this)},Fl.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},P(Fl.prototype,{l:Su,u:Tu}),lo.emailLinkSignInLinking=function(e,t,i){var n=is(kd(e));if(ns(kd(e)),n){var r=n.a.providerId,a=new Fl(i,Ls(Dd(e),r),(function(){!function(e,t,i,n){var r=Uc(t);ll(e,t,i,(function(){ol(e,r,i)}),(function(n){if(!n.name||"cancel"!=n.name){var a=nl(n);n&&"auth/network-request-failed"==n.code?t.a(a):(t.m(),ol(e,r,i,a))}}),n)}(e,a,i,n)}),Vs(Dd(e)),Ws(Dd(e)));a.render(t),wd(e,a)}else ol(e,t)},o(jl,Mc),jl.prototype.v=function(){var e=this;nc(this,this.l(),(function(){e.i()})),nc(this,Xo(this,"firebaseui-id-trouble-getting-email-link"),(function(){e.u()})),this.l().focus(),Mc.prototype.v.call(this)},jl.prototype.o=function(){this.i=this.u=null,Mc.prototype.o.call(this)},P(jl.prototype,{l:Cu}),lo.emailLinkSignInSent=function(e,t,i,n,r){var a=new jl(i,(function(){a.m(),ho("emailNotReceived",e,t,i,n,r)}),(function(){a.m(),n()}),Vs(Dd(e)),Ws(Dd(e)));a.render(t),wd(e,a)},o(Bl,Mc),Bl.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Mc.prototype.v.call(this)},Bl.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},P(Bl.prototype,{u:Su,B:Cu,w:Tu}),lo.emailMismatch=function(e,t,i){var n=is(kd(e));if(n){var r=new Bl(i.user.email,n.g,(function(){var t=r;ns(kd(e)),el(e,t,i)}),(function(){var t=i.credential.providerId,a=Uc(r);r.m(),n.a?ho("federatedLinking",e,a,n.g,t):ho("federatedSignIn",e,a,n.g,t)}),Vs(Dd(e)),Ws(Dd(e)));r.render(t),wd(e,r)}else ol(e,t)},o(Hl,Mc),Hl.prototype.v=function(){var e=this;nc(this,this.u(),(function(){e.i()})),nc(this,this.Da(),(function(){e.l()})),this.u().focus(),Mc.prototype.v.call(this)},Hl.prototype.Da=function(){return Xo(this,"firebaseui-id-resend-email-link")},Hl.prototype.o=function(){this.i=this.l=null,Mc.prototype.o.call(this)},P(Hl.prototype,{u:Cu}),lo.emailNotReceived=function(e,t,i,n,r){var a=new Hl((function(){ll(e,a,i,n,(function(e){e=nl(e),a.a(e)}),r)}),(function(){a.m(),ol(e,t,i)}),Vs(Dd(e)),Ws(Dd(e)));a.render(t),wd(e,a)},o(Vl,Mc),Vl.prototype.v=function(){this.u(this.i),this.l().focus(),Mc.prototype.v.call(this)},Vl.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},P(Vl.prototype,{l:Su,u:Tu}),lo.federatedLinking=function(e,t,i,n,r){var a=is(kd(e));if(a&&a.a){var s=new Vl(i,Ls(Dd(e),n),(function(){rl(e,s,n,i)}),Vs(Dd(e)),Ws(Dd(e)));s.render(t),wd(e,s),r&&s.a(r)}else ol(e,t)},lo.federatedRedirect=function(e,t,i){var n=new Dl;n.render(t),wd(e,n),rl(e,n,t=Os(Dd(e))[0],i)},lo.federatedSignIn=function(e,t,i,n,r){var a=new Vl(i,Ls(Dd(e),n),(function(){rl(e,a,n,i)}),Vs(Dd(e)),Ws(Dd(e)));a.render(t),wd(e,a),r&&a.a(r)},lo.passwordLinking=function(e,t,i){var n=is(kd(e));ns(kd(e));var r=n&&n.a;if(r){var a=new Ou(i,(function(){!function(e,t,i,n){var r=t.u();r?Nd(e,t.I(T(e.Xb,e),[i,r],(function(i){return i=i.user.linkWithCredential(n).then((function(i){return el(e,t,{user:i.user,credential:n,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo})})),Nd(e,i),i}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/wrong-password":ec(t.i(),!1),ac(t.B(),nl(e));break;case"auth/too-many-requests":t.a(nl(e));break;default:Yr("signInWithEmailAndPassword: "+e.message,void 0),t.a(nl(e))}}))):t.i().focus()}(e,a,i,r)}),(function(){a.m(),ho("passwordRecovery",e,t,i)}),Vs(Dd(e)),Ws(Dd(e)));a.render(t),wd(e,a)}else ol(e,t)},o(Wl,Mc),Wl.prototype.v=function(){this.B(),this.H(this.l,this.u),vo(this.i())||this.i().focus(),jc(this,this.i(),this.l),Mc.prototype.v.call(this)},Wl.prototype.o=function(){this.u=this.l=null,Mc.prototype.o.call(this)},P(Wl.prototype,{i:Du,w:xu,B:Mu,M:Uu,j:Fu,U:Su,P:Cu,H:Tu}),lo.passwordRecovery=function(e,t,i,n,r){var a=new Wl((function(){!function(e,t){var i=t.j();if(i){var n=Uc(t);Nd(e,t.I(T(Id(e).sendPasswordResetEmail,Id(e)),[i],(function(){t.m();var r=new Hu(i,(function(){r.m(),ol(e,n)}),Vs(Dd(e)),Ws(Dd(e)));r.render(n),wd(e,r)}),(function(e){ec(t.i(),!1),ac(t.w(),nl(e))})))}else t.i().focus()}(e,a)}),n?void 0:function(){a.m(),ol(e,t)},i,Vs(Dd(e)),Ws(Dd(e)));a.render(t),wd(e,a),r&&a.a(r)},lo.passwordSignIn=function(e,t,i,n){var r=new ju((function(){!function(e,t){var i=t.j(),n=t.u();if(i)if(n){var r=ct.auth.EmailAuthProvider.credential(i,n);Nd(e,t.I(T(e.bc,e),[i,n],(function(i){return el(e,t,{user:i.user,credential:r,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo})}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/email-already-in-use":break;case"auth/email-exists":ec(t.l(),!1),ac(t.U(),nl(e));break;case"auth/too-many-requests":case"auth/wrong-password":ec(t.i(),!1),ac(t.B(),nl(e));break;default:Yr("verifyPassword: "+e.message,void 0),t.a(nl(e))}})))}else t.i().focus();else t.l().focus()}(e,r)}),(function(){var i=r.M();r.m(),ho("passwordRecovery",e,t,i)}),i,Vs(Dd(e)),Ws(Dd(e)),n);r.render(t),wd(e,r)},o(Kl,Mc),Kl.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(Fc(this,this.i(),this.u()),Fc(this,this.u(),this.l())):Fc(this,this.i(),this.l()),this.w&&jc(this,this.l(),this.w),vo(this.i())?this.B&&!vo(this.u())?this.u().focus():this.l().focus():this.i().focus(),Mc.prototype.v.call(this)},Kl.prototype.o=function(){this.H=this.w=null,Mc.prototype.o.call(this)},P(Kl.prototype,{i:Du,U:xu,ea:Mu,jb:Uu,j:Fu,u:Gl,Bc:zl,Ja:function(){var e=Gl.call(this),t=zl.call(this);tc(this,e,(function(){sc(t)&&(ec(e,!0),rc(t))}))},M:function(){var e=Gl.call(this),t=zl.call(this),i=vo(e);return ec(e,i=!/^[\s\xa0]*$/.test(null==i?"":String(i))),i?(rc(t),t=!0):(ac(t,li("Enter your account name").toString()),t=!1),t?Y(vo(e)):null},l:Il,ba:Sl,lb:El,ua:Cl,P:Tl,Nb:Su,Mb:Cu,pa:Tu}),lo.passwordSignUp=function(e,t,i,n,r,a){var s=new Kl(Gs(Dd(e)),(function(){ql(e,s)}),r?void 0:function(){s.m(),ol(e,t)},i,n,Vs(Dd(e)),Ws(Dd(e)),a);s.render(t),wd(e,s)},o(Xl,Mc),Xl.prototype.v=function(){var e=this;this.U(this.jb),rn(this.i,"tick",this.w,!1,this),this.i.start(),nc(this,Xo(this,"firebaseui-id-change-phone-number-link"),(function(){e.P()})),nc(this,this.Da(),(function(){e.M()})),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),Mc.prototype.v.call(this)},Xl.prototype.o=function(){this.M=this.H=this.l=this.P=null,Ao(this.i),on(this.i,"tick",this.w),this.i=null,Mc.prototype.o.call(this)},Xl.prototype.w=function(){--this.B,0<this.B?this.U(this.B):(Ao(this.i),on(this.i,"tick",this.w),this.ua(),this.lb())},P(Xl.prototype,{u:$l,pa:Yl,Ja:function(e){var t=$l.call(this),i=Yl.call(this);tc(this,t,(function(){sc(i)&&(ec(t,!0),rc(i))})),e&&ic(this,t,(function(){e()}))},ba:function(){var e=Y(vo($l.call(this))||"");return/^\d{6}$/.test(e)?e:null},Fb:Jl,U:function(e){Yt(Jl.call(this),li("Resend code in "+(9<e?"0:":"0:0")+e).toString())},ua:function(){rc(this.Fb())},Da:function(){return Xo(this,"firebaseui-id-resend-link")},lb:function(){ac(this.Da())},Nb:Su,Mb:Cu,ea:Tu}),lo.phoneSignInFinish=function(e,t,i,n,r,a){var s=new Xl((function(){s.m(),ho("phoneSignInStart",e,t,i)}),(function(){!function(e,t,i,n){function r(e){t.u().focus(),ec(t.u(),!1),ac(t.pa(),e)}var a=t.ba();a?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",li("Verifying...").toString()),Nd(e,t.I(T(n.confirm,n),[a],(function(i){t.h(),t.$("firebaseui-icon-done",li("Verified!").toString());var n=setTimeout((function(){t.h(),t.m();var n={user:Ed(e).currentUser,credential:null,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo};el(e,t,n,!0)}),1e3);Nd(e,(function(){t&&t.h(),clearTimeout(n)}))}),(function(n){if(n.name&&"cancel"==n.name)t.h();else{var a=Qu(n);switch(n=nl(a),a.code){case"auth/credential-already-in-use":t.h();break;case"auth/code-expired":a=Uc(t),t.h(),t.m(),ho("phoneSignInStart",e,a,i,n);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":t.h(),r(n);break;default:t.h(),t.a(n)}}})))):r(li("Wrong code. Try again.").toString())}(e,s,i,r)}),(function(){s.m(),ol(e,t)}),(function(){s.m(),ho("phoneSignInStart",e,t,i)}),ks(i),n,Vs(Dd(e)),Ws(Dd(e)));s.render(t),wd(e,s),a&&s.a(a)};var Zl=!(Qe||qe("Safari")&&!($e()||qe("Coast")||qe("Opera")||qe("Edge")||qe("Firefox")||qe("FxiOS")||qe("Silk")||qe("Android")));function Ql(e,t){return/-[a-z]/.test(t)?null:Zl&&e.dataset?!qe("Android")||$e()||qe("Firefox")||qe("FxiOS")||qe("Opera")||qe("Silk")||t in e.dataset?void 0===(e=e.dataset[t])?null:e:null:e.getAttribute("data-"+String(t).replace(/([A-Z])/g,"-$1").toLowerCase())}function ed(e,t,i){var n=this;e=ni(_c,{items:e},null,this.s),Ac.call(this,e,!0,!0),i&&(i=function(e,t){e=(e||document).getElementsByTagName("BUTTON");for(var i=0;i<e.length;i++)if(Ql(e[i],"listboxid")===t)return e[i];return null}(e,i))&&(i.focus(),function(e,t){var i=(t=t||Kt(document))||Kt(document),n=Ko(e),r=Ko(i);if(!Qe||9<=Number(dt)){s=Go(i,"borderLeftWidth");var a=Go(i,"borderRightWidth");o=Go(i,"borderTopWidth"),c=Go(i,"borderBottomWidth"),a=new Wo(parseFloat(o),parseFloat(a),parseFloat(c),parseFloat(s))}else{var s=$o(i,"borderLeft");a=$o(i,"borderRight");var o=$o(i,"borderTop"),c=$o(i,"borderBottom");a=new Wo(o,a,c,s)}i==Kt(document)?(s=n.a-i.scrollLeft,n=n.g-i.scrollTop,!Qe||10<=Number(dt)||(s+=a.left,n+=a.top)):(s=n.a-r.a-a.left,n=n.g-r.g-a.top),r=e.offsetWidth,a=e.offsetHeight,o=nt&&!r&&!a,e=h(r)&&!o||!e.getBoundingClientRect?new Bt(r,a):new Bt((e=zo(e)).right-e.left,e.bottom-e.top),r=i.clientHeight-e.height,a=i.scrollLeft,o=i.scrollTop,i=new jt(a+=Math.min(s,Math.max(s-(i.clientWidth-e.width),0)),o+=Math.min(n,Math.max(n-r,0))),t.scrollLeft=i.a,t.scrollTop=i.g}(i,e)),nc(this,e,(function(e){(e=(e=Jt(e.target,"firebaseui-id-list-box-dialog-button"))&&Ql(e,"listboxid"))&&(Pc.call(n),t(e))}))}function td(){return Xo(this,"firebaseui-id-phone-number")}function id(){return Xo(this,"firebaseui-id-country-selector")}function nd(){return Xo(this,"firebaseui-id-phone-number-error")}function rd(e,t){var i=e.a,n=ad("1-US-0",i),r=null;if(!(r=t&&ad(t,i)?t:n?"1-US-0":0<i.length?i[0].c:null))throw Error("No available default country");cd.call(this,r,e)}function ad(e,t){return!(!(e=gs(e))||!V(t,e))}function sd(e){return"firebaseui-flag-"+e.f}function od(e){var t=this;ed.call(this,function(e){return e.map((function(e){return{id:e.c,Ma:"firebaseui-flag "+sd(e),label:e.name+" ‎+"+e.b}}))}(e.a),(function(i){cd.call(t,i,e,!0),t.O().focus()}),this.Ba)}function cd(e,t,i){var n=gs(e);n&&(i&&((t=ms(t,i=Y(vo(td.call(this))||""))).length&&t[0].b!=n.b&&(i="+"+n.b+i.substr(t[0].b.length+1),bo(td.call(this),i))),t=gs(this.Ba),this.Ba=e,e=Xo(this,"firebaseui-id-country-selector-flag"),t&&go(e,sd(t)),mo(e,sd(n)),Yt(Xo(this,"firebaseui-id-country-selector-code"),"‎+"+n.b))}function ud(e,t,i,n,r,a,s,o,c,u){Mc.call(this,wu,{Gb:t,Aa:c||null,Va:!!i,ia:!!a},u,"phoneSignInStart",{F:n,D:r}),this.H=o||null,this.M=t,this.l=e,this.w=i||null,this.pa=s||null}function ld(e,t,i,n){try{var r=t.U(eo)}catch(e){return}r?Zs?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",li("Verifying...").toString()),Nd(e,t.I(T(e.cc,e),[ks(r),i],(function(i){var n=Uc(t);t.$("firebaseui-icon-done",li("Code sent!").toString());var a=setTimeout((function(){t.h(),t.m(),ho("phoneSignInFinish",e,n,r,15,i)}),1e3);Nd(e,(function(){t&&t.h(),clearTimeout(a)}))}),(function(i){if(t.h(),!i.name||"cancel"!=i.name){grecaptcha.reset(to),Zs=null;var n=i&&i.message||"";if(i.code)switch(i.code){case"auth/too-many-requests":n=li("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":return t.O().focus(),void ac(t.B(),Ai().toString());case"auth/admin-restricted-operation":if(Us(Dd(e)))return i=Uc(t),t.m(),void ho("handleUnauthorizedUser",e,i,ks(r),ct.auth.PhoneAuthProvider.PROVIDER_ID);n=nl(i);break;default:n=nl(i)}t.a(n)}})))):Qs?ac(t.u(),li("Solve the reCAPTCHA").toString()):!Qs&&n&&t.i().click():(t.O().focus(),ac(t.B(),Ai().toString()))}function dd(e,t,i,n,r){Mc.call(this,yu,{Sb:t},r,"providerSignIn",{F:i,D:n}),this.i=e}function hd(e,t,i,n,r,a,s){Mc.call(this,Bc,{email:i,Va:!!t,ia:!!a},s,"signIn",{F:n,D:r}),this.i=e,this.u=t}function fd(e,t,i,n,r,a,s){Mc.call(this,nu,{kc:e,yb:i,Eb:!!n},s,"unauthorizedUser",{F:r,D:a}),this.l=t,this.i=n}function pd(e,t,i,n,r,a){Mc.call(this,ru,{email:e},a,"unsupportedProvider",{F:n,D:r}),this.l=t,this.i=i}function md(e,t){this.$=!1;var i=bd(t);if(vd[i])throw Error('An AuthUI instance already exists for the key "'+i+'"');vd[i]=this,this.a=e,this.u=null,this.Y=!1,gd(this.a),this.h=ct.initializeApp({apiKey:e.app.options.apiKey,authDomain:e.app.options.authDomain},e.app.name+"-firebaseui-temp").auth(),(e=e.emulatorConfig)&&(i=e.port,this.h.useEmulator(e.protocol+"://"+e.host+(null===i?"":":"+i),e.options)),gd(this.h),this.h.setPersistence&&this.h.setPersistence(ct.auth.Auth.Persistence.SESSION),this.oa=t,this.ca=new As,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=Cr.Xa(),this.j=this.C=null,this.da=this.A=!1}function gd(e){e&&e.INTERNAL&&e.INTERNAL.logFramework&&e.INTERNAL.logFramework("FirebaseUI-web")}o(ud,Mc),ud.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||Fc(this,this.O(),this.i()),jc(this,this.i(),this.l),this.O().focus(),Nl(this.O(),(this.O().value||"").length),Mc.prototype.v.call(this)},ud.prototype.o=function(){this.w=this.l=null,Mc.prototype.o.call(this)},P(ud.prototype,{Cb:Rc,O:td,B:nd,ea:function(e,t,i){var n=this,r=td.call(this),a=id.call(this),s=nd.call(this),o=e||_s,c=o.a;if(0==c.length)throw Error("No available countries provided.");rd.call(n,o,t),nc(this,a,(function(){od.call(n,o)})),tc(this,r,(function(){sc(s)&&(ec(r,!0),rc(s));var e=Y(vo(r)||""),t=gs(this.Ba),i=ms(o,e);e=ad("1-US-0",c),i.length&&i[0].b!=t.b&&(t=i[0],cd.call(n,"1"==t.b&&e?"1-US-0":t.c,o))})),i&&ic(this,r,(function(){i()}))},U:function(e){var t=Y(vo(td.call(this))||""),i=(e=e||_s).a,n=ms(_s,t);if(n.length&&!V(i,n[0]))throw bo(td.call(this)),td.call(this).focus(),ac(nd.call(this),li("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return i=gs(this.Ba),n.length&&n[0].b!=i.b&&cd.call(this,n[0].c,e),n.length&&(t=t.substr(n[0].b.length+1)),t?new Is(this.Ba,t):null},Ja:id,ba:function(){return Xo(this,"firebaseui-recaptcha-container")},u:function(){return Xo(this,"firebaseui-id-recaptcha-error")},i:Su,ua:Cu,P:Tu}),lo.phoneSignInStart=function(e,t,i,n){var r=function(e){var t=null;if(Rs(e).forEach((function(e){e.provider==ct.auth.PhoneAuthProvider.PROVIDER_ID&&I(e.recaptchaParameters)&&!Array.isArray(e.recaptchaParameters)&&(t=se(e.recaptchaParameters))})),t){var i=[];uo.forEach((function(e){void 0!==t[e]&&(i.push(e),delete t[e])})),i.length&&Qr('The following provided "recaptchaParameters" keys are not allowed: '+i.join(", "))}return t}(Dd(e))||{};Zs=null,Qs=!(r&&"invisible"===r.size);var a=sl(e),s=function(e){var t=(e=Ns(e,ct.auth.PhoneAuthProvider.PROVIDER_ID))&&e.defaultCountry||null;t=t&&vs(t);var i=null;return e&&"string"==typeof e.loginHint&&(i=Es(e.loginHint)),t&&t[0]||i&&gs(i.a)||null}(Dd(e)),o=a?function(e){var t=null;return(e=Ns(e,ct.auth.PhoneAuthProvider.PROVIDER_ID))&&"string"==typeof e.loginHint&&(t=Es(e.loginHint)),e&&e.defaultNationalNumber||t&&t.Aa||null}(Dd(e)):null;s=i&&i.a||s&&s.c||null,i=i&&i.Aa||o,(o=Bs(Dd(e)))&&ys(o),eo=o?new ps(Bs(Dd(e))):_s;var c=new ud((function(t){ld(e,c,u,!(!t||!t.keyCode))}),Qs,a?null:function(){u.clear(),c.m(),ol(e,t)},Vs(Dd(e)),Ws(Dd(e)),a,eo,s,i);c.render(t),wd(e,c),n&&c.a(n),r.callback=function(t){c.u()&&rc(c.u()),Zs=t,Qs||ld(e,c,u)},r["expired-callback"]=function(){Zs=null};var u=new ct.auth.RecaptchaVerifier(Qs?c.ba():c.i(),r,Ed(e).app);Nd(e,c.I(T(u.render,u),[],(function(e){to=e}),(function(i){i.name&&"cancel"==i.name||(i=nl(i),c.m(),ol(e,t,void 0,i))})))},lo.prefilledEmailSignIn=function(e,t,i){var n=new Dl;n.render(t),wd(e,n),Nd(e,n.I(T(Id(e).fetchSignInMethodsForEmail,Id(e)),[i],(function(r){n.m();var a=!(!al(e)||!Sd(e));ul(e,t,r,i,void 0,a)}),(function(r){r=nl(r),n.m(),ho("signIn",e,t,i,r)})))},o(dd,Mc),dd.prototype.v=function(){this.l(this.i),Mc.prototype.v.call(this)},dd.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},P(dd.prototype,{l:function(e){function t(t){e(t)}for(var i=this.g?Vt("firebaseui-id-idp-button",this.g||this.s.a):[],n=0;n<i.length;n++){var r=i[n];nc(this,r,A(t,Ql(r,"providerId")))}}}),lo.providerSignIn=function(e,t,i,n){var r=new dd((function(i){i==ct.auth.EmailAuthProvider.PROVIDER_ID?(r.m(),dl(e,t,n)):i==ct.auth.PhoneAuthProvider.PROVIDER_ID?(r.m(),ho("phoneSignInStart",e,t)):"anonymous"==i?function(e,t){Nd(e,t.I(T(e.$b,e),[],(function(i){return t.m(),el(e,t,i,!0)}),(function(e){e.name&&"cancel"==e.name||(Yr("ContinueAsGuest: "+e.code,void 0),e=nl(e),t.a(e))})))}(e,r):rl(e,r,i,n),xd(e),e.l.cancel()}),Ds(Dd(e)),Vs(Dd(e)),Ws(Dd(e)));r.render(t),wd(e,r),i&&r.a(i),function(e){xd(e);try{Tr(e.l,xs(Dd(e)),function(e){var t;return xd(e),(t=e.Z)||(e=js(e=Dd(e),ct.auth.GoogleAuthProvider.PROVIDER_ID),t=!(!e||"select_account"!==e.prompt)),t}(e)).then((function(t){return!!e.g&&function(e,t,i){if(i&&i.credential&&i.clientId===xs(Dd(e))){if(Fs(Dd(e),ct.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var n=JSON.parse(atob(i.credential.split(".")[1])).email}catch(r){}return rl(e,t,ct.auth.GoogleAuthProvider.PROVIDER_ID,n),Kn(!0)}return r=ct.auth.GoogleAuthProvider.credential(i.credential),a=!1,r=t.I(T(e.ac,e),[r],(function(i){var n=Uc(t);t.m(),ho("callback",e,n,Kn(i)),a=!0}),(function(i){if(!(i.name&&"cancel"==i.name||i&&"auth/credential-already-in-use"==i.code))if(i&&"auth/email-already-in-use"==i.code&&i.email&&i.credential){var n=Uc(t);t.m(),ho("callback",e,n,qn(i))}else i&&"auth/admin-restricted-operation"==i.code&&Us(Dd(e))?(i=Uc(t),t.m(),ho("handleUnauthorizedUser",e,i,null,ct.auth.GoogleAuthProvider.PROVIDER_ID)):(i=nl(i),t.a(i))})),Nd(e,r),r.then((function(){return a}),(function(){return!1}))}var r,a;return i&&t.a(li("The selected credential for the authentication provider is not supported!").toString()),Kn(!1)}(e,e.g,t)}))}catch(e){}}(e)},lo.sendEmailLinkForSignIn=function(e,t,i,n){var r=new ml;r.render(t),wd(e,r),ll(e,r,i,n,(function(n){r.m(),n&&"auth/admin-restricted-operation"==n.code&&Us(Dd(e))?ho("handleUnauthorizedUser",e,t,i,ct.auth.EmailAuthProvider.PROVIDER_ID):(n=nl(n),ho("signIn",e,t,i,n))}))},o(hd,Mc),hd.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),Nl(this.l(),(this.l().value||"").length),Mc.prototype.v.call(this)},hd.prototype.o=function(){this.u=this.i=null,Mc.prototype.o.call(this)},P(hd.prototype,{l:Du,M:xu,w:Mu,H:Uu,j:Fu,U:Su,P:Cu,B:Tu}),lo.signIn=function(e,t,i,n){var r=al(e),a=new hd((function(){var t=a,i=t.j()||"";i&&cl(e,t,i)}),r?null:function(){a.m(),ol(e,t,i)},i,Vs(Dd(e)),Ws(Dd(e)),r);a.render(t),wd(e,a),n&&a.a(n)},o(fd,Mc),fd.prototype.v=function(){var e=this,t=Xo(this,"firebaseui-id-unauthorized-user-help-link");this.i&&t&&nc(this,t,(function(){e.i()})),nc(this,this.u(),(function(){e.l()})),this.u().focus(),Mc.prototype.v.call(this)},fd.prototype.o=function(){this.i=this.l=null,Mc.prototype.o.call(this)},P(fd.prototype,{u:Cu}),lo.handleUnauthorizedUser=function(e,t,i,n){function r(){ol(e,t)}n===ct.auth.EmailAuthProvider.PROVIDER_ID?r=function(){dl(e,t)}:n===ct.auth.PhoneAuthProvider.PROVIDER_ID&&(r=function(){ho("phoneSignInStart",e,t)});var a=null,s=null;n===ct.auth.EmailAuthProvider.PROVIDER_ID&&Ms(Dd(e))?(a=function(e){return(e=Ns(e,ct.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.adminEmail||null}(Dd(e)),s=function(e){if((e=Ns(e,ct.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp){var t=e.disableSignUp.helpLink||null;if(t&&"string"==typeof t)return function(){sr(t)}}return null}(Dd(e))):Us(Dd(e))&&(a=function(e){return(e=e.a.get("adminRestrictedOperation"))&&e.adminEmail?e.adminEmail:null}(Dd(e)),s=function(e){if(e=e.a.get("adminRestrictedOperation")||null){var t=e.helpLink||null;if(t&&"string"==typeof t)return function(){sr(t)}}return null}(Dd(e)));var o=new fd(i,(function(){o.m(),r()}),a,s,Vs(Dd(e)),Ws(Dd(e)));o.render(t),wd(e,o)},o(pd,Mc),pd.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Mc.prototype.v.call(this)},pd.prototype.o=function(){this.i=this.l=null,Mc.prototype.o.call(this)},P(pd.prototype,{u:Su,B:Cu,w:Tu}),lo.unsupportedProvider=function(e,t,i){var n=new pd(i,(function(){n.m(),ho("passwordRecovery",e,t,i)}),(function(){n.m(),ol(e,t,i)}),Vs(Dd(e)),Ws(Dd(e)));n.render(t),wd(e,n)};var vd={};function bd(e){return e||"[DEFAULT]"}function yd(e){return xd(e),e.i||(e.i=Pd(e,(function(t){return t&&!is(kd(e))?Kn(Ed(e).getRedirectResult().then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Fd(e,t)}))):Kn(Id(e).getRedirectResult().then((function(t){return Ps(Dd(e))&&!t.user&&e.j&&!e.j.isAnonymous?Ed(e).getRedirectResult():t})))}))),e.i}function wd(e,t){xd(e),e.g=t}var _d=null;function Id(e){return xd(e),e.h}function Ed(e){return xd(e),e.a}function kd(e){return xd(e),e.oa}function Sd(e){return xd(e),e.O?e.O.emailHint:void 0}function Cd(e){return"signIn"===((e=new Be(e)).a.a.get(Ge.ub)||null)&&!!e.a.a.get(Ge.$a)}function Td(e,t,i,n){xd(e),void 0!==e.a.languageCode&&(e.u=e.a.languageCode);var r="en".replace(/_/g,"-");e.a.languageCode=r,e.h.languageCode=r,e.Y=!0,void 0!==e.a.tenantId&&(e.h.tenantId=e.a.tenantId),e.ib(i),e.O=n||null;var a=d.document;e.C?e.C.then((function(){"complete"==a.readyState?Ad(e,t):sn(window,"load",(function(){Ad(e,t)}))})):"complete"==a.readyState?Ad(e,t):sn(window,"load",(function(){Ad(e,t)}))}function Ad(e,t){var i=or(t,"Could not find the FirebaseUI widget element on the page.");if(i.setAttribute("lang","en".replace(/_/g,"-")),_d){var n=_d;xd(n),is(kd(n))&&Qr("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),_d.reset()}if(_d=e,e.T=i,function(e,t){e.L=null,e.J=new kn(t),e.J.register(),rn(e.J,"pageEnter",(function(t){if(t=t&&t.pageId,e.L!=t){var i=Dd(e);(i=Xs(i).uiChanged||null)&&i(e.L,t),e.L=t}}))}(e,i),Ha(new Va)&&Ha(new Wa)){t=or(t,"Could not find the FirebaseUI widget element on the page."),i=(i=ye(i=cr(),n=us(Dd(e).a,"queryParameterForSignInSuccessUrl")))?It(kt(i)).toString():null;e:{n=cr();var r=Hs(Dd(e));for(a in n=ye(n,r)||"",oo)if(oo[a].toLowerCase()==n.toLowerCase()){var a=oo[a];break e}a="callback"}switch(a){case"callback":i&&(a=kd(e),es(Ya,i,a)),e.nb()?ho("callback",e,t):ol(e,t,Sd(e));break;case"resetPassword":ho("passwordReset",e,t,hl(),fl());break;case"recoverEmail":ho("emailChangeRevocation",e,t,hl());break;case"revertSecondFactorAddition":ho("revertSecondFactorAddition",e,t,hl());break;case"verifyEmail":ho("emailVerification",e,t,hl(),fl());break;case"verifyAndChangeEmail":ho("verifyAndChangeEmail",e,t,hl(),fl());break;case"signIn":ho("emailLinkSignInCallback",e,t,cr()),Md();break;case"select":i&&(a=kd(e),es(Ya,i,a)),ol(e,t);break;default:throw Error("Unhandled widget operation.")}(t=Xs(t=Dd(e)).uiShown||null)&&t()}else t=or(t,"Could not find the FirebaseUI widget element on the page."),(a=new Zu(li("The browser you are using does not support Web Storage. Please try again in a different browser.").toString())).render(t),wd(e,a);t=e.g&&"blank"==e.g.Ga&&Ks(Dd(e)),as(kd(e))&&!t&&(Ld(e,(t=as(kd(e))).a),Qa($a,kd(e)))}function Pd(e,t){if(e.A)return t(Rd(e));if(Nd(e,(function(){e.A=!1})),Ps(Dd(e))){var i=new jn((function(i){Nd(e,e.a.onAuthStateChanged((function(n){e.j=n,e.A||(e.A=!0,i(t(Rd(e))))})))}));return Nd(e,i),i}return e.A=!0,t(null)}function Rd(e){return xd(e),Ps(Dd(e))&&e.j&&e.j.isAnonymous?e.j:null}function Nd(e,t){if(xd(e),t){e.s.push(t);var i=function(){z(e.s,(function(e){return e==t}))};"function"!=typeof t&&t.then(i,i)}}function Od(e){void 0!==e.a.languageCode&&e.Y&&(e.Y=!1,e.a.languageCode=e.u)}function Ld(e,t){e.a.tenantId=t,e.h.tenantId=t}function Dd(e){return xd(e),e.ca}function xd(e){if(e.$)throw Error("AuthUI instance is deleted!")}function Md(){var e=cr();if(Cd(e)){for(var t in e=new Be(e),Ge)Ge.hasOwnProperty(t)&&Me(e.a.a,Ge[t]);t={state:"signIn",mode:"emailLink",operation:"clear"};var i=d.document.title;d.history&&d.history.replaceState&&d.history.replaceState(t,i,e.toString())}}function Ud(e){return xd(e),Id(e).signOut()}function Fd(e,t,i){if(xd(e),t&&t.code&&("auth/email-already-in-use"==t.code||"auth/credential-already-in-use"==t.code)){var n=Js(Dd(e));return Kn().then((function(){return n(new Di("anonymous-upgrade-merge-conflict",null,i||t.credential))})).then((function(){throw e.g&&(e.g.m(),e.g=null),t}))}return qn(t)}function jd(e,t,i,n){Mc.call(this,ku,void 0,n,"providerMatchByEmail",{F:t,D:i}),this.i=e}function Bd(e,t,i,n,r){Mc.call(this,Eu,{ec:t},r,"selectTenant",{F:i,D:n}),this.i=e}function Hd(e){Mc.call(this,Kc,void 0,e,"spinner")}function Vd(e){for(var t in this.a=new ss,os(this.a,"authDomain"),os(this.a,"displayMode",Jd),os(this.a,"tenants"),os(this.a,"callbacks"),os(this.a,"tosUrl"),os(this.a,"privacyPolicyUrl"),e)if(e.hasOwnProperty(t))try{cs(this.a,t,e[t])}catch(e){Yr('Invalid config: "'+t+'"',void 0)}}function Wd(e){return e.a.get("callbacks")||{}}function Gd(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Qr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){sr(t)}}return null}function zd(e){var t=e.a.get("tosUrl")||null,i=e.a.get("privacyPolicyUrl")||null;if(i&&!t&&Qr("Terms of Service URL is missing, the link will not be displayed."),t&&i){if("function"==typeof i)return i;if("string"==typeof i)return function(){sr(i)}}return null}function Kd(e,t){if(!(e=e.a.get("tenants"))||!e.hasOwnProperty(t)&&!e.hasOwnProperty(Zd))throw Error("Invalid tenant configuration!")}function qd(e,t,i){if(!(e=e.a.get("tenants")))throw Error("Invalid tenant configuration!");var n=[];if(!(e=e[t]||e[Zd]))return Yr("Invalid tenant configuration: "+t+" is not configured!",void 0),n;if(!(t=e.signInOptions))throw Error("Invalid tenant configuration: signInOptions are invalid!");return t.forEach((function(e){if("string"==typeof e)n.push(e);else if("string"==typeof e.provider){var t=e.hd;t&&i?(t instanceof RegExp?t:new RegExp("@"+t.replace(".","\\.")+"$")).test(i)&&n.push(e.provider):n.push(e.provider)}else Yr(e="Invalid tenant configuration: signInOption "+JSON.stringify(e)+" is invalid!",void 0)})),n}function $d(e,t,i){return e=function(e,t){var i=Yd,n=void 0===n?{}:n;return Kd(e,t),function(e,t,i){return i=void 0===i?{}:i,Object.keys(e).filter((function(e){return t.includes(e)})).reduce((function(t,i){return t[i]=e[i],t}),i)}((e=e.a.get("tenants"))[t]||e[Zd],i,n)}(e,t),(t=e.signInOptions)&&i&&(t=t.filter((function(e){return"string"==typeof e?i.includes(e):i.includes(e.provider)})),e.signInOptions=t),e}(t=md.prototype).nb=function(){return xd(this),!!as(kd(this))||Cd(cr())},t.start=function(e,t){Td(this,e,t)},t.Db=function(){xd(this),this.Z=!0},t.reset=function(){xd(this);var e=this;this.T&&this.T.removeAttribute("lang"),this.J&&In(this.J),Od(this),this.O=null,Md(),Qa($a,kd(this)),xd(this),this.l.cancel(),this.i=Kn({user:null,credential:null}),_d==this&&(_d=null),this.T=null;for(var t=0;t<this.s.length;t++)"function"==typeof this.s[t]?this.s[t]():this.s[t].cancel&&this.s[t].cancel();this.s=[],ns(kd(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=Ud(this).then((function(){e.C=null}),(function(){e.C=null})))},t.ib=function(e){xd(this);var t,i=this.ca;for(t in e)try{cs(i.a,t,e[t])}catch(e){Yr('Invalid config: "'+t+'"',void 0)}rt&&cs(i.a,"popupMode",!1),Bs(i),!this.da&&$s(Dd(this))&&(Qr("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)},t.Wb=function(){xd(this);var e=Dd(this),t=us(e.a,"widgetUrl");e=Hs(e);for(var i,n=t.search(be),r=0,a=[];0<=(i=ve(t,r,e,n));)a.push(t.substring(r,i)),r=Math.min(t.indexOf("&",i)+1||n,n);a.push(t.substr(r)),t=a.join("").replace(we,"$1"),(e+=n="="+encodeURIComponent("select"))?(0>(n=t.indexOf("#"))&&(n=t.length),0>(r=t.indexOf("?"))||r>n?(r=n,i=""):i=t.substring(r+1,n),n=(t=[t.substr(0,r),i,t.substr(n)])[1],t[1]=e?n?n+"&"+e:e:n,n=t[0]+(t[1]?"?"+t[1]:"")+t[2]):n=t,Dd(this).a.get("popupMode")?(n=n||"about:blank",(e={width:500,height:600,top:0<(e=(window.screen.availHeight-600)/2)?e:0,left:0<(t=(window.screen.availWidth-500)/2)?t:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1}).target=e.target||n.target||"google_popup",e.width=e.width||690,e.height=e.height||500,(e=rr(n,e))&&e.focus()):Ft(window.location,n)},t.Wa=function(){var e=this;return xd(this),this.h.app.delete().then((function(){var t=bd(kd(e));delete vd[t],e.reset(),e.$=!0}))},t.Ib=function(e,t){xd(this);var i=this,n=function(){for(var e=32,t=[];0<e;)t.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),e--;return t.join("")}();if(!zs(Dd(this)))return qn(Error("Email link sign-in should be enabled to trigger email sending."));var r=function(e){if(zs(e)){var t={url:cr(),handleCodeInApp:!0};(e=Ns(e,ct.auth.EmailAuthProvider.PROVIDER_ID))&&"function"==typeof e.emailLinkSignIn&&ce(t,e.emailLinkSignIn()),e=t.url;var i=cr();i instanceof _e||(i=Se(i)),e instanceof _e||(e=Se(e));var n=i;i=new _e(n);var r=!!e.j;r?Ie(i,e.j):r=!!e.A,r?i.A=e.A:r=!!e.h,r?i.h=e.h:r=null!=e.C;var a=e.g;if(r)Ee(i,e.C);else if(r=!!e.g)if("/"!=a.charAt(0)&&(n.h&&!n.g?a="/"+a:-1!=(n=i.g.lastIndexOf("/"))&&(a=i.g.substr(0,n+1)+a)),".."==a||"."==a)a="";else if(-1!=a.indexOf("./")||-1!=a.indexOf("/.")){n=0==a.lastIndexOf("/",0),a=a.split("/");for(var s=[],o=0;o<a.length;){var c=a[o++];"."==c?n&&o==a.length&&s.push(""):".."==c?((1<s.length||1==s.length&&""!=s[0])&&s.pop(),n&&o==a.length&&s.push("")):(s.push(c),n=!0)}a=s.join("/")}return r?i.g=a:r=""!==e.a.toString(),r?ke(i,Fe(e.a)):r=!!e.s,r&&(i.s=e.s),t.url=i.toString(),t}return null}(Dd(this)),a=new Be(r.url);return function(e,t){t?e.a.a.set(Ge.Sa,t):Me(e.a.a,Ge.Sa)}(a,n),t&&t.a&&(function(e,t,i){es(Xa,Pa(e,JSON.stringify(sa(t))),i)}(n,t,kd(this)),Ve(a,t.a.providerId)),function(e,t){null!==t?e.a.a.set(Ge.Qa,t?"1":"0"):Me(e.a.a,Ge.Qa)}(a,function(e){return!(!(e=Ns(e,ct.auth.EmailAuthProvider.PROVIDER_ID))||!e.forceSameDevice)}(Dd(this))),Pd(this,(function(t){return t&&((t=t.uid)?a.a.a.set(Ge.Pa,t):Me(a.a.a,Ge.Pa)),r.url=a.toString(),Id(i).sendSignInLinkToEmail(e,r)})).then((function(){var t=kd(i),r={};r.email=e,es(Ja,Pa(n,JSON.stringify(r)),t)}),(function(e){throw Qa(Xa,kd(i)),Qa(Ja,kd(i)),e}))},t.bc=function(e,t){xd(this);var i=this;return Id(this).signInWithEmailAndPassword(e,t).then((function(n){return Pd(i,(function(r){return r?Ud(i).then((function(){return Fd(i,{code:"auth/email-already-in-use"},ct.auth.EmailAuthProvider.credential(e,t))})):n}))}))},t.Yb=function(e,t){xd(this);var i=this;return Pd(this,(function(n){if(n){var r=ct.auth.EmailAuthProvider.credential(e,t);return n.linkWithCredential(r)}return Id(i).createUserWithEmailAndPassword(e,t)}))},t.ac=function(e){xd(this);var t=this;return Pd(this,(function(i){return i?i.linkWithCredential(e).then((function(e){return e}),(function(i){if(i&&"auth/email-already-in-use"==i.code&&i.email&&i.credential)throw i;return Fd(t,i,e)})):Id(t).signInWithCredential(e)}))},t.dc=function(e){xd(this);var t=this,i=this.i;return this.i=null,Pd(this,(function(i){return i&&!is(kd(t))?i.linkWithRedirect(e):Id(t).signInWithRedirect(e)})).then((function(){}),(function(e){throw t.i=i,e}))},t.cc=function(e,t){xd(this);var i=this;return Pd(this,(function(n){return n?n.linkWithPhoneNumber(e,t).then((function(e){return new Rr(e,(function(e){if("auth/credential-already-in-use"==e.code)return Fd(i,e);throw e}))})):Ed(i).signInWithPhoneNumber(e,t).then((function(e){return new Rr(e)}))}))},t.$b=function(){return xd(this),Ed(this).signInAnonymously()},t.Xb=function(e,t){return xd(this),Id(this).signInWithEmailAndPassword(e,t)},o(jd,Mc),jd.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),Nl(this.l(),(this.l().value||"").length),Mc.prototype.v.call(this)},jd.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},P(jd.prototype,{l:Du,H:xu,u:Mu,B:Uu,j:Fu,M:Su,w:Tu}),o(Bd,Mc),Bd.prototype.v=function(){!function(e,t){function i(e){t(e)}for(var n=e.g?Vt("firebaseui-id-tenant-selection-button",e.g||e.s.a):[],r=0;r<n.length;r++){var a=n[r];nc(e,a,A(i,Ql(a,"tenantId")))}}(this,this.i),Mc.prototype.v.call(this)},Bd.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},o(Hd,Mc);var Yd=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],Jd="optionFirst",Xd={pc:Jd,oc:"identifierFirst"},Zd="*";function Qd(e,t){var i=this;this.s=or(e),this.a={},Object.keys(t).forEach((function(e){i.a[e]=new Vd(t[e])})),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(e){this.ob=e||null},enumerable:!1})}function eh(e){e.j&&e.j.reset(),e.mb(),e.g&&e.g.m()}(t=Qd.prototype).Ub=function(e,t){var i=this;eh(this);var n=e.apiKey;return new jn((function(e,r){if(i.a.hasOwnProperty(n)){var a=Wd(i.a[n]).selectTenantUiHidden||null;if(function(e){for(var t in e=e.a.get("displayMode"),Xd)if(Xd[t]===e)return Xd[t];return Jd}(i.a[n])===Jd){var s=[];t.forEach((function(e){e=e||"_";var t=i.a[n].a.get("tenants");if(!t)throw Error("Invalid tenant configuration!");(t=t[e]||t[Zd])?e={tenantId:"_"!==e?e:null,V:t.fullLabel||null,displayName:t.displayName,za:t.iconUrl,ta:t.buttonColor}:(Yr("Invalid tenant configuration: "+e+" is not configured!",void 0),e=null),e&&s.push(e)}));var o=function(t){t={tenantId:t,providerIds:qd(i.a[n],t||"_")},e(t)};if(1===s.length)return void o(s[0].tenantId);i.g=new Bd((function(e){eh(i),a&&a(),o(e)}),s,Gd(i.a[n]),zd(i.a[n]))}else i.g=new jd((function(){var r=i.g.j();if(r){for(var s=0;s<t.length;s++){var o=qd(i.a[n],t[s]||"_",r);if(0!==o.length)return r={tenantId:t[s],providerIds:o,email:r},eh(i),a&&a(),void e(r)}i.g.a(Oi({code:"no-matching-tenant-for-email"}).toString())}}),Gd(i.a[n]),zd(i.a[n]));i.g.render(i.s),(r=Wd(i.a[n]).selectTenantUiShown||null)&&r()}else{var c=Error("Invalid project configuration: API key is invalid!");c.code="invalid-configuration",i.pb(c),r(c)}}))},t.Pb=function(e,t){if(!this.a.hasOwnProperty(e))throw Error("Invalid project configuration: API key is invalid!");var i=t||void 0;Kd(this.a[e],t||"_");try{this.i=ct.app(i).auth()}catch(r){var n=this.a[e].a.get("authDomain");if(!n)throw Error("Invalid project configuration: authDomain is required!");(e=ct.initializeApp({apiKey:e,authDomain:n},i)).auth().tenantId=t,this.i=e.auth()}return this.i},t.Zb=function(e,t){var i=this;return new jn((function(n,r){function a(t,n){i.j=new md(e),Td(i.j,i.s,t,n)}var s=e.app.options.apiKey;i.a.hasOwnProperty(s)||r(Error("Invalid project configuration: API key is invalid!"));var o=$d(i.a[s],e.tenantId||"_",t&&t.providerIds);eh(i),r={signInSuccessWithAuthResult:function(e){return n(e),!1}};var c,u=Wd(i.a[s]).signInUiShown||null,l=!1;r.uiChanged=function(t,n){null===t&&"callback"===n?((t=Wt("firebaseui-id-page-callback",i.s))&&rc(t),i.h=new Hd,i.h.render(i.s)):l||null===t&&"spinner"===n||"blank"===n||(i.h&&(i.h.m(),i.h=null),l=!0,u&&u(e.tenantId))},o.callbacks=r,o.credentialHelper="none",t&&t.email&&(c={emailHint:t.email}),i.j?i.j.Wa().then((function(){a(o,c)})):a(o,c)}))},t.reset=function(){var e=this;return Kn().then((function(){e.j&&e.j.Wa()})).then((function(){e.j=null,eh(e)}))},t.Vb=function(){var e=this;this.h||this.A||(this.A=window.setTimeout((function(){eh(e),e.h=new Hd,e.g=e.h,e.h.render(e.s),e.A=null}),500))},t.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},t.Bb=function(){return eh(this),this.g=new qu,this.g.render(this.s),Kn()},t.pb=function(e){var t,i=this,n=Oi({code:e.code}).toString()||e.message;eh(this),e.retry&&"function"==typeof e.retry&&(t=function(){i.reset(),e.retry()}),this.g=new Xu(n,t),this.g.render(this.s)},t.Rb=function(e){var t=this;return Kn().then((function(){var i=t.i&&t.i.app.options.apiKey;if(!t.a.hasOwnProperty(i))throw Error("Invalid project configuration: API key is invalid!");if(Kd(t.a[i],e.tenantId||"_"),!t.i.currentUser||t.i.currentUser.uid!==e.uid)throw Error("The user being processed does not match the signed in user!");return(i=Wd(t.a[i]).beforeSignInSuccess||null)?i(e):e})).then((function(t){if(t.uid!==e.uid)throw Error("User with mismatching UID returned.");return t}))},O("firebaseui.auth.FirebaseUiHandler",Qd),O("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",Qd.prototype.Ub),O("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",Qd.prototype.Pb),O("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",Qd.prototype.Zb),O("firebaseui.auth.FirebaseUiHandler.prototype.reset",Qd.prototype.reset),O("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",Qd.prototype.Vb),O("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",Qd.prototype.mb),O("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",Qd.prototype.Bb),O("firebaseui.auth.FirebaseUiHandler.prototype.handleError",Qd.prototype.pb),O("firebaseui.auth.FirebaseUiHandler.prototype.processUser",Qd.prototype.Rb),O("firebaseui.auth.AuthUI",md),O("firebaseui.auth.AuthUI.getInstance",(function(e){return e=bd(e),vd[e]?vd[e]:null})),O("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",md.prototype.Db),O("firebaseui.auth.AuthUI.prototype.start",md.prototype.start),O("firebaseui.auth.AuthUI.prototype.setConfig",md.prototype.ib),O("firebaseui.auth.AuthUI.prototype.signIn",md.prototype.Wb),O("firebaseui.auth.AuthUI.prototype.reset",md.prototype.reset),O("firebaseui.auth.AuthUI.prototype.delete",md.prototype.Wa),O("firebaseui.auth.AuthUI.prototype.isPendingRedirect",md.prototype.nb),O("firebaseui.auth.AuthUIError",Di),O("firebaseui.auth.AuthUIError.prototype.toJSON",Di.prototype.toJSON),O("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",io),O("firebaseui.auth.CredentialHelper.NONE",no),O("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),jn.prototype.catch=jn.prototype.Ca,jn.prototype.finally=jn.prototype.fc}).apply(void 0!==e?e:"undefined"!=typeof self?self:window)}.apply(void 0!==e?e:"undefined"!=typeof self?self:window),"undefined"!=typeof window&&(window.dialogPolyfill=i(Xa));var ns=firebaseui.auth;const rs={apiKey:"AIzaSyAJniPEYyCpEkvhjqmDN6oMVrV91NEI50k",authDomain:"filmoteka-5b686.firebaseapp.com",projectId:"filmoteka-5b686",storageBucket:"filmoteka-5b686.appspot.com",messagingSenderId:"751637418950",appId:"1:751637418950:web:7207f05e032c39a423d8c7",measurementId:"G-W09L62RFSC"};ct.initializeApp(rs);const as=ct.auth(),ss=new ns.AuthUI(as),os={signInSuccessUrl:"/",signInOptions:[ct.auth.GoogleAuthProvider.PROVIDER_ID]};ss.start("#firebaseui-auth-container",os);ct.initializeApp(rs),ct.auth().currentUser;a("5I0Ww"),a("9ihTn");var cs=a("eWps1");async function us(e){(0,cs.spin)();try{const t=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=f7d7a9b2e374f67b5381a74b61fb7dc2&query=${e}&language=en-US`),i=await t.json();if(0===i.results.length)return;return i}catch(e){console.log(e)}finally{(0,cs.stopSpin)()}}cs=a("eWps1");cs=a("eWps1");class ls{BASE_URL="https://api.themoviedb.org/3";API_KEY="?api_key=f7d7a9b2e374f67b5381a74b61fb7dc2";page=1;async fetchPopularMovies(){(0,cs.spin)();try{const e=await fetch(`${this.BASE_URL}/movie/popular${this.API_KEY}&page=${this.page}&language=en-US`);return await e.json()}catch(e){throw new Error(e.message)}finally{(0,cs.stopSpin)()}}incrementPage(){this.page+=1}resetPage(){this.page=1}}a("b5rV1");var ds,hs={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,ds=function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="dist",i(i.s=10)}([function(e,t,i){e.exports=function(e,t){var i,n,r,a,s=Object.prototype.hasOwnProperty;for(r=1,a=arguments.length;r<a;r+=1)for(n in i=arguments[r])s.call(i,n)&&(e[n]=i[n]);return e}},function(e,t,i){e.exports=function(e){return void 0===e}},function(e,t,i){e.exports=function(e){return e instanceof Array}},function(e,t,i){var n=i(2),r=i(17),a=i(6);e.exports=function(e,t,i){n(e)?r(e,t,i):a(e,t,i)}},function(e,t,i){e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,i){e.exports=function(e){return e instanceof Function}},function(e,t,i){e.exports=function(e,t,i){var n;for(n in i=i||null,e)if(e.hasOwnProperty(n)&&!1===t.call(i,e[n],n,e))break}},function(e,t,i){var n=i(18),r=i(0);e.exports=function(e,t){var i;return t||(t=e,e=null),i=t.init||function(){},e&&n(i,e),t.hasOwnProperty("static")&&(r(i,t.static),delete t.static),r(i.prototype,t),i}},function(e,t,i){var n=i(2);e.exports=function(e,t,i){var r,a;if(i=i||0,!n(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,i);for(a=t.length,r=i;i>=0&&r<a;r+=1)if(t[r]===e)return r;return-1}},function(e,t,i){var n=i(29),r=i(30),a=i(5),s={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var i=document.createElement("div"),r=a(e)?e(t):n(e,t);return i.innerHTML=r,i.firstChild},bind:function(e,t){var i,n=Array.prototype.slice;return e.bind?e.bind.apply(e,n.call(arguments,1)):(i=n.call(arguments,2),function(){return e.apply(t,i.length?i.concat(n.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}};e.exports=s},function(e,t,i){i(11),e.exports=i(12)},function(e,t,i){},function(e,t,i){var n=i(13),r=i(7),a=i(0),s=i(1),o=i(20),c=i(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=r({init:function(e,t){this._options=a({},u,t),this._currentPage=0,this._view=new o(e,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,i=this.getCurrentPage();return t?i-1:i+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),i=this._options.visiblePages,n="prev"===e;return this._options.centerAlign?n?t-1:t+i:n?(t-1)*i:t*i+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},i=this._getLastPage(),n=this._getPageIndex(e),r=this._getPageIndex(i),a=this._getEdge(e);return t.leftPageNumber=a.left,t.rightPageNumber=a.right,t.prevMore=n>1,t.nextMore=n<r,t.page=e,t.currentPageIndex=e,t.lastPage=i,t.lastPageListIndex=i,t},_getEdge:function(e){var t,i,n,r=this._getLastPage(),a=this._options.visiblePages,s=this._getPageIndex(e);return this._options.centerAlign?(n=Math.floor(a/2),(i=(t=Math.max(e-n,1))+a-1)>r&&(t=Math.max(r-a+1,1),i=r)):(t=(s-1)*a+1,i=s*a,i=Math.min(i,r)),{left:t,right:i}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){s(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});n.mixin(l),e.exports=l},function(e,t,i){var n=i(0),r=i(14),a=i(4),s=i(16),o=i(2),c=i(5),u=i(3),l=/\s+/g;function d(){this.events=null,this.contexts=null}d.mixin=function(e){n(e.prototype,d.prototype)},d.prototype._getHandlerItem=function(e,t){var i={handler:e};return t&&(i.context=t),i},d.prototype._safeEvent=function(e){var t,i=this.events;return i||(i=this.events={}),e&&((t=i[e])||(t=[],i[e]=t),i=t),i},d.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},d.prototype._indexOfContext=function(e){for(var t=this._safeContext(),i=0;t[i];){if(e===t[i][0])return i;i+=1}return-1},d.prototype._memorizeContext=function(e){var t,i;r(e)&&(t=this._safeContext(),(i=this._indexOfContext(e))>-1?t[i][1]+=1:t.push([e,1]))},d.prototype._forgetContext=function(e){var t,i;r(e)&&(t=this._safeContext(),(i=this._indexOfContext(e))>-1&&(t[i][1]-=1,t[i][1]<=0&&t.splice(i,1)))},d.prototype._bindEvent=function(e,t,i){var n=this._safeEvent(e);this._memorizeContext(i),n.push(this._getHandlerItem(t,i))},d.prototype.on=function(e,t,i){var n=this;a(e)?(e=e.split(l),u(e,(function(e){n._bindEvent(e,t,i)}))):s(e)&&(i=t,u(e,(function(e,t){n.on(t,e,i)})))},d.prototype.once=function(e,t,i){var n=this;if(s(e))return i=t,void u(e,(function(e,t){n.once(t,e,i)}));this.on(e,(function r(){t.apply(i,arguments),n.off(e,r,i)}),i)},d.prototype._spliceMatches=function(e,t){var i,n=0;if(o(e))for(i=e.length;n<i;n+=1)!0===t(e[n])&&(e.splice(n,1),i-=1,n-=1)},d.prototype._matchHandler=function(e){var t=this;return function(i){var n=e===i.handler;return n&&t._forgetContext(i.context),n}},d.prototype._matchContext=function(e){var t=this;return function(i){var n=e===i.context;return n&&t._forgetContext(i.context),n}},d.prototype._matchHandlerAndContext=function(e,t){var i=this;return function(n){var r=e===n.handler,a=t===n.context,s=r&&a;return s&&i._forgetContext(n.context),s}},d.prototype._offByEventName=function(e,t){var i=this,n=c(t),r=i._matchHandler(t);e=e.split(l),u(e,(function(e){var t=i._safeEvent(e);n?i._spliceMatches(t,r):(u(t,(function(e){i._forgetContext(e.context)})),i.events[e]=[])}))},d.prototype._offByHandler=function(e){var t=this,i=this._matchHandler(e);u(this._safeEvent(),(function(e){t._spliceMatches(e,i)}))},d.prototype._offByObject=function(e,t){var i,n=this;this._indexOfContext(e)<0?u(e,(function(e,t){n.off(t,e)})):a(t)?(i=this._matchContext(e),n._spliceMatches(this._safeEvent(t),i)):c(t)?(i=this._matchHandlerAndContext(t,e),u(this._safeEvent(),(function(e){n._spliceMatches(e,i)}))):(i=this._matchContext(e),u(this._safeEvent(),(function(e){n._spliceMatches(e,i)})))},d.prototype.off=function(e,t){a(e)?this._offByEventName(e,t):arguments.length?c(e)?this._offByHandler(e):s(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},d.prototype.fire=function(e){this.invoke.apply(this,arguments)},d.prototype.invoke=function(e){var t,i,n,r;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),i=Array.prototype.slice.call(arguments,1),n=0;t[n];){if(!1===(r=t[n]).handler.apply(r.context,i))return!1;n+=1}return!0},d.prototype.hasListener=function(e){return this.getListenerLength(e)>0},d.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=d},function(e,t,i){var n=i(1),r=i(15);e.exports=function(e){return!n(e)&&!r(e)}},function(e,t,i){e.exports=function(e){return null===e}},function(e,t,i){e.exports=function(e){return e===Object(e)}},function(e,t,i){e.exports=function(e,t,i){var n=0,r=e.length;for(i=i||null;n<r&&!1!==t.call(i,e[n],n,e);n+=1);}},function(e,t,i){var n=i(19);e.exports=function(e,t){var i=n(t.prototype);i.constructor=e,e.prototype=i}},function(e,t,i){e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,i){var n=i(3),r=i(7),a=i(21),s=i(22),o=i(24),c=i(25),u=i(0),l=i(4),d=i(28),h=i(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],m=["prev","next"],g=r({init:function(e,t,i){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=u({},f,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(i)},_setRootElement:function(e){if(l(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!d(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){n(p,(function(e){this._buttons[e]=h.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){n(p,(function(e){var t="disabled"+h.capitalizeFirstLetter(e);this._buttons[t]=h.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){n(m,(function(e){var t=e+"More";this._buttons[t]=h.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,c(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,c(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,i,n=e.leftPageNumber,r=e.rightPageNumber;for(i=n;i<=r;i+=1)i===e.page?t=h.createElementByTemplate(this._template.currentPage,{page:i}):(t=h.createElementByTemplate(this._template.page,{page:i}),this._enabledPageElements.push(t)),i!==n||e.prevMore||c(t,this._firstItemClassName),i!==r||e.nextMore||c(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();s(t,"click",(function(t){var i,n,r=a(t);o(t),(n=this._getButtonType(r))||(i=this._getPageNumber(r)),e(n,i)}),this)},_getButtonType:function(e){var t,i=this._buttons;return n(i,(function(i,n){return!h.isContained(e,i)||(t=n,!1)}),this),t},_getPageNumber:function(e){var t,i=this._findPageElement(e);return i&&(t=parseInt(i.innerText,10)),t},_findPageElement:function(e){for(var t,i=0,n=this._enabledPageElements.length;i<n;i+=1)if(t=this._enabledPageElements[i],h.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],n(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=g},function(e,t,i){e.exports=function(e){return e.target||e.srcElement}},function(e,t,i){var n=i(4),r=i(3),a=i(23);function s(e,t,i,n){function s(t){i.call(n||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,s):"attachEvent"in e&&e.attachEvent("on"+t,s),function(e,t,i,n){var s=a(e,t),o=!1;r(s,(function(e){return e.handler!==i||(o=!0,!1)})),o||s.push({handler:i,wrappedHandler:n})}(e,t,i,s)}e.exports=function(e,t,i,a){n(t)?r(t.split(/\s+/g),(function(t){s(e,t,i,a)})):r(t,(function(t,n){s(e,n,t,i)}))}},function(e,t,i){var n="_feEventKey";e.exports=function(e,t){var i,r=e[n];return r||(r=e[n]={}),(i=r[t])||(i=r[t]=[]),i}},function(e,t,i){e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,i){var n=i(3),r=i(8),a=i(26),s=i(27);e.exports=function(e){var t,i=Array.prototype.slice.call(arguments,1),o=e.classList,c=[];o?n(i,(function(t){e.classList.add(t)})):((t=a(e))&&(i=[].concat(t.split(/\s+/),i)),n(i,(function(e){r(e,c)<0&&c.push(e)})),s(e,c))}},function(e,t,i){var n=i(1);e.exports=function(e){return e&&e.className?n(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,i){var n=i(2),r=i(1);e.exports=function(e,t){t=(t=n(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,i){e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,i){var n=i(8),r=i(3),a=i(2),s=i(4),o=i(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,d=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,h=/\./,f=/^["']\w+["']$/,p=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(e,t,i){var n=function(e,t){var i=[e],n=[],a=0,s=0;return r(t,(function(e,r){0===e.indexOf("if")?a+=1:"/if"===e?a-=1:a||0!==e.indexOf("elseif")&&"else"!==e||(i.push("else"===e?["true"]:e.split(" ").slice(1)),n.push(t.slice(s,r)),s=r+1)})),n.push(t.slice(s)),{exps:i,sourcesInsideIf:n}}(e,t),a=!1,s="";return r(n.exps,(function(e,t){return(a=w(e,i))&&(s=_(n.sourcesInsideIf[t],i)),!a})),s},each:function(e,t,i){var n=w(e,i),s=a(n)?"@index":"@key",c={},u="";return r(n,(function(e,n){c[s]=n,c["@this"]=e,o(i,c),u+=_(t.slice(),i)})),u},with:function(e,t,i){var r=n("as",e),a=e[r+1],s=w(e.slice(0,r),i),c={};return c[a]=s,_(t,o(i,c))||""}},v=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var i,n,r=[],a=0;for(t.global||(t=new RegExp(t,"g")),i=t.exec(e);null!==i;)n=i.index,r.push(e.slice(a,n)),a=n+i[0].length,i=t.exec(e);return r.push(e.slice(a)),r};function b(e,t){var i,n=t[e];return"true"===e?n=!0:"false"===e?n=!1:f.test(e)?n=e.replace(p,""):u.test(e)?n=b((i=e.split(l))[0],t)[b(i[1],t)]:d.test(e)?n=b((i=e.split(h))[0],t)[i[1]]:m.test(e)&&(n=parseFloat(e)),n}function y(e,t,i){for(var n,r,a,o,c=g[e],u=1,l=2,d=t[l];u&&s(d);)0===d.indexOf(e)?u+=1:0===d.indexOf("/"+e)&&(u-=1,n=l),d=t[l+=2];if(u)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=c(t[0].split(" ").slice(1),(r=0,a=n,(o=t.splice(r+1,a-r)).pop(),o),i),t}function w(e,t){var i=b(e[0],t);return i instanceof Function?function(e,t,i){var n=[];return r(t,(function(e){n.push(b(e,i))})),e.apply(null,n)}(i,e.slice(1),t):i}function _(e,t){for(var i,n,r,a=1,o=e[a];s(o);)n=(i=o.split(" "))[0],g[n]?(r=y(n,e.splice(a,e.length-a),t),e=e.concat(r)):e[a]=w(i,t),o=e[a+=2];return e.join("")}e.exports=function(e,t){return _(v(e,c),t)}},function(e,t,i){var n=i(1),r=i(31);e.exports=function(e,t){var i=location.hostname,a="TOAST UI "+e+" for "+i+": Statistics",s=window.localStorage.getItem(a);(n(window.tui)||!1!==window.tui.usageStatistics)&&(s&&!function(e){return(new Date).getTime()-e>6048e5}(s)||(window.localStorage.setItem(a,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:i,dp:i,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,i){var n=i(6);e.exports=function(e,t){var i=document.createElement("img"),r="";return n(t,(function(e,t){r+="&"+t+"="+e})),r=r.substring(1),i.src=e+"?"+r,i.style.display="none",document.body.appendChild(i),document.body.removeChild(i),i}}])},hs=ds();var fs=a("7Y9D8");const ps=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"},{id:18,name:"Drama"}];i(fs).Notify.init({width:"280px",position:"center-top",distance:"10px",opacity:1,timeout:3e3});const ms=document.querySelector("#search-form"),gs=document.querySelector(".js-movies-wrapper");function vs(e){const t=e.map((e=>{const t=new Date(`${e.release_date}`).getFullYear(),i=e.genre_ids.map((e=>{const t=ps.find((t=>t.id===e));return t?t.name:""}));let n="";var r;return n=i.length>2?(r=i,r.slice(0,2)).join(", ")+", other":i.join(", "),`<div class="thumb">\n    <ul class="carditem" data-id='${e.id}'>\n        <li class="cardimg-wrap">\n            <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="poster of the movie ${e.original_title}"\n                class="cardimg"\n            />\n        </li>\n        <li class="cardtext-wrap">\n            <h2 class="cardname">${e.original_title}</h2>\n            <div class="cardinfo">\n                <p class="cardgenres">${n}</span></p>\n                <p class="cardyear">${t}</p>\n            </div>\n        </li>\n    </ul>\n</div>\n`})).join("");return gs.insertAdjacentHTML("beforeend",t),t}ms.addEventListener("submit",(async e=>{e.preventDefault();const t=e.currentTarget.searchQuery.value.trim();if(t)try{const{results:e}=await us(t);gs.innerHTML="",vs(e)}catch(e){i(fs).Notify.info(`No movies found with name "${t}" Enter the correct movie name.`)}else i(fs).Notify.info("Please fill in the input field for image search")}));let bs=1;var ys=class{constructor(){document.querySelector(".tui-pagination").addEventListener("click",this.pageButtonNext)}paginationFunction(e){const t=document.querySelector(".tui-pagination"),n={totalItems:1e4,itemsPerPage:`${e.length}`,visiblePages:5,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},r=new(i(hs))(t,n);r.on("beforeMove",(function(e){bs=e.page})),r.on("afterMove",(function(e){const t=new ls;t.page=bs,t.fetchPopularMovies().then((e=>{e.page=bs;document.querySelector(".js-movies-wrapper").innerHTML="",vs(e.results)}))}))}pageButtonNext(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"});const t=document.querySelector(".tui-pagination");new(i(hs))(t)}};document.getElementById("uk");const ws=new ls,_s=new ys;(async()=>{try{const{results:e}=await ws.fetchPopularMovies();if(vs(e),0===e.length||!e)return;_s.paginationFunction(e)}catch(e){console.log(e)}})(),a("cBSRC"),a("bBYeD"),a("3sLj0");
//# sourceMappingURL=index.0e3cd53f.js.map
