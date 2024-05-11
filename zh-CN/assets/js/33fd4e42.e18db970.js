"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[44572],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),g=r,f=p["".concat(s,".").concat(g)]||p[g]||m[g]||o;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},14916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const o={sidebar_position:2},l=void 0,i={unversionedId:"concept/config",id:"concept/config",title:"config",description:"----------------",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/concept/config.md",sourceDirName:"concept",slug:"/concept/config",permalink:"/zh-CN/docs/concept/config",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/concept/config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Set Up with Kubernetes",permalink:"/zh-CN/docs/start-v2/kubernetes/"},next:{title:"Connector V2 \u529f\u80fd\u7b80\u4ecb",permalink:"/zh-CN/docs/concept/connector-v2-features"}},s={},c=[{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784",id:"\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784",level:2},{value:"hocon",id:"hocon",level:3},{value:"\u591a\u884c\u6587\u672c\u652f\u6301",id:"\u591a\u884c\u6587\u672c\u652f\u6301",level:4},{value:"json",id:"json",level:3},{value:"env",id:"env",level:3},{value:"source",id:"source",level:3},{value:"transform",id:"transform",level:3},{value:"sink",id:"sink",level:3},{value:"\u5176\u5b83",id:"\u5176\u5b83",level:3},{value:"\u6b64\u5916",id:"\u6b64\u5916",level:2}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("hr",null),(0,r.yg)("h1",{id:"\u914d\u7f6e\u6587\u4ef6\u7b80\u4ecb"},"\u914d\u7f6e\u6587\u4ef6\u7b80\u4ecb"),(0,r.yg)("p",null,"In SeaTunnel, the most important thing is the Config file, through which users can customize their own data\nsynchronization requirements to maximize the potential of SeaTunnel. So next, I will introduce you how to\nconfigure the Config file."),(0,r.yg)("p",null,"\u5728SeaTunnel\u4e2d\uff0c\u6700\u91cd\u8981\u7684\u4e8b\u60c5\u5c31\u662f\u914d\u7f6e\u6587\u4ef6\uff0c\u5c3d\u7ba1\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4ed6\u4eec\u81ea\u5df1\u7684\u6570\u636e\u540c\u6b65\u9700\u6c42\u4ee5\u53d1\u6325SeaTunnel\u6700\u5927\u7684\u6f5c\u529b\u3002\u90a3\u4e48\u63a5\u4e0b\u6765\uff0c\n\u6211\u5c06\u4f1a\u5411\u4f60\u4ecb\u7ecd\u5982\u4f55\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.yg)("p",null,"The main format of the Config file is ",(0,r.yg)("inlineCode",{parentName:"p"},"hocon"),", for more details of this format type you can refer to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON-GUIDE"),",\nBTW, we also support the ",(0,r.yg)("inlineCode",{parentName:"p"},"json")," format, but you should know that the name of the config file should end with ",(0,r.yg)("inlineCode",{parentName:"p"},".json")),(0,r.yg)("p",null,"\u914d\u7f6e\u6587\u4ef6\u7684\u4e3b\u8981\u683c\u5f0f\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"hocon"),", \u6709\u5173\u8be5\u683c\u5f0f\u7c7b\u578b\u7684\u66f4\u591a\u4fe1\u606f\u4f60\u53ef\u4ee5\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON-GUIDE"),",\n\u987a\u4fbf\u63d0\u4e00\u4e0b\uff0c\u6211\u4eec\u4e5f\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"p"},"json"),"\u683c\u5f0f\uff0c\u4f46\u4f60\u5e94\u8be5\u77e5\u9053\u914d\u7f6e\u6587\u4ef6\u7684\u540d\u79f0\u5e94\u8be5\u662f\u4ee5 ",(0,r.yg)("inlineCode",{parentName:"p"},".json"),"\u7ed3\u5c3e\u3002"),(0,r.yg)("p",null,"We also support the ",(0,r.yg)("inlineCode",{parentName:"p"},"SQL")," format, for details, please refer to the ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/concept/sql-config"},"SQL configuration")," file."),(0,r.yg)("p",null,"\u6211\u4eec\u540c\u65f6\u63d0\u4f9b\u4e86\u4ee5 ",(0,r.yg)("inlineCode",{parentName:"p"},"SQL")," \u683c\u5f0f\uff0c\u8be6\u7ec6\u53ef\u4ee5\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/concept/sql-config"},"SQL\u914d\u7f6e\u6587\u4ef6"),"\u3002"),(0,r.yg)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,r.yg)("p",null,"\u5728\u4f60\u9605\u8bfb\u4e4b\u524d\uff0c\u4f60\u53ef\u4ee5\u5728\u53d1\u5e03\u5305\u4e2d\u7684config\u76ee\u5f55",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/tree/dev/config"},"\u8fd9\u91cc"),"\u627e\u5230\u914d\u7f6e\u6587\u4ef6\u7684\u4f8b\u5b50\u3002"),(0,r.yg)("h2",{id:"\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784"},"\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784"),(0,r.yg)("p",null,"\u914d\u7f6e\u6587\u4ef6\u7c7b\u4f3c\u4e0b\u9762\u3002"),(0,r.yg)("h3",{id:"hocon"},"hocon"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    result_table_name = "fake"\n    row.num = 100\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n        card = "int"\n      }\n    }\n  }\n}\n\ntransform {\n  Filter {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    fields = [name, card]\n  }\n}\n\nsink {\n  Clickhouse {\n    host = "clickhouse:8123"\n    database = "default"\n    table = "seatunnel_console"\n    fields = ["name", "card"]\n    username = "default"\n    password = ""\n    source_table_name = "fake1"\n  }\n}\n')),(0,r.yg)("h4",{id:"\u591a\u884c\u6587\u672c\u652f\u6301"},"\u591a\u884c\u6587\u672c\u652f\u6301"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"hocon"),"\u652f\u6301\u591a\u884c\u5b57\u7b26\u4e32\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5305\u542b\u8f83\u957f\u7684\u6587\u672c\u6bb5\u843d\uff0c\u800c\u4e0d\u5fc5\u62c5\u5fc3\u6362\u884c\u7b26\u6216\u7279\u6b8a\u683c\u5f0f\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5c06\u6587\u672c\u62ec\u5728\u4e09\u5c42\u5f15\u53f7 ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},'"""'))," \u4e2d\u6765\u5b9e\u73b0\u3002\u4f8b\u5982:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'var = """\nApache SeaTunnel is a\nnext-generation high-performance,\ndistributed, massive data integration tool.\n"""\nsql = """ select * from "table" """\n')),(0,r.yg)("h3",{id:"json"},"json"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n  "env": {\n    "job.mode": "batch"\n  },\n  "source": [\n    {\n      "plugin_name": "FakeSource",\n      "result_table_name": "fake",\n      "row.num": 100,\n      "schema": {\n        "fields": {\n          "name": "string",\n          "age": "int",\n          "card": "int"\n        }\n      }\n    }\n  ],\n  "transform": [\n    {\n      "plugin_name": "Filter",\n      "source_table_name": "fake",\n      "result_table_name": "fake1",\n      "fields": ["name", "card"]\n    }\n  ],\n  "sink": [\n    {\n      "plugin_name": "Clickhouse",\n      "host": "clickhouse:8123",\n      "database": "default",\n      "table": "seatunnel_console",\n      "fields": ["name", "card"],\n      "username": "default",\n      "password": "",\n      "source_table_name": "fake1"\n    }\n  ]\n}\n\n')),(0,r.yg)("p",null,"\u6b63\u5982\u4f60\u770b\u5230\u7684\uff0c\u914d\u7f6e\u6587\u4ef6\u5305\u62ec\u51e0\u4e2a\u90e8\u5206\uff1aenv, source, transform, sink\u3002\u4e0d\u540c\u7684\u6a21\u5757\u6709\u4e0d\u540c\u7684\u529f\u80fd\u3002\n\u5f53\u4f60\u4e86\u89e3\u4e86\u8fd9\u4e9b\u6a21\u5757\u540e\uff0c\u4f60\u5c31\u4f1a\u61c2\u5f97SeaTunnel\u5982\u4f55\u5de5\u4f5c\u3002"),(0,r.yg)("h3",{id:"env"},"env"),(0,r.yg)("p",null,"\u7528\u4e8e\u6dfb\u52a0\u5f15\u64ce\u53ef\u9009\u7684\u53c2\u6570\uff0c\u4e0d\u7ba1\u662f\u4ec0\u4e48\u5f15\u64ce\uff08Spark \u6216\u8005 Flink\uff09\uff0c\u5bf9\u5e94\u7684\u53ef\u9009\u53c2\u6570\u5e94\u8be5\u5728\u8fd9\u91cc\u586b\u5199\u3002"),(0,r.yg)("p",null,"\u6ce8\u610f\uff0c\u6211\u4eec\u6309\u7167\u5f15\u64ce\u5206\u79bb\u4e86\u53c2\u6570\uff0c\u5bf9\u4e8e\u516c\u5171\u53c2\u6570\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u4ee5\u524d\u4e00\u6837\u914d\u7f6e\u3002\u5bf9\u4e8eFlink\u548cSpark\u5f15\u64ce\uff0c\u5176\u53c2\u6570\u7684\u5177\u4f53\u914d\u7f6e\u89c4\u5219\u53ef\u4ee5\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/concept/JobEnvConfig"},"JobEnvConfig"),"\u3002"),(0,r.yg)("h3",{id:"source"},"source"),(0,r.yg)("p",null,"source\u7528\u4e8e\u5b9a\u4e49SeaTunnel\u5728\u54ea\u513f\u68c0\u7d22\u6570\u636e\uff0c\u5e76\u5c06\u68c0\u7d22\u7684\u6570\u636e\u7528\u4e8e\u4e0b\u4e00\u6b65\u3002\n\u53ef\u4ee5\u540c\u65f6\u5b9a\u4e49\u591a\u4e2asource\u3002\u76ee\u524d\u652f\u6301\u7684source\u8bf7\u770b",(0,r.yg)("a",{parentName:"p",href:"../../en/connector-v2/source"},"Source of SeaTunnel"),"\u3002\u6bcf\u79cdsource\u90fd\u6709\u81ea\u5df1\u7279\u5b9a\u7684\u53c2\u6570\u7528\u6765\n\u5b9a\u4e49\u5982\u4f55\u68c0\u7d22\u6570\u636e\uff0cSeaTunnel\u4e5f\u62bd\u8c61\u4e86\u6bcf\u79cdsource\u6240\u4f7f\u7528\u7684\u53c2\u6570\uff0c\u4f8b\u5982 ",(0,r.yg)("inlineCode",{parentName:"p"},"result_table_name")," \u53c2\u6570\uff0c\u7528\u4e8e\u6307\u5b9a\u5f53\u524dsource\u751f\u6210\u7684\u6570\u636e\u7684\u540d\u79f0\uff0c\n\u65b9\u4fbf\u540e\u7eed\u5176\u4ed6\u6a21\u5757\u4f7f\u7528\u3002"),(0,r.yg)("h3",{id:"transform"},"transform"),(0,r.yg)("p",null,"\u5f53\u6211\u4eec\u6709\u4e86\u6570\u636e\u6e90\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u8fdb\u4e00\u6b65\u7684\u5904\u7406\uff0c\u6240\u4ee5\u6211\u4eec\u5c31\u6709\u4e86transform\u6a21\u5757\u3002\u5f53\u7136\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e86\u201c\u53ef\u80fd\u201d\u8fd9\u4e2a\u8bcd\uff0c\n\u8fd9\u610f\u5473\u7740\u6211\u4eec\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5c06transform\u89c6\u4e3a\u4e0d\u5b58\u5728\uff0c\u76f4\u63a5\u4ecesource\u5230sink\u3002\u50cf\u4e0b\u9762\u8fd9\u6837\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    result_table_name = "fake"\n    row.num = 100\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n        card = "int"\n      }\n    }\n  }\n}\n\nsink {\n  Clickhouse {\n    host = "clickhouse:8123"\n    database = "default"\n    table = "seatunnel_console"\n    fields = ["name", "age", "card"]\n    username = "default"\n    password = ""\n    source_table_name = "fake1"\n  }\n}\n')),(0,r.yg)("p",null,"\u4e0esource\u7c7b\u4f3c, transform\u4e5f\u6709\u5c5e\u4e8e\u6bcf\u4e2a\u6a21\u5757\u7684\u7279\u5b9a\u53c2\u6570\u3002\u76ee\u524d\u652f\u6301\u7684source\u8bf7\u770b\u3002\u76ee\u524d\u652f\u6301\u7684transform\u8bf7\u770b ",(0,r.yg)("a",{parentName:"p",href:"../../en/transform-v2"},"Transform V2 of SeaTunnel")),(0,r.yg)("h3",{id:"sink"},"sink"),(0,r.yg)("p",null,"\u6211\u4eec\u4f7f\u7528SeaTunnel\u7684\u4f5c\u7528\u662f\u5c06\u6570\u636e\u4ece\u4e00\u4e2a\u5730\u65b9\u540c\u6b65\u5230\u5176\u5b83\u5730\u65b9\uff0c\u6240\u4ee5\u5b9a\u4e49\u6570\u636e\u5982\u4f55\u5199\u5165\uff0c\u5199\u5165\u5230\u54ea\u91cc\u662f\u81f3\u5173\u91cd\u8981\u7684\u3002\u901a\u8fc7SeaTunnel\u63d0\u4f9b\u7684\nsink\u6a21\u5757\uff0c\u4f60\u53ef\u4ee5\u5feb\u901f\u9ad8\u6548\u5730\u5b8c\u6210\u8fd9\u4e2a\u64cd\u4f5c\u3002Sink\u548csource\u975e\u5e38\u76f8\u4f3c\uff0c\u533a\u522b\u5728\u4e8e\u8bfb\u53d6\u548c\u5199\u5165\u3002\u6240\u4ee5\u53bb\u770b\u770b\u6211\u4eec",(0,r.yg)("a",{parentName:"p",href:"../../en/connector-v2/sink"},"\u652f\u6301\u7684sink"),"\u5427\u3002"),(0,r.yg)("h3",{id:"\u5176\u5b83"},"\u5176\u5b83"),(0,r.yg)("p",null,"\u4f60\u4f1a\u7591\u60d1\u5f53\u5b9a\u4e49\u4e86\u591a\u4e2asource\u548c\u591a\u4e2asink\u65f6\uff0c\u6bcf\u4e2asink\u8bfb\u53d6\u54ea\u4e9b\u6570\u636e\uff0c\u6bcf\u4e2atransform\u8bfb\u53d6\u54ea\u4e9b\u6570\u636e\uff1f\u6211\u4eec\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"result_table_name")," \u548c\n",(0,r.yg)("inlineCode",{parentName:"p"},"source_table_name")," \u4e24\u4e2a\u952e\u914d\u7f6e\u3002\u6bcf\u4e2asource\u6a21\u5757\u90fd\u4f1a\u914d\u7f6e\u4e00\u4e2a",(0,r.yg)("inlineCode",{parentName:"p"},"result_table_name"),"\u6765\u6307\u793a\u6570\u636e\u6e90\u751f\u6210\u7684\u6570\u636e\u6e90\u540d\u79f0\uff0c\u5176\u5b83transform\u548csink\n\u6a21\u5757\u53ef\u4ee5\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"source_table_name")," \u5f15\u7528\u76f8\u5e94\u7684\u6570\u636e\u6e90\u540d\u79f0\uff0c\u8868\u793a\u8981\u8bfb\u53d6\u6570\u636e\u8fdb\u884c\u5904\u7406\u3002\u7136\u540etransform\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u4e2d\u95f4\u7684\u5904\u7406\u6a21\u5757\uff0c\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\n",(0,r.yg)("inlineCode",{parentName:"p"},"result_table_name")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"source_table_name")," \u914d\u7f6e\u3002\u4f46\u4f60\u4f1a\u53d1\u73b0\u5728\u4e0a\u9762\u7684\u914d\u7f6e\u4f8b\u5b50\u4e2d\uff0c\u4e0d\u662f\u6bcf\u4e2a\u6a21\u5757\u90fd\u914d\u7f6e\u4e86\u8fd9\u4e9b\u53c2\u6570\uff0c\u56e0\u4e3a\u5728SeaTunnel\u4e2d\uff0c\n\u6709\u4e00\u4e2a\u9ed8\u8ba4\u7684\u7ea6\u5b9a\uff0c\u5982\u679c\u8fd9\u4e24\u4e2a\u53c2\u6570\u6ca1\u6709\u914d\u7f6e\uff0c\u5219\u4f7f\u7528\u4e0a\u4e00\u4e2a\u8282\u70b9\u7684\u6700\u540e\u4e00\u4e2a\u6a21\u5757\u751f\u6210\u7684\u6570\u636e\u3002\u5f53\u53ea\u6709\u4e00\u4e2asource\u65f6\u8fd9\u662f\u975e\u5e38\u65b9\u4fbf\u7684\u3002"),(0,r.yg)("h2",{id:"\u6b64\u5916"},"\u6b64\u5916"),(0,r.yg)("p",null,"\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u683c\u5f0f\u914d\u7f6e\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON"),"\u3002"))}m.isMDXComponent=!0}}]);