// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";function r(t,s,r){return e(t)||e(s)||e(r)||s<=0||r<=0?NaN:t<r?0:1-n(r/t,s)}function i(t,r){return e(t)||e(r)||t<=0||r<=0?s(NaN):function(s){if(e(s))return NaN;if(s<r)return 0;return 1-n(r/s,t)}}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
