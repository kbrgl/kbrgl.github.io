(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(150),l=n(154),o=n(153);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement("section",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{size:"six",offset:"one"},r.a.createElement(o.a,null,"Hey there! I’m Kabir, a designer & developer from New Delhi, India."),r.a.createElement("p",null,"I’m the President of"," ",r.a.createElement("a",{className:"external",href:"https://exunclan.com"},"Exun Clan"),", the computer club at Delhi Public School, ­R.K. Puram, where I make things."),r.a.createElement("p",null,"I’m currently reading ",r.a.createElement("em",null,"The Signal and­ the Noise")," by Nate Silver and ",r.a.createElement("em",null,"Born a Crime")," by Trevor Noah."),r.a.createElement("p",null,"I’ll be heading over to Kennedy Space Center in April for the"," ",r.a.createElement("a",{className:"external",href:"https://www.conradchallenge.org"},"Conrad Challenge")," ","finals."),r.a.createElement("p",null,"You can find me on the web on"," ",r.a.createElement("a",{className:"external",href:"https://github.com/kbrgl"},"GitHub"),","," ",r.a.createElement("a",{className:"external",href:"https://open.spotify.com/user/12181834510"},"Spotify"),","," ",r.a.createElement("a",{className:"external",href:"https://codepen.io/kbrgl"},"CodePen")," ","&"," ",r.a.createElement("a",{className:"external",href:"https://twitter.com/kabirgoel"},"Twitter"),", or ",r.a.createElement("a",{href:"mailto:kabirgoel.kg@gmail.com"},"shoot me an email"),".")))))}},149:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},150:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u}),n.d(t,"c",function(){return d});var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=n(159),c=n.n(o),s=function(e){var t=e.children;return r.a.createElement("div",{className:c.a.container},t)};s.propTypes={children:l.a.node.isRequired};var u=function(e){var t=e.children,n=e.size,a=e.offset;return r.a.createElement("div",{className:c.a[n]+" "+c.a.columns+" "+(a||"zero"===a?c.a["offset-by-"+a]:"")},t)};u.propTypes={children:l.a.node.isRequired,size:l.a.oneOf(["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","one-third","two-thirds","one-half"]).isRequired,offset:l.a.oneOf(["","zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","one-third","two-thirds","one-half"])},u.defaultProps={offset:""};var d=function(e){var t=e.children;return r.a.createElement("div",{className:c.a.row},t)};d.propTypes={children:l.a.node.isRequired}},151:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=n(33),c=n.n(o);n.d(t,"a",function(){return c.a});n(149);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},152:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=n(55),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},153:function(e,t,n){"use strict";n(34);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=function(e){var t=e.children,n=e.style;return r.a.createElement("div",{style:Object.assign({marginTop:"8rem",marginBottom:"4rem"},n)},r.a.createElement("h1",null,t))};o.propTypes={children:l.a.node.isRequired,style:l.a.objectOf(l.a.oneOfType([l.a.string,l.a.number]))},o.defaultProps={style:{}},t.a=o},154:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(155),l=n.n(i),o=n(4),c=n.n(o),s=(n(156),n(7)),u=n.n(s),d=n(157),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).onResize=function(){n.two.width=window.innerWidth,n.two.height=document.body.clientHeight},n.el=r.a.createRef(),n.config={circles:{count:5,radii:[100,200,400],colors:["#2b56d411"]}},n}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.two=new d.a({width:window.innerWidth,height:document.body.clientHeight}).appendTo(this.el.current);var t=this.two.makeGroup();this.two.add(t);for(var n=0;n<this.config.circles.count;n+=1){var a=this.two.makeCircle(1/this.config.circles.count*this.two.width*n,1/this.config.circles.count*this.two.height*n,this.config.circles.radii[n%this.config.circles.radii.length]);a.fill="#fff0",a.linewidth=2,a.stroke=this.config.circles.colors[n%this.config.circles.colors.length],t.add(a)}this.two.bind("update",function(){for(var n=0;n<t.children.length;n+=1){var a=t.children[n].getBoundingClientRect().height;t.children[n].translation.y-=a/1e3,t.children[n].translation.y<0-a/2&&(t.children[n].translation.y=e.two.height+a/2,t.children[n].translation.x=1/e.config.circles.count*e.two.width*n)}}).play(),window.addEventListener("resize",this.onResize)},n.componentWillUnmount=function(){this.two.unbind("update"),window.removeEventListener("resize",this.onResize)},n.render=function(){return r.a.createElement("div",{style:{position:"absolute",overflow:"hidden",zIndex:-1,height:"100%",top:0,left:0,bottom:0,right:0},ref:this.el})},t}(r.a.Component),m=n(151),f=n(158),p=n.n(f),g=function(){return r.a.createElement("header",{className:"u-cf u-full-width "+p.a.header},r.a.createElement("div",{className:"u-pull-left"},r.a.createElement(m.a,{to:"/"},r.a.createElement("div",{className:p.a.circle}))),r.a.createElement("div",{className:"u-pull-right"},r.a.createElement("ul",{className:p.a.list},r.a.createElement("li",null,r.a.createElement(m.a,{to:"/work"},"Work")),r.a.createElement("li",null,r.a.createElement("a",{href:"/resume.pdf"},"Résumé")))))},w=n(150),v=(n(160),n(161),n(162),n(163)),E=n.n(v),b=function(e){var t=e.children;return r.a.createElement("div",{className:E.a.wrapper},r.a.createElement(l.a,{title:"Kabir Goel",meta:[{name:"description",content:"16 year old maker from New Delhi, India."},{name:"google-site-verification",content:"mYCbMoGP2dt071GwtAtMtstdSx4tkrIBffu2E2fGbOA"}],htmlAttributes:{lang:"en"}}),r.a.createElement(h,null),r.a.createElement("main",null,r.a.createElement(w.b,null,r.a.createElement(g,null),t)))};b.propTypes={children:c.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-index-js-bfc548ce8ffbfcc766d6.js.map