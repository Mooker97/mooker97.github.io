(this.webpackJsonpprojecta=this.webpackJsonpprojecta||[]).push([[0],{68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(11),r=a.n(c),o=a(10),s=a(14),d=a(108),l=a(111),j=a(107),m=a(112),b=(a.p,a(102)),h=a(106),u=a(1);function p(e){var t=Object(u.jsx)(b.a,{});return"Feed"===e.bodyState?0===e.feedState&&(t=Object(u.jsx)(h.a,{})):"Chats"===e.bodyState?0===e.chatState&&(t=Object(u.jsx)(h.a,{})):("Account"===e.bodyState||"Search"===e.bodyState)&&(t=Object(u.jsx)(h.a,{})),Object(u.jsx)(j.a,{className:e.class,color:"default",onClick:function(){"Feed"===e.bodyState?e.feedControl(-1):"Chats"===e.bodyState&&e.chatControl(-1)},children:t})}p.defaultProps={onClick:null};var x=p,O=a(128),g=a(109),f=a(110),v={prim:"#67a5d6",sec:"#8b46bf",acc:"red",dg:"#da4a4a",su:"#5fd677",ed:"#0077ff",li:"#ffffff",md:"#c6c8c9",dk:"#140927",bg:"#e5e8f0",tp:"#14092740"},y=Object(d.a)({searchOpen:{background:"".concat(v.tp),color:"white",display:"flex",alignItems:"center",justifyContent:"center",paddingLeft:10},input:{color:"".concat(v.li),width:"66vw"},label:{color:"".concat(v.md)}});var S=function(e){var t=Object(i.useState)(!1),a=Object(o.a)(t,2),n=a[0],c=a[1],r=Object(i.useState)(""),s=Object(o.a)(r,2),d=s[0],l=s[1],m=y(),b=function(){var e=n;l(""),c(!e)},h=function(){b()},p=Object(u.jsx)("p",{children:"Error"});return p=n?Object(u.jsxs)("div",{className:m.searchOpen,children:[Object(u.jsx)(O.a,{size:"small",InputLabelProps:{className:m.label},InputProps:{className:m.input},label:"Search",color:"secondary",onKeyDown:function(t){!function(t){var a=d;"Backspace"===t?a=a.substring(0,a.length-1):"Enter"===t?(e.bodyControl("Search"),e.searchControl(d),b()):1===t.length&&(a+=t),l(a)}(t.key)}}),Object(u.jsx)(j.a,{color:"inherit",onClick:h,children:Object(u.jsx)(g.a,{})})]}):Object(u.jsx)(j.a,{onClick:h,children:Object(u.jsx)(f.a,{})}),Object(u.jsx)("div",{children:p})},C=Object(d.a)({root:{height:"fit-content",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}});var N=function(e){var t,a=Object(i.useState)(!1),n=Object(o.a)(a,2),c=(n[0],n[1],C());return Object(u.jsxs)(l.a,(t={color:"primary",position:"static",className:c.root},Object(s.a)(t,"position","fixed"),Object(s.a)(t,"children",[Object(u.jsxs)(j.a,{onClick:function(){e.modalControl(!0)},children:[" ",Object(u.jsx)(m.a,{})," "]}),Object(u.jsx)(S,{bodyControl:e.bodyControl,searchControl:e.searchControl})]),t))},k=a(118),w=a(119),D=a(113),T=a(114),W=a(115),L=a(116),A=a(71);function q(e){var t=Object(d.a)({root:{display:"flex",justifyContent:"center",alignItems:"center"},img:{maxHeight:e.height,width:e.width}})();return Object(u.jsx)("div",{className:t.root,children:Object(u.jsx)("img",{className:t.img,src:e.img,alt:e.alt})})}q.defaultProps={height:"auto",width:"auto",alt:""};var I=q,M=a.p+"static/media/birb.eccc8c09.jpg",P=Object(d.a)({body:{maxWidth:"100vw",width:"100%",padding:5},linkArea:{margin:0,padding:0},fullWidth:{width:"100%"},link:{width:"50%"}});function R(e){var t=P();return Object(u.jsxs)("div",{children:[Object(u.jsx)(D.a,{component:"button",onClick:function(){e.feedControl()},children:Object(u.jsxs)("div",{className:t.body,children:[Object(u.jsx)(T.a,{variant:"h5",color:"textSecondary",component:"h4",children:e.cardData.name}),Object(u.jsxs)(T.a,{varient:"asd",component:"p",children:['"',e.cardData.description,'"']})]})}),Object(u.jsx)(W.a,{className:t.linkArea,children:Object(u.jsxs)(L.a,{size:"small",variant:"contained",className:t.fullWidth,children:[Object(u.jsx)(A.a,{className:t.link,color:"primary",children:"Notes"}),Object(u.jsx)(A.a,{className:t.link,color:"secondary",children:"Info"})]})})]})}R.defaultProps={edit:!1};var z=R,F=Object(d.a)({body:{margin:"0 5px",padding:5,textAlign:"left"},linkArea:{margin:0,padding:0},fullWidth:{width:"100%"},link:{width:"100%"}});function B(e){var t=F();return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:t.body,children:[Object(u.jsx)(T.a,{variant:"subtitle1",color:"textSecondary",component:"h4",children:e.cardData.name}),Object(u.jsxs)(T.a,{varient:"asd",component:"p",children:['"',e.cardData.description,'"']})]}),Object(u.jsx)(W.a,{className:t.linkArea,children:Object(u.jsx)(L.a,{size:"small",variant:"text",className:t.fullWidth,children:Object(u.jsx)(A.a,{className:t.link,color:"",children:"More Info"})})})]})}B.defaultProps={edit:!1};var H=B,G=a(117),E=Object(d.a)({body:{maxWidth:"100vw",width:"100%",padding:5},linkArea:{margin:0,padding:0},fullWidth:{width:"100%"},link:{width:"50%"}});function U(e){var t=E();return Object(u.jsx)("div",{children:Object(u.jsx)(D.a,{component:"button",onClick:function(){e.chatControl()},children:Object(u.jsxs)(G.a,{container:!0,children:[Object(u.jsx)(G.a,{item:!0,xs:2}),Object(u.jsx)(G.a,{item:!0,xs:10,children:Object(u.jsxs)("div",{className:t.body,children:[Object(u.jsx)(T.a,{variant:"subtitle1",color:"textSecondary",component:"h4",children:e.cardData.user}),Object(u.jsxs)(T.a,{varient:"body1",component:"p",children:['"',e.cardData.message,'"']})]})})]})})})}U.defaultProps={edit:!1};var J=U,Q=Object(d.a)({body:{maxWidth:"100vw",width:"100%",padding:5},linkArea:{margin:0,padding:0},fullWidth:{width:"100%"},link:{width:"50%"},data:{fontWeight:"bold",marginLeft:10}});function K(e){var t=Q();return Object(u.jsx)("div",{children:Object(u.jsx)(D.a,{component:"button",onClick:function(){console.log(e.cardData)},children:Object(u.jsxs)("div",{className:t.body,children:[Object(u.jsx)(T.a,{variant:"subtitle1",color:"textSecondary",component:"h4",children:e.cardData.name}),Object(u.jsx)(T.a,{className:t.data,varient:"body1",component:"p",children:e.cardData.data})]})})})}K.defaultProps={edit:!1};var V=K,X=Object(d.a)({body:{margin:"0 5px",padding:5,textAlign:"left"},link:{color:"blue"}});var Y=function(e){var t=X();return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:t.body,children:[Object(u.jsx)(T.a,{variant:"h6",color:"textSecondary",component:"h4",className:t.link,children:e.cardData.title}),Object(u.jsx)(T.a,{variant:"body2",color:"textSecondary",component:"p",children:e.cardData.description})]})})},Z=Object(d.a)({root:{width:"100%",overflow:"Hidden"}});var $=function(e){var t=Z(),a=Object(u.jsx)(z,{cardData:e.cardData,feedControl:e.feedControl});return"Note"===e.cardType?a=Object(u.jsx)(H,{cardData:e.cardData,feedControl:e.feedControl}):"Convo"===e.cardType?a=Object(u.jsx)(J,{cardData:e.cardData,chatControl:e.chatControl}):"Profile"===e.cardType?a=Object(u.jsx)(V,{cardData:e.cardData,chatControl:e.chatControl}):"Search"===e.cardType&&(a=Object(u.jsx)(Y,{cardData:e.cardData,bodyControl:e.bodyControl})),Object(u.jsxs)(k.a,{className:t.root,children:[a,Object(u.jsx)(w.a,{})]})};var _=function(e){var t,a,i,n;e.sender?(t="right",a="".concat(v.md),i="".concat(v.dk),n="1px solid ".concat(v.tp)):(t="left",a="".concat(v.sec),i="".concat(v.li),n="1px solid ".concat(v.tp));var c=Object(d.a)({root:{padding:"2px 5px",borderRadius:5},inner:{color:i,border:n,float:t,borderRadius:5,maxWidth:"80%",background:a,padding:5}})();return Object(u.jsx)("div",{className:c.root,children:Object(u.jsx)("div",{className:c.inner,children:Object(u.jsx)(T.a,{variant:"body2",component:"p",children:e.message})})})},ee=Object(d.a)({root:{},msgFeed:{background:"".concat(v.bg)}});var te=function(e){var t=ee(),a=e.dataState.conversations,i=e.dataState.messages,n=Object(u.jsx)("div",{children:a.map((function(t){return Object(u.jsx)($,{cardData:t,cardType:"Convo",chatControl:e.chatControl},t.user)}))});return 1===e.chatState&&(n=Object(u.jsx)("div",{className:"flex flex-col ".concat(t.msgFeed),children:i.map((function(e){return Object(u.jsx)(_,{message:e[0],sender:e[1]})}))})),Object(u.jsx)("div",{children:n})},ae=a(121),ie=a(120),ne=a.p+"static/media/code.e264d66b.jpg",ce=Object(d.a)({body:{margin:"0 5px",padding:5,textAlign:"left"},fullWidth:{width:"100%"},wheel:{margin:"auto"},flexBox:{flexDirection:"row",display:"flex"},progress:{height:"100%",display:"flex",flexDirection:"column",alignItems:"cener",justifyContent:"center",textAlign:"center"}});function re(e){var t=ce();return Object(u.jsx)("div",{children:Object(u.jsx)(D.a,{className:(t.body,t.fullWidth),component:"button",onClick:function(){e.feedControl()},children:Object(u.jsx)("div",{className:t.flexBox,children:Object(u.jsxs)(G.a,{container:!0,children:[Object(u.jsx)(G.a,{item:!0,xs:4,children:Object(u.jsx)(I,{width:"100%",img:ne})}),Object(u.jsxs)(G.a,{item:!0,xs:8,container:!0,children:[Object(u.jsxs)(G.a,{item:!0,xs:8,children:[Object(u.jsx)(T.a,{variant:"h6",color:"textSecondary",component:"h4",children:e.cardData.name}),Object(u.jsx)(T.a,{variant:"body2",color:"textSecondary",component:"h4",children:e.cardData.description})]}),Object(u.jsxs)(G.a,{item:!0,xs:4,className:t.progress,children:[Object(u.jsx)(ie.a,{variant:"determinate",value:e.cardData.completed,className:t.wheel}),Object(u.jsx)(T.a,{varient:"subtitle2",component:"p",children:"15/17/2028"})]})]})]})})})})}re.defaultProps={edit:!1};var oe=re,se=Object(d.a)({body:{margin:"0 5px",padding:5,textAlign:"left"},linkArea:{margin:0,padding:0},fullWidth:{width:"100%"},link:{width:"50%"}});function de(e){var t=se();return Object(u.jsxs)("div",{children:[Object(u.jsx)(D.a,{className:(t.body,t.fullWidth),component:"button",onClick:function(){e.feedControl()},children:Object(u.jsxs)(G.a,{container:!0,className:t.body,children:[Object(u.jsxs)(G.a,{item:!0,xs:8,children:[Object(u.jsx)(T.a,{variant:"h5",color:"textSecondary",component:"h4",children:e.cardData.name}),Object(u.jsxs)(T.a,{varient:"asd",component:"p",children:['"',e.cardData.pinnedMessage,'"']})]}),Object(u.jsx)(G.a,{item:!0,xs:4,children:Object(u.jsx)(I,{img:M,height:100})})]})}),Object(u.jsx)(W.a,{className:t.linkArea,children:Object(u.jsxs)(L.a,{variant:"contained",className:t.fullWidth,children:[Object(u.jsx)(A.a,{className:t.link,size:"small",color:"primary",children:"Members"}),Object(u.jsx)(A.a,{className:t.link,size:"small",color:"secondary",children:"Info"})]})})]})}de.defaultProps={edit:!1};var le=de,je=Object(d.a)({root:{maxWidth:345,width:"100%",margin:"10px auto",border:"1px solid grey",overflow:"Hidden",borderRadius:5}});var me=function(e){var t=je(),a=Object(u.jsx)(le,{cardData:e.cardData,feedControl:e.feedControl});return"Project"===e.cardType&&(a=Object(u.jsx)(oe,{cardData:e.cardData,feedControl:e.feedControl})),Object(u.jsx)(k.a,{className:t.root,children:a})},be=Object(d.a)({root:{marginBottom:"10px 0",background:"#8b46bf",color:"white",padding:10}});var he=function(e){var t=be();return Object(u.jsx)(T.a,{className:t.root,component:"h5",variant:"h5",children:e.content})},ue=Object(d.a)({root:{padding:10}});var pe=function(){var e=ue();return Object(u.jsx)("div",{className:e.root,children:Object(u.jsxs)(G.a,{container:!0,children:[Object(u.jsx)(G.a,{item:!0,xs:4,children:Object(u.jsx)(T.a,{variant:"body2",component:"p",children:"Stat 1"})}),Object(u.jsx)(G.a,{item:!0,xs:8,children:Object(u.jsx)(T.a,{variant:"body2",component:"p",children:"126 210 210"})}),Object(u.jsx)(G.a,{item:!0,xs:4,children:Object(u.jsx)(T.a,{variant:"body2",component:"p",children:"Stat 1"})}),Object(u.jsx)(G.a,{item:!0,xs:8,children:Object(u.jsx)(T.a,{variant:"body2",component:"p",children:"126 210 210"})}),Object(u.jsx)(G.a,{item:!0,xs:4,children:Object(u.jsx)(T.a,{variant:"body2",component:"p",children:"Stat 1"})}),Object(u.jsx)(G.a,{item:!0,xs:8,children:Object(u.jsx)(T.a,{variant:"body2",component:"p",children:"126 210 210"})})]})})};var xe=function(e){var t=Object(u.jsx)(pe,{});return 1==e.infoState?t=Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Users"}),Object(u.jsx)(pe,{})]}):2==e.infoState&&(t=Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Dates"}),Object(u.jsx)(pe,{})]})),Object(u.jsx)("div",{children:t})},Oe=Object(d.a)({root:{background:"white"},heading:{textAlign:"center",marginTop:10},listHead:{marginBottom:"10px 0",background:"#8b46bf",color:"white",padding:10},fullWidth:{width:"100%"},pinnedMessage:{background:"#67a5d6",color:"white",padding:10}});var ge=function(e){var t=Object(i.useState)(0),a=Object(o.a)(t,2),n=a[0],c=a[1],r=function(e){!function(){c(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)}(e.currentTarget.value)},s=Oe();return Object(u.jsxs)("div",{className:s.root,children:[Object(u.jsx)(T.a,{className:s.heading,component:"h5",variant:"h5",children:"This Group"}),Object(u.jsx)(I,{height:120,img:M}),Object(u.jsx)(w.a,{}),Object(u.jsxs)(L.a,{size:"small",variant:"contained",className:s.fullWidth,children:[Object(u.jsx)(A.a,{value:0,variant:"text",className:s.fullWidth,color:"",onClick:r,children:"Info"}),Object(u.jsx)(A.a,{value:1,className:s.fullWidth,color:"primary",onClick:r,children:"Users"}),Object(u.jsx)(A.a,{value:2,className:s.fullWidth,color:"primary",onClick:r,children:"Dates"})]}),Object(u.jsx)(xe,{infoState:n}),Object(u.jsxs)(T.a,{className:s.pinnedMessage,children:['"',e.headData.pinnedMessage,'""']}),Object(u.jsx)(he,{content:"Projects",class:s.listHead})]})},fe=Object(d.a)({root:{background:"white"},heading:{textAlign:"center",marginTop:10},listHead:{marginBottom:"10px 0",background:"#8b46bf",color:"white",padding:10},fullWidth:{width:"100%"},pinnedMessage:{background:"#67a5d6",color:"white",padding:10}});var ve=function(e){var t=Object(i.useState)(0),a=Object(o.a)(t,2),n=a[0],c=a[1],r=function(e){!function(){c(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)}(e.currentTarget.value)},s=fe();return Object(u.jsxs)("div",{className:s.root,children:[Object(u.jsx)(I,{width:"100%",img:ne}),Object(u.jsx)(T.a,{className:s.heading,component:"h5",variant:"h5",children:e.title}),Object(u.jsx)(w.a,{}),Object(u.jsxs)(L.a,{size:"small",variant:"contained",className:s.fullWidth,children:[Object(u.jsx)(A.a,{value:0,variant:"text",className:s.fullWidth,color:"",onClick:r,children:"Info"}),Object(u.jsx)(A.a,{value:1,className:s.fullWidth,color:"primary",onClick:r,children:"Users"}),Object(u.jsx)(A.a,{value:2,className:s.fullWidth,color:"primary",onClick:r,children:"Dates"})]}),Object(u.jsx)(xe,{infoState:n}),Object(u.jsx)(T.a,{className:s.pinnedMessage,children:e.headData.description}),Object(u.jsx)(he,{content:"Tasks",class:s.listHead})]})},ye=Object(d.a)({root:{background:"white"},heading:{textAlign:"center",marginTop:10},listHead:{marginBottom:"10px 0",background:"#8b46bf",color:"white",padding:10},fullWidth:{width:"100%"},pinnedMessage:{background:"#67a5d6",color:"white",padding:10}});var Se=function(e){var t=Object(i.useState)(0),a=Object(o.a)(t,2),n=a[0],c=a[1],r=function(e){!function(){c(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)}(e.currentTarget.value)},s=ye();return Object(u.jsxs)("div",{className:s.root,children:[Object(u.jsx)(T.a,{className:s.heading,component:"h5",variant:"h5",children:e.title}),Object(u.jsx)(w.a,{}),Object(u.jsx)(ie.a,{variant:"determinate",value:15}),Object(u.jsxs)(L.a,{size:"small",variant:"contained",className:s.fullWidth,children:[Object(u.jsx)(A.a,{value:0,variant:"text",className:s.fullWidth,color:"",onClick:r,children:"Info"}),Object(u.jsx)(A.a,{value:1,className:s.fullWidth,color:"primary",onClick:r,children:"Users"}),Object(u.jsx)(A.a,{value:2,className:s.fullWidth,color:"primary",onClick:r,children:"Dates"})]}),Object(u.jsx)(xe,{infoState:n}),Object(u.jsx)(T.a,{className:s.pinnedMessage,children:e.headData.description}),Object(u.jsx)(he,{content:"Notes",class:s.listHead})]})},Ce=Object(d.a)((function(){return{root:{padding:0,background:"#c6c8c9"},heading:{margin:"10px",textAlign:"center"},cardList:{width:"100%",margin:"auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}}));var Ne=function(e){var t=Ce(),a=Object(u.jsx)("p",{children:"Nope"});return 0==e.feedState?a=Object(u.jsxs)(ae.a,{maxWidth:"sm",className:t.root,children:[Object(u.jsx)("h3",{className:t.heading,children:"My Groups"}),e.dataState.groups.map((function(t){return Object(u.jsx)(me,{cardType:"Group",cardData:t,feedControl:e.feedControl})}))]}):1==e.feedState?a=Object(u.jsxs)(ae.a,{maxWidth:"sm",className:t.root,children:[Object(u.jsx)(ge,{title:"This Group",headData:e.dataState.groups[0]}),Object(u.jsx)("div",{className:t.cardList,children:e.dataState.projects.map((function(t){return Object(u.jsx)(me,{cardType:"Project",cardData:t,feedControl:e.feedControl},t.id)}))})]}):2==e.feedState?a=Object(u.jsxs)(ae.a,{maxWidth:"sm",className:t.root,children:[Object(u.jsx)(ve,{title:"This Project",headData:e.dataState.projects[0]}),e.dataState.tasks.map((function(t){return Object(u.jsx)($,{cardType:"Task",cardData:t,feedControl:e.feedControl},t.id)}))]}):3==e.feedState&&(a=Object(u.jsxs)(ae.a,{className:t.root,children:[Object(u.jsx)(Se,{title:"This Task",headData:e.dataState.tasks[0]}),e.dataState.notes.map((function(t){return Object(u.jsx)($,{cardType:"Note",cardData:t,feedControl:e.feedControl},t.id)}))]})),a},ke=Object(d.a)({root:{background:"white"},heading:{textAlign:"center",marginTop:10},fullWidth:{width:"100%"},pinnedMessage:{background:"#67a5d6",color:"white",padding:10}});var we=function(e){var t=ke();return Object(u.jsxs)("div",{className:t.root,children:[Object(u.jsx)(T.a,{className:t.heading,component:"h5",variant:"h5",children:"This User"}),Object(u.jsx)(I,{height:120,img:M}),Object(u.jsx)(w.a,{}),Object(u.jsx)(he,{content:"Settings"})]})},De=Object(d.a)({root:{},msgFeed:{background:"".concat(v.bg)}});var Te=function(e){De();var t=e.dataState.accountSettings,a=Object(u.jsx)("div",{children:t.map((function(e){return Object(u.jsx)($,{cardData:e,cardType:"Profile"},e.user)}))});return Object(u.jsx)("div",{children:a})};var We=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(we,{dataState:e.dataState}),Object(u.jsx)(Te,{dataState:e.dataState})]})},Le=Object(d.a)({root:{padding:20}});var Ae=function(e){var t=Le();return Object(u.jsxs)("div",{className:t.root,children:[Object(u.jsxs)(T.a,{component:"p",variant:"h6",children:["Showing Results For: '",e.term,"'"]}),Object(u.jsx)(w.a,{})]})};var qe=function(e){var t=e.dataState.searchResults;return console.log(t),Object(u.jsxs)("div",{children:[Object(u.jsx)(Ae,{term:e.searchState}),t.map((function(e){return Object(u.jsx)($,{cardType:"Search",cardData:e})}))]})},Ie=Object(d.a)({root:{minHeight:"calc(100vh - 110px)",margin:"48px 0 60px 0",background:"".concat(v.bg)}});var Me=function(e){var t=Ie(),a=Object(u.jsx)(Ne,{feedState:e.feedState,dataState:e.dataState,feedControl:e.feedControl});return"Account"===e.bodyState?a=Object(u.jsx)(We,{dataState:e.dataState}):"Chats"===e.bodyState?a=Object(u.jsx)(te,{dataState:e.dataState,chatControl:e.chatControl,chatState:e.chatState}):"Search"===e.bodyState&&(a=Object(u.jsx)(qe,{dataState:e.dataState,feedControl:e.feedControl,searchState:e.searchState})),Object(u.jsx)("div",{className:t.root,children:a})},Pe=a(122),Re=a(123),ze=a(124),Fe=a(125),Be=a(126),He=Object(d.a)({root:{width:"100%",position:"fixed",bottom:0},btn:{width:"25%",flex:1,minWidth:30}});function Ge(e){var t=He();return Object(u.jsxs)(Pe.a,{value:e.bodyState,onChange:function(t,a){"Menu"==a?e.modalControl(!0,"Menu"):e.bodyControl(a)},className:t.root,children:[Object(u.jsx)(Re.a,{label:"Feed",value:"Feed",icon:Object(u.jsx)(ze.a,{}),className:t.btn}),Object(u.jsx)(Re.a,{label:"Chats",value:"Chats",icon:Object(u.jsx)(Fe.a,{}),className:t.btn}),Object(u.jsx)(Re.a,{label:"Account",value:"Account",icon:Object(u.jsx)(Be.a,{}),className:t.btn}),Object(u.jsx)(x,{bodyState:e.bodyState,feedControl:e.feedControl,chatState:e.chatState,chatControl:e.chatControl,feedState:e.feedState,class:t.btn}),";"]})}var Ee=a(127),Ue=a(129),Je=a(52),Qe={h1:{fontWeight:900,fontSize:12,letterSpacing:"-0.24px"},h2:{fontWeight:500,fontSize:29,letterSpacing:"-0.24px"},h3:{fontWeight:500,fontSize:24,letterSpacing:"-0.06px"},h4:{fontWeight:500,fontSize:20,letterSpacing:"-0.06px"},h5:{fontWeight:500,fontSize:16,letterSpacing:"-0.05px"},h6:{fontWeight:500,fontSize:14,letterSpacing:"-0.05px"},overline:{fontWeight:500}},Ke=Object(Je.a)({palette:{primary:{main:"".concat(v.prim)},secondary:{main:"".concat(v.sec)}},Typography:Qe}),Ve=Object(Je.a)({palette:{primary:{main:"#5fd677"},secondary:{main:"#da4a4a"}},Typography:Qe}),Xe=Object(Je.a)({palette:{primary:{main:"#0077ff"},secondary:{main:"#da4a4a"}},Typography:Qe}),Ye=a.p+"static/media/logo.3416b645.svg",Ze=Object(d.a)({root:{width:"100%",paddingBottom:"10%",height:"100%",background:"".concat(v.bg),display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},form:{width:"80%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:" 0 10%"},input:{margin:"10px",width:"100%",background:"#f3f3f3",border:"2px solid #e3e3e3",padding:5,borderRadius:5},btn:{margin:10,width:"80%"},label:{marginLeft:15,textAlign:"left",width:"100%"},header:{fontSize:"1.8rem",textAlign:"center",margin:"15px auto 50px"}});var $e=function(e){var t=Ze();return Object(u.jsxs)("div",{className:t.root,children:[Object(u.jsx)(I,{img:Ye,height:150}),Object(u.jsx)(T.a,{variant:"h4",component:"h1",className:t.header,children:"Login"}),Object(u.jsxs)("div",{className:t.form,children:[Object(u.jsx)(T.a,{className:t.label,variant:"subtitle1",component:"p",children:"Username"}),Object(u.jsx)(O.a,{className:t.input}),Object(u.jsx)(T.a,{className:t.label,variant:"subtitle1",component:"p",children:"Password"}),Object(u.jsx)(O.a,{className:t.input}),Object(u.jsx)(A.a,{variant:"contained",color:"primary",onClick:e.modalControl,className:t.btn,children:"Log In"}),Object(u.jsx)(Ee.a,{theme:Ve,children:Object(u.jsx)(A.a,{variant:"contained",color:"primary",onClick:e.modalControl,className:t.btn,children:"Register"})})]})]})},_e=Object(d.a)({root:{position:"absolute",left:"16%",top:"25%",background:"".concat(v.li),color:"".concat(v.dk),width:"66%",padding:"12px 16px",borderRadius:10},group:{display:"flex",flexDirection:"column"},btn:{margin:5},divider:{margin:10}}),et=function(e){var t=_e(),a=Object(u.jsx)("div",{className:t.root,children:Object(u.jsx)(Ee.a,{theme:Xe,children:Object(u.jsxs)(L.a,{className:t.group,color:"default",variant:"outlined",rounded:!0,children:[Object(u.jsx)(A.a,{className:t.btn,color:"primary",children:"Refresh"}),Object(u.jsx)(w.a,{className:t.divider}),Object(u.jsx)(A.a,{className:t.btn,children:"Blah"}),Object(u.jsx)(A.a,{className:t.btn,children:"Blah"}),Object(u.jsx)(A.a,{className:t.btn,children:"Settings"}),Object(u.jsx)(A.a,{className:t.btn,children:"Menu"}),Object(u.jsx)(w.a,{className:t.divider}),Object(u.jsx)(A.a,{className:t.btn,color:"secondary",onClick:function(){e.modalControl(!0,"Login")},children:"Log out"})]})})});"Login"===e.modalState[1]&&(a=Object(u.jsx)($e,{modalControl:e.modalControl}));return Object(u.jsx)("div",{children:Object(u.jsx)(Ue.a,{open:e.modalState[0],onClose:function(){e.modalControl()},"aria-labelledby":"Settings Modal","aria-describedby":"Provides a Menu",children:a})})};et.defaultProps={};var tt=et,at=(a(68),{groups:[{id:1,name:"This Group",pinnedMessage:"Lorem, ipsum dolor sit amet consectetur adipisicing elit."},{id:2,name:"That Group",pinnedMessage:"Quos repudiandae enim dolorem, molestias magni quo, tenetur officia quas consequatur aspernatur temporibus ratione veritatis porro atque et totam explicabo omnis. Reprehenderit."}],projects:[{id:1,name:"This Project",img:"ux.jpg",completed:65,description:"A quick project to do some things",deadLine:Date.now()},{id:2,name:"That Project",img:"code.jpg",completed:35,description:"A different project",deadLine:Date.now()}],tasks:[{id:1,name:"This Task",img:"ux.jpg",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit."},{id:2,name:"That Task",img:"code.jpg",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit."},{id:3,name:"Another Task",img:"code.jpg",description:"Quos repudiandae enim dolorem, molestias magni quo, tenetur officia quas consequatur aspernatur temporibus ratione veritatis porro atque et totam explicabo omnis."},{id:4,name:"This Task",img:"ux.jpg",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}],notes:[{id:1,name:"This Note",img:"ux.jpg",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit."},{id:2,name:"That Note",img:"code.jpg",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit."},{id:3,name:"Another Note",img:"code.jpg",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit."},{id:4,name:"This Note",img:"ux.jpg",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}],conversations:[{user:"Jimmy",message:"Gday Mate"},{user:"Banjo",message:"Gday Mate"}],messages:[[" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa consectetur at expedita.",0],["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi at nobis quae quo natus similique reprehenderit enim sequi pariatur commodi, dolore in amet itaque quod.",1],["Lorem, ipsum dolor.",0],["Lorem, ipsum.",0],["Lorem ipsum dolor sit amet, consectetur adipisicing.",1],["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus minus animi tenetur impedit rem perferendis, vitae beatae harum deserunt.",1],[" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa consectetur at expedita.",0],["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi at nobis quae quo natus similique reprehenderit enim sequi pariatur commodi, dolore in amet itaque quod.",1],["Lorem, ipsum dolor.",0],["Lorem, ipsum.",1],["Lorem ipsum dolor sit amet, consectetur adipisicing.",1],["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus minus animi tenetur impedit rem perferendis, vitae beatae harum deserunt.",0]],accountSettings:[{name:"This Setting",data:"FREEDOM"},{name:"That Setting",data:100}],searchResults:[{title:"This result",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus minus animi tenetur impedit rem perferendis, vitae beatae harum deserunt."},{title:"That result",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa consectetur at expedita      "},{title:"This result",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus minus animi tenetur impedit rem perferendis, vitae beatae harum deserunt."},{title:"That result",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa consectetur at expedita      "},{title:"This result",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus minus animi tenetur impedit rem perferendis, vitae beatae harum deserunt."},{title:"That result",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa consectetur at expedita      "},{title:"Another result",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi at nobis quae quo natus similique reprehenderit enim sequi pariatur commodi, dolore in amet itaque quod"}]});var it=function(){var e=Object(i.useState)(at),t=Object(o.a)(e,2),a=t[0],n=(t[1],Object(i.useState)("Feed")),c=Object(o.a)(n,2),r=c[0],s=c[1],d=Object(i.useState)(0),l=Object(o.a)(d,2),j=l[0],m=l[1],b=Object(i.useState)(0),h=Object(o.a)(b,2),p=h[0],x=h[1],O=Object(i.useState)([!1,"",{}]),g=Object(o.a)(O,2),f=g[0],v=g[1],y=Object(i.useState)(""),S=Object(o.a)(y,2),C=S[0],k=S[1],w=function(e){s(e)},D=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};v([e,t,a])},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=p;(t+=e)<0&&(t=0),t>3&&(t=3),x(t)},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=j;(t+=e)<0&&(t=0),t>1&&(t=1),m(t)};return Object(i.useEffect)((function(){console.log("Render")}),[]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(Ee.a,{theme:Ke,children:[Object(u.jsx)(N,{modalControl:D,bodyControl:w,searchControl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";k(e)},bodyState:r}),Object(u.jsx)(Me,{dataState:a,bodyState:r,feedState:p,chatState:j,searchState:C,feedControl:T,chatControl:W}),Object(u.jsx)(Ge,{bodyState:r,feedState:p,chatState:j,bodyControl:w,feedControl:T,chatControl:W}),Object(u.jsx)(tt,{modalState:f,modalControl:D})]})})},nt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,130)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(it,{})}),document.getElementById("root")),nt()}},[[69,1,2]]]);
//# sourceMappingURL=main.1cf42d4a.chunk.js.map