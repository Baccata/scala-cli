(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(98)),o={title:"Configuration",sidebar_position:4},c={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"scala can be configured in several ways:",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/scala-cli/docs/configuration",editUrl:"https://github.com/VirtuslabRnD/scala-cli/edit/master/website/docs/configuration.md",version:"current",sidebarPosition:4,frontMatter:{title:"Configuration",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Input format",permalink:"/scala-cli/docs/input"},next:{title:"Compile",permalink:"/scala-cli/docs/compile"}},l=[{value:"Command-line",id:"command-line",children:[]},{value:"In <code>.scala</code> files",id:"in-scala-files",children:[]},{value:"Configuration files",id:"configuration-files",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"scala")," can be configured in several ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"on the command-line"),Object(r.b)("li",{parentName:"ul"},"in a configuration file"),Object(r.b)("li",{parentName:"ul"},"some options can also be specified directly in ",Object(r.b)("inlineCode",{parentName:"li"},".scala")," and ",Object(r.b)("inlineCode",{parentName:"li"},".sc")," files")),Object(r.b)("p",null,"Note that the configuration format and options in ",Object(r.b)("inlineCode",{parentName:"p"},".scala")," files are likely\nto evolve and be unified in the near future."),Object(r.b)("h2",{id:"command-line"},"Command-line"),Object(r.b)("p",null,"Pass ",Object(r.b)("inlineCode",{parentName:"p"},"--help")," to any sub-command of ",Object(r.b)("inlineCode",{parentName:"p"},"scala")," to list its options:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"$ scala --help\n$ scala package --help\n")),Object(r.b)("h2",{id:"in-scala-files"},"In ",Object(r.b)("inlineCode",{parentName:"h2"},".scala")," files"),Object(r.b)("p",null,"Dependencies can be added right from ",Object(r.b)("inlineCode",{parentName:"p"},".scala")," and ",Object(r.b)("inlineCode",{parentName:"p"},".sc")," files, using the same\nsyntax as Ammonite and Metals worksheets:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"import $ivy.`com.lihaoyi::upickle:1.4.0`\nimport ujson._\n")),Object(r.b)("h2",{id:"configuration-files"},"Configuration files"),Object(r.b)("p",null,"Pass a file named ",Object(r.b)("inlineCode",{parentName:"p"},"scala.conf"),", or ending in ",Object(r.b)("inlineCode",{parentName:"p"},".scala.conf"),", to specify options\nvia a ",Object(r.b)("a",{parentName:"p",href:"https://github.com/lightbend/config"},"HOCON")," configuration file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-hocon"},'scala {\n  version = "2.13"\n  options = [\n    "-Xlint:infer-any"\n  ]\n}\njvm = "14"\nrepositories = [\n  "https://s01.oss.sonatype.org/content/repositories/snapshots"\n]\ndependencies = [\n  "ai.kien::python-native-libs:0.0.0+13-f5d7089a-SNAPSHOT"\n]\n')))}p.isMDXComponent=!0},98:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,d=u["".concat(o,".").concat(f)]||u[f]||b[f]||r;return t?i.a.createElement(d,c(c({ref:n},s),{},{components:t})):i.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);