// Compiled by ClojureScript 0.0-2843 {}
goog.provide('cljsworkshop.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('clojure.browser.repl');
cljsworkshop.core.set_html_BANG_ = (function set_html_BANG_(el,content){
return el.innerHTML = content;
});
cljsworkshop.core.mani = (function mani(){
var content = "Hello world from clojurescript";
var element = document.getElementById("str");
return cljsworkshop.core.set_html_BANG_.call(null,element,content);
});
cljsworkshop.core.main.call(null);
