(this.webpackJsonpdinder=this.webpackJsonpdinder||[]).push([[0],{31:function(t,e,n){t.exports=n.p+"static/media/pan-icon-3.5d80a88a.png"},41:function(t,e,n){t.exports=n(68)},46:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(30),o=n.n(i),c=(n(46),n(4)),s=n(5),l=n(7),u=n(6),d=n(8),h=n(31),f=n.n(h),m=n(17),g=n.n(m),p=n(32),b=n(2),v=(n(65),function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.props.data.ing_data&&this.drawGraph(this.props.data)}},{key:"componentDidUpdate",value:function(){this.props.data.ing_data&&this.drawGraph(this.props.data)}},{key:"drawGraph",value:function(t){var e=this;if(t.ing_data){var n=t.ing_data;console.log(n[0]);var a=[{id:n[0].source_id,name:n[0].source_name,strength:1}].concat(Object(p.a)(n.map((function(t){return{id:t.target_id,name:t.target,strength:t.strength}})))),r=n.map((function(t){return{source:t.source_id,target:t.target_id,strength:t.strength}})),i=b.e("svg"),o=+i.attr("width"),c=+i.attr("height"),s=b.d().nodes(a);s.force("charge_force",b.c().strength(-2500)).force("center_force",b.a(o/2,c/2));var l=b.e(this.refs.links),u=b.e(this.refs.nodes),d=u.attr("class","nodes").selectAll("circle").data(a).enter().append("circle").attr("r",(function(t){if(1===t.strength)return 50;return 450*t.strength})).attr("fill",(function(t){return t===a[0]?"#fd267d":"#ff7854"})).style("opacity",(function(t){})).style("stroke","black").on("mouseover",(function(t){t!==a[0]&&b.e(this).transition().attr("fill","#fd267d")})).on("mouseout",(function(t){t!==a[0]&&b.e(this).transition().duration(100).attr("fill","#ff7854")})).on("click",(function(t){console.log(t.name),b.f("g > *").remove(),e.props.findNewSimilaritiesCallback(t.name)})),h=u.selectAll("text").data(a).enter().append("text").text((function(t){return t.name})).attr("font-size",20).attr("dx",15).attr("dy",4),f=l.attr("class","links").selectAll("line").data(r).enter().append("line").attr("stroke-width",1.5).style("opacity",.6);s.on("tick",(function(){d.attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y})),h.attr("x",(function(t){return t.x})).attr("y",(function(t){return t.y})),f.attr("x1",(function(t){return t.source.x})).attr("y1",(function(t){return t.source.y})).attr("x2",(function(t){return t.target.x})).attr("y2",(function(t){return t.target.y}))}));var m=b.b(r).id((function(t){return t.id}));s.force("links",m)}}},{key:"render",value:function(){return r.a.createElement("svg",{width:"1100",height:"900"},r.a.createElement("g",{ref:"links"}),r.a.createElement("g",{ref:"nodes"}))}}]),e}(a.Component)),y=(n(66),function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).onInputChange=function(t){n.setState({soughtIngredient_name:t.target.value}),console.log("updated! looking for: ".concat(n.state.soughtIngredient_name))},n.onSubmit=function(t){t.preventDefault(),g.a.get("".concat(n.props.url,"/ingredient/").concat(n.state.soughtIngredient_name)).then((function(t){console.log(t.data),n.setState({graphData:t.data,ing_found:!0,soughtIngredient_name:""})})).catch((function(t){n.setState({ing_found:!1,error:t.title}),console.log("errors: ".concat(t))}))},n.findNewSimilarities=function(t){g.a.get("".concat(n.props.url,"/ingredient/").concat(t)).then((function(t){console.log(t.data),n.setState({graphData:t.data,ing_found:!0,soughtIngredient_name:""})})).catch((function(t){n.setState({ing_found:!1,error:t.title}),console.log("errors: ".concat(t))}))},n.state={soughtIngredient_name:"",graph_data:[],ing_found:!1,error:""},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"form",onSubmit:this.onSubmit},r.a.createElement("div",{className:"search-area"},r.a.createElement("label",{className:"text",htmlFor:"text"},"What's Cookin'?")),r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"text",placeholder:"ingredient (singular)",name:"ingredient",onChange:this.onInputChange,value:this.state.soughtIngredient})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",value:"Search",onClick:this.onSubmit,className:"submit-btn"}))),r.a.createElement("div",null,!0===this.state.ing_found&&r.a.createElement(v,{data:this.state.graphData,findNewSimilaritiesCallback:this.findNewSimilarities})))}}]),e}(a.Component)),k=(n(67),function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this))).state={},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-title"},"dinder"),r.a.createElement("p",{className:"App-subtitle"},"The Ingredient Matchmaker")),r.a.createElement("main",{className:"App-body"},r.a.createElement(y,{url:"http://localhost:5000"})),r.a.createElement("footer",null))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.da8c63eb.chunk.js.map