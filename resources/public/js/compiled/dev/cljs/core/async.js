// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args36223 = [];
var len__30343__auto___36229 = arguments.length;
var i__30344__auto___36230 = (0);
while(true){
if((i__30344__auto___36230 < len__30343__auto___36229)){
args36223.push((arguments[i__30344__auto___36230]));

var G__36231 = (i__30344__auto___36230 + (1));
i__30344__auto___36230 = G__36231;
continue;
} else {
}
break;
}

var G__36225 = args36223.length;
switch (G__36225) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36223.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async36226 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36226 = (function (f,blockable,meta36227){
this.f = f;
this.blockable = blockable;
this.meta36227 = meta36227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36228,meta36227__$1){
var self__ = this;
var _36228__$1 = this;
return (new cljs.core.async.t_cljs$core$async36226(self__.f,self__.blockable,meta36227__$1));
});

cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36228){
var self__ = this;
var _36228__$1 = this;
return self__.meta36227;
});

cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36227","meta36227",-798583611,null)], null);
});

cljs.core.async.t_cljs$core$async36226.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36226";

cljs.core.async.t_cljs$core$async36226.cljs$lang$ctorPrWriter = (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cljs.core.async/t_cljs$core$async36226");
});

cljs.core.async.__GT_t_cljs$core$async36226 = (function cljs$core$async$__GT_t_cljs$core$async36226(f__$1,blockable__$1,meta36227){
return (new cljs.core.async.t_cljs$core$async36226(f__$1,blockable__$1,meta36227));
});

}

return (new cljs.core.async.t_cljs$core$async36226(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args36235 = [];
var len__30343__auto___36238 = arguments.length;
var i__30344__auto___36239 = (0);
while(true){
if((i__30344__auto___36239 < len__30343__auto___36238)){
args36235.push((arguments[i__30344__auto___36239]));

var G__36240 = (i__30344__auto___36239 + (1));
i__30344__auto___36239 = G__36240;
continue;
} else {
}
break;
}

var G__36237 = args36235.length;
switch (G__36237) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36235.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args36242 = [];
var len__30343__auto___36245 = arguments.length;
var i__30344__auto___36246 = (0);
while(true){
if((i__30344__auto___36246 < len__30343__auto___36245)){
args36242.push((arguments[i__30344__auto___36246]));

var G__36247 = (i__30344__auto___36246 + (1));
i__30344__auto___36246 = G__36247;
continue;
} else {
}
break;
}

var G__36244 = args36242.length;
switch (G__36244) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36242.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args36249 = [];
var len__30343__auto___36252 = arguments.length;
var i__30344__auto___36253 = (0);
while(true){
if((i__30344__auto___36253 < len__30343__auto___36252)){
args36249.push((arguments[i__30344__auto___36253]));

var G__36254 = (i__30344__auto___36253 + (1));
i__30344__auto___36253 = G__36254;
continue;
} else {
}
break;
}

var G__36251 = args36249.length;
switch (G__36251) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36249.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36256 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36256);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36256,ret){
return (function (){
return fn1.call(null,val_36256);
});})(val_36256,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args36257 = [];
var len__30343__auto___36260 = arguments.length;
var i__30344__auto___36261 = (0);
while(true){
if((i__30344__auto___36261 < len__30343__auto___36260)){
args36257.push((arguments[i__30344__auto___36261]));

var G__36262 = (i__30344__auto___36261 + (1));
i__30344__auto___36261 = G__36262;
continue;
} else {
}
break;
}

var G__36259 = args36257.length;
switch (G__36259) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36257.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__30188__auto___36264 = n;
var x_36265 = (0);
while(true){
if((x_36265 < n__30188__auto___36264)){
(a[x_36265] = (0));

var G__36266 = (x_36265 + (1));
x_36265 = G__36266;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__36267 = (i + (1));
i = G__36267;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async36271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36271 = (function (alt_flag,flag,meta36272){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta36272 = meta36272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36273,meta36272__$1){
var self__ = this;
var _36273__$1 = this;
return (new cljs.core.async.t_cljs$core$async36271(self__.alt_flag,self__.flag,meta36272__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async36271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36273){
var self__ = this;
var _36273__$1 = this;
return self__.meta36272;
});})(flag))
;

cljs.core.async.t_cljs$core$async36271.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async36271.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36271.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36272","meta36272",-1721118506,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36271";

cljs.core.async.t_cljs$core$async36271.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cljs.core.async/t_cljs$core$async36271");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async36271 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36271(alt_flag__$1,flag__$1,meta36272){
return (new cljs.core.async.t_cljs$core$async36271(alt_flag__$1,flag__$1,meta36272));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36271(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async36277 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36277 = (function (alt_handler,flag,cb,meta36278){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta36278 = meta36278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36279,meta36278__$1){
var self__ = this;
var _36279__$1 = this;
return (new cljs.core.async.t_cljs$core$async36277(self__.alt_handler,self__.flag,self__.cb,meta36278__$1));
});

cljs.core.async.t_cljs$core$async36277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36279){
var self__ = this;
var _36279__$1 = this;
return self__.meta36278;
});

cljs.core.async.t_cljs$core$async36277.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36277.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async36277.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36277.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36278","meta36278",1647724680,null)], null);
});

cljs.core.async.t_cljs$core$async36277.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36277";

cljs.core.async.t_cljs$core$async36277.cljs$lang$ctorPrWriter = (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cljs.core.async/t_cljs$core$async36277");
});

cljs.core.async.__GT_t_cljs$core$async36277 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36277(alt_handler__$1,flag__$1,cb__$1,meta36278){
return (new cljs.core.async.t_cljs$core$async36277(alt_handler__$1,flag__$1,cb__$1,meta36278));
});

}

return (new cljs.core.async.t_cljs$core$async36277(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36280_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36280_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36281_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36281_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__29273__auto__ = wport;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36282 = (i + (1));
i = G__36282;
continue;
}
} else {
return null;
}
break;
}
})();
var or__29273__auto__ = ret;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__29261__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__29261__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__30350__auto__ = [];
var len__30343__auto___36288 = arguments.length;
var i__30344__auto___36289 = (0);
while(true){
if((i__30344__auto___36289 < len__30343__auto___36288)){
args__30350__auto__.push((arguments[i__30344__auto___36289]));

var G__36290 = (i__30344__auto___36289 + (1));
i__30344__auto___36289 = G__36290;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((1) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30351__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36285){
var map__36286 = p__36285;
var map__36286__$1 = ((((!((map__36286 == null)))?((((map__36286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36286):map__36286);
var opts = map__36286__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36283){
var G__36284 = cljs.core.first.call(null,seq36283);
var seq36283__$1 = cljs.core.next.call(null,seq36283);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36284,seq36283__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args36291 = [];
var len__30343__auto___36341 = arguments.length;
var i__30344__auto___36342 = (0);
while(true){
if((i__30344__auto___36342 < len__30343__auto___36341)){
args36291.push((arguments[i__30344__auto___36342]));

var G__36343 = (i__30344__auto___36342 + (1));
i__30344__auto___36342 = G__36343;
continue;
} else {
}
break;
}

var G__36293 = args36291.length;
switch (G__36293) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36291.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34236__auto___36345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto___36345){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto___36345){
return (function (state_36317){
var state_val_36318 = (state_36317[(1)]);
if((state_val_36318 === (7))){
var inst_36313 = (state_36317[(2)]);
var state_36317__$1 = state_36317;
var statearr_36319_36346 = state_36317__$1;
(statearr_36319_36346[(2)] = inst_36313);

(statearr_36319_36346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (1))){
var state_36317__$1 = state_36317;
var statearr_36320_36347 = state_36317__$1;
(statearr_36320_36347[(2)] = null);

(statearr_36320_36347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (4))){
var inst_36296 = (state_36317[(7)]);
var inst_36296__$1 = (state_36317[(2)]);
var inst_36297 = (inst_36296__$1 == null);
var state_36317__$1 = (function (){var statearr_36321 = state_36317;
(statearr_36321[(7)] = inst_36296__$1);

return statearr_36321;
})();
if(cljs.core.truth_(inst_36297)){
var statearr_36322_36348 = state_36317__$1;
(statearr_36322_36348[(1)] = (5));

} else {
var statearr_36323_36349 = state_36317__$1;
(statearr_36323_36349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (13))){
var state_36317__$1 = state_36317;
var statearr_36324_36350 = state_36317__$1;
(statearr_36324_36350[(2)] = null);

(statearr_36324_36350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (6))){
var inst_36296 = (state_36317[(7)]);
var state_36317__$1 = state_36317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36317__$1,(11),to,inst_36296);
} else {
if((state_val_36318 === (3))){
var inst_36315 = (state_36317[(2)]);
var state_36317__$1 = state_36317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36317__$1,inst_36315);
} else {
if((state_val_36318 === (12))){
var state_36317__$1 = state_36317;
var statearr_36325_36351 = state_36317__$1;
(statearr_36325_36351[(2)] = null);

(statearr_36325_36351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (2))){
var state_36317__$1 = state_36317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36317__$1,(4),from);
} else {
if((state_val_36318 === (11))){
var inst_36306 = (state_36317[(2)]);
var state_36317__$1 = state_36317;
if(cljs.core.truth_(inst_36306)){
var statearr_36326_36352 = state_36317__$1;
(statearr_36326_36352[(1)] = (12));

} else {
var statearr_36327_36353 = state_36317__$1;
(statearr_36327_36353[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (9))){
var state_36317__$1 = state_36317;
var statearr_36328_36354 = state_36317__$1;
(statearr_36328_36354[(2)] = null);

(statearr_36328_36354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (5))){
var state_36317__$1 = state_36317;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36329_36355 = state_36317__$1;
(statearr_36329_36355[(1)] = (8));

} else {
var statearr_36330_36356 = state_36317__$1;
(statearr_36330_36356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (14))){
var inst_36311 = (state_36317[(2)]);
var state_36317__$1 = state_36317;
var statearr_36331_36357 = state_36317__$1;
(statearr_36331_36357[(2)] = inst_36311);

(statearr_36331_36357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (10))){
var inst_36303 = (state_36317[(2)]);
var state_36317__$1 = state_36317;
var statearr_36332_36358 = state_36317__$1;
(statearr_36332_36358[(2)] = inst_36303);

(statearr_36332_36358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (8))){
var inst_36300 = cljs.core.async.close_BANG_.call(null,to);
var state_36317__$1 = state_36317;
var statearr_36333_36359 = state_36317__$1;
(statearr_36333_36359[(2)] = inst_36300);

(statearr_36333_36359[(1)] = (10));


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
});})(c__34236__auto___36345))
;
return ((function (switch__34221__auto__,c__34236__auto___36345){
return (function() {
var cljs$core$async$state_machine__34222__auto__ = null;
var cljs$core$async$state_machine__34222__auto____0 = (function (){
var statearr_36337 = [null,null,null,null,null,null,null,null];
(statearr_36337[(0)] = cljs$core$async$state_machine__34222__auto__);

(statearr_36337[(1)] = (1));

return statearr_36337;
});
var cljs$core$async$state_machine__34222__auto____1 = (function (state_36317){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_36317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e36338){if((e36338 instanceof Object)){
var ex__34225__auto__ = e36338;
var statearr_36339_36360 = state_36317;
(statearr_36339_36360[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36361 = state_36317;
state_36317 = G__36361;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$state_machine__34222__auto__ = function(state_36317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34222__auto____1.call(this,state_36317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34222__auto____0;
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34222__auto____1;
return cljs$core$async$state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto___36345))
})();
var state__34238__auto__ = (function (){var statearr_36340 = f__34237__auto__.call(null);
(statearr_36340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___36345);

return statearr_36340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto___36345))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__36545){
var vec__36546 = p__36545;
var v = cljs.core.nth.call(null,vec__36546,(0),null);
var p = cljs.core.nth.call(null,vec__36546,(1),null);
var job = vec__36546;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34236__auto___36728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto___36728,res,vec__36546,v,p,job,jobs,results){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto___36728,res,vec__36546,v,p,job,jobs,results){
return (function (state_36551){
var state_val_36552 = (state_36551[(1)]);
if((state_val_36552 === (1))){
var state_36551__$1 = state_36551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36551__$1,(2),res,v);
} else {
if((state_val_36552 === (2))){
var inst_36548 = (state_36551[(2)]);
var inst_36549 = cljs.core.async.close_BANG_.call(null,res);
var state_36551__$1 = (function (){var statearr_36553 = state_36551;
(statearr_36553[(7)] = inst_36548);

return statearr_36553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36551__$1,inst_36549);
} else {
return null;
}
}
});})(c__34236__auto___36728,res,vec__36546,v,p,job,jobs,results))
;
return ((function (switch__34221__auto__,c__34236__auto___36728,res,vec__36546,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____0 = (function (){
var statearr_36557 = [null,null,null,null,null,null,null,null];
(statearr_36557[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__);

(statearr_36557[(1)] = (1));

return statearr_36557;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____1 = (function (state_36551){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_36551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e36558){if((e36558 instanceof Object)){
var ex__34225__auto__ = e36558;
var statearr_36559_36729 = state_36551;
(statearr_36559_36729[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36730 = state_36551;
state_36551 = G__36730;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__ = function(state_36551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____1.call(this,state_36551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto___36728,res,vec__36546,v,p,job,jobs,results))
})();
var state__34238__auto__ = (function (){var statearr_36560 = f__34237__auto__.call(null);
(statearr_36560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___36728);

return statearr_36560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto___36728,res,vec__36546,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36561){
var vec__36562 = p__36561;
var v = cljs.core.nth.call(null,vec__36562,(0),null);
var p = cljs.core.nth.call(null,vec__36562,(1),null);
var job = vec__36562;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__30188__auto___36731 = n;
var __36732 = (0);
while(true){
if((__36732 < n__30188__auto___36731)){
var G__36563_36733 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36563_36733) {
case "compute":
var c__34236__auto___36735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36732,c__34236__auto___36735,G__36563_36733,n__30188__auto___36731,jobs,results,process,async){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (__36732,c__34236__auto___36735,G__36563_36733,n__30188__auto___36731,jobs,results,process,async){
return (function (state_36576){
var state_val_36577 = (state_36576[(1)]);
if((state_val_36577 === (1))){
var state_36576__$1 = state_36576;
var statearr_36578_36736 = state_36576__$1;
(statearr_36578_36736[(2)] = null);

(statearr_36578_36736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36577 === (2))){
var state_36576__$1 = state_36576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36576__$1,(4),jobs);
} else {
if((state_val_36577 === (3))){
var inst_36574 = (state_36576[(2)]);
var state_36576__$1 = state_36576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36576__$1,inst_36574);
} else {
if((state_val_36577 === (4))){
var inst_36566 = (state_36576[(2)]);
var inst_36567 = process.call(null,inst_36566);
var state_36576__$1 = state_36576;
if(cljs.core.truth_(inst_36567)){
var statearr_36579_36737 = state_36576__$1;
(statearr_36579_36737[(1)] = (5));

} else {
var statearr_36580_36738 = state_36576__$1;
(statearr_36580_36738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36577 === (5))){
var state_36576__$1 = state_36576;
var statearr_36581_36739 = state_36576__$1;
(statearr_36581_36739[(2)] = null);

(statearr_36581_36739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36577 === (6))){
var state_36576__$1 = state_36576;
var statearr_36582_36740 = state_36576__$1;
(statearr_36582_36740[(2)] = null);

(statearr_36582_36740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36577 === (7))){
var inst_36572 = (state_36576[(2)]);
var state_36576__$1 = state_36576;
var statearr_36583_36741 = state_36576__$1;
(statearr_36583_36741[(2)] = inst_36572);

(statearr_36583_36741[(1)] = (3));


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
});})(__36732,c__34236__auto___36735,G__36563_36733,n__30188__auto___36731,jobs,results,process,async))
;
return ((function (__36732,switch__34221__auto__,c__34236__auto___36735,G__36563_36733,n__30188__auto___36731,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____0 = (function (){
var statearr_36587 = [null,null,null,null,null,null,null];
(statearr_36587[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__);

(statearr_36587[(1)] = (1));

return statearr_36587;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____1 = (function (state_36576){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_36576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e36588){if((e36588 instanceof Object)){
var ex__34225__auto__ = e36588;
var statearr_36589_36742 = state_36576;
(statearr_36589_36742[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36743 = state_36576;
state_36576 = G__36743;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__ = function(state_36576){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____1.call(this,state_36576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__;
})()
;})(__36732,switch__34221__auto__,c__34236__auto___36735,G__36563_36733,n__30188__auto___36731,jobs,results,process,async))
})();
var state__34238__auto__ = (function (){var statearr_36590 = f__34237__auto__.call(null);
(statearr_36590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___36735);

return statearr_36590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(__36732,c__34236__auto___36735,G__36563_36733,n__30188__auto___36731,jobs,results,process,async))
);


break;
case "async":
var c__34236__auto___36744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36732,c__34236__auto___36744,G__36563_36733,n__30188__auto___36731,jobs,results,process,async){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (__36732,c__34236__auto___36744,G__36563_36733,n__30188__auto___36731,jobs,results,process,async){
return (function (state_36603){
var state_val_36604 = (state_36603[(1)]);
if((state_val_36604 === (1))){
var state_36603__$1 = state_36603;
var statearr_36605_36745 = state_36603__$1;
(statearr_36605_36745[(2)] = null);

(statearr_36605_36745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36604 === (2))){
var state_36603__$1 = state_36603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36603__$1,(4),jobs);
} else {
if((state_val_36604 === (3))){
var inst_36601 = (state_36603[(2)]);
var state_36603__$1 = state_36603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36603__$1,inst_36601);
} else {
if((state_val_36604 === (4))){
var inst_36593 = (state_36603[(2)]);
var inst_36594 = async.call(null,inst_36593);
var state_36603__$1 = state_36603;
if(cljs.core.truth_(inst_36594)){
var statearr_36606_36746 = state_36603__$1;
(statearr_36606_36746[(1)] = (5));

} else {
var statearr_36607_36747 = state_36603__$1;
(statearr_36607_36747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36604 === (5))){
var state_36603__$1 = state_36603;
var statearr_36608_36748 = state_36603__$1;
(statearr_36608_36748[(2)] = null);

(statearr_36608_36748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36604 === (6))){
var state_36603__$1 = state_36603;
var statearr_36609_36749 = state_36603__$1;
(statearr_36609_36749[(2)] = null);

(statearr_36609_36749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36604 === (7))){
var inst_36599 = (state_36603[(2)]);
var state_36603__$1 = state_36603;
var statearr_36610_36750 = state_36603__$1;
(statearr_36610_36750[(2)] = inst_36599);

(statearr_36610_36750[(1)] = (3));


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
});})(__36732,c__34236__auto___36744,G__36563_36733,n__30188__auto___36731,jobs,results,process,async))
;
return ((function (__36732,switch__34221__auto__,c__34236__auto___36744,G__36563_36733,n__30188__auto___36731,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____0 = (function (){
var statearr_36614 = [null,null,null,null,null,null,null];
(statearr_36614[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__);

(statearr_36614[(1)] = (1));

return statearr_36614;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____1 = (function (state_36603){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_36603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e36615){if((e36615 instanceof Object)){
var ex__34225__auto__ = e36615;
var statearr_36616_36751 = state_36603;
(statearr_36616_36751[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36752 = state_36603;
state_36603 = G__36752;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__ = function(state_36603){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____1.call(this,state_36603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__;
})()
;})(__36732,switch__34221__auto__,c__34236__auto___36744,G__36563_36733,n__30188__auto___36731,jobs,results,process,async))
})();
var state__34238__auto__ = (function (){var statearr_36617 = f__34237__auto__.call(null);
(statearr_36617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___36744);

return statearr_36617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(__36732,c__34236__auto___36744,G__36563_36733,n__30188__auto___36731,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36753 = (__36732 + (1));
__36732 = G__36753;
continue;
} else {
}
break;
}

var c__34236__auto___36754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto___36754,jobs,results,process,async){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto___36754,jobs,results,process,async){
return (function (state_36639){
var state_val_36640 = (state_36639[(1)]);
if((state_val_36640 === (1))){
var state_36639__$1 = state_36639;
var statearr_36641_36755 = state_36639__$1;
(statearr_36641_36755[(2)] = null);

(statearr_36641_36755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (2))){
var state_36639__$1 = state_36639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36639__$1,(4),from);
} else {
if((state_val_36640 === (3))){
var inst_36637 = (state_36639[(2)]);
var state_36639__$1 = state_36639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36639__$1,inst_36637);
} else {
if((state_val_36640 === (4))){
var inst_36620 = (state_36639[(7)]);
var inst_36620__$1 = (state_36639[(2)]);
var inst_36621 = (inst_36620__$1 == null);
var state_36639__$1 = (function (){var statearr_36642 = state_36639;
(statearr_36642[(7)] = inst_36620__$1);

return statearr_36642;
})();
if(cljs.core.truth_(inst_36621)){
var statearr_36643_36756 = state_36639__$1;
(statearr_36643_36756[(1)] = (5));

} else {
var statearr_36644_36757 = state_36639__$1;
(statearr_36644_36757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (5))){
var inst_36623 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36639__$1 = state_36639;
var statearr_36645_36758 = state_36639__$1;
(statearr_36645_36758[(2)] = inst_36623);

(statearr_36645_36758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (6))){
var inst_36625 = (state_36639[(8)]);
var inst_36620 = (state_36639[(7)]);
var inst_36625__$1 = cljs.core.async.chan.call(null,(1));
var inst_36626 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36627 = [inst_36620,inst_36625__$1];
var inst_36628 = (new cljs.core.PersistentVector(null,2,(5),inst_36626,inst_36627,null));
var state_36639__$1 = (function (){var statearr_36646 = state_36639;
(statearr_36646[(8)] = inst_36625__$1);

return statearr_36646;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36639__$1,(8),jobs,inst_36628);
} else {
if((state_val_36640 === (7))){
var inst_36635 = (state_36639[(2)]);
var state_36639__$1 = state_36639;
var statearr_36647_36759 = state_36639__$1;
(statearr_36647_36759[(2)] = inst_36635);

(statearr_36647_36759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (8))){
var inst_36625 = (state_36639[(8)]);
var inst_36630 = (state_36639[(2)]);
var state_36639__$1 = (function (){var statearr_36648 = state_36639;
(statearr_36648[(9)] = inst_36630);

return statearr_36648;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36639__$1,(9),results,inst_36625);
} else {
if((state_val_36640 === (9))){
var inst_36632 = (state_36639[(2)]);
var state_36639__$1 = (function (){var statearr_36649 = state_36639;
(statearr_36649[(10)] = inst_36632);

return statearr_36649;
})();
var statearr_36650_36760 = state_36639__$1;
(statearr_36650_36760[(2)] = null);

(statearr_36650_36760[(1)] = (2));


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
});})(c__34236__auto___36754,jobs,results,process,async))
;
return ((function (switch__34221__auto__,c__34236__auto___36754,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____0 = (function (){
var statearr_36654 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36654[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__);

(statearr_36654[(1)] = (1));

return statearr_36654;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____1 = (function (state_36639){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_36639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e36655){if((e36655 instanceof Object)){
var ex__34225__auto__ = e36655;
var statearr_36656_36761 = state_36639;
(statearr_36656_36761[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36762 = state_36639;
state_36639 = G__36762;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__ = function(state_36639){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____1.call(this,state_36639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto___36754,jobs,results,process,async))
})();
var state__34238__auto__ = (function (){var statearr_36657 = f__34237__auto__.call(null);
(statearr_36657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___36754);

return statearr_36657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto___36754,jobs,results,process,async))
);


var c__34236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto__,jobs,results,process,async){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto__,jobs,results,process,async){
return (function (state_36695){
var state_val_36696 = (state_36695[(1)]);
if((state_val_36696 === (7))){
var inst_36691 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36697_36763 = state_36695__$1;
(statearr_36697_36763[(2)] = inst_36691);

(statearr_36697_36763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (20))){
var state_36695__$1 = state_36695;
var statearr_36698_36764 = state_36695__$1;
(statearr_36698_36764[(2)] = null);

(statearr_36698_36764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (1))){
var state_36695__$1 = state_36695;
var statearr_36699_36765 = state_36695__$1;
(statearr_36699_36765[(2)] = null);

(statearr_36699_36765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (4))){
var inst_36660 = (state_36695[(7)]);
var inst_36660__$1 = (state_36695[(2)]);
var inst_36661 = (inst_36660__$1 == null);
var state_36695__$1 = (function (){var statearr_36700 = state_36695;
(statearr_36700[(7)] = inst_36660__$1);

return statearr_36700;
})();
if(cljs.core.truth_(inst_36661)){
var statearr_36701_36766 = state_36695__$1;
(statearr_36701_36766[(1)] = (5));

} else {
var statearr_36702_36767 = state_36695__$1;
(statearr_36702_36767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (15))){
var inst_36673 = (state_36695[(8)]);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36695__$1,(18),to,inst_36673);
} else {
if((state_val_36696 === (21))){
var inst_36686 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36703_36768 = state_36695__$1;
(statearr_36703_36768[(2)] = inst_36686);

(statearr_36703_36768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (13))){
var inst_36688 = (state_36695[(2)]);
var state_36695__$1 = (function (){var statearr_36704 = state_36695;
(statearr_36704[(9)] = inst_36688);

return statearr_36704;
})();
var statearr_36705_36769 = state_36695__$1;
(statearr_36705_36769[(2)] = null);

(statearr_36705_36769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (6))){
var inst_36660 = (state_36695[(7)]);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36695__$1,(11),inst_36660);
} else {
if((state_val_36696 === (17))){
var inst_36681 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
if(cljs.core.truth_(inst_36681)){
var statearr_36706_36770 = state_36695__$1;
(statearr_36706_36770[(1)] = (19));

} else {
var statearr_36707_36771 = state_36695__$1;
(statearr_36707_36771[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (3))){
var inst_36693 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36695__$1,inst_36693);
} else {
if((state_val_36696 === (12))){
var inst_36670 = (state_36695[(10)]);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36695__$1,(14),inst_36670);
} else {
if((state_val_36696 === (2))){
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36695__$1,(4),results);
} else {
if((state_val_36696 === (19))){
var state_36695__$1 = state_36695;
var statearr_36708_36772 = state_36695__$1;
(statearr_36708_36772[(2)] = null);

(statearr_36708_36772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (11))){
var inst_36670 = (state_36695[(2)]);
var state_36695__$1 = (function (){var statearr_36709 = state_36695;
(statearr_36709[(10)] = inst_36670);

return statearr_36709;
})();
var statearr_36710_36773 = state_36695__$1;
(statearr_36710_36773[(2)] = null);

(statearr_36710_36773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (9))){
var state_36695__$1 = state_36695;
var statearr_36711_36774 = state_36695__$1;
(statearr_36711_36774[(2)] = null);

(statearr_36711_36774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (5))){
var state_36695__$1 = state_36695;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36712_36775 = state_36695__$1;
(statearr_36712_36775[(1)] = (8));

} else {
var statearr_36713_36776 = state_36695__$1;
(statearr_36713_36776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (14))){
var inst_36673 = (state_36695[(8)]);
var inst_36675 = (state_36695[(11)]);
var inst_36673__$1 = (state_36695[(2)]);
var inst_36674 = (inst_36673__$1 == null);
var inst_36675__$1 = cljs.core.not.call(null,inst_36674);
var state_36695__$1 = (function (){var statearr_36714 = state_36695;
(statearr_36714[(8)] = inst_36673__$1);

(statearr_36714[(11)] = inst_36675__$1);

return statearr_36714;
})();
if(inst_36675__$1){
var statearr_36715_36777 = state_36695__$1;
(statearr_36715_36777[(1)] = (15));

} else {
var statearr_36716_36778 = state_36695__$1;
(statearr_36716_36778[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (16))){
var inst_36675 = (state_36695[(11)]);
var state_36695__$1 = state_36695;
var statearr_36717_36779 = state_36695__$1;
(statearr_36717_36779[(2)] = inst_36675);

(statearr_36717_36779[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (10))){
var inst_36667 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36718_36780 = state_36695__$1;
(statearr_36718_36780[(2)] = inst_36667);

(statearr_36718_36780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (18))){
var inst_36678 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36719_36781 = state_36695__$1;
(statearr_36719_36781[(2)] = inst_36678);

(statearr_36719_36781[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (8))){
var inst_36664 = cljs.core.async.close_BANG_.call(null,to);
var state_36695__$1 = state_36695;
var statearr_36720_36782 = state_36695__$1;
(statearr_36720_36782[(2)] = inst_36664);

(statearr_36720_36782[(1)] = (10));


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
}
}
}
}
});})(c__34236__auto__,jobs,results,process,async))
;
return ((function (switch__34221__auto__,c__34236__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____0 = (function (){
var statearr_36724 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__);

(statearr_36724[(1)] = (1));

return statearr_36724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____1 = (function (state_36695){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_36695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e36725){if((e36725 instanceof Object)){
var ex__34225__auto__ = e36725;
var statearr_36726_36783 = state_36695;
(statearr_36726_36783[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36784 = state_36695;
state_36695 = G__36784;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__ = function(state_36695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____1.call(this,state_36695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34222__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto__,jobs,results,process,async))
})();
var state__34238__auto__ = (function (){var statearr_36727 = f__34237__auto__.call(null);
(statearr_36727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto__);

return statearr_36727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto__,jobs,results,process,async))
);

return c__34236__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args36785 = [];
var len__30343__auto___36788 = arguments.length;
var i__30344__auto___36789 = (0);
while(true){
if((i__30344__auto___36789 < len__30343__auto___36788)){
args36785.push((arguments[i__30344__auto___36789]));

var G__36790 = (i__30344__auto___36789 + (1));
i__30344__auto___36789 = G__36790;
continue;
} else {
}
break;
}

var G__36787 = args36785.length;
switch (G__36787) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36785.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args36792 = [];
var len__30343__auto___36795 = arguments.length;
var i__30344__auto___36796 = (0);
while(true){
if((i__30344__auto___36796 < len__30343__auto___36795)){
args36792.push((arguments[i__30344__auto___36796]));

var G__36797 = (i__30344__auto___36796 + (1));
i__30344__auto___36796 = G__36797;
continue;
} else {
}
break;
}

var G__36794 = args36792.length;
switch (G__36794) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36792.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args36799 = [];
var len__30343__auto___36852 = arguments.length;
var i__30344__auto___36853 = (0);
while(true){
if((i__30344__auto___36853 < len__30343__auto___36852)){
args36799.push((arguments[i__30344__auto___36853]));

var G__36854 = (i__30344__auto___36853 + (1));
i__30344__auto___36853 = G__36854;
continue;
} else {
}
break;
}

var G__36801 = args36799.length;
switch (G__36801) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36799.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34236__auto___36856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto___36856,tc,fc){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto___36856,tc,fc){
return (function (state_36827){
var state_val_36828 = (state_36827[(1)]);
if((state_val_36828 === (7))){
var inst_36823 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
var statearr_36829_36857 = state_36827__$1;
(statearr_36829_36857[(2)] = inst_36823);

(statearr_36829_36857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (1))){
var state_36827__$1 = state_36827;
var statearr_36830_36858 = state_36827__$1;
(statearr_36830_36858[(2)] = null);

(statearr_36830_36858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (4))){
var inst_36804 = (state_36827[(7)]);
var inst_36804__$1 = (state_36827[(2)]);
var inst_36805 = (inst_36804__$1 == null);
var state_36827__$1 = (function (){var statearr_36831 = state_36827;
(statearr_36831[(7)] = inst_36804__$1);

return statearr_36831;
})();
if(cljs.core.truth_(inst_36805)){
var statearr_36832_36859 = state_36827__$1;
(statearr_36832_36859[(1)] = (5));

} else {
var statearr_36833_36860 = state_36827__$1;
(statearr_36833_36860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (13))){
var state_36827__$1 = state_36827;
var statearr_36834_36861 = state_36827__$1;
(statearr_36834_36861[(2)] = null);

(statearr_36834_36861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (6))){
var inst_36804 = (state_36827[(7)]);
var inst_36810 = p.call(null,inst_36804);
var state_36827__$1 = state_36827;
if(cljs.core.truth_(inst_36810)){
var statearr_36835_36862 = state_36827__$1;
(statearr_36835_36862[(1)] = (9));

} else {
var statearr_36836_36863 = state_36827__$1;
(statearr_36836_36863[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (3))){
var inst_36825 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36827__$1,inst_36825);
} else {
if((state_val_36828 === (12))){
var state_36827__$1 = state_36827;
var statearr_36837_36864 = state_36827__$1;
(statearr_36837_36864[(2)] = null);

(statearr_36837_36864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (2))){
var state_36827__$1 = state_36827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36827__$1,(4),ch);
} else {
if((state_val_36828 === (11))){
var inst_36804 = (state_36827[(7)]);
var inst_36814 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36827__$1,(8),inst_36814,inst_36804);
} else {
if((state_val_36828 === (9))){
var state_36827__$1 = state_36827;
var statearr_36838_36865 = state_36827__$1;
(statearr_36838_36865[(2)] = tc);

(statearr_36838_36865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (5))){
var inst_36807 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36808 = cljs.core.async.close_BANG_.call(null,fc);
var state_36827__$1 = (function (){var statearr_36839 = state_36827;
(statearr_36839[(8)] = inst_36807);

return statearr_36839;
})();
var statearr_36840_36866 = state_36827__$1;
(statearr_36840_36866[(2)] = inst_36808);

(statearr_36840_36866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (14))){
var inst_36821 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
var statearr_36841_36867 = state_36827__$1;
(statearr_36841_36867[(2)] = inst_36821);

(statearr_36841_36867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (10))){
var state_36827__$1 = state_36827;
var statearr_36842_36868 = state_36827__$1;
(statearr_36842_36868[(2)] = fc);

(statearr_36842_36868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36828 === (8))){
var inst_36816 = (state_36827[(2)]);
var state_36827__$1 = state_36827;
if(cljs.core.truth_(inst_36816)){
var statearr_36843_36869 = state_36827__$1;
(statearr_36843_36869[(1)] = (12));

} else {
var statearr_36844_36870 = state_36827__$1;
(statearr_36844_36870[(1)] = (13));

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
});})(c__34236__auto___36856,tc,fc))
;
return ((function (switch__34221__auto__,c__34236__auto___36856,tc,fc){
return (function() {
var cljs$core$async$state_machine__34222__auto__ = null;
var cljs$core$async$state_machine__34222__auto____0 = (function (){
var statearr_36848 = [null,null,null,null,null,null,null,null,null];
(statearr_36848[(0)] = cljs$core$async$state_machine__34222__auto__);

(statearr_36848[(1)] = (1));

return statearr_36848;
});
var cljs$core$async$state_machine__34222__auto____1 = (function (state_36827){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_36827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e36849){if((e36849 instanceof Object)){
var ex__34225__auto__ = e36849;
var statearr_36850_36871 = state_36827;
(statearr_36850_36871[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36872 = state_36827;
state_36827 = G__36872;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$state_machine__34222__auto__ = function(state_36827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34222__auto____1.call(this,state_36827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34222__auto____0;
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34222__auto____1;
return cljs$core$async$state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto___36856,tc,fc))
})();
var state__34238__auto__ = (function (){var statearr_36851 = f__34237__auto__.call(null);
(statearr_36851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___36856);

return statearr_36851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto___36856,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto__){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto__){
return (function (state_36936){
var state_val_36937 = (state_36936[(1)]);
if((state_val_36937 === (7))){
var inst_36932 = (state_36936[(2)]);
var state_36936__$1 = state_36936;
var statearr_36938_36959 = state_36936__$1;
(statearr_36938_36959[(2)] = inst_36932);

(statearr_36938_36959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36937 === (1))){
var inst_36916 = init;
var state_36936__$1 = (function (){var statearr_36939 = state_36936;
(statearr_36939[(7)] = inst_36916);

return statearr_36939;
})();
var statearr_36940_36960 = state_36936__$1;
(statearr_36940_36960[(2)] = null);

(statearr_36940_36960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36937 === (4))){
var inst_36919 = (state_36936[(8)]);
var inst_36919__$1 = (state_36936[(2)]);
var inst_36920 = (inst_36919__$1 == null);
var state_36936__$1 = (function (){var statearr_36941 = state_36936;
(statearr_36941[(8)] = inst_36919__$1);

return statearr_36941;
})();
if(cljs.core.truth_(inst_36920)){
var statearr_36942_36961 = state_36936__$1;
(statearr_36942_36961[(1)] = (5));

} else {
var statearr_36943_36962 = state_36936__$1;
(statearr_36943_36962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36937 === (6))){
var inst_36916 = (state_36936[(7)]);
var inst_36919 = (state_36936[(8)]);
var inst_36923 = (state_36936[(9)]);
var inst_36923__$1 = f.call(null,inst_36916,inst_36919);
var inst_36924 = cljs.core.reduced_QMARK_.call(null,inst_36923__$1);
var state_36936__$1 = (function (){var statearr_36944 = state_36936;
(statearr_36944[(9)] = inst_36923__$1);

return statearr_36944;
})();
if(inst_36924){
var statearr_36945_36963 = state_36936__$1;
(statearr_36945_36963[(1)] = (8));

} else {
var statearr_36946_36964 = state_36936__$1;
(statearr_36946_36964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36937 === (3))){
var inst_36934 = (state_36936[(2)]);
var state_36936__$1 = state_36936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36936__$1,inst_36934);
} else {
if((state_val_36937 === (2))){
var state_36936__$1 = state_36936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36936__$1,(4),ch);
} else {
if((state_val_36937 === (9))){
var inst_36923 = (state_36936[(9)]);
var inst_36916 = inst_36923;
var state_36936__$1 = (function (){var statearr_36947 = state_36936;
(statearr_36947[(7)] = inst_36916);

return statearr_36947;
})();
var statearr_36948_36965 = state_36936__$1;
(statearr_36948_36965[(2)] = null);

(statearr_36948_36965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36937 === (5))){
var inst_36916 = (state_36936[(7)]);
var state_36936__$1 = state_36936;
var statearr_36949_36966 = state_36936__$1;
(statearr_36949_36966[(2)] = inst_36916);

(statearr_36949_36966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36937 === (10))){
var inst_36930 = (state_36936[(2)]);
var state_36936__$1 = state_36936;
var statearr_36950_36967 = state_36936__$1;
(statearr_36950_36967[(2)] = inst_36930);

(statearr_36950_36967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36937 === (8))){
var inst_36923 = (state_36936[(9)]);
var inst_36926 = cljs.core.deref.call(null,inst_36923);
var state_36936__$1 = state_36936;
var statearr_36951_36968 = state_36936__$1;
(statearr_36951_36968[(2)] = inst_36926);

(statearr_36951_36968[(1)] = (10));


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
});})(c__34236__auto__))
;
return ((function (switch__34221__auto__,c__34236__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34222__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34222__auto____0 = (function (){
var statearr_36955 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36955[(0)] = cljs$core$async$reduce_$_state_machine__34222__auto__);

(statearr_36955[(1)] = (1));

return statearr_36955;
});
var cljs$core$async$reduce_$_state_machine__34222__auto____1 = (function (state_36936){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_36936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e36956){if((e36956 instanceof Object)){
var ex__34225__auto__ = e36956;
var statearr_36957_36969 = state_36936;
(statearr_36957_36969[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36970 = state_36936;
state_36936 = G__36970;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34222__auto__ = function(state_36936){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34222__auto____1.call(this,state_36936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34222__auto____0;
cljs$core$async$reduce_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34222__auto____1;
return cljs$core$async$reduce_$_state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto__))
})();
var state__34238__auto__ = (function (){var statearr_36958 = f__34237__auto__.call(null);
(statearr_36958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto__);

return statearr_36958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto__))
);

return c__34236__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args36971 = [];
var len__30343__auto___37023 = arguments.length;
var i__30344__auto___37024 = (0);
while(true){
if((i__30344__auto___37024 < len__30343__auto___37023)){
args36971.push((arguments[i__30344__auto___37024]));

var G__37025 = (i__30344__auto___37024 + (1));
i__30344__auto___37024 = G__37025;
continue;
} else {
}
break;
}

var G__36973 = args36971.length;
switch (G__36973) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36971.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto__){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto__){
return (function (state_36998){
var state_val_36999 = (state_36998[(1)]);
if((state_val_36999 === (7))){
var inst_36980 = (state_36998[(2)]);
var state_36998__$1 = state_36998;
var statearr_37000_37027 = state_36998__$1;
(statearr_37000_37027[(2)] = inst_36980);

(statearr_37000_37027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36999 === (1))){
var inst_36974 = cljs.core.seq.call(null,coll);
var inst_36975 = inst_36974;
var state_36998__$1 = (function (){var statearr_37001 = state_36998;
(statearr_37001[(7)] = inst_36975);

return statearr_37001;
})();
var statearr_37002_37028 = state_36998__$1;
(statearr_37002_37028[(2)] = null);

(statearr_37002_37028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36999 === (4))){
var inst_36975 = (state_36998[(7)]);
var inst_36978 = cljs.core.first.call(null,inst_36975);
var state_36998__$1 = state_36998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36998__$1,(7),ch,inst_36978);
} else {
if((state_val_36999 === (13))){
var inst_36992 = (state_36998[(2)]);
var state_36998__$1 = state_36998;
var statearr_37003_37029 = state_36998__$1;
(statearr_37003_37029[(2)] = inst_36992);

(statearr_37003_37029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36999 === (6))){
var inst_36983 = (state_36998[(2)]);
var state_36998__$1 = state_36998;
if(cljs.core.truth_(inst_36983)){
var statearr_37004_37030 = state_36998__$1;
(statearr_37004_37030[(1)] = (8));

} else {
var statearr_37005_37031 = state_36998__$1;
(statearr_37005_37031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36999 === (3))){
var inst_36996 = (state_36998[(2)]);
var state_36998__$1 = state_36998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36998__$1,inst_36996);
} else {
if((state_val_36999 === (12))){
var state_36998__$1 = state_36998;
var statearr_37006_37032 = state_36998__$1;
(statearr_37006_37032[(2)] = null);

(statearr_37006_37032[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36999 === (2))){
var inst_36975 = (state_36998[(7)]);
var state_36998__$1 = state_36998;
if(cljs.core.truth_(inst_36975)){
var statearr_37007_37033 = state_36998__$1;
(statearr_37007_37033[(1)] = (4));

} else {
var statearr_37008_37034 = state_36998__$1;
(statearr_37008_37034[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36999 === (11))){
var inst_36989 = cljs.core.async.close_BANG_.call(null,ch);
var state_36998__$1 = state_36998;
var statearr_37009_37035 = state_36998__$1;
(statearr_37009_37035[(2)] = inst_36989);

(statearr_37009_37035[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36999 === (9))){
var state_36998__$1 = state_36998;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37010_37036 = state_36998__$1;
(statearr_37010_37036[(1)] = (11));

} else {
var statearr_37011_37037 = state_36998__$1;
(statearr_37011_37037[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36999 === (5))){
var inst_36975 = (state_36998[(7)]);
var state_36998__$1 = state_36998;
var statearr_37012_37038 = state_36998__$1;
(statearr_37012_37038[(2)] = inst_36975);

(statearr_37012_37038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36999 === (10))){
var inst_36994 = (state_36998[(2)]);
var state_36998__$1 = state_36998;
var statearr_37013_37039 = state_36998__$1;
(statearr_37013_37039[(2)] = inst_36994);

(statearr_37013_37039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36999 === (8))){
var inst_36975 = (state_36998[(7)]);
var inst_36985 = cljs.core.next.call(null,inst_36975);
var inst_36975__$1 = inst_36985;
var state_36998__$1 = (function (){var statearr_37014 = state_36998;
(statearr_37014[(7)] = inst_36975__$1);

return statearr_37014;
})();
var statearr_37015_37040 = state_36998__$1;
(statearr_37015_37040[(2)] = null);

(statearr_37015_37040[(1)] = (2));


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
});})(c__34236__auto__))
;
return ((function (switch__34221__auto__,c__34236__auto__){
return (function() {
var cljs$core$async$state_machine__34222__auto__ = null;
var cljs$core$async$state_machine__34222__auto____0 = (function (){
var statearr_37019 = [null,null,null,null,null,null,null,null];
(statearr_37019[(0)] = cljs$core$async$state_machine__34222__auto__);

(statearr_37019[(1)] = (1));

return statearr_37019;
});
var cljs$core$async$state_machine__34222__auto____1 = (function (state_36998){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_36998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e37020){if((e37020 instanceof Object)){
var ex__34225__auto__ = e37020;
var statearr_37021_37041 = state_36998;
(statearr_37021_37041[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37042 = state_36998;
state_36998 = G__37042;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$state_machine__34222__auto__ = function(state_36998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34222__auto____1.call(this,state_36998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34222__auto____0;
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34222__auto____1;
return cljs$core$async$state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto__))
})();
var state__34238__auto__ = (function (){var statearr_37022 = f__34237__auto__.call(null);
(statearr_37022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto__);

return statearr_37022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto__))
);

return c__34236__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__29936__auto__ = (((_ == null))?null:_);
var m__29937__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,_);
} else {
var m__29937__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__29936__auto__ = (((m == null))?null:m);
var m__29937__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29937__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__29936__auto__ = (((m == null))?null:m);
var m__29937__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,m,ch);
} else {
var m__29937__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__29936__auto__ = (((m == null))?null:m);
var m__29937__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,m);
} else {
var m__29937__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async37264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37264 = (function (mult,ch,cs,meta37265){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta37265 = meta37265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37266,meta37265__$1){
var self__ = this;
var _37266__$1 = this;
return (new cljs.core.async.t_cljs$core$async37264(self__.mult,self__.ch,self__.cs,meta37265__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async37264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37266){
var self__ = this;
var _37266__$1 = this;
return self__.meta37265;
});})(cs))
;

cljs.core.async.t_cljs$core$async37264.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37264.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async37264.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async37264.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37264.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37264.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37264.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37265","meta37265",537491932,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37264";

cljs.core.async.t_cljs$core$async37264.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cljs.core.async/t_cljs$core$async37264");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async37264 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37264(mult__$1,ch__$1,cs__$1,meta37265){
return (new cljs.core.async.t_cljs$core$async37264(mult__$1,ch__$1,cs__$1,meta37265));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37264(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__34236__auto___37485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto___37485,cs,m,dchan,dctr,done){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto___37485,cs,m,dchan,dctr,done){
return (function (state_37397){
var state_val_37398 = (state_37397[(1)]);
if((state_val_37398 === (7))){
var inst_37393 = (state_37397[(2)]);
var state_37397__$1 = state_37397;
var statearr_37399_37486 = state_37397__$1;
(statearr_37399_37486[(2)] = inst_37393);

(statearr_37399_37486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (20))){
var inst_37298 = (state_37397[(7)]);
var inst_37308 = cljs.core.first.call(null,inst_37298);
var inst_37309 = cljs.core.nth.call(null,inst_37308,(0),null);
var inst_37310 = cljs.core.nth.call(null,inst_37308,(1),null);
var state_37397__$1 = (function (){var statearr_37400 = state_37397;
(statearr_37400[(8)] = inst_37309);

return statearr_37400;
})();
if(cljs.core.truth_(inst_37310)){
var statearr_37401_37487 = state_37397__$1;
(statearr_37401_37487[(1)] = (22));

} else {
var statearr_37402_37488 = state_37397__$1;
(statearr_37402_37488[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (27))){
var inst_37269 = (state_37397[(9)]);
var inst_37345 = (state_37397[(10)]);
var inst_37340 = (state_37397[(11)]);
var inst_37338 = (state_37397[(12)]);
var inst_37345__$1 = cljs.core._nth.call(null,inst_37338,inst_37340);
var inst_37346 = cljs.core.async.put_BANG_.call(null,inst_37345__$1,inst_37269,done);
var state_37397__$1 = (function (){var statearr_37403 = state_37397;
(statearr_37403[(10)] = inst_37345__$1);

return statearr_37403;
})();
if(cljs.core.truth_(inst_37346)){
var statearr_37404_37489 = state_37397__$1;
(statearr_37404_37489[(1)] = (30));

} else {
var statearr_37405_37490 = state_37397__$1;
(statearr_37405_37490[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (1))){
var state_37397__$1 = state_37397;
var statearr_37406_37491 = state_37397__$1;
(statearr_37406_37491[(2)] = null);

(statearr_37406_37491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (24))){
var inst_37298 = (state_37397[(7)]);
var inst_37315 = (state_37397[(2)]);
var inst_37316 = cljs.core.next.call(null,inst_37298);
var inst_37278 = inst_37316;
var inst_37279 = null;
var inst_37280 = (0);
var inst_37281 = (0);
var state_37397__$1 = (function (){var statearr_37407 = state_37397;
(statearr_37407[(13)] = inst_37315);

(statearr_37407[(14)] = inst_37278);

(statearr_37407[(15)] = inst_37279);

(statearr_37407[(16)] = inst_37281);

(statearr_37407[(17)] = inst_37280);

return statearr_37407;
})();
var statearr_37408_37492 = state_37397__$1;
(statearr_37408_37492[(2)] = null);

(statearr_37408_37492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (39))){
var state_37397__$1 = state_37397;
var statearr_37412_37493 = state_37397__$1;
(statearr_37412_37493[(2)] = null);

(statearr_37412_37493[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (4))){
var inst_37269 = (state_37397[(9)]);
var inst_37269__$1 = (state_37397[(2)]);
var inst_37270 = (inst_37269__$1 == null);
var state_37397__$1 = (function (){var statearr_37413 = state_37397;
(statearr_37413[(9)] = inst_37269__$1);

return statearr_37413;
})();
if(cljs.core.truth_(inst_37270)){
var statearr_37414_37494 = state_37397__$1;
(statearr_37414_37494[(1)] = (5));

} else {
var statearr_37415_37495 = state_37397__$1;
(statearr_37415_37495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (15))){
var inst_37278 = (state_37397[(14)]);
var inst_37279 = (state_37397[(15)]);
var inst_37281 = (state_37397[(16)]);
var inst_37280 = (state_37397[(17)]);
var inst_37294 = (state_37397[(2)]);
var inst_37295 = (inst_37281 + (1));
var tmp37409 = inst_37278;
var tmp37410 = inst_37279;
var tmp37411 = inst_37280;
var inst_37278__$1 = tmp37409;
var inst_37279__$1 = tmp37410;
var inst_37280__$1 = tmp37411;
var inst_37281__$1 = inst_37295;
var state_37397__$1 = (function (){var statearr_37416 = state_37397;
(statearr_37416[(18)] = inst_37294);

(statearr_37416[(14)] = inst_37278__$1);

(statearr_37416[(15)] = inst_37279__$1);

(statearr_37416[(16)] = inst_37281__$1);

(statearr_37416[(17)] = inst_37280__$1);

return statearr_37416;
})();
var statearr_37417_37496 = state_37397__$1;
(statearr_37417_37496[(2)] = null);

(statearr_37417_37496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (21))){
var inst_37319 = (state_37397[(2)]);
var state_37397__$1 = state_37397;
var statearr_37421_37497 = state_37397__$1;
(statearr_37421_37497[(2)] = inst_37319);

(statearr_37421_37497[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (31))){
var inst_37345 = (state_37397[(10)]);
var inst_37349 = done.call(null,null);
var inst_37350 = cljs.core.async.untap_STAR_.call(null,m,inst_37345);
var state_37397__$1 = (function (){var statearr_37422 = state_37397;
(statearr_37422[(19)] = inst_37349);

return statearr_37422;
})();
var statearr_37423_37498 = state_37397__$1;
(statearr_37423_37498[(2)] = inst_37350);

(statearr_37423_37498[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (32))){
var inst_37339 = (state_37397[(20)]);
var inst_37337 = (state_37397[(21)]);
var inst_37340 = (state_37397[(11)]);
var inst_37338 = (state_37397[(12)]);
var inst_37352 = (state_37397[(2)]);
var inst_37353 = (inst_37340 + (1));
var tmp37418 = inst_37339;
var tmp37419 = inst_37337;
var tmp37420 = inst_37338;
var inst_37337__$1 = tmp37419;
var inst_37338__$1 = tmp37420;
var inst_37339__$1 = tmp37418;
var inst_37340__$1 = inst_37353;
var state_37397__$1 = (function (){var statearr_37424 = state_37397;
(statearr_37424[(20)] = inst_37339__$1);

(statearr_37424[(21)] = inst_37337__$1);

(statearr_37424[(22)] = inst_37352);

(statearr_37424[(11)] = inst_37340__$1);

(statearr_37424[(12)] = inst_37338__$1);

return statearr_37424;
})();
var statearr_37425_37499 = state_37397__$1;
(statearr_37425_37499[(2)] = null);

(statearr_37425_37499[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (40))){
var inst_37365 = (state_37397[(23)]);
var inst_37369 = done.call(null,null);
var inst_37370 = cljs.core.async.untap_STAR_.call(null,m,inst_37365);
var state_37397__$1 = (function (){var statearr_37426 = state_37397;
(statearr_37426[(24)] = inst_37369);

return statearr_37426;
})();
var statearr_37427_37500 = state_37397__$1;
(statearr_37427_37500[(2)] = inst_37370);

(statearr_37427_37500[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (33))){
var inst_37356 = (state_37397[(25)]);
var inst_37358 = cljs.core.chunked_seq_QMARK_.call(null,inst_37356);
var state_37397__$1 = state_37397;
if(inst_37358){
var statearr_37428_37501 = state_37397__$1;
(statearr_37428_37501[(1)] = (36));

} else {
var statearr_37429_37502 = state_37397__$1;
(statearr_37429_37502[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (13))){
var inst_37288 = (state_37397[(26)]);
var inst_37291 = cljs.core.async.close_BANG_.call(null,inst_37288);
var state_37397__$1 = state_37397;
var statearr_37430_37503 = state_37397__$1;
(statearr_37430_37503[(2)] = inst_37291);

(statearr_37430_37503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (22))){
var inst_37309 = (state_37397[(8)]);
var inst_37312 = cljs.core.async.close_BANG_.call(null,inst_37309);
var state_37397__$1 = state_37397;
var statearr_37431_37504 = state_37397__$1;
(statearr_37431_37504[(2)] = inst_37312);

(statearr_37431_37504[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (36))){
var inst_37356 = (state_37397[(25)]);
var inst_37360 = cljs.core.chunk_first.call(null,inst_37356);
var inst_37361 = cljs.core.chunk_rest.call(null,inst_37356);
var inst_37362 = cljs.core.count.call(null,inst_37360);
var inst_37337 = inst_37361;
var inst_37338 = inst_37360;
var inst_37339 = inst_37362;
var inst_37340 = (0);
var state_37397__$1 = (function (){var statearr_37432 = state_37397;
(statearr_37432[(20)] = inst_37339);

(statearr_37432[(21)] = inst_37337);

(statearr_37432[(11)] = inst_37340);

(statearr_37432[(12)] = inst_37338);

return statearr_37432;
})();
var statearr_37433_37505 = state_37397__$1;
(statearr_37433_37505[(2)] = null);

(statearr_37433_37505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (41))){
var inst_37356 = (state_37397[(25)]);
var inst_37372 = (state_37397[(2)]);
var inst_37373 = cljs.core.next.call(null,inst_37356);
var inst_37337 = inst_37373;
var inst_37338 = null;
var inst_37339 = (0);
var inst_37340 = (0);
var state_37397__$1 = (function (){var statearr_37434 = state_37397;
(statearr_37434[(20)] = inst_37339);

(statearr_37434[(21)] = inst_37337);

(statearr_37434[(11)] = inst_37340);

(statearr_37434[(12)] = inst_37338);

(statearr_37434[(27)] = inst_37372);

return statearr_37434;
})();
var statearr_37435_37506 = state_37397__$1;
(statearr_37435_37506[(2)] = null);

(statearr_37435_37506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (43))){
var state_37397__$1 = state_37397;
var statearr_37436_37507 = state_37397__$1;
(statearr_37436_37507[(2)] = null);

(statearr_37436_37507[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (29))){
var inst_37381 = (state_37397[(2)]);
var state_37397__$1 = state_37397;
var statearr_37437_37508 = state_37397__$1;
(statearr_37437_37508[(2)] = inst_37381);

(statearr_37437_37508[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (44))){
var inst_37390 = (state_37397[(2)]);
var state_37397__$1 = (function (){var statearr_37438 = state_37397;
(statearr_37438[(28)] = inst_37390);

return statearr_37438;
})();
var statearr_37439_37509 = state_37397__$1;
(statearr_37439_37509[(2)] = null);

(statearr_37439_37509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (6))){
var inst_37329 = (state_37397[(29)]);
var inst_37328 = cljs.core.deref.call(null,cs);
var inst_37329__$1 = cljs.core.keys.call(null,inst_37328);
var inst_37330 = cljs.core.count.call(null,inst_37329__$1);
var inst_37331 = cljs.core.reset_BANG_.call(null,dctr,inst_37330);
var inst_37336 = cljs.core.seq.call(null,inst_37329__$1);
var inst_37337 = inst_37336;
var inst_37338 = null;
var inst_37339 = (0);
var inst_37340 = (0);
var state_37397__$1 = (function (){var statearr_37440 = state_37397;
(statearr_37440[(20)] = inst_37339);

(statearr_37440[(21)] = inst_37337);

(statearr_37440[(30)] = inst_37331);

(statearr_37440[(11)] = inst_37340);

(statearr_37440[(12)] = inst_37338);

(statearr_37440[(29)] = inst_37329__$1);

return statearr_37440;
})();
var statearr_37441_37510 = state_37397__$1;
(statearr_37441_37510[(2)] = null);

(statearr_37441_37510[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (28))){
var inst_37337 = (state_37397[(21)]);
var inst_37356 = (state_37397[(25)]);
var inst_37356__$1 = cljs.core.seq.call(null,inst_37337);
var state_37397__$1 = (function (){var statearr_37442 = state_37397;
(statearr_37442[(25)] = inst_37356__$1);

return statearr_37442;
})();
if(inst_37356__$1){
var statearr_37443_37511 = state_37397__$1;
(statearr_37443_37511[(1)] = (33));

} else {
var statearr_37444_37512 = state_37397__$1;
(statearr_37444_37512[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (25))){
var inst_37339 = (state_37397[(20)]);
var inst_37340 = (state_37397[(11)]);
var inst_37342 = (inst_37340 < inst_37339);
var inst_37343 = inst_37342;
var state_37397__$1 = state_37397;
if(cljs.core.truth_(inst_37343)){
var statearr_37445_37513 = state_37397__$1;
(statearr_37445_37513[(1)] = (27));

} else {
var statearr_37446_37514 = state_37397__$1;
(statearr_37446_37514[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (34))){
var state_37397__$1 = state_37397;
var statearr_37447_37515 = state_37397__$1;
(statearr_37447_37515[(2)] = null);

(statearr_37447_37515[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (17))){
var state_37397__$1 = state_37397;
var statearr_37448_37516 = state_37397__$1;
(statearr_37448_37516[(2)] = null);

(statearr_37448_37516[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (3))){
var inst_37395 = (state_37397[(2)]);
var state_37397__$1 = state_37397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37397__$1,inst_37395);
} else {
if((state_val_37398 === (12))){
var inst_37324 = (state_37397[(2)]);
var state_37397__$1 = state_37397;
var statearr_37449_37517 = state_37397__$1;
(statearr_37449_37517[(2)] = inst_37324);

(statearr_37449_37517[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (2))){
var state_37397__$1 = state_37397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37397__$1,(4),ch);
} else {
if((state_val_37398 === (23))){
var state_37397__$1 = state_37397;
var statearr_37450_37518 = state_37397__$1;
(statearr_37450_37518[(2)] = null);

(statearr_37450_37518[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (35))){
var inst_37379 = (state_37397[(2)]);
var state_37397__$1 = state_37397;
var statearr_37451_37519 = state_37397__$1;
(statearr_37451_37519[(2)] = inst_37379);

(statearr_37451_37519[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (19))){
var inst_37298 = (state_37397[(7)]);
var inst_37302 = cljs.core.chunk_first.call(null,inst_37298);
var inst_37303 = cljs.core.chunk_rest.call(null,inst_37298);
var inst_37304 = cljs.core.count.call(null,inst_37302);
var inst_37278 = inst_37303;
var inst_37279 = inst_37302;
var inst_37280 = inst_37304;
var inst_37281 = (0);
var state_37397__$1 = (function (){var statearr_37452 = state_37397;
(statearr_37452[(14)] = inst_37278);

(statearr_37452[(15)] = inst_37279);

(statearr_37452[(16)] = inst_37281);

(statearr_37452[(17)] = inst_37280);

return statearr_37452;
})();
var statearr_37453_37520 = state_37397__$1;
(statearr_37453_37520[(2)] = null);

(statearr_37453_37520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (11))){
var inst_37298 = (state_37397[(7)]);
var inst_37278 = (state_37397[(14)]);
var inst_37298__$1 = cljs.core.seq.call(null,inst_37278);
var state_37397__$1 = (function (){var statearr_37454 = state_37397;
(statearr_37454[(7)] = inst_37298__$1);

return statearr_37454;
})();
if(inst_37298__$1){
var statearr_37455_37521 = state_37397__$1;
(statearr_37455_37521[(1)] = (16));

} else {
var statearr_37456_37522 = state_37397__$1;
(statearr_37456_37522[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (9))){
var inst_37326 = (state_37397[(2)]);
var state_37397__$1 = state_37397;
var statearr_37457_37523 = state_37397__$1;
(statearr_37457_37523[(2)] = inst_37326);

(statearr_37457_37523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (5))){
var inst_37276 = cljs.core.deref.call(null,cs);
var inst_37277 = cljs.core.seq.call(null,inst_37276);
var inst_37278 = inst_37277;
var inst_37279 = null;
var inst_37280 = (0);
var inst_37281 = (0);
var state_37397__$1 = (function (){var statearr_37458 = state_37397;
(statearr_37458[(14)] = inst_37278);

(statearr_37458[(15)] = inst_37279);

(statearr_37458[(16)] = inst_37281);

(statearr_37458[(17)] = inst_37280);

return statearr_37458;
})();
var statearr_37459_37524 = state_37397__$1;
(statearr_37459_37524[(2)] = null);

(statearr_37459_37524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (14))){
var state_37397__$1 = state_37397;
var statearr_37460_37525 = state_37397__$1;
(statearr_37460_37525[(2)] = null);

(statearr_37460_37525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (45))){
var inst_37387 = (state_37397[(2)]);
var state_37397__$1 = state_37397;
var statearr_37461_37526 = state_37397__$1;
(statearr_37461_37526[(2)] = inst_37387);

(statearr_37461_37526[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (26))){
var inst_37329 = (state_37397[(29)]);
var inst_37383 = (state_37397[(2)]);
var inst_37384 = cljs.core.seq.call(null,inst_37329);
var state_37397__$1 = (function (){var statearr_37462 = state_37397;
(statearr_37462[(31)] = inst_37383);

return statearr_37462;
})();
if(inst_37384){
var statearr_37463_37527 = state_37397__$1;
(statearr_37463_37527[(1)] = (42));

} else {
var statearr_37464_37528 = state_37397__$1;
(statearr_37464_37528[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (16))){
var inst_37298 = (state_37397[(7)]);
var inst_37300 = cljs.core.chunked_seq_QMARK_.call(null,inst_37298);
var state_37397__$1 = state_37397;
if(inst_37300){
var statearr_37465_37529 = state_37397__$1;
(statearr_37465_37529[(1)] = (19));

} else {
var statearr_37466_37530 = state_37397__$1;
(statearr_37466_37530[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (38))){
var inst_37376 = (state_37397[(2)]);
var state_37397__$1 = state_37397;
var statearr_37467_37531 = state_37397__$1;
(statearr_37467_37531[(2)] = inst_37376);

(statearr_37467_37531[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (30))){
var state_37397__$1 = state_37397;
var statearr_37468_37532 = state_37397__$1;
(statearr_37468_37532[(2)] = null);

(statearr_37468_37532[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (10))){
var inst_37279 = (state_37397[(15)]);
var inst_37281 = (state_37397[(16)]);
var inst_37287 = cljs.core._nth.call(null,inst_37279,inst_37281);
var inst_37288 = cljs.core.nth.call(null,inst_37287,(0),null);
var inst_37289 = cljs.core.nth.call(null,inst_37287,(1),null);
var state_37397__$1 = (function (){var statearr_37469 = state_37397;
(statearr_37469[(26)] = inst_37288);

return statearr_37469;
})();
if(cljs.core.truth_(inst_37289)){
var statearr_37470_37533 = state_37397__$1;
(statearr_37470_37533[(1)] = (13));

} else {
var statearr_37471_37534 = state_37397__$1;
(statearr_37471_37534[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (18))){
var inst_37322 = (state_37397[(2)]);
var state_37397__$1 = state_37397;
var statearr_37472_37535 = state_37397__$1;
(statearr_37472_37535[(2)] = inst_37322);

(statearr_37472_37535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (42))){
var state_37397__$1 = state_37397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37397__$1,(45),dchan);
} else {
if((state_val_37398 === (37))){
var inst_37269 = (state_37397[(9)]);
var inst_37365 = (state_37397[(23)]);
var inst_37356 = (state_37397[(25)]);
var inst_37365__$1 = cljs.core.first.call(null,inst_37356);
var inst_37366 = cljs.core.async.put_BANG_.call(null,inst_37365__$1,inst_37269,done);
var state_37397__$1 = (function (){var statearr_37473 = state_37397;
(statearr_37473[(23)] = inst_37365__$1);

return statearr_37473;
})();
if(cljs.core.truth_(inst_37366)){
var statearr_37474_37536 = state_37397__$1;
(statearr_37474_37536[(1)] = (39));

} else {
var statearr_37475_37537 = state_37397__$1;
(statearr_37475_37537[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (8))){
var inst_37281 = (state_37397[(16)]);
var inst_37280 = (state_37397[(17)]);
var inst_37283 = (inst_37281 < inst_37280);
var inst_37284 = inst_37283;
var state_37397__$1 = state_37397;
if(cljs.core.truth_(inst_37284)){
var statearr_37476_37538 = state_37397__$1;
(statearr_37476_37538[(1)] = (10));

} else {
var statearr_37477_37539 = state_37397__$1;
(statearr_37477_37539[(1)] = (11));

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
});})(c__34236__auto___37485,cs,m,dchan,dctr,done))
;
return ((function (switch__34221__auto__,c__34236__auto___37485,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34222__auto__ = null;
var cljs$core$async$mult_$_state_machine__34222__auto____0 = (function (){
var statearr_37481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37481[(0)] = cljs$core$async$mult_$_state_machine__34222__auto__);

(statearr_37481[(1)] = (1));

return statearr_37481;
});
var cljs$core$async$mult_$_state_machine__34222__auto____1 = (function (state_37397){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_37397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e37482){if((e37482 instanceof Object)){
var ex__34225__auto__ = e37482;
var statearr_37483_37540 = state_37397;
(statearr_37483_37540[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37541 = state_37397;
state_37397 = G__37541;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34222__auto__ = function(state_37397){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34222__auto____1.call(this,state_37397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34222__auto____0;
cljs$core$async$mult_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34222__auto____1;
return cljs$core$async$mult_$_state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto___37485,cs,m,dchan,dctr,done))
})();
var state__34238__auto__ = (function (){var statearr_37484 = f__34237__auto__.call(null);
(statearr_37484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___37485);

return statearr_37484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto___37485,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args37542 = [];
var len__30343__auto___37545 = arguments.length;
var i__30344__auto___37546 = (0);
while(true){
if((i__30344__auto___37546 < len__30343__auto___37545)){
args37542.push((arguments[i__30344__auto___37546]));

var G__37547 = (i__30344__auto___37546 + (1));
i__30344__auto___37546 = G__37547;
continue;
} else {
}
break;
}

var G__37544 = args37542.length;
switch (G__37544) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37542.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__29936__auto__ = (((m == null))?null:m);
var m__29937__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,m,ch);
} else {
var m__29937__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__29936__auto__ = (((m == null))?null:m);
var m__29937__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,m,ch);
} else {
var m__29937__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__29936__auto__ = (((m == null))?null:m);
var m__29937__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,m);
} else {
var m__29937__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__29936__auto__ = (((m == null))?null:m);
var m__29937__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,m,state_map);
} else {
var m__29937__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__29936__auto__ = (((m == null))?null:m);
var m__29937__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,m,mode);
} else {
var m__29937__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__30350__auto__ = [];
var len__30343__auto___37559 = arguments.length;
var i__30344__auto___37560 = (0);
while(true){
if((i__30344__auto___37560 < len__30343__auto___37559)){
args__30350__auto__.push((arguments[i__30344__auto___37560]));

var G__37561 = (i__30344__auto___37560 + (1));
i__30344__auto___37560 = G__37561;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((3) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30351__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37553){
var map__37554 = p__37553;
var map__37554__$1 = ((((!((map__37554 == null)))?((((map__37554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37554):map__37554);
var opts = map__37554__$1;
var statearr_37556_37562 = state;
(statearr_37556_37562[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__37554,map__37554__$1,opts){
return (function (val){
var statearr_37557_37563 = state;
(statearr_37557_37563[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37554,map__37554__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_37558_37564 = state;
(statearr_37558_37564[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37549){
var G__37550 = cljs.core.first.call(null,seq37549);
var seq37549__$1 = cljs.core.next.call(null,seq37549);
var G__37551 = cljs.core.first.call(null,seq37549__$1);
var seq37549__$2 = cljs.core.next.call(null,seq37549__$1);
var G__37552 = cljs.core.first.call(null,seq37549__$2);
var seq37549__$3 = cljs.core.next.call(null,seq37549__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37550,G__37551,G__37552,seq37549__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async37728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37728 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37729){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37729 = meta37729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37730,meta37729__$1){
var self__ = this;
var _37730__$1 = this;
return (new cljs.core.async.t_cljs$core$async37728(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37729__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37730){
var self__ = this;
var _37730__$1 = this;
return self__.meta37729;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37728.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37729","meta37729",2135564339,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37728";

cljs.core.async.t_cljs$core$async37728.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cljs.core.async/t_cljs$core$async37728");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async37728 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37728(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37729){
return (new cljs.core.async.t_cljs$core$async37728(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37729));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37728(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34236__auto___37891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto___37891,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto___37891,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37828){
var state_val_37829 = (state_37828[(1)]);
if((state_val_37829 === (7))){
var inst_37746 = (state_37828[(2)]);
var state_37828__$1 = state_37828;
var statearr_37830_37892 = state_37828__$1;
(statearr_37830_37892[(2)] = inst_37746);

(statearr_37830_37892[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (20))){
var inst_37758 = (state_37828[(7)]);
var state_37828__$1 = state_37828;
var statearr_37831_37893 = state_37828__$1;
(statearr_37831_37893[(2)] = inst_37758);

(statearr_37831_37893[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (27))){
var state_37828__$1 = state_37828;
var statearr_37832_37894 = state_37828__$1;
(statearr_37832_37894[(2)] = null);

(statearr_37832_37894[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (1))){
var inst_37734 = (state_37828[(8)]);
var inst_37734__$1 = calc_state.call(null);
var inst_37736 = (inst_37734__$1 == null);
var inst_37737 = cljs.core.not.call(null,inst_37736);
var state_37828__$1 = (function (){var statearr_37833 = state_37828;
(statearr_37833[(8)] = inst_37734__$1);

return statearr_37833;
})();
if(inst_37737){
var statearr_37834_37895 = state_37828__$1;
(statearr_37834_37895[(1)] = (2));

} else {
var statearr_37835_37896 = state_37828__$1;
(statearr_37835_37896[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (24))){
var inst_37781 = (state_37828[(9)]);
var inst_37802 = (state_37828[(10)]);
var inst_37788 = (state_37828[(11)]);
var inst_37802__$1 = inst_37781.call(null,inst_37788);
var state_37828__$1 = (function (){var statearr_37836 = state_37828;
(statearr_37836[(10)] = inst_37802__$1);

return statearr_37836;
})();
if(cljs.core.truth_(inst_37802__$1)){
var statearr_37837_37897 = state_37828__$1;
(statearr_37837_37897[(1)] = (29));

} else {
var statearr_37838_37898 = state_37828__$1;
(statearr_37838_37898[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (4))){
var inst_37749 = (state_37828[(2)]);
var state_37828__$1 = state_37828;
if(cljs.core.truth_(inst_37749)){
var statearr_37839_37899 = state_37828__$1;
(statearr_37839_37899[(1)] = (8));

} else {
var statearr_37840_37900 = state_37828__$1;
(statearr_37840_37900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (15))){
var inst_37775 = (state_37828[(2)]);
var state_37828__$1 = state_37828;
if(cljs.core.truth_(inst_37775)){
var statearr_37841_37901 = state_37828__$1;
(statearr_37841_37901[(1)] = (19));

} else {
var statearr_37842_37902 = state_37828__$1;
(statearr_37842_37902[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (21))){
var inst_37780 = (state_37828[(12)]);
var inst_37780__$1 = (state_37828[(2)]);
var inst_37781 = cljs.core.get.call(null,inst_37780__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37782 = cljs.core.get.call(null,inst_37780__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37783 = cljs.core.get.call(null,inst_37780__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37828__$1 = (function (){var statearr_37843 = state_37828;
(statearr_37843[(9)] = inst_37781);

(statearr_37843[(13)] = inst_37782);

(statearr_37843[(12)] = inst_37780__$1);

return statearr_37843;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37828__$1,(22),inst_37783);
} else {
if((state_val_37829 === (31))){
var inst_37810 = (state_37828[(2)]);
var state_37828__$1 = state_37828;
if(cljs.core.truth_(inst_37810)){
var statearr_37844_37903 = state_37828__$1;
(statearr_37844_37903[(1)] = (32));

} else {
var statearr_37845_37904 = state_37828__$1;
(statearr_37845_37904[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (32))){
var inst_37787 = (state_37828[(14)]);
var state_37828__$1 = state_37828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37828__$1,(35),out,inst_37787);
} else {
if((state_val_37829 === (33))){
var inst_37780 = (state_37828[(12)]);
var inst_37758 = inst_37780;
var state_37828__$1 = (function (){var statearr_37846 = state_37828;
(statearr_37846[(7)] = inst_37758);

return statearr_37846;
})();
var statearr_37847_37905 = state_37828__$1;
(statearr_37847_37905[(2)] = null);

(statearr_37847_37905[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (13))){
var inst_37758 = (state_37828[(7)]);
var inst_37765 = inst_37758.cljs$lang$protocol_mask$partition0$;
var inst_37766 = (inst_37765 & (64));
var inst_37767 = inst_37758.cljs$core$ISeq$;
var inst_37768 = (inst_37766) || (inst_37767);
var state_37828__$1 = state_37828;
if(cljs.core.truth_(inst_37768)){
var statearr_37848_37906 = state_37828__$1;
(statearr_37848_37906[(1)] = (16));

} else {
var statearr_37849_37907 = state_37828__$1;
(statearr_37849_37907[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (22))){
var inst_37788 = (state_37828[(11)]);
var inst_37787 = (state_37828[(14)]);
var inst_37786 = (state_37828[(2)]);
var inst_37787__$1 = cljs.core.nth.call(null,inst_37786,(0),null);
var inst_37788__$1 = cljs.core.nth.call(null,inst_37786,(1),null);
var inst_37789 = (inst_37787__$1 == null);
var inst_37790 = cljs.core._EQ_.call(null,inst_37788__$1,change);
var inst_37791 = (inst_37789) || (inst_37790);
var state_37828__$1 = (function (){var statearr_37850 = state_37828;
(statearr_37850[(11)] = inst_37788__$1);

(statearr_37850[(14)] = inst_37787__$1);

return statearr_37850;
})();
if(cljs.core.truth_(inst_37791)){
var statearr_37851_37908 = state_37828__$1;
(statearr_37851_37908[(1)] = (23));

} else {
var statearr_37852_37909 = state_37828__$1;
(statearr_37852_37909[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (36))){
var inst_37780 = (state_37828[(12)]);
var inst_37758 = inst_37780;
var state_37828__$1 = (function (){var statearr_37853 = state_37828;
(statearr_37853[(7)] = inst_37758);

return statearr_37853;
})();
var statearr_37854_37910 = state_37828__$1;
(statearr_37854_37910[(2)] = null);

(statearr_37854_37910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (29))){
var inst_37802 = (state_37828[(10)]);
var state_37828__$1 = state_37828;
var statearr_37855_37911 = state_37828__$1;
(statearr_37855_37911[(2)] = inst_37802);

(statearr_37855_37911[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (6))){
var state_37828__$1 = state_37828;
var statearr_37856_37912 = state_37828__$1;
(statearr_37856_37912[(2)] = false);

(statearr_37856_37912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (28))){
var inst_37798 = (state_37828[(2)]);
var inst_37799 = calc_state.call(null);
var inst_37758 = inst_37799;
var state_37828__$1 = (function (){var statearr_37857 = state_37828;
(statearr_37857[(7)] = inst_37758);

(statearr_37857[(15)] = inst_37798);

return statearr_37857;
})();
var statearr_37858_37913 = state_37828__$1;
(statearr_37858_37913[(2)] = null);

(statearr_37858_37913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (25))){
var inst_37824 = (state_37828[(2)]);
var state_37828__$1 = state_37828;
var statearr_37859_37914 = state_37828__$1;
(statearr_37859_37914[(2)] = inst_37824);

(statearr_37859_37914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (34))){
var inst_37822 = (state_37828[(2)]);
var state_37828__$1 = state_37828;
var statearr_37860_37915 = state_37828__$1;
(statearr_37860_37915[(2)] = inst_37822);

(statearr_37860_37915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (17))){
var state_37828__$1 = state_37828;
var statearr_37861_37916 = state_37828__$1;
(statearr_37861_37916[(2)] = false);

(statearr_37861_37916[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (3))){
var state_37828__$1 = state_37828;
var statearr_37862_37917 = state_37828__$1;
(statearr_37862_37917[(2)] = false);

(statearr_37862_37917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (12))){
var inst_37826 = (state_37828[(2)]);
var state_37828__$1 = state_37828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37828__$1,inst_37826);
} else {
if((state_val_37829 === (2))){
var inst_37734 = (state_37828[(8)]);
var inst_37739 = inst_37734.cljs$lang$protocol_mask$partition0$;
var inst_37740 = (inst_37739 & (64));
var inst_37741 = inst_37734.cljs$core$ISeq$;
var inst_37742 = (inst_37740) || (inst_37741);
var state_37828__$1 = state_37828;
if(cljs.core.truth_(inst_37742)){
var statearr_37863_37918 = state_37828__$1;
(statearr_37863_37918[(1)] = (5));

} else {
var statearr_37864_37919 = state_37828__$1;
(statearr_37864_37919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (23))){
var inst_37787 = (state_37828[(14)]);
var inst_37793 = (inst_37787 == null);
var state_37828__$1 = state_37828;
if(cljs.core.truth_(inst_37793)){
var statearr_37865_37920 = state_37828__$1;
(statearr_37865_37920[(1)] = (26));

} else {
var statearr_37866_37921 = state_37828__$1;
(statearr_37866_37921[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (35))){
var inst_37813 = (state_37828[(2)]);
var state_37828__$1 = state_37828;
if(cljs.core.truth_(inst_37813)){
var statearr_37867_37922 = state_37828__$1;
(statearr_37867_37922[(1)] = (36));

} else {
var statearr_37868_37923 = state_37828__$1;
(statearr_37868_37923[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (19))){
var inst_37758 = (state_37828[(7)]);
var inst_37777 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37758);
var state_37828__$1 = state_37828;
var statearr_37869_37924 = state_37828__$1;
(statearr_37869_37924[(2)] = inst_37777);

(statearr_37869_37924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (11))){
var inst_37758 = (state_37828[(7)]);
var inst_37762 = (inst_37758 == null);
var inst_37763 = cljs.core.not.call(null,inst_37762);
var state_37828__$1 = state_37828;
if(inst_37763){
var statearr_37870_37925 = state_37828__$1;
(statearr_37870_37925[(1)] = (13));

} else {
var statearr_37871_37926 = state_37828__$1;
(statearr_37871_37926[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (9))){
var inst_37734 = (state_37828[(8)]);
var state_37828__$1 = state_37828;
var statearr_37872_37927 = state_37828__$1;
(statearr_37872_37927[(2)] = inst_37734);

(statearr_37872_37927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (5))){
var state_37828__$1 = state_37828;
var statearr_37873_37928 = state_37828__$1;
(statearr_37873_37928[(2)] = true);

(statearr_37873_37928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (14))){
var state_37828__$1 = state_37828;
var statearr_37874_37929 = state_37828__$1;
(statearr_37874_37929[(2)] = false);

(statearr_37874_37929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (26))){
var inst_37788 = (state_37828[(11)]);
var inst_37795 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37788);
var state_37828__$1 = state_37828;
var statearr_37875_37930 = state_37828__$1;
(statearr_37875_37930[(2)] = inst_37795);

(statearr_37875_37930[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (16))){
var state_37828__$1 = state_37828;
var statearr_37876_37931 = state_37828__$1;
(statearr_37876_37931[(2)] = true);

(statearr_37876_37931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (38))){
var inst_37818 = (state_37828[(2)]);
var state_37828__$1 = state_37828;
var statearr_37877_37932 = state_37828__$1;
(statearr_37877_37932[(2)] = inst_37818);

(statearr_37877_37932[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (30))){
var inst_37781 = (state_37828[(9)]);
var inst_37782 = (state_37828[(13)]);
var inst_37788 = (state_37828[(11)]);
var inst_37805 = cljs.core.empty_QMARK_.call(null,inst_37781);
var inst_37806 = inst_37782.call(null,inst_37788);
var inst_37807 = cljs.core.not.call(null,inst_37806);
var inst_37808 = (inst_37805) && (inst_37807);
var state_37828__$1 = state_37828;
var statearr_37878_37933 = state_37828__$1;
(statearr_37878_37933[(2)] = inst_37808);

(statearr_37878_37933[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (10))){
var inst_37734 = (state_37828[(8)]);
var inst_37754 = (state_37828[(2)]);
var inst_37755 = cljs.core.get.call(null,inst_37754,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37756 = cljs.core.get.call(null,inst_37754,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37757 = cljs.core.get.call(null,inst_37754,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37758 = inst_37734;
var state_37828__$1 = (function (){var statearr_37879 = state_37828;
(statearr_37879[(7)] = inst_37758);

(statearr_37879[(16)] = inst_37755);

(statearr_37879[(17)] = inst_37757);

(statearr_37879[(18)] = inst_37756);

return statearr_37879;
})();
var statearr_37880_37934 = state_37828__$1;
(statearr_37880_37934[(2)] = null);

(statearr_37880_37934[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (18))){
var inst_37772 = (state_37828[(2)]);
var state_37828__$1 = state_37828;
var statearr_37881_37935 = state_37828__$1;
(statearr_37881_37935[(2)] = inst_37772);

(statearr_37881_37935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (37))){
var state_37828__$1 = state_37828;
var statearr_37882_37936 = state_37828__$1;
(statearr_37882_37936[(2)] = null);

(statearr_37882_37936[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (8))){
var inst_37734 = (state_37828[(8)]);
var inst_37751 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37734);
var state_37828__$1 = state_37828;
var statearr_37883_37937 = state_37828__$1;
(statearr_37883_37937[(2)] = inst_37751);

(statearr_37883_37937[(1)] = (10));


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
});})(c__34236__auto___37891,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34221__auto__,c__34236__auto___37891,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34222__auto__ = null;
var cljs$core$async$mix_$_state_machine__34222__auto____0 = (function (){
var statearr_37887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37887[(0)] = cljs$core$async$mix_$_state_machine__34222__auto__);

(statearr_37887[(1)] = (1));

return statearr_37887;
});
var cljs$core$async$mix_$_state_machine__34222__auto____1 = (function (state_37828){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_37828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e37888){if((e37888 instanceof Object)){
var ex__34225__auto__ = e37888;
var statearr_37889_37938 = state_37828;
(statearr_37889_37938[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37939 = state_37828;
state_37828 = G__37939;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34222__auto__ = function(state_37828){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34222__auto____1.call(this,state_37828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34222__auto____0;
cljs$core$async$mix_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34222__auto____1;
return cljs$core$async$mix_$_state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto___37891,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34238__auto__ = (function (){var statearr_37890 = f__34237__auto__.call(null);
(statearr_37890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___37891);

return statearr_37890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto___37891,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__29936__auto__ = (((p == null))?null:p);
var m__29937__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29937__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__29936__auto__ = (((p == null))?null:p);
var m__29937__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,p,v,ch);
} else {
var m__29937__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args37940 = [];
var len__30343__auto___37943 = arguments.length;
var i__30344__auto___37944 = (0);
while(true){
if((i__30344__auto___37944 < len__30343__auto___37943)){
args37940.push((arguments[i__30344__auto___37944]));

var G__37945 = (i__30344__auto___37944 + (1));
i__30344__auto___37944 = G__37945;
continue;
} else {
}
break;
}

var G__37942 = args37940.length;
switch (G__37942) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37940.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29936__auto__ = (((p == null))?null:p);
var m__29937__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,p);
} else {
var m__29937__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__29936__auto__ = (((p == null))?null:p);
var m__29937__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,p,v);
} else {
var m__29937__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args37948 = [];
var len__30343__auto___38073 = arguments.length;
var i__30344__auto___38074 = (0);
while(true){
if((i__30344__auto___38074 < len__30343__auto___38073)){
args37948.push((arguments[i__30344__auto___38074]));

var G__38075 = (i__30344__auto___38074 + (1));
i__30344__auto___38074 = G__38075;
continue;
} else {
}
break;
}

var G__37950 = args37948.length;
switch (G__37950) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37948.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__29273__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__29273__auto__,mults){
return (function (p1__37947_SHARP_){
if(cljs.core.truth_(p1__37947_SHARP_.call(null,topic))){
return p1__37947_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37947_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__29273__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async37951 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37951 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37952){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37952 = meta37952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37953,meta37952__$1){
var self__ = this;
var _37953__$1 = this;
return (new cljs.core.async.t_cljs$core$async37951(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37952__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37951.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37953){
var self__ = this;
var _37953__$1 = this;
return self__.meta37952;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37951.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37951.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37951.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async37951.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37951.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37951.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37951.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37951.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37952","meta37952",1284409494,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37951.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37951";

cljs.core.async.t_cljs$core$async37951.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cljs.core.async/t_cljs$core$async37951");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async37951 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37951(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37952){
return (new cljs.core.async.t_cljs$core$async37951(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37952));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37951(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34236__auto___38077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto___38077,mults,ensure_mult,p){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto___38077,mults,ensure_mult,p){
return (function (state_38025){
var state_val_38026 = (state_38025[(1)]);
if((state_val_38026 === (7))){
var inst_38021 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38027_38078 = state_38025__$1;
(statearr_38027_38078[(2)] = inst_38021);

(statearr_38027_38078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (20))){
var state_38025__$1 = state_38025;
var statearr_38028_38079 = state_38025__$1;
(statearr_38028_38079[(2)] = null);

(statearr_38028_38079[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (1))){
var state_38025__$1 = state_38025;
var statearr_38029_38080 = state_38025__$1;
(statearr_38029_38080[(2)] = null);

(statearr_38029_38080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (24))){
var inst_38004 = (state_38025[(7)]);
var inst_38013 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38004);
var state_38025__$1 = state_38025;
var statearr_38030_38081 = state_38025__$1;
(statearr_38030_38081[(2)] = inst_38013);

(statearr_38030_38081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (4))){
var inst_37956 = (state_38025[(8)]);
var inst_37956__$1 = (state_38025[(2)]);
var inst_37957 = (inst_37956__$1 == null);
var state_38025__$1 = (function (){var statearr_38031 = state_38025;
(statearr_38031[(8)] = inst_37956__$1);

return statearr_38031;
})();
if(cljs.core.truth_(inst_37957)){
var statearr_38032_38082 = state_38025__$1;
(statearr_38032_38082[(1)] = (5));

} else {
var statearr_38033_38083 = state_38025__$1;
(statearr_38033_38083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (15))){
var inst_37998 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38034_38084 = state_38025__$1;
(statearr_38034_38084[(2)] = inst_37998);

(statearr_38034_38084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (21))){
var inst_38018 = (state_38025[(2)]);
var state_38025__$1 = (function (){var statearr_38035 = state_38025;
(statearr_38035[(9)] = inst_38018);

return statearr_38035;
})();
var statearr_38036_38085 = state_38025__$1;
(statearr_38036_38085[(2)] = null);

(statearr_38036_38085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (13))){
var inst_37980 = (state_38025[(10)]);
var inst_37982 = cljs.core.chunked_seq_QMARK_.call(null,inst_37980);
var state_38025__$1 = state_38025;
if(inst_37982){
var statearr_38037_38086 = state_38025__$1;
(statearr_38037_38086[(1)] = (16));

} else {
var statearr_38038_38087 = state_38025__$1;
(statearr_38038_38087[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (22))){
var inst_38010 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
if(cljs.core.truth_(inst_38010)){
var statearr_38039_38088 = state_38025__$1;
(statearr_38039_38088[(1)] = (23));

} else {
var statearr_38040_38089 = state_38025__$1;
(statearr_38040_38089[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (6))){
var inst_38004 = (state_38025[(7)]);
var inst_38006 = (state_38025[(11)]);
var inst_37956 = (state_38025[(8)]);
var inst_38004__$1 = topic_fn.call(null,inst_37956);
var inst_38005 = cljs.core.deref.call(null,mults);
var inst_38006__$1 = cljs.core.get.call(null,inst_38005,inst_38004__$1);
var state_38025__$1 = (function (){var statearr_38041 = state_38025;
(statearr_38041[(7)] = inst_38004__$1);

(statearr_38041[(11)] = inst_38006__$1);

return statearr_38041;
})();
if(cljs.core.truth_(inst_38006__$1)){
var statearr_38042_38090 = state_38025__$1;
(statearr_38042_38090[(1)] = (19));

} else {
var statearr_38043_38091 = state_38025__$1;
(statearr_38043_38091[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (25))){
var inst_38015 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38044_38092 = state_38025__$1;
(statearr_38044_38092[(2)] = inst_38015);

(statearr_38044_38092[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (17))){
var inst_37980 = (state_38025[(10)]);
var inst_37989 = cljs.core.first.call(null,inst_37980);
var inst_37990 = cljs.core.async.muxch_STAR_.call(null,inst_37989);
var inst_37991 = cljs.core.async.close_BANG_.call(null,inst_37990);
var inst_37992 = cljs.core.next.call(null,inst_37980);
var inst_37966 = inst_37992;
var inst_37967 = null;
var inst_37968 = (0);
var inst_37969 = (0);
var state_38025__$1 = (function (){var statearr_38045 = state_38025;
(statearr_38045[(12)] = inst_37968);

(statearr_38045[(13)] = inst_37967);

(statearr_38045[(14)] = inst_37966);

(statearr_38045[(15)] = inst_37969);

(statearr_38045[(16)] = inst_37991);

return statearr_38045;
})();
var statearr_38046_38093 = state_38025__$1;
(statearr_38046_38093[(2)] = null);

(statearr_38046_38093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (3))){
var inst_38023 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38025__$1,inst_38023);
} else {
if((state_val_38026 === (12))){
var inst_38000 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38047_38094 = state_38025__$1;
(statearr_38047_38094[(2)] = inst_38000);

(statearr_38047_38094[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (2))){
var state_38025__$1 = state_38025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38025__$1,(4),ch);
} else {
if((state_val_38026 === (23))){
var state_38025__$1 = state_38025;
var statearr_38048_38095 = state_38025__$1;
(statearr_38048_38095[(2)] = null);

(statearr_38048_38095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (19))){
var inst_38006 = (state_38025[(11)]);
var inst_37956 = (state_38025[(8)]);
var inst_38008 = cljs.core.async.muxch_STAR_.call(null,inst_38006);
var state_38025__$1 = state_38025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38025__$1,(22),inst_38008,inst_37956);
} else {
if((state_val_38026 === (11))){
var inst_37980 = (state_38025[(10)]);
var inst_37966 = (state_38025[(14)]);
var inst_37980__$1 = cljs.core.seq.call(null,inst_37966);
var state_38025__$1 = (function (){var statearr_38049 = state_38025;
(statearr_38049[(10)] = inst_37980__$1);

return statearr_38049;
})();
if(inst_37980__$1){
var statearr_38050_38096 = state_38025__$1;
(statearr_38050_38096[(1)] = (13));

} else {
var statearr_38051_38097 = state_38025__$1;
(statearr_38051_38097[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (9))){
var inst_38002 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38052_38098 = state_38025__$1;
(statearr_38052_38098[(2)] = inst_38002);

(statearr_38052_38098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (5))){
var inst_37963 = cljs.core.deref.call(null,mults);
var inst_37964 = cljs.core.vals.call(null,inst_37963);
var inst_37965 = cljs.core.seq.call(null,inst_37964);
var inst_37966 = inst_37965;
var inst_37967 = null;
var inst_37968 = (0);
var inst_37969 = (0);
var state_38025__$1 = (function (){var statearr_38053 = state_38025;
(statearr_38053[(12)] = inst_37968);

(statearr_38053[(13)] = inst_37967);

(statearr_38053[(14)] = inst_37966);

(statearr_38053[(15)] = inst_37969);

return statearr_38053;
})();
var statearr_38054_38099 = state_38025__$1;
(statearr_38054_38099[(2)] = null);

(statearr_38054_38099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (14))){
var state_38025__$1 = state_38025;
var statearr_38058_38100 = state_38025__$1;
(statearr_38058_38100[(2)] = null);

(statearr_38058_38100[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (16))){
var inst_37980 = (state_38025[(10)]);
var inst_37984 = cljs.core.chunk_first.call(null,inst_37980);
var inst_37985 = cljs.core.chunk_rest.call(null,inst_37980);
var inst_37986 = cljs.core.count.call(null,inst_37984);
var inst_37966 = inst_37985;
var inst_37967 = inst_37984;
var inst_37968 = inst_37986;
var inst_37969 = (0);
var state_38025__$1 = (function (){var statearr_38059 = state_38025;
(statearr_38059[(12)] = inst_37968);

(statearr_38059[(13)] = inst_37967);

(statearr_38059[(14)] = inst_37966);

(statearr_38059[(15)] = inst_37969);

return statearr_38059;
})();
var statearr_38060_38101 = state_38025__$1;
(statearr_38060_38101[(2)] = null);

(statearr_38060_38101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (10))){
var inst_37968 = (state_38025[(12)]);
var inst_37967 = (state_38025[(13)]);
var inst_37966 = (state_38025[(14)]);
var inst_37969 = (state_38025[(15)]);
var inst_37974 = cljs.core._nth.call(null,inst_37967,inst_37969);
var inst_37975 = cljs.core.async.muxch_STAR_.call(null,inst_37974);
var inst_37976 = cljs.core.async.close_BANG_.call(null,inst_37975);
var inst_37977 = (inst_37969 + (1));
var tmp38055 = inst_37968;
var tmp38056 = inst_37967;
var tmp38057 = inst_37966;
var inst_37966__$1 = tmp38057;
var inst_37967__$1 = tmp38056;
var inst_37968__$1 = tmp38055;
var inst_37969__$1 = inst_37977;
var state_38025__$1 = (function (){var statearr_38061 = state_38025;
(statearr_38061[(12)] = inst_37968__$1);

(statearr_38061[(13)] = inst_37967__$1);

(statearr_38061[(14)] = inst_37966__$1);

(statearr_38061[(17)] = inst_37976);

(statearr_38061[(15)] = inst_37969__$1);

return statearr_38061;
})();
var statearr_38062_38102 = state_38025__$1;
(statearr_38062_38102[(2)] = null);

(statearr_38062_38102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (18))){
var inst_37995 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38063_38103 = state_38025__$1;
(statearr_38063_38103[(2)] = inst_37995);

(statearr_38063_38103[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (8))){
var inst_37968 = (state_38025[(12)]);
var inst_37969 = (state_38025[(15)]);
var inst_37971 = (inst_37969 < inst_37968);
var inst_37972 = inst_37971;
var state_38025__$1 = state_38025;
if(cljs.core.truth_(inst_37972)){
var statearr_38064_38104 = state_38025__$1;
(statearr_38064_38104[(1)] = (10));

} else {
var statearr_38065_38105 = state_38025__$1;
(statearr_38065_38105[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__34236__auto___38077,mults,ensure_mult,p))
;
return ((function (switch__34221__auto__,c__34236__auto___38077,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34222__auto__ = null;
var cljs$core$async$state_machine__34222__auto____0 = (function (){
var statearr_38069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38069[(0)] = cljs$core$async$state_machine__34222__auto__);

(statearr_38069[(1)] = (1));

return statearr_38069;
});
var cljs$core$async$state_machine__34222__auto____1 = (function (state_38025){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_38025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e38070){if((e38070 instanceof Object)){
var ex__34225__auto__ = e38070;
var statearr_38071_38106 = state_38025;
(statearr_38071_38106[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38107 = state_38025;
state_38025 = G__38107;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$state_machine__34222__auto__ = function(state_38025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34222__auto____1.call(this,state_38025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34222__auto____0;
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34222__auto____1;
return cljs$core$async$state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto___38077,mults,ensure_mult,p))
})();
var state__34238__auto__ = (function (){var statearr_38072 = f__34237__auto__.call(null);
(statearr_38072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___38077);

return statearr_38072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto___38077,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args38108 = [];
var len__30343__auto___38111 = arguments.length;
var i__30344__auto___38112 = (0);
while(true){
if((i__30344__auto___38112 < len__30343__auto___38111)){
args38108.push((arguments[i__30344__auto___38112]));

var G__38113 = (i__30344__auto___38112 + (1));
i__30344__auto___38112 = G__38113;
continue;
} else {
}
break;
}

var G__38110 = args38108.length;
switch (G__38110) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38108.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args38115 = [];
var len__30343__auto___38118 = arguments.length;
var i__30344__auto___38119 = (0);
while(true){
if((i__30344__auto___38119 < len__30343__auto___38118)){
args38115.push((arguments[i__30344__auto___38119]));

var G__38120 = (i__30344__auto___38119 + (1));
i__30344__auto___38119 = G__38120;
continue;
} else {
}
break;
}

var G__38117 = args38115.length;
switch (G__38117) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38115.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args38122 = [];
var len__30343__auto___38193 = arguments.length;
var i__30344__auto___38194 = (0);
while(true){
if((i__30344__auto___38194 < len__30343__auto___38193)){
args38122.push((arguments[i__30344__auto___38194]));

var G__38195 = (i__30344__auto___38194 + (1));
i__30344__auto___38194 = G__38195;
continue;
} else {
}
break;
}

var G__38124 = args38122.length;
switch (G__38124) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38122.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__34236__auto___38197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto___38197,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto___38197,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38163){
var state_val_38164 = (state_38163[(1)]);
if((state_val_38164 === (7))){
var state_38163__$1 = state_38163;
var statearr_38165_38198 = state_38163__$1;
(statearr_38165_38198[(2)] = null);

(statearr_38165_38198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38164 === (1))){
var state_38163__$1 = state_38163;
var statearr_38166_38199 = state_38163__$1;
(statearr_38166_38199[(2)] = null);

(statearr_38166_38199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38164 === (4))){
var inst_38127 = (state_38163[(7)]);
var inst_38129 = (inst_38127 < cnt);
var state_38163__$1 = state_38163;
if(cljs.core.truth_(inst_38129)){
var statearr_38167_38200 = state_38163__$1;
(statearr_38167_38200[(1)] = (6));

} else {
var statearr_38168_38201 = state_38163__$1;
(statearr_38168_38201[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38164 === (15))){
var inst_38159 = (state_38163[(2)]);
var state_38163__$1 = state_38163;
var statearr_38169_38202 = state_38163__$1;
(statearr_38169_38202[(2)] = inst_38159);

(statearr_38169_38202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38164 === (13))){
var inst_38152 = cljs.core.async.close_BANG_.call(null,out);
var state_38163__$1 = state_38163;
var statearr_38170_38203 = state_38163__$1;
(statearr_38170_38203[(2)] = inst_38152);

(statearr_38170_38203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38164 === (6))){
var state_38163__$1 = state_38163;
var statearr_38171_38204 = state_38163__$1;
(statearr_38171_38204[(2)] = null);

(statearr_38171_38204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38164 === (3))){
var inst_38161 = (state_38163[(2)]);
var state_38163__$1 = state_38163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38163__$1,inst_38161);
} else {
if((state_val_38164 === (12))){
var inst_38149 = (state_38163[(8)]);
var inst_38149__$1 = (state_38163[(2)]);
var inst_38150 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38149__$1);
var state_38163__$1 = (function (){var statearr_38172 = state_38163;
(statearr_38172[(8)] = inst_38149__$1);

return statearr_38172;
})();
if(cljs.core.truth_(inst_38150)){
var statearr_38173_38205 = state_38163__$1;
(statearr_38173_38205[(1)] = (13));

} else {
var statearr_38174_38206 = state_38163__$1;
(statearr_38174_38206[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38164 === (2))){
var inst_38126 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38127 = (0);
var state_38163__$1 = (function (){var statearr_38175 = state_38163;
(statearr_38175[(7)] = inst_38127);

(statearr_38175[(9)] = inst_38126);

return statearr_38175;
})();
var statearr_38176_38207 = state_38163__$1;
(statearr_38176_38207[(2)] = null);

(statearr_38176_38207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38164 === (11))){
var inst_38127 = (state_38163[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38163,(10),Object,null,(9));
var inst_38136 = chs__$1.call(null,inst_38127);
var inst_38137 = done.call(null,inst_38127);
var inst_38138 = cljs.core.async.take_BANG_.call(null,inst_38136,inst_38137);
var state_38163__$1 = state_38163;
var statearr_38177_38208 = state_38163__$1;
(statearr_38177_38208[(2)] = inst_38138);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38163__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38164 === (9))){
var inst_38127 = (state_38163[(7)]);
var inst_38140 = (state_38163[(2)]);
var inst_38141 = (inst_38127 + (1));
var inst_38127__$1 = inst_38141;
var state_38163__$1 = (function (){var statearr_38178 = state_38163;
(statearr_38178[(7)] = inst_38127__$1);

(statearr_38178[(10)] = inst_38140);

return statearr_38178;
})();
var statearr_38179_38209 = state_38163__$1;
(statearr_38179_38209[(2)] = null);

(statearr_38179_38209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38164 === (5))){
var inst_38147 = (state_38163[(2)]);
var state_38163__$1 = (function (){var statearr_38180 = state_38163;
(statearr_38180[(11)] = inst_38147);

return statearr_38180;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38163__$1,(12),dchan);
} else {
if((state_val_38164 === (14))){
var inst_38149 = (state_38163[(8)]);
var inst_38154 = cljs.core.apply.call(null,f,inst_38149);
var state_38163__$1 = state_38163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38163__$1,(16),out,inst_38154);
} else {
if((state_val_38164 === (16))){
var inst_38156 = (state_38163[(2)]);
var state_38163__$1 = (function (){var statearr_38181 = state_38163;
(statearr_38181[(12)] = inst_38156);

return statearr_38181;
})();
var statearr_38182_38210 = state_38163__$1;
(statearr_38182_38210[(2)] = null);

(statearr_38182_38210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38164 === (10))){
var inst_38131 = (state_38163[(2)]);
var inst_38132 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38163__$1 = (function (){var statearr_38183 = state_38163;
(statearr_38183[(13)] = inst_38131);

return statearr_38183;
})();
var statearr_38184_38211 = state_38163__$1;
(statearr_38184_38211[(2)] = inst_38132);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38163__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38164 === (8))){
var inst_38145 = (state_38163[(2)]);
var state_38163__$1 = state_38163;
var statearr_38185_38212 = state_38163__$1;
(statearr_38185_38212[(2)] = inst_38145);

(statearr_38185_38212[(1)] = (5));


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
});})(c__34236__auto___38197,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34221__auto__,c__34236__auto___38197,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34222__auto__ = null;
var cljs$core$async$state_machine__34222__auto____0 = (function (){
var statearr_38189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38189[(0)] = cljs$core$async$state_machine__34222__auto__);

(statearr_38189[(1)] = (1));

return statearr_38189;
});
var cljs$core$async$state_machine__34222__auto____1 = (function (state_38163){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_38163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e38190){if((e38190 instanceof Object)){
var ex__34225__auto__ = e38190;
var statearr_38191_38213 = state_38163;
(statearr_38191_38213[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38214 = state_38163;
state_38163 = G__38214;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$state_machine__34222__auto__ = function(state_38163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34222__auto____1.call(this,state_38163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34222__auto____0;
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34222__auto____1;
return cljs$core$async$state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto___38197,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34238__auto__ = (function (){var statearr_38192 = f__34237__auto__.call(null);
(statearr_38192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___38197);

return statearr_38192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto___38197,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args38216 = [];
var len__30343__auto___38272 = arguments.length;
var i__30344__auto___38273 = (0);
while(true){
if((i__30344__auto___38273 < len__30343__auto___38272)){
args38216.push((arguments[i__30344__auto___38273]));

var G__38274 = (i__30344__auto___38273 + (1));
i__30344__auto___38273 = G__38274;
continue;
} else {
}
break;
}

var G__38218 = args38216.length;
switch (G__38218) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38216.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34236__auto___38276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto___38276,out){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto___38276,out){
return (function (state_38248){
var state_val_38249 = (state_38248[(1)]);
if((state_val_38249 === (7))){
var inst_38228 = (state_38248[(7)]);
var inst_38227 = (state_38248[(8)]);
var inst_38227__$1 = (state_38248[(2)]);
var inst_38228__$1 = cljs.core.nth.call(null,inst_38227__$1,(0),null);
var inst_38229 = cljs.core.nth.call(null,inst_38227__$1,(1),null);
var inst_38230 = (inst_38228__$1 == null);
var state_38248__$1 = (function (){var statearr_38250 = state_38248;
(statearr_38250[(7)] = inst_38228__$1);

(statearr_38250[(8)] = inst_38227__$1);

(statearr_38250[(9)] = inst_38229);

return statearr_38250;
})();
if(cljs.core.truth_(inst_38230)){
var statearr_38251_38277 = state_38248__$1;
(statearr_38251_38277[(1)] = (8));

} else {
var statearr_38252_38278 = state_38248__$1;
(statearr_38252_38278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38249 === (1))){
var inst_38219 = cljs.core.vec.call(null,chs);
var inst_38220 = inst_38219;
var state_38248__$1 = (function (){var statearr_38253 = state_38248;
(statearr_38253[(10)] = inst_38220);

return statearr_38253;
})();
var statearr_38254_38279 = state_38248__$1;
(statearr_38254_38279[(2)] = null);

(statearr_38254_38279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38249 === (4))){
var inst_38220 = (state_38248[(10)]);
var state_38248__$1 = state_38248;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38248__$1,(7),inst_38220);
} else {
if((state_val_38249 === (6))){
var inst_38244 = (state_38248[(2)]);
var state_38248__$1 = state_38248;
var statearr_38255_38280 = state_38248__$1;
(statearr_38255_38280[(2)] = inst_38244);

(statearr_38255_38280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38249 === (3))){
var inst_38246 = (state_38248[(2)]);
var state_38248__$1 = state_38248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38248__$1,inst_38246);
} else {
if((state_val_38249 === (2))){
var inst_38220 = (state_38248[(10)]);
var inst_38222 = cljs.core.count.call(null,inst_38220);
var inst_38223 = (inst_38222 > (0));
var state_38248__$1 = state_38248;
if(cljs.core.truth_(inst_38223)){
var statearr_38257_38281 = state_38248__$1;
(statearr_38257_38281[(1)] = (4));

} else {
var statearr_38258_38282 = state_38248__$1;
(statearr_38258_38282[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38249 === (11))){
var inst_38220 = (state_38248[(10)]);
var inst_38237 = (state_38248[(2)]);
var tmp38256 = inst_38220;
var inst_38220__$1 = tmp38256;
var state_38248__$1 = (function (){var statearr_38259 = state_38248;
(statearr_38259[(10)] = inst_38220__$1);

(statearr_38259[(11)] = inst_38237);

return statearr_38259;
})();
var statearr_38260_38283 = state_38248__$1;
(statearr_38260_38283[(2)] = null);

(statearr_38260_38283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38249 === (9))){
var inst_38228 = (state_38248[(7)]);
var state_38248__$1 = state_38248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38248__$1,(11),out,inst_38228);
} else {
if((state_val_38249 === (5))){
var inst_38242 = cljs.core.async.close_BANG_.call(null,out);
var state_38248__$1 = state_38248;
var statearr_38261_38284 = state_38248__$1;
(statearr_38261_38284[(2)] = inst_38242);

(statearr_38261_38284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38249 === (10))){
var inst_38240 = (state_38248[(2)]);
var state_38248__$1 = state_38248;
var statearr_38262_38285 = state_38248__$1;
(statearr_38262_38285[(2)] = inst_38240);

(statearr_38262_38285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38249 === (8))){
var inst_38228 = (state_38248[(7)]);
var inst_38227 = (state_38248[(8)]);
var inst_38220 = (state_38248[(10)]);
var inst_38229 = (state_38248[(9)]);
var inst_38232 = (function (){var cs = inst_38220;
var vec__38225 = inst_38227;
var v = inst_38228;
var c = inst_38229;
return ((function (cs,vec__38225,v,c,inst_38228,inst_38227,inst_38220,inst_38229,state_val_38249,c__34236__auto___38276,out){
return (function (p1__38215_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38215_SHARP_);
});
;})(cs,vec__38225,v,c,inst_38228,inst_38227,inst_38220,inst_38229,state_val_38249,c__34236__auto___38276,out))
})();
var inst_38233 = cljs.core.filterv.call(null,inst_38232,inst_38220);
var inst_38220__$1 = inst_38233;
var state_38248__$1 = (function (){var statearr_38263 = state_38248;
(statearr_38263[(10)] = inst_38220__$1);

return statearr_38263;
})();
var statearr_38264_38286 = state_38248__$1;
(statearr_38264_38286[(2)] = null);

(statearr_38264_38286[(1)] = (2));


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
});})(c__34236__auto___38276,out))
;
return ((function (switch__34221__auto__,c__34236__auto___38276,out){
return (function() {
var cljs$core$async$state_machine__34222__auto__ = null;
var cljs$core$async$state_machine__34222__auto____0 = (function (){
var statearr_38268 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38268[(0)] = cljs$core$async$state_machine__34222__auto__);

(statearr_38268[(1)] = (1));

return statearr_38268;
});
var cljs$core$async$state_machine__34222__auto____1 = (function (state_38248){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_38248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e38269){if((e38269 instanceof Object)){
var ex__34225__auto__ = e38269;
var statearr_38270_38287 = state_38248;
(statearr_38270_38287[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38288 = state_38248;
state_38248 = G__38288;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$state_machine__34222__auto__ = function(state_38248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34222__auto____1.call(this,state_38248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34222__auto____0;
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34222__auto____1;
return cljs$core$async$state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto___38276,out))
})();
var state__34238__auto__ = (function (){var statearr_38271 = f__34237__auto__.call(null);
(statearr_38271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___38276);

return statearr_38271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto___38276,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args38289 = [];
var len__30343__auto___38338 = arguments.length;
var i__30344__auto___38339 = (0);
while(true){
if((i__30344__auto___38339 < len__30343__auto___38338)){
args38289.push((arguments[i__30344__auto___38339]));

var G__38340 = (i__30344__auto___38339 + (1));
i__30344__auto___38339 = G__38340;
continue;
} else {
}
break;
}

var G__38291 = args38289.length;
switch (G__38291) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38289.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34236__auto___38342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto___38342,out){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto___38342,out){
return (function (state_38315){
var state_val_38316 = (state_38315[(1)]);
if((state_val_38316 === (7))){
var inst_38297 = (state_38315[(7)]);
var inst_38297__$1 = (state_38315[(2)]);
var inst_38298 = (inst_38297__$1 == null);
var inst_38299 = cljs.core.not.call(null,inst_38298);
var state_38315__$1 = (function (){var statearr_38317 = state_38315;
(statearr_38317[(7)] = inst_38297__$1);

return statearr_38317;
})();
if(inst_38299){
var statearr_38318_38343 = state_38315__$1;
(statearr_38318_38343[(1)] = (8));

} else {
var statearr_38319_38344 = state_38315__$1;
(statearr_38319_38344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (1))){
var inst_38292 = (0);
var state_38315__$1 = (function (){var statearr_38320 = state_38315;
(statearr_38320[(8)] = inst_38292);

return statearr_38320;
})();
var statearr_38321_38345 = state_38315__$1;
(statearr_38321_38345[(2)] = null);

(statearr_38321_38345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (4))){
var state_38315__$1 = state_38315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38315__$1,(7),ch);
} else {
if((state_val_38316 === (6))){
var inst_38310 = (state_38315[(2)]);
var state_38315__$1 = state_38315;
var statearr_38322_38346 = state_38315__$1;
(statearr_38322_38346[(2)] = inst_38310);

(statearr_38322_38346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (3))){
var inst_38312 = (state_38315[(2)]);
var inst_38313 = cljs.core.async.close_BANG_.call(null,out);
var state_38315__$1 = (function (){var statearr_38323 = state_38315;
(statearr_38323[(9)] = inst_38312);

return statearr_38323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38315__$1,inst_38313);
} else {
if((state_val_38316 === (2))){
var inst_38292 = (state_38315[(8)]);
var inst_38294 = (inst_38292 < n);
var state_38315__$1 = state_38315;
if(cljs.core.truth_(inst_38294)){
var statearr_38324_38347 = state_38315__$1;
(statearr_38324_38347[(1)] = (4));

} else {
var statearr_38325_38348 = state_38315__$1;
(statearr_38325_38348[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (11))){
var inst_38292 = (state_38315[(8)]);
var inst_38302 = (state_38315[(2)]);
var inst_38303 = (inst_38292 + (1));
var inst_38292__$1 = inst_38303;
var state_38315__$1 = (function (){var statearr_38326 = state_38315;
(statearr_38326[(10)] = inst_38302);

(statearr_38326[(8)] = inst_38292__$1);

return statearr_38326;
})();
var statearr_38327_38349 = state_38315__$1;
(statearr_38327_38349[(2)] = null);

(statearr_38327_38349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (9))){
var state_38315__$1 = state_38315;
var statearr_38328_38350 = state_38315__$1;
(statearr_38328_38350[(2)] = null);

(statearr_38328_38350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (5))){
var state_38315__$1 = state_38315;
var statearr_38329_38351 = state_38315__$1;
(statearr_38329_38351[(2)] = null);

(statearr_38329_38351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (10))){
var inst_38307 = (state_38315[(2)]);
var state_38315__$1 = state_38315;
var statearr_38330_38352 = state_38315__$1;
(statearr_38330_38352[(2)] = inst_38307);

(statearr_38330_38352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (8))){
var inst_38297 = (state_38315[(7)]);
var state_38315__$1 = state_38315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38315__$1,(11),out,inst_38297);
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
});})(c__34236__auto___38342,out))
;
return ((function (switch__34221__auto__,c__34236__auto___38342,out){
return (function() {
var cljs$core$async$state_machine__34222__auto__ = null;
var cljs$core$async$state_machine__34222__auto____0 = (function (){
var statearr_38334 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38334[(0)] = cljs$core$async$state_machine__34222__auto__);

(statearr_38334[(1)] = (1));

return statearr_38334;
});
var cljs$core$async$state_machine__34222__auto____1 = (function (state_38315){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_38315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e38335){if((e38335 instanceof Object)){
var ex__34225__auto__ = e38335;
var statearr_38336_38353 = state_38315;
(statearr_38336_38353[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38354 = state_38315;
state_38315 = G__38354;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$state_machine__34222__auto__ = function(state_38315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34222__auto____1.call(this,state_38315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34222__auto____0;
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34222__auto____1;
return cljs$core$async$state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto___38342,out))
})();
var state__34238__auto__ = (function (){var statearr_38337 = f__34237__auto__.call(null);
(statearr_38337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___38342);

return statearr_38337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto___38342,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38362 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38362 = (function (map_LT_,f,ch,meta38363){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38363 = meta38363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38364,meta38363__$1){
var self__ = this;
var _38364__$1 = this;
return (new cljs.core.async.t_cljs$core$async38362(self__.map_LT_,self__.f,self__.ch,meta38363__$1));
});

cljs.core.async.t_cljs$core$async38362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38364){
var self__ = this;
var _38364__$1 = this;
return self__.meta38363;
});

cljs.core.async.t_cljs$core$async38362.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38362.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38362.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38362.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38362.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38365 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38365 = (function (map_LT_,f,ch,meta38363,_,fn1,meta38366){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38363 = meta38363;
this._ = _;
this.fn1 = fn1;
this.meta38366 = meta38366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38367,meta38366__$1){
var self__ = this;
var _38367__$1 = this;
return (new cljs.core.async.t_cljs$core$async38365(self__.map_LT_,self__.f,self__.ch,self__.meta38363,self__._,self__.fn1,meta38366__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38367){
var self__ = this;
var _38367__$1 = this;
return self__.meta38366;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38355_SHARP_){
return f1.call(null,(((p1__38355_SHARP_ == null))?null:self__.f.call(null,p1__38355_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38365.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38363","meta38363",1086031182,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38362","cljs.core.async/t_cljs$core$async38362",2094696413,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38366","meta38366",525666910,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38365.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38365";

cljs.core.async.t_cljs$core$async38365.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cljs.core.async/t_cljs$core$async38365");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38365 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38365(map_LT___$1,f__$1,ch__$1,meta38363__$1,___$2,fn1__$1,meta38366){
return (new cljs.core.async.t_cljs$core$async38365(map_LT___$1,f__$1,ch__$1,meta38363__$1,___$2,fn1__$1,meta38366));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38365(self__.map_LT_,self__.f,self__.ch,self__.meta38363,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__29261__auto__ = ret;
if(cljs.core.truth_(and__29261__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__29261__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async38362.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38362.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38363","meta38363",1086031182,null)], null);
});

cljs.core.async.t_cljs$core$async38362.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38362";

cljs.core.async.t_cljs$core$async38362.cljs$lang$ctorPrWriter = (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cljs.core.async/t_cljs$core$async38362");
});

cljs.core.async.__GT_t_cljs$core$async38362 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38362(map_LT___$1,f__$1,ch__$1,meta38363){
return (new cljs.core.async.t_cljs$core$async38362(map_LT___$1,f__$1,ch__$1,meta38363));
});

}

return (new cljs.core.async.t_cljs$core$async38362(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38371 = (function (map_GT_,f,ch,meta38372){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta38372 = meta38372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38373,meta38372__$1){
var self__ = this;
var _38373__$1 = this;
return (new cljs.core.async.t_cljs$core$async38371(self__.map_GT_,self__.f,self__.ch,meta38372__$1));
});

cljs.core.async.t_cljs$core$async38371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38373){
var self__ = this;
var _38373__$1 = this;
return self__.meta38372;
});

cljs.core.async.t_cljs$core$async38371.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38371.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38371.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38371.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38371.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38371.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38372","meta38372",-792004763,null)], null);
});

cljs.core.async.t_cljs$core$async38371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38371";

cljs.core.async.t_cljs$core$async38371.cljs$lang$ctorPrWriter = (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cljs.core.async/t_cljs$core$async38371");
});

cljs.core.async.__GT_t_cljs$core$async38371 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38371(map_GT___$1,f__$1,ch__$1,meta38372){
return (new cljs.core.async.t_cljs$core$async38371(map_GT___$1,f__$1,ch__$1,meta38372));
});

}

return (new cljs.core.async.t_cljs$core$async38371(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38377 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38377 = (function (filter_GT_,p,ch,meta38378){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta38378 = meta38378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38379,meta38378__$1){
var self__ = this;
var _38379__$1 = this;
return (new cljs.core.async.t_cljs$core$async38377(self__.filter_GT_,self__.p,self__.ch,meta38378__$1));
});

cljs.core.async.t_cljs$core$async38377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38379){
var self__ = this;
var _38379__$1 = this;
return self__.meta38378;
});

cljs.core.async.t_cljs$core$async38377.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38377.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38377.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38377.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38377.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38377.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38377.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38378","meta38378",710437715,null)], null);
});

cljs.core.async.t_cljs$core$async38377.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38377";

cljs.core.async.t_cljs$core$async38377.cljs$lang$ctorPrWriter = (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cljs.core.async/t_cljs$core$async38377");
});

cljs.core.async.__GT_t_cljs$core$async38377 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38377(filter_GT___$1,p__$1,ch__$1,meta38378){
return (new cljs.core.async.t_cljs$core$async38377(filter_GT___$1,p__$1,ch__$1,meta38378));
});

}

return (new cljs.core.async.t_cljs$core$async38377(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args38380 = [];
var len__30343__auto___38424 = arguments.length;
var i__30344__auto___38425 = (0);
while(true){
if((i__30344__auto___38425 < len__30343__auto___38424)){
args38380.push((arguments[i__30344__auto___38425]));

var G__38426 = (i__30344__auto___38425 + (1));
i__30344__auto___38425 = G__38426;
continue;
} else {
}
break;
}

var G__38382 = args38380.length;
switch (G__38382) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38380.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34236__auto___38428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto___38428,out){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto___38428,out){
return (function (state_38403){
var state_val_38404 = (state_38403[(1)]);
if((state_val_38404 === (7))){
var inst_38399 = (state_38403[(2)]);
var state_38403__$1 = state_38403;
var statearr_38405_38429 = state_38403__$1;
(statearr_38405_38429[(2)] = inst_38399);

(statearr_38405_38429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38404 === (1))){
var state_38403__$1 = state_38403;
var statearr_38406_38430 = state_38403__$1;
(statearr_38406_38430[(2)] = null);

(statearr_38406_38430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38404 === (4))){
var inst_38385 = (state_38403[(7)]);
var inst_38385__$1 = (state_38403[(2)]);
var inst_38386 = (inst_38385__$1 == null);
var state_38403__$1 = (function (){var statearr_38407 = state_38403;
(statearr_38407[(7)] = inst_38385__$1);

return statearr_38407;
})();
if(cljs.core.truth_(inst_38386)){
var statearr_38408_38431 = state_38403__$1;
(statearr_38408_38431[(1)] = (5));

} else {
var statearr_38409_38432 = state_38403__$1;
(statearr_38409_38432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38404 === (6))){
var inst_38385 = (state_38403[(7)]);
var inst_38390 = p.call(null,inst_38385);
var state_38403__$1 = state_38403;
if(cljs.core.truth_(inst_38390)){
var statearr_38410_38433 = state_38403__$1;
(statearr_38410_38433[(1)] = (8));

} else {
var statearr_38411_38434 = state_38403__$1;
(statearr_38411_38434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38404 === (3))){
var inst_38401 = (state_38403[(2)]);
var state_38403__$1 = state_38403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38403__$1,inst_38401);
} else {
if((state_val_38404 === (2))){
var state_38403__$1 = state_38403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38403__$1,(4),ch);
} else {
if((state_val_38404 === (11))){
var inst_38393 = (state_38403[(2)]);
var state_38403__$1 = state_38403;
var statearr_38412_38435 = state_38403__$1;
(statearr_38412_38435[(2)] = inst_38393);

(statearr_38412_38435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38404 === (9))){
var state_38403__$1 = state_38403;
var statearr_38413_38436 = state_38403__$1;
(statearr_38413_38436[(2)] = null);

(statearr_38413_38436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38404 === (5))){
var inst_38388 = cljs.core.async.close_BANG_.call(null,out);
var state_38403__$1 = state_38403;
var statearr_38414_38437 = state_38403__$1;
(statearr_38414_38437[(2)] = inst_38388);

(statearr_38414_38437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38404 === (10))){
var inst_38396 = (state_38403[(2)]);
var state_38403__$1 = (function (){var statearr_38415 = state_38403;
(statearr_38415[(8)] = inst_38396);

return statearr_38415;
})();
var statearr_38416_38438 = state_38403__$1;
(statearr_38416_38438[(2)] = null);

(statearr_38416_38438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38404 === (8))){
var inst_38385 = (state_38403[(7)]);
var state_38403__$1 = state_38403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38403__$1,(11),out,inst_38385);
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
});})(c__34236__auto___38428,out))
;
return ((function (switch__34221__auto__,c__34236__auto___38428,out){
return (function() {
var cljs$core$async$state_machine__34222__auto__ = null;
var cljs$core$async$state_machine__34222__auto____0 = (function (){
var statearr_38420 = [null,null,null,null,null,null,null,null,null];
(statearr_38420[(0)] = cljs$core$async$state_machine__34222__auto__);

(statearr_38420[(1)] = (1));

return statearr_38420;
});
var cljs$core$async$state_machine__34222__auto____1 = (function (state_38403){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_38403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e38421){if((e38421 instanceof Object)){
var ex__34225__auto__ = e38421;
var statearr_38422_38439 = state_38403;
(statearr_38422_38439[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38440 = state_38403;
state_38403 = G__38440;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$state_machine__34222__auto__ = function(state_38403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34222__auto____1.call(this,state_38403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34222__auto____0;
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34222__auto____1;
return cljs$core$async$state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto___38428,out))
})();
var state__34238__auto__ = (function (){var statearr_38423 = f__34237__auto__.call(null);
(statearr_38423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___38428);

return statearr_38423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto___38428,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args38441 = [];
var len__30343__auto___38444 = arguments.length;
var i__30344__auto___38445 = (0);
while(true){
if((i__30344__auto___38445 < len__30343__auto___38444)){
args38441.push((arguments[i__30344__auto___38445]));

var G__38446 = (i__30344__auto___38445 + (1));
i__30344__auto___38445 = G__38446;
continue;
} else {
}
break;
}

var G__38443 = args38441.length;
switch (G__38443) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38441.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto__){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto__){
return (function (state_38613){
var state_val_38614 = (state_38613[(1)]);
if((state_val_38614 === (7))){
var inst_38609 = (state_38613[(2)]);
var state_38613__$1 = state_38613;
var statearr_38615_38656 = state_38613__$1;
(statearr_38615_38656[(2)] = inst_38609);

(statearr_38615_38656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (20))){
var inst_38579 = (state_38613[(7)]);
var inst_38590 = (state_38613[(2)]);
var inst_38591 = cljs.core.next.call(null,inst_38579);
var inst_38565 = inst_38591;
var inst_38566 = null;
var inst_38567 = (0);
var inst_38568 = (0);
var state_38613__$1 = (function (){var statearr_38616 = state_38613;
(statearr_38616[(8)] = inst_38568);

(statearr_38616[(9)] = inst_38565);

(statearr_38616[(10)] = inst_38590);

(statearr_38616[(11)] = inst_38567);

(statearr_38616[(12)] = inst_38566);

return statearr_38616;
})();
var statearr_38617_38657 = state_38613__$1;
(statearr_38617_38657[(2)] = null);

(statearr_38617_38657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (1))){
var state_38613__$1 = state_38613;
var statearr_38618_38658 = state_38613__$1;
(statearr_38618_38658[(2)] = null);

(statearr_38618_38658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (4))){
var inst_38554 = (state_38613[(13)]);
var inst_38554__$1 = (state_38613[(2)]);
var inst_38555 = (inst_38554__$1 == null);
var state_38613__$1 = (function (){var statearr_38619 = state_38613;
(statearr_38619[(13)] = inst_38554__$1);

return statearr_38619;
})();
if(cljs.core.truth_(inst_38555)){
var statearr_38620_38659 = state_38613__$1;
(statearr_38620_38659[(1)] = (5));

} else {
var statearr_38621_38660 = state_38613__$1;
(statearr_38621_38660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (15))){
var state_38613__$1 = state_38613;
var statearr_38625_38661 = state_38613__$1;
(statearr_38625_38661[(2)] = null);

(statearr_38625_38661[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (21))){
var state_38613__$1 = state_38613;
var statearr_38626_38662 = state_38613__$1;
(statearr_38626_38662[(2)] = null);

(statearr_38626_38662[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (13))){
var inst_38568 = (state_38613[(8)]);
var inst_38565 = (state_38613[(9)]);
var inst_38567 = (state_38613[(11)]);
var inst_38566 = (state_38613[(12)]);
var inst_38575 = (state_38613[(2)]);
var inst_38576 = (inst_38568 + (1));
var tmp38622 = inst_38565;
var tmp38623 = inst_38567;
var tmp38624 = inst_38566;
var inst_38565__$1 = tmp38622;
var inst_38566__$1 = tmp38624;
var inst_38567__$1 = tmp38623;
var inst_38568__$1 = inst_38576;
var state_38613__$1 = (function (){var statearr_38627 = state_38613;
(statearr_38627[(14)] = inst_38575);

(statearr_38627[(8)] = inst_38568__$1);

(statearr_38627[(9)] = inst_38565__$1);

(statearr_38627[(11)] = inst_38567__$1);

(statearr_38627[(12)] = inst_38566__$1);

return statearr_38627;
})();
var statearr_38628_38663 = state_38613__$1;
(statearr_38628_38663[(2)] = null);

(statearr_38628_38663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (22))){
var state_38613__$1 = state_38613;
var statearr_38629_38664 = state_38613__$1;
(statearr_38629_38664[(2)] = null);

(statearr_38629_38664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (6))){
var inst_38554 = (state_38613[(13)]);
var inst_38563 = f.call(null,inst_38554);
var inst_38564 = cljs.core.seq.call(null,inst_38563);
var inst_38565 = inst_38564;
var inst_38566 = null;
var inst_38567 = (0);
var inst_38568 = (0);
var state_38613__$1 = (function (){var statearr_38630 = state_38613;
(statearr_38630[(8)] = inst_38568);

(statearr_38630[(9)] = inst_38565);

(statearr_38630[(11)] = inst_38567);

(statearr_38630[(12)] = inst_38566);

return statearr_38630;
})();
var statearr_38631_38665 = state_38613__$1;
(statearr_38631_38665[(2)] = null);

(statearr_38631_38665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (17))){
var inst_38579 = (state_38613[(7)]);
var inst_38583 = cljs.core.chunk_first.call(null,inst_38579);
var inst_38584 = cljs.core.chunk_rest.call(null,inst_38579);
var inst_38585 = cljs.core.count.call(null,inst_38583);
var inst_38565 = inst_38584;
var inst_38566 = inst_38583;
var inst_38567 = inst_38585;
var inst_38568 = (0);
var state_38613__$1 = (function (){var statearr_38632 = state_38613;
(statearr_38632[(8)] = inst_38568);

(statearr_38632[(9)] = inst_38565);

(statearr_38632[(11)] = inst_38567);

(statearr_38632[(12)] = inst_38566);

return statearr_38632;
})();
var statearr_38633_38666 = state_38613__$1;
(statearr_38633_38666[(2)] = null);

(statearr_38633_38666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (3))){
var inst_38611 = (state_38613[(2)]);
var state_38613__$1 = state_38613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38613__$1,inst_38611);
} else {
if((state_val_38614 === (12))){
var inst_38599 = (state_38613[(2)]);
var state_38613__$1 = state_38613;
var statearr_38634_38667 = state_38613__$1;
(statearr_38634_38667[(2)] = inst_38599);

(statearr_38634_38667[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (2))){
var state_38613__$1 = state_38613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38613__$1,(4),in$);
} else {
if((state_val_38614 === (23))){
var inst_38607 = (state_38613[(2)]);
var state_38613__$1 = state_38613;
var statearr_38635_38668 = state_38613__$1;
(statearr_38635_38668[(2)] = inst_38607);

(statearr_38635_38668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (19))){
var inst_38594 = (state_38613[(2)]);
var state_38613__$1 = state_38613;
var statearr_38636_38669 = state_38613__$1;
(statearr_38636_38669[(2)] = inst_38594);

(statearr_38636_38669[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (11))){
var inst_38579 = (state_38613[(7)]);
var inst_38565 = (state_38613[(9)]);
var inst_38579__$1 = cljs.core.seq.call(null,inst_38565);
var state_38613__$1 = (function (){var statearr_38637 = state_38613;
(statearr_38637[(7)] = inst_38579__$1);

return statearr_38637;
})();
if(inst_38579__$1){
var statearr_38638_38670 = state_38613__$1;
(statearr_38638_38670[(1)] = (14));

} else {
var statearr_38639_38671 = state_38613__$1;
(statearr_38639_38671[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (9))){
var inst_38601 = (state_38613[(2)]);
var inst_38602 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38613__$1 = (function (){var statearr_38640 = state_38613;
(statearr_38640[(15)] = inst_38601);

return statearr_38640;
})();
if(cljs.core.truth_(inst_38602)){
var statearr_38641_38672 = state_38613__$1;
(statearr_38641_38672[(1)] = (21));

} else {
var statearr_38642_38673 = state_38613__$1;
(statearr_38642_38673[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (5))){
var inst_38557 = cljs.core.async.close_BANG_.call(null,out);
var state_38613__$1 = state_38613;
var statearr_38643_38674 = state_38613__$1;
(statearr_38643_38674[(2)] = inst_38557);

(statearr_38643_38674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (14))){
var inst_38579 = (state_38613[(7)]);
var inst_38581 = cljs.core.chunked_seq_QMARK_.call(null,inst_38579);
var state_38613__$1 = state_38613;
if(inst_38581){
var statearr_38644_38675 = state_38613__$1;
(statearr_38644_38675[(1)] = (17));

} else {
var statearr_38645_38676 = state_38613__$1;
(statearr_38645_38676[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (16))){
var inst_38597 = (state_38613[(2)]);
var state_38613__$1 = state_38613;
var statearr_38646_38677 = state_38613__$1;
(statearr_38646_38677[(2)] = inst_38597);

(statearr_38646_38677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (10))){
var inst_38568 = (state_38613[(8)]);
var inst_38566 = (state_38613[(12)]);
var inst_38573 = cljs.core._nth.call(null,inst_38566,inst_38568);
var state_38613__$1 = state_38613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38613__$1,(13),out,inst_38573);
} else {
if((state_val_38614 === (18))){
var inst_38579 = (state_38613[(7)]);
var inst_38588 = cljs.core.first.call(null,inst_38579);
var state_38613__$1 = state_38613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38613__$1,(20),out,inst_38588);
} else {
if((state_val_38614 === (8))){
var inst_38568 = (state_38613[(8)]);
var inst_38567 = (state_38613[(11)]);
var inst_38570 = (inst_38568 < inst_38567);
var inst_38571 = inst_38570;
var state_38613__$1 = state_38613;
if(cljs.core.truth_(inst_38571)){
var statearr_38647_38678 = state_38613__$1;
(statearr_38647_38678[(1)] = (10));

} else {
var statearr_38648_38679 = state_38613__$1;
(statearr_38648_38679[(1)] = (11));

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
}
}
}
}
}
}
});})(c__34236__auto__))
;
return ((function (switch__34221__auto__,c__34236__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34222__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34222__auto____0 = (function (){
var statearr_38652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38652[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34222__auto__);

(statearr_38652[(1)] = (1));

return statearr_38652;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34222__auto____1 = (function (state_38613){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_38613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e38653){if((e38653 instanceof Object)){
var ex__34225__auto__ = e38653;
var statearr_38654_38680 = state_38613;
(statearr_38654_38680[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38681 = state_38613;
state_38613 = G__38681;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34222__auto__ = function(state_38613){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34222__auto____1.call(this,state_38613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34222__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34222__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto__))
})();
var state__34238__auto__ = (function (){var statearr_38655 = f__34237__auto__.call(null);
(statearr_38655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto__);

return statearr_38655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto__))
);

return c__34236__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args38682 = [];
var len__30343__auto___38685 = arguments.length;
var i__30344__auto___38686 = (0);
while(true){
if((i__30344__auto___38686 < len__30343__auto___38685)){
args38682.push((arguments[i__30344__auto___38686]));

var G__38687 = (i__30344__auto___38686 + (1));
i__30344__auto___38686 = G__38687;
continue;
} else {
}
break;
}

var G__38684 = args38682.length;
switch (G__38684) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38682.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args38689 = [];
var len__30343__auto___38692 = arguments.length;
var i__30344__auto___38693 = (0);
while(true){
if((i__30344__auto___38693 < len__30343__auto___38692)){
args38689.push((arguments[i__30344__auto___38693]));

var G__38694 = (i__30344__auto___38693 + (1));
i__30344__auto___38693 = G__38694;
continue;
} else {
}
break;
}

var G__38691 = args38689.length;
switch (G__38691) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38689.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args38696 = [];
var len__30343__auto___38747 = arguments.length;
var i__30344__auto___38748 = (0);
while(true){
if((i__30344__auto___38748 < len__30343__auto___38747)){
args38696.push((arguments[i__30344__auto___38748]));

var G__38749 = (i__30344__auto___38748 + (1));
i__30344__auto___38748 = G__38749;
continue;
} else {
}
break;
}

var G__38698 = args38696.length;
switch (G__38698) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38696.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34236__auto___38751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto___38751,out){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto___38751,out){
return (function (state_38722){
var state_val_38723 = (state_38722[(1)]);
if((state_val_38723 === (7))){
var inst_38717 = (state_38722[(2)]);
var state_38722__$1 = state_38722;
var statearr_38724_38752 = state_38722__$1;
(statearr_38724_38752[(2)] = inst_38717);

(statearr_38724_38752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38723 === (1))){
var inst_38699 = null;
var state_38722__$1 = (function (){var statearr_38725 = state_38722;
(statearr_38725[(7)] = inst_38699);

return statearr_38725;
})();
var statearr_38726_38753 = state_38722__$1;
(statearr_38726_38753[(2)] = null);

(statearr_38726_38753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38723 === (4))){
var inst_38702 = (state_38722[(8)]);
var inst_38702__$1 = (state_38722[(2)]);
var inst_38703 = (inst_38702__$1 == null);
var inst_38704 = cljs.core.not.call(null,inst_38703);
var state_38722__$1 = (function (){var statearr_38727 = state_38722;
(statearr_38727[(8)] = inst_38702__$1);

return statearr_38727;
})();
if(inst_38704){
var statearr_38728_38754 = state_38722__$1;
(statearr_38728_38754[(1)] = (5));

} else {
var statearr_38729_38755 = state_38722__$1;
(statearr_38729_38755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38723 === (6))){
var state_38722__$1 = state_38722;
var statearr_38730_38756 = state_38722__$1;
(statearr_38730_38756[(2)] = null);

(statearr_38730_38756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38723 === (3))){
var inst_38719 = (state_38722[(2)]);
var inst_38720 = cljs.core.async.close_BANG_.call(null,out);
var state_38722__$1 = (function (){var statearr_38731 = state_38722;
(statearr_38731[(9)] = inst_38719);

return statearr_38731;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38722__$1,inst_38720);
} else {
if((state_val_38723 === (2))){
var state_38722__$1 = state_38722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38722__$1,(4),ch);
} else {
if((state_val_38723 === (11))){
var inst_38702 = (state_38722[(8)]);
var inst_38711 = (state_38722[(2)]);
var inst_38699 = inst_38702;
var state_38722__$1 = (function (){var statearr_38732 = state_38722;
(statearr_38732[(7)] = inst_38699);

(statearr_38732[(10)] = inst_38711);

return statearr_38732;
})();
var statearr_38733_38757 = state_38722__$1;
(statearr_38733_38757[(2)] = null);

(statearr_38733_38757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38723 === (9))){
var inst_38702 = (state_38722[(8)]);
var state_38722__$1 = state_38722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38722__$1,(11),out,inst_38702);
} else {
if((state_val_38723 === (5))){
var inst_38699 = (state_38722[(7)]);
var inst_38702 = (state_38722[(8)]);
var inst_38706 = cljs.core._EQ_.call(null,inst_38702,inst_38699);
var state_38722__$1 = state_38722;
if(inst_38706){
var statearr_38735_38758 = state_38722__$1;
(statearr_38735_38758[(1)] = (8));

} else {
var statearr_38736_38759 = state_38722__$1;
(statearr_38736_38759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38723 === (10))){
var inst_38714 = (state_38722[(2)]);
var state_38722__$1 = state_38722;
var statearr_38737_38760 = state_38722__$1;
(statearr_38737_38760[(2)] = inst_38714);

(statearr_38737_38760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38723 === (8))){
var inst_38699 = (state_38722[(7)]);
var tmp38734 = inst_38699;
var inst_38699__$1 = tmp38734;
var state_38722__$1 = (function (){var statearr_38738 = state_38722;
(statearr_38738[(7)] = inst_38699__$1);

return statearr_38738;
})();
var statearr_38739_38761 = state_38722__$1;
(statearr_38739_38761[(2)] = null);

(statearr_38739_38761[(1)] = (2));


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
});})(c__34236__auto___38751,out))
;
return ((function (switch__34221__auto__,c__34236__auto___38751,out){
return (function() {
var cljs$core$async$state_machine__34222__auto__ = null;
var cljs$core$async$state_machine__34222__auto____0 = (function (){
var statearr_38743 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38743[(0)] = cljs$core$async$state_machine__34222__auto__);

(statearr_38743[(1)] = (1));

return statearr_38743;
});
var cljs$core$async$state_machine__34222__auto____1 = (function (state_38722){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_38722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e38744){if((e38744 instanceof Object)){
var ex__34225__auto__ = e38744;
var statearr_38745_38762 = state_38722;
(statearr_38745_38762[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38763 = state_38722;
state_38722 = G__38763;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$state_machine__34222__auto__ = function(state_38722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34222__auto____1.call(this,state_38722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34222__auto____0;
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34222__auto____1;
return cljs$core$async$state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto___38751,out))
})();
var state__34238__auto__ = (function (){var statearr_38746 = f__34237__auto__.call(null);
(statearr_38746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___38751);

return statearr_38746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto___38751,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args38764 = [];
var len__30343__auto___38834 = arguments.length;
var i__30344__auto___38835 = (0);
while(true){
if((i__30344__auto___38835 < len__30343__auto___38834)){
args38764.push((arguments[i__30344__auto___38835]));

var G__38836 = (i__30344__auto___38835 + (1));
i__30344__auto___38835 = G__38836;
continue;
} else {
}
break;
}

var G__38766 = args38764.length;
switch (G__38766) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38764.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34236__auto___38838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto___38838,out){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto___38838,out){
return (function (state_38804){
var state_val_38805 = (state_38804[(1)]);
if((state_val_38805 === (7))){
var inst_38800 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38806_38839 = state_38804__$1;
(statearr_38806_38839[(2)] = inst_38800);

(statearr_38806_38839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (1))){
var inst_38767 = (new Array(n));
var inst_38768 = inst_38767;
var inst_38769 = (0);
var state_38804__$1 = (function (){var statearr_38807 = state_38804;
(statearr_38807[(7)] = inst_38769);

(statearr_38807[(8)] = inst_38768);

return statearr_38807;
})();
var statearr_38808_38840 = state_38804__$1;
(statearr_38808_38840[(2)] = null);

(statearr_38808_38840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (4))){
var inst_38772 = (state_38804[(9)]);
var inst_38772__$1 = (state_38804[(2)]);
var inst_38773 = (inst_38772__$1 == null);
var inst_38774 = cljs.core.not.call(null,inst_38773);
var state_38804__$1 = (function (){var statearr_38809 = state_38804;
(statearr_38809[(9)] = inst_38772__$1);

return statearr_38809;
})();
if(inst_38774){
var statearr_38810_38841 = state_38804__$1;
(statearr_38810_38841[(1)] = (5));

} else {
var statearr_38811_38842 = state_38804__$1;
(statearr_38811_38842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (15))){
var inst_38794 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38812_38843 = state_38804__$1;
(statearr_38812_38843[(2)] = inst_38794);

(statearr_38812_38843[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (13))){
var state_38804__$1 = state_38804;
var statearr_38813_38844 = state_38804__$1;
(statearr_38813_38844[(2)] = null);

(statearr_38813_38844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (6))){
var inst_38769 = (state_38804[(7)]);
var inst_38790 = (inst_38769 > (0));
var state_38804__$1 = state_38804;
if(cljs.core.truth_(inst_38790)){
var statearr_38814_38845 = state_38804__$1;
(statearr_38814_38845[(1)] = (12));

} else {
var statearr_38815_38846 = state_38804__$1;
(statearr_38815_38846[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (3))){
var inst_38802 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38804__$1,inst_38802);
} else {
if((state_val_38805 === (12))){
var inst_38768 = (state_38804[(8)]);
var inst_38792 = cljs.core.vec.call(null,inst_38768);
var state_38804__$1 = state_38804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38804__$1,(15),out,inst_38792);
} else {
if((state_val_38805 === (2))){
var state_38804__$1 = state_38804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38804__$1,(4),ch);
} else {
if((state_val_38805 === (11))){
var inst_38784 = (state_38804[(2)]);
var inst_38785 = (new Array(n));
var inst_38768 = inst_38785;
var inst_38769 = (0);
var state_38804__$1 = (function (){var statearr_38816 = state_38804;
(statearr_38816[(10)] = inst_38784);

(statearr_38816[(7)] = inst_38769);

(statearr_38816[(8)] = inst_38768);

return statearr_38816;
})();
var statearr_38817_38847 = state_38804__$1;
(statearr_38817_38847[(2)] = null);

(statearr_38817_38847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (9))){
var inst_38768 = (state_38804[(8)]);
var inst_38782 = cljs.core.vec.call(null,inst_38768);
var state_38804__$1 = state_38804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38804__$1,(11),out,inst_38782);
} else {
if((state_val_38805 === (5))){
var inst_38777 = (state_38804[(11)]);
var inst_38769 = (state_38804[(7)]);
var inst_38772 = (state_38804[(9)]);
var inst_38768 = (state_38804[(8)]);
var inst_38776 = (inst_38768[inst_38769] = inst_38772);
var inst_38777__$1 = (inst_38769 + (1));
var inst_38778 = (inst_38777__$1 < n);
var state_38804__$1 = (function (){var statearr_38818 = state_38804;
(statearr_38818[(11)] = inst_38777__$1);

(statearr_38818[(12)] = inst_38776);

return statearr_38818;
})();
if(cljs.core.truth_(inst_38778)){
var statearr_38819_38848 = state_38804__$1;
(statearr_38819_38848[(1)] = (8));

} else {
var statearr_38820_38849 = state_38804__$1;
(statearr_38820_38849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (14))){
var inst_38797 = (state_38804[(2)]);
var inst_38798 = cljs.core.async.close_BANG_.call(null,out);
var state_38804__$1 = (function (){var statearr_38822 = state_38804;
(statearr_38822[(13)] = inst_38797);

return statearr_38822;
})();
var statearr_38823_38850 = state_38804__$1;
(statearr_38823_38850[(2)] = inst_38798);

(statearr_38823_38850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (10))){
var inst_38788 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38824_38851 = state_38804__$1;
(statearr_38824_38851[(2)] = inst_38788);

(statearr_38824_38851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (8))){
var inst_38777 = (state_38804[(11)]);
var inst_38768 = (state_38804[(8)]);
var tmp38821 = inst_38768;
var inst_38768__$1 = tmp38821;
var inst_38769 = inst_38777;
var state_38804__$1 = (function (){var statearr_38825 = state_38804;
(statearr_38825[(7)] = inst_38769);

(statearr_38825[(8)] = inst_38768__$1);

return statearr_38825;
})();
var statearr_38826_38852 = state_38804__$1;
(statearr_38826_38852[(2)] = null);

(statearr_38826_38852[(1)] = (2));


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
});})(c__34236__auto___38838,out))
;
return ((function (switch__34221__auto__,c__34236__auto___38838,out){
return (function() {
var cljs$core$async$state_machine__34222__auto__ = null;
var cljs$core$async$state_machine__34222__auto____0 = (function (){
var statearr_38830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38830[(0)] = cljs$core$async$state_machine__34222__auto__);

(statearr_38830[(1)] = (1));

return statearr_38830;
});
var cljs$core$async$state_machine__34222__auto____1 = (function (state_38804){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_38804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e38831){if((e38831 instanceof Object)){
var ex__34225__auto__ = e38831;
var statearr_38832_38853 = state_38804;
(statearr_38832_38853[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38854 = state_38804;
state_38804 = G__38854;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$state_machine__34222__auto__ = function(state_38804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34222__auto____1.call(this,state_38804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34222__auto____0;
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34222__auto____1;
return cljs$core$async$state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto___38838,out))
})();
var state__34238__auto__ = (function (){var statearr_38833 = f__34237__auto__.call(null);
(statearr_38833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___38838);

return statearr_38833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto___38838,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args38855 = [];
var len__30343__auto___38929 = arguments.length;
var i__30344__auto___38930 = (0);
while(true){
if((i__30344__auto___38930 < len__30343__auto___38929)){
args38855.push((arguments[i__30344__auto___38930]));

var G__38931 = (i__30344__auto___38930 + (1));
i__30344__auto___38930 = G__38931;
continue;
} else {
}
break;
}

var G__38857 = args38855.length;
switch (G__38857) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38855.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34236__auto___38933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto___38933,out){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto___38933,out){
return (function (state_38899){
var state_val_38900 = (state_38899[(1)]);
if((state_val_38900 === (7))){
var inst_38895 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
var statearr_38901_38934 = state_38899__$1;
(statearr_38901_38934[(2)] = inst_38895);

(statearr_38901_38934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (1))){
var inst_38858 = [];
var inst_38859 = inst_38858;
var inst_38860 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38899__$1 = (function (){var statearr_38902 = state_38899;
(statearr_38902[(7)] = inst_38860);

(statearr_38902[(8)] = inst_38859);

return statearr_38902;
})();
var statearr_38903_38935 = state_38899__$1;
(statearr_38903_38935[(2)] = null);

(statearr_38903_38935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (4))){
var inst_38863 = (state_38899[(9)]);
var inst_38863__$1 = (state_38899[(2)]);
var inst_38864 = (inst_38863__$1 == null);
var inst_38865 = cljs.core.not.call(null,inst_38864);
var state_38899__$1 = (function (){var statearr_38904 = state_38899;
(statearr_38904[(9)] = inst_38863__$1);

return statearr_38904;
})();
if(inst_38865){
var statearr_38905_38936 = state_38899__$1;
(statearr_38905_38936[(1)] = (5));

} else {
var statearr_38906_38937 = state_38899__$1;
(statearr_38906_38937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (15))){
var inst_38889 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
var statearr_38907_38938 = state_38899__$1;
(statearr_38907_38938[(2)] = inst_38889);

(statearr_38907_38938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (13))){
var state_38899__$1 = state_38899;
var statearr_38908_38939 = state_38899__$1;
(statearr_38908_38939[(2)] = null);

(statearr_38908_38939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (6))){
var inst_38859 = (state_38899[(8)]);
var inst_38884 = inst_38859.length;
var inst_38885 = (inst_38884 > (0));
var state_38899__$1 = state_38899;
if(cljs.core.truth_(inst_38885)){
var statearr_38909_38940 = state_38899__$1;
(statearr_38909_38940[(1)] = (12));

} else {
var statearr_38910_38941 = state_38899__$1;
(statearr_38910_38941[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (3))){
var inst_38897 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38899__$1,inst_38897);
} else {
if((state_val_38900 === (12))){
var inst_38859 = (state_38899[(8)]);
var inst_38887 = cljs.core.vec.call(null,inst_38859);
var state_38899__$1 = state_38899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38899__$1,(15),out,inst_38887);
} else {
if((state_val_38900 === (2))){
var state_38899__$1 = state_38899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38899__$1,(4),ch);
} else {
if((state_val_38900 === (11))){
var inst_38867 = (state_38899[(10)]);
var inst_38863 = (state_38899[(9)]);
var inst_38877 = (state_38899[(2)]);
var inst_38878 = [];
var inst_38879 = inst_38878.push(inst_38863);
var inst_38859 = inst_38878;
var inst_38860 = inst_38867;
var state_38899__$1 = (function (){var statearr_38911 = state_38899;
(statearr_38911[(7)] = inst_38860);

(statearr_38911[(11)] = inst_38879);

(statearr_38911[(12)] = inst_38877);

(statearr_38911[(8)] = inst_38859);

return statearr_38911;
})();
var statearr_38912_38942 = state_38899__$1;
(statearr_38912_38942[(2)] = null);

(statearr_38912_38942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (9))){
var inst_38859 = (state_38899[(8)]);
var inst_38875 = cljs.core.vec.call(null,inst_38859);
var state_38899__$1 = state_38899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38899__$1,(11),out,inst_38875);
} else {
if((state_val_38900 === (5))){
var inst_38860 = (state_38899[(7)]);
var inst_38867 = (state_38899[(10)]);
var inst_38863 = (state_38899[(9)]);
var inst_38867__$1 = f.call(null,inst_38863);
var inst_38868 = cljs.core._EQ_.call(null,inst_38867__$1,inst_38860);
var inst_38869 = cljs.core.keyword_identical_QMARK_.call(null,inst_38860,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38870 = (inst_38868) || (inst_38869);
var state_38899__$1 = (function (){var statearr_38913 = state_38899;
(statearr_38913[(10)] = inst_38867__$1);

return statearr_38913;
})();
if(cljs.core.truth_(inst_38870)){
var statearr_38914_38943 = state_38899__$1;
(statearr_38914_38943[(1)] = (8));

} else {
var statearr_38915_38944 = state_38899__$1;
(statearr_38915_38944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (14))){
var inst_38892 = (state_38899[(2)]);
var inst_38893 = cljs.core.async.close_BANG_.call(null,out);
var state_38899__$1 = (function (){var statearr_38917 = state_38899;
(statearr_38917[(13)] = inst_38892);

return statearr_38917;
})();
var statearr_38918_38945 = state_38899__$1;
(statearr_38918_38945[(2)] = inst_38893);

(statearr_38918_38945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (10))){
var inst_38882 = (state_38899[(2)]);
var state_38899__$1 = state_38899;
var statearr_38919_38946 = state_38899__$1;
(statearr_38919_38946[(2)] = inst_38882);

(statearr_38919_38946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38900 === (8))){
var inst_38867 = (state_38899[(10)]);
var inst_38863 = (state_38899[(9)]);
var inst_38859 = (state_38899[(8)]);
var inst_38872 = inst_38859.push(inst_38863);
var tmp38916 = inst_38859;
var inst_38859__$1 = tmp38916;
var inst_38860 = inst_38867;
var state_38899__$1 = (function (){var statearr_38920 = state_38899;
(statearr_38920[(7)] = inst_38860);

(statearr_38920[(14)] = inst_38872);

(statearr_38920[(8)] = inst_38859__$1);

return statearr_38920;
})();
var statearr_38921_38947 = state_38899__$1;
(statearr_38921_38947[(2)] = null);

(statearr_38921_38947[(1)] = (2));


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
});})(c__34236__auto___38933,out))
;
return ((function (switch__34221__auto__,c__34236__auto___38933,out){
return (function() {
var cljs$core$async$state_machine__34222__auto__ = null;
var cljs$core$async$state_machine__34222__auto____0 = (function (){
var statearr_38925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38925[(0)] = cljs$core$async$state_machine__34222__auto__);

(statearr_38925[(1)] = (1));

return statearr_38925;
});
var cljs$core$async$state_machine__34222__auto____1 = (function (state_38899){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_38899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e38926){if((e38926 instanceof Object)){
var ex__34225__auto__ = e38926;
var statearr_38927_38948 = state_38899;
(statearr_38927_38948[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38949 = state_38899;
state_38899 = G__38949;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
cljs$core$async$state_machine__34222__auto__ = function(state_38899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34222__auto____1.call(this,state_38899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34222__auto____0;
cljs$core$async$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34222__auto____1;
return cljs$core$async$state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto___38933,out))
})();
var state__34238__auto__ = (function (){var statearr_38928 = f__34237__auto__.call(null);
(statearr_38928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___38933);

return statearr_38928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto___38933,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1465505513844