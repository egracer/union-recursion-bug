// Compiled by ClojureScript 1.8.51 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('app.mutations');
goog.require('untangled.client.core');
goog.require('untangled.i18n');
goog.require('untangled.client.data_fetch');
goog.require('om.next');
app.core.initial_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"abc",new cljs.core.Keyword(null,"panel","panel",-558637456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"main","main",-2117802661)], null)], null),new cljs.core.Keyword("article","by-id","article/by-id",1950089581),new cljs.core.PersistentArrayMap(null, 1, [(5),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(5),new cljs.core.Keyword("article","title","article/title",1368883941),"An article",new cljs.core.Keyword("article","text","article/text",-1059109611),"This is a great article."], null)], null),new cljs.core.Keyword("comment","by-id","comment/by-id",-672604186),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2),new cljs.core.Keyword("comment","author","comment/author",-1539065775),"Joe",new cljs.core.Keyword("comment","text","comment/text",755508350),"Great!",new cljs.core.Keyword("comment","replies","comment/replies",1950747793),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comment","by-id","comment/by-id",-672604186),(6)], null)], null)], null),(3),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),(3),new cljs.core.Keyword("comment","author","comment/author",-1539065775),"Richard",new cljs.core.Keyword("comment","text","comment/text",755508350),"Awful!",new cljs.core.Keyword("comment","replies","comment/replies",1950747793),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comment","by-id","comment/by-id",-672604186),(4)], null)], null)], null),(4),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(4),new cljs.core.Keyword("comment","author","comment/author",-1539065775),"Joe",new cljs.core.Keyword("comment","text","comment/text",755508350),"Such a downer."], null),(6),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(6),new cljs.core.Keyword("comment","author","comment/author",-1539065775),"Richard",new cljs.core.Keyword("comment","text","comment/text",755508350),"Nah."], null)], null),new cljs.core.Keyword("comment-list","by-id","comment-list/by-id",-1410672745),new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("list","title","list/title",629005901),"Article Comments",new cljs.core.Keyword("list","comments","list/comments",-290319573),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comment","by-id","comment/by-id",-672604186),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comment","by-id","comment/by-id",-672604186),(3)], null)], null)], null)], null),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Choose a view"], null)], null)], null));
if(typeof app.core.app !== 'undefined'){
} else {
app.core.app = cljs.core.atom.call(null,untangled.client.core.new_untangled_client.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),app.core.initial_state,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),(function (p__35244){
var map__35245 = p__35244;
var map__35245__$1 = ((((!((map__35245 == null)))?((((map__35245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35245):map__35245);
var reconciler = cljs.core.get.call(null,map__35245__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return null;
})));
}

//# sourceMappingURL=core.js.map?rel=1465505600286