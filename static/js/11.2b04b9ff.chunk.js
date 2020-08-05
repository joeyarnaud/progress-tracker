(this["webpackJsonpworkout-tracker"]=this["webpackJsonpworkout-tracker"]||[]).push([[11],{151:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return f})),n.d(t,"c",(function(){return E})),n.d(t,"b",(function(){return j})),n.d(t,"d",(function(){return O})),n.d(t,"h",(function(){return v})),n.d(t,"a",(function(){return y}));var r=n(29),a=n(20);function c(){var e=Object(r.a)(["\n  color: ",";\n  margin-top: 2rem;\n  font-size: 2rem;\n"]);return c=function(){return e},e}function u(){var e=Object(r.a)(["\n  font-size: 3.5rem;\n  font-family: ",";\n"]);return u=function(){return e},e}function o(){var e=Object(r.a)(["\n  font-size: 4rem;\n  font-family: ",";\n  text-align: center;\n  color: ",";\n"]);return o=function(){return e},e}var i=a.c.h1(o(),(function(e){return e.theme.fontStyles.boldest}),(function(e){return e.theme.colors.colorWhite})),l=a.c.h2(u(),(function(e){return e.theme.fontStyles.boldest})),f=a.c.h2(c(),(function(e){return e.theme.colors.colorDark}));function s(){var e=Object(r.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return s=function(){return e},e}function d(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin: 2rem 0;\n"]);return d=function(){return e},e}function m(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return m=function(){return e},e}function b(){var e=Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return b=function(){return e},e}function p(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]);return p=function(){return e},e}var E=a.c.div(p()),j=a.c.div(b()),O=a.c.div(m()),v=a.c.div(d()),h=(a.c.div(s()),n(30));function g(){var e=Object(r.a)(["\n  color: ",";\n  font-size: 3.5rem;\n"]);return g=function(){return e},e}var y=Object(a.c)(h.b)(g(),(function(e){return e.theme.colors.colorSuccess}))},157:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return o.b})),n.d(t,"i",(function(){return o.h})),n.d(t,"k",(function(){return o.j})),n.d(t,"j",(function(){return o.i})),n.d(t,"e",(function(){return o.d})),n.d(t,"f",(function(){return o.e})),n.d(t,"d",(function(){return o.c})),n.d(t,"g",(function(){return o.f})),n.d(t,"h",(function(){return o.g}));var r=n(29),a=n(0),c=n.n(a),u=n(20),o=n(158);function i(){var e=Object(r.a)(["\n  font-size: 1.4rem;\n"]);return i=function(){return e},e}function l(){var e=Object(r.a)(["\n  background-color: ",";\n  border-radius: 10px;\n  padding: 1rem;\n  margin-bottom: 2rem;\n"]);return l=function(){return e},e}var f=Object(u.c)(o.b)(l(),(function(e){return e.theme.colors.colorWhite})),s=u.c.div(i());function d(e){var t=e.name,n=e.weight,r=e.reps,a=e.sets,u=e.weightType;return console.log(e),c.a.createElement(f,null,c.a.createElement(s,null,"Exercise Name: ",t),c.a.createElement(s,null,"Weight: ",n,u),c.a.createElement(s,null,"Reps: ",r),c.a.createElement(s,null,"Sets: ",a))}d.defaultProps={weightType:"kg"};var m=n(61),b=n(2),p=n(85),E=n(205),j=(n(193),n(21)),O=n(151),v=function(e,t){switch(console.log(t),t.type){case"TITLE_INPUT":return Object(b.a)(Object(b.a)({},e),{},{name:t.payload});case"WEIGHT_INPUT":return t.payload.match(/[^0-9]/g)?e:Object(b.a)(Object(b.a)({},e),{},{weight:t.payload});case"REP_INPUT":return t.payload.match(/[^0-9]/g)?e:Object(b.a)(Object(b.a)({},e),{},{reps:t.payload});case"SET_INPUT":return t.payload.match(/[^0-9]/g)?e:Object(b.a)(Object(b.a)({},e),{},{sets:t.payload});case"CHANGE_DATE":return Object(b.a)(Object(b.a)({},e),{},{date:t.payload});case"SET_WEIGHT_TYPE":return Object(b.a)(Object(b.a)({},e),{},{type:t.payload});default:return e}};function h(e){var t=e.exercise,n=e.handleSubmit,r=e.cancelExercise,u=Object(a.useReducer)(v,Object(b.a)(Object(b.a)({},t),{},{type:"kg",date:new Date})),i=Object(m.a)(u,2),l=i[0],f=i[1],s=l.name,d=l.weight,h=l.reps,g=l.sets,y=l.type,w=l.date;return console.log(l),c.a.createElement(o.a,null,c.a.createElement(o.h,null,c.a.createElement(o.j,null,"Exercise Name *required"),c.a.createElement(o.i,{type:"text",placeholder:"Exercise Name",value:s,onChange:function(e){return f({type:"TITLE_INPUT",payload:e.target.value})}})),c.a.createElement(o.b,null,c.a.createElement(o.d,null,c.a.createElement(o.e,null,"Weight"),c.a.createElement(o.c,{type:"text",placeholder:"weight",value:d,onChange:function(e){return f({type:"WEIGHT_INPUT",payload:e.target.value})}}),c.a.createElement(o.g,{value:y,onChange:function(e){return f({type:"SET_WEIGHT_TYPE",payload:e.target.value})}},c.a.createElement("option",{value:"kg"},"kg"),c.a.createElement("option",{value:"lb"},"lb"),c.a.createElement("option",{value:"na"},"N/A"))),c.a.createElement(o.d,null,c.a.createElement(o.e,null,"Reps"),c.a.createElement(o.c,{type:"text",placeholder:"reps",value:h,onChange:function(e){return f({type:"REP_INPUT",payload:e.target.value})}})),c.a.createElement(o.d,null,c.a.createElement(o.e,null,"Sets *required"),c.a.createElement(o.c,{type:"text",placeholder:"sets",value:g,onChange:function(e){return f({type:"SET_INPUT",payload:e.target.value})}})),c.a.createElement(o.d,null,c.a.createElement(E.a,{onChange:function(e){return f({type:"CHANGE_DATE",payload:e})},value:w,maxDate:new Date}))),c.a.createElement(O.b,null,c.a.createElement(o.f,null,c.a.createElement(p.a,{variant:"outline-success",size:"lg",disabled:Object(j.a)(s)||Object(j.a)(g),onClick:function(){return n({name:s,weight:d,reps:h,sets:g,type:y,submitted:!0,date:w})}},"Submit")),c.a.createElement(p.a,{variant:"danger",size:"lg",onClick:function(){return r()}},"Cancel")))}},158:function(e,t,n){"use strict";n.d(t,"b",(function(){return E})),n.d(t,"h",(function(){return j})),n.d(t,"j",(function(){return O})),n.d(t,"i",(function(){return v})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return y})),n.d(t,"a",(function(){return w})),n.d(t,"f",(function(){return x})),n.d(t,"g",(function(){return T}));var r=n(29),a=n(20),c=n(293);function u(){var e=Object(r.a)(["\n  position: absolute;\n  top: 3rem;\n  right: 0;\n  height: 3.2rem;\n"]);return u=function(){return e},e}function o(){var e=Object(r.a)(["\n  margin-right: 2rem;\n  /* display: inline; */\n"]);return o=function(){return e},e}function i(){var e=Object(r.a)(["\n  font-size: 1.6rem;\n  margin-bottom: 2rem;\n"]);return i=function(){return e},e}function l(){var e=Object(r.a)(["\n  width: 28rem;\n  font-size: 1.6rem;\n  width: 100%;\n"]);return l=function(){return e},e}function f(){var e=Object(r.a)(["\n  font-size: 1.4rem;\n"]);return f=function(){return e},e}function s(){var e=Object(r.a)(["\n  position: relative;\n  width: 100%;\n"]);return s=function(){return e},e}function d(){var e=Object(r.a)(["\n  font-size: 1.6rem;\n"]);return d=function(){return e},e}function m(){var e=Object(r.a)(["\n  font-size: 1.6rem;\n"]);return m=function(){return e},e}function b(){var e=Object(r.a)([""]);return b=function(){return e},e}function p(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);return p=function(){return e},e}var E=a.c.div(p()),j=Object(a.c)(c.a.Group)(b()),O=Object(a.c)(c.a.Label)(m()),v=Object(a.c)(c.a.Control)(d()),h=Object(a.c)(c.a.Group)(s()),g=Object(a.c)(c.a.Label)(f()),y=Object(a.c)(c.a.Control)(l()),w=a.c.div(i()),x=a.c.div(o()),T=a.c.select(u())},436:function(e,t,n){"use strict";n.r(t);var r=n(61),a=n(56),c=n(2),u=n(29),o=n(0),i=n.n(o),l=n(85),f=n(297),s=n(20),d=n(32),m=n(9),b=n(157),p=n(21),E=n(158),j=n(62);function O(){var e=Object(u.a)(["\n  font-size: 1.6rem;\n  padding: 1rem 5rem;\n"]);return O=function(){return e},e}function v(){var e=Object(u.a)(["\n  font-size: 3rem;\n  margin: 2rem 0;\n  color: ",";\n"]);return v=function(){return e},e}var h=s.c.h2(v(),(function(e){return e.theme.colors.colorSuccess})),g=Object(s.c)(l.a)(O()),y=function(e,t){switch(t.type){case"ADD_EXERCISE":return Object(c.a)(Object(c.a)({},e),{},{exercises:[].concat(Object(a.a)(e.exercises),[{title:"",weight:"",sets:"",reps:"",type:"kg",submitted:!1}])});case"SUBMIT_EXERCISE":return Object(c.a)(Object(c.a)({},e),{},{exercises:[].concat(Object(a.a)(e.exercises.slice(0,e.exercises.length-1)),[t.payload])});case"CANCEL_LAST_EXERCISE":return Object(c.a)(Object(c.a)({},e),{},{exercises:Object(a.a)(e.exercises.slice(0,e.exercises.length-1))});case"TITLE_INPUT":return Object(c.a)(Object(c.a)({},e),{},{title:t.payload});default:return e}};t.default=Object(d.b)((function(e){return{workout:e.workout.workout}}),(function(e){return{postWorkout:function(t,n){return e(Object(j.q)(t,n))},clearWorkout:function(){return e(Object(j.f)())}}}))((function(e){var t=Object(o.useReducer)(y,{exercises:[],title:""}),n=Object(r.a)(t,2),a=n[0],c=n[1],u=a.exercises,s=a.title,d=e.workout;return Object(p.a)(d)||e.clearWorkout(),Object(p.a)(d)?i.a.createElement(f.a,null,i.a.createElement(h,null,"Add Workout"),i.a.createElement(E.h,null,i.a.createElement(E.j,null,"Workout Name *required"),i.a.createElement(E.i,{type:"text",placeholder:"Workout Name",value:s,onChange:function(e){return c({type:"TITLE_INPUT",payload:e.target.value})}})),i.a.createElement(f.a,null,u&&u.map((function(e,t){return e.submitted?i.a.createElement(b.c,Object.assign({key:t},e)):i.a.createElement(b.b,{exercise:e,handleSubmit:function(e){return c({type:"SUBMIT_EXERCISE",payload:e})},cancelExercise:function(){return c({type:"CANCEL_LAST_EXERCISE"})},key:t})}))),(Object(p.a)(u)||u[u.length-1].submitted)&&i.a.createElement(l.a,{variant:"success",onClick:function(){return c({type:"ADD_EXERCISE"})}},i.a.createElement("i",{className:"fas fa-plus-circle"})," Add Exercise"),i.a.createElement("div",{style:{marginTop:"2rem"}},(Object(p.a)(u)||u[u.length-1].submitted)&&u.length>0&&i.a.createElement(g,{onClick:function(){return e.postWorkout(s,u)},variant:"outline-primary"},"Submit Workout"))):i.a.createElement(m.a,{to:"/workout/".concat(d._id)})}))}}]);
//# sourceMappingURL=11.2b04b9ff.chunk.js.map