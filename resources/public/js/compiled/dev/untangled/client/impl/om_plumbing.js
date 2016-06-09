// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.impl.om_plumbing');
goog.require('cljs.core');
goog.require('untangled.client.logging');
goog.require('untangled.i18n.core');
goog.require('clojure.zip');
goog.require('om.next.impl.parser');
goog.require('cljs.core.async');
goog.require('untangled.client.mutations');
goog.require('om.util');
goog.require('om.next');
untangled.client.impl.om_plumbing.has_remote_query_QMARK_ = (function untangled$client$impl$om_plumbing$has_remote_query_QMARK_(ast){
var or__29273__auto__ = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return cljs.core.some.call(null,untangled$client$impl$om_plumbing$has_remote_query_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
}
});
/**
 * Read function for the Om parser.
 * 
 *   *** NOTE: This function only runs when it is called without a target -- it is not triggered for remote reads. To
 *   trigger a remote read, use the `untangled/data-fetch` namespace. ***
 * 
 *   Returns the current locale when reading the :ui/locale keyword. Otherwise pulls data out of the app-state.
 *   
 */
untangled.client.impl.om_plumbing.read_local = (function untangled$client$impl$om_plumbing$read_local(p__34269,dkey,_){
var map__34273 = p__34269;
var map__34273__$1 = ((((!((map__34273 == null)))?((((map__34273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34273):map__34273);
var query = cljs.core.get.call(null,map__34273__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__34273__$1,new cljs.core.Keyword(null,"target","target",253001721));
var state = cljs.core.get.call(null,map__34273__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__34273__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.not.call(null,target)){
var G__34275 = dkey;
switch (G__34275) {
default:
var top_level_prop = (query == null);
var key = (function (){var or__29273__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return dkey;
}
})();
var by_ident_QMARK_ = om.util.ident_QMARK_.call(null,key);
var union_QMARK_ = cljs.core.map_QMARK_.call(null,query);
var data = ((by_ident_QMARK_)?cljs.core.get_in.call(null,cljs.core.deref.call(null,state),key):cljs.core.get.call(null,cljs.core.deref.call(null,state),key));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),((union_QMARK_)?cljs.core.get.call(null,om.next.db__GT_tree.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([key,query], true, false)], null),cljs.core.deref.call(null,state),cljs.core.deref.call(null,state)),key):((top_level_prop)?data:om.next.db__GT_tree.call(null,query,data,cljs.core.deref.call(null,state))
))], null);

}
} else {
return null;
}
});
untangled.client.impl.om_plumbing.write_entry_point = (function untangled$client$impl$om_plumbing$write_entry_point(env,k,params){
var rv = (function (){try{return untangled.client.mutations.mutate.call(null,env,k,params);
}catch (e34280){var e = e34280;
untangled.client.logging.error.call(null,[cljs.core.str("Mutation "),cljs.core.str(k),cljs.core.str(" failed with exception")].join(''),e);

return null;
}})();
var action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(rv);
if(cljs.core.truth_(action)){
return cljs.core.assoc.call(null,rv,new cljs.core.Keyword(null,"action","action",-811238024),((function (rv,action){
return (function (){
try{var action_result = action.call(null,env,k,params);
try{untangled.client.mutations.post_mutate.call(null,env,k,params);
}catch (e34282){var e_34283 = e34282;
untangled.client.logging.error.call(null,[cljs.core.str("Post mutate failed on dispatch to "),cljs.core.str(k)].join(''));
}
return action_result;
}catch (e34281){var e = e34281;
untangled.client.logging.error.call(null,[cljs.core.str("Mutation "),cljs.core.str(k),cljs.core.str(" failed with exception")].join(''),e);

throw e;
}});})(rv,action))
);
} else {
return rv;
}
});
untangled.client.impl.om_plumbing.resolve_tempids = (function untangled$client$impl$om_plumbing$resolve_tempids(state,tid__GT_rid){

if(cljs.core.empty_QMARK_.call(null,tid__GT_rid)){
return state;
} else {
return clojure.walk.prewalk.call(null,(function (p1__34284_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,p1__34284_SHARP_),om.tempid.TempId)){
return cljs.core.get.call(null,tid__GT_rid,p1__34284_SHARP_,p1__34284_SHARP_);
} else {
return p1__34284_SHARP_;
}
}),state);
}
});
/**
 * Rewrite any pending requests in the request queue to account for the fact that a response might have
 *   changed ids that are expressed in the mutations of that queue. tempid-map MUST be a map from om
 *   tempid to real ids, not idents.
 */
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue = (function untangled$client$impl$om_plumbing$rewrite_tempids_in_request_queue(queue,tempid_map){
var entry = cljs.core.async.poll_BANG_.call(null,queue);
var entries = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(entry)){
var G__34293 = cljs.core.async.poll_BANG_.call(null,queue);
var G__34294 = cljs.core.conj.call(null,entries,untangled.client.impl.om_plumbing.resolve_tempids.call(null,entry,tempid_map));
entry = G__34293;
entries = G__34294;
continue;
} else {
if(cljs.core.seq.call(null,entries)){
var seq__34289 = cljs.core.seq.call(null,entries);
var chunk__34290 = null;
var count__34291 = (0);
var i__34292 = (0);
while(true){
if((i__34292 < count__34291)){
var e = cljs.core._nth.call(null,chunk__34290,i__34292);
if(cljs.core.truth_(cljs.core.async.offer_BANG_.call(null,queue,e))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Queue should not block."),cljs.core.str("\n"),cljs.core.str("(async/offer! queue e)")].join('')));
}

var G__34295 = seq__34289;
var G__34296 = chunk__34290;
var G__34297 = count__34291;
var G__34298 = (i__34292 + (1));
seq__34289 = G__34295;
chunk__34290 = G__34296;
count__34291 = G__34297;
i__34292 = G__34298;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34289);
if(temp__4657__auto__){
var seq__34289__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34289__$1)){
var c__30084__auto__ = cljs.core.chunk_first.call(null,seq__34289__$1);
var G__34299 = cljs.core.chunk_rest.call(null,seq__34289__$1);
var G__34300 = c__30084__auto__;
var G__34301 = cljs.core.count.call(null,c__30084__auto__);
var G__34302 = (0);
seq__34289 = G__34299;
chunk__34290 = G__34300;
count__34291 = G__34301;
i__34292 = G__34302;
continue;
} else {
var e = cljs.core.first.call(null,seq__34289__$1);
if(cljs.core.truth_(cljs.core.async.offer_BANG_.call(null,queue,e))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Queue should not block."),cljs.core.str("\n"),cljs.core.str("(async/offer! queue e)")].join('')));
}

var G__34303 = cljs.core.next.call(null,seq__34289__$1);
var G__34304 = null;
var G__34305 = (0);
var G__34306 = (0);
seq__34289 = G__34303;
chunk__34290 = G__34304;
count__34291 = G__34305;
i__34292 = G__34306;
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
break;
}
});
/**
 * Removes all untangled/load and tx/fallback mutations from the query
 */
untangled.client.impl.om_plumbing.remove_loads_and_fallbacks = (function untangled$client$impl$om_plumbing$remove_loads_and_fallbacks(query){
var symbols_to_filter = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("untangled","load","untangled/load",89075339,null),null,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),null], null), null);
var ast = om.next.query__GT_ast.call(null,query);
var children = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var new_children = cljs.core.filter.call(null,((function (symbols_to_filter,ast,children){
return (function (child){
return !(cljs.core.contains_QMARK_.call(null,symbols_to_filter,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(child)));
});})(symbols_to_filter,ast,children))
,children);
var new_ast = cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),new_children);
return om.next.ast__GT_query.call(null,new_ast);
});
untangled.client.impl.om_plumbing.fallback_query = (function untangled$client$impl$om_plumbing$fallback_query(query,resp){

var symbols_to_find = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),null], null), null);
var ast = om.next.query__GT_ast.call(null,query);
var children = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var new_children = cljs.core.map.call(null,((function (symbols_to_find,ast,children){
return (function (ast__$1){
return cljs.core.update.call(null,ast__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc,new cljs.core.Keyword(null,"execute","execute",-129499188),true,new cljs.core.Keyword(null,"error","error",-978969032),resp);
});})(symbols_to_find,ast,children))
,cljs.core.filter.call(null,((function (symbols_to_find,ast,children){
return (function (child){
return cljs.core.contains_QMARK_.call(null,symbols_to_find,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(child));
});})(symbols_to_find,ast,children))
,children));
var new_ast = cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),new_children);
var fallback_query__$1 = om.next.ast__GT_query.call(null,new_ast);
if(cljs.core.truth_(cljs.core.not_empty.call(null,fallback_query__$1))){
return fallback_query__$1;
} else {
return null;
}
});
untangled.client.impl.om_plumbing.is_ui_query_fragment_QMARK_ = (function untangled$client$impl$om_plumbing$is_ui_query_fragment_QMARK_(kw){
if((kw instanceof cljs.core.Keyword)){
var G__34308 = kw;
var G__34308__$1 = (((G__34308 == null))?null:cljs.core.namespace.call(null,G__34308));
if((G__34308__$1 == null)){
return null;
} else {
return cljs.core.re_find.call(null,/^ui(?:\.|$)/,G__34308__$1);
}
} else {
return null;
}
});
/**
 * Returns a new query with fragments beginning with `ui` removed.
 */
untangled.client.impl.om_plumbing.strip_ui = (function untangled$client$impl$om_plumbing$strip_ui(query){
var ast = om.next.query__GT_ast.call(null,query);
var drop_ui_children = ((function (ast){
return (function untangled$client$impl$om_plumbing$strip_ui_$_drop_ui_children(ast_node){
return cljs.core.assoc.call(null,ast_node,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.call(null,((function (ast){
return (function (acc,n){
if(cljs.core.truth_(untangled.client.impl.om_plumbing.is_ui_query_fragment_QMARK_.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(n)))){
return acc;
} else {
return cljs.core.conj.call(null,acc,untangled$client$impl$om_plumbing$strip_ui_$_drop_ui_children.call(null,n));
}
});})(ast))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast_node)));
});})(ast))
;
return om.next.ast__GT_query.call(null,drop_ui_children.call(null,ast));
});
untangled.client.impl.om_plumbing.nf = new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494);
untangled.client.impl.om_plumbing.walk = (function untangled$client$impl$om_plumbing$walk(inner,outer,form){
if(cljs.core.map_QMARK_.call(null,form)){
return outer.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__34309_SHARP_){
return inner.call(null,cljs.core.with_meta.call(null,p1__34309_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map-entry?","map-entry?",-499916250),true], null)));
}),form)));
} else {
if(cljs.core.list_QMARK_.call(null,form)){
return outer.call(null,cljs.core.apply.call(null,cljs.core.list,cljs.core.map.call(null,inner,form)));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return outer.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,inner,form)));
} else {
if(cljs.core.record_QMARK_.call(null,form)){
return outer.call(null,cljs.core.reduce.call(null,(function (r,x){
return cljs.core.conj.call(null,r,inner.call(null,x));
}),form,form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return outer.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,inner,form)));
} else {
return outer.call(null,form);

}
}
}
}
}
});
untangled.client.impl.om_plumbing.prewalk = (function untangled$client$impl$om_plumbing$prewalk(f,form){
return untangled.client.impl.om_plumbing.walk.call(null,cljs.core.partial.call(null,untangled$client$impl$om_plumbing$prewalk,f),cljs.core.identity,f.call(null,form));
});
untangled.client.impl.om_plumbing.postwalk = (function untangled$client$impl$om_plumbing$postwalk(f,form){
return untangled.client.impl.om_plumbing.walk.call(null,cljs.core.partial.call(null,untangled$client$impl$om_plumbing$postwalk,f),f,form);
});
untangled.client.impl.om_plumbing.recursive_QMARK_ = (function untangled$client$impl$om_plumbing$recursive_QMARK_(qf){
return cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),qf);
});
untangled.client.impl.om_plumbing.add_meta_to_recursive_queries = (function untangled$client$impl$om_plumbing$add_meta_to_recursive_queries(q){
var a = cljs.core.atom.call(null,q);
return untangled.client.impl.om_plumbing.postwalk.call(null,((function (a){
return (function (p1__34311_SHARP_){
if(cljs.core.truth_((function (){var and__29261__auto__ = cljs.core.vector_QMARK_.call(null,p1__34311_SHARP_);
if(and__29261__auto__){
var and__29261__auto____$1 = cljs.core.not.call(null,(function (){var G__34323 = p1__34311_SHARP_;
var G__34323__$1 = (((G__34323 == null))?null:cljs.core.meta.call(null,G__34323));
if((G__34323__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"map-entry?","map-entry?",-499916250).cljs$core$IFn$_invoke$arity$1(G__34323__$1);
}
})());
if(and__29261__auto____$1){
var and__29261__auto____$2 = cljs.core._EQ_.call(null,cljs.core.count.call(null,p1__34311_SHARP_),(2));
if(and__29261__auto____$2){
var G__34325 = p1__34311_SHARP_;
var G__34325__$1 = (((G__34325 == null))?null:cljs.core.second.call(null,G__34325));
var G__34325__$2 = (((G__34325__$1 == null))?null:cljs.core.meta.call(null,G__34325__$1));
var G__34325__$3 = (((G__34325__$2 == null))?null:new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(G__34325__$2));
if((G__34325__$3 == null)){
return null;
} else {
return typeof G__34325__$3 === 'number';
}
} else {
return and__29261__auto____$2;
}
} else {
return and__29261__auto____$1;
}
} else {
return and__29261__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,p1__34311_SHARP_),new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.second.call(null,p1__34311_SHARP_)))], null);
} else {
return p1__34311_SHARP_;

}
});})(a))
,untangled.client.impl.om_plumbing.prewalk.call(null,((function (a){
return (function (p1__34310_SHARP_){
if((cljs.core.vector_QMARK_.call(null,p1__34310_SHARP_)) && (new cljs.core.Keyword(null,"map-entry?","map-entry?",-499916250).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__34310_SHARP_)) === false)){
cljs.core.reset_BANG_.call(null,a,p1__34310_SHARP_);

return p1__34310_SHARP_;
} else {
if(typeof p1__34310_SHARP_ === 'number'){
return cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"...","...",727496020),cljs.core.deref.call(null,a),new cljs.core.Keyword(null,"depth","depth",1768663640),p1__34310_SHARP_], null));
} else {
if(cljs.core.truth_(untangled.client.impl.om_plumbing.recursive_QMARK_.call(null,p1__34310_SHARP_))){
return cljs.core.with_meta.call(null,p1__34310_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"...","...",727496020),cljs.core.deref.call(null,a)], null));
} else {
return p1__34310_SHARP_;

}
}
}
});})(a))
,q));
});
/**
 * Returns data with meta-data marking it as a leaf in the result.
 */
untangled.client.impl.om_plumbing.as_leaf = (function untangled$client$impl$om_plumbing$as_leaf(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return cljs.core.with_meta.call(null,data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("untangled","leaf","untangled/leaf",1350192128),true], null));
} else {
return data;
}
});
/**
 * Returns true iff the given data is marked as a leaf in the result (according to the query). Requires pre-marking.
 */
untangled.client.impl.om_plumbing.leaf_QMARK_ = (function untangled$client$impl$om_plumbing$leaf_QMARK_(data){
return (!(cljs.core.coll_QMARK_.call(null,data))) || (cljs.core.empty_QMARK_.call(null,data)) || ((cljs.core.coll_QMARK_.call(null,data)) && (cljs.core.boolean$.call(null,new cljs.core.Keyword("untangled","leaf","untangled/leaf",1350192128).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,data)))));
});
/**
 * Walk the query and response, marking anything that was asked for in the query but is not in the response a missing. The
 *   merge process (see application.cljs definition of merge for the reconciler) looks for these markers and overwrites existing data when they appear.
 *   Returns the result with missing markers in place.
 */
untangled.client.impl.om_plumbing.mark_missing = (function untangled$client$impl$om_plumbing$mark_missing(result,query){
var paramterized_QMARK_ = (function untangled$client$impl$om_plumbing$mark_missing_$_paramterized_QMARK_(q){
return (cljs.core.list_QMARK_.call(null,q)) && (((cljs.core.first.call(null,q) instanceof cljs.core.Symbol)) || (cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,q))));
});
var ok_STAR_not_found = (function untangled$client$impl$om_plumbing$mark_missing_$_ok_STAR_not_found(res,k){
if(cljs.core.contains_QMARK_.call(null,res,k)){
return res;
} else {
if(cljs.core.truth_(untangled.client.impl.om_plumbing.recursive_QMARK_.call(null,k))){
return res;
} else {
return cljs.core.assoc.call(null,((cljs.core.map_QMARK_.call(null,res))?res:cljs.core.PersistentArrayMap.EMPTY),k,untangled.client.impl.om_plumbing.nf);

}
}
});
var union__GT_query = (function untangled$client$impl$om_plumbing$mark_missing_$_union__GT_query(u){
return cljs.core.set.call(null,cljs.core.flatten.call(null,cljs.core.vals.call(null,u)));
});
var union_QMARK_ = (function untangled$client$impl$om_plumbing$mark_missing_$_union_QMARK_(q){
var expr = (function (){var G__34342 = q;
if(cljs.core.seq_QMARK_.call(null,q)){
return cljs.core.first.call(null,G__34342);
} else {
return G__34342;
}
})();
return (cljs.core.map_QMARK_.call(null,expr)) && (((1) < cljs.core.count.call(null,cljs.core.seq.call(null,expr))));
});
var step = (function untangled$client$impl$om_plumbing$mark_missing_$_step(res,q){
var q__$1 = (cljs.core.truth_(paramterized_QMARK_.call(null,q))?cljs.core.first.call(null,q):q);
var vec__34344 = (cljs.core.truth_(om.util.join_QMARK_.call(null,q__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.util.join_key.call(null,q__$1),om.util.join_value.call(null,q__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q__$1,null], null)
);
var query_key = cljs.core.nth.call(null,vec__34344,(0),null);
var _QMARK_sub_query = cljs.core.nth.call(null,vec__34344,(1),null);
var result_or_not_found = ok_STAR_not_found.call(null,res,query_key);
var result_or_not_found__$1 = ((((q__$1 instanceof cljs.core.Keyword)) && (cljs.core.map_QMARK_.call(null,result_or_not_found)))?cljs.core.update.call(null,result_or_not_found,q__$1,untangled.client.impl.om_plumbing.as_leaf):result_or_not_found);
var sub_result = cljs.core.get.call(null,result_or_not_found__$1,query_key);
if(cljs.core.truth_((function (){var and__29261__auto__ = union_QMARK_.call(null,_QMARK_sub_query);
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.map_QMARK_.call(null,sub_result);
} else {
return and__29261__auto__;
}
})())){
return cljs.core.assoc.call(null,result_or_not_found__$1,query_key,untangled$client$impl$om_plumbing$mark_missing.call(null,sub_result,union__GT_query.call(null,cljs.core.get.call(null,q__$1,query_key))));
} else {
if(cljs.core.truth_(union_QMARK_.call(null,_QMARK_sub_query))){
var _LT__GT_ = sub_result;
var _LT__GT___$1 = cljs.core.mapv.call(null,((function (_LT__GT_,q__$1,vec__34344,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result){
return (function (p1__34326_SHARP_){
return untangled$client$impl$om_plumbing$mark_missing.call(null,p1__34326_SHARP_,union__GT_query.call(null,cljs.core.get.call(null,q__$1,query_key)));
});})(_LT__GT_,q__$1,vec__34344,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result))
,_LT__GT_);
return cljs.core.assoc.call(null,result_or_not_found__$1,query_key,_LT__GT___$1);
} else {
if(cljs.core.truth_(untangled.client.impl.om_plumbing.is_ui_query_fragment_QMARK_.call(null,q__$1))){
return untangled.client.impl.om_plumbing.as_leaf.call(null,res);
} else {
if(cljs.core.truth_((function (){var and__29261__auto__ = _QMARK_sub_query;
if(cljs.core.truth_(and__29261__auto__)){
return (cljs.core.not_EQ_.call(null,untangled.client.impl.om_plumbing.nf,sub_result)) && (cljs.core.not.call(null,untangled.client.impl.om_plumbing.recursive_QMARK_.call(null,_QMARK_sub_query)));
} else {
return and__29261__auto__;
}
})())){
var _LT__GT_ = sub_result;
var _LT__GT___$1 = ((cljs.core.vector_QMARK_.call(null,_LT__GT_))?cljs.core.mapv.call(null,((function (_LT__GT_,q__$1,vec__34344,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result){
return (function (p1__34327_SHARP_){
return untangled$client$impl$om_plumbing$mark_missing.call(null,p1__34327_SHARP_,_QMARK_sub_query);
});})(_LT__GT_,q__$1,vec__34344,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result))
,_LT__GT_):untangled$client$impl$om_plumbing$mark_missing.call(null,_LT__GT_,_QMARK_sub_query));
return cljs.core.assoc.call(null,result_or_not_found__$1,query_key,_LT__GT___$1);
} else {
if(cljs.core.truth_(untangled.client.impl.om_plumbing.recursive_QMARK_.call(null,_QMARK_sub_query))){
var temp__4655__auto__ = cljs.core.get.call(null,res,query_key);
if(cljs.core.truth_(temp__4655__auto__)){
var res_ = temp__4655__auto__;
var _LT__GT_ = res_;
var _LT__GT___$1 = ((cljs.core.vector_QMARK_.call(null,_LT__GT_))?cljs.core.mapv.call(null,((function (_LT__GT_,res_,temp__4655__auto__,q__$1,vec__34344,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result){
return (function (p1__34328_SHARP_){
return untangled$client$impl$om_plumbing$mark_missing.call(null,p1__34328_SHARP_,_QMARK_sub_query);
});})(_LT__GT_,res_,temp__4655__auto__,q__$1,vec__34344,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result))
,_LT__GT_):untangled$client$impl$om_plumbing$mark_missing.call(null,_LT__GT_,_QMARK_sub_query));
return cljs.core.assoc.call(null,res,query_key,_LT__GT___$1);
} else {
return result_or_not_found__$1;
}
} else {
return result_or_not_found__$1;

}
}
}
}
}
});
return cljs.core.reduce.call(null,step,result,(cljs.core.truth_(untangled.client.impl.om_plumbing.recursive_QMARK_.call(null,query))?untangled.client.impl.om_plumbing.add_meta_to_recursive_queries.call(null,new cljs.core.Keyword(null,"...","...",727496020).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query))):untangled.client.impl.om_plumbing.add_meta_to_recursive_queries.call(null,query)));
});
untangled.client.impl.om_plumbing.sweep_missing = (function untangled$client$impl$om_plumbing$sweep_missing(result){
var clean = (function untangled$client$impl$om_plumbing$sweep_missing_$_clean(p__34355){
var vec__34357 = p__34355;
var k = cljs.core.nth.call(null,vec__34357,(0),null);
var v = cljs.core.nth.call(null,vec__34357,(1),null);
if(cljs.core._EQ_.call(null,v,untangled.client.impl.om_plumbing.nf)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});
return clojure.walk.prewalk.call(null,(function (p1__34345_SHARP_){
if(cljs.core.map_QMARK_.call(null,p1__34345_SHARP_)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,clean,p1__34345_SHARP_));
} else {
return p1__34345_SHARP_;
}
}),result);
});

//# sourceMappingURL=om_plumbing.js.map?rel=1465505599361