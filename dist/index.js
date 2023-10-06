"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=a(function(R,s){
var i=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-tan/dist'),N=require('@stdlib/constants-float64-pi/dist');function y(e,r,t){return i(r)||i(t)||t<=0||i(e)||e<0||e>1?NaN:r+t*f(N*(e-.5))}s.exports=y
});var o=a(function(b,c){
var l=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),I=require('@stdlib/math-base-special-tan/dist'),P=require('@stdlib/constants-float64-pi/dist');function d(e,r){if(u(e)||u(r)||r<=0)return l(NaN);return t;function t(n){return u(n)||n<0||n>1?NaN:e+r*I(P*(n-.5))}}c.exports=d
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=q(),F=o();x(v,"factory",F);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
