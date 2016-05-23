// Compiled by ClojureScript 0.0-2843 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__5631_5635 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5632_5636 = null;
var count__5633_5637 = (0);
var i__5634_5638 = (0);
while(true){
if((i__5634_5638 < count__5633_5637)){
var f_5639 = cljs.core._nth.call(null,chunk__5632_5636,i__5634_5638);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_5639);

var G__5640 = seq__5631_5635;
var G__5641 = chunk__5632_5636;
var G__5642 = count__5633_5637;
var G__5643 = (i__5634_5638 + (1));
seq__5631_5635 = G__5640;
chunk__5632_5636 = G__5641;
count__5633_5637 = G__5642;
i__5634_5638 = G__5643;
continue;
} else {
var temp__4126__auto___5644 = cljs.core.seq.call(null,seq__5631_5635);
if(temp__4126__auto___5644){
var seq__5631_5645__$1 = temp__4126__auto___5644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5631_5645__$1)){
var c__4869__auto___5646 = cljs.core.chunk_first.call(null,seq__5631_5645__$1);
var G__5647 = cljs.core.chunk_rest.call(null,seq__5631_5645__$1);
var G__5648 = c__4869__auto___5646;
var G__5649 = cljs.core.count.call(null,c__4869__auto___5646);
var G__5650 = (0);
seq__5631_5635 = G__5647;
chunk__5632_5636 = G__5648;
count__5633_5637 = G__5649;
i__5634_5638 = G__5650;
continue;
} else {
var f_5651 = cljs.core.first.call(null,seq__5631_5645__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_5651);

var G__5652 = cljs.core.next.call(null,seq__5631_5645__$1);
var G__5653 = null;
var G__5654 = (0);
var G__5655 = (0);
seq__5631_5635 = G__5652;
chunk__5632_5636 = G__5653;
count__5633_5637 = G__5654;
i__5634_5638 = G__5655;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});
