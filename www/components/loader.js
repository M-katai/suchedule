/**
 * This is an auto-generated code by Monaca JS/CSS Components.
 * Please do not edit by hand.
 */

/*** <GENERATED> ***/


/*** <Start:monaca-onsenui> ***/
/*** <Start:monaca-onsenui LoadJs:"components/monaca-onsenui/js/onsenui_all.min.js"> ***/
/*! onsenui - v1.3.8 - 2015-07-27 */
!function(){function getAttributes(element){return Node_get_attributes.call(element)}function setAttribute(element,attribute,value){try{Element_setAttribute.call(element,attribute,value)}catch(e){}}function removeAttribute(element,attribute){Element_removeAttribute.call(element,attribute)}function childNodes(element){return Node_get_childNodes.call(element)}function empty(element){for(;element.childNodes.length;)element.removeChild(element.lastChild)}function insertAdjacentHTML(element,position,html){HTMLElement_insertAdjacentHTMLPropertyDescriptor.value.call(element,position,html)}function inUnsafeMode(){var isUnsafe=!0;try{detectionDiv.innerHTML="<test/>"}catch(ex){isUnsafe=!1}return isUnsafe}function cleanse(html,targetElement){function cleanseAttributes(element){var attributes=getAttributes(element);if(attributes&&attributes.length){for(var events,i=0,len=attributes.length;len>i;i++){var attribute=attributes[i],name=attribute.name;"o"!==name[0]&&"O"!==name[0]||"n"!==name[1]&&"N"!==name[1]||(events=events||[],events.push({name:attribute.name,value:attribute.value}))}if(events)for(var i=0,len=events.length;len>i;i++){var attribute=events[i];removeAttribute(element,attribute.name),setAttribute(element,"x-"+attribute.name,attribute.value)}}for(var children=childNodes(element),i=0,len=children.length;len>i;i++)cleanseAttributes(children[i])}var cleaner=document.implementation.createHTMLDocument("cleaner");empty(cleaner.documentElement),MSApp.execUnsafeLocalFunction(function(){insertAdjacentHTML(cleaner.documentElement,"afterbegin",html)});var scripts=cleaner.documentElement.querySelectorAll("script");Array.prototype.forEach.call(scripts,function(script){switch(script.type.toLowerCase()){case"":script.type="text/inert";break;case"text/javascript":case"text/ecmascript":case"text/x-javascript":case"text/jscript":case"text/livescript":case"text/javascript1.1":case"text/javascript1.2":case"text/javascript1.3":script.type="text/inert-"+script.type.slice("text/".length);break;case"application/javascript":case"application/ecmascript":case"application/x-javascript":script.type="application/inert-"+script.type.slice("application/".length)}}),cleanseAttributes(cleaner.documentElement);var cleanedNodes=[];return"HTML"===targetElement.tagName?cleanedNodes=Array.prototype.slice.call(document.adoptNode(cleaner.documentElement).childNodes):(cleaner.head&&(cleanedNodes=cleanedNodes.concat(Array.prototype.slice.call(document.adoptNode(cleaner.head).childNodes))),cleaner.body&&(cleanedNodes=cleanedNodes.concat(Array.prototype.slice.call(document.adoptNode(cleaner.body).childNodes)))),cleanedNodes}function cleansePropertySetter(property,setter){var propertyDescriptor=Object.getOwnPropertyDescriptor(HTMLElement.prototype,property),originalSetter=propertyDescriptor.set;Object.defineProperty(HTMLElement.prototype,property,{get:propertyDescriptor.get,set:function(value){if(window.WinJS&&window.WinJS._execUnsafe&&inUnsafeMode())originalSetter.call(this,value);else{var that=this,nodes=cleanse(value,that);MSApp.execUnsafeLocalFunction(function(){setter(propertyDescriptor,that,nodes)})}},enumerable:propertyDescriptor.enumerable,configurable:propertyDescriptor.configurable})}if(window.MSApp&&MSApp.execUnsafeLocalFunction){var Element_setAttribute=Object.getOwnPropertyDescriptor(Element.prototype,"setAttribute").value,Element_removeAttribute=Object.getOwnPropertyDescriptor(Element.prototype,"removeAttribute").value,HTMLElement_insertAdjacentHTMLPropertyDescriptor=Object.getOwnPropertyDescriptor(HTMLElement.prototype,"insertAdjacentHTML"),Node_get_attributes=Object.getOwnPropertyDescriptor(Node.prototype,"attributes").get,Node_get_childNodes=Object.getOwnPropertyDescriptor(Node.prototype,"childNodes").get,detectionDiv=document.createElement("div");cleansePropertySetter("innerHTML",function(propertyDescriptor,target,elements){empty(target);for(var i=0,len=elements.length;len>i;i++)target.appendChild(elements[i])}),cleansePropertySetter("outerHTML",function(propertyDescriptor,target,elements){for(var i=0,len=elements.length;len>i;i++)target.insertAdjacentElement("afterend",elements[i]);target.parentNode.removeChild(target)})}}(),function(window,document,undefined){"use strict";function minErr(module,ErrorConstructor){return ErrorConstructor=ErrorConstructor||Error,function(){var paramPrefix,i,SKIP_INDEXES=2,templateArgs=arguments,code=templateArgs[0],message="["+(module?module+":":"")+code+"] ",template=templateArgs[1];for(message+=template.replace(/\{\d+\}/g,function(match){var index=+match.slice(1,-1),shiftedIndex=index+SKIP_INDEXES;return shiftedIndex<templateArgs.length?toDebugString(templateArgs[shiftedIndex]):match}),message+="\nhttp://errors.angularjs.org/1.4.3/"+(module?module+"/":"")+code,i=SKIP_INDEXES,paramPrefix="?";i<templateArgs.length;i++,paramPrefix="&")message+=paramPrefix+"p"+(i-SKIP_INDEXES)+"="+encodeURIComponent(toDebugString(templateArgs[i]));return new ErrorConstructor(message)}}function isArrayLike(obj){if(null==obj||isWindow(obj))return!1;var length="length"in Object(obj)&&obj.length;return obj.nodeType===NODE_TYPE_ELEMENT&&length?!0:isString(obj)||isArray(obj)||0===length||"number"==typeof length&&length>0&&length-1 in obj}function forEach(obj,iterator,context){var key,length;if(obj)if(isFunction(obj))for(key in obj)"prototype"==key||"length"==key||"name"==key||obj.hasOwnProperty&&!obj.hasOwnProperty(key)||iterator.call(context,obj[key],key,obj);else if(isArray(obj)||isArrayLike(obj)){var isPrimitive="object"!=typeof obj;for(key=0,length=obj.length;length>key;key++)(isPrimitive||key in obj)&&iterator.call(context,obj[key],key,obj)}else if(obj.forEach&&obj.forEach!==forEach)obj.forEach(iterator,context,obj);else if(isBlankObject(obj))for(key in obj)iterator.call(context,obj[key],key,obj);else if("function"==typeof obj.hasOwnProperty)for(key in obj)obj.hasOwnProperty(key)&&iterator.call(context,obj[key],key,obj);else for(key in obj)hasOwnProperty.call(obj,key)&&iterator.call(context,obj[key],key,obj);return obj}function forEachSorted(obj,iterator,context){for(var keys=Object.keys(obj).sort(),i=0;i<keys.length;i++)iterator.call(context,obj[keys[i]],keys[i]);return keys}function reverseParams(iteratorFn){return function(value,key){iteratorFn(key,value)}}function nextUid(){return++uid}function setHashKey(obj,h){h?obj.$$hashKey=h:delete obj.$$hashKey}function baseExtend(dst,objs,deep){for(var h=dst.$$hashKey,i=0,ii=objs.length;ii>i;++i){var obj=objs[i];if(isObject(obj)||isFunction(obj))for(var keys=Object.keys(obj),j=0,jj=keys.length;jj>j;j++){var key=keys[j],src=obj[key];deep&&isObject(src)?isDate(src)?dst[key]=new Date(src.valueOf()):(isObject(dst[key])||(dst[key]=isArray(src)?[]:{}),baseExtend(dst[key],[src],!0)):dst[key]=src}}return setHashKey(dst,h),dst}function extend(dst){return baseExtend(dst,slice.call(arguments,1),!1)}function merge(dst){return baseExtend(dst,slice.call(arguments,1),!0)}function toInt(str){return parseInt(str,10)}function inherit(parent,extra){return extend(Object.create(parent),extra)}function noop(){}function identity($){return $}function valueFn(value){return function(){return value}}function hasCustomToString(obj){return isFunction(obj.toString)&&obj.toString!==Object.prototype.toString}function isUndefined(value){return"undefined"==typeof value}function isDefined(value){return"undefined"!=typeof value}function isObject(value){return null!==value&&"object"==typeof value}function isBlankObject(value){return null!==value&&"object"==typeof value&&!getPrototypeOf(value)}function isString(value){return"string"==typeof value}function isNumber(value){return"number"==typeof value}function isDate(value){return"[object Date]"===toString.call(value)}function isFunction(value){return"function"==typeof value}function isRegExp(value){return"[object RegExp]"===toString.call(value)}function isWindow(obj){return obj&&obj.window===obj}function isScope(obj){return obj&&obj.$evalAsync&&obj.$watch}function isFile(obj){return"[object File]"===toString.call(obj)}function isFormData(obj){return"[object FormData]"===toString.call(obj)}function isBlob(obj){return"[object Blob]"===toString.call(obj)}function isBoolean(value){return"boolean"==typeof value}function isPromiseLike(obj){return obj&&isFunction(obj.then)}function isTypedArray(value){return TYPED_ARRAY_REGEXP.test(toString.call(value))}function isElement(node){return!(!node||!(node.nodeName||node.prop&&node.attr&&node.find))}function makeMap(str){var i,obj={},items=str.split(",");for(i=0;i<items.length;i++)obj[items[i]]=!0;return obj}function nodeName_(element){return lowercase(element.nodeName||element[0]&&element[0].nodeName)}function arrayRemove(array,value){var index=array.indexOf(value);return index>=0&&array.splice(index,1),index}function copy(source,destination,stackSource,stackDest){if(isWindow(source)||isScope(source))throw ngMinErr("cpws","Can't copy! Making copies of Window or Scope instances is not supported.");if(isTypedArray(destination))throw ngMinErr("cpta","Can't copy! TypedArray destination cannot be mutated.");if(destination){if(source===destination)throw ngMinErr("cpi","Can't copy! Source and destination are identical.");stackSource=stackSource||[],stackDest=stackDest||[],isObject(source)&&(stackSource.push(source),stackDest.push(destination));var key;if(isArray(source)){destination.length=0;for(var i=0;i<source.length;i++)destination.push(copy(source[i],null,stackSource,stackDest))}else{var h=destination.$$hashKey;if(isArray(destination)?destination.length=0:forEach(destination,function(value,key){delete destination[key]}),isBlankObject(source))for(key in source)destination[key]=copy(source[key],null,stackSource,stackDest);else if(source&&"function"==typeof source.hasOwnProperty)for(key in source)source.hasOwnProperty(key)&&(destination[key]=copy(source[key],null,stackSource,stackDest));else for(key in source)hasOwnProperty.call(source,key)&&(destination[key]=copy(source[key],null,stackSource,stackDest));setHashKey(destination,h)}}else if(destination=source,isObject(source)){var index;if(stackSource&&-1!==(index=stackSource.indexOf(source)))return stackDest[index];if(isArray(source))return copy(source,[],stackSource,stackDest);if(isTypedArray(source))destination=new source.constructor(source);else if(isDate(source))destination=new Date(source.getTime());else{if(!isRegExp(source)){var emptyObject=Object.create(getPrototypeOf(source));return copy(source,emptyObject,stackSource,stackDest)}destination=new RegExp(source.source,source.toString().match(/[^\/]*$/)[0]),destination.lastIndex=source.lastIndex}stackDest&&(stackSource.push(source),stackDest.push(destination))}return destination}function shallowCopy(src,dst){if(isArray(src)){dst=dst||[];for(var i=0,ii=src.length;ii>i;i++)dst[i]=src[i]}else if(isObject(src)){dst=dst||{};for(var key in src)("$"!==key.charAt(0)||"$"!==key.charAt(1))&&(dst[key]=src[key])}return dst||src}function equals(o1,o2){if(o1===o2)return!0;if(null===o1||null===o2)return!1;if(o1!==o1&&o2!==o2)return!0;var length,key,keySet,t1=typeof o1,t2=typeof o2;if(t1==t2&&"object"==t1){if(!isArray(o1)){if(isDate(o1))return isDate(o2)?equals(o1.getTime(),o2.getTime()):!1;if(isRegExp(o1))return isRegExp(o2)?o1.toString()==o2.toString():!1;if(isScope(o1)||isScope(o2)||isWindow(o1)||isWindow(o2)||isArray(o2)||isDate(o2)||isRegExp(o2))return!1;keySet=createMap();for(key in o1)if("$"!==key.charAt(0)&&!isFunction(o1[key])){if(!equals(o1[key],o2[key]))return!1;keySet[key]=!0}for(key in o2)if(!(key in keySet||"$"===key.charAt(0)||o2[key]===undefined||isFunction(o2[key])))return!1;return!0}if(!isArray(o2))return!1;if((length=o1.length)==o2.length){for(key=0;length>key;key++)if(!equals(o1[key],o2[key]))return!1;return!0}}return!1}function concat(array1,array2,index){return array1.concat(slice.call(array2,index))}function sliceArgs(args,startIndex){return slice.call(args,startIndex||0)}function bind(self,fn){var curryArgs=arguments.length>2?sliceArgs(arguments,2):[];return!isFunction(fn)||fn instanceof RegExp?fn:curryArgs.length?function(){return arguments.length?fn.apply(self,concat(curryArgs,arguments,0)):fn.apply(self,curryArgs)}:function(){return arguments.length?fn.apply(self,arguments):fn.call(self)}}function toJsonReplacer(key,value){var val=value;return"string"==typeof key&&"$"===key.charAt(0)&&"$"===key.charAt(1)?val=undefined:isWindow(value)?val="$WINDOW":value&&document===value?val="$DOCUMENT":isScope(value)&&(val="$SCOPE"),val}function toJson(obj,pretty){return"undefined"==typeof obj?undefined:(isNumber(pretty)||(pretty=pretty?2:null),JSON.stringify(obj,toJsonReplacer,pretty))}function fromJson(json){return isString(json)?JSON.parse(json):json}function timezoneToOffset(timezone,fallback){var requestedTimezoneOffset=Date.parse("Jan 01, 1970 00:00:00 "+timezone)/6e4;return isNaN(requestedTimezoneOffset)?fallback:requestedTimezoneOffset}function addDateMinutes(date,minutes){return date=new Date(date.getTime()),date.setMinutes(date.getMinutes()+minutes),date}function convertTimezoneToLocal(date,timezone,reverse){reverse=reverse?-1:1;var timezoneOffset=timezoneToOffset(timezone,date.getTimezoneOffset());return addDateMinutes(date,reverse*(timezoneOffset-date.getTimezoneOffset()))}function startingTag(element){element=jqLite(element).clone();try{element.empty()}catch(e){}var elemHtml=jqLite("<div>").append(element).html();try{return element[0].nodeType===NODE_TYPE_TEXT?lowercase(elemHtml):elemHtml.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(match,nodeName){return"<"+lowercase(nodeName)})}catch(e){return lowercase(elemHtml)}}function tryDecodeURIComponent(value){try{return decodeURIComponent(value)}catch(e){}}function parseKeyValue(keyValue){var key_value,key,obj={};return forEach((keyValue||"").split("&"),function(keyValue){if(keyValue&&(key_value=keyValue.replace(/\+/g,"%20").split("="),key=tryDecodeURIComponent(key_value[0]),isDefined(key))){var val=isDefined(key_value[1])?tryDecodeURIComponent(key_value[1]):!0;hasOwnProperty.call(obj,key)?isArray(obj[key])?obj[key].push(val):obj[key]=[obj[key],val]:obj[key]=val}}),obj}function toKeyValue(obj){var parts=[];return forEach(obj,function(value,key){isArray(value)?forEach(value,function(arrayValue){parts.push(encodeUriQuery(key,!0)+(arrayValue===!0?"":"="+encodeUriQuery(arrayValue,!0)))}):parts.push(encodeUriQuery(key,!0)+(value===!0?"":"="+encodeUriQuery(value,!0)))}),parts.length?parts.join("&"):""}function encodeUriSegment(val){return encodeUriQuery(val,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function encodeUriQuery(val,pctEncodeSpaces){return encodeURIComponent(val).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,pctEncodeSpaces?"%20":"+")}function getNgAttribute(element,ngAttr){var attr,i,ii=ngAttrPrefixes.length;for(i=0;ii>i;++i)if(attr=ngAttrPrefixes[i]+ngAttr,isString(attr=element.getAttribute(attr)))return attr;return null}function angularInit(element,bootstrap){var appElement,module,config={};forEach(ngAttrPrefixes,function(prefix){var name=prefix+"app";!appElement&&element.hasAttribute&&element.hasAttribute(name)&&(appElement=element,module=element.getAttribute(name))}),forEach(ngAttrPrefixes,function(prefix){var candidate,name=prefix+"app";!appElement&&(candidate=element.querySelector("["+name.replace(":","\\:")+"]"))&&(appElement=candidate,module=candidate.getAttribute(name))}),appElement&&(config.strictDi=null!==getNgAttribute(appElement,"strict-di"),bootstrap(appElement,module?[module]:[],config))}function bootstrap(element,modules,config){isObject(config)||(config={});var defaultConfig={strictDi:!1};config=extend(defaultConfig,config);var doBootstrap=function(){if(element=jqLite(element),element.injector()){var tag=element[0]===document?"document":startingTag(element);throw ngMinErr("btstrpd","App Already Bootstrapped with this Element '{0}'",tag.replace(/</,"&lt;").replace(/>/,"&gt;"))}modules=modules||[],modules.unshift(["$provide",function($provide){$provide.value("$rootElement",element)}]),config.debugInfoEnabled&&modules.push(["$compileProvider",function($compileProvider){$compileProvider.debugInfoEnabled(!0)}]),modules.unshift("ng");var injector=createInjector(modules,config.strictDi);return injector.invoke(["$rootScope","$rootElement","$compile","$injector",function(scope,element,compile,injector){scope.$apply(function(){element.data("$injector",injector),compile(element)(scope)})}]),injector},NG_ENABLE_DEBUG_INFO=/^NG_ENABLE_DEBUG_INFO!/,NG_DEFER_BOOTSTRAP=/^NG_DEFER_BOOTSTRAP!/;return window&&NG_ENABLE_DEBUG_INFO.test(window.name)&&(config.debugInfoEnabled=!0,window.name=window.name.replace(NG_ENABLE_DEBUG_INFO,"")),window&&!NG_DEFER_BOOTSTRAP.test(window.name)?doBootstrap():(window.name=window.name.replace(NG_DEFER_BOOTSTRAP,""),angular.resumeBootstrap=function(extraModules){return forEach(extraModules,function(module){modules.push(module)}),doBootstrap()},isFunction(angular.resumeDeferredBootstrap)&&angular.resumeDeferredBootstrap(),void 0)}function reloadWithDebugInfo(){window.name="NG_ENABLE_DEBUG_INFO!"+window.name,window.location.reload()}function getTestability(rootElement){var injector=angular.element(rootElement).injector();if(!injector)throw ngMinErr("test","no injector found for element argument to getTestability");return injector.get("$$testability")}function snake_case(name,separator){return separator=separator||"_",name.replace(SNAKE_CASE_REGEXP,function(letter,pos){return(pos?separator:"")+letter.toLowerCase()})}function bindJQuery(){var originalCleanData;if(!bindJQueryFired){var jqName=jq();jQuery=window.jQuery,isDefined(jqName)&&(jQuery=null===jqName?undefined:window[jqName]),jQuery&&jQuery.fn.on?(jqLite=jQuery,extend(jQuery.fn,{scope:JQLitePrototype.scope,isolateScope:JQLitePrototype.isolateScope,controller:JQLitePrototype.controller,injector:JQLitePrototype.injector,inheritedData:JQLitePrototype.inheritedData}),originalCleanData=jQuery.cleanData,jQuery.cleanData=function(elems){var events;if(skipDestroyOnNextJQueryCleanData)skipDestroyOnNextJQueryCleanData=!1;else for(var elem,i=0;null!=(elem=elems[i]);i++)events=jQuery._data(elem,"events"),events&&events.$destroy&&jQuery(elem).triggerHandler("$destroy");originalCleanData(elems)}):jqLite=JQLite,angular.element=jqLite,bindJQueryFired=!0}}function assertArg(arg,name,reason){if(!arg)throw ngMinErr("areq","Argument '{0}' is {1}",name||"?",reason||"required");return arg}function assertArgFn(arg,name,acceptArrayAnnotation){return acceptArrayAnnotation&&isArray(arg)&&(arg=arg[arg.length-1]),assertArg(isFunction(arg),name,"not a function, got "+(arg&&"object"==typeof arg?arg.constructor.name||"Object":typeof arg)),arg}function assertNotHasOwnProperty(name,context){if("hasOwnProperty"===name)throw ngMinErr("badname","hasOwnProperty is not a valid {0} name",context)}function getter(obj,path,bindFnToScope){if(!path)return obj;for(var key,keys=path.split("."),lastInstance=obj,len=keys.length,i=0;len>i;i++)key=keys[i],obj&&(obj=(lastInstance=obj)[key]);return!bindFnToScope&&isFunction(obj)?bind(lastInstance,obj):obj}function getBlockNodes(nodes){var node=nodes[0],endNode=nodes[nodes.length-1],blockNodes=[node];do{if(node=node.nextSibling,!node)break;blockNodes.push(node)}while(node!==endNode);return jqLite(blockNodes)}function createMap(){return Object.create(null)}function setupModuleLoader(window){function ensure(obj,name,factory){return obj[name]||(obj[name]=factory())}var $injectorMinErr=minErr("$injector"),ngMinErr=minErr("ng"),angular=ensure(window,"angular",Object);return angular.$$minErr=angular.$$minErr||minErr,ensure(angular,"module",function(){var modules={};return function(name,requires,configFn){var assertNotHasOwnProperty=function(name,context){if("hasOwnProperty"===name)throw ngMinErr("badname","hasOwnProperty is not a valid {0} name",context)};return assertNotHasOwnProperty(name,"module"),requires&&modules.hasOwnProperty(name)&&(modules[name]=null),ensure(modules,name,function(){function invokeLater(provider,method,insertMethod,queue){return queue||(queue=invokeQueue),function(){return queue[insertMethod||"push"]([provider,method,arguments]),moduleInstance}}function invokeLaterAndSetModuleName(provider,method){return function(recipeName,factoryFunction){return factoryFunction&&isFunction(factoryFunction)&&(factoryFunction.$$moduleName=name),invokeQueue.push([provider,method,arguments]),moduleInstance}}if(!requires)throw $injectorMinErr("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",name);var invokeQueue=[],configBlocks=[],runBlocks=[],config=invokeLater("$injector","invoke","push",configBlocks),moduleInstance={_invokeQueue:invokeQueue,_configBlocks:configBlocks,_runBlocks:runBlocks,requires:requires,name:name,provider:invokeLaterAndSetModuleName("$provide","provider"),factory:invokeLaterAndSetModuleName("$provide","factory"),service:invokeLaterAndSetModuleName("$provide","service"),value:invokeLater("$provide","value"),constant:invokeLater("$provide","constant","unshift"),decorator:invokeLaterAndSetModuleName("$provide","decorator"),animation:invokeLaterAndSetModuleName("$animateProvider","register"),filter:invokeLaterAndSetModuleName("$filterProvider","register"),controller:invokeLaterAndSetModuleName("$controllerProvider","register"),directive:invokeLaterAndSetModuleName("$compileProvider","directive"),config:config,run:function(block){return runBlocks.push(block),this}};return configFn&&config(configFn),moduleInstance})}})}function serializeObject(obj){var seen=[];return JSON.stringify(obj,function(key,val){if(val=toJsonReplacer(key,val),isObject(val)){if(seen.indexOf(val)>=0)return"<<already seen>>";seen.push(val)}return val})}function toDebugString(obj){return"function"==typeof obj?obj.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof obj?"undefined":"string"!=typeof obj?serializeObject(obj):obj}function publishExternalAPI(angular){extend(angular,{bootstrap:bootstrap,copy:copy,extend:extend,merge:merge,equals:equals,element:jqLite,forEach:forEach,injector:createInjector,noop:noop,bind:bind,toJson:toJson,fromJson:fromJson,identity:identity,isUndefined:isUndefined,isDefined:isDefined,isString:isString,isFunction:isFunction,isObject:isObject,isNumber:isNumber,isElement:isElement,isArray:isArray,version:version,isDate:isDate,lowercase:lowercase,uppercase:uppercase,callbacks:{counter:0},getTestability:getTestability,$$minErr:minErr,$$csp:csp,reloadWithDebugInfo:reloadWithDebugInfo}),angularModule=setupModuleLoader(window);try{angularModule("ngLocale")}catch(e){angularModule("ngLocale",[]).provider("$locale",$LocaleProvider)}angularModule("ng",["ngLocale"],["$provide",function($provide){$provide.provider({$$sanitizeUri:$$SanitizeUriProvider}),$provide.provider("$compile",$CompileProvider).directive({a:htmlAnchorDirective,input:inputDirective,textarea:inputDirective,form:formDirective,script:scriptDirective,select:selectDirective,style:styleDirective,option:optionDirective,ngBind:ngBindDirective,ngBindHtml:ngBindHtmlDirective,ngBindTemplate:ngBindTemplateDirective,ngClass:ngClassDirective,ngClassEven:ngClassEvenDirective,ngClassOdd:ngClassOddDirective,ngCloak:ngCloakDirective,ngController:ngControllerDirective,ngForm:ngFormDirective,ngHide:ngHideDirective,ngIf:ngIfDirective,ngInclude:ngIncludeDirective,ngInit:ngInitDirective,ngNonBindable:ngNonBindableDirective,ngPluralize:ngPluralizeDirective,ngRepeat:ngRepeatDirective,ngShow:ngShowDirective,ngStyle:ngStyleDirective,ngSwitch:ngSwitchDirective,ngSwitchWhen:ngSwitchWhenDirective,ngSwitchDefault:ngSwitchDefaultDirective,ngOptions:ngOptionsDirective,ngTransclude:ngTranscludeDirective,ngModel:ngModelDirective,ngList:ngListDirective,ngChange:ngChangeDirective,pattern:patternDirective,ngPattern:patternDirective,required:requiredDirective,ngRequired:requiredDirective,minlength:minlengthDirective,ngMinlength:minlengthDirective,maxlength:maxlengthDirective,ngMaxlength:maxlengthDirective,ngValue:ngValueDirective,ngModelOptions:ngModelOptionsDirective}).directive({ngInclude:ngIncludeFillContentDirective}).directive(ngAttributeAliasDirectives).directive(ngEventDirectives),$provide.provider({$anchorScroll:$AnchorScrollProvider,$animate:$AnimateProvider,$$animateQueue:$$CoreAnimateQueueProvider,$$AnimateRunner:$$CoreAnimateRunnerProvider,$browser:$BrowserProvider,$cacheFactory:$CacheFactoryProvider,$controller:$ControllerProvider,$document:$DocumentProvider,$exceptionHandler:$ExceptionHandlerProvider,$filter:$FilterProvider,$interpolate:$InterpolateProvider,$interval:$IntervalProvider,$http:$HttpProvider,$httpParamSerializer:$HttpParamSerializerProvider,$httpParamSerializerJQLike:$HttpParamSerializerJQLikeProvider,$httpBackend:$HttpBackendProvider,$location:$LocationProvider,$log:$LogProvider,$parse:$ParseProvider,$rootScope:$RootScopeProvider,$q:$QProvider,$$q:$$QProvider,$sce:$SceProvider,$sceDelegate:$SceDelegateProvider,$sniffer:$SnifferProvider,$templateCache:$TemplateCacheProvider,$templateRequest:$TemplateRequestProvider,$$testability:$$TestabilityProvider,$timeout:$TimeoutProvider,$window:$WindowProvider,$$rAF:$$RAFProvider,$$jqLite:$$jqLiteProvider,$$HashMap:$$HashMapProvider,$$cookieReader:$$CookieReaderProvider})}])}function jqNextId(){return++jqId}function camelCase(name){return name.replace(SPECIAL_CHARS_REGEXP,function(_,separator,letter,offset){return offset?letter.toUpperCase():letter}).replace(MOZ_HACK_REGEXP,"Moz$1")}function jqLiteIsTextNode(html){return!HTML_REGEXP.test(html)}function jqLiteAcceptsData(node){var nodeType=node.nodeType;return nodeType===NODE_TYPE_ELEMENT||!nodeType||nodeType===NODE_TYPE_DOCUMENT}function jqLiteHasData(node){for(var key in jqCache[node.ng339])return!0;return!1}function jqLiteBuildFragment(html,context){var tmp,tag,wrap,i,fragment=context.createDocumentFragment(),nodes=[];if(jqLiteIsTextNode(html))nodes.push(context.createTextNode(html));else{for(tmp=tmp||fragment.appendChild(context.createElement("div")),tag=(TAG_NAME_REGEXP.exec(html)||["",""])[1].toLowerCase(),wrap=wrapMap[tag]||wrapMap._default,tmp.innerHTML=wrap[1]+html.replace(XHTML_TAG_REGEXP,"<$1></$2>")+wrap[2],i=wrap[0];i--;)tmp=tmp.lastChild;nodes=concat(nodes,tmp.childNodes),tmp=fragment.firstChild,tmp.textContent=""}return fragment.textContent="",fragment.innerHTML="",forEach(nodes,function(node){fragment.appendChild(node)}),fragment}function jqLiteParseHTML(html,context){context=context||document;var parsed;return(parsed=SINGLE_TAG_REGEXP.exec(html))?[context.createElement(parsed[1])]:(parsed=jqLiteBuildFragment(html,context))?parsed.childNodes:[]}function JQLite(element){if(element instanceof JQLite)return element;var argIsString;if(isString(element)&&(element=trim(element),argIsString=!0),!(this instanceof JQLite)){if(argIsString&&"<"!=element.charAt(0))throw jqLiteMinErr("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");return new JQLite(element)}argIsString?jqLiteAddNodes(this,jqLiteParseHTML(element)):jqLiteAddNodes(this,element)}function jqLiteClone(element){return element.cloneNode(!0)}function jqLiteDealoc(element,onlyDescendants){if(onlyDescendants||jqLiteRemoveData(element),element.querySelectorAll)for(var descendants=element.querySelectorAll("*"),i=0,l=descendants.length;l>i;i++)jqLiteRemoveData(descendants[i])}function jqLiteOff(element,type,fn,unsupported){if(isDefined(unsupported))throw jqLiteMinErr("offargs","jqLite#off() does not support the `selector` argument");var expandoStore=jqLiteExpandoStore(element),events=expandoStore&&expandoStore.events,handle=expandoStore&&expandoStore.handle;if(handle)if(type)forEach(type.split(" "),function(type){if(isDefined(fn)){var listenerFns=events[type];if(arrayRemove(listenerFns||[],fn),listenerFns&&listenerFns.length>0)return}removeEventListenerFn(element,type,handle),delete events[type]});else for(type in events)"$destroy"!==type&&removeEventListenerFn(element,type,handle),delete events[type]}function jqLiteRemoveData(element,name){var expandoId=element.ng339,expandoStore=expandoId&&jqCache[expandoId];if(expandoStore){if(name)return delete expandoStore.data[name],void 0;expandoStore.handle&&(expandoStore.events.$destroy&&expandoStore.handle({},"$destroy"),jqLiteOff(element)),delete jqCache[expandoId],element.ng339=undefined}}function jqLiteExpandoStore(element,createIfNecessary){var expandoId=element.ng339,expandoStore=expandoId&&jqCache[expandoId];return createIfNecessary&&!expandoStore&&(element.ng339=expandoId=jqNextId(),expandoStore=jqCache[expandoId]={events:{},data:{},handle:undefined}),expandoStore}function jqLiteData(element,key,value){if(jqLiteAcceptsData(element)){var isSimpleSetter=isDefined(value),isSimpleGetter=!isSimpleSetter&&key&&!isObject(key),massGetter=!key,expandoStore=jqLiteExpandoStore(element,!isSimpleGetter),data=expandoStore&&expandoStore.data;if(isSimpleSetter)data[key]=value;else{if(massGetter)return data;if(isSimpleGetter)return data&&data[key];extend(data,key)}}}function jqLiteHasClass(element,selector){return element.getAttribute?(" "+(element.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+selector+" ")>-1:!1}function jqLiteRemoveClass(element,cssClasses){cssClasses&&element.setAttribute&&forEach(cssClasses.split(" "),function(cssClass){element.setAttribute("class",trim((" "+(element.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+trim(cssClass)+" "," ")))})}function jqLiteAddClass(element,cssClasses){if(cssClasses&&element.setAttribute){var existingClasses=(" "+(element.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");forEach(cssClasses.split(" "),function(cssClass){cssClass=trim(cssClass),-1===existingClasses.indexOf(" "+cssClass+" ")&&(existingClasses+=cssClass+" ")}),element.setAttribute("class",trim(existingClasses))}}function jqLiteAddNodes(root,elements){if(elements)if(elements.nodeType)root[root.length++]=elements;else{var length=elements.length;if("number"==typeof length&&elements.window!==elements){if(length)for(var i=0;length>i;i++)root[root.length++]=elements[i]}else root[root.length++]=elements}}function jqLiteController(element,name){return jqLiteInheritedData(element,"$"+(name||"ngController")+"Controller")}function jqLiteInheritedData(element,name,value){element.nodeType==NODE_TYPE_DOCUMENT&&(element=element.documentElement);for(var names=isArray(name)?name:[name];element;){for(var i=0,ii=names.length;ii>i;i++)if((value=jqLite.data(element,names[i]))!==undefined)return value;element=element.parentNode||element.nodeType===NODE_TYPE_DOCUMENT_FRAGMENT&&element.host}}function jqLiteEmpty(element){for(jqLiteDealoc(element,!0);element.firstChild;)element.removeChild(element.firstChild)}function jqLiteRemove(element,keepData){keepData||jqLiteDealoc(element);var parent=element.parentNode;parent&&parent.removeChild(element)}function jqLiteDocumentLoaded(action,win){win=win||window,"complete"===win.document.readyState?win.setTimeout(action):jqLite(win).on("load",action)}function getBooleanAttrName(element,name){var booleanAttr=BOOLEAN_ATTR[name.toLowerCase()];return booleanAttr&&BOOLEAN_ELEMENTS[nodeName_(element)]&&booleanAttr}function getAliasedAttrName(element,name){var nodeName=element.nodeName;return("INPUT"===nodeName||"TEXTAREA"===nodeName)&&ALIASED_ATTR[name]}function createEventHandler(element,events){var eventHandler=function(event,type){event.isDefaultPrevented=function(){return event.defaultPrevented};var eventFns=events[type||event.type],eventFnsLength=eventFns?eventFns.length:0;if(eventFnsLength){if(isUndefined(event.immediatePropagationStopped)){var originalStopImmediatePropagation=event.stopImmediatePropagation;event.stopImmediatePropagation=function(){event.immediatePropagationStopped=!0,event.stopPropagation&&event.stopPropagation(),originalStopImmediatePropagation&&originalStopImmediatePropagation.call(event)}}event.isImmediatePropagationStopped=function(){return event.immediatePropagationStopped===!0
},eventFnsLength>1&&(eventFns=shallowCopy(eventFns));for(var i=0;eventFnsLength>i;i++)event.isImmediatePropagationStopped()||eventFns[i].call(element,event)}};return eventHandler.elem=element,eventHandler}function $$jqLiteProvider(){this.$get=function(){return extend(JQLite,{hasClass:function(node,classes){return node.attr&&(node=node[0]),jqLiteHasClass(node,classes)},addClass:function(node,classes){return node.attr&&(node=node[0]),jqLiteAddClass(node,classes)},removeClass:function(node,classes){return node.attr&&(node=node[0]),jqLiteRemoveClass(node,classes)}})}}function hashKey(obj,nextUidFn){var key=obj&&obj.$$hashKey;if(key)return"function"==typeof key&&(key=obj.$$hashKey()),key;var objType=typeof obj;return key="function"==objType||"object"==objType&&null!==obj?obj.$$hashKey=objType+":"+(nextUidFn||nextUid)():objType+":"+obj}function HashMap(array,isolatedUid){if(isolatedUid){var uid=0;this.nextUid=function(){return++uid}}forEach(array,this.put,this)}function anonFn(fn){var fnText=fn.toString().replace(STRIP_COMMENTS,""),args=fnText.match(FN_ARGS);return args?"function("+(args[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function annotate(fn,strictDi,name){var $inject,fnText,argDecl,last;if("function"==typeof fn){if(!($inject=fn.$inject)){if($inject=[],fn.length){if(strictDi)throw isString(name)&&name||(name=fn.name||anonFn(fn)),$injectorMinErr("strictdi","{0} is not using explicit annotation and cannot be invoked in strict mode",name);fnText=fn.toString().replace(STRIP_COMMENTS,""),argDecl=fnText.match(FN_ARGS),forEach(argDecl[1].split(FN_ARG_SPLIT),function(arg){arg.replace(FN_ARG,function(all,underscore,name){$inject.push(name)})})}fn.$inject=$inject}}else isArray(fn)?(last=fn.length-1,assertArgFn(fn[last],"fn"),$inject=fn.slice(0,last)):assertArgFn(fn,"fn",!0);return $inject}function createInjector(modulesToLoad,strictDi){function supportObject(delegate){return function(key,value){return isObject(key)?(forEach(key,reverseParams(delegate)),void 0):delegate(key,value)}}function provider(name,provider_){if(assertNotHasOwnProperty(name,"service"),(isFunction(provider_)||isArray(provider_))&&(provider_=providerInjector.instantiate(provider_)),!provider_.$get)throw $injectorMinErr("pget","Provider '{0}' must define $get factory method.",name);return providerCache[name+providerSuffix]=provider_}function enforceReturnValue(name,factory){return function(){var result=instanceInjector.invoke(factory,this);if(isUndefined(result))throw $injectorMinErr("undef","Provider '{0}' must return a value from $get factory method.",name);return result}}function factory(name,factoryFn,enforce){return provider(name,{$get:enforce!==!1?enforceReturnValue(name,factoryFn):factoryFn})}function service(name,constructor){return factory(name,["$injector",function($injector){return $injector.instantiate(constructor)}])}function value(name,val){return factory(name,valueFn(val),!1)}function constant(name,value){assertNotHasOwnProperty(name,"constant"),providerCache[name]=value,instanceCache[name]=value}function decorator(serviceName,decorFn){var origProvider=providerInjector.get(serviceName+providerSuffix),orig$get=origProvider.$get;origProvider.$get=function(){var origInstance=instanceInjector.invoke(orig$get,origProvider);return instanceInjector.invoke(decorFn,null,{$delegate:origInstance})}}function loadModules(modulesToLoad){var moduleFn,runBlocks=[];return forEach(modulesToLoad,function(module){function runInvokeQueue(queue){var i,ii;for(i=0,ii=queue.length;ii>i;i++){var invokeArgs=queue[i],provider=providerInjector.get(invokeArgs[0]);provider[invokeArgs[1]].apply(provider,invokeArgs[2])}}if(!loadedModules.get(module)){loadedModules.put(module,!0);try{isString(module)?(moduleFn=angularModule(module),runBlocks=runBlocks.concat(loadModules(moduleFn.requires)).concat(moduleFn._runBlocks),runInvokeQueue(moduleFn._invokeQueue),runInvokeQueue(moduleFn._configBlocks)):isFunction(module)?runBlocks.push(providerInjector.invoke(module)):isArray(module)?runBlocks.push(providerInjector.invoke(module)):assertArgFn(module,"module")}catch(e){throw isArray(module)&&(module=module[module.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),$injectorMinErr("modulerr","Failed to instantiate module {0} due to:\n{1}",module,e.stack||e.message||e)}}}),runBlocks}function createInternalInjector(cache,factory){function getService(serviceName,caller){if(cache.hasOwnProperty(serviceName)){if(cache[serviceName]===INSTANTIATING)throw $injectorMinErr("cdep","Circular dependency found: {0}",serviceName+" <- "+path.join(" <- "));return cache[serviceName]}try{return path.unshift(serviceName),cache[serviceName]=INSTANTIATING,cache[serviceName]=factory(serviceName,caller)}catch(err){throw cache[serviceName]===INSTANTIATING&&delete cache[serviceName],err}finally{path.shift()}}function invoke(fn,self,locals,serviceName){"string"==typeof locals&&(serviceName=locals,locals=null);var length,i,key,args=[],$inject=createInjector.$$annotate(fn,strictDi,serviceName);for(i=0,length=$inject.length;length>i;i++){if(key=$inject[i],"string"!=typeof key)throw $injectorMinErr("itkn","Incorrect injection token! Expected service name as string, got {0}",key);args.push(locals&&locals.hasOwnProperty(key)?locals[key]:getService(key,serviceName))}return isArray(fn)&&(fn=fn[length]),fn.apply(self,args)}function instantiate(Type,locals,serviceName){var instance=Object.create((isArray(Type)?Type[Type.length-1]:Type).prototype||null),returnedValue=invoke(Type,instance,locals,serviceName);return isObject(returnedValue)||isFunction(returnedValue)?returnedValue:instance}return{invoke:invoke,instantiate:instantiate,get:getService,annotate:createInjector.$$annotate,has:function(name){return providerCache.hasOwnProperty(name+providerSuffix)||cache.hasOwnProperty(name)}}}strictDi=strictDi===!0;var INSTANTIATING={},providerSuffix="Provider",path=[],loadedModules=new HashMap([],!0),providerCache={$provide:{provider:supportObject(provider),factory:supportObject(factory),service:supportObject(service),value:supportObject(value),constant:supportObject(constant),decorator:decorator}},providerInjector=providerCache.$injector=createInternalInjector(providerCache,function(serviceName,caller){throw angular.isString(caller)&&path.push(caller),$injectorMinErr("unpr","Unknown provider: {0}",path.join(" <- "))}),instanceCache={},instanceInjector=instanceCache.$injector=createInternalInjector(instanceCache,function(serviceName,caller){var provider=providerInjector.get(serviceName+providerSuffix,caller);return instanceInjector.invoke(provider.$get,provider,undefined,serviceName)});return forEach(loadModules(modulesToLoad),function(fn){fn&&instanceInjector.invoke(fn)}),instanceInjector}function $AnchorScrollProvider(){var autoScrollingEnabled=!0;this.disableAutoScrolling=function(){autoScrollingEnabled=!1},this.$get=["$window","$location","$rootScope",function($window,$location,$rootScope){function getFirstAnchor(list){var result=null;return Array.prototype.some.call(list,function(element){return"a"===nodeName_(element)?(result=element,!0):void 0}),result}function getYOffset(){var offset=scroll.yOffset;if(isFunction(offset))offset=offset();else if(isElement(offset)){var elem=offset[0],style=$window.getComputedStyle(elem);offset="fixed"!==style.position?0:elem.getBoundingClientRect().bottom}else isNumber(offset)||(offset=0);return offset}function scrollTo(elem){if(elem){elem.scrollIntoView();var offset=getYOffset();if(offset){var elemTop=elem.getBoundingClientRect().top;$window.scrollBy(0,elemTop-offset)}}else $window.scrollTo(0,0)}function scroll(hash){hash=isString(hash)?hash:$location.hash();var elm;hash?(elm=document.getElementById(hash))?scrollTo(elm):(elm=getFirstAnchor(document.getElementsByName(hash)))?scrollTo(elm):"top"===hash&&scrollTo(null):scrollTo(null)}var document=$window.document;return autoScrollingEnabled&&$rootScope.$watch(function(){return $location.hash()},function(newVal,oldVal){(newVal!==oldVal||""!==newVal)&&jqLiteDocumentLoaded(function(){$rootScope.$evalAsync(scroll)})}),scroll}]}function mergeClasses(a,b){return a||b?a?b?(isArray(a)&&(a=a.join(" ")),isArray(b)&&(b=b.join(" ")),a+" "+b):a:b:""}function extractElementNode(element){for(var i=0;i<element.length;i++){var elm=element[i];if(elm.nodeType===ELEMENT_NODE)return elm}}function splitClasses(classes){isString(classes)&&(classes=classes.split(" "));var obj=createMap();return forEach(classes,function(klass){klass.length&&(obj[klass]=!0)}),obj}function prepareAnimateOptions(options){return isObject(options)?options:{}}function Browser(window,document,$log,$sniffer){function completeOutstandingRequest(fn){try{fn.apply(null,sliceArgs(arguments,1))}finally{if(outstandingRequestCount--,0===outstandingRequestCount)for(;outstandingRequestCallbacks.length;)try{outstandingRequestCallbacks.pop()()}catch(e){$log.error(e)}}}function getHash(url){var index=url.indexOf("#");return-1===index?"":url.substr(index)}function cacheStateAndFireUrlChange(){cacheState(),fireUrlChange()}function getCurrentState(){try{return history.state}catch(e){}}function cacheState(){cachedState=getCurrentState(),cachedState=isUndefined(cachedState)?null:cachedState,equals(cachedState,lastCachedState)&&(cachedState=lastCachedState),lastCachedState=cachedState}function fireUrlChange(){(lastBrowserUrl!==self.url()||lastHistoryState!==cachedState)&&(lastBrowserUrl=self.url(),lastHistoryState=cachedState,forEach(urlChangeListeners,function(listener){listener(self.url(),cachedState)}))}var self=this,location=(document[0],window.location),history=window.history,setTimeout=window.setTimeout,clearTimeout=window.clearTimeout,pendingDeferIds={};self.isMock=!1;var outstandingRequestCount=0,outstandingRequestCallbacks=[];self.$$completeOutstandingRequest=completeOutstandingRequest,self.$$incOutstandingRequestCount=function(){outstandingRequestCount++},self.notifyWhenNoOutstandingRequests=function(callback){0===outstandingRequestCount?callback():outstandingRequestCallbacks.push(callback)};var cachedState,lastHistoryState,lastBrowserUrl=location.href,baseElement=document.find("base"),reloadLocation=null;cacheState(),lastHistoryState=cachedState,self.url=function(url,replace,state){if(isUndefined(state)&&(state=null),location!==window.location&&(location=window.location),history!==window.history&&(history=window.history),url){var sameState=lastHistoryState===state;if(lastBrowserUrl===url&&(!$sniffer.history||sameState))return self;var sameBase=lastBrowserUrl&&stripHash(lastBrowserUrl)===stripHash(url);return lastBrowserUrl=url,lastHistoryState=state,!$sniffer.history||sameBase&&sameState?((!sameBase||reloadLocation)&&(reloadLocation=url),replace?location.replace(url):sameBase?location.hash=getHash(url):location.href=url):(history[replace?"replaceState":"pushState"](state,"",url),cacheState(),lastHistoryState=cachedState),self}return reloadLocation||location.href.replace(/%27/g,"'")},self.state=function(){return cachedState};var urlChangeListeners=[],urlChangeInit=!1,lastCachedState=null;self.onUrlChange=function(callback){return urlChangeInit||($sniffer.history&&jqLite(window).on("popstate",cacheStateAndFireUrlChange),jqLite(window).on("hashchange",cacheStateAndFireUrlChange),urlChangeInit=!0),urlChangeListeners.push(callback),callback},self.$$applicationDestroyed=function(){jqLite(window).off("hashchange popstate",cacheStateAndFireUrlChange)},self.$$checkUrlChange=fireUrlChange,self.baseHref=function(){var href=baseElement.attr("href");return href?href.replace(/^(https?\:)?\/\/[^\/]*/,""):""},self.defer=function(fn,delay){var timeoutId;return outstandingRequestCount++,timeoutId=setTimeout(function(){delete pendingDeferIds[timeoutId],completeOutstandingRequest(fn)},delay||0),pendingDeferIds[timeoutId]=!0,timeoutId},self.defer.cancel=function(deferId){return pendingDeferIds[deferId]?(delete pendingDeferIds[deferId],clearTimeout(deferId),completeOutstandingRequest(noop),!0):!1}}function $BrowserProvider(){this.$get=["$window","$log","$sniffer","$document",function($window,$log,$sniffer,$document){return new Browser($window,$document,$log,$sniffer)}]}function $CacheFactoryProvider(){this.$get=function(){function cacheFactory(cacheId,options){function refresh(entry){entry!=freshEnd&&(staleEnd?staleEnd==entry&&(staleEnd=entry.n):staleEnd=entry,link(entry.n,entry.p),link(entry,freshEnd),freshEnd=entry,freshEnd.n=null)}function link(nextEntry,prevEntry){nextEntry!=prevEntry&&(nextEntry&&(nextEntry.p=prevEntry),prevEntry&&(prevEntry.n=nextEntry))}if(cacheId in caches)throw minErr("$cacheFactory")("iid","CacheId '{0}' is already taken!",cacheId);var size=0,stats=extend({},options,{id:cacheId}),data={},capacity=options&&options.capacity||Number.MAX_VALUE,lruHash={},freshEnd=null,staleEnd=null;return caches[cacheId]={put:function(key,value){if(!isUndefined(value)){if(capacity<Number.MAX_VALUE){var lruEntry=lruHash[key]||(lruHash[key]={key:key});refresh(lruEntry)}return key in data||size++,data[key]=value,size>capacity&&this.remove(staleEnd.key),value}},get:function(key){if(capacity<Number.MAX_VALUE){var lruEntry=lruHash[key];if(!lruEntry)return;refresh(lruEntry)}return data[key]},remove:function(key){if(capacity<Number.MAX_VALUE){var lruEntry=lruHash[key];if(!lruEntry)return;lruEntry==freshEnd&&(freshEnd=lruEntry.p),lruEntry==staleEnd&&(staleEnd=lruEntry.n),link(lruEntry.n,lruEntry.p),delete lruHash[key]}delete data[key],size--},removeAll:function(){data={},size=0,lruHash={},freshEnd=staleEnd=null},destroy:function(){data=null,stats=null,lruHash=null,delete caches[cacheId]},info:function(){return extend({},stats,{size:size})}}}var caches={};return cacheFactory.info=function(){var info={};return forEach(caches,function(cache,cacheId){info[cacheId]=cache.info()}),info},cacheFactory.get=function(cacheId){return caches[cacheId]},cacheFactory}}function $TemplateCacheProvider(){this.$get=["$cacheFactory",function($cacheFactory){return $cacheFactory("templates")}]}function $CompileProvider($provide,$$sanitizeUriProvider){function parseIsolateBindings(scope,directiveName,isController){var LOCAL_REGEXP=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,bindings={};return forEach(scope,function(definition,scopeName){var match=definition.match(LOCAL_REGEXP);if(!match)throw $compileMinErr("iscp","Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}",directiveName,scopeName,definition,isController?"controller bindings definition":"isolate scope definition");bindings[scopeName]={mode:match[1][0],collection:"*"===match[2],optional:"?"===match[3],attrName:match[4]||scopeName}}),bindings}function parseDirectiveBindings(directive,directiveName){var bindings={isolateScope:null,bindToController:null};if(isObject(directive.scope)&&(directive.bindToController===!0?(bindings.bindToController=parseIsolateBindings(directive.scope,directiveName,!0),bindings.isolateScope={}):bindings.isolateScope=parseIsolateBindings(directive.scope,directiveName,!1)),isObject(directive.bindToController)&&(bindings.bindToController=parseIsolateBindings(directive.bindToController,directiveName,!0)),isObject(bindings.bindToController)){var controller=directive.controller,controllerAs=directive.controllerAs;if(!controller)throw $compileMinErr("noctrl","Cannot bind to controller without directive '{0}'s controller.",directiveName);if(!identifierForController(controller,controllerAs))throw $compileMinErr("noident","Cannot bind to controller without identifier for directive '{0}'.",directiveName)}return bindings}function assertValidDirectiveName(name){var letter=name.charAt(0);if(!letter||letter!==lowercase(letter))throw $compileMinErr("baddir","Directive name '{0}' is invalid. The first character must be a lowercase letter",name);if(name!==name.trim())throw $compileMinErr("baddir","Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces",name)}var hasDirectives={},Suffix="Directive",COMMENT_DIRECTIVE_REGEXP=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,CLASS_DIRECTIVE_REGEXP=/(([\w\-]+)(?:\:([^;]+))?;?)/,ALL_OR_NOTHING_ATTRS=makeMap("ngSrc,ngSrcset,src,srcset"),REQUIRE_PREFIX_REGEXP=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,EVENT_HANDLER_ATTR_REGEXP=/^(on[a-z]+|formaction)$/;this.directive=function registerDirective(name,directiveFactory){return assertNotHasOwnProperty(name,"directive"),isString(name)?(assertValidDirectiveName(name),assertArg(directiveFactory,"directiveFactory"),hasDirectives.hasOwnProperty(name)||(hasDirectives[name]=[],$provide.factory(name+Suffix,["$injector","$exceptionHandler",function($injector,$exceptionHandler){var directives=[];return forEach(hasDirectives[name],function(directiveFactory,index){try{var directive=$injector.invoke(directiveFactory);isFunction(directive)?directive={compile:valueFn(directive)}:!directive.compile&&directive.link&&(directive.compile=valueFn(directive.link)),directive.priority=directive.priority||0,directive.index=index,directive.name=directive.name||name,directive.require=directive.require||directive.controller&&directive.name,directive.restrict=directive.restrict||"EA";var bindings=directive.$$bindings=parseDirectiveBindings(directive,directive.name);isObject(bindings.isolateScope)&&(directive.$$isolateBindings=bindings.isolateScope),directive.$$moduleName=directiveFactory.$$moduleName,directives.push(directive)}catch(e){$exceptionHandler(e)}}),directives}])),hasDirectives[name].push(directiveFactory)):forEach(name,reverseParams(registerDirective)),this},this.aHrefSanitizationWhitelist=function(regexp){return isDefined(regexp)?($$sanitizeUriProvider.aHrefSanitizationWhitelist(regexp),this):$$sanitizeUriProvider.aHrefSanitizationWhitelist()},this.imgSrcSanitizationWhitelist=function(regexp){return isDefined(regexp)?($$sanitizeUriProvider.imgSrcSanitizationWhitelist(regexp),this):$$sanitizeUriProvider.imgSrcSanitizationWhitelist()};var debugInfoEnabled=!0;this.debugInfoEnabled=function(enabled){return isDefined(enabled)?(debugInfoEnabled=enabled,this):debugInfoEnabled},this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function($injector,$interpolate,$exceptionHandler,$templateRequest,$parse,$controller,$rootScope,$document,$sce,$animate,$$sanitizeUri){function safeAddClass($element,className){try{$element.addClass(className)}catch(e){}}function compile($compileNodes,transcludeFn,maxPriority,ignoreDirective,previousCompileContext){$compileNodes instanceof jqLite||($compileNodes=jqLite($compileNodes)),forEach($compileNodes,function(node,index){node.nodeType==NODE_TYPE_TEXT&&node.nodeValue.match(/\S+/)&&($compileNodes[index]=jqLite(node).wrap("<span></span>").parent()[0])});var compositeLinkFn=compileNodes($compileNodes,transcludeFn,$compileNodes,maxPriority,ignoreDirective,previousCompileContext);compile.$$addScopeClass($compileNodes);var namespace=null;return function(scope,cloneConnectFn,options){assertArg(scope,"scope"),options=options||{};var parentBoundTranscludeFn=options.parentBoundTranscludeFn,transcludeControllers=options.transcludeControllers,futureParentElement=options.futureParentElement;parentBoundTranscludeFn&&parentBoundTranscludeFn.$$boundTransclude&&(parentBoundTranscludeFn=parentBoundTranscludeFn.$$boundTransclude),namespace||(namespace=detectNamespaceForChildElements(futureParentElement));var $linkNode;if($linkNode="html"!==namespace?jqLite(wrapTemplate(namespace,jqLite("<div>").append($compileNodes).html())):cloneConnectFn?JQLitePrototype.clone.call($compileNodes):$compileNodes,transcludeControllers)for(var controllerName in transcludeControllers)$linkNode.data("$"+controllerName+"Controller",transcludeControllers[controllerName].instance);return compile.$$addScopeInfo($linkNode,scope),cloneConnectFn&&cloneConnectFn($linkNode,scope),compositeLinkFn&&compositeLinkFn(scope,$linkNode,$linkNode,parentBoundTranscludeFn),$linkNode}}function detectNamespaceForChildElements(parentElement){var node=parentElement&&parentElement[0];return node?"foreignobject"!==nodeName_(node)&&node.toString().match(/SVG/)?"svg":"html":"html"}function compileNodes(nodeList,transcludeFn,$rootElement,maxPriority,ignoreDirective,previousCompileContext){function compositeLinkFn(scope,nodeList,$rootElement,parentBoundTranscludeFn){var nodeLinkFn,childLinkFn,node,childScope,i,ii,idx,childBoundTranscludeFn,stableNodeList;if(nodeLinkFnFound){var nodeListLength=nodeList.length;for(stableNodeList=new Array(nodeListLength),i=0;i<linkFns.length;i+=3)idx=linkFns[i],stableNodeList[idx]=nodeList[idx]}else stableNodeList=nodeList;for(i=0,ii=linkFns.length;ii>i;)if(node=stableNodeList[linkFns[i++]],nodeLinkFn=linkFns[i++],childLinkFn=linkFns[i++],nodeLinkFn){if(nodeLinkFn.scope){childScope=scope.$new(),compile.$$addScopeInfo(jqLite(node),childScope);var destroyBindings=nodeLinkFn.$$destroyBindings;destroyBindings&&(nodeLinkFn.$$destroyBindings=null,childScope.$on("$destroyed",destroyBindings))}else childScope=scope;childBoundTranscludeFn=nodeLinkFn.transcludeOnThisElement?createBoundTranscludeFn(scope,nodeLinkFn.transclude,parentBoundTranscludeFn):!nodeLinkFn.templateOnThisElement&&parentBoundTranscludeFn?parentBoundTranscludeFn:!parentBoundTranscludeFn&&transcludeFn?createBoundTranscludeFn(scope,transcludeFn):null,nodeLinkFn(childLinkFn,childScope,node,$rootElement,childBoundTranscludeFn,nodeLinkFn)}else childLinkFn&&childLinkFn(scope,node.childNodes,undefined,parentBoundTranscludeFn)}for(var attrs,directives,nodeLinkFn,childNodes,childLinkFn,linkFnFound,nodeLinkFnFound,linkFns=[],i=0;i<nodeList.length;i++)attrs=new Attributes,directives=collectDirectives(nodeList[i],[],attrs,0===i?maxPriority:undefined,ignoreDirective),nodeLinkFn=directives.length?applyDirectivesToNode(directives,nodeList[i],attrs,transcludeFn,$rootElement,null,[],[],previousCompileContext):null,nodeLinkFn&&nodeLinkFn.scope&&compile.$$addScopeClass(attrs.$$element),childLinkFn=nodeLinkFn&&nodeLinkFn.terminal||!(childNodes=nodeList[i].childNodes)||!childNodes.length?null:compileNodes(childNodes,nodeLinkFn?(nodeLinkFn.transcludeOnThisElement||!nodeLinkFn.templateOnThisElement)&&nodeLinkFn.transclude:transcludeFn),(nodeLinkFn||childLinkFn)&&(linkFns.push(i,nodeLinkFn,childLinkFn),linkFnFound=!0,nodeLinkFnFound=nodeLinkFnFound||nodeLinkFn),previousCompileContext=null;return linkFnFound?compositeLinkFn:null}function createBoundTranscludeFn(scope,transcludeFn,previousBoundTranscludeFn){var boundTranscludeFn=function(transcludedScope,cloneFn,controllers,futureParentElement,containingScope){return transcludedScope||(transcludedScope=scope.$new(!1,containingScope),transcludedScope.$$transcluded=!0),transcludeFn(transcludedScope,cloneFn,{parentBoundTranscludeFn:previousBoundTranscludeFn,transcludeControllers:controllers,futureParentElement:futureParentElement})};return boundTranscludeFn}function collectDirectives(node,directives,attrs,maxPriority,ignoreDirective){var match,className,nodeType=node.nodeType,attrsMap=attrs.$attr;switch(nodeType){case NODE_TYPE_ELEMENT:addDirective(directives,directiveNormalize(nodeName_(node)),"E",maxPriority,ignoreDirective);for(var attr,name,nName,ngAttrName,value,isNgAttr,nAttrs=node.attributes,j=0,jj=nAttrs&&nAttrs.length;jj>j;j++){var attrStartName=!1,attrEndName=!1;attr=nAttrs[j],name=attr.name,value=trim(attr.value),ngAttrName=directiveNormalize(name),(isNgAttr=NG_ATTR_BINDING.test(ngAttrName))&&(name=name.replace(PREFIX_REGEXP,"").substr(8).replace(/_(.)/g,function(match,letter){return letter.toUpperCase()}));var directiveNName=ngAttrName.replace(/(Start|End)$/,"");directiveIsMultiElement(directiveNName)&&ngAttrName===directiveNName+"Start"&&(attrStartName=name,attrEndName=name.substr(0,name.length-5)+"end",name=name.substr(0,name.length-6)),nName=directiveNormalize(name.toLowerCase()),attrsMap[nName]=name,(isNgAttr||!attrs.hasOwnProperty(nName))&&(attrs[nName]=value,getBooleanAttrName(node,nName)&&(attrs[nName]=!0)),addAttrInterpolateDirective(node,directives,value,nName,isNgAttr),addDirective(directives,nName,"A",maxPriority,ignoreDirective,attrStartName,attrEndName)}if(className=node.className,isObject(className)&&(className=className.animVal),isString(className)&&""!==className)for(;match=CLASS_DIRECTIVE_REGEXP.exec(className);)nName=directiveNormalize(match[2]),addDirective(directives,nName,"C",maxPriority,ignoreDirective)&&(attrs[nName]=trim(match[3])),className=className.substr(match.index+match[0].length);break;case NODE_TYPE_TEXT:if(11===msie)for(;node.parentNode&&node.nextSibling&&node.nextSibling.nodeType===NODE_TYPE_TEXT;)node.nodeValue=node.nodeValue+node.nextSibling.nodeValue,node.parentNode.removeChild(node.nextSibling);addTextInterpolateDirective(directives,node.nodeValue);break;case NODE_TYPE_COMMENT:try{match=COMMENT_DIRECTIVE_REGEXP.exec(node.nodeValue),match&&(nName=directiveNormalize(match[1]),addDirective(directives,nName,"M",maxPriority,ignoreDirective)&&(attrs[nName]=trim(match[2])))}catch(e){}}return directives.sort(byPriority),directives}function groupScan(node,attrStart,attrEnd){var nodes=[],depth=0;if(attrStart&&node.hasAttribute&&node.hasAttribute(attrStart)){do{if(!node)throw $compileMinErr("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",attrStart,attrEnd);node.nodeType==NODE_TYPE_ELEMENT&&(node.hasAttribute(attrStart)&&depth++,node.hasAttribute(attrEnd)&&depth--),nodes.push(node),node=node.nextSibling}while(depth>0)}else nodes.push(node);return jqLite(nodes)}function groupElementsLinkFnWrapper(linkFn,attrStart,attrEnd){return function(scope,element,attrs,controllers,transcludeFn){return element=groupScan(element[0],attrStart,attrEnd),linkFn(scope,element,attrs,controllers,transcludeFn)}}function applyDirectivesToNode(directives,compileNode,templateAttrs,transcludeFn,jqCollection,originalReplaceDirective,preLinkFns,postLinkFns,previousCompileContext){function addLinkFns(pre,post,attrStart,attrEnd){pre&&(attrStart&&(pre=groupElementsLinkFnWrapper(pre,attrStart,attrEnd)),pre.require=directive.require,pre.directiveName=directiveName,(newIsolateScopeDirective===directive||directive.$$isolateScope)&&(pre=cloneAndAnnotateFn(pre,{isolateScope:!0})),preLinkFns.push(pre)),post&&(attrStart&&(post=groupElementsLinkFnWrapper(post,attrStart,attrEnd)),post.require=directive.require,post.directiveName=directiveName,(newIsolateScopeDirective===directive||directive.$$isolateScope)&&(post=cloneAndAnnotateFn(post,{isolateScope:!0})),postLinkFns.push(post))}function getControllers(directiveName,require,$element,elementControllers){var value;if(isString(require)){var match=require.match(REQUIRE_PREFIX_REGEXP),name=require.substring(match[0].length),inheritType=match[1]||match[3],optional="?"===match[2];if("^^"===inheritType?$element=$element.parent():(value=elementControllers&&elementControllers[name],value=value&&value.instance),!value){var dataName="$"+name+"Controller";value=inheritType?$element.inheritedData(dataName):$element.data(dataName)}if(!value&&!optional)throw $compileMinErr("ctreq","Controller '{0}', required by directive '{1}', can't be found!",name,directiveName)}else if(isArray(require)){value=[];for(var i=0,ii=require.length;ii>i;i++)value[i]=getControllers(directiveName,require[i],$element,elementControllers)}return value||null}function setupControllers($element,attrs,transcludeFn,controllerDirectives,isolateScope,scope){var elementControllers=createMap();for(var controllerKey in controllerDirectives){var directive=controllerDirectives[controllerKey],locals={$scope:directive===newIsolateScopeDirective||directive.$$isolateScope?isolateScope:scope,$element:$element,$attrs:attrs,$transclude:transcludeFn},controller=directive.controller;"@"==controller&&(controller=attrs[directive.name]);var controllerInstance=$controller(controller,locals,!0,directive.controllerAs);elementControllers[directive.name]=controllerInstance,hasElementTranscludeDirective||$element.data("$"+directive.name+"Controller",controllerInstance.instance)}return elementControllers}function nodeLinkFn(childLinkFn,scope,linkNode,$rootElement,boundTranscludeFn,thisLinkFn){function controllersBoundTransclude(scope,cloneAttachFn,futureParentElement){var transcludeControllers;return isScope(scope)||(futureParentElement=cloneAttachFn,cloneAttachFn=scope,scope=undefined),hasElementTranscludeDirective&&(transcludeControllers=elementControllers),futureParentElement||(futureParentElement=hasElementTranscludeDirective?$element.parent():$element),boundTranscludeFn(scope,cloneAttachFn,transcludeControllers,futureParentElement,scopeToChild)}var i,ii,linkFn,controller,isolateScope,elementControllers,transcludeFn,$element,attrs;if(compileNode===linkNode?(attrs=templateAttrs,$element=templateAttrs.$$element):($element=jqLite(linkNode),attrs=new Attributes($element,templateAttrs)),newIsolateScopeDirective&&(isolateScope=scope.$new(!0)),boundTranscludeFn&&(transcludeFn=controllersBoundTransclude,transcludeFn.$$boundTransclude=boundTranscludeFn),controllerDirectives&&(elementControllers=setupControllers($element,attrs,transcludeFn,controllerDirectives,isolateScope,scope)),newIsolateScopeDirective&&(compile.$$addScopeInfo($element,isolateScope,!0,!(templateDirective&&(templateDirective===newIsolateScopeDirective||templateDirective===newIsolateScopeDirective.$$originalDirective))),compile.$$addScopeClass($element,!0),isolateScope.$$isolateBindings=newIsolateScopeDirective.$$isolateBindings,initializeDirectiveBindings(scope,attrs,isolateScope,isolateScope.$$isolateBindings,newIsolateScopeDirective,isolateScope)),elementControllers){var bindings,controllerForBindings,scopeDirective=newIsolateScopeDirective||newScopeDirective;scopeDirective&&elementControllers[scopeDirective.name]&&(bindings=scopeDirective.$$bindings.bindToController,controller=elementControllers[scopeDirective.name],controller&&controller.identifier&&bindings&&(controllerForBindings=controller,thisLinkFn.$$destroyBindings=initializeDirectiveBindings(scope,attrs,controller.instance,bindings,scopeDirective)));for(i in elementControllers){controller=elementControllers[i];var controllerResult=controller();controllerResult!==controller.instance&&(controller.instance=controllerResult,$element.data("$"+i+"Controller",controllerResult),controller===controllerForBindings&&(thisLinkFn.$$destroyBindings(),thisLinkFn.$$destroyBindings=initializeDirectiveBindings(scope,attrs,controllerResult,bindings,scopeDirective)))}}for(i=0,ii=preLinkFns.length;ii>i;i++)linkFn=preLinkFns[i],invokeLinkFn(linkFn,linkFn.isolateScope?isolateScope:scope,$element,attrs,linkFn.require&&getControllers(linkFn.directiveName,linkFn.require,$element,elementControllers),transcludeFn);var scopeToChild=scope;for(newIsolateScopeDirective&&(newIsolateScopeDirective.template||null===newIsolateScopeDirective.templateUrl)&&(scopeToChild=isolateScope),childLinkFn&&childLinkFn(scopeToChild,linkNode.childNodes,undefined,boundTranscludeFn),i=postLinkFns.length-1;i>=0;i--)linkFn=postLinkFns[i],invokeLinkFn(linkFn,linkFn.isolateScope?isolateScope:scope,$element,attrs,linkFn.require&&getControllers(linkFn.directiveName,linkFn.require,$element,elementControllers),transcludeFn)}previousCompileContext=previousCompileContext||{};for(var directive,directiveName,$template,linkFn,directiveValue,terminalPriority=-Number.MAX_VALUE,newScopeDirective=previousCompileContext.newScopeDirective,controllerDirectives=previousCompileContext.controllerDirectives,newIsolateScopeDirective=previousCompileContext.newIsolateScopeDirective,templateDirective=previousCompileContext.templateDirective,nonTlbTranscludeDirective=previousCompileContext.nonTlbTranscludeDirective,hasTranscludeDirective=!1,hasTemplate=!1,hasElementTranscludeDirective=previousCompileContext.hasElementTranscludeDirective,$compileNode=templateAttrs.$$element=jqLite(compileNode),replaceDirective=originalReplaceDirective,childTranscludeFn=transcludeFn,i=0,ii=directives.length;ii>i;i++){directive=directives[i];var attrStart=directive.$$start,attrEnd=directive.$$end;if(attrStart&&($compileNode=groupScan(compileNode,attrStart,attrEnd)),$template=undefined,terminalPriority>directive.priority)break;
if((directiveValue=directive.scope)&&(directive.templateUrl||(isObject(directiveValue)?(assertNoDuplicate("new/isolated scope",newIsolateScopeDirective||newScopeDirective,directive,$compileNode),newIsolateScopeDirective=directive):assertNoDuplicate("new/isolated scope",newIsolateScopeDirective,directive,$compileNode)),newScopeDirective=newScopeDirective||directive),directiveName=directive.name,!directive.templateUrl&&directive.controller&&(directiveValue=directive.controller,controllerDirectives=controllerDirectives||createMap(),assertNoDuplicate("'"+directiveName+"' controller",controllerDirectives[directiveName],directive,$compileNode),controllerDirectives[directiveName]=directive),(directiveValue=directive.transclude)&&(hasTranscludeDirective=!0,directive.$$tlb||(assertNoDuplicate("transclusion",nonTlbTranscludeDirective,directive,$compileNode),nonTlbTranscludeDirective=directive),"element"==directiveValue?(hasElementTranscludeDirective=!0,terminalPriority=directive.priority,$template=$compileNode,$compileNode=templateAttrs.$$element=jqLite(document.createComment(" "+directiveName+": "+templateAttrs[directiveName]+" ")),compileNode=$compileNode[0],replaceWith(jqCollection,sliceArgs($template),compileNode),childTranscludeFn=compile($template,transcludeFn,terminalPriority,replaceDirective&&replaceDirective.name,{nonTlbTranscludeDirective:nonTlbTranscludeDirective})):($template=jqLite(jqLiteClone(compileNode)).contents(),$compileNode.empty(),childTranscludeFn=compile($template,transcludeFn))),directive.template)if(hasTemplate=!0,assertNoDuplicate("template",templateDirective,directive,$compileNode),templateDirective=directive,directiveValue=isFunction(directive.template)?directive.template($compileNode,templateAttrs):directive.template,directiveValue=denormalizeTemplate(directiveValue),directive.replace){if(replaceDirective=directive,$template=jqLiteIsTextNode(directiveValue)?[]:removeComments(wrapTemplate(directive.templateNamespace,trim(directiveValue))),compileNode=$template[0],1!=$template.length||compileNode.nodeType!==NODE_TYPE_ELEMENT)throw $compileMinErr("tplrt","Template for directive '{0}' must have exactly one root element. {1}",directiveName,"");replaceWith(jqCollection,$compileNode,compileNode);var newTemplateAttrs={$attr:{}},templateDirectives=collectDirectives(compileNode,[],newTemplateAttrs),unprocessedDirectives=directives.splice(i+1,directives.length-(i+1));newIsolateScopeDirective&&markDirectivesAsIsolate(templateDirectives),directives=directives.concat(templateDirectives).concat(unprocessedDirectives),mergeTemplateAttributes(templateAttrs,newTemplateAttrs),ii=directives.length}else $compileNode.html(directiveValue);if(directive.templateUrl)hasTemplate=!0,assertNoDuplicate("template",templateDirective,directive,$compileNode),templateDirective=directive,directive.replace&&(replaceDirective=directive),nodeLinkFn=compileTemplateUrl(directives.splice(i,directives.length-i),$compileNode,templateAttrs,jqCollection,hasTranscludeDirective&&childTranscludeFn,preLinkFns,postLinkFns,{controllerDirectives:controllerDirectives,newScopeDirective:newScopeDirective!==directive&&newScopeDirective,newIsolateScopeDirective:newIsolateScopeDirective,templateDirective:templateDirective,nonTlbTranscludeDirective:nonTlbTranscludeDirective}),ii=directives.length;else if(directive.compile)try{linkFn=directive.compile($compileNode,templateAttrs,childTranscludeFn),isFunction(linkFn)?addLinkFns(null,linkFn,attrStart,attrEnd):linkFn&&addLinkFns(linkFn.pre,linkFn.post,attrStart,attrEnd)}catch(e){$exceptionHandler(e,startingTag($compileNode))}directive.terminal&&(nodeLinkFn.terminal=!0,terminalPriority=Math.max(terminalPriority,directive.priority))}return nodeLinkFn.scope=newScopeDirective&&newScopeDirective.scope===!0,nodeLinkFn.transcludeOnThisElement=hasTranscludeDirective,nodeLinkFn.templateOnThisElement=hasTemplate,nodeLinkFn.transclude=childTranscludeFn,previousCompileContext.hasElementTranscludeDirective=hasElementTranscludeDirective,nodeLinkFn}function markDirectivesAsIsolate(directives){for(var j=0,jj=directives.length;jj>j;j++)directives[j]=inherit(directives[j],{$$isolateScope:!0})}function addDirective(tDirectives,name,location,maxPriority,ignoreDirective,startAttrName,endAttrName){if(name===ignoreDirective)return null;var match=null;if(hasDirectives.hasOwnProperty(name))for(var directive,directives=$injector.get(name+Suffix),i=0,ii=directives.length;ii>i;i++)try{directive=directives[i],(maxPriority===undefined||maxPriority>directive.priority)&&-1!=directive.restrict.indexOf(location)&&(startAttrName&&(directive=inherit(directive,{$$start:startAttrName,$$end:endAttrName})),tDirectives.push(directive),match=directive)}catch(e){$exceptionHandler(e)}return match}function directiveIsMultiElement(name){if(hasDirectives.hasOwnProperty(name))for(var directive,directives=$injector.get(name+Suffix),i=0,ii=directives.length;ii>i;i++)if(directive=directives[i],directive.multiElement)return!0;return!1}function mergeTemplateAttributes(dst,src){var srcAttr=src.$attr,dstAttr=dst.$attr,$element=dst.$$element;forEach(dst,function(value,key){"$"!=key.charAt(0)&&(src[key]&&src[key]!==value&&(value+=("style"===key?";":" ")+src[key]),dst.$set(key,value,!0,srcAttr[key]))}),forEach(src,function(value,key){"class"==key?(safeAddClass($element,value),dst["class"]=(dst["class"]?dst["class"]+" ":"")+value):"style"==key?($element.attr("style",$element.attr("style")+";"+value),dst.style=(dst.style?dst.style+";":"")+value):"$"==key.charAt(0)||dst.hasOwnProperty(key)||(dst[key]=value,dstAttr[key]=srcAttr[key])})}function compileTemplateUrl(directives,$compileNode,tAttrs,$rootElement,childTranscludeFn,preLinkFns,postLinkFns,previousCompileContext){var afterTemplateNodeLinkFn,afterTemplateChildLinkFn,linkQueue=[],beforeTemplateCompileNode=$compileNode[0],origAsyncDirective=directives.shift(),derivedSyncDirective=inherit(origAsyncDirective,{templateUrl:null,transclude:null,replace:null,$$originalDirective:origAsyncDirective}),templateUrl=isFunction(origAsyncDirective.templateUrl)?origAsyncDirective.templateUrl($compileNode,tAttrs):origAsyncDirective.templateUrl,templateNamespace=origAsyncDirective.templateNamespace;return $compileNode.empty(),$templateRequest(templateUrl).then(function(content){var compileNode,tempTemplateAttrs,$template,childBoundTranscludeFn;if(content=denormalizeTemplate(content),origAsyncDirective.replace){if($template=jqLiteIsTextNode(content)?[]:removeComments(wrapTemplate(templateNamespace,trim(content))),compileNode=$template[0],1!=$template.length||compileNode.nodeType!==NODE_TYPE_ELEMENT)throw $compileMinErr("tplrt","Template for directive '{0}' must have exactly one root element. {1}",origAsyncDirective.name,templateUrl);tempTemplateAttrs={$attr:{}},replaceWith($rootElement,$compileNode,compileNode);var templateDirectives=collectDirectives(compileNode,[],tempTemplateAttrs);isObject(origAsyncDirective.scope)&&markDirectivesAsIsolate(templateDirectives),directives=templateDirectives.concat(directives),mergeTemplateAttributes(tAttrs,tempTemplateAttrs)}else compileNode=beforeTemplateCompileNode,$compileNode.html(content);for(directives.unshift(derivedSyncDirective),afterTemplateNodeLinkFn=applyDirectivesToNode(directives,compileNode,tAttrs,childTranscludeFn,$compileNode,origAsyncDirective,preLinkFns,postLinkFns,previousCompileContext),forEach($rootElement,function(node,i){node==compileNode&&($rootElement[i]=$compileNode[0])}),afterTemplateChildLinkFn=compileNodes($compileNode[0].childNodes,childTranscludeFn);linkQueue.length;){var scope=linkQueue.shift(),beforeTemplateLinkNode=linkQueue.shift(),linkRootElement=linkQueue.shift(),boundTranscludeFn=linkQueue.shift(),linkNode=$compileNode[0];if(!scope.$$destroyed){if(beforeTemplateLinkNode!==beforeTemplateCompileNode){var oldClasses=beforeTemplateLinkNode.className;previousCompileContext.hasElementTranscludeDirective&&origAsyncDirective.replace||(linkNode=jqLiteClone(compileNode)),replaceWith(linkRootElement,jqLite(beforeTemplateLinkNode),linkNode),safeAddClass(jqLite(linkNode),oldClasses)}childBoundTranscludeFn=afterTemplateNodeLinkFn.transcludeOnThisElement?createBoundTranscludeFn(scope,afterTemplateNodeLinkFn.transclude,boundTranscludeFn):boundTranscludeFn,afterTemplateNodeLinkFn(afterTemplateChildLinkFn,scope,linkNode,$rootElement,childBoundTranscludeFn,afterTemplateNodeLinkFn)}}linkQueue=null}),function(ignoreChildLinkFn,scope,node,rootElement,boundTranscludeFn){var childBoundTranscludeFn=boundTranscludeFn;scope.$$destroyed||(linkQueue?linkQueue.push(scope,node,rootElement,childBoundTranscludeFn):(afterTemplateNodeLinkFn.transcludeOnThisElement&&(childBoundTranscludeFn=createBoundTranscludeFn(scope,afterTemplateNodeLinkFn.transclude,boundTranscludeFn)),afterTemplateNodeLinkFn(afterTemplateChildLinkFn,scope,node,rootElement,childBoundTranscludeFn,afterTemplateNodeLinkFn)))}}function byPriority(a,b){var diff=b.priority-a.priority;return 0!==diff?diff:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function assertNoDuplicate(what,previousDirective,directive,element){function wrapModuleNameIfDefined(moduleName){return moduleName?" (module: "+moduleName+")":""}if(previousDirective)throw $compileMinErr("multidir","Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}",previousDirective.name,wrapModuleNameIfDefined(previousDirective.$$moduleName),directive.name,wrapModuleNameIfDefined(directive.$$moduleName),what,startingTag(element))}function addTextInterpolateDirective(directives,text){var interpolateFn=$interpolate(text,!0);interpolateFn&&directives.push({priority:0,compile:function(templateNode){var templateNodeParent=templateNode.parent(),hasCompileParent=!!templateNodeParent.length;return hasCompileParent&&compile.$$addBindingClass(templateNodeParent),function(scope,node){var parent=node.parent();hasCompileParent||compile.$$addBindingClass(parent),compile.$$addBindingInfo(parent,interpolateFn.expressions),scope.$watch(interpolateFn,function(value){node[0].nodeValue=value})}}})}function wrapTemplate(type,template){switch(type=lowercase(type||"html")){case"svg":case"math":var wrapper=document.createElement("div");return wrapper.innerHTML="<"+type+">"+template+"</"+type+">",wrapper.childNodes[0].childNodes;default:return template}}function getTrustedContext(node,attrNormalizedName){if("srcdoc"==attrNormalizedName)return $sce.HTML;var tag=nodeName_(node);return"xlinkHref"==attrNormalizedName||"form"==tag&&"action"==attrNormalizedName||"img"!=tag&&("src"==attrNormalizedName||"ngSrc"==attrNormalizedName)?$sce.RESOURCE_URL:void 0}function addAttrInterpolateDirective(node,directives,value,name,allOrNothing){var trustedContext=getTrustedContext(node,name);allOrNothing=ALL_OR_NOTHING_ATTRS[name]||allOrNothing;var interpolateFn=$interpolate(value,!0,trustedContext,allOrNothing);if(interpolateFn){if("multiple"===name&&"select"===nodeName_(node))throw $compileMinErr("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",startingTag(node));directives.push({priority:100,compile:function(){return{pre:function(scope,element,attr){var $$observers=attr.$$observers||(attr.$$observers={});if(EVENT_HANDLER_ATTR_REGEXP.test(name))throw $compileMinErr("nodomevents","Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");var newValue=attr[name];newValue!==value&&(interpolateFn=newValue&&$interpolate(newValue,!0,trustedContext,allOrNothing),value=newValue),interpolateFn&&(attr[name]=interpolateFn(scope),($$observers[name]||($$observers[name]=[])).$$inter=!0,(attr.$$observers&&attr.$$observers[name].$$scope||scope).$watch(interpolateFn,function(newValue,oldValue){"class"===name&&newValue!=oldValue?attr.$updateClass(newValue,oldValue):attr.$set(name,newValue)}))}}}})}}function replaceWith($rootElement,elementsToRemove,newNode){var i,ii,firstElementToRemove=elementsToRemove[0],removeCount=elementsToRemove.length,parent=firstElementToRemove.parentNode;if($rootElement)for(i=0,ii=$rootElement.length;ii>i;i++)if($rootElement[i]==firstElementToRemove){$rootElement[i++]=newNode;for(var j=i,j2=j+removeCount-1,jj=$rootElement.length;jj>j;j++,j2++)jj>j2?$rootElement[j]=$rootElement[j2]:delete $rootElement[j];$rootElement.length-=removeCount-1,$rootElement.context===firstElementToRemove&&($rootElement.context=newNode);break}parent&&parent.replaceChild(newNode,firstElementToRemove);var fragment=document.createDocumentFragment();fragment.appendChild(firstElementToRemove),jqLite.hasData(firstElementToRemove)&&(jqLite(newNode).data(jqLite(firstElementToRemove).data()),jQuery?(skipDestroyOnNextJQueryCleanData=!0,jQuery.cleanData([firstElementToRemove])):delete jqLite.cache[firstElementToRemove[jqLite.expando]]);for(var k=1,kk=elementsToRemove.length;kk>k;k++){var element=elementsToRemove[k];jqLite(element).remove(),fragment.appendChild(element),delete elementsToRemove[k]}elementsToRemove[0]=newNode,elementsToRemove.length=1}function cloneAndAnnotateFn(fn,annotation){return extend(function(){return fn.apply(null,arguments)},fn,annotation)}function invokeLinkFn(linkFn,scope,$element,attrs,controllers,transcludeFn){try{linkFn(scope,$element,attrs,controllers,transcludeFn)}catch(e){$exceptionHandler(e,startingTag($element))}}function initializeDirectiveBindings(scope,attrs,destination,bindings,directive,newScope){var onNewScopeDestroyed;forEach(bindings,function(definition,scopeName){var lastValue,parentGet,parentSet,compare,attrName=definition.attrName,optional=definition.optional,mode=definition.mode;switch(hasOwnProperty.call(attrs,attrName)||(attrs[attrName]=undefined),mode){case"@":attrs[attrName]||optional||(destination[scopeName]=undefined),attrs.$observe(attrName,function(value){destination[scopeName]=value}),attrs.$$observers[attrName].$$scope=scope,attrs[attrName]&&(destination[scopeName]=$interpolate(attrs[attrName])(scope));break;case"=":if(optional&&!attrs[attrName])return;parentGet=$parse(attrs[attrName]),compare=parentGet.literal?equals:function(a,b){return a===b||a!==a&&b!==b},parentSet=parentGet.assign||function(){throw lastValue=destination[scopeName]=parentGet(scope),$compileMinErr("nonassign","Expression '{0}' used with directive '{1}' is non-assignable!",attrs[attrName],directive.name)},lastValue=destination[scopeName]=parentGet(scope);var parentValueWatch=function(parentValue){return compare(parentValue,destination[scopeName])||(compare(parentValue,lastValue)?parentSet(scope,parentValue=destination[scopeName]):destination[scopeName]=parentValue),lastValue=parentValue};parentValueWatch.$stateful=!0;var unwatch;unwatch=definition.collection?scope.$watchCollection(attrs[attrName],parentValueWatch):scope.$watch($parse(attrs[attrName],parentValueWatch),null,parentGet.literal),onNewScopeDestroyed=onNewScopeDestroyed||[],onNewScopeDestroyed.push(unwatch);break;case"&":if(parentGet=$parse(attrs[attrName]),parentGet===noop&&optional)break;destination[scopeName]=function(locals){return parentGet(scope,locals)}}});var destroyBindings=onNewScopeDestroyed?function(){for(var i=0,ii=onNewScopeDestroyed.length;ii>i;++i)onNewScopeDestroyed[i]()}:noop;return newScope&&destroyBindings!==noop?(newScope.$on("$destroy",destroyBindings),noop):destroyBindings}var Attributes=function(element,attributesToCopy){if(attributesToCopy){var i,l,key,keys=Object.keys(attributesToCopy);for(i=0,l=keys.length;l>i;i++)key=keys[i],this[key]=attributesToCopy[key]}else this.$attr={};this.$$element=element};Attributes.prototype={$normalize:directiveNormalize,$addClass:function(classVal){classVal&&classVal.length>0&&$animate.addClass(this.$$element,classVal)},$removeClass:function(classVal){classVal&&classVal.length>0&&$animate.removeClass(this.$$element,classVal)},$updateClass:function(newClasses,oldClasses){var toAdd=tokenDifference(newClasses,oldClasses);toAdd&&toAdd.length&&$animate.addClass(this.$$element,toAdd);var toRemove=tokenDifference(oldClasses,newClasses);toRemove&&toRemove.length&&$animate.removeClass(this.$$element,toRemove)},$set:function(key,value,writeAttr,attrName){var nodeName,node=this.$$element[0],booleanKey=getBooleanAttrName(node,key),aliasedKey=getAliasedAttrName(node,key),observer=key;if(booleanKey?(this.$$element.prop(key,value),attrName=booleanKey):aliasedKey&&(this[aliasedKey]=value,observer=aliasedKey),this[key]=value,attrName?this.$attr[key]=attrName:(attrName=this.$attr[key],attrName||(this.$attr[key]=attrName=snake_case(key,"-"))),nodeName=nodeName_(this.$$element),"a"===nodeName&&"href"===key||"img"===nodeName&&"src"===key)this[key]=value=$$sanitizeUri(value,"src"===key);else if("img"===nodeName&&"srcset"===key){for(var result="",trimmedSrcset=trim(value),srcPattern=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,pattern=/\s/.test(trimmedSrcset)?srcPattern:/(,)/,rawUris=trimmedSrcset.split(pattern),nbrUrisWith2parts=Math.floor(rawUris.length/2),i=0;nbrUrisWith2parts>i;i++){var innerIdx=2*i;result+=$$sanitizeUri(trim(rawUris[innerIdx]),!0),result+=" "+trim(rawUris[innerIdx+1])}var lastTuple=trim(rawUris[2*i]).split(/\s/);result+=$$sanitizeUri(trim(lastTuple[0]),!0),2===lastTuple.length&&(result+=" "+trim(lastTuple[1])),this[key]=value=result}writeAttr!==!1&&(null===value||value===undefined?this.$$element.removeAttr(attrName):this.$$element.attr(attrName,value));var $$observers=this.$$observers;$$observers&&forEach($$observers[observer],function(fn){try{fn(value)}catch(e){$exceptionHandler(e)}})},$observe:function(key,fn){var attrs=this,$$observers=attrs.$$observers||(attrs.$$observers=createMap()),listeners=$$observers[key]||($$observers[key]=[]);return listeners.push(fn),$rootScope.$evalAsync(function(){!listeners.$$inter&&attrs.hasOwnProperty(key)&&fn(attrs[key])}),function(){arrayRemove(listeners,fn)}}};var startSymbol=$interpolate.startSymbol(),endSymbol=$interpolate.endSymbol(),denormalizeTemplate="{{"==startSymbol||"}}"==endSymbol?identity:function(template){return template.replace(/\{\{/g,startSymbol).replace(/}}/g,endSymbol)},NG_ATTR_BINDING=/^ngAttr[A-Z]/;return compile.$$addBindingInfo=debugInfoEnabled?function($element,binding){var bindings=$element.data("$binding")||[];isArray(binding)?bindings=bindings.concat(binding):bindings.push(binding),$element.data("$binding",bindings)}:noop,compile.$$addBindingClass=debugInfoEnabled?function($element){safeAddClass($element,"ng-binding")}:noop,compile.$$addScopeInfo=debugInfoEnabled?function($element,scope,isolated,noTemplate){var dataName=isolated?noTemplate?"$isolateScopeNoTemplate":"$isolateScope":"$scope";$element.data(dataName,scope)}:noop,compile.$$addScopeClass=debugInfoEnabled?function($element,isolated){safeAddClass($element,isolated?"ng-isolate-scope":"ng-scope")}:noop,compile}]}function directiveNormalize(name){return camelCase(name.replace(PREFIX_REGEXP,""))}function tokenDifference(str1,str2){var values="",tokens1=str1.split(/\s+/),tokens2=str2.split(/\s+/);outer:for(var i=0;i<tokens1.length;i++){for(var token=tokens1[i],j=0;j<tokens2.length;j++)if(token==tokens2[j])continue outer;values+=(values.length>0?" ":"")+token}return values}function removeComments(jqNodes){jqNodes=jqLite(jqNodes);var i=jqNodes.length;if(1>=i)return jqNodes;for(;i--;){var node=jqNodes[i];node.nodeType===NODE_TYPE_COMMENT&&splice.call(jqNodes,i,1)}return jqNodes}function identifierForController(controller,ident){if(ident&&isString(ident))return ident;if(isString(controller)){var match=CNTRL_REG.exec(controller);if(match)return match[3]}}function $ControllerProvider(){var controllers={},globals=!1;this.register=function(name,constructor){assertNotHasOwnProperty(name,"controller"),isObject(name)?extend(controllers,name):controllers[name]=constructor},this.allowGlobals=function(){globals=!0},this.$get=["$injector","$window",function($injector,$window){function addIdentifier(locals,identifier,instance,name){if(!locals||!isObject(locals.$scope))throw minErr("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",name,identifier);locals.$scope[identifier]=instance}return function(expression,locals,later,ident){var instance,match,constructor,identifier;if(later=later===!0,ident&&isString(ident)&&(identifier=ident),isString(expression)){if(match=expression.match(CNTRL_REG),!match)throw $controllerMinErr("ctrlfmt","Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",expression);constructor=match[1],identifier=identifier||match[3],expression=controllers.hasOwnProperty(constructor)?controllers[constructor]:getter(locals.$scope,constructor,!0)||(globals?getter($window,constructor,!0):undefined),assertArgFn(expression,constructor,!0)}if(later){var controllerPrototype=(isArray(expression)?expression[expression.length-1]:expression).prototype;instance=Object.create(controllerPrototype||null),identifier&&addIdentifier(locals,identifier,instance,constructor||expression.name);var instantiate;return instantiate=extend(function(){var result=$injector.invoke(expression,instance,locals,constructor);return result!==instance&&(isObject(result)||isFunction(result))&&(instance=result,identifier&&addIdentifier(locals,identifier,instance,constructor||expression.name)),instance},{instance:instance,identifier:identifier})}return instance=$injector.instantiate(expression,locals,constructor),identifier&&addIdentifier(locals,identifier,instance,constructor||expression.name),instance}}]}function $DocumentProvider(){this.$get=["$window",function(window){return jqLite(window.document)}]}function $ExceptionHandlerProvider(){this.$get=["$log",function($log){return function(){$log.error.apply($log,arguments)}}]}function serializeValue(v){return isObject(v)?isDate(v)?v.toISOString():toJson(v):v}function $HttpParamSerializerProvider(){this.$get=function(){return function(params){if(!params)return"";var parts=[];return forEachSorted(params,function(value,key){null===value||isUndefined(value)||(isArray(value)?forEach(value,function(v){parts.push(encodeUriQuery(key)+"="+encodeUriQuery(serializeValue(v)))}):parts.push(encodeUriQuery(key)+"="+encodeUriQuery(serializeValue(value))))}),parts.join("&")}}}function $HttpParamSerializerJQLikeProvider(){this.$get=function(){return function(params){function serialize(toSerialize,prefix,topLevel){null===toSerialize||isUndefined(toSerialize)||(isArray(toSerialize)?forEach(toSerialize,function(value){serialize(value,prefix+"[]")}):isObject(toSerialize)&&!isDate(toSerialize)?forEachSorted(toSerialize,function(value,key){serialize(value,prefix+(topLevel?"":"[")+key+(topLevel?"":"]"))}):parts.push(encodeUriQuery(prefix)+"="+encodeUriQuery(serializeValue(toSerialize))))}if(!params)return"";var parts=[];return serialize(params,"",!0),parts.join("&")}}}function defaultHttpResponseTransform(data,headers){if(isString(data)){var tempData=data.replace(JSON_PROTECTION_PREFIX,"").trim();if(tempData){var contentType=headers("Content-Type");(contentType&&0===contentType.indexOf(APPLICATION_JSON)||isJsonLike(tempData))&&(data=fromJson(tempData))}}return data}function isJsonLike(str){var jsonStart=str.match(JSON_START);return jsonStart&&JSON_ENDS[jsonStart[0]].test(str)}function parseHeaders(headers){function fillInParsed(key,val){key&&(parsed[key]=parsed[key]?parsed[key]+", "+val:val)}var i,parsed=createMap();return isString(headers)?forEach(headers.split("\n"),function(line){i=line.indexOf(":"),fillInParsed(lowercase(trim(line.substr(0,i))),trim(line.substr(i+1)))}):isObject(headers)&&forEach(headers,function(headerVal,headerKey){fillInParsed(lowercase(headerKey),trim(headerVal))}),parsed}function headersGetter(headers){var headersObj;return function(name){if(headersObj||(headersObj=parseHeaders(headers)),name){var value=headersObj[lowercase(name)];return void 0===value&&(value=null),value}return headersObj}}function transformData(data,headers,status,fns){return isFunction(fns)?fns(data,headers,status):(forEach(fns,function(fn){data=fn(data,headers,status)}),data)}function isSuccess(status){return status>=200&&300>status}function $HttpProvider(){var defaults=this.defaults={transformResponse:[defaultHttpResponseTransform],transformRequest:[function(d){return!isObject(d)||isFile(d)||isBlob(d)||isFormData(d)?d:toJson(d)}],headers:{common:{Accept:"application/json, text/plain, */*"},post:shallowCopy(CONTENT_TYPE_APPLICATION_JSON),put:shallowCopy(CONTENT_TYPE_APPLICATION_JSON),patch:shallowCopy(CONTENT_TYPE_APPLICATION_JSON)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},useApplyAsync=!1;this.useApplyAsync=function(value){return isDefined(value)?(useApplyAsync=!!value,this):useApplyAsync};var interceptorFactories=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function($httpBackend,$$cookieReader,$cacheFactory,$rootScope,$q,$injector){function $http(requestConfig){function transformResponse(response){var resp=extend({},response);return resp.data=response.data?transformData(response.data,response.headers,response.status,config.transformResponse):response.data,isSuccess(response.status)?resp:$q.reject(resp)}function executeHeaderFns(headers,config){var headerContent,processedHeaders={};return forEach(headers,function(headerFn,header){isFunction(headerFn)?(headerContent=headerFn(config),null!=headerContent&&(processedHeaders[header]=headerContent)):processedHeaders[header]=headerFn}),processedHeaders}function mergeHeaders(config){var defHeaderName,lowercaseDefHeaderName,reqHeaderName,defHeaders=defaults.headers,reqHeaders=extend({},config.headers);defHeaders=extend({},defHeaders.common,defHeaders[lowercase(config.method)]);defaultHeadersIteration:for(defHeaderName in defHeaders){lowercaseDefHeaderName=lowercase(defHeaderName);for(reqHeaderName in reqHeaders)if(lowercase(reqHeaderName)===lowercaseDefHeaderName)continue defaultHeadersIteration;reqHeaders[defHeaderName]=defHeaders[defHeaderName]}return executeHeaderFns(reqHeaders,shallowCopy(config))}if(!angular.isObject(requestConfig))throw minErr("$http")("badreq","Http request configuration must be an object.  Received: {0}",requestConfig);var config=extend({method:"get",transformRequest:defaults.transformRequest,transformResponse:defaults.transformResponse,paramSerializer:defaults.paramSerializer},requestConfig);config.headers=mergeHeaders(requestConfig),config.method=uppercase(config.method),config.paramSerializer=isString(config.paramSerializer)?$injector.get(config.paramSerializer):config.paramSerializer;var serverRequest=function(config){var headers=config.headers,reqData=transformData(config.data,headersGetter(headers),undefined,config.transformRequest);return isUndefined(reqData)&&forEach(headers,function(value,header){"content-type"===lowercase(header)&&delete headers[header]}),isUndefined(config.withCredentials)&&!isUndefined(defaults.withCredentials)&&(config.withCredentials=defaults.withCredentials),sendReq(config,reqData).then(transformResponse,transformResponse)},chain=[serverRequest,undefined],promise=$q.when(config);for(forEach(reversedInterceptors,function(interceptor){(interceptor.request||interceptor.requestError)&&chain.unshift(interceptor.request,interceptor.requestError),(interceptor.response||interceptor.responseError)&&chain.push(interceptor.response,interceptor.responseError)});chain.length;){var thenFn=chain.shift(),rejectFn=chain.shift();promise=promise.then(thenFn,rejectFn)}return promise.success=function(fn){return assertArgFn(fn,"fn"),promise.then(function(response){fn(response.data,response.status,response.headers,config)}),promise},promise.error=function(fn){return assertArgFn(fn,"fn"),promise.then(null,function(response){fn(response.data,response.status,response.headers,config)}),promise},promise}function createShortMethods(){forEach(arguments,function(name){$http[name]=function(url,config){return $http(extend({},config||{},{method:name,url:url}))}})}function createShortMethodsWithData(){forEach(arguments,function(name){$http[name]=function(url,data,config){return $http(extend({},config||{},{method:name,url:url,data:data}))}})}function sendReq(config,reqData){function done(status,response,headersString,statusText){function resolveHttpPromise(){resolvePromise(response,status,headersString,statusText)}cache&&(isSuccess(status)?cache.put(url,[status,response,parseHeaders(headersString),statusText]):cache.remove(url)),useApplyAsync?$rootScope.$applyAsync(resolveHttpPromise):(resolveHttpPromise(),$rootScope.$$phase||$rootScope.$apply())}function resolvePromise(response,status,headers,statusText){status=Math.max(status,0),(isSuccess(status)?deferred.resolve:deferred.reject)({data:response,status:status,headers:headersGetter(headers),config:config,statusText:statusText})}function resolvePromiseWithResult(result){resolvePromise(result.data,result.status,shallowCopy(result.headers()),result.statusText)}function removePendingReq(){var idx=$http.pendingRequests.indexOf(config);-1!==idx&&$http.pendingRequests.splice(idx,1)}var cache,cachedResp,deferred=$q.defer(),promise=deferred.promise,reqHeaders=config.headers,url=buildUrl(config.url,config.paramSerializer(config.params));if($http.pendingRequests.push(config),promise.then(removePendingReq,removePendingReq),!config.cache&&!defaults.cache||config.cache===!1||"GET"!==config.method&&"JSONP"!==config.method||(cache=isObject(config.cache)?config.cache:isObject(defaults.cache)?defaults.cache:defaultCache),cache&&(cachedResp=cache.get(url),isDefined(cachedResp)?isPromiseLike(cachedResp)?cachedResp.then(resolvePromiseWithResult,resolvePromiseWithResult):isArray(cachedResp)?resolvePromise(cachedResp[1],cachedResp[0],shallowCopy(cachedResp[2]),cachedResp[3]):resolvePromise(cachedResp,200,{},"OK"):cache.put(url,promise)),isUndefined(cachedResp)){var xsrfValue=urlIsSameOrigin(config.url)?$$cookieReader()[config.xsrfCookieName||defaults.xsrfCookieName]:undefined;xsrfValue&&(reqHeaders[config.xsrfHeaderName||defaults.xsrfHeaderName]=xsrfValue),$httpBackend(config.method,url,reqData,done,reqHeaders,config.timeout,config.withCredentials,config.responseType)}return promise}function buildUrl(url,serializedParams){return serializedParams.length>0&&(url+=(-1==url.indexOf("?")?"?":"&")+serializedParams),url}var defaultCache=$cacheFactory("$http");defaults.paramSerializer=isString(defaults.paramSerializer)?$injector.get(defaults.paramSerializer):defaults.paramSerializer;var reversedInterceptors=[];return forEach(interceptorFactories,function(interceptorFactory){reversedInterceptors.unshift(isString(interceptorFactory)?$injector.get(interceptorFactory):$injector.invoke(interceptorFactory))}),$http.pendingRequests=[],createShortMethods("get","delete","head","jsonp"),createShortMethodsWithData("post","put","patch"),$http.defaults=defaults,$http}]}function createXhr(){return new window.XMLHttpRequest}function $HttpBackendProvider(){this.$get=["$browser","$window","$document",function($browser,$window,$document){return createHttpBackend($browser,createXhr,$browser.defer,$window.angular.callbacks,$document[0])}]}function createHttpBackend($browser,createXhr,$browserDefer,callbacks,rawDocument){function jsonpReq(url,callbackId,done){var script=rawDocument.createElement("script"),callback=null;return script.type="text/javascript",script.src=url,script.async=!0,callback=function(event){removeEventListenerFn(script,"load",callback),removeEventListenerFn(script,"error",callback),rawDocument.body.removeChild(script),script=null;var status=-1,text="unknown";event&&("load"!==event.type||callbacks[callbackId].called||(event={type:"error"}),text=event.type,status="error"===event.type?404:200),done&&done(status,text)},addEventListenerFn(script,"load",callback),addEventListenerFn(script,"error",callback),rawDocument.body.appendChild(script),callback}return function(method,url,post,callback,headers,timeout,withCredentials,responseType){function timeoutRequest(){jsonpDone&&jsonpDone(),xhr&&xhr.abort()}function completeRequest(callback,status,response,headersString,statusText){timeoutId!==undefined&&$browserDefer.cancel(timeoutId),jsonpDone=xhr=null,callback(status,response,headersString,statusText),$browser.$$completeOutstandingRequest(noop)
}if($browser.$$incOutstandingRequestCount(),url=url||$browser.url(),"jsonp"==lowercase(method)){var callbackId="_"+(callbacks.counter++).toString(36);callbacks[callbackId]=function(data){callbacks[callbackId].data=data,callbacks[callbackId].called=!0};var jsonpDone=jsonpReq(url.replace("JSON_CALLBACK","angular.callbacks."+callbackId),callbackId,function(status,text){completeRequest(callback,status,callbacks[callbackId].data,"",text),callbacks[callbackId]=noop})}else{var xhr=createXhr();xhr.open(method,url,!0),forEach(headers,function(value,key){isDefined(value)&&xhr.setRequestHeader(key,value)}),xhr.onload=function(){var statusText=xhr.statusText||"",response="response"in xhr?xhr.response:xhr.responseText,status=1223===xhr.status?204:xhr.status;0===status&&(status=response?200:"file"==urlResolve(url).protocol?404:0),completeRequest(callback,status,response,xhr.getAllResponseHeaders(),statusText)};var requestError=function(){completeRequest(callback,-1,null,null,"")};if(xhr.onerror=requestError,xhr.onabort=requestError,withCredentials&&(xhr.withCredentials=!0),responseType)try{xhr.responseType=responseType}catch(e){if("json"!==responseType)throw e}xhr.send(post)}if(timeout>0)var timeoutId=$browserDefer(timeoutRequest,timeout);else isPromiseLike(timeout)&&timeout.then(timeoutRequest)}}function $InterpolateProvider(){var startSymbol="{{",endSymbol="}}";this.startSymbol=function(value){return value?(startSymbol=value,this):startSymbol},this.endSymbol=function(value){return value?(endSymbol=value,this):endSymbol},this.$get=["$parse","$exceptionHandler","$sce",function($parse,$exceptionHandler,$sce){function escape(ch){return"\\\\\\"+ch}function unescapeText(text){return text.replace(escapedStartRegexp,startSymbol).replace(escapedEndRegexp,endSymbol)}function stringify(value){if(null==value)return"";switch(typeof value){case"string":break;case"number":value=""+value;break;default:value=toJson(value)}return value}function $interpolate(text,mustHaveExpression,trustedContext,allOrNothing){function parseStringifyInterceptor(value){try{return value=getValue(value),allOrNothing&&!isDefined(value)?value:stringify(value)}catch(err){$exceptionHandler($interpolateMinErr.interr(text,err))}}allOrNothing=!!allOrNothing;for(var startIndex,endIndex,exp,index=0,expressions=[],parseFns=[],textLength=text.length,concat=[],expressionPositions=[];textLength>index;){if(-1==(startIndex=text.indexOf(startSymbol,index))||-1==(endIndex=text.indexOf(endSymbol,startIndex+startSymbolLength))){index!==textLength&&concat.push(unescapeText(text.substring(index)));break}index!==startIndex&&concat.push(unescapeText(text.substring(index,startIndex))),exp=text.substring(startIndex+startSymbolLength,endIndex),expressions.push(exp),parseFns.push($parse(exp,parseStringifyInterceptor)),index=endIndex+endSymbolLength,expressionPositions.push(concat.length),concat.push("")}if(trustedContext&&concat.length>1&&$interpolateMinErr.throwNoconcat(text),!mustHaveExpression||expressions.length){var compute=function(values){for(var i=0,ii=expressions.length;ii>i;i++){if(allOrNothing&&isUndefined(values[i]))return;concat[expressionPositions[i]]=values[i]}return concat.join("")},getValue=function(value){return trustedContext?$sce.getTrusted(trustedContext,value):$sce.valueOf(value)};return extend(function(context){var i=0,ii=expressions.length,values=new Array(ii);try{for(;ii>i;i++)values[i]=parseFns[i](context);return compute(values)}catch(err){$exceptionHandler($interpolateMinErr.interr(text,err))}},{exp:text,expressions:expressions,$$watchDelegate:function(scope,listener){var lastValue;return scope.$watchGroup(parseFns,function(values,oldValues){var currValue=compute(values);isFunction(listener)&&listener.call(this,currValue,values!==oldValues?lastValue:currValue,scope),lastValue=currValue})}})}}var startSymbolLength=startSymbol.length,endSymbolLength=endSymbol.length,escapedStartRegexp=new RegExp(startSymbol.replace(/./g,escape),"g"),escapedEndRegexp=new RegExp(endSymbol.replace(/./g,escape),"g");return $interpolate.startSymbol=function(){return startSymbol},$interpolate.endSymbol=function(){return endSymbol},$interpolate}]}function $IntervalProvider(){this.$get=["$rootScope","$window","$q","$$q",function($rootScope,$window,$q,$$q){function interval(fn,delay,count,invokeApply){var hasParams=arguments.length>4,args=hasParams?sliceArgs(arguments,4):[],setInterval=$window.setInterval,clearInterval=$window.clearInterval,iteration=0,skipApply=isDefined(invokeApply)&&!invokeApply,deferred=(skipApply?$$q:$q).defer(),promise=deferred.promise;return count=isDefined(count)?count:0,promise.then(null,null,hasParams?function(){fn.apply(null,args)}:fn),promise.$$intervalId=setInterval(function(){deferred.notify(iteration++),count>0&&iteration>=count&&(deferred.resolve(iteration),clearInterval(promise.$$intervalId),delete intervals[promise.$$intervalId]),skipApply||$rootScope.$apply()},delay),intervals[promise.$$intervalId]=deferred,promise}var intervals={};return interval.cancel=function(promise){return promise&&promise.$$intervalId in intervals?(intervals[promise.$$intervalId].reject("canceled"),$window.clearInterval(promise.$$intervalId),delete intervals[promise.$$intervalId],!0):!1},interval}]}function $LocaleProvider(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"¤",posSuf:"",negPre:"(¤",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(num){return 1===num?"one":"other"}}}}function encodePath(path){for(var segments=path.split("/"),i=segments.length;i--;)segments[i]=encodeUriSegment(segments[i]);return segments.join("/")}function parseAbsoluteUrl(absoluteUrl,locationObj){var parsedUrl=urlResolve(absoluteUrl);locationObj.$$protocol=parsedUrl.protocol,locationObj.$$host=parsedUrl.hostname,locationObj.$$port=toInt(parsedUrl.port)||DEFAULT_PORTS[parsedUrl.protocol]||null}function parseAppUrl(relativeUrl,locationObj){var prefixed="/"!==relativeUrl.charAt(0);prefixed&&(relativeUrl="/"+relativeUrl);var match=urlResolve(relativeUrl);locationObj.$$path=decodeURIComponent(prefixed&&"/"===match.pathname.charAt(0)?match.pathname.substring(1):match.pathname),locationObj.$$search=parseKeyValue(match.search),locationObj.$$hash=decodeURIComponent(match.hash),locationObj.$$path&&"/"!=locationObj.$$path.charAt(0)&&(locationObj.$$path="/"+locationObj.$$path)}function beginsWith(begin,whole){return 0===whole.indexOf(begin)?whole.substr(begin.length):void 0}function stripHash(url){var index=url.indexOf("#");return-1==index?url:url.substr(0,index)}function trimEmptyHash(url){return url.replace(/(#.+)|#$/,"$1")}function stripFile(url){return url.substr(0,stripHash(url).lastIndexOf("/")+1)}function serverBase(url){return url.substring(0,url.indexOf("/",url.indexOf("//")+2))}function LocationHtml5Url(appBase,basePrefix){this.$$html5=!0,basePrefix=basePrefix||"";var appBaseNoFile=stripFile(appBase);parseAbsoluteUrl(appBase,this),this.$$parse=function(url){var pathUrl=beginsWith(appBaseNoFile,url);if(!isString(pathUrl))throw $locationMinErr("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',url,appBaseNoFile);parseAppUrl(pathUrl,this),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){var search=toKeyValue(this.$$search),hash=this.$$hash?"#"+encodeUriSegment(this.$$hash):"";this.$$url=encodePath(this.$$path)+(search?"?"+search:"")+hash,this.$$absUrl=appBaseNoFile+this.$$url.substr(1)},this.$$parseLinkUrl=function(url,relHref){if(relHref&&"#"===relHref[0])return this.hash(relHref.slice(1)),!0;var appUrl,prevAppUrl,rewrittenUrl;return(appUrl=beginsWith(appBase,url))!==undefined?(prevAppUrl=appUrl,rewrittenUrl=(appUrl=beginsWith(basePrefix,appUrl))!==undefined?appBaseNoFile+(beginsWith("/",appUrl)||appUrl):appBase+prevAppUrl):(appUrl=beginsWith(appBaseNoFile,url))!==undefined?rewrittenUrl=appBaseNoFile+appUrl:appBaseNoFile==url+"/"&&(rewrittenUrl=appBaseNoFile),rewrittenUrl&&this.$$parse(rewrittenUrl),!!rewrittenUrl}}function LocationHashbangUrl(appBase,hashPrefix){var appBaseNoFile=stripFile(appBase);parseAbsoluteUrl(appBase,this),this.$$parse=function(url){function removeWindowsDriveName(path,url,base){var firstPathSegmentMatch,windowsFilePathExp=/^\/[A-Z]:(\/.*)/;return 0===url.indexOf(base)&&(url=url.replace(base,"")),windowsFilePathExp.exec(url)?path:(firstPathSegmentMatch=windowsFilePathExp.exec(path),firstPathSegmentMatch?firstPathSegmentMatch[1]:path)}var withoutHashUrl,withoutBaseUrl=beginsWith(appBase,url)||beginsWith(appBaseNoFile,url);isUndefined(withoutBaseUrl)||"#"!==withoutBaseUrl.charAt(0)?this.$$html5?withoutHashUrl=withoutBaseUrl:(withoutHashUrl="",isUndefined(withoutBaseUrl)&&(appBase=url,this.replace())):(withoutHashUrl=beginsWith(hashPrefix,withoutBaseUrl),isUndefined(withoutHashUrl)&&(withoutHashUrl=withoutBaseUrl)),parseAppUrl(withoutHashUrl,this),this.$$path=removeWindowsDriveName(this.$$path,withoutHashUrl,appBase),this.$$compose()},this.$$compose=function(){var search=toKeyValue(this.$$search),hash=this.$$hash?"#"+encodeUriSegment(this.$$hash):"";this.$$url=encodePath(this.$$path)+(search?"?"+search:"")+hash,this.$$absUrl=appBase+(this.$$url?hashPrefix+this.$$url:"")},this.$$parseLinkUrl=function(url){return stripHash(appBase)==stripHash(url)?(this.$$parse(url),!0):!1}}function LocationHashbangInHtml5Url(appBase,hashPrefix){this.$$html5=!0,LocationHashbangUrl.apply(this,arguments);var appBaseNoFile=stripFile(appBase);this.$$parseLinkUrl=function(url,relHref){if(relHref&&"#"===relHref[0])return this.hash(relHref.slice(1)),!0;var rewrittenUrl,appUrl;return appBase==stripHash(url)?rewrittenUrl=url:(appUrl=beginsWith(appBaseNoFile,url))?rewrittenUrl=appBase+hashPrefix+appUrl:appBaseNoFile===url+"/"&&(rewrittenUrl=appBaseNoFile),rewrittenUrl&&this.$$parse(rewrittenUrl),!!rewrittenUrl},this.$$compose=function(){var search=toKeyValue(this.$$search),hash=this.$$hash?"#"+encodeUriSegment(this.$$hash):"";this.$$url=encodePath(this.$$path)+(search?"?"+search:"")+hash,this.$$absUrl=appBase+hashPrefix+this.$$url}}function locationGetter(property){return function(){return this[property]}}function locationGetterSetter(property,preprocess){return function(value){return isUndefined(value)?this[property]:(this[property]=preprocess(value),this.$$compose(),this)}}function $LocationProvider(){var hashPrefix="",html5Mode={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(prefix){return isDefined(prefix)?(hashPrefix=prefix,this):hashPrefix},this.html5Mode=function(mode){return isBoolean(mode)?(html5Mode.enabled=mode,this):isObject(mode)?(isBoolean(mode.enabled)&&(html5Mode.enabled=mode.enabled),isBoolean(mode.requireBase)&&(html5Mode.requireBase=mode.requireBase),isBoolean(mode.rewriteLinks)&&(html5Mode.rewriteLinks=mode.rewriteLinks),this):html5Mode},this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function($rootScope,$browser,$sniffer,$rootElement,$window){function setBrowserUrlWithFallback(url,replace,state){var oldUrl=$location.url(),oldState=$location.$$state;try{$browser.url(url,replace,state),$location.$$state=$browser.state()}catch(e){throw $location.url(oldUrl),$location.$$state=oldState,e}}function afterLocationChange(oldUrl,oldState){$rootScope.$broadcast("$locationChangeSuccess",$location.absUrl(),oldUrl,$location.$$state,oldState)}var $location,LocationMode,appBase,baseHref=$browser.baseHref(),initialUrl=$browser.url();if(html5Mode.enabled){if(!baseHref&&html5Mode.requireBase)throw $locationMinErr("nobase","$location in HTML5 mode requires a <base> tag to be present!");appBase=serverBase(initialUrl)+(baseHref||"/"),LocationMode=$sniffer.history?LocationHtml5Url:LocationHashbangInHtml5Url}else appBase=stripHash(initialUrl),LocationMode=LocationHashbangUrl;$location=new LocationMode(appBase,"#"+hashPrefix),$location.$$parseLinkUrl(initialUrl,initialUrl),$location.$$state=$browser.state();var IGNORE_URI_REGEXP=/^\s*(javascript|mailto):/i;$rootElement.on("click",function(event){if(html5Mode.rewriteLinks&&!event.ctrlKey&&!event.metaKey&&!event.shiftKey&&2!=event.which&&2!=event.button){for(var elm=jqLite(event.target);"a"!==nodeName_(elm[0]);)if(elm[0]===$rootElement[0]||!(elm=elm.parent())[0])return;var absHref=elm.prop("href"),relHref=elm.attr("href")||elm.attr("xlink:href");isObject(absHref)&&"[object SVGAnimatedString]"===absHref.toString()&&(absHref=urlResolve(absHref.animVal).href),IGNORE_URI_REGEXP.test(absHref)||!absHref||elm.attr("target")||event.isDefaultPrevented()||$location.$$parseLinkUrl(absHref,relHref)&&(event.preventDefault(),$location.absUrl()!=$browser.url()&&($rootScope.$apply(),$window.angular["ff-684208-preventDefault"]=!0))}}),trimEmptyHash($location.absUrl())!=trimEmptyHash(initialUrl)&&$browser.url($location.absUrl(),!0);var initializing=!0;return $browser.onUrlChange(function(newUrl,newState){$rootScope.$evalAsync(function(){var defaultPrevented,oldUrl=$location.absUrl(),oldState=$location.$$state;$location.$$parse(newUrl),$location.$$state=newState,defaultPrevented=$rootScope.$broadcast("$locationChangeStart",newUrl,oldUrl,newState,oldState).defaultPrevented,$location.absUrl()===newUrl&&(defaultPrevented?($location.$$parse(oldUrl),$location.$$state=oldState,setBrowserUrlWithFallback(oldUrl,!1,oldState)):(initializing=!1,afterLocationChange(oldUrl,oldState)))}),$rootScope.$$phase||$rootScope.$digest()}),$rootScope.$watch(function(){var oldUrl=trimEmptyHash($browser.url()),newUrl=trimEmptyHash($location.absUrl()),oldState=$browser.state(),currentReplace=$location.$$replace,urlOrStateChanged=oldUrl!==newUrl||$location.$$html5&&$sniffer.history&&oldState!==$location.$$state;(initializing||urlOrStateChanged)&&(initializing=!1,$rootScope.$evalAsync(function(){var newUrl=$location.absUrl(),defaultPrevented=$rootScope.$broadcast("$locationChangeStart",newUrl,oldUrl,$location.$$state,oldState).defaultPrevented;$location.absUrl()===newUrl&&(defaultPrevented?($location.$$parse(oldUrl),$location.$$state=oldState):(urlOrStateChanged&&setBrowserUrlWithFallback(newUrl,currentReplace,oldState===$location.$$state?null:$location.$$state),afterLocationChange(oldUrl,oldState)))})),$location.$$replace=!1}),$location}]}function $LogProvider(){var debug=!0,self=this;this.debugEnabled=function(flag){return isDefined(flag)?(debug=flag,this):debug},this.$get=["$window",function($window){function formatError(arg){return arg instanceof Error&&(arg.stack?arg=arg.message&&-1===arg.stack.indexOf(arg.message)?"Error: "+arg.message+"\n"+arg.stack:arg.stack:arg.sourceURL&&(arg=arg.message+"\n"+arg.sourceURL+":"+arg.line)),arg}function consoleLog(type){var console=$window.console||{},logFn=console[type]||console.log||noop,hasApply=!1;try{hasApply=!!logFn.apply}catch(e){}return hasApply?function(){var args=[];return forEach(arguments,function(arg){args.push(formatError(arg))}),logFn.apply(console,args)}:function(arg1,arg2){logFn(arg1,null==arg2?"":arg2)}}return{log:consoleLog("log"),info:consoleLog("info"),warn:consoleLog("warn"),error:consoleLog("error"),debug:function(){var fn=consoleLog("debug");return function(){debug&&fn.apply(self,arguments)}}()}}]}function ensureSafeMemberName(name,fullExpression){if("__defineGetter__"===name||"__defineSetter__"===name||"__lookupGetter__"===name||"__lookupSetter__"===name||"__proto__"===name)throw $parseMinErr("isecfld","Attempting to access a disallowed field in Angular expressions! Expression: {0}",fullExpression);return name}function ensureSafeObject(obj,fullExpression){if(obj){if(obj.constructor===obj)throw $parseMinErr("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",fullExpression);if(obj.window===obj)throw $parseMinErr("isecwindow","Referencing the Window in Angular expressions is disallowed! Expression: {0}",fullExpression);if(obj.children&&(obj.nodeName||obj.prop&&obj.attr&&obj.find))throw $parseMinErr("isecdom","Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",fullExpression);if(obj===Object)throw $parseMinErr("isecobj","Referencing Object in Angular expressions is disallowed! Expression: {0}",fullExpression)}return obj}function ensureSafeFunction(obj,fullExpression){if(obj){if(obj.constructor===obj)throw $parseMinErr("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",fullExpression);if(obj===CALL||obj===APPLY||obj===BIND)throw $parseMinErr("isecff","Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",fullExpression)}}function ifDefined(v,d){return"undefined"!=typeof v?v:d}function plusFn(l,r){return"undefined"==typeof l?r:"undefined"==typeof r?l:l+r}function isStateless($filter,filterName){var fn=$filter(filterName);return!fn.$stateful}function findConstantAndWatchExpressions(ast,$filter){var allConstants,argsToWatch;switch(ast.type){case AST.Program:allConstants=!0,forEach(ast.body,function(expr){findConstantAndWatchExpressions(expr.expression,$filter),allConstants=allConstants&&expr.expression.constant}),ast.constant=allConstants;break;case AST.Literal:ast.constant=!0,ast.toWatch=[];break;case AST.UnaryExpression:findConstantAndWatchExpressions(ast.argument,$filter),ast.constant=ast.argument.constant,ast.toWatch=ast.argument.toWatch;break;case AST.BinaryExpression:findConstantAndWatchExpressions(ast.left,$filter),findConstantAndWatchExpressions(ast.right,$filter),ast.constant=ast.left.constant&&ast.right.constant,ast.toWatch=ast.left.toWatch.concat(ast.right.toWatch);break;case AST.LogicalExpression:findConstantAndWatchExpressions(ast.left,$filter),findConstantAndWatchExpressions(ast.right,$filter),ast.constant=ast.left.constant&&ast.right.constant,ast.toWatch=ast.constant?[]:[ast];break;case AST.ConditionalExpression:findConstantAndWatchExpressions(ast.test,$filter),findConstantAndWatchExpressions(ast.alternate,$filter),findConstantAndWatchExpressions(ast.consequent,$filter),ast.constant=ast.test.constant&&ast.alternate.constant&&ast.consequent.constant,ast.toWatch=ast.constant?[]:[ast];break;case AST.Identifier:ast.constant=!1,ast.toWatch=[ast];break;case AST.MemberExpression:findConstantAndWatchExpressions(ast.object,$filter),ast.computed&&findConstantAndWatchExpressions(ast.property,$filter),ast.constant=ast.object.constant&&(!ast.computed||ast.property.constant),ast.toWatch=[ast];break;case AST.CallExpression:allConstants=ast.filter?isStateless($filter,ast.callee.name):!1,argsToWatch=[],forEach(ast.arguments,function(expr){findConstantAndWatchExpressions(expr,$filter),allConstants=allConstants&&expr.constant,expr.constant||argsToWatch.push.apply(argsToWatch,expr.toWatch)}),ast.constant=allConstants,ast.toWatch=ast.filter&&isStateless($filter,ast.callee.name)?argsToWatch:[ast];break;case AST.AssignmentExpression:findConstantAndWatchExpressions(ast.left,$filter),findConstantAndWatchExpressions(ast.right,$filter),ast.constant=ast.left.constant&&ast.right.constant,ast.toWatch=[ast];break;case AST.ArrayExpression:allConstants=!0,argsToWatch=[],forEach(ast.elements,function(expr){findConstantAndWatchExpressions(expr,$filter),allConstants=allConstants&&expr.constant,expr.constant||argsToWatch.push.apply(argsToWatch,expr.toWatch)}),ast.constant=allConstants,ast.toWatch=argsToWatch;break;case AST.ObjectExpression:allConstants=!0,argsToWatch=[],forEach(ast.properties,function(property){findConstantAndWatchExpressions(property.value,$filter),allConstants=allConstants&&property.value.constant,property.value.constant||argsToWatch.push.apply(argsToWatch,property.value.toWatch)}),ast.constant=allConstants,ast.toWatch=argsToWatch;break;case AST.ThisExpression:ast.constant=!1,ast.toWatch=[]}}function getInputs(body){if(1==body.length){var lastExpression=body[0].expression,candidate=lastExpression.toWatch;return 1!==candidate.length?candidate:candidate[0]!==lastExpression?candidate:undefined}}function isAssignable(ast){return ast.type===AST.Identifier||ast.type===AST.MemberExpression}function assignableAST(ast){return 1===ast.body.length&&isAssignable(ast.body[0].expression)?{type:AST.AssignmentExpression,left:ast.body[0].expression,right:{type:AST.NGValueParameter},operator:"="}:void 0}function isLiteral(ast){return 0===ast.body.length||1===ast.body.length&&(ast.body[0].expression.type===AST.Literal||ast.body[0].expression.type===AST.ArrayExpression||ast.body[0].expression.type===AST.ObjectExpression)}function isConstant(ast){return ast.constant}function ASTCompiler(astBuilder,$filter){this.astBuilder=astBuilder,this.$filter=$filter}function ASTInterpreter(astBuilder,$filter){this.astBuilder=astBuilder,this.$filter=$filter}function setter(obj,path,setValue,fullExp){ensureSafeObject(obj,fullExp);for(var key,element=path.split("."),i=0;element.length>1;i++){key=ensureSafeMemberName(element.shift(),fullExp);var propertyObj=ensureSafeObject(obj[key],fullExp);propertyObj||(propertyObj={},obj[key]=propertyObj),obj=propertyObj}return key=ensureSafeMemberName(element.shift(),fullExp),ensureSafeObject(obj[key],fullExp),obj[key]=setValue,setValue}function isPossiblyDangerousMemberName(name){return"constructor"==name}function getValueOf(value){return isFunction(value.valueOf)?value.valueOf():objectValueOf.call(value)}function $ParseProvider(){var cacheDefault=createMap(),cacheExpensive=createMap();this.$get=["$filter","$sniffer",function($filter,$sniffer){function expressionInputDirtyCheck(newValue,oldValueOfValue){return null==newValue||null==oldValueOfValue?newValue===oldValueOfValue:"object"==typeof newValue&&(newValue=getValueOf(newValue),"object"==typeof newValue)?!1:newValue===oldValueOfValue||newValue!==newValue&&oldValueOfValue!==oldValueOfValue}function inputsWatchDelegate(scope,listener,objectEquality,parsedExpression,prettyPrintExpression){var lastResult,inputExpressions=parsedExpression.inputs;if(1===inputExpressions.length){var oldInputValueOf=expressionInputDirtyCheck;return inputExpressions=inputExpressions[0],scope.$watch(function(scope){var newInputValue=inputExpressions(scope);return expressionInputDirtyCheck(newInputValue,oldInputValueOf)||(lastResult=parsedExpression(scope,undefined,undefined,[newInputValue]),oldInputValueOf=newInputValue&&getValueOf(newInputValue)),lastResult},listener,objectEquality,prettyPrintExpression)}for(var oldInputValueOfValues=[],oldInputValues=[],i=0,ii=inputExpressions.length;ii>i;i++)oldInputValueOfValues[i]=expressionInputDirtyCheck,oldInputValues[i]=null;return scope.$watch(function(scope){for(var changed=!1,i=0,ii=inputExpressions.length;ii>i;i++){var newInputValue=inputExpressions[i](scope);(changed||(changed=!expressionInputDirtyCheck(newInputValue,oldInputValueOfValues[i])))&&(oldInputValues[i]=newInputValue,oldInputValueOfValues[i]=newInputValue&&getValueOf(newInputValue))}return changed&&(lastResult=parsedExpression(scope,undefined,undefined,oldInputValues)),lastResult},listener,objectEquality,prettyPrintExpression)}function oneTimeWatchDelegate(scope,listener,objectEquality,parsedExpression){var unwatch,lastValue;return unwatch=scope.$watch(function(scope){return parsedExpression(scope)},function(value,old,scope){lastValue=value,isFunction(listener)&&listener.apply(this,arguments),isDefined(value)&&scope.$$postDigest(function(){isDefined(lastValue)&&unwatch()})},objectEquality)}function oneTimeLiteralWatchDelegate(scope,listener,objectEquality,parsedExpression){function isAllDefined(value){var allDefined=!0;return forEach(value,function(val){isDefined(val)||(allDefined=!1)}),allDefined}var unwatch,lastValue;return unwatch=scope.$watch(function(scope){return parsedExpression(scope)},function(value,old,scope){lastValue=value,isFunction(listener)&&listener.call(this,value,old,scope),isAllDefined(value)&&scope.$$postDigest(function(){isAllDefined(lastValue)&&unwatch()})},objectEquality)}function constantWatchDelegate(scope,listener,objectEquality,parsedExpression){var unwatch;return unwatch=scope.$watch(function(scope){return parsedExpression(scope)},function(){isFunction(listener)&&listener.apply(this,arguments),unwatch()},objectEquality)}function addInterceptor(parsedExpression,interceptorFn){if(!interceptorFn)return parsedExpression;var watchDelegate=parsedExpression.$$watchDelegate,regularWatch=watchDelegate!==oneTimeLiteralWatchDelegate&&watchDelegate!==oneTimeWatchDelegate,fn=regularWatch?function(scope,locals,assign,inputs){var value=parsedExpression(scope,locals,assign,inputs);return interceptorFn(value,scope,locals)}:function(scope,locals,assign,inputs){var value=parsedExpression(scope,locals,assign,inputs),result=interceptorFn(value,scope,locals);return isDefined(value)?result:value};return parsedExpression.$$watchDelegate&&parsedExpression.$$watchDelegate!==inputsWatchDelegate?fn.$$watchDelegate=parsedExpression.$$watchDelegate:interceptorFn.$stateful||(fn.$$watchDelegate=inputsWatchDelegate,fn.inputs=parsedExpression.inputs?parsedExpression.inputs:[parsedExpression]),fn}var $parseOptions={csp:$sniffer.csp,expensiveChecks:!1},$parseOptionsExpensive={csp:$sniffer.csp,expensiveChecks:!0};return function(exp,interceptorFn,expensiveChecks){var parsedExpression,oneTime,cacheKey;switch(typeof exp){case"string":exp=exp.trim(),cacheKey=exp;var cache=expensiveChecks?cacheExpensive:cacheDefault;if(parsedExpression=cache[cacheKey],!parsedExpression){":"===exp.charAt(0)&&":"===exp.charAt(1)&&(oneTime=!0,exp=exp.substring(2));var parseOptions=expensiveChecks?$parseOptionsExpensive:$parseOptions,lexer=new Lexer(parseOptions),parser=new Parser(lexer,$filter,parseOptions);parsedExpression=parser.parse(exp),parsedExpression.constant?parsedExpression.$$watchDelegate=constantWatchDelegate:oneTime?parsedExpression.$$watchDelegate=parsedExpression.literal?oneTimeLiteralWatchDelegate:oneTimeWatchDelegate:parsedExpression.inputs&&(parsedExpression.$$watchDelegate=inputsWatchDelegate),cache[cacheKey]=parsedExpression}return addInterceptor(parsedExpression,interceptorFn);case"function":return addInterceptor(exp,interceptorFn);default:return noop}}}]}function $QProvider(){this.$get=["$rootScope","$exceptionHandler",function($rootScope,$exceptionHandler){return qFactory(function(callback){$rootScope.$evalAsync(callback)},$exceptionHandler)}]}function $$QProvider(){this.$get=["$browser","$exceptionHandler",function($browser,$exceptionHandler){return qFactory(function(callback){$browser.defer(callback)},$exceptionHandler)}]}function qFactory(nextTick,exceptionHandler){function callOnce(self,resolveFn,rejectFn){function wrap(fn){return function(value){called||(called=!0,fn.call(self,value))}}var called=!1;return[wrap(resolveFn),wrap(rejectFn)]}function Promise(){this.$$state={status:0}}function simpleBind(context,fn){return function(value){fn.call(context,value)}}function processQueue(state){var fn,deferred,pending;pending=state.pending,state.processScheduled=!1,state.pending=undefined;for(var i=0,ii=pending.length;ii>i;++i){deferred=pending[i][0],fn=pending[i][state.status];try{isFunction(fn)?deferred.resolve(fn(state.value)):1===state.status?deferred.resolve(state.value):deferred.reject(state.value)}catch(e){deferred.reject(e),exceptionHandler(e)}}}function scheduleProcessQueue(state){!state.processScheduled&&state.pending&&(state.processScheduled=!0,nextTick(function(){processQueue(state)}))}function Deferred(){this.promise=new Promise,this.resolve=simpleBind(this,this.resolve),this.reject=simpleBind(this,this.reject),this.notify=simpleBind(this,this.notify)}function all(promises){var deferred=new Deferred,counter=0,results=isArray(promises)?[]:{};return forEach(promises,function(promise,key){counter++,when(promise).then(function(value){results.hasOwnProperty(key)||(results[key]=value,--counter||deferred.resolve(results))},function(reason){results.hasOwnProperty(key)||deferred.reject(reason)})}),0===counter&&deferred.resolve(results),deferred.promise}var $qMinErr=minErr("$q",TypeError),defer=function(){return new Deferred};Promise.prototype={then:function(onFulfilled,onRejected,progressBack){var result=new Deferred;return this.$$state.pending=this.$$state.pending||[],this.$$state.pending.push([result,onFulfilled,onRejected,progressBack]),this.$$state.status>0&&scheduleProcessQueue(this.$$state),result.promise},"catch":function(callback){return this.then(null,callback)},"finally":function(callback,progressBack){return this.then(function(value){return handleCallback(value,!0,callback)},function(error){return handleCallback(error,!1,callback)},progressBack)}},Deferred.prototype={resolve:function(val){this.promise.$$state.status||(val===this.promise?this.$$reject($qMinErr("qcycle","Expected promise to be resolved with value other than itself '{0}'",val)):this.$$resolve(val))},$$resolve:function(val){var then,fns;fns=callOnce(this,this.$$resolve,this.$$reject);try{(isObject(val)||isFunction(val))&&(then=val&&val.then),isFunction(then)?(this.promise.$$state.status=-1,then.call(val,fns[0],fns[1],this.notify)):(this.promise.$$state.value=val,this.promise.$$state.status=1,scheduleProcessQueue(this.promise.$$state))}catch(e){fns[1](e),exceptionHandler(e)}},reject:function(reason){this.promise.$$state.status||this.$$reject(reason)},$$reject:function(reason){this.promise.$$state.value=reason,this.promise.$$state.status=2,scheduleProcessQueue(this.promise.$$state)},notify:function(progress){var callbacks=this.promise.$$state.pending;this.promise.$$state.status<=0&&callbacks&&callbacks.length&&nextTick(function(){for(var callback,result,i=0,ii=callbacks.length;ii>i;i++){result=callbacks[i][0],callback=callbacks[i][3];try{result.notify(isFunction(callback)?callback(progress):progress)}catch(e){exceptionHandler(e)}}})}};var reject=function(reason){var result=new Deferred;return result.reject(reason),result.promise},makePromise=function(value,resolved){var result=new Deferred;return resolved?result.resolve(value):result.reject(value),result.promise},handleCallback=function(value,isResolved,callback){var callbackOutput=null;try{isFunction(callback)&&(callbackOutput=callback())}catch(e){return makePromise(e,!1)}return isPromiseLike(callbackOutput)?callbackOutput.then(function(){return makePromise(value,isResolved)},function(error){return makePromise(error,!1)}):makePromise(value,isResolved)},when=function(value,callback,errback,progressBack){var result=new Deferred;return result.resolve(value),result.promise.then(callback,errback,progressBack)},resolve=when,$Q=function Q(resolver){function resolveFn(value){deferred.resolve(value)}function rejectFn(reason){deferred.reject(reason)}if(!isFunction(resolver))throw $qMinErr("norslvr","Expected resolverFn, got '{0}'",resolver);if(!(this instanceof Q))return new Q(resolver);var deferred=new Deferred;return resolver(resolveFn,rejectFn),deferred.promise};return $Q.defer=defer,$Q.reject=reject,$Q.when=when,$Q.resolve=resolve,$Q.all=all,$Q}function $$RAFProvider(){this.$get=["$window","$timeout",function($window,$timeout){function flush(){for(var i=0;i<taskQueue.length;i++){var task=taskQueue[i];task&&(taskQueue[i]=null,task())}taskCount=taskQueue.length=0}function queueFn(asyncFn){var index=taskQueue.length;return taskCount++,taskQueue.push(asyncFn),0===index&&(cancelLastRAF=rafFn(flush)),function(){index>=0&&(taskQueue[index]=null,index=null,0===--taskCount&&cancelLastRAF&&(cancelLastRAF(),cancelLastRAF=null,taskQueue.length=0))}}var requestAnimationFrame=$window.requestAnimationFrame||$window.webkitRequestAnimationFrame,cancelAnimationFrame=$window.cancelAnimationFrame||$window.webkitCancelAnimationFrame||$window.webkitCancelRequestAnimationFrame,rafSupported=!!requestAnimationFrame,rafFn=rafSupported?function(fn){var id=requestAnimationFrame(fn);
return function(){cancelAnimationFrame(id)}}:function(fn){var timer=$timeout(fn,16.66,!1);return function(){$timeout.cancel(timer)}};queueFn.supported=rafSupported;var cancelLastRAF,taskCount=0,taskQueue=[];return queueFn}]}function $RootScopeProvider(){function createChildScopeClass(parent){function ChildScope(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$id=nextUid(),this.$$ChildScope=null}return ChildScope.prototype=parent,ChildScope}var TTL=10,$rootScopeMinErr=minErr("$rootScope"),lastDirtyWatch=null,applyAsyncId=null;this.digestTtl=function(value){return arguments.length&&(TTL=value),TTL},this.$get=["$injector","$exceptionHandler","$parse","$browser",function($injector,$exceptionHandler,$parse,$browser){function destroyChildScope($event){$event.currentScope.$$destroyed=!0}function Scope(){this.$id=nextUid(),this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this.$root=this,this.$$destroyed=!1,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$$isolateBindings=null}function beginPhase(phase){if($rootScope.$$phase)throw $rootScopeMinErr("inprog","{0} already in progress",$rootScope.$$phase);$rootScope.$$phase=phase}function clearPhase(){$rootScope.$$phase=null}function incrementWatchersCount(current,count){do current.$$watchersCount+=count;while(current=current.$parent)}function decrementListenerCount(current,count,name){do current.$$listenerCount[name]-=count,0===current.$$listenerCount[name]&&delete current.$$listenerCount[name];while(current=current.$parent)}function initWatchVal(){}function flushApplyAsync(){for(;applyAsyncQueue.length;)try{applyAsyncQueue.shift()()}catch(e){$exceptionHandler(e)}applyAsyncId=null}function scheduleApplyAsync(){null===applyAsyncId&&(applyAsyncId=$browser.defer(function(){$rootScope.$apply(flushApplyAsync)}))}Scope.prototype={constructor:Scope,$new:function(isolate,parent){var child;return parent=parent||this,isolate?(child=new Scope,child.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=createChildScopeClass(this)),child=new this.$$ChildScope),child.$parent=parent,child.$$prevSibling=parent.$$childTail,parent.$$childHead?(parent.$$childTail.$$nextSibling=child,parent.$$childTail=child):parent.$$childHead=parent.$$childTail=child,(isolate||parent!=this)&&child.$on("$destroy",destroyChildScope),child},$watch:function(watchExp,listener,objectEquality,prettyPrintExpression){var get=$parse(watchExp);if(get.$$watchDelegate)return get.$$watchDelegate(this,listener,objectEquality,get,watchExp);var scope=this,array=scope.$$watchers,watcher={fn:listener,last:initWatchVal,get:get,exp:prettyPrintExpression||watchExp,eq:!!objectEquality};return lastDirtyWatch=null,isFunction(listener)||(watcher.fn=noop),array||(array=scope.$$watchers=[]),array.unshift(watcher),incrementWatchersCount(this,1),function(){arrayRemove(array,watcher)>=0&&incrementWatchersCount(scope,-1),lastDirtyWatch=null}},$watchGroup:function(watchExpressions,listener){function watchGroupAction(){changeReactionScheduled=!1,firstRun?(firstRun=!1,listener(newValues,newValues,self)):listener(newValues,oldValues,self)}var oldValues=new Array(watchExpressions.length),newValues=new Array(watchExpressions.length),deregisterFns=[],self=this,changeReactionScheduled=!1,firstRun=!0;if(!watchExpressions.length){var shouldCall=!0;return self.$evalAsync(function(){shouldCall&&listener(newValues,newValues,self)}),function(){shouldCall=!1}}return 1===watchExpressions.length?this.$watch(watchExpressions[0],function(value,oldValue,scope){newValues[0]=value,oldValues[0]=oldValue,listener(newValues,value===oldValue?newValues:oldValues,scope)}):(forEach(watchExpressions,function(expr,i){var unwatchFn=self.$watch(expr,function(value,oldValue){newValues[i]=value,oldValues[i]=oldValue,changeReactionScheduled||(changeReactionScheduled=!0,self.$evalAsync(watchGroupAction))});deregisterFns.push(unwatchFn)}),function(){for(;deregisterFns.length;)deregisterFns.shift()()})},$watchCollection:function(obj,listener){function $watchCollectionInterceptor(_value){newValue=_value;var newLength,key,bothNaN,newItem,oldItem;if(!isUndefined(newValue)){if(isObject(newValue))if(isArrayLike(newValue)){oldValue!==internalArray&&(oldValue=internalArray,oldLength=oldValue.length=0,changeDetected++),newLength=newValue.length,oldLength!==newLength&&(changeDetected++,oldValue.length=oldLength=newLength);for(var i=0;newLength>i;i++)oldItem=oldValue[i],newItem=newValue[i],bothNaN=oldItem!==oldItem&&newItem!==newItem,bothNaN||oldItem===newItem||(changeDetected++,oldValue[i]=newItem)}else{oldValue!==internalObject&&(oldValue=internalObject={},oldLength=0,changeDetected++),newLength=0;for(key in newValue)newValue.hasOwnProperty(key)&&(newLength++,newItem=newValue[key],oldItem=oldValue[key],key in oldValue?(bothNaN=oldItem!==oldItem&&newItem!==newItem,bothNaN||oldItem===newItem||(changeDetected++,oldValue[key]=newItem)):(oldLength++,oldValue[key]=newItem,changeDetected++));if(oldLength>newLength){changeDetected++;for(key in oldValue)newValue.hasOwnProperty(key)||(oldLength--,delete oldValue[key])}}else oldValue!==newValue&&(oldValue=newValue,changeDetected++);return changeDetected}}function $watchCollectionAction(){if(initRun?(initRun=!1,listener(newValue,newValue,self)):listener(newValue,veryOldValue,self),trackVeryOldValue)if(isObject(newValue))if(isArrayLike(newValue)){veryOldValue=new Array(newValue.length);for(var i=0;i<newValue.length;i++)veryOldValue[i]=newValue[i]}else{veryOldValue={};for(var key in newValue)hasOwnProperty.call(newValue,key)&&(veryOldValue[key]=newValue[key])}else veryOldValue=newValue}$watchCollectionInterceptor.$stateful=!0;var newValue,oldValue,veryOldValue,self=this,trackVeryOldValue=listener.length>1,changeDetected=0,changeDetector=$parse(obj,$watchCollectionInterceptor),internalArray=[],internalObject={},initRun=!0,oldLength=0;return this.$watch(changeDetector,$watchCollectionAction)},$digest:function(){var watch,value,last,watchers,length,dirty,next,current,logIdx,asyncTask,ttl=TTL,target=this,watchLog=[];beginPhase("$digest"),$browser.$$checkUrlChange(),this===$rootScope&&null!==applyAsyncId&&($browser.defer.cancel(applyAsyncId),flushApplyAsync()),lastDirtyWatch=null;do{for(dirty=!1,current=target;asyncQueue.length;){try{asyncTask=asyncQueue.shift(),asyncTask.scope.$eval(asyncTask.expression,asyncTask.locals)}catch(e){$exceptionHandler(e)}lastDirtyWatch=null}traverseScopesLoop:do{if(watchers=current.$$watchers)for(length=watchers.length;length--;)try{if(watch=watchers[length])if((value=watch.get(current))===(last=watch.last)||(watch.eq?equals(value,last):"number"==typeof value&&"number"==typeof last&&isNaN(value)&&isNaN(last))){if(watch===lastDirtyWatch){dirty=!1;break traverseScopesLoop}}else dirty=!0,lastDirtyWatch=watch,watch.last=watch.eq?copy(value,null):value,watch.fn(value,last===initWatchVal?value:last,current),5>ttl&&(logIdx=4-ttl,watchLog[logIdx]||(watchLog[logIdx]=[]),watchLog[logIdx].push({msg:isFunction(watch.exp)?"fn: "+(watch.exp.name||watch.exp.toString()):watch.exp,newVal:value,oldVal:last}))}catch(e){$exceptionHandler(e)}if(!(next=current.$$watchersCount&&current.$$childHead||current!==target&&current.$$nextSibling))for(;current!==target&&!(next=current.$$nextSibling);)current=current.$parent}while(current=next);if((dirty||asyncQueue.length)&&!ttl--)throw clearPhase(),$rootScopeMinErr("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",TTL,watchLog)}while(dirty||asyncQueue.length);for(clearPhase();postDigestQueue.length;)try{postDigestQueue.shift()()}catch(e){$exceptionHandler(e)}},$destroy:function(){if(!this.$$destroyed){var parent=this.$parent;this.$broadcast("$destroy"),this.$$destroyed=!0,this===$rootScope&&$browser.$$applicationDestroyed(),incrementWatchersCount(this,-this.$$watchersCount);for(var eventName in this.$$listenerCount)decrementListenerCount(this,this.$$listenerCount[eventName],eventName);parent&&parent.$$childHead==this&&(parent.$$childHead=this.$$nextSibling),parent&&parent.$$childTail==this&&(parent.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=noop,this.$on=this.$watch=this.$watchGroup=function(){return noop},this.$$listeners={},this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(expr,locals){return $parse(expr)(this,locals)},$evalAsync:function(expr,locals){$rootScope.$$phase||asyncQueue.length||$browser.defer(function(){asyncQueue.length&&$rootScope.$digest()}),asyncQueue.push({scope:this,expression:expr,locals:locals})},$$postDigest:function(fn){postDigestQueue.push(fn)},$apply:function(expr){try{return beginPhase("$apply"),this.$eval(expr)}catch(e){$exceptionHandler(e)}finally{clearPhase();try{$rootScope.$digest()}catch(e){throw $exceptionHandler(e),e}}},$applyAsync:function(expr){function $applyAsyncExpression(){scope.$eval(expr)}var scope=this;expr&&applyAsyncQueue.push($applyAsyncExpression),scheduleApplyAsync()},$on:function(name,listener){var namedListeners=this.$$listeners[name];namedListeners||(this.$$listeners[name]=namedListeners=[]),namedListeners.push(listener);var current=this;do current.$$listenerCount[name]||(current.$$listenerCount[name]=0),current.$$listenerCount[name]++;while(current=current.$parent);var self=this;return function(){var indexOfListener=namedListeners.indexOf(listener);-1!==indexOfListener&&(namedListeners[indexOfListener]=null,decrementListenerCount(self,1,name))}},$emit:function(name){var namedListeners,i,length,empty=[],scope=this,stopPropagation=!1,event={name:name,targetScope:scope,stopPropagation:function(){stopPropagation=!0},preventDefault:function(){event.defaultPrevented=!0},defaultPrevented:!1},listenerArgs=concat([event],arguments,1);do{for(namedListeners=scope.$$listeners[name]||empty,event.currentScope=scope,i=0,length=namedListeners.length;length>i;i++)if(namedListeners[i])try{namedListeners[i].apply(null,listenerArgs)}catch(e){$exceptionHandler(e)}else namedListeners.splice(i,1),i--,length--;if(stopPropagation)return event.currentScope=null,event;scope=scope.$parent}while(scope);return event.currentScope=null,event},$broadcast:function(name){var target=this,current=target,next=target,event={name:name,targetScope:target,preventDefault:function(){event.defaultPrevented=!0},defaultPrevented:!1};if(!target.$$listenerCount[name])return event;for(var listeners,i,length,listenerArgs=concat([event],arguments,1);current=next;){for(event.currentScope=current,listeners=current.$$listeners[name]||[],i=0,length=listeners.length;length>i;i++)if(listeners[i])try{listeners[i].apply(null,listenerArgs)}catch(e){$exceptionHandler(e)}else listeners.splice(i,1),i--,length--;if(!(next=current.$$listenerCount[name]&&current.$$childHead||current!==target&&current.$$nextSibling))for(;current!==target&&!(next=current.$$nextSibling);)current=current.$parent}return event.currentScope=null,event}};var $rootScope=new Scope,asyncQueue=$rootScope.$$asyncQueue=[],postDigestQueue=$rootScope.$$postDigestQueue=[],applyAsyncQueue=$rootScope.$$applyAsyncQueue=[];return $rootScope}]}function $$SanitizeUriProvider(){var aHrefSanitizationWhitelist=/^\s*(https?|ftp|mailto|tel|file):/,imgSrcSanitizationWhitelist=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(regexp){return isDefined(regexp)?(aHrefSanitizationWhitelist=regexp,this):aHrefSanitizationWhitelist},this.imgSrcSanitizationWhitelist=function(regexp){return isDefined(regexp)?(imgSrcSanitizationWhitelist=regexp,this):imgSrcSanitizationWhitelist},this.$get=function(){return function(uri,isImage){var normalizedVal,regex=isImage?imgSrcSanitizationWhitelist:aHrefSanitizationWhitelist;return normalizedVal=urlResolve(uri).href,""===normalizedVal||normalizedVal.match(regex)?uri:"unsafe:"+normalizedVal}}}function adjustMatcher(matcher){if("self"===matcher)return matcher;if(isString(matcher)){if(matcher.indexOf("***")>-1)throw $sceMinErr("iwcard","Illegal sequence *** in string matcher.  String: {0}",matcher);return matcher=escapeForRegexp(matcher).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),new RegExp("^"+matcher+"$")}if(isRegExp(matcher))return new RegExp("^"+matcher.source+"$");throw $sceMinErr("imatcher",'Matchers may only be "self", string patterns or RegExp objects')}function adjustMatchers(matchers){var adjustedMatchers=[];return isDefined(matchers)&&forEach(matchers,function(matcher){adjustedMatchers.push(adjustMatcher(matcher))}),adjustedMatchers}function $SceDelegateProvider(){this.SCE_CONTEXTS=SCE_CONTEXTS;var resourceUrlWhitelist=["self"],resourceUrlBlacklist=[];this.resourceUrlWhitelist=function(value){return arguments.length&&(resourceUrlWhitelist=adjustMatchers(value)),resourceUrlWhitelist},this.resourceUrlBlacklist=function(value){return arguments.length&&(resourceUrlBlacklist=adjustMatchers(value)),resourceUrlBlacklist},this.$get=["$injector",function($injector){function matchUrl(matcher,parsedUrl){return"self"===matcher?urlIsSameOrigin(parsedUrl):!!matcher.exec(parsedUrl.href)}function isResourceUrlAllowedByPolicy(url){var i,n,parsedUrl=urlResolve(url.toString()),allowed=!1;for(i=0,n=resourceUrlWhitelist.length;n>i;i++)if(matchUrl(resourceUrlWhitelist[i],parsedUrl)){allowed=!0;break}if(allowed)for(i=0,n=resourceUrlBlacklist.length;n>i;i++)if(matchUrl(resourceUrlBlacklist[i],parsedUrl)){allowed=!1;break}return allowed}function generateHolderType(Base){var holderType=function(trustedValue){this.$$unwrapTrustedValue=function(){return trustedValue}};return Base&&(holderType.prototype=new Base),holderType.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},holderType.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},holderType}function trustAs(type,trustedValue){var Constructor=byType.hasOwnProperty(type)?byType[type]:null;if(!Constructor)throw $sceMinErr("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",type,trustedValue);if(null===trustedValue||trustedValue===undefined||""===trustedValue)return trustedValue;if("string"!=typeof trustedValue)throw $sceMinErr("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",type);return new Constructor(trustedValue)}function valueOf(maybeTrusted){return maybeTrusted instanceof trustedValueHolderBase?maybeTrusted.$$unwrapTrustedValue():maybeTrusted}function getTrusted(type,maybeTrusted){if(null===maybeTrusted||maybeTrusted===undefined||""===maybeTrusted)return maybeTrusted;var constructor=byType.hasOwnProperty(type)?byType[type]:null;if(constructor&&maybeTrusted instanceof constructor)return maybeTrusted.$$unwrapTrustedValue();if(type===SCE_CONTEXTS.RESOURCE_URL){if(isResourceUrlAllowedByPolicy(maybeTrusted))return maybeTrusted;throw $sceMinErr("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",maybeTrusted.toString())}if(type===SCE_CONTEXTS.HTML)return htmlSanitizer(maybeTrusted);throw $sceMinErr("unsafe","Attempting to use an unsafe value in a safe context.")}var htmlSanitizer=function(){throw $sceMinErr("unsafe","Attempting to use an unsafe value in a safe context.")};$injector.has("$sanitize")&&(htmlSanitizer=$injector.get("$sanitize"));var trustedValueHolderBase=generateHolderType(),byType={};return byType[SCE_CONTEXTS.HTML]=generateHolderType(trustedValueHolderBase),byType[SCE_CONTEXTS.CSS]=generateHolderType(trustedValueHolderBase),byType[SCE_CONTEXTS.URL]=generateHolderType(trustedValueHolderBase),byType[SCE_CONTEXTS.JS]=generateHolderType(trustedValueHolderBase),byType[SCE_CONTEXTS.RESOURCE_URL]=generateHolderType(byType[SCE_CONTEXTS.URL]),{trustAs:trustAs,getTrusted:getTrusted,valueOf:valueOf}}]}function $SceProvider(){var enabled=!0;this.enabled=function(value){return arguments.length&&(enabled=!!value),enabled},this.$get=["$parse","$sceDelegate",function($parse,$sceDelegate){if(enabled&&8>msie)throw $sceMinErr("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");var sce=shallowCopy(SCE_CONTEXTS);sce.isEnabled=function(){return enabled},sce.trustAs=$sceDelegate.trustAs,sce.getTrusted=$sceDelegate.getTrusted,sce.valueOf=$sceDelegate.valueOf,enabled||(sce.trustAs=sce.getTrusted=function(type,value){return value},sce.valueOf=identity),sce.parseAs=function(type,expr){var parsed=$parse(expr);return parsed.literal&&parsed.constant?parsed:$parse(expr,function(value){return sce.getTrusted(type,value)})};var parse=sce.parseAs,getTrusted=sce.getTrusted,trustAs=sce.trustAs;return forEach(SCE_CONTEXTS,function(enumValue,name){var lName=lowercase(name);sce[camelCase("parse_as_"+lName)]=function(expr){return parse(enumValue,expr)},sce[camelCase("get_trusted_"+lName)]=function(value){return getTrusted(enumValue,value)},sce[camelCase("trust_as_"+lName)]=function(value){return trustAs(enumValue,value)}}),sce}]}function $SnifferProvider(){this.$get=["$window","$document",function($window,$document){var vendorPrefix,match,eventSupport={},android=toInt((/android (\d+)/.exec(lowercase(($window.navigator||{}).userAgent))||[])[1]),boxee=/Boxee/i.test(($window.navigator||{}).userAgent),document=$document[0]||{},vendorRegex=/^(Moz|webkit|ms)(?=[A-Z])/,bodyStyle=document.body&&document.body.style,transitions=!1,animations=!1;if(bodyStyle){for(var prop in bodyStyle)if(match=vendorRegex.exec(prop)){vendorPrefix=match[0],vendorPrefix=vendorPrefix.substr(0,1).toUpperCase()+vendorPrefix.substr(1);break}vendorPrefix||(vendorPrefix="WebkitOpacity"in bodyStyle&&"webkit"),transitions=!!("transition"in bodyStyle||vendorPrefix+"Transition"in bodyStyle),animations=!!("animation"in bodyStyle||vendorPrefix+"Animation"in bodyStyle),!android||transitions&&animations||(transitions=isString(bodyStyle.webkitTransition),animations=isString(bodyStyle.webkitAnimation))}return{history:!(!$window.history||!$window.history.pushState||4>android||boxee),hasEvent:function(event){if("input"===event&&11>=msie)return!1;if(isUndefined(eventSupport[event])){var divElm=document.createElement("div");eventSupport[event]="on"+event in divElm}return eventSupport[event]},csp:csp(),vendorPrefix:vendorPrefix,transitions:transitions,animations:animations,android:android}}]}function $TemplateRequestProvider(){this.$get=["$templateCache","$http","$q","$sce",function($templateCache,$http,$q,$sce){function handleRequestFn(tpl,ignoreRequestError){function handleError(resp){if(!ignoreRequestError)throw $compileMinErr("tpload","Failed to load template: {0} (HTTP status: {1} {2})",tpl,resp.status,resp.statusText);return $q.reject(resp)}handleRequestFn.totalPendingRequests++,isString(tpl)&&$templateCache.get(tpl)||(tpl=$sce.getTrustedResourceUrl(tpl));var transformResponse=$http.defaults&&$http.defaults.transformResponse;isArray(transformResponse)?transformResponse=transformResponse.filter(function(transformer){return transformer!==defaultHttpResponseTransform}):transformResponse===defaultHttpResponseTransform&&(transformResponse=null);var httpOptions={cache:$templateCache,transformResponse:transformResponse};return $http.get(tpl,httpOptions)["finally"](function(){handleRequestFn.totalPendingRequests--}).then(function(response){return $templateCache.put(tpl,response.data),response.data},handleError)}return handleRequestFn.totalPendingRequests=0,handleRequestFn}]}function $$TestabilityProvider(){this.$get=["$rootScope","$browser","$location",function($rootScope,$browser,$location){var testability={};return testability.findBindings=function(element,expression,opt_exactMatch){var bindings=element.getElementsByClassName("ng-binding"),matches=[];return forEach(bindings,function(binding){var dataBinding=angular.element(binding).data("$binding");dataBinding&&forEach(dataBinding,function(bindingName){if(opt_exactMatch){var matcher=new RegExp("(^|\\s)"+escapeForRegexp(expression)+"(\\s|\\||$)");matcher.test(bindingName)&&matches.push(binding)}else-1!=bindingName.indexOf(expression)&&matches.push(binding)})}),matches},testability.findModels=function(element,expression,opt_exactMatch){for(var prefixes=["ng-","data-ng-","ng\\:"],p=0;p<prefixes.length;++p){var attributeEquals=opt_exactMatch?"=":"*=",selector="["+prefixes[p]+"model"+attributeEquals+'"'+expression+'"]',elements=element.querySelectorAll(selector);if(elements.length)return elements}},testability.getLocation=function(){return $location.url()},testability.setLocation=function(url){url!==$location.url()&&($location.url(url),$rootScope.$digest())},testability.whenStable=function(callback){$browser.notifyWhenNoOutstandingRequests(callback)},testability}]}function $TimeoutProvider(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function($rootScope,$browser,$q,$$q,$exceptionHandler){function timeout(fn,delay,invokeApply){isFunction(fn)||(invokeApply=delay,delay=fn,fn=noop);var timeoutId,args=sliceArgs(arguments,3),skipApply=isDefined(invokeApply)&&!invokeApply,deferred=(skipApply?$$q:$q).defer(),promise=deferred.promise;return timeoutId=$browser.defer(function(){try{deferred.resolve(fn.apply(null,args))}catch(e){deferred.reject(e),$exceptionHandler(e)}finally{delete deferreds[promise.$$timeoutId]}skipApply||$rootScope.$apply()},delay),promise.$$timeoutId=timeoutId,deferreds[timeoutId]=deferred,promise}var deferreds={};return timeout.cancel=function(promise){return promise&&promise.$$timeoutId in deferreds?(deferreds[promise.$$timeoutId].reject("canceled"),delete deferreds[promise.$$timeoutId],$browser.defer.cancel(promise.$$timeoutId)):!1},timeout}]}function urlResolve(url){var href=url;return msie&&(urlParsingNode.setAttribute("href",href),href=urlParsingNode.href),urlParsingNode.setAttribute("href",href),{href:urlParsingNode.href,protocol:urlParsingNode.protocol?urlParsingNode.protocol.replace(/:$/,""):"",host:urlParsingNode.host,search:urlParsingNode.search?urlParsingNode.search.replace(/^\?/,""):"",hash:urlParsingNode.hash?urlParsingNode.hash.replace(/^#/,""):"",hostname:urlParsingNode.hostname,port:urlParsingNode.port,pathname:"/"===urlParsingNode.pathname.charAt(0)?urlParsingNode.pathname:"/"+urlParsingNode.pathname}}function urlIsSameOrigin(requestUrl){var parsed=isString(requestUrl)?urlResolve(requestUrl):requestUrl;return parsed.protocol===originUrl.protocol&&parsed.host===originUrl.host}function $WindowProvider(){this.$get=valueFn(window)}function $$CookieReader($document){function safeDecodeURIComponent(str){try{return decodeURIComponent(str)}catch(e){return str}}var rawDocument=$document[0]||{},lastCookies={},lastCookieString="";return function(){var cookieArray,cookie,i,index,name,currentCookieString=rawDocument.cookie||"";if(currentCookieString!==lastCookieString)for(lastCookieString=currentCookieString,cookieArray=lastCookieString.split("; "),lastCookies={},i=0;i<cookieArray.length;i++)cookie=cookieArray[i],index=cookie.indexOf("="),index>0&&(name=safeDecodeURIComponent(cookie.substring(0,index)),lastCookies[name]===undefined&&(lastCookies[name]=safeDecodeURIComponent(cookie.substring(index+1))));return lastCookies}}function $$CookieReaderProvider(){this.$get=$$CookieReader}function $FilterProvider($provide){function register(name,factory){if(isObject(name)){var filters={};return forEach(name,function(filter,key){filters[key]=register(key,filter)}),filters}return $provide.factory(name+suffix,factory)}var suffix="Filter";this.register=register,this.$get=["$injector",function($injector){return function(name){return $injector.get(name+suffix)}}],register("currency",currencyFilter),register("date",dateFilter),register("filter",filterFilter),register("json",jsonFilter),register("limitTo",limitToFilter),register("lowercase",lowercaseFilter),register("number",numberFilter),register("orderBy",orderByFilter),register("uppercase",uppercaseFilter)}function filterFilter(){return function(array,expression,comparator){if(!isArrayLike(array)){if(null==array)return array;throw minErr("filter")("notarray","Expected array but received: {0}",array)}var predicateFn,matchAgainstAnyProp,expressionType=getTypeForFilter(expression);switch(expressionType){case"function":predicateFn=expression;break;case"boolean":case"null":case"number":case"string":matchAgainstAnyProp=!0;case"object":predicateFn=createPredicateFn(expression,comparator,matchAgainstAnyProp);break;default:return array}return Array.prototype.filter.call(array,predicateFn)}}function createPredicateFn(expression,comparator,matchAgainstAnyProp){var predicateFn,shouldMatchPrimitives=isObject(expression)&&"$"in expression;return comparator===!0?comparator=equals:isFunction(comparator)||(comparator=function(actual,expected){return isUndefined(actual)?!1:null===actual||null===expected?actual===expected:isObject(expected)||isObject(actual)&&!hasCustomToString(actual)?!1:(actual=lowercase(""+actual),expected=lowercase(""+expected),-1!==actual.indexOf(expected))}),predicateFn=function(item){return shouldMatchPrimitives&&!isObject(item)?deepCompare(item,expression.$,comparator,!1):deepCompare(item,expression,comparator,matchAgainstAnyProp)}}function deepCompare(actual,expected,comparator,matchAgainstAnyProp,dontMatchWholeObject){var actualType=getTypeForFilter(actual),expectedType=getTypeForFilter(expected);if("string"===expectedType&&"!"===expected.charAt(0))return!deepCompare(actual,expected.substring(1),comparator,matchAgainstAnyProp);if(isArray(actual))return actual.some(function(item){return deepCompare(item,expected,comparator,matchAgainstAnyProp)});switch(actualType){case"object":var key;if(matchAgainstAnyProp){for(key in actual)if("$"!==key.charAt(0)&&deepCompare(actual[key],expected,comparator,!0))return!0;return dontMatchWholeObject?!1:deepCompare(actual,expected,comparator,!1)}if("object"===expectedType){for(key in expected){var expectedVal=expected[key];if(!isFunction(expectedVal)&&!isUndefined(expectedVal)){var matchAnyProperty="$"===key,actualVal=matchAnyProperty?actual:actual[key];if(!deepCompare(actualVal,expectedVal,comparator,matchAnyProperty,matchAnyProperty))return!1}}return!0}return comparator(actual,expected);case"function":return!1;default:return comparator(actual,expected)}}function getTypeForFilter(val){return null===val?"null":typeof val}function currencyFilter($locale){var formats=$locale.NUMBER_FORMATS;return function(amount,currencySymbol,fractionSize){return isUndefined(currencySymbol)&&(currencySymbol=formats.CURRENCY_SYM),isUndefined(fractionSize)&&(fractionSize=formats.PATTERNS[1].maxFrac),null==amount?amount:formatNumber(amount,formats.PATTERNS[1],formats.GROUP_SEP,formats.DECIMAL_SEP,fractionSize).replace(/\u00A4/g,currencySymbol)}}function numberFilter($locale){var formats=$locale.NUMBER_FORMATS;return function(number,fractionSize){return null==number?number:formatNumber(number,formats.PATTERNS[0],formats.GROUP_SEP,formats.DECIMAL_SEP,fractionSize)}}function formatNumber(number,pattern,groupSep,decimalSep,fractionSize){if(isObject(number))return"";var isNegative=0>number;number=Math.abs(number);var isInfinity=1/0===number;if(!isInfinity&&!isFinite(number))return"";var numStr=number+"",formatedText="",hasExponent=!1,parts=[];if(isInfinity&&(formatedText="∞"),!isInfinity&&-1!==numStr.indexOf("e")){var match=numStr.match(/([\d\.]+)e(-?)(\d+)/);match&&"-"==match[2]&&match[3]>fractionSize+1?number=0:(formatedText=numStr,hasExponent=!0)}if(isInfinity||hasExponent)fractionSize>0&&1>number&&(formatedText=number.toFixed(fractionSize),number=parseFloat(formatedText));else{var fractionLen=(numStr.split(DECIMAL_SEP)[1]||"").length;isUndefined(fractionSize)&&(fractionSize=Math.min(Math.max(pattern.minFrac,fractionLen),pattern.maxFrac)),number=+(Math.round(+(number.toString()+"e"+fractionSize)).toString()+"e"+-fractionSize);var fraction=(""+number).split(DECIMAL_SEP),whole=fraction[0];fraction=fraction[1]||"";var i,pos=0,lgroup=pattern.lgSize,group=pattern.gSize;if(whole.length>=lgroup+group)for(pos=whole.length-lgroup,i=0;pos>i;i++)(pos-i)%group===0&&0!==i&&(formatedText+=groupSep),formatedText+=whole.charAt(i);for(i=pos;i<whole.length;i++)(whole.length-i)%lgroup===0&&0!==i&&(formatedText+=groupSep),formatedText+=whole.charAt(i);for(;fraction.length<fractionSize;)fraction+="0";fractionSize&&"0"!==fractionSize&&(formatedText+=decimalSep+fraction.substr(0,fractionSize))}return 0===number&&(isNegative=!1),parts.push(isNegative?pattern.negPre:pattern.posPre,formatedText,isNegative?pattern.negSuf:pattern.posSuf),parts.join("")}function padNumber(num,digits,trim){var neg="";for(0>num&&(neg="-",num=-num),num=""+num;num.length<digits;)num="0"+num;return trim&&(num=num.substr(num.length-digits)),neg+num}function dateGetter(name,size,offset,trim){return offset=offset||0,function(date){var value=date["get"+name]();return(offset>0||value>-offset)&&(value+=offset),0===value&&-12==offset&&(value=12),padNumber(value,size,trim)}}function dateStrGetter(name,shortForm){return function(date,formats){var value=date["get"+name](),get=uppercase(shortForm?"SHORT"+name:name);return formats[get][value]}}function timeZoneGetter(date,formats,offset){var zone=-1*offset,paddedZone=zone>=0?"+":"";return paddedZone+=padNumber(Math[zone>0?"floor":"ceil"](zone/60),2)+padNumber(Math.abs(zone%60),2)}function getFirstThursdayOfYear(year){var dayOfWeekOnFirst=new Date(year,0,1).getDay();return new Date(year,0,(4>=dayOfWeekOnFirst?5:12)-dayOfWeekOnFirst)}function getThursdayThisWeek(datetime){return new Date(datetime.getFullYear(),datetime.getMonth(),datetime.getDate()+(4-datetime.getDay()))}function weekGetter(size){return function(date){var firstThurs=getFirstThursdayOfYear(date.getFullYear()),thisThurs=getThursdayThisWeek(date),diff=+thisThurs-+firstThurs,result=1+Math.round(diff/6048e5);return padNumber(result,size)}}function ampmGetter(date,formats){return date.getHours()<12?formats.AMPMS[0]:formats.AMPMS[1]}function eraGetter(date,formats){return date.getFullYear()<=0?formats.ERAS[0]:formats.ERAS[1]}function longEraGetter(date,formats){return date.getFullYear()<=0?formats.ERANAMES[0]:formats.ERANAMES[1]}function dateFilter($locale){function jsonStringToDate(string){var match;if(match=string.match(R_ISO8601_STR)){var date=new Date(0),tzHour=0,tzMin=0,dateSetter=match[8]?date.setUTCFullYear:date.setFullYear,timeSetter=match[8]?date.setUTCHours:date.setHours;match[9]&&(tzHour=toInt(match[9]+match[10]),tzMin=toInt(match[9]+match[11])),dateSetter.call(date,toInt(match[1]),toInt(match[2])-1,toInt(match[3]));var h=toInt(match[4]||0)-tzHour,m=toInt(match[5]||0)-tzMin,s=toInt(match[6]||0),ms=Math.round(1e3*parseFloat("0."+(match[7]||0)));return timeSetter.call(date,h,m,s,ms),date}return string}var R_ISO8601_STR=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(date,format,timezone){var fn,match,text="",parts=[];if(format=format||"mediumDate",format=$locale.DATETIME_FORMATS[format]||format,isString(date)&&(date=NUMBER_STRING.test(date)?toInt(date):jsonStringToDate(date)),isNumber(date)&&(date=new Date(date)),!isDate(date)||!isFinite(date.getTime()))return date;for(;format;)match=DATE_FORMATS_SPLIT.exec(format),match?(parts=concat(parts,match,1),format=parts.pop()):(parts.push(format),format=null);var dateTimezoneOffset=date.getTimezoneOffset();return timezone&&(dateTimezoneOffset=timezoneToOffset(timezone,date.getTimezoneOffset()),date=convertTimezoneToLocal(date,timezone,!0)),forEach(parts,function(value){fn=DATE_FORMATS[value],text+=fn?fn(date,$locale.DATETIME_FORMATS,dateTimezoneOffset):value.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),text}}function jsonFilter(){return function(object,spacing){return isUndefined(spacing)&&(spacing=2),toJson(object,spacing)
}}function limitToFilter(){return function(input,limit,begin){return limit=1/0===Math.abs(Number(limit))?Number(limit):toInt(limit),isNaN(limit)?input:(isNumber(input)&&(input=input.toString()),isArray(input)||isString(input)?(begin=!begin||isNaN(begin)?0:toInt(begin),begin=0>begin&&begin>=-input.length?input.length+begin:begin,limit>=0?input.slice(begin,begin+limit):0===begin?input.slice(limit,input.length):input.slice(Math.max(0,begin+limit),begin)):input)}}function orderByFilter($parse){function processPredicates(sortPredicate,reverseOrder){return reverseOrder=reverseOrder?-1:1,sortPredicate.map(function(predicate){var descending=1,get=identity;if(isFunction(predicate))get=predicate;else if(isString(predicate)&&(("+"==predicate.charAt(0)||"-"==predicate.charAt(0))&&(descending="-"==predicate.charAt(0)?-1:1,predicate=predicate.substring(1)),""!==predicate&&(get=$parse(predicate),get.constant))){var key=get();get=function(value){return value[key]}}return{get:get,descending:descending*reverseOrder}})}function isPrimitive(value){switch(typeof value){case"number":case"boolean":case"string":return!0;default:return!1}}function objectValue(value,index){return"function"==typeof value.valueOf&&(value=value.valueOf(),isPrimitive(value))?value:hasCustomToString(value)&&(value=value.toString(),isPrimitive(value))?value:index}function getPredicateValue(value,index){var type=typeof value;return null===value?(type="string",value="null"):"string"===type?value=value.toLowerCase():"object"===type&&(value=objectValue(value,index)),{value:value,type:type}}function compare(v1,v2){var result=0;return v1.type===v2.type?v1.value!==v2.value&&(result=v1.value<v2.value?-1:1):result=v1.type<v2.type?-1:1,result}return function(array,sortPredicate,reverseOrder){function getComparisonObject(value,index){return{value:value,predicateValues:predicates.map(function(predicate){return getPredicateValue(predicate.get(value),index)})}}function doComparison(v1,v2){for(var result=0,index=0,length=predicates.length;length>index&&!(result=compare(v1.predicateValues[index],v2.predicateValues[index])*predicates[index].descending);++index);return result}if(!isArrayLike(array))return array;isArray(sortPredicate)||(sortPredicate=[sortPredicate]),0===sortPredicate.length&&(sortPredicate=["+"]);var predicates=processPredicates(sortPredicate,reverseOrder),compareValues=Array.prototype.map.call(array,getComparisonObject);return compareValues.sort(doComparison),array=compareValues.map(function(item){return item.value})}}function ngDirective(directive){return isFunction(directive)&&(directive={link:directive}),directive.restrict=directive.restrict||"AC",valueFn(directive)}function nullFormRenameControl(control,name){control.$name=name}function FormController(element,attrs,$scope,$animate,$interpolate){var form=this,controls=[],parentForm=form.$$parentForm=element.parent().controller("form")||nullFormCtrl;form.$error={},form.$$success={},form.$pending=undefined,form.$name=$interpolate(attrs.name||attrs.ngForm||"")($scope),form.$dirty=!1,form.$pristine=!0,form.$valid=!0,form.$invalid=!1,form.$submitted=!1,parentForm.$addControl(form),form.$rollbackViewValue=function(){forEach(controls,function(control){control.$rollbackViewValue()})},form.$commitViewValue=function(){forEach(controls,function(control){control.$commitViewValue()})},form.$addControl=function(control){assertNotHasOwnProperty(control.$name,"input"),controls.push(control),control.$name&&(form[control.$name]=control)},form.$$renameControl=function(control,newName){var oldName=control.$name;form[oldName]===control&&delete form[oldName],form[newName]=control,control.$name=newName},form.$removeControl=function(control){control.$name&&form[control.$name]===control&&delete form[control.$name],forEach(form.$pending,function(value,name){form.$setValidity(name,null,control)}),forEach(form.$error,function(value,name){form.$setValidity(name,null,control)}),forEach(form.$$success,function(value,name){form.$setValidity(name,null,control)}),arrayRemove(controls,control)},addSetValidityMethod({ctrl:this,$element:element,set:function(object,property,controller){var list=object[property];if(list){var index=list.indexOf(controller);-1===index&&list.push(controller)}else object[property]=[controller]},unset:function(object,property,controller){var list=object[property];list&&(arrayRemove(list,controller),0===list.length&&delete object[property])},parentForm:parentForm,$animate:$animate}),form.$setDirty=function(){$animate.removeClass(element,PRISTINE_CLASS),$animate.addClass(element,DIRTY_CLASS),form.$dirty=!0,form.$pristine=!1,parentForm.$setDirty()},form.$setPristine=function(){$animate.setClass(element,PRISTINE_CLASS,DIRTY_CLASS+" "+SUBMITTED_CLASS),form.$dirty=!1,form.$pristine=!0,form.$submitted=!1,forEach(controls,function(control){control.$setPristine()})},form.$setUntouched=function(){forEach(controls,function(control){control.$setUntouched()})},form.$setSubmitted=function(){$animate.addClass(element,SUBMITTED_CLASS),form.$submitted=!0,parentForm.$setSubmitted()}}function stringBasedInputType(ctrl){ctrl.$formatters.push(function(value){return ctrl.$isEmpty(value)?value:value.toString()})}function textInputType(scope,element,attr,ctrl,$sniffer,$browser){baseInputType(scope,element,attr,ctrl,$sniffer,$browser),stringBasedInputType(ctrl)}function baseInputType(scope,element,attr,ctrl,$sniffer,$browser){var type=lowercase(element[0].type);if(!$sniffer.android){var composing=!1;element.on("compositionstart",function(){composing=!0}),element.on("compositionend",function(){composing=!1,listener()})}var listener=function(ev){if(timeout&&($browser.defer.cancel(timeout),timeout=null),!composing){var value=element.val(),event=ev&&ev.type;"password"===type||attr.ngTrim&&"false"===attr.ngTrim||(value=trim(value)),(ctrl.$viewValue!==value||""===value&&ctrl.$$hasNativeValidators)&&ctrl.$setViewValue(value,event)}};if($sniffer.hasEvent("input"))element.on("input",listener);else{var timeout,deferListener=function(ev,input,origValue){timeout||(timeout=$browser.defer(function(){timeout=null,input&&input.value===origValue||listener(ev)}))};element.on("keydown",function(event){var key=event.keyCode;91===key||key>15&&19>key||key>=37&&40>=key||deferListener(event,this,this.value)}),$sniffer.hasEvent("paste")&&element.on("paste cut",deferListener)}element.on("change",listener),ctrl.$render=function(){element.val(ctrl.$isEmpty(ctrl.$viewValue)?"":ctrl.$viewValue)}}function weekParser(isoWeek,existingDate){if(isDate(isoWeek))return isoWeek;if(isString(isoWeek)){WEEK_REGEXP.lastIndex=0;var parts=WEEK_REGEXP.exec(isoWeek);if(parts){var year=+parts[1],week=+parts[2],hours=0,minutes=0,seconds=0,milliseconds=0,firstThurs=getFirstThursdayOfYear(year),addDays=7*(week-1);return existingDate&&(hours=existingDate.getHours(),minutes=existingDate.getMinutes(),seconds=existingDate.getSeconds(),milliseconds=existingDate.getMilliseconds()),new Date(year,0,firstThurs.getDate()+addDays,hours,minutes,seconds,milliseconds)}}return 0/0}function createDateParser(regexp,mapping){return function(iso,date){var parts,map;if(isDate(iso))return iso;if(isString(iso)){if('"'==iso.charAt(0)&&'"'==iso.charAt(iso.length-1)&&(iso=iso.substring(1,iso.length-1)),ISO_DATE_REGEXP.test(iso))return new Date(iso);if(regexp.lastIndex=0,parts=regexp.exec(iso))return parts.shift(),map=date?{yyyy:date.getFullYear(),MM:date.getMonth()+1,dd:date.getDate(),HH:date.getHours(),mm:date.getMinutes(),ss:date.getSeconds(),sss:date.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},forEach(parts,function(part,index){index<mapping.length&&(map[mapping[index]]=+part)}),new Date(map.yyyy,map.MM-1,map.dd,map.HH,map.mm,map.ss||0,1e3*map.sss||0)}return 0/0}}function createDateInputType(type,regexp,parseDate,format){return function(scope,element,attr,ctrl,$sniffer,$browser,$filter){function isValidDate(value){return value&&!(value.getTime&&value.getTime()!==value.getTime())}function parseObservedDateValue(val){return isDefined(val)?isDate(val)?val:parseDate(val):undefined}badInputChecker(scope,element,attr,ctrl),baseInputType(scope,element,attr,ctrl,$sniffer,$browser);var previousDate,timezone=ctrl&&ctrl.$options&&ctrl.$options.timezone;if(ctrl.$$parserName=type,ctrl.$parsers.push(function(value){if(ctrl.$isEmpty(value))return null;if(regexp.test(value)){var parsedDate=parseDate(value,previousDate);return timezone&&(parsedDate=convertTimezoneToLocal(parsedDate,timezone)),parsedDate}return undefined}),ctrl.$formatters.push(function(value){if(value&&!isDate(value))throw $ngModelMinErr("datefmt","Expected `{0}` to be a date",value);return isValidDate(value)?(previousDate=value,previousDate&&timezone&&(previousDate=convertTimezoneToLocal(previousDate,timezone,!0)),$filter("date")(value,format,timezone)):(previousDate=null,"")}),isDefined(attr.min)||attr.ngMin){var minVal;ctrl.$validators.min=function(value){return!isValidDate(value)||isUndefined(minVal)||parseDate(value)>=minVal},attr.$observe("min",function(val){minVal=parseObservedDateValue(val),ctrl.$validate()})}if(isDefined(attr.max)||attr.ngMax){var maxVal;ctrl.$validators.max=function(value){return!isValidDate(value)||isUndefined(maxVal)||parseDate(value)<=maxVal},attr.$observe("max",function(val){maxVal=parseObservedDateValue(val),ctrl.$validate()})}}}function badInputChecker(scope,element,attr,ctrl){var node=element[0],nativeValidation=ctrl.$$hasNativeValidators=isObject(node.validity);nativeValidation&&ctrl.$parsers.push(function(value){var validity=element.prop(VALIDITY_STATE_PROPERTY)||{};return validity.badInput&&!validity.typeMismatch?undefined:value})}function numberInputType(scope,element,attr,ctrl,$sniffer,$browser){if(badInputChecker(scope,element,attr,ctrl),baseInputType(scope,element,attr,ctrl,$sniffer,$browser),ctrl.$$parserName="number",ctrl.$parsers.push(function(value){return ctrl.$isEmpty(value)?null:NUMBER_REGEXP.test(value)?parseFloat(value):undefined}),ctrl.$formatters.push(function(value){if(!ctrl.$isEmpty(value)){if(!isNumber(value))throw $ngModelMinErr("numfmt","Expected `{0}` to be a number",value);value=value.toString()}return value}),isDefined(attr.min)||attr.ngMin){var minVal;ctrl.$validators.min=function(value){return ctrl.$isEmpty(value)||isUndefined(minVal)||value>=minVal},attr.$observe("min",function(val){isDefined(val)&&!isNumber(val)&&(val=parseFloat(val,10)),minVal=isNumber(val)&&!isNaN(val)?val:undefined,ctrl.$validate()})}if(isDefined(attr.max)||attr.ngMax){var maxVal;ctrl.$validators.max=function(value){return ctrl.$isEmpty(value)||isUndefined(maxVal)||maxVal>=value},attr.$observe("max",function(val){isDefined(val)&&!isNumber(val)&&(val=parseFloat(val,10)),maxVal=isNumber(val)&&!isNaN(val)?val:undefined,ctrl.$validate()})}}function urlInputType(scope,element,attr,ctrl,$sniffer,$browser){baseInputType(scope,element,attr,ctrl,$sniffer,$browser),stringBasedInputType(ctrl),ctrl.$$parserName="url",ctrl.$validators.url=function(modelValue,viewValue){var value=modelValue||viewValue;return ctrl.$isEmpty(value)||URL_REGEXP.test(value)}}function emailInputType(scope,element,attr,ctrl,$sniffer,$browser){baseInputType(scope,element,attr,ctrl,$sniffer,$browser),stringBasedInputType(ctrl),ctrl.$$parserName="email",ctrl.$validators.email=function(modelValue,viewValue){var value=modelValue||viewValue;return ctrl.$isEmpty(value)||EMAIL_REGEXP.test(value)}}function radioInputType(scope,element,attr,ctrl){isUndefined(attr.name)&&element.attr("name",nextUid());var listener=function(ev){element[0].checked&&ctrl.$setViewValue(attr.value,ev&&ev.type)};element.on("click",listener),ctrl.$render=function(){var value=attr.value;element[0].checked=value==ctrl.$viewValue},attr.$observe("value",ctrl.$render)}function parseConstantExpr($parse,context,name,expression,fallback){var parseFn;if(isDefined(expression)){if(parseFn=$parse(expression),!parseFn.constant)throw minErr("ngModel")("constexpr","Expected constant expression for `{0}`, but saw `{1}`.",name,expression);return parseFn(context)}return fallback}function checkboxInputType(scope,element,attr,ctrl,$sniffer,$browser,$filter,$parse){var trueValue=parseConstantExpr($parse,scope,"ngTrueValue",attr.ngTrueValue,!0),falseValue=parseConstantExpr($parse,scope,"ngFalseValue",attr.ngFalseValue,!1),listener=function(ev){ctrl.$setViewValue(element[0].checked,ev&&ev.type)};element.on("click",listener),ctrl.$render=function(){element[0].checked=ctrl.$viewValue},ctrl.$isEmpty=function(value){return value===!1},ctrl.$formatters.push(function(value){return equals(value,trueValue)}),ctrl.$parsers.push(function(value){return value?trueValue:falseValue})}function classDirective(name,selector){return name="ngClass"+name,["$animate",function($animate){function arrayDifference(tokens1,tokens2){var values=[];outer:for(var i=0;i<tokens1.length;i++){for(var token=tokens1[i],j=0;j<tokens2.length;j++)if(token==tokens2[j])continue outer;values.push(token)}return values}function arrayClasses(classVal){var classes=[];return isArray(classVal)?(forEach(classVal,function(v){classes=classes.concat(arrayClasses(v))}),classes):isString(classVal)?classVal.split(" "):isObject(classVal)?(forEach(classVal,function(v,k){v&&(classes=classes.concat(k.split(" ")))}),classes):classVal}return{restrict:"AC",link:function(scope,element,attr){function addClasses(classes){var newClasses=digestClassCounts(classes,1);attr.$addClass(newClasses)}function removeClasses(classes){var newClasses=digestClassCounts(classes,-1);attr.$removeClass(newClasses)}function digestClassCounts(classes,count){var classCounts=element.data("$classCounts")||createMap(),classesToUpdate=[];return forEach(classes,function(className){(count>0||classCounts[className])&&(classCounts[className]=(classCounts[className]||0)+count,classCounts[className]===+(count>0)&&classesToUpdate.push(className))}),element.data("$classCounts",classCounts),classesToUpdate.join(" ")}function updateClasses(oldClasses,newClasses){var toAdd=arrayDifference(newClasses,oldClasses),toRemove=arrayDifference(oldClasses,newClasses);toAdd=digestClassCounts(toAdd,1),toRemove=digestClassCounts(toRemove,-1),toAdd&&toAdd.length&&$animate.addClass(element,toAdd),toRemove&&toRemove.length&&$animate.removeClass(element,toRemove)}function ngClassWatchAction(newVal){if(selector===!0||scope.$index%2===selector){var newClasses=arrayClasses(newVal||[]);if(oldVal){if(!equals(newVal,oldVal)){var oldClasses=arrayClasses(oldVal);updateClasses(oldClasses,newClasses)}}else addClasses(newClasses)}oldVal=shallowCopy(newVal)}var oldVal;scope.$watch(attr[name],ngClassWatchAction,!0),attr.$observe("class",function(){ngClassWatchAction(scope.$eval(attr[name]))}),"ngClass"!==name&&scope.$watch("$index",function($index,old$index){var mod=1&$index;if(mod!==(1&old$index)){var classes=arrayClasses(scope.$eval(attr[name]));mod===selector?addClasses(classes):removeClasses(classes)}})}}}]}function addSetValidityMethod(context){function setValidity(validationErrorKey,state,controller){state===undefined?createAndSet("$pending",validationErrorKey,controller):unsetAndCleanup("$pending",validationErrorKey,controller),isBoolean(state)?state?(unset(ctrl.$error,validationErrorKey,controller),set(ctrl.$$success,validationErrorKey,controller)):(set(ctrl.$error,validationErrorKey,controller),unset(ctrl.$$success,validationErrorKey,controller)):(unset(ctrl.$error,validationErrorKey,controller),unset(ctrl.$$success,validationErrorKey,controller)),ctrl.$pending?(cachedToggleClass(PENDING_CLASS,!0),ctrl.$valid=ctrl.$invalid=undefined,toggleValidationCss("",null)):(cachedToggleClass(PENDING_CLASS,!1),ctrl.$valid=isObjectEmpty(ctrl.$error),ctrl.$invalid=!ctrl.$valid,toggleValidationCss("",ctrl.$valid));var combinedState;combinedState=ctrl.$pending&&ctrl.$pending[validationErrorKey]?undefined:ctrl.$error[validationErrorKey]?!1:ctrl.$$success[validationErrorKey]?!0:null,toggleValidationCss(validationErrorKey,combinedState),parentForm.$setValidity(validationErrorKey,combinedState,ctrl)}function createAndSet(name,value,controller){ctrl[name]||(ctrl[name]={}),set(ctrl[name],value,controller)}function unsetAndCleanup(name,value,controller){ctrl[name]&&unset(ctrl[name],value,controller),isObjectEmpty(ctrl[name])&&(ctrl[name]=undefined)}function cachedToggleClass(className,switchValue){switchValue&&!classCache[className]?($animate.addClass($element,className),classCache[className]=!0):!switchValue&&classCache[className]&&($animate.removeClass($element,className),classCache[className]=!1)}function toggleValidationCss(validationErrorKey,isValid){validationErrorKey=validationErrorKey?"-"+snake_case(validationErrorKey,"-"):"",cachedToggleClass(VALID_CLASS+validationErrorKey,isValid===!0),cachedToggleClass(INVALID_CLASS+validationErrorKey,isValid===!1)}var ctrl=context.ctrl,$element=context.$element,classCache={},set=context.set,unset=context.unset,parentForm=context.parentForm,$animate=context.$animate;classCache[INVALID_CLASS]=!(classCache[VALID_CLASS]=$element.hasClass(VALID_CLASS)),ctrl.$setValidity=setValidity}function isObjectEmpty(obj){if(obj)for(var prop in obj)if(obj.hasOwnProperty(prop))return!1;return!0}var REGEX_STRING_REGEXP=/^\/(.+)\/([a-z]*)$/,VALIDITY_STATE_PROPERTY="validity",lowercase=function(string){return isString(string)?string.toLowerCase():string},hasOwnProperty=Object.prototype.hasOwnProperty,uppercase=function(string){return isString(string)?string.toUpperCase():string},manualLowercase=function(s){return isString(s)?s.replace(/[A-Z]/g,function(ch){return String.fromCharCode(32|ch.charCodeAt(0))}):s},manualUppercase=function(s){return isString(s)?s.replace(/[a-z]/g,function(ch){return String.fromCharCode(-33&ch.charCodeAt(0))}):s};"i"!=="I".toLowerCase()&&(lowercase=manualLowercase,uppercase=manualUppercase);var msie,jqLite,jQuery,angularModule,slice=[].slice,splice=[].splice,push=[].push,toString=Object.prototype.toString,getPrototypeOf=Object.getPrototypeOf,ngMinErr=minErr("ng"),angular=window.angular||(window.angular={}),uid=0;msie=document.documentMode,noop.$inject=[],identity.$inject=[];var skipDestroyOnNextJQueryCleanData,isArray=Array.isArray,TYPED_ARRAY_REGEXP=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,trim=function(value){return isString(value)?value.trim():value},escapeForRegexp=function(s){return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},csp=function(){if(isDefined(csp.isActive_))return csp.isActive_;var active=!(!document.querySelector("[ng-csp]")&&!document.querySelector("[data-ng-csp]"));if(!active)try{new Function("")}catch(e){active=!0}return csp.isActive_=active},jq=function(){if(isDefined(jq.name_))return jq.name_;var el,i,prefix,name,ii=ngAttrPrefixes.length;for(i=0;ii>i;++i)if(prefix=ngAttrPrefixes[i],el=document.querySelector("["+prefix.replace(":","\\:")+"jq]")){name=el.getAttribute(prefix+"jq");break}return jq.name_=name},ngAttrPrefixes=["ng-","data-ng-","ng:","x-ng-"],SNAKE_CASE_REGEXP=/[A-Z]/g,bindJQueryFired=!1,NODE_TYPE_ELEMENT=1,NODE_TYPE_ATTRIBUTE=2,NODE_TYPE_TEXT=3,NODE_TYPE_COMMENT=8,NODE_TYPE_DOCUMENT=9,NODE_TYPE_DOCUMENT_FRAGMENT=11,version={full:"1.4.3",major:1,minor:4,dot:3,codeName:"foam-acceleration"};JQLite.expando="ng339";var jqCache=JQLite.cache={},jqId=1,addEventListenerFn=function(element,type,fn){element.addEventListener(type,fn,!1)},removeEventListenerFn=function(element,type,fn){element.removeEventListener(type,fn,!1)};JQLite._data=function(node){return this.cache[node[this.expando]]||{}};var SPECIAL_CHARS_REGEXP=/([\:\-\_]+(.))/g,MOZ_HACK_REGEXP=/^moz([A-Z])/,MOUSE_EVENT_MAP={mouseleave:"mouseout",mouseenter:"mouseover"},jqLiteMinErr=minErr("jqLite"),SINGLE_TAG_REGEXP=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,HTML_REGEXP=/<|&#?\w+;/,TAG_NAME_REGEXP=/<([\w:]+)/,XHTML_TAG_REGEXP=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,wrapMap={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wrapMap.optgroup=wrapMap.option,wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead,wrapMap.th=wrapMap.td;var JQLitePrototype=JQLite.prototype={ready:function(fn){function trigger(){fired||(fired=!0,fn())}var fired=!1;"complete"===document.readyState?setTimeout(trigger):(this.on("DOMContentLoaded",trigger),JQLite(window).on("load",trigger))},toString:function(){var value=[];return forEach(this,function(e){value.push(""+e)}),"["+value.join(", ")+"]"},eq:function(index){return index>=0?jqLite(this[index]):jqLite(this[this.length+index])},length:0,push:push,sort:[].sort,splice:[].splice},BOOLEAN_ATTR={};forEach("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(value){BOOLEAN_ATTR[lowercase(value)]=value});var BOOLEAN_ELEMENTS={};forEach("input,select,option,textarea,button,form,details".split(","),function(value){BOOLEAN_ELEMENTS[value]=!0});var ALIASED_ATTR={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};forEach({data:jqLiteData,removeData:jqLiteRemoveData,hasData:jqLiteHasData},function(fn,name){JQLite[name]=fn}),forEach({data:jqLiteData,inheritedData:jqLiteInheritedData,scope:function(element){return jqLite.data(element,"$scope")||jqLiteInheritedData(element.parentNode||element,["$isolateScope","$scope"])},isolateScope:function(element){return jqLite.data(element,"$isolateScope")||jqLite.data(element,"$isolateScopeNoTemplate")},controller:jqLiteController,injector:function(element){return jqLiteInheritedData(element,"$injector")},removeAttr:function(element,name){element.removeAttribute(name)},hasClass:jqLiteHasClass,css:function(element,name,value){return name=camelCase(name),isDefined(value)?(element.style[name]=value,void 0):element.style[name]},attr:function(element,name,value){var nodeType=element.nodeType;if(nodeType!==NODE_TYPE_TEXT&&nodeType!==NODE_TYPE_ATTRIBUTE&&nodeType!==NODE_TYPE_COMMENT){var lowercasedName=lowercase(name);if(BOOLEAN_ATTR[lowercasedName]){if(!isDefined(value))return element[name]||(element.attributes.getNamedItem(name)||noop).specified?lowercasedName:undefined;value?(element[name]=!0,element.setAttribute(name,lowercasedName)):(element[name]=!1,element.removeAttribute(lowercasedName))}else if(isDefined(value))element.setAttribute(name,value);else if(element.getAttribute){var ret=element.getAttribute(name,2);return null===ret?undefined:ret}}},prop:function(element,name,value){return isDefined(value)?(element[name]=value,void 0):element[name]},text:function(){function getText(element,value){if(isUndefined(value)){var nodeType=element.nodeType;return nodeType===NODE_TYPE_ELEMENT||nodeType===NODE_TYPE_TEXT?element.textContent:""}element.textContent=value}return getText.$dv="",getText}(),val:function(element,value){if(isUndefined(value)){if(element.multiple&&"select"===nodeName_(element)){var result=[];return forEach(element.options,function(option){option.selected&&result.push(option.value||option.text)}),0===result.length?null:result}return element.value}element.value=value},html:function(element,value){return isUndefined(value)?element.innerHTML:(jqLiteDealoc(element,!0),element.innerHTML=value,void 0)},empty:jqLiteEmpty},function(fn,name){JQLite.prototype[name]=function(arg1,arg2){var i,key,nodeCount=this.length;if(fn!==jqLiteEmpty&&(2==fn.length&&fn!==jqLiteHasClass&&fn!==jqLiteController?arg1:arg2)===undefined){if(isObject(arg1)){for(i=0;nodeCount>i;i++)if(fn===jqLiteData)fn(this[i],arg1);else for(key in arg1)fn(this[i],key,arg1[key]);return this}for(var value=fn.$dv,jj=value===undefined?Math.min(nodeCount,1):nodeCount,j=0;jj>j;j++){var nodeValue=fn(this[j],arg1,arg2);value=value?value+nodeValue:nodeValue}return value}for(i=0;nodeCount>i;i++)fn(this[i],arg1,arg2);return this}}),forEach({removeData:jqLiteRemoveData,on:function jqLiteOn(element,type,fn,unsupported){if(isDefined(unsupported))throw jqLiteMinErr("onargs","jqLite#on() does not support the `selector` or `eventData` parameters");if(jqLiteAcceptsData(element)){var expandoStore=jqLiteExpandoStore(element,!0),events=expandoStore.events,handle=expandoStore.handle;handle||(handle=expandoStore.handle=createEventHandler(element,events));for(var types=type.indexOf(" ")>=0?type.split(" "):[type],i=types.length;i--;){type=types[i];var eventFns=events[type];eventFns||(events[type]=[],"mouseenter"===type||"mouseleave"===type?jqLiteOn(element,MOUSE_EVENT_MAP[type],function(event){var target=this,related=event.relatedTarget;(!related||related!==target&&!target.contains(related))&&handle(event,type)}):"$destroy"!==type&&addEventListenerFn(element,type,handle),eventFns=events[type]),eventFns.push(fn)}}},off:jqLiteOff,one:function(element,type,fn){element=jqLite(element),element.on(type,function onFn(){element.off(type,fn),element.off(type,onFn)}),element.on(type,fn)},replaceWith:function(element,replaceNode){var index,parent=element.parentNode;jqLiteDealoc(element),forEach(new JQLite(replaceNode),function(node){index?parent.insertBefore(node,index.nextSibling):parent.replaceChild(node,element),index=node})},children:function(element){var children=[];return forEach(element.childNodes,function(element){element.nodeType===NODE_TYPE_ELEMENT&&children.push(element)}),children},contents:function(element){return element.contentDocument||element.childNodes||[]},append:function(element,node){var nodeType=element.nodeType;if(nodeType===NODE_TYPE_ELEMENT||nodeType===NODE_TYPE_DOCUMENT_FRAGMENT){node=new JQLite(node);for(var i=0,ii=node.length;ii>i;i++){var child=node[i];element.appendChild(child)}}},prepend:function(element,node){if(element.nodeType===NODE_TYPE_ELEMENT){var index=element.firstChild;forEach(new JQLite(node),function(child){element.insertBefore(child,index)})}},wrap:function(element,wrapNode){wrapNode=jqLite(wrapNode).eq(0).clone()[0];var parent=element.parentNode;parent&&parent.replaceChild(wrapNode,element),wrapNode.appendChild(element)},remove:jqLiteRemove,detach:function(element){jqLiteRemove(element,!0)},after:function(element,newElement){var index=element,parent=element.parentNode;newElement=new JQLite(newElement);for(var i=0,ii=newElement.length;ii>i;i++){var node=newElement[i];parent.insertBefore(node,index.nextSibling),index=node}},addClass:jqLiteAddClass,removeClass:jqLiteRemoveClass,toggleClass:function(element,selector,condition){selector&&forEach(selector.split(" "),function(className){var classCondition=condition;isUndefined(classCondition)&&(classCondition=!jqLiteHasClass(element,className)),(classCondition?jqLiteAddClass:jqLiteRemoveClass)(element,className)})},parent:function(element){var parent=element.parentNode;return parent&&parent.nodeType!==NODE_TYPE_DOCUMENT_FRAGMENT?parent:null},next:function(element){return element.nextElementSibling},find:function(element,selector){return element.getElementsByTagName?element.getElementsByTagName(selector):[]},clone:jqLiteClone,triggerHandler:function(element,event,extraParameters){var dummyEvent,eventFnsCopy,handlerArgs,eventName=event.type||event,expandoStore=jqLiteExpandoStore(element),events=expandoStore&&expandoStore.events,eventFns=events&&events[eventName];eventFns&&(dummyEvent={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return this.defaultPrevented===!0},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return this.immediatePropagationStopped===!0},stopPropagation:noop,type:eventName,target:element},event.type&&(dummyEvent=extend(dummyEvent,event)),eventFnsCopy=shallowCopy(eventFns),handlerArgs=extraParameters?[dummyEvent].concat(extraParameters):[dummyEvent],forEach(eventFnsCopy,function(fn){dummyEvent.isImmediatePropagationStopped()||fn.apply(element,handlerArgs)}))}},function(fn,name){JQLite.prototype[name]=function(arg1,arg2,arg3){for(var value,i=0,ii=this.length;ii>i;i++)isUndefined(value)?(value=fn(this[i],arg1,arg2,arg3),isDefined(value)&&(value=jqLite(value))):jqLiteAddNodes(value,fn(this[i],arg1,arg2,arg3));return isDefined(value)?value:this},JQLite.prototype.bind=JQLite.prototype.on,JQLite.prototype.unbind=JQLite.prototype.off}),HashMap.prototype={put:function(key,value){this[hashKey(key,this.nextUid)]=value},get:function(key){return this[hashKey(key,this.nextUid)]},remove:function(key){var value=this[key=hashKey(key,this.nextUid)];return delete this[key],value}};var $$HashMapProvider=[function(){this.$get=[function(){return HashMap}]}],FN_ARGS=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,FN_ARG_SPLIT=/,/,FN_ARG=/^\s*(_?)(\S+?)\1\s*$/,STRIP_COMMENTS=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,$injectorMinErr=minErr("$injector");createInjector.$$annotate=annotate;var $animateMinErr=minErr("$animate"),ELEMENT_NODE=1,NG_ANIMATE_CLASSNAME="ng-animate",$$CoreAnimateRunnerProvider=function(){this.$get=["$q","$$rAF",function($q,$$rAF){function AnimateRunner(){}return AnimateRunner.all=noop,AnimateRunner.chain=noop,AnimateRunner.prototype={end:noop,cancel:noop,resume:noop,pause:noop,complete:noop,then:function(pass,fail){return $q(function(resolve){$$rAF(function(){resolve()})}).then(pass,fail)}},AnimateRunner}]},$$CoreAnimateQueueProvider=function(){var postDigestQueue=new HashMap,postDigestElements=[];this.$get=["$$AnimateRunner","$rootScope",function($$AnimateRunner,$rootScope){function addRemoveClassesPostDigest(element,add,remove){var data=postDigestQueue.get(element);data||(postDigestQueue.put(element,data={}),postDigestElements.push(element)),add&&forEach(add.split(" "),function(className){className&&(data[className]=!0)}),remove&&forEach(remove.split(" "),function(className){className&&(data[className]=!1)}),postDigestElements.length>1||$rootScope.$$postDigest(function(){forEach(postDigestElements,function(element){var data=postDigestQueue.get(element);if(data){var existing=splitClasses(element.attr("class")),toAdd="",toRemove="";forEach(data,function(status,className){var hasClass=!!existing[className];status!==hasClass&&(status?toAdd+=(toAdd.length?" ":"")+className:toRemove+=(toRemove.length?" ":"")+className)}),forEach(element,function(elm){toAdd&&jqLiteAddClass(elm,toAdd),toRemove&&jqLiteRemoveClass(elm,toRemove)}),postDigestQueue.remove(element)}}),postDigestElements.length=0})}return{enabled:noop,on:noop,off:noop,pin:noop,push:function(element,event,options,domOperation){return domOperation&&domOperation(),options=options||{},options.from&&element.css(options.from),options.to&&element.css(options.to),(options.addClass||options.removeClass)&&addRemoveClassesPostDigest(element,options.addClass,options.removeClass),new $$AnimateRunner}}}]},$AnimateProvider=["$provide",function($provide){var provider=this;this.$$registeredAnimations=Object.create(null),this.register=function(name,factory){if(name&&"."!==name.charAt(0))throw $animateMinErr("notcsel","Expecting class selector starting with '.' got '{0}'.",name);var key=name+"-animation";provider.$$registeredAnimations[name.substr(1)]=key,$provide.factory(key,factory)},this.classNameFilter=function(expression){if(1===arguments.length&&(this.$$classNameFilter=expression instanceof RegExp?expression:null,this.$$classNameFilter)){var reservedRegex=new RegExp("(\\s+|\\/)"+NG_ANIMATE_CLASSNAME+"(\\s+|\\/)");if(reservedRegex.test(this.$$classNameFilter.toString()))throw $animateMinErr("nongcls",'$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.',NG_ANIMATE_CLASSNAME)}return this.$$classNameFilter},this.$get=["$$animateQueue",function($$animateQueue){function domInsert(element,parentElement,afterElement){if(afterElement){var afterNode=extractElementNode(afterElement);!afterNode||afterNode.parentNode||afterNode.previousElementSibling||(afterElement=null)}afterElement?afterElement.after(element):parentElement.prepend(element)}return{on:$$animateQueue.on,off:$$animateQueue.off,pin:$$animateQueue.pin,enabled:$$animateQueue.enabled,cancel:function(runner){runner.end&&runner.end()
},enter:function(element,parent,after,options){return parent=parent&&jqLite(parent),after=after&&jqLite(after),parent=parent||after.parent(),domInsert(element,parent,after),$$animateQueue.push(element,"enter",prepareAnimateOptions(options))},move:function(element,parent,after,options){return parent=parent&&jqLite(parent),after=after&&jqLite(after),parent=parent||after.parent(),domInsert(element,parent,after),$$animateQueue.push(element,"move",prepareAnimateOptions(options))},leave:function(element,options){return $$animateQueue.push(element,"leave",prepareAnimateOptions(options),function(){element.remove()})},addClass:function(element,className,options){return options=prepareAnimateOptions(options),options.addClass=mergeClasses(options.addclass,className),$$animateQueue.push(element,"addClass",options)},removeClass:function(element,className,options){return options=prepareAnimateOptions(options),options.removeClass=mergeClasses(options.removeClass,className),$$animateQueue.push(element,"removeClass",options)},setClass:function(element,add,remove,options){return options=prepareAnimateOptions(options),options.addClass=mergeClasses(options.addClass,add),options.removeClass=mergeClasses(options.removeClass,remove),$$animateQueue.push(element,"setClass",options)},animate:function(element,from,to,className,options){return options=prepareAnimateOptions(options),options.from=options.from?extend(options.from,from):from,options.to=options.to?extend(options.to,to):to,className=className||"ng-inline-animate",options.tempClasses=mergeClasses(options.tempClasses,className),$$animateQueue.push(element,"animate",options)}}}]}],$compileMinErr=minErr("$compile");$CompileProvider.$inject=["$provide","$$sanitizeUriProvider"];var PREFIX_REGEXP=/^((?:x|data)[\:\-_])/i,$controllerMinErr=minErr("$controller"),CNTRL_REG=/^(\S+)(\s+as\s+(\w+))?$/,APPLICATION_JSON="application/json",CONTENT_TYPE_APPLICATION_JSON={"Content-Type":APPLICATION_JSON+";charset=utf-8"},JSON_START=/^\[|^\{(?!\{)/,JSON_ENDS={"[":/]$/,"{":/}$/},JSON_PROTECTION_PREFIX=/^\)\]\}',?\n/,$interpolateMinErr=angular.$interpolateMinErr=minErr("$interpolate");$interpolateMinErr.throwNoconcat=function(text){throw $interpolateMinErr("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",text)},$interpolateMinErr.interr=function(text,err){return $interpolateMinErr("interr","Can't interpolate: {0}\n{1}",text,err.toString())};var PATH_MATCH=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,DEFAULT_PORTS={http:80,https:443,ftp:21},$locationMinErr=minErr("$location"),locationPrototype={$$html5:!1,$$replace:!1,absUrl:locationGetter("$$absUrl"),url:function(url){if(isUndefined(url))return this.$$url;var match=PATH_MATCH.exec(url);return(match[1]||""===url)&&this.path(decodeURIComponent(match[1])),(match[2]||match[1]||""===url)&&this.search(match[3]||""),this.hash(match[5]||""),this},protocol:locationGetter("$$protocol"),host:locationGetter("$$host"),port:locationGetter("$$port"),path:locationGetterSetter("$$path",function(path){return path=null!==path?path.toString():"","/"==path.charAt(0)?path:"/"+path}),search:function(search,paramValue){switch(arguments.length){case 0:return this.$$search;case 1:if(isString(search)||isNumber(search))search=search.toString(),this.$$search=parseKeyValue(search);else{if(!isObject(search))throw $locationMinErr("isrcharg","The first argument of the `$location#search()` call must be a string or an object.");search=copy(search,{}),forEach(search,function(value,key){null==value&&delete search[key]}),this.$$search=search}break;default:isUndefined(paramValue)||null===paramValue?delete this.$$search[search]:this.$$search[search]=paramValue}return this.$$compose(),this},hash:locationGetterSetter("$$hash",function(hash){return null!==hash?hash.toString():""}),replace:function(){return this.$$replace=!0,this}};forEach([LocationHashbangInHtml5Url,LocationHashbangUrl,LocationHtml5Url],function(Location){Location.prototype=Object.create(locationPrototype),Location.prototype.state=function(state){if(!arguments.length)return this.$$state;if(Location!==LocationHtml5Url||!this.$$html5)throw $locationMinErr("nostate","History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");return this.$$state=isUndefined(state)?null:state,this}});var $parseMinErr=minErr("$parse"),CALL=Function.prototype.call,APPLY=Function.prototype.apply,BIND=Function.prototype.bind,OPERATORS=createMap();forEach("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(operator){OPERATORS[operator]=!0});var ESCAPE={n:"\n",f:"\f",r:"\r",t:"	",v:"","'":"'",'"':'"'},Lexer=function(options){this.options=options};Lexer.prototype={constructor:Lexer,lex:function(text){for(this.text=text,this.index=0,this.tokens=[];this.index<this.text.length;){var ch=this.text.charAt(this.index);if('"'===ch||"'"===ch)this.readString(ch);else if(this.isNumber(ch)||"."===ch&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(ch))this.readIdent();else if(this.is(ch,"(){}[].,;:?"))this.tokens.push({index:this.index,text:ch}),this.index++;else if(this.isWhitespace(ch))this.index++;else{var ch2=ch+this.peek(),ch3=ch2+this.peek(2),op1=OPERATORS[ch],op2=OPERATORS[ch2],op3=OPERATORS[ch3];if(op1||op2||op3){var token=op3?ch3:op2?ch2:ch;this.tokens.push({index:this.index,text:token,operator:!0}),this.index+=token.length}else this.throwError("Unexpected next character ",this.index,this.index+1)}}return this.tokens},is:function(ch,chars){return-1!==chars.indexOf(ch)},peek:function(i){var num=i||1;return this.index+num<this.text.length?this.text.charAt(this.index+num):!1},isNumber:function(ch){return ch>="0"&&"9">=ch&&"string"==typeof ch},isWhitespace:function(ch){return" "===ch||"\r"===ch||"	"===ch||"\n"===ch||""===ch||" "===ch},isIdent:function(ch){return ch>="a"&&"z">=ch||ch>="A"&&"Z">=ch||"_"===ch||"$"===ch},isExpOperator:function(ch){return"-"===ch||"+"===ch||this.isNumber(ch)},throwError:function(error,start,end){end=end||this.index;var colStr=isDefined(start)?"s "+start+"-"+this.index+" ["+this.text.substring(start,end)+"]":" "+end;throw $parseMinErr("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",error,colStr,this.text)},readNumber:function(){for(var number="",start=this.index;this.index<this.text.length;){var ch=lowercase(this.text.charAt(this.index));if("."==ch||this.isNumber(ch))number+=ch;else{var peekCh=this.peek();if("e"==ch&&this.isExpOperator(peekCh))number+=ch;else if(this.isExpOperator(ch)&&peekCh&&this.isNumber(peekCh)&&"e"==number.charAt(number.length-1))number+=ch;else{if(!this.isExpOperator(ch)||peekCh&&this.isNumber(peekCh)||"e"!=number.charAt(number.length-1))break;this.throwError("Invalid exponent")}}this.index++}this.tokens.push({index:start,text:number,constant:!0,value:Number(number)})},readIdent:function(){for(var start=this.index;this.index<this.text.length;){var ch=this.text.charAt(this.index);if(!this.isIdent(ch)&&!this.isNumber(ch))break;this.index++}this.tokens.push({index:start,text:this.text.slice(start,this.index),identifier:!0})},readString:function(quote){var start=this.index;this.index++;for(var string="",rawString=quote,escape=!1;this.index<this.text.length;){var ch=this.text.charAt(this.index);if(rawString+=ch,escape){if("u"===ch){var hex=this.text.substring(this.index+1,this.index+5);hex.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+hex+"]"),this.index+=4,string+=String.fromCharCode(parseInt(hex,16))}else{var rep=ESCAPE[ch];string+=rep||ch}escape=!1}else if("\\"===ch)escape=!0;else{if(ch===quote)return this.index++,this.tokens.push({index:start,text:rawString,constant:!0,value:string}),void 0;string+=ch}this.index++}this.throwError("Unterminated quote",start)}};var AST=function(lexer,options){this.lexer=lexer,this.options=options};AST.Program="Program",AST.ExpressionStatement="ExpressionStatement",AST.AssignmentExpression="AssignmentExpression",AST.ConditionalExpression="ConditionalExpression",AST.LogicalExpression="LogicalExpression",AST.BinaryExpression="BinaryExpression",AST.UnaryExpression="UnaryExpression",AST.CallExpression="CallExpression",AST.MemberExpression="MemberExpression",AST.Identifier="Identifier",AST.Literal="Literal",AST.ArrayExpression="ArrayExpression",AST.Property="Property",AST.ObjectExpression="ObjectExpression",AST.ThisExpression="ThisExpression",AST.NGValueParameter="NGValueParameter",AST.prototype={ast:function(text){this.text=text,this.tokens=this.lexer.lex(text);var value=this.program();return 0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),value},program:function(){for(var body=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&body.push(this.expressionStatement()),!this.expect(";"))return{type:AST.Program,body:body}},expressionStatement:function(){return{type:AST.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var token,left=this.expression();token=this.expect("|");)left=this.filter(left);return left},expression:function(){return this.assignment()},assignment:function(){var result=this.ternary();return this.expect("=")&&(result={type:AST.AssignmentExpression,left:result,right:this.assignment(),operator:"="}),result},ternary:function(){var alternate,consequent,test=this.logicalOR();return this.expect("?")&&(alternate=this.expression(),this.consume(":"))?(consequent=this.expression(),{type:AST.ConditionalExpression,test:test,alternate:alternate,consequent:consequent}):test},logicalOR:function(){for(var left=this.logicalAND();this.expect("||");)left={type:AST.LogicalExpression,operator:"||",left:left,right:this.logicalAND()};return left},logicalAND:function(){for(var left=this.equality();this.expect("&&");)left={type:AST.LogicalExpression,operator:"&&",left:left,right:this.equality()};return left},equality:function(){for(var token,left=this.relational();token=this.expect("==","!=","===","!==");)left={type:AST.BinaryExpression,operator:token.text,left:left,right:this.relational()};return left},relational:function(){for(var token,left=this.additive();token=this.expect("<",">","<=",">=");)left={type:AST.BinaryExpression,operator:token.text,left:left,right:this.additive()};return left},additive:function(){for(var token,left=this.multiplicative();token=this.expect("+","-");)left={type:AST.BinaryExpression,operator:token.text,left:left,right:this.multiplicative()};return left},multiplicative:function(){for(var token,left=this.unary();token=this.expect("*","/","%");)left={type:AST.BinaryExpression,operator:token.text,left:left,right:this.unary()};return left},unary:function(){var token;return(token=this.expect("+","-","!"))?{type:AST.UnaryExpression,operator:token.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var primary;this.expect("(")?(primary=this.filterChain(),this.consume(")")):this.expect("[")?primary=this.arrayDeclaration():this.expect("{")?primary=this.object():this.constants.hasOwnProperty(this.peek().text)?primary=copy(this.constants[this.consume().text]):this.peek().identifier?primary=this.identifier():this.peek().constant?primary=this.constant():this.throwError("not a primary expression",this.peek());for(var next;next=this.expect("(","[",".");)"("===next.text?(primary={type:AST.CallExpression,callee:primary,arguments:this.parseArguments()},this.consume(")")):"["===next.text?(primary={type:AST.MemberExpression,object:primary,property:this.expression(),computed:!0},this.consume("]")):"."===next.text?primary={type:AST.MemberExpression,object:primary,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return primary},filter:function(baseExpression){for(var args=[baseExpression],result={type:AST.CallExpression,callee:this.identifier(),arguments:args,filter:!0};this.expect(":");)args.push(this.expression());return result},parseArguments:function(){var args=[];if(")"!==this.peekToken().text)do args.push(this.expression());while(this.expect(","));return args},identifier:function(){var token=this.consume();return token.identifier||this.throwError("is not a valid identifier",token),{type:AST.Identifier,name:token.text}},constant:function(){return{type:AST.Literal,value:this.consume().value}},arrayDeclaration:function(){var elements=[];if("]"!==this.peekToken().text)do{if(this.peek("]"))break;elements.push(this.expression())}while(this.expect(","));return this.consume("]"),{type:AST.ArrayExpression,elements:elements}},object:function(){var property,properties=[];if("}"!==this.peekToken().text)do{if(this.peek("}"))break;property={type:AST.Property,kind:"init"},this.peek().constant?property.key=this.constant():this.peek().identifier?property.key=this.identifier():this.throwError("invalid key",this.peek()),this.consume(":"),property.value=this.expression(),properties.push(property)}while(this.expect(","));return this.consume("}"),{type:AST.ObjectExpression,properties:properties}},throwError:function(msg,token){throw $parseMinErr("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",token.text,msg,token.index+1,this.text,this.text.substring(token.index))},consume:function(e1){if(0===this.tokens.length)throw $parseMinErr("ueoe","Unexpected end of expression: {0}",this.text);var token=this.expect(e1);return token||this.throwError("is unexpected, expecting ["+e1+"]",this.peek()),token},peekToken:function(){if(0===this.tokens.length)throw $parseMinErr("ueoe","Unexpected end of expression: {0}",this.text);return this.tokens[0]},peek:function(e1,e2,e3,e4){return this.peekAhead(0,e1,e2,e3,e4)},peekAhead:function(i,e1,e2,e3,e4){if(this.tokens.length>i){var token=this.tokens[i],t=token.text;if(t===e1||t===e2||t===e3||t===e4||!e1&&!e2&&!e3&&!e4)return token}return!1},expect:function(e1,e2,e3,e4){var token=this.peek(e1,e2,e3,e4);return token?(this.tokens.shift(),token):!1},constants:{"true":{type:AST.Literal,value:!0},"false":{type:AST.Literal,value:!1},"null":{type:AST.Literal,value:null},undefined:{type:AST.Literal,value:undefined},"this":{type:AST.ThisExpression}}},ASTCompiler.prototype={compile:function(expression,expensiveChecks){var self=this,ast=this.astBuilder.ast(expression);this.state={nextId:0,filters:{},expensiveChecks:expensiveChecks,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]},findConstantAndWatchExpressions(ast,self.$filter);var assignable,extra="";if(this.stage="assign",assignable=assignableAST(ast)){this.state.computing="assign";var result=this.nextId();this.recurse(assignable,result),extra="fn.assign="+this.generateFunction("assign","s,v,l")}var toWatch=getInputs(ast.body);self.stage="inputs",forEach(toWatch,function(watch,key){var fnKey="fn"+key;self.state[fnKey]={vars:[],body:[],own:{}},self.state.computing=fnKey;var intoId=self.nextId();self.recurse(watch,intoId),self.return_(intoId),self.state.inputs.push(fnKey),watch.watchId=key}),this.state.computing="fn",this.stage="main",this.recurse(ast);var fnString='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+extra+this.watchFns()+"return fn;",fn=new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",fnString)(this.$filter,ensureSafeMemberName,ensureSafeObject,ensureSafeFunction,ifDefined,plusFn,expression);return this.state=this.stage=undefined,fn.literal=isLiteral(ast),fn.constant=isConstant(ast),fn},USE:"use",STRICT:"strict",watchFns:function(){var result=[],fns=this.state.inputs,self=this;return forEach(fns,function(name){result.push("var "+name+"="+self.generateFunction(name,"s"))}),fns.length&&result.push("fn.inputs=["+fns.join(",")+"];"),result.join("")},generateFunction:function(name,params){return"function("+params+"){"+this.varsPrefix(name)+this.body(name)+"};"},filterPrefix:function(){var parts=[],self=this;return forEach(this.state.filters,function(id,filter){parts.push(id+"=$filter("+self.escape(filter)+")")}),parts.length?"var "+parts.join(",")+";":""},varsPrefix:function(section){return this.state[section].vars.length?"var "+this.state[section].vars.join(",")+";":""},body:function(section){return this.state[section].body.join("")},recurse:function(ast,intoId,nameId,recursionFn,create,skipWatchIdCheck){var left,right,args,expression,self=this;if(recursionFn=recursionFn||noop,!skipWatchIdCheck&&isDefined(ast.watchId))return intoId=intoId||this.nextId(),this.if_("i",this.lazyAssign(intoId,this.computedMember("i",ast.watchId)),this.lazyRecurse(ast,intoId,nameId,recursionFn,create,!0)),void 0;switch(ast.type){case AST.Program:forEach(ast.body,function(expression,pos){self.recurse(expression.expression,undefined,undefined,function(expr){right=expr}),pos!==ast.body.length-1?self.current().body.push(right,";"):self.return_(right)});break;case AST.Literal:expression=this.escape(ast.value),this.assign(intoId,expression),recursionFn(expression);break;case AST.UnaryExpression:this.recurse(ast.argument,undefined,undefined,function(expr){right=expr}),expression=ast.operator+"("+this.ifDefined(right,0)+")",this.assign(intoId,expression),recursionFn(expression);break;case AST.BinaryExpression:this.recurse(ast.left,undefined,undefined,function(expr){left=expr}),this.recurse(ast.right,undefined,undefined,function(expr){right=expr}),expression="+"===ast.operator?this.plus(left,right):"-"===ast.operator?this.ifDefined(left,0)+ast.operator+this.ifDefined(right,0):"("+left+")"+ast.operator+"("+right+")",this.assign(intoId,expression),recursionFn(expression);break;case AST.LogicalExpression:intoId=intoId||this.nextId(),self.recurse(ast.left,intoId),self.if_("&&"===ast.operator?intoId:self.not(intoId),self.lazyRecurse(ast.right,intoId)),recursionFn(intoId);break;case AST.ConditionalExpression:intoId=intoId||this.nextId(),self.recurse(ast.test,intoId),self.if_(intoId,self.lazyRecurse(ast.alternate,intoId),self.lazyRecurse(ast.consequent,intoId)),recursionFn(intoId);break;case AST.Identifier:intoId=intoId||this.nextId(),nameId&&(nameId.context="inputs"===self.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",ast.name)+"?l:s"),nameId.computed=!1,nameId.name=ast.name),ensureSafeMemberName(ast.name),self.if_("inputs"===self.stage||self.not(self.getHasOwnProperty("l",ast.name)),function(){self.if_("inputs"===self.stage||"s",function(){create&&1!==create&&self.if_(self.not(self.nonComputedMember("s",ast.name)),self.lazyAssign(self.nonComputedMember("s",ast.name),"{}")),self.assign(intoId,self.nonComputedMember("s",ast.name))})},intoId&&self.lazyAssign(intoId,self.nonComputedMember("l",ast.name))),(self.state.expensiveChecks||isPossiblyDangerousMemberName(ast.name))&&self.addEnsureSafeObject(intoId),recursionFn(intoId);break;case AST.MemberExpression:left=nameId&&(nameId.context=this.nextId())||this.nextId(),intoId=intoId||this.nextId(),self.recurse(ast.object,left,undefined,function(){self.if_(self.notNull(left),function(){ast.computed?(right=self.nextId(),self.recurse(ast.property,right),self.addEnsureSafeMemberName(right),create&&1!==create&&self.if_(self.not(self.computedMember(left,right)),self.lazyAssign(self.computedMember(left,right),"{}")),expression=self.ensureSafeObject(self.computedMember(left,right)),self.assign(intoId,expression),nameId&&(nameId.computed=!0,nameId.name=right)):(ensureSafeMemberName(ast.property.name),create&&1!==create&&self.if_(self.not(self.nonComputedMember(left,ast.property.name)),self.lazyAssign(self.nonComputedMember(left,ast.property.name),"{}")),expression=self.nonComputedMember(left,ast.property.name),(self.state.expensiveChecks||isPossiblyDangerousMemberName(ast.property.name))&&(expression=self.ensureSafeObject(expression)),self.assign(intoId,expression),nameId&&(nameId.computed=!1,nameId.name=ast.property.name))},function(){self.assign(intoId,"undefined")}),recursionFn(intoId)},!!create);break;case AST.CallExpression:intoId=intoId||this.nextId(),ast.filter?(right=self.filter(ast.callee.name),args=[],forEach(ast.arguments,function(expr){var argument=self.nextId();self.recurse(expr,argument),args.push(argument)}),expression=right+"("+args.join(",")+")",self.assign(intoId,expression),recursionFn(intoId)):(right=self.nextId(),left={},args=[],self.recurse(ast.callee,right,left,function(){self.if_(self.notNull(right),function(){self.addEnsureSafeFunction(right),forEach(ast.arguments,function(expr){self.recurse(expr,self.nextId(),undefined,function(argument){args.push(self.ensureSafeObject(argument))})}),left.name?(self.state.expensiveChecks||self.addEnsureSafeObject(left.context),expression=self.member(left.context,left.name,left.computed)+"("+args.join(",")+")"):expression=right+"("+args.join(",")+")",expression=self.ensureSafeObject(expression),self.assign(intoId,expression)},function(){self.assign(intoId,"undefined")}),recursionFn(intoId)}));break;case AST.AssignmentExpression:if(right=this.nextId(),left={},!isAssignable(ast.left))throw $parseMinErr("lval","Trying to assing a value to a non l-value");this.recurse(ast.left,undefined,left,function(){self.if_(self.notNull(left.context),function(){self.recurse(ast.right,right),self.addEnsureSafeObject(self.member(left.context,left.name,left.computed)),expression=self.member(left.context,left.name,left.computed)+ast.operator+right,self.assign(intoId,expression),recursionFn(intoId||expression)})},1);break;case AST.ArrayExpression:args=[],forEach(ast.elements,function(expr){self.recurse(expr,self.nextId(),undefined,function(argument){args.push(argument)})}),expression="["+args.join(",")+"]",this.assign(intoId,expression),recursionFn(expression);break;case AST.ObjectExpression:args=[],forEach(ast.properties,function(property){self.recurse(property.value,self.nextId(),undefined,function(expr){args.push(self.escape(property.key.type===AST.Identifier?property.key.name:""+property.key.value)+":"+expr)})}),expression="{"+args.join(",")+"}",this.assign(intoId,expression),recursionFn(expression);break;case AST.ThisExpression:this.assign(intoId,"s"),recursionFn("s");break;case AST.NGValueParameter:this.assign(intoId,"v"),recursionFn("v")}},getHasOwnProperty:function(element,property){var key=element+"."+property,own=this.current().own;return own.hasOwnProperty(key)||(own[key]=this.nextId(!1,element+"&&("+this.escape(property)+" in "+element+")")),own[key]},assign:function(id,value){return id?(this.current().body.push(id,"=",value,";"),id):void 0},filter:function(filterName){return this.state.filters.hasOwnProperty(filterName)||(this.state.filters[filterName]=this.nextId(!0)),this.state.filters[filterName]},ifDefined:function(id,defaultValue){return"ifDefined("+id+","+this.escape(defaultValue)+")"},plus:function(left,right){return"plus("+left+","+right+")"},return_:function(id){this.current().body.push("return ",id,";")},if_:function(test,alternate,consequent){if(test===!0)alternate();else{var body=this.current().body;body.push("if(",test,"){"),alternate(),body.push("}"),consequent&&(body.push("else{"),consequent(),body.push("}"))}},not:function(expression){return"!("+expression+")"},notNull:function(expression){return expression+"!=null"},nonComputedMember:function(left,right){return left+"."+right},computedMember:function(left,right){return left+"["+right+"]"},member:function(left,right,computed){return computed?this.computedMember(left,right):this.nonComputedMember(left,right)},addEnsureSafeObject:function(item){this.current().body.push(this.ensureSafeObject(item),";")},addEnsureSafeMemberName:function(item){this.current().body.push(this.ensureSafeMemberName(item),";")},addEnsureSafeFunction:function(item){this.current().body.push(this.ensureSafeFunction(item),";")},ensureSafeObject:function(item){return"ensureSafeObject("+item+",text)"},ensureSafeMemberName:function(item){return"ensureSafeMemberName("+item+",text)"},ensureSafeFunction:function(item){return"ensureSafeFunction("+item+",text)"},lazyRecurse:function(ast,intoId,nameId,recursionFn,create,skipWatchIdCheck){var self=this;return function(){self.recurse(ast,intoId,nameId,recursionFn,create,skipWatchIdCheck)}},lazyAssign:function(id,value){var self=this;return function(){self.assign(id,value)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(c){return"\\u"+("0000"+c.charCodeAt(0).toString(16)).slice(-4)},escape:function(value){if(isString(value))return"'"+value.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(isNumber(value))return value.toString();if(value===!0)return"true";if(value===!1)return"false";if(null===value)return"null";if("undefined"==typeof value)return"undefined";throw $parseMinErr("esc","IMPOSSIBLE")},nextId:function(skip,init){var id="v"+this.state.nextId++;return skip||this.current().vars.push(id+(init?"="+init:"")),id},current:function(){return this.state[this.state.computing]}},ASTInterpreter.prototype={compile:function(expression,expensiveChecks){var self=this,ast=this.astBuilder.ast(expression);this.expression=expression,this.expensiveChecks=expensiveChecks,findConstantAndWatchExpressions(ast,self.$filter);var assignable,assign;(assignable=assignableAST(ast))&&(assign=this.recurse(assignable));var inputs,toWatch=getInputs(ast.body);toWatch&&(inputs=[],forEach(toWatch,function(watch,key){var input=self.recurse(watch);watch.input=input,inputs.push(input),watch.watchId=key}));var expressions=[];forEach(ast.body,function(expression){expressions.push(self.recurse(expression.expression))});var fn=0===ast.body.length?function(){}:1===ast.body.length?expressions[0]:function(scope,locals){var lastValue;return forEach(expressions,function(exp){lastValue=exp(scope,locals)}),lastValue};return assign&&(fn.assign=function(scope,value,locals){return assign(scope,locals,value)}),inputs&&(fn.inputs=inputs),fn.literal=isLiteral(ast),fn.constant=isConstant(ast),fn},recurse:function(ast,context,create){var left,right,args,self=this;if(ast.input)return this.inputs(ast.input,ast.watchId);switch(ast.type){case AST.Literal:return this.value(ast.value,context);case AST.UnaryExpression:return right=this.recurse(ast.argument),this["unary"+ast.operator](right,context);case AST.BinaryExpression:return left=this.recurse(ast.left),right=this.recurse(ast.right),this["binary"+ast.operator](left,right,context);case AST.LogicalExpression:return left=this.recurse(ast.left),right=this.recurse(ast.right),this["binary"+ast.operator](left,right,context);case AST.ConditionalExpression:return this["ternary?:"](this.recurse(ast.test),this.recurse(ast.alternate),this.recurse(ast.consequent),context);case AST.Identifier:return ensureSafeMemberName(ast.name,self.expression),self.identifier(ast.name,self.expensiveChecks||isPossiblyDangerousMemberName(ast.name),context,create,self.expression);case AST.MemberExpression:return left=this.recurse(ast.object,!1,!!create),ast.computed||(ensureSafeMemberName(ast.property.name,self.expression),right=ast.property.name),ast.computed&&(right=this.recurse(ast.property)),ast.computed?this.computedMember(left,right,context,create,self.expression):this.nonComputedMember(left,right,self.expensiveChecks,context,create,self.expression);case AST.CallExpression:return args=[],forEach(ast.arguments,function(expr){args.push(self.recurse(expr))}),ast.filter&&(right=this.$filter(ast.callee.name)),ast.filter||(right=this.recurse(ast.callee,!0)),ast.filter?function(scope,locals,assign,inputs){for(var values=[],i=0;i<args.length;++i)values.push(args[i](scope,locals,assign,inputs));var value=right.apply(undefined,values,inputs);return context?{context:undefined,name:undefined,value:value}:value}:function(scope,locals,assign,inputs){var value,rhs=right(scope,locals,assign,inputs);if(null!=rhs.value){ensureSafeObject(rhs.context,self.expression),ensureSafeFunction(rhs.value,self.expression);for(var values=[],i=0;i<args.length;++i)values.push(ensureSafeObject(args[i](scope,locals,assign,inputs),self.expression));value=ensureSafeObject(rhs.value.apply(rhs.context,values),self.expression)}return context?{value:value}:value};case AST.AssignmentExpression:return left=this.recurse(ast.left,!0,1),right=this.recurse(ast.right),function(scope,locals,assign,inputs){var lhs=left(scope,locals,assign,inputs),rhs=right(scope,locals,assign,inputs);return ensureSafeObject(lhs.value,self.expression),lhs.context[lhs.name]=rhs,context?{value:rhs}:rhs};case AST.ArrayExpression:return args=[],forEach(ast.elements,function(expr){args.push(self.recurse(expr))}),function(scope,locals,assign,inputs){for(var value=[],i=0;i<args.length;++i)value.push(args[i](scope,locals,assign,inputs));return context?{value:value}:value};case AST.ObjectExpression:return args=[],forEach(ast.properties,function(property){args.push({key:property.key.type===AST.Identifier?property.key.name:""+property.key.value,value:self.recurse(property.value)})}),function(scope,locals,assign,inputs){for(var value={},i=0;i<args.length;++i)value[args[i].key]=args[i].value(scope,locals,assign,inputs);return context?{value:value}:value};case AST.ThisExpression:return function(scope){return context?{value:scope}:scope};case AST.NGValueParameter:return function(scope,locals,assign){return context?{value:assign}:assign}}},"unary+":function(argument,context){return function(scope,locals,assign,inputs){var arg=argument(scope,locals,assign,inputs);return arg=isDefined(arg)?+arg:0,context?{value:arg}:arg}},"unary-":function(argument,context){return function(scope,locals,assign,inputs){var arg=argument(scope,locals,assign,inputs);return arg=isDefined(arg)?-arg:0,context?{value:arg}:arg}},"unary!":function(argument,context){return function(scope,locals,assign,inputs){var arg=!argument(scope,locals,assign,inputs);return context?{value:arg}:arg}},"binary+":function(left,right,context){return function(scope,locals,assign,inputs){var lhs=left(scope,locals,assign,inputs),rhs=right(scope,locals,assign,inputs),arg=plusFn(lhs,rhs);return context?{value:arg}:arg}},"binary-":function(left,right,context){return function(scope,locals,assign,inputs){var lhs=left(scope,locals,assign,inputs),rhs=right(scope,locals,assign,inputs),arg=(isDefined(lhs)?lhs:0)-(isDefined(rhs)?rhs:0);return context?{value:arg}:arg}},"binary*":function(left,right,context){return function(scope,locals,assign,inputs){var arg=left(scope,locals,assign,inputs)*right(scope,locals,assign,inputs);return context?{value:arg}:arg}},"binary/":function(left,right,context){return function(scope,locals,assign,inputs){var arg=left(scope,locals,assign,inputs)/right(scope,locals,assign,inputs);return context?{value:arg}:arg}},"binary%":function(left,right,context){return function(scope,locals,assign,inputs){var arg=left(scope,locals,assign,inputs)%right(scope,locals,assign,inputs);return context?{value:arg}:arg}},"binary===":function(left,right,context){return function(scope,locals,assign,inputs){var arg=left(scope,locals,assign,inputs)===right(scope,locals,assign,inputs);return context?{value:arg}:arg}},"binary!==":function(left,right,context){return function(scope,locals,assign,inputs){var arg=left(scope,locals,assign,inputs)!==right(scope,locals,assign,inputs);return context?{value:arg}:arg}},"binary==":function(left,right,context){return function(scope,locals,assign,inputs){var arg=left(scope,locals,assign,inputs)==right(scope,locals,assign,inputs);return context?{value:arg}:arg}},"binary!=":function(left,right,context){return function(scope,locals,assign,inputs){var arg=left(scope,locals,assign,inputs)!=right(scope,locals,assign,inputs);return context?{value:arg}:arg}},"binary<":function(left,right,context){return function(scope,locals,assign,inputs){var arg=left(scope,locals,assign,inputs)<right(scope,locals,assign,inputs);return context?{value:arg}:arg}},"binary>":function(left,right,context){return function(scope,locals,assign,inputs){var arg=left(scope,locals,assign,inputs)>right(scope,locals,assign,inputs);return context?{value:arg}:arg}},"binary<=":function(left,right,context){return function(scope,locals,assign,inputs){var arg=left(scope,locals,assign,inputs)<=right(scope,locals,assign,inputs);
return context?{value:arg}:arg}},"binary>=":function(left,right,context){return function(scope,locals,assign,inputs){var arg=left(scope,locals,assign,inputs)>=right(scope,locals,assign,inputs);return context?{value:arg}:arg}},"binary&&":function(left,right,context){return function(scope,locals,assign,inputs){var arg=left(scope,locals,assign,inputs)&&right(scope,locals,assign,inputs);return context?{value:arg}:arg}},"binary||":function(left,right,context){return function(scope,locals,assign,inputs){var arg=left(scope,locals,assign,inputs)||right(scope,locals,assign,inputs);return context?{value:arg}:arg}},"ternary?:":function(test,alternate,consequent,context){return function(scope,locals,assign,inputs){var arg=test(scope,locals,assign,inputs)?alternate(scope,locals,assign,inputs):consequent(scope,locals,assign,inputs);return context?{value:arg}:arg}},value:function(value,context){return function(){return context?{context:undefined,name:undefined,value:value}:value}},identifier:function(name,expensiveChecks,context,create,expression){return function(scope,locals){var base=locals&&name in locals?locals:scope;create&&1!==create&&base&&!base[name]&&(base[name]={});var value=base?base[name]:undefined;return expensiveChecks&&ensureSafeObject(value,expression),context?{context:base,name:name,value:value}:value}},computedMember:function(left,right,context,create,expression){return function(scope,locals,assign,inputs){var rhs,value,lhs=left(scope,locals,assign,inputs);return null!=lhs&&(rhs=right(scope,locals,assign,inputs),ensureSafeMemberName(rhs,expression),create&&1!==create&&lhs&&!lhs[rhs]&&(lhs[rhs]={}),value=lhs[rhs],ensureSafeObject(value,expression)),context?{context:lhs,name:rhs,value:value}:value}},nonComputedMember:function(left,right,expensiveChecks,context,create,expression){return function(scope,locals,assign,inputs){var lhs=left(scope,locals,assign,inputs);create&&1!==create&&lhs&&!lhs[right]&&(lhs[right]={});var value=null!=lhs?lhs[right]:undefined;return(expensiveChecks||isPossiblyDangerousMemberName(right))&&ensureSafeObject(value,expression),context?{context:lhs,name:right,value:value}:value}},inputs:function(input,watchId){return function(scope,value,locals,inputs){return inputs?inputs[watchId]:input(scope,value,locals)}}};var Parser=function(lexer,$filter,options){this.lexer=lexer,this.$filter=$filter,this.options=options,this.ast=new AST(this.lexer),this.astCompiler=options.csp?new ASTInterpreter(this.ast,$filter):new ASTCompiler(this.ast,$filter)};Parser.prototype={constructor:Parser,parse:function(text){return this.astCompiler.compile(text,this.options.expensiveChecks)}};var objectValueOf=(createMap(),createMap(),Object.prototype.valueOf),$sceMinErr=minErr("$sce"),SCE_CONTEXTS={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},$compileMinErr=minErr("$compile"),urlParsingNode=document.createElement("a"),originUrl=urlResolve(window.location.href);$$CookieReader.$inject=["$document"],$FilterProvider.$inject=["$provide"],currencyFilter.$inject=["$locale"],numberFilter.$inject=["$locale"];var DECIMAL_SEP=".",DATE_FORMATS={yyyy:dateGetter("FullYear",4),yy:dateGetter("FullYear",2,0,!0),y:dateGetter("FullYear",1),MMMM:dateStrGetter("Month"),MMM:dateStrGetter("Month",!0),MM:dateGetter("Month",2,1),M:dateGetter("Month",1,1),dd:dateGetter("Date",2),d:dateGetter("Date",1),HH:dateGetter("Hours",2),H:dateGetter("Hours",1),hh:dateGetter("Hours",2,-12),h:dateGetter("Hours",1,-12),mm:dateGetter("Minutes",2),m:dateGetter("Minutes",1),ss:dateGetter("Seconds",2),s:dateGetter("Seconds",1),sss:dateGetter("Milliseconds",3),EEEE:dateStrGetter("Day"),EEE:dateStrGetter("Day",!0),a:ampmGetter,Z:timeZoneGetter,ww:weekGetter(2),w:weekGetter(1),G:eraGetter,GG:eraGetter,GGG:eraGetter,GGGG:longEraGetter},DATE_FORMATS_SPLIT=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,NUMBER_STRING=/^\-?\d+$/;dateFilter.$inject=["$locale"];var lowercaseFilter=valueFn(lowercase),uppercaseFilter=valueFn(uppercase);orderByFilter.$inject=["$parse"];var htmlAnchorDirective=valueFn({restrict:"E",compile:function(element,attr){return attr.href||attr.xlinkHref?void 0:function(scope,element){if("a"===element[0].nodeName.toLowerCase()){var href="[object SVGAnimatedString]"===toString.call(element.prop("href"))?"xlink:href":"href";element.on("click",function(event){element.attr(href)||event.preventDefault()})}}}}),ngAttributeAliasDirectives={};forEach(BOOLEAN_ATTR,function(propName,attrName){function defaultLinkFn(scope,element,attr){scope.$watch(attr[normalized],function(value){attr.$set(attrName,!!value)})}if("multiple"!=propName){var normalized=directiveNormalize("ng-"+attrName),linkFn=defaultLinkFn;"checked"===propName&&(linkFn=function(scope,element,attr){attr.ngModel!==attr[normalized]&&defaultLinkFn(scope,element,attr)}),ngAttributeAliasDirectives[normalized]=function(){return{restrict:"A",priority:100,link:linkFn}}}}),forEach(ALIASED_ATTR,function(htmlAttr,ngAttr){ngAttributeAliasDirectives[ngAttr]=function(){return{priority:100,link:function(scope,element,attr){if("ngPattern"===ngAttr&&"/"==attr.ngPattern.charAt(0)){var match=attr.ngPattern.match(REGEX_STRING_REGEXP);if(match)return attr.$set("ngPattern",new RegExp(match[1],match[2])),void 0}scope.$watch(attr[ngAttr],function(value){attr.$set(ngAttr,value)})}}}}),forEach(["src","srcset","href"],function(attrName){var normalized=directiveNormalize("ng-"+attrName);ngAttributeAliasDirectives[normalized]=function(){return{priority:99,link:function(scope,element,attr){var propName=attrName,name=attrName;"href"===attrName&&"[object SVGAnimatedString]"===toString.call(element.prop("href"))&&(name="xlinkHref",attr.$attr[name]="xlink:href",propName=null),attr.$observe(normalized,function(value){return value?(attr.$set(name,value),msie&&propName&&element.prop(propName,attr[name]),void 0):("href"===attrName&&attr.$set(name,null),void 0)})}}}});var nullFormCtrl={$addControl:noop,$$renameControl:nullFormRenameControl,$removeControl:noop,$setValidity:noop,$setDirty:noop,$setPristine:noop,$setSubmitted:noop},SUBMITTED_CLASS="ng-submitted";FormController.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var formDirectiveFactory=function(isNgForm){return["$timeout",function($timeout){var formDirective={name:"form",restrict:isNgForm?"EAC":"E",controller:FormController,compile:function(formElement,attr){formElement.addClass(PRISTINE_CLASS).addClass(VALID_CLASS);var nameAttr=attr.name?"name":isNgForm&&attr.ngForm?"ngForm":!1;return{pre:function(scope,formElement,attr,controller){if(!("action"in attr)){var handleFormSubmission=function(event){scope.$apply(function(){controller.$commitViewValue(),controller.$setSubmitted()}),event.preventDefault()};addEventListenerFn(formElement[0],"submit",handleFormSubmission),formElement.on("$destroy",function(){$timeout(function(){removeEventListenerFn(formElement[0],"submit",handleFormSubmission)},0,!1)})}var parentFormCtrl=controller.$$parentForm;nameAttr&&(setter(scope,controller.$name,controller,controller.$name),attr.$observe(nameAttr,function(newValue){controller.$name!==newValue&&(setter(scope,controller.$name,undefined,controller.$name),parentFormCtrl.$$renameControl(controller,newValue),setter(scope,controller.$name,controller,controller.$name))})),formElement.on("$destroy",function(){parentFormCtrl.$removeControl(controller),nameAttr&&setter(scope,attr[nameAttr],undefined,controller.$name),extend(controller,nullFormCtrl)})}}}};return formDirective}]},formDirective=formDirectiveFactory(),ngFormDirective=formDirectiveFactory(!0),ISO_DATE_REGEXP=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,URL_REGEXP=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,EMAIL_REGEXP=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,NUMBER_REGEXP=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,DATE_REGEXP=/^(\d{4})-(\d{2})-(\d{2})$/,DATETIMELOCAL_REGEXP=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,WEEK_REGEXP=/^(\d{4})-W(\d\d)$/,MONTH_REGEXP=/^(\d{4})-(\d\d)$/,TIME_REGEXP=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,inputType={text:textInputType,date:createDateInputType("date",DATE_REGEXP,createDateParser(DATE_REGEXP,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":createDateInputType("datetimelocal",DATETIMELOCAL_REGEXP,createDateParser(DATETIMELOCAL_REGEXP,["yyyy","MM","dd","HH","mm","ss","sss"]),"yyyy-MM-ddTHH:mm:ss.sss"),time:createDateInputType("time",TIME_REGEXP,createDateParser(TIME_REGEXP,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:createDateInputType("week",WEEK_REGEXP,weekParser,"yyyy-Www"),month:createDateInputType("month",MONTH_REGEXP,createDateParser(MONTH_REGEXP,["yyyy","MM"]),"yyyy-MM"),number:numberInputType,url:urlInputType,email:emailInputType,radio:radioInputType,checkbox:checkboxInputType,hidden:noop,button:noop,submit:noop,reset:noop,file:noop},inputDirective=["$browser","$sniffer","$filter","$parse",function($browser,$sniffer,$filter,$parse){return{restrict:"E",require:["?ngModel"],link:{pre:function(scope,element,attr,ctrls){ctrls[0]&&(inputType[lowercase(attr.type)]||inputType.text)(scope,element,attr,ctrls[0],$sniffer,$browser,$filter,$parse)}}}}],CONSTANT_VALUE_REGEXP=/^(true|false|\d+)$/,ngValueDirective=function(){return{restrict:"A",priority:100,compile:function(tpl,tplAttr){return CONSTANT_VALUE_REGEXP.test(tplAttr.ngValue)?function(scope,elm,attr){attr.$set("value",scope.$eval(attr.ngValue))}:function(scope,elm,attr){scope.$watch(attr.ngValue,function(value){attr.$set("value",value)})}}}},ngBindDirective=["$compile",function($compile){return{restrict:"AC",compile:function(templateElement){return $compile.$$addBindingClass(templateElement),function(scope,element,attr){$compile.$$addBindingInfo(element,attr.ngBind),element=element[0],scope.$watch(attr.ngBind,function(value){element.textContent=value===undefined?"":value})}}}}],ngBindTemplateDirective=["$interpolate","$compile",function($interpolate,$compile){return{compile:function(templateElement){return $compile.$$addBindingClass(templateElement),function(scope,element,attr){var interpolateFn=$interpolate(element.attr(attr.$attr.ngBindTemplate));$compile.$$addBindingInfo(element,interpolateFn.expressions),element=element[0],attr.$observe("ngBindTemplate",function(value){element.textContent=value===undefined?"":value})}}}}],ngBindHtmlDirective=["$sce","$parse","$compile",function($sce,$parse,$compile){return{restrict:"A",compile:function(tElement,tAttrs){var ngBindHtmlGetter=$parse(tAttrs.ngBindHtml),ngBindHtmlWatch=$parse(tAttrs.ngBindHtml,function(value){return(value||"").toString()});return $compile.$$addBindingClass(tElement),function(scope,element,attr){$compile.$$addBindingInfo(element,attr.ngBindHtml),scope.$watch(ngBindHtmlWatch,function(){element.html($sce.getTrustedHtml(ngBindHtmlGetter(scope))||"")})}}}}],ngChangeDirective=valueFn({restrict:"A",require:"ngModel",link:function(scope,element,attr,ctrl){ctrl.$viewChangeListeners.push(function(){scope.$eval(attr.ngChange)})}}),ngClassDirective=classDirective("",!0),ngClassOddDirective=classDirective("Odd",0),ngClassEvenDirective=classDirective("Even",1),ngCloakDirective=ngDirective({compile:function(element,attr){attr.$set("ngCloak",undefined),element.removeClass("ng-cloak")}}),ngControllerDirective=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],ngEventDirectives={},forceAsyncEvents={blur:!0,focus:!0};forEach("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(eventName){var directiveName=directiveNormalize("ng-"+eventName);ngEventDirectives[directiveName]=["$parse","$rootScope",function($parse,$rootScope){return{restrict:"A",compile:function($element,attr){var fn=$parse(attr[directiveName],null,!0);return function(scope,element){element.on(eventName,function(event){var callback=function(){fn(scope,{$event:event})};forceAsyncEvents[eventName]&&$rootScope.$$phase?scope.$evalAsync(callback):scope.$apply(callback)})}}}}]});var ngIfDirective=["$animate",function($animate){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function($scope,$element,$attr,ctrl,$transclude){var block,childScope,previousElements;$scope.$watch($attr.ngIf,function(value){value?childScope||$transclude(function(clone,newScope){childScope=newScope,clone[clone.length++]=document.createComment(" end ngIf: "+$attr.ngIf+" "),block={clone:clone},$animate.enter(clone,$element.parent(),$element)}):(previousElements&&(previousElements.remove(),previousElements=null),childScope&&(childScope.$destroy(),childScope=null),block&&(previousElements=getBlockNodes(block.clone),$animate.leave(previousElements).then(function(){previousElements=null}),block=null))})}}}],ngIncludeDirective=["$templateRequest","$anchorScroll","$animate",function($templateRequest,$anchorScroll,$animate){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:angular.noop,compile:function(element,attr){var srcExp=attr.ngInclude||attr.src,onloadExp=attr.onload||"",autoScrollExp=attr.autoscroll;return function(scope,$element,$attr,ctrl,$transclude){var currentScope,previousElement,currentElement,changeCounter=0,cleanupLastIncludeContent=function(){previousElement&&(previousElement.remove(),previousElement=null),currentScope&&(currentScope.$destroy(),currentScope=null),currentElement&&($animate.leave(currentElement).then(function(){previousElement=null}),previousElement=currentElement,currentElement=null)};scope.$watch(srcExp,function(src){var afterAnimation=function(){!isDefined(autoScrollExp)||autoScrollExp&&!scope.$eval(autoScrollExp)||$anchorScroll()},thisChangeId=++changeCounter;src?($templateRequest(src,!0).then(function(response){if(thisChangeId===changeCounter){var newScope=scope.$new();ctrl.template=response;var clone=$transclude(newScope,function(clone){cleanupLastIncludeContent(),$animate.enter(clone,null,$element).then(afterAnimation)});currentScope=newScope,currentElement=clone,currentScope.$emit("$includeContentLoaded",src),scope.$eval(onloadExp)}},function(){thisChangeId===changeCounter&&(cleanupLastIncludeContent(),scope.$emit("$includeContentError",src))}),scope.$emit("$includeContentRequested",src)):(cleanupLastIncludeContent(),ctrl.template=null)})}}}}],ngIncludeFillContentDirective=["$compile",function($compile){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(scope,$element,$attr,ctrl){return/SVG/.test($element[0].toString())?($element.empty(),$compile(jqLiteBuildFragment(ctrl.template,document).childNodes)(scope,function(clone){$element.append(clone)},{futureParentElement:$element}),void 0):($element.html(ctrl.template),$compile($element.contents())(scope),void 0)}}}],ngInitDirective=ngDirective({priority:450,compile:function(){return{pre:function(scope,element,attrs){scope.$eval(attrs.ngInit)}}}}),ngListDirective=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(scope,element,attr,ctrl){var ngList=element.attr(attr.$attr.ngList)||", ",trimValues="false"!==attr.ngTrim,separator=trimValues?trim(ngList):ngList,parse=function(viewValue){if(!isUndefined(viewValue)){var list=[];return viewValue&&forEach(viewValue.split(separator),function(value){value&&list.push(trimValues?trim(value):value)}),list}};ctrl.$parsers.push(parse),ctrl.$formatters.push(function(value){return isArray(value)?value.join(ngList):undefined}),ctrl.$isEmpty=function(value){return!value||!value.length}}}},VALID_CLASS="ng-valid",INVALID_CLASS="ng-invalid",PRISTINE_CLASS="ng-pristine",DIRTY_CLASS="ng-dirty",UNTOUCHED_CLASS="ng-untouched",TOUCHED_CLASS="ng-touched",PENDING_CLASS="ng-pending",$ngModelMinErr=new minErr("ngModel"),NgModelController=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function($scope,$exceptionHandler,$attr,$element,$parse,$animate,$timeout,$rootScope,$q,$interpolate){this.$viewValue=Number.NaN,this.$modelValue=Number.NaN,this.$$rawModelValue=undefined,this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},this.$pending=undefined,this.$name=$interpolate($attr.name||"",!1)($scope);var parserValid,parsedNgModel=$parse($attr.ngModel),parsedNgModelAssign=parsedNgModel.assign,ngModelGet=parsedNgModel,ngModelSet=parsedNgModelAssign,pendingDebounce=null,ctrl=this;this.$$setOptions=function(options){if(ctrl.$options=options,options&&options.getterSetter){var invokeModelGetter=$parse($attr.ngModel+"()"),invokeModelSetter=$parse($attr.ngModel+"($$$p)");ngModelGet=function($scope){var modelValue=parsedNgModel($scope);return isFunction(modelValue)&&(modelValue=invokeModelGetter($scope)),modelValue},ngModelSet=function($scope){isFunction(parsedNgModel($scope))?invokeModelSetter($scope,{$$$p:ctrl.$modelValue}):parsedNgModelAssign($scope,ctrl.$modelValue)}}else if(!parsedNgModel.assign)throw $ngModelMinErr("nonassign","Expression '{0}' is non-assignable. Element: {1}",$attr.ngModel,startingTag($element))},this.$render=noop,this.$isEmpty=function(value){return isUndefined(value)||""===value||null===value||value!==value};var parentForm=$element.inheritedData("$formController")||nullFormCtrl,currentValidationRunId=0;addSetValidityMethod({ctrl:this,$element:$element,set:function(object,property){object[property]=!0},unset:function(object,property){delete object[property]},parentForm:parentForm,$animate:$animate}),this.$setPristine=function(){ctrl.$dirty=!1,ctrl.$pristine=!0,$animate.removeClass($element,DIRTY_CLASS),$animate.addClass($element,PRISTINE_CLASS)},this.$setDirty=function(){ctrl.$dirty=!0,ctrl.$pristine=!1,$animate.removeClass($element,PRISTINE_CLASS),$animate.addClass($element,DIRTY_CLASS),parentForm.$setDirty()},this.$setUntouched=function(){ctrl.$touched=!1,ctrl.$untouched=!0,$animate.setClass($element,UNTOUCHED_CLASS,TOUCHED_CLASS)},this.$setTouched=function(){ctrl.$touched=!0,ctrl.$untouched=!1,$animate.setClass($element,TOUCHED_CLASS,UNTOUCHED_CLASS)},this.$rollbackViewValue=function(){$timeout.cancel(pendingDebounce),ctrl.$viewValue=ctrl.$$lastCommittedViewValue,ctrl.$render()},this.$validate=function(){if(!isNumber(ctrl.$modelValue)||!isNaN(ctrl.$modelValue)){var viewValue=ctrl.$$lastCommittedViewValue,modelValue=ctrl.$$rawModelValue,prevValid=ctrl.$valid,prevModelValue=ctrl.$modelValue,allowInvalid=ctrl.$options&&ctrl.$options.allowInvalid;ctrl.$$runValidators(modelValue,viewValue,function(allValid){allowInvalid||prevValid===allValid||(ctrl.$modelValue=allValid?modelValue:undefined,ctrl.$modelValue!==prevModelValue&&ctrl.$$writeModelToScope())})}},this.$$runValidators=function(modelValue,viewValue,doneCallback){function processParseErrors(){var errorKey=ctrl.$$parserName||"parse";return parserValid!==undefined?(parserValid||(forEach(ctrl.$validators,function(v,name){setValidity(name,null)}),forEach(ctrl.$asyncValidators,function(v,name){setValidity(name,null)})),setValidity(errorKey,parserValid),parserValid):(setValidity(errorKey,null),!0)}function processSyncValidators(){var syncValidatorsValid=!0;return forEach(ctrl.$validators,function(validator,name){var result=validator(modelValue,viewValue);syncValidatorsValid=syncValidatorsValid&&result,setValidity(name,result)}),syncValidatorsValid?!0:(forEach(ctrl.$asyncValidators,function(v,name){setValidity(name,null)}),!1)}function processAsyncValidators(){var validatorPromises=[],allValid=!0;forEach(ctrl.$asyncValidators,function(validator,name){var promise=validator(modelValue,viewValue);if(!isPromiseLike(promise))throw $ngModelMinErr("$asyncValidators","Expected asynchronous validator to return a promise but got '{0}' instead.",promise);setValidity(name,undefined),validatorPromises.push(promise.then(function(){setValidity(name,!0)},function(){allValid=!1,setValidity(name,!1)}))}),validatorPromises.length?$q.all(validatorPromises).then(function(){validationDone(allValid)},noop):validationDone(!0)}function setValidity(name,isValid){localValidationRunId===currentValidationRunId&&ctrl.$setValidity(name,isValid)}function validationDone(allValid){localValidationRunId===currentValidationRunId&&doneCallback(allValid)}currentValidationRunId++;var localValidationRunId=currentValidationRunId;return processParseErrors()?processSyncValidators()?(processAsyncValidators(),void 0):(validationDone(!1),void 0):(validationDone(!1),void 0)},this.$commitViewValue=function(){var viewValue=ctrl.$viewValue;$timeout.cancel(pendingDebounce),(ctrl.$$lastCommittedViewValue!==viewValue||""===viewValue&&ctrl.$$hasNativeValidators)&&(ctrl.$$lastCommittedViewValue=viewValue,ctrl.$pristine&&this.$setDirty(),this.$$parseAndValidate())},this.$$parseAndValidate=function(){function writeToModelIfNeeded(){ctrl.$modelValue!==prevModelValue&&ctrl.$$writeModelToScope()}var viewValue=ctrl.$$lastCommittedViewValue,modelValue=viewValue;if(parserValid=isUndefined(modelValue)?undefined:!0)for(var i=0;i<ctrl.$parsers.length;i++)if(modelValue=ctrl.$parsers[i](modelValue),isUndefined(modelValue)){parserValid=!1;break}isNumber(ctrl.$modelValue)&&isNaN(ctrl.$modelValue)&&(ctrl.$modelValue=ngModelGet($scope));var prevModelValue=ctrl.$modelValue,allowInvalid=ctrl.$options&&ctrl.$options.allowInvalid;ctrl.$$rawModelValue=modelValue,allowInvalid&&(ctrl.$modelValue=modelValue,writeToModelIfNeeded()),ctrl.$$runValidators(modelValue,ctrl.$$lastCommittedViewValue,function(allValid){allowInvalid||(ctrl.$modelValue=allValid?modelValue:undefined,writeToModelIfNeeded())})},this.$$writeModelToScope=function(){ngModelSet($scope,ctrl.$modelValue),forEach(ctrl.$viewChangeListeners,function(listener){try{listener()}catch(e){$exceptionHandler(e)}})},this.$setViewValue=function(value,trigger){ctrl.$viewValue=value,(!ctrl.$options||ctrl.$options.updateOnDefault)&&ctrl.$$debounceViewValueCommit(trigger)},this.$$debounceViewValueCommit=function(trigger){var debounce,debounceDelay=0,options=ctrl.$options;options&&isDefined(options.debounce)&&(debounce=options.debounce,isNumber(debounce)?debounceDelay=debounce:isNumber(debounce[trigger])?debounceDelay=debounce[trigger]:isNumber(debounce["default"])&&(debounceDelay=debounce["default"])),$timeout.cancel(pendingDebounce),debounceDelay?pendingDebounce=$timeout(function(){ctrl.$commitViewValue()},debounceDelay):$rootScope.$$phase?ctrl.$commitViewValue():$scope.$apply(function(){ctrl.$commitViewValue()})},$scope.$watch(function(){var modelValue=ngModelGet($scope);if(modelValue!==ctrl.$modelValue&&(ctrl.$modelValue===ctrl.$modelValue||modelValue===modelValue)){ctrl.$modelValue=ctrl.$$rawModelValue=modelValue,parserValid=undefined;for(var formatters=ctrl.$formatters,idx=formatters.length,viewValue=modelValue;idx--;)viewValue=formatters[idx](viewValue);ctrl.$viewValue!==viewValue&&(ctrl.$viewValue=ctrl.$$lastCommittedViewValue=viewValue,ctrl.$render(),ctrl.$$runValidators(modelValue,viewValue,noop))}return modelValue})}],ngModelDirective=["$rootScope",function($rootScope){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:NgModelController,priority:1,compile:function(element){return element.addClass(PRISTINE_CLASS).addClass(UNTOUCHED_CLASS).addClass(VALID_CLASS),{pre:function(scope,element,attr,ctrls){var modelCtrl=ctrls[0],formCtrl=ctrls[1]||nullFormCtrl;modelCtrl.$$setOptions(ctrls[2]&&ctrls[2].$options),formCtrl.$addControl(modelCtrl),attr.$observe("name",function(newValue){modelCtrl.$name!==newValue&&formCtrl.$$renameControl(modelCtrl,newValue)}),scope.$on("$destroy",function(){formCtrl.$removeControl(modelCtrl)})},post:function(scope,element,attr,ctrls){var modelCtrl=ctrls[0];modelCtrl.$options&&modelCtrl.$options.updateOn&&element.on(modelCtrl.$options.updateOn,function(ev){modelCtrl.$$debounceViewValueCommit(ev&&ev.type)}),element.on("blur",function(){modelCtrl.$touched||($rootScope.$$phase?scope.$evalAsync(modelCtrl.$setTouched):scope.$apply(modelCtrl.$setTouched))})}}}}}],DEFAULT_REGEXP=/(\s+|^)default(\s+|$)/,ngModelOptionsDirective=function(){return{restrict:"A",controller:["$scope","$attrs",function($scope,$attrs){var that=this;this.$options=copy($scope.$eval($attrs.ngModelOptions)),this.$options.updateOn!==undefined?(this.$options.updateOnDefault=!1,this.$options.updateOn=trim(this.$options.updateOn.replace(DEFAULT_REGEXP,function(){return that.$options.updateOnDefault=!0," "}))):this.$options.updateOnDefault=!0}]}},ngNonBindableDirective=ngDirective({terminal:!0,priority:1e3}),ngOptionsMinErr=minErr("ngOptions"),NG_OPTIONS_REGEXP=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,ngOptionsDirective=["$compile","$parse",function($compile,$parse){function parseOptionsExpression(optionsExp,selectElement,scope){function Option(selectValue,viewValue,label,group,disabled){this.selectValue=selectValue,this.viewValue=viewValue,this.label=label,this.group=group,this.disabled=disabled}function getOptionValuesKeys(optionValues){var optionValuesKeys;if(!keyName&&isArrayLike(optionValues))optionValuesKeys=optionValues;else{optionValuesKeys=[];for(var itemKey in optionValues)optionValues.hasOwnProperty(itemKey)&&"$"!==itemKey.charAt(0)&&optionValuesKeys.push(itemKey)}return optionValuesKeys}var match=optionsExp.match(NG_OPTIONS_REGEXP);if(!match)throw ngOptionsMinErr("iexp","Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",optionsExp,startingTag(selectElement));var valueName=match[5]||match[7],keyName=match[6],selectAs=/ as /.test(match[0])&&match[1],trackBy=match[9],valueFn=$parse(match[2]?match[1]:valueName),selectAsFn=selectAs&&$parse(selectAs),viewValueFn=selectAsFn||valueFn,trackByFn=trackBy&&$parse(trackBy),getTrackByValueFn=trackBy?function(value,locals){return trackByFn(scope,locals)}:function(value){return hashKey(value)},getTrackByValue=function(value,key){return getTrackByValueFn(value,getLocals(value,key))},displayFn=$parse(match[2]||match[1]),groupByFn=$parse(match[3]||""),disableWhenFn=$parse(match[4]||""),valuesFn=$parse(match[8]),locals={},getLocals=keyName?function(value,key){return locals[keyName]=key,locals[valueName]=value,locals}:function(value){return locals[valueName]=value,locals};return{trackBy:trackBy,getTrackByValue:getTrackByValue,getWatchables:$parse(valuesFn,function(optionValues){var watchedArray=[];optionValues=optionValues||[];for(var optionValuesKeys=getOptionValuesKeys(optionValues),optionValuesLength=optionValuesKeys.length,index=0;optionValuesLength>index;index++){var key=optionValues===optionValuesKeys?index:optionValuesKeys[index],locals=(optionValues[key],getLocals(optionValues[key],key)),selectValue=getTrackByValueFn(optionValues[key],locals);if(watchedArray.push(selectValue),match[2]||match[1]){var label=displayFn(scope,locals);watchedArray.push(label)}if(match[4]){var disableWhen=disableWhenFn(scope,locals);watchedArray.push(disableWhen)}}return watchedArray}),getOptions:function(){for(var optionItems=[],selectValueMap={},optionValues=valuesFn(scope)||[],optionValuesKeys=getOptionValuesKeys(optionValues),optionValuesLength=optionValuesKeys.length,index=0;optionValuesLength>index;index++){var key=optionValues===optionValuesKeys?index:optionValuesKeys[index],value=optionValues[key],locals=getLocals(value,key),viewValue=viewValueFn(scope,locals),selectValue=getTrackByValueFn(viewValue,locals),label=displayFn(scope,locals),group=groupByFn(scope,locals),disabled=disableWhenFn(scope,locals),optionItem=new Option(selectValue,viewValue,label,group,disabled);optionItems.push(optionItem),selectValueMap[selectValue]=optionItem}return{items:optionItems,selectValueMap:selectValueMap,getOptionFromViewValue:function(value){return selectValueMap[getTrackByValue(value)]},getViewValueFromOption:function(option){return trackBy?angular.copy(option.viewValue):option.viewValue}}}}}var optionTemplate=document.createElement("option"),optGroupTemplate=document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(scope,selectElement,attr,ctrls){function updateOptionElement(option,element){option.element=element,element.disabled=option.disabled,option.value!==element.value&&(element.value=option.selectValue),option.label!==element.label&&(element.label=option.label,element.textContent=option.label)}function addOrReuseElement(parent,current,type,templateElement){var element;return current&&lowercase(current.nodeName)===type?element=current:(element=templateElement.cloneNode(!1),current?parent.insertBefore(element,current):parent.appendChild(element)),element}function removeExcessElements(current){for(var next;current;)next=current.nextSibling,jqLiteRemove(current),current=next}function skipEmptyAndUnknownOptions(current){var emptyOption_=emptyOption&&emptyOption[0],unknownOption_=unknownOption&&unknownOption[0];if(emptyOption_||unknownOption_)for(;current&&(current===emptyOption_||current===unknownOption_);)current=current.nextSibling;return current}function updateOptions(){var previousValue=options&&selectCtrl.readValue();options=ngOptions.getOptions();var groupMap={},currentElement=selectElement[0].firstChild;if(providedEmptyOption&&selectElement.prepend(emptyOption),currentElement=skipEmptyAndUnknownOptions(currentElement),options.items.forEach(function(option){var group,groupElement,optionElement;option.group?(group=groupMap[option.group],group||(groupElement=addOrReuseElement(selectElement[0],currentElement,"optgroup",optGroupTemplate),currentElement=groupElement.nextSibling,groupElement.label=option.group,group=groupMap[option.group]={groupElement:groupElement,currentOptionElement:groupElement.firstChild}),optionElement=addOrReuseElement(group.groupElement,group.currentOptionElement,"option",optionTemplate),updateOptionElement(option,optionElement),group.currentOptionElement=optionElement.nextSibling):(optionElement=addOrReuseElement(selectElement[0],currentElement,"option",optionTemplate),updateOptionElement(option,optionElement),currentElement=optionElement.nextSibling)}),Object.keys(groupMap).forEach(function(key){removeExcessElements(groupMap[key].currentOptionElement)}),removeExcessElements(currentElement),ngModelCtrl.$render(),!ngModelCtrl.$isEmpty(previousValue)){var nextValue=selectCtrl.readValue();(ngOptions.trackBy?equals(previousValue,nextValue):previousValue===nextValue)||(ngModelCtrl.$setViewValue(nextValue),ngModelCtrl.$render())}}var ngModelCtrl=ctrls[1];if(ngModelCtrl){for(var emptyOption,selectCtrl=ctrls[0],multiple=attr.multiple,i=0,children=selectElement.children(),ii=children.length;ii>i;i++)if(""===children[i].value){emptyOption=children.eq(i);break}var providedEmptyOption=!!emptyOption,unknownOption=jqLite(optionTemplate.cloneNode(!1));unknownOption.val("?");var options,ngOptions=parseOptionsExpression(attr.ngOptions,selectElement,scope),renderEmptyOption=function(){providedEmptyOption||selectElement.prepend(emptyOption),selectElement.val(""),emptyOption.prop("selected",!0),emptyOption.attr("selected",!0)},removeEmptyOption=function(){providedEmptyOption||emptyOption.remove()},renderUnknownOption=function(){selectElement.prepend(unknownOption),selectElement.val("?"),unknownOption.prop("selected",!0),unknownOption.attr("selected",!0)},removeUnknownOption=function(){unknownOption.remove()};multiple?(ngModelCtrl.$isEmpty=function(value){return!value||0===value.length},selectCtrl.writeValue=function(value){options.items.forEach(function(option){option.element.selected=!1}),value&&value.forEach(function(item){var option=options.getOptionFromViewValue(item);option&&!option.disabled&&(option.element.selected=!0)
})},selectCtrl.readValue=function(){var selectedValues=selectElement.val()||[],selections=[];return forEach(selectedValues,function(value){var option=options.selectValueMap[value];option.disabled||selections.push(options.getViewValueFromOption(option))}),selections},ngOptions.trackBy&&scope.$watchCollection(function(){return isArray(ngModelCtrl.$viewValue)?ngModelCtrl.$viewValue.map(function(value){return ngOptions.getTrackByValue(value)}):void 0},function(){ngModelCtrl.$render()})):(selectCtrl.writeValue=function(value){var option=options.getOptionFromViewValue(value);option&&!option.disabled?selectElement[0].value!==option.selectValue&&(removeUnknownOption(),removeEmptyOption(),selectElement[0].value=option.selectValue,option.element.selected=!0,option.element.setAttribute("selected","selected")):null===value||providedEmptyOption?(removeUnknownOption(),renderEmptyOption()):(removeEmptyOption(),renderUnknownOption())},selectCtrl.readValue=function(){var selectedOption=options.selectValueMap[selectElement.val()];return selectedOption&&!selectedOption.disabled?(removeEmptyOption(),removeUnknownOption(),options.getViewValueFromOption(selectedOption)):null},ngOptions.trackBy&&scope.$watch(function(){return ngOptions.getTrackByValue(ngModelCtrl.$viewValue)},function(){ngModelCtrl.$render()})),providedEmptyOption?(emptyOption.remove(),$compile(emptyOption)(scope),emptyOption.removeClass("ng-scope")):emptyOption=jqLite(optionTemplate.cloneNode(!1)),updateOptions(),scope.$watchCollection(ngOptions.getWatchables,updateOptions)}}}}],ngPluralizeDirective=["$locale","$interpolate","$log",function($locale,$interpolate,$log){var BRACE=/{}/g,IS_WHEN=/^when(Minus)?(.+)$/;return{link:function(scope,element,attr){function updateElementText(newText){element.text(newText||"")}var lastCount,numberExp=attr.count,whenExp=attr.$attr.when&&element.attr(attr.$attr.when),offset=attr.offset||0,whens=scope.$eval(whenExp)||{},whensExpFns={},startSymbol=$interpolate.startSymbol(),endSymbol=$interpolate.endSymbol(),braceReplacement=startSymbol+numberExp+"-"+offset+endSymbol,watchRemover=angular.noop;forEach(attr,function(expression,attributeName){var tmpMatch=IS_WHEN.exec(attributeName);if(tmpMatch){var whenKey=(tmpMatch[1]?"-":"")+lowercase(tmpMatch[2]);whens[whenKey]=element.attr(attr.$attr[attributeName])}}),forEach(whens,function(expression,key){whensExpFns[key]=$interpolate(expression.replace(BRACE,braceReplacement))}),scope.$watch(numberExp,function(newVal){var count=parseFloat(newVal),countIsNaN=isNaN(count);if(countIsNaN||count in whens||(count=$locale.pluralCat(count-offset)),count!==lastCount&&!(countIsNaN&&isNumber(lastCount)&&isNaN(lastCount))){watchRemover();var whenExpFn=whensExpFns[count];isUndefined(whenExpFn)?(null!=newVal&&$log.debug("ngPluralize: no rule defined for '"+count+"' in "+whenExp),watchRemover=noop,updateElementText()):watchRemover=scope.$watch(whenExpFn,updateElementText),lastCount=count}})}}}],ngRepeatDirective=["$parse","$animate",function($parse,$animate){var NG_REMOVED="$$NG_REMOVED",ngRepeatMinErr=minErr("ngRepeat"),updateScope=function(scope,index,valueIdentifier,value,keyIdentifier,key,arrayLength){scope[valueIdentifier]=value,keyIdentifier&&(scope[keyIdentifier]=key),scope.$index=index,scope.$first=0===index,scope.$last=index===arrayLength-1,scope.$middle=!(scope.$first||scope.$last),scope.$odd=!(scope.$even=0===(1&index))},getBlockStart=function(block){return block.clone[0]},getBlockEnd=function(block){return block.clone[block.clone.length-1]};return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function($element,$attr){var expression=$attr.ngRepeat,ngRepeatEndComment=document.createComment(" end ngRepeat: "+expression+" "),match=expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!match)throw ngRepeatMinErr("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",expression);var lhs=match[1],rhs=match[2],aliasAs=match[3],trackByExp=match[4];if(match=lhs.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/),!match)throw ngRepeatMinErr("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",lhs);var valueIdentifier=match[3]||match[1],keyIdentifier=match[2];if(aliasAs&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(aliasAs)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(aliasAs)))throw ngRepeatMinErr("badident","alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",aliasAs);var trackByExpGetter,trackByIdExpFn,trackByIdArrayFn,trackByIdObjFn,hashFnLocals={$id:hashKey};return trackByExp?trackByExpGetter=$parse(trackByExp):(trackByIdArrayFn=function(key,value){return hashKey(value)},trackByIdObjFn=function(key){return key}),function($scope,$element,$attr,ctrl,$transclude){trackByExpGetter&&(trackByIdExpFn=function(key,value,index){return keyIdentifier&&(hashFnLocals[keyIdentifier]=key),hashFnLocals[valueIdentifier]=value,hashFnLocals.$index=index,trackByExpGetter($scope,hashFnLocals)});var lastBlockMap=createMap();$scope.$watchCollection(rhs,function(collection){var index,length,nextNode,collectionLength,key,value,trackById,trackByIdFn,collectionKeys,block,nextBlockOrder,elementsToRemove,previousNode=$element[0],nextBlockMap=createMap();if(aliasAs&&($scope[aliasAs]=collection),isArrayLike(collection))collectionKeys=collection,trackByIdFn=trackByIdExpFn||trackByIdArrayFn;else{trackByIdFn=trackByIdExpFn||trackByIdObjFn,collectionKeys=[];for(var itemKey in collection)collection.hasOwnProperty(itemKey)&&"$"!==itemKey.charAt(0)&&collectionKeys.push(itemKey)}for(collectionLength=collectionKeys.length,nextBlockOrder=new Array(collectionLength),index=0;collectionLength>index;index++)if(key=collection===collectionKeys?index:collectionKeys[index],value=collection[key],trackById=trackByIdFn(key,value,index),lastBlockMap[trackById])block=lastBlockMap[trackById],delete lastBlockMap[trackById],nextBlockMap[trackById]=block,nextBlockOrder[index]=block;else{if(nextBlockMap[trackById])throw forEach(nextBlockOrder,function(block){block&&block.scope&&(lastBlockMap[block.id]=block)}),ngRepeatMinErr("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",expression,trackById,value);nextBlockOrder[index]={id:trackById,scope:undefined,clone:undefined},nextBlockMap[trackById]=!0}for(var blockKey in lastBlockMap){if(block=lastBlockMap[blockKey],elementsToRemove=getBlockNodes(block.clone),$animate.leave(elementsToRemove),elementsToRemove[0].parentNode)for(index=0,length=elementsToRemove.length;length>index;index++)elementsToRemove[index][NG_REMOVED]=!0;block.scope.$destroy()}for(index=0;collectionLength>index;index++)if(key=collection===collectionKeys?index:collectionKeys[index],value=collection[key],block=nextBlockOrder[index],block.scope){nextNode=previousNode;do nextNode=nextNode.nextSibling;while(nextNode&&nextNode[NG_REMOVED]);getBlockStart(block)!=nextNode&&$animate.move(getBlockNodes(block.clone),null,jqLite(previousNode)),previousNode=getBlockEnd(block),updateScope(block.scope,index,valueIdentifier,value,keyIdentifier,key,collectionLength)}else $transclude(function(clone,scope){block.scope=scope;var endNode=ngRepeatEndComment.cloneNode(!1);clone[clone.length++]=endNode,$animate.enter(clone,null,jqLite(previousNode)),previousNode=endNode,block.clone=clone,nextBlockMap[block.id]=block,updateScope(block.scope,index,valueIdentifier,value,keyIdentifier,key,collectionLength)});lastBlockMap=nextBlockMap})}}}}],NG_HIDE_CLASS="ng-hide",NG_HIDE_IN_PROGRESS_CLASS="ng-hide-animate",ngShowDirective=["$animate",function($animate){return{restrict:"A",multiElement:!0,link:function(scope,element,attr){scope.$watch(attr.ngShow,function(value){$animate[value?"removeClass":"addClass"](element,NG_HIDE_CLASS,{tempClasses:NG_HIDE_IN_PROGRESS_CLASS})})}}}],ngHideDirective=["$animate",function($animate){return{restrict:"A",multiElement:!0,link:function(scope,element,attr){scope.$watch(attr.ngHide,function(value){$animate[value?"addClass":"removeClass"](element,NG_HIDE_CLASS,{tempClasses:NG_HIDE_IN_PROGRESS_CLASS})})}}}],ngStyleDirective=ngDirective(function(scope,element,attr){scope.$watch(attr.ngStyle,function(newStyles,oldStyles){oldStyles&&newStyles!==oldStyles&&forEach(oldStyles,function(val,style){element.css(style,"")}),newStyles&&element.css(newStyles)},!0)}),ngSwitchDirective=["$animate",function($animate){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(scope,element,attr,ngSwitchController){var watchExpr=attr.ngSwitch||attr.on,selectedTranscludes=[],selectedElements=[],previousLeaveAnimations=[],selectedScopes=[],spliceFactory=function(array,index){return function(){array.splice(index,1)}};scope.$watch(watchExpr,function(value){var i,ii;for(i=0,ii=previousLeaveAnimations.length;ii>i;++i)$animate.cancel(previousLeaveAnimations[i]);for(previousLeaveAnimations.length=0,i=0,ii=selectedScopes.length;ii>i;++i){var selected=getBlockNodes(selectedElements[i].clone);selectedScopes[i].$destroy();var promise=previousLeaveAnimations[i]=$animate.leave(selected);promise.then(spliceFactory(previousLeaveAnimations,i))}selectedElements.length=0,selectedScopes.length=0,(selectedTranscludes=ngSwitchController.cases["!"+value]||ngSwitchController.cases["?"])&&forEach(selectedTranscludes,function(selectedTransclude){selectedTransclude.transclude(function(caseElement,selectedScope){selectedScopes.push(selectedScope);var anchor=selectedTransclude.element;caseElement[caseElement.length++]=document.createComment(" end ngSwitchWhen: ");var block={clone:caseElement};selectedElements.push(block),$animate.enter(caseElement,anchor.parent(),anchor)})})})}}}],ngSwitchWhenDirective=ngDirective({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(scope,element,attrs,ctrl,$transclude){ctrl.cases["!"+attrs.ngSwitchWhen]=ctrl.cases["!"+attrs.ngSwitchWhen]||[],ctrl.cases["!"+attrs.ngSwitchWhen].push({transclude:$transclude,element:element})}}),ngSwitchDefaultDirective=ngDirective({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(scope,element,attr,ctrl,$transclude){ctrl.cases["?"]=ctrl.cases["?"]||[],ctrl.cases["?"].push({transclude:$transclude,element:element})}}),ngTranscludeDirective=ngDirective({restrict:"EAC",link:function($scope,$element,$attrs,controller,$transclude){if(!$transclude)throw minErr("ngTransclude")("orphan","Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",startingTag($element));$transclude(function(clone){$element.empty(),$element.append(clone)})}}),scriptDirective=["$templateCache",function($templateCache){return{restrict:"E",terminal:!0,compile:function(element,attr){if("text/ng-template"==attr.type){var templateUrl=attr.id,text=element[0].text;$templateCache.put(templateUrl,text)}}}}],noopNgModelController={$setViewValue:noop,$render:noop},SelectController=["$element","$scope","$attrs",function($element,$scope){var self=this,optionsMap=new HashMap;self.ngModelCtrl=noopNgModelController,self.unknownOption=jqLite(document.createElement("option")),self.renderUnknownOption=function(val){var unknownVal="? "+hashKey(val)+" ?";self.unknownOption.val(unknownVal),$element.prepend(self.unknownOption),$element.val(unknownVal)},$scope.$on("$destroy",function(){self.renderUnknownOption=noop}),self.removeUnknownOption=function(){self.unknownOption.parent()&&self.unknownOption.remove()},self.readValue=function(){return self.removeUnknownOption(),$element.val()},self.writeValue=function(value){self.hasOption(value)?(self.removeUnknownOption(),$element.val(value),""===value&&self.emptyOption.prop("selected",!0)):null==value&&self.emptyOption?(self.removeUnknownOption(),$element.val("")):self.renderUnknownOption(value)},self.addOption=function(value,element){assertNotHasOwnProperty(value,'"option value"'),""===value&&(self.emptyOption=element);var count=optionsMap.get(value)||0;optionsMap.put(value,count+1)},self.removeOption=function(value){var count=optionsMap.get(value);count&&(1===count?(optionsMap.remove(value),""===value&&(self.emptyOption=undefined)):optionsMap.put(value,count-1))},self.hasOption=function(value){return!!optionsMap.get(value)}}],selectDirective=function(){return{restrict:"E",require:["select","?ngModel"],controller:SelectController,link:function(scope,element,attr,ctrls){var ngModelCtrl=ctrls[1];if(ngModelCtrl){var selectCtrl=ctrls[0];if(selectCtrl.ngModelCtrl=ngModelCtrl,ngModelCtrl.$render=function(){selectCtrl.writeValue(ngModelCtrl.$viewValue)},element.on("change",function(){scope.$apply(function(){ngModelCtrl.$setViewValue(selectCtrl.readValue())})}),attr.multiple){selectCtrl.readValue=function(){var array=[];return forEach(element.find("option"),function(option){option.selected&&array.push(option.value)}),array},selectCtrl.writeValue=function(value){var items=new HashMap(value);forEach(element.find("option"),function(option){option.selected=isDefined(items.get(option.value))})};var lastView,lastViewRef=0/0;scope.$watch(function(){lastViewRef!==ngModelCtrl.$viewValue||equals(lastView,ngModelCtrl.$viewValue)||(lastView=shallowCopy(ngModelCtrl.$viewValue),ngModelCtrl.$render()),lastViewRef=ngModelCtrl.$viewValue}),ngModelCtrl.$isEmpty=function(value){return!value||0===value.length}}}}}},optionDirective=["$interpolate",function($interpolate){function chromeHack(optionElement){optionElement[0].hasAttribute("selected")&&(optionElement[0].selected=!0)}return{restrict:"E",priority:100,compile:function(element,attr){if(isUndefined(attr.value)){var interpolateFn=$interpolate(element.text(),!0);interpolateFn||attr.$set("value",element.text())}return function(scope,element,attr){var selectCtrlName="$selectController",parent=element.parent(),selectCtrl=parent.data(selectCtrlName)||parent.parent().data(selectCtrlName);selectCtrl&&selectCtrl.ngModelCtrl&&(interpolateFn?scope.$watch(interpolateFn,function(newVal,oldVal){attr.$set("value",newVal),oldVal!==newVal&&selectCtrl.removeOption(oldVal),selectCtrl.addOption(newVal,element),selectCtrl.ngModelCtrl.$render(),chromeHack(element)}):(selectCtrl.addOption(attr.value,element),selectCtrl.ngModelCtrl.$render(),chromeHack(element)),element.on("$destroy",function(){selectCtrl.removeOption(attr.value),selectCtrl.ngModelCtrl.$render()}))}}}}],styleDirective=valueFn({restrict:"E",terminal:!1}),requiredDirective=function(){return{restrict:"A",require:"?ngModel",link:function(scope,elm,attr,ctrl){ctrl&&(attr.required=!0,ctrl.$validators.required=function(modelValue,viewValue){return!attr.required||!ctrl.$isEmpty(viewValue)},attr.$observe("required",function(){ctrl.$validate()}))}}},patternDirective=function(){return{restrict:"A",require:"?ngModel",link:function(scope,elm,attr,ctrl){if(ctrl){var regexp,patternExp=attr.ngPattern||attr.pattern;attr.$observe("pattern",function(regex){if(isString(regex)&&regex.length>0&&(regex=new RegExp("^"+regex+"$")),regex&&!regex.test)throw minErr("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",patternExp,regex,startingTag(elm));regexp=regex||undefined,ctrl.$validate()}),ctrl.$validators.pattern=function(value){return ctrl.$isEmpty(value)||isUndefined(regexp)||regexp.test(value)}}}}},maxlengthDirective=function(){return{restrict:"A",require:"?ngModel",link:function(scope,elm,attr,ctrl){if(ctrl){var maxlength=-1;attr.$observe("maxlength",function(value){var intVal=toInt(value);maxlength=isNaN(intVal)?-1:intVal,ctrl.$validate()}),ctrl.$validators.maxlength=function(modelValue,viewValue){return 0>maxlength||ctrl.$isEmpty(viewValue)||viewValue.length<=maxlength}}}}},minlengthDirective=function(){return{restrict:"A",require:"?ngModel",link:function(scope,elm,attr,ctrl){if(ctrl){var minlength=0;attr.$observe("minlength",function(value){minlength=toInt(value)||0,ctrl.$validate()}),ctrl.$validators.minlength=function(modelValue,viewValue){return ctrl.$isEmpty(viewValue)||viewValue.length>=minlength}}}}};return window.angular.bootstrap?(console.log("WARNING: Tried to load angular more than once."),void 0):(bindJQuery(),publishExternalAPI(angular),jqLite(document).ready(function(){angularInit(document,bootstrap)}),void 0)}(window,document),!window.angular.$$csp()&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),function(){var initializing=!1,fnTest=/xyz/.test(function(){})?/\b_super\b/:/.*/;this.Class=function(){},Class.extend=function(prop){function Class(){!initializing&&this.init&&this.init.apply(this,arguments)}var _super=this.prototype;initializing=!0;var prototype=new this;initializing=!1;for(var name in prop)prototype[name]="function"==typeof prop[name]&&"function"==typeof _super[name]&&fnTest.test(prop[name])?function(name,fn){return function(){var tmp=this._super;this._super=_super[name];var ret=fn.apply(this,arguments);return this._super=tmp,ret}}(name,prop[name]):prop[name];return Class.prototype=prototype,Class.prototype.constructor=Class,Class.extend=arguments.callee,Class}}(),function(){"use strict";function FastClick(layer,options){function bind(method,context){return function(){return method.apply(context,arguments)}}var oldOnClick;if(options=options||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=options.touchBoundary||10,this.layer=layer,this.tapDelay=options.tapDelay||200,this.tapTimeout=options.tapTimeout||700,!FastClick.notNeeded(layer)){for(var methods=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],context=this,i=0,l=methods.length;l>i;i++)context[methods[i]]=bind(context[methods[i]],context);deviceIsAndroid&&(layer.addEventListener("mouseover",this.onMouse,!0),layer.addEventListener("mousedown",this.onMouse,!0),layer.addEventListener("mouseup",this.onMouse,!0)),layer.addEventListener("click",this.onClick,!0),layer.addEventListener("touchstart",this.onTouchStart,!1),layer.addEventListener("touchmove",this.onTouchMove,!1),layer.addEventListener("touchend",this.onTouchEnd,!1),layer.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(layer.removeEventListener=function(type,callback,capture){var rmv=Node.prototype.removeEventListener;"click"===type?rmv.call(layer,type,callback.hijacked||callback,capture):rmv.call(layer,type,callback,capture)},layer.addEventListener=function(type,callback,capture){var adv=Node.prototype.addEventListener;"click"===type?adv.call(layer,type,callback.hijacked||(callback.hijacked=function(event){event.propagationStopped||callback(event)}),capture):adv.call(layer,type,callback,capture)}),"function"==typeof layer.onclick&&(oldOnClick=layer.onclick,layer.addEventListener("click",function(event){oldOnClick(event)},!1),layer.onclick=null)}}var deviceIsWindowsPhone=navigator.userAgent.indexOf("Windows Phone")>=0,deviceIsAndroid=navigator.userAgent.indexOf("Android")>0&&!deviceIsWindowsPhone,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent)&&!deviceIsWindowsPhone,deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS [6-7]_\d/.test(navigator.userAgent),deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;FastClick.prototype.needsClick=function(target){switch(target.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(target.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===target.type||target.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(target.className)},FastClick.prototype.needsFocus=function(target){switch(target.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(target.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!target.disabled&&!target.readOnly;default:return/\bneedsfocus\b/.test(target.className)}},FastClick.prototype.sendClick=function(targetElement,event){var clickEvent,touch;document.activeElement&&document.activeElement!==targetElement&&document.activeElement.blur(),touch=event.changedTouches[0],clickEvent=document.createEvent("MouseEvents"),clickEvent.initMouseEvent(this.determineEventType(targetElement),!0,!0,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,!1,!1,!1,!1,0,null),clickEvent.forwardedTouchEvent=!0,targetElement.dispatchEvent(clickEvent)},FastClick.prototype.determineEventType=function(targetElement){return deviceIsAndroid&&"select"===targetElement.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(targetElement){var length;deviceIsIOS&&targetElement.setSelectionRange&&0!==targetElement.type.indexOf("date")&&"time"!==targetElement.type&&"month"!==targetElement.type?(length=targetElement.value.length,targetElement.setSelectionRange(length,length)):targetElement.focus()},FastClick.prototype.updateScrollParent=function(targetElement){var scrollParent,parentElement;if(scrollParent=targetElement.fastClickScrollParent,!scrollParent||!scrollParent.contains(targetElement)){parentElement=targetElement;do{if(parentElement.scrollHeight>parentElement.offsetHeight){scrollParent=parentElement,targetElement.fastClickScrollParent=parentElement;break}parentElement=parentElement.parentElement}while(parentElement)}scrollParent&&(scrollParent.fastClickLastScrollTop=scrollParent.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(eventTarget){return eventTarget.nodeType===Node.TEXT_NODE?eventTarget.parentNode:eventTarget},FastClick.prototype.onTouchStart=function(event){var targetElement,touch,selection;if(event.targetTouches.length>1)return!0;if(targetElement=this.getTargetElementFromEventTarget(event.target),touch=event.targetTouches[0],deviceIsIOS){if(selection=window.getSelection(),selection.rangeCount&&!selection.isCollapsed)return!0;if(!deviceIsIOS4){if(touch.identifier&&touch.identifier===this.lastTouchIdentifier)return event.preventDefault(),!1;this.lastTouchIdentifier=touch.identifier,this.updateScrollParent(targetElement)}}return this.trackingClick=!0,this.trackingClickStart=event.timeStamp,this.targetElement=targetElement,this.touchStartX=touch.pageX,this.touchStartY=touch.pageY,event.timeStamp-this.lastClickTime<this.tapDelay&&event.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(event){var touch=event.changedTouches[0],boundary=this.touchBoundary;return Math.abs(touch.pageX-this.touchStartX)>boundary||Math.abs(touch.pageY-this.touchStartY)>boundary?!0:!1},FastClick.prototype.onTouchMove=function(event){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(event.target)||this.touchHasMoved(event))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(labelElement){return void 0!==labelElement.control?labelElement.control:labelElement.htmlFor?document.getElementById(labelElement.htmlFor):labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(event){var forElement,trackingClickStart,targetTagName,scrollParent,touch,targetElement=this.targetElement;if(!this.trackingClick)return!0;if(event.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(event.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=event.timeStamp,trackingClickStart=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(touch=event.changedTouches[0],targetElement=document.elementFromPoint(touch.pageX-window.pageXOffset,touch.pageY-window.pageYOffset)||targetElement,targetElement.fastClickScrollParent=this.targetElement.fastClickScrollParent),targetTagName=targetElement.tagName.toLowerCase(),"label"===targetTagName){if(forElement=this.findControl(targetElement)){if(this.focus(targetElement),deviceIsAndroid)return!1;targetElement=forElement}}else if(this.needsFocus(targetElement))return event.timeStamp-trackingClickStart>100||deviceIsIOS&&window.top!==window&&"input"===targetTagName?(this.targetElement=null,!1):(this.focus(targetElement),this.sendClick(targetElement,event),deviceIsIOS&&"select"===targetTagName||(this.targetElement=null,event.preventDefault()),!1);return deviceIsIOS&&!deviceIsIOS4&&(scrollParent=targetElement.fastClickScrollParent,scrollParent&&scrollParent.fastClickLastScrollTop!==scrollParent.scrollTop)?!0:(this.needsClick(targetElement)||(event.preventDefault(),this.sendClick(targetElement,event)),!1)},FastClick.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(event){return this.targetElement?event.forwardedTouchEvent?!0:event.cancelable?!this.needsClick(this.targetElement)||this.cancelNextClick?(event.stopImmediatePropagation?event.stopImmediatePropagation():event.propagationStopped=!0,event.stopPropagation(),event.preventDefault(),!1):!0:!0:!0},FastClick.prototype.onClick=function(event){var permitted;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===event.target.type&&0===event.detail?!0:(permitted=this.onMouse(event),permitted||(this.targetElement=null),permitted)},FastClick.prototype.destroy=function(){var layer=this.layer;deviceIsAndroid&&(layer.removeEventListener("mouseover",this.onMouse,!0),layer.removeEventListener("mousedown",this.onMouse,!0),layer.removeEventListener("mouseup",this.onMouse,!0)),layer.removeEventListener("click",this.onClick,!0),layer.removeEventListener("touchstart",this.onTouchStart,!1),layer.removeEventListener("touchmove",this.onTouchMove,!1),layer.removeEventListener("touchend",this.onTouchEnd,!1),layer.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(layer){var metaViewport,chromeVersion,blackberryVersion,firefoxVersion;if("undefined"==typeof window.ontouchstart)return!0;if(chromeVersion=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(metaViewport=document.querySelector("meta[name=viewport]")){if(-1!==metaViewport.content.indexOf("user-scalable=no"))return!0;if(chromeVersion>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(deviceIsBlackBerry10&&(blackberryVersion=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),blackberryVersion[1]>=10&&blackberryVersion[2]>=3&&(metaViewport=document.querySelector("meta[name=viewport]")))){if(-1!==metaViewport.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===layer.style.msTouchAction||"manipulation"===layer.style.touchAction?!0:(firefoxVersion=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],firefoxVersion>=27&&(metaViewport=document.querySelector("meta[name=viewport]"),metaViewport&&(-1!==metaViewport.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===layer.style.touchAction||"manipulation"===layer.style.touchAction?!0:!1)},FastClick.attach=function(layer,options){return new FastClick(layer,options)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick}(),function(window,undefined){"use strict";function setup(){Hammer.READY||(Event.determineEventTypes(),Utils.each(Hammer.gestures,function(gesture){Detection.register(gesture)}),Event.onTouch(Hammer.DOCUMENT,EVENT_MOVE,Detection.detect),Event.onTouch(Hammer.DOCUMENT,EVENT_END,Detection.detect),Hammer.READY=!0)}var Hammer=function Hammer(element,options){return new Hammer.Instance(element,options||{})};Hammer.VERSION="1.1.3",Hammer.defaults={behavior:{userSelect:"none",touchAction:"pan-y",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},Hammer.DOCUMENT=document,Hammer.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,Hammer.HAS_TOUCHEVENTS="ontouchstart"in window,Hammer.IS_MOBILE=/mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent),Hammer.NO_MOUSEEVENTS=Hammer.HAS_TOUCHEVENTS&&Hammer.IS_MOBILE||Hammer.HAS_POINTEREVENTS,Hammer.CALCULATE_INTERVAL=25;var EVENT_TYPES={},DIRECTION_DOWN=Hammer.DIRECTION_DOWN="down",DIRECTION_LEFT=Hammer.DIRECTION_LEFT="left",DIRECTION_UP=Hammer.DIRECTION_UP="up",DIRECTION_RIGHT=Hammer.DIRECTION_RIGHT="right",POINTER_MOUSE=Hammer.POINTER_MOUSE="mouse",POINTER_TOUCH=Hammer.POINTER_TOUCH="touch",POINTER_PEN=Hammer.POINTER_PEN="pen",EVENT_START=Hammer.EVENT_START="start",EVENT_MOVE=Hammer.EVENT_MOVE="move",EVENT_END=Hammer.EVENT_END="end",EVENT_RELEASE=Hammer.EVENT_RELEASE="release",EVENT_TOUCH=Hammer.EVENT_TOUCH="touch";Hammer.READY=!1,Hammer.plugins=Hammer.plugins||{},Hammer.gestures=Hammer.gestures||{};var Utils=Hammer.utils={extend:function(dest,src,merge){for(var key in src)!src.hasOwnProperty(key)||dest[key]!==undefined&&merge||(dest[key]=src[key]);return dest},on:function(element,type,handler){element.addEventListener(type,handler,!1)},off:function(element,type,handler){element.removeEventListener(type,handler,!1)},each:function(obj,iterator,context){var i,len;if("forEach"in obj)obj.forEach(iterator,context);else if(obj.length!==undefined){for(i=0,len=obj.length;len>i;i++)if(iterator.call(context,obj[i],i,obj)===!1)return}else for(i in obj)if(obj.hasOwnProperty(i)&&iterator.call(context,obj[i],i,obj)===!1)return},inStr:function(src,find){return src.indexOf(find)>-1},inArray:function(src,find){if(src.indexOf){var index=src.indexOf(find);return-1===index?!1:index}for(var i=0,len=src.length;len>i;i++)if(src[i]===find)return i;return!1},toArray:function(obj){return Array.prototype.slice.call(obj,0)},hasParent:function(node,parent){for(;node;){if(node==parent)return!0;node=node.parentNode}return!1},getCenter:function(touches){var pageX=[],pageY=[],clientX=[],clientY=[],min=Math.min,max=Math.max;return 1===touches.length?{pageX:touches[0].pageX,pageY:touches[0].pageY,clientX:touches[0].clientX,clientY:touches[0].clientY}:(Utils.each(touches,function(touch){pageX.push(touch.pageX),pageY.push(touch.pageY),clientX.push(touch.clientX),clientY.push(touch.clientY)}),{pageX:(min.apply(Math,pageX)+max.apply(Math,pageX))/2,pageY:(min.apply(Math,pageY)+max.apply(Math,pageY))/2,clientX:(min.apply(Math,clientX)+max.apply(Math,clientX))/2,clientY:(min.apply(Math,clientY)+max.apply(Math,clientY))/2})},getVelocity:function(deltaTime,deltaX,deltaY){return{x:Math.abs(deltaX/deltaTime)||0,y:Math.abs(deltaY/deltaTime)||0}},getAngle:function(touch1,touch2){var x=touch2.clientX-touch1.clientX,y=touch2.clientY-touch1.clientY;return 180*Math.atan2(y,x)/Math.PI},getDirection:function(touch1,touch2){var x=Math.abs(touch1.clientX-touch2.clientX),y=Math.abs(touch1.clientY-touch2.clientY);return x>=y?touch1.clientX-touch2.clientX>0?DIRECTION_LEFT:DIRECTION_RIGHT:touch1.clientY-touch2.clientY>0?DIRECTION_UP:DIRECTION_DOWN},getDistance:function(touch1,touch2){var x=touch2.clientX-touch1.clientX,y=touch2.clientY-touch1.clientY;return Math.sqrt(x*x+y*y)},getScale:function(start,end){return start.length>=2&&end.length>=2?this.getDistance(end[0],end[1])/this.getDistance(start[0],start[1]):1},getRotation:function(start,end){return start.length>=2&&end.length>=2?this.getAngle(end[1],end[0])-this.getAngle(start[1],start[0]):0},isVertical:function(direction){return direction==DIRECTION_UP||direction==DIRECTION_DOWN
},setPrefixedCss:function(element,prop,value,toggle){var prefixes=["","Webkit","Moz","O","ms"];prop=Utils.toCamelCase(prop);for(var i=0;i<prefixes.length;i++){var p=prop;if(prefixes[i]&&(p=prefixes[i]+p.slice(0,1).toUpperCase()+p.slice(1)),p in element.style){element.style[p]=(null==toggle||toggle)&&value||"";break}}},toggleBehavior:function(element,props,toggle){if(props&&element&&element.style){Utils.each(props,function(value,prop){Utils.setPrefixedCss(element,prop,value,toggle)});var falseFn=toggle&&function(){return!1};"none"==props.userSelect&&(element.onselectstart=falseFn),"none"==props.userDrag&&(element.ondragstart=falseFn)}},toCamelCase:function(str){return str.replace(/[_-]([a-z])/g,function(s){return s[1].toUpperCase()})}},Event=Hammer.event={preventMouseEvents:!1,started:!1,shouldDetect:!1,on:function(element,type,handler,hook){var types=type.split(" ");Utils.each(types,function(type){Utils.on(element,type,handler),hook&&hook(type)})},off:function(element,type,handler,hook){var types=type.split(" ");Utils.each(types,function(type){Utils.off(element,type,handler),hook&&hook(type)})},onTouch:function(element,eventType,handler){var self=this,onTouchHandler=function(ev){var triggerType,srcType=ev.type.toLowerCase(),isPointer=Hammer.HAS_POINTEREVENTS,isMouse=Utils.inStr(srcType,"mouse");isMouse&&self.preventMouseEvents||(isMouse&&eventType==EVENT_START&&0===ev.button?(self.preventMouseEvents=!1,self.shouldDetect=!0):isPointer&&eventType==EVENT_START?self.shouldDetect=1===ev.buttons||PointerEvent.matchType(POINTER_TOUCH,ev):isMouse||eventType!=EVENT_START||(self.preventMouseEvents=!0,self.shouldDetect=!0),isPointer&&eventType!=EVENT_END&&PointerEvent.updatePointer(eventType,ev),self.shouldDetect&&(triggerType=self.doDetect.call(self,ev,eventType,element,handler)),triggerType==EVENT_END&&(self.preventMouseEvents=!1,self.shouldDetect=!1,PointerEvent.reset()),isPointer&&eventType==EVENT_END&&PointerEvent.updatePointer(eventType,ev))};return this.on(element,EVENT_TYPES[eventType],onTouchHandler),onTouchHandler},doDetect:function(ev,eventType,element,handler){var touchList=this.getTouchList(ev,eventType),touchListLength=touchList.length,triggerType=eventType,triggerChange=touchList.trigger,changedLength=touchListLength;eventType==EVENT_START?triggerChange=EVENT_TOUCH:eventType==EVENT_END&&(triggerChange=EVENT_RELEASE,changedLength=touchList.length-(ev.changedTouches?ev.changedTouches.length:1)),changedLength>0&&this.started&&(triggerType=EVENT_MOVE),this.started=!0;var evData=this.collectEventData(element,triggerType,touchList,ev);return eventType!=EVENT_END&&handler.call(Detection,evData),triggerChange&&(evData.changedLength=changedLength,evData.eventType=triggerChange,handler.call(Detection,evData),evData.eventType=triggerType,delete evData.changedLength),triggerType==EVENT_END&&(handler.call(Detection,evData),this.started=!1),triggerType},determineEventTypes:function(){var types;return types=Hammer.HAS_POINTEREVENTS?window.PointerEvent?["pointerdown","pointermove","pointerup pointercancel lostpointercapture"]:["MSPointerDown","MSPointerMove","MSPointerUp MSPointerCancel MSLostPointerCapture"]:Hammer.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],EVENT_TYPES[EVENT_START]=types[0],EVENT_TYPES[EVENT_MOVE]=types[1],EVENT_TYPES[EVENT_END]=types[2],EVENT_TYPES},getTouchList:function(ev,eventType){if(Hammer.HAS_POINTEREVENTS)return PointerEvent.getTouchList();if(ev.touches){if(eventType==EVENT_MOVE)return ev.touches;var identifiers=[],concat=[].concat(Utils.toArray(ev.touches),Utils.toArray(ev.changedTouches)),touchList=[];return Utils.each(concat,function(touch){Utils.inArray(identifiers,touch.identifier)===!1&&touchList.push(touch),identifiers.push(touch.identifier)}),touchList}return ev.identifier=1,[ev]},collectEventData:function(element,eventType,touches,ev){var pointerType=POINTER_TOUCH;return Utils.inStr(ev.type,"mouse")||PointerEvent.matchType(POINTER_MOUSE,ev)?pointerType=POINTER_MOUSE:PointerEvent.matchType(POINTER_PEN,ev)&&(pointerType=POINTER_PEN),{center:Utils.getCenter(touches),timeStamp:Date.now(),target:ev.target,touches:touches,eventType:eventType,pointerType:pointerType,srcEvent:ev,preventDefault:function(){var srcEvent=this.srcEvent;srcEvent.preventManipulation&&srcEvent.preventManipulation(),srcEvent.preventDefault&&srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return Detection.stopDetect()}}}},PointerEvent=Hammer.PointerEvent={pointers:{},getTouchList:function(){var touchlist=[];return Utils.each(this.pointers,function(pointer){touchlist.push(pointer)}),touchlist},updatePointer:function(eventType,pointerEvent){eventType==EVENT_END||eventType!=EVENT_END&&1!==pointerEvent.buttons?delete this.pointers[pointerEvent.pointerId]:(pointerEvent.identifier=pointerEvent.pointerId,this.pointers[pointerEvent.pointerId]=pointerEvent)},matchType:function(pointerType,ev){if(!ev.pointerType)return!1;var pt=ev.pointerType,types={};return types[POINTER_MOUSE]=pt===(ev.MSPOINTER_TYPE_MOUSE||POINTER_MOUSE),types[POINTER_TOUCH]=pt===(ev.MSPOINTER_TYPE_TOUCH||POINTER_TOUCH),types[POINTER_PEN]=pt===(ev.MSPOINTER_TYPE_PEN||POINTER_PEN),types[pointerType]},reset:function(){this.pointers={}}},Detection=Hammer.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(inst,eventData){this.current||(this.stopped=!1,this.current={inst:inst,startEvent:Utils.extend({},eventData),lastEvent:!1,lastCalcEvent:!1,futureCalcEvent:!1,lastCalcData:{},name:""},this.detect(eventData))},detect:function(eventData){if(this.current&&!this.stopped){eventData=this.extendEventData(eventData);var inst=this.current.inst,instOptions=inst.options;return Utils.each(this.gestures,function(gesture){!this.stopped&&inst.enabled&&instOptions[gesture.name]&&gesture.handler.call(gesture,eventData,inst)},this),this.current&&(this.current.lastEvent=eventData),eventData.eventType==EVENT_END&&this.stopDetect(),eventData}},stopDetect:function(){this.previous=Utils.extend({},this.current),this.current=null,this.stopped=!0},getCalculatedData:function(ev,center,deltaTime,deltaX,deltaY){var cur=this.current,recalc=!1,calcEv=cur.lastCalcEvent,calcData=cur.lastCalcData;calcEv&&ev.timeStamp-calcEv.timeStamp>Hammer.CALCULATE_INTERVAL&&(center=calcEv.center,deltaTime=ev.timeStamp-calcEv.timeStamp,deltaX=ev.center.clientX-calcEv.center.clientX,deltaY=ev.center.clientY-calcEv.center.clientY,recalc=!0),(ev.eventType==EVENT_TOUCH||ev.eventType==EVENT_RELEASE)&&(cur.futureCalcEvent=ev),(!cur.lastCalcEvent||recalc)&&(calcData.velocity=Utils.getVelocity(deltaTime,deltaX,deltaY),calcData.angle=Utils.getAngle(center,ev.center),calcData.direction=Utils.getDirection(center,ev.center),cur.lastCalcEvent=cur.futureCalcEvent||ev,cur.futureCalcEvent=ev),ev.velocityX=calcData.velocity.x,ev.velocityY=calcData.velocity.y,ev.interimAngle=calcData.angle,ev.interimDirection=calcData.direction},extendEventData:function(ev){var cur=this.current,startEv=cur.startEvent,lastEv=cur.lastEvent||startEv;(ev.eventType==EVENT_TOUCH||ev.eventType==EVENT_RELEASE)&&(startEv.touches=[],Utils.each(ev.touches,function(touch){startEv.touches.push({clientX:touch.clientX,clientY:touch.clientY})}));var deltaTime=ev.timeStamp-startEv.timeStamp,deltaX=ev.center.clientX-startEv.center.clientX,deltaY=ev.center.clientY-startEv.center.clientY;return this.getCalculatedData(ev,lastEv.center,deltaTime,deltaX,deltaY),Utils.extend(ev,{startEvent:startEv,deltaTime:deltaTime,deltaX:deltaX,deltaY:deltaY,distance:Utils.getDistance(startEv.center,ev.center),angle:Utils.getAngle(startEv.center,ev.center),direction:Utils.getDirection(startEv.center,ev.center),scale:Utils.getScale(startEv.touches,ev.touches),rotation:Utils.getRotation(startEv.touches,ev.touches)}),ev},register:function(gesture){var options=gesture.defaults||{};return options[gesture.name]===undefined&&(options[gesture.name]=!0),Utils.extend(Hammer.defaults,options,!0),gesture.index=gesture.index||1e3,this.gestures.push(gesture),this.gestures.sort(function(a,b){return a.index<b.index?-1:a.index>b.index?1:0}),this.gestures}};Hammer.Instance=function(element,options){var self=this;setup(),this.element=element,this.enabled=!0,Utils.each(options,function(value,name){delete options[name],options[Utils.toCamelCase(name)]=value}),this.options=Utils.extend(Utils.extend({},Hammer.defaults),options||{}),this.options.behavior&&Utils.toggleBehavior(this.element,this.options.behavior,!0),this.eventStartHandler=Event.onTouch(element,EVENT_START,function(ev){self.enabled&&ev.eventType==EVENT_START?Detection.startDetect(self,ev):ev.eventType==EVENT_TOUCH&&Detection.detect(ev)}),this.eventHandlers=[]},Hammer.Instance.prototype={on:function(gestures,handler){var self=this;return Event.on(self.element,gestures,handler,function(type){self.eventHandlers.push({gesture:type,handler:handler})}),self},off:function(gestures,handler){var self=this;return Event.off(self.element,gestures,handler,function(type){var index=Utils.inArray({gesture:type,handler:handler});index!==!1&&self.eventHandlers.splice(index,1)}),self},trigger:function(gesture,eventData){eventData||(eventData={});var event=Hammer.DOCUMENT.createEvent("Event");event.initEvent(gesture,!0,!0),event.gesture=eventData;var element=this.element;return Utils.hasParent(eventData.target,element)&&(element=eventData.target),element.dispatchEvent(event),this},enable:function(state){return this.enabled=state,this},dispose:function(){var i,eh;for(Utils.toggleBehavior(this.element,this.options.behavior,!1),i=-1;eh=this.eventHandlers[++i];)Utils.off(this.element,eh.gesture,eh.handler);return this.eventHandlers=[],Event.off(this.element,EVENT_TYPES[EVENT_START],this.eventStartHandler),null}},function(name){function dragGesture(ev,inst){var cur=Detection.current;if(!(inst.options.dragMaxTouches>0&&ev.touches.length>inst.options.dragMaxTouches))switch(ev.eventType){case EVENT_START:triggered=!1;break;case EVENT_MOVE:if(ev.distance<inst.options.dragMinDistance&&cur.name!=name)return;var startCenter=cur.startEvent.center;if(cur.name!=name&&(cur.name=name,inst.options.dragDistanceCorrection&&ev.distance>0)){var factor=Math.abs(inst.options.dragMinDistance/ev.distance);startCenter.pageX+=ev.deltaX*factor,startCenter.pageY+=ev.deltaY*factor,startCenter.clientX+=ev.deltaX*factor,startCenter.clientY+=ev.deltaY*factor,ev=Detection.extendEventData(ev)}(cur.lastEvent.dragLockToAxis||inst.options.dragLockToAxis&&inst.options.dragLockMinDistance<=ev.distance)&&(ev.dragLockToAxis=!0);var lastDirection=cur.lastEvent.direction;ev.dragLockToAxis&&lastDirection!==ev.direction&&(ev.direction=Utils.isVertical(lastDirection)?ev.deltaY<0?DIRECTION_UP:DIRECTION_DOWN:ev.deltaX<0?DIRECTION_LEFT:DIRECTION_RIGHT),triggered||(inst.trigger(name+"start",ev),triggered=!0),inst.trigger(name,ev),inst.trigger(name+ev.direction,ev);var isVertical=Utils.isVertical(ev.direction);(inst.options.dragBlockVertical&&isVertical||inst.options.dragBlockHorizontal&&!isVertical)&&ev.preventDefault();break;case EVENT_RELEASE:triggered&&ev.changedLength<=inst.options.dragMaxTouches&&(inst.trigger(name+"end",ev),triggered=!1);break;case EVENT_END:triggered=!1}}var triggered=!1;Hammer.gestures.Drag={name:name,index:50,handler:dragGesture,defaults:{dragMinDistance:10,dragDistanceCorrection:!0,dragMaxTouches:1,dragBlockHorizontal:!1,dragBlockVertical:!1,dragLockToAxis:!1,dragLockMinDistance:25}}}("drag"),Hammer.gestures.Gesture={name:"gesture",index:1337,handler:function(ev,inst){inst.trigger(this.name,ev)}},function(name){function holdGesture(ev,inst){var options=inst.options,current=Detection.current;switch(ev.eventType){case EVENT_START:clearTimeout(timer),current.name=name,timer=setTimeout(function(){current&&current.name==name&&inst.trigger(name,ev)},options.holdTimeout);break;case EVENT_MOVE:ev.distance>options.holdThreshold&&clearTimeout(timer);break;case EVENT_RELEASE:clearTimeout(timer)}}var timer;Hammer.gestures.Hold={name:name,index:10,defaults:{holdTimeout:500,holdThreshold:2},handler:holdGesture}}("hold"),Hammer.gestures.Release={name:"release",index:1/0,handler:function(ev,inst){ev.eventType==EVENT_RELEASE&&inst.trigger(this.name,ev)}},Hammer.gestures.Swipe={name:"swipe",index:40,defaults:{swipeMinTouches:1,swipeMaxTouches:1,swipeVelocityX:.6,swipeVelocityY:.6},handler:function(ev,inst){if(ev.eventType==EVENT_RELEASE){var touches=ev.touches.length,options=inst.options;if(touches<options.swipeMinTouches||touches>options.swipeMaxTouches)return;(ev.velocityX>options.swipeVelocityX||ev.velocityY>options.swipeVelocityY)&&(inst.trigger(this.name,ev),inst.trigger(this.name+ev.direction,ev))}}},function(name){function tapGesture(ev,inst){var sincePrev,didDoubleTap,options=inst.options,current=Detection.current,prev=Detection.previous;switch(ev.eventType){case EVENT_START:hasMoved=!1;break;case EVENT_MOVE:hasMoved=hasMoved||ev.distance>options.tapMaxDistance;break;case EVENT_END:!Utils.inStr(ev.srcEvent.type,"cancel")&&ev.deltaTime<options.tapMaxTime&&!hasMoved&&(sincePrev=prev&&prev.lastEvent&&ev.timeStamp-prev.lastEvent.timeStamp,didDoubleTap=!1,prev&&prev.name==name&&sincePrev&&sincePrev<options.doubleTapInterval&&ev.distance<options.doubleTapDistance&&(inst.trigger("doubletap",ev),didDoubleTap=!0),(!didDoubleTap||options.tapAlways)&&(current.name=name,inst.trigger(current.name,ev)))}}var hasMoved=!1;Hammer.gestures.Tap={name:name,index:100,handler:tapGesture,defaults:{tapMaxTime:250,tapMaxDistance:10,tapAlways:!0,doubleTapDistance:20,doubleTapInterval:300}}}("tap"),Hammer.gestures.Touch={name:"touch",index:-1/0,defaults:{preventDefault:!1,preventMouse:!1},handler:function(ev,inst){return inst.options.preventMouse&&ev.pointerType==POINTER_MOUSE?(ev.stopDetect(),void 0):(inst.options.preventDefault&&ev.preventDefault(),ev.eventType==EVENT_TOUCH&&inst.trigger("touch",ev),void 0)}},function(name){function transformGesture(ev,inst){switch(ev.eventType){case EVENT_START:triggered=!1;break;case EVENT_MOVE:if(ev.touches.length<2)return;var scaleThreshold=Math.abs(1-ev.scale),rotationThreshold=Math.abs(ev.rotation);if(scaleThreshold<inst.options.transformMinScale&&rotationThreshold<inst.options.transformMinRotation)return;Detection.current.name=name,triggered||(inst.trigger(name+"start",ev),triggered=!0),inst.trigger(name,ev),rotationThreshold>inst.options.transformMinRotation&&inst.trigger("rotate",ev),scaleThreshold>inst.options.transformMinScale&&(inst.trigger("pinch",ev),inst.trigger("pinch"+(ev.scale<1?"in":"out"),ev));break;case EVENT_RELEASE:triggered&&ev.changedLength<2&&(inst.trigger(name+"end",ev),triggered=!1)}}var triggered=!1;Hammer.gestures.Transform={name:name,index:45,defaults:{transformMinScale:.01,transformMinRotation:1},handler:transformGesture}}("transform"),"function"==typeof define&&define.amd?define(function(){return Hammer}):"undefined"!=typeof module&&module.exports?module.exports=Hammer:window.Hammer=Hammer}(window);var IScroll=function(window,document,Math){function IScroll(el,options){this.wrapper="string"==typeof el?document.querySelector(el):el,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0};for(var i in options)this.options[i]=options[i];this.translateZ=this.options.HWCompositing&&utils.hasPerspective?" translateZ(0)":"",this.options.useTransition=utils.hasTransition&&this.options.useTransition,this.options.useTransform=utils.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"==this.options.eventPassthrough?!1:this.options.scrollY,this.options.scrollX="horizontal"==this.options.eventPassthrough?!1:this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?utils.ease[this.options.bounceEasing]||utils.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}var rAF=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1e3/60)},utils=function(){function _prefixStyle(style){return _vendor===!1?!1:""===_vendor?style:_vendor+style.charAt(0).toUpperCase()+style.substr(1)}var me={},_elementStyle=document.createElement("div").style,_vendor=function(){for(var transform,vendors=["t","webkitT","MozT","msT","OT"],i=0,l=vendors.length;l>i;i++)if(transform=vendors[i]+"ransform",transform in _elementStyle)return vendors[i].substr(0,vendors[i].length-1);return!1}();me.getTime=Date.now||function(){return(new Date).getTime()},me.extend=function(target,obj){for(var i in obj)target[i]=obj[i]},me.addEvent=function(el,type,fn,capture){el.addEventListener(type,fn,!!capture)},me.removeEvent=function(el,type,fn,capture){el.removeEventListener(type,fn,!!capture)},me.momentum=function(current,start,time,lowerMargin,wrapperSize){var destination,duration,distance=current-start,speed=Math.abs(distance)/time,deceleration=6e-4;return destination=current+speed*speed/(2*deceleration)*(0>distance?-1:1),duration=speed/deceleration,lowerMargin>destination?(destination=wrapperSize?lowerMargin-wrapperSize/2.5*(speed/8):lowerMargin,distance=Math.abs(destination-current),duration=distance/speed):destination>0&&(destination=wrapperSize?wrapperSize/2.5*(speed/8):0,distance=Math.abs(current)+destination,duration=distance/speed),{destination:Math.round(destination),duration:duration}};var _transform=_prefixStyle("transform");return me.extend(me,{hasTransform:_transform!==!1,hasPerspective:_prefixStyle("perspective")in _elementStyle,hasTouch:"ontouchstart"in window,hasPointer:navigator.msPointerEnabled,hasTransition:_prefixStyle("transition")in _elementStyle}),me.isAndroidBrowser=/Android/.test(window.navigator.appVersion)&&/Version\/\d/.test(window.navigator.appVersion),me.extend(me.style={},{transform:_transform,transitionTimingFunction:_prefixStyle("transitionTimingFunction"),transitionDuration:_prefixStyle("transitionDuration"),transformOrigin:_prefixStyle("transformOrigin")}),me.hasClass=function(e,c){var re=new RegExp("(^|\\s)"+c+"(\\s|$)");return re.test(e.className)},me.addClass=function(e,c){if(!me.hasClass(e,c)){var newclass=e.className.split(" ");newclass.push(c),e.className=newclass.join(" ")}},me.removeClass=function(e,c){if(me.hasClass(e,c)){var re=new RegExp("(^|\\s)"+c+"(\\s|$)","g");e.className=e.className.replace(re," ")}},me.offset=function(el){for(var left=-el.offsetLeft,top=-el.offsetTop;el=el.offsetParent;)left-=el.offsetLeft,top-=el.offsetTop;return{left:left,top:top}},me.preventDefaultException=function(el,exceptions){for(var i in exceptions)if(exceptions[i].test(el[i]))return!0;return!1},me.extend(me.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),me.extend(me.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(k){return k*(2-k)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(k){return Math.sqrt(1- --k*k)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(k){var b=4;return(k-=1)*k*((b+1)*k+b)+1}},bounce:{style:"",fn:function(k){return(k/=1)<1/2.75?7.5625*k*k:2/2.75>k?7.5625*(k-=1.5/2.75)*k+.75:2.5/2.75>k?7.5625*(k-=2.25/2.75)*k+.9375:7.5625*(k-=2.625/2.75)*k+.984375}},elastic:{style:"",fn:function(k){var f=.22,e=.4;return 0===k?0:1==k?1:e*Math.pow(2,-10*k)*Math.sin(2*(k-f/4)*Math.PI/f)+1}}}),me.tap=function(e,eventName){var ev=document.createEvent("Event");ev.initEvent(eventName,!0,!0),ev.pageX=e.pageX,ev.pageY=e.pageY,e.target.dispatchEvent(ev)},me.click=function(e){var ev,target=e.target;"SELECT"!=target.tagName&&"INPUT"!=target.tagName&&"TEXTAREA"!=target.tagName&&(ev=document.createEvent("MouseEvents"),ev.initMouseEvent("click",!0,!0,e.view,1,target.screenX,target.screenY,target.clientX,target.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),ev._constructed=!0,target.dispatchEvent(ev))},me}();return IScroll.prototype={version:"5.0.6",_init:function(){this._initEvents()},destroy:function(){this._initEvents(!0),this._execEvent("destroy")},_transitionEnd:function(e){e.target==this.scroller&&(this._transitionTime(0),this.resetPosition(this.options.bounceTime)||this._execEvent("scrollEnd"))},_start:function(e){if(!(1!=utils.eventType[e.type]&&0!==e.button||!this.enabled||this.initiated&&utils.eventType[e.type]!==this.initiated)){!this.options.preventDefault||utils.isAndroidBrowser||utils.preventDefaultException(e.target,this.options.preventDefaultException)||e.preventDefault();var pos,point=e.touches?e.touches[0]:e;this.initiated=utils.eventType[e.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.isAnimating=!1,this.startTime=utils.getTime(),this.options.useTransition&&this.isInTransition&&(pos=this.getComputedPosition(),this._translate(Math.round(pos.x),Math.round(pos.y)),this._execEvent("scrollEnd"),this.isInTransition=!1),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=point.pageX,this.pointY=point.pageY,this._execEvent("beforeScrollStart")}},_move:function(e){if(this.enabled&&utils.eventType[e.type]===this.initiated){this.options.preventDefault&&e.preventDefault();var newX,newY,absDistX,absDistY,point=e.touches?e.touches[0]:e,deltaX=point.pageX-this.pointX,deltaY=point.pageY-this.pointY,timestamp=utils.getTime();if(this.pointX=point.pageX,this.pointY=point.pageY,this.distX+=deltaX,this.distY+=deltaY,absDistX=Math.abs(this.distX),absDistY=Math.abs(this.distY),!(timestamp-this.endTime>300&&10>absDistX&&10>absDistY)){if(this.directionLocked||this.options.freeScroll||(this.directionLocked=absDistX>absDistY+this.options.directionLockThreshold?"h":absDistY>=absDistX+this.options.directionLockThreshold?"v":"n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)e.preventDefault();else if("horizontal"==this.options.eventPassthrough)return this.initiated=!1,void 0;deltaY=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)e.preventDefault();else if("vertical"==this.options.eventPassthrough)return this.initiated=!1,void 0;deltaX=0}deltaX=this.hasHorizontalScroll?deltaX:0,deltaY=this.hasVerticalScroll?deltaY:0,newX=this.x+deltaX,newY=this.y+deltaY,(newX>0||newX<this.maxScrollX)&&(newX=this.options.bounce?this.x+deltaX/3:newX>0?0:this.maxScrollX),(newY>0||newY<this.maxScrollY)&&(newY=this.options.bounce?this.y+deltaY/3:newY>0?0:this.maxScrollY),this.directionX=deltaX>0?-1:0>deltaX?1:0,this.directionY=deltaY>0?-1:0>deltaY?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(newX,newY),timestamp-this.startTime>300&&(this.startTime=timestamp,this.startX=this.x,this.startY=this.y)}}},_end:function(e){if(this.enabled&&utils.eventType[e.type]===this.initiated){this.options.preventDefault&&!utils.preventDefaultException(e.target,this.options.preventDefaultException)&&e.preventDefault();var momentumX,momentumY,duration=(e.changedTouches?e.changedTouches[0]:e,utils.getTime()-this.startTime),newX=Math.round(this.x),newY=Math.round(this.y),distanceX=Math.abs(newX-this.startX),distanceY=Math.abs(newY-this.startY),time=0,easing="";if(this.scrollTo(newX,newY),this.isInTransition=0,this.initiated=0,this.endTime=utils.getTime(),!this.resetPosition(this.options.bounceTime))return this.moved?this._events.flick&&200>duration&&100>distanceX&&100>distanceY?(this._execEvent("flick"),void 0):(this.options.momentum&&300>duration&&(momentumX=this.hasHorizontalScroll?utils.momentum(this.x,this.startX,duration,this.maxScrollX,this.options.bounce?this.wrapperWidth:0):{destination:newX,duration:0},momentumY=this.hasVerticalScroll?utils.momentum(this.y,this.startY,duration,this.maxScrollY,this.options.bounce?this.wrapperHeight:0):{destination:newY,duration:0},newX=momentumX.destination,newY=momentumY.destination,time=Math.max(momentumX.duration,momentumY.duration),this.isInTransition=1),newX!=this.x||newY!=this.y?((newX>0||newX<this.maxScrollX||newY>0||newY<this.maxScrollY)&&(easing=utils.ease.quadratic),this.scrollTo(newX,newY,time,easing),void 0):(this._execEvent("scrollEnd"),void 0)):(this.options.tap&&utils.tap(e,this.options.tap),this.options.click&&utils.click(e),void 0)}},_resize:function(){var that=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){that.refresh()},this.options.resizePolling)},resetPosition:function(time){var x=this.x,y=this.y;return time=time||0,!this.hasHorizontalScroll||this.x>0?x=0:this.x<this.maxScrollX&&(x=this.maxScrollX),!this.hasVerticalScroll||this.y>0?y=0:this.y<this.maxScrollY&&(y=this.maxScrollY),x==this.x&&y==this.y?!1:(this.scrollTo(x,y,time,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=utils.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(type,fn){this._events[type]||(this._events[type]=[]),this._events[type].push(fn)},_execEvent:function(type){if(this._events[type]){var i=0,l=this._events[type].length;if(l)for(;l>i;i++)this._events[type][i].call(this)}},scrollBy:function(x,y,time,easing){x=this.x+x,y=this.y+y,time=time||0,this.scrollTo(x,y,time,easing)},scrollTo:function(x,y,time,easing){easing=easing||utils.ease.circular,!time||this.options.useTransition&&easing.style?(this._transitionTimingFunction(easing.style),this._transitionTime(time),this._translate(x,y)):this._animate(x,y,time,easing.fn)},scrollToElement:function(el,time,offsetX,offsetY,easing){if(el=el.nodeType?el:this.scroller.querySelector(el)){var pos=utils.offset(el);pos.left-=this.wrapperOffset.left,pos.top-=this.wrapperOffset.top,offsetX===!0&&(offsetX=Math.round(el.offsetWidth/2-this.wrapper.offsetWidth/2)),offsetY===!0&&(offsetY=Math.round(el.offsetHeight/2-this.wrapper.offsetHeight/2)),pos.left-=offsetX||0,pos.top-=offsetY||0,pos.left=pos.left>0?0:pos.left<this.maxScrollX?this.maxScrollX:pos.left,pos.top=pos.top>0?0:pos.top<this.maxScrollY?this.maxScrollY:pos.top,time=void 0===time||null===time||"auto"===time?Math.max(Math.abs(this.x-pos.left),Math.abs(this.y-pos.top)):time,this.scrollTo(pos.left,pos.top,time,easing)}},_transitionTime:function(time){time=time||0,this.scrollerStyle[utils.style.transitionDuration]=time+"ms"},_transitionTimingFunction:function(easing){this.scrollerStyle[utils.style.transitionTimingFunction]=easing},_translate:function(x,y){this.options.useTransform?this.scrollerStyle[utils.style.transform]="translate("+x+"px,"+y+"px)"+this.translateZ:(x=Math.round(x),y=Math.round(y),this.scrollerStyle.left=x+"px",this.scrollerStyle.top=y+"px"),this.x=x,this.y=y},_initEvents:function(remove){var eventType=remove?utils.removeEvent:utils.addEvent,target=this.options.bindToWrapper?this.wrapper:window;eventType(window,"orientationchange",this),eventType(window,"resize",this),this.options.click&&eventType(this.wrapper,"click",this,!0),this.options.disableMouse||(eventType(this.wrapper,"mousedown",this),eventType(target,"mousemove",this),eventType(target,"mousecancel",this),eventType(target,"mouseup",this)),utils.hasPointer&&!this.options.disablePointer&&(eventType(this.wrapper,"MSPointerDown",this),eventType(target,"MSPointerMove",this),eventType(target,"MSPointerCancel",this),eventType(target,"MSPointerUp",this)),utils.hasTouch&&!this.options.disableTouch&&(eventType(this.wrapper,"touchstart",this),eventType(target,"touchmove",this),eventType(target,"touchcancel",this),eventType(target,"touchend",this)),eventType(this.scroller,"transitionend",this),eventType(this.scroller,"webkitTransitionEnd",this),eventType(this.scroller,"oTransitionEnd",this),eventType(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var x,y,matrix=window.getComputedStyle(this.scroller,null);return this.options.useTransform?(matrix=matrix[utils.style.transform].split(")")[0].split(", "),x=+(matrix[12]||matrix[4]),y=+(matrix[13]||matrix[5])):(x=+matrix.left.replace(/[^-\d]/g,""),y=+matrix.top.replace(/[^-\d]/g,"")),{x:x,y:y}},_animate:function(destX,destY,duration,easingFn){function step(){var newX,newY,easing,now=utils.getTime();return now>=destTime?(that.isAnimating=!1,that._translate(destX,destY),that.resetPosition(that.options.bounceTime)||that._execEvent("scrollEnd"),void 0):(now=(now-startTime)/duration,easing=easingFn(now),newX=(destX-startX)*easing+startX,newY=(destY-startY)*easing+startY,that._translate(newX,newY),that.isAnimating&&rAF(step),void 0)}var that=this,startX=this.x,startY=this.y,startTime=utils.getTime(),destTime=startTime+duration;this.isAnimating=!0,step()},handleEvent:function(e){switch(e.type){case"touchstart":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"MSPointerUp":case"mouseup":case"touchcancel":case"MSPointerCancel":case"mousecancel":this._end(e);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(e);break;case"DOMMouseScroll":case"mousewheel":this._wheel(e);break;case"keydown":this._key(e);break;case"click":e._constructed||(e.preventDefault(),e.stopPropagation())}}},IScroll.ease=utils.ease,IScroll}(window,document,Math),MicroEvent=function(){};MicroEvent.prototype={on:function(event,fct){this._events=this._events||{},this._events[event]=this._events[event]||[],this._events[event].push(fct)},once:function(event,fct){var self=this,wrapper=function(){return self.off(event,wrapper),fct.apply(null,arguments)};this.on(event,wrapper)},off:function(event,fct){this._events=this._events||{},event in this._events!=!1&&this._events[event].splice(this._events[event].indexOf(fct),1)},emit:function(event){if(this._events=this._events||{},event in this._events!=!1)for(var i=0;i<this._events[event].length;i++)this._events[event][i].apply(this,Array.prototype.slice.call(arguments,1))}},MicroEvent.mixin=function(destObject){for(var props=["on","once","off","emit"],i=0;i<props.length;i++)"function"==typeof destObject?destObject.prototype[props[i]]=MicroEvent.prototype[props[i]]:destObject[props[i]]=MicroEvent.prototype[props[i]]},"undefined"!=typeof module&&"exports"in module&&(module.exports=MicroEvent),window.Modernizr=function(window,document,undefined){function setCss(str){mStyle.cssText=str
}function is(obj,type){return typeof obj===type}function contains(str,substr){return!!~(""+str).indexOf(substr)}function testProps(props,prefixed){for(var i in props){var prop=props[i];if(!contains(prop,"-")&&mStyle[prop]!==undefined)return"pfx"==prefixed?prop:!0}return!1}function testDOMProps(props,obj,elem){for(var i in props){var item=obj[props[i]];if(item!==undefined)return elem===!1?props[i]:is(item,"function")?item.bind(elem||obj):item}return!1}function testPropsAll(prop,prefixed,elem){var ucProp=prop.charAt(0).toUpperCase()+prop.slice(1),props=(prop+" "+cssomPrefixes.join(ucProp+" ")+ucProp).split(" ");return is(prefixed,"string")||is(prefixed,"undefined")?testProps(props,prefixed):(props=(prop+" "+domPrefixes.join(ucProp+" ")+ucProp).split(" "),testDOMProps(props,prefixed,elem))}var inputElem,featureName,hasOwnProp,version="2.6.2",Modernizr={},enableClasses=!0,docElement=document.documentElement,mod="modernizr",modElem=document.createElement(mod),mStyle=modElem.style,prefixes=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),omPrefixes="Webkit Moz O ms",cssomPrefixes=omPrefixes.split(" "),domPrefixes=omPrefixes.toLowerCase().split(" "),ns={svg:"http://www.w3.org/2000/svg"},tests={},classes=[],slice=classes.slice,injectElementWithStyles=function(rule,callback,nodes,testnames){var style,ret,node,docOverflow,div=document.createElement("div"),body=document.body,fakeBody=body||document.createElement("body");if(parseInt(nodes,10))for(;nodes--;)node=document.createElement("div"),node.id=testnames?testnames[nodes]:mod+(nodes+1),div.appendChild(node);return style=["&#173;",'<style id="s',mod,'">',rule,"</style>"].join(""),div.id=mod,(body?div:fakeBody).innerHTML+=style,fakeBody.appendChild(div),body||(fakeBody.style.background="",fakeBody.style.overflow="hidden",docOverflow=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(fakeBody)),ret=callback(div,rule),body?div.parentNode.removeChild(div):(fakeBody.parentNode.removeChild(fakeBody),docElement.style.overflow=docOverflow),!!ret},_hasOwnProperty={}.hasOwnProperty;hasOwnProp=is(_hasOwnProperty,"undefined")||is(_hasOwnProperty.call,"undefined")?function(object,property){return property in object&&is(object.constructor.prototype[property],"undefined")}:function(object,property){return _hasOwnProperty.call(object,property)},Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if("function"!=typeof target)throw new TypeError;var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var F=function(){};F.prototype=target.prototype;var self=new F,result=target.apply(self,args.concat(slice.call(arguments)));return Object(result)===result?result:self}return target.apply(that,args.concat(slice.call(arguments)))};return bound}),tests.canvas=function(){var elem=document.createElement("canvas");return!(!elem.getContext||!elem.getContext("2d"))},tests.borderradius=function(){return testPropsAll("borderRadius")},tests.boxshadow=function(){return testPropsAll("boxShadow")},tests.cssanimations=function(){return testPropsAll("animationName")},tests.csstransforms=function(){return!!testPropsAll("transform")},tests.csstransforms3d=function(){var ret=!!testPropsAll("perspective");return ret&&"webkitPerspective"in docElement.style&&injectElementWithStyles("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(node){ret=9===node.offsetLeft&&3===node.offsetHeight}),ret},tests.csstransitions=function(){return testPropsAll("transition")},tests.svg=function(){return!!document.createElementNS&&!!document.createElementNS(ns.svg,"svg").createSVGRect};for(var feature in tests)hasOwnProp(tests,feature)&&(featureName=feature.toLowerCase(),Modernizr[featureName]=tests[feature](),classes.push((Modernizr[featureName]?"":"no-")+featureName));return Modernizr.addTest=function(feature,test){if("object"==typeof feature)for(var key in feature)hasOwnProp(feature,key)&&Modernizr.addTest(key,feature[key]);else{if(feature=feature.toLowerCase(),Modernizr[feature]!==undefined)return Modernizr;test="function"==typeof test?test():test,"undefined"!=typeof enableClasses&&enableClasses&&(docElement.className+=" "+(test?"":"no-")+feature),Modernizr[feature]=test}return Modernizr},setCss(""),modElem=inputElem=null,function(window,document){function addStyleSheet(ownerDocument,cssText){var p=ownerDocument.createElement("p"),parent=ownerDocument.getElementsByTagName("head")[0]||ownerDocument.documentElement;return p.innerHTML="x<style>"+cssText+"</style>",parent.insertBefore(p.lastChild,parent.firstChild)}function getElements(){var elements=html5.elements;return"string"==typeof elements?elements.split(" "):elements}function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];return data||(data={},expanID++,ownerDocument[expando]=expanID,expandoData[expanID]=data),data}function createElement(nodeName,ownerDocument,data){if(ownerDocument||(ownerDocument=document),supportsUnknownElements)return ownerDocument.createElement(nodeName);data||(data=getExpandoData(ownerDocument));var node;return node=data.cache[nodeName]?data.cache[nodeName].cloneNode():saveClones.test(nodeName)?(data.cache[nodeName]=data.createElem(nodeName)).cloneNode():data.createElem(nodeName),node.canHaveChildren&&!reSkip.test(nodeName)?data.frag.appendChild(node):node}function createDocumentFragment(ownerDocument,data){if(ownerDocument||(ownerDocument=document),supportsUnknownElements)return ownerDocument.createDocumentFragment();data=data||getExpandoData(ownerDocument);for(var clone=data.frag.cloneNode(),i=0,elems=getElements(),l=elems.length;l>i;i++)clone.createElement(elems[i]);return clone}function shivMethods(ownerDocument,data){data.cache||(data.cache={},data.createElem=ownerDocument.createElement,data.createFrag=ownerDocument.createDocumentFragment,data.frag=data.createFrag()),ownerDocument.createElement=function(nodeName){return html5.shivMethods?createElement(nodeName,ownerDocument,data):data.createElem(nodeName)},ownerDocument.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+getElements().join().replace(/\w+/g,function(nodeName){return data.createElem(nodeName),data.frag.createElement(nodeName),'c("'+nodeName+'")'})+");return n}")(html5,data.frag)}function shivDocument(ownerDocument){ownerDocument||(ownerDocument=document);var data=getExpandoData(ownerDocument);return!html5.shivCSS||supportsHtml5Styles||data.hasCSS||(data.hasCSS=!!addStyleSheet(ownerDocument,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),supportsUnknownElements||shivMethods(ownerDocument,data),ownerDocument}var supportsHtml5Styles,supportsUnknownElements,options=window.html5||{},reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,expando="_html5shiv",expanID=0,expandoData={};!function(){try{var a=document.createElement("a");a.innerHTML="<xyz></xyz>",supportsHtml5Styles="hidden"in a,supportsUnknownElements=1==a.childNodes.length||function(){document.createElement("a");var frag=document.createDocumentFragment();return"undefined"==typeof frag.cloneNode||"undefined"==typeof frag.createDocumentFragment||"undefined"==typeof frag.createElement}()}catch(e){supportsHtml5Styles=!0,supportsUnknownElements=!0}}();var html5={elements:options.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:options.shivCSS!==!1,supportsUnknownElements:supportsUnknownElements,shivMethods:options.shivMethods!==!1,type:"default",shivDocument:shivDocument,createElement:createElement,createDocumentFragment:createDocumentFragment};window.html5=html5,shivDocument(document)}(this,document),Modernizr._version=version,Modernizr._prefixes=prefixes,Modernizr._domPrefixes=domPrefixes,Modernizr._cssomPrefixes=cssomPrefixes,Modernizr.testProp=function(prop){return testProps([prop])},Modernizr.testAllProps=testPropsAll,Modernizr.testStyles=injectElementWithStyles,docElement.className=docElement.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(enableClasses?" js "+classes.join(" "):""),Modernizr}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var A,B,l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};B=function(a){function b(a){var e,f,g,a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a};for(f=0;d>f;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;b>f;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var c,b=0;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var m,n,h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var l,o,k=b.createElement("script"),e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var j,e=b.createElement("link"),c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(global,undefined){"use strict";function addFromSetImmediateArguments(args){return tasksByHandle[nextHandle]=partiallyApplied.apply(undefined,args),nextHandle++}function partiallyApplied(handler){var args=[].slice.call(arguments,1);return function(){"function"==typeof handler?handler.apply(undefined,args):new Function(""+handler)()}}function runIfPresent(handle){if(currentlyRunningATask)setTimeout(partiallyApplied(runIfPresent,handle),0);else{var task=tasksByHandle[handle];if(task){currentlyRunningATask=!0;try{task()}finally{clearImmediate(handle),currentlyRunningATask=!1}}}}function clearImmediate(handle){delete tasksByHandle[handle]}function installNextTickImplementation(){setImmediate=function(){var handle=addFromSetImmediateArguments(arguments);return process.nextTick(partiallyApplied(runIfPresent,handle)),handle}}function canUsePostMessage(){if(global.postMessage&&!global.importScripts){var postMessageIsAsynchronous=!0,oldOnMessage=global.onmessage;return global.onmessage=function(){postMessageIsAsynchronous=!1},global.postMessage("","*"),global.onmessage=oldOnMessage,postMessageIsAsynchronous}}function installPostMessageImplementation(){var messagePrefix="setImmediate$"+Math.random()+"$",onGlobalMessage=function(event){event.source===global&&"string"==typeof event.data&&0===event.data.indexOf(messagePrefix)&&runIfPresent(+event.data.slice(messagePrefix.length))};global.addEventListener?global.addEventListener("message",onGlobalMessage,!1):global.attachEvent("onmessage",onGlobalMessage),setImmediate=function(){var handle=addFromSetImmediateArguments(arguments);return global.postMessage(messagePrefix+handle,"*"),handle}}function installMessageChannelImplementation(){var channel=new MessageChannel;channel.port1.onmessage=function(event){var handle=event.data;runIfPresent(handle)},setImmediate=function(){var handle=addFromSetImmediateArguments(arguments);return channel.port2.postMessage(handle),handle}}function installReadyStateChangeImplementation(){var html=doc.documentElement;setImmediate=function(){var handle=addFromSetImmediateArguments(arguments),script=doc.createElement("script");return script.onreadystatechange=function(){runIfPresent(handle),script.onreadystatechange=null,html.removeChild(script),script=null},html.appendChild(script),handle}}function installSetTimeoutImplementation(){setImmediate=function(){var handle=addFromSetImmediateArguments(arguments);return setTimeout(partiallyApplied(runIfPresent,handle),0),handle}}if(!global.setImmediate){var setImmediate,nextHandle=1,tasksByHandle={},currentlyRunningATask=!1,doc=global.document,attachTo=Object.getPrototypeOf&&Object.getPrototypeOf(global);attachTo=attachTo&&attachTo.setTimeout?attachTo:global,"[object process]"==={}.toString.call(global.process)?installNextTickImplementation():canUsePostMessage()?installPostMessageImplementation():global.MessageChannel?installMessageChannelImplementation():doc&&"onreadystatechange"in doc.createElement("script")?installReadyStateChangeImplementation():installSetTimeoutImplementation(),attachTo.setImmediate=setImmediate,attachTo.clearImmediate=clearImmediate}}(new Function("return this")()),function(){function Viewport(){return this.PRE_IOS7_VIEWPORT="initial-scale=1, maximum-scale=1, user-scalable=no",this.IOS7_VIEWPORT="initial-scale=1, maximum-scale=1, user-scalable=no",this.DEFAULT_VIEWPORT="initial-scale=1, maximum-scale=1, user-scalable=no",this.ensureViewportElement(),this.platform={},this.platform.name=this.getPlatformName(),this.platform.version=this.getPlatformVersion(),this}Viewport.prototype.ensureViewportElement=function(){this.viewportElement=document.querySelector("meta[name=viewport]"),this.viewportElement||(this.viewportElement=document.createElement("meta"),this.viewportElement.name="viewport",document.head.appendChild(this.viewportElement))},Viewport.prototype.setup=function(){function isWebView(){return!!(window.cordova||window.phonegap||window.PhoneGap)}this.viewportElement&&"true"!=this.viewportElement.getAttribute("data-no-adjust")&&("ios"==this.platform.name?this.platform.version>=7&&isWebView()?this.viewportElement.setAttribute("content",this.IOS7_VIEWPORT):this.viewportElement.setAttribute("content",this.PRE_IOS7_VIEWPORT):this.viewportElement.setAttribute("content",this.DEFAULT_VIEWPORT))},Viewport.prototype.getPlatformName=function(){return navigator.userAgent.match(/Android/i)?"android":navigator.userAgent.match(/iPhone|iPad|iPod/i)?"ios":void 0},Viewport.prototype.getPlatformVersion=function(){var start=window.navigator.userAgent.indexOf("OS ");return window.Number(window.navigator.userAgent.substr(start+3,3).replace("_","."))},window.Viewport=Viewport}(),function(module){try{module=angular.module("templates-main")}catch(err){module=angular.module("templates-main",[])}module.run(["$templateCache",function($templateCache){"use strict";$templateCache.put("templates/back_button.tpl",'<span \n  class="toolbar-button--quiet {{modifierTemplater(\'toolbar-button--*\')}}" \n  ng-click="$root.ons.findParentComponentUntil(\'ons-navigator\', $event).popPage({cancelIfRunning: true})"\n  ng-show="showBackButton"\n  style="height: 44px; line-height: 0; padding: 0 10px 0 0; position: relative;">\n  \n  <i \n    class="ion-ios-arrow-back ons-back-button__icon" \n    style="vertical-align: top; background-color: transparent; height: 44px; line-height: 44px; font-size: 36px; margin-left: 8px; margin-right: 2px; width: 16px; display: inline-block; padding-top: 1px;"></i>\n\n  <span \n    style="vertical-align: top; display: inline-block; line-height: 44px; height: 44px;" \n    class="back-button__label"></span>\n</span>\n')}])}(),function(module){try{module=angular.module("templates-main")}catch(err){module=angular.module("templates-main",[])}module.run(["$templateCache",function($templateCache){"use strict";$templateCache.put("templates/button.tpl",'<span class="label ons-button-inner"></span>\n<span class="spinner button__spinner {{modifierTemplater(\'button--*__spinner\')}}"></span>\n')}])}(),function(module){try{module=angular.module("templates-main")}catch(err){module=angular.module("templates-main",[])}module.run(["$templateCache",function($templateCache){"use strict";$templateCache.put("templates/dialog.tpl",'<div class="dialog-mask"></div>\n<div class="dialog {{ modifierTemplater(\'dialog--*\') }}"></div>\n</div>\n')}])}(),function(module){try{module=angular.module("templates-main")}catch(err){module=angular.module("templates-main",[])}module.run(["$templateCache",function($templateCache){"use strict";$templateCache.put("templates/icon.tpl",'<i class="fa fa-{{icon}} fa-{{spin}} fa-{{fixedWidth}} fa-rotate-{{rotate}} fa-flip-{{flip}}" ng-class="sizeClass" ng-style="style"></i>\n')}])}(),function(module){try{module=angular.module("templates-main")}catch(err){module=angular.module("templates-main",[])}module.run(["$templateCache",function($templateCache){"use strict";$templateCache.put("templates/popover.tpl",'<div class="popover-mask"></div>\n<div class="popover popover--{{ direction }} {{ modifierTemplater(\'popover--*\') }}">\n  <div class="popover__content {{ modifierTemplater(\'popover__content--*\') }}"></div>\n  <div class="popover__{{ arrowPosition }}-arrow"></div>\n</div>\n')}])}(),function(module){try{module=angular.module("templates-main")}catch(err){module=angular.module("templates-main",[])}module.run(["$templateCache",function($templateCache){"use strict";$templateCache.put("templates/row.tpl",'<div class="row row-{{align}} ons-row-inner"></div>\n')}])}(),function(module){try{module=angular.module("templates-main")}catch(err){module=angular.module("templates-main",[])}module.run(["$templateCache",function($templateCache){"use strict";$templateCache.put("templates/sliding_menu.tpl",'<div class="onsen-sliding-menu__menu ons-sliding-menu-inner"></div>\n<div class="onsen-sliding-menu__main ons-sliding-menu-inner"></div>\n')}])}(),function(module){try{module=angular.module("templates-main")}catch(err){module=angular.module("templates-main",[])}module.run(["$templateCache",function($templateCache){"use strict";$templateCache.put("templates/split_view.tpl",'<div class="onsen-split-view__secondary full-screen ons-split-view-inner"></div>\n<div class="onsen-split-view__main full-screen ons-split-view-inner"></div>\n')}])}(),function(module){try{module=angular.module("templates-main")}catch(err){module=angular.module("templates-main",[])}module.run(["$templateCache",function($templateCache){"use strict";$templateCache.put("templates/switch.tpl",'<label class="switch {{modifierTemplater(\'switch--*\')}}">\n  <input type="checkbox" class="switch__input {{modifierTemplater(\'switch--*__input\')}}" ng-model="model">\n  <div class="switch__toggle {{modifierTemplater(\'switch--*__toggle\')}}"></div>\n</label>\n')}])}(),function(module){try{module=angular.module("templates-main")}catch(err){module=angular.module("templates-main",[])}module.run(["$templateCache",function($templateCache){"use strict";$templateCache.put("templates/tab.tpl",'<input type="radio" name="tab-bar-{{tabbarId}}" style="display: none">\n<button class="tab-bar__button tab-bar-inner {{tabbarModifierTemplater(\'tab-bar--*__button\')}} {{modifierTemplater(\'tab-bar__button--*\')}}" ng-click="tryToChange()">\n</button>\n')}])}(),function(module){try{module=angular.module("templates-main")}catch(err){module=angular.module("templates-main",[])}module.run(["$templateCache",function($templateCache){"use strict";$templateCache.put("templates/tab_bar.tpl",'<div class="ons-tab-bar__content tab-bar__content"></div>\n<div ng-hide="hideTabs" class="tab-bar ons-tab-bar__footer {{modifierTemplater(\'tab-bar--*\')}} ons-tabbar-inner"></div>\n')}])}(),function(module){try{module=angular.module("templates-main")}catch(err){module=angular.module("templates-main",[])}module.run(["$templateCache",function($templateCache){"use strict";$templateCache.put("templates/toolbar_button.tpl","<span class=\"toolbar-button {{modifierTemplater('toolbar-button--*')}} navigation-bar__line-height\" ng-transclude></span>\n")}])}(),window.DoorLock=function(){var DoorLock=function(options){options=options||{},this._lockList=[],this._waitList=[],this._log=options.log||function(){}};return DoorLock.generateId=function(){var i=0;return function(){return i++}}(),DoorLock.prototype={lock:function(){var self=this,unlock=function(){self._unlock(unlock)};return unlock.id=DoorLock.generateId(),this._lockList.push(unlock),this._log("lock: "+unlock.id),unlock},_unlock:function(fn){var index=this._lockList.indexOf(fn);if(-1===index)throw new Error("This function is not registered in the lock list.");this._lockList.splice(index,1),this._log("unlock: "+fn.id),this._tryToFreeWaitList()},_tryToFreeWaitList:function(){for(;!this.isLocked()&&this._waitList.length>0;)this._waitList.shift()()},waitUnlock:function(callback){if(!(callback instanceof Function))throw new Error("The callback param must be a function.");this.isLocked()?this._waitList.push(callback):callback()},isLocked:function(){return this._lockList.length>0}},DoorLock}(),window.ons=function(){"use strict";function waitDeviceReady(){var unlockDeviceReady=ons._readyLock.lock();window.addEventListener("DOMContentLoaded",function(){ons.isWebView()?window.document.addEventListener("deviceready",unlockDeviceReady,!1):unlockDeviceReady()},!1)}function waitOnsenUILoad(){var unlockOnsenUI=ons._readyLock.lock();module.run(["$compile","$rootScope","$onsen",function($compile,$rootScope){if("loading"===document.readyState||"uninitialized"==document.readyState)window.addEventListener("DOMContentLoaded",function(){document.body.appendChild(document.createElement("ons-dummy-for-init"))});else{if(!document.body)throw new Error("Invalid initialization state.");document.body.appendChild(document.createElement("ons-dummy-for-init"))}$rootScope.$on("$ons-ready",unlockOnsenUI)}])}function initAngularModule(){module.value("$onsGlobal",ons),module.run(["$compile","$rootScope","$onsen","$q",function($compile,$rootScope,$onsen,$q){ons._onsenService=$onsen,ons._qService=$q,$rootScope.ons=window.ons,$rootScope.console=window.console,$rootScope.alert=window.alert,ons.$compile=$compile}])}function initKeyboardEvents(){ons.softwareKeyboard=new MicroEvent,ons.softwareKeyboard._visible=!1;var onShow=function(){ons.softwareKeyboard._visible=!0,ons.softwareKeyboard.emit("show")},onHide=function(){ons.softwareKeyboard._visible=!1,ons.softwareKeyboard.emit("hide")},bindEvents=function(){return"undefined"!=typeof Keyboard?(Keyboard.onshow=onShow,Keyboard.onhide=onHide,ons.softwareKeyboard.emit("init",{visible:Keyboard.isVisible}),!0):"undefined"!=typeof cordova.plugins&&"undefined"!=typeof cordova.plugins.Keyboard?(window.addEventListener("native.keyboardshow",onShow),window.addEventListener("native.keyboardhide",onHide),ons.softwareKeyboard.emit("init",{visible:cordova.plugins.Keyboard.isVisible}),!0):!1},noPluginError=function(){console.warn("ons-keyboard: Cordova Keyboard plugin is not present.")};document.addEventListener("deviceready",function(){bindEvents()||((document.querySelector("[ons-keyboard-active]")||document.querySelector("[ons-keyboard-inactive]"))&&noPluginError(),ons.softwareKeyboard.on=noPluginError)})}function createOnsenFacade(){var ons={_readyLock:new DoorLock,_onsenService:null,_config:{autoStatusBarFill:!0},_unlockersDict:{},componentBase:window,bootstrap:function(name,deps){angular.isArray(name)&&(deps=name,name=void 0),name||(name="myOnsenApp"),deps=["onsen"].concat(angular.isArray(deps)?deps:[]);var module=angular.module(name,deps),doc=window.document;if("loading"==doc.readyState||"uninitialized"==doc.readyState||"interactive"==doc.readyState)doc.addEventListener("DOMContentLoaded",function(){angular.bootstrap(doc.documentElement,[name])},!1);else{if(!doc.documentElement)throw new Error("Invalid state");angular.bootstrap(doc.documentElement,[name])}return module},enableAutoStatusBarFill:function(){if(this.isReady())throw new Error("This method must be called before ons.isReady() is true.");this._config.autoStatusBarFill=!0},disableAutoStatusBarFill:function(){if(this.isReady())throw new Error("This method must be called before ons.isReady() is true.");this._config.autoStatusBarFill=!1},findParentComponentUntil:function(name,dom){var element;return dom instanceof HTMLElement?element=angular.element(dom):dom instanceof angular.element?element=dom:dom.target&&(element=angular.element(dom.target)),element.inheritedData(name)},setDefaultDeviceBackButtonListener:function(listener){this._getOnsenService().getDefaultDeviceBackButtonHandler().setListener(listener)},disableDeviceBackButtonHandler:function(){this._getOnsenService().DeviceBackButtonHandler.disable()},enableDeviceBackButtonHandler:function(){this._getOnsenService().DeviceBackButtonHandler.enable()},findComponent:function(selector,dom){var target=(dom?dom:document).querySelector(selector);return target?angular.element(target).data(target.nodeName.toLowerCase())||null:null},isReady:function(){return!ons._readyLock.isLocked()},compile:function(dom){if(!ons.$compile)throw new Error("ons.$compile() is not ready. Wait for initialization with ons.ready().");if(!(dom instanceof HTMLElement))throw new Error("First argument must be an instance of HTMLElement.");var scope=angular.element(dom).scope();if(!scope)throw new Error("AngularJS Scope is null. Argument DOM element must be attached in DOM document.");ons.$compile(dom)(scope)},_getOnsenService:function(){if(!this._onsenService)throw new Error("$onsen is not loaded, wait for ons.ready().");return this._onsenService},ready:function(callback){if(callback instanceof Function)ons.isReady()?callback():ons._readyLock.waitUnlock(callback);else if(angular.isArray(callback)&&arguments[1]instanceof Function){var dependencies=callback;callback=arguments[1],ons.ready(function(){var $onsen=ons._getOnsenService();$onsen.waitForVariables(dependencies,callback)})}},isWebView:function(){if("loading"===document.readyState||"uninitialized"==document.readyState)throw new Error("isWebView() method is available after dom contents loaded.");return!!(window.cordova||window.phonegap||window.PhoneGap)},createAlertDialog:function(page,options){if(options=options||{},!page)throw new Error("Page url must be defined.");var alertDialog=angular.element("<ons-alert-dialog>"),$onsen=this._getOnsenService();return angular.element(document.body).append(angular.element(alertDialog)),$onsen.getPageHTMLAsync(page).then(function(html){var div=document.createElement("div");div.innerHTML=html;for(var el=angular.element(div.querySelector("ons-alert-dialog")),attrs=el.prop("attributes"),i=0,l=attrs.length;l>i;i++)alertDialog.attr(attrs[i].name,attrs[i].value);alertDialog.html(el.html());var parentScope;return options.parentScope?(parentScope=options.parentScope.$new(),ons.$compile(alertDialog)(parentScope)):ons.compile(alertDialog[0]),el.attr("disabled")&&alertDialog.attr("disabled","disabled"),parentScope&&(alertDialog.data("ons-alert-dialog")._parentScope=parentScope),alertDialog.data("ons-alert-dialog")})},createDialog:function(page,options){if(options=options||{},!page)throw new Error("Page url must be defined.");var dialog=angular.element("<ons-dialog>"),$onsen=this._getOnsenService();return angular.element(document.body).append(angular.element(dialog)),$onsen.getPageHTMLAsync(page).then(function(html){var div=document.createElement("div");div.innerHTML=html;for(var el=angular.element(div.querySelector("ons-dialog")),attrs=el.prop("attributes"),i=0,l=attrs.length;l>i;i++)dialog.attr(attrs[i].name,attrs[i].value);dialog.html(el.html());var parentScope;options.parentScope?(parentScope=options.parentScope.$new(),ons.$compile(dialog)(parentScope)):ons.compile(dialog[0]),el.attr("disabled")&&dialog.attr("disabled","disabled");var deferred=ons._qService.defer();return dialog.on("ons-dialog:init",function(e){var child=dialog[0].querySelector(".dialog");if(el[0].hasAttribute("style")){var parentStyle=el[0].getAttribute("style"),childStyle=child.getAttribute("style"),newStyle=function(a,b){var c=(";"===a.substr(-1)?a:a+";")+(";"===b.substr(-1)?b:b+";");return c}(parentStyle,childStyle);child.setAttribute("style",newStyle)}parentScope&&(e.component._parentScope=parentScope),deferred.resolve(e.component)}),deferred.promise})},createPopover:function(page,options){if(options=options||{},!page)throw new Error("Page url must be defined.");var popover=angular.element("<ons-popover>"),$onsen=this._getOnsenService();return angular.element(document.body).append(angular.element(popover)),$onsen.getPageHTMLAsync(page).then(function(html){var div=document.createElement("div");div.innerHTML=html;for(var el=angular.element(div.querySelector("ons-popover")),attrs=el.prop("attributes"),i=0,l=attrs.length;l>i;i++)popover.attr(attrs[i].name,attrs[i].value);popover.html(el.html());var parentScope;options.parentScope?(parentScope=options.parentScope.$new(),ons.$compile(popover)(parentScope)):ons.compile(popover[0]),el.attr("disabled")&&popover.attr("disabled","disabled");var deferred=ons._qService.defer();return popover.on("ons-popover:init",function(e){var child=popover[0].querySelector(".popover");if(el[0].hasAttribute("style")){var parentStyle=el[0].getAttribute("style"),childStyle=child.getAttribute("style"),newStyle=function(a,b){var c=(";"===a.substr(-1)?a:a+";")+(";"===b.substr(-1)?b:b+";");return c}(parentStyle,childStyle);child.setAttribute("style",newStyle)}parentScope&&(e.component._parentScope=parentScope),deferred.resolve(e.component)}),deferred.promise})}};return ons}var module=angular.module("onsen",["templates-main"]);angular.module("onsen.directives",["onsen"]);var ons=createOnsenFacade();return initKeyboardEvents(),waitDeviceReady(),waitOnsenUILoad(),initAngularModule(),ons
}(),function(){"use strict";var module=angular.module("onsen");module.factory("AlertDialogView",["$onsen","DialogAnimator","SlideDialogAnimator","AndroidAlertDialogAnimator","IOSAlertDialogAnimator",function($onsen,DialogAnimator,SlideDialogAnimator,AndroidAlertDialogAnimator,IOSAlertDialogAnimator){var AlertDialogView=Class.extend({init:function(scope,element,attrs){if(this._scope=scope,this._element=element,this._attrs=attrs,this._element.css({display:"none",zIndex:20001}),this._dialog=element,this._visible=!1,this._doorLock=new DoorLock,this._animation=AlertDialogView._animatorDict["undefined"!=typeof attrs.animation?attrs.animation:"default"],!this._animation)throw new Error("No such animation: "+attrs.animation);this._deviceBackButtonHandler=$onsen.DeviceBackButtonHandler.create(this._element,this._onDeviceBackButton.bind(this)),this._createMask(attrs.maskColor),this._scope.$on("$destroy",this._destroy.bind(this))},show:function(options){options=options||{};var cancel=!1,callback=options.callback||function(){};this.emit("preshow",{alertDialog:this,cancel:function(){cancel=!0}}),cancel||this._doorLock.waitUnlock(function(){var unlock=this._doorLock.lock(),animation=this._animation;this._mask.css("display","block"),this._mask.css("opacity",1),this._element.css("display","block"),options.animation&&(animation=AlertDialogView._animatorDict[options.animation]),animation.show(this,function(){this._visible=!0,unlock(),this.emit("postshow",{alertDialog:this}),callback()}.bind(this))}.bind(this))},hide:function(options){options=options||{};var cancel=!1,callback=options.callback||function(){};this.emit("prehide",{alertDialog:this,cancel:function(){cancel=!0}}),cancel||this._doorLock.waitUnlock(function(){var unlock=this._doorLock.lock(),animation=this._animation;options.animation&&(animation=AlertDialogView._animatorDict[options.animation]),animation.hide(this,function(){this._element.css("display","none"),this._mask.css("display","none"),this._visible=!1,unlock(),this.emit("posthide",{alertDialog:this}),callback()}.bind(this))}.bind(this))},isShown:function(){return this._visible},destroy:function(){this._parentScope?(this._parentScope.$destroy(),this._parentScope=null):this._scope.$destroy()},_destroy:function(){this.emit("destroy"),this._mask.off(),this._element.remove(),this._mask.remove(),this._deviceBackButtonHandler.destroy(),this._deviceBackButtonHandler=this._scope=this._attrs=this._element=this._mask=null},setDisabled:function(disabled){if("boolean"!=typeof disabled)throw new Error("Argument must be a boolean.");disabled?this._element.attr("disabled",!0):this._element.removeAttr("disabled")},isDisabled:function(){return this._element[0].hasAttribute("disabled")},setCancelable:function(cancelable){if("boolean"!=typeof cancelable)throw new Error("Argument must be a boolean.");cancelable?this._element.attr("cancelable",!0):this._element.removeAttr("cancelable")},isCancelable:function(){return this._element[0].hasAttribute("cancelable")},_cancel:function(){this.isCancelable()&&this.hide({callback:function(){this.emit("cancel")}.bind(this)})},_onDeviceBackButton:function(event){this.isCancelable()?this._cancel.bind(this)():event.callParentHandler()},_createMask:function(color){this._mask=angular.element("<div>").addClass("alert-dialog-mask").css({zIndex:2e4,display:"none"}),this._mask.on("click",this._cancel.bind(this)),color&&this._mask.css("background-color",color),angular.element(document.body).append(this._mask)}});return AlertDialogView._animatorDict={"default":$onsen.isAndroid()?new AndroidAlertDialogAnimator:new IOSAlertDialogAnimator,fade:$onsen.isAndroid()?new AndroidAlertDialogAnimator:new IOSAlertDialogAnimator,slide:new SlideDialogAnimator,none:new DialogAnimator},AlertDialogView.registerAnimator=function(name,animator){if(!(animator instanceof DialogAnimator))throw new Error('"animator" param must be an instance of DialogAnimator');this._animatorDict[name]=animator},MicroEvent.mixin(AlertDialogView),AlertDialogView}])}(),function(){"use strict;";var module=angular.module("onsen");module.factory("AndroidAlertDialogAnimator",["DialogAnimator",function(DialogAnimator){var AndroidAlertDialogAnimator=DialogAnimator.extend({timing:"cubic-bezier(.1, .7, .4, 1)",duration:.2,init:function(options){options=options||{},this.timing=options.timing||this.timing,this.duration=void 0!==options.duration?options.duration:this.duration},show:function(dialog,callback){callback=callback?callback:function(){},animit.runAll(animit(dialog._mask[0]).queue({opacity:0}).queue({opacity:1},{duration:this.duration,timing:this.timing}),animit(dialog._dialog[0]).queue({css:{transform:"translate3d(-50%, -50%, 0) scale3d(0.9, 0.9, 1.0)",opacity:0},duration:0}).queue({css:{transform:"translate3d(-50%, -50%, 0) scale3d(1.0, 1.0, 1.0)",opacity:1},duration:this.duration,timing:this.timing}).resetStyle().queue(function(done){callback(),done()}))},hide:function(dialog,callback){callback=callback?callback:function(){},animit.runAll(animit(dialog._mask[0]).queue({opacity:1}).queue({opacity:0},{duration:this.duration,timing:this.timing}),animit(dialog._dialog[0]).queue({css:{transform:"translate3d(-50%, -50%, 0) scale3d(1.0, 1.0, 1.0)",opacity:1},duration:0}).queue({css:{transform:"translate3d(-50%, -50%, 0) scale3d(0.9, 0.9, 1.0)",opacity:0},duration:this.duration,timing:this.timing}).resetStyle().queue(function(done){callback(),done()}))}});return AndroidAlertDialogAnimator}])}(),function(){"use strict;";var module=angular.module("onsen");module.factory("AndroidDialogAnimator",["DialogAnimator",function(DialogAnimator){var AndroidDialogAnimator=DialogAnimator.extend({timing:"ease-in-out",duration:.3,init:function(options){options=options||{},this.timing=options.timing||this.timing,this.duration=void 0!==options.duration?options.duration:this.duration},show:function(dialog,callback){callback=callback?callback:function(){},animit.runAll(animit(dialog._mask[0]).queue({opacity:0}).queue({opacity:1},{duration:this.duration,timing:this.timing}),animit(dialog._dialog[0]).queue({css:{transform:"translate3d(-50%, -60%, 0)",opacity:0},duration:0}).queue({css:{transform:"translate3d(-50%, -50%, 0)",opacity:1},duration:this.duration,timing:this.timing}).resetStyle().queue(function(done){callback(),done()}))},hide:function(dialog,callback){callback=callback?callback:function(){},animit.runAll(animit(dialog._mask[0]).queue({opacity:1}).queue({opacity:0},{duration:this.duration,timing:this.timing}),animit(dialog._dialog[0]).queue({css:{transform:"translate3d(-50%, -50%, 0)",opacity:1},duration:0}).queue({css:{transform:"translate3d(-50%, -60%, 0)",opacity:0},duration:this.duration,timing:this.timing}).resetStyle().queue(function(done){callback(),done()}))}});return AndroidDialogAnimator}])}(),function(){"use strict";var module=angular.module("onsen");module.factory("ButtonView",["$onsen",function(){var ButtonView=Class.extend({init:function(scope,element,attrs){this._element=element,this._scope=scope,this._attrs=attrs},startSpin:function(){this._attrs.$set("shouldSpin","true")},stopSpin:function(){this._attrs.$set("shouldSpin","false")},isSpinning:function(){return"true"===this._attrs.shouldSpin},setSpinAnimation:function(animation){this._scope.$apply(function(){var animations=["slide-left","slide-right","slide-up","slide-down","expand-left","expand-right","expand-up","expand-down","zoom-out","zoom-in"];animations.indexOf(animation)<0&&(console.warn("Animation "+animation+"doesn't exist."),animation="slide-left"),this._scope.animation=animation}.bind(this))},isDisabled:function(){return this._element[0].hasAttribute("disabled")},setDisabled:function(disabled){if("boolean"!=typeof disabled)throw new Error("Argument must be a boolean.");disabled?this._element[0].setAttribute("disabled",""):this._element[0].removeAttribute("disabled")}});return MicroEvent.mixin(ButtonView),ButtonView}])}(),function(){"use strict;";var module=angular.module("onsen");module.factory("CarouselView",["$onsen",function(){var VerticalModeTrait={_getScrollDelta:function(event){return event.gesture.deltaY},_getScrollVelocity:function(event){return event.gesture.velocityY},_getElementSize:function(){return this._currentElementSize||(this._currentElementSize=this._element[0].getBoundingClientRect().height),this._currentElementSize},_generateScrollTransform:function(scroll){return"translate3d(0px, "+-scroll+"px, 0px)"},_layoutCarouselItems:function(){for(var children=this._getCarouselItemElements(),sizeAttr=this._getCarouselItemSizeAttr(),sizeInfo=this._decomposeSizeString(sizeAttr),i=0;i<children.length;i++)angular.element(children[i]).css({position:"absolute",height:sizeAttr,width:"100%",visibility:"visible",left:"0px",top:i*sizeInfo.number+sizeInfo.unit})}},HorizontalModeTrait={_getScrollDelta:function(event){return event.gesture.deltaX},_getScrollVelocity:function(event){return event.gesture.velocityX},_getElementSize:function(){return this._currentElementSize||(this._currentElementSize=this._element[0].getBoundingClientRect().width),this._currentElementSize},_generateScrollTransform:function(scroll){return"translate3d("+-scroll+"px, 0px, 0px)"},_layoutCarouselItems:function(){for(var children=this._getCarouselItemElements(),sizeAttr=this._getCarouselItemSizeAttr(),sizeInfo=this._decomposeSizeString(sizeAttr),i=0;i<children.length;i++)angular.element(children[i]).css({position:"absolute",width:sizeAttr,height:"100%",top:"0px",visibility:"visible",left:i*sizeInfo.number+sizeInfo.unit})}},CarouselView=Class.extend({_element:void 0,_scope:void 0,_doorLock:void 0,_scroll:void 0,init:function(scope,element,attrs){this._element=element,this._scope=scope,this._attrs=attrs,this._doorLock=new DoorLock,this._scroll=0,this._lastActiveIndex=0,this._bindedOnDrag=this._onDrag.bind(this),this._bindedOnDragEnd=this._onDragEnd.bind(this),this._bindedOnResize=this._onResize.bind(this),this._mixin(this._isVertical()?VerticalModeTrait:HorizontalModeTrait),this._prepareEventListeners(),this._layoutCarouselItems(),this._setupInitialIndex(),this._attrs.$observe("direction",this._onDirectionChange.bind(this)),this._scope.$on("$destroy",this._destroy.bind(this)),this._saveLastState()},_onResize:function(){this.refresh()},_onDirectionChange:function(){this._isVertical()?this._element.css({overflowX:"auto",overflowY:""}):this._element.css({overflowX:"",overflowY:"auto"})},_saveLastState:function(){this._lastState={elementSize:this._getCarouselItemSize(),carouselElementCount:this._getCarouselItemCount(),width:this._getCarouselItemSize()*this._getCarouselItemCount()}},_getCarouselItemSize:function(){var sizeAttr=this._getCarouselItemSizeAttr(),sizeInfo=this._decomposeSizeString(sizeAttr),elementSize=this._getElementSize();if("%"===sizeInfo.unit)return Math.round(sizeInfo.number/100*elementSize);if("px"===sizeInfo.unit)return sizeInfo.number;throw new Error("Invalid state")},_getInitialIndex:function(){var index=parseInt(this._element.attr("initial-index"),10);return"number"!=typeof index||isNaN(index)?0:Math.max(Math.min(index,this._getCarouselItemCount()-1),0)},_getCarouselItemSizeAttr:function(){var attrName="item-"+(this._isVertical()?"height":"width"),itemSizeAttr=(""+this._element.attr(attrName)).trim();return itemSizeAttr.match(/^\d+(px|%)$/)?itemSizeAttr:"100%"},_decomposeSizeString:function(size){var matches=size.match(/^(\d+)(px|%)/);return{number:parseInt(matches[1],10),unit:matches[2]}},_setupInitialIndex:function(){this._scroll=this._getCarouselItemSize()*this._getInitialIndex(),this._lastActiveIndex=this._getInitialIndex(),this._scrollTo(this._scroll)},setSwipeable:function(swipeable){swipeable?this._element[0].setAttribute("swipeable",""):this._element[0].removeAttribute("swipeable")},isSwipeable:function(){return this._element[0].hasAttribute("swipeable")},setAutoScrollRatio:function(ratio){if(0>ratio||ratio>1)throw new Error("Invalid ratio.");this._element[0].setAttribute("auto-scroll-ratio",ratio)},getAutoScrollRatio:function(){var attr=this._element[0].getAttribute("auto-scroll-ratio");if(!attr)return.5;var scrollRatio=parseFloat(attr);if(0>scrollRatio||scrollRatio>1)throw new Error("Invalid ratio.");return isNaN(scrollRatio)?.5:scrollRatio},setActiveCarouselItemIndex:function(index,options){options=options||{},index=Math.max(0,Math.min(index,this._getCarouselItemCount()-1));var scroll=this._getCarouselItemSize()*index,max=this._calculateMaxScroll();this._scroll=Math.max(0,Math.min(max,scroll)),this._scrollTo(this._scroll,{animate:"none"!==options.animation,callback:options.callback}),this._tryFirePostChangeEvent()},getActiveCarouselItemIndex:function(){var scroll=this._scroll,count=this._getCarouselItemCount(),size=this._getCarouselItemSize();if(0>scroll)return 0;for(var i=0;count>i;i++)if(scroll>=size*i&&size*(i+1)>scroll)return i;return i},next:function(options){this.setActiveCarouselItemIndex(this.getActiveCarouselItemIndex()+1,options)},prev:function(options){this.setActiveCarouselItemIndex(this.getActiveCarouselItemIndex()-1,options)},setAutoScrollEnabled:function(enabled){enabled?this._element[0].setAttribute("auto-scroll",""):this._element[0].removeAttribute("auto-scroll")},isAutoScrollEnabled:function(){return this._element[0].hasAttribute("auto-scroll")},setDisabled:function(disabled){disabled?this._element[0].setAttribute("disabled",""):this._element[0].removeAttribute("disabled")},isDisabled:function(){return this._element[0].hasAttribute("disabled")},setOverscrollable:function(scrollable){scrollable?this._element[0].setAttribute("overscrollable",""):this._element[0].removeAttribute("overscrollable")},_mixin:function(trait){Object.keys(trait).forEach(function(key){this[key]=trait[key]}.bind(this))},_isEnabledChangeEvent:function(){var elementSize=this._getElementSize(),carouselItemSize=this._getCarouselItemSize();return this.isAutoScrollEnabled()&&elementSize===carouselItemSize},_isVertical:function(){return"vertical"===this._element.attr("direction")},_prepareEventListeners:function(){this._hammer=new Hammer(this._element[0],{dragMinDistance:1}),this._hammer.on("drag dragleft dragright dragup dragdown swipe swipeleft swiperight swipeup swipedown",this._bindedOnDrag),this._hammer.on("dragend",this._bindedOnDragEnd),angular.element(window).on("resize",this._bindedOnResize)},_tryFirePostChangeEvent:function(){var currentIndex=this.getActiveCarouselItemIndex();if(this._lastActiveIndex!==currentIndex){var lastActiveIndex=this._lastActiveIndex;this._lastActiveIndex=currentIndex,this.emit("postchange",{carousel:this,activeIndex:currentIndex,lastActiveIndex:lastActiveIndex})}},_onDrag:function(event){if(this.isSwipeable()){var direction=event.gesture.direction;if((!this._isVertical()||"left"!==direction&&"right"!==direction)&&(this._isVertical()||"up"!==direction&&"down"!==direction)){event.stopPropagation(),this._lastDragEvent=event;var scroll=this._scroll-this._getScrollDelta(event);this._scrollTo(scroll),event.gesture.preventDefault(),this._tryFirePostChangeEvent()}}},_onDragEnd:function(event){if(this._currentElementSize=void 0,this._carouselItemElements=void 0,this.isSwipeable()){if(this._scroll=this._scroll-this._getScrollDelta(event),0!==this._getScrollDelta(event)&&event.stopPropagation(),this._isOverScroll(this._scroll)){var waitForAction=!1;this.emit("overscroll",{carousel:this,activeIndex:this.getActiveCarouselItemIndex(),direction:this._getOverScrollDirection(),waitToReturn:function(promise){waitForAction=!0,promise.then(function(){this._scrollToKillOverScroll()}.bind(this))}.bind(this)}),waitForAction||this._scrollToKillOverScroll()}else this._startMomemtumScroll(event);this._lastDragEvent=null,event.gesture.preventDefault()}},_getTouchEvents:function(){var EVENTS=["drag","dragstart","dragend","dragup","dragdown","dragleft","dragright","swipe","swipeup","swipedown","swipeleft","swiperight"];return EVENTS.join(" ")},isOverscrollable:function(){return this._element[0].hasAttribute("overscrollable")},_startMomemtumScroll:function(){if(this._lastDragEvent){var velocity=this._getScrollVelocity(this._lastDragEvent),duration=.3,scrollDelta=100*duration*velocity,scroll=this._scroll+(this._getScrollDelta(this._lastDragEvent)>0?-scrollDelta:scrollDelta);scroll=this._normalizeScrollPosition(scroll),this._scroll=scroll,animit(this._getCarouselItemElements()).queue({transform:this._generateScrollTransform(this._scroll)},{duration:duration,timing:"cubic-bezier(.1, .7, .1, 1)"}).queue(function(done){done(),this._tryFirePostChangeEvent()}.bind(this)).play()}},_normalizeScrollPosition:function(scroll){var max=this._calculateMaxScroll();if(this.isAutoScrollEnabled()){for(var arr=[],size=this._getCarouselItemSize(),i=0;i<this._getCarouselItemCount();i++)max>=i*size&&arr.push(i*size);arr.push(max),arr.sort(function(left,right){return left=Math.abs(left-scroll),right=Math.abs(right-scroll),left-right}),arr=arr.filter(function(item,pos){return!pos||item!=arr[pos-1]});var lastScroll=this._lastActiveIndex*size,scrollRatio=Math.abs(scroll-lastScroll)/size;return scrollRatio<=this.getAutoScrollRatio()?lastScroll:scrollRatio>this.getAutoScrollRatio()&&1>scrollRatio&&arr[0]===lastScroll&&arr.length>1?arr[1]:arr[0]}return Math.max(0,Math.min(max,scroll))},_getCarouselItemElements:function(){for(var nodeList=this._element[0].querySelectorAll("ons-carousel-item"),rv=[],i=nodeList.length;i--;)rv.unshift(nodeList[i]);return rv},_scrollTo:function(scroll,options){function normalizeScroll(scroll){var ratio=.35;if(0>scroll)return isOverscrollable?Math.round(scroll*ratio):0;var maxScroll=self._calculateMaxScroll();return scroll>maxScroll?isOverscrollable?maxScroll+Math.round((scroll-maxScroll)*ratio):maxScroll:scroll}options=options||{};var self=this,isOverscrollable=this.isOverscrollable();options.animate?animit(this._getCarouselItemElements()).queue({transform:this._generateScrollTransform(normalizeScroll(scroll))},{duration:.3,timing:"cubic-bezier(.1, .7, .1, 1)"}).play(options.callback):animit(this._getCarouselItemElements()).queue({transform:this._generateScrollTransform(normalizeScroll(scroll))}).play(options.callback)},_calculateMaxScroll:function(){var max=this._getCarouselItemCount()*this._getCarouselItemSize()-this._getElementSize();return Math.ceil(0>max?0:max)},_isOverScroll:function(scroll){return 0>scroll||scroll>this._calculateMaxScroll()?!0:!1},_getOverScrollDirection:function(){return this._isVertical()?this._scroll<=0?"up":"down":this._scroll<=0?"left":"right"},_scrollToKillOverScroll:function(){var duration=.4;if(this._scroll<0)return animit(this._getCarouselItemElements()).queue({transform:this._generateScrollTransform(0)},{duration:duration,timing:"cubic-bezier(.1, .4, .1, 1)"}).play(),this._scroll=0,void 0;var maxScroll=this._calculateMaxScroll();return maxScroll<this._scroll?(animit(this._getCarouselItemElements()).queue({transform:this._generateScrollTransform(maxScroll)},{duration:duration,timing:"cubic-bezier(.1, .4, .1, 1)"}).play(),this._scroll=maxScroll,void 0):void 0},_getCarouselItemCount:function(){return this._getCarouselItemElements().length},refresh:function(){if(0!==this._getCarouselItemSize()){if(this._mixin(this._isVertical()?VerticalModeTrait:HorizontalModeTrait),this._layoutCarouselItems(),this._lastState&&this._lastState.width>0){var scroll=this._scroll;this._isOverScroll(scroll)?this._scrollToKillOverScroll():(this.isAutoScrollEnabled()&&(scroll=this._normalizeScrollPosition(scroll)),this._scrollTo(scroll))}this._saveLastState(),this.emit("refresh",{carousel:this})}},first:function(){this.setActiveCarouselItemIndex(0)},last:function(){this.setActiveCarouselItemIndex(Math.max(this._getCarouselItemCount()-1,0))},_destroy:function(){this.emit("destroy"),this._hammer.off("drag dragleft dragright dragup dragdown swipe swipeleft swiperight swipeup swipedown",this._bindedOnDrag),this._hammer.off("dragend",this._bindedOnDragEnd),angular.element(window).off("resize",this._bindedOnResize),this._element=this._scope=this._attrs=null}});return MicroEvent.mixin(CarouselView),CarouselView}])}(),function(){"use strict";var module=angular.module("onsen");module.factory("DialogView",["$onsen","DialogAnimator","IOSDialogAnimator","AndroidDialogAnimator","SlideDialogAnimator",function($onsen,DialogAnimator,IOSDialogAnimator,AndroidDialogAnimator,SlideDialogAnimator){var DialogView=Class.extend({init:function(scope,element,attrs){if(this._scope=scope,this._element=element,this._attrs=attrs,this._element.css("display","none"),this._dialog=angular.element(element[0].querySelector(".dialog")),this._mask=angular.element(element[0].querySelector(".dialog-mask")),this._dialog.css("z-index",20001),this._mask.css("z-index",2e4),this._mask.on("click",this._cancel.bind(this)),this._visible=!1,this._doorLock=new DoorLock,this._animation=DialogView._animatorDict["undefined"!=typeof attrs.animation?attrs.animation:"default"],!this._animation)throw new Error("No such animation: "+attrs.animation);this._deviceBackButtonHandler=$onsen.DeviceBackButtonHandler.create(this._element,this._onDeviceBackButton.bind(this)),this._scope.$on("$destroy",this._destroy.bind(this))},getDeviceBackButtonHandler:function(){return this._deviceBackButtonHandler},show:function(options){options=options||{};var cancel=!1,callback=options.callback||function(){};this.emit("preshow",{dialog:this,cancel:function(){cancel=!0}}),cancel||this._doorLock.waitUnlock(function(){var unlock=this._doorLock.lock(),animation=this._animation;this._element.css("display","block"),this._mask.css("opacity",1),options.animation&&(animation=DialogView._animatorDict[options.animation]),animation.show(this,function(){this._visible=!0,unlock(),this.emit("postshow",{dialog:this}),callback()}.bind(this))}.bind(this))},hide:function(options){options=options||{};var cancel=!1,callback=options.callback||function(){};this.emit("prehide",{dialog:this,cancel:function(){cancel=!0}}),cancel||this._doorLock.waitUnlock(function(){var unlock=this._doorLock.lock(),animation=this._animation;options.animation&&(animation=DialogView._animatorDict[options.animation]),animation.hide(this,function(){this._element.css("display","none"),this._visible=!1,unlock(),this.emit("posthide",{dialog:this}),callback()}.bind(this))}.bind(this))},isShown:function(){return this._visible},destroy:function(){this._parentScope?(this._parentScope.$destroy(),this._parentScope=null):this._scope.$destroy()},_destroy:function(){this.emit("destroy"),this._element.remove(),this._deviceBackButtonHandler.destroy(),this._mask.off(),this._deviceBackButtonHandler=this._scope=this._attrs=this._element=this._dialog=this._mask=null},setDisabled:function(disabled){if("boolean"!=typeof disabled)throw new Error("Argument must be a boolean.");disabled?this._element.attr("disabled",!0):this._element.removeAttr("disabled")},isDisabled:function(){return this._element[0].hasAttribute("disabled")},setCancelable:function(cancelable){if("boolean"!=typeof cancelable)throw new Error("Argument must be a boolean.");cancelable?this._element.attr("cancelable",!0):this._element.removeAttr("cancelable")},isCancelable:function(){return this._element[0].hasAttribute("cancelable")},_cancel:function(){this.isCancelable()&&this.hide({callback:function(){this.emit("cancel")}.bind(this)})},_onDeviceBackButton:function(event){this.isCancelable()?this._cancel.bind(this)():event.callParentHandler()}});return DialogView._animatorDict={"default":$onsen.isAndroid()?new AndroidDialogAnimator:new IOSDialogAnimator,fade:$onsen.isAndroid()?new AndroidDialogAnimator:new IOSDialogAnimator,slide:new SlideDialogAnimator,none:new DialogAnimator},DialogView.registerAnimator=function(name,animator){if(!(animator instanceof DialogAnimator))throw new Error('"animator" param must be an instance of DialogAnimator');this._animatorDict[name]=animator},MicroEvent.mixin(DialogView),DialogView}])}(),function(){"use strict;";var module=angular.module("onsen");module.factory("DialogAnimator",function(){var DialogAnimator=Class.extend({show:function(dialog,callback){callback()},hide:function(dialog,callback){callback()}});return DialogAnimator})}(),function(){"use strict";var module=angular.module("onsen");module.factory("FadePopoverAnimator",["PopoverAnimator",function(PopoverAnimator){var FadePopoverAnimator=PopoverAnimator.extend({timing:"cubic-bezier(.1, .7, .4, 1)",duration:.2,init:function(options){options=options||{},this.timing=options.timing||this.timing,this.duration=void 0!==options.duration?options.duration:this.duration},show:function(popover,callback){var pop=popover._element[0].querySelector(".popover"),mask=popover._element[0].querySelector(".popover-mask");animit.runAll(animit(mask).queue({opacity:0}).queue({opacity:1},{duration:this.duration,timing:this.timing}),animit(pop).queue({transform:"scale3d(1.3, 1.3, 1.0)",opacity:0}).queue({transform:"scale3d(1.0, 1.0,  1.0)",opacity:1},{duration:this.duration,timing:this.timing}).resetStyle().queue(function(done){callback(),done()}))},hide:function(popover,callback){var pop=popover._element[0].querySelector(".popover"),mask=popover._element[0].querySelector(".popover-mask");animit.runAll(animit(mask).queue({opacity:1}).queue({opacity:0},{duration:this.duration,timing:this.timing}),animit(pop).queue({opacity:1}).queue({opacity:0},{duration:this.duration,timing:this.timing}).resetStyle().queue(function(done){callback(),done()}))}});return FadePopoverAnimator}])}(),function(){"use strict;";var module=angular.module("onsen");module.factory("FadeTransitionAnimator",["NavigatorTransitionAnimator",function(NavigatorTransitionAnimator){var FadeTransitionAnimator=NavigatorTransitionAnimator.extend({push:function(enterPage,leavePage,callback){animit.runAll(animit([enterPage.getPageView().getContentElement(),enterPage.getPageView().getBackgroundElement()]).queue({css:{transform:"translate3D(0, 0, 0)",opacity:0},duration:0}).queue({css:{transform:"translate3D(0, 0, 0)",opacity:1},duration:.4,timing:"linear"}).resetStyle().queue(function(done){callback(),done()}),animit(enterPage.getPageView().getToolbarElement()).queue({css:{transform:"translate3D(0, 0, 0)",opacity:0},duration:0}).queue({css:{transform:"translate3D(0, 0, 0)",opacity:1},duration:.4,timing:"linear"}).resetStyle())},pop:function(enterPage,leavePage,callback){animit.runAll(animit([leavePage.getPageView().getContentElement(),leavePage.getPageView().getBackgroundElement()]).queue({css:{transform:"translate3D(0, 0, 0)",opacity:1},duration:0}).queue({css:{transform:"translate3D(0, 0, 0)",opacity:0},duration:.4,timing:"linear"}).queue(function(done){callback(),done()}),animit(leavePage.getPageView().getToolbarElement()).queue({css:{transform:"translate3D(0, 0, 0)",opacity:1},duration:0}).queue({css:{transform:"translate3D(0, 0, 0)",opacity:0},duration:.4,timing:"linear"}))}});return FadeTransitionAnimator}])}(),function(){"use strict";var module=angular.module("onsen");module.factory("GenericView",["$onsen",function(){var GenericView=Class.extend({init:function(scope,element){this._element=element,this._scope=scope}});return MicroEvent.mixin(GenericView),GenericView}])}(),function(){"use strict;";var module=angular.module("onsen");module.factory("IOSAlertDialogAnimator",["DialogAnimator",function(DialogAnimator){var IOSAlertDialogAnimator=DialogAnimator.extend({timing:"cubic-bezier(.1, .7, .4, 1)",duration:.2,init:function(options){options=options||{},this.timing=options.timing||this.timing,this.duration=void 0!==options.duration?options.duration:this.duration},show:function(dialog,callback){callback=callback?callback:function(){},animit.runAll(animit(dialog._mask[0]).queue({opacity:0}).queue({opacity:1},{duration:this.duration,timing:this.timing}),animit(dialog._dialog[0]).queue({css:{transform:"translate3d(-50%, -50%, 0) scale3d(1.3, 1.3, 1.0)",opacity:0},duration:0}).queue({css:{transform:"translate3d(-50%, -50%, 0) scale3d(1.0, 1.0, 1.0)",opacity:1},duration:this.duration,timing:this.timing}).resetStyle().queue(function(done){callback(),done()}))},hide:function(dialog,callback){callback=callback?callback:function(){},animit.runAll(animit(dialog._mask[0]).queue({opacity:1}).queue({opacity:0},{duration:this.duration,timing:this.timing}),animit(dialog._dialog[0]).queue({css:{opacity:1},duration:0}).queue({css:{opacity:0},duration:this.duration,timing:this.timing}).resetStyle().queue(function(done){callback(),done()}))}});return IOSAlertDialogAnimator}])}(),function(){"use strict;";var module=angular.module("onsen");module.factory("IOSDialogAnimator",["DialogAnimator",function(DialogAnimator){var IOSDialogAnimator=DialogAnimator.extend({timing:"ease-in-out",duration:.3,init:function(options){options=options||{},this.timing=options.timing||this.timing,this.duration=void 0!==options.duration?options.duration:this.duration},show:function(dialog,callback){callback=callback?callback:function(){},animit.runAll(animit(dialog._mask[0]).queue({opacity:0}).queue({opacity:1},{duration:this.duration,timing:this.timing}),animit(dialog._dialog[0]).queue({css:{transform:"translate3d(-50%, 300%, 0)"},duration:0}).queue({css:{transform:"translate3d(-50%, -50%, 0)"},duration:this.duration,timing:this.timing}).resetStyle().queue(function(done){callback(),done()}))},hide:function(dialog,callback){callback=callback?callback:function(){},animit.runAll(animit(dialog._mask[0]).queue({opacity:1}).queue({opacity:0},{duration:this.duration,timing:this.timing}),animit(dialog._dialog[0]).queue({css:{transform:"translate3d(-50%, -50%, 0)"},duration:0}).queue({css:{transform:"translate3d(-50%, 300%, 0)"},duration:this.duration,timing:this.timing}).resetStyle().queue(function(done){callback(),done()}))}});return IOSDialogAnimator}])}(),function(){"use strict;";var module=angular.module("onsen");module.factory("IOSSlideTransitionAnimator",["NavigatorTransitionAnimator","PageView",function(NavigatorTransitionAnimator){var IOSSlideTransitionAnimator=NavigatorTransitionAnimator.extend({backgroundMask:angular.element('<div style="position: absolute; width: 100%;height: 100%; background-color: black; opacity: 0;"></div>'),_decompose:function(page){function excludeBackButtonLabel(elements){for(var result=[],i=0;i<elements.length;i++)"ons-back-button"===elements[i].nodeName.toLowerCase()?result.push(elements[i].querySelector(".ons-back-button__icon")):result.push(elements[i]);return result}var left=page.getPageView().getToolbarLeftItemsElement(),right=page.getPageView().getToolbarRightItemsElement(),other=[].concat(0===left.children.length?left:excludeBackButtonLabel(left.children)).concat(0===right.children.length?right:excludeBackButtonLabel(right.children)),pageLabels=[page.getPageView().getToolbarCenterItemsElement(),page.getPageView().getToolbarBackButtonLabelElement()];return{pageLabels:pageLabels,other:other,content:page.getPageView().getContentElement(),background:page.getPageView().getBackgroundElement(),toolbar:page.getPageView().getToolbarElement(),bottomToolbar:page.getPageView().getBottomToolbarElement()}},_shouldAnimateToolbar:function(enterPage,leavePage){var bothPageHasToolbar=enterPage.getPageView().hasToolbarElement()&&leavePage.getPageView().hasToolbarElement(),noAndroidLikeToolbar=!angular.element(enterPage.getPageView().getToolbarElement()).hasClass("navigation-bar--android")&&!angular.element(leavePage.getPageView().getToolbarElement()).hasClass("navigation-bar--android");return bothPageHasToolbar&&noAndroidLikeToolbar},push:function(enterPage,leavePage,callback){var mask=this.backgroundMask.remove();leavePage.element[0].parentNode.insertBefore(mask[0],leavePage.element[0].nextSibling);var enterPageDecomposition=this._decompose(enterPage),leavePageDecomposition=this._decompose(leavePage),delta=function(){var rect=leavePage.element[0].getBoundingClientRect();return Math.round((rect.right-rect.left)/2*.6)}(),maskClear=animit(mask[0]).queue({opacity:0,transform:"translate3d(0, 0, 0)"}).queue({opacity:.1},{duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).resetStyle().queue(function(done){mask.remove(),done()}),shouldAnimateToolbar=this._shouldAnimateToolbar(enterPage,leavePage);
shouldAnimateToolbar?(enterPage.element.css({zIndex:"auto"}),leavePage.element.css({zIndex:"auto"}),animit.runAll(maskClear,animit([enterPageDecomposition.content,enterPageDecomposition.bottomToolbar,enterPageDecomposition.background]).queue({css:{transform:"translate3D(100%, 0px, 0px)"},duration:0}).queue({css:{transform:"translate3D(0px, 0px, 0px)"},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).resetStyle(),animit(enterPageDecomposition.toolbar).queue({css:{background:"none",backgroundColor:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)"},duration:0}).wait(.3).resetStyle({duration:.1,transition:"background-color 0.1s linear, border-color 0.1s linear"}),animit(enterPageDecomposition.pageLabels).queue({css:{transform:"translate3d("+delta+"px, 0, 0)",opacity:0},duration:0}).queue({css:{transform:"translate3d(0, 0, 0)",opacity:1},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).resetStyle(),animit(enterPageDecomposition.other).queue({css:{opacity:0},duration:0}).queue({css:{opacity:1},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).resetStyle(),animit([leavePageDecomposition.content,leavePageDecomposition.bottomToolbar,leavePageDecomposition.background]).queue({css:{transform:"translate3D(0, 0, 0)"},duration:0}).queue({css:{transform:"translate3D(-25%, 0px, 0px)"},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).resetStyle().queue(function(done){enterPage.element.css({zIndex:""}),leavePage.element.css({zIndex:""}),callback(),done()}),animit(leavePageDecomposition.pageLabels).queue({css:{transform:"translate3d(0, 0, 0)",opacity:1},duration:0}).queue({css:{transform:"translate3d(-"+delta+"px, 0, 0)",opacity:0},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).resetStyle(),animit(leavePageDecomposition.other).queue({css:{opacity:1},duration:0}).queue({css:{opacity:0},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).resetStyle())):animit.runAll(maskClear,animit(enterPage.element[0]).queue({css:{transform:"translate3D(100%, 0px, 0px)"},duration:0}).queue({css:{transform:"translate3D(0px, 0px, 0px)"},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).resetStyle(),animit(leavePage.element[0]).queue({css:{transform:"translate3D(0, 0, 0)"},duration:0}).queue({css:{transform:"translate3D(-25%, 0px, 0px)"},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).resetStyle().queue(function(done){callback(),done()}))},pop:function(enterPage,leavePage,done){var mask=this.backgroundMask.remove();enterPage.element[0].parentNode.insertBefore(mask[0],enterPage.element[0].nextSibling);var enterPageDecomposition=this._decompose(enterPage),leavePageDecomposition=this._decompose(leavePage),delta=function(){var rect=leavePage.element[0].getBoundingClientRect();return Math.round((rect.right-rect.left)/2*.6)}(),maskClear=animit(mask[0]).queue({opacity:.1,transform:"translate3d(0, 0, 0)"}).queue({opacity:0},{duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).resetStyle().queue(function(done){mask.remove(),done()}),shouldAnimateToolbar=this._shouldAnimateToolbar(enterPage,leavePage);shouldAnimateToolbar?(enterPage.element.css({zIndex:"auto"}),leavePage.element.css({zIndex:"auto"}),animit.runAll(maskClear,animit([enterPageDecomposition.content,enterPageDecomposition.bottomToolbar,enterPageDecomposition.background]).queue({css:{transform:"translate3D(-25%, 0px, 0px)",opacity:.9},duration:0}).queue({css:{transform:"translate3D(0px, 0px, 0px)",opacity:1},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).resetStyle(),animit(enterPageDecomposition.pageLabels).queue({css:{transform:"translate3d(-"+delta+"px, 0, 0)",opacity:0},duration:0}).queue({css:{transform:"translate3d(0, 0, 0)",opacity:1},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).resetStyle(),animit(enterPageDecomposition.toolbar).queue({css:{transform:"translate3d(0, 0, 0)",opacity:1},duration:0}).queue({css:{transform:"translate3d(0, 0, 0)",opacity:1},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).resetStyle(),animit(enterPageDecomposition.other).queue({css:{opacity:0},duration:0}).queue({css:{opacity:1},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).resetStyle(),animit([leavePageDecomposition.content,leavePageDecomposition.bottomToolbar,leavePageDecomposition.background]).queue({css:{transform:"translate3D(0px, 0px, 0px)"},duration:0}).queue({css:{transform:"translate3D(100%, 0px, 0px)"},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).wait(0).queue(function(finish){enterPage.element.css({zIndex:""}),leavePage.element.css({zIndex:""}),done(),finish()}),animit(leavePageDecomposition.other).queue({css:{transform:"translate3d(0, 0, 0)",opacity:1},duration:0}).queue({css:{transform:"translate3d(0, 0, 0)",opacity:0},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}),animit(leavePageDecomposition.toolbar).queue({css:{background:"none",backgroundColor:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)"},duration:0}),animit(leavePageDecomposition.pageLabels).queue({css:{transform:"translate3d(0, 0, 0)",opacity:1},duration:0}).queue({css:{transform:"translate3d("+delta+"px, 0, 0)",opacity:0},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}))):animit.runAll(maskClear,animit(enterPage.element[0]).queue({css:{transform:"translate3D(-25%, 0px, 0px)",opacity:.9},duration:0}).queue({css:{transform:"translate3D(0px, 0px, 0px)",opacity:1},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).resetStyle(),animit(leavePage.element[0]).queue({css:{transform:"translate3D(0px, 0px, 0px)"},duration:0}).queue({css:{transform:"translate3D(100%, 0px, 0px)"},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).queue(function(finish){done(),finish()}))}});return IOSSlideTransitionAnimator}])}(),function(){"use strict";var module=angular.module("onsen");module.factory("LazyRepeatView",["$onsen","$document","$compile",function($onsen,$document,$compile){var LazyRepeatView=Class.extend({init:function(scope,element,attrs,linker){if(this._element=element,this._scope=scope,this._attrs=attrs,this._linker=linker,this._parentElement=element.parent(),this._pageContent=this._findPageContent(),!this._pageContent)throw new Error("ons-lazy-repeat must be a descendant of an <ons-page> object.");this._itemHeightSum=[],this._maxIndex=0,this._delegate=this._getDelegate(),this._renderedElements={},this._addEventListeners(),this._scope.$watch(this._countItems.bind(this),this._onChange.bind(this)),this._scope.$on("$destroy",this._destroy.bind(this)),this._onChange()},_getDelegate:function(){var delegate=this._scope.$eval(this._attrs.onsLazyRepeat);return"undefined"==typeof delegate&&(delegate=eval(this._attrs.onsLazyRepeat)),delegate},_countItems:function(){return this._delegate.countItems()},_getItemHeight:function(i){return this._delegate.calculateItemHeight(i)},_getTopOffset:function(){return this._parentElement[0].getBoundingClientRect().top},_render:function(){var items=this._getItemsInView(),keep={};this._parentElement.css("height",this._itemHeightSum[this._maxIndex]+"px");for(var i=0,l=items.length;l>i;i++){var _item=items[i];this._renderElement(_item),keep[_item.index]=!0}for(var key in this._renderedElements)this._renderedElements.hasOwnProperty(key)&&!keep.hasOwnProperty(key)&&this._removeElement(key)},_isRendered:function(i){return this._renderedElements.hasOwnProperty(i)},_renderElement:function(item){if(this._isRendered(item.index)){var currentItem=this._renderedElements[item.index];this._delegate.configureItemScope&&this._delegate.configureItemScope(item.index,currentItem.scope);var element=this._renderedElements[item.index].element;return element[0].style.top=item.top+"px",void 0}var childScope=this._scope.$new();this._addSpecialProperties(item.index,childScope),this._linker(childScope,function(clone){this._delegate.configureItemScope?this._delegate.configureItemScope(item.index,childScope):this._delegate.createItemContent&&(clone.append(this._delegate.createItemContent(item.index)),$compile(clone[0].firstChild)(childScope)),this._parentElement.append(clone),clone.css({position:"absolute",top:item.top+"px",left:"0px",right:"0px",display:"none"});var element={element:clone,scope:childScope};this._scope.$evalAsync(function(){clone.css("display","block")}),this._renderedElements[item.index]=element}.bind(this))},_removeElement:function(i){if(this._isRendered(i)){var element=this._renderedElements[i];this._delegate.destroyItemScope?this._delegate.destroyItemScope(i,element.scope):this._delegate.destroyItemContent&&this._delegate.destroyItemContent(i,element.element.children()[0]),element.element.remove(),element.scope.$destroy(),element.element=element.scope=null,delete this._renderedElements[i]}},_removeAllElements:function(){for(var key in this._renderedElements)this._removeElement.hasOwnProperty(key)&&this._removeElement(key)},_calculateStartIndex:function(current){for(var start=0,end=this._maxIndex;;){var middle=Math.floor((start+end)/2),value=current+this._itemHeightSum[middle];if(start>end)return 0;if(value>=0&&value-this._getItemHeight(middle)<0)return middle;isNaN(value)||value>=0?end=middle-1:start=middle+1}},_recalculateItemHeightSum:function(){for(var sums=this._itemHeightSum,i=0,sum=0;i<Math.min(sums.length,this._countItems());i++)sum+=this._getItemHeight(i),sums[i]=sum},_getItemsInView:function(){var topOffset=this._getTopOffset(),topPosition=topOffset,cnt=this._countItems();cnt!==this._itemCount&&(this._recalculateItemHeightSum(),this._maxIndex=cnt-1),this._itemCount=cnt;var startIndex=this._calculateStartIndex(topPosition);startIndex=Math.max(startIndex-30,0),startIndex>0&&(topPosition+=this._itemHeightSum[startIndex-1]);for(var items=[],i=startIndex;cnt>i&&topPosition<4*window.innerHeight;i++){var h=this._getItemHeight(i);i>=this._itemHeightSum.length&&(this._itemHeightSum=this._itemHeightSum.concat(new Array(100))),this._itemHeightSum[i]=i>0?this._itemHeightSum[i-1]+h:h,this._maxIndex=Math.max(i,this._maxIndex),items.push({index:i,top:topPosition-topOffset}),topPosition+=h}return items},_addSpecialProperties:function(i,scope){scope.$index=i,scope.$first=0===i,scope.$last=i===this._countItems()-1,scope.$middle=!scope.$first&&!scope.$last,scope.$even=i%2===0,scope.$odd=!scope.$even},_onChange:function(){this._render()},_findPageContent:function(){for(var e=this._element[0];e.parentNode&&(e=e.parentNode,!(e.className&&e.className.split(/\s+/).indexOf("page__content")>=0)););return e},_addEventListeners:function(){this._boundOnChange=this._onChange.bind(this),this._pageContent.addEventListener("scroll",this._boundOnChange,!0),$document[0].addEventListener("resize",this._boundOnChange,!0)},_removeEventListeners:function(){this._pageContent.removeEventListener("scroll",this._boundOnChange,!0),$document[0].removeEventListener("resize",this._boundOnChange,!0)},_destroy:function(){this._removeEventListeners(),this._removeAllElements(),this._parentElement=this._renderedElements=this._element=this._scope=this._attrs=null}});return LazyRepeatView}])}(),function(){"use strict;";var module=angular.module("onsen");module.factory("LiftTransitionAnimator",["NavigatorTransitionAnimator",function(NavigatorTransitionAnimator){var LiftTransitionAnimator=NavigatorTransitionAnimator.extend({backgroundMask:angular.element('<div style="position: absolute; width: 100%;height: 100%; background-color: black;"></div>'),push:function(enterPage,leavePage,callback){var mask=this.backgroundMask.remove();leavePage.element[0].parentNode.insertBefore(mask[0],leavePage.element[0]);var maskClear=animit(mask[0]).wait(.6).queue(function(done){mask.remove(),done()});animit.runAll(maskClear,animit(enterPage.element[0]).queue({css:{transform:"translate3D(0, 100%, 0)"},duration:0}).queue({css:{transform:"translate3D(0, 0, 0)"},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).wait(.2).resetStyle().queue(function(done){callback(),done()}),animit(leavePage.element[0]).queue({css:{transform:"translate3D(0, 0, 0)",opacity:1},duration:0}).queue({css:{transform:"translate3D(0, -10%, 0)",opacity:.9},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}))},pop:function(enterPage,leavePage,callback){var mask=this.backgroundMask.remove();enterPage.element[0].parentNode.insertBefore(mask[0],enterPage.element[0]),animit.runAll(animit(mask[0]).wait(.4).queue(function(done){mask.remove(),done()}),animit(enterPage.element[0]).queue({css:{transform:"translate3D(0, -10%, 0)",opacity:.9},duration:0}).queue({css:{transform:"translate3D(0, 0, 0)",opacity:1},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}).resetStyle().wait(.4).queue(function(done){callback(),done()}),animit(leavePage.element[0]).queue({css:{transform:"translate3D(0, 0, 0)"},duration:0}).queue({css:{transform:"translate3D(0, 100%, 0)"},duration:.4,timing:"cubic-bezier(.1, .7, .1, 1)"}))}});return LiftTransitionAnimator}])}(),function(){"use strict;";var module=angular.module("onsen");module.factory("ModalView",["$onsen","$rootScope",function($onsen,$rootScope){var ModalView=Class.extend({_element:void 0,_scope:void 0,init:function(scope,element){this._scope=scope,this._element=element;var pageView=$rootScope.ons.findParentComponentUntil("ons-page",this._element);pageView&&(this._pageContent=angular.element(pageView._element[0].querySelector(".page__content"))),this._scope.$on("$destroy",this._destroy.bind(this)),this._deviceBackButtonHandler=$onsen.DeviceBackButtonHandler.create(this._element,this._onDeviceBackButton.bind(this)),this.hide()},getDeviceBackButtonHandler:function(){return this._deviceBackButtonHandler},show:function(){this._element.css("display","table")},_isVisible:function(){return this._element[0].clientWidth>0},_onDeviceBackButton:function(){},hide:function(){this._element.css("display","none")},toggle:function(){return this._isVisible()?this.hide.apply(this,arguments):this.show.apply(this,arguments)},_destroy:function(){this.emit("destroy",{page:this}),this._deviceBackButtonHandler.destroy(),this._element=this._scope=null}});return MicroEvent.mixin(ModalView),ModalView}])}(),function(){"use strict;";var module=angular.module("onsen"),NavigatorPageObject=Class.extend({init:function(params){this.page=params.page,this.name=params.page,this.element=params.element,this.pageScope=params.pageScope,this.options=params.options,this.navigator=params.navigator,this._blockEvents=function(event){(this.navigator._isPopping||this.navigator._isPushing)&&(event.preventDefault(),event.stopPropagation())}.bind(this),this.element.on(this._pointerEvents,this._blockEvents)},_pointerEvents:"touchstart touchend touchmove click",getPageView:function(){if(!this._pageView&&(this._pageView=this.element.inheritedData("ons-page"),!this._pageView))throw new Error("Fail to fetch PageView from ons-page element.");return this._pageView},destroy:function(){this.pageScope.$destroy(),this.element.off(this._pointerEvents,this._blockEvents),this.element.remove(),this.element=null,this._pageView=null,this.pageScope=null,this.options=null;var index=this.navigator.pages.indexOf(this);-1!==index&&this.navigator.pages.splice(index,1),this.navigator=null}});module.factory("NavigatorView",["$http","$parse","$templateCache","$compile","$onsen","$timeout","SimpleSlideTransitionAnimator","NavigatorTransitionAnimator","LiftTransitionAnimator","NullTransitionAnimator","IOSSlideTransitionAnimator","FadeTransitionAnimator",function($http,$parse,$templateCache,$compile,$onsen,$timeout,SimpleSlideTransitionAnimator,NavigatorTransitionAnimator,LiftTransitionAnimator,NullTransitionAnimator,IOSSlideTransitionAnimator,FadeTransitionAnimator){var NavigatorView=Class.extend({_element:void 0,_attrs:void 0,pages:void 0,_scope:void 0,_doorLock:void 0,_profiling:!1,init:function(scope,element,attrs){this._element=element||angular.element(window.document.body),this._scope=scope||this._element.scope(),this._attrs=attrs,this._doorLock=new DoorLock,this.pages=[],this._isPopping=this._isPushing=!1,this._deviceBackButtonHandler=$onsen.DeviceBackButtonHandler.create(this._element,this._onDeviceBackButton.bind(this)),this._scope.$on("$destroy",this._destroy.bind(this))},_destroy:function(){this.emit("destroy"),this.pages.forEach(function(page){page.destroy()}),this._deviceBackButtonHandler.destroy(),this._deviceBackButtonHandler=null,this._element=this._scope=this._attrs=null},_onDeviceBackButton:function(event){this.pages.length>1?this._scope.$evalAsync(this.popPage.bind(this)):event.callParentHandler()},_normalizePageElement:function(element){for(var i=0;i<element.length;i++)if(1===element[i].nodeType)return angular.element(element[i]);throw new Error("invalid state")},_createPageElementAndLinkFunction:function(templateHTML,pageScope){function safeApply(scope){var phase=scope.$root.$$phase;"$apply"!==phase&&"$digest"!==phase&&scope.$apply()}var div=document.createElement("div");div.innerHTML=templateHTML.trim();var pageElement=angular.element(div),hasPage=1===div.childElementCount&&"ons-page"===div.childNodes[0].nodeName.toLowerCase();if(!hasPage)throw new Error('You can not supply no "ons-page" element to "ons-navigator".');pageElement=angular.element(div.childNodes[0]);var link=$compile(pageElement);return{element:pageElement,link:function(){link(pageScope),safeApply(pageScope)}}},insertPage:function(index,page,options){if(options=options||{},options&&"object"!=typeof options)throw new Error("options must be an object. You supplied "+options);if(index===this.pages.length)return this.pushPage.apply(this,[].slice.call(arguments,1));this._doorLock.waitUnlock(function(){var unlock=this._doorLock.lock();$onsen.getPageHTMLAsync(page).then(function(templateHTML){var pageScope=this._createPageScope(),object=this._createPageElementAndLinkFunction(templateHTML,pageScope),element=object.element,link=object.link;element=this._normalizePageElement(element);var pageObject=this._createPageObject(page,element,pageScope,options);this.pages.length>0?(index=normalizeIndex(index),this._element[0].insertBefore(element[0],this.pages[index]?this.pages[index].element[0]:null),this.pages.splice(index,0,pageObject),link(),setTimeout(function(){this.getCurrentPage()!==pageObject&&element.css("display","none"),unlock(),element=null}.bind(this),1e3/60)):(this._element.append(element),this.pages.push(pageObject),link(),unlock(),element=null)}.bind(this),function(){throw unlock(),new Error("Page is not found: "+page)})}.bind(this));var normalizeIndex=function(index){return 0>index&&(index=this.pages.length+index),index}.bind(this)},pushPage:function(page,options){if(this._profiling&&console.time("pushPage"),options=options||{},!options.cancelIfRunning||!this._isPushing){if(options&&"object"!=typeof options)throw new Error("options must be an object. You supplied "+options);this._emitPrePushEvent()||this._doorLock.waitUnlock(function(){this._pushPage(page,options)}.bind(this))}},_pushPage:function(page,options){var unlock=this._doorLock.lock(),done=function(){unlock(),this._profiling&&console.timeEnd("pushPage")};$onsen.getPageHTMLAsync(page).then(function(templateHTML){var pageScope=this._createPageScope(),object=this._createPageElementAndLinkFunction(templateHTML,pageScope);setImmediate(function(){this._pushPageDOM(page,object.element,object.link,pageScope,options,done),object=null}.bind(this))}.bind(this),function(){throw done(),new Error("Page is not found: "+page)}.bind(this))},getDeviceBackButtonHandler:function(){return this._deviceBackButtonHandler},_getAnimatorOption:function(options,defaultAnimator){var animator=null;if(options.animation instanceof NavigatorTransitionAnimator)return options.animation;if("string"==typeof options.animation&&(animator=NavigatorView._transitionAnimatorDict[options.animation]),!animator&&this._element.attr("animation")&&(animator=NavigatorView._transitionAnimatorDict[this._element.attr("animation")]),animator||(animator=defaultAnimator||NavigatorView._transitionAnimatorDict["default"]),!(animator instanceof NavigatorTransitionAnimator))throw new Error('"animator" is not an instance of NavigatorTransitionAnimator.');return animator},_createPageScope:function(){return this._scope.$new()},_createPageObject:function(page,element,pageScope,options){return options.animator=this._getAnimatorOption(options),new NavigatorPageObject({page:page,element:element,pageScope:pageScope,options:options,navigator:this})},_pushPageDOM:function(page,element,link,pageScope,options,unlock){this._profiling&&console.time("pushPageDOM"),unlock=unlock||function(){},options=options||{},element=this._normalizePageElement(element);var pageObject=this._createPageObject(page,element,pageScope,options),event={enterPage:pageObject,leavePage:this.pages[this.pages.length-1],navigator:this};this.pages.push(pageObject);var done=function(){this.pages[this.pages.length-2]&&this.pages[this.pages.length-2].element.css("display","none"),this._profiling&&console.timeEnd("pushPageDOM"),this._isPushing=!1,unlock(),this.emit("postpush",event),"function"==typeof options.onTransitionEnd&&options.onTransitionEnd(),element=null}.bind(this);if(this._isPushing=!0,this.pages.length>1){var leavePage=this.pages.slice(-2)[0],enterPage=this.pages.slice(-1)[0];this._element.append(element),link(),options.animator.push(enterPage,leavePage,done),element=null}else this._element.append(element),link(),done(),element=null},_emitPrePushEvent:function(){var isCanceled=!1,prePushEvent={navigator:this,currentPage:this.getCurrentPage(),cancel:function(){isCanceled=!0}};return this.emit("prepush",prePushEvent),isCanceled},_emitPrePopEvent:function(){var isCanceled=!1,leavePage=this.getCurrentPage(),prePopEvent={navigator:this,currentPage:leavePage,leavePage:leavePage,enterPage:this.pages[this.pages.length-2],cancel:function(){isCanceled=!0}};return this.emit("prepop",prePopEvent),isCanceled},popPage:function(options){options=options||{},options.cancelIfRunning&&this._isPopping||this._doorLock.waitUnlock(function(){if(this.pages.length<=1)throw new Error("NavigatorView's page stack is empty.");this._emitPrePopEvent()||this._popPage(options)}.bind(this))},_popPage:function(options){var unlock=this._doorLock.lock(),leavePage=this.pages.pop();this.pages[this.pages.length-1]&&this.pages[this.pages.length-1].element.css("display","block");var enterPage=this.pages[this.pages.length-1],event={leavePage:leavePage,enterPage:this.pages[this.pages.length-1],navigator:this},callback=function(){leavePage.destroy(),this._isPopping=!1,unlock(),this.emit("postpop",event),event.leavePage=null,"function"==typeof options.onTransitionEnd&&options.onTransitionEnd()}.bind(this);this._isPopping=!0;var animator=this._getAnimatorOption(options,leavePage.options.animator);animator.pop(enterPage,leavePage,callback)},replacePage:function(page,options){options=options||{};var onTransitionEnd=options.onTransitionEnd||function(){};options.onTransitionEnd=function(){this.pages.length>1&&this.pages[this.pages.length-2].destroy(),onTransitionEnd()}.bind(this),this.pushPage(page,options)},resetToPage:function(page,options){options=options||{},options.animator||options.animation||(options.animation="none");var onTransitionEnd=options.onTransitionEnd||function(){},self=this;options.onTransitionEnd=function(){for(;self.pages.length>1;)self.pages.shift().destroy();onTransitionEnd()},this.pushPage(page,options)},getCurrentPage:function(){return this.pages[this.pages.length-1]},getPages:function(){return this.pages},canPopPage:function(){return this.pages.length>1}});return NavigatorView._transitionAnimatorDict={"default":$onsen.isAndroid()?new SimpleSlideTransitionAnimator:new IOSSlideTransitionAnimator,slide:$onsen.isAndroid()?new SimpleSlideTransitionAnimator:new IOSSlideTransitionAnimator,simpleslide:new SimpleSlideTransitionAnimator,lift:new LiftTransitionAnimator,fade:new FadeTransitionAnimator,none:new NullTransitionAnimator},NavigatorView.registerTransitionAnimator=function(name,animator){if(!(animator instanceof NavigatorTransitionAnimator))throw new Error('"animator" param must be an instance of NavigatorTransitionAnimator');this._transitionAnimatorDict[name]=animator},MicroEvent.mixin(NavigatorView),NavigatorView}])}(),function(){"use strict;";var module=angular.module("onsen");module.factory("NavigatorTransitionAnimator",function(){var NavigatorTransitionAnimator=Class.extend({push:function(enterPage,leavePage,callback){callback()},pop:function(enterPage,leavePage,callback){callback()}});return NavigatorTransitionAnimator})}(),function(){"use strict;";var module=angular.module("onsen");module.factory("NullTransitionAnimator",["NavigatorTransitionAnimator",function(NavigatorTransitionAnimator){var NullTransitionAnimator=NavigatorTransitionAnimator.extend({});return NullTransitionAnimator}])}(),function(){"use strict";var module=angular.module("onsen");module.factory("OverlaySlidingMenuAnimator",["SlidingMenuAnimator",function(SlidingMenuAnimator){var OverlaySlidingMenuAnimator=SlidingMenuAnimator.extend({_blackMask:void 0,_isRight:!1,_element:!1,_menuPage:!1,_mainPage:!1,_width:!1,_duration:!1,setup:function(element,mainPage,menuPage,options){options=options||{},this._width=options.width||"90%",this._isRight=!!options.isRight,this._element=element,this._mainPage=mainPage,this._menuPage=menuPage,this._duration=.4,menuPage.css("box-shadow","0px 0 10px 0px rgba(0, 0, 0, 0.2)"),menuPage.css({width:options.width,display:"none",zIndex:2}),menuPage.css("-webkit-transform","translate3d(0px, 0px, 0px)"),mainPage.css({zIndex:1}),this._isRight?menuPage.css({right:"-"+options.width,left:"auto"}):menuPage.css({right:"auto",left:"-"+options.width}),this._blackMask=angular.element("<div></div>").css({backgroundColor:"black",top:"0px",left:"0px",right:"0px",bottom:"0px",position:"absolute",display:"none",zIndex:0}),element.prepend(this._blackMask)},onResized:function(options){if(this._menuPage.css("width",options.width),this._isRight?this._menuPage.css({right:"-"+options.width,left:"auto"}):this._menuPage.css({right:"auto",left:"-"+options.width}),options.isOpened){var max=this._menuPage[0].clientWidth,menuStyle=this._generateMenuPageStyle(max);animit(this._menuPage[0]).queue(menuStyle).play()}},destroy:function(){this._blackMask&&(this._blackMask.remove(),this._blackMask=null),this._mainPage.removeAttr("style"),this._menuPage.removeAttr("style"),this._element=this._mainPage=this._menuPage=null},openMenu:function(callback,instant){var duration=instant===!0?0:this._duration;this._menuPage.css("display","block"),this._blackMask.css("display","block");var max=this._menuPage[0].clientWidth,menuStyle=this._generateMenuPageStyle(max),mainPageStyle=this._generateMainPageStyle(max);setTimeout(function(){animit(this._mainPage[0]).queue(mainPageStyle,{duration:duration,timing:"cubic-bezier(.1, .7, .1, 1)"}).queue(function(done){callback(),done()}).play(),animit(this._menuPage[0]).queue(menuStyle,{duration:duration,timing:"cubic-bezier(.1, .7, .1, 1)"}).play()}.bind(this),1e3/60)},closeMenu:function(callback,instant){var duration=instant===!0?0:this._duration;this._blackMask.css({display:"block"});var menuPageStyle=this._generateMenuPageStyle(0),mainPageStyle=this._generateMainPageStyle(0);setTimeout(function(){animit(this._mainPage[0]).queue(mainPageStyle,{duration:duration,timing:"cubic-bezier(.1, .7, .1, 1)"}).queue(function(done){this._menuPage.css("display","none"),callback(),done()}.bind(this)).play(),animit(this._menuPage[0]).queue(menuPageStyle,{duration:duration,timing:"cubic-bezier(.1, .7, .1, 1)"}).play()}.bind(this),1e3/60)},translateMenu:function(options){this._menuPage.css("display","block"),this._blackMask.css({display:"block"});var menuPageStyle=this._generateMenuPageStyle(Math.min(options.maxDistance,options.distance)),mainPageStyle=this._generateMainPageStyle(Math.min(options.maxDistance,options.distance));delete mainPageStyle.opacity,animit(this._menuPage[0]).queue(menuPageStyle).play(),Object.keys(mainPageStyle).length>0&&animit(this._mainPage[0]).queue(mainPageStyle).play()},_generateMenuPageStyle:function(distance){var x=(this._menuPage[0].clientWidth,this._isRight?-distance:distance),transform="translate3d("+x+"px, 0, 0)";return{transform:transform,"box-shadow":0===distance?"none":"0px 0 10px 0px rgba(0, 0, 0, 0.2)"}},_generateMainPageStyle:function(distance){var max=this._menuPage[0].clientWidth,opacity=1-.1*distance/max;return{opacity:opacity}},copy:function(){return new OverlaySlidingMenuAnimator}});return OverlaySlidingMenuAnimator}])}(),function(){"use strict;";var module=angular.module("onsen");module.factory("PageView",["$onsen","$parse",function($onsen,$parse){var PageView=Class.extend({_registeredToolbarElement:!1,_registeredBottomToolbarElement:!1,_nullElement:window.document.createElement("div"),_toolbarElement:null,_bottomToolbarElement:null,init:function(scope,element,attrs){this._scope=scope,this._element=element,this._attrs=attrs,this._registeredToolbarElement=!1,this._registeredBottomToolbarElement=!1,this._nullElement=window.document.createElement("div"),this._toolbarElement=angular.element(this._nullElement),this._bottomToolbarElement=angular.element(this._nullElement),this._clearListener=scope.$on("$destroy",this._destroy.bind(this)),this._userDeviceBackButtonListener=angular.noop,(this._attrs.ngDeviceBackbutton||this._attrs.onDeviceBackbutton)&&(this._deviceBackButtonHandler=$onsen.DeviceBackButtonHandler.create(this._element,this._onDeviceBackButton.bind(this)))},_onDeviceBackButton:function($event){if(this._userDeviceBackButtonListener($event),this._attrs.ngDeviceBackbutton&&$parse(this._attrs.ngDeviceBackbutton)(this._scope,{$event:$event}),this._attrs.onDeviceBackbutton){var lastEvent=window.$event;window.$event=$event,new Function(this._attrs.onDeviceBackbutton)(),window.$event=lastEvent}},setDeviceBackButtonHandler:function(callback){this._deviceBackButtonHandler||(this._deviceBackButtonHandler=$onsen.DeviceBackButtonHandler.create(this._element,this._onDeviceBackButton.bind(this))),this._userDeviceBackButtonListener=callback},getDeviceBackButtonHandler:function(){return this._deviceBackButtonHandler||null},registerToolbar:function(element){if(this._registeredToolbarElement)throw new Error("This page's toolbar is already registered.");angular.element(this.getContentElement()).attr("no-status-bar-fill",""),element.remove();var statusFill=this._element[0].querySelector(".page__status-bar-fill");statusFill?angular.element(statusFill).after(element):this._element.prepend(element),this._toolbarElement=element,this._registeredToolbarElement=!0},registerBottomToolbar:function(element){if(this._registeredBottomToolbarElement)throw new Error("This page's bottom-toolbar is already registered.");element.remove(),this._bottomToolbarElement=element,this._registeredBottomToolbarElement=!0;var fill=angular.element(document.createElement("div"));fill.addClass("page__bottom-bar-fill"),fill.css({width:"0px",height:"0px"}),this._element.prepend(fill),this._element.append(element)},registerExtraElement:function(element){this._extraElement||(this._extraElement=angular.element("<div></div>"),this._extraElement.addClass("page__extra"),this._extraElement.css({"z-index":"10001"}),this._element.append(this._extraElement)),this._extraElement.append(element.remove())},hasToolbarElement:function(){return!!this._registeredToolbarElement},hasBottomToolbarElement:function(){return!!this._registeredBottomToolbarElement},getContentElement:function(){for(var i=0;i<this._element.length;i++)if(this._element[i].querySelector){var content=this._element[i].querySelector(".page__content");if(content)return content}throw Error('fail to get ".page__content" element.')},getBackgroundElement:function(){for(var i=0;i<this._element.length;i++)if(this._element[i].querySelector){var content=this._element[i].querySelector(".page__background");if(content)return content}throw Error('fail to get ".page__background" element.')},getToolbarElement:function(){return this._toolbarElement[0]||this._nullElement},getBottomToolbarElement:function(){return this._bottomToolbarElement[0]||this._nullElement},getToolbarLeftItemsElement:function(){return this._toolbarElement[0].querySelector(".left")||this._nullElement},getToolbarCenterItemsElement:function(){return this._toolbarElement[0].querySelector(".center")||this._nullElement
},getToolbarRightItemsElement:function(){return this._toolbarElement[0].querySelector(".right")||this._nullElement},getToolbarBackButtonLabelElement:function(){return this._toolbarElement[0].querySelector("ons-back-button .back-button__label")||this._nullElement},_destroy:function(){this.emit("destroy",{page:this}),this._deviceBackButtonHandler&&(this._deviceBackButtonHandler.destroy(),this._deviceBackButtonHandler=null),this._element=null,this._toolbarElement=null,this._nullElement=null,this._bottomToolbarElement=null,this._extraElement=null,this._scope=null,this._clearListener()}});return MicroEvent.mixin(PageView),PageView}])}(),function(){"use strict";var module=angular.module("onsen");module.factory("PopoverView",["$onsen","PopoverAnimator","FadePopoverAnimator",function($onsen,PopoverAnimator,FadePopoverAnimator){var PopoverView=Class.extend({init:function(scope,element,attrs){if(this._element=element,this._scope=scope,this._attrs=attrs,this._mask=angular.element(this._element[0].querySelector(".popover-mask")),this._popover=angular.element(this._element[0].querySelector(".popover")),this._mask.css("z-index",2e4),this._popover.css("z-index",20001),this._element.css("display","none"),attrs.maskColor&&this._mask.css("background-color",attrs.maskColor),this._mask.on("click",this._cancel.bind(this)),this._visible=!1,this._doorLock=new DoorLock,this._animation=PopoverView._animatorDict["undefined"!=typeof attrs.animation?attrs.animation:"fade"],!this._animation)throw new Error("No such animation: "+attrs.animation);this._deviceBackButtonHandler=$onsen.DeviceBackButtonHandler.create(this._element,this._onDeviceBackButton.bind(this)),this._onChange=function(){setImmediate(function(){this._currentTarget&&this._positionPopover(this._currentTarget)}.bind(this))}.bind(this),this._popover[0].addEventListener("DOMNodeInserted",this._onChange,!1),this._popover[0].addEventListener("DOMNodeRemoved",this._onChange,!1),window.addEventListener("resize",this._onChange,!1),this._scope.$on("$destroy",this._destroy.bind(this))},_onDeviceBackButton:function(event){this.isCancelable()?this._cancel.bind(this)():event.callParentHandler()},_setDirection:function(direction){if("up"===direction)this._scope.direction=direction,this._scope.arrowPosition="bottom";else if("left"===direction)this._scope.direction=direction,this._scope.arrowPosition="right";else if("down"===direction)this._scope.direction=direction,this._scope.arrowPosition="top";else{if("right"!=direction)throw new Error("Invalid direction.");this._scope.direction=direction,this._scope.arrowPosition="left"}this._scope.$$phase||this._scope.$apply()},_positionPopoverByDirection:function(target,direction){var el=angular.element(this._element[0].querySelector(".popover")),pos=target.getBoundingClientRect(),own=el[0].getBoundingClientRect(),arrow=angular.element(el.children()[1]),offset=14,margin=6,radius=parseInt(window.getComputedStyle(el[0].querySelector(".popover__content")).borderRadius);arrow.css({top:"",left:""});var diff=function(x){return x/2*Math.sqrt(2)-x/2}(parseInt(window.getComputedStyle(arrow[0]).width)),limit=margin+radius+diff;this._setDirection(direction),["left","right"].indexOf(direction)>-1?("left"==direction?el.css("left",pos.right-pos.width-own.width-offset+"px"):el.css("left",pos.right+offset+"px"),el.css("top",pos.bottom-pos.height/2-own.height/2+"px")):("up"==direction?el.css("top",pos.bottom-pos.height-own.height-offset+"px"):el.css("top",pos.bottom+offset+"px"),el.css("left",pos.right-pos.width/2-own.width/2+"px")),own=el[0].getBoundingClientRect(),["left","right"].indexOf(direction)>-1?own.top<margin?(arrow.css("top",Math.max(own.height/2+own.top-margin,limit)+"px"),el.css("top",margin+"px")):own.bottom>window.innerHeight-margin&&(arrow.css("top",Math.min(own.height/2-(window.innerHeight-own.bottom)+margin,own.height-limit)+"px"),el.css("top",window.innerHeight-own.height-margin+"px")):own.left<margin?(arrow.css("left",Math.max(own.width/2+own.left-margin,limit)+"px"),el.css("left",margin+"px")):own.right>window.innerWidth-margin&&(arrow.css("left",Math.min(own.width/2-(window.innerWidth-own.right)+margin,own.width-limit)+"px"),el.css("left",window.innerWidth-own.width-margin+"px"))},_positionPopover:function(target){var directions;directions=this._element.attr("direction")?this._element.attr("direction").split(/\s+/):["up","down","left","right"];for(var position=target.getBoundingClientRect(),scores={left:position.left,right:window.innerWidth-position.right,up:position.top,down:window.innerHeight-position.bottom},orderedDirections=Object.keys(scores).sort(function(a,b){return-(scores[a]-scores[b])}),i=0,l=orderedDirections.length;l>i;i++){var direction=orderedDirections[i];if(directions.indexOf(direction)>-1)return this._positionPopoverByDirection(target,direction),void 0}},show:function(target,options){if("string"==typeof target?target=document.querySelector(target):target instanceof Event&&(target=target.target),!target)throw new Error("Target undefined");options=options||{};var cancel=!1;this.emit("preshow",{popover:this,cancel:function(){cancel=!0}}),cancel||this._doorLock.waitUnlock(function(){var unlock=this._doorLock.lock(),animation=this._animation;this._element.css("display","block"),this._currentTarget=target,this._positionPopover(target),options.animation&&(animation=PopoverView._animatorDict[options.animation]),animation.show(this,function(){this._visible=!0,this._positionPopover(target),unlock(),this.emit("postshow",{popover:this})}.bind(this))}.bind(this))},hide:function(options){options=options||{};var cancel=!1;this.emit("prehide",{popover:this,cancel:function(){cancel=!0}}),cancel||this._doorLock.waitUnlock(function(){var unlock=this._doorLock.lock(),animation=this._animation;options.animation&&(animation=PopoverView._animatorDict[options.animation]),animation.hide(this,function(){this._element.css("display","none"),this._visible=!1,unlock(),this.emit("posthide",{popover:this})}.bind(this))}.bind(this))},isShown:function(){return this._visible},destroy:function(){this._parentScope?(this._parentScope.$destroy(),this._parentScope=null):this._scope.$destroy()},_destroy:function(){this.emit("destroy"),this._deviceBackButtonHandler.destroy(),this._popover[0].removeEventListener("DOMNodeInserted",this._onChange,!1),this._popover[0].removeEventListener("DOMNodeRemoved",this._onChange,!1),window.removeEventListener("resize",this._onChange,!1),this._mask.off(),this._mask.remove(),this._popover.remove(),this._element.remove(),this._onChange=this._deviceBackButtonHandler=this._mask=this._popover=this._element=this._scope=null},setCancelable:function(cancelable){if("boolean"!=typeof cancelable)throw new Error("Argument must be a boolean.");cancelable?this._element.attr("cancelable",!0):this._element.removeAttr("cancelable")},isCancelable:function(){return this._element[0].hasAttribute("cancelable")},_cancel:function(){this.isCancelable()&&this.hide()}});return PopoverView._animatorDict={fade:new FadePopoverAnimator,none:new PopoverAnimator},PopoverView.registerAnimator=function(name,animator){if(!(animator instanceof PopoverAnimator))throw new Error('"animator" param must be an instance of PopoverAnimator');this._animatorDict[name]=animator},MicroEvent.mixin(PopoverView),PopoverView}])}(),function(){"use strict";var module=angular.module("onsen");module.factory("PopoverAnimator",function(){var PopoverAnimator=Class.extend({show:function(popover,callback){callback()},hide:function(popover,callback){callback()}});return PopoverAnimator})}(),function(){"use strict";var module=angular.module("onsen");module.factory("PullHookView",["$onsen","$parse",function($onsen,$parse){var PullHookView=Class.extend({STATE_INITIAL:"initial",STATE_PREACTION:"preaction",STATE_ACTION:"action",init:function(scope,element,attrs){if(this._element=element,this._scope=scope,this._attrs=attrs,this._scrollElement=this._createScrollElement(),this._pageElement=this._scrollElement.parent(),!this._pageElement.hasClass("page__content")&&!this._pageElement.hasClass("ons-scroller__content"))throw new Error("<ons-pull-hook> must be a direct descendant of an <ons-page> or an <ons-scroller> element.");this._currentTranslation=0,this._createEventListeners(),this._setState(this.STATE_INITIAL,!0),this._setStyle(),this._scope.$on("$destroy",this._destroy.bind(this))},_createScrollElement:function(){var scrollElement=angular.element("<div>").addClass("scroll"),pageElement=this._element.parent(),children=pageElement.children();return pageElement.append(scrollElement),scrollElement.append(children),scrollElement},_setStyle:function(){var h=this._getHeight();this._element.css({top:"-"+h+"px",height:h+"px",lineHeight:h+"px"})},_onScroll:function(){var el=this._pageElement[0];el.scrollTop<0&&(el.scrollTop=0)},_generateTranslationTransform:function(scroll){return"translate3d(0px, "+scroll+"px, 0px)"},_onDrag:function(event){if(!this.isDisabled()&&"left"!==event.gesture.direction&&"right"!==event.gesture.direction){var el=this._pageElement[0];if(el.scrollTop=this._startScroll-event.gesture.deltaY,el.scrollTop<window.innerHeight&&"up"!==event.gesture.direction&&event.gesture.preventDefault(),0===this._currentTranslation&&0===this._getCurrentScroll()){this._transitionDragLength=event.gesture.deltaY;var direction=event.gesture.interimDirection;"down"===direction?this._transitionDragLength-=1:this._transitionDragLength+=1}var scroll=event.gesture.deltaY-this._startScroll;scroll=Math.max(scroll,0),this._thresholdHeightEnabled()&&scroll>=this._getThresholdHeight()?(event.gesture.stopDetect(),setImmediate(function(){this._setState(this.STATE_ACTION),this._translateTo(this._getHeight(),{animate:!0}),this._waitForAction(this._onDone.bind(this))}.bind(this))):scroll>=this._getHeight()?this._setState(this.STATE_PREACTION):this._setState(this.STATE_INITIAL),event.stopPropagation(),this._translateTo(scroll)}},_onDragStart:function(){this.isDisabled()||(this._startScroll=this._getCurrentScroll())},_onDragEnd:function(){if(!this.isDisabled()&&this._currentTranslation>0){var scroll=this._currentTranslation;scroll>this._getHeight()?(this._setState(this.STATE_ACTION),this._translateTo(this._getHeight(),{animate:!0}),this._waitForAction(this._onDone.bind(this))):this._translateTo(0,{animate:!0})}},_waitForAction:function(done){this._attrs.ngAction?this._scope.$eval(this._attrs.ngAction,{$done:done}):this._attrs.onAction?eval(this._attrs.onAction):done()},_onDone:function(){this._element&&(this._translateTo(0,{animate:!0}),this._setState(this.STATE_INITIAL))},_getHeight:function(){return parseInt(this._element[0].getAttribute("height")||"64",10)},setHeight:function(height){this._element[0].setAttribute("height",height+"px"),this._setStyle()},setThresholdHeight:function(thresholdHeight){this._element[0].setAttribute("threshold-height",thresholdHeight+"px")},_getThresholdHeight:function(){return parseInt(this._element[0].getAttribute("threshold-height")||"96",10)},_thresholdHeightEnabled:function(){var th=this._getThresholdHeight();return th>0&&th>=this._getHeight()},_setState:function(state,noEvent){var oldState=this._getState();this._scope.$evalAsync(function(){this._element[0].setAttribute("state",state),noEvent||oldState===this._getState()||this.emit("changestate",{state:state,pullHook:this})}.bind(this))},_getState:function(){return this._element[0].getAttribute("state")},getCurrentState:function(){return this._getState()},_getCurrentScroll:function(){return this._pageElement[0].scrollTop},isDisabled:function(){return this._element[0].hasAttribute("disabled")},setDisabled:function(disabled){disabled?this._element[0].setAttribute("disabled",""):this._element[0].removeAttribute("disabled")},_translateTo:function(scroll,options){options=options||{},this._currentTranslation=scroll,options.animate?animit(this._scrollElement[0]).queue({transform:this._generateTranslationTransform(scroll)},{duration:.3,timing:"cubic-bezier(.1, .7, .1, 1)"}).play(options.callback):animit(this._scrollElement[0]).queue({transform:this._generateTranslationTransform(scroll)}).play(options.callback)},_getMinimumScroll:function(){var scrollHeight=this._scrollElement[0].getBoundingClientRect().height,pageHeight=this._pageElement[0].getBoundingClientRect().height;return scrollHeight>pageHeight?-(scrollHeight-pageHeight):0},_createEventListeners:function(){var element=this._scrollElement.parent();this._hammer=new Hammer(element[0],{dragMinDistance:1,dragDistanceCorrection:!1}),this._bindedOnDrag=this._onDrag.bind(this),this._bindedOnDragStart=this._onDragStart.bind(this),this._bindedOnDragEnd=this._onDragEnd.bind(this),this._bindedOnScroll=this._onScroll.bind(this),this._hammer.on("drag",this._bindedOnDrag),this._hammer.on("dragstart",this._bindedOnDragStart),this._hammer.on("dragend",this._bindedOnDragEnd),element.on("scroll",this._bindedOnScroll)},_destroyEventListeners:function(){var element=this._scrollElement.parent();this._hammer.off("drag",this._bindedOnDrag),this._hammer.off("dragstart",this._bindedOnDragStart),this._hammer.off("dragend",this._bindedOnDragEnd),element.off("scroll",this._bindedOnScroll)},_destroy:function(){this.emit("destroy"),this._destroyEventListeners(),this._element=this._scope=this._attrs=null}});return MicroEvent.mixin(PullHookView),PullHookView}])}(),function(){"use strict";var module=angular.module("onsen");module.factory("PushSlidingMenuAnimator",["SlidingMenuAnimator",function(SlidingMenuAnimator){var PushSlidingMenuAnimator=SlidingMenuAnimator.extend({_isRight:!1,_element:void 0,_menuPage:void 0,_mainPage:void 0,_width:void 0,_duration:!1,setup:function(element,mainPage,menuPage,options){options=options||{},this._element=element,this._mainPage=mainPage,this._menuPage=menuPage,this._isRight=!!options.isRight,this._width=options.width||"90%",this._duration=.4,menuPage.css({width:options.width,display:"none"}),this._isRight?menuPage.css({right:"-"+options.width,left:"auto"}):menuPage.css({right:"auto",left:"-"+options.width})},onResized:function(options){if(this._menuPage.css("width",options.width),this._isRight?this._menuPage.css({right:"-"+options.width,left:"auto"}):this._menuPage.css({right:"auto",left:"-"+options.width}),options.isOpened){var max=this._menuPage[0].clientWidth,mainPageTransform=this._generateAbovePageTransform(max),menuPageStyle=this._generateBehindPageStyle(max);animit(this._mainPage[0]).queue({transform:mainPageTransform}).play(),animit(this._menuPage[0]).queue(menuPageStyle).play()}},destroy:function(){this._mainPage.removeAttr("style"),this._menuPage.removeAttr("style"),this._element=this._mainPage=this._menuPage=null},openMenu:function(callback,instant){var duration=instant===!0?0:this._duration;this._menuPage.css("display","block");var max=this._menuPage[0].clientWidth,aboveTransform=this._generateAbovePageTransform(max),behindStyle=this._generateBehindPageStyle(max);setTimeout(function(){animit(this._mainPage[0]).queue({transform:aboveTransform},{duration:duration,timing:"cubic-bezier(.1, .7, .1, 1)"}).queue(function(done){callback(),done()}).play(),animit(this._menuPage[0]).queue(behindStyle,{duration:duration,timing:"cubic-bezier(.1, .7, .1, 1)"}).play()}.bind(this),1e3/60)},closeMenu:function(callback,instant){var duration=instant===!0?0:this._duration,aboveTransform=this._generateAbovePageTransform(0),behindStyle=this._generateBehindPageStyle(0);setTimeout(function(){animit(this._mainPage[0]).queue({transform:aboveTransform},{duration:duration,timing:"cubic-bezier(.1, .7, .1, 1)"}).queue({transform:"translate3d(0, 0, 0)"}).queue(function(done){this._menuPage.css("display","none"),callback(),done()}.bind(this)).play(),animit(this._menuPage[0]).queue(behindStyle,{duration:duration,timing:"cubic-bezier(.1, .7, .1, 1)"}).queue(function(done){done()}).play()}.bind(this),1e3/60)},translateMenu:function(options){this._menuPage.css("display","block");var aboveTransform=this._generateAbovePageTransform(Math.min(options.maxDistance,options.distance)),behindStyle=this._generateBehindPageStyle(Math.min(options.maxDistance,options.distance));animit(this._mainPage[0]).queue({transform:aboveTransform}).play(),animit(this._menuPage[0]).queue(behindStyle).play()},_generateAbovePageTransform:function(distance){var x=this._isRight?-distance:distance,aboveTransform="translate3d("+x+"px, 0, 0)";return aboveTransform},_generateBehindPageStyle:function(distance){var behindX=(this._menuPage[0].clientWidth,this._isRight?-distance:distance),behindTransform="translate3d("+behindX+"px, 0, 0)";return{transform:behindTransform}},copy:function(){return new PushSlidingMenuAnimator}});return PushSlidingMenuAnimator}])}(),function(){"use strict";var module=angular.module("onsen");module.factory("RevealSlidingMenuAnimator",["SlidingMenuAnimator",function(SlidingMenuAnimator){var RevealSlidingMenuAnimator=SlidingMenuAnimator.extend({_blackMask:void 0,_isRight:!1,_menuPage:void 0,_element:void 0,_mainPage:void 0,_duration:void 0,setup:function(element,mainPage,menuPage,options){this._element=element,this._menuPage=menuPage,this._mainPage=mainPage,this._isRight=!!options.isRight,this._width=options.width||"90%",this._duration=.4,mainPage.css({boxShadow:"0px 0 10px 0px rgba(0, 0, 0, 0.2)"}),menuPage.css({width:options.width,opacity:.9,display:"none"}),this._isRight?menuPage.css({right:"0px",left:"auto"}):menuPage.css({right:"auto",left:"0px"}),this._blackMask=angular.element("<div></div>").css({backgroundColor:"black",top:"0px",left:"0px",right:"0px",bottom:"0px",position:"absolute",display:"none"}),element.prepend(this._blackMask),animit(mainPage[0]).queue({transform:"translate3d(0, 0, 0)"}).play()},onResized:function(options){if(this._width=options.width,this._menuPage.css("width",this._width),options.isOpened){var max=this._menuPage[0].clientWidth,aboveTransform=this._generateAbovePageTransform(max),behindStyle=this._generateBehindPageStyle(max);animit(this._mainPage[0]).queue({transform:aboveTransform}).play(),animit(this._menuPage[0]).queue(behindStyle).play()}},destroy:function(){this._blackMask&&(this._blackMask.remove(),this._blackMask=null),this._mainPage&&this._mainPage.attr("style",""),this._menuPage&&this._menuPage.attr("style",""),this._mainPage=this._menuPage=this._element=void 0},openMenu:function(callback,instant){var duration=instant===!0?0:this._duration;this._menuPage.css("display","block"),this._blackMask.css("display","block");var max=this._menuPage[0].clientWidth,aboveTransform=this._generateAbovePageTransform(max),behindStyle=this._generateBehindPageStyle(max);setTimeout(function(){animit(this._mainPage[0]).queue({transform:aboveTransform},{duration:duration,timing:"cubic-bezier(.1, .7, .1, 1)"}).queue(function(done){callback(),done()}).play(),animit(this._menuPage[0]).queue(behindStyle,{duration:duration,timing:"cubic-bezier(.1, .7, .1, 1)"}).play()}.bind(this),1e3/60)},closeMenu:function(callback,instant){var duration=instant===!0?0:this._duration;this._blackMask.css("display","block");var aboveTransform=this._generateAbovePageTransform(0),behindStyle=this._generateBehindPageStyle(0);setTimeout(function(){animit(this._mainPage[0]).queue({transform:aboveTransform},{duration:duration,timing:"cubic-bezier(.1, .7, .1, 1)"}).queue({transform:"translate3d(0, 0, 0)"}).queue(function(done){this._menuPage.css("display","none"),callback(),done()}.bind(this)).play(),animit(this._menuPage[0]).queue(behindStyle,{duration:duration,timing:"cubic-bezier(.1, .7, .1, 1)"}).queue(function(done){done()}).play()}.bind(this),1e3/60)},translateMenu:function(options){this._menuPage.css("display","block"),this._blackMask.css("display","block");var aboveTransform=this._generateAbovePageTransform(Math.min(options.maxDistance,options.distance)),behindStyle=this._generateBehindPageStyle(Math.min(options.maxDistance,options.distance));delete behindStyle.opacity,animit(this._mainPage[0]).queue({transform:aboveTransform}).play(),animit(this._menuPage[0]).queue(behindStyle).play()},_generateAbovePageTransform:function(distance){var x=this._isRight?-distance:distance,aboveTransform="translate3d("+x+"px, 0, 0)";return aboveTransform},_generateBehindPageStyle:function(distance){var max=this._menuPage[0].getBoundingClientRect().width,behindDistance=(distance-max)/max*10;behindDistance=isNaN(behindDistance)?0:Math.max(Math.min(behindDistance,0),-10);var behindX=this._isRight?-behindDistance:behindDistance,behindTransform="translate3d("+behindX+"%, 0, 0)",opacity=1+behindDistance/100;return{transform:behindTransform,opacity:opacity}},copy:function(){return new RevealSlidingMenuAnimator}});return RevealSlidingMenuAnimator}])}(),function(){"use strict;";var module=angular.module("onsen");module.factory("SimpleSlideTransitionAnimator",["NavigatorTransitionAnimator",function(NavigatorTransitionAnimator){var SimpleSlideTransitionAnimator=NavigatorTransitionAnimator.extend({backgroundMask:angular.element('<div style="z-index: 2; position: absolute; width: 100%;height: 100%; background-color: black; opacity: 0;"></div>'),timing:"cubic-bezier(.1, .7, .4, 1)",duration:.3,blackMaskOpacity:.4,init:function(options){options=options||{},this.timing=options.timing||this.timing,this.duration=void 0!==options.duration?options.duration:this.duration},push:function(enterPage,leavePage,callback){var mask=this.backgroundMask.remove();leavePage.element[0].parentNode.insertBefore(mask[0],leavePage.element[0].nextSibling),animit.runAll(animit(mask[0]).queue({opacity:0,transform:"translate3d(0, 0, 0)"}).queue({opacity:this.blackMaskOpacity},{duration:this.duration,timing:this.timing}).resetStyle().queue(function(done){mask.remove(),done()}),animit(enterPage.element[0]).queue({css:{transform:"translate3D(100%, 0, 0)"},duration:0}).queue({css:{transform:"translate3D(0, 0, 0)"},duration:this.duration,timing:this.timing}).resetStyle(),animit(leavePage.element[0]).queue({css:{transform:"translate3D(0, 0, 0)"},duration:0}).queue({css:{transform:"translate3D(-45%, 0px, 0px)"},duration:this.duration,timing:this.timing}).resetStyle().wait(.2).queue(function(done){callback(),done()}))},pop:function(enterPage,leavePage,done){var mask=this.backgroundMask.remove();enterPage.element[0].parentNode.insertBefore(mask[0],enterPage.element[0].nextSibling),animit.runAll(animit(mask[0]).queue({opacity:this.blackMaskOpacity,transform:"translate3d(0, 0, 0)"}).queue({opacity:0},{duration:this.duration,timing:this.timing}).resetStyle().queue(function(done){mask.remove(),done()}),animit(enterPage.element[0]).queue({css:{transform:"translate3D(-45%, 0px, 0px)",opacity:.9},duration:0}).queue({css:{transform:"translate3D(0px, 0px, 0px)",opacity:1},duration:this.duration,timing:this.timing}).resetStyle(),animit(leavePage.element[0]).queue({css:{transform:"translate3D(0px, 0px, 0px)"},duration:0}).queue({css:{transform:"translate3D(100%, 0px, 0px)"},duration:this.duration,timing:this.timing}).wait(.2).queue(function(finish){done(),finish()}))}});return SimpleSlideTransitionAnimator}])}(),function(){"use strict;";var module=angular.module("onsen");module.factory("SlideDialogAnimator",["DialogAnimator",function(DialogAnimator){var SlideDialogAnimator=DialogAnimator.extend({timing:"cubic-bezier(.1, .7, .4, 1)",duration:.2,init:function(options){options=options||{},this.timing=options.timing||this.timing,this.duration=void 0!==options.duration?options.duration:this.duration},show:function(dialog,callback){callback=callback?callback:function(){},animit.runAll(animit(dialog._mask[0]).queue({opacity:0}).queue({opacity:1},{duration:this.duration,timing:this.timing}),animit(dialog._dialog[0]).queue({css:{transform:"translate3D(-50%, -350%, 0)"},duration:0}).queue({css:{transform:"translate3D(-50%, -50%, 0)"},duration:this.duration,timing:this.timing}).resetStyle().queue(function(done){callback(),done()}))},hide:function(dialog,callback){callback=callback?callback:function(){},animit.runAll(animit(dialog._mask[0]).queue({opacity:1}).queue({opacity:0},{duration:this.duration,timing:this.timing}),animit(dialog._dialog[0]).queue({css:{transform:"translate3D(-50%, -50%, 0)"},duration:0}).queue({css:{transform:"translate3D(-50%, -350%, 0)"},duration:this.duration,timing:this.timing}).resetStyle().queue(function(done){callback(),done()}))}});return SlideDialogAnimator}])}(),function(){"use strict";var module=angular.module("onsen"),SlidingMenuViewModel=Class.extend({_distance:0,_maxDistance:void 0,init:function(options){if(!angular.isNumber(options.maxDistance))throw new Error("options.maxDistance must be number");this.setMaxDistance(options.maxDistance)},setMaxDistance:function(maxDistance){if(0>=maxDistance)throw new Error("maxDistance must be greater then zero.");this.isOpened()&&(this._distance=maxDistance),this._maxDistance=maxDistance},shouldOpen:function(){return!this.isOpened()&&this._distance>=this._maxDistance/2},shouldClose:function(){return!this.isClosed()&&this._distance<this._maxDistance/2},openOrClose:function(options){this.shouldOpen()?this.open(options):this.shouldClose()&&this.close(options)},close:function(options){var callback=options.callback||function(){};this.isClosed()?callback():(this._distance=0,this.emit("close",options))},open:function(options){var callback=options.callback||function(){};this.isOpened()?callback():(this._distance=this._maxDistance,this.emit("open",options))},isClosed:function(){return 0===this._distance},isOpened:function(){return this._distance===this._maxDistance},getX:function(){return this._distance},getMaxDistance:function(){return this._maxDistance},translate:function(x){this._distance=Math.max(1,Math.min(this._maxDistance-1,x));var options={distance:this._distance,maxDistance:this._maxDistance};this.emit("translate",options)},toggle:function(){this.isClosed()?this.open():this.close()}});MicroEvent.mixin(SlidingMenuViewModel),module.factory("SlidingMenuView",["$onsen","$compile","SlidingMenuAnimator","RevealSlidingMenuAnimator","PushSlidingMenuAnimator","OverlaySlidingMenuAnimator",function($onsen,$compile,SlidingMenuAnimator,RevealSlidingMenuAnimator,PushSlidingMenuAnimator,OverlaySlidingMenuAnimator){var SlidingMenuView=Class.extend({_scope:void 0,_attrs:void 0,_element:void 0,_menuPage:void 0,_mainPage:void 0,_doorLock:void 0,_isRightMenu:!1,init:function(scope,element,attrs){this._scope=scope,this._attrs=attrs,this._element=element,this._menuPage=angular.element(element[0].querySelector(".onsen-sliding-menu__menu")),this._mainPage=angular.element(element[0].querySelector(".onsen-sliding-menu__main")),this._doorLock=new DoorLock,this._isRightMenu="right"===attrs.side,this._mainPageHammer=new Hammer(this._mainPage[0]),this._bindedOnTap=this._onTap.bind(this);var maxDistance=this._normalizeMaxSlideDistanceAttr();this._logic=new SlidingMenuViewModel({maxDistance:Math.max(maxDistance,1)}),this._logic.on("translate",this._translate.bind(this)),this._logic.on("open",function(options){this._open(options)}.bind(this)),this._logic.on("close",function(options){this._close(options)}.bind(this)),attrs.$observe("maxSlideDistance",this._onMaxSlideDistanceChanged.bind(this)),attrs.$observe("swipeable",this._onSwipeableChanged.bind(this)),this._bindedOnWindowResize=this._onWindowResize.bind(this),window.addEventListener("resize",this._bindedOnWindowResize),this._boundHandleEvent=this._handleEvent.bind(this),this._bindEvents(),attrs.mainPage&&this.setMainPage(attrs.mainPage),attrs.menuPage&&this.setMenuPage(attrs.menuPage),this._deviceBackButtonHandler=$onsen.DeviceBackButtonHandler.create(this._element,this._onDeviceBackButton.bind(this));var unlock=this._doorLock.lock();window.setTimeout(function(){var maxDistance=this._normalizeMaxSlideDistanceAttr();this._logic.setMaxDistance(maxDistance),this._menuPage.css({opacity:1}),this._animator=this._getAnimatorOption(),this._animator.setup(this._element,this._mainPage,this._menuPage,{isRight:this._isRightMenu,width:this._attrs.maxSlideDistance||"90%"}),unlock()}.bind(this),400),scope.$on("$destroy",this._destroy.bind(this)),attrs.swipeable||this.setSwipeable(!0)},getDeviceBackButtonHandler:function(){return this._deviceBackButtonHandler},_onDeviceBackButton:function(event){this.isMenuOpened()?this.closeMenu():event.callParentHandler()},_onTap:function(){this.isMenuOpened()&&this.closeMenu()},_refreshMenuPageWidth:function(){var width="maxSlideDistance"in this._attrs?this._attrs.maxSlideDistance:"90%";this._animator&&this._animator.onResized({isOpened:this._logic.isOpened(),width:width})},_destroy:function(){this.emit("destroy"),this._deviceBackButtonHandler.destroy(),window.removeEventListener("resize",this._bindedOnWindowResize),this._mainPageHammer.off("tap",this._bindedOnTap),this._element=this._scope=this._attrs=null},_getAnimatorOption:function(){var animator=SlidingMenuView._animatorDict[this._attrs.type];return animator instanceof SlidingMenuAnimator||(animator=SlidingMenuView._animatorDict["default"]),animator.copy()},_onSwipeableChanged:function(swipeable){swipeable=""===swipeable||void 0===swipeable||"true"==swipeable,this.setSwipeable(swipeable)},setSwipeable:function(enabled){enabled?this._activateHammer():this._deactivateHammer()},_onWindowResize:function(){this._recalculateMAX(),this._refreshMenuPageWidth()},_onMaxSlideDistanceChanged:function(){this._recalculateMAX(),this._refreshMenuPageWidth()},_normalizeMaxSlideDistanceAttr:function(){var maxDistance=this._attrs.maxSlideDistance;if("maxSlideDistance"in this._attrs){if("string"!=typeof maxDistance)throw new Error("invalid state");-1!==maxDistance.indexOf("px",maxDistance.length-2)?maxDistance=parseInt(maxDistance.replace("px",""),10):maxDistance.indexOf("%",maxDistance.length-1)>0&&(maxDistance=maxDistance.replace("%",""),maxDistance=parseFloat(maxDistance)/100*this._mainPage[0].clientWidth)}else maxDistance=.9*this._mainPage[0].clientWidth;return maxDistance},_recalculateMAX:function(){var maxDistance=this._normalizeMaxSlideDistanceAttr();maxDistance&&this._logic.setMaxDistance(parseInt(maxDistance,10))},_activateHammer:function(){this._hammertime.on("touch dragleft dragright swipeleft swiperight release",this._boundHandleEvent)},_deactivateHammer:function(){this._hammertime.off("touch dragleft dragright swipeleft swiperight release",this._boundHandleEvent)},_bindEvents:function(){this._hammertime=new Hammer(this._element[0],{dragMinDistance:1})},_appendMainPage:function(pageUrl,templateHTML){var pageScope=this._scope.$new(),pageContent=angular.element(templateHTML),link=$compile(pageContent);this._mainPage.append(pageContent),this._currentPageElement&&(this._currentPageElement.remove(),this._currentPageScope.$destroy()),link(pageScope),this._currentPageElement=pageContent,this._currentPageScope=pageScope,this._currentPageUrl=pageUrl},_appendMenuPage:function(templateHTML){var pageScope=this._scope.$new(),pageContent=angular.element(templateHTML),link=$compile(pageContent);this._menuPage.append(pageContent),this._currentMenuPageScope&&(this._currentMenuPageScope.$destroy(),this._currentMenuPageElement.remove()),link(pageScope),this._currentMenuPageElement=pageContent,this._currentMenuPageScope=pageScope},setMenuPage:function(page,options){if(!page)throw new Error("cannot set undefined page");options=options||{},options.callback=options.callback||function(){};var self=this;$onsen.getPageHTMLAsync(page).then(function(html){self._appendMenuPage(angular.element(html)),options.closeMenu&&self.close(),options.callback()},function(){throw new Error("Page is not found: "+page)})},setMainPage:function(pageUrl,options){options=options||{},options.callback=options.callback||function(){};var done=function(){options.closeMenu&&this.close(),options.callback()}.bind(this);if(this.currentPageUrl===pageUrl)return done(),void 0;if(!pageUrl)throw new Error("cannot set undefined page");var self=this;$onsen.getPageHTMLAsync(pageUrl).then(function(html){self._appendMainPage(pageUrl,html),done()},function(){throw new Error("Page is not found: "+page)})},_handleEvent:function(event){if(!this._doorLock.isLocked())switch(this._isInsideIgnoredElement(event.target)&&event.gesture.stopDetect(),event.type){case"dragleft":case"dragright":if(this._logic.isClosed()&&!this._isInsideSwipeTargetArea(event))return;
event.gesture.preventDefault();var deltaX=event.gesture.deltaX,deltaDistance=this._isRightMenu?-deltaX:deltaX,startEvent=event.gesture.startEvent;if("isOpened"in startEvent||(startEvent.isOpened=this._logic.isOpened()),0>deltaDistance&&this._logic.isClosed())break;if(deltaDistance>0&&this._logic.isOpened())break;var distance=startEvent.isOpened?deltaDistance+this._logic.getMaxDistance():deltaDistance;this._logic.translate(distance);break;case"swipeleft":if(event.gesture.preventDefault(),this._logic.isClosed()&&!this._isInsideSwipeTargetArea(event))return;this._isRightMenu?this.open():this.close(),event.gesture.stopDetect();break;case"swiperight":if(event.gesture.preventDefault(),this._logic.isClosed()&&!this._isInsideSwipeTargetArea(event))return;this._isRightMenu?this.close():this.open(),event.gesture.stopDetect();break;case"release":this._lastDistance=null,this._logic.shouldOpen()?this.open():this._logic.shouldClose()&&this.close()}},_isInsideIgnoredElement:function(element){do{if(element.getAttribute&&element.getAttribute("sliding-menu-ignore"))return!0;element=element.parentNode}while(element);return!1},_isInsideSwipeTargetArea:function(event){var x=event.gesture.center.pageX;"_swipeTargetWidth"in event.gesture.startEvent||(event.gesture.startEvent._swipeTargetWidth=this._getSwipeTargetWidth());var targetWidth=event.gesture.startEvent._swipeTargetWidth;return this._isRightMenu?this._mainPage[0].clientWidth-x<targetWidth:targetWidth>x},_getSwipeTargetWidth:function(){var targetWidth=this._attrs.swipeTargetWidth;"string"==typeof targetWidth&&(targetWidth=targetWidth.replace("px",""));var width=parseInt(targetWidth,10);return 0>width||!targetWidth?this._mainPage[0].clientWidth:width},closeMenu:function(){return this.close.apply(this,arguments)},close:function(options){options=options||{},options="function"==typeof options?{callback:options}:options,this._logic.isClosed()||(this.emit("preclose",{slidingMenu:this}),this._doorLock.waitUnlock(function(){this._logic.close(options)}.bind(this)))},_close:function(options){var callback=options.callback||function(){},unlock=this._doorLock.lock(),instant="none"==options.animation;this._animator.closeMenu(function(){unlock(),this._mainPage.children().css("pointer-events",""),this._mainPageHammer.off("tap",this._bindedOnTap),this.emit("postclose",{slidingMenu:this}),callback()}.bind(this),instant)},openMenu:function(){return this.open.apply(this,arguments)},open:function(options){options=options||{},options="function"==typeof options?{callback:options}:options,this.emit("preopen",{slidingMenu:this}),this._doorLock.waitUnlock(function(){this._logic.open(options)}.bind(this))},_open:function(options){var callback=options.callback||function(){},unlock=this._doorLock.lock(),instant="none"==options.animation;this._animator.openMenu(function(){unlock(),this._mainPage.children().css("pointer-events","none"),this._mainPageHammer.on("tap",this._bindedOnTap),this.emit("postopen",{slidingMenu:this}),callback()}.bind(this),instant)},toggle:function(options){this._logic.isClosed()?this.open(options):this.close(options)},toggleMenu:function(){return this.toggle.apply(this,arguments)},isMenuOpened:function(){return this._logic.isOpened()},_translate:function(event){this._animator.translateMenu(event)}});return SlidingMenuView._animatorDict={"default":new RevealSlidingMenuAnimator,overlay:new OverlaySlidingMenuAnimator,reveal:new RevealSlidingMenuAnimator,push:new PushSlidingMenuAnimator},SlidingMenuView.registerSlidingMenuAnimator=function(name,animator){if(!(animator instanceof SlidingMenuAnimator))throw new Error('"animator" param must be an instance of SlidingMenuAnimator');this._animatorDict[name]=animator},MicroEvent.mixin(SlidingMenuView),SlidingMenuView}])}(),function(){"use strict";var module=angular.module("onsen");module.factory("SlidingMenuAnimator",function(){return Class.extend({setup:function(){},onResized:function(){},openMenu:function(){},closeClose:function(){},destroy:function(){},translateMenu:function(){},copy:function(){throw new Error("Override copy method.")}})})}(),function(){"use strict";var module=angular.module("onsen");module.factory("SplitView",["$compile","RevealSlidingMenuAnimator","$onsen","$onsGlobal",function($compile,RevealSlidingMenuAnimator,$onsen,$onsGlobal){function isNumber(n){return!isNaN(parseFloat(n))&&isFinite(n)}var SPLIT_MODE=0,COLLAPSE_MODE=1,MAIN_PAGE_RATIO=.9,SplitView=Class.extend({init:function(scope,element,attrs){element.addClass("onsen-sliding-menu"),this._element=element,this._scope=scope,this._attrs=attrs,this._mainPage=angular.element(element[0].querySelector(".onsen-split-view__main")),this._secondaryPage=angular.element(element[0].querySelector(".onsen-split-view__secondary")),this._max=this._mainPage[0].clientWidth*MAIN_PAGE_RATIO,this._mode=SPLIT_MODE,this._doorLock=new DoorLock,this._doSplit=!1,this._doCollapse=!1,$onsGlobal.orientation.on("change",this._onResize.bind(this)),this._animator=new RevealSlidingMenuAnimator,this._element.css("display","none"),attrs.mainPage&&this.setMainPage(attrs.mainPage),attrs.secondaryPage&&this.setSecondaryPage(attrs.secondaryPage);var unlock=this._doorLock.lock();this._considerChangingCollapse(),this._setSize(),setTimeout(function(){this._element.css("display","block"),unlock()}.bind(this),1e3/60*2),scope.$on("$destroy",this._destroy.bind(this))},_appendSecondPage:function(templateHTML){var pageScope=this._scope.$new(),pageContent=$compile(templateHTML)(pageScope);this._secondaryPage.append(pageContent),this._currentSecondaryPageElement&&(this._currentSecondaryPageElement.remove(),this._currentSecondaryPageScope.$destroy()),this._currentSecondaryPageElement=pageContent,this._currentSecondaryPageScope=pageScope},_appendMainPage:function(templateHTML){var pageScope=this._scope.$new(),pageContent=$compile(templateHTML)(pageScope);this._mainPage.append(pageContent),this._currentPage&&(this._currentPage.remove(),this._currentPageScope.$destroy()),this._currentPage=pageContent,this._currentPageScope=pageScope},setSecondaryPage:function(page){if(!page)throw new Error("cannot set undefined page");$onsen.getPageHTMLAsync(page).then(function(html){this._appendSecondPage(angular.element(html.trim()))}.bind(this),function(){throw new Error("Page is not found: "+page)})},setMainPage:function(page){if(!page)throw new Error("cannot set undefined page");$onsen.getPageHTMLAsync(page).then(function(html){this._appendMainPage(angular.element(html.trim()))}.bind(this),function(){throw new Error("Page is not found: "+page)})},_onResize:function(){var lastMode=this._mode;this._considerChangingCollapse(),lastMode===COLLAPSE_MODE&&this._mode===COLLAPSE_MODE&&this._animator.onResized({isOpened:!1,width:"90%"}),this._max=this._mainPage[0].clientWidth*MAIN_PAGE_RATIO},_considerChangingCollapse:function(){var should=this._shouldCollapse();should&&this._mode!==COLLAPSE_MODE?(this._fireUpdateEvent(),this._doSplit?this._activateSplitMode():this._activateCollapseMode()):should||this._mode!==COLLAPSE_MODE||(this._fireUpdateEvent(),this._doCollapse?this._activateCollapseMode():this._activateSplitMode()),this._doCollapse=this._doSplit=!1},update:function(){this._fireUpdateEvent();var should=this._shouldCollapse();this._doSplit?this._activateSplitMode():this._doCollapse?this._activateCollapseMode():should?this._activateCollapseMode():should||this._activateSplitMode(),this._doSplit=this._doCollapse=!1},_getOrientation:function(){return $onsGlobal.orientation.isPortrait()?"portrait":"landscape"},getCurrentMode:function(){return this._mode===COLLAPSE_MODE?"collapse":"split"},_shouldCollapse:function(){var c="portrait";if("string"==typeof this._attrs.collapse&&(c=this._attrs.collapse.trim()),"portrait"==c)return $onsGlobal.orientation.isPortrait();if("landscape"==c)return $onsGlobal.orientation.isLandscape();if("width"==c.substr(0,5)){var num=c.split(" ")[1];num.indexOf("px")>=0&&(num=num.substr(0,num.length-2));var width=window.innerWidth;return isNumber(num)&&num>width}var mq=window.matchMedia(c);return mq.matches},_setSize:function(){if(this._mode===SPLIT_MODE){this._attrs.mainPageWidth||(this._attrs.mainPageWidth="70");var secondarySize=100-this._attrs.mainPageWidth.replace("%","");this._secondaryPage.css({width:secondarySize+"%",opacity:1}),this._mainPage.css({width:this._attrs.mainPageWidth+"%"}),this._mainPage.css("left",secondarySize+"%")}},_fireEvent:function(name){this.emit(name,{splitView:this,width:window.innerWidth,orientation:this._getOrientation()})},_fireUpdateEvent:function(){var that=this;this.emit("update",{splitView:this,shouldCollapse:this._shouldCollapse(),currentMode:this.getCurrentMode(),split:function(){that._doSplit=!0,that._doCollapse=!1},collapse:function(){that._doSplit=!1,that._doCollapse=!0},width:window.innerWidth,orientation:this._getOrientation()})},_activateCollapseMode:function(){this._mode!==COLLAPSE_MODE&&(this._fireEvent("precollapse"),this._secondaryPage.attr("style",""),this._mainPage.attr("style",""),this._mode=COLLAPSE_MODE,this._animator.setup(this._element,this._mainPage,this._secondaryPage,{isRight:!1,width:"90%"}),this._fireEvent("postcollapse"))},_activateSplitMode:function(){this._mode!==SPLIT_MODE&&(this._fireEvent("presplit"),this._animator.destroy(),this._secondaryPage.attr("style",""),this._mainPage.attr("style",""),this._mode=SPLIT_MODE,this._setSize(),this._fireEvent("postsplit"))},_destroy:function(){this.emit("destroy"),this._element=null,this._scope=null}});return MicroEvent.mixin(SplitView),SplitView}])}(),function(){"use strict";var module=angular.module("onsen");module.factory("SwitchView",["$onsen",function(){var SwitchView=Class.extend({init:function(element,scope,attrs){this._element=element,this._checkbox=angular.element(element[0].querySelector("input[type=checkbox]")),this._scope=scope,attrs.$observe("disabled",function(){element.attr("disabled")?this._checkbox.attr("disabled","disabled"):this._checkbox.removeAttr("disabled")}.bind(this)),this._checkbox.on("change",function(){this.emit("change",{"switch":this,value:this._checkbox[0].checked,isInteractive:!0})}.bind(this))},isChecked:function(){return this._checkbox[0].checked},setChecked:function(isChecked){isChecked=!!isChecked,this._checkbox[0].checked!=isChecked&&(this._scope.model=isChecked,this._checkbox[0].checked=isChecked,this._scope.$evalAsync(),this.emit("change",{"switch":this,value:isChecked,isInteractive:!1}))},getCheckboxElement:function(){return this._checkbox[0]}});return MicroEvent.mixin(SwitchView),SwitchView}])}(),function(){"use strict;";var module=angular.module("onsen");module.factory("TabbarAnimator",function(){var TabbarAnimator=Class.extend({apply:function(){throw new Error("This method must be implemented.")}});return TabbarAnimator}),module.factory("TabbarNoneAnimator",["TabbarAnimator",function(TabbarAnimator){var TabbarNoneAnimator=TabbarAnimator.extend({apply:function(enterPage,leavePage,done){done()}});return TabbarNoneAnimator}]),module.factory("TabbarFadeAnimator",["TabbarAnimator",function(TabbarAnimator){var TabbarFadeAnimator=TabbarAnimator.extend({apply:function(enterPage,leavePage,done){animit.runAll(animit(enterPage[0]).queue({transform:"translate3D(0, 0, 0)",opacity:0}).queue({transform:"translate3D(0, 0, 0)",opacity:1},{duration:.4,timing:"linear"}).resetStyle().queue(function(callback){done(),callback()}),animit(leavePage[0]).queue({transform:"translate3D(0, 0, 0)",opacity:1}).queue({transform:"translate3D(0, 0, 0)",opacity:0},{duration:.4,timing:"linear"}))}});return TabbarFadeAnimator}]),module.factory("TabbarView",["$onsen","$compile","TabbarAnimator","TabbarNoneAnimator","TabbarFadeAnimator",function($onsen,$compile,TabbarAnimator,TabbarNoneAnimator,TabbarFadeAnimator){var TabbarView=Class.extend({_tabbarId:void 0,_tabItems:void 0,init:function(scope,element,attrs){this._scope=scope,this._element=element,this._attrs=attrs,this._tabbarId=Date.now(),this._tabItems=[],this._contentElement=angular.element(element[0].querySelector(".ons-tab-bar__content")),this._tabbarElement=angular.element(element[0].querySelector(".ons-tab-bar__footer")),this._scope.$on("$destroy",this._destroy.bind(this)),this._hasTopTabbar()&&this._prepareForTopTabbar()},_prepareForTopTabbar:function(){this._contentElement.attr("no-status-bar-fill",""),setImmediate(function(){this._contentElement.addClass("tab-bar--top__content"),this._tabbarElement.addClass("tab-bar--top")}.bind(this));var page=ons.findParentComponentUntil("ons-page",this._element[0]);if(page&&this._element.css("top",window.getComputedStyle(page.getContentElement(),null).getPropertyValue("padding-top")),$onsen.shouldFillStatusBar(this._element[0])){var fill=angular.element(document.createElement("div"));fill.addClass("tab-bar__status-bar-fill"),fill.css({width:"0px",height:"0px"}),this._element.prepend(fill)}},_hasTopTabbar:function(){return"top"===this._attrs.position},setActiveTab:function(index,options){options=options||{};var previousTabItem=this._tabItems[this.getActiveTabIndex()],selectedTabItem=this._tabItems[index];if(("undefined"!=typeof selectedTabItem.noReload||selectedTabItem.isPersistent())&&index===this.getActiveTabIndex())return this.emit("reactive",{index:index,tabItem:selectedTabItem}),!1;var needLoad=selectedTabItem.page&&!options.keepPage;if(!selectedTabItem)return!1;var canceled=!1;if(this.emit("prechange",{index:index,tabItem:selectedTabItem,cancel:function(){canceled=!0}}),canceled)return selectedTabItem.setInactive(),previousTabItem&&previousTabItem.setActive(),!1;if(selectedTabItem.setActive(),needLoad){var removeElement=!0;previousTabItem&&previousTabItem.isPersistent()&&(removeElement=!1,previousTabItem._pageElement=this._currentPageElement);var params={callback:function(){this.emit("postchange",{index:index,tabItem:selectedTabItem})}.bind(this),_removeElement:removeElement};options.animation&&(params.animation=options.animation),selectedTabItem.isPersistent()&&selectedTabItem._pageElement?this._loadPersistentPageDOM(selectedTabItem._pageElement,params):this._loadPage(selectedTabItem.page,params)}for(var i=0;i<this._tabItems.length;i++)this._tabItems[i]!=selectedTabItem?this._tabItems[i].setInactive():needLoad||this.emit("postchange",{index:index,tabItem:selectedTabItem});return!0},setTabbarVisibility:function(visible){this._scope.hideTabs=!visible,this._onTabbarVisibilityChanged()},_onTabbarVisibilityChanged:function(){this._hasTopTabbar()?this._scope.hideTabs?this._contentElement.css("top","0px"):this._contentElement.css("top",""):this._scope.hideTabs?this._contentElement.css("bottom","0px"):this._contentElement.css("bottom","")},addTabItem:function(tabItem){this._tabItems.push(tabItem)},getActiveTabIndex:function(){for(var tabItem,i=0;i<this._tabItems.length;i++)if(tabItem=this._tabItems[i],tabItem.isActive())return i;return-1},loadPage:function(page,options){return this._loadPage(page,options)},_loadPage:function(page,options){$onsen.getPageHTMLAsync(page).then(function(html){var pageElement=angular.element(html.trim());this._loadPageDOM(pageElement,options)}.bind(this),function(){throw new Error("Page is not found: "+page)})},_switchPage:function(element,scope,options){if(this._currentPageElement){var oldPageElement=this._currentPageElement,oldPageScope=this._currentPageScope;this._currentPageElement=element,this._currentPageScope=scope,this._getAnimatorOption(options).apply(element,oldPageElement,function(){options._removeElement?(oldPageElement.remove(),oldPageScope.$destroy()):oldPageElement.css("display","none"),options.callback instanceof Function&&options.callback()})}else this._currentPageElement=element,this._currentPageScope=scope,options.callback instanceof Function&&options.callback()},_loadPageDOM:function(element,options){options=options||{};var pageScope=this._scope.$new(),link=$compile(element);this._contentElement.append(element);var pageContent=link(pageScope);pageScope.$evalAsync(),this._switchPage(pageContent,pageScope,options)},_loadPersistentPageDOM:function(element,options){options=options||{},element.css("display","block"),this._switchPage(element,element.scope(),options)},_getAnimatorOption:function(options){var animationAttr=this._element.attr("animation")||"default";return TabbarView._animatorDict[options.animation||animationAttr]||TabbarView._animatorDict["default"]},_destroy:function(){this.emit("destroy"),this._element=this._scope=this._attrs=null}});return MicroEvent.mixin(TabbarView),TabbarView._animatorDict={"default":new TabbarNoneAnimator,none:new TabbarNoneAnimator,fade:new TabbarFadeAnimator},TabbarView.registerAnimator=function(name,animator){if(!(animator instanceof TabbarAnimator))throw new Error('"animator" param must be an instance of TabbarAnimator');this._animatorDict[name]=animator},TabbarView}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsAlertDialog",["$onsen","AlertDialogView",function($onsen,AlertDialogView){return{restrict:"E",replace:!1,scope:!0,transclude:!1,compile:function(element,attrs){var modifierTemplater=$onsen.generateModifierTemplater(attrs);element.addClass("alert-dialog "+modifierTemplater("alert-dialog--*"));var titleElement=angular.element(element[0].querySelector(".alert-dialog-title")),contentElement=angular.element(element[0].querySelector(".alert-dialog-content"));return titleElement.length&&titleElement.addClass(modifierTemplater("alert-dialog-title--*")),contentElement.length&&contentElement.addClass(modifierTemplater("alert-dialog-content--*")),{pre:function(scope,element,attrs){var alertDialog=new AlertDialogView(scope,element,attrs);$onsen.declareVarAttribute(attrs,alertDialog),$onsen.registerEventHandlers(alertDialog,"preshow prehide postshow posthide destroy"),$onsen.addModifierMethods(alertDialog,"alert-dialog--*",element),titleElement.length&&$onsen.addModifierMethods(alertDialog,"alert-dialog-title--*",titleElement),contentElement.length&&$onsen.addModifierMethods(alertDialog,"alert-dialog-content--*",contentElement),$onsen.isAndroid()&&alertDialog.addModifier("android"),element.data("ons-alert-dialog",alertDialog),scope.$on("$destroy",function(){alertDialog._events=void 0,$onsen.removeModifierMethods(alertDialog),element.data("ons-alert-dialog",void 0),element=null})},post:function(scope,element){$onsen.fireComponentEvent(element[0],"init")}}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsBackButton",["$onsen","$compile","GenericView","ComponentCleaner",function($onsen,$compile,GenericView,ComponentCleaner){return{restrict:"E",replace:!1,templateUrl:$onsen.DIRECTIVE_TEMPLATE_URL+"/back_button.tpl",transclude:!0,scope:!0,link:{pre:function(scope,element,attrs,controller,transclude){var backButton=new GenericView(scope,element,attrs);$onsen.declareVarAttribute(attrs,backButton),element.data("ons-back-button",backButton),scope.$on("$destroy",function(){backButton._events=void 0,$onsen.removeModifierMethods(backButton),element.data("ons-back-button",void 0),element=null}),scope.modifierTemplater=$onsen.generateModifierTemplater(attrs);var navigator=ons.findParentComponentUntil("ons-navigator",element);scope.$watch(function(){return navigator.pages.length},function(nbrOfPages){scope.showBackButton=nbrOfPages>1}),$onsen.addModifierMethods(backButton,"toolbar-button--*",element.children()),transclude(scope,function(clonedElement){clonedElement[0]&&element[0].querySelector(".back-button__label").appendChild(clonedElement[0])}),ComponentCleaner.onDestroy(scope,function(){ComponentCleaner.destroyScope(scope),ComponentCleaner.destroyAttributes(attrs),element=null,scope=null,attrs=null})},post:function(scope,element){$onsen.fireComponentEvent(element[0],"init")}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsBottomToolbar",["$onsen","GenericView",function($onsen,GenericView){return{restrict:"E",replace:!1,transclude:!1,scope:!1,compile:function(element,attrs){var modifierTemplater=$onsen.generateModifierTemplater(attrs),inline="undefined"!=typeof attrs.inline;return element.addClass("bottom-bar"),element.addClass(modifierTemplater("bottom-bar--*")),element.css({"z-index":0}),inline&&element.css("position","static"),{pre:function(scope,element,attrs){var bottomToolbar=new GenericView(scope,element,attrs);$onsen.declareVarAttribute(attrs,bottomToolbar),element.data("ons-bottomToolbar",bottomToolbar),scope.$on("$destroy",function(){bottomToolbar._events=void 0,$onsen.removeModifierMethods(bottomToolbar),element.data("ons-bottomToolbar",void 0),element=null}),$onsen.addModifierMethods(bottomToolbar,"bottom-bar--*",element);var pageView=element.inheritedData("ons-page");pageView&&!inline&&pageView.registerBottomToolbar(element)},post:function(scope,element){$onsen.fireComponentEvent(element[0],"init")}}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsButton",["$onsen","ButtonView",function($onsen,ButtonView){return{restrict:"E",replace:!1,transclude:!0,scope:{animation:"@"},templateUrl:$onsen.DIRECTIVE_TEMPLATE_URL+"/button.tpl",link:function(scope,element,attrs,_,transclude){var button=new ButtonView(scope,element,attrs);$onsen.declareVarAttribute(attrs,button),element.data("ons-button",button),scope.$on("$destroy",function(){button._events=void 0,$onsen.removeModifierMethods(button),element.data("ons-button",void 0),element=null});var initialAnimation="slide-left";if(scope.modifierTemplater=$onsen.generateModifierTemplater(attrs),element.addClass("button effeckt-button"),element.addClass(scope.modifierTemplater("button--*")),element.addClass(initialAnimation),$onsen.addModifierMethods(button,"button--*",element),transclude(scope.$parent,function(cloned){angular.element(element[0].querySelector(".ons-button-inner")).append(cloned)}),attrs.ngController)throw new Error("This element can't accept ng-controller directive.");scope.item={},scope.item.animation=initialAnimation,scope.$watch("animation",function(newAnimation){newAnimation&&(scope.item.animation&&element.removeClass(scope.item.animation),scope.item.animation=newAnimation,element.addClass(scope.item.animation))}),attrs.$observe("shouldSpin",function(shouldSpin){"true"===shouldSpin?element.attr("data-loading",!0):element.removeAttr("data-loading")}),$onsen.cleaner.onDestroy(scope,function(){$onsen.clearComponent({scope:scope,attrs:attrs,element:element}),scope=element=attrs=null}),$onsen.fireComponentEvent(element[0],"init")}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsCarousel",["$onsen","CarouselView",function($onsen,CarouselView){return{restrict:"E",replace:!1,scope:!1,transclude:!1,compile:function(element,attrs){var templater=$onsen.generateModifierTemplater(attrs);return element.addClass(templater("carousel--*")),function(scope,element,attrs){var carousel=new CarouselView(scope,element,attrs);element.data("ons-carousel",carousel),$onsen.registerEventHandlers(carousel,"postchange refresh overscroll destroy"),$onsen.declareVarAttribute(attrs,carousel),scope.$on("$destroy",function(){carousel._events=void 0,element.data("ons-carousel",void 0),element=null}),element[0].hasAttribute("auto-refresh")&&scope.$watch(function(){return element[0].childNodes.length},function(){setImmediate(function(){carousel.refresh()})}),setImmediate(function(){carousel.refresh()}),$onsen.fireComponentEvent(element[0],"init")}}}}]),module.directive("onsCarouselItem",["$onsen",function($onsen){return{restrict:"E",replace:!1,scope:!1,transclude:!1,compile:function(element,attrs){var templater=$onsen.generateModifierTemplater(attrs);return element.addClass(templater("carousel-item--*")),element.css("width","100%"),function(){}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsCol",["$timeout","$onsen",function($timeout,$onsen){return{restrict:"E",replace:!1,transclude:!1,scope:!1,compile:function(element){return element.addClass("col ons-col-inner"),function(scope,element,attrs){function updateAlign(align){"top"===align||"center"===align||"bottom"===align?(element.removeClass("col-top col-center col-bottom"),element.addClass("col-"+align)):element.removeClass("col-top col-center col-bottom")}function updateWidth(width){"string"==typeof width?(width=(""+width).trim(),width=width.match(/^\d+$/)?width+"%":width,element.css({"-webkit-box-flex":"0","-webkit-flex":"0 0 "+width,"-moz-box-flex":"0","-moz-flex":"0 0 "+width,"-ms-flex":"0 0 "+width,flex:"0 0 "+width,"max-width":width})):element.removeAttr("style")}attrs.$observe("align",function(align){updateAlign(align)}),attrs.$observe("width",function(width){updateWidth(width)}),attrs.$observe("size",function(size){attrs.width||updateWidth(size)}),updateAlign(attrs.align),attrs.size&&!attrs.width?updateWidth(attrs.size):updateWidth(attrs.width),$onsen.cleaner.onDestroy(scope,function(){$onsen.clearComponent({scope:scope,element:element,attrs:attrs}),element=attrs=scope=null}),$onsen.fireComponentEvent(element[0],"init")}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsDialog",["$onsen","DialogView",function($onsen,DialogView){return{restrict:"E",replace:!1,scope:!0,transclude:!0,templateUrl:$onsen.DIRECTIVE_TEMPLATE_URL+"/dialog.tpl",compile:function(element,attrs,transclude){return element[0].setAttribute("no-status-bar-fill",""),{pre:function(scope,element,attrs){transclude(scope,function(clone){angular.element(element[0].querySelector(".dialog")).append(clone)});var dialog=new DialogView(scope,element,attrs);scope.modifierTemplater=$onsen.generateModifierTemplater(attrs),$onsen.addModifierMethods(dialog,"dialog--*",angular.element(element[0].querySelector(".dialog"))),$onsen.declareVarAttribute(attrs,dialog),$onsen.registerEventHandlers(dialog,"preshow prehide postshow posthide destroy"),element.data("ons-dialog",dialog),scope.$on("$destroy",function(){dialog._events=void 0,$onsen.removeModifierMethods(dialog),element.data("ons-dialog",void 0),element=null})},post:function(scope,element){$onsen.fireComponentEvent(element[0],"init")}}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsDummyForInit",["$rootScope",function($rootScope){var isReady=!1;return{restrict:"E",replace:!1,link:{post:function(scope,element){isReady||(isReady=!0,$rootScope.$broadcast("$ons-ready")),element.remove()}}}}])}(),function(){"use strict";var EVENTS="drag dragleft dragright dragup dragdown hold release swipe swipeleft swiperight swipeup swipedown tap doubletap touch transform pinch pinchin pinchout rotate".split(/ +/);angular.module("onsen").directive("onsGestureDetector",["$onsen",function($onsen){function titlize(str){return str.charAt(0).toUpperCase()+str.slice(1)}var scopeDef=EVENTS.reduce(function(dict,name){return dict["ng"+titlize(name)]="&",dict},{});return{restrict:"E",scope:scopeDef,replace:!1,transclude:!0,compile:function(){return function(scope,element,attrs,controller,transclude){function handleEvent(event){var attr="ng"+titlize(event.type);attr in scopeDef&&scope[attr]({$event:event})}transclude(scope.$parent,function(cloned){element.append(cloned)});var hammer=new Hammer(element[0]);hammer.on(EVENTS.join(" "),handleEvent),$onsen.cleaner.onDestroy(scope,function(){hammer.off(EVENTS.join(" "),handleEvent),$onsen.clearComponent({scope:scope,element:element,attrs:attrs}),hammer.element=scope=element=attrs=null}),$onsen.fireComponentEvent(element[0],"init")}}}}])}(),function(){"use strict";function cleanClassAttribute(element){var classList=(""+element.attr("class")).split(/ +/).filter(function(classString){return"fa"!==classString&&"fa-"!==classString.substring(0,3)&&"ion-"!==classString.substring(0,4)});element.attr("class",classList.join(" "))}function buildClassAndStyle(attrs){var classList=["ons-icon"],style={};0===attrs.icon.indexOf("ion-")?(classList.push(attrs.icon),classList.push("ons-icon--ion")):0===attrs.icon.indexOf("fa-")?(classList.push(attrs.icon),classList.push("fa")):(classList.push("fa"),classList.push("fa-"+attrs.icon));var size=""+attrs.size;return size.match(/^[1-5]x|lg$/)?classList.push("fa-"+size):"string"==typeof attrs.size?style["font-size"]=size:classList.push("fa-lg"),{"class":classList.join(" "),style:style}}var module=angular.module("onsen");module.directive("onsIcon",["$onsen",function($onsen){return{restrict:"E",replace:!1,transclude:!1,link:function(scope,element,attrs){if(attrs.ngController)throw new Error("This element can't accept ng-controller directive.");var update=function(){cleanClassAttribute(element);var builded=buildClassAndStyle(attrs);element.css(builded.style),element.addClass(builded["class"])},builded=buildClassAndStyle(attrs);element.css(builded.style),element.addClass(builded["class"]),attrs.$observe("icon",update),attrs.$observe("size",update),attrs.$observe("fixedWidth",update),attrs.$observe("rotate",update),attrs.$observe("flip",update),attrs.$observe("spin",update),$onsen.cleaner.onDestroy(scope,function(){$onsen.clearComponent({scope:scope,element:element,attrs:attrs}),element=scope=attrs=null}),$onsen.fireComponentEvent(element[0],"init")}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsIfOrientation",["$onsen","$onsGlobal",function($onsen,$onsGlobal){return{restrict:"A",replace:!1,transclude:!1,scope:!1,compile:function(element){return element.css("display","none"),function(scope,element,attrs){function update(){var userOrientation=(""+attrs.onsIfOrientation).toLowerCase(),orientation=getLandscapeOrPortrait();("portrait"===userOrientation||"landscape"===userOrientation)&&(userOrientation===orientation?element.css("display",""):element.css("display","none"))}function getLandscapeOrPortrait(){return $onsGlobal.orientation.isPortrait()?"portrait":"landscape"}element.addClass("ons-if-orientation-inner"),attrs.$observe("onsIfOrientation",update),$onsGlobal.orientation.on("change",update),update(),$onsen.cleaner.onDestroy(scope,function(){$onsGlobal.orientation.off("change",update),$onsen.clearComponent({element:element,scope:scope,attrs:attrs}),element=scope=attrs=null})}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsIfPlatform",["$onsen",function($onsen){return{restrict:"A",replace:!1,transclude:!1,scope:!1,compile:function(element){function getPlatformString(){if(navigator.userAgent.match(/Android/i))return"android";if(navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/RIM Tablet OS/i)||navigator.userAgent.match(/BB10/i))return"blackberry";if(navigator.userAgent.match(/iPhone|iPad|iPod/i))return"ios";if(navigator.userAgent.match(/IEMobile/i))return"windows";var isOpera=!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0;if(isOpera)return"opera";var isFirefox="undefined"!=typeof InstallTrigger;if(isFirefox)return"firefox";var isSafari=Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0;if(isSafari)return"safari";var isChrome=!!window.chrome&&!isOpera;if(isChrome)return"chrome";var isIE=!1||!!document.documentMode;return isIE?"ie":"unknown"}element.addClass("ons-if-platform-inner"),element.css("display","none");var platform=getPlatformString();return function(scope,element,attrs){function update(){attrs.onsIfPlatform.toLowerCase()===platform.toLowerCase()?element.css("display","block"):element.css("display","none")}attrs.$observe("onsIfPlatform",function(userPlatform){userPlatform&&update()}),update(),$onsen.cleaner.onDestroy(scope,function(){$onsen.clearComponent({element:element,scope:scope,attrs:attrs}),element=scope=attrs=null})}}}}])}(),function(){"use strict";var module=angular.module("onsen"),compileFunction=function(show,$onsen){return function(){return function(scope,element,attrs){var dispShow=show?"block":"none",dispHide=show?"none":"block",onShow=function(){element.css("display",dispShow)},onHide=function(){element.css("display",dispHide)},onInit=function(e){e.visible?onShow():onHide()};ons.softwareKeyboard.on("show",onShow),ons.softwareKeyboard.on("hide",onHide),ons.softwareKeyboard.on("init",onInit),ons.softwareKeyboard._visible?onShow():onHide(),$onsen.cleaner.onDestroy(scope,function(){ons.softwareKeyboard.off("show",onShow),ons.softwareKeyboard.off("hide",onHide),ons.softwareKeyboard.off("init",onInit),$onsen.clearComponent({element:element,scope:scope,attrs:attrs}),element=scope=attrs=null
})}}};module.directive("onsKeyboardActive",["$onsen",function($onsen){return{restrict:"A",replace:!1,transclude:!1,scope:!1,compile:compileFunction(!0,$onsen)}}]),module.directive("onsKeyboardInactive",["$onsen",function($onsen){return{restrict:"A",replace:!1,transclude:!1,scope:!1,compile:compileFunction(!1,$onsen)}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsLazyRepeat",["$onsen","LazyRepeatView",function($onsen,LazyRepeatView){return{restrict:"A",replace:!1,priority:1e3,transclude:"element",compile:function(element,attrs,linker){return function(scope,element,attrs){new LazyRepeatView(scope,element,attrs,linker);scope.$on("$destroy",function(){scope=element=attrs=linker=null})}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsList",["$onsen","GenericView",function($onsen,GenericView){return{restrict:"E",scope:!1,replace:!1,transclude:!1,compile:function(){return function(scope,element,attrs){var list=new GenericView(scope,element,attrs);$onsen.declareVarAttribute(attrs,list),element.data("ons-list",list),scope.$on("$destroy",function(){list._events=void 0,$onsen.removeModifierMethods(list),element.data("ons-list",void 0),element=null});var templater=$onsen.generateModifierTemplater(attrs);element.addClass("list ons-list-inner"),element.addClass(templater("list--*")),$onsen.addModifierMethods(list,"list--*",element),$onsen.fireComponentEvent(element[0],"init")}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsListHeader",["$onsen","GenericView",function($onsen,GenericView){return{restrict:"E",replace:!1,transclude:!1,compile:function(){return function(scope,element,attrs){var listHeader=new GenericView(scope,element,attrs);$onsen.declareVarAttribute(attrs,listHeader),element.data("ons-listHeader",listHeader),scope.$on("$destroy",function(){listHeader._events=void 0,$onsen.removeModifierMethods(listHeader),element.data("ons-listHeader",void 0),element=null});var templater=$onsen.generateModifierTemplater(attrs);element.addClass("list__header ons-list-header-inner"),element.addClass(templater("list__header--*")),$onsen.addModifierMethods(listHeader,"list__header--*",element),$onsen.fireComponentEvent(element[0],"init")}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsListItem",["$onsen","GenericView",function($onsen,GenericView){return{restrict:"E",replace:!1,transclude:!1,compile:function(){return function(scope,element,attrs){var listItem=new GenericView(scope,element,attrs);$onsen.declareVarAttribute(attrs,listItem),element.data("ons-list-item",listItem),scope.$on("$destroy",function(){listItem._events=void 0,$onsen.removeModifierMethods(listItem),element.data("ons-list-item",void 0),element=null});var templater=$onsen.generateModifierTemplater(attrs);element.addClass("list__item ons-list-item-inner"),element.addClass(templater("list__item--*")),$onsen.addModifierMethods(listItem,"list__item--*",element),$onsen.fireComponentEvent(element[0],"init")}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsLoadingPlaceholder",["$onsen","$compile",function($onsen){return{restrict:"A",replace:!1,transclude:!1,scope:!1,compile:function(element,attrs){if(!attrs.onsLoadingPlaceholder.length)throw Error("Must define page to load.");setImmediate(function(){$onsen.getPageHTMLAsync(attrs.onsLoadingPlaceholder).then(function(html){html=html.trim().replace(/^<ons-page>/,"").replace(/<\/ons-page>$/,"");var div=document.createElement("div");div.innerHTML=html;var newElement=angular.element(div);newElement.css("display","none"),element.append(newElement),ons.compile(newElement[0]);for(var i=element[0].childNodes.length-1;i>=0;i--){var e=element[0].childNodes[i];e!==div&&element[0].removeChild(e)}newElement.css("display","block")})})}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsModal",["$onsen","ModalView",function($onsen,ModalView){function compile(element,attrs){var modifierTemplater=$onsen.generateModifierTemplater(attrs),html=element[0].innerHTML;element[0].innerHTML="";var wrapper=angular.element("<div></div>");wrapper.addClass("modal__content"),wrapper.addClass(modifierTemplater("modal--*__content")),element.css("display","none"),element.addClass("modal"),element.addClass(modifierTemplater("modal--*")),wrapper[0].innerHTML=html,element.append(wrapper)}return{restrict:"E",replace:!1,scope:!1,transclude:!1,compile:function(element,attrs){return compile(element,attrs),{pre:function(scope,element,attrs){var page=element.inheritedData("ons-page");page&&page.registerExtraElement(element);var modal=new ModalView(scope,element);$onsen.addModifierMethods(modal,"modal--*",element),$onsen.addModifierMethods(modal,"modal--*__content",element.children()),$onsen.declareVarAttribute(attrs,modal),element.data("ons-modal",modal),scope.$on("$destroy",function(){modal._events=void 0,$onsen.removeModifierMethods(modal),element.data("ons-modal",void 0)})},post:function(scope,element){$onsen.fireComponentEvent(element[0],"init")}}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsNavigator",["$compile","NavigatorView","$onsen",function($compile,NavigatorView,$onsen){return{restrict:"E",transclude:!1,scope:!0,compile:function(element){var html=$onsen.normalizePageHTML(element.html());return element.contents().remove(),{pre:function(scope,element,attrs){var navigator=new NavigatorView(scope,element,attrs);if($onsen.declareVarAttribute(attrs,navigator),$onsen.registerEventHandlers(navigator,"prepush prepop postpush postpop destroy"),attrs.page)navigator.pushPage(attrs.page,{});else{var pageScope=navigator._createPageScope(),pageElement=angular.element(html),linkScope=$compile(pageElement),link=function(){linkScope(pageScope)};navigator._pushPageDOM("",pageElement,link,pageScope,{}),pageElement=null}element.data("ons-navigator",navigator),scope.$on("$destroy",function(){navigator._events=void 0,element.data("ons-navigator",void 0),element=null})},post:function(scope,element){$onsen.fireComponentEvent(element[0],"init")}}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsPage",["$onsen","PageView",function($onsen,PageView){function firePageInitEvent(element){var i=0,f=function(){if(!(i++<5))throw new Error('Fail to fire "pageinit" event. Attach "ons-page" element to the document after initialization.');isAttached(element)?(fillStatusBar(element),$onsen.fireComponentEvent(element,"init"),fireActualPageInitEvent(element)):setImmediate(f)};f()}function fireActualPageInitEvent(element){var event=document.createEvent("HTMLEvents");event.initEvent("pageinit",!0,!0),element.dispatchEvent(event)}function fillStatusBar(element){if($onsen.shouldFillStatusBar(element)){var fill=angular.element(document.createElement("div"));fill.addClass("page__status-bar-fill"),fill.css({width:"0px",height:"0px"}),angular.element(element).prepend(fill)}}function isAttached(element){return document.documentElement===element?!0:element.parentNode?isAttached(element.parentNode):!1}function preLink(scope,element,attrs){var page=new PageView(scope,element,attrs);$onsen.declareVarAttribute(attrs,page),element.data("ons-page",page);var modifierTemplater=$onsen.generateModifierTemplater(attrs),template="page--*";element.addClass("page "+modifierTemplater(template)),$onsen.addModifierMethods(page,template,element);var pageContent=angular.element(element[0].querySelector(".page__content"));pageContent.addClass(modifierTemplater("page--*__content")),pageContent=null;var pageBackground=angular.element(element[0].querySelector(".page__background"));pageBackground.addClass(modifierTemplater("page--*__background")),pageBackground=null,$onsen.cleaner.onDestroy(scope,function(){page._events=void 0,$onsen.removeModifierMethods(page),element.data("ons-page",void 0),$onsen.clearComponent({element:element,scope:scope,attrs:attrs}),scope=element=attrs=null})}function postLink(scope,element){firePageInitEvent(element[0])}return{restrict:"E",transclude:!1,scope:!1,compile:function(element){var children=element.children().remove(),content=angular.element('<div class="page__content ons-page-inner"></div>').append(children),background=angular.element('<div class="page__background"></div>');if(element.attr("style")&&(background.attr("style",element.attr("style")),element.attr("style","")),element.append(background),Modernizr.csstransforms3d)element.append(content);else{content.css("overflow","visible");var wrapper=angular.element("<div></div>");wrapper.append(children),content.append(wrapper),element.append(content),wrapper=null;var scroller=new IScroll(content[0],{momentum:!0,bounce:!0,hScrollbar:!1,vScrollbar:!1,preventDefault:!1}),offset=10;scroller.on("scrollStart",function(){var scrolled=scroller.y-offset;scrolled<scroller.maxScrollY+40&&scroller.refresh()})}return content=null,background=null,children=null,{pre:preLink,post:postLink}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsPopover",["$onsen","PopoverView",function($onsen,PopoverView){return{restrict:"E",replace:!1,transclude:!0,scope:!0,templateUrl:$onsen.DIRECTIVE_TEMPLATE_URL+"/popover.tpl",compile:function(element,attrs,transclude){return{pre:function(scope,element,attrs){transclude(scope,function(clone){angular.element(element[0].querySelector(".popover__content")).append(clone)});var popover=new PopoverView(scope,element,attrs);$onsen.declareVarAttribute(attrs,popover),$onsen.registerEventHandlers(popover,"preshow prehide postshow posthide destroy"),element.data("ons-popover",popover),scope.$on("$destroy",function(){popover._events=void 0,$onsen.removeModifierMethods(popover),element.data("ons-popover",void 0),element=null}),scope.modifierTemplater=$onsen.generateModifierTemplater(attrs),$onsen.addModifierMethods(popover,"popover--*",angular.element(element[0].querySelector(".popover"))),$onsen.addModifierMethods(popover,"popover__content--*",angular.element(element[0].querySelector(".popover__content"))),$onsen.isAndroid()&&setImmediate(function(){popover.addModifier("android")}),scope.direction="up",scope.arrowPosition="bottom"},post:function(scope,element){$onsen.fireComponentEvent(element[0],"init")}}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsPullHook",["$onsen","PullHookView",function($onsen,PullHookView){return{restrict:"E",replace:!1,scope:!0,compile:function(){return{pre:function(scope,element,attrs){var pullHook=new PullHookView(scope,element,attrs);$onsen.declareVarAttribute(attrs,pullHook),$onsen.registerEventHandlers(pullHook,"changestate destroy"),element.data("ons-pull-hook",pullHook),scope.$on("$destroy",function(){pullHook._events=void 0,element.data("ons-pull-hook",void 0),scope=element=attrs=null})},post:function(scope,element){$onsen.fireComponentEvent(element[0],"init")}}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsRow",["$onsen","$timeout",function($onsen){return{restrict:"E",replace:!1,transclude:!1,scope:!1,compile:function(element){return element.addClass("row ons-row-inner"),function(scope,element,attrs){function update(){var align=(""+attrs.align).trim();("top"===align||"center"===align||"bottom"===align)&&(element.removeClass("row-bottom row-center row-top"),element.addClass("row-"+align))}attrs.$observe("align",function(){update()}),update(),$onsen.fireComponentEvent(element[0],"init")}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsScroller",["$onsen","$timeout",function($onsen,$timeout){return{restrict:"E",replace:!1,transclude:!0,scope:{onScrolled:"&",infinitScrollEnable:"="},compile:function(element){element.addClass("ons-scroller").children().remove();return function(scope,element,attrs,controller,transclude){if(attrs.ngController)throw new Error('"ons-scroller" can\'t accept "ng-controller" directive.');var wrapper=angular.element("<div></div>");wrapper.addClass("ons-scroller__content ons-scroller-inner"),element.append(wrapper),transclude(scope.$parent,function(cloned){wrapper.append(cloned),wrapper=null});var scrollWrapper;scrollWrapper=element[0];var offset=parseInt(attrs.threshold)||10;scope.onScrolled&&scrollWrapper.addEventListener("scroll",function(){if(scope.infinitScrollEnable){var scrollTopAndOffsetHeight=scrollWrapper.scrollTop+scrollWrapper.offsetHeight,scrollHeightMinusOffset=scrollWrapper.scrollHeight-offset;scrollTopAndOffsetHeight>=scrollHeightMinusOffset&&scope.onScrolled()}}),Modernizr.csstransforms3d||$timeout(function(){var iScroll=new IScroll(scrollWrapper,{momentum:!0,bounce:!0,hScrollbar:!1,vScrollbar:!1,preventDefault:!1});iScroll.on("scrollStart",function(){var scrolled=iScroll.y-offset;scrolled<iScroll.maxScrollY+40&&iScroll.refresh()}),scope.onScrolled&&iScroll.on("scrollEnd",function(){var scrolled=iScroll.y-offset;scrolled<iScroll.maxScrollY&&scope.onScrolled()})},500),$onsen.fireComponentEvent(element[0],"init")}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsSlidingMenu",["$compile","SlidingMenuView","$onsen",function($compile,SlidingMenuView,$onsen){return{restrict:"E",replace:!1,transclude:!1,scope:!0,compile:function(element){var main=element[0].querySelector(".main"),menu=element[0].querySelector(".menu");if(main)var mainHtml=angular.element(main).remove().html().trim();if(menu)var menuHtml=angular.element(menu).remove().html().trim();return function(scope,element,attrs){if(attrs.ngController)throw new Error("This element can't accept ng-controller directive.");element.append(angular.element("<div></div>").addClass("onsen-sliding-menu__menu ons-sliding-menu-inner")),element.append(angular.element("<div></div>").addClass("onsen-sliding-menu__main ons-sliding-menu-inner"));var slidingMenu=new SlidingMenuView(scope,element,attrs);$onsen.registerEventHandlers(slidingMenu,"preopen preclose postopen postclose destroy"),mainHtml&&!attrs.mainPage&&slidingMenu._appendMainPage(null,mainHtml),menuHtml&&!attrs.menuPage&&slidingMenu._appendMenuPage(menuHtml),$onsen.declareVarAttribute(attrs,slidingMenu),element.data("ons-sliding-menu",slidingMenu),scope.$on("$destroy",function(){slidingMenu._events=void 0,element.data("ons-sliding-menu",void 0)}),$onsen.fireComponentEvent(element[0],"init")}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsSplitView",["$compile","SplitView","$onsen",function($compile,SplitView,$onsen){return{restrict:"E",replace:!1,transclude:!1,scope:!0,compile:function(element){var mainPage=element[0].querySelector(".main-page"),secondaryPage=element[0].querySelector(".secondary-page");if(mainPage)var mainHtml=angular.element(mainPage).remove().html().trim();if(secondaryPage)var secondaryHtml=angular.element(secondaryPage).remove().html().trim();return function(scope,element,attrs){if(attrs.ngController)throw new Error("This element can't accept ng-controller directive.");element.append(angular.element("<div></div>").addClass("onsen-split-view__secondary full-screen ons-split-view-inner")),element.append(angular.element("<div></div>").addClass("onsen-split-view__main full-screen ons-split-view-inner"));var splitView=new SplitView(scope,element,attrs);mainHtml&&!attrs.mainPage&&splitView._appendMainPage(mainHtml),secondaryHtml&&!attrs.secondaryPage&&splitView._appendSecondPage(secondaryHtml),$onsen.declareVarAttribute(attrs,splitView),$onsen.registerEventHandlers(splitView,"update presplit precollapse postsplit postcollapse destroy"),element.data("ons-split-view",splitView),scope.$on("$destroy",function(){splitView._events=void 0,element.data("ons-split-view",void 0)}),$onsen.fireComponentEvent(element[0],"init")}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsSwitch",["$onsen","$parse","SwitchView",function($onsen,$parse,SwitchView){return{restrict:"E",replace:!1,transclude:!1,scope:!0,templateUrl:$onsen.DIRECTIVE_TEMPLATE_URL+"/switch.tpl",compile:function(){return function(scope,element,attrs){if(attrs.ngController)throw new Error("This element can't accept ng-controller directive.");var switchView=new SwitchView(element,scope,attrs),checkbox=angular.element(element[0].querySelector("input[type=checkbox]"));scope.modifierTemplater=$onsen.generateModifierTemplater(attrs);var label=element.children(),input=angular.element(label.children()[0]),toggle=angular.element(label.children()[1]);if($onsen.addModifierMethods(switchView,"switch--*",label),$onsen.addModifierMethods(switchView,"switch--*__input",input),$onsen.addModifierMethods(switchView,"switch--*__toggle",toggle),attrs.$observe("checked",function(){scope.model=!!element.attr("checked")}),attrs.$observe("name",function(name){element.attr("name")&&checkbox.attr("name",name)}),attrs.ngModel){var set=$parse(attrs.ngModel).assign;scope.$parent.$watch(attrs.ngModel,function(value){scope.model=value}),scope.$watch("model",function(to,from){set(scope.$parent,to),to!==from&&scope.$eval(attrs.ngChange)})}$onsen.declareVarAttribute(attrs,switchView),element.data("ons-switch",switchView),$onsen.cleaner.onDestroy(scope,function(){switchView._events=void 0,$onsen.removeModifierMethods(switchView),element.data("ons-switch",void 0),$onsen.clearComponent({element:element,scope:scope,attrs:attrs}),checkbox=element=attrs=scope=null}),$onsen.fireComponentEvent(element[0],"init")}}}}])}(),function(){"use strict";function tab($onsen,$compile){return{restrict:"E",transclude:!0,scope:{page:"@",active:"@",icon:"@",activeIcon:"@",label:"@",noReload:"@",persistent:"@"},templateUrl:$onsen.DIRECTIVE_TEMPLATE_URL+"/tab.tpl",compile:function(element){return element.addClass("tab-bar__item"),function(scope,element,attrs,controller,transclude){var tabbarView=element.inheritedData("ons-tabbar");if(!tabbarView)throw new Error("This ons-tab element is must be child of ons-tabbar element.");element.addClass(tabbarView._scope.modifierTemplater("tab-bar--*__item")),element.addClass(tabbarView._scope.modifierTemplater("tab-bar__item--*")),transclude(scope.$parent,function(cloned){var wrapper=angular.element(element[0].querySelector(".tab-bar-inner"));if(attrs.icon||attrs.label||!cloned[0]){var innerElement=angular.element("<div>"+defaultInnerTemplate+"</div>").children();wrapper.append(innerElement),$compile(innerElement)(scope)}else wrapper.append(cloned)});var radioButton=element[0].querySelector("input");scope.tabbarModifierTemplater=tabbarView._scope.modifierTemplater,scope.modifierTemplater=$onsen.generateModifierTemplater(attrs),scope.tabbarId=tabbarView._tabbarId,scope.tabIcon=scope.icon,tabbarView.addTabItem(scope),scope.setActive=function(){element.addClass("active"),radioButton.checked=!0,scope.activeIcon&&(scope.tabIcon=scope.activeIcon),angular.element(element[0].querySelectorAll("[ons-tab-inactive]")).css("display","none"),angular.element(element[0].querySelectorAll("[ons-tab-active]")).css("display","inherit")},scope.setInactive=function(){element.removeClass("active"),radioButton.checked=!1,scope.tabIcon=scope.icon,angular.element(element[0].querySelectorAll("[ons-tab-inactive]")).css("display","inherit"),angular.element(element[0].querySelectorAll("[ons-tab-active]")).css("display","none")},scope.isPersistent=function(){return"undefined"!=typeof scope.persistent},scope.isActive=function(){return element.hasClass("active")},scope.tryToChange=function(){tabbarView.setActiveTab(tabbarView._tabItems.indexOf(scope))},scope.active&&tabbarView.setActiveTab(tabbarView._tabItems.indexOf(scope)),$onsen.fireComponentEvent(element[0],"init")}}}}var module=angular.module("onsen");module.directive("onsTab",tab),module.directive("onsTabbarItem",tab);var defaultInnerTemplate='<div ng-if="icon != undefined" class="tab-bar__icon"><ons-icon icon="{{tabIcon}}" style="font-size: 28px; line-height: 34px; vertical-align: top;"></ons-icon></div><div ng-if="label" class="tab-bar__label">{{label}}</div>';tab.$inject=["$onsen","$compile"]}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsTabbar",["$onsen","$compile","TabbarView",function($onsen,$compile,TabbarView){return{restrict:"E",replace:!1,transclude:!0,scope:!0,templateUrl:$onsen.DIRECTIVE_TEMPLATE_URL+"/tab_bar.tpl",link:function(scope,element,attrs,controller,transclude){scope.modifierTemplater=$onsen.generateModifierTemplater(attrs),scope.selectedTabItem={source:""},attrs.$observe("hideTabs",function(hide){var visible="true"!==hide;tabbarView.setTabbarVisibility(visible)});var tabbarView=new TabbarView(scope,element,attrs);$onsen.addModifierMethods(tabbarView,"tab-bar--*",angular.element(element.children()[1])),$onsen.registerEventHandlers(tabbarView,"reactive prechange postchange destroy"),scope.tabbarId=tabbarView._tabbarId,element.data("ons-tabbar",tabbarView),$onsen.declareVarAttribute(attrs,tabbarView),transclude(scope,function(cloned){angular.element(element[0].querySelector(".ons-tabbar-inner")).append(cloned)}),scope.$on("$destroy",function(){tabbarView._events=void 0,$onsen.removeModifierMethods(tabbarView),element.data("ons-tabbar",void 0)}),$onsen.fireComponentEvent(element[0],"init")}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsTemplate",["$onsen","$templateCache",function($onsen,$templateCache){return{restrict:"E",transclude:!1,priority:1e3,terminal:!0,compile:function(element){$templateCache.put(element.attr("id"),element.remove().html()),$onsen.fireComponentEvent(element[0],"init")}}}])}(),function(){"use strict";function ensureLeftContainer(element,modifierTemplater){var container=element[0].querySelector(".left");return container||(container=document.createElement("div"),container.setAttribute("class","left"),container.innerHTML="&nbsp;"),""===container.innerHTML.trim()&&(container.innerHTML="&nbsp;"),angular.element(container).addClass("navigation-bar__left").addClass(modifierTemplater("navigation-bar--*__left")),container}function ensureCenterContainer(element,modifierTemplater){var container=element[0].querySelector(".center");return container||(container=document.createElement("div"),container.setAttribute("class","center")),""===container.innerHTML.trim()&&(container.innerHTML="&nbsp;"),angular.element(container).addClass("navigation-bar__title navigation-bar__center").addClass(modifierTemplater("navigation-bar--*__center")),container}function ensureRightContainer(element,modifierTemplater){var container=element[0].querySelector(".right");return container||(container=document.createElement("div"),container.setAttribute("class","right"),container.innerHTML="&nbsp;"),""===container.innerHTML.trim()&&(container.innerHTML="&nbsp;"),angular.element(container).addClass("navigation-bar__right").addClass(modifierTemplater("navigation-bar--*__right")),container}function hasCenterClassElementOnly(element){for(var child,hasCenter=!1,hasOther=!1,children=element.contents(),i=0;i<children.length;i++)child=angular.element(children[i]),child.hasClass("center")?hasCenter=!0:(child.hasClass("left")||child.hasClass("right"))&&(hasOther=!0);return hasCenter&&!hasOther}function ensureToolbarItemElements(element,modifierTemplater){var center;if(hasCenterClassElementOnly(element))center=ensureCenterContainer(element,modifierTemplater),element.contents().remove(),element.append(center);else{center=ensureCenterContainer(element,modifierTemplater);var left=ensureLeftContainer(element,modifierTemplater),right=ensureRightContainer(element,modifierTemplater);element.contents().remove(),element.append(angular.element([left,center,right]))}}var module=angular.module("onsen");module.directive("onsToolbar",["$onsen","GenericView",function($onsen,GenericView){return{restrict:"E",replace:!1,scope:!1,transclude:!1,compile:function(element,attrs){var shouldAppendAndroidModifier=ons.platform.isAndroid()&&!element[0].hasAttribute("fixed-style"),modifierTemplater=$onsen.generateModifierTemplater(attrs,shouldAppendAndroidModifier?["android"]:[]),inline="undefined"!=typeof attrs.inline;return element.addClass("navigation-bar"),element.addClass(modifierTemplater("navigation-bar--*")),inline||element.css({position:"absolute","z-index":"10000",left:"0px",right:"0px",top:"0px"}),ensureToolbarItemElements(element,modifierTemplater),{pre:function(scope,element,attrs){var toolbar=new GenericView(scope,element,attrs);$onsen.declareVarAttribute(attrs,toolbar),scope.$on("$destroy",function(){toolbar._events=void 0,$onsen.removeModifierMethods(toolbar),element.data("ons-toolbar",void 0),element=null}),$onsen.addModifierMethods(toolbar,"navigation-bar--*",element),angular.forEach(["left","center","right"],function(position){var el=element[0].querySelector(".navigation-bar__"+position);el&&$onsen.addModifierMethods(toolbar,"navigation-bar--*__"+position,angular.element(el))});var pageView=element.inheritedData("ons-page");pageView&&!inline&&pageView.registerToolbar(element),element.data("ons-toolbar",toolbar)},post:function(scope,element){$onsen.fireComponentEvent(element[0],"init")}}}}}])}(),function(){"use strict";var module=angular.module("onsen");module.directive("onsToolbarButton",["$onsen","GenericView",function($onsen,GenericView){return{restrict:"E",transclude:!0,scope:{},templateUrl:$onsen.DIRECTIVE_TEMPLATE_URL+"/toolbar_button.tpl",link:{pre:function(scope,element,attrs){var toolbarButton=new GenericView(scope,element,attrs),innerElement=element[0].querySelector(".toolbar-button");$onsen.declareVarAttribute(attrs,toolbarButton),element.data("ons-toolbar-button",toolbarButton),scope.$on("$destroy",function(){toolbarButton._events=void 0,$onsen.removeModifierMethods(toolbarButton),element.data("ons-toolbar-button",void 0),element=null});var modifierTemplater=$onsen.generateModifierTemplater(attrs);if(attrs.ngController)throw new Error("This element can't accept ng-controller directive.");attrs.$observe("disabled",function(value){value===!1||"undefined"==typeof value?innerElement.removeAttribute("disabled"):innerElement.setAttribute("disabled","disabled")}),scope.modifierTemplater=$onsen.generateModifierTemplater(attrs),$onsen.addModifierMethods(toolbarButton,"toolbar-button--*",element.children()),element.children("span").addClass(modifierTemplater("toolbar-button--*")),$onsen.cleaner.onDestroy(scope,function(){$onsen.clearComponent({scope:scope,attrs:attrs,element:element}),scope=element=attrs=null})},post:function(scope,element){$onsen.fireComponentEvent(element[0],"init")}}}}])}(),function(){"use strict";var module=angular.module("onsen"),ComponentCleaner={decomposeNode:function(element){for(var children=element.remove().children(),i=0;i<children.length;i++)ComponentCleaner.decomposeNode(angular.element(children[i]))},destroyAttributes:function(attrs){attrs.$$element=null,attrs.$$observers=null},destroyElement:function(element){element.remove()},destroyScope:function(scope){scope.$$listeners={},scope.$$watchers=null,scope=null},onDestroy:function(scope,fn){var clear=scope.$on("$destroy",function(){clear(),fn.apply(null,arguments)})}};module.factory("ComponentCleaner",function(){return ComponentCleaner}),function(){var ngEventDirectives={};"click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" ").forEach(function(name){function directiveNormalize(name){return name.replace(/-([a-z])/g,function(matches){return matches[1].toUpperCase()})}var directiveName=directiveNormalize("ng-"+name);ngEventDirectives[directiveName]=["$parse",function($parse){return{compile:function($element,attr){var fn=$parse(attr[directiveName]);return function(scope,element,attr){var listener=function(event){scope.$apply(function(){fn(scope,{$event:event})})};element.on(name,listener),ComponentCleaner.onDestroy(scope,function(){element.off(name,listener),element=null,ComponentCleaner.destroyScope(scope),scope=null,ComponentCleaner.destroyAttributes(attr),attr=null})}}}}]}),module.config(["$provide",function($provide){var shift=function($delegate){return $delegate.shift(),$delegate};Object.keys(ngEventDirectives).forEach(function(directiveName){$provide.decorator(directiveName+"Directive",["$delegate",shift])})}]),Object.keys(ngEventDirectives).forEach(function(directiveName){module.directive(directiveName,ngEventDirectives[directiveName])})}()}(),function(){"use strict";var util={init:function(){this.ready=!1},addBackButtonListener:function(fn){this._ready?window.document.addEventListener("backbutton",fn,!1):window.document.addEventListener("deviceready",function(){window.document.addEventListener("backbutton",fn,!1)})},removeBackButtonListener:function(fn){this._ready?window.document.removeEventListener("backbutton",fn,!1):window.document.addEventListener("deviceready",function(){window.document.removeEventListener("backbutton",fn,!1)})}};util.init(),angular.module("onsen").service("DeviceBackButtonHandler",function(){this._init=function(){window.ons.isWebView()?window.document.addEventListener("deviceready",function(){util._ready=!0},!1):util._ready=!0,this._bindedCallback=this._callback.bind(this),this.enable()},this._isEnabled=!1,this.enable=function(){this._isEnabled||(util.addBackButtonListener(this._bindedCallback),this._isEnabled=!0)},this.disable=function(){this._isEnabled&&(util.removeBackButtonListener(this._bindedCallback),this._isEnabled=!1)},this.fireDeviceBackButtonEvent=function(){var event=document.createEvent("Event");event.initEvent("backbutton",!0,!0),document.dispatchEvent(event)},this._callback=function(){this._dispatchDeviceBackButtonEvent()},this.create=function(element,callback){if(!(element instanceof angular.element().constructor))throw new Error("element must be an instance of jqLite");if(!(callback instanceof Function))throw new Error("callback must be an instance of Function");var handler={_callback:callback,_element:element,disable:function(){this._element.data("device-backbutton-handler",null)},setListener:function(callback){this._callback=callback},enable:function(){this._element.data("device-backbutton-handler",this)},isEnabled:function(){return this._element.data("device-backbutton-handler")===this},destroy:function(){this._element.data("device-backbutton-handler",null),this._callback=this._element=null}};return handler.enable(),handler},this._dispatchDeviceBackButtonEvent=function(){function createEvent(element){return{_element:element,callParentHandler:function(){for(var parent=this._element.parent();parent[0];){if(handler=parent.data("device-backbutton-handler"))return handler._callback(createEvent(parent));parent=parent.parent()}}}}var tree=this._captureTree(),element=this._findHandlerLeafElement(tree),handler=element.data("device-backbutton-handler");handler._callback(createEvent(element))},this._dumpParents=function(element){for(;element[0];)console.log(element[0].nodeName.toLowerCase()+"."+element.attr("class")),element=element.parent()},this._captureTree=function(){function createTree(element){return{element:element,children:Array.prototype.concat.apply([],Array.prototype.map.call(element.children(),function(child){if(child=angular.element(child),"none"===child[0].style.display)return[];if(0===child.children().length&&!child.data("device-backbutton-handler"))return[];var result=createTree(child);return 0!==result.children.length||child.data("device-backbutton-handler")?[result]:[]}))}}return createTree(angular.element(document.body))},this._dumpTree=function(node){function _dump(node,level){var pad=new Array(level+1).join("  ");console.log(pad+node.element[0].nodeName.toLowerCase()),node.children.forEach(function(node){_dump(node,level+1)})}_dump(node,0)},this._findHandlerLeafElement=function(tree){function find(node){return 0===node.children.length?node.element:1===node.children.length?find(node.children[0]):node.children.map(function(childNode){return childNode.element}).reduce(function(left,right){if(null===left)return right;
var leftZ=parseInt(window.getComputedStyle(left[0],"").zIndex,10),rightZ=parseInt(window.getComputedStyle(right[0],"").zIndex,10);if(!isNaN(leftZ)&&!isNaN(rightZ))return leftZ>rightZ?left:right;throw new Error("Capturing backbutton-handler is failure.")},null)}return find(tree)},this._init()})}(),function(){"use strict";var module=angular.module("onsen");module.factory("$onsen",["$rootScope","$window","$cacheFactory","$document","$templateCache","$http","$q","$onsGlobal","ComponentCleaner","DeviceBackButtonHandler",function($rootScope,$window,$cacheFactory,$document,$templateCache,$http,$q,$onsGlobal,ComponentCleaner,DeviceBackButtonHandler){function createOnsenService(){return{DIRECTIVE_TEMPLATE_URL:"templates",cleaner:ComponentCleaner,DeviceBackButtonHandler:DeviceBackButtonHandler,_defaultDeviceBackButtonHandler:DeviceBackButtonHandler.create(angular.element(document.body),function(){navigator.app.exitApp()}),getDefaultDeviceBackButtonHandler:function(){return this._defaultDeviceBackButtonHandler},isEnabledAutoStatusBarFill:function(){return!!$onsGlobal._config.autoStatusBarFill},shouldFillStatusBar:function(element){if(this.isEnabledAutoStatusBarFill()&&this.isWebView()&&this.isIOS7Above()){if(!(element instanceof HTMLElement))throw new Error("element must be an instance of HTMLElement");for(var debug="ONS-TABBAR"===element.tagName?console.log.bind(console):angular.noop;;){if(element.hasAttribute("no-status-bar-fill"))return!1;if(element=element.parentNode,debug(element),!element||!element.hasAttribute)return!0}}return!1},clearComponent:function(params){params.scope&&ComponentCleaner.destroyScope(params.scope),params.attrs&&ComponentCleaner.destroyAttributes(params.attrs),params.element&&ComponentCleaner.destroyElement(params.element),params.elements&&params.elements.forEach(function(element){ComponentCleaner.destroyElement(element)})},upTo:function(el,tagName){tagName=tagName.toLowerCase();do{if(!el)return null;if(el=el.parentNode,el.tagName.toLowerCase()==tagName)return el}while(el.parentNode);return null},waitForVariables:function(dependencies,callback){unlockerDict.addCallback(dependencies,callback)},findElementeObject:function(element,name){return element.inheritedData(name)},getPageHTMLAsync:function(page){var cache=$templateCache.get(page);if(cache){var deferred=$q.defer(),html="string"==typeof cache?cache:cache[1];return deferred.resolve(this.normalizePageHTML(html)),deferred.promise}return $http({url:page,method:"GET"}).then(function(response){var html=response.data;return this.normalizePageHTML(html)}.bind(this))},normalizePageHTML:function(html){return html=(""+html).trim(),html.match(/^<(ons-page|ons-navigator|ons-tabbar|ons-sliding-menu|ons-split-view)/)||(html="<ons-page>"+html+"</ons-page>"),html},generateModifierTemplater:function(attrs,modifiers){var attrModifiers=attrs&&"string"==typeof attrs.modifier?attrs.modifier.trim().split(/ +/):[];return modifiers=angular.isArray(modifiers)?attrModifiers.concat(modifiers):attrModifiers,function(template){return modifiers.map(function(modifier){return template.replace("*",modifier)}).join(" ")}},addModifierMethods:function(view,template,element){var _tr=function(modifier){return template.replace("*",modifier)},fns={hasModifier:function(modifier){return element.hasClass(_tr(modifier))},removeModifier:function(modifier){element.removeClass(_tr(modifier))},addModifier:function(modifier){element.addClass(_tr(modifier))},setModifier:function(modifier){for(var classes=element.attr("class").split(/\s+/),patt=template.replace("*","."),i=0;i<classes.length;i++){var cls=classes[i];cls.match(patt)&&element.removeClass(cls)}element.addClass(_tr(modifier))},toggleModifier:function(modifier){var cls=_tr(modifier);element.hasClass(cls)?element.removeClass(cls):element.addClass(cls)}},append=function(oldFn,newFn){return"undefined"!=typeof oldFn?function(){return oldFn.apply(null,arguments)||newFn.apply(null,arguments)}:newFn};view.hasModifier=append(view.hasModifier,fns.hasModifier),view.removeModifier=append(view.removeModifier,fns.removeModifier),view.addModifier=append(view.addModifier,fns.addModifier),view.setModifier=append(view.setModifier,fns.setModifier),view.toggleModifier=append(view.toggleModifier,fns.toggleModifier)},removeModifierMethods:function(view){view.hasModifier=view.removeModifier=view.addModifier=view.setModifier=view.toggleModifier=void 0},declareVarAttribute:function(attrs,object){if("string"==typeof attrs["var"]){var varName=attrs["var"];this._defineVar(varName,object),unlockerDict.unlockVarName(varName)}},_registerEventHandler:function(component,eventName){var capitalizedEventName=eventName.charAt(0).toUpperCase()+eventName.slice(1);component.on(eventName,function(event){$onsen.fireComponentEvent(component._element[0],eventName,event);var handler=component._attrs["ons"+capitalizedEventName];handler&&(component._scope.$eval(handler,{$event:event}),component._scope.$evalAsync())})},registerEventHandlers:function(component,eventNames){eventNames=eventNames.trim().split(/\s+/);for(var i=0,l=eventNames.length;l>i;i++){var eventName=eventNames[i];this._registerEventHandler(component,eventName)}},isAndroid:function(){return!!window.navigator.userAgent.match(/android/i)},isIOS:function(){return!!window.navigator.userAgent.match(/(ipad|iphone|ipod touch)/i)},isWebView:function(){return window.ons.isWebView()},isIOS7Above:function(){var ua=window.navigator.userAgent,match=ua.match(/(iPad|iPhone|iPod touch);.*CPU.*OS (\d+)_(\d+)/i),result=match?parseFloat(match[2]+"."+match[3])>=7:!1;return function(){return result}}(),fireComponentEvent:function(dom,eventName,data){data=data||{};var event=document.createEvent("HTMLEvents");for(var key in data)data.hasOwnProperty(key)&&(event[key]=data[key]);event.component=dom?angular.element(dom).data(dom.nodeName.toLowerCase())||null:null,event.initEvent(dom.nodeName.toLowerCase()+":"+eventName,!0,!0),dom.dispatchEvent(event)},_defineVar:function(name,object){function set(container,names,object){for(var name,i=0;i<names.length-1;i++)name=names[i],(void 0===container[name]||null===container[name])&&(container[name]={}),container=container[name];if(container[names[names.length-1]]=object,container[names[names.length-1]]!==object)throw new Error('Cannot set var="'+object._attrs.var+'" because it will overwrite a read-only variable.')}var names=name.split(/\./);ons.componentBase&&set(ons.componentBase,names,object),set($rootScope,names,object)}}}function createUnlockerDict(){return{_unlockersDict:{},_unlockedVarDict:{},_addVarLock:function(name,unlocker){if(!(unlocker instanceof Function))throw new Error("unlocker argument must be an instance of Function.");this._unlockersDict[name]?this._unlockersDict[name].push(unlocker):this._unlockersDict[name]=[unlocker]},unlockVarName:function(varName){var unlockers=this._unlockersDict[varName];unlockers&&unlockers.forEach(function(unlock){unlock()}),this._unlockedVarDict[varName]=!0},addCallback:function(dependencies,callback){if(!(callback instanceof Function))throw new Error("callback argument must be an instance of Function.");var doorLock=new DoorLock,self=this;dependencies.forEach(function(varName){if(!self._unlockedVarDict[varName]){var unlock=doorLock.lock();self._addVarLock(varName,unlock)}}),doorLock.isLocked()?doorLock.waitUnlock(callback):callback()}}}var unlockerDict=createUnlockerDict(),$onsen=createOnsenService();return $onsen}])}(),window.animit=function(){"use strict";var Animit=function(element){if(!(this instanceof Animit))return new Animit(element);if(element instanceof HTMLElement)this.elements=[element];else{if("[object Array]"!==Object.prototype.toString.call(element))throw new Error("First argument must be an array or an instance of HTMLElement.");this.elements=element}this.transitionQueue=[],this.lastStyleAttributeDict=[];var self=this;this.elements.forEach(function(element,index){element.hasAttribute("data-animit-orig-style")?self.lastStyleAttributeDict[index]=element.getAttribute("data-animit-orig-style"):(self.lastStyleAttributeDict[index]=element.getAttribute("style"),element.setAttribute("data-animit-orig-style",self.lastStyleAttributeDict[index]||""))})};Animit.prototype={transitionQueue:void 0,element:void 0,play:function(callback){return"function"==typeof callback&&this.transitionQueue.push(function(done){callback(),done()}),this.startAnimation(),this},queue:function(transition,options){var queue=this.transitionQueue;if(transition&&options&&(options.css=transition,transition=new Animit.Transition(options)),transition instanceof Function||transition instanceof Animit.Transition||(transition=transition.css?new Animit.Transition(transition):new Animit.Transition({css:transition})),transition instanceof Function)queue.push(transition);else{if(!(transition instanceof Animit.Transition))throw new Error("Invalid arguments");queue.push(transition.build())}return this},wait:function(seconds){return this.transitionQueue.push(function(done){setTimeout(done,1e3*seconds)}),this},resetStyle:function(options){function reset(){self.elements.forEach(function(element,index){element.style[Animit.prefix+"Transition"]="none",element.style.transition="none",self.lastStyleAttributeDict[index]?element.setAttribute("style",self.lastStyleAttributeDict[index]):(element.setAttribute("style",""),element.removeAttribute("style"))})}options=options||{};var self=this;if(options.transition&&!options.duration)throw new Error('"options.duration" is required when "options.transition" is enabled.');if(options.transition||options.duration&&options.duration>0){var transitionValue=options.transition||"all "+options.duration+"s "+(options.timing||"linear"),transitionStyle="transition: "+transitionValue+"; -"+Animit.prefix+"-transition: "+transitionValue+";";this.transitionQueue.push(function(done){var elements=this.elements;elements.forEach(function(element,index){element.style[Animit.prefix+"Transition"]=transitionValue,element.style.transition=transitionValue;var styleValue=(self.lastStyleAttributeDict[index]?self.lastStyleAttributeDict[index]+"; ":"")+transitionStyle;element.setAttribute("style",styleValue)});var removeListeners=util.addOnTransitionEnd(elements[0],function(){clearTimeout(timeoutId),reset(),done()}),timeoutId=setTimeout(function(){removeListeners(),reset(),done()},1e3*options.duration*1.4)})}else this.transitionQueue.push(function(done){reset(),done()});return this},startAnimation:function(){return this._dequeueTransition(),this},_dequeueTransition:function(){var transition=this.transitionQueue.shift();if(this._currentTransition)throw new Error("Current transition exists.");this._currentTransition=transition;var self=this,called=!1,done=function(){if(called)throw new Error("Invalid state: This callback is called twice.");called=!0,self._currentTransition=void 0,self._dequeueTransition()};transition&&transition.call(this,done)}},Animit.cssPropertyDict=function(){var styles=window.getComputedStyle(document.documentElement,""),dict={},a="A".charCodeAt(0),z="z".charCodeAt(0);for(var key in styles)if(styles.hasOwnProperty(key)){{key.charCodeAt(0)}a<=key.charCodeAt(0)&&z>=key.charCodeAt(0)&&"cssText"!==key&&"parentText"!==key&&"length"!==key&&(dict[key]=!0)}return dict}(),Animit.hasCssProperty=function(name){return!!Animit.cssPropertyDict[name]},Animit.prefix=function(){var styles=window.getComputedStyle(document.documentElement,""),pre=(Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/)||""===styles.OLink&&["","o"])[1];return pre}(),Animit.runAll=function(){for(var i=0;i<arguments.length;i++)arguments[i].play()},Animit.Transition=function(options){this.options=options||{},this.options.duration=this.options.duration||0,this.options.timing=this.options.timing||"linear",this.options.css=this.options.css||{},this.options.property=this.options.property||"all"},Animit.Transition.prototype={build:function(){function createActualCssProps(css){var result={};return Object.keys(css).forEach(function(name){var value=css[name];name=util.normalizeStyleName(name);var prefixed=Animit.prefix+util.capitalize(name);Animit.cssPropertyDict[name]?result[name]=value:Animit.cssPropertyDict[prefixed]?result[prefixed]=value:(result[prefixed]=value,result[name]=value)}),result}if(0===Object.keys(this.options.css).length)throw new Error("options.css is required.");var css=createActualCssProps(this.options.css);if(this.options.duration>0){var transitionValue=util.buildTransitionValue(this.options),self=this;return function(callback){var elements=this.elements,timeout=1e3*self.options.duration*1.4,removeListeners=util.addOnTransitionEnd(elements[0],function(){clearTimeout(timeoutId),callback()}),timeoutId=setTimeout(function(){removeListeners(),callback()},timeout);elements.forEach(function(element){element.style[Animit.prefix+"Transition"]=transitionValue,element.style.transition=transitionValue,Object.keys(css).forEach(function(name){element.style[name]=css[name]})})}}return this.options.duration<=0?function(callback){var elements=this.elements;elements.forEach(function(element){element.style[Animit.prefix+"Transition"]="none",element.transition="none",Object.keys(css).forEach(function(name){element.style[name]=css[name]})}),elements.length&&elements[0].offsetHeight,window.requestAnimationFrame?requestAnimationFrame(callback):setTimeout(callback,1e3/30)}:void 0}};var util={normalizeStyleName:function(name){return name=name.replace(/-[a-zA-Z]/g,function(all){return all.slice(1).toUpperCase()}),name.charAt(0).toLowerCase()+name.slice(1)},capitalize:function(str){return str.charAt(0).toUpperCase()+str.slice(1)},buildTransitionValue:function(params){params.property=params.property||"all",params.duration=params.duration||.4,params.timing=params.timing||"linear";var props=params.property.split(/ +/);return props.map(function(prop){return prop+" "+params.duration+"s "+params.timing}).join(", ")},addOnTransitionEnd:function(element,callback){if(!element)return function(){};var fn=function(event){element==event.target&&(event.stopPropagation(),removeListeners(),callback())},removeListeners=function(){util._transitionEndEvents.forEach(function(eventName){element.removeEventListener(eventName,fn)})};return util._transitionEndEvents.forEach(function(eventName){element.addEventListener(eventName,fn,!1)}),removeListeners},_transitionEndEvents:function(){return"webkit"===Animit.prefix||"o"===Animit.prefix||"moz"===Animit.prefix||"ms"===Animit.prefix?[Animit.prefix+"TransitionEnd","transitionend"]:["transitionend"]}()};return Animit}(),window.ons.notification=function(){var createAlertDialog=function(title,message,buttonLabels,primaryButtonIndex,modifier,animation,callback,messageIsHTML,cancelable,promptDialog,autofocus,placeholder){var inputEl,dialogEl=angular.element("<ons-alert-dialog>"),titleEl=angular.element("<div>").addClass("alert-dialog-title").text(title),messageEl=angular.element("<div>").addClass("alert-dialog-content"),footerEl=angular.element("<div>").addClass("alert-dialog-footer");modifier&&dialogEl.attr("modifier",modifier),dialogEl.attr("animation",animation),messageIsHTML?messageEl.html(message):messageEl.text(message),dialogEl.append(titleEl).append(messageEl),promptDialog&&(inputEl=angular.element("<input>").addClass("text-input").attr("placeholder",placeholder).css({width:"100%",marginTop:"10px"}),messageEl.append(inputEl)),dialogEl.append(footerEl),angular.element(document.body).append(dialogEl),ons.compile(dialogEl[0]);var alertDialog=dialogEl.data("ons-alert-dialog");buttonLabels.length<=2&&footerEl.addClass("alert-dialog-footer--one");for(var createButton=function(i){var buttonEl=angular.element("<button>").addClass("alert-dialog-button").text(buttonLabels[i]);i==primaryButtonIndex&&buttonEl.addClass("alert-dialog-button--primal"),buttonLabels.length<=2&&buttonEl.addClass("alert-dialog-button--one"),buttonEl.on("click",function(){buttonEl.off("click"),alertDialog.hide({callback:function(){promptDialog?callback(inputEl.val()):callback(i),alertDialog.destroy(),alertDialog=inputEl=buttonEl=null}})}),footerEl.append(buttonEl)},i=0;i<buttonLabels.length;i++)createButton(i);cancelable&&(alertDialog.setCancelable(cancelable),alertDialog.on("cancel",function(){promptDialog?callback(null):callback(-1),setTimeout(function(){alertDialog.destroy(),alertDialog=null,inputEl=null})})),alertDialog.show({callback:function(){promptDialog&&autofocus&&inputEl[0].focus()}}),dialogEl=titleEl=messageEl=footerEl=null};return{alert:function(options){var defaults={buttonLabel:"OK",animation:"default",title:"Alert",callback:function(){}};if(options=angular.extend({},defaults,options),!options.message&&!options.messageHTML)throw new Error("Alert dialog must contain a message.");createAlertDialog(options.title,options.message||options.messageHTML,[options.buttonLabel],0,options.modifier,options.animation,options.callback,options.message?!1:!0,!1,!1,!1)},confirm:function(options){var defaults={buttonLabels:["Cancel","OK"],primaryButtonIndex:1,animation:"default",title:"Confirm",callback:function(){},cancelable:!1};if(options=angular.extend({},defaults,options),!options.message&&!options.messageHTML)throw new Error("Confirm dialog must contain a message.");createAlertDialog(options.title,options.message||options.messageHTML,options.buttonLabels,options.primaryButtonIndex,options.modifier,options.animation,options.callback,options.message?!1:!0,options.cancelable,!1,!1)},prompt:function(options){var defaults={buttonLabel:"OK",animation:"default",title:"Alert",placeholder:"",callback:function(){},cancelable:!1,autofocus:!0};if(options=angular.extend({},defaults,options),!options.message&&!options.messageHTML)throw new Error("Prompt dialog must contain a message.");createAlertDialog(options.title,options.message||options.messageHTML,[options.buttonLabel],0,options.modifier,options.animation,options.callback,options.message?!1:!0,options.cancelable,!0,options.autofocus,options.placeholder)}}}(),window.ons.orientation=function(){function create(){var obj={_isPortrait:!1,isPortrait:function(){return this._isPortrait()},isLandscape:function(){return!this.isPortrait()},_init:function(){return document.addEventListener("DOMContentLoaded",this._onDOMContentLoaded.bind(this),!1),"orientation"in window?window.addEventListener("orientationchange",this._onOrientationChange.bind(this),!1):window.addEventListener("resize",this._onResize.bind(this),!1),this._isPortrait=function(){return window.innerHeight>window.innerWidth},this},_onDOMContentLoaded:function(){this._installIsPortraitImplementation(),this.emit("change",{isPortrait:this.isPortrait()})},_installIsPortraitImplementation:function(){var isPortrait=window.innerWidth<window.innerHeight;this._isPortrait="orientation"in window?window.orientation%180===0?function(){return 0===Math.abs(window.orientation%180)?isPortrait:!isPortrait}:function(){return 90===Math.abs(window.orientation%180)?isPortrait:!isPortrait}:function(){return window.innerHeight>window.innerWidth}},_onOrientationChange:function(){var isPortrait=this._isPortrait(),nIter=0,interval=setInterval(function(){nIter++;var w=window.innerWidth,h=window.innerHeight;isPortrait&&h>=w||!isPortrait&&w>=h?(this.emit("change",{isPortrait:isPortrait}),clearInterval(interval)):50===nIter&&(this.emit("change",{isPortrait:isPortrait}),clearInterval(interval))}.bind(this),20)},_onResize:function(){this.emit("change",{isPortrait:this.isPortrait()})}};return MicroEvent.mixin(obj),obj}return create()._init()}(),function(){"use strict";window.ons.platform={isWebView:function(){return ons.isWebView()},isIOS:function(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)},isAndroid:function(){return/Android/i.test(navigator.userAgent)},isIPhone:function(){return/iPhone/i.test(navigator.userAgent)},isIPad:function(){return/iPad/i.test(navigator.userAgent)},isBlackBerry:function(){return/BlackBerry|RIM Tablet OS|BB10/i.test(navigator.userAgent)},isOpera:function(){return!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0},isFirefox:function(){return"undefined"!=typeof InstallTrigger},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0},isChrome:function(){return!!window.chrome&&!(window.opera||navigator.userAgent.indexOf(" OPR/")>=0)},isIE:function(){return!1||!!document.documentMode},isIOS7above:function(){if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){var ver=(navigator.userAgent.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[""])[0].replace(/_/g,".");return parseInt(ver.split(".")[0])>=7}return!1}}}(),function(){"use strict";window.addEventListener("load",function(){FastClick.attach(document.body)},!1),(new Viewport).setup(),Modernizr.testStyles("#modernizr { -webkit-overflow-scrolling:touch }",function(elem){Modernizr.addTest("overflowtouch",window.getComputedStyle&&"touch"==window.getComputedStyle(elem).getPropertyValue("-webkit-overflow-scrolling"))}),window.jQuery&&angular.element===window.jQuery&&console.warn("Onsen UI require jqLite. Load jQuery after loading AngularJS to fix this error. jQuery may break Onsen UI behavior.")}(),function(){"use strict";angular.module("onsen").run(["$templateCache",function($templateCache){for(var templates=window.document.querySelectorAll('script[type="text/ons-template"]'),i=0;i<templates.length;i++){var template=angular.element(templates[i]),id=template.attr("id");"string"==typeof id&&$templateCache.put(id,template.text())}}])}();
/*** <End:monaca-onsenui LoadJs:"components/monaca-onsenui/js/onsenui_all.min.js"> ***/
/*** <End:monaca-onsenui> ***/

/*** <Start:monaca-jquery-mobile> ***/
/*** <Start:monaca-jquery-mobile LoadJs:"components/monaca-jquery-mobile/jquery.mobile.js"> ***/
/*
* jQuery Mobile 1.3.1
* Git HEAD hash: 74b4bec049fd93e4fe40205e6157de16eb64eb46 <> Date: Mon Apr 8 2013 19:41:28 UTC
* http://jquerymobile.com
*
* Copyright 2010, 2013 jQuery Foundation, Inc. and other contributors
* Released under the MIT license.
* http://jquery.org/license
*
*/


(function ( root, doc, factory ) {
	if ( typeof define === "function" && define.amd ) {
		// AMD. Register as an anonymous module.
		define( [ "jquery" ], function ( $ ) {
			factory( $, root, doc );
			return $.mobile;
		});
	} else {
		// Browser globals
		factory( root.jQuery, root, doc );
	}
}( this, document, function ( jQuery, window, document, undefined ) {
(function( $ ) {
	$.mobile = {};
}( jQuery ));
(function( $, window, undefined ) {
	var nsNormalizeDict = {};

	// jQuery.mobile configurable options
	$.mobile = $.extend($.mobile, {

		// Version of the jQuery Mobile Framework
		version: "1.3.1",

		// Namespace used framework-wide for data-attrs. Default is no namespace
		ns: "",

		// Define the url parameter used for referencing widget-generated sub-pages.
		// Translates to to example.html&ui-page=subpageIdentifier
		// hash segment before &ui-page= is used to make Ajax request
		subPageUrlKey: "ui-page",

		// Class assigned to page currently in view, and during transitions
		activePageClass: "ui-page-active",

		// Class used for "active" button state, from CSS framework
		activeBtnClass: "ui-btn-active",

		// Class used for "focus" form element state, from CSS framework
		focusClass: "ui-focus",

		// Automatically handle clicks and form submissions through Ajax, when same-domain
		ajaxEnabled: true,

		// Automatically load and show pages based on location.hash
		hashListeningEnabled: true,

		// disable to prevent jquery from bothering with links
		linkBindingEnabled: true,

		// Set default page transition - 'none' for no transitions
		defaultPageTransition: "fade",

		// Set maximum window width for transitions to apply - 'false' for no limit
		maxTransitionWidth: false,

		// Minimum scroll distance that will be remembered when returning to a page
		minScrollBack: 250,

		// DEPRECATED: the following property is no longer in use, but defined until 2.0 to prevent conflicts
		touchOverflowEnabled: false,

		// Set default dialog transition - 'none' for no transitions
		defaultDialogTransition: "pop",

		// Error response message - appears when an Ajax page request fails
		pageLoadErrorMessage: "Error Loading Page",

		// For error messages, which theme does the box uses?
		pageLoadErrorMessageTheme: "e",

		// replace calls to window.history.back with phonegaps navigation helper
		// where it is provided on the window object
		phonegapNavigationEnabled: false,

		//automatically initialize the DOM when it's ready
		autoInitializePage: true,

		pushStateEnabled: true,

		// allows users to opt in to ignoring content by marking a parent element as
		// data-ignored
		ignoreContentEnabled: false,

		// turn of binding to the native orientationchange due to android orientation behavior
		orientationChangeEnabled: true,

		buttonMarkup: {
			hoverDelay: 200
		},

		// define the window and the document objects
		window: $( window ),
		document: $( document ),

		// TODO might be useful upstream in jquery itself ?
		keyCode: {
			ALT: 18,
			BACKSPACE: 8,
			CAPS_LOCK: 20,
			COMMA: 188,
			COMMAND: 91,
			COMMAND_LEFT: 91, // COMMAND
			COMMAND_RIGHT: 93,
			CONTROL: 17,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			INSERT: 45,
			LEFT: 37,
			MENU: 93, // COMMAND_RIGHT
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SHIFT: 16,
			SPACE: 32,
			TAB: 9,
			UP: 38,
			WINDOWS: 91 // COMMAND
		},

		// Place to store various widget extensions
		behaviors: {},

		// Scroll page vertically: scroll to 0 to hide iOS address bar, or pass a Y value
		silentScroll: function( ypos ) {
			if ( $.type( ypos ) !== "number" ) {
				ypos = $.mobile.defaultHomeScroll;
			}

			// prevent scrollstart and scrollstop events
			$.event.special.scrollstart.enabled = false;

			setTimeout( function() {
				window.scrollTo( 0, ypos );
				$.mobile.document.trigger( "silentscroll", { x: 0, y: ypos });
			}, 20 );

			setTimeout( function() {
				$.event.special.scrollstart.enabled = true;
			}, 150 );
		},

		// Expose our cache for testing purposes.
		nsNormalizeDict: nsNormalizeDict,

		// Take a data attribute property, prepend the namespace
		// and then camel case the attribute string. Add the result
		// to our nsNormalizeDict so we don't have to do this again.
		nsNormalize: function( prop ) {
			if ( !prop ) {
				return;
			}

			return nsNormalizeDict[ prop ] || ( nsNormalizeDict[ prop ] = $.camelCase( $.mobile.ns + prop ) );
		},

		// Find the closest parent with a theme class on it. Note that
		// we are not using $.fn.closest() on purpose here because this
		// method gets called quite a bit and we need it to be as fast
		// as possible.
		getInheritedTheme: function( el, defaultTheme ) {
			var e = el[ 0 ],
				ltr = "",
				re = /ui-(bar|body|overlay)-([a-z])\b/,
				c, m;

			while ( e ) {
				c = e.className || "";
				if ( c && ( m = re.exec( c ) ) && ( ltr = m[ 2 ] ) ) {
					// We found a parent with a theme class
					// on it so bail from this loop.
					break;
				}

				e = e.parentNode;
			}

			// Return the theme letter we found, if none, return the
			// specified default.

			return ltr || defaultTheme || "a";
		},

		// TODO the following $ and $.fn extensions can/probably should be moved into jquery.mobile.core.helpers
		//
		// Find the closest javascript page element to gather settings data jsperf test
		// http://jsperf.com/single-complex-selector-vs-many-complex-selectors/edit
		// possibly naive, but it shows that the parsing overhead for *just* the page selector vs
		// the page and dialog selector is negligable. This could probably be speed up by
		// doing a similar parent node traversal to the one found in the inherited theme code above
		closestPageData: function( $target ) {
			return $target
				.closest( ':jqmData(role="page"), :jqmData(role="dialog")' )
				.data( "mobile-page" );
		},

		enhanceable: function( $set ) {
			return this.haveParents( $set, "enhance" );
		},

		hijackable: function( $set ) {
			return this.haveParents( $set, "ajax" );
		},

		haveParents: function( $set, attr ) {
			if ( !$.mobile.ignoreContentEnabled ) {
				return $set;
			}

			var count = $set.length,
				$newSet = $(),
				e, $element, excluded;

			for ( var i = 0; i < count; i++ ) {
				$element = $set.eq( i );
				excluded = false;
				e = $set[ i ];

				while ( e ) {
					var c = e.getAttribute ? e.getAttribute( "data-" + $.mobile.ns + attr ) : "";

					if ( c === "false" ) {
						excluded = true;
						break;
					}

					e = e.parentNode;
				}

				if ( !excluded ) {
					$newSet = $newSet.add( $element );
				}
			}

			return $newSet;
		},

		getScreenHeight: function() {
			// Native innerHeight returns more accurate value for this across platforms,
			// jQuery version is here as a normalized fallback for platforms like Symbian
			return window.innerHeight || $.mobile.window.height();
		}
	}, $.mobile );

	// Mobile version of data and removeData and hasData methods
	// ensures all data is set and retrieved using jQuery Mobile's data namespace
	$.fn.jqmData = function( prop, value ) {
		var result;
		if ( typeof prop !== "undefined" ) {
			if ( prop ) {
				prop = $.mobile.nsNormalize( prop );
			}

			// undefined is permitted as an explicit input for the second param
			// in this case it returns the value and does not set it to undefined
			if( arguments.length < 2 || value === undefined ){
				result = this.data( prop );
			} else {
				result = this.data( prop, value );
			}
		}
		return result;
	};

	$.jqmData = function( elem, prop, value ) {
		var result;
		if ( typeof prop !== "undefined" ) {
			result = $.data( elem, prop ? $.mobile.nsNormalize( prop ) : prop, value );
		}
		return result;
	};

	$.fn.jqmRemoveData = function( prop ) {
		return this.removeData( $.mobile.nsNormalize( prop ) );
	};

	$.jqmRemoveData = function( elem, prop ) {
		return $.removeData( elem, $.mobile.nsNormalize( prop ) );
	};

	$.fn.removeWithDependents = function() {
		$.removeWithDependents( this );
	};

	$.removeWithDependents = function( elem ) {
		var $elem = $( elem );

		( $elem.jqmData( 'dependents' ) || $() ).remove();
		$elem.remove();
	};

	$.fn.addDependents = function( newDependents ) {
		$.addDependents( $( this ), newDependents );
	};

	$.addDependents = function( elem, newDependents ) {
		var dependents = $( elem ).jqmData( 'dependents' ) || $();

		$( elem ).jqmData( 'dependents', $.merge( dependents, newDependents ) );
	};

	// note that this helper doesn't attempt to handle the callback
	// or setting of an html element's text, its only purpose is
	// to return the html encoded version of the text in all cases. (thus the name)
	$.fn.getEncodedText = function() {
		return $( "<div/>" ).text( $( this ).text() ).html();
	};

	// fluent helper function for the mobile namespaced equivalent
	$.fn.jqmEnhanceable = function() {
		return $.mobile.enhanceable( this );
	};

	$.fn.jqmHijackable = function() {
		return $.mobile.hijackable( this );
	};

	// Monkey-patching Sizzle to filter the :jqmData selector
	var oldFind = $.find,
		jqmDataRE = /:jqmData\(([^)]*)\)/g;

	$.find = function( selector, context, ret, extra ) {
		selector = selector.replace( jqmDataRE, "[data-" + ( $.mobile.ns || "" ) + "$1]" );

		return oldFind.call( this, selector, context, ret, extra );
	};

	$.extend( $.find, oldFind );

	$.find.matches = function( expr, set ) {
		return $.find( expr, null, null, set );
	};

	$.find.matchesSelector = function( node, expr ) {
		return $.find( expr, null, null, [ node ] ).length > 0;
	};
})( jQuery, this );


/*!
 * jQuery UI Widget v1.10.0pre - 2012-11-13 (ff055a0c353c3c8ce6e5bfa07ad7cb03e8885bc5)
 * http://jqueryui.com
 *
 * Copyright 2010, 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
(function( $, undefined ) {

var uuid = 0,
	slice = Array.prototype.slice,
	_cleanData = $.cleanData;
$.cleanData = function( elems ) {
	for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
		try {
			$( elem ).triggerHandler( "remove" );
		// http://bugs.jquery.com/ticket/8235
		} catch( e ) {}
	}
	_cleanData( elems );
};

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( $.isFunction( value ) ) {
			prototype[ prop ] = (function() {
				var _super = function() {
						return base.prototype[ prop ].apply( this, arguments );
					},
					_superApply = function( args ) {
						return base.prototype[ prop ].apply( this, args );
					};
				return function() {
					var __super = this._super,
						__superApply = this._superApply,
						returnValue;

					this._super = _super;
					this._superApply = _superApply;

					returnValue = value.apply( this, arguments );

					this._super = __super;
					this._superApply = __superApply;

					return returnValue;
				};
			})();
		}
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix : name
	}, prototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );
};

$.widget.extend = function( target ) {
	var input = slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.widget.extend.apply( null, [ options ].concat(args) ) :
			options;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} )._init();
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;
		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			// 1.9 BC for #7810
			// TODO remove dual storage
			.removeData( this.widgetName )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( value === undefined ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( value === undefined ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled ui-state-disabled", !!value )
				.attr( "aria-disabled", value );
			this.hoverable.removeClass( "ui-state-hover" );
			this.focusable.removeClass( "ui-state-focus" );
		}

		return this;
	},

	enable: function() {
		return this._setOption( "disabled", false );
	},
	disable: function() {
		return this._setOption( "disabled", true );
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			// accept selectors, DOM elements
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^(\w+)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

})( jQuery );

(function( $, undefined ) {

$.widget( "mobile.widget", {
	// decorate the parent _createWidget to trigger `widgetinit` for users
	// who wish to do post post `widgetcreate` alterations/additions
	//
	// TODO create a pull request for jquery ui to trigger this event
	// in the original _createWidget
	_createWidget: function() {
		$.Widget.prototype._createWidget.apply( this, arguments );
		this._trigger( 'init' );
	},

	_getCreateOptions: function() {

		var elem = this.element,
			options = {};

		$.each( this.options, function( option ) {

			var value = elem.jqmData( option.replace( /[A-Z]/g, function( c ) {
							return "-" + c.toLowerCase();
						})
					);

			if ( value !== undefined ) {
				options[ option ] = value;
			}
		});

		return options;
	},

	enhanceWithin: function( target, useKeepNative ) {
		this.enhance( $( this.options.initSelector, $( target )), useKeepNative );
	},

	enhance: function( targets, useKeepNative ) {
		var page, keepNative, $widgetElements = $( targets ), self = this;

		// if ignoreContentEnabled is set to true the framework should
		// only enhance the selected elements when they do NOT have a
		// parent with the data-namespace-ignore attribute
		$widgetElements = $.mobile.enhanceable( $widgetElements );

		if ( useKeepNative && $widgetElements.length ) {
			// TODO remove dependency on the page widget for the keepNative.
			// Currently the keepNative value is defined on the page prototype so
			// the method is as well
			page = $.mobile.closestPageData( $widgetElements );
			keepNative = ( page && page.keepNativeSelector()) || "";

			$widgetElements = $widgetElements.not( keepNative );
		}

		$widgetElements[ this.widgetName ]();
	},

	raise: function( msg ) {
		throw "Widget [" + this.widgetName + "]: " + msg;
	}
});

})( jQuery );


(function( $, window ) {
	// DEPRECATED
	// NOTE global mobile object settings
	$.extend( $.mobile, {
		// DEPRECATED Should the text be visble in the loading message?
		loadingMessageTextVisible: undefined,

		// DEPRECATED When the text is visible, what theme does the loading box use?
		loadingMessageTheme: undefined,

		// DEPRECATED default message setting
		loadingMessage: undefined,

		// DEPRECATED
		// Turn on/off page loading message. Theme doubles as an object argument
		// with the following shape: { theme: '', text: '', html: '', textVisible: '' }
		// NOTE that the $.mobile.loading* settings and params past the first are deprecated
		showPageLoadingMsg: function( theme, msgText, textonly ) {
			$.mobile.loading( 'show', theme, msgText, textonly );
		},

		// DEPRECATED
		hidePageLoadingMsg: function() {
			$.mobile.loading( 'hide' );
		},

		loading: function() {
			this.loaderWidget.loader.apply( this.loaderWidget, arguments );
		}
	});

	// TODO move loader class down into the widget settings
	var loaderClass = "ui-loader", $html = $( "html" ), $window = $.mobile.window;

	$.widget( "mobile.loader", {
		// NOTE if the global config settings are defined they will override these
		//      options
		options: {
			// the theme for the loading message
			theme: "a",

			// whether the text in the loading message is shown
			textVisible: false,

			// custom html for the inner content of the loading message
			html: "",

			// the text to be displayed when the popup is shown
			text: "loading"
		},

		defaultHtml: "<div class='" + loaderClass + "'>" +
			"<span class='ui-icon ui-icon-loading'></span>" +
			"<h1></h1>" +
			"</div>",

		// For non-fixed supportin browsers. Position at y center (if scrollTop supported), above the activeBtn (if defined), or just 100px from top
		fakeFixLoader: function() {
			var activeBtn = $( "." + $.mobile.activeBtnClass ).first();

			this.element
				.css({
					top: $.support.scrollTop && $window.scrollTop() + $window.height() / 2 ||
						activeBtn.length && activeBtn.offset().top || 100
				});
		},

		// check position of loader to see if it appears to be "fixed" to center
		// if not, use abs positioning
		checkLoaderPosition: function() {
			var offset = this.element.offset(),
				scrollTop = $window.scrollTop(),
				screenHeight = $.mobile.getScreenHeight();

			if ( offset.top < scrollTop || ( offset.top - scrollTop ) > screenHeight ) {
				this.element.addClass( "ui-loader-fakefix" );
				this.fakeFixLoader();
				$window
					.unbind( "scroll", this.checkLoaderPosition )
					.bind( "scroll", $.proxy( this.fakeFixLoader, this ) );
			}
		},

		resetHtml: function() {
			this.element.html( $( this.defaultHtml ).html() );
		},

		// Turn on/off page loading message. Theme doubles as an object argument
		// with the following shape: { theme: '', text: '', html: '', textVisible: '' }
		// NOTE that the $.mobile.loading* settings and params past the first are deprecated
		// TODO sweet jesus we need to break some of this out
		show: function( theme, msgText, textonly ) {
			var textVisible, message, $header, loadSettings;

			this.resetHtml();

			// use the prototype options so that people can set them globally at
			// mobile init. Consistency, it's what's for dinner
			if ( $.type(theme) === "object" ) {
				loadSettings = $.extend( {}, this.options, theme );

				// prefer object property from the param then the old theme setting
				theme = loadSettings.theme || $.mobile.loadingMessageTheme;
			} else {
				loadSettings = this.options;

				// here we prefer the them value passed as a string argument, then
				// we prefer the global option because we can't use undefined default
				// prototype options, then the prototype option
				theme = theme || $.mobile.loadingMessageTheme || loadSettings.theme;
			}

			// set the message text, prefer the param, then the settings object
			// then loading message
			message = msgText || $.mobile.loadingMessage || loadSettings.text;

			// prepare the dom
			$html.addClass( "ui-loading" );

			if ( $.mobile.loadingMessage !== false || loadSettings.html ) {
				// boolean values require a bit more work :P, supports object properties
				// and old settings
				if ( $.mobile.loadingMessageTextVisible !== undefined ) {
					textVisible = $.mobile.loadingMessageTextVisible;
				} else {
					textVisible = loadSettings.textVisible;
				}

				// add the proper css given the options (theme, text, etc)
				// Force text visibility if the second argument was supplied, or
				// if the text was explicitly set in the object args
				this.element.attr("class", loaderClass +
					" ui-corner-all ui-body-" + theme +
					" ui-loader-" + ( textVisible || msgText || theme.text ? "verbose" : "default" ) +
					( loadSettings.textonly || textonly ? " ui-loader-textonly" : "" ) );

				// TODO verify that jquery.fn.html is ok to use in both cases here
				//      this might be overly defensive in preventing unknowing xss
				// if the html attribute is defined on the loading settings, use that
				// otherwise use the fallbacks from above
				if ( loadSettings.html ) {
					this.element.html( loadSettings.html );
				} else {
					this.element.find( "h1" ).text( message );
				}

				// attach the loader to the DOM
				this.element.appendTo( $.mobile.pageContainer );

				// check that the loader is visible
				this.checkLoaderPosition();

				// on scroll check the loader position
				$window.bind( "scroll", $.proxy( this.checkLoaderPosition, this ) );
			}
		},

		hide: function() {
			$html.removeClass( "ui-loading" );

			if ( $.mobile.loadingMessage ) {
				this.element.removeClass( "ui-loader-fakefix" );
			}

			$.mobile.window.unbind( "scroll", this.fakeFixLoader );
			$.mobile.window.unbind( "scroll", this.checkLoaderPosition );
		}
	});

	$window.bind( 'pagecontainercreate', function() {
		$.mobile.loaderWidget = $.mobile.loaderWidget || $( $.mobile.loader.prototype.defaultHtml ).loader();
	});
})(jQuery, this);


// Script: jQuery hashchange event
// 
// *Version: 1.3, Last updated: 7/21/2010*
// 
// Project Home - http://benalman.com/projects/jquery-hashchange-plugin/
// GitHub       - http://github.com/cowboy/jquery-hashchange/
// Source       - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.js
// (Minified)   - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.min.js (0.8kb gzipped)
// 
// About: License
// 
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
// 
// hashchange event - http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/
// document.domain - http://benalman.com/code/projects/jquery-hashchange/examples/document_domain/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.2.6, 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-4, Chrome 5-6, Safari 3.2-5,
//                   Opera 9.6-10.60, iPhone 3.1, Android 1.6-2.2, BlackBerry 4.6-5.
// Unit Tests      - http://benalman.com/code/projects/jquery-hashchange/unit/
// 
// About: Known issues
// 
// While this jQuery hashchange event implementation is quite stable and
// robust, there are a few unfortunate browser bugs surrounding expected
// hashchange event-based behaviors, independent of any JavaScript
// window.onhashchange abstraction. See the following examples for more
// information:
// 
// Chrome: Back Button - http://benalman.com/code/projects/jquery-hashchange/examples/bug-chrome-back-button/
// Firefox: Remote XMLHttpRequest - http://benalman.com/code/projects/jquery-hashchange/examples/bug-firefox-remote-xhr/
// WebKit: Back Button in an Iframe - http://benalman.com/code/projects/jquery-hashchange/examples/bug-webkit-hash-iframe/
// Safari: Back Button from a different domain - http://benalman.com/code/projects/jquery-hashchange/examples/bug-safari-back-from-diff-domain/
// 
// Also note that should a browser natively support the window.onhashchange 
// event, but not report that it does, the fallback polling loop will be used.
// 
// About: Release History
// 
// 1.3   - (7/21/2010) Reorganized IE6/7 Iframe code to make it more
//         "removable" for mobile-only development. Added IE6/7 document.title
//         support. Attempted to make Iframe as hidden as possible by using
//         techniques from http://www.paciellogroup.com/blog/?p=604. Added 
//         support for the "shortcut" format $(window).hashchange( fn ) and
//         $(window).hashchange() like jQuery provides for built-in events.
//         Renamed jQuery.hashchangeDelay to <jQuery.fn.hashchange.delay> and
//         lowered its default value to 50. Added <jQuery.fn.hashchange.domain>
//         and <jQuery.fn.hashchange.src> properties plus document-domain.html
//         file to address access denied issues when setting document.domain in
//         IE6/7.
// 1.2   - (2/11/2010) Fixed a bug where coming back to a page using this plugin
//         from a page on another domain would cause an error in Safari 4. Also,
//         IE6/7 Iframe is now inserted after the body (this actually works),
//         which prevents the page from scrolling when the event is first bound.
//         Event can also now be bound before DOM ready, but it won't be usable
//         before then in IE6/7.
// 1.1   - (1/21/2010) Incorporated document.documentMode test to fix IE8 bug
//         where browser version is incorrectly reported as 8.0, despite
//         inclusion of the X-UA-Compatible IE=EmulateIE7 meta tag.
// 1.0   - (1/9/2010) Initial Release. Broke out the jQuery BBQ event.special
//         window.onhashchange functionality into a separate plugin for users
//         who want just the basic event & back button support, without all the
//         extra awesomeness that BBQ provides. This plugin will be included as
//         part of jQuery BBQ, but also be available separately.

(function( $, window, undefined ) {
  // Reused string.
  var str_hashchange = 'hashchange',
    
    // Method / object references.
    doc = document,
    fake_onhashchange,
    special = $.event.special,
    
    // Does the browser support window.onhashchange? Note that IE8 running in
    // IE7 compatibility mode reports true for 'onhashchange' in window, even
    // though the event isn't supported, so also test document.documentMode.
    doc_mode = doc.documentMode,
    supports_onhashchange = 'on' + str_hashchange in window && ( doc_mode === undefined || doc_mode > 7 );
  
  // Get location.hash (or what you'd expect location.hash to be) sans any
  // leading #. Thanks for making this necessary, Firefox!
  function get_fragment( url ) {
    url = url || location.href;
    return '#' + url.replace( /^[^#]*#?(.*)$/, '$1' );
  };
  
  // Method: jQuery.fn.hashchange
  // 
  // Bind a handler to the window.onhashchange event or trigger all bound
  // window.onhashchange event handlers. This behavior is consistent with
  // jQuery's built-in event handlers.
  // 
  // Usage:
  // 
  // > jQuery(window).hashchange( [ handler ] );
  // 
  // Arguments:
  // 
  //  handler - (Function) Optional handler to be bound to the hashchange
  //    event. This is a "shortcut" for the more verbose form:
  //    jQuery(window).bind( 'hashchange', handler ). If handler is omitted,
  //    all bound window.onhashchange event handlers will be triggered. This
  //    is a shortcut for the more verbose
  //    jQuery(window).trigger( 'hashchange' ). These forms are described in
  //    the <hashchange event> section.
  // 
  // Returns:
  // 
  //  (jQuery) The initial jQuery collection of elements.
  
  // Allow the "shortcut" format $(elem).hashchange( fn ) for binding and
  // $(elem).hashchange() for triggering, like jQuery does for built-in events.
  $.fn[ str_hashchange ] = function( fn ) {
    return fn ? this.bind( str_hashchange, fn ) : this.trigger( str_hashchange );
  };
  
  // Property: jQuery.fn.hashchange.delay
  // 
  // The numeric interval (in milliseconds) at which the <hashchange event>
  // polling loop executes. Defaults to 50.
  
  // Property: jQuery.fn.hashchange.domain
  // 
  // If you're setting document.domain in your JavaScript, and you want hash
  // history to work in IE6/7, not only must this property be set, but you must
  // also set document.domain BEFORE jQuery is loaded into the page. This
  // property is only applicable if you are supporting IE6/7 (or IE8 operating
  // in "IE7 compatibility" mode).
  // 
  // In addition, the <jQuery.fn.hashchange.src> property must be set to the
  // path of the included "document-domain.html" file, which can be renamed or
  // modified if necessary (note that the document.domain specified must be the
  // same in both your main JavaScript as well as in this file).
  // 
  // Usage:
  // 
  // jQuery.fn.hashchange.domain = document.domain;
  
  // Property: jQuery.fn.hashchange.src
  // 
  // If, for some reason, you need to specify an Iframe src file (for example,
  // when setting document.domain as in <jQuery.fn.hashchange.domain>), you can
  // do so using this property. Note that when using this property, history
  // won't be recorded in IE6/7 until the Iframe src file loads. This property
  // is only applicable if you are supporting IE6/7 (or IE8 operating in "IE7
  // compatibility" mode).
  // 
  // Usage:
  // 
  // jQuery.fn.hashchange.src = 'path/to/file.html';
  
  $.fn[ str_hashchange ].delay = 50;
  /*
  $.fn[ str_hashchange ].domain = null;
  $.fn[ str_hashchange ].src = null;
  */
  
  // Event: hashchange event
  // 
  // Fired when location.hash changes. In browsers that support it, the native
  // HTML5 window.onhashchange event is used, otherwise a polling loop is
  // initialized, running every <jQuery.fn.hashchange.delay> milliseconds to
  // see if the hash has changed. In IE6/7 (and IE8 operating in "IE7
  // compatibility" mode), a hidden Iframe is created to allow the back button
  // and hash-based history to work.
  // 
  // Usage as described in <jQuery.fn.hashchange>:
  // 
  // > // Bind an event handler.
  // > jQuery(window).hashchange( function(e) {
  // >   var hash = location.hash;
  // >   ...
  // > });
  // > 
  // > // Manually trigger the event handler.
  // > jQuery(window).hashchange();
  // 
  // A more verbose usage that allows for event namespacing:
  // 
  // > // Bind an event handler.
  // > jQuery(window).bind( 'hashchange', function(e) {
  // >   var hash = location.hash;
  // >   ...
  // > });
  // > 
  // > // Manually trigger the event handler.
  // > jQuery(window).trigger( 'hashchange' );
  // 
  // Additional Notes:
  // 
  // * The polling loop and Iframe are not created until at least one handler
  //   is actually bound to the 'hashchange' event.
  // * If you need the bound handler(s) to execute immediately, in cases where
  //   a location.hash exists on page load, via bookmark or page refresh for
  //   example, use jQuery(window).hashchange() or the more verbose 
  //   jQuery(window).trigger( 'hashchange' ).
  // * The event can be bound before DOM ready, but since it won't be usable
  //   before then in IE6/7 (due to the necessary Iframe), recommended usage is
  //   to bind it inside a DOM ready handler.
  
  // Override existing $.event.special.hashchange methods (allowing this plugin
  // to be defined after jQuery BBQ in BBQ's source code).
  special[ str_hashchange ] = $.extend( special[ str_hashchange ], {
    
    // Called only when the first 'hashchange' event is bound to window.
    setup: function() {
      // If window.onhashchange is supported natively, there's nothing to do..
      if ( supports_onhashchange ) { return false; }
      
      // Otherwise, we need to create our own. And we don't want to call this
      // until the user binds to the event, just in case they never do, since it
      // will create a polling loop and possibly even a hidden Iframe.
      $( fake_onhashchange.start );
    },
    
    // Called only when the last 'hashchange' event is unbound from window.
    teardown: function() {
      // If window.onhashchange is supported natively, there's nothing to do..
      if ( supports_onhashchange ) { return false; }
      
      // Otherwise, we need to stop ours (if possible).
      $( fake_onhashchange.stop );
    }
    
  });
  
  // fake_onhashchange does all the work of triggering the window.onhashchange
  // event for browsers that don't natively support it, including creating a
  // polling loop to watch for hash changes and in IE 6/7 creating a hidden
  // Iframe to enable back and forward.
  fake_onhashchange = (function() {
    var self = {},
      timeout_id,
      
      // Remember the initial hash so it doesn't get triggered immediately.
      last_hash = get_fragment(),
      
      fn_retval = function( val ) { return val; },
      history_set = fn_retval,
      history_get = fn_retval;
    
    // Start the polling loop.
    self.start = function() {
      timeout_id || poll();
    };
    
    // Stop the polling loop.
    self.stop = function() {
      timeout_id && clearTimeout( timeout_id );
      timeout_id = undefined;
    };
    
    // This polling loop checks every $.fn.hashchange.delay milliseconds to see
    // if location.hash has changed, and triggers the 'hashchange' event on
    // window when necessary.
    function poll() {
      var hash = get_fragment(),
        history_hash = history_get( last_hash );
      
      if ( hash !== last_hash ) {
        history_set( last_hash = hash, history_hash );
        
        $(window).trigger( str_hashchange );
        
      } else if ( history_hash !== last_hash ) {
        location.href = location.href.replace( /#.*/, '' ) + history_hash;
      }
      
      timeout_id = setTimeout( poll, $.fn[ str_hashchange ].delay );
    };
    
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    // vvvvvvvvvvvvvvvvvvv REMOVE IF NOT SUPPORTING IE6/7/8 vvvvvvvvvvvvvvvvvvv
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    window.attachEvent && !window.addEventListener && !supports_onhashchange && (function() {
      // Not only do IE6/7 need the "magical" Iframe treatment, but so does IE8
      // when running in "IE7 compatibility" mode.
      
      var iframe,
        iframe_src;
      
      // When the event is bound and polling starts in IE 6/7, create a hidden
      // Iframe for history handling.
      self.start = function() {
        if ( !iframe ) {
          iframe_src = $.fn[ str_hashchange ].src;
          iframe_src = iframe_src && iframe_src + get_fragment();
          
          // Create hidden Iframe. Attempt to make Iframe as hidden as possible
          // by using techniques from http://www.paciellogroup.com/blog/?p=604.
          iframe = $('<iframe tabindex="-1" title="empty"/>').hide()
            
            // When Iframe has completely loaded, initialize the history and
            // start polling.
            .one( 'load', function() {
              iframe_src || history_set( get_fragment() );
              poll();
            })
            
            // Load Iframe src if specified, otherwise nothing.
            .attr( 'src', iframe_src || 'javascript:0' )
            
            // Append Iframe after the end of the body to prevent unnecessary
            // initial page scrolling (yes, this works).
            .insertAfter( 'body' )[0].contentWindow;
          
          // Whenever `document.title` changes, update the Iframe's title to
          // prettify the back/next history menu entries. Since IE sometimes
          // errors with "Unspecified error" the very first time this is set
          // (yes, very useful) wrap this with a try/catch block.
          doc.onpropertychange = function() {
            try {
              if ( event.propertyName === 'title' ) {
                iframe.document.title = doc.title;
              }
            } catch(e) {}
          };
          
        }
      };
      
      // Override the "stop" method since an IE6/7 Iframe was created. Even
      // if there are no longer any bound event handlers, the polling loop
      // is still necessary for back/next to work at all!
      self.stop = fn_retval;
      
      // Get history by looking at the hidden Iframe's location.hash.
      history_get = function() {
        return get_fragment( iframe.location.href );
      };
      
      // Set a new history item by opening and then closing the Iframe
      // document, *then* setting its location.hash. If document.domain has
      // been set, update that as well.
      history_set = function( hash, history_hash ) {
        var iframe_doc = iframe.document,
          domain = $.fn[ str_hashchange ].domain;
        
        if ( hash !== history_hash ) {
          // Update Iframe with any initial `document.title` that might be set.
          iframe_doc.title = doc.title;
          
          // Opening the Iframe's document after it has been closed is what
          // actually adds a history entry.
          iframe_doc.open();
          
          // Set document.domain for the Iframe document as well, if necessary.
          domain && iframe_doc.write( '<script>document.domain="' + domain + '"</script>' );
          
          iframe_doc.close();
          
          // Update the Iframe's hash, for great justice.
          iframe.location.hash = hash;
        }
      };
      
    })();
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // ^^^^^^^^^^^^^^^^^^^ REMOVE IF NOT SUPPORTING IE6/7/8 ^^^^^^^^^^^^^^^^^^^
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    
    return self;
  })();
  
})(jQuery,this);

(function( $, undefined ) {

	/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
	window.matchMedia = window.matchMedia || (function( doc, undefined ) {

		

		var bool,
			docElem = doc.documentElement,
			refNode = docElem.firstElementChild || docElem.firstChild,
			// fakeBody required for <FF4 when executed in <head>
			fakeBody = doc.createElement( "body" ),
			div = doc.createElement( "div" );

		div.id = "mq-test-1";
		div.style.cssText = "position:absolute;top:-100em";
		fakeBody.style.background = "none";
		fakeBody.appendChild(div);

		return function(q){

			div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";

			docElem.insertBefore( fakeBody, refNode );
			bool = div.offsetWidth === 42;
			docElem.removeChild( fakeBody );

			return {
				matches: bool,
				media: q
			};

		};

	}( document ));

	// $.mobile.media uses matchMedia to return a boolean.
	$.mobile.media = function( q ) {
		return window.matchMedia( q ).matches;
	};

})(jQuery);

	(function( $, undefined ) {
		var support = {
			touch: "ontouchend" in document
		};

		$.mobile.support = $.mobile.support || {};
		$.extend( $.support, support );
		$.extend( $.mobile.support, support );
	}( jQuery ));

	(function( $, undefined ) {
		$.extend( $.support, {
			orientation: "orientation" in window && "onorientationchange" in window
		});
	}( jQuery ));

(function( $, undefined ) {

// thx Modernizr
function propExists( prop ) {
	var uc_prop = prop.charAt( 0 ).toUpperCase() + prop.substr( 1 ),
		props = ( prop + " " + vendors.join( uc_prop + " " ) + uc_prop ).split( " " );

	for ( var v in props ) {
		if ( fbCSS[ props[ v ] ] !== undefined ) {
			return true;
		}
	}
}

var fakeBody = $( "<body>" ).prependTo( "html" ),
	fbCSS = fakeBody[ 0 ].style,
	vendors = [ "Webkit", "Moz", "O" ],
	webos = "palmGetResource" in window, //only used to rule out scrollTop
	opera = window.opera,
	operamini = window.operamini && ({}).toString.call( window.operamini ) === "[object OperaMini]",
	bb = window.blackberry && !propExists( "-webkit-transform" ); //only used to rule out box shadow, as it's filled opaque on BB 5 and lower


function validStyle( prop, value, check_vend ) {
	var div = document.createElement( 'div' ),
		uc = function( txt ) {
			return txt.charAt( 0 ).toUpperCase() + txt.substr( 1 );
		},
		vend_pref = function( vend ) {
			if( vend === "" ) {
				return "";
			} else {
				return  "-" + vend.charAt( 0 ).toLowerCase() + vend.substr( 1 ) + "-";
			}
		},
		check_style = function( vend ) {
			var vend_prop = vend_pref( vend ) + prop + ": " + value + ";",
				uc_vend = uc( vend ),
				propStyle = uc_vend + ( uc_vend === "" ? prop : uc( prop ) );

			div.setAttribute( "style", vend_prop );

			if ( !!div.style[ propStyle ] ) {
				ret = true;
			}
		},
		check_vends = check_vend ? check_vend : vendors,
		ret;

	for( var i = 0; i < check_vends.length; i++ ) {
		check_style( check_vends[i] );
	}
	return !!ret;
}

function transform3dTest() {
	var mqProp = "transform-3d",
		// Because the `translate3d` test below throws false positives in Android:
		ret = $.mobile.media( "(-" + vendors.join( "-" + mqProp + "),(-" ) + "-" + mqProp + "),(" + mqProp + ")" );

	if( ret ) {
		return !!ret;
	}

	var el = document.createElement( "div" ),
		transforms = {
			// We’re omitting Opera for the time being; MS uses unprefixed.
			'MozTransform':'-moz-transform',
			'transform':'transform'
		};

	fakeBody.append( el );

	for ( var t in transforms ) {
		if( el.style[ t ] !== undefined ){
			el.style[ t ] = 'translate3d( 100px, 1px, 1px )';
			ret = window.getComputedStyle( el ).getPropertyValue( transforms[ t ] );
		}
	}
	return ( !!ret && ret !== "none" );
}

// Test for dynamic-updating base tag support ( allows us to avoid href,src attr rewriting )
function baseTagTest() {
	var fauxBase = location.protocol + "//" + location.host + location.pathname + "ui-dir/",
		base = $( "head base" ),
		fauxEle = null,
		href = "",
		link, rebase;

	if ( !base.length ) {
		base = fauxEle = $( "<base>", { "href": fauxBase }).appendTo( "head" );
	} else {
		href = base.attr( "href" );
	}

	link = $( "<a href='testurl' />" ).prependTo( fakeBody );
	rebase = link[ 0 ].href;
	base[ 0 ].href = href || location.pathname;

	if ( fauxEle ) {
		fauxEle.remove();
	}
	return rebase.indexOf( fauxBase ) === 0;
}

// Thanks Modernizr
function cssPointerEventsTest() {
	var element = document.createElement( 'x' ),
		documentElement = document.documentElement,
		getComputedStyle = window.getComputedStyle,
		supports;

	if ( !( 'pointerEvents' in element.style ) ) {
		return false;
	}

	element.style.pointerEvents = 'auto';
	element.style.pointerEvents = 'x';
	documentElement.appendChild( element );
	supports = getComputedStyle &&
	getComputedStyle( element, '' ).pointerEvents === 'auto';
	documentElement.removeChild( element );
	return !!supports;
}

function boundingRect() {
	var div = document.createElement( "div" );
	return typeof div.getBoundingClientRect !== "undefined";
}

// non-UA-based IE version check by James Padolsey, modified by jdalton - from http://gist.github.com/527683
// allows for inclusion of IE 6+, including Windows Mobile 7
$.extend( $.mobile, { browser: {} } );
$.mobile.browser.oldIE = (function() {
	var v = 3,
		div = document.createElement( "div" ),
		a = div.all || [];

	do {
		div.innerHTML = "<!--[if gt IE " + ( ++v ) + "]><br><![endif]-->";
	} while( a[0] );

	return v > 4 ? v : !v;
})();

function fixedPosition() {
	var w = window,
		ua = navigator.userAgent,
		platform = navigator.platform,
		// Rendering engine is Webkit, and capture major version
		wkmatch = ua.match( /AppleWebKit\/([0-9]+)/ ),
		wkversion = !!wkmatch && wkmatch[ 1 ],
		ffmatch = ua.match( /Fennec\/([0-9]+)/ ),
		ffversion = !!ffmatch && ffmatch[ 1 ],
		operammobilematch = ua.match( /Opera Mobi\/([0-9]+)/ ),
		omversion = !!operammobilematch && operammobilematch[ 1 ];

	if(
		// iOS 4.3 and older : Platform is iPhone/Pad/Touch and Webkit version is less than 534 (ios5)
		( ( platform.indexOf( "iPhone" ) > -1 || platform.indexOf( "iPad" ) > -1  || platform.indexOf( "iPod" ) > -1 ) && wkversion && wkversion < 534 ) ||
		// Opera Mini
		( w.operamini && ({}).toString.call( w.operamini ) === "[object OperaMini]" ) ||
		( operammobilematch && omversion < 7458 )	||
		//Android lte 2.1: Platform is Android and Webkit version is less than 533 (Android 2.2)
		( ua.indexOf( "Android" ) > -1 && wkversion && wkversion < 533 ) ||
		// Firefox Mobile before 6.0 -
		( ffversion && ffversion < 6 ) ||
		// WebOS less than 3
		( "palmGetResource" in window && wkversion && wkversion < 534 )	||
		// MeeGo
		( ua.indexOf( "MeeGo" ) > -1 && ua.indexOf( "NokiaBrowser/8.5.0" ) > -1 ) ) {
		return false;
	}

	return true;
}

$.extend( $.support, {
	cssTransitions: "WebKitTransitionEvent" in window ||
		validStyle( 'transition', 'height 100ms linear', [ "Webkit", "Moz", "" ] ) &&
		!$.mobile.browser.oldIE && !opera,

	// Note, Chrome for iOS has an extremely quirky implementation of popstate.
	// We've chosen to take the shortest path to a bug fix here for issue #5426
	// See the following link for information about the regex chosen
	// https://developers.google.com/chrome/mobile/docs/user-agent#chrome_for_ios_user-agent
	pushState: "pushState" in history &&
		"replaceState" in history &&
		// When running inside a FF iframe, calling replaceState causes an error
		!( window.navigator.userAgent.indexOf( "Firefox" ) >= 0 && window.top !== window ) &&
		( window.navigator.userAgent.search(/CriOS/) === -1 ),

	mediaquery: $.mobile.media( "only all" ),
	cssPseudoElement: !!propExists( "content" ),
	touchOverflow: !!propExists( "overflowScrolling" ),
	cssTransform3d: transform3dTest(),
	boxShadow: !!propExists( "boxShadow" ) && !bb,
	fixedPosition: fixedPosition(),
	scrollTop: ("pageXOffset" in window ||
		"scrollTop" in document.documentElement ||
		"scrollTop" in fakeBody[ 0 ]) && !webos && !operamini,

	dynamicBaseTag: baseTagTest(),
	cssPointerEvents: cssPointerEventsTest(),
	boundingRect: boundingRect()
});

fakeBody.remove();


// $.mobile.ajaxBlacklist is used to override ajaxEnabled on platforms that have known conflicts with hash history updates (BB5, Symbian)
// or that generally work better browsing in regular http for full page refreshes (Opera Mini)
// Note: This detection below is used as a last resort.
// We recommend only using these detection methods when all other more reliable/forward-looking approaches are not possible
var nokiaLTE7_3 = (function() {

	var ua = window.navigator.userAgent;

	//The following is an attempt to match Nokia browsers that are running Symbian/s60, with webkit, version 7.3 or older
	return ua.indexOf( "Nokia" ) > -1 &&
			( ua.indexOf( "Symbian/3" ) > -1 || ua.indexOf( "Series60/5" ) > -1 ) &&
			ua.indexOf( "AppleWebKit" ) > -1 &&
			ua.match( /(BrowserNG|NokiaBrowser)\/7\.[0-3]/ );
})();

// Support conditions that must be met in order to proceed
// default enhanced qualifications are media query support OR IE 7+

$.mobile.gradeA = function() {
	return ( $.support.mediaquery || $.mobile.browser.oldIE && $.mobile.browser.oldIE >= 7 ) && ( $.support.boundingRect || $.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/) !== null );
};

$.mobile.ajaxBlacklist =
			// BlackBerry browsers, pre-webkit
			window.blackberry && !window.WebKitPoint ||
			// Opera Mini
			operamini ||
			// Symbian webkits pre 7.3
			nokiaLTE7_3;

// Lastly, this workaround is the only way we've found so far to get pre 7.3 Symbian webkit devices
// to render the stylesheets when they're referenced before this script, as we'd recommend doing.
// This simply reappends the CSS in place, which for some reason makes it apply
if ( nokiaLTE7_3 ) {
	$(function() {
		$( "head link[rel='stylesheet']" ).attr( "rel", "alternate stylesheet" ).attr( "rel", "stylesheet" );
	});
}

// For ruling out shadows via css
if ( !$.support.boxShadow ) {
	$( "html" ).addClass( "ui-mobile-nosupport-boxshadow" );
}

})( jQuery );


(function( $, undefined ) {
	var $win = $.mobile.window, self, history;

	$.event.special.navigate = self = {
		bound: false,

		pushStateEnabled: true,

		originalEventName: undefined,

		// If pushstate support is present and push state support is defined to
		// be true on the mobile namespace.
		isPushStateEnabled: function() {
			return $.support.pushState &&
				$.mobile.pushStateEnabled === true &&
				this.isHashChangeEnabled();
		},

		// !! assumes mobile namespace is present
		isHashChangeEnabled: function() {
			return $.mobile.hashListeningEnabled === true;
		},

		// TODO a lot of duplication between popstate and hashchange
		popstate: function( event ) {
			var newEvent = new $.Event( "navigate" ),
				beforeNavigate = new $.Event( "beforenavigate" ),
				state = event.originalEvent.state || {},
				href = location.href;

			$win.trigger( beforeNavigate );

			if( beforeNavigate.isDefaultPrevented() ){
				return;
			}

			if( event.historyState ){
				$.extend(state, event.historyState);
			}

			// Make sure the original event is tracked for the end
			// user to inspect incase they want to do something special
			newEvent.originalEvent = event;

			// NOTE we let the current stack unwind because any assignment to
			//      location.hash will stop the world and run this event handler. By
			//      doing this we create a similar behavior to hashchange on hash
			//      assignment
			setTimeout(function() {
				$win.trigger( newEvent, {
					state: state
				});
			}, 0);
		},

		hashchange: function( event, data ) {
			var newEvent = new $.Event( "navigate" ),
				beforeNavigate = new $.Event( "beforenavigate" );

			$win.trigger( beforeNavigate );

			if( beforeNavigate.isDefaultPrevented() ){
				return;
			}

			// Make sure the original event is tracked for the end
			// user to inspect incase they want to do something special
			newEvent.originalEvent = event;

			// Trigger the hashchange with state provided by the user
			// that altered the hash
			$win.trigger( newEvent, {
				// Users that want to fully normalize the two events
				// will need to do history management down the stack and
				// add the state to the event before this binding is fired
				// TODO consider allowing for the explicit addition of callbacks
				//      to be fired before this value is set to avoid event timing issues
				state: event.hashchangeState || {}
			});
		},

		// TODO We really only want to set this up once
		//      but I'm not clear if there's a beter way to achieve
		//      this with the jQuery special event structure
		setup: function( data, namespaces ) {
			if( self.bound ) {
				return;
			}

			self.bound = true;

			if( self.isPushStateEnabled() ) {
				self.originalEventName = "popstate";
				$win.bind( "popstate.navigate", self.popstate );
			} else if ( self.isHashChangeEnabled() ){
				self.originalEventName = "hashchange";
				$win.bind( "hashchange.navigate", self.hashchange );
			}
		}
	};
})( jQuery );



(function( $, undefined ) {
		var path, documentBase, $base, dialogHashKey = "&ui-state=dialog";

		$.mobile.path = path = {
			uiStateKey: "&ui-state",

			// This scary looking regular expression parses an absolute URL or its relative
			// variants (protocol, site, document, query, and hash), into the various
			// components (protocol, host, path, query, fragment, etc that make up the
			// URL as well as some other commonly used sub-parts. When used with RegExp.exec()
			// or String.match, it parses the URL into a results array that looks like this:
			//
			//     [0]: http://jblas:password@mycompany.com:8080/mail/inbox?msg=1234&type=unread#msg-content
			//     [1]: http://jblas:password@mycompany.com:8080/mail/inbox?msg=1234&type=unread
			//     [2]: http://jblas:password@mycompany.com:8080/mail/inbox
			//     [3]: http://jblas:password@mycompany.com:8080
			//     [4]: http:
			//     [5]: //
			//     [6]: jblas:password@mycompany.com:8080
			//     [7]: jblas:password
			//     [8]: jblas
			//     [9]: password
			//    [10]: mycompany.com:8080
			//    [11]: mycompany.com
			//    [12]: 8080
			//    [13]: /mail/inbox
			//    [14]: /mail/
			//    [15]: inbox
			//    [16]: ?msg=1234&type=unread
			//    [17]: #msg-content
			//
			urlParseRE: /^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,

			// Abstraction to address xss (Issue #4787) by removing the authority in
			// browsers that auto	decode it. All references to location.href should be
			// replaced with a call to this method so that it can be dealt with properly here
			getLocation: function( url ) {
				var uri = url ? this.parseUrl( url ) : location,
					hash = this.parseUrl( url || location.href ).hash;

				// mimic the browser with an empty string when the hash is empty
				hash = hash === "#" ? "" : hash;

				// Make sure to parse the url or the location object for the hash because using location.hash
				// is autodecoded in firefox, the rest of the url should be from the object (location unless
				// we're testing) to avoid the inclusion of the authority
				return uri.protocol + "//" + uri.host + uri.pathname + uri.search + hash;
			},

			parseLocation: function() {
				return this.parseUrl( this.getLocation() );
			},

			//Parse a URL into a structure that allows easy access to
			//all of the URL components by name.
			parseUrl: function( url ) {
				// If we're passed an object, we'll assume that it is
				// a parsed url object and just return it back to the caller.
				if ( $.type( url ) === "object" ) {
					return url;
				}

				var matches = path.urlParseRE.exec( url || "" ) || [];

					// Create an object that allows the caller to access the sub-matches
					// by name. Note that IE returns an empty string instead of undefined,
					// like all other browsers do, so we normalize everything so its consistent
					// no matter what browser we're running on.
					return {
						href:         matches[  0 ] || "",
						hrefNoHash:   matches[  1 ] || "",
						hrefNoSearch: matches[  2 ] || "",
						domain:       matches[  3 ] || "",
						protocol:     matches[  4 ] || "",
						doubleSlash:  matches[  5 ] || "",
						authority:    matches[  6 ] || "",
						username:     matches[  8 ] || "",
						password:     matches[  9 ] || "",
						host:         matches[ 10 ] || "",
						hostname:     matches[ 11 ] || "",
						port:         matches[ 12 ] || "",
						pathname:     matches[ 13 ] || "",
						directory:    matches[ 14 ] || "",
						filename:     matches[ 15 ] || "",
						search:       matches[ 16 ] || "",
						hash:         matches[ 17 ] || ""
					};
			},

			//Turn relPath into an asbolute path. absPath is
			//an optional absolute path which describes what
			//relPath is relative to.
			makePathAbsolute: function( relPath, absPath ) {
				if ( relPath && relPath.charAt( 0 ) === "/" ) {
					return relPath;
				}

				relPath = relPath || "";
				absPath = absPath ? absPath.replace( /^\/|(\/[^\/]*|[^\/]+)$/g, "" ) : "";

				var absStack = absPath ? absPath.split( "/" ) : [],
					relStack = relPath.split( "/" );
				for ( var i = 0; i < relStack.length; i++ ) {
					var d = relStack[ i ];
					switch ( d ) {
						case ".":
							break;
						case "..":
							if ( absStack.length ) {
								absStack.pop();
							}
							break;
						default:
							absStack.push( d );
							break;
					}
				}
				return "/" + absStack.join( "/" );
			},

			//Returns true if both urls have the same domain.
			isSameDomain: function( absUrl1, absUrl2 ) {
				return path.parseUrl( absUrl1 ).domain === path.parseUrl( absUrl2 ).domain;
			},

			//Returns true for any relative variant.
			isRelativeUrl: function( url ) {
				// All relative Url variants have one thing in common, no protocol.
				return path.parseUrl( url ).protocol === "";
			},

			//Returns true for an absolute url.
			isAbsoluteUrl: function( url ) {
				return path.parseUrl( url ).protocol !== "";
			},

			//Turn the specified realtive URL into an absolute one. This function
			//can handle all relative variants (protocol, site, document, query, fragment).
			makeUrlAbsolute: function( relUrl, absUrl ) {
				if ( !path.isRelativeUrl( relUrl ) ) {
					return relUrl;
				}

				if ( absUrl === undefined ) {
					absUrl = this.documentBase;
				}

				var relObj = path.parseUrl( relUrl ),
					absObj = path.parseUrl( absUrl ),
					protocol = relObj.protocol || absObj.protocol,
					doubleSlash = relObj.protocol ? relObj.doubleSlash : ( relObj.doubleSlash || absObj.doubleSlash ),
					authority = relObj.authority || absObj.authority,
					hasPath = relObj.pathname !== "",
					pathname = path.makePathAbsolute( relObj.pathname || absObj.filename, absObj.pathname ),
					search = relObj.search || ( !hasPath && absObj.search ) || "",
					hash = relObj.hash;

				return protocol + doubleSlash + authority + pathname + search + hash;
			},

			//Add search (aka query) params to the specified url.
			addSearchParams: function( url, params ) {
				var u = path.parseUrl( url ),
					p = ( typeof params === "object" ) ? $.param( params ) : params,
					s = u.search || "?";
				return u.hrefNoSearch + s + ( s.charAt( s.length - 1 ) !== "?" ? "&" : "" ) + p + ( u.hash || "" );
			},

			convertUrlToDataUrl: function( absUrl ) {
				var u = path.parseUrl( absUrl );
				if ( path.isEmbeddedPage( u ) ) {
					// For embedded pages, remove the dialog hash key as in getFilePath(),
					// and remove otherwise the Data Url won't match the id of the embedded Page.
					return u.hash
						.split( dialogHashKey )[0]
						.replace( /^#/, "" )
						.replace( /\?.*$/, "" );
				} else if ( path.isSameDomain( u, this.documentBase ) ) {
					return u.hrefNoHash.replace( this.documentBase.domain, "" ).split( dialogHashKey )[0];
				}

				return window.decodeURIComponent(absUrl);
			},

			//get path from current hash, or from a file path
			get: function( newPath ) {
				if ( newPath === undefined ) {
					newPath = path.parseLocation().hash;
				}
				return path.stripHash( newPath ).replace( /[^\/]*\.[^\/*]+$/, '' );
			},

			//set location hash to path
			set: function( path ) {
				location.hash = path;
			},

			//test if a given url (string) is a path
			//NOTE might be exceptionally naive
			isPath: function( url ) {
				return ( /\// ).test( url );
			},

			//return a url path with the window's location protocol/hostname/pathname removed
			clean: function( url ) {
				return url.replace( this.documentBase.domain, "" );
			},

			//just return the url without an initial #
			stripHash: function( url ) {
				return url.replace( /^#/, "" );
			},

			stripQueryParams: function( url ) {
				return url.replace( /\?.*$/, "" );
			},

			//remove the preceding hash, any query params, and dialog notations
			cleanHash: function( hash ) {
				return path.stripHash( hash.replace( /\?.*$/, "" ).replace( dialogHashKey, "" ) );
			},

			isHashValid: function( hash ) {
				return ( /^#[^#]+$/ ).test( hash );
			},

			//check whether a url is referencing the same domain, or an external domain or different protocol
			//could be mailto, etc
			isExternal: function( url ) {
				var u = path.parseUrl( url );
				return u.protocol && u.domain !== this.documentUrl.domain ? true : false;
			},

			hasProtocol: function( url ) {
				return ( /^(:?\w+:)/ ).test( url );
			},

			isEmbeddedPage: function( url ) {
				var u = path.parseUrl( url );

				//if the path is absolute, then we need to compare the url against
				//both the this.documentUrl and the documentBase. The main reason for this
				//is that links embedded within external documents will refer to the
				//application document, whereas links embedded within the application
				//document will be resolved against the document base.
				if ( u.protocol !== "" ) {
					return ( !this.isPath(u.hash) && u.hash && ( u.hrefNoHash === this.documentUrl.hrefNoHash || ( this.documentBaseDiffers && u.hrefNoHash === this.documentBase.hrefNoHash ) ) );
				}
				return ( /^#/ ).test( u.href );
			},

			squash: function( url, resolutionUrl ) {
				var state, href, cleanedUrl, search, stateIndex,
					isPath = this.isPath( url ),
					uri = this.parseUrl( url ),
					preservedHash = uri.hash,
					uiState = "";

				// produce a url against which we can resole the provided path
				resolutionUrl = resolutionUrl || (path.isPath(url) ? path.getLocation() : path.getDocumentUrl());

				// If the url is anything but a simple string, remove any preceding hash
				// eg #foo/bar -> foo/bar
				//    #foo -> #foo
				cleanedUrl = isPath ? path.stripHash( url ) : url;

				// If the url is a full url with a hash check if the parsed hash is a path
				// if it is, strip the #, and use it otherwise continue without change
				cleanedUrl = path.isPath( uri.hash ) ? path.stripHash( uri.hash ) : cleanedUrl;

				// Split the UI State keys off the href
				stateIndex = cleanedUrl.indexOf( this.uiStateKey );

				// store the ui state keys for use
				if( stateIndex > -1 ){
					uiState = cleanedUrl.slice( stateIndex );
					cleanedUrl = cleanedUrl.slice( 0, stateIndex );
				}

				// make the cleanedUrl absolute relative to the resolution url
				href = path.makeUrlAbsolute( cleanedUrl, resolutionUrl );

				// grab the search from the resolved url since parsing from
				// the passed url may not yield the correct result
				search = this.parseUrl( href ).search;

				// TODO all this crap is terrible, clean it up
				if ( isPath ) {
					// reject the hash if it's a path or it's just a dialog key
					if( path.isPath( preservedHash ) || preservedHash.replace("#", "").indexOf( this.uiStateKey ) === 0) {
						preservedHash = "";
					}

					// Append the UI State keys where it exists and it's been removed
					// from the url
					if( uiState && preservedHash.indexOf( this.uiStateKey ) === -1){
						preservedHash += uiState;
					}

					// make sure that pound is on the front of the hash
					if( preservedHash.indexOf( "#" ) === -1 && preservedHash !== "" ){
						preservedHash = "#" + preservedHash;
					}

					// reconstruct each of the pieces with the new search string and hash
					href = path.parseUrl( href );
					href = href.protocol + "//" + href.host + href.pathname + search + preservedHash;
				} else {
					href += href.indexOf( "#" ) > -1 ? uiState : "#" + uiState;
				}

				return href;
			},

			isPreservableHash: function( hash ) {
				return hash.replace( "#", "" ).indexOf( this.uiStateKey ) === 0;
			}
		};

		path.documentUrl = path.parseLocation();

		$base = $( "head" ).find( "base" );

		path.documentBase = $base.length ?
			path.parseUrl( path.makeUrlAbsolute( $base.attr( "href" ), path.documentUrl.href ) ) :
			path.documentUrl;

		path.documentBaseDiffers = (path.documentUrl.hrefNoHash !== path.documentBase.hrefNoHash);

		//return the original document url
		path.getDocumentUrl = function( asParsedObject ) {
			return asParsedObject ? $.extend( {}, path.documentUrl ) : path.documentUrl.href;
		};

		//return the original document base url
		path.getDocumentBase = function( asParsedObject ) {
			return asParsedObject ? $.extend( {}, path.documentBase ) : path.documentBase.href;
		};
})( jQuery );



(function( $, undefined ) {
	var path = $.mobile.path;

	$.mobile.History = function( stack, index ) {
		this.stack = stack || [];
		this.activeIndex = index || 0;
	};

	$.extend($.mobile.History.prototype, {
		getActive: function() {
			return this.stack[ this.activeIndex ];
		},

		getLast: function() {
			return this.stack[ this.previousIndex ];
		},

		getNext: function() {
			return this.stack[ this.activeIndex + 1 ];
		},

		getPrev: function() {
			return this.stack[ this.activeIndex - 1 ];
		},

		// addNew is used whenever a new page is added
		add: function( url, data ){
			data = data || {};

			//if there's forward history, wipe it
			if ( this.getNext() ) {
				this.clearForward();
			}

			// if the hash is included in the data make sure the shape
			// is consistent for comparison
			if( data.hash && data.hash.indexOf( "#" ) === -1) {
				data.hash = "#" + data.hash;
			}

			data.url = url;
			this.stack.push( data );
			this.activeIndex = this.stack.length - 1;
		},

		//wipe urls ahead of active index
		clearForward: function() {
			this.stack = this.stack.slice( 0, this.activeIndex + 1 );
		},

		find: function( url, stack, earlyReturn ) {
			stack = stack || this.stack;

			var entry, i, length = stack.length, index;

			for ( i = 0; i < length; i++ ) {
				entry = stack[i];

				if ( decodeURIComponent(url) === decodeURIComponent(entry.url) ||
					decodeURIComponent(url) === decodeURIComponent(entry.hash) ) {
					index = i;

					if( earlyReturn ) {
						return index;
					}
				}
			}

			return index;
		},

		closest: function( url ) {
			var closest, a = this.activeIndex;

			// First, take the slice of the history stack before the current index and search
			// for a url match. If one is found, we'll avoid avoid looking through forward history
			// NOTE the preference for backward history movement is driven by the fact that
			//      most mobile browsers only have a dedicated back button, and users rarely use
			//      the forward button in desktop browser anyhow
			closest = this.find( url, this.stack.slice(0, a) );

			// If nothing was found in backward history check forward. The `true`
			// value passed as the third parameter causes the find method to break
			// on the first match in the forward history slice. The starting index
			// of the slice must then be added to the result to get the element index
			// in the original history stack :( :(
			//
			// TODO this is hyper confusing and should be cleaned up (ugh so bad)
			if( closest === undefined ) {
				closest = this.find( url, this.stack.slice(a), true );
				closest = closest === undefined ? closest : closest + a;
			}

			return closest;
		},

		direct: function( opts ) {
			var newActiveIndex = this.closest( opts.url ), a = this.activeIndex;

			// save new page index, null check to prevent falsey 0 result
			// record the previous index for reference
			if( newActiveIndex !== undefined ) {
				this.activeIndex = newActiveIndex;
				this.previousIndex = a;
			}

			// invoke callbacks where appropriate
			//
			// TODO this is also convoluted and confusing
			if ( newActiveIndex < a ) {
				( opts.present || opts.back || $.noop )( this.getActive(), 'back' );
			} else if ( newActiveIndex > a ) {
				( opts.present || opts.forward || $.noop )( this.getActive(), 'forward' );
			} else if ( newActiveIndex === undefined && opts.missing ){
				opts.missing( this.getActive() );
			}
		}
	});
})( jQuery );


(function( $, undefined ) {
	var path = $.mobile.path,
		initialHref = location.href;

	$.mobile.Navigator = function( history ) {
		this.history = history;
		this.ignoreInitialHashChange = true;

		$.mobile.window.bind({
			"popstate.history": $.proxy( this.popstate, this ),
			"hashchange.history": $.proxy( this.hashchange, this )
		});
	};

	$.extend($.mobile.Navigator.prototype, {
		squash: function( url, data ) {
			var state, href, hash = path.isPath(url) ? path.stripHash(url) : url;

			href = path.squash( url );

			// make sure to provide this information when it isn't explicitly set in the
			// data object that was passed to the squash method
			state = $.extend({
				hash: hash,
				url: href
			}, data);

			// replace the current url with the new href and store the state
			// Note that in some cases we might be replacing an url with the
			// same url. We do this anyways because we need to make sure that
			// all of our history entries have a state object associated with
			// them. This allows us to work around the case where $.mobile.back()
			// is called to transition from an external page to an embedded page.
			// In that particular case, a hashchange event is *NOT* generated by the browser.
			// Ensuring each history entry has a state object means that onPopState()
			// will always trigger our hashchange callback even when a hashchange event
			// is not fired.
			window.history.replaceState( state, state.title || document.title, href );

			return state;
		},

		hash: function( url, href ) {
			var parsed, loc, hash;

			// Grab the hash for recording. If the passed url is a path
			// we used the parsed version of the squashed url to reconstruct,
			// otherwise we assume it's a hash and store it directly
			parsed = path.parseUrl( url );
			loc = path.parseLocation();

			if( loc.pathname + loc.search === parsed.pathname + parsed.search ) {
				// If the pathname and search of the passed url is identical to the current loc
				// then we must use the hash. Otherwise there will be no event
				// eg, url = "/foo/bar?baz#bang", location.href = "http://example.com/foo/bar?baz"
				hash = parsed.hash ? parsed.hash : parsed.pathname + parsed.search;
			} else if ( path.isPath(url) ) {
				var resolved = path.parseUrl( href );
				// If the passed url is a path, make it domain relative and remove any trailing hash
				hash = resolved.pathname + resolved.search + (path.isPreservableHash( resolved.hash )? resolved.hash.replace( "#", "" ) : "");
			} else {
				hash = url;
			}

			return hash;
		},

		// TODO reconsider name
		go: function( url, data, noEvents ) {
			var state, href, hash, popstateEvent,
				isPopStateEvent = $.event.special.navigate.isPushStateEnabled();

			// Get the url as it would look squashed on to the current resolution url
			href = path.squash( url );

			// sort out what the hash sould be from the url
			hash = this.hash( url, href );

			// Here we prevent the next hash change or popstate event from doing any
			// history management. In the case of hashchange we don't swallow it
			// if there will be no hashchange fired (since that won't reset the value)
			// and will swallow the following hashchange
			if( noEvents && hash !== path.stripHash(path.parseLocation().hash) ) {
				this.preventNextHashChange = noEvents;
			}

			// IMPORTANT in the case where popstate is supported the event will be triggered
			//      directly, stopping further execution - ie, interupting the flow of this
			//      method call to fire bindings at this expression. Below the navigate method
			//      there is a binding to catch this event and stop its propagation.
			//
			//      We then trigger a new popstate event on the window with a null state
			//      so that the navigate events can conclude their work properly
			//
			// if the url is a path we want to preserve the query params that are available on
			// the current url.
			this.preventHashAssignPopState = true;
			window.location.hash = hash;

			// If popstate is enabled and the browser triggers `popstate` events when the hash
			// is set (this often happens immediately in browsers like Chrome), then the
			// this flag will be set to false already. If it's a browser that does not trigger
			// a `popstate` on hash assignement or `replaceState` then we need avoid the branch
			// that swallows the event created by the popstate generated by the hash assignment
			// At the time of this writing this happens with Opera 12 and some version of IE
			this.preventHashAssignPopState = false;

			state = $.extend({
				url: href,
				hash: hash,
				title: document.title
			}, data);

			if( isPopStateEvent ) {
				popstateEvent = new $.Event( "popstate" );
				popstateEvent.originalEvent = {
					type: "popstate",
					state: null
				};

				this.squash( url, state );

				// Trigger a new faux popstate event to replace the one that we
				// caught that was triggered by the hash setting above.
				if( !noEvents ) {
					this.ignorePopState = true;
					$.mobile.window.trigger( popstateEvent );
				}
			}

			// record the history entry so that the information can be included
			// in hashchange event driven navigate events in a similar fashion to
			// the state that's provided by popstate
			this.history.add( state.url, state );
		},


		// This binding is intended to catch the popstate events that are fired
		// when execution of the `$.navigate` method stops at window.location.hash = url;
		// and completely prevent them from propagating. The popstate event will then be
		// retriggered after execution resumes
		//
		// TODO grab the original event here and use it for the synthetic event in the
		//      second half of the navigate execution that will follow this binding
		popstate: function( event ) {
			var active, hash, state, closestIndex;

			// Partly to support our test suite which manually alters the support
			// value to test hashchange. Partly to prevent all around weirdness
			if( !$.event.special.navigate.isPushStateEnabled() ){
				return;
			}

			// If this is the popstate triggered by the actual alteration of the hash
			// prevent it completely. History is tracked manually
			if( this.preventHashAssignPopState ) {
				this.preventHashAssignPopState = false;
				event.stopImmediatePropagation();
				return;
			}

			// if this is the popstate triggered after the `replaceState` call in the go
			// method, then simply ignore it. The history entry has already been captured
			if( this.ignorePopState ) {
				this.ignorePopState = false;
				return;
			}

			// If there is no state, and the history stack length is one were
			// probably getting the page load popstate fired by browsers like chrome
			// avoid it and set the one time flag to false.
			// TODO: Do we really need all these conditions? Comparing location hrefs
			// should be sufficient.
			if( !event.originalEvent.state &&
				this.history.stack.length === 1 &&
				this.ignoreInitialHashChange ) {
				this.ignoreInitialHashChange = false;

				if ( location.href === initialHref ) {
					event.preventDefault();
					return;
				}
			}

			// account for direct manipulation of the hash. That is, we will receive a popstate
			// when the hash is changed by assignment, and it won't have a state associated. We
			// then need to squash the hash. See below for handling of hash assignment that
			// matches an existing history entry
			// TODO it might be better to only add to the history stack
			//      when the hash is adjacent to the active history entry
			hash = path.parseLocation().hash;
			if( !event.originalEvent.state && hash ) {
				// squash the hash that's been assigned on the URL with replaceState
				// also grab the resulting state object for storage
				state = this.squash( hash );

				// record the new hash as an additional history entry
				// to match the browser's treatment of hash assignment
				this.history.add( state.url, state );

				// pass the newly created state information
				// along with the event
				event.historyState = state;

				// do not alter history, we've added a new history entry
				// so we know where we are
				return;
			}

			// If all else fails this is a popstate that comes from the back or forward buttons
			// make sure to set the state of our history stack properly, and record the directionality
			this.history.direct({
				url: (event.originalEvent.state || {}).url || hash,

				// When the url is either forward or backward in history include the entry
				// as data on the event object for merging as data in the navigate event
				present: function( historyEntry, direction ) {
					// make sure to create a new object to pass down as the navigate event data
					event.historyState = $.extend({}, historyEntry);
					event.historyState.direction = direction;
				}
			});
		},

		// NOTE must bind before `navigate` special event hashchange binding otherwise the
		//      navigation data won't be attached to the hashchange event in time for those
		//      bindings to attach it to the `navigate` special event
		// TODO add a check here that `hashchange.navigate` is bound already otherwise it's
		//      broken (exception?)
		hashchange: function( event ) {
			var history, hash;

			// If hashchange listening is explicitly disabled or pushstate is supported
			// avoid making use of the hashchange handler.
			if(!$.event.special.navigate.isHashChangeEnabled() ||
				$.event.special.navigate.isPushStateEnabled() ) {
				return;
			}

			// On occasion explicitly want to prevent the next hash from propogating because we only
			// with to alter the url to represent the new state do so here
			if( this.preventNextHashChange ){
				this.preventNextHashChange = false;
				event.stopImmediatePropagation();
				return;
			}

			history = this.history;
			hash = path.parseLocation().hash;

			// If this is a hashchange caused by the back or forward button
			// make sure to set the state of our history stack properly
			this.history.direct({
				url: hash,

				// When the url is either forward or backward in history include the entry
				// as data on the event object for merging as data in the navigate event
				present: function( historyEntry, direction ) {
					// make sure to create a new object to pass down as the navigate event data
					event.hashchangeState = $.extend({}, historyEntry);
					event.hashchangeState.direction = direction;
				},

				// When we don't find a hash in our history clearly we're aiming to go there
				// record the entry as new for future traversal
				//
				// NOTE it's not entirely clear that this is the right thing to do given that we
				//      can't know the users intention. It might be better to explicitly _not_
				//      support location.hash assignment in preference to $.navigate calls
				// TODO first arg to add should be the href, but it causes issues in identifying
				//      embeded pages
				missing: function() {
					history.add( hash, {
						hash: hash,
						title: document.title
					});
				}
			});
		}
	});
})( jQuery );



(function( $, undefined ) {
	// TODO consider queueing navigation activity until previous activities have completed
	//      so that end users don't have to think about it. Punting for now
	// TODO !! move the event bindings into callbacks on the navigate event
	$.mobile.navigate = function( url, data, noEvents ) {
		$.mobile.navigate.navigator.go( url, data, noEvents );
	};

	// expose the history on the navigate method in anticipation of full integration with
	// existing navigation functionalty that is tightly coupled to the history information
	$.mobile.navigate.history = new $.mobile.History();

	// instantiate an instance of the navigator for use within the $.navigate method
	$.mobile.navigate.navigator = new $.mobile.Navigator( $.mobile.navigate.history );

	var loc = $.mobile.path.parseLocation();
	$.mobile.navigate.history.add( loc.href, {hash: loc.hash} );
})( jQuery );


// This plugin is an experiment for abstracting away the touch and mouse
// events so that developers don't have to worry about which method of input
// the device their document is loaded on supports.
//
// The idea here is to allow the developer to register listeners for the
// basic mouse events, such as mousedown, mousemove, mouseup, and click,
// and the plugin will take care of registering the correct listeners
// behind the scenes to invoke the listener at the fastest possible time
// for that device, while still retaining the order of event firing in
// the traditional mouse environment, should multiple handlers be registered
// on the same element for different events.
//
// The current version exposes the following virtual events to jQuery bind methods:
// "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel"

(function( $, window, document, undefined ) {

var dataPropertyName = "virtualMouseBindings",
	touchTargetPropertyName = "virtualTouchID",
	virtualEventNames = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split( " " ),
	touchEventProps = "clientX clientY pageX pageY screenX screenY".split( " " ),
	mouseHookProps = $.event.mouseHooks ? $.event.mouseHooks.props : [],
	mouseEventProps = $.event.props.concat( mouseHookProps ),
	activeDocHandlers = {},
	resetTimerID = 0,
	startX = 0,
	startY = 0,
	didScroll = false,
	clickBlockList = [],
	blockMouseTriggers = false,
	blockTouchTriggers = false,
	eventCaptureSupported = "addEventListener" in document,
	$document = $( document ),
	nextTouchID = 1,
	lastTouchID = 0, threshold;

$.vmouse = {
	moveDistanceThreshold: 10,
	clickDistanceThreshold: 10,
	resetTimerDuration: 1500
};

function getNativeEvent( event ) {

	while ( event && typeof event.originalEvent !== "undefined" ) {
		event = event.originalEvent;
	}
	return event;
}

function createVirtualEvent( event, eventType ) {

	var t = event.type,
		oe, props, ne, prop, ct, touch, i, j, len;

	event = $.Event( event );
	event.type = eventType;

	oe = event.originalEvent;
	props = $.event.props;

	// addresses separation of $.event.props in to $.event.mouseHook.props and Issue 3280
	// https://github.com/jquery/jquery-mobile/issues/3280
	if ( t.search( /^(mouse|click)/ ) > -1 ) {
		props = mouseEventProps;
	}

	// copy original event properties over to the new event
	// this would happen if we could call $.event.fix instead of $.Event
	// but we don't have a way to force an event to be fixed multiple times
	if ( oe ) {
		for ( i = props.length, prop; i; ) {
			prop = props[ --i ];
			event[ prop ] = oe[ prop ];
		}
	}

	// make sure that if the mouse and click virtual events are generated
	// without a .which one is defined
	if ( t.search(/mouse(down|up)|click/) > -1 && !event.which ) {
		event.which = 1;
	}

	if ( t.search(/^touch/) !== -1 ) {
		ne = getNativeEvent( oe );
		t = ne.touches;
		ct = ne.changedTouches;
		touch = ( t && t.length ) ? t[0] : ( ( ct && ct.length ) ? ct[ 0 ] : undefined );

		if ( touch ) {
			for ( j = 0, len = touchEventProps.length; j < len; j++) {
				prop = touchEventProps[ j ];
				event[ prop ] = touch[ prop ];
			}
		}
	}

	return event;
}

function getVirtualBindingFlags( element ) {

	var flags = {},
		b, k;

	while ( element ) {

		b = $.data( element, dataPropertyName );

		for (  k in b ) {
			if ( b[ k ] ) {
				flags[ k ] = flags.hasVirtualBinding = true;
			}
		}
		element = element.parentNode;
	}
	return flags;
}

function getClosestElementWithVirtualBinding( element, eventType ) {
	var b;
	while ( element ) {

		b = $.data( element, dataPropertyName );

		if ( b && ( !eventType || b[ eventType ] ) ) {
			return element;
		}
		element = element.parentNode;
	}
	return null;
}

function enableTouchBindings() {
	blockTouchTriggers = false;
}

function disableTouchBindings() {
	blockTouchTriggers = true;
}

function enableMouseBindings() {
	lastTouchID = 0;
	clickBlockList.length = 0;
	blockMouseTriggers = false;

	// When mouse bindings are enabled, our
	// touch bindings are disabled.
	disableTouchBindings();
}

function disableMouseBindings() {
	// When mouse bindings are disabled, our
	// touch bindings are enabled.
	enableTouchBindings();
}

function startResetTimer() {
	clearResetTimer();
	resetTimerID = setTimeout( function() {
		resetTimerID = 0;
		enableMouseBindings();
	}, $.vmouse.resetTimerDuration );
}

function clearResetTimer() {
	if ( resetTimerID ) {
		clearTimeout( resetTimerID );
		resetTimerID = 0;
	}
}

function triggerVirtualEvent( eventType, event, flags ) {
	var ve;

	if ( ( flags && flags[ eventType ] ) ||
				( !flags && getClosestElementWithVirtualBinding( event.target, eventType ) ) ) {

		ve = createVirtualEvent( event, eventType );

		$( event.target).trigger( ve );
	}

	return ve;
}

function mouseEventCallback( event ) {
	var touchID = $.data( event.target, touchTargetPropertyName );

	if ( !blockMouseTriggers && ( !lastTouchID || lastTouchID !== touchID ) ) {
		var ve = triggerVirtualEvent( "v" + event.type, event );
		if ( ve ) {
			if ( ve.isDefaultPrevented() ) {
				event.preventDefault();
			}
			if ( ve.isPropagationStopped() ) {
				event.stopPropagation();
			}
			if ( ve.isImmediatePropagationStopped() ) {
				event.stopImmediatePropagation();
			}
		}
	}
}

function handleTouchStart( event ) {

	var touches = getNativeEvent( event ).touches,
		target, flags;

	if ( touches && touches.length === 1 ) {

		target = event.target;
		flags = getVirtualBindingFlags( target );

		if ( flags.hasVirtualBinding ) {

			lastTouchID = nextTouchID++;
			$.data( target, touchTargetPropertyName, lastTouchID );

			clearResetTimer();

			disableMouseBindings();
			didScroll = false;

			var t = getNativeEvent( event ).touches[ 0 ];
			startX = t.pageX;
			startY = t.pageY;

			triggerVirtualEvent( "vmouseover", event, flags );
			triggerVirtualEvent( "vmousedown", event, flags );
		}
	}
}

function handleScroll( event ) {
	if ( blockTouchTriggers ) {
		return;
	}

	if ( !didScroll ) {
		triggerVirtualEvent( "vmousecancel", event, getVirtualBindingFlags( event.target ) );
	}

	didScroll = true;
	startResetTimer();
}

function handleTouchMove( event ) {
	if ( blockTouchTriggers ) {
		return;
	}

	var t = getNativeEvent( event ).touches[ 0 ],
		didCancel = didScroll,
		moveThreshold = $.vmouse.moveDistanceThreshold,
		flags = getVirtualBindingFlags( event.target );

		didScroll = didScroll ||
			( Math.abs( t.pageX - startX ) > moveThreshold ||
				Math.abs( t.pageY - startY ) > moveThreshold );


	if ( didScroll && !didCancel ) {
		triggerVirtualEvent( "vmousecancel", event, flags );
	}

	triggerVirtualEvent( "vmousemove", event, flags );
	startResetTimer();
}

function handleTouchEnd( event ) {
	if ( blockTouchTriggers ) {
		return;
	}

	disableTouchBindings();

	var flags = getVirtualBindingFlags( event.target ),
		t;
	triggerVirtualEvent( "vmouseup", event, flags );

	if ( !didScroll ) {
		var ve = triggerVirtualEvent( "vclick", event, flags );
		if ( ve && ve.isDefaultPrevented() ) {
			// The target of the mouse events that follow the touchend
			// event don't necessarily match the target used during the
			// touch. This means we need to rely on coordinates for blocking
			// any click that is generated.
			t = getNativeEvent( event ).changedTouches[ 0 ];
			clickBlockList.push({
				touchID: lastTouchID,
				x: t.clientX,
				y: t.clientY
			});

			// Prevent any mouse events that follow from triggering
			// virtual event notifications.
			blockMouseTriggers = true;
		}
	}
	triggerVirtualEvent( "vmouseout", event, flags);
	didScroll = false;

	startResetTimer();
}

function hasVirtualBindings( ele ) {
	var bindings = $.data( ele, dataPropertyName ),
		k;

	if ( bindings ) {
		for ( k in bindings ) {
			if ( bindings[ k ] ) {
				return true;
			}
		}
	}
	return false;
}

function dummyMouseHandler() {}

function getSpecialEventObject( eventType ) {
	var realType = eventType.substr( 1 );

	return {
		setup: function( data, namespace ) {
			// If this is the first virtual mouse binding for this element,
			// add a bindings object to its data.

			if ( !hasVirtualBindings( this ) ) {
				$.data( this, dataPropertyName, {} );
			}

			// If setup is called, we know it is the first binding for this
			// eventType, so initialize the count for the eventType to zero.
			var bindings = $.data( this, dataPropertyName );
			bindings[ eventType ] = true;

			// If this is the first virtual mouse event for this type,
			// register a global handler on the document.

			activeDocHandlers[ eventType ] = ( activeDocHandlers[ eventType ] || 0 ) + 1;

			if ( activeDocHandlers[ eventType ] === 1 ) {
				$document.bind( realType, mouseEventCallback );
			}

			// Some browsers, like Opera Mini, won't dispatch mouse/click events
			// for elements unless they actually have handlers registered on them.
			// To get around this, we register dummy handlers on the elements.

			$( this ).bind( realType, dummyMouseHandler );

			// For now, if event capture is not supported, we rely on mouse handlers.
			if ( eventCaptureSupported ) {
				// If this is the first virtual mouse binding for the document,
				// register our touchstart handler on the document.

				activeDocHandlers[ "touchstart" ] = ( activeDocHandlers[ "touchstart" ] || 0) + 1;

				if ( activeDocHandlers[ "touchstart" ] === 1 ) {
					$document.bind( "touchstart", handleTouchStart )
						.bind( "touchend", handleTouchEnd )

						// On touch platforms, touching the screen and then dragging your finger
						// causes the window content to scroll after some distance threshold is
						// exceeded. On these platforms, a scroll prevents a click event from being
						// dispatched, and on some platforms, even the touchend is suppressed. To
						// mimic the suppression of the click event, we need to watch for a scroll
						// event. Unfortunately, some platforms like iOS don't dispatch scroll
						// events until *AFTER* the user lifts their finger (touchend). This means
						// we need to watch both scroll and touchmove events to figure out whether
						// or not a scroll happenens before the touchend event is fired.

						.bind( "touchmove", handleTouchMove )
						.bind( "scroll", handleScroll );
				}
			}
		},

		teardown: function( data, namespace ) {
			// If this is the last virtual binding for this eventType,
			// remove its global handler from the document.

			--activeDocHandlers[ eventType ];

			if ( !activeDocHandlers[ eventType ] ) {
				$document.unbind( realType, mouseEventCallback );
			}

			if ( eventCaptureSupported ) {
				// If this is the last virtual mouse binding in existence,
				// remove our document touchstart listener.

				--activeDocHandlers[ "touchstart" ];

				if ( !activeDocHandlers[ "touchstart" ] ) {
					$document.unbind( "touchstart", handleTouchStart )
						.unbind( "touchmove", handleTouchMove )
						.unbind( "touchend", handleTouchEnd )
						.unbind( "scroll", handleScroll );
				}
			}

			var $this = $( this ),
				bindings = $.data( this, dataPropertyName );

			// teardown may be called when an element was
			// removed from the DOM. If this is the case,
			// jQuery core may have already stripped the element
			// of any data bindings so we need to check it before
			// using it.
			if ( bindings ) {
				bindings[ eventType ] = false;
			}

			// Unregister the dummy event handler.

			$this.unbind( realType, dummyMouseHandler );

			// If this is the last virtual mouse binding on the
			// element, remove the binding data from the element.

			if ( !hasVirtualBindings( this ) ) {
				$this.removeData( dataPropertyName );
			}
		}
	};
}

// Expose our custom events to the jQuery bind/unbind mechanism.

for ( var i = 0; i < virtualEventNames.length; i++ ) {
	$.event.special[ virtualEventNames[ i ] ] = getSpecialEventObject( virtualEventNames[ i ] );
}

// Add a capture click handler to block clicks.
// Note that we require event capture support for this so if the device
// doesn't support it, we punt for now and rely solely on mouse events.
if ( eventCaptureSupported ) {
	document.addEventListener( "click", function( e ) {
		var cnt = clickBlockList.length,
			target = e.target,
			x, y, ele, i, o, touchID;

		if ( cnt ) {
			x = e.clientX;
			y = e.clientY;
			threshold = $.vmouse.clickDistanceThreshold;

			// The idea here is to run through the clickBlockList to see if
			// the current click event is in the proximity of one of our
			// vclick events that had preventDefault() called on it. If we find
			// one, then we block the click.
			//
			// Why do we have to rely on proximity?
			//
			// Because the target of the touch event that triggered the vclick
			// can be different from the target of the click event synthesized
			// by the browser. The target of a mouse/click event that is syntehsized
			// from a touch event seems to be implementation specific. For example,
			// some browsers will fire mouse/click events for a link that is near
			// a touch event, even though the target of the touchstart/touchend event
			// says the user touched outside the link. Also, it seems that with most
			// browsers, the target of the mouse/click event is not calculated until the
			// time it is dispatched, so if you replace an element that you touched
			// with another element, the target of the mouse/click will be the new
			// element underneath that point.
			//
			// Aside from proximity, we also check to see if the target and any
			// of its ancestors were the ones that blocked a click. This is necessary
			// because of the strange mouse/click target calculation done in the
			// Android 2.1 browser, where if you click on an element, and there is a
			// mouse/click handler on one of its ancestors, the target will be the
			// innermost child of the touched element, even if that child is no where
			// near the point of touch.

			ele = target;

			while ( ele ) {
				for ( i = 0; i < cnt; i++ ) {
					o = clickBlockList[ i ];
					touchID = 0;

					if ( ( ele === target && Math.abs( o.x - x ) < threshold && Math.abs( o.y - y ) < threshold ) ||
								$.data( ele, touchTargetPropertyName ) === o.touchID ) {
						// XXX: We may want to consider removing matches from the block list
						//      instead of waiting for the reset timer to fire.
						e.preventDefault();
						e.stopPropagation();
						return;
					}
				}
				ele = ele.parentNode;
			}
		}
	}, true);
}
})( jQuery, window, document );


(function( $, window, undefined ) {
	var $document = $( document );

	// add new event shortcuts
	$.each( ( "touchstart touchmove touchend " +
		"tap taphold " +
		"swipe swipeleft swiperight " +
		"scrollstart scrollstop" ).split( " " ), function( i, name ) {

		$.fn[ name ] = function( fn ) {
			return fn ? this.bind( name, fn ) : this.trigger( name );
		};

		// jQuery < 1.8
		if ( $.attrFn ) {
			$.attrFn[ name ] = true;
		}
	});

	var supportTouch = $.mobile.support.touch,
		scrollEvent = "touchmove scroll",
		touchStartEvent = supportTouch ? "touchstart" : "mousedown",
		touchStopEvent = supportTouch ? "touchend" : "mouseup",
		touchMoveEvent = supportTouch ? "touchmove" : "mousemove";

	function triggerCustomEvent( obj, eventType, event ) {
		var originalType = event.type;
		event.type = eventType;
		$.event.dispatch.call( obj, event );
		event.type = originalType;
	}

	// also handles scrollstop
	$.event.special.scrollstart = {

		enabled: true,

		setup: function() {

			var thisObject = this,
				$this = $( thisObject ),
				scrolling,
				timer;

			function trigger( event, state ) {
				scrolling = state;
				triggerCustomEvent( thisObject, scrolling ? "scrollstart" : "scrollstop", event );
			}

			// iPhone triggers scroll after a small delay; use touchmove instead
			$this.bind( scrollEvent, function( event ) {

				if ( !$.event.special.scrollstart.enabled ) {
					return;
				}

				if ( !scrolling ) {
					trigger( event, true );
				}

				clearTimeout( timer );
				timer = setTimeout( function() {
					trigger( event, false );
				}, 50 );
			});
		}
	};

	// also handles taphold
	$.event.special.tap = {
		tapholdThreshold: 750,

		setup: function() {
			var thisObject = this,
				$this = $( thisObject );

			$this.bind( "vmousedown", function( event ) {

				if ( event.which && event.which !== 1 ) {
					return false;
				}

				var origTarget = event.target,
					origEvent = event.originalEvent,
					timer;

				function clearTapTimer() {
					clearTimeout( timer );
				}

				function clearTapHandlers() {
					clearTapTimer();

					$this.unbind( "vclick", clickHandler )
						.unbind( "vmouseup", clearTapTimer );
					$document.unbind( "vmousecancel", clearTapHandlers );
				}

				function clickHandler( event ) {
					clearTapHandlers();

					// ONLY trigger a 'tap' event if the start target is
					// the same as the stop target.
					if ( origTarget === event.target ) {
						triggerCustomEvent( thisObject, "tap", event );
					}
				}

				$this.bind( "vmouseup", clearTapTimer )
					.bind( "vclick", clickHandler );
				$document.bind( "vmousecancel", clearTapHandlers );

				timer = setTimeout( function() {
					triggerCustomEvent( thisObject, "taphold", $.Event( "taphold", { target: origTarget } ) );
				}, $.event.special.tap.tapholdThreshold );
			});
		}
	};

	// also handles swipeleft, swiperight
	$.event.special.swipe = {
		scrollSupressionThreshold: 30, // More than this horizontal displacement, and we will suppress scrolling.

		durationThreshold: 1000, // More time than this, and it isn't a swipe.

		horizontalDistanceThreshold: 30,  // Swipe horizontal displacement must be more than this.

		verticalDistanceThreshold: 75,  // Swipe vertical displacement must be less than this.

		start: function( event ) {
			var data = event.originalEvent.touches ?
					event.originalEvent.touches[ 0 ] : event;
			return {
						time: ( new Date() ).getTime(),
						coords: [ data.pageX, data.pageY ],
						origin: $( event.target )
					};
		},

		stop: function( event ) {
			var data = event.originalEvent.touches ?
					event.originalEvent.touches[ 0 ] : event;
			return {
						time: ( new Date() ).getTime(),
						coords: [ data.pageX, data.pageY ]
					};
		},

		handleSwipe: function( start, stop ) {
			if ( stop.time - start.time < $.event.special.swipe.durationThreshold &&
				Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.horizontalDistanceThreshold &&
				Math.abs( start.coords[ 1 ] - stop.coords[ 1 ] ) < $.event.special.swipe.verticalDistanceThreshold ) {

				start.origin.trigger( "swipe" )
					.trigger( start.coords[0] > stop.coords[ 0 ] ? "swipeleft" : "swiperight" );
			}
		},

		setup: function() {
			var thisObject = this,
				$this = $( thisObject );

			$this.bind( touchStartEvent, function( event ) {
				var start = $.event.special.swipe.start( event ),
					stop;

				function moveHandler( event ) {
					if ( !start ) {
						return;
					}

					stop = $.event.special.swipe.stop( event );

					// prevent scrolling
					if ( Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.scrollSupressionThreshold ) {
						event.preventDefault();
					}
				}

				$this.bind( touchMoveEvent, moveHandler )
					.one( touchStopEvent, function() {
						$this.unbind( touchMoveEvent, moveHandler );

						if ( start && stop ) {
							$.event.special.swipe.handleSwipe( start, stop );
						}
						start = stop = undefined;
					});
			});
		}
	};
	$.each({
		scrollstop: "scrollstart",
		taphold: "tap",
		swipeleft: "swipe",
		swiperight: "swipe"
	}, function( event, sourceEvent ) {

		$.event.special[ event ] = {
			setup: function() {
				$( this ).bind( sourceEvent, $.noop );
			}
		};
	});

})( jQuery, this );


	// throttled resize event
	(function( $ ) {
		$.event.special.throttledresize = {
			setup: function() {
				$( this ).bind( "resize", handler );
			},
			teardown: function() {
				$( this ).unbind( "resize", handler );
			}
		};

		var throttle = 250,
			handler = function() {
				curr = ( new Date() ).getTime();
				diff = curr - lastCall;

				if ( diff >= throttle ) {

					lastCall = curr;
					$( this ).trigger( "throttledresize" );

				} else {

					if ( heldCall ) {
						clearTimeout( heldCall );
					}

					// Promise a held call will still execute
					heldCall = setTimeout( handler, throttle - diff );
				}
			},
			lastCall = 0,
			heldCall,
			curr,
			diff;
	})( jQuery );

(function( $, window ) {
	var win = $( window ),
		event_name = "orientationchange",
		special_event,
		get_orientation,
		last_orientation,
		initial_orientation_is_landscape,
		initial_orientation_is_default,
		portrait_map = { "0": true, "180": true };

	// It seems that some device/browser vendors use window.orientation values 0 and 180 to
	// denote the "default" orientation. For iOS devices, and most other smart-phones tested,
	// the default orientation is always "portrait", but in some Android and RIM based tablets,
	// the default orientation is "landscape". The following code attempts to use the window
	// dimensions to figure out what the current orientation is, and then makes adjustments
	// to the to the portrait_map if necessary, so that we can properly decode the
	// window.orientation value whenever get_orientation() is called.
	//
	// Note that we used to use a media query to figure out what the orientation the browser
	// thinks it is in:
	//
	//     initial_orientation_is_landscape = $.mobile.media("all and (orientation: landscape)");
	//
	// but there was an iPhone/iPod Touch bug beginning with iOS 4.2, up through iOS 5.1,
	// where the browser *ALWAYS* applied the landscape media query. This bug does not
	// happen on iPad.

	if ( $.support.orientation ) {

		// Check the window width and height to figure out what the current orientation
		// of the device is at this moment. Note that we've initialized the portrait map
		// values to 0 and 180, *AND* we purposely check for landscape so that if we guess
		// wrong, , we default to the assumption that portrait is the default orientation.
		// We use a threshold check below because on some platforms like iOS, the iPhone
		// form-factor can report a larger width than height if the user turns on the
		// developer console. The actual threshold value is somewhat arbitrary, we just
		// need to make sure it is large enough to exclude the developer console case.

		var ww = window.innerWidth || win.width(),
			wh = window.innerHeight || win.height(),
			landscape_threshold = 50;

		initial_orientation_is_landscape = ww > wh && ( ww - wh ) > landscape_threshold;


		// Now check to see if the current window.orientation is 0 or 180.
		initial_orientation_is_default = portrait_map[ window.orientation ];

		// If the initial orientation is landscape, but window.orientation reports 0 or 180, *OR*
		// if the initial orientation is portrait, but window.orientation reports 90 or -90, we
		// need to flip our portrait_map values because landscape is the default orientation for
		// this device/browser.
		if ( ( initial_orientation_is_landscape && initial_orientation_is_default ) || ( !initial_orientation_is_landscape && !initial_orientation_is_default ) ) {
			portrait_map = { "-90": true, "90": true };
		}
	}

	$.event.special.orientationchange = $.extend( {}, $.event.special.orientationchange, {
		setup: function() {
			// If the event is supported natively, return false so that jQuery
			// will bind to the event using DOM methods.
			if ( $.support.orientation && !$.event.special.orientationchange.disabled ) {
				return false;
			}

			// Get the current orientation to avoid initial double-triggering.
			last_orientation = get_orientation();

			// Because the orientationchange event doesn't exist, simulate the
			// event by testing window dimensions on resize.
			win.bind( "throttledresize", handler );
		},
		teardown: function() {
			// If the event is not supported natively, return false so that
			// jQuery will unbind the event using DOM methods.
			if ( $.support.orientation && !$.event.special.orientationchange.disabled ) {
				return false;
			}

			// Because the orientationchange event doesn't exist, unbind the
			// resize event handler.
			win.unbind( "throttledresize", handler );
		},
		add: function( handleObj ) {
			// Save a reference to the bound event handler.
			var old_handler = handleObj.handler;


			handleObj.handler = function( event ) {
				// Modify event object, adding the .orientation property.
				event.orientation = get_orientation();

				// Call the originally-bound event handler and return its result.
				return old_handler.apply( this, arguments );
			};
		}
	});

	// If the event is not supported natively, this handler will be bound to
	// the window resize event to simulate the orientationchange event.
	function handler() {
		// Get the current orientation.
		var orientation = get_orientation();

		if ( orientation !== last_orientation ) {
			// The orientation has changed, so trigger the orientationchange event.
			last_orientation = orientation;
			win.trigger( event_name );
		}
	}

	// Get the current page orientation. This method is exposed publicly, should it
	// be needed, as jQuery.event.special.orientationchange.orientation()
	$.event.special.orientationchange.orientation = get_orientation = function() {
		var isPortrait = true, elem = document.documentElement;

		// prefer window orientation to the calculation based on screensize as
		// the actual screen resize takes place before or after the orientation change event
		// has been fired depending on implementation (eg android 2.3 is before, iphone after).
		// More testing is required to determine if a more reliable method of determining the new screensize
		// is possible when orientationchange is fired. (eg, use media queries + element + opacity)
		if ( $.support.orientation ) {
			// if the window orientation registers as 0 or 180 degrees report
			// portrait, otherwise landscape
			isPortrait = portrait_map[ window.orientation ];
		} else {
			isPortrait = elem && elem.clientWidth / elem.clientHeight < 1.1;
		}

		return isPortrait ? "portrait" : "landscape";
	};

	$.fn[ event_name ] = function( fn ) {
		return fn ? this.bind( event_name, fn ) : this.trigger( event_name );
	};

	// jQuery < 1.8
	if ( $.attrFn ) {
		$.attrFn[ event_name ] = true;
	}

}( jQuery, this ));



(function( $, undefined ) {

$.widget( "mobile.page", $.mobile.widget, {
	options: {
		theme: "c",
		domCache: false,
		keepNativeDefault: ":jqmData(role='none'), :jqmData(role='nojs')"
	},

	_create: function() {
		// if false is returned by the callbacks do not create the page
		if ( this._trigger( "beforecreate" ) === false ) {
			return false;
		}

		this.element
			.attr( "tabindex", "0" )
			.addClass( "ui-page ui-body-" + this.options.theme );

		this._on( this.element, {
			pagebeforehide: "removeContainerBackground",
			pagebeforeshow: "_handlePageBeforeShow"
		});
	},

	_handlePageBeforeShow: function( e ) {
		this.setContainerBackground();
	},

	removeContainerBackground: function() {
		$.mobile.pageContainer.removeClass( "ui-overlay-" + $.mobile.getInheritedTheme( this.element.parent() ) );
	},

	// set the page container background to the page theme
	setContainerBackground: function( theme ) {
		if ( this.options.theme ) {
			$.mobile.pageContainer.addClass( "ui-overlay-" + ( theme || this.options.theme ) );
		}
	},

	keepNativeSelector: function() {
		var options = this.options,
			keepNativeDefined = options.keepNative && $.trim( options.keepNative );

		if ( keepNativeDefined && options.keepNative !== options.keepNativeDefault ) {
			return [options.keepNative, options.keepNativeDefault].join( ", " );
		}

		return options.keepNativeDefault;
	}
});
})( jQuery );

(function( $, window, undefined ) {

var createHandler = function( sequential ) {

	// Default to sequential
	if ( sequential === undefined ) {
		sequential = true;
	}

	return function( name, reverse, $to, $from ) {

		var deferred = new $.Deferred(),
			reverseClass = reverse ? " reverse" : "",
			active	= $.mobile.urlHistory.getActive(),
			toScroll = active.lastScroll || $.mobile.defaultHomeScroll,
			screenHeight = $.mobile.getScreenHeight(),
			maxTransitionOverride = $.mobile.maxTransitionWidth !== false && $.mobile.window.width() > $.mobile.maxTransitionWidth,
			none = !$.support.cssTransitions || maxTransitionOverride || !name || name === "none" || Math.max( $.mobile.window.scrollTop(), toScroll ) > $.mobile.getMaxScrollForTransition(),
			toPreClass = " ui-page-pre-in",
			toggleViewportClass = function() {
				$.mobile.pageContainer.toggleClass( "ui-mobile-viewport-transitioning viewport-" + name );
			},
			scrollPage = function() {
				// By using scrollTo instead of silentScroll, we can keep things better in order
				// Just to be precautios, disable scrollstart listening like silentScroll would
				$.event.special.scrollstart.enabled = false;

				window.scrollTo( 0, toScroll );

				// reenable scrollstart listening like silentScroll would
				setTimeout( function() {
					$.event.special.scrollstart.enabled = true;
				}, 150 );
			},
			cleanFrom = function() {
				$from
					.removeClass( $.mobile.activePageClass + " out in reverse " + name )
					.height( "" );
			},
			startOut = function() {
				// if it's not sequential, call the doneOut transition to start the TO page animating in simultaneously
				if ( !sequential ) {
					doneOut();
				}
				else {
					$from.animationComplete( doneOut );
				}

				// Set the from page's height and start it transitioning out
				// Note: setting an explicit height helps eliminate tiling in the transitions
				$from
					.height( screenHeight + $.mobile.window.scrollTop() )
					.addClass( name + " out" + reverseClass );
			},

			doneOut = function() {

				if ( $from && sequential ) {
					cleanFrom();
				}

				startIn();
			},

			startIn = function() {

				// Prevent flickering in phonegap container: see comments at #4024 regarding iOS
				$to.css( "z-index", -10 );

				$to.addClass( $.mobile.activePageClass + toPreClass );

				// Send focus to page as it is now display: block
				$.mobile.focusPage( $to );

				// Set to page height
				$to.height( screenHeight + toScroll );

				scrollPage();

				// Restores visibility of the new page: added together with $to.css( "z-index", -10 );
				$to.css( "z-index", "" );

				if ( !none ) {
					$to.animationComplete( doneIn );
				}

				$to
					.removeClass( toPreClass )
					.addClass( name + " in" + reverseClass );

				if ( none ) {
					doneIn();
				}

			},

			doneIn = function() {

				if ( !sequential ) {

					if ( $from ) {
						cleanFrom();
					}
				}

				$to
					.removeClass( "out in reverse " + name )
					.height( "" );

				toggleViewportClass();

				// In some browsers (iOS5), 3D transitions block the ability to scroll to the desired location during transition
				// This ensures we jump to that spot after the fact, if we aren't there already.
				if ( $.mobile.window.scrollTop() !== toScroll ) {
					scrollPage();
				}

				deferred.resolve( name, reverse, $to, $from, true );
			};

		toggleViewportClass();

		if ( $from && !none ) {
			startOut();
		}
		else {
			doneOut();
		}

		return deferred.promise();
	};
};

// generate the handlers from the above
var sequentialHandler = createHandler(),
	simultaneousHandler = createHandler( false ),
	defaultGetMaxScrollForTransition = function() {
		return $.mobile.getScreenHeight() * 3;
	};

// Make our transition handler the public default.
$.mobile.defaultTransitionHandler = sequentialHandler;

//transition handler dictionary for 3rd party transitions
$.mobile.transitionHandlers = {
	"default": $.mobile.defaultTransitionHandler,
	"sequential": sequentialHandler,
	"simultaneous": simultaneousHandler
};

$.mobile.transitionFallbacks = {};

// If transition is defined, check if css 3D transforms are supported, and if not, if a fallback is specified
$.mobile._maybeDegradeTransition = function( transition ) {
		if ( transition && !$.support.cssTransform3d && $.mobile.transitionFallbacks[ transition ] ) {
			transition = $.mobile.transitionFallbacks[ transition ];
		}

		return transition;
};

// Set the getMaxScrollForTransition to default if no implementation was set by user
$.mobile.getMaxScrollForTransition = $.mobile.getMaxScrollForTransition || defaultGetMaxScrollForTransition;
})( jQuery, this );

(function( $, undefined ) {

	//define vars for interal use
	var $window = $.mobile.window,
		$html = $( 'html' ),
		$head = $( 'head' ),

		// NOTE: path extensions dependent on core attributes. Moved here to remove deps from
		//       $.mobile.path definition
		path = $.extend($.mobile.path, {

			//return the substring of a filepath before the sub-page key, for making a server request
			getFilePath: function( path ) {
				var splitkey = '&' + $.mobile.subPageUrlKey;
				return path && path.split( splitkey )[0].split( dialogHashKey )[0];
			},

			//check if the specified url refers to the first page in the main application document.
			isFirstPageUrl: function( url ) {
				// We only deal with absolute paths.
				var u = path.parseUrl( path.makeUrlAbsolute( url, this.documentBase ) ),

					// Does the url have the same path as the document?
					samePath = u.hrefNoHash === this.documentUrl.hrefNoHash || ( this.documentBaseDiffers && u.hrefNoHash === this.documentBase.hrefNoHash ),

					// Get the first page element.
					fp = $.mobile.firstPage,

					// Get the id of the first page element if it has one.
					fpId = fp && fp[0] ? fp[0].id : undefined;

				// The url refers to the first page if the path matches the document and
				// it either has no hash value, or the hash is exactly equal to the id of the
				// first page element.
				return samePath && ( !u.hash || u.hash === "#" || ( fpId && u.hash.replace( /^#/, "" ) === fpId ) );
			},

			// Some embedded browsers, like the web view in Phone Gap, allow cross-domain XHR
			// requests if the document doing the request was loaded via the file:// protocol.
			// This is usually to allow the application to "phone home" and fetch app specific
			// data. We normally let the browser handle external/cross-domain urls, but if the
			// allowCrossDomainPages option is true, we will allow cross-domain http/https
			// requests to go through our page loading logic.
			isPermittedCrossDomainRequest: function( docUrl, reqUrl ) {
				return $.mobile.allowCrossDomainPages &&
					docUrl.protocol === "file:" &&
					reqUrl.search( /^https?:/ ) !== -1;
			}
		}),

		// used to track last vclicked element to make sure its value is added to form data
		$lastVClicked = null,

		//will be defined when a link is clicked and given an active class
		$activeClickedLink = null,

		// resolved on domready
		domreadyDeferred = $.Deferred(),

		//urlHistory is purely here to make guesses at whether the back or forward button was clicked
		//and provide an appropriate transition
		urlHistory = $.mobile.navigate.history,

		//define first selector to receive focus when a page is shown
		focusable = "[tabindex],a,button:visible,select:visible,input",

		//queue to hold simultanious page transitions
		pageTransitionQueue = [],

		//indicates whether or not page is in process of transitioning
		isPageTransitioning = false,

		//nonsense hash change key for dialogs, so they create a history entry
		dialogHashKey = "&ui-state=dialog",

		//existing base tag?
		$base = $head.children( "base" ),

		//tuck away the original document URL minus any fragment.
		documentUrl = path.documentUrl,

		//if the document has an embedded base tag, documentBase is set to its
		//initial value. If a base tag does not exist, then we default to the documentUrl.
		documentBase = path.documentBase,

		//cache the comparison once.
		documentBaseDiffers = path.documentBaseDiffers,

		getScreenHeight = $.mobile.getScreenHeight;

		//base element management, defined depending on dynamic base tag support
		var base = $.support.dynamicBaseTag ? {

			//define base element, for use in routing asset urls that are referenced in Ajax-requested markup
			element: ( $base.length ? $base : $( "<base>", { href: documentBase.hrefNoHash } ).prependTo( $head ) ),

			//set the generated BASE element's href attribute to a new page's base path
			set: function( href ) {
				href = path.parseUrl(href).hrefNoHash;
				base.element.attr( "href", path.makeUrlAbsolute( href, documentBase ) );
			},

			//set the generated BASE element's href attribute to a new page's base path
			reset: function() {
				base.element.attr( "href", documentBase.hrefNoSearch );
			}

		} : undefined;


	//return the original document url
	$.mobile.getDocumentUrl = path.getDocumentUrl;

	//return the original document base url
	$.mobile.getDocumentBase = path.getDocumentBase;

	/* internal utility functions */

	// NOTE Issue #4950 Android phonegap doesn't navigate back properly
	//      when a full page refresh has taken place. It appears that hashchange
	//      and replacestate history alterations work fine but we need to support
	//      both forms of history traversal in our code that uses backward history
	//      movement
	$.mobile.back = function() {
		var nav = window.navigator;

		// if the setting is on and the navigator object is
		// available use the phonegap navigation capability
		if( this.phonegapNavigationEnabled &&
			nav &&
			nav.app &&
			nav.app.backHistory ){
			nav.app.backHistory();
		} else {
			window.history.back();
		}
	};

	//direct focus to the page title, or otherwise first focusable element
	$.mobile.focusPage = function ( page ) {
		var autofocus = page.find( "[autofocus]" ),
			pageTitle = page.find( ".ui-title:eq(0)" );

		if ( autofocus.length ) {
			autofocus.focus();
			return;
		}

		if ( pageTitle.length ) {
			pageTitle.focus();
		} else{
			page.focus();
		}
	};

	//remove active classes after page transition or error
	function removeActiveLinkClass( forceRemoval ) {
		if ( !!$activeClickedLink && ( !$activeClickedLink.closest( "." + $.mobile.activePageClass ).length || forceRemoval ) ) {
			$activeClickedLink.removeClass( $.mobile.activeBtnClass );
		}
		$activeClickedLink = null;
	}

	function releasePageTransitionLock() {
		isPageTransitioning = false;
		if ( pageTransitionQueue.length > 0 ) {
			$.mobile.changePage.apply( null, pageTransitionQueue.pop() );
		}
	}

	// Save the last scroll distance per page, before it is hidden
	var setLastScrollEnabled = true,
		setLastScroll, delayedSetLastScroll;

	setLastScroll = function() {
		// this barrier prevents setting the scroll value based on the browser
		// scrolling the window based on a hashchange
		if ( !setLastScrollEnabled ) {
			return;
		}

		var active = $.mobile.urlHistory.getActive();

		if ( active ) {
			var lastScroll = $window.scrollTop();

			// Set active page's lastScroll prop.
			// If the location we're scrolling to is less than minScrollBack, let it go.
			active.lastScroll = lastScroll < $.mobile.minScrollBack ? $.mobile.defaultHomeScroll : lastScroll;
		}
	};

	// bind to scrollstop to gather scroll position. The delay allows for the hashchange
	// event to fire and disable scroll recording in the case where the browser scrolls
	// to the hash targets location (sometimes the top of the page). once pagechange fires
	// getLastScroll is again permitted to operate
	delayedSetLastScroll = function() {
		setTimeout( setLastScroll, 100 );
	};

	// disable an scroll setting when a hashchange has been fired, this only works
	// because the recording of the scroll position is delayed for 100ms after
	// the browser might have changed the position because of the hashchange
	$window.bind( $.support.pushState ? "popstate" : "hashchange", function() {
		setLastScrollEnabled = false;
	});

	// handle initial hashchange from chrome :(
	$window.one( $.support.pushState ? "popstate" : "hashchange", function() {
		setLastScrollEnabled = true;
	});

	// wait until the mobile page container has been determined to bind to pagechange
	$window.one( "pagecontainercreate", function() {
		// once the page has changed, re-enable the scroll recording
		$.mobile.pageContainer.bind( "pagechange", function() {

			setLastScrollEnabled = true;

			// remove any binding that previously existed on the get scroll
			// which may or may not be different than the scroll element determined for
			// this page previously
			$window.unbind( "scrollstop", delayedSetLastScroll );

			// determine and bind to the current scoll element which may be the window
			// or in the case of touch overflow the element with touch overflow
			$window.bind( "scrollstop", delayedSetLastScroll );
		});
	});

	// bind to scrollstop for the first page as "pagechange" won't be fired in that case
	$window.bind( "scrollstop", delayedSetLastScroll );

	// No-op implementation of transition degradation
	$.mobile._maybeDegradeTransition = $.mobile._maybeDegradeTransition || function( transition ) {
		return transition;
	};

	//function for transitioning between two existing pages
	function transitionPages( toPage, fromPage, transition, reverse ) {
		if ( fromPage ) {
			//trigger before show/hide events
			fromPage.data( "mobile-page" )._trigger( "beforehide", null, { nextPage: toPage } );
		}

		toPage.data( "mobile-page" )._trigger( "beforeshow", null, { prevPage: fromPage || $( "" ) } );

		//clear page loader
		$.mobile.hidePageLoadingMsg();

		transition = $.mobile._maybeDegradeTransition( transition );

		//find the transition handler for the specified transition. If there
		//isn't one in our transitionHandlers dictionary, use the default one.
		//call the handler immediately to kick-off the transition.
		var th = $.mobile.transitionHandlers[ transition || "default" ] || $.mobile.defaultTransitionHandler,
			promise = th( transition, reverse, toPage, fromPage );

		promise.done(function() {
			//trigger show/hide events
			if ( fromPage ) {
				fromPage.data( "mobile-page" )._trigger( "hide", null, { nextPage: toPage } );
			}

			//trigger pageshow, define prevPage as either fromPage or empty jQuery obj
			toPage.data( "mobile-page" )._trigger( "show", null, { prevPage: fromPage || $( "" ) } );
		});

		return promise;
	}

	//simply set the active page's minimum height to screen height, depending on orientation
	$.mobile.resetActivePageHeight = function resetActivePageHeight( height ) {
		var aPage = $( "." + $.mobile.activePageClass ),
			aPagePadT = parseFloat( aPage.css( "padding-top" ) ),
			aPagePadB = parseFloat( aPage.css( "padding-bottom" ) ),
			aPageBorderT = parseFloat( aPage.css( "border-top-width" ) ),
			aPageBorderB = parseFloat( aPage.css( "border-bottom-width" ) );

		height = ( typeof height === "number" )? height : getScreenHeight();
		
		aPage.css( "min-height", height - aPagePadT - aPagePadB - aPageBorderT - aPageBorderB );
	};

	//shared page enhancements
	function enhancePage( $page, role ) {
		// If a role was specified, make sure the data-role attribute
		// on the page element is in sync.
		if ( role ) {
			$page.attr( "data-" + $.mobile.ns + "role", role );
		}

		//run page plugin
		$page.page();
	}

	// determine the current base url
	function findBaseWithDefault() {
		var closestBase = ( $.mobile.activePage && getClosestBaseUrl( $.mobile.activePage ) );
		return closestBase || documentBase.hrefNoHash;
	}

	/* exposed $.mobile methods */

	//animation complete callback
	$.fn.animationComplete = function( callback ) {
		if ( $.support.cssTransitions ) {
			return $( this ).one( 'webkitAnimationEnd animationend', callback );
		}
		else{
			// defer execution for consistency between webkit/non webkit
			setTimeout( callback, 0 );
			return $( this );
		}
	};

	//expose path object on $.mobile
	$.mobile.path = path;

	//expose base object on $.mobile
	$.mobile.base = base;

	//history stack
	$.mobile.urlHistory = urlHistory;

	$.mobile.dialogHashKey = dialogHashKey;

	//enable cross-domain page support
	$.mobile.allowCrossDomainPages = false;

	$.mobile._bindPageRemove = function() {
		var page = $( this );

		// when dom caching is not enabled or the page is embedded bind to remove the page on hide
		if ( !page.data( "mobile-page" ).options.domCache &&
			page.is( ":jqmData(external-page='true')" ) ) {

			page.bind( 'pagehide.remove', function( e ) {
				var $this = $( this ),
					prEvent = new $.Event( "pageremove" );

				$this.trigger( prEvent );

				if ( !prEvent.isDefaultPrevented() ) {
					$this.removeWithDependents();
				}
			});
		}
	};

	// Load a page into the DOM.
	$.mobile.loadPage = function( url, options ) {
		// This function uses deferred notifications to let callers
		// know when the page is done loading, or if an error has occurred.
		var deferred = $.Deferred(),

			// The default loadPage options with overrides specified by
			// the caller.
			settings = $.extend( {}, $.mobile.loadPage.defaults, options ),

			// The DOM element for the page after it has been loaded.
			page = null,

			// If the reloadPage option is true, and the page is already
			// in the DOM, dupCachedPage will be set to the page element
			// so that it can be removed after the new version of the
			// page is loaded off the network.
			dupCachedPage = null,

			// The absolute version of the URL passed into the function. This
			// version of the URL may contain dialog/subpage params in it.
			absUrl = path.makeUrlAbsolute( url, findBaseWithDefault() );

		// If the caller provided data, and we're using "get" request,
		// append the data to the URL.
		if ( settings.data && settings.type === "get" ) {
			absUrl = path.addSearchParams( absUrl, settings.data );
			settings.data = undefined;
		}

		// If the caller is using a "post" request, reloadPage must be true
		if ( settings.data && settings.type === "post" ) {
			settings.reloadPage = true;
		}

		// The absolute version of the URL minus any dialog/subpage params.
		// In otherwords the real URL of the page to be loaded.
		var fileUrl = path.getFilePath( absUrl ),

			// The version of the Url actually stored in the data-url attribute of
			// the page. For embedded pages, it is just the id of the page. For pages
			// within the same domain as the document base, it is the site relative
			// path. For cross-domain pages (Phone Gap only) the entire absolute Url
			// used to load the page.
			dataUrl = path.convertUrlToDataUrl( absUrl );

		// Make sure we have a pageContainer to work with.
		settings.pageContainer = settings.pageContainer || $.mobile.pageContainer;

		// Check to see if the page already exists in the DOM.
		// NOTE do _not_ use the :jqmData psuedo selector because parenthesis
		//      are a valid url char and it breaks on the first occurence
		page = settings.pageContainer.children( "[data-" + $.mobile.ns +"url='" + dataUrl + "']" );

		// If we failed to find the page, check to see if the url is a
		// reference to an embedded page. If so, it may have been dynamically
		// injected by a developer, in which case it would be lacking a data-url
		// attribute and in need of enhancement.
		if ( page.length === 0 && dataUrl && !path.isPath( dataUrl ) ) {
			page = settings.pageContainer.children( "#" + dataUrl )
				.attr( "data-" + $.mobile.ns + "url", dataUrl )
				.jqmData( "url", dataUrl );
		}

		
		// If we failed to find a page in the DOM, check the URL to see if it
		// refers to the first page in the application. If it isn't a reference
		// to the first page and refers to non-existent embedded page, error out.
		if ( page.length === 0 ) {
			if ( $.mobile.firstPage && path.isFirstPageUrl( fileUrl ) ) {
				// Check to make sure our cached-first-page is actually
				// in the DOM. Some user deployed apps are pruning the first
				// page from the DOM for various reasons, we check for this
				// case here because we don't want a first-page with an id
				// falling through to the non-existent embedded page error
				// case. If the first-page is not in the DOM, then we let
				// things fall through to the ajax loading code below so
				// that it gets reloaded.
				if ( $.mobile.firstPage.parent().length ) {
					page = $( $.mobile.firstPage );
				}
			} else if ( path.isEmbeddedPage( fileUrl )  ) {
				deferred.reject( absUrl, options );
				return deferred.promise();
			}
		}
		
		// If the page we are interested in is already in the DOM,
		// and the caller did not indicate that we should force a
		// reload of the file, we are done. Otherwise, track the
		// existing page as a duplicated.
		if ( page.length ) {
			if ( !settings.reloadPage ) {
				enhancePage( page, settings.role );
				deferred.resolve( absUrl, options, page );
				//if we are reloading the page make sure we update the base if its not a prefetch 
				if( base && !options.prefetch ){
					base.set(url);
				}
				return deferred.promise();
			}
			dupCachedPage = page;
		}
		var mpc = settings.pageContainer,
			pblEvent = new $.Event( "pagebeforeload" ),
			triggerData = { url: url, absUrl: absUrl, dataUrl: dataUrl, deferred: deferred, options: settings };

		// Let listeners know we're about to load a page.
		mpc.trigger( pblEvent, triggerData );

		// If the default behavior is prevented, stop here!
		if ( pblEvent.isDefaultPrevented() ) {
			return deferred.promise();
		}

		if ( settings.showLoadMsg ) {

			// This configurable timeout allows cached pages a brief delay to load without showing a message
			var loadMsgDelay = setTimeout(function() {
					$.mobile.showPageLoadingMsg();
				}, settings.loadMsgDelay ),

				// Shared logic for clearing timeout and removing message.
				hideMsg = function() {

					// Stop message show timer
					clearTimeout( loadMsgDelay );

					// Hide loading message
					$.mobile.hidePageLoadingMsg();
				};
		}
		// Reset base to the default document base.
		// only reset if we are not prefetching 
		if ( base && typeof options.prefetch === "undefined" ) {
			base.reset();
		}

		if ( !( $.mobile.allowCrossDomainPages || path.isSameDomain( documentUrl, absUrl ) ) ) {
			deferred.reject( absUrl, options );
		} else {
			// Load the new page.
			$.ajax({
				url: fileUrl,
				type: settings.type,
				data: settings.data,
				contentType: settings.contentType,
				dataType: "html",
				success: function( html, textStatus, xhr ) {
					//pre-parse html to check for a data-url,
					//use it as the new fileUrl, base path, etc
					var all = $( "<div></div>" ),

						//page title regexp
						newPageTitle = html.match( /<title[^>]*>([^<]*)/ ) && RegExp.$1,

						// TODO handle dialogs again
						pageElemRegex = new RegExp( "(<[^>]+\\bdata-" + $.mobile.ns + "role=[\"']?page[\"']?[^>]*>)" ),
						dataUrlRegex = new RegExp( "\\bdata-" + $.mobile.ns + "url=[\"']?([^\"'>]*)[\"']?" );


					// data-url must be provided for the base tag so resource requests can be directed to the
					// correct url. loading into a temprorary element makes these requests immediately
					if ( pageElemRegex.test( html ) &&
							RegExp.$1 &&
							dataUrlRegex.test( RegExp.$1 ) &&
							RegExp.$1 ) {
						url = fileUrl = path.getFilePath( $( "<div>" + RegExp.$1 + "</div>" ).text() );
					}
					//dont update the base tag if we are prefetching
					if ( base && typeof options.prefetch === "undefined") {
						base.set( fileUrl );
					}

					//workaround to allow scripts to execute when included in page divs
					all.get( 0 ).innerHTML = html;
					page = all.find( ":jqmData(role='page'), :jqmData(role='dialog')" ).first();

					//if page elem couldn't be found, create one and insert the body element's contents
					if ( !page.length ) {
						page = $( "<div data-" + $.mobile.ns + "role='page'>" + ( html.split( /<\/?body[^>]*>/gmi )[1] || "" ) + "</div>" );
					}

					if ( newPageTitle && !page.jqmData( "title" ) ) {
						if ( ~newPageTitle.indexOf( "&" ) ) {
							newPageTitle = $( "<div>" + newPageTitle + "</div>" ).text();
						}
						page.jqmData( "title", newPageTitle );
					}

					//rewrite src and href attrs to use a base url
					if ( !$.support.dynamicBaseTag ) {
						var newPath = path.get( fileUrl );
						page.find( "[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]" ).each(function() {
							var thisAttr = $( this ).is( '[href]' ) ? 'href' :
									$( this ).is( '[src]' ) ? 'src' : 'action',
								thisUrl = $( this ).attr( thisAttr );

							// XXX_jblas: We need to fix this so that it removes the document
							//            base URL, and then prepends with the new page URL.
							//if full path exists and is same, chop it - helps IE out
							thisUrl = thisUrl.replace( location.protocol + '//' + location.host + location.pathname, '' );

							if ( !/^(\w+:|#|\/)/.test( thisUrl ) ) {
								$( this ).attr( thisAttr, newPath + thisUrl );
							}
						});
					}

					//append to page and enhance
					// TODO taging a page with external to make sure that embedded pages aren't removed
					//      by the various page handling code is bad. Having page handling code in many
					//      places is bad. Solutions post 1.0
					page
						.attr( "data-" + $.mobile.ns + "url", path.convertUrlToDataUrl( fileUrl ) )
						.attr( "data-" + $.mobile.ns + "external-page", true )
						.appendTo( settings.pageContainer );

					// wait for page creation to leverage options defined on widget
					page.one( 'pagecreate', $.mobile._bindPageRemove );

					enhancePage( page, settings.role );

					// Enhancing the page may result in new dialogs/sub pages being inserted
					// into the DOM. If the original absUrl refers to a sub-page, that is the
					// real page we are interested in.
					if ( absUrl.indexOf( "&" + $.mobile.subPageUrlKey ) > -1 ) {
						page = settings.pageContainer.children( "[data-" + $.mobile.ns +"url='" + dataUrl + "']" );
					}

					// Remove loading message.
					if ( settings.showLoadMsg ) {
						hideMsg();
					}

					// Add the page reference and xhr to our triggerData.
					triggerData.xhr = xhr;
					triggerData.textStatus = textStatus;
					triggerData.page = page;

					// Let listeners know the page loaded successfully.
					settings.pageContainer.trigger( "pageload", triggerData );

					deferred.resolve( absUrl, options, page, dupCachedPage );
				},
				error: function( xhr, textStatus, errorThrown ) {
					//set base back to current path
					if ( base ) {
						base.set( path.get() );
					}

					// Add error info to our triggerData.
					triggerData.xhr = xhr;
					triggerData.textStatus = textStatus;
					triggerData.errorThrown = errorThrown;

					var plfEvent = new $.Event( "pageloadfailed" );

					// Let listeners know the page load failed.
					settings.pageContainer.trigger( plfEvent, triggerData );

					// If the default behavior is prevented, stop here!
					// Note that it is the responsibility of the listener/handler
					// that called preventDefault(), to resolve/reject the
					// deferred object within the triggerData.
					if ( plfEvent.isDefaultPrevented() ) {
						return;
					}

					// Remove loading message.
					if ( settings.showLoadMsg ) {

						// Remove loading message.
						hideMsg();

						// show error message
						$.mobile.showPageLoadingMsg( $.mobile.pageLoadErrorMessageTheme, $.mobile.pageLoadErrorMessage, true );

						// hide after delay
						setTimeout( $.mobile.hidePageLoadingMsg, 1500 );
					}

					deferred.reject( absUrl, options );
				}
			});
		}

		return deferred.promise();
	};

	$.mobile.loadPage.defaults = {
		type: "get",
		data: undefined,
		reloadPage: false,
		role: undefined, // By default we rely on the role defined by the @data-role attribute.
		showLoadMsg: false,
		pageContainer: undefined,
		loadMsgDelay: 50 // This delay allows loads that pull from browser cache to occur without showing the loading message.
	};

	// Show a specific page in the page container.
	$.mobile.changePage = function( toPage, options ) {
		// If we are in the midst of a transition, queue the current request.
		// We'll call changePage() once we're done with the current transition to
		// service the request.
		if ( isPageTransitioning ) {
			pageTransitionQueue.unshift( arguments );
			return;
		}

		var settings = $.extend( {}, $.mobile.changePage.defaults, options ), isToPageString;

		// Make sure we have a pageContainer to work with.
		settings.pageContainer = settings.pageContainer || $.mobile.pageContainer;

		// Make sure we have a fromPage.
		settings.fromPage = settings.fromPage || $.mobile.activePage;

		isToPageString = (typeof toPage === "string");

		var mpc = settings.pageContainer,
			pbcEvent = new $.Event( "pagebeforechange" ),
			triggerData = { toPage: toPage, options: settings };

		// NOTE: preserve the original target as the dataUrl value will be simplified
		//       eg, removing ui-state, and removing query params from the hash
		//       this is so that users who want to use query params have access to them
		//       in the event bindings for the page life cycle See issue #5085
		if ( isToPageString ) {
			// if the toPage is a string simply convert it
			triggerData.absUrl = path.makeUrlAbsolute( toPage, findBaseWithDefault() );
		} else {
			// if the toPage is a jQuery object grab the absolute url stored
			// in the loadPage callback where it exists
			triggerData.absUrl = toPage.data( 'absUrl' );
		}

		// Let listeners know we're about to change the current page.
		mpc.trigger( pbcEvent, triggerData );

		// If the default behavior is prevented, stop here!
		if ( pbcEvent.isDefaultPrevented() ) {
			return;
		}

		// We allow "pagebeforechange" observers to modify the toPage in the trigger
		// data to allow for redirects. Make sure our toPage is updated.
		//
		// We also need to re-evaluate whether it is a string, because an object can
		// also be replaced by a string

		toPage = triggerData.toPage;
		isToPageString = (typeof toPage === "string");

		// Set the isPageTransitioning flag to prevent any requests from
		// entering this method while we are in the midst of loading a page
		// or transitioning.
		isPageTransitioning = true;

		// If the caller passed us a url, call loadPage()
		// to make sure it is loaded into the DOM. We'll listen
		// to the promise object it returns so we know when
		// it is done loading or if an error ocurred.
		if ( isToPageString ) {
			// preserve the original target as the dataUrl value will be simplified
			// eg, removing ui-state, and removing query params from the hash
			// this is so that users who want to use query params have access to them
			// in the event bindings for the page life cycle See issue #5085
			settings.target = toPage;

			$.mobile.loadPage( toPage, settings )
				.done(function( url, options, newPage, dupCachedPage ) {
					isPageTransitioning = false;
					options.duplicateCachedPage = dupCachedPage;

					// store the original absolute url so that it can be provided
					// to events in the triggerData of the subsequent changePage call
					newPage.data( 'absUrl', triggerData.absUrl );
					$.mobile.changePage( newPage, options );
				})
				.fail(function( url, options ) {

					//clear out the active button state
					removeActiveLinkClass( true );

					//release transition lock so navigation is free again
					releasePageTransitionLock();
					settings.pageContainer.trigger( "pagechangefailed", triggerData );
				});
			return;
		}

		// If we are going to the first-page of the application, we need to make
		// sure settings.dataUrl is set to the application document url. This allows
		// us to avoid generating a document url with an id hash in the case where the
		// first-page of the document has an id attribute specified.
		if ( toPage[ 0 ] === $.mobile.firstPage[ 0 ] && !settings.dataUrl ) {
			settings.dataUrl = documentUrl.hrefNoHash;
		}

		// The caller passed us a real page DOM element. Update our
		// internal state and then trigger a transition to the page.
		var fromPage = settings.fromPage,
			url = ( settings.dataUrl && path.convertUrlToDataUrl( settings.dataUrl ) ) || toPage.jqmData( "url" ),
			// The pageUrl var is usually the same as url, except when url is obscured as a dialog url. pageUrl always contains the file path
			pageUrl = url,
			fileUrl = path.getFilePath( url ),
			active = urlHistory.getActive(),
			activeIsInitialPage = urlHistory.activeIndex === 0,
			historyDir = 0,
			pageTitle = document.title,
			isDialog = settings.role === "dialog" || toPage.jqmData( "role" ) === "dialog";


		// By default, we prevent changePage requests when the fromPage and toPage
		// are the same element, but folks that generate content manually/dynamically
		// and reuse pages want to be able to transition to the same page. To allow
		// this, they will need to change the default value of allowSamePageTransition
		// to true, *OR*, pass it in as an option when they manually call changePage().
		// It should be noted that our default transition animations assume that the
		// formPage and toPage are different elements, so they may behave unexpectedly.
		// It is up to the developer that turns on the allowSamePageTransitiona option
		// to either turn off transition animations, or make sure that an appropriate
		// animation transition is used.
		if ( fromPage && fromPage[0] === toPage[0] && !settings.allowSamePageTransition ) {
			isPageTransitioning = false;
			mpc.trigger( "pagechange", triggerData );

			// Even if there is no page change to be done, we should keep the urlHistory in sync with the hash changes
			if ( settings.fromHashChange ) {
				urlHistory.direct({ url: url });
			}

			return;
		}

		// We need to make sure the page we are given has already been enhanced.
		enhancePage( toPage, settings.role );

		// If the changePage request was sent from a hashChange event, check to see if the
		// page is already within the urlHistory stack. If so, we'll assume the user hit
		// the forward/back button and will try to match the transition accordingly.
		if ( settings.fromHashChange ) {
			historyDir = options.direction === "back" ? -1 : 1;
		}

		// Kill the keyboard.
		// XXX_jblas: We need to stop crawling the entire document to kill focus. Instead,
		//            we should be tracking focus with a delegate() handler so we already have
		//            the element in hand at this point.
		// Wrap this in a try/catch block since IE9 throw "Unspecified error" if document.activeElement
		// is undefined when we are in an IFrame.
		try {
			if ( document.activeElement && document.activeElement.nodeName.toLowerCase() !== 'body' ) {
				$( document.activeElement ).blur();
			} else {
				$( "input:focus, textarea:focus, select:focus" ).blur();
			}
		} catch( e ) {}

		// Record whether we are at a place in history where a dialog used to be - if so, do not add a new history entry and do not change the hash either
		var alreadyThere = false;

		// If we're displaying the page as a dialog, we don't want the url
		// for the dialog content to be used in the hash. Instead, we want
		// to append the dialogHashKey to the url of the current page.
		if ( isDialog && active ) {
			// on the initial page load active.url is undefined and in that case should
			// be an empty string. Moving the undefined -> empty string back into
			// urlHistory.addNew seemed imprudent given undefined better represents
			// the url state

			// If we are at a place in history that once belonged to a dialog, reuse
			// this state without adding to urlHistory and without modifying the hash.
			// However, if a dialog is already displayed at this point, and we're
			// about to display another dialog, then we must add another hash and
			// history entry on top so that one may navigate back to the original dialog
			if ( active.url &&
				active.url.indexOf( dialogHashKey ) > -1 &&
				$.mobile.activePage &&
				!$.mobile.activePage.is( ".ui-dialog" ) &&
				urlHistory.activeIndex > 0 ) {
				settings.changeHash = false;
				alreadyThere = true;
			}

			// Normally, we tack on a dialog hash key, but if this is the location of a stale dialog,
			// we reuse the URL from the entry
			url = ( active.url || "" );

			// account for absolute urls instead of just relative urls use as hashes
			if( !alreadyThere && url.indexOf("#") > -1 ) {
				url += dialogHashKey;
			} else {
				url += "#" + dialogHashKey;
			}

			// tack on another dialogHashKey if this is the same as the initial hash
			// this makes sure that a history entry is created for this dialog
			if ( urlHistory.activeIndex === 0 && url === urlHistory.initialDst ) {
				url += dialogHashKey;
			}
		}

		// if title element wasn't found, try the page div data attr too
		// If this is a deep-link or a reload ( active === undefined ) then just use pageTitle
		var newPageTitle = ( !active )? pageTitle : toPage.jqmData( "title" ) || toPage.children( ":jqmData(role='header')" ).find( ".ui-title" ).text();
		if ( !!newPageTitle && pageTitle === document.title ) {
			pageTitle = newPageTitle;
		}
		if ( !toPage.jqmData( "title" ) ) {
			toPage.jqmData( "title", pageTitle );
		}

		// Make sure we have a transition defined.
		settings.transition = settings.transition ||
			( ( historyDir && !activeIsInitialPage ) ? active.transition : undefined ) ||
			( isDialog ? $.mobile.defaultDialogTransition : $.mobile.defaultPageTransition );

		//add page to history stack if it's not back or forward
		if ( !historyDir && alreadyThere ) {
			urlHistory.getActive().pageUrl = pageUrl;
		}

		// Set the location hash.
		if ( url && !settings.fromHashChange ) {
			var params;

			// rebuilding the hash here since we loose it earlier on
			// TODO preserve the originally passed in path
			if( !path.isPath( url ) && url.indexOf( "#" ) < 0 ) {
				url = "#" + url;
			}

			// TODO the property names here are just silly
			params = {
				transition: settings.transition,
				title: pageTitle,
				pageUrl: pageUrl,
				role: settings.role
			};

			if ( settings.changeHash !== false && $.mobile.hashListeningEnabled ) {
				$.mobile.navigate( url, params, true);
			} else if ( toPage[ 0 ] !== $.mobile.firstPage[ 0 ] ) {
				$.mobile.navigate.history.add( url, params );
			}
		}

		//set page title
		document.title = pageTitle;

		//set "toPage" as activePage
		$.mobile.activePage = toPage;

		// If we're navigating back in the URL history, set reverse accordingly.
		settings.reverse = settings.reverse || historyDir < 0;

		transitionPages( toPage, fromPage, settings.transition, settings.reverse )
			.done(function( name, reverse, $to, $from, alreadyFocused ) {
				removeActiveLinkClass();

				//if there's a duplicateCachedPage, remove it from the DOM now that it's hidden
				if ( settings.duplicateCachedPage ) {
					settings.duplicateCachedPage.remove();
				}

				// Send focus to the newly shown page. Moved from promise .done binding in transitionPages
				// itself to avoid ie bug that reports offsetWidth as > 0 (core check for visibility)
				// despite visibility: hidden addresses issue #2965
				// https://github.com/jquery/jquery-mobile/issues/2965
				if ( !alreadyFocused ) {
					$.mobile.focusPage( toPage );
				}

				releasePageTransitionLock();
				mpc.trigger( "pagechange", triggerData );
			});
	};

	$.mobile.changePage.defaults = {
		transition: undefined,
		reverse: false,
		changeHash: true,
		fromHashChange: false,
		role: undefined, // By default we rely on the role defined by the @data-role attribute.
		duplicateCachedPage: undefined,
		pageContainer: undefined,
		showLoadMsg: true, //loading message shows by default when pages are being fetched during changePage
		dataUrl: undefined,
		fromPage: undefined,
		allowSamePageTransition: false
	};

/* Event Bindings - hashchange, submit, and click */
	function findClosestLink( ele )
	{
		while ( ele ) {
			// Look for the closest element with a nodeName of "a".
			// Note that we are checking if we have a valid nodeName
			// before attempting to access it. This is because the
			// node we get called with could have originated from within
			// an embedded SVG document where some symbol instance elements
			// don't have nodeName defined on them, or strings are of type
			// SVGAnimatedString.
			if ( ( typeof ele.nodeName === "string" ) && ele.nodeName.toLowerCase() === "a" ) {
				break;
			}
			ele = ele.parentNode;
		}
		return ele;
	}

	// The base URL for any given element depends on the page it resides in.
	function getClosestBaseUrl( ele )
	{
		// Find the closest page and extract out its url.
		var url = $( ele ).closest( ".ui-page" ).jqmData( "url" ),
			base = documentBase.hrefNoHash;

		if ( !url || !path.isPath( url ) ) {
			url = base;
		}

		return path.makeUrlAbsolute( url, base);
	}

	//The following event bindings should be bound after mobileinit has been triggered
	//the following deferred is resolved in the init file
	$.mobile.navreadyDeferred = $.Deferred();
	$.mobile._registerInternalEvents = function() {
		var getAjaxFormData = function( $form, calculateOnly ) {
			var url, ret = true, formData, vclickedName, method;
			
			if ( !$.mobile.ajaxEnabled ||
					// test that the form is, itself, ajax false
					$form.is( ":jqmData(ajax='false')" ) ||
					// test that $.mobile.ignoreContentEnabled is set and
					// the form or one of it's parents is ajax=false
					!$form.jqmHijackable().length ||
					$form.attr( "target" ) ) {
				return false;
			}

			url = $form.attr( "action" );
			method = ( $form.attr( "method" ) || "get" ).toLowerCase();

			// If no action is specified, browsers default to using the
			// URL of the document containing the form. Since we dynamically
			// pull in pages from external documents, the form should submit
			// to the URL for the source document of the page containing
			// the form.
			if ( !url ) {
				// Get the @data-url for the page containing the form.
				url = getClosestBaseUrl( $form );

				// NOTE: If the method is "get", we need to strip off the query string
				// because it will get replaced with the new form data. See issue #5710.
				if ( method === "get" ) {
					url = path.parseUrl( url ).hrefNoSearch;
				}

				if ( url === documentBase.hrefNoHash ) {
					// The url we got back matches the document base,
					// which means the page must be an internal/embedded page,
					// so default to using the actual document url as a browser
					// would.
					url = documentUrl.hrefNoSearch;
				}
			}

			url = path.makeUrlAbsolute(  url, getClosestBaseUrl( $form ) );

			if ( ( path.isExternal( url ) && !path.isPermittedCrossDomainRequest( documentUrl, url ) ) ) {
				return false;
			}

			if ( !calculateOnly ) {
				formData = $form.serializeArray();

				if ( $lastVClicked && $lastVClicked[ 0 ].form === $form[ 0 ] ) {
					vclickedName = $lastVClicked.attr( "name" );
					if ( vclickedName ) {
						// Make sure the last clicked element is included in the form
						$.each( formData, function( key, value ) {
							if ( value.name === vclickedName ) {
								// Unset vclickedName - we've found it in the serialized data already
								vclickedName = "";
								return false;
							}
						});
						if ( vclickedName ) {
							formData.push( { name: vclickedName, value: $lastVClicked.attr( "value" ) } );
						}
					}
				}

				ret = {
					url: url,
					options: {
						type:		method,
						data:		$.param( formData ),
						transition:	$form.jqmData( "transition" ),
						reverse:	$form.jqmData( "direction" ) === "reverse",
						reloadPage:	true
					}
				};
			}

			return ret;
		};

		//bind to form submit events, handle with Ajax
		$.mobile.document.delegate( "form", "submit", function( event ) {
			var formData = getAjaxFormData( $( this ) );

			if ( formData ) {
				$.mobile.changePage( formData.url, formData.options );
				event.preventDefault();
			}
		});

		//add active state on vclick
		$.mobile.document.bind( "vclick", function( event ) {
			var $btn, btnEls, target = event.target, needClosest = false;
			// if this isn't a left click we don't care. Its important to note
			// that when the virtual event is generated it will create the which attr
			if ( event.which > 1 || !$.mobile.linkBindingEnabled ) {
				return;
			}

			// Record that this element was clicked, in case we need it for correct
			// form submission during the "submit" handler above
			$lastVClicked = $( target );

			// Try to find a target element to which the active class will be applied
			if ( $.data( target, "mobile-button" ) ) {
				// If the form will not be submitted via AJAX, do not add active class
				if ( !getAjaxFormData( $( target ).closest( "form" ), true ) ) {
					return;
				}
				// We will apply the active state to this button widget - the parent
				// of the input that was clicked will have the associated data
				if ( target.parentNode ) {
					target = target.parentNode;
				}
			} else {
				target = findClosestLink( target );
				if ( !( target && path.parseUrl( target.getAttribute( "href" ) || "#" ).hash !== "#" ) ) {
					return;
				}

				// TODO teach $.mobile.hijackable to operate on raw dom elements so the
				// link wrapping can be avoided
				if ( !$( target ).jqmHijackable().length ) {
					return;
				}
			}

			// Avoid calling .closest by using the data set during .buttonMarkup()
			// List items have the button data in the parent of the element clicked
			if ( !!~target.className.indexOf( "ui-link-inherit" ) ) {
				if ( target.parentNode ) {
					btnEls = $.data( target.parentNode, "buttonElements" );
				}
			// Otherwise, look for the data on the target itself
			} else {
				btnEls = $.data( target, "buttonElements" );
			}
			// If found, grab the button's outer element
			if ( btnEls ) {
				target = btnEls.outer;
			} else {
				needClosest = true;
			}

			$btn = $( target );
			// If the outer element wasn't found by the our heuristics, use .closest()
			if ( needClosest ) {
				$btn = $btn.closest( ".ui-btn" );
			}

			if ( $btn.length > 0 && !$btn.hasClass( "ui-disabled" ) ) {
				removeActiveLinkClass( true );
				$activeClickedLink = $btn;
				$activeClickedLink.addClass( $.mobile.activeBtnClass );
			}
		});

		// click routing - direct to HTTP or Ajax, accordingly
		$.mobile.document.bind( "click", function( event ) {
			if ( !$.mobile.linkBindingEnabled || event.isDefaultPrevented() ) {
				return;
			}

			var link = findClosestLink( event.target ), $link = $( link ), httpCleanup;

			// If there is no link associated with the click or its not a left
			// click we want to ignore the click
			// TODO teach $.mobile.hijackable to operate on raw dom elements so the link wrapping
			// can be avoided
			if ( !link || event.which > 1 || !$link.jqmHijackable().length ) {
				return;
			}

			//remove active link class if external (then it won't be there if you come back)
			httpCleanup = function() {
				window.setTimeout(function() { removeActiveLinkClass( true ); }, 200 );
			};

			//if there's a data-rel=back attr, go back in history
			if ( $link.is( ":jqmData(rel='back')" ) ) {
				$.mobile.back();
				return false;
			}

			var baseUrl = getClosestBaseUrl( $link ),

				//get href, if defined, otherwise default to empty hash
				href = path.makeUrlAbsolute( $link.attr( "href" ) || "#", baseUrl );

			//if ajax is disabled, exit early
			if ( !$.mobile.ajaxEnabled && !path.isEmbeddedPage( href ) ) {
				httpCleanup();
				//use default click handling
				return;
			}

			// XXX_jblas: Ideally links to application pages should be specified as
			//            an url to the application document with a hash that is either
			//            the site relative path or id to the page. But some of the
			//            internal code that dynamically generates sub-pages for nested
			//            lists and select dialogs, just write a hash in the link they
			//            create. This means the actual URL path is based on whatever
			//            the current value of the base tag is at the time this code
			//            is called. For now we are just assuming that any url with a
			//            hash in it is an application page reference.
			if ( href.search( "#" ) !== -1 ) {
				href = href.replace( /[^#]*#/, "" );
				if ( !href ) {
					//link was an empty hash meant purely
					//for interaction, so we ignore it.
					event.preventDefault();
					return;
				} else if ( path.isPath( href ) ) {
					//we have apath so make it the href we want to load.
					href = path.makeUrlAbsolute( href, baseUrl );
				} else {
					//we have a simple id so use the documentUrl as its base.
					href = path.makeUrlAbsolute( "#" + href, documentUrl.hrefNoHash );
				}
			}

				// Should we handle this link, or let the browser deal with it?
			var useDefaultUrlHandling = $link.is( "[rel='external']" ) || $link.is( ":jqmData(ajax='false')" ) || $link.is( "[target]" ),

				// Some embedded browsers, like the web view in Phone Gap, allow cross-domain XHR
				// requests if the document doing the request was loaded via the file:// protocol.
				// This is usually to allow the application to "phone home" and fetch app specific
				// data. We normally let the browser handle external/cross-domain urls, but if the
				// allowCrossDomainPages option is true, we will allow cross-domain http/https
				// requests to go through our page loading logic.

				//check for protocol or rel and its not an embedded page
				//TODO overlap in logic from isExternal, rel=external check should be
				//     moved into more comprehensive isExternalLink
				isExternal = useDefaultUrlHandling || ( path.isExternal( href ) && !path.isPermittedCrossDomainRequest( documentUrl, href ) );

			if ( isExternal ) {
				httpCleanup();
				//use default click handling
				return;
			}

			//use ajax
			var transition = $link.jqmData( "transition" ),
				reverse = $link.jqmData( "direction" ) === "reverse" ||
							// deprecated - remove by 1.0
							$link.jqmData( "back" ),

				//this may need to be more specific as we use data-rel more
				role = $link.attr( "data-" + $.mobile.ns + "rel" ) || undefined;

			$.mobile.changePage( href, { transition: transition, reverse: reverse, role: role, link: $link } );
			event.preventDefault();
		});

		//prefetch pages when anchors with data-prefetch are encountered
		$.mobile.document.delegate( ".ui-page", "pageshow.prefetch", function() {
			var urls = [];
			$( this ).find( "a:jqmData(prefetch)" ).each(function() {
				var $link = $( this ),
					url = $link.attr( "href" );

				if ( url && $.inArray( url, urls ) === -1 ) {
					urls.push( url );

					$.mobile.loadPage( url, { role: $link.attr( "data-" + $.mobile.ns + "rel" ),prefetch: true } );
				}
			});
		});

		$.mobile._handleHashChange = function( url, data ) {
			//find first page via hash
			var to = path.stripHash(url),
				//transition is false if it's the first page, undefined otherwise (and may be overridden by default)
				transition = $.mobile.urlHistory.stack.length === 0 ? "none" : undefined,

				// default options for the changPage calls made after examining the current state
				// of the page and the hash, NOTE that the transition is derived from the previous
				// history entry
				changePageOptions = {
					changeHash: false,
					fromHashChange: true,
					reverse: data.direction === "back"
				};

			$.extend( changePageOptions, data, {
				transition: (urlHistory.getLast() || {}).transition || transition
			});

			// special case for dialogs
			if ( urlHistory.activeIndex > 0 && to.indexOf( dialogHashKey ) > -1 && urlHistory.initialDst !== to ) {

				// If current active page is not a dialog skip the dialog and continue
				// in the same direction
				if ( $.mobile.activePage && !$.mobile.activePage.is( ".ui-dialog" ) ) {
					//determine if we're heading forward or backward and continue accordingly past
					//the current dialog
					if( data.direction === "back" ) {
						$.mobile.back();
					} else {
						window.history.forward();
					}

					// prevent changePage call
					return;
				} else {
					// if the current active page is a dialog and we're navigating
					// to a dialog use the dialog objected saved in the stack
					to = data.pageUrl;
					var active = $.mobile.urlHistory.getActive();

					// make sure to set the role, transition and reversal
					// as most of this is lost by the domCache cleaning
					$.extend( changePageOptions, {
						role: active.role,
						transition: active.transition,
						reverse: data.direction === "back"
					});
				}
			}

			//if to is defined, load it
			if ( to ) {
				// At this point, 'to' can be one of 3 things, a cached page element from
				// a history stack entry, an id, or site-relative/absolute URL. If 'to' is
				// an id, we need to resolve it against the documentBase, not the location.href,
				// since the hashchange could've been the result of a forward/backward navigation
				// that crosses from an external page/dialog to an internal page/dialog.
				to = !path.isPath( to ) ? ( path.makeUrlAbsolute( '#' + to, documentBase ) ) : to;

				// If we're about to go to an initial URL that contains a reference to a non-existent
				// internal page, go to the first page instead. We know that the initial hash refers to a
				// non-existent page, because the initial hash did not end up in the initial urlHistory entry
				if ( to === path.makeUrlAbsolute( '#' + urlHistory.initialDst, documentBase ) &&
					urlHistory.stack.length && urlHistory.stack[0].url !== urlHistory.initialDst.replace( dialogHashKey, "" ) ) {
					to = $.mobile.firstPage;
				}

				$.mobile.changePage( to, changePageOptions );
			}	else {

				//there's no hash, go to the first page in the dom
				$.mobile.changePage( $.mobile.firstPage, changePageOptions );
			}
		};

		// TODO roll the logic here into the handleHashChange method
		$window.bind( "navigate", function( e, data ) {
			var url;

			if ( e.originalEvent && e.originalEvent.isDefaultPrevented() ) {
				return;
			}

			url = $.event.special.navigate.originalEventName.indexOf( "hashchange" ) > -1 ? data.state.hash : data.state.url;

			if( !url ) {
				url = $.mobile.path.parseLocation().hash;
			}

			if( !url || url === "#" || url.indexOf( "#" + $.mobile.path.uiStateKey ) === 0 ){
				url = location.href;
			}

			$.mobile._handleHashChange( url, data.state );
		});

		//set page min-heights to be device specific
		$.mobile.document.bind( "pageshow", $.mobile.resetActivePageHeight );
		$.mobile.window.bind( "throttledresize", $.mobile.resetActivePageHeight );

	};//navreadyDeferred done callback

	$( function() { domreadyDeferred.resolve(); } );

	$.when( domreadyDeferred, $.mobile.navreadyDeferred ).done( function() { $.mobile._registerInternalEvents(); } );
})( jQuery );

/*
* fallback transition for flip in non-3D supporting browsers (which tend to handle complex transitions poorly in general
*/

(function( $, window, undefined ) {

$.mobile.transitionFallbacks.flip = "fade";

})( jQuery, this );
/*
* fallback transition for flow in non-3D supporting browsers (which tend to handle complex transitions poorly in general
*/

(function( $, window, undefined ) {

$.mobile.transitionFallbacks.flow = "fade";

})( jQuery, this );
/*
* fallback transition for pop in non-3D supporting browsers (which tend to handle complex transitions poorly in general
*/

(function( $, window, undefined ) {

$.mobile.transitionFallbacks.pop = "fade";

})( jQuery, this );
/*
* fallback transition for slide in non-3D supporting browsers (which tend to handle complex transitions poorly in general
*/

(function( $, window, undefined ) {

// Use the simultaneous transitions handler for slide transitions
$.mobile.transitionHandlers.slide = $.mobile.transitionHandlers.simultaneous;

// Set the slide transitions's fallback to "fade"
$.mobile.transitionFallbacks.slide = "fade";

})( jQuery, this );
/*
* fallback transition for slidedown in non-3D supporting browsers (which tend to handle complex transitions poorly in general
*/

(function( $, window, undefined ) {

$.mobile.transitionFallbacks.slidedown = "fade";

})( jQuery, this );
/*
* fallback transition for slidefade in non-3D supporting browsers (which tend to handle complex transitions poorly in general
*/

(function( $, window, undefined ) {

// Set the slide transitions's fallback to "fade"
$.mobile.transitionFallbacks.slidefade = "fade";

})( jQuery, this );
/*
* fallback transition for slideup in non-3D supporting browsers (which tend to handle complex transitions poorly in general
*/

(function( $, window, undefined ) {

$.mobile.transitionFallbacks.slideup = "fade";

})( jQuery, this );
/*
* fallback transition for turn in non-3D supporting browsers (which tend to handle complex transitions poorly in general
*/

(function( $, window, undefined ) {

$.mobile.transitionFallbacks.turn = "fade";

})( jQuery, this );

(function( $, undefined ) {

$.mobile.page.prototype.options.degradeInputs = {
	color: false,
	date: false,
	datetime: false,
	"datetime-local": false,
	email: false,
	month: false,
	number: false,
	range: "number",
	search: "text",
	tel: false,
	time: false,
	url: false,
	week: false
};


//auto self-init widgets
$.mobile.document.bind( "pagecreate create", function( e ) {

	var page = $.mobile.closestPageData( $( e.target ) ), options;

	if ( !page ) {
		return;
	}

	options = page.options;

	// degrade inputs to avoid poorly implemented native functionality
	$( e.target ).find( "input" ).not( page.keepNativeSelector() ).each(function() {
		var $this = $( this ),
			type = this.getAttribute( "type" ),
			optType = options.degradeInputs[ type ] || "text";

		if ( options.degradeInputs[ type ] ) {
			var html = $( "<div>" ).html( $this.clone() ).html(),
				// In IE browsers, the type sometimes doesn't exist in the cloned markup, so we replace the closing tag instead
				hasType = html.indexOf( " type=" ) > -1,
				findstr = hasType ? /\s+type=["']?\w+['"]?/ : /\/?>/,
				repstr = " type=\"" + optType + "\" data-" + $.mobile.ns + "type=\"" + type + "\"" + ( hasType ? "" : ">" );

			$this.replaceWith( html.replace( findstr, repstr ) );
		}
	});

});

})( jQuery );

(function( $, window, undefined ) {

$.widget( "mobile.dialog", $.mobile.widget, {
	options: {
		closeBtn: "left",
		closeBtnText: "Close",
		overlayTheme: "a",
		corners: true,
		initSelector: ":jqmData(role='dialog')"
	},

	// Override the theme set by the page plugin on pageshow
	_handlePageBeforeShow: function() {
		this._isCloseable = true;
		if ( this.options.overlayTheme ) {
			this.element
				.page( "removeContainerBackground" )
				.page( "setContainerBackground", this.options.overlayTheme );
		}
	},

	_create: function() {
		var self = this,
			$el = this.element,
			cornerClass = !!this.options.corners ? " ui-corner-all" : "",
			dialogWrap = $( "<div/>", {
					"role" : "dialog",
					"class" : "ui-dialog-contain ui-overlay-shadow" + cornerClass
				});

		$el.addClass( "ui-dialog ui-overlay-" + this.options.overlayTheme );

		// Class the markup for dialog styling
		// Set aria role
		$el.wrapInner( dialogWrap );

		/* bind events
			- clicks and submits should use the closing transition that the dialog opened with
				unless a data-transition is specified on the link/form
			- if the click was on the close button, or the link has a data-rel="back" it'll go back in history naturally
		*/
		$el.bind( "vclick submit", function( event ) {
			var $target = $( event.target ).closest( event.type === "vclick" ? "a" : "form" ),
				active;

			if ( $target.length && !$target.jqmData( "transition" ) ) {

				active = $.mobile.urlHistory.getActive() || {};

				$target.attr( "data-" + $.mobile.ns + "transition", ( active.transition || $.mobile.defaultDialogTransition ) )
					.attr( "data-" + $.mobile.ns + "direction", "reverse" );
			}
		});

		this._on( $el, {
			pagebeforeshow: "_handlePageBeforeShow"
		});

		$.extend( this, {
			_createComplete: false
		});

		this._setCloseBtn( this.options.closeBtn );
	},

	_setCloseBtn: function( value ) {
		var self = this, btn, location;

		if ( this._headerCloseButton ) {
			this._headerCloseButton.remove();
			this._headerCloseButton = null;
		}
		if ( value !== "none" ) {
			// Sanitize value
			location = ( value === "left" ? "left" : "right" );
			btn = $( "<a href='#' class='ui-btn-" + location + "' data-" + $.mobile.ns + "icon='delete' data-" + $.mobile.ns + "iconpos='notext'>"+ this.options.closeBtnText + "</a>" );
			this.element.children().find( ":jqmData(role='header')" ).first().prepend( btn );
			if ( this._createComplete && $.fn.buttonMarkup ) {
				btn.buttonMarkup();
			}
			this._createComplete = true;

			// this must be an anonymous function so that select menu dialogs can replace
			// the close method. This is a change from previously just defining data-rel=back
			// on the button and letting nav handle it
			//
			// Use click rather than vclick in order to prevent the possibility of unintentionally
			// reopening the dialog if the dialog opening item was directly under the close button.
			btn.bind( "click", function() {
				self.close();
			});

			this._headerCloseButton = btn;
		}
	},

	_setOption: function( key, value ) {
		if ( key === "closeBtn" ) {
			this._setCloseBtn( value );
		}
		this._super( key, value );
	},

	// Close method goes back in history
	close: function() {
		var idx, dst, hist = $.mobile.navigate.history;

		if ( this._isCloseable ) {
			this._isCloseable = false;
			// If the hash listening is enabled and there is at least one preceding history
			// entry it's ok to go back. Initial pages with the dialog hash state are an example
			// where the stack check is necessary
			if ( $.mobile.hashListeningEnabled && hist.activeIndex > 0 ) {
				$.mobile.back();
			} else {
				idx = Math.max( 0, hist.activeIndex - 1 );
				dst = hist.stack[ idx ].pageUrl || hist.stack[ idx ].url;
				hist.previousIndex = hist.activeIndex;
				hist.activeIndex = idx;
				if ( !$.mobile.path.isPath( dst ) ) {
					dst = $.mobile.path.makeUrlAbsolute( "#" + dst );
				}

				$.mobile.changePage( dst, { direction: "back", changeHash: false, fromHashChange: true } );
			}
		}
	}
});

//auto self-init widgets
$.mobile.document.delegate( $.mobile.dialog.prototype.options.initSelector, "pagecreate", function() {
	$.mobile.dialog.prototype.enhance( this );
});

})( jQuery, this );

(function( $, undefined ) {

$.mobile.page.prototype.options.backBtnText  = "Back";
$.mobile.page.prototype.options.addBackBtn   = false;
$.mobile.page.prototype.options.backBtnTheme = null;
$.mobile.page.prototype.options.headerTheme  = "a";
$.mobile.page.prototype.options.footerTheme  = "a";
$.mobile.page.prototype.options.contentTheme = null;

// NOTE bind used to force this binding to run before the buttonMarkup binding
//      which expects .ui-footer top be applied in its gigantic selector
// TODO remove the buttonMarkup giant selector and move it to the various modules
//      on which it depends
$.mobile.document.bind( "pagecreate", function( e ) {
	var $page = $( e.target ),
		o = $page.data( "mobile-page" ).options,
		pageRole = $page.jqmData( "role" ),
		pageTheme = o.theme;

	$( ":jqmData(role='header'), :jqmData(role='footer'), :jqmData(role='content')", $page )
		.jqmEnhanceable()
		.each(function() {

		var $this = $( this ),
			role = $this.jqmData( "role" ),
			theme = $this.jqmData( "theme" ),
			contentTheme = theme || o.contentTheme || ( pageRole === "dialog" && pageTheme ),
			$headeranchors,
			leftbtn,
			rightbtn,
			backBtn;

		$this.addClass( "ui-" + role );

		//apply theming and markup modifications to page,header,content,footer
		if ( role === "header" || role === "footer" ) {

			var thisTheme = theme || ( role === "header" ? o.headerTheme : o.footerTheme ) || pageTheme;

			$this
				//add theme class
				.addClass( "ui-bar-" + thisTheme )
				// Add ARIA role
				.attr( "role", role === "header" ? "banner" : "contentinfo" );

			if ( role === "header") {
				// Right,left buttons
				$headeranchors	= $this.children( "a, button" );
				leftbtn	= $headeranchors.hasClass( "ui-btn-left" );
				rightbtn = $headeranchors.hasClass( "ui-btn-right" );

				leftbtn = leftbtn || $headeranchors.eq( 0 ).not( ".ui-btn-right" ).addClass( "ui-btn-left" ).length;

				rightbtn = rightbtn || $headeranchors.eq( 1 ).addClass( "ui-btn-right" ).length;
			}

			// Auto-add back btn on pages beyond first view
			if ( o.addBackBtn &&
				role === "header" &&
				$( ".ui-page" ).length > 1 &&
				$page.jqmData( "url" ) !== $.mobile.path.stripHash( location.hash ) &&
				!leftbtn ) {

				backBtn = $( "<a href='javascript:void(0);' class='ui-btn-left' data-"+ $.mobile.ns +"rel='back' data-"+ $.mobile.ns +"icon='arrow-l'>"+ o.backBtnText +"</a>" )
					// If theme is provided, override default inheritance
					.attr( "data-"+ $.mobile.ns +"theme", o.backBtnTheme || thisTheme )
					.prependTo( $this );
			}

			// Page title
			$this.children( "h1, h2, h3, h4, h5, h6" )
				.addClass( "ui-title" )
				// Regardless of h element number in src, it becomes h1 for the enhanced page
				.attr({
					"role": "heading",
					"aria-level": "1"
				});

		} else if ( role === "content" ) {
			if ( contentTheme ) {
				$this.addClass( "ui-body-" + ( contentTheme ) );
			}

			// Add ARIA role
			$this.attr( "role", "main" );
		}
	});
});

})( jQuery );

(function( $, undefined ) {

// This function calls getAttribute, which should be safe for data-* attributes
var getAttrFixed = function( e, key ) {
	var value = e.getAttribute( key );

	return value === "true" ? true :
		value === "false" ? false :
		value === null ? undefined : value;
};

$.fn.buttonMarkup = function( options ) {
	var $workingSet = this,
		nsKey = "data-" + $.mobile.ns,
		key;

	// Enforce options to be of type string
	options = ( options && ( $.type( options ) === "object" ) )? options : {};
	for ( var i = 0; i < $workingSet.length; i++ ) {
		var el = $workingSet.eq( i ),
			e = el[ 0 ],
			o = $.extend( {}, $.fn.buttonMarkup.defaults, {
				icon:       options.icon       !== undefined ? options.icon       : getAttrFixed( e, nsKey + "icon" ),
				iconpos:    options.iconpos    !== undefined ? options.iconpos    : getAttrFixed( e, nsKey + "iconpos" ),
				theme:      options.theme      !== undefined ? options.theme      : getAttrFixed( e, nsKey + "theme" ) || $.mobile.getInheritedTheme( el, "c" ),
				inline:     options.inline     !== undefined ? options.inline     : getAttrFixed( e, nsKey + "inline" ),
				shadow:     options.shadow     !== undefined ? options.shadow     : getAttrFixed( e, nsKey + "shadow" ),
				corners:    options.corners    !== undefined ? options.corners    : getAttrFixed( e, nsKey + "corners" ),
				iconshadow: options.iconshadow !== undefined ? options.iconshadow : getAttrFixed( e, nsKey + "iconshadow" ),
				mini:       options.mini       !== undefined ? options.mini       : getAttrFixed( e, nsKey + "mini" )
			}, options ),

			// Classes Defined
			innerClass = "ui-btn-inner",
			textClass = "ui-btn-text",
			buttonClass, iconClass,
			hover = false,
			state = "up",
			// Button inner markup
			buttonInner,
			buttonText,
			buttonIcon,
			buttonElements;

		for ( key in o ) {
			if ( o[ key ] === undefined || o[ key ] === null ) {
				el.removeAttr( nsKey + key );
			} else {
				e.setAttribute( nsKey + key, o[ key ] );
			}
		}

		if ( getAttrFixed( e, nsKey + "rel" ) === "popup" && el.attr( "href" ) ) {
			e.setAttribute( "aria-haspopup", true );
			e.setAttribute( "aria-owns", el.attr( "href" ) );
		}

		// Check if this element is already enhanced
		buttonElements = $.data( ( ( e.tagName === "INPUT" || e.tagName === "BUTTON" ) ? e.parentNode : e ), "buttonElements" );

		if ( buttonElements ) {
			e = buttonElements.outer;
			el = $( e );
			buttonInner = buttonElements.inner;
			buttonText = buttonElements.text;
			// We will recreate this icon below
			$( buttonElements.icon ).remove();
			buttonElements.icon = null;
			hover = buttonElements.hover;
			state = buttonElements.state;
		}
		else {
			buttonInner = document.createElement( o.wrapperEls );
			buttonText = document.createElement( o.wrapperEls );
		}
		buttonIcon = o.icon ? document.createElement( "span" ) : null;

		if ( attachEvents && !buttonElements ) {
			attachEvents();
		}

		// if not, try to find closest theme container
		if ( !o.theme ) {
			o.theme = $.mobile.getInheritedTheme( el, "c" );
		}

		buttonClass = "ui-btn ";
		buttonClass += ( hover ? "ui-btn-hover-" + o.theme : "" );
		buttonClass += ( state ? " ui-btn-" + state + "-" + o.theme : "" );
		buttonClass += o.shadow ? " ui-shadow" : "";
		buttonClass += o.corners ? " ui-btn-corner-all" : "";

		if ( o.mini !== undefined ) {
			// Used to control styling in headers/footers, where buttons default to `mini` style.
			buttonClass += o.mini === true ? " ui-mini" : " ui-fullsize";
		}

		if ( o.inline !== undefined ) {
			// Used to control styling in headers/footers, where buttons default to `inline` style.
			buttonClass += o.inline === true ? " ui-btn-inline" : " ui-btn-block";
		}

		if ( o.icon ) {
			o.icon = "ui-icon-" + o.icon;
			o.iconpos = o.iconpos || "left";

			iconClass = "ui-icon " + o.icon;

			if ( o.iconshadow ) {
				iconClass += " ui-icon-shadow";
			}
		}

		if ( o.iconpos ) {
			buttonClass += " ui-btn-icon-" + o.iconpos;

			if ( o.iconpos === "notext" && !el.attr( "title" ) ) {
				el.attr( "title", el.getEncodedText() );
			}
		}

		if ( buttonElements ) {
			el.removeClass( buttonElements.bcls || "" );
		}
		el.removeClass( "ui-link" ).addClass( buttonClass );

		buttonInner.className = innerClass;
		buttonText.className = textClass;
		if ( !buttonElements ) {
			buttonInner.appendChild( buttonText );
		}
		if ( buttonIcon ) {
			buttonIcon.className = iconClass;
			if ( !( buttonElements && buttonElements.icon ) ) {
				buttonIcon.innerHTML = "&#160;";
				buttonInner.appendChild( buttonIcon );
			}
		}

		while ( e.firstChild && !buttonElements ) {
			buttonText.appendChild( e.firstChild );
		}

		if ( !buttonElements ) {
			e.appendChild( buttonInner );
		}

		// Assign a structure containing the elements of this button to the elements of this button. This
		// will allow us to recognize this as an already-enhanced button in future calls to buttonMarkup().
		buttonElements = {
			hover : hover,
			state : state,
			bcls  : buttonClass,
			outer : e,
			inner : buttonInner,
			text  : buttonText,
			icon  : buttonIcon
		};

		$.data( e,           'buttonElements', buttonElements );
		$.data( buttonInner, 'buttonElements', buttonElements );
		$.data( buttonText,  'buttonElements', buttonElements );
		if ( buttonIcon ) {
			$.data( buttonIcon, 'buttonElements', buttonElements );
		}
	}

	return this;
};

$.fn.buttonMarkup.defaults = {
	corners: true,
	shadow: true,
	iconshadow: true,
	wrapperEls: "span"
};

function closestEnabledButton( element ) {
    var cname;

    while ( element ) {
		// Note that we check for typeof className below because the element we
		// handed could be in an SVG DOM where className on SVG elements is defined to
		// be of a different type (SVGAnimatedString). We only operate on HTML DOM
		// elements, so we look for plain "string".
        cname = ( typeof element.className === 'string' ) && ( element.className + ' ' );
        if ( cname && cname.indexOf( "ui-btn " ) > -1 && cname.indexOf( "ui-disabled " ) < 0 ) {
            break;
        }

        element = element.parentNode;
    }

    return element;
}

function updateButtonClass( $btn, classToRemove, classToAdd, hover, state ) {
	var buttonElements = $.data( $btn[ 0 ], "buttonElements" );
	$btn.removeClass( classToRemove ).addClass( classToAdd );
	if ( buttonElements ) {
		buttonElements.bcls = $( document.createElement( "div" ) )
			.addClass( buttonElements.bcls + " " + classToAdd )
			.removeClass( classToRemove )
			.attr( "class" );
		if ( hover !== undefined ) {
			buttonElements.hover = hover;
		}
		buttonElements.state = state;
	}
}

var attachEvents = function() {
	var hoverDelay = $.mobile.buttonMarkup.hoverDelay, hov, foc;

	$.mobile.document.bind( {
		"vmousedown vmousecancel vmouseup vmouseover vmouseout focus blur scrollstart": function( event ) {
			var theme,
				$btn = $( closestEnabledButton( event.target ) ),
				isTouchEvent = event.originalEvent && /^touch/.test( event.originalEvent.type ),
				evt = event.type;

			if ( $btn.length ) {
				theme = $btn.attr( "data-" + $.mobile.ns + "theme" );

				if ( evt === "vmousedown" ) {
					if ( isTouchEvent ) {
						// Use a short delay to determine if the user is scrolling before highlighting
						hov = setTimeout( function() {
							updateButtonClass( $btn, "ui-btn-up-" + theme, "ui-btn-down-" + theme, undefined, "down" );
						}, hoverDelay );
					} else {
						updateButtonClass( $btn, "ui-btn-up-" + theme, "ui-btn-down-" + theme, undefined, "down" );
					}
				} else if ( evt === "vmousecancel" || evt === "vmouseup" ) {
					updateButtonClass( $btn, "ui-btn-down-" + theme, "ui-btn-up-" + theme, undefined, "up" );
				} else if ( evt === "vmouseover" || evt === "focus" ) {
					if ( isTouchEvent ) {
						// Use a short delay to determine if the user is scrolling before highlighting
						foc = setTimeout( function() {
							updateButtonClass( $btn, "ui-btn-up-" + theme, "ui-btn-hover-" + theme, true, "" );
						}, hoverDelay );
					} else {
						updateButtonClass( $btn, "ui-btn-up-" + theme, "ui-btn-hover-" + theme, true, "" );
					}
				} else if ( evt === "vmouseout" || evt === "blur" || evt === "scrollstart" ) {
					updateButtonClass( $btn, "ui-btn-hover-" + theme  + " ui-btn-down-" + theme, "ui-btn-up-" + theme, false, "up" );
					if ( hov ) {
						clearTimeout( hov );
					}
					if ( foc ) {
						clearTimeout( foc );
					}
				}
			}
		},
		"focusin focus": function( event ) {
			$( closestEnabledButton( event.target ) ).addClass( $.mobile.focusClass );
		},
		"focusout blur": function( event ) {
			$( closestEnabledButton( event.target ) ).removeClass( $.mobile.focusClass );
		}
	});

	attachEvents = null;
};

//links in bars, or those with  data-role become buttons
//auto self-init widgets
$.mobile.document.bind( "pagecreate create", function( e ) {

	$( ":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a, .ui-bar > :jqmData(role='controlgroup') > a", e.target )
		.jqmEnhanceable()
		.not( "button, input, .ui-btn, :jqmData(role='none'), :jqmData(role='nojs')" )
		.buttonMarkup();
});

})( jQuery );


(function( $, undefined ) {

$.widget( "mobile.collapsible", $.mobile.widget, {
	options: {
		expandCueText: " click to expand contents",
		collapseCueText: " click to collapse contents",
		collapsed: true,
		heading: "h1,h2,h3,h4,h5,h6,legend",
		collapsedIcon: "plus",
		expandedIcon: "minus",
		iconpos: "left",
		theme: null,
		contentTheme: null,
		inset: true,
		corners: true,
		mini: false,
		initSelector: ":jqmData(role='collapsible')"
	},
	_create: function() {

		var $el = this.element,
			o = this.options,
			collapsible = $el.addClass( "ui-collapsible" ),
			collapsibleHeading = $el.children( o.heading ).first(),
			collapsibleContent = collapsible.wrapInner( "<div class='ui-collapsible-content'></div>" ).children( ".ui-collapsible-content" ),
			collapsibleSet = $el.closest( ":jqmData(role='collapsible-set')" ).addClass( "ui-collapsible-set" ),
			collapsibleClasses = "";

		// Replace collapsibleHeading if it's a legend
		if ( collapsibleHeading.is( "legend" ) ) {
			collapsibleHeading = $( "<div role='heading'>"+ collapsibleHeading.html() +"</div>" ).insertBefore( collapsibleHeading );
			collapsibleHeading.next().remove();
		}

		// If we are in a collapsible set
		if ( collapsibleSet.length ) {
			// Inherit the theme from collapsible-set
			if ( !o.theme ) {
				o.theme = collapsibleSet.jqmData( "theme" ) || $.mobile.getInheritedTheme( collapsibleSet, "c" );
			}
			// Inherit the content-theme from collapsible-set
			if ( !o.contentTheme ) {
				o.contentTheme = collapsibleSet.jqmData( "content-theme" );
			}

			// Get the preference for collapsed icon in the set, but override with data- attribute on the individual collapsible
			o.collapsedIcon = $el.jqmData( "collapsed-icon" ) || collapsibleSet.jqmData( "collapsed-icon" ) || o.collapsedIcon;

			// Get the preference for expanded icon in the set, but override with data- attribute on the individual collapsible
			o.expandedIcon = $el.jqmData( "expanded-icon" ) || collapsibleSet.jqmData( "expanded-icon" ) || o.expandedIcon;

			// Gets the preference icon position in the set, but override with data- attribute on the individual collapsible
			o.iconpos = $el.jqmData( "iconpos" ) || collapsibleSet.jqmData( "iconpos" ) || o.iconpos;

			// Inherit the preference for inset from collapsible-set or set the default value to ensure equalty within a set
			if ( collapsibleSet.jqmData( "inset" ) !== undefined ) {
				o.inset = collapsibleSet.jqmData( "inset" );
			} else {
				o.inset = true;
			}
			// Set corners for individual collapsibles to false when in a collapsible-set
			o.corners = false;
			// Gets the preference for mini in the set
			if ( !o.mini ) {
				o.mini = collapsibleSet.jqmData( "mini" );
			}
		} else {
			// get inherited theme if not a set and no theme has been set
			if ( !o.theme ) {
				o.theme = $.mobile.getInheritedTheme( $el, "c" );
			}
		}

		if ( !!o.inset ) {
			collapsibleClasses += " ui-collapsible-inset";
			if ( !!o.corners ) {
				collapsibleClasses += " ui-corner-all" ;
			}
		}
		if ( o.contentTheme ) {
			collapsibleClasses += " ui-collapsible-themed-content";
			collapsibleContent.addClass( "ui-body-" + o.contentTheme );
		}
		if ( collapsibleClasses !== "" ) {
			collapsible.addClass( collapsibleClasses );
		}
		
		collapsibleHeading
			//drop heading in before content
			.insertBefore( collapsibleContent )
			//modify markup & attributes
			.addClass( "ui-collapsible-heading" )
			.append( "<span class='ui-collapsible-heading-status'></span>" )
			.wrapInner( "<a href='#' class='ui-collapsible-heading-toggle'></a>" )
			.find( "a" )
				.first()
				.buttonMarkup({
					shadow: false,
					corners: false,
					iconpos: o.iconpos,
					icon: o.collapsedIcon,
					mini: o.mini,
					theme: o.theme
				});

		//events
		collapsible
			.bind( "expand collapse", function( event ) {
				if ( !event.isDefaultPrevented() ) {
					var $this = $( this ),
						isCollapse = ( event.type === "collapse" );

					event.preventDefault();

					collapsibleHeading
						.toggleClass( "ui-collapsible-heading-collapsed", isCollapse )
						.find( ".ui-collapsible-heading-status" )
							.text( isCollapse ? o.expandCueText : o.collapseCueText )
						.end()
						.find( ".ui-icon" )
							.toggleClass( "ui-icon-" + o.expandedIcon, !isCollapse )
							// logic or cause same icon for expanded/collapsed state would remove the ui-icon-class
							.toggleClass( "ui-icon-" + o.collapsedIcon, ( isCollapse || o.expandedIcon === o.collapsedIcon ) )
						.end()
						.find( "a" ).first().removeClass( $.mobile.activeBtnClass );

					$this.toggleClass( "ui-collapsible-collapsed", isCollapse );
					collapsibleContent.toggleClass( "ui-collapsible-content-collapsed", isCollapse ).attr( "aria-hidden", isCollapse );

					collapsibleContent.trigger( "updatelayout" );
				}
			})
			.trigger( o.collapsed ? "collapse" : "expand" );

		collapsibleHeading
			.bind( "tap", function( event ) {
				collapsibleHeading.find( "a" ).first().addClass( $.mobile.activeBtnClass );
			})
			.bind( "click", function( event ) {

				var type = collapsibleHeading.is( ".ui-collapsible-heading-collapsed" ) ? "expand" : "collapse";

				collapsible.trigger( type );

				event.preventDefault();
				event.stopPropagation();
			});
	}
});

//auto self-init widgets
$.mobile.document.bind( "pagecreate create", function( e ) {
	$.mobile.collapsible.prototype.enhanceWithin( e.target );
});

})( jQuery );

(function( $, undefined ) {

$.mobile.behaviors.addFirstLastClasses = {
	_getVisibles: function( $els, create ) {
		var visibles;

		if ( create ) {
			visibles = $els.not( ".ui-screen-hidden" );
		} else {
			visibles = $els.filter( ":visible" );
			if ( visibles.length === 0 ) {
				visibles = $els.not( ".ui-screen-hidden" );
			}
		}

		return visibles;
	},

	_addFirstLastClasses: function( $els, $visibles, create ) {
		$els.removeClass( "ui-first-child ui-last-child" );
		$visibles.eq( 0 ).addClass( "ui-first-child" ).end().last().addClass( "ui-last-child" );
		if ( !create ) {
			this.element.trigger( "updatelayout" );
		}
	}
};

})( jQuery );

(function( $, undefined ) {

$.widget( "mobile.collapsibleset", $.mobile.widget, $.extend( {
	options: {
		initSelector: ":jqmData(role='collapsible-set')"
	},
	_create: function() {
		var $el = this.element.addClass( "ui-collapsible-set" ),
			o = this.options;

		// Inherit the theme from collapsible-set
		if ( !o.theme ) {
			o.theme = $.mobile.getInheritedTheme( $el, "c" );
		}
		// Inherit the content-theme from collapsible-set
		if ( !o.contentTheme ) {
			o.contentTheme = $el.jqmData( "content-theme" );
		}
		// Inherit the corner styling from collapsible-set
		if ( !o.corners ) {
			o.corners = $el.jqmData( "corners" );
		}
		
		if ( $el.jqmData( "inset" ) !== undefined ) {
			o.inset = $el.jqmData( "inset" );
		}
		o.inset = o.inset !== undefined ? o.inset : true;
		o.corners = o.corners !== undefined ? o.corners : true;
		
		if ( !!o.corners && !!o.inset ) {
			$el.addClass( "ui-corner-all" );
		}

		// Initialize the collapsible set if it's not already initialized
		if ( !$el.jqmData( "collapsiblebound" ) ) {
			$el
				.jqmData( "collapsiblebound", true )
				.bind( "expand", function( event ) {
					var closestCollapsible = $( event.target )
						.closest( ".ui-collapsible" );
					if ( closestCollapsible.parent().is( ":jqmData(role='collapsible-set')" ) ) {
						closestCollapsible
							.siblings( ".ui-collapsible" )
							.trigger( "collapse" );
					}
				});
		}
	},

	_init: function() {
		var $el = this.element,
			collapsiblesInSet = $el.children( ":jqmData(role='collapsible')" ),
			expanded = collapsiblesInSet.filter( ":jqmData(collapsed='false')" );
		this._refresh( "true" );

		// Because the corners are handled by the collapsible itself and the default state is collapsed
		// That was causing https://github.com/jquery/jquery-mobile/issues/4116
		expanded.trigger( "expand" );
	},

	_refresh: function( create ) {
		var collapsiblesInSet = this.element.children( ":jqmData(role='collapsible')" );

		$.mobile.collapsible.prototype.enhance( collapsiblesInSet.not( ".ui-collapsible" ) );

		this._addFirstLastClasses( collapsiblesInSet, this._getVisibles( collapsiblesInSet, create ), create );
	},

	refresh: function() {
		this._refresh( false );
	}
}, $.mobile.behaviors.addFirstLastClasses ) );

//auto self-init widgets
$.mobile.document.bind( "pagecreate create", function( e ) {
	$.mobile.collapsibleset.prototype.enhanceWithin( e.target );
});

})( jQuery );

(function( $, undefined ) {

// filter function removes whitespace between label and form element so we can use inline-block (nodeType 3 = text)
$.fn.fieldcontain = function( options ) {
	return this
		.addClass( "ui-field-contain ui-body ui-br" )
		.contents().filter( function() {
			return ( this.nodeType === 3 && !/\S/.test( this.nodeValue ) );
		}).remove();
};

//auto self-init widgets
$( document ).bind( "pagecreate create", function( e ) {
	$( ":jqmData(role='fieldcontain')", e.target ).jqmEnhanceable().fieldcontain();
});

})( jQuery );

(function( $, undefined ) {

$.fn.grid = function( options ) {
	return this.each(function() {

		var $this = $( this ),
			o = $.extend({
				grid: null
			}, options ),
			$kids = $this.children(),
			gridCols = { solo:1, a:2, b:3, c:4, d:5 },
			grid = o.grid,
			iterator;

			if ( !grid ) {
				if ( $kids.length <= 5 ) {
					for ( var letter in gridCols ) {
						if ( gridCols[ letter ] === $kids.length ) {
							grid = letter;
						}
					}
				} else {
					grid = "a";
					$this.addClass( "ui-grid-duo" );
				}
			}
			iterator = gridCols[grid];

		$this.addClass( "ui-grid-" + grid );

		$kids.filter( ":nth-child(" + iterator + "n+1)" ).addClass( "ui-block-a" );

		if ( iterator > 1 ) {
			$kids.filter( ":nth-child(" + iterator + "n+2)" ).addClass( "ui-block-b" );
		}
		if ( iterator > 2 ) {
			$kids.filter( ":nth-child(" + iterator + "n+3)" ).addClass( "ui-block-c" );
		}
		if ( iterator > 3 ) {
			$kids.filter( ":nth-child(" + iterator + "n+4)" ).addClass( "ui-block-d" );
		}
		if ( iterator > 4 ) {
			$kids.filter( ":nth-child(" + iterator + "n+5)" ).addClass( "ui-block-e" );
		}
	});
};
})( jQuery );

(function( $, undefined ) {

$.widget( "mobile.navbar", $.mobile.widget, {
	options: {
		iconpos: "top",
		grid: null,
		initSelector: ":jqmData(role='navbar')"
	},

	_create: function() {

		var $navbar = this.element,
			$navbtns = $navbar.find( "a" ),
			iconpos = $navbtns.filter( ":jqmData(icon)" ).length ?
									this.options.iconpos : undefined;

		$navbar.addClass( "ui-navbar ui-mini" )
			.attr( "role", "navigation" )
			.find( "ul" )
			.jqmEnhanceable()
			.grid({ grid: this.options.grid });

		$navbtns.buttonMarkup({
			corners:	false,
			shadow:		false,
			inline:     true,
			iconpos:	iconpos
		});

		$navbar.delegate( "a", "vclick", function( event ) {
			// ui-btn-inner is returned as target
			var target = $( event.target ).is( "a" ) ? $( this ) : $( this ).parent( "a" );
			
			if ( !target.is( ".ui-disabled, .ui-btn-active" ) ) {
				$navbtns.removeClass( $.mobile.activeBtnClass );
				$( this ).addClass( $.mobile.activeBtnClass );
				
				// The code below is a workaround to fix #1181
				var activeBtn = $( this );
				
				$( document ).one( "pagehide", function() {
					activeBtn.removeClass( $.mobile.activeBtnClass );
				});
			}
		});

		// Buttons in the navbar with ui-state-persist class should regain their active state before page show
		$navbar.closest( ".ui-page" ).bind( "pagebeforeshow", function() {
			$navbtns.filter( ".ui-state-persist" ).addClass( $.mobile.activeBtnClass );
		});
	}
});

//auto self-init widgets
$.mobile.document.bind( "pagecreate create", function( e ) {
	$.mobile.navbar.prototype.enhanceWithin( e.target );
});

})( jQuery );

(function( $, undefined ) {

//Keeps track of the number of lists per page UID
//This allows support for multiple nested list in the same page
//https://github.com/jquery/jquery-mobile/issues/1617
var listCountPerPage = {};

$.widget( "mobile.listview", $.mobile.widget, $.extend( {

	options: {
		theme: null,
		countTheme: "c",
		headerTheme: "b",
		dividerTheme: "b",
		icon: "arrow-r",
		splitIcon: "arrow-r",
		splitTheme: "b",
		corners: true,
		shadow: true,
		inset: false,
		initSelector: ":jqmData(role='listview')"
	},

	_create: function() {
		var t = this,
			listviewClasses = "";

		listviewClasses += t.options.inset ? " ui-listview-inset" : "";

		if ( !!t.options.inset ) {
			listviewClasses += t.options.corners ? " ui-corner-all" : "";
			listviewClasses += t.options.shadow ? " ui-shadow" : "";
		}

		// create listview markup
		t.element.addClass(function( i, orig ) {
			return orig + " ui-listview" + listviewClasses;
		});

		t.refresh( true );
	},

	// This is a generic utility method for finding the first
	// node with a given nodeName. It uses basic DOM traversal
	// to be fast and is meant to be a substitute for simple
	// $.fn.closest() and $.fn.children() calls on a single
	// element. Note that callers must pass both the lowerCase
	// and upperCase version of the nodeName they are looking for.
	// The main reason for this is that this function will be
	// called many times and we want to avoid having to lowercase
	// the nodeName from the element every time to ensure we have
	// a match. Note that this function lives here for now, but may
	// be moved into $.mobile if other components need a similar method.
	_findFirstElementByTagName: function( ele, nextProp, lcName, ucName ) {
		var dict = {};
		dict[ lcName ] = dict[ ucName ] = true;
		while ( ele ) {
			if ( dict[ ele.nodeName ] ) {
				return ele;
			}
			ele = ele[ nextProp ];
		}
		return null;
	},
	_getChildrenByTagName: function( ele, lcName, ucName ) {
		var results = [],
			dict = {};
		dict[ lcName ] = dict[ ucName ] = true;
		ele = ele.firstChild;
		while ( ele ) {
			if ( dict[ ele.nodeName ] ) {
				results.push( ele );
			}
			ele = ele.nextSibling;
		}
		return $( results );
	},

	_addThumbClasses: function( containers ) {
		var i, img, len = containers.length;
		for ( i = 0; i < len; i++ ) {
			img = $( this._findFirstElementByTagName( containers[ i ].firstChild, "nextSibling", "img", "IMG" ) );
			if ( img.length ) {
				img.addClass( "ui-li-thumb" );
				$( this._findFirstElementByTagName( img[ 0 ].parentNode, "parentNode", "li", "LI" ) ).addClass( img.is( ".ui-li-icon" ) ? "ui-li-has-icon" : "ui-li-has-thumb" );
			}
		}
	},

	refresh: function( create ) {
		this.parentPage = this.element.closest( ".ui-page" );
		this._createSubPages();

		var o = this.options,
			$list = this.element,
			self = this,
			dividertheme = $list.jqmData( "dividertheme" ) || o.dividerTheme,
			listsplittheme = $list.jqmData( "splittheme" ),
			listspliticon = $list.jqmData( "spliticon" ),
			listicon = $list.jqmData( "icon" ),
			li = this._getChildrenByTagName( $list[ 0 ], "li", "LI" ),
			ol = !!$.nodeName( $list[ 0 ], "ol" ),
			jsCount = !$.support.cssPseudoElement,
			start = $list.attr( "start" ),
			itemClassDict = {},
			item, itemClass, itemTheme,
			a, last, splittheme, counter, startCount, newStartCount, countParent, icon, imgParents, img, linkIcon;

		if ( ol && jsCount ) {
			$list.find( ".ui-li-dec" ).remove();
		}

		if ( ol ) {
			// Check if a start attribute has been set while taking a value of 0 into account
			if ( start || start === 0 ) {
				if ( !jsCount ) {
					startCount = parseInt( start , 10 ) - 1;
					$list.css( "counter-reset", "listnumbering " + startCount );
				} else {
					counter = parseInt( start , 10 );
				}
			} else if ( jsCount ) {
					counter = 1;
			}
		}

		if ( !o.theme ) {
			o.theme = $.mobile.getInheritedTheme( this.element, "c" );
		}

		for ( var pos = 0, numli = li.length; pos < numli; pos++ ) {
			item = li.eq( pos );
			itemClass = "ui-li";

			// If we're creating the element, we update it regardless
			if ( create || !item.hasClass( "ui-li" ) ) {
				itemTheme = item.jqmData( "theme" ) || o.theme;
				a = this._getChildrenByTagName( item[ 0 ], "a", "A" );
				var isDivider = ( item.jqmData( "role" ) === "list-divider" );

				if ( a.length && !isDivider ) {
					icon = item.jqmData( "icon" );

					item.buttonMarkup({
						wrapperEls: "div",
						shadow: false,
						corners: false,
						iconpos: "right",
						icon: a.length > 1 || icon === false ? false : icon || listicon || o.icon,
						theme: itemTheme
					});

					if ( ( icon !== false ) && ( a.length === 1 ) ) {
						item.addClass( "ui-li-has-arrow" );
					}

					a.first().removeClass( "ui-link" ).addClass( "ui-link-inherit" );

					if ( a.length > 1 ) {
						itemClass += " ui-li-has-alt";

						last = a.last();
						splittheme = listsplittheme || last.jqmData( "theme" ) || o.splitTheme;
						linkIcon = last.jqmData( "icon" );

						last.appendTo( item )
							.attr( "title", $.trim(last.getEncodedText()) )
							.addClass( "ui-li-link-alt" )
							.empty()
							.buttonMarkup({
								shadow: false,
								corners: false,
								theme: itemTheme,
								icon: false,
								iconpos: "notext"
							})
							.find( ".ui-btn-inner" )
								.append(
									$( document.createElement( "span" ) ).buttonMarkup({
										shadow: true,
										corners: true,
										theme: splittheme,
										iconpos: "notext",
										// link icon overrides list item icon overrides ul element overrides options
										icon: linkIcon || icon || listspliticon || o.splitIcon
									})
								);
					}
				} else if ( isDivider ) {

					itemClass += " ui-li-divider ui-bar-" + ( item.jqmData( "theme" ) || dividertheme );
					item.attr( "role", "heading" );

					if ( ol ) {
						//reset counter when a divider heading is encountered
						if ( start || start === 0 ) {
							if ( !jsCount ) {
								newStartCount = parseInt( start , 10 ) - 1;
								item.css( "counter-reset", "listnumbering " + newStartCount );
							} else {
								counter = parseInt( start , 10 );
							}
						} else if ( jsCount ) {
								counter = 1;
						}
					}

				} else {
					itemClass += " ui-li-static ui-btn-up-" + itemTheme;
				}
			}

			if ( ol && jsCount && itemClass.indexOf( "ui-li-divider" ) < 0 ) {
				countParent = itemClass.indexOf( "ui-li-static" ) > 0 ? item : item.find( ".ui-link-inherit" );

				countParent.addClass( "ui-li-jsnumbering" )
					.prepend( "<span class='ui-li-dec'>" + ( counter++ ) + ". </span>" );
			}

			// Instead of setting item class directly on the list item and its
			// btn-inner at this point in time, push the item into a dictionary
			// that tells us what class to set on it so we can do this after this
			// processing loop is finished.

			if ( !itemClassDict[ itemClass ] ) {
				itemClassDict[ itemClass ] = [];
			}

			itemClassDict[ itemClass ].push( item[ 0 ] );
		}

		// Set the appropriate listview item classes on each list item
		// and their btn-inner elements. The main reason we didn't do this
		// in the for-loop above is because we can eliminate per-item function overhead
		// by calling addClass() and children() once or twice afterwards. This
		// can give us a significant boost on platforms like WP7.5.

		for ( itemClass in itemClassDict ) {
			$( itemClassDict[ itemClass ] ).addClass( itemClass ).children( ".ui-btn-inner" ).addClass( itemClass );
		}

		$list.find( "h1, h2, h3, h4, h5, h6" ).addClass( "ui-li-heading" )
			.end()

			.find( "p, dl" ).addClass( "ui-li-desc" )
			.end()

			.find( ".ui-li-aside" ).each(function() {
					var $this = $( this );
					$this.prependTo( $this.parent() ); //shift aside to front for css float
				})
			.end()

			.find( ".ui-li-count" ).each(function() {
					$( this ).closest( "li" ).addClass( "ui-li-has-count" );
				}).addClass( "ui-btn-up-" + ( $list.jqmData( "counttheme" ) || this.options.countTheme) + " ui-btn-corner-all" );

		// The idea here is to look at the first image in the list item
		// itself, and any .ui-link-inherit element it may contain, so we
		// can place the appropriate classes on the image and list item.
		// Note that we used to use something like:
		//
		//    li.find(">img:eq(0), .ui-link-inherit>img:eq(0)").each( ... );
		//
		// But executing a find() like that on Windows Phone 7.5 took a
		// really long time. Walking things manually with the code below
		// allows the 400 listview item page to load in about 3 seconds as
		// opposed to 30 seconds.

		this._addThumbClasses( li );
		this._addThumbClasses( $list.find( ".ui-link-inherit" ) );

		this._addFirstLastClasses( li, this._getVisibles( li, create ), create );
		// autodividers binds to this to redraw dividers after the listview refresh
		this._trigger( "afterrefresh" );
	},

	//create a string for ID/subpage url creation
	_idStringEscape: function( str ) {
		return str.replace(/[^a-zA-Z0-9]/g, '-');
	},

	_createSubPages: function() {
		var parentList = this.element,
			parentPage = parentList.closest( ".ui-page" ),
			parentUrl = parentPage.jqmData( "url" ),
			parentId = parentUrl || parentPage[ 0 ][ $.expando ],
			parentListId = parentList.attr( "id" ),
			o = this.options,
			dns = "data-" + $.mobile.ns,
			self = this,
			persistentFooterID = parentPage.find( ":jqmData(role='footer')" ).jqmData( "id" ),
			hasSubPages;

		if ( typeof listCountPerPage[ parentId ] === "undefined" ) {
			listCountPerPage[ parentId ] = -1;
		}

		parentListId = parentListId || ++listCountPerPage[ parentId ];

		$( parentList.find( "li>ul, li>ol" ).toArray().reverse() ).each(function( i ) {
			var self = this,
				list = $( this ),
				listId = list.attr( "id" ) || parentListId + "-" + i,
				parent = list.parent(),
				nodeElsFull = $( list.prevAll().toArray().reverse() ),
				nodeEls = nodeElsFull.length ? nodeElsFull : $( "<span>" + $.trim(parent.contents()[ 0 ].nodeValue) + "</span>" ),
				title = nodeEls.first().getEncodedText(),//url limits to first 30 chars of text
				id = ( parentUrl || "" ) + "&" + $.mobile.subPageUrlKey + "=" + listId,
				theme = list.jqmData( "theme" ) || o.theme,
				countTheme = list.jqmData( "counttheme" ) || parentList.jqmData( "counttheme" ) || o.countTheme,
				newPage, anchor;

			//define hasSubPages for use in later removal
			hasSubPages = true;

			newPage = list.detach()
						.wrap( "<div " + dns + "role='page' " + dns + "url='" + id + "' " + dns + "theme='" + theme + "' " + dns + "count-theme='" + countTheme + "'><div " + dns + "role='content'></div></div>" )
						.parent()
							.before( "<div " + dns + "role='header' " + dns + "theme='" + o.headerTheme + "'><div class='ui-title'>" + title + "</div></div>" )
							.after( persistentFooterID ? $( "<div " + dns + "role='footer' " + dns + "id='"+ persistentFooterID +"'>" ) : "" )
							.parent()
								.appendTo( $.mobile.pageContainer );

			newPage.page();

			anchor = parent.find( 'a:first' );

			if ( !anchor.length ) {
				anchor = $( "<a/>" ).html( nodeEls || title ).prependTo( parent.empty() );
			}

			anchor.attr( "href", "#" + id );

		}).listview();

		// on pagehide, remove any nested pages along with the parent page, as long as they aren't active
		// and aren't embedded
		if ( hasSubPages &&
			parentPage.is( ":jqmData(external-page='true')" ) &&
			parentPage.data( "mobile-page" ).options.domCache === false ) {

			var newRemove = function( e, ui ) {
				var nextPage = ui.nextPage, npURL,
					prEvent = new $.Event( "pageremove" );

				if ( ui.nextPage ) {
					npURL = nextPage.jqmData( "url" );
					if ( npURL.indexOf( parentUrl + "&" + $.mobile.subPageUrlKey ) !== 0 ) {
						self.childPages().remove();
						parentPage.trigger( prEvent );
						if ( !prEvent.isDefaultPrevented() ) {
							parentPage.removeWithDependents();
						}
					}
				}
			};

			// unbind the original page remove and replace with our specialized version
			parentPage
				.unbind( "pagehide.remove" )
				.bind( "pagehide.remove", newRemove);
		}
	},

	// TODO sort out a better way to track sub pages of the listview this is brittle
	childPages: function() {
		var parentUrl = this.parentPage.jqmData( "url" );

		return $( ":jqmData(url^='"+  parentUrl + "&" + $.mobile.subPageUrlKey + "')" );
	}
}, $.mobile.behaviors.addFirstLastClasses ) );

//auto self-init widgets
$.mobile.document.bind( "pagecreate create", function( e ) {
	$.mobile.listview.prototype.enhanceWithin( e.target );
});

})( jQuery );

(function( $ ) {
	var	meta = $( "meta[name=viewport]" ),
		initialContent = meta.attr( "content" ),
		disabledZoom = initialContent + ",maximum-scale=1, user-scalable=no",
		enabledZoom = initialContent + ",maximum-scale=10, user-scalable=yes",
		disabledInitially = /(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test( initialContent );

	$.mobile.zoom = $.extend( {}, {
		enabled: !disabledInitially,
		locked: false,
		disable: function( lock ) {
			if ( !disabledInitially && !$.mobile.zoom.locked ) {
				meta.attr( "content", disabledZoom );
				$.mobile.zoom.enabled = false;
				$.mobile.zoom.locked = lock || false;
			}
		},
		enable: function( unlock ) {
			if ( !disabledInitially && ( !$.mobile.zoom.locked || unlock === true ) ) {
				meta.attr( "content", enabledZoom );
				$.mobile.zoom.enabled = true;
				$.mobile.zoom.locked = false;
			}
		},
		restore: function() {
			if ( !disabledInitially ) {
				meta.attr( "content", initialContent );
				$.mobile.zoom.enabled = true;
			}
		}
	});

}( jQuery ));

(function( $, undefined ) {

$.widget( "mobile.textinput", $.mobile.widget, {
	options: {
		theme: null,
		mini: false,
		// This option defaults to true on iOS devices.
		preventFocusZoom: /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1,
		initSelector: "input[type='text'], input[type='search'], :jqmData(type='search'), input[type='number'], :jqmData(type='number'), input[type='password'], input[type='email'], input[type='url'], input[type='tel'], textarea, input[type='time'], input[type='date'], input[type='month'], input[type='week'], input[type='datetime'], input[type='datetime-local'], input[type='color'], input:not([type]), input[type='file']",
		clearBtn: false,
		clearSearchButtonText: null, //deprecating for 1.3...
		clearBtnText: "clear text",
		disabled: false
	},

	_create: function() {

		var self = this,
			input = this.element,
			o = this.options,
			theme = o.theme || $.mobile.getInheritedTheme( this.element, "c" ),
			themeclass  = " ui-body-" + theme,
			miniclass = o.mini ? " ui-mini" : "",
			isSearch = input.is( "[type='search'], :jqmData(type='search')" ),
			focusedEl,
			clearbtn,
			clearBtnText = o.clearSearchButtonText || o.clearBtnText,
			clearBtnBlacklist = input.is( "textarea, :jqmData(type='range')" ),
			inputNeedsClearBtn = !!o.clearBtn && !clearBtnBlacklist,
			inputNeedsWrap = input.is( "input" ) && !input.is( ":jqmData(type='range')" );

		function toggleClear() {
			setTimeout( function() {
				clearbtn.toggleClass( "ui-input-clear-hidden", !input.val() );
			}, 0 );
		}

		$( "label[for='" + input.attr( "id" ) + "']" ).addClass( "ui-input-text" );

		focusedEl = input.addClass( "ui-input-text ui-body-"+ theme );

		// XXX: Temporary workaround for issue 785 (Apple bug 8910589).
		//      Turn off autocorrect and autocomplete on non-iOS 5 devices
		//      since the popup they use can't be dismissed by the user. Note
		//      that we test for the presence of the feature by looking for
		//      the autocorrect property on the input element. We currently
		//      have no test for iOS 5 or newer so we're temporarily using
		//      the touchOverflow support flag for jQM 1.0. Yes, I feel dirty. - jblas
		if ( typeof input[0].autocorrect !== "undefined" && !$.support.touchOverflow ) {
			// Set the attribute instead of the property just in case there
			// is code that attempts to make modifications via HTML.
			input[0].setAttribute( "autocorrect", "off" );
			input[0].setAttribute( "autocomplete", "off" );
		}

		//"search" and "text" input widgets
		if ( isSearch ) {
			focusedEl = input.wrap( "<div class='ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield" + themeclass + miniclass + "'></div>" ).parent();
		} else if ( inputNeedsWrap ) {
			focusedEl = input.wrap( "<div class='ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow" + themeclass + miniclass + "'></div>" ).parent();
		}

		if( inputNeedsClearBtn || isSearch ) {
			clearbtn = $( "<a href='#' class='ui-input-clear' title='" + clearBtnText + "'>" + clearBtnText + "</a>" )
				.bind( "click", function( event ) {
					input
						.val( "" )
						.focus()
						.trigger( "change" );
					clearbtn.addClass( "ui-input-clear-hidden" );
					event.preventDefault();
				})
				.appendTo( focusedEl )
				.buttonMarkup({
					icon: "delete",
					iconpos: "notext",
					corners: true,
					shadow: true,
					mini: o.mini
				});
				
			if ( !isSearch ) {
				focusedEl.addClass( "ui-input-has-clear" );
			}

			toggleClear();

			input.bind( "paste cut keyup input focus change blur", toggleClear );
		}
		else if ( !inputNeedsWrap && !isSearch ) {
			input.addClass( "ui-corner-all ui-shadow-inset" + themeclass + miniclass );
		}

		input.focus(function() {
				// In many situations, iOS will zoom into the input upon tap, this prevents that from happening
				if ( o.preventFocusZoom ) {
					$.mobile.zoom.disable( true );
				}			
				focusedEl.addClass( $.mobile.focusClass );
			})
			.blur(function() {
				focusedEl.removeClass( $.mobile.focusClass );
				if ( o.preventFocusZoom ) {
					$.mobile.zoom.enable( true );
				}				
			});

		// Autogrow
		if ( input.is( "textarea" ) ) {
			var extraLineHeight = 15,
				keyupTimeoutBuffer = 100,
				keyupTimeout;

			this._keyup = function() {
				var scrollHeight = input[ 0 ].scrollHeight,
					clientHeight = input[ 0 ].clientHeight;

				if ( clientHeight < scrollHeight ) {
					var paddingTop = parseFloat( input.css( "padding-top" ) ),
						paddingBottom = parseFloat( input.css( "padding-bottom" ) ),
						paddingHeight = paddingTop + paddingBottom;
					
					input.height( scrollHeight - paddingHeight + extraLineHeight );
				}
			};

			input.on( "keyup change input paste", function() {
				clearTimeout( keyupTimeout );
				keyupTimeout = setTimeout( self._keyup, keyupTimeoutBuffer );
			});

			// binding to pagechange here ensures that for pages loaded via
			// ajax the height is recalculated without user input
			this._on( true, $.mobile.document, { "pagechange": "_keyup" });

			// Issue 509: the browser is not providing scrollHeight properly until the styles load
			if ( $.trim( input.val() ) ) {
				// bind to the window load to make sure the height is calculated based on BOTH
				// the DOM and CSS
				this._on( true, $.mobile.window, {"load": "_keyup"});
			}
		}
		if ( input.attr( "disabled" ) ) {
			this.disable();
		}
	},

	disable: function() {
		var $el,
			isSearch = this.element.is( "[type='search'], :jqmData(type='search')" ),
			inputNeedsWrap = this.element.is( "input" ) && !this.element.is( ":jqmData(type='range')" ),
			parentNeedsDisabled = this.element.attr( "disabled", true )	&& ( inputNeedsWrap || isSearch );
			
		if ( parentNeedsDisabled ) {
			$el = this.element.parent();
		} else {
			$el = this.element;
		}
		$el.addClass( "ui-disabled" );
		return this._setOption( "disabled", true );
	},

	enable: function() {
		var $el,
			isSearch = this.element.is( "[type='search'], :jqmData(type='search')" ),
			inputNeedsWrap = this.element.is( "input" ) && !this.element.is( ":jqmData(type='range')" ),
			parentNeedsEnabled = this.element.attr( "disabled", false )	&& ( inputNeedsWrap || isSearch );

		if ( parentNeedsEnabled ) {
			$el = this.element.parent();
		} else {
			$el = this.element;
		}
		$el.removeClass( "ui-disabled" );
		return this._setOption( "disabled", false );
	}
});

//auto self-init widgets
$.mobile.document.bind( "pagecreate create", function( e ) {
	$.mobile.textinput.prototype.enhanceWithin( e.target, true );
});

})( jQuery );

(function( $, undefined ) {

$.mobile.listview.prototype.options.filter = false;
$.mobile.listview.prototype.options.filterPlaceholder = "Filter items...";
$.mobile.listview.prototype.options.filterTheme = "c";
$.mobile.listview.prototype.options.filterReveal = false;
// TODO rename callback/deprecate and default to the item itself as the first argument
var defaultFilterCallback = function( text, searchValue, item ) {
		return text.toString().toLowerCase().indexOf( searchValue ) === -1;
	};

$.mobile.listview.prototype.options.filterCallback = defaultFilterCallback;

$.mobile.document.delegate( "ul, ol", "listviewcreate", function() {
	var list = $( this ),
		listview = list.data( "mobile-listview" );

	if ( !listview || !listview.options.filter ) {
		return;
	}

	if ( listview.options.filterReveal ) {
		list.children().addClass( "ui-screen-hidden" );
	}

	var wrapper = $( "<form>", {
			"class": "ui-listview-filter ui-bar-" + listview.options.filterTheme,
			"role": "search"
		}).submit( function( e ) {
			e.preventDefault();
			search.blur();
		}),
		onKeyUp = function( e ) {
			var $this = $( this ),
				val = this.value.toLowerCase(),
				listItems = null,
				li = list.children(),
				lastval = $this.jqmData( "lastval" ) + "",
				childItems = false,
				itemtext = "",
				item,
				// Check if a custom filter callback applies
				isCustomFilterCallback = listview.options.filterCallback !== defaultFilterCallback;

			if ( lastval && lastval === val ) {
				// Execute the handler only once per value change
				return;
			}

			listview._trigger( "beforefilter", "beforefilter", { input: this } );

			// Change val as lastval for next execution
			$this.jqmData( "lastval" , val );
			if ( isCustomFilterCallback || val.length < lastval.length || val.indexOf( lastval ) !== 0 ) {

				// Custom filter callback applies or removed chars or pasted something totally different, check all items
				listItems = list.children();
			} else {

				// Only chars added, not removed, only use visible subset
				listItems = list.children( ":not(.ui-screen-hidden)" );

				if ( !listItems.length && listview.options.filterReveal ) {
					listItems = list.children( ".ui-screen-hidden" );
				}
			}

			if ( val ) {

				// This handles hiding regular rows without the text we search for
				// and any list dividers without regular rows shown under it

				for ( var i = listItems.length - 1; i >= 0; i-- ) {
					item = $( listItems[ i ] );
					itemtext = item.jqmData( "filtertext" ) || item.text();

					if ( item.is( "li:jqmData(role=list-divider)" ) ) {

						item.toggleClass( "ui-filter-hidequeue" , !childItems );

						// New bucket!
						childItems = false;

					} else if ( listview.options.filterCallback( itemtext, val, item ) ) {

						//mark to be hidden
						item.toggleClass( "ui-filter-hidequeue" , true );
					} else {

						// There's a shown item in the bucket
						childItems = true;
					}
				}

				// Show items, not marked to be hidden
				listItems
					.filter( ":not(.ui-filter-hidequeue)" )
					.toggleClass( "ui-screen-hidden", false );

				// Hide items, marked to be hidden
				listItems
					.filter( ".ui-filter-hidequeue" )
					.toggleClass( "ui-screen-hidden", true )
					.toggleClass( "ui-filter-hidequeue", false );

			} else {

				//filtervalue is empty => show all
				listItems.toggleClass( "ui-screen-hidden", !!listview.options.filterReveal );
			}
			listview._addFirstLastClasses( li, listview._getVisibles( li, false ), false );
		},
		search = $( "<input>", {
			placeholder: listview.options.filterPlaceholder
		})
		.attr( "data-" + $.mobile.ns + "type", "search" )
		.jqmData( "lastval", "" )
		.bind( "keyup change input", onKeyUp )
		.appendTo( wrapper )
		.textinput();

	if ( listview.options.inset ) {
		wrapper.addClass( "ui-listview-filter-inset" );
	}

	wrapper.bind( "submit", function() {
		return false;
	})
	.insertBefore( list );
});

})( jQuery );

(function( $, undefined ) {

$.mobile.listview.prototype.options.autodividers = false;
$.mobile.listview.prototype.options.autodividersSelector = function( elt ) {
	// look for the text in the given element
	var text = $.trim( elt.text() ) || null;

	if ( !text ) {
		return null;
	}

	// create the text for the divider (first uppercased letter)
	text = text.slice( 0, 1 ).toUpperCase();

	return text;
};

$.mobile.document.delegate( "ul,ol", "listviewcreate", function() {

	var list = $( this ),
			listview = list.data( "mobile-listview" );

	if ( !listview || !listview.options.autodividers ) {
		return;
	}

	var replaceDividers = function () {
		list.find( "li:jqmData(role='list-divider')" ).remove();

		var lis = list.find( 'li' ),
			lastDividerText = null, li, dividerText;

		for ( var i = 0; i < lis.length ; i++ ) {
			li = lis[i];
			dividerText = listview.options.autodividersSelector( $( li ) );

			if ( dividerText && lastDividerText !== dividerText ) {
				var divider = document.createElement( 'li' );
				divider.appendChild( document.createTextNode( dividerText ) );
				divider.setAttribute( 'data-' + $.mobile.ns + 'role', 'list-divider' );
				li.parentNode.insertBefore( divider, li );
			}

			lastDividerText = dividerText;
		}
	};

	var afterListviewRefresh = function () {
		list.unbind( 'listviewafterrefresh', afterListviewRefresh );
		replaceDividers();
		listview.refresh();
		list.bind( 'listviewafterrefresh', afterListviewRefresh );
	};

	afterListviewRefresh();
});

})( jQuery );

(function( $, undefined ) {

$( document ).bind( "pagecreate create", function( e ) {
	$( ":jqmData(role='nojs')", e.target ).addClass( "ui-nojs" );
	
});

})( jQuery );

(function( $, undefined ) {

$.mobile.behaviors.formReset = {
	_handleFormReset: function() {
		this._on( this.element.closest( "form" ), {
			reset: function() {
				this._delay( "_reset" );
			}
		});
	}
};

})( jQuery );

/*
* "checkboxradio" plugin
*/

(function( $, undefined ) {

$.widget( "mobile.checkboxradio", $.mobile.widget, $.extend( {
	options: {
		theme: null,
		mini: false,
		initSelector: "input[type='checkbox'],input[type='radio']"
	},
	_create: function() {
		var self = this,
			input = this.element,
			o = this.options,
			inheritAttr = function( input, dataAttr ) {
				return input.jqmData( dataAttr ) || input.closest( "form, fieldset" ).jqmData( dataAttr );
			},
			// NOTE: Windows Phone could not find the label through a selector
			// filter works though.
			parentLabel = $( input ).closest( "label" ),
			label = parentLabel.length ? parentLabel : $( input ).closest( "form, fieldset, :jqmData(role='page'), :jqmData(role='dialog')" ).find( "label" ).filter( "[for='" + input[0].id + "']" ).first(),
			inputtype = input[0].type,
			mini = inheritAttr( input, "mini" ) || o.mini,
			checkedState = inputtype + "-on",
			uncheckedState = inputtype + "-off",
			iconpos = inheritAttr( input, "iconpos" ),
			checkedClass = "ui-" + checkedState,
			uncheckedClass = "ui-" + uncheckedState;

		if ( inputtype !== "checkbox" && inputtype !== "radio" ) {
			return;
		}

		// Expose for other methods
		$.extend( this, {
			label: label,
			inputtype: inputtype,
			checkedClass: checkedClass,
			uncheckedClass: uncheckedClass,
			checkedicon: checkedState,
			uncheckedicon: uncheckedState
		});

		// If there's no selected theme check the data attr
		if ( !o.theme ) {
			o.theme = $.mobile.getInheritedTheme( this.element, "c" );
		}

		label.buttonMarkup({
			theme: o.theme,
			icon: uncheckedState,
			shadow: false,
			mini: mini,
			iconpos: iconpos
		});

		// Wrap the input + label in a div
		var wrapper = document.createElement('div');
		wrapper.className = 'ui-' + inputtype;

		input.add( label ).wrapAll( wrapper );

		label.bind({
			vmouseover: function( event ) {
				if ( $( this ).parent().is( ".ui-disabled" ) ) {
					event.stopPropagation();
				}
			},

			vclick: function( event ) {
				if ( input.is( ":disabled" ) ) {
					event.preventDefault();
					return;
				}

				self._cacheVals();

				input.prop( "checked", inputtype === "radio" && true || !input.prop( "checked" ) );

				// trigger click handler's bound directly to the input as a substitute for
				// how label clicks behave normally in the browsers
				// TODO: it would be nice to let the browser's handle the clicks and pass them
				//       through to the associate input. we can swallow that click at the parent
				//       wrapper element level
				input.triggerHandler( 'click' );

				// Input set for common radio buttons will contain all the radio
				// buttons, but will not for checkboxes. clearing the checked status
				// of other radios ensures the active button state is applied properly
				self._getInputSet().not( input ).prop( "checked", false );

				self._updateAll();
				return false;
			}
		});

		input
			.bind({
				vmousedown: function() {
					self._cacheVals();
				},

				vclick: function() {
					var $this = $( this );

					// Adds checked attribute to checked input when keyboard is used
					if ( $this.is( ":checked" ) ) {

						$this.prop( "checked", true);
						self._getInputSet().not( $this ).prop( "checked", false );
					} else {

						$this.prop( "checked", false );
					}

					self._updateAll();
				},

				focus: function() {
					label.addClass( $.mobile.focusClass );
				},

				blur: function() {
					label.removeClass( $.mobile.focusClass );
				}
			});

		this._handleFormReset();
		this.refresh();
	},

	_cacheVals: function() {
		this._getInputSet().each(function() {
			$( this ).jqmData( "cacheVal", this.checked );
		});
	},

	//returns either a set of radios with the same name attribute, or a single checkbox
	_getInputSet: function() {
		if ( this.inputtype === "checkbox" ) {
			return this.element;
		}

		return this.element.closest( "form, :jqmData(role='page'), :jqmData(role='dialog')" )
			.find( "input[name='" + this.element[0].name + "'][type='" + this.inputtype + "']" );
	},

	_updateAll: function() {
		var self = this;

		this._getInputSet().each(function() {
			var $this = $( this );

			if ( this.checked || self.inputtype === "checkbox" ) {
				$this.trigger( "change" );
			}
		})
		.checkboxradio( "refresh" );
	},

	_reset: function() {
		this.refresh();
	},

	refresh: function() {
		var input = this.element[ 0 ],
			active = " " + $.mobile.activeBtnClass,
			checkedClass = this.checkedClass + ( this.element.parents( ".ui-controlgroup-horizontal" ).length ? active : "" ),
			label = this.label;

		if ( input.checked ) {
			label.removeClass( this.uncheckedClass + active ).addClass( checkedClass ).buttonMarkup( { icon: this.checkedicon } );
		} else {
			label.removeClass( checkedClass ).addClass( this.uncheckedClass ).buttonMarkup( { icon: this.uncheckedicon } );
		}

		if ( input.disabled ) {
			this.disable();
		} else {
			this.enable();
		}
	},

	disable: function() {
		this.element.prop( "disabled", true ).parent().addClass( "ui-disabled" );
	},

	enable: function() {
		this.element.prop( "disabled", false ).parent().removeClass( "ui-disabled" );
	}
}, $.mobile.behaviors.formReset ) );

//auto self-init widgets
$.mobile.document.bind( "pagecreate create", function( e ) {
	$.mobile.checkboxradio.prototype.enhanceWithin( e.target, true );
});

})( jQuery );

(function( $, undefined ) {

$.widget( "mobile.button", $.mobile.widget, {
	options: {
		theme: null,
		icon: null,
		iconpos: null,
		corners: true,
		shadow: true,
		iconshadow: true,
		inline: null,
		mini: null,
		initSelector: "button, [type='button'], [type='submit'], [type='reset']"
	},
	_create: function() {
		var $el = this.element,
			$button,
			// create a copy of this.options we can pass to buttonMarkup
			o = ( function( tdo ) {
				var key, ret = {};

				for ( key in tdo ) {
					if ( tdo[ key ] !== null && key !== "initSelector" ) {
						ret[ key ] = tdo[ key ];
					}
				}

				return ret;
			} )( this.options ),
			classes = "",
			$buttonPlaceholder;

		// if this is a link, check if it's been enhanced and, if not, use the right function
		if ( $el[ 0 ].tagName === "A" ) {
			if ( !$el.hasClass( "ui-btn" ) ) {
				$el.buttonMarkup();
			}
			return;
		}

		// get the inherited theme
		// TODO centralize for all widgets
		if ( !this.options.theme ) {
			this.options.theme = $.mobile.getInheritedTheme( this.element, "c" );
		}

		// TODO: Post 1.1--once we have time to test thoroughly--any classes manually applied to the original element should be carried over to the enhanced element, with an `-enhanced` suffix. See https://github.com/jquery/jquery-mobile/issues/3577
		/* if ( $el[0].className.length ) {
			classes = $el[0].className;
		} */
		if ( !!~$el[0].className.indexOf( "ui-btn-left" ) ) {
			classes = "ui-btn-left";
		}

		if (  !!~$el[0].className.indexOf( "ui-btn-right" ) ) {
			classes = "ui-btn-right";
		}

		if (  $el.attr( "type" ) === "submit" || $el.attr( "type" ) === "reset" ) {
			if ( classes ) {
				classes += " ui-submit";
			} else {
				classes = "ui-submit";
			}
		}
		$( "label[for='" + $el.attr( "id" ) + "']" ).addClass( "ui-submit" );

		// Add ARIA role
		this.button = $( "<div></div>" )
			[ $el.html() ? "html" : "text" ]( $el.html() || $el.val() )
			.insertBefore( $el )
			.buttonMarkup( o )
			.addClass( classes )
			.append( $el.addClass( "ui-btn-hidden" ) );

        $button = this.button;

		$el.bind({
			focus: function() {
				$button.addClass( $.mobile.focusClass );
			},

			blur: function() {
				$button.removeClass( $.mobile.focusClass );
			}
		});

		this.refresh();
	},

	_setOption: function( key, value ) {
		var op = {};

		op[ key ] = value;
		if ( key !== "initSelector" ) {
			this.button.buttonMarkup( op );
			// Record the option change in the options and in the DOM data-* attributes
			this.element.attr( "data-" + ( $.mobile.ns || "" ) + ( key.replace( /([A-Z])/, "-$1" ).toLowerCase() ), value );
		}
		this._super( "_setOption", key, value );
	},

	enable: function() {
		this.element.attr( "disabled", false );
		this.button.removeClass( "ui-disabled" ).attr( "aria-disabled", false );
		return this._setOption( "disabled", false );
	},

	disable: function() {
		this.element.attr( "disabled", true );
		this.button.addClass( "ui-disabled" ).attr( "aria-disabled", true );
		return this._setOption( "disabled", true );
	},

	refresh: function() {
		var $el = this.element;

		if ( $el.prop("disabled") ) {
			this.disable();
		} else {
			this.enable();
		}

		// Grab the button's text element from its implementation-independent data item
		$( this.button.data( 'buttonElements' ).text )[ $el.html() ? "html" : "text" ]( $el.html() || $el.val() );
	}
});

//auto self-init widgets
$.mobile.document.bind( "pagecreate create", function( e ) {
	$.mobile.button.prototype.enhanceWithin( e.target, true );
});

})( jQuery );

(function( $, undefined ) {

$.widget( "mobile.slider", $.mobile.widget, $.extend( {
	widgetEventPrefix: "slide",

	options: {
		theme: null,
		trackTheme: null,
		disabled: false,
		initSelector: "input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",
		mini: false,
		highlight: false
	},

	_create: function() {

		// TODO: Each of these should have comments explain what they're for
		var self = this,
			control = this.element,
			parentTheme = $.mobile.getInheritedTheme( control, "c" ),
			theme = this.options.theme || parentTheme,
			trackTheme = this.options.trackTheme || parentTheme,
			cType = control[ 0 ].nodeName.toLowerCase(),
			isSelect = this.isToggleSwitch = cType === "select",
			isRangeslider = control.parent().is( ":jqmData(role='rangeslider')" ),
			selectClass = ( this.isToggleSwitch ) ? "ui-slider-switch" : "",
			controlID = control.attr( "id" ),
			$label = $( "[for='" + controlID + "']" ),
			labelID = $label.attr( "id" ) || controlID + "-label",
			label = $label.attr( "id", labelID ),
			min = !this.isToggleSwitch ? parseFloat( control.attr( "min" ) ) : 0,
			max =  !this.isToggleSwitch ? parseFloat( control.attr( "max" ) ) : control.find( "option" ).length-1,
			step = window.parseFloat( control.attr( "step" ) || 1 ),
			miniClass = ( this.options.mini || control.jqmData( "mini" ) ) ? " ui-mini" : "",
			domHandle = document.createElement( "a" ),
			handle = $( domHandle ),
			domSlider = document.createElement( "div" ),
			slider = $( domSlider ),
			valuebg = this.options.highlight && !this.isToggleSwitch ? (function() {
				var bg = document.createElement( "div" );
				bg.className = "ui-slider-bg " + $.mobile.activeBtnClass + " ui-btn-corner-all";
				return $( bg ).prependTo( slider );
			})() : false,
			options,
			wrapper;
			
		domHandle.setAttribute( "href", "#" );
		domSlider.setAttribute( "role", "application" );
		domSlider.className = [this.isToggleSwitch ? "ui-slider " : "ui-slider-track ",selectClass," ui-btn-down-",trackTheme," ui-btn-corner-all", miniClass].join( "" );
		domHandle.className = "ui-slider-handle";
		domSlider.appendChild( domHandle );

		handle.buttonMarkup({ corners: true, theme: theme, shadow: true })
				.attr({
					"role": "slider",
					"aria-valuemin": min,
					"aria-valuemax": max,
					"aria-valuenow": this._value(),
					"aria-valuetext": this._value(),
					"title": this._value(),
					"aria-labelledby": labelID
				});

		$.extend( this, {
			slider: slider,
			handle: handle,
			type: cType,
			step: step,
			max: max,
			min: min,
			valuebg: valuebg,
			isRangeslider: isRangeslider,
			dragging: false,
			beforeStart: null,
			userModified: false,
			mouseMoved: false
		});

		if ( this.isToggleSwitch ) {
			wrapper = document.createElement( "div" );
			wrapper.className = "ui-slider-inneroffset";

			for ( var j = 0, length = domSlider.childNodes.length; j < length; j++ ) {
				wrapper.appendChild( domSlider.childNodes[j] );
			}

			domSlider.appendChild( wrapper );

			// slider.wrapInner( "<div class='ui-slider-inneroffset'></div>" );

			// make the handle move with a smooth transition
			handle.addClass( "ui-slider-handle-snapping" );

			options = control.find( "option" );

			for ( var i = 0, optionsCount = options.length; i < optionsCount; i++ ) {
				var side = !i ? "b" : "a",
					sliderTheme = !i ? " ui-btn-down-" + trackTheme : ( " " + $.mobile.activeBtnClass ),
					sliderLabel = document.createElement( "div" ),
					sliderImg = document.createElement( "span" );

				sliderImg.className = ["ui-slider-label ui-slider-label-", side, sliderTheme, " ui-btn-corner-all"].join( "" );
				sliderImg.setAttribute( "role", "img" );
				sliderImg.appendChild( document.createTextNode( options[i].innerHTML ) );
				$( sliderImg ).prependTo( slider );
			}

			self._labels = $( ".ui-slider-label", slider );

		}

		label.addClass( "ui-slider" );
		
		// monitor the input for updated values
		control.addClass( this.isToggleSwitch ? "ui-slider-switch" : "ui-slider-input" );

		this._on( control, {
			"change": "_controlChange",
			"keyup": "_controlKeyup",
			"blur": "_controlBlur",
			"vmouseup": "_controlVMouseUp"
		});

		slider.bind( "vmousedown", $.proxy( this._sliderVMouseDown, this ) )
			.bind( "vclick", false );

		// We have to instantiate a new function object for the unbind to work properly
		// since the method itself is defined in the prototype (causing it to unbind everything)
		this._on( document, { "vmousemove": "_preventDocumentDrag" });
		this._on( slider.add( document ), { "vmouseup": "_sliderVMouseUp" });

		slider.insertAfter( control );

		// wrap in a div for styling purposes
		if ( !this.isToggleSwitch && !isRangeslider ) {
			wrapper = this.options.mini ? "<div class='ui-slider ui-mini'>" : "<div class='ui-slider'>";
			
			control.add( slider ).wrapAll( wrapper );
		}

		// Only add focus class to toggle switch, sliders get it automatically from ui-btn
		if ( this.isToggleSwitch ) {
			this.handle.bind({
				focus: function() {
					slider.addClass( $.mobile.focusClass );
				},

				blur: function() {
					slider.removeClass( $.mobile.focusClass );
				}
			});
		}

		// bind the handle event callbacks and set the context to the widget instance
		this._on( this.handle, {
			"vmousedown": "_handleVMouseDown",
			"keydown": "_handleKeydown",
			"keyup": "_handleKeyup"
		});

		this.handle.bind( "vclick", false );

		this._handleFormReset();

		this.refresh( undefined, undefined, true );
	},

	_controlChange: function( event ) {
		// if the user dragged the handle, the "change" event was triggered from inside refresh(); don't call refresh() again
		if ( this._trigger( "controlchange", event ) === false ) {
			return false;
		}
		if ( !this.mouseMoved ) {
			this.refresh( this._value(), true );
		}
	},

	_controlKeyup: function( event ) { // necessary?
		this.refresh( this._value(), true, true );
	},

	_controlBlur: function( event ) {
		this.refresh( this._value(), true );
	},

	// it appears the clicking the up and down buttons in chrome on
	// range/number inputs doesn't trigger a change until the field is
	// blurred. Here we check thif the value has changed and refresh
	_controlVMouseUp: function( event ) {
		this._checkedRefresh();
	},

	// NOTE force focus on handle
	_handleVMouseDown: function( event ) {
		this.handle.focus();
	},

	_handleKeydown: function( event ) {
		var index = this._value();
		if ( this.options.disabled ) {
			return;
		}

		// In all cases prevent the default and mark the handle as active
		switch ( event.keyCode ) {
			case $.mobile.keyCode.HOME:
			case $.mobile.keyCode.END:
			case $.mobile.keyCode.PAGE_UP:
			case $.mobile.keyCode.PAGE_DOWN:
			case $.mobile.keyCode.UP:
			case $.mobile.keyCode.RIGHT:
			case $.mobile.keyCode.DOWN:
			case $.mobile.keyCode.LEFT:
				event.preventDefault();

				if ( !this._keySliding ) {
					this._keySliding = true;
					this.handle.addClass( "ui-state-active" );
				}

				break;
		}

		// move the slider according to the keypress
		switch ( event.keyCode ) {
			case $.mobile.keyCode.HOME:
				this.refresh( this.min );
				break;
			case $.mobile.keyCode.END:
				this.refresh( this.max );
				break;
			case $.mobile.keyCode.PAGE_UP:
			case $.mobile.keyCode.UP:
			case $.mobile.keyCode.RIGHT:
				this.refresh( index + this.step );
				break;
			case $.mobile.keyCode.PAGE_DOWN:
			case $.mobile.keyCode.DOWN:
			case $.mobile.keyCode.LEFT:
				this.refresh( index - this.step );
				break;
		}
	}, // remove active mark

	_handleKeyup: function( event ) {
		if ( this._keySliding ) {
			this._keySliding = false;
			this.handle.removeClass( "ui-state-active" );
		}
	},

	_sliderVMouseDown: function( event ) {
		// NOTE: we don't do this in refresh because we still want to
		//       support programmatic alteration of disabled inputs
		if ( this.options.disabled || !( event.which === 1 || event.which === 0 ) ) {
			return false;
		}
		if ( this._trigger( "beforestart", event ) === false ) {
			return false;
		}
		this.dragging = true;
		this.userModified = false;
		this.mouseMoved = false;

		if ( this.isToggleSwitch ) {
			this.beforeStart = this.element[0].selectedIndex;
		}

		
		this.refresh( event );
		this._trigger( "start" );
		return false;
	},

	_sliderVMouseUp: function() {
		if ( this.dragging ) {
			this.dragging = false;

			if ( this.isToggleSwitch ) {
				// make the handle move with a smooth transition
				this.handle.addClass( "ui-slider-handle-snapping" );

				if ( this.mouseMoved ) {
					// this is a drag, change the value only if user dragged enough
					if ( this.userModified ) {
						this.refresh( this.beforeStart === 0 ? 1 : 0 );
					} else {
						this.refresh( this.beforeStart );
					}
				} else {
					// this is just a click, change the value
					this.refresh( this.beforeStart === 0 ? 1 : 0 );
				}
			}

			this.mouseMoved = false;
			this._trigger( "stop" );
			return false;
		}
	},

	_preventDocumentDrag: function( event ) {
			// NOTE: we don't do this in refresh because we still want to
			//       support programmatic alteration of disabled inputs
			if ( this._trigger( "drag", event ) === false) {
				return false;
			}
			if ( this.dragging && !this.options.disabled ) {
				
				// this.mouseMoved must be updated before refresh() because it will be used in the control "change" event
				this.mouseMoved = true;

				if ( this.isToggleSwitch ) {
					// make the handle move in sync with the mouse
					this.handle.removeClass( "ui-slider-handle-snapping" );
				}
				
				this.refresh( event );

				// only after refresh() you can calculate this.userModified
				this.userModified = this.beforeStart !== this.element[0].selectedIndex;
				return false;
			}
		},

	_checkedRefresh: function() {
		if ( this.value !== this._value() ) {
			this.refresh( this._value() );
		}
	},

	_value: function() {
		return  this.isToggleSwitch ? this.element[0].selectedIndex : parseFloat( this.element.val() ) ;
	},


	_reset: function() {
		this.refresh( undefined, false, true );
	},

	refresh: function( val, isfromControl, preventInputUpdate ) {
		// NOTE: we don't return here because we want to support programmatic
		//       alteration of the input value, which should still update the slider
		
		var self = this,
			parentTheme = $.mobile.getInheritedTheme( this.element, "c" ),
			theme = this.options.theme || parentTheme,
			trackTheme = this.options.trackTheme || parentTheme,
			left, width, data, tol;

		self.slider[0].className = [ this.isToggleSwitch ? "ui-slider ui-slider-switch" : "ui-slider-track"," ui-btn-down-" + trackTheme,' ui-btn-corner-all', ( this.options.mini ) ? " ui-mini":""].join( "" );
		if ( this.options.disabled || this.element.attr( "disabled" ) ) {
			this.disable();
		}

		// set the stored value for comparison later
		this.value = this._value();
		if ( this.options.highlight && !this.isToggleSwitch && this.slider.find( ".ui-slider-bg" ).length === 0 ) {
			this.valuebg = (function() {
				var bg = document.createElement( "div" );
				bg.className = "ui-slider-bg " + $.mobile.activeBtnClass + " ui-btn-corner-all";
				return $( bg ).prependTo( self.slider );
			})();
		}
		this.handle.buttonMarkup({ corners: true, theme: theme, shadow: true });

		var pxStep, percent,
			control = this.element,
			isInput = !this.isToggleSwitch,
			optionElements = isInput ? [] : control.find( "option" ),
			min =  isInput ? parseFloat( control.attr( "min" ) ) : 0,
			max = isInput ? parseFloat( control.attr( "max" ) ) : optionElements.length - 1,
			step = ( isInput && parseFloat( control.attr( "step" ) ) > 0 ) ? parseFloat( control.attr( "step" ) ) : 1;
			
		if ( typeof val === "object" ) {
			data = val;
			// a slight tolerance helped get to the ends of the slider
			tol = 8;

			left = this.slider.offset().left;
			width = this.slider.width();
			pxStep = width/((max-min)/step);
			if ( !this.dragging ||
					data.pageX < left - tol ||
					data.pageX > left + width + tol ) {
				return;
			}
			if ( pxStep > 1 ) {
				percent = ( ( data.pageX - left ) / width ) * 100;
			} else {
				percent = Math.round( ( ( data.pageX - left ) / width ) * 100 );
			}
		} else {
			if ( val == null ) {
				val = isInput ? parseFloat( control.val() || 0 ) : control[0].selectedIndex;
			}
			percent = ( parseFloat( val ) - min ) / ( max - min ) * 100;
		}

		if ( isNaN( percent ) ) {
			return;
		}

		var newval = ( percent / 100 ) * ( max - min ) + min;

		//from jQuery UI slider, the following source will round to the nearest step
		var valModStep = ( newval - min ) % step;
		var alignValue = newval - valModStep;

		if ( Math.abs( valModStep ) * 2 >= step ) {
			alignValue += ( valModStep > 0 ) ? step : ( -step );
		}

		var percentPerStep = 100/((max-min)/step);
		// Since JavaScript has problems with large floats, round
		// the final value to 5 digits after the decimal point (see jQueryUI: #4124)
		newval = parseFloat( alignValue.toFixed(5) );

		if ( typeof pxStep === "undefined" ) {
			pxStep = width / ( (max-min) / step );
		}
		if ( pxStep > 1 && isInput ) {
			percent = ( newval - min ) * percentPerStep * ( 1 / step );
		}
		if ( percent < 0 ) {
			percent = 0;
		}

		if ( percent > 100 ) {
			percent = 100;
		}

		if ( newval < min ) {
			newval = min;
		}

		if ( newval > max ) {
			newval = max;
		}

		this.handle.css( "left", percent + "%" );

		this.handle[0].setAttribute( "aria-valuenow", isInput ? newval : optionElements.eq( newval ).attr( "value" ) );

		this.handle[0].setAttribute( "aria-valuetext", isInput ? newval : optionElements.eq( newval ).getEncodedText() );

		this.handle[0].setAttribute( "title", isInput ? newval : optionElements.eq( newval ).getEncodedText() );

		if ( this.valuebg ) {
			this.valuebg.css( "width", percent + "%" );
		}

		// drag the label widths
		if ( this._labels ) {
			var handlePercent = this.handle.width() / this.slider.width() * 100,
				aPercent = percent && handlePercent + ( 100 - handlePercent ) * percent / 100,
				bPercent = percent === 100 ? 0 : Math.min( handlePercent + 100 - aPercent, 100 );

			this._labels.each(function() {
				var ab = $( this ).is( ".ui-slider-label-a" );
				$( this ).width( ( ab ? aPercent : bPercent  ) + "%" );
			});
		}

		if ( !preventInputUpdate ) {
			var valueChanged = false;

			// update control"s value
			if ( isInput ) {
				valueChanged = control.val() !== newval;
				control.val( newval );
			} else {
				valueChanged = control[ 0 ].selectedIndex !== newval;
				control[ 0 ].selectedIndex = newval;
			}
			if ( this._trigger( "beforechange", val ) === false) {
					return false;
			}
			if ( !isfromControl && valueChanged ) {
				control.trigger( "change" );
			}
		}
	},

	enable: function() {
		this.element.attr( "disabled", false );
		this.slider.removeClass( "ui-disabled" ).attr( "aria-disabled", false );
		return this._setOption( "disabled", false );
	},

	disable: function() {
		this.element.attr( "disabled", true );
		this.slider.addClass( "ui-disabled" ).attr( "aria-disabled", true );
		return this._setOption( "disabled", true );
	}

}, $.mobile.behaviors.formReset ) );

//auto self-init widgets
$.mobile.document.bind( "pagecreate create", function( e ) {
	$.mobile.slider.prototype.enhanceWithin( e.target, true );
});

})( jQuery );

(function( $, undefined ) {
	$.widget( "mobile.rangeslider", $.mobile.widget, {

		options: {
			theme: null,
			trackTheme: null,
			disabled: false,
			initSelector: ":jqmData(role='rangeslider')",
			mini: false,
			highlight: true
		},

		_create: function() {
			var secondLabel,
			$el = this.element,
			elClass = this.options.mini ? "ui-rangeslider ui-mini" : "ui-rangeslider",
			_inputFirst = $el.find( "input" ).first(),
			_inputLast = $el.find( "input" ).last(),
			label = $el.find( "label" ).first(),
			_sliderFirst = $.data( _inputFirst.get(0), "mobileSlider" ).slider,
			_sliderLast = $.data( _inputLast.get(0), "mobileSlider" ).slider,
			firstHandle = $.data( _inputFirst.get(0), "mobileSlider" ).handle,
			_sliders = $( "<div class=\"ui-rangeslider-sliders\" />" ).appendTo( $el );
			
			if ( $el.find( "label" ).length > 1 ) {
				secondLabel = $el.find( "label" ).last().hide();
			}

			_inputFirst.addClass( "ui-rangeslider-first" );
			_inputLast.addClass( "ui-rangeslider-last" );
			$el.addClass( elClass );
			
			_sliderFirst.appendTo( _sliders );
			_sliderLast.appendTo( _sliders );
			label.prependTo( $el );
			firstHandle.prependTo( _sliderLast );

			$.extend( this, {
				_inputFirst: _inputFirst,
				_inputLast: _inputLast,
				_sliderFirst: _sliderFirst,
				_sliderLast: _sliderLast,
				_targetVal: null,
				_sliderTarget: false,
				_sliders: _sliders,
				_proxy: false
			});
			
			this.refresh();
			this._on( this.element.find( "input.ui-slider-input" ), {
				"slidebeforestart": "_slidebeforestart",
				"slidestop": "_slidestop",
				"slidedrag": "_slidedrag",
				"slidebeforechange": "_change",
				"blur": "_change",
				"keyup": "_change"
			});
			this._on({
				"mousedown":"_change"
			});
			this._on( this.element.closest( "form" ), {
				"reset":"_handleReset"
			});
			this._on( firstHandle, {
				"vmousedown": "_dragFirstHandle"
			});
		},
		_handleReset: function(){
			var self = this;
			//we must wait for the stack to unwind before updateing other wise sliders will not have updated yet
			setTimeout( function(){
				self._updateHighlight();
			},0);
		},

		_dragFirstHandle: function( event ) {
			//if the first handle is dragged send the event to the first slider
			$.data( this._inputFirst.get(0), "mobileSlider" ).dragging = true;
			$.data( this._inputFirst.get(0), "mobileSlider" ).refresh( event );
			return false;
		},

		_slidedrag: function( event ) {
			var first = $( event.target ).is( this._inputFirst ),
				otherSlider = ( first ) ? this._inputLast : this._inputFirst;

			this._sliderTarget = false;
			//if the drag was initiated on an extreme and the other handle is focused send the events to
			//the closest handle
			if ( ( this._proxy === "first" && first ) || ( this._proxy === "last" && !first ) ) {
				$.data( otherSlider.get(0), "mobileSlider" ).dragging = true;
				$.data( otherSlider.get(0), "mobileSlider" ).refresh( event );
				return false;
			}
		},

		_slidestop: function( event ) {
			var first = $( event.target ).is( this._inputFirst );
			
			this._proxy = false;
			//this stops dragging of the handle and brings the active track to the front 
			//this makes clicks on the track go the the last handle used
			this.element.find( "input" ).trigger( "vmouseup" );
			this._sliderFirst.css( "z-index", first ? 1 : "" );
		},

		_slidebeforestart: function( event ) {
			this._sliderTarget = false;
			//if the track is the target remember this and the original value
			if ( $( event.originalEvent.target ).hasClass( "ui-slider-track" ) ) {
				this._sliderTarget = true;
				this._targetVal = $( event.target ).val();
			}
		},

		_setOption: function( options ) {
			this._superApply( options );
			this.refresh();
		},

		refresh: function() {
			var $el = this.element,
				o = this.options;

			$el.find( "input" ).slider({
				theme: o.theme,
				trackTheme: o.trackTheme,
				disabled: o.disabled,
				mini: o.mini,
				highlight: o.highlight
			}).slider( "refresh" );
			this._updateHighlight();
		},

		_change: function( event ) {
			if ( event.type === "keyup" ) {
				this._updateHighlight();
				return false;
			}

			var self = this,
				min = parseFloat( this._inputFirst.val(), 10 ),
				max = parseFloat( this._inputLast.val(), 10 ),
				first = $( event.target ).hasClass( "ui-rangeslider-first" ),
				thisSlider = first ? this._inputFirst : this._inputLast,
				otherSlider = first ? this._inputLast : this._inputFirst;
			
			
			if( ( this._inputFirst.val() > this._inputLast.val() && event.type === "mousedown" && !$(event.target).hasClass("ui-slider-handle")) ){
				thisSlider.blur();
			} else if( event.type === "mousedown" ){
				return;
			}
			if ( min > max && !this._sliderTarget ) {
				//this prevents min from being greater then max
				thisSlider.val( first ? max: min ).slider( "refresh" );
				this._trigger( "normalize" );
			} else if ( min > max ) {
				//this makes it so clicks on the target on either extreme go to the closest handle
				thisSlider.val( this._targetVal ).slider( "refresh" );

				//You must wait for the stack to unwind so first slider is updated before updating second
				setTimeout( function() {
					otherSlider.val( first ? min: max ).slider( "refresh" );
					$.data( otherSlider.get(0), "mobileSlider" ).handle.focus();
					self._sliderFirst.css( "z-index", first ? "" : 1 );
					self._trigger( "normalize" );
				}, 0 );
				this._proxy = ( first ) ? "first" : "last";
			}
			//fixes issue where when both _sliders are at min they cannot be adjusted
			if ( min === max ) {
				$.data( thisSlider.get(0), "mobileSlider" ).handle.css( "z-index", 1 );
				$.data( otherSlider.get(0), "mobileSlider" ).handle.css( "z-index", 0 );
			} else {
				$.data( otherSlider.get(0), "mobileSlider" ).handle.css( "z-index", "" );
				$.data( thisSlider.get(0), "mobileSlider" ).handle.css( "z-index", "" );
			}
			
			this._updateHighlight();
			
			if ( min >= max ) {
				return false;
			}
		},

		_updateHighlight: function() {
			var min = parseInt( $.data( this._inputFirst.get(0), "mobileSlider" ).handle.get(0).style.left, 10 ),
				max = parseInt( $.data( this._inputLast.get(0), "mobileSlider" ).handle.get(0).style.left, 10 ),
				width = (max - min);

			this.element.find( ".ui-slider-bg" ).css({
				"margin-left": min + "%",
				"width": width + "%"
			});
		},

		_destroy: function() {
			this.element.removeClass( "ui-rangeslider ui-mini" ).find( "label" ).show();
			this._inputFirst.after( this._sliderFirst );
			this._inputLast.after( this._sliderLast );
			this._sliders.remove();
			this.element.find( "input" ).removeClass( "ui-rangeslider-first ui-rangeslider-last" ).slider( "destroy" );
		}

	});

$.widget( "mobile.rangeslider", $.mobile.rangeslider, $.mobile.behaviors.formReset );

//auto self-init widgets
$( document ).bind( "pagecreate create", function( e ) {
	$.mobile.rangeslider.prototype.enhanceWithin( e.target, true );
});

})( jQuery );

(function( $, undefined ) {

$.widget( "mobile.selectmenu", $.mobile.widget, $.extend( {
	options: {
		theme: null,
		disabled: false,
		icon: "arrow-d",
		iconpos: "right",
		inline: false,
		corners: true,
		shadow: true,
		iconshadow: true,
		overlayTheme: "a",
		dividerTheme: "b",
		hidePlaceholderMenuItems: true,
		closeText: "Close",
		nativeMenu: true,
		// This option defaults to true on iOS devices.
		preventFocusZoom: /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1,
		initSelector: "select:not( :jqmData(role='slider') )",
		mini: false
	},

	_button: function() {
		return $( "<div/>" );
	},

	_setDisabled: function( value ) {
		this.element.attr( "disabled", value );
		this.button.attr( "aria-disabled", value );
		return this._setOption( "disabled", value );
	},

	_focusButton : function() {
		var self = this;

		setTimeout( function() {
			self.button.focus();
		}, 40);
	},

	_selectOptions: function() {
		return this.select.find( "option" );
	},

	// setup items that are generally necessary for select menu extension
	_preExtension: function() {
		var classes = "";
		// TODO: Post 1.1--once we have time to test thoroughly--any classes manually applied to the original element should be carried over to the enhanced element, with an `-enhanced` suffix. See https://github.com/jquery/jquery-mobile/issues/3577
		/* if ( $el[0].className.length ) {
			classes = $el[0].className;
		} */
		if ( !!~this.element[0].className.indexOf( "ui-btn-left" ) ) {
			classes = " ui-btn-left";
		}

		if (  !!~this.element[0].className.indexOf( "ui-btn-right" ) ) {
			classes = " ui-btn-right";
		}

		this.select = this.element.removeClass( "ui-btn-left ui-btn-right" ).wrap( "<div class='ui-select" + classes + "'>" );
		this.selectID  = this.select.attr( "id" );
		this.label = $( "label[for='"+ this.selectID +"']" ).addClass( "ui-select" );
		this.isMultiple = this.select[ 0 ].multiple;
		if ( !this.options.theme ) {
			this.options.theme = $.mobile.getInheritedTheme( this.select, "c" );
		}
	},

	_destroy: function() {
		var wrapper = this.element.parents( ".ui-select" );
		if ( wrapper.length > 0 ) {
			if ( wrapper.is( ".ui-btn-left, .ui-btn-right" ) ) {
				this.element.addClass( wrapper.is( ".ui-btn-left" ) ? "ui-btn-left" : "ui-btn-right" );
			}
			this.element.insertAfter( wrapper );
			wrapper.remove();
		}
	},

	_create: function() {
		this._preExtension();

		// Allows for extension of the native select for custom selects and other plugins
		// see select.custom for example extension
		// TODO explore plugin registration
		this._trigger( "beforeCreate" );

		this.button = this._button();

		var self = this,

			options = this.options,

			inline = options.inline || this.select.jqmData( "inline" ),
			mini = options.mini || this.select.jqmData( "mini" ),
			iconpos = options.icon ? ( options.iconpos || this.select.jqmData( "iconpos" ) ) : false,

			// IE throws an exception at options.item() function when
			// there is no selected item
			// select first in this case
			selectedIndex = this.select[ 0 ].selectedIndex === -1 ? 0 : this.select[ 0 ].selectedIndex,

			// TODO values buttonId and menuId are undefined here
			button = this.button
				.insertBefore( this.select )
				.buttonMarkup( {
					theme: options.theme,
					icon: options.icon,
					iconpos: iconpos,
					inline: inline,
					corners: options.corners,
					shadow: options.shadow,
					iconshadow: options.iconshadow,
					mini: mini
				});

		this.setButtonText();

		// Opera does not properly support opacity on select elements
		// In Mini, it hides the element, but not its text
		// On the desktop,it seems to do the opposite
		// for these reasons, using the nativeMenu option results in a full native select in Opera
		if ( options.nativeMenu && window.opera && window.opera.version ) {
			button.addClass( "ui-select-nativeonly" );
		}

		// Add counter for multi selects
		if ( this.isMultiple ) {
			this.buttonCount = $( "<span>" )
				.addClass( "ui-li-count ui-btn-up-c ui-btn-corner-all" )
				.hide()
				.appendTo( button.addClass('ui-li-has-count') );
		}

		// Disable if specified
		if ( options.disabled || this.element.attr('disabled')) {
			this.disable();
		}

		// Events on native select
		this.select.change(function() {
			self.refresh();
			
			if ( !!options.nativeMenu ) {
				this.blur();
			}
		});

		this._handleFormReset();

		this.build();
	},

	build: function() {
		var self = this;

		this.select
			.appendTo( self.button )
			.bind( "vmousedown", function() {
				// Add active class to button
				self.button.addClass( $.mobile.activeBtnClass );
			})
			.bind( "focus", function() {
				self.button.addClass( $.mobile.focusClass );
			})
			.bind( "blur", function() {
				self.button.removeClass( $.mobile.focusClass );
			})
			.bind( "focus vmouseover", function() {
				self.button.trigger( "vmouseover" );
			})
			.bind( "vmousemove", function() {
				// Remove active class on scroll/touchmove
				self.button.removeClass( $.mobile.activeBtnClass );
			})
			.bind( "change blur vmouseout", function() {
				self.button.trigger( "vmouseout" )
					.removeClass( $.mobile.activeBtnClass );
			})
			.bind( "change blur", function() {
				self.button.removeClass( "ui-btn-down-" + self.options.theme );
			});

		// In many situations, iOS will zoom into the select upon tap, this prevents that from happening
		self.button.bind( "vmousedown", function() {
			if ( self.options.preventFocusZoom ) {
					$.mobile.zoom.disable( true );
			}
		});
		self.label.bind( "click focus", function() {
			if ( self.options.preventFocusZoom ) {
					$.mobile.zoom.disable( true );
			}
		});
		self.select.bind( "focus", function() {
			if ( self.options.preventFocusZoom ) {
					$.mobile.zoom.disable( true );
			}
		});
		self.button.bind( "mouseup", function() {
			if ( self.options.preventFocusZoom ) {				
				setTimeout(function() {
					$.mobile.zoom.enable( true );
				}, 0 );
			}
		});
		self.select.bind( "blur", function() {
			if ( self.options.preventFocusZoom ) {				
				$.mobile.zoom.enable( true );
			}
		});

	},

	selected: function() {
		return this._selectOptions().filter( ":selected" );
	},

	selectedIndices: function() {
		var self = this;

		return this.selected().map(function() {
			return self._selectOptions().index( this );
		}).get();
	},

	setButtonText: function() {
		var self = this,
			selected = this.selected(),
			text = this.placeholder,
			span = $( document.createElement( "span" ) );

		this.button.find( ".ui-btn-text" ).html(function() {
			if ( selected.length ) {
				text = selected.map(function() {
					return $( this ).text();
				}).get().join( ", " );
			} else {
				text = self.placeholder;
			}

			// TODO possibly aggregate multiple select option classes
			return span.text( text )
				.addClass( self.select.attr( "class" ) )
				.addClass( selected.attr( "class" ) );
		});
	},

	setButtonCount: function() {
		var selected = this.selected();

		// multiple count inside button
		if ( this.isMultiple ) {
			this.buttonCount[ selected.length > 1 ? "show" : "hide" ]().text( selected.length );
		}
	},

	_reset: function() {
		this.refresh();
	},

	refresh: function() {
		this.setButtonText();
		this.setButtonCount();
	},

	// open and close preserved in native selects
	// to simplify users code when looping over selects
	open: $.noop,
	close: $.noop,

	disable: function() {
		this._setDisabled( true );
		this.button.addClass( "ui-disabled" );
	},

	enable: function() {
		this._setDisabled( false );
		this.button.removeClass( "ui-disabled" );
	}
}, $.mobile.behaviors.formReset ) );

//auto self-init widgets
$.mobile.document.bind( "pagecreate create", function( e ) {
	$.mobile.selectmenu.prototype.enhanceWithin( e.target, true );
});
})( jQuery );

(function( $, undefined ) {

	function fitSegmentInsideSegment( winSize, segSize, offset, desired ) {
		var ret = desired;

		if ( winSize < segSize ) {
			// Center segment if it's bigger than the window
			ret = offset + ( winSize - segSize ) / 2;
		} else {
			// Otherwise center it at the desired coordinate while keeping it completely inside the window
			ret = Math.min( Math.max( offset, desired - segSize / 2 ), offset + winSize - segSize );
		}

		return ret;
	}

	function windowCoords() {
		var $win = $.mobile.window;

		return {
			x: $win.scrollLeft(),
			y: $win.scrollTop(),
			cx: ( window.innerWidth || $win.width() ),
			cy: ( window.innerHeight || $win.height() )
		};
	}

	$.widget( "mobile.popup", $.mobile.widget, {
		options: {
			theme: null,
			overlayTheme: null,
			shadow: true,
			corners: true,
			transition: "none",
			positionTo: "origin",
			tolerance: null,
			initSelector: ":jqmData(role='popup')",
			closeLinkSelector: "a:jqmData(rel='back')",
			closeLinkEvents: "click.popup",
			navigateEvents: "navigate.popup",
			closeEvents: "navigate.popup pagebeforechange.popup",
			dismissible: true,

			// NOTE Windows Phone 7 has a scroll position caching issue that
			//      requires us to disable popup history management by default
			//      https://github.com/jquery/jquery-mobile/issues/4784
			//
			// NOTE this option is modified in _create!
			history: !$.mobile.browser.oldIE
		},

		_eatEventAndClose: function( e ) {
			e.preventDefault();
			e.stopImmediatePropagation();
			if ( this.options.dismissible ) {
				this.close();
			}
			return false;
		},

		// Make sure the screen size is increased beyond the page height if the popup's causes the document to increase in height
		_resizeScreen: function() {
			var popupHeight = this._ui.container.outerHeight( true );

			this._ui.screen.removeAttr( "style" );
			if ( popupHeight > this._ui.screen.height() ) {
				this._ui.screen.height( popupHeight );
			}
		},

		_handleWindowKeyUp: function( e ) {
			if ( this._isOpen && e.keyCode === $.mobile.keyCode.ESCAPE ) {
				return this._eatEventAndClose( e );
			}
		},

		_expectResizeEvent: function() {
			var winCoords = windowCoords();

			if ( this._resizeData ) {
				if ( winCoords.x === this._resizeData.winCoords.x &&
					winCoords.y === this._resizeData.winCoords.y &&
					winCoords.cx === this._resizeData.winCoords.cx &&
					winCoords.cy === this._resizeData.winCoords.cy ) {
					// timeout not refreshed
					return false;
				} else {
					// clear existing timeout - it will be refreshed below
					clearTimeout( this._resizeData.timeoutId );
				}
			}

			this._resizeData = {
				timeoutId: setTimeout( $.proxy( this, "_resizeTimeout" ), 200 ),
				winCoords: winCoords
			};

			return true;
		},

		_resizeTimeout: function() {
			if ( this._isOpen ) {
				if ( !this._expectResizeEvent() ) {
					if ( this._ui.container.hasClass( "ui-popup-hidden" ) ) {
						// effectively rapid-open the popup while leaving the screen intact
						this._ui.container.removeClass( "ui-popup-hidden" );
						this.reposition( { positionTo: "window" } );
						this._ignoreResizeEvents();
					}

					this._resizeScreen();
					this._resizeData = null;
					this._orientationchangeInProgress = false;
				}
			} else {
				this._resizeData = null;
				this._orientationchangeInProgress = false;
			}
		},

		_ignoreResizeEvents: function() {
			var self = this;

			if ( this._ignoreResizeTo ) {
				clearTimeout( this._ignoreResizeTo );
			}
			this._ignoreResizeTo = setTimeout( function() { self._ignoreResizeTo = 0; }, 1000 );
		},

		_handleWindowResize: function( e ) {
			if ( this._isOpen && this._ignoreResizeTo === 0 ) {
				if ( ( this._expectResizeEvent() || this._orientationchangeInProgress ) &&
					!this._ui.container.hasClass( "ui-popup-hidden" ) ) {
					// effectively rapid-close the popup while leaving the screen intact
					this._ui.container
						.addClass( "ui-popup-hidden" )
						.removeAttr( "style" );
				}
			}
		},

		_handleWindowOrientationchange: function( e ) {
			if ( !this._orientationchangeInProgress && this._isOpen && this._ignoreResizeTo === 0 ) {
				this._expectResizeEvent();
				this._orientationchangeInProgress = true;
			}
		},

		// When the popup is open, attempting to focus on an element that is not a
		// child of the popup will redirect focus to the popup
		_handleDocumentFocusIn: function( e ) {
			var tgt = e.target, $tgt, ui = this._ui;

			if ( !this._isOpen ) {
				return;
			}

			if ( tgt !== ui.container[ 0 ] ) {
				$tgt = $( e.target );
				if ( 0 === $tgt.parents().filter( ui.container[ 0 ] ).length ) {
					$( document.activeElement ).one( "focus", function( e ) {
						$tgt.blur();
					});
					ui.focusElement.focus();
					e.preventDefault();
					e.stopImmediatePropagation();
					return false;
				} else if ( ui.focusElement[ 0 ] === ui.container[ 0 ] ) {
					ui.focusElement = $tgt;
				}
			}

			this._ignoreResizeEvents();
		},

		_create: function() {
			var ui = {
					screen: $( "<div class='ui-screen-hidden ui-popup-screen'></div>" ),
					placeholder: $( "<div style='display: none;'><!-- placeholder --></div>" ),
					container: $( "<div class='ui-popup-container ui-popup-hidden'></div>" )
				},
				thisPage = this.element.closest( ".ui-page" ),
				myId = this.element.attr( "id" ),
				self = this;

			// We need to adjust the history option to be false if there's no AJAX nav.
			// We can't do it in the option declarations because those are run before
			// it is determined whether there shall be AJAX nav.
			this.options.history = this.options.history && $.mobile.ajaxEnabled && $.mobile.hashListeningEnabled;

			if ( thisPage.length === 0 ) {
				thisPage = $( "body" );
			}

			// define the container for navigation event bindings
			// TODO this would be nice at the the mobile widget level
			this.options.container = this.options.container || $.mobile.pageContainer;

			// Apply the proto
			thisPage.append( ui.screen );
			ui.container.insertAfter( ui.screen );
			// Leave a placeholder where the element used to be
			ui.placeholder.insertAfter( this.element );
			if ( myId ) {
				ui.screen.attr( "id", myId + "-screen" );
				ui.container.attr( "id", myId + "-popup" );
				ui.placeholder.html( "<!-- placeholder for " + myId + " -->" );
			}
			ui.container.append( this.element );
			ui.focusElement = ui.container;

			// Add class to popup element
			this.element.addClass( "ui-popup" );

			// Define instance variables
			$.extend( this, {
				_scrollTop: 0,
				_page: thisPage,
				_ui: ui,
				_fallbackTransition: "",
				_currentTransition: false,
				_prereqs: null,
				_isOpen: false,
				_tolerance: null,
				_resizeData: null,
				_ignoreResizeTo: 0,
				_orientationchangeInProgress: false
			});

			$.each( this.options, function( key, value ) {
				// Cause initial options to be applied by their handler by temporarily setting the option to undefined
				// - the handler then sets it to the initial value
				self.options[ key ] = undefined;
				self._setOption( key, value, true );
			});

			ui.screen.bind( "vclick", $.proxy( this, "_eatEventAndClose" ) );

			this._on( $.mobile.window, {
				orientationchange: $.proxy( this, "_handleWindowOrientationchange" ),
				resize: $.proxy( this, "_handleWindowResize" ),
				keyup: $.proxy( this, "_handleWindowKeyUp" )
			});
			this._on( $.mobile.document, {
				focusin: $.proxy( this, "_handleDocumentFocusIn" )
			});
		},

		_applyTheme: function( dst, theme, prefix ) {
			var classes = ( dst.attr( "class" ) || "").split( " " ),
				alreadyAdded = true,
				currentTheme = null,
				matches,
				themeStr = String( theme );

			while ( classes.length > 0 ) {
				currentTheme = classes.pop();
				matches = ( new RegExp( "^ui-" + prefix + "-([a-z])$" ) ).exec( currentTheme );
				if ( matches && matches.length > 1 ) {
					currentTheme = matches[ 1 ];
					break;
				} else {
					currentTheme = null;
				}
			}

			if ( theme !== currentTheme ) {
				dst.removeClass( "ui-" + prefix + "-" + currentTheme );
				if ( ! ( theme === null || theme === "none" ) ) {
					dst.addClass( "ui-" + prefix + "-" + themeStr );
				}
			}
		},

		_setTheme: function( value ) {
			this._applyTheme( this.element, value, "body" );
		},

		_setOverlayTheme: function( value ) {
			this._applyTheme( this._ui.screen, value, "overlay" );

			if ( this._isOpen ) {
				this._ui.screen.addClass( "in" );
			}
		},

		_setShadow: function( value ) {
			this.element.toggleClass( "ui-overlay-shadow", value );
		},

		_setCorners: function( value ) {
			this.element.toggleClass( "ui-corner-all", value );
		},

		_applyTransition: function( value ) {
			this._ui.container.removeClass( this._fallbackTransition );
			if ( value && value !== "none" ) {
				this._fallbackTransition = $.mobile._maybeDegradeTransition( value );
				if ( this._fallbackTransition === "none" ) {
					this._fallbackTransition = "";
				}
				this._ui.container.addClass( this._fallbackTransition );
			}
		},

		_setTransition: function( value ) {
			if ( !this._currentTransition ) {
				this._applyTransition( value );
			}
		},

		_setTolerance: function( value ) {
			var tol = { t: 30, r: 15, b: 30, l: 15 };

			if ( value !== undefined ) {
				var ar = String( value ).split( "," );

				$.each( ar, function( idx, val ) { ar[ idx ] = parseInt( val, 10 ); } );

				switch( ar.length ) {
					// All values are to be the same
					case 1:
						if ( !isNaN( ar[ 0 ] ) ) {
							tol.t = tol.r = tol.b = tol.l = ar[ 0 ];
						}
						break;

					// The first value denotes top/bottom tolerance, and the second value denotes left/right tolerance
					case 2:
						if ( !isNaN( ar[ 0 ] ) ) {
							tol.t = tol.b = ar[ 0 ];
						}
						if ( !isNaN( ar[ 1 ] ) ) {
							tol.l = tol.r = ar[ 1 ];
						}
						break;

					// The array contains values in the order top, right, bottom, left
					case 4:
						if ( !isNaN( ar[ 0 ] ) ) {
							tol.t = ar[ 0 ];
						}
						if ( !isNaN( ar[ 1 ] ) ) {
							tol.r = ar[ 1 ];
						}
						if ( !isNaN( ar[ 2 ] ) ) {
							tol.b = ar[ 2 ];
						}
						if ( !isNaN( ar[ 3 ] ) ) {
							tol.l = ar[ 3 ];
						}
						break;

					default:
						break;
				}
			}

			this._tolerance = tol;
		},

		_setOption: function( key, value ) {
			var exclusions, setter = "_set" + key.charAt( 0 ).toUpperCase() + key.slice( 1 );

			if ( this[ setter ] !== undefined ) {
				this[ setter ]( value );
			}

			// TODO REMOVE FOR 1.2.1 by moving them out to a default options object
			exclusions = [
				"initSelector",
				"closeLinkSelector",
				"closeLinkEvents",
				"navigateEvents",
				"closeEvents",
				"history",
				"container"
			];

			$.mobile.widget.prototype._setOption.apply( this, arguments );
			if ( $.inArray( key, exclusions ) === -1 ) {
				// Record the option change in the options and in the DOM data-* attributes
				this.element.attr( "data-" + ( $.mobile.ns || "" ) + ( key.replace( /([A-Z])/, "-$1" ).toLowerCase() ), value );
			}
		},

		// Try and center the overlay over the given coordinates
		_placementCoords: function( desired ) {
			// rectangle within which the popup must fit
			var
				winCoords = windowCoords(),
				rc = {
					x: this._tolerance.l,
					y: winCoords.y + this._tolerance.t,
					cx: winCoords.cx - this._tolerance.l - this._tolerance.r,
					cy: winCoords.cy - this._tolerance.t - this._tolerance.b
				},
				menuSize, ret;

			// Clamp the width of the menu before grabbing its size
			this._ui.container.css( "max-width", rc.cx );
			menuSize = {
				cx: this._ui.container.outerWidth( true ),
				cy: this._ui.container.outerHeight( true )
			};

			// Center the menu over the desired coordinates, while not going outside
			// the window tolerances. This will center wrt. the window if the popup is too large.
			ret = {
				x: fitSegmentInsideSegment( rc.cx, menuSize.cx, rc.x, desired.x ),
				y: fitSegmentInsideSegment( rc.cy, menuSize.cy, rc.y, desired.y )
			};

			// Make sure the top of the menu is visible
			ret.y = Math.max( 0, ret.y );

			// If the height of the menu is smaller than the height of the document
			// align the bottom with the bottom of the document

			// fix for $.mobile.document.height() bug in core 1.7.2.
			var docEl = document.documentElement, docBody = document.body,
				docHeight = Math.max( docEl.clientHeight, docBody.scrollHeight, docBody.offsetHeight, docEl.scrollHeight, docEl.offsetHeight );

			ret.y -= Math.min( ret.y, Math.max( 0, ret.y + menuSize.cy - docHeight ) );

			return { left: ret.x, top: ret.y };
		},

		_createPrereqs: function( screenPrereq, containerPrereq, whenDone ) {
			var self = this, prereqs;

			// It is important to maintain both the local variable prereqs and self._prereqs. The local variable remains in
			// the closure of the functions which call the callbacks passed in. The comparison between the local variable and
			// self._prereqs is necessary, because once a function has been passed to .animationComplete() it will be called
			// next time an animation completes, even if that's not the animation whose end the function was supposed to catch
			// (for example, if an abort happens during the opening animation, the .animationComplete handler is not called for
			// that animation anymore, but the handler remains attached, so it is called the next time the popup is opened
			// - making it stale. Comparing the local variable prereqs to the widget-level variable self._prereqs ensures that
			// callbacks triggered by a stale .animationComplete will be ignored.

			prereqs = {
				screen: $.Deferred(),
				container: $.Deferred()
			};

			prereqs.screen.then( function() {
				if ( prereqs === self._prereqs ) {
					screenPrereq();
				}
			});

			prereqs.container.then( function() {
				if ( prereqs === self._prereqs ) {
					containerPrereq();
				}
			});

			$.when( prereqs.screen, prereqs.container ).done( function() {
				if ( prereqs === self._prereqs ) {
					self._prereqs = null;
					whenDone();
				}
			});

			self._prereqs = prereqs;
		},

		_animate: function( args ) {
			// NOTE before removing the default animation of the screen
			//      this had an animate callback that would resolve the deferred
			//      now the deferred is resolved immediately
			// TODO remove the dependency on the screen deferred
			this._ui.screen
				.removeClass( args.classToRemove )
				.addClass( args.screenClassToAdd );

			args.prereqs.screen.resolve();

			if ( args.transition && args.transition !== "none" ) {
				if ( args.applyTransition ) {
					this._applyTransition( args.transition );
				}
				if ( this._fallbackTransition ) {
					this._ui.container
						.animationComplete( $.proxy( args.prereqs.container, "resolve" ) )
						.addClass( args.containerClassToAdd )
						.removeClass( args.classToRemove );
					return;
				}
			}
			this._ui.container.removeClass( args.classToRemove );
			args.prereqs.container.resolve();
		},

		// The desired coordinates passed in will be returned untouched if no reference element can be identified via
		// desiredPosition.positionTo. Nevertheless, this function ensures that its return value always contains valid
		// x and y coordinates by specifying the center middle of the window if the coordinates are absent.
		// options: { x: coordinate, y: coordinate, positionTo: string: "origin", "window", or jQuery selector
		_desiredCoords: function( o ) {
			var dst = null, offset, winCoords = windowCoords(), x = o.x, y = o.y, pTo = o.positionTo;

			// Establish which element will serve as the reference
			if ( pTo && pTo !== "origin" ) {
				if ( pTo === "window" ) {
					x = winCoords.cx / 2 + winCoords.x;
					y = winCoords.cy / 2 + winCoords.y;
				} else {
					try {
						dst = $( pTo );
					} catch( e ) {
						dst = null;
					}
					if ( dst ) {
						dst.filter( ":visible" );
						if ( dst.length === 0 ) {
							dst = null;
						}
					}
				}
			}

			// If an element was found, center over it
			if ( dst ) {
				offset = dst.offset();
				x = offset.left + dst.outerWidth() / 2;
				y = offset.top + dst.outerHeight() / 2;
			}

			// Make sure x and y are valid numbers - center over the window
			if ( $.type( x ) !== "number" || isNaN( x ) ) {
				x = winCoords.cx / 2 + winCoords.x;
			}
			if ( $.type( y ) !== "number" || isNaN( y ) ) {
				y = winCoords.cy / 2 + winCoords.y;
			}

			return { x: x, y: y };
		},

		_reposition: function( o ) {
			// We only care about position-related parameters for repositioning
			o = { x: o.x, y: o.y, positionTo: o.positionTo };
			this._trigger( "beforeposition", o );
			this._ui.container.offset( this._placementCoords( this._desiredCoords( o ) ) );
		},

		reposition: function( o ) {
			if ( this._isOpen ) {
				this._reposition( o );
			}
		},

		_openPrereqsComplete: function() {
			this._ui.container.addClass( "ui-popup-active" );
			this._isOpen = true;
			this._resizeScreen();
			this._ui.container.attr( "tabindex", "0" ).focus();
			this._ignoreResizeEvents();
			this._trigger( "afteropen" );
		},

		_open: function( options ) {
			var o = $.extend( {}, this.options, options ),
				// TODO move blacklist to private method
				androidBlacklist = ( function() {
					var w = window,
						ua = navigator.userAgent,
						// Rendering engine is Webkit, and capture major version
						wkmatch = ua.match( /AppleWebKit\/([0-9\.]+)/ ),
						wkversion = !!wkmatch && wkmatch[ 1 ],
						androidmatch = ua.match( /Android (\d+(?:\.\d+))/ ),
						andversion = !!androidmatch && androidmatch[ 1 ],
						chromematch = ua.indexOf( "Chrome" ) > -1;

					// Platform is Android, WebKit version is greater than 534.13 ( Android 3.2.1 ) and not Chrome.
					if( androidmatch !== null && andversion === "4.0" && wkversion && wkversion > 534.13 && !chromematch ) {
						return true;
					}
					return false;
				}());

			// Count down to triggering "popupafteropen" - we have two prerequisites:
			// 1. The popup window animation completes (container())
			// 2. The screen opacity animation completes (screen())
			this._createPrereqs(
				$.noop,
				$.noop,
				$.proxy( this, "_openPrereqsComplete" ) );

			this._currentTransition = o.transition;
			this._applyTransition( o.transition );

			if ( !this.options.theme ) {
				this._setTheme( this._page.jqmData( "theme" ) || $.mobile.getInheritedTheme( this._page, "c" ) );
			}

			this._ui.screen.removeClass( "ui-screen-hidden" );
			this._ui.container.removeClass( "ui-popup-hidden" );

			// Give applications a chance to modify the contents of the container before it appears
			this._reposition( o );

			if ( this.options.overlayTheme && androidBlacklist ) {
				/* TODO:
				The native browser on Android 4.0.X ("Ice Cream Sandwich") suffers from an issue where the popup overlay appears to be z-indexed
				above the popup itself when certain other styles exist on the same page -- namely, any element set to `position: fixed` and certain
				types of input. These issues are reminiscent of previously uncovered bugs in older versions of Android's native browser:
				https://github.com/scottjehl/Device-Bugs/issues/3

				This fix closes the following bugs ( I use "closes" with reluctance, and stress that this issue should be revisited as soon as possible ):

				https://github.com/jquery/jquery-mobile/issues/4816
				https://github.com/jquery/jquery-mobile/issues/4844
				https://github.com/jquery/jquery-mobile/issues/4874
				*/

				// TODO sort out why this._page isn't working
				this.element.closest( ".ui-page" ).addClass( "ui-popup-open" );
			}
			this._animate({
				additionalCondition: true,
				transition: o.transition,
				classToRemove: "",
				screenClassToAdd: "in",
				containerClassToAdd: "in",
				applyTransition: false,
				prereqs: this._prereqs
			});
		},

		_closePrereqScreen: function() {
			this._ui.screen
				.removeClass( "out" )
				.addClass( "ui-screen-hidden" );
		},

		_closePrereqContainer: function() {
			this._ui.container
				.removeClass( "reverse out" )
				.addClass( "ui-popup-hidden" )
				.removeAttr( "style" );
		},

		_closePrereqsDone: function() {
			var opts = this.options;

			this._ui.container.removeAttr( "tabindex" );

			// remove the global mutex for popups
			$.mobile.popup.active = undefined;

			// alert users that the popup is closed
			this._trigger( "afterclose" );
		},

		_close: function( immediate ) {
			this._ui.container.removeClass( "ui-popup-active" );
			this._page.removeClass( "ui-popup-open" );

			this._isOpen = false;

			// Count down to triggering "popupafterclose" - we have two prerequisites:
			// 1. The popup window reverse animation completes (container())
			// 2. The screen opacity animation completes (screen())
			this._createPrereqs(
				$.proxy( this, "_closePrereqScreen" ),
				$.proxy( this, "_closePrereqContainer" ),
				$.proxy( this, "_closePrereqsDone" ) );

			this._animate( {
				additionalCondition: this._ui.screen.hasClass( "in" ),
				transition: ( immediate ? "none" : ( this._currentTransition ) ),
				classToRemove: "in",
				screenClassToAdd: "out",
				containerClassToAdd: "reverse out",
				applyTransition: true,
				prereqs: this._prereqs
			});
		},

		_unenhance: function() {
			// Put the element back to where the placeholder was and remove the "ui-popup" class
			this._setTheme( "none" );
			this.element
				// Cannot directly insertAfter() - we need to detach() first, because
				// insertAfter() will do nothing if the payload div was not attached
				// to the DOM at the time the widget was created, and so the payload
				// will remain inside the container even after we call insertAfter().
				// If that happens and we remove the container a few lines below, we
				// will cause an infinite recursion - #5244
				.detach()
				.insertAfter( this._ui.placeholder )
				.removeClass( "ui-popup ui-overlay-shadow ui-corner-all" );
			this._ui.screen.remove();
			this._ui.container.remove();
			this._ui.placeholder.remove();
		},

		_destroy: function() {
			if ( $.mobile.popup.active === this ) {
				this.element.one( "popupafterclose", $.proxy( this, "_unenhance" ) );
				this.close();
			} else {
				this._unenhance();
			}
		},

		_closePopup: function( e, data ) {
			var parsedDst, toUrl, o = this.options, immediate = false;

			// restore location on screen
			window.scrollTo( 0, this._scrollTop );

			if ( e && e.type === "pagebeforechange" && data ) {
				// Determine whether we need to rapid-close the popup, or whether we can
				// take the time to run the closing transition
				if ( typeof data.toPage === "string" ) {
					parsedDst = data.toPage;
				} else {
					parsedDst = data.toPage.jqmData( "url" );
				}
				parsedDst = $.mobile.path.parseUrl( parsedDst );
				toUrl = parsedDst.pathname + parsedDst.search + parsedDst.hash;

				if ( this._myUrl !== $.mobile.path.makeUrlAbsolute( toUrl ) ) {
					// Going to a different page - close immediately
					immediate = true;
				} else {
					e.preventDefault();
				}
			}

			// remove nav bindings
			o.container.unbind( o.closeEvents );
			// unbind click handlers added when history is disabled
			this.element.undelegate( o.closeLinkSelector, o.closeLinkEvents );

			this._close( immediate );
		},

		// any navigation event after a popup is opened should close the popup
		// NOTE the pagebeforechange is bound to catch navigation events that don't
		//      alter the url (eg, dialogs from popups)
		_bindContainerClose: function() {
			this.options.container
				.one( this.options.closeEvents, $.proxy( this, "_closePopup" ) );
		},

		// TODO no clear deliniation of what should be here and
		// what should be in _open. Seems to be "visual" vs "history" for now
		open: function( options ) {
			var self = this, opts = this.options, url, hashkey, activePage, currentIsDialog, hasHash, urlHistory;

			// make sure open is idempotent
			if( $.mobile.popup.active ) {
				return;
			}

			// set the global popup mutex
			$.mobile.popup.active = this;
			this._scrollTop = $.mobile.window.scrollTop();

			// if history alteration is disabled close on navigate events
			// and leave the url as is
			if( !( opts.history ) ) {
				self._open( options );
				self._bindContainerClose();

				// When histoy is disabled we have to grab the data-rel
				// back link clicks so we can close the popup instead of
				// relying on history to do it for us
				self.element
					.delegate( opts.closeLinkSelector, opts.closeLinkEvents, function( e ) {
						self.close();
						e.preventDefault();
					});

				return;
			}

			// cache some values for min/readability
			urlHistory = $.mobile.urlHistory;
			hashkey = $.mobile.dialogHashKey;
			activePage = $.mobile.activePage;
			currentIsDialog = activePage.is( ".ui-dialog" );
			this._myUrl = url = urlHistory.getActive().url;
			hasHash = ( url.indexOf( hashkey ) > -1 ) && !currentIsDialog && ( urlHistory.activeIndex > 0 );

			if ( hasHash ) {
				self._open( options );
				self._bindContainerClose();
				return;
			}

			// if the current url has no dialog hash key proceed as normal
			// otherwise, if the page is a dialog simply tack on the hash key
			if ( url.indexOf( hashkey ) === -1 && !currentIsDialog ){
				url = url + (url.indexOf( "#" ) > -1 ? hashkey : "#" + hashkey);
			} else {
				url = $.mobile.path.parseLocation().hash + hashkey;
			}

			// Tack on an extra hashkey if this is the first page and we've just reconstructed the initial hash
			if ( urlHistory.activeIndex === 0 && url === urlHistory.initialDst ) {
				url += hashkey;
			}

			// swallow the the initial navigation event, and bind for the next
			$(window).one( "beforenavigate", function( e ) {
				e.preventDefault();
				self._open( options );
				self._bindContainerClose();
			});

			this.urlAltered = true;
			$.mobile.navigate( url, {role: "dialog"} );
		},

		close: function() {
			// make sure close is idempotent
			if( $.mobile.popup.active !== this ) {
				return;
			}

			this._scrollTop = $.mobile.window.scrollTop();

			if( this.options.history && this.urlAltered ) {
				$.mobile.back();
				this.urlAltered = false;
			} else {
				// simulate the nav bindings having fired
				this._closePopup();
			}
		}
	});


	// TODO this can be moved inside the widget
	$.mobile.popup.handleLink = function( $link ) {
		var closestPage = $link.closest( ":jqmData(role='page')" ),
			scope = ( ( closestPage.length === 0 ) ? $( "body" ) : closestPage ),
			// NOTE make sure to get only the hash, ie7 (wp7) return the absolute href
			//      in this case ruining the element selection
			popup = $( $.mobile.path.parseUrl($link.attr( "href" )).hash, scope[0] ),
			offset;

		if ( popup.data( "mobile-popup" ) ) {
			offset = $link.offset();
			popup.popup( "open", {
				x: offset.left + $link.outerWidth() / 2,
				y: offset.top + $link.outerHeight() / 2,
				transition: $link.jqmData( "transition" ),
				positionTo: $link.jqmData( "position-to" )
			});
		}

		//remove after delay
		setTimeout( function() {
			// Check if we are in a listview
			var $parent = $link.parent().parent();
			if ($parent.hasClass("ui-li")) {
				$link = $parent.parent();
			}
			$link.removeClass( $.mobile.activeBtnClass );
		}, 300 );
	};

	// TODO move inside _create
	$.mobile.document.bind( "pagebeforechange", function( e, data ) {
		if ( data.options.role === "popup" ) {
			$.mobile.popup.handleLink( data.options.link );
			e.preventDefault();
		}
	});

	$.mobile.document.bind( "pagecreate create", function( e )  {
		$.mobile.popup.prototype.enhanceWithin( e.target, true );
	});

})( jQuery );

/*
* custom "selectmenu" plugin
*/

(function( $, undefined ) {
	var extendSelect = function( widget ) {

		var select = widget.select,
			origDestroy = widget._destroy,
			selectID  = widget.selectID,
			prefix = ( selectID ? selectID : ( ( $.mobile.ns || "" ) + "uuid-" + widget.uuid ) ),
			popupID = prefix + "-listbox",
			dialogID = prefix + "-dialog",
			label = widget.label,
			thisPage = widget.select.closest( ".ui-page" ),
			selectOptions = widget._selectOptions(),
			isMultiple = widget.isMultiple = widget.select[ 0 ].multiple,
			buttonId = selectID + "-button",
			menuId = selectID + "-menu",
			menuPage = $( "<div data-" + $.mobile.ns + "role='dialog' id='" + dialogID + "' data-" +$.mobile.ns + "theme='"+ widget.options.theme +"' data-" +$.mobile.ns + "overlay-theme='"+ widget.options.overlayTheme +"'>" +
				"<div data-" + $.mobile.ns + "role='header'>" +
				"<div class='ui-title'>" + label.getEncodedText() + "</div>"+
				"</div>"+
				"<div data-" + $.mobile.ns + "role='content'></div>"+
				"</div>" ),

			listbox =  $( "<div id='" + popupID + "' class='ui-selectmenu'>" ).insertAfter( widget.select ).popup( { theme: widget.options.overlayTheme } ),

			list = $( "<ul>", {
				"class": "ui-selectmenu-list",
				"id": menuId,
				"role": "listbox",
				"aria-labelledby": buttonId
				}).attr( "data-" + $.mobile.ns + "theme", widget.options.theme )
					.attr( "data-" + $.mobile.ns + "divider-theme", widget.options.dividerTheme )
					.appendTo( listbox ),


			header = $( "<div>", {
				"class": "ui-header ui-bar-" + widget.options.theme
			}).prependTo( listbox ),

			headerTitle = $( "<h1>", {
				"class": "ui-title"
			}).appendTo( header ),

			menuPageContent,
			menuPageClose,
			headerClose;

		if ( widget.isMultiple ) {
			headerClose = $( "<a>", {
				"text": widget.options.closeText,
				"href": "#",
				"class": "ui-btn-left"
			}).attr( "data-" + $.mobile.ns + "iconpos", "notext" ).attr( "data-" + $.mobile.ns + "icon", "delete" ).appendTo( header ).buttonMarkup();
		}

		$.extend( widget, {
			select: widget.select,
			selectID: selectID,
			buttonId: buttonId,
			menuId: menuId,
			popupID: popupID,
			dialogID: dialogID,
			thisPage: thisPage,
			menuPage: menuPage,
			label: label,
			selectOptions: selectOptions,
			isMultiple: isMultiple,
			theme: widget.options.theme,
			listbox: listbox,
			list: list,
			header: header,
			headerTitle: headerTitle,
			headerClose: headerClose,
			menuPageContent: menuPageContent,
			menuPageClose: menuPageClose,
			placeholder: "",

			build: function() {
				var self = this;

				// Create list from select, update state
				self.refresh();

				if ( self._origTabIndex === undefined ) {
					// Map undefined to false, because self._origTabIndex === undefined
					// indicates that we have not yet checked whether the select has
					// originally had a tabindex attribute, whereas false indicates that
					// we have checked the select for such an attribute, and have found
					// none present.
					self._origTabIndex = ( self.select[ 0 ].getAttribute( "tabindex" ) === null ) ? false : self.select.attr( "tabindex" );
				}
				self.select.attr( "tabindex", "-1" ).focus(function() {
					$( this ).blur();
					self.button.focus();
				});

				// Button events
				self.button.bind( "vclick keydown" , function( event ) {
					if ( self.options.disabled || self.isOpen ) {
						return;
					}

					if (event.type === "vclick" ||
							event.keyCode && (event.keyCode === $.mobile.keyCode.ENTER ||
																event.keyCode === $.mobile.keyCode.SPACE)) {

						self._decideFormat();
						if ( self.menuType === "overlay" ) {
							self.button.attr( "href", "#" + self.popupID ).attr( "data-" + ( $.mobile.ns || "" ) + "rel", "popup" );
						} else {
							self.button.attr( "href", "#" + self.dialogID ).attr( "data-" + ( $.mobile.ns || "" ) + "rel", "dialog" );
						}
						self.isOpen = true;
						// Do not prevent default, so the navigation may have a chance to actually open the chosen format
					}
				});

				// Events for list items
				self.list.attr( "role", "listbox" )
					.bind( "focusin", function( e ) {
						$( e.target )
							.attr( "tabindex", "0" )
							.trigger( "vmouseover" );

					})
					.bind( "focusout", function( e ) {
						$( e.target )
							.attr( "tabindex", "-1" )
							.trigger( "vmouseout" );
					})
					.delegate( "li:not(.ui-disabled, .ui-li-divider)", "click", function( event ) {

						// index of option tag to be selected
						var oldIndex = self.select[ 0 ].selectedIndex,
							newIndex = self.list.find( "li:not(.ui-li-divider)" ).index( this ),
							option = self._selectOptions().eq( newIndex )[ 0 ];

						// toggle selected status on the tag for multi selects
						option.selected = self.isMultiple ? !option.selected : true;

						// toggle checkbox class for multiple selects
						if ( self.isMultiple ) {
							$( this ).find( ".ui-icon" )
								.toggleClass( "ui-icon-checkbox-on", option.selected )
								.toggleClass( "ui-icon-checkbox-off", !option.selected );
						}

						// trigger change if value changed
						if ( self.isMultiple || oldIndex !== newIndex ) {
							self.select.trigger( "change" );
						}

						// hide custom select for single selects only - otherwise focus clicked item
						// We need to grab the clicked item the hard way, because the list may have been rebuilt
						if ( self.isMultiple ) {
							self.list.find( "li:not(.ui-li-divider)" ).eq( newIndex )
								.addClass( "ui-btn-down-" + widget.options.theme ).find( "a" ).first().focus();
						}
						else {
							self.close();
						}

						event.preventDefault();
					})
					.keydown(function( event ) {  //keyboard events for menu items
						var target = $( event.target ),
							li = target.closest( "li" ),
							prev, next;

						// switch logic based on which key was pressed
						switch ( event.keyCode ) {
							// up or left arrow keys
						case 38:
							prev = li.prev().not( ".ui-selectmenu-placeholder" );

							if ( prev.is( ".ui-li-divider" ) ) {
								prev = prev.prev();
							}

							// if there's a previous option, focus it
							if ( prev.length ) {
								target
									.blur()
									.attr( "tabindex", "-1" );

								prev.addClass( "ui-btn-down-" + widget.options.theme ).find( "a" ).first().focus();
							}

							return false;
							// down or right arrow keys
						case 40:
							next = li.next();

							if ( next.is( ".ui-li-divider" ) ) {
								next = next.next();
							}

							// if there's a next option, focus it
							if ( next.length ) {
								target
									.blur()
									.attr( "tabindex", "-1" );

								next.addClass( "ui-btn-down-" + widget.options.theme ).find( "a" ).first().focus();
							}

							return false;
							// If enter or space is pressed, trigger click
						case 13:
						case 32:
							target.trigger( "click" );

							return false;
						}
					});

				// button refocus ensures proper height calculation
				// by removing the inline style and ensuring page inclusion
				self.menuPage.bind( "pagehide", function() {
					// TODO centralize page removal binding / handling in the page plugin.
					// Suggestion from @jblas to do refcounting
					//
					// TODO extremely confusing dependency on the open method where the pagehide.remove
					// bindings are stripped to prevent the parent page from disappearing. The way
					// we're keeping pages in the DOM right now sucks
					//
					// rebind the page remove that was unbound in the open function
					// to allow for the parent page removal from actions other than the use
					// of a dialog sized custom select
					//
					// doing this here provides for the back button on the custom select dialog
					$.mobile._bindPageRemove.call( self.thisPage );
				});

				// Events on the popup
				self.listbox.bind( "popupafterclose", function( event ) {
					self.close();
				});

				// Close button on small overlays
				if ( self.isMultiple ) {
					self.headerClose.click(function() {
						if ( self.menuType === "overlay" ) {
							self.close();
							return false;
						}
					});
				}

				// track this dependency so that when the parent page
				// is removed on pagehide it will also remove the menupage
				self.thisPage.addDependents( this.menuPage );
			},

			_isRebuildRequired: function() {
				var list = this.list.find( "li" ),
					options = this._selectOptions();

				// TODO exceedingly naive method to determine difference
				// ignores value changes etc in favor of a forcedRebuild
				// from the user in the refresh method
				return options.text() !== list.text();
			},

			selected: function() {
				return this._selectOptions().filter( ":selected:not( :jqmData(placeholder='true') )" );
			},

			refresh: function( forceRebuild , foo ) {
				var self = this,
				select = this.element,
				isMultiple = this.isMultiple,
				indicies;

				if (  forceRebuild || this._isRebuildRequired() ) {
					self._buildList();
				}

				indicies = this.selectedIndices();

				self.setButtonText();
				self.setButtonCount();

				self.list.find( "li:not(.ui-li-divider)" )
					.removeClass( $.mobile.activeBtnClass )
					.attr( "aria-selected", false )
					.each(function( i ) {

						if ( $.inArray( i, indicies ) > -1 ) {
							var item = $( this );

							// Aria selected attr
							item.attr( "aria-selected", true );

							// Multiple selects: add the "on" checkbox state to the icon
							if ( self.isMultiple ) {
								item.find( ".ui-icon" ).removeClass( "ui-icon-checkbox-off" ).addClass( "ui-icon-checkbox-on" );
							} else {
								if ( item.is( ".ui-selectmenu-placeholder" ) ) {
									item.next().addClass( $.mobile.activeBtnClass );
								} else {
									item.addClass( $.mobile.activeBtnClass );
								}
							}
						}
					});
			},

			close: function() {
				if ( this.options.disabled || !this.isOpen ) {
					return;
				}

				var self = this;

				if ( self.menuType === "page" ) {
					self.menuPage.dialog( "close" );
					self.list.appendTo( self.listbox );
				} else {
					self.listbox.popup( "close" );
				}

				self._focusButton();
				// allow the dialog to be closed again
				self.isOpen = false;
			},

			open: function() {
				this.button.click();
			},

			_decideFormat: function() {
				var self = this,
					$window = $.mobile.window,
					selfListParent = self.list.parent(),
					menuHeight = selfListParent.outerHeight(),
					menuWidth = selfListParent.outerWidth(),
					activePage = $( "." + $.mobile.activePageClass ),
					scrollTop = $window.scrollTop(),
					btnOffset = self.button.offset().top,
					screenHeight = $window.height(),
					screenWidth = $window.width();

				function focusMenuItem() {
					var selector = self.list.find( "." + $.mobile.activeBtnClass + " a" );
					if ( selector.length === 0 ) {
						selector = self.list.find( "li.ui-btn:not( :jqmData(placeholder='true') ) a" );
					}
					selector.first().focus().closest( "li" ).addClass( "ui-btn-down-" + widget.options.theme );
				}

				if ( menuHeight > screenHeight - 80 || !$.support.scrollTop ) {

					self.menuPage.appendTo( $.mobile.pageContainer ).page();
					self.menuPageContent = menuPage.find( ".ui-content" );
					self.menuPageClose = menuPage.find( ".ui-header a" );

					// prevent the parent page from being removed from the DOM,
					// otherwise the results of selecting a list item in the dialog
					// fall into a black hole
					self.thisPage.unbind( "pagehide.remove" );

					//for WebOS/Opera Mini (set lastscroll using button offset)
					if ( scrollTop === 0 && btnOffset > screenHeight ) {
						self.thisPage.one( "pagehide", function() {
							$( this ).jqmData( "lastScroll", btnOffset );
						});
					}

					self.menuPage
						.one( "pageshow", function() {
							focusMenuItem();
						})
						.one( "pagehide", function() {
							self.close();
						});

					self.menuType = "page";
					self.menuPageContent.append( self.list );
					self.menuPage.find("div .ui-title").text(self.label.text());
				} else {
					self.menuType = "overlay";

					self.listbox.one( "popupafteropen", focusMenuItem );
				}
			},

			_buildList: function() {
				var self = this,
					o = this.options,
					placeholder = this.placeholder,
					needPlaceholder = true,
					optgroups = [],
					lis = [],
					dataIcon = self.isMultiple ? "checkbox-off" : "false";

				self.list.empty().filter( ".ui-listview" ).listview( "destroy" );

				var $options = self.select.find( "option" ),
					numOptions = $options.length,
					select = this.select[ 0 ],
					dataPrefix = 'data-' + $.mobile.ns,
					dataIndexAttr = dataPrefix + 'option-index',
					dataIconAttr = dataPrefix + 'icon',
					dataRoleAttr = dataPrefix + 'role',
					dataPlaceholderAttr = dataPrefix + 'placeholder',
					fragment = document.createDocumentFragment(),
					isPlaceholderItem = false,
					optGroup;

				for (var i = 0; i < numOptions;i++, isPlaceholderItem = false) {
					var option = $options[i],
						$option = $( option ),
						parent = option.parentNode,
						text = $option.text(),
						anchor  = document.createElement( 'a' ),
						classes = [];

					anchor.setAttribute( 'href', '#' );
					anchor.appendChild( document.createTextNode( text ) );

					// Are we inside an optgroup?
					if ( parent !== select && parent.nodeName.toLowerCase() === "optgroup" ) {
						var optLabel = parent.getAttribute( 'label' );
						if ( optLabel !== optGroup ) {
							var divider = document.createElement( 'li' );
							divider.setAttribute( dataRoleAttr, 'list-divider' );
							divider.setAttribute( 'role', 'option' );
							divider.setAttribute( 'tabindex', '-1' );
							divider.appendChild( document.createTextNode( optLabel ) );
							fragment.appendChild( divider );
							optGroup = optLabel;
						}
					}

					if ( needPlaceholder && ( !option.getAttribute( "value" ) || text.length === 0 || $option.jqmData( "placeholder" ) ) ) {
						needPlaceholder = false;
						isPlaceholderItem = true;

						// If we have identified a placeholder, record the fact that it was
						// us who have added the placeholder to the option and mark it
						// retroactively in the select as well
						if ( null === option.getAttribute( dataPlaceholderAttr ) ) {
							this._removePlaceholderAttr = true;
						}
						option.setAttribute( dataPlaceholderAttr, true );
						if ( o.hidePlaceholderMenuItems ) {
							classes.push( "ui-selectmenu-placeholder" );
						}
						if ( placeholder !== text ) {
							placeholder = self.placeholder = text;
						}
					}

					var item = document.createElement('li');
					if ( option.disabled ) {
						classes.push( "ui-disabled" );
						item.setAttribute('aria-disabled',true);
					}
					item.setAttribute( dataIndexAttr,i );
					item.setAttribute( dataIconAttr, dataIcon );
					if ( isPlaceholderItem ) {
						item.setAttribute( dataPlaceholderAttr, true );
					}
					item.className = classes.join( " " );
					item.setAttribute( 'role', 'option' );
					anchor.setAttribute( 'tabindex', '-1' );
					item.appendChild( anchor );
					fragment.appendChild( item );
				}

				self.list[0].appendChild( fragment );

				// Hide header if it's not a multiselect and there's no placeholder
				if ( !this.isMultiple && !placeholder.length ) {
					this.header.hide();
				} else {
					this.headerTitle.text( this.placeholder );
				}

				// Now populated, create listview
				self.list.listview();
			},

			_button: function() {
				return $( "<a>", {
					"href": "#",
					"role": "button",
					// TODO value is undefined at creation
					"id": this.buttonId,
					"aria-haspopup": "true",

					// TODO value is undefined at creation
					"aria-owns": this.menuId
				});
			},

			_destroy: function() {
				this.close();

				// Restore the tabindex attribute to its original value
				if ( this._origTabIndex !== undefined ) {
					if ( this._origTabIndex !== false ) {
						this.select.attr( "tabindex", this._origTabIndex );
					} else {
						this.select.removeAttr( "tabindex" );
					}
				}

				// Remove the placeholder attribute if we were the ones to add it
				if ( this._removePlaceholderAttr ) {
					this._selectOptions().removeAttr( "data-" + $.mobile.ns + "placeholder" );
				}

				// Remove the popup
				this.listbox.remove();

				// Chain up
				origDestroy.apply( this, arguments );
			}
		});
	};

	// issue #3894 - core doesn't trigger events on disabled delegates
	$.mobile.document.bind( "selectmenubeforecreate", function( event ) {
		var selectmenuWidget = $( event.target ).data( "mobile-selectmenu" );

		if ( !selectmenuWidget.options.nativeMenu &&
				selectmenuWidget.element.parents( ":jqmData(role='popup')" ).length === 0 ) {
			extendSelect( selectmenuWidget );
		}
	});
})( jQuery );

(function( $, undefined ) {

	$.widget( "mobile.controlgroup", $.mobile.widget, $.extend( {
		options: {
			shadow: false,
			corners: true,
			excludeInvisible: true,
			type: "vertical",
			mini: false,
			initSelector: ":jqmData(role='controlgroup')"
		},

		_create: function() {
			var $el = this.element,
				ui = {
					inner: $( "<div class='ui-controlgroup-controls'></div>" ),
					legend: $( "<div role='heading' class='ui-controlgroup-label'></div>" )
				},
				grouplegend = $el.children( "legend" ),
				self = this;

			// Apply the proto
			$el.wrapInner( ui.inner );
			if ( grouplegend.length ) {
				ui.legend.append( grouplegend ).insertBefore( $el.children( 0 ) );
			}
			$el.addClass( "ui-corner-all ui-controlgroup" );

			$.extend( this, {
				_initialRefresh: true
			});

			$.each( this.options, function( key, value ) {
				// Cause initial options to be applied by their handler by temporarily setting the option to undefined
				// - the handler then sets it to the initial value
				self.options[ key ] = undefined;
				self._setOption( key, value, true );
			});
		},

		_init: function() {
			this.refresh();
		},

		_setOption: function( key, value ) {
			var setter = "_set" + key.charAt( 0 ).toUpperCase() + key.slice( 1 );

			if ( this[ setter ] !== undefined ) {
				this[ setter ]( value );
			}

			this._super( key, value );
			this.element.attr( "data-" + ( $.mobile.ns || "" ) + ( key.replace( /([A-Z])/, "-$1" ).toLowerCase() ), value );
		},

		_setType: function( value ) {
			this.element
				.removeClass( "ui-controlgroup-horizontal ui-controlgroup-vertical" )
				.addClass( "ui-controlgroup-" + value );
			this.refresh();
		},

		_setCorners: function( value ) {
			this.element.toggleClass( "ui-corner-all", value );
		},

		_setShadow: function( value ) {
			this.element.toggleClass( "ui-shadow", value );
		},

		_setMini: function( value ) {
			this.element.toggleClass( "ui-mini", value );
		},

		container: function() {
			return this.element.children( ".ui-controlgroup-controls" );
		},

		refresh: function() {
			var els = this.element.find( ".ui-btn" ).not( ".ui-slider-handle" ),
				create = this._initialRefresh;
			if ( $.mobile.checkboxradio ) {
				this.element.find( ":mobile-checkboxradio" ).checkboxradio( "refresh" );
			}
			this._addFirstLastClasses( els, this.options.excludeInvisible ? this._getVisibles( els, create ) : els, create );
			this._initialRefresh = false;
		}
	}, $.mobile.behaviors.addFirstLastClasses ) );

	// TODO: Implement a mechanism to allow widgets to become enhanced in the
	// correct order when their correct enhancement depends on other widgets in
	// the page being correctly enhanced already.
	//
	// For now, we wait until dom-ready to attach the controlgroup's enhancement
	// hook, because by that time, all the other widgets' enhancement hooks should
	// already be in place, ensuring that all widgets that need to be grouped will
	// already have been enhanced by the time the controlgroup is created.
	$( function() {
		$.mobile.document.bind( "pagecreate create", function( e )  {
			$.mobile.controlgroup.prototype.enhanceWithin( e.target, true );
		});
	});
})(jQuery);

(function( $, undefined ) {

$( document ).bind( "pagecreate create", function( e ) {

	//links within content areas, tests included with page
	$( e.target )
		.find( "a" )
		.jqmEnhanceable()
		.not( ".ui-btn, .ui-link-inherit, :jqmData(role='none'), :jqmData(role='nojs')" )
		.addClass( "ui-link" );

});

})( jQuery );


(function( $, undefined ) {


	$.widget( "mobile.fixedtoolbar", $.mobile.widget, {
		options: {
			visibleOnPageShow: true,
			disablePageZoom: true,
			transition: "slide", //can be none, fade, slide (slide maps to slideup or slidedown)
			fullscreen: false,
			tapToggle: true,
			tapToggleBlacklist: "a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed, .ui-popup, .ui-panel, .ui-panel-dismiss-open",
			hideDuringFocus: "input, textarea, select",
			updatePagePadding: true,
			trackPersistentToolbars: true,

			// Browser detection! Weeee, here we go...
			// Unfortunately, position:fixed is costly, not to mention probably impossible, to feature-detect accurately.
			// Some tests exist, but they currently return false results in critical devices and browsers, which could lead to a broken experience.
			// Testing fixed positioning is also pretty obtrusive to page load, requiring injected elements and scrolling the window
			// The following function serves to rule out some popular browsers with known fixed-positioning issues
			// This is a plugin option like any other, so feel free to improve or overwrite it
			supportBlacklist: function() {
				return !$.support.fixedPosition;
			},
			initSelector: ":jqmData(position='fixed')"
		},

		_create: function() {

			var self = this,
				o = self.options,
				$el = self.element,
				tbtype = $el.is( ":jqmData(role='header')" ) ? "header" : "footer",
				$page = $el.closest( ".ui-page" );

			// Feature detecting support for
			if ( o.supportBlacklist() ) {
				self.destroy();
				return;
			}

			$el.addClass( "ui-"+ tbtype +"-fixed" );

			// "fullscreen" overlay positioning
			if ( o.fullscreen ) {
				$el.addClass( "ui-"+ tbtype +"-fullscreen" );
				$page.addClass( "ui-page-" + tbtype + "-fullscreen" );
			}
			// If not fullscreen, add class to page to set top or bottom padding
			else{
				$page.addClass( "ui-page-" + tbtype + "-fixed" );
			}

			$.extend( this, {
				_thisPage: null
			});
 
			self._addTransitionClass();
			self._bindPageEvents();
			self._bindToggleHandlers();
		},

		_addTransitionClass: function() {
			var tclass = this.options.transition;

			if ( tclass && tclass !== "none" ) {
				// use appropriate slide for header or footer
				if ( tclass === "slide" ) {
					tclass = this.element.is( ".ui-header" ) ? "slidedown" : "slideup";
				}

				this.element.addClass( tclass );
			}
		},

		_bindPageEvents: function() {
			this._thisPage = this.element.closest( ".ui-page" );
			//page event bindings
			// Fixed toolbars require page zoom to be disabled, otherwise usability issues crop up
			// This method is meant to disable zoom while a fixed-positioned toolbar page is visible
			this._on( this._thisPage, {
				"pagebeforeshow": "_handlePageBeforeShow",
				"webkitAnimationStart":"_handleAnimationStart",
				"animationstart":"_handleAnimationStart",
				"updatelayout": "_handleAnimationStart",
				"pageshow": "_handlePageShow",
				"pagebeforehide": "_handlePageBeforeHide"
			});
		},

		_handlePageBeforeShow: function() {
			var o = this.options;
			if ( o.disablePageZoom ) {
				$.mobile.zoom.disable( true );
			}
			if ( !o.visibleOnPageShow ) {
				this.hide( true );
			}
		},

		_handleAnimationStart: function() {
			if ( this.options.updatePagePadding ) {
				this.updatePagePadding( this._thisPage );
			}
		},

		_handlePageShow: function() {
			this.updatePagePadding( this._thisPage );
			if ( this.options.updatePagePadding ) {
				this._on( $.mobile.window, { "throttledresize": "updatePagePadding" } );
			}
		},

		_handlePageBeforeHide: function( e, ui ) {
			var o = this.options;

			if ( o.disablePageZoom ) {
				$.mobile.zoom.enable( true );
			}
			if ( o.updatePagePadding ) {
				this._off( $.mobile.window, "throttledresize" );
			}

			if ( o.trackPersistentToolbars ) {
				var thisFooter = $( ".ui-footer-fixed:jqmData(id)", this._thisPage ),
					thisHeader = $( ".ui-header-fixed:jqmData(id)", this._thisPage ),
					nextFooter = thisFooter.length && ui.nextPage && $( ".ui-footer-fixed:jqmData(id='" + thisFooter.jqmData( "id" ) + "')", ui.nextPage ) || $(),
					nextHeader = thisHeader.length && ui.nextPage && $( ".ui-header-fixed:jqmData(id='" + thisHeader.jqmData( "id" ) + "')", ui.nextPage ) || $();

				if ( nextFooter.length || nextHeader.length ) {

					nextFooter.add( nextHeader ).appendTo( $.mobile.pageContainer );

					ui.nextPage.one( "pageshow", function() {
						nextHeader.prependTo( this );
						nextFooter.appendTo( this );
					});
				}
			}
		},

		_visible: true,

		// This will set the content element's top or bottom padding equal to the toolbar's height
		updatePagePadding: function( tbPage ) {
			var $el = this.element,
				header = $el.is( ".ui-header" ),
				pos = parseFloat( $el.css( header ? "top" : "bottom" ) );

			// This behavior only applies to "fixed", not "fullscreen"
			if ( this.options.fullscreen ) { return; }

			// tbPage argument can be a Page object or an event, if coming from throttled resize. 
			tbPage = ( tbPage && tbPage.type === undefined && tbPage ) || this._thisPage || $el.closest( ".ui-page" );
			$( tbPage ).css( "padding-" + ( header ? "top" : "bottom" ), $el.outerHeight() + pos );
		},

		_useTransition: function( notransition ) {
			var $win = $.mobile.window,
				$el = this.element,
				scroll = $win.scrollTop(),
				elHeight = $el.height(),
				pHeight = $el.closest( ".ui-page" ).height(),
				viewportHeight = $.mobile.getScreenHeight(),
				tbtype = $el.is( ":jqmData(role='header')" ) ? "header" : "footer";

			return !notransition &&
				( this.options.transition && this.options.transition !== "none" &&
				(
					( tbtype === "header" && !this.options.fullscreen && scroll > elHeight ) ||
					( tbtype === "footer" && !this.options.fullscreen && scroll + viewportHeight < pHeight - elHeight )
				) || this.options.fullscreen
				);
		},

		show: function( notransition ) {
			var hideClass = "ui-fixed-hidden",
				$el = this.element;

			if ( this._useTransition( notransition ) ) {
				$el
					.removeClass( "out " + hideClass )
					.addClass( "in" )
					.animationComplete(function () {
						$el.removeClass('in');
					});
			}
			else {
				$el.removeClass( hideClass );
			}
			this._visible = true;
		},

		hide: function( notransition ) {
			var hideClass = "ui-fixed-hidden",
				$el = this.element,
				// if it's a slide transition, our new transitions need the reverse class as well to slide outward
				outclass = "out" + ( this.options.transition === "slide" ? " reverse" : "" );

			if( this._useTransition( notransition ) ) {
				$el
					.addClass( outclass )
					.removeClass( "in" )
					.animationComplete(function() {
						$el.addClass( hideClass ).removeClass( outclass );
					});
			}
			else {
				$el.addClass( hideClass ).removeClass( outclass );
			}
			this._visible = false;
		},

		toggle: function() {
			this[ this._visible ? "hide" : "show" ]();
		},

		_bindToggleHandlers: function() {
			var self = this,
				o = self.options,
				$el = self.element,
				delayShow, delayHide,
				isVisible = true;

			// tap toggle
			$el.closest( ".ui-page" )
				.bind( "vclick", function( e ) {
					if ( o.tapToggle && !$( e.target ).closest( o.tapToggleBlacklist ).length ) {
						self.toggle();
					}
				})
				.bind( "focusin focusout", function( e ) {
					//this hides the toolbars on a keyboard pop to give more screen room and prevent ios bug which 
					//positions fixed toolbars in the middle of the screen on pop if the input is near the top or
					//bottom of the screen addresses issues #4410 Footer navbar moves up when clicking on a textbox in an Android environment
					//and issue #4113 Header and footer change their position after keyboard popup - iOS
					//and issue #4410 Footer navbar moves up when clicking on a textbox in an Android environment
					if ( screen.width < 1025 && $( e.target ).is( o.hideDuringFocus ) && !$( e.target ).closest( ".ui-header-fixed, .ui-footer-fixed" ).length ) {
						//Fix for issue #4724 Moving through form in Mobile Safari with "Next" and "Previous" system 
						//controls causes fixed position, tap-toggle false Header to reveal itself
						// isVisible instead of self._visible because the focusin and focusout events fire twice at the same time
						// Also use a delay for hiding the toolbars because on Android native browser focusin is direclty followed
						// by a focusout when a native selects opens and the other way around when it closes.
						if ( e.type === "focusout" && !isVisible ) {
							isVisible = true;
							//wait for the stack to unwind and see if we have jumped to another input
							clearTimeout( delayHide );
							delayShow = setTimeout( function() {
								self.show();
							}, 0 ); 
						} else if ( e.type === "focusin" && !!isVisible ) {
							//if we have jumped to another input clear the time out to cancel the show.
							clearTimeout( delayShow );
							isVisible = false;
							delayHide = setTimeout( function() {
								self.hide();
							}, 0 ); 
						}
					}
				});
		},

		_destroy: function() {
			var $el = this.element,
				header = $el.is( ".ui-header" );

			$el.closest( ".ui-page" ).css( "padding-" + ( header ? "top" : "bottom" ), "" );
			$el.removeClass( "ui-header-fixed ui-footer-fixed ui-header-fullscreen ui-footer-fullscreen in out fade slidedown slideup ui-fixed-hidden" );
			$el.closest( ".ui-page" ).removeClass( "ui-page-header-fixed ui-page-footer-fixed ui-page-header-fullscreen ui-page-footer-fullscreen" );
		}

	});

	//auto self-init widgets
	$.mobile.document
		.bind( "pagecreate create", function( e ) {

			// DEPRECATED in 1.1: support for data-fullscreen=true|false on the page element.
			// This line ensures it still works, but we recommend moving the attribute to the toolbars themselves.
			if ( $( e.target ).jqmData( "fullscreen" ) ) {
				$( $.mobile.fixedtoolbar.prototype.options.initSelector, e.target ).not( ":jqmData(fullscreen)" ).jqmData( "fullscreen", true );
			}

			$.mobile.fixedtoolbar.prototype.enhanceWithin( e.target );
		});

})( jQuery );

(function( $, undefined ) {
	$.widget( "mobile.fixedtoolbar", $.mobile.fixedtoolbar, {

			_create: function() {
				this._super();
				this._workarounds();
			},

			//check the browser and version and run needed workarounds
			_workarounds: function() {
				var ua = navigator.userAgent,
				platform = navigator.platform,
				// Rendering engine is Webkit, and capture major version
				wkmatch = ua.match( /AppleWebKit\/([0-9]+)/ ),
				wkversion = !!wkmatch && wkmatch[ 1 ],
				os = null,
				self = this;
				//set the os we are working in if it dosent match one with workarounds return
				if( platform.indexOf( "iPhone" ) > -1 || platform.indexOf( "iPad" ) > -1  || platform.indexOf( "iPod" ) > -1 ){
					os = "ios";
				} else if( ua.indexOf( "Android" ) > -1 ){
					os = "android";
				} else {
					return;
				}
				//check os version if it dosent match one with workarounds return
				if( os === "ios" ) {
					//iOS  workarounds
					self._bindScrollWorkaround();
				} else if( os === "android" && wkversion && wkversion < 534 ) {
					//Android 2.3 run all Android 2.3 workaround
					self._bindScrollWorkaround();
					self._bindListThumbWorkaround();
				} else {
					return;
				}
			},

			//Utility class for checking header and footer positions relative to viewport
			_viewportOffset: function() {
				var $el = this.element,
					header = $el.is( ".ui-header" ),
					offset = Math.abs($el.offset().top - $.mobile.window.scrollTop());
				if( !header ) {
					offset = Math.round(offset - $.mobile.window.height() + $el.outerHeight())-60;
				}
				return offset;
			},

			//bind events for _triggerRedraw() function 
			_bindScrollWorkaround: function() {
				var self = this;
				//bind to scrollstop and check if the toolbars are correctly positioned
				this._on( $.mobile.window, { scrollstop: function() {
					var viewportOffset = self._viewportOffset();
					//check if the header is visible and if its in the right place
					if( viewportOffset > 2 && self._visible) {
						self._triggerRedraw();
					}
				}});
			},

			//this addresses issue #4250 Persistent footer instability in v1.1 with long select lists in Android 2.3.3
			//and issue #3748 Android 2.x: Page transitions broken when fixed toolbars used
			//the absolutely positioned thumbnail in a list view causes problems with fixed position buttons above in a nav bar
			//setting the li's to -webkit-transform:translate3d(0,0,0); solves this problem to avoide potential issues in other
			//platforms we scope this with the class ui-android-2x-fix
			_bindListThumbWorkaround: function() {
				this.element.closest(".ui-page").addClass( "ui-android-2x-fixed" );
			},
			//this addresses issues #4337 Fixed header problem after scrolling content on iOS and Android
			//and device bugs project issue #1 Form elements can lose click hit area in position: fixed containers.
			//this also addresses not on fixed toolbars page in docs
			//adding 1px of padding to the bottom then removing it causes a "redraw"
			//which positions the toolbars correctly (they will always be visually correct) 
			_triggerRedraw: function() {
				var paddingBottom = parseFloat( $( ".ui-page-active" ).css( "padding-bottom" ) );
				//trigger page redraw to fix incorrectly positioned fixed elements
				$( ".ui-page-active" ).css( "padding-bottom", ( paddingBottom + 1 ) +"px" );
				//if the padding is reset with out a timeout the reposition will not occure.
				//this is independant of JQM the browser seems to need the time to react.
				setTimeout( function() {
					$( ".ui-page-active" ).css( "padding-bottom", paddingBottom + "px" );
				}, 0 );
			},

			destroy: function() {
				this._super();
				//Remove the class we added to the page previously in android 2.x 
				this.element.closest(".ui-page-active").removeClass( "ui-android-2x-fix" );
			}
	});

	})( jQuery );

(function( $, undefined ) {

$.widget( "mobile.panel", $.mobile.widget, {
	options: {
		classes: {
			panel: "ui-panel",
			panelOpen: "ui-panel-open",
			panelClosed: "ui-panel-closed",
			panelFixed: "ui-panel-fixed",
			panelInner: "ui-panel-inner",
			modal: "ui-panel-dismiss",
			modalOpen: "ui-panel-dismiss-open",
			pagePanel: "ui-page-panel",
			pagePanelOpen: "ui-page-panel-open",
			contentWrap: "ui-panel-content-wrap",
			contentWrapOpen: "ui-panel-content-wrap-open",
			contentWrapClosed: "ui-panel-content-wrap-closed",
			contentFixedToolbar: "ui-panel-content-fixed-toolbar",
			contentFixedToolbarOpen: "ui-panel-content-fixed-toolbar-open",
			contentFixedToolbarClosed: "ui-panel-content-fixed-toolbar-closed",
			animate: "ui-panel-animate"
		},
		animate: true,
		theme: "c",
		position: "left",
		dismissible: true,
		display: "reveal", //accepts reveal, push, overlay
		initSelector: ":jqmData(role='panel')",
		swipeClose: true,
		positionFixed: false
	},

	_panelID: null,
	_closeLink: null,
	_page: null,
	_modal: null,
	_panelInner: null,
	_wrapper: null,
	_fixedToolbar: null,

	_create: function() {
		var self = this,
			$el = self.element,
			page = $el.closest( ":jqmData(role='page')" ),
			_getPageTheme = function() {
				var $theme = $.data( page[0], "mobilePage" ).options.theme,
				$pageThemeClass = "ui-body-" + $theme;
				return $pageThemeClass;
			},
			_getPanelInner = function() {
				var $panelInner = $el.find( "." + self.options.classes.panelInner );
				if ( $panelInner.length === 0 ) {
					$panelInner = $el.children().wrapAll( '<div class="' + self.options.classes.panelInner + '" />' ).parent();
				}
				return $panelInner;
			},
			_getWrapper = function() {
				var $wrapper = page.find( "." + self.options.classes.contentWrap );
				if ( $wrapper.length === 0 ) {
					$wrapper = page.children( ".ui-header:not(:jqmData(position='fixed')), .ui-content:not(:jqmData(role='popup')), .ui-footer:not(:jqmData(position='fixed'))" ).wrapAll( '<div class="' + self.options.classes.contentWrap + ' ' + _getPageTheme() + '" />' ).parent();
					if ( $.support.cssTransform3d && !!self.options.animate ) {
						$wrapper.addClass( self.options.classes.animate );
					}
				}
				return $wrapper;
			},
			_getFixedToolbar = function() {
				var $fixedToolbar = page.find( "." + self.options.classes.contentFixedToolbar );
				if ( $fixedToolbar.length === 0 ) {
					$fixedToolbar = page.find( ".ui-header:jqmData(position='fixed'), .ui-footer:jqmData(position='fixed')" ).addClass( self.options.classes.contentFixedToolbar );
					if ( $.support.cssTransform3d && !!self.options.animate ) {
						$fixedToolbar.addClass( self.options.classes.animate );
					}
				}
				return $fixedToolbar;
			};

		// expose some private props to other methods
		$.extend( this, {
			_panelID: $el.attr( "id" ),
			_closeLink: $el.find( ":jqmData(rel='close')" ),
			_page: $el.closest( ":jqmData(role='page')" ),
			_pageTheme: _getPageTheme(),
			_panelInner: _getPanelInner(),
			_wrapper: _getWrapper(),
			_fixedToolbar: _getFixedToolbar()
		});
		
		self._addPanelClasses();
		self._wrapper.addClass( this.options.classes.contentWrapClosed );
		self._fixedToolbar.addClass( this.options.classes.contentFixedToolbarClosed );
		// add class to page so we can set "overflow-x: hidden;" for it to fix Android zoom issue
		self._page.addClass( self.options.classes.pagePanel );
		
		// if animating, add the class to do so
		if ( $.support.cssTransform3d && !!self.options.animate ) {
			this.element.addClass( self.options.classes.animate );
		}
		
		self._bindUpdateLayout();
		self._bindCloseEvents();
		self._bindLinkListeners();
		self._bindPageEvents();

		if ( !!self.options.dismissible ) {
			self._createModal();
		}

		self._bindSwipeEvents();
	},

	_createModal: function( options ) {
		var self = this;
		
		self._modal = $( "<div class='" + self.options.classes.modal + "' data-panelid='" + self._panelID + "'></div>" )
			.on( "mousedown", function() {
				self.close();
			})
			.appendTo( this._page );
	},

	_getPosDisplayClasses: function( prefix ) {
		return prefix + "-position-" + this.options.position + " " + prefix + "-display-" + this.options.display;
	},

	_getPanelClasses: function() {
		var panelClasses = this.options.classes.panel +
			" " + this._getPosDisplayClasses( this.options.classes.panel ) +
			" " + this.options.classes.panelClosed;

		if ( this.options.theme ) {
			panelClasses += " ui-body-" + this.options.theme;
		}
		if ( !!this.options.positionFixed ) {
			panelClasses += " " + this.options.classes.panelFixed;
		}
		return panelClasses;
	},

	_addPanelClasses: function() {
		this.element.addClass( this._getPanelClasses() );
	},

	_bindCloseEvents: function() {
		var self = this;
		
		self._closeLink.on( "click.panel" , function( e ) {
			e.preventDefault();
			self.close();
			return false;
		});
		self.element.on( "click.panel" , "a:jqmData(ajax='false')", function( e ) {
			self.close();
		});		
	},

	_positionPanel: function() {
		var self = this,
			panelInnerHeight = self._panelInner.outerHeight(),
			expand = panelInnerHeight > $.mobile.getScreenHeight();

		if ( expand || !self.options.positionFixed ) {
			if ( expand ) {
				self._unfixPanel();
				$.mobile.resetActivePageHeight( panelInnerHeight );
			}
			self._scrollIntoView( panelInnerHeight );
		} else {
			self._fixPanel();
		}
	},

	_scrollIntoView: function( panelInnerHeight ) {
		if ( panelInnerHeight < $( window ).scrollTop() ) {
			window.scrollTo( 0, 0 );
		}	
	},

	_bindFixListener: function() {
		this._on( $( window ), { "throttledresize": "_positionPanel" });
	},

	_unbindFixListener: function() {
		this._off( $( window ), "throttledresize" );
	},

	_unfixPanel: function() {
		if ( !!this.options.positionFixed && $.support.fixedPosition ) {
			this.element.removeClass( this.options.classes.panelFixed );
		}
	},

	_fixPanel: function() {
		if ( !!this.options.positionFixed && $.support.fixedPosition ) {
			this.element.addClass( this.options.classes.panelFixed );
		}
	},
	
	_bindUpdateLayout: function() {
		var self = this;
		
		self.element.on( "updatelayout", function( e ) {
			if ( self._open ) {
				self._positionPanel();
			}
		});
	},

	_bindLinkListeners: function() {
		var self = this;

		self._page.on( "click.panel" , "a", function( e ) {
			if ( this.href.split( "#" )[ 1 ] === self._panelID && self._panelID !== undefined ) {
				e.preventDefault();
				var $link = $( this );
				if ( ! $link.hasClass( "ui-link" ) ) {
					$link.addClass( $.mobile.activeBtnClass );
					self.element.one( "panelopen panelclose", function() {
						$link.removeClass( $.mobile.activeBtnClass );
					});
				}
				self.toggle();
				return false;
			}
		});
	},
	
	_bindSwipeEvents: function() {
		var self = this,
			area = self._modal ? self.element.add( self._modal ) : self.element;
		
		// on swipe, close the panel
		if( !!self.options.swipeClose ) {
			if ( self.options.position === "left" ) {
				area.on( "swipeleft.panel", function( e ) {
					self.close();
				});
			} else {
				area.on( "swiperight.panel", function( e ) {
					self.close();
				});
			}
		}
	},

	_bindPageEvents: function() {
		var self = this;
			
		self._page
			// Close the panel if another panel on the page opens
			.on( "panelbeforeopen", function( e ) {
				if ( self._open && e.target !== self.element[ 0 ] ) {
					self.close();
				}
			})
			// clean up open panels after page hide
			.on( "pagehide", function( e ) {
				if ( self._open ) {
					self.close( true );
				}
			})
			// on escape, close? might need to have a target check too...
			.on( "keyup.panel", function( e ) {
				if ( e.keyCode === 27 && self._open ) {
					self.close();
				}
			});
	},

	// state storage of open or closed
	_open: false,

	_contentWrapOpenClasses: null,
	_fixedToolbarOpenClasses: null,
	_modalOpenClasses: null,

	open: function( immediate ) {
		if ( !this._open ) {
			var self = this,
				o = self.options,
				_openPanel = function() {
					self._page.off( "panelclose" );
					self._page.jqmData( "panel", "open" );
					
					if ( !immediate && $.support.cssTransform3d && !!o.animate ) {
						self.element.add( self._wrapper ).on( self._transitionEndEvents, complete );
					} else {
						setTimeout( complete, 0 );
					}
					
					if ( self.options.theme && self.options.display !== "overlay" ) {
						self._page
							.removeClass( self._pageTheme )
							.addClass( "ui-body-" + self.options.theme );
					}
					
					self.element.removeClass( o.classes.panelClosed ).addClass( o.classes.panelOpen );
					
					self._positionPanel();
					
					// Fix for IE7 min-height bug
					if ( self.options.theme && self.options.display !== "overlay" ) {
						self._wrapper.css( "min-height", self._page.css( "min-height" ) );
					}
					
					self._contentWrapOpenClasses = self._getPosDisplayClasses( o.classes.contentWrap );
					self._wrapper
						.removeClass( o.classes.contentWrapClosed )
						.addClass( self._contentWrapOpenClasses + " " + o.classes.contentWrapOpen );
						
					self._fixedToolbarOpenClasses = self._getPosDisplayClasses( o.classes.contentFixedToolbar );
					self._fixedToolbar
						.removeClass( o.classes.contentFixedToolbarClosed )
						.addClass( self._fixedToolbarOpenClasses + " " + o.classes.contentFixedToolbarOpen );
						
					self._modalOpenClasses = self._getPosDisplayClasses( o.classes.modal ) + " " + o.classes.modalOpen;
					if ( self._modal ) {
						self._modal.addClass( self._modalOpenClasses );
					}
				},
				complete = function() {
					self.element.add( self._wrapper ).off( self._transitionEndEvents, complete );

					self._page.addClass( o.classes.pagePanelOpen );
					
					self._bindFixListener();
					
					self._trigger( "open" );
				};

			if ( this.element.closest( ".ui-page-active" ).length < 0 ) {
				immediate = true;
			}
			
			self._trigger( "beforeopen" );
			
			if ( self._page.jqmData('panel') === "open" ) {
				self._page.on( "panelclose", function() {
					_openPanel();
				});
			} else {
				_openPanel();
			}
			
			self._open = true;
		}
	},

	close: function( immediate ) {
		if ( this._open ) {
			var o = this.options,
				self = this,
				_closePanel = function() {
					if ( !immediate && $.support.cssTransform3d && !!o.animate ) {
						self.element.add( self._wrapper ).on( self._transitionEndEvents, complete );
					} else {
						setTimeout( complete, 0 );
					}
					
					self._page.removeClass( o.classes.pagePanelOpen );
					self.element.removeClass( o.classes.panelOpen );
					self._wrapper.removeClass( o.classes.contentWrapOpen );
					self._fixedToolbar.removeClass( o.classes.contentFixedToolbarOpen );
					
					if ( self._modal ) {
						self._modal.removeClass( self._modalOpenClasses );
					}
				},
				complete = function() {
					if ( self.options.theme && self.options.display !== "overlay" ) {
						self._page.removeClass( "ui-body-" + self.options.theme ).addClass( self._pageTheme );
						// reset fix for IE7 min-height bug
						self._wrapper.css( "min-height", "" );
					}
					self.element.add( self._wrapper ).off( self._transitionEndEvents, complete );
					self.element.addClass( o.classes.panelClosed );
					
					self._wrapper
						.removeClass( self._contentWrapOpenClasses )
						.addClass( o.classes.contentWrapClosed );
						
					self._fixedToolbar
						.removeClass( self._fixedToolbarOpenClasses )
						.addClass( o.classes.contentFixedToolbarClosed );
						
					self._fixPanel();
					self._unbindFixListener();
					$.mobile.resetActivePageHeight();
					
					self._page.jqmRemoveData( "panel" );
					self._trigger( "close" );
				};
				
			if ( this.element.closest( ".ui-page-active" ).length < 0 ) {
				immediate = true;
			}
			self._trigger( "beforeclose" );

			_closePanel();

			self._open = false;
		}
	},
	
	toggle: function( options ) {
		this[ this._open ? "close" : "open" ]();
	},

	_transitionEndEvents: "webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd",

	_destroy: function() {
		var classes = this.options.classes,
			theme = this.options.theme,
			hasOtherSiblingPanels = this.element.siblings( "." + classes.panel ).length;

		// create
		if ( !hasOtherSiblingPanels ) {
			this._wrapper.children().unwrap();
			this._page.find( "a" ).unbind( "panelopen panelclose" );
			this._page.removeClass( classes.pagePanel );
			if ( this._open ) {
				this._page.jqmRemoveData( "panel" );
				this._page.removeClass( classes.pagePanelOpen );
				if ( theme ) {
					this._page.removeClass( "ui-body-" + theme ).addClass( this._pageTheme );
				}
				$.mobile.resetActivePageHeight();
			}
		} else if ( this._open ) {
			this._wrapper.removeClass( classes.contentWrapOpen );
			this._fixedToolbar.removeClass( classes.contentFixedToolbarOpen );
			this._page.jqmRemoveData( "panel" );
			this._page.removeClass( classes.pagePanelOpen );
			if ( theme ) {
				this._page.removeClass( "ui-body-" + theme ).addClass( this._pageTheme );
			}
		}
		
		this._panelInner.children().unwrap();

		this.element.removeClass( [ this._getPanelClasses(), classes.panelAnimate ].join( " " ) )
			.off( "swipeleft.panel swiperight.panel" )
			.off( "panelbeforeopen" )
			.off( "panelhide" )
			.off( "keyup.panel" )
			.off( "updatelayout" );

		this._closeLink.off( "click.panel" );

		if ( this._modal ) {
			this._modal.remove();
		}

		// open and close
		this.element.off( this._transitionEndEvents )
			.removeClass( [ classes.panelUnfixed, classes.panelClosed, classes.panelOpen ].join( " " ) );
	}
});

//auto self-init widgets
$( document ).bind( "pagecreate create", function( e ) {
	$.mobile.panel.prototype.enhanceWithin( e.target );
});

})( jQuery );

(function( $, undefined ) {

$.widget( "mobile.table", $.mobile.widget, {

		options: {
			classes: {
				table: "ui-table"
			},
			initSelector: ":jqmData(role='table')"
		},

		_create: function() {
			var self = this;
			self.refresh( true );
		},

		refresh: function (create) {
			var self = this,
				trs = this.element.find( "thead tr" );

			if ( create ) {
				this.element.addClass( this.options.classes.table );
			}

			// Expose headers and allHeaders properties on the widget
			// headers references the THs within the first TR in the table
			self.headers = this.element.find( "tr:eq(0)" ).children();

			// allHeaders references headers, plus all THs in the thead, which may include several rows, or not
			self.allHeaders = self.headers.add( trs.children() );

			trs.each(function(){

				var coltally = 0;

				$( this ).children().each(function( i ){

					var span = parseInt( $( this ).attr( "colspan" ), 10 ),
						sel = ":nth-child(" + ( coltally + 1 ) + ")";
					$( this )
						.jqmData( "colstart", coltally + 1 );

					if( span ){
						for( var j = 0; j < span - 1; j++ ){
							coltally++;
							sel += ", :nth-child(" + ( coltally + 1 ) + ")";
						}
					}

					if ( create === undefined ) {
						$(this).jqmData("cells", "");
					}
					// Store "cells" data on header as a reference to all cells in the same column as this TH
					$( this )
						.jqmData( "cells", self.element.find( "tr" ).not( trs.eq(0) ).not( this ).children( sel ) );

					coltally++;

				});

			});

			// update table modes
			if ( create === undefined ) {
				this.element.trigger( 'refresh' );
			}
	}

});

//auto self-init widgets
$.mobile.document.bind( "pagecreate create", function( e ) {
	$.mobile.table.prototype.enhanceWithin( e.target );
});

})( jQuery );


(function( $, undefined ) {

$.mobile.table.prototype.options.mode = "columntoggle";

$.mobile.table.prototype.options.columnBtnTheme = null;

$.mobile.table.prototype.options.columnPopupTheme = null;

$.mobile.table.prototype.options.columnBtnText = "Columns...";

$.mobile.table.prototype.options.classes = $.extend(
	$.mobile.table.prototype.options.classes,
	{
		popup: "ui-table-columntoggle-popup",
		columnBtn: "ui-table-columntoggle-btn",
		priorityPrefix: "ui-table-priority-",
		columnToggleTable: "ui-table-columntoggle"
	}
);

$.mobile.document.delegate( ":jqmData(role='table')", "tablecreate refresh", function( e ) {
	
	var $table = $( this ),
		self = $table.data( "mobile-table" ),
		event = e.type,
		o = self.options,
		ns = $.mobile.ns,
		id = ( $table.attr( "id" ) || o.classes.popup ) + "-popup", /* TODO BETTER FALLBACK ID HERE */
		$menuButton,
		$popup,
		$menu,
		$switchboard;

	if ( o.mode !== "columntoggle" ) {
		return;
	}

	if ( event !== "refresh" ) {
		self.element.addClass( o.classes.columnToggleTable );
	
		$menuButton = $( "<a href='#" + id + "' class='" + o.classes.columnBtn + "' data-" + ns + "rel='popup' data-" + ns + "mini='true'>" + o.columnBtnText + "</a>" ),
		$popup = $( "<div data-" + ns + "role='popup' data-" + ns + "role='fieldcontain' class='" + o.classes.popup + "' id='" + id + "'></div>"),
		$menu = $("<fieldset data-" + ns + "role='controlgroup'></fieldset>");
	}
	
	// create the hide/show toggles
	self.headers.not( "td" ).each(function( i ) {

		var priority = $( this ).jqmData( "priority" ),
			$cells = $( this ).add( $( this ).jqmData( "cells" ) );

		if ( priority ) {

			$cells.addClass( o.classes.priorityPrefix + priority );

			if ( event !== "refresh" ) {
				$("<label><input type='checkbox' checked />" + $( this ).text() + "</label>" )
					.appendTo( $menu )
					.children( 0 )
					.jqmData( "cells", $cells )
					.checkboxradio({
						theme: o.columnPopupTheme
					});
			} else {
				$( '#' + id + ' fieldset div:eq(' + i +')').find('input').jqmData( 'cells', $cells );
			}
		}
	});
	
	if ( event !== "refresh" ) {
		$menu.appendTo( $popup );
	}

	// bind change event listeners to inputs - TODO: move to a private method?
	if ( $menu === undefined ) {
		$switchboard = $('#' + id + ' fieldset');
	} else {
		$switchboard = $menu;
	}

	if ( event !== "refresh" ) {
		$switchboard.on( "change", "input", function( e ){
			if( this.checked ){
				$( this ).jqmData( "cells" ).removeClass( "ui-table-cell-hidden" ).addClass( "ui-table-cell-visible" );
			} else {
				$( this ).jqmData( "cells" ).removeClass( "ui-table-cell-visible" ).addClass( "ui-table-cell-hidden" );
			}
		});

		$menuButton
			.insertBefore( $table )
			.buttonMarkup({
				theme: o.columnBtnTheme
			});

		$popup
			.insertBefore( $table )
			.popup();
	}

	// refresh method
	self.update = function(){
		$switchboard.find( "input" ).each( function(){
			if (this.checked) {
				this.checked = $( this ).jqmData( "cells" ).eq(0).css( "display" ) === "table-cell";
				if (event === "refresh") {
					$( this ).jqmData( "cells" ).addClass('ui-table-cell-visible');
				}
			} else {
				$( this ).jqmData( "cells" ).addClass('ui-table-cell-hidden');
			}
			$( this ).checkboxradio( "refresh" );
		});
	};

	$.mobile.window.on( "throttledresize", self.update );

	self.update();

});

})( jQuery );

(function( $, undefined ) {

$.mobile.table.prototype.options.mode = "reflow";

$.mobile.table.prototype.options.classes = $.extend(
	$.mobile.table.prototype.options.classes,
	{
		reflowTable: "ui-table-reflow",
		cellLabels: "ui-table-cell-label"
	}
);

$.mobile.document.delegate( ":jqmData(role='table')", "tablecreate refresh", function( e ) {

	var $table = $( this ),
		event = e.type,
		self = $table.data( "mobile-table" ),
		o = self.options;

	// If it's not reflow mode, return here.
	if( o.mode !== "reflow" ){
		return;
	}

	if ( event !== "refresh" ) {
		self.element.addClass( o.classes.reflowTable );
	}

	// get headers in reverse order so that top-level headers are appended last
	var reverseHeaders =  $( self.allHeaders.get().reverse() );

	// create the hide/show toggles
	reverseHeaders.each(function( i ){
		var $cells = $( this ).jqmData( "cells" ),
			colstart = $( this ).jqmData( "colstart" ),
			hierarchyClass = $cells.not( this ).filter( "thead th" ).length && " ui-table-cell-label-top",
			text = $(this).text();

			if( text !== ""  ){

				if( hierarchyClass ){
					var iteration = parseInt( $( this ).attr( "colspan" ), 10 ),
						filter = "";

					if( iteration ){
						filter = "td:nth-child("+ iteration +"n + " + ( colstart ) +")";
					}
					$cells.filter( filter ).prepend( "<b class='" + o.classes.cellLabels + hierarchyClass + "'>" + text + "</b>"  );
				}
				else {
					$cells.prepend( "<b class='" + o.classes.cellLabels + "'>" + text + "</b>"  );
				}

			}
	});

});

})( jQuery );

(function( $, window ) {

	$.mobile.iosorientationfixEnabled = true;

	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	var ua = navigator.userAgent;
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && /OS [1-5]_[0-9_]* like Mac OS X/i.test( ua ) && ua.indexOf( "AppleWebKit" ) > -1 ) ){
		$.mobile.iosorientationfixEnabled = false;
		return;
	}

	var zoom = $.mobile.zoom,
		evt, x, y, z, aig;

	function checkTilt( e ) {
		evt = e.originalEvent;
		aig = evt.accelerationIncludingGravity;

		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );

		// If portrait orientation and in one of the danger zones
		if ( !window.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ) {
				if ( zoom.enabled ) {
					zoom.disable();
				}
		}	else if ( !zoom.enabled ) {
				zoom.enable();
		}
	}

	$.mobile.document.on( "mobileinit", function(){
		if( $.mobile.iosorientationfixEnabled ){
			$.mobile.window
				.bind( "orientationchange.iosorientationfix", zoom.enable )
				.bind( "devicemotion.iosorientationfix", checkTilt );
		}
	});

}( jQuery, this ));

(function( $, window, undefined ) {
	var	$html = $( "html" ),
			$head = $( "head" ),
			$window = $.mobile.window;

	//remove initial build class (only present on first pageshow)
	function hideRenderingClass() {
		$html.removeClass( "ui-mobile-rendering" );
	}

	// trigger mobileinit event - useful hook for configuring $.mobile settings before they're used
	$( window.document ).trigger( "mobileinit" );

	// support conditions
	// if device support condition(s) aren't met, leave things as they are -> a basic, usable experience,
	// otherwise, proceed with the enhancements
	if ( !$.mobile.gradeA() ) {
		return;
	}

	// override ajaxEnabled on platforms that have known conflicts with hash history updates
	// or generally work better browsing in regular http for full page refreshes (BB5, Opera Mini)
	if ( $.mobile.ajaxBlacklist ) {
		$.mobile.ajaxEnabled = false;
	}

	// Add mobile, initial load "rendering" classes to docEl
	$html.addClass( "ui-mobile ui-mobile-rendering" );

	// This is a fallback. If anything goes wrong (JS errors, etc), or events don't fire,
	// this ensures the rendering class is removed after 5 seconds, so content is visible and accessible
	setTimeout( hideRenderingClass, 5000 );

	$.extend( $.mobile, {
		// find and enhance the pages in the dom and transition to the first page.
		initializePage: function() {
			// find present pages
			var path = $.mobile.path,
				$pages = $( ":jqmData(role='page'), :jqmData(role='dialog')" ),
				hash = path.stripHash( path.stripQueryParams(path.parseLocation().hash) ),
				hashPage = document.getElementById( hash );

			// if no pages are found, create one with body's inner html
			if ( !$pages.length ) {
				$pages = $( "body" ).wrapInner( "<div data-" + $.mobile.ns + "role='page'></div>" ).children( 0 );
			}

			// add dialogs, set data-url attrs
			$pages.each(function() {
				var $this = $( this );

				// unless the data url is already set set it to the pathname
				if ( !$this.jqmData( "url" ) ) {
					$this.attr( "data-" + $.mobile.ns + "url", $this.attr( "id" ) || location.pathname + location.search );
				}
			});

			// define first page in dom case one backs out to the directory root (not always the first page visited, but defined as fallback)
			$.mobile.firstPage = $pages.first();

			// define page container
			$.mobile.pageContainer = $.mobile.firstPage.parent().addClass( "ui-mobile-viewport" );

			// alert listeners that the pagecontainer has been determined for binding
			// to events triggered on it
			$window.trigger( "pagecontainercreate" );

			// cue page loading message
			$.mobile.showPageLoadingMsg();

			//remove initial build class (only present on first pageshow)
			hideRenderingClass();

			// if hashchange listening is disabled, there's no hash deeplink,
			// the hash is not valid (contains more than one # or does not start with #)
			// or there is no page with that hash, change to the first page in the DOM
			// Remember, however, that the hash can also be a path!
			if ( ! ( $.mobile.hashListeningEnabled &&
				$.mobile.path.isHashValid( location.hash ) &&
				( $( hashPage ).is( ':jqmData(role="page")' ) ||
					$.mobile.path.isPath( hash ) ||
					hash === $.mobile.dialogHashKey ) ) ) {

				// Store the initial destination
				if ( $.mobile.path.isHashValid( location.hash ) ) {
					$.mobile.urlHistory.initialDst = hash.replace( "#", "" );
				}

				// make sure to set initial popstate state if it exists
				// so that navigation back to the initial page works properly
				if( $.event.special.navigate.isPushStateEnabled() ) {
					$.mobile.navigate.navigator.squash( path.parseLocation().href );
				}

				$.mobile.changePage( $.mobile.firstPage, {
					transition: "none",
					reverse: true,
					changeHash: false,
					fromHashChange: true
				});
			} else {
				// trigger hashchange or navigate to squash and record the correct
				// history entry for an initial hash path
				if( !$.event.special.navigate.isPushStateEnabled() ) {
					$window.trigger( "hashchange", [true] );
				} else {
					// TODO figure out how to simplify this interaction with the initial history entry
					// at the bottom js/navigate/navigate.js
					$.mobile.navigate.history.stack = [];
					$.mobile.navigate( $.mobile.path.isPath( location.hash ) ? location.hash : location.href );
				}
			}
		}
	});

	// initialize events now, after mobileinit has occurred
	$.mobile.navreadyDeferred.resolve();

	// check which scrollTop value should be used by scrolling to 1 immediately at domready
	// then check what the scroll top is. Android will report 0... others 1
	// note that this initial scroll won't hide the address bar. It's just for the check.
	$(function() {
		window.scrollTo( 0, 1 );

		// if defaultHomeScroll hasn't been set yet, see if scrollTop is 1
		// it should be 1 in most browsers, but android treats 1 as 0 (for hiding addr bar)
		// so if it's 1, use 0 from now on
		$.mobile.defaultHomeScroll = ( !$.support.scrollTop || $.mobile.window.scrollTop() === 1 ) ? 0 : 1;

		//dom-ready inits
		if ( $.mobile.autoInitializePage ) {
			$.mobile.initializePage();
		}

		// window load event
		// hide iOS browser chrome on load
		$window.load( $.mobile.silentScroll );

		if ( !$.support.cssPointerEvents ) {
			// IE and Opera don't support CSS pointer-events: none that we use to disable link-based buttons
			// by adding the 'ui-disabled' class to them. Using a JavaScript workaround for those browser.
			// https://github.com/jquery/jquery-mobile/issues/3558

			$.mobile.document.delegate( ".ui-disabled", "vclick",
				function( e ) {
					e.preventDefault();
					e.stopImmediatePropagation();
				}
			);
		}
	});
}( jQuery, this ));


}));

/*** <End:monaca-jquery-mobile LoadJs:"components/monaca-jquery-mobile/jquery.mobile.js"> ***/
/*** <End:monaca-jquery-mobile> ***/

/*** <Start:monaca-core-utils> ***/
/*** <Start:monaca-core-utils LoadJs:"components/monaca-core-utils/monaca-core-utils.js"> ***/
/**
 * Monaca Core Utility Library
 * This library requires cordova.js
 *
 * @version 2.0.4
 * @author  Asial Corporation
 */
window.monaca = window.monaca || {};

(function() {
    /*
     * monaca api queue.
     */
    monaca.apiQueue = monaca.apiQueue || {};
    monaca.apiQueue.paramsArray = [];
    monaca.apiQueue.exec = function(a,b,c,d,e){
        if (!monaca.isDeviceReady) {
            monaca.apiQueue.paramsArray.push([a,b,c,d,e]);
        } else {
            window.cordova.exec(a,b,c,d,e);
        }
    };
    monaca.apiQueue.next = function(){
        var params = monaca.apiQueue.paramsArray.shift();
        if (params) {
            window.cordova.exec(
                function(r) {
                  if (typeof params[0] === 'function') params[0](r); 
                  monaca.apiQueue.next();
                },
                function(r) {
                  if (typeof params[1] === 'function') params[1](r); 
                  monaca.apiQueue.next();
                },
                params[2],
                params[3],
                params[4]
            );
        }
    };

    monaca.isDeviceReady = monaca.isDeviceReady || false;
    document.addEventListener('deviceready', function(){
        window.monaca.isDeviceReady = true;
        monaca.apiQueue.next();
    }, false);

    /**
     * Check User-Agent
     */
    var isAndroid = !!(navigator.userAgent.match(/Android/i));
    var isIOS     = !!(navigator.userAgent.match(/iPhone|iPad|iPod/i));
    monaca.isAndroid = isAndroid;
    monaca.isIOS     = isIOS;

    /**
     * Obtain style property
     */
    monaca.retrieveUIStyle = function() {
        var argsArray = [].slice.apply(arguments);
        monaca.apiQueue.exec(arguments[arguments.length-1], null, "mobi.monaca.nativecomponent", "retrieve", argsArray);
    };

    /**
     * Update style property
     */
    monaca.updateUIStyle = function(id, name, value) {
        if (typeof id == "string") {
            var argsArray = [].slice.apply(arguments);
            monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", "update", argsArray);
        } else {
            for (var i = 0; i < id.length; i++) {
                monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", "update", [id[i], name, value]);
            }
        }
    };
    
    if (isAndroid) {
        monaca.retrieveUIStyle = function(id, name, success, failure) {
            monaca.apiQueue.exec(
                function(style) { success(style[name]); } || function() { }, 
                failure || function() { }, 
                "mobi.monaca.nativecomponent",
                "retrieve", 
                [id]
            );
        };
            
        monaca.updateUIStyle = function(id, name, value, success, failure) {
            var style = {};
            style[name] = value;
            
            monaca.apiQueue.exec(
                success || function() { }, 
                failure || function() { }, 
                "mobi.monaca.nativecomponent",
                "update", 
                [id, style]
            );
        };
    }

    /**
     * Spinner handling
     */
    monaca.showSpinner = function (options) {
        options = options || {};
        var src = options.src ? options.src : null;
        var frames = options.frames != null ? options.frames : null;
        var interval = options.interval != null ? options.interval : null;
        var backgroundColor = options.backgroundColor ? options.backgroundColor : null;
        var backgroundOpacity = options.backgroundOpacity != null ? options.backgroundOpacity : null;
        var title = options.title ? options.title : null;
        var titleColor = options.titleColor ? options.titleColor : null;
        var titleFontScale = options.titleFontScale != null ? options.titleFontScale : null;
        monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'showSpinner', [ src, frames, interval, backgroundColor, backgroundOpacity, title, titleColor, titleFontScale, null ]);
    };

    monaca.hideSpinner = function(){
        monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'hideSpinner', []);
    };

    monaca.updateSpinnerTitle = function(newTitle){
        if (!newTitle) newTitle = "";
        monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'updateSpinnerTitle', [ newTitle ]);
    };

    var transitionPluginName = "Transit";
    
    /**
     * Open new page.
     */
    monaca.pushPage = function(path, options, param) {
        options = options || {};
        var animation = null;
        switch (options.animation) {
        case "lift":
          animation = "modal"; break;
        case "slide":
        case "slideLeft":
          animation = "push"; break;
        case "slideRight":
          animation = "slideRight"; break;
        default:
          animation = "push";
        }
        monaca.apiQueue.exec(null, null, transitionPluginName, animation, [path, options, param]);
    };
    /**
     * Close current page.
     */
    monaca.popPage = function(options) {
        options = options || {};
        var name = options.animation == 'lift' ? 'dismiss' : 'pop';
        monaca.apiQueue.exec(null, null, transitionPluginName, name, [options]);
    };

    /**
     * Open in browser.
     */
    monaca.invokeBrowser = function(url) {
        monaca.apiQueue.exec(null, null, transitionPluginName, "browse", [url]);
    };

    /** 
     * Load in current page.
     */
    monaca.load = function(path, options, param) {
        monaca.apiQueue.exec(null, null, transitionPluginName, "link", [path, options, param]);
    };

    /**
     * return to top page.
     */
    monaca.home = function(options) {
        options = options || {};
        monaca.apiQueue.exec(null, null, transitionPluginName, "home", [options]);
    };

    /**
     * Clear stack
     */
    monaca.clearPageStack = function(clearAll) {
        clearAll = clearAll || false;
        monaca.apiQueue.exec(null, null, transitionPluginName, "clearPageStack", [clearAll]);
    };


    /**
     * Console API from independent PhoneGap.
     */
    window.monaca.console = window.monaca.console || {};

    /**
     * base method for send log.
     */
    monaca.console.sendLog = function(level, url, line, char, arguments) {
        var message;
        for (var i=0; i<arguments.length; i++){
            if (typeof arguments[i] == "string") {
                message = arguments[i];
            } else {
                message = JSON.stringify(arguments[i]);
            }

            if (isIOS) {
                var head = message.substr(0, 5);
                if (window.monaca.isDeviceReady !== true || (head != 'ERROR' && head != 'WARN:')) {
                    var xhr = new XMLHttpRequest();
                    var path = "monaca://log?level=" + encodeURIComponent(level) + "&message=" + encodeURIComponent(message);
                    xhr.open("GET", path);
                    xhr.send();
                }
            } else {
                window.console[level](message);
            }
        }
    }

    /**
     * monaca console methods
     */
    var methods = ["debug", "info", "log", "warn", "error"];
    for (var i=0; i<methods.length; i++) {
        var method = methods[i];
        monaca.console[method] = function(method) {
            return function() {
                monaca.console.sendLog(method, null, null, null, arguments);
            };
        }(method);
    }
    
    /** Replace window.console if iOS **/
    if (isIOS) {
      window.console = window.monaca.console;
    }
    /* Comment out for now
    window.onerror = function (desc, page, line, char) {
      monaca.console.sendLog("error", page, line, char, [desc]);
    };
    */

    window.monaca.splashScreen = window.monaca.splashScreen || {};
    var splashScreenPluginName = "MonacaSplashScreen";

    /**
     * hide SplashScreen.
     */
    monaca.splashScreen.hide = function() {
        if (isAndroid) {
            monaca.apiQueue.exec(null, null, splashScreenPluginName, "hide", []);
        } else {
            navigator.splashscreen.hide();
        }
    };

    // Set monaca.baseUrl
    if (typeof location.href !== "string") {
        console.warn("Cannot find base url");
        monaca.baseUrl = null;
    } else {
        monaca.baseUrl = location.href.split("/www/")[0] + "/www/";
    }

    /**
     * Get device ID
     */
    monaca.getDeviceId = function(callback) {
        monaca.apiQueue.exec(function(result) { callback(result.deviceId); }, null, "Monaca", "getRuntimeConfiguration", []);
    };

})();

/**
 * iOS Status Bar Plugin
 *
 * @author Asial Corporation
 * @date   2014/1/15
 */
window.StatusBar = window.StatusBar || {};

(function() {

  /*
    hideStatusBar
    support : iOS6,iOS7
  */
  StatusBar.hideStatusBar = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'hideStatusBar', []);
  }

  /*
    showStatusBar
    support : iOS6,iOS7
  */
  StatusBar.showStatusBar = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'showStatusBar', []);
  }

  /* 
    statusBarStyleDefault
    support : iOS6,iOS7
  */
  StatusBar.statusBarStyleDefault = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleDefault', []);
  }

  /* 
    statusBarStyleLightContent
    support : iOS7
  */
  StatusBar.statusBarStyleLightContent = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleLightContent', []);
  }

  /* 
    statusBarStyleBlackOpaque
    support : iOS6
  */
  StatusBar.statusBarStyleBlackOpaque = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleBlackOpaque', []);
  }

  /* 
    statusBarStyleBlackTranslucent
    support : iOS6
  */
  StatusBar.statusBarStyleBlackTranslucent = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleBlackTranslucent', []);
  }

})();

/**
 * Monaca Cloud Functions
 *  Version 1.5.0
 *
 * @author Masahiro TANAKA <info@monaca.mobi>
 * @date   2013/03/17
 */
window.monaca = window.monaca || {};
window.monaca.cloud = window.monaca.cloud || {};

(function() {
    /**
     * Push Notification
     */
    monaca.cloud.Push = {};
    monaca.cloud.Push.callback = null;
    monaca.cloud.Push.callbackData = null;

    monaca.cloud.Push.send = function(data) {
        if (typeof monaca.cloud.Push.callback === "function") {
            monaca.cloud.Push.callback(data);
        } else {
            monaca.cloud.Push.callbackData = data;
        }
    };
    monaca.cloud.Push.setHandler = function(fn) {
        if (typeof fn !== "function") {
            console.warn("Push callback must be a function");
        } else {
            monaca.cloud.Push.callback = fn;
            if (monaca.cloud.Push.callbackData) {
                monaca.cloud.Push.callback(monaca.cloud.Push.callbackData);
                monaca.cloud.Push.callbackData = null;
            }
        }
    }; 
    
})();


/*
 * cloud
 */
(function(root) {
  var original$ = root.$;
  var originalZepto = root.Zepto;

  /* Zepto 1.1.3 - zepto event ajax deferred callbacks - zeptojs.com/license */
  var Zepto=function(){function k(t){return null==t?String(t):j[T.call(t)]||"object"}function $(t){return"function"==k(t)}function L(t){return null!=t&&t==t.window}function D(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function F(t){return"object"==k(t)}function Z(t){return F(t)&&!L(t)&&Object.getPrototypeOf(t)==Object.prototype}function M(t){return"number"==typeof t.length}function R(t){return s.call(t,function(t){return null!=t})}function _(t){return t.length>0?n.fn.concat.apply([],t):t}function q(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function W(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function z(t,e){return"number"!=typeof e||c[q(t)]?e:e+"px"}function H(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function I(n,i,r){for(e in i)r&&(Z(i[e])||A(i[e]))?(Z(i[e])&&!Z(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),I(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function B(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return $(e)?e.call(t,n,i):e}function U(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function X(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n in t.childNodes)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},T=j.toString,S={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return S.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~S.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},S.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),Z(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},S.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},S.isZ=function(t){return t instanceof S.Z},S.init=function(e,i){var r;if(!e)return S.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=S.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(a,e)}else{if($(e))return n(a).ready(e);if(S.isZ(e))return e;if(A(e))r=R(e);else if(F(e))r=[e],e=null;else if(l.test(e))r=S.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(a,e)}}return S.Z(r,e)},n=function(t,e){return S.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){I(t,n,e)}),t},S.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return D(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=function(t,e){return t!==e&&t.contains(e)},n.type=k,n.isFunction=$,n.isWindow=L,n.isArray=A,n.isPlainObject=Z,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(M(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return _(i)},n.each=function(t,e){var n,i;if(M(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return $(t)?this.not(this.not(t)):n(s.call(this,function(e){return S.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&S.matches(this[0],t)},not:function(e){var i=[];if($(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):M(e)&&$(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return F(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!F(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!F(t)?t:n(t)},find:function(t){var e,i=this;return e="object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(S.qsa(this[0],t)):this.map(function(){return S.qsa(this,t)})},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:S.matches(i,t));)i=i!==e&&!D(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!D(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return B(e,t)},parent:function(t){return B(N(this.pluck("parentNode")),t)},children:function(t){return B(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return B(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=H(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=$(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=$(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))})},text:function(e){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e===t?"":""+e})},attr:function(n,i){var r;return"string"==typeof n&&i===t?0==this.length||1!==this[0].nodeType?t:"value"==n&&"INPUT"==this[0].nodeName?this.val():!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:this.each(function(t){if(1===this.nodeType)if(F(n))for(e in n)U(this,e,n[e]);else U(this,n,J(this,i,t,this.getAttribute(n)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&U(this,t)})},prop:function(e,n){return e=P[e]||e,n===t?this[0]&&this[0][e]:this.each(function(t){this[e]=J(this,n,t,this[e])})},data:function(e,n){var i=this.attr("data-"+e.replace(m,"-$1").toLowerCase(),n);return null!==i?Y(i):t},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=J(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[C(t)]||o.getPropertyValue(t);if(A(t)){var s={};return n.each(A(t)?t:[t],function(t,e){s[e]=r.style[C(e)]||o.getPropertyValue(e)}),s}}var a="";if("string"==k(t))i||0===i?a=q(t)+":"+z(t,i):this.each(function(){this.style.removeProperty(q(t))});else for(e in t)t[e]||0===t[e]?a+=q(e)+":"+z(e,t[e])+";":this.each(function(){this.style.removeProperty(q(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(X(t))},W(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=X(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&X(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?X(this,""):(i=X(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(W(t)," ")}),void X(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,X(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?L(s)?s["inner"+i]:D(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=k(e),"object"==t||"array"==t||null==e?e:S.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,a){o=i?a:a.parentNode,a=0==e?a.nextSibling:1==e?a.firstChild:2==e?a:null,r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();G(o.insertBefore(t,a),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),S.Z.prototype=n.fn,S.uniq=N,S.deserializeValue=Y,n.zepto=S,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function T(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){if(r(e)){var i=function(){return e.apply(n,arguments)};return i._zid=l(e),i}if(o(n))return t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(T(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=T(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,"ajaxStart")}function d(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void h(e,n,"ajaxSend",[t,e])}function g(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,"ajaxSuccess",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,"ajaxError",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,"ajaxComplete",[e,n]),d(n)}function x(){}function b(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function w(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function E(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=w(e.url,e.data),e.data=void 0)}function j(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function S(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?S(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?g(f[0],l,i,r):v(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:x,success:x,error:x,complete:x,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),E(n),n.cache===!1&&(n.url=w(n.url,"_="+Date.now()));var s=n.dataType,a=/\?.+=\?/.test(n.url);if("jsonp"==s||a)return a||(n.url=w(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var j,u=n.accepts[s],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l("X-Requested-With","XMLHttpRequest"),l("Accept",u||"*/*"),(u=n.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&l("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=x,clearTimeout(j);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&"file:"==h){s=s||b(n.mimeType||d.getResponseHeader("content-type")),e=d.responseText;try{"script"==s?(1,eval)(e):"xml"==s?e=d.responseXML:"json"==s&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,"parsererror",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?"error":"abort",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,"abort",d,n,o),d;if(n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];var T="async"in n?n.async:!0;d.open(n.type,n.url,T,n.username,n.password);for(r in f)y.apply(d,f[r]);return n.timeout>0&&(j=setTimeout(function(){d.onreadystatechange=x,d.abort(),v(null,"timeout",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(j.apply(null,arguments))},t.post=function(){var e=j.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=j.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=j(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(T(t)+"="+T(e))},S(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){function n(e){var i=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],r="pending",o={state:function(){return r},always:function(){return s.done(arguments).fail(arguments),this},then:function(){var e=arguments;return n(function(n){t.each(i,function(i,r){var a=t.isFunction(e[i])&&e[i];s[r[1]](function(){var e=a&&a.apply(this,arguments);if(e&&t.isFunction(e.promise))e.promise().done(n.resolve).fail(n.reject).progress(n.notify);else{var i=this===o?n.promise():this,s=a?[e]:arguments;n[r[0]+"With"](i,s)}})}),e=null}).promise()},promise:function(e){return null!=e?t.extend(e,o):o}},s={};return t.each(i,function(t,e){var n=e[2],a=e[3];o[e[1]]=n.add,a&&n.add(function(){r=a},i[1^t][2].disable,i[2][2].lock),s[e[0]]=function(){return s[e[0]+"With"](this===s?o:this,arguments),this},s[e[0]+"With"]=n.fireWith}),o.promise(s),e&&e.call(s,s),s}var e=Array.prototype.slice;t.when=function(i){var f,c,l,r=e.call(arguments),o=r.length,s=0,a=1!==o||i&&t.isFunction(i.promise)?o:0,u=1===a?i:n(),h=function(t,n,i){return function(r){n[t]=this,i[t]=arguments.length>1?e.call(arguments):r,i===f?u.notifyWith(n,i):--a||u.resolveWith(n,i)}};if(o>1)for(f=new Array(o),c=new Array(o),l=new Array(o);o>s;++s)r[s]&&t.isFunction(r[s].promise)?r[s].promise().done(h(s,l,r)).fail(u.reject).progress(h(s,c,f)):--a;return a||u.resolveWith(l,r),u.promise()},t.Deferred=n}(Zepto),function(t){t.Callbacks=function(e){e=t.extend({},e);var n,i,r,o,s,a,u=[],f=!e.once&&[],c=function(t){for(n=e.memory&&t,i=!0,a=o||0,o=0,s=u.length,r=!0;u&&s>a;++a)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}r=!1,u&&(f?f.length&&c(f.shift()):n?u.length=0:l.disable())},l={add:function(){if(u){var i=u.length,a=function(n){t.each(n,function(t,n){"function"==typeof n?e.unique&&l.has(n)||u.push(n):n&&n.length&&"string"!=typeof n&&a(n)})};a(arguments),r?s=u.length:n&&(o=i,c(n))}return this},remove:function(){return u&&t.each(arguments,function(e,n){for(var i;(i=t.inArray(n,u,i))>-1;)u.splice(i,1),r&&(s>=i&&--s,a>=i&&--a)}),this},has:function(e){return!(!u||!(e?t.inArray(e,u)>-1:u.length))},empty:function(){return s=u.length=0,this},disable:function(){return u=f=n=void 0,this},disabled:function(){return!u},lock:function(){return f=void 0,n||l.disable(),this},locked:function(){return!f},fireWith:function(t,e){return!u||i&&!f||(e=e||[],e=[t,e.slice?e.slice():e],r?f.push(e):c(e)),this},fire:function(){return l.fireWith(this,arguments)},fired:function(){return!!i}};return l}}(Zepto);

  root.$ = original$;
  root.Zepto = originalZepto;
  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};

  monaca.cloud.timeout = 30000;
  monaca.cloud.url = '%%%CLOUD_HOST%%%';
  monaca.cloud.backendId = '%%%BACKEND_ID%%%';
  monaca.cloud.apiKey = '%%%BACKEND_API_KEY%%%';
  monaca.cloud.deviceId = null;
  monaca.cloud.postQueue = [];

  /**
   * @property {jQuery} .
   */
  monaca.cloud.$ = Zepto;

  var MonacaCloudError = (function() {
    function MonacaCloudError(code, message, data) {
      if (typeof data === "undefined") {
        data = {};
      }
      this.code = code;
      this.message = message;
      this.data = data;
    }
    return MonacaCloudError;
  })();

  /**
   * @class
   */
  monaca.cloud.Error = function(code, message, data) {
    return new MonacaCloudError(code, message, data);
  };

  /**
   * @param {Number} msec .
   */
  monaca.cloud.setTimeout = function(msec) {
    this.timeout = msec;
  };

  // Get device id
  document.addEventListener("deviceready", function() {

    cordova.exec(function(result) {
        monaca.cloud.deviceId = new String(result.deviceId);
        monaca.cloud.url = new String(result.url);
        monaca.cloud.backendId = new String(result.backendId);
        monaca.cloud.apiKey = new String(result.apiKey);

        // execute and clear postQueue
        for (var i = 0; i < monaca.cloud.postQueue.length; i++) {
          monaca.cloud._doPost.apply(monaca.cloud, monaca.cloud.postQueue[i]);
        }
        monaca.cloud.postQueue = [];
      }, function(error) {
        console.error(error);
      },

      "Monaca",
      "getRuntimeConfiguration", []
    );

  }, false);

  // Others
  monaca.cloud._post = function(method, params, dfd, ajaxOptions, beforeSuccess) {
    if (monaca.cloud.deviceId == null) {
      monaca.cloud.postQueue.push([method, params, dfd, ajaxOptions, beforeSuccess]);
    } else {
      monaca.cloud._doPost(method, params, dfd, ajaxOptions, beforeSuccess);
    }
  };

  monaca.cloud._doPost = function(method, params, dfd, ajaxOptions, beforeSuccess) {
    var $ = monaca.cloud.$;

    if (typeof(ajaxOptions) === 'undefined') ajaxOptions = {};
    if ((typeof(method) === 'undefined') && (typeof(params) === 'undefined')) {
      throw new Error('Invalid arguments');
    }

    params['__api_key'] = monaca.cloud.apiKey;
    params['__device'] = monaca.cloud.deviceId;
    var sid = monaca.cloud._getSessionId();
    if (sid.length > 0) {
      params['__session'] = sid;
    }
    var data = JSON.stringify({
      jsonrpc: '2.0',
      method: method,
      params: params,
      id: '1'
    });

    var o = $.extend(true, {
      url: this.url + this.backendId,
      data: data,
      dataType: 'json',
      type: 'POST',
      timeout: this.timeout,
      success: function(jsonResponse, status, xhr) {
        var sessionHeader = xhr.getResponseHeader('X-Set-Monaca-Cloud-Session');
        if (sessionHeader) {
          monaca.cloud._setSessionId(sessionHeader);
        }

        if (typeof(jsonResponse.error) !== 'undefined') {
          // has error code
          dfd.reject(jsonResponse.error);
        } else {
          // success
          if (typeof(jsonResponse.result.loginToken) !== 'undefined') {
            localStorage.monacaCloudLoginToken = jsonResponse.result.loginToken;
          }
          if (typeof(beforeSuccess) !== 'undefined') {
            beforeSuccess(jsonResponse, status, xhr, dfd);
          }
          dfd.resolve(jsonResponse.result);
        }
      },
      error: function(xhr, status) {
        switch (status) {
          case 'timeout':
            var err = monaca.cloud.Error(-11, 'Connection timeout');
            break;
          case 'parsererror':
            var err = monaca.cloud.Error(-12, 'Invalid response');
            break;
          default:
            var err = monaca.cloud.Error(-13, 'Invalid status code');
        }
        dfd.reject(err);
      }
    }, ajaxOptions);

    $.ajax(o);
  };

  var _sessionId = '';

  monaca.cloud._getSessionId = function() {
    return _sessionId;
  };

  monaca.cloud._setSessionId = function(id) {
    if (typeof id != 'string') {
      id = '';
    }
    _sessionId = id;
  };

})(window);
/*
 * CollectionItem
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  MonacaCloudCollectionItem = (function() {

    function MonacaCloudCollectionItem(item, collection) {

      /**
       * @property {String} .
       */
      this._id = item._id;

      /**
       * @property {String} .
       */
      this._ownerUserOid = item._ownerUserOid;

      /**
       * @property {Date} .
       */
      this._createdAt = new Date(item._createdAt);

      /**
       * @property {Date} .
       */
      this._updatedAt = new Date(item._updatedAt);

      /**
       * @property {MonacaCloudCollection} .
       */
      this._collection = collection;


      for (var key in item) {
        if (key.substr(0, 1) != '_') {
          this[key] = item[key];
        }
      }
    }

    MonacaCloudCollectionItem.prototype = {

      /**
       * @return {$.Promise} .
       */
      update: function() {
        var dfd = new $.Deferred();
        var col = this._collection;
        var data = {};

        for (var key in this) {
          if (key.indexOf('_') !== 0) {
            data[key] = this[key];
          }
        }

        monaca.cloud._post('Collection.update', {
          collectionName: col.name,
          itemOid: this._id,
          data: data,
        }, dfd, {});

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      getPermission: function() {
        var dfd = new $.Deferred();
        var col = this._collection;

        monaca.cloud._post('Collection.getPermission', {
          collectionName: col.name,
          itemOid: this._id
        }, dfd, {});

        return dfd.promise();
      },

      /**
       * @param {Object} permission .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      updatePermission: function(permission, options) {
        var dfd = new $.Deferred();
        var col = this._collection;

        if (typeof(options) === 'undefined') {
          options = {};
        }

        monaca.cloud._post('Collection.updatePermission', {
          collectionName: col.name,
          criteria: '_id == ?',
          bindParams: [this._id],
          permission: permission,
          options: options
        }, dfd, {});

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      remove: function() {
        var dfd = new $.Deferred();
        var col = this._collection;

        monaca.cloud._post('Collection.delete', {
          collectionName: col.name,
          itemOid: this._id,
        }, dfd, {});

        return dfd.promise();
      },

      'delete': function() {
        return this.remove();
      }

    };


    return MonacaCloudCollectionItem;
  })();

  monaca.cloud.CollectionItem = function(item, collection) {
    return new MonacaCloudCollectionItem(item, collection);
  };

})(window);
/*
 * Collection
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  MonacaCloudCollection = (function() {

    function MonacaCloudCollection(name) {
      this.name = name;
    }

    MonacaCloudCollection.prototype = {

      /**
       * @param {Object|Array} items .
       * @return {Array} result .
       */
      _makeCollectionItem: function(items) {
        var result = [];

        if (items instanceof Array) {
          for (var i = 0; i < items.length; i++) {
            result[i] = monaca.cloud.CollectionItem(items[i], this);
          }
        } else {
          result = monaca.cloud.CollectionItem(items, this);
        }

        return result;
      },

      /**
       * @param {Criteria|Array} criteria .
       */
      _validateCriteria: function(criteria) {
        if ((typeof(criteria) === 'undefined') || (typeof(criteria) === 'null')) {
          criteria = monaca.cloud.Criteria('');
        } else if (typeof(criteria) === 'string') {
          criteria = monaca.cloud.Criteria(criteria);
        }

        return criteria;
      },

      /**
       * @param {Object|Array} orderBy .
       * @param {Object} options .
       */
      _validateOptions: function(orderBy, options) {
        //if orderBy is hash, consider it as "options"
        if ((typeof(orderBy) === 'object') && (typeof(orderBy.length) === 'undefined')) {
          options = orderBy;
          if (typeof(options.orderBy) !== 'undefined') {
            orderBy = orderBy.orderBy;
          } else {
            orderBy = null;
          }
        }

        if (orderBy === '') {
          orderBy = null;
        }

        return {
          orderBy: orderBy,
          options: options
        };
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      find: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            e.result.items = self._makeCollectionItem(e.result.items);
            dfd.resolve(e.result);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      findMine: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        var userOid = monaca.cloud.User._oid;

        if (criteria.query != '') {
          criteria.query = '(' + criteria.query + ') && ';
        }
        if (userOid != null) {
          criteria.query += '(_ownerUserOid == ?)';
          criteria.bindParams.push(userOid);
        } else {
          criteria.query += '(_ownerDeviceOid == ?)';
          criteria.bindParams.push(monaca.cloud.deviceId);
        }

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            e.result.items = self._makeCollectionItem(e.result.items);
            dfd.resolve(e.result);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      findOne: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            var result = (e.result.totalItems > 0) ? self._makeCollectionItem(e.result.items[0]) : null;
            dfd.resolve(result);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      findOneMine: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        var userOid = monaca.cloud.User._oid;

        if (criteria.query != '') {
          criteria.query = '(' + criteria.query + ') && ';
        }
        if (userOid != null) {
          criteria.query += '(_ownerUserOid == ?)';
          criteria.bindParams.push(userOid);
        } else {
          criteria.query += '(_ownerDeviceOid == ?)';
          criteria.bindParams.push(monaca.cloud.deviceId);
        }

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            var result = (e.result.totalItems > 0) ? self._makeCollectionItem(e.result.items[0]) : null;
            dfd.resolve(result);
          });

        return dfd.promise();
      },

      /**
       * @param {Object} item .
       * @param {Object} [permission] .
       * @return {$.Promise} .
       */
      insert: function(item, permission) {
        var self = this;
        var dfd = new $.Deferred();

        if (typeof(permission) === 'undefined') {
          permission = {};
        }

        monaca.cloud._post('Collection.insert', {
            collectionName: this.name,
            item: item,
            permission: permission
          }, dfd, {},
          function(e, status, xhr, dfd) {
            var item = self._makeCollectionItem(e.result.item);
            dfd.resolve(item);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {Object} permission .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      updatePermission: function(criteria, permission, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);

        monaca.cloud._post('Collection.updatePermission', {
          collectionName: this.name,
          criteria: criteria.query,
          bindParams: criteria.bindParams,
          permission: permission,
          options: options
        }, dfd, {});

        return dfd.promise();
      }
    };

    return MonacaCloudCollection;
  })();


  monaca.cloud.Collection = function(name) {
    return new MonacaCloudCollection(name);
  };

})(window);
/*
 * Criteria
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  MonacaCloudCriteria = (function() {

    function MonacaCloudCriteria(query, bindParams) {
      this.query = query;
      this.bindParams = (typeof(bindParams) !== 'undefined') ? bindParams : [];
    }

    return MonacaCloudCriteria;
  })();


  monaca.cloud.Criteria = function(query, bindParams) {
    return new MonacaCloudCriteria(query, bindParams);
  };

})(window);
/*
 * Device
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  monaca.cloud.Device = {

    /**
     * @param {String} name .
     * @return {$.Promise} .
     */
    getProperty: function(name) {
      var dfd = new $.Deferred();

      monaca.cloud._post('Device.getProperties', {
          names: [name]
        }, dfd, {},
        function(e, status, xhr, dfd) {
          dfd.resolve(e.result.properties[name]);
        }
      );

      return dfd.promise();
    },

    /**
     * @param {Array} names .
     * @return {$.Promise} .
     */
    getProperties: function(names) {
      var dfd = new $.Deferred();

      monaca.cloud._post('Device.getProperties', {
          names: names
        }, dfd, {},
        function(e, status, xhr, dfd) {
          dfd.resolve(e.result.properties);
        }
      );

      return dfd.promise();
    },

    /**
     * @param {String} name .
     * @param {String} value .
     * @return {$.Promise} .
     */
    saveProperty: function(name, value) {
      var dfd = new $.Deferred();
      var param = {};

      if ((typeof(name) !== 'undefined') && (typeof(value) !== 'undefined')) {
        param = {
          properties: {}
        };
        param.properties[name] = value;
      }

      monaca.cloud._post('Device.saveProperties', param, dfd);

      return dfd.promise();
    },

    /**
     * @param {Object} properties .
     * @return {$.Promise} .
     */
    saveProperties: function(properties) {
      var dfd = new $.Deferred();
      var param = {};

      if (typeof(properties) !== 'undefined') param.properties = properties;
      monaca.cloud._post('Device.saveProperties', param, dfd);

      return dfd.promise();
    }

  };

})(window);
/*
 * Mailer
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  monaca.cloud.Mailer = {

    /**
     * @param {String} userOid .
     * @param {String} templateName .
     * @param {Object} substituteParams .
     * @param {Object} [options] .
     * @return {$.Promise} .
     */
    sendMail: function(userOid, templateName, substituteParams, options) {
      var dfd = new $.Deferred();

      if (typeof(options) === 'undefined') {
        options = {};
      }

      monaca.cloud._post('Mailer.sendMail', {
        userOid: userOid,
        templateName: templateName,
        substituteParams: substituteParams,
        options: options
      }, dfd);

      return dfd.promise();
    }
  };

})(window);
/*
 * User
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  monaca.cloud.User = (function() {


    return {

      _oid: null,

      /**
       * @return {Boolean} .
       */
      isAuthenticated: function() {
        return (this._oid === null) ? false : true;
      },


      /**
       * @param {String} username .
       * @param {String} password .
       * @param {Object} [properties] .
       * @return {$.Promise} .
       */
      register: function(username, password, properties) {
        var dfd = new $.Deferred();
        var self = this;

        if (typeof(properties) === 'undefined') properties = {};

        monaca.cloud._post('User.register', {
            username: username,
            password: password,
            properties: properties
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );


        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {Object} properties .
       * @return {$.Promise} .
       */
      validate: function(username, properties) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.validate', {
          username: username,
          properties: properties
        }, dfd);

        return dfd.promise();
      },

      /**
       * @param {String} password .
       * @return {$.Promise} .
       */
      unregister: function(password) {
        var self = this,
          dfd = new $.Deferred();

        monaca.cloud._post('User.unregister', {
            password: password
          }, dfd, {},
          function() {
            self._oid = null;
            monaca.cloud._setSessionId('');
            localStorage.removeItem('monacaCloudLoginToken');
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {String} password .
       * @return {$.Promise} .
       */
      login: function(username, password) {
        var self = this,
          dfd = new $.Deferred();

        monaca.cloud._post('User.login', {
            username: username,
            password: password
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      autoLogin: function() {
        var dfd = new $.Deferred();
        var token = localStorage.monacaCloudLoginToken || '';
        var self = this;

        monaca.cloud._post('User.autoLogin', {
            loginToken: token
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      logout: function() {
        var self = this,
          dfd = new $.Deferred();

        monaca.cloud._post('User.logout', {}, dfd, {},
          function() {
            self._oid = null;
            monaca.cloud._setSessionId('');
            localStorage.removeItem('monacaCloudLoginToken');
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} oldPassword .
       * @param {String} newPassword .
       * @return {$.Promise} .
       */
      updatePassword: function(oldPassword, newPassword) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.updatePassword', {
          oldPassword: oldPassword,
          newPassword: newPassword
        }, dfd);

        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {Object} options .
       * @return {$.Promise} .
       */
      sendPasswordResetToken: function(username, options) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.sendPasswordResetToken', {
          username: username,
          options: options
        }, dfd);

        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {String} newPassword .
       * @param {String} token .
       * @return {$.Promise} .
       */
      resetPasswordAndLogin: function(username, newPassword, token) {
        var dfd = new $.Deferred();
        var self = this;

        monaca.cloud._post('User.resetPasswordAndLogin', {
            username: username,
            newPassword: newPassword,
            token: token
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} name .
       * @return {$.Promise} .
       */
      getProperty: function(name) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.getProperties', {
            names: [name]
          }, dfd, {},
          function(e, status, xhr, dfd) {
            dfd.resolve(e.result.properties[name]);
          }
        );

        return dfd.promise();
      },

      /**
       * @param {Array} names .
       * @return {$.Promise} .
       */
      getProperties: function(names) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.getProperties', {
            names: names
          }, dfd, {},
          function(e, status, xhr, dfd) {
            dfd.resolve(e.result.properties);
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} name .
       * @param {String} value .
       * @return {$.Promise} .
       */
      saveProperty: function(name, value) {
        var dfd = new $.Deferred();
        var param = {};

        if (typeof(name) !== 'undefined') {
          param = {
            properties: {}
          };
          param.properties[name] = value;
        }

        monaca.cloud._post('User.saveProperties', param, dfd);

        return dfd.promise();
      },

      /**
       * @param {Object} properties .
       * @return {$.Promise} .
       */
      saveProperties: function(properties) {
        var dfd = new $.Deferred();
        var param = {};

        if (typeof(properties) !== 'undefined') param.properties = properties;
        monaca.cloud._post('User.saveProperties', param, dfd);

        return dfd.promise();
      }

    };
  })();

})(window);

/*** <End:monaca-core-utils LoadJs:"components/monaca-core-utils/monaca-core-utils.js"> ***/
/*** <End:monaca-core-utils> ***/

/*** <Start:monaca-cordova-loader> ***/
/*** <Start:monaca-cordova-loader LoadJs:"components/monaca-cordova-loader/cordova-loader.js"> ***/
(function(){
  if ((navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/iPhone|iPad|iPod/i))) {
    if (typeof location.href === "string") {
      var relativePath = location.href.split("/www")[1];
      var paths = relativePath.split("/");
      var cordovaJsUrl = ""; 
      for (var i = 0; i < paths.length - 2; i++) {
        cordovaJsUrl += "../";
      }
      document.write("<script src=\"" + cordovaJsUrl+ "cordova.js" + "\"></script>");
    }
  } else if ((navigator.userAgent.match(/MSIE\s10.0/)) && (navigator.userAgent.match(/Windows\sNT\s6.2/))) {
    var elm = document.createElement('script');
    elm.setAttribute("src", "cordova.js");
    document.getElementsByTagName("head")[0].appendChild(elm);
  };
})();
/*** <End:monaca-cordova-loader LoadJs:"components/monaca-cordova-loader/cordova-loader.js"> ***/
/*** <End:monaca-cordova-loader> ***/