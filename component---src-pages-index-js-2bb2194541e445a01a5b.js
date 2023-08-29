"use strict";(self.webpackChunkinteo_gatsby_template=self.webpackChunkinteo_gatsby_template||[]).push([[678],{7059:function(e,t,a){a.d(t,{G:function(){return L},L:function(){return f},M:function(){return v},P:function(){return N},_:function(){return s},a:function(){return i},b:function(){return d},c:function(){return o},g:function(){return m},h:function(){return c}});var n=a(7294),l=(a(2369),a(5697)),r=a.n(l);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t.indexOf(a=r[n])>=0||(l[a]=e[a]);return l}var c=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var o=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a,n,l){return void 0===l&&(l={}),i({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},l,{opacity:t?1:0})})}function m(e,t,a,n,l,r,s,c){var o={};r&&(o.backgroundColor=r,"fixed"===a?(o.width=n,o.height=l,o.backgroundColor=r,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),s&&(o.objectFit=s),c&&(o.objectPosition=c);var d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return d}var u,g=["children"],p=function(e){var t=e.layout,a=e.width,l=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:l/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+l+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,a=s(e,g);return n.createElement(n.Fragment,null,n.createElement(p,i({},a)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],E=function(e){var t=e.src,a=e.srcSet,l=e.loading,r=e.alt,c=void 0===r?"":r,o=e.shouldLoad,d=s(e,y);return n.createElement("img",i({},d,{decoding:"async",loading:l,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:c}))},M=function(e){var t=e.fallback,a=e.sources,l=void 0===a?[]:a,r=e.shouldLoad,c=void 0===r||r,o=s(e,h),d=o.sizes||(null==t?void 0:t.sizes),m=n.createElement(E,i({},o,t,{sizes:d,shouldLoad:c}));return l.length?n.createElement("picture",null,l.map((function(e){var t=e.media,a=e.srcSet,l=e.type;return n.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,sizes:d})})),m):m};E.propTypes={src:l.string.isRequired,alt:l.string.isRequired,sizes:l.string,srcSet:l.string,shouldLoad:l.bool},M.displayName="Picture",M.propTypes={alt:l.string.isRequired,shouldLoad:l.bool,fallback:l.exact({src:l.string.isRequired,srcSet:l.string,sizes:l.string}),sources:l.arrayOf(l.oneOfType([l.exact({media:l.string.isRequired,type:l.string,sizes:l.string,srcSet:l.string.isRequired}),l.exact({media:l.string,type:l.string.isRequired,sizes:l.string,srcSet:l.string.isRequired})]))};var x=["fallback"],N=function(e){var t=e.fallback,a=s(e,x);return t?n.createElement(M,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},a))};N.displayName="Placeholder",N.propTypes={fallback:l.string,sources:null==(u=M.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var v=function(e){return n.createElement(n.Fragment,null,n.createElement(M,i({},e)),n.createElement("noscript",null,n.createElement(M,i({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=M.propTypes;var b,I,w=function(e,t,a){for(var n=arguments.length,l=new Array(n>3?n-3:0),i=3;i<n;i++)l[i-3]=arguments[i];return e.alt||""===e.alt?r().string.apply(r(),[e,t,a].concat(l)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},z={image:r().object.isRequired,alt:w},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],D=new Set,k=function(e){var t=e.as,l=void 0===t?"div":t,r=e.image,o=e.style,d=e.backgroundColor,m=e.className,u=e.class,g=e.onStartLoad,p=e.onLoad,f=e.onError,y=s(e,T),h=r.width,E=r.height,M=r.layout,x=function(e,t,a){var n={},l="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(l="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:l,"data-gatsby-image-wrapper":"",style:n}}(h,E,M),N=x.style,v=x.className,w=s(x,j),z=(0,n.useRef)(),k=(0,n.useMemo)((function(){return JSON.stringify(r.images)}),[r.images]);u&&(m=u);var L=function(e,t,a){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(M,h,E);return(0,n.useEffect)((function(){b||(b=Promise.all([a.e(774),a.e(680)]).then(a.bind(a,8680)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return I=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,n=z.current.querySelector("[data-gatsby-image-ssr]");return n&&c()?(n.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void D.add(k)):I&&D.has(k)?void 0:(b.then((function(a){var n=a.renderImageToString,l=a.swapPlaceholderImage;z.current&&(z.current.innerHTML=n(i({isLoading:!0,isLoaded:D.has(k),image:r},y)),D.has(k)||(e=requestAnimationFrame((function(){z.current&&(t=l(z.current,k,D,o,g,p,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[r]),(0,n.useLayoutEffect)((function(){D.has(k)&&I&&(z.current.innerHTML=I(i({isLoading:D.has(k),isLoaded:D.has(k),image:r},y)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,n.createElement)(l,i({},w,{style:i({},N,o,{backgroundColor:d}),className:v+(m?" "+m:""),ref:z,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},L=(0,n.memo)((function(e){return e.image?(0,n.createElement)(k,e):null}));L.propTypes=z,L.displayName="GatsbyImage";var C,W=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],Z=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),l=2;l<a;l++)n[l-2]=arguments[l];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),S={src:r().string.isRequired,alt:w,width:Z,height:Z,sizes:r().string,layout:function(e){if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},O=(C=L,function(e){var t=e.src,a=e.__imageData,l=e.__error,r=s(e,W);return l&&console.warn(l),a?n.createElement(C,i({image:a},r)):(console.warn("Image not loaded",t),null)});O.displayName="StaticImage",O.propTypes=S},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,n=!1,l=0;l<e.length;l++){var r=e[l];t&&/[a-zA-Z]/.test(r)&&r.toUpperCase()===r?(e=e.slice(0,l)+"-"+e.slice(l),t=!1,n=a,a=!0,l++):a&&n&&/[a-zA-Z]/.test(r)&&r.toLowerCase()===r?(e=e.slice(0,l-1)+"-"+e.slice(l-1),n=a,a=!1,t=!0):(t=r.toLowerCase()===r&&r.toUpperCase()!==r,n=a,a=r.toUpperCase()===r&&r.toLowerCase()!==r)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},6308:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var n=a(7294),l=a(8396),r=a(9956),i=a(1597),s=(a.p,a.p+"static/kwd-video3-f70fe4a02005d1edbfe06af42cb3f025.mp4"),c=function(){(0,i.useStaticQuery)("3592878757");return n.createElement("div",null,n.createElement("div",{className:"relative"},n.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"w-full object-cover h-full"},n.createElement("source",{src:s,type:"video/mp4"}))))},o=function(){return n.createElement("div",null,n.createElement("div",{className:"container mx-auto"},n.createElement("div",{className:"flex flex-col"},n.createElement("div",{className:"grid md:grid-cols-12 grid-cols-1 gap-8"},n.createElement("div",{className:"md:col-span-4 flex xl:flex-row md:flex-col flex-row xl:gap-4 md:gap-0 gap-4 xl:items-center md:items-start items-center"},n.createElement("p",{className:"font-display md:text-display-xl text-display-lg font-normal"},"100%"),n.createElement("p",{className:"text-body-sm font-normal tracking-wider pt-2"},"ZUFRIEDENE ",n.createElement("br",null),"KUNDEN")),n.createElement("div",{className:"md:col-span-4 flex xl:flex-row md:flex-col flex-row xl:gap-4 md:gap-0 gap-4 xl:items-center md:items-start items-center"},n.createElement("p",{className:"font-display md:text-display-xl text-display-lg font-normal"},"24"),n.createElement("p",{className:"text-body-sm font-normal tracking-wider pt-2"},"MIT HERZ ",n.createElement("br",null),"ABGESCHLOSSENE PROJEKTE"))),n.createElement("div",{className:"md:mt-20 md:pb-12 mt-12 pb-12"},n.createElement("hr",{className:"text-neutral-300"})))))},d="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyIDZIMjFWMTJIOVYyNEg2VjQySDlWMjdIMjFWNDJIMjRWOUgzOVY0Mkg0MlY2Wk0xMiAxNUgyMVYyNEgxMlYxNVpNMTIgMzBWMzNIMThWMzBIMTJaTTE1IDE4SDE4VjIxSDE1VjE4Wk0zMCAxOEgyN1YyMUgzMFYxOFpNMjcgMzBIMzBWMzNIMjdWMzBaTTMwIDM2SDI3VjM5SDMwVjM2Wk0yNyAxMkgzMFYxNUgyN1YxMlpNMzAgMjRIMjdWMjdIMzBWMjRaTTMzIDEySDM2VjE1SDMzVjEyWk0zNiAyNEgzM1YyN0gzNlYyNFpNMzMgMThIMzZWMjFIMzNWMThaTTM2IDMwSDMzVjMzSDM2VjMwWk0zMyAzNkgzNlYzOUgzM1YzNlpNMTggMzlWMzZIMTJWMzlIMThaIiBzdHlsZT0iZmlsbDogcmdiKDcxLCA1NiwgMzUpOyIvPgo8L3N2Zz4=",m="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYgNkgxOC4zODI1TDI5LjcxODMgMTIuMTgzMkwyOC4yODE3IDE0LjgxNjhMMTcuNjE3NSA5SDlWMzlIMjFWMjdIMTVWMjRIMjdWMjdIMjRWMzlIMzlWMjdIMzNWMjRIMzlWOUgzMFY2SDQyVjQySDZWNloiIHN0eWxlPSJmaWxsOiByZ2IoNzEsIDU2LCAzNSk7Ii8+Cjwvc3ZnPg==",u="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMxLjkxMzggMzguMDMzOEw0MS44NCAzTDcuNDAzMzIgMTMuMjE0M0wxNi4wNTc0IDIyLjQ4NjVMMTguMjUwNSAyMC40Mzk1TDEyLjkwNDYgMTQuNzExN0wzNy40Njc5IDcuNDI2TDMwLjM5NDEgMzIuMzkyMkwyNC42OTY1IDI2Ljg4NDVMMjIuNjExNCAyOS4wNDE1TDMxLjkxMzggMzguMDMzOFpNMTMuMTg1NiAyNS44NzMzTDE1LjE1MzkgMjcuODQxN0wyNC41OTMzIDE4LjQwMjNMMjYuNzE0NiAyMC41MjM3TDE3LjI3NTMgMjkuOTYzTDE5LjI0MzYgMzEuOTMxNEw5LjE4NjU4IDQyLjYxN0wyLjUgMzUuOTMwNEwxMy4xODU2IDI1Ljg3MzNaTTEzLjEyMjMgMzAuMDUyN0w2LjgwNzkgMzUuOTk1Nkw5LjEyMTMyIDM4LjMwOTFMMTUuMDY0MyAzMS45OTQ3TDEzLjEyMjMgMzAuMDUyN1oiIHN0eWxlPSJmaWxsOiByZ2IoNzEsIDU2LCAzNSk7Ii8+Cjwvc3ZnPg==",g=function(e){var t=e.label;return n.createElement("div",{className:"flex flex-row items-center opacity-80"},n.createElement("hr",{className:"w-16 text-primary-600"}),n.createElement("p",{className:"text-body-sm font-semibold tracking-widest text-primary-600 pl-4"},t))},p=function(e){var t=e.icon,a=e.title,l=e.description;return n.createElement("div",{className:"flex flex-col md:gap-20 gap-6 md:p-10 p-8 border border-primary-100"},n.createElement("img",{src:t,width:48,height:48,alt:a}),n.createElement("div",{className:"flex flex-col gap-4"},n.createElement("p",{className:"font-display md:text-display-md text-display-sm font-normal"},a),n.createElement("p",{className:"text-body-lg font-light text-neutral-700"},l)))},f=function(){return n.createElement("div",{id:"#services"},n.createElement("div",{className:"container mx-auto"},n.createElement("div",{className:"flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12"},n.createElement("div",{className:"grid lg:grid-cols-12 grid-cols-1 gap-8"},n.createElement("div",{className:"lg:col-span-12 flex flex-col gap-12"},n.createElement(g,{label:"LEISTUNGEN"}),n.createElement("h2",{className:"font-display md:text-display-xl text-display-md pt-5"},"Die Kombination aus Tradition und Vision"),n.createElement("p",{className:"md:text-body-lg text-body-md font-light text-neutral-700 font-bold"},"Unsere Leistungen resultieren nicht aus Glück."),n.createElement("p",{className:"md:text-body-lg text-body-md font-light text-neutral-700"},"Die Fähigkeit, mit der Zeit Schritt zu halten, ein hohes Maß an Professionalität und Menschlichkeit sowie die Freude an unserer Arbeit sind die Grundlagen, die uns zu einem kompetenten Partner für Ihr individuelles Wohnprojekt machen."))),n.createElement("div",{className:"flex lg:flex-row flex-col gap-8"},n.createElement(p,{icon:d,title:"Einschätzen der Bedürfnisse",description:"Als Grundlage für die Konzeptentwicklung klären wir gemeinsam Ihre individuelle Lebens- und Wohnsituation und nehmen alle Ihre Wünsche auf"}),n.createElement(p,{icon:m,title:"Individuelle Planung",description:"Planung ist Vertrauensache, dadurch ist es uns umso wichtiger den persönlichen Kontakt mit Ihnen aufzubauen und ein auf Ihre Bedürfnisse abgestimmtes Konzept zu entwickeln"}),n.createElement(p,{icon:u,title:"Kreative Lösungen",description:"Unter Kreativität verstehen wir die Entwicklung einer Lösung ohne uns von vorgefertigten Denkmustern einschränken zu lassen"})),n.createElement("div",{className:"flex lg:flex-row flex-col gap-8"},n.createElement(p,{icon:d,title:"Nachhaltige Produktion",description:"Bei der Auswahl der Materalien legen wir besonderes Augenmerk auf Regionalität und Nachhaltigkeit. Für jedes abgeschlossene Projekt pflanzen wir einen Baum mit Ihrem Namen auf unserem Bergbauernhof"}),n.createElement(p,{icon:m,title:"Fachgerechte Montage",description:"Ein Projekt ist für uns erst dann abgeschlossen, wenn wir mit einer fachgerechten Montage aus Meisterhand alle Ihre Wünsche zu Ihrer Zufriedenheit erledigen konnten"}),n.createElement(p,{icon:u,title:"Gebaut fürs Leben",description:"Bei unseren Konzepten achten wir besonders auf den Einklang von kreativem Design und langjähriger Alltagstauglichkeit"})))))},y=function(e){var t=e.logo,a=e.title,l=e.year;return n.createElement("div",{className:"flex flex-row gap-3 items-center grow"},n.createElement("img",{src:t,width:80,height:80,alt:a}),n.createElement("div",{className:"flex flex-col"},n.createElement("p",{className:"text-body-sm font-normal text-neutral-300"},a),n.createElement("p",{className:"text-body-sm font-normal text-neutral-300"},l)))},h=function(){var e=(0,i.useStaticQuery)("1341028260");return n.createElement("div",{className:"bg-neutral-900"},n.createElement("div",{className:"container mx-auto"},n.createElement("div",{className:"flex flex-row md:items-center items-start self-auto gap-5 py-6"},n.createElement("div",{className:"flex flex-row items-center self-auto md:gap-5 gap-2"},n.createElement("p",{className:"font-display text-display-xs italic text-white opacity-50 vertical-rl -rotate-180"},"Mission"),n.createElement("hr",{className:"md:w-16 w-6  text-white opacity-50"})),n.createElement("div",{className:"lg:flex lg:flex-row grid md:grid-cols-2 grid-cols-1 grow xl:gap-16  md:gap-x-10 md:gap-y-8 gap-6"},e.allAwardsJson.nodes.map((function(e){return n.createElement(y,{key:e.id,logo:e.logo.publicURL,title:e.title,year:e.year})}))))))},E=a(7059),M=a.p+"static/award-badge-9498f7b83aee8306fb4010ceb8f18f28.svg",x=function(){var e=(0,i.useStaticQuery)("1462243822");return n.createElement("div",{id:"#about"},n.createElement("div",{className:"container mx-auto"},n.createElement("div",{className:"grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-20 lg:py-32 py-12 items-center"},n.createElement("div",{className:"lg:col-span-6 flex flex-col gap-6"},n.createElement(g,{label:"WILLKOMMEN BEI:"}),n.createElement("h2",{className:"font-display md:text-display-xl text-display-md font-normal pb-4"},"Küchen- und Wohdesign Wieland"),n.createElement("p",{className:"md:text-body-lg text-body-md font-light text-neutral-700 font-bold"},"Innenarchitektur aus Tischlerhand"),n.createElement("p",{className:"md:text-body-lg text-body-md font-light text-neutral-700"},"Verankert in der Tradion des Tischlerhandwerks und individuell auf aktuelle und zukünftige Bedüfnisse ausgerichtet")),n.createElement("div",{className:"lg:col-span-6 flex flex-col gap-8 relative"},n.createElement(E.G,{image:(0,E.c)(e.aboutimage),alt:"Interior Design"}),n.createElement("img",{src:M,alt:"Award Badge",className:"absolute left-[2%] -top-14"})))))},N=function(e){var t=e.image,a=e.title,l=e.description;return n.createElement("div",{className:"flex basis-1/2 flex-col"},n.createElement(E.G,{image:t,alt:a}),n.createElement("div",{className:"flex flex-col self-stretch pt-6"},n.createElement("h3",{className:"font-display text-display-md pb-4"},a),n.createElement("p",{className:"text-body-lg font-light text-neutral-700"},l)))},v=a(4752),b=function(){var e=(0,i.useStaticQuery)("1650173251");return n.createElement("div",{id:"#works"},n.createElement("div",{className:"container mx-auto"},n.createElement("div",{className:"flex flex-col gap-12 lg:py-28 md:py-24 py-12"},n.createElement("div",{className:"grid xl:grid-cols-12 grid-cols-1 xl:gap-8 gap-10 items-center"},n.createElement("div",{className:"xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10"},n.createElement("div",{className:"flex flex-col gap-6"},n.createElement(g,{label:"UNSERE ARBEIT"}),n.createElement("h3",{className:"font-display md:text-display-xl text-display-md font-normal pb-4"},"Einige",n.createElement("span",{className:"italic"},"unserer Projekte")," mit Liebe gemacht")),e.allWorksJson.nodes.slice(0,1).map((function(e){return n.createElement(N,{key:e.id,image:(0,E.c)(e.image),title:e.title,description:e.description})})),n.createElement("div",{className:"xl:flex hidden items-start"},n.createElement(v.Z,{label:"KONTAKTIEREN",link:"/",size:"lg"}))),n.createElement("div",{className:"xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10 xl:px-14"},e.allWorksJson.nodes.slice(1,3).map((function(e){return n.createElement(N,{key:e.id,image:(0,E.c)(e.image),title:e.title,description:e.description})})))),n.createElement("div",{className:"xl:hidden flex items-start"},n.createElement(v.Z,{label:"KONTAKTIEREN",link:"/",size:"lg"})))))},I=function(){return n.createElement(r.Z,null,n.createElement(l.Z,null),n.createElement(c,null),n.createElement(h,null),n.createElement(x,null),n.createElement(o,null),n.createElement(f,null),n.createElement(b,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-2bb2194541e445a01a5b.js.map