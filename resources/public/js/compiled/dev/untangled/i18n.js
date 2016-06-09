// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.i18n');
goog.require('cljs.core');
goog.require('untangled.i18n.core');
goog.require('untangled.client.logging');
untangled.i18n.current_locale = (function untangled$i18n$current_locale(){
return cljs.core.deref.call(null,untangled.i18n.core._STAR_current_locale_STAR_);
});
untangled.i18n.translations_for_locale = (function untangled$i18n$translations_for_locale(){
return cljs.core.get.call(null,cljs.core.deref.call(null,untangled.i18n.core._STAR_loaded_translations_STAR_),untangled.i18n.current_locale.call(null));
});
tr = (function (msg){
var msg_key = [cljs.core.str("|"),cljs.core.str(msg)].join('');
var translations = untangled.i18n.translations_for_locale.call(null);
var translation = cljs.core.get.call(null,translations,msg_key,msg);
return translation;
});
trc = (function (ctxt,msg){
var msg_key = [cljs.core.str(ctxt),cljs.core.str("|"),cljs.core.str(msg)].join('');
var translations = untangled.i18n.translations_for_locale.call(null);
var translation = cljs.core.get.call(null,translations,msg_key,msg);
return translation;
});
trf = (function() { 
var G__34264__delegate = function (fmt,p__34260){
var map__34261 = p__34260;
var map__34261__$1 = ((((!((map__34261 == null)))?((((map__34261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34261):map__34261);
var argmap = map__34261__$1;
try{var msg_key = [cljs.core.str("|"),cljs.core.str(fmt)].join('');
var translations = untangled.i18n.translations_for_locale.call(null);
var translation = cljs.core.get.call(null,translations,msg_key,fmt);
var formatter = (new IntlMessageFormat(translation,untangled.i18n.current_locale.call(null)));
return formatter.format(cljs.core.clj__GT_js.call(null,argmap));
}catch (e34263){var e = e34263;
untangled.client.logging.error.call(null,"Failed to format ",fmt," args: ",argmap," exception: ",e);

return "???";
}};
var G__34264 = function (fmt,var_args){
var p__34260 = null;
if (arguments.length > 1) {
var G__34265__i = 0, G__34265__a = new Array(arguments.length -  1);
while (G__34265__i < G__34265__a.length) {G__34265__a[G__34265__i] = arguments[G__34265__i + 1]; ++G__34265__i;}
  p__34260 = new cljs.core.IndexedSeq(G__34265__a,0);
} 
return G__34264__delegate.call(this,fmt,p__34260);};
G__34264.cljs$lang$maxFixedArity = 1;
G__34264.cljs$lang$applyTo = (function (arglist__34266){
var fmt = cljs.core.first(arglist__34266);
var p__34260 = cljs.core.rest(arglist__34266);
return G__34264__delegate(fmt,p__34260);
});
G__34264.cljs$core$IFn$_invoke$arity$variadic = G__34264__delegate;
return G__34264;
})()
;

//# sourceMappingURL=i18n.js.map?rel=1465505599177