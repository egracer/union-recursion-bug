// Compiled by ClojureScript 1.8.51 {}
goog.provide('app.mutations');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("view","article","view/article",1622472959,null),(function (p__34252,_,___$1){
var map__34253 = p__34252;
var map__34253__$1 = ((((!((map__34253 == null)))?((((map__34253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34253):map__34253);
var state = cljs.core.get.call(null,map__34253__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34253,map__34253__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"panel","panel",-558637456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("article","by-id","article/by-id",1950089581),(5)], null));
});})(map__34253,map__34253__$1,state))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("view","comments","view/comments",1350905483,null),(function (p__34255,_,___$1){
var map__34256 = p__34255;
var map__34256__$1 = ((((!((map__34256 == null)))?((((map__34256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34256):map__34256);
var state = cljs.core.get.call(null,map__34256__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34256,map__34256__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"panel","panel",-558637456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comment-list","by-id","comment-list/by-id",-1410672745),(1)], null));
});})(map__34256,map__34256__$1,state))
], null);
}));

//# sourceMappingURL=mutations.js.map?rel=1465505599160