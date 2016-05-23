// Compiled by ClojureScript 0.0-2843 {}
goog.provide('cljsworkshop.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('clojure.browser.repl');
cljsworkshop.core.sum = (function sum(){
var x = (document.getElementById("num1").value | (0));
var y = (document.getElementById("num2").value | (0));
var s = document.getElementById("res");
return s.innerHTML = (x + y);
});
cljsworkshop.core.main = (function main(){
var button = document.getElementById("Add");
return goog.events.listen(button,"click",((function (button){
return (function (){
return cljsworkshop.core.sum.call(null);
});})(button))
);
});
cljsworkshop.core.main.call(null);

//# sourceMappingURL=core.js.map