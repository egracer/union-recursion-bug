// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.data_fetch');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('om.next');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.i18n');
goog.require('om.dom');
/**
 * Load a field of the current component. Runs `om/transact!`.
 * 
 *   Parameters
 *   - `component`: The component
 *   - `field`: A field on the current component's query that you wish to load
 *   - `without`: Named parameter for excluding child keys from the query (e.g. for recursive queries or additional laziness)
 *   - `params`: Named parameter for adding params to the query sent to the server for this field.
 *   - `post-mutation`: A mutation (symbol) invoked after the load succeeds.
 *   - `parallel`: Boolean to indicate that this load should happen in the parallel on the server (non-blocking load). Any loads marked this way will happen in parallel.
 *   - `fallback`: A mutation (symbol) invoked after the load fails. App state is in env, server error in the params under :error.
 *   - `refresh`: A vector of keywords indicating data that will be changing. If any of the listed keywords are queried by on-screen
 *  components, then those components will be re-rendered after the load has finished and post mutations have run. Note
 *  that for load-field the ident of the target component is automatically included, so this parametmer is usually not
 *  needed. If the *special* key `:untangled/force-root` is used in the vector (it must always be a vector), then the entire
 *  app will be re-rendered. This is discouraged since it is highly inefficient and should be easily avoidable. It is mainly included
 *  in case some re-render bug in Om or Untangled pops up and needs a temporary workaround.
 * 
 *   NOTE: The :ui/loading-data attribute is always included in refresh. This means you probably don't want to
 *   query for that attribute near the root of your UI. Instead, create some leaf component with an ident that queries for :ui/loading-data
 *   using an Om link (e.g. `[:ui/loading-data '_]`). The presence of the ident on components will enable query optimization, which can
 *   improve your frame rate because Om will not have to run a full root query.
 *   
 */
untangled.client.data_fetch.load_field = (function untangled$client$data_fetch$load_field(var_args){
var args__30350__auto__ = [];
var len__30343__auto___35074 = arguments.length;
var i__30344__auto___35075 = (0);
while(true){
if((i__30344__auto___35075 < len__30343__auto___35074)){
args__30350__auto__.push((arguments[i__30344__auto___35075]));

var G__35076 = (i__30344__auto___35075 + (1));
i__30344__auto___35075 = G__35076;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((2) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((2)),(0),null)):null);
return untangled.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30351__auto__);
});

untangled.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__35071){
var map__35072 = p__35071;
var map__35072__$1 = ((((!((map__35072 == null)))?((((map__35072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35072):map__35072);
var without = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var params = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"params","params",710516235));
var post_mutation = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var fallback = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var parallel = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var refresh = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
if(cljs.core.truth_(fallback)){
if((fallback instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Fallback must be a mutation symbol."),cljs.core.str("\n"),cljs.core.str("(symbol? fallback)")].join('')));
}
} else {
}

return om.next.transact_BANG_.call(null,component,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,(function (){var x__30107__auto__ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"query","query",-1288509510)],[refresh,parallel,fallback,params,field,post_mutation,without,om.next.get_ident.call(null,component),om.next.focus_query.call(null,om.next.get_query.call(null,component),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null))]);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__30107__auto__);
})(),new cljs.core.Symbol("untangled","load","untangled/load",89075339,null)),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),om.next.get_ident.call(null,component)], null),refresh));
});

untangled.client.data_fetch.load_field.cljs$lang$maxFixedArity = (2);

untangled.client.data_fetch.load_field.cljs$lang$applyTo = (function (seq35068){
var G__35069 = cljs.core.first.call(null,seq35068);
var seq35068__$1 = cljs.core.next.call(null,seq35068);
var G__35070 = cljs.core.first.call(null,seq35068__$1);
var seq35068__$2 = cljs.core.next.call(null,seq35068__$1);
return untangled.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic(G__35069,G__35070,seq35068__$2);
});
/**
 * Load data from the remote. Runs `om/transact!`. See also `load-field`.
 * 
 *   Parameters
 *   - `comp-or-reconciler`: A component or reconciler (not a class)
 *   - `query`: The query for the element(s) attributes. Use defui to generate arbitrary queries so normalization will work.
 *   - Named parameter `ident`: An ident, used if loading a singleton and you wish to specify 'which one'.
 *   - `post-mutation`: A mutation (symbol) invoked after the load succeeds.
 *   - `fallback`: A mutation (symbol) invoked after the load fails. App state is in env, server error is in the params under :error.
 *   - `parallel`: Boolean to indicate that this load should happen in the parallel on the server (non-blocking load). Any loads marked this way will happen in parallel.
 *   - `refresh`: A vector of keywords indicating data that will be changing. If any of the listed keywords are queried by on-screen
 *  components, then those components will be re-rendered after the load has finished and post mutations have run.
 * 
 *   Named parameters `:without` and `:params` are as in `load-field`.
 *   
 */
untangled.client.data_fetch.load_data = (function untangled$client$data_fetch$load_data(var_args){
var args__30350__auto__ = [];
var len__30343__auto___35083 = arguments.length;
var i__30344__auto___35084 = (0);
while(true){
if((i__30344__auto___35084 < len__30343__auto___35083)){
args__30350__auto__.push((arguments[i__30344__auto___35084]));

var G__35085 = (i__30344__auto___35084 + (1));
i__30344__auto___35084 = G__35085;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((2) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((2)),(0),null)):null);
return untangled.client.data_fetch.load_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30351__auto__);
});

untangled.client.data_fetch.load_data.cljs$core$IFn$_invoke$arity$variadic = (function (comp_or_reconciler,query,p__35080){
var map__35081 = p__35080;
var map__35081__$1 = ((((!((map__35081 == null)))?((((map__35081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35081):map__35081);
var ident = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var without = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var params = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"params","params",710516235));
var post_mutation = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var fallback = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var parallel = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var refresh = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(fallback)){
if((fallback instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Fallback must be a mutation symbol."),cljs.core.str("\n"),cljs.core.str("(symbol? fallback)")].join('')));
}
} else {
}

return om.next.transact_BANG_.call(null,comp_or_reconciler,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,(function (){var x__30107__auto__ = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ident","ident",-742346),ident,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"without","without",1107036688),without,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),post_mutation,new cljs.core.Keyword(null,"refresh","refresh",1947415525),refresh,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),parallel,new cljs.core.Keyword(null,"fallback","fallback",761637929),fallback], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__30107__auto__);
})(),new cljs.core.Symbol("untangled","load","untangled/load",89075339,null)),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143)], null),refresh));
});

untangled.client.data_fetch.load_data.cljs$lang$maxFixedArity = (2);

untangled.client.data_fetch.load_data.cljs$lang$applyTo = (function (seq35077){
var G__35078 = cljs.core.first.call(null,seq35077);
var seq35077__$1 = cljs.core.next.call(null,seq35077);
var G__35079 = cljs.core.first.call(null,seq35077__$1);
var seq35077__$2 = cljs.core.next.call(null,seq35077__$1);
return untangled.client.data_fetch.load_data.cljs$core$IFn$_invoke$arity$variadic(G__35078,G__35079,seq35077__$2);
});
/**
 * Queue up a remote load of a component's field from within an already-running mutation. Similar to `load-field`
 *   but usable from within a mutation. Note the `:refresh` parameter is supported, and defaults to nothing, even for
 *   fields, in actions. If you want anything to refresh other than the targeted component you will want to use the
 *   :refresh parameter.
 * 
 *   To use this function make sure your mutation specifies a return value with a remote. The remote
 *   should use the helper function `remote-load` as it's value:
 * 
 *   { :remote (df/remote-load env)
 *  :action (fn []
 *     (load-field-action ...)
 *     ; other optimistic updates/state changes)}
 */
untangled.client.data_fetch.load_field_action = (function untangled$client$data_fetch$load_field_action(var_args){
var args__30350__auto__ = [];
var len__30343__auto___35094 = arguments.length;
var i__30344__auto___35095 = (0);
while(true){
if((i__30344__auto___35095 < len__30343__auto___35094)){
args__30350__auto__.push((arguments[i__30344__auto___35095]));

var G__35096 = (i__30344__auto___35095 + (1));
i__30344__auto___35095 = G__35096;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((4) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((4)),(0),null)):null);
return untangled.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__30351__auto__);
});

untangled.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic = (function (app_state,component_class,ident,field,p__35091){
var map__35092 = p__35091;
var map__35092__$1 = ((((!((map__35092 == null)))?((((map__35092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35092):map__35092);
var without = cljs.core.get.call(null,map__35092__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var params = cljs.core.get.call(null,map__35092__$1,new cljs.core.Keyword(null,"params","params",710516235));
var post_mutation = cljs.core.get.call(null,map__35092__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var fallback = cljs.core.get.call(null,map__35092__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var parallel = cljs.core.get.call(null,map__35092__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var refresh = cljs.core.get.call(null,map__35092__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
return untangled.client.impl.data_fetch.mark_ready.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),app_state,new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"ident","ident",-742346),ident,new cljs.core.Keyword(null,"query","query",-1288509510),om.next.focus_query.call(null,om.next.get_query.call(null,component_class),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null)),new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"without","without",1107036688),without,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),parallel,new cljs.core.Keyword(null,"refresh","refresh",1947415525),refresh,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),post_mutation,new cljs.core.Keyword(null,"fallback","fallback",761637929),fallback);
});

untangled.client.data_fetch.load_field_action.cljs$lang$maxFixedArity = (4);

untangled.client.data_fetch.load_field_action.cljs$lang$applyTo = (function (seq35086){
var G__35087 = cljs.core.first.call(null,seq35086);
var seq35086__$1 = cljs.core.next.call(null,seq35086);
var G__35088 = cljs.core.first.call(null,seq35086__$1);
var seq35086__$2 = cljs.core.next.call(null,seq35086__$1);
var G__35089 = cljs.core.first.call(null,seq35086__$2);
var seq35086__$3 = cljs.core.next.call(null,seq35086__$2);
var G__35090 = cljs.core.first.call(null,seq35086__$3);
var seq35086__$4 = cljs.core.next.call(null,seq35086__$3);
return untangled.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic(G__35087,G__35088,G__35089,G__35090,seq35086__$4);
});
/**
 * Queue up a remote load from within an already-running mutation. Similar to `load-data`, but usable from
 *   within a mutation.
 * 
 *   Note the `:refresh` parameter is supported, and defaults to empty. If you want anything to refresh other than
 *   the targeted component you will want to include the :refresh parameter.
 * 
 *   To use this function make sure your mutation specifies a return value with a remote. The remote
 *   should use the helper function `remote-load` as it's value:
 * 
 *   { :remote (df/remote-load env)
 *  :action (fn []
 *     (load-data-action ...)
 *     ; other optimistic updates/state changes)}
 */
untangled.client.data_fetch.load_data_action = (function untangled$client$data_fetch$load_data_action(var_args){
var args__30350__auto__ = [];
var len__30343__auto___35103 = arguments.length;
var i__30344__auto___35104 = (0);
while(true){
if((i__30344__auto___35104 < len__30343__auto___35103)){
args__30350__auto__.push((arguments[i__30344__auto___35104]));

var G__35105 = (i__30344__auto___35104 + (1));
i__30344__auto___35104 = G__35105;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((2) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((2)),(0),null)):null);
return untangled.client.data_fetch.load_data_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30351__auto__);
});

untangled.client.data_fetch.load_data_action.cljs$core$IFn$_invoke$arity$variadic = (function (app_state,query,p__35100){
var map__35101 = p__35100;
var map__35101__$1 = ((((!((map__35101 == null)))?((((map__35101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35101):map__35101);
var ident = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var without = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var params = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"params","params",710516235));
var post_mutation = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var fallback = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var parallel = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var refresh = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
return untangled.client.impl.data_fetch.mark_ready.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),app_state,new cljs.core.Keyword(null,"ident","ident",-742346),ident,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"without","without",1107036688),without,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),parallel,new cljs.core.Keyword(null,"refresh","refresh",1947415525),refresh,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),post_mutation,new cljs.core.Keyword(null,"fallback","fallback",761637929),fallback);
});

untangled.client.data_fetch.load_data_action.cljs$lang$maxFixedArity = (2);

untangled.client.data_fetch.load_data_action.cljs$lang$applyTo = (function (seq35097){
var G__35098 = cljs.core.first.call(null,seq35097);
var seq35097__$1 = cljs.core.next.call(null,seq35097);
var G__35099 = cljs.core.first.call(null,seq35097__$1);
var seq35097__$2 = cljs.core.next.call(null,seq35097__$1);
return untangled.client.data_fetch.load_data_action.cljs$core$IFn$_invoke$arity$variadic(G__35098,G__35099,seq35097__$2);
});
/**
 * Returns the correct value for the `:remote` side of a mutation that should act as a
 *   trigger for remote loads. Must be used in conjunction with running `load-data-action` or
 *   `load-data-field` in the `:action` side of the mutation (which queues the exact things to
 *   load).
 */
untangled.client.data_fetch.remote_load = (function untangled$client$data_fetch$remote_load(parsing_env){
var ast = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(parsing_env);
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("untangled","load","untangled/load",89075339,null),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.Symbol("untangled","load","untangled/load",89075339,null));
});
untangled.client.data_fetch.data_state_QMARK_ = (function untangled$client$data_fetch$data_state_QMARK_(state){
return untangled.client.impl.data_fetch.data_state_QMARK_.call(null,state);
});
untangled.client.data_fetch.ready_QMARK_ = (function untangled$client$data_fetch$ready_QMARK_(state){
return untangled.client.impl.data_fetch.ready_QMARK_.call(null,state);
});
untangled.client.data_fetch.loading_QMARK_ = (function untangled$client$data_fetch$loading_QMARK_(state){
return untangled.client.impl.data_fetch.loading_QMARK_.call(null,state);
});
untangled.client.data_fetch.failed_QMARK_ = (function untangled$client$data_fetch$failed_QMARK_(state){
return untangled.client.impl.data_fetch.failed_QMARK_.call(null,state);
});
/**
 * Custom rendering for use while data is being lazily loaded using the data fetch methods
 *   load-collection and load-field.
 * 
 *   `data-render` : the render method to call once the data has been successfully loaded from
 *   the server. Can be an Om factory method or a React rendering function.
 * 
 *   `props` : the React properties for the element to be loaded.
 * 
 *   Optional:
 * 
 *   `ready-render` : the render method to call when the desired data has been marked as ready
 *   to load, but the server request has not yet been sent.
 * 
 *   `loading-render` : render method once the server request has been sent, and UI is waiting
 *   on the response
 * 
 *   `failed-render` : render method when the server returns a failure state for the requested data
 *   ALPHA WARNING: The transfer of read errors to failed data states is not implemented in this alpha version.
 * 
 *   `not-present-render` : called when props is nil (helpful for differentiating between a nil and
 *   empty response from the server).
 * 
 *   Example Usage:
 * 
 *   ```
 *   (defui Thing
 *  static om/IQuery
 *  (query [this] [{:thing2 (om/get-query Thing2)}])
 *  Object
 *  (componentDidMount [this]
 *     (load-field this :thing2))
 * 
 *  (render [this]
 *    (let [thing2 (:thing2 (om/props this))]
 *      (lazily-loaded Thing2 thing2))))
 * 
 *   (defui Thing2
 *  static om/IQuery
 *  (query [this] [:ui/fetch-state])
 *  Object
 *  (render [this]
 *    (display-thing-2))
 *   ```
 */
untangled.client.data_fetch.lazily_loaded = (function untangled$client$data_fetch$lazily_loaded(var_args){
var args__30350__auto__ = [];
var len__30343__auto___35112 = arguments.length;
var i__30344__auto___35113 = (0);
while(true){
if((i__30344__auto___35113 < len__30343__auto___35112)){
args__30350__auto__.push((arguments[i__30344__auto___35113]));

var G__35114 = (i__30344__auto___35113 + (1));
i__30344__auto___35113 = G__35114;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((2) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((2)),(0),null)):null);
return untangled.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30351__auto__);
});

untangled.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic = (function (data_render,props,p__35109){
var map__35110 = p__35109;
var map__35110__$1 = ((((!((map__35110 == null)))?((((map__35110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35110):map__35110);
var ready_render = cljs.core.get.call(null,map__35110__$1,new cljs.core.Keyword(null,"ready-render","ready-render",-1421004936),((function (map__35110,map__35110__$1){
return (function (_){
return React.DOM.div({"className": "lazy-loading-ready"},om.util.force_children.call(null,null));
});})(map__35110,map__35110__$1))
);
var loading_render = cljs.core.get.call(null,map__35110__$1,new cljs.core.Keyword(null,"loading-render","loading-render",-1821208169),((function (map__35110,map__35110__$1,ready_render){
return (function (_){
return React.DOM.div({"className": "lazy-loading-load"},om.util.force_children.call(null,"Loading..."));
});})(map__35110,map__35110__$1,ready_render))
);
var failed_render = cljs.core.get.call(null,map__35110__$1,new cljs.core.Keyword(null,"failed-render","failed-render",-433071277),((function (map__35110,map__35110__$1,ready_render,loading_render){
return (function (_){
return React.DOM.div({"className": "lazy-loading-failed"},om.util.force_children.call(null,null));
});})(map__35110,map__35110__$1,ready_render,loading_render))
);
var not_present_render = cljs.core.get.call(null,map__35110__$1,new cljs.core.Keyword(null,"not-present-render","not-present-render",-946766938));
var state = new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(untangled.client.data_fetch.ready_QMARK_.call(null,state))){
return ready_render.call(null,props);
} else {
if(cljs.core.truth_(untangled.client.data_fetch.loading_QMARK_.call(null,state))){
return loading_render.call(null,props);
} else {
if(cljs.core.truth_(untangled.client.data_fetch.failed_QMARK_.call(null,state))){
return failed_render.call(null,props);
} else {
if(cljs.core.truth_((function (){var and__29261__auto__ = not_present_render;
if(cljs.core.truth_(and__29261__auto__)){
return (props == null);
} else {
return and__29261__auto__;
}
})())){
return not_present_render.call(null,props);
} else {
return data_render.call(null,props);

}
}
}
}
});

untangled.client.data_fetch.lazily_loaded.cljs$lang$maxFixedArity = (2);

untangled.client.data_fetch.lazily_loaded.cljs$lang$applyTo = (function (seq35106){
var G__35107 = cljs.core.first.call(null,seq35106);
var seq35106__$1 = cljs.core.next.call(null,seq35106);
var G__35108 = cljs.core.first.call(null,seq35106__$1);
var seq35106__$2 = cljs.core.next.call(null,seq35106__$1);
return untangled.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic(G__35107,G__35108,seq35106__$2);
});

//# sourceMappingURL=data_fetch.js.map?rel=1465505600068