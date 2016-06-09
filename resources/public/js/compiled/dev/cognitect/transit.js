// Compiled by ClojureScript 1.8.51 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__30401_30405 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__30402_30406 = null;
var count__30403_30407 = (0);
var i__30404_30408 = (0);
while(true){
if((i__30404_30408 < count__30403_30407)){
var k_30409 = cljs.core._nth.call(null,chunk__30402_30406,i__30404_30408);
var v_30410 = (b[k_30409]);
(a[k_30409] = v_30410);

var G__30411 = seq__30401_30405;
var G__30412 = chunk__30402_30406;
var G__30413 = count__30403_30407;
var G__30414 = (i__30404_30408 + (1));
seq__30401_30405 = G__30411;
chunk__30402_30406 = G__30412;
count__30403_30407 = G__30413;
i__30404_30408 = G__30414;
continue;
} else {
var temp__4657__auto___30415 = cljs.core.seq.call(null,seq__30401_30405);
if(temp__4657__auto___30415){
var seq__30401_30416__$1 = temp__4657__auto___30415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30401_30416__$1)){
var c__30084__auto___30417 = cljs.core.chunk_first.call(null,seq__30401_30416__$1);
var G__30418 = cljs.core.chunk_rest.call(null,seq__30401_30416__$1);
var G__30419 = c__30084__auto___30417;
var G__30420 = cljs.core.count.call(null,c__30084__auto___30417);
var G__30421 = (0);
seq__30401_30405 = G__30418;
chunk__30402_30406 = G__30419;
count__30403_30407 = G__30420;
i__30404_30408 = G__30421;
continue;
} else {
var k_30422 = cljs.core.first.call(null,seq__30401_30416__$1);
var v_30423 = (b[k_30422]);
(a[k_30422] = v_30423);

var G__30424 = cljs.core.next.call(null,seq__30401_30416__$1);
var G__30425 = null;
var G__30426 = (0);
var G__30427 = (0);
seq__30401_30405 = G__30424;
chunk__30402_30406 = G__30425;
count__30403_30407 = G__30426;
i__30404_30408 = G__30427;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args30428 = [];
var len__30343__auto___30431 = arguments.length;
var i__30344__auto___30432 = (0);
while(true){
if((i__30344__auto___30432 < len__30343__auto___30431)){
args30428.push((arguments[i__30344__auto___30432]));

var G__30433 = (i__30344__auto___30432 + (1));
i__30344__auto___30432 = G__30433;
continue;
} else {
}
break;
}

var G__30430 = args30428.length;
switch (G__30430) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30428.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__30435 = (i + (2));
var G__30436 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__30435;
ret = G__30436;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__30437_30441 = cljs.core.seq.call(null,v);
var chunk__30438_30442 = null;
var count__30439_30443 = (0);
var i__30440_30444 = (0);
while(true){
if((i__30440_30444 < count__30439_30443)){
var x_30445 = cljs.core._nth.call(null,chunk__30438_30442,i__30440_30444);
ret.push(x_30445);

var G__30446 = seq__30437_30441;
var G__30447 = chunk__30438_30442;
var G__30448 = count__30439_30443;
var G__30449 = (i__30440_30444 + (1));
seq__30437_30441 = G__30446;
chunk__30438_30442 = G__30447;
count__30439_30443 = G__30448;
i__30440_30444 = G__30449;
continue;
} else {
var temp__4657__auto___30450 = cljs.core.seq.call(null,seq__30437_30441);
if(temp__4657__auto___30450){
var seq__30437_30451__$1 = temp__4657__auto___30450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30437_30451__$1)){
var c__30084__auto___30452 = cljs.core.chunk_first.call(null,seq__30437_30451__$1);
var G__30453 = cljs.core.chunk_rest.call(null,seq__30437_30451__$1);
var G__30454 = c__30084__auto___30452;
var G__30455 = cljs.core.count.call(null,c__30084__auto___30452);
var G__30456 = (0);
seq__30437_30441 = G__30453;
chunk__30438_30442 = G__30454;
count__30439_30443 = G__30455;
i__30440_30444 = G__30456;
continue;
} else {
var x_30457 = cljs.core.first.call(null,seq__30437_30451__$1);
ret.push(x_30457);

var G__30458 = cljs.core.next.call(null,seq__30437_30451__$1);
var G__30459 = null;
var G__30460 = (0);
var G__30461 = (0);
seq__30437_30441 = G__30458;
chunk__30438_30442 = G__30459;
count__30439_30443 = G__30460;
i__30440_30444 = G__30461;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__30462_30466 = cljs.core.seq.call(null,v);
var chunk__30463_30467 = null;
var count__30464_30468 = (0);
var i__30465_30469 = (0);
while(true){
if((i__30465_30469 < count__30464_30468)){
var x_30470 = cljs.core._nth.call(null,chunk__30463_30467,i__30465_30469);
ret.push(x_30470);

var G__30471 = seq__30462_30466;
var G__30472 = chunk__30463_30467;
var G__30473 = count__30464_30468;
var G__30474 = (i__30465_30469 + (1));
seq__30462_30466 = G__30471;
chunk__30463_30467 = G__30472;
count__30464_30468 = G__30473;
i__30465_30469 = G__30474;
continue;
} else {
var temp__4657__auto___30475 = cljs.core.seq.call(null,seq__30462_30466);
if(temp__4657__auto___30475){
var seq__30462_30476__$1 = temp__4657__auto___30475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30462_30476__$1)){
var c__30084__auto___30477 = cljs.core.chunk_first.call(null,seq__30462_30476__$1);
var G__30478 = cljs.core.chunk_rest.call(null,seq__30462_30476__$1);
var G__30479 = c__30084__auto___30477;
var G__30480 = cljs.core.count.call(null,c__30084__auto___30477);
var G__30481 = (0);
seq__30462_30466 = G__30478;
chunk__30463_30467 = G__30479;
count__30464_30468 = G__30480;
i__30465_30469 = G__30481;
continue;
} else {
var x_30482 = cljs.core.first.call(null,seq__30462_30476__$1);
ret.push(x_30482);

var G__30483 = cljs.core.next.call(null,seq__30462_30476__$1);
var G__30484 = null;
var G__30485 = (0);
var G__30486 = (0);
seq__30462_30466 = G__30483;
chunk__30463_30467 = G__30484;
count__30464_30468 = G__30485;
i__30465_30469 = G__30486;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__30487_30491 = cljs.core.seq.call(null,v);
var chunk__30488_30492 = null;
var count__30489_30493 = (0);
var i__30490_30494 = (0);
while(true){
if((i__30490_30494 < count__30489_30493)){
var x_30495 = cljs.core._nth.call(null,chunk__30488_30492,i__30490_30494);
ret.push(x_30495);

var G__30496 = seq__30487_30491;
var G__30497 = chunk__30488_30492;
var G__30498 = count__30489_30493;
var G__30499 = (i__30490_30494 + (1));
seq__30487_30491 = G__30496;
chunk__30488_30492 = G__30497;
count__30489_30493 = G__30498;
i__30490_30494 = G__30499;
continue;
} else {
var temp__4657__auto___30500 = cljs.core.seq.call(null,seq__30487_30491);
if(temp__4657__auto___30500){
var seq__30487_30501__$1 = temp__4657__auto___30500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30487_30501__$1)){
var c__30084__auto___30502 = cljs.core.chunk_first.call(null,seq__30487_30501__$1);
var G__30503 = cljs.core.chunk_rest.call(null,seq__30487_30501__$1);
var G__30504 = c__30084__auto___30502;
var G__30505 = cljs.core.count.call(null,c__30084__auto___30502);
var G__30506 = (0);
seq__30487_30491 = G__30503;
chunk__30488_30492 = G__30504;
count__30489_30493 = G__30505;
i__30490_30494 = G__30506;
continue;
} else {
var x_30507 = cljs.core.first.call(null,seq__30487_30501__$1);
ret.push(x_30507);

var G__30508 = cljs.core.next.call(null,seq__30487_30501__$1);
var G__30509 = null;
var G__30510 = (0);
var G__30511 = (0);
seq__30487_30491 = G__30508;
chunk__30488_30492 = G__30509;
count__30489_30493 = G__30510;
i__30490_30494 = G__30511;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args30512 = [];
var len__30343__auto___30523 = arguments.length;
var i__30344__auto___30524 = (0);
while(true){
if((i__30344__auto___30524 < len__30343__auto___30523)){
args30512.push((arguments[i__30344__auto___30524]));

var G__30525 = (i__30344__auto___30524 + (1));
i__30344__auto___30524 = G__30525;
continue;
} else {
}
break;
}

var G__30514 = args30512.length;
switch (G__30514) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30512.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__30515 = obj;
G__30515.push(kfn.call(null,k),vfn.call(null,v));

return G__30515;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x30516 = cljs.core.clone.call(null,handlers);
x30516.forEach = ((function (x30516,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__30517 = cljs.core.seq.call(null,coll);
var chunk__30518 = null;
var count__30519 = (0);
var i__30520 = (0);
while(true){
if((i__30520 < count__30519)){
var vec__30521 = cljs.core._nth.call(null,chunk__30518,i__30520);
var k = cljs.core.nth.call(null,vec__30521,(0),null);
var v = cljs.core.nth.call(null,vec__30521,(1),null);
f.call(null,v,k);

var G__30527 = seq__30517;
var G__30528 = chunk__30518;
var G__30529 = count__30519;
var G__30530 = (i__30520 + (1));
seq__30517 = G__30527;
chunk__30518 = G__30528;
count__30519 = G__30529;
i__30520 = G__30530;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30517);
if(temp__4657__auto__){
var seq__30517__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30517__$1)){
var c__30084__auto__ = cljs.core.chunk_first.call(null,seq__30517__$1);
var G__30531 = cljs.core.chunk_rest.call(null,seq__30517__$1);
var G__30532 = c__30084__auto__;
var G__30533 = cljs.core.count.call(null,c__30084__auto__);
var G__30534 = (0);
seq__30517 = G__30531;
chunk__30518 = G__30532;
count__30519 = G__30533;
i__30520 = G__30534;
continue;
} else {
var vec__30522 = cljs.core.first.call(null,seq__30517__$1);
var k = cljs.core.nth.call(null,vec__30522,(0),null);
var v = cljs.core.nth.call(null,vec__30522,(1),null);
f.call(null,v,k);

var G__30535 = cljs.core.next.call(null,seq__30517__$1);
var G__30536 = null;
var G__30537 = (0);
var G__30538 = (0);
seq__30517 = G__30535;
chunk__30518 = G__30536;
count__30519 = G__30537;
i__30520 = G__30538;
continue;
}
} else {
return null;
}
}
break;
}
});})(x30516,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x30516;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args30539 = [];
var len__30343__auto___30545 = arguments.length;
var i__30344__auto___30546 = (0);
while(true){
if((i__30344__auto___30546 < len__30343__auto___30545)){
args30539.push((arguments[i__30344__auto___30546]));

var G__30547 = (i__30344__auto___30546 + (1));
i__30344__auto___30546 = G__30547;
continue;
} else {
}
break;
}

var G__30541 = args30539.length;
switch (G__30541) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30539.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit30542 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit30542 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta30543){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta30543 = meta30543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit30542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30544,meta30543__$1){
var self__ = this;
var _30544__$1 = this;
return (new cognitect.transit.t_cognitect$transit30542(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta30543__$1));
});

cognitect.transit.t_cognitect$transit30542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30544){
var self__ = this;
var _30544__$1 = this;
return self__.meta30543;
});

cognitect.transit.t_cognitect$transit30542.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit30542.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit30542.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit30542.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit30542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta30543","meta30543",1102358461,null)], null);
});

cognitect.transit.t_cognitect$transit30542.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit30542.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit30542";

cognitect.transit.t_cognitect$transit30542.cljs$lang$ctorPrWriter = (function (this__29879__auto__,writer__29880__auto__,opt__29881__auto__){
return cljs.core._write.call(null,writer__29880__auto__,"cognitect.transit/t_cognitect$transit30542");
});

cognitect.transit.__GT_t_cognitect$transit30542 = (function cognitect$transit$__GT_t_cognitect$transit30542(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta30543){
return (new cognitect.transit.t_cognitect$transit30542(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta30543));
});

}

return (new cognitect.transit.t_cognitect$transit30542(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__29273__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1465505506635