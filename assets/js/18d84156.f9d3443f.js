"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9423],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(o),u=n,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return o?r.createElement(h,a(a({ref:t},p),{},{components:o})):r.createElement(h,a({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<l;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2108:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const l={sidebar_position:1},a="6.1 Hello World",i={unversionedId:"c/hello_world",id:"c/hello_world",title:"6.1 Hello World",description:"This chapter will take Hello World as an example to show how to compile a C program to Wasm bytecode and run in WasmEdge.",source:"@site/docs/c/hello_world.md",sourceDirName:"c",slug:"/c/hello_world",permalink:"/book/docs/c/hello_world",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/c/hello_world.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Develop Wasm Apps in C/C++",permalink:"/book/docs/category/develop-wasm-apps-in-cc"},next:{title:"6.2 Networking Socket",permalink:"/book/docs/c/networking"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Compile the C code into Wasm",id:"compile-the-c-code-into-wasm",level:2},{value:"Run in WasmEdge",id:"run-in-wasmedge",level:2},{value:"AoT mode",id:"aot-mode",level:2}],p={toc:c};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"61-hello-world"},"6.1 Hello World"),(0,n.kt)("p",null,"This chapter will take Hello World as an example to show how to compile a C program to Wasm bytecode and run in WasmEdge."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Before we started, make sure you have installed the following software:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/book/docs/quick-start/install"},"Install WasmEdge"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Emscripten, a toolchain for compiling C/C++ to WebAssembly. Please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/emscripten-core/emsdk"},"emcc official repository")," for the detailed instructions."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --depth 1 https://github.com/emscripten-core/emsdk.git\ncd emsdk\n./emsdk install latest\n./emsdk activate latest\nsource ./emsdk_env.sh\n")),(0,n.kt)("h2",{id:"compile-the-c-code-into-wasm"},"Compile the C code into Wasm"),(0,n.kt)("p",null,"The Hello world example is simple, and save the program to a file called hello.c."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'#include <stdio.h>\n\nint main(void) {\n    printf("Hello, world!\\n");\n    return 0;\n}\n')),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"emcc")," to compile the C code into Wasm. This will generate a file called hello.wasm which contains the WASI bytecode for the program."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"emcc hello.c -o hello.wasm\n")),(0,n.kt)("h2",{id:"run-in-wasmedge"},"Run in WasmEdge"),(0,n.kt)("p",null,"Run the compiled wasm with WasmEdge CLI and you will get the hello workd output."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ wasmedge hello.wasm\nHello, world!\n")),(0,n.kt)("h2",{id:"aot-mode"},"AoT mode"),(0,n.kt)("p",null,"With WasmEdge's AoT compiler, you will get higher performance."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Compile the wasm file with wasmedge aot compiler\n$ wasmedgec hello.wasm hello.wasm\n# Run the native binary with wasmedge\n$ wasmedge hello.wasm\n")))}m.isMDXComponent=!0}}]);