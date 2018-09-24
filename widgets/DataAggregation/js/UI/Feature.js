// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/DataAggregation/js/UI/templates/Feature.html":'\x3cdiv class\x3d"pad-left-5 no-select"\x3e\r\n\r\n  \x3c!-- Title table --\x3e\r\n  \x3ctable class\x3d"page-table display-none table-layout" cellpading\x3d"0" data-dojo-attach-point\x3d"featureTitleTable"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"panel-title-td"\x3e\r\n          \x3cdiv class\x3d"panel-title-text" data-dojo-attach-point\x3d"pageTitleDiv"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr class\x3d"bottom-border-bold task-instruction-row"\x3e\r\n        \x3ctd class\x3d"panel-title-hint-td"\x3e\r\n          \x3cdiv class\x3d"instruction" data-dojo-attach-point\x3d"pageHintDiv"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\r\n  \x3c!--Feature toolbar table--\x3e\r\n  \x3ctable class\x3d"page-table display-none table-layout" cellpading\x3d"0" data-dojo-attach-point\x3d"featureToolbarTable"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr class\x3d"bottom-border task-instruction-row"\x3e\r\n        \x3ctd data-dojo-attach-point\x3d"reviewRowRecordTd" class\x3d"pad-bottom-10 pad-top-10"\x3e\r\n          \x3cspan class\x3d"float-left main-text pad-right-10 display-none pad-left-5" data-dojo-attach-point\x3d"reviewText" style\x3d"line-height:30px;"\x3e${nls.review.item}\x3c/span\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"_duplicateFlag" class\x3d"pad-bottom-10 duplicate-flag"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"pad-bottom-10 pad-top-10 feature-toolbar-td"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"featureToolbar"\x3e\r\n\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\r\n  \x3c!--feature toggle table--\x3e\r\n  \x3ctable data-dojo-attach-point\x3d"featureToggleTable" class\x3d"page-table display-none table-layout" cellpading\x3d"0"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr class\x3d"bottom-border toggle-expand-row" data-dojo-attach-event\x3d"onclick:_toggleFeature"\x3e\r\n        \x3ctd colspan\x3d"2" class\x3d"field-control-td text-left field-row-width pad-left-5"\x3e\r\n          \x3cdiv class\x3d"font-size-med main-text float-left"\x3e\r\n            ${nls.review.feature}\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd style\x3d"width: 20px;" nowrap class\x3d"page-item-td-nav" data-dojo-attach-point\x3d"featureTd"\x3e\r\n          \x3cdiv class\x3d"float-right bg-img-toggle bg-toggle-down-img margin-left-5" data-dojo-attach-point\x3d"toggleFeature"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\r\n  \x3cdiv data-dojo-attach-point\x3d"featureInformation" class\x3d"display-none"\x3e\r\n\r\n    \x3c!--feature controls table--\x3e\r\n    \x3ctable data-dojo-attach-point\x3d"featureTable" class\x3d"page-table display-none table-layout" cellpading\x3d"0"\x3e\r\n      \x3ccolgroup\x3e\r\n        \x3ccol width\x3d"30%" /\x3e\r\n        \x3ccol width\x3d"35%" /\x3e\r\n        \x3ccol width\x3d"35%" /\x3e\r\n      \x3c/colgroup\x3e\r\n      \x3ctbody data-dojo-attach-point\x3d"featureControlTable"\x3e\x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3c!--location toggle table--\x3e\r\n  \x3ctable data-dojo-attach-point\x3d"locationControlToggleTable" class\x3d"page-table display-none table-layout" cellpading\x3d"0"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr class\x3d"bottom-border toggle-expand-row" data-dojo-attach-event\x3d"onclick:_toggleLocation"\x3e\r\n        \x3ctd class\x3d"field-control-td text-left field-row-width pad-left-5"\x3e\r\n          \x3cdiv class\x3d"font-size-med main-text float-left"\x3e\r\n            ${nls.review.locationInfo}\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd style\x3d"width: 20px;" class\x3d"page-item-td-nav" data-dojo-attach-point\x3d"locationTd"\x3e\r\n          \x3cdiv class\x3d"float-right bg-img-toggle bg-toggle-down-img margin-left-5" data-dojo-attach-point\x3d"toggleLocation"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n  \x3c/table\x3e\r\n\r\n  \x3cdiv data-dojo-attach-point\x3d"locationInformation" class\x3d"display-none"\x3e\r\n\r\n    \x3c!--location toolbar--\x3e\r\n    \x3ctable class\x3d"page-table display-none" cellpading\x3d"0" data-dojo-attach-point\x3d"locationSyncTable"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr class\x3d"bottom-border task-instruction-row"\x3e\r\n          \x3ctd class\x3d"field-control-td pad-left-5"\x3e\r\n            \x3cdiv class\x3d"instruction" data-dojo-attach-point\x3d"locationHint"\x3e${nls.review.locationControlHint}\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"field-control-td" title\x3d"${nls.review.sync}"\x3e\r\n            \x3cdiv class\x3d"float-right bg-ft-img bg-sync feature-toolbar-btn" data-dojo-attach-point\x3d"syncFields" data-dojo-attach-event\x3d"onclick:_syncAddressInfo"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd title\x3d"${nls.featureToolbar.locate}"\x3e\r\n            \x3cdiv class\x3d"bg-ft-img bg-locate feature-toolbar-btn float-right" data-dojo-attach-point\x3d"locateButton" data-dojo-attach-event\x3d"onclick:_locate"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n\r\n    \x3c!--location controls table--\x3e\r\n    \x3ctable class\x3d"page-table display-none" cellpading\x3d"0" data-dojo-attach-point\x3d"locationControlTable"\x3e\r\n      \x3ccolgroup\x3e\r\n        \x3ccol width\x3d"35%" /\x3e\r\n        \x3ccol width\x3d"65%" /\x3e\r\n      \x3c/colgroup\x3e\r\n      \x3ctbody\x3e\x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n\r\n  \x3c/div\x3e\r\n\r\n\x3c/div\x3e\r\n\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-class dijit/form/ValidationTextBox dijit/form/Select dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/Evented dojo/query dijit/form/DateTextBox dojo/text!./templates/Feature.html dojo/Deferred ./FeatureToolbar esri/tasks/query jimu/dijit/Popup jimu/utils esri/lang".split(" "),function(v,h,l,f,k,r,q,w,x,y,z,n,A,B,m,C,t,u,p,D){return v([w,x,y,z],{baseClass:"cf-feature",declaredClass:"CriticalFacilities.Feature",
templateString:B,_started:null,label:"Feature",parent:null,nls:null,map:null,appConfig:null,config:null,_featureToolbar:null,fields:[],feature:null,fileAddress:{},isDuplicate:!1,isDuplicateLocated:!1,isUnMatchedLocated:!1,isUnMatched:!1,_useGeomFromFile:!1,_useGeomFromLayer:!0,_useValuesFromFile:!1,_useValuesFromLayer:!0,_featureExpanded:!1,_locationExpanded:!1,theme:"",styleColor:"black",layer:null,_changedFileAttributeRows:[],_changedLayerAttributeRows:[],_changedAddressRows:[],_editToolbar:null,
_featureQuery:null,_skipFields:[],csvStore:null,constructor:function(a){h.mixin(this,a)},postCreate:function(){this.inherited(arguments);this.pageHintDiv.innerHTML=this.pageHint;this.pageTitleDiv.innerHTML=this.pageTitle;this._initUnMatched();this._initToolbar(this.featureToolbar);this._updateAltIndexes()},_initUnMatched:function(){if((this.isUnMatched=-1!==this.label.indexOf("UnMatchedFeatures"))&&this.feature.fieldInfo&&this.feature.fieldInfo.length)for(var a=0;a<this.feature.fieldInfo.length;a++){var b=
this.feature.fieldInfo[a];"matchScore"===b.name&&(this.isUnMatchedLocated=0!==b.value)}},_updateAltIndexes:function(){if(this.pageContainer){var a=this.pageContainer.getViewByTitle("Review");a&&(this.altHomeIndex=a.index)}},_initSkipFields:function(a){this._skipFields=["DestinationOID","matchScore","hasDuplicateUpdates","duplicateState",this.layer.objectIdField];l.forEach(a,h.hitch(this,function(a){-1<a.name.indexOf(this.csvStore.matchFieldPrefix)&&this._skipFields.push(a.name)}))},startup:function(){var a=
this.feature.fieldInfo;this._initSkipFields(a);this._initRows(a,this.featureControlTable);this.isDuplicate?this._initDuplicateReview(a):this._initStandardReview();this._getFeature().then(h.hitch(this,function(a){this._feature=a;this._featureToolbar._panToAndSelectFeature(a)}));this._getEditFeature().then(h.hitch(this,function(a){this._editFeature=a;this.isDuplicate&&this._editFeature&&this._editFeature.geometry&&this._toggleLocationControls(!0)}));this.onShown()},onShown:function(){this._isReviewed=
!0;this._featureToolbar._disableEdit();this._showView();this._featureToolbar._panToAndSelectFeature(this.isDuplicate&&this._useGeomFromLayer?this._editFeature:this._feature);this.isShowing=!0;this.pageContainer.nextDisabled=!1;this.pageContainer.backDisabled=!1},onHidden:function(){this.isShowing=!1},validate:function(a,b){var c=new m;"next-view"===a?c.resolve(this._nextView()):"back-view"===a?c.resolve(this._backView()):this._homeView(b).then(function(a){c.resolve(a)});return c},_nextView:function(){return!0},
_backView:function(){return!0},_homeView:function(a){var b=new m;this.pageContainer.getViewByTitle("Home").verifyClearSettings(a).then(function(a){b.resolve(a)});return b},_showView:function(){k.remove(this.featureTitleTable,"display-none");k.remove(this.featureTable,"display-none");k.remove(this.featureToggleTable,"display-none");k.remove(this.locationSyncTable,"display-none");k.remove(this.locationControlTable,"display-none");k.remove(this.locationControlToggleTable,"display-none");k.remove(this.featureToolbarTable,
"display-none");this.isDuplicate&&k.remove(this.reviewText,"display-none");this._updateInfoRows()},_getFeature:function(){var a=new m,b=this.layer.objectIdField,c=this.feature.fieldInfo.filter(function(a){return a.name===b});this._featureQuery=new t;this._featureQuery.objectIds=[c[0].value];this.layer.queryFeatures(this._featureQuery).then(h.hitch(this,function(b){a.resolve(b.features[0])}));return a},_getEditFeature:function(){var a=new m,b=this.feature.fieldInfo.filter(function(a){return"DestinationOID"===
a.name});b&&0<b.length?(this._editQuery=new t,this._editQuery.objectIds=[b[0].value],this.parent.editLayer.queryFeatures(this._editQuery).then(h.hitch(this,function(b){a.resolve(b.features[0])}))):a.resolve();return a},_initStandardReview:function(){this._useValuesFromFile=!0;this._useValuesFromLayer=!1},_initDuplicateReview:function(a){this._initDuplicateSelect();this._initDuplicateReviewRows(a);k.add(this.featureToolbar,"display-none")},_initDuplicateSelect:function(){var a=new q({style:{display:"table",
"min-width":"100px",height:"28px"},options:[{label:this.nls.review.duplicateAction,value:"no-change",selected:!0},{label:this.nls.remove,value:"skip"},{label:this.nls.review.isDuplicateMakeChange,value:"make-change"},{label:this.nls.save,value:"not-duplicate"}],onChange:h.hitch(this,this._updateDuplicateUI)});this._duplicateFlag.fromSelect=a;f.place(a.domNode,this._duplicateFlag);a.startup()},_updateDuplicateUI:function(a){this._updateDuplicateAttributes(a,null);this._featureToolbar._disableEdit();
"make-change"===a?k.remove(this.featureToolbar,"display-none"):k.add(this.featureToolbar,"display-none");"not-duplicate"===a&&this._showShouldLocateFeaturePopup().then(h.hitch(this,function(b){b?(this.resetAddressValues(this._featureToolbar._originalValues,a),this._featureToolbar._locateFeature(!0).then(h.hitch(this,function(){var a=new u({titleLabel:this.nls.review.featureLocated,width:400,autoHeight:!0,content:f.create("div",{innerHTML:this.nls.warningsAndErrors.itemMoveMatch,style:"padding-bottom: 10px;"}),
buttons:[{label:this.nls.ok,onClick:h.hitch(this,h.hitch(this,function(){a.close();a=null}))}],onClose:h.hitch(this,function(){a=null;this._featureToolbar._save(!0)})})}))):this._duplicateFlag.fromSelect.set("value","no-change")}))},_updateDuplicateAttributes:function(a,b){this._feature.attributes.duplicateState=null!==a?a:this._feature.attributes.duplicateState;this._feature.attributes.hasDuplicateUpdates=null!==b?b:this._feature.attributes.hasDuplicateUpdates},_showShouldLocateFeaturePopup:function(){var a=
new m,b=f.create("div");f.create("div",{innerHTML:this.nls.warningsAndErrors.itemWillBeLocated,style:"padding-bottom: 10px;"},b);f.create("div",{innerHTML:this.nls.warningsAndErrors.proceed},b);var c=new u({titleLabel:this.nls.review.locateFeature,width:400,autoHeight:!0,content:b,buttons:[{label:this.nls.yes,onClick:h.hitch(this,function(){c.close();c=null;a.resolve(!0)})},{label:this.nls.no,onClick:h.hitch(this,function(){c.close();c=null;a.resolve(!1)})}],onClose:function(){c=null}});return a},
_initDuplicateReviewRows:function(a){var b=f.create("tr",{className:"bottom-border",isHeaderRow:!0},this.reviewTable);f.create("td",{className:"text-left"},b);var c=f.create("td",{className:"text-left"},b);f.create("div",{className:"duplicate-col-headers main-text float-left",innerHTML:this.nls.review.fromLayer},c);b=f.create("td",{className:"text-left"},b);f.create("div",{className:"duplicate-col-headers main-text float-left",innerHTML:this.nls.review.fromFile},b);l.forEach(a,h.hitch(this,function(a){if(-1===
this._skipFields.indexOf(a.name)){var b=f.create("tr",{className:"bottom-border",isLabelRow:!0,isControlRow:!0},this.reviewTable);b.fieldName=a.name;b.parent=this;var c=f.create("td",{className:"field-control-td text-left"},b);f.create("div",{className:"main-text float-left",innerHTML:a.label},c);this._initLabel(b,a.duplicateFieldInfo.value,!1,!1);this._initLabel(b,a.value,!0,!1)}}))},_initToolbar:function(a){this._featureToolbar=new C({nls:this.nls,map:this.map,parent:this.parent,config:this.config,
appConfig:this.appConfig,feature:this.feature,theme:this.theme,layer:this.layer,featureView:this,_editToolbar:this._editToolbar,csvStore:this.csvStore,_stageLayer:this.csvStore.matchedFeatureLayer,styleColor:this.styleColor,pageContainer:this.pageContainer});this._featureToolbar.placeAt(a);this._featureToolbar.startup()},_initRows:function(a,b){if(this.isDuplicate){this._initSelectRow(this.nls.review.use,this.locationControlTable,this._useGeomChanged,"geom");this._initSelectRow(this.nls.review.use,
this.featureControlTable,this._useValuesChanged,"values");var c=f.create("tr",{className:"bottom-border",isHeaderRow:!0},b);f.create("td",{className:"text-left"},c);var d=f.create("td",{className:"text-left"},c);f.create("div",{className:"duplicate-col-headers main-text float-left",innerHTML:this.nls.review.fromLayer},d);c=f.create("td",{className:"text-left"},c);f.create("div",{className:"duplicate-col-headers main-text float-left",innerHTML:this.nls.review.fromFile},c)}(this._syncEnabled=0<Object.keys(this._parentFeatureList._syncFields).length)?
this._syncFields=this._parentFeatureList._syncFields:k.add(this.syncFields,"display-none");var g=0;l.forEach(a,h.hitch(this,function(a){if(-1===this._skipFields.indexOf(a.name)){var c=f.create("tr",{className:"bottom-border",isRadioRow:!1,isEditRow:!0,rowIndex:g},b);c.fieldName=a.name;c.parent=this;var d=f.create("td",{className:"field-control-td text-left field-row-width pad-left-5"},c);f.create("div",{className:"main-text float-left",innerHTML:a.label},d);this.isDuplicate&&this._initValidationBox(c,
a.duplicateFieldInfo.value,!1,!1);this._initValidationBox(c,a.value,!0,!1);g+=1}}));this.addressFields=this.csvStore.useMultiFields?this.csvStore.multiFields:this.csvStore.useAddr?this.csvStore.singleFields:this.getXYFields();l.forEach(this.addressFields,h.hitch(this,function(a){var b=f.create("tr",{className:"bottom-border",isRadioRow:!1,isEditRow:!1,isAddressRow:!0},this.locationControlTable);b.label=a.label;b.keyField=a.keyField;b.parent=this;var c=f.create("td",{className:"field-control-td text-left pad-left-5"},
b);f.create("div",{className:"main-text float-left",innerHTML:a.label},c);var g=this.csvStore.matchFieldPrefix,c=this.feature.fieldInfo.filter(function(b){return b.name===g+a.keyField})[0];this._initValidationBox(b,c.value,!1,!0)}))},_syncAddressInfo:function(){if(!this._featureToolbar._syncDisabled){var a=this._getAddress();this._updateAddressFields(a,!0);this._featureToolbar._hasAddressEdit=!1;this._featureToolbar._updateSync(!0)}},_locate:function(){this._featureToolbar._locate()},getXYFields:function(){this._featureToolbar._isAddressFeature=
!1;var a=this.parent._pageContainer.getViewByTitle("Coordinates"),b=a.xField,a=a.yField;this._featureToolbar.xField=this.csvStore.xFieldName;this._featureToolbar.yField=this.csvStore.yFieldName;return[{keyField:this.csvStore.xFieldName,label:b.label,value:this.csvStore.xFieldName},{keyField:this.csvStore.yFieldName,label:a.label,value:this.csvStore.yFieldName}]},_updateAddressFields:function(a,b){this._address=a;b?l.forEach(this.locationControlTable.rows,h.hitch(this,function(a){if(this._syncFields.hasOwnProperty(a.keyField))for(var b=
this._syncFields[a.keyField],c=0;c<this.featureControlTable.rows.length;c++){var f=this.featureControlTable.rows[c];if(f.isEditRow&&f.fieldName===b.layerFieldName){a=this.csvStore.matchFieldPrefix+a.keyField;a=this._address&&this._address.hasOwnProperty(a)?this._address[a]:"";this.isDuplicate&&this._useValuesFromLayer?(f.layerValueTextBox.set("value",a),f.layerValueTextBox.emit("keyUp")):(f.fileValueTextBox.set("value",a),f.fileValueTextBox.emit("keyUp"));break}}})):l.forEach(this.locationControlTable.rows,
h.hitch(this,function(a){var b=this.csvStore.useAddr&&!this.csvStore.useMultiFields?"Match_addr":a.keyField;a.addressValueTextBox&&(this.csvStore.useAddr||(b=this.csvStore.xFieldName===b?"x":"y"),b=this._address&&this._address.hasOwnProperty(b)?this._address[b]:"",a.addressValueTextBox.set("value",b))}))},_validateAddressDifference:function(){var a=!1;this.locationControlTable&&l.forEach(this.locationControlTable.rows,h.hitch(this,function(b){if(this._syncFields&&this._syncFields.hasOwnProperty(b.keyField)&&
!a){var c=b.addressValueTextBox.displayedValue;b=this._syncFields[b.keyField];for(var d=0;d<this.featureControlTable.rows.length;d++){var g=this.featureControlTable.rows[d];if(g.isEditRow&&g.fieldName===b.layerFieldName&&!a){a=this.isDuplicate&&this._useValuesFromLayer?g.layerValueTextBox.displayedValue!==c:g.fileValueTextBox.displayedValue!==c;break}}}}));return a},_getAddress:function(){this._address={};l.forEach(this.locationControlTable.rows,h.hitch(this,function(a){a.addressValueTextBox&&(this._address[this.csvStore.matchFieldPrefix+
a.keyField]=a.addressValueTextBox.value)}));return this._address},_getAddressFieldsValues:function(){var a={};l.forEach(this.locationControlTable.rows,function(b){b.addressValueTextBox&&(a[b.keyField]=b.addressValueTextBox.value)});return a},_initLabel:function(a,b,c,d){var g=this._getField(a),h=f.create("td",{className:"field-control-td field-row-width2"},a),e=new r({style:{width:"100%",height:"32px"},title:b,invalidMessage:this.nls.review.valuesDoNotMatch});e.decimalSeperator=this.csvStore.decimalSeperator;
this._addLocalizeFloatSupport(e,b,d,g);e.set("value",b);e.set("readonly",!0);e.placeAt(h);e.startup();e.isFile=c;e.isAddress=d;e.row=a;e.parent=this;c?(a.fileValueTextBox=e,a.fileValue=b):d?(a.addressValueTextBox=e,a.addressValue=b):(a.layerValueTextBox=e,a.layerValue=b);c&&(e.validator=this._valuesMatch,e.validate())},_initValidationBox:function(a,b,c,d){var g=this._getField(a),h=f.create("td",{className:"field-control-td",colspan:this.isDuplicate?1:2},a),e;if(g&&g.type&&"date"===g.type)e=g.fieldInfo&&
g.fieldInfo.format?g.fieldInfo:void 0,b=-1===[null,void 0,""].indexOf(b)?new Date(b):void 0,e=new A({style:{width:"100%",height:"32px"},title:e?p.localizeDateByFieldInfo(b,e):p.localizeDate(b),onChange:this._onChange});else if(g&&g.domainValues){e=function(a){var b;-1<g.values.indexOf(a)&&(b=g.domainValues.filter(function(b){return b.label===a}));return b&&-1<b.length?b[0].value:a};b=-1<[null,void 0,""].indexOf(b)?"":-1<g.codes.indexOf(b)?b:e(b);var k=[{label:this.nls.review.selectValue,value:null,
selected:!0}],m=b;l.forEach(g.domainValues,function(a){if(b.toString()===a.value.toString()||b.toString()===a.label.toString())m=a.label;k.push({label:a.label,value:a.value})});e=new q({style:{width:"100%",height:"32px"},options:k,onChange:this._onChange,title:m});h.style.overflow="hidden"}else e=new r({style:{width:"100%",height:"32px"},title:b});e.decimalSeperator=this.csvStore.decimalSeperator;this._addLocalizeFloatSupport(e,b,d,g);e.set("intermediateChanges",!0);e.set("value",this.isDuplicate&&
d?"":b);e.placeAt(h);e.startup();e.isFile=c;e.isAddress=d;e.row=a;e.featureToolbar=this._featureToolbar;if(!d){var n;g&&g.length&&(n=D.substitute({num:g.length},this.nls.warningsAndErrors.rangeMessage));e.invalidLengthMessage=n;e.invalidTypeMessage=this.nls.warningsAndErrors.invalidMessage;e.fieldLength=g.length;e.fieldType=g.type;e.fieldNullable=g.nullable;g&&g.type&&"date"!==g.type&&(e.validator=this._valuesValidForType)}e.parent=this;c?(a.fileValueTextBox=e,a.fileValue=b):d?(a.addressValueTextBox=
e,a.addressValue=b):(a.layerValueTextBox=e,a.layerValue=b);e.on("keyUp",function(a){var b;a="undefined"!==typeof a.target.value?this.parent._getValue(a.target.value):"date"===this.fieldType?"":this.value;if(this.isAddress)a=a!==this.parent._getValue(this.row.addressValue),b=this.parent._changedAddressRows.indexOf(this.row.rowIndex),-1===b&&a?this.parent._changedAddressRows.push(this.row.rowIndex):-1<b&&!a&&this.parent._changedAddressRows.splice(b,1),this.parent.emit("address-change",0<this.parent._changedAddressRows.length);
else if(b=this.validate(),this.row._isValid=b){b=this.parent._getValue(this.row.fileValue);var c=this.parent._getValue(this.row.layerValue);a=this.isFile?a!==b:a!==c;c=this.isFile?this.parent._changedFileAttributeRows:this.parent._changedLayerAttributeRows;b=c.indexOf(this.row.rowIndex);-1===b&&a?c.push(this.row.rowIndex):-1<b&&!a&&c.splice(b,1);var g=!0;l.forEach(this.parent.featureControlTable.rows,function(a){"undefined"===typeof a._isValid||a._isValid||(g=!1)});g?this.parent.emit("attribute-change",
0<c.length):this.featureToolbar._updateSave(!0)}else this.featureToolbar._updateSave(!0)})},_getField:function(a){for(var b,c=0;c<this.csvStore.fsFields.length;c++){var d=this.csvStore.fsFields[c];if(d.name===a.fieldName){b=d;break}}return b},_addLocalizeFloatSupport:function(a,b,c,d){"."!==a.decimalSeperator&&(c&&!this.csvStore.useAddr||d&&d.type&&"float"===d.type)&&(a.title=-1!==[null,void 0,""].indexOf(b)?"":isNaN(b)||"."===a.decimalSeperator?b:p.localizeNumber(b),a.format=function(a){return-1!==
[null,void 0,""].indexOf(a)||isNaN(a)?a:p.localizeNumber(a).toString().replace(".","")},a.parse=function(a){return a&&a.toString&&-1<a.toString().indexOf(this.decimalSeperator)?a.toString().replace(this.decimalSeperator,"."):a})},_onChange:function(a){var b;a="undefined"!==typeof a?this.parent._getValue(a):"date"===this.fieldType?"":this.value;b=this.validate();if(this.row._isValid=b){b=this.parent._getValue(this.row.fileValue);var c=this.parent._getValue(this.row.layerValue);a=this.isFile?a.toString()!==
b.toString():a.toString()!==c.toString();c=this.isFile?this.parent._changedFileAttributeRows:this.parent._changedLayerAttributeRows;b=c.indexOf(this.row.rowIndex);-1===b&&a?c.push(this.row.rowIndex):-1<b&&!a&&c.splice(b,1);var d=!0;l.forEach(this.parent.featureControlTable.rows,function(a){"undefined"===typeof a._isValid||a._isValid||(d=!1)});d?this.parent.emit("attribute-change",0<c.length):this.featureToolbar._updateSave(!0)}else this.featureToolbar._updateSave(!0)},_valuesValidForType:function(a){var b=
a.toString();if(b.length>this.fieldLength)return this.invalidMessage=this.invalidLengthMessage,!1;if(0===b.length)return"undefined"!==typeof this.fieldNullable?this.fieldNullable:!0;this.invalidMessage=this.invalidTypeMessage;switch(this.fieldType){case "int":return/^-?[0-9]+$/.exec(a);case "float":return"."!==this.decimalSeperator?/^-?[0-9]+[.,]?[0-9]*$/.exec(a):/^-?[0-9]+[.]?[0-9]*$/.exec(a);case "date":if(a)try{return!isNaN((new Date(a)).getTime())}catch(c){return console.error(c),!1}else return!0;
case "domainInt":return/^-?[0-9]+$/.exec(a);case "domain":return!0;case "other":return!0}},_valuesMatch:function(){return this.row.fileValueTextBox&&this.row.layerValueTextBox?this.row.fileValueTextBox.value===this.row.layerValueTextBox.value:!0},_validateValues:function(){var a=!0;l.forEach(this.featureControlTable.rows,h.hitch(this,function(b){if(b.isEditRow){"undefined"===typeof b._isValid||b._isValid||(a=!1);var c="date"===b.fileValueTextBox.fieldType&&b.fileValueTextBox.value.toString()===b.fileValueTextBox._invalidDate?
"":this._getValue(b.fileValueTextBox.value),g=this._getValue(b.fileValue),f="date"===b.layerValueTextBox.fieldType&&b.layerValueTextBox.value.toString()===b.layerValueTextBox._invalidDate?"":this._getValue(b.layerValueTextBox.value),e=this._getValue(b.layerValue);b.parent._useValuesFromFile&&(c===g&&c===e||this._changedFileAttributeRows.push(b.rowIndex));b.parent._useValuesFromLayer&&f!==e&&this._changedLayerAttributeRows.push(b.rowIndex)}}));var b=this._useValuesFromFile?this._changedFileAttributeRows:
this._changedLayerAttributeRows;a?this.emit("attribute-change",0<b.length):this._featureToolbar._updateSave(!0)},_getValue:function(a){return-1===[null,void 0,""].indexOf(a)?a:""},_validateGeoms:function(){var a=this._featureToolbar._hasAttributeEdit,b=this._featureToolbar._hasGeometryEdit;this._useGeomFromLayer?this._featureToolbar._updateSaveAndCancel(!a):b?this._featureToolbar._updateSaveAndCancel(!a&&!b):this._featureToolbar._updateSaveAndCancel(!a)},_initSelectRow:function(a,b,c,d){b=f.create("tr",
{className:"task-instruction-row bottom-border",isRadioRow:!0,isEditRow:!1},b);b.radioButtons=[];b.useType=d;d=f.create("td",{},b);f.create("div",{className:"main-text float-left pad-left-5",innerHTML:a},d);this._createSelect(b,c)},_createSelect:function(a,b){var c=f.create("td",{colspan:2,className:"field-control-td"},a);b=new q({style:{display:"table",width:"100%",height:"28px"},options:[{label:this.nls.review.fromLayer,value:"layer",selected:!0},{label:this.nls.review.fromFile,value:"file"}],onChange:h.hitch(this,
b)});a.fromSelect=b;f.place(b.domNode,c);b.startup()},_useGeomChanged:function(a){this._useGeomFromFile=a="file"===a;this._useGeomFromLayer=!a;a?(this._featureToolbar._enableEdit(!0),this.resetAddressValues(this._featureToolbar._originalValues)):this._featureToolbar._enableEdit(!1);a&&!this._hasBeenLocatedForFile?this._hasBeenLocatedForFile||this._featureToolbar._locateFeature().then(h.hitch(this,function(a){this._featureToolbar._originalValues.duplicateGeometry=a.feature.geometry;this._hasBeenLocatedForFile=
!0;var b=[a.feature,this._editFeature];if(a.feature.geometry.x!==this._editFeature.geometry.x||a.feature.geometry.y!==this._editFeature.geometry.y)this.map&&this.map.extent&&this.map.extent.contains?this.map.extent.contains(a.feature.geometry)&&this.map.extent.contains(this._editFeature.geometry)||this.csvStore._zoomToData(b):this.csvStore._zoomToData(b);this._featureToolbar._flashFeatures(b);this._validateGeoms()})):(this._featureToolbar._updateFeature(this._useGeomFromFile?this._featureToolbar._originalValues.duplicateGeometry:
this._editFeature.geometry,!1,!0),this._featureToolbar._flashFeatures([a?this._feature:this._editFeature]),this._validateGeoms());this._useGeomFromLayer&&this._updateAddressFields(this._featureToolbar._originalValues.editAddress,!1);this._toggleLocationControls(!1);this._syncFields&&this._featureToolbar._updateSync(!this._validateAddressDifference())},_toggleFeature:function(){if(this._featureExpanded=!this._featureExpanded)this._locationExpanded=!1;this._updateInfoRows()},_toggleLocation:function(){if(this._locationExpanded=
!this._locationExpanded)this._featureExpanded=!1;this._updateInfoRows()},_updateInfoRows:function(){this._updateRow(this._featureExpanded,this.featureInformation,this.toggleFeature);this._updateRow(this._locationExpanded,this.locationInformation,this.toggleLocation)},_updateRow:function(a,b,c){var d=["bg-toggle-up-img","bg-toggle-up-img-white"],g=["bg-toggle-down-img","bg-toggle-down-img-white"];a?k.remove(b,"display-none"):k.add(b,"display-none");this._updateImageNode(a?d:g,a?g:d,c)},updateImageNodes:function(){var a=
this.pageContainer.isDarkTheme,b=a?"next-arrow-img":"next-arrow-img-white",c=a?"next-arrow-img-white":"next-arrow-img",d=n("."+b,this.domNode);l.forEach(d,function(a){k.remove(a,b);k.add(a,c)});b=a?"bg-toggle-up-img":"bg-toggle-up-img-white";c=a?"bg-toggle-up-img-white":"bg-toggle-up-img";d=n("."+b,this.domNode);l.forEach(d,function(a){k.remove(a,b);k.add(a,c)});b=a?"bg-toggle-down-img":"bg-toggle-down-img-white";c=a?"bg-toggle-down-img-white":"bg-toggle-down-img";d=n("."+b,this.domNode);l.forEach(d,
function(a){k.remove(a,b);k.add(a,c)})},_updateImageNode:function(a,b,c){var d=this.pageContainer.isDarkTheme;k.remove(c,d?b[1]:b[0]);k.add(c,d?a[1]:a[0])},_toggleLocationControls:function(a){var b=this.isDuplicate&&this._useGeomFromLayer?!0:a;this.locationControlTable&&l.forEach(this.locationControlTable.rows,function(c){c.fromSelect&&c.fromSelect.set("disabled",a);c.isAddressRow&&c.addressValueTextBox&&c.addressValueTextBox.set("disabled",b)})},_useValuesChanged:function(a){this._useValuesFromFile=
a="file"===a;this._useValuesFromLayer=!a;this._featureToolbar._editDisabled||this._toggleEnabled(a);this._validateValues();this._syncFields&&this._featureToolbar._updateSync(!this._validateAddressDifference())},_toggleEnabled:function(a){l.forEach(this.featureControlTable.rows,function(b){b.isRadioRow||(b.fileValueTextBox&&b.fileValueTextBox.set("disabled",!a),b.layerValueTextBox&&b.layerValueTextBox.set("disabled",a))})},_toggleEditControls:function(a){this.featureControlTable&&l.forEach(this.featureControlTable.rows,
function(b){b.isRadioRow&&b.fromSelect.set("disabled",a);b.isEditRow&&(b.fileValueTextBox&&(a?b.fileValueTextBox.set("disabled",a):b.parent.isDuplicate&&b.parent._useValuesFromFile?b.fileValueTextBox.set("disabled",a):b.parent.isDuplicate||b.fileValueTextBox.set("disabled",a)),b.layerValueTextBox&&(a?b.layerValueTextBox.set("disabled",a):b.parent.isDuplicate&&b.parent._useValuesFromLayer?b.layerValueTextBox.set("disabled",a):b.parent.isDuplicate||b.layerValueTextBox.set("disabled",a)))});this._toggleLocationControls(a)},
resetAttributeValues:function(){l.forEach(this.featureControlTable.rows,h.hitch(this,function(a){a.fileValueTextBox&&a.fileValueTextBox.set("value",a.fileValue);a.layerValueTextBox&&a.layerValueTextBox.set("value",a.layerValue)}));this._changedFileAttributeRows=[];this._changedLayerAttributeRows=[]},resetAddressValues:function(a,b){l.forEach(this.locationControlTable.rows,h.hitch(this,function(c){var d=this.csvStore.useAddr&&!this.csvStore.useMultiFields?"Match_addr":c.keyField;c.addressValueTextBox&&
(d=this.isDuplicate&&this._useGeomFromLayer&&"not-duplicate"!==b?a.editAddress&&a.editAddress.hasOwnProperty(d)?a.editAddress[d]:void 0:c.addressValue,c.addressValueTextBox.set("value",d))}))},resetGeometry:function(a){this._feature.geometry=a;this.feature.geometry=a;this._featureToolbar._updateLayer(this.layer,null,[this._feature],null,!1,!0).then(h.hitch(this,function(){this._featureToolbar._flashFeatures([this._feature])}));this.resetFromLayerRows()},resetFromLayerRows:function(){this.isDuplicate&&
(this._featureToolbar._fileGeometryModified||(this._useGeomFromLayer=!0),this._featureToolbar._fileValuesModified||(this._useValuesFromLayer=!0),l.forEach(this.featureControlTable.rows,h.hitch(this,function(a){a.fromSelect&&("geom"===a.useType&&this._useGeomFromLayer||"values"===a.useType&&this._useValuesFromLayer)&&a.fromSelect.set("value","layer")})),l.forEach(this.locationControlTable.rows,h.hitch(this,function(a){a.fromSelect&&("geom"===a.useType&&this._useGeomFromLayer||"values"===a.useType&&
this._useValuesFromLayer)&&a.fromSelect.set("value","layer")})))},setStyleColor:function(a){this.styleColor=a;this._featureToolbar.styleColor=a}})});