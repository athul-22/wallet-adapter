"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[802],{46928:function(e,t,n){n.r(t),n.d(t,{AccountNameRequiredError:function(){return l},AccountNotSupported:function(){return d},AmountRequired:function(){return p},BluetoothRequired:function(){return h},BtcUnmatchedApp:function(){return v},CantOpenDevice:function(){return g},CantScanQRCode:function(){return ke},CashAddrNotSupported:function(){return y},CurrencyNotSupported:function(){return m},DBNotReset:function(){return Xe},DBWrongPassword:function(){return Ye},DeviceAppVerifyNotSupported:function(){return E},DeviceGenuineSocketEarlyClose:function(){return A},DeviceHalted:function(){return _},DeviceInOSUExpected:function(){return D},DeviceNameInvalid:function(){return S},DeviceNotGenuineError:function(){return T},DeviceOnDashboardExpected:function(){return b},DeviceOnDashboardUnexpected:function(){return N},DeviceShouldStayInApp:function(){return Re},DeviceSocketFail:function(){return C},DeviceSocketNoBulkStatus:function(){return I},DisconnectedDevice:function(){return w},DisconnectedDeviceDuringOperation:function(){return L},ETHAddressNonEIP:function(){return Me},EnpointConfigError:function(){return O},EthAppPleaseEnableContractData:function(){return R},FeeEstimationFailed:function(){return P},FeeNotLoaded:function(){return Be},FeeRequired:function(){return je},FeeTooHigh:function(){return Ge},FirmwareNotRecognized:function(){return U},FirmwareOrAppUpdateRequired:function(){return Ke},GasLessThanEstimate:function(){return se},GenuineCheckFailed:function(){return We},HardResetFail:function(){return x},InvalidAddress:function(){return M},InvalidAddressBecauseDestinationIsAlsoSource:function(){return k},InvalidXRPTag:function(){return F},LatestMCUInstalledError:function(){return B},LedgerAPI4xx:function(){return Ze},LedgerAPI5xx:function(){return ze},LedgerAPIError:function(){return G},LedgerAPIErrorWithMessage:function(){return q},LedgerAPINotAvailable:function(){return H},MCUNotGenuineToDashboard:function(){return ve},ManagerAppAlreadyInstalledError:function(){return W},ManagerAppDepInstallRequired:function(){return z},ManagerAppDepUninstallRequired:function(){return K},ManagerAppRelyOnBTCError:function(){return Z},ManagerDeviceLockedError:function(){return V},ManagerFirmwareNotEnoughSpaceError:function(){return Y},ManagerNotEnoughSpaceError:function(){return X},ManagerUninstallBTCDep:function(){return Q},NetworkDown:function(){return J},NoAccessToCamera:function(){return ie},NoAddressesFound:function(){return $},NoDBPathGiven:function(){return Ve},NotEnoughBalance:function(){return ee},NotEnoughBalanceBecauseDestinationNotCreated:function(){return oe},NotEnoughBalanceInParentAccount:function(){return ne},NotEnoughBalanceToDelegate:function(){return te},NotEnoughGas:function(){return ue},NotEnoughSpendableBalance:function(){return re},NotSupportedLegacyAddress:function(){return ce},PairingFailed:function(){return He},PasswordIncorrectError:function(){return fe},PasswordsDontMatchError:function(){return ae},RecipientRequired:function(){return ge},RecommendSubAccountsToEmpty:function(){return le},RecommendUndelegation:function(){return de},StatusCodes:function(){return Je},SyncError:function(){return qe},TimeoutTagged:function(){return pe},TransportError:function(){return Qe},TransportInterfaceNotAvailable:function(){return we},TransportOpenUserCancelled:function(){return Ie},TransportRaceCondition:function(){return Le},TransportStatusError:function(){return et},TransportWebUSBGestureRequired:function(){return Oe},UnavailableTezosOriginatedAccountReceive:function(){return ye},UnavailableTezosOriginatedAccountSend:function(){return me},UnexpectedBootloader:function(){return he},UnknownMCU:function(){return j},UpdateFetchFileFail:function(){return Ee},UpdateIncorrectHash:function(){return Ae},UpdateIncorrectSig:function(){return Te},UpdateYourApp:function(){return be},UserRefusedAddress:function(){return De},UserRefusedAllowManager:function(){return Se},UserRefusedDeviceNameChange:function(){return Ne},UserRefusedFirmwareUpdate:function(){return _e},UserRefusedOnDevice:function(){return Ce},WebsocketConnectionError:function(){return Pe},WebsocketConnectionFailed:function(){return Ue},WrongAppForCurrency:function(){return Fe},WrongDeviceForAccount:function(){return xe},addCustomErrorDeserializer:function(){return u},createCustomErrorClass:function(){return c},deserializeError:function(){return s},getAltStatusMessage:function(){return $e},serializeError:function(){return a}});var r=function(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},o={},i={},u=function(e,t){i[e]=t},c=function(e){var t=function(t,n){Object.assign(this,n),this.name=e,this.message=t||e,this.stack=(new Error).stack};return t.prototype=new Error,o[e]=t,t},s=function(e){if("object"===typeof e&&e){try{var t=JSON.parse(e.message);t.message&&t.name&&(e=t)}catch(l){}var n=void 0;if("string"===typeof e.name){var r=e.name,u=i[r];if(u)n=u(e);else{var a="Error"===r?Error:o[r];a||(console.warn("deserializing an unknown class '"+r+"'"),a=c(r)),n=Object.create(a.prototype);try{for(var f in e)e.hasOwnProperty(f)&&(n[f]=e[f])}catch(l){}}}else n=new Error(e.message);return!n.stack&&Error.captureStackTrace&&Error.captureStackTrace(n,s),n}return new Error(String(e))},a=function(e){return e?"object"===typeof e?f(e,[]):"function"===typeof e?"[Function: "+(e.name||"anonymous")+"]":e:e};function f(e,t){var n,o,i={};t.push(e);try{for(var u=r(Object.keys(e)),c=u.next();!c.done;c=u.next()){var s=c.value,a=e[s];"function"!==typeof a&&(a&&"object"===typeof a?-1!==t.indexOf(e[s])?i[s]="[Circular]":i[s]=f(e[s],t.slice(0)):i[s]=a)}}catch(l){n={error:l}}finally{try{c&&!c.done&&(o=u.return)&&o.call(u)}finally{if(n)throw n.error}}return"string"===typeof e.name&&(i.name=e.name),"string"===typeof e.message&&(i.message=e.message),"string"===typeof e.stack&&(i.stack=e.stack),i}var l=c("AccountNameRequired"),d=c("AccountNotSupported"),p=c("AmountRequired"),h=c("BluetoothRequired"),v=c("BtcUnmatchedApp"),g=c("CantOpenDevice"),y=c("CashAddrNotSupported"),m=c("CurrencyNotSupported"),E=c("DeviceAppVerifyNotSupported"),A=c("DeviceGenuineSocketEarlyClose"),T=c("DeviceNotGenuine"),b=c("DeviceOnDashboardExpected"),N=c("DeviceOnDashboardUnexpected"),D=c("DeviceInOSUExpected"),_=c("DeviceHalted"),S=c("DeviceNameInvalid"),C=c("DeviceSocketFail"),I=c("DeviceSocketNoBulkStatus"),w=c("DisconnectedDevice"),L=c("DisconnectedDeviceDuringOperation"),O=c("EnpointConfig"),R=c("EthAppPleaseEnableContractData"),P=c("FeeEstimationFailed"),U=c("FirmwareNotRecognized"),x=c("HardResetFail"),F=c("InvalidXRPTag"),M=c("InvalidAddress"),k=c("InvalidAddressBecauseDestinationIsAlsoSource"),B=c("LatestMCUInstalledError"),j=c("UnknownMCU"),G=c("LedgerAPIError"),q=c("LedgerAPIErrorWithMessage"),H=c("LedgerAPINotAvailable"),W=c("ManagerAppAlreadyInstalled"),Z=c("ManagerAppRelyOnBTC"),z=c("ManagerAppDepInstallRequired"),K=c("ManagerAppDepUninstallRequired"),V=c("ManagerDeviceLocked"),Y=c("ManagerFirmwareNotEnoughSpace"),X=c("ManagerNotEnoughSpace"),Q=c("ManagerUninstallBTCDep"),J=c("NetworkDown"),$=c("NoAddressesFound"),ee=c("NotEnoughBalance"),te=c("NotEnoughBalanceToDelegate"),ne=c("NotEnoughBalanceInParentAccount"),re=c("NotEnoughSpendableBalance"),oe=c("NotEnoughBalanceBecauseDestinationNotCreated"),ie=c("NoAccessToCamera"),ue=c("NotEnoughGas"),ce=c("NotSupportedLegacyAddress"),se=c("GasLessThanEstimate"),ae=c("PasswordsDontMatch"),fe=c("PasswordIncorrect"),le=c("RecommendSubAccountsToEmpty"),de=c("RecommendUndelegation"),pe=c("TimeoutTagged"),he=c("UnexpectedBootloader"),ve=c("MCUNotGenuineToDashboard"),ge=c("RecipientRequired"),ye=c("UnavailableTezosOriginatedAccountReceive"),me=c("UnavailableTezosOriginatedAccountSend"),Ee=c("UpdateFetchFileFail"),Ae=c("UpdateIncorrectHash"),Te=c("UpdateIncorrectSig"),be=c("UpdateYourApp"),Ne=c("UserRefusedDeviceNameChange"),De=c("UserRefusedAddress"),_e=c("UserRefusedFirmwareUpdate"),Se=c("UserRefusedAllowManager"),Ce=c("UserRefusedOnDevice"),Ie=c("TransportOpenUserCancelled"),we=c("TransportInterfaceNotAvailable"),Le=c("TransportRaceCondition"),Oe=c("TransportWebUSBGestureRequired"),Re=c("DeviceShouldStayInApp"),Pe=c("WebsocketConnectionError"),Ue=c("WebsocketConnectionFailed"),xe=c("WrongDeviceForAccount"),Fe=c("WrongAppForCurrency"),Me=c("ETHAddressNonEIP"),ke=c("CantScanQRCode"),Be=c("FeeNotLoaded"),je=c("FeeRequired"),Ge=c("FeeTooHigh"),qe=c("SyncError"),He=c("PairingFailed"),We=c("GenuineCheckFailed"),Ze=c("LedgerAPI4xx"),ze=c("LedgerAPI5xx"),Ke=c("FirmwareOrAppUpdateRequired"),Ve=c("NoDBPathGiven"),Ye=c("DBWrongPassword"),Xe=c("DBNotReset");function Qe(e,t){this.name="TransportError",this.message=e,this.stack=(new Error).stack,this.id=t}Qe.prototype=new Error,u("TransportError",(function(e){return new Qe(e.message,e.id)}));var Je={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,MISSING_CRITICAL_PARAMETER:26624,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586};function $e(e){switch(e){case 26368:return"Incorrect length";case 26624:return"Missing critical parameter";case 27010:return"Security not satisfied (dongle locked or have invalid access rights)";case 27013:return"Condition of use not satisfied (denied by the user?)";case 27264:return"Invalid data received";case 27392:return"Invalid parameter received"}if(28416<=e&&e<=28671)return"Internal error, please report"}function et(e){this.name="TransportStatusError";var t=Object.keys(Je).find((function(t){return Je[t]===e}))||"UNKNOWN_ERROR",n=$e(e)||t,r=e.toString(16);this.message="Ledger device: "+n+" (0x"+r+")",this.stack=(new Error).stack,this.statusCode=e,this.statusText=t}et.prototype=new Error,u("TransportStatusError",(function(e){return new et(e.statusCode)}))},80452:function(e,t,n){n.d(t,{rZ:function(){return i.TransportStatusError},WC:function(){return i.StatusCodes}});var r=n(97531),o=n.n(r),i=n(46928),u=n(75291).Buffer,c=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{s(r.next(e))}catch(t){i(t)}}function c(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,c)}s((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u},f=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},l=function(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},d=function(){function e(){var e=this;this.exchangeTimeout=3e4,this.unresponsiveTimeout=15e3,this.deviceModel=null,this._events=new(o()),this.send=function(t,n,r,o,a,f){return void 0===a&&(a=u.alloc(0)),void 0===f&&(f=[i.StatusCodes.OK]),c(e,void 0,void 0,(function(){var e,c;return s(this,(function(s){switch(s.label){case 0:if(a.length>=256)throw new i.TransportError("data.length exceed 256 bytes limit. Got: "+a.length,"DataLengthTooBig");return[4,this.exchange(u.concat([u.from([t,n,r,o]),u.from([a.length]),a]))];case 1:if(e=s.sent(),c=e.readUInt16BE(e.length-2),!f.some((function(e){return e===c})))throw new i.TransportStatusError(c);return[2,e]}}))}))},this.exchangeAtomicImpl=function(t){return c(e,void 0,void 0,(function(){var e,n,r,o,u,c=this;return s(this,(function(s){switch(s.label){case 0:if(this.exchangeBusyPromise)throw new i.TransportRaceCondition("An action was already pending on the Ledger device. Please deny or reconnect.");n=new Promise((function(t){e=t})),this.exchangeBusyPromise=n,r=!1,o=setTimeout((function(){r=!0,c.emit("unresponsive")}),this.unresponsiveTimeout),s.label=1;case 1:return s.trys.push([1,,3,4]),[4,t()];case 2:return u=s.sent(),r&&this.emit("responsive"),[2,u];case 3:return clearTimeout(o),e&&e(),this.exchangeBusyPromise=null,[7];case 4:return[2]}}))}))},this._appAPIlock=null}return e.prototype.exchange=function(e){throw new Error("exchange not implemented")},e.prototype.setScrambleKey=function(e){},e.prototype.close=function(){return Promise.resolve()},e.prototype.on=function(e,t){this._events.on(e,t)},e.prototype.off=function(e,t){this._events.removeListener(e,t)},e.prototype.emit=function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];(t=this._events).emit.apply(t,f([e],a(n),!1))},e.prototype.setDebugMode=function(){console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.")},e.prototype.setExchangeTimeout=function(e){this.exchangeTimeout=e},e.prototype.setExchangeUnresponsiveTimeout=function(e){this.unresponsiveTimeout=e},e.create=function(e,t){var n=this;return void 0===e&&(e=3e3),new Promise((function(r,o){var u=!1,c=n.listen({next:function(t){u=!0,c&&c.unsubscribe(),s&&clearTimeout(s),n.open(t.descriptor,e).then(r,o)},error:function(e){s&&clearTimeout(s),o(e)},complete:function(){s&&clearTimeout(s),u||o(new i.TransportError(n.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}}),s=t?setTimeout((function(){c.unsubscribe(),o(new i.TransportError(n.ErrorMessage_ListenTimeout,"ListenTimeout"))}),t):null}))},e.prototype.decorateAppAPIMethods=function(e,t,n){var r,o;try{for(var i=l(t),u=i.next();!u.done;u=i.next()){var c=u.value;e[c]=this.decorateAppAPIMethod(c,e[c],e,n)}}catch(s){r={error:s}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}},e.prototype.decorateAppAPIMethod=function(e,t,n,r){var o=this;return function(){for(var u=[],a=0;a<arguments.length;a++)u[a]=arguments[a];return c(o,void 0,void 0,(function(){var o;return s(this,(function(c){switch(c.label){case 0:if(o=this._appAPIlock)return[2,Promise.reject(new i.TransportError("Ledger Device is busy (lock "+o+")","TransportLocked"))];c.label=1;case 1:return c.trys.push([1,,3,4]),this._appAPIlock=e,this.setScrambleKey(r),[4,t.apply(n,u)];case 2:return[2,c.sent()];case 3:return this._appAPIlock=null,[7];case 4:return[2]}}))}))}},e.ErrorMessage_ListenTimeout="No Ledger device found (timeout)",e.ErrorMessage_NoDeviceFound="No Ledger device found",e}();t.ZP=d},72905:function(e,t){t.Z={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea"}},5133:function(e,t){t.Z={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"}},83370:function(e,t,n){n.d(t,{Z:function(){return c}});n(32735);var r=n(52076),o=n(78795),i=n(74512);const u=(0,o.Z)({key:"css",prepend:!0});function c(e){const{injectFirst:t,children:n}=e;return t?(0,i.jsx)(r.C,{value:u,children:n}):n}},80630:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(32735),o=n(20011),i=n(93245),u=n(46741);var c="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",s=n(74512);var a=function(e){const{children:t,theme:n}=e,a=(0,u.Z)(),f=r.useMemo((()=>{const e=null===a?n:function(e,t){if("function"===typeof t)return t(e);return(0,o.Z)({},e,t)}(a,n);return null!=e&&(e[c]=null!==a),e}),[n,a]);return(0,s.jsx)(i.Z.Provider,{value:f,children:t})},f=n(52076),l=n(5040);function d(e){const t=(0,l.Z)();return(0,s.jsx)(f.T.Provider,{value:"object"===typeof t?t:{},children:e.children})}var p=function(e){const{children:t,theme:n}=e;return(0,s.jsx)(a,{theme:n,children:(0,s.jsx)(d,{children:t})})}},97531:function(e){var t,n="object"===typeof Reflect?Reflect:null,r=n&&"function"===typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"===typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!==e};function i(){i.init.call(this)}e.exports=i,e.exports.once=function(e,t){return new Promise((function(n,r){function o(n){e.removeListener(t,i),r(n)}function i(){"function"===typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}v(e,t,i,{once:!0}),"error"!==t&&function(e,t,n){"function"===typeof e.on&&v(e,"error",t,n)}(e,o,{once:!0})}))},i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var u=10;function c(e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function s(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function a(e,t,n,r){var o,i,u,a;if(c(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),u=i[t]),void 0===u)u=i[t]=n,++e._eventsCount;else if("function"===typeof u?u=i[t]=r?[n,u]:[u,n]:r?u.unshift(n):u.push(n),(o=s(e))>0&&u.length>o&&!u.warned){u.warned=!0;var f=new Error("Possible EventEmitter memory leak detected. "+u.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");f.name="MaxListenersExceededWarning",f.emitter=e,f.type=t,f.count=u.length,a=f,console&&console.warn&&console.warn(a)}return e}function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=f.bind(r);return o.listener=n,r.wrapFn=o,o}function d(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"===typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):h(o,o.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function h(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function v(e,t,n,r){if("function"===typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!==typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(i){r.once&&e.removeEventListener(t,o),n(i)}))}}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(e){if("number"!==typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");u=e}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!==typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return s(this)},i.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var o="error"===e,i=this._events;if(void 0!==i)o=o&&void 0===i.error;else if(!o)return!1;if(o){var u;if(t.length>0&&(u=t[0]),u instanceof Error)throw u;var c=new Error("Unhandled error."+(u?" ("+u.message+")":""));throw c.context=u,c}var s=i[e];if(void 0===s)return!1;if("function"===typeof s)r(s,this,t);else{var a=s.length,f=h(s,a);for(n=0;n<a;++n)r(f[n],this,t)}return!0},i.prototype.addListener=function(e,t){return a(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return a(this,e,t,!0)},i.prototype.once=function(e,t){return c(t),this.on(e,l(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return c(t),this.prependListener(e,l(this,e,t)),this},i.prototype.removeListener=function(e,t){var n,r,o,i,u;if(c(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!==typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){u=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,u||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},i.prototype.listeners=function(e){return d(this,e,!0)},i.prototype.rawListeners=function(e){return d(this,e,!1)},i.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},i.prototype.listenerCount=p,i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}}]);