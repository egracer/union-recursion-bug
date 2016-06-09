// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30694_30708 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30695_30709 = null;
var count__30696_30710 = (0);
var i__30697_30711 = (0);
while(true){
if((i__30697_30711 < count__30696_30710)){
var f_30712 = cljs.core._nth.call(null,chunk__30695_30709,i__30697_30711);
cljs.core.println.call(null,"  ",f_30712);

var G__30713 = seq__30694_30708;
var G__30714 = chunk__30695_30709;
var G__30715 = count__30696_30710;
var G__30716 = (i__30697_30711 + (1));
seq__30694_30708 = G__30713;
chunk__30695_30709 = G__30714;
count__30696_30710 = G__30715;
i__30697_30711 = G__30716;
continue;
} else {
var temp__4657__auto___30717 = cljs.core.seq.call(null,seq__30694_30708);
if(temp__4657__auto___30717){
var seq__30694_30718__$1 = temp__4657__auto___30717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30694_30718__$1)){
var c__30084__auto___30719 = cljs.core.chunk_first.call(null,seq__30694_30718__$1);
var G__30720 = cljs.core.chunk_rest.call(null,seq__30694_30718__$1);
var G__30721 = c__30084__auto___30719;
var G__30722 = cljs.core.count.call(null,c__30084__auto___30719);
var G__30723 = (0);
seq__30694_30708 = G__30720;
chunk__30695_30709 = G__30721;
count__30696_30710 = G__30722;
i__30697_30711 = G__30723;
continue;
} else {
var f_30724 = cljs.core.first.call(null,seq__30694_30718__$1);
cljs.core.println.call(null,"  ",f_30724);

var G__30725 = cljs.core.next.call(null,seq__30694_30718__$1);
var G__30726 = null;
var G__30727 = (0);
var G__30728 = (0);
seq__30694_30708 = G__30725;
chunk__30695_30709 = G__30726;
count__30696_30710 = G__30727;
i__30697_30711 = G__30728;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30729 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__29273__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30729);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30729)))?cljs.core.second.call(null,arglists_30729):arglists_30729));
}
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30698 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30699 = null;
var count__30700 = (0);
var i__30701 = (0);
while(true){
if((i__30701 < count__30700)){
var vec__30702 = cljs.core._nth.call(null,chunk__30699,i__30701);
var name = cljs.core.nth.call(null,vec__30702,(0),null);
var map__30703 = cljs.core.nth.call(null,vec__30702,(1),null);
var map__30703__$1 = ((((!((map__30703 == null)))?((((map__30703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30703):map__30703);
var doc = cljs.core.get.call(null,map__30703__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30703__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30730 = seq__30698;
var G__30731 = chunk__30699;
var G__30732 = count__30700;
var G__30733 = (i__30701 + (1));
seq__30698 = G__30730;
chunk__30699 = G__30731;
count__30700 = G__30732;
i__30701 = G__30733;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30698);
if(temp__4657__auto__){
var seq__30698__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30698__$1)){
var c__30084__auto__ = cljs.core.chunk_first.call(null,seq__30698__$1);
var G__30734 = cljs.core.chunk_rest.call(null,seq__30698__$1);
var G__30735 = c__30084__auto__;
var G__30736 = cljs.core.count.call(null,c__30084__auto__);
var G__30737 = (0);
seq__30698 = G__30734;
chunk__30699 = G__30735;
count__30700 = G__30736;
i__30701 = G__30737;
continue;
} else {
var vec__30705 = cljs.core.first.call(null,seq__30698__$1);
var name = cljs.core.nth.call(null,vec__30705,(0),null);
var map__30706 = cljs.core.nth.call(null,vec__30705,(1),null);
var map__30706__$1 = ((((!((map__30706 == null)))?((((map__30706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30706):map__30706);
var doc = cljs.core.get.call(null,map__30706__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30706__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30738 = cljs.core.next.call(null,seq__30698__$1);
var G__30739 = null;
var G__30740 = (0);
var G__30741 = (0);
seq__30698 = G__30738;
chunk__30699 = G__30739;
count__30700 = G__30740;
i__30701 = G__30741;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1465505507337