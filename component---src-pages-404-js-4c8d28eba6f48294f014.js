(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(142),s=n(152);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement("section",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{size:"seven"},r.a.createElement("h1",null,"404 ",r.a.createElement("span",{style:{fontWeight:300}},"— not found.")))),r.a.createElement(i.c,null,r.a.createElement(i.a,{size:"six"},r.a.createElement("p",null,"Whatever you’re looking for wasn’t found, but you can always go home.")))))}},142:function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return d});var o=n(0),r=n.n(o),i=n(4),s=n.n(i),a=n(145),l=n.n(a),u=function(e){var t=e.children;return r.a.createElement("div",{className:l.a.container},t)};u.propTypes={children:s.a.node.isRequired};var c=function(e){var t=e.children,n=e.size,o=e.offset;return r.a.createElement("div",{className:l.a[n]+" "+l.a.columns+" "+(o||"zero"===o?l.a["offset-by-"+o]:"")},t)};c.propTypes={children:s.a.node.isRequired,size:s.a.oneOf(["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","one-third","two-thirds","one-half"]).isRequired,offset:s.a.oneOf(["","zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","one-third","two-thirds","one-half"])},c.defaultProps={offset:""};var d=function(e){var t=e.children;return r.a.createElement("div",{className:l.a.row},t)};d.propTypes={children:s.a.node.isRequired}},143:function(e,t,n){var o;e.exports=(o=n(146))&&o.default||o},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return h});var o=n(0),r=n.n(o),i=n(4),s=n.n(i),a=n(141),l=n.n(a);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return a.withPrefix}),n.d(t,"navigate",function(){return a.navigate}),n.d(t,"push",function(){return a.push}),n.d(t,"replace",function(){return a.replace}),n.d(t,"navigateTo",function(){return a.navigateTo});var u=n(143),c=n.n(u);n.d(t,"PageRenderer",function(){return c.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),h=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},145:function(e,t,n){e.exports={container:"styles-module--container--3Hst7",column:"styles-module--column--2E7Ki",columns:"styles-module--columns--29m0X",one:"styles-module--one--2dX0N",two:"styles-module--two--2taye",three:"styles-module--three--14HO7",four:"styles-module--four--WELg3",five:"styles-module--five--1x2a_",six:"styles-module--six--3POhf",seven:"styles-module--seven--1L1G_",eight:"styles-module--eight--1gLN1",nine:"styles-module--nine--2tlRv",ten:"styles-module--ten--g9SID",eleven:"styles-module--eleven--P4oyt",twelve:"styles-module--twelve--1Uqrp","one-third":"styles-module--one-third--3Ntis","two-thirds":"styles-module--two-thirds--3CyNU","one-half":"styles-module--one-half--1Tkpk","offset-by-one":"styles-module--offset-by-one--mg5RR","offset-by-two":"styles-module--offset-by-two--_CRDx","offset-by-three":"styles-module--offset-by-three--3m8gJ","offset-by-four":"styles-module--offset-by-four--3qOnO","offset-by-five":"styles-module--offset-by-five--3ZU0q","offset-by-six":"styles-module--offset-by-six--2lFAW","offset-by-seven":"styles-module--offset-by-seven--26PCM","offset-by-eight":"styles-module--offset-by-eight--rh45i","offset-by-nine":"styles-module--offset-by-nine--1_uAN","offset-by-ten":"styles-module--offset-by-ten--2EGIA","offset-by-eleven":"styles-module--offset-by-eleven--YZn4A","offset-by-one-third":"styles-module--offset-by-one-third--3kh99","offset-by-two-thirds":"styles-module--offset-by-two-thirds--KCyUN","offset-by-one-half":"styles-module--offset-by-one-half--2xE4d",row:"styles-module--row--2h1Rv"}},146:function(e,t,n){"use strict";n.r(t);n(34);var o=n(0),r=n.n(o),i=n(4),s=n.n(i),a=n(48),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(a.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},147:function(e,t,n){e.exports={list:"styles-module--list--3RVtC",circle:"styles-module--circle--JfgVZ"}},148:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){e.exports={wrapper:"styles-module--wrapper--2dWT3"}},152:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(153),s=n.n(i),a=n(4),l=n.n(a),u=(n(154),n(7)),c=n.n(u),d=n(155),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).onResize=function(){n.two.width=window.innerWidth,n.two.height=document.body.clientHeight},n.el=r.a.createRef(),n.config={circles:{count:5,radii:[100,200,400],colors:["#2b56d411"]}},n}c()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.two=new d.a({width:window.innerWidth,height:document.body.clientHeight}).appendTo(this.el.current);var t=this.two.makeGroup();this.two.add(t);for(var n=0;n<this.config.circles.count;n+=1){var o=this.two.makeCircle(1/this.config.circles.count*this.two.width*n,1/this.config.circles.count*this.two.height*n,this.config.circles.radii[n%this.config.circles.radii.length]);o.fill="#fff0",o.linewidth=2,o.stroke=this.config.circles.colors[n%this.config.circles.colors.length],t.add(o)}this.two.bind("update",function(){for(var n=0;n<t.children.length;n+=1){var o=t.children[n].getBoundingClientRect().height;t.children[n].translation.y-=o/1e3,t.children[n].translation.y<0-o/2&&(t.children[n].translation.y=e.two.height+o/2,t.children[n].translation.x=1/e.config.circles.count*e.two.width*n)}}).play(),window.addEventListener("resize",this.onResize)},n.componentWillUnmount=function(){this.two.unbind("update"),window.removeEventListener("resize",this.onResize)},n.render=function(){return r.a.createElement("div",{style:{position:"absolute",overflow:"hidden",zIndex:-1,height:"100%",top:0,left:0,bottom:0,right:0},ref:this.el})},t}(r.a.Component),h=n(144),m=n(147),y=n.n(m),p=function(){return r.a.createElement("header",{className:"u-cf u-full-width"},r.a.createElement("div",{className:"u-pull-left"},r.a.createElement(h.Link,{to:"/"},r.a.createElement("div",{className:y.a.circle}))),r.a.createElement("div",{className:"u-pull-right"},r.a.createElement("ul",{className:y.a.list},r.a.createElement("li",null,r.a.createElement(h.Link,{to:"/work"},"Work")),r.a.createElement("li",null,r.a.createElement("a",{href:"/resume.pdf"},"Résumé")))))},v=n(142),w=(n(148),n(149),n(150),n(151)),g=n.n(w),b=function(e){var t=e.children;return r.a.createElement("div",{className:g.a.wrapper},r.a.createElement(s.a,{title:"Kabir Goel",meta:[{name:"description",content:"16 year old maker from New Delhi, India."}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(f,null),r.a.createElement("main",null,r.a.createElement(v.b,null,r.a.createElement(v.c,null,r.a.createElement(v.a,{size:"six"},r.a.createElement(p,null))),t)))};b.propTypes={children:l.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-404-js-4c8d28eba6f48294f014.js.map