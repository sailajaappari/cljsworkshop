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
var seq__5721_5725 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5722_5726 = null;
var count__5723_5727 = (0);
var i__5724_5728 = (0);
while(true){
if((i__5724_5728 < count__5723_5727)){
var f_5729 = cljs.core._nth.call(null,chunk__5722_5726,i__5724_5728);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_5729);

var G__5730 = seq__5721_5725;
var G__5731 = chunk__5722_5726;
var G__5732 = count__5723_5727;
var G__5733 = (i__5724_5728 + (1));
seq__5721_5725 = G__5730;
chunk__5722_5726 = G__5731;
count__5723_5727 = G__5732;
i__5724_5728 = G__5733;
continue;
} else {
var temp__4126__auto___5734 = cljs.core.seq.call(null,seq__5721_5725);
if(temp__4126__auto___5734){
var seq__5721_5735__$1 = temp__4126__auto___5734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5721_5735__$1)){
var c__4600__auto___5736 = cljs.core.chunk_first.call(null,seq__5721_5735__$1);
var G__5737 = cljs.core.chunk_rest.call(null,seq__5721_5735__$1);
var G__5738 = c__4600__auto___5736;
var G__5739 = cljs.core.count.call(null,c__4600__auto___5736);
var G__5740 = (0);
seq__5721_5725 = G__5737;
chunk__5722_5726 = G__5738;
count__5723_5727 = G__5739;
i__5724_5728 = G__5740;
continue;
} else {
var f_5741 = cljs.core.first.call(null,seq__5721_5735__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_5741);

var G__5742 = cljs.core.next.call(null,seq__5721_5735__$1);
var G__5743 = null;
var G__5744 = (0);
var G__5745 = (0);
seq__5721_5725 = G__5742;
chunk__5722_5726 = G__5743;
count__5723_5727 = G__5744;
i__5724_5728 = G__5745;
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

//# sourceMappingURL=repl.js.map