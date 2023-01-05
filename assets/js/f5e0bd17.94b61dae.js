"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(b,s(s({ref:t},u),{},{components:n})):a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},s="8.2 Deploy with crun",i={unversionedId:"deploy/crun",id:"deploy/crun",title:"8.2 Deploy with crun",description:"The crun project has WasmEdge support baked in. This chapter will walk you through deploying Wasm images with crun.",source:"@site/docs/deploy/crun.md",sourceDirName:"deploy",slug:"/deploy/crun",permalink:"/book/docs/deploy/crun",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/deploy/crun.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"8.2 Deploy with containerd",permalink:"/book/docs/deploy/containerd"},next:{title:"8.3 Deploy with youki",permalink:"/book/docs/deploy/youki"}},l={},c=[{value:"Quick start",id:"quick-start",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure CRI-O to use crun",id:"configure-cri-o-to-use-crun",level:2},{value:"Run a simple WebAssembly app",id:"run-a-simple-webassembly-app",level:2},{value:"Run a HTTP server app",id:"run-a-http-server-app",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"82-deploy-with-crun"},"8.2 Deploy with crun"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/crun"},"crun project")," has WasmEdge support baked in. This chapter will walk you through deploying Wasm images with crun."),(0,r.kt)("h2",{id:"quick-start"},"Quick start"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples/"},"GitHub repo")," contains scripts and Github Actions for running our example apps on CRI-O."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Simple WebAssembly example ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/crio/README.md"},"Quick start")," | ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/.github/workflows/crio.yml"},"Github Actions")),(0,r.kt)("li",{parentName:"ul"},"HTTP service example ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/crio/http_server/README.md"},"Quick start")," | ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/.github/workflows/crio-server.yml"},"Github Actions"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Build and configure crun with WasmEdge support")),(0,r.kt)("p",null,"For now, the easiest approach is just built it yourself from source. First, let's make sure that ",(0,r.kt)("inlineCode",{parentName:"p"},"crun")," dependencies are installed on your Ubuntu 20.04.\nFor other Linux distributions, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/crun#readme"},"see here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install -y make git gcc build-essential pkgconf libtool \\\n    libsystemd-dev libprotobuf-c-dev libcap-dev libseccomp-dev libyajl-dev \\\n    go-md2man libtool autoconf python3 automake\n")),(0,r.kt)("p",null,"Next, configure, build, and install a ",(0,r.kt)("inlineCode",{parentName:"p"},"crun")," binary with WasmEdge support."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/containers/crun\ncd crun\n./autogen.sh\n./configure --with-wasmedge\nmake\nsudo make install\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/book/docs/quick-start/install"},"Install WasmEdge"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Install and configure CRI-O ")),(0,r.kt)("p",null,"Use the following commands to install CRI-O on your system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export OS="xUbuntu_20.04"\nexport VERSION="1.21"\napt update\napt install -y libseccomp2 || sudo apt update -y libseccomp2\necho "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/ /" > /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list\necho "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable:/cri-o:/$VERSION/$OS/ /" > /etc/apt/sources.list.d/devel:kubic:libcontainers:stable:cri-o:$VERSION.list\n\ncurl -L https://download.opensuse.org/repositories/devel:kubic:libcontainers:stable:cri-o:$VERSION/$OS/Release.key | apt-key add -\ncurl -L https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/Release.key | apt-key add -\n\napt-get update\napt-get install criu libyajl2\napt-get install cri-o cri-o-runc cri-tools containernetworking-plugins\nsystemctl start crio\n')),(0,r.kt)("h2",{id:"configure-cri-o-to-use-crun"},"Configure CRI-O to use crun"),(0,r.kt)("p",null,"CRI-O uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"runc")," runtime by default and we need to configure it to use ",(0,r.kt)("inlineCode",{parentName:"p"},"crun")," instead.\nThat is done by adding to two configuration files."),(0,r.kt)("p",null,"First, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/crio/crio.conf")," file and add the following lines as its content. It tells CRI-O to use ",(0,r.kt)("inlineCode",{parentName:"p"},"crun")," by default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'[crio.runtime]\ndefault_runtime = "crun"\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"crun")," runtime is in turn defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/crio/crio.conf.d/01-crio-runc.conf")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'[crio.runtime.runtimes.runc]\nruntime_path = "/usr/lib/cri-o-runc/sbin/runc"\nruntime_type = "oci"\nruntime_root = "/run/runc"\n# The above is the original content\n\n# Add crun here\n[crio.runtime.runtimes.crun]\nruntime_path = "/usr/bin/crun"\nruntime_type = "oci"\nruntime_root = "/run/crun"\n')),(0,r.kt)("p",null,"Next, restart CRI-O to apply the configuration changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart crio\n")),(0,r.kt)("h2",{id:"run-a-simple-webassembly-app"},"Run a simple WebAssembly app"),(0,r.kt)("p",null,"Now, we can run a simple WebAssembly program using CRI-O. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/simple_wasi_app.md"},"A separate article")," explains how to compile, package, and publish the WebAssembly program as a container image to Docker hub."),(0,r.kt)("p",null,"In this section, we will start off pulling this WebAssembly-based container image from Docker hub using CRI-O tools."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo crictl pull docker.io/hydai/wasm-wasi-example:with-wasm-annotation\n")),(0,r.kt)("p",null,"Next, we need to create two simple configuration files that specifies how CRI-O should run this WebAssembly image in a sandbox. We already have those two files ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/crio/container_wasi.json"},"container_wasi.json")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/crio/sandbox_config.json"},"sandbox_config.json"),". You can just download them to your local directory as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/second-state/wasmedge-containers-examples/main/crio/sandbox_config.json\nwget https://raw.githubusercontent.com/second-state/wasmedge-containers-examples/main/crio/container_wasi.json\n")),(0,r.kt)("p",null,"Now you can use CRI-O to create a pod and a container using the specified configurations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Create the POD. Output will be different from example.\n$ sudo crictl runp sandbox_config.json\n7992e75df00cc1cf4bff8bff660718139e3ad973c7180baceb9c84d074b516a4\n# Set a helper variable for later use.\n$ POD_ID=7992e75df00cc1cf4bff8bff660718139e3ad973c7180baceb9c84d074b516a4\n\n# Create the container instance. Output will be different from example.\n$ sudo crictl create $POD_ID container_wasi.json sandbox_config.json\n# Set a helper variable for later use.\nCONTAINER_ID=1d056e4a8a168f0c76af122d42c98510670255b16242e81f8e8bce8bd3a4476f\n")),(0,r.kt)("p",null,"Starting the container would execute the WebAssembly program. You can see the output in the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# List the container, the state should be `Created`\n$ sudo crictl ps -a\nCONTAINER           IMAGE                                          CREATED              STATE               NAME                     ATTEMPT             POD ID\n1d056e4a8a168       wasmedge/example-wasi:latest                   About a minute ago   Created             podsandbox1-wasm-wasi   0                   7992e75df00cc\n\n# Start the container\n$ sudo crictl start $CONTAINER_ID\n\n# Check the container status again.\n# If the container is not finishing its job, you will see the Running state\n# Because this example is very tiny. You may see Exited at this moment.\n$ sudo crictl ps -a\nCONTAINER           IMAGE                                          CREATED              STATE               NAME                     ATTEMPT             POD ID\n1d056e4a8a168       wasmedge/example-wasi:latest                   About a minute ago   Running             podsandbox1-wasm-wasi   0                   7992e75df00cc\n\n# When the container is finished. You can see the state becomes Exited.\n$ sudo crictl ps -a\nCONTAINER           IMAGE                                          CREATED              STATE               NAME                     ATTEMPT             POD ID\n1d056e4a8a168       wasmedge/example-wasi:latest                   About a minute ago   Exited              podsandbox1-wasm-wasi   0                   7992e75df00cc\n\n# Check the container's logs. It should show outputs from the WebAssembly programs\n$ sudo crictl logs $CONTAINER_ID\n\nTest 1: Print Random Number\nRandom number: 960251471\n\nTest 2: Print Random Bytes\nRandom bytes: [50, 222, 62, 128, 120, 26, 64, 42, 210, 137, 176, 90, 60, 24, 183, 56, 150, 35, 209, 211, 141, 146, 2, 61, 215, 167, 194, 1, 15, 44, 156, 27, 179, 23, 241, 138, 71, 32, 173, 159, 180, 21, 198, 197, 247, 80, 35, 75, 245, 31, 6, 246, 23, 54, 9, 192, 3, 103, 72, 186, 39, 182, 248, 80, 146, 70, 244, 28, 166, 197, 17, 42, 109, 245, 83, 35, 106, 130, 233, 143, 90, 78, 155, 29, 230, 34, 58, 49, 234, 230, 145, 119, 83, 44, 111, 57, 164, 82, 120, 183, 194, 201, 133, 106, 3, 73, 164, 155, 224, 218, 73, 31, 54, 28, 124, 2, 38, 253, 114, 222, 217, 202, 59, 138, 155, 71, 178, 113]\n\nTest 3: Call an echo function\nPrinted from wasi: This is from a main function\nThis is from a main function\n\nTest 4: Print Environment Variables\nThe env vars are as follows.\nPATH: /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\nTERM: xterm\nHOSTNAME: crictl_host\nPATH: /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\nThe args are as follows.\n/var/lib/containers/storage/overlay/006e7cf16e82dc7052994232c436991f429109edea14a8437e74f601b5ee1e83/merged/wasi_example_main.wasm\n50000000\n\nTest 5: Create a file `/tmp.txt` with content `This is in a file`\n\nTest 6: Read the content from the previous file\nFile content is This is in a file\n\nTest 7: Delete the previous file\n")),(0,r.kt)("p",null,"Next, you can try to run the app in ","[Kubernetes]","!"),(0,r.kt)("h2",{id:"run-a-http-server-app"},"Run a HTTP server app"),(0,r.kt)("p",null,"Finally, we can run a simple WebAssembly-based HTTP micro-service in CRI-O.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/http_server_wasi_app.md"},"A separate article")," explains how to compile, package, and publish the WebAssembly program as a container image to Docker hub.\nIn this section, we will start off pulling this WebAssembly-based container image from Docker hub using CRI-O tools."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo crictl pull docker.io/avengermojo/http_server:with-wasm-annotation\n")),(0,r.kt)("p",null,"Next, we need to create two simple configuration files that specifies how CRI-O should run this WebAssembly image in a sandbox. We already have those two files ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/second-state/wasmedge-containers-examples/main/crio/http_server/container_http_server.json"},"container_http_server.json")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/crio/sandbox_config.json"},"sandbox_config.json"),".\nYou can just download them to your local directory as follows."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sandbox_config.json")," file is the same for the simple WASI example and the HTTP server example. The other ",(0,r.kt)("inlineCode",{parentName:"p"},"container_*.json")," file is application specific as it contains the application's Docker Hub URL.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/second-state/wasmedge-containers-examples/main/crio/sandbox_config.json\nwget https://raw.githubusercontent.com/second-state/wasmedge-containers-examples/main/crio/http_server/container_http_server.json\n")),(0,r.kt)("p",null,"Now you can use CRI-O to create a pod and a container using the specified configurations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Create the POD. Output will be different from example.\n$ sudo crictl runp sandbox_config.json\n7992e75df00cc1cf4bff8bff660718139e3ad973c7180baceb9c84d074b516a4\n# Set a helper variable for later use.\n$ POD_ID=7992e75df00cc1cf4bff8bff660718139e3ad973c7180baceb9c84d074b516a4\n\n# Create the container instance. Output will be different from example.\n$ sudo crictl create $POD_ID container_http_server.json sandbox_config.json\n# Set a helper variable for later use.\nCONTAINER_ID=1d056e4a8a168f0c76af122d42c98510670255b16242e81f8e8bce8bd3a4476f\n")),(0,r.kt)("p",null,"Starting the container would execute the WebAssembly program. You can see the output in the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Start the container\n$ sudo crictl start $CONTAINER_ID\n\n# Check the container status. It should be Running. \n# If not, wait a few seconds and check again\n$ sudo crictl ps -a\nCONTAINER           IMAGE                                          CREATED                  STATE               NAME                ATTEMPT             POD ID\n4eeddf8613691       wasmedge/example-wasi-http:latest              Less than a second ago   Running             http_server         0                   1d84f30e7012e\n\n# Check the container's logs to see the HTTP server is listening at port 1234\n$ sudo crictl logs $CONTAINER_ID\nnew connection at 1234\n\n# Get the IP address assigned to the container\n$ sudo crictl inspect $CONTAINER_ID | grep IP.0 | cut -d: -f 2 | cut -d'\"' -f 2\n10.85.0.2\n\n# Test the HTTP service at that IP address\n$ curl -d \"name=WasmEdge\" -X POST http://10.85.0.2:1234\necho: name=WasmEdge\n")),(0,r.kt)("p",null,"Next, you can try to run it in ","[Kubernetes]","!"))}p.isMDXComponent=!0}}]);