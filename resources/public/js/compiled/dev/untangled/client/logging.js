// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.logging');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.next');
goog.require('goog.log');
goog.require('goog.debug.Logger.Level');
untangled.client.logging.set_level = (function untangled$client$logging$set_level(log_level){

return om.next._STAR_logger_STAR_.setLevel(goog.debug.Logger.Level.getPredefinedLevel((function (){var G__31668 = (((log_level instanceof cljs.core.Keyword))?log_level.fqn:null);
switch (G__31668) {
case "all":
return "ALL";

break;
case "debug":
return "FINE";

break;
case "info":
return "INFO";

break;
case "warn":
return "WARNING";

break;
case "error":
return "SEVERE";

break;
case "none":
return "OFF";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(log_level)].join('')));

}
})()));
});
/**
 * Include a pretty-printed cljs value as a string with the given text message.
 */
untangled.client.logging.value_message = (function untangled$client$logging$value_message(msg,val){
return [cljs.core.str(msg),cljs.core.str(":\n"),cljs.core.str((function (){var sb__30259__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31672_31674 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31673_31675 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31672_31674,_STAR_print_fn_STAR_31673_31675,sb__30259__auto__){
return (function (x__30260__auto__){
return sb__30259__auto__.append(x__30260__auto__);
});})(_STAR_print_newline_STAR_31672_31674,_STAR_print_fn_STAR_31673_31675,sb__30259__auto__))
;

try{cljs.pprint.pprint.call(null,val);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31673_31675;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31672_31674;
}
return [cljs.core.str(sb__30259__auto__)].join('');
})())].join('');
});
/**
 * Print a debug message which includes a value.
 *   Returns the value (like identity) so it can be harmlessly nested in expressions.
 */
untangled.client.logging.debug = (function untangled$client$logging$debug(var_args){
var args31676 = [];
var len__30343__auto___31679 = arguments.length;
var i__30344__auto___31680 = (0);
while(true){
if((i__30344__auto___31680 < len__30343__auto___31679)){
args31676.push((arguments[i__30344__auto___31680]));

var G__31681 = (i__30344__auto___31680 + (1));
i__30344__auto___31680 = G__31681;
continue;
} else {
}
break;
}

var G__31678 = args31676.length;
switch (G__31678) {
case 1:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31676.length)].join('')));

}
});

untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1 = (function (value){
goog.log.fine(om.next._STAR_logger_STAR_,untangled.client.logging.value_message.call(null,"DEBUG",value));

return value;
});

untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2 = (function (msg,value){
goog.log.fine(om.next._STAR_logger_STAR_,untangled.client.logging.value_message.call(null,msg,value));

return value;
});

untangled.client.logging.debug.cljs$lang$maxFixedArity = 2;
untangled.client.logging.info = (function untangled$client$logging$info(var_args){
var args__30350__auto__ = [];
var len__30343__auto___31684 = arguments.length;
var i__30344__auto___31685 = (0);
while(true){
if((i__30344__auto___31685 < len__30343__auto___31684)){
args__30350__auto__.push((arguments[i__30344__auto___31685]));

var G__31686 = (i__30344__auto___31685 + (1));
i__30344__auto___31685 = G__31686;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((0) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(argseq__30351__auto__);
});

untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.info(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.info.cljs$lang$maxFixedArity = (0);

untangled.client.logging.info.cljs$lang$applyTo = (function (seq31683){
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31683));
});
untangled.client.logging.warn = (function untangled$client$logging$warn(var_args){
var args__30350__auto__ = [];
var len__30343__auto___31688 = arguments.length;
var i__30344__auto___31689 = (0);
while(true){
if((i__30344__auto___31689 < len__30343__auto___31688)){
args__30350__auto__.push((arguments[i__30344__auto___31689]));

var G__31690 = (i__30344__auto___31689 + (1));
i__30344__auto___31689 = G__31690;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((0) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__30351__auto__);
});

untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.warning(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.warn.cljs$lang$maxFixedArity = (0);

untangled.client.logging.warn.cljs$lang$applyTo = (function (seq31687){
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31687));
});
untangled.client.logging.error = (function untangled$client$logging$error(var_args){
var args__30350__auto__ = [];
var len__30343__auto___31692 = arguments.length;
var i__30344__auto___31693 = (0);
while(true){
if((i__30344__auto___31693 < len__30343__auto___31692)){
args__30350__auto__.push((arguments[i__30344__auto___31693]));

var G__31694 = (i__30344__auto___31693 + (1));
i__30344__auto___31693 = G__31694;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((0) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__30351__auto__);
});

untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.error(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.error.cljs$lang$maxFixedArity = (0);

untangled.client.logging.error.cljs$lang$applyTo = (function (seq31691){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31691));
});

//# sourceMappingURL=logging.js.map?rel=1465505597774