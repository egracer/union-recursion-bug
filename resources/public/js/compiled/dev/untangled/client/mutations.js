// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.mutations');
goog.require('cljs.core');
goog.require('om.next');
if(typeof untangled.client.mutations.mutate !== 'undefined'){
} else {
untangled.client.mutations.mutate = (function (){var method_table__30198__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__30199__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__30200__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__30201__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__30202__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.client.mutations","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__30202__auto__,method_table__30198__auto__,prefer_table__30199__auto__,method_cache__30200__auto__,cached_hierarchy__30201__auto__));
})();
}
if(typeof untangled.client.mutations.post_mutate !== 'undefined'){
} else {
untangled.client.mutations.post_mutate = (function (){var method_table__30198__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__30199__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__30200__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__30201__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__30202__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.client.mutations","post-mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__30202__auto__,method_table__30198__auto__,prefer_table__30199__auto__,method_cache__30200__auto__,cached_hierarchy__30201__auto__));
})();
}
/**
 * Toggle the given boolean `field` on the specified component.
 */
untangled.client.mutations.toggle_BANG_ = (function untangled$client$mutations$toggle_BANG_(comp,field){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__30107__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null)),(function (){var x__30107__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"field","field",-1302436500)),(function (){var x__30107__auto__ = field;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__30107__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__30107__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__30107__auto__);
})())))));
});
/**
 * Set a raw value on the given `field` of a `component`.
 */
untangled.client.mutations.set_value_BANG_ = (function untangled$client$mutations$set_value_BANG_(component,field,value){
return om.next.transact_BANG_.call(null,component,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__30107__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null)),(function (){var x__30107__auto__ = cljs.core.PersistentArrayMap.fromArray([field,value], true, false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__30107__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__30107__auto__);
})())))));
});
/**
 * Helper for set-integer!, use that instead.
 */
untangled.client.mutations.ensure_integer = (function untangled$client$mutations$ensure_integer(v){
var rv = parseInt(v);
if(cljs.core.truth_(isNaN(v))){
return (0);
} else {
return rv;
}
});
/**
 * Set the given integer on the given `field` of a `component`. Allows same parameters as `set-string!`
 */
untangled.client.mutations.set_integer_BANG_ = (function untangled$client$mutations$set_integer_BANG_(var_args){
var args__30350__auto__ = [];
var len__30343__auto___34238 = arguments.length;
var i__30344__auto___34239 = (0);
while(true){
if((i__30344__auto___34239 < len__30343__auto___34238)){
args__30350__auto__.push((arguments[i__30344__auto___34239]));

var G__34240 = (i__30344__auto___34239 + (1));
i__30344__auto___34239 = G__34240;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((2) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((2)),(0),null)):null);
return untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30351__auto__);
});

untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__34235){
var map__34236 = p__34235;
var map__34236__$1 = ((((!((map__34236 == null)))?((((map__34236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34236):map__34236);
var event = cljs.core.get.call(null,map__34236__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.call(null,map__34236__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__29261__auto__ = (function (){var or__29273__auto__ = event;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.not.call(null,(function (){var and__29261__auto____$1 = event;
if(cljs.core.truth_(and__29261__auto____$1)){
return value;
} else {
return and__29261__auto____$1;
}
})());
} else {
return and__29261__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Supply either :event or :value"),cljs.core.str("\n"),cljs.core.str("(and (or event value) (not (and event value)))")].join('')));
}

var value__$1 = untangled.client.mutations.ensure_integer.call(null,(cljs.core.truth_(event)?event.target.value:value));
return untangled.client.mutations.set_value_BANG_.call(null,component,field,value__$1);
});

untangled.client.mutations.set_integer_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq34232){
var G__34233 = cljs.core.first.call(null,seq34232);
var seq34232__$1 = cljs.core.next.call(null,seq34232);
var G__34234 = cljs.core.first.call(null,seq34232__$1);
var seq34232__$2 = cljs.core.next.call(null,seq34232__$1);
return untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34233,G__34234,seq34232__$2);
});
/**
 * Set a string on the given `field` of a `component`. The string can be literal via named parameter `:value` or
 *   can be auto-extracted from a UI event using the named parameter `:event`
 * 
 *   Examples
 * 
 *   ```
 *   (set-string! this :ui/name :value "Hello") ; set from literal (or var)
 *   (set-string! this :ui/name :event evt) ; extract from UI event target value
 *   ```
 *   
 */
untangled.client.mutations.set_string_BANG_ = (function untangled$client$mutations$set_string_BANG_(var_args){
var args__30350__auto__ = [];
var len__30343__auto___34247 = arguments.length;
var i__30344__auto___34248 = (0);
while(true){
if((i__30344__auto___34248 < len__30343__auto___34247)){
args__30350__auto__.push((arguments[i__30344__auto___34248]));

var G__34249 = (i__30344__auto___34248 + (1));
i__30344__auto___34248 = G__34249;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((2) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((2)),(0),null)):null);
return untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30351__auto__);
});

untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__34244){
var map__34245 = p__34244;
var map__34245__$1 = ((((!((map__34245 == null)))?((((map__34245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34245):map__34245);
var event = cljs.core.get.call(null,map__34245__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.call(null,map__34245__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__29261__auto__ = (function (){var or__29273__auto__ = event;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.not.call(null,(function (){var and__29261__auto____$1 = event;
if(cljs.core.truth_(and__29261__auto____$1)){
return value;
} else {
return and__29261__auto____$1;
}
})());
} else {
return and__29261__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Supply either :event or :value"),cljs.core.str("\n"),cljs.core.str("(and (or event value) (not (and event value)))")].join('')));
}

var value__$1 = (cljs.core.truth_(event)?event.target.value:value);
return untangled.client.mutations.set_value_BANG_.call(null,component,field,value__$1);
});

untangled.client.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq34241){
var G__34242 = cljs.core.first.call(null,seq34241);
var seq34241__$1 = cljs.core.next.call(null,seq34241);
var G__34243 = cljs.core.first.call(null,seq34241__$1);
var seq34241__$2 = cljs.core.next.call(null,seq34241__$1);
return untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34242,G__34243,seq34241__$2);
});

//# sourceMappingURL=mutations.js.map?rel=1465505599140