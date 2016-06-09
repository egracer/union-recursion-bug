// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.impl.network');
goog.require('cljs.core');
goog.require('om.transit');
goog.require('untangled.client.logging');
goog.require('cognitect.transit');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
untangled.client.impl.network.make_xhrio = (function untangled$client$impl$network$make_xhrio(){
return (new goog.net.XhrIo());
});

/**
 * @interface
 */
untangled.client.impl.network.UntangledNetwork = function(){};

/**
 * Send method, transmits EDN to the server and gets an EDN response. Calls result-callback with that response,
 *      or a map with key `:error` on errors. optional options may include `:headers`, but you may NOT override content
 *      type. The method CANNOT be used for parallel network requests.
 */
untangled.client.impl.network.send = (function untangled$client$impl$network$send(this$,edn,ok_callback,error_callback){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$UntangledNetwork$send$arity$4 == null)))){
return this$.untangled$client$impl$network$UntangledNetwork$send$arity$4(this$,edn,ok_callback,error_callback);
} else {
var x__29936__auto__ = (((this$ == null))?null:this$);
var m__29937__auto__ = (untangled.client.impl.network.send[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,this$,edn,ok_callback,error_callback);
} else {
var m__29937__auto____$1 = (untangled.client.impl.network.send["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,this$,edn,ok_callback,error_callback);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledNetwork.send",this$);
}
}
}
});

/**
 * Starts the network, passing in the app for any components that may need it.
 */
untangled.client.impl.network.start = (function untangled$client$impl$network$start(this$,complete_app){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$UntangledNetwork$start$arity$2 == null)))){
return this$.untangled$client$impl$network$UntangledNetwork$start$arity$2(this$,complete_app);
} else {
var x__29936__auto__ = (((this$ == null))?null:this$);
var m__29937__auto__ = (untangled.client.impl.network.start[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,this$,complete_app);
} else {
var m__29937__auto____$1 = (untangled.client.impl.network.start["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,this$,complete_app);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledNetwork.start",this$);
}
}
}
});


/**
 * @interface
 */
untangled.client.impl.network.IXhrIOCallbacks = function(){};

/**
 * Called by XhrIo on OK
 */
untangled.client.impl.network.response_ok = (function untangled$client$impl$network$response_ok(this$,xhrio,ok_cb){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$IXhrIOCallbacks$response_ok$arity$3 == null)))){
return this$.untangled$client$impl$network$IXhrIOCallbacks$response_ok$arity$3(this$,xhrio,ok_cb);
} else {
var x__29936__auto__ = (((this$ == null))?null:this$);
var m__29937__auto__ = (untangled.client.impl.network.response_ok[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,this$,xhrio,ok_cb);
} else {
var m__29937__auto____$1 = (untangled.client.impl.network.response_ok["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,this$,xhrio,ok_cb);
} else {
throw cljs.core.missing_protocol.call(null,"IXhrIOCallbacks.response-ok",this$);
}
}
}
});

/**
 * Called by XhrIo on ERROR
 */
untangled.client.impl.network.response_error = (function untangled$client$impl$network$response_error(this$,xhrio,err_cb){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$IXhrIOCallbacks$response_error$arity$3 == null)))){
return this$.untangled$client$impl$network$IXhrIOCallbacks$response_error$arity$3(this$,xhrio,err_cb);
} else {
var x__29936__auto__ = (((this$ == null))?null:this$);
var m__29937__auto__ = (untangled.client.impl.network.response_error[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,this$,xhrio,err_cb);
} else {
var m__29937__auto____$1 = (untangled.client.impl.network.response_error["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,this$,xhrio,err_cb);
} else {
throw cljs.core.missing_protocol.call(null,"IXhrIOCallbacks.response-error",this$);
}
}
}
});

untangled.client.impl.network.parse_response = (function untangled$client$impl$network$parse_response(xhr_io){
return cognitect.transit.read.call(null,om.transit.reader.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 2, ["f",(function (v){
return parseFloat(v);
}),"u",cljs.core.uuid], null)], null)),xhr_io.getResponseText());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {untangled.client.impl.network.IXhrIOCallbacks}
 * @implements {cljs.core.ICounted}
 * @implements {untangled.client.impl.network.UntangledNetwork}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled.client.impl.network.Network = (function (url,request_transform,global_error_callback,complete_app,__meta,__extmap,__hash){
this.url = url;
this.request_transform = request_transform;
this.global_error_callback = global_error_callback;
this.complete_app = complete_app;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
untangled.client.impl.network.Network.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29895__auto__,k__29896__auto__){
var self__ = this;
var this__29895__auto____$1 = this;
return cljs.core._lookup.call(null,this__29895__auto____$1,k__29896__auto__,null);
});

untangled.client.impl.network.Network.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29897__auto__,k32644,else__29898__auto__){
var self__ = this;
var this__29897__auto____$1 = this;
var G__32646 = (((k32644 instanceof cljs.core.Keyword))?k32644.fqn:null);
switch (G__32646) {
case "url":
return self__.url;

break;
case "request-transform":
return self__.request_transform;

break;
case "global-error-callback":
return self__.global_error_callback;

break;
case "complete-app":
return self__.complete_app;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32644,else__29898__auto__);

}
});

untangled.client.impl.network.Network.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29909__auto__,writer__29910__auto__,opts__29911__auto__){
var self__ = this;
var this__29909__auto____$1 = this;
var pr_pair__29912__auto__ = ((function (this__29909__auto____$1){
return (function (keyval__29913__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29910__auto__,cljs.core.pr_writer,""," ","",opts__29911__auto__,keyval__29913__auto__);
});})(this__29909__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29910__auto__,pr_pair__29912__auto__,"#untangled.client.impl.network.Network{",", ","}",opts__29911__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request-transform","request-transform",170337297),self__.request_transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});

untangled.client.impl.network.Network.prototype.cljs$core$IIterable$ = true;

untangled.client.impl.network.Network.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32643){
var self__ = this;
var G__32643__$1 = this;
return (new cljs.core.RecordIter((0),G__32643__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"request-transform","request-transform",170337297),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),new cljs.core.Keyword(null,"complete-app","complete-app",1317441339)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

untangled.client.impl.network.Network.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29893__auto__){
var self__ = this;
var this__29893__auto____$1 = this;
return self__.__meta;
});

untangled.client.impl.network.Network.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29889__auto__){
var self__ = this;
var this__29889__auto____$1 = this;
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.__meta,self__.__extmap,self__.__hash));
});

untangled.client.impl.network.Network.prototype.untangled$client$impl$network$IXhrIOCallbacks$ = true;

untangled.client.impl.network.Network.prototype.untangled$client$impl$network$IXhrIOCallbacks$response_ok$arity$3 = (function (this$,xhr_io,valid_data_callback){
var self__ = this;
var this$__$1 = this;
try{var query_response = untangled.client.impl.network.parse_response.call(null,xhr_io);
if(cljs.core.truth_((function (){var and__29261__auto__ = query_response;
if(cljs.core.truth_(and__29261__auto__)){
return valid_data_callback;
} else {
return and__29261__auto__;
}
})())){
return valid_data_callback.call(null,query_response);
} else {
return null;
}
}finally {xhr_io.dispose();
}});

untangled.client.impl.network.Network.prototype.untangled$client$impl$network$IXhrIOCallbacks$response_error$arity$3 = (function (this$,xhr_io,error_callback){
var self__ = this;
var this$__$1 = this;
try{var status = xhr_io.getStatus();
var log_and_dispatch_error = ((function (status,this$__$1){
return (function (str,error){
untangled.client.logging.error.call(null,str);

if(cljs.core.truth_(cljs.core.deref.call(null,self__.global_error_callback))){
cljs.core.deref.call(null,self__.global_error_callback).call(null,status,error);
} else {
}

return error_callback.call(null,error);
});})(status,this$__$1))
;
if((status === (0))){
return log_and_dispatch_error.call(null,[cljs.core.str("UNTANGLED NETWORK ERROR: No connection established.")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"network","network",2050004697)], null));
} else {
return log_and_dispatch_error.call(null,[cljs.core.str("SERVER ERROR CODE: "),cljs.core.str(status)].join(''),untangled.client.impl.network.parse_response.call(null,xhr_io));
}
}finally {xhr_io.dispose();
}});

untangled.client.impl.network.Network.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29899__auto__){
var self__ = this;
var this__29899__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

untangled.client.impl.network.Network.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29890__auto__){
var self__ = this;
var this__29890__auto____$1 = this;
var h__29708__auto__ = self__.__hash;
if(!((h__29708__auto__ == null))){
return h__29708__auto__;
} else {
var h__29708__auto____$1 = cljs.core.hash_imap.call(null,this__29890__auto____$1);
self__.__hash = h__29708__auto____$1;

return h__29708__auto____$1;
}
});

untangled.client.impl.network.Network.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__29891__auto__,other__29892__auto__){
var self__ = this;
var this__29891__auto____$1 = this;
if(cljs.core.truth_((function (){var and__29261__auto__ = other__29892__auto__;
if(cljs.core.truth_(and__29261__auto__)){
var and__29261__auto____$1 = (this__29891__auto____$1.constructor === other__29892__auto__.constructor);
if(and__29261__auto____$1){
return cljs.core.equiv_map.call(null,this__29891__auto____$1,other__29892__auto__);
} else {
return and__29261__auto____$1;
}
} else {
return and__29261__auto__;
}
})())){
return true;
} else {
return false;
}
});

untangled.client.impl.network.Network.prototype.untangled$client$impl$network$UntangledNetwork$ = true;

untangled.client.impl.network.Network.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
var xhrio = untangled.client.impl.network.make_xhrio.call(null);
var headers = new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/transit+json"], null);
var map__32647 = (cljs.core.truth_(self__.request_transform)?self__.request_transform.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),edn,new cljs.core.Keyword(null,"headers","headers",-835030129),headers], null)):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),edn,new cljs.core.Keyword(null,"headers","headers",-835030129),headers], null)
);
var map__32647__$1 = ((((!((map__32647 == null)))?((((map__32647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32647):map__32647);
var request = cljs.core.get.call(null,map__32647__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var headers__$1 = cljs.core.get.call(null,map__32647__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var post_data = cognitect.transit.write.call(null,om.transit.writer.call(null),request);
var headers__$2 = cljs.core.clj__GT_js.call(null,headers__$1);
xhrio.send(self__.url,"POST",post_data,headers__$2);

goog.events.listen(xhrio,goog.net.EventType.SUCCESS,((function (xhrio,headers,map__32647,map__32647__$1,request,headers__$1,post_data,headers__$2,this$__$1){
return (function (){
return untangled.client.impl.network.response_ok.call(null,this$__$1,xhrio,ok);
});})(xhrio,headers,map__32647,map__32647__$1,request,headers__$1,post_data,headers__$2,this$__$1))
);

return goog.events.listen(xhrio,goog.net.EventType.ERROR,((function (xhrio,headers,map__32647,map__32647__$1,request,headers__$1,post_data,headers__$2,this$__$1){
return (function (){
return untangled.client.impl.network.response_error.call(null,this$__$1,xhrio,err);
});})(xhrio,headers,map__32647,map__32647__$1,request,headers__$1,post_data,headers__$2,this$__$1))
);
});

untangled.client.impl.network.Network.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),app);
});

untangled.client.impl.network.Network.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29904__auto__,k__29905__auto__){
var self__ = this;
var this__29904__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),null,new cljs.core.Keyword(null,"request-transform","request-transform",170337297),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),null], null), null),k__29905__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29904__auto____$1),self__.__meta),k__29905__auto__);
} else {
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29905__auto__)),null));
}
});

untangled.client.impl.network.Network.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29902__auto__,k__29903__auto__,G__32643){
var self__ = this;
var this__29902__auto____$1 = this;
var pred__32649 = cljs.core.keyword_identical_QMARK_;
var expr__32650 = k__29903__auto__;
if(cljs.core.truth_(pred__32649.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__32650))){
return (new untangled.client.impl.network.Network(G__32643,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32649.call(null,new cljs.core.Keyword(null,"request-transform","request-transform",170337297),expr__32650))){
return (new untangled.client.impl.network.Network(self__.url,G__32643,self__.global_error_callback,self__.complete_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32649.call(null,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),expr__32650))){
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,G__32643,self__.complete_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32649.call(null,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),expr__32650))){
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,G__32643,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29903__auto__,G__32643),null));
}
}
}
}
});

untangled.client.impl.network.Network.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29907__auto__){
var self__ = this;
var this__29907__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request-transform","request-transform",170337297),self__.request_transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});

untangled.client.impl.network.Network.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29894__auto__,G__32643){
var self__ = this;
var this__29894__auto____$1 = this;
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,G__32643,self__.__extmap,self__.__hash));
});

untangled.client.impl.network.Network.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29900__auto__,entry__29901__auto__){
var self__ = this;
var this__29900__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29901__auto__)){
return cljs.core._assoc.call(null,this__29900__auto____$1,cljs.core._nth.call(null,entry__29901__auto__,(0)),cljs.core._nth.call(null,entry__29901__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29900__auto____$1,entry__29901__auto__);
}
});

untangled.client.impl.network.Network.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"request-transform","request-transform",1810868824,null),new cljs.core.Symbol(null,"global-error-callback","global-error-callback",-1753008138,null),new cljs.core.Symbol(null,"complete-app","complete-app",-1336994430,null)], null);
});

untangled.client.impl.network.Network.cljs$lang$type = true;

untangled.client.impl.network.Network.cljs$lang$ctorPrSeq = (function (this__29929__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.client.impl.network/Network");
});

untangled.client.impl.network.Network.cljs$lang$ctorPrWriter = (function (this__29929__auto__,writer__29930__auto__){
return cljs.core._write.call(null,writer__29930__auto__,"untangled.client.impl.network/Network");
});

untangled.client.impl.network.__GT_Network = (function untangled$client$impl$network$__GT_Network(url,request_transform,global_error_callback,complete_app){
return (new untangled.client.impl.network.Network(url,request_transform,global_error_callback,complete_app,null,null,null));
});

untangled.client.impl.network.map__GT_Network = (function untangled$client$impl$network$map__GT_Network(G__32645){
return (new untangled.client.impl.network.Network(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__32645),new cljs.core.Keyword(null,"request-transform","request-transform",170337297).cljs$core$IFn$_invoke$arity$1(G__32645),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631).cljs$core$IFn$_invoke$arity$1(G__32645),new cljs.core.Keyword(null,"complete-app","complete-app",1317441339).cljs$core$IFn$_invoke$arity$1(G__32645),null,cljs.core.dissoc.call(null,G__32645,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"request-transform","request-transform",170337297),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),new cljs.core.Keyword(null,"complete-app","complete-app",1317441339)),null));
});

untangled.client.impl.network.make_untangled_network = (function untangled$client$impl$network$make_untangled_network(var_args){
var args__30350__auto__ = [];
var len__30343__auto___32658 = arguments.length;
var i__30344__auto___32659 = (0);
while(true){
if((i__30344__auto___32659 < len__30343__auto___32658)){
args__30350__auto__.push((arguments[i__30344__auto___32659]));

var G__32660 = (i__30344__auto___32659 + (1));
i__30344__auto___32659 = G__32660;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((1) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((1)),(0),null)):null);
return untangled.client.impl.network.make_untangled_network.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30351__auto__);
});

untangled.client.impl.network.make_untangled_network.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__32655){
var map__32656 = p__32655;
var map__32656__$1 = ((((!((map__32656 == null)))?((((map__32656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32656):map__32656);
var request_transform = cljs.core.get.call(null,map__32656__$1,new cljs.core.Keyword(null,"request-transform","request-transform",170337297));
var global_error_callback = cljs.core.get.call(null,map__32656__$1,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631));
return untangled.client.impl.network.map__GT_Network.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"request-transform","request-transform",170337297),request_transform,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),cljs.core.atom.call(null,global_error_callback)], null));
});

untangled.client.impl.network.make_untangled_network.cljs$lang$maxFixedArity = (1);

untangled.client.impl.network.make_untangled_network.cljs$lang$applyTo = (function (seq32653){
var G__32654 = cljs.core.first.call(null,seq32653);
var seq32653__$1 = cljs.core.next.call(null,seq32653);
return untangled.client.impl.network.make_untangled_network.cljs$core$IFn$_invoke$arity$variadic(G__32654,seq32653__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {untangled.client.impl.network.UntangledNetwork}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled.client.impl.network.MockNetwork = (function (complete_app,__meta,__extmap,__hash){
this.complete_app = complete_app;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
untangled.client.impl.network.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29895__auto__,k__29896__auto__){
var self__ = this;
var this__29895__auto____$1 = this;
return cljs.core._lookup.call(null,this__29895__auto____$1,k__29896__auto__,null);
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29897__auto__,k32662,else__29898__auto__){
var self__ = this;
var this__29897__auto____$1 = this;
var G__32664 = (((k32662 instanceof cljs.core.Keyword))?k32662.fqn:null);
switch (G__32664) {
case "complete-app":
return self__.complete_app;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32662,else__29898__auto__);

}
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29909__auto__,writer__29910__auto__,opts__29911__auto__){
var self__ = this;
var this__29909__auto____$1 = this;
var pr_pair__29912__auto__ = ((function (this__29909__auto____$1){
return (function (keyval__29913__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29910__auto__,cljs.core.pr_writer,""," ","",opts__29911__auto__,keyval__29913__auto__);
});})(this__29909__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29910__auto__,pr_pair__29912__auto__,"#untangled.client.impl.network.MockNetwork{",", ","}",opts__29911__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IIterable$ = true;

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32661){
var self__ = this;
var G__32661__$1 = this;
return (new cljs.core.RecordIter((0),G__32661__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-app","complete-app",1317441339)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29893__auto__){
var self__ = this;
var this__29893__auto____$1 = this;
return self__.__meta;
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29889__auto__){
var self__ = this;
var this__29889__auto____$1 = this;
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,self__.__meta,self__.__extmap,self__.__hash));
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29899__auto__){
var self__ = this;
var this__29899__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29890__auto__){
var self__ = this;
var this__29890__auto____$1 = this;
var h__29708__auto__ = self__.__hash;
if(!((h__29708__auto__ == null))){
return h__29708__auto__;
} else {
var h__29708__auto____$1 = cljs.core.hash_imap.call(null,this__29890__auto____$1);
self__.__hash = h__29708__auto____$1;

return h__29708__auto____$1;
}
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__29891__auto__,other__29892__auto__){
var self__ = this;
var this__29891__auto____$1 = this;
if(cljs.core.truth_((function (){var and__29261__auto__ = other__29892__auto__;
if(cljs.core.truth_(and__29261__auto__)){
var and__29261__auto____$1 = (this__29891__auto____$1.constructor === other__29892__auto__.constructor);
if(and__29261__auto____$1){
return cljs.core.equiv_map.call(null,this__29891__auto____$1,other__29892__auto__);
} else {
return and__29261__auto____$1;
}
} else {
return and__29261__auto__;
}
})())){
return true;
} else {
return false;
}
});

untangled.client.impl.network.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$ = true;

untangled.client.impl.network.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
return untangled.client.logging.info.call(null,"Ignored (mock) Network request ",edn);
});

untangled.client.impl.network.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),app);
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29904__auto__,k__29905__auto__){
var self__ = this;
var this__29904__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),null], null), null),k__29905__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29904__auto____$1),self__.__meta),k__29905__auto__);
} else {
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29905__auto__)),null));
}
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29902__auto__,k__29903__auto__,G__32661){
var self__ = this;
var this__29902__auto____$1 = this;
var pred__32665 = cljs.core.keyword_identical_QMARK_;
var expr__32666 = k__29903__auto__;
if(cljs.core.truth_(pred__32665.call(null,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),expr__32666))){
return (new untangled.client.impl.network.MockNetwork(G__32661,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29903__auto__,G__32661),null));
}
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29907__auto__){
var self__ = this;
var this__29907__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29894__auto__,G__32661){
var self__ = this;
var this__29894__auto____$1 = this;
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,G__32661,self__.__extmap,self__.__hash));
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29900__auto__,entry__29901__auto__){
var self__ = this;
var this__29900__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29901__auto__)){
return cljs.core._assoc.call(null,this__29900__auto____$1,cljs.core._nth.call(null,entry__29901__auto__,(0)),cljs.core._nth.call(null,entry__29901__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29900__auto____$1,entry__29901__auto__);
}
});

untangled.client.impl.network.MockNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"complete-app","complete-app",-1336994430,null)], null);
});

untangled.client.impl.network.MockNetwork.cljs$lang$type = true;

untangled.client.impl.network.MockNetwork.cljs$lang$ctorPrSeq = (function (this__29929__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.client.impl.network/MockNetwork");
});

untangled.client.impl.network.MockNetwork.cljs$lang$ctorPrWriter = (function (this__29929__auto__,writer__29930__auto__){
return cljs.core._write.call(null,writer__29930__auto__,"untangled.client.impl.network/MockNetwork");
});

untangled.client.impl.network.__GT_MockNetwork = (function untangled$client$impl$network$__GT_MockNetwork(complete_app){
return (new untangled.client.impl.network.MockNetwork(complete_app,null,null,null));
});

untangled.client.impl.network.map__GT_MockNetwork = (function untangled$client$impl$network$map__GT_MockNetwork(G__32663){
return (new untangled.client.impl.network.MockNetwork(new cljs.core.Keyword(null,"complete-app","complete-app",1317441339).cljs$core$IFn$_invoke$arity$1(G__32663),null,cljs.core.dissoc.call(null,G__32663,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339)),null));
});

untangled.client.impl.network.mock_network = (function untangled$client$impl$network$mock_network(){
return untangled.client.impl.network.map__GT_MockNetwork.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=network.js.map?rel=1465505598139