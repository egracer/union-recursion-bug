// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.dom');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
goog.require('untangled.client.logging');
goog.require('om.next.protocols');
goog.require('om.next');
goog.require('clojure.string');
/**
 * Get a unique string-based key. Never returns the same value.
 */
untangled.dom.unique_key = (function untangled$dom$unique_key(){
return cljs_uuid_utils.core.uuid_string.call(null,cljs_uuid_utils.core.make_random_squuid.call(null));
});
/**
 * Re-render components. If only a reconciler is supplied then it forces a full DOM re-render by updating the :ui/react-key
 *   in app state and forcing Om to re-render the entire DOM, which only works properly if you query
 *   for :ui/react-key in your Root render component and add that as the react :key to your top-level element.
 * 
 *   If you supply an additional vector of keywords and idents then it will ask Om to rerender only those components that mention
 *   those things in their queries.
 */
untangled.dom.force_render = (function untangled$dom$force_render(var_args){
var args34360 = [];
var len__30343__auto___34363 = arguments.length;
var i__30344__auto___34364 = (0);
while(true){
if((i__30344__auto___34364 < len__30343__auto___34363)){
args34360.push((arguments[i__30344__auto___34364]));

var G__34365 = (i__30344__auto___34364 + (1));
i__30344__auto___34364 = G__34365;
continue;
} else {
}
break;
}

var G__34362 = args34360.length;
switch (G__34362) {
case 2:
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34360.length)].join('')));

}
});

untangled.dom.force_render.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,keywords){
om.next.protocols.queue_BANG_.call(null,reconciler,keywords);

return om.next.protocols.schedule_render_BANG_.call(null,reconciler);
});

untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1 = (function (reconciler){
var app_state = om.next.app_state.call(null,reconciler);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));

return om.next.force_root_render_BANG_.call(null,reconciler);
});

untangled.dom.force_render.cljs$lang$maxFixedArity = 2;
/**
 * Given a component and a local state key or keys, to be passed to `om/get-state`,
 *   returns a function that takes the `state-value` to test, a `default-class-string`,
 *   and optionaol `:when-true` and `:when-false`. The values `:when-false` and `when-true`
 *   are appended to `default-class-string` after the test against `state-value`.
 * 
 *   Parameters:
 *   `component`: The component to pass to `om/get-state`.
 *   `local-state-key`: The key or keys to pass to `om/get-state`.
 */
untangled.dom.append_class = (function untangled$dom$append_class(component,local_state_key){
return (function() { 
var G__34373__delegate = function (state_key,default_class_string,p__34370){
var map__34371 = p__34370;
var map__34371__$1 = ((((!((map__34371 == null)))?((((map__34371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34371):map__34371);
var when_true = cljs.core.get.call(null,map__34371__$1,new cljs.core.Keyword(null,"when-true","when-true",-657079170),"active");
var when_false = cljs.core.get.call(null,map__34371__$1,new cljs.core.Keyword(null,"when-false","when-false",815014297),"");
var append_string = ((cljs.core._EQ_.call(null,state_key,om.next.get_state.call(null,component,local_state_key)))?when_true:when_false);
return [cljs.core.str(default_class_string),cljs.core.str(" "),cljs.core.str(append_string)].join('');
};
var G__34373 = function (state_key,default_class_string,var_args){
var p__34370 = null;
if (arguments.length > 2) {
var G__34374__i = 0, G__34374__a = new Array(arguments.length -  2);
while (G__34374__i < G__34374__a.length) {G__34374__a[G__34374__i] = arguments[G__34374__i + 2]; ++G__34374__i;}
  p__34370 = new cljs.core.IndexedSeq(G__34374__a,0);
} 
return G__34373__delegate.call(this,state_key,default_class_string,p__34370);};
G__34373.cljs$lang$maxFixedArity = 2;
G__34373.cljs$lang$applyTo = (function (arglist__34375){
var state_key = cljs.core.first(arglist__34375);
arglist__34375 = cljs.core.next(arglist__34375);
var default_class_string = cljs.core.first(arglist__34375);
var p__34370 = cljs.core.rest(arglist__34375);
return G__34373__delegate(state_key,default_class_string,p__34370);
});
G__34373.cljs$core$IFn$_invoke$arity$variadic = G__34373__delegate;
return G__34373;
})()
;
});
/**
 * Adds the 'visible' class and removes the 'hidden' class to the pre-supplied class string based on the truthiness
 *   of the value in data at key.
 * 
 *   Parameters:
 *   `data`: A map containing the component's state.
 *   `key`: A key within `data`.
 *   `always-classes`: A string that has the CSS classes to always return in the returned string.
 * 
 *   Optional named parameters:
 * 
 *   `:when-true v` : This string to add when the key's value is true. Defaults to "active".
 *   `:when-false v` : The string to add when the key's value is false. Defaults to "".
 *   
 */
untangled.dom.toggle_class = (function untangled$dom$toggle_class(var_args){
var args__30350__auto__ = [];
var len__30343__auto___34383 = arguments.length;
var i__30344__auto___34384 = (0);
while(true){
if((i__30344__auto___34384 < len__30343__auto___34383)){
args__30350__auto__.push((arguments[i__30344__auto___34384]));

var G__34385 = (i__30344__auto___34384 + (1));
i__30344__auto___34384 = G__34385;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((3) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((3)),(0),null)):null);
return untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30351__auto__);
});

untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic = (function (data,key,always_classes,p__34380){
var map__34381 = p__34380;
var map__34381__$1 = ((((!((map__34381 == null)))?((((map__34381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34381):map__34381);
var when_true = cljs.core.get.call(null,map__34381__$1,new cljs.core.Keyword(null,"when-true","when-true",-657079170),"active");
var when_false = cljs.core.get.call(null,map__34381__$1,new cljs.core.Keyword(null,"when-false","when-false",815014297),"");
if(cljs.core.truth_(cljs.core.get.call(null,data,key))){
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [always_classes,when_true], null));
} else {
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [always_classes,when_false], null));
}
});

untangled.dom.toggle_class.cljs$lang$maxFixedArity = (3);

untangled.dom.toggle_class.cljs$lang$applyTo = (function (seq34376){
var G__34377 = cljs.core.first.call(null,seq34376);
var seq34376__$1 = cljs.core.next.call(null,seq34376);
var G__34378 = cljs.core.first.call(null,seq34376__$1);
var seq34376__$2 = cljs.core.next.call(null,seq34376__$1);
var G__34379 = cljs.core.first.call(null,seq34376__$2);
var seq34376__$3 = cljs.core.next.call(null,seq34376__$2);
return untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic(G__34377,G__34378,G__34379,seq34376__$3);
});
/**
 * Returns the text value from an input change event.
 */
untangled.dom.text_value = (function untangled$dom$text_value(evt){
try{return evt.target.value;
}catch (e34387){if((e34387 instanceof Object)){
var e = e34387;
return untangled.client.logging.warn.call(null,"Event had no target when trying to pull text");
} else {
throw e34387;

}
}});

//# sourceMappingURL=dom.js.map?rel=1465505599409