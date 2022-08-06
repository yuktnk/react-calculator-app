(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return addNumber}),__webpack_require__.d(__webpack_exports__,"a",function(){return addCalculationSymbol}),__webpack_require__.d(__webpack_exports__,"e",function(){return reset}),__webpack_require__.d(__webpack_exports__,"c",function(){return calc}),__webpack_require__.d(__webpack_exports__,"f",function(){return selectDisplayString});var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35),initialState={displayString:"0"},calculationSymbol,formatedCalculationSymbol;!function(a){a.kakeru="\xd7",a.waru="\xf7",a.tasu="+",a.hiku="-"}(calculationSymbol||(calculationSymbol={})),function(a){a.kakeru="*",a.waru="/",a.tasu="+",a.hiku="-"}(formatedCalculationSymbol||(formatedCalculationSymbol={}));var calculatorSlice=Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.b)({name:"calculator",initialState:initialState,reducers:{addNumber:function(a,t){"0"===a.displayString&&"0"===t.payload||("0"===a.displayString&&(a.displayString=""),a.displayString=a.displayString.concat(t.payload))},addCalculationSymbol:function(a,t){if("0"!==a.displayString){t.payload===calculationSymbol.kakeru&&(t.payload=formatedCalculationSymbol.kakeru),t.payload===calculationSymbol.waru&&(t.payload=formatedCalculationSymbol.waru);var e=a.displayString[a.displayString.length-1];e!==formatedCalculationSymbol.kakeru&&e!==formatedCalculationSymbol.waru&&e!==formatedCalculationSymbol.tasu&&e!==formatedCalculationSymbol.hiku?a.displayString=a.displayString.concat(t.payload):a.displayString=a.displayString.slice(0,-1)+t.payload}},reset:function(a){a.displayString="0"},calc:function calc(state){if("0"!==state.displayString){var lastString=state.displayString[state.displayString.length-1];lastString!==formatedCalculationSymbol.kakeru&&lastString!==formatedCalculationSymbol.waru&&lastString!==formatedCalculationSymbol.tasu&&lastString!==formatedCalculationSymbol.hiku&&(state.displayString=String(eval(state.displayString)))}}}}),_calculatorSlice$acti=calculatorSlice.actions,addNumber=_calculatorSlice$acti.addNumber,addCalculationSymbol=_calculatorSlice$acti.addCalculationSymbol,reset=_calculatorSlice$acti.reset,calc=_calculatorSlice$acti.calc,selectDisplayString=function(a){return a.calculator.displayString};__webpack_exports__.d=calculatorSlice.reducer},59:function(a,t,e){a.exports=e(78)},71:function(a,t,e){},75:function(a,t,e){},78:function(a,t,e){"use strict";e.r(t);var n=e(0),i=e.n(n),l=e(47),r=e(28),c=e(35),o=e(24),u=Object(c.a)({reducer:{calculator:o.d}}),d=e(77),s=e(106),p=e(105),_=e(17),m=(e(71),e(102)),S=Object(_.a)(m.a)(function(a){a.theme;return{height:"80px",width:"80px",margin:"2px",fontSize:"30px"}}),y=function(a){var t=a.color,e=a.variant,n=void 0===e?"outlined":e,l=a.disabled,c=a.displayString,u=Object(r.b)();return i.a.createElement(S,{color:t,variant:n,disabled:l,onClick:function(){var a;u("ac"===(a=c)?Object(o.e)():"="===a?Object(o.c)():"\xd7"===a||"\xf7"===a||"+"===a||"-"===a?Object(o.a)(a):Object(o.b)(a))}},c)},g=e(107),b=e(108),f=Object(_.a)(g.a)(function(a){a.theme;return{border:"1px solid  rgba(144, 202, 249, 0.5)",height:"80px",width:"332px",margin:"0 auto",borderRadius:"4px",fontSize:"24px",textAlign:"right",padding:"8px",overflow:"scroll"}}),E=Object(_.a)(b.a)(function(a){a.theme;return{height:"auto",width:"100%",color:"#90caf9",fontSize:"40px",textAlign:"right"}}),k=function(){var a=Object(r.c)(o.f);return i.a.createElement(f,null,i.a.createElement(E,null,a))},w=e(103),x=Object(d.a)({palette:{mode:"dark"}}),h=Object(_.a)(w.a)(function(a){a.theme;return{padding:"0 !important",margin:"0 !important",width:"336px"}});var C=function(){return i.a.createElement(s.a,{theme:x},i.a.createElement(p.a,null),i.a.createElement("div",{className:"App"},i.a.createElement(h,{container:!0,spacing:12},i.a.createElement(h,{item:!0,xs:12},i.a.createElement(k,null)),i.a.createElement(h,{item:!0,xs:12},i.a.createElement(y,{displayString:"7"}),i.a.createElement(y,{displayString:"8"}),i.a.createElement(y,{displayString:"9"}),i.a.createElement(y,{displayString:"\xf7",variant:"contained"})),i.a.createElement(h,{item:!0,xs:12},i.a.createElement(y,{displayString:"4"}),i.a.createElement(y,{displayString:"5"}),i.a.createElement(y,{displayString:"6"}),i.a.createElement(y,{displayString:"\xd7",variant:"contained"})),i.a.createElement(h,{item:!0,xs:12},i.a.createElement(y,{displayString:"1"}),i.a.createElement(y,{displayString:"2"}),i.a.createElement(y,{displayString:"3"}),i.a.createElement(y,{displayString:"-",variant:"contained"})),i.a.createElement(h,{item:!0,xs:12},i.a.createElement(y,{displayString:"0"}),i.a.createElement(y,{displayString:"ac",color:"warning"}),i.a.createElement(y,{displayString:"=",variant:"contained",color:"success"}),i.a.createElement(y,{displayString:"+",variant:"contained"})))))},v=function(a){a&&a instanceof Function&&e.e(1).then(e.bind(null,101)).then(function(t){var e=t.getCLS,n=t.getFID,i=t.getFCP,l=t.getLCP,r=t.getTTFB;e(a),n(a),i(a),l(a),r(a)})},O=(e(75),document.getElementById("root"));Object(l.createRoot)(O).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(r.a,{store:u},i.a.createElement(C,null)))),v()}},[[59,3,2]]]);
//# sourceMappingURL=main.93711214.chunk.js.map