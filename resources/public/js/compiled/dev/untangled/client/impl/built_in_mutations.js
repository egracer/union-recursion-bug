// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.impl.built_in_mutations');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.dom');
goog.require('untangled.i18n.core');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled","load","untangled/load",89075339,null),(function (p__34956,_,p__34957){
var map__34958 = p__34956;
var map__34958__$1 = ((((!((map__34958 == null)))?((((map__34958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34958):map__34958);
var state = cljs.core.get.call(null,map__34958__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__34959 = p__34957;
var map__34959__$1 = ((((!((map__34959 == null)))?((((map__34959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34959):map__34959);
var query = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var callback = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var refresh = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var parallel = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var fallback = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var params = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"params","params",710516235));
var field = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var post_mutation = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var root = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var ident = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
if(cljs.core.truth_(callback)){
untangled.client.logging.error.call(null,"Callback no longer supported. Use post-mutation instead.");
} else {
}

if(cljs.core.truth_((function (){var and__29261__auto__ = post_mutation;
if(cljs.core.truth_(and__29261__auto__)){
return !((post_mutation instanceof cljs.core.Symbol));
} else {
return and__29261__auto__;
}
})())){
untangled.client.logging.error.call(null,"post-mutation must be a symbol or nil");
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34958,map__34958__$1,state,map__34959,map__34959__$1,query,callback,refresh,parallel,fallback,params,field,post_mutation,without,root,ident){
return (function (){
return untangled.client.impl.data_fetch.mark_ready.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"ident","ident",-742346),ident,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"without","without",1107036688),without,new cljs.core.Keyword(null,"refresh","refresh",1947415525),refresh,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),parallel,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),post_mutation,new cljs.core.Keyword(null,"fallback","fallback",761637929),fallback);
});})(map__34958,map__34958__$1,state,map__34959,map__34959__$1,query,callback,refresh,parallel,fallback,params,field,post_mutation,without,root,ident))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","change-locale","ui/change-locale",1814019626,null),(function (p__34963,_,p__34964){
var map__34965 = p__34963;
var map__34965__$1 = ((((!((map__34965 == null)))?((((map__34965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34965):map__34965);
var state = cljs.core.get.call(null,map__34965__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__34966 = p__34964;
var map__34966__$1 = ((((!((map__34966 == null)))?((((map__34966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34966):map__34966);
var lang = cljs.core.get.call(null,map__34966__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34965,map__34965__$1,state,map__34966,map__34966__$1,lang){
return (function (){
cljs.core.reset_BANG_.call(null,untangled.i18n.core._STAR_current_locale_STAR_,lang);

return cljs.core.swap_BANG_.call(null,state,((function (map__34965,map__34965__$1,state,map__34966,map__34966__$1,lang){
return (function (p1__34962_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__34962_SHARP_,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),lang),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
});})(map__34965,map__34965__$1,state,map__34966,map__34966__$1,lang))
);
});})(map__34965,map__34965__$1,state,map__34966,map__34966__$1,lang))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),(function (env,_,p__34969){
var map__34970 = p__34969;
var map__34970__$1 = ((((!((map__34970 == null)))?((((map__34970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34970):map__34970);
var params = map__34970__$1;
var action = cljs.core.get.call(null,map__34970__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var execute = cljs.core.get.call(null,map__34970__$1,new cljs.core.Keyword(null,"execute","execute",-129499188));
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34970,map__34970__$1,params,action,execute){
return (function (){
var G__34972 = untangled.client.mutations.mutate.call(null,env,action,cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"execute","execute",-129499188)));
var G__34972__$1 = (((G__34972 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__34972));
if((G__34972__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,G__34972__$1,cljs.core.PersistentVector.EMPTY);
}
});})(map__34970,map__34970__$1,params,action,execute))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null),(function (p__34973,_,params){
var map__34974 = p__34973;
var map__34974__$1 = ((((!((map__34974 == null)))?((((map__34974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34974):map__34974);
var state = cljs.core.get.call(null,map__34974__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__34974__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/set-props requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34974,map__34974__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,ref,((function (map__34974,map__34974__$1,state,ref){
return (function (st){
return cljs.core.merge.call(null,st,params);
});})(map__34974,map__34974__$1,state,ref))
);
});})(map__34974,map__34974__$1,state,ref))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null),(function (p__34976,_,p__34977){
var map__34978 = p__34976;
var map__34978__$1 = ((((!((map__34978 == null)))?((((map__34978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34978):map__34978);
var state = cljs.core.get.call(null,map__34978__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__34978__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__34979 = p__34977;
var map__34979__$1 = ((((!((map__34979 == null)))?((((map__34979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34979):map__34979);
var field = cljs.core.get.call(null,map__34979__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/toggle requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34978,map__34978__$1,state,ref,map__34979,map__34979__$1,field){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,ref,field),cljs.core.not);
});})(map__34978,map__34978__$1,state,ref,map__34979,map__34979__$1,field))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__34982,k,_){
var map__34983 = p__34982;
var map__34983__$1 = ((((!((map__34983 == null)))?((((map__34983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34983):map__34983);
var target = cljs.core.get.call(null,map__34983__$1,new cljs.core.Keyword(null,"target","target",253001721));
if((target == null)){
return untangled.client.logging.error.call(null,untangled.client.logging.value_message.call(null,"Unknown app state mutation. Have you required the file with your mutations?",k));
} else {
return null;
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.post_mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,k,p){
return null;
}));

//# sourceMappingURL=built_in_mutations.js.map?rel=1465505599854