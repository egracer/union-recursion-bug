// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__30350__auto__ = [];
var len__30343__auto___40919 = arguments.length;
var i__30344__auto___40920 = (0);
while(true){
if((i__30344__auto___40920 < len__30343__auto___40919)){
args__30350__auto__.push((arguments[i__30344__auto___40920]));

var G__40921 = (i__30344__auto___40920 + (1));
i__30344__auto___40920 = G__40921;
continue;
} else {
}
break;
}

var argseq__30351__auto__ = ((((2) < args__30350__auto__.length))?(new cljs.core.IndexedSeq(args__30350__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30351__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__40911_40922 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__40912_40923 = null;
var count__40913_40924 = (0);
var i__40914_40925 = (0);
while(true){
if((i__40914_40925 < count__40913_40924)){
var k_40926 = cljs.core._nth.call(null,chunk__40912_40923,i__40914_40925);
e.setAttribute(cljs.core.name.call(null,k_40926),cljs.core.get.call(null,attrs,k_40926));

var G__40927 = seq__40911_40922;
var G__40928 = chunk__40912_40923;
var G__40929 = count__40913_40924;
var G__40930 = (i__40914_40925 + (1));
seq__40911_40922 = G__40927;
chunk__40912_40923 = G__40928;
count__40913_40924 = G__40929;
i__40914_40925 = G__40930;
continue;
} else {
var temp__4657__auto___40931 = cljs.core.seq.call(null,seq__40911_40922);
if(temp__4657__auto___40931){
var seq__40911_40932__$1 = temp__4657__auto___40931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40911_40932__$1)){
var c__30084__auto___40933 = cljs.core.chunk_first.call(null,seq__40911_40932__$1);
var G__40934 = cljs.core.chunk_rest.call(null,seq__40911_40932__$1);
var G__40935 = c__30084__auto___40933;
var G__40936 = cljs.core.count.call(null,c__30084__auto___40933);
var G__40937 = (0);
seq__40911_40922 = G__40934;
chunk__40912_40923 = G__40935;
count__40913_40924 = G__40936;
i__40914_40925 = G__40937;
continue;
} else {
var k_40938 = cljs.core.first.call(null,seq__40911_40932__$1);
e.setAttribute(cljs.core.name.call(null,k_40938),cljs.core.get.call(null,attrs,k_40938));

var G__40939 = cljs.core.next.call(null,seq__40911_40932__$1);
var G__40940 = null;
var G__40941 = (0);
var G__40942 = (0);
seq__40911_40922 = G__40939;
chunk__40912_40923 = G__40940;
count__40913_40924 = G__40941;
i__40914_40925 = G__40942;
continue;
}
} else {
}
}
break;
}

var seq__40915_40943 = cljs.core.seq.call(null,children);
var chunk__40916_40944 = null;
var count__40917_40945 = (0);
var i__40918_40946 = (0);
while(true){
if((i__40918_40946 < count__40917_40945)){
var ch_40947 = cljs.core._nth.call(null,chunk__40916_40944,i__40918_40946);
e.appendChild(ch_40947);

var G__40948 = seq__40915_40943;
var G__40949 = chunk__40916_40944;
var G__40950 = count__40917_40945;
var G__40951 = (i__40918_40946 + (1));
seq__40915_40943 = G__40948;
chunk__40916_40944 = G__40949;
count__40917_40945 = G__40950;
i__40918_40946 = G__40951;
continue;
} else {
var temp__4657__auto___40952 = cljs.core.seq.call(null,seq__40915_40943);
if(temp__4657__auto___40952){
var seq__40915_40953__$1 = temp__4657__auto___40952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40915_40953__$1)){
var c__30084__auto___40954 = cljs.core.chunk_first.call(null,seq__40915_40953__$1);
var G__40955 = cljs.core.chunk_rest.call(null,seq__40915_40953__$1);
var G__40956 = c__30084__auto___40954;
var G__40957 = cljs.core.count.call(null,c__30084__auto___40954);
var G__40958 = (0);
seq__40915_40943 = G__40955;
chunk__40916_40944 = G__40956;
count__40917_40945 = G__40957;
i__40918_40946 = G__40958;
continue;
} else {
var ch_40959 = cljs.core.first.call(null,seq__40915_40953__$1);
e.appendChild(ch_40959);

var G__40960 = cljs.core.next.call(null,seq__40915_40953__$1);
var G__40961 = null;
var G__40962 = (0);
var G__40963 = (0);
seq__40915_40943 = G__40960;
chunk__40916_40944 = G__40961;
count__40917_40945 = G__40962;
i__40918_40946 = G__40963;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq40908){
var G__40909 = cljs.core.first.call(null,seq40908);
var seq40908__$1 = cljs.core.next.call(null,seq40908);
var G__40910 = cljs.core.first.call(null,seq40908__$1);
var seq40908__$2 = cljs.core.next.call(null,seq40908__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__40909,G__40910,seq40908__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__30198__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__30199__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__30200__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__30201__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__30202__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__30198__auto__,prefer_table__30199__auto__,method_cache__30200__auto__,cached_hierarchy__30201__auto__,hierarchy__30202__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__30198__auto__,prefer_table__30199__auto__,method_cache__30200__auto__,cached_hierarchy__30201__auto__,hierarchy__30202__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__30202__auto__,method_table__30198__auto__,prefer_table__30199__auto__,method_cache__30200__auto__,cached_hierarchy__30201__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_40964 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_40964.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_40964.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_40964.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_40964);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__40965,st_map){
var map__40970 = p__40965;
var map__40970__$1 = ((((!((map__40970 == null)))?((((map__40970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40970):map__40970);
var container_el = cljs.core.get.call(null,map__40970__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__40970,map__40970__$1,container_el){
return (function (p__40972){
var vec__40973 = p__40972;
var k = cljs.core.nth.call(null,vec__40973,(0),null);
var v = cljs.core.nth.call(null,vec__40973,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__40970,map__40970__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__40974,dom_str){
var map__40977 = p__40974;
var map__40977__$1 = ((((!((map__40977 == null)))?((((map__40977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40977):map__40977);
var c = map__40977__$1;
var content_area_el = cljs.core.get.call(null,map__40977__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__40979){
var map__40982 = p__40979;
var map__40982__$1 = ((((!((map__40982 == null)))?((((map__40982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40982):map__40982);
var content_area_el = cljs.core.get.call(null,map__40982__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__34236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto__){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto__){
return (function (state_41025){
var state_val_41026 = (state_41025[(1)]);
if((state_val_41026 === (1))){
var inst_41010 = (state_41025[(7)]);
var inst_41010__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_41011 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_41012 = ["10px","10px","100%","68px","1.0"];
var inst_41013 = cljs.core.PersistentHashMap.fromArrays(inst_41011,inst_41012);
var inst_41014 = cljs.core.merge.call(null,inst_41013,style);
var inst_41015 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41010__$1,inst_41014);
var inst_41016 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_41010__$1,msg);
var inst_41017 = cljs.core.async.timeout.call(null,(300));
var state_41025__$1 = (function (){var statearr_41027 = state_41025;
(statearr_41027[(7)] = inst_41010__$1);

(statearr_41027[(8)] = inst_41015);

(statearr_41027[(9)] = inst_41016);

return statearr_41027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41025__$1,(2),inst_41017);
} else {
if((state_val_41026 === (2))){
var inst_41010 = (state_41025[(7)]);
var inst_41019 = (state_41025[(2)]);
var inst_41020 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_41021 = ["auto"];
var inst_41022 = cljs.core.PersistentHashMap.fromArrays(inst_41020,inst_41021);
var inst_41023 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41010,inst_41022);
var state_41025__$1 = (function (){var statearr_41028 = state_41025;
(statearr_41028[(10)] = inst_41019);

return statearr_41028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41025__$1,inst_41023);
} else {
return null;
}
}
});})(c__34236__auto__))
;
return ((function (switch__34221__auto__,c__34236__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__34222__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__34222__auto____0 = (function (){
var statearr_41032 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41032[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__34222__auto__);

(statearr_41032[(1)] = (1));

return statearr_41032;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__34222__auto____1 = (function (state_41025){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_41025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e41033){if((e41033 instanceof Object)){
var ex__34225__auto__ = e41033;
var statearr_41034_41036 = state_41025;
(statearr_41034_41036[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41037 = state_41025;
state_41025 = G__41037;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__34222__auto__ = function(state_41025){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__34222__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__34222__auto____1.call(this,state_41025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__34222__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__34222__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto__))
})();
var state__34238__auto__ = (function (){var statearr_41035 = f__34237__auto__.call(null);
(statearr_41035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto__);

return statearr_41035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto__))
);

return c__34236__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args41038 = [];
var len__30343__auto___41041 = arguments.length;
var i__30344__auto___41042 = (0);
while(true){
if((i__30344__auto___41042 < len__30343__auto___41041)){
args41038.push((arguments[i__30344__auto___41042]));

var G__41043 = (i__30344__auto___41042 + (1));
i__30344__auto___41042 = G__41043;
continue;
} else {
}
break;
}

var G__41040 = args41038.length;
switch (G__41040) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41038.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str(" <span style=\""),cljs.core.str("display: inline-block;"),cljs.core.str("font-size: 13px;"),cljs.core.str("\">"),cljs.core.str(sub_head),cljs.core.str("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__41046 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__41046,(0),null);
var ln = cljs.core.nth.call(null,vec__41046,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__41049 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__41049,(0),null);
var file_line = cljs.core.nth.call(null,vec__41049,(1),null);
var file_column = cljs.core.nth.call(null,vec__41049,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__41049,file_name,file_line,file_column){
return (function (p1__41047_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__41047_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__41049,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__29273__auto__ = file_line;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
var and__29261__auto__ = cause;
if(cljs.core.truth_(and__29261__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__29261__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(ex){
return cljs.core.take_while.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),ex));
});
figwheel.client.heads_up.exception_info_QMARK_ = (function figwheel$client$heads_up$exception_info_QMARK_(ex){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(ex),new cljs.core.Symbol(null,"clojure.lang.ExceptionInfo","clojure.lang.ExceptionInfo",-550564927,null));
});
figwheel.client.heads_up.parse_failed_compile = (function figwheel$client$heads_up$parse_failed_compile(p__41050){
var map__41053 = p__41050;
var map__41053__$1 = ((((!((map__41053 == null)))?((((map__41053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41053):map__41053);
var ex = map__41053__$1;
var exception_data = cljs.core.get.call(null,map__41053__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var exception = cljs.core.first.call(null,exception_data);
if(cljs.core.truth_((function (){var and__29261__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exception);
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.re_matches.call(null,/failed compiling.*/,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception));
} else {
return and__29261__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503),true,new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.get_in.call(null,exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"file","file",-1269645878)], null)));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_analysis_error = (function figwheel$client$heads_up$parse_analysis_error(p__41055){
var map__41061 = p__41055;
var map__41061__$1 = ((((!((map__41061 == null)))?((((map__41061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41061):map__41061);
var ex = map__41061__$1;
var exception_data = cljs.core.get.call(null,map__41061__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__41061,map__41061__$1,ex,exception_data){
return (function (p__41063){
var map__41064 = p__41063;
var map__41064__$1 = ((((!((map__41064 == null)))?((((map__41064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41064):map__41064);
var exc = map__41064__$1;
var data = cljs.core.get.call(null,map__41064__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__29261__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__29261__auto__)){
return data;
} else {
return and__29261__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349));
} else {
return null;
}
});})(map__41061,map__41061__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var analysis_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285),analysis_exception,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"class","class",-2030961996)], null))], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(analysis_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__29273__auto__ = cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(analysis_exception);
}
})()], null));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_reader_error = (function figwheel$client$heads_up$parse_reader_error(p__41066){
var map__41072 = p__41066;
var map__41072__$1 = ((((!((map__41072 == null)))?((((map__41072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41072):map__41072);
var ex = map__41072__$1;
var exception_data = cljs.core.get.call(null,map__41072__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__41072,map__41072__$1,ex,exception_data){
return (function (p__41074){
var map__41075 = p__41074;
var map__41075__$1 = ((((!((map__41075 == null)))?((((map__41075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41075):map__41075);
var exc = map__41075__$1;
var data = cljs.core.get.call(null,map__41075__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__29261__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__29261__auto__)){
return data;
} else {
return and__29261__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
} else {
return null;
}
});})(map__41072,map__41072__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var reader_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),reader_exception], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reader_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(reader_exception)], null));
} else {
return ex;
}
});
figwheel.client.heads_up.patch_eof_reader_exception = (function figwheel$client$heads_up$patch_eof_reader_exception(p__41077){
var map__41081 = p__41077;
var map__41081__$1 = ((((!((map__41081 == null)))?((((map__41081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41081):map__41081);
var ex = map__41081__$1;
var reader_exception = cljs.core.get.call(null,map__41081__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var message = cljs.core.get.call(null,map__41081__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_((function (){var and__29261__auto__ = reader_exception;
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.re_matches.call(null,/EOF while reading, starting.*/,message);
} else {
return and__29261__auto__;
}
})())){
var temp__4657__auto__ = cljs.core.re_matches.call(null,/.*line\s(\d*)\sand\scolumn\s(\d*).*/,message);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__41083 = temp__4657__auto__;
var _ = cljs.core.nth.call(null,vec__41083,(0),null);
var line = cljs.core.nth.call(null,vec__41083,(1),null);
var column = cljs.core.nth.call(null,vec__41083,(2),null);
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),(line | (0)),new cljs.core.Keyword(null,"column","column",2078222095),(column | (0)));
} else {
return null;
}
} else {
return ex;
}
});
figwheel.client.heads_up.ensure_file_line = (function figwheel$client$heads_up$ensure_file_line(p__41084){
var map__41090 = p__41084;
var map__41090__$1 = ((((!((map__41090 == null)))?((((map__41090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41090):map__41090);
var ex = map__41090__$1;
var exception_data = cljs.core.get.call(null,map__41090__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var map__41092 = cljs.core.apply.call(null,cljs.core.merge,cljs.core.keep.call(null,new cljs.core.Keyword(null,"data","data",-232669377),exception_data));
var map__41092__$1 = ((((!((map__41092 == null)))?((((map__41092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41092):map__41092);
var file = cljs.core.get.call(null,map__41092__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41092__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__41094 = ex;
var G__41094__$1 = (((new cljs.core.Keyword(null,"file","file",-1269645878) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"file","file",-1269645878),file,G__41094):G__41094);
var G__41094__$2 = (((new cljs.core.Keyword(null,"line","line",212345235) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),line,G__41094__$1):G__41094__$1);
if((new cljs.core.Keyword(null,"message","message",-406056002) == null)){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.last.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"message","message",-406056002),exception_data)),G__41094__$2);
} else {
return G__41094__$2;
}
});
figwheel.client.heads_up.remove_file_from_message = (function figwheel$client$heads_up$remove_file_from_message(p__41095){
var map__41098 = p__41095;
var map__41098__$1 = ((((!((map__41098 == null)))?((((map__41098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41098):map__41098);
var ex = map__41098__$1;
var message = cljs.core.get.call(null,map__41098__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__41098__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__29261__auto__ = file;
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.re_matches.call(null,/.*in file.*/,message);
} else {
return and__29261__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.first.call(null,clojure.string.split.call(null,message,"in file")));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_exception = (function figwheel$client$heads_up$parse_exception(exception_data){
return figwheel.client.heads_up.remove_file_from_message.call(null,figwheel.client.heads_up.patch_eof_reader_exception.call(null,figwheel.client.heads_up.parse_reader_error.call(null,figwheel.client.heads_up.parse_analysis_error.call(null,figwheel.client.heads_up.parse_failed_compile.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exception-data","exception-data",-512474886),exception_data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception-data","exception-data",-512474886)], null),figwheel.client.heads_up.flatten_exception))))));
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__41102){
var map__41105 = p__41102;
var map__41105__$1 = ((((!((map__41105 == null)))?((((map__41105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41105):map__41105);
var exception = map__41105__$1;
var failed_compiling = cljs.core.get.call(null,map__41105__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__41105__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__41105__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__41105__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__41105__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41105__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41105__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__41105__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var last_message = (cljs.core.truth_((function (){var and__29261__auto__ = file;
if(cljs.core.truth_(and__29261__auto__)){
return line;
} else {
return and__29261__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__41105,map__41105__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__41100_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__41100_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__41105,map__41105__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join('')], null):cljs.core.map.call(null,((function (last_message,map__41105,map__41105__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__41101_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__41101_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__41101_SHARP_)))].join('');
});})(last_message,map__41105,map__41105__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__41110 = figwheel.client.heads_up.exception__GT_display_data.call(null,figwheel.client.heads_up.parse_exception.call(null,exception_data));
var map__41110__$1 = ((((!((map__41110 == null)))?((((map__41110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41110):map__41110);
var head = cljs.core.get.call(null,map__41110__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__41110__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__41110__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__41110__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__41110__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41110__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41110__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__41114 = figwheel.client.heads_up.ensure_container.call(null);
var map__41114__$1 = ((((!((map__41114 == null)))?((((map__41114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41114):map__41114);
var content_area_el = cljs.core.get.call(null,map__41114__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__34236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto__){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto__){
return (function (state_41162){
var state_val_41163 = (state_41162[(1)]);
if((state_val_41163 === (1))){
var inst_41145 = (state_41162[(7)]);
var inst_41145__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_41146 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_41147 = ["0.0"];
var inst_41148 = cljs.core.PersistentHashMap.fromArrays(inst_41146,inst_41147);
var inst_41149 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41145__$1,inst_41148);
var inst_41150 = cljs.core.async.timeout.call(null,(300));
var state_41162__$1 = (function (){var statearr_41164 = state_41162;
(statearr_41164[(8)] = inst_41149);

(statearr_41164[(7)] = inst_41145__$1);

return statearr_41164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41162__$1,(2),inst_41150);
} else {
if((state_val_41163 === (2))){
var inst_41145 = (state_41162[(7)]);
var inst_41152 = (state_41162[(2)]);
var inst_41153 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_41154 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_41155 = cljs.core.PersistentHashMap.fromArrays(inst_41153,inst_41154);
var inst_41156 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41145,inst_41155);
var inst_41157 = cljs.core.async.timeout.call(null,(200));
var state_41162__$1 = (function (){var statearr_41165 = state_41162;
(statearr_41165[(9)] = inst_41156);

(statearr_41165[(10)] = inst_41152);

return statearr_41165;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41162__$1,(3),inst_41157);
} else {
if((state_val_41163 === (3))){
var inst_41145 = (state_41162[(7)]);
var inst_41159 = (state_41162[(2)]);
var inst_41160 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_41145,"");
var state_41162__$1 = (function (){var statearr_41166 = state_41162;
(statearr_41166[(11)] = inst_41159);

return statearr_41166;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41162__$1,inst_41160);
} else {
return null;
}
}
}
});})(c__34236__auto__))
;
return ((function (switch__34221__auto__,c__34236__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__34222__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__34222__auto____0 = (function (){
var statearr_41170 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41170[(0)] = figwheel$client$heads_up$clear_$_state_machine__34222__auto__);

(statearr_41170[(1)] = (1));

return statearr_41170;
});
var figwheel$client$heads_up$clear_$_state_machine__34222__auto____1 = (function (state_41162){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_41162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e41171){if((e41171 instanceof Object)){
var ex__34225__auto__ = e41171;
var statearr_41172_41174 = state_41162;
(statearr_41172_41174[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41175 = state_41162;
state_41162 = G__41175;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__34222__auto__ = function(state_41162){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__34222__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__34222__auto____1.call(this,state_41162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__34222__auto____0;
figwheel$client$heads_up$clear_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__34222__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto__))
})();
var state__34238__auto__ = (function (){var statearr_41173 = f__34237__auto__.call(null);
(statearr_41173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto__);

return statearr_41173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto__))
);

return c__34236__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__34236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto__){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto__){
return (function (state_41207){
var state_val_41208 = (state_41207[(1)]);
if((state_val_41208 === (1))){
var inst_41197 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_41207__$1 = state_41207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41207__$1,(2),inst_41197);
} else {
if((state_val_41208 === (2))){
var inst_41199 = (state_41207[(2)]);
var inst_41200 = cljs.core.async.timeout.call(null,(400));
var state_41207__$1 = (function (){var statearr_41209 = state_41207;
(statearr_41209[(7)] = inst_41199);

return statearr_41209;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41207__$1,(3),inst_41200);
} else {
if((state_val_41208 === (3))){
var inst_41202 = (state_41207[(2)]);
var inst_41203 = figwheel.client.heads_up.clear.call(null);
var state_41207__$1 = (function (){var statearr_41210 = state_41207;
(statearr_41210[(8)] = inst_41202);

return statearr_41210;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41207__$1,(4),inst_41203);
} else {
if((state_val_41208 === (4))){
var inst_41205 = (state_41207[(2)]);
var state_41207__$1 = state_41207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41207__$1,inst_41205);
} else {
return null;
}
}
}
}
});})(c__34236__auto__))
;
return ((function (switch__34221__auto__,c__34236__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__34222__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__34222__auto____0 = (function (){
var statearr_41214 = [null,null,null,null,null,null,null,null,null];
(statearr_41214[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__34222__auto__);

(statearr_41214[(1)] = (1));

return statearr_41214;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__34222__auto____1 = (function (state_41207){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_41207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e41215){if((e41215 instanceof Object)){
var ex__34225__auto__ = e41215;
var statearr_41216_41218 = state_41207;
(statearr_41216_41218[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41219 = state_41207;
state_41207 = G__41219;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__34222__auto__ = function(state_41207){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__34222__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__34222__auto____1.call(this,state_41207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__34222__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__34222__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto__))
})();
var state__34238__auto__ = (function (){var statearr_41217 = f__34237__auto__.call(null);
(statearr_41217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto__);

return statearr_41217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto__))
);

return c__34236__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1465505515481