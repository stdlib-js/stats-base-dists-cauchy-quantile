// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-tan@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";function r(t,i,r){return s(i)||s(r)||r<=0||s(t)||t<0||t>1?NaN:i+r*n(e*(t-.5))}function d(t,r){return s(t)||s(r)||r<=0?i(NaN):function(i){if(s(i)||i<0||i>1)return NaN;return t+r*n(e*(i-.5))}}t(r,"factory",d);export{r as default,d as factory};
//# sourceMappingURL=index.mjs.map
