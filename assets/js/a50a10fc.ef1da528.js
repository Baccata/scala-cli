(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),l=a(7),i=(a(0),a(98)),c={title:"Input format",sidebar_position:3},r={unversionedId:"input",id:"input",isDocsHomePage:!1,title:"Input format",description:"The scala CLI commands accept input in a number of ways, most notably:",source:"@site/docs/input.md",sourceDirName:".",slug:"/input",permalink:"/scala-cli/docs/input",editUrl:"https://github.com/VirtuslabRnD/scala-cli/edit/master/website/docs/input.md",version:"current",sidebarPosition:3,frontMatter:{title:"Input format",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/scala-cli/docs/installation"},next:{title:"Configuration",permalink:"/scala-cli/docs/configuration"}},s=[{value:"Scala files",id:"scala-files",children:[]},{value:"Directories",id:"directories",children:[]},{value:"URLs",id:"urls",children:[]},{value:"GitHub Gist",id:"github-gist",children:[]},{value:"Piping",id:"piping",children:[]},{value:"Process substitution",id:"process-substitution",children:[]},{value:"Scripts",id:"scripts",children:[{value:"Difference with Ammonite scripts",id:"difference-with-ammonite-scripts",children:[]}]}],o={toc:s};function b(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"scala")," CLI commands accept input in a number of ways, most notably:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"as ",Object(i.b)("inlineCode",{parentName:"li"},".scala")," files"),Object(i.b)("li",{parentName:"ul"},"as one or several directories, containing Scala sources"),Object(i.b)("li",{parentName:"ul"},"as URLs, pointing to Scala sources"),Object(i.b)("li",{parentName:"ul"},"by piping or process substitution")),Object(i.b)("p",null,"Note that it accepts two kinds of Scala sources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"standard ",Object(i.b)("inlineCode",{parentName:"li"},".scala")," files"),Object(i.b)("li",{parentName:"ul"},"scripts, ending in ",Object(i.b)("inlineCode",{parentName:"li"},".sc"),", accepting any kind of top-level statement")),Object(i.b)("p",null,"Java sources are also accepted."),Object(i.b)("p",null,"Lastly, note that all these input formats can used alongside each other."),Object(i.b)("h2",{id:"scala-files"},"Scala files"),Object(i.b)("p",null,"This is the simplest input format. Just write a ",Object(i.b)("inlineCode",{parentName:"p"},".scala")," file, and pass it to\n",Object(i.b)("inlineCode",{parentName:"p"},"scala")," to run it:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Hello.scala"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-scala"},'object Hello {\n  def main(args: Array[String]): Unit =\n    println("Hello from Scala")\n}\n')),Object(i.b)("p",null,"Run it with"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"$ scala Hello.scala\nHello from Scala\n")),Object(i.b)("p",null,"You can also split your code in multiple files, and pass all of them to ",Object(i.b)("inlineCode",{parentName:"p"},"scala"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Messages.scala"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-scala"},'object Messages {\n  def hello = "Hello from Scala"\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Hello.scala"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-scala"},"object Hello {\n  def main(args: Array[String]): Unit =\n    println(Messages.hello)\n}\n")),Object(i.b)("p",null,"Run them with"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"$ scala Hello.scala Messages.scala\nHello from Scala\n")),Object(i.b)("p",null,"Passing many files this way can be cumbersome. Directories can help."),Object(i.b)("h2",{id:"directories"},"Directories"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"scala")," accepts whole directories as input. This is convenient when you have many\n",Object(i.b)("inlineCode",{parentName:"p"},".scala")," files, and passing them all one-by-one on the command line isn't practical:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"my-app/Messages.scala"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-scala"},'object Messages {\n  def hello = "Hello from Scala"\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"my-app/Hello.scala"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-scala"},"object Hello {\n  def main(args: Array[String]): Unit =\n    println(Messages.hello)\n}\n")),Object(i.b)("p",null,"Run them with"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"$ scala my-app\nHello from Scala\n")),Object(i.b)("h2",{id:"urls"},"URLs"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"scala"),"\x1b accepts input via URLs pointing at ",Object(i.b)("inlineCode",{parentName:"p"},".scala")," files.\nIt'll download and cache their content, and run them."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"$ scala https://gist.github.com/alexarchambault/f972d941bc4a502d70267cfbbc4d6343/raw/2691c01984c9249936a625a42e29a822a357b0f6/Test.scala\nHello from Scala GitHub Gist\n")),Object(i.b)("h2",{id:"github-gist"},"GitHub Gist"),Object(i.b)("p",null,"TODO"),Object(i.b)("h2",{id:"piping"},"Piping"),Object(i.b)("p",null,"You can just pipe Scala code to ",Object(i.b)("inlineCode",{parentName:"p"},"scala")," for execution:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"$ echo 'println(\"Hello\")' | scala -\nHello\n")),Object(i.b)("h2",{id:"process-substitution"},"Process substitution"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"scala")," accepts input via shell process substitution:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"$ scala <(echo 'println(\"Hello\")')\nHello\n")),Object(i.b)("h2",{id:"scripts"},"Scripts"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"scala")," accept Scala scripts, ending in ",Object(i.b)("inlineCode",{parentName:"p"},".sc"),". Unlike ",Object(i.b)("inlineCode",{parentName:"p"},".scala")," files,\nany kind of statement is accepted at the top-level:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hello.sc"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-scala"},'val message = "Hello from Scala script"\nprintln(message)\n')),Object(i.b)("p",null,"Run it with"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"$ scala hello.sc\nHello from Scala script\n")),Object(i.b)("p",null,"In more detail, such a script is wrapped in an ",Object(i.b)("inlineCode",{parentName:"p"},"object")," before being passed to\nthe Scala compiler, and a ",Object(i.b)("inlineCode",{parentName:"p"},"main")," class is added to it. ",Object(i.b)("inlineCode",{parentName:"p"},"hello.sc")," is passed as"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-scala"},'object hello {\n  val message = "Hello from Scala script"\n  println(message)\n\n  def main(args: Array[String]): Unit = ()\n}\n')),Object(i.b)("p",null,"(reformated for clarity)\nThe name ",Object(i.b)("inlineCode",{parentName:"p"},"hello")," comes straight from the file name ",Object(i.b)("inlineCode",{parentName:"p"},"hello.sc"),"."),Object(i.b)("p",null,"When a script is in a sub-directory of a directory passed to ",Object(i.b)("inlineCode",{parentName:"p"},"scala"),", a package is inferred too:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"my-app/constants/messages.sc"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-scala"},'def hello = "Hello from Scala scripts"\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"my-app/main.sc"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import constants.messages\nprintln(messages.hello)\n")),Object(i.b)("p",null,"Run them with"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"$ scala my-app --main-class main\nHello from Scala scripts\n")),Object(i.b)("p",null,"Note that we pass an explicit main class. Both scripts automatically get a main class, so this\nis required to disambiguate them."),Object(i.b)("h3",{id:"difference-with-ammonite-scripts"},"Difference with Ammonite scripts"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://ammonite.io"},"Ammonite")," is a popular REPL for Scala, that is also able to compile and run\n",Object(i.b)("inlineCode",{parentName:"p"},".sc")," files."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"scala")," and Ammonite differ significantly when your code is split in multiple scripts:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"in Ammonite, a script needs to use ",Object(i.b)("inlineCode",{parentName:"li"},"import $file")," directives to use values defined in another script"),Object(i.b)("li",{parentName:"ul"},"with ",Object(i.b)("inlineCode",{parentName:"li"},"scala"),", all scripts passed can reference each other, without such directives")),Object(i.b)("p",null,"On the other hand,"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'you can pass a single "entry point" script as input to Ammonite, and Ammonite finds the scripts\nit depends on via the ',Object(i.b)("inlineCode",{parentName:"li"},"import $file")," directives"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"scala")," requires all scripts to be passed beforehand, either one-by-one, or by putting them in a\ndirectory, and passing the directory to ",Object(i.b)("inlineCode",{parentName:"li"},"scala"))))}b.isMDXComponent=!0},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),l=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createContext({}),b=function(e){var t=l.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=b(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return a?l.a.createElement(d,r(r({ref:t},o),{},{components:a})):l.a.createElement(d,r({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var o=2;o<i;o++)c[o]=a[o];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);