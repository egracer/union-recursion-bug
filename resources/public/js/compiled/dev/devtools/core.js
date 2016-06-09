// Compiled by ClojureScript 1.8.51 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.sanity_hints');
goog.require('devtools.dirac');
goog.require('devtools.custom_formatters');
goog.require('devtools.util');
goog.require('goog.userAgent');
devtools.core.known_features = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779),new cljs.core.Keyword(null,"install-custom-formatters","install-custom-formatters",-1653731327),new cljs.core.Keyword(null,"dirac","dirac",1785994033),new cljs.core.Keyword(null,"install-dirac-support","install-dirac-support",-949928649),new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858),new cljs.core.Keyword(null,"install-sanity-hints","install-sanity-hints",72546145)], null);
devtools.core.missing_feature_warning = (function devtools$core$missing_feature_warning(feature,known_features){
return [cljs.core.str("No such feature '"),cljs.core.str(feature),cljs.core.str("' is currently available in cljs-devtools. "),cljs.core.str("List of supported features:"),cljs.core.str(cljs.core.keys.call(null,known_features))].join('');
});
devtools.core.warn_feature_not_available = (function devtools$core$warn_feature_not_available(feature){
return console.warn([cljs.core.str("Feature '"),cljs.core.str(cljs.core.name.call(null,feature)),cljs.core.str("' cannot be installed. Unsupported browser "),cljs.core.str(goog.userAgent.getUserAgentString()),cljs.core.str(".")].join(''));
});
devtools.core.install_BANG_ = (function devtools$core$install_BANG_(){
devtools.util.display_banner.call(null,"Installing cljs-devtools:",devtools.core.known_features);

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-custom-formatters","install-custom-formatters",-1653731327)))){
if(cljs.core.truth_(devtools.custom_formatters.available_QMARK_.call(null))){
devtools.custom_formatters.install_BANG_.call(null);
} else {
devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779));
}
} else {
}

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-sanity-hints","install-sanity-hints",72546145)))){
if(cljs.core.truth_(devtools.sanity_hints.available_QMARK_.call(null))){
devtools.sanity_hints.install_BANG_.call(null);
} else {
devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858));
}
} else {
}

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-dirac-support","install-dirac-support",-949928649)))){
if(cljs.core.truth_(devtools.dirac.available_QMARK_.call(null))){
return devtools.dirac.install_BANG_.call(null);
} else {
return devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"dirac","dirac",1785994033));
}
} else {
return null;
}
});
devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.custom_formatters.uninstall_BANG_.call(null);

devtools.sanity_hints.uninstall_BANG_.call(null);

return devtools.dirac.uninstall_BANG_.call(null);
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_.call(null,pref,val);
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(feature,val){
var temp__4655__auto__ = feature.call(null,devtools.core.known_features);
if(cljs.core.truth_(temp__4655__auto__)){
var feature_installation_key = temp__4655__auto__;
return devtools.core.set_pref_BANG_.call(null,feature_installation_key,val);
} else {
return console.warn(devtools.core.missing_feature_warning.call(null,feature,devtools.core.known_features));
}
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(feature){
return devtools.core.set_single_feature_BANG_.call(null,feature,true);
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(feature){
return devtools.core.set_single_feature_BANG_.call(null,feature,false);
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__30350__auto__ = [];
var len__30343__auto___42254 = arguments.length;
var i__30344__auto___42255 = (0);
while(true){
if((i__30344__auto___42255 < len__30343__auto___42254)){
args__30350__auto__.push((arguments[i__30344__auto___42255]));

var G__42256 = (i__30344__auto___42255 + (1));
i__30344__auto___42255 = G__42256;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((0) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__30351__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__42250 = cljs.core.seq.call(null,features);
var chunk__42251 = null;
var count__42252 = (0);
var i__42253 = (0);
while(true){
if((i__42253 < count__42252)){
var feature = cljs.core._nth.call(null,chunk__42251,i__42253);
devtools.core.enable_single_feature_BANG_.call(null,feature);

var G__42257 = seq__42250;
var G__42258 = chunk__42251;
var G__42259 = count__42252;
var G__42260 = (i__42253 + (1));
seq__42250 = G__42257;
chunk__42251 = G__42258;
count__42252 = G__42259;
i__42253 = G__42260;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42250);
if(temp__4657__auto__){
var seq__42250__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42250__$1)){
var c__30084__auto__ = cljs.core.chunk_first.call(null,seq__42250__$1);
var G__42261 = cljs.core.chunk_rest.call(null,seq__42250__$1);
var G__42262 = c__30084__auto__;
var G__42263 = cljs.core.count.call(null,c__30084__auto__);
var G__42264 = (0);
seq__42250 = G__42261;
chunk__42251 = G__42262;
count__42252 = G__42263;
i__42253 = G__42264;
continue;
} else {
var feature = cljs.core.first.call(null,seq__42250__$1);
devtools.core.enable_single_feature_BANG_.call(null,feature);

var G__42265 = cljs.core.next.call(null,seq__42250__$1);
var G__42266 = null;
var G__42267 = (0);
var G__42268 = (0);
seq__42250 = G__42265;
chunk__42251 = G__42266;
count__42252 = G__42267;
i__42253 = G__42268;
continue;
}
} else {
return null;
}
}
break;
}
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq42249){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42249));
});
devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__30350__auto__ = [];
var len__30343__auto___42274 = arguments.length;
var i__30344__auto___42275 = (0);
while(true){
if((i__30344__auto___42275 < len__30343__auto___42274)){
args__30350__auto__.push((arguments[i__30344__auto___42275]));

var G__42276 = (i__30344__auto___42275 + (1));
i__30344__auto___42275 = G__42276;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((0) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__30351__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__42270 = cljs.core.seq.call(null,features);
var chunk__42271 = null;
var count__42272 = (0);
var i__42273 = (0);
while(true){
if((i__42273 < count__42272)){
var feature = cljs.core._nth.call(null,chunk__42271,i__42273);
devtools.core.disable_single_feature_BANG_.call(null,feature);

var G__42277 = seq__42270;
var G__42278 = chunk__42271;
var G__42279 = count__42272;
var G__42280 = (i__42273 + (1));
seq__42270 = G__42277;
chunk__42271 = G__42278;
count__42272 = G__42279;
i__42273 = G__42280;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42270);
if(temp__4657__auto__){
var seq__42270__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42270__$1)){
var c__30084__auto__ = cljs.core.chunk_first.call(null,seq__42270__$1);
var G__42281 = cljs.core.chunk_rest.call(null,seq__42270__$1);
var G__42282 = c__30084__auto__;
var G__42283 = cljs.core.count.call(null,c__30084__auto__);
var G__42284 = (0);
seq__42270 = G__42281;
chunk__42271 = G__42282;
count__42272 = G__42283;
i__42273 = G__42284;
continue;
} else {
var feature = cljs.core.first.call(null,seq__42270__$1);
devtools.core.disable_single_feature_BANG_.call(null,feature);

var G__42285 = cljs.core.next.call(null,seq__42270__$1);
var G__42286 = null;
var G__42287 = (0);
var G__42288 = (0);
seq__42270 = G__42285;
chunk__42271 = G__42286;
count__42272 = G__42287;
i__42273 = G__42288;
continue;
}
} else {
return null;
}
}
break;
}
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq42269){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42269));
});
devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(feature){
var G__42290 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__42290) {
case "custom-formatters":
return devtools.custom_formatters.available_QMARK_.call(null);

break;
case "dirac":
return devtools.dirac.available_QMARK_.call(null);

break;
case "sanity-hints":
return devtools.sanity_hints.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__30350__auto__ = [];
var len__30343__auto___42293 = arguments.length;
var i__30344__auto___42294 = (0);
while(true){
if((i__30344__auto___42294 < len__30343__auto___42293)){
args__30350__auto__.push((arguments[i__30344__auto___42294]));

var G__42295 = (i__30344__auto___42294 + (1));
i__30344__auto___42294 = G__42295;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((0) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__30351__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
return cljs.core.every_QMARK_.call(null,devtools.core.single_feature_available_QMARK_,features);
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq42292){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42292));
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str("devtools.core/enable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str("devtools.core/disable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});

//# sourceMappingURL=core.js.map?rel=1465505516300