// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__41222 = cljs.core._EQ_;
var expr__41223 = (function (){var or__29273__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e41226){if((e41226 instanceof Error)){
var e = e41226;
return false;
} else {
throw e41226;

}
}})();
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__41222.call(null,"true",expr__41223))){
return true;
} else {
if(cljs.core.truth_(pred__41222.call(null,"false",expr__41223))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__41223)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e41228){if((e41228 instanceof Error)){
var e = e41228;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e41228;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__30350__auto__ = [];
var len__30343__auto___41230 = arguments.length;
var i__30344__auto___41231 = (0);
while(true){
if((i__30344__auto___41231 < len__30343__auto___41230)){
args__30350__auto__.push((arguments[i__30344__auto___41231]));

var G__41232 = (i__30344__auto___41231 + (1));
i__30344__auto___41231 = G__41232;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((0) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__30351__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq41229){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41229));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41233){
var map__41236 = p__41233;
var map__41236__$1 = ((((!((map__41236 == null)))?((((map__41236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41236):map__41236);
var message = cljs.core.get.call(null,map__41236__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41236__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__29273__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__29261__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__29261__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__29261__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34236__auto___41398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto___41398,ch){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto___41398,ch){
return (function (state_41367){
var state_val_41368 = (state_41367[(1)]);
if((state_val_41368 === (7))){
var inst_41363 = (state_41367[(2)]);
var state_41367__$1 = state_41367;
var statearr_41369_41399 = state_41367__$1;
(statearr_41369_41399[(2)] = inst_41363);

(statearr_41369_41399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41368 === (1))){
var state_41367__$1 = state_41367;
var statearr_41370_41400 = state_41367__$1;
(statearr_41370_41400[(2)] = null);

(statearr_41370_41400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41368 === (4))){
var inst_41320 = (state_41367[(7)]);
var inst_41320__$1 = (state_41367[(2)]);
var state_41367__$1 = (function (){var statearr_41371 = state_41367;
(statearr_41371[(7)] = inst_41320__$1);

return statearr_41371;
})();
if(cljs.core.truth_(inst_41320__$1)){
var statearr_41372_41401 = state_41367__$1;
(statearr_41372_41401[(1)] = (5));

} else {
var statearr_41373_41402 = state_41367__$1;
(statearr_41373_41402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41368 === (15))){
var inst_41327 = (state_41367[(8)]);
var inst_41342 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41327);
var inst_41343 = cljs.core.first.call(null,inst_41342);
var inst_41344 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41343);
var inst_41345 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_41344)].join('');
var inst_41346 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41345);
var state_41367__$1 = state_41367;
var statearr_41374_41403 = state_41367__$1;
(statearr_41374_41403[(2)] = inst_41346);

(statearr_41374_41403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41368 === (13))){
var inst_41351 = (state_41367[(2)]);
var state_41367__$1 = state_41367;
var statearr_41375_41404 = state_41367__$1;
(statearr_41375_41404[(2)] = inst_41351);

(statearr_41375_41404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41368 === (6))){
var state_41367__$1 = state_41367;
var statearr_41376_41405 = state_41367__$1;
(statearr_41376_41405[(2)] = null);

(statearr_41376_41405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41368 === (17))){
var inst_41349 = (state_41367[(2)]);
var state_41367__$1 = state_41367;
var statearr_41377_41406 = state_41367__$1;
(statearr_41377_41406[(2)] = inst_41349);

(statearr_41377_41406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41368 === (3))){
var inst_41365 = (state_41367[(2)]);
var state_41367__$1 = state_41367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41367__$1,inst_41365);
} else {
if((state_val_41368 === (12))){
var inst_41326 = (state_41367[(9)]);
var inst_41340 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41326,opts);
var state_41367__$1 = state_41367;
if(cljs.core.truth_(inst_41340)){
var statearr_41378_41407 = state_41367__$1;
(statearr_41378_41407[(1)] = (15));

} else {
var statearr_41379_41408 = state_41367__$1;
(statearr_41379_41408[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41368 === (2))){
var state_41367__$1 = state_41367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41367__$1,(4),ch);
} else {
if((state_val_41368 === (11))){
var inst_41327 = (state_41367[(8)]);
var inst_41332 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41333 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41327);
var inst_41334 = cljs.core.async.timeout.call(null,(1000));
var inst_41335 = [inst_41333,inst_41334];
var inst_41336 = (new cljs.core.PersistentVector(null,2,(5),inst_41332,inst_41335,null));
var state_41367__$1 = state_41367;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41367__$1,(14),inst_41336);
} else {
if((state_val_41368 === (9))){
var inst_41327 = (state_41367[(8)]);
var inst_41353 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41354 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41327);
var inst_41355 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41354);
var inst_41356 = [cljs.core.str("Not loading: "),cljs.core.str(inst_41355)].join('');
var inst_41357 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41356);
var state_41367__$1 = (function (){var statearr_41380 = state_41367;
(statearr_41380[(10)] = inst_41353);

return statearr_41380;
})();
var statearr_41381_41409 = state_41367__$1;
(statearr_41381_41409[(2)] = inst_41357);

(statearr_41381_41409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41368 === (5))){
var inst_41320 = (state_41367[(7)]);
var inst_41322 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41323 = (new cljs.core.PersistentArrayMap(null,2,inst_41322,null));
var inst_41324 = (new cljs.core.PersistentHashSet(null,inst_41323,null));
var inst_41325 = figwheel.client.focus_msgs.call(null,inst_41324,inst_41320);
var inst_41326 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41325);
var inst_41327 = cljs.core.first.call(null,inst_41325);
var inst_41328 = figwheel.client.autoload_QMARK_.call(null);
var state_41367__$1 = (function (){var statearr_41382 = state_41367;
(statearr_41382[(9)] = inst_41326);

(statearr_41382[(8)] = inst_41327);

return statearr_41382;
})();
if(cljs.core.truth_(inst_41328)){
var statearr_41383_41410 = state_41367__$1;
(statearr_41383_41410[(1)] = (8));

} else {
var statearr_41384_41411 = state_41367__$1;
(statearr_41384_41411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41368 === (14))){
var inst_41338 = (state_41367[(2)]);
var state_41367__$1 = state_41367;
var statearr_41385_41412 = state_41367__$1;
(statearr_41385_41412[(2)] = inst_41338);

(statearr_41385_41412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41368 === (16))){
var state_41367__$1 = state_41367;
var statearr_41386_41413 = state_41367__$1;
(statearr_41386_41413[(2)] = null);

(statearr_41386_41413[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41368 === (10))){
var inst_41359 = (state_41367[(2)]);
var state_41367__$1 = (function (){var statearr_41387 = state_41367;
(statearr_41387[(11)] = inst_41359);

return statearr_41387;
})();
var statearr_41388_41414 = state_41367__$1;
(statearr_41388_41414[(2)] = null);

(statearr_41388_41414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41368 === (8))){
var inst_41326 = (state_41367[(9)]);
var inst_41330 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41326,opts);
var state_41367__$1 = state_41367;
if(cljs.core.truth_(inst_41330)){
var statearr_41389_41415 = state_41367__$1;
(statearr_41389_41415[(1)] = (11));

} else {
var statearr_41390_41416 = state_41367__$1;
(statearr_41390_41416[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34236__auto___41398,ch))
;
return ((function (switch__34221__auto__,c__34236__auto___41398,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34222__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34222__auto____0 = (function (){
var statearr_41394 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41394[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34222__auto__);

(statearr_41394[(1)] = (1));

return statearr_41394;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34222__auto____1 = (function (state_41367){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_41367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e41395){if((e41395 instanceof Object)){
var ex__34225__auto__ = e41395;
var statearr_41396_41417 = state_41367;
(statearr_41396_41417[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41418 = state_41367;
state_41367 = G__41418;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34222__auto__ = function(state_41367){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34222__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34222__auto____1.call(this,state_41367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34222__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34222__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto___41398,ch))
})();
var state__34238__auto__ = (function (){var statearr_41397 = f__34237__auto__.call(null);
(statearr_41397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___41398);

return statearr_41397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto___41398,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41419_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41419_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_41426 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41426){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_41424 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_41425 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41425;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41424;
}}catch (e41423){if((e41423 instanceof Error)){
var e = e41423;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41426], null));
} else {
var e = e41423;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_41426))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41427){
var map__41434 = p__41427;
var map__41434__$1 = ((((!((map__41434 == null)))?((((map__41434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41434):map__41434);
var opts = map__41434__$1;
var build_id = cljs.core.get.call(null,map__41434__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41434,map__41434__$1,opts,build_id){
return (function (p__41436){
var vec__41437 = p__41436;
var map__41438 = cljs.core.nth.call(null,vec__41437,(0),null);
var map__41438__$1 = ((((!((map__41438 == null)))?((((map__41438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41438):map__41438);
var msg = map__41438__$1;
var msg_name = cljs.core.get.call(null,map__41438__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41437,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41437,map__41438,map__41438__$1,msg,msg_name,_,map__41434,map__41434__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41437,map__41438,map__41438__$1,msg,msg_name,_,map__41434,map__41434__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41434,map__41434__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41444){
var vec__41445 = p__41444;
var map__41446 = cljs.core.nth.call(null,vec__41445,(0),null);
var map__41446__$1 = ((((!((map__41446 == null)))?((((map__41446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41446):map__41446);
var msg = map__41446__$1;
var msg_name = cljs.core.get.call(null,map__41446__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41445,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41448){
var map__41458 = p__41448;
var map__41458__$1 = ((((!((map__41458 == null)))?((((map__41458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41458):map__41458);
var on_compile_warning = cljs.core.get.call(null,map__41458__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41458__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41458,map__41458__$1,on_compile_warning,on_compile_fail){
return (function (p__41460){
var vec__41461 = p__41460;
var map__41462 = cljs.core.nth.call(null,vec__41461,(0),null);
var map__41462__$1 = ((((!((map__41462 == null)))?((((map__41462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41462):map__41462);
var msg = map__41462__$1;
var msg_name = cljs.core.get.call(null,map__41462__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41461,(1));
var pred__41464 = cljs.core._EQ_;
var expr__41465 = msg_name;
if(cljs.core.truth_(pred__41464.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41465))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41464.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41465))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41458,map__41458__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto__,msg_hist,msg_names,msg){
return (function (state_41673){
var state_val_41674 = (state_41673[(1)]);
if((state_val_41674 === (7))){
var inst_41601 = (state_41673[(2)]);
var state_41673__$1 = state_41673;
if(cljs.core.truth_(inst_41601)){
var statearr_41675_41721 = state_41673__$1;
(statearr_41675_41721[(1)] = (8));

} else {
var statearr_41676_41722 = state_41673__$1;
(statearr_41676_41722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (20))){
var inst_41667 = (state_41673[(2)]);
var state_41673__$1 = state_41673;
var statearr_41677_41723 = state_41673__$1;
(statearr_41677_41723[(2)] = inst_41667);

(statearr_41677_41723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (27))){
var inst_41663 = (state_41673[(2)]);
var state_41673__$1 = state_41673;
var statearr_41678_41724 = state_41673__$1;
(statearr_41678_41724[(2)] = inst_41663);

(statearr_41678_41724[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (1))){
var inst_41594 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41673__$1 = state_41673;
if(cljs.core.truth_(inst_41594)){
var statearr_41679_41725 = state_41673__$1;
(statearr_41679_41725[(1)] = (2));

} else {
var statearr_41680_41726 = state_41673__$1;
(statearr_41680_41726[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (24))){
var inst_41665 = (state_41673[(2)]);
var state_41673__$1 = state_41673;
var statearr_41681_41727 = state_41673__$1;
(statearr_41681_41727[(2)] = inst_41665);

(statearr_41681_41727[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (4))){
var inst_41671 = (state_41673[(2)]);
var state_41673__$1 = state_41673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41673__$1,inst_41671);
} else {
if((state_val_41674 === (15))){
var inst_41669 = (state_41673[(2)]);
var state_41673__$1 = state_41673;
var statearr_41682_41728 = state_41673__$1;
(statearr_41682_41728[(2)] = inst_41669);

(statearr_41682_41728[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (21))){
var inst_41628 = (state_41673[(2)]);
var state_41673__$1 = state_41673;
var statearr_41683_41729 = state_41673__$1;
(statearr_41683_41729[(2)] = inst_41628);

(statearr_41683_41729[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (31))){
var inst_41652 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41673__$1 = state_41673;
if(cljs.core.truth_(inst_41652)){
var statearr_41684_41730 = state_41673__$1;
(statearr_41684_41730[(1)] = (34));

} else {
var statearr_41685_41731 = state_41673__$1;
(statearr_41685_41731[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (32))){
var inst_41661 = (state_41673[(2)]);
var state_41673__$1 = state_41673;
var statearr_41686_41732 = state_41673__$1;
(statearr_41686_41732[(2)] = inst_41661);

(statearr_41686_41732[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (33))){
var inst_41650 = (state_41673[(2)]);
var state_41673__$1 = state_41673;
var statearr_41687_41733 = state_41673__$1;
(statearr_41687_41733[(2)] = inst_41650);

(statearr_41687_41733[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (13))){
var inst_41615 = figwheel.client.heads_up.clear.call(null);
var state_41673__$1 = state_41673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41673__$1,(16),inst_41615);
} else {
if((state_val_41674 === (22))){
var inst_41632 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41633 = figwheel.client.heads_up.append_message.call(null,inst_41632);
var state_41673__$1 = state_41673;
var statearr_41688_41734 = state_41673__$1;
(statearr_41688_41734[(2)] = inst_41633);

(statearr_41688_41734[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (36))){
var inst_41659 = (state_41673[(2)]);
var state_41673__$1 = state_41673;
var statearr_41689_41735 = state_41673__$1;
(statearr_41689_41735[(2)] = inst_41659);

(statearr_41689_41735[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (29))){
var inst_41643 = (state_41673[(2)]);
var state_41673__$1 = state_41673;
var statearr_41690_41736 = state_41673__$1;
(statearr_41690_41736[(2)] = inst_41643);

(statearr_41690_41736[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (6))){
var inst_41596 = (state_41673[(7)]);
var state_41673__$1 = state_41673;
var statearr_41691_41737 = state_41673__$1;
(statearr_41691_41737[(2)] = inst_41596);

(statearr_41691_41737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (28))){
var inst_41639 = (state_41673[(2)]);
var inst_41640 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41641 = figwheel.client.heads_up.display_warning.call(null,inst_41640);
var state_41673__$1 = (function (){var statearr_41692 = state_41673;
(statearr_41692[(8)] = inst_41639);

return statearr_41692;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41673__$1,(29),inst_41641);
} else {
if((state_val_41674 === (25))){
var inst_41637 = figwheel.client.heads_up.clear.call(null);
var state_41673__$1 = state_41673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41673__$1,(28),inst_41637);
} else {
if((state_val_41674 === (34))){
var inst_41654 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41673__$1 = state_41673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41673__$1,(37),inst_41654);
} else {
if((state_val_41674 === (17))){
var inst_41621 = (state_41673[(2)]);
var state_41673__$1 = state_41673;
var statearr_41693_41738 = state_41673__$1;
(statearr_41693_41738[(2)] = inst_41621);

(statearr_41693_41738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (3))){
var inst_41613 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41673__$1 = state_41673;
if(cljs.core.truth_(inst_41613)){
var statearr_41694_41739 = state_41673__$1;
(statearr_41694_41739[(1)] = (13));

} else {
var statearr_41695_41740 = state_41673__$1;
(statearr_41695_41740[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (12))){
var inst_41609 = (state_41673[(2)]);
var state_41673__$1 = state_41673;
var statearr_41696_41741 = state_41673__$1;
(statearr_41696_41741[(2)] = inst_41609);

(statearr_41696_41741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (2))){
var inst_41596 = (state_41673[(7)]);
var inst_41596__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41673__$1 = (function (){var statearr_41697 = state_41673;
(statearr_41697[(7)] = inst_41596__$1);

return statearr_41697;
})();
if(cljs.core.truth_(inst_41596__$1)){
var statearr_41698_41742 = state_41673__$1;
(statearr_41698_41742[(1)] = (5));

} else {
var statearr_41699_41743 = state_41673__$1;
(statearr_41699_41743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (23))){
var inst_41635 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41673__$1 = state_41673;
if(cljs.core.truth_(inst_41635)){
var statearr_41700_41744 = state_41673__$1;
(statearr_41700_41744[(1)] = (25));

} else {
var statearr_41701_41745 = state_41673__$1;
(statearr_41701_41745[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (35))){
var state_41673__$1 = state_41673;
var statearr_41702_41746 = state_41673__$1;
(statearr_41702_41746[(2)] = null);

(statearr_41702_41746[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (19))){
var inst_41630 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41673__$1 = state_41673;
if(cljs.core.truth_(inst_41630)){
var statearr_41703_41747 = state_41673__$1;
(statearr_41703_41747[(1)] = (22));

} else {
var statearr_41704_41748 = state_41673__$1;
(statearr_41704_41748[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (11))){
var inst_41605 = (state_41673[(2)]);
var state_41673__$1 = state_41673;
var statearr_41705_41749 = state_41673__$1;
(statearr_41705_41749[(2)] = inst_41605);

(statearr_41705_41749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (9))){
var inst_41607 = figwheel.client.heads_up.clear.call(null);
var state_41673__$1 = state_41673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41673__$1,(12),inst_41607);
} else {
if((state_val_41674 === (5))){
var inst_41598 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41673__$1 = state_41673;
var statearr_41706_41750 = state_41673__$1;
(statearr_41706_41750[(2)] = inst_41598);

(statearr_41706_41750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (14))){
var inst_41623 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41673__$1 = state_41673;
if(cljs.core.truth_(inst_41623)){
var statearr_41707_41751 = state_41673__$1;
(statearr_41707_41751[(1)] = (18));

} else {
var statearr_41708_41752 = state_41673__$1;
(statearr_41708_41752[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (26))){
var inst_41645 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41673__$1 = state_41673;
if(cljs.core.truth_(inst_41645)){
var statearr_41709_41753 = state_41673__$1;
(statearr_41709_41753[(1)] = (30));

} else {
var statearr_41710_41754 = state_41673__$1;
(statearr_41710_41754[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (16))){
var inst_41617 = (state_41673[(2)]);
var inst_41618 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41619 = figwheel.client.heads_up.display_exception.call(null,inst_41618);
var state_41673__$1 = (function (){var statearr_41711 = state_41673;
(statearr_41711[(9)] = inst_41617);

return statearr_41711;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41673__$1,(17),inst_41619);
} else {
if((state_val_41674 === (30))){
var inst_41647 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41648 = figwheel.client.heads_up.display_warning.call(null,inst_41647);
var state_41673__$1 = state_41673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41673__$1,(33),inst_41648);
} else {
if((state_val_41674 === (10))){
var inst_41611 = (state_41673[(2)]);
var state_41673__$1 = state_41673;
var statearr_41712_41755 = state_41673__$1;
(statearr_41712_41755[(2)] = inst_41611);

(statearr_41712_41755[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (18))){
var inst_41625 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41626 = figwheel.client.heads_up.display_exception.call(null,inst_41625);
var state_41673__$1 = state_41673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41673__$1,(21),inst_41626);
} else {
if((state_val_41674 === (37))){
var inst_41656 = (state_41673[(2)]);
var state_41673__$1 = state_41673;
var statearr_41713_41756 = state_41673__$1;
(statearr_41713_41756[(2)] = inst_41656);

(statearr_41713_41756[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41674 === (8))){
var inst_41603 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41673__$1 = state_41673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41673__$1,(11),inst_41603);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34236__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34221__auto__,c__34236__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34222__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34222__auto____0 = (function (){
var statearr_41717 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41717[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34222__auto__);

(statearr_41717[(1)] = (1));

return statearr_41717;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34222__auto____1 = (function (state_41673){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_41673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e41718){if((e41718 instanceof Object)){
var ex__34225__auto__ = e41718;
var statearr_41719_41757 = state_41673;
(statearr_41719_41757[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41758 = state_41673;
state_41673 = G__41758;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34222__auto__ = function(state_41673){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34222__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34222__auto____1.call(this,state_41673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34222__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34222__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto__,msg_hist,msg_names,msg))
})();
var state__34238__auto__ = (function (){var statearr_41720 = f__34237__auto__.call(null);
(statearr_41720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto__);

return statearr_41720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto__,msg_hist,msg_names,msg))
);

return c__34236__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34236__auto___41821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto___41821,ch){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto___41821,ch){
return (function (state_41804){
var state_val_41805 = (state_41804[(1)]);
if((state_val_41805 === (1))){
var state_41804__$1 = state_41804;
var statearr_41806_41822 = state_41804__$1;
(statearr_41806_41822[(2)] = null);

(statearr_41806_41822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (2))){
var state_41804__$1 = state_41804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41804__$1,(4),ch);
} else {
if((state_val_41805 === (3))){
var inst_41802 = (state_41804[(2)]);
var state_41804__$1 = state_41804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41804__$1,inst_41802);
} else {
if((state_val_41805 === (4))){
var inst_41792 = (state_41804[(7)]);
var inst_41792__$1 = (state_41804[(2)]);
var state_41804__$1 = (function (){var statearr_41807 = state_41804;
(statearr_41807[(7)] = inst_41792__$1);

return statearr_41807;
})();
if(cljs.core.truth_(inst_41792__$1)){
var statearr_41808_41823 = state_41804__$1;
(statearr_41808_41823[(1)] = (5));

} else {
var statearr_41809_41824 = state_41804__$1;
(statearr_41809_41824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (5))){
var inst_41792 = (state_41804[(7)]);
var inst_41794 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41792);
var state_41804__$1 = state_41804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41804__$1,(8),inst_41794);
} else {
if((state_val_41805 === (6))){
var state_41804__$1 = state_41804;
var statearr_41810_41825 = state_41804__$1;
(statearr_41810_41825[(2)] = null);

(statearr_41810_41825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (7))){
var inst_41800 = (state_41804[(2)]);
var state_41804__$1 = state_41804;
var statearr_41811_41826 = state_41804__$1;
(statearr_41811_41826[(2)] = inst_41800);

(statearr_41811_41826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (8))){
var inst_41796 = (state_41804[(2)]);
var state_41804__$1 = (function (){var statearr_41812 = state_41804;
(statearr_41812[(8)] = inst_41796);

return statearr_41812;
})();
var statearr_41813_41827 = state_41804__$1;
(statearr_41813_41827[(2)] = null);

(statearr_41813_41827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__34236__auto___41821,ch))
;
return ((function (switch__34221__auto__,c__34236__auto___41821,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34222__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34222__auto____0 = (function (){
var statearr_41817 = [null,null,null,null,null,null,null,null,null];
(statearr_41817[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34222__auto__);

(statearr_41817[(1)] = (1));

return statearr_41817;
});
var figwheel$client$heads_up_plugin_$_state_machine__34222__auto____1 = (function (state_41804){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_41804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e41818){if((e41818 instanceof Object)){
var ex__34225__auto__ = e41818;
var statearr_41819_41828 = state_41804;
(statearr_41819_41828[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41829 = state_41804;
state_41804 = G__41829;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34222__auto__ = function(state_41804){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34222__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34222__auto____1.call(this,state_41804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34222__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34222__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto___41821,ch))
})();
var state__34238__auto__ = (function (){var statearr_41820 = f__34237__auto__.call(null);
(statearr_41820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___41821);

return statearr_41820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto___41821,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto__){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto__){
return (function (state_41850){
var state_val_41851 = (state_41850[(1)]);
if((state_val_41851 === (1))){
var inst_41845 = cljs.core.async.timeout.call(null,(3000));
var state_41850__$1 = state_41850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41850__$1,(2),inst_41845);
} else {
if((state_val_41851 === (2))){
var inst_41847 = (state_41850[(2)]);
var inst_41848 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41850__$1 = (function (){var statearr_41852 = state_41850;
(statearr_41852[(7)] = inst_41847);

return statearr_41852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41850__$1,inst_41848);
} else {
return null;
}
}
});})(c__34236__auto__))
;
return ((function (switch__34221__auto__,c__34236__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34222__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34222__auto____0 = (function (){
var statearr_41856 = [null,null,null,null,null,null,null,null];
(statearr_41856[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34222__auto__);

(statearr_41856[(1)] = (1));

return statearr_41856;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34222__auto____1 = (function (state_41850){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_41850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e41857){if((e41857 instanceof Object)){
var ex__34225__auto__ = e41857;
var statearr_41858_41860 = state_41850;
(statearr_41858_41860[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41861 = state_41850;
state_41850 = G__41861;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34222__auto__ = function(state_41850){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34222__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34222__auto____1.call(this,state_41850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34222__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34222__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto__))
})();
var state__34238__auto__ = (function (){var statearr_41859 = f__34237__auto__.call(null);
(statearr_41859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto__);

return statearr_41859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto__))
);

return c__34236__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41862){
var map__41869 = p__41862;
var map__41869__$1 = ((((!((map__41869 == null)))?((((map__41869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41869):map__41869);
var ed = map__41869__$1;
var formatted_exception = cljs.core.get.call(null,map__41869__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41869__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41869__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41871_41875 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41872_41876 = null;
var count__41873_41877 = (0);
var i__41874_41878 = (0);
while(true){
if((i__41874_41878 < count__41873_41877)){
var msg_41879 = cljs.core._nth.call(null,chunk__41872_41876,i__41874_41878);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41879);

var G__41880 = seq__41871_41875;
var G__41881 = chunk__41872_41876;
var G__41882 = count__41873_41877;
var G__41883 = (i__41874_41878 + (1));
seq__41871_41875 = G__41880;
chunk__41872_41876 = G__41881;
count__41873_41877 = G__41882;
i__41874_41878 = G__41883;
continue;
} else {
var temp__4657__auto___41884 = cljs.core.seq.call(null,seq__41871_41875);
if(temp__4657__auto___41884){
var seq__41871_41885__$1 = temp__4657__auto___41884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41871_41885__$1)){
var c__30084__auto___41886 = cljs.core.chunk_first.call(null,seq__41871_41885__$1);
var G__41887 = cljs.core.chunk_rest.call(null,seq__41871_41885__$1);
var G__41888 = c__30084__auto___41886;
var G__41889 = cljs.core.count.call(null,c__30084__auto___41886);
var G__41890 = (0);
seq__41871_41875 = G__41887;
chunk__41872_41876 = G__41888;
count__41873_41877 = G__41889;
i__41874_41878 = G__41890;
continue;
} else {
var msg_41891 = cljs.core.first.call(null,seq__41871_41885__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41891);

var G__41892 = cljs.core.next.call(null,seq__41871_41885__$1);
var G__41893 = null;
var G__41894 = (0);
var G__41895 = (0);
seq__41871_41875 = G__41892;
chunk__41872_41876 = G__41893;
count__41873_41877 = G__41894;
i__41874_41878 = G__41895;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41896){
var map__41899 = p__41896;
var map__41899__$1 = ((((!((map__41899 == null)))?((((map__41899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41899):map__41899);
var w = map__41899__$1;
var message = cljs.core.get.call(null,map__41899__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__29261__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__29261__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__29261__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__41907 = cljs.core.seq.call(null,plugins);
var chunk__41908 = null;
var count__41909 = (0);
var i__41910 = (0);
while(true){
if((i__41910 < count__41909)){
var vec__41911 = cljs.core._nth.call(null,chunk__41908,i__41910);
var k = cljs.core.nth.call(null,vec__41911,(0),null);
var plugin = cljs.core.nth.call(null,vec__41911,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41913 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41907,chunk__41908,count__41909,i__41910,pl_41913,vec__41911,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41913.call(null,msg_hist);
});})(seq__41907,chunk__41908,count__41909,i__41910,pl_41913,vec__41911,k,plugin))
);
} else {
}

var G__41914 = seq__41907;
var G__41915 = chunk__41908;
var G__41916 = count__41909;
var G__41917 = (i__41910 + (1));
seq__41907 = G__41914;
chunk__41908 = G__41915;
count__41909 = G__41916;
i__41910 = G__41917;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41907);
if(temp__4657__auto__){
var seq__41907__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41907__$1)){
var c__30084__auto__ = cljs.core.chunk_first.call(null,seq__41907__$1);
var G__41918 = cljs.core.chunk_rest.call(null,seq__41907__$1);
var G__41919 = c__30084__auto__;
var G__41920 = cljs.core.count.call(null,c__30084__auto__);
var G__41921 = (0);
seq__41907 = G__41918;
chunk__41908 = G__41919;
count__41909 = G__41920;
i__41910 = G__41921;
continue;
} else {
var vec__41912 = cljs.core.first.call(null,seq__41907__$1);
var k = cljs.core.nth.call(null,vec__41912,(0),null);
var plugin = cljs.core.nth.call(null,vec__41912,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41922 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41907,chunk__41908,count__41909,i__41910,pl_41922,vec__41912,k,plugin,seq__41907__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41922.call(null,msg_hist);
});})(seq__41907,chunk__41908,count__41909,i__41910,pl_41922,vec__41912,k,plugin,seq__41907__$1,temp__4657__auto__))
);
} else {
}

var G__41923 = cljs.core.next.call(null,seq__41907__$1);
var G__41924 = null;
var G__41925 = (0);
var G__41926 = (0);
seq__41907 = G__41923;
chunk__41908 = G__41924;
count__41909 = G__41925;
i__41910 = G__41926;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args41927 = [];
var len__30343__auto___41930 = arguments.length;
var i__30344__auto___41931 = (0);
while(true){
if((i__30344__auto___41931 < len__30343__auto___41930)){
args41927.push((arguments[i__30344__auto___41931]));

var G__41932 = (i__30344__auto___41931 + (1));
i__30344__auto___41931 = G__41932;
continue;
} else {
}
break;
}

var G__41929 = args41927.length;
switch (G__41929) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41927.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__30350__auto__ = [];
var len__30343__auto___41938 = arguments.length;
var i__30344__auto___41939 = (0);
while(true){
if((i__30344__auto___41939 < len__30343__auto___41938)){
args__30350__auto__.push((arguments[i__30344__auto___41939]));

var G__41940 = (i__30344__auto___41939 + (1));
i__30344__auto___41939 = G__41940;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((0) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__30351__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41935){
var map__41936 = p__41935;
var map__41936__$1 = ((((!((map__41936 == null)))?((((map__41936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41936):map__41936);
var opts = map__41936__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41934){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41934));
});

//# sourceMappingURL=client.js.map?rel=1465505515748