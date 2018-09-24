// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/FeatureSetChooserForMultipleLayers.html":'\x3cdiv class\x3d"jimu-not-selectable"\x3e\r\n  \x3cdiv class\x3d"draw-item-btn"\x3e\r\n    \x3cdiv class\x3d"current-draw-item" data-dojo-attach-point\x3d"currentDrawItem"\x3e\r\n      \x3cdiv class\x3d"btn-select" data-dojo-attach-point\x3d"btnSelect"\x3e\r\n        \x3cdiv class\x3d"labels"\x3e\r\n            \x3cdiv class\x3d"feature-action" data-dojo-attach-point\x3d"geoTypeIcon"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"select-text"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"arrow feature-action icon-drop-down" data-dojo-attach-event\x3d"click:_onArrowClicked"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"btn-clear" data-dojo-attach-point\x3d"btnClear"\x3e\r\n    \x3cdiv class\x3d"feature-action icon-clear-selection"\x3e\x3c/div\x3e\x3cdiv class\x3d"clear-text"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dojo/sniff dojo/mouse dojo/query dojo/Evented dojo/_base/html dojo/_base/lang dojo/_base/array dojo/promise/all dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/FeatureSetChooserForMultipleLayers.html dijit/popup dijit/TooltipDialog jimu/utils jimu/dijit/DrawBox jimu/dijit/_FeatureSetChooserCore jimu/SelectionManager jimu/dijit/FeatureActionPopupMenu".split(" "),function(d,w,m,h,n,b,c,e,p,x,y,z,A,B,q,r,g,C,D,E,F){return x([y,
z,A,n],{baseClass:"jimu-multiple-layers-featureset-chooser",declaredClass:"jimu.dijit.FeatureSetChooserForMultipleLayers",templateString:B,drawBox:null,_instances:null,_tooltipDialogTimeoutId1:-1,_tooltipDialogClientX1:-1,_tooltipDialogTimeoutId2:-1,_tooltipDialogClientX2:-1,_tooltipTimeout:1E3,_currentGeoTypeInfo:null,_geoTypeInfos:null,map:null,updateSelection:!1,fullyWithin:!1,geoTypes:null,actions:null,postMixInProperties:function(){this.inherited(arguments);this.nls=window.jimuNls.featureSetChooser;
var a="POINT EXTENT POLYGON CIRCLE POLYLINE FREEHAND_POLYGON".split(" ");this.geoTypes&&0<this.geoTypes.length&&(this.geoTypes=e.filter(this.geoTypes,c.hitch(this,function(c){return 0<=a.indexOf(c)})));this.geoTypes&&0!==this.geoTypes.length||(this.geoTypes=["EXTENT"])},postCreate:function(){this.inherited(arguments);this._instances=[];this.popupMenu=F.getInstance();h(".select-text",this.domNode)[0].innerHTML=this.nls.select;h(".clear-text",this.domNode)[0].innerHTML=window.jimuNls.common.clear;this._initTooltipDialogs();
this._initDrawBox();this._geoTypeInfos=[];this.actions=[];0===this.geoTypes.length&&this.geoTypes.push("EXTENT");1===this.geoTypes.length?b.addClass(this.domNode,"single-geotype"):b.addClass(this.domNode,"multiple-geotypes");var a={POINT:["icon-select-by-point",this.nls.selectByPoint,this.drawBox.pointIcon],EXTENT:["icon-select-by-rect",this.nls.selectByRectangle,this.drawBox.extentIcon],POLYGON:["icon-select-by-polygon",this.nls.selectByPolygon,this.drawBox.polygonIcon],CIRCLE:["icon-select-by-circle",
this.nls.selectByCircle,this.drawBox.circleIcon],POLYLINE:["icon-select-by-line",this.nls.selectByLine,this.drawBox.polylineIcon],FREEHAND_POLYGON:["icon-select-by-freehand-polygon",this.nls.selectByFreehandPolygon,this.drawBox.freehandPolygonIcon]},l=-1;e.forEach("POINT EXTENT POLYGON CIRCLE POLYLINE FREEHAND_POLYGON".split(" "),c.hitch(this,function(b){var f=a[b];if(0<=this.geoTypes.indexOf(b)){var d={geoType:b,action:{iconClass:f[0],label:f[1],data:{}},dom:f[2]},f={iconClass:f[0],label:f[1],data:{},
onExecute:c.hitch(this,this._onDrawItemClicked,d)};this._geoTypeInfos.push(d);this.actions.push(f);"EXTENT"===b&&(l=this._geoTypeInfos.length-1)}}));this.own(d(this.btnSelect,"click",c.hitch(this,function(){g.simulateClickEvent(this._currentGeoTypeInfo.dom);this._hideDrawItems()})));0<=l?(this._setCurrentGeoInfo(this._geoTypeInfos[l]),b.addClass(this.geoTypeIcon,"icon-select-by-rect")):(this._setCurrentGeoInfo(this._geoTypeInfos[0]),b.addClass(this.geoTypeIcon,this._geoTypeInfos[0].action.iconClass));
this.deactivate()},_initTooltipDialogs:function(){var a=w("mac")?"\u2318":"Ctrl",l="- "+this.nls.newSelectionTip+" ("+this.nls.dragMouse+")",e="- "+this.nls.addSelectionTip+" (Shift+"+this.nls.dragBox+")",f="- "+this.nls.removeSelectionTip+" ("+a+"+"+this.nls.dragBox+")",g="- "+this.nls.newSelectionTip+" ("+this.nls.drawShap+")",n="- "+this.nls.addSelectionTip+" (Shift+"+this.nls.darw+")",p="- "+this.nls.removeSelectionTip+" ("+a+"+"+this.nls.darw+")",a=b.create("div",{innerHTML:'\x3cdiv class\x3d"title"\x3e\x3c/div\x3e\x3cdiv class\x3d"item new-selection-item"\x3e\x3c/div\x3e\x3cdiv class\x3d"item add-selection-item"\x3e\x3c/div\x3e\x3cdiv class\x3d"item remove-selection-item"\x3e\x3c/div\x3e',
"class":"dialog-content"}),k=h(".title",a)[0],t=h(".new-selection-item",a)[0],u=h(".add-selection-item",a)[0],v=h(".remove-selection-item",a)[0];this.tooltipDialog1=new r({content:a});b.addClass(this.tooltipDialog1.domNode,"jimu-multiple-layers-featureset-chooser-tooltipdialog");this.own(d(this.btnSelect,"mousemove",c.hitch(this,function(a){this._tooltipDialogClientX1=a.clientX})));this.own(d(this.btnSelect,m.enter,c.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId1);this._tooltipDialogTimeoutId1=
-1;this._tooltipDialogTimeoutId1=setTimeout(c.hitch(this,function(){if(this.tooltipDialog1){var a=this._currentGeoTypeInfo.geoType;"EXTENT"===a?(t.innerHTML=l,u.innerHTML=e,v.innerHTML=f,k.innerHTML=this.nls.selectByRectangle):(t.innerHTML=g,u.innerHTML=n,v.innerHTML=p,"POLYGON"===a?k.innerHTML=this.nls.selectByPolygon:"CIRCLE"===a?k.innerHTML=this.nls.selectByCircle:"POLYLINE"===a?k.innerHTML=this.nls.selectByLine:"FREEHAND_POLYGON"===a?k.innerHTML=this.nls.selectByFreehandPolygon:"POINT"===a&&(k.innerHTML=
this.nls.selectByPoint));q.open({parent:this.getParent(),popup:this.tooltipDialog1,around:this.btnSelect,position:["below"]});0<=this._tooltipDialogClientX1&&(this.tooltipDialog1.domNode.parentNode.style.left=this._tooltipDialogClientX1+"px")}}),this._tooltipTimeout)})));this.own(d(this.btnSelect,m.leave,c.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId1);this._tooltipDialogTimeoutId1=-1;this._hideTooltipDialog(this.tooltipDialog1)})));a=b.create("div",{innerHTML:this.nls.unselectAllSelectionTip,
"class":"dialog-content"});this.tooltipDialog2=new r({content:a});b.addClass(this.tooltipDialog2.domNode,"jimu-multiple-layers-featureset-chooser-tooltipdialog");this.own(d(this.btnClear,"mousemove",c.hitch(this,function(a){this._tooltipDialogClientX2=a.clientX})));this.own(d(this.btnClear,m.enter,c.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId2);this._tooltipDialogTimeoutId2=-1;this._tooltipDialogTimeoutId2=setTimeout(c.hitch(this,function(){this.tooltipDialog2&&(q.open({parent:this.getParent(),
popup:this.tooltipDialog2,around:this.btnClear,position:["below"]}),0<=this._tooltipDialogClientX2&&(this.tooltipDialog2.domNode.parentNode.style.left=this._tooltipDialogClientX2+"px"))}),this._tooltipTimeout)})));this.own(d(this.btnClear,m.leave,c.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId2);this._tooltipDialogTimeoutId2=-1;this._hideTooltipDialog(this.tooltipDialog2)})))},_onArrowClicked:function(a){a.stopPropagation();a=b.position(a.target);this._showDrawItems(a)},_setCurrentGeoInfo:function(a){var c=
this._currentGeoTypeInfo&&this._currentGeoTypeInfo.geoType;this._currentGeoTypeInfo&&b.removeClass(this.currentDrawItem,this._currentGeoTypeInfo.geoType);this._currentGeoTypeInfo=a;b.addClass(this.currentDrawItem,this._currentGeoTypeInfo.geoType);this.isActive()?c!==this._currentGeoTypeInfo.geoType&&g.simulateClickEvent(this._currentGeoTypeInfo.dom):g.simulateClickEvent(this._currentGeoTypeInfo.dom)},_showDrawItems:function(a){this.popupMenu.setActions(this.actions);this.popupMenu.markAsSelected(this._currentGeoTypeInfo.action);
this.popupMenu.show(a)},_hideDrawItems:function(){this.popupMenu.hide()},_onDrawItemClicked:function(a){this._hideDrawItems();this._setCurrentGeoInfo(a);b.removeClass(this.geoTypeIcon,"icon-select-by-point icon-select-by-circle icon-select-by-rect icon-select-by-polygon icon-select-by-line icon-select-by-freehand-polygon".split(" "));switch(a.geoType){case "POLYGON":b.addClass(this.geoTypeIcon,"icon-select-by-polygon");break;case "CIRCLE":b.addClass(this.geoTypeIcon,"icon-select-by-circle");break;
case "POLYLINE":b.addClass(this.geoTypeIcon,"icon-select-by-line");break;case "FREEHAND_POLYGON":b.addClass(this.geoTypeIcon,"icon-select-by-freehand-polygon");break;case "POINT":b.addClass(this.geoTypeIcon,"icon-select-by-point");break;default:b.addClass(this.geoTypeIcon,"icon-select-by-rect")}},_initDrawBox:function(){this.drawBox=new C({map:this.map,showClear:!0,keepOneGraphic:!0,deactivateAfterDrawing:!1,geoTypes:this.geoTypes});this.own(d(this.drawBox,"user-clear",c.hitch(this,this._onDrawBoxUserClear)));
this.own(d(this.drawBox,"draw-end",c.hitch(this,this._onDrawEnd)));this.own(d(this.drawBox,"draw-activate",c.hitch(this,function(){this.map.infoWindow.hide();b.addClass(this.currentDrawItem,"pressed");b.addClass(this.btnSelect,"selected")})));this.own(d(this.drawBox,"draw-deactivate",c.hitch(this,function(){b.removeClass(this.currentDrawItem,"pressed");b.removeClass(this.btnSelect,"selected")})));this.own(d(this.btnClear,"click",c.hitch(this,function(){g.simulateClickEvent(this.drawBox.btnClear)})))},
disable:function(){this.drawBox.disable();b.addClass(this.domNode,"disabled")},enable:function(){this.drawBox.enable();b.removeClass(this.domNode,"disabled")},isActive:function(){return this.drawBox.isActive()},activate:function(){if(!this.isActive()){var a=this._currentGeoTypeInfo;a||(a=this._geoTypeInfos[0]);this._setCurrentGeoInfo(a)}},deactivate:function(){this.drawBox.deactivate()},setFeatureLayers:function(a){var b=e.filter(this._instances,c.hitch(this,function(b){return 0>a.indexOf(b.featureLayer)}));
e.forEach(b,c.hitch(this,function(a){this._removeInstance(a)}));var d=e.map(this._instances,c.hitch(this,function(a){return a.featureLayer}));e.forEach(a,c.hitch(this,function(a){0>d.indexOf(a)&&this.addFeatureLayer(a)}))},addFeatureLayer:function(a){"esri.layers.FeatureLayer"!==a.declaredClass||this._findInstanceByLayer(a)||(a=new D({map:this.map,featureLayer:a,drawBox:this.drawBox,updateSelection:this.updateSelection,fullyWithin:this.fullyWithin}),this._instances.push(a))},removeFeatureLayer:function(a){"esri.layers.FeatureLayer"===
a.declaredClass&&(a=this._findInstanceByLayer(a))&&this._removeInstance(a)},setDisplayLayerVisibility:function(a,b){(a=E.getInstance().getDisplayLayer(a.id))&&(b?a.show():a.hide())},_removeInstance:function(a){if(a){var b=this._instances.indexOf(a);0<=b&&(a.destroy(),this._instances.splice(b,1))}},_findInstanceByLayer:function(a){var b=null;e.some(this._instances,c.hitch(this,function(c){return c.featureLayer===a?(b=c,!0):!1}));return b},clear:function(a){e.forEach(this._instances,c.hitch(this,function(b){b.clear(a)}))},
destroy:function(){this._hideTooltipDialog(this.tooltipDialog1);this._hideTooltipDialog(this.tooltipDialog2);e.forEach(this._instances,c.hitch(this,function(a){a.destroy()}));this._instances=[];this.drawBox&&this.drawBox.destroy();this.drawBox=null;this.inherited(arguments)},_hideTooltipDialog:function(a){a&&q.close(a)},_onDrawBoxUserClear:function(){this.clear(!0);this.emit("user-clear")},_onDrawEnd:function(){this.drawBox.clear();0<this._instances.length&&setTimeout(c.hitch(this,function(){if(0<
this._instances.length){this.emit("loading");this.disable();var a=e.map(this._instances,c.hitch(this,function(a){return a.getFeatures()}));p(a).always(c.hitch(this,function(){this.enable();this._currentGeoTypeInfo&&g.simulateClickEvent(this._currentGeoTypeInfo.dom);this.emit("unloading")}))}}),50)}})});