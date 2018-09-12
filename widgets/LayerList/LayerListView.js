// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/LayerList/LayerListView.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"layer-list-operations" data-dojo-attach-point\x3d"layerListOperations"\x3e\r\n    \x3c!--div class\x3d"setting-image jimu-icon jimu-icon-setting jimu-state-disabled"\x3e\x3c/div--\x3e\r\n  \x3c/div\x3e\r\n  \x3ctable class\x3d"layer-list-table"\x3e\r\n    \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"layerListTable"\x3e\x3c/tbody\x3e\r\n    \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"tableListTable"\x3e\x3c/tbody\x3e       \r\n  \x3c/table\x3e\r\n\x3c/div\x3e\r\n'}});
define("dijit/_WidgetBase dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/on dojo/query jimu/dijit/CheckBox jimu/dijit/DropMenu jimu/dijit/LoadingShelter ./PopupMenu dijit/_TemplatedMixin dojo/text!./LayerListView.html dojo/dom-class dojo/dom-style ./NlsStrings".split(" "),function(t,u,l,h,g,p,k,v,w,x,y,z,A,m,n,B){return u([t,z],{templateString:A,_currentSelectedLayerRowNode:null,operationsDropMenu:null,_layerNodeHandles:null,_layerDomNodeStorage:null,postMixInProperties:function(){this.inherited(arguments);
this.nls=B.value;this._layerDomNodeStorage={}},postCreate:function(){this.refresh();this._initOperations()},refresh:function(){this._removeLayerNodes();h.forEach(this.operLayerInfos.getLayerInfoArray(),function(a){this.drawListNode(a,0,this.layerListTable)},this);h.forEach(this.operLayerInfos.getTableInfoArray(),function(a){this.drawListNode(a,0,this.tableListTable)},this)},drawListNode:function(a,b,c,e){var d;this.isLayerHiddenInWidget(a)||(d=this._layerDomNodeStorage[a.getObjectId()],(a.isRootLayer()||
a.isTable)&&d?(g.place(d.layerTrNode,c,e),g.place(d.layerContentTrNode,c,e)):0===a.newSubLayers.length?(d=this.addLayerNode(a,b,c,e),this.config.showLegend?this.addLegendNode(a,b,d.subNode):(a=k(".showLegend-div",d.layerTrNode)[0])&&m.add(a,"hidden")):(d=this.addLayerNode(a,b,c,e),h.forEach(a.newSubLayers,l.hitch(this,function(a,b){this.drawListNode(b,a+1,d.subNode)},b))))},addLayerNode:function(a,b,c,e){var d,f,h,k,m,q,r=a.getRootLayerInfo();if(a.isRootLayer()||a.isTable)this._layerDomNodeStorage[a.getObjectId()]=
{layerTrNode:null,layerContentTrNode:null,layerNodeEventHandles:[],layerNodeReferredDijits:[]};d=g.create("tr",{"class":"jimu-widget-row layer-row  layer-tr-node-"+a.id,layerTrNodeId:a.id});g.place(d,c,e);f=g.create("td",{"class":"col col1"},d);for(k=0;k<b;k++)g.create("div",{"class":"begin-blank-div jimu-float-leading",innerHTML:""},f);q=g.create("div",{"class":"showLegend-div jimu-float-leading",imageShowLegendDivId:a.id},f);h=g.create("div",{"class":"div-select jimu-float-leading"},f);k=new v({checked:a.isVisible(),
"class":"visible-checkbox-"+a.id});g.place(k.domNode,h);m=g.create("div",{"class":"noLegend-div jimu-float-leading"},f);g.create("img",{"class":"noLegend-image",src:this.layerListWidget.folderUrl+(a.isTable?"images/table.png":"images/noLegend.png"),alt:"l"},m);if(a.isTiled||a.isTable)n.set(q,"display","none"),n.set(h,"display","none"),n.set(m,"display","block");n.set(f,"width",12*b+40+"px");b=g.create("td",{"class":"col col2"},d);f="";try{a.isInScale()||(f="grayed-title")}catch(C){console.warn(C.message)}g.create("div",
{innerHTML:a.title,"class":"layer-title-div-"+a.id+" div-content jimu-float-leading "+f},b);f=g.create("td",{"class":"col col3"},d);h=this.hasContentMenu()?"display: block":"display: none";f=g.create("div",{"class":"layers-list-popupMenu-div",style:h},f);h=g.create("tr",{"class":"",layerContentTrNodeId:a.id});g.place(h,c,e);c=g.create("td",{"class":"",colspan:"3"},h);c=g.create("table",{"class":"layer-sub-node",subNodeId:a.id},c);e=this.own(p(b,"click",l.hitch(this,this._onRowTrClick,a,q,d,c)));this._storeLayerNodeEventHandle(r,
e[0]);e=this.own(p(q,"click",l.hitch(this,this._onRowTrClick,a,q,d,c)));this._storeLayerNodeEventHandle(r,e[0]);e=this.own(p(k.domNode,"click",l.hitch(this,this._onCkSelectNodeClick,a,k)));this._storeLayerNodeEventHandle(r,e[0]);e=this.own(p(f,"click",l.hitch(this,this._onPopupMenuClick,a,f,d)));this._storeLayerNodeEventHandle(r,e[0]);if(a.isRootLayer()||a.isTable)this._layerDomNodeStorage[a.getObjectId()].layerTrNode=d,this._layerDomNodeStorage[a.getObjectId()].layerContentTrNode=h;return{layerTrNode:d,
subNode:c}},hasContentMenu:function(){var a=!1,b;if(this.config.contextMenu)for(b in this.config.contextMenu)this.config.contextMenu.hasOwnProperty(b)&&"function"!==typeof this.config.contextMenu[b]&&(a=a||this.config.contextMenu[b]);else a=!0;return a},addLegendNode:function(a,b,c){c=g.create("tr",{"class":"legend-node-tr"},c);c=g.create("td",{"class":"legend-node-td"},c);try{var e=a.createLegendsNode();n.set(e,"font-size",12*(b+1)+"px");g.place(e,c)}catch(d){console.error(d)}},redrawLegends:function(a){var b=
k("div[legendsDivId\x3d'"+a.id+"']",this.layerListTable)[0];b&&(b._legendDijit&&b._legendDijit.destroy&&b._legendDijit.destroy(),a.drawLegends(b,this.layerListWidget.appConfig.portalUrl))},_storeLayerNodeEventHandle:function(a,b){(a=this._layerDomNodeStorage[a.getObjectId()])&&a.layerNodeEventHandles.push(b)},_storeLayerNodeDijit:function(a,b){(a=this._layerDomNodeStorage[a.getObjectId()])&&a.layerNodeReferredDijits.push(b)},_clearLayerDomNodeStorage:function(){var a=this.operLayerInfos.getLayerInfoArray(),
b=this.operLayerInfos.getTableInfoArray(),a=a.concat(b),c;for(c in this._layerDomNodeStorage)this._layerDomNodeStorage.hasOwnProperty(c)&&"function"!==typeof this._layerDomNodeStorage[c]&&(b=h.some(a,function(a){if(a.getObjectId().toString()===c)return!0},this),b||(h.forEach(this._layerDomNodeStorage[c].layerNodeEventHandles,function(a){a.remove()},this),h.forEach(this._layerDomNodeStorage[c].layerNodeReferredDijits,function(a){a.destroy()},this),g.destroy(this._layerDomNodeStorage[c].layerTrNode),
g.destroy(this._layerDomNodeStorage[c].layerContentTrNode),delete this._layerDomNodeStorage[c]))},_removeLayerNodes:function(){var a,b;this._clearLayerDomNodeStorage();for(var c in this._layerDomNodeStorage)this._layerDomNodeStorage.hasOwnProperty(c)&&"function"!==typeof this._layerDomNodeStorage[c]&&(a=this._layerDomNodeStorage[c],a.parentNode&&a.layerTrNode&&((b=a.layerTrNode.parentNode)&&b.removeChild(a.layerTrNode),(b=a.layerContentTrNode.parentNode)&&b.removeChild(a.layerContentTrNode)))},_foldSwitch:function(a,
b,c){return"none"===n.get(c,"display")?this._foldOrUnfoldLayer(a,!1,b,c):this._foldOrUnfoldLayer(a,!0,b,c)},_foldOrUnfoldLayer:function(a,b,c,e){var d=d?c:k("div[imageShowLegendDivId\x3d'"+a.id+"']",this.layerListTable)[0],f=f?e:k("table[subNodeId\x3d'"+a.id+"']",this.layerListTable)[0];c=null;d&&f&&(b?(n.set(f,"display","none"),m.remove(d,"unfold"),c=!0):(n.set(f,"display","table"),m.add(d,"unfold"),c=!1,a.isLeaf()&&(b=k(".legends-div",f)[0],d=k(".legends-loading-img",b)[0],b&&d&&a.drawLegends(b,
this.layerListWidget.appConfig.portalUrl))));return c},_foldOrUnfoldLayers:function(a,b){h.forEach(a,function(a){this._foldOrUnfoldLayer(a,b)},this)},_onCkSelectNodeClick:function(a,b,c){c.ctrlKey||c.metaKey?a.isRootLayer()?this.turnAllRootLayers(b.checked):this.turnAllSameLevelLayers(a,b.checked):(this.layerListWidget._denyLayerInfosIsVisibleChangedResponseOneTime=!0,a.setTopLayerVisible(b.checked));c.stopPropagation()},_onPopupMenuClick:function(a,b,c,e){var d=a.getRootLayerInfo(),f=b.popupMenu;
f||(f=(new y({_layerInfo:a,box:this.layerListWidget.domNode.parentNode,popupMenuNode:b,layerListWidget:this.layerListWidget,_config:this.config})).placeAt(b),b.popupMenu=f,this._storeLayerNodeDijit(d,f),a=this.own(p(f,"onMenuClick",l.hitch(this,this._onPopupMenuItemClick,a,f))),this._storeLayerNodeEventHandle(d,a[0]));this._changeSelectedLayerRow(c);f&&"opened"===f.state?f.closeDropMenu():(this._hideCurrentPopupMenu(),f&&(this.currentPopupMenu=f,f.openDropMenu()));this.operationsDropMenu&&"opened"===
this.operationsDropMenu.state&&this.operationsDropMenu.closeDropMenu();e.stopPropagation()},_hideCurrentPopupMenu:function(){this.currentPopupMenu&&"opened"===this.currentPopupMenu.state&&this.currentPopupMenu.closeDropMenu()},_onLayerListWidgetPaneClick:function(){this.operationsDropMenu&&this.operationsDropMenu.closeDropMenu()},_onRowTrClick:function(a,b,c,e,d){this._changeSelectedLayerRow(c);b=this._foldSwitch(a,b,e);if(d.ctrlKey||d.metaKey)a.isRootLayer()?this.foldOrUnfoldAllRootLayers(b):this.foldOrUnfoldSameLevelLayers(a,
b)},_changeSelectedLayerRow:function(a){this._currentSelectedLayerRowNode&&this._currentSelectedLayerRowNode===a||(this._currentSelectedLayerRowNode&&m.remove(this._currentSelectedLayerRowNode,"jimu-widget-row-selected"),m.add(a,"jimu-widget-row-selected"),this._currentSelectedLayerRowNode=a)},_onPopupMenuItemClick:function(a,b,c,e){e={itemKey:c.key,extraData:e,layerListWidget:this.layerListWidget,layerListView:this};"transparency"===c.key?"none"===n.get(b.transparencyDiv,"display")?b.showTransNode(a.getOpacity()):
b.hideTransNode():(a=b.popupMenuInfo.onPopupMenuClick(e),a.closeMenu&&b.closeDropMenu())},_exchangeLayerTrNode:function(a,b){a=k("tr[layerTrNodeId\x3d'"+a.id+"']",this.layerListTable)[0];var c=k("tr[layerTrNodeId\x3d'"+b.id+"']",this.layerListTable)[0];b=k("tr[layerContentTrNodeId\x3d'"+b.id+"']",this.layerListTable)[0];a&&c&&b&&(this.layerListTable.removeChild(c),this.layerListTable.insertBefore(c,a),this.layerListTable.removeChild(b),this.layerListTable.insertBefore(b,a))},_getMovedSteps:function(a,
b){var c=1,e,d=this.operLayerInfos.getLayerInfoArray();h.forEach(d,function(b,c){a.id===b.id&&(e=c)},this);if("moveup"===b)for(;!d[e].isFirst;)if(e--,this.isLayerHiddenInWidget(d[e])&&!d[e].isFirst)c++;else break;else for(;!d[e].isLast;)if(e++,this.isLayerHiddenInWidget(d[e])&&!d[e].isLast)c++;else break;return c},moveUpLayer:function(a){var b=this._getMovedSteps(a,"moveup");this.layerListWidget._denyLayerInfosReorderResponseOneTime=!0;(b=this.operLayerInfos.moveUpLayer(a,b))&&this._exchangeLayerTrNode(b,
a)},moveDownLayer:function(a){var b=this._getMovedSteps(a,"movedown");this.layerListWidget._denyLayerInfosReorderResponseOneTime=!0;(b=this.operLayerInfos.moveDownLayer(a,b))&&this._exchangeLayerTrNode(a,b)},isLayerHiddenInWidget:function(a){var b=!1,c=a;if(a&&this.config.layerOptions&&void 0!==this.config.layerOptions[a.id])for(;c&&!(b=b||!this.config.layerOptions[c.id].display);)c=c.parentLayerInfo;else b=!1;return b},isFirstDisplayedLayerInfo:function(a){var b,c;a.isFirst||!a.isRootLayer()?b=!0:
(b=this._getMovedSteps(a,"moveup"),c=this.operLayerInfos.getLayerInfoArray(),a=this.operLayerInfos._getTopLayerInfoIndexById(a.id),b=this.isLayerHiddenInWidget(c[a-b])?!0:!1);return b},isLastDisplayedLayerInfo:function(a){var b,c;a.isLast||!a.isRootLayer()?b=!0:(b=this._getMovedSteps(a,"movedown"),c=this.operLayerInfos.getLayerInfoArray(),a=this.operLayerInfos._getTopLayerInfoIndexById(a.id),b=this.isLayerHiddenInWidget(c[a+b])?!0:!1);return b},_initOperations:function(){this.operationsDropMenu=(new w({items:[{key:"turnAllLayersOn",
label:this.nls.turnAllLayersOn},{key:"turnAllLayersOff",label:this.nls.turnAllLayersOff},{key:"separator"},{key:"expandAllLayers",label:this.nls.expandAllLayers},{key:"collapseAlllayers",label:this.nls.collapseAlllayers}],box:this.layerListWidget.domNode.parentNode})).placeAt(this.layerListOperations);var a=k("div.jimu-dropmenu \x3e div:first-child",this.layerListOperations)[0];a&&(m.remove(a,["jimu-icon-btn","popup-menu-button"]),m.add(a,["feature-action","icon-operation"]));this.operationsDropMenu.btnNode&&
this.own(p(this.operationsDropMenu.btnNode,"click",l.hitch(this,this._onLayerListOperationsClick)));this.own(p(this.operationsDropMenu,"onMenuClick",l.hitch(this,this._onOperationsMenuItemClick)));this.operationsDropMenuLoading=(new x({hidden:!0})).placeAt(this.operationsDropMenu.domNode)},_onLayerListOperationsClick:function(){this._hideCurrentPopupMenu()},_onOperationsMenuItemClick:function(a){switch(a.key){case "turnAllLayersOn":this.turnAllRootLayers(!0);break;case "turnAllLayersOff":this.turnAllRootLayers(!1);
break;case "expandAllLayers":this.foldOrUnfoldAllLayers(!1);break;case "collapseAlllayers":this.foldOrUnfoldAllLayers(!0)}},turnAllRootLayers:function(a){var b=this.operLayerInfos.getLayerInfoArray();h.forEach(b,function(b){this.isLayerHiddenInWidget(b)||b.setTopLayerVisible(a)},this)},turnAllSameLevelLayers:function(a,b){var c={},e=a.getRootLayerInfo();e.traversal(l.hitch(this,function(d){d.parentLayerInfo&&d.parentLayerInfo.id===a.parentLayerInfo.id&&!this.isLayerHiddenInWidget(d)?c[d.id]={visible:b}:
c[d.id]={visible:d.isVisible()}}));e.resetLayerObjectVisibility(c)},foldOrUnfoldAllRootLayers:function(a){var b=h.filter(this.operLayerInfos.getLayerInfoArray(),function(a){return!this.isLayerHiddenInWidget(a)},this);this._foldOrUnfoldLayers(b,a)},foldOrUnfoldSameLevelLayers:function(a,b){a.parentLayerInfo&&(a=h.filter(a.parentLayerInfo.getSubLayers(),function(a){return!this.isLayerHiddenInWidget(a)},this),this._foldOrUnfoldLayers(a,b))},foldOrUnfoldAllLayers:function(a){var b=[],c=[];this.operationsDropMenuLoading.show();
this.operLayerInfos.traversal(l.hitch(this,function(a){this.isLayerHiddenInWidget(a)||(a.isRootLayer()?c.push(a):b.push(a))}));var b=c.concat(b),e=0,d=b.length;setTimeout(l.hitch(this,function(){if(e<d){var c=b.slice(e,e+50);this._foldOrUnfoldLayers(c,a);e+=50;setTimeout(l.hitch(this,arguments.callee),60)}else this.operationsDropMenuLoading.hide()}),60)}})});