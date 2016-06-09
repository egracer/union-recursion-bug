// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.network');
goog.require('untangled.client.impl.application');
goog.require('untangled.dom');
goog.require('om.next');
goog.require('untangled.client.impl.built_in_mutations');
/**
 * Entrypoint for creating a new untangled client. Instantiates an Application with default values, unless
 *   overridden by the parameters. If you do not supply a networking object, one will be provided that connects to the
 *   same server the application was served from, at `/api`.
 * 
 *   If you supply a `:request-transform` it must be a function:
 * 
 *   ```
 *  (fn [edn headers] [edn' headers'])
 *   ```
 * 
 *   it can replace the outgoing EDN or headers (returning both as a vector). NOTE: Both of these are clojurescript types.
 *   The edn will be encoded with transit, and the headers will be converted to a js map.
 * 
 *   `:initial-state` is your applications initial state. If it is an atom, it *must* be normalized. Untangled databases
 *   always have normalization turned on (for server data merging). If it is not an atom, it will be auto-normalized.
 * 
 *   `:started-callback` is an optional function that will receive the intiailized untangled application after it is
 *   mounted in the DOM, and is useful for triggering initial loads, routing mutations, etc. The Om reconciler is available
 *   under the `:reconciler` key (and you can access the app state, root node, etc from there.)
 * 
 *   `:network-error-callback` is a function of two arguments, the app state atom and the error, which will be invoked for
 *   every network error (status code >= 400, or no network found), should you choose to use the built-in networking record.
 * 
 *   `:migrate` is optional. It is a (fn [state tid->rid] ... state') that should return a new state where all tempids
 *   (the keys of `tid->rid`) are rewritten to real ids (the values of tid->rid). This defaults to a full recursive
 *   algorithm against all data in the app-state, which is correct but possibly slow).  Note that tempids will have an Om tempid data type.
 *   See Om reconciler documentation for further information.
 * 
 *   There is currently no way to circumvent the encoding of the body into transit. If you want to talk to other endpoints
 *   via alternate protocols you must currently implement that outside of the framework (e.g. global functions/state).
 *   
 */
untangled.client.core.new_untangled_client = (function untangled$client$core$new_untangled_client(var_args){
var args__30350__auto__ = [];
var len__30343__auto___34991 = arguments.length;
var i__30344__auto___34992 = (0);
while(true){
if((i__30344__auto___34992 < len__30343__auto___34991)){
args__30350__auto__.push((arguments[i__30344__auto___34992]));

var G__34993 = (i__30344__auto___34992 + (1));
i__30344__auto___34992 = G__34993;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((0) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((0)),(0),null)):null);
return untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(argseq__30351__auto__);
});

untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic = (function (p__34988){
var map__34989 = p__34988;
var map__34989__$1 = ((((!((map__34989 == null)))?((((map__34989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34989):map__34989);
var initial_state = cljs.core.get.call(null,map__34989__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.PersistentArrayMap.EMPTY);
var started_callback = cljs.core.get.call(null,map__34989__$1,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),cljs.core.constantly.call(null,null));
var networking = cljs.core.get.call(null,map__34989__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var request_transform = cljs.core.get.call(null,map__34989__$1,new cljs.core.Keyword(null,"request-transform","request-transform",170337297));
var network_error_callback = cljs.core.get.call(null,map__34989__$1,new cljs.core.Keyword(null,"network-error-callback","network-error-callback",93849635),cljs.core.constantly.call(null,null));
var migrate = cljs.core.get.call(null,map__34989__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
return untangled.client.core.map__GT_Application.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),initial_state,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),started_callback,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"migrate","migrate",-207110743),migrate], null),new cljs.core.Keyword(null,"networking","networking",586110628),(function (){var or__29273__auto__ = networking;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return untangled.client.impl.network.make_untangled_network.call(null,"/api",new cljs.core.Keyword(null,"request-transform","request-transform",170337297),request_transform,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),network_error_callback);
}
})()], null));
});

untangled.client.core.new_untangled_client.cljs$lang$maxFixedArity = (0);

untangled.client.core.new_untangled_client.cljs$lang$applyTo = (function (seq34987){
return untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34987));
});

/**
 * @interface
 */
untangled.client.core.UntangledApplication = function(){};

/**
 * Start/replace the webapp on the given DOM ID or DOM Node.
 */
untangled.client.core.mount = (function untangled$client$core$mount(this$,root_component,target_dom_id){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$mount$arity$3 == null)))){
return this$.untangled$client$core$UntangledApplication$mount$arity$3(this$,root_component,target_dom_id);
} else {
var x__29936__auto__ = (((this$ == null))?null:this$);
var m__29937__auto__ = (untangled.client.core.mount[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,this$,root_component,target_dom_id);
} else {
var m__29937__auto____$1 = (untangled.client.core.mount["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,this$,root_component,target_dom_id);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.mount",this$);
}
}
}
});

/**
 * Replace the entire app state with the given (pre-normalized) state.
 */
untangled.client.core.reset_state_BANG_ = (function untangled$client$core$reset_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$reset_state_BANG_$arity$2 == null)))){
return this$.untangled$client$core$UntangledApplication$reset_state_BANG_$arity$2(this$,new_state);
} else {
var x__29936__auto__ = (((this$ == null))?null:this$);
var m__29937__auto__ = (untangled.client.core.reset_state_BANG_[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,this$,new_state);
} else {
var m__29937__auto____$1 = (untangled.client.core.reset_state_BANG_["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.reset-state!",this$);
}
}
}
});

/**
 * Refresh the UI (force re-render). NOTE: You MUST support :key on your root DOM element with the :ui/react-key value from app state for this to work.
 */
untangled.client.core.refresh = (function untangled$client$core$refresh(this$){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$refresh$arity$1 == null)))){
return this$.untangled$client$core$UntangledApplication$refresh$arity$1(this$);
} else {
var x__29936__auto__ = (((this$ == null))?null:this$);
var m__29937__auto__ = (untangled.client.core.refresh[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,this$);
} else {
var m__29937__auto____$1 = (untangled.client.core.refresh["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.refresh",this$);
}
}
}
});

/**
 * Return a serialized version of the current history of the application, suitable for network transfer
 */
untangled.client.core.history = (function untangled$client$core$history(this$){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$history$arity$1 == null)))){
return this$.untangled$client$core$UntangledApplication$history$arity$1(this$);
} else {
var x__29936__auto__ = (((this$ == null))?null:this$);
var m__29937__auto__ = (untangled.client.core.history[goog.typeOf(x__29936__auto__)]);
if(!((m__29937__auto__ == null))){
return m__29937__auto__.call(null,this$);
} else {
var m__29937__auto____$1 = (untangled.client.core.history["_"]);
if(!((m__29937__auto____$1 == null))){
return m__29937__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.history",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {untangled.client.core.UntangledApplication}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled.client.core.Application = (function (initial_state,started_callback,networking,queue,response_channel,reconciler,parser,mounted_QMARK_,reconciler_options,__meta,__extmap,__hash){
this.initial_state = initial_state;
this.started_callback = started_callback;
this.networking = networking;
this.queue = queue;
this.response_channel = response_channel;
this.reconciler = reconciler;
this.parser = parser;
this.mounted_QMARK_ = mounted_QMARK_;
this.reconciler_options = reconciler_options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
untangled.client.core.Application.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29895__auto__,k__29896__auto__){
var self__ = this;
var this__29895__auto____$1 = this;
return cljs.core._lookup.call(null,this__29895__auto____$1,k__29896__auto__,null);
});

untangled.client.core.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29897__auto__,k34995,else__29898__auto__){
var self__ = this;
var this__29897__auto____$1 = this;
var G__34997 = (((k34995 instanceof cljs.core.Keyword))?k34995.fqn:null);
switch (G__34997) {
case "initial-state":
return self__.initial_state;

break;
case "started-callback":
return self__.started_callback;

break;
case "networking":
return self__.networking;

break;
case "queue":
return self__.queue;

break;
case "response-channel":
return self__.response_channel;

break;
case "reconciler":
return self__.reconciler;

break;
case "parser":
return self__.parser;

break;
case "mounted?":
return self__.mounted_QMARK_;

break;
case "reconciler-options":
return self__.reconciler_options;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34995,else__29898__auto__);

}
});

untangled.client.core.Application.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29909__auto__,writer__29910__auto__,opts__29911__auto__){
var self__ = this;
var this__29909__auto____$1 = this;
var pr_pair__29912__auto__ = ((function (this__29909__auto____$1){
return (function (keyval__29913__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29910__auto__,cljs.core.pr_writer,""," ","",opts__29911__auto__,keyval__29913__auto__);
});})(this__29909__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29910__auto__,pr_pair__29912__auto__,"#untangled.client.core.Application{",", ","}",opts__29911__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),self__.started_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"networking","networking",586110628),self__.networking],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"queue","queue",1455835879),self__.queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),self__.response_channel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mounted?","mounted?",712114760),self__.mounted_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),self__.reconciler_options],null))], null),self__.__extmap));
});

untangled.client.core.Application.prototype.cljs$core$IIterable$ = true;

untangled.client.core.Application.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34994){
var self__ = this;
var G__34994__$1 = this;
return (new cljs.core.RecordIter((0),G__34994__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"mounted?","mounted?",712114760),new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

untangled.client.core.Application.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29893__auto__){
var self__ = this;
var this__29893__auto____$1 = this;
return self__.__meta;
});

untangled.client.core.Application.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29889__auto__){
var self__ = this;
var this__29889__auto____$1 = this;
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,self__.__hash));
});

untangled.client.core.Application.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29899__auto__){
var self__ = this;
var this__29899__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

untangled.client.core.Application.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29890__auto__){
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

untangled.client.core.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__29891__auto__,other__29892__auto__){
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

untangled.client.core.Application.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29904__auto__,k__29905__auto__){
var self__ = this;
var this__29904__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"networking","networking",586110628),null,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),null,new cljs.core.Keyword(null,"queue","queue",1455835879),null,new cljs.core.Keyword(null,"mounted?","mounted?",712114760),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"parser","parser",-1543495310),null,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),null,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),null], null), null),k__29905__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29904__auto____$1),self__.__meta),k__29905__auto__);
} else {
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29905__auto__)),null));
}
});

untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$ = true;

untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$mount$arity$3 = (function (this$,root_component,dom_id_or_node){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.mounted_QMARK_)){
untangled.client.core.refresh.call(null,this$__$1);

return this$__$1;
} else {
return untangled.client.impl.application.initialize.call(null,this$__$1,self__.initial_state,root_component,dom_id_or_node,self__.reconciler_options);
}
});

untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$reset_state_BANG_$arity$2 = (function (this$,new_state){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,om.next.app_state.call(null,self__.reconciler),new_state);
});

untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$history$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var history_steps = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(self__.reconciler)).arr;
var history_map = cljs.core.deref.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(self__.reconciler)).index);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"steps","steps",-128433302),history_steps,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (history_steps,history_map,this$__$1){
return (function (p__34998){
var vec__34999 = p__34998;
var k = cljs.core.nth.call(null,vec__34999,(0),null);
var v = cljs.core.nth.call(null,vec__34999,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword("untangled","meta","untangled/meta",1275048992),cljs.core.meta.call(null,v))], null);
});})(history_steps,history_map,this$__$1))
,history_map))], null);
});

untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$refresh$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
untangled.client.logging.info.call(null,"RERENDER: NOTE: If your UI doesn't change, make sure you query for :ui/react-key on your Root and embed that as :key in your top-level DOM element");

return untangled.dom.force_render.call(null,self__.reconciler);
});

untangled.client.core.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29902__auto__,k__29903__auto__,G__34994){
var self__ = this;
var this__29902__auto____$1 = this;
var pred__35000 = cljs.core.keyword_identical_QMARK_;
var expr__35001 = k__29903__auto__;
if(cljs.core.truth_(pred__35000.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),expr__35001))){
return (new untangled.client.core.Application(G__34994,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35000.call(null,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),expr__35001))){
return (new untangled.client.core.Application(self__.initial_state,G__34994,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35000.call(null,new cljs.core.Keyword(null,"networking","networking",586110628),expr__35001))){
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,G__34994,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35000.call(null,new cljs.core.Keyword(null,"queue","queue",1455835879),expr__35001))){
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,G__34994,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35000.call(null,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),expr__35001))){
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,G__34994,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35000.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__35001))){
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,self__.response_channel,G__34994,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35000.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310),expr__35001))){
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,G__34994,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35000.call(null,new cljs.core.Keyword(null,"mounted?","mounted?",712114760),expr__35001))){
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,G__34994,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35000.call(null,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),expr__35001))){
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,G__34994,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29903__auto__,G__34994),null));
}
}
}
}
}
}
}
}
}
});

untangled.client.core.Application.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29907__auto__){
var self__ = this;
var this__29907__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),self__.started_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"networking","networking",586110628),self__.networking],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"queue","queue",1455835879),self__.queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),self__.response_channel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mounted?","mounted?",712114760),self__.mounted_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),self__.reconciler_options],null))], null),self__.__extmap));
});

untangled.client.core.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29894__auto__,G__34994){
var self__ = this;
var this__29894__auto____$1 = this;
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,G__34994,self__.__extmap,self__.__hash));
});

untangled.client.core.Application.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29900__auto__,entry__29901__auto__){
var self__ = this;
var this__29900__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29901__auto__)){
return cljs.core._assoc.call(null,this__29900__auto____$1,cljs.core._nth.call(null,entry__29901__auto__,(0)),cljs.core._nth.call(null,entry__29901__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29900__auto____$1,entry__29901__auto__);
}
});

untangled.client.core.Application.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"initial-state","initial-state",-381085279,null),new cljs.core.Symbol(null,"started-callback","started-callback",-158055424,null),new cljs.core.Symbol(null,"networking","networking",-2068325141,null),new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.Symbol(null,"response-channel","response-channel",-1259244276,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"parser","parser",97036217,null),new cljs.core.Symbol(null,"mounted?","mounted?",-1942321009,null),new cljs.core.Symbol(null,"reconciler-options","reconciler-options",-1005320734,null)], null);
});

untangled.client.core.Application.cljs$lang$type = true;

untangled.client.core.Application.cljs$lang$ctorPrSeq = (function (this__29929__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.client.core/Application");
});

untangled.client.core.Application.cljs$lang$ctorPrWriter = (function (this__29929__auto__,writer__29930__auto__){
return cljs.core._write.call(null,writer__29930__auto__,"untangled.client.core/Application");
});

untangled.client.core.__GT_Application = (function untangled$client$core$__GT_Application(initial_state,started_callback,networking,queue,response_channel,reconciler,parser,mounted_QMARK_,reconciler_options){
return (new untangled.client.core.Application(initial_state,started_callback,networking,queue,response_channel,reconciler,parser,mounted_QMARK_,reconciler_options,null,null,null));
});

untangled.client.core.map__GT_Application = (function untangled$client$core$map__GT_Application(G__34996){
return (new untangled.client.core.Application(new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(G__34996),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951).cljs$core$IFn$_invoke$arity$1(G__34996),new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(G__34996),new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(G__34996),new cljs.core.Keyword(null,"response-channel","response-channel",1395191493).cljs$core$IFn$_invoke$arity$1(G__34996),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__34996),new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(G__34996),new cljs.core.Keyword(null,"mounted?","mounted?",712114760).cljs$core$IFn$_invoke$arity$1(G__34996),new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035).cljs$core$IFn$_invoke$arity$1(G__34996),null,cljs.core.dissoc.call(null,G__34996,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"mounted?","mounted?",712114760),new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035)),null));
});

/**
 * A test client that has no networking. Useful for UI testing with a real Untangled app container.
 */
untangled.client.core.new_untangled_test_client = (function untangled$client$core$new_untangled_test_client(var_args){
var args__30350__auto__ = [];
var len__30343__auto___35008 = arguments.length;
var i__30344__auto___35009 = (0);
while(true){
if((i__30344__auto___35009 < len__30343__auto___35008)){
args__30350__auto__.push((arguments[i__30344__auto___35009]));

var G__35010 = (i__30344__auto___35009 + (1));
i__30344__auto___35009 = G__35010;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((0) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((0)),(0),null)):null);
return untangled.client.core.new_untangled_test_client.cljs$core$IFn$_invoke$arity$variadic(argseq__30351__auto__);
});

untangled.client.core.new_untangled_test_client.cljs$core$IFn$_invoke$arity$variadic = (function (p__35005){
var map__35006 = p__35005;
var map__35006__$1 = ((((!((map__35006 == null)))?((((map__35006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35006):map__35006);
var initial_state = cljs.core.get.call(null,map__35006__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.PersistentArrayMap.EMPTY);
var started_callback = cljs.core.get.call(null,map__35006__$1,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),null);
return untangled.client.core.map__GT_Application.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),initial_state,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),started_callback,new cljs.core.Keyword(null,"networking","networking",586110628),untangled.client.impl.network.mock_network.call(null)], null));
});

untangled.client.core.new_untangled_test_client.cljs$lang$maxFixedArity = (0);

untangled.client.core.new_untangled_test_client.cljs$lang$applyTo = (function (seq35004){
return untangled.client.core.new_untangled_test_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35004));
});
/**
 * Get the current window location from the browser
 */
untangled.client.core.get_url = (function untangled$client$core$get_url(){
return window.location.href;
});
/**
 * Get the current URI parameters from the browser url or one you supply
 */
untangled.client.core.uri_params = (function untangled$client$core$uri_params(var_args){
var args35011 = [];
var len__30343__auto___35018 = arguments.length;
var i__30344__auto___35019 = (0);
while(true){
if((i__30344__auto___35019 < len__30343__auto___35018)){
args35011.push((arguments[i__30344__auto___35019]));

var G__35020 = (i__30344__auto___35019 + (1));
i__30344__auto___35019 = G__35020;
continue;
} else {
}
break;
}

var G__35013 = args35011.length;
switch (G__35013) {
case 0:
return untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35011.length)].join('')));

}
});

untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$0 = (function (){
return untangled.client.core.uri_params.call(null,untangled.client.core.get_url.call(null));
});

untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$1 = (function (url){
var query_data = (new goog.Uri(url)).getQueryData();
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__30053__auto__ = ((function (query_data){
return (function untangled$client$core$iter__35014(s__35015){
return (new cljs.core.LazySeq(null,((function (query_data){
return (function (){
var s__35015__$1 = s__35015;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35015__$1);
if(temp__4657__auto__){
var s__35015__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35015__$2)){
var c__30051__auto__ = cljs.core.chunk_first.call(null,s__35015__$2);
var size__30052__auto__ = cljs.core.count.call(null,c__30051__auto__);
var b__35017 = cljs.core.chunk_buffer.call(null,size__30052__auto__);
if((function (){var i__35016 = (0);
while(true){
if((i__35016 < size__30052__auto__)){
var k = cljs.core._nth.call(null,c__30051__auto__,i__35016);
cljs.core.chunk_append.call(null,b__35017,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,query_data.get(k)], null));

var G__35022 = (i__35016 + (1));
i__35016 = G__35022;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35017),untangled$client$core$iter__35014.call(null,cljs.core.chunk_rest.call(null,s__35015__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35017),null);
}
} else {
var k = cljs.core.first.call(null,s__35015__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,query_data.get(k)], null),untangled$client$core$iter__35014.call(null,cljs.core.rest.call(null,s__35015__$2)));
}
} else {
return null;
}
break;
}
});})(query_data))
,null,null));
});})(query_data))
;
return iter__30053__auto__.call(null,query_data.getKeys());
})());
});

untangled.client.core.uri_params.cljs$lang$maxFixedArity = 1;
/**
 * Get the value of the named parameter from the browser URL (or an explicit one)
 */
untangled.client.core.get_url_param = (function untangled$client$core$get_url_param(var_args){
var args35023 = [];
var len__30343__auto___35026 = arguments.length;
var i__30344__auto___35027 = (0);
while(true){
if((i__30344__auto___35027 < len__30343__auto___35026)){
args35023.push((arguments[i__30344__auto___35027]));

var G__35028 = (i__30344__auto___35027 + (1));
i__30344__auto___35027 = G__35028;
continue;
} else {
}
break;
}

var G__35025 = args35023.length;
switch (G__35025) {
case 1:
return untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35023.length)].join('')));

}
});

untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$1 = (function (param_name){
return untangled.client.core.get_url_param.call(null,untangled.client.core.get_url.call(null),param_name);
});

untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$2 = (function (url,param_name){
return cljs.core.get.call(null,untangled.client.core.uri_params.call(null,url),param_name);
});

untangled.client.core.get_url_param.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=core.js.map?rel=1465505599962