// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__29273__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__29273__auto__){
return or__29273__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__29273__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39774_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39774_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__39779 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39780 = null;
var count__39781 = (0);
var i__39782 = (0);
while(true){
if((i__39782 < count__39781)){
var n = cljs.core._nth.call(null,chunk__39780,i__39782);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39783 = seq__39779;
var G__39784 = chunk__39780;
var G__39785 = count__39781;
var G__39786 = (i__39782 + (1));
seq__39779 = G__39783;
chunk__39780 = G__39784;
count__39781 = G__39785;
i__39782 = G__39786;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39779);
if(temp__4657__auto__){
var seq__39779__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39779__$1)){
var c__30084__auto__ = cljs.core.chunk_first.call(null,seq__39779__$1);
var G__39787 = cljs.core.chunk_rest.call(null,seq__39779__$1);
var G__39788 = c__30084__auto__;
var G__39789 = cljs.core.count.call(null,c__30084__auto__);
var G__39790 = (0);
seq__39779 = G__39787;
chunk__39780 = G__39788;
count__39781 = G__39789;
i__39782 = G__39790;
continue;
} else {
var n = cljs.core.first.call(null,seq__39779__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39791 = cljs.core.next.call(null,seq__39779__$1);
var G__39792 = null;
var G__39793 = (0);
var G__39794 = (0);
seq__39779 = G__39791;
chunk__39780 = G__39792;
count__39781 = G__39793;
i__39782 = G__39794;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__39833_39840 = cljs.core.seq.call(null,deps);
var chunk__39834_39841 = null;
var count__39835_39842 = (0);
var i__39836_39843 = (0);
while(true){
if((i__39836_39843 < count__39835_39842)){
var dep_39844 = cljs.core._nth.call(null,chunk__39834_39841,i__39836_39843);
topo_sort_helper_STAR_.call(null,dep_39844,(depth + (1)),state);

var G__39845 = seq__39833_39840;
var G__39846 = chunk__39834_39841;
var G__39847 = count__39835_39842;
var G__39848 = (i__39836_39843 + (1));
seq__39833_39840 = G__39845;
chunk__39834_39841 = G__39846;
count__39835_39842 = G__39847;
i__39836_39843 = G__39848;
continue;
} else {
var temp__4657__auto___39849 = cljs.core.seq.call(null,seq__39833_39840);
if(temp__4657__auto___39849){
var seq__39833_39850__$1 = temp__4657__auto___39849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39833_39850__$1)){
var c__30084__auto___39851 = cljs.core.chunk_first.call(null,seq__39833_39850__$1);
var G__39852 = cljs.core.chunk_rest.call(null,seq__39833_39850__$1);
var G__39853 = c__30084__auto___39851;
var G__39854 = cljs.core.count.call(null,c__30084__auto___39851);
var G__39855 = (0);
seq__39833_39840 = G__39852;
chunk__39834_39841 = G__39853;
count__39835_39842 = G__39854;
i__39836_39843 = G__39855;
continue;
} else {
var dep_39856 = cljs.core.first.call(null,seq__39833_39850__$1);
topo_sort_helper_STAR_.call(null,dep_39856,(depth + (1)),state);

var G__39857 = cljs.core.next.call(null,seq__39833_39850__$1);
var G__39858 = null;
var G__39859 = (0);
var G__39860 = (0);
seq__39833_39840 = G__39857;
chunk__39834_39841 = G__39858;
count__39835_39842 = G__39859;
i__39836_39843 = G__39860;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39837){
var vec__39839 = p__39837;
var x = cljs.core.nth.call(null,vec__39839,(0),null);
var xs = cljs.core.nthnext.call(null,vec__39839,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39839,x,xs,get_deps__$1){
return (function (p1__39795_SHARP_){
return clojure.set.difference.call(null,p1__39795_SHARP_,x);
});})(vec__39839,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__39873 = cljs.core.seq.call(null,provides);
var chunk__39874 = null;
var count__39875 = (0);
var i__39876 = (0);
while(true){
if((i__39876 < count__39875)){
var prov = cljs.core._nth.call(null,chunk__39874,i__39876);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39877_39885 = cljs.core.seq.call(null,requires);
var chunk__39878_39886 = null;
var count__39879_39887 = (0);
var i__39880_39888 = (0);
while(true){
if((i__39880_39888 < count__39879_39887)){
var req_39889 = cljs.core._nth.call(null,chunk__39878_39886,i__39880_39888);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39889,prov);

var G__39890 = seq__39877_39885;
var G__39891 = chunk__39878_39886;
var G__39892 = count__39879_39887;
var G__39893 = (i__39880_39888 + (1));
seq__39877_39885 = G__39890;
chunk__39878_39886 = G__39891;
count__39879_39887 = G__39892;
i__39880_39888 = G__39893;
continue;
} else {
var temp__4657__auto___39894 = cljs.core.seq.call(null,seq__39877_39885);
if(temp__4657__auto___39894){
var seq__39877_39895__$1 = temp__4657__auto___39894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39877_39895__$1)){
var c__30084__auto___39896 = cljs.core.chunk_first.call(null,seq__39877_39895__$1);
var G__39897 = cljs.core.chunk_rest.call(null,seq__39877_39895__$1);
var G__39898 = c__30084__auto___39896;
var G__39899 = cljs.core.count.call(null,c__30084__auto___39896);
var G__39900 = (0);
seq__39877_39885 = G__39897;
chunk__39878_39886 = G__39898;
count__39879_39887 = G__39899;
i__39880_39888 = G__39900;
continue;
} else {
var req_39901 = cljs.core.first.call(null,seq__39877_39895__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39901,prov);

var G__39902 = cljs.core.next.call(null,seq__39877_39895__$1);
var G__39903 = null;
var G__39904 = (0);
var G__39905 = (0);
seq__39877_39885 = G__39902;
chunk__39878_39886 = G__39903;
count__39879_39887 = G__39904;
i__39880_39888 = G__39905;
continue;
}
} else {
}
}
break;
}

var G__39906 = seq__39873;
var G__39907 = chunk__39874;
var G__39908 = count__39875;
var G__39909 = (i__39876 + (1));
seq__39873 = G__39906;
chunk__39874 = G__39907;
count__39875 = G__39908;
i__39876 = G__39909;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39873);
if(temp__4657__auto__){
var seq__39873__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39873__$1)){
var c__30084__auto__ = cljs.core.chunk_first.call(null,seq__39873__$1);
var G__39910 = cljs.core.chunk_rest.call(null,seq__39873__$1);
var G__39911 = c__30084__auto__;
var G__39912 = cljs.core.count.call(null,c__30084__auto__);
var G__39913 = (0);
seq__39873 = G__39910;
chunk__39874 = G__39911;
count__39875 = G__39912;
i__39876 = G__39913;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39873__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39881_39914 = cljs.core.seq.call(null,requires);
var chunk__39882_39915 = null;
var count__39883_39916 = (0);
var i__39884_39917 = (0);
while(true){
if((i__39884_39917 < count__39883_39916)){
var req_39918 = cljs.core._nth.call(null,chunk__39882_39915,i__39884_39917);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39918,prov);

var G__39919 = seq__39881_39914;
var G__39920 = chunk__39882_39915;
var G__39921 = count__39883_39916;
var G__39922 = (i__39884_39917 + (1));
seq__39881_39914 = G__39919;
chunk__39882_39915 = G__39920;
count__39883_39916 = G__39921;
i__39884_39917 = G__39922;
continue;
} else {
var temp__4657__auto___39923__$1 = cljs.core.seq.call(null,seq__39881_39914);
if(temp__4657__auto___39923__$1){
var seq__39881_39924__$1 = temp__4657__auto___39923__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39881_39924__$1)){
var c__30084__auto___39925 = cljs.core.chunk_first.call(null,seq__39881_39924__$1);
var G__39926 = cljs.core.chunk_rest.call(null,seq__39881_39924__$1);
var G__39927 = c__30084__auto___39925;
var G__39928 = cljs.core.count.call(null,c__30084__auto___39925);
var G__39929 = (0);
seq__39881_39914 = G__39926;
chunk__39882_39915 = G__39927;
count__39883_39916 = G__39928;
i__39884_39917 = G__39929;
continue;
} else {
var req_39930 = cljs.core.first.call(null,seq__39881_39924__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39930,prov);

var G__39931 = cljs.core.next.call(null,seq__39881_39924__$1);
var G__39932 = null;
var G__39933 = (0);
var G__39934 = (0);
seq__39881_39914 = G__39931;
chunk__39882_39915 = G__39932;
count__39883_39916 = G__39933;
i__39884_39917 = G__39934;
continue;
}
} else {
}
}
break;
}

var G__39935 = cljs.core.next.call(null,seq__39873__$1);
var G__39936 = null;
var G__39937 = (0);
var G__39938 = (0);
seq__39873 = G__39935;
chunk__39874 = G__39936;
count__39875 = G__39937;
i__39876 = G__39938;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__39943_39947 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39944_39948 = null;
var count__39945_39949 = (0);
var i__39946_39950 = (0);
while(true){
if((i__39946_39950 < count__39945_39949)){
var ns_39951 = cljs.core._nth.call(null,chunk__39944_39948,i__39946_39950);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39951);

var G__39952 = seq__39943_39947;
var G__39953 = chunk__39944_39948;
var G__39954 = count__39945_39949;
var G__39955 = (i__39946_39950 + (1));
seq__39943_39947 = G__39952;
chunk__39944_39948 = G__39953;
count__39945_39949 = G__39954;
i__39946_39950 = G__39955;
continue;
} else {
var temp__4657__auto___39956 = cljs.core.seq.call(null,seq__39943_39947);
if(temp__4657__auto___39956){
var seq__39943_39957__$1 = temp__4657__auto___39956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39943_39957__$1)){
var c__30084__auto___39958 = cljs.core.chunk_first.call(null,seq__39943_39957__$1);
var G__39959 = cljs.core.chunk_rest.call(null,seq__39943_39957__$1);
var G__39960 = c__30084__auto___39958;
var G__39961 = cljs.core.count.call(null,c__30084__auto___39958);
var G__39962 = (0);
seq__39943_39947 = G__39959;
chunk__39944_39948 = G__39960;
count__39945_39949 = G__39961;
i__39946_39950 = G__39962;
continue;
} else {
var ns_39963 = cljs.core.first.call(null,seq__39943_39957__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39963);

var G__39964 = cljs.core.next.call(null,seq__39943_39957__$1);
var G__39965 = null;
var G__39966 = (0);
var G__39967 = (0);
seq__39943_39947 = G__39964;
chunk__39944_39948 = G__39965;
count__39945_39949 = G__39966;
i__39946_39950 = G__39967;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__29273__auto__ = goog.require__;
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__39968__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39968 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39969__i = 0, G__39969__a = new Array(arguments.length -  0);
while (G__39969__i < G__39969__a.length) {G__39969__a[G__39969__i] = arguments[G__39969__i + 0]; ++G__39969__i;}
  args = new cljs.core.IndexedSeq(G__39969__a,0);
} 
return G__39968__delegate.call(this,args);};
G__39968.cljs$lang$maxFixedArity = 0;
G__39968.cljs$lang$applyTo = (function (arglist__39970){
var args = cljs.core.seq(arglist__39970);
return G__39968__delegate(args);
});
G__39968.cljs$core$IFn$_invoke$arity$variadic = G__39968__delegate;
return G__39968;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39972 = cljs.core._EQ_;
var expr__39973 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39972.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39973))){
var path_parts = ((function (pred__39972,expr__39973){
return (function (p1__39971_SHARP_){
return clojure.string.split.call(null,p1__39971_SHARP_,/[\/\\]/);
});})(pred__39972,expr__39973))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__39972,expr__39973){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39975){if((e39975 instanceof Error)){
var e = e39975;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39975;

}
}})());
});
;})(path_parts,sep,root,pred__39972,expr__39973))
} else {
if(cljs.core.truth_(pred__39972.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39973))){
return ((function (pred__39972,expr__39973){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__39972,expr__39973){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__39972,expr__39973))
);

return deferred.addErrback(((function (deferred,pred__39972,expr__39973){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__39972,expr__39973))
);
});
;})(pred__39972,expr__39973))
} else {
return ((function (pred__39972,expr__39973){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39972,expr__39973))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39976,callback){
var map__39979 = p__39976;
var map__39979__$1 = ((((!((map__39979 == null)))?((((map__39979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39979):map__39979);
var file_msg = map__39979__$1;
var request_url = cljs.core.get.call(null,map__39979__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39979,map__39979__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39979,map__39979__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto__){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto__){
return (function (state_40003){
var state_val_40004 = (state_40003[(1)]);
if((state_val_40004 === (7))){
var inst_39999 = (state_40003[(2)]);
var state_40003__$1 = state_40003;
var statearr_40005_40025 = state_40003__$1;
(statearr_40005_40025[(2)] = inst_39999);

(statearr_40005_40025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (1))){
var state_40003__$1 = state_40003;
var statearr_40006_40026 = state_40003__$1;
(statearr_40006_40026[(2)] = null);

(statearr_40006_40026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (4))){
var inst_39983 = (state_40003[(7)]);
var inst_39983__$1 = (state_40003[(2)]);
var state_40003__$1 = (function (){var statearr_40007 = state_40003;
(statearr_40007[(7)] = inst_39983__$1);

return statearr_40007;
})();
if(cljs.core.truth_(inst_39983__$1)){
var statearr_40008_40027 = state_40003__$1;
(statearr_40008_40027[(1)] = (5));

} else {
var statearr_40009_40028 = state_40003__$1;
(statearr_40009_40028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (6))){
var state_40003__$1 = state_40003;
var statearr_40010_40029 = state_40003__$1;
(statearr_40010_40029[(2)] = null);

(statearr_40010_40029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (3))){
var inst_40001 = (state_40003[(2)]);
var state_40003__$1 = state_40003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40003__$1,inst_40001);
} else {
if((state_val_40004 === (2))){
var state_40003__$1 = state_40003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40003__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40004 === (11))){
var inst_39995 = (state_40003[(2)]);
var state_40003__$1 = (function (){var statearr_40011 = state_40003;
(statearr_40011[(8)] = inst_39995);

return statearr_40011;
})();
var statearr_40012_40030 = state_40003__$1;
(statearr_40012_40030[(2)] = null);

(statearr_40012_40030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (9))){
var inst_39989 = (state_40003[(9)]);
var inst_39987 = (state_40003[(10)]);
var inst_39991 = inst_39989.call(null,inst_39987);
var state_40003__$1 = state_40003;
var statearr_40013_40031 = state_40003__$1;
(statearr_40013_40031[(2)] = inst_39991);

(statearr_40013_40031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (5))){
var inst_39983 = (state_40003[(7)]);
var inst_39985 = figwheel.client.file_reloading.blocking_load.call(null,inst_39983);
var state_40003__$1 = state_40003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40003__$1,(8),inst_39985);
} else {
if((state_val_40004 === (10))){
var inst_39987 = (state_40003[(10)]);
var inst_39993 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39987);
var state_40003__$1 = state_40003;
var statearr_40014_40032 = state_40003__$1;
(statearr_40014_40032[(2)] = inst_39993);

(statearr_40014_40032[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (8))){
var inst_39989 = (state_40003[(9)]);
var inst_39983 = (state_40003[(7)]);
var inst_39987 = (state_40003[(2)]);
var inst_39988 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39989__$1 = cljs.core.get.call(null,inst_39988,inst_39983);
var state_40003__$1 = (function (){var statearr_40015 = state_40003;
(statearr_40015[(9)] = inst_39989__$1);

(statearr_40015[(10)] = inst_39987);

return statearr_40015;
})();
if(cljs.core.truth_(inst_39989__$1)){
var statearr_40016_40033 = state_40003__$1;
(statearr_40016_40033[(1)] = (9));

} else {
var statearr_40017_40034 = state_40003__$1;
(statearr_40017_40034[(1)] = (10));

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
});})(c__34236__auto__))
;
return ((function (switch__34221__auto__,c__34236__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34222__auto__ = null;
var figwheel$client$file_reloading$state_machine__34222__auto____0 = (function (){
var statearr_40021 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40021[(0)] = figwheel$client$file_reloading$state_machine__34222__auto__);

(statearr_40021[(1)] = (1));

return statearr_40021;
});
var figwheel$client$file_reloading$state_machine__34222__auto____1 = (function (state_40003){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_40003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e40022){if((e40022 instanceof Object)){
var ex__34225__auto__ = e40022;
var statearr_40023_40035 = state_40003;
(statearr_40023_40035[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40036 = state_40003;
state_40003 = G__40036;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34222__auto__ = function(state_40003){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34222__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34222__auto____1.call(this,state_40003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34222__auto____0;
figwheel$client$file_reloading$state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34222__auto____1;
return figwheel$client$file_reloading$state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto__))
})();
var state__34238__auto__ = (function (){var statearr_40024 = f__34237__auto__.call(null);
(statearr_40024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto__);

return statearr_40024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto__))
);

return c__34236__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40037,callback){
var map__40040 = p__40037;
var map__40040__$1 = ((((!((map__40040 == null)))?((((map__40040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40040):map__40040);
var file_msg = map__40040__$1;
var namespace = cljs.core.get.call(null,map__40040__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40040,map__40040__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40040,map__40040__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40042){
var map__40045 = p__40042;
var map__40045__$1 = ((((!((map__40045 == null)))?((((map__40045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40045):map__40045);
var file_msg = map__40045__$1;
var namespace = cljs.core.get.call(null,map__40045__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__29261__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__29261__auto__){
var or__29273__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29273__auto__)){
return or__29273__auto__;
} else {
var or__29273__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29273__auto____$1)){
return or__29273__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__29261__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40047,callback){
var map__40050 = p__40047;
var map__40050__$1 = ((((!((map__40050 == null)))?((((map__40050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40050):map__40050);
var file_msg = map__40050__$1;
var request_url = cljs.core.get.call(null,map__40050__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40050__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34236__auto___40138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto___40138,out){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto___40138,out){
return (function (state_40120){
var state_val_40121 = (state_40120[(1)]);
if((state_val_40121 === (1))){
var inst_40098 = cljs.core.nth.call(null,files,(0),null);
var inst_40099 = cljs.core.nthnext.call(null,files,(1));
var inst_40100 = files;
var state_40120__$1 = (function (){var statearr_40122 = state_40120;
(statearr_40122[(7)] = inst_40100);

(statearr_40122[(8)] = inst_40098);

(statearr_40122[(9)] = inst_40099);

return statearr_40122;
})();
var statearr_40123_40139 = state_40120__$1;
(statearr_40123_40139[(2)] = null);

(statearr_40123_40139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40121 === (2))){
var inst_40100 = (state_40120[(7)]);
var inst_40103 = (state_40120[(10)]);
var inst_40103__$1 = cljs.core.nth.call(null,inst_40100,(0),null);
var inst_40104 = cljs.core.nthnext.call(null,inst_40100,(1));
var inst_40105 = (inst_40103__$1 == null);
var inst_40106 = cljs.core.not.call(null,inst_40105);
var state_40120__$1 = (function (){var statearr_40124 = state_40120;
(statearr_40124[(11)] = inst_40104);

(statearr_40124[(10)] = inst_40103__$1);

return statearr_40124;
})();
if(inst_40106){
var statearr_40125_40140 = state_40120__$1;
(statearr_40125_40140[(1)] = (4));

} else {
var statearr_40126_40141 = state_40120__$1;
(statearr_40126_40141[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40121 === (3))){
var inst_40118 = (state_40120[(2)]);
var state_40120__$1 = state_40120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40120__$1,inst_40118);
} else {
if((state_val_40121 === (4))){
var inst_40103 = (state_40120[(10)]);
var inst_40108 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40103);
var state_40120__$1 = state_40120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40120__$1,(7),inst_40108);
} else {
if((state_val_40121 === (5))){
var inst_40114 = cljs.core.async.close_BANG_.call(null,out);
var state_40120__$1 = state_40120;
var statearr_40127_40142 = state_40120__$1;
(statearr_40127_40142[(2)] = inst_40114);

(statearr_40127_40142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40121 === (6))){
var inst_40116 = (state_40120[(2)]);
var state_40120__$1 = state_40120;
var statearr_40128_40143 = state_40120__$1;
(statearr_40128_40143[(2)] = inst_40116);

(statearr_40128_40143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40121 === (7))){
var inst_40104 = (state_40120[(11)]);
var inst_40110 = (state_40120[(2)]);
var inst_40111 = cljs.core.async.put_BANG_.call(null,out,inst_40110);
var inst_40100 = inst_40104;
var state_40120__$1 = (function (){var statearr_40129 = state_40120;
(statearr_40129[(12)] = inst_40111);

(statearr_40129[(7)] = inst_40100);

return statearr_40129;
})();
var statearr_40130_40144 = state_40120__$1;
(statearr_40130_40144[(2)] = null);

(statearr_40130_40144[(1)] = (2));


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
});})(c__34236__auto___40138,out))
;
return ((function (switch__34221__auto__,c__34236__auto___40138,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34222__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34222__auto____0 = (function (){
var statearr_40134 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40134[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34222__auto__);

(statearr_40134[(1)] = (1));

return statearr_40134;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34222__auto____1 = (function (state_40120){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_40120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e40135){if((e40135 instanceof Object)){
var ex__34225__auto__ = e40135;
var statearr_40136_40145 = state_40120;
(statearr_40136_40145[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40146 = state_40120;
state_40120 = G__40146;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34222__auto__ = function(state_40120){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34222__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34222__auto____1.call(this,state_40120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34222__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34222__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto___40138,out))
})();
var state__34238__auto__ = (function (){var statearr_40137 = f__34237__auto__.call(null);
(statearr_40137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto___40138);

return statearr_40137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto___40138,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40147,opts){
var map__40151 = p__40147;
var map__40151__$1 = ((((!((map__40151 == null)))?((((map__40151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40151):map__40151);
var eval_body__$1 = cljs.core.get.call(null,map__40151__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40151__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__29261__auto__ = eval_body__$1;
if(cljs.core.truth_(and__29261__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__29261__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e40153){var e = e40153;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__40154_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40154_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__40159){
var vec__40160 = p__40159;
var k = cljs.core.nth.call(null,vec__40160,(0),null);
var v = cljs.core.nth.call(null,vec__40160,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40161){
var vec__40162 = p__40161;
var k = cljs.core.nth.call(null,vec__40162,(0),null);
var v = cljs.core.nth.call(null,vec__40162,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40166,p__40167){
var map__40414 = p__40166;
var map__40414__$1 = ((((!((map__40414 == null)))?((((map__40414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40414):map__40414);
var opts = map__40414__$1;
var before_jsload = cljs.core.get.call(null,map__40414__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40414__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40414__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40415 = p__40167;
var map__40415__$1 = ((((!((map__40415 == null)))?((((map__40415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40415):map__40415);
var msg = map__40415__$1;
var files = cljs.core.get.call(null,map__40415__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40415__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40415__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34237__auto__ = (function (){var switch__34221__auto__ = ((function (c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40568){
var state_val_40569 = (state_40568[(1)]);
if((state_val_40569 === (7))){
var inst_40431 = (state_40568[(7)]);
var inst_40429 = (state_40568[(8)]);
var inst_40430 = (state_40568[(9)]);
var inst_40432 = (state_40568[(10)]);
var inst_40437 = cljs.core._nth.call(null,inst_40430,inst_40432);
var inst_40438 = figwheel.client.file_reloading.eval_body.call(null,inst_40437,opts);
var inst_40439 = (inst_40432 + (1));
var tmp40570 = inst_40431;
var tmp40571 = inst_40429;
var tmp40572 = inst_40430;
var inst_40429__$1 = tmp40571;
var inst_40430__$1 = tmp40572;
var inst_40431__$1 = tmp40570;
var inst_40432__$1 = inst_40439;
var state_40568__$1 = (function (){var statearr_40573 = state_40568;
(statearr_40573[(11)] = inst_40438);

(statearr_40573[(7)] = inst_40431__$1);

(statearr_40573[(8)] = inst_40429__$1);

(statearr_40573[(9)] = inst_40430__$1);

(statearr_40573[(10)] = inst_40432__$1);

return statearr_40573;
})();
var statearr_40574_40660 = state_40568__$1;
(statearr_40574_40660[(2)] = null);

(statearr_40574_40660[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (20))){
var inst_40472 = (state_40568[(12)]);
var inst_40480 = figwheel.client.file_reloading.sort_files.call(null,inst_40472);
var state_40568__$1 = state_40568;
var statearr_40575_40661 = state_40568__$1;
(statearr_40575_40661[(2)] = inst_40480);

(statearr_40575_40661[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (27))){
var state_40568__$1 = state_40568;
var statearr_40576_40662 = state_40568__$1;
(statearr_40576_40662[(2)] = null);

(statearr_40576_40662[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (1))){
var inst_40421 = (state_40568[(13)]);
var inst_40418 = before_jsload.call(null,files);
var inst_40419 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40420 = (function (){return ((function (inst_40421,inst_40418,inst_40419,state_val_40569,c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40163_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40163_SHARP_);
});
;})(inst_40421,inst_40418,inst_40419,state_val_40569,c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40421__$1 = cljs.core.filter.call(null,inst_40420,files);
var inst_40422 = cljs.core.not_empty.call(null,inst_40421__$1);
var state_40568__$1 = (function (){var statearr_40577 = state_40568;
(statearr_40577[(14)] = inst_40418);

(statearr_40577[(15)] = inst_40419);

(statearr_40577[(13)] = inst_40421__$1);

return statearr_40577;
})();
if(cljs.core.truth_(inst_40422)){
var statearr_40578_40663 = state_40568__$1;
(statearr_40578_40663[(1)] = (2));

} else {
var statearr_40579_40664 = state_40568__$1;
(statearr_40579_40664[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (24))){
var state_40568__$1 = state_40568;
var statearr_40580_40665 = state_40568__$1;
(statearr_40580_40665[(2)] = null);

(statearr_40580_40665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (39))){
var inst_40522 = (state_40568[(16)]);
var state_40568__$1 = state_40568;
var statearr_40581_40666 = state_40568__$1;
(statearr_40581_40666[(2)] = inst_40522);

(statearr_40581_40666[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (46))){
var inst_40563 = (state_40568[(2)]);
var state_40568__$1 = state_40568;
var statearr_40582_40667 = state_40568__$1;
(statearr_40582_40667[(2)] = inst_40563);

(statearr_40582_40667[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (4))){
var inst_40466 = (state_40568[(2)]);
var inst_40467 = cljs.core.List.EMPTY;
var inst_40468 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40467);
var inst_40469 = (function (){return ((function (inst_40466,inst_40467,inst_40468,state_val_40569,c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40164_SHARP_){
var and__29261__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40164_SHARP_);
if(cljs.core.truth_(and__29261__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40164_SHARP_));
} else {
return and__29261__auto__;
}
});
;})(inst_40466,inst_40467,inst_40468,state_val_40569,c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40470 = cljs.core.filter.call(null,inst_40469,files);
var inst_40471 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40472 = cljs.core.concat.call(null,inst_40470,inst_40471);
var state_40568__$1 = (function (){var statearr_40583 = state_40568;
(statearr_40583[(12)] = inst_40472);

(statearr_40583[(17)] = inst_40466);

(statearr_40583[(18)] = inst_40468);

return statearr_40583;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40584_40668 = state_40568__$1;
(statearr_40584_40668[(1)] = (16));

} else {
var statearr_40585_40669 = state_40568__$1;
(statearr_40585_40669[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (15))){
var inst_40456 = (state_40568[(2)]);
var state_40568__$1 = state_40568;
var statearr_40586_40670 = state_40568__$1;
(statearr_40586_40670[(2)] = inst_40456);

(statearr_40586_40670[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (21))){
var inst_40482 = (state_40568[(19)]);
var inst_40482__$1 = (state_40568[(2)]);
var inst_40483 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40482__$1);
var state_40568__$1 = (function (){var statearr_40587 = state_40568;
(statearr_40587[(19)] = inst_40482__$1);

return statearr_40587;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40568__$1,(22),inst_40483);
} else {
if((state_val_40569 === (31))){
var inst_40566 = (state_40568[(2)]);
var state_40568__$1 = state_40568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40568__$1,inst_40566);
} else {
if((state_val_40569 === (32))){
var inst_40522 = (state_40568[(16)]);
var inst_40527 = inst_40522.cljs$lang$protocol_mask$partition0$;
var inst_40528 = (inst_40527 & (64));
var inst_40529 = inst_40522.cljs$core$ISeq$;
var inst_40530 = (inst_40528) || (inst_40529);
var state_40568__$1 = state_40568;
if(cljs.core.truth_(inst_40530)){
var statearr_40588_40671 = state_40568__$1;
(statearr_40588_40671[(1)] = (35));

} else {
var statearr_40589_40672 = state_40568__$1;
(statearr_40589_40672[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (40))){
var inst_40543 = (state_40568[(20)]);
var inst_40542 = (state_40568[(2)]);
var inst_40543__$1 = cljs.core.get.call(null,inst_40542,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40544 = cljs.core.get.call(null,inst_40542,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40545 = cljs.core.not_empty.call(null,inst_40543__$1);
var state_40568__$1 = (function (){var statearr_40590 = state_40568;
(statearr_40590[(21)] = inst_40544);

(statearr_40590[(20)] = inst_40543__$1);

return statearr_40590;
})();
if(cljs.core.truth_(inst_40545)){
var statearr_40591_40673 = state_40568__$1;
(statearr_40591_40673[(1)] = (41));

} else {
var statearr_40592_40674 = state_40568__$1;
(statearr_40592_40674[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (33))){
var state_40568__$1 = state_40568;
var statearr_40593_40675 = state_40568__$1;
(statearr_40593_40675[(2)] = false);

(statearr_40593_40675[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (13))){
var inst_40442 = (state_40568[(22)]);
var inst_40446 = cljs.core.chunk_first.call(null,inst_40442);
var inst_40447 = cljs.core.chunk_rest.call(null,inst_40442);
var inst_40448 = cljs.core.count.call(null,inst_40446);
var inst_40429 = inst_40447;
var inst_40430 = inst_40446;
var inst_40431 = inst_40448;
var inst_40432 = (0);
var state_40568__$1 = (function (){var statearr_40594 = state_40568;
(statearr_40594[(7)] = inst_40431);

(statearr_40594[(8)] = inst_40429);

(statearr_40594[(9)] = inst_40430);

(statearr_40594[(10)] = inst_40432);

return statearr_40594;
})();
var statearr_40595_40676 = state_40568__$1;
(statearr_40595_40676[(2)] = null);

(statearr_40595_40676[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (22))){
var inst_40490 = (state_40568[(23)]);
var inst_40485 = (state_40568[(24)]);
var inst_40486 = (state_40568[(25)]);
var inst_40482 = (state_40568[(19)]);
var inst_40485__$1 = (state_40568[(2)]);
var inst_40486__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40485__$1);
var inst_40487 = (function (){var all_files = inst_40482;
var res_SINGLEQUOTE_ = inst_40485__$1;
var res = inst_40486__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40490,inst_40485,inst_40486,inst_40482,inst_40485__$1,inst_40486__$1,state_val_40569,c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40165_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40165_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40490,inst_40485,inst_40486,inst_40482,inst_40485__$1,inst_40486__$1,state_val_40569,c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40488 = cljs.core.filter.call(null,inst_40487,inst_40485__$1);
var inst_40489 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40490__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40489);
var inst_40491 = cljs.core.not_empty.call(null,inst_40490__$1);
var state_40568__$1 = (function (){var statearr_40596 = state_40568;
(statearr_40596[(26)] = inst_40488);

(statearr_40596[(23)] = inst_40490__$1);

(statearr_40596[(24)] = inst_40485__$1);

(statearr_40596[(25)] = inst_40486__$1);

return statearr_40596;
})();
if(cljs.core.truth_(inst_40491)){
var statearr_40597_40677 = state_40568__$1;
(statearr_40597_40677[(1)] = (23));

} else {
var statearr_40598_40678 = state_40568__$1;
(statearr_40598_40678[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (36))){
var state_40568__$1 = state_40568;
var statearr_40599_40679 = state_40568__$1;
(statearr_40599_40679[(2)] = false);

(statearr_40599_40679[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (41))){
var inst_40543 = (state_40568[(20)]);
var inst_40547 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40548 = cljs.core.map.call(null,inst_40547,inst_40543);
var inst_40549 = cljs.core.pr_str.call(null,inst_40548);
var inst_40550 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_40549)].join('');
var inst_40551 = figwheel.client.utils.log.call(null,inst_40550);
var state_40568__$1 = state_40568;
var statearr_40600_40680 = state_40568__$1;
(statearr_40600_40680[(2)] = inst_40551);

(statearr_40600_40680[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (43))){
var inst_40544 = (state_40568[(21)]);
var inst_40554 = (state_40568[(2)]);
var inst_40555 = cljs.core.not_empty.call(null,inst_40544);
var state_40568__$1 = (function (){var statearr_40601 = state_40568;
(statearr_40601[(27)] = inst_40554);

return statearr_40601;
})();
if(cljs.core.truth_(inst_40555)){
var statearr_40602_40681 = state_40568__$1;
(statearr_40602_40681[(1)] = (44));

} else {
var statearr_40603_40682 = state_40568__$1;
(statearr_40603_40682[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (29))){
var inst_40488 = (state_40568[(26)]);
var inst_40490 = (state_40568[(23)]);
var inst_40485 = (state_40568[(24)]);
var inst_40486 = (state_40568[(25)]);
var inst_40522 = (state_40568[(16)]);
var inst_40482 = (state_40568[(19)]);
var inst_40518 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40521 = (function (){var all_files = inst_40482;
var res_SINGLEQUOTE_ = inst_40485;
var res = inst_40486;
var files_not_loaded = inst_40488;
var dependencies_that_loaded = inst_40490;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40488,inst_40490,inst_40485,inst_40486,inst_40522,inst_40482,inst_40518,state_val_40569,c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40520){
var map__40604 = p__40520;
var map__40604__$1 = ((((!((map__40604 == null)))?((((map__40604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40604):map__40604);
var namespace = cljs.core.get.call(null,map__40604__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40488,inst_40490,inst_40485,inst_40486,inst_40522,inst_40482,inst_40518,state_val_40569,c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40522__$1 = cljs.core.group_by.call(null,inst_40521,inst_40488);
var inst_40524 = (inst_40522__$1 == null);
var inst_40525 = cljs.core.not.call(null,inst_40524);
var state_40568__$1 = (function (){var statearr_40606 = state_40568;
(statearr_40606[(16)] = inst_40522__$1);

(statearr_40606[(28)] = inst_40518);

return statearr_40606;
})();
if(inst_40525){
var statearr_40607_40683 = state_40568__$1;
(statearr_40607_40683[(1)] = (32));

} else {
var statearr_40608_40684 = state_40568__$1;
(statearr_40608_40684[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (44))){
var inst_40544 = (state_40568[(21)]);
var inst_40557 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40544);
var inst_40558 = cljs.core.pr_str.call(null,inst_40557);
var inst_40559 = [cljs.core.str("not required: "),cljs.core.str(inst_40558)].join('');
var inst_40560 = figwheel.client.utils.log.call(null,inst_40559);
var state_40568__$1 = state_40568;
var statearr_40609_40685 = state_40568__$1;
(statearr_40609_40685[(2)] = inst_40560);

(statearr_40609_40685[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (6))){
var inst_40463 = (state_40568[(2)]);
var state_40568__$1 = state_40568;
var statearr_40610_40686 = state_40568__$1;
(statearr_40610_40686[(2)] = inst_40463);

(statearr_40610_40686[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (28))){
var inst_40488 = (state_40568[(26)]);
var inst_40515 = (state_40568[(2)]);
var inst_40516 = cljs.core.not_empty.call(null,inst_40488);
var state_40568__$1 = (function (){var statearr_40611 = state_40568;
(statearr_40611[(29)] = inst_40515);

return statearr_40611;
})();
if(cljs.core.truth_(inst_40516)){
var statearr_40612_40687 = state_40568__$1;
(statearr_40612_40687[(1)] = (29));

} else {
var statearr_40613_40688 = state_40568__$1;
(statearr_40613_40688[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (25))){
var inst_40486 = (state_40568[(25)]);
var inst_40502 = (state_40568[(2)]);
var inst_40503 = cljs.core.not_empty.call(null,inst_40486);
var state_40568__$1 = (function (){var statearr_40614 = state_40568;
(statearr_40614[(30)] = inst_40502);

return statearr_40614;
})();
if(cljs.core.truth_(inst_40503)){
var statearr_40615_40689 = state_40568__$1;
(statearr_40615_40689[(1)] = (26));

} else {
var statearr_40616_40690 = state_40568__$1;
(statearr_40616_40690[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (34))){
var inst_40537 = (state_40568[(2)]);
var state_40568__$1 = state_40568;
if(cljs.core.truth_(inst_40537)){
var statearr_40617_40691 = state_40568__$1;
(statearr_40617_40691[(1)] = (38));

} else {
var statearr_40618_40692 = state_40568__$1;
(statearr_40618_40692[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (17))){
var state_40568__$1 = state_40568;
var statearr_40619_40693 = state_40568__$1;
(statearr_40619_40693[(2)] = recompile_dependents);

(statearr_40619_40693[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (3))){
var state_40568__$1 = state_40568;
var statearr_40620_40694 = state_40568__$1;
(statearr_40620_40694[(2)] = null);

(statearr_40620_40694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (12))){
var inst_40459 = (state_40568[(2)]);
var state_40568__$1 = state_40568;
var statearr_40621_40695 = state_40568__$1;
(statearr_40621_40695[(2)] = inst_40459);

(statearr_40621_40695[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (2))){
var inst_40421 = (state_40568[(13)]);
var inst_40428 = cljs.core.seq.call(null,inst_40421);
var inst_40429 = inst_40428;
var inst_40430 = null;
var inst_40431 = (0);
var inst_40432 = (0);
var state_40568__$1 = (function (){var statearr_40622 = state_40568;
(statearr_40622[(7)] = inst_40431);

(statearr_40622[(8)] = inst_40429);

(statearr_40622[(9)] = inst_40430);

(statearr_40622[(10)] = inst_40432);

return statearr_40622;
})();
var statearr_40623_40696 = state_40568__$1;
(statearr_40623_40696[(2)] = null);

(statearr_40623_40696[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (23))){
var inst_40488 = (state_40568[(26)]);
var inst_40490 = (state_40568[(23)]);
var inst_40485 = (state_40568[(24)]);
var inst_40486 = (state_40568[(25)]);
var inst_40482 = (state_40568[(19)]);
var inst_40493 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40495 = (function (){var all_files = inst_40482;
var res_SINGLEQUOTE_ = inst_40485;
var res = inst_40486;
var files_not_loaded = inst_40488;
var dependencies_that_loaded = inst_40490;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40488,inst_40490,inst_40485,inst_40486,inst_40482,inst_40493,state_val_40569,c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40494){
var map__40624 = p__40494;
var map__40624__$1 = ((((!((map__40624 == null)))?((((map__40624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40624):map__40624);
var request_url = cljs.core.get.call(null,map__40624__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40488,inst_40490,inst_40485,inst_40486,inst_40482,inst_40493,state_val_40569,c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40496 = cljs.core.reverse.call(null,inst_40490);
var inst_40497 = cljs.core.map.call(null,inst_40495,inst_40496);
var inst_40498 = cljs.core.pr_str.call(null,inst_40497);
var inst_40499 = figwheel.client.utils.log.call(null,inst_40498);
var state_40568__$1 = (function (){var statearr_40626 = state_40568;
(statearr_40626[(31)] = inst_40493);

return statearr_40626;
})();
var statearr_40627_40697 = state_40568__$1;
(statearr_40627_40697[(2)] = inst_40499);

(statearr_40627_40697[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (35))){
var state_40568__$1 = state_40568;
var statearr_40628_40698 = state_40568__$1;
(statearr_40628_40698[(2)] = true);

(statearr_40628_40698[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (19))){
var inst_40472 = (state_40568[(12)]);
var inst_40478 = figwheel.client.file_reloading.expand_files.call(null,inst_40472);
var state_40568__$1 = state_40568;
var statearr_40629_40699 = state_40568__$1;
(statearr_40629_40699[(2)] = inst_40478);

(statearr_40629_40699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (11))){
var state_40568__$1 = state_40568;
var statearr_40630_40700 = state_40568__$1;
(statearr_40630_40700[(2)] = null);

(statearr_40630_40700[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (9))){
var inst_40461 = (state_40568[(2)]);
var state_40568__$1 = state_40568;
var statearr_40631_40701 = state_40568__$1;
(statearr_40631_40701[(2)] = inst_40461);

(statearr_40631_40701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (5))){
var inst_40431 = (state_40568[(7)]);
var inst_40432 = (state_40568[(10)]);
var inst_40434 = (inst_40432 < inst_40431);
var inst_40435 = inst_40434;
var state_40568__$1 = state_40568;
if(cljs.core.truth_(inst_40435)){
var statearr_40632_40702 = state_40568__$1;
(statearr_40632_40702[(1)] = (7));

} else {
var statearr_40633_40703 = state_40568__$1;
(statearr_40633_40703[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (14))){
var inst_40442 = (state_40568[(22)]);
var inst_40451 = cljs.core.first.call(null,inst_40442);
var inst_40452 = figwheel.client.file_reloading.eval_body.call(null,inst_40451,opts);
var inst_40453 = cljs.core.next.call(null,inst_40442);
var inst_40429 = inst_40453;
var inst_40430 = null;
var inst_40431 = (0);
var inst_40432 = (0);
var state_40568__$1 = (function (){var statearr_40634 = state_40568;
(statearr_40634[(7)] = inst_40431);

(statearr_40634[(8)] = inst_40429);

(statearr_40634[(9)] = inst_40430);

(statearr_40634[(32)] = inst_40452);

(statearr_40634[(10)] = inst_40432);

return statearr_40634;
})();
var statearr_40635_40704 = state_40568__$1;
(statearr_40635_40704[(2)] = null);

(statearr_40635_40704[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (45))){
var state_40568__$1 = state_40568;
var statearr_40636_40705 = state_40568__$1;
(statearr_40636_40705[(2)] = null);

(statearr_40636_40705[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (26))){
var inst_40488 = (state_40568[(26)]);
var inst_40490 = (state_40568[(23)]);
var inst_40485 = (state_40568[(24)]);
var inst_40486 = (state_40568[(25)]);
var inst_40482 = (state_40568[(19)]);
var inst_40505 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40507 = (function (){var all_files = inst_40482;
var res_SINGLEQUOTE_ = inst_40485;
var res = inst_40486;
var files_not_loaded = inst_40488;
var dependencies_that_loaded = inst_40490;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40488,inst_40490,inst_40485,inst_40486,inst_40482,inst_40505,state_val_40569,c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40506){
var map__40637 = p__40506;
var map__40637__$1 = ((((!((map__40637 == null)))?((((map__40637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40637):map__40637);
var namespace = cljs.core.get.call(null,map__40637__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40637__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40488,inst_40490,inst_40485,inst_40486,inst_40482,inst_40505,state_val_40569,c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40508 = cljs.core.map.call(null,inst_40507,inst_40486);
var inst_40509 = cljs.core.pr_str.call(null,inst_40508);
var inst_40510 = figwheel.client.utils.log.call(null,inst_40509);
var inst_40511 = (function (){var all_files = inst_40482;
var res_SINGLEQUOTE_ = inst_40485;
var res = inst_40486;
var files_not_loaded = inst_40488;
var dependencies_that_loaded = inst_40490;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40488,inst_40490,inst_40485,inst_40486,inst_40482,inst_40505,inst_40507,inst_40508,inst_40509,inst_40510,state_val_40569,c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40488,inst_40490,inst_40485,inst_40486,inst_40482,inst_40505,inst_40507,inst_40508,inst_40509,inst_40510,state_val_40569,c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40512 = setTimeout(inst_40511,(10));
var state_40568__$1 = (function (){var statearr_40639 = state_40568;
(statearr_40639[(33)] = inst_40505);

(statearr_40639[(34)] = inst_40510);

return statearr_40639;
})();
var statearr_40640_40706 = state_40568__$1;
(statearr_40640_40706[(2)] = inst_40512);

(statearr_40640_40706[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (16))){
var state_40568__$1 = state_40568;
var statearr_40641_40707 = state_40568__$1;
(statearr_40641_40707[(2)] = reload_dependents);

(statearr_40641_40707[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (38))){
var inst_40522 = (state_40568[(16)]);
var inst_40539 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40522);
var state_40568__$1 = state_40568;
var statearr_40642_40708 = state_40568__$1;
(statearr_40642_40708[(2)] = inst_40539);

(statearr_40642_40708[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (30))){
var state_40568__$1 = state_40568;
var statearr_40643_40709 = state_40568__$1;
(statearr_40643_40709[(2)] = null);

(statearr_40643_40709[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (10))){
var inst_40442 = (state_40568[(22)]);
var inst_40444 = cljs.core.chunked_seq_QMARK_.call(null,inst_40442);
var state_40568__$1 = state_40568;
if(inst_40444){
var statearr_40644_40710 = state_40568__$1;
(statearr_40644_40710[(1)] = (13));

} else {
var statearr_40645_40711 = state_40568__$1;
(statearr_40645_40711[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (18))){
var inst_40476 = (state_40568[(2)]);
var state_40568__$1 = state_40568;
if(cljs.core.truth_(inst_40476)){
var statearr_40646_40712 = state_40568__$1;
(statearr_40646_40712[(1)] = (19));

} else {
var statearr_40647_40713 = state_40568__$1;
(statearr_40647_40713[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (42))){
var state_40568__$1 = state_40568;
var statearr_40648_40714 = state_40568__$1;
(statearr_40648_40714[(2)] = null);

(statearr_40648_40714[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (37))){
var inst_40534 = (state_40568[(2)]);
var state_40568__$1 = state_40568;
var statearr_40649_40715 = state_40568__$1;
(statearr_40649_40715[(2)] = inst_40534);

(statearr_40649_40715[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40569 === (8))){
var inst_40429 = (state_40568[(8)]);
var inst_40442 = (state_40568[(22)]);
var inst_40442__$1 = cljs.core.seq.call(null,inst_40429);
var state_40568__$1 = (function (){var statearr_40650 = state_40568;
(statearr_40650[(22)] = inst_40442__$1);

return statearr_40650;
})();
if(inst_40442__$1){
var statearr_40651_40716 = state_40568__$1;
(statearr_40651_40716[(1)] = (10));

} else {
var statearr_40652_40717 = state_40568__$1;
(statearr_40652_40717[(1)] = (11));

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
}
});})(c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34221__auto__,c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34222__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34222__auto____0 = (function (){
var statearr_40656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40656[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34222__auto__);

(statearr_40656[(1)] = (1));

return statearr_40656;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34222__auto____1 = (function (state_40568){
while(true){
var ret_value__34223__auto__ = (function (){try{while(true){
var result__34224__auto__ = switch__34221__auto__.call(null,state_40568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34224__auto__;
}
break;
}
}catch (e40657){if((e40657 instanceof Object)){
var ex__34225__auto__ = e40657;
var statearr_40658_40718 = state_40568;
(statearr_40658_40718[(5)] = ex__34225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40719 = state_40568;
state_40568 = G__40719;
continue;
} else {
return ret_value__34223__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34222__auto__ = function(state_40568){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34222__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34222__auto____1.call(this,state_40568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34222__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34222__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34222__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34222__auto__;
})()
;})(switch__34221__auto__,c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34238__auto__ = (function (){var statearr_40659 = f__34237__auto__.call(null);
(statearr_40659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34236__auto__);

return statearr_40659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34238__auto__);
});})(c__34236__auto__,map__40414,map__40414__$1,opts,before_jsload,on_jsload,reload_dependents,map__40415,map__40415__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34236__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40722,link){
var map__40725 = p__40722;
var map__40725__$1 = ((((!((map__40725 == null)))?((((map__40725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40725):map__40725);
var file = cljs.core.get.call(null,map__40725__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__40725,map__40725__$1,file){
return (function (p1__40720_SHARP_,p2__40721_SHARP_){
if(cljs.core._EQ_.call(null,p1__40720_SHARP_,p2__40721_SHARP_)){
return p1__40720_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__40725,map__40725__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40731){
var map__40732 = p__40731;
var map__40732__$1 = ((((!((map__40732 == null)))?((((map__40732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40732):map__40732);
var match_length = cljs.core.get.call(null,map__40732__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40732__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40727_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40727_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args40734 = [];
var len__30343__auto___40737 = arguments.length;
var i__30344__auto___40738 = (0);
while(true){
if((i__30344__auto___40738 < len__30343__auto___40737)){
args40734.push((arguments[i__30344__auto___40738]));

var G__40739 = (i__30344__auto___40738 + (1));
i__30344__auto___40738 = G__40739;
continue;
} else {
}
break;
}

var G__40736 = args40734.length;
switch (G__40736) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40734.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40741_SHARP_,p2__40742_SHARP_){
return cljs.core.assoc.call(null,p1__40741_SHARP_,cljs.core.get.call(null,p2__40742_SHARP_,key),p2__40742_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__40743){
var map__40746 = p__40743;
var map__40746__$1 = ((((!((map__40746 == null)))?((((map__40746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40746):map__40746);
var f_data = map__40746__$1;
var file = cljs.core.get.call(null,map__40746__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40748,files_msg){
var map__40755 = p__40748;
var map__40755__$1 = ((((!((map__40755 == null)))?((((map__40755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40755):map__40755);
var opts = map__40755__$1;
var on_cssload = cljs.core.get.call(null,map__40755__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__40757_40761 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__40758_40762 = null;
var count__40759_40763 = (0);
var i__40760_40764 = (0);
while(true){
if((i__40760_40764 < count__40759_40763)){
var f_40765 = cljs.core._nth.call(null,chunk__40758_40762,i__40760_40764);
figwheel.client.file_reloading.reload_css_file.call(null,f_40765);

var G__40766 = seq__40757_40761;
var G__40767 = chunk__40758_40762;
var G__40768 = count__40759_40763;
var G__40769 = (i__40760_40764 + (1));
seq__40757_40761 = G__40766;
chunk__40758_40762 = G__40767;
count__40759_40763 = G__40768;
i__40760_40764 = G__40769;
continue;
} else {
var temp__4657__auto___40770 = cljs.core.seq.call(null,seq__40757_40761);
if(temp__4657__auto___40770){
var seq__40757_40771__$1 = temp__4657__auto___40770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40757_40771__$1)){
var c__30084__auto___40772 = cljs.core.chunk_first.call(null,seq__40757_40771__$1);
var G__40773 = cljs.core.chunk_rest.call(null,seq__40757_40771__$1);
var G__40774 = c__30084__auto___40772;
var G__40775 = cljs.core.count.call(null,c__30084__auto___40772);
var G__40776 = (0);
seq__40757_40761 = G__40773;
chunk__40758_40762 = G__40774;
count__40759_40763 = G__40775;
i__40760_40764 = G__40776;
continue;
} else {
var f_40777 = cljs.core.first.call(null,seq__40757_40771__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_40777);

var G__40778 = cljs.core.next.call(null,seq__40757_40771__$1);
var G__40779 = null;
var G__40780 = (0);
var G__40781 = (0);
seq__40757_40761 = G__40778;
chunk__40758_40762 = G__40779;
count__40759_40763 = G__40780;
i__40760_40764 = G__40781;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__40755,map__40755__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__40755,map__40755__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1465505515010