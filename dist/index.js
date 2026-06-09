"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=c(function(O,f){
var u=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-pow/dist');function a(e,r,n){return u(e)||u(r)||u(n)||r<=0||n<=0?NaN:e<n?0:1-N(n/e,r)}f.exports=a
});var q=c(function(R,s){
var y=require('@stdlib/utils-constant-function/dist'),t=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-pow/dist');function w(e,r){if(t(e)||t(r)||e<=0||r<=0)return y(NaN);return n;function n(i){return t(i)?NaN:i<r?0:1-d(r/i,e)}}s.exports=w
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=o(),p=q();m(v,"factory",p);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
