"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[61174],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=u(t),m=r,y=g["".concat(i,".").concat(m)]||g[m]||d[m]||l;return t?a.createElement(y,o(o({ref:n},p),{},{components:t})):a.createElement(y,o({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},30850:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=t(58168),r=(t(96540),t(15680));const l={sidebar_position:7},o=void 0,s={unversionedId:"seatunnel-engine/rest-api",id:"seatunnel-engine/rest-api",title:"rest-api",description:"----------------",source:"@site/docs/seatunnel-engine/rest-api.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/rest-api",permalink:"/docs/seatunnel-engine/rest-api",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/seatunnel-engine/rest-api.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docs",previous:{title:"checkpoint-storage",permalink:"/docs/seatunnel-engine/checkpoint-storage"},next:{title:"tcp",permalink:"/docs/seatunnel-engine/tcp"}},i={},u=[{value:"Overview",id:"overview",level:2},{value:"API reference",id:"api-reference",level:2},{value:"Returns an overview over all jobs and their current state.",id:"returns-an-overview-over-all-jobs-and-their-current-state",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Responses",id:"responses",level:4},{value:"Return details of a job.",id:"return-details-of-a-job",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Responses",id:"responses-1",level:4},{value:"Return details of a job.",id:"return-details-of-a-job-1",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Responses",id:"responses-2",level:4},{value:"Return all finished Jobs Info.",id:"return-all-finished-jobs-info",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Responses",id:"responses-3",level:4},{value:"Returns system monitoring information.",id:"returns-system-monitoring-information",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Responses",id:"responses-4",level:4},{value:"Submit Job.",id:"submit-job",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Body",id:"body",level:4},{value:"Responses",id:"responses-5",level:4},{value:"Stop Job.",id:"stop-job",level:3},{value:"Body",id:"body-1",level:4},{value:"Responses",id:"responses-6",level:4},{value:"Encrypt Config.",id:"encrypt-config",level:3},{value:"Body",id:"body-2",level:4},{value:"Responses",id:"responses-7",level:4}],p={toc:u},g="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("hr",null),(0,r.yg)("h1",{id:"rest-api"},"REST API"),(0,r.yg)("p",null,"SeaTunnel has a monitoring API that can be used to query status and statistics of running jobs, as well as recent\ncompleted jobs. The monitoring API is a REST-ful API that accepts HTTP requests and responds with JSON data."),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"The monitoring API is backed by a web server that runs as part of the node, each node member can provide rest api capability.\nBy default, this server listens at port 5801, which can be configured in hazelcast.yaml like :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"network:\n    rest-api:\n      enabled: true\n      endpoint-groups:\n        CLUSTER_WRITE:\n          enabled: true\n        DATA:\n          enabled: true\n    join:\n      tcp-ip:\n        enabled: true\n        member-list:\n          - localhost\n    port:\n      auto-increment: true\n      port-count: 100\n      port: 5801\n")),(0,r.yg)("h2",{id:"api-reference"},"API reference"),(0,r.yg)("h3",{id:"returns-an-overview-over-all-jobs-and-their-current-state"},"Returns an overview over all jobs and their current state."),(0,r.yg)("details",null,(0,r.yg)("summary",null,(0,r.yg)("code",null,"GET")," ",(0,r.yg)("code",null,(0,r.yg)("b",null,"/hazelcast/rest/maps/running-jobs"))," ",(0,r.yg)("code",null,"(Returns an overview over all jobs and their current state.)")),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("h4",{id:"responses"},"Responses"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jobId": "",\n    "jobName": "",\n    "jobStatus": "",\n    "envOptions": {\n    },\n    "createTime": "",\n    "jobDag": {\n      "vertices": [\n      ],\n      "edges": [\n      ]\n    },\n    "pluginJarsUrls": [\n    ],\n    "isStartWithSavePoint": false,\n    "metrics": {\n      "sourceReceivedCount": "",\n      "sinkWriteCount": ""\n    }\n  }\n]\n'))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"return-details-of-a-job"},"Return details of a job."),(0,r.yg)("details",null,(0,r.yg)("summary",null,(0,r.yg)("code",null,"GET")," ",(0,r.yg)("code",null,(0,r.yg)("b",null,"/hazelcast/rest/maps/job-info/:jobId"))," ",(0,r.yg)("code",null,"(Return details of a job. )")),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("blockquote",null,(0,r.yg)("table",{parentName:"blockquote"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"data type"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jobId"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"job id"))))),(0,r.yg)("h4",{id:"responses-1"},"Responses"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId": "",\n  "jobName": "",\n  "jobStatus": "",\n  "createTime": "",\n  "jobDag": {\n    "vertices": [\n    ],\n    "edges": [\n    ]\n  },\n  "metrics": {\n    "sourceReceivedCount": "",\n    "sinkWriteCount": ""\n  },\n  "finishedTime": "",\n  "errorMsg": null,\n  "envOptions": {\n  },\n  "pluginJarsUrls": [\n  ],\n  "isStartWithSavePoint": false\n}\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"jobId"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"jobName"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"jobStatus"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"createTime"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"jobDag"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"metrics")," always be returned.\n",(0,r.yg)("inlineCode",{parentName:"p"},"envOptions"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"pluginJarsUrls"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"isStartWithSavePoint")," will return when job is running.\n",(0,r.yg)("inlineCode",{parentName:"p"},"finishedTime"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"errorMsg")," will return when job is finished."),(0,r.yg)("p",null,"When we can't get the job info, the response will be:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId" : ""\n}\n'))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"return-details-of-a-job-1"},"Return details of a job."),(0,r.yg)("p",null,"This API has been deprecated, please use /hazelcast/rest/maps/job-info/:jobId instead"),(0,r.yg)("details",null,(0,r.yg)("summary",null,(0,r.yg)("code",null,"GET")," ",(0,r.yg)("code",null,(0,r.yg)("b",null,"/hazelcast/rest/maps/running-job/:jobId"))," ",(0,r.yg)("code",null,"(Return details of a job. )")),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("blockquote",null,(0,r.yg)("table",{parentName:"blockquote"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"data type"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jobId"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"job id"))))),(0,r.yg)("h4",{id:"responses-2"},"Responses"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId": "",\n  "jobName": "",\n  "jobStatus": "",\n  "createTime": "",\n  "jobDag": {\n    "vertices": [\n    ],\n    "edges": [\n    ]\n  },\n  "metrics": {\n    "sourceReceivedCount": "",\n    "sinkWriteCount": ""\n  },\n  "finishedTime": "",\n  "errorMsg": null,\n  "envOptions": {\n  },\n  "pluginJarsUrls": [\n  ],\n  "isStartWithSavePoint": false\n}\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"jobId"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"jobName"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"jobStatus"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"createTime"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"jobDag"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"metrics")," always be returned.\n",(0,r.yg)("inlineCode",{parentName:"p"},"envOptions"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"pluginJarsUrls"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"isStartWithSavePoint")," will return when job is running.\n",(0,r.yg)("inlineCode",{parentName:"p"},"finishedTime"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"errorMsg")," will return when job is finished."),(0,r.yg)("p",null,"When we can't get the job info, the response will be:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId" : ""\n}\n'))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"return-all-finished-jobs-info"},"Return all finished Jobs Info."),(0,r.yg)("details",null,(0,r.yg)("summary",null,(0,r.yg)("code",null,"GET")," ",(0,r.yg)("code",null,(0,r.yg)("b",null,"/hazelcast/rest/maps/finished-jobs/:state"))," ",(0,r.yg)("code",null,"(Return all finished Jobs Info.)")),(0,r.yg)("h4",{id:"parameters-3"},"Parameters"),(0,r.yg)("blockquote",null,(0,r.yg)("table",{parentName:"blockquote"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"data type"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"state"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"finished job status. ",(0,r.yg)("inlineCode",{parentName:"td"},"FINISHED"),",",(0,r.yg)("inlineCode",{parentName:"td"},"CANCELED"),",",(0,r.yg)("inlineCode",{parentName:"td"},"FAILED"),",",(0,r.yg)("inlineCode",{parentName:"td"},"UNKNOWABLE")))))),(0,r.yg)("h4",{id:"responses-3"},"Responses"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jobId": "",\n    "jobName": "",\n    "jobStatus": "",\n    "errorMsg": null,\n    "createTime": "",\n    "finishTime": "",\n    "jobDag": "",\n    "metrics": ""\n  }\n]\n'))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"returns-system-monitoring-information"},"Returns system monitoring information."),(0,r.yg)("details",null,(0,r.yg)("summary",null,(0,r.yg)("code",null,"GET")," ",(0,r.yg)("code",null,(0,r.yg)("b",null,"/hazelcast/rest/maps/system-monitoring-information"))," ",(0,r.yg)("code",null,"(Returns system monitoring information.)")),(0,r.yg)("h4",{id:"parameters-4"},"Parameters"),(0,r.yg)("h4",{id:"responses-4"},"Responses"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "processors":"8",\n    "physical.memory.total":"16.0G",\n    "physical.memory.free":"16.3M",\n    "swap.space.total":"0",\n    "swap.space.free":"0",\n    "heap.memory.used":"135.7M",\n    "heap.memory.free":"440.8M",\n    "heap.memory.total":"576.5M",\n    "heap.memory.max":"3.6G",\n    "heap.memory.used/total":"23.54%",\n    "heap.memory.used/max":"3.73%",\n    "minor.gc.count":"6",\n    "minor.gc.time":"110ms",\n    "major.gc.count":"2",\n    "major.gc.time":"73ms",\n    "load.process":"24.78%",\n    "load.system":"60.00%",\n    "load.systemAverage":"2.07",\n    "thread.count":"117",\n    "thread.peakCount":"118",\n    "cluster.timeDiff":"0",\n    "event.q.size":"0",\n    "executor.q.async.size":"0",\n    "executor.q.client.size":"0",\n    "executor.q.client.query.size":"0",\n    "executor.q.client.blocking.size":"0",\n    "executor.q.query.size":"0",\n    "executor.q.scheduled.size":"0",\n    "executor.q.io.size":"0",\n    "executor.q.system.size":"0",\n    "executor.q.operations.size":"0",\n    "executor.q.priorityOperation.size":"0",\n    "operations.completed.count":"10",\n    "executor.q.mapLoad.size":"0",\n    "executor.q.mapLoadAllKeys.size":"0",\n    "executor.q.cluster.size":"0",\n    "executor.q.response.size":"0",\n    "operations.running.count":"0",\n    "operations.pending.invocations.percentage":"0.00%",\n    "operations.pending.invocations.count":"0",\n    "proxy.count":"8",\n    "clientEndpoint.count":"0",\n    "connection.active.count":"2",\n    "client.connection.count":"0",\n    "connection.count":"0"\n  }\n]\n'))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"submit-job"},"Submit Job."),(0,r.yg)("details",null,(0,r.yg)("summary",null,(0,r.yg)("code",null,"POST")," ",(0,r.yg)("code",null,(0,r.yg)("b",null,"/hazelcast/rest/maps/submit-job"))," ",(0,r.yg)("code",null,"(Returns jobId and jobName if job submitted successfully.)")),(0,r.yg)("h4",{id:"parameters-5"},"Parameters"),(0,r.yg)("blockquote",null,(0,r.yg)("table",{parentName:"blockquote"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"data type"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jobId"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"job id")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jobName"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"job name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"isStartWithSavePoint"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"if job is started with save point"))))),(0,r.yg)("h4",{id:"body"},"Body"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "env": {\n        "job.mode": "batch"\n    },\n    "source": [\n        {\n            "plugin_name": "FakeSource",\n            "result_table_name": "fake",\n            "row.num": 100,\n            "schema": {\n                "fields": {\n                    "name": "string",\n                    "age": "int",\n                    "card": "int"\n                }\n            }\n        }\n    ],\n    "transform": [\n    ],\n    "sink": [\n        {\n            "plugin_name": "Console",\n            "source_table_name": ["fake"]\n        }\n    ]\n}\n')),(0,r.yg)("h4",{id:"responses-5"},"Responses"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "jobId": 733584788375666689,\n    "jobName": "rest_api_test"\n}\n'))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"stop-job"},"Stop Job."),(0,r.yg)("details",null,(0,r.yg)("summary",null,(0,r.yg)("code",null,"POST")," ",(0,r.yg)("code",null,(0,r.yg)("b",null,"/hazelcast/rest/maps/stop-job"))," ",(0,r.yg)("code",null,"(Returns jobId if job stoped successfully.)")),(0,r.yg)("h4",{id:"body-1"},"Body"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "jobId": 733584788375666689,\n    "isStopWithSavePoint": false # if job is stopped with save point\n}\n')),(0,r.yg)("h4",{id:"responses-6"},"Responses"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n"jobId": 733584788375666689\n}\n'))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"encrypt-config"},"Encrypt Config."),(0,r.yg)("details",null,(0,r.yg)("summary",null,(0,r.yg)("code",null,"POST")," ",(0,r.yg)("code",null,(0,r.yg)("b",null,"/hazelcast/rest/maps/encrypt-config"))," ",(0,r.yg)("code",null,"(Returns the encrypted config if config is encrypted successfully.)")),"For more information about customize encryption, please refer to the documentation [config-encryption-decryption](/docs/connector-v2/Config-Encryption-Decryption).",(0,r.yg)("h4",{id:"body-2"},"Body"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "env": {\n        "parallelism": 1,\n        "shade.identifier":"base64"\n    },\n    "source": [\n        {\n            "plugin_name": "MySQL-CDC",\n            "schema" : {\n                "fields": {\n                    "name": "string",\n                    "age": "int"\n                }\n            },\n            "result_table_name": "fake",\n            "parallelism": 1,\n            "hostname": "127.0.0.1",\n            "username": "seatunnel",\n            "password": "seatunnel_password",\n            "table-name": "inventory_vwyw0n"\n        }\n    ],\n    "transform": [\n    ],\n    "sink": [\n        {\n            "plugin_name": "Clickhouse",\n            "host": "localhost:8123",\n            "database": "default",\n            "table": "fake_all",\n            "username": "seatunnel",\n            "password": "seatunnel_password"\n        }\n    ]\n}\n')),(0,r.yg)("h4",{id:"responses-7"},"Responses"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "env": {\n        "parallelism": 1,\n        "shade.identifier": "base64"\n    },\n    "source": [\n        {\n            "plugin_name": "MySQL-CDC",\n            "schema": {\n                "fields": {\n                    "name": "string",\n                    "age": "int"\n                }\n            },\n            "result_table_name": "fake",\n            "parallelism": 1,\n            "hostname": "127.0.0.1",\n            "username": "c2VhdHVubmVs",\n            "password": "c2VhdHVubmVsX3Bhc3N3b3Jk",\n            "table-name": "inventory_vwyw0n"\n        }\n    ],\n    "transform": [],\n    "sink": [\n        {\n            "plugin_name": "Clickhouse",\n            "host": "localhost:8123",\n            "database": "default",\n            "table": "fake_all",\n            "username": "c2VhdHVubmVs",\n            "password": "c2VhdHVubmVsX3Bhc3N3b3Jk"\n        }\n    ]\n}\n'))))}d.isMDXComponent=!0}}]);