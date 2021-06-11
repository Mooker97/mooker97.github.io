(this["webpackJsonpneds-live"]=this["webpackJsonpneds-live"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),s=n.n(a),o=(n(14),n(9)),i=n(4),l=n.n(i),u=n(7),f=n(2),j=n(0),d=function(e){return Object(j.jsxs)("header",{className:"flex flex-row",children:[Object(j.jsx)("h1",{className:"flex flex-col",children:Object(j.jsx)("a",{children:e.title})}),Object(j.jsx)("div",{className:"head-second flex flex-col",children:Object(j.jsx)("p",{children:e.subtitle})})]})};d.defaultProps={title:"neds",subtitle:"Live Racing Feed"};var h=d,b=function(e){return e?"selector-on":"selector-off"},m=function(e){var t=b(e.state);return Object(j.jsx)("button",{className:t,onClick:e.onClick,children:e.title})},x=function(e){return Object(j.jsxs)("div",{className:"selector flex flex-row",children:[Object(j.jsx)(m,{title:"Dog",state:e.state[0],onClick:function(){e.changeSelection(0)}}),Object(j.jsx)(m,{title:"Horse",state:e.state[1],onClick:function(){e.changeSelection(1)}}),Object(j.jsx)(m,{title:"Chariet",state:e.state[2],onClick:function(){e.changeSelection(2)}})]})},O=function(e){return e?"more-info hidden":"more-info"},v=function(e){var t=Object(c.useState)(!0),n=Object(f.a)(t,2),r=n[0],a=n[1];if(!e.opinion)return Object(j.jsx)("p",{className:"little-text",children:"No Expert Comment Available"});var s=O(r);return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:s,children:[Object(j.jsx)("p",{className:"opinion",children:"Epert Opinion"}),Object(j.jsx)("p",{className:"quote",children:e.opinion})]}),Object(j.jsx)("button",{className:"see-more",onClick:function(){a(!r)},children:r?"See More":"See Less"})]})},p=function(e){var t=function(e){var t=!1;return e<0&&(t=!0,e=Math.abs(e)),e=[Math.floor(e/3600),Math.floor(e%3600/60),e%60],t&&(e[0]=-1*e[0],e[1]=-1*e[1],e[2]=-1*e[2]),e}(e.timer),n="";n=t[0]?"".concat(t[0],"h ").concat(t[1],"m ").concat(t[2],"s"):t[1]?"".concat(t[1],"m ").concat(t[2],"s"):"".concat(t[2]," Seconds");var c=e.category;return c="dog"==e.category?"Greyhounds":"horse"==e.category?"Horse":"Harness",Object(j.jsxs)("div",{className:"info-card ",children:[Object(j.jsxs)("div",{className:"flex flex-row info-bar",children:[Object(j.jsxs)("div",{className:"",children:[Object(j.jsxs)("p",{className:"race-title",children:[e.title," #",e.number]}),Object(j.jsxs)("p",{className:"countdown",children:["Jumps in: ",n]}),Object(j.jsxs)("p",{className:"length",children:[e.length,"m"]})]}),Object(j.jsxs)("div",{className:"text-right",children:[Object(j.jsx)("p",{children:c}),Object(j.jsx)("p",{children:e.weather}),Object(j.jsx)("p",{children:e.country+" - "+e.state})]})]}),Object(j.jsx)(v,{opinion:e.opinion})]})},g=function(e){var t=e.state;return Object(j.jsx)("div",{className:"live-feed flex flex-col",children:t.map((function(t){return Object(j.jsx)(p,{refreshFeed:e.refreshFeed,title:t.venue,number:t.race_number,category:t.category,length:t.distance,opinion:t.race_comment,weather:t.weather,country:t.country,timer:t.start,state:t.state},t.race_id)}))})},N=function(e){var t="";return e.state[0].length<1&&(t=e.state[1][0]||e.state[1][1]||e.state[1][2]?"Please Disable CORS for the api to function":"Filtering out all categories"),Object(j.jsxs)("main",{className:"flex flex-col",children:[Object(j.jsx)(x,{state:e.state[1],changeSelection:e.changeSelection}),Object(j.jsx)("p",{children:t}),Object(j.jsx)(g,{state:e.state[0],refreshFeed:e.refreshFeed,setState:e.setState})]})},y=(n(17),""),w=0;var _=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=45");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([!0,!0,!0]),s=Object(f.a)(a,2),i=s[0],d=s[1],b=function(e){var t=[],n=["dog","horse","chariot"];n.forEach((function(e,t){i[t]||(n[t]="")}));for(var c=0,r=Object.entries(e.data.race_summaries);c<r.length;c++){var a=Object(f.a)(r[c],2),s=a[0],o=a[1],l={race_id:s,start:o.advertised_start.seconds-Math.floor(Date.now()/1e3),category:o.category_id,race_name:o.race_name,race_number:o.race_number,distance:o.race_form.distance,race_comment:o.race_form.race_comment,weather:o.race_form.weather,country:o.venue_country,state:o.venue_state,venue:o.venue_name,meeting:o.meeting_name};t.push(l)}return t.sort((function(e,t){return parseFloat(e.start)-parseFloat(t.start)})),t.forEach((function(e,n){e.weather?e.weather=e.weather.name:e.weather="UNKWN","9daef0d7-bf3c-4f50-921d-8e818c60fe61"===e.category?e.category="dog":"4a2788f8-e825-4d36-9894-efd4baf1cfae"===e.category?e.category="horse":e.category="chariot",e.start<=-30&&t.splice(n,1)})),t=t.filter((function(e){return n.includes(e.category)}))},m=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,n=b(t),r(n),w=0;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){m()}),[]),clearInterval(y),y=setInterval((function(){!function(){if(0!==n.length){var e=n;if(e.forEach((function(e){e.start=e.start-1,e.start<=-30&&m()})),++w>=300)return m(),w=0,void clearInterval(y);r(Object(o.a)(e))}}()}),1e3),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{subtitle:"Not really neds"}),Object(j.jsx)(N,{state:[n,i],changeSelection:function(e){var t=i;t[e]=!t[e],d(t),m()},refreshFeed:m,setState:r})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),F()}},[[18,1,2]]]);
//# sourceMappingURL=main.577a20d4.chunk.js.map