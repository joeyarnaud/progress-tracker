(this["webpackJsonpworkout-tracker"]=this["webpackJsonpworkout-tracker"]||[]).push([[13],{190:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return k})),n.d(t,"c",(function(){return g}));var r=n(61),a=n(29),o=n(0),c=n.n(o),i=n(174),l=n(20);function u(){var e=Object(a.a)(["\n  border: none;\n  font-size: 2rem;\n  margin-top: 1.5rem;\n  background-color: inherit;\n"]);return u=function(){return e},e}var s=l.c.button(u()),m=c.a.forwardRef((function(e,t){var n=e.children,r=e.onClick;return c.a.createElement(s,{ref:t,onClick:function(e){e.preventDefault(),r(e)}},n,c.a.createElement("i",{className:"fas fa-ellipsis-h"}))})),d=(c.a.forwardRef((function(e,t){var n=e.children,a=e.style,l=e.className,u=e["aria-labelledby"],s=Object(o.useState)(""),m=Object(r.a)(s,2),d=m[0],f=m[1];return c.a.createElement("div",{ref:t,style:a,className:l,"aria-labelledby":u},c.a.createElement(i.a,{autoFocus:!0,className:"mx-3 my-2 w-auto",placeholder:"Type to filter...",onChange:function(e){return f(e.target.value)},value:d}),c.a.createElement("ul",{className:"list-unstyled"},c.a.Children.toArray(n).filter((function(e){return!d||e.props.children.toLowerCase().startsWith(d)}))))})),n(30));function f(){var e=Object(a.a)(["\n  display: inline-block;\n  background-color: ",";\n  color: ",";\n  font-size: 3rem;\n  text-align: center;\n  border-radius: 10px;\n  margin: 1rem 0;\n  padding: 4rem;\n  width: calc(50% - 0.5rem);\n\n  &:hover {\n    text-decoration: none;\n    color: ",";\n  }\n"]);return f=function(){return e},e}function h(){var e=Object(a.a)(["\n  display: inline-block;\n  background-color: ",";\n  color: ",";\n  width: 100%;\n  font-size: 3rem;\n  text-align: center;\n  border-radius: 10px;\n  padding: 4rem;\n  margin-top: 2rem;\n\n  &:hover {\n    text-decoration: none;\n    color: ",";\n  }\n"]);return h=function(){return e},e}function p(){var e=Object(a.a)(["\n  border: none;\n  background: inherit;\n"]);return p=function(){return e},e}var b=l.c.button(p()),k=Object(l.c)(d.b)(h(),(function(e){return e.theme.colors.colorDark}),(function(e){return e.theme.colors.colorWhite}),(function(e){return e.theme.colors.colorWhite})),g=Object(l.c)(d.b)(f(),(function(e){return e.theme.colors.colorDark}),(function(e){return e.theme.colors.colorWhite}),(function(e){return e.theme.colors.colorWhite}))},437:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(41),o=n(42),c=n(44),i=n(43),l=n(0),u=n.n(l),s=n(32),m=n(9),d=n(297),f=n(85),h=n(28),p=n(176),b=n.n(p),k=n(62),g=n(158),E=n(151),y=n(173),v=n(190),w=n(189),j=n(21),O=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={edit:!1,title:""},e.changeWorkoutName=function(t){e.props.changeName(e.state.title,e.props.workout._id),e.setState({edit:!1})},e.toggleNameEdit=function(){return e.setState((function(e){return{edit:!e.edit}}))},e.handleStandardChange=function(t){return e.setState(Object(r.a)({},t.target.name,t.target.value))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getWorkout(e)}},{key:"componentWillUnmount",value:function(){this.props.clearWorkout()}},{key:"shouldComponentUpdate",value:function(e,t){return!Object(j.a)(e.workout)&&Object(j.a)(this.props.workout)&&(console.log("here"),this.setState({title:e.workout.name})),!0}},{key:"render",value:function(){var e=this,t=this.props.workout,n=t.date,r=t.exercises,a=t.name,o=t._id,c=t.deleted,i=this.state,l=i.edit,s=i.title;return c?u.a.createElement(m.a,{to:"/workouts"}):u.a.createElement(d.a,null,u.a.createElement(E.c,null,l?u.a.createElement(g.h,{style:{display:"flex",marginTop:"1rem"}},u.a.createElement(g.i,{type:"text",placeholder:"Workout Name",name:"title",value:s,onChange:this.handleStandardChange}),u.a.createElement(f.a,{onClick:this.changeWorkoutName,variant:"success"},"Submit")):u.a.createElement(E.g,null,a),u.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},u.a.createElement(w.a,{name:a,id:o,action:this.props.addExercise,buttonText:"Add Exercise",size:"1.6rem"}),u.a.createElement(h.a,{style:{display:"inherit",marginRight:"3rem"}},u.a.createElement(h.a.Toggle,{as:v.b,id:"workout-options"}),u.a.createElement(h.a.Menu,null,u.a.createElement(h.a.Item,{eventKey:"1"},u.a.createElement(w.c,{name:a,id:o,action:this.props.deleteWorkout,warningText:"Delete Workout",size:"1rem"})),u.a.createElement(h.a.Item,{eventKey:"2"},u.a.createElement(v.a,{onClick:this.toggleNameEdit},u.a.createElement("i",{className:"fas fa-edit"})," Change Name")),u.a.createElement(h.a.Item,{eventKey:"2"}))),u.a.createElement(E.g,null,b()(n).format("DD/MM/yyyy")))),u.a.createElement(d.a,null,u.a.createElement(v.d,{to:"/workout/play/".concat(o,"?exercise=0"),style:{marginBottom:"2rem"}},"Start Workout ",u.a.createElement("i",{className:"fas fa-play-circle"})),r&&r.map((function(t){return u.a.createElement(y.a,{date:t.date,inputs:t.inputs[0],name:t.name,id:t._id,deleteExercise:e.props.deleteExercise})}))))}}]),n}(l.Component);t.default=Object(s.b)((function(e){return{workout:e.workout.workout}}),(function(e){return{getWorkout:function(t){return e(Object(k.n)(t))},deleteExercise:function(t){return e(Object(k.h)(t))},clearWorkout:function(){return e(Object(k.f)())},deleteWorkout:function(t){return e(Object(k.j)(t))},addExercise:function(t,n,r,a,o,c,i){return e(Object(k.a)(t,n,r,a,o,c,i))},changeName:function(t,n){return e(Object(k.d)(t,n))}}}))(O)}}]);
//# sourceMappingURL=13.aa4d6088.chunk.js.map