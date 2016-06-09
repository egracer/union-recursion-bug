// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.user');
goog.require('cljs.core');
goog.require('untangled.client.logging');
goog.require('untangled.client.core');
goog.require('devtools.core');
goog.require('cljs.pprint');
goog.require('app.ui');
goog.require('app.core');
cljs.core.enable_console_print_BANG_.call(null);
devtools.core.enable_feature_BANG_.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858));
devtools.core.install_BANG_.call(null);
cljs.core.reset_BANG_.call(null,app.core.app,untangled.client.core.mount.call(null,cljs.core.deref.call(null,app.core.app),app.ui.Root,"app"));
/**
 * Helper for logging the app-state, pass in top-level keywords from the app-state and it will print only those
 *   keys and their values.
 */
cljs.user.log_app_state = (function cljs$user$log_app_state(var_args){
var args__30350__auto__ = [];
var len__30343__auto___35518 = arguments.length;
var i__30344__auto___35519 = (0);
while(true){
if((i__30344__auto___35519 < len__30343__auto___35518)){
args__30350__auto__.push((arguments[i__30344__auto___35519]));

var G__35520 = (i__30344__auto___35519 + (1));
i__30344__auto___35519 = G__35520;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((0) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((0)),(0),null)):null);
return cljs.user.log_app_state.cljs$core$IFn$_invoke$arity$variadic(argseq__30351__auto__);
});

cljs.user.log_app_state.cljs$core$IFn$_invoke$arity$variadic = (function (keywords){
return cljs.pprint.pprint.call(null,(function (){var app_state = cljs.core.deref.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.app)));
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,keywords))){
return app_state;
} else {
return cljs.core.select_keys.call(null,app_state,keywords);
}
})());
});

cljs.user.log_app_state.cljs$lang$maxFixedArity = (0);

cljs.user.log_app_state.cljs$lang$applyTo = (function (seq35517){
return cljs.user.log_app_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35517));
});

//# sourceMappingURL=user.js.map?rel=1465505618055