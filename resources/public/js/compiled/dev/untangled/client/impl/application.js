// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.impl.application');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('untangled.client.logging');
goog.require('untangled.i18n.core');
goog.require('untangled.client.impl.network');
goog.require('untangled.client.impl.om_plumbing');
goog.require('cljs.core.async');
goog.require('untangled.client.impl.data_fetch');
goog.require('om.next');
untangled.client.impl.application.fallback_handler = (function untangled$client$impl$application$fallback_handler(p__34577,query){
var map__34580 = p__34577;
var map__34580__$1 = ((((!((map__34580 == null)))?((((map__34580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34580):map__34580);
var reconciler = cljs.core.get.call(null,map__34580__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__34580,map__34580__$1,reconciler){
return (function (error){
cljs.core.swap_BANG_.call(null,om.next.app_state.call(null,reconciler),cljs.core.assoc,new cljs.core.Keyword("untangled","server-error","untangled/server-error",1542377811),error);

var temp__4655__auto__ = untangled.client.impl.om_plumbing.fallback_query.call(null,query,error);
if(cljs.core.truth_(temp__4655__auto__)){
var q = temp__4655__auto__;
untangled.client.logging.warn.call(null,untangled.client.logging.value_message.call(null,"Transaction failed. Running fallback.",q));

return om.next.transact_BANG_.call(null,reconciler,q);
} else {
return untangled.client.logging.warn.call(null,"Fallback triggered, but no fallbacks were defined.");
}
});
;})(map__34580,map__34580__$1,reconciler))
});
untangled.client.impl.application.enqueue = (function untangled$client$impl$application$enqueue(q,v){
var c__32598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32598__auto__){
return (function (){
var f__32599__auto__ = (function (){var switch__32583__auto__ = ((function (c__32598__auto__){
return (function (state_34597){
var state_val_34598 = (state_34597[(1)]);
if((state_val_34598 === (1))){
var state_34597__$1 = state_34597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34597__$1,(2),q,v);
} else {
if((state_val_34598 === (2))){
var inst_34595 = (state_34597[(2)]);
var state_34597__$1 = state_34597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34597__$1,inst_34595);
} else {
return null;
}
}
});})(c__32598__auto__))
;
return ((function (switch__32583__auto__,c__32598__auto__){
return (function() {
var untangled$client$impl$application$enqueue_$_state_machine__32584__auto__ = null;
var untangled$client$impl$application$enqueue_$_state_machine__32584__auto____0 = (function (){
var statearr_34602 = [null,null,null,null,null,null,null];
(statearr_34602[(0)] = untangled$client$impl$application$enqueue_$_state_machine__32584__auto__);

(statearr_34602[(1)] = (1));

return statearr_34602;
});
var untangled$client$impl$application$enqueue_$_state_machine__32584__auto____1 = (function (state_34597){
while(true){
var ret_value__32585__auto__ = (function (){try{while(true){
var result__32586__auto__ = switch__32583__auto__.call(null,state_34597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32586__auto__;
}
break;
}
}catch (e34603){if((e34603 instanceof Object)){
var ex__32587__auto__ = e34603;
var statearr_34604_34606 = state_34597;
(statearr_34604_34606[(5)] = ex__32587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34607 = state_34597;
state_34597 = G__34607;
continue;
} else {
return ret_value__32585__auto__;
}
break;
}
});
untangled$client$impl$application$enqueue_$_state_machine__32584__auto__ = function(state_34597){
switch(arguments.length){
case 0:
return untangled$client$impl$application$enqueue_$_state_machine__32584__auto____0.call(this);
case 1:
return untangled$client$impl$application$enqueue_$_state_machine__32584__auto____1.call(this,state_34597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$enqueue_$_state_machine__32584__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$enqueue_$_state_machine__32584__auto____0;
untangled$client$impl$application$enqueue_$_state_machine__32584__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$enqueue_$_state_machine__32584__auto____1;
return untangled$client$impl$application$enqueue_$_state_machine__32584__auto__;
})()
;})(switch__32583__auto__,c__32598__auto__))
})();
var state__32600__auto__ = (function (){var statearr_34605 = f__32599__auto__.call(null);
(statearr_34605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32598__auto__);

return statearr_34605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32600__auto__);
});})(c__32598__auto__))
);

return c__32598__auto__;
});
/**
 * Do a properly-plumbed network send that strips ui attributes from the tx
 */
untangled.client.impl.application.real_send = (function untangled$client$impl$application$real_send(net,tx,on_load,on_error){
return untangled.client.impl.network.send.call(null,net,untangled.client.impl.om_plumbing.strip_ui.call(null,tx),on_load,on_error);
});
untangled.client.impl.application.enqueue_mutations = (function untangled$client$impl$application$enqueue_mutations(p__34609,remote_tx_map,cb){
var map__34612 = p__34609;
var map__34612__$1 = ((((!((map__34612 == null)))?((((map__34612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34612):map__34612);
var app__$1 = map__34612__$1;
var queue = cljs.core.get.call(null,map__34612__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var full_remote_transaction = new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(remote_tx_map);
var fallback = untangled.client.impl.application.fallback_handler.call(null,app__$1,full_remote_transaction);
var desired_remote_mutations = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction);
var has_mutations_QMARK_ = (cljs.core.count.call(null,desired_remote_mutations) > (0));
var payload = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__34612,map__34612__$1,app__$1,queue){
return (function (p1__34608_SHARP_){
return fallback.call(null,p1__34608_SHARP_);
});})(full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__34612,map__34612__$1,app__$1,queue))
], null);
if(has_mutations_QMARK_){
return untangled.client.impl.application.enqueue.call(null,queue,payload);
} else {
return null;
}
});
untangled.client.impl.application.enqueue_reads = (function untangled$client$impl$application$enqueue_reads(p__34616){
var map__34627 = p__34616;
var map__34627__$1 = ((((!((map__34627 == null)))?((((map__34627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34627):map__34627);
var queue = cljs.core.get.call(null,map__34627__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var reconciler = cljs.core.get.call(null,map__34627__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.call(null,map__34627__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var parallel_payload = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,reconciler);
var fetch_payload = untangled.client.impl.data_fetch.mark_loading.call(null,reconciler);
var seq__34629_34637 = cljs.core.seq.call(null,parallel_payload);
var chunk__34630_34638 = null;
var count__34631_34639 = (0);
var i__34632_34640 = (0);
while(true){
if((i__34632_34640 < count__34631_34639)){
var map__34633_34641 = cljs.core._nth.call(null,chunk__34630_34638,i__34632_34640);
var map__34633_34642__$1 = ((((!((map__34633_34641 == null)))?((((map__34633_34641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34633_34641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34633_34641):map__34633_34641);
var query_34643 = cljs.core.get.call(null,map__34633_34642__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_34644 = cljs.core.get.call(null,map__34633_34642__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_34645 = cljs.core.get.call(null,map__34633_34642__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_34646 = cljs.core.get.call(null,map__34633_34642__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__34647 = ((function (seq__34629_34637,chunk__34630_34638,count__34631_34639,i__34632_34640,map__34633_34641,map__34633_34642__$1,query_34643,on_load_34644,on_error_34645,callback_args_34646,parallel_payload,fetch_payload,map__34627,map__34627__$1,queue,reconciler,networking){
return (function (p1__34614_SHARP_){
return on_load_34644.call(null,p1__34614_SHARP_,callback_args_34646);
});})(seq__34629_34637,chunk__34630_34638,count__34631_34639,i__34632_34640,map__34633_34641,map__34633_34642__$1,query_34643,on_load_34644,on_error_34645,callback_args_34646,parallel_payload,fetch_payload,map__34627,map__34627__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__34648 = ((function (seq__34629_34637,chunk__34630_34638,count__34631_34639,i__34632_34640,on_load_SINGLEQUOTE__34647,map__34633_34641,map__34633_34642__$1,query_34643,on_load_34644,on_error_34645,callback_args_34646,parallel_payload,fetch_payload,map__34627,map__34627__$1,queue,reconciler,networking){
return (function (p1__34615_SHARP_){
return on_error_34645.call(null,p1__34615_SHARP_,callback_args_34646);
});})(seq__34629_34637,chunk__34630_34638,count__34631_34639,i__34632_34640,on_load_SINGLEQUOTE__34647,map__34633_34641,map__34633_34642__$1,query_34643,on_load_34644,on_error_34645,callback_args_34646,parallel_payload,fetch_payload,map__34627,map__34627__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_34643,on_load_SINGLEQUOTE__34647,on_error_SINGLEQUOTE__34648);

var G__34649 = seq__34629_34637;
var G__34650 = chunk__34630_34638;
var G__34651 = count__34631_34639;
var G__34652 = (i__34632_34640 + (1));
seq__34629_34637 = G__34649;
chunk__34630_34638 = G__34650;
count__34631_34639 = G__34651;
i__34632_34640 = G__34652;
continue;
} else {
var temp__4657__auto___34653 = cljs.core.seq.call(null,seq__34629_34637);
if(temp__4657__auto___34653){
var seq__34629_34654__$1 = temp__4657__auto___34653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34629_34654__$1)){
var c__30084__auto___34655 = cljs.core.chunk_first.call(null,seq__34629_34654__$1);
var G__34656 = cljs.core.chunk_rest.call(null,seq__34629_34654__$1);
var G__34657 = c__30084__auto___34655;
var G__34658 = cljs.core.count.call(null,c__30084__auto___34655);
var G__34659 = (0);
seq__34629_34637 = G__34656;
chunk__34630_34638 = G__34657;
count__34631_34639 = G__34658;
i__34632_34640 = G__34659;
continue;
} else {
var map__34635_34660 = cljs.core.first.call(null,seq__34629_34654__$1);
var map__34635_34661__$1 = ((((!((map__34635_34660 == null)))?((((map__34635_34660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34635_34660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34635_34660):map__34635_34660);
var query_34662 = cljs.core.get.call(null,map__34635_34661__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_34663 = cljs.core.get.call(null,map__34635_34661__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_34664 = cljs.core.get.call(null,map__34635_34661__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_34665 = cljs.core.get.call(null,map__34635_34661__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__34666 = ((function (seq__34629_34637,chunk__34630_34638,count__34631_34639,i__34632_34640,map__34635_34660,map__34635_34661__$1,query_34662,on_load_34663,on_error_34664,callback_args_34665,seq__34629_34654__$1,temp__4657__auto___34653,parallel_payload,fetch_payload,map__34627,map__34627__$1,queue,reconciler,networking){
return (function (p1__34614_SHARP_){
return on_load_34663.call(null,p1__34614_SHARP_,callback_args_34665);
});})(seq__34629_34637,chunk__34630_34638,count__34631_34639,i__34632_34640,map__34635_34660,map__34635_34661__$1,query_34662,on_load_34663,on_error_34664,callback_args_34665,seq__34629_34654__$1,temp__4657__auto___34653,parallel_payload,fetch_payload,map__34627,map__34627__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__34667 = ((function (seq__34629_34637,chunk__34630_34638,count__34631_34639,i__34632_34640,on_load_SINGLEQUOTE__34666,map__34635_34660,map__34635_34661__$1,query_34662,on_load_34663,on_error_34664,callback_args_34665,seq__34629_34654__$1,temp__4657__auto___34653,parallel_payload,fetch_payload,map__34627,map__34627__$1,queue,reconciler,networking){
return (function (p1__34615_SHARP_){
return on_error_34664.call(null,p1__34615_SHARP_,callback_args_34665);
});})(seq__34629_34637,chunk__34630_34638,count__34631_34639,i__34632_34640,on_load_SINGLEQUOTE__34666,map__34635_34660,map__34635_34661__$1,query_34662,on_load_34663,on_error_34664,callback_args_34665,seq__34629_34654__$1,temp__4657__auto___34653,parallel_payload,fetch_payload,map__34627,map__34627__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_34662,on_load_SINGLEQUOTE__34666,on_error_SINGLEQUOTE__34667);

var G__34668 = cljs.core.next.call(null,seq__34629_34654__$1);
var G__34669 = null;
var G__34670 = (0);
var G__34671 = (0);
seq__34629_34637 = G__34668;
chunk__34630_34638 = G__34669;
count__34631_34639 = G__34670;
i__34632_34640 = G__34671;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(fetch_payload)){
return untangled.client.impl.application.enqueue.call(null,queue,cljs.core.assoc.call(null,fetch_payload,new cljs.core.Keyword(null,"networking","networking",586110628),networking));
} else {
return null;
}
});
/**
 * Puts queries/mutations (and their corresponding callbacks) onto the send queue. The networking CSP will pull these
 *   off one at a time and send them through the real networking layer. Reads are guaranteed to *follow* writes.
 */
untangled.client.impl.application.server_send = (function untangled$client$impl$application$server_send(app__$1,remote_tx_map,cb){
untangled.client.impl.application.enqueue_mutations.call(null,app__$1,remote_tx_map,cb);

return untangled.client.impl.application.enqueue_reads.call(null,app__$1);
});
/**
 * Starts a communicating sequential process that sends network requests from the request queue.
 */
untangled.client.impl.application.start_network_sequential_processing = (function untangled$client$impl$application$start_network_sequential_processing(p__34672){
var map__34790 = p__34672;
var map__34790__$1 = ((((!((map__34790 == null)))?((((map__34790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34790):map__34790);
var networking = cljs.core.get.call(null,map__34790__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var queue = cljs.core.get.call(null,map__34790__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var response_channel = cljs.core.get.call(null,map__34790__$1,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493));
var make_process_response = ((function (map__34790,map__34790__$1,networking,queue,response_channel){
return (function untangled$client$impl$application$start_network_sequential_processing_$_make_process_response(action,callback_args){
return ((function (map__34790,map__34790__$1,networking,queue,response_channel){
return (function (resp){
try{return action.call(null,resp,callback_args);
}finally {var c__32598__auto___34907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32598__auto___34907,map__34790,map__34790__$1,networking,queue,response_channel){
return (function (){
var f__32599__auto__ = (function (){var switch__32583__auto__ = ((function (c__32598__auto___34907,map__34790,map__34790__$1,networking,queue,response_channel){
return (function (state_34831){
var state_val_34832 = (state_34831[(1)]);
if((state_val_34832 === (1))){
var state_34831__$1 = state_34831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34831__$1,(2),response_channel,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_34832 === (2))){
var inst_34829 = (state_34831[(2)]);
var state_34831__$1 = state_34831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34831__$1,inst_34829);
} else {
return null;
}
}
});})(c__32598__auto___34907,map__34790,map__34790__$1,networking,queue,response_channel))
;
return ((function (switch__32583__auto__,c__32598__auto___34907,map__34790,map__34790__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__32584__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__32584__auto____0 = (function (){
var statearr_34836 = [null,null,null,null,null,null,null];
(statearr_34836[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__32584__auto__);

(statearr_34836[(1)] = (1));

return statearr_34836;
});
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__32584__auto____1 = (function (state_34831){
while(true){
var ret_value__32585__auto__ = (function (){try{while(true){
var result__32586__auto__ = switch__32583__auto__.call(null,state_34831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32586__auto__;
}
break;
}
}catch (e34837){if((e34837 instanceof Object)){
var ex__32587__auto__ = e34837;
var statearr_34838_34908 = state_34831;
(statearr_34838_34908[(5)] = ex__32587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34909 = state_34831;
state_34831 = G__34909;
continue;
} else {
return ret_value__32585__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__32584__auto__ = function(state_34831){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__32584__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__32584__auto____1.call(this,state_34831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__32584__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__32584__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__32584__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__32584__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__32584__auto__;
})()
;})(switch__32583__auto__,c__32598__auto___34907,map__34790,map__34790__$1,networking,queue,response_channel))
})();
var state__32600__auto__ = (function (){var statearr_34839 = f__32599__auto__.call(null);
(statearr_34839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32598__auto___34907);

return statearr_34839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32600__auto__);
});})(c__32598__auto___34907,map__34790,map__34790__$1,networking,queue,response_channel))
);

}});
;})(map__34790,map__34790__$1,networking,queue,response_channel))
});})(map__34790,map__34790__$1,networking,queue,response_channel))
;
var c__32598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32598__auto__,map__34790,map__34790__$1,networking,queue,response_channel){
return (function (){
var f__32599__auto__ = (function (){var switch__32583__auto__ = ((function (c__32598__auto__,map__34790,map__34790__$1,networking,queue,response_channel){
return (function (state_34880){
var state_val_34881 = (state_34880[(1)]);
if((state_val_34881 === (7))){
var inst_34859 = (state_34880[(2)]);
var state_34880__$1 = state_34880;
if(cljs.core.truth_(inst_34859)){
var statearr_34882_34910 = state_34880__$1;
(statearr_34882_34910[(1)] = (11));

} else {
var statearr_34883_34911 = state_34880__$1;
(statearr_34883_34911[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (1))){
var state_34880__$1 = state_34880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34880__$1,(2),queue);
} else {
if((state_val_34881 === (4))){
var inst_34878 = (state_34880[(2)]);
var state_34880__$1 = state_34880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34880__$1,inst_34878);
} else {
if((state_val_34881 === (15))){
var inst_34875 = (state_34880[(2)]);
var inst_34842 = inst_34875;
var state_34880__$1 = (function (){var statearr_34884 = state_34880;
(statearr_34884[(7)] = inst_34842);

return statearr_34884;
})();
var statearr_34885_34912 = state_34880__$1;
(statearr_34885_34912[(2)] = null);

(statearr_34885_34912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (13))){
var inst_34864 = (state_34880[(2)]);
var inst_34865 = cljs.core.get.call(null,inst_34864,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_34866 = cljs.core.get.call(null,inst_34864,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var inst_34867 = cljs.core.get.call(null,inst_34864,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var inst_34868 = cljs.core.get.call(null,inst_34864,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var inst_34869 = make_process_response.call(null,inst_34866,inst_34868);
var inst_34870 = make_process_response.call(null,inst_34867,inst_34868);
var inst_34871 = untangled.client.impl.application.real_send.call(null,networking,inst_34865,inst_34869,inst_34870);
var state_34880__$1 = (function (){var statearr_34886 = state_34880;
(statearr_34886[(8)] = inst_34871);

return statearr_34886;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34880__$1,(14),response_channel);
} else {
if((state_val_34881 === (6))){
var state_34880__$1 = state_34880;
var statearr_34887_34913 = state_34880__$1;
(statearr_34887_34913[(2)] = false);

(statearr_34887_34913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (3))){
var inst_34842 = (state_34880[(7)]);
var inst_34846 = (inst_34842 == null);
var inst_34847 = cljs.core.not.call(null,inst_34846);
var state_34880__$1 = state_34880;
if(inst_34847){
var statearr_34888_34914 = state_34880__$1;
(statearr_34888_34914[(1)] = (5));

} else {
var statearr_34889_34915 = state_34880__$1;
(statearr_34889_34915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (12))){
var inst_34842 = (state_34880[(7)]);
var state_34880__$1 = state_34880;
var statearr_34890_34916 = state_34880__$1;
(statearr_34890_34916[(2)] = inst_34842);

(statearr_34890_34916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (2))){
var inst_34841 = (state_34880[(2)]);
var inst_34842 = inst_34841;
var state_34880__$1 = (function (){var statearr_34891 = state_34880;
(statearr_34891[(7)] = inst_34842);

return statearr_34891;
})();
var statearr_34892_34917 = state_34880__$1;
(statearr_34892_34917[(2)] = null);

(statearr_34892_34917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (11))){
var inst_34842 = (state_34880[(7)]);
var inst_34861 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34842);
var state_34880__$1 = state_34880;
var statearr_34893_34918 = state_34880__$1;
(statearr_34893_34918[(2)] = inst_34861);

(statearr_34893_34918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (9))){
var state_34880__$1 = state_34880;
var statearr_34894_34919 = state_34880__$1;
(statearr_34894_34919[(2)] = false);

(statearr_34894_34919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (5))){
var inst_34842 = (state_34880[(7)]);
var inst_34849 = inst_34842.cljs$lang$protocol_mask$partition0$;
var inst_34850 = (inst_34849 & (64));
var inst_34851 = inst_34842.cljs$core$ISeq$;
var inst_34852 = (inst_34850) || (inst_34851);
var state_34880__$1 = state_34880;
if(cljs.core.truth_(inst_34852)){
var statearr_34895_34920 = state_34880__$1;
(statearr_34895_34920[(1)] = (8));

} else {
var statearr_34896_34921 = state_34880__$1;
(statearr_34896_34921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (14))){
var inst_34873 = (state_34880[(2)]);
var state_34880__$1 = (function (){var statearr_34897 = state_34880;
(statearr_34897[(9)] = inst_34873);

return statearr_34897;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34880__$1,(15),queue);
} else {
if((state_val_34881 === (10))){
var inst_34856 = (state_34880[(2)]);
var state_34880__$1 = state_34880;
var statearr_34898_34922 = state_34880__$1;
(statearr_34898_34922[(2)] = inst_34856);

(statearr_34898_34922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (8))){
var state_34880__$1 = state_34880;
var statearr_34899_34923 = state_34880__$1;
(statearr_34899_34923[(2)] = true);

(statearr_34899_34923[(1)] = (10));


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
});})(c__32598__auto__,map__34790,map__34790__$1,networking,queue,response_channel))
;
return ((function (switch__32583__auto__,c__32598__auto__,map__34790,map__34790__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32584__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32584__auto____0 = (function (){
var statearr_34903 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34903[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32584__auto__);

(statearr_34903[(1)] = (1));

return statearr_34903;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32584__auto____1 = (function (state_34880){
while(true){
var ret_value__32585__auto__ = (function (){try{while(true){
var result__32586__auto__ = switch__32583__auto__.call(null,state_34880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32586__auto__;
}
break;
}
}catch (e34904){if((e34904 instanceof Object)){
var ex__32587__auto__ = e34904;
var statearr_34905_34924 = state_34880;
(statearr_34905_34924[(5)] = ex__32587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34925 = state_34880;
state_34880 = G__34925;
continue;
} else {
return ret_value__32585__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32584__auto__ = function(state_34880){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32584__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32584__auto____1.call(this,state_34880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32584__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32584__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32584__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32584__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32584__auto__;
})()
;})(switch__32583__auto__,c__32598__auto__,map__34790,map__34790__$1,networking,queue,response_channel))
})();
var state__32600__auto__ = (function (){var statearr_34906 = f__32599__auto__.call(null);
(statearr_34906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32598__auto__);

return statearr_34906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32600__auto__);
});})(c__32598__auto__,map__34790,map__34790__$1,networking,queue,response_channel))
);

return c__32598__auto__;
});
/**
 * Configured Om to re-render when locale changes.
 */
untangled.client.impl.application.initialize_internationalization = (function untangled$client$impl$application$initialize_internationalization(reconciler){
cljs.core.remove_watch.call(null,untangled.i18n.core._STAR_current_locale_STAR_,new cljs.core.Keyword(null,"locale","locale",-2115712697));

return cljs.core.add_watch.call(null,untangled.i18n.core._STAR_current_locale_STAR_,new cljs.core.Keyword(null,"locale","locale",-2115712697),(function (k,r,o,n){
if(om.next.mounted_QMARK_.call(null,om.next.app_root.call(null,reconciler))){
return om.next.force_root_render_BANG_.call(null,reconciler);
} else {
return null;
}
}));
});
/**
 * Remove not-found keys from m (non-recursive)
 */
untangled.client.impl.application.sweep_one = (function untangled$client$impl$application$sweep_one(m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.reduce.call(null,(function (acc,p__34928){
var vec__34929 = p__34928;
var k = cljs.core.nth.call(null,vec__34929,(0),null);
var v = cljs.core.nth.call(null,vec__34929,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494),v)){
return acc;
} else {
return cljs.core.assoc.call(null,acc,k,v);
}
}),cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),m);
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
return cljs.core.with_meta.call(null,cljs.core.mapv.call(null,untangled$client$impl$application$sweep_one,m),cljs.core.meta.call(null,m));
} else {
return m;

}
}
});
/**
 * Remove all of the not-found keys (recursively) from v, stopping at marked leaves (if present)
 */
untangled.client.impl.application.sweep = (function untangled$client$impl$application$sweep(m){
if(cljs.core.truth_(untangled.client.impl.om_plumbing.leaf_QMARK_.call(null,m))){
return untangled.client.impl.application.sweep_one.call(null,m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.reduce.call(null,(function (acc,p__34932){
var vec__34933 = p__34932;
var k = cljs.core.nth.call(null,vec__34933,(0),null);
var v = cljs.core.nth.call(null,vec__34933,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494),v)){
return acc;
} else {
return cljs.core.assoc.call(null,acc,k,untangled$client$impl$application$sweep.call(null,v));
}
}),cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),m);
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
return cljs.core.with_meta.call(null,cljs.core.mapv.call(null,untangled$client$impl$application$sweep,m),cljs.core.meta.call(null,m));
} else {
return m;

}
}
}
});
untangled.client.impl.application.sweep_merge = (function untangled$client$impl$application$sweep_merge(target,source){
return cljs.core.reduce.call(null,(function (acc,p__34936){
var vec__34937 = p__34936;
var k = cljs.core.nth.call(null,vec__34937,(0),null);
var v = cljs.core.nth.call(null,vec__34937,(1),null);
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494))){
return cljs.core.dissoc.call(null,acc,k);
} else {
if(cljs.core.truth_(untangled.client.impl.om_plumbing.leaf_QMARK_.call(null,v))){
return cljs.core.assoc.call(null,acc,k,untangled.client.impl.application.sweep_one.call(null,v));
} else {
if((cljs.core.map_QMARK_.call(null,cljs.core.get.call(null,acc,k))) && (cljs.core.map_QMARK_.call(null,v))){
return cljs.core.update.call(null,acc,k,untangled$client$impl$application$sweep_merge,v);
} else {
return cljs.core.assoc.call(null,acc,k,untangled.client.impl.application.sweep.call(null,v));

}
}
}
}),target,source);
});
/**
 * The reconciler's send method calls UntangledApplication/server-send, which itself requires a reconciler with a
 *   send method already defined. This creates a catch-22 / circular dependency on the reconciler and :send field within
 *   the reconciler.
 * 
 *   To resolve the issue, we def an atom pointing to the reconciler that the send method will deref each time it is
 *   called. This allows us to define the reconciler with a send method that, at the time of initialization, has an app
 *   that points to a nil reconciler. By the end of this function, the app's reconciler reference has been properly set.
 */
untangled.client.impl.application.generate_reconciler = (function untangled$client$impl$application$generate_reconciler(p__34938,initial_state,parser,p__34939){
var map__34944 = p__34938;
var map__34944__$1 = ((((!((map__34944 == null)))?((((map__34944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34944):map__34944);
var app__$1 = map__34944__$1;
var queue = cljs.core.get.call(null,map__34944__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var map__34945 = p__34939;
var map__34945__$1 = ((((!((map__34945 == null)))?((((map__34945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34945):map__34945);
var migrate = cljs.core.get.call(null,map__34945__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
var rec_atom = cljs.core.atom.call(null,null);
var state_migrate = (function (){var or__29273__auto__ = migrate;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return untangled.client.impl.om_plumbing.resolve_tempids;
}
})();
var tempid_migrate = ((function (rec_atom,state_migrate,map__34944,map__34944__$1,app__$1,queue,map__34945,map__34945__$1,migrate){
return (function (pure,_,tempids,___$1){
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue,tempids);

return state_migrate.call(null,pure,tempids);
});})(rec_atom,state_migrate,map__34944,map__34944__$1,app__$1,queue,map__34945,map__34945__$1,migrate))
;
var initial_state_with_locale = ((cljs.core._EQ_.call(null,cljs.core.Atom,cljs.core.type.call(null,initial_state)))?(function (){
cljs.core.swap_BANG_.call(null,initial_state,cljs.core.assoc,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US");

return initial_state;
})()
:cljs.core.assoc.call(null,initial_state,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US"));
var config = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state","state",-1988618099),initial_state_with_locale,new cljs.core.Keyword(null,"send","send",-652151114),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__34944,map__34944__$1,app__$1,queue,map__34945,map__34945__$1,migrate){
return (function (tx,cb){
return untangled.client.impl.application.server_send.call(null,cljs.core.assoc.call(null,app__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref.call(null,rec_atom)),tx,cb);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__34944,map__34944__$1,app__$1,queue,map__34945,map__34945__$1,migrate))
,new cljs.core.Keyword(null,"migrate","migrate",-207110743),(function (){var or__29273__auto__ = migrate;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return tempid_migrate;
}
})(),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),true,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),untangled.client.impl.application.sweep_merge,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
var rec = om.next.reconciler.call(null,config);
cljs.core.reset_BANG_.call(null,rec_atom,rec);

return rec;
});
untangled.client.impl.application.initialize_global_error_callback = (function untangled$client$impl$application$initialize_global_error_callback(app__$1){
var cb_atom = cljs.core.get_in.call(null,app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core._EQ_.call(null,cljs.core.Atom,cljs.core.type.call(null,cb_atom))){
return cljs.core.swap_BANG_.call(null,cb_atom,((function (cb_atom){
return (function (p1__34948_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__34948_SHARP_)){
return cljs.core.partial.call(null,p1__34948_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app__$1)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(cb_atom))
);
} else {
return null;
}
});
/**
 * Initialize the untangled Application. Creates network queue, sets up i18n, creates reconciler, mounts it, and returns
 *   the initialized app
 */
untangled.client.impl.application.initialize = (function untangled$client$impl$application$initialize(p__34949,initial_state,root_component,dom_id_or_node,reconciler_options){
var map__34952 = p__34949;
var map__34952__$1 = ((((!((map__34952 == null)))?((((map__34952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34952):map__34952);
var app__$1 = map__34952__$1;
var networking = cljs.core.get.call(null,map__34952__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var started_callback = cljs.core.get.call(null,map__34952__$1,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951));
var queue = cljs.core.async.chan.call(null,(1024));
var rc = cljs.core.async.chan.call(null);
var parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),untangled.client.impl.om_plumbing.read_local,new cljs.core.Keyword(null,"mutate","mutate",1422419038),untangled.client.impl.om_plumbing.write_entry_point], null));
var initial_app = cljs.core.assoc.call(null,app__$1,new cljs.core.Keyword(null,"queue","queue",1455835879),queue,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),rc,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"mounted?","mounted?",712114760),true,new cljs.core.Keyword(null,"networking","networking",586110628),networking);
var rec = untangled.client.impl.application.generate_reconciler.call(null,initial_app,initial_state,parser,reconciler_options);
var completed_app = cljs.core.assoc.call(null,initial_app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),rec);
var node = ((typeof dom_id_or_node === 'string')?goog.dom.getElement(dom_id_or_node):dom_id_or_node);
untangled.client.impl.network.start.call(null,networking,completed_app);

untangled.client.impl.application.initialize_internationalization.call(null,rec);

untangled.client.impl.application.initialize_global_error_callback.call(null,completed_app);

untangled.client.impl.application.start_network_sequential_processing.call(null,completed_app);

om.next.add_root_BANG_.call(null,rec,root_component,node);

if(cljs.core.truth_(started_callback)){
started_callback.call(null,completed_app);
} else {
}

return completed_app;
});

//# sourceMappingURL=application.js.map?rel=1465505599808