(this.webpackJsonpignite=this.webpackJsonpignite||[]).push([[0],{132:function(e,n,t){"use strict";t.r(n);var a,c,r,i,s,o,d,b,l,g,m,j,u,p=t(0),h=t.n(p),O=t(70),A=t.n(O),f=t(12),x=t(33),w=t(43),v=t.n(w),y=t(63),E=t(37),I=t.n(E),k="https://api.rawg.io/api/",C="679444e92c77420799afc35b706fc24d",S="key=".concat(C),D=(new Date).getFullYear(),R=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e}(),U=function(){var e=(new Date).getDate();return e<10?"0".concat(e):e}(),B="".concat(D,"-").concat(R,"-").concat(U),N="".concat(D-1,"-").concat(R,"-").concat(U),T="".concat(D+1,"-").concat(R,"-").concat(U),G="games?".concat(S,"&dates=").concat(N,",").concat(B,"&ordering=-rating&page_size=12"),L="games?".concat(S,"&dates=").concat(B,",").concat(T,"&ordering=-added&page_size=12"),z="games?".concat(S,"&dates=").concat(N,",").concat(B,"&ordering=-released&page_size=12"),H=function(e){return"".concat(k,"games/").concat(e,"/screenshots?&.json?&key=").concat(C)},_=function(e){return"".concat(k,"games?search=").concat(e,"&page_size=9&key=").concat(C)},F=t(22),Z={popular:[],newGames:[],upcoming:[],searched:[]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_GAMES":return Object(F.a)(Object(F.a)({},e),{},{popular:n.payload.popular,upcoming:n.payload.upcoming,newGames:n.payload.newGames});case"FETCH_SEARCHED":return Object(F.a)(Object(F.a)({},e),{},{searched:n.payload.searched});case"CLEAR_SEARCHED":return Object(F.a)(Object(F.a)({},e),{},{searched:[]});default:return Object(F.a)({},e)}},V=t(13),X=t(133),J=t(46),M=function(e,n){return e.match(/media\/screenshots/)?e.replace("media/screenshots","media/resize/".concat(n,"/-/screenshots")):e.replace("/media/games/","/media/resize/".concat(n,"/-/games/"))},W={hidden:{opacity:0},show:{opacity:1,transition:{duration:.75}},exit:{opacity:0,transition:{duration:.75}}},Q={hidden:{opacity:0,scale:.5},show:{opacity:1,scale:1,transition:{duration:.75}},exit:{opacity:0,transition:{duration:.75}}},Y=t(2),q=Object(V.b)(X.a.div)(a||(a=Object(f.a)(["\n  min-height: 30vh;\n  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  cursor: pointer;\n  overflow: hidden;\n  border-radius: 20px;\n  img {\n    width: 100%;\n    height: 40vh;\n    object-fit: cover;\n  }\n"]))),K=function(e){var n=e.name,t=e.released,a=e.image,c=e.id,r=c.toString(),i=Object(x.b)();return Object(Y.jsx)(q,{variants:Q,initial:"hidden",animate:"show",layoutId:r,onClick:function(){document.body.style.overflow="hidden",i(function(e){return function(){var n=Object(y.a)(v.a.mark((function n(t){var a,c;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"LOADING_DETAIL"}),n.next=3,I.a.get((r=e,"".concat(k,"games/").concat(r,".json?&key=").concat(C)));case 3:return a=n.sent,n.next=6,I.a.get(H(e));case 6:c=n.sent,t({type:"GET_DETAIL",payload:{game:a.data,screen:c.data}});case 8:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()}(c)),console.log(typeof r+r)},children:Object(Y.jsxs)(J.b,{to:"/game/".concat(c),children:[Object(Y.jsx)(X.a.h3,{layoutId:"title ".concat(r),children:n}),Object(Y.jsx)("p",{children:t}),Object(Y.jsx)(X.a.img,{layoutId:"image ".concat(r),src:M(a,640),alt:n})]})})},$=t(134),ee=t(135),ne=t(8),te=t.p+"static/media/playstation.18cc4b9c.svg",ae=t.p+"static/media/steam.d7b8819f.svg",ce=t.p+"static/media/xbox.3e7db735.svg",re=t.p+"static/media/nintendo.f579be04.svg",ie=t.p+"static/media/apple.5757c37e.svg",se=t.p+"static/media/gamepad.c9269ef5.svg",oe=Object(V.b)(X.a.div)(c||(c=Object(f.a)(["\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: scroll;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  &::-webkit-scrollbar {\n    width: 0.5rem;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: #ff7676;\n  }\n  &::-webkit-scroll-track {\n    background: white;\n  }\n"]))),de=Object(V.b)(X.a.div)(r||(r=Object(f.a)(["\n  width: 80%;\n  border-radius: 1rem;\n  padding: 2rem 5rem;\n  background: white;\n  position: absolute;\n  left: 10%;\n  color: black;\n  img {\n    width: 100%;\n  }\n"]))),be=Object(V.b)(X.a.div)(i||(i=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  img {\n    width: 2rem;\n    height: 2rem;\n    display: inline;\n  }\n"]))),le=Object(V.b)(X.a.div)(s||(s=Object(f.a)(["\n  text-align: center;\n"]))),ge=Object(V.b)(X.a.div)(o||(o=Object(f.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  img {\n    margin-left: 3rem;\n  }\n"]))),me=Object(V.b)(X.a.div)(d||(d=Object(f.a)(["\n  margin-top: 5rem;\n  img {\n    width: 100%;\n  }\n"]))),je=Object(V.b)(X.a.div)(b||(b=Object(f.a)(["\n  margin: 5rem 0rem;\n"]))),ue=function(e){var n=e.pathId,t=Object(ne.e)(),a=function(e){switch(e){case"Playstation 4":return te;case"Xbox One":return ce;case"PC":return ae;case"Nintendo Switch":return re;case"iOS":return ie;default:return se}},c=Object(x.c)((function(e){return e.detail})),r=c.screen,i=c.game,s=c.isLoading;return console.log(typeof n+n),Object(Y.jsx)(Y.Fragment,{children:!s&&Object(Y.jsx)(oe,{className:"shadow",onClick:function(e){e.target.classList.contains("shadow")&&(document.body.style.overflow="auto",t.push("/"))},children:Object(Y.jsxs)(de,{layoutId:n,children:[Object(Y.jsxs)(be,{children:[Object(Y.jsxs)("div",{className:"rating",children:[Object(Y.jsx)(X.a.h3,{layoutId:"title ".concat(n),children:i.name}),Object(Y.jsxs)("p",{children:["Rating: ",i.rating]}),function(){for(var e=[],n=Math.floor(i.rating),t=1;t<=5;t++)t<=n?e.push(Object(Y.jsx)("img",{alt:"",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZbbbcIwFIZ/o4pnNqiZAEbICO0EpRM0ErcHHkgfIaCGDWCStiN0A0bgmUDc4yQkAYziEyWfZCW2bH858RWogHLdDpi0wESNxwO02x9gwhZBiDmUcsGEJYqjASTJOmoyeeO05UWko8nxwMBalEWTIzlR2Ud0Hc0F67GyEhmiudBXw6EDC0RZBTWdSppl3w9EVEH9IAxfRRAcUCZKO+uj1eoginp6VsX5pHPbxalF+ywJoZ9/+l0sFnuhRqM5CTw0SRR5SURNyrRktfrMxqgRWSrRr1eToVZZQXInqk12IzGKUplLsi9U4XweiPV6d1tsXLD0NQE9AvAJTJKHohQJLnr9PaBeUbLI2aI++CIJjog2Ub5Eow/E2ezZWkQNJMzs6asdSu9I9rR7wtAxFT/BTO8mf6DOPeH7mzT/S2kbHx/JOSULdfXfsJve1NjJBLT4cDx2C5K8mu9vxXLZjevkEUpTl+aIokgPrIfTaVN2zsRC2gXorrdLr2EvsKXKBbHQVprK/wF34p3gYzo6rAAAAABJRU5ErkJggg=="},t)):e.push(Object(Y.jsx)("img",{alt:"",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtZZLbsIwEIYnD7HODWpOAEIsukJZdtkbNEWAkFi0NwCW3ZUdAkTDEXoEdtmA1BvkCHQXiVdnaFK5wQFPRH7Jsj3E83lsjzFADnme5wBTJjDVbrc927ZfgCk2yDCMPpZXYIoFomiOx6PAptPpdJ44Y1kgikbqDoAhbZAUzUnU5kSlDUpFk8C090oLlI5GUrXVarmgIevaB91uV2D1gSUrd0Sj0fgMgiC65MdInG232yrO2sEcqVBNsyUnFwBpbbCEODY0TfNUY/lCf+F4PA4N3NA+GgZQoMi/tVqtlvV6nfouFCCCzGaz4WmPioIlEGr/HYZbw2TIP9AtYWnIGSiB1Wq1b0zQB8ghHOdNp9NR2q7Mo/V6HWBkdKzvgQd5n0wmb6rfLt0MApiK8w9YoIwr5xqoygbB783AEi6dAA4IL1E2JJbT6/XutEGHw0GAWiEWd7/fP8ftM0VR5KrstsqIS1CR+7j2G7QNpGO7xOI3m03Psiz6nxLJt9in1VikfZoZIDcBUPLtdruyKjfm87mP9jJNAuIIs1ZDGVEMIcDI9/0NXBHmzhDfeotSqUTPsEfQVZ4HojRWqOw/3aTMvdEfx5AAAAAASUVORK5CYII="},t));return e}()]}),Object(Y.jsxs)(le,{children:[Object(Y.jsx)("h3",{children:"Platforms"}),Object(Y.jsx)(ge,{children:i.platforms.map((function(e){return Object(Y.jsx)("img",{src:a(e.platform.name)},e.platform.id)}))})]})]}),Object(Y.jsx)(me,{children:Object(Y.jsx)(X.a.img,{layoutId:"image ".concat(n),src:M(i.background_image,1280),alt:"image"})}),Object(Y.jsx)(je,{children:Object(Y.jsx)("p",{children:i.description_raw})}),Object(Y.jsx)("div",{className:"gallery",children:r.results.map((function(e){return Object(Y.jsx)("img",{src:M(e.image,1280),alt:"gameImage"},e.id)}))})]})})})},pe=Object(V.b)(X.a.div)(l||(l=Object(f.a)(["\n  padding: 0rem 5rem;\n  h2 {\n    padding: 5rem 0rem;\n  }\n"]))),he=Object(V.b)(X.a.div)(g||(g=Object(f.a)(["\n  min-height: 80vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  grid-column-gap: 3rem;\n  grid-row-gap: 5rem;\n"]))),Oe=function(){var e=Object(ne.f)().pathname.split("/")[2],n=Object(x.b)();Object(p.useEffect)((function(){n(function(){var e=Object(y.a)(v.a.mark((function e(n){var t,a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(k).concat(G));case 2:return t=e.sent,e.next=5,I.a.get("".concat(k).concat(z));case 5:return a=e.sent,e.next=8,I.a.get("".concat(k).concat(L));case 8:c=e.sent,n({type:"FETCH_GAMES",payload:{popular:t.data.results,upcoming:c.data.results,newGames:a.data.results}});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[n]);var t=Object(x.c)((function(e){return e.games})),a=t.popular,c=t.newGames,r=t.upcoming,i=t.searched;return Object(Y.jsx)(pe,{variants:W,initial:"hidden",animate:"show",children:Object(Y.jsxs)($.a,{type:"crossfade",children:[Object(Y.jsx)(ee.a,{children:e&&Object(Y.jsx)(ue,{pathId:e})}),i.length?Object(Y.jsxs)("div",{className:"searched",children:[Object(Y.jsx)("h2",{children:"Searched Games"}),Object(Y.jsx)(he,{children:i.map((function(e){return Object(Y.jsx)(K,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))})]}):"",Object(Y.jsx)("h2",{children:"Upcoming Games"}),Object(Y.jsx)(he,{children:r.map((function(e){return Object(Y.jsx)(K,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))}),Object(Y.jsx)("h2",{children:"Popular Games"}),Object(Y.jsx)(he,{children:a.map((function(e){return Object(Y.jsx)(K,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))}),Object(Y.jsx)("h2",{children:"New Games"}),Object(Y.jsx)(he,{children:c.map((function(e){return Object(Y.jsx)(K,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))})]})})},Ae=Object(V.a)(m||(m=Object(f.a)(["\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    &::-webkit-scrollbar{\n        width: 0.5rem;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: darkgray;\n    }\n}\n\nbody {\n    font-family: 'Big Shoulders Display', cursive;\n    width: 100%;\n}\n\nh2 {\n    font-size: 3rem;\n    font-family: 'Squada One', cursive;\n    font-weight: lighter;\n}\n\nh3 {\n    font-size: 2rem;\n    color: #333;\n    padding: 1.5rem 0rem;\n}\n\np {\n    font-size: 1.5rem;\n    line-height: 200%;\n    padding-bottom: 0.5rem;\n    color: #696969;\n}\n\nimg {\n    display: block;\n}\n"]))),fe=t(102),xe=t.p+"static/media/logo.9b6b8655.svg",we=function(){var e=Object(x.b)(),n=Object(p.useState)(""),t=Object(fe.a)(n,2),a=t[0],c=t[1];return Object(Y.jsxs)(ve,{variants:W,initial:"hidden",animate:"show",children:[Object(Y.jsxs)(ye,{onClick:function(){e({type:"CLEAR_SEARCHED"})},children:[Object(Y.jsx)("img",{src:xe,alt:""}),Object(Y.jsx)("h1",{children:"Ignite"})]}),Object(Y.jsxs)("form",{className:"search",children:[Object(Y.jsx)("input",{value:a,onChange:function(e){c(e.target.value)},type:"text"}),Object(Y.jsx)("button",{onClick:function(n){var t;n.preventDefault(),e((t=a,function(){var e=Object(y.a)(v.a.mark((function e(n){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(_(t));case 2:a=e.sent,n({type:"FETCH_SEARCHED",payload:{searched:a.data.results}});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())),c("")},type:"submit",children:"Search"})]})]})},ve=Object(V.b)(X.a.div)(j||(j=Object(f.a)(['\n  padding: 3rem 5rem;\n  text-align: center;\n  input {\n    width: 30%;\n    font-size: 1.5rem;\n    padding: 0.5rem;\n    border: none;\n    margin-top: 1rem;\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);\n    font-weight: bold;\n    font-family: "Big Shoulders Display", cursive;\n    font-weight: bold;\n  }\n  button {\n    font-size: 1.5rem;\n    border: none;\n    padding: 0.5rem 2rem;\n    cursor: pointer;\n    background: #ff7676;\n    color: white;\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);\n  }\n']))),ye=Object(V.b)(X.a.div)(u||(u=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  cursor: pointer;\n  img {\n    height: 2rem;\n    width: 2rem;\n  }\n"])));var Ee=function(){return Object(Y.jsxs)("div",{className:"App",children:[Object(Y.jsx)(Ae,{}),Object(Y.jsx)(we,{}),Object(Y.jsx)(ne.a,{path:["/game/:id","/"],children:Object(Y.jsx)(Oe,{})})]})},Ie=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,136)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))},ke=t(62),Ce={game:{platforms:[]},screen:{results:[]},isLoading:!0},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_DETAIL":return Object(F.a)(Object(F.a)({},e),{},{game:n.payload.game,screen:n.payload.screen,isLoading:!1});case"LOADING_DETAIL":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!0});default:return Object(F.a)({},e)}},De=Object(ke.b)({games:P,detail:Se}),Re=t(101),Ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ke.c,Be=Object(ke.d)(De,Ue(Object(ke.a)(Re.a)));A.a.render(Object(Y.jsx)(h.a.StrictMode,{children:Object(Y.jsx)(x.a,{store:Be,children:Object(Y.jsx)(J.a,{children:Object(Y.jsx)(Ee,{})})})}),document.getElementById("root")),Ie()}},[[132,1,2]]]);
//# sourceMappingURL=main.b98b7a6f.chunk.js.map