var t,r,n,o,i,a,s,u,c,f,l,h,g,v,p,d,y,b,m,w,E,T,S,A,R,O,x,_,I,k,j,M,P,L,N,C,F,D,U,B,z,$,H,q,W,V,G,Y,J,K,X,Q,Z=globalThis;function tt(t){return t&&t.__esModule?t.default:t}var tr={},te={},tn=Z.parcelRequire3a11;null==tn&&((tn=function(t){if(t in tr)return tr[t].exports;if(t in te){var r=te[t];delete te[t];var n={id:t,exports:{}};return tr[t]=n,r.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,r){te[t]=r},Z.parcelRequire3a11=tn);var to=tn.register;to("isAV7",function(t,r){tn("5tjRy"),t.exports=globalThis}),to("5tjRy",function(t,r){var n=function(t){return t&&t.Math===Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
n("object"==typeof self&&self)||n("object"==typeof Z&&Z)||n("object"==typeof t.exports&&t.exports)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||Function("return this")()});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ti=function(t){var r,n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,r,n){t[r]=n.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function f(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
f({},"")}catch(t){f=function(t,r,n){return t[r]=n}}function l(t,n,o,a){var s,u,c=Object.create((n&&n.prototype instanceof y?n:y).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(s=new _(a||[]),u=g,function(n,i){if(u===v)throw Error("Generator is already running");if(u===p){if("throw"===n)throw i;// Be forgiving, per GeneratorResume behavior specified since ES2015:
// ES2015 spec, step 3: https://262.ecma-international.org/6.0/#sec-generatorresume
// Latest spec, step 2: https://tc39.es/ecma262/#sec-generatorresume
return{value:r,done:!0}}for(s.method=n,s.arg=i;;){var a=s.delegate;if(a){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(n,o){var i=o.method,a=n.iterator[i];if(a===r)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next method, always terminate the
// yield* loop.
o.delegate=null,"throw"===i&&n.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
o.method="return",o.arg=r,t(n,o),"throw"===o.method)||"return"!==i&&(o.method="throw",o.arg=TypeError("The iterator does not provide a '"+i+"' method")),d);var s=h(a,n.iterator,o.arg);if("throw"===s.type)return o.method="throw",o.arg=s.arg,o.delegate=null,d;var u=s.arg;return u?u.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
o[n.resultName]=u.value,// Resume execution at the desired location (see delegateYield).
o.next=n.nextLoc,"return"!==o.method&&(o.method="next",o.arg=r),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
o.delegate=null,d):u:(o.method="throw",o.arg=TypeError("iterator result is not an object"),o.delegate=null,d)}(a,s);if(c){if(c===d)continue;return c}}if("next"===s.method)// function.sent implementation.
s.sent=s._sent=s.arg;else if("throw"===s.method){if(u===g)throw u=p,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);u=v;var f=h(t,o,s);if("normal"===f.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
u=s.done?p:"suspendedYield",f.arg===d)continue;return{value:f.arg,done:s.done}}"throw"===f.type&&(u=p,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
s.method="throw",s.arg=f.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function h(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var g="suspendedStart",v="executing",p="completed",d={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function y(){}function b(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var w={};f(w,s,function(){return this});var E=Object.getPrototypeOf,T=E&&E(E(I([])));T&&T!==n&&o.call(T,s)&&// of the polyfill.
(w=T);var S=m.prototype=y.prototype=Object.create(w);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function A(t){["next","throw","return"].forEach(function(r){f(t,r,function(t){return this._invoke(r,t)})})}function R(t,r){var n;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,a){function s(){return new r(function(n,s){!function n(i,a,s,u){var c=h(t[i],t,a);if("throw"===c.type)u(c.arg);else{var f=c.arg,l=f.value;return l&&"object"==typeof l&&o.call(l,"__await")?r.resolve(l.__await).then(function(t){n("next",t,s,u)},function(t){n("throw",t,s,u)}):r.resolve(l).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
f.value=t,s(f)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return n("throw",t,s,u)})}}(i,a,n,s)})}return n=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
n?n.then(s,// invocations of the iterator.
s):s()}})}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function x(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function I(t){if(null!=t){var n=t[s];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(o.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=r,n.done=!0,n};return a.next=a}}throw TypeError(typeof t+" is not iterable")}return b.prototype=m,i(S,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:b,configurable:!0}),b.displayName=f(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},A(R.prototype),f(R.prototype,u,function(){return this}),t.AsyncIterator=R,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(r,n,o,i,a){void 0===a&&(a=Promise);var s=new R(l(r,n,o,i),a);return t.isGeneratorFunction(n)?s// If outerFn is a generator, return the full iterator.
:s.next().then(function(t){return t.done?t.value:s.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
A(S),f(S,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
f(S,s,function(){return this}),f(S,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=Object(t),n=[];for(var o in r)n.push(o);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in r)return t.value=o,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=I,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(x),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(o,i){return u.type="throw",u.arg=t,n.next=o,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
n.method="next",n.arg=r),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],u=s.completion;if("root"===s.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(s.tryLoc<=this.prev){var c=o.call(s,"catchLoc"),f=o.call(s,"finallyLoc");if(c&&f){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else if(f){if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&o.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&// location outside the try/catch block.
(a=null);var s=a?a.completion:{};return(s.type=t,s.arg=r,a)?(this.method="next",this.next=a.finallyLoc,d):this.complete(s)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var i=o.arg;x(n)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,n,o){return this.delegate={iterator:I(t),resultName:n,nextLoc:o},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=r),d}},t}({});try{regeneratorRuntime=ti}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=ti:Function("r","regeneratorRuntime = r")(ti)}const ta="https://forkify-api.herokuapp.com/api/v2/recipes",ts="e624702c-c009-42ec-a68c-eecf71e3d46a",tu=async function(t,r){try{let n=r?fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}):fetch(t),o=await Promise.race([n,new Promise(function(t,r){setTimeout(function(){r(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await o.json();if(!o.ok)throw Error(`${i.message} (${o.status})`);return i}catch(t){throw t}},tc={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},tf=function(t){let{recipe:r}=t.data;return{id:r.id,title:r.title,publisher:r.publisher,sourceUrl:r.source_url,image:r.image_url,servings:r.servings,cookingTime:r.cooking_time,ingredients:r.ingredients,...r.key&&{key:r.key}}},tl=async function(t){try{let r=await tu(`${ta}${t}?key=${ts}`);tc.recipe=tf(r),tc.bookmarks.some(r=>r.id===t)?tc.recipe.bookmarked=!0:tc.recipe.bookmarked=!1,console.log(tc.recipe)}catch(t){throw console.error(`${t}`),t}},th=async function(t){try{tc.search.query=t;let r=await tu(`${ta}?search=${t}&?key=${ts}`);console.log(r),tc.search.results=r.data.recipes.map(t=>({id:t.id,title:t.title,publisher:t.publisher,image:t.image_url,...t.key&&{key:t.key}})),console.log(tc.search.results),tc.search.results=1}catch(t){throw console.error(`${t}`),t}},tg=function(t=tc.search.page){tc.search.page=t;let r=(t-1)*tc.search.resultsPerPage,n=t*tc.search.resultsPerPage;//0;
//console.log(start, end);
return tc.search.results.slice(r,n)},tv=function(t){tc.recipe.ingredients.forEach(r=>{r.quantity=r.quantity*t/tc.recipe.servings;// newQt=oldQt+newServings / oldServings //
}),tc.recipe.servings=t},tp=function(){localStorage.setItem("bookmarks",JSON.stringify(tc.bookmarks))},ty=function(t){//Add bookmark
tc.bookmarks.push(t),t.id===tc.recipe.id&&(tc.recipe.bookmarked=!0),tp()},tb=function(t){// Delete bookmark
let r=tc.bookmarks.findIndex(r=>r.id===t);tc.bookmarks.splice(r,1),t===tc.recipe.id&&(tc.recipe.bookmarked=!0),tp()};!function(){let t=localStorage.getItem("bookmars");t&&(tc.bookmarks=JSON.parse(t))}();const tm=async function(t){try{let r=Object.entries(t).filter(t=>t[0].startsWith("ingredient")&&""!==t[1]).map(t=>{let r=t[1].split(",").map(t=>t.trim());//const ingArr = ing[1].replaceAll(' ', '').split(',');
if(3!==r.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[n,o,i]=r;return{quantity:n?+n:null,unit:o,description:i}}),n={title:t.title,source_url:t.sourceUrl,image_url:t.image,publisher:t.publisher,cooking_time:+t.cookingTime,servings:+t.servings,ingredients:r},o=await tu(`${ta}?key=${ts}`,n);tc.recipe=tf(o),ty(tc.recipe)}catch(t){throw t}};var tw={};tw=new URL("icons.c14567a0.svg",import.meta.url).toString();class tE{_data;/**
   * Render the objects to the DOM
   * @param {Object | Object[]} data The data to berendered(e.g. recipe)
   * @param {boolean} [render] If false, create markup string insted of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Olsys Pandos
   * @todo Finish implementation
   */render(t,r=!0){if(!t||Array.isArray(t)&&0===t.length)return this.renderError();this._data=t;let n=this._generateMarkup();if(!r)return n;this._clear,this._parentElement.instertAdjacentHTML("afterbegin",n)}update(t){this._data=t;let r=this._generateMarkup(),n=document.createRange().createContextualFragment(r),o=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));o.forEach((t,r)=>{let n=i[r];console.log(n,t.isEqualNode(n)),t.isEqualNode(n)||t.firstChild?.nodeValue.trim()===""||(n.textContent=t.textContent),t.isEqualNode(n)||Array.from(t.attributes).forEach(t=>n.setAttribute(t.name,t.value))})}_clear(){//console.log(this._parentElement);
this._parentElement.innerHTML=""}renderSpinner(){let t=`
    <div class="spinner">
            <svg>
              <use href="${/*@__PURE__*/tt(tw)}#icon-loader"></use>
            </svg>
          </div>
    `;this._clear,this._parentElement.instertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){let r=`
          <div class="error">
            <div>
              <svg>
                <use href="${/*@__PURE__*/tt(tw)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${t}</p>
          </div>
          `;this._clear,this._parentElement.instertAdjacentHTML("afterbegin",r)}renderMessage(t=this._message){let r=`
          <div class="message">
            <div>
              <svg>
                <use href="${/*@__PURE__*/tt(tw)}#icon-smile"></use>
              </svg>
            </div>
            <p>${t}</p>
          </div>
          `;this._clear,this._parentElement.instertAdjacentHTML("afterbegin",r)}}(Fraction=function(t,r){/* double argument invocation */if(void 0!==t&&r)"number"==typeof t&&"number"==typeof r?(this.numerator=t,this.denominator=r):"string"==typeof t&&"string"==typeof r&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(t),this.denominator=parseInt(r));else if(void 0===r){if("number"==typeof(num=t))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var n,o,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(n=i[0]),i[1]&&(o=i[1]),n%1==0&&o&&o.match("/"))return new Fraction(n).add(new Fraction(o));// could not parse
if(!n||o)return;/* simple fraction e.g. 'A/B' */if("string"==typeof n&&n.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var a=n.split("/");this.numerator=a[0],this.denominator=a[1];/* string floating point */}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var t=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),r=this.numerator%this.denominator,n=this.denominator,o=[];return 0!=t&&o.push(t),0!=r&&o.push((0===t?r:Math.abs(r))+"/"+n),o.length>0?o.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var r=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=r.denominator,r.rescale(t.denominator),t.rescale(td),r.numerator+=t.numerator,r.normalize()},Fraction.prototype.subtract=function(t){var r=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=r.denominator,r.rescale(t.denominator),t.rescale(td),r.numerator-=t.numerator,r.normalize()},Fraction.prototype.multiply=function(t){var r=this.clone();if(t instanceof Fraction)r.numerator*=t.numerator,r.denominator*=t.denominator;else{if("number"!=typeof t)return r.multiply(new Fraction(t));r.numerator*=t}return r.normalize()},Fraction.prototype.divide=function(t){var r=this.clone();if(t instanceof Fraction)r.numerator*=t.denominator,r.denominator*=t.numerator;else{if("number"!=typeof t)return r.divide(new Fraction(t));r.denominator*=t}return r.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));// fractions that are equal should have equal normalized forms
var r=this.clone().normalize(),t=t.clone().normalize();return r.numerator===t.numerator&&r.denominator===t.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(n=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},o=function(t,r){if(!r)return Math.round(t);var n=Math.pow(10,r);return Math.round(t*n)/n},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(n(this.denominator)){var t=o(this.denominator,9),r=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*r),//this.numerator *= scaleup;
this.numerator*=r}if(n(this.numerator)){var t=o(this.numerator,9),r=Math.pow(10,t.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*r),//this.numerator *= scaleup;
this.denominator*=r}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(t,r){var n=[],o=Fraction.primeFactors(t),i=Fraction.primeFactors(r);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
o.forEach(function(t){var r=i.indexOf(t);r>=0&&(n.push(t),i.splice(r,1))}),0===n.length)?1:function(){var t,r=n[0];for(t=1;t<n.length;t++)r*=n[t];return r}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(t){for(var r=Math.abs(t),n=[],o=2;o*o<=r;)r%o==0?(n.push(o),r/=o):o++;// and increment
return 1!=r&&n.push(r),n;// Return the prime factors
},console.log(h=Fraction);class tT extends tE{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(t){["hashchange","load"].forEach(r=>window.addEventListener(ev,t))}addHanlderUpdateServings(t){this._parentElement.addEventListener("click",function(r){let n=r.target.closest(".btn--update-servings");if(!n)return;console.log(n);let{updateTo:o}=+n.dataset;//console.log(updateTo);
+o>0&&t(+o)})}addHandlerAddBookmark(t){this._parentElement.addEventListener("click",function(r){let n=r.target.closest(".btn--bookmark");n&&t()})}_generateMarkup(){return console.log(this._data),`
    <figure class="recipe__fig">
          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/tt(tw)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/tt(tw)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${/*@__PURE__*/tt(tw)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${/*@__PURE__*/tt(tw)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="src/img/${/*@__PURE__*/tt(tw)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${/*@__PURE__*/tt(tw)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_generateMarkupIngredient(t){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="src/img/icons.svg#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${t.quantity?new h(t.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${t.unit}/span>
        ${t.descriptiom}
      </div>
    </li>
    `}}var tS=new tT,tA=new PreviewView;class tR extends tE{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your quert! Please try again!";_message="";_generateMarkup(){return console.log(this._data),this._data.map(t=>tA.render(t,!1)).join("")}}var tO=new tR;class tx extends tE{_parentElement=document.querySelector(".pagination");addHandlerClick(t){this._parentElement.addEventListener("click",function(r){let n=r.target.closest(".btn--inline");if(!n)return;let o=+n.dataset.goto;t(o)})}_generateMarkup(){let t=this._data.page,r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// page 1, and there are other pages
(console.log(r),1===t&&r>1)?`
      <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
            <span>Page ${t+1}</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/tt(tw)}#icon-arrow-right"></use>
            </svg>
          </button>
            
         `:t===r&&r>1?`
      <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/tt(tw)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${t-1}</span>
          </button>
          `:t<r?`
      <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/tt(tw)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${t-1}</span>
          </button>
          <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
            <span>Page ${t+1}</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/tt(tw)}#icon-arrow-right"></use>
            </svg>
          </button>

          `:"")}}var t_=new tx;class tI extends tE{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it";_message="";addHandlerRender(t){window.addEventListener("load",t)}_generateMarkup(){return console.log(this._data),this._data.map(t=>tA.render(t,!1)).join("")}}var tk=new tI;class tj extends tE{_parentElement=document.querySelector(".upload");_message="Recipe was seccesfuly uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow()}toggleWindow(){this._overlay.classList.remove("hidden"),this._window.classList.remove("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(t){this._parentElement.addEventListener("submit",function(){e.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);t(n)})}_generateMarkup(){}}var tM=new tj,tP={};tn("5tjRy");var tL={},tN={};// Detect IE8's incomplete defineProperty implementation
tL=!(tN=function(t){try{return!!t()}catch(t){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var tC={},tF={};tF=!tN(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});var tD=Function.prototype.call;tC=tF?tD.bind(tD):function(){return tD.apply(tD,arguments)};var tU={}.propertyIsEnumerable,tB=Object.getOwnPropertyDescriptor;v=tB&&!tU.call({1:2},1)?function(t){var r=tB(this,t);return!!r&&r.enumerable}:tU;var tz={};tz=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}};var t$={},tH={},tq={},tW=Function.prototype,tV=tW.call,tG=tF&&tW.bind.bind(tV,tV),tY={},tJ=(tq=tF?tG:function(t){return function(){return tV.apply(t,arguments)}})({}.toString),tK=tq("".slice);tY=function(t){return tK(tJ(t),8,-1)};var tX=Object,tQ=tq("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
tH=tN(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!tX("z").propertyIsEnumerable(0)})?function(t){return"String"===tY(t)?tQ(t,""):tX(t)}:tX;var tZ={},t0={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
t0=function(t){return null==t};var t1=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
tZ=function(t){if(t0(t))throw new t1("Can't call method on "+t);return t},t$=function(t){return tH(tZ(t))};var t2={},t5={},t6={},t4={},t3="object"==typeof document&&document.all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
t4=void 0===t3&&void 0!==t3?function(t){return"function"==typeof t||t===t3}:function(t){return"function"==typeof t},t6=function(t){return"object"==typeof t?null!==t:t4(t)};var t8={},t7={};tn("5tjRy"),t7=function(t,r){var n;return arguments.length<2?(n=globalThis[t],t4(n)?n:void 0):globalThis[t]&&globalThis[t][r]};var t9={};t9=tq({}.isPrototypeOf);var rt={},rr={},re={};tn("5tjRy");var rn={};tn("5tjRy");var ro=globalThis.navigator,ri=ro&&ro.userAgent;rn=ri?String(ri):"";var ra=globalThis.process,rs=globalThis.Deno,ru=ra&&ra.versions||rs&&rs.version,rc=ru&&ru.v8;rc&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(d=(p=rc.split("."))[0]>0&&p[0]<4?1:+(p[0]+p[1])),!d&&rn&&(!(p=rn.match(/Edge\/(\d+)/))||p[1]>=74)&&(p=rn.match(/Chrome\/(\d+)/))&&(d=+p[1]),re=d,tn("5tjRy");var rf=globalThis.String;rt=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(rr=!!Object.getOwnPropertySymbols&&!tN(function(){var t=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!rf(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&re&&re<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var rl=Object;t8=rt?function(t){return"symbol"==typeof t}:function(t){var r=t7("Symbol");return t4(r)&&t9(r.prototype,rl(t))};var rh={},rg={},rv={},rp=String;rv=function(t){try{return rp(t)}catch(t){return"Object"}};var rd=TypeError;// `Assert: IsCallable(argument) is true`
rg=function(t){if(t4(t))return t;throw new rd(rv(t)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
rh=function(t,r){var n=t[r];return t0(n)?void 0:rg(n)};var ry={},rb=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
ry=function(t,r){var n,o;if("string"===r&&t4(n=t.toString)&&!t6(o=tC(n,t))||t4(n=t.valueOf)&&!t6(o=tC(n,t))||"string"!==r&&t4(n=t.toString)&&!t6(o=tC(n,t)))return o;throw new rb("Can't convert object to primitive value")};var rm={};tn("5tjRy");var rw={},rE={},rT={};rT=!1,tn("5tjRy");var rS={};tn("5tjRy");// eslint-disable-next-line es/no-object-defineproperty -- safe
var rA=Object.defineProperty;rS=function(t,r){try{rA(globalThis,t,{value:r,configurable:!0,writable:!0})}catch(n){globalThis[t]=r}return r};var rR="__core-js_shared__",rO=rE=globalThis[rR]||rS(rR,{});(rO.versions||(rO.versions=[])).push({version:"3.39.0",mode:rT?"pure":"global",copyright:"\xa9 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",source:"https://github.com/zloirock/core-js"}),rw=function(t,r){return rE[t]||(rE[t]=r||{})};var rx={},r_={},rI=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
r_=function(t){return rI(tZ(t))};var rk=tq({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
rx=Object.hasOwn||function(t,r){return rk(r_(t),r)};var rj={},rM=0,rP=Math.random(),rL=tq(1..toString);rj=function(t){return"Symbol("+(void 0===t?"":t)+")_"+rL(++rM+rP,36)};var rN=globalThis.Symbol,rC=rw("wks"),rF=rt?rN.for||rN:rN&&rN.withoutSetter||rj,rD=TypeError,rU=(rm=function(t){return rx(rC,t)||(rC[t]=rr&&rx(rN,t)?rN[t]:rF("Symbol."+t)),rC[t]})("toPrimitive");// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
t5=function(t,r){if(!t6(t)||t8(t))return t;var n,o=rh(t,rU);if(o){if(void 0===r&&(r="default"),n=tC(o,t,r),!t6(n)||t8(n))return n;throw new rD("Can't convert object to primitive value")}return void 0===r&&(r="number"),ry(t,r)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
t2=function(t){var r=t5(t,"string");return t8(r)?r:r+""};var rB={},rz={};tn("5tjRy");var r$=globalThis.document,rH=t6(r$)&&t6(r$.createElement);rz=function(t){return rH?r$.createElement(t):{}},// Thanks to IE8 for its funny defineProperty
rB=!tL&&!tN(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(rz("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var rq=Object.getOwnPropertyDescriptor,rW=g=tL?rq:function(t,r){if(t=t$(t),r=t2(r),rB)try{return rq(t,r)}catch(t){}if(rx(t,r))return tz(!tC(v,t,r),t[r])},rV={},rG={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
rG=tL&&tN(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var rY={},rJ=String,rK=TypeError;// `Assert: Type(argument) is Object`
rY=function(t){if(t6(t))return t;throw new rK(rJ(t)+" is not an object")};var rX=TypeError,rQ=Object.defineProperty,rZ=Object.getOwnPropertyDescriptor,r0="enumerable",r1="configurable",r2="writable";y=tL?rG?function(t,r,n){if(rY(t),r=t2(r),rY(n),"function"==typeof t&&"prototype"===r&&"value"in n&&r2 in n&&!n[r2]){var o=rZ(t,r);o&&o[r2]&&(t[r]=n.value,n={configurable:r1 in n?n[r1]:o[r1],enumerable:r0 in n?n[r0]:o[r0],writable:!1})}return rQ(t,r,n)}:rQ:function(t,r,n){if(rY(t),r=t2(r),rY(n),rB)try{return rQ(t,r,n)}catch(t){}if("get"in n||"set"in n)throw new rX("Accessors not supported");return"value"in n&&(t[r]=n.value),t},rV=tL?function(t,r,n){return y(t,r,tz(1,n))}:function(t,r,n){return t[r]=n,t};var r5={},r6={},r4={},r3=Function.prototype,r8=tL&&Object.getOwnPropertyDescriptor,r7=rx(r3,"name"),r9=r7&&(!tL||tL&&r8(r3,"name").configurable),et=(r4={EXISTS:r7,PROPER:r7&&"something"===(function(){}).name,CONFIGURABLE:r9}).CONFIGURABLE,er={},ee=tq(Function.toString);t4(rE.inspectSource)||(rE.inspectSource=function(t){return ee(t)}),er=rE.inspectSource;var en={},eo={};tn("5tjRy");var ei=globalThis.WeakMap;eo=t4(ei)&&/native code/.test(String(ei)),tn("5tjRy");var ea={},es=rw("keys");ea=function(t){return es[t]||(es[t]=rj(t))};var eu={};eu={};var ec="Object already initialized",ef=globalThis.TypeError,el=globalThis.WeakMap;if(eo||rE.state){var eh=rE.state||(rE.state=new el);/* eslint-disable no-self-assign -- prototype methods protection */eh.get=eh.get,eh.has=eh.has,eh.set=eh.set,/* eslint-enable no-self-assign -- prototype methods protection */b=function(t,r){if(eh.has(t))throw new ef(ec);return r.facade=t,eh.set(t,r),r},m=function(t){return eh.get(t)||{}},w=function(t){return eh.has(t)}}else{var eg=ea("state");eu[eg]=!0,b=function(t,r){if(rx(t,eg))throw new ef(ec);return r.facade=t,rV(t,eg,r),r},m=function(t){return rx(t,eg)?t[eg]:{}},w=function(t){return rx(t,eg)}}var ep=(en={set:b,get:m,has:w,enforce:function(t){return w(t)?m(t):b(t,{})},getterFor:function(t){return function(r){var n;if(!t6(r)||(n=m(r)).type!==t)throw new ef("Incompatible receiver, "+t+" required");return n}}}).enforce,ed=en.get,ey=String,eb=Object.defineProperty,em=tq("".slice),ew=tq("".replace),eE=tq([].join),eT=tL&&!tN(function(){return 8!==eb(function(){},"length",{value:8}).length}),eS=String(String).split("String"),eA=r6=function(t,r,n){"Symbol("===em(ey(r),0,7)&&(r="["+ew(ey(r),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(r="get "+r),n&&n.setter&&(r="set "+r),(!rx(t,"name")||et&&t.name!==r)&&(tL?eb(t,"name",{value:r,configurable:!0}):t.name=r),eT&&n&&rx(n,"arity")&&t.length!==n.arity&&eb(t,"length",{value:n.arity});try{n&&rx(n,"constructor")&&n.constructor?tL&&eb(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var o=ep(t);return rx(o,"source")||(o.source=eE(eS,"string"==typeof r?r:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=eA(function(){return t4(this)&&ed(this).source||er(this)},"toString"),r5=function(t,r,n,o){o||(o={});var i=o.enumerable,a=void 0!==o.name?o.name:r;if(t4(n)&&r6(n,a,o),o.global)i?t[r]=n:rS(r,n);else{try{o.unsafe?t[r]&&(i=!0):delete t[r]}catch(t){}i?t[r]=n:y(t,r,{value:n,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return t};var eR={},eO={},ex={},e_={},eI={},ek={},ej={},eM=Math.ceil,eP=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
ej=Math.trunc||function(t){var r=+t;return(r>0?eP:eM)(r)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
ek=function(t){var r=+t;// eslint-disable-next-line no-self-compare -- NaN check
return r!=r||0===r?0:ej(r)};var eL=Math.max,eN=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
eI=function(t,r){var n=ek(t);return n<0?eL(n+r,0):eN(n,r)};var eC={},eF={},eD=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
eF=function(t){var r=ek(t);return r>0?eD(r,9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
eC=function(t){return eF(t.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var eU=function(t){return function(r,n,o){var i,a=t$(r),s=eC(a);if(0===s)return!t&&-1;var u=eI(o,s);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&n!=n){for(;s>u;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=a[u++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;s>u;u++)if((t||u in a)&&a[u]===n)return t||u||0;return!t&&-1}},eB=(e_={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:eU(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:eU(!1)}).indexOf,ez=tq([].push);ex=function(t,r){var n,o=t$(t),i=0,a=[];for(n in o)!rx(eu,n)&&rx(o,n)&&ez(a,n);// Don't enum bug & hidden keys
for(;r.length>i;)rx(o,n=r[i++])&&(~eB(a,n)||ez(a,n));return a};var e$={},eH=// IE8- don't enum bug keys
(e$=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]).concat("length","prototype");E=Object.getOwnPropertyNames||function(t){return ex(t,eH)},T=Object.getOwnPropertySymbols;var eq=tq([].concat);// all object keys, includes non-enumerable and symbols
eO=t7("Reflect","ownKeys")||function(t){var r=E(rY(t)),n=T;return n?eq(r,n(t)):r},eR=function(t,r,n){for(var o=eO(r),i=y,a=g,s=0;s<o.length;s++){var u=o[s];rx(t,u)||n&&rx(n,u)||i(t,u,a(r,u))}};var eW={},eV=/#|\.prototype\./,eG=function(t,r){var n=eJ[eY(t)];return n===eX||n!==eK&&(t4(r)?tN(r):!!r)},eY=eG.normalize=function(t){return String(t).replace(eV,".").toLowerCase()},eJ=eG.data={},eK=eG.NATIVE="N",eX=eG.POLYFILL="P";eW=eG,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/tP=function(t,r){var n,o,i,a,s,u=t.target,c=t.global,f=t.stat;if(n=c?globalThis:f?globalThis[u]||rS(u,{}):globalThis[u]&&globalThis[u].prototype)for(o in r){// contained in target
if(a=r[o],i=t.dontCallGetSet?(s=rW(n,o))&&s.value:n[o],!eW(c?o:u+(f?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;eR(a,i)}(t.sham||i&&i.sham)&&rV(a,"sham",!0),r5(n,o,a,t)}},tn("5tjRy");var eQ={},eZ={},e0={},e1=rm("toStringTag"),e2={};e2[e1]="z",e0="[object z]"===String(e2);var e5=rm("toStringTag"),e6=Object,e4="Arguments"===tY(function(){return arguments}()),e3=function(t,r){try{return t[r]}catch(t){}};// getting tag from ES6+ `Object.prototype.toString`
eZ=e0?tY:function(t){var r,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=e3(r=e6(t),e5))?n:e4?tY(r):"Object"===(o=tY(r))&&t4(r.callee)?"Arguments":o};var e8=String;eQ=function(t){if("Symbol"===eZ(t))throw TypeError("Cannot convert a Symbol value to a string");return e8(t)};var e7={},e9={};// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
e9=Object.keys||function(t){return ex(t,e$)},S=tL&&!rG?Object.defineProperties:function(t,r){rY(t);for(var n,o=t$(r),i=e9(r),a=i.length,s=0;a>s;)y(t,n=i[s++],o[n]);return t};var nt={};nt=t7("document","documentElement");var nr="prototype",ne="script",nn=ea("IE_PROTO"),no=function(){},ni=function(t){return"<"+ne+">"+t+"</"+ne+">"},na=function(t){t.write(ni("")),t.close();var r=t.parentWindow.Object;return(// eslint-disable-next-line no-useless-assignment -- avoid memory leak
t=null,r)},ns=function(){// Thrash, waste and sodomy: IE GC bug
var t,r=rz("iframe");return r.style.display="none",nt.appendChild(r),// https://github.com/zloirock/core-js/issues/475
r.src=String("java"+ne+":"),(t=r.contentWindow.document).open(),t.write(ni("document.F=Object")),t.close(),t.F},nu=function(){try{A=new ActiveXObject("htmlfile")}catch(t){}nu="undefined"!=typeof document?document.domain&&A?na(A)// old IE
:ns():na(A);// WSH
for(var t=e$.length;t--;)delete nu[nr][e$[t]];return nu()};eu[nn]=!0,// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
e7=Object.create||function(t,r){var n;return null!==t?(no[nr]=rY(t),n=new no,no[nr]=null,// add "__proto__" for Object.getPrototypeOf polyfill
n[nn]=t):n=nu(),void 0===r?n:S(n,r)};var nc=E,nf={};nf=tq([].slice);var nl="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],nh=function(t){try{return nc(t)}catch(t){return nf(nl)}};R=function(t){return nl&&"Window"===tY(t)?nh(t):nc(t$(t))};var ng={};ng=function(t,r,n){return n.get&&r6(n.get,r,{getter:!0}),n.set&&r6(n.set,r,{setter:!0}),y(t,r,n)},O=rm;var nv={},np=tn("isAV7"),nd=y;nv=function(t){var r=np.Symbol||(np.Symbol={});rx(r,t)||nd(r,t,{value:O(t)})};var ny={};ny=function(){var t=t7("Symbol"),r=t&&t.prototype,n=r&&r.valueOf,o=rm("toPrimitive");r&&!r[o]&&// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
// eslint-disable-next-line no-unused-vars -- required for .length
r5(r,o,function(t){return tC(n,this)},{arity:1})};var nb={},nm=y,nw=rm("toStringTag");nb=function(t,r,n){t&&!n&&(t=t.prototype),t&&!rx(t,nw)&&nm(t,nw,{configurable:!0,value:r})};var nE={},nT={},nS={},nA=(nS=function(t){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===tY(t))return tq(t)})(nS.bind);// optional / simple context binding
nT=function(t,r){return rg(t),void 0===r?t:tF?nA(t,r):function(){return t.apply(r,arguments)}};var nR={},nO={},nx={};// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
nx=Array.isArray||function(t){return"Array"===tY(t)};var n_={},nI=function(){},nk=t7("Reflect","construct"),nj=/^\s*(?:class|function)\b/,nM=tq(nj.exec),nP=!nj.test(nI),nL=function(t){if(!t4(t))return!1;try{return nk(nI,[],t),!0}catch(t){return!1}},nN=function(t){if(!t4(t))return!1;switch(eZ(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{// we can't check .prototype since constructors produced by .bind haven't it
// `Function#toString` throws on some built-it function in some legacy engines
// (for example, `DOMQuad` and similar in FF41-)
return nP||!!nM(nj,er(t))}catch(t){return!0}};nN.sham=!0,// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
n_=!nk||tN(function(){var t;return nL(nL.call)||!nL(Object)||!nL(function(){t=!0})||t})?nN:nL;var nC=rm("species"),nF=Array;// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
nO=function(t){var r;return nx(t)&&(r=t.constructor,n_(r)&&(r===nF||nx(r.prototype))?r=void 0:t6(r)&&null===(r=r[nC])&&(r=void 0)),void 0===r?nF:r},// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
nR=function(t,r){return new(nO(t))(0===r?0:r)};var nD=tq([].push),nU=function(t){var r=1===t,n=2===t,o=3===t,i=4===t,a=6===t,s=7===t,u=5===t||a;return function(c,f,l,h){for(var g,v,p=r_(c),d=tH(p),y=eC(d),b=nT(f,l),m=0,w=h||nR,E=r?w(c,y):n||s?w(c,0):void 0;y>m;m++)if((u||m in d)&&(v=b(g=d[m],m,p),t)){if(r)E[m]=v;// map
else if(v)switch(t){case 3:return!0;// some
case 5:return g;// find
case 6:return m;// findIndex
case 2:nD(E,g);// filter
}else switch(t){case 4:return!1;// every
case 7:nD(E,g);// filterReject
}}return a?-1:o||i?i:E}},nB=(nE={// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
forEach:nU(0),// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
map:nU(1),// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
filter:nU(2),// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
some:nU(3),// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
every:nU(4),// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
find:nU(5),// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findIndex
findIndex:nU(6),// `Array.prototype.filterReject` method
// https://github.com/tc39/proposal-array-filtering
filterReject:nU(7)}).forEach,nz=ea("hidden"),n$="Symbol",nH="prototype",nq=en.set,nW=en.getterFor(n$),nV=Object[nH],nG=globalThis.Symbol,nY=nG&&nG[nH],nJ=globalThis.RangeError,nK=globalThis.TypeError,nX=globalThis.QObject,nQ=g,nZ=y,n0=R,n1=v,n2=tq([].push),n5=rw("symbols"),n6=rw("op-symbols"),n4=rw("wks"),n3=!nX||!nX[nH]||!nX[nH].findChild,n8=function(t,r,n){var o=nQ(nV,r);o&&delete nV[r],nZ(t,r,n),o&&t!==nV&&nZ(nV,r,o)},n7=tL&&tN(function(){return 7!==e7(nZ({},"a",{get:function(){return nZ(this,"a",{value:7}).a}})).a})?n8:nZ,n9=function(t,r){var n=n5[t]=e7(nY);return nq(n,{type:n$,tag:t,description:r}),tL||(n.description=r),n},ot=function(t,r,n){t===nV&&ot(n6,r,n),rY(t);var o=t2(r);return(rY(n),rx(n5,o))?(n.enumerable?(rx(t,nz)&&t[nz][o]&&(t[nz][o]=!1),n=e7(n,{enumerable:tz(0,!1)})):(rx(t,nz)||nZ(t,nz,tz(1,e7(null))),t[nz][o]=!0),n7(t,o,n)):nZ(t,o,n)},or=function(t,r){rY(t);var n=t$(r);return nB(e9(n).concat(oi(n)),function(r){(!tL||tC(oe,n,r))&&ot(t,r,n[r])}),t},oe=function(t){var r=t2(t),n=tC(n1,this,r);return(!(this===nV&&rx(n5,r))||!!rx(n6,r))&&(!(n||!rx(this,r)||!rx(n5,r)||rx(this,nz)&&this[nz][r])||n)},on=function(t,r){var n=t$(t),o=t2(r);if(!(n===nV&&rx(n5,o))||rx(n6,o)){var i=nQ(n,o);return i&&rx(n5,o)&&!(rx(n,nz)&&n[nz][o])&&(i.enumerable=!0),i}},oo=function(t){var r=n0(t$(t)),n=[];return nB(r,function(t){rx(n5,t)||rx(eu,t)||n2(n,t)}),n},oi=function(t){var r=t===nV,n=n0(r?n6:t$(t)),o=[];return nB(n,function(t){rx(n5,t)&&(!r||rx(nV,t))&&n2(o,n5[t])}),o};rr||(nY=(nG=function(){if(t9(nY,this))throw new nK("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?eQ(arguments[0]):void 0,r=rj(t),n=function(t){var o=void 0===this?globalThis:this;o===nV&&tC(n,n6,t),rx(o,nz)&&rx(o[nz],r)&&(o[nz][r]=!1);var i=tz(1,t);try{n7(o,r,i)}catch(t){if(!(t instanceof nJ))throw t;n8(o,r,i)}};return tL&&n3&&n7(nV,r,{configurable:!0,set:n}),n9(r,t)})[nH],r5(nY,"toString",function(){return nW(this).tag}),r5(nG,"withoutSetter",function(t){return n9(rj(t),t)}),v=oe,y=ot,S=or,g=on,E=R=oo,T=oi,O=function(t){return n9(rm(t),t)},tL&&(// https://github.com/tc39/proposal-Symbol-description
ng(nY,"description",{configurable:!0,get:function(){return nW(this).description}}),rT||r5(nV,"propertyIsEnumerable",oe,{unsafe:!0}))),tP({global:!0,constructor:!0,wrap:!0,forced:!rr,sham:!rr},{Symbol:nG}),nB(e9(n4),function(t){nv(t)}),tP({target:n$,stat:!0,forced:!rr},{useSetter:function(){n3=!0},useSimple:function(){n3=!1}}),tP({target:"Object",stat:!0,forced:!rr,sham:!tL},{// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
create:function(t,r){return void 0===r?e7(t):or(e7(t),r)},// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
defineProperty:ot,// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
defineProperties:or,// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
getOwnPropertyDescriptor:on}),tP({target:"Object",stat:!0,forced:!rr},{// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
getOwnPropertyNames:oo}),// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
ny(),// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
nb(nG,n$),eu[nz]=!0;var oa={};/* eslint-disable es/no-symbol -- safe */oa=rr&&!!Symbol.for&&!!Symbol.keyFor;var os=rw("string-to-symbol-registry"),ou=rw("symbol-to-string-registry");// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
tP({target:"Symbol",stat:!0,forced:!oa},{for:function(t){var r=eQ(t);if(rx(os,r))return os[r];var n=t7("Symbol")(r);return os[r]=n,ou[n]=r,n}});var oc=rw("symbol-to-string-registry");// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
tP({target:"Symbol",stat:!0,forced:!oa},{keyFor:function(t){if(!t8(t))throw TypeError(rv(t)+" is not a symbol");if(rx(oc,t))return oc[t]}});var of={},ol=Function.prototype,oh=ol.apply,og=ol.call;// eslint-disable-next-line es/no-reflect -- safe
of="object"==typeof Reflect&&Reflect.apply||(tF?og.bind(oh):function(){return og.apply(oh,arguments)});var ov={},op=tq([].push);ov=function(t){if(t4(t))return t;if(nx(t)){for(var r=t.length,n=[],o=0;o<r;o++){var i=t[o];"string"==typeof i?op(n,i):("number"==typeof i||"Number"===tY(i)||"String"===tY(i))&&op(n,eQ(i))}var a=n.length,s=!0;return function(t,r){if(s)return s=!1,r;if(nx(this))return r;for(var o=0;o<a;o++)if(n[o]===t)return r}}};var od=String,oy=t7("JSON","stringify"),ob=tq(/./.exec),om=tq("".charAt),ow=tq("".charCodeAt),oE=tq("".replace),oT=tq(1..toString),oS=/[\uD800-\uDFFF]/g,oA=/^[\uD800-\uDBFF]$/,oR=/^[\uDC00-\uDFFF]$/,oO=!rr||tN(function(){var t=t7("Symbol")("stringify detection");// MS Edge converts symbol values to JSON as {}
return"[null]"!==oy([t])||"{}"!==oy({a:t})||"{}"!==oy(Object(t))}),ox=tN(function(){return'"\udf06\ud834"'!==oy("\uDF06\uD834")||'"\udead"'!==oy("\uDEAD")}),o_=function(t,r){var n=nf(arguments),o=ov(r);if(!(!t4(o)&&(void 0===t||t8(t))))return n[1]=function(t,r){if(t4(o)&&(r=tC(o,this,od(t),r)),!t8(r))return r},of(oy,null,n);// IE8 returns string on undefined
},oI=function(t,r,n){var o=om(n,r-1),i=om(n,r+1);return ob(oA,t)&&!ob(oR,i)||ob(oR,t)&&!ob(oA,o)?"\\u"+oT(ow(t,0),16):t};oy&&// https://tc39.es/ecma262/#sec-json.stringify
tP({target:"JSON",stat:!0,arity:3,forced:oO||ox},{// eslint-disable-next-line no-unused-vars -- required for `.length`
stringify:function(t,r,n){var o=nf(arguments),i=of(oO?o_:oy,null,o);return ox&&"string"==typeof i?oE(i,oS,oI):i}});// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var ok=!rr||tN(function(){T(1)});// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
tP({target:"Object",stat:!0,forced:ok},{getOwnPropertySymbols:function(t){var r=T;return r?r(r_(t)):[]}}),tn("5tjRy");var oj=globalThis.Symbol,oM=oj&&oj.prototype;if(tL&&t4(oj)&&(!("description"in oM)||// Safari 12 bug
void 0!==oj().description)){var oP={},oL=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:eQ(arguments[0]),r=t9(oM,this)?new oj(t):void 0===t?oj():oj(t);return""===t&&(oP[r]=!0),r};eR(oL,oj),oL.prototype=oM,oM.constructor=oL;var oN="Symbol(description detection)"===String(oj("description detection")),oC=tq(oM.valueOf),oF=tq(oM.toString),oD=/^Symbol\((.*)\)[^)]+$/,oU=tq("".replace),oB=tq("".slice);ng(oM,"description",{configurable:!0,get:function(){var t=oC(this);if(rx(oP,t))return"";var r=oF(t),n=oN?oB(r,7,-1):oU(r,oD,"$1");return""===n?void 0:n}}),tP({global:!0,constructor:!0,forced:!0},{Symbol:oL})}// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
nv("asyncIterator"),// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
nv("hasInstance"),// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
nv("isConcatSpreadable"),// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
nv("iterator"),// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
nv("match"),// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
nv("matchAll"),// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
nv("replace"),// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
nv("search"),// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
nv("species"),// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
nv("split"),// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
nv("toPrimitive"),// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
ny(),// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
nv("toStringTag"),// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
nb(t7("Symbol"),"Symbol"),// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
nv("unscopables"),tn("5tjRy");var oz={},o$={},oH={};oH=function(t,r,n){try{// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
return tq(rg(Object.getOwnPropertyDescriptor(t,r)[n]))}catch(t){}};var oq={},oW={};oW=function(t){return t6(t)||null===t};var oV=String,oG=TypeError;oq=function(t){if(oW(t))return t;throw new oG("Can't set "+oV(t)+" as a prototype")},// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
o$=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,n={};try{(t=oH(Object.prototype,"__proto__","set"))(n,[]),r=n instanceof Array}catch(t){}return function(n,o){return tZ(n),oq(o),t6(n)&&(r?t(n,o):n.__proto__=o),n}}():void 0);var oY={},oJ=y;oY=function(t,r,n){n in t||oJ(t,n,{configurable:!0,get:function(){return r[n]},set:function(t){r[n]=t}})};var oK={};// makes subclassing work correct for wrapped built-ins
oK=function(t,r,n){var o,i;return o$&&// we haven't completely correct pre-ES6 way for getting `new.target`, so use this
t4(o=r.constructor)&&o!==n&&t6(i=o.prototype)&&i!==n.prototype&&o$(t,i),t};var oX={};oX=function(t,r){return void 0===t?arguments.length<2?"":r:eQ(t)};var oQ={};// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
oQ=function(t,r){t6(r)&&"cause"in r&&rV(t,"cause",r.cause)};var oZ={},o0={},o1=Error,o2=tq("".replace),o5=String(new o1("zxcasd").stack),o6=/\n\s*at [^:]*:[^\n]*/,o4=o6.test(o5);o0=function(t,r){if(o4&&"string"==typeof t&&!o1.prepareStackTrace)for(;r--;)t=o2(t,o6,"");return t};var o3={};o3=!tN(function(){var t=Error("a");return!("stack"in t)||(// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty(t,"stack",tz(1,7)),7!==t.stack)});// non-standard V8
var o8=Error.captureStackTrace;oZ=function(t,r,n,o){o3&&(o8?o8(t,r):rV(t,"stack",o0(n,o)))},oz=function(t,r,n,o){var i="stackTraceLimit",a=o?2:1,s=t.split("."),u=s[s.length-1],c=t7.apply(null,s);if(c){var f=c.prototype;if(!rT&&rx(f,"cause")&&delete f.cause,!n)return c;var l=t7("Error"),h=r(function(t,r){var n=oX(o?r:t,void 0),i=o?new c(t):new c;return void 0!==n&&rV(i,"message",n),oZ(i,h,i.stack,2),this&&t9(f,this)&&oK(i,this,h),arguments.length>a&&oQ(i,arguments[a]),i});if(h.prototype=f,"Error"!==u?o$?o$(h,l):eR(h,l,{name:!0}):tL&&i in c&&(oY(h,c,i),oY(h,c,"prepareStackTrace")),eR(h,c),!rT)try{f.name!==u&&rV(f,"name",u),f.constructor=h}catch(t){}return h}};var o7="WebAssembly",o9=globalThis[o7],it=7!==Error("e",{cause:7}).cause,ir=function(t,r){var n={};n[t]=oz(t,r,it),tP({global:!0,constructor:!0,arity:1,forced:it},n)},ie=function(t,r){if(o9&&o9[t]){var n={};n[t]=oz(o7+"."+t,r,it),tP({target:o7,stat:!0,constructor:!0,arity:1,forced:it},n)}};// https://tc39.es/ecma262/#sec-nativeerror
ir("Error",function(t){return function(r){return of(t,this,arguments)}}),ir("EvalError",function(t){return function(r){return of(t,this,arguments)}}),ir("RangeError",function(t){return function(r){return of(t,this,arguments)}}),ir("ReferenceError",function(t){return function(r){return of(t,this,arguments)}}),ir("SyntaxError",function(t){return function(r){return of(t,this,arguments)}}),ir("TypeError",function(t){return function(r){return of(t,this,arguments)}}),ir("URIError",function(t){return function(r){return of(t,this,arguments)}}),ie("CompileError",function(t){return function(r){return of(t,this,arguments)}}),ie("LinkError",function(t){return function(r){return of(t,this,arguments)}}),ie("RuntimeError",function(t){return function(r){return of(t,this,arguments)}});var io={},ii=Error.prototype.toString;io=tN(function(){if(tL){// Chrome 32- incorrectly call accessor
// eslint-disable-next-line es/no-object-create, es/no-object-defineproperty -- safe
var t=Object.create(Object.defineProperty({},"name",{get:function(){return this===t}}));if("true"!==ii.call(t))return!0}// FF10- does not properly handle non-strings
return"2: 1"!==ii.call({message:1,name:2})||"Error"!==ii.call({})})?function(){var t=rY(this),r=oX(t.name,"Error"),n=oX(t.message);return r?n?r+": "+n:r:n}:ii;var ia=Error.prototype;ia.toString!==io&&r5(ia,"toString",io);var is={},iu={};iu=!tN(function(){function t(){}// eslint-disable-next-line es/no-object-getprototypeof -- required for testing
return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype});var ic=ea("IE_PROTO"),il=Object,ih=il.prototype;// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
is=iu?il.getPrototypeOf:function(t){var r=r_(t);if(rx(r,ic))return r[ic];var n=r.constructor;return t4(n)&&r instanceof n?n.prototype:r instanceof il?ih:null};var ig={},iv={},ip={};ip={};var id=rm("iterator"),iy=Array.prototype;// check on default Array iterator
iv=function(t){return void 0!==t&&(ip.Array===t||iy[id]===t)};var ib={},im={},iw=rm("iterator");im=function(t){if(!t0(t))return rh(t,iw)||rh(t,"@@iterator")||ip[eZ(t)]};var iE=TypeError;ib=function(t,r){var n=arguments.length<2?im(t):r;if(rg(n))return rY(tC(n,t));throw new iE(rv(t)+" is not iterable")};var iT={};iT=function(t,r,n){var o,i;rY(t);try{if(!(o=rh(t,"return"))){if("throw"===r)throw n;return n}o=tC(o,t)}catch(t){i=!0,o=t}if("throw"===r)throw n;if(i)throw o;return rY(o),n};var iS=TypeError,iA=function(t,r){this.stopped=t,this.result=r},iR=iA.prototype;ig=function(t,r,n){var o,i,a,s,u,c,f,l=n&&n.that,h=!!(n&&n.AS_ENTRIES),g=!!(n&&n.IS_RECORD),v=!!(n&&n.IS_ITERATOR),p=!!(n&&n.INTERRUPTED),d=nT(r,l),y=function(t){return o&&iT(o,"normal",t),new iA(!0,t)},b=function(t){return h?(rY(t),p?d(t[0],t[1],y):d(t[0],t[1])):p?d(t,y):d(t)};if(g)o=t.iterator;else if(v)o=t;else{if(!(i=im(t)))throw new iS(rv(t)+" is not iterable");// optimisation for array iterators
if(iv(i)){for(a=0,s=eC(t);s>a;a++)if((u=b(t[a]))&&t9(iR,u))return u;return new iA(!1)}o=ib(t,i)}for(c=g?t.next:o.next;!(f=tC(c,o)).done;){try{u=b(f.value)}catch(t){iT(o,"throw",t)}if("object"==typeof u&&u&&t9(iR,u))return u}return new iA(!1)};var iO=rm("toStringTag"),ix=Error,i_=[].push,iI=function(t,r/* , options */){var n,o=t9(ik,this);o$?n=o$(new ix,o?is(this):ik):(n=o?this:e7(ik),rV(n,iO,"Error")),void 0!==r&&rV(n,"message",oX(r)),oZ(n,iI,n.stack,1),arguments.length>2&&oQ(n,arguments[2]);var i=[];return ig(t,i_,{that:i}),rV(n,"errors",i),n};o$?o$(iI,ix):eR(iI,ix,{name:!0});var ik=iI.prototype=e7(ix.prototype,{constructor:tz(1,iI),message:tz(1,""),name:tz(1,"AggregateError")});// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
tP({global:!0,constructor:!0,arity:2},{AggregateError:iI});var ij="AggregateError",iM=t7(ij),iP=!tN(function(){return 1!==iM([1]).errors[0]})&&tN(function(){return 7!==iM([1],ij,{cause:7}).cause});// https://tc39.es/ecma262/#sec-aggregate-error
tP({global:!0,constructor:!0,arity:2,forced:iP},{AggregateError:oz(ij,function(t){// eslint-disable-next-line no-unused-vars -- required for functions `.length`
return function(r,n){return of(t,this,arguments)}},iP,!0)});var iL={},iN=y,iC=rm("unscopables"),iF=Array.prototype;void 0===iF[iC]&&iN(iF,iC,{configurable:!0,value:e7(null)}),// add a key to Array.prototype[@@unscopables]
iL=function(t){iF[iC][t]=!0},// `Array.prototype.at` method
// https://tc39.es/ecma262/#sec-array.prototype.at
tP({target:"Array",proto:!0},{at:function(t){var r=r_(this),n=eC(r),o=ek(t),i=o>=0?o:n+o;return i<0||i>=n?void 0:r[i]}}),iL("at");var iD={},iU=TypeError;iD=function(t){if(t>9007199254740991)throw iU("Maximum allowed index exceeded");return t};var iB={};iB=function(t,r,n){tL?y(t,r,tz(0,n)):t[r]=n};var iz={},i$=rm("species");iz=function(t){// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/677
return re>=51||!tN(function(){var r=[];return(r.constructor={})[i$]=function(){return{foo:1}},1!==r[t](Boolean).foo})};var iH=rm("isConcatSpreadable"),iq=re>=51||!tN(function(){var t=[];return t[iH]=!1,t.concat()[0]!==t}),iW=function(t){if(!t6(t))return!1;var r=t[iH];return void 0!==r?!!r:nx(t)},iV=!iq||!iz("concat");// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
tP({target:"Array",proto:!0,arity:1,forced:iV},{// eslint-disable-next-line no-unused-vars -- required for `.length`
concat:function(t){var r,n,o,i,a,s=r_(this),u=nR(s,0),c=0;for(r=-1,o=arguments.length;r<o;r++)if(a=-1===r?s:arguments[r],iW(a))for(i=eC(a),iD(c+i),n=0;n<i;n++,c++)n in a&&iB(u,c,a[n]);else iD(c+1),iB(u,c++,a);return u.length=c,u}});var iG={},iY={},iJ=TypeError;iY=function(t,r){if(!delete t[r])throw new iJ("Cannot delete property "+rv(r)+" of "+rv(t))};var iK=Math.min;// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
iG=[].copyWithin||function(t/* = 0 */,r/* = 0, end = @length */){var n=r_(this),o=eC(n),i=eI(t,o),a=eI(r,o),s=arguments.length>2?arguments[2]:void 0,u=iK((void 0===s?o:eI(s,o))-a,o-i),c=1;for(a<i&&i<a+u&&(c=-1,a+=u-1,i+=u-1);u-- >0;)a in n?n[i]=n[a]:iY(n,i),i+=c,a+=c;return n},// `Array.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
tP({target:"Array",proto:!0},{copyWithin:iG}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
iL("copyWithin");var iX=nE.every,iQ={},iZ=(iQ=function(t,r){var n=[][t];return!!n&&tN(function(){// eslint-disable-next-line no-useless-call -- required for testing
n.call(null,r||function(){return 1},1)})})("every");// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
tP({target:"Array",proto:!0,forced:!iZ},{every:function(t/* , thisArg */){return iX(this,t,arguments.length>1?arguments[1]:void 0)}});var i0={};// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
tP({target:"Array",proto:!0},{fill:// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
i0=function(t/* , start = 0, end = @length */){for(var r=r_(this),n=eC(r),o=arguments.length,i=eI(o>1?arguments[1]:void 0,n),a=o>2?arguments[2]:void 0,s=void 0===a?n:eI(a,n);s>i;)r[i++]=t;return r}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
iL("fill");var i1=nE.filter,i2=iz("filter");// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
tP({target:"Array",proto:!0,forced:!i2},{filter:function(t/* , thisArg */){return i1(this,t,arguments.length>1?arguments[1]:void 0)}});var i5=nE.find,i6="find",i4=!0;i6 in[]&&[,][i6](function(){i4=!1}),// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
tP({target:"Array",proto:!0,forced:i4},{find:function(t/* , that = undefined */){return i5(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
iL(i6);var i3=nE.findIndex,i8="findIndex",i7=!0;i8 in[]&&[,][i8](function(){i7=!1}),// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
tP({target:"Array",proto:!0,forced:i7},{findIndex:function(t/* , that = undefined */){return i3(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
iL(i8);var i9={},at=function(t){var r=1===t;return function(n,o,i){for(var a,s=r_(n),u=tH(s),c=eC(u),f=nT(o,i);c-- >0;)if(f(a=u[c],c,s))switch(t){case 0:return a;// findLast
case 1:return c;// findLastIndex
}return r?-1:void 0}},ar=(i9={// `Array.prototype.findLast` method
// https://github.com/tc39/proposal-array-find-from-last
findLast:at(0),// `Array.prototype.findLastIndex` method
// https://github.com/tc39/proposal-array-find-from-last
findLastIndex:at(1)}).findLast;// `Array.prototype.findLast` method
// https://tc39.es/ecma262/#sec-array.prototype.findlast
tP({target:"Array",proto:!0},{findLast:function(t/* , that = undefined */){return ar(this,t,arguments.length>1?arguments[1]:void 0)}}),iL("findLast");var ae=i9.findLastIndex;// `Array.prototype.findLastIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findlastindex
tP({target:"Array",proto:!0},{findLastIndex:function(t/* , that = undefined */){return ae(this,t,arguments.length>1?arguments[1]:void 0)}}),iL("findLastIndex");var an={},ao=function(t,r,n,o,i,a,s,u){for(var c,f,l=i,h=0,g=!!s&&nT(s,u);h<o;)h in n&&(c=g?g(n[h],h,r):n[h],a>0&&nx(c)?(f=eC(c),l=ao(t,r,c,f,l,a-1)-1):(iD(l+1),t[l]=c),l++),h++;return l};an=ao,// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
tP({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,r=r_(this),n=eC(r),o=nR(r,0);return o.length=an(o,r,r,n,0,void 0===t?1:ek(t)),o}}),// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
tP({target:"Array",proto:!0},{flatMap:function(t/* , thisArg */){var r,n=r_(this),o=eC(n);return rg(t),(r=nR(n,0)).length=an(r,n,n,o,0,1,t,arguments.length>1?arguments[1]:void 0),r}});var ai={},aa=nE.forEach;// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
ai=iQ("forEach")?[].forEach:function(t/* , thisArg */){return aa(this,t,arguments.length>1?arguments[1]:void 0);// eslint-disable-next-line es/no-array-prototype-foreach -- safe
},// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
tP({target:"Array",proto:!0,forced:[].forEach!==ai},{forEach:ai});var as={},au={};// call something on iterator step with safe closing on error
au=function(t,r,n,o){try{return o?r(rY(n)[0],n[1]):r(n)}catch(r){iT(t,"throw",r)}};var ac=Array;// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
as=function(t/* , mapfn = undefined, thisArg = undefined */){var r,n,o,i,a,s,u=r_(t),c=n_(this),f=arguments.length,l=f>1?arguments[1]:void 0,h=void 0!==l;h&&(l=nT(l,f>2?arguments[2]:void 0));var g=im(u),v=0;// if the target is not iterable or it's an array with the default iterator - use a simple case
if(g&&!(this===ac&&iv(g)))for(n=c?new this:[],a=(i=ib(u,g)).next;!(o=tC(a,i)).done;v++)s=h?au(i,l,[o.value,v],!0):o.value,iB(n,v,s);else for(r=eC(u),n=c?new this(r):ac(r);r>v;v++)s=h?l(u[v],v):u[v],iB(n,v,s);return n.length=v,n};var af={},al=rm("iterator"),ah=!1;try{var ag=0,av={next:function(){return{done:!!ag++}},return:function(){ah=!0}};av[al]=function(){return this},// eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
Array.from(av,function(){throw 2})}catch(t){}var ap=!(af=function(t,r){try{if(!r&&!ah)return!1}catch(t){return!1}// workaround of old WebKit + `eval` bug
var n=!1;try{var o={};o[al]=function(){return{next:function(){return{done:n=!0}}}},t(o)}catch(t){}return n})(function(t){// eslint-disable-next-line es/no-array-from -- required for testing
Array.from(t)});// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
tP({target:"Array",stat:!0,forced:ap},{from:as});var ad=e_.includes,ay=tN(function(){// eslint-disable-next-line es/no-array-prototype-includes -- detection
return![,].includes()});// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
tP({target:"Array",proto:!0,forced:ay},{includes:function(t/* , fromIndex = 0 */){return ad(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
iL("includes");var ab=e_.indexOf,am=nS([].indexOf),aw=!!am&&1/am([1],1,-0)<0,aE=aw||!iQ("indexOf");// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
tP({target:"Array",proto:!0,forced:aE},{indexOf:function(t/* , fromIndex = 0 */){var r=arguments.length>1?arguments[1]:void 0;return aw?am(this,t,r)||0:ab(this,t,r)}}),// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
tP({target:"Array",stat:!0},{isArray:nx});var aT={},aS=y,aA={},aR={},aO={},ax=rm("iterator"),a_=!1;[].keys&&("next"in(I=[].keys())?(_=is(is(I)))!==Object.prototype&&(x=_):a_=!0),!t6(x)||tN(function(){var t={};// FF44- legacy iterators case
return x[ax].call(t)!==t})?x={}:rT&&(x=e7(x)),t4(x[ax])||r5(x,ax,function(){return this});var aI=(aO={IteratorPrototype:x,BUGGY_SAFARI_ITERATORS:a_}).IteratorPrototype,ak=function(){return this};aR=function(t,r,n,o){var i=r+" Iterator";return t.prototype=e7(aI,{next:tz(+!o,n)}),nb(t,i,!1,!0),ip[i]=ak,t};var aj=r4.PROPER,aM=r4.CONFIGURABLE,aP=aO.IteratorPrototype,aL=aO.BUGGY_SAFARI_ITERATORS,aN=rm("iterator"),aC="keys",aF="values",aD="entries",aU=function(){return this};aA=function(t,r,n,o,i,a,s){aR(n,r,o);var u,c,f,l=function(t){if(t===i&&d)return d;if(!aL&&t&&t in v)return v[t];switch(t){case aC:case aF:case aD:return function(){return new n(this,t)}}return function(){return new n(this)}},h=r+" Iterator",g=!1,v=t.prototype,p=v[aN]||v["@@iterator"]||i&&v[i],d=!aL&&p||l(i),y="Array"===r&&v.entries||p;// export additional methods
if(y&&(u=is(y.call(new t)))!==Object.prototype&&u.next&&(rT||is(u)===aP||(o$?o$(u,aP):t4(u[aN])||r5(u,aN,aU)),// Set @@toStringTag to native iterators
nb(u,h,!0,!0),rT&&(ip[h]=aU)),aj&&i===aF&&p&&p.name!==aF&&(!rT&&aM?rV(v,"name",aF):(g=!0,d=function(){return tC(p,this)})),i){if(c={values:l(aF),keys:a?d:l(aC),entries:l(aD)},s)for(f in c)!aL&&!g&&f in v||r5(v,f,c[f]);else tP({target:r,proto:!0,forced:aL||g},c)}return(!rT||s)&&v[aN]!==d&&r5(v,aN,d,{name:i}),ip[r]=d,c};var aB={};// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
aB=function(t,r){return{value:t,done:r}};var az="Array Iterator",a$=en.set,aH=en.getterFor(az);// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
aT=aA(Array,"Array",function(t,r){a$(this,{type:az,target:t$(t),index:0,kind:r// kind
});// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
},function(){var t=aH(this),r=t.target,n=t.index++;if(!r||n>=r.length)return t.target=null,aB(void 0,!0);switch(t.kind){case"keys":return aB(n,!1);case"values":return aB(r[n],!1)}return aB([n,r[n]],!1)},"values");// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var aq=ip.Arguments=ip.Array;// V8 ~ Chrome 45- bug
if(// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
iL("keys"),iL("values"),iL("entries"),!rT&&tL&&"values"!==aq.name)try{aS(aq,"name",{value:"values"})}catch(t){}var aW=tq([].join),aV=tH!==Object||!iQ("join",",");// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
tP({target:"Array",proto:!0,forced:aV},{join:function(t){return aW(t$(this),void 0===t?",":t)}});var aG={},aY=Math.min,aJ=[].lastIndexOf,aK=!!aJ&&1/[1].lastIndexOf(1,-0)<0,aX=iQ("lastIndexOf");// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
tP({target:"Array",proto:!0,forced:// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
(aG=aK||!aX?function(t/* , fromIndex = @[*-1] */){// convert -0 to +0
if(aK)return of(aJ,this,arguments)||0;var r=t$(this),n=eC(r);if(0===n)return -1;var o=n-1;for(arguments.length>1&&(o=aY(o,ek(arguments[1]))),o<0&&(o=n+o);o>=0;o--)if(o in r&&r[o]===t)return o||0;return -1}:aJ)!==[].lastIndexOf},{lastIndexOf:aG});var aQ=nE.map,aZ=iz("map");// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
tP({target:"Array",proto:!0,forced:!aZ},{map:function(t/* , thisArg */){return aQ(this,t,arguments.length>1?arguments[1]:void 0)}});var a0=Array,a1=tN(function(){function t(){}// eslint-disable-next-line es/no-array-of -- safe
return!(a0.of.call(t) instanceof t)});// `Array.of` method
// https://tc39.es/ecma262/#sec-array.of
// WebKit Array.of isn't generic
tP({target:"Array",stat:!0,forced:a1},{of:function(){for(var t=0,r=arguments.length,n=new(n_(this)?this:a0)(r);r>t;)iB(n,t,arguments[t++]);return n.length=r,n}});var a2={},a5=TypeError,a6=Object.getOwnPropertyDescriptor;a2=tL&&!function(){// makes no sense without proper strict mode support
if(void 0!==this)return!0;try{// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}()?function(t,r){if(nx(t)&&!a6(t,"length").writable)throw new a5("Cannot set read only .length");return t.length=r}:function(t,r){return t.length=r};var a4=tN(function(){return 4294967297!==[].push.call({length:4294967296},1)})||!function(){try{// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
tP({target:"Array",proto:!0,arity:1,forced:a4},{// eslint-disable-next-line no-unused-vars -- required for `.length`
push:function(t){var r=r_(this),n=eC(r),o=arguments.length;iD(n+o);for(var i=0;i<o;i++)r[n]=arguments[i],n++;return a2(r,n),n}});var a3={},a8=TypeError,a7="Reduce of empty array with no initial value",a9=function(t){return function(r,n,o,i){var a=r_(r),s=tH(a),u=eC(a);if(rg(n),0===u&&o<2)throw new a8(a7);var c=t?u-1:0,f=t?-1:1;if(o<2)for(;;){if(c in s){i=s[c],c+=f;break}if(c+=f,t?c<0:u<=c)throw new a8(a7)}for(;t?c>=0:u>c;c+=f)c in s&&(i=n(i,s[c],c,a));return i}},st=(a3={// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
left:a9(!1),// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
right:a9(!0)}).left,sr={},se={};tn("5tjRy");var sn=function(t){return rn.slice(0,t.length)===t},so=!(sr="NODE"==(se=sn("Bun/")?"BUN":sn("Cloudflare-Workers")?"CLOUDFLARE":sn("Deno/")?"DENO":sn("Node.js/")?"NODE":globalThis.Bun&&"string"==typeof Bun.version?"BUN":globalThis.Deno&&"object"==typeof Deno.version?"DENO":"process"===tY(globalThis.process)?"NODE":globalThis.window&&globalThis.document?"BROWSER":"REST"))&&re>79&&re<83||!iQ("reduce");// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
tP({target:"Array",proto:!0,forced:so},{reduce:function(t/* , initialValue */){var r=arguments.length;return st(this,t,r,r>1?arguments[1]:void 0)}});var si=a3.right,sa=!sr&&re>79&&re<83||!iQ("reduceRight");// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
tP({target:"Array",proto:!0,forced:sa},{reduceRight:function(t/* , initialValue */){return si(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}});var ss=tq([].reverse),su=[1,2];// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
tP({target:"Array",proto:!0,forced:String(su)===String(su.reverse())},{reverse:function(){return nx(this)&&(this.length=this.length),ss(this)}});var sc=iz("slice"),sf=rm("species"),sl=Array,sh=Math.max;// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
tP({target:"Array",proto:!0,forced:!sc},{slice:function(t,r){var n,o,i,a=t$(this),s=eC(a),u=eI(t,s),c=eI(void 0===r?s:r,s);if(nx(a)&&(n=a.constructor,n_(n)&&(n===sl||nx(n.prototype))?n=void 0:t6(n)&&null===(n=n[sf])&&(n=void 0),n===sl||void 0===n))return nf(a,u,c);for(i=0,o=new(void 0===n?sl:n)(sh(c-u,0));u<c;u++,i++)u in a&&iB(o,i,a[u]);return o.length=i,o}});var sg=nE.some,sv=iQ("some");// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
tP({target:"Array",proto:!0,forced:!sv},{some:function(t/* , thisArg */){return sg(this,t,arguments.length>1?arguments[1]:void 0)}});var sp={},sd=Math.floor,sy=function(t,r){var n=t.length;if(n<8)for(// insertion sort
var o,i,a=1;a<n;){for(i=a,o=t[a];i&&r(t[i-1],o)>0;)t[i]=t[--i];i!==a++&&(t[i]=o)}else for(// merge sort
var s=sd(n/2),u=sy(nf(t,0,s),r),c=sy(nf(t,s),r),f=u.length,l=c.length,h=0,g=0;h<f||g<l;)t[h+g]=h<f&&g<l?0>=r(u[h],c[g])?u[h++]:c[g++]:h<f?u[h++]:c[g++];return t};sp=sy;var sb={},sm=rn.match(/firefox\/(\d+)/i);sb=!!sm&&+sm[1];var sw={};sw=/MSIE|Trident/.test(rn);var sE={},sT=rn.match(/AppleWebKit\/(\d+)\./);sE=!!sT&&+sT[1];var sS=[],sA=tq(sS.sort),sR=tq(sS.push),sO=tN(function(){sS.sort(void 0)}),sx=tN(function(){sS.sort(null)}),s_=iQ("sort"),sI=!tN(function(){// feature detection can be too slow, so check engines versions
if(re)return re<70;if(!sb||!(sb>3)){if(sw)return!0;if(sE)return sE<603;var t,r,n,o,i="";// generate an array with more 512 elements (Chakra and old V8 fails only in this case)
for(t=65;t<76;t++){switch(r=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(o=0;o<47;o++)sS.push({k:r+o,v:n})}for(sS.sort(function(t,r){return r.v-t.v}),o=0;o<sS.length;o++)r=sS[o].k.charAt(0),i.charAt(i.length-1)!==r&&(i+=r);return"DGBEFHACIJK"!==i}});// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
tP({target:"Array",proto:!0,forced:sO||!sx||!s_||!sI},{sort:function(t){void 0!==t&&rg(t);var r,n,o=r_(this);if(sI)return void 0===t?sA(o):sA(o,t);var i=[],a=eC(o);for(n=0;n<a;n++)n in o&&sR(i,o[n]);for(sp(i,function(r,n){return void 0===n?-1:void 0===r?1:void 0!==t?+t(r,n)||0:eQ(r)>eQ(n)?1:-1}),r=eC(i),n=0;n<r;)o[n]=i[n++];for(;n<a;)iY(o,n++);return o}});var sk={},sj=rm("species");// `Array[@@species]` getter
// https://tc39.es/ecma262/#sec-get-array-@@species
(sk=function(t){var r=t7(t);tL&&r&&!r[sj]&&ng(r,sj,{configurable:!0,get:function(){return this}})})("Array");var sM=iz("splice"),sP=Math.max,sL=Math.min;// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
tP({target:"Array",proto:!0,forced:!sM},{splice:function(t,r/* , ...items */){var n,o,i,a,s,u,c=r_(this),f=eC(c),l=eI(t,f),h=arguments.length;for(0===h?n=o=0:1===h?(n=0,o=f-l):(n=h-2,o=sL(sP(ek(r),0),f-l)),iD(f+n-o),i=nR(c,o),a=0;a<o;a++)(s=l+a)in c&&iB(i,a,c[s]);if(i.length=o,n<o){for(a=l;a<f-o;a++)s=a+o,u=a+n,s in c?c[u]=c[s]:iY(c,u);for(a=f;a>f-o+n;a--)iY(c,a-1)}else if(n>o)for(a=f-o;a>l;a--)s=a+o-1,u=a+n-1,s in c?c[u]=c[s]:iY(c,u);for(a=0;a<n;a++)c[a+l]=arguments[a+2];return a2(c,f-o+n),i}});var sN={};// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
sN=function(t,r){for(var n=eC(t),o=new r(n),i=0;i<n;i++)o[i]=t[n-i-1];return o};var sC=Array;// `Array.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-array.prototype.toreversed
tP({target:"Array",proto:!0},{toReversed:function(){return sN(t$(this),sC)}}),iL("toReversed");var sF={};sF=function(t,r,n){for(var o=0,i=arguments.length>2?n:eC(r),a=new t(i);i>o;)a[o]=r[o++];return a};tn("5tjRy");var sD=Array,sU=tq((r=(t=globalThis.Array)&&t.prototype)&&r.sort);// `Array.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-array.prototype.tosorted
tP({target:"Array",proto:!0},{toSorted:function(t){void 0!==t&&rg(t);var r=t$(this);return sU(sF(sD,r),t)}}),iL("toSorted");var sB=Array,sz=Math.max,s$=Math.min;// `Array.prototype.toSpliced` method
// https://tc39.es/ecma262/#sec-array.prototype.tospliced
tP({target:"Array",proto:!0},{toSpliced:function(t,r/* , ...items */){var n,o,i,a,s=t$(this),u=eC(s),c=eI(t,u),f=arguments.length,l=0;for(0===f?n=o=0:1===f?(n=0,o=u-c):(n=f-2,o=s$(sz(ek(r),0),u-c)),a=sB(i=iD(u+n-o));l<c;l++)a[l]=s[l];for(;l<c+n;l++)a[l]=arguments[l-c+2];for(;l<i;l++)a[l]=s[l+o-n];return a}}),iL("toSpliced"),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
iL("flat"),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
iL("flatMap");// IE8-
var sH=1!==[].unshift(0)||!function(){try{// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}();// `Array.prototype.unshift` method
// https://tc39.es/ecma262/#sec-array.prototype.unshift
tP({target:"Array",proto:!0,arity:1,forced:sH},{// eslint-disable-next-line no-unused-vars -- required for `.length`
unshift:function(t){var r=r_(this),n=eC(r),o=arguments.length;if(o){iD(n+o);for(var i=n;i--;){var a=i+o;i in r?r[a]=r[i]:iY(r,a)}for(var s=0;s<o;s++)r[s]=arguments[s]}return a2(r,n+o)}});var sq={},sW=RangeError;// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with
sq=function(t,r,n,o){var i=eC(t),a=ek(n),s=a<0?i+a:a;if(s>=i||s<0)throw new sW("Incorrect index");for(var u=new r(i),c=0;c<i;c++)u[c]=c===s?o:t[c];return u};var sV=Array;// `Array.prototype.with` method
// https://tc39.es/ecma262/#sec-array.prototype.with
tP({target:"Array",proto:!0},{with:function(t,r){return sq(t$(this),sV,t,r)}}),tn("5tjRy");var sG={};tn("5tjRy");var sY={};// eslint-disable-next-line es/no-typed-arrays -- safe
sY="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView;var sJ={};sJ=function(t,r,n){for(var o in r)r5(t,o,r[o],n);return t};var sK={},sX=TypeError;sK=function(t,r){if(t9(r,t))return t;throw new sX("Incorrect invocation")};var sQ={},sZ=RangeError;// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
sQ=function(t){if(void 0===t)return 0;var r=ek(t),n=eF(r);if(r!==n)throw new sZ("Wrong length or index");return n};var s0={},s1={},s2={};// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
s2=Math.sign||function(t){var r=+t;// eslint-disable-next-line no-self-compare -- NaN check
return 0===r||r!=r?r:r<0?-1:1};var s5=Math.abs;s1=function(t,r,n,o){var i=+t,a=s5(i),s=s2(i);if(a<o)return s*(a/o/r+4503599627370496-4503599627370496)*o*r;var u=(1+r/2220446049250313e-31)*a,c=u-(u-a);return(// eslint-disable-next-line no-self-compare -- NaN check
c>n||c!=c?s*(1/0):s*c)},// `Math.fround` method implementation
// https://tc39.es/ecma262/#sec-math.fround
// eslint-disable-next-line es/no-math-fround -- safe
s0=Math.fround||function(t){return s1(t,11920928955078125e-23,34028234663852886e22,11754943508222875e-54)};var s6={},s4=Array,s3=Math.abs,s8=Math.pow,s7=Math.floor,s9=Math.log,ut=Math.LN2;s6={pack:function(t,r,n){var o,i,a,s=s4(n),u=8*n-r-1,c=(1<<u)-1,f=c>>1,l=23===r?s8(2,-24)-s8(2,-77):0,h=t<0||0===t&&1/t<0?1:0,g=0;for((t=s3(t))!=t||t===1/0?(// eslint-disable-next-line no-self-compare -- NaN check
i=t!=t?1:0,o=c):(a=s8(2,-(o=s7(s9(t)/ut))),t*a<1&&(o--,a*=2),o+f>=1?t+=l/a:t+=l*s8(2,1-f),t*a>=2&&(o++,a/=2),o+f>=c?(i=0,o=c):o+f>=1?(i=(t*a-1)*s8(2,r),o+=f):(i=t*s8(2,f-1)*s8(2,r),o=0));r>=8;)s[g++]=255&i,i/=256,r-=8;for(o=o<<r|i,u+=r;u>0;)s[g++]=255&o,o/=256,u-=8;return s[g-1]|=128*h,s},unpack:function(t,r){var n,o=t.length,i=8*o-r-1,a=(1<<i)-1,s=a>>1,u=i-7,c=o-1,f=t[c--],l=127&f;for(f>>=7;u>0;)l=256*l+t[c--],u-=8;for(n=l&(1<<-u)-1,l>>=-u,u+=r;u>0;)n=256*n+t[c--],u-=8;if(0===l)l=1-s;else{if(l===a)return n?NaN:f?-1/0:1/0;n+=s8(2,r),l-=s}return(f?-1:1)*n*s8(2,l-r)}};var ur=r4.PROPER,ue=r4.CONFIGURABLE,un="ArrayBuffer",uo="DataView",ui="prototype",ua="Wrong index",us=en.getterFor(un),uu=en.getterFor(uo),uc=en.set,uf=globalThis[un],ul=uf,uh=ul&&ul[ui],ug=globalThis[uo],uv=ug&&ug[ui],up=Object.prototype,ud=globalThis.Array,uy=globalThis.RangeError,ub=tq(i0),um=tq([].reverse),uw=s6.pack,uE=s6.unpack,uT=function(t){return[255&t]},uS=function(t){return[255&t,t>>8&255]},uA=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},uR=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},uO=function(t){return uw(s0(t),23,4)},ux=function(t){return uw(t,52,8)},u_=function(t,r,n){ng(t[ui],r,{configurable:!0,get:function(){return n(this)[r]}})},uI=function(t,r,n,o){var i=uu(t),a=sQ(n);if(a+r>i.byteLength)throw new uy(ua);var s=i.bytes,u=a+i.byteOffset,c=nf(s,u,u+r);return o?c:um(c)},uk=function(t,r,n,o,i,a){var s=uu(t),u=sQ(n),c=o(+i),f=!!a;if(u+r>s.byteLength)throw new uy(ua);for(var l=s.bytes,h=u+s.byteOffset,g=0;g<r;g++)l[h+g]=c[f?g:r-g-1]};if(sY){var uj=ur&&uf.name!==un;!tN(function(){uf(1)})||!tN(function(){new uf(-1)})||tN(function(){return new uf,new uf(1.5),new uf(NaN),1!==uf.length||uj&&!ue})?(/* eslint-enable no-new, sonarjs/inconsistent-function-call -- required for testing */(ul=function(t){return sK(this,uh),oK(new uf(sQ(t)),this,ul)})[ui]=uh,uh.constructor=ul,eR(ul,uf)):uj&&ue&&rV(uf,"name",un),o$&&is(uv)!==up&&o$(uv,up);// iOS Safari 7.x bug
var uM=new ug(new ul(2)),uP=tq(uv.setInt8);uM.setInt8(0,2147483648),uM.setInt8(1,2147483649),(uM.getInt8(0)||!uM.getInt8(1))&&sJ(uv,{setInt8:function(t,r){uP(this,t,r<<24>>24)},setUint8:function(t,r){uP(this,t,r<<24>>24)}},{unsafe:!0})}else uh=(ul=function(t){sK(this,uh);var r=sQ(t);uc(this,{type:un,bytes:ub(ud(r),0),byteLength:r}),tL||(this.byteLength=r,this.detached=!1)})[ui],uv=(ug=function(t,r,n){sK(this,uv),sK(t,uh);var o=us(t),i=o.byteLength,a=ek(r);if(a<0||a>i)throw new uy("Wrong offset");if(n=void 0===n?i-a:eF(n),a+n>i)throw new uy("Wrong length");uc(this,{type:uo,buffer:t,byteLength:n,byteOffset:a,bytes:o.bytes}),tL||(this.buffer=t,this.byteLength=n,this.byteOffset=a)})[ui],tL&&(u_(ul,"byteLength",us),u_(ug,"buffer",uu),u_(ug,"byteLength",uu),u_(ug,"byteOffset",uu)),sJ(uv,{getInt8:function(t){return uI(this,1,t)[0]<<24>>24},getUint8:function(t){return uI(this,1,t)[0]},getInt16:function(t/* , littleEndian */){var r=uI(this,2,t,arguments.length>1&&arguments[1]);return(r[1]<<8|r[0])<<16>>16},getUint16:function(t/* , littleEndian */){var r=uI(this,2,t,arguments.length>1&&arguments[1]);return r[1]<<8|r[0]},getInt32:function(t/* , littleEndian */){return uR(uI(this,4,t,arguments.length>1&&arguments[1]))},getUint32:function(t/* , littleEndian */){return uR(uI(this,4,t,arguments.length>1&&arguments[1]))>>>0},getFloat32:function(t/* , littleEndian */){return uE(uI(this,4,t,arguments.length>1&&arguments[1]),23)},getFloat64:function(t/* , littleEndian */){return uE(uI(this,8,t,arguments.length>1&&arguments[1]),52)},setInt8:function(t,r){uk(this,1,t,uT,r)},setUint8:function(t,r){uk(this,1,t,uT,r)},setInt16:function(t,r/* , littleEndian */){uk(this,2,t,uS,r,arguments.length>2&&arguments[2])},setUint16:function(t,r/* , littleEndian */){uk(this,2,t,uS,r,arguments.length>2&&arguments[2])},setInt32:function(t,r/* , littleEndian */){uk(this,4,t,uA,r,arguments.length>2&&arguments[2])},setUint32:function(t,r/* , littleEndian */){uk(this,4,t,uA,r,arguments.length>2&&arguments[2])},setFloat32:function(t,r/* , littleEndian */){uk(this,4,t,uO,r,arguments.length>2&&arguments[2])},setFloat64:function(t,r/* , littleEndian */){uk(this,8,t,ux,r,arguments.length>2&&arguments[2])}});nb(ul,un),nb(ug,uo);var uL="ArrayBuffer",uN=(sG={ArrayBuffer:ul,DataView:ug})[uL],uC=globalThis[uL];// `ArrayBuffer` constructor
// https://tc39.es/ecma262/#sec-arraybuffer-constructor
tP({global:!0,constructor:!0,forced:uC!==uN},{ArrayBuffer:uN}),sk(uL);var uF={};tn("5tjRy");var uD=en.enforce,uU=en.get,uB=globalThis.Int8Array,uz=uB&&uB.prototype,u$=globalThis.Uint8ClampedArray,uH=u$&&u$.prototype,uq=uB&&is(uB),uW=uz&&is(uz),uV=Object.prototype,uG=globalThis.TypeError,uY=rm("toStringTag"),uJ=rj("TYPED_ARRAY_TAG"),uK="TypedArrayConstructor",uX=sY&&!!o$&&"Opera"!==eZ(globalThis.opera),uQ=!1,uZ={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},u0={BigInt64Array:8,BigUint64Array:8},u1=function(t){var r=is(t);if(t6(r)){var n=uU(r);return n&&rx(n,uK)?n[uK]:u1(r)}},u2=function(t){if(!t6(t))return!1;var r=eZ(t);return rx(uZ,r)||rx(u0,r)};for(k in uZ)(M=(j=globalThis[k])&&j.prototype)?uD(M)[uK]=j:uX=!1;for(k in u0)(M=(j=globalThis[k])&&j.prototype)&&(uD(M)[uK]=j);// WebKit bug - typed arrays constructors prototype is Object.prototype
if((!uX||!t4(uq)||uq===Function.prototype)&&(// eslint-disable-next-line no-shadow -- safe
uq=function(){throw new uG("Incorrect invocation")},uX))for(k in uZ)globalThis[k]&&o$(globalThis[k],uq);if((!uX||!uW||uW===uV)&&(uW=uq.prototype,uX))for(k in uZ)globalThis[k]&&o$(globalThis[k].prototype,uW);if(uX&&is(uH)!==uW&&o$(uH,uW),tL&&!rx(uW,uY))for(k in uQ=!0,ng(uW,uY,{configurable:!0,get:function(){return t6(this)?this[uJ]:void 0}}),uZ)globalThis[k]&&rV(globalThis[k],uJ,k);var u5=(uF={NATIVE_ARRAY_BUFFER_VIEWS:uX,TYPED_ARRAY_TAG:uQ&&uJ,aTypedArray:function(t){if(u2(t))return t;throw new uG("Target is not a typed array")},aTypedArrayConstructor:function(t){if(t4(t)&&(!o$||t9(uq,t)))return t;throw new uG(rv(t)+" is not a typed array constructor")},exportTypedArrayMethod:function(t,r,n,o){if(tL){if(n)for(var i in uZ){var a=globalThis[i];if(a&&rx(a.prototype,t))try{delete a.prototype[t]}catch(n){// old WebKit bug - some methods are non-configurable
try{a.prototype[t]=r}catch(t){}}}(!uW[t]||n)&&r5(uW,t,n?r:uX&&uz[t]||r,o)}},exportTypedArrayStaticMethod:function(t,r,n){var o,i;if(tL){if(o$){if(n){for(o in uZ)if((i=globalThis[o])&&rx(i,t))try{delete i[t]}catch(t){}}if(uq[t]&&!n)return;try{return r5(uq,t,n?r:uX&&uq[t]||r)}catch(t){}}for(o in uZ)(i=globalThis[o])&&(!i[t]||n)&&r5(i,t,r)}},getTypedArrayConstructor:u1,isView:function(t){if(!t6(t))return!1;var r=eZ(t);return"DataView"===r||rx(uZ,r)||rx(u0,r)},isTypedArray:u2,TypedArray:uq,TypedArrayPrototype:uW}).NATIVE_ARRAY_BUFFER_VIEWS;// `ArrayBuffer.isView` method
// https://tc39.es/ecma262/#sec-arraybuffer.isview
tP({target:"ArrayBuffer",stat:!0,forced:!u5},{isView:uF.isView});var u6=sG.ArrayBuffer,u4=sG.DataView,u3=u4.prototype,u8=nS(u6.prototype.slice),u7=nS(u3.getUint8),u9=nS(u3.setUint8),ct=tN(function(){return!new u6(2).slice(1,void 0).byteLength});// `ArrayBuffer.prototype.slice` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
tP({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:ct},{slice:function(t,r){if(u8&&void 0===r)return u8(rY(this),t);// FF fix
for(var n=rY(this).byteLength,o=eI(t,n),i=eI(void 0===r?n:r,n),a=new u6(eF(i-o)),s=new u4(this),u=new u4(a),c=0;o<i;)u9(u,c++,u7(s,o++));return a}}),// `DataView` constructor
// https://tc39.es/ecma262/#sec-dataview-constructor
tP({global:!0,constructor:!0,forced:!sY},{DataView:sG.DataView});var cr={};tn("5tjRy");var ce={};tn("5tjRy");var cn=globalThis.ArrayBuffer,co=globalThis.TypeError;// Includes
// - Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
// - If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
ce=cn&&oH(cn.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==tY(t))throw new co("ArrayBuffer expected");return t.byteLength};var ci=globalThis.ArrayBuffer,ca=ci&&ci.prototype,cs=ca&&nS(ca.slice);cr=function(t){if(0!==ce(t)||!cs)return!1;try{return cs(t,0,0),!1}catch(t){return!0}};var cu=ArrayBuffer.prototype;!tL||"detached"in cu||ng(cu,"detached",{configurable:!0,get:function(){return cr(this)}});var cc={};tn("5tjRy");var cf={},cl=TypeError;cf=function(t){if(cr(t))throw new cl("ArrayBuffer is detached");return t};var ch={};tn("5tjRy");var cg={};tn("5tjRy"),cg=function(t){if(sr){try{return globalThis.process.getBuiltinModule(t)}catch(t){}try{// eslint-disable-next-line no-new-func -- safe
return Function('return require("'+t+'")')()}catch(t){}}};var cv={};tn("5tjRy");var cp=globalThis.structuredClone;cv=!!cp&&!tN(function(){// prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation
// https://github.com/zloirock/core-js/issues/679
if("DENO"===se&&re>92||"NODE"===se&&re>94||"BROWSER"===se&&re>97)return!1;var t=new ArrayBuffer(8),r=cp(t,{transfer:[t]});return 0!==t.byteLength||8!==r.byteLength});var cd=globalThis.structuredClone,cy=globalThis.ArrayBuffer,cb=globalThis.MessageChannel,cm=!1;if(cv)cm=function(t){cd(t,{transfer:[t]})};else if(cy)try{!cb&&(P=cg("worker_threads"))&&(cb=P.MessageChannel),cb&&(L=new cb,N=new cy(2),C=function(t){L.port1.postMessage(null,[t])},2===N.byteLength&&(C(N),0===N.byteLength&&(cm=C)))}catch(t){}ch=cm;var cw=globalThis.structuredClone,cE=globalThis.ArrayBuffer,cT=globalThis.DataView,cS=Math.min,cA=cE.prototype,cR=cT.prototype,cO=tq(cA.slice),cx=oH(cA,"resizable","get"),c_=oH(cA,"maxByteLength","get"),cI=tq(cR.getInt8),ck=tq(cR.setInt8);(cc=(cv||ch)&&function(t,r,n){var o,i=ce(t),a=void 0===r?i:sQ(r),s=!cx||!cx(t);if(cf(t),cv&&(t=cw(t,{transfer:[t]}),i===a&&(n||s)))return t;if(i>=a&&(!n||s))o=cO(t,0,a);else{o=new cE(a,n&&!s&&c_?{maxByteLength:c_(t)}:void 0);for(var u=new cT(t),c=new cT(o),f=cS(a,i),l=0;l<f;l++)ck(c,l,cI(u,l))}return cv||ch(t),o})&&tP({target:"ArrayBuffer",proto:!0},{transfer:function(){return cc(this,arguments.length?arguments[0]:void 0,!0)}}),cc&&tP({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return cc(this,arguments.length?arguments[0]:void 0,!1)}});// IE8- non-standard case
var cj=tN(function(){// eslint-disable-next-line es/no-date-prototype-getyear-setyear -- detection
return 120!==new Date(16e11).getYear()}),cM=tq(Date.prototype.getFullYear);// `Date.prototype.getYear` method
// https://tc39.es/ecma262/#sec-date.prototype.getyear
tP({target:"Date",proto:!0,forced:cj},{getYear:function(){return cM(this)-1900}});var cP=Date,cL=tq(cP.prototype.getTime);// `Date.now` method
// https://tc39.es/ecma262/#sec-date.now
tP({target:"Date",stat:!0},{now:function(){return cL(new cP)}});var cN=Date.prototype,cC=tq(cN.getTime),cF=tq(cN.setFullYear);// `Date.prototype.setYear` method
// https://tc39.es/ecma262/#sec-date.prototype.setyear
tP({target:"Date",proto:!0},{setYear:function(t){// validate
cC(this);var r=ek(t);return cF(this,r>=0&&r<=99?r+1900:r)}}),// `Date.prototype.toGMTString` method
// https://tc39.es/ecma262/#sec-date.prototype.togmtstring
tP({target:"Date",proto:!0},{toGMTString:Date.prototype.toUTCString});var cD={},cU={},cB={},cz=RangeError,c$=tq(// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
cB=function(t){var r=eQ(tZ(this)),n="",o=ek(t);if(o<0||o===1/0)throw new cz("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(r+=r))1&o&&(n+=r);return n}),cH=tq("".slice),cq=Math.ceil,cW=function(t){return function(r,n,o){var i,a,s=eQ(tZ(r)),u=eF(n),c=s.length,f=void 0===o?" ":eQ(o);return u<=c||""===f?s:((a=c$(f,cq((i=u-c)/f.length))).length>i&&(a=cH(a,0,i)),t?s+a:a+s)}},cV=(cU={// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
start:cW(!1),// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
end:cW(!0)}).start,cG=RangeError,cY=isFinite,cJ=Math.abs,cK=Date.prototype,cX=cK.toISOString,cQ=tq(cK.getTime),cZ=tq(cK.getUTCDate),c0=tq(cK.getUTCFullYear),c1=tq(cK.getUTCHours),c2=tq(cK.getUTCMilliseconds),c5=tq(cK.getUTCMinutes),c6=tq(cK.getUTCMonth),c4=tq(cK.getUTCSeconds);// `Date.prototype.toISOString` method implementation
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit fails here:
cD=tN(function(){return"0385-07-25T07:06:39.999Z"!==cX.call(new Date(-50000000000001))})||!tN(function(){cX.call(new Date(NaN))})?function(){if(!cY(cQ(this)))throw new cG("Invalid time value");var t=c0(this),r=c2(this),n=t<0?"-":t>9999?"+":"";return n+cV(cJ(t),n?6:4,0)+"-"+cV(c6(this)+1,2,0)+"-"+cV(cZ(this),2,0)+"T"+cV(c1(this),2,0)+":"+cV(c5(this),2,0)+":"+cV(c4(this),2,0)+"."+cV(r,3,0)+"Z"}:cX,// `Date.prototype.toISOString` method
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit has a broken implementations
tP({target:"Date",proto:!0,forced:Date.prototype.toISOString!==cD},{toISOString:cD});var c3=tN(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})});// `Date.prototype.toJSON` method
// https://tc39.es/ecma262/#sec-date.prototype.tojson
tP({target:"Date",proto:!0,arity:1,forced:c3},{// eslint-disable-next-line no-unused-vars -- required for `.length`
toJSON:function(t){var r=r_(this),n=t5(r,"number");return"number"!=typeof n||isFinite(n)?r.toISOString():null}});var c8={},c7=TypeError;// `Date.prototype[@@toPrimitive](hint)` method implementation
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
c8=function(t){if(rY(this),"string"===t||"default"===t)t="string";else if("number"!==t)throw new c7("Incorrect hint");return ry(this,t)};var c9=rm("toPrimitive"),ft=Date.prototype;rx(ft,c9)||r5(ft,c9,c8);var fr=Date.prototype,fe="Invalid Date",fn="toString",fo=tq(fr[fn]),fi=tq(fr.getTime);String(new Date(NaN))!==fe&&r5(fr,fn,function(){var t=fi(this);// eslint-disable-next-line no-self-compare -- NaN check
return t==t?fo(this):fe});var fa=tq("".charAt),fs=tq("".charCodeAt),fu=tq(/./.exec),fc=tq(1..toString),ff=tq("".toUpperCase),fl=/[\w*+\-./@]/,fh=function(t,r){for(var n=fc(t,16);n.length<r;)n="0"+n;return n};// `escape` method
// https://tc39.es/ecma262/#sec-escape-string
tP({global:!0},{escape:function(t){for(var r,n,o=eQ(t),i="",a=o.length,s=0;s<a;)fu(fl,r=fa(o,s++))?i+=r:(n=fs(r,0))<256?i+="%"+fh(n,2):i+="%u"+ff(fh(n,4));return i}});var fg={},fv=Function,fp=tq([].concat),fd=tq([].join),fy={},fb=function(t,r,n){if(!rx(fy,r)){for(var o=[],i=0;i<r;i++)o[i]="a["+i+"]";fy[r]=fv("C,a","return new C("+fd(o,",")+")")}return fy[r](t,n)};// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
fg=tF?fv.bind:function(t/* , ...args */){var r=rg(this),n=r.prototype,o=nf(arguments,1),i=function(){var n=fp(o,nf(arguments));return this instanceof i?fb(r,n.length,n):r.apply(t,n)};return t6(n)&&(i.prototype=n),i},// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
tP({target:"Function",proto:!0,forced:Function.bind!==fg},{bind:fg});var fm=rm("hasInstance"),fw=Function.prototype;fm in fw||y(fw,fm,{value:r6(function(t){if(!t4(this)||!t6(t))return!1;var r=this.prototype;return t6(r)?t9(r,t):t instanceof this},fm)});var fE=r4.EXISTS,fT=Function.prototype,fS=tq(fT.toString),fA=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,fR=tq(fA.exec);tL&&!fE&&ng(fT,"name",{configurable:!0,get:function(){try{return fR(fA,fS(this))[1]}catch(t){return""}}}),tn("5tjRy"),// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
tP({global:!0,forced:globalThis.globalThis!==globalThis},{globalThis:globalThis}),tn("5tjRy");var fO=aO.IteratorPrototype,fx="constructor",f_="Iterator",fI=rm("toStringTag"),fk=TypeError,fj=globalThis[f_],fM=rT||!t4(fj)||fj.prototype!==fO||!tN(function(){fj({})}),fP=function(){if(sK(this,fO),is(this)===fO)throw new fk("Abstract class Iterator not directly constructable")},fL=function(t,r){tL?ng(fO,t,{configurable:!0,get:function(){return r},set:function(r){if(rY(this),this===fO)throw new fk("You can't redefine this property");rx(this,t)?this[t]=r:iB(this,t,r)}}):fO[t]=r};rx(fO,fI)||fL(fI,f_),(fM||!rx(fO,fx)||fO[fx]===Object)&&fL(fx,fP),fP.prototype=fO,// `Iterator` constructor
// https://tc39.es/ecma262/#sec-iterator
tP({global:!0,constructor:!0,forced:fM},{Iterator:fP});var fN={};// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
fN=function(t){return{iterator:t,next:t.next,done:!1}};var fC={},fF=RangeError;fC=function(t){// eslint-disable-next-line no-self-compare -- NaN check
if(t==t)return t;throw new fF("NaN is not allowed")};var fD={},fU=RangeError;fD=function(t){var r=ek(t);if(r<0)throw new fU("The argument can't be less than 0");return r};var fB={},fz=aO.IteratorPrototype,f$=rm("toStringTag"),fH="IteratorHelper",fq="WrapForValidIterator",fW=en.set,fV=function(t){var r=en.getterFor(t?fq:fH);return sJ(e7(fz),{next:function(){var n=r(this);// for simplification:
//   for `%WrapForValidIteratorPrototype%.next` our `nextHandler` returns `IterResultObject`
//   for `%IteratorHelperPrototype%.next` - just a value
if(t)return n.nextHandler();try{var o=n.done?void 0:n.nextHandler();return aB(o,n.done)}catch(t){throw n.done=!0,t}},return:function(){var n=r(this),o=n.iterator;if(n.done=!0,t){var i=rh(o,"return");return i?tC(i,o):aB(void 0,!0)}if(n.inner)try{iT(n.inner.iterator,"normal")}catch(t){return iT(o,"throw",t)}return o&&iT(o,"normal"),aB(void 0,!0)}})},fG=fV(!0),fY=fV(!1);rV(fY,f$,"Iterator Helper");var fJ=(fB=function(t,r){var n=function(n,o){o?(o.iterator=n.iterator,o.next=n.next):o=n,o.type=r?fq:fH,o.nextHandler=t,o.counter=0,o.done=!1,fW(this,o)};return n.prototype=r?fG:fY,n})(function(){for(var t,r=this.iterator,n=this.next;this.remaining;)if(this.remaining--,t=rY(tC(n,r)),this.done=!!t.done)return;if(t=rY(tC(n,r)),!(this.done=!!t.done))return t.value});// `Iterator.prototype.drop` method
// https://tc39.es/ecma262/#sec-iterator.prototype.drop
tP({target:"Iterator",proto:!0,real:!0,forced:rT},{drop:function(t){rY(this);var r=fD(fC(+t));return new fJ(fN(this),{remaining:r})}}),// `Iterator.prototype.every` method
// https://tc39.es/ecma262/#sec-iterator.prototype.every
tP({target:"Iterator",proto:!0,real:!0},{every:function(t){rY(this),rg(t);var r=fN(this),n=0;return!ig(r,function(r,o){if(!t(r,n++))return o()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var fK=fB(function(){for(var t,r,n=this.iterator,o=this.predicate,i=this.next;;){if(t=rY(tC(i,n)),this.done=!!t.done)return;if(r=t.value,au(n,o,[r,this.counter++],!0))return r}});// `Iterator.prototype.filter` method
// https://tc39.es/ecma262/#sec-iterator.prototype.filter
tP({target:"Iterator",proto:!0,real:!0,forced:rT},{filter:function(t){return rY(this),rg(t),new fK(fN(this),{predicate:t})}}),// `Iterator.prototype.find` method
// https://tc39.es/ecma262/#sec-iterator.prototype.find
tP({target:"Iterator",proto:!0,real:!0},{find:function(t){rY(this),rg(t);var r=fN(this),n=0;return ig(r,function(r,o){if(t(r,n++))return o(r)},{IS_RECORD:!0,INTERRUPTED:!0}).result}});var fX={};fX=function(t,r){r&&"string"==typeof t||rY(t);var n=im(t);return fN(rY(void 0!==n?tC(n,t):t))};var fQ=fB(function(){for(var t,r,n=this.iterator,o=this.mapper;;){if(r=this.inner)try{if(!(t=rY(tC(r.next,r.iterator))).done)return t.value;this.inner=null}catch(t){iT(n,"throw",t)}if(t=rY(tC(this.next,n)),this.done=!!t.done)return;try{this.inner=fX(o(t.value,this.counter++),!1)}catch(t){iT(n,"throw",t)}}});// `Iterator.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-iterator.prototype.flatmap
tP({target:"Iterator",proto:!0,real:!0,forced:rT},{flatMap:function(t){return rY(this),rg(t),new fQ(fN(this),{mapper:t,inner:null})}}),// `Iterator.prototype.forEach` method
// https://tc39.es/ecma262/#sec-iterator.prototype.foreach
tP({target:"Iterator",proto:!0,real:!0},{forEach:function(t){rY(this),rg(t);var r=fN(this),n=0;ig(r,function(r){t(r,n++)},{IS_RECORD:!0})}});var fZ=aO.IteratorPrototype,f0=fB(function(){return tC(this.next,this.iterator)},!0);// `Iterator.from` method
// https://tc39.es/ecma262/#sec-iterator.from
tP({target:"Iterator",stat:!0,forced:rT},{from:function(t){var r=fX("string"==typeof t?r_(t):t,!0);return t9(fZ,r.iterator)?r.iterator:new f0(r)}});var f1=fB(function(){var t=this.iterator,r=rY(tC(this.next,t));if(!(this.done=!!r.done))return au(t,this.mapper,[r.value,this.counter++],!0)});// `Iterator.prototype.map` method
// https://tc39.es/ecma262/#sec-iterator.prototype.map
tP({target:"Iterator",proto:!0,real:!0,forced:rT},{map:function(t){return rY(this),rg(t),new f1(fN(this),{mapper:t})}});var f2=TypeError;// `Iterator.prototype.reduce` method
// https://tc39.es/ecma262/#sec-iterator.prototype.reduce
tP({target:"Iterator",proto:!0,real:!0},{reduce:function(t/* , initialValue */){rY(this),rg(t);var r=fN(this),n=arguments.length<2,o=n?void 0:arguments[1],i=0;if(ig(r,function(r){n?(n=!1,o=r):o=t(o,r,i),i++},{IS_RECORD:!0}),n)throw new f2("Reduce of empty iterator with no initial value");return o}}),// `Iterator.prototype.some` method
// https://tc39.es/ecma262/#sec-iterator.prototype.some
tP({target:"Iterator",proto:!0,real:!0},{some:function(t){rY(this),rg(t);var r=fN(this),n=0;return ig(r,function(r,o){if(t(r,n++))return o()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var f5=fB(function(){var t=this.iterator;if(!this.remaining--)return this.done=!0,iT(t,"normal",void 0);var r=rY(tC(this.next,t));if(!(this.done=!!r.done))return r.value});// `Iterator.prototype.take` method
// https://tc39.es/ecma262/#sec-iterator.prototype.take
tP({target:"Iterator",proto:!0,real:!0,forced:rT},{take:function(t){rY(this);var r=fD(fC(+t));return new f5(fN(this),{remaining:r})}});var f6=[].push;// `Iterator.prototype.toArray` method
// https://tc39.es/ecma262/#sec-iterator.prototype.toarray
tP({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[];return ig(fN(rY(this)),f6,{that:t,IS_RECORD:!0}),t}}),tn("5tjRy"),// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
nb(globalThis.JSON,"JSON",!0);var f4={};tn("5tjRy");var f3={},f8=y,f7={},f9={};f9=tN(function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);// eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}});// eslint-disable-next-line es/no-object-isextensible -- safe
var lt=Object.isExtensible;// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
f7=tN(function(){lt(1)})||f9?function(t){return!!t6(t)&&(!f9||"ArrayBuffer"!==tY(t))&&(!lt||lt(t))}:lt;var lr={};lr=!tN(function(){// eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
return Object.isExtensible(Object.preventExtensions({}))});var le=!1,ln=rj("meta"),lo=0,li=function(t){f8(t,ln,{value:{objectID:"O"+lo++,weakData:{}// weak collections IDs
}})},la=f3={enable:function(){la.enable=function(){},le=!0;var t=E,r=tq([].splice),n={};n[ln]=1,t(n).length&&(E=function(n){for(var o=t(n),i=0,a=o.length;i<a;i++)if(o[i]===ln){r(o,i,1);break}return o},tP({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:R}))},fastKey:function(t,r){// return a primitive with prefix
if(!t6(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!rx(t,ln)){// can't set metadata to uncaught frozen object
if(!f7(t))return"F";// not necessary to add metadata
if(!r)return"E";// add missing metadata
li(t);// return object ID
}return t[ln].objectID},getWeakData:function(t,r){if(!rx(t,ln)){// can't set metadata to uncaught frozen object
if(!f7(t))return!0;// not necessary to add metadata
if(!r)return!1;// add missing metadata
li(t);// return the store of weak collections IDs
}return t[ln].weakData},onFreeze:function(t){return lr&&le&&f7(t)&&!rx(t,ln)&&li(t),t}};eu[ln]=!0,f4=function(t,r,n){var o=-1!==t.indexOf("Map"),i=-1!==t.indexOf("Weak"),a=o?"set":"add",s=globalThis[t],u=s&&s.prototype,c=s,f={},l=function(t){var r=tq(u[t]);r5(u,t,"add"===t?function(t){return r(this,0===t?0:t),this}:"delete"===t?function(t){return(!i||!!t6(t))&&r(this,0===t?0:t)}:"get"===t?function(t){return i&&!t6(t)?void 0:r(this,0===t?0:t)}:"has"===t?function(t){return(!i||!!t6(t))&&r(this,0===t?0:t)}:function(t,n){return r(this,0===t?0:t,n),this})};if(eW(t,!t4(s)||!(i||u.forEach&&!tN(function(){new s().entries().next()}))))// create collection constructor
c=n.getConstructor(r,t,o,a),f3.enable();else if(eW(t,!0)){var h=new c,g=h[a](i?{}:-0,1)!==h,v=tN(function(){h.has(1)}),p=af(function(t){new s(t)}),d=!i&&tN(function(){for(// V8 ~ Chromium 42- fails only with 5+ elements
var t=new s,r=5;r--;)t[a](r,r);return!t.has(-0)});p||((c=r(function(t,r){sK(t,u);var n=oK(new s,t,c);return t0(r)||ig(r,n[a],{that:n,AS_ENTRIES:o}),n})).prototype=u,u.constructor=c),(v||d)&&(l("delete"),l("has"),o&&l("get")),(d||g)&&l(a),i&&u.clear&&delete u.clear}return f[t]=c,tP({global:!0,constructor:!0,forced:c!==s},f),nb(c,t),i||n.setStrong(c,t,o),c};var ls={},lu=f3.fastKey,lc=en.set,lf=en.getterFor;// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
f4("Map",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},ls={getConstructor:function(t,r,n,o){var i=t(function(t,i){sK(t,a),lc(t,{type:r,index:e7(null),first:null,last:null,size:0}),tL||(t.size=0),t0(i)||ig(i,t[o],{that:t,AS_ENTRIES:n})}),a=i.prototype,s=lf(r),u=function(t,r,n){var o,i,a=s(t),u=c(t,r);return u?u.value=n:(a.last=u={index:i=lu(r,!0),key:r,value:n,previous:o=a.last,next:null,removed:!1},a.first||(a.first=u),o&&(o.next=u),tL?a.size++:t.size++,"F"!==i&&(a.index[i]=u)),t},c=function(t,r){var n,o=s(t),i=lu(r);if("F"!==i)return o.index[i];// frozen object case
for(n=o.first;n;n=n.next)if(n.key===r)return n};return sJ(a,{// `{ Map, Set }.prototype.clear()` methods
// https://tc39.es/ecma262/#sec-map.prototype.clear
// https://tc39.es/ecma262/#sec-set.prototype.clear
clear:function(){for(var t=s(this),r=t.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=null),r=r.next;t.first=t.last=null,t.index=e7(null),tL?t.size=0:this.size=0},// `{ Map, Set }.prototype.delete(key)` methods
// https://tc39.es/ecma262/#sec-map.prototype.delete
// https://tc39.es/ecma262/#sec-set.prototype.delete
delete:function(t){var r=s(this),n=c(this,t);if(n){var o=n.next,i=n.previous;delete r.index[n.index],n.removed=!0,i&&(i.next=o),o&&(o.previous=i),r.first===n&&(r.first=o),r.last===n&&(r.last=i),tL?r.size--:this.size--}return!!n},// `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
// https://tc39.es/ecma262/#sec-map.prototype.foreach
// https://tc39.es/ecma262/#sec-set.prototype.foreach
forEach:function(t/* , that = undefined */){for(var r,n=s(this),o=nT(t,arguments.length>1?arguments[1]:void 0);r=r?r.next:n.first;)// revert to the last existing entry
for(o(r.value,r.key,this);r&&r.removed;)r=r.previous},// `{ Map, Set}.prototype.has(key)` methods
// https://tc39.es/ecma262/#sec-map.prototype.has
// https://tc39.es/ecma262/#sec-set.prototype.has
has:function(t){return!!c(this,t)}}),sJ(a,n?{// `Map.prototype.get(key)` method
// https://tc39.es/ecma262/#sec-map.prototype.get
get:function(t){var r=c(this,t);return r&&r.value},// `Map.prototype.set(key, value)` method
// https://tc39.es/ecma262/#sec-map.prototype.set
set:function(t,r){return u(this,0===t?0:t,r)}}:{// `Set.prototype.add(value)` method
// https://tc39.es/ecma262/#sec-set.prototype.add
add:function(t){return u(this,t=0===t?0:t,t)}}),tL&&ng(a,"size",{configurable:!0,get:function(){return s(this).size}}),i},setStrong:function(t,r,n){var o=r+" Iterator",i=lf(r),a=lf(o);// `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
// https://tc39.es/ecma262/#sec-map.prototype.entries
// https://tc39.es/ecma262/#sec-map.prototype.keys
// https://tc39.es/ecma262/#sec-map.prototype.values
// https://tc39.es/ecma262/#sec-map.prototype-@@iterator
// https://tc39.es/ecma262/#sec-set.prototype.entries
// https://tc39.es/ecma262/#sec-set.prototype.keys
// https://tc39.es/ecma262/#sec-set.prototype.values
// https://tc39.es/ecma262/#sec-set.prototype-@@iterator
aA(t,r,function(t,r){lc(this,{type:o,target:t,state:i(t),kind:r,last:null})},function(){// revert to the last existing entry
for(var t=a(this),r=t.kind,n=t.last;n&&n.removed;)n=n.previous;return(// get next entry
t.target&&(t.last=n=n?n.next:t.state.first)?"keys"===r?aB(n.key,!1):"values"===r?aB(n.value,!1):aB([n.key,n.value],!1):(// or finish the iteration
t.target=null,aB(void 0,!0)))},n?"entries":"values",!n,!0),// `{ Map, Set }.prototype[@@species]` accessors
// https://tc39.es/ecma262/#sec-get-map-@@species
// https://tc39.es/ecma262/#sec-get-set-@@species
sk(r)}});var ll={},lh=Map.prototype,lg=(ll={// eslint-disable-next-line es/no-map -- safe
Map:Map,set:tq(lh.set),get:tq(lh.get),has:tq(lh.has),remove:tq(lh.delete),proto:lh}).Map,lv=ll.has,lp=ll.get,ld=ll.set,ly=tq([].push),lb=rT||tN(function(){return 1!==lg.groupBy("ab",function(t){return t}).get("a").length});// `Map.groupBy` method
// https://tc39.es/ecma262/#sec-map.groupby
tP({target:"Map",stat:!0,forced:rT||lb},{groupBy:function(t,r){tZ(t),rg(r);var n=new lg,o=0;return ig(t,function(t){var i=r(t,o++);lv(n,i)?ly(lp(n,i),t):ld(n,i,[t])}),n}});var lm={},lw=Math.log;// `Math.log1p` method implementation
// https://tc39.es/ecma262/#sec-math.log1p
// eslint-disable-next-line es/no-math-log1p -- safe
lm=Math.log1p||function(t){var r=+t;return r>-.00000001&&r<1e-8?r-r*r/2:lw(1+r)};// eslint-disable-next-line es/no-math-acosh -- required for testing
var lE=Math.acosh,lT=Math.log,lS=Math.sqrt,lA=Math.LN2,lR=!lE||710!==Math.floor(lE(Number.MAX_VALUE))||lE(1/0)!==1/0;// `Math.acosh` method
// https://tc39.es/ecma262/#sec-math.acosh
tP({target:"Math",stat:!0,forced:lR},{acosh:function(t){var r=+t;return r<1?NaN:r>94906265.62425156?lT(r)+lA:lm(r-1+lS(r-1)*lS(r+1))}});// eslint-disable-next-line es/no-math-asinh -- required for testing
var lO=Math.asinh,lx=Math.log,l_=Math.sqrt,lI=!(lO&&1/lO(0)>0);// `Math.asinh` method
// https://tc39.es/ecma262/#sec-math.asinh
// Tor Browser bug: Math.asinh(0) -> -0
tP({target:"Math",stat:!0,forced:lI},{asinh:function t(r){var n=+r;return isFinite(n)&&0!==n?n<0?-t(-n):lx(n+l_(n*n+1)):n}});// eslint-disable-next-line es/no-math-atanh -- required for testing
var lk=Math.atanh,lj=Math.log,lM=!(lk&&1/lk(-0)<0);// `Math.atanh` method
// https://tc39.es/ecma262/#sec-math.atanh
// Tor Browser bug: Math.atanh(-0) -> 0
tP({target:"Math",stat:!0,forced:lM},{atanh:function(t){var r=+t;return 0===r?r:lj((1+r)/(1-r))/2}});var lP=Math.abs,lL=Math.pow;// `Math.cbrt` method
// https://tc39.es/ecma262/#sec-math.cbrt
tP({target:"Math",stat:!0},{cbrt:function(t){var r=+t;return s2(r)*lL(lP(r),1/3)}});var lN=Math.floor,lC=Math.log,lF=Math.LOG2E;// `Math.clz32` method
// https://tc39.es/ecma262/#sec-math.clz32
tP({target:"Math",stat:!0},{clz32:function(t){var r=t>>>0;return r?31-lN(lC(r+.5)*lF):32}});var lD={},lU=Math.expm1,lB=Math.exp;// `Math.expm1` method implementation
// https://tc39.es/ecma262/#sec-math.expm1
lD=!lU||lU(10)>22025.465794806718||22025.465794806718>lU(10)||-.00000000000000002!==lU(-.00000000000000002)?function(t){var r=+t;return 0===r?r:r>-.000001&&r<1e-6?r+r*r/2:lB(r)-1}:lU;// eslint-disable-next-line es/no-math-cosh -- required for testing
var lz=Math.cosh,l$=Math.abs,lH=Math.E,lq=!lz||lz(710)===1/0;// `Math.cosh` method
// https://tc39.es/ecma262/#sec-math.cosh
tP({target:"Math",stat:!0,forced:lq},{cosh:function(t){var r=lD(l$(t)-1)+1;return(r+1/(r*lH*lH))*(lH/2)}}),// `Math.expm1` method
// https://tc39.es/ecma262/#sec-math.expm1
// eslint-disable-next-line es/no-math-expm1 -- required for testing
tP({target:"Math",stat:!0,forced:lD!==Math.expm1},{expm1:lD}),// `Math.fround` method
// https://tc39.es/ecma262/#sec-math.fround
tP({target:"Math",stat:!0},{fround:s0});// eslint-disable-next-line es/no-math-hypot -- required for testing
var lW=Math.hypot,lV=Math.abs,lG=Math.sqrt,lY=!!lW&&lW(1/0,NaN)!==1/0;// `Math.hypot` method
// https://tc39.es/ecma262/#sec-math.hypot
tP({target:"Math",stat:!0,arity:2,forced:lY},{// eslint-disable-next-line no-unused-vars -- required for `.length`
hypot:function(t,r){for(var n,o,i=0,a=0,s=arguments.length,u=0;a<s;)n=lV(arguments[a++]),u<n?(i=i*(o=u/n)*o+1,u=n):n>0?i+=(o=n/u)*o:i+=n;return u===1/0?1/0:u*lG(i)}});// eslint-disable-next-line es/no-math-imul -- required for testing
var lJ=Math.imul,lK=tN(function(){return -5!==lJ(4294967295,5)||2!==lJ.length});// `Math.imul` method
// https://tc39.es/ecma262/#sec-math.imul
// some WebKit versions fails with big numbers, some has wrong arity
tP({target:"Math",stat:!0,forced:lK},{imul:function(t,r){var n=+t,o=+r,i=65535&n,a=65535&o;return 0|i*a+((65535&n>>>16)*a+i*(65535&o>>>16)<<16>>>0)}});var lX={},lQ=Math.log,lZ=Math.LOG10E;// `Math.log10` method
// https://tc39.es/ecma262/#sec-math.log10
tP({target:"Math",stat:!0},{log10:// eslint-disable-next-line es/no-math-log10 -- safe
lX=Math.log10||function(t){return lQ(t)*lZ}}),// `Math.log1p` method
// https://tc39.es/ecma262/#sec-math.log1p
tP({target:"Math",stat:!0},{log1p:lm});var l0=Math.log,l1=Math.LN2;// `Math.log2` method
// https://tc39.es/ecma262/#sec-math.log2
tP({target:"Math",stat:!0},{log2:function(t){return l0(t)/l1}}),// `Math.sign` method
// https://tc39.es/ecma262/#sec-math.sign
tP({target:"Math",stat:!0},{sign:s2});var l2=Math.abs,l5=Math.exp,l6=Math.E,l4=tN(function(){// eslint-disable-next-line es/no-math-sinh -- required for testing
return -.00000000000000002!==Math.sinh(-.00000000000000002)});// `Math.sinh` method
// https://tc39.es/ecma262/#sec-math.sinh
// V8 near Chromium 38 has a problem with very small numbers
tP({target:"Math",stat:!0,forced:l4},{sinh:function(t){var r=+t;return 1>l2(r)?(lD(r)-lD(-r))/2:(l5(r-1)-l5(-r-1))*(l6/2)}});var l3=Math.exp;// `Math.tanh` method
// https://tc39.es/ecma262/#sec-math.tanh
tP({target:"Math",stat:!0},{tanh:function(t){var r=+t,n=lD(r),o=lD(-r);return n===1/0?1:o===1/0?-1:(n-o)/(l3(r)+l3(-r))}}),// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
nb(Math,"Math",!0),// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
tP({target:"Math",stat:!0},{trunc:ej}),tn("5tjRy");var np=tn("isAV7"),l8=E,l7=g,l9=y,ht={};// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
ht=tq(1..valueOf);var hr={},he={};// a string of all valid unicode whitespaces
he="	\n\v\f\r \xa0              　\u2028\u2029\uFEFF";var hn=tq("".replace),ho=RegExp("^["+he+"]+"),hi=RegExp("(^|[^"+he+"])["+he+"]+$"),ha=function(t){return function(r){var n=eQ(tZ(r));return 1&t&&(n=hn(n,ho,"")),2&t&&(n=hn(n,hi,"$1")),n}},hs=(hr={// `String.prototype.{ trimLeft, trimStart }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
start:ha(1),// `String.prototype.{ trimRight, trimEnd }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimend
end:ha(2),// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
trim:ha(3)}).trim,hu="Number",hc=globalThis[hu],hf=np[hu],hl=hc.prototype,hh=globalThis.TypeError,hg=tq("".slice),hv=tq("".charCodeAt),hp=function(t){var r=t5(t,"number");return"bigint"==typeof r?r:hd(r)},hd=function(t){var r,n,o,i,a,s,u,c,f=t5(t,"number");if(t8(f))throw new hh("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2){if(43===(r=hv(f=hs(f),0))||45===r){if(88===(n=hv(f,2))||120===n)return NaN;// Number('+0x1') should be NaN, old V8 fix
}else if(48===r){switch(hv(f,1)){// fast equal of /^0b[01]+$/i
case 66:case 98:o=2,i=49;break;// fast equal of /^0o[0-7]+$/i
case 79:case 111:o=8,i=55;break;default:return+f}for(u=0,s=(a=hg(f,2)).length;u<s;u++)// parseInt parses a string to a first unavailable symbol
// but ToNumber should return NaN if a string contains unavailable symbols
if((c=hv(a,u))<48||c>i)return NaN;return parseInt(a,o)}}return+f},hy=eW(hu,!hc(" 0o1")||!hc("0b1")||hc("+0x1")),hb=function(t){var r,n=arguments.length<1?0:hc(hp(t));return(r=this,t9(hl,r)&&tN(function(){ht(r)}))?oK(Object(n),this,hb):n};hb.prototype=hl,hy&&!rT&&(hl.constructor=hb),tP({global:!0,constructor:!0,wrap:!0,forced:hy},{Number:hb});// Use `internal/copy-constructor-properties` helper in `core-js@4`
var hm=function(t,r){for(var n,o=tL?l8(r):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),i=0;o.length>i;i++)rx(r,n=o[i])&&!rx(t,n)&&l9(t,n,l7(r,n))};rT&&hf&&hm(np[hu],hf),(hy||rT)&&hm(np[hu],hc),// `Number.EPSILON` constant
// https://tc39.es/ecma262/#sec-number.epsilon
tP({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{EPSILON:2220446049250313e-31});var hw={};tn("5tjRy");var hE=globalThis.isFinite;// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
// eslint-disable-next-line es/no-number-isfinite -- safe
hw=Number.isFinite||function(t){return"number"==typeof t&&hE(t)},// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
tP({target:"Number",stat:!0},{isFinite:hw});var hT={},hS=Math.floor;// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
hT=Number.isInteger||function(t){return!t6(t)&&isFinite(t)&&hS(t)===t},// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
tP({target:"Number",stat:!0},{isInteger:hT}),// `Number.isNaN` method
// https://tc39.es/ecma262/#sec-number.isnan
tP({target:"Number",stat:!0},{isNaN:function(t){// eslint-disable-next-line no-self-compare -- NaN check
return t!=t}});var hA=Math.abs;// `Number.isSafeInteger` method
// https://tc39.es/ecma262/#sec-number.issafeinteger
tP({target:"Number",stat:!0},{isSafeInteger:function(t){return hT(t)&&9007199254740991>=hA(t)}}),// `Number.MAX_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.max_safe_integer
tP({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991}),// `Number.MIN_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.min_safe_integer
tP({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MIN_SAFE_INTEGER:-9007199254740991});var hR={};tn("5tjRy");var hO=hr.trim,hx=tq("".charAt),h_=globalThis.parseFloat,hI=globalThis.Symbol,hk=hI&&hI.iterator;// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
hR=1/h_(he+"-0")!=-1/0||hk&&!tN(function(){h_(Object(hk))})?function(t){var r=hO(eQ(t)),n=h_(r);return 0===n&&"-"===hx(r,0)?-0:n}:h_,// `Number.parseFloat` method
// https://tc39.es/ecma262/#sec-number.parseFloat
// eslint-disable-next-line es/no-number-parsefloat -- required for testing
tP({target:"Number",stat:!0,forced:Number.parseFloat!==hR},{parseFloat:hR});var hj={};tn("5tjRy");var hM=hr.trim,hP=globalThis.parseInt,hL=globalThis.Symbol,hN=hL&&hL.iterator,hC=/^[+-]?0x/i,hF=tq(hC.exec);// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
hj=8!==hP(he+"08")||22!==hP(he+"0x16")||hN&&!tN(function(){hP(Object(hN))})?function(t,r){var n=hM(eQ(t));return hP(n,r>>>0||(hF(hC,n)?16:10))}:hP,// `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es/no-number-parseint -- required for testing
tP({target:"Number",stat:!0,forced:Number.parseInt!==hj},{parseInt:hj});var hD=RangeError,hU=String,hB=isFinite,hz=Math.abs,h$=Math.floor,hH=Math.pow,hq=Math.round,hW=tq(1..toExponential),hV=tq(cB),hG=tq("".slice),hY="-6.9000e-11"===hW(-.000000000069,4)&&"1.25e+0"===hW(1.255,2)&&"1.235e+4"===hW(12345,3)&&"3e+1"===hW(25,0),hJ=!hY||!(tN(function(){hW(1,1/0)})&&tN(function(){hW(1,-1/0)}))||!!tN(function(){hW(1/0,1/0),hW(NaN,1/0)});// `Number.prototype.toExponential` method
// https://tc39.es/ecma262/#sec-number.prototype.toexponential
tP({target:"Number",proto:!0,forced:hJ},{toExponential:function(t){var r,n,o,i,a=ht(this);if(void 0===t)return hW(a);var s=ek(t);if(!hB(a))return String(a);// TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
if(s<0||s>20)throw new hD("Incorrect fraction digits");if(hY)return hW(a,s);var u="";if(a<0&&(u="-",a=-a),0===a)n=0,r=hV("0",s+1);else{var c=hH(10,(n=h$(lX(a)))-s),f=hq(a/c);2*a>=(2*f+1)*c&&(f+=1),f>=hH(10,s+1)&&(f/=10,n+=1),r=hU(f)}return 0!==s&&(r=hG(r,0,1)+"."+hG(r,1)),0===n?(o="+",i="0"):(o=n>0?"+":"-",i=hU(hz(n))),u+(r+="e"+o+i)}});var hK=RangeError,hX=String,hQ=Math.floor,hZ=tq(cB),h0=tq("".slice),h1=tq(1..toFixed),h2=function(t,r,n){return 0===r?n:r%2==1?h2(t,r-1,n*t):h2(t*t,r/2,n)},h5=function(t){for(var r=0,n=t;n>=4096;)r+=12,n/=4096;for(;n>=2;)r+=1,n/=2;return r},h6=function(t,r,n){for(var o=-1,i=n;++o<6;)i+=r*t[o],t[o]=i%1e7,i=hQ(i/1e7)},h4=function(t,r){for(var n=6,o=0;--n>=0;)o+=t[n],t[n]=hQ(o/r),o=o%r*1e7},h3=function(t){for(var r=6,n="";--r>=0;)if(""!==n||0===r||0!==t[r]){var o=hX(t[r]);n=""===n?o:n+hZ("0",7-o.length)+o}return n},h8=tN(function(){return"0.000"!==h1(8e-5,3)||"1"!==h1(.9,0)||"1.25"!==h1(1.255,2)||"1000000000000000128"!==h1(0xde0b6b3a7640080,0)})||!tN(function(){// V8 ~ Android 4.3-
h1({})});// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
tP({target:"Number",proto:!0,forced:h8},{toFixed:function(t){var r,n,o,i,a=ht(this),s=ek(t),u=[0,0,0,0,0,0],c="",f="0";// TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
if(s<0||s>20)throw new hK("Incorrect fraction digits");// eslint-disable-next-line no-self-compare -- NaN check
if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return hX(a);if(a<0&&(c="-",a=-a),a>1e-21){if(n=((r=h5(a*h2(2,69,1))-69)<0?a*h2(2,-r,1):a/h2(2,r,1))*4503599627370496,(r=52-r)>0){for(h6(u,0,n),o=s;o>=7;)h6(u,1e7,0),o-=7;for(h6(u,h2(10,o,1),0),o=r-1;o>=23;)h4(u,8388608),o-=23;h4(u,1<<o),h6(u,1,1),h4(u,2),f=h3(u)}else h6(u,0,n),h6(u,1<<-r,0),f=h3(u)+hZ("0",s)}return s>0?c+((i=f.length)<=s?"0."+hZ("0",s-i)+f:h0(f,0,i-s)+"."+h0(f,i-s)):c+f}});var h7=tq(1..toPrecision),h9=tN(function(){// IE7-
return"1"!==h7(1,void 0)})||!tN(function(){// V8 ~ Android 4.3-
h7({})});// `Number.prototype.toPrecision` method
// https://tc39.es/ecma262/#sec-number.prototype.toprecision
tP({target:"Number",proto:!0,forced:h9},{toPrecision:function(t){return void 0===t?h7(ht(this)):h7(ht(this),t)}});var gt={},gr=Object.assign,ge=Object.defineProperty,gn=tq([].concat);// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
gt=!gr||tN(function(){// should have correct order of operations (Edge bug)
if(tL&&1!==gr({b:1},gr(ge({},"a",{enumerable:!0,get:function(){ge(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;// should work with symbols and should have deterministic property order (V8 bug)
var t={},r={},n=Symbol("assign detection"),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){r[t]=t}),7!==gr({},t)[n]||e9(gr({},r)).join("")!==o})?function(t,r){for(var n=r_(t),o=arguments.length,i=1,a=T,s=v;o>i;)for(var u,c=tH(arguments[i++]),f=a?gn(e9(c),a(c)):e9(c),l=f.length,h=0;l>h;)u=f[h++],(!tL||tC(s,c,u))&&(n[u]=c[u]);return n}:gr,// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
tP({target:"Object",stat:!0,arity:2,forced:Object.assign!==gt},{assign:gt}),// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
tP({target:"Object",stat:!0,sham:!tL},{create:e7});var go={};tn("5tjRy"),// Forced replacement object prototype accessors methods
go=rT||!tN(function(){// This feature detection crashes old WebKit
// https://github.com/zloirock/core-js/issues/232
if(!sE||!(sE<535)){var t=Math.random();// In FF throws only define methods
__defineSetter__.call(null,t,function(){}),delete globalThis[t]}}),tL&&tP({target:"Object",proto:!0,forced:go},{__defineGetter__:function(t,r){y(r_(this),t,{get:rg(r),enumerable:!0,configurable:!0})}});var gi=S;// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
tP({target:"Object",stat:!0,forced:Object.defineProperties!==gi,sham:!tL},{defineProperties:gi});var ga=y;// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
tP({target:"Object",stat:!0,forced:Object.defineProperty!==ga,sham:!tL},{defineProperty:ga}),tL&&tP({target:"Object",proto:!0,forced:go},{__defineSetter__:function(t,r){y(r_(this),t,{set:rg(r),enumerable:!0,configurable:!0})}});var gs={},gu=tq(v),gc=tq([].push),gf=tL&&tN(function(){// eslint-disable-next-line es/no-object-create -- safe
var t=Object.create(null);return t[2]=2,!gu(t,2)}),gl=function(t){return function(r){for(var n,o=t$(r),i=e9(o),a=gf&&null===is(o),s=i.length,u=0,c=[];s>u;)n=i[u++],(!tL||(a?n in o:gu(o,n)))&&gc(c,t?[n,o[n]]:o[n]);return c}},gh=(gs={// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
entries:gl(!0),// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
values:gl(!1)}).entries;// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
tP({target:"Object",stat:!0},{entries:function(t){return gh(t)}});var gg=f3.onFreeze,gv=Object.freeze,gp=tN(function(){gv(1)});// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
tP({target:"Object",stat:!0,forced:gp,sham:!lr},{freeze:function(t){return gv&&t6(t)?gv(gg(t)):t}}),// `Object.fromEntries` method
// https://tc39.es/ecma262/#sec-object.fromentries
tP({target:"Object",stat:!0},{fromEntries:function(t){var r={};return ig(t,function(t,n){iB(r,t,n)},{AS_ENTRIES:!0}),r}});var gd=g,gy=!tL||tN(function(){gd(1)});// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
tP({target:"Object",stat:!0,forced:gy,sham:!tL},{getOwnPropertyDescriptor:function(t,r){return gd(t$(t),r)}}),// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
tP({target:"Object",stat:!0,sham:!tL},{getOwnPropertyDescriptors:function(t){for(var r,n,o=t$(t),i=g,a=eO(o),s={},u=0;a.length>u;)void 0!==(n=i(o,r=a[u++]))&&iB(s,r,n);return s}});var gb=R,gm=tN(function(){return!Object.getOwnPropertyNames(1)});// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
tP({target:"Object",stat:!0,forced:gm},{getOwnPropertyNames:gb});var gw=tN(function(){is(1)});// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
tP({target:"Object",stat:!0,forced:gw,sham:!iu},{getPrototypeOf:function(t){return is(r_(t))}});// eslint-disable-next-line es/no-object-groupby -- testing
var gE=Object.groupBy,gT=t7("Object","create"),gS=tq([].push),gA=!gE||tN(function(){return 1!==gE("ab",function(t){return t}).a.length});// `Object.groupBy` method
// https://tc39.es/ecma262/#sec-object.groupby
tP({target:"Object",stat:!0,forced:gA},{groupBy:function(t,r){tZ(t),rg(r);var n=gT(null),o=0;return ig(t,function(t){var i=t2(r(t,o++));// in some IE versions, `hasOwnProperty` returns incorrect result on integer keys
// but since it's a `null` prototype object, we can safely use `in`
i in n?gS(n[i],t):n[i]=[t]}),n}}),// `Object.hasOwn` method
// https://tc39.es/ecma262/#sec-object.hasown
tP({target:"Object",stat:!0},{hasOwn:rx});var gR={};// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
gR=Object.is||function(t,r){// eslint-disable-next-line no-self-compare -- NaN check
return t===r?0!==t||1/t==1/r:t!=t&&r!=r},// `Object.is` method
// https://tc39.es/ecma262/#sec-object.is
tP({target:"Object",stat:!0},{is:gR}),// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
// eslint-disable-next-line es/no-object-isextensible -- safe
tP({target:"Object",stat:!0,forced:Object.isExtensible!==f7},{isExtensible:f7});// eslint-disable-next-line es/no-object-isfrozen -- safe
var gO=Object.isFrozen,gx=f9||tN(function(){gO(1)});// `Object.isFrozen` method
// https://tc39.es/ecma262/#sec-object.isfrozen
tP({target:"Object",stat:!0,forced:gx},{isFrozen:function(t){return!t6(t)||!!f9&&"ArrayBuffer"===tY(t)||!!gO&&gO(t)}});// eslint-disable-next-line es/no-object-issealed -- safe
var g_=Object.isSealed,gI=f9||tN(function(){g_(1)});// `Object.isSealed` method
// https://tc39.es/ecma262/#sec-object.issealed
tP({target:"Object",stat:!0,forced:gI},{isSealed:function(t){return!t6(t)||!!f9&&"ArrayBuffer"===tY(t)||!!g_&&g_(t)}});var gk=tN(function(){e9(1)});// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
tP({target:"Object",stat:!0,forced:gk},{keys:function(t){return e9(r_(t))}});var gj=g;tL&&tP({target:"Object",proto:!0,forced:go},{__lookupGetter__:function(t){var r,n=r_(this),o=t2(t);do if(r=gj(n,o))return r.get;while(n=is(n))}});var gM=g;tL&&tP({target:"Object",proto:!0,forced:go},{__lookupSetter__:function(t){var r,n=r_(this),o=t2(t);do if(r=gM(n,o))return r.set;while(n=is(n))}});var gP=f3.onFreeze,gL=Object.preventExtensions,gN=tN(function(){gL(1)});// `Object.preventExtensions` method
// https://tc39.es/ecma262/#sec-object.preventextensions
tP({target:"Object",stat:!0,forced:gN,sham:!lr},{preventExtensions:function(t){return gL&&t6(t)?gL(gP(t)):t}});// eslint-disable-next-line es/no-object-getprototypeof -- safe
var gC=Object.getPrototypeOf,gF=Object.setPrototypeOf,gD=Object.prototype,gU="__proto__";// `Object.prototype.__proto__` accessor
// https://tc39.es/ecma262/#sec-object.prototype.__proto__
if(tL&&gC&&gF&&!(gU in gD))try{ng(gD,gU,{configurable:!0,get:function(){return gC(r_(this))},set:function(t){var r=tZ(this);oW(t)&&t6(r)&&gF(r,t)}})}catch(t){}var gB=f3.onFreeze,gz=Object.seal,g$=tN(function(){gz(1)});// `Object.seal` method
// https://tc39.es/ecma262/#sec-object.seal
tP({target:"Object",stat:!0,forced:g$,sham:!lr},{seal:function(t){return gz&&t6(t)?gz(gB(t)):t}}),// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
tP({target:"Object",stat:!0},{setPrototypeOf:o$});var gH={};// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
gH=e0?({}).toString:function(){return"[object "+eZ(this)+"]"},e0||r5(Object.prototype,"toString",gH,{unsafe:!0});var gq=gs.values;// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
tP({target:"Object",stat:!0},{values:function(t){return gq(t)}}),// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
tP({global:!0,forced:parseFloat!==hR},{parseFloat:hR}),// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
tP({global:!0,forced:parseInt!==hj},{parseInt:hj}),tn("5tjRy");var gW={},gV={},gG=TypeError;// `Assert: IsConstructor(argument) is true`
gV=function(t){if(n_(t))return t;throw new gG(rv(t)+" is not a constructor")};var gY=rm("species");// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
gW=function(t,r){var n,o=rY(t).constructor;return void 0===o||t0(n=rY(o)[gY])?r:gV(n)};var gJ={};tn("5tjRy");var gK={},gX=TypeError;gK=function(t,r){if(t<r)throw new gX("Not enough arguments");return t};var gQ={};// eslint-disable-next-line redos/no-vulnerable -- safe
gQ=/(?:ipad|iphone|ipod).*applewebkit/i.test(rn);var gZ=globalThis.setImmediate,g0=globalThis.clearImmediate,g1=globalThis.process,g2=globalThis.Dispatch,g5=globalThis.Function,g6=globalThis.MessageChannel,g4=globalThis.String,g3=0,g8={},g7="onreadystatechange";tN(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
F=globalThis.location});var g9=function(t){if(rx(g8,t)){var r=g8[t];delete g8[t],r()}},vt=function(t){return function(){g9(t)}},vr=function(t){g9(t.data)},ve=function(t){// old engines have not location.origin
globalThis.postMessage(g4(t),F.protocol+"//"+F.host)};gZ&&g0||(gZ=function(t){gK(arguments.length,1);var r=t4(t)?t:g5(t),n=nf(arguments,1);return g8[++g3]=function(){of(r,void 0,n)},D(g3),g3},g0=function(t){delete g8[t]},sr?D=function(t){g1.nextTick(vt(t))}:g2&&g2.now?D=function(t){g2.now(vt(t))}:g6&&!gQ?(B=(U=new g6).port2,U.port1.onmessage=vr,D=nT(B.postMessage,B)):globalThis.addEventListener&&t4(globalThis.postMessage)&&!globalThis.importScripts&&F&&"file:"!==F.protocol&&!tN(ve)?(D=ve,globalThis.addEventListener("message",vr,!1)):D=g7 in rz("script")?function(t){nt.appendChild(rz("script"))[g7]=function(){nt.removeChild(this),g9(t)}}:function(t){setTimeout(vt(t),0)});var vn=(gJ={set:gZ,clear:g0}).set,vo={};tn("5tjRy");var vi={};tn("5tjRy");// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var va=Object.getOwnPropertyDescriptor;// Avoid NodeJS experimental warning
vi=function(t){if(!tL)return globalThis[t];var r=va(globalThis,t);return r&&r.value};var vs=gJ.set,vu={},vc=function(){this.head=null,this.tail=null};vc.prototype={add:function(t){var r={item:t,next:null},n=this.tail;n?n.next=r:this.head=r,this.tail=r},get:function(){var t=this.head;if(t)return null===(this.head=t.next)&&(this.tail=null),t.item}},vu=vc;var vf={};vf=/ipad|iphone|ipod/i.test(rn)&&"undefined"!=typeof Pebble;var vl={};vl=/web0s(?!.*chrome)/i.test(rn);var vh=globalThis.MutationObserver||globalThis.WebKitMutationObserver,vg=globalThis.document,vv=globalThis.process,vp=globalThis.Promise,vd=vi("queueMicrotask");// modern engines have queueMicrotask method
if(!vd){var vy=new vu,vb=function(){var t,r;for(sr&&(t=vv.domain)&&t.exit();r=vy.get();)try{r()}catch(t){throw vy.head&&z(),t}t&&t.enter()};gQ||sr||vl||!vh||!vg?!vf&&vp&&vp.resolve?(// workaround of WebKit ~ iOS Safari 10.1 bug
// Promise.resolve without an argument throws an error in LG WebOS 2
(q=vp.resolve(void 0)).constructor=vp,W=nT(q.then,q),z=function(){W(vb)}):sr?z=function(){vv.nextTick(vb)}:(// `webpack` dev server bug on IE global methods - use bind(fn, global)
vs=nT(vs,globalThis),z=function(){vs(vb)}):($=!0,H=vg.createTextNode(""),new vh(vb).observe(H,{characterData:!0}),z=function(){H.data=$=!$}),vd=function(t){vy.head||z(),vy.add(t)}}vo=vd;var vm={};vm=function(t,r){try{// eslint-disable-next-line no-console -- safe
1==arguments.length?console.error(t):console.error(t,r)}catch(t){}};var vw={};vw=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}};var vE={};tn("5tjRy"),vE=globalThis.Promise;var vT={};tn("5tjRy");var vS=vE&&vE.prototype,vA=rm("species"),vR=!1,vO=t4(globalThis.PromiseRejectionEvent);vT={CONSTRUCTOR:eW("Promise",function(){var t=er(vE),r=t!==String(vE);// V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
// https://bugs.chromium.org/p/chromium/issues/detail?id=830565
// We can't detect it synchronously, so just check versions
if(!r&&66===re||rT&&!(vS.catch&&vS.finally))return!0;// We can't use @@species feature detection in V8 since it causes
// deoptimization and performance degradation
// https://github.com/zloirock/core-js/issues/679
if(!re||re<51||!/native code/.test(t)){// Detect correctness of subclassing with @@species support
var n=new vE(function(t){t(1)}),o=function(t){t(function(){},function(){})};if((n.constructor={})[vA]=o,!(vR=n.then(function(){}) instanceof o))return!0;// Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
}return!r&&("BROWSER"===se||"DENO"===se)&&!vO}),REJECTION_EVENT:vO,SUBCLASSING:vR};var vx=TypeError,v_=function(t){var r,n;this.promise=new t(function(t,o){if(void 0!==r||void 0!==n)throw new vx("Bad Promise constructor");r=t,n=o}),this.resolve=rg(r),this.reject=rg(n)};V=function(t){return new v_(t)};var vI="Promise",vk=vT.CONSTRUCTOR,vj=vT.REJECTION_EVENT,vM=vT.SUBCLASSING,vP=en.getterFor(vI),vL=en.set,vN=vE&&vE.prototype,vC=vE,vF=vN,vD=globalThis.TypeError,vU=globalThis.document,vB=globalThis.process,vz=V,v$=vz,vH=!!(vU&&vU.createEvent&&globalThis.dispatchEvent),vq="unhandledrejection",vW=function(t){var r;return!!(t6(t)&&t4(r=t.then))&&r},vV=function(t,r){var n,o,i,a=r.value,s=1===r.state,u=s?t.ok:t.fail,c=t.resolve,f=t.reject,l=t.domain;try{u?(s||(2===r.rejection&&vX(r),r.rejection=1),!0===u?n=a:(l&&l.enter(),n=u(a),l&&(l.exit(),i=!0)),n===t.promise?f(new vD("Promise-chain cycle")):(o=vW(n))?tC(o,n,c,f):c(n)):f(a)}catch(t){l&&!i&&l.exit(),f(t)}},vG=function(t,r){t.notified||(t.notified=!0,vo(function(){for(var n,o=t.reactions;n=o.get();)vV(n,t);t.notified=!1,r&&!t.rejection&&vJ(t)}))},vY=function(t,r,n){var o,i;vH?((o=vU.createEvent("Event")).promise=r,o.reason=n,o.initEvent(t,!1,!0),globalThis.dispatchEvent(o)):o={promise:r,reason:n},!vj&&(i=globalThis["on"+t])?i(o):t===vq&&vm("Unhandled promise rejection",n)},vJ=function(t){tC(vn,globalThis,function(){var r,n=t.facade,o=t.value;if(vK(t)&&(r=vw(function(){sr?vB.emit("unhandledRejection",o,n):vY(vq,n,o)}),// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
t.rejection=sr||vK(t)?2:1,r.error))throw r.value})},vK=function(t){return 1!==t.rejection&&!t.parent},vX=function(t){tC(vn,globalThis,function(){var r=t.facade;sr?vB.emit("rejectionHandled",r):vY("rejectionhandled",r,t.value)})},vQ=function(t,r,n){return function(o){t(r,o,n)}},vZ=function(t,r,n){t.done||(t.done=!0,n&&(t=n),t.value=r,t.state=2,vG(t,!0))},v0=function(t,r,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===r)throw new vD("Promise can't be resolved itself");var o=vW(r);o?vo(function(){var n={done:!1};try{tC(o,r,vQ(v0,n,t),vQ(vZ,n,t))}catch(r){vZ(n,r,t)}}):(t.value=r,t.state=1,vG(t,!1))}catch(r){vZ({done:!1},r,t)}}};// constructor polyfill
if(vk&&(vF=// 25.4.3.1 Promise(executor)
(vC=function(t){sK(this,vF),rg(t),tC(G,this);var r=vP(this);try{t(vQ(v0,r),vQ(vZ,r))}catch(t){vZ(r,t)}}).prototype,// `Promise.prototype.then` method
// https://tc39.es/ecma262/#sec-promise.prototype.then
// eslint-disable-next-line no-unused-vars -- required for `.length`
(G=function(t){vL(this,{type:vI,done:!1,notified:!1,parent:!1,reactions:new vu,rejection:!1,state:0,value:null})}).prototype=r5(vF,"then",function(t,r){var n=vP(this),o=vz(gW(this,vC));return n.parent=!0,o.ok=!t4(t)||t,o.fail=t4(r)&&r,o.domain=sr?vB.domain:void 0,0===n.state?n.reactions.add(o):vo(function(){vV(o,n)}),o.promise}),Y=function(){var t=new G,r=vP(t);this.promise=t,this.resolve=vQ(v0,r),this.reject=vQ(vZ,r)},V=vz=function(t){return t===vC||t===J?new Y(t):v$(t)},!rT&&t4(vE)&&vN!==Object.prototype)){K=vN.then,vM||r5(vN,"then",function(t,r){var n=this;return new vC(function(t,r){tC(K,n,t,r)}).then(t,r);// https://github.com/zloirock/core-js/issues/640
},{unsafe:!0});// make `.constructor === Promise` work for native promise-based APIs
try{delete vN.constructor}catch(t){}o$&&o$(vN,vF)}// `Promise` constructor
// https://tc39.es/ecma262/#sec-promise-executor
tP({global:!0,constructor:!0,wrap:!0,forced:vk},{Promise:vC}),nb(vC,vI,!1,!0),sk(vI);var v1={};v1=vT.CONSTRUCTOR||!af(function(t){vE.all(t).then(void 0,function(){})}),// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
tP({target:"Promise",stat:!0,forced:v1},{all:function(t){var r=this,n=V(r),o=n.resolve,i=n.reject,a=vw(function(){var n=rg(r.resolve),a=[],s=0,u=1;ig(t,function(t){var c=s++,f=!1;u++,tC(n,r,t).then(function(t){!f&&(f=!0,a[c]=t,--u||o(a))},i)}),--u||o(a)});return a.error&&i(a.value),n.promise}});var v2=vT.CONSTRUCTOR,v5=vE&&vE.prototype;// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if(// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
tP({target:"Promise",proto:!0,forced:v2,real:!0},{catch:function(t){return this.then(void 0,t)}}),!rT&&t4(vE)){var v6=t7("Promise").prototype.catch;v5.catch!==v6&&r5(v5,"catch",v6,{unsafe:!0})}// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
tP({target:"Promise",stat:!0,forced:v1},{race:function(t){var r=this,n=V(r),o=n.reject,i=vw(function(){var i=rg(r.resolve);ig(t,function(t){tC(i,r,t).then(n.resolve,o)})});return i.error&&o(i.value),n.promise}});var v4=vT.CONSTRUCTOR;// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
tP({target:"Promise",stat:!0,forced:v4},{reject:function(t){var r=V(this);return(0,r.reject)(t),r.promise}});var v3=vT.CONSTRUCTOR,v8={};v8=function(t,r){if(rY(t),t6(r)&&r.constructor===t)return r;var n=V(t);return(0,n.resolve)(r),n.promise};var v7=t7("Promise"),v9=rT&&!v3;// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
tP({target:"Promise",stat:!0,forced:rT||v3},{resolve:function(t){return v8(v9&&this===v7?vE:this,t)}}),// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
tP({target:"Promise",stat:!0,forced:v1},{allSettled:function(t){var r=this,n=V(r),o=n.resolve,i=n.reject,a=vw(function(){var n=rg(r.resolve),i=[],a=0,s=1;ig(t,function(t){var u=a++,c=!1;s++,tC(n,r,t).then(function(t){!c&&(c=!0,i[u]={status:"fulfilled",value:t},--s||o(i))},function(t){!c&&(c=!0,i[u]={status:"rejected",reason:t},--s||o(i))})}),--s||o(i)});return a.error&&i(a.value),n.promise}});var pt="No one promise resolved";// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
tP({target:"Promise",stat:!0,forced:v1},{any:function(t){var r=this,n=t7("AggregateError"),o=V(r),i=o.resolve,a=o.reject,s=vw(function(){var o=rg(r.resolve),s=[],u=0,c=1,f=!1;ig(t,function(t){var l=u++,h=!1;c++,tC(o,r,t).then(function(t){h||f||(f=!0,i(t))},function(t){!h&&!f&&(h=!0,s[l]=t,--c||a(new n(s,pt)))})}),--c||a(new n(s,pt))});return s.error&&a(s.value),o.promise}});var pr=vE&&vE.prototype,pe=!!vE&&tN(function(){// eslint-disable-next-line unicorn/no-thenable -- required for testing
pr.finally.call({then:function(){}},function(){})});// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if(// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
tP({target:"Promise",proto:!0,real:!0,forced:pe},{finally:function(t){var r=gW(this,t7("Promise")),n=t4(t);return this.then(n?function(n){return v8(r,t()).then(function(){return n})}:t,n?function(n){return v8(r,t()).then(function(){throw n})}:t)}}),!rT&&t4(vE)){var pn=t7("Promise").prototype.finally;pr.finally!==pn&&r5(pr,"finally",pn,{unsafe:!0})}tn("5tjRy");var po=globalThis.Promise,pi=!1,pa=!po||!po.try||vw(function(){po.try(function(t){pi=8===t},8)}).error||!pi;// `Promise.try` method
// https://tc39.es/ecma262/#sec-promise.try
tP({target:"Promise",stat:!0,forced:pa},{try:function(t/* , ...args */){var r=arguments.length>1?nf(arguments,1):[],n=V(this),o=vw(function(){return of(rg(t),void 0,r)});return(o.error?n.reject:n.resolve)(o.value),n.promise}}),// `Promise.withResolvers` method
// https://tc39.es/ecma262/#sec-promise.withResolvers
tP({target:"Promise",stat:!0},{withResolvers:function(){var t=V(this);return{promise:t.promise,resolve:t.resolve,reject:t.reject}}});// MS Edge argumentsList argument is optional
var ps=!tN(function(){// eslint-disable-next-line es/no-reflect -- required for testing
Reflect.apply(function(){})});// `Reflect.apply` method
// https://tc39.es/ecma262/#sec-reflect.apply
tP({target:"Reflect",stat:!0,forced:ps},{apply:function(t,r,n){return of(rg(t),r,rY(n))}});var pu=t7("Reflect","construct"),pc=Object.prototype,pf=[].push,pl=tN(function(){function t(){}return!(pu(function(){},[],t) instanceof t)}),ph=!tN(function(){pu(function(){})}),pg=pl||ph;tP({target:"Reflect",stat:!0,forced:pg,sham:pg},{construct:function(t,r/* , newTarget */){gV(t),rY(r);var n=arguments.length<3?t:gV(arguments[2]);if(ph&&!pl)return pu(t,r,n);if(t===n){// w/o altered newTarget, optimization for 0-4 arguments
switch(r.length){case 0:return new t;case 1:return new t(r[0]);case 2:return new t(r[0],r[1]);case 3:return new t(r[0],r[1],r[2]);case 4:return new t(r[0],r[1],r[2],r[3])}// w/o altered newTarget, lot of arguments case
var o=[null];return of(pf,o,r),new(of(fg,t,o))}// with altered newTarget, not support built-in constructors
var i=n.prototype,a=e7(t6(i)?i:pc),s=of(t,a,r);return t6(s)?s:a}});// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
var pv=tN(function(){// eslint-disable-next-line es/no-reflect -- required for testing
Reflect.defineProperty(y({},1,{value:1}),1,{value:2})});// `Reflect.defineProperty` method
// https://tc39.es/ecma262/#sec-reflect.defineproperty
tP({target:"Reflect",stat:!0,forced:pv,sham:!tL},{defineProperty:function(t,r,n){rY(t);var o=t2(r);rY(n);try{return y(t,o,n),!0}catch(t){return!1}}});var pp=g;// `Reflect.deleteProperty` method
// https://tc39.es/ecma262/#sec-reflect.deleteproperty
tP({target:"Reflect",stat:!0},{deleteProperty:function(t,r){var n=pp(rY(t),r);return(!n||!!n.configurable)&&delete t[r]}});var pd={};pd=function(t){return void 0!==t&&(rx(t,"value")||rx(t,"writable"))},tP({target:"Reflect",stat:!0},{get:// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get
function t(r,n/* , receiver */){var o,i,a=arguments.length<3?r:arguments[2];return rY(r)===a?r[n]:(o=g(r,n))?pd(o)?o.value:void 0===o.get?void 0:tC(o.get,a):t6(i=is(r))?t(i,n,a):void 0}}),// `Reflect.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor
tP({target:"Reflect",stat:!0,sham:!tL},{getOwnPropertyDescriptor:function(t,r){return g(rY(t),r)}}),// `Reflect.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.getprototypeof
tP({target:"Reflect",stat:!0,sham:!iu},{getPrototypeOf:function(t){return is(rY(t))}}),// `Reflect.has` method
// https://tc39.es/ecma262/#sec-reflect.has
tP({target:"Reflect",stat:!0},{has:function(t,r){return r in t}}),// `Reflect.isExtensible` method
// https://tc39.es/ecma262/#sec-reflect.isextensible
tP({target:"Reflect",stat:!0},{isExtensible:function(t){return rY(t),f7(t)}}),// `Reflect.ownKeys` method
// https://tc39.es/ecma262/#sec-reflect.ownkeys
tP({target:"Reflect",stat:!0},{ownKeys:eO}),// `Reflect.preventExtensions` method
// https://tc39.es/ecma262/#sec-reflect.preventextensions
tP({target:"Reflect",stat:!0,sham:!lr},{preventExtensions:function(t){rY(t);try{var r=t7("Object","preventExtensions");return r&&r(t),!0}catch(t){return!1}}});// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var py=tN(function(){var t=function(){},r=y(new t,"a",{configurable:!0});// eslint-disable-next-line es/no-reflect -- required for testing
return!1!==Reflect.set(t.prototype,"a",1,r)});tP({target:"Reflect",stat:!0,forced:py},{set:// `Reflect.set` method
// https://tc39.es/ecma262/#sec-reflect.set
function t(r,n,o/* , receiver */){var i,a,s,u=arguments.length<4?r:arguments[3],c=g(rY(r),n);if(!c){if(t6(a=is(r)))return t(a,n,o,u);c=tz(0)}if(pd(c)){if(!1===c.writable||!t6(u))return!1;if(i=g(u,n)){if(i.get||i.set||!1===i.writable)return!1;i.value=o,y(u,n,i)}else y(u,n,tz(0,o))}else{if(void 0===(s=c.set))return!1;tC(s,u,o)}return!0}}),o$&&tP({target:"Reflect",stat:!0},{setPrototypeOf:function(t,r){rY(t),oq(r);try{return o$(t,r),!0}catch(t){return!1}}}),tn("5tjRy"),tP({global:!0},{Reflect:{}}),// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
nb(globalThis.Reflect,"Reflect",!0),tn("5tjRy");var pb=E,pm={},pw=rm("match");// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
pm=function(t){var r;return t6(t)&&(void 0!==(r=t[pw])?!!r:"RegExp"===tY(t))};var pE={},pT={};// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
pT=function(){var t=rY(this),r="";return t.hasIndices&&(r+="d"),t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.unicodeSets&&(r+="v"),t.sticky&&(r+="y"),r};var pS=RegExp.prototype;pE=function(t){var r=t.flags;return!(void 0===r&&!("flags"in pS)&&!rx(t,"flags")&&t9(pS,t))?r:tC(pT,t)};var pA={};tn("5tjRy");// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var pR=globalThis.RegExp,pO=tN(function(){var t=pR("a","y");return t.lastIndex=2,null!==t.exec("abcd")}),px=pO||tN(function(){return!pR("a","y").sticky});pA={BROKEN_CARET:pO||tN(function(){// https://bugzilla.mozilla.org/show_bug.cgi?id=773687
var t=pR("^r","gy");return t.lastIndex=2,null!==t.exec("str")}),MISSED_STICKY:px,UNSUPPORTED_Y:pO};var p_=en.enforce,pI={};tn("5tjRy");// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var pk=globalThis.RegExp;pI=tN(function(){var t=pk(".","s");return!(t.dotAll&&t.test("\n")&&"s"===t.flags)});var pj={};tn("5tjRy");// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var pM=globalThis.RegExp;pj=tN(function(){var t=pM("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")});var pP=rm("match"),pL=globalThis.RegExp,pN=pL.prototype,pC=globalThis.SyntaxError,pF=tq(pN.exec),pD=tq("".charAt),pU=tq("".replace),pB=tq("".indexOf),pz=tq("".slice),p$=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,pH=/a/g,pq=/a/g,pW=new pL(pH)!==pH,pV=pA.MISSED_STICKY,pG=pA.UNSUPPORTED_Y,pY=tL&&(!pW||pV||pI||pj||tN(function(){// RegExp constructor can alter flags and IsRegExp works correct with @@match
// eslint-disable-next-line sonarjs/inconsistent-function-call -- required for testing
return pq[pP]=!1,pL(pH)!==pH||pL(pq)===pq||"/a/i"!==String(pL(pH,"i"))})),pJ=function(t){for(var r,n=t.length,o=0,i="",a=!1;o<=n;o++){if("\\"===(r=pD(t,o))){i+=r+pD(t,++o);continue}a||"."!==r?("["===r?a=!0:"]"===r&&(a=!1),i+=r):i+="[\\s\\S]"}return i},pK=function(t){for(var r,n=t.length,o=0,i="",a=[],s=e7(null),u=!1,c=!1,f=0,l="";o<=n;o++){if("\\"===(r=pD(t,o)))r+=pD(t,++o);else if("]"===r)u=!1;else if(!u)switch(!0){case"["===r:u=!0;break;case"("===r:// ignore non-capturing groups
if(i+=r,"?:"===pz(t,o+1,o+3))continue;pF(p$,pz(t,o+1))&&(o+=2,c=!0),f++;continue;case">"===r&&c:if(""===l||rx(s,l))throw new pC("Invalid capture group name");s[l]=!0,a[a.length]=[l,f],c=!1,l="";continue}c?l+=r:i+=r}return[i,a]};// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if(eW("RegExp",pY)){for(var pX=function(t,r){var n,o,i,a,s,u,c=t9(pN,this),f=pm(t),l=void 0===r,h=[],g=t;if(!c&&f&&l&&t.constructor===pX)return t;if((f||t9(pN,t))&&(t=t.source,l&&(r=pE(g))),t=void 0===t?"":eQ(t),r=void 0===r?"":eQ(r),g=t,pI&&("dotAll"in pH)&&(o=!!r&&pB(r,"s")>-1)&&(r=pU(r,/s/g,"")),n=r,pV&&("sticky"in pH)&&(i=!!r&&pB(r,"y")>-1)&&pG&&(r=pU(r,/y/g,"")),pj&&(t=(a=pK(t))[0],h=a[1]),s=oK(pL(t,r),c?this:pN,pX),(o||i||h.length)&&(u=p_(s),o&&(u.dotAll=!0,u.raw=pX(pJ(t),n)),i&&(u.sticky=!0),h.length&&(u.groups=h)),t!==g)try{// fails in old engines, but we have no alternatives for unsupported regex syntax
rV(s,"source",""===g?"(?:)":g)}catch(t){}return s},pQ=pb(pL),pZ=0;pQ.length>pZ;)oY(pX,pL,pQ[pZ++]);pN.constructor=pX,pX.prototype=pN,r5(globalThis,"RegExp",pX,{constructor:!0})}// https://tc39.es/ecma262/#sec-get-regexp-@@species
sk("RegExp");var p0=en.get,p1=RegExp.prototype,p2=TypeError;tL&&pI&&ng(p1,"dotAll",{configurable:!0,get:function(){if(this!==p1){// We can't use InternalStateModule.getterFor because
// we don't add metadata for regexps created by a literal.
if("RegExp"===tY(this))return!!p0(this).dotAll;throw new p2("Incompatible receiver, RegExp required")}}});var p5={},p6=en.get,p4=rw("native-string-replace",String.prototype.replace),p3=RegExp.prototype.exec,p8=p3,p7=tq("".charAt),p9=tq("".indexOf),dt=tq("".replace),dr=tq("".slice),de=(a=/b*/g,tC(p3,i=/a/,"a"),tC(p3,a,"a"),0!==i.lastIndex||0!==a.lastIndex),dn=pA.BROKEN_CARET,di=void 0!==/()??/.exec("")[1];(de||di||dn||pI||pj)&&(p8=function(t){var r,n,o,i,a,s,u,c=p6(this),f=eQ(t),l=c.raw;if(l)return l.lastIndex=this.lastIndex,r=tC(p8,l,f),this.lastIndex=l.lastIndex,r;var h=c.groups,g=dn&&this.sticky,v=tC(pT,this),p=this.source,d=0,y=f;if(g&&(-1===p9(v=dt(v,"y",""),"g")&&(v+="g"),y=dr(f,this.lastIndex),this.lastIndex>0&&(!this.multiline||this.multiline&&"\n"!==p7(f,this.lastIndex-1))&&(p="(?: "+p+")",y=" "+y,d++),// ^(? + rx + ) is needed, in combination with some str slicing, to
// simulate the 'y' flag.
n=RegExp("^(?:"+p+")",v)),di&&(n=RegExp("^"+p+"$(?!\\s)",v)),de&&(o=this.lastIndex),i=tC(p3,g?n:this,y),g?i?(i.input=dr(i.input,d),i[0]=dr(i[0],d),i.index=this.lastIndex,this.lastIndex+=i[0].length):this.lastIndex=0:de&&i&&(this.lastIndex=this.global?i.index+i[0].length:o),di&&i&&i.length>1&&// for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
tC(p4,i[0],n,function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(i[a]=void 0)}),i&&h)for(a=0,i.groups=s=e7(null);a<h.length;a++)s[(u=h[a])[0]]=i[u[1]];return i}),p5=p8,// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
tP({target:"RegExp",proto:!0,forced:/./.exec!==p5},{exec:p5}),tn("5tjRy");// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var da=globalThis.RegExp,ds=da.prototype;tL&&tN(function(){var t=!0;try{da(".","d")}catch(r){t=!1}var r={},n="",o=t?"dgimsy":"gimsy",i=function(t,o){// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty(r,t,{get:function(){return n+=o,!0}})},a={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var s in t&&(a.hasIndices="d"),a)i(s,a[s]);return Object.getOwnPropertyDescriptor(ds,"flags").get.call(r)!==o||n!==o})&&ng(ds,"flags",{configurable:!0,get:pT});var du=pA.MISSED_STICKY,dc=en.get,df=RegExp.prototype,dl=TypeError;tL&&du&&ng(df,"sticky",{configurable:!0,get:function(){if(this!==df){// We can't use InternalStateModule.getterFor because
// we don't add metadata for regexps created by a literal.
if("RegExp"===tY(this))return!!dc(this).sticky;throw new dl("Incompatible receiver, RegExp required")}}});var dh=(s=!1,(u=/[ac]/).exec=function(){return s=!0,/./.exec.apply(this,arguments)},!0===u.test("abc")&&s),dg=/./.test;// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
tP({target:"RegExp",proto:!0,forced:!dh},{test:function(t){var r=rY(this),n=eQ(t),o=r.exec;if(!t4(o))return tC(dg,r,n);var i=tC(o,r,n);return null!==i&&(rY(i),!0)}});var dv=r4.PROPER,dp="toString",dd=RegExp.prototype,dy=dd[dp],db=tN(function(){return"/a/b"!==dy.call({source:"a",flags:"b"})}),dm=dv&&dy.name!==dp;(db||dm)&&r5(dd,dp,function(){var t=rY(this);return"/"+eQ(t.source)+"/"+eQ(pE(t))},{unsafe:!0}),// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
f4("Set",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},ls);var dw={},dE={},dT={},dS=Set.prototype,dA=(dT={// eslint-disable-next-line es/no-set -- safe
Set:Set,add:tq(dS.add),has:tq(dS.has),remove:tq(dS.delete),proto:dS}).has;// Perform ? RequireInternalSlot(M, [[SetData]])
dE=function(t){return dA(t),t};var dR={},dO={},dx={};dx=function(t,r,n){for(var o,i,a=n?t:t.iterator,s=t.next;!(o=tC(s,a)).done;)if(void 0!==(i=r(o.value)))return i};var d_=dT.Set,dI=dT.proto,dk=tq(dI.forEach),dj=tq(dI.keys),dM=dj(new d_).next;dO=function(t,r,n){return n?dx({iterator:dj(t),next:dM},r):dk(t,r)};var dP=dT.Set,dL=dT.add;dR=function(t){var r=new dP;return dO(t,function(t){dL(r,t)}),r};var dN={};dN=oH(dT.proto,"size","get")||function(t){return t.size};var dC={},dF="Invalid size",dD=RangeError,dU=TypeError,dB=Math.max,dz=function(t,r){this.set=t,this.size=dB(r,0),this.has=rg(t.has),this.keys=rg(t.keys)};dz.prototype={getIterator:function(){return fN(rY(tC(this.keys,this.set)))},includes:function(t){return tC(this.has,this.set,t)}},// `GetSetRecord` abstract operation
// https://tc39.es/proposal-set-methods/#sec-getsetrecord
dC=function(t){rY(t);var r=+t.size;// NOTE: If size is undefined, then numSize will be NaN
// eslint-disable-next-line no-self-compare -- NaN check
if(r!=r)throw new dU(dF);var n=ek(r);if(n<0)throw new dD(dF);return new dz(t,n)};var d$=dT.has,dH=dT.remove;// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
dw=function(t){var r=dE(this),n=dC(t),o=dR(r);return dN(r)<=n.size?dO(r,function(t){n.includes(t)&&dH(o,t)}):dx(n.getIterator(),function(t){d$(r,t)&&dH(o,t)}),o};var dq={},dW=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};// `Set.prototype.difference` method
// https://tc39.es/ecma262/#sec-set.prototype.difference
tP({target:"Set",proto:!0,real:!0,forced:!(dq=function(t){var r=t7("Set");try{new r()[t](dW(0));try{return(// late spec change, early WebKit ~ Safari 17.0 beta implementation does not pass it
// https://github.com/tc39/proposal-set-methods/pull/88
new r()[t](dW(-1)),!1)}catch(t){return!0}}catch(t){return!1}})("difference")},{difference:dw});var dV={},dG=dT.Set,dY=dT.add,dJ=dT.has;// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
dV=function(t){var r=dE(this),n=dC(t),o=new dG;return dN(r)>n.size?dx(n.getIterator(),function(t){dJ(r,t)&&dY(o,t)}):dO(r,function(t){n.includes(t)&&dY(o,t)}),o};var dK=!dq("intersection")||tN(function(){// eslint-disable-next-line es/no-array-from, es/no-set -- testing
return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))});// `Set.prototype.intersection` method
// https://tc39.es/ecma262/#sec-set.prototype.intersection
tP({target:"Set",proto:!0,real:!0,forced:dK},{intersection:dV});var dX={},dQ=dT.has;// `Set.prototype.isDisjointFrom` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
dX=function(t){var r=dE(this),n=dC(t);if(dN(r)<=n.size)return!1!==dO(r,function(t){if(n.includes(t))return!1},!0);var o=n.getIterator();return!1!==dx(o,function(t){if(dQ(r,t))return iT(o,"normal",!1)})},// `Set.prototype.isDisjointFrom` method
// https://tc39.es/ecma262/#sec-set.prototype.isdisjointfrom
tP({target:"Set",proto:!0,real:!0,forced:!dq("isDisjointFrom")},{isDisjointFrom:dX});var dZ={};// `Set.prototype.isSubsetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
dZ=function(t){var r=dE(this),n=dC(t);return!(dN(r)>n.size)&&!1!==dO(r,function(t){if(!n.includes(t))return!1},!0)},// `Set.prototype.isSubsetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issubsetof
tP({target:"Set",proto:!0,real:!0,forced:!dq("isSubsetOf")},{isSubsetOf:dZ});var d0={},d1=dT.has;// `Set.prototype.isSupersetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
d0=function(t){var r=dE(this),n=dC(t);if(dN(r)<n.size)return!1;var o=n.getIterator();return!1!==dx(o,function(t){if(!d1(r,t))return iT(o,"normal",!1)})},// `Set.prototype.isSupersetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issupersetof
tP({target:"Set",proto:!0,real:!0,forced:!dq("isSupersetOf")},{isSupersetOf:d0});var d2={},d5=dT.add,d6=dT.has,d4=dT.remove;// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
d2=function(t){var r=dE(this),n=dC(t).getIterator(),o=dR(r);return dx(n,function(t){d6(r,t)?d4(o,t):d5(o,t)}),o},// `Set.prototype.symmetricDifference` method
// https://tc39.es/ecma262/#sec-set.prototype.symmetricdifference
tP({target:"Set",proto:!0,real:!0,forced:!dq("symmetricDifference")},{symmetricDifference:d2});var d3={},d8=dT.add;// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
d3=function(t){var r=dE(this),n=dC(t).getIterator(),o=dR(r);return dx(n,function(t){d8(o,t)}),o},// `Set.prototype.union` method
// https://tc39.es/ecma262/#sec-set.prototype.union
tP({target:"Set",proto:!0,real:!0,forced:!dq("union")},{union:d3});var d7=tq("".charAt),d9=tN(function(){// eslint-disable-next-line es/no-string-prototype-at -- safe
return"\uD842"!=="\uD842\uDFB7".at(-2)});// `String.prototype.at` method
// https://tc39.es/ecma262/#sec-string.prototype.at
tP({target:"String",proto:!0,forced:d9},{at:function(t){var r=eQ(tZ(this)),n=r.length,o=ek(t),i=o>=0?o:n+o;return i<0||i>=n?void 0:d7(r,i)}});var yt={},yr=tq("".charAt),ye=tq("".charCodeAt),yn=tq("".slice),yo=function(t){return function(r,n){var o,i,a=eQ(tZ(r)),s=ek(n),u=a.length;return s<0||s>=u?t?"":void 0:(o=ye(a,s))<55296||o>56319||s+1===u||(i=ye(a,s+1))<56320||i>57343?t?yr(a,s):o:t?yn(a,s,s+2):(o-55296<<10)+(i-56320)+65536}},yi=(yt={// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
codeAt:yo(!1),// `String.prototype.at` method
// https://github.com/mathiasbynens/String.prototype.at
charAt:yo(!0)}).codeAt;// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
tP({target:"String",proto:!0},{codePointAt:function(t){return yi(this,t)}});var ya=g,ys={},yu=TypeError;ys=function(t){if(pm(t))throw new yu("The method doesn't accept regular expressions");return t};var yc={},yf=rm("match");yc=function(t){var r=/./;try{"/./"[t](r)}catch(n){try{return r[yf]=!1,"/./"[t](r)}catch(t){}}return!1};var yl=nS("".slice),yh=Math.min,yg=yc("endsWith"),yv=!rT&&!yg&&!!((c=ya(String.prototype,"endsWith"))&&!c.writable);// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
tP({target:"String",proto:!0,forced:!yv&&!yg},{endsWith:function(t/* , endPosition = @length */){var r=eQ(tZ(this));ys(t);var n=arguments.length>1?arguments[1]:void 0,o=r.length,i=void 0===n?o:yh(eF(n),o),a=eQ(t);return yl(r,i-a.length,i)===a}});var yp=RangeError,yd=String.fromCharCode,yy=String.fromCodePoint,yb=tq([].join),ym=!!yy&&1!==yy.length;// `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint
tP({target:"String",stat:!0,arity:1,forced:ym},{// eslint-disable-next-line no-unused-vars -- required for `.length`
fromCodePoint:function(t){for(var r,n=[],o=arguments.length,i=0;o>i;){if(r=+arguments[i++],eI(r,1114111)!==r)throw new yp(r+" is not a valid code point");n[i]=r<65536?yd(r):yd(((r-=65536)>>10)+55296,r%1024+56320)}return yb(n,"")}});var yw=tq("".indexOf);// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
tP({target:"String",proto:!0,forced:!yc("includes")},{includes:function(t/* , position = 0 */){return!!~yw(eQ(tZ(this)),eQ(ys(t)),arguments.length>1?arguments[1]:void 0)}});var yE=tq("".charCodeAt);// `String.prototype.isWellFormed` method
// https://tc39.es/ecma262/#sec-string.prototype.iswellformed
tP({target:"String",proto:!0},{isWellFormed:function(){for(var t=eQ(tZ(this)),r=t.length,n=0;n<r;n++){var o=yE(t,n);// single UTF-16 code unit
if((63488&o)==55296&&(o>=56320||++n>=r||(64512&yE(t,n))!=56320))return!1}return!0}});var yT=yt.charAt,yS="String Iterator",yA=en.set,yR=en.getterFor(yS);// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
aA(String,"String",function(t){yA(this,{type:yS,string:eQ(t),index:0});// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
},function(){var t,r=yR(this),n=r.string,o=r.index;return o>=n.length?aB(void 0,!0):(t=yT(n,o),r.index+=t.length,aB(t,!1))});var yO={},yx=rm("species"),y_=RegExp.prototype;yO=function(t,r,n,o){var i=rm(t),a=!tN(function(){// String methods call symbol-named RegExp methods
var r={};return r[i]=function(){return 7},7!==""[t](r)}),s=a&&!tN(function(){// Symbol-named RegExp methods call .exec
var r=!1,n=/a/;return"split"===t&&(// RegExp[@@split] doesn't call the regex's exec method, but first creates
// a new one. We need to return the patched regex when creating the new one.
// We can't use real regex here since it causes deoptimization
// and serious performance degradation in V8
// https://github.com/zloirock/core-js/issues/306
(n={}).constructor={},n.constructor[yx]=function(){return n},n.flags="",n[i]=/./[i]),n.exec=function(){return r=!0,null},n[i](""),!r});if(!a||!s||n){var u=/./[i],c=r(i,""[t],function(t,r,n,o,i){var s=r.exec;return s===p5||s===y_.exec?a&&!i?{done:!0,value:tC(u,r,n,o)}:{done:!0,value:tC(t,n,r,o)}:{done:!1}});r5(String.prototype,t,c[0]),r5(y_,i,c[1])}o&&rV(y_[i],"sham",!0)};var yI={},yk=yt.charAt;// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
yI=function(t,r,n){return r+(n?yk(t,r).length:1)};var yj={},yM=TypeError;// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
yj=function(t,r){var n=t.exec;if(t4(n)){var o=tC(n,t,r);return null!==o&&rY(o),o}if("RegExp"===tY(t))return tC(p5,t,r);throw new yM("RegExp#exec called on incompatible receiver")},// @@match logic
yO("match",function(t,r,n){return[// `String.prototype.match` method
// https://tc39.es/ecma262/#sec-string.prototype.match
function(r){var n=tZ(this),o=t0(r)?void 0:rh(r,t);return o?tC(o,r,n):new RegExp(r)[t](eQ(n))},// `RegExp.prototype[@@match]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@match
function(t){var o,i=rY(this),a=eQ(t),s=n(r,i,a);if(s.done)return s.value;if(!i.global)return yj(i,a);var u=i.unicode;i.lastIndex=0;for(var c=[],f=0;null!==(o=yj(i,a));){var l=eQ(o[0]);c[f]=l,""===l&&(i.lastIndex=yI(a,eF(i.lastIndex),u)),f++}return 0===f?null:c}]});var yP=rm("matchAll"),yL="RegExp String",yN=yL+" Iterator",yC=en.set,yF=en.getterFor(yN),yD=RegExp.prototype,yU=TypeError,yB=nS("".indexOf),yz=nS("".matchAll),y$=!!yz&&!tN(function(){yz("a",/./)}),yH=aR(function(t,r,n,o){yC(this,{type:yN,regexp:t,string:r,global:n,unicode:o,done:!1})},yL,function(){var t=yF(this);if(t.done)return aB(void 0,!0);var r=t.regexp,n=t.string,o=yj(r,n);return null===o?(t.done=!0,aB(void 0,!0)):(t.global?""===eQ(o[0])&&(r.lastIndex=yI(n,eF(r.lastIndex),t.unicode)):t.done=!0,aB(o,!1))}),yq=function(t){var r,n,o,i=rY(this),a=eQ(t),s=gW(i,RegExp),u=eQ(pE(i));return r=new s(s===RegExp?i.source:i,u),n=!!~yB(u,"g"),o=!!~yB(u,"u"),r.lastIndex=eF(i.lastIndex),new yH(r,a,n,o)};// `String.prototype.matchAll` method
// https://tc39.es/ecma262/#sec-string.prototype.matchall
tP({target:"String",proto:!0,forced:y$},{matchAll:function(t){var r,n,o,i=tZ(this);if(t0(t)){if(y$)return yz(i,t)}else{if(pm(t)&&!~yB(eQ(tZ(pE(t))),"g"))throw new yU("`.matchAll` does not allow non-global regexes");if(y$)return yz(i,t);if(void 0===(n=rh(t,yP))&&rT&&"RegExp"===tY(t)&&(n=yq),n)return tC(n,t,i)}return r=eQ(i),o=RegExp(t,"g"),rT?tC(yq,o,r):o[yP](r)}}),rT||yP in yD||r5(yD,yP,yq);var yW=cU.end,yV={};yV=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(rn),// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
tP({target:"String",proto:!0,forced:yV},{padEnd:function(t/* , fillString = ' ' */){return yW(this,t,arguments.length>1?arguments[1]:void 0)}});var yG=cU.start;// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
tP({target:"String",proto:!0,forced:yV},{padStart:function(t/* , fillString = ' ' */){return yG(this,t,arguments.length>1?arguments[1]:void 0)}});var yY=tq([].push),yJ=tq([].join);// `String.raw` method
// https://tc39.es/ecma262/#sec-string.raw
tP({target:"String",stat:!0},{raw:function(t){var r=t$(r_(t).raw),n=eC(r);if(!n)return"";for(var o=arguments.length,i=[],a=0;;){if(yY(i,eQ(r[a++])),a===n)return yJ(i,"");a<o&&yY(i,eQ(arguments[a]))}}}),// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
tP({target:"String",proto:!0},{repeat:cB});var yK={},yX=Math.floor,yQ=tq("".charAt),yZ=tq("".replace),y0=tq("".slice),y1=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,y2=/\$([$&'`]|\d{1,2})/g;// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
yK=function(t,r,n,o,i,a){var s=n+t.length,u=o.length,c=y2;return void 0!==i&&(i=r_(i),c=y1),yZ(a,c,function(a,c){var f;switch(yQ(c,0)){case"$":return"$";case"&":return t;case"`":return y0(r,0,n);case"'":return y0(r,s);case"<":f=i[y0(c,1,-1)];break;default:var l=+c;if(0===l)return a;if(l>u){var h=yX(l/10);if(0===h)return a;if(h<=u)return void 0===o[h-1]?yQ(c,1):o[h-1]+yQ(c,1);return a}f=o[l-1]}return void 0===f?"":f})};var y5=rm("replace"),y6=Math.max,y4=Math.min,y3=tq([].concat),y8=tq([].push),y7=tq("".indexOf),y9=tq("".slice),bt="$0"==="a".replace(/./,"$0"),br=!!/./[y5]&&""===/./[y5]("a","$0");// @@replace logic
yO("replace",function(t,r,n){var o=br?"$":"$0";return[// `String.prototype.replace` method
// https://tc39.es/ecma262/#sec-string.prototype.replace
function(t,n){var o=tZ(this),i=t0(t)?void 0:rh(t,y5);return i?tC(i,t,o,n):tC(r,eQ(o),t,n)},// `RegExp.prototype[@@replace]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
function(t,i){var a=rY(this),s=eQ(t);if("string"==typeof i&&-1===y7(i,o)&&-1===y7(i,"$<")){var u=n(r,a,s,i);if(u.done)return u.value}var c=t4(i);c||(i=eQ(i));var f=a.global;f&&(d=a.unicode,a.lastIndex=0);for(var l=[];null!==(y=yj(a,s))&&(y8(l,y),f);)""===eQ(y[0])&&(a.lastIndex=yI(s,eF(a.lastIndex),d));for(var h="",g=0,v=0;v<l.length;v++){y=l[v];// NOTE: This is equivalent to
//   captures = result.slice(1).map(maybeToString)
// but for some reason `nativeSlice.call(result, 1, result.length)` (called in
// the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
// causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
for(var p,d,y,b,m=eQ(y[0]),w=y6(y4(ek(y.index),s.length),0),E=[],T=1;T<y.length;T++)y8(E,void 0===(p=y[T])?p:String(p));var S=y.groups;if(c){var A=y3([m],E,w,s);void 0!==S&&y8(A,S),b=eQ(of(i,void 0,A))}else b=yK(m,s,w,E,S,i);w>=g&&(h+=y9(s,g,w)+b,g=w+m.length)}return h+y9(s,g)}]},!!tN(function(){var t=/./;// eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})||!bt||br);var be=rm("replace"),bn=TypeError,bo=tq("".indexOf),bi=tq("".replace),ba=tq("".slice),bs=Math.max;// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
tP({target:"String",proto:!0},{replaceAll:function(t,r){var n,o,i,a,s,u,c,f,l,h=tZ(this),g=0,v="";if(!t0(t)){if((n=pm(t))&&!~bo(eQ(tZ(pE(t))),"g"))throw new bn("`.replaceAll` does not allow non-global regexes");if(o=rh(t,be))return tC(o,t,h,r);if(rT&&n)return bi(eQ(h),t,r)}for(i=eQ(h),a=eQ(t),(s=t4(r))||(r=eQ(r)),c=bs(1,u=a.length),f=bo(i,a);-1!==f;)l=s?eQ(r(a,f,i)):yK(a,i,f,[],void 0,r),v+=ba(i,g,f)+l,g=f+u,f=f+c>i.length?-1:bo(i,a,f+c);return g<i.length&&(v+=ba(i,g)),v}}),// @@search logic
yO("search",function(t,r,n){return[// `String.prototype.search` method
// https://tc39.es/ecma262/#sec-string.prototype.search
function(r){var n=tZ(this),o=t0(r)?void 0:rh(r,t);return o?tC(o,r,n):new RegExp(r)[t](eQ(n))},// `RegExp.prototype[@@search]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@search
function(t){var o=rY(this),i=eQ(t),a=n(r,o,i);if(a.done)return a.value;var s=o.lastIndex;gR(s,0)||(o.lastIndex=0);var u=yj(o,i);return gR(o.lastIndex,s)||(o.lastIndex=s),null===u?-1:u.index}]});var bu=pA.UNSUPPORTED_Y,bc=Math.min,bf=tq([].push),bl=tq("".slice),bh=!tN(function(){// eslint-disable-next-line regexp/no-empty-group -- required for testing
var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}),bg="c"==="abbc".split(/(b)*/)[1]||// eslint-disable-next-line regexp/no-empty-group -- required for testing
4!=="test".split(/(?:)/,-1).length||2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||// eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
".".split(/()()/).length>1||"".split(/.?/).length;// @@split logic
yO("split",function(t,r,n){var o="0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:tC(r,this,t,n)}:r;return[// `String.prototype.split` method
// https://tc39.es/ecma262/#sec-string.prototype.split
function(r,n){var i=tZ(this),a=t0(r)?void 0:rh(r,t);return a?tC(a,r,i,n):tC(o,eQ(i),r,n)},// `RegExp.prototype[@@split]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@split
//
// NOTE: This cannot be properly polyfilled in engines that don't support
// the 'y' flag.
function(t,i){var a=rY(this),s=eQ(t);if(!bg){var u=n(o,a,s,i,o!==r);if(u.done)return u.value}var c=gW(a,RegExp),f=a.unicode,l=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(bu?"g":"y"),h=new c(bu?"^(?:"+a.source+")":a,l),g=void 0===i?4294967295:i>>>0;if(0===g)return[];if(0===s.length)return null===yj(h,s)?[s]:[];for(var v=0,p=0,d=[];p<s.length;){h.lastIndex=bu?0:p;var y,b=yj(h,bu?bl(s,p):s);if(null===b||(y=bc(eF(h.lastIndex+(bu?p:0)),s.length))===v)p=yI(s,p,f);else{if(bf(d,bl(s,v,p)),d.length===g)return d;for(var m=1;m<=b.length-1;m++)if(bf(d,b[m]),d.length===g)return d;p=v=y}}return bf(d,bl(s,v)),d}]},bg||!bh,bu);var bv=g,bp=nS("".slice),bd=Math.min,by=yc("startsWith"),bb=!rT&&!by&&!!((f=bv(String.prototype,"startsWith"))&&!f.writable);// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
tP({target:"String",proto:!0,forced:!bb&&!by},{startsWith:function(t/* , position = 0 */){var r=eQ(tZ(this));ys(t);var n=eF(bd(arguments.length>1?arguments[1]:void 0,r.length)),o=eQ(t);return bp(r,n,n+o.length)===o}});var bm=tq("".slice),bw=Math.max,bE=Math.min;// `String.prototype.substr` method
// https://tc39.es/ecma262/#sec-string.prototype.substr
tP({target:"String",proto:!0,forced:!"".substr||"b"!=="ab".substr(-1)},{substr:function(t,r){var n,o,i=eQ(tZ(this)),a=i.length,s=ek(t);return(s===1/0&&(s=0),s<0&&(s=bw(a+s,0)),(n=void 0===r?a:ek(r))<=0||n===1/0)?"":(o=bE(s+n,a),s>=o?"":bm(i,s,o))}});var bT=Array,bS=tq("".charAt),bA=tq("".charCodeAt),bR=tq([].join),bO="".toWellFormed,bx=bO&&tN(function(){return"1"!==tC(bO,1)});// `String.prototype.toWellFormed` method
// https://tc39.es/ecma262/#sec-string.prototype.towellformed
tP({target:"String",proto:!0,forced:bx},{toWellFormed:function(){var t=eQ(tZ(this));if(bx)return tC(bO,t);for(var r=t.length,n=bT(r),o=0;o<r;o++){var i=bA(t,o);// single UTF-16 code unit
(63488&i)!=55296?n[o]=bS(t,o):i>=56320||o+1>=r||(64512&bA(t,o+1))!=56320?n[o]="�":(n[o]=bS(t,o),n[++o]=bS(t,o))}return bR(n,"")}});var b_=hr.trim,bI={},bk=r4.PROPER,bj="​\x85᠎";// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
tP({target:"String",proto:!0,forced:// check that a method works with the correct list
// of whitespaces and has a correct name
(bI=function(t){return tN(function(){return!!he[t]()||bj[t]()!==bj||bk&&he[t].name!==t})})("trim")},{trim:function(){return b_(this)}});var bM={},bP=hr.end;// `String.prototype.{ trimEnd, trimRight }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// https://tc39.es/ecma262/#String.prototype.trimright
bM=bI("trimEnd")?function(){return bP(this);// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
}:"".trimEnd,// `String.prototype.trimRight` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
tP({target:"String",proto:!0,name:"trimEnd",forced:"".trimRight!==bM},{trimRight:bM}),// `String.prototype.trimEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
tP({target:"String",proto:!0,name:"trimEnd",forced:"".trimEnd!==bM},{trimEnd:bM});var bL={},bN=hr.start;// `String.prototype.{ trimStart, trimLeft }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// https://tc39.es/ecma262/#String.prototype.trimleft
bL=bI("trimStart")?function(){return bN(this);// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
}:"".trimStart,// `String.prototype.trimLeft` method
// https://tc39.es/ecma262/#sec-string.prototype.trimleft
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
tP({target:"String",proto:!0,name:"trimStart",forced:"".trimLeft!==bL},{trimLeft:bL}),// `String.prototype.trimStart` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
tP({target:"String",proto:!0,name:"trimStart",forced:"".trimStart!==bL},{trimStart:bL});var bC={},bF=/"/g,bD=tq("".replace);// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
bC=function(t,r,n,o){var i=eQ(tZ(t)),a="<"+r;return""!==n&&(a+=" "+n+'="'+bD(eQ(o),bF,"&quot;")+'"'),a+">"+i+"</"+r+">"};var bU={};// `String.prototype.anchor` method
// https://tc39.es/ecma262/#sec-string.prototype.anchor
tP({target:"String",proto:!0,forced:// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
(bU=function(t){return tN(function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3})})("anchor")},{anchor:function(t){return bC(this,"a","name",t)}}),// `String.prototype.big` method
// https://tc39.es/ecma262/#sec-string.prototype.big
tP({target:"String",proto:!0,forced:bU("big")},{big:function(){return bC(this,"big","","")}}),// `String.prototype.blink` method
// https://tc39.es/ecma262/#sec-string.prototype.blink
tP({target:"String",proto:!0,forced:bU("blink")},{blink:function(){return bC(this,"blink","","")}}),// `String.prototype.bold` method
// https://tc39.es/ecma262/#sec-string.prototype.bold
tP({target:"String",proto:!0,forced:bU("bold")},{bold:function(){return bC(this,"b","","")}}),// `String.prototype.fixed` method
// https://tc39.es/ecma262/#sec-string.prototype.fixed
tP({target:"String",proto:!0,forced:bU("fixed")},{fixed:function(){return bC(this,"tt","","")}}),// `String.prototype.fontcolor` method
// https://tc39.es/ecma262/#sec-string.prototype.fontcolor
tP({target:"String",proto:!0,forced:bU("fontcolor")},{fontcolor:function(t){return bC(this,"font","color",t)}}),// `String.prototype.fontsize` method
// https://tc39.es/ecma262/#sec-string.prototype.fontsize
tP({target:"String",proto:!0,forced:bU("fontsize")},{fontsize:function(t){return bC(this,"font","size",t)}}),// `String.prototype.italics` method
// https://tc39.es/ecma262/#sec-string.prototype.italics
tP({target:"String",proto:!0,forced:bU("italics")},{italics:function(){return bC(this,"i","","")}}),// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
tP({target:"String",proto:!0,forced:bU("link")},{link:function(t){return bC(this,"a","href",t)}}),// `String.prototype.small` method
// https://tc39.es/ecma262/#sec-string.prototype.small
tP({target:"String",proto:!0,forced:bU("small")},{small:function(){return bC(this,"small","","")}}),// `String.prototype.strike` method
// https://tc39.es/ecma262/#sec-string.prototype.strike
tP({target:"String",proto:!0,forced:bU("strike")},{strike:function(){return bC(this,"strike","","")}}),// `String.prototype.sub` method
// https://tc39.es/ecma262/#sec-string.prototype.sub
tP({target:"String",proto:!0,forced:bU("sub")},{sub:function(){return bC(this,"sub","","")}}),// `String.prototype.sup` method
// https://tc39.es/ecma262/#sec-string.prototype.sup
tP({target:"String",proto:!0,forced:bU("sup")},{sup:function(){return bC(this,"sup","","")}});var bB={};tn("5tjRy");var bz={};tn("5tjRy");var b$=uF.NATIVE_ARRAY_BUFFER_VIEWS,bH=globalThis.ArrayBuffer,bq=globalThis.Int8Array;bz=!b$||!tN(function(){bq(1)})||!tN(function(){new bq(-1)})||!af(function(t){new bq,new bq(null),new bq(1.5),new bq(t)},!0)||tN(function(){// Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
return 1!==new bq(new bH(2),1,void 0).length});var bW={},bV=RangeError;bW=function(t,r){var n=fD(t);if(n%r)throw new bV("Wrong offset");return n};var bG={},bY=Math.round;bG=function(t){var r=bY(t);return r<0?0:r>255?255:255&r};var bJ=E,bK={},bX={};bX=function(t){var r=eZ(t);return"BigInt64Array"===r||"BigUint64Array"===r};var bQ=uF.aTypedArrayConstructor,bZ={},b0=TypeError;// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
bZ=function(t){var r=t5(t,"number");if("number"==typeof r)throw new b0("Can't convert number to bigint");// eslint-disable-next-line es/no-bigint -- safe
return BigInt(r)},bK=function(t/* , mapfn, thisArg */){var r,n,o,i,a,s,u,c,f=gV(this),l=r_(t),h=arguments.length,g=h>1?arguments[1]:void 0,v=void 0!==g,p=im(l);if(p&&!iv(p))for(c=(u=ib(l,p)).next,l=[];!(s=tC(c,u)).done;)l.push(s.value);for(v&&h>2&&(g=nT(g,arguments[2])),n=eC(l),o=new(bQ(f))(n),i=bX(o),r=0;n>r;r++)a=v?g(l[r],r):l[r],// FF30- typed arrays doesn't properly convert objects to typed array values
o[r]=i?bZ(a):+a;return o};var b1=nE.forEach,b2=en.get,b5=en.set,b6=en.enforce,b4=y,b3=g,b8=globalThis.RangeError,b7=sG.ArrayBuffer,b9=b7.prototype,mt=sG.DataView,mr=uF.NATIVE_ARRAY_BUFFER_VIEWS,me=uF.TYPED_ARRAY_TAG,mn=uF.TypedArray,mo=uF.TypedArrayPrototype,mi=uF.isTypedArray,ma="BYTES_PER_ELEMENT",ms="Wrong length",mu=function(t,r){ng(t,r,{configurable:!0,get:function(){return b2(this)[r]}})},mc=function(t){var r;return t9(b9,t)||"ArrayBuffer"===(r=eZ(t))||"SharedArrayBuffer"===r},mf=function(t,r){return mi(t)&&!t8(r)&&r in t&&hT(+r)&&r>=0},ml=function(t,r){return mf(t,r=t2(r))?tz(2,t[r]):b3(t,r)},mh=function(t,r,n){return mf(t,r=t2(r))&&t6(n)&&rx(n,"value")&&!rx(n,"get")&&!rx(n,"set")&&!n.configurable&&(!rx(n,"writable")||n.writable)&&(!rx(n,"enumerable")||n.enumerable)?(t[r]=n.value,t):b4(t,r,n)};tL?(mr||(g=ml,y=mh,mu(mo,"buffer"),mu(mo,"byteOffset"),mu(mo,"byteLength"),mu(mo,"length")),tP({target:"Object",stat:!0,forced:!mr},{getOwnPropertyDescriptor:ml,defineProperty:mh}),bB=function(t,r,n){var o=t.match(/\d+/)[0]/8,i=t+(n?"Clamped":"")+"Array",a="get"+t,s="set"+t,u=globalThis[i],c=u,f=c&&c.prototype,l={},h=function(t,r){var n=b2(t);return n.view[a](r*o+n.byteOffset,!0)},g=function(t,r,i){var a=b2(t);a.view[s](r*o+a.byteOffset,n?bG(i):i,!0)},v=function(t,r){b4(t,r,{get:function(){return h(this,r)},set:function(t){return g(this,r,t)},enumerable:!0})};mr?bz&&(c=r(function(t,r,n,i){return sK(t,f),oK(t6(r)?mc(r)?void 0!==i?new u(r,bW(n,o),i):void 0!==n?new u(r,bW(n,o)):new u(r):mi(r)?sF(c,r):tC(bK,c,r):new u(sQ(r)),t,c)}),o$&&o$(c,mn),b1(bJ(u),function(t){t in c||rV(c,t,u[t])}),c.prototype=f):(c=r(function(t,r,n,i){sK(t,f);var a,s,u,l=0,h=0;if(t6(r)){if(mc(r)){a=r,h=bW(n,o);var g=r.byteLength;if(void 0===i){if(g%o||(s=g-h)<0)throw new b8(ms)}else if((s=eF(i)*o)+h>g)throw new b8(ms);u=s/o}else if(mi(r))return sF(c,r);else return tC(bK,c,r)}else a=new b7(s=(u=sQ(r))*o);for(b5(t,{buffer:a,byteOffset:h,byteLength:s,length:u,view:new mt(a)});l<u;)v(t,l++)}),o$&&o$(c,mn),f=c.prototype=e7(mo)),f.constructor!==c&&rV(f,"constructor",c),b6(f).TypedArrayConstructor=c,me&&rV(f,me,i);var p=c!==u;l[i]=c,tP({global:!0,constructor:!0,forced:p,sham:!mr},l),ma in c||rV(c,ma,o),ma in f||rV(f,ma,o),sk(i)}):bB=function(){},// `Float32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
bB("Float32",function(t){return function(r,n,o){return t(this,r,n,o)}}),// `Float64Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
bB("Float64",function(t){return function(r,n,o){return t(this,r,n,o)}}),// `Int8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
bB("Int8",function(t){return function(r,n,o){return t(this,r,n,o)}}),// `Int16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
bB("Int16",function(t){return function(r,n,o){return t(this,r,n,o)}}),// `Int32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
bB("Int32",function(t){return function(r,n,o){return t(this,r,n,o)}}),// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
bB("Uint8",function(t){return function(r,n,o){return t(this,r,n,o)}}),// `Uint8ClampedArray` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
bB("Uint8",function(t){return function(r,n,o){return t(this,r,n,o)}},!0),// `Uint16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
bB("Uint16",function(t){return function(r,n,o){return t(this,r,n,o)}}),// `Uint32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
bB("Uint32",function(t){return function(r,n,o){return t(this,r,n,o)}});var mg=uF.aTypedArray;// `%TypedArray%.prototype.at` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.at
(0,uF.exportTypedArrayMethod)("at",function(t){var r=mg(this),n=eC(r),o=ek(t),i=o>=0?o:n+o;return i<0||i>=n?void 0:r[i]});var mv=tq(iG),mp=uF.aTypedArray;// `%TypedArray%.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
(0,uF.exportTypedArrayMethod)("copyWithin",function(t,r/* , end */){return mv(mp(this),t,r,arguments.length>2?arguments[2]:void 0)});var md=nE.every,my=uF.aTypedArray;// `%TypedArray%.prototype.every` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
(0,uF.exportTypedArrayMethod)("every",function(t/* , thisArg */){return md(my(this),t,arguments.length>1?arguments[1]:void 0)});var mb=uF.aTypedArray,mm=uF.exportTypedArrayMethod,mw=tq("".slice);// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
mm("fill",function(t/* , start, end */){var r=arguments.length;mb(this);var n="Big"===mw(eZ(this),0,3)?bZ(t):+t;return tC(i0,this,n,r>1?arguments[1]:void 0,r>2?arguments[2]:void 0)},tN(function(){var t=0;return(// eslint-disable-next-line es/no-typed-arrays -- safe
new Int8Array(2).fill({valueOf:function(){return t++}}),1!==t)}));var mE=nE.filter,mT={},mS=uF.getTypedArrayConstructor;mT=function(t,r){return sF(mS(t),r)};var mA=uF.aTypedArray;// `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
(0,uF.exportTypedArrayMethod)("filter",function(t/* , thisArg */){var r=mE(mA(this),t,arguments.length>1?arguments[1]:void 0);return mT(this,r)});var mR=nE.find,mO=uF.aTypedArray;// `%TypedArray%.prototype.find` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
(0,uF.exportTypedArrayMethod)("find",function(t/* , thisArg */){return mR(mO(this),t,arguments.length>1?arguments[1]:void 0)});var mx=nE.findIndex,m_=uF.aTypedArray;// `%TypedArray%.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
(0,uF.exportTypedArrayMethod)("findIndex",function(t/* , thisArg */){return mx(m_(this),t,arguments.length>1?arguments[1]:void 0)});var mI=i9.findLast,mk=uF.aTypedArray;// `%TypedArray%.prototype.findLast` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlast
(0,uF.exportTypedArrayMethod)("findLast",function(t/* , thisArg */){return mI(mk(this),t,arguments.length>1?arguments[1]:void 0)});var mj=i9.findLastIndex,mM=uF.aTypedArray;// `%TypedArray%.prototype.findLastIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlastindex
(0,uF.exportTypedArrayMethod)("findLastIndex",function(t/* , thisArg */){return mj(mM(this),t,arguments.length>1?arguments[1]:void 0)});var mP=nE.forEach,mL=uF.aTypedArray;// `%TypedArray%.prototype.forEach` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
(0,uF.exportTypedArrayMethod)("forEach",function(t/* , thisArg */){mP(mL(this),t,arguments.length>1?arguments[1]:void 0)}),// `%TypedArray%.from` method
// https://tc39.es/ecma262/#sec-%typedarray%.from
(0,uF.exportTypedArrayStaticMethod)("from",bK,bz);var mN=e_.includes,mC=uF.aTypedArray;// `%TypedArray%.prototype.includes` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
(0,uF.exportTypedArrayMethod)("includes",function(t/* , fromIndex */){return mN(mC(this),t,arguments.length>1?arguments[1]:void 0)});var mF=e_.indexOf,mD=uF.aTypedArray;// `%TypedArray%.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
(0,uF.exportTypedArrayMethod)("indexOf",function(t/* , fromIndex */){return mF(mD(this),t,arguments.length>1?arguments[1]:void 0)}),tn("5tjRy");var mU=rm("iterator"),mB=globalThis.Uint8Array,mz=tq(aT.values),m$=tq(aT.keys),mH=tq(aT.entries),mq=uF.aTypedArray,mW=uF.exportTypedArrayMethod,mV=mB&&mB.prototype,mG=!tN(function(){mV[mU].call([1])}),mY=!!mV&&mV.values&&mV[mU]===mV.values&&"values"===mV.values.name,mJ=function(){return mz(mq(this))};// `%TypedArray%.prototype.entries` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
mW("entries",function(){return mH(mq(this))},mG),// `%TypedArray%.prototype.keys` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
mW("keys",function(){return m$(mq(this))},mG),// `%TypedArray%.prototype.values` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
mW("values",mJ,mG||!mY,{name:"values"}),// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
mW(mU,mJ,mG||!mY,{name:"values"});var mK=uF.aTypedArray,mX=uF.exportTypedArrayMethod,mQ=tq([].join);// `%TypedArray%.prototype.join` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
mX("join",function(t){return mQ(mK(this),t)});var mZ=uF.aTypedArray;// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
(0,uF.exportTypedArrayMethod)("lastIndexOf",function(t/* , fromIndex */){var r=arguments.length;return of(aG,mZ(this),r>1?[t,arguments[1]]:[t])});var m0=nE.map,m1=uF.aTypedArray,m2=uF.getTypedArrayConstructor;// `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
(0,uF.exportTypedArrayMethod)("map",function(t/* , thisArg */){return m0(m1(this),t,arguments.length>1?arguments[1]:void 0,function(t,r){return new(m2(t))(r)})});var m5=uF.aTypedArrayConstructor;// `%TypedArray%.of` method
// https://tc39.es/ecma262/#sec-%typedarray%.of
(0,uF.exportTypedArrayStaticMethod)("of",function(){for(var t=0,r=arguments.length,n=new(m5(this))(r);r>t;)n[t]=arguments[t++];return n},bz);var m6=a3.left,m4=uF.aTypedArray;// `%TypedArray%.prototype.reduce` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
(0,uF.exportTypedArrayMethod)("reduce",function(t/* , initialValue */){var r=arguments.length;return m6(m4(this),t,r,r>1?arguments[1]:void 0)});var m3=a3.right,m8=uF.aTypedArray;// `%TypedArray%.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
(0,uF.exportTypedArrayMethod)("reduceRight",function(t/* , initialValue */){var r=arguments.length;return m3(m8(this),t,r,r>1?arguments[1]:void 0)});var m7=uF.aTypedArray,m9=uF.exportTypedArrayMethod,wt=Math.floor;// `%TypedArray%.prototype.reverse` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
m9("reverse",function(){for(var t,r=m7(this).length,n=wt(r/2),o=0;o<n;)t=this[o],this[o++]=this[--r],this[r]=t;return this}),tn("5tjRy");var wr=globalThis.RangeError,we=globalThis.Int8Array,wn=we&&we.prototype,wo=wn&&wn.set,wi=uF.aTypedArray,wa=uF.exportTypedArrayMethod,ws=!tN(function(){// eslint-disable-next-line es/no-typed-arrays -- required for testing
var t=new Uint8ClampedArray(2);return tC(wo,t,{length:1,0:3},1),3!==t[1]}),wu=ws&&uF.NATIVE_ARRAY_BUFFER_VIEWS&&tN(function(){var t=new we(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]});// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
wa("set",function(t/* , offset */){wi(this);var r=bW(arguments.length>1?arguments[1]:void 0,1),n=r_(t);if(ws)return tC(wo,this,n,r);var o=this.length,i=eC(n),a=0;if(i+r>o)throw new wr("Wrong length");for(;a<i;)this[r+a]=n[a++]},!ws||wu);var wc=uF.aTypedArray,wf=uF.getTypedArrayConstructor;// `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
(0,uF.exportTypedArrayMethod)("slice",function(t,r){for(var n=nf(wc(this),t,r),o=wf(this),i=0,a=n.length,s=new o(a);a>i;)s[i]=n[i++];return s},tN(function(){// eslint-disable-next-line es/no-typed-arrays -- required for testing
new Int8Array(1).slice()}));var wl=nE.some,wh=uF.aTypedArray;// `%TypedArray%.prototype.some` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
(0,uF.exportTypedArrayMethod)("some",function(t/* , thisArg */){return wl(wh(this),t,arguments.length>1?arguments[1]:void 0)}),tn("5tjRy");var wg=uF.aTypedArray,wv=uF.exportTypedArrayMethod,wp=globalThis.Uint16Array,wd=wp&&nS(wp.prototype.sort),wy=!!wd&&!(tN(function(){wd(new wp(2),null)})&&tN(function(){wd(new wp(2),{})})),wb=!!wd&&!tN(function(){// feature detection can be too slow, so check engines versions
if(re)return re<74;if(sb)return sb<67;if(sw)return!0;if(sE)return sE<602;var t,r,n=new wp(516),o=Array(516);for(t=0;t<516;t++)r=t%4,n[t]=515-t,o[t]=t-2*r+3;for(wd(n,function(t,r){return(t/4|0)-(r/4|0)}),t=0;t<516;t++)if(n[t]!==o[t])return!0});// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
wv("sort",function(t){return(void 0!==t&&rg(t),wb)?wd(this,t):sp(wg(this),function(r,n){return void 0!==t?+t(r,n)||0:n!=n?-1:r!=r?1:0===r&&0===n?1/r>0&&1/n<0?1:-1:r>n})},!wb||wy);var wm=uF.aTypedArray,ww=uF.getTypedArrayConstructor;// `%TypedArray%.prototype.subarray` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
(0,uF.exportTypedArrayMethod)("subarray",function(t,r){var n=wm(this),o=n.length,i=eI(t,o);return new(ww(n))(n.buffer,n.byteOffset+i*n.BYTES_PER_ELEMENT,eF((void 0===r?o:eI(r,o))-i))}),tn("5tjRy");var wE=globalThis.Int8Array,wT=uF.aTypedArray,wS=uF.exportTypedArrayMethod,wA=[].toLocaleString,wR=!!wE&&tN(function(){wA.call(new wE(1))});// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
wS("toLocaleString",function(){return of(wA,wR?nf(wT(this)):wT(this),nf(arguments))},tN(function(){return[1,2].toLocaleString()!==new wE([1,2]).toLocaleString()})||!tN(function(){wE.prototype.toLocaleString.call([1,2])}));var wO=uF.aTypedArray,wx=uF.exportTypedArrayMethod,w_=uF.getTypedArrayConstructor;// `%TypedArray%.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.toreversed
wx("toReversed",function(){return sN(wO(this),w_(this))});var wI=uF.aTypedArray,wk=uF.getTypedArrayConstructor,wj=uF.exportTypedArrayMethod,wM=tq(uF.TypedArrayPrototype.sort);// `%TypedArray%.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tosorted
wj("toSorted",function(t){void 0!==t&&rg(t);var r=wI(this);return wM(sF(wk(r),r),t)});var wP=uF.exportTypedArrayMethod;tn("5tjRy");var wL=globalThis.Uint8Array,wN=wL&&wL.prototype||{},wC=[].toString,wF=tq([].join);tN(function(){wC.call({})})&&(wC=function(){return wF(this)});var wD=wN.toString!==wC;// `%TypedArray%.prototype.toString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
wP("toString",wC,wD);var wU=uF.aTypedArray,wB=uF.getTypedArrayConstructor;// `%TypedArray%.prototype.with` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.with
(0,uF.exportTypedArrayMethod)("with",{with:function(t,r){var n=wU(this),o=ek(t),i=bX(n)?bZ(r):+r;return sq(n,wB(n),o,i)}}.with,!function(){try{// eslint-disable-next-line no-throw-literal, es/no-typed-arrays, es/no-array-prototype-with -- required for testing
new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(t){// some early implementations, like WebKit, does not follow the final semantic
// https://github.com/tc39/proposal-change-array-by-copy/pull/86
return 8===t}}());var wz=String.fromCharCode,w$=tq("".charAt),wH=tq(/./.exec),wq=tq("".slice),wW=/^[\da-f]{2}$/i,wV=/^[\da-f]{4}$/i;// `unescape` method
// https://tc39.es/ecma262/#sec-unescape-string
tP({global:!0},{unescape:function(t){for(var r,n,o=eQ(t),i="",a=o.length,s=0;s<a;){if("%"===(r=w$(o,s++))){if("u"===w$(o,s)){if(wH(wV,n=wq(o,s+1,s+5))){i+=wz(parseInt(n,16)),s+=5;continue}}else if(wH(wW,n=wq(o,s,s+2))){i+=wz(parseInt(n,16)),s+=2;continue}}i+=r}return i}}),tn("5tjRy");var wG={},wY=f3.getWeakData,wJ=en.set,wK=en.getterFor,wX=nE.find,wQ=nE.findIndex,wZ=tq([].splice),w0=0,w1=function(t){return t.frozen||(t.frozen=new w2)},w2=function(){this.entries=[]},w5=function(t,r){return wX(t.entries,function(t){return t[0]===r})};w2.prototype={get:function(t){var r=w5(this,t);if(r)return r[1]},has:function(t){return!!w5(this,t)},set:function(t,r){var n=w5(this,t);n?n[1]=r:this.entries.push([t,r])},delete:function(t){var r=wQ(this.entries,function(r){return r[0]===t});return~r&&wZ(this.entries,r,1),!!~r}},wG={getConstructor:function(t,r,n,o){var i=t(function(t,i){sK(t,a),wJ(t,{type:r,id:w0++,frozen:null}),t0(i)||ig(i,t[o],{that:t,AS_ENTRIES:n})}),a=i.prototype,s=wK(r),u=function(t,r,n){var o=s(t),i=wY(rY(r),!0);return!0===i?w1(o).set(r,n):i[o.id]=n,t};return sJ(a,{// `{ WeakMap, WeakSet }.prototype.delete(key)` methods
// https://tc39.es/ecma262/#sec-weakmap.prototype.delete
// https://tc39.es/ecma262/#sec-weakset.prototype.delete
delete:function(t){var r=s(this);if(!t6(t))return!1;var n=wY(t);return!0===n?w1(r).delete(t):n&&rx(n,r.id)&&delete n[r.id]},// `{ WeakMap, WeakSet }.prototype.has(key)` methods
// https://tc39.es/ecma262/#sec-weakmap.prototype.has
// https://tc39.es/ecma262/#sec-weakset.prototype.has
has:function(t){var r=s(this);if(!t6(t))return!1;var n=wY(t);return!0===n?w1(r).has(t):n&&rx(n,r.id)}}),sJ(a,n?{// `WeakMap.prototype.get(key)` method
// https://tc39.es/ecma262/#sec-weakmap.prototype.get
get:function(t){var r=s(this);if(t6(t)){var n=wY(t);if(!0===n)return w1(r).get(t);if(n)return n[r.id]}},// `WeakMap.prototype.set(key, value)` method
// https://tc39.es/ecma262/#sec-weakmap.prototype.set
set:function(t,r){return u(this,t,r)}}:{// `WeakSet.prototype.add(value)` method
// https://tc39.es/ecma262/#sec-weakset.prototype.add
add:function(t){return u(this,t,!0)}}),i}};var w6=en.enforce,w4=Object,w3=Array.isArray,w8=w4.isExtensible,w7=w4.isFrozen,w9=w4.isSealed,Et=w4.freeze,Er=w4.seal,Ee=!globalThis.ActiveXObject&&"ActiveXObject"in globalThis,En=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},Eo=f4("WeakMap",En,wG),Ei=Eo.prototype,Ea=tq(Ei.set);// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if(eo){if(Ee){X=wG.getConstructor(En,"WeakMap",!0),f3.enable();var Es=tq(Ei.delete),Eu=tq(Ei.has),Ec=tq(Ei.get);sJ(Ei,{delete:function(t){if(t6(t)&&!w8(t)){var r=w6(this);return r.frozen||(r.frozen=new X),Es(this,t)||r.frozen.delete(t)}return Es(this,t)},has:function(t){if(t6(t)&&!w8(t)){var r=w6(this);return r.frozen||(r.frozen=new X),Eu(this,t)||r.frozen.has(t)}return Eu(this,t)},get:function(t){if(t6(t)&&!w8(t)){var r=w6(this);return r.frozen||(r.frozen=new X),Eu(this,t)?Ec(this,t):r.frozen.get(t)}return Ec(this,t)},set:function(t,r){if(t6(t)&&!w8(t)){var n=w6(this);n.frozen||(n.frozen=new X),Eu(this,t)?Ea(this,t,r):n.frozen.set(t,r)}else Ea(this,t,r);return this}});// Chakra Edge frozen keys fix
}else lr&&tN(function(){var t=Et([]);return Ea(new Eo,t,1),!w7(t)})&&sJ(Ei,{set:function(t,r){var n;return w3(t)&&(w7(t)?n=Et:w9(t)&&(n=Er)),Ea(this,t,r),n&&n(t),this}})}// `WeakSet` constructor
// https://tc39.es/ecma262/#sec-weakset-constructor
f4("WeakSet",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},wG),tn("5tjRy");var Ef={},El="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",Eh=El+"+/",Eg=El+"-_",Ev=function(t){for(// TODO: use `Object.create(null)` in `core-js@4`
var r={},n=0;n<64;n++)r[t.charAt(n)]=n;return r},Ep=(Ef={i2c:Eh,c2i:Ev(Eh),i2cUrl:Eg,c2iUrl:Ev(Eg)}).c2i,Ed=/[^\d+/a-z]/i,Ey=/[\t\n\f\r ]+/g,Eb=/[=]{1,2}$/,Em=t7("atob"),Ew=String.fromCharCode,EE=tq("".charAt),ET=tq("".replace),ES=tq(Ed.exec),EA=!!Em&&!tN(function(){return"hi"!==Em("aGk=")}),ER=EA&&tN(function(){return""!==Em(" ")}),EO=EA&&!tN(function(){Em("a")}),Ex=EA&&!tN(function(){Em()}),E_=EA&&1!==Em.length;// `atob` method
// https://html.spec.whatwg.org/multipage/webappapis.html#dom-atob
tP({global:!0,bind:!0,enumerable:!0,forced:!EA||ER||EO||Ex||E_},{atob:function(t){// `webpack` dev server bug on IE global methods - use call(fn, global, ...)
if(gK(arguments.length,1),EA&&!ER&&!EO)return tC(Em,globalThis,t);var r,n,o,i=ET(eQ(t),Ey,""),a="",s=0,u=0;if(i.length%4==0&&(i=ET(i,Eb,"")),(r=i.length)%4==1||ES(Ed,i))throw new(t7("DOMException"))("The string is not correctly encoded","InvalidCharacterError");for(;s<r;)n=EE(i,s++),o=u%4?64*o+Ep[n]:Ep[n],u++%4&&(a+=Ew(255&o>>(-2*u&6)));return a}}),tn("5tjRy");var EI=Ef.i2c,Ek=t7("btoa"),Ej=tq("".charAt),EM=tq("".charCodeAt),EP=!!Ek&&!tN(function(){return"aGk="!==Ek("hi")}),EL=EP&&!tN(function(){Ek()}),EN=EP&&tN(function(){return"bnVsbA=="!==Ek(null)}),EC=EP&&1!==Ek.length;// `btoa` method
// https://html.spec.whatwg.org/multipage/webappapis.html#dom-btoa
tP({global:!0,bind:!0,enumerable:!0,forced:!EP||EL||EN||EC},{btoa:function(t){// `webpack` dev server bug on IE global methods - use call(fn, global, ...)
if(gK(arguments.length,1),EP)return tC(Ek,globalThis,eQ(t));for(var r,n,o=eQ(t),i="",a=0,s=EI;Ej(o,a)||(s="=",a%1);){if((n=EM(o,a+=3/4))>255)throw new(t7("DOMException"))("The string contains characters outside of the Latin1 range","InvalidCharacterError");i+=Ej(s,63&(r=r<<8|n)>>8-a%1*8)}return i}}),tn("5tjRy");var EF={};// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
EF={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};var ED={},EU=rz("span").classList,EB=EU&&EU.constructor&&EU.constructor.prototype;ED=EB===Object.prototype?void 0:EB;var Ez=function(t){// some Chrome versions have non-configurable methods on DOMTokenList
if(t&&t.forEach!==ai)try{rV(t,"forEach",ai)}catch(r){t.forEach=ai}};for(var E$ in EF)EF[E$]&&Ez(globalThis[E$]&&globalThis[E$].prototype);Ez(ED),tn("5tjRy");var EH=rm("iterator"),Eq=aT.values,EW=function(t,r){if(t){// some Chrome versions have non-configurable methods on DOMTokenList
if(t[EH]!==Eq)try{rV(t,EH,Eq)}catch(r){t[EH]=Eq}if(nb(t,r,!0),EF[r]){for(var n in aT)// some Chrome versions have non-configurable methods on DOMTokenList
if(t[n]!==aT[n])try{rV(t,n,aT[n])}catch(r){t[n]=aT[n]}}}};for(var EV in EF)EW(globalThis[EV]&&globalThis[EV].prototype,EV);EW(ED,"DOMTokenList");var EG=y,EY={};EY={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}};var EJ="DOMException",EK="DATA_CLONE_ERR",EX=t7("Error"),EQ=t7(EJ)||function(){try{// eslint-disable-next-line es/no-weak-map, unicorn/require-post-message-target-origin -- safe
new(t7("MessageChannel")||cg("worker_threads").MessageChannel)().port1.postMessage(new WeakMap)}catch(t){if(t.name===EK&&25===t.code)return t.constructor}}(),EZ=EQ&&EQ.prototype,E0=EX.prototype,E1=en.set,E2=en.getterFor(EJ),E5="stack"in new EX(EJ),E6=function(t){return rx(EY,t)&&EY[t].m?EY[t].c:0},E4=function(){sK(this,E3);var t=arguments.length,r=oX(t<1?void 0:arguments[0]),n=oX(t<2?void 0:arguments[1],"Error"),o=E6(n);if(E1(this,{type:EJ,name:n,message:r,code:o}),tL||(this.name=n,this.message=r,this.code=o),E5){var i=new EX(r);i.name=EJ,EG(this,"stack",tz(1,o0(i.stack,1)))}},E3=E4.prototype=e7(E0),E8=function(t){return{enumerable:!0,configurable:!0,get:t}},E7=function(t){return E8(function(){return E2(this)[t]})};tL&&(// `DOMException.prototype.code` getter
ng(E3,"code",E7("code")),// `DOMException.prototype.message` getter
ng(E3,"message",E7("message")),// `DOMException.prototype.name` getter
ng(E3,"name",E7("name"))),EG(E3,"constructor",tz(1,E4));// FF36- DOMException is a function, but can't be constructed
var E9=tN(function(){return!(new EQ instanceof EX)}),Tt=E9||tN(function(){return E0.toString!==io||"2: 1"!==String(new EQ(1,2))}),Tr=E9||tN(function(){return 25!==new EQ(1,"DataCloneError").code}),Te=E9||25!==EQ[EK]||25!==EZ[EK],Tn=rT?Tt||Tr||Te:E9;// `DOMException` constructor
// https://webidl.spec.whatwg.org/#idl-DOMException
tP({global:!0,constructor:!0,forced:Tn},{DOMException:Tn?E4:EQ});var To=t7(EJ),Ti=To.prototype;// `DOMException` constants
for(var Ta in Tt&&(rT||EQ===To)&&r5(Ti,"toString",io),Tr&&tL&&EQ===To&&ng(Ti,"code",E8(function(){return E6(rY(this).name)})),EY)if(rx(EY,Ta)){var Ts=EY[Ta],Tu=Ts.s,Tc=tz(6,Ts.c);rx(To,Tu)||EG(To,Tu,Tc),rx(Ti,Tu)||EG(Ti,Tu,Tc)}tn("5tjRy");var Tf=y,Tl="DOMException",Th=t7("Error"),Tg=t7(Tl),Tv=function(){sK(this,Tp);var t=arguments.length,r=oX(t<1?void 0:arguments[0]),n=oX(t<2?void 0:arguments[1],"Error"),o=new Tg(r,n),i=new Th(r);return i.name=Tl,Tf(o,"stack",tz(1,o0(i.stack,1))),oK(o,this,Tv),o},Tp=Tv.prototype=Tg.prototype,Td="stack"in new Th(Tl),Ty="stack"in new Tg(1,2),Tb=Tg&&tL&&Object.getOwnPropertyDescriptor(globalThis,Tl),Tm=!!Tb&&!(Tb.writable&&Tb.configurable),Tw=Td&&!Tm&&!Ty;// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
tP({global:!0,constructor:!0,forced:rT||Tw},{DOMException:Tw?Tv:Tg});var TE=t7(Tl),TT=TE.prototype;if(TT.constructor!==TE){for(var TS in rT||Tf(TT,"constructor",tz(1,TE)),EY)if(rx(EY,TS)){var TA=EY[TS],TR=TA.s;rx(TE,TR)||Tf(TE,TR,tz(6,TA.c))}}var TO="DOMException";// `DOMException.prototype[@@toStringTag]` property
nb(t7(TO),TO),tn("5tjRy");var Tx=gJ.clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
tP({global:!0,bind:!0,enumerable:!0,forced:globalThis.clearImmediate!==Tx},{clearImmediate:Tx}),tn("5tjRy");var T_=gJ.set,TI={};tn("5tjRy");var Tk=globalThis.Function,Tj=/MSIE .\./.test(rn)||"BUN"===se&&((l=globalThis.Bun.version.split(".")).length<3||"0"===l[0]&&(l[1]<3||"3"===l[1]&&"0"===l[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
TI=function(t,r){var n=r?2:1;return Tj?function(o,i/* , ...arguments */){var a=gK(arguments.length,1)>n,s=t4(o)?o:Tk(o),u=a?nf(arguments,n):[],c=a?function(){of(s,this,u)}:s;return r?t(c,i):t(c)}:t};// https://github.com/oven-sh/bun/issues/1633
var TM=globalThis.setImmediate?TI(T_,!1):T_;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
tP({global:!0,bind:!0,enumerable:!0,forced:globalThis.setImmediate!==TM},{setImmediate:TM}),tn("5tjRy");// Bun ~ 1.0.30 bug
// https://github.com/oven-sh/bun/issues/9249
var TP=tN(function(){// getOwnPropertyDescriptor for prevent experimental warning in Node 11
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
return tL&&1!==Object.getOwnPropertyDescriptor(globalThis,"queueMicrotask").value.length});// `queueMicrotask` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
tP({global:!0,enumerable:!0,dontCallGetSet:!0,forced:TP},{queueMicrotask:function(t){gK(arguments.length,1),vo(rg(t))}}),tn("5tjRy");var TL=TypeError,TN=Object.defineProperty,TC=globalThis.self!==globalThis;// `self` getter
// https://html.spec.whatwg.org/multipage/window-object.html#dom-self
try{if(tL){// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var TF=Object.getOwnPropertyDescriptor(globalThis,"self");// some engines have `self`, but with incorrect descriptor
// https://github.com/denoland/deno/issues/15765
!TC&&TF&&TF.get&&TF.enumerable||ng(globalThis,"self",{get:function(){return globalThis},set:function(t){if(this!==globalThis)throw new TL("Illegal invocation");TN(globalThis,"self",{value:t,writable:!0,configurable:!0,enumerable:!0})},configurable:!0,enumerable:!0})}else tP({global:!0,simple:!0,forced:TC},{self:globalThis})}catch(t){}tn("5tjRy");var TD=globalThis.Object,TU=globalThis.Array,TB=globalThis.Date,Tz=globalThis.Error,T$=globalThis.TypeError,TH=globalThis.PerformanceMark,Tq=t7("DOMException"),TW=ll.Map,TV=ll.has,TG=ll.get,TY=ll.set,TJ=dT.Set,TK=dT.add,TX=dT.has,TQ=t7("Object","keys"),TZ=tq([].push),T0=tq((!0).valueOf),T1=tq(1..valueOf),T2=tq("".valueOf),T5=tq(TB.prototype.getTime),T6=rj("structuredClone"),T4="DataCloneError",T3="Transferring",T8=function(t){return!tN(function(){var r=new globalThis.Set([7]),n=t(r),o=t(TD(7));return n===r||!n.has(7)||!t6(o)||7!=+o})&&t},T7=function(t,r){return!tN(function(){var n=new r,o=t({a:n,b:n});return!(o&&o.a===o.b&&o.a instanceof r&&o.a.stack===n.stack)})},T9=globalThis.structuredClone,St=rT||!T7(T9,Tz)||!T7(T9,Tq)||!!tN(function(){var t=T9(new globalThis.AggregateError([1],T6,{cause:3}));return"AggregateError"!==t.name||1!==t.errors[0]||t.message!==T6||3!==t.cause}),Sr=!T9&&T8(function(t){return new TH(T6,{detail:t}).detail}),Se=T8(T9)||Sr,Sn=function(t){throw new Tq("Uncloneable type: "+t,T4)},So=function(t,r){throw new Tq((r||"Cloning")+" of "+t+" cannot be properly polyfilled in this engine",T4)},Si=function(t,r){return Se||So(r),Se(t)},Sa=function(){var t;try{t=new globalThis.DataTransfer}catch(r){try{t=new globalThis.ClipboardEvent("").clipboardData}catch(t){}}return t&&t.items&&t.files?t:null},Ss=function(t,r,n){if(TV(r,t))return TG(r,t);if("SharedArrayBuffer"===(n||eZ(t)))o=Se?Se(t):t;else{var o,i,a,s,u,c,f=globalThis.DataView;// `ArrayBuffer#slice` is not available in IE10
// `ArrayBuffer#slice` and `DataView` are not available in old FF
f||t4(t.slice)||So("ArrayBuffer");// detached buffers throws in `DataView` and `.slice`
try{if(t4(t.slice)&&!t.resizable)o=t.slice(0);else for(c=0,i=t.byteLength,a=("maxByteLength"in t)?{maxByteLength:t.maxByteLength}:void 0,// eslint-disable-next-line es/no-resizable-and-growable-arraybuffers -- safe
o=new ArrayBuffer(i,a),s=new f(t),u=new f(o);c<i;c++)u.setUint8(c,s.getUint8(c))}catch(t){throw new Tq("ArrayBuffer is detached",T4)}}return TY(r,t,o),o},Su=function(t,r,n,o,i){var a=globalThis[r];return t6(a)||So(r),new a(Ss(t.buffer,i),n,o)},Sc=function(t,r){if(t8(t)&&Sn("Symbol"),!t6(t))return t;// effectively preserves circular references
if(r){if(TV(r,t))return TG(r,t)}else r=new TW;var n,o,i,a,s,u,c,f,l=eZ(t);switch(l){case"Array":i=TU(eC(t));break;case"Object":i={};break;case"Map":i=new TW;break;case"Set":i=new TJ;break;case"RegExp":// in this block because of a Safari 14.1 bug
// old FF does not clone regexes passed to the constructor, so get the source and flags directly
i=new RegExp(t.source,pE(t));break;case"Error":switch(o=t.name){case"AggregateError":i=new(t7(o))([]);break;case"EvalError":case"RangeError":case"ReferenceError":case"SuppressedError":case"SyntaxError":case"TypeError":case"URIError":i=new(t7(o));break;case"CompileError":case"LinkError":case"RuntimeError":i=new(t7("WebAssembly",o));break;default:i=new Tz}break;case"DOMException":i=new Tq(t.message,t.name);break;case"ArrayBuffer":case"SharedArrayBuffer":i=Ss(t,r,l);break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float16Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":u="DataView"===l?t.byteLength:t.length,i=Su(t,l,t.byteOffset,u,r);break;case"DOMQuad":try{i=new DOMQuad(Sc(t.p1,r),Sc(t.p2,r),Sc(t.p3,r),Sc(t.p4,r))}catch(r){i=Si(t,l)}break;case"File":if(Se)try{i=Se(t),eZ(i)!==l&&(i=void 0)}catch(t){}if(!i)try{i=new File([t],t.name,t)}catch(t){}i||So(l);break;case"FileList":if(a=Sa()){for(s=0,u=eC(t);s<u;s++)a.items.add(Sc(t[s],r));i=a.files}else i=Si(t,l);break;case"ImageData":// Safari 9 ImageData is a constructor, but typeof ImageData is 'object'
try{i=new ImageData(Sc(t.data,r),t.width,t.height,{colorSpace:t.colorSpace})}catch(r){i=Si(t,l)}break;default:if(Se)i=Se(t);else switch(l){case"BigInt":// can be a 3rd party polyfill
i=TD(t.valueOf());break;case"Boolean":i=TD(T0(t));break;case"Number":i=TD(T1(t));break;case"String":i=TD(T2(t));break;case"Date":i=new TB(T5(t));break;case"Blob":try{i=t.slice(0,t.size,t.type)}catch(t){So(l)}break;case"DOMPoint":case"DOMPointReadOnly":n=globalThis[l];try{i=n.fromPoint?n.fromPoint(t):new n(t.x,t.y,t.z,t.w)}catch(t){So(l)}break;case"DOMRect":case"DOMRectReadOnly":n=globalThis[l];try{i=n.fromRect?n.fromRect(t):new n(t.x,t.y,t.width,t.height)}catch(t){So(l)}break;case"DOMMatrix":case"DOMMatrixReadOnly":n=globalThis[l];try{i=n.fromMatrix?n.fromMatrix(t):new n(t)}catch(t){So(l)}break;case"AudioData":case"VideoFrame":t4(t.clone)||So(l);try{i=t.clone()}catch(t){Sn(l)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":So(l);// break omitted
default:Sn(l)}}switch(TY(r,t,i),l){case"Array":case"Object":for(s=0,c=TQ(t),u=eC(c);s<u;s++)f=c[s],iB(i,f,Sc(t[f],r));break;case"Map":t.forEach(function(t,n){TY(i,Sc(n,r),Sc(t,r))});break;case"Set":t.forEach(function(t){TK(i,Sc(t,r))});break;case"Error":rV(i,"message",Sc(t.message,r)),rx(t,"cause")&&rV(i,"cause",Sc(t.cause,r)),"AggregateError"===o?i.errors=Sc(t.errors,r):"SuppressedError"===o&&(i.error=Sc(t.error,r),i.suppressed=Sc(t.suppressed,r));case"DOMException":o3&&rV(i,"stack",Sc(t.stack,r))}return i},Sf=function(t,r){if(!t6(t))throw new T$("Transfer option cannot be converted to a sequence");var n,o,i,a,s,u=[];ig(t,function(t){TZ(u,rY(t))});for(var c=0,f=eC(u),l=new TJ;c<f;){if(n=u[c++],"ArrayBuffer"===(o=eZ(n))?TX(l,n):TV(r,n))throw new Tq("Duplicate transferable",T4);if("ArrayBuffer"===o){TK(l,n);continue}if(cv)a=T9(n,{transfer:[n]});else switch(o){case"ImageBitmap":i=globalThis.OffscreenCanvas,n_(i)||So(o,T3);try{(s=new i(n.width,n.height)).getContext("bitmaprenderer").transferFromImageBitmap(n),a=s.transferToImageBitmap()}catch(t){}break;case"AudioData":case"VideoFrame":t4(n.clone)&&t4(n.close)||So(o,T3);try{a=n.clone(),n.close()}catch(t){}break;case"MediaSourceHandle":case"MessagePort":case"MIDIAccess":case"OffscreenCanvas":case"ReadableStream":case"RTCDataChannel":case"TransformStream":case"WebTransportReceiveStream":case"WebTransportSendStream":case"WritableStream":So(o,T3)}if(void 0===a)throw new Tq("This object cannot be transferred: "+o,T4);TY(r,n,a)}return l},Sl=function(t){dO(t,function(t){cv?Se(t,{transfer:[t]}):t4(t.transfer)?t.transfer():ch?ch(t):So("ArrayBuffer",T3)})};// `structuredClone` method
// https://html.spec.whatwg.org/multipage/structured-data.html#dom-structuredclone
tP({global:!0,enumerable:!0,sham:!cv,forced:St},{structuredClone:function(t/* , { transfer } */){var r,n,o=gK(arguments.length,1)>1&&!t0(arguments[1])?rY(arguments[1]):void 0,i=o?o.transfer:void 0;void 0!==i&&(n=Sf(i,r=new TW));var a=Sc(t,r);return n&&Sl(n),a}}),tn("5tjRy");var Sh=TI(globalThis.setInterval,!0);// Bun / IE9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
tP({global:!0,bind:!0,forced:globalThis.setInterval!==Sh},{setInterval:Sh}),tn("5tjRy");var Sg=TI(globalThis.setTimeout,!0);// Bun / IE9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
tP({global:!0,bind:!0,forced:globalThis.setTimeout!==Sg},{setTimeout:Sg});var Sv={},Sp=rm("iterator");Sv=!tN(function(){// eslint-disable-next-line unicorn/relative-url-style -- required for testing
var t=new URL("b?a=1&b=2&c=3","https://a"),r=t.searchParams,n=new URLSearchParams("a=1&a=2&b=3"),o="";return t.pathname="c%20d",r.forEach(function(t,n){r.delete("b"),o+=n+t}),n.delete("a",2),// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
n.delete("b",void 0),rT&&(!t.toJSON||!n.has("a",1)||n.has("a",2)||!n.has("a",void 0)||n.has("b"))||!r.size&&(rT||!tL)||!r.sort||"https://a/c%20d?a=1&c=3"!==t.href||"3"!==r.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!r[Sp]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("https://тест").host||"#%D0%B1"!==new URL("https://a#б").hash||"a1c3"!==o||"x"!==new URL("https://x",void 0).host}),tn("5tjRy");var Sd=yt.codeAt,Sy={},Sb=/[^\0-\u007E]/,Sm=/[.\u3002\uFF0E\uFF61]/g,Sw="Overflow: input needs wider integers to process",SE=RangeError,ST=tq(Sm.exec),SS=Math.floor,SA=String.fromCharCode,SR=tq("".charCodeAt),SO=tq([].join),Sx=tq([].push),S_=tq("".replace),SI=tq("".split),Sk=tq("".toLowerCase),Sj=function(t){for(var r=[],n=0,o=t.length;n<o;){var i=SR(t,n++);if(i>=55296&&i<=56319&&n<o){// It's a high surrogate, and there is a next character.
var a=SR(t,n++);(64512&a)==56320?Sx(r,((1023&i)<<10)+(1023&a)+65536):(// It's an unmatched surrogate; only append this code unit, in case the
// next code unit is the high surrogate of a surrogate pair.
Sx(r,i),n--)}else Sx(r,i)}return r},SM=function(t){//  0..25 map to ASCII a..z or A..Z
// 26..35 map to ASCII 0..9
return t+22+75*(t<26)},SP=function(t,r,n){var o=0;for(t=n?SS(t/700):t>>1,t+=SS(t/r);t>455;)t=SS(t/35),o+=36;return SS(o+36*t/(t+38))},SL=function(t){var r,n,o=[],i=// Convert the input in UCS-2 to an array of Unicode code points.
(t=Sj(t)).length,a=128,s=0,u=72;// Handle the basic code points.
for(r=0;r<t.length;r++)(n=t[r])<128&&Sx(o,SA(n));var c=o.length,f=c;// number of basic code points.
// Main encoding loop:
for(c&&Sx(o,"-");f<i;){// All non-basic code points < n have been handled already. Find the next larger one:
var l=2147483647;for(r=0;r<t.length;r++)(n=t[r])>=a&&n<l&&(l=n);// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
var h=f+1;if(l-a>SS((2147483647-s)/h))throw new SE(Sw);for(s+=(l-a)*h,a=l,r=0;r<t.length;r++){if((n=t[r])<a&&++s>2147483647)throw new SE(Sw);if(n===a){for(// Represent delta as a generalized variable-length integer.
var g=s,v=36;;){var p=v<=u?1:v>=u+26?26:v-u;if(g<p)break;var d=g-p,y=36-p;Sx(o,SA(SM(p+d%y))),g=SS(d/y),v+=36}Sx(o,SA(SM(g))),u=SP(s,h,f===c),s=0,f++}}s++,a++}return SO(o,"")};Sy=function(t){var r,n,o=[],i=SI(S_(Sk(t),Sm,"."),".");for(r=0;r<i.length;r++)Sx(o,ST(Sb,n=i[r])?"xn--"+SL(n):n);return SO(o,".")};var SN={};tn("5tjRy");var SC=rm("iterator"),SF="URLSearchParams",SD=SF+"Iterator",SU=en.set,SB=en.getterFor(SF),Sz=en.getterFor(SD),S$=vi("fetch"),SH=vi("Request"),Sq=vi("Headers"),SW=SH&&SH.prototype,SV=Sq&&Sq.prototype,SG=globalThis.TypeError,SY=globalThis.encodeURIComponent,SJ=String.fromCharCode,SK=t7("String","fromCodePoint"),SX=parseInt,SQ=tq("".charAt),SZ=tq([].join),S0=tq([].push),S1=tq("".replace),S2=tq([].shift),S5=tq([].splice),S6=tq("".split),S4=tq("".slice),S3=tq(/./.exec),S8=/\+/g,S7=/^[0-9a-f]+$/i,S9=function(t,r){var n=S4(t,r,r+2);return S3(S7,n)?SX(n,16):NaN},At=function(t){for(var r=0,n=128;n>0&&(t&n)!=0;n>>=1)r++;return r},Ar=function(t){var r=null;switch(t.length){case 1:r=t[0];break;case 2:r=(31&t[0])<<6|63&t[1];break;case 3:r=(15&t[0])<<12|(63&t[1])<<6|63&t[2];break;case 4:r=(7&t[0])<<18|(63&t[1])<<12|(63&t[2])<<6|63&t[3]}return r>1114111?null:r},Ae=function(t){for(var r=(t=S1(t,S8," ")).length,n="",o=0;o<r;){var i=SQ(t,o);if("%"===i){if("%"===SQ(t,o+1)||o+3>r){n+="%",o++;continue}var a=S9(t,o+1);// eslint-disable-next-line no-self-compare -- NaN check
if(a!=a){n+=i,o++;continue}o+=2;var s=At(a);if(0===s)i=SJ(a);else{if(1===s||s>4){n+="�",o++;continue}for(var u=[a],c=1;c<s&&!(++o+3>r)&&"%"===SQ(t,o);){var f=S9(t,o+1);// eslint-disable-next-line no-self-compare -- NaN check
if(f!=f){o+=3;break}if(f>191||f<128)break;S0(u,f),o+=2,c++}if(u.length!==s){n+="�";continue}var l=Ar(u);null===l?n+="�":i=SK(l)}}n+=i,o++}return n},An=/[!'()~]|%20/g,Ao={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},Ai=function(t){return Ao[t]},Aa=function(t){return S1(SY(t),An,Ai)},As=aR(function(t,r){SU(this,{type:SD,target:SB(t).entries,index:0,kind:r})},SF,function(){var t=Sz(this),r=t.target,n=t.index++;if(!r||n>=r.length)return t.target=null,aB(void 0,!0);var o=r[n];switch(t.kind){case"keys":return aB(o.key,!1);case"values":return aB(o.value,!1)}return aB([o.key,o.value],!1)},!0),Au=function(t){this.entries=[],this.url=null,void 0!==t&&(t6(t)?this.parseObject(t):this.parseQuery("string"==typeof t?"?"===SQ(t,0)?S4(t,1):t:eQ(t)))};Au.prototype={type:SF,bindURL:function(t){this.url=t,this.update()},parseObject:function(t){var r,n,o,i,a,s,u,c=this.entries,f=im(t);if(f)for(n=(r=ib(t,f)).next;!(o=tC(n,r)).done;){if(a=(i=ib(rY(o.value))).next,(s=tC(a,i)).done||(u=tC(a,i)).done||!tC(a,i).done)throw new SG("Expected sequence with length 2");S0(c,{key:eQ(s.value),value:eQ(u.value)})}else for(var l in t)rx(t,l)&&S0(c,{key:l,value:eQ(t[l])})},parseQuery:function(t){if(t)for(var r,n,o=this.entries,i=S6(t,"&"),a=0;a<i.length;)(r=i[a++]).length&&S0(o,{key:Ae(S2(n=S6(r,"="))),value:Ae(SZ(n,"="))})},serialize:function(){for(var t,r=this.entries,n=[],o=0;o<r.length;)S0(n,Aa((t=r[o++]).key)+"="+Aa(t.value));return SZ(n,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var Ac=function(){sK(this,Af);var t=arguments.length>0?arguments[0]:void 0,r=SU(this,new Au(t));tL||(this.size=r.entries.length)},Af=Ac.prototype;// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if(sJ(Af,{// `URLSearchParams.prototype.append` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-append
append:function(t,r){var n=SB(this);gK(arguments.length,2),S0(n.entries,{key:eQ(t),value:eQ(r)}),!tL&&this.length++,n.updateURL()},// `URLSearchParams.prototype.delete` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-delete
delete:function(t/* , value */){for(var r=SB(this),n=gK(arguments.length,1),o=r.entries,i=eQ(t),a=n<2?void 0:arguments[1],s=void 0===a?a:eQ(a),u=0;u<o.length;){var c=o[u];if(c.key===i&&(void 0===s||c.value===s)){if(S5(o,u,1),void 0!==s)break}else u++}tL||(this.size=o.length),r.updateURL()},// `URLSearchParams.prototype.get` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-get
get:function(t){var r=SB(this).entries;gK(arguments.length,1);for(var n=eQ(t),o=0;o<r.length;o++)if(r[o].key===n)return r[o].value;return null},// `URLSearchParams.prototype.getAll` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-getall
getAll:function(t){var r=SB(this).entries;gK(arguments.length,1);for(var n=eQ(t),o=[],i=0;i<r.length;i++)r[i].key===n&&S0(o,r[i].value);return o},// `URLSearchParams.prototype.has` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-has
has:function(t/* , value */){for(var r=SB(this).entries,n=gK(arguments.length,1),o=eQ(t),i=n<2?void 0:arguments[1],a=void 0===i?i:eQ(i),s=0;s<r.length;){var u=r[s++];if(u.key===o&&(void 0===a||u.value===a))return!0}return!1},// `URLSearchParams.prototype.set` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-set
set:function(t,r){var n,o=SB(this);gK(arguments.length,1);for(var i=o.entries,a=!1,s=eQ(t),u=eQ(r),c=0;c<i.length;c++)(n=i[c]).key===s&&(a?S5(i,c--,1):(a=!0,n.value=u));a||S0(i,{key:s,value:u}),tL||(this.size=i.length),o.updateURL()},// `URLSearchParams.prototype.sort` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-sort
sort:function(){var t=SB(this);sp(t.entries,function(t,r){return t.key>r.key?1:-1}),t.updateURL()},// `URLSearchParams.prototype.forEach` method
forEach:function(t/* , thisArg */){for(var r,n=SB(this).entries,o=nT(t,arguments.length>1?arguments[1]:void 0),i=0;i<n.length;)o((r=n[i++]).value,r.key,this)},// `URLSearchParams.prototype.keys` method
keys:function(){return new As(this,"keys")},// `URLSearchParams.prototype.values` method
values:function(){return new As(this,"values")},// `URLSearchParams.prototype.entries` method
entries:function(){return new As(this,"entries")}},{enumerable:!0}),// `URLSearchParams.prototype[@@iterator]` method
r5(Af,SC,Af.entries,{name:"entries"}),// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
r5(Af,"toString",function(){return SB(this).serialize()},{enumerable:!0}),tL&&ng(Af,"size",{get:function(){return SB(this).entries.length},configurable:!0,enumerable:!0}),nb(Ac,SF),tP({global:!0,constructor:!0,forced:!Sv},{URLSearchParams:Ac}),!Sv&&t4(Sq)){var Al=tq(SV.has),Ah=tq(SV.set),Ag=function(t){if(t6(t)){var r,n=t.body;if(eZ(n)===SF)return Al(r=t.headers?new Sq(t.headers):new Sq,"content-type")||Ah(r,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),e7(t,{body:tz(0,eQ(n)),headers:tz(0,r)})}return t};if(t4(S$)&&tP({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(t/* , init */){return S$(t,arguments.length>1?Ag(arguments[1]):{})}}),t4(SH)){var Av=function(t/* , init */){return sK(this,SW),new SH(t,arguments.length>1?Ag(arguments[1]):{})};SW.constructor=Av,Av.prototype=SW,tP({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:Av})}}SN={URLSearchParams:Ac,getState:SB};var Ap=en.set,Ad=en.getterFor("URL"),Ay=SN.URLSearchParams,Ab=SN.getState,Am=globalThis.URL,Aw=globalThis.TypeError,AE=globalThis.parseInt,AT=Math.floor,AS=Math.pow,AA=tq("".charAt),AR=tq(/./.exec),AO=tq([].join),Ax=tq(1..toString),A_=tq([].pop),AI=tq([].push),Ak=tq("".replace),Aj=tq([].shift),AM=tq("".split),AP=tq("".slice),AL=tq("".toLowerCase),AN=tq([].unshift),AC="Invalid scheme",AF="Invalid host",AD="Invalid port",AU=/[a-z]/i,AB=/[\d+-.a-z]/i,Az=/\d/,A$=/^0x/i,AH=/^[0-7]+$/,Aq=/^\d+$/,AW=/^[\da-f]+$/i,AV=/[\0\t\n\r #%/:<>?@[\\\]^|]/,AG=/[\0\t\n\r #/:<>?@[\\\]^|]/,AY=/^[\u0000-\u0020]+/,AJ=/(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,AK=/[\t\n\r]/g,AX=function(t){var r,n,o,i,a,s,u,c=AM(t,".");if(c.length&&""===c[c.length-1]&&c.length--,(r=c.length)>4)return t;for(o=0,n=[];o<r;o++){if(""===(i=c[o]))return t;if(a=10,i.length>1&&"0"===AA(i,0)&&(a=AR(A$,i)?16:8,i=AP(i,8===a?1:2)),""===i)s=0;else{if(!AR(10===a?Aq:8===a?AH:AW,i))return t;s=AE(i,a)}AI(n,s)}for(o=0;o<r;o++)if(s=n[o],o===r-1){if(s>=AS(256,5-r))return null}else if(s>255)return null;for(o=0,u=A_(n);o<n.length;o++)u+=n[o]*AS(256,3-o);return u},AQ=function(t){var r,n,o,i,a,s,u,c=[0,0,0,0,0,0,0,0],f=0,l=null,h=0,g=function(){return AA(t,h)};if(":"===g()){if(":"!==AA(t,1))return;h+=2,l=++f}for(;g();){if(8===f)return;if(":"===g()){if(null!==l)return;h++,l=++f;continue}for(r=n=0;n<4&&AR(AW,g());)r=16*r+AE(g(),16),h++,n++;if("."===g()){if(0===n||(h-=n,f>6))return;for(o=0;g();){if(i=null,o>0){if("."!==g()||!(o<4))return;h++}if(!AR(Az,g()))return;for(;AR(Az,g());){if(a=AE(g(),10),null===i)i=a;else{if(0===i)return;i=10*i+a}if(i>255)return;h++}c[f]=256*c[f]+i,(2==++o||4===o)&&f++}if(4!==o)return;break}if(":"===g()){if(h++,!g())return}else if(g())return;c[f++]=r}if(null!==l)for(s=f-l,f=7;0!==f&&s>0;)u=c[f],c[f--]=c[l+s-1],c[l+--s]=u;else if(8!==f)return;return c},AZ=function(t){for(var r=null,n=1,o=null,i=0,a=0;a<8;a++)0!==t[a]?(i>n&&(r=o,n=i),o=null,i=0):(null===o&&(o=a),++i);return i>n?o:r},A0=function(t){var r,n,o,i;// ipv4
if("number"==typeof t){for(n=0,r=[];n<4;n++)AN(r,t%256),t=AT(t/256);return AO(r,".")}// ipv6
if("object"==typeof t){for(n=0,r="",o=AZ(t);n<8;n++)(!i||0!==t[n])&&(i&&(i=!1),o===n?(r+=n?":":"::",i=!0):(r+=Ax(t[n],16),n<7&&(r+=":")));return"["+r+"]"}return t},A1={},A2=gt({},A1,{" ":1,'"':1,"<":1,">":1,"`":1}),A5=gt({},A2,{"#":1,"?":1,"{":1,"}":1}),A6=gt({},A5,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),A4=function(t,r){var n=Sd(t,0);return n>32&&n<127&&!rx(r,t)?t:encodeURIComponent(t)},A3={ftp:21,file:null,http:80,https:443,ws:80,wss:443},A8=function(t,r){var n;return 2===t.length&&AR(AU,AA(t,0))&&(":"===(n=AA(t,1))||!r&&"|"===n)},A7=function(t){var r;return t.length>1&&A8(AP(t,0,2))&&(2===t.length||"/"===(r=AA(t,2))||"\\"===r||"?"===r||"#"===r)},A9={},Rt={},Rr={},Re={},Rn={},Ro={},Ri={},Ra={},Rs={},Ru={},Rc={},Rf={},Rl={},Rh={},Rg={},Rv={},Rp={},Rd={},Ry={},Rb={},Rm={},Rw=function(t,r,n){var o,i,a,s=eQ(t);if(r){if(i=this.parse(s))throw new Aw(i);this.searchParams=null}else{if(void 0!==n&&(o=new Rw(n,!0)),i=this.parse(s,null,o))throw new Aw(i);(a=Ab(new Ay)).bindURL(this),this.searchParams=a}};Rw.prototype={type:"URL",// https://url.spec.whatwg.org/#url-parsing
// eslint-disable-next-line max-statements -- TODO
parse:function(t,r,n){var o=r||A9,i=0,a="",s=!1,u=!1,c=!1;for(t=eQ(t),r||(this.scheme="",this.username="",this.password="",this.host=null,this.port=null,this.path=[],this.query=null,this.fragment=null,this.cannotBeABaseURL=!1,t=Ak(t,AY,""),t=Ak(t,AJ,"$1")),t=Ak(t,AK,""),f=as(t);i<=f.length;){switch(l=f[i],o){case A9:if(l&&AR(AU,l))a+=AL(l),o=Rt;else{if(r)return AC;o=Rr;continue}break;case Rt:if(l&&(AR(AB,l)||"+"===l||"-"===l||"."===l))a+=AL(l);else if(":"===l){if(r&&(this.isSpecial()!==rx(A3,a)||"file"===a&&(this.includesCredentials()||null!==this.port)||"file"===this.scheme&&!this.host))return;if(this.scheme=a,r){this.isSpecial()&&A3[this.scheme]===this.port&&(this.port=null);return}a="","file"===this.scheme?o=Rh:this.isSpecial()&&n&&n.scheme===this.scheme?o=Re:this.isSpecial()?o=Ra:"/"===f[i+1]?(o=Rn,i++):(this.cannotBeABaseURL=!0,AI(this.path,""),o=Ry)}else{if(r)return AC;a="",o=Rr,i=0;continue}break;case Rr:if(!n||n.cannotBeABaseURL&&"#"!==l)return AC;if(n.cannotBeABaseURL&&"#"===l){this.scheme=n.scheme,this.path=nf(n.path),this.query=n.query,this.fragment="",this.cannotBeABaseURL=!0,o=Rm;break}o="file"===n.scheme?Rh:Ro;continue;case Re:if("/"===l&&"/"===f[i+1])o=Rs,i++;else{o=Ro;continue}break;case Rn:if("/"===l){o=Ru;break}o=Rd;continue;case Ro:if(this.scheme=n.scheme,l===Q)this.username=n.username,this.password=n.password,this.host=n.host,this.port=n.port,this.path=nf(n.path),this.query=n.query;else if("/"===l||"\\"===l&&this.isSpecial())o=Ri;else if("?"===l)this.username=n.username,this.password=n.password,this.host=n.host,this.port=n.port,this.path=nf(n.path),this.query="",o=Rb;else if("#"===l)this.username=n.username,this.password=n.password,this.host=n.host,this.port=n.port,this.path=nf(n.path),this.query=n.query,this.fragment="",o=Rm;else{this.username=n.username,this.password=n.password,this.host=n.host,this.port=n.port,this.path=nf(n.path),this.path.length--,o=Rd;continue}break;case Ri:if(this.isSpecial()&&("/"===l||"\\"===l))o=Rs;else if("/"===l)o=Ru;else{this.username=n.username,this.password=n.password,this.host=n.host,this.port=n.port,o=Rd;continue}break;case Ra:if(o=Rs,"/"!==l||"/"!==AA(a,i+1))continue;i++;break;case Rs:if("/"!==l&&"\\"!==l){o=Ru;continue}break;case Ru:if("@"===l){s&&(a="%40"+a),s=!0,h=as(a);for(var f,l,h,g,v,p,d=0;d<h.length;d++){var y=h[d];if(":"===y&&!c){c=!0;continue}var b=A4(y,A6);c?this.password+=b:this.username+=b}a=""}else if(l===Q||"/"===l||"?"===l||"#"===l||"\\"===l&&this.isSpecial()){if(s&&""===a)return"Invalid authority";i-=as(a).length+1,a="",o=Rc}else a+=l;break;case Rc:case Rf:if(r&&"file"===this.scheme){o=Rv;continue}if(":"!==l||u){if(l===Q||"/"===l||"?"===l||"#"===l||"\\"===l&&this.isSpecial()){if(this.isSpecial()&&""===a)return AF;if(r&&""===a&&(this.includesCredentials()||null!==this.port))return;if(g=this.parseHost(a))return g;if(a="",o=Rp,r)return;continue}"["===l?u=!0:"]"===l&&(u=!1),a+=l}else{if(""===a)return AF;if(g=this.parseHost(a))return g;if(a="",o=Rl,r===Rf)return}break;case Rl:if(AR(Az,l))a+=l;else{if(!(l===Q||"/"===l||"?"===l||"#"===l||"\\"===l&&this.isSpecial())&&!r)return AD;if(""!==a){var m=AE(a,10);if(m>65535)return AD;this.port=this.isSpecial()&&m===A3[this.scheme]?null:m,a=""}if(r)return;o=Rp;continue}break;case Rh:if(this.scheme="file","/"===l||"\\"===l)o=Rg;else if(n&&"file"===n.scheme)switch(l){case Q:this.host=n.host,this.path=nf(n.path),this.query=n.query;break;case"?":this.host=n.host,this.path=nf(n.path),this.query="",o=Rb;break;case"#":this.host=n.host,this.path=nf(n.path),this.query=n.query,this.fragment="",o=Rm;break;default:A7(AO(nf(f,i),""))||(this.host=n.host,this.path=nf(n.path),this.shortenPath()),o=Rd;continue}else{o=Rd;continue}break;case Rg:if("/"===l||"\\"===l){o=Rv;break}n&&"file"===n.scheme&&!A7(AO(nf(f,i),""))&&(A8(n.path[0],!0)?AI(this.path,n.path[0]):this.host=n.host),o=Rd;continue;case Rv:if(l===Q||"/"===l||"\\"===l||"?"===l||"#"===l){if(!r&&A8(a))o=Rd;else if(""===a){if(this.host="",r)return;o=Rp}else{if(g=this.parseHost(a))return g;if("localhost"===this.host&&(this.host=""),r)return;a="",o=Rp}continue}a+=l;break;case Rp:if(this.isSpecial()){if(o=Rd,"/"!==l&&"\\"!==l)continue}else if(r||"?"!==l){if(r||"#"!==l){if(l!==Q&&(o=Rd,"/"!==l))continue}else this.fragment="",o=Rm}else this.query="",o=Rb;break;case Rd:if(l===Q||"/"===l||"\\"===l&&this.isSpecial()||!r&&("?"===l||"#"===l)){if(".."===(v=AL(v=a))||"%2e."===v||".%2e"===v||"%2e%2e"===v?(this.shortenPath(),"/"===l||"\\"===l&&this.isSpecial()||AI(this.path,"")):"."===(p=a)||"%2e"===AL(p)?"/"===l||"\\"===l&&this.isSpecial()||AI(this.path,""):("file"===this.scheme&&!this.path.length&&A8(a)&&(this.host&&(this.host=""),a=AA(a,0)+":"),AI(this.path,a)),a="","file"===this.scheme&&(l===Q||"?"===l||"#"===l))for(;this.path.length>1&&""===this.path[0];)Aj(this.path);"?"===l?(this.query="",o=Rb):"#"===l&&(this.fragment="",o=Rm)}else a+=A4(l,A5);break;case Ry:"?"===l?(this.query="",o=Rb):"#"===l?(this.fragment="",o=Rm):l!==Q&&(this.path[0]+=A4(l,A1));break;case Rb:r||"#"!==l?l!==Q&&("'"===l&&this.isSpecial()?this.query+="%27":"#"===l?this.query+="%23":this.query+=A4(l,A1)):(this.fragment="",o=Rm);break;case Rm:l!==Q&&(this.fragment+=A4(l,A2))}i++}},// https://url.spec.whatwg.org/#host-parsing
parseHost:function(t){var r,n,o;if("["===AA(t,0)){if("]"!==AA(t,t.length-1)||!(r=AQ(AP(t,1,-1))))return AF;this.host=r;// opaque host
}else if(this.isSpecial()){if(AR(AV,t=Sy(t))||null===(r=AX(t)))return AF;this.host=r}else{if(AR(AG,t))return AF;for(o=0,r="",n=as(t);o<n.length;o++)r+=A4(n[o],A1);this.host=r}},// https://url.spec.whatwg.org/#cannot-have-a-username-password-port
cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"===this.scheme},// https://url.spec.whatwg.org/#include-credentials
includesCredentials:function(){return""!==this.username||""!==this.password},// https://url.spec.whatwg.org/#is-special
isSpecial:function(){return rx(A3,this.scheme)},// https://url.spec.whatwg.org/#shorten-a-urls-path
shortenPath:function(){var t=this.path,r=t.length;r&&("file"!==this.scheme||1!==r||!A8(t[0],!0))&&t.length--},// https://url.spec.whatwg.org/#concept-url-serializer
serialize:function(){var t=this.scheme,r=this.username,n=this.password,o=this.host,i=this.port,a=this.path,s=this.query,u=this.fragment,c=t+":";return null!==o?(c+="//",this.includesCredentials()&&(c+=r+(n?":"+n:"")+"@"),c+=A0(o),null!==i&&(c+=":"+i)):"file"===t&&(c+="//"),c+=this.cannotBeABaseURL?a[0]:a.length?"/"+AO(a,"/"):"",null!==s&&(c+="?"+s),null!==u&&(c+="#"+u),c},// https://url.spec.whatwg.org/#dom-url-href
setHref:function(t){var r=this.parse(t);if(r)throw new Aw(r);this.searchParams.update()},// https://url.spec.whatwg.org/#dom-url-origin
getOrigin:function(){var t=this.scheme,r=this.port;if("blob"===t)try{return new RE(t.path[0]).origin}catch(t){return"null"}return"file"!==t&&this.isSpecial()?t+"://"+A0(this.host)+(null!==r?":"+r:""):"null"},// https://url.spec.whatwg.org/#dom-url-protocol
getProtocol:function(){return this.scheme+":"},setProtocol:function(t){this.parse(eQ(t)+":",A9)},// https://url.spec.whatwg.org/#dom-url-username
getUsername:function(){return this.username},setUsername:function(t){var r=as(eQ(t));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var n=0;n<r.length;n++)this.username+=A4(r[n],A6)}},// https://url.spec.whatwg.org/#dom-url-password
getPassword:function(){return this.password},setPassword:function(t){var r=as(eQ(t));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var n=0;n<r.length;n++)this.password+=A4(r[n],A6)}},// https://url.spec.whatwg.org/#dom-url-host
getHost:function(){var t=this.host,r=this.port;return null===t?"":null===r?A0(t):A0(t)+":"+r},setHost:function(t){this.cannotBeABaseURL||this.parse(t,Rc)},// https://url.spec.whatwg.org/#dom-url-hostname
getHostname:function(){var t=this.host;return null===t?"":A0(t)},setHostname:function(t){this.cannotBeABaseURL||this.parse(t,Rf)},// https://url.spec.whatwg.org/#dom-url-port
getPort:function(){var t=this.port;return null===t?"":eQ(t)},setPort:function(t){this.cannotHaveUsernamePasswordPort()||(""===(t=eQ(t))?this.port=null:this.parse(t,Rl))},// https://url.spec.whatwg.org/#dom-url-pathname
getPathname:function(){var t=this.path;return this.cannotBeABaseURL?t[0]:t.length?"/"+AO(t,"/"):""},setPathname:function(t){this.cannotBeABaseURL||(this.path=[],this.parse(t,Rp))},// https://url.spec.whatwg.org/#dom-url-search
getSearch:function(){var t=this.query;return t?"?"+t:""},setSearch:function(t){""===(t=eQ(t))?this.query=null:("?"===AA(t,0)&&(t=AP(t,1)),this.query="",this.parse(t,Rb)),this.searchParams.update()},// https://url.spec.whatwg.org/#dom-url-searchparams
getSearchParams:function(){return this.searchParams.facade},// https://url.spec.whatwg.org/#dom-url-hash
getHash:function(){var t=this.fragment;return t?"#"+t:""},setHash:function(t){if(""===(t=eQ(t))){this.fragment=null;return}"#"===AA(t,0)&&(t=AP(t,1)),this.fragment="",this.parse(t,Rm)},update:function(){this.query=this.searchParams.serialize()||null}};// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var RE=function(t/* , base */){var r=sK(this,RT),n=gK(arguments.length,1)>1?arguments[1]:void 0,o=Ap(r,new Rw(t,!1,n));tL||(r.href=o.serialize(),r.origin=o.getOrigin(),r.protocol=o.getProtocol(),r.username=o.getUsername(),r.password=o.getPassword(),r.host=o.getHost(),r.hostname=o.getHostname(),r.port=o.getPort(),r.pathname=o.getPathname(),r.search=o.getSearch(),r.searchParams=o.getSearchParams(),r.hash=o.getHash())},RT=RE.prototype,RS=function(t,r){return{get:function(){return Ad(this)[t]()},set:r&&function(t){return Ad(this)[r](t)},configurable:!0,enumerable:!0}};if(tL&&(// `URL.prototype.href` accessors pair
// https://url.spec.whatwg.org/#dom-url-href
ng(RT,"href",RS("serialize","setHref")),// `URL.prototype.origin` getter
// https://url.spec.whatwg.org/#dom-url-origin
ng(RT,"origin",RS("getOrigin")),// `URL.prototype.protocol` accessors pair
// https://url.spec.whatwg.org/#dom-url-protocol
ng(RT,"protocol",RS("getProtocol","setProtocol")),// `URL.prototype.username` accessors pair
// https://url.spec.whatwg.org/#dom-url-username
ng(RT,"username",RS("getUsername","setUsername")),// `URL.prototype.password` accessors pair
// https://url.spec.whatwg.org/#dom-url-password
ng(RT,"password",RS("getPassword","setPassword")),// `URL.prototype.host` accessors pair
// https://url.spec.whatwg.org/#dom-url-host
ng(RT,"host",RS("getHost","setHost")),// `URL.prototype.hostname` accessors pair
// https://url.spec.whatwg.org/#dom-url-hostname
ng(RT,"hostname",RS("getHostname","setHostname")),// `URL.prototype.port` accessors pair
// https://url.spec.whatwg.org/#dom-url-port
ng(RT,"port",RS("getPort","setPort")),// `URL.prototype.pathname` accessors pair
// https://url.spec.whatwg.org/#dom-url-pathname
ng(RT,"pathname",RS("getPathname","setPathname")),// `URL.prototype.search` accessors pair
// https://url.spec.whatwg.org/#dom-url-search
ng(RT,"search",RS("getSearch","setSearch")),// `URL.prototype.searchParams` getter
// https://url.spec.whatwg.org/#dom-url-searchparams
ng(RT,"searchParams",RS("getSearchParams")),// `URL.prototype.hash` accessors pair
// https://url.spec.whatwg.org/#dom-url-hash
ng(RT,"hash",RS("getHash","setHash"))),// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
r5(RT,"toJSON",function(){return Ad(this).serialize()},{enumerable:!0}),// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
r5(RT,"toString",function(){return Ad(this).serialize()},{enumerable:!0}),Am){var RA=Am.createObjectURL,RR=Am.revokeObjectURL;RA&&r5(RE,"createObjectURL",nT(RA,Am)),RR&&r5(RE,"revokeObjectURL",nT(RR,Am))}nb(RE,"URL"),tP({global:!0,constructor:!0,forced:!Sv,sham:!tL},{URL:RE});var RO=t7("URL"),Rx=Sv&&tN(function(){RO.canParse()}),R_=tN(function(){return 1!==RO.canParse.length});// `URL.canParse` method
// https://url.spec.whatwg.org/#dom-url-canparse
tP({target:"URL",stat:!0,forced:!Rx||R_},{canParse:function(t){var r=gK(arguments.length,1),n=eQ(t),o=r<2||void 0===arguments[1]?void 0:eQ(arguments[1]);try{return new RO(n,o),!0}catch(t){return!1}}});var RI=t7("URL");// `URL.parse` method
// https://url.spec.whatwg.org/#dom-url-canparse
tP({target:"URL",stat:!0,forced:!Sv},{parse:function(t){var r=gK(arguments.length,1),n=eQ(t),o=r<2||void 0===arguments[1]?void 0:eQ(arguments[1]);try{return new RI(n,o)}catch(t){return null}}}),// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
tP({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return tC(URL.prototype.toString,this)}});var Rk=URLSearchParams,Rj=Rk.prototype,RM=tq(Rj.append),RP=tq(Rj.delete),RL=tq(Rj.forEach),RN=tq([].push),RC=new Rk("a=1&a=2&b=3");RC.delete("a",1),// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
RC.delete("b",void 0),RC+""!="a=2"&&r5(Rj,"delete",function(t/* , value */){var r,n=arguments.length,o=n<2?void 0:arguments[1];if(n&&void 0===o)return RP(this,t);var i=[];RL(this,function(t,r){RN(i,{key:r,value:t})}),gK(n,1);for(var a=eQ(t),s=eQ(o),u=0,c=0,f=!1,l=i.length;u<l;)r=i[u++],f||r.key===a?(f=!0,RP(this,r.key)):c++;for(;c<l;)(r=i[c++]).key===a&&r.value===s||RM(this,r.key,r.value)},{enumerable:!0,unsafe:!0});var RF=URLSearchParams,RD=RF.prototype,RU=tq(RD.getAll),RB=tq(RD.has),Rz=new RF("a=1");(Rz.has("a",2)||!Rz.has("a",void 0))&&r5(RD,"has",function(t/* , value */){var r=arguments.length,n=r<2?void 0:arguments[1];if(r&&void 0===n)return RB(this,t);var o=RU(this,t);// also validates `this`
gK(r,1);for(var i=eQ(n),a=0;a<o.length;)if(o[a++]===i)return!0;return!1},{enumerable:!0,unsafe:!0});var R$=URLSearchParams.prototype,RH=tq(R$.forEach);!tL||"size"in R$||ng(R$,"size",{get:function(){var t=0;return RH(this,function(){t++}),t},configurable:!0,enumerable:!0}),tn("isAV7"),console.log(icons);//const recipeContainer = document.querySelector('.recipe');
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
//console.log('test');
const Rq=async function(){try{let t=window.location.hash.slice(1);if(console.log(t),!t)return;tO.update(tg()),tk.update(tc.bookmarks),//recipeView.renderSpinner();
// 2) Loading recipe
await tl(t),tS.render(tc.recipe)}catch(t){tS.renderError(),console.error(t)}},RW=async function(){try{tO.renderSpinner();// 1. Get search query
let t=tS.getQuery();if(!t)return;//2. load search results
await th(t),tO.render(tg(2)),t_.render(tc.search)}catch(t){console.log(t)}},RV=async function(t){try{tM.renderSpinner(),// upload the new recipe data
await tm(t),console.log(tc.recipe),tS.render(tc.recipe),tM.renderMessage(),tk.render(tc.bookmarks),// change ID in URL
window.history.pushState(null,"",`#${tc.recipe.id}`),// close form window
setTimeout(function(){//  addRecipeView.toggleWindow();
},2500)}catch(t){console.error("emoji",t),tM.renderError(t.message)}};tk.addHandlerRender(function(){tk.render(tc.bookmarks)}),tS.addHandlerRender(Rq),tS.addHanlderUpdateServings(function(t){// Update the recipe serving ( in state)
tv(t),tS.update(tc.recipe)}),tS.addHandlerAddBookmark(function(){tc.recipe.bookmarked?tb(tc.recipe):ty(tc.recipe),//console.log(model.state.recipe.bookmarked);
console.log(tc.recipe),tS.update(tc.recipe),tk.render(tc.bookmarks)}),tS.addHandlerSearch(RW),t_.addHandlerClick(function(t){tO.render(tg(t)),t_.render(tc.search)}),tM.addHandlerUpload(RV);//# sourceMappingURL=index.9f6415c5.js.map

//# sourceMappingURL=index.9f6415c5.js.map
