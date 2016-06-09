// Compiled by ClojureScript 1.8.51 {}
goog.provide('app.ui');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.next');
goog.require('untangled.i18n');
goog.require('yahoo.intl_messageformat_with_locales');
goog.require('untangled.client.data_fetch');
if(typeof app.ui.Comment !== 'undefined'){
} else {
/**
 * @constructor
 */
app.ui.Comment = (function app$ui$Comment(){
var this__30744__auto__ = this;
React.Component.apply(this__30744__auto__,arguments);

if(!((this__30744__auto__.initLocalState == null))){
this__30744__auto__.state = this__30744__auto__.initLocalState();
} else {
this__30744__auto__.state = {};
}

return this__30744__auto__;
});

app.ui.Comment.prototype = goog.object.clone(React.Component.prototype);
}

var x35394_35406 = app.ui.Comment.prototype;
x35394_35406.componentWillUpdate = ((function (x35394_35406){
return (function (next_props__30680__auto__,next_state__30681__auto__){
var this__30679__auto__ = this;
if(((!((this__30679__auto__ == null)))?(((false) || (this__30679__auto__.om$next$Ident$))?true:false):false)){
var ident__30683__auto___35407 = om.next.ident.call(null,this__30679__auto__,om.next.props.call(null,this__30679__auto__));
var next_ident__30684__auto___35408 = om.next.ident.call(null,this__30679__auto__,om.next._next_props.call(null,next_props__30680__auto__,this__30679__auto__));
if(cljs.core.not_EQ_.call(null,ident__30683__auto___35407,next_ident__30684__auto___35408)){
var idxr__30685__auto___35409 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__30685__auto___35409 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__30685__auto___35409),((function (idxr__30685__auto___35409,ident__30683__auto___35407,next_ident__30684__auto___35408,this__30679__auto__,x35394_35406){
return (function (indexes__30686__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__30686__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__30683__auto___35407], null),cljs.core.disj,this__30679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__30684__auto___35408], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__30679__auto__);
});})(idxr__30685__auto___35409,ident__30683__auto___35407,next_ident__30684__auto___35408,this__30679__auto__,x35394_35406))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__30679__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__30679__auto__);
});})(x35394_35406))
;

x35394_35406.shouldComponentUpdate = ((function (x35394_35406){
return (function (next_props__30680__auto__,next_state__30681__auto__){
var this__30679__auto__ = this;
var next_children__30682__auto__ = next_props__30680__auto__.children;
var next_props__30680__auto____$1 = goog.object.get(next_props__30680__auto__,"omcljs$value");
var next_props__30680__auto____$2 = (function (){var G__35396 = next_props__30680__auto____$1;
if((next_props__30680__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__35396);
} else {
return G__35396;
}
})();
var or__29273__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__30679__auto__),next_props__30680__auto____$2);
if(or__29273__auto__){
return or__29273__auto__;
} else {
var or__29273__auto____$1 = (function (){var and__29261__auto__ = this__30679__auto__.state;
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__30679__auto__.state,"omcljs$state"),goog.object.get(next_state__30681__auto__,"omcljs$state"));
} else {
return and__29261__auto__;
}
})();
if(cljs.core.truth_(or__29273__auto____$1)){
return or__29273__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__30679__auto__.props.children,next_children__30682__auto__);
}
}
});})(x35394_35406))
;

x35394_35406.componentWillUnmount = ((function (x35394_35406){
return (function (){
var this__30679__auto__ = this;
var r__30690__auto__ = om.next.get_reconciler.call(null,this__30679__auto__);
var cfg__30691__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__30690__auto__);
var st__30692__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__30691__auto__);
var indexer__30689__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__30691__auto__);
if(cljs.core.truth_((function (){var and__29261__auto__ = !((st__30692__auto__ == null));
if(and__29261__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__30692__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__30679__auto__], null));
} else {
return and__29261__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__30692__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__30679__auto__);
} else {
}

if((indexer__30689__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__30689__auto__,this__30679__auto__);
}
});})(x35394_35406))
;

x35394_35406.componentDidUpdate = ((function (x35394_35406){
return (function (prev_props__30687__auto__,prev_state__30688__auto__){
var this__30679__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__30679__auto__);
});})(x35394_35406))
;

x35394_35406.isMounted = ((function (x35394_35406){
return (function (){
var this__30679__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__30679__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35394_35406))
;

x35394_35406.componentWillMount = ((function (x35394_35406){
return (function (){
var this__30679__auto__ = this;
var indexer__30689__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__30689__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__30689__auto__,this__30679__auto__);
}
});})(x35394_35406))
;

x35394_35406.render = ((function (x35394_35406){
return (function (){
var this__30678__auto__ = this;
var this$ = this__30678__auto__;
var _STAR_reconciler_STAR_35397 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35398 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35399 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35400 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35401 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__30678__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__30678__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__30678__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__30678__auto__);

om.next._STAR_parent_STAR_ = this__30678__auto__;

try{var map__35402 = om.next.props.call(null,this$);
var map__35402__$1 = ((((!((map__35402 == null)))?((((map__35402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35402):map__35402);
var author = cljs.core.get.call(null,map__35402__$1,new cljs.core.Keyword("comment","author","comment/author",-1539065775));
var text = cljs.core.get.call(null,map__35402__$1,new cljs.core.Keyword("comment","text","comment/text",755508350));
var replies = cljs.core.get.call(null,map__35402__$1,new cljs.core.Keyword("comment","replies","comment/replies",1950747793));
console.log(replies);

return React.DOM.li(null,om.util.force_children.call(null,React.DOM.h4(null,om.util.force_children.call(null,author))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,text))),om.util.force_children.call(null,React.DOM.ul(null,om.util.force_children.call(null,cljs.core.map.call(null,app.ui.ui_comment,replies)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35401;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35400;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35399;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35398;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35397;
}});})(x35394_35406))
;


app.ui.Comment.prototype.constructor = app.ui.Comment;

app.ui.Comment.prototype.constructor.displayName = "app.ui/Comment";

app.ui.Comment.prototype.om$isComponent = true;

var x35404_35410 = app.ui.Comment;
x35404_35410.om$next$IQuery$ = true;

x35404_35410.om$next$IQuery$query$arity$1 = ((function (x35404_35410){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("comment","author","comment/author",-1539065775),new cljs.core.Keyword("comment","text","comment/text",755508350)], null);
});})(x35404_35410))
;

x35404_35410.om$next$Ident$ = true;

x35404_35410.om$next$Ident$ident$arity$2 = ((function (x35404_35410){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comment","by-id","comment/by-id",-672604186),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x35404_35410))
;


var x35405_35411 = app.ui.Comment.prototype;
x35405_35411.om$next$IQuery$ = true;

x35405_35411.om$next$IQuery$query$arity$1 = ((function (x35405_35411){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("comment","author","comment/author",-1539065775),new cljs.core.Keyword("comment","text","comment/text",755508350)], null);
});})(x35405_35411))
;

x35405_35411.om$next$Ident$ = true;

x35405_35411.om$next$Ident$ident$arity$2 = ((function (x35405_35411){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comment","by-id","comment/by-id",-672604186),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x35405_35411))
;


app.ui.Comment.cljs$lang$type = true;

app.ui.Comment.cljs$lang$ctorStr = "app.ui/Comment";

app.ui.Comment.cljs$lang$ctorPrWriter = (function (this__30746__auto__,writer__30747__auto__,opt__30748__auto__){
return cljs.core._write.call(null,writer__30747__auto__,"app.ui/Comment");
});
app.ui.ui_comment = om.next.factory.call(null,app.ui.Comment,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
if(typeof app.ui.CommentList !== 'undefined'){
} else {
/**
 * @constructor
 */
app.ui.CommentList = (function app$ui$CommentList(){
var this__30744__auto__ = this;
React.Component.apply(this__30744__auto__,arguments);

if(!((this__30744__auto__.initLocalState == null))){
this__30744__auto__.state = this__30744__auto__.initLocalState();
} else {
this__30744__auto__.state = {};
}

return this__30744__auto__;
});

app.ui.CommentList.prototype = goog.object.clone(React.Component.prototype);
}

var x35416_35428 = app.ui.CommentList.prototype;
x35416_35428.componentWillUpdate = ((function (x35416_35428){
return (function (next_props__30680__auto__,next_state__30681__auto__){
var this__30679__auto__ = this;
if(((!((this__30679__auto__ == null)))?(((false) || (this__30679__auto__.om$next$Ident$))?true:false):false)){
var ident__30683__auto___35429 = om.next.ident.call(null,this__30679__auto__,om.next.props.call(null,this__30679__auto__));
var next_ident__30684__auto___35430 = om.next.ident.call(null,this__30679__auto__,om.next._next_props.call(null,next_props__30680__auto__,this__30679__auto__));
if(cljs.core.not_EQ_.call(null,ident__30683__auto___35429,next_ident__30684__auto___35430)){
var idxr__30685__auto___35431 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__30685__auto___35431 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__30685__auto___35431),((function (idxr__30685__auto___35431,ident__30683__auto___35429,next_ident__30684__auto___35430,this__30679__auto__,x35416_35428){
return (function (indexes__30686__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__30686__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__30683__auto___35429], null),cljs.core.disj,this__30679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__30684__auto___35430], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__30679__auto__);
});})(idxr__30685__auto___35431,ident__30683__auto___35429,next_ident__30684__auto___35430,this__30679__auto__,x35416_35428))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__30679__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__30679__auto__);
});})(x35416_35428))
;

x35416_35428.shouldComponentUpdate = ((function (x35416_35428){
return (function (next_props__30680__auto__,next_state__30681__auto__){
var this__30679__auto__ = this;
var next_children__30682__auto__ = next_props__30680__auto__.children;
var next_props__30680__auto____$1 = goog.object.get(next_props__30680__auto__,"omcljs$value");
var next_props__30680__auto____$2 = (function (){var G__35418 = next_props__30680__auto____$1;
if((next_props__30680__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__35418);
} else {
return G__35418;
}
})();
var or__29273__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__30679__auto__),next_props__30680__auto____$2);
if(or__29273__auto__){
return or__29273__auto__;
} else {
var or__29273__auto____$1 = (function (){var and__29261__auto__ = this__30679__auto__.state;
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__30679__auto__.state,"omcljs$state"),goog.object.get(next_state__30681__auto__,"omcljs$state"));
} else {
return and__29261__auto__;
}
})();
if(cljs.core.truth_(or__29273__auto____$1)){
return or__29273__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__30679__auto__.props.children,next_children__30682__auto__);
}
}
});})(x35416_35428))
;

x35416_35428.componentWillUnmount = ((function (x35416_35428){
return (function (){
var this__30679__auto__ = this;
var r__30690__auto__ = om.next.get_reconciler.call(null,this__30679__auto__);
var cfg__30691__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__30690__auto__);
var st__30692__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__30691__auto__);
var indexer__30689__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__30691__auto__);
if(cljs.core.truth_((function (){var and__29261__auto__ = !((st__30692__auto__ == null));
if(and__29261__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__30692__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__30679__auto__], null));
} else {
return and__29261__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__30692__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__30679__auto__);
} else {
}

if((indexer__30689__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__30689__auto__,this__30679__auto__);
}
});})(x35416_35428))
;

x35416_35428.componentDidUpdate = ((function (x35416_35428){
return (function (prev_props__30687__auto__,prev_state__30688__auto__){
var this__30679__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__30679__auto__);
});})(x35416_35428))
;

x35416_35428.isMounted = ((function (x35416_35428){
return (function (){
var this__30679__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__30679__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35416_35428))
;

x35416_35428.componentWillMount = ((function (x35416_35428){
return (function (){
var this__30679__auto__ = this;
var indexer__30689__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__30689__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__30689__auto__,this__30679__auto__);
}
});})(x35416_35428))
;

x35416_35428.render = ((function (x35416_35428){
return (function (){
var this__30678__auto__ = this;
var this$ = this__30678__auto__;
var _STAR_reconciler_STAR_35419 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35420 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35421 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35422 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35423 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__30678__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__30678__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__30678__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__30678__auto__);

om.next._STAR_parent_STAR_ = this__30678__auto__;

try{var map__35424 = om.next.props.call(null,this$);
var map__35424__$1 = ((((!((map__35424 == null)))?((((map__35424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35424):map__35424);
var title = cljs.core.get.call(null,map__35424__$1,new cljs.core.Keyword("list","title","list/title",629005901));
var comments = cljs.core.get.call(null,map__35424__$1,new cljs.core.Keyword("list","comments","list/comments",-290319573));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,React.DOM.ul(null,om.util.force_children.call(null,cljs.core.map.call(null,app.ui.ui_comment,comments)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35423;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35422;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35421;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35420;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35419;
}});})(x35416_35428))
;


app.ui.CommentList.prototype.constructor = app.ui.CommentList;

app.ui.CommentList.prototype.constructor.displayName = "app.ui/CommentList";

app.ui.CommentList.prototype.om$isComponent = true;

var x35426_35432 = app.ui.CommentList;
x35426_35432.om$next$IQuery$ = true;

x35426_35432.om$next$IQuery$query$arity$1 = ((function (x35426_35432){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("list","title","list/title",629005901),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","comments","list/comments",-290319573),om.next.get_query.call(null,app.ui.Comment)], null)], null);
});})(x35426_35432))
;

x35426_35432.om$next$Ident$ = true;

x35426_35432.om$next$Ident$ident$arity$2 = ((function (x35426_35432){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comment-list","by-id","comment-list/by-id",-1410672745),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x35426_35432))
;


var x35427_35433 = app.ui.CommentList.prototype;
x35427_35433.om$next$IQuery$ = true;

x35427_35433.om$next$IQuery$query$arity$1 = ((function (x35427_35433){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("list","title","list/title",629005901),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","comments","list/comments",-290319573),om.next.get_query.call(null,app.ui.Comment)], null)], null);
});})(x35427_35433))
;

x35427_35433.om$next$Ident$ = true;

x35427_35433.om$next$Ident$ident$arity$2 = ((function (x35427_35433){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comment-list","by-id","comment-list/by-id",-1410672745),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x35427_35433))
;


app.ui.CommentList.cljs$lang$type = true;

app.ui.CommentList.cljs$lang$ctorStr = "app.ui/CommentList";

app.ui.CommentList.cljs$lang$ctorPrWriter = (function (this__30746__auto__,writer__30747__auto__,opt__30748__auto__){
return cljs.core._write.call(null,writer__30747__auto__,"app.ui/CommentList");
});
app.ui.ui_comment_list = om.next.factory.call(null,app.ui.CommentList);
if(typeof app.ui.Article !== 'undefined'){
} else {
/**
 * @constructor
 */
app.ui.Article = (function app$ui$Article(){
var this__30744__auto__ = this;
React.Component.apply(this__30744__auto__,arguments);

if(!((this__30744__auto__.initLocalState == null))){
this__30744__auto__.state = this__30744__auto__.initLocalState();
} else {
this__30744__auto__.state = {};
}

return this__30744__auto__;
});

app.ui.Article.prototype = goog.object.clone(React.Component.prototype);
}

var x35438_35450 = app.ui.Article.prototype;
x35438_35450.componentWillUpdate = ((function (x35438_35450){
return (function (next_props__30680__auto__,next_state__30681__auto__){
var this__30679__auto__ = this;
if(((!((this__30679__auto__ == null)))?(((false) || (this__30679__auto__.om$next$Ident$))?true:false):false)){
var ident__30683__auto___35451 = om.next.ident.call(null,this__30679__auto__,om.next.props.call(null,this__30679__auto__));
var next_ident__30684__auto___35452 = om.next.ident.call(null,this__30679__auto__,om.next._next_props.call(null,next_props__30680__auto__,this__30679__auto__));
if(cljs.core.not_EQ_.call(null,ident__30683__auto___35451,next_ident__30684__auto___35452)){
var idxr__30685__auto___35453 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__30685__auto___35453 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__30685__auto___35453),((function (idxr__30685__auto___35453,ident__30683__auto___35451,next_ident__30684__auto___35452,this__30679__auto__,x35438_35450){
return (function (indexes__30686__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__30686__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__30683__auto___35451], null),cljs.core.disj,this__30679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__30684__auto___35452], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__30679__auto__);
});})(idxr__30685__auto___35453,ident__30683__auto___35451,next_ident__30684__auto___35452,this__30679__auto__,x35438_35450))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__30679__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__30679__auto__);
});})(x35438_35450))
;

x35438_35450.shouldComponentUpdate = ((function (x35438_35450){
return (function (next_props__30680__auto__,next_state__30681__auto__){
var this__30679__auto__ = this;
var next_children__30682__auto__ = next_props__30680__auto__.children;
var next_props__30680__auto____$1 = goog.object.get(next_props__30680__auto__,"omcljs$value");
var next_props__30680__auto____$2 = (function (){var G__35440 = next_props__30680__auto____$1;
if((next_props__30680__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__35440);
} else {
return G__35440;
}
})();
var or__29273__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__30679__auto__),next_props__30680__auto____$2);
if(or__29273__auto__){
return or__29273__auto__;
} else {
var or__29273__auto____$1 = (function (){var and__29261__auto__ = this__30679__auto__.state;
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__30679__auto__.state,"omcljs$state"),goog.object.get(next_state__30681__auto__,"omcljs$state"));
} else {
return and__29261__auto__;
}
})();
if(cljs.core.truth_(or__29273__auto____$1)){
return or__29273__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__30679__auto__.props.children,next_children__30682__auto__);
}
}
});})(x35438_35450))
;

x35438_35450.componentWillUnmount = ((function (x35438_35450){
return (function (){
var this__30679__auto__ = this;
var r__30690__auto__ = om.next.get_reconciler.call(null,this__30679__auto__);
var cfg__30691__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__30690__auto__);
var st__30692__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__30691__auto__);
var indexer__30689__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__30691__auto__);
if(cljs.core.truth_((function (){var and__29261__auto__ = !((st__30692__auto__ == null));
if(and__29261__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__30692__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__30679__auto__], null));
} else {
return and__29261__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__30692__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__30679__auto__);
} else {
}

if((indexer__30689__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__30689__auto__,this__30679__auto__);
}
});})(x35438_35450))
;

x35438_35450.componentDidUpdate = ((function (x35438_35450){
return (function (prev_props__30687__auto__,prev_state__30688__auto__){
var this__30679__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__30679__auto__);
});})(x35438_35450))
;

x35438_35450.isMounted = ((function (x35438_35450){
return (function (){
var this__30679__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__30679__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35438_35450))
;

x35438_35450.componentWillMount = ((function (x35438_35450){
return (function (){
var this__30679__auto__ = this;
var indexer__30689__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__30689__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__30689__auto__,this__30679__auto__);
}
});})(x35438_35450))
;

x35438_35450.render = ((function (x35438_35450){
return (function (){
var this__30678__auto__ = this;
var this$ = this__30678__auto__;
var _STAR_reconciler_STAR_35441 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35442 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35443 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35444 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35445 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__30678__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__30678__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__30678__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__30678__auto__);

om.next._STAR_parent_STAR_ = this__30678__auto__;

try{var map__35446 = om.next.props.call(null,this$);
var map__35446__$1 = ((((!((map__35446 == null)))?((((map__35446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35446):map__35446);
var title = cljs.core.get.call(null,map__35446__$1,new cljs.core.Keyword("article","title","article/title",1368883941));
var text = cljs.core.get.call(null,map__35446__$1,new cljs.core.Keyword("article","text","article/text",-1059109611));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,text))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35445;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35444;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35443;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35442;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35441;
}});})(x35438_35450))
;


app.ui.Article.prototype.constructor = app.ui.Article;

app.ui.Article.prototype.constructor.displayName = "app.ui/Article";

app.ui.Article.prototype.om$isComponent = true;

var x35448_35454 = app.ui.Article;
x35448_35454.om$next$IQuery$ = true;

x35448_35454.om$next$IQuery$query$arity$1 = ((function (x35448_35454){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("article","title","article/title",1368883941),new cljs.core.Keyword("article","text","article/text",-1059109611)], null);
});})(x35448_35454))
;

x35448_35454.om$next$Ident$ = true;

x35448_35454.om$next$Ident$ident$arity$2 = ((function (x35448_35454){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("article","by-id","article/by-id",1950089581),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x35448_35454))
;


var x35449_35455 = app.ui.Article.prototype;
x35449_35455.om$next$IQuery$ = true;

x35449_35455.om$next$IQuery$query$arity$1 = ((function (x35449_35455){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("article","title","article/title",1368883941),new cljs.core.Keyword("article","text","article/text",-1059109611)], null);
});})(x35449_35455))
;

x35449_35455.om$next$Ident$ = true;

x35449_35455.om$next$Ident$ident$arity$2 = ((function (x35449_35455){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("article","by-id","article/by-id",1950089581),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x35449_35455))
;


app.ui.Article.cljs$lang$type = true;

app.ui.Article.cljs$lang$ctorStr = "app.ui/Article";

app.ui.Article.cljs$lang$ctorPrWriter = (function (this__30746__auto__,writer__30747__auto__,opt__30748__auto__){
return cljs.core._write.call(null,writer__30747__auto__,"app.ui/Article");
});
app.ui.ui_article = om.next.factory.call(null,app.ui.Article);
if(typeof app.ui.Subpanel !== 'undefined'){
} else {
/**
 * @constructor
 */
app.ui.Subpanel = (function app$ui$Subpanel(){
var this__30744__auto__ = this;
React.Component.apply(this__30744__auto__,arguments);

if(!((this__30744__auto__.initLocalState == null))){
this__30744__auto__.state = this__30744__auto__.initLocalState();
} else {
this__30744__auto__.state = {};
}

return this__30744__auto__;
});

app.ui.Subpanel.prototype = goog.object.clone(React.Component.prototype);
}

var x35460_35487 = app.ui.Subpanel.prototype;
x35460_35487.componentWillUpdate = ((function (x35460_35487){
return (function (next_props__30680__auto__,next_state__30681__auto__){
var this__30679__auto__ = this;
if(((!((this__30679__auto__ == null)))?(((false) || (this__30679__auto__.om$next$Ident$))?true:false):false)){
var ident__30683__auto___35488 = om.next.ident.call(null,this__30679__auto__,om.next.props.call(null,this__30679__auto__));
var next_ident__30684__auto___35489 = om.next.ident.call(null,this__30679__auto__,om.next._next_props.call(null,next_props__30680__auto__,this__30679__auto__));
if(cljs.core.not_EQ_.call(null,ident__30683__auto___35488,next_ident__30684__auto___35489)){
var idxr__30685__auto___35490 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__30685__auto___35490 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__30685__auto___35490),((function (idxr__30685__auto___35490,ident__30683__auto___35488,next_ident__30684__auto___35489,this__30679__auto__,x35460_35487){
return (function (indexes__30686__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__30686__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__30683__auto___35488], null),cljs.core.disj,this__30679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__30684__auto___35489], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__30679__auto__);
});})(idxr__30685__auto___35490,ident__30683__auto___35488,next_ident__30684__auto___35489,this__30679__auto__,x35460_35487))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__30679__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__30679__auto__);
});})(x35460_35487))
;

x35460_35487.shouldComponentUpdate = ((function (x35460_35487){
return (function (next_props__30680__auto__,next_state__30681__auto__){
var this__30679__auto__ = this;
var next_children__30682__auto__ = next_props__30680__auto__.children;
var next_props__30680__auto____$1 = goog.object.get(next_props__30680__auto__,"omcljs$value");
var next_props__30680__auto____$2 = (function (){var G__35462 = next_props__30680__auto____$1;
if((next_props__30680__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__35462);
} else {
return G__35462;
}
})();
var or__29273__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__30679__auto__),next_props__30680__auto____$2);
if(or__29273__auto__){
return or__29273__auto__;
} else {
var or__29273__auto____$1 = (function (){var and__29261__auto__ = this__30679__auto__.state;
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__30679__auto__.state,"omcljs$state"),goog.object.get(next_state__30681__auto__,"omcljs$state"));
} else {
return and__29261__auto__;
}
})();
if(cljs.core.truth_(or__29273__auto____$1)){
return or__29273__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__30679__auto__.props.children,next_children__30682__auto__);
}
}
});})(x35460_35487))
;

x35460_35487.componentWillUnmount = ((function (x35460_35487){
return (function (){
var this__30679__auto__ = this;
var r__30690__auto__ = om.next.get_reconciler.call(null,this__30679__auto__);
var cfg__30691__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__30690__auto__);
var st__30692__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__30691__auto__);
var indexer__30689__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__30691__auto__);
if(cljs.core.truth_((function (){var and__29261__auto__ = !((st__30692__auto__ == null));
if(and__29261__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__30692__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__30679__auto__], null));
} else {
return and__29261__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__30692__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__30679__auto__);
} else {
}

if((indexer__30689__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__30689__auto__,this__30679__auto__);
}
});})(x35460_35487))
;

x35460_35487.componentDidUpdate = ((function (x35460_35487){
return (function (prev_props__30687__auto__,prev_state__30688__auto__){
var this__30679__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__30679__auto__);
});})(x35460_35487))
;

x35460_35487.isMounted = ((function (x35460_35487){
return (function (){
var this__30679__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__30679__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35460_35487))
;

x35460_35487.componentWillMount = ((function (x35460_35487){
return (function (){
var this__30679__auto__ = this;
var indexer__30689__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__30689__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__30689__auto__,this__30679__auto__);
}
});})(x35460_35487))
;

x35460_35487.render = ((function (x35460_35487){
return (function (){
var this__30678__auto__ = this;
var this$ = this__30678__auto__;
var _STAR_reconciler_STAR_35463 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35464 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35465 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35466 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35467 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__30678__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__30678__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__30678__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__30678__auto__);

om.next._STAR_parent_STAR_ = this__30678__auto__;

try{var map__35468 = om.next.props.call(null,this$);
var map__35468__$1 = ((((!((map__35468 == null)))?((((map__35468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35468):map__35468);
var props = map__35468__$1;
var id = cljs.core.get.call(null,map__35468__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return React.DOM.div(null,om.util.force_children.call(null,(function (){var pred__35470 = ((function (map__35468,map__35468__$1,props,id,_STAR_reconciler_STAR_35463,_STAR_depth_STAR_35464,_STAR_shared_STAR_35465,_STAR_instrument_STAR_35466,_STAR_parent_STAR_35467,this$,this__30678__auto__,x35460_35487){
return (function (key,data){
return cljs.core.contains_QMARK_.call(null,data,key);
});})(map__35468,map__35468__$1,props,id,_STAR_reconciler_STAR_35463,_STAR_depth_STAR_35464,_STAR_shared_STAR_35465,_STAR_instrument_STAR_35466,_STAR_parent_STAR_35467,this$,this__30678__auto__,x35460_35487))
;
var expr__35471 = props;
if(cljs.core.truth_(pred__35470.call(null,new cljs.core.Keyword("article","title","article/title",1368883941),expr__35471))){
return app.ui.ui_article.call(null,props);
} else {
if(cljs.core.truth_(pred__35470.call(null,new cljs.core.Keyword("list","title","list/title",629005901),expr__35471))){
return app.ui.ui_comment_list.call(null,props);
} else {
return "Choose a view";
}
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35467;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35466;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35465;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35464;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35463;
}});})(x35460_35487))
;


app.ui.Subpanel.prototype.constructor = app.ui.Subpanel;

app.ui.Subpanel.prototype.constructor.displayName = "app.ui/Subpanel";

app.ui.Subpanel.prototype.om$isComponent = true;

var x35473_35491 = app.ui.Subpanel;
x35473_35491.om$next$IQuery$ = true;

x35473_35491.om$next$IQuery$query$arity$1 = ((function (x35473_35491){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("article","by-id","article/by-id",1950089581),om.next.get_query.call(null,app.ui.Article),new cljs.core.Keyword("comment-list","by-id","comment-list/by-id",-1410672745),om.next.get_query.call(null,app.ui.CommentList)], null);
});})(x35473_35491))
;

x35473_35491.om$next$Ident$ = true;

x35473_35491.om$next$Ident$ident$arity$2 = ((function (x35473_35491){
return (function (_,p__35474){
var map__35475 = p__35474;
var map__35475__$1 = ((((!((map__35475 == null)))?((((map__35475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35475):map__35475);
var props = map__35475__$1;
var id = cljs.core.get.call(null,map__35475__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var ___$1 = this;
var pred__35477 = ((function (___$1,map__35475,map__35475__$1,props,id,x35473_35491){
return (function (key,data){
return cljs.core.contains_QMARK_.call(null,data,key);
});})(___$1,map__35475,map__35475__$1,props,id,x35473_35491))
;
var expr__35478 = props;
if(cljs.core.truth_(pred__35477.call(null,new cljs.core.Keyword("article","title","article/title",1368883941),expr__35478))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("article","by-id","article/by-id",1950089581),id], null);
} else {
if(cljs.core.truth_(pred__35477.call(null,new cljs.core.Keyword("list","title","list/title",629005901),expr__35478))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comment-list","by-id","comment-list/by-id",-1410672745),id], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"main","main",-2117802661)], null);
}
}
});})(x35473_35491))
;


var x35480_35492 = app.ui.Subpanel.prototype;
x35480_35492.om$next$IQuery$ = true;

x35480_35492.om$next$IQuery$query$arity$1 = ((function (x35480_35492){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("article","by-id","article/by-id",1950089581),om.next.get_query.call(null,app.ui.Article),new cljs.core.Keyword("comment-list","by-id","comment-list/by-id",-1410672745),om.next.get_query.call(null,app.ui.CommentList)], null);
});})(x35480_35492))
;

x35480_35492.om$next$Ident$ = true;

x35480_35492.om$next$Ident$ident$arity$2 = ((function (x35480_35492){
return (function (_,p__35481){
var map__35482 = p__35481;
var map__35482__$1 = ((((!((map__35482 == null)))?((((map__35482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35482):map__35482);
var props = map__35482__$1;
var id = cljs.core.get.call(null,map__35482__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var ___$1 = this;
var pred__35484 = ((function (___$1,map__35482,map__35482__$1,props,id,x35480_35492){
return (function (key,data){
return cljs.core.contains_QMARK_.call(null,data,key);
});})(___$1,map__35482,map__35482__$1,props,id,x35480_35492))
;
var expr__35485 = props;
if(cljs.core.truth_(pred__35484.call(null,new cljs.core.Keyword("article","title","article/title",1368883941),expr__35485))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("article","by-id","article/by-id",1950089581),id], null);
} else {
if(cljs.core.truth_(pred__35484.call(null,new cljs.core.Keyword("list","title","list/title",629005901),expr__35485))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comment-list","by-id","comment-list/by-id",-1410672745),id], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"main","main",-2117802661)], null);
}
}
});})(x35480_35492))
;


app.ui.Subpanel.cljs$lang$type = true;

app.ui.Subpanel.cljs$lang$ctorStr = "app.ui/Subpanel";

app.ui.Subpanel.cljs$lang$ctorPrWriter = (function (this__30746__auto__,writer__30747__auto__,opt__30748__auto__){
return cljs.core._write.call(null,writer__30747__auto__,"app.ui/Subpanel");
});
app.ui.ui_report_subpanel = om.next.factory.call(null,app.ui.Subpanel);
if(typeof app.ui.Root !== 'undefined'){
} else {
/**
 * @constructor
 */
app.ui.Root = (function app$ui$Root(){
var this__30744__auto__ = this;
React.Component.apply(this__30744__auto__,arguments);

if(!((this__30744__auto__.initLocalState == null))){
this__30744__auto__.state = this__30744__auto__.initLocalState();
} else {
this__30744__auto__.state = {};
}

return this__30744__auto__;
});

app.ui.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x35497_35509 = app.ui.Root.prototype;
x35497_35509.componentWillUpdate = ((function (x35497_35509){
return (function (next_props__30680__auto__,next_state__30681__auto__){
var this__30679__auto__ = this;
if(((!((this__30679__auto__ == null)))?(((false) || (this__30679__auto__.om$next$Ident$))?true:false):false)){
var ident__30683__auto___35510 = om.next.ident.call(null,this__30679__auto__,om.next.props.call(null,this__30679__auto__));
var next_ident__30684__auto___35511 = om.next.ident.call(null,this__30679__auto__,om.next._next_props.call(null,next_props__30680__auto__,this__30679__auto__));
if(cljs.core.not_EQ_.call(null,ident__30683__auto___35510,next_ident__30684__auto___35511)){
var idxr__30685__auto___35512 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__30685__auto___35512 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__30685__auto___35512),((function (idxr__30685__auto___35512,ident__30683__auto___35510,next_ident__30684__auto___35511,this__30679__auto__,x35497_35509){
return (function (indexes__30686__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__30686__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__30683__auto___35510], null),cljs.core.disj,this__30679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__30684__auto___35511], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__30679__auto__);
});})(idxr__30685__auto___35512,ident__30683__auto___35510,next_ident__30684__auto___35511,this__30679__auto__,x35497_35509))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__30679__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__30679__auto__);
});})(x35497_35509))
;

x35497_35509.shouldComponentUpdate = ((function (x35497_35509){
return (function (next_props__30680__auto__,next_state__30681__auto__){
var this__30679__auto__ = this;
var next_children__30682__auto__ = next_props__30680__auto__.children;
var next_props__30680__auto____$1 = goog.object.get(next_props__30680__auto__,"omcljs$value");
var next_props__30680__auto____$2 = (function (){var G__35499 = next_props__30680__auto____$1;
if((next_props__30680__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__35499);
} else {
return G__35499;
}
})();
var or__29273__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__30679__auto__),next_props__30680__auto____$2);
if(or__29273__auto__){
return or__29273__auto__;
} else {
var or__29273__auto____$1 = (function (){var and__29261__auto__ = this__30679__auto__.state;
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__30679__auto__.state,"omcljs$state"),goog.object.get(next_state__30681__auto__,"omcljs$state"));
} else {
return and__29261__auto__;
}
})();
if(cljs.core.truth_(or__29273__auto____$1)){
return or__29273__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__30679__auto__.props.children,next_children__30682__auto__);
}
}
});})(x35497_35509))
;

x35497_35509.componentWillUnmount = ((function (x35497_35509){
return (function (){
var this__30679__auto__ = this;
var r__30690__auto__ = om.next.get_reconciler.call(null,this__30679__auto__);
var cfg__30691__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__30690__auto__);
var st__30692__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__30691__auto__);
var indexer__30689__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__30691__auto__);
if(cljs.core.truth_((function (){var and__29261__auto__ = !((st__30692__auto__ == null));
if(and__29261__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__30692__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__30679__auto__], null));
} else {
return and__29261__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__30692__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__30679__auto__);
} else {
}

if((indexer__30689__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__30689__auto__,this__30679__auto__);
}
});})(x35497_35509))
;

x35497_35509.componentDidUpdate = ((function (x35497_35509){
return (function (prev_props__30687__auto__,prev_state__30688__auto__){
var this__30679__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__30679__auto__);
});})(x35497_35509))
;

x35497_35509.isMounted = ((function (x35497_35509){
return (function (){
var this__30679__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__30679__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35497_35509))
;

x35497_35509.componentWillMount = ((function (x35497_35509){
return (function (){
var this__30679__auto__ = this;
var indexer__30689__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__30689__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__30689__auto__,this__30679__auto__);
}
});})(x35497_35509))
;

x35497_35509.render = ((function (x35497_35509){
return (function (){
var this__30678__auto__ = this;
var this$ = this__30678__auto__;
var _STAR_reconciler_STAR_35500 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35501 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35502 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35503 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35504 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__30678__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__30678__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__30678__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__30678__auto__);

om.next._STAR_parent_STAR_ = this__30678__auto__;

try{var map__35505 = om.next.props.call(null,this$);
var map__35505__$1 = ((((!((map__35505 == null)))?((((map__35505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35505):map__35505);
var react_key = cljs.core.get.call(null,map__35505__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"ROOT");
var panel = cljs.core.get.call(null,map__35505__$1,new cljs.core.Keyword(null,"panel","panel",-558637456));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__35505,map__35505__$1,react_key,panel,_STAR_reconciler_STAR_35500,_STAR_depth_STAR_35501,_STAR_shared_STAR_35502,_STAR_instrument_STAR_35503,_STAR_parent_STAR_35504,this$,this__30678__auto__,x35497_35509){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("view","article","view/article",1622472959,null))], null));
});})(map__35505,map__35505__$1,react_key,panel,_STAR_reconciler_STAR_35500,_STAR_depth_STAR_35501,_STAR_shared_STAR_35502,_STAR_instrument_STAR_35503,_STAR_parent_STAR_35504,this$,this__30678__auto__,x35497_35509))
},om.util.force_children.call(null,"View Article"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__35505,map__35505__$1,react_key,panel,_STAR_reconciler_STAR_35500,_STAR_depth_STAR_35501,_STAR_shared_STAR_35502,_STAR_instrument_STAR_35503,_STAR_parent_STAR_35504,this$,this__30678__auto__,x35497_35509){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("view","comments","view/comments",1350905483,null))], null));
});})(map__35505,map__35505__$1,react_key,panel,_STAR_reconciler_STAR_35500,_STAR_depth_STAR_35501,_STAR_shared_STAR_35502,_STAR_instrument_STAR_35503,_STAR_parent_STAR_35504,this$,this__30678__auto__,x35497_35509))
},om.util.force_children.call(null,"View Comments"))),om.util.force_children.call(null,React.DOM.div({"key": react_key},om.util.force_children.call(null,app.ui.ui_report_subpanel.call(null,panel)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35504;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35503;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35502;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35501;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35500;
}});})(x35497_35509))
;


app.ui.Root.prototype.constructor = app.ui.Root;

app.ui.Root.prototype.constructor.displayName = "app.ui/Root";

app.ui.Root.prototype.om$isComponent = true;

var x35507_35513 = app.ui.Root;
x35507_35513.om$next$IQuery$ = true;

x35507_35513.om$next$IQuery$query$arity$1 = ((function (x35507_35513){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel","panel",-558637456),om.next.get_query.call(null,app.ui.Subpanel)], null)], null);
});})(x35507_35513))
;


var x35508_35514 = app.ui.Root.prototype;
x35508_35514.om$next$IQuery$ = true;

x35508_35514.om$next$IQuery$query$arity$1 = ((function (x35508_35514){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel","panel",-558637456),om.next.get_query.call(null,app.ui.Subpanel)], null)], null);
});})(x35508_35514))
;


app.ui.Root.cljs$lang$type = true;

app.ui.Root.cljs$lang$ctorStr = "app.ui/Root";

app.ui.Root.cljs$lang$ctorPrWriter = (function (this__30746__auto__,writer__30747__auto__,opt__30748__auto__){
return cljs.core._write.call(null,writer__30747__auto__,"app.ui/Root");
});

//# sourceMappingURL=ui.js.map?rel=1465505618025