// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.impl.data_fetch');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
goog.require('clojure.set');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.om_plumbing');
goog.require('om.next.impl.parser');
goog.require('om.next.protocols');
goog.require('untangled.dom');
goog.require('untangled.client.mutations');
goog.require('om.util');
goog.require('om.next');
goog.require('clojure.walk');






untangled.client.impl.data_fetch.data_state_QMARK_ = (function untangled$client$impl$data_fetch$data_state_QMARK_(state){
return cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040));
});
var is_kind_QMARK_ = (function untangled$client$impl$data_fetch$is_kind_QMARK_(state,type){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_state_QMARK_.call(null,state))){
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040).cljs$core$IFn$_invoke$arity$1(state));
} else {
return false;
}
});
untangled.client.impl.data_fetch.ready_QMARK_ = (function untangled$client$impl$data_fetch$ready_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"ready","ready",1086465795));
});

untangled.client.impl.data_fetch.loading_QMARK_ = (function untangled$client$impl$data_fetch$loading_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"loading","loading",-737050189));
});

untangled.client.impl.data_fetch.failed_QMARK_ = (function untangled$client$impl$data_fetch$failed_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"failed","failed",-1397425762));
});
/**
 * Place load markers in the app state at their data paths so that UI rendering can see them.
 */
untangled.client.impl.data_fetch.place_load_markers = (function untangled$client$impl$data_fetch$place_load_markers(state_atom,items_to_load){
var seq__34394 = cljs.core.seq.call(null,items_to_load);
var chunk__34395 = null;
var count__34396 = (0);
var i__34397 = (0);
while(true){
if((i__34397 < count__34396)){
var item = cljs.core._nth.call(null,chunk__34395,i__34397);
var i_34398 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__34394,chunk__34395,count__34396,i__34397,i_34398,item){
return (function (s){
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,s,untangled.client.impl.data_fetch.data_path.call(null,i_34398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_34398], null)),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_34398));
});})(seq__34394,chunk__34395,count__34396,i__34397,i_34398,item))
);

var G__34399 = seq__34394;
var G__34400 = chunk__34395;
var G__34401 = count__34396;
var G__34402 = (i__34397 + (1));
seq__34394 = G__34399;
chunk__34395 = G__34400;
count__34396 = G__34401;
i__34397 = G__34402;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34394);
if(temp__4657__auto__){
var seq__34394__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34394__$1)){
var c__30084__auto__ = cljs.core.chunk_first.call(null,seq__34394__$1);
var G__34403 = cljs.core.chunk_rest.call(null,seq__34394__$1);
var G__34404 = c__30084__auto__;
var G__34405 = cljs.core.count.call(null,c__30084__auto__);
var G__34406 = (0);
seq__34394 = G__34403;
chunk__34395 = G__34404;
count__34396 = G__34405;
i__34397 = G__34406;
continue;
} else {
var item = cljs.core.first.call(null,seq__34394__$1);
var i_34407 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__34394,chunk__34395,count__34396,i__34397,i_34407,item,seq__34394__$1,temp__4657__auto__){
return (function (s){
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,s,untangled.client.impl.data_fetch.data_path.call(null,i_34407),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_34407], null)),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_34407));
});})(seq__34394,chunk__34395,count__34396,i__34397,i_34407,item,seq__34394__$1,temp__4657__auto__))
);

var G__34408 = cljs.core.next.call(null,seq__34394__$1);
var G__34409 = null;
var G__34410 = (0);
var G__34411 = (0);
seq__34394 = G__34408;
chunk__34395 = G__34409;
count__34396 = G__34410;
i__34397 = G__34411;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and return maps with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `callback-args` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
untangled.client.impl.data_fetch.mark_parallel_loading = (function untangled$client$impl$data_fetch$mark_parallel_loading(reconciler){
var state = om.next.app_state.call(null,reconciler);
var queued_items = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824));
var items_to_load = cljs.core.filter.call(null,new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292),queued_items);
if(cljs.core.empty_QMARK_.call(null,items_to_load)){
return null;
} else {
untangled.client.impl.data_fetch.place_load_markers.call(null,state,items_to_load);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),true,new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292)),queued_items));

var iter__30053__auto__ = ((function (state,queued_items,items_to_load){
return (function untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__34416(s__34417){
return (new cljs.core.LazySeq(null,((function (state,queued_items,items_to_load){
return (function (){
var s__34417__$1 = s__34417;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34417__$1);
if(temp__4657__auto__){
var s__34417__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34417__$2)){
var c__30051__auto__ = cljs.core.chunk_first.call(null,s__34417__$2);
var size__30052__auto__ = cljs.core.count.call(null,c__30051__auto__);
var b__34419 = cljs.core.chunk_buffer.call(null,size__30052__auto__);
if((function (){var i__34418 = (0);
while(true){
if((i__34418 < size__30052__auto__)){
var item = cljs.core._nth.call(null,c__30051__auto__,i__34418);
cljs.core.chunk_append.call(null,b__34419,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"callback-args","callback-args",1117743591),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null));

var G__34420 = (i__34418 + (1));
i__34418 = G__34420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34419),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__34416.call(null,cljs.core.chunk_rest.call(null,s__34417__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34419),null);
}
} else {
var item = cljs.core.first.call(null,s__34417__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"callback-args","callback-args",1117743591),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__34416.call(null,cljs.core.rest.call(null,s__34417__$2)));
}
} else {
return null;
}
break;
}
});})(state,queued_items,items_to_load))
,null,null));
});})(state,queued_items,items_to_load))
;
return iter__30053__auto__.call(null,items_to_load);
}
});
/**
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and returns a map with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `callback-args` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
untangled.client.impl.data_fetch.mark_loading = (function untangled$client$impl$data_fetch$mark_loading(reconciler){
var state = om.next.app_state.call(null,reconciler);
var items_to_load = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824));
if(cljs.core.empty_QMARK_.call(null,items_to_load)){
return null;
} else {
untangled.client.impl.data_fetch.place_load_markers.call(null,state,items_to_load);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),true,new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,items_to_load),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"callback-args","callback-args",1117743591),items_to_load], null);
}
});
untangled.client.impl.data_fetch.valid_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ready","ready",1086465795),null,new cljs.core.Keyword(null,"loading","loading",-737050189),null,new cljs.core.Keyword(null,"failed","failed",-1397425762),null], null), null);
/**
 * This is just a testing function -- using ready-state as public interface and call the
 *   `set-{type}!` functions to change it as needed.
 */
untangled.client.impl.data_fetch.make_data_state = (function untangled$client$impl$data_fetch$make_data_state(var_args){
var args34421 = [];
var len__30343__auto___34424 = arguments.length;
var i__30344__auto___34425 = (0);
while(true){
if((i__30344__auto___34425 < len__30343__auto___34424)){
args34421.push((arguments[i__30344__auto___34425]));

var G__34426 = (i__30344__auto___34425 + (1));
i__30344__auto___34425 = G__34426;
continue;
} else {
}
break;
}

var G__34423 = args34421.length;
switch (G__34423) {
case 1:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34421.length)].join('')));

}
});

untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1 = (function (type){
return untangled.client.impl.data_fetch.make_data_state.call(null,type,cljs.core.PersistentArrayMap.EMPTY);
});

untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2 = (function (type,params){
if(cljs.core.truth_(cljs.core.get.call(null,untangled.client.impl.data_fetch.valid_types,type))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),type,new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151),params], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("INVALID DATA STATE TYPE: "),cljs.core.str(type)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

untangled.client.impl.data_fetch.make_data_state.cljs$lang$maxFixedArity = 2;
/**
 * Get the query for items that are ready to load into the given app state. Can be called any number of times
 *   (side effect free).
 */
untangled.client.impl.data_fetch.get_ready_query = (function untangled$client$impl$data_fetch$get_ready_query(state){
var items_to_load = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824));
if(cljs.core.empty_QMARK_.call(null,items_to_load)){
return null;
} else {
return om.next.impl.parser.expr__GT_ast.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items-to-load","items-to-load",-1811352068),cljs.core.vec.call(null,cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_query,items_to_load))], null));
}
});
/**
 * Remove items from a query (AST) that have a key listed in the elision-set
 */
untangled.client.impl.data_fetch.elide_ast_nodes = (function untangled$client$impl$data_fetch$elide_ast_nodes(p__34429,elision_set){
var map__34432 = p__34429;
var map__34432__$1 = ((((!((map__34432 == null)))?((((map__34432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34432):map__34432);
var ast = map__34432__$1;
var key = cljs.core.get.call(null,map__34432__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.contains_QMARK_.call(null,elision_set,key)){
return null;
} else {
return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (map__34432,map__34432__$1,ast,key){
return (function (c){
return cljs.core.vec.call(null,cljs.core.keep.call(null,((function (map__34432,map__34432__$1,ast,key){
return (function (p1__34428_SHARP_){
return untangled$client$impl$data_fetch$elide_ast_nodes.call(null,p1__34428_SHARP_,elision_set);
});})(map__34432,map__34432__$1,ast,key))
,c));
});})(map__34432,map__34432__$1,ast,key))
);
}
});
/**
 * Inject parameters into elements of the top-level query.
 * 
 *   `params` is a map from keyword (on the query in the AST) to parameter maps. So, given the AST for this query:
 * 
 *   ```
 *   [:a :b :c]
 *   ```
 * 
 *   and a `params` of `{:a {:x 1} :c {:y 2}}` you'll get an AST representing:
 * 
 *   ```
 *   [(:a {:x 1}) :b (:c {:y 2})]
 *   ```
 *   
 */
untangled.client.impl.data_fetch.inject_query_params = (function untangled$client$impl$data_fetch$inject_query_params(ast,params){
var top_level_keys = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
var param_keys = cljs.core.set.call(null,cljs.core.keys.call(null,params));
var unknown_keys = clojure.set.difference.call(null,param_keys,top_level_keys);
if(!(cljs.core.empty_QMARK_.call(null,unknown_keys))){
untangled.client.logging.error.call(null,[cljs.core.str("Error: You attempted to add parameters for "),cljs.core.str(cljs.core.pr_str.call(null,unknown_keys)),cljs.core.str(" to top-level key(s) of "),cljs.core.str(cljs.core.pr_str.call(null,om.next.ast__GT_query.call(null,ast)))].join(''));
} else {
}

return cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),((function (top_level_keys,param_keys,unknown_keys){
return (function (p1__34434_SHARP_){
return cljs.core.map.call(null,((function (top_level_keys,param_keys,unknown_keys){
return (function (c){
var temp__4655__auto__ = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(c));
if(cljs.core.truth_(temp__4655__auto__)){
var new_params = temp__4655__auto__;
return cljs.core.update.call(null,c,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge,new_params);
} else {
return c;
}
});})(top_level_keys,param_keys,unknown_keys))
,p1__34434_SHARP_);
});})(top_level_keys,param_keys,unknown_keys))
);
});
/**
 * Generate a ready-to-load state with all of the necessary details to do
 *   remoting and merging.
 */
untangled.client.impl.data_fetch.ready_state = (function untangled$client$impl$data_fetch$ready_state(var_args){
var args__30350__auto__ = [];
var len__30343__auto___34440 = arguments.length;
var i__30344__auto___34441 = (0);
while(true){
if((i__30344__auto___34441 < len__30343__auto___34440)){
args__30350__auto__.push((arguments[i__30344__auto___34441]));

var G__34442 = (i__30344__auto___34441 + (1));
i__30344__auto___34441 = G__34442;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((0) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((0)),(0),null)):null);
return untangled.client.impl.data_fetch.ready_state.cljs$core$IFn$_invoke$arity$variadic(argseq__30351__auto__);
});

untangled.client.impl.data_fetch.ready_state.cljs$core$IFn$_invoke$arity$variadic = (function (p__34436){
var map__34437 = p__34436;
var map__34437__$1 = ((((!((map__34437 == null)))?((((map__34437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34437):map__34437);
var ident = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var field = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var params = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"params","params",710516235));
var without = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY);
var query = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var post_mutation = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var fallback = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var parallel = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var refresh = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_((function (){var or__29273__auto__ = field;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return query;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You must supply a query or a field/ident pair"),cljs.core.str("\n"),cljs.core.str("(or field query)")].join('')));
}

if(cljs.core.truth_((function (){var or__29273__auto__ = cljs.core.not.call(null,field);
if(or__29273__auto__){
return or__29273__auto__;
} else {
var and__29261__auto__ = field;
if(cljs.core.truth_(and__29261__auto__)){
return om.util.ident_QMARK_.call(null,ident);
} else {
return and__29261__auto__;
}
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Field requires ident"),cljs.core.str("\n"),cljs.core.str("(or (not field) (and field (util/ident? ident)))")].join('')));
}

var old_ast = om.next.query__GT_ast.call(null,query);
var ast = (function (){var G__34439 = old_ast;
var G__34439__$1 = (cljs.core.truth_(cljs.core.not_empty.call(null,without))?untangled.client.impl.data_fetch.elide_ast_nodes.call(null,G__34439,without):G__34439);
if(cljs.core.truth_(params)){
return untangled.client.impl.data_fetch.inject_query_params.call(null,G__34439__$1,params);
} else {
return G__34439__$1;
}
})();
var query_field = cljs.core.first.call(null,query);
var key = (cljs.core.truth_(om.util.join_QMARK_.call(null,query_field))?om.util.join_key.call(null,query_field):query_field);
var query_SINGLEQUOTE_ = om.next.ast__GT_query.call(null,ast);
if((cljs.core.not.call(null,field)) || (cljs.core._EQ_.call(null,field,key))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Component fetch query does not match supplied field."),cljs.core.str("\n"),cljs.core.str("(or (not field) (= field key))")].join('')));
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971),new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292),new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),new cljs.core.Keyword("untangled.client.impl.data-fetch","ident","untangled.client.impl.data-fetch/ident",-550298382),new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829),new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536),new cljs.core.Keyword("untangled.client.impl.data-fetch","refresh","untangled.client.impl.data-fetch/refresh",-1831820519),new cljs.core.Keyword("untangled.client.impl.data-fetch","uuid","untangled.client.impl.data-fetch/uuid",1591853213)],[post_mutation,parallel,new cljs.core.Keyword(null,"ready","ready",1086465795),ident,fallback,query_SINGLEQUOTE_,field,refresh,cljs_uuid_utils.core.uuid_string.call(null,cljs_uuid_utils.core.make_random_squuid.call(null))]);
});

untangled.client.impl.data_fetch.ready_state.cljs$lang$maxFixedArity = (0);

untangled.client.impl.data_fetch.ready_state.cljs$lang$applyTo = (function (seq34435){
return untangled.client.impl.data_fetch.ready_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34435));
});
/**
 * Place a ready-to-load marker into the application state. This should be done from
 *   a mutate function that is abstractly loading something. This is intended for internal use.
 * 
 *   See `load-field` for public API.
 */
untangled.client.impl.data_fetch.mark_ready = (function untangled$client$impl$data_fetch$mark_ready(var_args){
var args__30350__auto__ = [];
var len__30343__auto___34447 = arguments.length;
var i__30344__auto___34448 = (0);
while(true){
if((i__30344__auto___34448 < len__30343__auto___34447)){
args__30350__auto__.push((arguments[i__30344__auto___34448]));

var G__34449 = (i__30344__auto___34448 + (1));
i__30344__auto___34448 = G__34449;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((0) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((0)),(0),null)):null);
return untangled.client.impl.data_fetch.mark_ready.cljs$core$IFn$_invoke$arity$variadic(argseq__30351__auto__);
});

untangled.client.impl.data_fetch.mark_ready.cljs$core$IFn$_invoke$arity$variadic = (function (p__34444){
var map__34445 = p__34444;
var map__34445__$1 = ((((!((map__34445 == null)))?((((map__34445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34445):map__34445);
var query = cljs.core.get.call(null,map__34445__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var refresh = cljs.core.get.call(null,map__34445__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.call(null,map__34445__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var fallback = cljs.core.get.call(null,map__34445__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var params = cljs.core.get.call(null,map__34445__$1,new cljs.core.Keyword(null,"params","params",710516235));
var field = cljs.core.get.call(null,map__34445__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var state = cljs.core.get.call(null,map__34445__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var post_mutation = cljs.core.get.call(null,map__34445__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.call(null,map__34445__$1,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY);
var ident = cljs.core.get.call(null,map__34445__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824),cljs.core.conj,untangled.client.impl.data_fetch.ready_state.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),ident,new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),parallel,new cljs.core.Keyword(null,"refresh","refresh",1947415525),refresh,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"without","without",1107036688),without,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),post_mutation,new cljs.core.Keyword(null,"fallback","fallback",761637929),fallback));
});

untangled.client.impl.data_fetch.mark_ready.cljs$lang$maxFixedArity = (0);

untangled.client.impl.data_fetch.mark_ready.cljs$lang$applyTo = (function (seq34443){
return untangled.client.impl.data_fetch.mark_ready.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34443));
});
untangled.client.impl.data_fetch.data_ident = (function untangled$client$impl$data_fetch$data_ident(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","ident","untangled.client.impl.data-fetch/ident",-550298382).cljs$core$IFn$_invoke$arity$1(state);
});
untangled.client.impl.data_fetch.data_query = (function untangled$client$impl$data_fetch$data_query(state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_ident.call(null,state))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([untangled.client.impl.data_fetch.data_ident.call(null,state),new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state)], true, false)], null);
} else {
return new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state);
}
});
untangled.client.impl.data_fetch.data_field = (function untangled$client$impl$data_fetch$data_field(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(state);
});
untangled.client.impl.data_fetch.data_uuid = (function untangled$client$impl$data_fetch$data_uuid(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","uuid","untangled.client.impl.data-fetch/uuid",1591853213).cljs$core$IFn$_invoke$arity$1(state);
});
untangled.client.impl.data_fetch.data_refresh = (function untangled$client$impl$data_fetch$data_refresh(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","refresh","untangled.client.impl.data-fetch/refresh",-1831820519).cljs$core$IFn$_invoke$arity$1(state);
});
untangled.client.impl.data_fetch.data_query_key = (function untangled$client$impl$data_fetch$data_query_key(state){
var expr = cljs.core.first.call(null,new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state));
var key = (((expr instanceof cljs.core.Keyword))?expr:((cljs.core.map_QMARK_.call(null,expr))?cljs.core.ffirst.call(null,expr):null));
return key;
});
untangled.client.impl.data_fetch.data_path = (function untangled$client$impl$data_fetch$data_path(state){
if(((untangled.client.impl.data_fetch.data_ident.call(null,state) == null)) && ((untangled.client.impl.data_fetch.data_field.call(null,state) == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,state)], null);
} else {
return cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_ident.call(null,state),untangled.client.impl.data_fetch.data_field.call(null,state));
}
});
untangled.client.impl.data_fetch.data_params = (function untangled$client$impl$data_fetch$data_params(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151).cljs$core$IFn$_invoke$arity$1(state);
});
untangled.client.impl.data_fetch.data_exclusions = (function untangled$client$impl$data_fetch$data_exclusions(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","without","untangled.client.impl.data-fetch/without",716864332).cljs$core$IFn$_invoke$arity$1(state);
});
var set_type = (function untangled$client$impl$data_fetch$set_type(state,type,params){
return cljs.core.merge.call(null,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),type,new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151),params], null));
});
untangled.client.impl.data_fetch.set_ready_BANG_ = (function untangled$client$impl$data_fetch$set_ready_BANG_(var_args){
var args34450 = [];
var len__30343__auto___34459 = arguments.length;
var i__30344__auto___34460 = (0);
while(true){
if((i__30344__auto___34460 < len__30343__auto___34459)){
args34450.push((arguments[i__30344__auto___34460]));

var G__34461 = (i__30344__auto___34460 + (1));
i__30344__auto___34460 = G__34461;
continue;
} else {
}
break;
}

var G__34452 = args34450.length;
switch (G__34452) {
case 1:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34450.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_ready_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type.call(null,state,new cljs.core.Keyword(null,"ready","ready",1086465795),params);
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Sets a marker to loading, ensuring that it has a UUID
 */
untangled.client.impl.data_fetch.set_loading_BANG_ = (function untangled$client$impl$data_fetch$set_loading_BANG_(var_args){
var args34453 = [];
var len__30343__auto___34463 = arguments.length;
var i__30344__auto___34464 = (0);
while(true){
if((i__30344__auto___34464 < len__30343__auto___34463)){
args34453.push((arguments[i__30344__auto___34464]));

var G__34465 = (i__30344__auto___34464 + (1));
i__30344__auto___34464 = G__34465;
continue;
} else {
}
break;
}

var G__34455 = args34453.length;
switch (G__34455) {
case 1:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34453.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_loading_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
var rv = set_type.call(null,state,new cljs.core.Keyword(null,"loading","loading",-737050189),params);
return cljs.core.with_meta.call(null,rv,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),rv], null));
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$lang$maxFixedArity = 2;

untangled.client.impl.data_fetch.set_failed_BANG_ = (function untangled$client$impl$data_fetch$set_failed_BANG_(var_args){
var args34456 = [];
var len__30343__auto___34467 = arguments.length;
var i__30344__auto___34468 = (0);
while(true){
if((i__30344__auto___34468 < len__30343__auto___34467)){
args34456.push((arguments[i__30344__auto___34468]));

var G__34469 = (i__30344__auto___34468 + (1));
i__30344__auto___34468 = G__34469;
continue;
} else {
}
break;
}

var G__34458 = args34456.length;
switch (G__34458) {
case 1:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34456.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_failed_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type.call(null,state,new cljs.core.Keyword(null,"failed","failed",-1397425762),params);
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Compose together a sequence of states into a single query.
 */
untangled.client.impl.data_fetch.full_query = (function untangled$client$impl$data_fetch$full_query(items){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (item){
return untangled.client.impl.data_fetch.data_query.call(null,item);
}),items));
});
untangled.client.impl.data_fetch.set_global_loading = (function untangled$client$impl$data_fetch$set_global_loading(reconciler){

var state_atom = om.next.app_state.call(null,reconciler);
var loading_QMARK_ = cljs.core.boolean$.call(null,cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state_atom),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825))));
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),loading_QMARK_);
});
untangled.client.impl.data_fetch.loaded_callback = (function untangled$client$impl$data_fetch$loaded_callback(reconciler){
return (function (response,items){
var query = untangled.client.impl.data_fetch.full_query.call(null,items);
var loading_items = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,untangled.client.impl.data_fetch.set_loading_BANG_,items));
var refresh_set = cljs.core.into.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),null], null), null),cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_refresh,items));
var to_refresh = cljs.core.vec.call(null,refresh_set);
var marked_response = untangled.client.impl.om_plumbing.mark_missing.call(null,response,query);
var app_state = om.next.app_state.call(null,reconciler);
var ran_mutations = cljs.core.atom.call(null,false);
var remove_markers = ((function (query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (){
var seq__34481 = cljs.core.seq.call(null,loading_items);
var chunk__34482 = null;
var count__34483 = (0);
var i__34484 = (0);
while(true){
if((i__34484 < count__34483)){
var item = cljs.core._nth.call(null,chunk__34482,i__34484);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__34481,chunk__34482,count__34483,i__34484,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
return cljs.core.assoc_in.call(null,cljs.core.update.call(null,s,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item)),untangled.client.impl.data_fetch.data_path.call(null,item),null);
});})(seq__34481,chunk__34482,count__34483,i__34484,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__34491 = seq__34481;
var G__34492 = chunk__34482;
var G__34493 = count__34483;
var G__34494 = (i__34484 + (1));
seq__34481 = G__34491;
chunk__34482 = G__34492;
count__34483 = G__34493;
i__34484 = G__34494;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34481);
if(temp__4657__auto__){
var seq__34481__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34481__$1)){
var c__30084__auto__ = cljs.core.chunk_first.call(null,seq__34481__$1);
var G__34495 = cljs.core.chunk_rest.call(null,seq__34481__$1);
var G__34496 = c__30084__auto__;
var G__34497 = cljs.core.count.call(null,c__30084__auto__);
var G__34498 = (0);
seq__34481 = G__34495;
chunk__34482 = G__34496;
count__34483 = G__34497;
i__34484 = G__34498;
continue;
} else {
var item = cljs.core.first.call(null,seq__34481__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__34481,chunk__34482,count__34483,i__34484,item,seq__34481__$1,temp__4657__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
return cljs.core.assoc_in.call(null,cljs.core.update.call(null,s,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item)),untangled.client.impl.data_fetch.data_path.call(null,item),null);
});})(seq__34481,chunk__34482,count__34483,i__34484,item,seq__34481__$1,temp__4657__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__34499 = cljs.core.next.call(null,seq__34481__$1);
var G__34500 = null;
var G__34501 = (0);
var G__34502 = (0);
seq__34481 = G__34499;
chunk__34482 = G__34500;
count__34483 = G__34501;
i__34484 = G__34502;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
;
var run_post_mutations = ((function (query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations,remove_markers){
return (function (){
var seq__34485 = cljs.core.seq.call(null,loading_items);
var chunk__34486 = null;
var count__34487 = (0);
var i__34488 = (0);
while(true){
if((i__34488 < count__34487)){
var item = cljs.core._nth.call(null,chunk__34486,i__34488);
var temp__4657__auto___34503 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4657__auto___34503)){
var mutation_symbol_34504 = temp__4657__auto___34503;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var G__34489_34505 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_34504,cljs.core.PersistentArrayMap.EMPTY);
var G__34489_34506__$1 = (((G__34489_34505 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__34489_34505));
if((G__34489_34506__$1 == null)){
} else {
cljs.core.apply.call(null,G__34489_34506__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__34507 = seq__34485;
var G__34508 = chunk__34486;
var G__34509 = count__34487;
var G__34510 = (i__34488 + (1));
seq__34485 = G__34507;
chunk__34486 = G__34508;
count__34487 = G__34509;
i__34488 = G__34510;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34485);
if(temp__4657__auto__){
var seq__34485__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34485__$1)){
var c__30084__auto__ = cljs.core.chunk_first.call(null,seq__34485__$1);
var G__34511 = cljs.core.chunk_rest.call(null,seq__34485__$1);
var G__34512 = c__30084__auto__;
var G__34513 = cljs.core.count.call(null,c__30084__auto__);
var G__34514 = (0);
seq__34485 = G__34511;
chunk__34486 = G__34512;
count__34487 = G__34513;
i__34488 = G__34514;
continue;
} else {
var item = cljs.core.first.call(null,seq__34485__$1);
var temp__4657__auto___34515__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4657__auto___34515__$1)){
var mutation_symbol_34516 = temp__4657__auto___34515__$1;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var G__34490_34517 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_34516,cljs.core.PersistentArrayMap.EMPTY);
var G__34490_34518__$1 = (((G__34490_34517 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__34490_34517));
if((G__34490_34518__$1 == null)){
} else {
cljs.core.apply.call(null,G__34490_34518__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__34519 = cljs.core.next.call(null,seq__34485__$1);
var G__34520 = null;
var G__34521 = (0);
var G__34522 = (0);
seq__34485 = G__34519;
chunk__34486 = G__34520;
count__34487 = G__34521;
i__34488 = G__34522;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations,remove_markers))
;
remove_markers.call(null);

om.next.merge_BANG_.call(null,reconciler,marked_response,query);

run_post_mutations.call(null);

untangled.client.impl.data_fetch.set_global_loading.call(null,reconciler);

if(cljs.core.contains_QMARK_.call(null,refresh_set,new cljs.core.Keyword("untangled","force-root","untangled/force-root",513707319))){
return untangled.dom.force_render.call(null,reconciler);
} else {
return untangled.dom.force_render.call(null,reconciler,to_refresh);
}
});
});
untangled.client.impl.data_fetch.error_callback = (function untangled$client$impl$data_fetch$error_callback(reconciler){
return (function (error,items){
var loading_items = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,untangled.client.impl.data_fetch.set_loading_BANG_,items));
var app_state = om.next.app_state.call(null,reconciler);
var refresh_set = cljs.core.into.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),null], null), null),cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_refresh,items));
var to_refresh = cljs.core.vec.call(null,refresh_set);
var ran_fallbacks = cljs.core.atom.call(null,false);
var mark_errors = ((function (loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword("untangled","server-error","untangled/server-error",1542377811),error);

var seq__34533 = cljs.core.seq.call(null,loading_items);
var chunk__34534 = null;
var count__34535 = (0);
var i__34536 = (0);
while(true){
if((i__34536 < count__34535)){
var item = cljs.core._nth.call(null,chunk__34534,i__34536);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__34533,chunk__34534,count__34535,i__34536,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
return cljs.core.update_in.call(null,cljs.core.update.call(null,s,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item)),untangled.client.impl.data_fetch.data_path.call(null,item),untangled.client.impl.data_fetch.set_failed_BANG_,error);
});})(seq__34533,chunk__34534,count__34535,i__34536,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__34543 = seq__34533;
var G__34544 = chunk__34534;
var G__34545 = count__34535;
var G__34546 = (i__34536 + (1));
seq__34533 = G__34543;
chunk__34534 = G__34544;
count__34535 = G__34545;
i__34536 = G__34546;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34533);
if(temp__4657__auto__){
var seq__34533__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34533__$1)){
var c__30084__auto__ = cljs.core.chunk_first.call(null,seq__34533__$1);
var G__34547 = cljs.core.chunk_rest.call(null,seq__34533__$1);
var G__34548 = c__30084__auto__;
var G__34549 = cljs.core.count.call(null,c__30084__auto__);
var G__34550 = (0);
seq__34533 = G__34547;
chunk__34534 = G__34548;
count__34535 = G__34549;
i__34536 = G__34550;
continue;
} else {
var item = cljs.core.first.call(null,seq__34533__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__34533,chunk__34534,count__34535,i__34536,item,seq__34533__$1,temp__4657__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
return cljs.core.update_in.call(null,cljs.core.update.call(null,s,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item)),untangled.client.impl.data_fetch.data_path.call(null,item),untangled.client.impl.data_fetch.set_failed_BANG_,error);
});})(seq__34533,chunk__34534,count__34535,i__34536,item,seq__34533__$1,temp__4657__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__34551 = cljs.core.next.call(null,seq__34533__$1);
var G__34552 = null;
var G__34553 = (0);
var G__34554 = (0);
seq__34533 = G__34551;
chunk__34534 = G__34552;
count__34535 = G__34553;
i__34536 = G__34554;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
;
var run_fallbacks = ((function (loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,mark_errors){
return (function (){
var seq__34537 = cljs.core.seq.call(null,loading_items);
var chunk__34538 = null;
var count__34539 = (0);
var i__34540 = (0);
while(true){
if((i__34540 < count__34539)){
var item = cljs.core._nth.call(null,chunk__34538,i__34540);
var temp__4657__auto___34555 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4657__auto___34555)){
var fallback_symbol_34556 = temp__4657__auto___34555;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__34541_34557 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_34556,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__34541_34558__$1 = (((G__34541_34557 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__34541_34557));
if((G__34541_34558__$1 == null)){
} else {
cljs.core.apply.call(null,G__34541_34558__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__34559 = seq__34537;
var G__34560 = chunk__34538;
var G__34561 = count__34539;
var G__34562 = (i__34540 + (1));
seq__34537 = G__34559;
chunk__34538 = G__34560;
count__34539 = G__34561;
i__34540 = G__34562;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34537);
if(temp__4657__auto__){
var seq__34537__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34537__$1)){
var c__30084__auto__ = cljs.core.chunk_first.call(null,seq__34537__$1);
var G__34563 = cljs.core.chunk_rest.call(null,seq__34537__$1);
var G__34564 = c__30084__auto__;
var G__34565 = cljs.core.count.call(null,c__30084__auto__);
var G__34566 = (0);
seq__34537 = G__34563;
chunk__34538 = G__34564;
count__34539 = G__34565;
i__34540 = G__34566;
continue;
} else {
var item = cljs.core.first.call(null,seq__34537__$1);
var temp__4657__auto___34567__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4657__auto___34567__$1)){
var fallback_symbol_34568 = temp__4657__auto___34567__$1;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__34542_34569 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_34568,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__34542_34570__$1 = (((G__34542_34569 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__34542_34569));
if((G__34542_34570__$1 == null)){
} else {
cljs.core.apply.call(null,G__34542_34570__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__34571 = cljs.core.next.call(null,seq__34537__$1);
var G__34572 = null;
var G__34573 = (0);
var G__34574 = (0);
seq__34537 = G__34571;
chunk__34538 = G__34572;
count__34539 = G__34573;
i__34540 = G__34574;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,mark_errors))
;
mark_errors.call(null);

om.next.merge_BANG_.call(null,reconciler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null)], null));

run_fallbacks.call(null);

untangled.client.impl.data_fetch.set_global_loading.call(null,reconciler);

if(cljs.core.contains_QMARK_.call(null,refresh_set,new cljs.core.Keyword("untangled","force-root","untangled/force-root",513707319))){
return untangled.dom.force_render.call(null,reconciler);
} else {
return untangled.dom.force_render.call(null,reconciler,to_refresh);
}
});
});

//# sourceMappingURL=data_fetch.js.map?rel=1465505599592