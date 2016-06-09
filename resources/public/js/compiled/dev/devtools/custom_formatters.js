// Compiled by ClojureScript 1.8.51 {}
goog.provide('devtools.custom_formatters');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.format');
goog.require('goog.labs.userAgent.browser');
devtools.custom_formatters._STAR_installed_STAR_ = false;
devtools.custom_formatters._STAR_sanitizer_enabled_STAR_ = true;
devtools.custom_formatters._STAR_monitor_enabled_STAR_ = false;
devtools.custom_formatters.formatter_key = "devtoolsFormatters";
devtools.custom_formatters.obsolete_formatter_key = "devtoolsFormatter";
devtools.custom_formatters.available_QMARK_ = (function devtools$custom_formatters$available_QMARK_(){
var and__29261__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__29261__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher((47));
} else {
return and__29261__auto__;
}
});

/**
* @constructor
*/
devtools.custom_formatters.CLJSDevtoolsFormatter = (function (){
})

devtools.custom_formatters.CLJSDevtoolsFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

devtools.custom_formatters.CLJSDevtoolsFormatter.cljs$lang$type = true;

devtools.custom_formatters.CLJSDevtoolsFormatter.cljs$lang$ctorStr = "devtools.custom-formatters/CLJSDevtoolsFormatter";

devtools.custom_formatters.CLJSDevtoolsFormatter.cljs$lang$ctorPrWriter = (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"devtools.custom-formatters/CLJSDevtoolsFormatter");
});

devtools.custom_formatters.__GT_CLJSDevtoolsFormatter = (function devtools$custom_formatters$__GT_CLJSDevtoolsFormatter(){
return (new devtools.custom_formatters.CLJSDevtoolsFormatter());
});

devtools.custom_formatters.find_fn_in_debug_ns = (function devtools$custom_formatters$find_fn_in_debug_ns(fn_name){
try{return (window["devtools"]["debug"][fn_name]);
}catch (e42234){var _ = e42234;
return null;
}});
devtools.custom_formatters.monitor_api_call_if_avail = (function devtools$custom_formatters$monitor_api_call_if_avail(name,api_call,args){
var temp__4655__auto__ = devtools.custom_formatters.find_fn_in_debug_ns.call(null,"monitor_api_call");
if(cljs.core.truth_(temp__4655__auto__)){
var monitor_api_call = temp__4655__auto__;
return monitor_api_call.call(null,name,api_call,args);
} else {
return cljs.core.apply.call(null,api_call,args);
}
});
devtools.custom_formatters.log_exception_if_avail = (function devtools$custom_formatters$log_exception_if_avail(var_args){
var args__30350__auto__ = [];
var len__30343__auto___42236 = arguments.length;
var i__30344__auto___42237 = (0);
while(true){
if((i__30344__auto___42237 < len__30343__auto___42236)){
args__30350__auto__.push((arguments[i__30344__auto___42237]));

var G__42238 = (i__30344__auto___42237 + (1));
i__30344__auto___42237 = G__42238;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((0) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((0)),(0),null)):null);
return devtools.custom_formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(argseq__30351__auto__);
});

devtools.custom_formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var temp__4655__auto__ = devtools.custom_formatters.find_fn_in_debug_ns.call(null,"log_exception");
if(cljs.core.truth_(temp__4655__auto__)){
var log_exception = temp__4655__auto__;
return cljs.core.apply.call(null,log_exception,args);
} else {
return null;
}
});

devtools.custom_formatters.log_exception_if_avail.cljs$lang$maxFixedArity = (0);

devtools.custom_formatters.log_exception_if_avail.cljs$lang$applyTo = (function (seq42235){
return devtools.custom_formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42235));
});
devtools.custom_formatters.monitor_api_calls = (function devtools$custom_formatters$monitor_api_calls(name,api_call){
return (function() { 
var G__42239__delegate = function (args){
if(cljs.core.not.call(null,devtools.custom_formatters._STAR_monitor_enabled_STAR_)){
return cljs.core.apply.call(null,api_call,args);
} else {
return devtools.custom_formatters.monitor_api_call_if_avail.call(null,name,api_call,args);
}
};
var G__42239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42240__i = 0, G__42240__a = new Array(arguments.length -  0);
while (G__42240__i < G__42240__a.length) {G__42240__a[G__42240__i] = arguments[G__42240__i + 0]; ++G__42240__i;}
  args = new cljs.core.IndexedSeq(G__42240__a,0);
} 
return G__42239__delegate.call(this,args);};
G__42239.cljs$lang$maxFixedArity = 0;
G__42239.cljs$lang$applyTo = (function (arglist__42241){
var args = cljs.core.seq(arglist__42241);
return G__42239__delegate(args);
});
G__42239.cljs$core$IFn$_invoke$arity$variadic = G__42239__delegate;
return G__42239;
})()
;
});
devtools.custom_formatters.sanitize = (function devtools$custom_formatters$sanitize(name,api_call){
return (function() { 
var G__42244__delegate = function (args){
if(cljs.core.not.call(null,devtools.custom_formatters._STAR_sanitizer_enabled_STAR_)){
return cljs.core.apply.call(null,api_call,args);
} else {
try{return cljs.core.apply.call(null,api_call,args);
}catch (e42243){var e = e42243;
devtools.custom_formatters.log_exception_if_avail.call(null,[cljs.core.str(name),cljs.core.str(": "),cljs.core.str(e)].join(''));

return null;
}}
};
var G__42244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42245__i = 0, G__42245__a = new Array(arguments.length -  0);
while (G__42245__i < G__42245__a.length) {G__42245__a[G__42245__i] = arguments[G__42245__i + 0]; ++G__42245__i;}
  args = new cljs.core.IndexedSeq(G__42245__a,0);
} 
return G__42244__delegate.call(this,args);};
G__42244.cljs$lang$maxFixedArity = 0;
G__42244.cljs$lang$applyTo = (function (arglist__42246){
var args = cljs.core.seq(arglist__42246);
return G__42244__delegate(args);
});
G__42244.cljs$core$IFn$_invoke$arity$variadic = G__42244__delegate;
return G__42244;
})()
;
});
devtools.custom_formatters.build_cljs_formatter = (function devtools$custom_formatters$build_cljs_formatter(){
var wrap = (function (name,api_call){
var monitor = cljs.core.partial.call(null,devtools.custom_formatters.monitor_api_calls,name);
var sanitizer = cljs.core.partial.call(null,devtools.custom_formatters.sanitize,name);
cljs.core.comp.call(null,monitor,sanitizer).call(null,api_call);

return api_call;
});
var formatter = (new devtools.custom_formatters.CLJSDevtoolsFormatter());
var define_BANG_ = ((function (wrap,formatter){
return (function (name,fn){
return (formatter[name] = wrap.call(null,name,fn));
});})(wrap,formatter))
;
define_BANG_.call(null,"header",devtools.format.header_api_call);

define_BANG_.call(null,"hasBody",devtools.format.has_body_api_call);

define_BANG_.call(null,"body",devtools.format.body_api_call);

return formatter;
});
devtools.custom_formatters.is_ours_QMARK_ = (function devtools$custom_formatters$is_ours_QMARK_(o){
return (o instanceof devtools.custom_formatters.CLJSDevtoolsFormatter);
});
devtools.custom_formatters.get_formatters_safe = (function devtools$custom_formatters$get_formatters_safe(){
var formatters = (window[devtools.custom_formatters.formatter_key]);
if(cljs.core.array_QMARK_.call(null,formatters)){
return formatters;
} else {
return [];
}
});
devtools.custom_formatters.present_QMARK_ = (function devtools$custom_formatters$present_QMARK_(){
var formatters = devtools.custom_formatters.get_formatters_safe.call(null);
return cljs.core.boolean$.call(null,cljs.core.some.call(null,devtools.custom_formatters.is_ours_QMARK_,formatters));
});
devtools.custom_formatters.install_our_formatter_BANG_ = (function devtools$custom_formatters$install_our_formatter_BANG_(formatter){
var formatters = devtools.custom_formatters.get_formatters_safe.call(null).slice();
formatters.push(formatter);

(window[devtools.custom_formatters.formatter_key] = formatters);

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"legacy-formatter","legacy-formatter",-1954119499)))){
return (window[devtools.custom_formatters.obsolete_formatter_key] = formatter);
} else {
return null;
}
});
devtools.custom_formatters.uninstall_our_formatters_BANG_ = (function devtools$custom_formatters$uninstall_our_formatters_BANG_(){
var new_formatters = cljs.core.remove.call(null,devtools.custom_formatters.is_ours_QMARK_,cljs.core.vec.call(null,devtools.custom_formatters.get_formatters_safe.call(null)));
var new_formatters_js = ((cljs.core.empty_QMARK_.call(null,new_formatters))?null:cljs.core.into_array.call(null,new_formatters));
return (window[devtools.custom_formatters.formatter_key] = new_formatters_js);
});
devtools.custom_formatters.install_BANG_ = (function devtools$custom_formatters$install_BANG_(){
if(cljs.core.truth_((function (){var and__29261__auto__ = cljs.core.not.call(null,devtools.custom_formatters._STAR_installed_STAR_);
if(and__29261__auto__){
return devtools.custom_formatters.available_QMARK_.call(null);
} else {
return and__29261__auto__;
}
})())){
devtools.custom_formatters._STAR_installed_STAR_ = true;

devtools.custom_formatters.install_our_formatter_BANG_.call(null,devtools.custom_formatters.build_cljs_formatter.call(null));

return true;
} else {
return null;
}
});
devtools.custom_formatters.uninstall_BANG_ = (function devtools$custom_formatters$uninstall_BANG_(){
if(cljs.core.truth_(devtools.custom_formatters._STAR_installed_STAR_)){
devtools.custom_formatters._STAR_installed_STAR_ = false;

return devtools.custom_formatters.uninstall_our_formatters_BANG_.call(null);
} else {
return null;
}
});

//# sourceMappingURL=custom_formatters.js.map?rel=1465505516257